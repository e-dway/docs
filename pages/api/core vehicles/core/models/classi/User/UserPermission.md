---
sidebar_position: 11
---


### UserPermission
La classe `UserPermission` rappresenta un modello Django per gestire le autorizzazioni assegnate agli utenti. Ogni record associa un utente a un determinato permesso, fornendo un sistema semplice per gestire i diritti e le funzionalità disponibili.

---

### Campi:

1. **`user`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo dell'utente a cui viene assegnato il permesso.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

2. **`permission`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Nome del permesso assegnato all'utente.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

---

### Metodo speciale `__str__`:
- Ritorna una rappresentazione leggibile dell'associazione tra utente e permesso:
  ```python
  def __str__(self):
      return f"User: {self.user}, Permission: {self.permission}"
  ```



