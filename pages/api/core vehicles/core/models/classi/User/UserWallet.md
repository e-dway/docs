### UserWallet
La classe `UserWallet` rappresenta un modello Django utilizzato per gestire i portafogli digitali degli utenti. Include dettagli come il saldo del portafoglio, bonus accumulati, ultimo acquisto effettuato e opzioni di rinnovo automatico.

---

### Campi:

1. **`id`**:
   - **Tipo**: `UUIDField`
   - **Descrizione**: Identificativo univoco del portafoglio utente, generato automaticamente tramite `uuid.uuid4`.
   - **Chiave primaria**: Sì.

2. **`ownership`**:
   - **Tipo**: `ForeignKey` su `Ownerships`
   - **Descrizione**: Riferimento all'entità proprietaria associata al portafoglio.
   - **Opzioni**:
     - Valore predefinito: `"806af00f-827f-4e4a-a5c6-93ffa80bd763"`.
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione dell'entità proprietaria se ci sono portafogli associati.

3. **`user`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo dell'utente associato al portafoglio.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

4. **`wallet`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Saldo attuale del portafoglio.
   - **Valore predefinito**: `0`.

5. **`last_buy`**:
   - **Tipo**: `ForeignKey` su `WalletProduct`
   - **Descrizione**: Riferimento all'ultimo prodotto acquistato dall'utente (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).
     - `on_delete=models.PROTECT`.

6. **`auto_renew`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se il portafoglio dell'utente è configurato per il rinnovo automatico.
   - **Valore predefinito**: `True`.

7. **`bonus`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Bonus accumulato nel portafoglio.
   - **Valore predefinito**: `0`.

---

### Metodo speciale `__str__`:
- Restituisce una rappresentazione leggibile del portafoglio dell'utente, includendo l'utente e il saldo:
  ```python
  def __str__(self):
      return f'{self.user}: {self.wallet}'
  ```


