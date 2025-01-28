### Payment
La classe `Payment` rappresenta un modello Django per gestire i pagamenti effettuati dagli utenti. Include dettagli sull'importo, tipo di pagamento, associazione a viaggi o prodotti, nonché informazioni su integrazioni con sistemi di pagamento esterni come Stripe.

---

### Campi:

1. **`id`**:
   - **Tipo**: `UUIDField`
   - **Descrizione**: Identificativo univoco del pagamento, generato automaticamente tramite `uuid.uuid4`.
   - **Chiave primaria**: Sì.

2. **`ident`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo specifico per il pagamento (opzionale).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

3. **`ownership`**:
   - **Tipo**: `ForeignKey` su `Ownerships`
   - **Descrizione**: Identifica l'entità proprietaria associata al pagamento.
   - **Opzioni**:
     - Valore predefinito: `"806af00f-827f-4e4a-a5c6-93ffa80bd763"`.
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione dell'entità proprietaria se ci sono pagamenti associati.

4. **`user`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo dell'utente che ha effettuato il pagamento.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

5. **`amount`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Importo totale del pagamento.

6. **`payment_type`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Tipo di pagamento (es., "trip", "subscription").
   - **Opzioni**:
     - Lunghezza massima: 100 caratteri.
     - Valore predefinito: `"trip"`.

7. **`amount_pre_filters`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Importo originale prima di applicare filtri o sconti.

8. **`currency`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Valuta utilizzata per il pagamento.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

9. **`description`**:
   - **Tipo**: `TextField`
   - **Descrizione**: Descrizione del pagamento (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

10. **`product`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Prodotto associato al pagamento (opzionale).
    - **Opzioni**:
      - Lunghezza massima: 200 caratteri.
      - Campo opzionale (`null=True, blank=True`).

11. **`stripe_id`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Identificativo della transazione Stripe (opzionale).
    - **Opzioni**:
      - Lunghezza massima: 200 caratteri.
      - Campo opzionale (`null=True, blank=True`).

12. **`stripe_confirmed`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se il pagamento è stato confermato da Stripe.
    - **Valore predefinito**: `False`.

13. **`stripe_reason`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Motivo legato alla transazione Stripe, se applicabile (opzionale).
    - **Opzioni**:
      - Lunghezza massima: 200 caratteri.
      - Campo opzionale (`null=True, blank=True`).

14. **`date`**:
    - **Tipo**: `DateTimeField`
    - **Descrizione**: Data e ora in cui il pagamento è stato effettuato.
    - **Opzioni**:
      - Imposta automaticamente il valore alla creazione (`auto_now_add=True`).

15. **`trip`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Identificativo del viaggio associato al pagamento (opzionale).
    - **Opzioni**:
      - Lunghezza massima: 200 caratteri.
      - Campo opzionale (`null=True, blank=True`).

16. **`note`**:
    - **Tipo**: `TextField`
    - **Descrizione**: Note aggiuntive relative al pagamento (opzionale).
    - **Opzioni**:
      - Campo opzionale (`null=True, blank=True`).

17. **`url`**:
    - **Tipo**: `URLField`
    - **Descrizione**: URL di riferimento per il pagamento, ad esempio un link alla ricevuta (opzionale).
    - **Opzioni**:
      - Campo opzionale (`null=True, blank=True`).

18. **`unique`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Identificativo unico per evitare duplicati (opzionale).
    - **Opzioni**:
      - Lunghezza massima: 200 caratteri.
      - Campo opzionale (`null=True, blank=True`).

19. **`acquisition_lat`**:
    - **Tipo**: `FloatField`
    - **Descrizione**: Latitudine del luogo in cui è stato effettuato il pagamento (opzionale).
    - **Opzioni**:
      - Campo opzionale (`null=True, blank=True`).

20. **`acquisition_lon`**:
    - **Tipo**: `FloatField`
    - **Descrizione**: Longitudine del luogo in cui è stato effettuato il pagamento (opzionale).
    - **Opzioni**:
      - Campo opzionale (`null=True, blank=True`).

---

### Metodo speciale `__str__`:
Non è definito esplicitamente, ma potrebbe essere aggiunto per rappresentare il pagamento in modo leggibile, ad esempio:
```python
def __str__(self):
    return f"Payment by User {self.user}: {self.amount} {self.currency} for {self.payment_type}"
```

