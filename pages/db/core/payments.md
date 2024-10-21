---
sidebar_position: 4
---

# payment Tables


## core_payment

   ### Descrizione
   Traccia e gestisce i pagamenti effettuati dagli utenti per i servizi forniti, come l'uso di veicoli o altri servizi offerti dalla piattaforma. Questa tabella registra i dettagli di ogni transazione finanziaria.
   ### Campi
     - `id`: Identificatore univoco del pagamento.
     - `user_id`: Identificatore dell'utente che ha effettuato il pagamento. Collega l'utente che ha effettuato il pagamento alla tabella `core_users`.
     - `amount`: Importo totale del pagamento effettuato.
     - `currency`: Valuta in cui è stato effettuato il pagamento (es. EUR, USD).
     - `payment_method`: Metodo utilizzato per il pagamento (es. carta di credito, PayPal, bonifico).
     - `status`: Stato attuale del pagamento (es. completato, in sospeso, fallito).
     - `transaction_id`: Identificatore della transazione, fornito dal fornitore del pagamento (es. banca o gateway di pagamento).
     - `payment_date`: Data e ora in cui è stato effettuato il pagamento.
     - `description`: Descrizione opzionale del pagamento (ad esempio, il motivo del pagamento o dettagli aggiuntivi sulla transazione).

Questa tabella consente di registrare e monitorare tutti i pagamenti effettuati dagli utenti, mantenendo traccia del metodo di pagamento utilizzato, dell'importo e dello stato di ogni transazione.

## core_paymentgroup

**Descrizione**: La tabella `core_paymentgroup` memorizza informazioni sui gruppi di pagamento, inclusi gli eventuali sconti o rimborsi associati. Questa tabella può essere utilizzata per definire diversi gruppi di pagamento con regole specifiche.

| Campo            | Tipo    | Descrizione                                                             |
|------------------|---------|-------------------------------------------------------------------------|
| `id`             | TEXT    | Identificatore univoco del gruppo di pagamento (chiave primaria).       |
| `name`           | TEXT    | Nome del gruppo di pagamento, usato per descriverne lo scopo o il tipo. |
| `rebate_unlock`  | BIGINT  | Percentuale o importo di sconto associato allo sblocco del pagamento.   |
| `rebate_book`    | BIGINT  | Percentuale o importo di sconto per la prenotazione.                    |
| `rebate_usage`   | BIGINT  | Percentuale o importo di sconto per l'utilizzo del servizio.            |

Questa tabella è utile per gestire differenti condizioni di pagamento in base al gruppo di utenti o alle modalità di prenotazione e utilizzo del servizio. Può essere utilizzata per ottimizzare gli incentivi e le strategie di pricing.
   ### Descrizione 
   Gestisce i modelli di dispositivi IoT (Internet of Things) utilizzati per monitorare e controllare i veicoli o altre risorse in una flotta. Ogni modello IoT potrebbe avere caratteristiche specifiche come sensori, connettività e funzionalità operative che vengono utilizzate per raccogliere dati o controllare i veicoli a distanza.
   ### Campi
     - `id`: Identificatore univoco del modello di dispositivo IoT.
     - `name`: Nome del modello IoT (ad esempio, il nome del dispositivo o della marca).
     - `manufacturer`: Nome del produttore del dispositivo IoT.
     - `hardware_version`: Versione hardware del dispositivo IoT.
     - `firmware_version`: Versione del firmware installato sul dispositivo IoT.
     - `supported_features`: Lista o descrizione delle funzionalità supportate dal dispositivo IoT (ad esempio, GPS, monitoraggio del carburante, controllo remoto del veicolo).
     - `description`: Descrizione del modello IoT, che spiega il suo utilizzo, le sue capacità o altre informazioni utili.

Questa tabella consente di gestire e descrivere i vari modelli di dispositivi IoT utilizzati nella flotta, fornendo informazioni sulle capacità tecniche e operative di ciascun modello per aiutare nella gestione e nel monitoraggio dei veicoli o delle risorse associate.

## core_paymentmodel

**Descrizione**: La tabella `core_paymentmodel` gestisce i vari modelli di pagamento disponibili per il sistema. Ogni modello può avere caratteristiche specifiche come tariffe di sblocco, costi per unità di tempo e modalità di addebito, che consentono di definire diverse opzioni di pricing per i servizi.

| Campo          | Tipo    | Descrizione                                                                                      |
|----------------|---------|--------------------------------------------------------------------------------------------------|
| `id`           | TEXT    | Identificatore univoco del modello di pagamento (chiave primaria).                               |
| `is_default`   | BOOLEAN | Indica se il modello di pagamento è quello predefinito nel sistema (`TRUE` o `FALSE`).           |
| `name`         | TEXT    | Nome del modello di pagamento, usato per identificarlo o descriverlo.                            |
| `unlock_fee`   | REAL    | Tariffa associata allo sblocco di un servizio o veicolo.                                         |
| `unlock_amount`| BIGINT  | Quantità richiesta per lo sblocco.                                                               |
| `price`        | REAL    | Prezzo base per l'utilizzo del servizio, solitamente calcolato per unità di tempo.               |
| `autostart`    | BOOLEAN | Indica se il modello di pagamento prevede l'avvio automatico (`TRUE` o `FALSE`).                 |
| `charge_mode`  | TEXT    | Modalità di addebito (es. "per minuto", "per ora").                                              |
| `owner_id`     | UUID    | Identificatore del proprietario a cui è associato questo modello di pagamento (`core_ownerships`).|
| `time_unit`    | BIGINT  | Unità di tempo utilizzata per calcolare il prezzo (es. minuti, ore).                             |
| `active`       | BOOLEAN | Indica se il modello di pagamento è attivo (`TRUE` o `FALSE`).                                   |

