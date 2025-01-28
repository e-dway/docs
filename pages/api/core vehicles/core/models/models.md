
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

 