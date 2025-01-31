---
sidebar_position: 15
---


## **⚙️ Sezione Utility**
Questa sezione contiene endpoint utili per la gestione di cache, file, impostazioni, codici QR, etichette e blocchi.

---

### **1️⃣ GET `/cached`**
**Descrizione:**  
- Recupera i dati memorizzati nella cache.

**Parametri (Header, opzionali):**  
- `authorization` *(str)* → Token di autorizzazione.  
- `client_id` *(str, opzionale)* → Identificativo del cliente.  
- `user_lat` *(float, opzionale)* → Latitudine dell'utente.  
- `user_lon` *(float, opzionale)* → Longitudine dell'utente.  

**Funzionamento:**  
- Effettua una richiesta GET per ottenere i dati cache memorizzati nel sistema.

---

### **2️⃣ GET `/upload`**
**Descrizione:**  
- Avvia un processo di caricamento di un file.

**Parametri (Query, obbligatori):**  
- `fname` *(str)* → Nome del file.  
- `ct` *(str, opzionale, default=`application/pdf`)* → Tipo di contenuto del file.  

**Parametri (Header, opzionali):**  
- `authorization`, `bundle_id`, `client_id`, `user_lat`, `user_lon`.  

**Funzionamento:**  
- Effettua una richiesta GET per inizializzare il caricamento di un file nel sistema.

---

### **3️⃣ PUT `/minio_fail`**
**Descrizione:**  
- Segnala un errore nel caricamento di un file su MinIO (storage).

**Parametri (Body, obbligatori):**  
- `url` *(str)* → URL del file in MinIO.  
- `f` *(UploadFile)* → File caricato.  

**Funzionamento:**  
- Invia una richiesta PUT per segnalare un errore durante il caricamento.

---

### **4️⃣ PUT `/m2m/{fldr}/{fname}`**
**Descrizione:**  
- Carica un file in una cartella specifica.

**Parametri (Path, obbligatorio):**  
- `fldr` *(str)* → Nome della cartella.  
- `fname` *(str)* → Nome del file.  

**Parametri (Header, opzionali):**  
- `client_id`.  

**Funzionamento:**  
- Effettua una richiesta PUT per caricare un file in una cartella specificata.

---

### **5️⃣ GET `/files/{fldr}/{fname}`**
**Descrizione:**  
- Scarica un file specifico da una cartella.

**Parametri (Path, obbligatorio):**  
- `fldr` *(str)* → Nome della cartella.  
- `fname` *(str)* → Nome del file.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`.  

**Funzionamento:**  
- Effettua una richiesta GET per scaricare un file specifico.

---

### **6️⃣ GET `/settings`**
**Descrizione:**  
- Recupera le impostazioni globali del sistema.

**Parametri:** (Identici a `/cached`)  

**Funzionamento:**  
- Effettua una richiesta GET per ottenere tutte le impostazioni.

---

### **7️⃣ GET `/settings/{key}`**
**Descrizione:**  
- Recupera un'impostazione specifica.

**Parametri (Path, obbligatorio):**  
- `key` *(str)* → Chiave dell'impostazione.  

**Funzionamento:**  
- Effettua una richiesta GET per ottenere un valore specifico dalle impostazioni.

---

### **8️⃣ GET `/strings/{lang}`**
**Descrizione:**  
- Recupera le stringhe di testo localizzate per una lingua specifica.

**Parametri (Path, obbligatorio):**  
- `lang` *(str)* → Codice della lingua.  

**Funzionamento:**  
- Effettua una richiesta GET per ottenere i testi localizzati in base alla lingua.

---

### **9️⃣ GET `/qrcode`**
**Descrizione:**  
- Genera un codice QR.

**Parametri (Query, obbligatorio):**  
- `code` *(str)* → Testo o URL da codificare nel QR code.  

**Funzionamento:**  
- Effettua una richiesta GET per generare un codice QR.

---

### **🔟 GET `/error`**
**Descrizione:**  
- Endpoint di test per la gestione degli errori.

**Funzionamento:**  
- Effettua una richiesta GET per testare la gestione degli errori nel sistema.

---

### **1️⃣1️⃣ GET `/countrycodes`**
**Descrizione:**  
- Restituisce la lista dei prefissi telefonici dei paesi.

**Funzionamento:**  
- Effettua una richiesta GET per ottenere i codici internazionali dei paesi.

---

### **1️⃣2️⃣ GET `/labels`**
**Descrizione:**  
- Recupera le etichette testuali per l'interfaccia.

**Parametri:** (Identici a `/cached`)  

**Funzionamento:**  
- Effettua una richiesta GET per ottenere l'elenco delle etichette testuali del sistema.

---

### **1️⃣3️⃣ GET `/files`**
**Descrizione:**  
- Recupera la lista di file disponibili nel sistema.

**Parametri:** (Identici a `/cached`)  

**Funzionamento:**  
- Effettua una richiesta GET per ottenere la lista di file caricati.

---

### **1️⃣4️⃣ GET `/blocked`**
**Descrizione:**  
- Recupera la lista dei numeri di telefono bloccati.

**Parametri:** (Identici a `/cached`)  

**Funzionamento:**  
- Effettua una richiesta GET per ottenere l'elenco degli utenti bloccati.

---

### **1️⃣5️⃣ DELETE `/blocked`**
**Descrizione:**  
- Rimuove un numero di telefono dalla lista dei bloccati.

**Parametri (Query, obbligatorio):**  
- `phone` *(str)* → Numero di telefono da sbloccare.  

**Funzionamento:**  
- Effettua una richiesta DELETE per rimuovere un numero dalla lista degli utenti bloccati.

---
