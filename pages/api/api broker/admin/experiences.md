---
sidebar_position: 5
---


---

### **1️⃣ GET `/pois/{z}/{x}/{y}.pbf`**
**Descrizione:**  
- Recupera i **punti di interesse (POI)** in formato binario `PBF` per una determinata area geografica, identificata da livelli di zoom (`z`), coordinate X (`x`) e Y (`y`).

**Parametri (Path):**  
- `z` *(int, obbligatorio)* → Livello di zoom della mappa.  
- `x` *(int, obbligatorio)* → Coordinata X nella griglia delle tile.  
- `y` *(int, obbligatorio)* → Coordinata Y nella griglia delle tile.  

**Funzionamento:**  
- Invia una richiesta GET a `EXPERIENCES_API/api/raw/{z}/{x}/{y}.pbf` e restituisce il file binario.

---

### **2️⃣ GET `/pois`**
**Descrizione:**  
- Restituisce un elenco di **punti di interesse (POI)** disponibili nel sistema.

**Parametri (Header e Query):**  
- `authorization` *(str, opzionale)* → Token di autorizzazione.  
- `filter` *(str, opzionale)* → Filtri da applicare alla ricerca.  
- `client_id` *(str, opzionale)* → Identificativo del cliente.  
- `user_lat` *(float, opzionale)* → Latitudine dell'utente.  
- `user_lon` *(float, opzionale)* → Longitudine dell'utente.  
- `test` *(str, opzionale)* → Modalità di test.  

**Funzionamento:**  
- Effettua una richiesta GET a `EXPERIENCES_API/api/pois/?filter={filter}&owner={client_id}` e restituisce l'elenco dei POI filtrati.

---

### **3️⃣ GET `/pois/{poi_id}`**
**Descrizione:**  
- Recupera i dettagli di un **singolo punto di interesse (POI)** identificato da `poi_id`.

**Parametri (Path e Header):**  
- `poi_id` *(str, obbligatorio)* → Identificativo del POI.  
- `authorization` *(str, opzionale)* → Token di autorizzazione.  
- `client_id` *(str, opzionale)* → Identificativo del cliente.  
- `user_lat` *(float, opzionale)* → Latitudine dell'utente.  
- `user_lon` *(float, opzionale)* → Longitudine dell'utente.  
- `test` *(str, opzionale)* → Modalità di test.  

**Funzionamento:**  
- Effettua una richiesta GET a `EXPERIENCES_API/api/pois/{poi_id}?owner={client_id}` e restituisce i dettagli del POI.

---

### **4️⃣ GET `/pois/{poi_id}/full`**
**Descrizione:**  
- Restituisce i dettagli **completi** di un POI, inclusi dati correlati come immagini, video, tag e informazioni aggiuntive.

**Parametri:** (Identici all'endpoint `/pois/{poi_id}`)  

**Funzionamento:**  
- Effettua una richiesta GET a `EXPERIENCES_API/api/pois/{poi_id}/full?owner={client_id}`.

---

### **5️⃣ PUT `/pois/{poi_id}`**
**Descrizione:**  
- Modifica un punto di interesse esistente.

**Parametri (Path e Header):**  
- `poi_id` *(str, obbligatorio)* → Identificativo del POI da modificare.  
- `poi` *(Oggetto JSON, obbligatorio)* → Dati aggiornati del POI.  
- `authorization` *(str, opzionale)*  
- `client_id` *(str, opzionale)*  
- `user_lat`, `user_lon`, `test` *(opzionali)*  

**Funzionamento:**  
- Invia una richiesta PUT a `EXPERIENCES_API/api/pois/{poi_id}?owner={client_id}` con il nuovo payload JSON.

---

### **6️⃣ DELETE `/pois/{poi_id}`**
**Descrizione:**  
- Elimina un POI specifico.

**Parametri:** (Stessi di `/pois/{poi_id}`)  

**Funzionamento:**  
- Invia una richiesta DELETE a `EXPERIENCES_API/api/pois/{poi_id}`.

---

### **7️⃣ POST `/pois/`**
**Descrizione:**  
- Crea un nuovo punto di interesse.

**Parametri:** (Stessi di `/pois/{poi_id}`)  

**Funzionamento:**  
- Invia una richiesta POST a `EXPERIENCES_API/api/pois/` con il payload JSON.

---

### **Esperienze**
8️⃣ **GET `/experiences`** → Recupera la lista di tutte le esperienze.  
9️⃣ **GET `/experiences/{experience_id}`** → Recupera i dettagli di un'esperienza.  
🔟 **PUT `/experiences/{experience_id}`** → Modifica un'esperienza esistente.  
1️⃣1️⃣ **DELETE `/experiences/{experience_id}`** → Elimina un'esperienza.  
1️⃣2️⃣ **POST `/experiences/`** → Crea una nuova esperienza.

---

### **Itinerari**
1️⃣3️⃣ **GET `/itineraries`** → Restituisce la lista di tutti gli itinerari.  
1️⃣4️⃣ **GET `/itineraries/{itinerary_id}`** → Recupera un itinerario specifico.  
1️⃣5️⃣ **PUT `/itineraries/{itinerary_id}`** → Modifica un itinerario.  
1️⃣6️⃣ **DELETE `/itineraries/{itinerary_id}`** → Elimina un itinerario.  
1️⃣7️⃣ **POST `/itineraries/`** → Crea un nuovo itinerario.

---

### **Pacchetti**
1️⃣8️⃣ **GET `/packages`** → Restituisce la lista di tutti i pacchetti.  
1️⃣9️⃣ **GET `/packages/{package_id}`** → Recupera un pacchetto specifico.  
2️⃣0️⃣ **PUT `/packages/{package_id}`** → Modifica un pacchetto.  
2️⃣1️⃣ **DELETE `/packages/{package_id}`** → Elimina un pacchetto.  
2️⃣2️⃣ **POST `/packages/`** → Crea un nuovo pacchetto.

---

### **Tags**
2️⃣3️⃣ **GET `/tags`** → Restituisce la lista dei tag disponibili.

