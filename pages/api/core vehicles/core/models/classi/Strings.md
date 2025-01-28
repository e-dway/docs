### Strings
La classe `Strings` rappresenta un modello Django per gestire traduzioni multilingue di stringhe. Ogni stringa è associata a un proprietario (opzionale), un codice univoco, una lingua, e una traduzione. Utilizza un hook per aggiornare la cache delle stringhe dopo ogni salvataggio.

---

### Campi:

1. **`owner`**:
   - **Tipo**: `ForeignKey` su `Ownerships`
   - **Descrizione**: Proprietario o entità associata alla traduzione (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione del proprietario se ci sono traduzioni associate.

2. **`code`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Codice univoco che identifica la stringa (es., "welcome_message").
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

3. **`language`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Codice della lingua in cui la stringa è tradotta (es., "en" per inglese, "it" per italiano).
   - **Opzioni**:
     - Lunghezza massima: 10 caratteri.

4. **`translation`**:
   - **Tipo**: `TextField`
   - **Descrizione**: Testo della traduzione per il codice specifico e la lingua.

---

### Metodo speciale `__str__`:
- Restituisce una rappresentazione testuale della stringa, includendo il proprietario (se presente), la lingua, e il codice:
  ```python
  def __str__(self):
      return self.owner.name if self.owner else "" + "->" + self.language  + ":" + self.code
  ```

---

### Hook (Ciclo di vita del modello):

1. **`refresh_strings`**:
   - **Evento**: Dopo il salvataggio del record (`AFTER_SAVE`).
   - **Descrizione**:
     - Aggiorna la cache delle stringhe per il proprietario e la lingua specificata.
     - Cancella la cache precedente (`CACHE.delete`).
     - Recupera le traduzioni predefinite (di sistema), del proprietario generale, e del proprietario specifico.
     - Combina le traduzioni, con preferenza per la lingua specificata o l'inglese ("en").
     - Memorizza il risultato nella cache in formato JSON.
   - **Gestione degli errori**:
     - Utilizza un blocco `try-except` per gestire eventuali errori senza interrompere il processo.

---

### Considerazioni:

- **Unificazione delle traduzioni**:
  - Combina le traduzioni di sistema, generali, e specifiche del proprietario in un'unica struttura gerarchica, utilizzando il codice e la lingua come chiavi.

- **Cache**:
  - Riduce il carico sul database memorizzando le traduzioni in una cache, il cui stato viene aggiornato ogni volta che una traduzione viene modificata.

---

### Esempio di utilizzo:

Se vuoi recuperare una stringa per un proprietario specifico e una lingua, puoi accedere alla cache delle traduzioni tramite la chiave `STRINGS::{owner}::{language}`.

