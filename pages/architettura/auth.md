---
sidebar_position: 5
---

# Autenticazione

## Overview

L'autenticazione sia lato app mobile che lato backoffice operatori avviene tramite questo servizio centralizzato che si basa su Keycloak 

## Tecnologia

**Keycloak** è una piattaforma open-source per la gestione di identità e accessi (**Identity and Access Management - IAM**) sviluppata da Red Hat. È progettata per gestire l'autenticazione e l'autorizzazione degli utenti in applicazioni moderne, consentendo un'integrazione semplice e sicura con servizi e sistemi.

---

### **Caratteristiche Principali di Keycloak**

1. **Single Sign-On (SSO)**:
   - Gli utenti possono accedere a più applicazioni con una sola autenticazione.

2. **Autenticazione e Autorizzazione**:
   - Supporta standard moderni come **OAuth 2.0**, **OpenID Connect** e **SAML 2.0** per la gestione sicura degli accessi.

3. **Gestione degli Utenti**:
   - Fornisce strumenti per gestire utenti, ruoli e gruppi tramite una console amministrativa o API.

4. **Federazione di Identità**:
   - Si integra con provider di identità esterni come LDAP, Active Directory, o social login (Google, Facebook, ecc.).

5. **Autenticazione Multi-Fattore (MFA)**:
   - Supporta l'autenticazione a più fattori per una sicurezza avanzata.

6. **Personalizzazione**:
   - Consente di personalizzare le pagine di login e i flussi di autenticazione per adattarsi al brand.

7. **Accesso alle API**:
   - Genera e gestisce token per proteggere le API utilizzando OAuth 2.0.

8. **Estendibilità**:
   - Può essere esteso con **Service Provider Interfaces (SPI)** per aggiungere funzionalità personalizzate.

---

### **Come Funziona Keycloak**

1. **Realm**:
   - Una partizione logica che gestisce utenti, gruppi e applicazioni. Puoi avere più realm per separare ambienti o organizzazioni.

2. **Client**:
   - Rappresenta un'applicazione che utilizza Keycloak per l'autenticazione e l'autorizzazione.

3. **Token**:
   - Usa token JWT per autenticare e autorizzare gli utenti. I token includono informazioni sull'utente, come ruoli e permessi.

4. **Ruoli e Gruppi**:
   - **Ruoli**: Specificano i permessi per un utente.
   - **Gruppi**: Consentono di organizzare utenti con ruoli e permessi comuni.

---

### **Vantaggi di Keycloak**

1. **Open-Source**:
   - Gratuito e supportato da una vasta community.
2. **Supporto a Standard Moderni**:
   - Garantisce compatibilità con le tecnologie e i protocolli più diffusi.
3. **Facilità di Integrazione**:
   - Semplifica l'aggiunta di autenticazione e autorizzazione in applicazioni esistenti.
4. **Scalabilità**:
   - Adatto a organizzazioni di qualsiasi dimensione, dalle startup alle grandi aziende.

