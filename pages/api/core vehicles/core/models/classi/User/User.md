---
sidebar_position: 1
---

### User
La classe `User` rappresenta un modello Django per gestire le informazioni principali di un utente in un sistema. Include dettagli personali, contatti, dati organizzativi e metadati utili per la gestione delle registrazioni e degli aggiornamenti.

---

### Campi:

1. **`username`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Nome utente unico utilizzato come identificativo principale.
   - **Opzioni**:
     - Lunghezza massima: 500 caratteri.
     - Definito come chiave primaria (`primary_key=True`).

2. **`firstname`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Nome dell'utente.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

3. **`familyname`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Cognome dell'utente.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

4. **`birthdate`**:
   - **Tipo**: `DateField`
   - **Descrizione**: Data di nascita dell'utente.

5. **`org`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Organizzazione associata all'utente (opzionale).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

6. **`clients`**:
   - **Tipo**: `TextField`
   - **Descrizione**: Testo libero per memorizzare dati relativi ai clienti associati all'utente (opzionale).

7. **`phone`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Numero di telefono dell'utente (opzionale).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

8. **`email`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Indirizzo email dell'utente (opzionale).
   - **Opzioni**:
     - Lunghezza massima: 500 caratteri.
     - Campo opzionale (`null=True, blank=True`).

9. **`otp`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Codice OTP (One-Time Password) associato all'utente (opzionale).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

10. **`registration`**:
    - **Tipo**: `DateField`
    - **Descrizione**: Data di registrazione dell'utente.
    - **Opzioni**:
      - Imposta automaticamente la data alla creazione (`auto_now_add=True`).
      - Campo opzionale (`null=True, blank=True`).

11. **`last_update`**:
    - **Tipo**: `DateField`
    - **Descrizione**: Data dell'ultimo aggiornamento dei dati dell'utente.
    - **Opzioni**:
      - Imposta automaticamente la data a ogni salvataggio (`auto_now=True`).
      - Campo opzionale (`null=True, blank=True`).

12. **`data`**:
    - **Tipo**: `JSONField`
    - **Descrizione**: Dati aggiuntivi associati all'utente, memorizzati in formato JSON.

13. **`deleted`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se l'utente è stato eliminato (soft delete).
    - **Valore predefinito**: `False`.

---

### Metodo speciale `__str__`:
- Restituisce il nome utente come rappresentazione leggibile:
  ```python
  def __str__(self):
      return self.username
  ```

---

### Meta:
- **`ordering`**:
  - Ordina gli utenti in base al campo `username`.

---



