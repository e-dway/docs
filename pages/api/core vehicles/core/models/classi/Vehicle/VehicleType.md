---
sidebar_position: 11
---
La classe `VehicleType` rappresenta un modello Django semplice, che probabilmente viene utilizzato per categorizzare diversi tipi di veicoli in un sistema. Ecco un'analisi dettagliata:

---

### Campi del modello:
1. **`name`**:
   - **Tipo**: `CharField`
   - **Lunghezza massima**: 200 caratteri.
   - **Chiave primaria**: Sì.
   - **Descrizione**: Il nome che identifica univocamente il tipo di veicolo (es., "Auto", "Moto", "Camion", ecc.).

2. **`icon`**:
   - **Tipo**: `URLField`
   - **Descrizione**: Un campo opzionale per memorizzare l'URL di un'icona associata al tipo di veicolo (ad esempio, un'icona visiva da mostrare nell'interfaccia utente).
   - **Opzioni**: `null=True` e `blank=True`, quindi può essere vuoto.

---

### Metodo speciale `__str__`:
- **Descrizione**:
  - Restituisce il valore del campo `name` come rappresentazione testuale del record.
  - Questo è utile per identificare facilmente il tipo di veicolo nelle interfacce di amministrazione di Django o in altri contesti:
    ```python
    def __str__(self):
        return self.name
    ```

