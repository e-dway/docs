### **📌 Descrizione del file `vehicles.py`**

Il file `vehicles.py` è un **modulo FastAPI** che gestisce **veicoli** all'interno del sistema.  
Include endpoint per **recuperare veicoli**, **ottenere dati in tempo reale**, **visualizzare log** e **ottenere icone personalizzate**.

---

## **📌 Descrizione dettagliata degli Endpoint**

### **1️⃣ GET `/` → `get_vehicles`**
**Descrizione:**  
- Recupera la lista di **tutti i veicoli disponibili** in una determinata area.

**Parametri (Query e Header, opzionali):**  
- `bbox` *(str, obbligatorio)* → Bounding box (area geografica) per filtrare i veicoli.  
- `authorization` *(str, opzionale)* → Token di autenticazione.  
- `client_id` *(str, opzionale)* → Identificativo del cliente.  
- `fltr` *(str, opzionale, default `{}`)* → Filtro avanzato in formato JSON.  
- `test` *(str, opzionale)* → Modalità test.  
- `user_lat` *(float, opzionale)* → Latitudine dell'utente.  
- `user_lon` *(float, opzionale)* → Longitudine dell'utente.  
- `fake_v_pos` *(List[float], opzionale)* → Simula una posizione per i veicoli.  

**Funzionamento:**  
- Effettua una richiesta `GET` e restituisce **un elenco di veicoli disponibili nell'area specificata**.

---

### **2️⃣ GET `/{id}` → `get_vehicle`**
**Descrizione:**  
- Recupera i dettagli di un **veicolo specifico**.

**Parametri (Path, obbligatorio):**  
- `id` *(str)* → Identificativo del veicolo.  

**Parametri (Header, opzionali):**  
- `authorization`, `client_id`, `user_lat`, `user_lon`.  

**Funzionamento:**  
- Effettua una richiesta `GET` e restituisce **tutte le informazioni su un veicolo specifico**.

---

### **3️⃣ GET `/{id}/data` → `get_vehicle_data`**
**Descrizione:**  
- Recupera **i dati in tempo reale** di un veicolo.

**Parametri:** (Identici a `/{id}`)  

**Funzionamento:**  
- Effettua una richiesta `GET` e restituisce **dati dinamici** come:
  - **Stato della batteria**
  - **Velocità attuale**
  - **Ultima posizione**
  - **Stato del veicolo (disponibile, in noleggio, ecc.)**

---

### **4️⃣ GET `/{id}/logs` → `get_logs`**
**Descrizione:**  
- Recupera i **log operativi** di un veicolo.

**Parametri (Path, obbligatorio):**  
- `id` *(str)* → Identificativo del veicolo.  

**Funzionamento:**  
- Effettua una richiesta `GET` e restituisce **storico eventi e operazioni**, come:
  - **Ultimi noleggi**
  - **Manutenzioni**
  - **Messaggi di errore**
  - **Cambiamenti di stato**

---

### **5️⃣ GET `/imgs/{typ}/{battery}/{time}` → `get_vehicle_icon`**
**Descrizione:**  
- Restituisce **un'icona personalizzata** per un veicolo, basata su **tipo, livello di batteria e orario**.

**Parametri (Path, obbligatori):**  
- `typ` *(str)* → Tipo di veicolo.  
- `battery` *(str)* → Stato della batteria.  
- `time` *(str)* → Momento del giorno (giorno/notte).  

**Parametri (Header, opzionali):**  
- `client_id`, `user_lat`, `user_lon`.  

**Funzionamento:**  
- Effettua una richiesta `GET` e restituisce **un'icona dinamica in base alle condizioni del veicolo**.

---

### **6️⃣ GET `/{typ}/icon.png` → `get_icon`**
**Descrizione:**  
- Restituisce un'**icona standard** per un tipo di veicolo.

**Parametri (Path, obbligatorio):**  
- `typ` *(str)* → Tipo di veicolo.  

**Parametri (Query, opzionali):**  
- `battery` *(str, opzionale)* → Livello di batteria.  

**Parametri (Header, opzionali):**  
- `client_id`, `user_lat`, `user_lon`.  

**Funzionamento:**  
- Effettua una richiesta `GET` e restituisce **l'icona standard del veicolo**, senza considerare lo stato attuale.

