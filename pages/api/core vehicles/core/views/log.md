---
sidebar_position: 2
---

La funzione `/log` è un endpoint API che consente di elaborare i dati relativi a un veicolo specifico, inclusi posizione, livello di batteria, eventi e crash. Inoltre, invia notifiche a gruppi Telegram e gestisce azioni basate su aree geografiche, come l'entrata o l'uscita da determinate zone.

---

### **Definizione**
```python
@api.post("/log/{ident}")
def store_log(request, ident, mode="rawlog"):
```

### **Argomenti**
1. **`request`**: La richiesta HTTP ricevuta dall'API, contenente il payload JSON con i dati da elaborare.
2. **`ident`**: L'identificativo del veicolo (IMEI).
3. **`mode`** (*opzionale*): Una modalità di elaborazione dei log (default: `"rawlog"`), non utilizzata nel corpo della funzione.

---

### **Funzionamento**

1. **Lettura dei dati della richiesta**:
   - Il corpo della richiesta è interpretato come JSON e salvato in `jjj`.

   ```python
   jjj = json.loads(request.body)
   ```

2. **Iterazione sui dati**:
   - Per ogni record JSON in `jjj`, verifica se il veicolo specificato da `ident` esiste e non è eliminato.

   ```python
   for jj in jjj:
       if Vehicle.objects.filter(deleted__isnull=True, imei=ident).count() == 1:
           ...
   ```

3. **Recupero informazioni del veicolo**:
   - Viene recuperato il veicolo associato a `ident`, insieme a dati come posizione, livello di batteria, eventi e crash.

   ```python
   vv = Vehicle.objects.get(imei=ident)
   vl_lat = float(jj['position.latitude'])
   vl_lon = float(jj['position.longitude'])
   battery = min(100, int(jj.get('edway.battery', 0)))
   ev = jj.get('event.enum')
   crash = jj.get('crash.event')
   ```

4. **Gestione del livello della batteria**:
   - Se il livello della batteria è inferiore a 15%, vengono inviate notifiche ai gruppi Telegram configurati.
   - Se il livello è inferiore a 5%, viene inviata una notifica aggiuntiva che richiede di collegare il veicolo alla corrente.

   ```python
   if battery < 15:
       if TelegramGroup.objects.filter(ident=str(vv.owner.ident), gtype='o', battery=True).count() > 0:
           ...
   ```

5. **Elaborazione degli eventi**:
   - Se un evento è presente nei dati, vengono inviate notifiche Telegram ai gruppi configurati.

   ```python
   if ev is not None:
       for g in TelegramGroup.objects.filter(ident__in=fids, gtype='f', events__isnull=False):
           ...
   ```

6. **Gestione dei crash**:
   - In caso di crash, vengono inviate notifiche specifiche ai gruppi Telegram.

   ```python
   if crash:
       for g in TelegramGroup.objects.filter(ident__in=fids, gtype='f', crash=True):
           ...
   ```

7. **Aree geografiche**:
   - Determina se il veicolo entra o esce da determinate zone (`FleetArea`).
   - Esegue azioni specifiche configurate per l'area, come l'avvio o la fine di un viaggio.

   ```python
   if o_area != s_area:
       if o_area != 0:
           if FleetAreaSetting.objects.filter(fleet_area_id=o_area, key="trigger", value="exit").count() > 0:
               ...
       if s_area != 0:
           if FleetAreaSetting.objects.filter(fleet_area_id=s_area, key="trigger", value="enter").count() > 0:
               ...
   ```

8. **Gestione di azioni specifiche**:
   - Imposta la velocità massima o spegne il veicolo in base alle configurazioni dell'area.

   ```python
   if a.settings.filter(key='max_speed').count() > 0:
       speed = a.settings.filter(key='max_speed').first().value
       ...
   ```

---

### **Risultato**
La funzione restituisce una risposta JSON con lo stato dell'operazione e l'identificativo del veicolo.

```python
return {"response": "ok", "ident": ident}
```

