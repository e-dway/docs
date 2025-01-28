---
sidebar_position: 2
---

```python
@api.post('/info/{client}/edway')
def set_client(request, client, user=None):
    ...
```

#### **Scopo**:
Salva o aggiorna le impostazioni per un determinato client nel database, basandosi sui dati forniti nella richiesta. Se un utente è specificato, verifica che abbia i permessi di gestione del client.

#### **Argomenti**:
1. **`request`**: La richiesta HTTP contenente il payload JSON.
2. **`client`**: Identificativo del client (es. ID o stringa univoca).
3. **`user`** (*opzionale*): Nome utente o identificativo dell'utente che effettua l'operazione.

#### **Logica**:
1. **Lettura dei dati**:
   - I dati vengono estratti dal corpo della richiesta HTTP e decodificati in formato JSON.
   
   ```python
   data = json.loads(request.body)
   ```

2. **Verifica dell'utente**:
   - Se l'utente è specificato, verifica che esista una relazione tra l'utente e il client nella tabella `UserManagement`.

   ```python
   if UserManagement.objects.filter(user=user, ownership=client).count() > 0:
   ```

3. **Aggiornamento o creazione delle impostazioni**:
   - Per ogni chiave-valore fornita nei dati, crea o aggiorna un record nella tabella `Settings`.

   ```python
   Settings.objects.update_or_create(owner_id=client, key=k, defaults={"value": data[k]})
   ```

4. **Risultato**:
   - Restituisce un oggetto JSON con la chiave `"response"` impostata su `"ok"`.

---

### **Funzione 2: `get_client`**

#### **Definizione**:
```python
def get_client(client, user=None):
    return json.load(open('settings.json')).get(client, {})
```

#### **Scopo**:
Recupera le impostazioni di un client specifico da un file locale (`settings.json`).

#### **Logica**:
1. Apre e carica il file `settings.json`.
2. Restituisce le impostazioni del client specificato come dizionario.
3. Se il client non è trovato, restituisce un dizionario vuoto (`{}`).

---

### **Funzione 3: `do_get_client`**

#### **Definizione**:
```python
def do_get_client(client, user=None):
    ...
```

#### **Scopo**:
Recupera e prepara un set completo di impostazioni per un determinato client, integrandole con valori predefiniti e configurazioni speciali. Gestisce anche i permessi di visualizzazione delle impostazioni in base all'utente (ad esempio, se è un superuser).

#### **Logica**:

1. **Determinazione del superuser**:
   - Controlla se l'utente ha una relazione con il client in `UserManagement`.
   - Se sì, l'utente è considerato un superuser.

   ```python
   if UserManagement.objects.filter(user=user, ownership=client).count() > 0:
       superuser = True
   ```

2. **Recupero delle impostazioni dal database**:
   - Estrae tutte le impostazioni del client dalla tabella `Settings`.
   - Esclude le impostazioni contrassegnate come private se l'utente non è un superuser.

   ```python
   rets = Settings.objects.filter(owner_id=client)
   if not superuser: 
       rets = rets.exclude(private=True)
   ```

3. **Valori predefiniti**:
   - Aggiunge manualmente voci predefinite per i termini legali (`legals`).

   ```python
   ret['legals.0.desc'] = "legal.terms.desc"
   ...
   ```

4. **Aggiunta di configurazioni specifiche**:
   - Configura i livelli di batteria (colori, etichette, intervalli).
   - Gestisce configurazioni specifiche come `tour_enabled` e `position_fallback`.

   ```python
   ret["levels"] = {
       "battery": {
           "empty": { "color": ["111", "6", "0"], "label": "empty", "max": "10", "min": "0" },
           ...
       }
   }
   ```

5. **Cache dei dati**:
   - I dati vengono memorizzati in Redis per velocizzare future richieste.

   ```python
   CACHE.set(f'SETTINGS::{client}::{superuser}', json.dumps(jout))
   ```

6. **Risultato**:
   - Restituisce un dizionario con le impostazioni del client, formattato come JSON.

---

### **Funzione 4: `get_client_config`**

#### **Definizione**:
```python
def get_client_config(client, field):
    return get_client(client).get(field)
```

#### **Scopo**:
Recupera un valore specifico di configurazione per un client.

#### **Logica**:
1. Utilizza `get_client` per recuperare tutte le impostazioni di un client.
2. Restituisce il valore associato alla chiave `field`. Se non esiste, restituisce `None`.

---

### **Considerazioni e Possibili Miglioramenti**

1. **Gestione degli Errori**:
   - Le funzioni potrebbero beneficiare di una gestione degli errori più robusta, ad esempio:
     - File JSON non trovato o malformato in `get_client`.
     - Errori di connessione con il database in `do_get_client`.

2. **Ottimizzazione Cache**:
   - Le funzioni usano Redis per la cache, ma alcune parti sono commentate. Implementare correttamente la cache migliorerebbe le prestazioni.

3. **Sicurezza**:
   - Le variabili sensibili (es. `CONFIGAPI_SECRET`) devono essere ben protette.
   - Limitare l'accesso alle impostazioni private ai soli utenti autorizzati.

4. **Documentazione**:
   - Aggiungere docstring per ogni funzione, per rendere il codice più leggibile.

Se hai bisogno di ulteriori dettagli o esempi pratici per una delle funzioni, fammi sapere!