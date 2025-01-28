---
sidebar_position: 6
---

### UserManagement
La classe `UserManagement` rappresenta un modello Django utilizzato per gestire e tracciare le associazioni tra utenti, entità proprietarie (`ownership`), flotte e veicoli. Fornisce un sistema per monitorare le relazioni gerarchiche o operative tra questi elementi.

---

### Campi:

1. **`user`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo dell'utente associato alla gestione.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

2. **`ownership`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo dell'entità proprietaria associata all'utente.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

3. **`fleet`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo della flotta associata all'utente (opzionale).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

4. **`vehicle`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo del veicolo associato all'utente (opzionale).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

---

### Metodo speciale `__str__`:
- Restituisce una rappresentazione leggibile della relazione tra utente, proprietà, flotta e veicolo:
  ```python
  def __str__(self):
      return f'{self.user}:: {self.ownership}:{self.fleet}:{self.vehicle}'
  ```



