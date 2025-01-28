---
sidebar_position: 6
---

La classe `Ownerships` è un modello Django che rappresenta un'entità legata probabilmente alla proprietà o gestione di risorse (ad esempio, flotte o utenti) in un sistema. Questo modello include funzionalità per il ciclo di vita degli oggetti e per eseguire azioni specifiche dopo la creazione di un record. Ecco un'analisi dettagliata:

---

### Campi del modello:
1. **`ident`**:
   - Tipo: `UUIDField`
   - Descrizione: Identificatore univoco del record. È definito come chiave primaria e utilizza un UUID generato automaticamente tramite `uuid.uuid4`.

2. **`name`**:
   - Tipo: `CharField`
   - Descrizione: Nome dell'oggetto (ad esempio, il nome della proprietà o entità).

3. **`telegram_group`**:
   - Tipo: `CharField`
   - Descrizione: Collegamento a un gruppo Telegram (probabilmente rappresenta un'identità associata al gruppo). Può essere lasciato vuoto.

4. **`enabled`**:
   - Tipo: `BooleanField`
   - Descrizione: Indica se questa entità è attiva o meno.

5. **`app_code`**:
   - Tipo: `CharField`
   - Descrizione: Un codice specifico per un'applicazione associata. Può essere facoltativo.

6. **`custom_app`**:
   - Tipo: `BooleanField`
   - Descrizione: Indica se l'entità utilizza un'applicazione personalizzata.

7. **`temporary`**:
   - Tipo: `CharField`
   - Descrizione: Campo generico, il cui significato esatto dipende dal contesto (può contenere informazioni temporanee).

8. **`apple_app_id`**:
   - Tipo: `CharField`
   - Descrizione: Identificatore specifico per l'app su Apple Store. Facoltativo.

9. **`google_app_id`**:
   - Tipo: `CharField`
   - Descrizione: Identificatore specifico per l'app su Google Play Store. Facoltativo.

10. **`flespi_id`**:
    - Tipo: `CharField`
    - Descrizione: ID specifico per l'integrazione con Flespi (probabilmente un servizio IoT o di telemetria). Facoltativo.

---

### Metodo speciale `__str__`:
- Ritorna il nome dell'entità come rappresentazione testuale del record:
  ```python
  return self.name
  ```

---

### Hook `do_after_create_jobs`:
- **Descrizione**:
  - Questo metodo viene eseguito automaticamente **dopo la creazione** del record grazie al decoratore `@hook(AFTER_CREATE)`.
  - In questo caso, stampa semplicemente un messaggio: `"OWNERSHIP CREATED!!"`.
  
