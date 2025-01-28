---
sidebar_position: 2
---

### Descrizione della classe `PointClass`

La classe `PointClass` è progettata per gestire un tipo di dato personalizzato chiamato `PointField`. Questo campo è utilizzato per rappresentare una coppia di coordinate geografiche (ad esempio, latitudine e longitudine) in formato tupla. La classe include metodi per validare, rappresentare e modificare lo schema del campo, rendendolo compatibile con i sistemi di serializzazione come Ninja API.

---

### Funzionalità della Classe

1. **Validazione del Campo**
   - La classe implementa il metodo `__get_validators__` per fornire validatori personalizzati che vengono applicati quando il campo `PointField` è utilizzato in uno schema.

2. **Schema Personalizzato**
   - Il metodo `__modify_schema__` aggiorna lo schema generato per rappresentare il campo come una tupla con un esempio predefinito (`(22.5, 22.5)`).

3. **Compatibilità con Ninja API**
   - Il campo `PointField` viene aggiunto al dizionario dei tipi (`TYPES`) di Ninja API tramite `TYPES.update({"PointField": PointClass})`.

4. **Rappresentazione**
   - La classe implementa il metodo `__repr__` per fornire una rappresentazione leggibile del campo `PointField`.

---

### Attributi e Metodi

1. **`__get_validators__`**
   - **Descrizione**: Restituisce i validatori da utilizzare per il campo.
   - **Implementazione**:
     ```python
     @classmethod
     def __get_validators__(cls):
         yield cls.validate
     ```

2. **`validate`**
   - **Descrizione**: Valida il valore del campo, assicurandosi che sia una tupla corretta.
   - **Implementazione**:
     ```python
     @classmethod
     def validate(cls, v):
         return cls(v)
     ```

3. **`__modify_schema__`**
   - **Descrizione**: Modifica lo schema del campo per rappresentarlo come una tupla.
   - **Esempio di schema modificato**:
     ```json
     {
         "type": "tuple",
         "example": [22.5, 22.5]
     }
     ```
   - **Implementazione**:
     ```python
     @classmethod
     def __modify_schema__(cls, field_schema):
         field_schema.update(type="tuple", example=(22.5, 22.5))
     ```

4. **`__repr__`**
   - **Descrizione**: Restituisce una rappresentazione leggibile della classe per il debug o la stampa.
   - **Implementazione**:
     ```python
     def __repr__(self):
         return f"PointField({super().__repr__()})"
     ```

---


