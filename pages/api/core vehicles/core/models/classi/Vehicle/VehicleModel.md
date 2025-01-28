---
sidebar_position: 6
---

La classe `VehicleModel` rappresenta un modello Django che gestisce i dettagli di un modello specifico di veicolo, compresa la sua configurazione tecnica, la marca, il tipo e le capacità. Questa classe è integrata con altri modelli (come `VehicleType`, `VehicleBrand` e `IOTModel`) per strutturare le relazioni tra le entità. Ecco una descrizione dettagliata:

---

### Campi del modello:
1. **`ident`**:
   - **Tipo**: `UUIDField`
   - **Descrizione**: Identificativo univoco per ogni modello di veicolo, generato automaticamente tramite `uuid.uuid4`.
   - **Chiave primaria**: Sì.

2. **`iot`**:
   - **Tipo**: `ForeignKey` su `IOTModel`
   - **Descrizione**: Indica un modello IoT associato al veicolo (ad esempio, hardware di telemetria o sensori). È opzionale (`null=True, blank=True`).
   - **Comportamento in caso di eliminazione**: `PROTECT` (non permette l'eliminazione del modello IoT se ci sono riferimenti a esso).

3. **`name`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Nome del modello di veicolo (es., "Model X", "Civic 2023").

4. **`image`**:
   - **Tipo**: `URLField`
   - **Descrizione**: URL dell'immagine del modello (ad esempio, una foto o un'illustrazione del veicolo). È opzionale.

5. **`vehicle_type`**:
   - **Tipo**: `ForeignKey` su `VehicleType`
   - **Descrizione**: Collega il modello a un tipo specifico di veicolo (ad esempio, "auto", "moto").
   - **Relazione inversa**: `related_name="models"` consente di accedere a tutti i modelli di un tipo di veicolo.

6. **`model_brand`**:
   - **Tipo**: `ForeignKey` su `VehicleBrand`
   - **Descrizione**: Collega il modello alla marca (ad esempio, "Toyota", "BMW").

7. **`model_name`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Nome specifico del modello.

8. **`connection`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Specifica il tipo di connessione utilizzato dal veicolo (ad esempio, "Wi-Fi", "4G").

9. **`protocol`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Protocollo di comunicazione del veicolo (ad esempio, "MQTT", "HTTP").

10. **`middleware`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Middleware utilizzato per l'integrazione del veicolo. Valore predefinito: `"flespi"`.

11. **`hardware`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Hardware associato al modello. È opzionale.

12. **`requires_doc`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Documentazione necessaria per l'utilizzo del veicolo. Valore predefinito: stringa vuota.

13. **`manual`**:
    - **Tipo**: `URLField`
    - **Descrizione**: URL del manuale del veicolo. È opzionale.

14. **`description`**:
    - **Tipo**: `TextField`
    - **Descrizione**: Una descrizione dettagliata del modello di veicolo. È opzionale.

15. **`rider_capacity`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Capacità massima di passeggeri del veicolo. È opzionale.

16. **`cargo_volume_capacity`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Volume massimo di carico trasportabile dal veicolo. È opzionale.

---

### Metodo speciale `__str__`:
- **Descrizione**:
  - Restituisce il valore del campo `name` come rappresentazione testuale del record:
    ```python
    def __str__(self):
        return self.name
    ```

