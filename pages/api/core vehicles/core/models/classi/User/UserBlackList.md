---
sidebar_position: 3
---

### UserBlackList
La classe `UserBlackList` rappresenta un modello Django per gestire una lista nera degli utenti. È progettata per tracciare utenti, numeri di telefono, indirizzi IP e carte bloccati, con una motivazione specifica e la possibilità di automatizzare l'aggiornamento degli attributi relativi al blocco.

---

### Campi:

1. **`owner`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo del proprietario associato al record (es., organizzazione o entità).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

2. **`user`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Nome utente o identificativo dell'utente bloccato.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

3. **`phone`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Numero di telefono associato all'utente bloccato (opzionale).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

4. **`ip`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Indirizzo IP associato all'utente bloccato (opzionale).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

5. **`card`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Carta di pagamento associata all'utente bloccato (opzionale).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

6. **`reason`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Motivo per cui l'utente è stato aggiunto alla lista nera.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Valori limitati da `TYPES_LIST`.

7. **`admin_blocked`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se il blocco è stato applicato manualmente da un amministratore.
   - **Valore predefinito**: `False`.

8. **`ts`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Timestamp che indica quando l'utente è stato aggiunto alla lista nera.
   - **Opzioni**:
     - Imposta automaticamente il valore alla creazione (`auto_now_add=True`).
     - Campo opzionale (`null=True, blank=True`).

---

### Hook (Ciclo di vita del modello):

1. **`assign_blocked_att`**:
   - **Evento**: Dopo la creazione del record (`AFTER_CREATE`).
   - **Descrizione**:
     - Aggiunge un attributo all'entità utente (via `UserAtt`) per indicare che è bloccato.
     - Utilizza i campi `user`, `owner`, e `reason` per creare l'attributo.

2. **`remove_blocked_att`**:
   - **Evento**: Prima dell'eliminazione del record (`BEFORE_DELETE`).
   - **Descrizione**:
     - Rimuove attributi utente come `blocked` e `suspicious_behavior` dal modello `UserAtt`.

---

### Metodo speciale `__str__`:
Non è definito esplicitamente, ma potrebbe essere aggiunto per rappresentare l'utente bloccato in modo leggibile, ad esempio:
```python
def __str__(self):
    return f"Blacklisted User: {self.user} (Reason: {self.reason})"
```

