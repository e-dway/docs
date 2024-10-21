---
sidebar_position: 3
---

# vehicle

## core_vehicle

**Descrizione**: La tabella `core_vehicle` contiene informazioni sui veicoli disponibili nella flotta. Ogni veicolo ha caratteristiche specifiche, come il modello e il proprietario, oltre a proprietà configurabili come la visibilità e la possibilità di essere noleggiato.

| Campo                    | Tipo        | Descrizione                                             |
|--------------------------|-------------|---------------------------------------------------------|
| `ident`                  | UUID        | Identificatore univoco del veicolo (chiave primaria).    |
| `imei`                   | TEXT        | Codice IMEI associato al veicolo.                        |
| `protocol`               | TEXT        | Protocollo utilizzato per il veicolo (es. di comunicazione). |
| `model_id`               | UUID        | Identificatore del modello del veicolo. Collegato a `core_vehiclemodel`. |
| `owner_id`               | UUID        | Identificatore del proprietario del veicolo. Collegato a `core_ownerships`. |
| `visible`                | BOOLEAN     | Indica se il veicolo è visibile agli utenti.             |
| `rentable`               | BOOLEAN     | Indica se il veicolo è disponibile per il noleggio.      |
| `deleted`                | TIMESTAMPTZ | Data e ora di eliminazione del veicolo, se applicabile.  |
| `require_manual_update`  | BOOLEAN     | Indica se il veicolo richiede aggiornamenti manuali.     |

**Indici e vincoli**:
- Indici su campi come `imei`, `model_id`, e `owner_id` per ottimizzare le ricerche.
- Chiavi esterne su `model_id` e `owner_id` per garantire l'integrità con `core_vehiclemodel` e `core_ownerships`.

---

## core_vehiclebrand

**Descrizione**: La tabella `core_vehiclebrand` contiene informazioni sui brand dei veicoli disponibili.

| Campo | Tipo | Descrizione                 |
|-------|------|-----------------------------|
| `name`| TEXT | Nome del brand (chiave primaria). |
| `icon`| TEXT | Icona rappresentativa del brand. |

---

## core_vehiclecode

**Descrizione**: La tabella `core_vehiclecode` contiene codici associati a specifici veicoli in diversi contesti.

| Campo        | Tipo   | Descrizione                                            |
|--------------|--------|--------------------------------------------------------|
| `id`         | SERIAL | Identificatore univoco del codice (chiave primaria).   |
| `code`       | TEXT   | Codice associato al veicolo.                           |
| `context`    | TEXT   | Contesto del codice (es. uso, accesso).                |
| `vehicle_id` | UUID   | Identificatore del veicolo, collegato a `core_vehicle`. |

**Vincoli**:
- Chiave esterna su `vehicle_id` per garantire l'integrità referenziale con `core_vehicle`.

---

## core_vehicledata

**Descrizione**: La tabella `core_vehicledata` contiene dati telemetrici e di stato per ogni veicolo, come posizione, batteria, e dati aggiuntivi.

| Campo       | Tipo        | Descrizione                                          |
|-------------|-------------|------------------------------------------------------|
| `id`        | SERIAL      | Identificatore univoco della riga (chiave primaria). |
| `vehicle`   | TEXT        | Identificatore del veicolo.                          |
| `lat`       | REAL        | Latitudine corrente del veicolo.                     |
| `lng`       | REAL        | Longitudine corrente del veicolo.                    |
| `battery`   | REAL        | Livello di carica della batteria del veicolo.        |
| `last_update`| TIMESTAMPTZ| Data e ora dell'ultimo aggiornamento.                |
| `data`      | TEXT        | Altri dati sul veicolo.                              |

---

## core_vehicleissue

**Descrizione**: La tabella `core_vehicleissue` registra i problemi segnalati dagli utenti per ciascun veicolo.

