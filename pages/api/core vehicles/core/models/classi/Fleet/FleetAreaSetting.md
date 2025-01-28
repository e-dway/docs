### FleetAreaSetting
La classe `FleetAreaSetting` rappresenta un modello Django per gestire impostazioni specifiche associate a una determinata area geografica di una flotta. Ogni impostazione è identificata da una chiave e un valore, consentendo configurazioni dettagliate per ogni area.

---

### Campi:

1. **`fleet_area`**:
   - **Tipo**: `ForeignKey` su `FleetArea`
   - **Descrizione**: L'area geografica della flotta a cui l'impostazione è associata.
   - **Opzioni**:
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione dell'area se ci sono impostazioni associate.
     - `related_name="settings"`: Consente di accedere alle impostazioni di un'area tramite `fleet_area.settings`.

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
- Restituisce una rappresentazione testuale dell'impostazione, includendo il nome dell'area e la chiave:
  ```python
  def __str__(self):
      return "{}::{}".format(self.fleet_area.name, self.key)
  ```

---

### Hook (Ciclo di vita del modello):

1. **`clear_cache`**:
   - **Evento**: Dopo il salvataggio dell'impostazione (`AFTER_SAVE`).
   - **Descrizione**:
     - Elimina dalla cache (`CACHE`) i dati relativi alle aree associate alla flotta del proprietario.
     - Chiave eliminata: `AREAS::{self.fleet_area.fleet.owner}`.
   - **Gestione errori**:
     - In caso di errore, stampa un messaggio di errore.

---

### Funzione globale:
1. **`do_send_state_trip(trip, state)`**:
   - **Descrizione**:
     - Funzione indipendente che invia un comando relativo a uno stato di viaggio (`state`) per un determinato viaggio (`trip`).
   - **Dettagli**:
     - Importa il metodo `send_vehicle_command_for_trip` da `core.views`.
     - Esegue un'operazione di stampa preliminare (`print('prepping')`).
     - Esegue il comando `send_vehicle_command_for_trip(trip, state)`.

