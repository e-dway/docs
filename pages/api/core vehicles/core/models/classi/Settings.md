---
sidebar_position: 14
---


### Settings
La classe `Settings` rappresenta un modello Django per gestire le impostazioni associate a un proprietario specifico (ad esempio, un'organizzazione o un'entità). Ogni impostazione è definita da una chiave e un valore, con opzioni di visibilità e autorizzazione.

---

### Campi:

1. **`owner`**:
   - **Tipo**: `ForeignKey` su `Ownerships`
   - **Descrizione**: Proprietario a cui l'impostazione è associata.
   - **Opzioni**:
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione del proprietario se ci sono impostazioni associate.
     - `related_name="settings"`: Consente di accedere alle impostazioni di un proprietario tramite `owner.settings`.

2. **`key`**:
   - **Tipo**: `CharField`
   - **Descrizione**: La chiave univoca che identifica l'impostazione.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

3. **`value`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Il valore associato alla chiave.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

4. **`private`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se l'impostazione è privata (non visibile pubblicamente).
   - **Valore predefinito**: `True`.

5. **`superuser`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se l'impostazione è riservata agli utenti superuser.
   - **Opzioni**:
     - `null=True, blank=True`: Campo opzionale.
     - Valore predefinito: `False`.

---

### Metodo speciale `__str__`:
- Restituisce una rappresentazione testuale dell'impostazione, includendo il nome del proprietario, la chiave e il valore:
  ```python
  def __str__(self):
      return "{} :: {} = {}".format(self.owner.name, self.key, self.value)
  ```

---

### Hook (Ciclo di vita del modello):

1. **`clean_and_hit`**:
   - **Evento**: Dopo l'aggiornamento dell'impostazione (`AFTER_UPDATE`).
   - **Descrizione**:
     - Rimuove dalla cache (`CACHE`) le impostazioni associate al proprietario e al livello di visibilità (`private`).
     - Chiave eliminata dalla cache: `f'SETTINGS::{self.owner_id}::{self.private}'`.