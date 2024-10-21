---
sidebar_position: 3
---

# trip

## core_trip

**Descrizione**: La tabella `core_trip` memorizza informazioni sui viaggi effettuati dagli utenti. Ogni viaggio include dettagli sul veicolo utilizzato, i tempi di inizio e fine, il percorso e altre informazioni finanziarie.

| Campo            | Tipo              | Descrizione                                                          |
|------------------|-------------------|----------------------------------------------------------------------|
| `id`             | UUID              | Identificatore univoco del viaggio (chiave primaria).                |
| `user`           | TEXT              | Identificatore dell'utente che ha effettuato il viaggio.             |
| `vehicle`        | TEXT              | Identificatore del veicolo utilizzato.                               |
| `start`          | TIMESTAMPTZ       | Data e ora di inizio del viaggio.                                    |
| `end`            | TIMESTAMPTZ       | Data e ora di fine del viaggio.                                      |
| `status`         | TEXT              | Stato del viaggio (es. attivo, completato, cancellato).              |
| `duration`       | BIGINT            | Durata del viaggio in secondi.                                       |
| `point_end`      | UNKNOWN           | Posizione finale del viaggio (tipo non definito).                    |
| `point_start`    | UNKNOWN           | Posizione iniziale del viaggio (tipo non definito).                  |
| `polygon_json`   | JSONB             | Percorso del viaggio rappresentato come poligono in formato JSON.    |
| `preauth_id`     | VARCHAR(200)      | Identificatore della pre-autorizzazione.                             |
| `owner`          | VARCHAR(200)      | Proprietario associato al viaggio.                                   |
| `preauth_amount` | DOUBLE PRECISION  | Importo della pre-autorizzazione.                                    |
| `from_package`   | VARCHAR(200)      | Pacchetto utilizzato per il viaggio, se applicabile.                 |
| `from_wallet`    | DOUBLE PRECISION  | Importo pagato con il portafoglio dell'utente.                       |
| `total_value`    | DOUBLE PRECISION  | Valore totale del viaggio.                                           |

**Indici e vincoli**:
- Numerosi indici su campi come `user`, `vehicle`, `status`, e altri per ottimizzare le ricerche.

---

## core_tripevent

**Descrizione**: La tabella `core_tripevent` tiene traccia degli eventi significativi che si verificano durante un viaggio, come ad esempio pause, riprese del viaggio o incidenti.

| Campo         | Tipo        | Descrizione                                                            |
|---------------|-------------|------------------------------------------------------------------------|
| `id`          | TEXT        | Identificatore univoco dell'evento (chiave primaria).                  |
| `event_type`  | TEXT        | Tipo di evento (es. pausa, ripartenza).                                |
| `timestamp`   | TIMESTAMPTZ | Data e ora dell'evento.                                                |
| `trip_id`     | UUID        | Identificatore del viaggio associato a questo evento (`core_trip`).    |
| `description` | TEXT        | Descrizione dell'evento.                                               |

**Vincoli**:
- Chiave esterna su `trip_id` per garantire l'integrità con la tabella `core_trip`.

---

## core_trippicture

**Descrizione**: La tabella `core_trippicture` memorizza le immagini scattate durante un viaggio. Queste immagini possono essere utilizzate per documentare il veicolo, il luogo o le condizioni del viaggio.

| Campo     | Tipo          | Descrizione                                           |
|-----------|---------------|-------------------------------------------------------|
| `id`      | UUID          | Identificatore univoco dell'immagine (chiave primaria).|
| `trip`    | VARCHAR(200)  | Identificatore del viaggio associato.                  |
| `url`     | VARCHAR(200)  | URL dell'immagine caricata.                            |
| `user`    | VARCHAR(200)  | Identificatore dell'utente che ha scattato l'immagine. |
| `created` | TIMESTAMPTZ   | Data e ora in cui l'immagine è stata scattata.         |
| `vehicle` | VARCHAR(200)  | Identificatore del veicolo presente nell'immagine.     |

**Indici e vincoli**:
- Indici su `user`, `trip`, e `vehicle` per ottimizzare le ricerche.

---

## core_tripvalue

**Descrizione**: La tabella `core_tripvalue` memorizza i valori economici associati a un viaggio, come ad esempio i costi aggiuntivi o rimborsi.

| Campo        | Tipo        | Descrizione                                        |
|--------------|-------------|----------------------------------------------------|
| `id`         | SERIAL      | Identificatore univoco del valore (chiave primaria).|
| `trip`       | TEXT        | Identificatore del viaggio associato.              |
| `amount`     | REAL        | Importo associato al viaggio.                      |
| `description`| TEXT        | Descrizione dell'importo o del costo.              |
| `date`       | TIMESTAMPTZ | Data e ora in cui il valore è stato registrato.    |

**Vincoli**:
- Vincolo di unicità su `trip` per garantire che ogni viaggio abbia una sola riga associata in `core_tripvalue`.

---

