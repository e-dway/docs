### VehicleRequest
La classe `VehicleRequest` rappresenta un modello Django per tracciare richieste o interazioni con veicoli, inclusi dettagli geografici dell'utente e del veicolo, nonché il calcolo della distanza tra loro.

---

### Campi:

1. **`vehicle`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo del veicolo associato alla richiesta.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

2. **`timestamp`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Data e ora in cui la richiesta è stata effettuata.
   - **Opzioni**:
     - Imposta automaticamente il valore alla creazione (`auto_now_add=True`).

3. **`user_lon`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Longitudine dell'utente al momento della richiesta.

4. **`user_lat`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Latitudine dell'utente al momento della richiesta.

5. **`vehicle_lon`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Longitudine del veicolo (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

6. **`vehicle_lat`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Latitudine del veicolo (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

---

### Proprietà:

1. **`distance`**:
   - **Descrizione**: Calcola la distanza tra l'utente e il veicolo in metri.
   - **Implementazione**:
     - Utilizza la libreria `haversine` per calcolare la distanza geografica basata sulle coordinate dell'utente e del veicolo.
   - **Esempio**:
     ```python
     r = VehicleRequest.objects.get(id="request_id")
     print(r.distance)  # Stampa la distanza in metri
     ```

---

### Meta:
- **`ordering`**:
  - Ordina le richieste in base al campo `timestamp` (ordine cronologico).

---

### Metodo speciale `__str__`:
Non è definito esplicitamente, ma potrebbe essere aggiunto per rappresentare la richiesta in modo leggibile, ad esempio:
```python
def __str__(self):
    return f"Request for Vehicle {self.vehicle} at {self.timestamp}"
```

