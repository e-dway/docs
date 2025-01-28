---
sidebar_position: 2
---

### Descrizione della funzione `fleets`

---

#### **Definizione**
```python
@api.get('/fleets', response=List[FleetSchema])
def fleets(request, user, client, vehicle=None, mode='all', ipp='10', page='1'):
    ...
```

---

### **Scopo**
L'endpoint `/fleets` consente di ottenere una lista di flotte appartenenti a un determinato cliente (`client`). Offre filtri per specificare:
- Una flotta specifica.
- Veicoli associati.
- Modalità di flotta (ad esempio, "assegnabile").
Inoltre, supporta la paginazione per controllare il numero di risultati restituiti.

---

### **Parametri**
1. **`request`**: La richiesta HTTP ricevuta.
2. **`user`**: L'utente che effettua la richiesta (non utilizzato nella funzione).
3. **`client`**: L'identificativo del cliente/organizzazione.
   - Può contenere un identificativo flotta nel formato `client:fleet`.
4. **`vehicle`** (*opzionale*): L'IMEI di un veicolo specifico. Se fornito, la risposta è limitata alle flotte a cui è associato il veicolo.
5. **`mode`** (*opzionale*): Filtra le flotte in base alla modalità:
   - `"all"`: Nessun filtro.
   - `"assignable"`: Include solo le flotte non astratte.
6. **`ipp`** (*opzionale*): Elementi per pagina (default: 10).
7. **`page`** (*opzionale*): Numero di pagina per la paginazione (default: 1).

---

### **Funzionamento**

#### **1. Elaborazione del Parametro `client`**
- Se `client` contiene il separatore `:`, viene estratto l'identificativo della flotta.

```python
if ":" in client:
    fleet = client.split(':')[1]
    client = client.split(':')[0]
    fleets = fleets_for(fleet)  # Funzione non definita qui, stampa i dati delle flotte
    print(fleets)
```

- **Esempio**: Se `client="client1:fleet1"`, `fleet="fleet1"` e `client="client1"`.

---

#### **2. Filtraggio delle Flotte**
- Recupera tutte le flotte appartenenti al cliente specificato.

```python
ret = Fleet.objects.filter(owner_id=client)
```

- Filtra ulteriormente in base ai seguenti criteri:
  - Se una flotta specifica è stata identificata.

    ```python
    if fleet:
        ret = ret.filter(id=fleet)
    ```

  - Se la modalità è `"assignable"`, esclude le flotte astratte.

    ```python
    if mode == "assignable":
        ret = ret.filter(abstract=False)
    ```

  - Se è fornito un veicolo, filtra le flotte che includono quel veicolo.

    ```python
    if vehicle:
        ret = ret.filter(vehicles__vehicle__imei=vehicle)
    ```

---

#### **3. Ottimizzazione delle Query**
- Utilizza `select_related` e `prefetch_related` per ottimizzare il caricamento di relazioni.
  - **`select_related`**: Carica relazioni uno-a-uno o uno-a-molti (es. proprietario della flotta).
  - **`prefetch_related`**: Precarica relazioni molti-a-molti o molte-a-uno (es. impostazioni della flotta e aree associate).

```python
ret = ret.select_related('owner').prefetch_related('settings', 'areas', 'areas__settings')
```

---

#### **4. Paginazione**
- Applica la paginazione, dividendo i risultati in base ai parametri `ipp` (elementi per pagina) e `page` (pagina corrente).

```python
return ret[(int(page)-1)*int(ipp):int(page)*int(ipp)]
```

