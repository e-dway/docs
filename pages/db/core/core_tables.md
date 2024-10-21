---
sidebar_position: 1
---

# core_ Tables

## core_booking

    ### Descrizione
    Gestisce le prenotazioni fatte dagli utenti.
    ### Campi
        `id`: Identificatore univoco della prenotazione (chiave primaria).\
        `user`: Utente che ha effettuato la prenotazione.\
        `vehicle`: Veicolo prenotato.\
        `booking_moment`: Momento di inizio della prenotazione.\
        `booking_until`: Momento di fine della prenotazione.\
        `status`: Stato della prenotazione (es. attiva, completata, cancellata).\
        `owner`: Proprietario del sistema o dell'entità legata alla prenotazione.

## core_fencing

    ###  Descrizione
    Collega aree geografiche (probabilmente per geofencing) con veicoli.
    ### Campi
        `area`: Definisce l'area geografica (es. tramite poligoni o regioni predefinite).\
        `vehicle`: Identificatore del veicolo (chiave primaria).


## core_ownerships

    ###  Descrizione
    Traccia le informazioni sui proprietari delle flotte o dei veicoli.
    ###  Campi
        `ident`: Identificatore univoco del proprietario (UUID, chiave primaria).\
        `owner_name`: Nome del proprietario.\
        `fleet_name`: Nome della flotta associata al proprietario.\
        `contact_email`: Email di contatto del proprietario.\
        `contact_phone`: Numero di telefono del proprietario.\

