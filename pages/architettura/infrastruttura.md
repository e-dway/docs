---
sidebar_position: 1
---

# Infrastruttura

## Overview

Tutti i servizi presenti all'interno dell'enviroment edway sono contenuti in contenitori docker che vengono ospitati e gestite ed orchestrati da DockerSwarm.  
Tali cluster vengono monitorati attraverso il software Swarmpit

## Tecnologia

**Docker Swarm** è uno strumento integrato in Docker che consente di creare e gestire cluster di container Docker. È una modalità di orchestrazione nativa di Docker, progettata per distribuire container su più nodi in modo scalabile e affidabile.

---

### **Caratteristiche di Docker Swarm**

1. **Orchestrazione dei Container**:
   - Automatizza il deployment, la gestione e il ridimensionamento dei container su un cluster di nodi.

2. **Alta Disponibilità**:
   - Gestisce automaticamente il failover. Se un nodo o un container si guasta, Docker Swarm ridistribuisce i container su nodi disponibili.

3. **Load Balancing**:
   - Distribuisce automaticamente il traffico tra i container in esecuzione sul cluster.

4. **Scalabilità**:
   - Permette di scalare facilmente i servizi aumentando o diminuendo il numero di container.

5. **Sicurezza Integrata**:
   - Comunicazione tra nodi crittografata tramite TLS.
   - Consente l'uso di certificati per l'autenticazione.

6. **Nativo di Docker**:
   - Non richiede strumenti aggiuntivi. Utilizza lo stesso client Docker e formato `docker-compose.yml`.

7. **Overlay Network**:
   - Consente la comunicazione tra container distribuiti su nodi diversi.

---

### **Architettura di Docker Swarm**

1. **Manager Node**:
   - Coordina il cluster.
   - Gestisce lo stato desiderato del cluster e distribuisce i carichi di lavoro.

2. **Worker Node**:
   - Esegue i container assegnati dal nodo Manager.

3. **Service**:
   - Definisce un'applicazione composta da uno o più container con configurazioni specifiche.

4. **Task**:
   - Un'istanza specifica di un container associato a un servizio, distribuita su un nodo.


**Swarmpit** è un'interfaccia web open-source per la gestione dei cluster Docker Swarm. È progettato per semplificare l'amministrazione e il monitoraggio di container, stack e servizi eseguiti in un cluster Docker Swarm, offrendo un'alternativa grafica agli strumenti CLI.

---

### **Caratteristiche Principali**

1. **Gestione Centralizzata dei Cluster**:
   - Consente di monitorare e amministrare stack, servizi, nodi, volumi e reti da un'unica interfaccia.

2. **Visualizzazione in Tempo Reale**:
   - Mostra lo stato dei nodi, l'utilizzo delle risorse (CPU, memoria, disco) e le informazioni sui container in tempo reale.

3. **Gestione di Stack e Servizi**:
   - Puoi creare, aggiornare e rimuovere stack e servizi direttamente dall'interfaccia.

4. **Supporto Multi-utente**:
   - Consente l'accesso a più utenti per la gestione collaborativa dei cluster Docker Swarm.

5. **Integrazione con Docker Registry**:
   - Permette di collegare repository di immagini pubbliche e private per facilitare il deployment.

6. **Sicurezza**:
   - Consente l'uso di credenziali per gestire l'accesso agli stack e ai nodi.

7. **Interfaccia Intuitiva**:
   - Un'interfaccia moderna e semplice da usare, progettata per migliorare l'usabilità.

---

### **Come Installare Swarmpit**

#### **Prerequisiti**
- Docker e Swarm devono essere configurati sul tuo server.
- Un cluster Docker Swarm inizializzato.

#### **Installazione**

##### **Installazione Standard**
1. Esegui il comando seguente sul nodo manager del tuo cluster:
   ```bash
   docker run -it --rm \
       --name swarmpit-installer \
       --volume /var/run/docker.sock:/var/run/docker.sock \
       swarmpit/install:latest
   ```
2. Questo comando installerà Swarmpit e configurerà automaticamente i servizi richiesti.

##### **Stack Docker Compose**
Puoi anche installare Swarmpit usando uno stack Docker Compose.

1. Crea un file `docker-compose.yml`:
   ```yaml
   version: '3.3'
   services:
     swarmpit:
       image: swarmpit/swarmpit:latest
       ports:
         - "888:8080"
       volumes:
         - /var/run/docker.sock:/var/run/docker.sock
   ```

2. Esegui il comando per avviare lo stack:
   ```bash
   docker stack deploy -c docker-compose.yml swarmpit
   ```

---

### **Accesso a Swarmpit**
Dopo l'installazione:
- Apri un browser e naviga su `http://<IP-DEL-NODO>:888`.
- Accedi all'interfaccia di gestione.

---

### **Utilizzo di Swarmpit**

1. **Monitoraggio**:
   - Visualizza lo stato dei nodi, le risorse utilizzate e le statistiche dei container in tempo reale.

2. **Gestione di Stack e Servizi**:
   - Crea, aggiorna o elimina stack e servizi utilizzando l'interfaccia grafica.

3. **Integrazione con Registri**:
   - Configura Docker Hub o registri privati per caricare immagini facilmente.

4. **Gestione Multi-utente**:
   - Configura utenti con permessi diversi per accedere al cluster.

---

### **Vantaggi di Swarmpit**

- **Facilità d'Uso**:
   - Non è necessario utilizzare solo la CLI; l'interfaccia rende tutto più accessibile.
- **Open-Source**:
   - Gratuito e modificabile secondo le necessità.
- **Monitoraggio in Tempo Reale**:
   - Ideale per mantenere il controllo su cluster complessi.
- **Leggero**:
   - Non richiede molte risorse per funzionare.

