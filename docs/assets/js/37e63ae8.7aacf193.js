"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[831],{8409:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var l=n(4848),t=n(8453);const a={sidebar_position:3},s="Fleet Management",r={id:"api/fleet",title:"Fleet Management",description:"Questo file implementa le rotte per la gestione delle flotte di veicoli utilizzando FastAPI. Di seguito viene fornita una descrizione dettagliata delle funzionalit\xe0 e delle rotte implementate.",source:"@site/pages/api/fleet.md",sourceDirName:"api",slug:"/api/fleet",permalink:"/docs/pages/api/fleet",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/pages/api/fleet.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apiSidebar",previous:{title:"Autenticazione e Registrazione",permalink:"/docs/pages/api/auth"}},o={},d=[{value:"1. <strong>Importazioni Principali</strong>",id:"1-importazioni-principali",level:2},{value:"2. <strong>Variabili d&#39;Ambiente</strong>",id:"2-variabili-dambiente",level:2},{value:"3. <strong>Caching con Redis</strong>",id:"3-caching-con-redis",level:2},{value:"4. <strong>Rotte Principali</strong>",id:"4-rotte-principali",level:2},{value:"<code>/</code> (GET)",id:"-get",level:3},{value:"<code>/areas.geojson</code> (GET)",id:"areasgeojson-get",level:3},{value:"<code>/markers.geojson</code> (GET)",id:"markersgeojson-get",level:3},{value:"<code>/{client_id}/areas.geojson</code> (GET)",id:"client_idareasgeojson-get",level:3},{value:"<code>/{fleet}</code> (GET)",id:"fleet-get",level:3},{value:"<code>/{fleet}</code> (POST)",id:"fleet-post",level:3},{value:"<code>/{fleet}/areas</code> (GET)",id:"fleetareas-get",level:3},{value:"<code>/{fleet}/areas</code> (POST)",id:"fleetareas-post",level:3},{value:"<code>/{fleet}/areas</code> (PUT)",id:"fleetareas-put",level:3},{value:"<code>/{fleet}/areas</code> (DELETE)",id:"fleetareas-delete",level:3},{value:"<code>/{fleet}/{id}/accept</code> (POST)",id:"fleetidaccept-post",level:3},{value:"<code>/{fleet}/{id}/refuse</code> (POST)",id:"fleetidrefuse-post",level:3},{value:"<code>/imgs/{client}/fleets/{fleet}/{version}</code> (GET)",id:"imgsclientfleetsfleetversion-get",level:3},{value:"5. <strong>Gestione dei Dati GeoJSON</strong>",id:"5-gestione-dei-dati-geojson",level:2},{value:"6. <strong>Funzioni di Supporto</strong>",id:"6-funzioni-di-supporto",level:2},{value:"7. <strong>Conclusione</strong>",id:"7-conclusione",level:2}];function c(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"fleet-management",children:"Fleet Management"})}),"\n",(0,l.jsxs)(i.p,{children:["Questo file implementa le rotte per la gestione delle flotte di veicoli utilizzando ",(0,l.jsx)(i.strong,{children:"FastAPI"}),". Di seguito viene fornita una descrizione dettagliata delle funzionalit\xe0 e delle rotte implementate."]}),"\n",(0,l.jsxs)(i.h2,{id:"1-importazioni-principali",children:["1. ",(0,l.jsx)(i.strong,{children:"Importazioni Principali"})]}),"\n",(0,l.jsx)(i.p,{children:"Il file utilizza le seguenti librerie e moduli:"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"FastAPI"}),": Per creare l'API."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Pydantic"}),": Per la validazione dei dati tramite modelli."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Requests"}),": Per fare richieste HTTP verso altri servizi."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Redis"}),": Per la gestione della cache."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"PIL"})," (Pillow): Per la gestione delle immagini."]}),"\n"]}),"\n",(0,l.jsxs)(i.h2,{id:"2-variabili-dambiente",children:["2. ",(0,l.jsx)(i.strong,{children:"Variabili d'Ambiente"})]}),"\n",(0,l.jsx)(i.p,{children:"Il file utilizza le seguenti variabili d'ambiente:"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"FLEETS_API"}),": URL dell'API che fornisce i dati relativi alle flotte di veicoli."]}),"\n"]}),"\n",(0,l.jsxs)(i.h2,{id:"3-caching-con-redis",children:["3. ",(0,l.jsx)(i.strong,{children:"Caching con Redis"})]}),"\n",(0,l.jsxs)(i.p,{children:["Il file utilizza un'istanza di ",(0,l.jsx)(i.strong,{children:"Redis"})," per memorizzare in cache i dati relativi alle aree delle flotte, migliorando le prestazioni riducendo le chiamate esterne."]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-python",children:"CACHE = redis.Redis(host='195.154.83.61', port=\"7009\", decode_responses=True)\n"})}),"\n",(0,l.jsxs)(i.h2,{id:"4-rotte-principali",children:["4. ",(0,l.jsx)(i.strong,{children:"Rotte Principali"})]}),"\n",(0,l.jsxs)(i.h3,{id:"-get",children:[(0,l.jsx)(i.code,{children:"/"})," (GET)"]}),"\n",(0,l.jsx)(i.p,{children:"Restituisce un elenco delle flotte disponibili."}),"\n",(0,l.jsxs)(i.h3,{id:"areasgeojson-get",children:[(0,l.jsx)(i.code,{children:"/areas.geojson"})," (GET)"]}),"\n",(0,l.jsxs)(i.p,{children:["Restituisce un file ",(0,l.jsx)(i.strong,{children:"GeoJSON"})," contenente le aree relative alla flotta. Questo include informazioni come la possibilit\xe0 di parcheggiare e la velocit\xe0 massima consentita. L'output include anche il colore da applicare a ciascuna area, in base ai parametri ricevuti."]}),"\n",(0,l.jsxs)(i.h3,{id:"markersgeojson-get",children:[(0,l.jsx)(i.code,{children:"/markers.geojson"})," (GET)"]}),"\n",(0,l.jsx)(i.p,{children:"Restituisce i marker relativi ai veicoli all'interno delle flotte, filtrando i risultati in base alla posizione dell'utente."}),"\n",(0,l.jsxs)(i.h3,{id:"client_idareasgeojson-get",children:[(0,l.jsx)(i.code,{children:"/{client_id}/areas.geojson"})," (GET)"]}),"\n",(0,l.jsxs)(i.p,{children:["Restituisce i dati delle aree per una specifica flotta, utilizzando il parametro ",(0,l.jsx)(i.code,{children:"client_id"}),"."]}),"\n",(0,l.jsxs)(i.h3,{id:"fleet-get",children:[(0,l.jsx)(i.code,{children:"/{fleet}"})," (GET)"]}),"\n",(0,l.jsxs)(i.p,{children:["Restituisce le informazioni relative a una specifica flotta identificata da ",(0,l.jsx)(i.code,{children:"fleet"}),"."]}),"\n",(0,l.jsxs)(i.h3,{id:"fleet-post",children:[(0,l.jsx)(i.code,{children:"/{fleet}"})," (POST)"]}),"\n",(0,l.jsx)(i.p,{children:"Permette di attivare una specifica flotta inviando una richiesta POST con i dati dell'utente."}),"\n",(0,l.jsxs)(i.h3,{id:"fleetareas-get",children:[(0,l.jsx)(i.code,{children:"/{fleet}/areas"})," (GET)"]}),"\n",(0,l.jsx)(i.p,{children:"Restituisce le aree relative a una specifica flotta."}),"\n",(0,l.jsxs)(i.h3,{id:"fleetareas-post",children:[(0,l.jsx)(i.code,{children:"/{fleet}/areas"})," (POST)"]}),"\n",(0,l.jsx)(i.p,{children:"Aggiunge nuove aree a una specifica flotta."}),"\n",(0,l.jsxs)(i.h3,{id:"fleetareas-put",children:[(0,l.jsx)(i.code,{children:"/{fleet}/areas"})," (PUT)"]}),"\n",(0,l.jsx)(i.p,{children:"Aggiorna le informazioni relative a una specifica area all'interno della flotta."}),"\n",(0,l.jsxs)(i.h3,{id:"fleetareas-delete",children:[(0,l.jsx)(i.code,{children:"/{fleet}/areas"})," (DELETE)"]}),"\n",(0,l.jsx)(i.p,{children:"Elimina le informazioni relative a una specifica area all'interno della flotta."}),"\n",(0,l.jsxs)(i.h3,{id:"fleetidaccept-post",children:[(0,l.jsx)(i.code,{children:"/{fleet}/{id}/accept"})," (POST)"]}),"\n",(0,l.jsx)(i.p,{children:"Accetta la richiesta di attivazione di una flotta."}),"\n",(0,l.jsxs)(i.h3,{id:"fleetidrefuse-post",children:[(0,l.jsx)(i.code,{children:"/{fleet}/{id}/refuse"})," (POST)"]}),"\n",(0,l.jsx)(i.p,{children:"Rifiuta la richiesta di attivazione di una flotta."}),"\n",(0,l.jsxs)(i.h3,{id:"imgsclientfleetsfleetversion-get",children:[(0,l.jsx)(i.code,{children:"/imgs/{client}/fleets/{fleet}/{version}"})," (GET)"]}),"\n",(0,l.jsxs)(i.p,{children:["Genera e restituisce un'immagine PNG contenente l'icona della flotta specificata. Utilizza il modulo ",(0,l.jsx)(i.strong,{children:"Pillow"})," per sovrapporre un'icona alla flotta."]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-python",children:"from PIL import Image\nimport io\n"})}),"\n",(0,l.jsxs)(i.p,{children:["Questa rotta gestisce le immagini di flotte e permette di ottenere un'icona personalizzata della flotta richiesta. Viene utilizzato ",(0,l.jsx)(i.strong,{children:"Pillow"})," per manipolare l'immagine."]}),"\n",(0,l.jsxs)(i.h2,{id:"5-gestione-dei-dati-geojson",children:["5. ",(0,l.jsx)(i.strong,{children:"Gestione dei Dati GeoJSON"})]}),"\n",(0,l.jsxs)(i.p,{children:["Il file include il supporto per la gestione dei dati in formato ",(0,l.jsx)(i.strong,{children:"GeoJSON"})," per visualizzare aree e marker su una mappa. I dati GeoJSON contengono informazioni spaziali come coordinate, velocit\xe0 e zone di parcheggio."]}),"\n",(0,l.jsxs)(i.h2,{id:"6-funzioni-di-supporto",children:["6. ",(0,l.jsx)(i.strong,{children:"Funzioni di Supporto"})]}),"\n",(0,l.jsx)(i.p,{children:"Il file include una serie di funzioni di supporto per gestire l'autenticazione dell'utente e recuperare informazioni dal backend. Queste funzioni sono utilizzate per autenticare l'utente e per gestire i dati della flotta."}),"\n",(0,l.jsxs)(i.h2,{id:"7-conclusione",children:["7. ",(0,l.jsx)(i.strong,{children:"Conclusione"})]}),"\n",(0,l.jsx)(i.p,{children:"Questo file fornisce tutte le rotte necessarie per la gestione delle flotte di veicoli, inclusa la gestione delle aree e dei marker in formato GeoJSON, l'autenticazione e la gestione delle immagini delle flotte. Il supporto per Redis consente di migliorare le prestazioni dell'API memorizzando in cache i dati delle aree."})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>r});var l=n(6540);const t={},a=l.createContext(t);function s(e){const i=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(a.Provider,{value:i},e.children)}}}]);