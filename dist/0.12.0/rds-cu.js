!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=7)}([function(e,t){!function(){if("function"==typeof NodeList.prototype.forEach)return!1;NodeList.prototype.forEach=Array.prototype.forEach}()},function(e,t,o){"use strict";for(var n=0,i=document.getElementsByClassName("accordion__toggle"),a=function(){var e=this.getAttribute("aria-expanded"),t=(this.previousElementSibling,document.getElementsByClassName("accordion__input--single"));Array.prototype.forEach.call(t,(function(e){e.nextElementSibling.setAttribute("aria-expanded","false"),e.nextElementSibling.nextElementSibling.setAttribute("aria-hidden","true")})),"true"===e?(this.setAttribute("aria-expanded","false"),this.nextElementSibling.setAttribute("aria-hidden","true")):(this.setAttribute("aria-expanded","true"),this.nextElementSibling.setAttribute("aria-hidden","false"))};n<i.length;n++)i[n].addEventListener("click",a,!1);for(var s=0,r=document.getElementsByClassName("accordion__input"),l=function(){for(var e=this.checked,t=document.getElementsByClassName("accordion__input--single"),o=0;o<t.length;o++)t[o].checked=!1;e&&(this.checked=!0)};s<r.length;s++)r[s].addEventListener("change",l,!1)},function(e,t){!function(){"use strict";var e=document.querySelector(".masthead__nav");if(document.querySelector("button.c-menupopup"))for(var t=function(){this.nextElementSibling.classList.add("is-visible"),"ontouchstart"in document.documentElement||e.contains(this)&&this.nextElementSibling.classList.add("u-fixed")},o=function(){this.nextElementSibling.classList.remove("is-visible")},n=document.querySelectorAll("button.c-menupopup"),i=0;i<n.length;i++)n[i].addEventListener("click",t),n[i].addEventListener("mouseout",o)}()},function(e,t){var o=document.querySelector(".u-block--alert"),n=document.querySelector(".alertheader__dismiss");if(o){var i=o.offsetTop;window.onscroll=function(){window.pageYOffset>i?o.classList.add("u-sticky"):o.classList.remove("u-sticky")},n&&n.addEventListener("click",(function(){o.parentNode.removeChild(o)}),!1)}},function(e,t,o){"use strict";var n=document.querySelector(".menu__toggle"),i=document.querySelectorAll(".b-menu input");if(n){document.querySelector(".menu__toggle")&&n.addEventListener("click",(function(){if(n.classList.toggle("menu__toggle--opened"),"Expand all"===n.innerHTML){n.innerHTML="Collapse all";for(var e=0;e<i.length;e++)i[e].checked=!0}else{n.innerHTML="Expand all";for(var t=0;t<i.length;t++)i[t].checked=!1}}))}},function(e,t,o){"use strict";o.r(t);o(0),o(1),o(2),o(3);var n=window.CustomEvent;function i(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function a(e){e&&e.blur&&e!==document.body&&e.blur()}function s(e,t){for(var o=0;o<e.length;++o)if(e[o]===t)return!0;return!1}function r(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function l(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,o=!1,n=function(){o?this.downgradeModal():this.maybeHideModal(),o=!1}.bind(this),i=function(i){if(i.target===e){var a="DOMNodeRemoved";o|=i.type.substr(0,a.length)===a,window.clearTimeout(t),t=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,i)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}n&&"object"!=typeof n||((n=function(e,t){t=t||{};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),o}).prototype=window.Event.prototype),l.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),d.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var o=document.createEvent("MouseEvents");o.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(o),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));t.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(t.join(", "))}a(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!d.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),o=function(e,o){return!(void 0===t[e]||t[e]===o)};if(t.opacity<1||o("zIndex","auto")||o("transform","none")||o("mixBlendMode","normal")||o("filter","none")||o("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,d.needsCentering(this.dialog_)?(d.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==e&&(this.dialog_.returnValue=e);var t=new n("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(t)}};var d={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,o=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,o)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var o=document.styleSheets[t],n=null;try{n=o.cssRules}catch(e){}if(n)for(var i=0;i<n.length;++i){var a=n[i],r=null;try{r=document.querySelectorAll(a.selectorText)}catch(e){}if(r&&s(r,e)){var l=a.style.getPropertyValue("top"),d=a.style.getPropertyValue("bottom");if(l&&"auto"!==l||d&&"auto"!==d)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!d.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new l(e)},registerDialog:function(e){e.showModal||d.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var o=[];t.forEach((function(e){for(var t,n=0;t=e.removedNodes[n];++n)t instanceof Element&&("dialog"===t.localName&&o.push(t),o=o.concat(t.querySelectorAll("dialog")))})),o.length&&e(o)})))}};if(d.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},d.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},d.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,o=0;e=this.pendingDialogStack[o];++o)e.updateZIndex(--t,--t),0===o&&(this.overlay.style.zIndex=--t);var n=this.pendingDialogStack[0];n?(n.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},d.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=i(e);){for(var t,o=0;t=this.pendingDialogStack[o];++o)if(t.dialog===e)return 0===o;e=e.parentElement}return!1},d.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),a(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():e.target!==document.documentElement&&document.documentElement.focus()),!1}},d.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,27===e.keyCode){e.preventDefault(),e.stopPropagation();var t=new n("cancel",{bubbles:!1,cancelable:!0}),o=this.pendingDialogStack[0];o&&o.dialog.dispatchEvent(t)&&o.dialog.close()}else 9===e.keyCode&&(this.forwardTab_=!e.shiftKey)},d.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},d.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},d.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},d.dm=new d.DialogManager,d.formSubmitter=null,d.useValue=null,void 0===window.HTMLDialogElement){var c=document.createElement("form");if(c.setAttribute("method","dialog"),"dialog"!==c.method){var u=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(u){var h=u.get;u.get=function(){return r(this)?"dialog":h.call(this)};var m=u.set;u.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):m.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",u)}}document.addEventListener("click",(function(e){if(d.formSubmitter=null,d.useValue=null,!e.defaultPrevented){var t=e.target;if(t&&r(t.form)){if(!("submit"===t.type&&["button","input"].indexOf(t.localName)>-1)){if("input"!==t.localName||"image"!==t.type)return;d.useValue=e.offsetX+","+e.offsetY}i(t)&&(d.formSubmitter=t)}}}),!1);var p=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!r(this))return p.call(this);var e=i(this);e&&e.close()},document.addEventListener("submit",(function(e){var t=e.target;if(r(t)){e.preventDefault();var o=i(t);if(o){var n=d.formSubmitter;n&&n.form===t?o.close(d.useValue||n.value):o.close(),d.formSubmitter=null}}}),!0)}var f=d;!function(){var e=document.body,t=document.querySelector("header"),o=document.querySelector(".b-masthead"),n=document.querySelector(".masthead__nav"),i=document.querySelector(".masthead__search"),a=document.querySelector(".masthead__hamburger"),s=document.querySelector(".c-hamburger"),r=document.querySelector(".masthead__login"),l=document.querySelector(".l-overlay-modal"),d=document.querySelector(".modal__menu"),c=document.querySelector(".modal__search"),u=document.querySelector(".modal__login"),h=document.querySelector(".js-overlay-movemenu"),m=document.querySelector(".b-menu"),p=0,g=window.innerWidth,v=t.scrollHeight,y=document.querySelector("button.c-menupopup + .menupopup__menu");l&&f.registerDialog(l);var b=null,w=null;if(n&&o.classList.contains("b-masthead--responsivenav")){var _,E=function(e){return e.scrollWidth>e.offsetWidth},L=function(){if(E(n)&&window.innerWidth<640&&e.classList.contains("homepage")&&n.classList.add("js-masthead-slidenav"),E(n)||window.innerWidth<=960){b=!0,e.classList.add("js-masthead-2packed");var t=window.innerWidth;g=t}else{b=!1;var o=window.innerWidth;g<o&&e.classList.remove("js-masthead-2packed")}};window.addEventListener("resize",(function(){_||(_=setTimeout((function(){_=null,window.innerWidth>=960&&!0===b&&n.scrollWidth>n.clientWidth?o.classList.add("js-masthead-2biggie"):L()}),66))}),!1),window.addEventListener("load",(function(){L()}))}if("ontouchstart"in document.documentElement&&function(){for(var e=document.querySelectorAll(".masthead__nav li.c-menupopup"),t=function(t){e[t].addEventListener("touchend",(function o(n){[].forEach.call(e,(function(){e[t].getElementsByTagName("UL")[0].setAttribute("style","position: absolute; top: 70px;")}));var i=this.cloneNode(!0);i.classList.remove("c-menupopup"),i.classList.add("js-menupopup-clonetxt"),i.classList.add("menupopup__sep"),this.getElementsByTagName("A")[0].nextElementSibling.prepend(i),this.firstChild.href="#",e[t].removeEventListener("touchend",o)}),!1)},i=0;i<e.length;i++)t(i);document.addEventListener("touchend",(function(e){y&&(e.target.closest("li.c-menupopup a")||e.target.closest("button.c-menupopup")?(y.style.position="absolute",y.classList.remove("u-fixed"),n.style.paddingBottom="100vh",window.innerWidth>=960&&!document.querySelector(".js-masthead-2packed")&&(n.style.paddingTop="35px")):(n.setAttribute("style","padding-bottom: 0; padding-top: 0"),y.classList.remove("is-visible"),o.focus()))}))}(),o&&o.classList.contains("js-masthead-stick")){var S=function(){window.scrollY<=15?(null===t?alert("RDS requires you put your Header blocks inside a <header> tag, or things are going to break. Please fix."):v=-t.scrollHeight,o.classList.remove("js-masthead--stickyscroll","b-masthead--shadow"),document.body.style.marginTop="0px"):(o.classList.add("js-masthead--stickyscroll","b-masthead--shadow"),v-=window.scrollY-p,v=Math.min(v,0),v=Math.max(v,-o.scrollHeight),o.style.top=v+"px",document.body.style.marginTop="15px","0px"===o.style.top&&window.scrollY>300&&window.innerWidth>720?document.body.classList.add("has-stickyscroll"):document.body.classList.remove("has-stickyscroll")),window.scrollY<300&&o.classList.remove("b-masthead--shadow"),p=window.scrollY};window.addEventListener("scroll",S)}if(s){var k=function(){""===document.body.style.overflowY||"auto"===document.body.style.overflowY?(document.body.style.position="fixed",document.body.style.overflowY="scroll"):(document.body.style.position="static",document.body.style.overflowY="auto")},x=function(e){l.show(),a.classList.remove("u-hide-l"),s.classList.add("is-active"),window.removeEventListener("scroll",S),k(),null!==w&&a.classList.remove(w),"search"===e&&(i.classList.add("u-visually-hidden"),c.classList.remove("u-visually-hidden"),document.querySelector(".modal__search .searchform__input").focus(),r&&u.classList.add("u-visually-hidden")),"login"===e&&(document.querySelector(".login__field").focus(),u.classList.remove("u-visually-hidden"),l.show(),r.classList.add("u-visually-hidden"))};i&&i.addEventListener("click",(function(){x("search")}),!1),a.classList.contains("u-hide-l")?w="u-hide-l":a.classList.contains("is-hidden")&&(w="is-hidden"),s.addEventListener("mousedown",(function(){s.classList.toggle("is-active"),s.classList.contains("is-active")?(h&&(l.show(),d.classList.remove("u-visually-hidden"),d.appendChild(m)),k(),window.removeEventListener("scroll",S),r&&(l.close(),r.classList.add("u-visually-hidden"))):(k(),window.addEventListener("scroll",S),l.close(),h&&(d.classList.add("u-visually-hidden"),h.appendChild(m)),i&&(c.classList.add("u-visually-hidden"),i.classList.remove("u-visually-hidden")),r&&(r.classList.remove("u-visually-hidden"),u.classList.remove("u-visually-hidden")),null!==w&&a.classList.add(w))}),!1),r&&r.addEventListener("click",(function(){x("login")}),!1)}}();o(4);var g=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],v=0;document.addEventListener("keydown",(function(e){g.indexOf(e.key)<0||e.key!==g[v]?v=0:(v++,g.length===v&&(v=0,window.location.href="https://www.youtube.com/watch?v=RRwqftGrxf4"))}),!1)},,function(e,t,o){e.exports=o(5)}]);