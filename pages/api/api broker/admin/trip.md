---
sidebar_position: 5
---

# Trip

# Start_trip

Il metodo start_trip è un endpoint API creato per gestire l'avvio di un viaggio per un veicolo all'interno di un sistema di gestione. Utilizza Django per la gestione del database e thread per l'esecuzione asincrona di alcune operazioni.

## Dettagli del Funzionamento:
### Parametri:

    request: L'oggetto richiesta HTTP.
    id: L'identificatore univoco del veicolo.
    user (str): Il nome utente.
    client (str): L'identificatore del cliente.
    lat (float): Latitudine dell'utente.
    lng (float): Longitudine dell'utente.
    mode (str): Modalità di avvio del viaggio (default = "start").

### Funzionalità Principali:

    #### Logging del Comando Utente:
        Viene creato un log del veicolo, registrando l'ID del veicolo e il comando inviato (come "start").

    #### Controllo di Blacklist:
        Il sistema verifica se l'utente è presente in una lista nera (blacklist) del cliente. Se sì, viene sollevata un'eccezione.

    #### Gestione Pacchetti dell'Utente:
        Viene eseguita una funzione asincrona in un thread separato per aggiornare i pacchetti associati all'utente e al cliente.
        Se un pacchetto può essere attivato e soddisfa le condizioni, viene attivato.

    #### Verifica dell'Autorizzazione:
        Il sistema controlla se l'utente ha il permesso di avviare un viaggio (ruoli come "freeuse").

    #### Gestione Pagamenti con Stripe:
        Se il metodo di pagamento non è gestito dalla flotta, viene verificato se l'utente ha un metodo di pagamento registrato su Stripe.
        Se necessario, viene effettuata una pre-autorizzazione sul metodo di pagamento per un importo minimo.

    #### Avvio o Ripresa del Viaggio:
        Se il viaggio non è una ripresa (resume), il viaggio viene avviato.
        Se il viaggio è una ripresa, lo stato del viaggio viene aggiornato a "running".

### Oggetti Utilizzati:

    VehicleLog: Per registrare i comandi del veicolo.
    UserBlackList: Per verificare se un utente è bloccato.
    Fleet: Per ottenere informazioni sulla flotta e sui veicoli associati.
    UserPackage: Per gestire i pacchetti attivi degli utenti.
    Stripe: Per gestire i pagamenti e le pre-autorizzazioni.
    Trip: Per gestire e salvare i dettagli dei viaggi.
    Payment: Per memorizzare le informazioni sui pagamenti relativi al viaggio.

## Esecuzione Asincrona:

La funzione update_packages_threaded viene eseguita in un thread separato per evitare di bloccare l'esecuzione principale.
Considerazioni:

    Error Handling: Non sono presenti dettagli specifici su come vengono gestite alcune eccezioni. Sono presenti blocchi generici try-except.
    Pre-Autorizzazione: Se l'importo della pre-autorizzazione supera i 2€, viene avviata una richiesta a Stripe per la pre-autorizzazione.



# End_trip    

La funzione Python `end_trip` si occupa di terminare un viaggio di un veicolo, verificare l'eventuale pagamento dovuto, gestire le eccezioni e aggiornare lo stato del viaggio. Di seguito viene fornita una descrizione dettagliata della funzione, evidenziando le sue principali caratteristiche e responsabilità.

### Descrizione della Funzione `end_trip`
La funzione `end_trip` è un endpoint API per gestire la richiesta di terminare un viaggio di un veicolo. L'endpoint accetta diversi parametri e interagisce con vari modelli e servizi (come Stripe) per verificare e processare il pagamento dovuto. La funzione ha un'implementazione complessa, che può essere suddivisa nelle seguenti fasi:

1. **Parametri di Input**:
   - **`request`**: Oggetto della richiesta HTTP.
   - **`id`**: Identificatore del veicolo.
   - **`user`**: Identificatore dell'utente.
   - **`client`**: Identificatore del cliente, che potrebbe includere la flotta.
   - **`lat` e `lng`**: Coordinate geografiche, probabilmente per registrare la posizione corrente del veicolo.
   - **`mode`**: Modalità dell'operazione (default è `"stop"`), può anche essere `"pause"`.
   - **`force`**: Indica se fermare forzatamente il veicolo (default è `"False"`).

2. **Logging delle Operazioni dell'Utente**:
   - Un oggetto `VehicleLog` viene creato per registrare il comando di stop dell'utente, con il timestamp corrente.

3. **Elaborazione della Richiesta del Cliente**:
   - Il `client` viene diviso in caso contenga il carattere `":"`, per identificare il cliente e la flotta.
   - La configurazione del cliente viene recuperata e stampata.
   - Il profilo dell'utente (`up`) viene recuperato.

4. **Verifica dei Permessi dell'Utente**:
   - La funzione verifica se l'utente ha il permesso di utilizzare il veicolo, determinando se ha il ruolo appropriato o capacità di gestione.

