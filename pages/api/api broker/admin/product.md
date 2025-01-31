---
sidebar_position: 11
---


## **🛒 Sezione Prodotti**
Questa sezione gestisce le operazioni sui **prodotti** disponibili nel sistema.

### **1️⃣ GET `/{id}`**
**Descrizione:**  
- Recupera i dettagli di un prodotto specifico.

**Parametri (Path, obbligatorio):**  
- `id` *(str)* → Identificativo del prodotto.  

**Parametri (Header, opzionali):**  
- `authorization` *(str)* → Token di autorizzazione.  
- `client_id` *(str, opzionale)* → Identificativo del cliente.  
- `user_lat` *(float, opzionale)* → Latitudine dell'utente.  
- `user_lon` *(float, opzionale)* → Longitudine dell'utente.  

**Funzionamento:**  
- Effettua una richiesta GET per ottenere i dettagli di un prodotto specifico.

---

### **2️⃣ PUT `/{id}`**
**Descrizione:**  
- Aggiorna un prodotto esistente.

**Parametri (Path, obbligatorio):**  
- `id` *(str)* → Identificativo del prodotto.  

**Parametri (Body, obbligatorio):**  
- Dati del prodotto aggiornati nel corpo della richiesta.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Invia una richiesta PUT con il nuovo payload JSON per aggiornare il prodotto.

---

### **3️⃣ DELETE `/{id}`**
**Descrizione:**  
- Elimina un prodotto specifico.

**Parametri (Path, obbligatorio):**  
- `id` *(str)* → Identificativo del prodotto da eliminare.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Effettua una richiesta DELETE per rimuovere un prodotto dal sistema.
