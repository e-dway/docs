---
sidebar_position: 2
---

### Descrizione della funzione `vehicle`

---

#### **Definizione**
```python
@api.get('/vehicle/{id}')
def vehicle(request, id, client):
    ...
```

---

### **Scopo**
L'endpoint `/vehicle/{id}` restituisce i dettagli di un veicolo specifico (identificato da `id`) appartenente a un determinato cliente (`client`). I dettagli includono informazioni sulla posizione, stato della batteria, stato del veicolo (es. bloccato, in carica, in movimento), e informazioni sui costi di utilizzo.

---

### **Parametri**
1. **`request`**: La richiesta HTTP ricevuta.
2. **`id`**: Identificativo univoco del veicolo (ad esempio, IMEI).
3. **`client`**: Identificativo del cliente. Può includere opzionalmente un ID di flotta separato da `":"`.

---

### **Funzionamento**

#### **1. Elaborazione del Parametro `client`**
- Se `client` contiene `":"`, viene separato in:
  - **`fleet`**: ID della flotta.
  - **`client`**: ID del cliente.

```python
if ":" in client:
    fleet = client.split(":")[1]
    client = client.split(":")[0]
```

---

#### **2. Recupero del Veicolo**
- Recupera il veicolo specificato dall'ID (`imei`) e dal cliente (`owner_id`) utilizzando il modello `Vehicle`.

```python
v = Vehicle.objects.get(imei=id, owner_id=client)
```

---

#### **3. Recupero dei Dati del Veicolo da un'API Esterna**
- Utilizza un'API esterna per recuperare i dettagli del veicolo, come posizione e stato della batteria.
- Se i dati sono disponibili, vengono elaborati e salvati in un dizionario `vd`.
- Se si verifica un errore o i dati non sono disponibili, vengono impostati valori di fallback.

```python
try:
    vdo = requests.get(f'https://map.e-dway.com/vehicles/{id}').json()
    if vdo:
        vd = {
            'lat': vdo.get('position.latitude'),
            'lng': vdo.get('position.longitude'),
            'battery': min(100, int(vdo.get('edway.battery', 0))),
            "charging": False if vdo.get('battery.charging.status', "false") == "false" else True,
            "locked": False if vdo.get('lock.status', "true") != "true" else True,
            "running": False if vdo.get('engine.ignition.status', "true") != "true" else True,
        }
    else:
        vd = {'lat': 0, 'lng': 0, 'battery': 0}
except:
    vd = {'lat': 0, 'lng': 0, 'battery': 0}
```

---

#### **4. Recupero delle Impostazioni del Cliente**
- Recupera le impostazioni del cliente utilizzando la funzione `get_client`.

```python
client_settings = get_client(v.owner_id, user="sirmmo@gmail.com")
```

---

#### **5. Recupero dei Costi di Utilizzo**
- Recupera i costi di utilizzo del veicolo utilizzando la funzione `get_usage_cost_for_vehicle`.

```python
uc = get_usage_cost_for_vehicle(v)
```

- Ottiene i dettagli del costo per minuto (`ucm`) e della flotta associata.

```python
ucm = uc.minutes.filter(starts_at=0).first()
f = FleetVehicle.objects.filter(vehicle=v).first().fleet
```

---

#### **6. Preparazione della Risposta**
- Crea un oggetto GeoJSON (`tdata`) con le informazioni del veicolo:
  - **Posizione e Stato**: Latitudine, longitudine, livello batteria, stato di carica, blocco e movimento.
  - **Costi**: Prezzo di sblocco e costo per minuto.
  - **Icone**: Icona basata sul tipo di veicolo e stato.

```python
tdata = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "id": did,
        "geometry": {
            "type": "Point",
            "coordinates": [vd['lng'], vd['lat']]
        },
        "properties": {
            "id": str(id),
            "ident": str(id),
            "type": vmvtn,
            "battery": vd['battery'],
            "charging": vd.get('charging', False),
            "locked": vd.get('locked', True),
            "running": vd.get('running', False),
            "battery_icon": "",
            "price": {
                "price_unlock": {
                    "amount": uc.unlock if uc and f and f.payment_mode == "user_pays" else 0,
                    "currency": "eur"
                },
                "price_minute": {
                    "amount": ucm.usage_per_minute if ucm and f and f.payment_mode == "user_pays" else 0,
                    "currency": "eur"
                }
            },
            "name": vehicle_name,
            "icon": f"{vmvtn}{ispartner}-high"
        }
    }]
}
```

---

### **Output Atteso**

#### **Esempio**
**Richiesta**:
```http
GET /vehicle/ABCD1234?client=client1
```

**Risultato**:
```json
{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "id": 123456789,
            "geometry": {
                "type": "Point",
                "coordinates": [12.34567, 45.67890]
            },
            "properties": {
                "id": "ABCD1234",
                "ident": "ABCD1234",
                "type": "scooter",
                "battery": 85,
                "charging": false,
                "locked": true,
                "running": false,
                "battery_icon": "",
                "price": {
                    "price_unlock": {
                        "amount": 1.0,
                        "currency": "eur"
                    },
                    "price_minute": {
                        "amount": 0.2,
                        "currency": "eur"
                    }
                },
                "name": "Scooter A",
                "icon": "scooter-high"
            }
        }
    ]
}
```

---
