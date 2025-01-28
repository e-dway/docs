---
sidebar_position: 12
---


### UserRole
La classe `UserRole` rappresenta un modello Django per associare un utente a un ruolo specifico in un determinato contesto di proprietà (`ownership`). Fornisce un sistema per gestire i ruoli degli utenti e abilitare o disabilitare tali associazioni.

---

### Campi:

1. **`user`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo dell'utente associato al ruolo.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

2. **`ownership`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Contesto di proprietà o organizzazione associata al ruolo dell'utente (opzionale).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

3. **`role`**:
   - **Tipo**: `ForeignKey` su `Role`
   - **Descrizione**: Riferimento al ruolo assegnato all'utente.
   - **Opzioni**:
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione del ruolo se ci sono utenti associati.

4. **`enabled`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se l'associazione tra l'utente e il ruolo è attiva.
   - **Valore predefinito**: `True`.

---

### Meta:
- **`unique_together`**:
  - Garantisce che ogni combinazione di `user`, `ownership` e `role` sia unica.
  - Questo vincolo impedisce la creazione di duplicati per la stessa associazione.

---

### Metodo speciale `__str__`:
- Ritorna una rappresentazione leggibile dell'associazione utente-ruolo:
  ```python
  def __str__(self):
      return f"User: {self.user}, Role: {self.role.label}, Ownership: {self.ownership or 'Global'}"
  ```






