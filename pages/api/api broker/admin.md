---
sidebar_position: 4
---

# Admin

## Introduzione

Questo codice fornisce un'implementazione di un router `FastAPI` per un sistema amministrativo legato alla gestione di veicoli, flotte, utenti, pagamenti e statistiche. Si interfaccia con diverse API esterne per ottenere informazioni sui veicoli, eseguire comandi sui veicoli e gestire utenti e pagamenti. Il codice fa largo uso di richieste HTTP verso API esterne, gestendo token di autenticazione e utilizzando **Redis** per il caching.

## Importazioni Principali

Le librerie importate includono:

- `FastAPI`: framework per costruire API web in Python.
- `Pydantic`: per la gestione dei modelli di dati e la validazione.
- `requests`: per eseguire richieste HTTP verso API esterne.
- `redis`: per connettersi a Redis, un database NoSQL in-memory usato per caching.

## Endpoints Principali

### `/orgs` - Ottenere le organizzazioni
Effettua una richiesta GET per ottenere una lista di organizzazioni associate a un utente. L'endpoint accetta un'intestazione di autorizzazione e una serie di parametri opzionali come `client_id`, `user_lat`, `user_lon`.

### `/fleets` - Ottenere le flotte
Questo endpoint permette di elencare le flotte di veicoli associate a un cliente o a un utente. Effettua una richiesta GET verso un'API esterna e accetta parametri come `vehicle`, `client_id`, `user_lat`, `user_lon`.

### `/vehicles/{protocol}/operations` - Ottenere operazioni per un protocollo di veicolo
Recupera operazioni associate a un protocollo di veicolo specifico. Viene passato un protocollo come parametro nell'URL.

### `/vehicles` - Lista dei veicoli
Fornisce una lista di veicoli con opzioni di filtro come `ipp`, `page`, `sort`, e `filter`. Fa una richiesta GET a un'API esterna per ottenere una lista di veicoli.

### `/vehicles.geojson` - Veicoli in formato GeoJSON
Restituisce una lista di veicoli in formato GeoJSON, con possibilità di filtrare i risultati in base al livello di zoom.

### `/vehicles/{id}/command/start` e `/vehicles/{id}/command/unlock` - Comandi di controllo sui veicoli
Questi endpoint sono usati per inviare comandi di avvio e sblocco ai veicoli tramite l'API dei veicoli. Accettano vari parametri opzionali tramite header, tra cui `authorization`, `client_id`, `user_lat` e `user_lon`.

### `/vehicles/{id}/rentals` - Ottenere noleggi di un veicolo
Fornisce un elenco di noleggi associati a un determinato veicolo. È possibile specificare il numero di elementi per pagina tramite il parametro `ipp` e il numero di pagina con `page`.

### `/payments` - Pagamenti
Questo endpoint è utilizzato per ottenere i dettagli sui pagamenti. Accetta vari parametri opzionali come `user`, `vehicle`, `fleet`, `trip`, `ipp`, `page`, `sort` e `filter` per fornire un elenco filtrato di pagamenti.

### `/reimburse` - Rimborso
Endpoint per eseguire il rimborso di un pagamento. Accetta un payload JSON e lo invia all'API dei veicoli.

### `/settings` - Ottenere impostazioni
Questo endpoint consente di ottenere le impostazioni di un client specifico, utilizzando un'API esterna per recuperare le informazioni.

### `/docs` - Ottenere documenti dell'utente
Questo endpoint effettua una richiesta GET all'API per ottenere i documenti associati a un cliente, con possibilità di filtrare i risultati per stato, pagina, e numero di elementi per pagina.

## Utilizzo di Redis per il caching
Due istanze di Redis sono configurate:
- **CACHE**: utilizzato per gestire il caching di messaggi ed eventi.
- **GEOCACHE**: utilizzato per la gestione di dati geospaziali relativi ai veicoli.

## Autenticazione

L'autenticazione si basa sull'intestazione `Authorization` fornita in ciascuna richiesta. Il metodo `get_user(authorization)` viene chiamato per recuperare l'utente associato al token di autorizzazione.


## Gestione dei Permessi

Viene utilizzata una funzione `get_permissions(user)` per verificare se un utente ha i permessi per accedere o eseguire determinate operazioni, come elencare le flotte o inviare comandi ai veicoli.

## Considerazioni Finali

Questo codice rappresenta un'architettura di API complessa che sfrutta il routing di FastAPI, interagisce con più API esterne e utilizza Redis per caching e gestione dei dati in tempo reale. La struttura e l'uso dei comandi suggeriscono che l'applicazione gestisce una piattaforma di gestione della flotta di veicoli con funzionalità avanzate di amministrazione.

