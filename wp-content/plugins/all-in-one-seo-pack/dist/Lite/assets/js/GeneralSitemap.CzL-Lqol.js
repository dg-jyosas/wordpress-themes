import{a as G,u as M}from"./links.DERf9LZO.js";import{S as D,a as $,u as B}from"./SearchConsoleInline.DRYdwt3y.js";import"./default-i18n.Bd0Z306Z.js";import N from"./AdditionalPages.L5v1OW3Z.js";import{B as C}from"./Checkbox.D2dfpbIi.js";import{B as H}from"./RadioToggle.BLVmJ7Zx.js";import{C as U}from"./Caret.iRBf3wcH.js";import{C as E}from"./Card.BKhgt1Jg.js";import{C as q}from"./ExcludePosts.dXwa01DZ.js";import{C as z}from"./PostTypeOptions.DXCQHrXJ.js";import{J as F}from"./JsonValues.D25FTfEu.js";import{T as J,a as Y}from"./Row.DMGP3siA.js";import{x as c,o as d,c as x,C as o,m as i,D as m,t as l,F as K,K as X,l as u,d as g,a as r}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as O}from"./_plugin-vue_export-helper.BN1snXvA.js";import{C as j}from"./SettingsRow.DQldd-1Z.js";import{S as W}from"./External.Bfg4674G.js";import"./helpers.D2xRWOvn.js";import"./SearchConsole.BxfpC6TN.js";import"./params.B3T1WKlC.js";import"./Actionable.CSSIaX56.js";import"./CheckSolid.ChbVSAiM.js";import"./WpTable.xK1A_iLv.js";import"./Index.AHxBjomD.js";import"./Table.Dk4a_ubM.js";import"./numbers.zAmItkHM.js";import"./Tooltip.DiN2Zjvc.js";import"./Slide.CRIn0kdn.js";import"./Date.BWaxwlz2.js";import"./constants.B6ynd7gz.js";import"./DatePicker.BcxlzFcx.js";import"./get.BT85ybc8.js";import"./toString.XwB3Xa5p.js";import"./isUndefined.CwgbffFV.js";import"./_getTag.CQI1SwGE.js";import"./debounce.DX0w6jjQ.js";import"./toNumber.LBtMnsWu.js";import"./_baseTrim.BYZhh0MR.js";import"./Exclamation.DKtT8kuH.js";import"./index.BB7B6rSp.js";import"./Checkmark.pCOnqh_g.js";import"./AddPlus.CVj47h4P.js";import"./HighlightToggle.BqzgXXo2.js";import"./Row.CzuhYwfs.js";import"./PostTypes.Cef6XkQ_.js";const Q={setup(){return{optionsStore:G()}},components:{TableColumn:J,TableRow:Y},mixins:[F],props:{priority:{type:Object,required:!0},rows:{type:Array,required:!0},labels:{type:Object,default(){return{}}}},data(){return{strings:{postTypes:this.$t.__("Post Types",this.$td),taxonomies:this.$t.__("Taxonomies",this.$td),priority:this.$t.__("Priority",this.$td),frequency:this.$t.__("Frequency",this.$td),homePage:this.$t.__("Home Page",this.$td),archive:this.$t.__("Date Archive Pages",this.$td),author:this.$t.__("Author Pages",this.$td)}}},computed:{getFrequencyOptions(){return[{label:this.$t.__("default",this.$td),value:"default"}].concat(this.$constants.FREQUENCY_OPTIONS)},getPriorityOptions(){return[{label:this.$t.__("default",this.$td),value:"default"}].concat(this.$constants.PRIORITY_OPTIONS)},filteredRows(){let e=this.rows;return this.optionsStore.options.sitemap.general.date||(e=e.filter(n=>n!=="archive")),this.optionsStore.options.sitemap.general.author||(e=e.filter(n=>n!=="author")),e}},methods:{getLabel(e){return this.labels[e]||this.strings[e]}}},Z={class:"aioseo-priority-score"};function ee(e,n,y,t,s,_){const S=c("table-column"),h=c("table-row"),b=c("base-select");return d(),x("div",Z,[o(h,{class:"header-row"},{default:i(()=>[o(S),o(S,null,{default:i(()=>[m(l(s.strings.priority),1)]),_:1}),o(S,null,{default:i(()=>[m(l(s.strings.frequency),1)]),_:1})]),_:1}),(d(!0),x(K,null,X(_.filteredRows,(p,v)=>(d(),u(h,{key:v},{default:i(()=>[o(S,null,{default:i(()=>[m(l(_.getLabel(p)),1)]),_:2},1024),o(S,null,{default:i(()=>[o(b,{size:"medium",options:_.getPriorityOptions,modelValue:e.getJsonValue(y.priority[p].priority),"onUpdate:modelValue":T=>y.priority[p].priority=e.setJsonValue(T)},null,8,["options","modelValue","onUpdate:modelValue"])]),_:2},1024),o(S,null,{default:i(()=>[o(b,{size:"medium",options:_.getFrequencyOptions,modelValue:e.getJsonValue(y.priority[p].frequency),"onUpdate:modelValue":T=>y.priority[p].frequency=e.setJsonValue(T)},null,8,["options","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),128))])}const te=O(Q,[["render",ee]]),oe={setup(){const{validateLinksPerIndex:e}=B();return{optionsStore:G(),rootStore:M(),validateLinksPerIndex:e}},components:{AdditionalPages:N,BaseCheckbox:C,BaseRadioToggle:H,CoreAlert:U,CoreCard:E,CoreExcludePosts:q,CorePostTypeOptions:z,CorePriorityScore:te,CoreSettingsRow:j,SearchConsole:D,SearchConsoleInline:$,SvgExternal:W},data(){return{pagePostOptions:[],strings:{general:this.$t.__("General Sitemap",this.$td),description:this.$t.sprintf(this.$t.__("An XML Sitemap is a list of all your content that search engines use when they crawl your site. This is an essential part of SEO because it contains some important pieces of information that search engines need when crawling your site. The XML Sitemap created by %1$s tells search engines where to find all of the content on your site.",this.$td),"All in One SEO"),enableSitemap:this.$t.__("Enable Sitemap",this.$td),sitemapSettings:this.$t.__("Sitemap Settings",this.$td),enableSitemapIndexes:this.$t.__("Enable Sitemap Indexes",this.$td),sitemapIndexes:this.$t.__("Organize sitemap entries into distinct files in your sitemap. We recommend you enable this setting if your sitemap contains more than 1,000 URLs.",this.$td),linksPerSitemap:this.$t.__("Links Per Sitemap",this.$td),noIndexDisplayed:this.$t.__("Noindexed content will not be displayed in your sitemap.",this.$td),doYou404:this.$t.__("Do you get a blank sitemap or 404 error?",this.$td),openSitemap:this.$t.__("Open Sitemap",this.$td),maxLinks:this.$t.__("Allows you to specify the maximum number of posts in a sitemap (up to 50,000).",this.$td),automaticallyPingSearchEngines:this.$t.__("Automatically Ping Search Engines",this.$td),postTypes:this.$t.__("Post Types",this.$td),taxonomies:this.$t.__("Taxonomies",this.$td),dateArchiveSitemap:this.$t.__("Date Archive Sitemap",this.$td),includeDateArchives:this.$t.__("Include Date Archives in your sitemap.",this.$td),authorSitemap:this.$t.__("Author Sitemap",this.$td),includeAuthorArchives:this.$t.__("Include Author Archives in your sitemap.",this.$td),includeAllPostTypes:this.$t.__("Include All Post Types",this.$td),selectPostTypes:this.$t.__("Select which Post Types appear in your sitemap.",this.$td),includeAllTaxonomies:this.$t.__("Include All Taxonomies",this.$td),selectTaxonomies:this.$t.__("Select which Taxonomies appear in your sitemap.",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$td),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$td),excludeTerms:this.$t.__("Exclude Terms",this.$td),excludeTermsDescription:this.$t.__("Any posts that are assigned to these terms will also be excluded from your sitemap.",this.$td),priorityScore:this.$t.__("Priority Score",this.$td),grouped:this.$t.__("Grouped",this.$td),priorityScorePostTypes:this.$t.__("Post Type Priority Score",this.$td),priorityScoreTaxonomies:this.$t.__("Taxonomy Priority Score",this.$td),excludeImages:this.$t.__("Exclude Images",this.$td),excludeImagesDescription:this.$t.__("Exclude Images from your sitemap.",this.$td),dynamicallyGenerate:this.$t.__("Dynamically Generate",this.$td),dynamicallyGenerateDescription:this.$t.__("Dynamically creates the XML Sitemap instead of using a static file.",this.$td),warningLinksPerSitemap:this.$t.__("We recommend setting the amount of URLs per sitemap index to 1,000 or less. The more links, the longer it will take for the sitemap to load.",this.$td),warningStaticRegeneration:this.$t.__("Your static sitemap is currently being regenerated. This may take some time based on the size of your site. This may also cause the sitemap content to look outdated.",this.$td)}}},computed:{getPostTypeRows(){return this.rootStore.aioseo.postData.postTypes.map(e=>e.name)},getPostTypeLabels(){const e={};return this.rootStore.aioseo.postData.postTypes.forEach(n=>{e[n.name]=n.label}),e},getTaxonomyRows(){return this.rootStore.aioseo.postData.taxonomies.map(e=>e.name)},getTaxonomyLabels(){const e={};return this.rootStore.aioseo.postData.taxonomies.forEach(n=>{e[n.name]=n.label}),e}}},se={class:"aioseo-general-sitemap"},ne={class:"aioseo-settings-row aioseo-section-description"},ie=["innerHTML"],ae={class:"aioseo-sitemap-preview"},re={class:"aioseo-description"},le=["innerHTML"],pe={class:"aioseo-description"},me=["innerHTML"],de={class:"aioseo-description"},ce=["innerHTML"],ue={class:"aioseo-description"},ge=["innerHTML"],_e={class:"aioseo-description"},Se=["innerHTML"],he={class:"aioseo-description"},ye=["innerHTML"],Te={class:"aioseo-description"},Le=["innerHTML"],fe={class:"aioseo-description"},be={class:"aioseo-description"},ve=["innerHTML"],ke={class:"aioseo-description"},xe=["innerHTML"];function Ae(e,n,y,t,s,_){const S=c("search-console"),h=c("base-toggle"),b=c("search-console-inline"),p=c("core-settings-row"),v=c("svg-external"),T=c("base-button"),A=c("core-alert"),k=c("core-card"),L=c("base-radio-toggle"),R=c("base-input"),P=c("base-checkbox"),I=c("core-post-type-options"),w=c("AdditionalPages"),V=c("core-exclude-posts"),f=c("core-priority-score");return d(),x("div",se,[t.optionsStore.options.sitemap.general.enable?(d(),u(S,{key:0})):g("",!0),o(k,{slug:"generalSitemap","header-text":s.strings.general},{default:i(()=>[r("div",ne,[m(l(s.strings.description)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"xmlSitemaps",!0)},null,8,ie)]),o(p,{name:s.strings.enableSitemap},{content:i(()=>[o(h,{modelValue:t.optionsStore.options.sitemap.general.enable,"onUpdate:modelValue":n[0]||(n[0]=a=>t.optionsStore.options.sitemap.general.enable=a)},null,8,["modelValue"]),t.optionsStore.options.sitemap.general.enable?(d(),u(b,{key:0})):g("",!0)]),_:1},8,["name"]),t.optionsStore.options.sitemap.general.enable?(d(),u(p,{key:0,name:e.$constants.GLOBAL_STRINGS.preview},{content:i(()=>[r("div",ae,[o(T,{size:"medium",type:"blue",tag:"a",href:t.rootStore.aioseo.urls.generalSitemapUrl,target:"_blank"},{default:i(()=>[o(v),m(" "+l(s.strings.openSitemap),1)]),_:1},8,["href"])]),r("div",re,[m(l(s.strings.noIndexDisplayed)+" "+l(s.strings.doYou404)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"blankSitemap",!0)},null,8,le)]),!t.optionsStore.options.deprecated.sitemap.general.advancedSettings.dynamic&&t.rootStore.aioseo.scheduledActions&&t.rootStore.aioseo.scheduledActions.sitemap&&t.rootStore.aioseo.scheduledActions.sitemap.includes("staticSitemapRegeneration")?(d(),u(A,{key:0,class:"static-regeneration-notice",type:"blue"},{default:i(()=>[m(l(s.strings.warningStaticRegeneration),1)]),_:1})):g("",!0)]),_:1},8,["name"])):g("",!0)]),_:1},8,["header-text"]),t.optionsStore.options.sitemap.general.enable?(d(),u(k,{key:1,slug:"generalSitemapSettings","header-text":s.strings.sitemapSettings},{default:i(()=>[o(p,{name:s.strings.enableSitemapIndexes},{content:i(()=>[o(L,{modelValue:t.optionsStore.options.sitemap.general.indexes,"onUpdate:modelValue":n[1]||(n[1]=a=>t.optionsStore.options.sitemap.general.indexes=a),name:"sitemapIndexes",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),r("div",pe,[m(l(s.strings.sitemapIndexes)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"sitemapIndexes",!0)},null,8,me)])]),_:1},8,["name"]),t.optionsStore.options.sitemap.general.indexes?(d(),u(p,{key:0,name:s.strings.linksPerSitemap},{content:i(()=>[o(R,{modelValue:t.optionsStore.options.sitemap.general.linksPerIndex,"onUpdate:modelValue":n[2]||(n[2]=a=>t.optionsStore.options.sitemap.general.linksPerIndex=a),class:"aioseo-links-per-site",type:"number",size:"medium",min:1,max:5e4,onKeyup:t.validateLinksPerIndex},null,8,["modelValue","onKeyup"]),r("div",de,[m(l(s.strings.maxLinks)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"maxLinks",!0)},null,8,ce)]),t.optionsStore.options.sitemap.general.indexes&&1e3<t.optionsStore.options.sitemap.general.linksPerIndex?(d(),u(A,{key:0,class:"index-notice",type:"yellow"},{default:i(()=>[m(l(s.strings.warningLinksPerSitemap),1)]),_:1})):g("",!0)]),_:1},8,["name"])):g("",!0),o(p,{name:s.strings.postTypes},{content:i(()=>[o(P,{size:"medium",modelValue:t.optionsStore.options.sitemap.general.postTypes.all,"onUpdate:modelValue":n[3]||(n[3]=a=>t.optionsStore.options.sitemap.general.postTypes.all=a)},{default:i(()=>[m(l(s.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),t.optionsStore.options.sitemap.general.postTypes.all?g("",!0):(d(),u(I,{key:0,options:t.optionsStore.options.sitemap.general,type:"postTypes"},null,8,["options"])),r("div",ue,[m(l(s.strings.selectPostTypes)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypes",!0)},null,8,ge)])]),_:1},8,["name"]),o(p,{name:s.strings.taxonomies},{content:i(()=>[o(P,{size:"medium",modelValue:t.optionsStore.options.sitemap.general.taxonomies.all,"onUpdate:modelValue":n[4]||(n[4]=a=>t.optionsStore.options.sitemap.general.taxonomies.all=a)},{default:i(()=>[m(l(s.strings.includeAllTaxonomies),1)]),_:1},8,["modelValue"]),t.optionsStore.options.sitemap.general.taxonomies.all?g("",!0):(d(),u(I,{key:0,options:t.optionsStore.options.sitemap.general,type:"taxonomies"},null,8,["options"])),r("div",_e,[m(l(s.strings.selectTaxonomies)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypes",!0)},null,8,Se)])]),_:1},8,["name"]),o(p,{name:s.strings.dateArchiveSitemap},{content:i(()=>[o(L,{modelValue:t.optionsStore.options.sitemap.general.date,"onUpdate:modelValue":n[5]||(n[5]=a=>t.optionsStore.options.sitemap.general.date=a),name:"dateArchiveSitemap",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),r("div",he,[m(l(s.strings.includeDateArchives)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"includeArchivePages",!0)},null,8,ye)])]),_:1},8,["name"]),o(p,{name:s.strings.authorSitemap},{content:i(()=>[o(L,{modelValue:t.optionsStore.options.sitemap.general.author,"onUpdate:modelValue":n[6]||(n[6]=a=>t.optionsStore.options.sitemap.general.author=a),name:"authorSitemap",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),r("div",Te,[m(l(s.strings.includeAuthorArchives)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"includeArchivePages",!0)},null,8,Le)])]),_:1},8,["name"])]),_:1},8,["header-text"])):g("",!0),o(w),t.optionsStore.options.sitemap.general.enable?(d(),u(k,{key:2,slug:"advancedSettings",toggles:t.optionsStore.options.sitemap.general.advancedSettings.enable},{header:i(()=>[o(h,{modelValue:t.optionsStore.options.sitemap.general.advancedSettings.enable,"onUpdate:modelValue":n[7]||(n[7]=a=>t.optionsStore.options.sitemap.general.advancedSettings.enable=a)},null,8,["modelValue"]),r("span",null,l(s.strings.advancedSettings),1)]),default:i(()=>[o(p,{name:s.strings.excludePostsPages,class:"aioseo-exclude-pages-posts"},{content:i(()=>[o(V,{options:t.optionsStore.options.sitemap.general.advancedSettings,type:"posts"},null,8,["options"])]),_:1},8,["name"]),o(p,{name:s.strings.excludeTerms,class:"aioseo-exclude-terms"},{content:i(()=>[o(V,{options:t.optionsStore.options.sitemap.general.advancedSettings,type:"terms"},null,8,["options"]),r("div",fe,l(s.strings.excludeTermsDescription),1)]),_:1},8,["name"]),o(p,{name:s.strings.priorityScore,align:""},{content:i(()=>[o(f,{priority:t.optionsStore.options.sitemap.general.advancedSettings.priority,rows:["homePage","archive","author"]},null,8,["priority"])]),_:1},8,["name"]),o(p,{name:s.strings.priorityScorePostTypes,align:""},{content:i(()=>[o(h,{modelValue:t.optionsStore.options.sitemap.general.advancedSettings.priority.postTypes.grouped,"onUpdate:modelValue":n[8]||(n[8]=a=>t.optionsStore.options.sitemap.general.advancedSettings.priority.postTypes.grouped=a)},{default:i(()=>[m(l(s.strings.grouped),1)]),_:1},8,["modelValue"]),t.optionsStore.options.sitemap.general.advancedSettings.priority.postTypes.grouped?(d(),u(f,{key:0,priority:t.optionsStore.options.sitemap.general.advancedSettings.priority,rows:["postTypes"]},null,8,["priority"])):g("",!0),t.optionsStore.options.sitemap.general.advancedSettings.priority.postTypes.grouped?g("",!0):(d(),u(f,{key:1,priority:t.optionsStore.dynamicOptions.sitemap.priority.postTypes,rows:_.getPostTypeRows,labels:_.getPostTypeLabels},null,8,["priority","rows","labels"]))]),_:1},8,["name"]),o(p,{name:s.strings.priorityScoreTaxonomies,align:""},{content:i(()=>[o(h,{modelValue:t.optionsStore.options.sitemap.general.advancedSettings.priority.taxonomies.grouped,"onUpdate:modelValue":n[9]||(n[9]=a=>t.optionsStore.options.sitemap.general.advancedSettings.priority.taxonomies.grouped=a)},{default:i(()=>[m(l(s.strings.grouped),1)]),_:1},8,["modelValue"]),t.optionsStore.options.sitemap.general.advancedSettings.priority.taxonomies.grouped?(d(),u(f,{key:0,priority:t.optionsStore.options.sitemap.general.advancedSettings.priority,rows:["taxonomies"]},null,8,["priority"])):g("",!0),t.optionsStore.options.sitemap.general.advancedSettings.priority.taxonomies.grouped?g("",!0):(d(),u(f,{key:1,priority:t.optionsStore.dynamicOptions.sitemap.priority.taxonomies,rows:_.getTaxonomyRows,labels:_.getTaxonomyLabels},null,8,["priority","rows","labels"]))]),_:1},8,["name"]),t.optionsStore.internalOptions.internal.deprecatedOptions.includes("staticSitemap")?(d(),u(p,{key:0,name:s.strings.dynamicallyGenerate},{content:i(()=>[o(L,{modelValue:t.optionsStore.options.deprecated.sitemap.general.advancedSettings.dynamic,"onUpdate:modelValue":n[10]||(n[10]=a=>t.optionsStore.options.deprecated.sitemap.general.advancedSettings.dynamic=a),name:"dynamic",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),r("div",be,[m(l(s.strings.dynamicallyGenerateDescription)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"dynamicallyGenerate",!0)},null,8,ve)])]),_:1},8,["name"])):g("",!0),o(p,{name:s.strings.excludeImages},{content:i(()=>[o(L,{modelValue:t.optionsStore.options.sitemap.general.advancedSettings.excludeImages,"onUpdate:modelValue":n[11]||(n[11]=a=>t.optionsStore.options.sitemap.general.advancedSettings.excludeImages=a),name:"excludeImages",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),r("div",ke,[m(l(s.strings.excludeImagesDescription)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"excludeImages",!0)},null,8,xe)])]),_:1},8,["name"])]),_:1},8,["toggles"])):g("",!0)])}const ht=O(oe,[["render",Ae]]);export{ht as default};
