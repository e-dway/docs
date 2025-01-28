---
sidebar_position: 13
---


### Role
La classe `Role` rappresenta un modello Django utilizzato per definire ruoli specifici in un sistema. Ogni ruolo ha un identificativo unico (`key`), un'etichetta leggibile (`label`), un peso per determinare l'ordine di importanza, e un'indicazione se è un ruolo predefinito.

---

### Campi:

1. **`weight`**:
   - **Tipo**: `IntegerField`
   - **Descrizione**: Indica l'importanza o la priorità del ruolo. Ruoli con peso inferiore appaiono prima (ordinati per peso).
   - **Valore predefinito**: `100`.

2. **`key`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo unico del ruolo (es., "admin", "user").
   - **Opzioni**:
     - Lunghezza massima: 100 caratteri.
     - Definito come chiave primaria (`primary_key=True`).

3. **`label`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Etichetta leggibile per il ruolo (es., "Administrator", "User").
   - **Opzioni**:
     - Lunghezza massima: 100 caratteri.

4. **`default`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se il ruolo è il ruolo predefinito per nuovi utenti o entità.
   - **Valore predefinito**: `False`.

---

### Metodo speciale `__str__`:
- Restituisce l'etichetta del ruolo come rappresentazione leggibile:
  ```python
  def __str__(self):
      return self.label
  ```

---

### Meta:
- **`ordering`**:
  - Ordina i ruoli in base al campo `weight` in ordine crescente.


