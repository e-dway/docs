---
sidebar_position: 1
---


La classe `Vehicle` rappresenta un modello Django per la gestione di veicoli specifici, incluse informazioni tecniche, di proprietà e operative. Inoltre, utilizza hook per interagire con una cache esterna (probabilmente Redis). Di seguito una descrizione dettagliata dei campi e delle funzionalità:

---

### Campi:
1. **`ident`**:
   - **Tipo**: `UUIDField`
   - **Descrizione**: Identificativo univoco del veicolo, generato automaticamente con `uuid.uuid4`.
   - **Chiave primaria**: Sì.

2. **`imei`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Codice IMEI (International Mobile Equipment Identity) associato al veicolo.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Predefinito: `'000000'`.
     - Indicizzato nel database (`db_index=True`).

3. **`model`**:
   - **Tipo**: `ForeignKey` su `VehicleModel`
   - **Descrizione**: Collega il veicolo al suo modello specifico.
   - **Opzioni**:
     - `null=True, blank=True`: Il campo è opzionale.
     - `related_name="vehicles"`: Consente di accedere ai veicoli associati a un modello tramite `model.vehicles`.

4. **`owner`**:
   - **Tipo**: `ForeignKey` su `Ownerships`
   - **Descrizione**: Proprietario del veicolo.
   - **Opzioni**:
     - `null=True, blank=True`: Campo opzionale.
     - Indicizzato nel database (`db_index=True`).

5. **`tags`**:
   - **Tipo**: `ManyToManyField` su `VehicleTag`
   - **Descrizione**: Associa uno o più tag al veicolo.
   - **Opzioni**:
     - `null=True, blank=True`: Campo opzionale.

6. **`protocol`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Protocollo utilizzato dal veicolo per la comunicazione (es., MQTT, HTTP).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

7. **`visible`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se il veicolo è visibile.
   - **Opzioni**:
     - Valore predefinito: `True`.
     - Indicizzato nel database (`db_index=True`).

8. **`rentable`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se il veicolo è disponibile per il noleggio.
   - **Valore predefinito**: `True`.

9. **`require_manual_update`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se il veicolo richiede aggiornamenti manuali.
   - **Valore predefinito**: `False`.

10. **`deleted`**:
    - **Tipo**: `DateTimeField`
    - **Descrizione**: Timestamp che indica se e quando il veicolo è stato eliminato logicamente.
    - **Opzioni**:
      - Campo opzionale (`null=True, blank=True`).

---

### Metodo speciale `__str__`:
- Restituisce il valore del campo `imei` come rappresentazione testuale del veicolo:
  ```python
  def __str__(self):
      return str(self.imei)
  ```

---

### Hook (Ciclo di vita del modello):
1. **`do_after_create_caches`**:
   - **Evento**: Dopo la creazione del veicolo (`AFTER_CREATE`).
   - **Descrizione**:
     - Aggiunge informazioni sul veicolo alla cache (`GEOCACHE`).
     - Memorizza dettagli come l'IMEI, l'UUID, il modello, e il tipo di veicolo.

2. **`remove_vehicle_from_cache` (prima dell'aggiornamento)**:
   - **Evento**: Prima dell'aggiornamento del proprietario (`BEFORE_UPDATE`), se il campo `owner` cambia.
   - **Descrizione**:
     - Rimuove l'IMEI del veicolo dalla lista associata al precedente proprietario nella cache.

3. **`remove_vehicle_from_cache` (dopo l'aggiornamento)**:
   - **Evento**: Dopo l'aggiornamento del proprietario (`AFTER_UPDATE`), se il campo `owner` cambia.
   - **Descrizione**:
     - Rimuove relazioni di flotta (`FleetVehicle`) e aggiunge l'IMEI del veicolo alla cache del nuovo proprietario.

4. **`remove_vehicle`**:
   - **Evento**: Prima dell'eliminazione del veicolo (`BEFORE_DELETE`).
   - **Descrizione**:
     - Cancella tutte le chiavi relative al veicolo dalla cache.

