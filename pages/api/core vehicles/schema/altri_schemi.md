---
sidebar_position: 10
---
1. OwnershipsSchema

Rappresenta il modello Ownerships.

    Config: Include tutti i campi definiti nel modello.

2. TripPictureSchema

Rappresenta il modello TripPicture.

    Config: Include tutti i campi definiti nel modello.

3. VehicleTypeSchema

Rappresenta il modello VehicleType.

    Config: Include tutti i campi definiti nel modello.

4. VehicleLogSchema

Rappresenta il modello VehicleLog.

    Config: Include tutti i campi definiti nel modello.

5. VehicleBrandSchema

Rappresenta il modello VehicleBrand.

    Config: Include tutti i campi definiti nel modello.

6. IOTModelSchema

Rappresenta il modello IOTModel con un campo calcolato aggiuntivo.

    ble_uuids: Lista di UUID Bluetooth, calcolata tramite il metodo resolve_ble_uuids.

7. VehicleModelSchema

Rappresenta il modello VehicleModel.

    iot: Relazione opzionale con lo schema IOTModelSchema.
    Config: Esclude il campo iot dal modello Django.

8. VehicleModelStatsSchema

Estende VehicleModelSchema includendo un campo aggiuntivo:

    quantity: Campo opzionale per rappresentare il numero di veicoli collegati al modello.

9. CompactFleetSchema

Rappresenta un sottoinsieme del modello Fleet.

    Campi inclusi: id, name.

10. VehicleCodeSchema

Rappresenta il modello VehicleCode.

    Campi inclusi: context, code.

11. UserWalletSchema

Rappresenta il modello UserWallet.

    Config: Include tutti i campi definiti nel modello.



12. **VehicleTagSchema**
- **Descrizione**: Rappresenta lo schema per il modello `VehicleTag`.
- **Config**:
  - **`model`**: `VehicleTag`.
  - **`model_fields`**: Include tutti i campi del modello.

13. **UserPackageSchema**
- **Descrizione**: Schema per rappresentare i pacchetti utente (`UserPackage`).
- **Config**:
  - **`model`**: `UserPackage`.
  - **`model_fields`**: Include tutti i campi del modello.

14. **UserPackagePlusSchema**
- **Descrizione**: Estende `UserPackageSchema` aggiungendo il campo calcolato `fleet`.
- **Campi**:
  - **`fleet`**: Stringa opzionale che rappresenta la flotta associata al pacchetto utente.
- **Metodi**:
  - **`resolve_fleet`**: Recupera la flotta collegata al pacchetto.

---

15. **BookingSchema**
- **Descrizione**: Schema per rappresentare i dati di una prenotazione (`Booking`).
- **Config**:
  - **`model`**: `Booking`.
  - **`model_fields`**: Include tutti i campi del modello.

---

16. **OwnershipsSchema**
- **Descrizione**: Rappresenta lo schema per il modello `Ownerships`.
- **Config**:
  - **`model`**: `Ownerships`.
  - **`model_fields`**: Include tutti i campi del modello.

---

17. **FleetSettingsSchema**
- **Descrizione**: Rappresenta le impostazioni di una flotta (`FleetSettings`).
- **Config**:
  - **`model`**: `FleetSettings`.
  - **`model_fields`**: Include solo i campi `key` e `value`.

---

18. **FleetAreaSettingSchema**
- **Descrizione**: Schema per rappresentare le impostazioni di un'area della flotta (`FleetAreaSetting`).
- **Config**:
  - **`model`**: `FleetAreaSetting`.
  - **`model_fields`**: Include solo i campi `key` e `value`.

---

19. **FleetAreaSchema**
- **Descrizione**: Schema per rappresentare un'area geografica della flotta (`FleetArea`).
- **Campi**:
  - **`settings`**: Lista di impostazioni dell'area, rappresentate tramite `FleetAreaSettingSchema`.
- **Config**:
  - **`model`**: `FleetArea`.
  - **`model_fields`**: Include campi come `id`, `fleet`, `atype`, `main`, `polygon`, ecc.

---

20. **CompactFleetAreaSchema**
- **Descrizione**: Una versione ridotta dello schema `FleetArea`, con campi limitati.
- **Config**:
  - **`model`**: `FleetArea`.
  - **`model_fields`**: Include solo `fleet` e `name`.

---

21. **TelegramGroupSchema**
- **Descrizione**: Schema per rappresentare un gruppo Telegram (`TelegramGroup`).
- **Campi**:
  - **`group`**: Stringa opzionale che rappresenta il gruppo.
  - **`gtype`**: Tipo del gruppo (opzionale).
  - **`ident`**: Identificatore del gruppo (opzionale).
- **Config**:
  - **`model`**: `TelegramGroup`.
  - **`model_fields`**: Include tutti i campi del modello.

