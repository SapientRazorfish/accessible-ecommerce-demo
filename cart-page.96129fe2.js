parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"2K4N":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof e&&e.amd?e([],r):"object"==typeof exports?exports.Handlebars=r():t.Handlebars=r()}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}return r.m=e,r.c=t,r.p="",r(0)}([function(e,t,r){"use strict";var n=r(1).default,o=r(2).default;t.__esModule=!0;var a=n(r(3)),i=o(r(20)),s=o(r(5)),u=n(r(4)),l=n(r(21)),c=o(r(33));function f(){var e=new a.HandlebarsEnvironment;return u.extend(e,a),e.SafeString=i.default,e.Exception=s.default,e.Utils=u,e.escapeExpression=u.escapeExpression,e.VM=l,e.template=function(t){return l.template(t,e)},e}var p=f();p.create=f,c.default(p),p.default=p,t.default=p,e.exports=t.default},function(e,t){"use strict";t.default=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},t.__esModule=!0},function(e,t){"use strict";t.default=function(e){return e&&e.__esModule?e:{default:e}},t.__esModule=!0},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0,t.HandlebarsEnvironment=l;var o=r(4),a=n(r(5)),i=r(9),s=r(17),u=n(r(19));t.VERSION="4.3.3";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function l(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},i.registerDefaultHelpers(this),s.registerDefaultDecorators(this)}l.prototype={constructor:l,logger:u.default,log:u.default.log,registerHelper:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===o.toString.call(e))o.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var c=u.default.log;t.log=c,t.createFrame=o.createFrame,t.logger=u.default},function(e,t){"use strict";t.__esModule=!0,t.extend=i,t.indexOf=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!o.test(e))return e;return e.replace(n,a)},t.isEmpty=function(e){return!e&&0!==e||!(!l(e)||0!==e.length)},t.createFrame=function(e){var t=i({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},n=/[&<>"'`=]/g,o=/[&<>"'`=]/;function a(e){return r[e]}function i(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var s=Object.prototype.toString;t.toString=s;var u=function(e){return"function"==typeof e};u(/x/)&&(t.isFunction=u=function(e){return"function"==typeof e&&"[object Function]"===s.call(e)}),t.isFunction=u;var l=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===s.call(e)};t.isArray=l},function(e,t,r){"use strict";var n=r(6).default;t.__esModule=!0;var o=["description","fileName","lineNumber","message","name","number","stack"];function a(e,t){var r=t&&t.loc,i=void 0,s=void 0;r&&(e+=" - "+(i=r.start.line)+":"+(s=r.start.column));for(var u=Error.prototype.constructor.call(this,e),l=0;l<o.length;l++)this[o[l]]=u[o[l]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{r&&(this.lineNumber=i,n?Object.defineProperty(this,"column",{value:s,enumerable:!0}):this.column=s)}catch(c){}}a.prototype=new Error,t.default=a,e.exports=t.default},function(e,t,r){e.exports={default:r(7),__esModule:!0}},function(e,t,r){var n=r(8);e.exports=function(e,t,r){return n.setDesc(e,t,r)}},function(e,t){var r=Object;e.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),a.default(e),i.default(e),s.default(e),u.default(e),l.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,r){e.helpers[t]&&(e.hooks[t]=e.helpers[t],r||delete e.helpers[t])};var o=n(r(10)),a=n(r(11)),i=n(r(12)),s=n(r(13)),u=n(r(14)),l=n(r(15)),c=n(r(16))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(4);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,r){var o=r.inverse,a=r.fn;if(!0===t)return a(this);if(!1===t||null==t)return o(this);if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):o(this);if(r.data&&r.ids){var i=n.createFrame(r.data);i.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:i}}return a(t,r)})},e.exports=t.default},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0;var o=r(4),a=n(r(5));t.default=function(e){e.registerHelper("each",function(e,t){if(!t)throw new a.default("Must pass iterator to #each");var r=t.fn,n=t.inverse,i=0,s="",u=void 0,l=void 0;function c(t,n,a){u&&(u.key=t,u.index=n,u.first=0===n,u.last=!!a,l&&(u.contextPath=l+t)),s+=r(e[t],{data:u,blockParams:o.blockParams([e[t],t],[l+t,null])})}if(t.data&&t.ids&&(l=o.appendContextPath(t.data.contextPath,t.ids[0])+"."),o.isFunction(e)&&(e=e.call(this)),t.data&&(u=o.createFrame(t.data)),e&&"object"==typeof e)if(o.isArray(e))for(var f=e.length;i<f;i++)i in e&&c(i,i,i===e.length-1);else{var p=void 0;for(var d in e)e.hasOwnProperty(d)&&(void 0!==p&&c(p,i-1),p=d,i++);void 0!==p&&c(p,i-1,!0)}return 0===i&&(s=n(this)),s})},e.exports=t.default},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0;var o=n(r(5));t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(4);t.default=function(e){e.registerHelper("if",function(e,t){return n.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||n.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,r){return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})})},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n]);var o=1;null!=r.hash.level?o=r.hash.level:r.data&&null!=r.data.level&&(o=r.data.level),t[0]=o,e.log.apply(e,t)})},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t){return e?"constructor"!==t||e.propertyIsEnumerable(t)?e[t]:void 0:e})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(4);t.default=function(e){e.registerHelper("with",function(e,t){n.isFunction(e)&&(e=e.call(this));var r=t.fn;if(n.isEmpty(e))return t.inverse(this);var o=t.data;return t.data&&t.ids&&((o=n.createFrame(t.data)).contextPath=n.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:o,blockParams:n.blockParams([e],[o&&o.contextPath])})})},e.exports=t.default},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0,t.registerDefaultDecorators=function(e){o.default(e)};var o=n(r(18))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(4);t.default=function(e){e.registerDecorator("inline",function(e,t,r,o){var a=e;return t.partials||(t.partials={},a=function(o,a){var i=r.partials;r.partials=n.extend({},i,t.partials);var s=e(o,a);return r.partials=i,s}),t.partials[o.args[0]]=o.fn,a})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(4),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];console[t].apply(console,n)}}};t.default=o,e.exports=t.default},function(e,t){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,r){"use strict";var n=r(22).default,o=r(1).default,a=r(2).default;t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=u.COMPILER_REVISION;if(t>=u.LAST_COMPATIBLE_COMPILER_REVISION&&t<=u.COMPILER_REVISION)return;if(t<u.LAST_COMPATIBLE_COMPILER_REVISION){var n=u.REVISION_CHANGES[r],o=u.REVISION_CHANGES[t];throw new s.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new s.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},t.template=function(e,t){if(!t)throw new s.default("No environment passed to template");if(!e||!e.main)throw new s.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r=e.compiler&&7===e.compiler[0];var o={strict:function(e,t){if(!(t in e))throw new s.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var r=e.length,n=0;n<r;n++)if(e[n]&&null!=e[n][t])return e[n][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:i.escapeExpression,invokePartial:function(r,n,o){o.hash&&(n=i.extend({},n,o.hash),o.ids&&(o.ids[0]=!0));r=t.VM.resolvePartial.call(this,r,n,o);var a=i.extend({},o,{hooks:this.hooks}),u=t.VM.invokePartial.call(this,r,n,a);null==u&&t.compile&&(o.partials[o.name]=t.compile(r,e.compilerOptions,t),u=o.partials[o.name](n,a));if(null!=u){if(o.indent){for(var l=u.split("\n"),c=0,f=l.length;c<f&&(l[c]||c+1!==f);c++)l[c]=o.indent+l[c];u=l.join("\n")}return u}throw new s.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,n,o){var a=this.programs[e],i=this.fn(e);return t||o||n||r?a=c(this,e,i,t,r,n,o):a||(a=this.programs[e]=c(this,e,i)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},nullContext:n({}),noop:t.VM.noop,compilerInfo:e.compiler};function a(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=r.data;a._setup(r),!r.partial&&e.useData&&(n=function(e,t){t&&"root"in t||((t=t?u.createFrame(t):{}).root=e);return t}(t,n));var i=void 0,s=e.useBlockParams?[]:void 0;function l(t){return""+e.main(o,t,o.helpers,o.partials,n,s,i)}return e.useDepths&&(i=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(l=p(e.main,l,o,r.depths||[],n,s))(t,r)}return a.isTop=!0,a._setup=function(n){if(n.partial)o.helpers=n.helpers,o.partials=n.partials,o.decorators=n.decorators,o.hooks=n.hooks;else{o.helpers=i.extend({},t.helpers,n.helpers),e.usePartial&&(o.partials=i.extend({},t.partials,n.partials)),(e.usePartial||e.useDecorators)&&(o.decorators=i.extend({},t.decorators,n.decorators)),o.hooks={};var a=n.allowCallsToHelperMissing||r;l.moveHelperToHooks(o,"helperMissing",a),l.moveHelperToHooks(o,"blockHelperMissing",a)}},a._child=function(t,r,n,a){if(e.useBlockParams&&!n)throw new s.default("must pass block params");if(e.useDepths&&!a)throw new s.default("must pass parent depths");return c(o,t,e[t],r,0,n,a)},a},t.wrapProgram=c,t.resolvePartial=function(e,t,r){e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return e},t.invokePartial=function(e,t,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var o=void 0;r.fn&&r.fn!==f&&function(){r.data=u.createFrame(r.data);var e=r.fn;o=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=u.createFrame(r.data),r.data["partial-block"]=n,e(t,r)},e.partials&&(r.partials=i.extend({},r.partials,e.partials))}();void 0===e&&o&&(e=o);if(void 0===e)throw new s.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)},t.noop=f;var i=o(r(4)),s=a(r(5)),u=r(3),l=r(9);function c(e,t,r,n,o,a,i){function s(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(s=[t].concat(i)),r(e,t,e.helpers,e.partials,o.data||n,a&&[o.blockParams].concat(a),s)}return(s=p(r,s,e,i,n,a)).program=t,s.depth=i?i.length:0,s.blockParams=o||0,s}function f(){return""}function p(e,t,r,n,o,a){if(e.decorator){var s={};t=e.decorator(t,s,r,n&&n[0],o,a,n),i.extend(t,s)}return t}},function(e,t,r){e.exports={default:r(23),__esModule:!0}},function(e,t,r){r(24),e.exports=r(29).Object.seal},function(e,t,r){var n=r(25);r(26)("seal",function(e){return function(t){return e&&n(t)?e(t):t}})},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,r){var n=r(27),o=r(29),a=r(32);e.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],i={};i[e]=t(r),n(n.S+n.F*a(function(){r(1)}),"Object",i)}},function(e,t,r){var n=r(28),o=r(29),a=r(30),i=function(e,t,r){var s,u,l,c=e&i.F,f=e&i.G,p=e&i.S,d=e&i.P,h=e&i.B,v=e&i.W,m=f?o:o[t]||(o[t]={}),g=f?n:p?n[t]:(n[t]||{}).prototype;for(s in f&&(r=t),r)(u=!c&&g&&s in g)&&s in m||(l=u?g[s]:r[s],m[s]=f&&"function"!=typeof g[s]?r[s]:h&&u?a(l,n):v&&g[s]==l?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t.prototype=e.prototype,t}(l):d&&"function"==typeof l?a(Function.call,l):l,d&&((m.prototype||(m.prototype={}))[s]=l))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,e.exports=i},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t){var r=e.exports={version:"1.2.6"};"number"==typeof __e&&(__e=r)},function(e,t,r){var n=r(31);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t){(function(r){"use strict";t.__esModule=!0,t.default=function(e){var t=void 0!==r?r:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}},e.exports=t.default}).call(t,function(){return this}())}])});
},{}],"wjdi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handlebarsHelper=i,exports.handlebarsPartial=u,exports.activeElementMatches=s,exports.chunk=c,exports.getRandomSubset=l,exports.getFocusableChildren=f,exports.$$=d,exports.trapTabKey=p,exports.setFocusToFirstItem=h,exports.getElementIndex=m,exports.normalizeName=b,exports.setPageTitle=v,exports.getStars=x,exports.enableSkipLinks=y,exports.focusOnElement=A,exports.roundNumber=S;var e=t(require("handlebars/dist/handlebars.runtime"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return a(e)||o(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function a(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function i(t,r){return e.default.registerHelper(t,r)}function u(t,r){return e.default.registerPartial(t,r)}function s(e){return new Promise(function(t){window.requestAnimationFrame(function(){var r=document.activeElement;t(r.matches(e))})})}function c(e,t){if(0===t)return[r(e)];for(var n=[],o=0;o<e.length;)n.push(e.slice(o,o+t)),o+=t;return n}function l(e,t){for(var n=r(e),o=[],a=0;a<t;a++){var i=Math.floor(Math.random()*n.length);o.push(n.splice(i,1)[0])}return o}function f(e){return d(["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'button:not([disabled]):not([tabindex="-1"])',"iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(","),e).filter(function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)})}function d(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e)||[])}function p(e,t){var r=f(e),n=r.indexOf(document.activeElement);("Tab"===t.key||9===t.keyCode)&&(t.shiftKey&&0===n?(r[r.length-1].focus(),t.preventDefault()):t.shiftKey||n!==r.length-1||(r[0].focus(),t.preventDefault()))}function h(e){var t=f(e);t.length&&t[0].focus()}function m(e){for(var t=0;e=e.previousElementSibling;)++t;return t}function b(e){return e.replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})}function v(e){document.title=e?"".concat("The Accessible eStore",", ").concat(e.join(", ")):"The Accessible eStore"}function g(e){return Array.from(Array(5),function(){return e})}function x(e){if(5===e)return g("full-star");var t=Math.floor(e),r=g("empty-star");if(t<5){for(var n=0;n<t;n++)r[n]="full-star";var o=e-t;o>.25&&o<.75?r[t]="half-star":o>.75&&(r[t]="full-star")}return r}function y(){document.body.addEventListener("click",function(e){if(e.target.classList.contains("skip-link")){var t=document.querySelector(e.target.hash);e.preventDefault(),A(t)}})}function A(e){e&&window.requestAnimationFrame(function(){e.focus()})}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number(Math.round(e+"e"+t)+"e-"+t)}
},{"handlebars/dist/handlebars.runtime":"2K4N"}],"csLs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addToCart=o,exports.getCartFromStorage=a,exports.removeFromCart=i,exports.getCartSubtotal=u;var t=require("../../js/utils");function e(t){var e=new CustomEvent("update:cart",{detail:t});document.dispatchEvent(e)}function r(){return{cartItemCount:0,cartItemsLabel:"items",cartItems:[],cartIndex:0,cartSubtotal:0}}function a(){var t=localStorage.getItem("cart");return t?JSON.parse(t):r()}function n(t){localStorage.setItem("cart",JSON.stringify(t))}function c(t){return t.reduce(function(t,e){return t+parseInt(e.quantity)},0)}function u(t){return t.reduce(function(t,e){return t+Number(e.total_price)},0)}function o(e){var r=a();r.cartIndex++,e.cart_id=r.cartIndex,e.total_price=(0,t.roundNumber)(parseInt(e.quantity)*Number(e.price_sale)),r.cartItems.push(e),s(r)}function i(t){var e=a(),r=e.cartItems.filter(function(e){return e.cart_id!==parseInt(t)});e.cartItems=r,s(e)}function s(t){t.cartItemCount=c(t.cartItems),t.cartSubtotal=u(t.cartItems).toFixed(2),t.cartItemsLabel=1===t.cartItemCount?"item":"items",n(t),e(t)}
},{"../../js/utils":"wjdi"}],"3dGY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("handlebars/dist/handlebars.runtime"));function n(e){return e&&e.__esModule?e:{default:e}}var l=e.default.template({1:function(e,n,l,a,t){var r;return"  <li>"+e.escapeExpression("function"==typeof(r=null!=(r=l.product_name||(null!=n?n.product_name:n))?r:l.helperMissing)?r.call(null!=n?n:e.nullContext||{},{name:"product_name",hash:{},data:t}):r)+"</li>\n"},compiler:[7,">= 4.0.0"],main:function(e,n,l,a,t){var r;return"<ul>\n"+(null!=(r=l.each.call(null!=n?n:e.nullContext||{},null!=n?n.cartItems:n,{name:"each",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t}))?r:"")+"</ul>"},useData:!0}),a=l;exports.default=a;
},{"handlebars/dist/handlebars.runtime":"2K4N"}],"qEEx":[function(require,module,exports) {
"use strict";var t=require("../../components/cart/cart"),e=r(require("./cart-items.hbs"));function r(t){return t&&t.__esModule?t:{default:t}}!function(){var r=(0,t.getCartFromStorage)();document.querySelector('[data-template="cart-items"]').outerHTML=(0,e.default)(r)}();
},{"../../components/cart/cart":"csLs","./cart-items.hbs":"3dGY"}]},{},["qEEx"], null)
//# sourceMappingURL=/accessible-ecommerce-demo/cart-page.96129fe2.js.map