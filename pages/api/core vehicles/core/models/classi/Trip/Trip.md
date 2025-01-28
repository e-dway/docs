### Trip
La classe `Trip` rappresenta un modello Django per gestire i viaggi effettuati dagli utenti con i veicoli. Include dettagli come utente, veicolo, durata, percorso, e stato. La classe utilizza hook per aggiornare lo stato e sincronizzare i dati con una cache esterna.

---

### Campi:

1. **`id`**:
   - **Tipo**: `UUIDField`
   - **Descrizione**: Identificativo univoco del viaggio, generato automaticamente tramite `uuid.uuid4`.
   - **Chiave primaria**: Sì.

2. **`owner`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo del proprietario (es., organizzazione o entità).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Indicizzato nel database (`db_index=True`).
     - Campo opzionale (`null=True, blank=True`).

3. **`user`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo dell'utente che effettua il viaggio.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Indicizzato nel database (`db_index=True`).

4. **`vehicle`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo del veicolo utilizzato per il viaggio.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Indicizzato nel database (`db_index=True`).

5. **`start`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Data e ora di inizio del viaggio.
   - **Opzioni**:
     - Imposta automaticamente il valore alla creazione (`auto_now_add=True`).
     - Indicizzato nel database (`db_index=True`).

6. **`end`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Data e ora di fine del viaggio.
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).
     - Indicizzato nel database (`db_index=True`).

7. **`duration`**:
   - **Tipo**: `IntegerField`
   - **Descrizione**: Durata del viaggio in minuti (calcolabile da `start` e `end`).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

8. **`status`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Stato attuale del viaggio (es., "created", "running", "stopped", "ended").
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Valore predefinito: `"created"`.
     - Indicizzato nel database (`db_index=True`).

9. **`total_value`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Valore totale del viaggio (es., costo in valuta).
   - **Opzioni**:
     - Valore predefinito: `0`.
     - Campo opzionale (`null=True, blank=True`).

10. **`point_start`**:
    - **Tipo**: `PointField`
    - **Descrizione**: Coordinate geografiche del punto di partenza.
    - **Opzioni**:
      - Campo opzionale (`null=True, blank=True`).

11. **`point_end`**:
    - **Tipo**: `PointField`
    - **Descrizione**: Coordinate geografiche del punto di fine viaggio.
    - **Opzioni**:
      - Campo opzionale (`null=True, blank=True`).

12. **`polygon_json`**:
    - **Tipo**: `JSONField`
    - **Descrizione**: Rappresentazione JSON del percorso effettuato (es., poligono o linea).

13. **`from_package`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Pacchetto utilizzato per pagare il viaggio.
    - **Opzioni**:
      - Lunghezza massima: 200 caratteri.
      - Campo opzionale (`null=True, blank=True`).

14. **`from_wallet`**:
    - **Tipo**: `FloatField`
    - **Descrizione**: Importo detratto dal portafoglio dell'utente per il viaggio.
    - **Opzioni**:
      - Valore predefinito: `0`.
      - Campo opzionale (`null=True, blank=True`).

15. **`preauth_id`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Identificativo di una pre-autorizzazione di pagamento.
    - **Opzioni**:
      - Lunghezza massima: 200 caratteri.
      - Campo opzionale (`null=True, blank=True`).

16. **`preauth_amount`**:
    - **Tipo**: `FloatField`
    - **Descrizione**: Importo della pre-autorizzazione.
    - **Opzioni**:
      - Campo opzionale (`null=True, blank=True`).

---

### Metodo speciale `__str__`:
- Restituisce una rappresentazione testuale del viaggio, includendo utente, veicolo, inizio e fine:
  ```python
  def __str__(self):
      return "{}:{} - {}-{}".format(self.user, self.vehicle, self.start, self.end)
  ```

---

### Hook (Ciclo di vita del modello):

1. **`do_after_create_caches`**:
   - **Evento**: Dopo la creazione del viaggio (`AFTER_CREATE`).
   - **Descrizione**:
     - Aggiorna la cache (`GEOCACHE`) impostando:
       - Stato del veicolo come "in trip".
       - Utente che utilizza il veicolo.

2. **`change_trip_status`**:
   - **Evento**: Dopo l'aggiornamento dello stato (`AFTER_UPDATE`).
   - **Descrizione**:
     - Aggiorna la cache con il nuovo stato del viaggio.

3. **Stati specifici**:
   - **`set_to_running`**:
     - Stato: Cambiato a "running".
     - Azione: Avvia un thread per inviare un comando "unlock" al veicolo.
   - **`set_to_stopped`**:
     - Stato: Cambiato a "stopped".
     - Azione: Avvia un thread per inviare un comando "lock" al veicolo.
   - **`set_to_ended`**:
     - Stato: Cambiato a "ended".
     - Azione: Avvia un thread per inviare un comando "lock" al veicolo.
   - **`set_to_paused`**:
     - Stato: Cambiato a "paused".
     - Azione: Avvia un thread per inviare un comando "lock" al veicolo.

4. **`remove_vehicle_from_cache`**:
   - **Evento**: Dopo l'aggiornamento del campo `end` (`AFTER_UPDATE`).
   - **Descrizione**:
     - Rimuove lo stato del viaggio dalla cache.
     - Imposta lo stato del veicolo come "online".

---

### Meta:
- **Indici**:
  - Campi indicizzati:
    - `['owner', 'user']`
    - `['owner', 'vehicle']`

