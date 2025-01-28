### UserData
La classe `UserData` rappresenta un modello Django utilizzato per gestire le coordinate geografiche associate a un utente specifico. Questo modello è utile per applicazioni che richiedono la tracciabilità della posizione dell'utente, come servizi di geolocalizzazione o applicazioni di mobilità.

---

### Campi:

1. **`username`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo univoco dell'utente, utilizzato come chiave primaria.
   - **Opzioni**:
     - Lunghezza massima: 500 caratteri.
     - Definito come chiave primaria (`primary_key=True`).

2. **`lat`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Latitudine della posizione attuale dell'utente.

3. **`lng`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Longitudine della posizione attuale dell'utente.

---

### Metodo speciale `__str__`:
- Restituisce una rappresentazione leggibile della posizione dell'utente:
  ```python
  def __str__(self):
      return f"User: {self.username}, Location: ({self.lat}, {self.lng})"
  ```




