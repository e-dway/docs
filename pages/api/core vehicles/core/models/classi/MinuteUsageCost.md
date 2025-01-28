---
sidebar_position: 5
---


### MinuteUsageCost
La classe `MinuteUsageCost` rappresenta un modello Django per definire i costi di utilizzo basati sul tempo (per minuto). È collegata al modello `UsageCost` e specifica tariffe per utilizzo attivo e pause, con unità di misura configurabili.

---

### Campi:

1. **`usage_cost`**:
   - **Tipo**: `ForeignKey` su `UsageCost`
   - **Descrizione**: Collegamento al modello `UsageCost` a cui appartiene questa tariffa basata sul tempo.
   - **Opzioni**:
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione del record `UsageCost` se ci sono tariffe associate.
     - `related_name="minutes"`: Consente di accedere a queste tariffe tramite `usage_cost.minutes`.

2. **`starts_at`**:
   - **Tipo**: `IntegerField`
   - **Descrizione**: Indica il minuto di inizio per cui si applica questa tariffa.
   - **Opzioni**:
     - Valore predefinito: `0`.
     - Indicizzato nel database (`db_index=True`).

3. **`usage_per_minute`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Costo per ogni minuto di utilizzo attivo.
   - **Valore predefinito**: `0`.

4. **`pause_per_minute`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Costo per ogni minuto di pausa.
   - **Valore predefinito**: `0`.

5. **`usage_unit`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Unità di misura per il costo di utilizzo (es., "m" per minuti).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Valore predefinito: `"m"`.

6. **`pause_unit`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Unità di misura per il costo della pausa (es., "m" per minuti).
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Valore predefinito: `"m"`.

7. **`usage_unit_slot`**:
   - **Tipo**: `IntegerField`
   - **Descrizione**: Numero minimo di unità di utilizzo per cui viene applicata la tariffa.
   - **Valore predefinito**: `1`.

8. **`pause_unit_slot`**:
   - **Tipo**: `IntegerField`
   - **Descrizione**: Numero minimo di unità di pausa per cui viene applicata la tariffa.
   - **Valore predefinito**: `1`.

9. **`deleted_at`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Timestamp per eliminazione logica (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

---

### Meta:
- **`ordering`**:
  - Ordina i record in base al campo `starts_at`, assicurando che le tariffe siano valutate in ordine cronologico.

---

### Metodo speciale `__str__`:
Non è definito esplicitamente, ma potrebbe essere aggiunto per rappresentare la tariffa in modo leggibile, ad esempio:
```python
def __str__(self):
    return f"MinuteUsageCost starting at {self.starts_at} min: {self.usage_per_minute} per minute"
```

