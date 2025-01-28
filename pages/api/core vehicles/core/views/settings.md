---
sidebar_position: 2
---

### Descrizione della funzione `get_all_settings`

---

#### **Definizione**
```python
@api.get('/settings')
def get_all_settings(request):
    ...
```

#### **Scopo**
La funzione `get_all_settings` è un endpoint API che restituisce tutte le impostazioni per tutti i proprietari (`Ownerships`) esistenti nel sistema e le salva in un file chiamato `settings.json`.

---

### **Dettagli del Funzionamento**

#### **1. Inizializzazione del risultato**
- Viene creato un dizionario vuoto `ret` che conterrà le impostazioni di ciascun proprietario identificato.

```python
ret = {}
```

---

#### **2. Iterazione su tutti i proprietari**
- Utilizza `Ownerships.objects.all()` per recuperare tutti gli oggetti del modello `Ownerships`.
- Per ogni proprietà, chiama la funzione `do_get_client` passando l'ID (`ident`) del proprietario e specificando l'utente `sirmmo@gmail.com`.

```python
for o in Ownerships.objects.all():
    c = do_get_client(o.ident, user="sirmmo@gmail.com")
    ret[str(o.ident)] = c
```

##### **Funzionamento di `do_get_client`**:
- Recupera tutte le impostazioni associate a un proprietario specifico.
- Filtra le impostazioni private in base all'utente (qui viene utilizzato l'utente hardcoded `"sirmmo@gmail.com"`).
- Aggiunge configurazioni predefinite, come termini legali e livelli di batteria.

---

#### **3. Salvataggio delle impostazioni in un file**
- Le impostazioni aggregate vengono salvate in un file chiamato `settings.json`.
- Il file è aperto in modalità di scrittura (`w+`), sovrascrivendo eventuali contenuti esistenti.

```python
json.dump(ret, open('settings.json', 'w+'))
```

---

#### **4. Restituzione del risultato**
- Restituisce il dizionario `ret` come risposta JSON, contenente tutte le impostazioni raccolte.

```python
return ret
```

---

### **Output Atteso**

Supponiamo di avere due proprietà in `Ownerships` con i seguenti identificativi:
- Proprietario 1: `owner_1`
- Proprietario 2: `owner_2`

Le impostazioni raccolte da `do_get_client` potrebbero essere simili a:

```json
{
  "owner_1": {
    "legals.0.desc": "legal.terms.desc",
    "legals.0.id": "legal.terms",
    "levels": {
      "battery": {
        "empty": { "color": ["111", "6", "0"], "label": "empty", "max": "10", "min": "0" }
      }
    }
  },
  "owner_2": {
    "legals.0.desc": "legal.terms.desc",
    "legals.0.id": "legal.terms",
    "levels": {
      "battery": {
        "empty": { "color": ["111", "6", "0"], "label": "empty", "max": "10", "min": "0" }
      }
    }
  }
}
```