## core_vehicles

    ###  Descrizione
    Contiene informazioni sui singoli veicoli gestiti dal sistema.
    ###  Campi
        `id`: Identificatore univoco del veicolo.\
        `fleet_id`: Collegamento alla flotta di appartenenza.\
        `license_plate`: Targa del veicolo.\
        `vin`: Numero di identificazione del veicolo (VIN).\
        `make: Marca del veicolo.\
        `model`: Modello del veicolo.\
        `year`: Anno di fabbricazione.\
        `fuel_type`: Tipo di carburante utilizzato.\
        `status`: Stato attuale del veicolo (disponibile, in manutenzione, ecc.).

## core_logs

    ###  Descrizione
    Registra le operazioni e gli eventi che accadono nel sistema.
    ###  Campi
        `id`: Identificatore univoco del log.\
        `event_type`: Tipo di evento registrato (es. login, prenotazione).\
        `description`: Descrizione dettagliata dell'evento.\
        `timestamp`: Data e ora in cui l'evento è stato registrato.\
        `user_id`: Collegamento all'utente che ha generato l'evento (se applicabile).



## core_iotmodel
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


## core_product

**Descrizione**: La tabella `core_product` contiene le informazioni sui prodotti disponibili, come modelli di veicoli o piani di tariffazione, con varie caratteristiche e opzioni di attivazione.

| Campo                  | Tipo            | Descrizione                                                                                   |
|------------------------|-----------------|-----------------------------------------------------------------------------------------------|
| `id`                   | UUID            | Identificatore univoco del prodotto (chiave primaria).                                        |
| `name`                 | TEXT            | Nome del prodotto, usato per descrivere il veicolo o il piano di tariffazione.                |
| `override_unlock_price`| BOOLEAN         | Indica se il prezzo di sblocco è sovrascrivibile.                                             |
| `unlock_price`         | REAL            | Prezzo per lo sblocco del veicolo o del servizio.                                             |
| `seconds`              | BIGINT          | Numero di secondi associati al prodotto (es. durata del servizio).                            |
| `in_timeframe`         | BIGINT          | Durata in una certa finestra temporale.                                                       |
| `from_activation`      | BOOLEAN         | Indica se il periodo di validità parte dall'attivazione.                                      |
| `automatic_activation` | BOOLEAN         | Se l'attivazione è automatica.                                                                |
| `unlock_limit`         | BIGINT          | Limite di sblocco.                                                                            |
| `currency`             | TEXT            | Valuta utilizzata per il prezzo (es. EUR, USD).                                               |
| `price`                | REAL            | Prezzo base del prodotto.                                                                     |
| `active`               | BOOLEAN         | Indica se il prodotto è attivo.                                                               |
| `owner_id`             | UUID            | Identificatore del proprietario, collegato a `core_ownerships`.                               |
| `image`                | TEXT            | Percorso o URL dell'immagine rappresentativa del prodotto.                                    |
| `vehicle_type_id`      | TEXT            | Tipo di veicolo associato al prodotto, collegato a `core_vehicletype`.                        |
| `vehicle_model_id`     | UUID            | Modello del veicolo associato al prodotto, collegato a `core_vehiclemodel`.                   |
| `weight`               | BIGINT          | Peso del prodotto.                                                                            |
| `auto_renew`           | BOOLEAN         | Indica se il prodotto si rinnova automaticamente.                                             |
| `price_per_minute`     | DOUBLE PRECISION| Prezzo per minuto del servizio.                                                               |
| `fleet`                | VARCHAR(200)    | Flotta di veicoli a cui il prodotto è associato.                                              |
| `meta`                 | JSONB           | Meta informazioni aggiuntive sul prodotto.                                                    |
| `deleted`              | TIMESTAMPTZ     | Data e ora di eliminazione del prodotto.                                                      |
| `can_activate`         | BOOLEAN         | Indica se il prodotto può essere attivato.                                                    |
| `can_pause`            | BOOLEAN         | Indica se il prodotto può essere messo in pausa.                                              |
| `visible`              | BOOLEAN         | Indica se il prodotto è visibile agli utenti.                                                 |
| `product_type`         | VARCHAR(200)    | Tipo di prodotto (es. veicolo, piano).                                                        |
| `categories`           | JSONB           | Categorie a cui appartiene il prodotto.                                                       |
| `subcategories`        | JSONB           | Sottocategorie a cui appartiene il prodotto.                                                  |

**Indici e vincoli**:
- Chiavi esterne su `owner_id`, `vehicle_model_id`, e `vehicle_type_id` per collegamenti con le tabelle `core_ownerships`, `core_vehiclemodel`, e `core_vehicletype`.

---

## core_productdescription

**Descrizione**: La tabella `core_productdescription` contiene le descrizioni dei prodotti, in diverse lingue.

| Campo        | Tipo   | Descrizione                                               |
|--------------|--------|-----------------------------------------------------------|
| `id`         | SERIAL | Identificatore univoco della descrizione (chiave primaria).|
| `language`   | TEXT   | Lingua della descrizione (es. IT, EN).                    |
| `description`| TEXT   | Descrizione del prodotto.                                 |
| `product_id` | UUID   | Identificatore del prodotto, collegato a `core_product`.  |

**Vincoli**:
- Chiave esterna su `product_id` per garantire l'integrità con `core_product`.

---

## core_regulations

**Descrizione**: La tabella `core_regulations` contiene informazioni sulle regolamentazioni applicabili a determinate aree, come i limiti di velocità.

| Campo       | Tipo   | Descrizione                                           |
|-------------|--------|-------------------------------------------------------|
| `id`        | TEXT   | Identificatore univoco della regolamentazione.        |
| `name`      | TEXT   | Nome della regolamentazione.                          |
| `area`      | TEXT   | Area geografica a cui la regolamentazione si applica. |
| `speed_limit`| BIGINT | Limite di velocità per l'area specificata.           |

---

## core_report

**Descrizione**: La tabella `core_report` contiene informazioni sui report generati dal sistema, inclusi i parametri e la pianificazione.

| Campo           | Tipo          | Descrizione                                |
|-----------------|---------------|--------------------------------------------|
| `id`            | SERIAL        | Identificatore univoco del report.         |
| `report_type`   | VARCHAR(200)  | Tipo di report.                            |
| `report_params` | VARCHAR(500)  | Parametri del report.                      |
| `crontab`       | VARCHAR(100)  | Pianificazione del report (es. cron job).  |
| `target`        | VARCHAR(200)  | Destinatario o scopo del report.           |

---

## core_settings

**Descrizione**: La tabella `core_settings` contiene le impostazioni del sistema, sia pubbliche che private.

| Campo       | Tipo    | Descrizione                                      |
|-------------|---------|--------------------------------------------------|
| `id`        | SERIAL  | Identificatore univoco dell'impostazione.        |
| `key`       | TEXT    | Chiave dell'impostazione.                        |
| `value`     | TEXT    | Valore dell'impostazione.                        |
| `owner_id`  | UUID    | Identificatore del proprietario, collegato a `core_ownerships`. |
| `private`   | BOOLEAN | Indica se l'impostazione è privata.              |
| `superuser` | BOOLEAN | Indica se l'impostazione è accessibile solo ai superuser. |

---

## core_strings

**Descrizione**: La tabella `core_strings` contiene traduzioni di stringhe per il sistema in varie lingue.

| Campo        | Tipo   | Descrizione                                    |
|--------------|--------|-----------------------------------------------|
| `id`         | SERIAL | Identificatore univoco della stringa.         |
| `code`       | TEXT   | Codice della stringa da tradurre.             |
| `language`   | TEXT   | Lingua della traduzione.                      |
| `translation`| TEXT   | Traduzione della stringa.                     |
| `owner_id`   | UUID   | Identificatore del proprietario.              |

---

## core_stripelog

**Descrizione**: La tabella `core_stripelog` tiene traccia delle operazioni e dei log relativi ai pagamenti effettuati tramite Stripe.

| Campo      | Tipo         | Descrizione                                    |
|------------|--------------|-----------------------------------------------|
| `id`       | SERIAL       | Identificatore univoco del log.               |
| `data`     | TEXT         | Dati relativi alla transazione.               |
| `date`     | TIMESTAMPTZ  | Data e ora del log.                           |
| `obj`      | TEXT         | Oggetto della transazione.                    |
| `stripe_id`| TEXT         | Identificatore della transazione Stripe.      |
| `owner`    | VARCHAR(200) | Proprietario associato al log.                |

---

## core_telegramgroup

**Descrizione**: La tabella `core_telegramgroup` contiene informazioni sui gruppi Telegram associati al sistema per gestire notifiche e comunicazioni.

| Campo             | Tipo         | Descrizione                                     |
|-------------------|--------------|------------------------------------------------|
| `id`              | SERIAL       | Identificatore univoco del gruppo Telegram.     |
| `group`           | TEXT         | Nome del gruppo Telegram.                      |
| `gtype`           | TEXT         | Tipo di gruppo (es. pubblico, privato).        |
| `ident`           | TEXT         | Identificatore univoco del gruppo.             |
| `silent`          | BOOLEAN      | Indica se le notifiche sono silenziate.        |
| `alert`           | BOOLEAN      | Indica se sono abilitati gli avvisi.           |
| `channel_name`    | TEXT         | Nome del canale associato.                     |
| `channel_url`     | TEXT         | URL del canale Telegram.                       |
| `acquire_package` | BOOLEAN      | Indica se acquisire informazioni sul pacchetto.|
| `trip_end`        | BOOLEAN      | Notifica alla fine del viaggio.                |
| `trip_start`      | BOOLEAN      | Notifica all'inizio del viaggio.               |
| `channel_type`    | VARCHAR(200) | Tipo di canale (es. broadcast).                |
| `active`          | BOOLEAN      | Indica se il gruppo è attivo.                  |
| `battery`         | BOOLEAN      | Notifiche relative al livello di batteria.     |
| `otp`             | BOOLEAN      | Notifiche relative al codice OTP.              |
| `auto_user_blocks`| BOOLEAN      | Gestione automatica dei blocchi utenti.        |
| `user_issues`     | BOOLEAN      | Notifica di problemi relativi agli utenti.     |
| `crash`           | BOOLEAN      | Notifiche relative a incidenti.                |
| `events`          | TEXT         | Eventi gestiti dal gruppo.                     |

Ecco la descrizione delle tabelle `core_walletproduct` e `spatial_ref_sys` in formato Markdown, basata sul dump SQL che hai fornito:

## core_walletproduct

**Descrizione**: La tabella `core_walletproduct` contiene informazioni sui prodotti associati ai portafogli digitali (wallet). Questi prodotti possono includere diverse opzioni di ricarica, bonus, e dettagli specifici come le categorie di appartenenza.

| Campo              | Tipo         | Descrizione                                                    |
|--------------------|--------------|----------------------------------------------------------------|
| `id`               | UUID         | Identificatore univoco del prodotto (chiave primaria).         |
| `name`             | TEXT         | Nome del prodotto del portafoglio.                             |
| `price`            | REAL         | Prezzo del prodotto.                                           |
| `value`            | REAL         | Valore associato al prodotto (es. credito disponibile).        |
| `owner_id`         | UUID         | Identificatore del proprietario. Collegato a `core_ownerships`.|
| `currency`         | TEXT         | Valuta del prezzo del prodotto (es. EUR, USD).                 |
| `active`           | BOOLEAN      | Indica se il prodotto è attivo.                                |
| `auto_renew`       | BOOLEAN      | Indica se il prodotto è soggetto a rinnovo automatico.         |
| `image`            | TEXT         | URL o percorso dell'immagine rappresentativa del prodotto.     |
| `times`            | BIGINT       | Numero di utilizzi previsti per il prodotto.                   |
| `bonus`            | REAL         | Bonus aggiuntivo associato all'acquisto del prodotto.          |
| `times_renew_id`   | UUID         | Identificatore del rinnovo del prodotto, riferito a `core_walletproduct`. |
| `fleet`            | VARCHAR(200) | Flotta a cui il prodotto è associato, se applicabile.          |
| `meta`             | JSONB        | Informazioni meta aggiuntive sul prodotto.                     |
| `deleted`          | TIMESTAMPTZ  | Data e ora in cui il prodotto è stato eliminato, se applicabile.|
| `visible`          | BOOLEAN      | Indica se il prodotto è visibile agli utenti.                  |
| `categories`       | JSONB        | Categorie di appartenenza del prodotto.                        |
| `subcategories`    | JSONB        | Sottocategorie di appartenenza del prodotto.                   |

**Indici e vincoli**:
- **Indici**: `owner_id` e `times_renew_id` per ottimizzare le ricerche basate su questi campi.
- **Chiavi esterne**:
  - `owner_id` fa riferimento alla tabella `core_ownerships` (`ident`) per garantire l'integrità referenziale.
  - `times_renew_id` fa riferimento alla tabella `core_walletproduct` (`id`), indicando un possibile rinnovo associato a un altro prodotto del portafoglio.

---

## spatial_ref_sys

**Descrizione**: La tabella `spatial_ref_sys` contiene informazioni sui sistemi di riferimento spaziali (SRS). Viene utilizzata per gestire la proiezione di dati spaziali e fornire informazioni su diverse configurazioni di coordinate.

| Campo       | Tipo          | Descrizione                                                    |
|-------------|---------------|----------------------------------------------------------------|
| `srid`      | INTEGER       | Identificatore univoco del sistema di riferimento spaziale (chiave primaria). |
| `auth_name` | VARCHAR(256)  | Nome dell'autorità che definisce il sistema di riferimento (es. EPSG). |
| `auth_srid` | INTEGER       | Identificatore del sistema di riferimento secondo l'autorità.  |
| `srtext`    | VARCHAR(2048) | Testo descrittivo del sistema di riferimento.                  |
| `proj4text` | VARCHAR(2048) | Parametri Proj4 per descrivere il sistema di riferimento spaziale. |

**Vincoli**:
- **Vincolo di controllo**: Il campo `srid` deve essere maggiore di 0 e minore o uguale a 998999 per garantire che gli identificatori siano validi e rispettino un certo range.

