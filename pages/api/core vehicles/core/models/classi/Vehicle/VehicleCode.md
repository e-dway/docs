---
sidebar_position: 3
---


### VehicleCode
La classe `VehicleCode` gestisce i codici associati ai veicoli, che possono essere utilizzati per identificazioni, operazioni specifiche o contesti particolari (es. QR code).

---

### Campi:

1. **`vehicle`**:
   - **Tipo**: `ForeignKey` su `Vehicle`
   - **Descrizione**: Il veicolo a cui il codice è associato.
   - **Opzioni**:
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione del veicolo se ci sono codici associati.
     - `related_name="codes"`: Permette di accedere ai codici di un veicolo tramite `vehicle.codes`.

2. **`code`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Il codice associato al veicolo (ad esempio, un identificativo unico o un QR code).
   - **Opzioni**:
     - Lunghezza massima: 500 caratteri.
     - Indicizzato nel database (`db_index=True`).

3. **`context`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Il contesto del codice (es., "internal", "qrcode").
   - **Opzioni**:
     - Lunghezza massima: 100 caratteri.

---

### Metodo speciale `__str__`:
- Restituisce una rappresentazione testuale del codice in relazione al veicolo e al contesto:
  ```python
  def __str__(self):
      return "{}::{}({})".format(self.vehicle, self.code, self.context)
  ```

---

### Meta:
- **`unique_together`**:
  - Specifica che la combinazione dei campi `vehicle` e `context` deve essere unica.

---

### Hook (Ciclo di vita del modello):

1. **`do_after_create_caches`**:
   - **Evento**: Dopo la creazione del codice (`AFTER_CREATE`).
   - **Descrizione**:
     - Aggiunge il codice alla cache (`GEOCACHE`).
     - Se il contesto è `"internal"`, memorizza un riferimento associato all'IMEI del veicolo.
     - Se il contesto contiene `"qrcode"`, aggiunge il codice e l'IMEI del veicolo nella cache con un formato specifico.

2. **`do_before_delete_cache`**:
   - **Evento**: Prima dell'eliminazione del codice (`BEFORE_DELETE`).
   - **Descrizione**:
     - Rimuove il codice dalla cache (`GEOCACHE`).
     - Se il contesto è `"internal"`, elimina la chiave associata all'IMEI.
     - Se il contesto contiene `"qrcode"`, elimina sia il codice sia i dati associati al veicolo.

