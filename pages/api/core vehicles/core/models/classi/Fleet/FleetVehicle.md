---
sidebar_position: 5
---

### FleetVehicle
La classe `FleetVehicle` rappresenta un modello Django per definire la relazione tra una flotta e i veicoli che ne fanno parte. Gestisce informazioni come l'appartenenza del veicolo alla flotta e la sua priorità (ad esempio, se è il veicolo principale).

---

### Campi:

1. **`vehicle`**:
   - **Tipo**: `ForeignKey` su `Vehicle`
   - **Descrizione**: Il veicolo associato alla flotta.
   - **Opzioni**:
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione del veicolo se è associato a una flotta.
     - `related_name="fleets"`: Consente di accedere alle flotte associate a un veicolo tramite `vehicle.fleets`.

2. **`fleet`**:
   - **Tipo**: `ForeignKey` su `Fleet`
   - **Descrizione**: La flotta a cui il veicolo è associato.
   - **Opzioni**:
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione della flotta se è associata a un veicolo.
     - `related_name="vehicles"`: Consente di accedere ai veicoli di una flotta tramite `fleet.vehicles`.

3. **`main`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se il veicolo è il veicolo principale della flotta.
   - **Opzioni**:
     - Valore predefinito: `False`.

---

### Metodo speciale `__str__`:
- Restituisce una rappresentazione testuale della relazione tra flotta e veicolo:
  ```python
  def __str__(self):
      return "{}::{}".format(self.fleet, self.vehicle)
  ```

---

### Hook (Ciclo di vita del modello):

1. **`do_after_create_caches`**:
   - **Evento**: Dopo la creazione della relazione (`AFTER_CREATE`).
   - **Descrizione**:
     - Aggiorna la cache (`GEOCACHE`) con:
       - Nomi delle flotte a cui il veicolo appartiene.
       - ID delle flotte associate al veicolo.
       - Inserisce l'IMEI del veicolo nella lista della flotta specifica per il proprietario.

2. **`do_after_delete_caches`**:
   - **Evento**: Dopo l'eliminazione della relazione (`AFTER_DELETE`).
   - **Descrizione**:
     - Aggiorna la cache rimuovendo:
       - Il nome della flotta dalla lista delle flotte associate al veicolo.
       - L'ID della flotta dalla lista degli ID delle flotte associate al veicolo.
       - L'IMEI del veicolo dalla lista della flotta specifica per il proprietario.

