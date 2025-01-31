### **📌 Descrizione del file `settings.py`**

Il file `settings.py` è un **modulo FastAPI** che gestisce le **impostazioni dell'applicazione**.  
Interagisce con un'API remota (`SETTINGS_API = https://settings.e-dway.com`) per **recuperare, modificare ed eliminare chiavi di configurazione**.

---

## **📌 Struttura del file `settings.py`**

### **🔹 Importazione dei Moduli**
Il file importa vari moduli, tra cui:
- **FastAPI** → Per definire le API (`APIRouter`, `Header`, `Request`).
- **Requests** → Per effettuare richieste HTTP all'API esterna.
- **JSON** → Per serializzare i dati JSON nelle richieste.
- **Pydantic** → Per la validazione opzionale dei dati.

---

### **🔹 Configurazione dell'API**
Il file definisce un **router FastAPI**:

```python
router = APIRouter(
    tags=["settings"],
    dependencies=[],
    responses={404: {"description": "Not found"}},
)
```

**📌 Funzionalità:**  
- Organizza le API sotto il tag `"settings"`.  
- Definisce una gestione degli errori per le risposte 404.

---

## **📌 Descrizione degli Endpoint**

### **1️⃣ GET `/keys`**
**Descrizione:**  
- Recupera l'elenco di **tutte le chiavi di configurazione** disponibili.

**Parametri (Header, opzionali):**  
- `authorization` *(str, opzionale)* → Token di autenticazione.  
- `client_id` *(str, opzionale)* → Identificativo del cliente.  
- `user_lat` *(float, opzionale)* → Latitudine dell'utente.  
- `user_lon` *(float, opzionale)* → Longitudine dell'utente.  
- `test` *(str, opzionale)* → Modalità di test.  

**Funzionamento:**  
- Effettua una richiesta `GET` a `SETTINGS_API/settings/keys?client_id={client_id}`.  
- Restituisce un JSON con tutte le chiavi disponibili.

---

### **2️⃣ HEAD `/keys/{key}`**
**Descrizione:**  
- Controlla se una chiave di configurazione **esiste** senza restituire il valore.

**Parametri (Path, obbligatorio):**  
- `key` *(str)* → Nome della chiave di configurazione.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Effettua una richiesta `HEAD` a `SETTINGS_API/settings/keys/{key}?client_id={client_id}`.  
- Restituisce un JSON con il risultato della verifica.

---

### **3️⃣ GET `/keys/{key}`**
**Descrizione:**  
- Recupera il **valore di una chiave di configurazione**.

**Parametri (Path, obbligatorio):**  
- `key` *(str)* → Nome della chiave di configurazione.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Effettua una richiesta `GET` a `SETTINGS_API/settings/keys/{key}?client_id={client_id}`.  
- Restituisce un JSON con il valore della chiave richiesta.

---

### **4️⃣ POST `/keys/{key}`**
**Descrizione:**  
- **Modifica o crea** una chiave di configurazione.

**Parametri (Path, obbligatorio):**  
- `key` *(str)* → Nome della chiave di configurazione da modificare/creare.  

**Parametri (Body, obbligatorio):**  
- **Il corpo della richiesta contiene il nuovo valore della chiave in formato JSON.**  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Effettua una richiesta `POST` a `SETTINGS_API/settings/keys/{key}?client_id={client_id}`.  
- Invia il valore della chiave **serializzato in JSON**.  
- Restituisce la conferma dell'operazione.

---

### **5️⃣ DELETE `/keys/{key}`**
**Descrizione:**  
- **Elimina una chiave di configurazione** dal sistema.

**Parametri (Path, obbligatorio):**  
- `key` *(str)* → Nome della chiave di configurazione da eliminare.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Effettua una richiesta `DELETE` a `SETTINGS_API/settings/keys/{key}?client_id={client_id}`.  
- Restituisce lo stato dell'operazione.

---
