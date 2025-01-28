---
sidebar_position: 2
---

### Descrizione della classe `XVehicleSchema`

La classe `XVehicleSchema` è uno schema Ninja API basato sul modello `Vehicle`. È progettata per serializzare le informazioni di un veicolo, inclusi campi e relazioni aggiuntive come codici del veicolo, flotte e modello del veicolo.

---

### Attributi della Classe

1. **`codes`**:
   - **Tipo**: `List[VehicleCodeSchema]`
   - **Descrizione**: Una lista di codici del veicolo, filtrati per contesti specifici (ad esempio, "internal", "qrcode", "qrcode2").

2. **`model`**:
   - **Tipo**: `VehicleModelSchema`
   - **Descrizione**: Informazioni dettagliate sul modello del veicolo, serializzate utilizzando `VehicleModelSchema`.

3. **`fleet`**:
   - **Tipo**: `Optional[str]`
   - **Descrizione**: Il nome della flotta principale a cui è associato il veicolo (campo calcolato).

4. **`fleets`**:
   - **Tipo**: `Optional[List[CompactFleetSchema]]`
   - **Descrizione**: Lista delle flotte associate al veicolo, rappresentate tramite `CompactFleetSchema`.

5. **Config**:
   - **`model`**: Specifica che lo schema è basato sul modello `Vehicle`.
   - **`model_fields`**: Include tutti i campi del modello Django `Vehicle`.

---

### Metodi Personalizzati

1. **`resolve_fleet`**
   - **Descrizione**: Restituisce una stringa contenente i nomi delle flotte associate al veicolo, separati da virgole.
   - **Logica**:
     - Itera su tutte le flotte collegate al veicolo tramite la relazione `fleets`.
   - **Implementazione**:
     ```python
     @staticmethod
     def resolve_fleet(obj):
         return ", ".join([f.fleet.name for f in obj.fleets.all()])
     ```

2. **`resolve_fleets`**
   - **Descrizione**: Restituisce una lista di oggetti `CompactFleetSchema` che rappresentano le flotte collegate al veicolo.
   - **Logica**:
     - Itera su tutte le flotte collegate e restituisce l'oggetto relativo.
   - **Implementazione**:
     ```python
     @staticmethod
     def resolve_fleets(obj):
         return [f.fleet for f in obj.fleets.all()]
     ```

3. **`resolve_codes`**
   - **Descrizione**: Filtra i codici del veicolo in base al contesto specificato (`internal`, `qrcode`, `qrcode2`).
   - **Logica**:
     - Applica un filtro sul campo `context` per ottenere solo i codici rilevanti.
   - **Implementazione**:
     ```python
     @staticmethod
     def resolve_codes(obj):
         return [f for f in obj.codes.filter(context__in=["internal", "qrcode", "qrcode2"])]
     ```

---

### Campi Commentati (Non Attivi)

1. **`resolve_last_seen`**
   - Era progettato per restituire il timestamp dell'ultima attività del veicolo, recuperato dal campo `data`.

2. **`resolve_battery`**
   - Era progettato per ottenere il livello della batteria del veicolo, cercando nei dati memorizzati.

3. **`resolve_charging`**
   - Doveva indicare lo stato di ricarica del veicolo.

4. **`resolve_locked`**
   - Doveva determinare lo stato di blocco del veicolo.

5. **`resolve_engine`**
   - Era progettato per indicare se l'accensione del motore è attiva.

6. **`resolve_status`**
   - Doveva restituire lo stato operativo del veicolo, come "in trip" o "booked", basandosi sulle relazioni con `Trip` e `Booking`.

