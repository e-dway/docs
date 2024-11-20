---
sidebar_position: 1
---

# Struttura ng18

La struttura è composto dalle seguenti directory e file:

## Directory principali

- **dist/**: Contiene i file dell'applicazione compilata e ottimizzata dopo l'esecuzione di `ng build` o `ng build --prod`. È la versione pronta per la distribuzione del progetto.
  
- **node_modules/**: Contiene tutte le dipendenze e i pacchetti installati tramite NPM specificati nel file `package.json`.

- **src/**: La cartella principale del progetto dove si trova il codice sorgente.

### Dentro `src/`

- **app/**: Questa directory contiene il codice dell'applicazione principale Angular.

  - **app.component.html**: Il template HTML principale per il componente radice dell'applicazione.
  
  - **app.component.ts**: La logica del componente principale, contiene la classe del componente e il comportamento dell'app.
  
  - **app.config.ts**: Un file di configurazione per l'applicazione. Potrebbe essere utilizzato per gestire le impostazioni globali o configurazioni del modulo.
  
  - **app.routes.ts**: Configura il routing dell'applicazione, specificando le rotte e i componenti associati.
  
  - **auth.guard.ts**: Una guardia di autenticazione, utilizzata per proteggere le rotte. Verifica se l'utente è autorizzato ad accedere a determinate pagine.

  - **common/**: Potrebbe contenere servizi, componenti o funzioni comuni a tutta l'applicazione, come i filtri o i moduli condivisi.
  
  - **models/**: Contiene modelli di dati utilizzati per definire le interfacce e le strutture dei dati nel progetto.

    1. **coupon.ts**: 
    2. **fleet.ts**: 
    3. **issue.ts**: 
    4. **log.ts**: 
    5. **payment.ts**: 
    6. **penalty.ts**: 
    7. **rental.ts**: 
    8. **transaction.ts**: 
    9. **user.ts**: 
    10. **vehicle.ts**: 
    
  
  - **pages/**: Questa cartella potrebbe contenere componenti relativi alle diverse pagine dell'applicazione (ad es. homepage, pagine dei dettagli, ecc.).

  - **services/**: Contiene i servizi che l'applicazione utilizza, ad esempio per l'interazione con API o gestione dello stato.
  
  - **shared/**: componenti comuni.

    1. **header**: 
    2. **icon**: 
    3. **menu**: 
    
- **assets/**: Contiene risorse statiche come immagini, file CSS, font, ecc., che possono essere utilizzati nell'applicazione.

- **environments/**: Contiene i file di configurazione per diversi ambienti (ad es., sviluppo, produzione). Ogni file definisce variabili di configurazione specifiche per l'ambiente.

- **index.html**: Il file HTML principale dell'applicazione Angular. Questo è il punto di ingresso dell'app e dove viene montato il componente principale.

- **main.ts**: Il punto di ingresso del codice TypeScript. Bootstrap l'applicazione Angular, creando l'istanza dell'app principale.

---

## File di configurazione del progetto

- **package.json**: Contiene le informazioni di configurazione del progetto, comprese le dipendenze, gli script NPM, e i metadati relativi all'applicazione.

- **package-lock.json**: Un file generato automaticamente che descrive le versioni esatte delle dipendenze installate, per garantire che le stesse versioni siano installate su ogni ambiente.



---

