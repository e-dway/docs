---
sidebar_position: 3
---

La classe `IOTModel` rappresenta un modello Django che descrive dispositivi IoT (Internet of Things). Questa classe è probabilmente utilizzata per gestire i modelli di dispositivi IoT associati a un sistema, come tracker GPS o controller veicolari. Ecco un'analisi dettagliata:

---

### Campi del modello:
1. **`id`**:
   - **Tipo**: `UUIDField`
   - **Descrizione**: Identificativo univoco del dispositivo IoT, generato automaticamente con `uuid.uuid4`.
   - **Chiave primaria**: Sì.

2. **`name`**:
   - **Tipo**: `CharField`
   - **Lunghezza massima**: 200 caratteri.
   - **Descrizione**: Nome del modello IoT (ad esempio, "Tracker 3000" o "BLE Sensor V2").

3. **`brand`**:
   - **Tipo**: `CharField`
   - **Lunghezza massima**: 200 caratteri.
   - **Descrizione**: Il marchio del dispositivo (ad esempio, "Garmin", "Bosch", ecc.).

4. **`manual`**:
   - **Tipo**: `URLField`
   - **Descrizione**: URL del manuale del dispositivo IoT. È opzionale e può essere lasciato vuoto (`null=True, blank=True`).

5. **`use_ble`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se il dispositivo utilizza la tecnologia BLE (Bluetooth Low Energy). Il valore predefinito è `False`.

6. **`ble_uuids`**:
   - **Tipo**: `TextField`
   - **Descrizione**: Un campo per memorizzare UUID BLE (Bluetooth Low Energy), che potrebbero essere necessari per identificare servizi o caratteristiche BLE. È opzionale e può essere lasciato vuoto.

---

### Metodo speciale `__str__`:
- **Descrizione**:
  - Restituisce una rappresentazione leggibile del record, combinando il marchio e il nome del modello:
    ```python
    def __str__(self):
        return f"{self.brand} - {self.name}"
    ```

