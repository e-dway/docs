### **📌 Descrizione del file `geom.py`**

Il file `geom.py` **non contiene endpoint FastAPI**, ma definisce **modelli di dati per geometrie geospaziali** utilizzando **Pydantic**.  
Viene utilizzato per gestire **coordinate geografiche**, **poligoni**, **linee** e **collezioni di geometrie**.

---

## **📌 Struttura del file `geom.py`**

### **🔹 Importazioni**
Il file importa diversi moduli, tra cui:
- **Pydantic** per la validazione dei dati.
- **Tipi generici** (`TypeVar`, `Generic`) per rendere il codice più flessibile.
- **Typing** (`List`, `Dict`, `Tuple`, `Union`, `Optional`, ecc.) per definire le strutture dati.

---

### **🔹 Definizione di Tipi Geospaziali**
Vengono definiti alias per i tipi di dati usati nelle coordinate:

```python
NumType = Union[float, int]  # Le coordinate possono essere float o int

BBox = Union[
    Tuple[NumType, NumType, NumType, NumType],  # BBOX 2D
    Tuple[NumType, NumType, NumType, NumType, NumType, NumType],  # BBOX 3D
]

Position = Union[
    Tuple[NumType, NumType],  # Punto 2D (x, y)
    Tuple[NumType, NumType, NumType]  # Punto 3D (x, y, z)
]
```

**📌 Funzionalità:**  
- `BBox` definisce una bounding box **2D o 3D**.
- `Position` rappresenta **punti geografici** in **2D o 3D**.

---

## **📌 Modelli di Geometria**
Tutti i modelli sono basati su `Pydantic` e seguono lo standard **GeoJSON**.

---

### **1️⃣ Classe `Point`**
Modello per rappresentare un **punto singolo**:

```python
class Point(_GeometryBase):
    type: str = Field("Point", const=True)
    coordinates: Position
```

**📌 Esempio JSON:**
```json
{
    "type": "Point",
    "coordinates": [12.4924, 41.8902]
}
```
---

### **2️⃣ Classe `MultiPoint`**
Rappresenta un **insieme di punti**:

```python
class MultiPoint(_GeometryBase):
    type: str = Field("MultiPoint", const=True)
    coordinates: MultiPointCoords
```

**📌 Esempio JSON:**
```json
{
    "type": "MultiPoint",
    "coordinates": [[12.4924, 41.8902], [12.4964, 41.8912]]
}
```
---

### **3️⃣ Classe `LineString`**
Rappresenta una **linea composta da più punti**:

```python
class LineString(_GeometryBase):
    type: str = Field("LineString", const=True)
    coordinates: LineStringCoords
```


### **4️⃣ Classe `Polygon`**
Rappresenta un **poligono chiuso** con almeno **4 punti**.

```python
class Polygon(_GeometryBase):
    type: str = Field("Polygon", const=True)
    coordinates: PolygonCoords
```

⚠️ **Validazione**: Il primo e l'ultimo punto **devono coincidere** per chiudere il poligono.

```python
@validator("coordinates")
def check_closure(cls, polygon):
    if any([ring[-1] != ring[0] for ring in polygon]):
        raise ValueError("All linear rings have the same start and end coordinates")
    return polygon
```

**📌 Esempio JSON:**
```json
{
    "type": "Polygon",
    "coordinates": [
        [[12.4924, 41.8902], [12.4964, 41.8912], [12.5004, 41.8922], [12.4924, 41.8902]]
    ]
}
```
---

### **5️⃣ Classe `MultiPolygon`**
Rappresenta **più poligoni distinti**:

```python
class MultiPolygon(_GeometryBase):
    type: str = Field("MultiPolygon", const=True)
    coordinates: MultiPolygonCoords
```


### **6️⃣ Classe `GeometryCollection`**
Rappresenta una **collezione di geometrie** diverse:

```python
class GeometryCollection(BaseModel):
    type: str = Field("GeometryCollection", const=True)
    geometries: List[Geometry]
```


---

## **📌 Funzioni Utility**
### **Funzione `from_bounds()`**
Genera un **poligono rettangolare** da una bounding box:

```python
@classmethod
def from_bounds(cls, xmin: NumType, ymin: NumType, xmax: NumType, ymax: NumType) -> "Polygon":
    return cls(
        coordinates=[[[xmin, ymin], [xmax, ymin], [xmax, ymax], [xmin, ymax], [xmin, ymin]]]
    )
```
