---
sidebar_position: 8
---

### UserPackage
La classe `UserPackage` rappresenta un modello Django utilizzato per gestire pacchetti o abbonamenti acquistati da un utente. Ogni pacchetto è associato a un prodotto (`Product`) e include dettagli come stato di attivazione, tempo rimanente, sblocchi disponibili e rinnovo automatico.

---

### Campi:

1. **`user`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo dell'utente che ha acquistato il pacchetto.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

2. **`package`**:
   - **Tipo**: `ForeignKey` su `Product`
   - **Descrizione**: Riferimento al prodotto acquistato dall'utente.
   - **Opzioni**:
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione del prodotto se è associato a pacchetti acquistati.

3. **`acquired`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Data e ora in cui il pacchetto è stato acquistato.
   - **Opzioni**:
     - Imposta automaticamente il valore alla creazione (`auto_now_add=True`).

4. **`payment_confirmed`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se il pagamento per il pacchetto è stato confermato.
   - **Valore predefinito**: `False`.

5. **`can_activate`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Data e ora a partire dalla quale il pacchetto può essere attivato (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

6. **`activated`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Data e ora in cui il pacchetto è stato attivato (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

7. **`active`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se il pacchetto è attivo.
   - **Valore predefinito**: `False`.

8. **`remaining_time`**:
   - **Tipo**: `IntegerField`
   - **Descrizione**: Tempo rimanente del pacchetto (es., in secondi).
   - **Valore predefinito**: `0`.

9. **`exhausted`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se il pacchetto è esaurito (ad esempio, tempo o sblocchi terminati).
   - **Valore predefinito**: `False`.

10. **`remaining_unlocks`**:
    - **Tipo**: `IntegerField`
    - **Descrizione**: Numero di sblocchi rimanenti per il pacchetto.
    - **Valore predefinito**: `0`.

11. **`auto_renew`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se il pacchetto si rinnova automaticamente.
    - **Valore predefinito**: `False`.

---

### Metodo speciale `__str__`:
- Restituisce una rappresentazione leggibile del pacchetto, includendo l'utente e il nome del prodotto:
  ```python
  def __str__(self):
      return f'{self.user}: {self.package.name}'
  ```

---

### Meta:
- **`ordering`**:
  - Ordina i record in base alla data di acquisto in ordine decrescente (`-acquired`).
