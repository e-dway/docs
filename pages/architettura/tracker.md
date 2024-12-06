---
sidebar_position: 18
---

# Tracker

## Overview

Api che funge da aggregatore di messaggi che pervengono dai vari iot installati sui veicoli , i messaggi vengono conservati nel format json utilizzato da flespi, i vari messaggi json/flespi vengono conservati in uno specifico database postgres edway-log che contiene una sola tabella core_vehiclelog

## edway-log

La tabella **`core_vehiclelog`** è progettata per registrare i log (eventi o attività) relativi a veicoli, con dettagli specifici come il tipo di log, timestamp, posizione geografica, e dati associati in formato JSON. Ecco una descrizione dettagliata della struttura:

---

### **Struttura della Tabella**

| Colonna        | Tipo               | Descrizione                                                                                                   |
|-----------------|--------------------|---------------------------------------------------------------------------------------------------------------|
| **`id`**        | `SERIAL`           | Identificatore univoco della riga, generato automaticamente (chiave primaria).                               |
| **`vehicle`**   | `VARCHAR(200)`     | Identificativo del veicolo associato al log (es. numero di targa o un ID univoco).                           |
| **`logtype`**   | `VARCHAR(200)`     | Tipo di log, utile per classificare l'evento (es. "avvio", "fermata", "errore").                             |
| **`timestamp`** | `TIMESTAMPTZ`      | Data e ora dell'evento, con supporto per il fuso orario.                                                     |
| **`data`**      | `JSONB`            | Dati strutturati relativi all'evento, memorizzati come JSON in formato binario per query efficienti.         |
| **`lng`**       | `DOUBLE PRECISION` | Longitudine della posizione del veicolo (può essere NULL se la posizione non è disponibile).                 |
| **`lat`**       | `DOUBLE PRECISION` | Latitudine della posizione del veicolo (può essere NULL se la posizione non è disponibile).                  |
| **`lock_status`** | `BOOLEAN`         | Stato di blocco del veicolo (es. `TRUE` per bloccato, `FALSE` per sbloccato, `NULL` se non specificato).     |

---

### **Indici della Tabella**

1. **`core_vehiclelog_timestamp_a55a73b0`**:
   - Indicizzato sul campo `timestamp` per ottimizzare le query che filtrano per data/ora.

2. **`core_vehiclelog_vehicle`**:
   - Indicizzato sul campo `vehicle` per velocizzare la ricerca dei log relativi a un veicolo specifico.

## Flespi

**Flespi** è una piattaforma che consente di aggregare, analizzare e trasmettere dati provenienti da dispositivi IoT, GPS tracker, e applicazioni telematiche. Flespi utilizza formati JSON per strutturare i dati e comunicare con altre applicazioni o servizi tramite API REST, MQTT o WebSocket.

Ecco un approfondimento su come il formato JSON è utilizzato in **Flespi**.

---

### **Formato JSON in Flespi**

#### **1. Messaggi JSON**
I messaggi JSON in Flespi rappresentano i dati ricevuti dai dispositivi. Ogni messaggio ha una struttura chiara con campi che variano in base al dispositivo e al protocollo.

Esempio di messaggio JSON:
```json
{
  "timestamp": 1670344800,
  "position": {
    "latitude": 51.5074,
    "longitude": -0.1278
  },
  "speed": 60.5,
  "ignition": true,
  "device_id": 12345
}
```

- **`timestamp`**: Indica il momento in cui i dati sono stati raccolti (in Unix Time).
- **`position`**: Contiene le coordinate geografiche.
- **`speed`**: Velocità in km/h.
- **`ignition`**: Stato dell'accensione (true/false).
- **`device_id`**: ID del dispositivo che ha inviato i dati.

### **Vantaggi dell'Utilizzo del Formato JSON in Flespi**
1. **Standard Universale**:
   - JSON è leggibile sia dalle macchine che dagli esseri umani, facilitando l'integrazione con altre applicazioni.

2. **Flessibilità**:
   - I campi possono essere personalizzati per adattarsi a diversi dispositivi e protocolli.

3. **Compatibilità**:
   - JSON è facilmente utilizzabile con linguaggi di programmazione come Python, JavaScript, e Java.


## Altri Formati
Alcuni veicoli non riesco ad inviare i loro direttamente nel formato flespi quindi sono stati creati n connettori che fungono da convertitore e poi inviano sempre i messaggi al tracker centralizzato

### connettore 2hire
### connettore Omni
### connettore Segway
### connettore Linke


## Current

il Servizio Current è un api che espone per ogni iot l'ultimo messaggio utile giunto al tracker