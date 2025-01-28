---
sidebar_position: 2
---

### Descrizione della funzione `get_settings`

---

#### **Definizione**
```python
@api.get("/info/{client}/edway")
def get_settings(request, client, user):
    return get_client(client, user)
```

---

### **Scopo**
La funzione `get_settings` è un endpoint API che restituisce tutte le impostazioni associate a un determinato client (`client`) e, opzionalmente, filtra le impostazioni basandosi sull'utente (`user`).

---

### **Parametri**
1. **`request`**: La richiesta HTTP ricevuta.
2. **`client`**: L'identificativo del client per cui recuperare le impostazioni.
3. **`user`**: L'utente per cui effettuare la richiesta.

---

### **Funzionamento**
1. **Chiamata a `get_client`**:
   - La funzione chiama direttamente `get_client(client, user)` per ottenere tutte le impostazioni relative al client specificato.
   - La funzione `get_client` viene utilizzata per leggere le impostazioni da un file locale `settings.json`.

   ```python
   def get_client(client, user=None):
       return json.load(open('settings.json')).get(client, {})
   ```

2. **Restituzione delle Impostazioni**:
   - `get_client` restituisce un dizionario contenente le impostazioni del client.
   - Se il client non è trovato, restituisce un dizionario vuoto (`{}`).

---

### **Esempio di Utilizzo**

#### **Esempio di Database**
Immaginiamo un file `settings.json` che contiene:

```json
{
  "client_1": {
    "key_1": "value_1",
    "key_2": "value_2"
  },
  "client_2": {
    "key_1": "value_a",
    "key_2": "value_b"
  }
}
```

---

#### **Chiamata API**
```http
GET /info/client_1/edway?user=user1@example.com
```

