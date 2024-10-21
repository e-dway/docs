---
sidebar_position: 3
---

# fleet

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




