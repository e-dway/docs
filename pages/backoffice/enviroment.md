---
sidebar_position: 2
---

# `environment.ts`

### Proprietà Principali

- **`production: false`**: Indica che l'applicazione è in esecuzione in modalità **sviluppo**. Quando l'applicazione è costruita per la produzione, questo valore viene impostato su `true` (solitamente nel file `environment.prod.ts`).

- **`version: "0.0.0.6"`**: La versione attuale dell'applicazione. Questa può essere aggiornata ad ogni release o distribuzione dell'app.

- **`release: "25/10/2024"`**: La data di rilascio di questa versione specifica. Questa informazione è utile per tracciare le versioni e le date di rilascio dell'applicazione.

### Chiavi per il Contesto dell'Utente

- **`checkLogin: "E-DWay:login"`**: Potrebbe rappresentare una chiave per un meccanismo di **verifica dell'accesso** (login). Probabilmente viene utilizzata per controllare se un utente è loggato o meno.

- **`user: "E-DWay:user"`**: Memorizza i dati relativi all'utente. È probabile che questa chiave venga usata per conservare le informazioni dell'utente nel **local storage** o sessione.

- **`token: "E-DWay:token"`**: Questa chiave rappresenta il **token di autenticazione** utilizzato dall'utente per autenticarsi presso il back-end. Solitamente, viene memorizzato in `localStorage` o `sessionStorage`.

- **`client_id: "E-DWay:client_id"`**: Identificativo univoco del client utilizzato per interazioni API o per la gestione dell'utente.

- **`clients: "E-DWay:clients"`**: Probabilmente una chiave per memorizzare una lista di **clienti** o di utenti associati al sistema. Questa chiave può essere utilizzata in sistemi multi-tenant o multi-cliente.

- **`roles: "E-DWay:roles"`**: Contiene le informazioni sui **ruoli** associati all'utente, per gestire i privilegi e le autorizzazioni all'interno dell'applicazione.

### URL delle API

- **`api: "https://api.hoponmobility.com/"`**: Questo è l'endpoint principale dell'API del back-end con cui l'applicazione comunica per recuperare e inviare dati. Viene utilizzato per tutte le operazioni di **API REST** relative a `E-DWay`.

- **`apiQr: "https://api.qrserver.com/"`**: L'URL di un servizio di **generazione di codici QR**. L'applicazione potrebbe utilizzarlo per generare o decodificare codici QR.

### Chiavi per Servizi Esterni

- **`mapboxKey: "pk.eyJ1Ijoic2lybW1vIiwiYSI6ImNsM3R2djh5ajBjdTgzam52NDBvZzVhcXEifQ.wSyHLLyQ7X5SmSXHLw5clA"`**: Una chiave API per **Mapbox**, utilizzata per visualizzare mappe all'interno dell'applicazione. Questo tipo di chiave è necessario per integrare i servizi di mappe forniti da **Mapbox**, ad esempio per mostrare la posizione di veicoli o utenti.

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

## Note

- **Gestione sicura delle chiavi**: Assicurati di proteggere chiavi sensibili, come quella di **Mapbox**, specialmente nelle distribuzioni di produzione. Potresti voler utilizzare variabili d'ambiente o altri sistemi sicuri per gestire queste informazioni.
  
- **Separazione degli ambienti**: Durante la fase di produzione, le configurazioni, come l'URL delle API o le chiavi di accesso, potrebbero differire. Assicurati di gestire correttamente i file di configurazione per gli ambienti di **sviluppo** e **produzione**.

- **Versionamento**: Le proprietà `version` e `release` sono utili per tenere traccia delle versioni dell'app e delle date di rilascio. Assicurati di aggiornarle regolarmente durante i cicli di sviluppo e distribuzione.

Questo file è essenziale per centralizzare e semplificare la gestione delle configurazioni in un'applicazione Angular, mantenendo separate le informazioni sensibili e i parametri di configurazione specifici per ogni ambiente.