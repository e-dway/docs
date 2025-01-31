---
sidebar_position: 16
---



## **🚗 Sezione Metadati Veicoli**
Questa sezione gestisce i **metadati** associati ai veicoli, come attributi personalizzati, etichette e configurazioni.

---

### **1️⃣ GET `/vmetas`**
**Descrizione:**  
- Recupera l'elenco di tutti i **metadati dei veicoli** disponibili nel sistema.

**Parametri (Header, opzionali):**  
- `authorization` *(str)* → Token di autorizzazione.  
- `client_id` *(str, opzionale)* → Identificativo del cliente.  
- `user_lat` *(float, opzionale)* → Latitudine dell'utente.  
- `user_lon` *(float, opzionale)* → Longitudine dell'utente.  
- `test` *(str, opzionale)* → Modalità di test.  

**Funzionamento:**  
- Effettua una richiesta GET a `VEHICLES_META_API/api/vmetas`.  
- Restituisce la lista di tutti i metadati dei veicoli.

---

### **2️⃣ GET `/vmetas/{vmeta_name}`**
**Descrizione:**  
- Recupera i dettagli di un **metadato specifico** associato ai veicoli.

**Parametri (Path, obbligatorio):**  
- `vmeta_name` *(str)* → Nome del metadato.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`, `test`.  

**Funzionamento:**  
- Effettua una richiesta GET a `VEHICLES_META_API/api/vmetas/{vmeta_name}`.  
- Restituisce i dettagli del metadato specifico.

---

### **3️⃣ PUT `/vmetas/{vmeta_name}`**
**Descrizione:**  
- Modifica un **metadato esistente** associato ai veicoli.

**Parametri (Path, obbligatorio):**  
- `vmeta_name` *(str)* → Nome del metadato da modificare.  

**Parametri (Body, obbligatori):**  
- `label` *(str)* → Etichetta del metadato.  
- `has_expiration` *(bool)* → Indica se il metadato ha una scadenza.  
- `tags` *(str, opzionale)* → Elenco di tag separati da `|`.  

**Funzionamento:**  
- Converte i `tags` in una lista.  
- Invia una richiesta PUT a `VEHICLES_META_API/api/vmetas/{vmeta_name}`.  
- Aggiorna i dettagli del metadato.

---

### **4️⃣ DELETE `/vmetas/{vmeta_name}`**
**Descrizione:**  
- Elimina un **metadato specifico**.

**Parametri (Path, obbligatorio):**  
- `vmeta_name` *(str)* → Nome del metadato da eliminare.  

**Funzionamento:**  
- Effettua una richiesta DELETE a `VEHICLES_META_API/api/vmetas/{vmeta_name}`.  
- Restituisce lo stato della richiesta.

---

### **5️⃣ POST `/vmetas/`**
**Descrizione:**  
- Crea un **nuovo metadato** per i veicoli.

**Parametri (Body, obbligatori):**  
- `name` *(str)* → Nome del metadato.  
- `label` *(str)* → Etichetta del metadato.  
- `type` *(str)* → Tipo di dato del metadato.  
- `has_expiration` *(bool)* → Indica se il metadato ha una scadenza.  
- `tags` *(str, opzionale)* → Elenco di tag separati da `|`.  

**Funzionamento:**  
- Converte i `tags` in una lista.  
- Invia una richiesta POST a `VEHICLES_META_API/api/vmetas/`.  
- Crea un nuovo metadato nel sistema.

---

## **📊 Sezione Descriptor dei Metadati**
### **6️⃣ GET `/vmetadescriptors/{vmetadescriptor_id}`**
**Descrizione:**  
- Recupera i dettagli di un **descrittore di metadato**.

**Parametri (Path, obbligatorio):**  
- `vmetadescriptor_id` *(int)* → Identificativo del descrittore di metadato.  

**Funzionamento:**  
- Effettua una richiesta GET a `VEHICLES_META_API/api/vmetadescriptors/{vmetadescriptor_id}`.  
- Restituisce i dettagli del descrittore di metadato.

---

### **7️⃣ POST `/vmetadescriptors/`**
**Descrizione:**  
- Crea un **nuovo descrittore di metadato**.

**Parametri (Body, obbligatori):**  
- **Dati del nuovo descrittore**, che includono nome, tipo, vincoli e altre proprietà.  

**Funzionamento:**  
- Invia una richiesta POST a `VEHICLES_META_API/api/vmetadescriptors/`.  
- Crea un nuovo descrittore di metadato per i veicoli.

---
