
1. **Importazioni e Costanti**:
   - Importa `BaseCommand` e i modelli della app `core`, essenziali per il funzionamento dello script.
   - Definisce due variabili UUID (`edway` e `trendyrent`), che rappresentano probabilmente identificatori univoci di proprietà o aziende.

2. **Classe `Command`**:
   - Contiene la logica principale all'interno del metodo `handle`.

   - **Creazione di Dizionari per Identificativi**:
     - Crea due dizionari, `os` e `ps`:
       - `os`: mappa gli identificativi delle proprietà agli IMEI dei veicoli a loro associati.
       - `ps`: mappa gli IMEI dei veicoli all’identificativo del proprietario (owner_id).

   - **Elaborazione dei Viaggi degli Utenti**:
     - Seleziona gli utenti (`Trip.objects.distinct('user')`) che hanno registrato viaggi, creando una lista di utenti unici.
     - Per ciascun utente, lo script:
       - Estrae una lista unica di veicoli (`vv`) associati a quel particolare utente.
       - Ottiene una lista (`oo`) dei proprietari (owner_id) associati ai veicoli di quell’utente, utilizzando il dizionario `ps`.

     - **Conteggio dei Viaggi per Proprietario**:
       - Per ciascun proprietario nella lista `oo`, se non è `None`:
         - Recupera i veicoli (`vs`) associati a quel proprietario dal dizionario `os`.
         - Conta i viaggi totali dell'utente con quei veicoli specifici e aggiorna (o crea) una voce nel modello `UserAtt`, associando l’utente e il proprietario alla metrica “trips” con il conteggio dei viaggi.
         
3. **Aggiornamento di `UserAtt`**:
   - Lo script utilizza `get_or_create` per aggiornare o creare un record nel modello `UserAtt` per ciascun utente-proprietario con la chiave “trips” e salva il conteggio dei viaggi.

