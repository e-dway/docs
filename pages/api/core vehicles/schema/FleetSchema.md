---
sidebar_position: 2
---

### Descrizione della classe `FleetSchema`

La classe `FleetSchema` rappresenta uno schema API per il modello Django `Fleet`. È progettata per serializzare le informazioni dettagliate di una flotta, incluse le relazioni con altri modelli come le impostazioni, le aree e i gruppi Telegram. Lo schema consente di restituire una rappresentazione completa di una flotta tramite un'API RESTful.

---

### Attributi della Classe

1. **`owner`**
   - **Tipo**: `OwnershipsSchema`
   - **Descrizione**: Informazioni sull'entità proprietaria della flotta, serializzate tramite lo schema `OwnershipsSchema`.

2. **`settings`**
   - **Tipo**: `List[FleetSettingsSchema]`
   - **Descrizione**: Lista di impostazioni associate alla flotta, rappresentate tramite `FleetSettingsSchema`.

3. **`areas`**
   - **Tipo**: `List[FleetAreaSchema]`
   - **Descrizione**: Lista delle aree geografiche associate alla flotta, rappresentate tramite `FleetAreaSchema`.

4. **`groups`**
   - **Tipo**: `List[TelegramGroupSchema]`
   - **Descrizione**: Lista di gruppi Telegram collegati alla flotta, rappresentati tramite `TelegramGroupSchema`.

---

### Configurazione

1. **`model`**
   - Specifica che lo schema si basa sul modello `Fleet`.

2. **`model_fields`**
   - Include tutti i campi definiti nel modello Django `Fleet` (`"__all__"`).

---

### Metodi Personalizzati

1. **`resolve_name`**
   - **Descrizione**: Restituisce una rappresentazione testuale della flotta.
   - **Logica**:
     - Converte l'oggetto della flotta in una stringa utilizzando il metodo `__str__` del modello `Fleet`.
   - **Implementazione**:
     ```python
     @staticmethod
     def resolve_name(obj):
         return str(obj)
     ```

2. **`resolve_groups`**
   - **Descrizione**: Recupera i gruppi Telegram associati alla flotta.
   - **Logica**:
     - Filtra i gruppi Telegram con `gtype="f"` e `ident=obj.id` per identificare quelli collegati alla flotta specifica.
   - **Implementazione**:
     ```python
     @staticmethod
     def resolve_groups(obj):
         return TelegramGroup.objects.filter(gtype="f", ident=obj.id)
     ```


