---
sidebar_position: 2
---


Modulo basato su **FastAPI**. Ecco una descrizione dettagliata del suo contenuto:

### **Descrizione Generale**
Il file implementa un **router FastAPI** che interagisce con un'API remota (`CLOUD_API`), presumibilmente per la gestione di risorse geospaziali o di mobilità, basandosi sul dominio `hoponmobility.com`.

### **Principali Funzionalità**
1. **Importazioni di Moduli**
   - Viene utilizzato **FastAPI** per la creazione dell'API (`APIRouter`, `Depends`, `Header`, `HTTPException`, `Request`, `Body`).
   - Importa moduli specifici per la gestione di **modelli geomatici** (`core.models.geom`).
   - Funzioni di utility come `get_user`, `send_otp`, `get_client` e `get_permissions`.
   - Uso di `requests` per effettuare chiamate HTTP verso API esterne.

2. **Configurazione API**
   - Il file definisce una costante `CLOUD_API` che rappresenta un'API esterna, ottenuta da una variabile d'ambiente (`os.environ.get`).
   - Crea un router FastAPI (`router = APIRouter()`) con configurazioni di gestione degli errori (`responses={404: {"description": "Not found"}}`).

3. **Endpoint Implementati**
   - **`/targets`**: Endpoint `GET` che recupera i **targets** dall'API esterna (`CLOUD_API/targets`). Riceve parametri tramite **header HTTP**, tra cui `authorization`, `client_id`, `user_lat`, `user_lon`, `test`. La richiesta viene inoltrata all'API remota e il risultato è restituito come JSON.
   - **`/transformations`**: Endpoint `GET` simile a `/targets`, che recupera trasformazioni da `CLOUD_API/transformations`. Anche qui vengono usati header HTTP per il contesto utente.

