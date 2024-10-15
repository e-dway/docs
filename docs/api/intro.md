---
sidebar_position: 1
---


# Overview

Questo file rappresenta una **API** costruita utilizzando **FastAPI**, un framework moderno e performante per la creazione di API in Python. Di seguito vengono descritte le principali componenti del file.

## 1. **Importazioni Principali**
Il file importa una serie di moduli e pacchetti necessari per l'API:

- **FastAPI**: Framework utilizzato per costruire l'API.
- **Depends, Request**: Utilizzati per gestire le dipendenze e le richieste HTTP.
- **JSONResponse**: Per la gestione delle risposte in formato JSON.
- **Vari moduli** da `routes` e `adminroute`: Questi moduli contengono i vari router per la gestione delle differenti rotte dell'API (ad esempio, autenticazione, veicoli, wallet, etc.).
- **Middleware CORS**: Per gestire le richieste CORS.
- **Sentry SDK**: Utilizzato per monitorare errori e performance.
- **Prometheus**: Per monitorare le metriche delle API.

## 2. **Inizializzazione di Sentry**
Il codice utilizza **Sentry** per la gestione e il tracciamento degli errori.

```python
sentry_sdk.init(
    dsn="https://47f854ad8122440abb4f276a1f1d2498@o1303050.ingest.sentry.io/6541522",
    traces_sample_rate=1.0
)
```

- **dsn**: Collegamento con il progetto Sentry per monitorare l'API.
- **traces_sample_rate**: Configurato al 100% per catturare tutte le transazioni ai fini del monitoraggio delle performance.

## 3. **Definizione degli **OWNERS**
Il codice definisce una lista di **OWNERS**, che rappresentano i proprietari dell'applicazione o della flotta. Ogni owner ha un `ident`, `name`, un eventuale `telegram_group`, uno stato `enabled`, e un `app_code`.

```python
OWNERS = [
    {"ident": "0927fbde-9179-45e4-ac11-377cc8d77e0b", "name": "TrendyRent", ...},
    {"ident": "bca58791-f1a5-49ab-a1a7-ff7ef9944328", "name": "Elerent", ...},
    # Altri owners...
]
```

Viene inoltre definito il dizionario `ROWNERS`, che associa i codici dell'applicazione (`app_code`) agli `ident` dei proprietari.

## 4. **Funzione `get_client_id`**
Questa funzione recupera l'ID del client in base al codice del bundle fornito.

```python
def get_client_id(code):
    return ROWNERS.get(code, code)
```

## 5. **Impostazione di FastAPI**
L'oggetto principale dell'applicazione **FastAPI** viene istanziato:

```python
app = FastAPI()
```

### Middleware CORS
Un middleware viene aggiunto per gestire le politiche di **CORS**:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Middleware di Sentry
Viene integrato **Sentry** come middleware per il monitoraggio:

```python
app.add_middleware(SentryAsgiMiddleware)
```

### Middleware di Prometheus
Viene configurato **Prometheus** per la raccolta delle metriche:

```python
from prometheus_fastapi_instrumentator import Instrumentator
instrumentator = Instrumentator().instrument(app)
```

## 6. **Middleware Personalizzato**
Un middleware personalizzato misura il tempo di esecuzione delle richieste e aggiunge informazioni sugli header.

```python
@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    tin = time.time()
    # Gestione degli header e client ID
    ...
    response = await call_next(request)
    response.headers['Server-Timing'] = ", ".join(srv)
    response.headers['Fleet-Id'] = "a3b50810-875c-47ff-b427-509f98c34cee"
    return response
```

### Funzionalità del Middleware:
- **Client ID dinamico**: Se il `client-id` non è presente nell'intestazione della richiesta, viene generato in base al `bundle-id`.
- **Server-Timing**: Aggiunge il tempo di esecuzione della richiesta negli header della risposta.

## 7. **Rotte**
Le rotte dell'API sono organizzate in modo modulare utilizzando **router**. Questi sono inclusi all'interno di due modalità distinte: `front` e `admin`.

### Modalità **Front**
Include rotte per autenticazione, gestione veicoli, pagamenti, wallet, prodotti, ecc.

```python
if "front" in MODES:
    app.include_router(auth.router, prefix="/auth")
    app.include_router(fleet.router, prefix="/fleet")
    ...
```

### Modalità **Admin**
Include rotte per la gestione amministrativa, come bot, impostazioni, ecc.

```python
if "admin" in MODES:
    app.include_router(auth.router, prefix="/auth")
    app.include_router(adminroute, prefix="/admin")
    ...
```

## 8. **Gestione delle Eccezioni**
Viene implementato un handler personalizzato per le eccezioni HTTP.

```python
@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(
        status_code=exc.status_code,
        content=exc.detail
    )
```

## 9. **Eventi di Startup**
Alla partenza dell'applicazione, viene inizializzato un backend **Redis** per la cache.

```python
@app.on_event("startup")
async def startup():
    redis = aioredis.from_url("redis://api_cache", encoding="utf8", decode_responses=True)
    FastAPICache.init(RedisBackend(redis), prefix="fastapi-cache")
    instrumentator.expose(app)
```

---

### **Funzionalità principali del file**:
1. **Sentry**: Monitoraggio degli errori e delle performance.
2. **Middleware**: Gestione delle richieste HTTP con misurazione del tempo di esecuzione e modifica dinamica degli header.
3. **CORS**: Middleware configurato per accettare richieste da qualsiasi origine.
4. **Prometheus**: Integrazione per il monitoraggio delle metriche.
5. **Modularità**: Suddivisione delle rotte in base alle modalità di utilizzo (`front` e `admin`).
6. **Gestione Cache**: Integrazione di **Redis** per la gestione della cache.

---

