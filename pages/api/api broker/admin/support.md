---
sidebar_position: 13
---


## **🎟️ Sezione Supporto e Ticket**
Questa sezione gestisce il **supporto clienti** e l'interazione con Zoho Desk per la gestione dei ticket.

---

### **1️⃣ GET `/auth`**
**Descrizione:**  
- Effettua l'autenticazione con **Zoho Desk**.

**Funzionamento:**  
- Questo endpoint probabilmente restituisce un **access token** o verifica le credenziali di autenticazione.

---

### **2️⃣ GET `/organizations/`**
**Descrizione:**  
- Recupera la lista di tutte le **organizzazioni** registrate nel sistema.

**Funzionamento:**  
- Effettua una richiesta a Zoho Desk per ottenere l'elenco delle organizzazioni.

---

### **3️⃣ GET `/departments/`**
**Descrizione:**  
- Recupera la lista dei **dipartimenti** disponibili per il supporto clienti.

**Funzionamento:**  
- Probabilmente richiama un'API di Zoho Desk per ottenere l'elenco dei dipartimenti di supporto.

---

### **4️⃣ GET `/contacts/`**
**Descrizione:**  
- Recupera la lista dei **contatti clienti** disponibili nel sistema.

**Funzionamento:**  
- Restituisce una lista di contatti registrati, probabilmente da Zoho Desk.

---

### **5️⃣ GET `/tickets/`**
**Descrizione:**  
- Recupera l'elenco di tutti i **ticket di supporto**.

**Parametri (Header, opzionali):**  
- `authorization` *(str)* → Token di autorizzazione.  
- `client_id` *(str, opzionale)* → Identificativo del cliente.  

**Funzionamento:**  
- Effettua una richiesta a Zoho Desk per ottenere tutti i ticket aperti, chiusi o in corso.

---

### **6️⃣ GET `/tickets/{ticket_id}`**
**Descrizione:**  
- Recupera i dettagli di un **ticket di supporto specifico**.

**Parametri (Path, obbligatorio):**  
- `ticket_id` *(str)* → Identificativo del ticket.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`.  

**Funzionamento:**  
- Effettua una richiesta a Zoho Desk per ottenere le informazioni dettagliate di un ticket.

---

### **7️⃣ POST `/tickets`**
**Descrizione:**  
- Crea un **nuovo ticket di supporto**.

**Parametri (Body, obbligatorio):**  
- `subject` *(str)* → Oggetto del ticket.  
- `departmentId` *(int, opzionale)* → ID del dipartimento.  
- `contactId` *(int, opzionale)* → ID del contatto associato.  
- `description` *(str)* → Testo del ticket.  
- `uploads` *(List[str], opzionale)* → Allegati al ticket.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`.  

**Funzionamento:**  
- Invia una richiesta POST a Zoho Desk per creare un nuovo ticket di supporto.

---
