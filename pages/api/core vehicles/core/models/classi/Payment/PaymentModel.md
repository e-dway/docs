### PaymentModel
La classe `PaymentModel` rappresenta un modello Django per definire i piani tariffari o modelli di pagamento utilizzati in un sistema. Ogni modello di pagamento è configurato con tariffe specifiche, condizioni e associazioni a flotte o tipi di veicoli.

---

### Campi:

1. **`id`**:
   - **Tipo**: `UUIDField`
   - **Descrizione**: Identificativo univoco del modello di pagamento, generato automaticamente tramite `uuid.uuid4`.
   - **Chiave primaria**: Sì.

2. **`owner`**:
   - **Tipo**: `ForeignKey` su `Ownerships`
   - **Descrizione**: Proprietario o entità associata al modello di pagamento.
   - **Opzioni**:
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione del proprietario se ci sono modelli di pagamento associati.

3. **`is_default`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se il modello di pagamento è quello predefinito per il proprietario.
   - **Valore predefinito**: `False`.

4. **`for_fleet`**:
   - **Tipo**: `ManyToManyField` su `Fleet`
   - **Descrizione**: Flotte specifiche a cui si applica il modello di pagamento (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

5. **`for_type`**:
   - **Tipo**: `ManyToManyField` su `VehicleType`
   - **Descrizione**: Tipi di veicoli specifici a cui si applica il modello di pagamento (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

6. **`active`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se il modello di pagamento è attivo.
   - **Valore predefinito**: `True`.

7. **`name`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Nome descrittivo del modello di pagamento.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

8. **`unlock_fee`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Costo per sbloccare un veicolo.

9. **`unlock_amount`**:
   - **Tipo**: `IntegerField`
   - **Descrizione**: Numero di sblocchi inclusi nel modello di pagamento.
   - **Valore predefinito**: `-1` (illimitato).

10. **`price`**:
    - **Tipo**: `FloatField`
    - **Descrizione**: Prezzo del modello di pagamento per unità di tempo o utilizzo.

11. **`autostart`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se il modello di pagamento avvia automaticamente il conteggio dei costi.
    - **Valore predefinito**: `False`.

12. **`time_unit`**:
    - **Tipo**: `IntegerField`
    - **Descrizione**: Unità di tempo (es., minuti o ore) per cui si applica il modello di pagamento.

13. **`charge_mode`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Modalità di addebito (es., "pay-as-you-go", "subscription").
    - **Opzioni**:
      - Lunghezza massima: 200 caratteri.
      - Scelte definite in `CHARGE_MODE`.

---

### Metodo speciale `__str__`:
Non è definito esplicitamente, ma potrebbe essere aggiunto per rappresentare il modello di pagamento in modo leggibile, ad esempio:
```python
def __str__(self):
    return f"Payment Model: {self.name} ({'Default' if self.is_default else 'Custom'})"
```

