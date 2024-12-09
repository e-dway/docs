# Telegram BOT


**bot di Telegram** utilizzando la libreria **python-telegram-bot** e integra un'API basata su **FastAPI** per gestire richieste HTTP per funzionalità aggiuntive. 


## **1. Panoramica Generale**
- Il bot consente di interagire con Telegram e rispondere a comandi inviati dagli utenti.
- È integrato con un'API esterna tramite FastAPI per consentire l'esecuzione di azioni come invio di messaggi, posizioni, e gestione di noleggi o documenti.
- Il bot utilizza vari endpoint per comunicare con un server remoto (es. `USERAPI_SERVER` e `VEHICLES_API`).

---

## **2. Funzionalità del bot**
### **Comandi Telegram**
Il bot risponde a vari comandi Telegram definiti attraverso handler di comando. Alcuni esempi:
- `/otp <username>`: Recupera e invia il codice OTP di un utente.
- `/user <username>`: Mostra le informazioni dell'utente.
- `/lock <vehicle>`: Blocca un veicolo.
- `/unlock <vehicle>`: Sblocca un veicolo.
- `/find <vehicle>`: Trova la posizione e la batteria di uno o più veicoli.
- `/block <username>`: Blocca un utente.
- `/unblock <username>`: Sblocca un utente.

Questi comandi sono gestiti da funzioni asincrone (es. `otp`, `user_info`, `lock_vehicle`), che:
1. Estraggono i parametri dal messaggio Telegram.
2. Comunicano con servizi esterni tramite richieste HTTP.
3. Restituiscono risposte agli utenti.

---

### **Callback di Telegram**
Gestisce pulsanti interattivi con `CallbackQueryHandler`. Esempio:
- Gli utenti possono accettare o rifiutare documenti caricati tramite bottoni interattivi.

La funzione `button`:
1. Elabora i dati dal callback.
2. Esegue operazioni specifiche, come accettare o rifiutare documenti tramite l'API esterna.
3. Aggiorna il messaggio Telegram per riflettere l'azione.

---

### **Invio di Media**
Il bot supporta l'invio di:
- **Messaggi di testo** (`bot.send_message`).
- **Posizioni geografiche** (`bot.send_location`).
- **Contatti** (`bot.send_contact`).
- **Foto o gruppi di media** (`bot.send_media_group`).

Esempio: Gli endpoint `/api/trip_start` e `/api/trip_end` inviano messaggi e posizioni per segnalare l'inizio e la fine di un noleggio.

---

## **3. API HTTP con FastAPI**
FastAPI espone vari endpoint per interagire con il bot tramite richieste HTTP.

### **Endpoint principali:**
- `/api/msg`: Invia un messaggio di testo a una chat specificata.
- `/api/ll`: Invia una posizione geografica.
- `/api/person`: Invia un contatto.
- `/api/otp`: Invia un messaggio contenente un codice OTP.
- `/api/trip_end`: Segnala la fine di un noleggio, inviando dettagli e posizione.
- `/api/user_issue`: Segnala un problema relativo a un veicolo con dettagli e foto.
- `/api/files`: Carica e invia un gruppo di foto/documenti insieme a pulsanti di accettazione/rifiuto.

---

## **4. Integrazione con API esterne**
Il bot utilizza due API principali configurabili tramite variabili d'ambiente:
- **USERAPI_SERVER**: Per recuperare informazioni sugli utenti.
- **VEHICLES_API**: Per gestire azioni sui veicoli (es. blocco/sblocco, comandi, documentazione).

Esempio di utilizzo:
```python
requests.get(USERAPI_SERVER + "/info/{}/{}".format(username, 'edway'), headers={"Secret": USERAPI_SECRET}).json()
```

---

## **5. Configurazione**
### **Variabili d'ambiente**
Il codice usa variabili d'ambiente per configurare:
- **BOT**: Token del bot Telegram.
- **USERAPI_SERVER** e **VEHICLES_API**: URL delle API esterne.
- **USERAPI_SECRET**: Chiave segreta per autenticare le richieste.

### **Avvio**
Il bot e l'API vengono avviati in parallelo utilizzando **asyncio**:
1. **`setup_bot`** configura gli handler e comandi.
2. **`main_bot`** avvia il bot e il server FastAPI.

---

## **6. Funzionalità Asincrone**
L'uso di `async def` permette di:
- Eseguire operazioni parallele (es. invio di messaggi e posizioni).
- Migliorare la performance in ambienti con molte richieste.

---
