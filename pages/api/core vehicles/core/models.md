
---

# models.py

Il file `models.py` contiene la definizione dei modelli di dati per un'applicazione Django. In Django, i modelli rappresentano le entità del database e la loro struttura, gestendo la creazione delle tabelle e definendo le relazioni tra di esse. Ogni modello è una classe Python che eredita da `models.Model` e i suoi attributi definiscono i campi di una tabella del database.

## Struttura del file

### 1. **Importazioni**
   - Importa `models` dal modulo `django.db`, che fornisce i tipi di campo e i metodi per definire i modelli.
   - Potrebbero essere presenti altre importazioni specifiche per gestire relazioni o campi personalizzati, come `UUIDField`, `ForeignKey`, `OneToOneField` e `ManyToManyField`.

### 2. **Definizione dei Modelli**
   - Ogni modello è una classe che rappresenta una tabella del database.
   - Gli attributi della classe definiscono i campi della tabella, con tipi come `CharField`, `IntegerField`, `DateTimeField`, `ForeignKey`, ecc.
   - Ogni campo ha diverse opzioni, come `max_length` per limitare la lunghezza, `null` per consentire valori `NULL` e `default` per impostare un valore predefinito.

   Esempio di un modello:

   ```python
   from django.db import models

   class Product(models.Model):
       name = models.CharField(max_length=100)
       price = models.DecimalField(max_digits=10, decimal_places=2)
       description = models.TextField(blank=True, null=True)
       created_at = models.DateTimeField(auto_now_add=True)
       updated_at = models.DateTimeField(auto_now=True)

       def __str__(self):
           return self.name
   ```

### 3. **Relazioni tra Modelli**
   - I modelli possono essere collegati tra loro utilizzando relazioni:
     - **One-to-Many (ForeignKey)**: Un record è associato a molti record di un altro modello.
     - **One-to-One (OneToOneField)**: Un record è associato a uno e un solo record di un altro modello.
     - **Many-to-Many (ManyToManyField)**: Molti record sono associati a molti record di un altro modello.
   - Queste relazioni creano collegamenti tra le tabelle del database e consentono di eseguire query complesse.

   Esempio di relazione One-to-Many:

   ```python
   class Category(models.Model):
       name = models.CharField(max_length=50)

   class Product(models.Model):
       name = models.CharField(max_length=100)
       category = models.ForeignKey(Category, on_delete=models.CASCADE)
   ```

### 4. **Meta Options**
   - La classe interna `Meta` fornisce opzioni di configurazione per il modello, come:
     - **ordering**: Definisce l'ordinamento predefinito dei record.
     - **verbose_name** e **verbose_name_plural**: Etichette leggibili del modello.
     - **unique_together**: Impone l'unicità combinata di due o più campi.

   Esempio di Meta options:

   ```python
   class Product(models.Model):
       name = models.CharField(max_length=100)

       class Meta:
           ordering = ['name']
           verbose_name = 'Product'
           verbose_name_plural = 'Products'
   ```

### 5. **Metodi Personalizzati**
   - I metodi definiti nei modelli consentono di aggiungere logica personalizzata per manipolare o restituire dati.
   - Il metodo `__str__()` è comunemente utilizzato per definire una rappresentazione stringa leggibile dell’oggetto.
   - Si possono definire metodi personalizzati per eseguire calcoli o elaborazioni sui campi del modello.

   Esempio di metodo personalizzato:

   ```python
   class Product(models.Model):
       name = models.CharField(max_length=100)
       price = models.DecimalField(max_digits=10, decimal_places=2)

       def discounted_price(self, discount):
           return self.price * (1 - discount / 100)
   ```

### 6. **Signals e Logica Avanzata**
   - Potrebbero essere presenti segnali (`signals`) per collegare eventi a operazioni specifiche, come `post_save` o `pre_delete`, che permettono di eseguire codice automaticamente in risposta a cambiamenti nei modelli.
   - Questi segnali possono essere utilizzati per aggiornare campi, generare log o notificare l’utente.

---

## Esempio di Modello Completo

Ecco un esempio di modello che utilizza relazioni e opzioni avanzate:

```python
from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=100)

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    published_date = models.DateField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    isbn = models.CharField(max_length=13, unique=True)

    class Meta:
        ordering = ['title']
    
    def __str__(self):
        return self.title
```

---