5. **Controllo del Veicolo**:
   - L'oggetto `Vehicle` viene recuperato utilizzando l'`id` fornito.
   - La funzione esegue una verifica per determinare se il veicolo può essere bloccato utilizzando `can_lock`.

6. **Gestione del Viaggio**:
   - Se il viaggio non è in modalità `"pause"`, viene verificato se il viaggio corrente dell'utente è già terminato.
   - Se il viaggio è ancora attivo, l'oggetto `Trip` viene recuperato e aggiornato allo stato `"ended"`, registrando l'ora di fine.
   - Viene calcolata la durata del viaggio (`t.end - t.start`), e si inizia la fase di pagamento.

7. **Gestione del Pagamento**:
   - Viene determinato se il viaggio fa parte di una flotta che richiede un pagamento da parte dell'utente.
   - Utilizzando l'API di **Stripe**, vengono verificati i dettagli del cliente e il metodo di pagamento:
     - Se il cliente non ha un metodo di pagamento valido, viene creato un problema (`VehicleIssue`) e la funzione restituisce un errore.
     - Se il pagamento è possibile, viene creato o aggiornato il portafoglio utente (`UserWallet`).
   - Viene quindi calcolato il prezzo totale del viaggio, considerando eventuali pacchetti utente (`UserPackage`) attivi.
   - Il pagamento viene gestito tramite **Stripe**, con diverse logiche per gestire l'importo pre-autorizzato, differenze di pagamento, ed eventuali rimborsi.

8. **Creazione di Eventi di Viaggio**:
   - Un evento `TripEvent` viene creato per tracciare la fine del viaggio.
   - Lo stato del viaggio viene aggiornato a `"stopped"`.

9. **Gestione del Servizio di Telegram**:
   - La funzione invia notifiche su gruppi Telegram, utilizzando l'API di Telegram per informare del termine del viaggio.

10. **Risposte Restituite**:
    - La funzione restituisce diverse risposte JSON, a seconda del flusso seguito:
      - Se il viaggio è già terminato, restituisce `"trip_already_ended"`.
      - Se il viaggio viene messo in pausa, restituisce `"trip_paused"`.
      - Se il viaggio viene terminato con successo, restituisce `"trip_ended"` con ulteriori dettagli.

# Check Op 

La funzione `check_op` è responsabile di determinare se un'operazione può essere eseguita su un veicolo. Controlla una serie di condizioni, come la validazione del telefono, l'idoneità dell'utente e la disponibilità di metodi di pagamento, per garantire che l'operazione richiesta sia permessa. Di seguito una descrizione dettagliata delle funzionalità di questa funzione.

### Descrizione

#### Parametri di Input
- **`request`**: Oggetto della richiesta HTTP.
- **`vehicle`** (`str`): Identificatore del veicolo su cui si desidera effettuare un'operazione.
- **`user`** (`str`): Identificativo dell'utente che richiede l'operazione.
- **`client`** (`str`): Identificativo del cliente a cui appartiene l'utente.
- **`mode`** (`str`): Modalità dell'operazione (ad esempio, `"start"` o `"stop"`).
- **`user_lat`, `user_lon`** (`str`): Coordinate geografiche dell'utente.
- **`op`** (`str`): Operazione richiesta (ad esempio, `"start"` per iniziare un viaggio).

### Funzionalità Chiave della Funzione

1. **Recupero dei Dati Utente e Configurazione Cliente**
   - `get_user_profile` viene utilizzato per recuperare i dettagli dell'utente (`ud`), mentre `get_client` recupera la configurazione del cliente (`owner_config`).
   - Questi dettagli vengono stampati per il debugging.

2. **Configurazione Stripe e Controllo Pagamenti**
   - La chiave API di Stripe viene recuperata dal database (`Settings.objects.get`) e viene utilizzata per impostare la chiave di accesso.
   - L'identificativo del cliente Stripe (`stripe_customer`) viene recuperato dal profilo utente.
   - La funzione controlla anche se la validazione del telefono è richiesta (`phone_validation_required`). Se l'utente non ha validato il proprio numero di telefono, l'operazione viene rifiutata.

3. **Verifica del Ruolo Utente**
   - Se l'utente ha il ruolo di amministratore (`role__key__in=["admin"]`), l'operazione è immediatamente consentita.

4. **Controllo di Blacklist e Prefisso del Telefono**
   - Se l'operazione è `"start"`, viene verificato se l'utente o il numero di telefono dell'utente sono in una blacklist (`UserBlackList`). Se l'utente è bloccato, viene registrato un problema (`VehicleIssue`) e l'operazione viene negata.
   - Controlla se il prefisso del telefono è valido rispetto ai prefissi consentiti specificati nella configurazione del cliente (`PREFIX_OK`). In caso contrario, l'operazione viene negata e viene creato un nuovo `VehicleIssue`.

