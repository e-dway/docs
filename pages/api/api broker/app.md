### **📌 Descrizione del file `app.py`**

Il file `app.py` rappresenta il **punto di ingresso** principale per un'applicazione **FastAPI**. Si occupa di:

- **Caricare le configurazioni** dell'app.
- **Registrare le rotte** delle API, importando diversi moduli.
- **Gestire la sicurezza** e l'autenticazione.
- **Configurare middleware**, logging e strumenti di monitoraggio.

---

## **🚀 Struttura e Funzionalità del file `app.py`**

### **🔹 Importazione delle dipendenze**
Il file importa diversi moduli fondamentali:

- **FastAPI** per la gestione dell'API.
- **FastAPI Middleware** per gestire **CORS** e logging.
- **Moduli interni** (`auth`, `user`, `vehicles`, `rentals`, `wallet`, ecc.).
- **Sentry SDK** per il monitoraggio e la gestione degli errori.
- **Redis** per la gestione della cache con `fastapi_cache`.

---

### **🔹 Integrazione con Sentry**
Il file configura **Sentry**, una piattaforma per il monitoraggio degli errori e delle prestazioni dell'applicazione.

```python
import sentry_sdk
sentry_sdk.init(
    dsn="https://47f854ad8122440abb4f276a1f1d2498@o1303050.ingest.sentry.io/6541522",
    traces_sample_rate=1.0
)
```
**📌 Funzionalità:**  
- Registra **errori e crash** dell'applicazione.
- **Traccia le performance** delle richieste.

---

### **🔹 Definizione degli "Owners"**
L'applicazione supporta **più brand o clienti**, ognuno con un proprio `ident` e codice di app.

```python
OWNERS = [
    {"ident": "0927fbde-9179-45e4-ac11-377cc8d77e0b", "name": "TrendyRent", "app_code": "it.trendyrentcatanzaro.mobility"},
    {"ident": "bca58791-f1a5-49ab-a1a7-ff7ef9944328", "name": "Elerent", "app_code": "com.elerent.elerent"},
    {"ident": "806af00f-827f-4e4a-a5c6-93ffa80bd763", "name": "e-dway", "app_code": "com.e-dway.mobility"},
]
```
**📌 Funzionalità:**  
- **Gestisce clienti multipli** in un unico backend.
- Associa ogni cliente a un **codice app** (`app_code`).

---

### **🔹 Configurazione FastAPI**
L'applicazione viene inizializzata con **FastAPI**, registrando il middleware CORS.

```python
app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```
**📌 Funzionalità:**  
- **Abilita il supporto CORS**, permettendo alle richieste di provenire da qualsiasi dominio.
- Consente richieste HTTP da frontend e mobile app.

---

### **🔹 Registrazione delle API**
L'app importa e registra diverse **rotte** provenienti da moduli esterni.

```python
from routes import auth, user, vehicles, rentals, payments, notifications, poi, faq, wallet
```

Le API vengono registrate all'interno dell'app principale:

```python
app.include_router(auth.router, prefix="/auth")
app.include_router(user.router, prefix="/user")
app.include_router(vehicles.router, prefix="/vehicles")
app.include_router(wallet.router, prefix="/wallet")
```
**📌 Funzionalità:**  
- Separa le API in **moduli indipendenti**.
- Ogni modulo gestisce una sezione specifica dell'app.

---

### **🔹 Gestione Cache con Redis**
L'app utilizza **Redis** per gestire la cache.

```python
@app.on_event("startup")
async def startup():
    redis = aioredis.from_url("redis://localhost")
    FastAPICache.init(RedisBackend(redis), prefix="fastapi-cache")
```
**📌 Funzionalità:**  
- **Migliora le performance** delle API riducendo il numero di richieste ai database.
- **Evita calcoli ripetuti**, memorizzando risultati in Redis.

---

### **🔹 Gestione degli Errori**
Il file intercetta errori HTTP e genera risposte personalizzate.

```python
@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(status_code=exc.status_code, content={"message": str(exc.detail)})
```
**📌 Funzionalità:**  
- Cattura **errori HTTP** e restituisce un messaggio JSON leggibile.
- **Evita crash improvvisi**, gestendo le eccezioni in modo controllato.

---

### **🔹 Endpoint di Controllo**
L'app fornisce alcuni endpoint per il monitoraggio dello stato del server.

#### **1️⃣ GET `/health`**
**Descrizione:**  
- Controlla lo stato dell'applicazione.

```python
@app.get("/health")
async def health_check():
    return {"status": "ok"}
```
**📌 Funzionalità:**  
- Verifica che il server sia attivo.
- Può essere usato per il **monitoraggio automatico**.

---

### **🔹 Log e Debug**
L'app tiene traccia dei **tempi di esecuzione** delle richieste.

```python
@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response
```
**📌 Funzionalità:**  
- Registra il **tempo di elaborazione** di ogni richiesta.
- Può essere utile per **identificare colli di bottiglia**.

