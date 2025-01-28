---
sidebar_position: 5
---



### VehicleIssue
La classe `VehicleIssue` rappresenta un modello Django utilizzato per registrare e gestire i problemi segnalati relativi ai veicoli. Ogni problema può essere segnalato automaticamente o manualmente, associato a un utente e, opzionalmente, a un veicolo specifico.

---

### Campi:

1. **`user`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo dell'utente che ha segnalato il problema.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

2. **`vehicle`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo del veicolo coinvolto nel problema (opzionale).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

3. **`signaling`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Metodo di segnalazione del problema (es., "automatic", "manual").
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Valore predefinito: `"automatic"`.

4. **`signaled`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Data e ora in cui il problema è stato segnalato.
   - **Opzioni**:
     - Imposta automaticamente il valore alla creazione (`auto_now_add=True`).

5. **`issue_type`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Tipo di problema segnalato (es., "battery_low", "engine_failure").
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

6. **`image`**:
   - **Tipo**: `URLField`
   - **Descrizione**: URL di un'immagine correlata al problema (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

7. **`data`**:
   - **Tipo**: `JSONField`
   - **Descrizione**: Dati aggiuntivi relativi al problema, salvati in formato JSON.

8. **`ignore`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se il problema deve essere ignorato.
   - **Valore predefinito**: `False`.

---

### Meta:
- **`ordering`**:
  - Ordina i problemi in base alla data di segnalazione in ordine decrescente (`-signaled`), mostrando i problemi più recenti per primi.

---

### Metodo speciale `__str__`:
- Ritorna una rappresentazione leggibile del problema segnalato:
  ```python
  def __str__(self):
      return f"Issue by {self.user} on Vehicle {self.vehicle or 'N/A'} - {self.issue_type}"
  ```

---




