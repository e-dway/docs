---
sidebar_position: 6
---

# Workflow

## Overview

Per poter inviare email per la comunicazione con gli utenti o inviare i codici otp per l'autenticazione si sfrutta la piattaforma open-source n8n

## Tecnologia

**n8n** è una piattaforma open-source per l'automazione dei workflow che consente di integrare e orchestrare diversi sistemi, API e servizi senza la necessità di scrivere codice complesso. È pensato per essere flessibile, personalizzabile e facile da usare, rendendolo ideale per automatizzare attività ripetitive o complesse.

---

### **Caratteristiche Principali**

1. **Automazione Multi-Servizio**:
   - Consente di connettere e automatizzare flussi di lavoro tra diverse piattaforme, come Google Sheets, Slack, GitHub, e oltre 300 integrazioni supportate.

2. **Interfaccia Low-Code/No-Code**:
   - Utilizza un editor visivo drag-and-drop per progettare workflow senza dover scrivere codice, ma permette comunque personalizzazioni con JavaScript.

3. **Supporto a API**:
   - Può interagire con qualsiasi API REST, anche se non è già supportata nativamente.

4. **Open-Source e Self-Hosted**:
   - È gratuito e puoi ospitarlo sui tuoi server per avere il pieno controllo dei dati.

5. **Trigger ed Eventi**:
   - Supporta webhook, timer, e trigger basati su eventi per avviare i workflow in modo dinamico.

6. **Espandibilità**:
   - Permette la creazione di nodi personalizzati per aggiungere nuove funzionalità o integrazioni.

---

### **Casi d’Uso**

1. **Automazione dei Processi Aziendali**:
   - Sincronizzazione dei dati tra CRM, ERP e strumenti di marketing.
   - Integrazione tra sistemi diversi senza bisogno di software intermedi.

2. **Notifiche e Allerta**:
   - Invia notifiche personalizzate su Slack, Telegram o email quando si verificano determinati eventi.

3. **Gestione dei Dati**:
   - Automatizza processi ETL (estrazione, trasformazione e caricamento dati) tra database e fogli di calcolo.

4. **Workflow per Sviluppatori**:
   - Automazione di attività come aggiornamenti di repository GitHub, creazione di issue o deployment automatico.

---

### **Come Funziona n8n**

1. **Trigger**:
   - I workflow iniziano con un evento (es. un nuovo messaggio su Slack, un webhook, un cron job).

2. **Nodi**:
   - Ogni passo del workflow è rappresentato da un nodo. I nodi possono essere azioni (es. invio di email) o elaborazioni (es. manipolazione dati).

3. **Flusso Visivo**:
   - Usa un editor visivo per collegare i nodi e definire il flusso logico del workflow.

---

### **Installazione di n8n**

#### **1. Utilizzo con Docker**
n8n può essere facilmente avviato con Docker:

```bash
docker run -d --name n8n -p 5678:5678 n8nio/n8n
```

- n8n sarà accessibile su [http://localhost:5678](http://localhost:5678).

#### **2. Self-Hosted**
Puoi installare n8n su un server Linux o in un ambiente cloud seguendo le istruzioni sul sito ufficiale.

#### **3. Cloud Hosting**
n8n offre un'opzione di hosting gestito, eliminando la necessità di configurazioni tecniche.

---

### **Esempio di Workflow**

#### Caso d'uso: Notifica Slack per nuovi dati in Google Sheets
1. **Trigger**:
   - Configura un nodo **Google Sheets** che monitora l'aggiunta di nuove righe.
2. **Azione**:
   - Aggiungi un nodo **Slack** per inviare un messaggio con i dati appena aggiunti.
3. **Flusso completo**:
   - Collegali e definisci la logica per trasformare i dati del foglio in un messaggio leggibile.

---

### **Vantaggi di n8n**

- **Risparmio di Tempo**:
   - Riduce i tempi necessari per configurare integrazioni e processi manuali.
- **Flessibilità**:
   - Può essere personalizzato per quasi ogni tipo di workflow.
- **Sicurezza**:
   - Self-hosted, quindi i dati rimangono sotto il controllo dell'utente.
- **Espandibilità**:
   - Permette di aggiungere nodi o utilizzare codice JavaScript per esigenze specifiche.

