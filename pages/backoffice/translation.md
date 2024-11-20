---
sidebar_position: 4
---

# `translation`


# Descrizione del File `translation.json` in un Progetto Angular

Il file `translation.json` è utilizzato per gestire le traduzioni dell'applicazione Angular, consentendo il supporto per **l'internazionalizzazione (i18n)**. Questo file contiene un insieme di chiavi e valori per rappresentare testi tradotti in diverse lingue. Di solito è organizzato in formato JSON e include le traduzioni per più lingue, semplificando il passaggio tra localizzazioni per migliorare l'esperienza utente.

## Struttura del File

Il file contiene una serie di **chiavi** che rappresentano concetti o testi comuni all'interno dell'applicazione, e per ciascuna chiave è presente la traduzione nelle lingue supportate, come l'Italiano (`it`) e l'Inglese (`en`).

Ecco un esempio di come appare il contenuto del file `translation.json`:

```json
{
  "veicoli": {
    "it": "Veicoli",
    "en": "Vehicles"
  },
  "utenti": {
    "it": "Utenti",
    "en": "Users"
  },
  "transazioni": {
    "it": "Transazioni",
    "en": "Transactions"
  },
  "connettività": {
    "it": "Connettività",
    "en": "Connectivity"
  }
}
```

Ogni **chiave** ha come valore un oggetto che specifica le diverse traduzioni per le lingue supportate. In questo caso, le lingue sono Italiano (`it`) e Inglese (`en`).

## Tabella delle Chiavi di Traduzione

Di seguito è riportata una tabella che descrive le chiavi presenti nel file, insieme alle traduzioni per Italiano e Inglese:

| Chiave          | Italiano       | Inglese      |
|-----------------|----------------|--------------|
| veicoli         | Veicoli        | Vehicles     |
| utenti          | Utenti         | Users        |
| transazioni     | Transazioni    | Transactions |
| connettività    | Connettività   | Connectivity |