5. **Controllo dei Viaggi Correnti**
   - Se l'operazione è `"start"`, la funzione verifica se l'utente ha già un viaggio in corso (`Trip.objects.filter(end__isnull=True)`).
   - Se la configurazione del cliente (`MULTITRIP`) non consente viaggi multipli, e l'utente ha già un viaggio attivo, l'operazione viene negata.
   - Viene verificato anche il numero massimo di viaggi simultanei consentiti (`MULTITRIP_MAX`). Se l'utente supera questo limite, l'operazione viene negata.

6. **Verifica dello Stato del Veicolo**
   - Recupera lo stato del veicolo tramite una richiesta HTTP (`requests.get(f'https://map.e-dway.com/vehicles/{vehicle}')`).
   - Se il veicolo non è `"online"` e la modalità è `"start"`, l'operazione viene negata, registrando un problema (`vehicle_offline`).

7. **Controllo dei Documenti dell'Utente**
   - Se il veicolo o il cliente richiedono documenti particolari (`requires_doc` o `require_id`), la funzione verifica la presenza e la validità dei documenti dell'utente.
   - Se i documenti richiesti mancano o non sono stati ancora convalidati, l'operazione viene negata.

8. **Controllo della Batteria del Veicolo**
   - Se la modalità è `"start"`, la funzione verifica che il livello di batteria del veicolo sia superiore al minimo specificato nella configurazione del cliente (`MIN_BATTERY`).
   - Se la batteria è insufficiente, l'operazione viene negata e viene creato un `VehicleIssue`.

9. **Verifica Attivazione della Flotta**
   - Se la flotta richiede un'attivazione (`require_activation`), la funzione verifica se l'utente è autorizzato a utilizzare il veicolo. Se l'autorizzazione non è presente, l'operazione viene negata.

10. **Controllo del Metodo di Pagamento**
    - Se la flotta non prevede il pagamento tramite flotta e richiede un metodo di pagamento, viene verificato se l'utente ha un metodo di pagamento valido su Stripe.
    - Se non ci sono metodi di pagamento registrati, l'operazione viene negata.

11. **Controllo del Portafoglio Utente**
    - Se la flotta accetta pagamenti tramite portafoglio (`wallet`), la funzione verifica se l'utente ha fondi sufficienti per avviare il viaggio. In caso contrario, l'operazione viene negata.

12. **Verifica della Posizione del Veicolo e Della Flotta**
    - La funzione verifica la posizione corrente del veicolo e determina se si trova in un'area consentita.
    - Per le flotte che operano in modalità "freefloating", la funzione determina se il veicolo si trova in un'area in cui è permesso parcheggiare o se è fuori dai limiti.

### Risposta della Funzione
- La funzione restituisce un dizionario con un campo `operation_permitted` che indica se l'operazione richiesta è consentita.
  - Se l'operazione è negata, viene restituito anche un campo `reason` che spiega il motivo del rifiuto (ad esempio, `"phone_validation_required"`, `"payment_method_required"`, `"vehicle_offline"`, ecc.).
  - Se l'operazione è consentita, restituisce `{ "operation_permitted": True }`.

### Miglioramenti Possibili
1. **Modularizzazione del Codice**:
   - La funzione è piuttosto lunga e contiene numerosi controlli diversi. Potrebbe essere utile modularizzare la funzione, creando sotto-funzioni più piccole come:
     - `def check_blacklist()`
     - `def check_payment_method()`
     - `def check_vehicle_status()`
   - Ciò migliorerebbe la leggibilità e la manutenibilità del codice.

2. **Gestione degli Errori**:
   - Attualmente, la funzione include `try`/`except`, ma spesso non fa nulla in caso di eccezioni. Sarebbe utile migliorare la gestione degli errori, ad esempio restituendo una risposta coerente in caso di eccezioni o registrando i dettagli degli errori.

3. **Ottimizzazione delle Query**:
   - Le query che accedono frequentemente agli stessi oggetti, come `Vehicle`, `UserDocument`, `Fleet`, potrebbero essere ottimizzate utilizzando `select_related()` o `prefetch_related()` per ridurre il numero di accessi al database e migliorare le prestazioni.

4. **Sicurezza**:
   - Le chiavi API e altre informazioni sensibili non dovrebbero essere direttamente codificate nel codice sorgente. Sarebbe meglio utilizzare variabili di ambiente per gestire le chiavi di configurazione sensibili, come le chiavi API di Stripe.

5. **Validazione degli Input**:
   - Aggiungere una validazione sugli input (`vehicle`, `user`, `client`) per evitare errori dovuti a dati errati o formati non previsti.

La funzione `check_op` è essenziale per garantire che solo utenti autorizzati e in condizioni appropriate possano utilizzare un veicolo, fornendo una gestione complessa e dettagliata delle autorizzazioni e dei requisiti di un viaggio.