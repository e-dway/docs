---
sidebar_position: 16
---


### StripeLog
La classe `StripeLog` rappresenta un modello Django utilizzato per registrare i log delle transazioni o eventi di Stripe. È utile per monitorare, analizzare e diagnosticare le interazioni con l'API di Stripe.

---

### Campi:

1. **`owner`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo del proprietario associato al log (es., organizzazione o entità).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

2. **`data`**:
   - **Tipo**: `JSONField`
   - **Descrizione**: Dati completi dell'evento o della risposta di Stripe, salvati in formato JSON.

3. **`date`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Data e ora in cui il log è stato registrato.
   - **Opzioni**:
     - Imposta automaticamente il valore alla creazione (`auto_now_add=True`).

4. **`obj`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Tipo o descrizione dell'oggetto associato all'evento Stripe (es., "payment", "subscription").
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

5. **`stripe_id`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo univoco dell'oggetto Stripe associato (es., ID di pagamento o abbonamento).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

---

### Metodo speciale `__str__`:
Non è definito esplicitamente, ma potrebbe essere aggiunto per rappresentare il log in modo leggibile, ad esempio:
```python
def __str__(self):
    return f"StripeLog: {self.obj} - {self.stripe_id} ({self.date})"
```

