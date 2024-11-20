---
sidebar_position: 1
---

# Package

# Componenti Utilizzati

Il file `package.json` del progetto Angular, chiamato **management-front-ng18**, elenca una serie di dipendenze e devDependencies che indicano i vari componenti e librerie utilizzati nel progetto. Di seguito viene fornita una descrizione dei principali componenti utilizzati, insieme al loro ruolo nel progetto.

## Componenti Principali di Angular

### Dipendenze di Angular

| Nome Pacchetto                   | Versione  | Descrizione                                                                 |
|----------------------------------|-----------|-----------------------------------------------------------------------------|
| `@angular/animations`            | ^18.1.0   | Fornisce il supporto per le animazioni nell'applicazione Angular.           |
| `@angular/cdk`                   | ^18.2.8   | Component Dev Kit, un set di strumenti utili per creare componenti UI.      |
| `@angular/common`                | ^18.1.0   | Contiene moduli comuni necessari in tutte le applicazioni Angular.          |
| `@angular/compiler`              | ^18.1.0   | Compiler Angular per trasformare i template HTML.                           |
| `@angular/core`                  | ^18.1.0   | Modulo principale di Angular che fornisce le funzionalità di base.          |
| `@angular/forms`                 | ^18.1.0   | Utilizzato per gestire i form, sia reattivi che template-driven.            |
| `@angular/material`              | ^18.2.8   | Fornisce una libreria di componenti UI basati su Material Design.           |
| `@angular/platform-browser`      | ^18.1.0   | Modulo necessario per far funzionare l'applicazione nel browser.            |
| `@angular/platform-browser-dynamic` | ^18.1.0 | Usato per la compilazione e il bootstrap dell'applicazione nel browser.     |
| `@angular/router`                | ^18.1.0   | Gestisce la navigazione e il routing tra le diverse viste dell'applicazione.|

### Altre Librerie Utilizzate

| Nome Pacchetto                   | Versione  | Descrizione                                                                 |
|----------------------------------|-----------|-----------------------------------------------------------------------------|
| `@mapbox/mapbox-gl-draw`         | ^1.4.3    | Fornisce strumenti per disegnare forme su mappe integrate tramite Mapbox.   |
| `@turf/turf`                     | ^7.1.0    | Libreria di geoprocessing per operazioni spaziali su mappe.                 |
| `boostrap`                       | ^2.0.0    | Versione errata di 'bootstrap', probabilmente aggiunta per errore.          |
| `bootstrap`                      | ^5.3.3    | Framework per lo sviluppo di layout responsive e componenti UI.             |
| `leaflet`                        | ^1.9.4    | Libreria JavaScript open-source per mappe interattive.                      |
| `leaflet-draw`                   | ^1.0.4    | Estensione per Leaflet che consente di disegnare e modificare poligoni.     |
| `mapbox-gl`                      | ^3.7.0    | Libreria per visualizzare mappe dinamiche utilizzando Mapbox.               |
| `rxjs`                           | ~7.8.0    | Libreria per la programmazione reattiva, utilizzata ampiamente in Angular.  |
| `supercluster`                   | ^8.0.1    | Utilizzata per gestire clustering di punti su mappe (come Mapbox o Leaflet).|
| `tabulator-tables`               | ^6.3.0    | Libreria per creare tabelle interattive e dinamiche.                        |
| `tslib`                          | ^2.3.0    | Runtime library per TypeScript, utilizzato per ridurre la dimensione del codice.|
| `zone.js`                        | ~0.14.3   | Usato per il rilevamento delle modifiche e la gestione della sincronizzazione di Angular.|

### DevDependencies
Le **devDependencies** includono strumenti utilizzati solo durante lo sviluppo, come compilatori e test runner.

| Nome Pacchetto                   | Versione  | Descrizione                                                                 |
|----------------------------------|-----------|-----------------------------------------------------------------------------|
| `@angular-devkit/build-angular`  | ^18.1.0   | Strumenti per la build delle applicazioni Angular.                          |
| `@angular/cli`                   | ^18.1.0   | CLI di Angular per la gestione di progetti Angular.                         |
| `@angular/compiler-cli`          | ^18.1.0   | Utilizzato per la compilazione Ahead-of-Time (AOT) in Angular.              |
| `@types/jasmine`                 | ~5.1.0    | Tipi TypeScript per Jasmine, un framework di test.                          |
| `@types/mapbox-gl`               | ^3.4.0    | Tipi TypeScript per l'integrazione di Mapbox.                               |
| `@types/tabulator-tables`        | ^6.2.3    | Tipi TypeScript per Tabulator Tables.                                       |
| `jasmine-core`                   | ~5.1.0    | Core del framework di test Jasmine.                                         |
| `karma`                          | ~6.4.0    | Test runner per eseguire i test di unità nell'applicazione.                 |
| `karma-chrome-launcher`          | ~3.2.0    | Esegue i test in un'istanza di Chrome.                                      |
| `karma-coverage`                 | ~2.2.0    | Misura la copertura dei test di unità.                                      |
| `karma-jasmine`                  | ~5.1.0    | Adapter per usare Jasmine con Karma.                                        |
| `karma-jasmine-html-reporter`    | ~2.1.0    | Reporter per visualizzare i risultati dei test Jasmine in HTML.             |
| `typescript`                     | ~5.5.2    | TypeScript, il linguaggio di scripting utilizzato per scrivere l'applicazione Angular. |

## Considerazioni Generali
- **Angular Material** e **CDK** sono utilizzati per costruire interfacce utente moderne e responsive, supportando anche animazioni.
- Le librerie per la gestione delle **mappe** (`mapbox-gl`, `leaflet`, `@mapbox/mapbox-gl-draw`, etc.) indicano che l'applicazione fa ampio uso di mappe interattive e funzionalità geospaziali.
- La presenza di **rxjs** e **zone.js** mostra che vengono utilizzati approcci reattivi per gestire gli eventi e le modifiche nello stato dell'applicazione.
- Le **devDependencies** includono strumenti di testing, compilazione e tipizzazione, suggerendo un'attenzione al ciclo di sviluppo e qualità del codice.

## Conclusione
Questo progetto Angular utilizza un mix di librerie potenti per costruire un'interfaccia utente dinamica, inclusi strumenti per mappe, gestione di tabelle, UI Material Design e supporto reattivo. Ogni libreria ha un ruolo specifico per garantire che l'applicazione sia moderna, mantenibile e scalabile, sia per l'utente finale che per gli sviluppatori che la gestiscono e la estendono nel tempo.
