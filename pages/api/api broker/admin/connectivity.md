---
sidebar_position: 3
---


`Connectivity.py` è un altro modulo FastAPI, simile a `cloud.py`, ma questa volta interagisce con un'API chiamata `CONNECTIVITY_API`. Ecco una descrizione dettagliata:

---

### **Descrizione Generale**
Questo file gestisce le richieste relative alla **connettività** in un sistema di mobilità o IoT, basandosi su `connectivity.hoponmobility.com`. Contiene endpoint per recuperare informazioni su **carte SIM o dispositivi connessi**.

---

### **Principali Funzionalità**
1. **Importazione di moduli**
   - **FastAPI**: per la gestione delle API (`APIRouter`, `Depends`, `Header`, `HTTPException`).
   - **Modelli geomatici** (`core.models.geom`), suggerendo un legame con dati geospaziali.
   - **Utility interne** (`get_user`, `get_permissions`).
   - **Richieste HTTP** con `requests` per interfacciarsi con `CONNECTIVITY_API`.

2. **Configurazione API**
   - Imposta `CONNECTIVITY_API` con un valore di default (`https://connectivity.hoponmobility.com`).
   - Definisce un **router FastAPI** (`router = APIRouter()`).

3. **Endpoint Implementati**

Ecco la descrizione dettagliata di **tutti gli endpoint** presenti nel file `connectivity.py`:

---

### **1️⃣ GET `/cards`**
**Descrizione:**  
Recupera l'elenco delle carte SIM o dispositivi di connettività associati all'utente.

**Parametri (Header):**  
- `authorization` *(str, opzionale)* → Token di autorizzazione.  
- `client_id` *(str, opzionale)* → Identificativo del cliente (usato per filtrare le carte).  
- `user_lat` *(float, opzionale)* → Latitudine dell'utente.  
- `user_lon` *(float, opzionale)* → Longitudine dell'utente.  
- `test` *(str, opzionale)* → Modalità di test.

**Funzionamento:**  
- Effettua una richiesta GET a `CONNECTIVITY_API/api/cards/`.
- Il risultato (`ret`) viene filtrato per restituire solo le carte di proprietà del `client_id`.
- Ritorna una lista di carte sotto forma di JSON.

---

### **2️⃣ GET `/cards/{iccid}`**
**Descrizione:**  
Recupera i dettagli di una specifica carta SIM o dispositivo, identificato dal codice **ICCID**.

**Parametri (Path):**  
- `iccid` *(str, obbligatorio)* → Identificativo univoco della carta SIM.

**Parametri (Header):**  
- `authorization` *(str, opzionale)* → Token di autorizzazione.  
- `client_id` *(str, opzionale)* → Identificativo del cliente.  
- `user_lat` *(float, opzionale)* → Latitudine dell'utente.  
- `user_lon` *(float, opzionale)* → Longitudine dell'utente.

**Funzionamento:**  
- Effettua una richiesta GET a `CONNECTIVITY_API/api/cards/{iccid}`.
- Restituisce i dettagli della carta SIM specificata in formato JSON.

Nel file `connectivity.py` sono presenti anche gli endpoint relativi ai **providers**. Ecco la loro descrizione:

---

### **3️⃣ GET `/providers`**
**Descrizione:**  
Recupera l'elenco dei provider di connettività disponibili.

**Parametri (Header):**  
- `authorization` *(str, opzionale)* → Token di autorizzazione.  
- `client_id` *(str, opzionale)* → Identificativo del cliente.

**Funzionamento:**  
- Effettua una richiesta GET verso `CONNECTIVITY_API/api/providers/`.
- Restituisce la lista dei provider di connettività disponibili in formato JSON.

---

### **4️⃣ POST `/providers/{id}/refresh`**
**Descrizione:**  
Aggiorna i dati di un provider specifico, identificato da **ID**.

**Parametri (Path):**  
- `id` *(str, obbligatorio)* → Identificativo del provider.

**Parametri (Header):**  
- `authorization` *(str, opzionale)* → Token di autorizzazione.  
- `client_id` *(str, opzionale)* → Identificativo del cliente.

**Funzionamento:**  
- Invia una richiesta POST a `CONNECTIVITY_API/api/providers/{id}/refresh`.
- Aggiorna le informazioni del provider specificato.

---

### **5️⃣ DELETE `/providers/{id}`**
**Descrizione:**  
Elimina un provider di connettività specifico, identificato da **ID**.

**Parametri (Path):**  
- `id` *(str, obbligatorio)* → Identificativo del provider.

**Parametri (Header):**  
- `authorization` *(str, opzionale)* → Token di autorizzazione.  
- `client_id` *(str, opzionale)* → Identificativo del cliente.

**Funzionamento:**  
- Invia una richiesta DELETE a `CONNECTIVITY_API/api/providers/{id}`.
- Rimuove il provider specificato dal sistema.

