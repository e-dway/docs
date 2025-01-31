---
sidebar_position: 18
---


## **🔗 Funzionalità del file `wh.py`**
Il file implementa una serie di funzioni che comunicano con **webhooks.hoponmobility.com**, utilizzando il sistema di webhook **Svix**.

---

### **📌 Configurazione Webhooks**
#### **1️⃣ `get_header()`**
- Genera un'**intestazione HTTP** con il token di autenticazione per comunicare con Svix.
- Restituisce un dizionario contenente:
  ```json
  {
    "Authorization": "Bearer <SVIX_TOKEN>"
  }
  ```

---

### **📡 Gestione delle Applicazioni**
#### **2️⃣ `get_apps()`**
- Recupera la lista di **applicazioni registrate** nei webhooks.
- Effettua una richiesta **GET** a:  
  ```
  https://webhooks.hoponmobility.com/api/v1/app?limit=250
  ```

#### **3️⃣ `get_app(app_id)`**
- Recupera i dettagli di una singola **applicazione webhook**.
- Effettua una richiesta **GET** a:  
  ```
  https://webhooks.hoponmobility.com/api/v1/app/{app_id}
  ```

#### **4️⃣ `create_app(name, client_id)`**
- Crea una nuova applicazione webhook con un **nome** e un **client_id**.
- Effettua una richiesta **POST** a:  
  ```
  https://webhooks.hoponmobility.com/api/v1/app
  ```

---

### **📢 Gestione Eventi Webhook**
#### **5️⃣ `get_event_types()`**
- Recupera la lista degli **eventi webhook** disponibili.
- Effettua una richiesta **GET** a:  
  ```
  https://webhooks.hoponmobility.com/api/v1/event-type?limit=250&with_content=true
  ```

#### **6️⃣ `get_event_type(event_type)`**
- Recupera i dettagli di un singolo **evento webhook**.
- Effettua una richiesta **GET** a:  
  ```
  https://webhooks.hoponmobility.com/api/v1/event-type/{event_type}
  ```

#### **7️⃣ `create_event_type(name, description, schemas={})`**
- Crea un nuovo **tipo di evento webhook** con nome, descrizione e schema JSON.
- Effettua una richiesta **POST** a:  
  ```
  https://webhooks.hoponmobility.com/api/v1/event-type/
  ```

#### **8️⃣ `update_event_type(event_type, description, schemas={})`**
- Modifica un **evento webhook esistente**, aggiornandone descrizione e schema.
- Effettua una richiesta **PUT** a:  
  ```
  https://webhooks.hoponmobility.com/api/v1/event-type/{event_type}
  ```

---

### **🖥️ Gestione Endpoint Webhook**
#### **9️⃣ `create_endpoint(app_id, eurl, version, filterTypes=[])`**
- Registra un **nuovo endpoint** che riceverà eventi webhook.
- Effettua una richiesta **POST** a:  
  ```
  https://webhooks.hoponmobility.com/api/v1/app/{app_id}/endpoint/
  ```

#### **🔟 `get_endpoints(app_id)`**
- Recupera la lista degli **endpoint webhook** associati a un'applicazione.
- Effettua una richiesta **GET** a:  
  ```
  https://webhooks.hoponmobility.com/api/v1/app/{app_id}/endpoint/
  ```

#### **1️⃣1️⃣ `get_attempts(app_id, endpoint_id)`**
- Recupera la lista dei **tentativi di invio webhook** per un endpoint specifico.
- Effettua una richiesta **GET** a:  
  ```
  https://webhooks.hoponmobility.com/api/v1/app/{app_id}/endpoint/{endpoint_id}/msg?limit=100
  ```

---

### **📤 Invio Messaggi Webhook**
#### **1️⃣2️⃣ `do_send_message(app_id, event, payload)`**
- Invia manualmente un **evento webhook** a un'applicazione.
- Effettua una richiesta **POST** a:  
  ```
  https://webhooks.hoponmobility.com/api/v1/app/{app_id}/msg/
  ```

#### **1️⃣3️⃣ `send_message(app_id, event, payload)`**
- Avvia un **thread separato** per inviare un evento webhook.

---
