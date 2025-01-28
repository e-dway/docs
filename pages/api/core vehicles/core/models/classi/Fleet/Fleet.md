### Fleet
La classe `Fleet` rappresenta un modello Django per gestire una flotta di veicoli. Include informazioni come il proprietario, configurazioni specifiche, modalità di pagamento e gerarchie tra flotte.

---

### Campi:

1. **`id`**:
   - **Tipo**: `UUIDField`
   - **Descrizione**: Identificatore univoco della flotta, generato automaticamente tramite `uuid.uuid4`.
   - **Chiave primaria**: Sì.

2. **`owner`**:
   - **Tipo**: `ForeignKey` su `Ownerships`
   - **Descrizione**: Proprietario della flotta.
   - **Opzioni**:
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione del proprietario se ci sono flotte associate.
     - Indicizzato nel database (`db_index=True`).

3. **`name`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Nome della flotta.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Indicizzato nel database (`db_index=True`).

4. **`abstract`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se la flotta è astratta (non direttamente operativa).
   - **Valore predefinito**: `False`.

5. **`storage`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se la flotta funge da deposito.
   - **Valore predefinito**: `False`.

6. **`freefloating`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se la flotta supporta un sistema di mobilità senza punti fissi.
   - **Valore predefinito**: `False`.

7. **`parent`**:
   - **Tipo**: `ForeignKey` su sé stessa (`Fleet`)
   - **Descrizione**: Indica una relazione gerarchica, collegando la flotta a una flotta "genitore".
   - **Opzioni**:
     - `null=True, blank=True`: Campo opzionale.
     - `related_name="children"`: Permette di accedere alle flotte figlie tramite `parent.children`.

8. **`require_activation`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se i veicoli della flotta richiedono attivazione.
   - **Valore predefinito**: `False`.

9. **`active`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se la flotta è attiva.
   - **Valore predefinito**: `True`.

10. **`exclusive`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se la flotta è esclusiva per un gruppo specifico.
    - **Valore predefinito**: `False`.

11. **`payment_mode`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Modalità di pagamento supportata dalla flotta.
    - **Opzioni**:
      - Lunghezza massima: 200 caratteri.
      - Scelte definite da `CHARGE_MODE`.
      - Valore predefinito: `"user_pays"`.

12. **`require_photo`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se è necessario caricare una foto durante il processo (ad esempio, al termine del noleggio).
    - **Valore predefinito**: `False`.

13. **`payments_accepted`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Elenco delle modalità di pagamento accettate (es., "carta, portafoglio, pacchetti").
    - **Valore predefinito**: `"card|wallet|package"`.

14. **`telegram_group`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Nome o identificativo del gruppo Telegram associato alla flotta.
    - **Opzioni**:
      - Campo opzionale (`null=True, blank=True`).

15. **`deleted`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se la flotta è stata eliminata logicamente.
    - **Valore predefinito**: `False`.

16. **`structural`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se la flotta ha un ruolo strutturale nel sistema.
    - **Valore predefinito**: `True`.

17. **`require_payment_method`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se è richiesto un metodo di pagamento per interagire con la flotta.
    - **Valore predefinito**: `True`.

---

### Metodo speciale `__str__`:
- Restituisce il nome della flotta. Se esiste una flotta "genitore", include anche il nome del genitore:
  ```python
  def __str__(self):
      if self.parent:
          return self.parent.name + " - " + self.name
      else:
          return self.name
  ```

---

### Meta:
- **`ordering`**:
  - Ordina le flotte in base al campo `name`.

---

### Hook (Ciclo di vita del modello):

1. **`do_before_update_cache`**:
   - **Evento**: Dopo l'aggiornamento della flotta (`AFTER_UPDATE`).
   - **Descrizione**:
     - Esegue operazioni di pulizia sulla cache (`GEOCACHE`), eliminando chiavi specifiche associate ai veicoli e alla flotta.
     - Usa contesto e codice per determinare quali chiavi cancellare.