| Campo       | Tipo          | Descrizione                                       |
|-------------|---------------|---------------------------------------------------|
| `id`        | SERIAL        | Identificatore univoco del problema (chiave primaria). |
| `user`      | TEXT          | Utente che ha segnalato il problema.              |
| `vehicle`   | TEXT          | Veicolo associato al problema.                    |
| `signaled`  | TIMESTAMPTZ   | Data e ora della segnalazione.                    |
| `issue_type`| TEXT          | Tipo di problema segnalato.                       |
| `data`      | TEXT          | Descrizione del problema.                         |
| `signaling` | TEXT          | Dettagli della segnalazione.                      |
| `image`     | VARCHAR(200)  | URL dell'immagine relativa al problema.           |
| `ignore`    | BOOLEAN       | Indica se il problema è stato ignorato.           |

---

## core_vehiclelog

**Descrizione**: La tabella `core_vehiclelog` contiene log relativi ai veicoli, come ad esempio lo stato del blocco o altri dati rilevanti.

| Campo       | Tipo          | Descrizione                                      |
|-------------|---------------|--------------------------------------------------|
| `id`        | SERIAL        | Identificatore univoco del log (chiave primaria).|
| `vehicle`   | TEXT          | Identificatore del veicolo.                      |
| `logtype`   | TEXT          | Tipo di log (es. operazione, stato).             |
| `timestamp` | TIMESTAMPTZ   | Data e ora del log.                              |
| `data`      | TEXT          | Informazioni dettagliate del log.                |
| `lng`       | REAL          | Longitudine del veicolo al momento del log.      |
| `lat`       | REAL          | Latitudine del veicolo al momento del log.       |
| `lock_status`| BOOLEAN      | Stato di blocco del veicolo (bloccato/sbloccato).|

---

## core_vehiclemodel

**Descrizione**: La tabella `core_vehiclemodel` contiene informazioni sui diversi modelli di veicoli, comprese le caratteristiche tecniche e il brand associato.

| Campo                 | Tipo         | Descrizione                                       |
|-----------------------|--------------|---------------------------------------------------|
| `ident`               | UUID         | Identificatore univoco del modello (chiave primaria). |
| `name`                | TEXT         | Nome del modello del veicolo.                     |
| `image`               | TEXT         | URL dell'immagine del modello.                    |
| `model_name`          | TEXT         | Nome commerciale del modello.                     |
| `connection`          | TEXT         | Tipo di connessione supportata.                   |
| `protocol`            | TEXT         | Protocollo utilizzato dal veicolo.                |
| `model_brand_id`      | TEXT         | Identificatore del brand del veicolo. Collegato a `core_vehiclebrand`. |
| `vehicle_type_id`     | TEXT         | Tipo di veicolo. Collegato a `core_vehicletype`.  |
| `middleware`          | TEXT         | Middleware utilizzato per il modello.             |
| `requires_doc`        | TEXT         | Documenti richiesti per questo modello.           |
| `manual`              | VARCHAR(200) | URL del manuale del modello.                      |
| `hardware`            | VARCHAR(200) | Descrizione dell'hardware utilizzato.             |
| `cargo_volume_capacity`| VARCHAR(100)| Capacità di carico del veicolo.                   |
| `rider_capacity`      | VARCHAR(100) | Capacità di passeggeri.                           |
| `iot_id`              | UUID         | Identificatore dell'IoT associato.                |
| `description`         | TEXT         | Descrizione dettagliata del modello.              |

**Vincoli**:
- Chiavi esterne su `model_brand_id`, `vehicle_type_id` e `iot_id` per garantire l'integrità referenziale con `core_vehiclebrand`, `core_vehicletype` e `core_iotmodel`.

---

## core_vehiclemodelownership

**Descrizione**: La tabella `core_vehiclemodelownership` contiene informazioni sull'associazione di proprietari ai modelli di veicoli.

| Campo    | Tipo          | Descrizione                                  |
|----------|---------------|----------------------------------------------|
| `id`     | SERIAL        | Identificatore univoco dell'associazione (chiave primaria). |
| `owner`  | VARCHAR(200)  | Proprietario del modello.                    |
| `image`  | VARCHAR(200)  | URL dell'immagine relativa al modello.       |
| `model_id` | UUID        | Identificatore del modello del veicolo. Collegato a `core_vehiclemodel`. |

---

## core_vehiclerequest

**Descrizione**: La tabella `core_vehiclerequest` contiene richieste di localizzazione dei veicoli fatte dagli utenti.

| Campo      | Tipo          | Descrizione                                        |
|------------|---------------|----------------------------------------------------|
| `id`       |