---
sidebar_position: 4
---


### **1️⃣ GET `/fields`**
**Descrizione:**  
Restituisce l'elenco dei campi disponibili nel sistema.  

**Parametri (Query o Header):**  
- `start` *(str, opzionale)* → Data di inizio per filtrare i risultati.  
- `end` *(str, opzionale)* → Data di fine per filtrare i risultati.  
- `fields` *(List[str], opzionale)* → Lista di campi da includere nella risposta.  
- `related` *(List[str], opzionale)* → Campi correlati da includere nei risultati.  
- `sort` *(str, opzionale)* → Campo su cui ordinare i risultati.  
- `filter` *(str, opzionale)* → Filtri da applicare ai dati.  
- `authorization` *(str, Header, opzionale)* → Token di autorizzazione.  
- `client_id` *(str, Header, opzionale)* → Identificativo del cliente.  
- `user_lat` *(float, Header, opzionale)* → Latitudine dell'utente.  
- `user_lon` *(float, Header, opzionale)* → Longitudine dell'utente.  

---

### **2️⃣ GET `/vehicles`**
**Descrizione:**  
Restituisce la lista dei veicoli registrati nel sistema.  

**Possibili parametri:**  
- `authorization` *(Header)* → Token di autorizzazione.  
- `client_id` *(Header)* → Identificativo del cliente.  
- Potrebbero esserci altri parametri per filtrare per stato del veicolo, posizione, ecc.

---

### **3️⃣ GET `/users`**
**Descrizione:**  
Restituisce l'elenco degli utenti registrati nel sistema.  

**Possibili parametri:**  
- `authorization` *(Header)* → Token di autorizzazione.  
- `client_id` *(Header)* → Identificativo del cliente.  
- Possibili filtri per ruolo, stato, e-mail, ecc.

---

### **4️⃣ GET `/transactions`**
**Descrizione:**  
Recupera la lista delle transazioni effettuate nel sistema.  

**Possibili parametri:**  
- `authorization` *(Header)* → Token di autorizzazione.  
- `client_id` *(Header)* → Identificativo del cliente.  
- Filtri per data, importo, tipo di transazione.

---

### **5️⃣ GET `/rentals`**
**Descrizione:**  
Restituisce l'elenco dei noleggi effettuati dagli utenti.  

**Possibili parametri:**  
- `authorization` *(Header)* → Token di autorizzazione.  
- `client_id` *(Header)* → Identificativo del cliente.  
- Filtri per stato (attivo, terminato, in corso), data di inizio e fine.

---

### **6️⃣ GET `/issues`**
**Descrizione:**  
Restituisce l'elenco dei problemi segnalati nel sistema.  

**Possibili parametri:**  
- `authorization` *(Header)* → Token di autorizzazione.  
- `client_id` *(Header)* → Identificativo del cliente.  
- Filtri per tipo di problema, stato della segnalazione, data.

---

Se vuoi più dettagli su uno specifico endpoint, fammelo sapere! 😊