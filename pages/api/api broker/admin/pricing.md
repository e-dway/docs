---
sidebar_position: 10
---

## **💰 Sezione Prezzi**
Questa sezione gestisce la **tariffazione** e le politiche di prezzo nel sistema.

### **1️⃣ DELETE `/{id}`**
**Descrizione:**  
- Elimina una configurazione di prezzo specifica.

**Parametri (Path, obbligatorio):**  
- `id` *(str)* → Identificativo della configurazione tariffaria da eliminare.  

**Parametri (Header, opzionali):**  
- `authorization` *(str)* → Token di autorizzazione.  
- `client_id` *(str, opzionale)* → Identificativo del cliente.  
- `user_lat` *(float, opzionale)* → Latitudine dell'utente.  
- `user_lon` *(float, opzionale)* → Longitudine dell'utente.  

**Funzionamento:**  
- Effettua una richiesta DELETE per rimuovere una tariffa specificata da `id`.

---

### **2️⃣ POST `/{id}/min`**
**Descrizione:**  
- Imposta una tariffa basata sui **minuti**.

**Parametri (Path, obbligatorio):**  
- `id` *(str)* → Identificativo della configurazione tariffaria.  

**Parametri (Query, opzionali):**  
- `ipp` *(int, opzionale, default=100)* → Elementi per pagina.  
- `page` *(int, opzionale, default=1)* → Numero della pagina.  
- `sort` *(str, opzionale)* → Campo per l'ordinamento.  
- `filter` *(str, opzionale)* → Filtri da applicare.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`.  

**Funzionamento:**  
- Invia una richiesta POST per impostare un prezzo basato sul **tempo di utilizzo in minuti**.

---

### **3️⃣ POST `/{id}/km`**
**Descrizione:**  
- Imposta una tariffa basata sui **chilometri percorsi**.

**Parametri:** (Identici a `/{id}/min`)  

**Funzionamento:**  
- Invia una richiesta POST per impostare un prezzo basato sulla **distanza percorsa in km**.

---

### **4️⃣ DELETE `/{pricing_id}/min/{id}`**
**Descrizione:**  
- Rimuove una tariffa basata sui **minuti** associata a una configurazione di prezzo.

**Parametri (Path, obbligatorio):**  
- `pricing_id` *(str)* → Identificativo della configurazione tariffaria.  
- `id` *(str)* → Identificativo della tariffa da rimuovere.  

**Funzionamento:**  
- Effettua una richiesta DELETE per rimuovere una tariffa basata sui **minuti**.

---

### **5️⃣ DELETE `/{pricing_id}/km/{id}`**
**Descrizione:**  
- Rimuove una tariffa basata sui **chilometri percorsi**.

**Parametri:** (Identici a `/{pricing_id}/min/{id}`)  

**Funzionamento:**  
- Effettua una richiesta DELETE per rimuovere una tariffa basata sulla **distanza percorsa**.

---

### **6️⃣ GET `/{id}`**
**Descrizione:**  
- Recupera i dettagli di una configurazione tariffaria specifica.

**Parametri (Path, obbligatorio):**  
- `id` *(str)* → Identificativo della configurazione tariffaria.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`.  

**Funzionamento:**  
- Effettua una richiesta GET per ottenere i dettagli di una tariffa specifica.

