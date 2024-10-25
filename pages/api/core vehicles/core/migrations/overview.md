

---

# file di migrazioni

Tale directory contiene file .py per la  migrazione automatica generata da Django, il numerato del file indica la storicità. 
Questi file creano tabelle e relazioni nel database, basate sui modelli definiti in `models.py` al momento dell'esecuzione della migrazione iniziale.

## Struttura del file

### 1. **Importazioni**
   - Importa moduli da `django.db`, tra cui `migrations` e `models`, per gestire le operazioni di migrazione e rappresentare i tipi di dati e le relazioni definiti nei modelli.

### 2. **Classe Migrazione**
   - La classe `Migration` eredita da `migrations.Migration` e include una serie di istruzioni per la creazione delle tabelle e la definizione dei campi, delle chiavi primarie e delle relazioni.

### 3. **Dipendenze**
   - La variabile `dependencies` è un elenco di tuple che specificano le migrazioni da cui questa migrazione dipende. 
   - Essendo la migrazione iniziale, questo elenco è solitamente vuoto (`dependencies = []`), indicando che non ha dipendenze.

### 4. **Operazioni**
   - La variabile `operations` è una lista di operazioni di migrazione, come `CreateModel`, `AddField`, e `CreateIndex`. Per una migrazione iniziale, la lista contiene principalmente operazioni di `CreateModel`.
   - Ogni `CreateModel` definisce una tabella con i seguenti dettagli:
     - **Nome del modello**: Nome della classe del modello.
     - **Campi**: Ogni campo del modello è definito con nome, tipo e attributi (es., `max_length`, `null`, `default`).
     - **Opzioni del modello**: Include opzioni di meta-classe come `ordering` e `verbose_name`.
     - **Opzioni di database**: Come `db_table` per specificare un nome personalizzato per la tabella.

   Esempio di una migrazione `CreateModel`:
   ```python
   migrations.CreateModel(
       name='Product',
       fields=[
           ('id', models.AutoField(primary_key=True)),
           ('name', models.CharField(max_length=100)),
           ('price', models.DecimalField(max_digits=10, decimal_places=2)),
           ('created_at', models.DateTimeField(auto_now_add=True)),
       ],
       options={
           'ordering': ['name'],
           'verbose_name': 'Product',
       },
   ),
   ```

---

## Esecuzione della Migrazione

Per applicare questa migrazione e creare le tabelle nel database, esegui i seguenti comandi Django:

```bash
python manage.py migrate
```

---

## Note

- **Autogenerato**: Questo file è stato generato automaticamente da Django utilizzando `python manage.py makemigrations`.
- **Manutenzione**: Evitare di modificare manualmente le migrazioni esistenti per prevenire conflitti o errori nel database. Se sono necessarie modifiche, crea una nuova migrazione.
- **Rollback**: Puoi eseguire il rollback di questa migrazione specifica usando `python manage.py migrate <app_name> 0000` per annullare tutte le migrazioni.

