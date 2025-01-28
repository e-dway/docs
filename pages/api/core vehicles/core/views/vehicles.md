### Descrizione della funzione `vehicle`

---

#### **Definizione**
```python
@api.post('/vehicles', response=List[XVehicleSchema])
def vehicle(request, test):
    ...
```

---

### **Scopo**
L'endpoint `/vehicles` restituisce una lista di veicoli appartenenti a un determinato cliente. I veicoli restituiti possono essere filtrati in base a vari criteri, come flotta, amministrazione, esclusività e disponibilità. 

---

### **Parametri**
1. **`request`**: La richiesta HTTP ricevuta, contenente informazioni sui veicoli, l'utente e il cliente.
2. **`test`**: Una stringa che, se impostata su `"True"`, forza la restituzione di tutti i veicoli senza filtri aggiuntivi.

---

### **Funzionamento**

#### **1. Notifica di Inizio Operazione**
- La funzione inizia notificando un messaggio con l'operazione avviata tramite `publish_message`.

```python
publish_message('/get/vehicles', {"op": "started"})
```

---

#### **2. Parsing del Corpo della Richiesta**
- I dati inviati nella richiesta vengono caricati come un dizionario JSON.
- Vengono estratti:
  - **`user`**: L'utente che effettua la richiesta.
  - **`client`**: L'identificativo del cliente o della flotta.
  - **`vehicles`**: Una lista di veicoli specifici richiesti.

```python
ids = json.loads(request.body)
user = ids.get('user')
client = ids.get('client')
vehicles = ids.get('vehicles')
```

---

#### **3. Gestione del Cliente e della Flotta**
- Se il parametro `client` contiene il separatore `":"`, viene diviso in:
  - **`fleet`**: ID della flotta.
  - **`client`**: ID del cliente.

```python
if ":" in client:
    fleet = client.split(':')[1]
    client = client.split(':')[0]
```

---

#### **4. Verifica del Ruolo Amministrativo**
- Controlla se l'utente ha il ruolo di amministratore utilizzando il modello `UserRole`.

```python
is_admin = UserRole.objects.filter(user=user, role_id="admin").count() > 0
```

---

#### **5. Restituzione di Tutti i Veicoli (Modalità Amministratore o Test)**
- Se l'utente è un amministratore o il parametro `test` è impostato su `"True"`, vengono restituiti tutti i veicoli appartenenti al cliente senza ulteriori filtri.

```python
if is_admin or test == "True":
    return Vehicle.objects.filter(deleted__isnull=True, owner_id=client)
```

---

#### **6. Filtraggio dei Veicoli**
- **Filtraggio Base**: Restituisce solo i veicoli specificati nell'elenco `vehicles` appartenenti al cliente.

```python
ret = Vehicle.objects.filter(deleted__isnull=True, imei__in=vehicles, owner_id=client)
```

- **Esclusione dei Veicoli Prenotati e in Viaggio**:
  - Esclude i veicoli attualmente prenotati da altri utenti o in corso di viaggio.

```python
exc_booked_vehicles = [b.vehicle for b in Booking.objects.filter(until__gte=date.date.now()).exclude(user=ids.get('user'))]
exc_tripping_vehicles = [b.vehicle for b in Trip.objects.filter(end__isnull=True).exclude(user=user)]
ret = ret.exclude(imei__in=exc_tripping_vehicles + exc_booked_vehicles).prefetch_related('fleets')
```

- **Filtraggio Basato sulla Flotta**:
  - Se un ID flotta è fornito, vengono utilizzati solo i veicoli associati a flotte specifiche.

```python
if fleet:
    fleet_all = [fleet]
else:
    fleet_all = [f.id for f in Fleet.objects.filter(require_activation=False, active=True)]
```

---

#### **7. Esclusione dei Veicoli per Flotte Esclusive**
- Esclude veicoli appartenenti a flotte contrassegnate come esclusive.

```python
ret = ret.filter(fleets__fleet__in=exc_fleet_filter)
```

---

#### **8. Notifica di Fine Operazione**
- Al termine, invia un messaggio di completamento dell'operazione tramite `publish_message`.

```python
publish_message('/get/vehicles', {"op": "done"})
```

---

### **Output Atteso**

#### **Esempio di Richiesta**
```json
{
  "user": "user1",
  "client": "client1",
  "vehicles": ["ABC123", "DEF456"]
}
```

#### **Esempio di Risultato**
```json
[
  {
    "imei": "ABC123",
    "model": "Model A",
    "status": "available"
  },
  {
    "imei": "DEF456",
    "model": "Model B",
    "status": "in_trip"
  }
]
```

