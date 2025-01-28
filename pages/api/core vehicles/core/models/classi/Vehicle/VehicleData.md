### VehicleData
La classe `VehicleData` rappresenta un modello Django utilizzato per memorizzare dati in tempo reale relativi a un veicolo, come posizione geografica, livello della batteria e altre informazioni aggiuntive.

---

### Campi:

1. **`vehicle`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Identificativo univoco del veicolo.
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.
     - Deve essere univoco nel database (`unique=True`).

2. **`lat`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Latitudine della posizione corrente del veicolo.

3. **`lng`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Longitudine della posizione corrente del veicolo.

4. **`battery`**:
   - **Tipo**: `FloatField`
   - **Descrizione**: Livello della batteria del veicolo, espresso in percentuale o altra unità.

5. **`data`**:
   - **Tipo**: `JSONField`
   - **Descrizione**: Campo opzionale per memorizzare dati aggiuntivi relativi al veicolo (es., stato del motore, temperatura).
   - **Opzioni**:
     - Campo opzionale (`null=True, blank=True`).

6. **`last_update`**:
   - **Tipo**: `DateTimeField`
   - **Descrizione**: Data e ora dell'ultimo aggiornamento dei dati del veicolo.
   - **Opzioni**:
     - Imposta automaticamente il valore ogni volta che il record viene salvato (`auto_now=True`).

---

### Metodo speciale `__str__`:
- Ritorna una rappresentazione leggibile dei dati del veicolo:
  ```python
  def __str__(self):
      return f"Vehicle {self.vehicle} - Battery: {self.battery}%"
  ```




