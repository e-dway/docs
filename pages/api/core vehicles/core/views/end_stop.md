La funzione `end_trip` gestisce la conclusione di un noleggio per un veicolo. Questa API esegue diverse validazioni e calcoli, come il costo del noleggio, la verifica di pre-autorizzazioni Stripe, e la gestione di wallet utente o pacchetti attivi. A seconda del risultato, conclude il noleggio con successo o fornisce messaggi di errore appropriati.

---

### **Definizione della Funzione**
```python
@api.post('/vehicle/{id}/stop')
def end_trip(request, id, user: str, client: str, lat: float, lng: float, mode="stop", force: str="False"):
```

---

### **Parametri**

1. **`request`**: La richiesta HTTP ricevuta.
2. **`id`**: L'identificativo del veicolo noleggiato.
3. **`user`**: L'utente che ha noleggiato il veicolo.
4. **`client`**: L'identificativo del proprietario del veicolo.
5. **`lat`**, **`lng`**: Coordinate GPS al momento della richiesta.
6. **`mode`**: La modalità di chiusura del trip (`stop` o `pause`).
7. **`force`**: Indica se forzare l'operazione nonostante eventuali blocchi.

---

### **Flusso Operativo**

#### **1. Registrazione del Log**
- Registra un log dell'azione richiesta con un timestamp.

```python
l = VehicleLog()
l.vehicle = id
l.timestamp = datetime.datetime.now()
l.logtype = "usercommand"
l.data = {"command": mode}
l.save()
```

---

#### **2. Configurazioni Client e Profilo Utente**
- Recupera le configurazioni del cliente e i dettagli dell'utente.

```python
conf = get_client(client, user="sirmmo@gmail.com")
up = get_user_profile(user, client)
```

---

#### **3. Verifica delle Condizioni per la Chiusura**
- **Forza di chiusura**: Se non forzata, verifica con il sistema IoT se è possibile bloccare il veicolo.

```python
if force == "False":
    iot_command_data = can_lock(proto, client, fid)
    if iot_command_data.get('result', 'nok') == "nok":
        return HttpResponse(json.dumps({"result": "error", "reason": iot_command_data['reason']}), status=409)
```

---

#### **4. Chiusura del Trip**
- Se il trip esiste, lo chiude e salva lo stato.
- Registra un evento di chiusura con il timestamp di fine.

```python
if Trip.objects.filter(vehicle=id, end__isnull=True, user=user).count() > 0:
    t = Trip.objects.get(vehicle=id, end__isnull=True, user=user)
    t.status = "ended"
    t.end = datetime.datetime.now()
    t.save()
```

---

#### **5. Calcolo del Costo Totale**
- Determina il costo del noleggio basandosi su:
  - **Pacchetti attivi**: Riduce il costo in base al tempo/unlock residui.
  - **Wallet utente**: Deduce il costo dal wallet dell'utente.
  - **Tariffe a minuti o chilometri**: Calcola il costo aggiuntivo in base al tempo trascorso.

```python
if has_package:
    up.remaining_time -= total_seconds
    if up.remaining_time <= 0:
        up.exhausted = True
        up.remaining_time = 0
    up.save()
else:
    total_price += uc.unlock
```

---

#### **6. Gestione della Pre-Autorizzazione**
- Se il cliente richiede una pre-autorizzazione Stripe, cattura l'importo pre-autorizzato o calcola eventuali differenze da addebitare/rimborsare.

```python
if t.preauth_id is not None:
    to_pay_diff = int(real_total_price * 100)
    pi = stripe.PaymentIntent.capture(
        t.preauth_id,
        amount_to_capture=to_pay_diff,
        metadata={
            "class": "edway",
            "op": "pay",
            "type": "trip",
            "trip_op": "stop",
            "id": str(t.id),
            "pid": str(p.id),
        }
    )
```

---

#### **7. Integrazione con Wallet o Stripe**
- **Pagamento dal wallet**: Deduce il costo dal wallet, se sufficiente.
- **Pagamento con Stripe**: Esegue la transazione con il metodo di pagamento registrato.

---

#### **8. Notifica su Telegram**
- Notifica la conclusione del trip nei gruppi Telegram associati al cliente o alla flotta.

```python
chats = TelegramGroup.objects.filter(ident__in=[v.owner.ident, v.fleets.first().fleet.id], trip_end=True)
for c in chats:
    requests.get(f'https://bot.e-dway.com/api/trip_end?...')
```

---

### **Esempio di Risultati**

#### **Caso di Successo**
```json
{
  "trip": "1234-5678-9012",
  "trip_status": "trip_ended",
  "duration": "3600",
  "price": 15.0,
  "currency": "eur",
  "response": "ok"
}
```

#### **Errore: Metodo di Pagamento Necessario**
```json
{
  "result": "error",
  "reason": "payment_mode_needed"
}
```

