---
sidebar_position: 7
---
---

### VehicleModelOwnership
Rappresenta la proprietà associata a un modello di veicolo.  
**Campi:**
1. **`ident`**:  
   - Tipo: `UUIDField`  
   - Descrizione: Identificatore univoco della relazione di proprietà, generato automaticamente.  
   - Chiave primaria: Sì.  

2. **`vehicle_model`**:  
   - Tipo: `ForeignKey` su `VehicleModel`  
   - Descrizione: Associa il modello di veicolo alla proprietà.  

3. **`owner`**:  
   - Tipo: `CharField`  
   - Descrizione: Identifica il proprietario associato al modello di veicolo.  
   - Lunghezza massima: 200 caratteri.  

---