---
sidebar_position: 9
---


### Product
La classe `Product` rappresenta un modello Django per gestire prodotti associati a flotte o veicoli. Ogni prodotto può avere caratteristiche specifiche, prezzi personalizzati, categorie, e condizioni di utilizzo. È progettata per supportare la gestione dei prodotti in un sistema flessibile e scalabile.

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
   - **Descrizione**: Identificativo della flotta associata al prodotto (opzionale).
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
   - **Valore predefinito**: `0`.

6. **`currency`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Valuta utilizzata per il prezzo del prodotto.
   - **Opzioni**:
     - Lunghezza massima: 3 caratteri.
     - Valore predefinito: `"eur"`.

7. **`categories`**:
   - **Tipo**: `JSONField`
   - **Descrizione**: Categorie a cui appartiene il prodotto, rappresentate in formato JSON.
   - **Valore predefinito**: `[{"id": "1", "label": "categories.product"}]`.

8. **`subcategories`**:
   - **Tipo**: `JSONField`
   - **Descrizione**: Sotto-categorie del prodotto (opzionale).
   - **Valore predefinito**: `[]`.

9. **`override_unlock_price`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se il prezzo di sblocco deve essere sovrascritto.
   - **Valore predefinito**: `False`.

10. **`unlock_price`**:
    - **Tipo**: `FloatField`
    - **Descrizione**: Prezzo per lo sblocco del prodotto (se sovrascritto).
    - **Valore predefinito**: `0`.

11. **`price_per_minute`**:
    - **Tipo**: `FloatField`
    - **Descrizione**: Costo del prodotto per minuto (opzionale).

12. **`vehicle_type`**:
    - **Tipo**: `ForeignKey` su `VehicleType`
    - **Descrizione**: Tipo di veicolo associato al prodotto (opzionale).
    - **Opzioni**:
      - `on_delete=models.PROTECT`.

13. **`vehicle_model`**:
    - **Tipo**: `ForeignKey` su `VehicleModel`
    - **Descrizione**: Modello di veicolo associato al prodotto (opzionale).
    - **Opzioni**:
      - `on_delete=models.PROTECT`.

14. **`product_type`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Tipo di prodotto (es., abbonamento, noleggio).
    - **Opzioni**:
      - Campo opzionale (`null=True, blank=True`).

15. **`seconds`**:
    - **Tipo**: `IntegerField`
    - **Descrizione**: Durata del prodotto in secondi.
    - **Valore predefinito**: `0`.

16. **`in_timeframe`**:
    - **Tipo**: `IntegerField`
    - **Descrizione**: Indica il tempo (in secondi) durante il quale il prodotto è valido.
    - **Valore predefinito**: `0`.

17. **`from_activation`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se il prodotto è valido a partire dall'attivazione.
    - **Valore predefinito**: `False`.

18. **`automatic_activation`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se il prodotto viene attivato automaticamente.
    - **Valore predefinito**: `False`.

19. **`can_pause`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se il prodotto può essere messo in pausa.
    - **Valore predefinito**: `True`.

20. **`unlock_limit`**:
    - **Tipo**: `IntegerField`
    - **Descrizione**: Numero massimo di sblocchi consentiti.
    - **Valore predefinito**: `-1` (illimitato).

21. **`active`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se il prodotto è attivo.
    - **Valore predefinito**: `True`.

22. **`image`**:
    - **Tipo**: `URLField`
    - **Descrizione**: URL dell'immagine associata al prodotto (opzionale).

23. **`weight`**:
    - **Tipo**: `IntegerField`
    - **Descrizione**: Peso per ordinamento dei prodotti.
    - **Valore predefinito**: `0`.

24. **`auto_renew`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se il prodotto si rinnova automaticamente.
    - **Valore predefinito**: `False`.

25. **`meta`**:
    - **Tipo**: `JSONField`
    - **Descrizione**: Metadati aggiuntivi per il prodotto (opzionale).

26. **`deleted`**:
    - **Tipo**: `DateTimeField`
    - **Descrizione**: Timestamp per eliminazione logica del prodotto (opzionale).

27. **`can_activate`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se il prodotto può essere attivato manualmente.
    - **Valore predefinito**: `False`.

28. **`visible`**:
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

---

### Meta:
- **`ordering`**:
  - Ordina i prodotti in base al campo `weight`.

---
