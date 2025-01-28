---
sidebar_position: 8
---


### PlatformAttachment
La classe `PlatformAttachment` rappresenta un modello Django utilizzato per gestire file o allegati associati a un'entità (`owner`) su una piattaforma. Ogni allegato include dettagli come il tipo, il nome, l'utente che lo ha caricato, l'URL per accedervi e timestamp per la creazione e l'eliminazione.

---

### Campi:

1. **`owner`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo del proprietario o entità associata all'allegato (es., organizzazione, utente o progetto).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

2. **`name`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Nome leggibile dell'allegato (es., "contratto.pdf", "immagine_logo.png").
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

3. **`att_type`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Tipo di allegato (es., "document", "image", "video").
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

4. **`uploader`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo dell'utente che ha caricato l'allegato.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

5. **`created`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Data e ora in cui l'allegato è stato creato.
   - **Opzioni**:
     - Imposta automaticamente il valore alla creazione (`auto_now_add=True`).
     - Campo opzionale (`null=True, blank=True`).

6. **`url`**:
   - **Tipo**: `URLField`
   - **Descrizione**: URL pubblico o privato dell'allegato, utilizzato per accedervi.
   - **Opzioni**:
     - Lunghezza massima: 1000 caratteri.

7. **`deleted`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Timestamp per indicare se e quando l'allegato è stato eliminato (soft delete).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

---

### Metodo speciale `__str__`:
- Ritorna una rappresentazione leggibile dell'allegato:
  ```python
  def __str__(self):
      return f"Attachment: {self.name} (Owner: {self.owner})"
  ```

---



