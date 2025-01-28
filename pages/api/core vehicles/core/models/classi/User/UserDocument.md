### UserDocument
La classe `UserDocument` rappresenta un modello Django per gestire i documenti degli utenti, come identificazioni, patenti o altri file necessari per verifiche o processi amministrativi.

---

### Campi:

1. **`id`**:
   - **Tipo**: `UUIDField`
   - **Descrizione**: Identificatore univoco del documento, generato automaticamente tramite `uuid.uuid4`.
   - **Chiave primaria**: Sì.

2. **`user`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo dell'utente a cui il documento appartiene.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

3. **`owner`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo del proprietario associato (es., organizzazione o entità).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

4. **`doc_type`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Tipo di documento (es., "ID", "Patente", "Passaporto").
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

5. **`created`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Data e ora di creazione del documento.
   - **Opzioni**:
     - Imposta automaticamente il valore alla creazione (`auto_now_add=True`).
     - Campo opzionale (`null=True, blank=True`).

6. **`url`**:
   - **Tipo**: `URLField`
   - **Descrizione**: URL al documento caricato (es., fronte del documento).

7. **`url_back`**:
   - **Tipo**: `URLField`
   - **Descrizione**: URL al retro del documento (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

8. **`url_selfie`**:
   - **Tipo**: `URLField`
   - **Descrizione**: URL a un selfie dell'utente con il documento (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

9. **`expiry`**:
   - **Tipo**: `DateField`
   - **Descrizione**: Data di scadenza del documento (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

10. **`valid`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Indica se il documento è stato validato con successo.
    - **Opzioni**:
      - Valore predefinito: `False`.
      - Campo opzionale (`null=True, blank=True`).

11. **`status`**:
    - **Tipo**: `BooleanField`
    - **Descrizione**: Stato attuale del documento (ad esempio, attivo o scaduto).
    - **Opzioni**:
      - Valore predefinito: `False`.
      - Campo opzionale (`null=True, blank=True`).

12. **`validated_by`**:
    - **Tipo**: `CharField`
    - **Descrizione**: Identificativo dell'entità o persona che ha validato il documento.
    - **Opzioni**:
      - Lunghezza massima: 200 caratteri.
      - Campo opzionale (`null=True, blank=True`).

