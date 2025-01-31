---
sidebar_position: 6
---

Endpoint presenti nel file `faq.py`

---

### **1️⃣ GET `/resources`**
**Descrizione:**  
- Recupera l'elenco delle risorse disponibili nel sistema FAQ.

**Parametri (Header, opzionali):**  
- `authorization` *(str)* → Token di autorizzazione.  
- `client_id` *(str)* → Identificativo del cliente.  
- `user_lat` *(float)* → Latitudine dell'utente.  
- `user_lon` *(float)* → Longitudine dell'utente.  
- `test` *(str)* → Modalità di test.  

**Funzionamento:**  
- Invia una richiesta GET a `FAQ_API/api/resources`.  
- Restituisce un JSON contenente la lista delle risorse disponibili.

---

### **2️⃣ GET `/resources/{resource_id}`**
**Descrizione:**  
- Recupera i dettagli di una specifica risorsa FAQ.

**Parametri (Path, obbligatorio):**  
- `resource_id` *(int)* → Identificativo della risorsa.  

**Parametri (Header, opzionali):**  
- `authorization` *(str)*  
- `client_id` *(str)*  
- `user_lat`, `user_lon`, `test` *(opzionali)*  

**Funzionamento:**  
- Effettua una richiesta GET a `FAQ_API/api/resources/{resource_id}`.  
- Restituisce i dettagli della risorsa sotto forma di JSON.

---

### **3️⃣ PUT `/resources/{resource_id}`**
**Descrizione:**  
- Modifica i dettagli di una risorsa esistente.

**Parametri (Path, obbligatorio):**  
- `resource_id` *(int)* → Identificativo della risorsa da modificare.  

**Parametri (Body, obbligatori):**  
- `title` *(str)* → Titolo aggiornato della risorsa.  
- `locale` *(str)* → Lingua della risorsa.  
- `active` *(bool)* → Stato della risorsa (attiva o meno).  
- `tags` *(str, opzionale)* → Elenco di tag separati da `|`.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Converte i `tags` in una lista.  
- Invia una richiesta PUT a `FAQ_API/api/resources/{resource_id}` con il payload JSON.  
- Restituisce i dettagli aggiornati della risorsa.

---

### **4️⃣ DELETE `/resources/{resource_id}`**
**Descrizione:**  
- Elimina una risorsa FAQ specificata.

**Parametri (Path, obbligatorio):**  
- `resource_id` *(int)* → Identificativo della risorsa da eliminare.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Invia una richiesta DELETE a `FAQ_API/api/resources/{resource_id}`.  
- Restituisce lo status della richiesta.

---

### **5️⃣ POST `/resources/`**
**Descrizione:**  
- Crea una nuova risorsa FAQ.

**Parametri (Body, obbligatori):**  
- `title` *(str)* → Titolo della risorsa.  
- `locale` *(str)* → Lingua della risorsa.  
- `tags` *(str, opzionale)* → Elenco di tag separati da `|`.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Converte i `tags` in una lista.  
- Invia una richiesta POST a `FAQ_API/api/resources/` con il payload JSON.  
- Restituisce i dettagli della risorsa creata.

---

### **6️⃣ GET `/user/resources`**
**Descrizione:**  
- Recupera le risorse associate a un utente specifico.

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Invia una richiesta GET a `FAQ_API/api/users/{client_id}/resources`.  
- Restituisce la lista delle risorse dell'utente in formato JSON.
