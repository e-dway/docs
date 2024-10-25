---
sidebar_position: 3
---
# Fleet Management

Questo file implementa le rotte per la gestione delle flotte di veicoli utilizzando **FastAPI**. Di seguito viene fornita una descrizione dettagliata delle funzionalità e delle rotte implementate.

## 1. **Importazioni Principali**

Il file utilizza le seguenti librerie e moduli:

- **FastAPI**: Per creare l'API.
- **Pydantic**: Per la validazione dei dati tramite modelli.
- **Requests**: Per fare richieste HTTP verso altri servizi.
- **Redis**: Per la gestione della cache.
- **PIL** (Pillow): Per la gestione delle immagini.

## 2. **Variabili d'Ambiente**
Il file utilizza le seguenti variabili d'ambiente:
- **FLEETS_API**: URL dell'API che fornisce i dati relativi alle flotte di veicoli.

## 3. **Caching con Redis**
Il file utilizza un'istanza di **Redis** per memorizzare in cache i dati relativi alle aree delle flotte, migliorando le prestazioni riducendo le chiamate esterne.

```python
CACHE = redis.Redis(host='195.154.83.61', port="7009", decode_responses=True)
```

## 4. **Rotte Principali**

### `/` (GET)
Restituisce un elenco delle flotte disponibili.

### `/areas.geojson` (GET)
Restituisce un file **GeoJSON** contenente le aree relative alla flotta. Questo include informazioni come la possibilità di parcheggiare e la velocità massima consentita. L'output include anche il colore da applicare a ciascuna area, in base ai parametri ricevuti.

### `/markers.geojson` (GET)
Restituisce i marker relativi ai veicoli all'interno delle flotte, filtrando i risultati in base alla posizione dell'utente.

### `/{client_id}/areas.geojson` (GET)
Restituisce i dati delle aree per una specifica flotta, utilizzando il parametro `client_id`.

### `/{fleet}` (GET)
Restituisce le informazioni relative a una specifica flotta identificata da `fleet`.

### `/{fleet}` (POST)
Permette di attivare una specifica flotta inviando una richiesta POST con i dati dell'utente.

### `/{fleet}/areas` (GET)
Restituisce le aree relative a una specifica flotta.

### `/{fleet}/areas` (POST)
Aggiunge nuove aree a una specifica flotta.

### `/{fleet}/areas` (PUT)
Aggiorna le informazioni relative a una specifica area all'interno della flotta.

### `/{fleet}/areas` (DELETE)
Elimina le informazioni relative a una specifica area all'interno della flotta.

### `/{fleet}/{id}/accept` (POST)
Accetta la richiesta di attivazione di una flotta.

### `/{fleet}/{id}/refuse` (POST)
Rifiuta la richiesta di attivazione di una flotta.

### `/imgs/{client}/fleets/{fleet}/{version}` (GET)
Genera e restituisce un'immagine PNG contenente l'icona della flotta specificata. Utilizza il modulo **Pillow** per sovrapporre un'icona alla flotta.

```python
from PIL import Image
import io
```

Questa rotta gestisce le immagini di flotte e permette di ottenere un'icona personalizzata della flotta richiesta. Viene utilizzato **Pillow** per manipolare l'immagine.

## 5. **Gestione dei Dati GeoJSON**
Il file include il supporto per la gestione dei dati in formato **GeoJSON** per visualizzare aree e marker su una mappa. I dati GeoJSON contengono informazioni spaziali come coordinate, velocità e zone di parcheggio.

## 6. **Funzioni di Supporto**
Il file include una serie di funzioni di supporto per gestire l'autenticazione dell'utente e recuperare informazioni dal backend. Queste funzioni sono utilizzate per autenticare l'utente e per gestire i dati della flotta.

## 7. **Conclusione**
Questo file fornisce tutte le rotte necessarie per la gestione delle flotte di veicoli, inclusa la gestione delle aree e dei marker in formato GeoJSON, l'autenticazione e la gestione delle immagini delle flotte. Il supporto per Redis consente di migliorare le prestazioni dell'API memorizzando in cache i dati delle aree.
