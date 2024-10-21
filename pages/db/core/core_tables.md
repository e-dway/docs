---
sidebar_position: 2
---

# core_ Tables

## core_booking

    ### Descrizione
    Gestisce le prenotazioni fatte dagli utenti.
    ### Campi
        `id`: Identificatore univoco della prenotazione (chiave primaria).\
        `user`: Utente che ha effettuato la prenotazione.\
        `vehicle`: Veicolo prenotato.\
        `booking_moment`: Momento di inizio della prenotazione.\
        `booking_until`: Momento di fine della prenotazione.\
        `status`: Stato della prenotazione (es. attiva, completata, cancellata).\
        `owner`: Proprietario del sistema o dell'entità legata alla prenotazione.

## core_fencing

    ###  Descrizione
    Collega aree geografiche (probabilmente per geofencing) con veicoli.
    ### Campi
        `area`: Definisce l'area geografica (es. tramite poligoni o regioni predefinite).\
        `vehicle`: Identificatore del veicolo (chiave primaria).

## core_fleet

    ###  Descrizione
    Contiene le informazioni di base sulla flotta di veicoli.
    ###  Campi
        `id`: Identificatore univoco del veicolo o della flotta (UUID, chiave primaria).\
        `name`: Nome assegnato al veicolo o alla flotta.\
        `freefloating`: Booleano che indica se il veicolo è disponibile per il noleggio libero.\
        `require_activation`: Indica se il veicolo richiede un'attivazione prima dell'uso.\
        `owner_id`: Riferimento al proprietario del veicolo o della flotta.\
        `active`: Se il veicolo è attivo e disponibile.\
        `exclusive`: Indica se il veicolo è riservato per usi esclusivi.\
        `payment_mode`: Modalità di pagamento accettata per il noleggio.\
        `telegram_group`: Riferimento a un eventuale gruppo Telegram associato.\
        `storage`: Booleano che indica se il veicolo è in magazzino.\
        `deleted`: Se il veicolo è stato eliminato o non è più disponibile.\
        `require_payment_method`: Booleano che indica se è necessario un metodo di pagamento.\
        `structural`: Indica se è un veicolo strutturale.

## core_fleet_access

    ###  Descrizione
    Gestisce i diritti di accesso ai veicoli della flotta.
    ###  Campi
        `fleet_id`: Identificatore della flotta.\
        `user_id`: Identificatore dell'utente che ha accesso alla flotta.\
        `role`: Ruolo assegnato all'utente (es. amministratore, utente normale).\
        `granted_by`: Chi ha concesso l'accesso all'utente.\

## core_ownerships

    ###  Descrizione
    Traccia le informazioni sui proprietari delle flotte o dei veicoli.
    ###  Campi
        `ident`: Identificatore univoco del proprietario (UUID, chiave primaria).\
        `owner_name`: Nome del proprietario.\
        `fleet_name`: Nome della flotta associata al proprietario.\
        `contact_email`: Email di contatto del proprietario.\
        `contact_phone`: Numero di telefono del proprietario.\

