### Booking
La classe `Booking` rappresenta un modello Django per gestire prenotazioni effettuate dagli utenti per specifici veicoli. Include dettagli come utente, veicolo, durata della prenotazione e stato attuale. Utilizza hook per aggiornare automaticamente lo stato nella cache.

---

### Campi:

1. **`id`**:
   - **Tipo**: `UUIDField`
   - **Descrizione**: Identificativo univoco della prenotazione, generato automaticamente tramite `uuid.uuid4`.
   - **Chiave primaria**: Sì.

2. **`user`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo dell'utente che effettua la prenotazione.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

3. **`owner`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo del proprietario (es., organizzazione o entità) della prenotazione.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Valore predefinito: `"806af00f-827f-4e4a-a5c6-93ffa80bd763"`.

4. **`vehicle`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo del veicolo prenotato.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

5. **`booking_moment`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Timestamp che indica il momento in cui è stata effettuata la prenotazione.
   - **Opzioni**:
     - Imposta automaticamente il valore alla creazione (`auto_now_add=True`).

6. **`booking_until`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Timestamp che indica la scadenza della prenotazione.

7. **`status`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Stato attuale della prenotazione (es., "active", "expired", "cancelled").
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Valore predefinito: `"active"`.

---

### Hook (Ciclo di vita del modello):

1. **`do_after_create_caches`**:
   - **Evento**: Dopo la creazione della prenotazione (`AFTER_CREATE`).
   - **Descrizione**:
     - Aggiorna la cache (`GEOCACHE`) impostando lo stato del veicolo come "booked".
     - Chiave di cache impostata: `::{self.vehicle}::edway.tripstatus`.

---

### Metodo speciale `__str__`:
Non è definito esplicitamente, ma potrebbe essere aggiunto per rappresentare la prenotazione in modo leggibile, ad esempio:
```python
def __str__(self):
    return f"Booking for Vehicle {self.vehicle} by User {self.user} until {self.booking_until}"
```

