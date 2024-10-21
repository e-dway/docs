"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4775],{3998:(e,i,d)=>{d.r(i),d.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>s});var l=d(4848),n=d(8453);const o={sidebar_position:4},r="payment Tables",t={id:"db/core/payments",title:"payment Tables",description:"core_payment",source:"@site/pages/db/core/payments.md",sourceDirName:"db/core",slug:"/db/core/payments",permalink:"/docs/pages/db/core/payments",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/pages/db/core/payments.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"dbSidebar",previous:{title:"vehicle",permalink:"/docs/pages/db/core/vehicle tables"}},c={},s=[{value:"core_payment",id:"core_payment",level:2},{value:"Descrizione",id:"descrizione",level:3},{value:"Campi",id:"campi",level:3},{value:"core_paymentgroup",id:"core_paymentgroup",level:2},{value:"Descrizione",id:"descrizione-1",level:3},{value:"Campi",id:"campi-1",level:3},{value:"core_paymentmodel",id:"core_paymentmodel",level:2},{value:"core_paymentmodeldetail",id:"core_paymentmodeldetail",level:2},{value:"core_paymentmodel_for_fleet",id:"core_paymentmodel_for_fleet",level:2},{value:"core_paymentmodel_for_type",id:"core_paymentmodel_for_type",level:2}];function a(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"payment-tables",children:"payment Tables"})}),"\n",(0,l.jsx)(i.h2,{id:"core_payment",children:"core_payment"}),"\n",(0,l.jsx)(i.h3,{id:"descrizione",children:"Descrizione"}),"\n",(0,l.jsx)(i.p,{children:"Traccia e gestisce i pagamenti effettuati dagli utenti per i servizi forniti, come l'uso di veicoli o altri servizi offerti dalla piattaforma. Questa tabella registra i dettagli di ogni transazione finanziaria."}),"\n",(0,l.jsx)(i.h3,{id:"campi",children:"Campi"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"id"}),": Identificatore univoco del pagamento."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"user_id"}),": Identificatore dell'utente che ha effettuato il pagamento. Collega l'utente che ha effettuato il pagamento alla tabella ",(0,l.jsx)(i.code,{children:"core_users"}),"."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"amount"}),": Importo totale del pagamento effettuato."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"currency"}),": Valuta in cui \xe8 stato effettuato il pagamento (es. EUR, USD)."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"payment_method"}),": Metodo utilizzato per il pagamento (es. carta di credito, PayPal, bonifico)."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"status"}),": Stato attuale del pagamento (es. completato, in sospeso, fallito)."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"transaction_id"}),": Identificatore della transazione, fornito dal fornitore del pagamento (es. banca o gateway di pagamento)."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"payment_date"}),": Data e ora in cui \xe8 stato effettuato il pagamento."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"description"}),": Descrizione opzionale del pagamento (ad esempio, il motivo del pagamento o dettagli aggiuntivi sulla transazione)."]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"Questa tabella consente di registrare e monitorare tutti i pagamenti effettuati dagli utenti, mantenendo traccia del metodo di pagamento utilizzato, dell'importo e dello stato di ogni transazione."}),"\n",(0,l.jsx)(i.h2,{id:"core_paymentgroup",children:"core_paymentgroup"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Descrizione"}),": La tabella ",(0,l.jsx)(i.code,{children:"core_paymentgroup"})," memorizza informazioni sui gruppi di pagamento, inclusi gli eventuali sconti o rimborsi associati. Questa tabella pu\xf2 essere utilizzata per definire diversi gruppi di pagamento con regole specifiche."]}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Campo"}),(0,l.jsx)(i.th,{children:"Tipo"}),(0,l.jsx)(i.th,{children:"Descrizione"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"id"})}),(0,l.jsx)(i.td,{children:"TEXT"}),(0,l.jsx)(i.td,{children:"Identificatore univoco del gruppo di pagamento (chiave primaria)."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"name"})}),(0,l.jsx)(i.td,{children:"TEXT"}),(0,l.jsx)(i.td,{children:"Nome del gruppo di pagamento, usato per descriverne lo scopo o il tipo."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"rebate_unlock"})}),(0,l.jsx)(i.td,{children:"BIGINT"}),(0,l.jsx)(i.td,{children:"Percentuale o importo di sconto associato allo sblocco del pagamento."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"rebate_book"})}),(0,l.jsx)(i.td,{children:"BIGINT"}),(0,l.jsx)(i.td,{children:"Percentuale o importo di sconto per la prenotazione."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"rebate_usage"})}),(0,l.jsx)(i.td,{children:"BIGINT"}),(0,l.jsx)(i.td,{children:"Percentuale o importo di sconto per l'utilizzo del servizio."})]})]})]}),"\n",(0,l.jsx)(i.p,{children:"Questa tabella \xe8 utile per gestire differenti condizioni di pagamento in base al gruppo di utenti o alle modalit\xe0 di prenotazione e utilizzo del servizio. Pu\xf2 essere utilizzata per ottimizzare gli incentivi e le strategie di pricing."}),"\n",(0,l.jsx)(i.h3,{id:"descrizione-1",children:"Descrizione"}),"\n",(0,l.jsx)(i.p,{children:"Gestisce i modelli di dispositivi IoT (Internet of Things) utilizzati per monitorare e controllare i veicoli o altre risorse in una flotta. Ogni modello IoT potrebbe avere caratteristiche specifiche come sensori, connettivit\xe0 e funzionalit\xe0 operative che vengono utilizzate per raccogliere dati o controllare i veicoli a distanza."}),"\n",(0,l.jsx)(i.h3,{id:"campi-1",children:"Campi"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"id"}),": Identificatore univoco del modello di dispositivo IoT."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"name"}),": Nome del modello IoT (ad esempio, il nome del dispositivo o della marca)."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"manufacturer"}),": Nome del produttore del dispositivo IoT."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"hardware_version"}),": Versione hardware del dispositivo IoT."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"firmware_version"}),": Versione del firmware installato sul dispositivo IoT."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"supported_features"}),": Lista o descrizione delle funzionalit\xe0 supportate dal dispositivo IoT (ad esempio, GPS, monitoraggio del carburante, controllo remoto del veicolo)."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"description"}),": Descrizione del modello IoT, che spiega il suo utilizzo, le sue capacit\xe0 o altre informazioni utili."]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"Questa tabella consente di gestire e descrivere i vari modelli di dispositivi IoT utilizzati nella flotta, fornendo informazioni sulle capacit\xe0 tecniche e operative di ciascun modello per aiutare nella gestione e nel monitoraggio dei veicoli o delle risorse associate."}),"\n",(0,l.jsx)(i.h2,{id:"core_paymentmodel",children:"core_paymentmodel"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Descrizione"}),": La tabella ",(0,l.jsx)(i.code,{children:"core_paymentmodel"})," gestisce i vari modelli di pagamento disponibili per il sistema. Ogni modello pu\xf2 avere caratteristiche specifiche come tariffe di sblocco, costi per unit\xe0 di tempo e modalit\xe0 di addebito, che consentono di definire diverse opzioni di pricing per i servizi."]}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Campo"}),(0,l.jsx)(i.th,{children:"Tipo"}),(0,l.jsx)(i.th,{children:"Descrizione"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"id"})}),(0,l.jsx)(i.td,{children:"TEXT"}),(0,l.jsx)(i.td,{children:"Identificatore univoco del modello di pagamento (chiave primaria)."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"is_default"})}),(0,l.jsx)(i.td,{children:"BOOLEAN"}),(0,l.jsxs)(i.td,{children:["Indica se il modello di pagamento \xe8 quello predefinito nel sistema (",(0,l.jsx)(i.code,{children:"TRUE"})," o ",(0,l.jsx)(i.code,{children:"FALSE"}),")."]})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"name"})}),(0,l.jsx)(i.td,{children:"TEXT"}),(0,l.jsx)(i.td,{children:"Nome del modello di pagamento, usato per identificarlo o descriverlo."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"unlock_fee"})}),(0,l.jsx)(i.td,{children:"REAL"}),(0,l.jsx)(i.td,{children:"Tariffa associata allo sblocco di un servizio o veicolo."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"unlock_amount"})}),(0,l.jsx)(i.td,{children:"BIGINT"}),(0,l.jsx)(i.td,{children:"Quantit\xe0 richiesta per lo sblocco."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"price"})}),(0,l.jsx)(i.td,{children:"REAL"}),(0,l.jsx)(i.td,{children:"Prezzo base per l'utilizzo del servizio, solitamente calcolato per unit\xe0 di tempo."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"autostart"})}),(0,l.jsx)(i.td,{children:"BOOLEAN"}),(0,l.jsxs)(i.td,{children:["Indica se il modello di pagamento prevede l'avvio automatico (",(0,l.jsx)(i.code,{children:"TRUE"})," o ",(0,l.jsx)(i.code,{children:"FALSE"}),")."]})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"charge_mode"})}),(0,l.jsx)(i.td,{children:"TEXT"}),(0,l.jsx)(i.td,{children:'Modalit\xe0 di addebito (es. "per minuto", "per ora").'})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"owner_id"})}),(0,l.jsx)(i.td,{children:"UUID"}),(0,l.jsxs)(i.td,{children:["Identificatore del proprietario a cui \xe8 associato questo modello di pagamento (",(0,l.jsx)(i.code,{children:"core_ownerships"}),")."]})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"time_unit"})}),(0,l.jsx)(i.td,{children:"BIGINT"}),(0,l.jsx)(i.td,{children:"Unit\xe0 di tempo utilizzata per calcolare il prezzo (es. minuti, ore)."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"active"})}),(0,l.jsx)(i.td,{children:"BOOLEAN"}),(0,l.jsxs)(i.td,{children:["Indica se il modello di pagamento \xe8 attivo (",(0,l.jsx)(i.code,{children:"TRUE"})," o ",(0,l.jsx)(i.code,{children:"FALSE"}),")."]})]})]})]}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Indici e vincoli"}),":"]}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Indice"}),": ",(0,l.jsx)(i.code,{children:"idx_19908_core_paymentmodel_owner_id_d3aafa21"})," per il campo ",(0,l.jsx)(i.code,{children:"owner_id"})," per ottimizzare le ricerche."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Vincolo di chiave esterna"}),": ",(0,l.jsx)(i.code,{children:"owner_id"})," fa riferimento alla tabella ",(0,l.jsx)(i.code,{children:"core_ownerships"}),", campo ",(0,l.jsx)(i.code,{children:"ident"}),", per garantire l'integrit\xe0 referenziale."]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"Questa tabella permette di gestire vari modelli di pagamento, consentendo di differenziare le modalit\xe0 e i costi di utilizzo dei servizi offerti, adattandosi a diverse esigenze dei clienti o strategie aziendali."}),"\n",(0,l.jsx)(i.h2,{id:"core_paymentmodeldetail",children:"core_paymentmodeldetail"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Descrizione"}),": La tabella ",(0,l.jsx)(i.code,{children:"core_paymentmodeldetail"})," contiene dettagli aggiuntivi relativi ai vari modelli di pagamento definiti nella tabella ",(0,l.jsx)(i.code,{children:"core_paymentmodel"}),". Ogni riga rappresenta un dettaglio specifico che arricchisce la definizione del modello di pagamento principale."]}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Campo"}),(0,l.jsx)(i.th,{children:"Tipo"}),(0,l.jsx)(i.th,{children:"Descrizione"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"id"})}),(0,l.jsx)(i.td,{children:"SERIAL"}),(0,l.jsx)(i.td,{children:"Identificatore univoco per ogni dettaglio del modello di pagamento (chiave primaria)."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"model_id"})}),(0,l.jsx)(i.td,{children:"TEXT"}),(0,l.jsxs)(i.td,{children:["Identificatore del modello di pagamento a cui questo dettaglio \xe8 associato. Collegato a ",(0,l.jsx)(i.code,{children:"core_paymentmodel"}),"."]})]})]})]}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Indici e vincoli"}),":"]}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Indice"}),": ",(0,l.jsx)(i.code,{children:"idx_19829_core_paymentmodeldetail_model_id_c478ce97"})," sul campo ",(0,l.jsx)(i.code,{children:"model_id"})," per ottimizzare le ricerche basate sull'identificatore del modello."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Vincolo di chiave esterna"}),": Il campo ",(0,l.jsx)(i.code,{children:"model_id"})," fa riferimento alla tabella ",(0,l.jsx)(i.code,{children:"core_paymentmodel"})," (",(0,l.jsx)(i.code,{children:"id"}),"), per garantire l'integrit\xe0 referenziale tra i dettagli e il modello di pagamento principale."]}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["Questa tabella viene utilizzata per gestire informazioni aggiuntive relative ai modelli di pagamento, consentendo di estendere le specifiche e i parametri dei modelli definiti nella tabella principale ",(0,l.jsx)(i.code,{children:"core_paymentmodel"}),"."]}),"\n",(0,l.jsx)(i.h2,{id:"core_paymentmodel_for_fleet",children:"core_paymentmodel_for_fleet"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Descrizione"}),": La tabella ",(0,l.jsx)(i.code,{children:"core_paymentmodel_for_fleet"})," associa i modelli di pagamento alle flotte di veicoli. Ogni associazione consente di specificare un modello di pagamento per una determinata flotta, permettendo flessibilit\xe0 nella gestione delle tariffe per flotte diverse."]}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Campo"}),(0,l.jsx)(i.th,{children:"Tipo"}),(0,l.jsx)(i.th,{children:"Descrizione"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"id"})}),(0,l.jsx)(i.td,{children:"SERIAL"}),(0,l.jsx)(i.td,{children:"Identificatore univoco dell'associazione (chiave primaria)."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"paymentmodel_id"})}),(0,l.jsx)(i.td,{children:"TEXT"}),(0,l.jsxs)(i.td,{children:["Identificatore del modello di pagamento associato, collegato alla tabella ",(0,l.jsx)(i.code,{children:"core_paymentmodel"}),"."]})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"fleet_id"})}),(0,l.jsx)(i.td,{children:"UUID"}),(0,l.jsxs)(i.td,{children:["Identificatore della flotta, collegato alla tabella ",(0,l.jsx)(i.code,{children:"core_fleet"}),"."]})]})]})]}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Indici e vincoli"}),":"]}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Indici"}),":","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"idx_19820_core_paymentmodel_for_fleet_fleet_id_dcba21ee"})," sul campo ",(0,l.jsx)(i.code,{children:"fleet_id"}),"."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"idx_19820_core_paymentmodel_for_fleet_paymentmodel_id_4280bf93"})," sul campo ",(0,l.jsx)(i.code,{children:"paymentmodel_id"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Vincolo di unicit\xe0"}),":","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"idx_19820_core_paymentmodel_for_fleet_paymentmodel_id_fleet_id_"})," assicura che la combinazione ",(0,l.jsx)(i.code,{children:"paymentmodel_id"})," e ",(0,l.jsx)(i.code,{children:"fleet_id"})," sia unica."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Vincoli di chiave esterna"}),":","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"paymentmodel_id"})," fa riferimento alla tabella ",(0,l.jsx)(i.code,{children:"core_paymentmodel"})," (",(0,l.jsx)(i.code,{children:"id"}),")."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"fleet_id"})," fa riferimento alla tabella ",(0,l.jsx)(i.code,{children:"core_fleet"})," (",(0,l.jsx)(i.code,{children:"id"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"Questa tabella permette di associare un modello di pagamento specifico a una flotta di veicoli, consentendo una gestione pi\xf9 precisa delle tariffe per diverse flotte."}),"\n",(0,l.jsx)(i.hr,{}),"\n",(0,l.jsx)(i.h2,{id:"core_paymentmodel_for_type",children:"core_paymentmodel_for_type"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Descrizione"}),": La tabella ",(0,l.jsx)(i.code,{children:"core_paymentmodel_for_type"})," associa i modelli di pagamento ai tipi di veicoli. Questa associazione consente di specificare un modello di pagamento per ogni tipo di veicolo, offrendo flessibilit\xe0 nella gestione delle tariffe per veicoli diversi."]}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Campo"}),(0,l.jsx)(i.th,{children:"Tipo"}),(0,l.jsx)(i.th,{children:"Descrizione"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"id"})}),(0,l.jsx)(i.td,{children:"SERIAL"}),(0,l.jsx)(i.td,{children:"Identificatore univoco dell'associazione (chiave primaria)."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"paymentmodel_id"})}),(0,l.jsx)(i.td,{children:"TEXT"}),(0,l.jsxs)(i.td,{children:["Identificatore del modello di pagamento associato, collegato alla tabella ",(0,l.jsx)(i.code,{children:"core_paymentmodel"}),"."]})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"vehicletype_id"})}),(0,l.jsx)(i.td,{children:"TEXT"}),(0,l.jsxs)(i.td,{children:["Identificatore del tipo di veicolo, collegato alla tabella ",(0,l.jsx)(i.code,{children:"core_vehicletype"}),"."]})]})]})]}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Indici e vincoli"}),":"]}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Indici"}),":","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"idx_19853_core_paymentmodel_for_type_paymentmodel_id_e0b77206"})," sul campo ",(0,l.jsx)(i.code,{children:"paymentmodel_id"}),"."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"idx_19853_core_paymentmodel_for_type_vehicletype_id_f8412410"})," sul campo ",(0,l.jsx)(i.code,{children:"vehicletype_id"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Vincolo di unicit\xe0"}),":","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"idx_19853_core_paymentmodel_for_type_paymentmodel_id_vehicletyp"})," assicura che la combinazione ",(0,l.jsx)(i.code,{children:"paymentmodel_id"})," e ",(0,l.jsx)(i.code,{children:"vehicletype_id"})," sia unica."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Vincoli di chiave esterna"}),":","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"paymentmodel_id"})," fa riferimento alla tabella ",(0,l.jsx)(i.code,{children:"core_paymentmodel"})," (",(0,l.jsx)(i.code,{children:"id"}),")."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"vehicletype_id"})," fa riferimento alla tabella ",(0,l.jsx)(i.code,{children:"core_vehicletype"})," (",(0,l.jsx)(i.code,{children:"name"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"Questa tabella permette di associare i modelli di pagamento ai tipi di veicoli, consentendo di gestire tariffe diverse in base alla categoria del veicolo."})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,i,d)=>{d.d(i,{R:()=>r,x:()=>t});var l=d(6540);const n={},o=l.createContext(n);function r(e){const i=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),l.createElement(o.Provider,{value:i},e.children)}}}]);