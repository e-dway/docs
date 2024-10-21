---
sidebar_position: 5
---

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