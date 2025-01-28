---
sidebar_position: 2
---

### Descrizione della funzione `get_orgs`

---

#### **Definizione**
```python
@api.get('/orgs')
def get_orgs(request, user):
    ums = UserManagement.objects.filter(user=user)
    os = Ownerships.objects.filter(ident__in=[u.ownership for u in ums])
```

#### **Scopo**
La funzione `get_orgs` restituisce un elenco di organizzazioni (`Ownerships`) a cui un determinato utente è associato tramite la tabella `UserManagement`.

---

### **Dettagli del Funzionamento**

1. **Recupero delle Associazioni Utente-Organizzazione**:
   - La funzione filtra la tabella `UserManagement` per recuperare tutte le associazioni per un determinato utente (`user`).
   - Questi record rappresentano le organizzazioni a cui l'utente ha accesso.

   ```python
   ums = UserManagement.objects.filter(user=user)
   ```

   **Risultato**: 
   Una queryset con tutti i record di associazioni dell'utente.

---

2. **Filtraggio delle Organizzazioni**:
   - Dalla tabella `Ownerships`, vengono recuperate le organizzazioni i cui identificativi (`ident`) sono presenti nella lista di associazioni trovate.

   ```python
   os = Ownerships.objects.filter(ident__in=[u.ownership for u in ums])
   ```

   **Dettagli**:
   - `[u.ownership for u in ums]`: Estrae l'elenco degli identificativi delle organizzazioni dall'oggetto `UserManagement`.
   - `Ownerships.objects.filter(ident__in=...)`: Restituisce le organizzazioni corrispondenti.

---

### **Output Atteso**
La funzione **non restituisce nulla esplicitamente** nel codice mostrato, ma ci si aspetta che:
- Venga restituito un elenco di organizzazioni (`Ownerships`) per cui l'utente ha permessi.
- Se un utente non ha associazioni nella tabella `UserManagement`, la lista sarà vuota.





