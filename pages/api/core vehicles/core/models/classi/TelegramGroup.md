---
sidebar_position: 17
---

La classe `TelegramGroup` rappresenta un modello Django utilizzato per gestire gruppi Telegram associati a un'applicazione. Probabilmente è parte di un sistema che utilizza questi gruppi per notifiche, gestione di eventi, o altre funzionalità legate alla comunicazione. Ecco un'analisi dettagliata:

---

### Campi del modello:
1. **`channel_type`**:  
   - Tipo: `CharField`  
   - Descrizione: Specifica il tipo di canale. Qui è impostato di default a `"telegram"`.

2. **`channel_url`**:  
   - Tipo: `URLField`  
   - Descrizione: URL del canale Telegram. Può essere lasciato vuoto (`null=True, blank=True`).

3. **`channel_name`**:  
   - Tipo: `CharField`  
   - Descrizione: Nome del canale Telegram. Può essere facoltativo.

4. **`active`**:  
   - Tipo: `BooleanField`  
   - Descrizione: Indica se il gruppo è attivo.

5. **Flag di notifica/azione**:
   - **`alert`**: Se abilitare notifiche di allerta.
   - **`validate_docs`**: Se abilitare la convalida dei documenti.
   - **`trip_start`**: Se inviare notifiche per l'inizio del viaggio.
   - **`trip_end`**: Se inviare notifiche per la fine del viaggio (abilitato di default).
   - **`acquire_wallet`**: Notifiche relative al portafoglio dell'utente.
   - **`acquire_package`**: Notifiche relative ai pacchetti utente.
   - **`otp`**: Notifiche per OTP (One-Time Password).
   - **`battery`**: Notifiche legate alla batteria.
   - **`user_issues`**: Notifiche per problemi utente.
   - **`auto_user_blocks`**: Notifiche per blocchi automatici degli utenti.
   - **`crash`**: Notifiche per incidenti (abilitato di default).

6. **`events`**:  
   - Tipo: `TextField`  
   - Descrizione: Contiene un elenco di eventi (potenzialmente in formato JSON o altro formato strutturato).

7. **Identificazione del gruppo**:
   - **`group`**: Nome del gruppo.
   - **`gtype`**: Tipo del gruppo.
   - **`ident`**: Identificativo unico del gruppo.

8. **`silent`**:  
   - Tipo: `BooleanField`  
   - Descrizione: Se il gruppo è in modalità silenziosa (senza notifiche).

---