---

22. **PaymentSchema**
- **Descrizione**: Schema per rappresentare un pagamento (`Payment`).
- **Config**:
  - **`model`**: `Payment`.
  - **`model_fields`**: Include tutti i campi del modello.

---

23. **UserSchema**
- **Descrizione**: Schema per rappresentare un utente (`User`).
- **Config**:
  - **`model`**: `User`.
  - **`model_fields`**: Include tutti i campi del modello.

---

24. **CompactFleetSchema**
- **Descrizione**: Una versione ridotta dello schema `Fleet`, con campi essenziali.
- **Config**:
  - **`model`**: `Fleet`.
  - **`model_fields`**: Include `name`, `id`, `parent` e `active`.

---

25. **ProductDescriptionSchema**
- **Descrizione**: Schema per rappresentare una descrizione di prodotto (`ProductDescription`).
- **Config**:
  - **`model`**: `ProductDescription`.
  - **`model_fields`**: Include tutti i campi del modello.

---

26. **OldProductSchema**
- **Descrizione**: Una versione modificata dello schema `Product`, con esclusione di alcune categorie.
- **Campi**:
  - **`image`**: URL dell'immagine del prodotto.
- **Metodi**:
  - **`resolve_image`**: Fornisce un'immagine di default se il campo `image` è vuoto.
- **Config**:
  - **`model`**: `Product`.
  - **`model_exclude`**: Esclude `categories` e `subcategories`.

---

27. **ProductSchema**
- **Descrizione**: Schema completo per rappresentare un prodotto (`Product`).
- **Campi**:
  - **`image`**: URL dell'immagine del prodotto.
- **Metodi**:
  - **`resolve_image`**: Fornisce un'immagine di default se il campo `image` è vuoto.
- **Config**:
  - **`model`**: `Product`.
  - **`model_fields`**: Include tutti i campi del modello.

---

28. **WalletProductSchema**
- **Descrizione**: Schema per rappresentare un prodotto di portafoglio (`WalletProduct`).
- **Config**:
  - **`model`**: `WalletProduct`.
  - **`model_fields`**: Include tutti i campi del modello.

---

29. **UserFleetSchema**
- **Descrizione**: Schema per rappresentare la relazione tra un utente e una flotta (`UserFleet`).
- **Config**:
  - **`model`**: `UserFleet`.
  - **`model_fields`**: Include tutti i campi del modello.

---

30. **UserDocumentSchema**
- **Descrizione**: Schema per rappresentare un documento utente (`UserDocument`).
- **Config**:
  - **`model`**: `UserDocument`.
  - **`model_fields`**: Include tutti i campi del modello.

---

31. **VehicleIssueSchema**
- **Descrizione**: Schema per rappresentare un problema del veicolo (`VehicleIssue`).
- **Config**:
  - **`model`**: `VehicleIssue`.
  - **`model_fields`**: Include tutti i campi del modello.

---

32. **MinuteUsageCostSchema**
- **Descrizione**: Schema per rappresentare i costi di utilizzo per minuto (`MinuteUsageCost`).
- **Config**:
  - **`model`**: `MinuteUsageCost`.
  - **`model_fields`**: Include tutti i campi del modello.

---

33. **KmUsageCostSchema**
- **Descrizione**: Schema per rappresentare i costi di utilizzo per chilometro (`KmUsageCost`).
- **Config**:
  - **`model`**: `KmUsageCost`.
  - **`model_fields`**: Include tutti i campi del modello.

---

34. **UsageCostSchema**
- **Descrizione**: Schema per rappresentare i costi di utilizzo (`UsageCost`), con relazioni a costi per minuto e chilometro.
- **Campi**:
  - **`model`**: Modello del veicolo associato.
  - **`minutes`**: Lista dei costi per minuto.
  - **`kms`**: Lista dei costi per chilometro.
- **Config**:
  - **`model`**: `UsageCost`.
  - **`model_fields`**: Include tutti i campi del modello.

---

35. **RoleSchema**
- **Descrizione**: Schema per rappresentare un ruolo utente (`Role`).
- **Config**:
  - **`model`**: `Role`.
  - **`model_fields`**: Include tutti i campi del modello.

---

36. **PlatformAttachmentSchema**
- **Descrizione**: Schema per rappresentare allegati di piattaforma (`PlatformAttachment`).
- **Config**:
  - **`model`**: `PlatformAttachment`.
  - **`model_fields`**: Include tutti i campi del modello.

---

37. **BaseResponse**
- **Descrizione**: Classe generica per rappresentare una risposta API.
- **Campi**:
  - **`response`**: Stringa che descrive lo stato della risposta.
  - **`content`**: Contenuto opzionale di tipo