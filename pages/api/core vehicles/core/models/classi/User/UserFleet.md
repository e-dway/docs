### UserFleet
La classe `UserFleet` rappresenta un modello Django per gestire la relazione tra un utente e una flotta, come richieste di accesso o associazioni temporanee. Include dettagli sullo stato della richiesta, la durata dell'associazione e l'accettazione.

---

### Campi:

1. **`user`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo dell'utente associato alla flotta.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Indicizzato nel database (`db_index=True`).

2. **`fleet`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo della flotta associata all'utente.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Indicizzato nel database (`db_index=True`).

3. **`request`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Data e ora in cui l'utente ha effettuato la richiesta di accesso alla flotta.

4. **`accepted`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se la richiesta di accesso è stata accettata.
   - **Opzioni**:
     - Valore predefinito: `False`.
     - Indicizzato nel database (`db_index=True`).

5. **`until`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Data e ora fino a cui l'associazione tra utente e flotta è valida (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).
     - Indicizzato nel database (`db_index=True`).

---

### Metodo speciale `__str__`:
Non è definito esplicitamente, ma potrebbe essere aggiunto per rappresentare la relazione in modo leggibile, ad esempio:
```python
def __str__(self):
    return f"User {self.user} - Fleet {self.fleet} (Accepted: {self.accepted})"
```

