---
sidebar_position: 4
---

### FleetSettings
La classe `FleetSettings` rappresenta un modello Django per gestire impostazioni specifiche associate a una flotta. Ogni impostazione è definita da una chiave e un valore, consentendo configurazioni personalizzate per una determinata flotta.

---

### Campi:

1. **`fleet`**:
   - **Tipo**: `ForeignKey` su `Fleet`
   - **Descrizione**: La flotta a cui l'impostazione è associata.
   - **Opzioni**:
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione della flotta se ci sono impostazioni associate.
     - `related_name="settings"`: Consente di accedere alle impostazioni di una flotta tramite `fleet.settings`.

2. **`key`**:
   - **Tipo**: `CharField`
   - **Descrizione**: La chiave univoca che identifica l'impostazione.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

3. **`value`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Il valore associato alla chiave dell'impostazione.
   - **Opzioni**:
     - Lunghezza massima: 5000 caratteri.
     - Campo opzionale (`null=True, blank=True`).

---

### Metodo speciale `__str__`:
- Restituisce una rappresentazione testuale dell'impostazione, includendo il nome della flotta e la chiave:
  ```python
  def __str__(self):
      return "{}::{}".format(self.fleet.name, self.key)
  ```

---
