---
sidebar_position: 2
---


### Fencing
La classe `Fencing` rappresenta un modello Django utilizzato per gestire il concetto di "geofencing", che collega un veicolo a una specifica area geografica. È progettata per monitorare e controllare la posizione dei veicoli in relazione a determinate aree.

---

### Campi:

1. **`vehicle`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo univoco del veicolo associato al geofencing.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Deve essere unico nel database (`unique=True`).
     - Definito come chiave primaria (`primary_key=True`).

2. **`area`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo dell'area geografica associata al veicolo.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

---

### Metodo speciale `__str__`:
- Ritorna una rappresentazione leggibile dell'associazione tra veicolo e area:
  ```python
  def __str__(self):
      return f"Vehicle: {self.vehicle}, Area: {self.area}"
  ```


