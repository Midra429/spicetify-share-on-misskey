(async()=>{for(;!Spicetify.React||!Spicetify.ReactDOM;)await new Promise(e=>setTimeout(e,10));var a,s,n,o,l,r,c,e,t,i,d,u,p,y,m,h,f,g,w,v,b,S,k,x,T,F,C,N,I;s=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,r=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,t=(e,t,i)=>(i=null!=e?s(r(e)):{},((t,i,s,a)=>{if(i&&"object"==typeof i||"function"==typeof i)for(let e of l(i))c.call(t,e)||e===s||n(t,e,{get:()=>i[e],enumerable:!(a=o(i,e))||a.enumerable});return t})(!t&&e&&e.__esModule?i:n(i,"default",{value:e,enumerable:!0}),e)),i=(e=(e,t)=>function(){return t||(0,e[l(e)[0]])((t={exports:{}}).exports,t),t.exports})({"external-global-plugin:react"(e,t){t.exports=Spicetify.React}}),e=e({"external-global-plugin:react-dom"(e,t){t.exports=Spicetify.ReactDOM}}),d="share-on-misskey",u="Share on Misskey",p="0.2.6",y="https://github.com/Midra429/spicetify-share-on-misskey",m="Button-sc-y0gtbx-0 Button-buttonSecondary-small-useBrowserDefaultFocusStyle encore-text-body-small-bold e-9640-button--small x-settings-button",h=e=>!!e&&/^https?:\/\//.test(e)&&URL.canParse(e),f=t(i()),g=t(e()),w=class extends class{constructor(e,t,i={}){this.name=e,this.settingsId=t,this.initialSettingsFields=i,this.settingsFields=this.initialSettingsFields,this.setRerender=null,this.pushSettings=async()=>{for(Object.entries(this.settingsFields).forEach(([e,t])=>{"button"!==t.type&&void 0===this.getFieldValue(e)&&this.setFieldValue(e,t.defaultValue)});!Spicetify?.Platform?.History?.listen;)await new Promise(e=>setTimeout(e,100));this.stopHistoryListener&&this.stopHistoryListener(),this.stopHistoryListener=Spicetify.Platform.History.listen(e=>{"/preferences"===e.pathname&&this.render()}),"/preferences"===Spicetify.Platform.History.location.pathname&&await this.render()},this.rerender=()=>{this.setRerender&&this.setRerender(Math.random())},this.render=async()=>{for(;!document.getElementById("desktop.settings.selectLanguage");){if("/preferences"!==Spicetify.Platform.History.location.pathname)return;await new Promise(e=>setTimeout(e,100))}var e=document.querySelector(".main-view-container__scroll-node-child main div");if(!e)return console.error("[spcr-settings] settings container not found");let t=Array.from(e.children).find(e=>e.id===this.settingsId);t?console.log(t):((t=document.createElement("div")).id=this.settingsId,e.appendChild(t)),g.default.render(f.default.createElement(this.FieldsContainer,null),t)},this.addButton=(e,t,i,s,a)=>{this.settingsFields[e]={type:"button",description:t,value:i,events:{onClick:s,...a}}},this.addInput=(e,t,i,s,a,n)=>{this.settingsFields[e]={type:"input",description:t,defaultValue:i,inputType:a,events:{onChange:s,...n}}},this.addHidden=(e,t)=>{this.settingsFields[e]={type:"hidden",defaultValue:t}},this.addToggle=(e,t,i,s,a)=>{this.settingsFields[e]={type:"toggle",description:t,defaultValue:i,events:{onChange:s,...a}}},this.addDropDown=(e,t,i,s,a,n)=>{this.settingsFields[e]={type:"dropdown",description:t,defaultValue:i[s],options:i,events:{onSelect:a,...n}}},this.getFieldValue=e=>JSON.parse(Spicetify.LocalStorage.get(this.settingsId+"."+e)||"{}")?.value,this.setFieldValue=(e,t)=>{Spicetify.LocalStorage.set(this.settingsId+"."+e,JSON.stringify({value:t}))},this.FieldsContainer=()=>{var[e,t]=(0,f.useState)(0);return this.setRerender=t,f.default.createElement("div",{className:"x-settings-section",key:e},f.default.createElement("h2",{className:"TypeElement-cello-textBase-type"},this.name),Object.entries(this.settingsFields).map(([e,t])=>f.default.createElement(this.Field,{nameId:e,field:t})))},this.Field=i=>{var e=this.settingsId+"."+i.nameId;let t;if(t="button"===i.field.type?i.field.value:this.getFieldValue(i.nameId),"hidden"===i.field.type)return f.default.createElement(f.default.Fragment,null);let[s,a]=(0,f.useState)(t),n=e=>{void 0!==e&&(a(e),this.setFieldValue(i.nameId,e))};return f.default.createElement("div",{className:"x-settings-row"},f.default.createElement("div",{className:"x-settings-firstColumn"},f.default.createElement("label",{className:"TypeElement-viola-textSubdued-type",htmlFor:e},i.field.description||"")),f.default.createElement("div",{className:"x-settings-secondColumn"},"input"===i.field.type?f.default.createElement("input",{className:"x-settings-input",id:e,dir:"ltr",value:s,type:i.field.inputType||"text",...i.field.events,onChange:e=>{n(e.currentTarget.value);var t=i.field.events?.onChange;t&&t(e)}}):"button"===i.field.type?f.default.createElement("span",null,f.default.createElement("button",{id:e,className:"Button-sc-y0gtbx-0 Button-small-buttonSecondary-useBrowserDefaultFocusStyle x-settings-button",...i.field.events,onClick:e=>{n();var t=i.field.events?.onClick;t&&t(e)},type:"button"},s)):"toggle"===i.field.type?f.default.createElement("label",{className:"x-settings-secondColumn x-toggle-wrapper"},f.default.createElement("input",{id:e,className:"x-toggle-input",type:"checkbox",checked:s,...i.field.events,onClick:e=>{n(e.currentTarget.checked);var t=i.field.events?.onClick;t&&t(e)}}),f.default.createElement("span",{className:"x-toggle-indicatorWrapper"},f.default.createElement("span",{className:"x-toggle-indicator"}))):"dropdown"===i.field.type?f.default.createElement("select",{className:"main-dropDown-dropDown",id:e,...i.field.events,onChange:e=>{n(i.field.options[e.currentTarget.selectedIndex]);var t=i.field.events?.onChange;t&&t(e)}},i.field.options.map((e,t)=>f.default.createElement("option",{selected:e===s,value:t+1},e))):f.default.createElement(f.default.Fragment,null)))}}}{},b={misskeyHost:"misskey.io",misskeyToken:"",useMisskeyWeb:!(v=[["public","パブリック"],["home","ホーム"],["followers","フォロワー"]]),misskeyVisibility:"ホーム",showContextMenuButton:!0,showControlPanelButton:!0},S=(i=e=>e.split("\n").map(e=>e.trim()).join("").trim())(`
  <svg class="${["e-9640-icon","e-9800-icon e-9800-baseline","Svg-img-icon-small"].join(" ")}" style="${i(`
  --encore-icon-height: var(--encore-graphic-size-decorative-smaller);
  --encore-icon-width: var(--encore-graphic-size-decorative-smaller);
`)}}" fill="currentColor" version="1.1" viewBox="0 0 135.47 135.47" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(-38.1 -100.7)">
      <path d="m54.63 120.96c-1.9779 0-3.8618 0.32979-5.6513 0.98909-3.2023 1.1302-5.8396 3.1553-7.9117 6.0751-1.9779 2.8256-2.9667 5.9807-2.9667 9.4656v61.88c0 4.5209 1.601 8.4294 4.8033 11.726 3.2965 3.2023 7.2055 4.8038 11.726 4.8038 4.6151 0 8.5236-1.6015 11.726-4.8038 3.2965-3.2965 4.9449-7.205 4.9449-11.726v-11.253c0.03556-2.4371 2.546-1.7977 3.8148 0 2.3763 4.1153 7.4142 7.6497 13.28 7.6295 5.8656-0.0202 10.737-2.9202 13.28-7.6295 0.96304-1.1358 3.6774-3.071 3.9558 0v11.253c0 4.5209 1.601 8.4294 4.8033 11.726 3.2965 3.2023 7.2055 4.8038 11.726 4.8038 4.6151 0 8.5236-1.6015 11.726-4.8038 3.2965-3.2965 4.9449-7.205 4.9449-11.726v-61.88c0-3.4849-1.0357-6.64-3.1078-9.4656-1.9779-2.9198-4.5683-4.9448-7.7706-6.0751-1.8837-0.6593-3.7676-0.98909-5.6513-0.98909-5.086 0-9.3712 1.9782-12.856 5.934l-16.775 19.632c-0.37674 0.28256-1.6248 2.4428-4.2757 2.4428-2.6509 0-3.7574-2.1602-4.1341-2.4428l-16.916-19.632c-3.3907-3.9558-7.6289-5.934-12.715-5.934zm104.53 0c-3.9558 0-7.3464 1.4129-10.172 4.2385-2.7314 2.7314-4.0969 6.0751-4.0969 10.031 0 3.9558 1.3655 7.3464 4.0969 10.172 2.8256 2.7314 6.2162 4.0974 10.172 4.0974 3.9558 0 7.3464-1.366 10.172-4.0974 2.8256-2.8256 4.2385-6.2162 4.2385-10.172 0-3.9558-1.4129-7.2995-4.2385-10.031-2.8256-2.8256-6.2162-4.2385-10.172-4.2385zm0.14107 31.364c-3.9558 0-7.3464 1.4129-10.172 4.2385s-4.238 6.2162-4.238 10.172v34.896c0 3.9558 1.4124 7.3464 4.238 10.172 2.8256 2.7314 6.2162 4.0974 10.172 4.0974s7.2995-1.366 10.031-4.0974c2.8256-2.8256 4.2385-6.2162 4.2385-10.172v-34.896c0-3.9558-1.4129-7.3464-4.2385-10.172-2.7314-2.8256-6.0751-4.2385-10.031-4.2385z"/>
    </g>
  </svg>
`),k=class{host;token;baseUrl;constructor(e,t){this.host=e,this.token=t,this.baseUrl=h(e)?new URL("/api",e).href:`https://${e}/api`}async createNote(e){if(e.text)try{var t=await fetch(this.baseUrl+"/notes/create",{method:"POST",headers:{Authorization:"Bearer "+this.token,"Content-Type":"application/json"},body:JSON.stringify({...e,i:this.token})}),i=await t.json();if(t.ok)return i;throw new Error(i.error?.message||t.statusText)}catch(e){Spicetify.showNotification(`[${u}] `+e.message,!0)}}},x=null,T=()=>{var e=a.getFieldValue("misskeyHost"),t=a.getFieldValue("misskeyToken");return e&&t?e===x?.host&&t===x?.token||(x=new k(e,t)):x=null,x},F={v1_get(e,t,i){return Spicetify.CosmosAsync.get("https://api.spotify.com/v1"+e,t,i)},async track(e){return this.v1_get("/tracks/"+e.id)},async album(e){return this.v1_get("/albums/"+e.id)},async artist(e){return this.v1_get("/artists/"+e.id)},async show(e){return this.v1_get("/shows/"+e.id)},async episode(e){return this.v1_get("/episodes/"+e.id)},async playlist(e){return this.v1_get("/playlists/"+e.id)}},C=async(t,i={})=>{if(t?.id){i=i.hashtag;try{let e="";switch(t.type){case Spicetify.URI.Type.TRACK:var s=await F.track(t);e+=s.name,s.artists.length&&(e=(e+=" - ")+s.artists.map(e=>e.name).join(", "));break;case Spicetify.URI.Type.ALBUM:var a=await F.album(t);e+=a.name;break;case Spicetify.URI.Type.ARTIST:var n=await F.artist(t);e+=n.name;break;case Spicetify.URI.Type.SHOW:var o=await F.show(t);e+=o.name;break;case Spicetify.URI.Type.EPISODE:var l=await F.episode(t);e=(e=e+l.name+" - ")+l.show.name;break;case Spicetify.URI.Type.PLAYLIST:case Spicetify.URI.Type.PLAYLIST_V2:var r=await F.playlist(t);e+=r.name}if(e)return i&&(e+=" #"+i),(e=(e+="\n")+t.toURL()).trim()}catch(e){Spicetify.showNotification(`[${u}] `+e.message,!0)}}},N=async(e,i={})=>{e=await C(e,i);if(e){let t=a.getFieldValue("misskeyVisibility");var s,i=v.find(([,e])=>e===t)?.[0];a.getFieldValue("useMisskeyWeb")?(s=a.getFieldValue("misskeyHost"))?((s=h(s)?new URL("/share",s):new URL(`https://${s}/share`)).searchParams.set("text",e),i&&s.searchParams.set("visibility",i),window.open(s)):Spicetify.showNotification(`[${u}] サーバーのホストを設定してください`,!0):(s=T())?await s.createNote({text:e,visibility:i})&&Spicetify.showNotification(`[${u}] 投稿しました`):Spicetify.showNotification(`[${u}] サーバーのホストとアクセストークンを設定してください`,!0)}else Spicetify.showNotification(`[${u}] この形式には非対応です`,!0)},I=async()=>{for(;!Spicetify;)await new Promise(e=>setTimeout(e,100));var e;(a=new w(u+" v"+p,d)).addInput("misskeyHost","サーバーのホスト",b.misskeyHost),a.addInput("misskeyToken","アクセストークン",b.misskeyToken),a.addButton("openSettingsApiPage","┗ 設定したサーバーの「設定 > API」を開く","開く",()=>{var e=a.getFieldValue("misskeyHost");e?window.open(h(e)?new URL("/settings/api",e):`https://${e}/settings/api`):Spicetify.showNotification("サーバーのホストを入力してください",!0)},{className:m}),a.addToggle("useMisskeyWeb","Misskey Webで投稿する（アクセストークン不要）",b.useMisskeyWeb),a.addDropDown("misskeyVisibility","公開範囲",v.map(([,e])=>e),v.findIndex(([,e])=>e===b.misskeyVisibility)),a.addToggle("showContextMenuButton","コンテキストメニューに「Misskeyでシェア」を表示",b.showContextMenuButton),a.addToggle("showControlPanelButton","コントロールパネルに「#NowPlaying」を表示",b.showControlPanelButton),a.addButton("openGitHubRepository","GitHubでリポジトリを開く","開く",()=>window.open(y),{className:m}),await a.pushSettings(),a.getFieldValue("showContextMenuButton")&&(new Spicetify.ContextMenu.Item("Misskeyでシェア",async e=>{2<=e.length?Spicetify.showNotification(`[${u}] 複数の項目が選択されています`,!0):(e=Spicetify.URI.from(e[0]),await N(e))},void 0,S).register(),(e=document.createElement("style")).textContent=`
      .Wrapper-sm-only, .Wrapper-small-only {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        position: absolute;
      }
    `,document.body.appendChild(e)),a.getFieldValue("showControlPanelButton")&&new Spicetify.Playbar.Button("#NowPlaying",S,async()=>{var e=Spicetify.URI.from(Spicetify.Player.data?.item.uri);await N(e,{hashtag:"NowPlaying"})}).register()},(async()=>{await I()})()})();