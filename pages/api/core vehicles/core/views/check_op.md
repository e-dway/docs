---
sidebar_position: 2
---


La funzione `check_op` serve a verificare se un'operazione specifica, come l'inizio o la fine di un noleggio, può essere eseguita da un utente su un veicolo. Esamina diverse condizioni, come il profilo dell'utente, lo stato del veicolo e le configurazioni del cliente, per determinare se l'operazione è consentita.

---

### **Struttura della Funzione**
```python
def check_op(request, vehicle: str, user: str, client: str, mode: str, user_lat: str, user_lon: str, op: str):
```

### **Parametri**
1. **`request`**: La richiesta HTTP ricevuta.
2. **`vehicle`**: L'identificativo del veicolo su cui eseguire l'operazione.
3. **`user`**: L'utente che richiede l'operazione.
4. **`client`**: L'identificativo del cliente o proprietario del veicolo.
5. **`mode`**: Modalità dell'operazione (esempio: `start`, `stop`).
6. **`user_lat`**, **`user_lon`**: Latitudine e longitudine dell'utente.
7. **`op`**: Operazione specifica da eseguire (esempio: `start`).

---

### **Funzionamento**

1. **Recupero dei Dati Utente e Cliente**
   - **`get_user_profile`**: Recupera i dettagli dell'utente.
   - **`get_client`**: Recupera la configurazione del cliente.

```python
ud = get_user_profile(user, client)
owner_config = get_client(client, user="sirmmo@gmail.com")
```

---

2. **Validazione Preliminare**
   - **Validazione del Numero di Telefono**:
     - Controlla se la convalida del telefono è richiesta e se l'utente ha un numero valido.
   - **Ruolo Amministrativo**:
     - Gli amministratori sono automaticamente autorizzati a eseguire l'operazione.

```python
if owner_config.get('phone_validation_required', "True") == "True":
    if ud.get("phone_valid") != "True":
        return {"operation_permitted": False, "reason": "phone_validation_required"}

if UserRole.objects.filter(user=user, ownership=client, role__key__in=["admin"], enabled=True).count() > 0:
    return {"operation_permitted": True}
```

---

3. **Blacklist e Controlli Specifici**
   - **Blacklist**: Controlla se l'utente o il numero di telefono sono nella lista nera.
   - **Prefissi Telefonici**: Verifica se il numero dell'utente inizia con un prefisso autorizzato.
   - **Trip Multipli**: Impedisce all'utente di avere più di un trip attivo, se configurato dal cliente.

```python
ubl = UserBlackList.objects.filter(Q(user=user)|Q(phone=ud.get('phone')))
if ubl.count() > 0:
    return {"operation_permitted": False, "reason": "black_listed"}

if owner_config.get('MULTITRIP', "False") == "False" and Trip.objects.filter(owner=client, user=user, end__isnull=True).count() > 0:
    return {"operation_permitted": False, "reason": "other_trip_ongoing"}
```

---

4. **Stato del Veicolo**
   - Controlla se il veicolo è online, ha una batteria sufficiente e richiede documenti specifici.

```python
if mode == "start" and vd.get('edway.status') != "online":
    return {"operation_permitted": False, "reason": "vehicle_offline"}

if int(vd.get('edway.battery', 0)) < int(owner_config.get('MIN_BATTERY', '15')):
    return {"operation_permitted": False, "reason": "battery_insufficient"}
```

---

5. **Validazione Documenti**
   - Se il veicolo o il cliente richiede documenti (ad esempio patente di guida), verifica che siano stati caricati e approvati.

```python
if len(v.model.requires_doc) > 0 or owner_config.get('require_id', "False") == "True":
    if UserDocument.objects.filter(user=user, owner=client, doc_type__in=to_check).filter(Q(valid__isnull=True)|Q(valid=True)).count() < len(docs):
        return {"operation_permitted": False, "reason": "missing_document"}
```

---

6. **Flotte e Metodi di Pagamento**
   - Controlla se la flotta richiede l'attivazione e se l'utente ha un metodo di pagamento registrato (ad esempio carta di credito o wallet).

```python
if f.require_activation and UserFleet.objects.filter(user=user, fleet=str(f.id), until__gte=datetime.datetime.now(), accepted=True).count() == 0:
    return {"operation_permitted": False, "reason": "access_required"}

if Fleet.objects.filter(vehicles__vehicle=v, payments_accepted="wallet").count():
    if u.wallet < min_value:
        return {"operation_permitted": False, "reason": "wallet_required"}
```

---

7. **Validazione della Posizione**
   - Verifica che il veicolo sia parcheggiato in un'area valida o che l'utente si trovi in una posizione autorizzata.

```python
areas = FleetArea.objects.filter(fleet__in=fls)
if f.freefloating:
    for a in areas.filter(geom__contains=p):
        if a.settings.filter(key='can_park').first().value == "False":
            can = False
```

---

8. **Conclusione**
   - Se tutte le condizioni sono soddisfatte, consente l'operazione.
   - In caso contrario, registra un problema (`VehicleIssue`) e nega l'operazione.

```python
if can:
    return {"operation_permitted": True}
else:
    return {"operation_permitted": False, "reason": "vehicle_out_of_area"}
```

---

### **Risultati Attesi**

#### **Esempio di Successo**
```json
{
  "operation_permitted": True
}
```

#### **Esempio di Fallimento**
```json
{
  "operation_permitted": False,
  "reason": "battery_insufficient",
  "details": {
    "battery": 10
  }
}
```

---

