---
sidebar_position: 7
---


### Penalty
La classe `Penalty` rappresenta un modello Django utilizzato per definire penalità associate a un'entità specifica (`ownership`). Ogni penalità include un identificativo unico, un nome, e una descrizione dettagliata.

---

### Campi:

1. **`id`**:
   - **Tipo**: `UUIDField`
   - **Descrizione**: Identificativo univoco della penalità, generato automaticamente tramite `uuid.uuid4`.
   - **Chiave primaria**: Sì.

2. **`ownership`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo dell'entità proprietaria associata alla penalità (es., organizzazione o entità legale).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

3. **`name`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Nome della penalità (es., "Mancato pagamento", "Danno al veicolo").
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

4. **`description`**:
   - **Tipo**: `TextField`
   - **Descrizione**: Descrizione dettagliata della penalità (es., condizioni, implicazioni, importi applicabili).

---

### Metodo speciale `__str__`:
- Ritorna una rappresentazione leggibile della penalità:
  ```python
  def __str__(self):
      return f"{self.name} (Ownership: {self.ownership})"
  ```




