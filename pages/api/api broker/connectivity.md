---
sidebar_position: 5
---

# CONNECTIVITY_API

Questo file contiene una serie di endpoint FastAPI utilizzati per interfacciarsi con un'API esterna di **connettività** per la gestione delle carte SIM e dei provider. 
L'API esterna è definita tramite la variabile di ambiente `CONNECTIVITY_API`, che punta a `https://connectivity.hoponmobility.com` per impostazione predefinita.

## Importazioni principali

- **FastAPI**: utilizzato per definire il router e gestire gli endpoint.
- **requests**: libreria per effettuare richieste HTTP verso l'API esterna.
- **os**: utilizzata per accedere alle variabili di ambiente.
- **typing**: usato per definire i tipi opzionali nei parametri degli endpoint.

## Variabili di ambiente

- `CONNECTIVITY_API`: Questa variabile di ambiente definisce l'endpoint API principale per la connettività, usata per inviare richieste HTTP.

## Definizione del Router

Il router è definito con `APIRouter` ed è configurato per rispondere con un messaggio di errore 404 nel caso in cui una risorsa non venga trovata:

```python
router = APIRouter(
    dependencies=[],
    responses={404: {"description": "Not found"}},
)
