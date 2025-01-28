---
sidebar_position: 4
---

### TripValue
La classe `TripValue` rappresenta un modello Django per memorizzare valori specifici (ad esempio, costi o metriche) associati a un viaggio. Ogni valore è univocamente collegato a un viaggio e include una descrizione, l'importo, e la data di registrazione.

---

### Campi:

1. **`trip`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo del viaggio a cui il valore è associato.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Unico (`unique=True`): Ogni viaggio può avere un solo record `TripValue`.

2. **`amount`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Importo o valore specifico associato al viaggio (es., costo totale, tassa applicata).

3. **`description`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Una breve descrizione del valore (es., "Costo totale", "Penalità").
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

4. **`date`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Data e ora in cui il valore è stato registrato.
   - **Opzioni**:
     - Imposta automaticamente il valore alla creazione (`auto_now_add=True`).

---

### Metodo speciale `__str__`:
Non è definito esplicitamente, ma potrebbe essere aggiunto per rappresentare il valore in modo leggibile, ad esempio:
```python
def __str__(self):
    return f"{self.description} for Trip {self.trip}: {self.amount}"
```
