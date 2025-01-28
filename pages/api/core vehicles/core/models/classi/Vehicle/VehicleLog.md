### VehicleLog
Registra eventi o azioni relative ai veicoli, come manutenzione o spostamenti.  
**Campi:**
1. **`vehicle`**:  
   - Tipo: `ForeignKey` su `Vehicle`  
   - Descrizione: Veicolo a cui l'evento è associato.  

2. **`log_type`**:  
   - Tipo: `CharField`  
   - Descrizione: Tipo di log (es., "manutenzione", "guasto").  
   - Lunghezza massima: 50 caratteri.  

3. **`timestamp`**:  
   - Tipo: `DateTimeField`  
   - Descrizione: Data e ora dell'evento registrato.  

4. **`description`**:  
   - Tipo: `TextField`  
   - Descrizione: Dettaglio dell'evento.  

---