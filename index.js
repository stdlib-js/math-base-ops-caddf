// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Math.fround?Math.fround:null,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString,i=Object.prototype.hasOwnProperty,a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"",c=t()?function(e){var r,t,a,c,l;if(null==e)return n.call(e);t=e[o],l=o,r=null!=(c=e)&&i.call(c,l);try{e[o]=void 0}catch(r){return n.call(e)}return a=n.call(e),r?e[o]=t:delete e[o],a}:function(e){return n.call(e)},l="function"==typeof Float32Array,s=Number.POSITIVE_INFINITY,u="function"==typeof Float32Array?Float32Array:null,p="function"==typeof Float32Array?Float32Array:void 0,f=new(function(){var e,r,t;if("function"!=typeof u)return!1;try{r=new u([1,3.14,-3.14,5e40]),t=r,e=(l&&t instanceof Float32Array||"[object Float32Array]"===c(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===s}catch(r){e=!1}return e}()?p:function(){throw new Error("not implemented")})(1),g="function"==typeof e?e:function(e){return f[0]=e,f[0]},d="function"==typeof Object.defineProperty?Object.defineProperty:null,h=Object.defineProperty;function y(e){return"number"==typeof e}function b(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function m(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+b(i):b(i)+e,n&&(e="-"+e)),e}var w=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function E(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!y(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=m(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=m(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===v.call(e.specifier)?v.call(t):w.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function _(e){return"string"==typeof e}var S=Math.abs,T=String.prototype.toLowerCase,x=String.prototype.toUpperCase,k=String.prototype.replace,j=/e\+(\d)$/,F=/e-(\d)$/,A=/^(\d+)$/,I=/^(\d+)e/,V=/\.0$/,O=/\.0*e/,N=/(\..*[^0])0*e/;function P(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!y(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":S(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=k.call(t,N,"$1e"),t=k.call(t,O,"e"),t=k.call(t,V,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=k.call(t,j,"e+0$1"),t=k.call(t,F,"e-0$1"),e.alternate&&(t=k.call(t,A,"$1."),t=k.call(t,I,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===x.call(e.specifier)?x.call(t):T.call(t)}function $(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function C(e,r,t){var n=r-e.length;return n<0?e:e=t?e+$(n):$(n)+e}var R=String.fromCharCode,L=isNaN,M=Array.isArray;function Z(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function G(e){var r,t,n,i,a,o,c,l,s;if(!M(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,l=0;l<e.length;l++)if(_(n=e[l]))o+=n;else{if(r=void 0!==n.precision,!(n=Z(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,L(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,L(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=E(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!L(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=L(a)?String(n.arg):R(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=P(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=m(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=C(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Y(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function B(e){var r,t,n,i;for(t=[],i=0,n=W.exec(e);n;)(r=e.slice(i,W.lastIndex-n[0].length)).length&&t.push(r),t.push(Y(n)),i=W.lastIndex,n=W.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function U(e){return"string"==typeof e}function X(e){var r,t,n;if(!U(e))throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=B(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return G.apply(null,t)}var z=Object.prototype,J=z.toString,q=z.__defineGetter__,D=z.__defineSetter__,H=z.__lookupGetter__,K=z.__lookupSetter__,Q=function(){try{return d({},"x",{}),!0}catch(e){return!1}}()?h:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===J.call(e))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===J.call(t))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(H.call(e,r)||K.call(e,r)?(n=e.__proto__,e.__proto__=z,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&q&&q.call(e,r,t.get),o&&D&&D.call(e,r,t.set),e};function ee(e,r,t){Q(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function re(e){return"number"==typeof e}var te=Number,ne=te.prototype.toString,ie=t();function ae(e){return"object"==typeof e&&(e instanceof te||(ie?function(e){try{return ne.call(e),!0}catch(e){return!1}}(e):"[object Number]"===c(e)))}function oe(e){return re(e)||ae(e)}function ce(e,r){if(!(this instanceof ce))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!re(e))throw new TypeError(X("invalid argument. Real component must be a number. Value: `%s`.",e));if(!re(r))throw new TypeError(X("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:g(e)}),Q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:g(r)}),this}function le(e){return e.re}function se(e){return e.im}return ee(oe,"isPrimitive",re),ee(oe,"isObject",ae),ee(ce,"BYTES_PER_ELEMENT",4),ee(ce.prototype,"BYTES_PER_ELEMENT",4),ee(ce.prototype,"byteLength",8),ee(ce.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),ee(ce.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e})),function(e,r){return new ce(g(le(e)+le(r)),g(se(e)+se(r)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).caddf=r();
//# sourceMappingURL=index.js.map
