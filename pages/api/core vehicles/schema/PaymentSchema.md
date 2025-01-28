---
sidebar_position: 2
---

### Descrizione della classe `PaymentSchema`

La classe `PaymentSchema` è uno schema Ninja API basato sul modello Django `Payment`. Questo schema estende i campi del modello `Payment` per includere un campo calcolato aggiuntivo chiamato `product_label`, che fornisce una rappresentazione leggibile del prodotto associato al pagamento.

---

### Attributi della Classe

1. **`product_label`**
   - **Tipo**: `Optional[str]`
   - **Descrizione**: Un'etichetta testuale che rappresenta il nome del prodotto associato al pagamento. Il valore viene calcolato dinamicamente tramite il metodo `resolve_product_label`.

2. **Config**
   - **`model`**: Specifica che questo schema si basa sul modello Django `Payment`.
   - **`model_fields`**: Include tutti i campi definiti nel modello `Payment` (`"__all__"`).

---

### Metodo Personalizzato: `resolve_product_label`

Il metodo `resolve_product_label` calcola dinamicamente il valore del campo `product_label` in base al tipo di pagamento e al prodotto associato.

#### Logica del Metodo:

1. **Verifica del Prodotto**:
   - Controlla se esiste un prodotto associato al pagamento (`obj.product`).

2. **Controllo del Tipo di Pagamento (`payment_type`)**:
   - Se il `payment_type` è `"product"`:
     - Cerca il prodotto associato tramite `Product.objects.get(id=obj.product)` e restituisce il nome.
     - Se non trova il prodotto, restituisce `"product"`.
   - Se il `payment_type` è `"wallet"`:
     - Cerca il prodotto portafoglio tramite `WalletProduct.objects.get(id=obj.product)` e restituisce il nome.
     - Se non trova il prodotto, restituisce `"wallet"`.
   - Se il `payment_type` è `"trip"`:
     - Restituisce `"trip"`.

3. **Gestione dei Casi Vuoti**:
   - Se `obj.product` non è definito, restituisce una stringa vuota (`""`).

#### Implementazione:
```python
@staticmethod
def resolve_product_label(obj):
    if obj.product:
        if obj.payment_type == "product":
            try: 
                return Product.objects.get(id=obj.product).name
            except:
                return "product"
        if obj.payment_type == "wallet":
            try:
                return WalletProduct.objects.get(id=obj.product).name
            except:
                return "wallet"
        if obj.payment_type == "trip":
            return "trip"
    else:
        return ""
```


