---
sidebar_position: 1
---

# auth_ Tables

### **`auth_group`**
   - **Descrizione**: Gestisce i gruppi di autorizzazione nel sistema. Ogni gruppo rappresenta un insieme di permessi che possono essere assegnati a più utenti.
   - **Campi**:
     - `id`: Identificatore univoco del gruppo (chiave primaria).
     - `name`: Nome del gruppo, deve essere univoco (ha un vincolo di unicità).

### **`auth_group_permissions`**
   - **Descrizione**: Associa i gruppi ai permessi specifici. Ogni gruppo può avere diversi permessi associati.
   - **Campi**:
     - `id`: Identificatore univoco della relazione tra gruppo e permesso.
     - `group_id`: Riferimento al gruppo (`auth_group`).
     - `permission_id`: Riferimento al permesso (`auth_permission`).
   - **Vincoli**:
     - Chiavi esterne su `group_id` e `permission_id` per assicurare integrità referenziale.
     - Un vincolo di unicità sull'associazione tra `group_id` e `permission_id` per evitare duplicati.

### **`auth_permission`**
   - **Descrizione**: Contiene i dettagli dei permessi che possono essere assegnati a gruppi o utenti.
   - **Campi**:
     - `id`: Identificatore univoco del permesso.
     - `content_type_id`: Riferimento al tipo di contenuto (`django_content_type`).
     - `codename`: Codice univoco che rappresenta il permesso.
     - `name`: Nome descrittivo del permesso.
   - **Vincoli**:
     - Vincolo di unicità sulla combinazione `content_type_id` e `codename` per evitare duplicati.
     - Chiave esterna su `content_type_id` per assicurare integrità referenziale.

### **`auth_user`**
   - **Descrizione**: Contiene le informazioni sugli utenti registrati nel sistema, inclusi i dettagli di accesso e le proprietà dell'account.
   - **Campi**:
     - `id`: Identificatore univoco dell'utente.
     - `password`: Hash della password.
     - `last_login`: Data e ora dell'ultimo accesso.
     - `is_superuser`: Indica se l'utente ha privilegi di superuser.
     - `username`: Nome utente utilizzato per l'accesso (deve essere univoco).
     - `last_name`: Cognome dell'utente.
     - `email`: Indirizzo email dell'utente.
     - `is_staff`: Indica se l'utente è membro dello staff.
     - `is_active`: Indica se l'account è attivo.
     - `date_joined`: Data di registrazione dell'utente.
     - `first_name`: Nome di battesimo dell'utente.
   - **Vincoli**:
     - Vincolo di unicità sul campo `username`.

### **`auth_user_groups`**
   - **Descrizione**: Gestisce l'associazione tra gli utenti e i gruppi di autorizzazione.
   - **Campi**:
     - `id`: Identificatore univoco della relazione.
     - `user_id`: Riferimento all'utente (`auth_user`).
     - `group_id`: Riferimento al gruppo (`auth_group`).
   - **Vincoli**:
     - Un vincolo di unicità sull'associazione tra `user_id` e `group_id`.
     - Chiavi esterne su `user_id` e `group_id` per garantire integrità referenziale.

### **`auth_user_user_permissions`**
   - **Descrizione**: Associa utenti specifici ai permessi. Ogni utente può avere permessi individuali oltre a quelli dei gruppi.
   - **Campi**:
     - `id`: Identificatore univoco della relazione.
     - `user_id`: Riferimento all'utente (`auth_user`).
     - `permission_id`: Riferimento al permesso (`auth_permission`).
   - **Vincoli**:
     - Un vincolo di unicità sull'associazione tra `user_id` e `permission_id`.
     - Chiavi esterne su `user_id` e `permission_id` per garantire integrità referenziale.

