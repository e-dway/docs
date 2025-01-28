---
sidebar_position: 2
---

### PaymentGroup
La classe `PaymentGroup` rappresenta un modello Django utilizzato per definire gruppi di pagamento con sconti o rimborsi specifici applicabili a diverse attività, come lo sblocco, la prenotazione e l'uso di un servizio.

---

### Campi:

1. **`id`**:
   - **Tipo**: `UUIDField`
   - **Descrizione**: Identificativo univoco del gruppo di pagamento, generato automaticamente tramite `uuid.uuid4`.
   - **Chiave primaria**: Sì.

2. **`name`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Nome del gruppo di pagamento (es., "Premium Users", "Corporate Discounts").
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

3. **`rebate_unlock`**:
   - **Tipo**: `IntegerField`
   - **Descrizione**: Sconto o rimborso applicabile per l'operazione di sblocco (in percentuale o valore fisso).
   - **Valore predefinito**: `0`.

4. **`rebate_book`**:
   - **Tipo**: `IntegerField`
   - **Descrizione**: Sconto o rimborso applicabile per l'operazione di prenotazione (in percentuale o valore fisso).
   - **Valore predefinito**: `0`.

5. **`rebate_usage`**:
   - **Tipo**: `IntegerField`
   - **Descrizione**: Sconto o rimborso applicabile per l'uso (es., tariffa per minuto o per chilometro, in percentuale o valore fisso).
   - **Valore predefinito**: `0`.

---

### Metodo speciale `__str__`:
- Restituisce una rappresentazione leggibile del gruppo di pagamento, ad esempio:
  ```python
  def __str__(self):
      return f"PaymentGroup: {self.name}"
  ```

