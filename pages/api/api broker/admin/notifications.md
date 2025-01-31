---
sidebar_position: 7
---


## **📰 Sezione News**
Questa sezione gestisce le **news** (notifiche o aggiornamenti) all'interno del sistema.

### **1️⃣ GET `/news`**
**Descrizione:**  
- Recupera l'elenco di tutte le news disponibili nel sistema.

**Parametri (Header, opzionali):**  
- `authorization` *(str)* → Token di autorizzazione.  
- `client_id` *(str)* → Identificativo del cliente.  
- `user_lat` *(float)* → Latitudine dell'utente.  
- `user_lon` *(float)* → Longitudine dell'utente.  
- `test` *(str)* → Modalità di test.  

**Funzionamento:**  
- Effettua una richiesta GET a `NOTIFICATIONS_API/api/news/?client_id={client_id}`.  
- Restituisce una lista di news in formato JSON.

---

### **2️⃣ GET `/news/{news_id}`**
**Descrizione:**  
- Recupera i dettagli di una singola news specificata dal suo `news_id`.

**Parametri (Path, obbligatorio):**  
- `news_id` *(str)* → Identificativo univoco della news.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Effettua una richiesta GET a `NOTIFICATIONS_API/api/news/{news_id}`.  
- Restituisce i dettagli della news sotto forma di JSON.

---

### **3️⃣ PUT `/news/{news_id}`**
**Descrizione:**  
- Modifica una news esistente.

**Parametri (Path, obbligatorio):**  
- `news_id` *(str)* → Identificativo della news da modificare.  

**Parametri (Body, obbligatori):**  
- `subject` *(str)* → Oggetto della news.  
- `created` *(str)* → Data di creazione.  
- `content` *(str)* → Testo della news.  
- `content_html` *(str)* → Versione HTML della news.  
- `meta` *(dict)* → Metadati aggiuntivi.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Aggiorna la news in `NOTIFICATIONS_API/api/news/{news_id}`.  
- Restituisce i dettagli aggiornati.

---

### **4️⃣ DELETE `/news/{news_id}`**
**Descrizione:**  
- Elimina una news specifica.

**Parametri:** (Stessi di `/news/{news_id}`)  

**Funzionamento:**  
- Effettua una richiesta DELETE a `NOTIFICATIONS_API/api/news/{news_id}`.  
- Restituisce lo status della richiesta.

---

### **5️⃣ POST `/news/`**
**Descrizione:**  
- Crea una nuova news nel sistema.

**Parametri:** (Stessi di `/news/{news_id}`)  

**Funzionamento:**  
- Invia una richiesta POST a `NOTIFICATIONS_API/api/news/`.  
- Restituisce i dettagli della news creata.

---

## **📢 Sezione Distributions**
Questa sezione gestisce la **distribuzione** delle news agli utenti.

### **6️⃣ GET `/distributions`**
**Descrizione:**  
- Recupera l'elenco delle distribuzioni di news.

**Parametri (Query, opzionale):**  
- `news_id` *(str, opzionale)* → Filtra per una specifica news.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Effettua una richiesta GET a `NOTIFICATIONS_API/api/distributions`.  
- Restituisce una lista delle distribuzioni effettuate.

---

### **7️⃣ POST `/distributions/`**
**Descrizione:**  
- Crea una nuova distribuzione di una news.

**Parametri (Body, obbligatori):**  
- `target` *(str, opzionale)* → Identificativo del destinatario.  
- `target_type` *(str)* → Tipo di destinatario (es. "utente", "gruppo").  
- `distribution_modes` *(list[int])* → Modalità di distribuzione (es. email, push notification).  
- `news_id` *(str)* → ID della news da distribuire.  
- `deadline` *(str, opzionale)* → Data limite per la distribuzione.  

**Funzionamento:**  
- Invia una richiesta POST a `NOTIFICATIONS_API/api/distributions/`.  
- Restituisce i dettagli della distribuzione.

---

### **8️⃣ DELETE `/distributions/{distribution_id}`**
**Descrizione:**  
- Elimina una distribuzione esistente.

**Parametri (Path, obbligatorio):**  
- `distribution_id` *(str)* → Identificativo della distribuzione.  

**Funzionamento:**  
- Invia una richiesta DELETE a `NOTIFICATIONS_API/api/distributions/{distribution_id}`.  
- Restituisce lo stato della richiesta.

