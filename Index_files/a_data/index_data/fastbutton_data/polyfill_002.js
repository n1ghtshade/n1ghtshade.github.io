// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-v3.0
!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=77)}({52:function(e,t){[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}})}))},77:function(e,t,o){"use strict";o.r(t);o(78),o(79),o(80),o(52)},78:function(e,t){!function(e,t){"use strict";var o,n,r,l;(function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o}e.prototype=window.Event.prototype,window.CustomEvent=e}(),t)||(document.head.insertAdjacentHTML("beforeend","<br><style>details{display:block}details:not(.▼)>*:not(summary):not(.▼▼){display:none !important}details>summary,details>summary,details>.▼▼{display:block}details .details-marker:before{content:'►'}details.▼ .details-marker:before{content:'▼'}</style>"),o={get:function(){if("nodeName"in this&&"DETAILS"==this.nodeName.toUpperCase())return this.hasAttribute("open")},set:function(e){if("nodeName"in this&&"DETAILS"==this.nodeName.toUpperCase())return r(this),this.classList[e?"add":"remove"]("▼"),this[e?"setAttribute":"removeAttribute"]("open","open"),e}},n=function(e){13!==e.keyCode&&"click"!==e.type||(this.parentNode.open=!this.parentNode.open),this.parentNode.dispatchEvent(new CustomEvent("toggle"))},r=function(e){if(!e._||!e._.__isShimmed){e._||(e._={});for(var t,o,r=-1;o=e.childNodes[++r];)3===o.nodeType&&/[^\t\n\r ]/.test(o.data)?(e.insertBefore(document.createElement("x-i"),o).innerHTML=o.data,e.removeChild(o)):"SUMMARY"==o.nodeName.toUpperCase()&&(t=o);t||((t=document.createElement("x-s")).innerHTML="Details",t.className="▼▼"),e.insertBefore(t,e.childNodes[0]),t.insertBefore(document.createElement("x-i"),t.childNodes[0]).className="details-marker",t.tabIndex=0,t.addEventListener("click",n,!1),t.addEventListener("keyup",n,!1),e._.__isShimmed=1}},l=function(){Object.defineProperty(e.Element.prototype,"open",o);for(var t,n=document.getElementsByTagName("details"),r=-1;t=n[++r];)t.open=t.hasAttribute("open")},"complete"!=document.readyState?document.addEventListener("DOMContentLoaded",l,!1):l())}(window,"open"in document.createElement("details"))},79:function(e,t){var o,n;o=function(e){return e=+e,isNaN(e)||e==1/0||e==-1/0?0:e},n=function(e){e=e||document.getElementsByTagName("BODY")[0];var t=window.getComputedStyle(e),o=window.getComputedStyle(e.parent),n=t.overflowX,r=t.overflowY,l=o.overflowX,i=o.overflowY;return("table-column"==t.display||"table-column-group"==t.display)&&"visible"!=l&&"clip"!=l&&"visible"!=i&&"clip"!=i&&"visible"!=n&&"clip"!=n&&"visible"!=r&&"clip"!=r},Element.prototype.scroll||(Element.prototype.scroll=function(){var e,t,r=arguments.length,l=this.ownerDocument,i=l.defaultView,s="BackCompat"==l.compatMode,a=document.getElementsByTagName("BODY")[0],c={};if(l==window.document&&i&&0!==r){if(1===r){var p=arguments[0];if("object"!=typeof p)throw"Failed to execute 'scrollBy' on 'Element': parameter 1 ('options') is not an object.";"left"in p&&(c.left=o(p.left)),"top"in p&&(c.top=o(p.top)),e="left"in c?c.left:this.scrollLeft,t="top"in c?c.top:this.scrollTop}else c.left=e=o(arguments[0]),c.top=t=o(arguments[1]);if(this!=document.documentElement)this!=a||!s||n(a)?(this.scrollLeft=e,this.scrollTop=t):i.scroll(c.left,c.top);else{if(s)return;i.scroll("scrollX"in i?i.scrollX:"pageXOffset"in i?i.pageXOffset:this.scrollLeft,t)}}}),Element.prototype.scrollTo||(Element.prototype.scrollTo=Element.prototype.scroll),Element.prototype.scrollBy||(Element.prototype.scrollBy=function(){var e=arguments.length,t={};if(0!==e){if(1===e){var n=arguments[0];if("object"!=typeof n)throw"Failed to execute 'scrollBy' on 'Element': parameter 1 ('options') is not an object.";"left"in n&&(t.left=o(n.left)),"top"in n&&(t.top=o(n.top))}else t.left=o(arguments[0]),t.top=o(arguments[1]);t.left="left"in t?t.left+this.scrollLeft:this.scrollLeft,t.top="top"in t?t.top+this.scrollTop:this.scrollTop,this.scroll(t)}})},80:function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null})}});
//# sourceMappingURL=polyfill.min.js.map
// @license-end
