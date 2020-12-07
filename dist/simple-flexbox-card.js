/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}String(Math.random()).slice(2),window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
let t=!1;(()=>{try{const e={get capture(){return t=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})(),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0"),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
void 0===window.ShadyCSS||void 0===window.ShadyCSS.prepareTemplateDom&&console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=(e,t)=>e
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const r=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function o(e){return(t,o)=>void 0!==o?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,o):r(e,t)}function n(e){return o({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&CSSStyleSheet.prototype;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");var i={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},s={common:i};const a={en:Object.freeze({__proto__:null,common:i,default:s})};const c=[customElements.whenDefined("hui-masonry-view"),customElements.whenDefined("hc-lovelace")];Promise.race(c).then(()=>{const t=customElements.get("hui-masonry-view")?Object.getPrototypeOf(customElements.get("hui-masonry-view")):Object.getPrototypeOf(customElements.get("hc-lovelace")),r=t.prototype.html,i=t.prototype.css,s=window.loadCardHelpers()?window.loadCardHelpers():void 0,c=async(e,t)=>{if(s){return(await s).createCardElement(t)}const r=document.createElement(e);try{r.setConfig(t)}catch(r){return console.error(e,r),await((e,t)=>c("hui-error-card",{type:"error",error:e,config:t}))(r.message,t)}return r};class d extends t{constructor(){super(...arguments),this._cards=[]}static getStubConfig(){return{}}set hass(e){this._hass=e,this._refCards||!this._config?this._refCards&&this._refCards.forEach(t=>{t.hass=e}):this.renderCard()}setConfig(e){if(!(null==e?void 0:e.cards)||!Array.isArray(e.cards))throw new Error("Card config incorrect");this._config=e,this._cards=e.cards,this._hass&&this.renderCard()}renderCard(){const e=this._cards.map((e,t)=>this.createCardElement(e,t));Promise.all(e).then(e=>this._refCards=e)}async createCardElement(e,t){let r=e.type;r=r.startsWith("divider")?"hui-divider-row":r.startsWith("custom:")?r.substr("custom:".length):`hui-${r}-card`;const o=await c(r,e);return o.hass=this._hass,o.addEventListener("ll-rebuild",r=>{console.log("ll-rebuild "+t),r.stopPropagation(),this.createCardElement(e,t).then(e=>{this._refCards[t]=e})},{once:!0}),o}render(){return this._config&&this._hass&&this._refCards?r`<ul class="flex-container">
        ${this._refCards.map(e=>r`<li>${e}</li>`)}
      </ul>`:r``}static get styles(){return i`
        .flex-container {
          padding: 0;
          margin: 0 0 0 0;
          list-style: none;
          -ms-box-orient: horizontal;
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -moz-flex;
          display: -webkit-flex;
          display: flex;
          -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
        }
      `}getCardSize(){return 3}}e([o({attribute:!1})],d.prototype,"_hass",void 0),e([n()],d.prototype,"_config",void 0),e([n()],d.prototype,"_cards",void 0),e([n()],d.prototype,"_refCards",void 0),customElements.get("simple-flexbox-card")||(customElements.define("simple-flexbox-card",d),console.info(`%c  SIMPLE-FLEXBOX-CARD  \n%c  ${function(e,t="",r=""){const o=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=e.split(".").reduce((e,t)=>e[t],a[o])}catch(t){n=e.split(".").reduce((e,t)=>e[t],a.en)}return void 0===n&&(n=e.split(".").reduce((e,t)=>e[t],a.en)),""!==t&&""!==r&&(n=n.replace(t,r)),n}("common.version")} 0.1.1        `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"))});
