---
sidebar_position: 2
---


## core_user 
   ### Descrizione 
   Questa tabella memorizza informazioni dettagliate sugli utenti, inclusi i loro dati personali e alcune informazioni legate alla loro organizzazione e dati di registrazione. È una tabella essenziale per la gestione degli utenti all'interno del sistema.
   
   ###  Campi
     - `username`: Identificatore univoco dell'utente (chiave primaria). Utilizzato come username per accedere al sistema.
     - `org`: Nome o identificatore dell'organizzazione a cui l'utente appartiene, se applicabile.
     - `data`: Campo generico che potrebbe contenere dati aggiuntivi o personalizzati relativi all'utente.
     - `registration`: Data di registrazione dell'utente nel sistema.
     - `birthdate`: Data di nascita dell'utente.
     - `familyname`: Cognome dell'utente.
     - `firstname`: Nome di battesimo dell'utente.
     - `phone`: Numero di telefono associato all'utente per contatti o autenticazione.
     - `deleted`: Booleano che indica se l'account dell'utente è stato cancellato o disabilitato.
     - `last_update`: Data dell'ultimo aggiornamento delle informazioni dell'utente.
     - `clients`: Informazioni sui clienti associati all'utente, se presenti. Potrebbe contenere una lista di clienti o dettagli legati a relazioni con altre entità.
     - `email`: Indirizzo email dell'utente, con una lunghezza massima di 500 caratteri.
     - `otp`: One Time Password (OTP), utilizzata per autenticazioni temporanee o sicure (es. per l'autenticazione a due fattori).

Questa tabella contiene sia informazioni personali che operative sull'utente, e l'attributo `deleted` consente di disabilitare gli account senza necessariamente cancellarli dal sistema.

## core_role

    ### Descrizione
    Gestisce i ruoli assegnati agli utenti del sistema.
    ### Campi
        `id`: Identificatore univoco del ruolo.\
        `name`: Nome del ruolo (es. amministratore, utente).\
        `description`: Breve descrizione del ruolo.\
        `permissions`: Lista dei permessi associati al ruolo.        

Ecco la descrizione della tabella `core_userblacklist` basata sulla struttura fornita:

## core_userblacklist
   ### Descrizione
   Questa tabella memorizza informazioni sugli utenti o entità che sono stati inseriti in una blacklist, solitamente per violazioni di regole o altri motivi che richiedono il blocco di un account o di un'entità associata. La tabella contiene anche dettagli sulle cause del blocco.
   
   ### Campi
     - `id`: Identificatore univoco della riga nella tabella (chiave primaria, tipo `SERIAL`).
     - `card`: Informazioni su una carta associata all'utente, se applicabile (potrebbe riferirsi a una carta di pagamento o identificazione).
     - `reason`: Motivo per cui l'utente o l'entità è stata inserita nella blacklist (ad esempio, violazioni di policy o comportamenti inappropriati).
     - `phone`: Numero di telefono dell'utente inserito nella blacklist.
     - `user`: Identificatore dell'utente inserito nella blacklist (può essere un collegamento al nome utente).
     - `owner`: Nome del proprietario o entità che ha gestito l'inserimento dell'utente nella blacklist.
     - `admin_blocked`: Booleano che indica se l'utente è stato bloccato direttamente da un amministratore.
     - `ip`: Indirizzo IP dell'utente, utile per tracciare la provenienza dell'azione o dell'accesso.
     - `ts`: Timestamp con il fuso orario (`TIMESTAMPTZ`) che indica quando l'utente è stato inserito nella blacklist o bloccato.

Questa tabella permette di tenere traccia degli utenti bloccati, fornendo dettagli come il motivo del blocco, l'amministratore che ha eseguito l'azione e altre informazioni identificative come il numero di telefono o l'indirizzo IP.

