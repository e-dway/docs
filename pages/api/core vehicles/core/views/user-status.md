---
sidebar_position: 2
---

### Descrizione della funzione `user_status`

---

#### **Definizione**
```python
@api.get('/user/status')
def user_status(request, client, user=None):
    ...
```

---

### **Scopo**
L'endpoint `/user/status` fornisce lo stato di un utente all'interno di un'organizzazione (`client`). Restituisce informazioni sull'abilitazione dell'utente, eventuali viaggi attivi, pacchetti attivi e il saldo attuale del portafoglio.

---

### **Parametri**
1. **`request`**: La richiesta HTTP ricevuta.
2. **`client`**: L'identificativo del cliente/organizzazione di riferimento.
3. **`user`** (*opzionale*): L'utente per cui recuperare lo stato.

---

### **Funzionamento**

#### **1. Log della Richiesta**
- La funzione stampa nel log la chiamata ricevuta, mostrando il client e l'utente.

```python
print('>/user/status', client, user)
```

---

#### **2. Inizializzazione del Risultato**
- Inizializza un dizionario vuoto `ret` che conterrà i dettagli sullo stato dell'utente.

```python
ret = {}
```

---

#### **3. Controllo dell'Utente**
- Se l'utente è specificato:
  - Controlla se l'utente è presente nella blacklist utilizzando il modello `UserBlackList`.

  ```python
  ubl = UserBlackList.objects.filter(user=user).count() == 0
  ret['enabled'] = ubl
  ```

---

#### **4. Recupero dei Veicoli del Cliente**
- Recupera tutti gli IMEI dei veicoli associati al client.

```python
vs = [v['imei'] for v in Vehicle.objects.filter(deleted__isnull=True, owner_id=client).values('imei')]
```

---

#### **5. Recupero dei Viaggi Attivi**
- Cerca eventuali viaggi attivi per l'utente (`end__isnull=True`) tra i veicoli del client.

```python
trips = Trip.objects.filter(user=user, vehicle__in=vs, end__isnull=True)
ret['current_trips'] = [{"id": t.id, "vehicle": t.vehicle, "start": t.start} for t in trips]
```

- Se esistono viaggi attivi, imposta `current_trip` come il primo viaggio attivo, altrimenti lo imposta a `None`.

```python
if len(ret['current_trips']) > 0:
    ret['current_trip'] = ret['current_trips'][0]
else:
    ret['current_trip'] = None
```

---

#### **6. Recupero del Pacchetto Attivo**
- Imposta un valore vuoto per il pacchetto attivo (non è implementata una logica per identificare pacchetti attivi).

```python
ret['active_pack'] = ""
```

---

#### **7. Recupero del Saldo del Portafoglio**
- Recupera o crea il portafoglio utente per l'organizzazione e restituisce il saldo attuale.

```python
ret["current_wallet"], c = UserWallet.objects.get_or_create(user=user, ownership_id=client)
ret["current_wallet"] = ret["current_wallet"].wallet
```

---

#### **8. Log e Restituzione del Risultato**
- Stampa il risultato nel log e lo restituisce come risposta.

```python
print('</user/status', client, user, ret)
return ret
```

---

### **Output Atteso**

#### **Esempio**
Supponiamo che:
- L'utente non sia bloccato.
- Esista un viaggio attivo con ID `123`, veicolo `ABCD1234`, avviato alle `2023-01-01T10:00:00`.
- Il portafoglio abbia un saldo di `50.0`.

**Risultato**:
```json
{
  "enabled": true,
  "current_trips": [
    {
      "id": "123",
      "vehicle": "ABCD1234",
      "start": "2023-01-01T10:00:00"
    }
  ],
  "current_trip": {
    "id": "123",
    "vehicle": "ABCD1234",
    "start": "2023-01-01T10:00:00"
  },
  "active_pack": "",
  "current_wallet": 50.0
}
```

Se l'utente fosse bloccato:
```json
{
  "enabled": false,
  "current_trips": [],
  "current_trip": null,
  "active_pack": "",
  "current_wallet": 0.0
}
```