## core_vehicles

    ###  Descrizione
    Contiene informazioni sui singoli veicoli gestiti dal sistema.
    ###  Campi
        `id`: Identificatore univoco del veicolo.\
        `fleet_id`: Collegamento alla flotta di appartenenza.\
        `license_plate`: Targa del veicolo.\
        `vin`: Numero di identificazione del veicolo (VIN).\
        `make: Marca del veicolo.\
        `model`: Modello del veicolo.\
        `year`: Anno di fabbricazione.\
        `fuel_type`: Tipo di carburante utilizzato.\
        `status`: Stato attuale del veicolo (disponibile, in manutenzione, ecc.).

## core_payment
   ### Descrizione
   Traccia e gestisce i pagamenti effettuati dagli utenti per i servizi forniti, come l'uso di veicoli o altri servizi offerti dalla piattaforma. Questa tabella registra i dettagli di ogni transazione finanziaria.
   ### Campi
     - `id`: Identificatore univoco del pagamento.
     - `user_id`: Identificatore dell'utente che ha effettuato il pagamento. Collega l'utente che ha effettuato il pagamento alla tabella `core_users`.
     - `amount`: Importo totale del pagamento effettuato.
     - `currency`: Valuta in cui è stato effettuato il pagamento (es. EUR, USD).
     - `payment_method`: Metodo utilizzato per il pagamento (es. carta di credito, PayPal, bonifico).
     - `status`: Stato attuale del pagamento (es. completato, in sospeso, fallito).
     - `transaction_id`: Identificatore della transazione, fornito dal fornitore del pagamento (es. banca o gateway di pagamento).
     - `payment_date`: Data e ora in cui è stato effettuato il pagamento.
     - `description`: Descrizione opzionale del pagamento (ad esempio, il motivo del pagamento o dettagli aggiuntivi sulla transazione).

Questa tabella consente di registrare e monitorare tutti i pagamenti effettuati dagli utenti, mantenendo traccia del metodo di pagamento utilizzato, dell'importo e dello stato di ogni transazione.

Ecco la descrizione della tabella `core_user` basata sulla struttura che hai fornito:

## core_logs

    ###  Descrizione
    Registra le operazioni e gli eventi che accadono nel sistema.
    ###  Campi
        `id`: Identificatore univoco del log.\
        `event_type`: Tipo di evento registrato (es. login, prenotazione).\
        `description`: Descrizione dettagliata dell'evento.\
        `timestamp`: Data e ora in cui l'evento è stato registrato.\
        `user_id`: Collegamento all'utente che ha generato l'evento (se applicabile).

## core_fleetarea

    ### Descrizione
    Gestisce le aree geografiche specifiche associate a una flotta di veicoli. È probabile che venga utilizzata per definire i limiti operativi o le zone in cui i veicoli di una determinata flotta possono essere utilizzati.
    ### Campi
        `id`: Identificatore univoco dell'area geografica associata alla flotta.\
        `fleet_id`: Identificatore della flotta associata a questa area. Questo campo collega l'area a una specifica flotta di veicoli.\
        `area: Descrizione dell'area o riferimento a un'area geografica specifica (potrebbe trattarsi di coordinate geografiche o zone definite per l'uso del veicolo).\
        `name`: Nome o descrizione dell'area (es. "Zona Centro" o "Parcheggio Nord").\
        `is_active`: Booleano che indica se l'area è attiva o no. Serve per abilitare o disabilitare l'uso della flotta in quella particolare area.\
        `polygon`: Descrizione dei confini dell'area (potrebbe essere un campo che rappresenta un poligono geografico usato per il geofencing).

Questa tabella consente di collegare aree geografiche specifiche con le flotte, permettendo operazioni in aree definite o limitate per motivi operativi, di sicurezza, o per regole aziendali.

## core_fleetsettings

    ### Descrizione
    Memorizza le impostazioni specifiche di configurazione per una determinata flotta di veicoli. Queste impostazioni possono includere preferenze di funzionamento, requisiti di pagamento o altre regole operative che governano il comportamento della flotta.
    ### Campi
        `id`: Identificatore univoco della riga di configurazione.\
        `fleet_id`: Identificatore della flotta a cui si applicano queste impostazioni. Collegato alla tabella core_fleet.\
        `setting_key`: Nome o chiave dell'impostazione specifica (es. "max_speed_limit" per il limite massimo di velocità o "require_driver_license" per richiedere la patente).\
        `setting_value`: Valore dell'impostazione. Può essere di vario tipo (es. un numero per un limite di velocità o un valore booleano per un'opzione abilitata/disabilitata).\
        `description`: Descrizione dell'impostazione per fornire un contesto aggiuntivo sul suo uso e significato.\

Questa tabella consente di gestire le configurazioni personalizzate per ogni flotta, permettendo di impostare parametri operativi specifici come limiti di velocità, modalità di pagamento, o altre preferenze tecniche o operative.

## core_fleetvehicle
   ### Descrizione
   Collega i veicoli a una specifica flotta. Questa tabella tiene traccia dei veicoli assegnati a una flotta particolare, permettendo di gestire la composizione e l'organizzazione della flotta.
   ### Campi
     - `id`: Identificatore univoco della riga che collega il veicolo alla flotta.
     - `fleet_id`: Identificatore della flotta a cui è associato il veicolo. Collega il veicolo a una specifica flotta, generalmente riferito alla tabella `core_fleet`.
     - `vehicle_id`: Identificatore univoco del veicolo. Collega il veicolo alla tabella `core_vehicles`, che contiene i dettagli specifici del veicolo.
     - `is_active`: Booleano che indica se il veicolo è attivo o meno all'interno della flotta. Utilizzato per abilitare o disabilitare l'uso del veicolo nella flotta.
     - `assigned_at`: Data e ora in cui il veicolo è stato assegnato alla flotta.

Questa tabella consente di gestire l'inventario dei veicoli assegnati a una flotta specifica, tenendo traccia dello stato attuale e della disponibilità di ogni veicolo all'interno di quella flotta.


## core_iotmodel
   ### Descrizione 
   Gestisce i modelli di dispositivi IoT (Internet of Things) utilizzati per monitorare e controllare i veicoli o altre risorse in una flotta. Ogni modello IoT potrebbe avere caratteristiche specifiche come sensori, connettività e funzionalità operative che vengono utilizzate per raccogliere dati o controllare i veicoli a distanza.
   ### Campi
     - `id`: Identificatore univoco del modello di dispositivo IoT.
     - `name`: Nome del modello IoT (ad esempio, il nome del dispositivo o della marca).
     - `manufacturer`: Nome del produttore del dispositivo IoT.
     - `hardware_version`: Versione hardware del dispositivo IoT.
     - `firmware_version`: Versione del firmware installato sul dispositivo IoT.
     - `supported_features`: Lista o descrizione delle funzionalità supportate dal dispositivo IoT (ad esempio, GPS, monitoraggio del carburante, controllo remoto del veicolo).
     - `description`: Descrizione del modello IoT, che spiega il suo utilizzo, le sue capacità o altre informazioni utili.

Questa tabella consente di gestire e descrivere i vari modelli di dispositivi IoT utilizzati nella flotta, fornendo informazioni sulle capacità tecniche e operative di ciascun modello per aiutare nella gestione e nel monitoraggio dei veicoli o delle risorse associate.