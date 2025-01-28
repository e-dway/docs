### Regulations
La classe `Regulations` rappresenta un modello Django che definisce normative specifiche, come limiti di velocità o restrizioni geografiche, per un'area. Potrebbe essere utilizzata per regolare il comportamento di veicoli o flotte all'interno di un sistema.

---

### Campi:

1. **`id`**:
   - **Tipo**: `UUIDField`
   - **Descrizione**: Identificatore univoco della normativa, generato automaticamente tramite `uuid.uuid4`.
   - **Chiave primaria**: Sì.

2. **`name`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Nome descrittivo della normativa (es., "Limite di velocità urbano").
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

3. **`area`**:
   - **Tipo**: `JSONField`
   - **Descrizione**: Un campo per rappresentare l'area geografica in formato JSON (es., coordinate, ID di aree specifiche, o dati strutturati).
   - **Esempio**: 
     ```json
     {
         "type": "Polygon",
         "coordinates": [[[30, 10], [40, 40], [20, 40], [10, 20], [30, 10]]]
     }
     ```

4. **`speed_limit`**:
   - **Tipo**: `IntegerField`
   - **Descrizione**: Limite di velocità imposto dalla normativa (es., in km/h o mph).

5. **`geom`** (commentato):
   - **Tipo**: `PolygonField` (da `django.contrib.gis`)
   - **Descrizione**: Rappresenta la geometria dell'area di applicazione della normativa come poligono geografico. Commentato, ma potrebbe essere utilizzato in contesti GIS.

---