**Indici e vincoli**:
- **Indice**: `idx_19908_core_paymentmodel_owner_id_d3aafa21` per il campo `owner_id` per ottimizzare le ricerche.
- **Vincolo di chiave esterna**: `owner_id` fa riferimento alla tabella `core_ownerships`, campo `ident`, per garantire l'integrità referenziale.

Questa tabella permette di gestire vari modelli di pagamento, consentendo di differenziare le modalità e i costi di utilizzo dei servizi offerti, adattandosi a diverse esigenze dei clienti o strategie aziendali.

## core_paymentmodeldetail

**Descrizione**: La tabella `core_paymentmodeldetail` contiene dettagli aggiuntivi relativi ai vari modelli di pagamento definiti nella tabella `core_paymentmodel`. Ogni riga rappresenta un dettaglio specifico che arricchisce la definizione del modello di pagamento principale.

| Campo         | Tipo   | Descrizione                                                                                       |
|---------------|--------|---------------------------------------------------------------------------------------------------|
| `id`          | SERIAL | Identificatore univoco per ogni dettaglio del modello di pagamento (chiave primaria).             |
| `model_id`    | TEXT   | Identificatore del modello di pagamento a cui questo dettaglio è associato. Collegato a `core_paymentmodel`. |

**Indici e vincoli**:
- **Indice**: `idx_19829_core_paymentmodeldetail_model_id_c478ce97` sul campo `model_id` per ottimizzare le ricerche basate sull'identificatore del modello.
- **Vincolo di chiave esterna**: Il campo `model_id` fa riferimento alla tabella `core_paymentmodel` (`id`), per garantire l'integrità referenziale tra i dettagli e il modello di pagamento principale.

Questa tabella viene utilizzata per gestire informazioni aggiuntive relative ai modelli di pagamento, consentendo di estendere le specifiche e i parametri dei modelli definiti nella tabella principale `core_paymentmodel`.

## core_paymentmodel_for_fleet

**Descrizione**: La tabella `core_paymentmodel_for_fleet` associa i modelli di pagamento alle flotte di veicoli. Ogni associazione consente di specificare un modello di pagamento per una determinata flotta, permettendo flessibilità nella gestione delle tariffe per flotte diverse.

| Campo              | Tipo   | Descrizione                                                                                       |
|--------------------|--------|---------------------------------------------------------------------------------------------------|
| `id`               | SERIAL | Identificatore univoco dell'associazione (chiave primaria).                                       |
| `paymentmodel_id`  | TEXT   | Identificatore del modello di pagamento associato, collegato alla tabella `core_paymentmodel`.    |
| `fleet_id`         | UUID   | Identificatore della flotta, collegato alla tabella `core_fleet`.                                 |

**Indici e vincoli**:
- **Indici**:
  - `idx_19820_core_paymentmodel_for_fleet_fleet_id_dcba21ee` sul campo `fleet_id`.
  - `idx_19820_core_paymentmodel_for_fleet_paymentmodel_id_4280bf93` sul campo `paymentmodel_id`.
- **Vincolo di unicità**:
  - `idx_19820_core_paymentmodel_for_fleet_paymentmodel_id_fleet_id_` assicura che la combinazione `paymentmodel_id` e `fleet_id` sia unica.
- **Vincoli di chiave esterna**:
  - `paymentmodel_id` fa riferimento alla tabella `core_paymentmodel` (`id`).
  - `fleet_id` fa riferimento alla tabella `core_fleet` (`id`).

Questa tabella permette di associare un modello di pagamento specifico a una flotta di veicoli, consentendo una gestione più precisa delle tariffe per diverse flotte.

---

## core_paymentmodel_for_type

**Descrizione**: La tabella `core_paymentmodel_for_type` associa i modelli di pagamento ai tipi di veicoli. Questa associazione consente di specificare un modello di pagamento per ogni tipo di veicolo, offrendo flessibilità nella gestione delle tariffe per veicoli diversi.

| Campo              | Tipo   | Descrizione                                                                                           |
|--------------------|--------|-------------------------------------------------------------------------------------------------------|
| `id`               | SERIAL | Identificatore univoco dell'associazione (chiave primaria).                                           |
| `paymentmodel_id`  | TEXT   | Identificatore del modello di pagamento associato, collegato alla tabella `core_paymentmodel`.        |
| `vehicletype_id`   | TEXT   | Identificatore del tipo di veicolo, collegato alla tabella `core_vehicletype`.                        |

**Indici e vincoli**:
- **Indici**:
  - `idx_19853_core_paymentmodel_for_type_paymentmodel_id_e0b77206` sul campo `paymentmodel_id`.
  - `idx_19853_core_paymentmodel_for_type_vehicletype_id_f8412410` sul campo `vehicletype_id`.
- **Vincolo di unicità**:
  - `idx_19853_core_paymentmodel_for_type_paymentmodel_id_vehicletyp` assicura che la combinazione `paymentmodel_id` e `vehicletype_id` sia unica.
- **Vincoli di chiave esterna**:
  - `paymentmodel_id` fa riferimento alla tabella `core_paymentmodel` (`id`).
  - `vehicletype_id` fa riferimento alla tabella `core_vehicletype` (`name`).

Questa tabella permette di associare i modelli di pagamento ai tipi di veicoli, consentendo di gestire tariffe diverse in base alla categoria del veicolo.