La funzione `get_products` è un'API che restituisce una lista di prodotti e wallet disponibili per un determinato cliente, e opzionalmente per un utente specifico, considerando vari parametri come flotte, visibilità e stato attivo. Ecco una descrizione dettagliata della funzione.

---

### **Scopo**

- Recuperare i prodotti (`Product`) e wallet (`WalletProduct`) attivi e visibili per un cliente specifico.
- Filtrare i risultati in base all'utente, alla flotta o ad altri criteri dinamici.

---

### **Definizione della Funzione**
```python
def get_products(request, client, user=None):
```

---

### **Parametri**

1. **`request`**: Oggetto HTTP della richiesta.
2. **`client`**: Identificativo del cliente. Può includere una flotta nel formato `client_id:fleet_id`.
3. **`user`** *(opzionale)*: Identificativo dell'utente, usato per filtrare i risultati.

---

### **Flusso Operativo**

#### **1. Parsing e Configurazioni Iniziali**
- Estrae eventuali dettagli sulla flotta dal parametro `client` (se presente) e recupera la configurazione del cliente.

```python
ua = False
fleet = False
um = False
if ":" in client:
    fleet = client.split(':')[1]
    client = client.split(':')[0]

cc = get_client(client, user="sirmmo@gmail.com")
```

---

#### **2. Filtraggio in Base all'Utente**
- Se l'utente è specificato, verifica se esiste un attributo di tipo `active_fleet` associato all'utente.

```python
if user:
    ua = UserAtt.objects.filter(username=user, owner=client, key="active_fleet")
    if ua.count() > 0:
        ua = ua.first()
    else:
        ua = False
```

---

#### **3. Recupero dei Prodotti**
- Recupera i prodotti (`Product`) e i wallet (`WalletProduct`) attivi, non eliminati e visibili per il cliente specifico.

```python
ps = Product.objects.filter(active=True, deleted__isnull=True, owner_id=client, store_visible=True)
wps = WalletProduct.objects.filter(active=True, deleted__isnull=True, owner_id=client)
```

---

#### **4. Filtraggio per Flotta**
- Se è specificata una flotta, filtra i prodotti e i wallet per flotta.

```python
if fleet:
    ps = ps.filter(fleet=fleet)
    wps = wps.filter(fleet=fleet)
```

---

#### **5. Filtraggio per Attributi Utente**
- Se l'utente ha un attributo `active_fleet` specificato, filtra ulteriormente i prodotti e i wallet per tale flotta o include quelli senza flotta associata.

```python
if ua and "-" in ua.s_value:
    ps = ps.filter(Q(fleet=ua.s_value) | Q(fleet__isnull=True))
    wps = wps.filter(Q(fleet=ua.s_value) | Q(fleet__isnull=True))
```

---

#### **6. Combinazione dei Risultati**
- Combina i prodotti e i wallet ordinati per peso o priorità.

```python
ret = [p for p in ps.order_by('weight')] + [wp for wp in wps]
```

---

### **Output**
La funzione restituisce una lista combinata di:

1. **`Product`**: Prodotti ordinati per il campo `weight`.
2. **`WalletProduct`**: Wallet disponibili.

Esempio:
```python
[
    Product(name="Product A", weight=1),
    Product(name="Product B", weight=2),
    WalletProduct(name="Wallet A", value=100)
]
```


