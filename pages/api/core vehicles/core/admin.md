# admin.py


1. **Importazioni principali**:
   - Importa il modulo `admin` da `django.contrib`, necessario per registrare i modelli nel pannello di amministrazione.
   - Importa tutti i modelli definiti nel modulo `core.models`.

2. **Registrazione di modelli nel pannello di amministrazione**:
   - Viene configurata l'interfaccia di amministrazione per i modelli principali, utilizzando classi personalizzate per migliorare la visualizzazione e la gestione.

3. **Configurazioni specifiche per i modelli**:
   - **`VehicleLogAdmin`**:
     - Visualizza colonne specifiche come `vehicle`, `logtype`, e `timestamp`.
     - Consente la ricerca per il campo `vehicle`.
     - Filtra i log per il campo `vehicle`.

   - **`VehicleAdmin`**:
     - Visualizza dettagli come `ident`, `imei`, `model`, e `owner`.
     - Consente la ricerca per il campo `imei`.
     - Filtra i dati per `model` e `owner`.

   - **`FleetAdmin`**:
     - Gestisce la ricerca per il nome della flotta.
     - Filtra i record in base allo stato `active`.
     - Visualizza campi come `name`, `parent`, `freefloating`, `require_activation`, `exclusive`, e `payment_mode`.

   - **`FleetAreaAdmin`**:
     - Permette la ricerca per nome.
     - Visualizza colonne come `fleet` e `name`.
     - Filtra i dati per `fleet`.

   - **`FleetVehicleAdmin`**:
     - Visualizza colonne `fleet` e `vehicle`.
     - Utilizza un campo di completamento automatico (probabilmente per selezionare veicoli legati alla flotta).

4. **Meta-classi**:
   Ogni classe di amministrazione include una classe interna `Meta`, che specifica il modello associato.

