### ProductDescription
La classe `ProductDescription` rappresenta un modello Django per gestire descrizioni multilingue associate a un prodotto. Ogni descrizione è collegata a un prodotto specifico e scritta in una determinata lingua.

---

### Campi:

1. **`product`**:
   - **Tipo**: `ForeignKey` su `Product`
   - **Descrizione**: Collegamento al prodotto a cui appartiene la descrizione.
   - **Opzioni**:
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione del prodotto se ci sono descrizioni associate.
     - `related_name="descriptions"`: Consente di accedere alle descrizioni di un prodotto tramite `product.descriptions`.

2. **`language`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Codice della lingua in cui è scritta la descrizione (es., "en" per inglese, "it" per italiano).
   - **Opzioni**:
     - Lunghezza massima: 10 caratteri.

3. **`description`**:
   - **Tipo**: `TextField`
   - **Descrizione**: Testo della descrizione del prodotto.

---

### Metodo speciale `__str__`:
- Ritorna una rappresentazione leggibile della descrizione, includendo il nome del prodotto e la lingua:
  ```python
  def __str__(self):
      return f"{self.product.name} ({self.language})"
  ```

---

### Utilizzo:
- La classe `ProductDescription` consente di gestire descrizioni multilingue per i prodotti.
- È utile in sistemi multilingue dove le descrizioni devono essere localizzate per diversi mercati o utenti.

Esempio di utilizzo:
```python
product = Product.objects.get(id="product_id")
descriptions = product.descriptions.all()  # Recupera tutte le descrizioni del prodotto
``` 
