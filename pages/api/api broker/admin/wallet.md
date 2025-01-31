---
sidebar_position: 17
---

## **💳 Sezione Wallet (Portafoglio)**
Questa sezione gestisce i **wallet digitali**, permettendo la consultazione e la rimozione di un wallet associato a un utente.

---

### **1️⃣ GET `/{id}`**
**Descrizione:**  
- Recupera i dettagli di un **wallet** specifico.

**Parametri (Path, obbligatorio):**  
- `id` *(str)* → Identificativo del wallet.  

**Parametri (Header, opzionali):**  
- `authorization` *(str)* → Token di autorizzazione.  
- `client_id` *(str, opzionale)* → Identificativo del cliente.  
- `user_lat` *(float, opzionale)* → Latitudine dell'utente.  
- `user_lon` *(float, opzionale)* → Longitudine dell'utente.  

**Funzionamento:**  
- Effettua una richiesta GET per ottenere i dettagli di un **wallet** specifico.  
- Restituisce informazioni come il saldo, lo stato e il metodo di pagamento associato.

---

### **2️⃣ DELETE `/{id}`**
**Descrizione:**  
- Elimina un **wallet** specifico.

**Parametri (Path, obbligatorio):**  
- `id` *(str)* → Identificativo del wallet da eliminare.  

**Parametri (Header, opzionali):**  
- `authorization` *(str)* → Token di autorizzazione.  
- `client_id` *(str, obbligatorio)* → Identificativo del cliente.  
- `user_lat` *(float, opzionale)* → Latitudine dell'utente.  
- `user_lon` *(float, opzionale)* → Longitudine dell'utente.  
- `test` *(str, opzionale)* → Modalità di test.  

**Funzionamento:**  
- Effettua una richiesta DELETE per rimuovere il wallet dal sistema.  
- Dopo l'eliminazione, il wallet non sarà più utilizzabile per le transazioni.


