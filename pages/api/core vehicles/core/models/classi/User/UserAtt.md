### UserAtt
La classe `UserAtt` rappresenta un modello Django per gestire attributi personalizzati associati a un utente in un determinato contesto di proprietà (`owner`). Questo modello consente di archiviare dati chiave-valore sia in formato JSON che come stringa semplice, supportando un'ampia gamma di casi d'uso.

---

### Campi:

1. **`username`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Nome utente a cui è associato l'attributo.
   - **Opzioni**:
     - Lunghezza massima: 500 caratteri.
     - Indicizzato nel database (`db_index=True`).

2. **`owner`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo del contesto di proprietà a cui appartiene l'attributo.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Indicizzato nel database (`db_index=True`).

3. **`key`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Chiave univoca che identifica l'attributo.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Indicizzato nel database (`db_index=True`).

4. **`j_value`**:
   - **Tipo**: `JSONField`
   - **Descrizione**: Valore associato all'attributo, memorizzato in formato JSON (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

5. **`s_value`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Valore associato all'attributo, memorizzato come stringa semplice (opzionale).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

---

### Meta:

1. **`unique_together`**:
   - Garantisce che ogni combinazione di `username`, `owner` e `key` sia univoca.

2. **`indexes`**:
   - **`['username', 'owner', 'key']`**: Ottimizza le query che filtrano su combinazioni di questi tre campi.
   - **`['username', 'owner']`**: Ottimizza le query che filtrano su `username` e `owner`.

---

### Hook (Ciclo di vita del modello):

1. **`invalidate_cache`**:
   - **Evento**: Dopo il salvataggio del record (`AFTER_SAVE`).
   - **Descrizione**:
     - Rimuove dalla cache tutti i dati relativi al profilo utente connessi a `username` e `owner`.
     - Utilizza il prefisso `USER_PROFILE` per identificare le chiavi nella cache.
   - **Gestione degli errori**:
     - Gli errori durante l'invalidazione della cache vengono catturati e stampati.

---

### Metodo speciale `__str__`:
Non è definito esplicitamente, ma potrebbe essere aggiunto per rappresentare l'attributo in modo leggibile, ad esempio:
```python
def __str__(self):
    return f"{self.username}::{self.owner}::{self.key}"
```





