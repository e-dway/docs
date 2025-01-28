---
sidebar_position: 2
---

### Descrizione della funzione `track`

---

#### **Definizione**
```python
@api.get("/tracks")
def track(request, idents: str = "", tfrom: str = "-1000", tto: str = "2023", details: str = "1"):
    ...
```

---

### **Scopo**
La funzione `track` è un endpoint API che restituisce i tracciati di veicoli in formato GeoJSON, basandosi sui log registrati nel database. Può essere utilizzata per tracciare percorsi di veicoli, con opzioni per filtrare i veicoli, l'intervallo di tempo e i dettagli.

---

### **Parametri**
1. **`idents`** (*opzionale*): Una stringa contenente gli identificativi dei veicoli (IMEI) separati da `|`. Se vuoto, vengono considerati tutti i veicoli attivi.
2. **`tfrom`** (*opzionale*): La data di inizio del periodo per il filtro temporale. Default: 1 giorno fa.
3. **`tto`** (*opzionale*): La data di fine del periodo per il filtro temporale. Default: `2023`.
4. **`details`** (*opzionale*): Specifica se includere punti dettagliati (default: "1" per includerli).

---

### **Funzionamento**

#### **1. Impostazione del range temporale**
- Se i parametri `tfrom` e `tto` non sono forniti, viene considerato un intervallo di 1 giorno fino a `datetime.now()`.

```python
tsfrom = (datetime.datetime.now() - datetime.timedelta(days=1))
tsto = datetime.datetime.now()
```

#### **2. Recupero dei veicoli**
- Se il parametro `idents` è vuoto, vengono considerati tutti i veicoli attivi (non eliminati).
- In caso contrario, vengono filtrati i veicoli i cui IMEI sono specificati nel parametro.

```python
if idents == '':
    features = [v for v in Vehicle.objects.filter(deleted__isnull=True)]
else:
    features = [v for v in Vehicle.objects.filter(deleted__isnull=True, imei__in=idents.split('|'))]
```

#### **3. Iterazione sui veicoli**
- Per ogni veicolo, vengono recuperati i log relativi al veicolo nel periodo di tempo specificato.
- I log sono ordinati per `timestamp`.

```python
log = VehicleLog.objects.filter(vehicle=f.imei).exclude(lat__isnull=True, lng__isnull=True).order_by('data__timestamp')
log = log.filter(timestamp__gte=tsfrom, timestamp__lte=tsto)
```

#### **4. Costruzione del GeoJSON**
- Se il veicolo ha più di un log, viene creato un oggetto `LineString` che rappresenta il tracciato del veicolo.
- Se `details == "1"`, vengono aggiunti anche i punti dettagliati (come `Point`) con le informazioni extra contenute in `x.data`.

```python
fout.append({
    "type": "Feature",
    "properties": {"ident": f.imei, "model": f.model.name},
    "geometry": {
        "type": "LineString",
        "coordinates": [[x.lng, x.lat] for x in log if x.lng is not None and x.lat is not None]
    }
})

if details == "1":
    for x in log:
        if x.lng is not None and x.lat is not None:
            dd = x.data
            fout.append({
                "type": "Feature",
                "properties": dd,
                "geometry": {
                    "type": "Point",
                    "coordinates": [x.lng, x.lat]
                }
            })
```

#### **5. Restituzione del GeoJSON**
- La funzione restituisce un oggetto `FeatureCollection` con tutti i tracciati e i dettagli raccolti.

```python
return {
    "type": "FeatureCollection",
    "features": fout
}
```


