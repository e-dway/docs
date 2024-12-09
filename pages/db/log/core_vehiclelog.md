---
sidebar_position: 1
---

# core_vehiclelog

La tabella `core_vehiclelog`, è progettata per registrare log relativi ai veicoli.


### **Struttura della Tabella**
1. **`id`** (`SERIAL`, `PRIMARY KEY`):
   - È la chiave primaria della tabella, un identificativo univoco incrementale per ogni riga.

2. **`vehicle`** (`VARCHAR(200)`, `NOT NULL`):
   - Contiene l'identificativo o il nome del veicolo a cui si riferisce il log.
   - Può essere una targa, un ID o un altro identificatore.

3. **`logtype`** (`VARCHAR(200)`, `NOT NULL`):
   - Specifica il tipo di log.
   - Potrebbe rappresentare categorie come "info", "error", "warning", o altre personalizzazioni.

4. **`timestamp`** (`TIMESTAMPTZ`, `NOT NULL`):
   - Memorizza la data e l'ora (con fuso orario) in cui è stato registrato il log.
   - È utile per analisi temporali e ordinamento cronologico.

5. **`data`** (`JSONB`, `NOT NULL`):
   - Contiene dati aggiuntivi relativi al log, strutturati in formato JSON.
   - È flessibile e può contenere informazioni variabili a seconda del tipo di log (ad esempio, dettagli di errore, metriche, ecc.).

6. **`lng`** (`DOUBLE PRECISION`, `NULL`):
   - Memorizza la longitudine della posizione del veicolo al momento del log.
   - Campo opzionale.

7. **`lat`** (`DOUBLE PRECISION`, `NULL`):
   - Memorizza la latitudine della posizione del veicolo al momento del log.
   - Campo opzionale.

8. **`lock_status`** (`BOOLEAN`, `NULL`):
   - Indica lo stato del blocco del veicolo (ad esempio, `TRUE` per bloccato, `FALSE` per sbloccato).
   - Campo opzionale.

---

### **Indici**
1. **`core_vehiclelog_timestamp_a55a73b0`**:
   - Indicizzato sul campo `timestamp`.
   - Ottimizza le query basate sulla data e l'ora, ad esempio per analisi temporali o filtraggio di log entro determinati periodi.

2. **`core_vehiclelog_vehicle`**:
   - Indicizzato sul campo `vehicle`.
   - Accelera le query che cercano log di uno specifico veicolo.

---
