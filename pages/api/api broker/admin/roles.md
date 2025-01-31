---
sidebar_position: 12
---

## **👥 Sezione Ruoli e Utenti**
Questa sezione gestisce i **ruoli** e i **permessi** degli utenti nel sistema.

### **1️⃣ GET `/users`**
**Descrizione:**  
- Recupera la lista di tutti gli utenti con i relativi ruoli.

**Parametri (Header, opzionali):**  
- `authorization` *(str)* → Token di autorizzazione.  
- `client_id` *(str, opzionale)* → Identificativo del cliente.  
- `user_lat` *(float, opzionale)* → Latitudine dell'utente.  
- `user_lon` *(float, opzionale)* → Longitudine dell'utente.  

**Funzionamento:**  
- Effettua una richiesta GET per ottenere l'elenco di tutti gli utenti e i loro ruoli nel sistema.

---

### **2️⃣ GET `/users/{user}`**
**Descrizione:**  
- Recupera i dettagli di un utente specifico e i suoi ruoli.

**Parametri (Path, obbligatorio):**  
- `user` *(str)* → Identificativo dell'utente.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`.  

**Funzionamento:**  
- Effettua una richiesta GET per ottenere le informazioni sui ruoli di un utente specifico.

---

### **3️⃣ POST `/users`**
**Descrizione:**  
- Modifica i ruoli di un utente.

**Parametri (Body, obbligatorio):**  
- `role` *(RoleData)* → Dati relativi ai ruoli da assegnare o rimuovere.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`.  

**Funzionamento:**  
- Invia una richiesta POST per aggiungere o rimuovere ruoli a un utente nel sistema.

---
