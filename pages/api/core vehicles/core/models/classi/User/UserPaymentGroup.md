---
sidebar_position: 10
---

### UserPaymentGroup
La classe `UserPaymentGroup` rappresenta un modello Django utilizzato per associare un utente a un gruppo di pagamento (`PaymentGroup`). Questo modello consente di gestire le assegnazioni tra utenti e i loro benefici economici o sconti specifici.

---

### Campi:

1. **`user`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo dell'utente associato al gruppo di pagamento.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

2. **`group`**:
   - **Tipo**: `ForeignKey` su `PaymentGroup`
   - **Descrizione**: Riferimento al gruppo di pagamento a cui l'utente è associato.
   - **Opzioni**:
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione del gruppo di pagamento se ci sono utenti associati.

---

### Metodo speciale `__str__`:
- Ritorna una rappresentazione leggibile dell'associazione tra l'utente e il gruppo di pagamento, ad esempio:
  ```python
  def __str__(self):
      return f"User {self.user} - PaymentGroup: {self.group.name}"
  ```

---

