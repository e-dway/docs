### TripEvent
La classe `TripEvent` rappresenta un modello Django per registrare eventi specifici che si verificano durante un viaggio. Ogni evento è collegato a un viaggio (`Trip`) e include informazioni come il tipo di evento, un timestamp e una descrizione opzionale.

---

### Campi:

1. **`id`**:
   - **Tipo**: `UUIDField`
   - **Descrizione**: Identificatore univoco dell'evento, generato automaticamente tramite `uuid.uuid4`.
   - **Chiave primaria**: Sì.

2. **`trip`**:
   - **Tipo**: `ForeignKey` su `Trip`
   - **Descrizione**: Riferimento al viaggio a cui l'evento è associato.
   - **Opzioni**:
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione del viaggio se ci sono eventi associati.

3. **`event_type`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Tipo di evento (es., "start", "pause", "incident").
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

4. **`timestamp`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Data e ora in cui l'evento si è verificato.
   - **Opzioni**:
     - Imposta automaticamente il valore alla creazione (`auto_now_add=True`).

5. **`description`**:
   - **Tipo**: `TextField`
   - **Descrizione**: Dettaglio o spiegazione dell'evento (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

---

### Metodo speciale `__str__`:
Non è definito esplicitamente, ma potrebbe essere aggiunto per rappresentare l'evento in modo leggibile, ad esempio:
```python
def __str__(self):
    return f"{self.event_type} for Trip {self.trip.id} at {self.timestamp}"
```

