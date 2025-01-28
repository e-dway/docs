---
sidebar_position: 2
---

### Descrizione della funzione `payments`

---

#### **Definizione**
```python
@api.post('/payments')
def payments(request, client):
    ...
```

---

### **Scopo**
La funzione `payments` è un endpoint API che gestisce le notifiche dei pagamenti provenienti da Stripe. Analizza i dati ricevuti, li associa al cliente (`client`) e aggiorna lo stato dei pagamenti o delle entità correlate (ad esempio, viaggi, pacchetti).

---

### **Parametri**
1. **`request`**: La richiesta HTTP ricevuta, che contiene i dati del pagamento nel corpo della richiesta.
2. **`client`**: L'identificativo del cliente/organizzazione associato al pagamento.

---

### **Funzionamento**

#### **1. Creazione di un Log Stripe**
- Viene inizializzata una nuova istanza del modello `StripeLog` per memorizzare i dati del pagamento.
- I dati del corpo della richiesta (`request.body`) vengono convertiti in un dizionario Python con `json.loads`.

```python
s = StripeLog()
s.data = json.loads(request.body)
print(s.data)
```

---

#### **2. Recupero dei Metadati**
- Dal campo `metadata` nei dati di Stripe, vengono estratti i metadati personalizzati del pagamento.

```python
m = s.data['object']['metadata']
```

- I metadati specificano informazioni come il tipo di operazione, il tipo di pagamento e gli identificatori necessari per aggiornare lo stato.

---

#### **3. Gestione dei Metadati**
- Se esistono metadati validi, viene verificato che il campo `class` sia uguale a `"edway"`. In questo caso, il log viene associato al cliente e salvato.

```python
if len(m.keys()) > 0:
    if m.get('class') == "edway":
        s.owner = client
        s.save()
```

---

#### **4. Gestione dei Diversi Tipi di Operazioni**

##### **Operazione `pay`**
- **Pagamento confermato (`status` == `"succeeded"`)**:
  - Aggiorna l'entità `Payment` per indicare che il pagamento è stato confermato.
  - Se il pagamento riguarda un pacchetto, aggiorna lo stato del pacchetto (`payment_confirmed`, `activated`, `active`, etc.).

```python
if m.get('op') == 'pay':
    confirm_status = s.data['object'].get('status') == "succeeded"
    if m.get('type') == "trip":
        p = Payment.objects.get(product=m.get('id'))
        Payment.objects.filter(product=m.get('id')).update(
            stripe_confirmed=(confirm_status or p.stripe_confirmed),
            stripe_reason=s.data['object'].get('status')
        )
    elif m.get('type') == "product":
        p = Payment.objects.get(id=m.get('pid'))
        Payment.objects.filter(id=m.get('pid')).update(
            stripe_confirmed=(confirm_status or p.stripe_confirmed),
            stripe_reason=s.data['object'].get('status')
        )
        if m.get('ptype') == "product": 
            up = UserPackage.objects.get(id=m.get('id'))
            up.payment_confirmed = True
            up.can_activate = datetime.datetime.now()
            if up.package.automatic_activation:
                up.activated = datetime.datetime.now()
                up.active = True
                up.remaining_time = up.package.seconds
                up.remaining_unlocks = up.package.unlock_limit
            up.save()
```

---

##### **Operazione `preauth`**
- **Autorizzazione preliminare per un viaggio**:
  - Aggiorna l'entità `Payment` con lo stato di autorizzazione.
  - Se l'autorizzazione è confermata, aggiorna lo stato del viaggio (`status="running"`).

```python
elif m.get('op') == "preauth":
    confirm_status = s.data['object'].get('status') == "succeeded"
    if m.get('type') == "trip": 
        p = Payment.objects.get(id=m.get('pid'))
        confirm_status = confirm_status or p.stripe_confirmed
        Payment.objects.filter(trip=m.get('id')).update(
            stripe_confirmed=(confirm_status or p.stripe_confirmed),
            stripe_reason=s.data['object'].get('status')
        )
        t = Trip.objects.get(id=m.get('id'))
        if confirm_status:
            if m.get('trip_op') == "start":
                t.status = "running"
                t.save()
```

---

##### **Operazione `manual`**
- **Aggiornamento manuale del pagamento**:
  - Aggiorna manualmente lo stato di un pagamento specifico.

```python
elif m.get('op') == "manual":
    p = Payment.objects.get(id=m.get('manual'))
    confirm_status = s.data['object'].get('status') == "succeeded"
    Payment.objects.filter(id=m.get('manual')).update(
        stripe_confirmed=(confirm_status or p.stripe_confirmed),
        stripe_reason=s.data['object'].get('status')
    )
```

---

#### **5. Gestione degli Errori**
- Qualsiasi errore durante l'elaborazione viene catturato e stampato.

```python
except Exception as ex:
    print(ex)
```

---

#### **6. Risposta**
- La funzione restituisce sempre uno stato di successo.

```python
return {"status": "ok"}
```

---

### **Output Atteso**

#### **Esempio**
**Richiesta Stripe:**
```json
{
  "object": {
    "metadata": {
      "class": "edway",
      "op": "pay",
      "type": "product",
      "id": "prod_123",
      "pid": "pay_456",
      "ptype": "product"
    },
    "status": "succeeded"
  }
}
```

**Risultato:**
```json
{
  "status": "ok"
}
```

---

