parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"2K4N":[function(require,module,exports) {
var define;
var global = arguments[3];
var t,e=arguments[3];!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof t&&t.amd?t([],r):"object"==typeof exports?exports.Handlebars=r():e.Handlebars=r()}(this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}return r.m=t,r.c=e,r.p="",r(0)}([function(t,e,r){"use strict";var n=r(1).default,a=r(2).default;e.__esModule=!0;var o=n(r(3)),i=a(r(20)),u=a(r(5)),s=n(r(4)),l=n(r(21)),c=a(r(33));function f(){var t=new o.HandlebarsEnvironment;return s.extend(t,o),t.SafeString=i.default,t.Exception=u.default,t.Utils=s,t.escapeExpression=s.escapeExpression,t.VM=l,t.template=function(e){return l.template(e,t)},t}var p=f();p.create=f,c.default(p),p.default=p,e.default=p,t.exports=e.default},function(t,e){"use strict";e.default=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e},e.__esModule=!0},function(t,e){"use strict";e.default=function(t){return t&&t.__esModule?t:{default:t}},e.__esModule=!0},function(t,e,r){"use strict";var n=r(2).default;e.__esModule=!0,e.HandlebarsEnvironment=l;var a=r(4),o=n(r(5)),i=r(9),u=r(17),s=n(r(19));e.VERSION="4.1.1";e.COMPILER_REVISION=7;e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function l(t,e,r){this.helpers=t||{},this.partials=e||{},this.decorators=r||{},i.registerDefaultHelpers(this),u.registerDefaultDecorators(this)}l.prototype={constructor:l,logger:s.default,log:s.default.log,registerHelper:function(t,e){if("[object Object]"===a.toString.call(t)){if(e)throw new o.default("Arg not supported with multiple helpers");a.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if("[object Object]"===a.toString.call(t))a.extend(this.partials,t);else{if(void 0===e)throw new o.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if("[object Object]"===a.toString.call(t)){if(e)throw new o.default("Arg not supported with multiple decorators");a.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]}};var c=s.default.log;e.log=c,e.createFrame=a.createFrame,e.logger=s.default},function(t,e){"use strict";e.__esModule=!0,e.extend=i,e.indexOf=function(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1},e.escapeExpression=function(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}if(!a.test(t))return t;return t.replace(n,o)},e.isEmpty=function(t){return!t&&0!==t||!(!l(t)||0!==t.length)},e.createFrame=function(t){var e=i({},t);return e._parent=t,e},e.blockParams=function(t,e){return t.path=e,t},e.appendContextPath=function(t,e){return(t?t+".":"")+e};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},n=/[&<>"'`=]/g,a=/[&<>"'`=]/;function o(t){return r[t]}function i(t){for(var e=1;e<arguments.length;e++)for(var r in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],r)&&(t[r]=arguments[e][r]);return t}var u=Object.prototype.toString;e.toString=u;var s=function(t){return"function"==typeof t};s(/x/)&&(e.isFunction=s=function(t){return"function"==typeof t&&"[object Function]"===u.call(t)}),e.isFunction=s;var l=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===u.call(t)};e.isArray=l},function(t,e,r){"use strict";var n=r(6).default;e.__esModule=!0;var a=["description","fileName","lineNumber","message","name","number","stack"];function o(t,e){var r=e&&e.loc,i=void 0,u=void 0;r&&(t+=" - "+(i=r.start.line)+":"+(u=r.start.column));for(var s=Error.prototype.constructor.call(this,t),l=0;l<a.length;l++)this[a[l]]=s[a[l]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{r&&(this.lineNumber=i,n?Object.defineProperty(this,"column",{value:u,enumerable:!0}):this.column=u)}catch(c){}}o.prototype=new Error,e.default=o,t.exports=e.default},function(t,e,r){t.exports={default:r(7),__esModule:!0}},function(t,e,r){var n=r(8);t.exports=function(t,e,r){return n.setDesc(t,e,r)}},function(t,e){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,e,r){"use strict";var n=r(2).default;e.__esModule=!0,e.registerDefaultHelpers=function(t){a.default(t),o.default(t),i.default(t),u.default(t),s.default(t),l.default(t),c.default(t)};var a=n(r(10)),o=n(r(11)),i=n(r(12)),u=n(r(13)),s=n(r(14)),l=n(r(15)),c=n(r(16))},function(t,e,r){"use strict";e.__esModule=!0;var n=r(4);e.default=function(t){t.registerHelper("blockHelperMissing",function(e,r){var a=r.inverse,o=r.fn;if(!0===e)return o(this);if(!1===e||null==e)return a(this);if(n.isArray(e))return e.length>0?(r.ids&&(r.ids=[r.name]),t.helpers.each(e,r)):a(this);if(r.data&&r.ids){var i=n.createFrame(r.data);i.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:i}}return o(e,r)})},t.exports=e.default},function(t,e,r){"use strict";var n=r(2).default;e.__esModule=!0;var a=r(4),o=n(r(5));e.default=function(t){t.registerHelper("each",function(t,e){if(!e)throw new o.default("Must pass iterator to #each");var r=e.fn,n=e.inverse,i=0,u="",s=void 0,l=void 0;function c(e,n,o){s&&(s.key=e,s.index=n,s.first=0===n,s.last=!!o,l&&(s.contextPath=l+e)),u+=r(t[e],{data:s,blockParams:a.blockParams([t[e],e],[l+e,null])})}if(e.data&&e.ids&&(l=a.appendContextPath(e.data.contextPath,e.ids[0])+"."),a.isFunction(t)&&(t=t.call(this)),e.data&&(s=a.createFrame(e.data)),t&&"object"==typeof t)if(a.isArray(t))for(var f=t.length;i<f;i++)i in t&&c(i,i,i===t.length-1);else{var p=void 0;for(var d in t)t.hasOwnProperty(d)&&(void 0!==p&&c(p,i-1),p=d,i++);void 0!==p&&c(p,i-1,!0)}return 0===i&&(u=n(this)),u})},t.exports=e.default},function(t,e,r){"use strict";var n=r(2).default;e.__esModule=!0;var a=n(r(5));e.default=function(t){t.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new a.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0;var n=r(4);e.default=function(t){t.registerHelper("if",function(t,e){return n.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||n.isEmpty(t)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(e,r){return t.helpers.if.call(this,e,{fn:r.inverse,inverse:r.fn,hash:r.hash})})},t.exports=e.default},function(t,e){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("log",function(){for(var e=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)e.push(arguments[n]);var a=1;null!=r.hash.level?a=r.hash.level:r.data&&null!=r.data.level&&(a=r.data.level),e[0]=a,t.log.apply(t,e)})},t.exports=e.default},function(t,e){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("lookup",function(t,e){return t&&t[e]})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0;var n=r(4);e.default=function(t){t.registerHelper("with",function(t,e){n.isFunction(t)&&(t=t.call(this));var r=e.fn;if(n.isEmpty(t))return e.inverse(this);var a=e.data;return e.data&&e.ids&&((a=n.createFrame(e.data)).contextPath=n.appendContextPath(e.data.contextPath,e.ids[0])),r(t,{data:a,blockParams:n.blockParams([t],[a&&a.contextPath])})})},t.exports=e.default},function(t,e,r){"use strict";var n=r(2).default;e.__esModule=!0,e.registerDefaultDecorators=function(t){a.default(t)};var a=n(r(18))},function(t,e,r){"use strict";e.__esModule=!0;var n=r(4);e.default=function(t){t.registerDecorator("inline",function(t,e,r,a){var o=t;return e.partials||(e.partials={},o=function(a,o){var i=r.partials;r.partials=n.extend({},i,e.partials);var u=t(a,o);return r.partials=i,u}),e.partials[a.args[0]]=a.fn,o})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0;var n=r(4),a={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=n.indexOf(a.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=a.lookupLevel(t),"undefined"!=typeof console&&a.lookupLevel(a.level)<=t){var e=a.methodMap[t];console[e]||(e="log");for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];console[e].apply(console,n)}}};e.default=a,t.exports=e.default},function(t,e){"use strict";function r(t){this.string=t}e.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},e.default=r,t.exports=e.default},function(t,e,r){"use strict";var n=r(22).default,a=r(1).default,o=r(2).default;e.__esModule=!0,e.checkRevision=function(t){var e=t&&t[0]||1,r=s.COMPILER_REVISION;if(e!==r){if(e<r){var n=s.REVISION_CHANGES[r],a=s.REVISION_CHANGES[e];throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+a+").")}throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}},e.template=function(t,e){if(!e)throw new u.default("No environment passed to template");if(!t||!t.main)throw new u.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var r={strict:function(t,e){if(!(e in t))throw new u.default('"'+e+'" not defined in '+t);return t[e]},lookup:function(t,e){for(var r=t.length,n=0;n<r;n++)if(t[n]&&null!=t[n][e])return t[n][e]},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:i.escapeExpression,invokePartial:function(r,n,a){a.hash&&(n=i.extend({},n,a.hash),a.ids&&(a.ids[0]=!0));r=e.VM.resolvePartial.call(this,r,n,a);var o=e.VM.invokePartial.call(this,r,n,a);null==o&&e.compile&&(a.partials[a.name]=e.compile(r,t.compilerOptions,e),o=a.partials[a.name](n,a));if(null!=o){if(a.indent){for(var s=o.split("\n"),l=0,c=s.length;l<c&&(s[l]||l+1!==c);l++)s[l]=a.indent+s[l];o=s.join("\n")}return o}throw new u.default("The partial "+a.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var r=t[e];return r.decorator=t[e+"_d"],r},programs:[],program:function(t,e,r,n,a){var o=this.programs[t],i=this.fn(t);return e||a||n||r?o=l(this,t,i,e,r,n,a):o||(o=this.programs[t]=l(this,t,i)),o},data:function(t,e){for(;t&&e--;)t=t._parent;return t},merge:function(t,e){var r=t||e;return t&&e&&t!==e&&(r=i.extend({},e,t)),r},nullContext:n({}),noop:e.VM.noop,compilerInfo:t.compiler};function a(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=n.data;a._setup(n),!n.partial&&t.useData&&(o=function(t,e){e&&"root"in e||((e=e?s.createFrame(e):{}).root=t);return e}(e,o));var i=void 0,u=t.useBlockParams?[]:void 0;function l(e){return""+t.main(r,e,r.helpers,r.partials,o,u,i)}return t.useDepths&&(i=n.depths?e!=n.depths[0]?[e].concat(n.depths):n.depths:[e]),(l=f(t.main,l,r,n.depths||[],o,u))(e,n)}return a.isTop=!0,a._setup=function(n){n.partial?(r.helpers=n.helpers,r.partials=n.partials,r.decorators=n.decorators):(r.helpers=r.merge(n.helpers,e.helpers),t.usePartial&&(r.partials=r.merge(n.partials,e.partials)),(t.usePartial||t.useDecorators)&&(r.decorators=r.merge(n.decorators,e.decorators)))},a._child=function(e,n,a,o){if(t.useBlockParams&&!a)throw new u.default("must pass block params");if(t.useDepths&&!o)throw new u.default("must pass parent depths");return l(r,e,t[e],n,0,a,o)},a},e.wrapProgram=l,e.resolvePartial=function(t,e,r){t?t.call||r.name||(r.name=t,t=r.partials[t]):t="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return t},e.invokePartial=function(t,e,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var a=void 0;r.fn&&r.fn!==c&&function(){r.data=s.createFrame(r.data);var t=r.fn;a=r.data["partial-block"]=function(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=s.createFrame(r.data),r.data["partial-block"]=n,t(e,r)},t.partials&&(r.partials=i.extend({},r.partials,t.partials))}();void 0===t&&a&&(t=a);if(void 0===t)throw new u.default("The partial "+r.name+" could not be found");if(t instanceof Function)return t(e,r)},e.noop=c;var i=a(r(4)),u=o(r(5)),s=r(3);function l(t,e,r,n,a,o,i){function u(e){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],u=i;return!i||e==i[0]||e===t.nullContext&&null===i[0]||(u=[e].concat(i)),r(t,e,t.helpers,t.partials,a.data||n,o&&[a.blockParams].concat(o),u)}return(u=f(r,u,t,i,n,o)).program=e,u.depth=i?i.length:0,u.blockParams=a||0,u}function c(){return""}function f(t,e,r,n,a,o){if(t.decorator){var u={};e=t.decorator(e,u,r,n&&n[0],a,o,n),i.extend(e,u)}return e}},function(t,e,r){t.exports={default:r(23),__esModule:!0}},function(t,e,r){r(24),t.exports=r(29).Object.seal},function(t,e,r){var n=r(25);r(26)("seal",function(t){return function(e){return t&&n(e)?t(e):e}})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(27),a=r(29),o=r(32);t.exports=function(t,e){var r=(a.Object||{})[t]||Object[t],i={};i[t]=e(r),n(n.S+n.F*o(function(){r(1)}),"Object",i)}},function(t,e,r){var n=r(28),a=r(29),o=r(30),i=function(t,e,r){var u,s,l,c=t&i.F,f=t&i.G,p=t&i.S,d=t&i.P,h=t&i.B,v=t&i.W,m=f?a:a[e]||(a[e]={}),g=f?n:p?n[e]:(n[e]||{}).prototype;for(u in f&&(r=e),r)(s=!c&&g&&u in g)&&u in m||(l=s?g[u]:r[u],m[u]=f&&"function"!=typeof g[u]?r[u]:h&&s?o(l,n):v&&g[u]==l?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e.prototype=t.prototype,e}(l):d&&"function"==typeof l?o(Function.call,l):l,d&&((m.prototype||(m.prototype={}))[u]=l))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,t.exports=i},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e){var r=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=r)},function(t,e,r){var n=r(31);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,a){return t.call(e,r,n,a)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){(function(r){"use strict";e.__esModule=!0,e.default=function(t){var e=void 0!==r?r:window,n=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=n),t}},t.exports=e.default}).call(e,function(){return this}())}])});
},{}],"sVYl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=a(require("handlebars/dist/handlebars.runtime"));function a(n){return n&&n.__esModule?n:{default:n}}var e=n.default.template({compiler:[7,">= 4.0.0"],main:function(n,a,e,s,i){return'<a class="skip-link" id="skip-to-main" href="#skip-to-nav">Skip navigation menu</a>\n<header class="global-header" data-component="global-header">\n  <a class="global-header__logo" href="https://publicissapient.github.io/accessible-ecommerce/">\n    <span class="global-header__site-icon" aria-hidden="true">A</span>\n    <h1 class="global-header__site-name">\n      The <br />Accessible <br />eStore\n    </h1>\n  </a>\n  <div class="global-header__mobile-toggles">\n    <button class="btn btn--mobile btn--mobile-search" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="search" aria-label="search">\n      Search\n      <svg class="icon icon--menu-btn">\n        <use xlink:href="../sprite.svg#search"></use>\n      </svg>\n    </button>\n    <button class="btn btn--mobile btn--menu-toggle" data-js="hamburger-toggle" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="menu" aria-label="Navigation">\n      Menu\n      <svg class="icon icon--menu-btn">\n        <use xlink:href="../sprite.svg#menu"></use>\n      </svg>\n    </button>\n  </div>\n\n  <form action="" id="global-header__search-form" class="global-header__search-form">\n    <label for="global-header__search-input">Search</label>\n    <input type="text" id="global-header__search-input" class="global-header__search-input" />\n    <button class="global-header__search-btn">\n      <svg class="icon icon--search-btn">\n        <use xlink:href="../sprite.svg#search"></use>\n      </svg>\n    </button>\n  </form>\n\n  <nav class="primary-nav" aria-label="Primary" data-js="hamburger-dropdown">\n    <ul class="primary-nav__items">\n      <li class="primary-nav__item has-submenu">\n        <button class="primary-nav__heading active" data-js="dropdown-toggle" aria-haspopup="true" aria-expanded="false">\n          Women\n          <svg class="icon icon--chevron">\n            <use xlink:href="../sprite.svg#chevron"></use>\n          </svg>\n        </button>\n        <ul class="primary-nav__submenu">\n          <li class="submenu-item">\n            <a href="../plp/index.html">Womens</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Tops</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Pants</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Dresses</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Shoes</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Hats</a>\n          </li>\n        </ul>\n      </li>\n      <li class="primary-nav__item has-submenu">\n        <button class="primary-nav__heading" data-js="dropdown-toggle" aria-haspopup="true" aria-expanded="false">\n          Men\n          <svg class="icon icon--chevron">\n            <use xlink:href="../sprite.svg#chevron"></use>\n          </svg>\n        </button>\n        <ul class="primary-nav__submenu">\n          <li class="submenu-item">\n            <a href="../plp/index.html">Mens</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Tops</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Pants</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Kilts</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Shoes</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Hats</a>\n          </li>\n        </ul>\n      </li>\n      <li class="primary-nav__item has-submenu">\n        <button class="primary-nav__heading" data-js="dropdown-toggle" aria-haspopup="true" aria-expanded="false">\n          Girls\n          <svg class="icon icon--chevron">\n            <use xlink:href="../sprite.svg#chevron"></use>\n          </svg>\n        </button>\n        <ul class="primary-nav__submenu">\n          <li class="submenu-item">\n            <a href="../plp/index.html">Girls</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Tops</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Pants</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Dresses</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Shoes</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Hats</a>\n          </li>\n        </ul>\n      </li>\n      <li class="primary-nav__item has-submenu">\n        <button class="primary-nav__heading" data-js="dropdown-toggle" aria-haspopup="true" aria-expanded="false">\n          Boys\n          <svg class="icon icon--chevron">\n            <use xlink:href="../sprite.svg#chevron"></use>\n          </svg>\n        </button>\n        <ul class="primary-nav__submenu">\n          <li class="submenu-item">\n            <a href="../plp/index.html">Boys</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Tops</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Pants</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Dresses</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Shoes</a>\n          </li>\n          <li class="submenu-item">\n            <a href="../plp/index.html">Hats</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </nav>\n  <nav class="secondary-nav" aria-label="Secondary" data-js="hamburger-dropdown">\n    <ul class="secondary-nav__items">\n      <li class="secondary-nav__item">\n        <button class="secondary-nav__button">\n          <svg class="icon icon--menu-btn">\n            <use xlink:href="../sprite.svg#account"></use>\n          </svg> Account\n        </button>\n      </li>\n      <li class="secondary-nav__item secondary-nav__mini-cart mini-cart__toggle" data-component="mini-cart">\n        <button aria-label="Mini Cart, 2 items, estimated subtotal: $42.92" data-js="mini-cart-toggle" class="secondary-nav__button" aria-haspopup="true" aria-expanded="false">\n          <span aria-live="assertive" aria-atomic="true" class="element-invisible mini-cart__aria">You have 0 items in\n            your cart.</span>\n          <svg class="icon icon--menu-btn">\n            <use xlink:href="../sprite.svg#cart"></use>\n          </svg>\n          Cart\n          <span class="mini-cart__visible-label--amount" data-js="cart-item-count">0</span>\n        </button>\n        <div data-template="mini-cart"></div>\n      </li>\n      <li class="secondary-nav__item secondary-nav__stores">\n        <button class="secondary-nav__button">\n          <svg class="icon icon--menu-btn">\n            <use xlink:href="../sprite.svg#stores"></use>\n          </svg> Stores\n        </button>\n      </li>\n      <li class="secondary-nav__item secondary-nav__contact">\n        <button class="secondary-nav__button">\n          <svg class="icon icon--menu-btn">\n            <use xlink:href="../sprite.svg#contact"></use>\n          </svg> Contact\n        </button>\n      </li>\n    </ul>\n  </nav>\n</header>\n<a class="skip-link" id="skip-to-nav" href="#skip-to-main">Return to navigation menu</a>'},useData:!0}),s=e;exports.default=s;
},{"handlebars/dist/handlebars.runtime":"2K4N"}],"ooR4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("handlebars/dist/handlebars.runtime"));function n(e){return e&&e.__esModule?e:{default:e}}var a=e.default.template({compiler:[7,">= 4.0.0"],main:function(e,n,a,i,s){return'<footer class="footer">\n    <div class="container">\n        <div class="footer__link-container">\n            <ul class="footer__main-links">\n                <li class="footer__main-link-item">\n                    <a href="#" class="footer__main-link">Site Map</a>\n                </li>\n                <li class="footer__main-link-item">\n                    <a href="#" class="footer__main-link">About</a>\n                </li>\n                <li class="footer__main-link-item">\n                    <a href="#" class="footer__main-link">Contact Us</a>\n                </li>\n            </ul>\n            <div class="feedback">\n                <h3 class="feedback__heading">Feedback</h3>\n                <p class="feedback__copy">Please help us to make our accessible experience even better! If you have any questions, comments or feedback, please send us an email</p>\n                <button class="btn btn--black-inverted feedback__submit" type="button">Submit Feedback</button>\n            </div>\n        </div>\n        <ul class="footer__secondary-links">\n            <li class="footer__secondary-link-item">\n                <a href="#">Legal</a> |\n            </li>\n            <li class="footer__secondary-link-item">\n                <a href="#">Privacy Policy</a> |\n            </li>\n            <li class="footer__secondary-link-item">\n                <a href="#">Cookies</a>\n            </li>\n        </ul>\n    </div>\n</footer>'},useData:!0}),i=a;exports.default=i;
},{"handlebars/dist/handlebars.runtime":"2K4N"}],"DM4+":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=a(require("handlebars/dist/handlebars.runtime"));function a(t){return t&&t.__esModule?t:{default:t}}var n=t.default.template({compiler:[7,">= 4.0.0"],main:function(t,a,n,e,i){return'<div class="mini-cart__dropdown" data-js="mini-cart-dropdown">\n  <h2 class="mini-cart__title">Cart</h2>\n  <button class="mini-cart__btn--close" data-js="mini-cart-close">\n    <svg class="icon--close-btn">\n      <use xlink:href="../sprite.svg#close"></use>\n    </svg>\n  </button>\n\n  <div data-template="mini-cart-items" class="mini-cart__items"></div>\n  <div class="mini-cart__summary-controls">\n    <a href="../cart/index.html" class="mini-cart__cta-btn btn btn--outline-black">View Cart</a>\n    <a href="../checkout/index.html" class="mini-cart__cta-btn mini-cart__checkout btn btn--primary">Checkout</a>\n  </div>\n</div>'},useData:!0}),e=n;exports.default=e;
},{"handlebars/dist/handlebars.runtime":"2K4N"}],"ydzn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=a(require("handlebars/dist/handlebars.runtime"));function a(t){return t&&t.__esModule?t:{default:t}}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=t.default.template({1:function(t,a,n,i,e){var c,r=null!=a?a:t.nullContext||{},d=n.helperMissing,s="function",u=t.escapeExpression;return'  <li class="mini-cart__item">\n    <a class="mini-cart__item-link" href="../pdp/index.html?product_id='+u(l(c=null!=(c=n.product_id||(null!=a?a.product_id:a))?c:d)===s?c.call(r,{name:"product_id",hash:{},data:e}):c)+'" aria-label="Shirt Malo. Size: Medium, Color: blue, quantity: 1, Item unit price: $36.95, Item total price: $36.95">\n      <img class="mini-cart__image" alt="" src="'+u(l(c=null!=(c=n.thumbnail_url||(null!=a?a.thumbnail_url:a))?c:d)===s?c.call(r,{name:"thumbnail_url",hash:{},data:e}):c)+'">\n      <div class="mini-cart__description">\n        <p class="mini-cart__item-title">'+u(l(c=null!=(c=n.product_name||(null!=a?a.product_name:a))?c:d)===s?c.call(r,{name:"product_name",hash:{},data:e}):c)+'</p>\n        <dl class="mini-cart__details">\n          <div class="mini-cart__detail">\n            <dt>Price</dt>\n            <dd class="detail__price">$'+u(l(c=null!=(c=n.price_sale||(null!=a?a.price_sale:a))?c:d)===s?c.call(r,{name:"price_sale",hash:{},data:e}):c)+'</dd>\n          </div>\n          <div class="mini-cart__detail">\n            <dt>Color</dt>\n            <dd>'+u(l(c=null!=(c=n.color||(null!=a?a.color:a))?c:d)===s?c.call(r,{name:"color",hash:{},data:e}):c)+'</dd>\n          </div>\n          <div class="mini-cart__detail">\n            <dt>Size</dt>\n            <dd>'+u(l(c=null!=(c=n.size||(null!=a?a.size:a))?c:d)===s?c.call(r,{name:"size",hash:{},data:e}):c)+'</dd>\n          </div>\n        </dl>\n        <dl class="mini-cart__details">\n          <div class="mini-cart__detail">\n            <dt>Qty</dt>\n            <dd>'+u(l(c=null!=(c=n.quantity||(null!=a?a.quantity:a))?c:d)===s?c.call(r,{name:"quantity",hash:{},data:e}):c)+'</dd>\n          </div>\n          <div class="mini-cart__detail">\n            <dt>Total</dt>\n            <dd class="detail__price">$'+u(l(c=null!=(c=n.total_price||(null!=a?a.total_price:a))?c:d)===s?c.call(r,{name:"total_price",hash:{},data:e}):c)+'</dd>\n          </div>\n        </dl>\n      </div>\n    </a>\n    <div class="mini-cart__controls">\n        <button class="mini-cart__control btn--link" data-remove="'+u(l(c=null!=(c=n.cart_id||(null!=a?a.cart_id:a))?c:d)===s?c.call(r,{name:"cart_id",hash:{},data:e}):c)+'">Remove</button>\n        <a class="mini-cart__control btn--link" href="../pdp/index.html?product_id='+u(l(c=null!=(c=n.product_id||(null!=a?a.product_id:a))?c:d)===s?c.call(r,{name:"product_id",hash:{},data:e}):c)+'">Edit</a>\n        <button class="mini-cart__control btn--link" >Save</button>\n    </div>\n  </li>\n'},compiler:[7,">= 4.0.0"],main:function(t,a,n,i,e){var c,r,d=null!=a?a:t.nullContext||{},s=n.helperMissing,u=t.escapeExpression;return'<p class="mini-cart__total-quantity">'+u("function"===l(r=null!=(r=n.cartItemCount||(null!=a?a.cartItemCount:a))?r:s)?r.call(d,{name:"cartItemCount",hash:{},data:e}):r)+" "+u("function"===l(r=null!=(r=n.cartItemsLabel||(null!=a?a.cartItemsLabel:a))?r:s)?r.call(d,{name:"cartItemsLabel",hash:{},data:e}):r)+'</p>\n<ul class="mini-cart__item-list">\n'+(null!=(c=n.each.call(d,null!=a?a.cartItems:a,{name:"each",hash:{},fn:t.program(1,e,0),inverse:t.noop,data:e}))?c:"")+'</ul>\n\n<div class="mini-cart__summary-subtotal">\n  <p class="mini-cart__subtotal-title">Estimated Total</p>\n  <p class="mini-cart__subtotal">$'+u("function"===l(r=null!=(r=n.cartSubtotal||(null!=a?a.cartSubtotal:a))?r:s)?r.call(d,{name:"cartSubtotal",hash:{},data:e}):r)+"</p>\n</div>\n"},useData:!0}),i=n;exports.default=i;
},{"handlebars/dist/handlebars.runtime":"2K4N"}],"csLs":[function(require,module,exports) {
"use strict";function t(t){var e=new CustomEvent("update:cart",{detail:t});document.dispatchEvent(e)}function e(){return{cartItemCount:0,cartItemsLabel:"items",cartItems:[],cartIndex:0,cartSubtotal:0}}function r(){var t=localStorage.getItem("cart");return t?JSON.parse(t):e()}function a(t){localStorage.setItem("cart",JSON.stringify(t))}function n(t){return t.reduce(function(t,e){return t+parseInt(e.quantity)},0)}function c(t){return t.reduce(function(t,e){return t+Number(e.total_price)},0)}function o(t){var e=r();e.cartIndex++,t.cart_id=e.cartIndex,t.total_price=parseInt(t.quantity)*Number(t.price_sale),e.cartItems.push(t),i(e)}function u(t){var e=r(),a=e.cartItems.filter(function(e){return e.cart_id!==parseInt(t)});e.cartItems=a,i(e)}function i(e){e.cartItemCount=n(e.cartItems),e.cartSubtotal=c(e.cartItems).toFixed(2),e.cartItemsLabel=1===e.cartItemCount?"item":"items",a(e),t(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.addToCart=o,exports.getCartFromStorage=r,exports.removeFromCart=u;
},{}],"wjdi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handlebarsHelper=i,exports.handlebarsPartial=u,exports.activeElementMatches=l,exports.chunk=s,exports.getRandomSubset=c,exports.getFocusableChildren=f,exports.$$=d,exports.trapTabKey=p,exports.setFocusToFirstItem=h,exports.getElementIndex=b,exports.normalizeName=m;var e=t(require("handlebars/dist/handlebars.runtime"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return a(e)||o(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function a(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function i(t,r){return e.default.registerHelper(t,r)}function u(t,r){return e.default.registerPartial(t,r)}function l(e){return new Promise(function(t){window.requestAnimationFrame(function(){var r=document.activeElement;t(r.matches(e))})})}function s(e,t){if(0===t)return[r(e)];for(var n=[],o=0;o<e.length;)n.push(e.slice(o,o+t)),o+=t;return n}function c(e,t){for(var n=r(e),o=[],a=0;a<t;a++){var i=Math.floor(Math.random()*n.length);o.push(n.splice(i,1)[0])}return o}function f(e){return d(["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(","),e).filter(function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)})}function d(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e)||[])}function p(e,t){var r=f(e),n=r.indexOf(document.activeElement);t.shiftKey&&0===n?(r[r.length-1].focus(),t.preventDefault()):t.shiftKey||n!==r.length-1||(r[0].focus(),t.preventDefault())}function h(e){var t=f(e);t.length&&t[0].focus()}function b(e){for(var t=0;e=e.previousElementSibling;)++t;return t}function m(e){return e.replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})}
},{"handlebars/dist/handlebars.runtime":"2K4N"}],"jtLf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=g;var e,t,r,n,a=d(require("./mini-cart.hbs")),i=d(require("./mini-cart-items.hbs")),c=require("../cart/cart"),o=require("../../js/utils");function d(e){return e&&e.__esModule?e:{default:e}}function u(e){e.target.matches(".mini-cart__dropdown, .mini-cart__dropdown *")||p()}function s(){(0,o.activeElementMatches)(".mini-cart__dropdown *").then(function(e){e||p()})}function l(){e.classList.add("expanded"),t.setAttribute("aria-expanded","true"),document.addEventListener("click",u)}function m(e){e.stopPropagation(),p()}function p(){e.classList.remove("expanded"),t.setAttribute("aria-expanded","false"),document.removeEventListener("click",u)}function v(t){t.stopPropagation(),e.classList.contains("expanded")?p():l()}function f(e){e.target.matches("[data-remove]")&&((0,c.removeFromCart)(e.target.dataset.remove),e.stopPropagation())}function L(e){q(e.detail)}function q(e){n.innerHTML=e.cartItemCount,r.innerHTML=(0,i.default)(e)}function g(){var i=(0,c.getCartFromStorage)();document.querySelector('[data-template="mini-cart"]').outerHTML=(0,a.default)();var o=document.querySelector('[data-component="mini-cart"]');t=o.querySelector('[data-js="mini-cart-toggle"]'),e=o.querySelector('[data-js="mini-cart-dropdown"]'),r=o.querySelector('[data-template="mini-cart-items"]'),n=o.querySelector('[data-js="cart-item-count"]'),q(i),e.addEventListener("click",f),t.addEventListener("click",v),t.addEventListener("blur",s),o.querySelector('[data-js="mini-cart-close"]').addEventListener("click",m);var d=o.querySelectorAll("button, [href]");d[d.length-1].addEventListener("blur",s),document.addEventListener("update:cart",L)}
},{"./mini-cart.hbs":"DM4+","./mini-cart-items.hbs":"ydzn","../cart/cart":"csLs","../../js/utils":"wjdi"}],"BKFc":[function(require,module,exports) {
"use strict";var e,n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=f;var t=!1,a=null;function r(e){t=!t,e.currentTarget.setAttribute("aria-expanded",t),n.forEach(function(e){e.classList.toggle("open")})}function o(e){var n=e.target;n.classList.contains("has-submenu")||n.classList.contains("open")||n.classList.contains("primary-nav__heading")||(l(a),s())}function i(){setTimeout(function(){window.addEventListener("click",o)},1)}function s(){window.removeEventListener("click",o)}function c(){return new Promise(function(e){setTimeout(function(){var n=document.activeElement;e({inOpenMenu:n.matches(".has-submenu.open *")})},1)})}function u(e){var n=e.currentTarget.matches(".has-submenu.open *");c().then(function(e){n&&!e.inOpenMenu&&l(a)})}function l(e){e&&e.parentNode.classList.contains("open")&&(e.parentNode.classList.remove("open"),e.setAttribute("aria-expanded","false"),a=null)}function d(e){var n=e.parentNode;l(a),n.classList.add("open"),e.setAttribute("aria-expanded","true"),a=e,i()}function p(e){e.stopPropagation();var n=e.currentTarget;return n.parentNode.classList.contains("open")?l(n):d(n),!1}function f(){var t=(e=document.querySelector('[data-component="global-header"]')).querySelectorAll('[data-js="dropdown-toggle"]'),a=e.querySelectorAll(".submenu-item:last-child a"),o=e.querySelector('[data-js="hamburger-toggle"]');n=e.querySelectorAll('[data-js="hamburger-dropdown"]'),t.forEach(function(e){e.addEventListener("click",p),e.addEventListener("blur",u)}),a.forEach(function(e){e.addEventListener("blur",u)}),o.addEventListener("click",r)}
},{}],"FfFI":[function(require,module,exports) {
"use strict";var e=a(require("./components/header/header.hbs")),t=a(require("./components/footer/footer.hbs")),r=n(require("./components/mini-cart/mini-cart")),o=n(require("./components/header/global-navigation"));function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}var i=document.querySelector('[data-template="global-header"]'),u=document.querySelector('[data-template="footer"]');i&&(i.outerHTML=(0,e.default)()),u&&(u.outerHTML=(0,t.default)()),o.init(),r.init();
},{"./components/header/header.hbs":"sVYl","./components/footer/footer.hbs":"ooR4","./components/mini-cart/mini-cart":"jtLf","./components/header/global-navigation":"BKFc"}]},{},["FfFI"], null)
//# sourceMappingURL=/accessible-ecommerce-demo/scripts.ca65e82c.js.map