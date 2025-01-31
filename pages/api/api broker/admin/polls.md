---
sidebar_position: 9
---

## **📝 Sezione Feedback**
Questa sezione gestisce i **feedback** degli utenti all'interno del sistema.

### **1️⃣ GET `/feedbacks`**
**Descrizione:**  
- Recupera l'elenco di tutti i feedback raccolti nel sistema.

**Parametri (Header, opzionali):**  
- `authorization` *(str)* → Token di autorizzazione.  
- `client_id` *(str)* → Identificativo del cliente.  
- `user_lat` *(float)* → Latitudine dell'utente.  
- `user_lon` *(float)* → Longitudine dell'utente.  
- `test` *(str)* → Modalità di test.  

**Funzionamento:**  
- Effettua una richiesta GET a `POLLS_API/api/feedbacks`.  
- Restituisce una lista di feedback in formato JSON.

---

### **2️⃣ POST `/feedbacks`**
**Descrizione:**  
- Crea un nuovo feedback nel sistema.

**Parametri (Body, opzionali):**  
- `source` *(str, obbligatorio)* → Fonte del feedback.  
- `trip_id` *(str, opzionale)* → ID del viaggio associato al feedback.  
- `user_id` *(str, opzionale)* → ID dell'utente che ha lasciato il feedback.  
- `rating` *(int, opzionale)* → Valutazione numerica.  
- `description` *(str, opzionale)* → Testo del feedback.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Invia una richiesta POST a `POLLS_API/api/feedbacks/` con il payload JSON.  
- Restituisce il feedback creato.

---

### **3️⃣ GET `/feedbacks/{feedback_id}`**
**Descrizione:**  
- Recupera i dettagli di un feedback specifico.

**Parametri (Path, obbligatorio):**  
- `feedback_id` *(int)* → Identificativo del feedback.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Effettua una richiesta GET a `POLLS_API/api/feedbacks/{feedback_id}`.  
- Restituisce i dettagli del feedback.

---

### **4️⃣ PUT `/feedbacks/{feedback_id}`**
**Descrizione:**  
- Modifica un feedback esistente.

**Parametri (Path, obbligatorio):**  
- `feedback_id` *(int)* → Identificativo del feedback.  

**Parametri (Body, opzionali):**  
- `rating` *(int, opzionale)* → Valutazione aggiornata.  
- `description` *(str, opzionale)* → Testo aggiornato del feedback.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Invia una richiesta PUT a `POLLS_API/api/feedbacks/{feedback_id}` con il payload JSON.  
- Restituisce i dettagli aggiornati del feedback.

---

### **5️⃣ DELETE `/feedbacks/{feedback_id}`**
**Descrizione:**  
- Elimina un feedback specifico.

**Parametri (Path, obbligatorio):**  
- `feedback_id` *(int)* → Identificativo del feedback.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Effettua una richiesta DELETE a `POLLS_API/api/feedbacks/{feedback_id}`.  
- Restituisce lo status della richiesta.

---

## **📊 Sezione Statistiche**
Questa sezione gestisce le statistiche sui feedback ricevuti dagli utenti.

### **6️⃣ GET `/stats/user/{user_id}/list`**
**Descrizione:**  
- Recupera la lista dei feedback associati a un utente.

**Parametri (Path, obbligatorio):**  
- `user_id` *(str)* → Identificativo dell'utente.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`.  

**Funzionamento:**  
- Effettua una richiesta GET a `POLLS_API/api/stats/users/{user_id}/list`.  
- Restituisce la lista dei feedback lasciati dall'utente.

---

### **7️⃣ GET `/stats/user/{user_id}/info`**
**Descrizione:**  
- Recupera informazioni aggregate sui feedback di un utente.

**Parametri (Path, obbligatorio):**  
- `user_id` *(str)* → Identificativo dell'utente.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`.  

**Funzionamento:**  
- Effettua una richiesta GET a `POLLS_API/api/stats/users/{user_id}/info`.  
- Restituisce dati aggregati sui feedback ricevuti dall'utente.

