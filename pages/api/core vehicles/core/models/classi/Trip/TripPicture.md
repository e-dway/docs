---
sidebar_position: 3
---

### TripPicture
La classe `TripPicture` rappresenta un modello Django per memorizzare immagini associate a un viaggio. Ogni immagine può essere collegata a un veicolo, un utente, e un viaggio specifico.

---

### Campi:

1. **`id`**:
   - **Tipo**: `UUIDField`
   - **Descrizione**: Identificativo univoco dell'immagine, generato automaticamente tramite `uuid.uuid4`.
   - **Chiave primaria**: Sì.

2. **`trip`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo del viaggio a cui l'immagine è associata.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Indicizzato nel database (`db_index=True`).

3. **`vehicle`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo del veicolo associato all'immagine (opzionale).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).
     - Indicizzato nel database (`db_index=True`).

4. **`url`**:
   - **Tipo**: `URLField`
   - **Descrizione**: URL dell'immagine caricata (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

5. **`user`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo dell'utente che ha caricato o è associato all'immagine.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Indicizzato nel database (`db_index=True`).

6. **`created`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Data e ora in cui l'immagine è stata creata o caricata.
   - **Opzioni**:
     - Imposta automaticamente il valore alla creazione (`auto_now_add=True`).

---

### Metodo speciale `__str__`:
Non è definito esplicitamente, ma potrebbe essere aggiunto per rappresentare l'immagine in modo leggibile, ad esempio:
```python
def __str__(self):
    return f"Picture for Trip {self.trip} by User {self.user}"
```

