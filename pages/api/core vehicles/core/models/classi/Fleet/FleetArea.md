### FleetArea
La classe `FleetArea` rappresenta un modello Django per definire le aree geografiche associate a una flotta. Ogni area può avere specifiche configurazioni e può essere rappresentata sia con dati JSON che con geometrie GIS.

---

### Campi:

1. **`fleet`**:
   - **Tipo**: `ForeignKey` su `Fleet`
   - **Descrizione**: La flotta a cui l'area è associata.
   - **Opzioni**:
     - `on_delete=models.PROTECT`: Impedisce l'eliminazione della flotta se ci sono aree associate.
     - `related_name="areas"`: Consente di accedere alle aree di una flotta tramite `fleet.areas`.

2. **`polygon`**:
   - **Tipo**: `JSONField`
   - **Descrizione**: Un campo JSON che rappresenta la geometria dell'area (es., coordinate di un poligono).

3. **`atype`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Tipo di area (es., "area", "zona di parcheggio").
   - **Opzioni**:
     - Lunghezza massima: 20 caratteri.
     - Valore predefinito: `"area"`.

4. **`main`**:
   - **Tipo**: `BooleanField`
   - **Descrizione**: Indica se l'area è l'area principale della flotta.
   - **Valore predefinito**: `False`.

5. **`geom`**:
   - **Tipo**: `PolygonField` (da `django.contrib.gis`)
   - **Descrizione**: Rappresenta la geometria dell'area come un poligono geografico.
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

6. **`name`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Nome descrittivo dell'area.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Campo opzionale (`null=True, blank=True`).

7. **`trigger`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Un campo per configurare azioni o eventi che si attivano in base all'area.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

---

### Metodo speciale `__str__`:
- Restituisce una rappresentazione testuale dell'area, includendo il nome della flotta e il nome dell'area:
  ```python
  def __str__(self):
      return "{}::{}".format(self.fleet, self.name)
  ```

