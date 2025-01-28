---
sidebar_position: 4
---

La classe `VehicleBrand` è simile a `VehicleType` e rappresenta un modello Django per gestire i marchi di veicoli. Questa classe è probabilmente usata per tenere traccia delle marche di veicoli in un sistema. Ecco un'analisi dettagliata:

---

### Campi del modello:
1. **`name`**:
   - **Tipo**: `CharField`
   - **Lunghezza massima**: 200 caratteri.
   - **Chiave primaria**: Sì.
   - **Descrizione**: Rappresenta il nome del marchio (ad esempio, "Toyota", "Honda", "Tesla", ecc.).
   - Questo campo viene utilizzato come identificatore univoco per ogni marchio.

2. **`icon`**:
   - **Tipo**: `URLField`
   - **Descrizione**: URL di un'icona rappresentativa del marchio (es., il logo del brand).
   - **Opzioni**: `null=True, blank=True`, quindi è opzionale.

---

### Metodo speciale `__str__`:
- **Descrizione**:
  - Restituisce il valore del campo `name` come rappresentazione testuale del record.
  - Questo rende più leggibile e chiara l'identificazione dei record nelle interfacce Django:
    ```python
    def __str__(self):
        return self.name
    ```

