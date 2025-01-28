---
sidebar_position: 2
---

### Descrizione della classe `TripSchema`

La classe `TripSchema` rappresenta uno schema API basato sul modello `Trip`. È progettata per serializzare/deserializzare i dati di un viaggio e include campi aggiuntivi e metodi personalizzati per calcolare valori derivati o collegati a relazioni tra modelli.

---

### Attributi della Classe

1. **`payment`**:
   - **Tipo**: `Optional[PaymentSchema]`
   - **Descrizione**: Un campo opzionale che rappresenta il pagamento principale associato al viaggio.

2. **`penalties`**:
   - **Tipo**: `List[PaymentSchema]`
   - **Descrizione**: Una lista di pagamenti relativi a penalità associate al viaggio.

3. **`name`**:
   - **Tipo**: `Optional[List[VehicleCodeSchema]]`
   - **Descrizione**: Una lista opzionale di codici del veicolo associato al viaggio.

4. **`firstname`**:
   - **Tipo**: `Optional[str]`
   - **Descrizione**: Nome dell'utente associato al viaggio (opzionale).

5. **`familyname`**:
   - **Tipo**: `Optional[str]`
   - **Descrizione**: Cognome dell'utente associato al viaggio (opzionale).

6. **`amount`**:
   - **Tipo**: `Optional[float]`
   - **Descrizione**: L'importo totale derivato da tutti i pagamenti relativi al viaggio (opzionale).

7. **`total_value`**:
   - **Tipo**: `Optional[float]`
   - **Descrizione**: Valore totale associato al viaggio, con un valore predefinito di `0`.

---

### Configurazione
1. **`model`**:
   - Indica che questo schema è basato sul modello `Trip`.

2. **`model_fields`**:
   - Include tutti i campi definiti nel modello Django `Trip` (`"__all__"`).

---

### Metodi Personalizzati

1. **`resolve_payment`**:
   - **Descrizione**: Recupera il pagamento principale associato al viaggio.
   - **Logica**:
     - Filtra i pagamenti con il campo `payment_type` impostato su `'trip'`.
     - Restituisce il primo pagamento trovato, oppure `None` in caso di errori.
   - **Implementazione**:
     ```python
     @staticmethod
     def resolve_payment(obj):
         try:
             return Payment.objects.filter(trip=obj.id, payment_type='trip').first()
         except:
             return None
     ```

2. **`resolve_penalties`**:
   - **Descrizione**: Recupera una lista di penalità associate al viaggio.
   - **Logica**:
     - Filtra tutti i pagamenti collegati al viaggio tramite il campo `trip`.
   - **Implementazione**:
     ```python
     @staticmethod
     def resolve_penalties(obj):
         return Payment.objects.filter(trip=obj.id)
     ```

3. **`resolve_name`**:
   - **Descrizione**: Recupera i codici del veicolo associato al viaggio.
   - **Logica**:
     - Filtra i codici del veicolo basandosi sull'IMEI del veicolo associato.
   - **Implementazione**:
     ```python
     @staticmethod
     def resolve_name(obj):
         return VehicleCode.objects.filter(vehicle__imei=obj.vehicle)
     ```

4. **`resolve_amount`**:
   - **Descrizione**: Calcola l'importo totale associato al viaggio, escludendo i pagamenti con `description="payment retry"`.
   - **Logica**:
     - Filtra i pagamenti connessi al viaggio ed esclude quelli che hanno `"payment retry"` nella descrizione.
     - Somma i valori degli importi.
   - **Implementazione**:
     ```python
     @staticmethod
     def resolve_amount(obj):
         return sum([p['amount'] for p in Payment.objects.filter(trip=obj.id).exclude(description="payment retry").values('amount')])
     ```

---

### Campi Commentati (Non Attivi)

1. **`resolve_city`**:
   - Era destinato a restituire la latitudine e longitudine del viaggio come una lista `[point_lat, point_lng]`.

2. **`resolve_poly`**:
   - Era destinato a restituire il poligono JSON associato al viaggio.

