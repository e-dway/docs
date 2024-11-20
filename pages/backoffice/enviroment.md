---
sidebar_position: 2
---

# `environment.ts`

### Proprietà Principali

- **`production: false`**: Indica che l'applicazione è in esecuzione in modalità **sviluppo**. Quando l'applicazione è costruita per la produzione, questo valore viene impostato su `true` (solitamente nel file `environment.prod.ts`).

- **`version: "0.0.0.6"`**: La versione attuale dell'applicazione. Questa può essere aggiornata ad ogni release o distribuzione dell'app.

- **`release: "25/10/2024"`**: La data di rilascio di questa versione specifica. Questa informazione è utile per tracciare le versioni e le date di rilascio dell'applicazione.

### Chiavi per il Contesto dell'Utente

- **`checkLogin: "E-DWay:login"`**:Chiave per meccanismo di **verifica dell'accesso** (login). Utilizzata per controllare se un utente è loggato o meno.

- **`anguage: "E-DWay:language""`**: Chiave per memorizzare **lingua** selezionata dall'utente.

- **`user: "E-DWay:user"`**: Memorizza i dati relativi all'utente.

- **`token: "E-DWay:token"`**: Questa chiave rappresenta il **token di autenticazione** utilizzato dall'utente per autenticarsi presso il back-end.

- **`client_id: "E-DWay:client_id"`**: Identificativo univoco del client utilizzato per interazioni API o per la gestione dell'utente.

- **`clients: "E-DWay:clients"`**: Probabilmente una chiave per memorizzare una lista di **clienti** o di utenti associati al sistema. Questa chiave può essere utilizzata in sistemi multi-tenant o multi-cliente.

- **`roles: "E-DWay:roles"`**: Contiene le informazioni sui **ruoli** associati all'utente, per gestire i privilegi e le autorizzazioni all'interno dell'applicazione.

### URL delle API

- **`api: "https://api.hoponmobility.com/"`**: Questo è l'endpoint principale dell'API del back-end con cui l'applicazione comunica per recuperare e inviare dati. Viene utilizzato per tutte le operazioni di **API REST** relative a `E-DWay`.

- **`apiQr: "https://api.qrserver.com/"`**: L'URL di un servizio di **generazione di codici QR**.

### Chiavi per Servizi Esterni

- **`mapboxKey: "pk.eyJ1Ijoic2lybW1vIiwiYSI6ImNsM3R2djh5ajBjdTgzam52NDBvZzVhcXEifQ.wSyHLLyQ7X5SmSXHLw5clA"`**: Chiave API per **Mapbox**, utilizzata per visualizzare mappe all'interno dell'applicazione. Questo tipo di chiave è necessario per integrare i servizi di mappe forniti da **Mapbox**

---

## Utilizzo

Nell'applicazione Angular, il file `environment.ts` può essere importato ovunque sia necessario utilizzare le variabili di configurazione. Ecco un esempio di come queste variabili potrebbero essere utilizzate:

### Esempio di utilizzo

```typescript
import { environment } from '../environments/environment';

// Utilizzo dell'API principale
const apiUrl = environment.api;

// Utilizzo della chiave Mapbox
const mapboxApiKey = environment.mapboxKey;
```

### Sostituzione durante la build

In Angular, il file `environment.ts` viene sostituito con `environment.prod.ts` (o un altro file specifico) durante la build di produzione. Questo avviene automaticamente se è configurato correttamente nel file `angular.json`.

---

