### UsageCost
La classe `UsageCost` rappresenta un modello Django per gestire i costi associati all'utilizzo di veicoli in un sistema. Include tariffe per sblocco, prenotazione, limiti massimi di costo, e opzioni di pre-autorizzazione.

---

### Campi:

1. **`id`**:
   - **Tipo**: `UUIDField`
   - **Descrizione**: Identificativo univoco della tariffa, generato automaticamente tramite `uuid.uuid4`.
   - **Chiave primaria**: Sì.

2. **`active`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se la tariffa è attiva.
   - **Valore predefinito**: `True`.

3. **`owner`**:
   - **Tipo**: `ForeignKey` su `Ownerships`
   - **Descrizione**: Proprietario o entità che ha definito la tariffa.
   - **Opzioni**:
     - Indicizzato nel database (`db_index=True`).
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione del proprietario se ci sono tariffe associate.

4. **`vtype`**:
   - **Tipo**: `ForeignKey` su `VehicleType`
   - **Descrizione**: Tipo di veicolo a cui si applica la tariffa (opzionale).
   - **Opzioni**:
     - Indicizzato nel database (`db_index=True`).
     - Campo opzionale (`null=True, blank=True`).
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione del tipo di veicolo se ci sono tariffe associate.

5. **`model`**:
   - **Tipo**: `ForeignKey` su `VehicleModel`
   - **Descrizione**: Modello di veicolo specifico a cui si applica la tariffa (opzionale).
   - **Opzioni**:
     - Indicizzato nel database (`db_index=True`).
     - Campo opzionale (`null=True, blank=True`).
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione del modello se ci sono tariffe associate.

6. **`fleet`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo della flotta associata alla tariffa (opzionale).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Indicizzato nel database (`db_index=True`).
     - Campo opzionale (`null=True, blank=True`).

7. **`currency`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Valuta utilizzata per la tariffa.
   - **Opzioni**:
     - Lunghezza massima: 10 caratteri.
     - Valore predefinito: `"eur"`.

8. **`unlock`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Costo per sbloccare un veicolo.
   - **Valore predefinito**: `1`.

9. **`pre_booking_cost_time`**:
   - **Tipo**: `IntegerField`
   - **Descrizione**: Tempo massimo (in secondi) prima che inizi a essere applicato un costo per la prenotazione.
   - **Valore predefinito**: `600` (10 minuti).

10. **`booking`**:
    - **Tipo**: `FloatField`
    - **Descrizione**: Costo per effettuare una prenotazione.
    - **Valore predefinito**: `1`.

11. **`booking_time`**:
    - **Tipo**: `IntegerField`
    - **Descrizione**: Durata massima della prenotazione (in secondi).
    - **Valore predefinito**: `900` (15 minuti).

12. **`automatic_start_rental`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se il noleggio inizia automaticamente dopo la prenotazione.
    - **Valore predefinito**: `True`.

13. **`max_cost`**:
    - **Tipo**: `FloatField`
    - **Descrizione**: Costo massimo consentito per l'utilizzo.
    - **Valore predefinito**: `1000`.

14. **`preauth`**:
    - **Tipo**: `FloatField`
    - **Descrizione**: Importo pre-autorizzato (ad esempio, per sicurezza).
    - **Valore predefinito**: `0`.

15. **`deleted_at`**:
    - **Tipo**: `DateTimeField`
    - **Descrizione**: Timestamp per eliminazione logica (opzionale).
    - **Opzioni**:
      - Campo opzionale (`null=True, blank=True`).

---

### Metodo speciale `__str__`:
Non è definito esplicitamente, ma potrebbe essere aggiunto per rappresentare la tariffa in modo leggibile, ad esempio:
```python
def __str__(self):
    return f"UsageCost for {self.owner} ({self.currency})"
```
