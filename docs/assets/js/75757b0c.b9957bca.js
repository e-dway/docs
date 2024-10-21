"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5879],{7572:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>t});var o=n(4848),s=n(8453);const a={sidebar_position:3},d="django_ Tables",l={id:"db/django_tables",title:"django_ Tables",description:"django_admin_log",source:"@site/pages/db/django_tables.md",sourceDirName:"db",slug:"/db/django_tables",permalink:"/docs/pages/db/django_tables",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/pages/db/django_tables.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"dbSidebar",next:{title:"auth_ Tables",permalink:"/docs/pages/db/auth/auth_tables"}},c={},t=[{value:"<strong><code>django_admin_log</code></strong>",id:"django_admin_log",level:3},{value:"<strong><code>django_content_type</code></strong>",id:"django_content_type",level:3},{value:"<strong><code>django_migrations</code></strong>",id:"django_migrations",level:3},{value:"<strong><code>django_session</code></strong>",id:"django_session",level:3}];function r(e){const i={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"django_-tables",children:"django_ Tables"})}),"\n",(0,o.jsx)(i.h3,{id:"django_admin_log",children:(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"django_admin_log"})})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Descrizione"}),": Registra le operazioni eseguite tramite l'interfaccia di amministrazione di Django, tenendo traccia dei cambiamenti fatti dagli utenti con privilegi di amministratore."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Campi"}),":","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"id"}),": Identificatore univoco del log (chiave primaria, tipo ",(0,o.jsx)(i.code,{children:"SERIAL"}),")."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"action_time"}),": Timestamp dell'azione, con indicazione del fuso orario (",(0,o.jsx)(i.code,{children:"TIMESTAMPTZ"}),"), che indica quando \xe8 stata eseguita l'operazione."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"object_id"}),": ID dell'oggetto modificato o cancellato, memorizzato come testo."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"object_repr"}),": Rappresentazione testuale dell'oggetto modificato (ad esempio, una stringa descrittiva dell'oggetto)."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"change_message"}),": Descrizione del cambiamento effettuato (es. cosa \xe8 stato modificato)."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"content_type_id"}),": Riferimento alla ",(0,o.jsx)(i.code,{children:"django_content_type"}),", che specifica il tipo di contenuto dell'oggetto modificato."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"user_id"}),": Identificatore dell'utente che ha eseguito l'azione, con chiave esterna alla ",(0,o.jsx)(i.code,{children:"auth_user"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"action_flag"}),": Flag che indica il tipo di azione eseguita (es. aggiunta, modifica, eliminazione)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"django_content_type",children:(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"django_content_type"})})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Descrizione"}),": Mappa i modelli presenti nelle app Django, consentendo di identificare il tipo di contenuto a cui appartiene un oggetto. \xc8 usata per gestire i permessi e le operazioni a livello di contenuto."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Campi"}),":","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"id"}),": Identificatore univoco (chiave primaria, tipo ",(0,o.jsx)(i.code,{children:"SERIAL"}),")."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"app_label"}),": Nome dell'applicazione a cui appartiene il modello."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"model"}),": Nome del modello all'interno dell'applicazione."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Indice univoco"}),": \xc8 presente un vincolo di unicit\xe0 sui campi ",(0,o.jsx)(i.code,{children:"app_label"})," e ",(0,o.jsx)(i.code,{children:"model"}),", per garantire che ogni combinazione sia unica."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"django_migrations",children:(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"django_migrations"})})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Descrizione"}),": Tiene traccia delle migrazioni eseguite per ogni app Django, utilizzata dal framework per aggiornare il database in base alle modifiche del modello."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Campi"}),":","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"id"}),": Identificatore univoco della migrazione (chiave primaria, tipo ",(0,o.jsx)(i.code,{children:"SERIAL"}),")."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"app"}),": Nome dell'applicazione Django a cui si riferisce la migrazione."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"name"}),": Nome della migrazione (solitamente corrisponde al file di migrazione)."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"applied"}),": Data e ora in cui la migrazione \xe8 stata applicata."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"django_session",children:(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"django_session"})})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Descrizione"}),": Gestisce le sessioni degli utenti in Django, utilizzata per memorizzare i dati di sessione associati a una chiave di sessione specifica."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Campi"}),":","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"session_key"}),": Identificatore univoco della sessione (chiave primaria)."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"session_data"}),": Dati relativi alla sessione, memorizzati come testo (solitamente serializzati)."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"expire_date"}),": Data e ora di scadenza della sessione."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>l});var o=n(6540);const s={},a=o.createContext(s);function d(e){const i=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(a.Provider,{value:i},e.children)}}}]);