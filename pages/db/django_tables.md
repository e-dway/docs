---
sidebar_position: 3
---

# django_ Tables

### **`django_admin_log`**
   - **Descrizione**: Registra le operazioni eseguite tramite l'interfaccia di amministrazione di Django, tenendo traccia dei cambiamenti fatti dagli utenti con privilegi di amministratore.
   - **Campi**:
     - `id`: Identificatore univoco del log (chiave primaria, tipo `SERIAL`).
     - `action_time`: Timestamp dell'azione, con indicazione del fuso orario (`TIMESTAMPTZ`), che indica quando è stata eseguita l'operazione.
     - `object_id`: ID dell'oggetto modificato o cancellato, memorizzato come testo.
     - `object_repr`: Rappresentazione testuale dell'oggetto modificato (ad esempio, una stringa descrittiva dell'oggetto).
     - `change_message`: Descrizione del cambiamento effettuato (es. cosa è stato modificato).
     - `content_type_id`: Riferimento alla `django_content_type`, che specifica il tipo di contenuto dell'oggetto modificato.
     - `user_id`: Identificatore dell'utente che ha eseguito l'azione, con chiave esterna alla `auth_user`.
     - `action_flag`: Flag che indica il tipo di azione eseguita (es. aggiunta, modifica, eliminazione).

### **`django_content_type`**
   - **Descrizione**: Mappa i modelli presenti nelle app Django, consentendo di identificare il tipo di contenuto a cui appartiene un oggetto. È usata per gestire i permessi e le operazioni a livello di contenuto.
   - **Campi**:
     - `id`: Identificatore univoco (chiave primaria, tipo `SERIAL`).
     - `app_label`: Nome dell'applicazione a cui appartiene il modello.
     - `model`: Nome del modello all'interno dell'applicazione.
     - **Indice univoco**: È presente un vincolo di unicità sui campi `app_label` e `model`, per garantire che ogni combinazione sia unica.

### **`django_migrations`**
   - **Descrizione**: Tiene traccia delle migrazioni eseguite per ogni app Django, utilizzata dal framework per aggiornare il database in base alle modifiche del modello.
   - **Campi**:
     - `id`: Identificatore univoco della migrazione (chiave primaria, tipo `SERIAL`).
     - `app`: Nome dell'applicazione Django a cui si riferisce la migrazione.
     - `name`: Nome della migrazione (solitamente corrisponde al file di migrazione).
     - `applied`: Data e ora in cui la migrazione è stata applicata.

### **`django_session`**
   - **Descrizione**: Gestisce le sessioni degli utenti in Django, utilizzata per memorizzare i dati di sessione associati a una chiave di sessione specifica.
   - **Campi**:
     - `session_key`: Identificatore univoco della sessione (chiave primaria).
     - `session_data`: Dati relativi alla sessione, memorizzati come testo (solitamente serializzati).
     - `expire_date`: Data e ora di scadenza della sessione.

### **`spatial_ref_sys`**
   - **Descrizione**: Contiene informazioni sui sistemi di riferimento spaziale (SRID), utilizzati nei database per rappresentare coordinate geografiche e proiezioni cartografiche.
   - **Campi**:
     - `srid`: Identificatore del sistema di riferimento spaziale (chiave primaria).
     - `auth_name`: Nome dell'autorità che definisce il sistema di riferimento (es. "EPSG").
     - `auth_srid`: SRID corrispondente secondo l'autorità.
     - `srtext`: Definizione testuale del sistema di riferimento spaziale.
     - `proj4text`: Definizione Proj4 del sistema di riferimento, utilizzata per la proiezione delle coordinate.

Queste tabelle fanno parte della struttura di Django per gestire le operazioni amministrative, il tracciamento delle modifiche, e le informazioni spaziali. Se desideri ulteriori dettagli su qualche specifica o campo, fammi sapere!