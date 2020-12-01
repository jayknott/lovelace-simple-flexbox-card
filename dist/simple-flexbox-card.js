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
function t(t,e,r,n){var s,i=arguments.length,o=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o
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
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,r=null)=>{for(;e!==r;){const r=e.nextSibling;t.removeChild(e),e=r}},n=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${n}--\x3e`,i=new RegExp(`${n}|${s}`);class o{constructor(t,e){this.parts=[],this.element=e;const r=[],s=[],o=document.createTreeWalker(e.content,133,null,!1);let l=0,u=-1,h=0;const{strings:p,values:{length:m}}=t;for(;h<m;){const t=o.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:r}=e;let n=0;for(let t=0;t<r;t++)a(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=p[h],r=d.exec(e)[2],n=r.toLowerCase()+"$lit$",s=t.getAttribute(n);t.removeAttribute(n);const o=s.split(i);this.parts.push({type:"attribute",index:u,name:r,strings:o}),h+=o.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const n=t.parentNode,s=e.split(i),o=s.length-1;for(let e=0;e<o;e++){let r,i=s[e];if(""===i)r=c();else{const t=d.exec(i);null!==t&&a(t[2],"$lit$")&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),r=document.createTextNode(i)}n.insertBefore(r,t),this.parts.push({type:"node",index:++u})}""===s[o]?(n.insertBefore(c(),t),r.push(t)):t.data=s[o],h+=o}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&u!==l||(u++,e.insertBefore(c(),t)),l=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(r.push(t),u--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),h++}}else o.currentNode=s.pop()}for(const t of r)t.parentNode.removeChild(t)}}const a=(t,e)=>{const r=t.length-e.length;return r>=0&&t.slice(r)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:r},parts:n}=t,s=document.createTreeWalker(r,133,null,!1);let i=p(n),o=n[i],a=-1,l=0;const c=[];let d=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,i=p(n,i),o=n[i]}c.forEach(t=>t.parentNode.removeChild(t))}const h=t=>{let e=11===t.nodeType?0:1;const r=document.createTreeWalker(t,133,null,!1);for(;r.nextNode();)e++;return e},p=(t,e=-1)=>{for(let r=e+1;r<t.length;r++){const e=t[r];if(l(e))return r}return-1};
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
const m=new WeakMap,f=t=>"function"==typeof t&&m.has(t),g={},y={};
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
class _{constructor(t,e,r){this.__parts=[],this.template=t,this.processor=e,this.options=r}update(t){let e=0;for(const r of this.__parts)void 0!==r&&r.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],n=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let i,o=0,a=0,c=s.nextNode();for(;o<n.length;)if(i=n[o],l(i)){for(;a<i.index;)a++,"TEMPLATE"===c.nodeName&&(r.push(c),s.currentNode=c.content),null===(c=s.nextNode())&&(s.currentNode=r.pop(),c=s.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const S=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),w=` ${n} `;class v{constructor(t,e,r,n){this.strings=t,this.values=e,this.type=r,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",r=!1;for(let i=0;i<t;i++){const t=this.strings[i],o=t.lastIndexOf("\x3c!--");r=(o>-1||r)&&-1===t.indexOf("--\x3e",o+1);const a=d.exec(t);e+=null===a?t+(r?w:s):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+n}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==S&&(e=S.createHTML(e)),t.innerHTML=e,t}}
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
 */const b=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class C{constructor(t,e,r){this.dirty=!0,this.element=t,this.name=e,this.strings=r,this.parts=[];for(let t=0;t<r.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1,r=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=r[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!x(t))return t}let n="";for(let s=0;s<e;s++){n+=t[s];const e=r[s];if(void 0!==e){const t=e.value;if(b(t)||!x(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||b(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class N{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}const t=this.__pendingValue;t!==g&&(b(t)?t!==this.value&&this.__commitText(t):t instanceof v?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,r="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=r:this.__commitNode(document.createTextNode(r)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof _&&this.value.template===e)this.value.update(t.values);else{const r=new _(e,t.processor,this.options),n=r._clone();r.update(t.values),this.__commitNode(n),this.value=r}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let r,n=0;for(const s of t)r=e[n],void 0===r&&(r=new N(this.options),e.push(r),0===n?r.appendIntoPart(this):r.insertAfterPart(e[n-1])),r.setValue(s),r.commit(),n++;n<e.length&&(e.length=n,this.clear(r&&r.endNode))}clear(t=this.startNode){r(this.startNode.parentNode,t.nextSibling,this.endNode)}}class M{constructor(t,e,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=r}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=g}}class E extends C{constructor(t,e,r){super(t,e,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends P{}let A=!1;(()=>{try{const t={get capture(){return A=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class D{constructor(t,e,r){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=r,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=this.__pendingValue,e=this.value,r=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=V(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const V=t=>t&&(A?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function O(t){let e=k.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},k.set(t.type,e));let r=e.stringsArray.get(t.strings);if(void 0!==r)return r;const s=t.strings.join(n);return r=e.keyString.get(s),void 0===r&&(r=new o(t,t.getTemplateElement()),e.keyString.set(s,r)),e.stringsArray.set(t.strings,r),r}const k=new Map,U=new WeakMap;
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
 */const Y=new
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
class{handleAttributeExpressions(t,e,r,n){const s=e[0];if("."===s){return new E(t,e.slice(1),r).parts}if("@"===s)return[new D(t,e.slice(1),n.eventContext)];if("?"===s)return[new M(t,e.slice(1),r)];return new C(t,e,r).parts}handleTextExpression(t){return new N(t)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const R=(t,...e)=>new v(t,e,"html",Y)
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
 */,H=(t,e)=>`${t}--${e}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),L=!1);const $=t=>e=>{const r=H(e.type,t);let s=k.get(r);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},k.set(r,s));let i=s.stringsArray.get(e.strings);if(void 0!==i)return i;const a=e.strings.join(n);if(i=s.keyString.get(a),void 0===i){const r=e.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(r,t),i=new o(e,r),s.keyString.set(a,i)}return s.stringsArray.set(e.strings,i),i},j=["html","svg"],q=new Set,z=(t,e,r)=>{q.add(t);const n=r?r.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:i}=s;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(n,t);const o=document.createElement("style");for(let t=0;t<i;t++){const e=s[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{j.forEach(e=>{const r=k.get(H(e,t));void 0!==r&&r.keyString.forEach(t=>{const{element:{content:e}}=t,r=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{r.add(t)}),u(t,r)})})})(t);const a=n.content;r?function(t,e,r=null){const{element:{content:n},parts:s}=t;if(null==r)return void n.appendChild(e);const i=document.createTreeWalker(n,133,null,!1);let o=p(s),a=0,l=-1;for(;i.nextNode();){l++;for(i.currentNode===r&&(a=h(e),r.parentNode.insertBefore(e,r));-1!==o&&s[o].index===l;){if(a>0){for(;-1!==o;)s[o].index+=a,o=p(s,o);return}o=p(s,o)}}}(r,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(r){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),u(r,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const F={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},I=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:I};class B extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,r)=>{const n=this._attributeNameForProperty(r,e);void 0!==n&&(this._attributeToPropertyMap.set(n,r),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=W){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const r="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdateInternal(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||W}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const r of e)this.createProperty(r,t[r])}}static _attributeNameForProperty(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,r=I){return r(t,e)}static _propertyValueFromAttribute(t,e){const r=e.type,n=e.converter||F,s="function"==typeof n?n:n.fromAttribute;return s?s(t,r):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const r=e.type,n=e.converter;return(n&&n.toAttribute||F.toAttribute)(t,r)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,e,r=W){const n=this.constructor,s=n._attributeNameForProperty(t,r);if(void 0!==s){const t=n._propertyValueToAttribute(e,r);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const r=this.constructor,n=r._attributeToPropertyMap.get(t);if(void 0!==n){const t=r.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=r._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,r){let n=!0;if(void 0!==t){const s=this.constructor;r=r||s.getPropertyOptions(t),s._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}B.finalized=!0;
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
const J=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function Z(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):J(t,e)}function X(t){return Z({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class Q{constructor(t,e){if(e!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...e)=>{const r=e.reduce((e,r,n)=>e+(t=>{if(t instanceof Q)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+t[n+1],t[0]);return new Q(r,K)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const et={};class rt extends B{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,r)=>t.reduceRight((t,r)=>Array.isArray(r)?e(r,t):(t.add(r),t),r),r=e(t,new Set),n=[];r.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!G){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new Q(String(e),K)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==et&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return et}}rt.finalized=!0,rt.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const s=n.scopeName,i=U.has(e),o=L&&11===e.nodeType&&!!e.host,a=o&&!q.has(s),l=a?document.createDocumentFragment():e;if(((t,e,n)=>{let s=U.get(e);void 0===s&&(r(e,e.firstChild),U.set(e,s=new N(Object.assign({templateFactory:O},n))),s.appendInto(e)),s.setValue(t),s.commit()})(t,l,Object.assign({templateFactory:$(s)},n)),a){const t=U.get(l);U.delete(l);const n=t.value instanceof _?t.value.template:void 0;z(s,l,n),r(e,e.firstChild),e.appendChild(l),U.set(e,t)}!i&&o&&window.ShadyCSS.styleElement(e.host)};var nt=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,st="[^\\s]+",it=/\[([^]*?)\]/gm;function ot(t,e){for(var r=[],n=0,s=t.length;n<s;n++)r.push(t[n].substr(0,e));return r}var at=function(t){return function(e,r){var n=r[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return n>-1?n:null}};function lt(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var n=0,s=e;n<s.length;n++){var i=s[n];for(var o in i)t[o]=i[o]}return t}var ct=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dt=["January","February","March","April","May","June","July","August","September","October","November","December"],ut=ot(dt,3),ht={dayNamesShort:ot(ct,3),dayNames:ct,monthNamesShort:ut,monthNames:dt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},pt=lt({},ht),mt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},ft={D:function(t){return String(t.getDate())},DD:function(t){return mt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return mt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return mt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return mt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return mt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return mt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return mt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return mt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return mt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return mt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return mt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(Math.floor(Math.abs(e)/60),2)+":"+mt(Math.abs(e)%60,2)}},gt=function(t){return+t-1},yt=[null,"[1-9]\\d?"],_t=[null,st],St=["isPm",st,function(t,e){var r=t.toLowerCase();return r===e.amPm[0]?0:r===e.amPm[1]?1:null}],wt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var r=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?r:-r}return 0}],vt=(at("monthNamesShort"),at("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var bt=function(t,e,r){if(void 0===e&&(e=vt.default),void 0===r&&(r={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var n=[];e=(e=vt[e]||e).replace(it,(function(t,e){return n.push(e),"@@@"}));var s=lt(lt({},pt),r);return(e=e.replace(nt,(function(e){return ft[e](t,s)}))).replace(/@@@/g,(function(){return n.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();var xt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Ct={common:xt};const Pt={en:Object.freeze({__proto__:null,common:xt,default:Ct})};function Nt(t,e="",r=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let s;try{s=t.split(".").reduce((t,e)=>t[e],Pt[n])}catch(e){s=t.split(".").reduce((t,e)=>t[e],Pt.en)}return void 0===s&&(s=t.split(".").reduce((t,e)=>t[e],Pt.en)),""!==e&&""!==r&&(s=s.replace(e,r)),s}const Mt=window.loadCardHelpers()?window.loadCardHelpers():void 0;console.info(`%c  SIMPLE-FLEXBOX-CARD  \n%c  ${Nt("common.version")} 0.1.0            `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"simple-flexbox-card",name:"Simple Flexbox Card",description:"Display a simple flexbox in Lovelace dashboards."});let Et=class extends rt{constructor(){super(...arguments),this._cards=[],this._refCards=[]}static getStubConfig(){return{}}async setConfig(t){if(!t)throw new Error(Nt("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=t,t.cards&&(this._cards=t.cards)}renderCard(){const t=this._cards.map(t=>this.createCardElement(t));Promise.all(t).then(t=>{this._refCards=t})}createError(t,e){return this.createElement("hui-error-card",{type:"error",error:t,config:e})}async createElement(t,e){if(Mt){return(await Mt).createCardElement(e)}const r=document.createElement(t);try{r.setConfig(e)}catch(r){return console.error(t,r),this.createError(r.message,e)}return r}async createCardElement(t){let e=t.type;e=e.startsWith("divider")?"hui-divider-row":e.startsWith("custom:")?e.substr("custom:".length):`hui-${e}-card`;const r=await this.createElement(e,t);return r.hass=this.hass,r.addEventListener("ll-rebuild",e=>{e.stopPropagation(),this.createCardElement(t).then(()=>{this.renderCard()})},{once:!0}),r}shouldUpdate(t){return!!this.config&&function(t,e,r){if(e.has("config")||r)return!0;if(t.config.entity){var n=e.get("hass");return!n||n.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){if(this.config.show_warning)return this._showWarning(Nt("common.show_warning"));if(this.config.show_error)return this._showError(Nt("common.show_error"));const t=this._refCards.map(t=>R`<li>${t}</li>`);return R`<ul class="flex-container">${t}</ul>`}_showWarning(t){return R`<hui-warning>${t}</hui-warning>`}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),R`${e}`}static get styles(){return tt`
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
    `}};var Tt;t([Z({attribute:!1})],Et.prototype,"hass",void 0),t([X()],Et.prototype,"config",void 0),t([X()],Et.prototype,"_cards",void 0),t([X()],Et.prototype,"_refCards",void 0),Et=t([(Tt="simple-flexbox-card",t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(Tt,t):((t,e)=>{const{kind:r,elements:n}=e;return{kind:r,elements:n,finisher(e){window.customElements.define(t,e)}}})(Tt,t))],Et);export{Et as SimpleFlexboxCard};
