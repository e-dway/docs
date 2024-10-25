---
sidebar_position: 2
---

# Autenticazione e Registrazione

Questo file Python implementa le rotte di autenticazione e registrazione di un'API utilizzando **FastAPI**.

## 1. **Importazioni Principali**
Il file importa una serie di moduli essenziali per l'API:

- **FastAPI**: Framework utilizzato per la creazione dell'API.
- **pydantic**: Per la validazione dei dati in modo tipizzato.
- **Requests**: Libreria per effettuare richieste HTTP esterne.
- **JWT**: Per la gestione dei token JWT per l'autenticazione.
- **Dateutil**: Utilizzata per la gestione di date e scadenze.
- **dotenv**: Per caricare le variabili d'ambiente da un file `.env`.

## 2. **Variabili d'Ambiente**
Il file carica una serie di variabili d'ambiente essenziali per il funzionamento dell'API:

- **KEYCLOAK_SERVER**: URL del server Keycloak per la gestione degli utenti.
- **PERMISSIONS_API**, **VEHICLES_API**, **BOT_API**: URL dei servizi di backend associati.
- **SMTP_EMAIL_SERVER_***: Configurazione del server SMTP per l'invio di email.

## 3. **Rotte Principali**

### `/validate/{email}/{code}`
Questa rotta permette di validare un indirizzo email in base al codice di verifica inviato.

### `/register/template`
Restituisce un template di campi necessari per registrare un nuovo utente.

### `/register`
Questa rotta permette di registrare un nuovo utente. Valida i dati forniti nel payload e verifica che l'utente abbia accettato i termini legali e la privacy. Esegue anche controlli come l'età minima dell'utente.

### `/del`
Permette di eliminare un utente tramite un'operazione amministrativa.

### `/reset`
Permette di resettare la password dell'utente, generando una nuova password temporanea e inviandola all'utente tramite SMS o email.

### `/otp`
Questa rotta gestisce la verifica tramite OTP (One Time Password). Il processo prevede la decodifica e validazione dell'OTP ricevuto.

### `/login`
Permette il login di un utente utilizzando credenziali standard o un token OTP. Se le credenziali sono valide, restituisce un token JWT.

### `/telegram`
Gestisce l'autenticazione tramite Telegram, richiedendo informazioni sul'utente e completando la procedura di autenticazione.

### `/logout`
Disconnette l'utente, invalidando il token di accesso corrente.

### `/send_registration_email`
Invia un'email di conferma registrazione all'utente. Il link nell'email contiene un token JWT per la verifica dell'indirizzo email.

### `/verify_registration_email`
Verifica il token contenuto nell'email di registrazione e conferma l'indirizzo email dell'utente.

### `/refresh`
Permette di rinnovare un token di accesso JWT tramite un token di refresh.

## 4. **Funzioni Principali**

### `generateOTP(itms=6)`
Genera una OTP (One Time Password) casuale composta da numeri.

### `get_token()`
Effettua una richiesta al server Keycloak per ottenere un token di accesso.

### `become_admin()`
Restituisce un header con il token di accesso di un amministratore per effettuare richieste amministrative.

### `register_user(username, password, email, firstname, lastname)`
Registra un nuovo utente su Keycloak creando l'utente con i parametri forniti.

### `send_email(recipient, subject, text, html)`
Invia un'email tramite un server SMTP con i parametri forniti (destinatario, oggetto, testo e HTML).

## 5. **Autenticazione con Keycloak**
Il file integra **Keycloak** per la gestione dell'autenticazione e dell'autorizzazione. Utilizza le API di Keycloak per:
- Creare e gestire utenti.
- Resettare le password.
- Verificare l'identità degli utenti con i token JWT.

## 6. **Gestione delle OTP**
Le OTP vengono utilizzate in più rotte, sia per la registrazione che per la verifica degli utenti. L'implementazione prevede:
- La generazione di OTP.
- L'invio delle OTP via SMS o email.
- La verifica della validità delle OTP fornite.

## 7. **Integrazione con Stripe**
Durante la registrazione, se l'utente appartiene a un cliente che utilizza **Stripe** come sistema di pagamento, viene creato un cliente su Stripe utilizzando l'API di Stripe.

## 8. **Funzioni di Sicurezza**
- **Criptazione**: Viene utilizzato il modulo **Fernet** per criptare i token e le OTP.
- **Verifica dei token JWT**: Utilizzato per autenticare gli utenti e garantire che le richieste siano effettuate da utenti autenticati.

---

Questo file fornisce una solida infrastruttura per la gestione di utenti, autenticazione e registrazione tramite FastAPI e Keycloak. Le funzioni di sicurezza come l'integrazione con JWT, OTP e Stripe garantiscono che l'API sia sicura e scalabile.
