### KmUsageCost
La classe `KmUsageCost` rappresenta un modello Django per definire i costi di utilizzo basati sulla distanza percorsa (per chilometro). È collegata al modello `UsageCost` e specifica tariffe per chilometro a partire da un determinato punto.

---

### Campi:

1. **`usage_cost`**:
   - **Tipo**: `ForeignKey` su `UsageCost`
   - **Descrizione**: Collegamento al modello `UsageCost` a cui appartiene questa tariffa basata sulla distanza.
   - **Opzioni**:
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione del record `UsageCost` se ci sono tariffe associate.
     - `related_name="kms"`: Consente di accedere a queste tariffe tramite `usage_cost.kms`.

2. **`starts_at`**:
   - **Tipo**: `IntegerField`
   - **Descrizione**: Indica la distanza (in chilometri) a partire dalla quale si applica questa tariffa.
   - **Opzioni**:
     - Valore predefinito: `0`.
     - Indicizzato nel database (`db_index=True`).

3. **`usage_per_km`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Costo per ogni chilometro percorso.
   - **Valore predefinito**: `0`.

4. **`deleted_at`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Timestamp per eliminazione logica (opzionale).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

---

### Meta:
- **`ordering`**:
  - Ordina i record in base al campo `starts_at`, assicurando che le tariffe siano valutate in ordine crescente di distanza.

---

### Metodo speciale `__str__`:
Non è definito esplicitamente, ma potrebbe essere aggiunto per rappresentare la tariffa in modo leggibile, ad esempio:
```python
def __str__(self):
    return f"KmUsageCost starting at {self.starts_at} km: {self.usage_per_km} per km"
```

