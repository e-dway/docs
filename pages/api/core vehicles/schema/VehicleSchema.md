---
sidebar_position: 2
---

### Descrizione della classe `VehicleSchema`

La classe `VehicleSchema` è uno schema Ninja API progettato per serializzare le informazioni del modello `Vehicle`. Lo schema include campi diretti, relazioni con altri modelli e campi calcolati tramite metodi personalizzati. Lo scopo principale di questa classe è fornire una rappresentazione dettagliata di un veicolo, arricchita da informazioni derivate.

---

### Attributi della Classe

1. **`codes`**
   - **Tipo**: `List[VehicleCodeSchema]`
   - **Descrizione**: Una lista di codici associati al veicolo, rappresentati dallo schema `VehicleCodeSchema`.

2. **`model`**
   - **Tipo**: `VehicleModelSchema`
   - **Descrizione**: Dettagli del modello del veicolo, rappresentati dallo schema `VehicleModelSchema`.

3. **`fleet`**
   - **Tipo**: `Optional[str]`
   - **Descrizione**: Nome della flotta principale a cui il veicolo è associato (campo calcolato).

4. **`fleets`**
   - **Tipo**: `Optional[List[CompactFleetSchema]]`
   - **Descrizione**: Lista di flotte associate al veicolo, rappresentate dallo schema `CompactFleetSchema`.

5. **`last_seen`**
   - **Tipo**: `Optional[str]`
   - **Descrizione**: Timestamp dell'ultima attività del veicolo (commentato nella classe).

6. **`battery`**
   - **Tipo**: `Optional[int]`
   - **Descrizione**: Livello della batteria del veicolo (campo opzionale con valore predefinito `0`).

7. **`status`**
   - **Tipo**: `Optional[str]`
   - **Descrizione**: Stato operativo del veicolo, come "in trip" o "booked" (campo calcolato).

8. **`charging`**
   - **Tipo**: `Optional[bool]`
   - **Descrizione**: Stato di ricarica del veicolo (campo opzionale con valore predefinito `False`).

9. **`locked`**
   - **Tipo**: `Optional[bool]`
   - **Descrizione**: Indica se il veicolo è bloccato (campo opzionale con valore predefinito `True`).

10. **`engine`**
    - **Tipo**: `Optional[bool]`
    - **Descrizione**: Indica se il motore del veicolo è acceso (campo opzionale con valore predefinito `False`).

---

### Configurazione

1. **`model`**
   - Specifica che lo schema si basa sul modello `Vehicle`.

2. **`model_fields`**
   - Include tutti i campi definiti nel modello Django `Vehicle` (`"__all__"`).

---

### Metodi Personalizzati

1. **`resolve_fleet`**
   - **Descrizione**: Restituisce una stringa contenente i nomi delle flotte associate al veicolo, separati da virgole.
   - **Logica**:
     - Itera su tutte le flotte collegate tramite la relazione `fleets`.
   - **Implementazione**:
     ```python
     @staticmethod
     def resolve_fleet(obj):
         return ", ".join([f.fleet.name for f in obj.fleets.all()])
     ```

2. **`resolve_fleets`**
   - **Descrizione**: Restituisce una lista di oggetti `CompactFleetSchema` che rappresentano le flotte associate al veicolo.
   - **Logica**:
     - Itera su tutte le flotte collegate tramite la relazione `fleets`.
   - **Implementazione**:
     ```python
     @staticmethod
     def resolve_fleets(obj):
         return [f.fleet for f in obj.fleets.all()]
     ```

3. **`resolve_status`**
   - **Descrizione**: Determina lo stato operativo del veicolo, come "in trip" o "booked".
   - **Logica**:
     - Se esistono viaggi (`Trip`) in corso per il veicolo, restituisce `"in trip"` seguito dallo stato del viaggio.
     - Se il veicolo è prenotato (`Booking`) e la prenotazione è ancora valida, restituisce `"booked"`.
   - **Implementazione**:
     ```python
     @staticmethod
     def resolve_status(obj):
         if Trip.objects.filter(vehicle=obj.imei, end__isnull=True).count() > 0:
             ret = "in trip"
             t = Trip.objects.filter(vehicle=obj.imei, end__isnull=True).first()
             ret += " " + t.status
             return ret

         if Booking.objects.filter(vehicle=obj.imei, booking_until__gte=datetime.datetime.now()).count() > 0:
             return "booked"
     ```

---

### Campi Commentati (Non Attivi)

1. **`resolve_last_seen`**
   - Doveva restituire il timestamp dell'ultima attività del veicolo.

2. **`resolve_battery`**
   - Doveva ottenere il livello della batteria dal campo `data`.

3. **`resolve_charging`**
   - Doveva indicare lo stato di ricarica del veicolo.

4. **`resolve_locked`**
   - Doveva determinare lo stato di blocco del veicolo.

5. **`resolve_engine`**
   - Doveva indicare lo stato del motore del veicolo.


