
---

# schemas.py

Il file `schemas.py` definisce le strutture dati, o **schemi**, utilizzate nell'applicazione per rappresentare e validare i dati. Questi schemi specificano il formato e i tipi di dati richiesti per varie operazioni, come la comunicazione tra API, la validazione di input o output e la serializzazione/deserializzazione dei dati.

## Struttura del file

### 1. **Importazioni**
   - Importa librerie per la definizione e la gestione degli schemi, come `pydantic` (utilizzato in FastAPI e altri framework Python) o `marshmallow`.
   - Potrebbero essere presenti importazioni per tipi specifici (ad es., `List`, `Optional`, `Dict`) per strutturare e annotare correttamente i campi degli schemi.

### 2. **Definizione degli Schemi con Pydantic o Marshmallow**
   - Gli schemi sono definiti come classi Python che rappresentano i campi e i tipi di dati richiesti. Ogni campo può essere annotato con un tipo e vincoli specifici, come la lunghezza minima, la presenza obbligatoria o i valori predefiniti.
   - **Pydantic**: I modelli Pydantic utilizzano annotazioni di tipo per la convalida dei dati e includono metodi automatici per la serializzazione e deserializzazione.
   - **Marshmallow**: Se `marshmallow` è utilizzato, i campi sono definiti con attributi specifici (ad es., `fields.String()`, `fields.Integer()`), convalidando e serializzando i dati in modo simile.

   Esempio di uno schema con Pydantic:

   ```python
   from pydantic import BaseModel
   from typing import Optional

   class UserSchema(BaseModel):
       id: int
       name: str
       email: str
       age: Optional[int] = None
   ```

### 3. **Gestione delle Relazioni tra Schemi**
   - Gli schemi possono essere nidificati per rappresentare relazioni tra oggetti complessi. Ad esempio, uno schema `Order` può contenere una lista di oggetti `Product`.
   - Queste relazioni consentono di costruire strutture dati gerarchiche e facilmente navigabili per le API e altre funzionalità.

   Esempio di schema con relazione:

   ```python
   from pydantic import BaseModel
   from typing import List

   class ProductSchema(BaseModel):
       id: int
       name: str
       price: float

   class OrderSchema(BaseModel):
       order_id: int
       products: List[ProductSchema]
       total: float
   ```

### 4. **Convalida Personalizzata**
   - Oltre ai tipi di dati predefiniti, `schemas.py` può includere metodi di convalida personalizzati per aggiungere controlli specifici (ad es., un intervallo di valori o una formattazione stringa specifica).
   - Con Pydantic, si può aggiungere un validatore per campo o per modello, mentre `marshmallow` offre metodi simili con decoratori `@validates`.

   Esempio di validazione personalizzata con Pydantic:

   ```python
   from pydantic import BaseModel, validator

   class ProductSchema(BaseModel):
       id: int
       name: str
       price: float

       @validator('price')
       def check_price(cls, v):
           if v < 0:
               raise ValueError('Il prezzo non può essere negativo')
           return v
   ```

### 5. **Serializzazione e Deserializzazione**
   - Gli schemi possono includere configurazioni per la serializzazione e deserializzazione dei dati, facilitando la conversione da e verso formati compatibili con JSON, ad esempio.
   - Questa funzionalità è particolarmente utile per le API che devono ricevere dati in formato JSON e restituire risposte nello stesso formato.

---

## Esempio di Schema per Input e Output

Ecco un esempio di come potrebbero essere strutturati gli schemi per input e output:

```python
from pydantic import BaseModel
from typing import Optional

class UserInputSchema(BaseModel):
    name: str
    email: str

class UserOutputSchema(BaseModel):
    id: int
    name: str
    email: str
    age: Optional[int] = None
```

---

