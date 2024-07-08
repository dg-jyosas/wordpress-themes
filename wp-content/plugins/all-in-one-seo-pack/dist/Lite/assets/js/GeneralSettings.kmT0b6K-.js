import{p as A,u as w,f as L,e as P}from"./links.DERf9LZO.js";import{l as D}from"./license.CAFpxQKJ.js";import{a as U}from"./allowed.DLIR8YsR.js";import{C as N}from"./Card.BKhgt1Jg.js";import{C as O}from"./GettingStarted.CHhh_rCu.js";import{C as S}from"./SettingsRow.DQldd-1Z.js";import{N as z}from"./Network.CWoreRHL.js";import{C as H}from"./Table.Dk4a_ubM.js";import{C as B}from"./Index.DUPzmxCE.js";import{S as E}from"./CheckSolid.ChbVSAiM.js";import{R as M}from"./RequiredPlans.BBKMLnuk.js";import{x as o,o as c,c as T,C as l,m as n,a as e,t as a,D as d,l as _,d as g,$ as K}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as k}from"./_plugin-vue_export-helper.BN1snXvA.js";import{p as W}from"./popup.6pJEdp0g.js";import{S as R}from"./Rocket.28tfNCE-.js";import"./default-i18n.Bd0Z306Z.js";import"./helpers.D2xRWOvn.js";import"./upperFirst.CP4N4hLd.js";import"./_stringToArray.DnK4tKcY.js";import"./toString.XwB3Xa5p.js";import"./Tooltip.DiN2Zjvc.js";import"./Caret.iRBf3wcH.js";import"./index.BB7B6rSp.js";import"./Slide.CRIn0kdn.js";import"./Row.CzuhYwfs.js";import"./Book.BwJHPER-.js";import"./numbers.zAmItkHM.js";import"./constants.B6ynd7gz.js";import"./addons.JFEbod-N.js";import"./params.B3T1WKlC.js";const V={mixins:[z],components:{RequiredPlans:M,CoreWpTable:H,Cta:B,SvgCircleCheckSolid:E},data(){return{bulkOptions:[{label:this.$t.__("Activate License",this.$td),value:"activate-license"},{label:this.$t.__("Deactivate License",this.$td),value:"deactivate-license"}],strings:{activate:this.$t.__("Activate",this.$td),deactivate:this.$t.__("Deactivate",this.$td),visitSite:this.$t.__("Visit Site",this.$td),dashboard:this.$t.__("Dashboard",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Domain Activations is a %1$s Feature",this.$td),"PRO"),ctaButtonText:this.$t.__("Unlock Domain Activations",this.$td),networkDatabaseToolsDescription:this.$t.__("Unlock network-level tools to manage all your sites from one easy-to-use location. Manage your license key activations for each individual domain.",this.$td)}}},computed:{columns(){return[{slug:"domain",label:this.$t.__("Domain",this.$td)},{slug:"path",label:this.$t.__("Path",this.$td)},{slug:"primary_domain",label:this.$t.__("Alias Of",this.$td)},{slug:"activated",label:this.$t.__("Activated",this.$td),width:"90px"}]},rows(){return[{blog_id:1,path:"/",domain:"aioseo.com"},{blog_id:2,path:"/",domain:"wpbeginner.com"},{blog_id:3,path:"/",domain:"wpforms.com"},{blog_id:4,path:"/",domain:"optinmonster.com"},{blog_id:5,path:"/",domain:"monsterinsights.com"},{blog_id:8,path:"/",domain:"seedprod.com"},{blog_id:10,path:"/",domain:"easydigitaldownloads.com"}]},totals(){return{total:this.rows.length,pages:1,page:1}},filters(){return[{slug:"all",name:this.$t.__("All",this.$td)},{slug:"activated",name:this.$t.__("Activated",this.$td)},{slug:"deactivated",name:this.$t.__("Deactivated",this.$td)}]}}},G={class:"aioseo-settings-network-sites-activation"},F={class:"row-actions"},I={class:"activate",href:"#"},q={class:"view-site",href:"#",target:"_blank"},Y={class:"dashboard",href:"#",target:"_blank"};function j(s,$,b,r,t,i){const p=o("svg-circle-check-solid"),u=o("required-plans"),h=o("cta"),m=o("core-wp-table");return c(),T("div",G,[l(m,{columns:i.columns,rows:i.rows,totals:i.totals,filters:i.filters,"bulk-options":t.bulkOptions,"blur-rows":"","disable-table":""},{domain:n(({row:f})=>[e("span",null,a(f.domain),1),e("div",F,[e("span",null,[e("a",I,[e("span",null,a(t.strings.activate),1)]),d(" | ")]),e("span",null,[e("a",q,[e("span",null,a(t.strings.visitSite),1)]),d(" | ")]),e("span",null,[e("a",Y,[e("span",null,a(t.strings.dashboard),1)])])])]),activated:n(()=>[e("span",null,[l(p)])]),cta:n(()=>[l(h,{"cta-link":s.$links.getPricingUrl("network-tools","network-sites-activation"),"button-text":t.strings.ctaButtonText,"learn-more-link":s.$links.getUpsellUrl("network-tools","network-sites-activation",s.$isPro?"pricing":"liteUpgrade")},{"header-text":n(()=>[d(a(t.strings.ctaHeader),1)]),description:n(()=>[l(u,{"core-feature":["tools","network-tools-site-activation"]}),d(" "+a(t.strings.networkDatabaseToolsDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link"])]),_:1},8,["columns","rows","totals","filters","bulk-options"])])}const y=k(V,[["render",j]]),J={setup(){return{connectStore:A(),rootStore:w()}},components:{CoreSettingsRow:S},data(){return{licenseKey:null,strings:{boldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","AIOSEO","Lite"),purchasedBoldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","AIOSEO","Pro"),linkText:this.$t.sprintf(this.$t.__("upgrading to %1$s",this.$td),"Pro"),moreBoldText:this.$t.sprintf("<strong>%1$s</strong>",this.$constants.DISCOUNT_PERCENTAGE+" "+this.$t.__("off",this.$td)),licenseKey:this.$t.__("License Key",this.$td),licenseKeyDescription:this.$t.__("Your license key provides access to updates and addons.",this.$td),placeholder:this.$t.__("Paste your license key here",this.$td),connect:this.$t.__("Connect",this.$td)}}},computed:{link(){return this.$t.sprintf('<strong><a href="%1$s" target="_blank">%2$s</a></strong>',this.$links.utmUrl("general-settings","license-box"),this.strings.linkText)},tooltipText(){return this.$t.sprintf(this.$t.__("To unlock more features, consider %1$s.",this.$td),this.link)},moreToolTipText(){return this.$t.sprintf(this.$t.__("As a valued user you receive %1$s, automatically applied at checkout!",this.$td),this.strings.moreBoldText)},noLicenseNeeded(){return this.$t.sprintf(this.$t.__("You're using %1$s - no license needed. Enjoy!",this.$td)+" 🙂",this.strings.boldText)},alreadyPurchased(){return this.$t.sprintf(this.$t.__("Already purchased? Simply enter your license key below to connect with %1$s!",this.$td),this.strings.purchasedBoldText)}},methods:{processGetConnectUrl(){this.rootStore.loading=!0,this.connectStore.getConnectUrl({key:this.licenseKey}).then(s=>{if(s.body.url){if(!s.body.popup)return this.rootStore.loading=!1,window.open(s.body.url,"_blank");this.openPopup(s.body.url)}})},openPopup(s){W(s,"_self",600,630,!0,["file","token"],this.completedCallback,this.closedCallback)},completedCallback(s){return this.connectStore.processConnect(s)},closedCallback(s){if(s)return window.location.reload();this.rootStore.loading=!1}}},Q=["innerHTML"],X={class:"license-cta-box"},Z=["innerHTML"],tt=["innerHTML"],et=["innerHTML"],st={class:"license-key"},ot=e("input",{type:"text",name:"username",autocomplete:"username",style:{display:"none"}},null,-1);function it(s,$,b,r,t,i){const p=o("base-input"),u=o("base-button"),h=o("core-settings-row");return c(),_(h,{name:t.strings.licenseKey},{description:n(()=>[d(a(t.strings.licenseKeyDescription),1)]),content:n(()=>[e("div",{innerHTML:i.noLicenseNeeded},null,8,Q),e("div",X,[e("div",{innerHTML:i.tooltipText},null,8,Z),e("span",{innerHTML:i.moreToolTipText},null,8,tt)]),e("div",{innerHTML:i.alreadyPurchased},null,8,et),e("form",st,[ot,l(p,{type:"password",placeholder:t.strings.placeholder,"append-icon":t.licenseKey?"circle-check":null,autocomplete:"new-password",modelValue:t.licenseKey,"onUpdate:modelValue":$[0]||($[0]=m=>t.licenseKey=m)},null,8,["placeholder","append-icon","modelValue"]),l(u,{type:"green",disabled:!t.licenseKey,loading:r.rootStore.loading,onClick:i.processGetConnectUrl},{default:n(()=>[d(a(t.strings.connect),1)]),_:1},8,["disabled","loading","onClick"])])]),_:1},8,["name"])}const nt=k(J,[["render",it]]),rt={setup(){return{licenseStore:L(),rootStore:w(),settingsStore:P()}},components:{CoreCard:N,CoreGettingStarted:O,CoreSettingsRow:S,LiteSettingsNetworkSitesActivation:y,SettingsLicenseKey:nt,SettingsNetworkSitesActivation:y,SvgRocket:R},data(){return{allowed:U,license:D,strings:{license:this.$t.__("License",this.$td),boldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","All in One SEO",this.$t.__("Free",this.$td)),purchasedBoldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","All in One SEO","Pro"),linkText:this.$t.sprintf(this.$t.__("upgrading to %1$s",this.$td),"Pro"),moreBoldText:this.$t.sprintf("<strong>%1$s</strong>",this.$constants.DISCOUNT_PERCENTAGE+" "+this.$t.__("off",this.$td)),setupWizard:this.$t.__("Setup Wizard",this.$td),relaunchSetupWizard:this.$t.__("Relaunch Setup Wizard",this.$td),setupWizardText:this.$t.sprintf(this.$t.__("Use our configuration wizard to properly set up %1$s with your WordPress website.",this.$td),"All in One SEO"),domainActivations:this.$t.__("Domain Activations",this.$td)}}},computed:{link(){return this.$t.sprintf('<strong><a href="%1$s" target="_blank">%2$s</a></strong>',this.$links.utmUrl("general-settings","license-box-tooltip"),this.strings.linkText)},tooltipText(){return this.$t.sprintf(this.$t.__("To unlock more features, consider %1$s.",this.$td),this.link)},moreToolTipText(){return this.$t.sprintf(this.$t.__("As a valued user you receive %1$s, automatically applied at checkout!",this.$td),this.strings.moreBoldText)}}},at={class:"aioseo-general-settings"},lt=["innerHTML"],ct=e("br",null,null,-1),dt=["innerHTML"],_t={class:"aioseo-description"};function pt(s,$,b,r,t,i){const p=o("core-getting-started"),u=o("settings-license-key"),h=o("svg-rocket"),m=o("base-button"),f=o("core-settings-row"),v=o("core-card"),x=o("settings-network-sites-activation"),C=o("lite-settings-network-sites-activation");return c(),T("div",at,[r.settingsStore.settings.showSetupWizard&&t.allowed("aioseo_setup_wizard")&&!r.rootStore.aioseo.data.isNetworkAdmin?(c(),_(p,{key:0})):g("",!0),l(v,{slug:"license","header-text":t.strings.license},K({default:n(()=>[l(u),!r.settingsStore.settings.showSetupWizard&&t.allowed("aioseo_setup_wizard")&&!r.rootStore.aioseo.data.isNetworkAdmin?(c(),_(f,{key:0,name:t.strings.setupWizard},{content:n(()=>[l(m,{type:"blue",size:"medium",tag:"a",href:r.rootStore.aioseo.urls.aio.wizard},{default:n(()=>[l(h),d(" "+a(t.strings.relaunchSetupWizard),1)]),_:1},8,["href"]),e("p",_t,a(t.strings.setupWizardText),1)]),_:1},8,["name"])):g("",!0)]),_:2},[s.$isPro?void 0:{name:"tooltip",fn:n(()=>[e("div",{innerHTML:i.tooltipText},null,8,lt),ct,e("div",{class:"more-tooltip-text",innerHTML:i.moreToolTipText},null,8,dt)]),key:"0"}]),1032,["header-text"]),r.rootStore.aioseo.data.isNetworkAdmin?(c(),_(v,{key:1,slug:"domainActivations","header-text":t.strings.domainActivations},{default:n(()=>[!r.licenseStore.isUnlicensed&&t.license.hasCoreFeature("tools","network-tools-site-activation")?(c(),_(x,{key:0})):g("",!0),r.licenseStore.isUnlicensed||!t.license.hasCoreFeature("tools","network-tools-site-activation")?(c(),_(C,{key:1})):g("",!0)]),_:1},8,["header-text"])):g("",!0)])}const Vt=k(rt,[["render",pt]]);export{Vt as default};
