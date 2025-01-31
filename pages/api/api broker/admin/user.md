---
sidebar_position: 14
---


## **👤 Sezione Profilo Utente**
Questa sezione gestisce le informazioni del profilo utente e le operazioni correlate.

### **1️⃣ POST `/profile`**
**Descrizione:**  
- Modifica i dettagli del profilo utente.

**Parametri (Body, obbligatorio):**  
- `data` *(Dict[str, Any])* → Dati aggiornati del profilo utente.  

**Parametri (Header, obbligatorio):**  
- `authorization` *(str)* → Token di autorizzazione.  

**Funzionamento:**  
- Invia una richiesta POST per aggiornare il profilo utente nel sistema.

---

### **2️⃣ GET `/profile`**
**Descrizione:**  
- Recupera i dettagli del profilo utente.

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`.  

**Funzionamento:**  
- Effettua una richiesta GET per ottenere i dati del profilo.

---

## **📂 Sezione Gestione File**
Questa sezione gestisce l'upload, il download e la gestione dei file associati agli utenti.

### **3️⃣ POST `/files`**
**Descrizione:**  
- Allega un file al profilo utente o a una richiesta.

**Parametri (Body, obbligatorio):**  
- `filedescriptor` *(FileCollectionDescriptor)* → Descrizione del file da allegare.  

**Parametri (Header, obbligatorio):**  
- `authorization` *(str)* → Token di autorizzazione.  
- `client_id` *(str, opzionale)* → Identificativo del cliente.  

**Funzionamento:**  
- Effettua una richiesta POST per caricare un file nel sistema.

---

### **4️⃣ GET `/files`**
**Descrizione:**  
- Recupera la lista dei file disponibili per l'utente.

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`.  

**Funzionamento:**  
- Effettua una richiesta GET per ottenere l'elenco dei file associati all'utente.

---

### **5️⃣ GET `/files/types`**
**Descrizione:**  
- Recupera i tipi di file supportati dal sistema.

**Funzionamento:**  
- Effettua una richiesta GET per ottenere l'elenco dei tipi di file accettati.

---

### **6️⃣ GET `/files/{fid}`**
**Descrizione:**  
- Recupera un file specifico.

**Parametri (Path, obbligatorio):**  
- `fid` *(str)* → Identificativo del file.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`.  

**Funzionamento:**  
- Effettua una richiesta GET per scaricare il file specificato.

---

### **7️⃣ DELETE `/files/{fid}`**
**Descrizione:**  
- Elimina un file specifico.

**Parametri:** (Identici a `/files/{fid}`)  

**Funzionamento:**  
- Effettua una richiesta DELETE per rimuovere il file dal sistema.

---

### **8️⃣ GET `/files/{fid}/accept`**
**Descrizione:**  
- Accetta un file specifico.

**Parametri:** (Identici a `/files/{fid}`)  

**Funzionamento:**  
- Effettua una richiesta GET per approvare il file.

---

### **9️⃣ GET `/files/{fid}/refuse`**
**Descrizione:**  
- Rifiuta un file specifico.

**Parametri:** (Identici a `/files/{fid}`)  

**Funzionamento:**  
- Effettua una richiesta GET per rifiutare il file.

---

## **🔄 Sezione Sottoscrizioni**
Questa sezione gestisce le relazioni tra utenti (es. supervisione o account collegati).

### **🔟 GET `/profile/subs`**
**Descrizione:**  
- Recupera la lista degli utenti collegati all'account principale.

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`.  

**Funzionamento:**  
- Effettua una richiesta GET per ottenere l'elenco delle sottoscrizioni.

---

### **1️⃣1️⃣ GET `/profile/subs/requests`**
**Descrizione:**  
- Recupera le richieste di sottoscrizione in sospeso.

**Parametri:** (Identici a `/profile/subs`)  

**Funzionamento:**  
- Effettua una richiesta GET per ottenere l'elenco delle richieste di sottoscrizione non ancora accettate.

---

### **1️⃣2️⃣ POST `/profile/subs`**
**Descrizione:**  
- Invia una richiesta per aggiungere un nuovo utente alla sottoscrizione.

**Parametri (Body, obbligatorio):**  
- `parent` *(str)* → ID dell'utente principale.  

**Parametri (Header, opzionali):**  
- `client_id`, `user_lat`, `user_lon`.  

**Funzionamento:**  
- Effettua una richiesta POST per inviare una richiesta di sottoscrizione.

---

### **1️⃣3️⃣ POST `/profile/subs/{id}/accept`**
**Descrizione:**  
- Accetta una richiesta di sottoscrizione.

**Parametri (Path, obbligatorio):**  
- `id` *(str)* → Identificativo della richiesta di sottoscrizione.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`.  

**Funzionamento:**  
- Effettua una richiesta POST per accettare una richiesta di sottoscrizione.

---

### **1️⃣4️⃣ POST `/profile/subs/{id}/refuse`**
**Descrizione:**  
- Rifiuta una richiesta di sottoscrizione.

**Parametri:** (Identici a `/profile/subs/{id}/accept`)  

**Funzionamento:**  
- Effettua una richiesta POST per rifiutare una richiesta di sottoscrizione.

---

## **🔍 Sezione Stato Utente**
### **1️⃣5️⃣ GET `/status`**
**Descrizione:**  
- Recupera lo stato di un utente specifico.

**Parametri (Path, obbligatorio):**  
- `user` *(str)* → Identificativo dell'utente.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`.  

**Funzionamento:**  
- Effettua una richiesta GET per ottenere lo stato attuale dell'utente.

---
