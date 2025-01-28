### WalletProduct
La classe `WalletProduct` rappresenta un modello Django per gestire prodotti legati ai portafogli digitali. Questi prodotti possono includere un valore base, bonus associati e opzioni di rinnovo automatico, consentendo di gestire crediti virtuali, abbonamenti o offerte promozionali.

---

### Campi:

1. **`id`**:
   - **Tipo**: `UUIDField`
   - **Descrizione**: Identificativo univoco del prodotto, generato automaticamente tramite `uuid.uuid4`.
   - **Chiave primaria**: Sì.

2. **`owner`**:
   - **Tipo**: `ForeignKey` su `Ownerships`
   - **Descrizione**: Proprietario o entità associata al prodotto.
   - **Opzioni**:
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione del proprietario se ci sono prodotti associati.

3. **`fleet`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo della flotta a cui il prodotto è associato (opzionale).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

4. **`name`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Nome del prodotto.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

5. **`price`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Prezzo del prodotto.

6. **`currency`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Valuta utilizzata per il prezzo del prodotto.
   - **Opzioni**:
     - Lunghezza massima: 3 caratteri.
     - Valore predefinito: `"eur"`.

7. **`categories`**:
   - **Tipo**: `JSONField`
   - **Descrizione**: Categorie a cui appartiene il prodotto, rappresentate in formato JSON.
   - **Valore predefinito**: `[{"id": "2", "label": "categories.wallet"}]`.

8. **`subcategories`**:
   - **Tipo**: `JSONField`
   - **Descrizione**: Sotto-categorie del prodotto (opzionale).
   - **Valore predefinito**: `[]`.

9. **`value`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Valore monetario del prodotto (ad esempio, credito acquistabile).

10. **`bonus`**:
    - **Tipo**: `FloatField`
    - **Descrizione**: Bonus aggiuntivo fornito con l'acquisto del prodotto.
    - **Valore predefinito**: `0`.

11. **`times`**:
    - **Tipo**: `IntegerField`
    - **Descrizione**: Numero di utilizzi disponibili per il prodotto.
    - **Valore predefinito**: `-1` (illimitato).

12. **`times_renew`**:
    - **Tipo**: `ForeignKey` su `WalletProduct`
    - **Descrizione**: Riferimento a un altro prodotto per il rinnovo (opzionale).
    - **Opzioni**:
      - Campo opzionale (`null=True, blank=True`).
      - `on_delete=models.PROTECT`.

13. **`active`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se il prodotto è attivo.
    - **Valore predefinito**: `True`.

14. **`image`**:
    - **Tipo**: `URLField`
    - **Descrizione**: URL dell'immagine associata al prodotto.
    - **Valore predefinito**: `"https://cdn-icons-png.flaticon.com/512/261/261778.png"`.

15. **`auto_renew`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se il prodotto si rinnova automaticamente.
    - **Valore predefinito**: `True`.

16. **`meta`**:
    - **Tipo**: `JSONField`
    - **Descrizione**: Metadati aggiuntivi relativi al prodotto (opzionale).

17. **`deleted`**:
    - **Tipo**: `DateTimeField`
    - **Descrizione**: Timestamp per l'eliminazione logica del prodotto (opzionale).

18. **`visible`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se il prodotto è visibile agli utenti.
    - **Valore predefinito**: `True`.

---

### Metodo speciale `__str__`:
- Ritorna il nome del prodotto:
  ```python
  def __str__(self):
      return self.name
  ```

