/*// nether-onescript //
@date 2020-06-04 03:01:12
@files [
    "src\/js\/libs\/000-jquery-3.1.1.min.js",
    "src\/js\/libs\/100-bootstrap.bundle.js",
    "src\/js\/libs\/100-chartist.min.js",
    "src\/js\/libs\/100-uri.min.js",
    "src\/js\/libs\/110-chartist-plugin-tooltip.min.js",
    "src\/js\/libs\/110-uri-jquery.min.js",
    "src\/js\/libs\/200-nui.js",
    "src\/js\/libs\/500-jodit.es2018.min.js",
    "src\/js\/local\/atlantis.js"
]
//*/

///////////////////////////////////////////////////////////////////////////
// src/js/libs/000-jquery-3.1.1.min.js ////////////////////////////////////

/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

///////////////////////////////////////////////////////////////////////////
// src/js/libs/100-bootstrap.bundle.js ////////////////////////////////////

/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
  (global = global || self, factory(global.bootstrap = {}, global.jQuery));
}(this, (function (exports, $) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.4.1';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(ClassName.SHOW);

      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.4.1';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLES: '[data-toggle="buttons"]',
    DATA_TOGGLE: '[data-toggle="button"]',
    DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1),
    LOAD_DATA_API: "load" + EVENT_KEY$1 + DATA_API_KEY$1
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          } else if (input.type === 'checkbox') {
            if (this._element.tagName === 'LABEL' && input.checked === this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            }
          } else {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            triggerChangeEvent = false;
          }

          if (triggerChangeEvent) {
            input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName$1.ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button = $(button).closest(Selector$1.BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(Selector$1.INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(Event$1.LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(Selector$1.INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(ClassName$1.ACTIVE);
      } else {
        button.classList.remove(ClassName$1.ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(ClassName$1.ACTIVE);
      } else {
        _button.classList.remove(ClassName$1.ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.4.1';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 = {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  };
  var Selector$2 = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(Selector$2.NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event$2.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default, {}, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event$2.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event$2.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(ClassName$2.POINTER_EVENT);
      } else {
        $(this._element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

      var slideEvent = $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName$2.LEFT;
        orderClassName = ClassName$2.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName$2.RIGHT;
        orderClassName = ClassName$2.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread2({}, Default, {}, $(this).data());

        if (typeof config === 'object') {
          _config = _objectSpread2({}, _config, {}, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }

      var config = _objectSpread2({}, $(target).data(), {}, $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.4.1';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 = {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(ClassName$3.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event$3.SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(Event$3.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event$3.HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$1, {}, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(ClassName$3.SHOW);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread2({}, Default$1, {}, $this.data(), {}, typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.16.0
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

  var timeoutDuration = function () {
    var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
    for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
      if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
        return 1;
      }
    }
    return 0;
  }();

  function microtaskDebounce(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }
      called = true;
      window.Promise.resolve().then(function () {
        called = false;
        fn();
      });
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  var supportsMicroTasks = isBrowser && window.Promise;

  /**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */
  var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }

  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */
  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    }
    // NOTE: 1 DOM access here
    var window = element.ownerDocument.defaultView;
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
  }

  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */
  function getParentNode(element) {
    if (element.nodeName === 'HTML') {
      return element;
    }
    return element.parentNode || element.host;
  }

  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */
  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;
      case '#document':
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }

  /**
   * Returns the reference node of the reference object, or the reference object itself.
   * @method
   * @memberof Popper.Utils
   * @param {Element|Object} reference - the reference element (the popper will be relative to this)
   * @returns {Element} parent
   */
  function getReferenceNode(reference) {
    return reference && reference.referenceNode ? reference.referenceNode : reference;
  }

  var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

  /**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */
  function isIE(version) {
    if (version === 11) {
      return isIE11;
    }
    if (version === 10) {
      return isIE10;
    }
    return isIE11 || isIE10;
  }

  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
      return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
  }

  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */
  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }

  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */
  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }

  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */
  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }

  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */
  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }

  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */

  function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

    return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
  }

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
  }

  function getWindowSizes(document) {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);

    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle)
    };
  }

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();





  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
  function getClientRect(offsets) {
    return _extends({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }

  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */
  function getBoundingClientRect(element) {
    var rect = {};

    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
      if (isIE(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };

    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.width;
    var height = sizes.height || element.clientHeight || result.height;

    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, 'x');
      vertScrollbar -= getBordersSize(styles, 'y');

      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);

    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
      parentRect.top = Math.max(parentRect.top, 0);
      parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;

    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
      var marginTop = parseFloat(styles.marginTop, 10);
      var marginLeft = parseFloat(styles.marginLeft, 10);

      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft;

      // Attach marginTop and marginLeft because in some circumstances we may need them
      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);

    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };

    return getClientRect(offset);
  }

  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */
  function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    var parentNode = getParentNode(element);
    if (!parentNode) {
      return false;
    }
    return isFixed(parentNode);
  }

  /**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */

  function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
      return document.documentElement;
    }
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
      el = el.parentElement;
    }
    return el || document.documentElement;
  }

  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */
  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    // NOTE: 1 DOM access here

    var boundaries = { top: 0, left: 0 };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

    // Handle viewport case
    if (boundariesElement === 'viewport') {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;
      if (boundariesElement === 'scrollParent') {
        boundariesNode = getScrollParent(getParentNode(reference));
        if (boundariesNode.nodeName === 'BODY') {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === 'window') {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

      // In case of HTML, we need a different computation
      if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(popper.ownerDocument),
            height = _getWindowSizes.height,
            width = _getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    }

    // Add paddings
    padding = padding || 0;
    var isPaddingNumber = typeof padding === 'number';
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

    return boundaries;
  }

  function getArea(_ref) {
    var width = _ref.width,
        height = _ref.height;

    return width * height;
  }

  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
      return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };

    var sortedAreas = Object.keys(rects).map(function (key) {
      return _extends({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });

    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });

    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

    var variation = placement.split('-')[1];

    return computedPlacement + (variation ? '-' + variation : '');
  }

  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */
  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */
  function getOuterSizes(element) {
    var window = element.ownerDocument.defaultView;
    var styles = window.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }

  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */
  function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */
  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];

    // Get popper node sizes
    var popperRect = getOuterSizes(popper);

    // Add position, width and height to our offsets object
    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    };

    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';

    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }

  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    }

    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
  }

  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    }

    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }

  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */
  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

    modifiersToRun.forEach(function (modifier) {
      if (modifier['function']) {
        // eslint-disable-line dot-notation
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }
      var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
      if (modifier.enabled && isFunction(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);

        data = fn(data, modifier);
      }
    });

    return data;
  }

  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */
  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    };

    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;

    data.positionFixed = this.options.positionFixed;

    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

    // run the modifiers
    data = runModifiers(this.modifiers, data);

    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }

  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */
  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
          enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }

  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */
  function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? '' + prefix + upperProp : property;
      if (typeof document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }
    return null;
  }

  /**
   * Destroys the popper.
   * @method
   * @memberof Popper
   */
  function destroy() {
    this.state.isDestroyed = true;

    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.position = '';
      this.popper.style.top = '';
      this.popper.style.left = '';
      this.popper.style.right = '';
      this.popper.style.bottom = '';
      this.popper.style.willChange = '';
      this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners();

    // remove the popper if user explicitly asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }

  /**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */
  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });

    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
  }

  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;

    return state;
  }

  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */
  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }

  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);

    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    });

    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }

  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger `onUpdate` callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */
  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }

  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */
  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = '';
      // add unit if the value is numeric and is one of the following
      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = 'px';
      }
      element.style[prop] = styles[prop] + unit;
    });
  }

  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];
      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */
  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);

    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);

    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }

  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */
  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

    popper.setAttribute('x-placement', placement);

    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

    return options;
  }

  /**
   * @function
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Boolean} shouldRound - If the offsets should be rounded at all
   * @returns {Object} The popper's position offsets rounded
   *
   * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
   * good as it can be within reason.
   * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
   *
   * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
   * as well on High DPI screens).
   *
   * Firefox prefers no rounding for positioning and does not have blurriness on
   * high DPI screens.
   *
   * Only horizontal placement and left/right values need to be considered.
   */
  function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var round = Math.round,
        floor = Math.floor;

    var noRound = function noRound(v) {
      return v;
    };

    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);

    var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf('-') !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

    var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger = !shouldRound ? noRound : round;

    return {
      left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
      top: verticalToInteger(popper.top),
      bottom: verticalToInteger(popper.bottom),
      right: horizontalToInteger(popper.right)
    };
  }

  var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper;

    // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
      console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);

    // Styles
    var styles = {
      position: popper.position
    };

    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';

    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');

    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0,
        top = void 0;
    if (sideA === 'bottom') {
      // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
      // and not the bottom of the html element
      if (offsetParent.nodeName === 'HTML') {
        top = -offsetParent.clientHeight + offsets.bottom;
      } else {
        top = -offsetParentRect.height + offsets.bottom;
      }
    } else {
      top = offsets.top;
    }
    if (sideB === 'right') {
      if (offsetParent.nodeName === 'HTML') {
        left = -offsetParent.clientWidth + offsets.right;
      } else {
        left = -offsetParentRect.width + offsets.right;
      }
    } else {
      left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === 'bottom' ? -1 : 1;
      var invertLeft = sideB === 'right' ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ', ' + sideB;
    }

    // Attributes
    var attributes = {
      'x-placement': data.placement
    };

    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends({}, attributes, data.attributes);
    data.styles = _extends({}, styles, data.styles);
    data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

    return data;
  }

  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */
  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });

    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var _requesting = '`' + requestingName + '`';
      var requested = '`' + requestedName + '`';
      console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function arrow(data, options) {
    var _data$offsets$arrow;

    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement = options.element;

    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
      arrowElement = data.instance.popper.querySelector(arrowElement);

      // if arrowElement is not found, don't run the modifier
      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
      }
    }

    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isVertical = ['left', 'right'].indexOf(placement) !== -1;

    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];

    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //

    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);

    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

    return data;
  }

  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */
  function getOppositeVariation(variation) {
    if (variation === 'end') {
      return 'start';
    } else if (variation === 'start') {
      return 'end';
    }
    return variation;
  }

  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-end` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
  var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

  // Get rid of `auto` `auto-start` and `auto-end`
  var validPlacements = placements.slice(3);

  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';

    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;
      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;
      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;
      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);

      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference;

      // using floor because the reference offsets may contain decimals we are not going to consider here
      var floor = Math.floor;
      var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

      var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

      // flip the variation if required
      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

      // flips variation if reference element overflows boundaries
      var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

      // flips variation if popper content overflows boundaries
      var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

      var flippedVariation = flippedVariationByRef || flippedVariationByContent;

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? '-' + variation : '');

        // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future
        data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

        data = runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function keepTogether(data) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }

  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */
  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];

    // If it's not a number it's an operator, I guess
    if (!value) {
      return str;
    }

    if (unit.indexOf('%') === 0) {
      var element = void 0;
      switch (unit) {
        case '%p':
          element = popperOffsets;
          break;
        case '%':
        case '%r':
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;
      if (unit === 'vh') {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }

  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */
  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];

    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    });

    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }

    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
      var mergeWithPrevious = false;
      return op
      // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 => [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, [])
      // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    });

    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */
  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
        _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var basePlacement = placement.split('-')[0];

    var offsets = void 0;
    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === 'top') {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }

    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification
    var top = popperStyles.top,
        left = popperStyles.left,
        transform = popperStyles[transformProp];

    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;

    options.boundaries = boundaries;

    var order = options.priority;
    var popper = data.offsets.popper;

    var check = {
      primary: function primary(placement) {
        var value = popper[placement];
        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }
        return defineProperty({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];
        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
        }
        return defineProperty({}, mainSide, value);
      }
    };

    order.forEach(function (placement) {
      var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = _extends({}, popper, check[side](placement));
    });

    data.offsets.popper = popper;

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
      var _data$offsets = data.offsets,
          reference = _data$offsets.reference,
          popper = _data$offsets.popper;

      var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
      var side = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';

      var shiftOffsets = {
        start: defineProperty({}, side, reference[side]),
        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
      };

      data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes['x-out-of-boundaries'] = '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);

    return data;
  }

  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */
  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unit-less, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the `height`.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: offset,
      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * A scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: preventOverflow,
      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],
      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper. This makes sure the popper always has a little padding
       * between the edges of its container
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier. Can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near each other
     * without leaving any gap between the two. Especially useful when the arrow is
     * enabled and you want to ensure that it points to its reference element.
     * It cares only about the first axis. You can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjunction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: arrow,
      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: flip,
      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations)
       */
      behavior: 'flip',
      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position.
       * The popper will never be placed outside of the defined boundaries
       * (except if `keepTogether` is enabled)
       */
      boundariesElement: 'viewport',
      /**
       * @prop {Boolean} flipVariations=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the reference element overlaps its boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariations: false,
      /**
       * @prop {Boolean} flipVariationsByContent=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the popper element overlaps its reference boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariationsByContent: false
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,
      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,
      /** @prop {ModifierFn} */
      fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: computeStyle,
      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: true,
      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',
      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define your own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: applyStyle,
      /** @prop {Function} */
      onLoad: applyStyleOnLoad,
      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: undefined
    }
  };

  /**
   * The `dataObject` is an object containing all the information used by Popper.js.
   * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overridden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass an object with the same
   * structure of the `options` object, as the 3rd argument. For example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */
  var Defaults = {
    /**
     * Popper's placement.
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,

    /**
     * Whether events (resize, scroll) are initially enabled.
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated. This callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js.
     * @prop {modifiers}
     */
    modifiers: modifiers
  };

  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */

  // Utils
  // Methods
  var Popper = function () {
    /**
     * Creates a new Popper.js instance.
     * @class Popper
     * @param {Element|referenceObject} reference - The reference element used to position the popper
     * @param {Element} popper - The HTML / XML element used as the popper
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      };

      // make update() debounced, so that it only runs at most once-per-tick
      this.update = debounce(this.update.bind(this));

      // with {} we create a new object with the options inside it
      this.options = _extends({}, Popper.Defaults, options);

      // init state
      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      };

      // get reference and popper elements (allow jQuery wrappers)
      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper;

      // Deep merge modifiers options
      this.options.modifiers = {};
      Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });

      // Refactoring modifiers' list (Object => Array)
      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends({
          name: name
        }, _this.options.modifiers[name]);
      })
      // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      });

      // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      });

      // fire the first update to position the popper in the right place
      this.update();

      var eventsEnabled = this.options.eventsEnabled;
      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    }

    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass(Popper, [{
      key: 'update',
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: 'destroy',
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }

      /**
       * Schedules an update. It will run on the next UI update available.
       * @method scheduleUpdate
       * @memberof Popper
       */


      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */

    }]);
    return Popper;
  }();

  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10.
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */


  Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.4.1';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event$4 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
  };
  var ClassName$4 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector$4 = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var isActive = $(this._menu).hasClass(ClassName$4.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName$4.POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(Event$4.HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(Event$4.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, this.constructor.Default, {}, $(this._element).data(), {}, config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(Selector$4.MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _objectSpread2({}, popperConfig, {}, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(ClassName$4.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $(dropdownMenu).removeClass(ClassName$4.SHOW);
        $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName$4.SHOW);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS)).filter(function (item) {
        return $(item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.4.1';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$5 = {
    HIDE: "hide" + EVENT_KEY$5,
    HIDE_PREVENTED: "hidePrevented" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    RESIZE: "resize" + EVENT_KEY$5,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
    CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
  };
  var ClassName$5 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show',
    STATIC: 'modal-static'
  };
  var Selector$5 = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector$5.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName$5.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event$5.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event$5.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event$5.FOCUSIN);
      $(this._element).removeClass(ClassName$5.SHOW);
      $(this._element).off(Event$5.CLICK_DISMISS);
      $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event$5.FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$3, {}, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(Event$5.HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        this._element.classList.add(ClassName$5.STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(ClassName$5.STATIC);
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(ClassName$5.FADE);
      var modalBody = this._dialog ? this._dialog.querySelector(Selector$5.MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName$5.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event$5.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
      .on(Event$5.FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event$5.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(Event$5.RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(Event$5.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName$5.OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(Event$5.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName$5.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName$5.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName$5.SHOW);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName$5.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName$5.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread2({}, Default$3, {}, $(this).data(), {}, typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread2({}, $(target).data(), {}, $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event$5.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event$5.HIDDEN, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.4.1';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$6 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var ClassName$6 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName$6.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(ClassName$6.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if ($(this.tip).hasClass(ClassName$6.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: Selector$6.ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _objectSpread2({}, defaultBsConfig, {}, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _objectSpread2({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread2({}, this.constructor.Default, {}, dataAttributes, {}, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(ClassName$6.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$6;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.4.1';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread2({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread2({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName$7 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$7 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event$7 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector$7.CONTENT), content);
      $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$7;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.4.1';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$8 = {
    ACTIVATE: "activate" + EVENT_KEY$8,
    SCROLL: "scroll" + EVENT_KEY$8,
    LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
  };
  var ClassName$8 = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$8 = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(Event$8.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$6, {}, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      var offsetLength = this._offsets.length;

      for (var i = offsetLength; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
        $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
        $link.addClass(ClassName$8.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
      }

      $(this._scrollElement).trigger(Event$8.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(ClassName$8.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$8.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event$8.LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.4.1';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var Event$9 = {
    HIDE: "hide" + EVENT_KEY$9,
    HIDDEN: "hidden" + EVENT_KEY$9,
    SHOW: "show" + EVENT_KEY$9,
    SHOWN: "shown" + EVENT_KEY$9,
    CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
  };
  var ClassName$9 = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$9 = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event$9.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(Event$9.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event$9.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(Event$9.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName$9.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName$9.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName$9.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(ClassName$9.FADE)) {
        element.classList.add(ClassName$9.SHOW);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
          $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.4.1';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var Event$a = {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
    HIDE: "hide" + EVENT_KEY$a,
    HIDDEN: "hidden" + EVENT_KEY$a,
    SHOW: "show" + EVENT_KEY$a,
    SHOWN: "shown" + EVENT_KEY$a
  };
  var ClassName$a = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var Selector$a = {
    DATA_DISMISS: '[data-dismiss="toast"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast =
  /*#__PURE__*/
  function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      var showEvent = $.Event(Event$a.SHOW);
      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      if (this._config.animation) {
        this._element.classList.add(ClassName$a.FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(ClassName$a.SHOWING);

        _this._element.classList.add(ClassName$a.SHOW);

        $(_this._element).trigger(Event$a.SHOWN);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(ClassName$a.HIDE);

      Util.reflow(this._element);

      this._element.classList.add(ClassName$a.SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(ClassName$a.SHOW)) {
        return;
      }

      var hideEvent = $.Event(Event$a.HIDE);
      $(this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(ClassName$a.SHOW)) {
        this._element.classList.remove(ClassName$a.SHOW);
      }

      $(this._element).off(Event$a.CLICK_DISMISS);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$7, {}, $(this._element).data(), {}, typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(ClassName$a.HIDE);

        $(_this3._element).trigger(Event$a.HIDDEN);
      };

      this._element.classList.remove(ClassName$a.SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.bundle.js.map

///////////////////////////////////////////////////////////////////////////
// src/js/libs/100-chartist.min.js ////////////////////////////////////////

/* Chartist.js 0.10.0
 * Copyright © 2016 Gion Kunz
 * Free to use under either the WTFPL license or the MIT license.
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
 */

!function(a,b){"function"==typeof define&&define.amd?define("Chartist",[],function(){return a.Chartist=b()}):"object"==typeof exports?module.exports=b():a.Chartist=b()}(this,function(){var a={version:"0.10.0"};return function(a,b,c){"use strict";c.namespaces={svg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/xmlns/",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",ct:"http://gionkunz.github.com/chartist-js/ct"},c.noop=function(a){return a},c.alphaNumerate=function(a){return String.fromCharCode(97+a%26)},c.extend=function(a){var b,d,e;for(a=a||{},b=1;b<arguments.length;b++){d=arguments[b];for(var f in d)e=d[f],"object"!=typeof e||null===e||e instanceof Array?a[f]=e:a[f]=c.extend(a[f],e)}return a},c.replaceAll=function(a,b,c){return a.replace(new RegExp(b,"g"),c)},c.ensureUnit=function(a,b){return"number"==typeof a&&(a+=b),a},c.quantity=function(a){if("string"==typeof a){var b=/^(\d+)\s*(.*)$/g.exec(a);return{value:+b[1],unit:b[2]||void 0}}return{value:a}},c.querySelector=function(a){return a instanceof Node?a:b.querySelector(a)},c.times=function(a){return Array.apply(null,new Array(a))},c.sum=function(a,b){return a+(b?b:0)},c.mapMultiply=function(a){return function(b){return b*a}},c.mapAdd=function(a){return function(b){return b+a}},c.serialMap=function(a,b){var d=[],e=Math.max.apply(null,a.map(function(a){return a.length}));return c.times(e).forEach(function(c,e){var f=a.map(function(a){return a[e]});d[e]=b.apply(null,f)}),d},c.roundWithPrecision=function(a,b){var d=Math.pow(10,b||c.precision);return Math.round(a*d)/d},c.precision=8,c.escapingMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"},c.serialize=function(a){return null===a||void 0===a?a:("number"==typeof a?a=""+a:"object"==typeof a&&(a=JSON.stringify({data:a})),Object.keys(c.escapingMap).reduce(function(a,b){return c.replaceAll(a,b,c.escapingMap[b])},a))},c.deserialize=function(a){if("string"!=typeof a)return a;a=Object.keys(c.escapingMap).reduce(function(a,b){return c.replaceAll(a,c.escapingMap[b],b)},a);try{a=JSON.parse(a),a=void 0!==a.data?a.data:a}catch(b){}return a},c.createSvg=function(a,b,d,e){var f;return b=b||"100%",d=d||"100%",Array.prototype.slice.call(a.querySelectorAll("svg")).filter(function(a){return a.getAttributeNS(c.namespaces.xmlns,"ct")}).forEach(function(b){a.removeChild(b)}),f=new c.Svg("svg").attr({width:b,height:d}).addClass(e).attr({style:"width: "+b+"; height: "+d+";"}),a.appendChild(f._node),f},c.normalizeData=function(a,b,d){var e,f={raw:a,normalized:{}};return f.normalized.series=c.getDataArray({series:a.series||[]},b,d),e=f.normalized.series.every(function(a){return a instanceof Array})?Math.max.apply(null,f.normalized.series.map(function(a){return a.length})):f.normalized.series.length,f.normalized.labels=(a.labels||[]).slice(),Array.prototype.push.apply(f.normalized.labels,c.times(Math.max(0,e-f.normalized.labels.length)).map(function(){return""})),b&&c.reverseData(f.normalized),f},c.safeHasProperty=function(a,b){return null!==a&&"object"==typeof a&&a.hasOwnProperty(b)},c.isDataHoleValue=function(a){return null===a||void 0===a||"number"==typeof a&&isNaN(a)},c.reverseData=function(a){a.labels.reverse(),a.series.reverse();for(var b=0;b<a.series.length;b++)"object"==typeof a.series[b]&&void 0!==a.series[b].data?a.series[b].data.reverse():a.series[b]instanceof Array&&a.series[b].reverse()},c.getDataArray=function(a,b,d){function e(a){if(c.safeHasProperty(a,"value"))return e(a.value);if(c.safeHasProperty(a,"data"))return e(a.data);if(a instanceof Array)return a.map(e);if(!c.isDataHoleValue(a)){if(d){var b={};return"string"==typeof d?b[d]=c.getNumberOrUndefined(a):b.y=c.getNumberOrUndefined(a),b.x=a.hasOwnProperty("x")?c.getNumberOrUndefined(a.x):b.x,b.y=a.hasOwnProperty("y")?c.getNumberOrUndefined(a.y):b.y,b}return c.getNumberOrUndefined(a)}}return a.series.map(e)},c.normalizePadding=function(a,b){return b=b||0,"number"==typeof a?{top:a,right:a,bottom:a,left:a}:{top:"number"==typeof a.top?a.top:b,right:"number"==typeof a.right?a.right:b,bottom:"number"==typeof a.bottom?a.bottom:b,left:"number"==typeof a.left?a.left:b}},c.getMetaData=function(a,b){var c=a.data?a.data[b]:a[b];return c?c.meta:void 0},c.orderOfMagnitude=function(a){return Math.floor(Math.log(Math.abs(a))/Math.LN10)},c.projectLength=function(a,b,c){return b/c.range*a},c.getAvailableHeight=function(a,b){return Math.max((c.quantity(b.height).value||a.height())-(b.chartPadding.top+b.chartPadding.bottom)-b.axisX.offset,0)},c.getHighLow=function(a,b,d){function e(a){if(void 0!==a)if(a instanceof Array)for(var b=0;b<a.length;b++)e(a[b]);else{var c=d?+a[d]:+a;g&&c>f.high&&(f.high=c),h&&c<f.low&&(f.low=c)}}b=c.extend({},b,d?b["axis"+d.toUpperCase()]:{});var f={high:void 0===b.high?-Number.MAX_VALUE:+b.high,low:void 0===b.low?Number.MAX_VALUE:+b.low},g=void 0===b.high,h=void 0===b.low;return(g||h)&&e(a),(b.referenceValue||0===b.referenceValue)&&(f.high=Math.max(b.referenceValue,f.high),f.low=Math.min(b.referenceValue,f.low)),f.high<=f.low&&(0===f.low?f.high=1:f.low<0?f.high=0:f.high>0?f.low=0:(f.high=1,f.low=0)),f},c.isNumeric=function(a){return null!==a&&isFinite(a)},c.isFalseyButZero=function(a){return!a&&0!==a},c.getNumberOrUndefined=function(a){return c.isNumeric(a)?+a:void 0},c.isMultiValue=function(a){return"object"==typeof a&&("x"in a||"y"in a)},c.getMultiValue=function(a,b){return c.isMultiValue(a)?c.getNumberOrUndefined(a[b||"y"]):c.getNumberOrUndefined(a)},c.rho=function(a){function b(a,c){return a%c===0?c:b(c,a%c)}function c(a){return a*a+1}if(1===a)return a;var d,e=2,f=2;if(a%2===0)return 2;do e=c(e)%a,f=c(c(f))%a,d=b(Math.abs(e-f),a);while(1===d);return d},c.getBounds=function(a,b,d,e){function f(a,b){return a===(a+=b)&&(a*=1+(b>0?o:-o)),a}var g,h,i,j=0,k={high:b.high,low:b.low};k.valueRange=k.high-k.low,k.oom=c.orderOfMagnitude(k.valueRange),k.step=Math.pow(10,k.oom),k.min=Math.floor(k.low/k.step)*k.step,k.max=Math.ceil(k.high/k.step)*k.step,k.range=k.max-k.min,k.numberOfSteps=Math.round(k.range/k.step);var l=c.projectLength(a,k.step,k),m=l<d,n=e?c.rho(k.range):0;if(e&&c.projectLength(a,1,k)>=d)k.step=1;else if(e&&n<k.step&&c.projectLength(a,n,k)>=d)k.step=n;else for(;;){if(m&&c.projectLength(a,k.step,k)<=d)k.step*=2;else{if(m||!(c.projectLength(a,k.step/2,k)>=d))break;if(k.step/=2,e&&k.step%1!==0){k.step*=2;break}}if(j++>1e3)throw new Error("Exceeded maximum number of iterations while optimizing scale step!")}var o=2.221e-16;for(k.step=Math.max(k.step,o),h=k.min,i=k.max;h+k.step<=k.low;)h=f(h,k.step);for(;i-k.step>=k.high;)i=f(i,-k.step);k.min=h,k.max=i,k.range=k.max-k.min;var p=[];for(g=k.min;g<=k.max;g=f(g,k.step)){var q=c.roundWithPrecision(g);q!==p[p.length-1]&&p.push(q)}return k.values=p,k},c.polarToCartesian=function(a,b,c,d){var e=(d-90)*Math.PI/180;return{x:a+c*Math.cos(e),y:b+c*Math.sin(e)}},c.createChartRect=function(a,b,d){var e=!(!b.axisX&&!b.axisY),f=e?b.axisY.offset:0,g=e?b.axisX.offset:0,h=a.width()||c.quantity(b.width).value||0,i=a.height()||c.quantity(b.height).value||0,j=c.normalizePadding(b.chartPadding,d);h=Math.max(h,f+j.left+j.right),i=Math.max(i,g+j.top+j.bottom);var k={padding:j,width:function(){return this.x2-this.x1},height:function(){return this.y1-this.y2}};return e?("start"===b.axisX.position?(k.y2=j.top+g,k.y1=Math.max(i-j.bottom,k.y2+1)):(k.y2=j.top,k.y1=Math.max(i-j.bottom-g,k.y2+1)),"start"===b.axisY.position?(k.x1=j.left+f,k.x2=Math.max(h-j.right,k.x1+1)):(k.x1=j.left,k.x2=Math.max(h-j.right-f,k.x1+1))):(k.x1=j.left,k.x2=Math.max(h-j.right,k.x1+1),k.y2=j.top,k.y1=Math.max(i-j.bottom,k.y2+1)),k},c.createGrid=function(a,b,d,e,f,g,h,i){var j={};j[d.units.pos+"1"]=a,j[d.units.pos+"2"]=a,j[d.counterUnits.pos+"1"]=e,j[d.counterUnits.pos+"2"]=e+f;var k=g.elem("line",j,h.join(" "));i.emit("draw",c.extend({type:"grid",axis:d,index:b,group:g,element:k},j))},c.createGridBackground=function(a,b,c,d){var e=a.elem("rect",{x:b.x1,y:b.y2,width:b.width(),height:b.height()},c,!0);d.emit("draw",{type:"gridBackground",group:a,element:e})},c.createLabel=function(a,b,d,e,f,g,h,i,j,k,l){var m,n={};if(n[f.units.pos]=a+h[f.units.pos],n[f.counterUnits.pos]=h[f.counterUnits.pos],n[f.units.len]=b,n[f.counterUnits.len]=Math.max(0,g-10),k){var o='<span class="'+j.join(" ")+'" style="'+f.units.len+": "+Math.round(n[f.units.len])+"px; "+f.counterUnits.len+": "+Math.round(n[f.counterUnits.len])+'px">'+e[d]+"</span>";m=i.foreignObject(o,c.extend({style:"overflow: visible;"},n))}else m=i.elem("text",n,j.join(" ")).text(e[d]);l.emit("draw",c.extend({type:"label",axis:f,index:d,group:i,element:m,text:e[d]},n))},c.getSeriesOption=function(a,b,c){if(a.name&&b.series&&b.series[a.name]){var d=b.series[a.name];return d.hasOwnProperty(c)?d[c]:b[c]}return b[c]},c.optionsProvider=function(b,d,e){function f(b){var f=h;if(h=c.extend({},j),d)for(i=0;i<d.length;i++){var g=a.matchMedia(d[i][0]);g.matches&&(h=c.extend(h,d[i][1]))}e&&b&&e.emit("optionsChanged",{previousOptions:f,currentOptions:h})}function g(){k.forEach(function(a){a.removeListener(f)})}var h,i,j=c.extend({},b),k=[];if(!a.matchMedia)throw"window.matchMedia not found! Make sure you're using a polyfill.";if(d)for(i=0;i<d.length;i++){var l=a.matchMedia(d[i][0]);l.addListener(f),k.push(l)}return f(),{removeMediaQueryListeners:g,getCurrentOptions:function(){return c.extend({},h)}}},c.splitIntoSegments=function(a,b,d){var e={increasingX:!1,fillHoles:!1};d=c.extend({},e,d);for(var f=[],g=!0,h=0;h<a.length;h+=2)void 0===c.getMultiValue(b[h/2].value)?d.fillHoles||(g=!0):(d.increasingX&&h>=2&&a[h]<=a[h-2]&&(g=!0),g&&(f.push({pathCoordinates:[],valueData:[]}),g=!1),f[f.length-1].pathCoordinates.push(a[h],a[h+1]),f[f.length-1].valueData.push(b[h/2]));return f}}(window,document,a),function(a,b,c){"use strict";c.Interpolation={},c.Interpolation.none=function(a){var b={fillHoles:!1};return a=c.extend({},b,a),function(b,d){for(var e=new c.Svg.Path,f=!0,g=0;g<b.length;g+=2){var h=b[g],i=b[g+1],j=d[g/2];void 0!==c.getMultiValue(j.value)?(f?e.move(h,i,!1,j):e.line(h,i,!1,j),f=!1):a.fillHoles||(f=!0)}return e}},c.Interpolation.simple=function(a){var b={divisor:2,fillHoles:!1};a=c.extend({},b,a);var d=1/Math.max(1,a.divisor);return function(b,e){for(var f,g,h,i=new c.Svg.Path,j=0;j<b.length;j+=2){var k=b[j],l=b[j+1],m=(k-f)*d,n=e[j/2];void 0!==n.value?(void 0===h?i.move(k,l,!1,n):i.curve(f+m,g,k-m,l,k,l,!1,n),f=k,g=l,h=n):a.fillHoles||(f=k=h=void 0)}return i}},c.Interpolation.cardinal=function(a){var b={tension:1,fillHoles:!1};a=c.extend({},b,a);var d=Math.min(1,Math.max(0,a.tension)),e=1-d;return function f(b,g){var h=c.splitIntoSegments(b,g,{fillHoles:a.fillHoles});if(h.length){if(h.length>1){var i=[];return h.forEach(function(a){i.push(f(a.pathCoordinates,a.valueData))}),c.Svg.Path.join(i)}if(b=h[0].pathCoordinates,g=h[0].valueData,b.length<=4)return c.Interpolation.none()(b,g);for(var j,k=(new c.Svg.Path).move(b[0],b[1],!1,g[0]),l=0,m=b.length;m-2*!j>l;l+=2){var n=[{x:+b[l-2],y:+b[l-1]},{x:+b[l],y:+b[l+1]},{x:+b[l+2],y:+b[l+3]},{x:+b[l+4],y:+b[l+5]}];j?l?m-4===l?n[3]={x:+b[0],y:+b[1]}:m-2===l&&(n[2]={x:+b[0],y:+b[1]},n[3]={x:+b[2],y:+b[3]}):n[0]={x:+b[m-2],y:+b[m-1]}:m-4===l?n[3]=n[2]:l||(n[0]={x:+b[l],y:+b[l+1]}),k.curve(d*(-n[0].x+6*n[1].x+n[2].x)/6+e*n[2].x,d*(-n[0].y+6*n[1].y+n[2].y)/6+e*n[2].y,d*(n[1].x+6*n[2].x-n[3].x)/6+e*n[2].x,d*(n[1].y+6*n[2].y-n[3].y)/6+e*n[2].y,n[2].x,n[2].y,!1,g[(l+2)/2])}return k}return c.Interpolation.none()([])}},c.Interpolation.monotoneCubic=function(a){var b={fillHoles:!1};return a=c.extend({},b,a),function d(b,e){var f=c.splitIntoSegments(b,e,{fillHoles:a.fillHoles,increasingX:!0});if(f.length){if(f.length>1){var g=[];return f.forEach(function(a){g.push(d(a.pathCoordinates,a.valueData))}),c.Svg.Path.join(g)}if(b=f[0].pathCoordinates,e=f[0].valueData,b.length<=4)return c.Interpolation.none()(b,e);var h,i,j=[],k=[],l=b.length/2,m=[],n=[],o=[],p=[];for(h=0;h<l;h++)j[h]=b[2*h],k[h]=b[2*h+1];for(h=0;h<l-1;h++)o[h]=k[h+1]-k[h],p[h]=j[h+1]-j[h],n[h]=o[h]/p[h];for(m[0]=n[0],m[l-1]=n[l-2],h=1;h<l-1;h++)0===n[h]||0===n[h-1]||n[h-1]>0!=n[h]>0?m[h]=0:(m[h]=3*(p[h-1]+p[h])/((2*p[h]+p[h-1])/n[h-1]+(p[h]+2*p[h-1])/n[h]),isFinite(m[h])||(m[h]=0));for(i=(new c.Svg.Path).move(j[0],k[0],!1,e[0]),h=0;h<l-1;h++)i.curve(j[h]+p[h]/3,k[h]+m[h]*p[h]/3,j[h+1]-p[h]/3,k[h+1]-m[h+1]*p[h]/3,j[h+1],k[h+1],!1,e[h+1]);return i}return c.Interpolation.none()([])}},c.Interpolation.step=function(a){var b={postpone:!0,fillHoles:!1};return a=c.extend({},b,a),function(b,d){for(var e,f,g,h=new c.Svg.Path,i=0;i<b.length;i+=2){var j=b[i],k=b[i+1],l=d[i/2];void 0!==l.value?(void 0===g?h.move(j,k,!1,l):(a.postpone?h.line(j,f,!1,g):h.line(e,k,!1,l),h.line(j,k,!1,l)),e=j,f=k,g=l):a.fillHoles||(e=f=g=void 0)}return h}}}(window,document,a),function(a,b,c){"use strict";c.EventEmitter=function(){function a(a,b){d[a]=d[a]||[],d[a].push(b)}function b(a,b){d[a]&&(b?(d[a].splice(d[a].indexOf(b),1),0===d[a].length&&delete d[a]):delete d[a])}function c(a,b){d[a]&&d[a].forEach(function(a){a(b)}),d["*"]&&d["*"].forEach(function(c){c(a,b)})}var d=[];return{addEventHandler:a,removeEventHandler:b,emit:c}}}(window,document,a),function(a,b,c){"use strict";function d(a){var b=[];if(a.length)for(var c=0;c<a.length;c++)b.push(a[c]);return b}function e(a,b){var d=b||this.prototype||c.Class,e=Object.create(d);c.Class.cloneDefinitions(e,a);var f=function(){var a,b=e.constructor||function(){};return a=this===c?Object.create(e):this,b.apply(a,Array.prototype.slice.call(arguments,0)),a};return f.prototype=e,f["super"]=d,f.extend=this.extend,f}function f(){var a=d(arguments),b=a[0];return a.splice(1,a.length-1).forEach(function(a){Object.getOwnPropertyNames(a).forEach(function(c){delete b[c],Object.defineProperty(b,c,Object.getOwnPropertyDescriptor(a,c))})}),b}c.Class={extend:e,cloneDefinitions:f}}(window,document,a),function(a,b,c){"use strict";function d(a,b,d){return a&&(this.data=a||{},this.data.labels=this.data.labels||[],this.data.series=this.data.series||[],this.eventEmitter.emit("data",{type:"update",data:this.data})),b&&(this.options=c.extend({},d?this.options:this.defaultOptions,b),this.initializeTimeoutId||(this.optionsProvider.removeMediaQueryListeners(),this.optionsProvider=c.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter))),this.initializeTimeoutId||this.createChart(this.optionsProvider.getCurrentOptions()),this}function e(){return this.initializeTimeoutId?a.clearTimeout(this.initializeTimeoutId):(a.removeEventListener("resize",this.resizeListener),this.optionsProvider.removeMediaQueryListeners()),this}function f(a,b){return this.eventEmitter.addEventHandler(a,b),this}function g(a,b){return this.eventEmitter.removeEventHandler(a,b),this}function h(){a.addEventListener("resize",this.resizeListener),this.optionsProvider=c.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter),this.eventEmitter.addEventHandler("optionsChanged",function(){this.update()}.bind(this)),this.options.plugins&&this.options.plugins.forEach(function(a){a instanceof Array?a[0](this,a[1]):a(this)}.bind(this)),this.eventEmitter.emit("data",{type:"initial",data:this.data}),this.createChart(this.optionsProvider.getCurrentOptions()),this.initializeTimeoutId=void 0}function i(a,b,d,e,f){this.container=c.querySelector(a),this.data=b||{},this.data.labels=this.data.labels||[],this.data.series=this.data.series||[],this.defaultOptions=d,this.options=e,this.responsiveOptions=f,this.eventEmitter=c.EventEmitter(),this.supportsForeignObject=c.Svg.isSupported("Extensibility"),this.supportsAnimations=c.Svg.isSupported("AnimationEventsAttribute"),this.resizeListener=function(){this.update()}.bind(this),this.container&&(this.container.__chartist__&&this.container.__chartist__.detach(),this.container.__chartist__=this),this.initializeTimeoutId=setTimeout(h.bind(this),0)}c.Base=c.Class.extend({constructor:i,optionsProvider:void 0,container:void 0,svg:void 0,eventEmitter:void 0,createChart:function(){throw new Error("Base chart type can't be instantiated!")},update:d,detach:e,on:f,off:g,version:c.version,supportsForeignObject:!1})}(window,document,a),function(a,b,c){"use strict";function d(a,d,e,f,g){a instanceof Element?this._node=a:(this._node=b.createElementNS(c.namespaces.svg,a),"svg"===a&&this.attr({"xmlns:ct":c.namespaces.ct})),d&&this.attr(d),e&&this.addClass(e),f&&(g&&f._node.firstChild?f._node.insertBefore(this._node,f._node.firstChild):f._node.appendChild(this._node))}function e(a,b){return"string"==typeof a?b?this._node.getAttributeNS(b,a):this._node.getAttribute(a):(Object.keys(a).forEach(function(b){if(void 0!==a[b])if(b.indexOf(":")!==-1){var d=b.split(":");this._node.setAttributeNS(c.namespaces[d[0]],b,a[b])}else this._node.setAttribute(b,a[b])}.bind(this)),this)}function f(a,b,d,e){return new c.Svg(a,b,d,this,e)}function g(){return this._node.parentNode instanceof SVGElement?new c.Svg(this._node.parentNode):null}function h(){for(var a=this._node;"svg"!==a.nodeName;)a=a.parentNode;return new c.Svg(a)}function i(a){var b=this._node.querySelector(a);return b?new c.Svg(b):null}function j(a){var b=this._node.querySelectorAll(a);return b.length?new c.Svg.List(b):null}function k(){return this._node}function l(a,d,e,f){if("string"==typeof a){var g=b.createElement("div");g.innerHTML=a,a=g.firstChild}a.setAttribute("xmlns",c.namespaces.xmlns);var h=this.elem("foreignObject",d,e,f);return h._node.appendChild(a),h}function m(a){return this._node.appendChild(b.createTextNode(a)),this}function n(){for(;this._node.firstChild;)this._node.removeChild(this._node.firstChild);return this}function o(){return this._node.parentNode.removeChild(this._node),this.parent()}function p(a){return this._node.parentNode.replaceChild(a._node,this._node),a}function q(a,b){return b&&this._node.firstChild?this._node.insertBefore(a._node,this._node.firstChild):this._node.appendChild(a._node),this}function r(){return this._node.getAttribute("class")?this._node.getAttribute("class").trim().split(/\s+/):[]}function s(a){return this._node.setAttribute("class",this.classes(this._node).concat(a.trim().split(/\s+/)).filter(function(a,b,c){return c.indexOf(a)===b}).join(" ")),this}function t(a){var b=a.trim().split(/\s+/);return this._node.setAttribute("class",this.classes(this._node).filter(function(a){return b.indexOf(a)===-1}).join(" ")),this}function u(){return this._node.setAttribute("class",""),this}function v(){return this._node.getBoundingClientRect().height}function w(){return this._node.getBoundingClientRect().width}function x(a,b,d){return void 0===b&&(b=!0),Object.keys(a).forEach(function(e){function f(a,b){var f,g,h,i={};a.easing&&(h=a.easing instanceof Array?a.easing:c.Svg.Easing[a.easing],delete a.easing),a.begin=c.ensureUnit(a.begin,"ms"),a.dur=c.ensureUnit(a.dur,"ms"),h&&(a.calcMode="spline",a.keySplines=h.join(" "),a.keyTimes="0;1"),b&&(a.fill="freeze",i[e]=a.from,this.attr(i),g=c.quantity(a.begin||0).value,a.begin="indefinite"),f=this.elem("animate",c.extend({attributeName:e},a)),b&&setTimeout(function(){try{f._node.beginElement()}catch(b){i[e]=a.to,this.attr(i),f.remove()}}.bind(this),g),d&&f._node.addEventListener("beginEvent",function(){d.emit("animationBegin",{element:this,animate:f._node,params:a})}.bind(this)),f._node.addEventListener("endEvent",function(){d&&d.emit("animationEnd",{element:this,animate:f._node,params:a}),b&&(i[e]=a.to,this.attr(i),f.remove())}.bind(this))}a[e]instanceof Array?a[e].forEach(function(a){f.bind(this)(a,!1)}.bind(this)):f.bind(this)(a[e],b)}.bind(this)),this}function y(a){var b=this;this.svgElements=[];for(var d=0;d<a.length;d++)this.svgElements.push(new c.Svg(a[d]));Object.keys(c.Svg.prototype).filter(function(a){return["constructor","parent","querySelector","querySelectorAll","replace","append","classes","height","width"].indexOf(a)===-1}).forEach(function(a){b[a]=function(){var d=Array.prototype.slice.call(arguments,0);return b.svgElements.forEach(function(b){c.Svg.prototype[a].apply(b,d)}),b}})}c.Svg=c.Class.extend({constructor:d,attr:e,elem:f,parent:g,root:h,querySelector:i,querySelectorAll:j,getNode:k,foreignObject:l,text:m,empty:n,remove:o,replace:p,append:q,classes:r,addClass:s,removeClass:t,removeAllClasses:u,height:v,width:w,animate:x}),c.Svg.isSupported=function(a){return b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#"+a,"1.1")};var z={easeInSine:[.47,0,.745,.715],easeOutSine:[.39,.575,.565,1],easeInOutSine:[.445,.05,.55,.95],easeInQuad:[.55,.085,.68,.53],easeOutQuad:[.25,.46,.45,.94],easeInOutQuad:[.455,.03,.515,.955],easeInCubic:[.55,.055,.675,.19],easeOutCubic:[.215,.61,.355,1],easeInOutCubic:[.645,.045,.355,1],easeInQuart:[.895,.03,.685,.22],easeOutQuart:[.165,.84,.44,1],easeInOutQuart:[.77,0,.175,1],easeInQuint:[.755,.05,.855,.06],easeOutQuint:[.23,1,.32,1],easeInOutQuint:[.86,0,.07,1],easeInExpo:[.95,.05,.795,.035],easeOutExpo:[.19,1,.22,1],easeInOutExpo:[1,0,0,1],easeInCirc:[.6,.04,.98,.335],easeOutCirc:[.075,.82,.165,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};c.Svg.Easing=z,c.Svg.List=c.Class.extend({constructor:y})}(window,document,a),function(a,b,c){"use strict";function d(a,b,d,e,f,g){var h=c.extend({command:f?a.toLowerCase():a.toUpperCase()},b,g?{data:g}:{});d.splice(e,0,h)}function e(a,b){a.forEach(function(c,d){u[c.command.toLowerCase()].forEach(function(e,f){b(c,e,d,f,a)})})}function f(a,b){this.pathElements=[],this.pos=0,this.close=a,this.options=c.extend({},v,b)}function g(a){return void 0!==a?(this.pos=Math.max(0,Math.min(this.pathElements.length,a)),this):this.pos}function h(a){return this.pathElements.splice(this.pos,a),this}function i(a,b,c,e){return d("M",{x:+a,y:+b},this.pathElements,this.pos++,c,e),this}function j(a,b,c,e){return d("L",{x:+a,y:+b},this.pathElements,this.pos++,c,e),this}function k(a,b,c,e,f,g,h,i){return d("C",{x1:+a,y1:+b,x2:+c,y2:+e,x:+f,y:+g},this.pathElements,this.pos++,h,i),this}function l(a,b,c,e,f,g,h,i,j){return d("A",{rx:+a,ry:+b,xAr:+c,lAf:+e,sf:+f,x:+g,y:+h},this.pathElements,this.pos++,i,j),this}function m(a){var b=a.replace(/([A-Za-z])([0-9])/g,"$1 $2").replace(/([0-9])([A-Za-z])/g,"$1 $2").split(/[\s,]+/).reduce(function(a,b){return b.match(/[A-Za-z]/)&&a.push([]),a[a.length-1].push(b),a},[]);"Z"===b[b.length-1][0].toUpperCase()&&b.pop();var d=b.map(function(a){var b=a.shift(),d=u[b.toLowerCase()];return c.extend({command:b},d.reduce(function(b,c,d){return b[c]=+a[d],b},{}))}),e=[this.pos,0];return Array.prototype.push.apply(e,d),Array.prototype.splice.apply(this.pathElements,e),this.pos+=d.length,this}function n(){var a=Math.pow(10,this.options.accuracy);return this.pathElements.reduce(function(b,c){var d=u[c.command.toLowerCase()].map(function(b){return this.options.accuracy?Math.round(c[b]*a)/a:c[b]}.bind(this));return b+c.command+d.join(",")}.bind(this),"")+(this.close?"Z":"")}function o(a,b){return e(this.pathElements,function(c,d){c[d]*="x"===d[0]?a:b}),this}function p(a,b){return e(this.pathElements,function(c,d){c[d]+="x"===d[0]?a:b}),this}function q(a){return e(this.pathElements,function(b,c,d,e,f){var g=a(b,c,d,e,f);(g||0===g)&&(b[c]=g)}),this}function r(a){var b=new c.Svg.Path(a||this.close);return b.pos=this.pos,b.pathElements=this.pathElements.slice().map(function(a){return c.extend({},a)}),b.options=c.extend({},this.options),b}function s(a){var b=[new c.Svg.Path];return this.pathElements.forEach(function(d){d.command===a.toUpperCase()&&0!==b[b.length-1].pathElements.length&&b.push(new c.Svg.Path),b[b.length-1].pathElements.push(d)}),b}function t(a,b,d){for(var e=new c.Svg.Path(b,d),f=0;f<a.length;f++)for(var g=a[f],h=0;h<g.pathElements.length;h++)e.pathElements.push(g.pathElements[h]);return e}var u={m:["x","y"],l:["x","y"],c:["x1","y1","x2","y2","x","y"],a:["rx","ry","xAr","lAf","sf","x","y"]},v={accuracy:3};c.Svg.Path=c.Class.extend({constructor:f,position:g,remove:h,move:i,line:j,curve:k,arc:l,scale:o,translate:p,transform:q,parse:m,stringify:n,clone:r,splitByCommand:s}),c.Svg.Path.elementDescriptions=u,c.Svg.Path.join=t}(window,document,a),function(a,b,c){"use strict";function d(a,b,c,d){this.units=a,this.counterUnits=a===f.x?f.y:f.x,this.chartRect=b,this.axisLength=b[a.rectEnd]-b[a.rectStart],this.gridOffset=b[a.rectOffset],this.ticks=c,this.options=d}function e(a,b,d,e,f){var g=e["axis"+this.units.pos.toUpperCase()],h=this.ticks.map(this.projectValue.bind(this)),i=this.ticks.map(g.labelInterpolationFnc);h.forEach(function(j,k){var l,m={x:0,y:0};l=h[k+1]?h[k+1]-j:Math.max(this.axisLength-j,30),c.isFalseyButZero(i[k])&&""!==i[k]||("x"===this.units.pos?(j=this.chartRect.x1+j,m.x=e.axisX.labelOffset.x,"start"===e.axisX.position?m.y=this.chartRect.padding.top+e.axisX.labelOffset.y+(d?5:20):m.y=this.chartRect.y1+e.axisX.labelOffset.y+(d?5:20)):(j=this.chartRect.y1-j,m.y=e.axisY.labelOffset.y-(d?l:0),"start"===e.axisY.position?m.x=d?this.chartRect.padding.left+e.axisY.labelOffset.x:this.chartRect.x1-10:m.x=this.chartRect.x2+e.axisY.labelOffset.x+10),g.showGrid&&c.createGrid(j,k,this,this.gridOffset,this.chartRect[this.counterUnits.len](),a,[e.classNames.grid,e.classNames[this.units.dir]],f),g.showLabel&&c.createLabel(j,l,k,i,this,g.offset,m,b,[e.classNames.label,e.classNames[this.units.dir],"start"===g.position?e.classNames[g.position]:e.classNames.end],d,f))}.bind(this))}var f={x:{pos:"x",len:"width",dir:"horizontal",rectStart:"x1",rectEnd:"x2",rectOffset:"y2"},y:{pos:"y",len:"height",dir:"vertical",rectStart:"y2",rectEnd:"y1",rectOffset:"x1"}};c.Axis=c.Class.extend({constructor:d,createGridAndLabels:e,projectValue:function(a,b,c){throw new Error("Base axis can't be instantiated!")}}),c.Axis.units=f}(window,document,a),function(a,b,c){"use strict";function d(a,b,d,e){var f=e.highLow||c.getHighLow(b,e,a.pos);this.bounds=c.getBounds(d[a.rectEnd]-d[a.rectStart],f,e.scaleMinSpace||20,e.onlyInteger),this.range={min:this.bounds.min,max:this.bounds.max},c.AutoScaleAxis["super"].constructor.call(this,a,d,this.bounds.values,e)}function e(a){return this.axisLength*(+c.getMultiValue(a,this.units.pos)-this.bounds.min)/this.bounds.range}c.AutoScaleAxis=c.Axis.extend({constructor:d,projectValue:e})}(window,document,a),function(a,b,c){"use strict";function d(a,b,d,e){var f=e.highLow||c.getHighLow(b,e,a.pos);this.divisor=e.divisor||1,this.ticks=e.ticks||c.times(this.divisor).map(function(a,b){return f.low+(f.high-f.low)/this.divisor*b}.bind(this)),this.ticks.sort(function(a,b){return a-b}),this.range={min:f.low,max:f.high},c.FixedScaleAxis["super"].constructor.call(this,a,d,this.ticks,e),this.stepLength=this.axisLength/this.divisor}function e(a){return this.axisLength*(+c.getMultiValue(a,this.units.pos)-this.range.min)/(this.range.max-this.range.min)}c.FixedScaleAxis=c.Axis.extend({constructor:d,projectValue:e})}(window,document,a),function(a,b,c){"use strict";function d(a,b,d,e){c.StepAxis["super"].constructor.call(this,a,d,e.ticks,e);var f=Math.max(1,e.ticks.length-(e.stretch?1:0));this.stepLength=this.axisLength/f}function e(a,b){return this.stepLength*b}c.StepAxis=c.Axis.extend({constructor:d,projectValue:e})}(window,document,a),function(a,b,c){"use strict";function d(a){var b=c.normalizeData(this.data,a.reverseData,!0);this.svg=c.createSvg(this.container,a.width,a.height,a.classNames.chart);var d,e,g=this.svg.elem("g").addClass(a.classNames.gridGroup),h=this.svg.elem("g"),i=this.svg.elem("g").addClass(a.classNames.labelGroup),j=c.createChartRect(this.svg,a,f.padding);d=void 0===a.axisX.type?new c.StepAxis(c.Axis.units.x,b.normalized.series,j,c.extend({},a.axisX,{ticks:b.normalized.labels,stretch:a.fullWidth})):a.axisX.type.call(c,c.Axis.units.x,b.normalized.series,j,a.axisX),e=void 0===a.axisY.type?new c.AutoScaleAxis(c.Axis.units.y,b.normalized.series,j,c.extend({},a.axisY,{high:c.isNumeric(a.high)?a.high:a.axisY.high,low:c.isNumeric(a.low)?a.low:a.axisY.low})):a.axisY.type.call(c,c.Axis.units.y,b.normalized.series,j,a.axisY),d.createGridAndLabels(g,i,this.supportsForeignObject,a,this.eventEmitter),e.createGridAndLabels(g,i,this.supportsForeignObject,a,this.eventEmitter),a.showGridBackground&&c.createGridBackground(g,j,a.classNames.gridBackground,this.eventEmitter),b.raw.series.forEach(function(f,g){var i=h.elem("g");i.attr({"ct:series-name":f.name,"ct:meta":c.serialize(f.meta)}),i.addClass([a.classNames.series,f.className||a.classNames.series+"-"+c.alphaNumerate(g)].join(" "));var k=[],l=[];b.normalized.series[g].forEach(function(a,h){var i={x:j.x1+d.projectValue(a,h,b.normalized.series[g]),y:j.y1-e.projectValue(a,h,b.normalized.series[g])};k.push(i.x,i.y),l.push({value:a,valueIndex:h,meta:c.getMetaData(f,h)})}.bind(this));var m={lineSmooth:c.getSeriesOption(f,a,"lineSmooth"),showPoint:c.getSeriesOption(f,a,"showPoint"),showLine:c.getSeriesOption(f,a,"showLine"),showArea:c.getSeriesOption(f,a,"showArea"),areaBase:c.getSeriesOption(f,a,"areaBase")},n="function"==typeof m.lineSmooth?m.lineSmooth:m.lineSmooth?c.Interpolation.monotoneCubic():c.Interpolation.none(),o=n(k,l);if(m.showPoint&&o.pathElements.forEach(function(b){var h=i.elem("line",{x1:b.x,y1:b.y,x2:b.x+.01,y2:b.y},a.classNames.point).attr({"ct:value":[b.data.value.x,b.data.value.y].filter(c.isNumeric).join(","),"ct:meta":c.serialize(b.data.meta)});this.eventEmitter.emit("draw",{type:"point",value:b.data.value,index:b.data.valueIndex,meta:b.data.meta,series:f,seriesIndex:g,axisX:d,axisY:e,group:i,element:h,x:b.x,y:b.y})}.bind(this)),m.showLine){var p=i.elem("path",{d:o.stringify()},a.classNames.line,!0);this.eventEmitter.emit("draw",{type:"line",values:b.normalized.series[g],path:o.clone(),chartRect:j,index:g,series:f,seriesIndex:g,seriesMeta:f.meta,axisX:d,axisY:e,group:i,element:p})}if(m.showArea&&e.range){var q=Math.max(Math.min(m.areaBase,e.range.max),e.range.min),r=j.y1-e.projectValue(q);o.splitByCommand("M").filter(function(a){return a.pathElements.length>1}).map(function(a){var b=a.pathElements[0],c=a.pathElements[a.pathElements.length-1];return a.clone(!0).position(0).remove(1).move(b.x,r).line(b.x,b.y).position(a.pathElements.length+1).line(c.x,r)}).forEach(function(c){var h=i.elem("path",{d:c.stringify()},a.classNames.area,!0);this.eventEmitter.emit("draw",{type:"area",values:b.normalized.series[g],path:c.clone(),series:f,seriesIndex:g,axisX:d,axisY:e,chartRect:j,index:g,group:i,element:h})}.bind(this))}}.bind(this)),this.eventEmitter.emit("created",{bounds:e.bounds,chartRect:j,axisX:d,axisY:e,svg:this.svg,options:a})}function e(a,b,d,e){c.Line["super"].constructor.call(this,a,b,f,c.extend({},f,d),e)}var f={axisX:{offset:30,position:"end",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c.noop,type:void 0},axisY:{offset:40,position:"start",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c.noop,type:void 0,scaleMinSpace:20,onlyInteger:!1},width:void 0,height:void 0,showLine:!0,showPoint:!0,showArea:!1,areaBase:0,lineSmooth:!0,showGridBackground:!1,low:void 0,high:void 0,chartPadding:{top:15,right:15,bottom:5,left:10},fullWidth:!1,reverseData:!1,classNames:{chart:"ct-chart-line",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",line:"ct-line",point:"ct-point",area:"ct-area",grid:"ct-grid",gridGroup:"ct-grids",gridBackground:"ct-grid-background",vertical:"ct-vertical",horizontal:"ct-horizontal",start:"ct-start",end:"ct-end"}};c.Line=c.Base.extend({constructor:e,createChart:d})}(window,document,a),function(a,b,c){"use strict";function d(a){var b,d;a.distributeSeries?(b=c.normalizeData(this.data,a.reverseData,a.horizontalBars?"x":"y"),b.normalized.series=b.normalized.series.map(function(a){return[a]})):b=c.normalizeData(this.data,a.reverseData,a.horizontalBars?"x":"y"),this.svg=c.createSvg(this.container,a.width,a.height,a.classNames.chart+(a.horizontalBars?" "+a.classNames.horizontalBars:""));var e=this.svg.elem("g").addClass(a.classNames.gridGroup),g=this.svg.elem("g"),h=this.svg.elem("g").addClass(a.classNames.labelGroup);if(a.stackBars&&0!==b.normalized.series.length){var i=c.serialMap(b.normalized.series,function(){return Array.prototype.slice.call(arguments).map(function(a){
return a}).reduce(function(a,b){return{x:a.x+(b&&b.x)||0,y:a.y+(b&&b.y)||0}},{x:0,y:0})});d=c.getHighLow([i],a,a.horizontalBars?"x":"y")}else d=c.getHighLow(b.normalized.series,a,a.horizontalBars?"x":"y");d.high=+a.high||(0===a.high?0:d.high),d.low=+a.low||(0===a.low?0:d.low);var j,k,l,m,n,o=c.createChartRect(this.svg,a,f.padding);k=a.distributeSeries&&a.stackBars?b.normalized.labels.slice(0,1):b.normalized.labels,a.horizontalBars?(j=m=void 0===a.axisX.type?new c.AutoScaleAxis(c.Axis.units.x,b.normalized.series,o,c.extend({},a.axisX,{highLow:d,referenceValue:0})):a.axisX.type.call(c,c.Axis.units.x,b.normalized.series,o,c.extend({},a.axisX,{highLow:d,referenceValue:0})),l=n=void 0===a.axisY.type?new c.StepAxis(c.Axis.units.y,b.normalized.series,o,{ticks:k}):a.axisY.type.call(c,c.Axis.units.y,b.normalized.series,o,a.axisY)):(l=m=void 0===a.axisX.type?new c.StepAxis(c.Axis.units.x,b.normalized.series,o,{ticks:k}):a.axisX.type.call(c,c.Axis.units.x,b.normalized.series,o,a.axisX),j=n=void 0===a.axisY.type?new c.AutoScaleAxis(c.Axis.units.y,b.normalized.series,o,c.extend({},a.axisY,{highLow:d,referenceValue:0})):a.axisY.type.call(c,c.Axis.units.y,b.normalized.series,o,c.extend({},a.axisY,{highLow:d,referenceValue:0})));var p=a.horizontalBars?o.x1+j.projectValue(0):o.y1-j.projectValue(0),q=[];l.createGridAndLabels(e,h,this.supportsForeignObject,a,this.eventEmitter),j.createGridAndLabels(e,h,this.supportsForeignObject,a,this.eventEmitter),a.showGridBackground&&c.createGridBackground(e,o,a.classNames.gridBackground,this.eventEmitter),b.raw.series.forEach(function(d,e){var f,h,i=e-(b.raw.series.length-1)/2;f=a.distributeSeries&&!a.stackBars?l.axisLength/b.normalized.series.length/2:a.distributeSeries&&a.stackBars?l.axisLength/2:l.axisLength/b.normalized.series[e].length/2,h=g.elem("g"),h.attr({"ct:series-name":d.name,"ct:meta":c.serialize(d.meta)}),h.addClass([a.classNames.series,d.className||a.classNames.series+"-"+c.alphaNumerate(e)].join(" ")),b.normalized.series[e].forEach(function(g,k){var r,s,t,u;if(u=a.distributeSeries&&!a.stackBars?e:a.distributeSeries&&a.stackBars?0:k,r=a.horizontalBars?{x:o.x1+j.projectValue(g&&g.x?g.x:0,k,b.normalized.series[e]),y:o.y1-l.projectValue(g&&g.y?g.y:0,u,b.normalized.series[e])}:{x:o.x1+l.projectValue(g&&g.x?g.x:0,u,b.normalized.series[e]),y:o.y1-j.projectValue(g&&g.y?g.y:0,k,b.normalized.series[e])},l instanceof c.StepAxis&&(l.options.stretch||(r[l.units.pos]+=f*(a.horizontalBars?-1:1)),r[l.units.pos]+=a.stackBars||a.distributeSeries?0:i*a.seriesBarDistance*(a.horizontalBars?-1:1)),t=q[k]||p,q[k]=t-(p-r[l.counterUnits.pos]),void 0!==g){var v={};v[l.units.pos+"1"]=r[l.units.pos],v[l.units.pos+"2"]=r[l.units.pos],!a.stackBars||"accumulate"!==a.stackMode&&a.stackMode?(v[l.counterUnits.pos+"1"]=p,v[l.counterUnits.pos+"2"]=r[l.counterUnits.pos]):(v[l.counterUnits.pos+"1"]=t,v[l.counterUnits.pos+"2"]=q[k]),v.x1=Math.min(Math.max(v.x1,o.x1),o.x2),v.x2=Math.min(Math.max(v.x2,o.x1),o.x2),v.y1=Math.min(Math.max(v.y1,o.y2),o.y1),v.y2=Math.min(Math.max(v.y2,o.y2),o.y1);var w=c.getMetaData(d,k);s=h.elem("line",v,a.classNames.bar).attr({"ct:value":[g.x,g.y].filter(c.isNumeric).join(","),"ct:meta":c.serialize(w)}),this.eventEmitter.emit("draw",c.extend({type:"bar",value:g,index:k,meta:w,series:d,seriesIndex:e,axisX:m,axisY:n,chartRect:o,group:h,element:s},v))}}.bind(this))}.bind(this)),this.eventEmitter.emit("created",{bounds:j.bounds,chartRect:o,axisX:m,axisY:n,svg:this.svg,options:a})}function e(a,b,d,e){c.Bar["super"].constructor.call(this,a,b,f,c.extend({},f,d),e)}var f={axisX:{offset:30,position:"end",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c.noop,scaleMinSpace:30,onlyInteger:!1},axisY:{offset:40,position:"start",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c.noop,scaleMinSpace:20,onlyInteger:!1},width:void 0,height:void 0,high:void 0,low:void 0,referenceValue:0,chartPadding:{top:15,right:15,bottom:5,left:10},seriesBarDistance:15,stackBars:!1,stackMode:"accumulate",horizontalBars:!1,distributeSeries:!1,reverseData:!1,showGridBackground:!1,classNames:{chart:"ct-chart-bar",horizontalBars:"ct-horizontal-bars",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",bar:"ct-bar",grid:"ct-grid",gridGroup:"ct-grids",gridBackground:"ct-grid-background",vertical:"ct-vertical",horizontal:"ct-horizontal",start:"ct-start",end:"ct-end"}};c.Bar=c.Base.extend({constructor:e,createChart:d})}(window,document,a),function(a,b,c){"use strict";function d(a,b,c){var d=b.x>a.x;return d&&"explode"===c||!d&&"implode"===c?"start":d&&"implode"===c||!d&&"explode"===c?"end":"middle"}function e(a){var b,e,f,h,i,j=c.normalizeData(this.data),k=[],l=a.startAngle;this.svg=c.createSvg(this.container,a.width,a.height,a.donut?a.classNames.chartDonut:a.classNames.chartPie),e=c.createChartRect(this.svg,a,g.padding),f=Math.min(e.width()/2,e.height()/2),i=a.total||j.normalized.series.reduce(function(a,b){return a+b},0);var m=c.quantity(a.donutWidth);"%"===m.unit&&(m.value*=f/100),f-=a.donut?m.value/2:0,h="outside"===a.labelPosition||a.donut?f:"center"===a.labelPosition?0:f/2,h+=a.labelOffset;var n={x:e.x1+e.width()/2,y:e.y2+e.height()/2},o=1===j.raw.series.filter(function(a){return a.hasOwnProperty("value")?0!==a.value:0!==a}).length;j.raw.series.forEach(function(a,b){k[b]=this.svg.elem("g",null,null)}.bind(this)),a.showLabel&&(b=this.svg.elem("g",null,null)),j.raw.series.forEach(function(e,g){if(0!==j.normalized.series[g]||!a.ignoreEmptyValues){k[g].attr({"ct:series-name":e.name}),k[g].addClass([a.classNames.series,e.className||a.classNames.series+"-"+c.alphaNumerate(g)].join(" "));var p=i>0?l+j.normalized.series[g]/i*360:0,q=Math.max(0,l-(0===g||o?0:.2));p-q>=359.99&&(p=q+359.99);var r=c.polarToCartesian(n.x,n.y,f,q),s=c.polarToCartesian(n.x,n.y,f,p),t=new c.Svg.Path((!a.donut)).move(s.x,s.y).arc(f,f,0,p-l>180,0,r.x,r.y);a.donut||t.line(n.x,n.y);var u=k[g].elem("path",{d:t.stringify()},a.donut?a.classNames.sliceDonut:a.classNames.slicePie);if(u.attr({"ct:value":j.normalized.series[g],"ct:meta":c.serialize(e.meta)}),a.donut&&u.attr({style:"stroke-width: "+m.value+"px"}),this.eventEmitter.emit("draw",{type:"slice",value:j.normalized.series[g],totalDataSum:i,index:g,meta:e.meta,series:e,group:k[g],element:u,path:t.clone(),center:n,radius:f,startAngle:l,endAngle:p}),a.showLabel){var v;v=1===j.raw.series.length?{x:n.x,y:n.y}:c.polarToCartesian(n.x,n.y,h,l+(p-l)/2);var w;w=j.normalized.labels&&!c.isFalseyButZero(j.normalized.labels[g])?j.normalized.labels[g]:j.normalized.series[g];var x=a.labelInterpolationFnc(w,g);if(x||0===x){var y=b.elem("text",{dx:v.x,dy:v.y,"text-anchor":d(n,v,a.labelDirection)},a.classNames.label).text(""+x);this.eventEmitter.emit("draw",{type:"label",index:g,group:b,element:y,text:""+x,x:v.x,y:v.y})}}l=p}}.bind(this)),this.eventEmitter.emit("created",{chartRect:e,svg:this.svg,options:a})}function f(a,b,d,e){c.Pie["super"].constructor.call(this,a,b,g,c.extend({},g,d),e)}var g={width:void 0,height:void 0,chartPadding:5,classNames:{chartPie:"ct-chart-pie",chartDonut:"ct-chart-donut",series:"ct-series",slicePie:"ct-slice-pie",sliceDonut:"ct-slice-donut",label:"ct-label"},startAngle:0,total:void 0,donut:!1,donutWidth:60,showLabel:!0,labelOffset:0,labelPosition:"inside",labelInterpolationFnc:c.noop,labelDirection:"neutral",reverseData:!1,ignoreEmptyValues:!1};c.Pie=c.Base.extend({constructor:f,createChart:e,determineAnchorPosition:d})}(window,document,a),a});
//# sourceMappingURL=chartist.min.js.map

///////////////////////////////////////////////////////////////////////////
// src/js/libs/100-uri.min.js /////////////////////////////////////////////

/*! URI.js v1.19.2 http://medialize.github.io/URI.js/ */
/* build contains: IPv6.js, punycode.js, SecondLevelDomains.js, URI.js, URITemplate.js */
(function(f,n){"object"===typeof module&&module.exports?module.exports=n():"function"===typeof define&&define.amd?define(n):f.IPv6=n(f)})(this,function(f){var n=f&&f.IPv6;return{best:function(h){h=h.toLowerCase().split(":");var k=h.length,b=8;""===h[0]&&""===h[1]&&""===h[2]?(h.shift(),h.shift()):""===h[0]&&""===h[1]?h.shift():""===h[k-1]&&""===h[k-2]&&h.pop();k=h.length;-1!==h[k-1].indexOf(".")&&(b=7);var q;for(q=0;q<k&&""!==h[q];q++);if(q<b)for(h.splice(q,1,"0000");h.length<b;)h.splice(q,0,"0000");
for(q=0;q<b;q++){k=h[q].split("");for(var f=0;3>f;f++)if("0"===k[0]&&1<k.length)k.splice(0,1);else break;h[q]=k.join("")}k=-1;var n=f=0,g=-1,p=!1;for(q=0;q<b;q++)p?"0"===h[q]?n+=1:(p=!1,n>f&&(k=g,f=n)):"0"===h[q]&&(p=!0,g=q,n=1);n>f&&(k=g,f=n);1<f&&h.splice(k,f,"");k=h.length;b="";""===h[0]&&(b=":");for(q=0;q<k;q++){b+=h[q];if(q===k-1)break;b+=":"}""===h[k-1]&&(b+=":");return b},noConflict:function(){f.IPv6===this&&(f.IPv6=n);return this}}});
(function(f){function n(b){throw new RangeError(w[b]);}function h(b,e){for(var g=b.length,h=[];g--;)h[g]=e(b[g]);return h}function k(b,e){var g=b.split("@"),f="";1<g.length&&(f=g[0]+"@",b=g[1]);b=b.replace(C,".");g=b.split(".");g=h(g,e).join(".");return f+g}function b(b){for(var e=[],g=0,h=b.length,f,a;g<h;)f=b.charCodeAt(g++),55296<=f&&56319>=f&&g<h?(a=b.charCodeAt(g++),56320==(a&64512)?e.push(((f&1023)<<10)+(a&1023)+65536):(e.push(f),g--)):e.push(f);return e}function q(b){return h(b,function(b){var e=
"";65535<b&&(b-=65536,e+=t(b>>>10&1023|55296),b=56320|b&1023);return e+=t(b)}).join("")}function z(b,e){return b+22+75*(26>b)-((0!=e)<<5)}function u(b,g,h){var f=0;b=h?e(b/700):b>>1;for(b+=e(b/g);455<b;f+=36)b=e(b/35);return e(f+36*b/(b+38))}function g(b){var g=[],h=b.length,f=0,k=128,a=72,c,d;var l=b.lastIndexOf("-");0>l&&(l=0);for(c=0;c<l;++c)128<=b.charCodeAt(c)&&n("not-basic"),g.push(b.charCodeAt(c));for(l=0<l?l+1:0;l<h;){c=f;var m=1;for(d=36;;d+=36){l>=h&&n("invalid-input");var x=b.charCodeAt(l++);
x=10>x-48?x-22:26>x-65?x-65:26>x-97?x-97:36;(36<=x||x>e((2147483647-f)/m))&&n("overflow");f+=x*m;var p=d<=a?1:d>=a+26?26:d-a;if(x<p)break;x=36-p;m>e(2147483647/x)&&n("overflow");m*=x}m=g.length+1;a=u(f-c,m,0==c);e(f/m)>2147483647-k&&n("overflow");k+=e(f/m);f%=m;g.splice(f++,0,k)}return q(g)}function p(g){var h,f,k,p=[];g=b(g);var a=g.length;var c=128;var d=0;var l=72;for(k=0;k<a;++k){var m=g[k];128>m&&p.push(t(m))}for((h=f=p.length)&&p.push("-");h<a;){var x=2147483647;for(k=0;k<a;++k)m=g[k],m>=c&&
m<x&&(x=m);var q=h+1;x-c>e((2147483647-d)/q)&&n("overflow");d+=(x-c)*q;c=x;for(k=0;k<a;++k)if(m=g[k],m<c&&2147483647<++d&&n("overflow"),m==c){var r=d;for(x=36;;x+=36){m=x<=l?1:x>=l+26?26:x-l;if(r<m)break;var A=r-m;r=36-m;p.push(t(z(m+A%r,0)));r=e(A/r)}p.push(t(z(r,0)));l=u(d,q,h==f);d=0;++h}++d;++c}return p.join("")}var D="object"==typeof exports&&exports&&!exports.nodeType&&exports,A="object"==typeof module&&module&&!module.nodeType&&module,B="object"==typeof global&&global;if(B.global===B||B.window===
B||B.self===B)f=B;var E=/^xn--/,r=/[^\x20-\x7E]/,C=/[\x2E\u3002\uFF0E\uFF61]/g,w={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},e=Math.floor,t=String.fromCharCode,y;var v={version:"1.3.2",ucs2:{decode:b,encode:q},decode:g,encode:p,toASCII:function(b){return k(b,function(b){return r.test(b)?"xn--"+p(b):b})},toUnicode:function(b){return k(b,function(b){return E.test(b)?g(b.slice(4).toLowerCase()):
b})}};if("function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return v});else if(D&&A)if(module.exports==D)A.exports=v;else for(y in v)v.hasOwnProperty(y)&&(D[y]=v[y]);else f.punycode=v})(this);
(function(f,n){"object"===typeof module&&module.exports?module.exports=n():"function"===typeof define&&define.amd?define(n):f.SecondLevelDomains=n(f)})(this,function(f){var n=f&&f.SecondLevelDomains,h={list:{ac:" com gov mil net org ",ae:" ac co gov mil name net org pro sch ",af:" com edu gov net org ",al:" com edu gov mil net org ",ao:" co ed gv it og pb ",ar:" com edu gob gov int mil net org tur ",at:" ac co gv or ",au:" asn com csiro edu gov id net org ",ba:" co com edu gov mil net org rs unbi unmo unsa untz unze ",
bb:" biz co com edu gov info net org store tv ",bh:" biz cc com edu gov info net org ",bn:" com edu gov net org ",bo:" com edu gob gov int mil net org tv ",br:" adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",bs:" com edu gov net org ",bz:" du et om ov rg ",ca:" ab bc mb nb nf nl ns nt nu on pe qc sk yk ",
ck:" biz co edu gen gov info net org ",cn:" ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",co:" com edu gov mil net nom org ",cr:" ac c co ed fi go or sa ",cy:" ac biz com ekloges gov ltd name net org parliament press pro tm ","do":" art com edu gob gov mil net org sld web ",dz:" art asso com edu gov net org pol ",ec:" com edu fin gov info med mil net org pro ",eg:" com edu eun gov mil name net org sci ",er:" com edu gov ind mil net org rochest w ",
es:" com edu gob nom org ",et:" biz com edu gov info name net org ",fj:" ac biz com info mil name net org pro ",fk:" ac co gov net nom org ",fr:" asso com f gouv nom prd presse tm ",gg:" co net org ",gh:" com edu gov mil org ",gn:" ac com gov net org ",gr:" com edu gov mil net org ",gt:" com edu gob ind mil net org ",gu:" com edu gov net org ",hk:" com edu gov idv net org ",hu:" 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",
id:" ac co go mil net or sch web ",il:" ac co gov idf k12 muni net org ","in":" ac co edu ernet firm gen gov i ind mil net nic org res ",iq:" com edu gov i mil net org ",ir:" ac co dnssec gov i id net org sch ",it:" edu gov ",je:" co net org ",jo:" com edu gov mil name net org sch ",jp:" ac ad co ed go gr lg ne or ",ke:" ac co go info me mobi ne or sc ",kh:" com edu gov mil net org per ",ki:" biz com de edu gov info mob net org tel ",km:" asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",
kn:" edu gov net org ",kr:" ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",kw:" com edu gov net org ",ky:" com edu gov net org ",kz:" com edu gov mil net org ",lb:" com edu gov net org ",lk:" assn com edu gov grp hotel int ltd net ngo org sch soc web ",lr:" com edu gov net org ",lv:" asn com conf edu gov id mil net org ",ly:" com edu gov id med net org plc sch ",ma:" ac co gov m net org press ",
mc:" asso tm ",me:" ac co edu gov its net org priv ",mg:" com edu gov mil nom org prd tm ",mk:" com edu gov inf name net org pro ",ml:" com edu gov net org presse ",mn:" edu gov org ",mo:" com edu gov net org ",mt:" com edu gov net org ",mv:" aero biz com coop edu gov info int mil museum name net org pro ",mw:" ac co com coop edu gov int museum net org ",mx:" com edu gob net org ",my:" com edu gov mil name net org sch ",nf:" arts com firm info net other per rec store web ",ng:" biz com edu gov mil mobi name net org sch ",
ni:" ac co com edu gob mil net nom org ",np:" com edu gov mil net org ",nr:" biz com edu gov info net org ",om:" ac biz co com edu gov med mil museum net org pro sch ",pe:" com edu gob mil net nom org sld ",ph:" com edu gov i mil net ngo org ",pk:" biz com edu fam gob gok gon gop gos gov net org web ",pl:" art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",pr:" ac biz com edu est gov info isla name net org pro prof ",
ps:" com edu gov net org plo sec ",pw:" belau co ed go ne or ",ro:" arts com firm info nom nt org rec store tm www ",rs:" ac co edu gov in org ",sb:" com edu gov net org ",sc:" com edu gov net org ",sh:" co com edu gov net nom org ",sl:" com edu gov net org ",st:" co com consulado edu embaixada gov mil net org principe saotome store ",sv:" com edu gob org red ",sz:" ac co org ",tr:" av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",tt:" aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",
tw:" club com ebiz edu game gov idv mil net org ",mu:" ac co com gov net or org ",mz:" ac co edu gov org ",na:" co com ",nz:" ac co cri geek gen govt health iwi maori mil net org parliament school ",pa:" abo ac com edu gob ing med net nom org sld ",pt:" com edu gov int net nome org publ ",py:" com edu gov mil net org ",qa:" com edu gov mil net org ",re:" asso com nom ",ru:" ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",
rw:" ac co com edu gouv gov int mil net ",sa:" com edu gov med net org pub sch ",sd:" com edu gov info med net org tv ",se:" a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",sg:" com edu gov idn net org per ",sn:" art com edu gouv org perso univ ",sy:" com edu gov mil net news org ",th:" ac co go in mi net or ",tj:" ac biz co com edu go gov info int mil name net nic org test web ",tn:" agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",
tz:" ac co go ne or ",ua:" biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",ug:" ac co go ne or org sc ",uk:" ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",
us:" dni fed isa kids nsn ",uy:" com edu gub mil net org ",ve:" co com edu gob info mil net org web ",vi:" co com k12 net org ",vn:" ac biz com edu gov health info int name net org pro ",ye:" co com gov ltd me net org plc ",yu:" ac co edu gov org ",za:" ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",zm:" ac co com edu gov net org sch ",com:"ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ",net:"gb jp se uk ",
org:"ae",de:"com "},has:function(f){var b=f.lastIndexOf(".");if(0>=b||b>=f.length-1)return!1;var k=f.lastIndexOf(".",b-1);if(0>=k||k>=b-1)return!1;var n=h.list[f.slice(b+1)];return n?0<=n.indexOf(" "+f.slice(k+1,b)+" "):!1},is:function(f){var b=f.lastIndexOf(".");if(0>=b||b>=f.length-1||0<=f.lastIndexOf(".",b-1))return!1;var k=h.list[f.slice(b+1)];return k?0<=k.indexOf(" "+f.slice(0,b)+" "):!1},get:function(f){var b=f.lastIndexOf(".");if(0>=b||b>=f.length-1)return null;var k=f.lastIndexOf(".",b-1);
if(0>=k||k>=b-1)return null;var n=h.list[f.slice(b+1)];return!n||0>n.indexOf(" "+f.slice(k+1,b)+" ")?null:f.slice(k+1)},noConflict:function(){f.SecondLevelDomains===this&&(f.SecondLevelDomains=n);return this}};return h});
(function(f,n){"object"===typeof module&&module.exports?module.exports=n(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],n):f.URI=n(f.punycode,f.IPv6,f.SecondLevelDomains,f)})(this,function(f,n,h,k){function b(a,c){var d=1<=arguments.length,l=2<=arguments.length;if(!(this instanceof b))return d?l?new b(a,c):new b(a):new b;if(void 0===a){if(d)throw new TypeError("undefined is not a valid argument for URI");
a="undefined"!==typeof location?location.href+"":""}if(null===a&&d)throw new TypeError("null is not a valid argument for URI");this.href(a);return void 0!==c?this.absoluteTo(c):this}function q(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function z(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function u(a){return"Array"===z(a)}function g(a,c){var d={},b;if("RegExp"===z(c))d=null;else if(u(c)){var m=0;for(b=c.length;m<b;m++)d[c[m]]=!0}else d[c]=
!0;m=0;for(b=a.length;m<b;m++)if(d&&void 0!==d[a[m]]||!d&&c.test(a[m]))a.splice(m,1),b--,m--;return a}function p(a,c){var d;if(u(c)){var b=0;for(d=c.length;b<d;b++)if(!p(a,c[b]))return!1;return!0}var m=z(c);b=0;for(d=a.length;b<d;b++)if("RegExp"===m){if("string"===typeof a[b]&&a[b].match(c))return!0}else if(a[b]===c)return!0;return!1}function D(a,c){if(!u(a)||!u(c)||a.length!==c.length)return!1;a.sort();c.sort();for(var d=0,b=a.length;d<b;d++)if(a[d]!==c[d])return!1;return!0}function A(a){return a.replace(/^\/+|\/+$/g,
"")}function B(a){return escape(a)}function E(a){return encodeURIComponent(a).replace(/[!'()*]/g,B).replace(/\*/g,"%2A")}function r(a){return function(c,d){if(void 0===c)return this._parts[a]||"";this._parts[a]=c||null;this.build(!d);return this}}function C(a,c){return function(d,b){if(void 0===d)return this._parts[a]||"";null!==d&&(d+="",d.charAt(0)===c&&(d=d.substring(1)));this._parts[a]=d;this.build(!b);return this}}var w=k&&k.URI;b.version="1.19.2";var e=b.prototype,t=Object.prototype.hasOwnProperty;
b._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,preventInvalidHostname:b.preventInvalidHostname,duplicateQueryParameters:b.duplicateQueryParameters,escapeQuerySpace:b.escapeQuerySpace}};b.preventInvalidHostname=!1;b.duplicateQueryParameters=!1;b.escapeQuerySpace=!0;b.protocol_expression=/^[a-z][a-z0-9.+-]*$/i;b.idn_expression=/[^a-z0-9\._-]/i;b.punycode_expression=/(xn--)/i;b.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
b.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
b.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;b.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/,parens:/(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g};b.defaultPorts={http:"80",https:"443",ftp:"21",
gopher:"70",ws:"80",wss:"443"};b.hostProtocols=["http","https"];b.invalid_hostname_characters=/[^a-zA-Z0-9\.\-:_]/;b.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"};b.getDomAttribute=function(a){if(a&&a.nodeName){var c=a.nodeName.toLowerCase();if("input"!==c||"image"===a.type)return b.domAttributes[c]}};b.encode=E;b.decode=decodeURIComponent;b.iso8859=
function(){b.encode=escape;b.decode=unescape};b.unicode=function(){b.encode=E;b.decode=decodeURIComponent};b.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@",
"%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}};b.encodeQuery=function(a,c){var d=b.encode(a+"");void 0===c&&(c=b.escapeQuerySpace);return c?d.replace(/%20/g,"+"):d};b.decodeQuery=
function(a,c){a+="";void 0===c&&(c=b.escapeQuerySpace);try{return b.decode(c?a.replace(/\+/g,"%20"):a)}catch(d){return a}};var y={encode:"encode",decode:"decode"},v,F=function(a,c){return function(d){try{return b[c](d+"").replace(b.characters[a][c].expression,function(d){return b.characters[a][c].map[d]})}catch(l){return d}}};for(v in y)b[v+"PathSegment"]=F("pathname",y[v]),b[v+"UrnPathSegment"]=F("urnpath",y[v]);y=function(a,c,d){return function(l){var m=d?function(a){return b[c](b[d](a))}:b[c];
l=(l+"").split(a);for(var e=0,g=l.length;e<g;e++)l[e]=m(l[e]);return l.join(a)}};b.decodePath=y("/","decodePathSegment");b.decodeUrnPath=y(":","decodeUrnPathSegment");b.recodePath=y("/","encodePathSegment","decode");b.recodeUrnPath=y(":","encodeUrnPathSegment","decode");b.encodeReserved=F("reserved","encode");b.parse=function(a,c){c||(c={preventInvalidHostname:b.preventInvalidHostname});var d=a.indexOf("#");-1<d&&(c.fragment=a.substring(d+1)||null,a=a.substring(0,d));d=a.indexOf("?");-1<d&&(c.query=
a.substring(d+1)||null,a=a.substring(0,d));"//"===a.substring(0,2)?(c.protocol=null,a=a.substring(2),a=b.parseAuthority(a,c)):(d=a.indexOf(":"),-1<d&&(c.protocol=a.substring(0,d)||null,c.protocol&&!c.protocol.match(b.protocol_expression)?c.protocol=void 0:"//"===a.substring(d+1,d+3)?(a=a.substring(d+3),a=b.parseAuthority(a,c)):(a=a.substring(d+1),c.urn=!0)));c.path=a;return c};b.parseHost=function(a,c){a||(a="");a=a.replace(/\\/g,"/");var d=a.indexOf("/");-1===d&&(d=a.length);if("["===a.charAt(0)){var l=
a.indexOf("]");c.hostname=a.substring(1,l)||null;c.port=a.substring(l+2,d)||null;"/"===c.port&&(c.port=null)}else{var m=a.indexOf(":");l=a.indexOf("/");m=a.indexOf(":",m+1);-1!==m&&(-1===l||m<l)?(c.hostname=a.substring(0,d)||null,c.port=null):(l=a.substring(0,d).split(":"),c.hostname=l[0]||null,c.port=l[1]||null)}c.hostname&&"/"!==a.substring(d).charAt(0)&&(d++,a="/"+a);c.preventInvalidHostname&&b.ensureValidHostname(c.hostname,c.protocol);c.port&&b.ensureValidPort(c.port);return a.substring(d)||
"/"};b.parseAuthority=function(a,c){a=b.parseUserinfo(a,c);return b.parseHost(a,c)};b.parseUserinfo=function(a,c){var d=a.indexOf("/"),l=a.lastIndexOf("@",-1<d?d:a.length-1);-1<l&&(-1===d||l<d)?(d=a.substring(0,l).split(":"),c.username=d[0]?b.decode(d[0]):null,d.shift(),c.password=d[0]?b.decode(d.join(":")):null,a=a.substring(l+1)):(c.username=null,c.password=null);return a};b.parseQuery=function(a,c){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var d={},l=a.split("&"),
m=l.length,e,g,f=0;f<m;f++)if(e=l[f].split("="),g=b.decodeQuery(e.shift(),c),e=e.length?b.decodeQuery(e.join("="),c):null,t.call(d,g)){if("string"===typeof d[g]||null===d[g])d[g]=[d[g]];d[g].push(e)}else d[g]=e;return d};b.build=function(a){var c="",d=!1;a.protocol&&(c+=a.protocol+":");a.urn||!c&&!a.hostname||(c+="//",d=!0);c+=b.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&d&&(c+="/"),c+=a.path);"string"===typeof a.query&&a.query&&(c+="?"+a.query);"string"===typeof a.fragment&&
a.fragment&&(c+="#"+a.fragment);return c};b.buildHost=function(a){var c="";if(a.hostname)c=b.ip6_expression.test(a.hostname)?c+("["+a.hostname+"]"):c+a.hostname;else return"";a.port&&(c+=":"+a.port);return c};b.buildAuthority=function(a){return b.buildUserinfo(a)+b.buildHost(a)};b.buildUserinfo=function(a){var c="";a.username&&(c+=b.encode(a.username));a.password&&(c+=":"+b.encode(a.password));c&&(c+="@");return c};b.buildQuery=function(a,c,d){var l="",m,e;for(m in a)if(t.call(a,m))if(u(a[m])){var g=
{};var f=0;for(e=a[m].length;f<e;f++)void 0!==a[m][f]&&void 0===g[a[m][f]+""]&&(l+="&"+b.buildQueryParameter(m,a[m][f],d),!0!==c&&(g[a[m][f]+""]=!0))}else void 0!==a[m]&&(l+="&"+b.buildQueryParameter(m,a[m],d));return l.substring(1)};b.buildQueryParameter=function(a,c,d){return b.encodeQuery(a,d)+(null!==c?"="+b.encodeQuery(c,d):"")};b.addQuery=function(a,c,d){if("object"===typeof c)for(var l in c)t.call(c,l)&&b.addQuery(a,l,c[l]);else if("string"===typeof c)void 0===a[c]?a[c]=d:("string"===typeof a[c]&&
(a[c]=[a[c]]),u(d)||(d=[d]),a[c]=(a[c]||[]).concat(d));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};b.setQuery=function(a,c,d){if("object"===typeof c)for(var l in c)t.call(c,l)&&b.setQuery(a,l,c[l]);else if("string"===typeof c)a[c]=void 0===d?null:d;else throw new TypeError("URI.setQuery() accepts an object, string as the name parameter");};b.removeQuery=function(a,c,d){var l;if(u(c))for(d=0,l=c.length;d<l;d++)a[c[d]]=void 0;else if("RegExp"===z(c))for(l in a)c.test(l)&&
(a[l]=void 0);else if("object"===typeof c)for(l in c)t.call(c,l)&&b.removeQuery(a,l,c[l]);else if("string"===typeof c)void 0!==d?"RegExp"===z(d)?!u(a[c])&&d.test(a[c])?a[c]=void 0:a[c]=g(a[c],d):a[c]!==String(d)||u(d)&&1!==d.length?u(a[c])&&(a[c]=g(a[c],d)):a[c]=void 0:a[c]=void 0;else throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");};b.hasQuery=function(a,c,d,l){switch(z(c)){case "String":break;case "RegExp":for(var m in a)if(t.call(a,m)&&c.test(m)&&
(void 0===d||b.hasQuery(a,m,d)))return!0;return!1;case "Object":for(var e in c)if(t.call(c,e)&&!b.hasQuery(a,e,c[e]))return!1;return!0;default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter");}switch(z(d)){case "Undefined":return c in a;case "Boolean":return a=!(u(a[c])?!a[c].length:!a[c]),d===a;case "Function":return!!d(a[c],c,a);case "Array":return u(a[c])?(l?p:D)(a[c],d):!1;case "RegExp":return u(a[c])?l?p(a[c],d):!1:!(!a[c]||!a[c].match(d));
case "Number":d=String(d);case "String":return u(a[c])?l?p(a[c],d):!1:a[c]===d;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");}};b.joinPaths=function(){for(var a=[],c=[],d=0,l=0;l<arguments.length;l++){var m=new b(arguments[l]);a.push(m);m=m.segment();for(var e=0;e<m.length;e++)"string"===typeof m[e]&&c.push(m[e]),m[e]&&d++}if(!c.length||!d)return new b("");c=(new b("")).segment(c);""!==a[0].path()&&"/"!==a[0].path().slice(0,
1)||c.path("/"+c.path());return c.normalize()};b.commonPath=function(a,c){var d=Math.min(a.length,c.length),b;for(b=0;b<d;b++)if(a.charAt(b)!==c.charAt(b)){b--;break}if(1>b)return a.charAt(0)===c.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(b)||"/"!==c.charAt(b))b=a.substring(0,b).lastIndexOf("/");return a.substring(0,b+1)};b.withinString=function(a,c,d){d||(d={});var l=d.start||b.findUri.start,e=d.end||b.findUri.end,g=d.trim||b.findUri.trim,f=d.parens||b.findUri.parens,h=/[a-z0-9-]=["']?$/i;
for(l.lastIndex=0;;){var k=l.exec(a);if(!k)break;var p=k.index;if(d.ignoreHtml){var n=a.slice(Math.max(p-3,0),p);if(n&&h.test(n))continue}var r=p+a.slice(p).search(e);n=a.slice(p,r);for(r=-1;;){var q=f.exec(n);if(!q)break;r=Math.max(r,q.index+q[0].length)}n=-1<r?n.slice(0,r)+n.slice(r).replace(g,""):n.replace(g,"");n.length<=k[0].length||d.ignore&&d.ignore.test(n)||(r=p+n.length,k=c(n,p,r,a),void 0===k?l.lastIndex=r:(k=String(k),a=a.slice(0,p)+k+a.slice(r),l.lastIndex=p+k.length))}l.lastIndex=0;return a};
b.ensureValidHostname=function(a,c){var d=!!a,l=!1;c&&(l=p(b.hostProtocols,c));if(l&&!d)throw new TypeError("Hostname cannot be empty, if protocol is "+c);if(a&&a.match(b.invalid_hostname_characters)){if(!f)throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');if(f.toASCII(a).match(b.invalid_hostname_characters))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-:_]');}};b.ensureValidPort=function(a){if(a){var c=
Number(a);if(!(/^[0-9]+$/.test(c)&&0<c&&65536>c))throw new TypeError('Port "'+a+'" is not a valid port');}};b.noConflict=function(a){if(a)return a={URI:this.noConflict()},k.URITemplate&&"function"===typeof k.URITemplate.noConflict&&(a.URITemplate=k.URITemplate.noConflict()),k.IPv6&&"function"===typeof k.IPv6.noConflict&&(a.IPv6=k.IPv6.noConflict()),k.SecondLevelDomains&&"function"===typeof k.SecondLevelDomains.noConflict&&(a.SecondLevelDomains=k.SecondLevelDomains.noConflict()),a;k.URI===this&&(k.URI=
w);return this};e.build=function(a){if(!0===a)this._deferred_build=!0;else if(void 0===a||this._deferred_build)this._string=b.build(this._parts),this._deferred_build=!1;return this};e.clone=function(){return new b(this)};e.valueOf=e.toString=function(){return this.build(!1)._string};e.protocol=r("protocol");e.username=r("username");e.password=r("password");e.hostname=r("hostname");e.port=r("port");e.query=C("query","?");e.fragment=C("fragment","#");e.search=function(a,c){var b=this.query(a,c);return"string"===
typeof b&&b.length?"?"+b:b};e.hash=function(a,c){var b=this.fragment(a,c);return"string"===typeof b&&b.length?"#"+b:b};e.pathname=function(a,c){if(void 0===a||!0===a){var d=this._parts.path||(this._parts.hostname?"/":"");return a?(this._parts.urn?b.decodeUrnPath:b.decodePath)(d):d}this._parts.path=this._parts.urn?a?b.recodeUrnPath(a):"":a?b.recodePath(a):"/";this.build(!c);return this};e.path=e.pathname;e.href=function(a,c){var d;if(void 0===a)return this.toString();this._string="";this._parts=b._parts();
var l=a instanceof b,e="object"===typeof a&&(a.hostname||a.path||a.pathname);a.nodeName&&(e=b.getDomAttribute(a),a=a[e]||"",e=!1);!l&&e&&void 0!==a.pathname&&(a=a.toString());if("string"===typeof a||a instanceof String)this._parts=b.parse(String(a),this._parts);else if(l||e){l=l?a._parts:a;for(d in l)"query"!==d&&t.call(this._parts,d)&&(this._parts[d]=l[d]);l.query&&this.query(l.query,!1)}else throw new TypeError("invalid input");this.build(!c);return this};e.is=function(a){var c=!1,d=!1,e=!1,m=!1,
g=!1,f=!1,k=!1,p=!this._parts.urn;this._parts.hostname&&(p=!1,d=b.ip4_expression.test(this._parts.hostname),e=b.ip6_expression.test(this._parts.hostname),c=d||e,g=(m=!c)&&h&&h.has(this._parts.hostname),f=m&&b.idn_expression.test(this._parts.hostname),k=m&&b.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return p;case "absolute":return!p;case "domain":case "name":return m;case "sld":return g;case "ip":return c;case "ip4":case "ipv4":case "inet4":return d;case "ip6":case "ipv6":case "inet6":return e;
case "idn":return f;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return k}return null};var G=e.protocol,H=e.port,I=e.hostname;e.protocol=function(a,c){if(a&&(a=a.replace(/:(\/\/)?$/,""),!a.match(b.protocol_expression)))throw new TypeError('Protocol "'+a+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return G.call(this,a,c)};e.scheme=e.protocol;e.port=function(a,c){if(this._parts.urn)return void 0===a?"":this;void 0!==a&&(0===a&&
(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),b.ensureValidPort(a)));return H.call(this,a,c)};e.hostname=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var d={preventInvalidHostname:this._parts.preventInvalidHostname};if("/"!==b.parseHost(a,d))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');a=d.hostname;this._parts.preventInvalidHostname&&b.ensureValidHostname(a,this._parts.protocol)}return I.call(this,a,c)};e.origin=function(a,
c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var d=this.protocol();return this.authority()?(d?d+"://":"")+this.authority():""}d=b(a);this.protocol(d.protocol()).authority(d.authority()).build(!c);return this};e.host=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?b.buildHost(this._parts):"";if("/"!==b.parseHost(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');this.build(!c);return this};
e.authority=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?b.buildAuthority(this._parts):"";if("/"!==b.parseAuthority(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');this.build(!c);return this};e.userinfo=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var d=b.buildUserinfo(this._parts);return d?d.substring(0,d.length-1):d}"@"!==a[a.length-1]&&(a+="@");b.parseUserinfo(a,
this._parts);this.build(!c);return this};e.resource=function(a,c){if(void 0===a)return this.path()+this.search()+this.hash();var d=b.parse(a);this._parts.path=d.path;this._parts.query=d.query;this._parts.fragment=d.fragment;this.build(!c);return this};e.subdomain=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,d)||""}d=this._parts.hostname.length-
this.domain().length;d=this._parts.hostname.substring(0,d);d=new RegExp("^"+q(d));a&&"."!==a.charAt(a.length-1)&&(a+=".");if(-1!==a.indexOf(":"))throw new TypeError("Domains cannot contain colons");a&&b.ensureValidHostname(a,this._parts.protocol);this._parts.hostname=this._parts.hostname.replace(d,a);this.build(!c);return this};e.domain=function(a,c){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(c=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=
this._parts.hostname.match(/\./g);if(d&&2>d.length)return this._parts.hostname;d=this._parts.hostname.length-this.tld(c).length-1;d=this._parts.hostname.lastIndexOf(".",d-1)+1;return this._parts.hostname.substring(d)||""}if(!a)throw new TypeError("cannot set domain empty");if(-1!==a.indexOf(":"))throw new TypeError("Domains cannot contain colons");b.ensureValidHostname(a,this._parts.protocol);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(d=new RegExp(q(this.domain())+"$"),this._parts.hostname=
this._parts.hostname.replace(d,a));this.build(!c);return this};e.tld=function(a,c){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(c=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var b=this._parts.hostname.lastIndexOf(".");b=this._parts.hostname.substring(b+1);return!0!==c&&h&&h.list[b.toLowerCase()]?h.get(this._parts.hostname)||b:b}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(h&&h.is(a))b=new RegExp(q(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(b,
a);else throw new TypeError('TLD "'+a+'" contains characters other than [A-Z0-9]');else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");b=new RegExp(q(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(b,a)}else throw new TypeError("cannot set TLD empty");this.build(!c);return this};e.directory=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";
if("/"===this._parts.path)return"/";var d=this._parts.path.length-this.filename().length-1;d=this._parts.path.substring(0,d)||(this._parts.hostname?"/":"");return a?b.decodePath(d):d}d=this._parts.path.length-this.filename().length;d=this._parts.path.substring(0,d);d=new RegExp("^"+q(d));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=b.recodePath(a);this._parts.path=this._parts.path.replace(d,a);this.build(!c);return this};e.filename=function(a,
c){if(this._parts.urn)return void 0===a?"":this;if("string"!==typeof a){if(!this._parts.path||"/"===this._parts.path)return"";var d=this._parts.path.lastIndexOf("/");d=this._parts.path.substring(d+1);return a?b.decodePathSegment(d):d}d=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(d=!0);var e=new RegExp(q(this.filename())+"$");a=b.recodePath(a);this._parts.path=this._parts.path.replace(e,a);d?this.normalizePath(c):this.build(!c);return this};e.suffix=function(a,c){if(this._parts.urn)return void 0===
a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var d=this.filename(),e=d.lastIndexOf(".");if(-1===e)return"";d=d.substring(e+1);d=/^[a-z0-9%]+$/i.test(d)?d:"";return a?b.decodePathSegment(d):d}"."===a.charAt(0)&&(a=a.substring(1));if(d=this.suffix())e=a?new RegExp(q(d)+"$"):new RegExp(q("."+d)+"$");else{if(!a)return this;this._parts.path+="."+b.recodePath(a)}e&&(a=b.recodePath(a),this._parts.path=this._parts.path.replace(e,a));this.build(!c);return this};e.segment=
function(a,c,b){var d=this._parts.urn?":":"/",e=this.path(),g="/"===e.substring(0,1);e=e.split(d);void 0!==a&&"number"!==typeof a&&(b=c,c=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error('Bad segment "'+a+'", must be 0-based integer');g&&e.shift();0>a&&(a=Math.max(e.length+a,0));if(void 0===c)return void 0===a?e:e[a];if(null===a||void 0===e[a])if(u(c)){e=[];a=0;for(var f=c.length;a<f;a++)if(c[a].length||e.length&&e[e.length-1].length)e.length&&!e[e.length-1].length&&e.pop(),e.push(A(c[a]))}else{if(c||
"string"===typeof c)c=A(c),""===e[e.length-1]?e[e.length-1]=c:e.push(c)}else c?e[a]=A(c):e.splice(a,1);g&&e.unshift("");return this.path(e.join(d),b)};e.segmentCoded=function(a,c,d){var e;"number"!==typeof a&&(d=c,c=a,a=void 0);if(void 0===c){a=this.segment(a,c,d);if(u(a)){var g=0;for(e=a.length;g<e;g++)a[g]=b.decode(a[g])}else a=void 0!==a?b.decode(a):void 0;return a}if(u(c))for(g=0,e=c.length;g<e;g++)c[g]=b.encode(c[g]);else c="string"===typeof c||c instanceof String?b.encode(c):c;return this.segment(a,
c,d)};var J=e.query;e.query=function(a,c){if(!0===a)return b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"===typeof a){var d=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace),e=a.call(this,d);this._parts.query=b.buildQuery(e||d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!c);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=b.buildQuery(a,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!c),
this):J.call(this,a,c)};e.setQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"===typeof a||a instanceof String)e[a]=void 0!==c?c:null;else if("object"===typeof a)for(var g in a)t.call(a,g)&&(e[g]=a[g]);else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=b.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(d=c);this.build(!d);return this};e.addQuery=
function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);b.addQuery(e,a,void 0===c?null:c);this._parts.query=b.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(d=c);this.build(!d);return this};e.removeQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);b.removeQuery(e,a,c);this._parts.query=b.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==
typeof a&&(d=c);this.build(!d);return this};e.hasQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return b.hasQuery(e,a,c,d)};e.setSearch=e.setQuery;e.addSearch=e.addQuery;e.removeSearch=e.removeQuery;e.hasSearch=e.hasQuery;e.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};
e.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};e.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&f?this._parts.hostname=f.toASCII(this._parts.hostname):this.is("IPv6")&&n&&(this._parts.hostname=n.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};e.normalizePort=function(a){"string"===typeof this._parts.protocol&&
this._parts.port===b.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};e.normalizePath=function(a){var c=this._parts.path;if(!c)return this;if(this._parts.urn)return this._parts.path=b.recodeUrnPath(this._parts.path),this.build(!a),this;if("/"===this._parts.path)return this;c=b.recodePath(c);var d="";if("/"!==c.charAt(0)){var e=!0;c="/"+c}if("/.."===c.slice(-3)||"/."===c.slice(-2))c+="/";c=c.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");e&&(d=c.substring(1).match(/^(\.\.\/)+/)||
"")&&(d=d[0]);for(;;){var g=c.search(/\/\.\.(\/|$)/);if(-1===g)break;else if(0===g){c=c.substring(3);continue}var f=c.substring(0,g).lastIndexOf("/");-1===f&&(f=g);c=c.substring(0,f)+c.substring(g+3)}e&&this.is("relative")&&(c=d+c.substring(1));this._parts.path=c;this.build(!a);return this};e.normalizePathname=e.normalizePath;e.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(b.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=
null,this.build(!a));return this};e.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};e.normalizeSearch=e.normalizeQuery;e.normalizeHash=e.normalizeFragment;e.iso8859=function(){var a=b.encode,c=b.decode;b.encode=escape;b.decode=decodeURIComponent;try{this.normalize()}finally{b.encode=a,b.decode=c}return this};e.unicode=function(){var a=b.encode,c=b.decode;b.encode=E;b.decode=unescape;try{this.normalize()}finally{b.encode=a,b.decode=c}return this};
e.readable=function(){var a=this.clone();a.username("").password("").normalize();var c="";a._parts.protocol&&(c+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&f?(c+=f.toUnicode(a._parts.hostname),a._parts.port&&(c+=":"+a._parts.port)):c+=a.host());a._parts.hostname&&a._parts.path&&"/"!==a._parts.path.charAt(0)&&(c+="/");c+=a.path(!0);if(a._parts.query){for(var d="",e=0,g=a._parts.query.split("&"),h=g.length;e<h;e++){var k=(g[e]||"").split("=");d+="&"+b.decodeQuery(k[0],this._parts.escapeQuerySpace).replace(/&/g,
"%26");void 0!==k[1]&&(d+="="+b.decodeQuery(k[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}c+="?"+d.substring(1)}return c+=b.decodeQuery(a.hash(),!0)};e.absoluteTo=function(a){var c=this.clone(),d=["protocol","username","password","hostname","port"],e,g;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof b||(a=new b(a));if(c._parts.protocol)return c;c._parts.protocol=a._parts.protocol;if(this._parts.hostname)return c;for(e=0;g=d[e];e++)c._parts[g]=
a._parts[g];c._parts.path?(".."===c._parts.path.substring(-2)&&(c._parts.path+="/"),"/"!==c.path().charAt(0)&&(d=(d=a.directory())?d:0===a.path().indexOf("/")?"/":"",c._parts.path=(d?d+"/":"")+c._parts.path,c.normalizePath())):(c._parts.path=a._parts.path,c._parts.query||(c._parts.query=a._parts.query));c.build();return c};e.relativeTo=function(a){var c=this.clone().normalize();if(c._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a=(new b(a)).normalize();var d=
c._parts;var e=a._parts;var g=c.path();a=a.path();if("/"!==g.charAt(0))throw Error("URI is already relative");if("/"!==a.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");d.protocol===e.protocol&&(d.protocol=null);if(d.username===e.username&&d.password===e.password&&null===d.protocol&&null===d.username&&null===d.password&&d.hostname===e.hostname&&d.port===e.port)d.hostname=null,d.port=null;else return c.build();if(g===a)return d.path="",c.build();g=b.commonPath(g,a);
if(!g)return c.build();e=e.path.substring(g.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");d.path=e+d.path.substring(g.length)||"./";return c.build()};e.equals=function(a){var c=this.clone(),d=new b(a);a={};var e;c.normalize();d.normalize();if(c.toString()===d.toString())return!0;var g=c.query();var f=d.query();c.query("");d.query("");if(c.toString()!==d.toString()||g.length!==f.length)return!1;c=b.parseQuery(g,this._parts.escapeQuerySpace);f=b.parseQuery(f,this._parts.escapeQuerySpace);for(e in c)if(t.call(c,
e)){if(!u(c[e])){if(c[e]!==f[e])return!1}else if(!D(c[e],f[e]))return!1;a[e]=!0}for(e in f)if(t.call(f,e)&&!a[e])return!1;return!0};e.preventInvalidHostname=function(a){this._parts.preventInvalidHostname=!!a;return this};e.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};e.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};return b});
(function(f,n){"object"===typeof module&&module.exports?module.exports=n(require("./URI")):"function"===typeof define&&define.amd?define(["./URI"],n):f.URITemplate=n(f.URI,f)})(this,function(f,n){function h(b){if(h._cache[b])return h._cache[b];if(!(this instanceof h))return new h(b);this.expression=b;h._cache[b]=this;return this}function k(b){this.data=b;this.cache={}}var b=n&&n.URITemplate,q=Object.prototype.hasOwnProperty,z=h.prototype,u={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,
encode:"encode"},"+":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},
"&":{prefix:"&",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"}};h._cache={};h.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;h.VARIABLE_PATTERN=/^([^*:.](?:\.?[^*:.])*)((\*)|:(\d+))?$/;h.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_.]/;h.LITERAL_PATTERN=/[<>{}"`^| \\]/;h.expand=function(b,f,k){var g=u[b.operator],p=g.named?"Named":"Unnamed";b=b.variables;var n=[],r,q;for(q=0;r=b[q];q++){var w=f.get(r.name);if(0===w.type&&k&&k.strict)throw Error('Missing expansion value for variable "'+
r.name+'"');if(w.val.length){if(1<w.type&&r.maxlength)throw Error('Invalid expression: Prefix modifier not applicable to variable "'+r.name+'"');n.push(h["expand"+p](w,g,r.explode,r.explode&&g.separator||",",r.maxlength,r.name))}else w.type&&n.push("")}return n.length?g.prefix+n.join(g.separator):""};h.expandNamed=function(b,h,k,n,q,u){var g="",p=h.encode;h=h.empty_name_separator;var A=!b[p].length,e=2===b.type?"":f[p](u),t;var y=0;for(t=b.val.length;y<t;y++){if(q){var v=f[p](b.val[y][1].substring(0,
q));2===b.type&&(e=f[p](b.val[y][0].substring(0,q)))}else A?(v=f[p](b.val[y][1]),2===b.type?(e=f[p](b.val[y][0]),b[p].push([e,v])):b[p].push([void 0,v])):(v=b[p][y][1],2===b.type&&(e=b[p][y][0]));g&&(g+=n);k?g+=e+(h||v?"=":"")+v:(y||(g+=f[p](u)+(h||v?"=":"")),2===b.type&&(g+=e+","),g+=v)}return g};h.expandUnnamed=function(b,h,k,n,q){var g="",p=h.encode;h=h.empty_name_separator;var A=!b[p].length,w;var e=0;for(w=b.val.length;e<w;e++){if(q)var t=f[p](b.val[e][1].substring(0,q));else A?(t=f[p](b.val[e][1]),
b[p].push([2===b.type?f[p](b.val[e][0]):void 0,t])):t=b[p][e][1];g&&(g+=n);if(2===b.type){var u=q?f[p](b.val[e][0].substring(0,q)):b[p][e][0];g+=u;g=k?g+(h||t?"=":""):g+","}g+=t}return g};h.noConflict=function(){n.URITemplate===h&&(n.URITemplate=b);return h};z.expand=function(b,f){var g="";this.parts&&this.parts.length||this.parse();b instanceof k||(b=new k(b));for(var p=0,n=this.parts.length;p<n;p++)g+="string"===typeof this.parts[p]?this.parts[p]:h.expand(this.parts[p],b,f);return g};z.parse=function(){var b=
this.expression,f=h.EXPRESSION_PATTERN,k=h.VARIABLE_PATTERN,n=h.VARIABLE_NAME_PATTERN,q=h.LITERAL_PATTERN,z=[],r=0,C=function(b){if(b.match(q))throw Error('Invalid Literal "'+b+'"');return b};for(f.lastIndex=0;;){var w=f.exec(b);if(null===w){z.push(C(b.substring(r)));break}else z.push(C(b.substring(r,w.index))),r=w.index+w[0].length;if(!u[w[1]])throw Error('Unknown Operator "'+w[1]+'" in "'+w[0]+'"');if(!w[3])throw Error('Unclosed Expression "'+w[0]+'"');var e=w[2].split(",");for(var t=0,y=e.length;t<
y;t++){var v=e[t].match(k);if(null===v)throw Error('Invalid Variable "'+e[t]+'" in "'+w[0]+'"');if(v[1].match(n))throw Error('Invalid Variable Name "'+v[1]+'" in "'+w[0]+'"');e[t]={name:v[1],explode:!!v[3],maxlength:v[4]&&parseInt(v[4],10)}}if(!e.length)throw Error('Expression Missing Variable(s) "'+w[0]+'"');z.push({expression:w[0],operator:w[1],variables:e})}z.length||z.push(C(b));this.parts=z;return this};k.prototype.get=function(b){var f=this.data,g={type:0,val:[],encode:[],encodeReserved:[]};
if(void 0!==this.cache[b])return this.cache[b];this.cache[b]=g;f="[object Function]"===String(Object.prototype.toString.call(f))?f(b):"[object Function]"===String(Object.prototype.toString.call(f[b]))?f[b](b):f[b];if(void 0!==f&&null!==f)if("[object Array]"===String(Object.prototype.toString.call(f))){var h=0;for(b=f.length;h<b;h++)void 0!==f[h]&&null!==f[h]&&g.val.push([void 0,String(f[h])]);g.val.length&&(g.type=3)}else if("[object Object]"===String(Object.prototype.toString.call(f))){for(h in f)q.call(f,
h)&&void 0!==f[h]&&null!==f[h]&&g.val.push([h,String(f[h])]);g.val.length&&(g.type=2)}else g.type=1,g.val.push([void 0,String(f)]);return g};f.expand=function(b,k){var g=(new h(b)).expand(k);return new f(g)};return h});

///////////////////////////////////////////////////////////////////////////
// src/js/libs/110-chartist-plugin-tooltip.min.js /////////////////////////

/* chartist-plugin-tooltip 0.0.17
 * Copyright © 2016 Markus Padourek
 * Free to use under the WTFPL license.
 * http://www.wtfpl.net/
 */

!function(a,b){"function"==typeof define&&define.amd?define(["chartist"],function(c){return a.returnExportsGlobal=b(c)}):"object"==typeof exports?module.exports=b(require("chartist")):a["Chartist.plugins.tooltips"]=b(Chartist)}(this,function(a){return function(a,b,c){"use strict";function d(a){f(a,"tooltip-show")||(a.className=a.className+" tooltip-show")}function e(a){var b=new RegExp("tooltip-show\\s*","gi");a.className=a.className.replace(b,"").trim()}function f(a,b){return(" "+a.getAttribute("class")+" ").indexOf(" "+b+" ")>-1}function g(a,b){do a=a.nextSibling;while(a&&!f(a,b));return a}function h(a){return a.innerText||a.textContent}var i={currency:void 0,currencyFormatCallback:void 0,tooltipOffset:{x:0,y:-20},anchorToPoint:!1,appendToBody:!1,class:void 0,pointClass:"ct-point"};c.plugins=c.plugins||{},c.plugins.tooltip=function(j){return j=c.extend({},i,j),function(i){function k(a,b,c){n.addEventListener(a,function(a){b&&!f(a.target,b)||c(a)})}function l(b){p=p||o.offsetHeight,q=q||o.offsetWidth;var c,d,e=-q/2+j.tooltipOffset.x,f=-p+j.tooltipOffset.y;if(j.appendToBody)o.style.top=b.pageY+f+"px",o.style.left=b.pageX+e+"px";else{var g=n.getBoundingClientRect(),h=b.pageX-g.left-a.pageXOffset,i=b.pageY-g.top-a.pageYOffset;!0===j.anchorToPoint&&b.target.x2&&b.target.y2&&(c=parseInt(b.target.x2.baseVal.value),d=parseInt(b.target.y2.baseVal.value)),o.style.top=(d||i)+f+"px",o.style.left=(c||h)+e+"px"}}var m=j.pointClass;i instanceof c.Bar?m="ct-bar":i instanceof c.Pie&&(m=i.options.donut?"ct-slice-donut":"ct-slice-pie");var n=i.container,o=n.querySelector(".chartist-tooltip");o||(o=b.createElement("div"),o.className=j.class?"chartist-tooltip "+j.class:"chartist-tooltip",j.appendToBody?b.body.appendChild(o):n.appendChild(o));var p=o.offsetHeight,q=o.offsetWidth;e(o),k("mouseover",m,function(a){var e=a.target,f="",k=i instanceof c.Pie?e:e.parentNode,m=k?e.parentNode.getAttribute("ct:meta")||e.parentNode.getAttribute("ct:series-name"):"",n=e.getAttribute("ct:meta")||m||"",r=!!n,s=e.getAttribute("ct:value");if(j.transformTooltipTextFnc&&"function"==typeof j.transformTooltipTextFnc&&(s=j.transformTooltipTextFnc(s)),j.tooltipFnc&&"function"==typeof j.tooltipFnc)f=j.tooltipFnc(n,s,e.target);else{if(j.metaIsHTML){var t=b.createElement("textarea");t.innerHTML=n,n=t.value}if(n='<span class="chartist-tooltip-meta">'+n+"</span>",r)f+=n+"<br>";else if(i instanceof c.Pie){var u=g(e,"ct-label");u&&(f+=h(u)+"<br>")}s&&(j.currency&&(s=void 0!=j.currencyFormatCallback?j.currencyFormatCallback(s,j):j.currency+s.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,"$1,")),s='<span class="chartist-tooltip-value">'+s+"</span>",f+=s)}f&&(o.innerHTML=f,l(a),d(o),p=o.offsetHeight,q=o.offsetWidth)}),k("mouseout",m,function(){e(o)}),k("mousemove",null,function(a){!1===j.anchorToPoint&&l(a)})}}}(window,document,a),a.plugins.tooltips});
//# sourceMappingURL=chartist-plugin-tooltip.min.js.map

///////////////////////////////////////////////////////////////////////////
// src/js/libs/110-uri-jquery.min.js //////////////////////////////////////

/*! URI.js v1.19.2 http://medialize.github.io/URI.js/ */
/* build contains: jquery.URI.js */
(function(d,e){"object"===typeof module&&module.exports?module.exports=e(require("jquery"),require("./URI")):"function"===typeof define&&define.amd?define(["jquery","./URI"],e):e(d.jQuery,d.URI)})(this,function(d,e){function h(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function k(a){var b=a.nodeName.toLowerCase();if("input"!==b||"image"===a.type)return e.domAttributes[b]}function n(a){return{get:function(b){return d(b).uri()[a]()},set:function(b,c){d(b).uri()[a](c);return c}}}function l(a,
b){if(!k(a)||!b)return!1;var c=b.match(p);if(!c||!c[5]&&":"!==c[2]&&!g[c[2]])return!1;var e=d(a).uri();if(c[5])return e.is(c[5]);if(":"===c[2]){var f=c[1].toLowerCase()+":";return g[f]?g[f](e,c[4]):!1}f=c[1].toLowerCase();return m[f]?g[c[2]](e[f](),c[4],f):!1}var m={},g={"=":function(a,b){return a===b},"^=":function(a,b){return!!(a+"").match(new RegExp("^"+h(b),"i"))},"$=":function(a,b){return!!(a+"").match(new RegExp(h(b)+"$","i"))},"*=":function(a,b,c){"directory"===c&&(a+="/");return!!(a+"").match(new RegExp(h(b),
"i"))},"equals:":function(a,b){return a.equals(b)},"is:":function(a,b){return a.is(b)}};d.each("origin authority directory domain filename fragment hash host hostname href password path pathname port protocol query resource scheme search subdomain suffix tld username".split(" "),function(a,b){m[b]=!0;d.attrHooks["uri:"+b]=n(b)});var q=function(a,b){return d(a).uri().href(b).toString()};d.each(["src","href","action","uri","cite"],function(a,b){d.attrHooks[b]={set:q}});d.attrHooks.uri.get=function(a){return d(a).uri()};
d.fn.uri=function(a){var b=this.first(),c=b.get(0),d=k(c);if(!d)throw Error('Element "'+c.nodeName+'" does not have either property: href, src, action, cite');if(void 0!==a){var f=b.data("uri");if(f)return f.href(a);a instanceof e||(a=e(a||""))}else{if(a=b.data("uri"))return a;a=e(b.attr(d)||"")}a._dom_element=c;a._dom_attribute=d;a.normalize();b.data("uri",a);return a};e.prototype.build=function(a){if(this._dom_element)this._string=e.build(this._parts),this._deferred_build=!1,this._dom_element.setAttribute(this._dom_attribute,
this._string),this._dom_element[this._dom_attribute]=this._string;else if(!0===a)this._deferred_build=!0;else if(void 0===a||this._deferred_build)this._string=e.build(this._parts),this._deferred_build=!1;return this};var p=/^([a-zA-Z]+)\s*([\^\$*]?=|:)\s*(['"]?)(.+)\3|^\s*([a-zA-Z0-9]+)\s*$/;var r=d.expr.createPseudo?d.expr.createPseudo(function(a){return function(b){return l(b,a)}}):function(a,b,c){return l(a,c[3])};d.expr[":"].uri=r;return d});

///////////////////////////////////////////////////////////////////////////
// src/js/libs/200-nui.js /////////////////////////////////////////////////

/*// nether-onescript //
@date 2017-11-06 18:41:48
@files [
    "src\/nui-main.js",
    "src\/nui-traits.js",
    "src\/nui-util.js",
    "src\/plugins\/nui-button.js",
    "src\/plugins\/nui-dialog.js",
    "src\/plugins\/nui-image.js",
    "src\/plugins\/nui-overlay.js"
]
//*/

///////////////////////////////////////////////////////////////////////////
// src/nui-main.js ////////////////////////////////////////////////////////

/*// NUI - Nether UI //////////////////////////////////////////////////////////
The framework made by someone who hates Javascript for people who hate
Javascript. This here is the main file. Currently it does not do much except
pop open the placeholder object for the other programs to screw with. I'm sure
it will look more useful in the future.
/////////////////////////////////////////////////////////////////////////////*/

var NUI = {

	GetVersion:
	function() { return '1.0.1'; },

	Move: {
	/*//
	this subobject will hold the API for allowing for and moving any widgets
	which wish to be moved around the screen by dragging them around.
	//*/

		Queue: [],
		/*//
		@type array
		a list of all the objects that which to be moved.
		//*/

		LastX: 0, LastY: 0,
		/*//
		@type int
		the last known position of the mouse prior to the current move.
		//*/

		On:
		function(e){
		/*//
		@argv Event EventObject
		handle moving any widgets which have requested to be moved. this
		queue system will allow us to select multiple things to move at
		once if we so choose to do so later, maybe like for some icon list
		or whatever.
		//*/

			var DeltaX = this.LastX - e.clientX;
			var DeltaY = this.LastY - e.clientY;

			if(this.Queue.length)
			jQuery.each(this.Queue,function(key,object){
				object.offset(function(idx,pos){
					object.attr('nui-moved','true');
					return {
						left: (pos.left - DeltaX),
						top: (pos.top - DeltaY)
					};
				});
			});

			this.LastX = e.clientX;
			this.LastY = e.clientY;
			return;
		},

		Register:
		function(object){
		/*//
		@argv jQuery Object
		add something to the list of things that wants to be moved around
		so that it can be processed later.
		//*/

			var found = false;
			jQuery.each(this.Queue,function(key,value){
				if(value === object) found = true;
			});

			if(!found) {
				jQuery('body').addClass('NUI-NoSelect');
				this.Queue.push(object);
			}

			return;
		},

		Unregister:
		function(object){
		/*//
		@argv jQuery Object
		remove something from the list of things that wants to be moved
		around so that it stops moving around.
		//*/

			var found = false;
			var that = this;
			jQuery.each(this.Queue,function(key,value){
				if(value === object) {
					that.Queue.splice(key,1);
				}
			});

			if(!that.Queue.length)
			jQuery('body').removeClass('NUI-NoSelect');

			return;
		}
	}

};

jQuery(document).ready(function(){

	jQuery(this)
	.on('mousemove',function(e){ NUI.Move.On(e); });

});

///////////////////////////////////////////////////////////////////////////
// src/nui-traits.js //////////////////////////////////////////////////////

NUI.Traits = {

	GetFromStruct:
	function(What) {
	/*//
	@argv string StructPropertyName default "Root"
	@return jQuery | false
	fetch the requested thing from the struct property. if what was
	requested was not found false will be returned. if nothing was
	specified then the root of the element will be returned.
	//*/

		if(What && this.Struct.hasOwnProperty(What)) return this.Struct[What];
		else if(What) return false;
		else return this.Struct.Root;
	},

	DestroyFromStruct:
	function(What) {
	/*//
	@argv string StructPropertyName default "Root"
	@return self
	hide and remove this widget from the DOM. it'll be useless after this.
	//*/

		var Element = this.Get(What);

		// kill it with fire via jquery.
		if(Element)
		Element.hide().remove();

		// allow the element to do things it needs on show.
		if(typeof this.OnDestroy === 'function')
		this.OnDestroy();

		// allow any custom show events.
		if(typeof this.GetProperty === "function")
		if(typeof this.GetProperty('OnDestroy') === "function")
		this.GetProperty('OnDestroy')();

		return this;
	},

	HideFromStruct:
	function(What) {
	/*//
	@argv string StructPropertyName default "Root"
	@return self
	hide this widget.
	//*/

		var Element = this.Get(What);

		// make it invisible via jquery.
		if(Element)
		Element.hide();

		// allow the element to do things it needs on show.
		if(typeof this.OnHide === 'function')
		this.OnHide();

		// allow any custom show events.
		if(typeof this.GetProperty === "function")
		if(typeof this.GetProperty('OnHide') === "function")
		this.GetProperty('OnHide')();

		return this;
	},

	ShowFromStruct:
	function(What) {
	/*//
	@argv string StructPropertyName default "Root"
	@return self
	show this widget.
	//*/

		var Element = this.Get(What);

		// make it visible via jquery.
		if(Element)
		Element.show().removeClass('NUI-Hidden');

		// allow the element to do things it needs on show.
		if(typeof this.OnShow === 'function')
		this.OnShow();

		// allow any custom show events.
		if(typeof this.GetProperty === "function")
		if(typeof this.GetProperty('OnShow') === "function")
		this.GetProperty('OnShow')();

		return this;
	}

};

///////////////////////////////////////////////////////////////////////////
// src/nui-util.js ////////////////////////////////////////////////////////

/*// NUI Utility //////////////////////////////////////////////////////////////
This contains utility methods that will be used in various parts of the
framework to prevent duplication. But I shouldn't have to explain
software engineering theory to you, i'm sure you got it.
/////////////////////////////////////////////////////////////////////////////*/

NUI.Util = {
	
	MergeProperties:
	function(dom,sub) {
	/*//
	@argv object Override, object Original
	will overwrite the original properties from the original object with
	the properties from the Override object. of course, if they dont exist
	in the Original they will be created too.
	//*/
		
		if(typeof dom !== 'object')
		return;
		
		jQuery.each(dom,function(prop,val){
			sub[prop] = val;
			return;
		});
		
		return;
	},
	
	GetProperty:
	function(request,source) {
	/*//
	@argv string Property, object Source
	request a specific property from an object. this function is designed
	to work with generic private properites from objects.
	//*/
	
		if(source.hasOwnProperty(request)) return source[request];
		else return false;		
	},
	
	GetStructProperty:
	function(request,source) {
	/*//
	@argv string Property, object Source
	request a specific property from an object. this function is designed to
	work with the Struct private properites in the UI classes - if no request
	is specified then it automatically returns the Root property which should
	exist in all NUI elements i didn't stuff up consistancy. this method is
	to make writing the Get methods easy.
	//*/
	
		if(request) return NUI.Util.GetProperty(request,source);
		else return source.Root;
	},
	
	CenterInParent:
	function(child,parent) {
	/*//
	@argv jQuery ChildObject, jQuery ParentObject
	given these two objects, we will attempt to center the child object
	in the parent object. this means that we are dealing with dom stuff
	and that they are CSS'd to allow positioning properly.
	//*/
	
		var cxoff = child.outerWidth(true) / 2 ;
		var cyoff = child.outerHeight(true) / 2;
		var pxcen = 0;
		var pycen = 0;
		var pxoff = 0;
		var pyoff = 0;

		if(!parent) {
			// if we didn't specify, find what the object is packed
			// inside of.
			parent = child.parent();
		}

		if(parent === window || parent[0] === jQuery('body')[0]) {
			// if it turns out its the body or the viewport, lets
			// use the viewport for math instead.
			parent = jQuery(window);

			if(child.css('position') === 'absolute') {
				// if we are using the window, and the item wants
				// to be positioned aboslute, add an offset so that
				// no matter where scrolled, it shows up in the center
				// of the viewport (rather than, the center of the
				// entire length of the body which could be off the
				// viewport completely).
				
				pyoff = jQuery(document).scrollTop();
			}
		}
		
		if(parent !== window) {
			pxcen = parent.width() / 2;
			pycen = parent.height() / 2;
		} else {
			pxcen = jQuery(window).width() / 2;
			pycen = jQuery(window).height() / 2;
		}
		
		child.css({
			'left': ((pxcen - cxoff) + pxoff) + 'px',
			'top': ((pycen - cyoff) + pyoff) + 'px'
		});

		return;
	}
	
};

///////////////////////////////////////////////////////////////////////////
// src/plugins/nui-button.js //////////////////////////////////////////////

/*// NUI.Button ///////////////////////////////////////////////////////////////
This provides a button widget that can do stuff when clicked. Amazing.
/////////////////////////////////////////////////////////////////////////////*/

NUI.Button = function(opt) {

	var Property = {
		Label: 'Button',
		Class: null,
		OnClick: null
	};

	NUI.Util.MergeProperties(opt,Property);

	////////////////////////
	////////////////////////

	this.Struct = {
		Root: (
			jQuery('<button />')
			.addClass('NUI-Widget NUI-Button')
			.text(Property.Label)
		)
	};

	if(Property.OnClick) {
		this.Struct.Root
		.on('click',Property.OnClick);
	}

	if(Property.Class) {
		this.Struct.Root
		.addClass(Property.Class);
	}

	////////////////////////
	////////////////////////

	this.GetProperty = function(Key){
		if(typeof Property[Key] !== "undefined")
		return Property[Key];

		else
		return Property;
	};

	this.Destroy = NUI.Traits.DestroyFromStruct;
	this.Get = NUI.Traits.GetFromStruct;
	this.Hide = NUI.Traits.HideFromStruct;
	this.Show = NUI.Traits.ShowFromStruct;
};

NUI.Button.prototype.valueOf = NUI.Traits.GetFromStruct;

///////////////////////////////////////////////////////////////////////////
// src/plugins/nui-dialog.js //////////////////////////////////////////////

/*// NUI.Dialog ///////////////////////////////////////////////////////////////
This provides a widget which looks and smells like a dialog. It currently is
not movable but that is a planned feature. Right now the most useful thing to
do with this is to shove it into a NUI.Overlay.
/////////////////////////////////////////////////////////////////////////////*/

NUI.Dialog = function(opt) {
	var that = this;

	////////////////////////
	////////////////////////

	var Property = {
		Container: 'body',
		Title: 'NUI Dialog',
		CloseLabel: '&times;',
		Content: 'This is a dialog.',
		Class: null,
		Show: true,
		Fixed: true,
		Moveable: true,
		Position: null,
		OnAccept: null,
		OnCancel: null,
		OnShow: null,
		OnClose: null,
		Buttons: [],
		Height: 'auto',
		Width: 'auto',
		IsBusy: false
	};

	NUI.Util.MergeProperties(opt,Property);

	////////////////////////
	////////////////////////

	this.Struct = {
		Root: (
			jQuery('<div />')
			.addClass('NUI-Widget')
			.addClass('NUI-Dialog')
			.addClass(Property.Show===true?'NUI-Block':'NUI-Hidden')
			.addClass(Property.Fixed===true?'NUI-PositionFixed':'NUI-PositionAbsolute')
			.addClass(Property.Class)
			.css({ 'height':Property.Height,'width':Property.Width })
		),
		TitleBar: (
			jQuery('<header />')
			.append(
				jQuery('<button />')
				.html(Property.CloseLabel)
				.on('mousedown',function(e){ return false; })
				.on('click',function(e){ that.Close(); return false; })
			)
			.append(
				jQuery('<span />')
				.text(Property.Title)
			)
		),
		Content: (
			jQuery('<section />')
			.html(Property.Content.valueOf())
		),
		ButtonBar: (
			jQuery('<footer />')
		)
	};

	////////////////////////
	////////////////////////

	// compile the dialog.
	this.Struct.Root
	.append(this.Struct.TitleBar)
	.append(this.Struct.Content)
	.append(this.Struct.ButtonBar);

	// compile the button bar.
	jQuery.each(Property.Buttons,function(){
		that.Struct.ButtonBar
		.append(this.valueOf());
	});

	// make the dialog moveable.
	if(Property.Moveable) {
		this.Struct.TitleBar
		.addClass('NUI-Moveable')
		.on('mousedown',function(){ NUI.Move.Register(that.Struct.Root); })
		.on('mouseup',function(){ NUI.Move.Unregister(that.Struct.Root); });
	}

	// add dialog to the page.
	if(Property.Container) {
		jQuery(Property.Container)
		.append(this.Struct.Root);
	}

	// position the dialog.
	if(Property.Position) {
		this.Struct.Root
		.css({
			'top': Property.Position[1],
			'left': Property.Position[0]
		});
	} else {
		NUI.Util.CenterInParent(this.Struct.Root);
	}

	////////////////////////
	////////////////////////

	this.OnShow = function() {
		jQuery('body')
		.addClass('NUI-Flag-Dialog-Open');

		return;
	};

	this.OnDestroy = function() {
		if(jQuery('.NUI-Dialog').length === 0)
		jQuery('body')
		.removeClass('NUI-Flag-Dialog-Open');

		return;
	};

	this.Accept = function() {
	/*//
	@return self
	tell the widget that the user has accepted whatever the dialog was about
	and to execute the OnAccept action if any.
	//*/

		if(Property.IsBusy) return;

		if(Property.OnAccept) Property.OnAccept();
		else that.Destroy();

		return that;
	};

	this.Cancel = function() {
	/*//
	@return self
	tell the widget that the user has canceled whatever the dialog was about
	and to execute the OnCancel action if any.
	//*/

		if(Property.IsBusy) return;

		if(Property.OnCancel) Property.OnCancel();
		else that.Destroy();

		return that;
	};

	this.Close = function() {
	/*//
	@return self
	tell the widget that the user has canceled the dialog via the close button.
	//*/

		if(Property.IsBusy) return;

		if(Property.OnClose) Property.OnClose();
		else if(Property.OnCancel) Property.OnCancel();
		else that.Destroy();

		return that;
	};

	this.Struct.Root
	.find('.NUI-Dialog-Accept')
	.click(this.Accept);

	this.Struct.Root
	.find('.NUI-Dialog-Cancel')
	.click(this.Cancel);

	this.Struct.Root
	.find('.NUI-Dialog-Close')
	.click(this.Cancel);

	////////////////////////
	////////////////////////

	this.SetBusy = function(state) {
	/*//
	@argv bool IsThinking
	@return self
	a convenience method. it will hide any buttons in the footer and show any
	images in there. allows you to do something like throw a hidden NUI.Image
	in the buttons array to quickly toggle a "please wait" style display while
	the OnAccept waits on async stuff (or whatever you wish). this does assume
	however that you ONLY add NUI.Button or NUI.Image to the button bar of the
	dialog. if you do not add a hidden NUI.Image, it will appear to have no
	effect other than hiding any buttons in there.
	//*/

		Property.IsBusy = state;

		if(state) {
			this.Struct.ButtonBar
			.find('button').hide();

			this.Struct.ButtonBar
			.find('img').show();
		} else {
			this.Struct.ButtonBar
			.find('img').hide();

			this.Struct.ButtonBar
			.find('button').show();
		}

		return this;
	};

	////////////////
	////////////////

	this.GetProperty = function(Key){
		if(typeof Property[Key] !== "undefined")
		return Property[Key];

		else
		return Property;
	};

	this.Destroy = NUI.Traits.DestroyFromStruct;
	this.Get = NUI.Traits.GetFromStruct;
	this.Show = NUI.Traits.ShowFromStruct;
	this.Hide = NUI.Traits.HideFromStruct;

	if(Property.Show)
	this.Show();
};

NUI.Dialog.prototype.valueOf = NUI.Traits.GetFromStruct;

///////////////////////////////////////////////////////////////////////////
// src/plugins/nui-image.js ///////////////////////////////////////////////

/*// NUI.Image //////////////////////////////////////////////////////////////
It's uh... an image.
/////////////////////////////////////////////////////////////////////////////*/

NUI.Image = function(opt) {

	var Property = {
		Container: null,
		Class: null,
		URL: null,
		Show: true
	};

	NUI.Util.MergeProperties(opt,Property);

	////////////////////////
	////////////////////////

	this.Struct = {
		Root: (
			jQuery('<img />')
			.attr('src',Property.URL)
			.addClass(Property.Show?(''):('NUI-Hidden'))
			.addClass(Property.Class)
		)
	};

	if(Property.Container) {
		jQuery(Property.Container)
		.append(this.Struct.Root);
	}

	////////////////////////
	////////////////////////

	this.GetProperty = function(Key){
		if(typeof Property[Key] !== "undefined")
		return Property[Key];

		else
		return Property;
	};

	this.Destroy = NUI.Traits.DestroyFromStruct;
	this.Get = NUI.Traits.GetFromStruct;
	this.Hide = NUI.Traits.HideFromStruct;
	this.Show = NUI.Traits.ShowFromStruct;
};

NUI.Image.prototype.valueOf = NUI.Traits.GetFromStruct;

///////////////////////////////////////////////////////////////////////////
// src/plugins/nui-overlay.js /////////////////////////////////////////////

/*// NUI.OVerlay //////////////////////////////////////////////////////////////
This provides a widget which covers the entire screen in (with my default css)
a translucent shade of black, blocking access to anything below. You can then
put things inside of it that demand attention.
/////////////////////////////////////////////////////////////////////////////*/

NUI.Overlay = function(Input) {
	var that = this;

	////////////////////////
	////////////////////////

	var Property = {
		Container: 'body',
		Content: null,
		Class: null,
		Show: true,
		HandleResize: true,
		OnClick: null,
		OnClose: null,
		OnShow: null
	};

	NUI.Util.MergeProperties(Input,Property);

	////////////////////////
	////////////////////////

	this.Struct = {
		Root: (
			jQuery('<div />')
			.addClass('NUI-Widget NUI-Hidden')
			.addClass('NUI-Overlay')
			.addClass(Property.Class)
		)
	};

	this.Struct.Root
	.append(Property.Content.valueOf());

	////////////////////////
	////////////////////////

	if(Property.HandleResize) {
		jQuery(window).on('resize',function(){
			var element = that.Struct.Root.find('>:first-child');

			if(!element.attr('nui-moved'))
			NUI.Util.CenterInParent(element);

			return;
		});
	}

	if(Property.Container) {
		jQuery(Property.Container)
		.append(this.Struct.Root);
	}

	////////////////////////
	////////////////////////

	this.Close = function() {
		if(Property.OnClose) Property.OnClose();
		else that.Destroy();

		return that;
	};

	jQuery(this.Struct.Root)
	.find('.NUI-Overlay-Close')
	.on('click',this.Close);

	////////////////////////
	////////////////////////

	this.OnShow = function() {
		jQuery(window).resize();
		return;
	};

	this.OnDestroy = function() {

		if(typeof Property.Content === 'object')
		if(typeof Property.Content.Destroy === 'function')
		Property.Content.Destroy();

		return;
	};

	this.GetProperty = function(Key){
		if(typeof Property[Key] !== "undefined")
		return Property[Key];

		else
		return Property;
	};

	this.Destroy = NUI.Traits.DestroyFromStruct.bind(this);
	this.Get = NUI.Traits.GetFromStruct.bind(this);
	this.Hide = NUI.Traits.HideFromStruct.bind(this);
	this.Show = NUI.Traits.ShowFromStruct.bind(this);

	////////////////////////
	////////////////////////

	if(Property.Show) {
		this.Show();
	}

};

NUI.Overlay.prototype.valueOf = NUI.Traits.GetFromStruct;

///////////////////////////////////////////////////////////////////////////
// src/js/libs/500-jodit.es2018.min.js ////////////////////////////////////

/*!
 jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 Author: Chupurnov <chupurnov@gmail.com> (https://xdsoft.net/)
 Version: v3.3.8
 Url: https://xdsoft.net/jodit/
 License(s): GPL-2.0-or-later OR MIT OR Commercial
*/

((t,e)=>{if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var o in i)("object"==typeof exports?exports:t)[o]=i[o]}})(window,(function(){return(t=>{var e={};function i(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=(t,e,o)=>{i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=(t,e)=>{if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,(e=>t[e]).bind(null,s));return o},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,"a",e),e},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.p="/build/",i(i.s=95)})([(t,e)=>{t.exports.default=["Type something","About Jodit","Jodit Editor","Free Non-commercial Version","GNU General Public License, version 2 or later","Jodit User's Guide","contains detailed help for using","For information about the license, please go to our website:","Buy full version","Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.","Anchor","Open in new tab","Open editor in fullsize","Clear Formatting","Fill color or set the text color","Redo","Undo","Bold","Italic","Insert Unordered List","Insert Ordered List","Align Center","Align Justify","Align Left","Align Right","Insert Horizontal Line","Insert Image","Insert file","Insert youtube/vimeo video","Insert link","Font size","Font family","Insert format block","Normal","Heading 1","Heading 2","Heading 3","Heading 4","Quote","Code","Insert","Insert table","Decrease Indent","Increase Indent","Select Special Character","Insert Special Character","Paint format","Change mode","Margins","top","right","bottom","left","Styles","Classes","Align","Right","Center","Left","--Not Set--","Src","Title","Alternative","Link","Open link in new tab","Image","file","Advanced","Image properties","Cancel","Ok","Your code is similar to HTML. Keep as HTML?","Paste as HTML","Keep","Clean","Insert as Text","Insert only Text","Word Paste Detected","The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?","File Browser","Error on load list","Error on load folders","Are you sure?","Enter Directory name","Create directory","type name","Drop image","Drop file","or click","Alternative text","Browse","Upload","Background","Text","Top","Middle","Bottom","Insert column before","Insert column after","Insert row above","Insert row below","Delete table","Delete row","Delete column","Empty cell","source","bold","italic","brush","link","undo","redo","table","image","eraser","paragraph","fontsize","video","font","about","print","symbol","underline","strikethrough","indent","outdent","fullsize","shrink","copyformat","hr","ul","ol","cut","selectall","Embed code","Open link","Edit link","No follow","Unlink","Eye","pencil","Update"," URL","Edit","Horizontal align","Filter","Sort by changed","Sort by name","Sort by size","Add folder","Reset","Save","Save as ...","Resize","Crop","Width","Height","Keep Aspect Ratio","Yes","No","Remove","Select","Chars: %d","Words: %d","All","Select %s","Select all","Vertical align","Split","Split vertical","Split horizontal","Merge","Add column","Add row","Delete","Border","License: %s","Strike through","Underline","superscript","subscript","Cut selection","Break","Search for","Replace with","Replace","Paste","Choose Content to Paste","You can only edit your own images. Download this image on the host?","The image has been successfully uploaded to the host!","palette","There are no files","rename","Enter new name","preview","download","Paste from clipboard","Your browser doesn't support direct access to the clipboard.","Copy selection","copy","Border radius"]},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"> <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"/> </svg> '},(t,e)=>{t.exports='<svg viewBox="0 0 18.151 18.151"> <g> <g> <path d="M6.237,16.546H3.649V1.604h5.916v5.728c0.474-0.122,0.968-0.194,1.479-0.194 c0.042,0,0.083,0.006,0.125,0.006V0H2.044v18.15h5.934C7.295,17.736,6.704,17.19,6.237,16.546z"/> <path d="M11.169,8.275c-2.723,0-4.938,2.215-4.938,4.938s2.215,4.938,4.938,4.938s4.938-2.215,4.938-4.938 S13.892,8.275,11.169,8.275z M11.169,16.81c-1.983,0-3.598-1.612-3.598-3.598c0-1.983,1.614-3.597,3.598-3.597 s3.597,1.613,3.597,3.597C14.766,15.198,13.153,16.81,11.169,16.81z"/> <polygon points="11.792,11.073 10.502,11.073 10.502,12.578 9.03,12.578 9.03,13.868 10.502,13.868 10.502,15.352 11.792,15.352 11.792,13.868 13.309,13.868 13.309,12.578 11.792,12.578 "/> </g> </g> </svg> '},(t,e)=>{t.exports='<svg viewBox="0 0 432 432"> <g> <g> <polygon points="203.688,96 0,96 0,144 155.688,144 "/> <polygon points="155.719,288 0,288 0,336 203.719,336 "/> <rect x="252" y="96"/> <rect/> <rect x="252" y="288"/> <rect y="384"/> <path d="M97.844,230.125c-3.701-3.703-5.856-8.906-5.856-14.141s2.154-10.438,5.856-14.141l9.844-9.844H0v48h107.719 L97.844,230.125z"/> <polygon points="232,176 232,96 112,216 232,336 232,256 432,256 432,176 "/> </g> </g> </svg> '},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"> <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1411 541l-355 355 355 355 144-144q29-31 70-14 39 17 39 59v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l144-144-355-355-355 355 144 144q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l144 144 355-355-355-355-144 144q-19 19-45 19-12 0-24-5-40-17-40-59v-448q0-26 19-45t45-19h448q42 0 59 40 17 39-14 69l-144 144 355 355 355-355-144-144q-31-30-14-69 17-40 59-40h448q26 0 45 19t19 45v448q0 42-39 59-13 5-25 5-26 0-45-19z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-1024v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h1024v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1596 1385q0 117-79 196t-196 79q-135 0-235-100l-777-776q-113-115-113-271 0-159 110-270t269-111q158 0 273 113l605 606q10 10 10 22 0 16-30.5 46.5t-46.5 30.5q-13 0-23-10l-606-607q-79-77-181-77-106 0-179 75t-73 181q0 105 76 181l776 777q63 63 145 63 64 0 106-42t42-106q0-82-63-145l-581-581q-26-24-60-24-29 0-48 19t-19 48q0 32 25 59l410 410q10 10 10 22 0 16-31 47t-47 31q-12 0-22-10l-410-410q-63-61-63-149 0-82 57-139t139-57q88 0 149 63l581 581q100 98 100 235z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68.5.5t67.5.5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M896 1152q0-36-20-69-1-1-15.5-22.5t-25.5-38-25-44-21-50.5q-4-16-21-16t-21 16q-7 23-21 50.5t-25 44-25.5 38-15.5 22.5q-20 33-20 69 0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm512-128q0 212-150 362t-362 150-362-150-150-362q0-145 81-275 6-9 62.5-90.5t101-151 99.5-178 83-201.5q9-30 34-47t51-17 51.5 17 33.5 47q28 93 83 201.5t99.5 178 101 151 62.5 90.5q81 127 81 275z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 16 16"> <g transform="translate(0,-1036.3622)"> <path d="m 2,1050.3622 12,-12" style="fill:none;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"/> <path d="m 2,1038.3622 12,12" style="fill:none;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"/> </g> </svg> '},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1472 930v318q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-254q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24l-430-430q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M813 1299l614-614q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-467 467-211-211q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l358 358q19 19 45 19t45-19zm851-883v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 16 16"><path d="M16 9v-6h-3v-1c0-0.55-0.45-1-1-1h-11c-0.55 0-1 0.45-1 1v3c0 0.55 0.45 1 1 1h11c0.55 0 1-0.45 1-1v-1h2v4h-9v2h-0.5c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5h-0.5v-1h9zM12 3h-11v-1h11v1z"/></svg> '},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"> <path d="M621 1280h595v-595zm-45-45l595-595h-595v595zm1152 77v192q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-224h-864q-14 0-23-9t-9-23v-864h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224v-224q0-14 9-23t23-9h192q14 0 23 9t9 23v224h851l246-247q10-9 23-9t23 9q9 10 9 23t-9 23l-247 246v851h224q14 0 23 9t9 23z"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <path d="M24.89,6.61H22.31V4.47A2.47,2.47,0,0,0,19.84,2H6.78A2.47,2.47,0,0,0,4.31,4.47V22.92a2.47,2.47,0,0,0,2.47,2.47H9.69V27.2a2.8,2.8,0,0,0,2.8,2.8h12.4a2.8,2.8,0,0,0,2.8-2.8V9.41A2.8,2.8,0,0,0,24.89,6.61ZM6.78,23.52a.61.61,0,0,1-.61-.6V4.47a.61.61,0,0,1,.61-.6H19.84a.61.61,0,0,1,.61.6V6.61h-8a2.8,2.8,0,0,0-2.8,2.8V23.52Zm19,3.68a.94.94,0,0,1-.94.93H12.49a.94.94,0,0,1-.94-.93V9.41a.94.94,0,0,1,.94-.93h12.4a.94.94,0,0,1,.94.93Z"/> <path d="M23.49,13.53h-9.6a.94.94,0,1,0,0,1.87h9.6a.94.94,0,1,0,0-1.87Z"/> <path d="M23.49,17.37h-9.6a.94.94,0,1,0,0,1.87h9.6a.94.94,0,1,0,0-1.87Z"/> <path d="M23.49,21.22h-9.6a.93.93,0,1,0,0,1.86h9.6a.93.93,0,1,0,0-1.86Z"/> </svg> '},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"> <path d="M960 896q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm300 64l507 398q28 20 25 56-5 35-35 51l-128 64q-13 7-29 7-17 0-31-8l-690-387-110 66q-8 4-12 5 14 49 10 97-7 77-56 147.5t-132 123.5q-132 84-277 84-136 0-222-78-90-84-79-207 7-76 56-147t131-124q132-84 278-84 83 0 151 31 9-13 22-22l122-73-122-73q-13-9-22-22-68 31-151 31-146 0-278-84-82-53-131-124t-56-147q-5-59 15.5-113t63.5-93q85-79 222-79 145 0 277 84 83 52 132 123t56 148q4 48-10 97 4 1 12 5l110 66 690-387q14-8 31-8 16 0 29 7l128 64q30 16 35 51 3 36-25 56zm-681-260q46-42 21-108t-106-117q-92-59-192-59-74 0-113 36-46 42-21 108t106 117q92 59 192 59 74 0 113-36zm-85 745q81-51 106-117t-21-108q-39-36-113-36-100 0-192 59-81 51-106 117t21 108q39 36 113 36 100 0 192-59zm178-613l96 58v-11q0-36 33-56l14-8-79-47-26 26q-3 3-10 11t-12 12q-2 2-4 3.5t-3 2.5zm224 224l96 32 736-576-128-64-768 431v113l-160 96 9 8q2 2 7 6 4 4 11 12t11 12l26 26zm704 416l128-64-520-408-177 138q-2 3-13 7z"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/></svg>'},(t,e)=>{t.exports='<svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" xml:space="preserve" > <circle cx="12" cy="12" r="2.2"/> <circle cx="12" cy="5" r="2.2"/> <circle cx="12" cy="19" r="2.2"/> </svg> '},(t,e)=>{t.exports='<svg viewBox="0 0 10 10"> <path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/> </svg> '},(t,e)=>{t.exports='<svg viewBox="0 0 128 128" xml:space="preserve"> <g> <polygon points="112.4560547,23.3203125 112.4560547,75.8154297 31.4853516,75.8154297 31.4853516,61.953125 16.0131836,72.6357422 0.5410156,83.3164063 16.0131836,93.9990234 31.4853516,104.6796875 31.4853516,90.8183594 112.4560547,90.8183594 112.4560547,90.8339844 127.4589844,90.8339844 127.4589844,23.3203125 "/> </g> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M832 1408l336-384h-768l-336 384h768zm1013-1077q15 34 9.5 71.5t-30.5 65.5l-896 1024q-38 44-96 44h-768q-38 0-69.5-20.5t-47.5-54.5q-15-34-9.5-71.5t30.5-65.5l896-1024q38-44 96-44h768q38 0 69.5 20.5t47.5 54.5z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"> <path d="M1152 512v-472q22 14 36 28l408 408q14 14 28 36h-472zm-128 32q0 40 28 68t68 28h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544z"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"> <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"/> </svg> '},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M789 559l-170 450q33 0 136.5 2t160.5 2q19 0 57-2-87-253-184-452zm-725 1105l2-79q23-7 56-12.5t57-10.5 49.5-14.5 44.5-29 31-50.5l237-616 280-724h128q8 14 11 21l205 480q33 78 106 257.5t114 274.5q15 34 58 144.5t72 168.5q20 45 35 57 19 15 88 29.5t84 20.5q6 38 6 57 0 4-.5 13t-.5 13q-63 0-190-8t-191-8q-76 0-215 7t-178 8q0-43 4-78l131-28q1 0 12.5-2.5t15.5-3.5 14.5-4.5 15-6.5 11-8 9-11 2.5-14q0-16-31-96.5t-72-177.5-42-100l-450-2q-26 58-76.5 195.5t-50.5 162.5q0 22 14 37.5t43.5 24.5 48.5 13.5 57 8.5 41 4q1 19 1 58 0 9-2 27-58 0-174.5-10t-174.5-10q-8 0-26.5 4t-21.5 4q-80 14-188 14z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1744 1408q33 0 42 18.5t-11 44.5l-126 162q-20 26-49 26t-49-26l-126-162q-20-26-11-44.5t42-18.5h80v-1024h-80q-33 0-42-18.5t11-44.5l126-162q20-26 49-26t49 26l126 162q20 26 11 44.5t-42 18.5h-80v1024h80zm-1663-1279l54 27q12 5 211 5 44 0 132-2t132-2q36 0 107.5.5t107.5.5h293q6 0 21 .5t20.5 0 16-3 17.5-9 15-17.5l42-1q4 0 14 .5t14 .5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-48t-14.5-73.5-7.5-35.5q-6-8-12-12.5t-15.5-6-13-2.5-18-.5-16.5.5q-17 0-66.5-.5t-74.5-.5-64 2-71 6q-9 81-8 136 0 94 2 388t2 455q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q19-42 19-383 0-101-3-303t-3-303v-117q0-2 .5-15.5t.5-25-1-25.5-3-24-5-14q-11-12-162-12-33 0-93 12t-80 26q-19 13-34 72.5t-31.5 111-42.5 53.5q-42-26-56-44v-383z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 24 24" > <path d="M22,20.6L3.4,2H8V0H0v8h2V3.4L20.6,22H16v2h8v-8h-2V20.6z M16,0v2h4.7l-6.3,6.3l1.4,1.4L22,3.5V8h2V0H16z M8.3,14.3L2,20.6V16H0v8h8v-2H3.5l6.3-6.3L8.3,14.3z"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M576 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"> <path d="M352 832q0 14-9 23l-288 288q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-576q0-13 9.5-22.5t22.5-9.5q14 0 23 9l288 288q9 9 9 23zm1440 480v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1152 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M384 1662l17-85q6-2 81.5-21.5t111.5-37.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 312 312"> <g transform="translate(0.000000,312.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M50 3109 c0 -7 -11 -22 -25 -35 l-25 -23 0 -961 0 -961 32 -29 32 -30 501 -2 500 -3 3 -502 2 -502 31 -30 31 -31 958 0 958 0 23 25 c13 13 30 25 37 25 9 0 12 199 12 960 0 686 -3 960 -11 960 -6 0 -24 12 -40 28 l-29 27 -503 5 -502 5 -5 502 -5 503 -28 29 c-15 16 -27 34 -27 40 0 8 -274 11 -960 11 -710 0 -960 -3 -960 -11z m1738 -698 l2 -453 -40 -40 c-22 -22 -40 -43 -40 -47 0 -4 36 -42 79 -85 88 -87 82 -87 141 -23 l26 27 455 -2 454 -3 0 -775 0 -775 -775 0 -775 0 -3 450 -2 449 47 48 47 48 -82 80 c-44 44 -84 80 -87 80 -3 0 -25 -18 -48 -40 l-41 -40 -456 2 -455 3 -3 765 c-1 421 0 771 3 778 3 10 164 12 777 10 l773 -3 3 -454z"/> <path d="M607 2492 c-42 -42 -77 -82 -77 -87 0 -6 86 -96 190 -200 105 -104 190 -197 190 -205 0 -8 -41 -56 -92 -107 -65 -65 -87 -94 -77 -98 8 -3 138 -4 289 -3 l275 3 3 275 c1 151 0 281 -3 289 -4 10 -35 -14 -103 -82 -54 -53 -103 -97 -109 -97 -7 0 -99 88 -206 195 -107 107 -196 195 -198 195 -3 0 -39 -35 -82 -78z"/> <path d="M1470 1639 c-47 -49 -87 -91 -89 -94 -5 -6 149 -165 160 -165 9 0 189 179 189 188 0 12 -154 162 -165 161 -6 0 -48 -41 -95 -90z"/> <path d="M1797 1303 c-9 -8 -9 -568 0 -576 4 -4 50 36 103 88 54 52 101 95 106 95 5 0 95 -85 199 -190 104 -104 194 -190 200 -190 6 0 46 36 90 80 l79 79 -197 196 c-108 108 -197 199 -197 203 0 4 45 52 99 106 55 55 98 103 95 108 -6 10 -568 11 -577 1z"/> </g> </svg> '},(t,e)=>{t.exports='<svg role="img" viewBox="0 0 1792 1792"> <path d="M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zm2-627v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zm1409 319v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm-1408-899v99h-335v-99h107q0-41 .5-122t.5-121v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zm1408 387v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 270 270"> <path d="m240.443652,220.45085l-47.410809,0l0,-10.342138c13.89973,-8.43655 25.752896,-19.844464 34.686646,-33.469923c11.445525,-17.455846 17.496072,-37.709239 17.496072,-58.570077c0,-59.589197 -49.208516,-108.068714 -109.693558,-108.068714s-109.69263,48.479517 -109.69263,108.069628c0,20.860839 6.050547,41.113316 17.497001,58.570077c8.93375,13.625459 20.787845,25.032458 34.686646,33.469008l0,10.342138l-47.412666,0c-10.256959,0 -18.571354,8.191376 -18.571354,18.296574c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.98402,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574l0,-39.496814c0,-7.073455 -4.137698,-13.51202 -10.626529,-16.537358c-25.24497,-11.772016 -41.557118,-37.145704 -41.557118,-64.643625c0,-39.411735 32.545369,-71.476481 72.549922,-71.476481c40.004553,0 72.550851,32.064746 72.550851,71.476481c0,27.497006 -16.312149,52.87161 -41.557118,64.643625c-6.487902,3.026253 -10.6256,9.464818 -10.6256,16.537358l0,39.496814c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.982163,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574c0,-10.105198 -8.314395,-18.296574 -18.571354,-18.296574z"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"> <path d="M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/> </svg>'},(t,e)=>{t.exports='<svg x="0px" y="0px" viewBox="0 0 459 459"> <g> <g> <path d="M229.5,0C102,0,0,102,0,229.5S102,459,229.5,459c20.4,0,38.25-17.85,38.25-38.25c0-10.2-2.55-17.85-10.2-25.5 c-5.1-7.65-10.2-15.3-10.2-25.5c0-20.4,17.851-38.25,38.25-38.25h45.9c71.4,0,127.5-56.1,127.5-127.5C459,91.8,357,0,229.5,0z M89.25,229.5c-20.4,0-38.25-17.85-38.25-38.25S68.85,153,89.25,153s38.25,17.85,38.25,38.25S109.65,229.5,89.25,229.5z M165.75,127.5c-20.4,0-38.25-17.85-38.25-38.25S145.35,51,165.75,51S204,68.85,204,89.25S186.15,127.5,165.75,127.5z M293.25,127.5c-20.4,0-38.25-17.85-38.25-38.25S272.85,51,293.25,51s38.25,17.85,38.25,38.25S313.65,127.5,293.25,127.5z M369.75,229.5c-20.4,0-38.25-17.85-38.25-38.25S349.35,153,369.75,153S408,170.85,408,191.25S390.15,229.5,369.75,229.5z" /> </g> </g> </svg> '},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1534 189v73q0 29-18.5 61t-42.5 32q-50 0-54 1-26 6-32 31-3 11-3 64v1152q0 25-18 43t-43 18h-108q-25 0-43-18t-18-43v-1218h-143v1218q0 25-17.5 43t-43.5 18h-108q-26 0-43.5-18t-17.5-43v-496q-147-12-245-59-126-58-192-179-64-117-64-259 0-166 88-286 88-118 209-159 111-37 417-37h479q25 0 43 18t18 43z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10.5 20H2a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4a3 3 0 0 1 5.94 0L13 3v1h1a2 2 0 0 1 2 2v1h-2V6h-1v1H3V6H2v12h5v2h3.5zM8 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2 4h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2zm0 2v8h8v-8h-8z"/> </svg> '},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"> <path d="M448 1536h896v-256h-896v256zm0-640h896v-384h-160q-40 0-68-28t-28-68v-160h-640v640zm1152 64q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128 0v416q0 13-9.5 22.5t-22.5 9.5h-224v160q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-224q-13 0-22.5-9.5t-9.5-22.5v-416q0-79 56.5-135.5t135.5-56.5h64v-544q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v256h64q79 0 135.5 56.5t56.5 135.5z"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"> <path d="M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 24 24" > <g> <g transform="translate(-251.000000, -443.000000)"> <g transform="translate(215.000000, 119.000000)"/> <path d="M252,448 L256,448 L256,444 L252,444 L252,448 Z M257,448 L269,448 L269,446 L257,446 L257,448 Z M257,464 L269,464 L269,462 L257,462 L257,464 Z M270,444 L270,448 L274,448 L274,444 L270,444 Z M252,462 L252,466 L256,466 L256,462 L252,462 Z M270,462 L270,466 L274,466 L274,462 L270,462 Z M254,461 L256,461 L256,449 L254,449 L254,461 Z M270,461 L272,461 L272,449 L270,449 L270,461 Z"/> </g> </g> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"> <path d="M844 472q0 60-19 113.5t-63 92.5-105 39q-76 0-138-57.5t-92-135.5-30-151q0-60 19-113.5t63-92.5 105-39q77 0 138.5 57.5t91.5 135 30 151.5zm-342 483q0 80-42 139t-119 59q-76 0-141.5-55.5t-100.5-133.5-35-152q0-80 42-139.5t119-59.5q76 0 141.5 55.5t100.5 134 35 152.5zm394-27q118 0 255 97.5t229 237 92 254.5q0 46-17 76.5t-48.5 45-64.5 20-76 5.5q-68 0-187.5-45t-182.5-45q-66 0-192.5 44.5t-200.5 44.5q-183 0-183-146 0-86 56-191.5t139.5-192.5 187.5-146 193-59zm239-211q-61 0-105-39t-63-92.5-19-113.5q0-74 30-151.5t91.5-135 138.5-57.5q61 0 105 39t63 92.5 19 113.5q0 73-30 151t-92 135.5-138 57.5zm432-104q77 0 119 59.5t42 139.5q0 74-35 152t-100.5 133.5-141.5 55.5q-77 0-119-59t-42-139q0-74 35-152.5t100.5-134 141.5-55.5z"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"> <path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"> <path d="M512 1536h768v-384h-768v384zm896 0h128v-896q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28h-576q-40 0-68-28t-28-68v-416h-128v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zm-384-928v-320q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm640 32v928q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 18 18"> <g fill-rule="evenodd" stroke="none" stroke-width="1"> <g transform="translate(-381.000000, -381.000000)"> <g transform="translate(381.000000, 381.000000)"> <path d="M0,2 L2,2 L2,0 C0.9,0 0,0.9 0,2 L0,2 Z M0,10 L2,10 L2,8 L0,8 L0,10 L0,10 Z M4,18 L6,18 L6,16 L4,16 L4,18 L4,18 Z M0,6 L2,6 L2,4 L0,4 L0,6 L0,6 Z M10,0 L8,0 L8,2 L10,2 L10,0 L10,0 Z M16,0 L16,2 L18,2 C18,0.9 17.1,0 16,0 L16,0 Z M2,18 L2,16 L0,16 C0,17.1 0.9,18 2,18 L2,18 Z M0,14 L2,14 L2,12 L0,12 L0,14 L0,14 Z M6,0 L4,0 L4,2 L6,2 L6,0 L6,0 Z M8,18 L10,18 L10,16 L8,16 L8,18 L8,18 Z M16,10 L18,10 L18,8 L16,8 L16,10 L16,10 Z M16,18 C17.1,18 18,17.1 18,16 L16,16 L16,18 L16,18 Z M16,6 L18,6 L18,4 L16,4 L16,6 L16,6 Z M16,14 L18,14 L18,12 L16,12 L16,14 L16,14 Z M12,18 L14,18 L14,16 L12,16 L12,18 L12,18 Z M12,2 L14,2 L14,0 L12,0 L12,2 L12,2 Z M4,14 L14,14 L14,4 L4,4 L4,14 L4,14 Z M6,6 L12,6 L12,12 L6,12 L6,6 L6,6 Z"/> </g> </g> </g> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"> <path d="M896 960v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45zm755-672q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23z"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"> <path d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 48 48"> <path d="M6 42h4v-4h-4v4zm4-28h-4v4h4v-4zm-4 20h4v-4h-4v4zm8 8h4v-4h-4v4zm-4-36h-4v4h4v-4zm8 0h-4v4h4v-4zm16 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm0-8h-4v4h4v-4zm12 28h4v-4h-4v4zm-16 8h4v-4h-4v4zm-16-16h36v-4h-36v4zm32-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-16 16h4v-4h-4v4zm8 8h4v-4h-4v4zm8 0h4v-4h-4v4z"/><path d="M0 0h48v48h-48z" fill="none"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 48 48"> <path d="M6 18h4v-4h-4v4zm0-8h4v-4h-4v4zm8 32h4v-4h-4v4zm0-16h4v-4h-4v4zm-8 0h4v-4h-4v4zm0 16h4v-4h-4v4zm0-8h4v-4h-4v4zm8-24h4v-4h-4v4zm24 24h4v-4h-4v4zm-16 8h4v-36h-4v36zm16 0h4v-4h-4v4zm0-16h4v-4h-4v4zm0-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-8-8h4v-4h-4v4zm0 32h4v-4h-4v4zm0-16h4v-4h-4v4z"/> <path d="M0 0h48v48h-48z" fill="none"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zm-1277-64q-28-35-51-80-48-97-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zm507 256h411q7 39 7 92 0 111-41 212-23 55-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"> <path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm639 217v206h-514l-4-27q-3-45-3-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 80-65 188-65 110 0 178 59.5t68 158.5q0 66-34.5 118.5t-84 86-99.5 62.5-87 63-41 73h232v-80h126z"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"> <path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm637-679v206h-514l-3-27q-4-28-4-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 83-65 188-65 110 0 178 59.5t68 158.5q0 56-24.5 103t-62 76.5-81.5 58.5-82 50.5-65.5 51.5-30.5 63h232v-80h126z"/> </svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M576 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm128-320v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm-1280-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M176 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 .5 32.5t.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zm1488 1409v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1728 576v256q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45v-256q0-106-75-181t-181-75-181 75-75 181v192h96q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h672v-192q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1216 320q0 26-19 45t-45 19h-128v1024h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-1024h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45z"/></svg>'},(t,e)=>{t.exports='<svg viewBox="0 0 1792 1792"><path d="M1792 352v1088q0 42-39 59-13 5-25 5-27 0-45-19l-403-403v166q0 119-84.5 203.5t-203.5 84.5h-704q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h704q119 0 203.5 84.5t84.5 203.5v165l403-402q18-19 45-19 12 0 25 5 39 17 39 59z"/></svg>'},(t,e)=>{t.exports.default=["إبدأ في الكتابة...","حول جوديت","محرر جوديت","الإصدار الغير تجاري مجاني","رخصة جنو العمومية العامة ، الإصدار الثاني أو الأحدث","دليل مستخدم جوديت","يحتوي على مساعدة مفصلة للاستخدام","للحصول على معلومات حول الترخيص، يرجى الذهاب لموقعنا:","شراء النسخة الكاملة","حقوق الطبع والنشر © XDSoft.net - Chupurnov Valeriy. كل الحقوق محفوظة.","مِرْساة","فتح في نافذة جديدة","فتح المحرر في الحجم الكامل","مسح التنسيق","ملء اللون أو تعيين لون النص","إعادة","تراجع","عريض","مائل","إدراج قائمة غير مرتبة","إدراج قائمة مرتبة","محاذاة للوسط","محاذاة مثبتة","محاذاة لليسار","محاذاة لليمين","إدراج خط أفقي","إدراج صورة","ادخال الملف","إدراج فيديو يوتيوب/فيميو ","إدراج رابط","حجم الخط","نوع الخط","إدراج كتلة تنسيق","عادي","عنوان 1","عنوان 2","عنوان 3","عنوان 4","إقتباس","كود","إدراج","إدراج جدول","تقليل المسافة البادئة","زيادة المسافة البادئة","تحديد أحرف خاصة","إدراج حرف خاص","تنسيق الرسم","تغيير الوضع","هوامش","أعلى","يمين","أسفل","يسار","الأنماط","الطبقات","محاذاة","اليمين","الوسط","اليسار","--غير مضبوط--","Src","العنوان","العنوان البديل","الرابط","افتح الرابط في نافذة جديدة","الصورة","ملف","متقدم","خصائص الصورة","إلغاء","حسنا","يشبه الكود الخاص بك HTML. تبقي كما HTML؟","الصق ك HTML","احتفظ",null,"إدراج كنص","إدراج النص فقط",null,null,"متصفح الملفات","حدث خطأ في تحميل القائمة ","حدث خطأ في تحميل المجلدات","هل أنت واثق؟","أدخل اسم المجلد","إنشاء مجلد","أكتب إسم","إسقاط صورة","إسقاط الملف","أو أنقر","النص البديل","تصفح","رفع","الخلفية","نص","أعلى","الوسط","الأسفل","إدراج عمود قبل","إدراج عمود بعد","إدراج صف أعلى","إدراج صف أسفل","حذف الجدول","حذف الصف","حذف العمود","خلية فارغة","مصدر","بالخط العريض","مائل","شغل","صلة","إلغاء","كرر","طاولة","صورة","نظيف","فقرة","حجم الخط","فيديو","الخط","حول المحرر","طباعة","رمز","أكد","شطب","المسافة البادئة","نتوء","ملء الشاشة","الحجم التقليدي","نسخ التنسيق","الخط","قائمة","قائمة مرقمة","قطع","اختر الكل","قانون","فتح الرابط","تعديل الرابط","سمة Nofollow","إزالة الرابط","مراجعة","لتحرير","تحديث","URL","تحرير","محاذاة أفقية","فلتر","عن طريق التغيير","بالاسم","حسب الحجم","إضافة مجلد","إعادة","احتفظ","حفظ باسم","تغيير الحجم","حجم القطع","عرض","ارتفاع","حافظ على النسب","أن","لا","حذف","تميز","%d حرف","%d كلام",null,"تميز %s","اختر الكل","محاذاة عمودية","انشق، مزق","انقسام عمودي","تقسيم أفقي","اذهب","أضف العمود","اضف سطر","حذف","الحدود","رخصة %s","اضرب من خلال","أكد","حرف فوقي","مخطوطة","قطع الاختيار","استراحة","البحث عن","استبدل ب","يحل محل","معجون","اختر محتوى للصق","يمكنك فقط تحرير صورك الخاصة. تحميل هذه الصورة على المضيف؟","تم تحميل الصورة بنجاح على الخادم!","لوحة","لا توجد ملفات في هذا الدليل.","إعادة تسمية","أدخل اسم جديد","معاينة","تحميل","لصق من الحافظة","متصفحك لا يدعم إمكانية الوصول المباشر إلى الحافظة.","نسخ التحديد","نسخ","دائرة نصف قطرها الحدود"]},(t,e)=>{t.exports.default=["Napiš něco","O Jodit","Editor Jodit","Verze pro nekomerční použití","Licence GNU (GPL), verze 2 nebo vyšší","Jodit Uživatelská příručka","obsahuje detailní nápovědu","Pro informace o licenci, prosím, přejděte na naši stránku:","Koupit plnou verzi","Copyright © XDSoft.net - Chupurnov Valeriy. Všechna práva vyhrazena.","Anchor","Otevřít v nové záložce","Otevřít v celoobrazovkovém režimu","Vyčistit formátování","Barva výplně a písma","Vpřed","Zpět","Tučné","Kurzíva","Odrážky","Číslovaný seznam","Zarovnat na střed","Zarovnat do bloku","Zarovnat vlevo","Zarovnat vpravo","Vložit horizontální linku","Vložit obrázek","Vložit soubor","Vložit video (YT/Vimeo)","Vložit odkaz","Velikost písma","Typ písma","Formátovat blok","Normální text","Nadpis 1","Nadpis 2","Nadpis 3","Nadpis 4","Citát","Kód","Vložit","Vložit tabulku","Zmenšit odsazení","Zvětšit odsazení","Vybrat speciální symbol","Vložit speciální symbol","Použít formát","Změnit mód","Okraje","horní","pravý","spodní","levý","Styly","Třídy","Zarovnání","Vpravo","Na střed","Vlevo","--nenastaveno--","src","Titulek","Alternativní text (alt)","Link","Otevřít link v nové záložce","Obrázek","soubor","Rozšířené","Vlastnosti obrázku","Zpět","Ok","Váš text se podobá HTML. Vložit ho jako HTML?","Vložit jako HTML","Ponechat originál","Vyčistit","Vložit jako TEXT","Vložit pouze TEXT","Detekován fragment z Wordu nebo Excelu","Obsah, který vkládáte, je pravděpodobně z Microsoft Word / Excel. Chcete ponechat formát nebo vložit pouze text?","Prohlížeč souborů","Chyba při načítání seznamu souborů","Chyba při načítání složek","Jste si jistý(á)?","Název složky","Vytvořit složku","název","Přetáhněte sem obrázek","Přetáhněte sem soubor","nebo klikněte","Alternativní text","Server","Nahrát","Pozadí","Text","Nahoru","Na střed","Dolu","Vložit sloupec před","Vložit sloupec za","Vložit řádek nad","Vložit řádek pod","Vymazat tabulku","Vymazat řádku","Vymazat sloupec","Vyčistit buňku","HTML","tučně","kurzíva","štětec","odkaz","zpět","vpřed","tabulka","obrázek","guma","odstavec","velikost písma","video","písmo","о editoru","tisk","symbol","podtrženo","přeškrtnuto","zvětšit odsazení","zmenšit odsazení","celoobrazovkový režim","smrsknout","Kopírovat formát","Linka","Odrážka","Číslovaný seznam","Vyjmout","Označit vše","Kód","Otevřít odkaz","Upravit odkaz","Atribut no-follow","Odstranit odkaz","Zobrazit","Chcete-li upravit","Aktualizovat","URL","Editovat","Horizontální zarovnání","Filtr","Dle poslední změny","Dle názvu","Dle velikosti","Přidat složku","Reset","Uložit","Uložit jako...","Změnit rozměr","Ořezat","Šířka","Výška","Ponechat poměr","Ano","Ne","Vyjmout","Označit","Znaky: %d","Slova: %d","Vše","Označit %s","Označit vše","Vertikální zarovnání","Rozdělit","Rozdělit vertikálně","Rozdělit horizontálně","Spojit","Přidat sloupec","Přidat řádek","Vymazat","Okraj","Licence: %s","Přeškrtnuto","Podtrženo","Horní index","Dolní index","Vyjmout označené","Zalomení","Najdi","Nahradit za","Nahradit","Vložit","Vyber obsah pro vložení","Můžete upravovat pouze své obrázky. Načíst obrázek?","Obrázek byl úspěšně nahrán!","paleta","V tomto adresáři nejsou žádné soubory.","přejmenovat","Zadejte nový název","náhled","Stažení","Vložit ze schránky","Váš prohlížeč nepodporuje přímý přístup do schránky.","Kopírovat výběr","kopírování","Border radius"]},(t,e)=>{t.exports.default=["Bitte geben Sie einen Text ein","Über Jodit","Jodit Editor","Freie Nicht-kommerzielle Version","GNU General Public License, Version 2 oder höher","Das Jodit Benutzerhandbuch","beinhaltet ausführliche Informationen wie Sie den Editor verwenden können.","Für Lizenz-Informationen, besuchen Sie bitte unsere Webseite:","Vollversion kaufen","Copyright © XDSoft.net - Chupurnov Valeriy. Alle Rechte vorbehalten.","Anker","In neuer Registerkarte öffnen","Editor in voller Größe öffnen","Formatierung löschen","Füllfarbe oder Textfarbe ändern","Wiederholen","Rückgängig machen","Fett","Kursiv","Ungeordnete Liste einfügen","Sortierte Liste einfügen","Mittig ausrichten","Blocksatz","Links ausrichten","Rechts ausrichten","Horizontale Linie einfügen","Bild einfügen","Datei einfügen","Youtube/vimeo Video einfügen","Link einfügen","Schriftgröße","Schriftfamilie","Formatblock einfügen","Normal","Überschrift 1","Überschrift 2","Überschrift 3","Überschrift 4","Zitat","Code","Einfügen","Tabelle einfügen","Einzug verkleinern","Einzug vergrößern","Sonderzeichen auswählen","Sonderzeichen einfügen","Format kopieren","Änderungsmodus","Ränder","Oben","Rechts","Unten","Links","CSS Stiel","CSS Klassen","Ausrichten","Rechts","Zentriert","Links","Keine","Pfad","Titel","Alternativer Text","Link","Link in neuem Tab öffnen","Bild","Datei","Fortgeschritten","Bildeigenschaften","Abbrechen","OK","Es scheint als dass Sie HTML-Text einfügen möchten","Als HTML einfügen?","Original speichern","Säubern","Als Text einfügen","Nur Text einfügen","In Word formatierter Text erkannt","Der Inhalt, den Sie einfügen, stammt aus einem Microsoft Word / Excel-Dokument. Möchten Sie das Format erhalten oder löschen?","Dateibrowser","Fehler beim Laden der Liste","Fehler beim Laden der Ordner","Sind Sie sicher?","Geben Sie den Verzeichnisnamen ein","Verzeichnis erstellen","Typname","Bild hier hinziehen","Datei löschen","oder hier klicken","Alternativtext","Auswählen","Hochladen","Hintergrund","Text","Oben","Mittig","Unten","Spalte einfügen vor","Spalte einfügen nach","Zeile einfügen oberhalb","Zeile unterhalb einfügen","Tabelle löschen","Zeile löschen","Spalte löschen","Leere Zelle","HTML","Fett gedruckt","kursiv","Bürste","Verknüpfung","rückgängig machen","wiederholen","Tabelle","Bild","Radiergummi","Absatz","Schriftgröße","Video","Schriftart","Über","drucken","Symbol","unterstreichen","durchgestrichen","Einzug","Aussenseiter","Vollgröße","schrumpfen","Format kopierenт","die Linie","Liste von","Nummerierte Liste","Schnitt","Wählen Sie Alle aus","Code einbetten","Link öffnen","Link bearbeiten","Nofollow-Attribut","Link entfernen","Ansehen","Bearbeiten","Aktualisieren","URL","Bearbeiten","Horizontale Ausrichtung","filter","Sortieren nach geändert","Nach Name sortieren","Nach Größe sortiert","Ordner hinzufügen","Wiederherstellen","Speichern","Speichern als","Ändern Sie die Größe","Größe anpassen","Breite","Höhe","Halten Sie Proportionen","Ja","Nein","Entfernen","Markieren","Zeichen: %d","Wörter: %d","Wählen Sie Alle aus","Markieren: %s","Wählen Sie Alle aus","Vertikale Ausrichtung","Split","Split vertikal","Split horizontally","Verschmelzen","Spalte hinzufügen","Zeile hinzufügen","Löschen","Rand",null,"Durchschlagen","Unterstreichen","hochgestellt","Index","Auswahl ausschneid","Pause","Suche nach","Ersetzen durch","Ersetzen","Einfügen","Wählen Sie Inhalt zum Einfügen","Sie können nur Ihre eigenen Bilder bearbeiten. Laden Sie dieses Bild auf dem Host herunter?","Das Bild wurde erfolgreich auf den Server hochgeladen!null","Palette","In diesem Verzeichnis befinden sich keine Dateien.","umbenennen","Geben Sie einen neuen Namen ein","Vorschau","Herunterladen","Aus der Zwischenablage einfügen","Ihr browser unterstützt kein direkter Zugriff auf die Zwischenablage.","Auswahl kopieren","kopieren","Border-radius"]},(t,e)=>{t.exports.default=["Escriba algo...","Acerca de Jodit","Jodit Editor","Versión gratis no comercial","GNU General Public License, Versión 2 o posterior","Guía de usuario Jodit","contiene ayuda detallada para el uso.","Para información sobre la licencia, por favor visite nuestro sitio:","Compre la versión completa","Copyright © XDSoft.net - Chupurnov Valeriy. Todos los derechos reservados.","Anclar","Abrir en nueva pestaña","Abrir editor en pantalla completa","Limpiar formato","Color de relleno o de letra","Rehacer","Deshacer","Negrita","Cursiva","Insertar lista no ordenada","Insertar lista ordenada","Alinear Centrado","Alinear Justificado","Alinear Izquierda","Alinear Derecha","Insertar línea horizontal","Insertar imagen","Insertar archivo","Insertar video de Youtube/vimeo","Insertar vínculo","Tamaño de letra","Familia de letra","Insertar bloque","Normal","Encabezado 1","Encabezado 2","Encabezado 3","Encabezado 4","Cita","Código","Insertar","Insertar tabla","Disminuir sangría","Aumentar sangría","Seleccionar caracter especial","Insertar caracter especial","Copiar formato","Cambiar modo","Márgenes","arriba","derecha","abajo","izquierda","Estilos CSS","Clases CSS","Alinear","Derecha","Centrado","Izquierda","--No Establecido--","Fuente","Título","Texto Alternativo","Vínculo","Abrir vínculo en nueva pestaña","Imagen","Archivo","Avanzado","Propiedades de imagen","Cancelar","Aceptar","El código es similar a HTML. ¿Mantener como HTML?","Pegar como HTML?","Mantener","Limpiar","Insertar como texto","Insertar solo texto","Pegado desde Word detectado","El contenido pegado proviene de un documento de Microsoft Word/Excel. ¿Desea mantener el formato o limpiarlo?","Buscar archivo","Error al cargar la lista","Error al cargar las carpetas","¿Está seguro?","Entre nombre de carpeta","Crear carpeta","Entre el nombre","Soltar imagen","Soltar archivo","o click","Texto alternativo","Buscar","Subir","Fondo","Texto","Arriba","Centro","Abajo","Insertar columna antes","Interar columna después","Insertar fila arriba","Insertar fila debajo","Borrar tabla","Borrar fila","Borrar columna","Vaciar celda","HTML","negrita","cursiva","Brocha","Vínculo","deshacer","rehacer","Tabla","Imagen","Borrar","Párrafo","Tamaño de letra","Video","Letra","Acerca de","Imprimir","Símbolo","subrayar","tachar","sangría","quitar sangría","Tamaño completo","encoger","Copiar formato","línea horizontal","lista sin ordenar","lista ordenada","Cortar","Seleccionar todo","Incluir código","Abrir vínculo","Editar vínculo","No seguir","Desvincular","Ver","Para editar","Actualizar","URL","Editar","Alineación horizontal","filtrar","Ordenar por fecha modificación","Ordenar por nombre","Ordenar por tamaño","Agregar carpeta","Resetear","Guardar","Guardar como...","Redimensionar","Recortar","Ancho","Alto","Mantener relación de aspecto","Si","No","Quitar","Seleccionar","Caracteres: %d","Palabras: %d","Todo","Seleccionar: %s","Seleccionar todo","Alineación vertical","Dividir","Dividir vertical","Dividir horizontal","Mezclar","Agregar columna","Agregar fila","Borrar","Borde",null,"Tachado","Subrayado","superíndice","subíndice","Cortar selección","Pausa","Buscar","Reemplazar con","Reemplazar","Pegar","Seleccionar contenido para pegar","Solo puedes editar tus propias imágenes. ¿Descargar esta imagen en el servidor?","¡La imagen se ha subido correctamente al servidor!","paleta","No hay archivos en este directorio.","renombrar","Ingresa un nuevo nombre","avance","Descargar","Pegar desde el portapapeles","Su navegador no soporta el acceso directo en el portapapeles.","Selección de copia","copia","Radio frontera"]},(t,e)=>{t.exports.default=["Ecrivez ici","A propos de Jodit","Editeur Jodit","Version gratuite, non commerciale","GNU General Public License, version 2 ou ultérieure","Guide de l'utilisateur","Aide détaillée à l'utilisation","Consulter la licence sur notre site web:","Acheter la version complète","Copyright © XDSoft.net - Chupurnov Valeriy. Tous droits réservés.","Ancre","Ouvrir dans un nouvel onglet","Ouvrir l'éditeur en pleine page","Supprimer le formattage","Modifier la couleur du fond ou du texte","Refaire","Défaire","Gras","Italique","Liste non ordonnée","Liste ordonnée","Centrer","Justifier","Aligner à gauche ","Aligner à droite","Insérer une ligne horizontale","Insérer une image","Insérer un fichier","Insérer une vidéo","Insérer un lien","Taille des caractères","Famille des caractères","Bloc formatté","Normal","Titre 1","Titre 2","Titre 3","Titre 4","Citation","Code","Insérer","Insérer un tableau","Diminuer le retrait","Retrait plus","Sélectionnez un caractère spécial","Insérer un caractère spécial","Cloner le format","Mode wysiwyg <-> code html","Marges","haut","droite","Bas","gauche","Styles","Classes","Alignement","Droite","Centre","Gauche","--Non disponible--","Source","Titre","Alternative","Lien","Ouvrir le lien dans un nouvel onglet","Image","fichier","Avancé","Propriétés de l'image","Effacer","OK","Votre texte que vous essayez de coller est similaire au HTML. Collez-le en HTML?","Coller en HTML?","Sauvegarder l'original","Nettoyer","Coller en tant que texte","Coller le texte seulement","C'est peut-être un fragment de Word ou Excel","Le contenu que vous insérez provient d'un document Microsoft Word / Excel. Voulez-vous enregistrer le format ou l'effacer?","Explorateur de fichiers","Erreur de liste de chargement","Erreur de dossier de chargement","Etes-vous sûrs ?","Entrer le non de dossier","Créer un dossier","type de fichier","Coller une image","Déposer un fichier","ou cliquer","Texte de remplacemement","Chercher","Charger","Arrière-plan","Texte","Haut","Milieu","Bas","Insérer une colonne avant","Insérer une colonne après","Insérer une ligne en dessus","Insérer une ligne en dessous","Supprimer le tableau","Supprimer la ligne","Supprimer la colonne","Vider la cellule","la source","graisseux","italique","verser","lien","abolir","prêt","graphique","Image","la gommen","clause","taille de police","Video","police","à propos de l'éditeur","impression","caractère","souligné","barré","indentation","indifférent","taille réelle","taille conventionnelle","Format de copie","la ligne","Liste des","Liste numérotée","Couper","Sélectionner tout",null,"Ouvrir le lien","Modifier le lien","Attribut Nofollow","Supprimer le lien","Voir","Pour éditer","Mettre à jour","URL",null,"Alignement horizontal","Filtre","Trier par modifié","Trier par nom","Classer par taille","Ajouter le dossier","Restaurer","Sauvegarder","Enregistrer sous","Changer la taille","Taille de garniture","Largeur","Hauteur","Garder les proportions","Oui","Non","Supprimer","Mettre en évidence","Symboles: %d","Mots: %d",null,"Mettre en évidence: %s","Tout sélectionner","Alignement vertical","Split","Split vertical","Split horizontal","aller","Ajouter une colonne","Ajouter une rangée","Effacer",null,null,"Frapper à travers","Souligner","exposant","indice","Couper la sélection","Pause","Rechercher","Remplacer par","Remplacer","Coller","Choisissez le contenu à coller","Vous ne pouvez éditer que vos propres images. Téléchargez cette image sur l'hôte?","L'image a été téléchargée avec succès sur le serveur!null","Palette","Il n'y a aucun fichier dans ce répertoire.","renommer","Entrez un nouveau nom","Aperçu","Télécharger","Coller à partir du presse-papiers","Votre navigateur ne prend pas en charge l'accès direct à la presse-papiers.","Copier la sélection","copie","Rayon des frontières"]},(t,e)=>{t.exports.default=["הקלד משהו...","About Jodit","Jodit Editor","Free Non-commercial Version","GNU General Public License, version 2 or later","Jodit User's Guide","contains detailed help for using.","For information about the license, please go to our website:","Buy full version","Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.","מקום עיגון","פתח בכרטיסיה חדשה","פתח את העורך בחלון חדש","נקה עיצוב","שנה צבע טקסט או רקע","בצע שוב","בטל","מודגש","נטוי","הכנס רשימת תבליטים","הכנס רשימה ממוספרת","מרכז","ישר ","ישר לשמאל","ישר לימין","הכנס קו אופקי","הכנס תמונה","הכנס קובץ","הכנס סרטון וידאו מYouTube/Vimeo","הכנס קישור","גודל גופן","גופן","מעוצב מראש","רגיל","כותרת 1","כותרת 2","כותרת 3","כותרת 4","ציטוט","קוד","הכנס","הכנס טבלה","הקטן כניסה","הגדל כניסה","בחר תו מיוחד","הכנס תו מיוחד","העתק עיצוב","החלף מצב","ריווח","עליון","ימין","תחתון","שמאל","עיצוב CSS","מחלקת CSS","יישור","ימין","מרכז","שמאל","--לא נקבע--","מקור","כותרת","כיתוב חלופי","קישור","פתח בכרטיסיה חדשה","תמונה","קובץ","מתקדם","מאפייני תמונה","ביטול","אישור","הקוד דומה לHTML, האם להשאיר כHTML","הדבק כHTML","השאר","נקה","הכנס כטקסט","הכנס טקסט בלבד",'זוהתה הדבקה מ"וורד"',"התוכן המודבק מגיע ממסמך וורד/אקסל. האם ברצונך להשאיר את העיצוב או לנקותו","סייר הקבצים","שגיאה  בזמן טעינת רשימה","שגיאה בזמן טעינת תקיות","האם אתה בטוח?","הכנס שם תקיה","צור תקיה","סוג הקובץ","הסר תמונה","הסר קובץ","או לחץ","כיתוב חלופי","סייר","העלה","רקע","טקסט","עליון","מרכז","תחתון","הכנס עמודה לפני","הכנס עמודה אחרי","הכנס שורה מעל","הכנס שורה מתחת","מחק טבלה","מחק שורה","מחק עמודה","רוקן תא","HTML","מודגש","נטוי","מברשת","קישור","בטל","בצע שוב","טבלה","תמונה","מחק","פסקה","גודל גופן","וידאו","גופן","עלינו","הדפס","תו מיוחד","קו תחתון","קו חוצה","הגדל כניסה","הקטן כניסה","גודל מלא","כווץ","העתק עיצוב","קו אופקי","רשימת תבליטים","רשימה ממוספרת","חתוך","בחר הכל","הוסף קוד","פתח קישור","ערוך קישור","ללא מעקב","בטל קישור","הצג","כדי לערוך","עדכן","כתובת","ערוך","יישור אופקי","סנן","מין לפי שינוי","מיין לפי שם","מיין לפי גודל","הוסף תקייה","אפס","שמור","שמור בשם...","שנה גודל","חתוך","רוחב","גובה","שמור יחס","כן","לא","הסר","בחר","תווים: %d","מילים: %d","הכל","נבחר: %s","בחר הכל","יישור אנכי","פיצול","פיצול אנכי","פיצול אופקי","מזג","הוסף עמודה","הוסף שורה","מחק","מסגרת",null,"קו חוצה","קו תחתון","superscript","subscript","גזור בחירה","שבירת שורה","חפש","החלף ב","החלף","הדבק","בחר תוכן להדבקה","רק קבצים המשוייכים שלך ניתנים לעריכה. האם להוריד את הקובץ?","התמונה עלתה בהצלחה!","לוח","אין קבצים בספריה זו.","הונגרית","הזן שם חדש","תצוגה מקדימה","הורד","להדביק מהלוח","הדפדפן שלך לא תומך גישה ישירה ללוח.","העתק בחירה","העתק","רדיוס הגבול"]},(t,e)=>{t.exports.default=["Írjon be valamit","Joditról","Jodit Editor","Ingyenes változat","GNU General Public License, Verzió 2 vagy későbbi","Jodit útmutató","további segítséget tartalmaz","További licence információkért látogassa meg a weboldalunkat:","Teljes verzió megvásárlása","Copyright © XDSoft.net - Chupurnov Valeriy. Minden jog fenntartva.","Horgony","Megnyitás új lapon","Megnyitás teljes méretben","Formázás törlése","Háttér/szöveg szín","Újra","Visszavon","Félkövér","Dőlt","Pontozott lista","Számozott lista","Középre zárt","Sorkizárt","Balra zárt","Jobbra zárt","Vízszintes vonal beszúrása","Kép beszúrás","Fájl beszúrás","Youtube videó beszúrása","Link beszúrás","Betűméret","Betűtípus","Formázott blokk beszúrása","Normál","Fejléc 1","Fejléc 2","Fejléc 3","Fejléc 4","Idézet","Kód","Beszúr","Táblázat beszúrása","Behúzás csökkentése","Behúzás növelése","Speciális karakter kiválasztása","Speciális karakter beszúrása","Kép formázása","Nézet váltása","Szegélyek","felső","jobb","alsó","bal","CSS stílusok","CSS osztályok","Igazítás","Jobbra","Középre","Balra","Nincs","Forrás","Cím","Helyettesítő szöveg","Link","Link megnyitása új lapon","Kép","Fájl","Haladó","Kép tulajdonságai","Mégsem","OK","A beillesztett szöveg HTML-nek tűnik. Megtartsuk HTML-ként?","Beszúrás HTML-ként","Megtartás","Elvetés","Beszúrás szövegként","Csak szöveg beillesztése","Word-ből másolt szöveg","A beillesztett tartalom Microsoft Word/Excel dokumentumból származik. Meg szeretné tartani a formátumát?","Fájl tallózó","Hiba a lista betöltése közben","Hiba a mappák betöltése közben","Biztosan ezt szeretné?","Írjon be egy mappanevet","Mappa létrehozása","írjon be bevet","Húzza ide a képet","Húzza ide a fájlt","vagy kattintson","Helyettesítő szöveg","Tallóz","Feltölt","Háttér","Szöveg","Fent","Középen","Lent","Oszlop beszúrás elé","Oszlop beszúrás utána","Sor beszúrás fölé","Sor beszúrás alá","Táblázat törlése","Sor törlése","Oszlop törlése","Cella tartalmának törlése","HTML","Félkövér","Dőlt","Ecset","Link","Visszavon","Újra","Táblázat","Kép","Törlés","Paragráfus","Betűméret","Videó","Betű","Rólunk","Nyomtat","Szimbólum","Aláhúzott","Áthúzott","Behúzás","Aussenseiter","Teljes méret","Összenyom","Formátum másolás","Egyenes vonal","Lista","Számozott lista","Kivág","Összes kijelölése","Beágyazott kód","Link megnyitása","Link szerkesztése","Nincs követés","Link leválasztása","felülvizsgálat","Szerkesztés","Frissít","URL","Szerkeszt","Vízszintes igazítás","Szűrő","Rendezés módosítás szerint","Rendezés név szerint","Rendezés méret szerint","Mappa hozzáadás","Visszaállít","Mentés","Mentés másként...","Átméretezés","Kivág","Szélesség","Magasság","Képarány megtartása","Igen","Nem","Eltávolít","Kijelöl","Karakterek száma: %d","Szavak száma: %d","Összes","Kijelöl: %s","Összes kijelölése","Függőleges igazítás","Felosztás","Függőleges felosztás","Vízszintes felosztás","Összevonás","Oszlop hozzáadás","Sor hozzáadás","Törlés","Szegély",null,"Áthúzott","Aláhúzott","Felső index","Alsó index","Kivágás","Szünet","Keresés","Csere erre","Csere","Beillesztés","Válasszon tartalmat a beillesztéshez","Csak a saját képeit tudja szerkeszteni. Letölti ezt a képet?","Kép sikeresen feltöltve!","Palette","Er zijn geen bestanden in deze map.","átnevezés","Adja meg az új nevet","előnézet","Letöltés","Illessze be a vágólap","A böngésző nem támogatja a közvetlen hozzáférést biztosít a vágólapra.","Másolás kiválasztása","másolás","Határ sugár"]},(t,e)=>{t.exports.default=["Ketik sesuatu","Tentang Jodit","Editor Jodit","Versi Bebas Non-komersil","Lisensi Publik Umum (GPL), versi 2 atau terbaru","Panduan Pengguna Jodit","mencakup detail bantuan penggunaan","Untuk informasi tentang lisensi, silakan kunjungi website:","Beli versi lengkap","Hak Cipta © XDSoft.net - Chupurnov Valeriy. Hak cipta dilindungi undang-undang.","Tautan","Buka di tab baru","Buka editor dalam ukuran penuh","Hapus Pemformatan","Isi warna atau atur warna teks","Ulangi","Batalkan","Tebal","Miring","Sisipkan Daftar Tidak Berurut","Sisipkan Daftar Berurut","Tengah","Penuh","Kiri","Kanan","Sisipkan Garis Horizontal","Sisipkan Gambar","Sisipkan Berkas","Sisipkan video youtube/vimeo","Sisipkan tautan","Ukuran font","Keluarga font","Sisipkan blok format","Normal","Heading 1","Heading 2","Heading 3","Heading 4","Kutip","Kode","Sisipkan","Sisipkan tabel","Kurangi Indentasi","Tambah Indentasi","Pilih Karakter Spesial","Sisipkan Karakter Spesial","Formar warna","Ubah mode","Batas","atas","kanan","bawah","kiri","Gaya","Class","Rata","Kanan","Tengah","Kiri","--Tidak diset--","Src","Judul","Teks alternatif","Tautan","Buka tautan di tab baru","Gambar","berkas","Lanjutan","Properti gambar","Batal","Ya","Kode Anda cenderung ke HTML. Biarkan sebagai HTML?","Paste sebagai HTML","Jaga","Bersih","Sisipkan sebagai teks","Sisipkan hanya teks","Terdeteksi paste dari Word","Konten dipaste dari dokumen Microsoft Word/Excel. Apakah Anda ingin tetap menjaga format atau membersihkannya?","Penjelajah Berkas","Error ketika memuat list","Error ketika memuat folder","Apakah Anda yakin?","Masukkan nama Direktori","Buat direktori","ketik nama","Letakkan gambar","Letakkan berkas","atau klik","Teks alternatif","Jelajahi","Unggah","Latar Belakang","Teks","Atas","Tengah","Bawah","Sisipkan kolom sebelumnya","Sisipkan kolom setelahnya","Sisipkan baris di atasnya","Sisipkan baris di bawahnya","Hapus tabel","Hapus baris","Hapus kolom","Kosongkan cell","sumber","tebal","miring","sikat","tautan","batalkan","ulangi","tabel","gambar","penghapus","paragraf","ukuran font","video","font","tentang","cetak","simbol","garis bawah","coret","menjorok ke dalam","menjorok ke luar","ukuran penuh","menyusut","salin format","hr","ul","ol","potong","Pilih semua","Kode embed","Buka tautan","Edit tautan","No follow","Hapus tautan","Mata","pensil","Perbarui","URL","Edit","Perataan horizontal","Filter","Urutkan berdasarkan perubahan","Urutkan berdasarkan nama","Urutkan berdasarkan ukuran","Tambah folder","Reset","Simpan","Simpan sebagai...","Ubah ukuran","Crop","Lebar","Tinggi","Jaga aspek rasio","Ya","Tidak","Copot","Pilih","Karakter: %d","Kata: %d","Semua","Pilih %s","Pilih semua","Rata vertikal","Bagi","Bagi secara vertikal","Bagi secara horizontal","Gabungkan","Tambah kolom","tambah baris","Hapus","Bingkai","Lisensi: %s","Coret","Garis Bawah","Superskrip","Subskrip","Potong pilihan","Berhenti","Mencari","Ganti dengan","Ganti","Paste","Pilih konten untuk dipaste","Anda hanya dapat mengedit gambar Anda sendiri. Unduh gambar ini di host?","Gambar telah sukses diunggah ke host!","palet","Tidak ada berkas","ganti nama","Masukkan nama baru","pratinjau","Unduh","Paste dari clipboard","Browser anda tidak mendukung akses langsung ke clipboard.","Copy seleksi","copy","Border radius"]},(t,e)=>{t.exports.default=["Scrivi qualcosa...","A proposito di Jodit","Jodit Editor","Versione gratuita non commerciale","Licenza pubblica generale GNU, versione 2 o successiva","Guida utente di Jodit","contiene una guida dettagliata per l'uso.","Per informazioni sulla licenza, si prega di visitare il nostro sito:","Acquista la versione completa","Copyright © XDSoft.net - Chupurnov Valeriy. Alle Rechte vorbehalten.","Ancora","Apri in una nuova scheda","Apri l'editor a schermo intero","Formato chiaro","Riempi colore o lettera","Ripristina","Annulla","Grassetto","Corsivo","Inserisci lista non ordinata","Inserisci l'elenco ordinato","Allinea Centra","Allineare Giustificato","Allinea a Sinistra","Allinea a Destra","Inserisci la linea orizzontale","Inserisci immagine","Inserisci un file","Inserisci video Youtube/Vimeo","Inserisci il link","Dimensione del carattere","Tipo di font","Inserisci blocco","Normale","Heading 1","Heading 2","Heading 3","Heading 4","Citazione","Codice","Inserisci","Inserisci tabella","Riduci il rientro","Aumenta il rientro","Seleziona una funzione speciale","Inserisci un carattere speciale","Copia formato","Cambia modo","Margini","su","destra","giù","sinistra","Stili CSS","Classi CSS","Allinea","Destra","Centro","Sinistra","--Non Impostato--","Fonte","Titolo","Testo Alternativo","Link","Apri il link in una nuova scheda","Immagine","Archivio","Avanzato","Proprietà dell'immagine","Annulla","Accetta","Il codice è simile all'HTML. Mantieni come HTML?","Incolla come HTML?","Mantieni","Pulisci","Inserisci come testo","Inserisci solo il testo","Incollato da Word rilevato","Il contenuto incollato proviene da un documento Microsoft Word / Excel. Vuoi mantenere il formato o pulirlo?","Cerca il file","Errore durante il caricamento dell'elenco","Errore durante il caricamento delle cartelle","Sei sicuro?","Inserisci il nome della cartella","Crea cartella","Entre el nombre","Rilascia l'immagine","Rilascia file","o click","Testo alternativo","Sfoglia","Carica","Sfondo","Testo","Su","Centro","Sotto","Inserisci prima la colonna","Inserisci colonna dopo","Inserisci la riga sopra","Inserisci la riga sotto","Elimina tabella","Elimina riga","Elimina colonna","Cella vuota","HTML","Grassetto","Corsivo","Pennello","Link","Annulla","Ripristina","Tabella","Immagine","Gomma","Paragrafo","Dimensione del carattere","Video","Font","Approposito di","Stampa","Simbolo","Sottolineato","Barrato","trattino","annulla rientro","A grandezza normale","comprimere","Copia il formato","linea orizzontale","lista non ordinata","lista ordinata","Taglia","Seleziona tutto","Includi codice","Apri link","Modifica link","Non seguire","Togli link","Recensione","Per modificare","Aggiornare"," URL","Modifica","Allineamento orizzontale","Filtro","Ordina per data di modifica","Ordina per nome","Ordina per dimensione","Aggiungi cartella","Reset","Salva","Salva con nome...","Ridimensiona","Tagliare","Larghezza","Altezza","Mantenere le proporzioni","Si","No","Rimuovere","Seleziona","Caratteri: %d","Parole: %d","Tutto","Seleziona: %s","Seleziona tutto","Allineamento verticala","Dividere","Dividere verticalmente","Diviso orizzontale","Fondi","Aggiungi colonna","Aggiungi riga","Cancella","Bordo",null,"Barrato","Sottolineato","indice","deponente","Taglia la selezione","Pausa","Cerca","Sostituisci con","Sostituisci","Incolla","Seleziona il contenuto da incollare","Puoi modificare solo le tue immagini. Scarica questa immagine sul server?","L'immagine è stata caricata con successo sul server!","tavolozza","Non ci sono file in questa directory.","ungherese","Inserisci un nuovo nome","anteprima","Scaricare","Incolla dagli appunti","Il tuo browser non supporta l'accesso diretto agli appunti.","Selezione di copia","copia","Border radius"]},(t,e)=>{t.exports.default=["Begin met typen..","Over Jodit","Jodit Editor","Gratis niet-commerciële versie","GNU General Public License, versie 2 of hoger","Jodit gebruikershandleiding","bevat gedetailleerde informatie voor gebruik.","Voor informatie over de licentie, ga naar onze website:","Volledige versie kopen","Copyright © XDSoft.net - Chupurnov Valeriy. Alle rechten voorbehouden.","Anker","Open in nieuwe tab","Editor in volledig scherm openen","Opmaak verwijderen","Vulkleur of tekstkleur aanpassen","Opnieuw","Ongedaan maken","Vet","Cursief","Geordende list invoegen","Ongeordende lijst invoegen","Centreren","Uitlijnen op volledige breedte","Links uitlijnen","Rechts uitlijnen","Horizontale lijn invoegen","Afbeelding invoegen","Bestand invoegen","Youtube/Vimeo video invoegen","Link toevoegen","Tekstgrootte","Lettertype","Format blok invoegen","Normaal","Koptekst 1","Koptekst 2","Koptekst 3","Koptekst 4","Citaat","Code","Invoegen","Tabel invoegen","Inspringing verkleinen","Inspringing vergroten","Symbool selecteren","Symbool invoegen","Opmaak kopieren","Modus veranderen","Marges","Boven","Rechts","Onder","Links","CSS styles","CSS classes","Uitlijning","Rechts","Gecentreerd","Links","--Leeg--","Src","Titel","Alternatieve tekst","Link","Link in nieuwe tab openen","Afbeelding","Bestand","Geavanceerd","Afbeeldingseigenschappen","Annuleren","OK","Deze code lijkt op HTML. Als HTML behouden?","Invoegen als HTML","Origineel behouden","Opschonen","Als tekst invoegen","Als onopgemaakte tekst invoegen","Word-tekst gedetecteerd","De geplakte tekst is afkomstig van een Microsoft Word/Excel document. Wil je de opmaak behouden of opschonen?","Bestandsbrowser","Fout bij het laden van de lijst","Fout bij het laden van de mappenlijst","Weet je het zeker?","Geef de map een naam","Map aanmaken","Type naam","Sleep hier een afbeelding naartoe","Sleep hier een bestand naartoe","of klik","Alternatieve tekst","Bladeren","Uploaden","Achtergrond","Tekst","Boven","Midden","Onder","Kolom invoegen (voor)","Kolom invoegen (na)","Rij invoegen (boven)","Rij invoegen (onder)","Tabel verwijderen","Rij verwijderen","Kolom verwijderen","Cel leegmaken","Broncode","vet","cursief","kwast","link","ongedaan maken","opnieuw","tabel","afbeelding","gum","paragraaf","lettergrootte","video","lettertype","over","afdrukken","symbool","onderstreept","doorgestreept","inspringen","minder inspringen","volledige grootte","kleiner maken","opmaak kopiëren","horizontale lijn","lijst","genummerde lijst","knip","alles selecteren","Embed code","link openen","link aanpassen","niet volgen","link verwijderen","Recensie","Om te bewerken","Updaten"," URL","Bewerken","Horizontaal uitlijnen","Filteren","Sorteren op wijzigingsdatum","Sorteren op naam","Sorteren op grootte","Map toevoegen","Herstellen","Opslaan","Opslaan als ...","Grootte aanpassen","Bijknippen","Breedte","Hoogte","Verhouding behouden","Ja","Nee","Verwijderen","Selecteren","Tekens: %d","Woorden: %d","Alles","Selecteer: %s","Selecteer alles","Verticaal uitlijnen","Splitsen","Verticaal splitsen","Horizontaal splitsen","Samenvoegen","Kolom toevoegen","Rij toevoegen","Verwijderen","Rand",null,"Doorstrepen","Onderstrepen","Superscript","Subscript","Selectie knippen","Enter","Zoek naar","Vervangen door","Vervangen","Plakken","Kies content om te plakken","Je kunt alleen je eigen afbeeldingen aanpassen. Deze afbeelding downloaden?","De afbeelding is succesvol geüploadet!","Palette","Er zijn geen bestanden in deze map.","Hongaars","Voer een nieuwe naam in","voorvertoning","Download","Plakken van klembord","Uw browser ondersteunt geen directe toegang tot het klembord.","Selectie kopiëren","kopiëren","Border radius"]},(t,e)=>{t.exports.default=["Napisz coś","O Jodit","Edytor Jodit","Darmowa wersja nie komercyjna","GNU General Public License, wersja 2 lub późniejsza","Instrukcja Jodit","zawiera szczegółowe informacje dotyczące użytkowania.","Odwiedź naszą stronę, aby uzyskać więcej informacji na temat licencji:","Zakup pełnej wersji","Copyright © XDSoft.net - Chupurnov Valeriy. Wszystkie prawa zastrzeżone.","Kotwica","Otwórz w nowej zakładce","Otwórz edytor w pełnym rozmiarze","Wyczyść formatowanie","Kolor wypełnienia lub ustaw kolor tekstu","Ponów","Cofnij","Pogrubienie","Kursywa","Wstaw listę wypunktowaną","Wstaw listę numeryczną","Wyśrodkuj","Wyjustuj","Wyrównaj do lewej","Wyrównaj do prawej","Wstaw linię poziomą","Wstaw grafikę","Wstaw plik","Wstaw film Youtube/vimeo","Wstaw link","Rozmiar tekstu","Krój czcionki","Wstaw formatowanie","Normalne","Nagłówek 1","Nagłówek 2","Nagłówek 3","Nagłówek 4","Cytat","Kod","Wstaw","Wstaw tabelę","Zmniejsz wcięcie","Zwiększ wcięcie","Wybierz znak specjalny","Wstaw znak specjalny","Malarz formatów","Zmień tryb","Marginesy","Górny","Prawy","Dolny","Levy","Style CSS","Klasy CSS","Wyrównanie","Prawa","środek","Lewa","brak","Źródło","Tytuł","Tekst alternatywny","Link","Otwórz w nowej zakładce","Grafika","Plik","Zaawansowane","Właściwości grafiki","Anuluj","OK","Twój kod wygląda jak HTML. Zachować HTML?","Wkleić jako HTML?","Oryginalny tekst","Wyczyść","Wstaw jako tekst","Wstaw tylko treść","Wykryto tekst w formacie Word","Wklejany tekst pochodzi z dokumentu Microsoft Word/Excel. Chcesz zachować ten format czy wyczyścić go? ","Przeglądarka plików","Błąd ładowania listy plików","Błąd ładowania folderów","Czy jesteś pewien?","Wprowadź nazwę folderu","Utwórz folder","wprowadź nazwę","Upuść plik graficzny","Upuść plik","lub kliknij tu","Tekst alternatywny","Przeglądaj","Wczytaj","Tło","Treść","Góra","Środek","Dół","Wstaw kolumnę przed","Wstaw kolumnę po","Wstaw wiersz przed","Wstaw wiersz po","Usuń tabelę","Usuń wiersz","Usuń kolumnę","Wyczyść komórkę","HTML","pogrubienie","kursywa","pędzel","link","cofnij","ponów","tabela","grafika","wyczyść","akapit","rozmiar czcionki","wideo","czcionka","O programie","drukuj","symbol","podkreślenie","przekreślenie","wcięcie","wycięcie","pełen rozmiar","przytnij","format kopii","linia pozioma","lista","lista numerowana","wytnij","zaznacz wszystko","Wstaw kod","otwórz link","edytuj link","Atrybut no-follow","Usuń link","szukaj","edytuj","Aktualizuj","URL","Edytuj","Wyrównywanie w poziomie","Filtruj","Sortuj wg zmiany","Sortuj wg nazwy","Sortuj wg rozmiaru","Dodaj folder","wyczyść","zapisz","zapisz jako","Zmień rozmiar","Przytnij","Szerokość","Wysokość","Zachowaj proporcje","Tak","Nie","Usuń","Wybierz","Znaki: %d","Słowa: %d","Wszystko","Wybierz: %s","Wybierz wszystko","Wyrównywanie w pionie","Podziel","Podziel w pionie","Podziel w poziomie","Scal","Dodaj kolumnę","Dodaj wiersz","Usuń","Obramowanie",null,"Przekreślenie","Podkreślenie","indeks górny","index dolny","Wytnij zaznaczenie","Przerwa","Szukaj","Zamień na","Zamień","Wklej","Wybierz zawartość do wklejenia","Możesz edytować tylko swoje grafiki. Czy chcesz pobrać tą grafikę?","Grafika została pomyślnienie dodana na serwer","Paleta","Brak plików.","zmień nazwę","Wprowadź nową nazwę","podgląd","pobierz","Wklej ze schowka","Twoja przeglądarka nie obsługuje schowka","Kopiuj zaznaczenie","kopiuj","Zaokrąglenie krawędzi"]},(t,e)=>{t.exports.default=["Escreva algo...","Sobre o Jodit","Editor Jodit","Versão Gratuita não-comercial","Licença Pública GNU General, Versão 2 ou posterior","Guia de usuário Jodit","contém ajuda detalhada para o uso.","Para informação sobre a licença, por favor visite nosso site:","Compre a versão completa","Copyright © XDSoft.net - Chupurnov Valeriy. Todos os direitos reservados.","Link","Abrir em nova aba","Abrir editor em tela cheia","Limpar formatação","Cor de preenchimento ou cor do texto","Refazer","Desfazer","Negrito","Itálico","Inserir lista não ordenada","Inserir lista ordenada","Centralizar","Justificar","Alinhar à Esquerda","Alinhar à Direita","Inserir linha horizontal","Inserir imagem","Inserir arquivo","Inserir vídeo do Youtube/vimeo","Inserir link","Tamanho da letra","Fonte","Inserir bloco","Normal","Cabeçalho 1","Cabeçalho 2","Cabeçalho 3","Cabeçalho 4","Citação","Código","Inserir","Inserir tabela","Diminuir recuo","Aumentar recuo","Selecionar caractere especial","Inserir caractere especial","Copiar formato","Mudar modo","Margens","cima","direta","baixo","esquerda","Estilos CSS","Classes CSS","Alinhamento","Direita","Centro","Esquerda","--Não Estabelecido--","Fonte","Título","Texto Alternativo","Link","Abrir link em nova aba","Imagem","Arquivo","Avançado","Propriedades da imagem","Cancelar","Ok","Seu código é simular ao HTML. Manter como HTML?","Colar como HTML?","Manter","Limpar","Inserir como Texto","Inserir somente o Texto","Colado do Word Detectado","O conteúdo colado veio de um documento Microsoft Word/Excel. Você deseja manter o formato ou limpa-lo?","Procurar arquivo","Erro ao carregar a lista","Erro ao carregar as pastas","Você tem certeza?","Escreva o nome da pasta","Criar pasta","Escreva seu nome","Soltar imagem","Soltar arquivo","ou clique","Texto alternativo","Explorar","Upload","Fundo","Texto","Cima","Meio","Baixo","Inserir coluna antes","Inserir coluna depois","Inserir linha acima","Inserir linha abaixo","Excluir tabela","Excluir linha","Excluir coluna","Limpar célula","HTML","negrito","itálico","pincel","link","desfazer","refazer","tabela","imagem","apagar","parágrafo","tamanho da letra","vídeo","fonte","Sobre de","Imprimir","Símbolo","sublinhar","tachado","recuar","diminuir recuo","Tamanho completo","diminuir","Copiar formato","linha horizontal","lista não ordenada","lista ordenada","Cortar","Selecionar tudo","Incluir código","Abrir link","Editar link","Não siga","Remover link","Visualizar","Editar","Atualizar","URL","Editar","Alinhamento horizontal","filtrar","Ordenar por modificação","Ordenar por nome","Ordenar por tamanho","Adicionar pasta","Resetar","Salvar","Salvar como...","Redimensionar","Recortar","Largura","Altura","Manter a proporção","Sim","Não","Remover","Selecionar","Caracteres: %d","Palavras: %d","Tudo","Selecionar: %s","Selecionar tudo","Alinhamento vertical","Dividir","Dividir vertical","Dividir horizontal","Mesclar","Adicionar coluna","Adicionar linha","Excluir","Borda",null,"Tachado","Sublinhar","sobrescrito","subscrito","Cortar seleção","Pausa","Procurar por","Substituir com","Substituir","Colar","Escolher conteúdo para colar","Você só pode editar suas próprias imagens. Baixar essa imagem pro servidor?","A imagem foi enviada com sucesso para o servidor!","Palette","Não há arquivos nesse diretório.","Húngara","Digite um novo nome","preview","Baixar","Colar da área de transferência","O seu navegador não oferece suporte a acesso direto para a área de transferência.","Selecção de cópia","cópia","Border radius"]},(t,e)=>{t.exports.default=["Напишите что-либо","О Jodit","Редактор Jodit","Версия для не коммерческого использования","Стандартная общественная лицензия GNU (GPL), версия 2 или выше","Jodit Руководство пользователя","содержит детальную информацию по использованию","Для получения сведений о лицензии , пожалуйста, перейдите на наш сайт:","Купить полную версию","Авторские права © XDSoft.net - Чупурнов Валерий. Все права защищены.","Анкор","Открывать ссылку в новой вкладке","Открыть редактор в полном размере","Очистить форматирование","Цвет заливки или цвет текста","Повтор","Отмена","Жирный","Наклонный","Вставка маркированного списка","Вставить нумерованный список","Выровнять по центру","Выровнять по ширине","Выровнять по левому краю","Выровнять по правому краю","Вставить горизонтальную линию","Вставить изображение","Вставить файл","Вставьте видео","Вставить ссылку","Размер шрифта","Шрифт","Вставить блочный элемент","Нормальный текст","Заголовок 1","Заголовок 2","Заголовок 3","Заголовок 4","Цитата","Код","Вставить","Вставить таблицу","Уменьшить отступ","Увеличить отступ","Выберите специальный символ","Вставить специальный символ","Формат краски","Источник","Отступы","сверху","справа","снизу","слева","Стили","Классы","Выравнивание","По правому краю","По центру","По левому краю","--не устанавливать--","src","Заголовок","Альтернативный текст (alt)","Ссылка","Открывать ссылку в новом окне",null,"Файл","Расширенные","Свойства изображения","Отмена","Ок","Ваш текст, который вы пытаетесь вставить похож на HTML. Вставить его как HTML?","Вставить как HTML?","Сохранить оригинал","Почистить","Вставить как текст","Вставить только текст","Возможно это фрагмент Word или Excel","Контент который вы вставляете поступает из документа Microsoft Word / Excel. Вы хотите сохранить формат или очистить его?","Браузер файлов","Ошибка при загрузке списка изображений","Ошибка при загрузке списка директорий","Вы уверены?","Введите название директории","Создать директорию","введите название","Перетащите сюда изображение","Перетащите сюда файл","или нажмите","Альтернативный текст","Сервер","Загрузка","Фон","Текст"," К верху","По середине","К низу","Вставить столбец до","Вставить столбец после","Вставить ряд выше","Вставить ряд ниже","Удалить таблицу","Удалять ряд","Удалить столбец","Отчистить ячейку","HTML","жирный","курсив","заливка","ссылка","отменить","повторить","таблица","Изображение","очистить","параграф","размер шрифта","видео","шрифт","о редакторе","печать","символ","подчеркнутый","перечеркнутый","отступ","выступ","во весь экран","обычный размер","Копировать формат","линия","Список","Нумерованный список","Вырезать","Выделить все","Код","Открыть ссылку","Редактировать ссылку","Атрибут nofollow","Убрать ссылку","Просмотр","Редактировать","Обновить","URL","Редактировать","Горизонтальное выравнивание","Фильтр","По изменению","По имени","По размеру","Добавить папку","Восстановить","Сохранить","Сохранить как","Изменить размер","Обрезать размер","Ширина","Высота","Сохранять пропорции","Да","Нет","Удалить","Выделить","Символов: %d","Слов: %d","Выделить все","Выделить: %s","Выделить все","Вертикальное выравнивание","Разделить","Разделить по вертикали","Разделить по горизонтали","Объеденить в одну","Добавить столбец","Добавить строку","Удалить","Рамка","Лицензия: %s","Перечеркнуть","Подчеркивание","верхний индекс","индекс","Вырезать","Разделитель","Найти","Заменить на","Заменить","Вставить","Выбрать контент для вставки","Вы можете редактировать только свои собственные изображения. Загрузить это изображение на ваш сервер?","Изображение успешно загружено на сервер!","палитра","В данном каталоге нет файлов","Переименовать","Введите новое имя","Предпросмотр","Скачать","Вставить из буфера обмена","Ваш браузер не поддерживает прямой доступ к буферу обмена.","Скопировать выделенное","копия","Радиус границы"]},(t,e)=>{t.exports.default=["Bir şey yazın.","Jodit Hakkında","Jodit Editor","Ücretsiz, ticari olmayan versiyon","GNU General Public License, Versiyon 2 ve sonrası için","Jodit Kullanım Kılavuzu","kullanım için detaylı bilgiler içerir","Lisans hakkında bilgi için lütfen web sitemize gidin:","Tam versiyon satın al","Copyright © XDSoft.net - Chupurnov Valeriy. Tüm Hakları Saklıdır","Bağlantı","Yeni sekmede aç","Tam ekran editör","Stili temizle","Dolgu ve yazı rengi seç","İleri Al","Geri Al","Kalın","İtalik","Sırasız Liste Ekle","Sıralı Liste Ekle","Ortala","Kenarlara Yasla","Sola Yasla","Sağa Yasla","Yatay Çizgi Ekle","Resim Ekle","Dosya Ekle","Youtube/vimeo Videosu Ekle","Bağlantı Ekle","Font Boyutu","Font Ailesi","Blok Ekle","Normal","Başlık 1","Başlık 2","Başlık 3","Başlık 4","Alıntı","Code","Ekle","Tablo Ekle","Girintiyi Azalt","Girintiyi Arttır","Özel Karakter Seç","Özel Karakter Ekle","Resim Biçimi","Mod Değiştir","MEsafeler","Üst","Sağ","Alt","Sol","CSS Stilleri","CSS Sınıfları","Hizalama","Sağ","Ortalı","Sol","Belirlenmedi","Kaynak","Başlık","Alternatif Yazı","Link","Bağlantıyı yeni sekmede aç","Resim","Dosya","Gelişmiş","Resim özellikleri","İptal","Tamam","Kodunuz HTML koduna benziyor. HTML olarak devam etmek ister misiniz?","HTML olarak yapıştır","Sakla","Temizle","Yazı olarak ekle","Nur Text einfügen","Word biçiminde yapıştırma algılandı","Der Inhalt, den Sie einfügen, stammt aus einem Microsoft Word / Excel-Dokument. Möchten Sie das Format erhalten oder löschen?","Dosya Gezgini","Liste yüklenirken hata oluştu","Klasörler yüklenirken hata oluştur","Emin misiniz?","Dizin yolu giriniz","Dizin oluştur","Typname","Resim bırak","Dosya bırak","veya tıkla","Alternatif yazı","Ekle","Yükle","Arka plan","Yazı","Üst","Orta","Aşağı","Öncesine kolon ekle","Sonrasına kolon ekle","Üstüne satır ekle","Altına satır ekle","Tabloyu sil","Satır sil","Kolon sil","Hücreyi boşalt","Kaynak","Kalın","italik","Fırça","Bağlantı","Geri al","İleri al","Tablo","Resim","Silgi","Paragraf","Font boyutu","Video","Font","Hakkında","Yazdır","Sembol","Alt çizgi","Üstü çizili","Girinti","Çıkıntı","Tam ekran","Küçült","Kopyalama Biçimi","Ayraç","Sırasız liste","Sıralı liste","Kes","Tümünü seç","Kod ekle","Bağlantıyı aç","Bağlantıyı düzenle","Nofollow özelliği","Bağlantıyı kaldır","Yorumu","Düzenlemek için","Güncelle","URL","Düzenle","Yatay hizalama","Filtre","Değişime göre sırala","İsme göre sırala","Boyuta göre sırala","Klasör ekle","Sıfırla","Kaydet","Farklı kaydet","Boyutlandır","Kırp","Genişlik","Yükseklik","En boy oranını koru","Evet","Hayır","Sil","Seç","Harfler: %d","Kelimeler: %d","Tümü","Seç: %s","Tümünü seç","Dikey hizalama","Ayır","Dikey ayır","Yatay ayır","Birleştir","Kolon ekle","Satır ekle","Sil","Kenarlık",null,"Durchschlagen","Alt çizgi","Üst yazı","Alt yazı","Seçilimi kes","Durdur","Ara","Şununla değiştir","Değiştir","Yapıştır","Yapıştırılacak içerik seç","Sadece kendi resimlerinizi düzenleyebilirsiniz. Bu görseli kendi hostunuza indirmek ister misiniz?","Görsel başarıyla hostunuza yüklendi","Palette","Bu dizinde dosya yok.","Macarca","Yeni isim girin","Ön izleme","İndir","Panodan yapıştır ","Tarayıcınız pano doğrudan erişim desteklemiyor.","Kopya seçimi","kopya","Sınır yarıçapı"]},(t,e)=>{t.exports.default=["输入一些内容","关于Jodit","Jodit Editor","Free Non-commercial Version","GNU General Public License, version 2 or later","开发者指南","使用帮助","有关许可证的信息，请访问我们的网站：","购买完整版本","Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.","Anchor","在新窗口打开","全屏编辑","清除样式","颜色","重做","撤销","粗体","斜体","符号列表","编号","居中","对齐文本","左对齐","右对齐","分割线","图片","文件","youtube/vimeo 视频","链接","字号","字体","格式块","文本","标题1","标题2","标题3","标题4","引用","代码","插入","表格","减少缩进","增加缩进","选择特殊符号","特殊符号","格式复制","改变模式","外边距（Margins）","top","right","bottom","left","样式","Classes","对齐方式","居右","居中","居左","无","Src","Title","Alternative","Link","在新窗口打开链接","图片","file","高级","图片属性","取消","确定","你粘贴的文本是一段html代码，是否保留源格式","html粘贴","保留源格式","匹配目标格式","把html代码视为普通文本","只保留文本","文本粘贴","正在粘贴 Word/Excel 的文本，是否保留源格式？","文件管理","加载list错误","加载folders错误","你确定吗？","输入路径","创建路径","type name","拖动图片到此","拖动文件到此","或点击","Alternative text","浏览","上传","背景色","文字","顶部","中间","底部","在之前插入列","在之后插入列","在之前插入行","在之后插入行","删除表格","删除行","删除列","清除内容","源码","粗体","斜体","颜色","链接","撤销","重做","表格","图片","橡皮擦","段落","字号","视频","字体","关于","打印","符号","下划线","上出现","增加缩进","减少缩进","全屏","收缩","复制格式","分割线","无序列表","顺序列表","剪切","全选","嵌入代码","打开链接","编辑链接","No follow","Unlink","回顧","铅笔","更新","URL",null,"水平对齐","筛选","修改时间排序","名称排序","大小排序","新建文件夹","重置","保存","保存为","调整大小","Crop","宽","高","保存长宽比","是","不","移除","选择","字符数: %d","单词数: %d","全部","选择: %s","全选","垂直对齐","拆分","垂直拆分","水平拆分","合并","添加列","添加行","删除","边框",null,"删除线","下划线","上标","下标","剪切","Pause","查找","替换为","替换","粘贴","选择内容并粘贴","你只能编辑你自己的图片。Download this image on the host?","图片上传成功","调色板","此目录中沒有文件。","重命名","输入新名称","预览","下载","粘贴从剪贴板","你浏览器不支持直接访问的剪贴板。","复制的选择","复制","边界半径"]},(t,e)=>{t.exports.default=["輸入一些內容","關於Jodit","Jodit Editor","Free Non-commercial Version","GNU General Public License, version 2 or later","開發者指南","使用幫助","有關許可證的信息，請訪問我們的網站：","購買完整版本","Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.","Anchor","在新窗口打開","全屏編輯","清除樣式","顏色","重做","撤銷","粗體","斜體","符號列表","編號","居中","對齊文本","左對齊","右對齊","分割線","圖片","文件","youtube/vimeo 影片","鏈接","字號","字體","格式塊","文本","標題1","標題2","標題3","標題4","引用","代碼","插入","表格","減少縮進","增加縮進","選擇特殊符號","特殊符號","格式複製","改變模式","外邊距（Margins）","top","right","bottom","left","樣式","Classes","對齊方式","居右","居中","居左","無","Src","Title","Alternative","Link","在新窗口打開鏈接","圖片","file","高級","圖片屬性","取消","確定","你黏貼的文本是一段html代碼，是否保留源格式","html黏貼","保留源格式","匹配目標格式","把html代碼視為普通文本","只保留文本","文本黏貼","正在黏貼 Word/Excel 的文本，是否保留源格式？","文件管理","加載list錯誤","加載folders錯誤","你確定嗎？","輸入路徑","創建路徑","type name","拖動圖片到此","拖動文件到此","或點擊","Alternative text","瀏覽","上傳","背景色","文字","頂部","中間","底部","在之前插入列","在之後插入列","在之前插入行","在之後插入行","刪除表格","刪除行","刪除列","清除內容","源碼","粗體","斜體","顏色","鏈接","撤銷","重做","表格","圖片","橡皮擦","段落","字號","影片","字體","關於","打印","符號","下劃線","上出現","增加縮進","減少縮進","全屏","收縮","複製格式","分割線","無序列表","順序列表","剪切","全選","嵌入代碼","打開鏈接","編輯鏈接","No follow","Unlink","回顧","鉛筆","更新","URL",null,"水平對齊","篩選","修改時間排序","名稱排序","大小排序","新建文件夾","重置","保存","保存為","調整大小","Crop","寬","高","保存長寬比","是","不","移除","選擇","字符數: %d","單詞數: %d","全部","選擇: %s","全選","垂直對齊","拆分","垂直拆分","水平拆分","合併","添加列","添加行","刪除","邊框",null,"刪除線","下劃線","上標","下標","剪切","Pause","查找","替換為","替換","黏貼","選擇內容並黏貼","妳只能編輯妳自己的圖片。Download this image on the host?","圖片上傳成功","調色板","此目錄中沒有文件。","重命名","輸入新名稱","預覽","下載","วางจากคลิปบอร์ด","ของเบราว์เซอร์ไม่สนับสนุนโดยตรงเข้าไปยังคลิปบอร์ด","คัดลอกส่วนที่เลือก","คัดลอก","เส้นขอบรัศมี"]},(t,e,i)=>{t.exports=i(97)},(t,e,i)=>{},function(t,e,i){"use strict";i.r(e);var o={};i.r(o),i.d(o,"INVISIBLE_SPACE",()=>l),i.d(o,"INVISIBLE_SPACE_REG_EXP",()=>d),i.d(o,"INVISIBLE_SPACE_REG_EXP_END",()=>c),i.d(o,"INVISIBLE_SPACE_REG_EXP_START",()=>h),i.d(o,"SPACE_REG_EXP",()=>p),i.d(o,"SPACE_REG_EXP_START",()=>u),i.d(o,"SPACE_REG_EXP_END",()=>f),i.d(o,"IS_BLOCK",()=>m),i.d(o,"IS_INLINE",()=>g),i.d(o,"MAY_BE_REMOVED_WITH_KEY",()=>v),i.d(o,"KEY_BACKSPACE",()=>b),i.d(o,"KEY_TAB",()=>y),i.d(o,"KEY_ENTER",()=>w),i.d(o,"KEY_ESC",()=>_),i.d(o,"KEY_LEFT",()=>k),i.d(o,"KEY_UP",()=>j),i.d(o,"KEY_RIGHT",()=>x),i.d(o,"KEY_DOWN",()=>C),i.d(o,"KEY_DELETE",()=>z),i.d(o,"KEY_F",()=>E),i.d(o,"KEY_R",()=>T),i.d(o,"KEY_H",()=>S),i.d(o,"KEY_Y",()=>q),i.d(o,"KEY_V",()=>L),i.d(o,"KEY_Z",()=>N),i.d(o,"KEY_F3",()=>M),i.d(o,"NEARBY",()=>A),i.d(o,"ACCURACY",()=>I),i.d(o,"COMMAND_KEYS",()=>D),i.d(o,"BR",()=>R),i.d(o,"PARAGRAPH",()=>B),i.d(o,"MODE_WYSIWYG",()=>P),i.d(o,"MODE_SOURCE",()=>H),i.d(o,"MODE_SPLIT",()=>O),i.d(o,"IS_IE",()=>W),i.d(o,"URL_LIST",()=>F),i.d(o,"TEXT_PLAIN",()=>V),i.d(o,"TEXT_HTML",()=>$),i.d(o,"MARKER_CLASS",()=>U),i.d(o,"EMULATE_DBLCLICK_TIMEOUT",()=>K),i.d(o,"JODIT_SELECTED_CELL_MARKER",()=>X),i.d(o,"INSERT_AS_HTML",()=>Y),i.d(o,"INSERT_CLEAR_HTML",()=>G),i.d(o,"INSERT_AS_TEXT",()=>J),i.d(o,"INSERT_ONLY_TEXT",()=>Z),i.d(o,"IS_MAC",()=>Q),i.d(o,"KEY_ALIASES",()=>tt),i.d(o,"BASE_PATH",()=>et);var s={};i.r(s),i.d(s,"extend",()=>gt),i.d(s,"JoditArray",()=>dt),i.d(s,"JoditObject",()=>lt),i.d(s,"asArray",()=>it),i.d(s,"inArray",()=>ot),i.d(s,"splitArray",()=>st),i.d(s,"setTimeout",()=>nt),i.d(s,"isJoditObject",()=>Ct),i.d(s,"isNumeric",()=>jt),i.d(s,"isPlainObject",()=>mt),i.d(s,"isURL",()=>Tt),i.d(s,"isValidName",()=>St),i.d(s,"isWindow",()=>ft),i.d(s,"normilizeCSSValue",()=>te),i.d(s,"camelCase",()=>Dt),i.d(s,"fromCamelCase",()=>Rt),i.d(s,"appendScript",()=>le),i.d(s,"appendScriptAsync",()=>de),i.d(s,"appendStyleAsync",()=>ce),i.d(s,"browser",()=>he),i.d(s,"convertMediaURLToVideoEmbed",()=>ue),i.d(s,"css",()=>fe),i.d(s,"clearCenterAlign",()=>me),i.d(s,"ctrlKey",()=>ge),i.d(s,"dataBind",()=>ve),i.d(s,"defaultLanguage",()=>Ht),i.d(s,"each",()=>be),i.d(s,"completeUrl",()=>ne),i.d(s,"humanSizeToBytes",()=>ye),i.d(s,"parseQuery",()=>pe),i.d(s,"buildQuery",()=>we),i.d(s,"inView",()=>_e),i.d(s,"scrollIntoView",()=>ke),i.d(s,"$$",()=>Mt),i.d(s,"getXPathByElement",()=>At),i.d(s,"hasOwn",()=>pt),i.d(s,"type",()=>ut),i.d(s,"val",()=>je),i.d(s,"debounce",()=>rt),i.d(s,"throttle",()=>at),i.d(s,"hasBrowserColorPicker",()=>vt),i.d(s,"isFunction",()=>bt),i.d(s,"isHTML",()=>yt),i.d(s,"isHTMLFromWord",()=>wt),i.d(s,"isInitable",()=>_t),i.d(s,"isDestructable",()=>kt),i.d(s,"isInt",()=>xt),i.d(s,"isLicense",()=>zt),i.d(s,"isString",()=>Et),i.d(s,"hexToRgb",()=>qt),i.d(s,"colorToHex",()=>Lt),i.d(s,"applyStyles",()=>It),i.d(s,"cleanFromWord",()=>Ft),i.d(s,"clear",()=>Vt),i.d(s,"htmlspecialchars",()=>$t),i.d(s,"stripTags",()=>Ut),i.d(s,"normalizeKeyAliases",()=>Kt),i.d(s,"normalizeLicense",()=>Xt),i.d(s,"normalizeNode",()=>Yt),i.d(s,"normalizePath",()=>Gt),i.d(s,"normalizeRelativePath",()=>Jt),i.d(s,"normalizeSize",()=>Zt),i.d(s,"normalizeURL",()=>Qt),i.d(s,"normalizeColor",()=>ee),i.d(s,"getContentWidth",()=>ie),i.d(s,"innerWidth",()=>oe),i.d(s,"offset",()=>se),i.d(s,"trim",()=>Bt),i.d(s,"ucfirst",()=>Pt),i.d(s,"sprintf",()=>Ot),i.d(s,"i18n",()=>Wt);var n={};i.r(n),i.d(n,"addNewLine",()=>Xi),i.d(n,"autofocus",()=>Yi),i.d(n,"backspace",()=>Gi),i.d(n,"bold",()=>Ji),i.d(n,"cleanHtml",()=>Zi),i.d(n,"clipboard",()=>(class{init(t){t.events.on(`copy.${io} cut.${io}`,e=>{var i,o;const s=t.selection.getHTML(),n=to(e)||to(t.editorWindow)||to(e.originalEvent);n&&(n.setData(V,Ut(s)),n.setData($,s)),t.buffer.set(io,s),"cut"===e.type&&(t.selection.remove(),t.selection.focus()),e.preventDefault(),null===(o=null===(i=t)||void 0===i?void 0:i.events)||void 0===o||o.fire("afterCopy",s)})}destruct(t){var e,i,o,s;null===(i=null===(e=t)||void 0===e?void 0:e.buffer)||void 0===i||i.set(io,""),null===(s=null===(o=t)||void 0===o?void 0:o.events)||void 0===s||s.off("."+io)}})),i.d(n,"paste",()=>eo),i.d(n,"pasteStorage",()=>so),i.d(n,"color",()=>co),i.d(n,"DragAndDrop",()=>ho),i.d(n,"DragAndDropElement",()=>po),i.d(n,"enter",()=>fo),i.d(n,"errorMessages",()=>mo),i.d(n,"font",()=>go),i.d(n,"formatBlock",()=>vo),i.d(n,"fullsize",()=>bo),i.d(n,"hotkeys",()=>yo),i.d(n,"iframe",()=>wo),i.d(n,"imageProcessor",()=>ko),i.d(n,"imageProperties",()=>Co),i.d(n,"indent",()=>zo),i.d(n,"inlinePopup",()=>qo),i.d(n,"justify",()=>Lo),i.d(n,"limit",()=>No),i.d(n,"link",()=>Mo),i.d(n,"media",()=>Ao),i.d(n,"mobile",()=>Io),i.d(n,"orderedlist",()=>Do),i.d(n,"placeholder",()=>Ro),i.d(n,"redoundo",()=>Bo),i.d(n,"resizer",()=>Po),i.d(n,"search",()=>Ho),i.d(n,"size",()=>Oo),i.d(n,"source",()=>Wo),i.d(n,"stat",()=>Fo),i.d(n,"sticky",()=>Vo),i.d(n,"symbols",()=>(class{constructor(t){this.countInRow=17,t.events.on("generateSpecialCharactersTable.symbols",()=>{const e=t.create.fromHTML('<div class="jodit_symbols-container"><div class="jodit_symbols-container_table"><table><tbody></tbody></table></div><div class="jodit_symbols-container_preview"><div class="jodit_symbols-preview"></div></div></div>'),i=e.querySelector(".jodit_symbols-preview"),o=e.querySelector("table").tBodies[0],s=[];for(let e=0;t.options.specialCharacters.length>e;){const i=t.create.element("tr");for(let o=0;this.countInRow>o&&t.options.specialCharacters.length>e;o+=1,e+=1){const n=t.create.element("td"),r=t.create.fromHTML(`<a\n                                    data-index="${e}"\n                                    data-index-j="${o}"\n                                    href="javascript:void(0)"\n                                    role="option"\n                                    tabindex="-1"\n                                >${t.options.specialCharacters[e]}</a>`);s.push(r),n.appendChild(r),i.appendChild(n)}o.appendChild(i)}const n=this;return t.events.on(s,"focus",(function(){i.innerHTML=this.innerHTML})).on(s,"mousedown",(function(e){this&&"A"===this.nodeName&&(t.selection.focus(),t.selection.insertHTML(this.innerHTML),t.events.fire(this,"close_dialog"),e&&e.preventDefault(),e&&e.stopImmediatePropagation())})).on(s,"mouseenter",(function(){this&&"A"===this.nodeName&&this.focus()})).on(s,"keydown",e=>{const i=e.target;if(i&&"A"===i.nodeName){const o=parseInt(i.getAttribute("data-index")||"0",10),r=parseInt(i.getAttribute("data-index-j")||"0",10);let a;switch(e.which){case j:case C:a=e.which===j?o-n.countInRow:o+n.countInRow,void 0===s[a]&&(a=e.which===j?Math.floor(s.length/n.countInRow)*n.countInRow+r:r,a>s.length-1&&(a-=n.countInRow)),s[a]&&s[a].focus();break;case x:case k:a=e.which===k?o-1:o+1,void 0===s[a]&&(a=e.which===k?s.length-1:0),s[a]&&s[a].focus();break;case w:t.events.fire(i,"mousedown"),e.stopImmediatePropagation(),e.preventDefault()}}}),e})}})),i.d(n,"tableKeyboardNavigation",()=>$o),i.d(n,"table",()=>Uo),i.d(n,"xpath",()=>Ko);var r={};i.r(r),i.d(r,"Ajax",()=>Ui),i.d(r,"EventsNative",()=>Ue),i.d(r,"Component",()=>Ne),i.d(r,"ContextMenu",()=>Ki),i.d(r,"Alert",()=>Yo),i.d(r,"Confirm",()=>Jo),i.d(r,"Promt",()=>Go),i.d(r,"Dialog",()=>Xo),i.d(r,"Dom",()=>xe),i.d(r,"Plugin",()=>oo),i.d(r,"Create",()=>Ke),i.d(r,"FileBrowser",()=>cs),i.d(r,"Helpers",()=>s),i.d(r,"ImageEditor",()=>us),i.d(r,"Observer",()=>De),i.d(r,"Select",()=>Re),i.d(r,"Storage",()=>Fe),i.d(r,"Snapshot",()=>Me),i.d(r,"Table",()=>Eo),i.d(r,"ToolbarIcon",()=>Ce),i.d(r,"JoditToolbarCollection",()=>si),i.d(r,"ToolbarCollection",()=>oi),i.d(r,"ToolbarButton",()=>ei),i.d(r,"Stack",()=>Ae),i.d(r,"Widget",()=>ze),i.d(r,"Uploader",()=>fs),i.d(r,"PluginSystem",()=>ri);var a={};i.r(a),i.d(a,"about",()=>ms),i.d(a,"addcolumn",()=>gs),i.d(a,"addrow",()=>vs),i.d(a,"angle_down",()=>bs),i.d(a,"angle_left",()=>ys),i.d(a,"angle_right",()=>ws),i.d(a,"angle_up",()=>_s),i.d(a,"arrows_alt",()=>ks),i.d(a,"arrows_h",()=>js),i.d(a,"attachment",()=>xs),i.d(a,"bin",()=>Cs),i.d(a,"bold",()=>zs),i.d(a,"brush",()=>Es),i.d(a,"cancel",()=>Ts),i.d(a,"center",()=>Ss),i.d(a,"chain_broken",()=>qs),i.d(a,"check",()=>Ls),i.d(a,"check_square",()=>Ns),i.d(a,"copyformat",()=>Ms),i.d(a,"copy",()=>Is),i.d(a,"crop",()=>As),i.d(a,"cut",()=>Ds),i.d(a,"dedent",()=>Rs),i.d(a,"dots",()=>Bs),i.d(a,"dropdown_arrow",()=>Ps),i.d(a,"enter",()=>Hs),i.d(a,"eraser",()=>Os),i.d(a,"eye",()=>Ws),i.d(a,"file",()=>Fs),i.d(a,"folder",()=>Vs),i.d(a,"font",()=>$s),i.d(a,"fontsize",()=>Us),i.d(a,"fullsize",()=>Ks),i.d(a,"hr",()=>Xs),i.d(a,"image",()=>Ys),i.d(a,"indent",()=>Gs),i.d(a,"info_circle",()=>Js),i.d(a,"italic",()=>Zs),i.d(a,"justify",()=>Qs),i.d(a,"left",()=>tn),i.d(a,"link",()=>en),i.d(a,"lock",()=>on),i.d(a,"menu",()=>sn),i.d(a,"merge",()=>nn),i.d(a,"ol",()=>rn),i.d(a,"omega",()=>an),i.d(a,"outdent",()=>ln),i.d(a,"palette",()=>dn),i.d(a,"paragraph",()=>cn),i.d(a,"paste",()=>hn),i.d(a,"pencil",()=>pn),i.d(a,"plus",()=>un),i.d(a,"print",()=>fn),i.d(a,"redo",()=>mn),i.d(a,"resize",()=>gn),i.d(a,"resizer",()=>vn),i.d(a,"right",()=>bn),i.d(a,"save",()=>yn),i.d(a,"select_all",()=>wn),i.d(a,"shrink",()=>_n),i.d(a,"source",()=>kn),i.d(a,"splitg",()=>jn),i.d(a,"splitv",()=>xn),i.d(a,"strikethrough",()=>Cn),i.d(a,"subscript",()=>zn),i.d(a,"superscript",()=>En),i.d(a,"table",()=>Tn),i.d(a,"th",()=>Sn),i.d(a,"th_list",()=>qn),i.d(a,"ul",()=>Ln),i.d(a,"underline",()=>Nn),i.d(a,"undo",()=>Mn),i.d(a,"unlink",()=>An),i.d(a,"unlock",()=>In),i.d(a,"update",()=>Dn),i.d(a,"upload",()=>Rn),i.d(a,"valign",()=>Bn),i.d(a,"video",()=>Pn),i(96);const l="\ufeff",d=/[\uFEFF]/g,c=/[\uFEFF]+$/g,h=/^[\uFEFF]+/g,p=/[\s\n\t\r\uFEFF\u200b]+/g,u=/^[\s\n\t\r\uFEFF\u200b]+/g,f=/[\s\n\t\r\uFEFF\u200b]+$/g,m=/^(PRE|DIV|P|LI|H[1-6]|BLOCKQUOTE|TD|TH|TABLE|BODY|HTML|FIGCAPTION|FIGURE|DT|DD)$/i,g=/^(STRONG|SPAN|I|EM|B|SUP|SUB)$/,v=/^(IMG|BR|IFRAME|SCRIPT|INPUT|TEXTAREA|HR|JODIT|JODIT-MEDIA)$/,b=8,y=9,w=13,_=27,k=37,j=38,x=39,C=40,z=46,E=70,T=82,S=72,q=89,L=86,N=90,M=114,A=5,I=10,D=[b,z,j,C,x,k,w,_,M,y],R="br",B="p",P=1,H=2,O=3,W="undefined"!=typeof navigator&&(-1!==navigator.userAgent.indexOf("MSIE")||/rv:11.0/i.test(navigator.userAgent)),F=W?"url":"text/uri-list",V=W?"text":"text/plain",$=W?"text":"text/html",U="jodit_selection_marker",K=300,X="data-jodit-selected-cell",Y="insert_as_html",G="insert_clear_html",J="insert_as_text",Z="insert_only_text",Q="undefined"!=typeof window&&/Mac|iPod|iPhone|iPad/.test(window.navigator.platform),tt={add:"+",break:"pause",cmd:"meta",command:"meta",ctl:"control",ctrl:"control",del:"delete",down:"arrowdown",esc:"escape",ins:"insert",left:"arrowleft",mod:Q?"meta":"control",opt:"alt",option:"alt",return:"enter",right:"arrowright",space:" ",spacebar:" ",up:"arrowup",win:"meta",windows:"meta"},et=(()=>{if("undefined"==typeof document)return"";const t=document.currentScript,e=t=>t.replace(/\/[^\/]+.js$/,"/");if(t)return e(t.src);const i=document.querySelectorAll("script[src]");return i&&i.length?e(i[i.length-1].src):window.location.href})(),it=t=>Array.isArray(t)?t:[t],ot=(t,e)=>-1!==e.indexOf(t),st=t=>"string"==typeof t?t.split(/[,\s]+/):t,nt=(t,e,i,o,s)=>e?window.setTimeout.call(window,t,e,i,o,s):(t.call(null,i,o,s),0),rt=function(t,e,i,o){3===arguments.length&&"boolean"!=typeof i&&(o=i,i=!1);let s=0;return function(){const n=arguments,r=o||this;(i&&!s||!e)&&t.apply(r,n),e&&(clearTimeout(s),s=nt(()=>{i||t.apply(r,n),s=0},e))}},at=(t,e,i)=>{let o,s,n,r=null;return function(){o=arguments,s=!0;const a=i||this;e?r||(n=()=>{s?(t.apply(a,o),s=!1,r=nt(n,e)):r=null},n()):t.apply(a,o)}};class lt{constructor(t){gt(!0,this,t)}}class dt{constructor(t){this.length=0,gt(!0,this,t),this.length=t.length;const e=Array.prototype;["map","forEach","reduce","push","pop","shift","unshift","slice","splice"].forEach(t=>{this[t]=e[t]})}toString(){const t=[];for(let e=0;this.length>e;e+=1)t[e]=this[e];return""+t}}const ct={},ht=ct.toString,pt=ct.hasOwnProperty;["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error","Symbol","HTMLDocument","Window","HTMLElement","HTMLBodyElement","Text","DocumentFragment","DOMStringList","HTMLCollection"].forEach(t=>{ct["[object "+t+"]"]=t.toLowerCase()});const ut=t=>null===t?"null":"object"==typeof t||"function"==typeof t?ct[ht.call(t)]||"object":typeof t,ft=t=>null!==t&&t===t.window,mt=t=>!("object"!=typeof t||t.nodeType||ft(t)||t.constructor&&!pt.call(t.constructor.prototype,"isPrototypeOf"));function gt(...t){const e=t.length;let i,o,s,n,r,a,l,d,c=t[0]||{},h=1,p=!1;for("boolean"==typeof c&&(p=c,c=t[h]||{},h+=1),"object"!=typeof c&&"function"===ut(c)&&(c={}),h===e&&(c=this,h+=1);e>h;h+=1)if(i=t[h],null!=i)for(d=Object.keys(i),l=0;d.length>l;l+=1)o=d[l],s=c[o],n=i[o],c!==n&&(p&&n&&(mt(n)&&!(n instanceof lt)||Array.isArray(n)&&!(n instanceof dt))?(r=Array.isArray(n),r?(r=!1,a=s&&Array.isArray(s)?s:[]):a=s&&mt(s)?s:{},c[o]=gt(p,a,n)):void 0!==n&&(c[o]=n));return c}const vt=()=>{let t=!0;try{const e=document.createElement("input");e.type="color",t="color"===e.type&&"number"!=typeof e.selectionStart}catch(e){t=!1}return t},bt=t=>"function"==typeof t,yt=t=>/<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/m.test(t),wt=t=>-1!==t.search(/<meta.*?Microsoft Excel\s[\d].*?>/)||-1!==t.search(/<meta.*?Microsoft Word\s[\d].*?>/)||-1!==t.search(/style="[^"]*mso-/)&&-1!==t.search(/<font/),_t=t=>t&&bt(t.init),kt=t=>t&&bt(t.destruct),jt=t=>{if("string"==typeof t){if(!t.match(/^([+\-])?[0-9]+(\.?)([0-9]+)?(e[0-9]+)?$/))return!1;t=parseFloat(t)}return!isNaN(t)&&isFinite(t)},xt=t=>("string"==typeof t&&jt(t)&&(t=parseFloat(t)),"number"==typeof t&&Number.isFinite(t)&&!(t%1)),Ct=t=>!!(t&&t instanceof Object&&"function"==typeof t.constructor&&(t instanceof li||t.isJodit)),zt=t=>"string"==typeof t&&32===t.length&&/^[a-z0-9]+$/.test(t),Et=t=>"string"==typeof t,Tt=t=>/^(https?:\/\/)((([a-z\d]([a-z\d-]*[a-z\d])*)\.?)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(t),St=t=>!!t.length&&!/[^0-9A-Za-zа-яА-ЯЁё\w\-_\.]/.test(t),qt=t=>{t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(t,e,i,o)=>e+e+i+i+o+o);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null},Lt=t=>{if("rgba(0, 0, 0, 0)"===t||""===t)return!1;if(!t)return"#000000";if("#"===t.substr(0,1))return t;const e=/([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(t)||/([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(t);let i,o,s,n,r;if(!e)return"#000000";for(o=parseInt(e[2],10),s=parseInt(e[3],10),n=parseInt(e[4],10),r=n|s<<8|o<<16,i=r.toString(16).toUpperCase();6>i.length;)i="0"+i;return e[1]+"#"+i};let Nt=1;const Mt=(t,e)=>{let i;if(!/:scope/.test(t)||!W||e&&e.nodeType===Node.DOCUMENT_NODE)i=e.querySelectorAll(t);else{const o=e.id,s=o||"_selector_id_"+(""+Math.random()).slice(2)+Nt++;t=t.replace(/:scope/g,"#"+s),!o&&e.setAttribute("id",s),i=e.parentNode.querySelectorAll(t),o||e.removeAttribute("id")}return[].slice.call(i)},At=(t,e)=>{if(!t||1!==t.nodeType)return"";if(!t.parentNode||e===t)return"";if(t.id)return"//*[@id='"+t.id+"']";const i=[].filter.call(t.parentNode.childNodes,e=>e.nodeName===t.nodeName);return At(t.parentNode,e)+"/"+t.nodeName.toLowerCase()+(i.length>1?"["+(Array.from(i).indexOf(t)+1)+"]":"")},It=t=>{if(-1===t.indexOf("<html "))return t;t=(t=t.substring(t.indexOf("<html "),t.length)).substring(0,t.lastIndexOf("</html>")+7);const e=document.createElement("iframe");e.style.display="none",document.body.appendChild(e);let i="",o=[],s=[];try{const n=e.contentDocument||(e.contentWindow?e.contentWindow.document:null);if(n){n.open(),n.write(t),n.close(),n.styleSheets.length&&(s=n.styleSheets[n.styleSheets.length-1].cssRules);for(let t=0;s.length>t;t+=1)""!==s[t].selectorText&&(o=Mt(s[t].selectorText,n.body),o.forEach(e=>{e.style.cssText=s[t].style.cssText.replace(/mso-[a-z\-]+:[\s]*[^;]+;/g,"").replace(/border[a-z\-]*:[\s]*[^;]+;/g,"")+e.style.cssText}));i=n.firstChild?n.body.innerHTML:""}}catch(t){}finally{xe.safeRemove(e)}return i&&(t=i),t.replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g,"").replace(/<!--[^>]*>/g,"")},Dt=t=>t.replace(/([-_])(.)/g,(t,e,i)=>i.toUpperCase()),Rt=t=>t.replace(/([A-Z]+)/g,(t,e)=>"-"+e.toLowerCase()),Bt=t=>t.replace(u,"").replace(f,""),Pt=t=>t.length?t[0].toUpperCase()+t.substr(1):"",Ht=(t,e="en")=>"auto"!==t&&"string"==typeof t?t:document.documentElement&&document.documentElement.lang?document.documentElement.lang:navigator.language?navigator.language.substr(0,2):e,Ot=(t,e)=>{if(!e||!e.length)return t;const i=/%([sd])/g;let o=i.exec(t),s=t,n=0;for(;o&&void 0!==e[n];)s=s.replace(o[0],""+e[n]),n+=1,o=i.exec(t);return s},Wt=(t,e,i,o=!0)=>{var s,n;const r=!(void 0===i||!i.debugLanguage);let a;const l=t=>e&&e.length?Ot(t,e):t,d=Ht(qe.defaultOptions.language,qe.defaultOptions.language),c=Ht(null===(s=i)||void 0===s?void 0:s.language,d),h=e=>{if(!e)return;if(Et(e[t]))return l(e[t]);const i=t.toLowerCase();if(Et(e[i]))return l(e[i]);const o=Pt(t);return Et(e[o])?l(e[o]):void 0};a=void 0!==li.lang[c]?li.lang[c]:void 0!==li.lang[d]?li.lang[d]:li.lang.en;const p=null===(n=i)||void 0===n?void 0:n.i18n;if(p&&p[c]){const t=h(p[c]);if(t)return t}const u=h(a);if(u)return u;if(li.lang.en&&"string"==typeof li.lang.en[t]&&li.lang.en[t])return l(li.lang.en[t]);if(r)return"{"+t+"}";if(!o&&"en"!==c)throw new TypeError(`i18n need "${t}" in "${c}"`);return l(t)},Ft=t=>{-1!==t.indexOf("<html ")&&(t=(t=t.substring(t.indexOf("<html "),t.length)).substring(0,t.lastIndexOf("</html>")+7));let e="";try{const i=document.createElement("div");i.innerHTML=t;const o=[];i.firstChild&&xe.all(i,t=>{if(t)switch(t.nodeType){case Node.ELEMENT_NODE:switch(t.nodeName){case"STYLE":case"LINK":case"META":o.push(t);break;case"W:SDT":case"W:SDTPR":case"FONT":xe.unwrap(t);break;default:Array.from(t.attributes).forEach(e=>{-1===["src","href","rel","content"].indexOf(e.name.toLowerCase())&&t.removeAttribute(e.name)})}break;case Node.TEXT_NODE:break;default:o.push(t)}}),o.forEach(xe.safeRemove),e=i.innerHTML}catch(t){}return e&&(t=e),(t=t.split(/(\n)/).filter(Bt).join("\n")).replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g,"").replace(/<!--[^>]*>/g,"")},Vt=(t,e=!1)=>(t=Bt(t).replace(d,"").replace(/[\s]*class=""/g,""),e&&(t=t.replace(/<p[^>]*>[\s\n\r\t]*(&nbsp;|<br>|<br\/>)?[\s\n\r\t]*<\/p>[\n\r]*/g,"")),t),$t=t=>{const e=document.createElement("div");return e.textContent=t,e.innerHTML},Ut=t=>{const e=document.createElement("div");return e.innerHTML=t,e.textContent||""},Kt=t=>{const e={};return t.replace(/\+\+/g,"+add").split(/[\s]*\+[\s]*/).map(t=>Bt(t.toLowerCase())).map(t=>tt[t]||t).sort().filter(t=>!e[t]&&""!==t&&(e[t]=!0)).join("+")},Xt=(t,e=8)=>{const i=[];for(;t.length;)i.push(t.substr(0,e)),t=t.substr(e);return i[1]=i[1].replace(/./g,"*"),i[2]=i[2].replace(/./g,"*"),i.join("-")},Yt=t=>{if(t){if(t.nodeType===Node.TEXT_NODE&&null!==t.nodeValue&&t.parentNode)for(;t.nextSibling&&t.nextSibling.nodeType===Node.TEXT_NODE;)null!==t.nextSibling.nodeValue&&(t.nodeValue+=t.nextSibling.nodeValue),t.nodeValue=t.nodeValue.replace(d,""),xe.safeRemove(t.nextSibling);else Yt(t.firstChild);Yt(t.nextSibling)}},Gt=(...t)=>t.filter(t=>Bt(t).length).map((e,i)=>(e=e.replace(/([^:])[\\\/]+/g,"$1/"),i&&(e=e.replace(/^\//,"")),i!==t.length-1&&(e=e.replace(/\/$/,"")),e)).join("/"),Jt=t=>t.split("/").reduce((t,e)=>{switch(e){case"":case".":break;case"..":t.pop();break;default:t.push(e)}return t},[]).join("/")+(t.endsWith("/")?"/":""),Zt=t=>/^[0-9]+$/.test(""+t)?t+"px":""+t,Qt=(...t)=>t.filter(t=>t.length).map(t=>t.replace(/\/$/,"")).join("/").replace(/([^:])[\\\/]+/g,"$1/"),te=(t,e)=>{switch(t.toLowerCase()){case"font-weight":switch((""+e).toLowerCase()){case"bold":return 700;case"normal":return 400;case"heavy":return 900}return jt(e)?+e:e}return e},ee=t=>{const e=["#"];let i=Lt(t);if(!i)return!1;if(i=Bt(i.toUpperCase()),i=i.substr(1),3===i.length){for(let t=0;3>t;t+=1)e.push(i[t]),e.push(i[t]);return e.join("")}return i.length>6&&(i=i.substr(0,6)),"#"+i},ie=(t,e)=>{const i=t=>parseInt(t,10),o=e.getComputedStyle(t);return t.offsetWidth-i(o.getPropertyValue("padding-left")||"0")-i(o.getPropertyValue("padding-right")||"0")},oe=(t,e)=>{const i=e.getComputedStyle(t);let o=t.clientWidth;return o-=parseFloat(i.paddingLeft||"0")+parseFloat(i.paddingRight||"0"),o},se=(t,e,i,o=!1)=>{const s=t.getBoundingClientRect(),n=i.body,r=i.documentElement||{clientTop:0,clientLeft:0,scrollTop:0,scrollLeft:0},a=i.defaultView||i.parentWindow,l=a.pageYOffset||r.scrollTop||n.scrollTop,d=a.pageXOffset||r.scrollLeft||n.scrollLeft,c=r.clientTop||n.clientTop||0,h=r.clientLeft||n.clientLeft||0;let p,u;if(!o&&e&&e.options&&e.options.iframe&&e.iframe){const{top:t,left:i}=se(e.iframe,e,e.ownerDocument,!0);p=s.top+t,u=s.left+i}else p=s.top+l-c,u=s.left+d-h;return{top:Math.round(p),left:Math.round(u),width:s.width,height:s.height}},ne=t=>("file:"===window.location.protocol&&/^\/\//.test(t)&&(t="https:"+t),t),re=new Map,ae=t=>(e,i)=>{if(re.has(e))return re.get(e);const o=t(e,i);return re.set(e,o),o},le=(t,e,i,o)=>{const s=o.createElement("script");return s.className=i,s.type="text/javascript",void 0!==e&&s.addEventListener("load",e),s.src=ne(t),o.body.appendChild(s),{callback:e,element:s}},de=ae((t,e=document)=>new Promise((i,o)=>{const{element:s}=le(t,i,"",e);s.addEventListener("error",o)})),ce=ae((t,e=document)=>new Promise((i,o)=>{const s=e.createElement("link");s.rel="stylesheet",s.media="all",s.crossOrigin="anonymous",s.addEventListener("load",()=>i(s)),s.addEventListener("error",o),s.href=ne(t),e.body.appendChild(s)})),he=t=>{const e=navigator.userAgent.toLowerCase(),i=/(firefox)[\s\/]([\w.]+)/.exec(e)||/(chrome)[\s\/]([\w.]+)/.exec(e)||/(webkit)[\s\/]([\w.]+)/.exec(e)||/(opera)(?:.*version)[\s\/]([\w.]+)/.exec(e)||/(msie)[\s]([\w.]+)/.exec(e)||/(trident)\/([\w.]+)/.exec(e)||0>e.indexOf("compatible")||[];return"version"===t?i[2]:"webkit"===t?"chrome"===i[1]||"webkit"===i[1]:"ff"===t?"firefox"===i[1]:"msie"===t?"trident"===i[1]||"msie"===i[1]:i[1]===t},pe=t=>{const e={},i=t.substr(1).split("&");for(let t=0;i.length>t;t+=1){const o=i[t].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1]||"")}return e},ue=(t,e=400,i=345)=>{if(!Tt(t))return t;const o=document.createElement("a"),s=/(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;o.href=t,e||(e=400),i||(i=345);const n=o.protocol||"";switch(o.hostname){case"www.vimeo.com":case"vimeo.com":return s.test(t)?t.replace(s,'<iframe width="'+e+'" height="'+i+'" src="'+n+'//player.vimeo.com/video/$1" frameborder="0" allowfullscreen></iframe>'):t;case"youtube.com":case"www.youtube.com":case"youtu.be":case"www.youtu.be":const r=o.search?pe(o.search):{v:o.pathname.substr(1)};return r.v?'<iframe width="'+e+'" height="'+i+'" src="'+n+"//www.youtube.com/embed/"+r.v+'" frameborder="0" allowfullscreen></iframe>':t}return t},fe=(t,e,i,o=!1)=>{const s=/^left|top|bottom|right|width|min|max|height|margin|padding|font-size/i;if(mt(e)||void 0!==i){const o=(t,e,i)=>{null!=i&&s.test(e)&&jt(""+i)&&(i=parseInt(""+i,10)+"px"),void 0!==i&&fe(t,e,void 0,!0)!==te(e,i)&&(t.style[e]=i)};if(mt(e)){const i=Object.keys(e);for(let s=0;i.length>s;s+=1)o(t,Dt(i[s]),e[i[s]])}else o(t,Dt(e),i);return""}const n=Rt(e),r=t.ownerDocument||document,a=!!r&&(r.defaultView||r.parentWindow),l=t.style[e];let d="";return void 0!==l&&""!==l?d=l:a&&!o&&(d=a.getComputedStyle(t).getPropertyValue(n)),s.test(e)&&/^[\-+]?[0-9.]+px$/.test(""+d)&&(d=parseInt(""+d,10)),te(e,d)},me=t=>{"block"===fe(t,"display")&&fe(t,"display",""),"auto"===t.style.marginLeft&&"auto"===t.style.marginRight&&(t.style.marginLeft="",t.style.marginRight="")},ge=t=>{if("undefined"!=typeof navigator&&-1!==navigator.userAgent.indexOf("Mac OS X")){if(t.metaKey&&!t.altKey)return!0}else if(t.ctrlKey&&!t.altKey)return!0;return!1},ve=(t,e,i)=>{let o=t.JoditDataBindKey;if(o||(o={},Object.defineProperty(t,"JoditDataBindKey",{enumerable:!1,configurable:!0,value:o})),void 0===i)return o[e];o[e]=i};function be(t,e){let i,o,s;if(Array.isArray(t)){for(i=t.length,s=0;i>s;s+=1)if(!1===e.call(t[s],s,t[s]))return!1}else for(o=Object.keys(t),s=0;o.length>s;s+=1)if(!1===e.call(t[o[s]],o[s],t[o[s]]))return!1;return!0}const ye=t=>{if(/^[0-9.]+$/.test(""+t))return parseFloat(t);const e=t.substr(-2,2).toUpperCase(),i=["KB","MB","GB","TB"],o=parseFloat(t.substr(0,t.length-2));return-1!==i.indexOf(e)?o*Math.pow(1024,i.indexOf(e)+1):parseInt(t,10)},we=(t,e)=>{const i=[],o=encodeURIComponent;for(const s in t)if(t.hasOwnProperty(s)){const n=e?e+"["+s+"]":s,r=t[s];i.push(mt(r)?we(r,n):o(n)+"="+o(r))}return i.join("&")},_e=(t,e,i)=>{let o=t.getBoundingClientRect(),s=t;const n=o.top,r=o.height;do{if(s&&s.parentNode){if(s=s.parentNode,o=s.getBoundingClientRect(),n>o.bottom)return!1;if(o.top>=n+r)return!1}}while(s&&s!==e&&s.parentNode);return(i.documentElement&&i.documentElement.clientHeight||0)>=n},ke=(t,e,i)=>{_e(t,e,i)||(e.clientHeight!==e.scrollHeight&&(e.scrollTop=t.offsetTop),_e(t,e,i)||t.scrollIntoView())},je=(t,e,i)=>{const o=t.querySelector(e);return o?(i&&(o.value=i),o.value):""};class xe{static detach(t){for(;t.firstChild;)t.removeChild(t.firstChild)}static unwrap(t){const e=t.parentNode,i=t;if(e){for(;i.firstChild;)e.insertBefore(i.firstChild,i);xe.safeRemove(i)}}static each(t,e){let i=t.firstChild;if(i)for(;i;){if(!1===e.call(i,i)||!xe.each(i,e))return!1;i=xe.next(i,t=>!!t,t)}return!0}static replace(t,e,i=!1,o=!1,s){const n="string"==typeof e?s.createElement(e):e;if(!o)for(;t.firstChild;)n.appendChild(t.firstChild);return i&&Array.from(t.attributes).forEach(t=>{n.setAttribute(t.name,t.value)}),t.parentNode&&t.parentNode.replaceChild(n,t),n}static isEmptyTextNode(t){return t&&t.nodeType===Node.TEXT_NODE&&(!t.nodeValue||0===t.nodeValue.replace(d,"").length)}static isEmpty(t,e=/^(img|svg|canvas|input|textarea|form)$/){return!t||(t.nodeType===Node.TEXT_NODE?null===t.nodeValue||0===Bt(t.nodeValue).length:!t.nodeName.toLowerCase().match(e)&&xe.each(t,t=>{if(t&&t.nodeType===Node.TEXT_NODE&&null!==t.nodeValue&&0!==Bt(t.nodeValue).length||t&&t.nodeType===Node.ELEMENT_NODE&&e.test(t.nodeName.toLowerCase()))return!1}))}static isNode(t,e){return!("object"!=typeof e||!e||"function"!=typeof e.Node&&"object"!=typeof e.Node)&&t instanceof e.Node}static isCell(t,e){return xe.isNode(t,e)&&/^(td|th)$/i.test(t.nodeName)}static isImage(t,e){return xe.isNode(t,e)&&/^(img|svg|picture|canvas)$/i.test(t.nodeName)}static isBlock(t,e){return t&&"object"==typeof t&&xe.isNode(t,e)&&m.test(t.nodeName)}static isInlineBlock(t){return!!t&&t.nodeType===Node.ELEMENT_NODE&&-1!==["inline","inline-block"].indexOf(""+fe(t,"display"))}static canSplitBlock(t,e){return t&&t instanceof e.HTMLElement&&this.isBlock(t,e)&&!/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName)&&void 0!==t.style&&!/^(fixed|absolute)/i.test(t.style.position)}static prev(t,e,i,o=!0){return xe.find(t,e,i,!1,"previousSibling",!!o&&"lastChild")}static next(t,e,i,o=!0){return xe.find(t,e,i,void 0,void 0,o?"firstChild":"")}static prevWithClass(t,e){return this.prev(t,t=>t&&t.nodeType===Node.ELEMENT_NODE&&t.classList.contains(e),t.parentNode)}static nextWithClass(t,e){return this.next(t,t=>t&&t.nodeType===Node.ELEMENT_NODE&&t.classList.contains(e),t.parentNode)}static find(t,e,i,o=!1,s="nextSibling",n="firstChild"){if(o&&e(t))return t;let r,a=t;do{if(r=a[s],e(r))return r||!1;if(n&&r&&r[n]){const t=xe.find(r[n],e,r,!0,s,n);if(t)return t}r||(r=a.parentNode),a=r}while(a&&a!==i);return!1}static findWithCurrent(t,e,i,o="nextSibling",s="firstChild"){let n=t;do{if(e(n))return n||!1;if(s&&n&&n[s]){const t=xe.findWithCurrent(n[s],e,n,o,s);if(t)return t}for(;n&&!n[o]&&n!==i;)n=n.parentNode;n&&n[o]&&n!==i&&(n=n[o])}while(n&&n!==i);return!1}static up(t,e,i){let o=t;if(!t)return!1;do{if(e(o))return o;if(o===i||!o.parentNode)break;o=o.parentNode}while(o&&o!==i);return!1}static closest(t,e,i){let o;return o="function"==typeof e?e:e instanceof RegExp?t=>t&&e.test(t.nodeName):t=>t&&RegExp("^("+e+")$","i").test(t.nodeName),xe.up(t,o,i)}static after(t,e){const i=t.parentNode;i&&(i.lastChild===t?i.appendChild(e):i.insertBefore(e,t.nextSibling))}static moveContent(t,e,i=!1){const o=(t.ownerDocument||document).createDocumentFragment();[].slice.call(t.childNodes).forEach(t=>{t.nodeType===Node.TEXT_NODE&&t.nodeValue===l||o.appendChild(t)}),i&&e.firstChild?e.insertBefore(o,e.firstChild):e.appendChild(o)}static all(t,e,i=!1){let o=t.childNodes?Array.prototype.slice.call(t.childNodes):[];if(e(t))return t;i&&(o=o.reverse()),o.forEach(t=>{xe.all(t,e,i)})}static safeRemove(t){t&&t.parentNode&&t.parentNode.removeChild(t)}}xe.wrapInline=(t,e,i)=>{let o,s=t,n=t;const r=i.selection.save();let a=!1;do{a=!1,o=s.previousSibling,o&&!xe.isBlock(o,i.editorWindow)&&(a=!0,s=o)}while(a);do{a=!1,o=n.nextSibling,o&&!xe.isBlock(o,i.editorWindow)&&(a=!0,n=o)}while(a);const l="string"==typeof e?i.create.inside.element(e):e;s.parentNode&&s.parentNode.insertBefore(l,s);let d=s;for(;d&&(d=s.nextSibling,l.appendChild(s),s!==n&&d);)s=d;return i.selection.restore(r),l},xe.wrap=(t,e,i)=>{const o=i.selection.save(),s="string"==typeof e?i.editorDocument.createElement(e):e;return t.parentNode?(t.parentNode.insertBefore(s,t),s.appendChild(t),i.selection.restore(o),s):null},xe.findInline=(t,e,i)=>{let o=t,s=null;do{if(!o)break;if(s=e?o.previousSibling:o.nextSibling,s||!o.parentNode||o.parentNode===i||!xe.isInlineBlock(o.parentNode))break;o=o.parentNode}while(!s);for(;s&&xe.isInlineBlock(s)&&(e?s.lastChild:s.firstChild);)s=e?s.lastChild:s.firstChild;return s},xe.contains=(t,e)=>{for(;e.parentNode;){if(e.parentNode===t)return!0;e=e.parentNode}return!1},xe.isOrContains=(t,e,i=!1)=>e&&t&&(t===e&&!i||xe.contains(t,e));class Ce{static get(t){return Ce.icons[t]||Ce.icons[t.replace(/-/g,"_")]||Ce.icons[t.toLowerCase()]}static exists(t){return void 0!==this.get(t)}static getIcon(t,e="<span></span>"){return this.get(t)||e}static setIcon(t,e){this.icons[t.replace("_","-")]=e}}var ze,Ee;Ce.icons={},(Ee=ze||(ze={})).ColorPickerWidget=(t,e,i)=>{const o=ee(i),s=t.create.div("jodit_colorpicker"),n=t.options.textIcons?"":Ce.getIcon("eye"),r=t.options.textIcons?`<span>${t.i18n("eraser")}</span>`:Ce.getIcon("eraser"),a=t.options.textIcons?`<span>${t.i18n("palette")}</span>`:Ce.getIcon("palette"),l=(t,e)=>{t.innerHTML=Ce.getIcon("eye"),t.classList.add("active");const i=qt(e);i&&(t.firstChild.style.fill="rgb("+(255-i.r)+","+(255-i.g)+","+(255-i.b)+")")},d=t=>{const e=[];return mt(t)?Object.keys(t).forEach(i=>{e.push('<div class="jodit_colorpicker_group jodit_colorpicker_group-'+i+'">'),e.push(d(t[i])),e.push("</div>")}):Array.isArray(t)&&t.forEach(t=>{e.push("<a "+(o===t?' class="active" ':"")+' title="'+t+'" style="background-color:'+t+'" data-color="'+t+'" href="javascript:void(0)">'+(o===t?n:"")+"</a>")}),e.join("")};return s.appendChild(t.create.fromHTML("<div>"+d(t.options.colors)+"</div>")),s.appendChild(t.create.fromHTML("<a "+(t.options.textIcons?'class="jodit_text_icon"':"")+' data-color="" href="javascript:void(0)">'+r+"</a>")),t.options.showBrowserColorPicker&&vt()&&(s.appendChild(t.create.fromHTML("<span><em "+(t.options.textIcons?'class="jodit_text_icon"':"")+">"+a+'</em><input type="color" value=""/></span>')),t.events.on(s,"change",t=>{t.stopPropagation();let i=t.target;if(!i||!i.tagName||"INPUT"!==i.tagName.toUpperCase())return;const o=i.value||"";o&&l(i,o),e&&"function"==typeof e&&e(o),t.preventDefault()})),t.events.on(s,"mousedown touchend",i=>{i.stopPropagation();let o=i.target;if(o&&o.tagName&&"SVG"!==o.tagName.toUpperCase()&&"PATH"!==o.tagName.toUpperCase()||!o.parentNode||(o=xe.closest(o.parentNode,"A",t.editor)),"A"!==o.tagName.toUpperCase())return;const n=s.querySelector("a.active");n&&(n.classList.remove("active"),n.innerHTML="");const r=o.getAttribute("data-color")||"";r&&l(o,r),e&&"function"==typeof e&&e(r),i.preventDefault()}),s},Ee.TabsWidget=(t,e,i)=>{const o=t.create.div("jodit_tabs"),s=t.create.div("jodit_tabs_wrapper"),n=t.create.div("jodit_tabs_buttons"),r={};let a="",l=0;return o.appendChild(n),o.appendChild(s),be(e,(e,o)=>{const d=t.create.div("jodit_tab"),c=t.create.element("a",{href:"javascript:void(0);"});a||(a=""+e),c.innerHTML=/<svg/.test(""+e)?e:t.i18n(""+e),n.appendChild(c),d.appendChild("function"!=typeof o?o:t.create.div("jodit_tab_empty")),s.appendChild(d),t.events.on(c,"mousedown touchend",r=>(Mt("a",n).forEach(t=>{t.classList.remove("active")}),Mt(".jodit_tab",s).forEach(t=>{t.classList.remove("active")}),c.classList.add("active"),d.classList.add("active"),"function"==typeof o&&o.call(t),r.stopPropagation(),i&&(i.__activeTab=""+e),!1)),r[e]={button:c,tab:d},l+=1}),l?(Mt("a",n).forEach(t=>{t.style.width=(100/l).toFixed(10)+"%"}),i&&i.__activeTab&&r[i.__activeTab]?(r[i.__activeTab].button.classList.add("active"),r[i.__activeTab].tab.classList.add("active")):(r[a].button.classList.add("active"),r[a].tab.classList.add("active")),o):o},Ee.FileSelectorWidget=(t,e,i,o,s=!0)=>{let n;const r={};if(e.upload&&t.options.uploader&&(t.options.uploader.url||t.options.uploader.insertImageAsBase64URI)){const i=t.create.fromHTML('<div class="jodit_draganddrop_file_box">'+`<strong>${t.i18n(s?"Drop image":"Drop file")}</strong>`+`<span><br>${t.i18n("or click")}</span>`+`<input type="file" accept="${s?"image/*":"*"}" tabindex="-1" dir="auto" multiple=""/>`+"</div>");t.getInstance("Uploader").bind(i,i=>{let o=bt(e.upload)?e.upload:t.options.uploader.defaultHandlerSuccess;"function"==typeof o&&o.call(t,{baseurl:i.baseurl,files:i.files,isImages:i.isImages})},e=>{t.events.fire("errorMessage",e.message)}),r[(t.options.textIcons?"":Ce.getIcon("upload"))+t.i18n("Upload")]=i}if(e.filebrowser&&(t.options.filebrowser.ajax.url||t.options.filebrowser.items.url)&&(r[(t.options.textIcons?"":Ce.getIcon("folder"))+t.i18n("Browse")]=()=>{o&&o(),e.filebrowser&&t.getInstance("FileBrowser").open(e.filebrowser,s)}),e.url){const o=t.create.fromHTML(`<form onsubmit="return false;" class="jodit_form">\n\t\t\t\t\t\t<div class="jodit_form_group">\n\t\t\t\t\t\t\t<input class="jodit_input" type="text" required name="url" placeholder="http://"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="jodit_form_group">\n\t\t\t\t\t\t\t<input class="jodit_input" type="text" name="text" placeholder="${t.i18n("Alternative text")}"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style="text-align: right"><button class="jodit_button">${t.i18n("Insert")}</button></div>\n\t\t\t\t\t</form>`),s=o.querySelector("button"),a=o.querySelector("input[name=url]");n=null,i&&i.nodeType!==Node.TEXT_NODE&&("IMG"===i.tagName||Mt("img",i).length)&&(n="IMG"===i.tagName?i:Mt("img",i)[0],je(o,"input[name=url]",n.getAttribute("src")),je(o,"input[name=text]",n.getAttribute("alt")),s.textContent=t.i18n("Update")),i&&i.nodeType!==Node.TEXT_NODE&&"A"===i.nodeName&&(je(o,"input[name=url]",i.getAttribute("href")||""),je(o,"input[name=text]",i.getAttribute("title")||""),s.textContent=t.i18n("Update")),o.addEventListener("submit",i=>(i.preventDefault(),i.stopPropagation(),je(o,"input[name=url]")?("function"==typeof e.url&&e.url.call(t,je(o,"input[name=url]"),je(o,"input[name=text]")),!1):(a.focus(),a.classList.add("jodit_error"),!1)),!1),r[(t.options.textIcons?"":Ce.getIcon("link"))+" URL"]=o}return Ee.TabsWidget(t,r)};var Te=ze.TabsWidget,Se=ze.FileSelectorWidget;class qe{constructor(){this.iframe=!1,this.license="",this.preset="custom",this.presets={inline:{inline:!0,toolbar:!1,toolbarInline:!0,popup:{selection:["bold","underline","italic","ul","ol","outdent","indent","\n","fontsize","brush","paragraph","link","align","cut","dots"]},showXPathInStatusbar:!1,showCharsCounter:!1,showWordsCounter:!1,showPlaceholder:!1}},this.ownerDocument="undefined"!=typeof document?document:null,this.ownerWindow="undefined"!=typeof window?window:null,this.zIndex=0,this.readonly=!1,this.disabled=!1,this.activeButtonsInReadOnly=["source","fullsize","print","about","dots","selectall"],this.toolbarButtonSize="middle",this.allowTabNavigation=!1,this.inline=!1,this.theme="default",this.saveModeInStorage=!1,this.saveHeightInStorage=!1,this.spellcheck=!0,this.editorCssClass=!1,this.style=!1,this.triggerChangeEvent=!0,this.width="auto",this.minWidth="200px",this.maxWidth="100%",this.height="auto",this.minHeight=200,this.direction="",this.language="auto",this.debugLanguage=!1,this.i18n=!1,this.tabIndex=-1,this.toolbar=!0,this.showTooltip=!0,this.showTooltipDelay=500,this.useNativeTooltip=!1,this.enter=B,this.enterBlock=B,this.defaultMode=P,this.useSplitMode=!1,this.colors={greyscale:["#000000","#434343","#666666","#999999","#B7B7B7","#CCCCCC","#D9D9D9","#EFEFEF","#F3F3F3","#FFFFFF"],palette:["#980000","#FF0000","#FF9900","#FFFF00","#00F0F0","#00FFFF","#4A86E8","#0000FF","#9900FF","#FF00FF"],full:["#E6B8AF","#F4CCCC","#FCE5CD","#FFF2CC","#D9EAD3","#D0E0E3","#C9DAF8","#CFE2F3","#D9D2E9","#EAD1DC","#DD7E6B","#EA9999","#F9CB9C","#FFE599","#B6D7A8","#A2C4C9","#A4C2F4","#9FC5E8","#B4A7D6","#D5A6BD","#CC4125","#E06666","#F6B26B","#FFD966","#93C47D","#76A5AF","#6D9EEB","#6FA8DC","#8E7CC3","#C27BA0","#A61C00","#CC0000","#E69138","#F1C232","#6AA84F","#45818E","#3C78D8","#3D85C6","#674EA7","#A64D79","#85200C","#990000","#B45F06","#BF9000","#38761D","#134F5C","#1155CC","#0B5394","#351C75","#733554","#5B0F00","#660000","#783F04","#7F6000","#274E13","#0C343D","#1C4587","#073763","#20124D","#4C1130"]},this.colorPickerDefaultTab="background",this.imageDefaultWidth=300,this.removeButtons=[],this.disablePlugins=[],this.extraPlugins=[],this.extraButtons=[],this.sizeLG=900,this.sizeMD=700,this.sizeSM=400,this.buttons=["source","|","bold","strikethrough","underline","italic","|","superscript","subscript","|","ul","ol","|","outdent","indent","|","font","fontsize","brush","paragraph","|","image","file","video","table","link","|","align","undo","redo","\n","selectall","cut","copy","paste","eraser","copyformat","|","hr","symbol","fullsize","print","about"],this.buttonsMD=["source","|","bold","italic","|","ul","ol","|","font","fontsize","brush","paragraph","|","image","table","link","|","align","|","undo","redo","|","hr","eraser","copyformat","fullsize","dots"],this.buttonsSM=["source","|","bold","italic","|","ul","ol","|","fontsize","brush","paragraph","|","image","table","link","|","align","|","undo","redo","|","eraser","copyformat","fullsize","dots"],this.buttonsXS=["bold","image","|","brush","paragraph","|","align","|","undo","redo","|","eraser","dots"],this.events={},this.textIcons=!1,this.showBrowserColorPicker=!1}static get defaultOptions(){return qe.__defaultOptions||(qe.__defaultOptions=new qe),qe.__defaultOptions}}const Le=function(t){const e=qe.defaultOptions,i=this;if(i.plainOptions=t,void 0!==t&&"object"==typeof t){const o=(t,s)=>{if("preset"===s&&void 0!==e.presets[t.preset]){const i=e.presets[t.preset];Object.keys(i).forEach(o.bind(this,i))}const n=e[s];i[s]="object"!=typeof n||null===n||["ownerWindow","ownerDocument"].includes(s)||Array.isArray(n)?t[s]:gt(!0,{},n,t[s])};Object.keys(t).forEach(o.bind(this,t))}};qe.prototype.controls={print:{exec(t){const e=window.open("","PRINT");e&&(t.options.iframe?(t.events.fire("generateDocumentStructure.iframe",e.document,t),e.document.body.innerHTML=t.value):(e.document.write('<!doctype html><html lang="'+Ht(t.options.language)+'"><head><title></title></head><body>'+t.value+"</body></html>"),e.document.close()),e.focus(),e.print(),e.close())},mode:H+P},about:{exec(t){const e=t.getInstance("Dialog");e.setTitle(t.i18n("About Jodit")),e.setContent('<div class="jodit_about">\t\t\t\t\t\t\t\t\t\t<div>'+t.i18n("Jodit Editor")+" v."+t.getVersion()+" </div><div>"+t.i18n("License: %s",zt(t.options.license)?Xt(t.options.license):t.i18n("GNU General Public License, version 2 or later"))+'</div><div><a href="https://xdsoft.net/jodit/" target="_blank">http://xdsoft.net/jodit/</a></div><div><a href="https://xdsoft.net/jodit/doc/" target="_blank">'+t.i18n("Jodit User's Guide")+"</a> "+t.i18n("contains detailed help for using")+"</div><div>"+t.i18n("Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.")+"</div></div>"),e.open()},tooltip:"About Jodit",mode:H+P},hr:{command:"insertHorizontalRule",tags:["hr"],tooltip:"Insert Horizontal Line"},image:{popup(t,e,i,o){let s=null;return e&&e.nodeType!==Node.TEXT_NODE&&("IMG"===e.tagName||Mt("img",e).length)&&(s="IMG"===e.tagName?e:Mt("img",e)[0]),Se(t,{async filebrowser(e){if(e.files&&e.files.length)for(let i=0;e.files.length>i;i+=1)await t.selection.insertImage(e.baseurl+e.files[i],null,t.options.imageDefaultWidth);o()},upload:!0,async url(e,i){const n=s||t.create.inside.element("img");n.setAttribute("src",e),n.setAttribute("alt",i),s||await t.selection.insertImage(n,null,t.options.imageDefaultWidth),o()}},s,o)},tags:["img"],tooltip:"Insert Image"},file:{popup(t,e,i,o){const s=(e,i="")=>{t.selection.insertNode(t.create.inside.fromHTML('<a href="'+e+'" title="'+i+'">'+(i||e)+"</a>"))};let n=null;return e&&("A"===e.nodeName||xe.closest(e,"A",t.editor))&&(n="A"===e.nodeName?e:xe.closest(e,"A",t.editor)),Se(t,{filebrowser(t){if(t.files&&t.files.length){let e;for(e=0;t.files.length>e;e+=1)s(t.baseurl+t.files[e])}o()},upload:!0,url(t,e){n?(n.setAttribute("href",t),n.setAttribute("title",e)):s(t,e),o()}},n,o,!1)},tags:["a"],tooltip:"Insert file"},video:{popup(t,e,i,o){const s=t.create.fromHTML(`<form class="jodit_form">\n\t\t\t\t\t<div class="jodit jodit_form_group">\n\t\t\t\t\t\t<input class="jodit_input" required name="code" placeholder="http://" type="url"/>\n\t\t\t\t\t\t<button class="jodit_button" type="submit">${t.i18n("Insert")}</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>`),n=t.create.fromHTML(`<form class="jodit_form">\n\t\t\t\t\t\t\t\t\t<div class="jodit_form_group">\n\t\t\t\t\t\t\t\t\t\t<textarea class="jodit_textarea" required name="code" placeholder="${t.i18n("Embed code")}"></textarea>\n\t\t\t\t\t\t\t\t\t\t<button class="jodit_button" type="submit">${t.i18n("Insert")}</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>`),r={},a=t.selection.save(),l=e=>{t.selection.restore(a),t.selection.insertHTML(e),o()};return t.options.textIcons?(r[t.i18n("Link")]=s,r[t.i18n("Code")]=n):(r[Ce.getIcon("link")+"&nbsp;"+t.i18n("Link")]=s,r[Ce.getIcon("source")+"&nbsp;"+t.i18n("Code")]=n),n.addEventListener("submit",t=>(t.preventDefault(),Bt(je(n,"textarea[name=code]"))?(l(je(n,"textarea[name=code]")),!1):(n.querySelector("textarea[name=code]").focus(),n.querySelector("textarea[name=code]").classList.add("jodit_error"),!1))),s.addEventListener("submit",t=>(t.preventDefault(),Tt(je(s,"input[name=code]"))?(l(ue(je(s,"input[name=code]"))),!1):(s.querySelector("input[name=code]").focus(),s.querySelector("input[name=code]").classList.add("jodit_error"),!1))),Te(t,r)},tags:["iframe"],tooltip:"Insert youtube/vimeo video"}};class Ne{constructor(t){this.__isDestructed=!1,t&&t instanceof Ne&&(this.jodit=t,Ct(t)&&t.components.push(this))}get isDestructed(){return this.__isDestructed}destruct(){this.jodit&&(this.jodit=void 0),this.__isDestructed=!0}}class Me extends Ne{constructor(){super(...arguments),this.isBlocked=!1}static equal(t,e){return t.html===e.html&&JSON.stringify(t.range)===JSON.stringify(e.range)}static countNodesBeforeInParent(t){if(!t.parentNode)return 0;const e=t.parentNode.childNodes;let i,o=0,s=null;for(i=0;e.length>i;i+=1){if(!s||e[i].nodeType===Node.TEXT_NODE&&""===e[i].textContent||s.nodeType===Node.TEXT_NODE&&e[i].nodeType===Node.TEXT_NODE||(o+=1),e[i]===t)return o;s=e[i]}return 0}static strokeOffset(t,e){for(;t&&t.nodeType===Node.TEXT_NODE;)(t=t.previousSibling)&&t.nodeType===Node.TEXT_NODE&&null!==t.textContent&&(e+=t.textContent.length);return e}calcHierarchyLadder(t){const e=[];if(!t||!t.parentNode||!xe.isOrContains(this.jodit.editor,t))return[];for(;t&&t!==this.jodit.editor;)t&&e.push(Me.countNodesBeforeInParent(t)),t=t.parentNode;return e.reverse()}getElementByLadder(t){let e,i=this.jodit.editor;for(e=0;i&&t.length>e;e+=1)i=i.childNodes[t[e]];return i}make(){const t={html:"",range:{startContainer:[],startOffset:0,endContainer:[],endOffset:0}};t.html=this.jodit.getNativeEditorValue();const e=this.jodit.selection.sel;if(e&&e.rangeCount){const i=e.getRangeAt(0),o=this.calcHierarchyLadder(i.startContainer),s=this.calcHierarchyLadder(i.endContainer);let n=Me.strokeOffset(i.startContainer,i.startOffset),r=Me.strokeOffset(i.endContainer,i.endOffset);o.length||i.startContainer===this.jodit.editor||(n=0),s.length||i.endContainer===this.jodit.editor||(r=0),t.range={startContainer:o,startOffset:n,endContainer:s,endOffset:r}}return t}restore(t){this.isBlocked=!0,this.jodit.setEditorValue(t.html);try{if(t.range){const e=this.jodit.editorDocument.createRange();e.setStart(this.getElementByLadder(t.range.startContainer),t.range.startOffset),e.setEnd(this.getElementByLadder(t.range.endContainer),t.range.endOffset),this.jodit.selection.selectRange(e)}}catch(t){}this.isBlocked=!1}destruct(){this.isBlocked=!1,super.destruct()}}class Ae{constructor(){this.commands=[],this.stackPosition=-1}clearRedo(){this.commands.length=this.stackPosition+1}clear(){this.commands.length=0,this.stackPosition=-1}push(t){this.clearRedo(),this.commands.push(t),this.stackPosition+=1}undo(){return!!this.canUndo()&&(this.commands[this.stackPosition]&&this.commands[this.stackPosition].undo(),this.stackPosition-=1,!0)}redo(){return!!this.canRedo()&&(this.stackPosition+=1,this.commands[this.stackPosition]&&this.commands[this.stackPosition].redo(),!0)}canUndo(){return this.stackPosition>=0}canRedo(){return this.commands.length-1>this.stackPosition}}class Ie{constructor(t,e,i){this.observer=i,this.oldValue=t,this.newValue=e}undo(){this.observer.snapshot.restore(this.oldValue)}redo(){this.observer.snapshot.restore(this.newValue)}}qe.prototype.observer={timeout:100};class De extends Ne{constructor(t){super(t),this.onChangeStack=()=>{this.__newValue=this.snapshot.make(),Me.equal(this.__newValue,this.__startValue)||(this.stack.push(new Ie(this.__startValue,this.__newValue,this)),this.__startValue=this.__newValue,this.changeStack())},this.stack=new Ae,this.snapshot=new Me(t);const e=rt(this.onChangeStack,t.defaultTimeout);t.events.on("afterInit.observer",()=>{this.isDestructed||(this.__startValue=this.snapshot.make(),t.events.on("changeSelection.observer selectionstart.observer selectionchange.observer mousedown.observer mouseup.observer keydown.observer keyup.observer",()=>{this.__startValue.html===this.jodit.getNativeEditorValue()&&(this.__startValue=this.snapshot.make())}).on("change.observer",()=>{this.snapshot.isBlocked||e()}))})}redo(){this.stack.redo()&&(this.__startValue=this.snapshot.make(),this.changeStack())}undo(){this.stack.undo()&&(this.__startValue=this.snapshot.make(),this.changeStack())}clear(){this.__startValue=this.snapshot.make(),this.stack.clear(),this.changeStack()}changeStack(){this.jodit&&!this.jodit.isDestructed&&this.jodit.events&&this.jodit.events.fire("changeStack")}destruct(){this.jodit.events&&this.jodit.events.off(".observer"),this.snapshot.destruct(),delete this.snapshot,delete this.stack,super.destruct()}}class Re{constructor(t){this.jodit=t,this.isMarker=t=>xe.isNode(t,this.win)&&t.nodeType===Node.ELEMENT_NODE&&"SPAN"===t.nodeName&&t.hasAttribute("data-"+U),this.focus=()=>{var t,e;if(!this.isFocused()){this.jodit.iframe&&"complete"==this.doc.readyState&&this.jodit.iframe.focus(),this.win.focus(),this.area.focus();const i=this.sel,o=this.createRange();return!i||i.rangeCount&&this.current()||(o.setStart(this.area,0),o.collapse(!0),i.removeAllRanges(),i.addRange(o)),this.jodit.editorIsActive||null===(e=null===(t=this.jodit)||void 0===t?void 0:t.events)||void 0===e||e.fire("focus"),!0}return!1},this.eachSelection=t=>{const e=this.sel;if(e&&e.rangeCount){const i=e.getRangeAt(0),o=[],s=i.startOffset,n=this.area.childNodes.length,r=n>s?s:n-1,a=i.startContainer===this.area?this.area.childNodes[r]:i.startContainer,d=i.endContainer===this.area?this.area.childNodes[i.endOffset-1]:i.endContainer;xe.find(a,t=>(!t||t===this.area||xe.isEmptyTextNode(t)||this.isMarker(t)||o.push(t),t===d||t&&t.contains(d)),this.area,!0,"nextSibling",!1);const c=e=>{if(e.nodeName.match(/^(UL|OL)$/))return Array.from(e.childNodes).forEach(c);if("LI"===e.nodeName)if(e.firstChild)e=e.firstChild;else{const t=this.jodit.create.inside.text(l);e.appendChild(t),e=t}t(e)};0===o.length&&xe.isEmptyTextNode(a)&&o.push(a),o.forEach(c)}}}errorNode(t){if(!xe.isNode(t,this.win))throw Error("Parameter node must be instance of Node")}get area(){return this.jodit.editor}get win(){return this.jodit.editorWindow}get doc(){return this.jodit.editorDocument}get sel(){return this.win.getSelection()}get range(){const t=this.sel;return t&&t.rangeCount?t.getRangeAt(0):this.createRange()}createRange(){return this.doc.createRange()}remove(){const t=this.sel,e=this.current();if(t&&e)for(let e=0;t.rangeCount>e;e+=1)t.getRangeAt(e).deleteContents(),t.getRangeAt(e).collapse(!0)}insertCursorAtPoint(t,e){this.removeMarkers();try{let i=this.createRange();if(this.doc.caretPositionFromPoint){const o=this.doc.caretPositionFromPoint(t,e);i.setStart(o.offsetNode,o.offset)}else if(this.doc.caretRangeFromPoint){const o=this.doc.caretRangeFromPoint(t,e);i.setStart(o.startContainer,o.startOffset)}if(i){i.collapse(!0);const t=this.sel;t&&(t.removeAllRanges(),t.addRange(i))}else if(void 0!==this.doc.body.createTextRange){const i=this.doc.body.createTextRange();i.moveToPoint(t,e);const o=i.duplicate();o.moveToPoint(t,e),i.setEndPoint("EndToEnd",o),i.select()}return!0}catch(t){}return!1}removeMarkers(){Mt("span[data-"+U+"]",this.area).forEach(xe.safeRemove)}marker(t=!1,e){let i=null;e&&(i=e.cloneRange(),i.collapse(t));const o=this.jodit.create.inside.span();return o.id=U+"_"+ +new Date+"_"+(""+Math.random()).slice(2),o.style.lineHeight="0",o.style.display="none",o.setAttribute("data-"+U,t?"start":"end"),o.appendChild(this.jodit.create.inside.text(l)),i&&xe.isOrContains(this.area,t?i.startContainer:i.endContainer)&&i.insertNode(o),o}restore(t=[]){if(Array.isArray(t)){const e=this.sel;e&&e.removeAllRanges(),t.forEach(t=>{const i=this.createRange(),o=this.area.querySelector("#"+t.endId),s=this.area.querySelector("#"+t.startId);if(s){if(t.collapsed||!o){const t=s.previousSibling;t&&t.nodeType===Node.TEXT_NODE?i.setStart(t,t.nodeValue?t.nodeValue.length:0):i.setStartBefore(s),xe.safeRemove(s),i.collapse(!0)}else i.setStartAfter(s),xe.safeRemove(s),i.setEndBefore(o),xe.safeRemove(o);e&&e.addRange(i)}})}}save(){const t=this.sel;if(!t||!t.rangeCount)return[];const e=[],i=t.rangeCount,o=[];let s,n,r;for(s=0;i>s;s+=1)o[s]=t.getRangeAt(s),o[s].collapsed?(n=this.marker(!0,o[s]),e[s]={startId:n.id,collapsed:!0,startMarker:n.outerHTML}):(n=this.marker(!0,o[s]),r=this.marker(!1,o[s]),e[s]={startId:n.id,endId:r.id,collapsed:!1,startMarker:n.outerHTML,endMarker:r.outerHTML});for(t.removeAllRanges(),s=i-1;s>=0;--s){const i=this.doc.getElementById(e[s].startId);if(i)if(e[s].collapsed)o[s].setStartAfter(i),o[s].collapse(!0);else if(o[s].setStartBefore(i),e[s].endId){const t=this.doc.getElementById(e[s].endId);t&&o[s].setEndAfter(t)}try{t.addRange(o[s].cloneRange())}catch(t){}}return e}isCollapsed(){const t=this.sel;for(let e=0;t&&t.rangeCount>e;e+=1)if(!t.getRangeAt(e).collapsed)return!1;return!0}isFocused(){return this.doc.hasFocus&&this.doc.hasFocus()&&this.area===this.doc.activeElement}current(t=!0){if(this.jodit.getRealMode()===P){const e=this.sel;if(e&&e.rangeCount>0){const i=e.getRangeAt(0);let o=i.startContainer,s=!1;const n=t=>s?t.lastChild:t.firstChild;if(o.nodeType!==Node.TEXT_NODE){if(o=i.startContainer.childNodes[i.startOffset],o||(o=i.startContainer.childNodes[i.startOffset-1],s=!0),o&&e.isCollapsed&&o.nodeType!==Node.TEXT_NODE)if(!s&&o.previousSibling&&o.previousSibling.nodeType===Node.TEXT_NODE)o=o.previousSibling;else if(t){let t=n(o);for(;t;){if(t&&t.nodeType===Node.TEXT_NODE){o=t;break}t=n(t)}}if(o&&!e.isCollapsed&&o.nodeType!==Node.TEXT_NODE){let t=o,e=o;do{t=t.firstChild,e=e.lastChild}while(t&&e&&t.nodeType!==Node.TEXT_NODE);t===e&&t&&t.nodeType===Node.TEXT_NODE&&(o=t)}}if(o&&xe.isOrContains(this.area,o))return o}}return!1}insertNode(t,e=!0,i=!0){this.errorNode(t),this.focus();const o=this.sel;if(this.isCollapsed()||this.jodit.execCommand("Delete"),o&&o.rangeCount){const e=o.getRangeAt(0);xe.isOrContains(this.area,e.commonAncestorContainer)?(e.deleteContents(),e.insertNode(t)):this.area.appendChild(t)}else this.area.appendChild(t);e&&this.setCursorAfter(t),i&&this.jodit.events&&this.jodit.events.fire("synchro"),this.jodit.events&&this.jodit.events.fire("afterInsertNode",t)}insertHTML(t){if(""===t)return;const e=this.jodit.create.inside.div(),i=this.jodit.create.inside.fragment();let o,s;if(!this.isFocused()&&this.jodit.isEditorMode()&&this.focus(),xe.isNode(t,this.win)?e.appendChild(t):e.innerHTML=""+t,(this.jodit.isEditorMode()||!1!==this.jodit.events.fire("insertHTML",e.innerHTML))&&(o=e.lastChild,o)){for(;e.firstChild;)o=e.firstChild,i.appendChild(e.firstChild);for(this.insertNode(i,!1),o?this.setCursorAfter(o):this.setCursorIn(i),s=this.area.lastChild;s&&s.nodeType===Node.TEXT_NODE&&s.previousSibling&&s.nodeValue&&/^\s*$/.test(s.nodeValue);)s=s.previousSibling;o&&(s&&o===s&&o.nodeType===Node.ELEMENT_NODE&&this.area.appendChild(this.jodit.create.inside.element("br")),this.setCursorAfter(o))}}insertImage(t,e,i){const o="string"==typeof t?this.jodit.create.inside.element("img"):t;if("string"==typeof t&&o.setAttribute("src",t),null!==i){let t=""+i;t&&"auto"!==t&&0>(t+"").indexOf("px")&&0>(t+"").indexOf("%")&&(t+="px"),fe(o,"width",t)}e&&"object"==typeof e&&fe(o,e);const s=()=>{(o.offsetHeight>o.naturalHeight||o.offsetWidth>o.naturalWidth)&&(o.style.width="",o.style.height=""),o.removeEventListener("load",s)};o.addEventListener("load",s),o.complete&&s();const n=this.insertNode(o);return this.jodit.events.fire("afterInsertImage",o),n}setCursorAfter(t){if(this.errorNode(t),!xe.up(t,t=>t===this.area||t&&t.parentNode===this.area,this.area))throw Error("Node element must be in editor");const e=this.createRange();let i=!1;return t.nodeType!==Node.TEXT_NODE?(i=this.doc.createTextNode(l),e.setStartAfter(t),e.insertNode(i),e.selectNode(i)):e.setEnd(t,null!==t.nodeValue?t.nodeValue.length:0),e.collapse(!1),this.selectRange(e),i}cursorInTheEdge(t,e){const i=this.sel,o=i&&i.rangeCount?i.getRangeAt(0):null;if(!o)return null;const s=t?o.startContainer:o.endContainer,n=i=>t?xe.prev(i,t=>!!t,e):xe.next(i,t=>!!t,e),r=t=>{for(;t;)if((t=n(t))&&!xe.isEmptyTextNode(t)&&"BR"!==t.nodeName)return!1};if(s.nodeType===Node.TEXT_NODE){const e=s.nodeValue||"";if(t&&o.startOffset>e.length-e.replace(h,"").length)return!1;if(!t&&o.startOffset<e.replace(c,"").length)return!1;if(!1===r(s))return!1}const a=this.current(!1);return a&&xe.isOrContains(e,a,!0)?!(!t&&o.startContainer.childNodes[o.startOffset]&&a&&!xe.isEmptyTextNode(a))&&!1!==r(a):null}setCursorBefore(t){if(this.errorNode(t),!xe.up(t,t=>t===this.area||t&&t.parentNode===this.area,this.area))throw Error("Node element must be in editor");const e=this.createRange();let i=!1;return t.nodeType!==Node.TEXT_NODE?(i=this.doc.createTextNode(l),e.setStartBefore(t),e.collapse(!0),e.insertNode(i),e.selectNode(i)):e.setStart(t,null!==t.nodeValue?t.nodeValue.length:0),e.collapse(!0),this.selectRange(e),i}setCursorIn(t,e=!1){if(this.errorNode(t),!xe.up(t,t=>t===this.area||t&&t.parentNode===this.area,this.area))throw Error("Node element must be in editor");const i=this.createRange();let o=t,s=t;do{if(o.nodeType===Node.TEXT_NODE)break;s=o,o=e?o.firstChild:o.lastChild}while(o);if(!o){const t=this.doc.createTextNode(l);/^(img|br|input)$/i.test(s.nodeName)?o=s:(s.appendChild(t),s=t)}return i.selectNodeContents(o||s),i.collapse(e),this.selectRange(i),s}selectRange(t){const e=this.sel;e&&(e.removeAllRanges(),e.addRange(t)),this.jodit.events.fire("changeSelection")}select(t,e=!1){if(this.errorNode(t),!xe.up(t,t=>t===this.area||t&&t.parentNode===this.area,this.area))throw Error("Node element must be in editor");const i=this.createRange();i[e?"selectNodeContents":"selectNode"](t),this.selectRange(i)}getHTML(){const t=this.sel;if(t&&t.rangeCount>0){const e=t.getRangeAt(0).cloneContents(),i=this.jodit.create.inside.div();return i.appendChild(e),i.innerHTML}return""}applyCSS(t,e="span",i){let o;const s=t=>null!==t&&!xe.isEmptyTextNode(t)&&!this.isMarker(t),n=t=>"FONT"!==t.nodeName&&t.nodeType===Node.ELEMENT_NODE&&(mt(i)&&be(i,(e,i)=>{const o=fe(t,e,void 0,!0);return null!==o&&""!==o&&-1!==i.indexOf((""+o).toLowerCase())})||"function"==typeof i&&i(this.jodit,t)),r=t=>!!t&&(RegExp("^"+t.nodeName+"$","i").test(e)||!(!i||!n(t)))&&s(t),a=e=>{r(e)&&("SPAN"===e.nodeName&&t&&Object.keys(t).forEach(i=>{0===o||fe(e,i)===te(i,t[i])?(fe(e,i,""),void 0===o&&(o=0)):(fe(e,i,t[i]),void 0===o&&(o=1))}),xe.isBlock(e,this.win)||e.getAttribute("style")&&"SPAN"===e.nodeName||(xe.unwrap(e),void 0===o&&(o=0)))};if(this.isCollapsed()){let i=!1;if(this.current()&&xe.closest(this.current(),e,this.area)){i=!0;const t=xe.closest(this.current(),e,this.area);t&&this.setCursorAfter(t)}if("SPAN"===e.toUpperCase()||!i){const i=this.jodit.create.inside.element(e);i.appendChild(this.jodit.create.inside.text(l)),this.insertNode(i,!1,!1),"SPAN"===e.toUpperCase()&&t&&fe(i,t),this.setCursorIn(i)}}else{const i=this.save();Yt(this.area.firstChild),Mt("*[style*=font-size]",this.area).forEach(t=>{t.style&&t.style.fontSize&&t.setAttribute("data-font-size",""+t.style.fontSize)}),this.doc.execCommand("fontsize",!1,"7"),Mt("*[data-font-size]",this.area).forEach(t=>{const e=t.getAttribute("data-font-size");t.style&&e&&(t.style.fontSize=e,t.removeAttribute("data-font-size"))}),Mt('font[size="7"]',this.area).forEach(i=>{if(xe.next(i,s,i.parentNode)||xe.prev(i,s,i.parentNode)||!r(i.parentNode)||i.parentNode===this.area||xe.isBlock(i.parentNode,this.win)&&!m.test(e))if(i.firstChild&&!xe.next(i.firstChild,s,i)&&!xe.prev(i.firstChild,s,i)&&r(i.firstChild))a(i.firstChild);else if(xe.closest(i,r,this.area)){const t=this.createRange(),e=xe.closest(i,r,this.area);t.setStartBefore(e),t.setEndBefore(i);const o=t.extractContents();o.textContent&&Bt(o.textContent).length||!o.firstChild||xe.unwrap(o.firstChild),e.parentNode&&e.parentNode.insertBefore(o,e),t.setStartAfter(i),t.setEndAfter(e);const s=t.extractContents();s.textContent&&Bt(s.textContent).length||!s.firstChild||xe.unwrap(s.firstChild),xe.after(e,s),a(e)}else{const s=[];let n;i.firstChild&&xe.find(i.firstChild,t=>(t&&r(t)?(void 0===n&&(n=!0),s.push(t)):void 0===n&&(n=!1),!1),i,!0),s.forEach(xe.unwrap),n||(void 0===o&&(o=1),1===o&&fe(xe.replace(i,e,!1,!1,this.doc),t&&"SPAN"===e.toUpperCase()?t:{}))}else a(i.parentNode);i.parentNode&&xe.unwrap(i)}),this.restore(i)}}}class Be extends Ne{constructor(t,e){super(t),this.target=e,this.container=t.create.div("jodit_statusbar"),e.appendChild(this.container),this.hide()}hide(){this.container&&this.container.classList.add("jodit_hidden")}show(){this.container&&this.container.classList.remove("jodit_hidden")}getHeight(){return this.container.offsetHeight}append(t,e=!1){const i=this.jodit.create.div("jodit_statusbar_item");e&&i.classList.add("jodit_statusbar_item-right"),i.appendChild(t),this.container.appendChild(i),this.show(),this.jodit.events.fire("resize")}destruct(){xe.safeRemove(this.container),delete this.container,super.destruct()}}const Pe=(()=>{let t;return()=>(void 0===t&&(t=(()=>{const t="___Jodit___"+Math.random();try{localStorage.setItem(t,"1");const e="1"===localStorage.getItem(t);return localStorage.removeItem(t),e}catch(t){}return!1})()),t)})();class He{constructor(t){this.rootKey=t}set(t,e){try{const i=localStorage.getItem(this.rootKey),o=i?JSON.parse(i):{};o[t]=e,localStorage.setItem(this.rootKey,JSON.stringify(o))}catch(t){}}get(t){try{const e=localStorage.getItem(this.rootKey),i=e?JSON.parse(e):{};return void 0!==i[t]?i[t]:null}catch(t){}}exists(t){return null!==this.get(t)}clear(){try{localStorage.removeItem(this.rootKey)}catch(t){}}}class Oe{constructor(){this.data=new Map}set(t,e){this.data.set(t,e)}get(t){return this.data.get(t)}exists(t){return this.data.has(t)}clear(){this.data.clear()}}const We="Jodit_";class Fe{constructor(t,e){this.provider=t,this.prefix=We,e&&(this.prefix+=e)}set(t,e){this.provider.set(Dt(this.prefix+t),e)}get(t){return this.provider.get(Dt(this.prefix+t))}exists(t){return this.provider.exists(Dt(this.prefix+t))}clear(){return this.provider.clear()}static makeStorage(t=!1,e){let i;return t&&Pe()&&(i=new He(We+e)),i||(i=new Oe),new Fe(i,e)}}const Ve="JoditEventDefaultNamespace";class $e{constructor(){this.__store={}}get(t,e){if(void 0!==this.__store[e])return this.__store[e][t]}indexOf(t,e,i){const o=this.get(t,e);if(o)for(let t=0;o.length>t;t+=1)if(o[t].originalCallback===i)return t;return!1}namespaces(t=!1){const e=Object.keys(this.__store);return t?e.filter(t=>t!==Ve):e}events(t){return this.__store[t]?Object.keys(this.__store[t]):[]}set(t,e,i,o=!1){void 0===this.__store[e]&&(this.__store[e]={}),void 0===this.__store[e][t]&&(this.__store[e][t]=[]),o?this.__store[e][t].unshift(i):this.__store[e][t].push(i)}clear(){delete this.__store,this.__store={}}}class Ue{constructor(t){this.__key="__JoditEventsNativeNamespaces",this.doc=document,this.__stopped=[],this.prepareEvent=t=>{t.cancelBubble||(t.type.match(/^touch/)&&t.changedTouches&&t.changedTouches.length&&["clientX","clientY","pageX","pageY"].forEach(e=>{Object.defineProperty(t,e,{value:t.changedTouches[0][e],configurable:!0,enumerable:!0})}),t.originalEvent||(t.originalEvent=t),"paste"===t.type&&void 0===t.clipboardData&&this.doc.defaultView.clipboardData&&Object.defineProperty(t,"clipboardData",{get:()=>this.doc.defaultView.clipboardData,configurable:!0,enumerable:!0}))},this.current=[],this.isDestructed=!1,t&&(this.doc=t),this.__key+=(new Date).getTime()}eachEvent(t,e){t.split(/[\s,]+/).forEach(t=>{const i=t.split(".");e.call(this,i[0],i[1]||Ve)})}getStore(t){if(void 0===t[this.__key]){const e=new $e;Object.defineProperty(t,this.__key,{enumerable:!1,configurable:!0,value:e})}return t[this.__key]}clearStore(t){void 0!==t[this.__key]&&delete t[this.__key]}triggerNativeEvent(t,e){const i=this.doc.createEvent("HTMLEvents");"string"==typeof e?i.initEvent(e,!0,!0):(i.initEvent(e.type,e.bubbles,e.cancelable),["screenX","screenY","clientX","clientY","target","srcElement","currentTarget","timeStamp","which","keyCode"].forEach(t=>{Object.defineProperty(i,t,{value:e[t],enumerable:!0})}),Object.defineProperty(i,"originalEvent",{value:e,enumerable:!0})),t.dispatchEvent(i)}removeStop(t){if(t){const e=this.__stopped.indexOf(t);-1!==e&&this.__stopped.splice(e,1)}}isStopped(t){return void 0!==t&&-1!==this.__stopped.indexOf(t)}on(t,e,i,o,s=!1){const n="string"==typeof t?this:t,r="string"==typeof e?e:t;let a=i;void 0===a&&"function"==typeof e&&(a=e);const l=this.getStore(n);if("string"!=typeof r||""===r)throw Error("Need events names");if("function"!=typeof a)throw Error("Need event handler");if(Array.isArray(n))return n.forEach(t=>{this.on(t,r,a,o)}),this;const d="function"==typeof n.addEventListener,c=this;let h=function(t){return a&&a.apply(this,arguments)};return d&&(h=function(t){if(c.prepareEvent(t),a&&!1===a.call(this,t))return t.preventDefault(),t.stopImmediatePropagation(),!1},o&&(h=function(t){c.prepareEvent(t);let e=t.target;for(;e&&e!==this;){if(e.matches(o))return Object.defineProperty(t,"target",{value:e,configurable:!0,enumerable:!0}),a&&!1===a.call(e,t)?(t.preventDefault(),!1):void 0;e=e.parentNode}})),this.eachEvent(r,(t,e)=>{if(""===t)throw Error("Need event name");!1===l.indexOf(t,e,a)&&(l.set(t,e,{event:t,originalCallback:a,syntheticCallback:h},s),d&&n.addEventListener(t,h,!1))}),this}off(t,e,i){const o="string"==typeof t?this:t,s="string"==typeof e?e:t,n=this.getStore(o);let r=i;if("string"!=typeof s||!s)return n.namespaces().forEach(t=>{this.off(o,"."+t)}),this.clearStore(o),this;void 0===r&&"function"==typeof e&&(r=e);const a="function"==typeof o.removeEventListener,l=t=>{a&&o.removeEventListener(t.event,t.syntheticCallback,!1)},d=(t,e)=>{if(""!==t){const i=n.get(t,e);if(i&&i.length)if("function"!=typeof r)i.forEach(l),i.length=0;else{const o=n.indexOf(t,e,r);!1!==o&&(l(i[o]),i.splice(o,1))}}else n.events(e).forEach(t=>{""!==t&&d(t,e)})};return this.eachEvent(s,(t,e)=>{e===Ve?n.namespaces().forEach(e=>{d(t,e)}):d(t,e)}),this}stopPropagation(t,e){const i="string"==typeof t?this:t,o="string"==typeof t?t:e;if("string"!=typeof o)throw Error("Need event names");const s=this.getStore(i);this.eachEvent(o,(t,e)=>{const o=s.get(t,e);o&&this.__stopped.push(o),e===Ve&&s.namespaces(!0).forEach(e=>this.stopPropagation(i,t+"."+e))})}fire(t,e,...i){let o,s=void 0;const n="string"==typeof t?this:t,r="string"==typeof t?t:e,a="string"==typeof t?[e,...i]:i,l="function"==typeof n.dispatchEvent;if(!l&&"string"!=typeof r)throw Error("Need events names");const d=this.getStore(n);return"string"!=typeof r&&l?this.triggerNativeEvent(n,e):this.eachEvent(r,(t,e)=>{if(l)this.triggerNativeEvent(n,t);else{const i=d.get(t,e);if(i)try{i.every(e=>!this.isStopped(i)&&(this.current.push(t),o=e.syntheticCallback.apply(n,a),this.current.pop(),void 0!==o&&(s=o),!0))}finally{this.removeStop(i)}e!==Ve||l||d.namespaces().filter(t=>t!==e).forEach(e=>{const i=this.fire.call(this,n,t+"."+e,...a);void 0!==i&&(s=i)})}}),s}destruct(){this.isDestructed&&(this.isDestructed=!0,this.off(this),this.getStore(this).clear(),delete this[this.__key])}}class Ke{constructor(t,e){this.doc=t,null!==e&&(this.inside=e?new Ke(e):new Ke(t,null))}setDocument(t){this.doc=t}element(t,e,i){const o=this.doc.createElement(t.toLowerCase());return e&&(mt(e)?be(e,(t,e)=>{mt(e)&&"style"===t?fe(o,e):o.setAttribute(t,""+e)}):i=e),i&&it(i).forEach(t=>o.appendChild("string"==typeof t?this.fromHTML(t):t)),o}div(t,e,i){const o=this.element("div",e,i);return t&&(o.className=t),o}span(t,e,i){const o=this.element("span",e,i);return t&&(o.className=t),o}a(t,e,i){const o=this.element("a",e,i);return t&&(o.className=t),o}text(t){return this.doc.createTextNode(t)}fragment(){return this.doc.createDocumentFragment()}fromHTML(t){const e=this.div();e.innerHTML=""+t;const i=e.firstChild===e.lastChild&&e.firstChild?e.firstChild:e;return xe.safeRemove(i),i}}class Xe extends Ne{constructor(t){super(t),this.__whoLocked="",this.__isFullSize=!1,this.ownerDocument=document,this.ownerWindow=window,this.isLocked=()=>""!==this.__whoLocked,this.isLockedNotBy=t=>this.isLocked()&&this.__whoLocked!==t,this.isFullSize=()=>this.__isFullSize,t&&t.ownerDocument&&(this.ownerDocument=t.ownerDocument,this.ownerWindow=t.ownerWindow),this.create=new Ke(this.ownerDocument,Ct(t)?t.editorDocument:void 0),this.container=this.create.div()}destruct(){this.isDestructed&&(xe.safeRemove(this.container),delete this.container,super.destruct())}lock(t="any"){return!this.isLocked()&&(this.__whoLocked=t,!0)}unlock(){return!!this.isLocked()&&(this.__whoLocked="",!0)}toggleFullSize(t){void 0===t&&(t=!this.__isFullSize),t!==this.__isFullSize&&(this.__isFullSize=t)}}class Ye extends Xe{constructor(t,e){super(t),this.version="3.3.8",this.__modulesInstances={},this.buffer=Fe.makeStorage(),this.progress_bar=this.create.div("jodit_progress_bar",this.create.div()),this.options={removeButtons:[],zIndex:100002,fullsize:!1,showTooltip:!0,useNativeTooltip:!1,buttons:[],globalFullsize:!0},this.components=[],this.getVersion=()=>this.version,this.id=t&&t.id?t.id:""+(new Date).getTime(),this.jodit=t||this,this.events=t&&t.events?t.events:new Ue(this.ownerDocument),this.buffer=t&&t.buffer?t.buffer:Fe.makeStorage(),this.options={...this.options,...e}}get basePath(){return this.options.basePath?this.options.basePath:et}get defaultTimeout(){return 100}i18n(t,...e){var i;return Wt(t,e,(null===(i=null==this?void 0:this.jodit)||void 0===i?void 0:i.options)||(null==this?void 0:this.options))}toggleFullSize(t){super.toggleFullSize(t),this.events&&this.events.fire("toggleFullSize",t)}getInstance(t,e){if("function"!=typeof li.modules[t])throw Error("Need real module name");return void 0===this.__modulesInstances[t]&&(this.__modulesInstances[t]=new li.modules[t](this.jodit||this,e)),this.__modulesInstances[t]}destruct(){this.isDestructed||(this.events&&(this.events.destruct(),delete this.events),delete this.options,super.destruct())}}class Ge extends Ne{constructor(t,e="li",i="jodit_toolbar_btn"){t instanceof oi?(super(t.jodit),this.parentToolbar=t):super(t),this.container=this.jodit.create.element(e),this.container.classList.add(i)}focus(){this.container.focus()}destruct(){this.isDestructed||(xe.safeRemove(this.container),this.parentToolbar=void 0,super.destruct())}createIcon(t,e){const i=e?e.icon||e.name:t;if(!this.jodit.options.textIcons){let o,s=this.jodit.events.fire("getIcon",i,e,t);return e&&e.iconURL&&void 0===s?(o=this.jodit.create.element("i"),o.style.backgroundImage="url("+e.iconURL.replace("{basePath}",this.jodit.basePath)+")"):(void 0===s&&(s=Ce.exists(i)?Ce.getIcon(i):Ce.getIcon("empty")),o="string"==typeof s?this.jodit.create.fromHTML(Bt(s)):s),o.classList.add("jodit_icon","jodit_icon_"+t),o}return this.jodit.create.fromHTML(`<span class="jodit_icon">${this.jodit.i18n(e?e.name:t)}</span>`)}}class Je extends Ge{constructor(t){super(t),this.container.classList.add("jodit_toolbar_btn-break")}}class Ze extends Ne{constructor(t,e,i,o="jodit_toolbar_popup"){super(t),this.target=e,this.current=i,this.className=o,this.throttleCalcPosition=at(this.calcPosition,this.jodit.defaultTimeout),this.isOpened=!1,this.close=t=>{(this.isOpened||this.isDestructed)&&(t&&xe.isOrContains(this.container,t instanceof Ze?t.target:t)||(this.isOpened=!1,this.jodit.events.off("closeAllPopups",this.close),this.doClose(),xe.safeRemove(this.container),this.jodit.events.fire("removeMarkers"),this.jodit.events.fire(this,"afterClose")))},this.container=this.jodit.create.div(o,{"data-editor_id":t.id}),this.jodit.events.on(this.container,"mousedown touchstart touchend",t=>{t.stopPropagation()}).on([this.jodit.ownerWindow,this.jodit.events],"resize",this.throttleCalcPosition).on("afterInsertNode, afterInsertImage",this.close)}calcPosition(){if(!this.isOpened||this.isDestructed)return;const t=this.container,e=se(this.jodit.container,this.jodit,this.jodit.ownerDocument,!0),i=se(t,this.jodit,this.jodit.ownerDocument,!0),o=fe(t,"marginLeft")||0;i.left-=o;let s=o,n="auto";if(s=e.left>i.left?e.left-i.left:e.left+e.width>i.left+i.width?0:-(i.left+i.width-(e.left+e.width)),e.width>i.width||(s=e.left-i.left,n=e.width),s!==o)try{t.style.setProperty("margin-left",s+"px","important")}catch(e){t.style.marginLeft=s+"px"}const r=t.querySelector(".jodit_popup_triangle");r&&(r.style.marginLeft=-s+"px"),fe(t,"width",n)}doOpen(t){t&&(xe.detach(this.container),this.container.innerHTML='<span class="jodit_popup_triangle"></span>',this.container.appendChild(xe.isNode(t,this.jodit.ownerWindow)?t:this.jodit.create.fromHTML(""+t)),this.container.style.display="block",this.container.style.removeProperty("marginLeft"))}doClose(){}open(t,e,i=!1){li.fireEach("beforeOpenPopup closeAllPopups",this,t),i||this.jodit.events.on("closeAllPopups",this.close),this.container.classList.add(this.className+"-open"),this.doOpen(t),this.target.appendChild(this.container),this.jodit.options.textIcons&&this.firstInFocus(),void 0!==e&&this.container.classList.toggle("jodit_right",e),!i&&this.container.parentNode&&this.jodit.events.fire(this.container.parentNode,"afterOpenPopup",this.container),this.isOpened=!0,!i&&this.calcPosition()}firstInFocus(){}destruct(){this.isDestructed||(this.jodit.events.off([this.jodit.ownerWindow,this.jodit.events],"resize",this.throttleCalcPosition),xe.safeRemove(this.container),delete this.container,super.destruct())}}class Qe extends Ze{constructor(t,e,i,o="jodit_toolbar_list"){super(t,e,i,o),this.target=e,this.current=i,this.className=o,this.defaultControl={template:(t,e,i)=>this.jodit.i18n(i)}}doClose(){this.toolbar&&(this.toolbar.destruct(),delete this.toolbar)}doOpen(t){this.toolbar=si.makeCollection(this.jodit),be("string"==typeof t.list?t.list.split(/[\s,]+/):t.list,(e,i)=>{let o,s=this.jodit.options.controls,n=t=>s&&s[t];"string"==typeof i&&n(i)?o=new ei(this.toolbar,{name:""+i,...n(i)},this.current):"string"==typeof e&&n(e)&&"object"==typeof i?o=new ei(this.toolbar,{name:""+e,...n(e),...i},this.current):(o=new ei(this.toolbar,{name:""+e,exec:t.exec,command:t.command,isActive:t.isActiveChild,isDisable:t.isDisableChild,mode:t.mode,args:[t.args&&t.args[0]||e,t.args&&t.args[1]||i]},this.current),o.textBox.innerHTML=(t.template||this.defaultControl.template)(this.jodit,""+e,""+i)),this.toolbar.appendChild(o)}),this.container.appendChild(this.toolbar.container),this.container.style.removeProperty("marginLeft"),this.toolbar.checkActiveButtons()}firstInFocus(){this.toolbar.firstButton.focus()}destruct(){this.isDestructed||(this.doClose(),super.destruct())}}class ti extends Ge{constructor(t){super(t.parentToolbar||t.jodit,"div","jodit_tooltip"),this.button=t,this.timeout=0,this.show=()=>{const t=this.button.jodit.options.showTooltipDelay||10*this.button.jodit.defaultTimeout;this.button.jodit.events.fire("hideTooltip"),this.timeout=nt(()=>{this.button.container.appendChild(this.container),this.container.style.marginLeft=-(this.container.offsetWidth-this.button.container.offsetWidth)/2+"px"},t)},this.hide=()=>{window.clearTimeout(this.timeout),xe.safeRemove(this.container)},t.control.tooltip&&(this.container.innerHTML=t.tooltipText,t.jodit.events.on(t.anchor,"mouseenter",this.show).on(t.anchor,"mouseleave",this.hide).on("change updateToolbar scroll hidePopup closeAllPopups hideTooltip",this.hide))}destruct(){return this.hide(),this.jodit&&this.jodit.events&&this.jodit.events.off("change updateToolbar scroll hidePopup closeAllPopups hideTooltip",this.hide),super.destruct()}}class ei extends Ge{constructor(t,e,i){super(t),this.__disabled=!1,this.__actived=!1,this.onMouseDown=t=>{if("keydown"===t.type&&t.which!==w)return;if(t.stopImmediatePropagation(),t.preventDefault(),this.disable)return!1;const e=this.control,i=()=>this.parentToolbar&&this.parentToolbar.getTarget(this)||this.target||!1;if(e.list){const t=new Qe(this.jodit,this.container,this.target);t.open(e),this.jodit.events.fire("closeAllPopups",t.container),this.anchor.setAttribute("aria-expanded","true"),this.jodit.events.on(t,"afterClose",()=>{this.anchor.setAttribute("aria-expanded","false")})}else if(void 0!==e.exec&&"function"==typeof e.exec)e.exec(this.jodit,i(),e,t,this.container),this.jodit.events.fire("synchro"),this.parentToolbar&&this.parentToolbar.immediateCheckActiveButtons(),this.jodit.events.fire("closeAllPopups afterExec");else if(void 0!==e.popup&&"function"==typeof e.popup){const t=new Ze(this.jodit,this.container,this.target);if(!1!==this.jodit.events.fire(Dt(`before-${e.name}-OpenPopup`),i(),e,t)){const o=e.popup(this.jodit,i(),e,t.close,this);o&&t.open(o)}this.jodit.events.fire(Dt(`after-${e.name}-OpenPopup`)+" closeAllPopups",t.container)}else(e.command||e.name)&&(Ct(this.jodit)?this.jodit.execCommand(e.command||e.name,e.args&&e.args[0]||!1,e.args&&e.args[1]||null):this.jodit.ownerDocument.execCommand(e.command||e.name,e.args&&e.args[0]||!1,e.args&&e.args[1]||null),this.jodit.events.fire("closeAllPopups"))},this.control=e,this.target=i,this.anchor=this.jodit.create.element("a",{role:"button",href:"javascript:void(0)"});let o="-1";this.jodit.options.allowTabNavigation&&(o="0"),this.anchor.setAttribute("tabindex",o),this.container.appendChild(this.anchor),this.jodit.options.showTooltip&&e.tooltip&&(this.jodit.options.useNativeTooltip?this.anchor.setAttribute("title",this.tooltipText):this.tooltip=new ti(this),this.anchor.setAttribute("aria-label",this.tooltipText)),this.textBox=this.jodit.create.span(),this.anchor.appendChild(this.textBox);const s=e.name.replace(/[^a-zA-Z0-9]/g,"_");if(e.getContent&&"function"==typeof e.getContent){xe.detach(this.container);const t=e.getContent(this.jodit,e,this);this.container.appendChild("string"==typeof t?this.jodit.create.fromHTML(t):t)}else{if(e.list&&this.anchor){const t=this.jodit.create.fromHTML(Ce.getIcon("dropdown-arrow"));t.classList.add("jodit_with_dropdownlist-trigger"),this.container.classList.add("jodit_with_dropdownlist"),this.anchor.appendChild(t)}this.textBox.appendChild(this.createIcon(s,e))}if(this.container.classList.add("jodit_toolbar_btn-"+s),this.jodit.options.direction){const t=this.jodit.options.direction.toLowerCase();this.container.style.direction="rtl"===t?"rtl":"ltr"}e.isInput?this.container.classList.add("jodit_toolbar-input"):this.jodit.events.on(this.container,"mousedown touchend keydown",this.onMouseDown).on(`click-${s}-btn`,this.onMouseDown)}set disable(t){this.__disabled=t,this.container.classList.toggle("jodit_disabled",t),t?this.container.hasAttribute("disabled")||this.container.setAttribute("disabled","disabled"):this.container.hasAttribute("disabled")&&this.container.removeAttribute("disabled")}get disable(){return this.__disabled}set active(t){this.__actived=t,this.container.classList.toggle("jodit_active",t)}get active(){return this.__actived}isDisable(){return!(!this.parentToolbar||!this.parentToolbar.buttonIsDisabled(this))}isActive(){return!(!this.parentToolbar||!this.parentToolbar.buttonIsActive(this))}get tooltipText(){return this.control.tooltip?this.jodit.i18n(this.control.tooltip)+(this.control.hotkeys?"<br>"+it(this.control.hotkeys).join(" "):""):""}focus(){this.anchor.focus()}destruct(){this.isDestructed||(this.jodit&&this.jodit.events&&this.jodit.events.off(this.container),super.destruct(),this.tooltip&&(this.tooltip.destruct(),delete this.tooltip))}}class ii extends Ge{constructor(t){super(t),this.container.classList.add("jodit_toolbar_btn-separator")}}class oi extends Ne{constructor(t){super(t),this.__buttons=[],this.__getControlType=t=>{let e;const i=this.jodit.options.controls||qe.defaultOptions.controls;if("string"!=typeof t)e={name:"empty",...t},void 0!==i[e.name]&&(e={...i[e.name],...e});else{const o=t.split(/\./);let s=i;o.length>1&&void 0!==i[o[0]]&&(s=i[o[0]],t=o[1]),e=void 0!==s[t]?{name:t,...s[t]}:{name:t,command:t,tooltip:t}}return e},this.closeAll=()=>{this.jodit&&this.jodit.events&&this.jodit.events.fire("closeAllPopups")},this.initEvents=()=>{this.jodit.events.on(this.jodit.ownerWindow,"mousedown touchend",this.closeAll).on(this.listenEvents,this.checkActiveButtons).on("afterSetMode focus",this.immediateCheckActiveButtons)},this.listenEvents="changeStack mousedown mouseup keydown change afterInit readonly afterResize selectionchange changeSelection focus afterSetMode touchstart focus blur",this.immediateCheckActiveButtons=()=>{this.isDestructed||this.jodit.isLocked()||(this.__buttons.filter(t=>t instanceof ei).forEach(t=>{t.disable=t.isDisable(),t.disable||(t.active=t.isActive()),"function"==typeof t.control.getLabel&&t.control.getLabel(this.jodit,t.control,t)}),this.jodit.events&&this.jodit.events.fire("updateToolbar"))},this.checkActiveButtons=rt(this.immediateCheckActiveButtons,this.jodit.defaultTimeout),this.container=this.jodit.create.element("ul"),this.container.classList.add("jodit_toolbar"),this.initEvents()}getButtonsList(){return this.__buttons.map(t=>t instanceof ei?t.control.name:"").filter(t=>""!==t)}getParentContainer(){return this.__parentContainer}appendChild(t){this.__buttons.push(t),this.container.appendChild(t.container)}get firstButton(){return this.__buttons[0]}removeChild(t){const e=this.__buttons.indexOf(t);-1!==e&&(this.__buttons.splice(e,1),t.container.parentNode===this.container&&xe.safeRemove(t.container))}build(t,e,i){this.jodit.events.off("rebuildToolbar"),this.jodit.events.on("afterInit rebuildToolbar",()=>this.build(t,e,i)),this.__parentContainer=e;let o=!1;this.clear(),("string"==typeof t?t.split(/[,\s]+/):t).map(this.__getControlType).forEach(t=>{let e=null;if(-1===this.jodit.options.removeButtons.indexOf(t.name)){switch(t.name){case"\n":e=new Je(this);break;case"|":o||(o=!0,e=new ii(this));break;default:o=!1,e=new ei(this,t,i)}e&&this.appendChild(e)}}),this.container.parentNode!==e&&e.appendChild(this.container),this.immediateCheckActiveButtons()}clear(){[...this.__buttons].forEach(t=>{this.removeChild(t),t.destruct()}),this.__buttons.length=0}buttonIsActive(t){return!(Ct(this.jodit)&&!this.jodit.editorIsActive)&&("function"==typeof t.control.isActive?t.control.isActive(this.jodit,t.control,t):void 0)}buttonIsDisabled(t){if(this.jodit.options.disabled)return!0;if(this.jodit.options.readonly&&(!this.jodit.options.activeButtonsInReadOnly||-1===this.jodit.options.activeButtonsInReadOnly.indexOf(t.control.name)))return!0;let e;return"function"==typeof t.control.isDisable&&(e=t.control.isDisable(this.jodit,t.control,t)),e}getTarget(t){return t.target}setDirection(t){this.container.style.direction=t,this.container.setAttribute("dir",t)}destruct(){this.isDestructed||(this.jodit.events.off(this.jodit.ownerWindow,"mousedown touchstart",this.closeAll).off(this.listenEvents,this.checkActiveButtons).off("afterSetMode focus",this.immediateCheckActiveButtons),this.clear(),xe.safeRemove(this.container),delete this.container,super.destruct())}}class si extends oi{constructor(){super(...arguments),this.checkActiveStatus=(t,e)=>{let i=0,o=0;return Object.keys(t).forEach(s=>{const n=t[s];"function"==typeof n?n(this.jodit,""+fe(e,s))&&(i+=1):-1!==n.indexOf(""+fe(e,s))&&(i+=1),o+=1}),o===i}}buttonIsActive(t){const e=super.buttonIsActive(t);if(void 0!==e)return e;const i=!!this.jodit.selection&&this.jodit.selection.current();if(!i)return!1;let o,s,n;return!(!(t.control.tags||t.control.options&&t.control.options.tags)||(o=t.control.tags||t.control.options&&t.control.options.tags,s=i,!xe.up(s,t=>{if(t&&-1!==o.indexOf(t.nodeName.toLowerCase()))return!0},this.jodit.editor)))||!(!(t.control.css||t.control.options&&t.control.options.css)||(n=t.control.css||t.control.options&&t.control.options.css,s=i,!xe.up(s,t=>{if(t&&t.nodeType!==Node.TEXT_NODE)return this.checkActiveStatus(n,t)},this.jodit.editor)))}buttonIsDisabled(t){const e=super.buttonIsDisabled(t);if(void 0!==e)return e;const i=void 0===t.control||void 0===t.control.mode?P:t.control.mode;return!(i===O||i===this.jodit.getRealMode())}getTarget(t){return t.target||this.jodit.selection.current()||void 0}static makeCollection(t){const e=Ct(t)?new si(t):new oi(t);return t.options.textIcons&&e.container.classList.add("jodit_text_icons"),e}}class ni extends Ye{constructor(){super(...arguments),this.toolbar=si.makeCollection(this)}destruct(){this.toolbar.destruct(),delete this.toolbar,super.destruct()}}class ri{constructor(){this.items=new Map}add(t,e){this.items.set(t.toLowerCase(),e)}get(t){return this.items.get(t.toLowerCase())}remove(t){this.items.delete(t.toLowerCase())}async init(t){const e=t.options.extraPlugins.map(t=>Et(t)?{name:t.toLowerCase()}:t),i=st(t.options.disablePlugins).map(t=>t.toLowerCase()),o=[],s={},n=[],r={};if(e&&e.length)try{const i=e.filter(t=>!this.items.has(t.name));i.length&&await this.load(t,i)}catch(t){}this.items.forEach((e,a)=>{if(i.includes(a)||o.includes(a)||s[a])return;const l=ri.makePluginInstance(t,e);this.initOrWait(t,a,l,o,s),n.push(l),r[a]=l}),this.addListenerOnBeforeDestruct(t,n),t.__plugins=r}static makePluginInstance(t,e){return bt(e)?new e(t):e}initOrWait(t,e,i,o,s){const n=(e,i)=>{if(i.hasStyle&&ri.loadStyle(t,e),_t(i)){if(i.requires&&i.requires.length&&!i.requires.every(t=>o.includes(t)))return s[e]=i,!1;i.init(t),o.push(e)}else o.push(e);return!0};n(e,i),Object.keys(s).forEach(t=>{s[t]&&n(t,i)&&(s[t]=void 0,delete s[t])})}addListenerOnBeforeDestruct(t,e){t.events.on("beforeDestruct",()=>{e.forEach(e=>{kt(e)&&e.destruct(t)}),e.length=0,delete t.__plugins})}load(t,e){return Promise.all(e.map(e=>{const i=e.url||ri.getFullUrl(t,name,!0);return(t=>t.then(t=>({v:t,status:"fulfilled"}),t=>({e:t,status:"rejected"})))(de(i,t.ownerDocument))}))}static loadStyle(t,e){ce(ri.getFullUrl(t,e,!1),t.ownerDocument)}static getFullUrl(t,e,i){return t.basePath+"plugins/"+e+"/"+e+"."+(i?"js":"css")}}const ai=10;class li extends ni{constructor(t,e){super(),this.__defaultStyleDisplayKey="data-jodit-default-style-display",this.__defaultClassesKey="data-jodit-default-classes",this.commands={},this.__selectionLocked=null,this.__wasReadOnly=!1,this.storage=Fe.makeStorage(!0,this.id),this.editorIsActive=!1,this.iframe=null,this.mode=P,this.__callChangeCount=0,this.isInited=!1,this.options=new Le(e),this.editorDocument=this.options.ownerDocument,this.editorWindow=this.options.ownerWindow,this.ownerDocument=this.options.ownerDocument,this.ownerWindow=this.options.ownerWindow,this.element=this.resolveElement(t),this.element.attributes&&Array.from(this.element.attributes).forEach(t=>{const i=t.name;let o=t.value;void 0===li.defaultOptions[i]||e&&void 0!==e[i]||(-1!==["readonly","disabled"].indexOf(i)&&(o=""===o||"true"===o),/^[0-9]+(\.)?([0-9]+)?$/.test(""+o)&&(o=Number(o)),this.options[i]=o)}),this.options.events&&Object.keys(this.options.events).forEach(t=>{this.events.on(t,this.options.events[t])}),this.container.classList.add("jodit_container"),this.container.setAttribute("contenteditable","false"),this.selection=new Re(this),this.events.on("removeMarkers",()=>{this.selection&&this.selection.removeMarkers()}),this.observer=new De(this);let i=null;this.options.inline&&(-1===["TEXTAREA","INPUT"].indexOf(this.element.nodeName)&&(this.container=this.element,this.element.setAttribute(this.__defaultClassesKey,""+this.element.className),i=this.container.innerHTML,this.container.innerHTML=""),this.container.classList.add("jodit_inline"),this.container.classList.add("jodit_container")),this.element!==this.container&&(this.element.style.display&&this.element.setAttribute(this.__defaultStyleDisplayKey,this.element.style.display),this.element.style.display="none"),this.applyOptionsToToolbarContainer(this.container),this.workplace=this.create.div("jodit_workplace",{contenteditable:!1}),this.makeToolbar(),this.options.textIcons&&this.container.classList.add("jodit_text_icons"),this.events.on(this.ownerWindow,"resize",()=>{this.events&&this.events.fire("resize")}),this.container.appendChild(this.workplace),this.statusbar=new Be(this,this.container),this.workplace.appendChild(this.progress_bar),this.element.parentNode&&this.element!==this.container&&this.element.parentNode.insertBefore(this.container,this.element),this.id=this.element.getAttribute("id")||""+(new Date).getTime(),this.editor=this.create.div("jodit_wysiwyg",{contenteditable:!0,"aria-disabled":!1,tabindex:this.options.tabIndex}),this.workplace.appendChild(this.editor),this.setNativeEditorValue(this.getElementValue()),(async()=>{await this.beforeInitHook(),await this.events.fire("beforeInit",this);try{await li.plugins.init(this)}catch(t){}if(await this.__initEditor(i),this.isDestructed)return;const t=this.options;t.enableDragAndDropFileToEditor&&t.uploader&&(t.uploader.url||t.uploader.insertImageAsBase64URI)&&this.uploader.bind(this.editor),this.isInited=!0,this.events&&(await this.events.fire("afterInit",this),this.events.fire("afterConstructor",this)),await this.afterInitHook()})()}get isJodit(){return!0}get value(){return this.getEditorValue()}set value(t){this.setEditorValue(t)}get defaultTimeout(){return this.options&&this.options.observer?this.options.observer.timeout:li.defaultOptions.observer.timeout}static Array(t){return new dt(t)}static Object(t){return new lt(t)}static fireEach(t,...e){Object.keys(li.instances).forEach(i=>{const o=li.instances[i];!o.isDestructed&&o.events&&o.events.fire(t,...e)})}static make(t,e){return new li(t,e)}get uploader(){return this.getInstance("Uploader")}get filebrowser(){return this.getInstance("FileBrowser")}getElementValue(){return void 0!==this.element.value?this.element.value:this.element.innerHTML}getNativeEditorValue(){return this.editor?this.editor.innerHTML:this.getElementValue()}setNativeEditorValue(t){this.editor&&(this.editor.innerHTML=t)}getEditorValue(t=!0){let e;if(e=this.events.fire("beforeGetValueFromEditor"),void 0!==e)return e;e=this.getNativeEditorValue().replace(d,""),t&&(e=e.replace(/<span[^>]+id="jodit_selection_marker_[^>]+><\/span>/g,"")),"<br>"===e&&(e="");const i={value:e};return this.events.fire("afterGetValueFromEditor",i),i.value}getEditorText(){if(this.editor)return this.editor.textContent||"";const t=this.create.inside.div();return t.innerHTML=this.getElementValue(),t.textContent||""}setElementValue(t){if("string"!=typeof t&&void 0!==t)throw Error("value must be string");void 0!==t?this.element!==this.container&&(void 0!==this.element.value?this.element.value=t:this.element.innerHTML=t):t=this.getElementValue(),t!==this.getEditorValue()&&this.setEditorValue(t)}setEditorValue(t){const e=this.events.fire("beforeSetValueToEditor",t);if(!1===e)return;if("string"==typeof e&&(t=e),!this.editor)return void(void 0!==t&&this.setElementValue(t));if("string"!=typeof t&&void 0!==t)throw Error("value must be string");void 0!==t&&this.editor.innerHTML!==t&&this.setNativeEditorValue(t);const i=this.getElementValue(),o=this.getEditorValue();if(i!==o&&ai>this.__callChangeCount){this.setElementValue(o),this.__callChangeCount+=1;try{this.events.fire("change",o,i)}finally{this.__callChangeCount=0}}}registerCommand(t,e){const i=t.toLowerCase();if(void 0===this.commands[i]&&(this.commands[i]=[]),this.commands[i].push(e),"function"!=typeof e){const o=this.options.commandToHotkeys[i]||this.options.commandToHotkeys[t]||e.hotkeys;o&&this.registerHotkeyToCommand(o,i)}return this}registerHotkeyToCommand(t,e){const i=it(t).map(Kt).map(t=>t+".hotkey").join(" ");this.events.off(i).on(i,()=>this.execCommand(e))}execCommand(t,e=!1,i=null){if(this.options.readonly&&"selectall"!==t)return;let o;if(t=t.toLowerCase(),o=this.events.fire("beforeCommand",t,e,i),!1!==o&&(o=this.execCustomCommands(t,e,i)),!1!==o)if(this.selection.focus(),"selectall"===t)this.selection.select(this.editor,!0);else try{o=this.editorDocument.execCommand(t,e,i)}catch(t){}return this.events.fire("afterCommand",t,e,i),this.setEditorValue(),o}execCustomCommands(t,e=!1,i=null){if(t=t.toLowerCase(),void 0!==this.commands[t]){let o;const s=s=>{let n;n="function"==typeof s?s:s.exec;const r=n.call(this,t,e,i);void 0!==r&&(o=r)};for(let e=0;this.commands[t].length>e;e+=1)s(this.commands[t][e]);return o}}lock(t="any"){return!!super.lock(t)&&(this.__selectionLocked=this.selection.save(),this.editor.classList.add("jodit_disabled"),!0)}unlock(){return!!super.unlock()&&(this.editor.classList.remove("jodit_disabled"),this.__selectionLocked&&this.selection.restore(this.__selectionLocked),!0)}getMode(){return this.mode}isEditorMode(){return this.getRealMode()===P}getRealMode(){if(this.getMode()!==O)return this.getMode();const t=this.ownerDocument.activeElement;return t&&(xe.isOrContains(this.editor,t)||xe.isOrContains(this.toolbar.container,t))?P:H}setMode(t){const e=this.getMode(),i={mode:parseInt(""+t,10)},o=["jodit_wysiwyg_mode","jodit_source_mode","jodit_split_mode"];!1!==this.events.fire("beforeSetMode",i)&&(this.mode=ot(i.mode,[H,P,O])?i.mode:P,this.options.saveModeInStorage&&this.storage.set("jodit_default_mode",this.mode),o.forEach(t=>{this.container.classList.remove(t)}),this.container.classList.add(o[this.mode-1]),e!==this.getMode()&&this.events.fire("afterSetMode"))}toggleMode(){let t=this.getMode();ot(t+1,[H,P,this.options.useSplitMode?O:9])?t+=1:t=P,this.setMode(t)}setDisabled(t){this.options.disabled=t;const e=this.__wasReadOnly;this.setReadOnly(t||e),this.__wasReadOnly=e,this.editor&&(this.editor.setAttribute("aria-disabled",""+t),this.container.classList.toggle("jodit_disabled",t),this.events.fire("disabled",t))}getDisabled(){return this.options.disabled}setReadOnly(t){this.__wasReadOnly!==t&&(this.__wasReadOnly=t,this.options.readonly=t,t?this.editor&&this.editor.removeAttribute("contenteditable"):this.editor&&this.editor.setAttribute("contenteditable","true"),this.events&&this.events.fire("readonly",t))}getReadOnly(){return this.options.readonly}beforeInitHook(){}afterInitHook(){}resolveElement(t){let e=t;if("string"==typeof t)try{e=this.ownerDocument.querySelector(t)}catch(e){throw Error('String "'+t+'" should be valid HTML selector')}if(!e||"object"!=typeof e||e.nodeType!==Node.ELEMENT_NODE||!e.cloneNode)throw Error('Element "'+t+'" should be string or HTMLElement instance');return e}makeToolbar(){if(!this.options.toolbar)return;let t=this.create.div("jodit_toolbar_container");this.container.appendChild(t),(this.options.toolbar instanceof HTMLElement||"string"==typeof this.options.toolbar)&&(t=this.resolveElement(this.options.toolbar)),this.applyOptionsToToolbarContainer(t),this.toolbar.build(st(this.options.buttons).concat(this.options.extraButtons),t);const e=this.options.toolbarButtonSize.toLowerCase();t.classList.add("jodit_toolbar_size-"+(-1!==["middle","large","small"].indexOf(e)?e:"middle"))}applyOptionsToToolbarContainer(t){t.classList.add("jodit_"+(this.options.theme||"default")+"_theme"),this.options.zIndex&&(t.style.zIndex=""+parseInt(""+this.options.zIndex,10))}async __initEditor(t){if(await this.__createEditor(),this.isDestructed)return;this.element!==this.container?this.setElementValue():null!==t&&this.setEditorValue(t),li.instances[this.id]=this;let e=this.options.defaultMode;if(this.options.saveModeInStorage){const t=this.storage.get("jodit_default_mode");"string"==typeof t&&(e=parseInt(t,10))}this.setMode(e),this.options.readonly&&this.setReadOnly(!0),this.options.disabled&&this.setDisabled(!0);try{this.editorDocument.execCommand("defaultParagraphSeparator",!1,this.options.enter.toLowerCase())}catch(t){}try{this.editorDocument.execCommand("enableObjectResizing",!1,"false")}catch(t){}try{this.editorDocument.execCommand("enableInlineTableEditing",!1,"false")}catch(t){}}async __createEditor(){const t=this.editor,e=await this.events.fire("createEditor",this);if(!this.isDestructed){if(!1===e&&xe.safeRemove(t),this.options.editorCssClass&&this.editor.classList.add(this.options.editorCssClass),this.options.style&&fe(this.editor,this.options.style),this.events.on("synchro",()=>{this.setEditorValue()}).on("focus",()=>this.editorIsActive=!0).on("blur",()=>this.editorIsActive=!1).on(this.editor,"selectionchange selectionstart keydown keyup keypress mousedown mouseup mousepress click copy cut dragstart drop dragover paste resize touchstart touchend focus blur",t=>{if(!this.options.readonly&&this.events&&this.events.fire){if(!1===this.events.fire(t.type,t))return!1;this.setEditorValue()}}),this.options.spellcheck&&this.editor.setAttribute("spellcheck","true"),this.options.direction){const t="rtl"===this.options.direction.toLowerCase()?"rtl":"ltr";this.editor.style.direction=t,this.container.style.direction=t,this.editor.setAttribute("dir",t),this.container.setAttribute("dir",t),this.toolbar.setDirection(t)}this.options.triggerChangeEvent&&this.events.on("change",rt(()=>{this.events&&this.events.fire(this.element,"change")},this.defaultTimeout))}}destruct(){if(this.isDestructed)return;if(!1===this.events.fire("beforeDestruct"))return;if(!this.editor)return;const t=this.getEditorValue();if(this.element!==this.container)if(this.element.hasAttribute(this.__defaultStyleDisplayKey)){const t=this.element.getAttribute(this.__defaultStyleDisplayKey);t&&(this.element.style.display=t,this.element.removeAttribute(this.__defaultStyleDisplayKey))}else this.element.style.display="";else this.element.hasAttribute(this.__defaultClassesKey)&&(this.element.className=this.element.getAttribute(this.__defaultClassesKey)||"",this.element.removeAttribute(this.__defaultClassesKey));this.element.hasAttribute("style")&&!this.element.getAttribute("style")&&this.element.removeAttribute("style"),this.observer.destruct(),this.statusbar.destruct(),delete this.observer,delete this.statusbar,delete this.storage,this.buffer.clear(),delete this.buffer,this.components.forEach(t=>{void 0===t.destruct||"function"!=typeof t.destruct||t.isDestructed||t.destruct()}),this.components.length=0,this.commands={},delete this.selection,this.__selectionLocked=null,this.events.off(this.ownerWindow),this.events.off(this.ownerDocument),this.events.off(this.ownerDocument.body),this.events.off(this.element),this.events.off(this.editor),xe.safeRemove(this.workplace),xe.safeRemove(this.editor),xe.safeRemove(this.progress_bar),xe.safeRemove(this.iframe),this.container!==this.element&&xe.safeRemove(this.container),delete this.workplace,delete this.editor,delete this.progress_bar,delete this.iframe,this.container===this.element&&(this.element.innerHTML=t),delete li.instances[this.id],super.destruct(),delete this.container}}li.plugins=new ri,li.modules={},li.instances={},li.lang={};var di=i(79),ci=i.n(di),hi=i(80),pi=i.n(hi),ui=i(81),fi=i.n(ui),mi=i(0),gi=i.n(mi),vi=i(82),bi=i.n(vi),yi=i(83),wi=i.n(yi),_i=i(84),ki=i.n(_i),ji=i(85),xi=i.n(ji),Ci=i(86),zi=i.n(Ci),Ei=i(87),Ti=i.n(Ei),Si=i(88),qi=i.n(Si),Li=i(89),Ni=i.n(Li),Mi=i(90),Ai=i.n(Mi),Ii=i(91),Di=i.n(Ii),Ri=i(92),Bi=i.n(Ri),Pi=i(93),Hi=i.n(Pi),Oi=i(94);const Wi={ar:ci.a,cs_cz:pi.a,de:fi.a,en:gi.a,es:bi.a,fr:wi.a,he:ki.a,hu:xi.a,id:zi.a,it:Ti.a,nl:qi.a,pl:Ni.a,pt_br:Ai.a,ru:Di.a,tr:Bi.a,zh_cn:Hi.a,zh_tw:i.n(Oi).a},Fi=t=>t.default||t,Vi={};Array.isArray(Fi(gi.a))&&Fi(gi.a).forEach((t,e)=>{Vi[e]=t}),Object.keys(Wi).forEach(t=>{const e=Fi(Wi[t]);Array.isArray(e)&&(Wi[t]={},e.forEach((e,i)=>{Wi[t][Vi[i]]=e}))});var $i=Wi;qe.prototype.defaultAjaxOptions={dataType:"json",method:"GET",url:"",data:null,contentType:"application/x-www-form-urlencoded; charset=UTF-8",headers:{"X-REQUESTED-WITH":"XMLHttpRequest"},withCredentials:!1,xhr:()=>new XMLHttpRequest};class Ui{constructor(t,e){this.success_response_codes=[200,201,202],this.jodit=t,this.options=gt(!0,{},qe.prototype.defaultAjaxOptions,e),this.options.xhr&&(this.xhr=this.options.xhr()),t&&t.events&&t.events.on("beforeDestruct",()=>{this.abort()})}__buildParams(t,e){return this.options.queryBuild&&"function"==typeof this.options.queryBuild?this.options.queryBuild.call(this,t,e):"string"==typeof t||this.jodit.ownerWindow.FormData&&t instanceof this.jodit.ownerWindow.FormData?t:we(t)}abort(){try{this.xhr.abort()}catch(t){}return this}send(){return new Promise((t,e)=>{const i=t=>{let e=null;if("json"===this.options.dataType&&(e=JSON.parse(t)),!e)throw Error("No JSON format");return e};this.xhr.onabort=()=>{e(Error(this.xhr.statusText))},this.xhr.onerror=()=>{e(Error(this.xhr.statusText))},this.xhr.ontimeout=()=>{e(Error(this.xhr.statusText))},this.xhr.onload=()=>{this.response=this.xhr.responseText,this.status=this.xhr.status,t.call(this.xhr,i(this.response)||{})},this.xhr.onreadystatechange=()=>{if(this.xhr.readyState===XMLHttpRequest.DONE){const o=this.xhr.responseText;this.response=o,this.status=this.xhr.status,this.success_response_codes.indexOf(this.xhr.status)>-1?t.call(this.xhr,i(o)):e.call(this.xhr,Error(this.xhr.statusText||this.jodit.i18n("Connection error!")))}},this.xhr.withCredentials=this.options.withCredentials||!1;const{url:o,data:s,method:n}=this.prepareRequest();this.xhr.open(n,o,!0),this.options.contentType&&this.xhr.setRequestHeader&&this.xhr.setRequestHeader("Content-type",this.options.contentType),this.options.headers&&this.xhr.setRequestHeader&&be(this.options.headers,(t,e)=>{this.xhr.setRequestHeader(t,e)}),setTimeout(()=>{this.xhr.send(s?this.__buildParams(s):void 0)},0)})}prepareRequest(){if(!this.options.url)throw Error("Need URL for AJAX request");let t=this.options.url;const e=this.options.data,i=(this.options.method||"get").toLowerCase();if("get"===i&&e&&mt(e)){const i=t.indexOf("?");if(-1!==i){const o=pe(t);t=t.substr(0,i)+"?"+we({...o,...e})}else t+="?"+we(this.options.data)}const o={url:t,method:i,data:e};return Ui.log.splice(100),Ui.log.push(o),o}}Ui.log=[];class Ki extends Ne{constructor(t){super(t),this.hide=()=>{this.context.classList.remove("jodit_context_menu-show"),this.jodit.ownerWindow.removeEventListener("mouseup",this.hide)},this.context=t.create.div("jodit_context_menu",{"data-editor_id":this.jodit.id}),t.ownerDocument.body.appendChild(this.context)}show(t,e,i,o){const s=this;Array.isArray(i)&&(o&&(this.context.style.zIndex=""+o),this.context.innerHTML="",i.forEach(t=>{if(!t)return;const e=s.jodit.i18n(t.title||""),i=this.jodit.create.fromHTML(`<a title="${e}" data-icon="${t.icon}"  href="javascript:void(0)">`+(t.icon?Ce.getIcon(t.icon):"")+"<span></span></a>"),o=i.querySelector("span");i.addEventListener("click",e=>(t.exec&&t.exec.call(s,e),s.hide(),!1)),o.textContent=e,s.context.appendChild(i)}),fe(s.context,{left:t,top:e}),this.jodit.events.on(this.jodit.ownerWindow,"mouseup jodit_close_dialog",s.hide),this.context.classList.add("jodit_context_menu-show"))}destruct(){xe.safeRemove(this.context),delete this.context,this.jodit.events.off(this.jodit.ownerWindow,"mouseup",this.hide),super.destruct()}}function Xi(t){if(!t.options.addNewLine)return;const e=t.create.fromHTML('<div role="button" tabIndex="-1" title="'+t.i18n("Break")+'" class="jodit-add-new-line"><span>'+Ce.getIcon("enter")+"</span></div>"),i=RegExp("^("+t.options.addNewLineTagsTriggers.join("|")+")$","i");let o,s,n=!1,r=!1,a=!1;const l=()=>{clearTimeout(o),a=!1,e.style.display="none",n=!0},d=e=>null!==e&&xe.isBlock(e,t.editorWindow)&&!/^(img|table|iframe|hr)$/i.test(e.nodeName),c=()=>{n||a||(clearTimeout(o),o=nt(l,500))};t.events.on("beforeDestruct",()=>{xe.safeRemove(e)}).on("afterInit",()=>{t.container.appendChild(e),t.events.on(e,"mousemove",t=>{t.stopPropagation()}).on(e,"mousedown touchstart",e=>{const i=t.editorDocument.createElement(t.options.enter);r&&s&&s.parentNode?s.parentNode.insertBefore(i,s):t.editor.appendChild(i),t.selection.setCursorIn(i),t.events.fire("synchro"),l(),e.preventDefault()})}).on("afterInit",()=>{t.events.on(t.editor,"scroll",()=>{l()}).on(t.container,"mouseleave",c).on(e,"mouseenter",()=>{clearTimeout(o),a=!0}).on(e,"mouseleave",()=>{a=!1}).on(t.editor,"dblclick",e=>{if(!t.options.readonly&&t.options.addNewLineOnDBLClick&&e.target===t.editor&&t.selection.isCollapsed()){const i=se(t.editor,t,t.editorDocument),o=e.pageY-t.editorWindow.pageYOffset,s=t.editorDocument.createElement(t.options.enter);Math.abs(o-(i.height+i.top))>Math.abs(o-i.top)&&t.editor.firstChild?t.editor.insertBefore(s,t.editor.firstChild):t.editor.appendChild(s),t.selection.setCursorIn(s),t.setEditorValue(),l(),e.preventDefault()}}).on(t.editor,"mousemove",rt(a=>{let l=t.editorDocument.elementFromPoint(a.pageX-t.editorWindow.pageXOffset,a.pageY-t.editorWindow.pageYOffset);if(l&&xe.isOrContains(e,l))return;if(!l||!xe.isOrContains(t.editor,l))return;if(!(l&&l.nodeName.match(i)&&xe.isOrContains(t.editor,l)||(l=xe.closest(l,i,t.editor),l)))return void c();if(i.test(l.nodeName)){const e=xe.up(l,e=>xe.isBlock(e,t.editorWindow),t.editor);e&&e!==t.editor&&(l=e)}const h=se(t.editor,t,t.editorDocument),p=se(l,t,t.editorDocument);let u=!1;10>Math.abs(a.pageY-p.top)&&(u=p.top,20>u-h.top||(u-=15),r=!0),10>Math.abs(a.pageY-(p.top+p.height))&&(u=p.top+p.height,25>h.top+h.height-u||(u+=15),r=!1),!1!==u&&(r&&!xe.prev(l,d,t.editor)||!r&&!xe.next(l,d,t.editor))?(e.style.top=u+"px",s=l,t.options.readonly||t.isLocked()||t.container.classList.contains("jodit_popup_active")||(clearTimeout(o),e.classList.toggle("jodit-add-new-line_after",!r),e.style.display="block",e.style.width=t.editor.clientWidth+"px",n=!1)):(s=!1,c())},t.defaultTimeout))})}function Yi(t){let e;t.events.on("afterInit",()=>{t.options.autofocus&&(t.defaultTimeout?e=nt(t.selection.focus,300):t.selection.focus())}).on("mousedown",e=>{t.isEditorMode()&&e.target&&xe.isBlock(e.target,t.editorWindow)&&!e.target.childNodes.length&&(t.editor===e.target?t.selection.focus():t.selection.setCursorIn(e.target))}).on("beforeDestruct",()=>{clearTimeout(e)})}function Gi(t){const e=e=>{let i,o=e;Yt(e);do{const s=o.innerHTML.replace(d,"");if(s.length&&"<br>"!==s||xe.isCell(o,t.editorWindow)||!o.parentNode||e===t.editor)break;i=o.parentNode,xe.safeRemove(o),o=i}while(o&&o!==t.editor)},i=(e,o,s)=>{if(e.node&&e.node.nodeType===Node.TEXT_NODE&&"string"==typeof e.node.nodeValue){let n=e.node.nodeValue,r=o?n.length:0;const a=o?-1:1,d=r;for(;r>=0&&n.length>=r&&n[r+(o?-1:0)]===l;)r+=a;r!==d&&(o?n=n.substr(0,r)+n.substr(d):(n=n.substr(0,d)+n.substr(r),r=d),e.node.nodeValue=n),s.setStart(e.node,r),s.collapse(!0),t.selection.selectRange(s);let c=xe.findInline(e.node,o,t.editor);if(n.length){let t=!1;if(o?r&&(t=!0):n.length>r&&(t=!0),t)return!0}else s.setStartBefore(e.node),s.collapse(!0),t.selection.selectRange(s),xe.safeRemove(e.node),e.node=c;if(c&&(xe.isInlineBlock(c)&&(c=o?c.lastChild:c.firstChild),c&&c.nodeType===Node.TEXT_NODE))return e.node=c,i(e,o,s)}},o=v,s=t=>{if(t&&o.test(t.nodeName))return xe.safeRemove(t),!1},n=(e,o,n)=>{if(e.node){const r=e.node;if(void 0!==i(e,o,n))return!0;if(e.node||(e.node=r.parentNode),e.node===t.editor)return!1;let a=e.node;if(!1===s(a))return!1;for(a&&(a=o?a.previousSibling:a.nextSibling);a&&a.nodeType===Node.TEXT_NODE&&a.nodeValue&&a.nodeValue.match(/^[\n\r]+$/);)a=o?a.previousSibling:a.nextSibling;return s(a)}},r=t=>null===t.nodeName.match(/^(TD|TH|TR|TABLE|LI)$/)&&(!(!xe.isEmpty(t)&&null===t.nodeName.match(o))||!(t.nodeType===Node.TEXT_NODE&&!xe.isEmptyTextNode(t))&&(!t.childNodes.length||Array.from(t.childNodes).every(r)));t.events.on("afterCommand",e=>{if("delete"===e){const e=t.selection.current();if(e&&e.firstChild&&"BR"===e.firstChild.nodeName&&xe.safeRemove(e.firstChild),!(Bt(t.editor.textContent||"")||t.editor.querySelector("img")||e&&xe.closest(e,"table",t.editor))){t.editor.innerHTML="";const e=t.selection.setCursorIn(t.editor);xe.safeRemove(e)}}}).on("keydown",i=>{if(i.which===b||i.which===z){const o=i.which===b;if(t.selection.isFocused()||t.selection.focus(),!t.selection.isCollapsed())return t.execCommand("Delete"),!1;const s=t.selection.sel,a=!(!s||!s.rangeCount)&&s.getRangeAt(0);if(!a)return!1;const d=t.ownerDocument.createTextNode(l),c=t.editorDocument.createElement("span");try{if(a.insertNode(d),!xe.isOrContains(t.editor,d))return!1;let i=xe.up(d,e=>xe.isBlock(e,t.editorWindow),t.editor);const s=xe.findInline(d,o,t.editor),h={node:s};let p;if(s?p=n(h,o,a):d.parentNode&&(p=n({node:o?d.parentNode.previousSibling:d.parentNode.nextSibling},o,a)),void 0!==p)return!!p&&void 0;if(i&&i.nodeName.match(/^(TD)$/))return!1;let u=o?xe.prev(h.node||d,e=>xe.isBlock(e,t.editorWindow),t.editor):xe.next(h.node||d,e=>xe.isBlock(e,t.editorWindow),t.editor);if(!u&&i&&i.parentNode){u=t.create.inside.element(t.options.enter);let e=i;for(;e&&e.parentNode&&e.parentNode!==t.editor;)e=e.parentNode;e.parentNode&&e.parentNode.insertBefore(u,e)}else if(u&&r(u))return xe.safeRemove(u),!1;if(u){const e=t.selection.setCursorIn(u,!o);t.selection.insertNode(c,!1,!1),e.nodeType===Node.TEXT_NODE&&e.nodeValue===l&&xe.safeRemove(e)}if(i){if(e(i),u&&i.parentNode&&(i.nodeName===u.nodeName&&i.parentNode&&u.parentNode&&i.parentNode!==t.editor&&u.parentNode!==t.editor&&i.parentNode!==u.parentNode&&i.parentNode.nodeName===u.parentNode.nodeName&&(i=i.parentNode,u=u.parentNode),xe.moveContent(i,u,!o),Yt(u)),u&&"LI"===u.nodeName){const e=xe.closest(u,"Ul|OL",t.editor);if(e){const t=e.nextSibling;t&&t.nodeName===e.nodeName&&e!==t&&(xe.moveContent(t,e,!o),xe.safeRemove(t))}}return e(i),!1}}finally{if(d.parentNode&&d.nodeValue===l){const e=d.parentNode;xe.safeRemove(d),!e.firstChild&&e.parentNode&&e!==t.editor&&xe.safeRemove(e)}if(c&&xe.isOrContains(t.editor,c,!0)){const e=t.selection.setCursorBefore(c);xe.safeRemove(c),e&&e.parentNode&&(xe.findInline(e,!0,e.parentNode)||xe.findInline(e,!0,e.parentNode))&&xe.safeRemove(e)}t.setEditorValue()}return!1}})}function Ji(t){const e=e=>{const i=qe.defaultOptions.controls[e],o={...i.css},s={};return Object.keys(o).forEach(t=>{s[t]=Array.isArray(o[t])?o[t][0]:o[t]}),t.selection.applyCSS(s,i.tags?i.tags[0]:void 0,i.css),t.events.fire("synchro"),!1};t.registerCommand("bold",{exec:e,hotkeys:["ctrl+b","cmd+b"]}).registerCommand("italic",{exec:e,hotkeys:["ctrl+i","cmd+i"]}).registerCommand("underline",{exec:e,hotkeys:["ctrl+u","cmd+u"]}).registerCommand("strikethrough",{exec:e})}function Zi(t){t.options.cleanHTML.cleanOnPaste&&t.events.on("processPaste",(t,e)=>Ft(e));const e=/([^\[]*)\[([^\]]+)]/,i=/[\s]*,[\s]*/,o=/^(.*)[\s]*=[\s]*(.*)$/,s=t=>{const s={};return"string"==typeof t?(t.split(i).map(t=>{t=Bt(t);const n=e.exec(t),r={},a=t=>{t=Bt(t);const e=o.exec(t);e?r[e[1]]=e[2]:r[t]=!0};if(n){const t=n[2].split(i);n[1]&&(t.forEach(a),s[n[1].toUpperCase()]=r)}else s[t.toUpperCase()]=!0}),s):!!t&&(Object.keys(t).forEach(e=>{s[e.toUpperCase()]=t[e]}),s)};let n;const r=s(t.options.cleanHTML.allowTags),a=s(t.options.cleanHTML.denyTags),l=(t,e=!1)=>{let i=e?t.nextSibling:t.previousSibling;for(;i;){if(i.nodeType===Node.ELEMENT_NODE||!xe.isEmptyTextNode(i))return!0;i=e?i.nextSibling:i.previousSibling}return!1};t.events.on("change afterSetMode afterInit mousedown keydown",rt(()=>{if(!t.isDestructed&&t.isEditorMode()&&t.selection){n=t.selection.current();let e=null,i=!1,o=0;const s=[],d=t.options.cleanHTML.replaceOldTags;if(d&&n){const e=Object.keys(d).join("|");if(t.selection.isCollapsed()){const i=xe.closest(n,e,t.editor);if(i){const e=t.selection.save(),o=d[i.nodeName.toLowerCase()]||d[i.nodeName];xe.replace(i,o,!0,!1,t.editorDocument),t.selection.restore(e)}}}const c=e=>{if(e){if((e=>!(e.nodeType===Node.TEXT_NODE||!(r&&!r[e.nodeName]||a&&a[e.nodeName]))||!(!n||"BR"!==e.nodeName||!l(e)||l(e,!0)||xe.up(e,e=>xe.isBlock(e,t.editorWindow),t.editor)===xe.up(n,e=>xe.isBlock(e,t.editorWindow),t.editor))||t.options.cleanHTML.removeEmptyElements&&!1!==n&&e.nodeType===Node.ELEMENT_NODE&&null!==e.nodeName.match(g)&&!t.selection.isMarker(e)&&0===Bt(e.innerHTML).length&&!xe.isOrContains(e,n))(e))return s.push(e),c(e.nextSibling);if(t.options.cleanHTML.fillEmptyParagraph&&xe.isBlock(e,t.editorWindow)&&xe.isEmpty(e,/^(img|svg|canvas|input|textarea|form|br)$/)){const i=t.create.inside.element("br");e.appendChild(i)}if(r&&!0!==r[e.nodeName]){const t=e.attributes;if(t&&t.length){const s=[];for(o=0;t.length>o;o+=1)(!r[e.nodeName][t[o].name]||!0!==r[e.nodeName][t[o].name]&&r[e.nodeName][t[o].name]!==t[o].value)&&s.push(t[o].name);s.length&&(i=!0),s.forEach(t=>{e.removeAttribute(t)})}}c(e.firstChild),c(e.nextSibling)}};t.editor.firstChild&&(e=t.editor.firstChild),c(e),s.forEach(xe.safeRemove),(s.length||i)&&t.events&&t.events.fire("syncho")}},t.options.cleanHTML.timeout)).on("keyup",()=>{if(t.options.readonly)return;const e=t.selection.current();if(e){const i=xe.up(e,e=>xe.isBlock(e,t.editorWindow),t.editor);i&&xe.all(i,i=>{i&&i.nodeType===Node.TEXT_NODE&&null!==i.nodeValue&&d.test(i.nodeValue)&&0!==i.nodeValue.replace(d,"").length&&(i.nodeValue=i.nodeValue.replace(d,""),i===e&&t.selection.isCollapsed()&&t.selection.setCursorAfter(i))})}}).on("afterCommand",e=>{const i=t.selection;let o,s;switch(e.toLowerCase()){case"inserthorizontalrule":o=t.editor.querySelector("hr[id=null]"),o&&(s=xe.next(o,e=>xe.isBlock(e,t.editorWindow),t.editor,!1),s||(s=t.create.inside.element(t.options.enter),s&&xe.after(o,s)),i.setCursorIn(s));break;case"removeformat":s=i.current();const e=i=>{switch(i.nodeType){case Node.ELEMENT_NODE:xe.each(i,e),"FONT"===i.nodeName?xe.unwrap(i):([].slice.call(i.attributes).forEach(t=>{-1===["src","href","rel","content"].indexOf(t.name.toLowerCase())&&i.removeAttribute(t.name)}),Yt(i));break;case Node.TEXT_NODE:t.options.cleanHTML.replaceNBSP&&i.nodeType===Node.TEXT_NODE&&null!==i.nodeValue&&i.nodeValue.match(p)&&(i.nodeValue=i.nodeValue.replace(p," "));break;default:xe.safeRemove(i)}};if(i.isCollapsed())for(;s&&s.nodeType!==Node.ELEMENT_NODE&&s!==t.editor;)e(s),s&&(s=s.parentNode);else t.selection.eachSelection(t=>{e(t)})}})}qe.prototype.addNewLine=!0,qe.prototype.addNewLineOnDBLClick=!0,qe.prototype.addNewLineTagsTriggers=["table","iframe","img","hr","jodit"],qe.prototype.autofocus=!1,qe.prototype.controls.subscript={tags:["sub"],tooltip:"subscript"},qe.prototype.controls.superscript={tags:["sup"],tooltip:"superscript"},qe.prototype.controls.bold={tagRegExp:/^(strong|b)$/i,tags:["strong","b"],css:{"font-weight":["bold","700"]},tooltip:"Bold"},qe.prototype.controls.italic={tagRegExp:/^(em|i)$/i,tags:["em","i"],css:{"font-style":"italic"},tooltip:"Italic"},qe.prototype.controls.underline={tagRegExp:/^(u)$/i,tags:["u"],css:{"text-decoration":"underline"},tooltip:"Underline"},qe.prototype.controls.strikethrough={tagRegExp:/^(s)$/i,tags:["s"],css:{"text-decoration":"line-through"},tooltip:"Strike through"},qe.prototype.cleanHTML={timeout:300,removeEmptyElements:!0,fillEmptyParagraph:!0,replaceNBSP:!0,cleanOnPaste:!0,replaceOldTags:{i:"em",b:"strong"},allowTags:!1,denyTags:!1},qe.prototype.controls.eraser={command:"removeFormat",tooltip:"Clear Formatting"};const Qi=t=>t.replace(/([^>])([\n\r]+)/g,"$1<br/>$2");qe.prototype.askBeforePasteHTML=!0,qe.prototype.askBeforePasteFromWord=!0,qe.prototype.nl2brInPlainText=!0,qe.prototype.defaultActionOnPaste=Y;const to=t=>t.clipboardData?t.clipboardData:t.dataTransfer||new DataTransfer;function eo(t){const e=(e,i,o,s="Clean",n="Insert only Text")=>{if(t.events&&!1===t.events.fire("beforeOpenPasteDialog",e,i,o,s,n))return;const r=Jo(`<div style="word-break: normal; white-space: normal">${e}</div>`,i,o);r.container.setAttribute("data-editor_id",t.id);const a=r.create.fromHTML('<a href="javascript:void(0)" class="jodit_button jodit_button_primary"><span>'+t.i18n("Keep")+"</span></a>"),l=r.create.fromHTML('<a href="javascript:void(0)" class="jodit_button"><span>'+t.i18n(s)+"</span></a>"),d=r.create.fromHTML('<a href="javascript:void(0)" class="jodit_button"><span>'+t.i18n(n)+"</span></a>"),c=r.create.fromHTML('<a href="javascript:void(0)" class="jodit_button"><span>'+t.i18n("Cancel")+"</span></a>");return t.events.on(a,"click",()=>{r.close(),o&&o(!0)}),t.events.on(l,"click",()=>{r.close(),o&&o(!1)}),t.events.on(d,"click",()=>{r.close(),o&&o(0)}),t.events.on(c,"click",()=>{r.close()}),r.setFooter([a,l,n?d:"",c]),t.events&&t.events.fire("afterOpenPasteDialog",r,e,i,o,s,n),r},i=(e,i)=>{if("string"==typeof e)switch(i){case G:e=Ft(e);break;case Z:e=Ut(e);break;case J:e=$t(e)}"string"==typeof e&&t.buffer.set(io,e),t.selection.insertHTML(e)},o=(o,n)=>{const r=t.buffer.get(io);if(yt(o)&&r!==s(o))return t.events.stopPropagation("beforePaste"),o=s(o),e(t.i18n("Your code is similar to HTML. Keep as HTML?"),t.i18n("Paste as HTML"),e=>{let s=Y;!1===e&&(s=J),0===e&&(s=Z),"drop"===n.type&&t.selection.insertCursorAtPoint(n.clientX,n.clientY),i(o,s),t.setEditorValue()},"Insert as Text"),!1},s=t=>{const e=t.search(/<!--StartFragment-->/i);-1!==e&&(t=t.substr(e+20));const i=t.search(/<!--EndFragment-->/i);return-1!==i&&(t=t.substr(0,i)),t};t.events.on("paste",e=>{if(!1===t.events.fire("beforePaste",e))return e.preventDefault(),!1;const o=to(e);if(e&&o){const n=o.types;let r="";if(Array.isArray(n)||"domstringlist"===ut(n))for(let t=0;n.length>t;t+=1)r+=n[t]+";";else r=n+";";let a=(()=>/text\/html/i.test(r)?o.getData("text/html"):/text\/rtf/i.test(r)&&he("safari")?o.getData("text/rtf"):/text\/plain/i.test(r)&&!he("mozilla")?o.getData(V):/text/i.test(r)&&W?o.getData(V):"")();(xe.isNode(a,t.editorWindow)||""!==Bt(a))&&(a=s(a),t.buffer.get(io)!==a&&(a=t.events.fire("processPaste",e,a,r)),("string"==typeof a||xe.isNode(a,t.editorWindow))&&("drop"===e.type&&t.selection.insertCursorAtPoint(e.clientX,e.clientY),i(a,t.options.defaultActionOnPaste)),e.preventDefault(),e.stopPropagation())}return!1!==t.events.fire("afterPaste",e)&&void 0}),t.options.askBeforePasteHTML&&t.events.on("beforePaste",t=>{const e=to(t);if(t&&e&&e.getData(V)){const i=e.getData(V);return o(i,t)}}),t.options.askBeforePasteFromWord&&t.events.on("beforePaste",i=>{const n=to(i);if(i&&n&&n.getData&&n.getData($)){const r=n=>{const r=t.buffer.get(io);if(yt(n)&&r!==s(n))return wt(n)?e(t.i18n("The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?"),t.i18n("Word Paste Detected"),e=>{!0===e&&(n=It(n),t.options.beautifyHTML&&t.ownerWindow.html_beautify&&(n=t.ownerWindow.html_beautify(n))),!1===e&&(n=Ft(n)),0===e&&(n=Ut(Ft(n))),t.selection.insertHTML(n),t.setEditorValue()}):o(n,i),!1};if(n.types&&-1!==Array.from(n.types).indexOf("text/html")){const t=n.getData($);return r(t)}if("drop"!==i.type){const e=t.create.div("",{tabindex:-1,contenteditable:!0,style:{left:-9999,top:0,width:0,height:"100%",lineHeight:"140%",overflow:"hidden",position:"fixed",zIndex:2147483647,wordBreak:"break-all"}});t.container.appendChild(e);const i=t.selection.save();e.focus();let o=0;const s=()=>{xe.safeRemove(e),t.selection&&t.selection.restore(i)},n=()=>{if(o+=1,e.childNodes&&e.childNodes.length>0){const i=e.innerHTML;return s(),void(!1!==r(i)&&t.selection.insertHTML(i))}5>o?nt(n,20):s()};n()}}}),t.options.nl2brInPlainText&&t.events.on("processPaste",(t,e,i)=>{if(i===V+";"&&!yt(e))return Qi(e)})}qe.prototype.controls.paste={tooltip:"Paste from clipboard",async exec(t){t.selection.focus();let e="",i=!0;if(i&&(e=t.buffer.get(io)||"",i=0===e.length),i&&navigator.clipboard){try{const t=await navigator.clipboard.read();if(t&&t.length){const i=await t[0].getType("text/plain");e=await new Response(i).text()}}catch(t){}if(i)try{e=await navigator.clipboard.readText(),i=!1}catch(t){}}if(i){const e=t.value;t.editorDocument.execCommand("paste"),i=e!==t.value}e?t.selection.insertHTML(e):i&&Yo(t.i18n("Your browser doesn't support direct access to the clipboard."),()=>{t.selection.focus()})}},qe.prototype.controls.cut={command:"cut",isDisable:t=>t.selection.isCollapsed(),tooltip:"Cut selection"},qe.prototype.controls.copy={command:"copy",isDisable:t=>t.selection.isCollapsed(),tooltip:"Copy selection"};const io="clipboard";class oo extends Ne{constructor(t){super(t),this.destruct=this.destruct.bind(this,t),t.events.on("afterInit",this.afterInit.bind(this,t)).on("beforeDestruct",this.destruct)}init(t){}destruct(){var t,e;this.isDestructed||(null===(e=null===(t=this.jodit)||void 0===t?void 0:t.events)||void 0===e||e.off("beforeDestruct",this.destruct),this.beforeDestruct(this.jodit),super.destruct())}}class so extends oo{constructor(){super(...arguments),this.currentIndex=0,this.list=[],this.container=null,this.listBox=null,this.previewBox=null,this.dialog=null,this.paste=()=>{if(this.jodit.selection.focus(),this.jodit.selection.insertHTML(this.list[this.currentIndex]),0!==this.currentIndex){const t=this.list[0];this.list[0]=this.list[this.currentIndex],this.list[this.currentIndex]=t}this.dialog&&this.dialog.close(),this.jodit.setEditorValue()},this.onKeyDown=t=>{let e=this.currentIndex;-1!==[j,C,w].indexOf(t.which)&&(t.which===j&&(0===e?e=this.list.length-1:e-=1),t.which===C&&(e===this.list.length-1?e=0:e+=1),t.which!==w?(e!==this.currentIndex&&this.selectIndex(e),t.stopImmediatePropagation(),t.preventDefault()):this.paste())},this.selectIndex=t=>{this.listBox&&Array.from(this.listBox.childNodes).forEach((e,i)=>{e.classList.remove("jodit_active"),t===i&&this.previewBox&&(e.classList.add("jodit_active"),this.previewBox.innerHTML=this.list[t],e.focus())}),this.currentIndex=t},this.showDialog=()=>{2>this.list.length||(this.dialog||this.createDialog(),this.listBox&&(this.listBox.innerHTML=""),this.previewBox&&(this.previewBox.innerHTML=""),this.list.forEach((t,e)=>{const i=this.jodit.ownerDocument.createElement("a");i.textContent=e+1+". "+t.replace(p,""),i.addEventListener("keydown",this.onKeyDown),i.setAttribute("href","javascript:void(0)"),i.setAttribute("data-index",""+e),i.setAttribute("tab-index","-1"),this.listBox&&this.listBox.appendChild(i)}),this.dialog&&this.dialog.open(),nt(()=>{this.selectIndex(0)},100))}}createDialog(){this.dialog=new Xo(this.jodit);const t=this.jodit.create.fromHTML('<a href="javascript:void(0)" style="float:right;" class="jodit_button"><span>'+this.jodit.i18n("Paste")+"</span></a>");t.addEventListener("click",this.paste);const e=this.jodit.create.fromHTML('<a href="javascript:void(0)" style="float:right; margin-right: 10px;" class="jodit_button"><span>'+this.jodit.i18n("Cancel")+"</span></a>");e.addEventListener("click",this.dialog.close),this.container=this.jodit.ownerDocument.createElement("div"),this.container.classList.add("jodit_paste_storage"),this.listBox=this.jodit.ownerDocument.createElement("div"),this.previewBox=this.jodit.ownerDocument.createElement("div"),this.container.appendChild(this.listBox),this.container.appendChild(this.previewBox),this.dialog.setTitle(this.jodit.i18n("Choose Content to Paste")),this.dialog.setContent(this.container),this.dialog.setFooter([t,e]),this.jodit.events.on(this.listBox,"click dblclick",t=>{const e=t.target;return e&&"A"===e.nodeName&&e.hasAttribute("data-index")&&this.selectIndex(parseInt(e.getAttribute("data-index")||"0",10)),"dblclick"===t.type&&this.paste(),!1},"a")}afterInit(){this.jodit.events.on("afterCopy",t=>{-1!==this.list.indexOf(t)&&this.list.splice(this.list.indexOf(t),1),this.list.unshift(t),this.list.length>5&&(this.list.length=5)}),this.jodit.registerCommand("showPasteStorage",{exec:this.showDialog,hotkeys:["ctrl+shift+v","cmd+shift+v"]})}beforeDestruct(){this.dialog&&this.dialog.destruct(),xe.safeRemove(this.previewBox),xe.safeRemove(this.listBox),xe.safeRemove(this.container),this.container=null,this.listBox=null,this.previewBox=null,this.dialog=null,this.list=[]}}const no=["fontWeight","fontStyle","fontSize","color","margin","padding","borderWidth","borderStyle","borderColor","borderRadius","backgroundColor","textDecorationLine","fontFamily"],ro=(t,e,i,o)=>{let s=fe(i,e);return s===o[e]&&(s=i.parentNode&&i!==t.editor&&i.parentNode!==t.editor?ro(t,e,i.parentNode,o):void 0),s};qe.prototype.controls.copyformat={exec(t,e){if(e)if(t.buffer.exists("copyformat"))t.buffer.set("copyformat",!1),t.events.off(t.editor,"mouseup.copyformat");else{const i={},o=xe.up(e,t=>t&&t.nodeType!==Node.TEXT_NODE,t.editor)||t.editor,s=t.create.inside.span();t.editor.appendChild(s),no.forEach(t=>{i[t]=fe(s,t)}),s!==t.editor&&xe.safeRemove(s);const n=((t,e,i)=>{const o={};return e&&no.forEach(s=>{o[s]=ro(t,s,e,i),s.match(/border(Style|Color)/)&&!o.borderWidth&&(o[s]=void 0)}),o})(t,o,i),r=()=>{t.buffer.set("copyformat",!1);const e=t.selection.current();e&&("IMG"===e.nodeName?fe(e,n):t.selection.applyCSS(n)),t.events.off(t.editor,"mouseup.copyformat")};t.events.on(t.editor,"mouseup.copyformat",r),t.buffer.set("copyformat",!0)}},isActive:t=>!!t.buffer.get("copyformat"),tooltip:"Paint format"};var ao=ze.TabsWidget,lo=ze.ColorPickerWidget;function co(t){const e=(e,i,o)=>{const s=ee(o);switch(e){case"background":t.selection.applyCSS({backgroundColor:s||""});break;case"forecolor":t.selection.applyCSS({color:s||""})}return t.setEditorValue(),!1};t.registerCommand("forecolor",e).registerCommand("background",e)}qe.prototype.controls.brush={isActive(t,e,i){if(!i)return!0;const o=t.selection.current(),s=i.container.querySelector("svg");if(s&&s.style.fill&&s.style.removeProperty("fill"),o&&!i.isDisable()){const e=xe.closest(o,e=>xe.isBlock(e,t.editorWindow)||e&&xe.isNode(e,t.editorWindow)&&e.nodeType===Node.ELEMENT_NODE,t.editor)||t.editor,i=""+fe(e,"color"),n=""+fe(e,"background-color");if(i!==""+fe(t.editor,"color"))return s&&(s.style.fill=i),!0;if(n!==""+fe(t.editor,"background-color"))return s&&(s.style.fill=n),!0}return!1},popup(t,e,i,o){let s,n="",r="",a=null;e&&e!==t.editor&&xe.isNode(e,t.editorWindow)&&e.nodeType===Node.ELEMENT_NODE&&(n=""+fe(e,"color"),r=""+fe(e,"background-color"),a=e);const l=lo(t,e=>{a?a.style.backgroundColor=e:t.execCommand("background",!1,e),o()},r),d=lo(t,e=>{a?a.style.color=e:t.execCommand("forecolor",!1,e),o()},n);return s="background"===t.options.colorPickerDefaultTab?{Background:l,Text:d}:{Text:d,Background:l},ao(t,s,a)},tooltip:"Fill color or set the text color"};class ho extends oo{constructor(){super(...arguments),this.isFragmentFromEditor=!1,this.isCopyMode=!1,this.startDragPoint={x:0,y:0},this.draggable=null,this.bufferRange=null,this.onDragEnd=()=>{this.draggable&&(xe.safeRemove(this.draggable),this.draggable=null),this.isCopyMode=!1},this.onDrag=t=>{this.draggable&&(this.draggable.parentNode||this.jodit.ownerDocument.body.appendChild(this.draggable),this.jodit.events.fire("hidePopup"),fe(this.draggable,{left:t.clientX+20,top:t.clientY+20}),this.jodit.selection.insertCursorAtPoint(t.clientX,t.clientY),t.preventDefault(),t.stopPropagation())},this.onDrop=t=>{if(!t.dataTransfer||!t.dataTransfer.files||!t.dataTransfer.files.length){if(!this.isFragmentFromEditor&&!this.draggable)return this.jodit.events.fire("paste",t),t.preventDefault(),t.stopPropagation(),!1;const e=this.jodit.selection.sel,i=this.bufferRange||(e&&e.rangeCount?e.getRangeAt(0):null);let o=null;if(!this.draggable&&i)o=this.isCopyMode?i.cloneContents():i.extractContents();else if(this.draggable)if(this.isCopyMode){const[t,e]="1"===this.draggable.getAttribute("data-is-file")?["a","href"]:["img","src"];o=this.jodit.editorDocument.createElement(t),o.setAttribute(e,this.draggable.getAttribute("data-src")||this.draggable.getAttribute("src")||""),"a"===t&&(o.textContent=o.getAttribute(e)||"")}else o=ve(this.draggable,"target");else this.getText(t)&&(o=this.jodit.create.inside.fromHTML(this.getText(t)));e&&e.removeAllRanges(),this.jodit.selection.insertCursorAtPoint(t.clientX,t.clientY),o&&(this.jodit.selection.insertNode(o,!1,!1),i&&o.firstChild&&o.lastChild&&(i.setStartBefore(o.firstChild),i.setEndAfter(o.lastChild),this.jodit.selection.selectRange(i),this.jodit.events.fire("synchro")),"IMG"===o.nodeName&&this.jodit.events&&this.jodit.events.fire("afterInsertImage",o)),t.preventDefault(),t.stopPropagation()}this.isFragmentFromEditor=!1},this.onDragStart=t=>{let e=t.target;if(this.onDragEnd(),this.isFragmentFromEditor=xe.isOrContains(this.jodit.editor,e,!0),this.isCopyMode=!this.isFragmentFromEditor||ge(t),this.isFragmentFromEditor){const t=this.jodit.selection.sel,e=t&&t.rangeCount?t.getRangeAt(0):null;e&&(this.bufferRange=e.cloneRange())}else this.bufferRange=null;this.startDragPoint.x=t.clientX,this.startDragPoint.y=t.clientY,e.nodeType===Node.ELEMENT_NODE&&e.matches(".jodit_filebrowser_files_item")&&(e=e.querySelector("img")),"IMG"===e.nodeName&&(this.draggable=e.cloneNode(!0),ve(this.draggable,"target",e),fe(this.draggable,{"z-index":1e14,"pointer-events":"none",position:"fixed",display:"inlin-block",left:this.startDragPoint.x,top:this.startDragPoint.y,width:e.offsetWidth,height:e.offsetHeight}))},this.getDataTransfer=t=>t.dataTransfer||new DataTransfer,this.getText=t=>{const e=this.getDataTransfer(t);return e.getData($)||e.getData(V)}}afterInit(){this.jodit.events.on(window,"dragover",this.onDrag).on([window,this.jodit.editorDocument,this.jodit.editor],"dragstart",this.onDragStart).on("drop",this.onDrop).on(window,"dragend drop mouseup",this.onDragEnd)}beforeDestruct(){this.onDragEnd()}}qe.prototype.draggableTags=["img","a","jodit-media","jodit"];class po extends oo{constructor(){super(...arguments),this.dragList=[],this.isCopyMode=!1,this.draggable=null,this.wasMoved=!1,this.timeout=0,this.onDrag=at(t=>{this.draggable&&(this.wasMoved=!0,this.jodit.events.fire("hidePopup hideResizer"),this.draggable.parentNode||this.jodit.ownerDocument.body.appendChild(this.draggable),fe(this.draggable,{left:t.clientX+20,top:t.clientY+20}),this.jodit.selection.insertCursorAtPoint(t.clientX,t.clientY))},this.jodit.defaultTimeout),this.onDragStart=t=>{let e=t.target,i=null;if(this.dragList.length){do{-1!==this.dragList.indexOf(e.nodeName.toLowerCase())&&(!i||e.firstChild===i&&e.lastChild===i)&&(i=e),e=e.parentNode}while(e&&e!==this.jodit.editor);i&&(this.isCopyMode=ge(t),this.onDragEnd(),this.timeout=nt(e=>{e&&(this.draggable=e.cloneNode(!0),ve(this.draggable,"target",e),fe(this.draggable,{"z-index":1e14,"pointer-events":"none",position:"fixed",display:"inlin-block",left:t.clientX,top:t.clientY,width:e.offsetWidth,height:e.offsetHeight}))},this.jodit.defaultTimeout,i),t.preventDefault())}},this.onDragEnd=()=>{window.clearTimeout(this.timeout),this.draggable&&(xe.safeRemove(this.draggable),this.draggable=null,this.wasMoved=!1)},this.onDrop=()=>{if(!this.draggable||!this.wasMoved)return void this.onDragEnd();let t=ve(this.draggable,"target");this.onDragEnd(),this.isCopyMode&&(t=t.cloneNode(!0)),this.jodit.selection.insertNode(t,!0,!1),"IMG"===t.nodeName&&this.jodit.events&&this.jodit.events.fire("afterInsertImage",t),this.jodit.events.fire("synchro")}}afterInit(){this.dragList=this.jodit.options.draggableTags?st(this.jodit.options.draggableTags).filter(t=>t).map(t=>t.toLowerCase()):[],this.dragList.length&&this.jodit.events.on(this.jodit.editor,"mousemove touchmove",this.onDrag).on(this.jodit.editor,"mousedown touchstart dragstart",this.onDragStart).on("mouseup touchend",this.onDrop).on(window,"mouseup touchend",this.onDragEnd)}beforeDestruct(){this.onDragEnd()}}const uo=(t,e,i,o)=>{const s=t.create.inside.element(i),n=t.create.inside.element("br");s.appendChild(n),o&&o.cssText&&s.setAttribute("style",o.cssText),t.selection.insertNode(s,!1,!1),t.selection.setCursorBefore(n);const r=t.editorDocument.createRange();return r.setStartBefore("br"!==i.toLowerCase()?n:s),r.collapse(!0),t.selection.selectRange(r),xe.safeRemove(e),ke(s,t.editor,t.editorDocument),t.events&&t.events.fire("synchro"),s};function fo(t){t.options.enterBlock||(t.options.enterBlock="br"===t.options.enter.toLowerCase()?B:t.options.enter.toLowerCase()),t.events.on("keydown",e=>{if(e.which===w){const i=t.events.fire("beforeEnter",e);if(void 0!==i)return i;t.selection.isCollapsed()||t.execCommand("Delete"),t.selection.focus();let o=t.selection.current(!1);const s=t.selection.sel;let n=t.selection.range;o&&o!==t.editor||(t.selection.current(),o=t.create.inside.text(l),s&&s.rangeCount?n.insertNode(o):t.editor.appendChild(o),n.selectNode(o),n.collapse(!1),s&&(s.removeAllRanges(),s.addRange(n)));let r=!!o&&xe.up(o,e=>xe.isBlock(e,t.editorWindow),t.editor);const a=r&&"LI"===r.nodeName;if(!a&&(t.options.enter.toLowerCase()===R.toLowerCase()||e.shiftKey||xe.closest(o,"PRE|BLOCKQUOTE",t.editor))){const e=t.create.inside.element("br");return t.selection.insertNode(e,!0),ke(e,t.editor,t.editorDocument),!1}if(!r&&o&&!xe.prev(o,e=>xe.isBlock(e,t.editorWindow)||!!e&&xe.isImage(e,t.editorWindow),t.editor)){let e=o;if(xe.up(e,i=>{i&&i.hasChildNodes()&&i!==t.editor&&(e=i)},t.editor),r=xe.wrapInline(e,t.options.enter,t),xe.isEmpty(r)){const e=t.editorDocument.createElement("br");r.appendChild(e),t.selection.setCursorBefore(e)}n=s&&s.rangeCount?s.getRangeAt(0):t.editorDocument.createRange()}let d=!1,c=!1;if(r){if(!xe.canSplitBlock(r,t.editorWindow)){const e=t.create.inside.element("br");return t.selection.insertNode(e,!1),t.selection.setCursorAfter(e),!1}if(a&&xe.isEmpty(r)){let e=!1;const i=xe.closest(r,"ol|ul",t.editor);if(xe.prev(r,t=>t&&"LI"===t.nodeName,i))if(xe.next(r,t=>t&&"LI"===t.nodeName,i)){const o=t.editorDocument.createRange();o.setStartBefore(i),o.setEndAfter(r);const s=o.extractContents();i.parentNode&&i.parentNode.insertBefore(s,i),e=t.selection.setCursorBefore(i)}else e=t.selection.setCursorAfter(i);else e=t.selection.setCursorBefore(i);return xe.safeRemove(r),uo(t,e,t.options.enter),Mt("li",i).length||xe.safeRemove(i),!1}if(t.selection.cursorInTheEdge(!0,r))return d=t.selection.setCursorBefore(r),uo(t,d,a?"li":t.options.enter,r.style),r&&t.selection.setCursorIn(r,!0),!1;if(!1===t.selection.cursorInTheEdge(!1,r)){const e=t.editorDocument.createRange();e.setStartBefore(r),e.setEnd(n.startContainer,n.startOffset);const i=e.extractContents();r.parentNode&&r.parentNode.insertBefore(i,r),t.selection.setCursorIn(r,!0)}else d=t.selection.setCursorAfter(r)}else c=!0;return(c||d)&&uo(t,d,a?"li":t.options.enter,r?r.style:void 0),!1}})}function mo(t){if(t.options.showMessageErrors){let e;const i=t.create.div("jodit_error_box_for_messages"),o=()=>{e=5,Array.from(i.childNodes).forEach(o=>{fe(i,"bottom",e+"px"),e+=o.offsetWidth+t.options.showMessageErrorOffsetPx})};t.workplace.appendChild(i),t.events.on("beforeDestruct",()=>{xe.safeRemove(i)}).on("errorMessage",(e,s,n)=>{const r=t.create.div("active "+(s||""),e);i.appendChild(r),o(),nt(()=>{r.classList.remove("active"),nt(()=>{xe.safeRemove(r),o()},300)},n||t.options.showMessageErrorTime)})}}function go(t){const e=(e,i,o)=>{switch(e){case"fontsize":t.selection.applyCSS({fontSize:Zt(o)});break;case"fontname":t.selection.applyCSS({fontFamily:o})}return t.events.fire("synchro"),!1};t.registerCommand("fontsize",e).registerCommand("fontname",e)}function vo(t){t.registerCommand("formatblock",(e,i,o)=>{t.selection.focus();let s=!1;if(t.selection.eachSelection(e=>{const i=t.selection.save();let n=!!e&&xe.up(e,e=>xe.isBlock(e,t.editorWindow),t.editor);n&&"LI"!==n.nodeName||!e||(n=xe.wrapInline(e,t.options.enter,t)),n?(n.tagName.match(/TD|TH|TBODY|TABLE|THEAD/i)?t.selection.isCollapsed()?xe.wrapInline(e,o,t):t.selection.applyCSS({},o):o===t.options.enterBlock.toLowerCase()&&n.parentNode&&"LI"===n.parentNode.nodeName?xe.unwrap(n):xe.replace(n,o,!0,!1,t.editorDocument),s=!0,t.selection.restore(i)):t.selection.restore(i)}),!s){const e=t.editorDocument.createElement(o);e.innerHTML=l,t.selection.insertNode(e,!1),t.selection.setCursorIn(e)}return t.setEditorValue(),!1})}function bo(t){let e=!1,i=0,o=0,s=!1;const n=()=>{t.events&&(e?(i=fe(t.container,"height"),o=fe(t.container,"width"),fe(t.container,{height:t.ownerWindow.innerHeight,width:t.ownerWindow.innerWidth}),s=!0):s&&fe(t.container,{height:i||"auto",width:o||"auto"}))},r=i=>{var o,s;if(t.container){if(void 0===i&&(i=!t.container.classList.contains("jodit_fullsize")),t.options.fullsize=i,e=i,t.container.classList.toggle("jodit_fullsize",i),t.toolbar&&(i?null===(s=t.container.querySelector(".jodit_toolbar_container"))||void 0===s||s.appendChild(t.toolbar.container):null===(o=t.toolbar.getParentContainer())||void 0===o||o.appendChild(t.toolbar.container),fe(t.toolbar.container,"width","auto")),t.options.globalFullsize){let e=t.container.parentNode;for(;e&&e.nodeType!==Node.DOCUMENT_NODE;)e.classList.toggle("jodit_fullsize_box",i),e=e.parentNode;n()}t.events.fire("afterResize")}};t.options.globalFullsize&&t.events.on(t.ownerWindow,"resize",n),t.events.on("afterInit afterOpen",()=>{var e,i;t.toggleFullSize(null===(i=null===(e=t)||void 0===e?void 0:e.options)||void 0===i?void 0:i.fullsize)}).on("toggleFullSize",r).on("beforeDestruct beforeClose",()=>{r(!1)}).on("beforeDestruct",()=>{t.events&&t.events.off(t.ownerWindow,"resize",n)})}qe.prototype.showMessageErrors=!0,qe.prototype.showMessageErrorTime=3e3,qe.prototype.showMessageErrorOffsetPx=3,qe.prototype.controls.fontsize={command:"fontSize",list:["8","9","10","11","12","14","16","18","24","30","36","48","60","72","96"],template:(t,e,i)=>i,tooltip:"Font size",isActiveChild(t,e){const i=t.selection.current();if(i){const o=xe.closest(i,e=>xe.isBlock(e,t.editorWindow)||e&&xe.isNode(e,t.editorWindow)&&e.nodeType===Node.ELEMENT_NODE,t.editor)||t.editor,s=fe(o,"font-size");return!(!s||!e.args||""+e.args[1]!=""+s)}return!1},isActive(t){const e=t.selection.current();if(e){const i=xe.closest(e,e=>xe.isBlock(e,t.editorWindow)||e&&xe.isNode(e,t.editorWindow)&&e.nodeType===Node.ELEMENT_NODE,t.editor)||t.editor;return""+fe(i,"font-size")!=""+fe(t.editor,"font-size")}return!1}},qe.prototype.controls.font={command:"fontname",exec(t,e,i){t.execCommand(i.command,!1,i.args?i.args[0]:void 0)},list:{"Helvetica,sans-serif":"Helvetica","Arial,Helvetica,sans-serif":"Arial","Georgia,serif":"Georgia","Impact,Charcoal,sans-serif":"Impact","Tahoma,Geneva,sans-serif":"Tahoma","'Times New Roman',Times,serif":"Times New Roman","Verdana,Geneva,sans-serif":"Verdana"},template:(t,e,i)=>`<span style="font-family: ${e}">${i}</span>`,isActiveChild(t,e){const i=t.selection.current(),o=t=>t.toLowerCase().replace(/['"]+/g,"").replace(/[^a-z0-9]+/g,",");if(i){const s=xe.closest(i,e=>xe.isBlock(e,t.editorWindow)||e&&xe.isNode(e,t.editorWindow)&&e.nodeType===Node.ELEMENT_NODE,t.editor)||t.editor,n=""+fe(s,"font-family");return!(!n||!e.args||o(""+e.args[0])!==o(n))}return!1},isActive(t){const e=t.selection.current();if(e){const i=xe.closest(e,e=>xe.isBlock(e,t.editorWindow)||xe.isNode(e,t.editorWindow)&&e&&e.nodeType===Node.ELEMENT_NODE,t.editor)||t.editor;return""+fe(i,"font-family")!=""+fe(t.editor,"font-family")}return!1},tooltip:"Font family"},qe.prototype.controls.paragraph={command:"formatBlock",getLabel(t,e,i){const o=t.selection.current();if(o&&t.options.textIcons){const s=(xe.closest(o,e=>xe.isBlock(e,t.editorWindow),t.editor)||t.editor).nodeName.toLowerCase(),n=e.list;i&&e.data&&e.data.currentValue!==s&&e.list&&n[s]&&(i.textBox.innerHTML=`<span>${t.i18n(n[s])}</span>`,i.textBox.firstChild.classList.add("jodit_icon"),e.data.currentValue=s)}return!1},exec(t,e,i){t.execCommand(i.command,!1,i.args?i.args[0]:void 0)},data:{currentValue:"left"},list:{p:"Normal",h1:"Heading 1",h2:"Heading 2",h3:"Heading 3",h4:"Heading 4",blockquote:"Quote"},isActiveChild(t,e){const i=t.selection.current();if(i){const o=xe.closest(i,e=>xe.isBlock(e,t.editorWindow),t.editor);return o&&o!==t.editor&&void 0!==e.args&&o.nodeName.toLowerCase()===e.args[0]}return!1},isActive(t,e){const i=t.selection.current();if(i){const o=xe.closest(i,e=>xe.isBlock(e,t.editorWindow),t.editor);return o&&o!==t.editor&&void 0!==e.list&&"p"!==o.nodeName.toLowerCase()&&void 0!==e.list[o.nodeName.toLowerCase()]}return!1},template:(t,e,i)=>"<"+e+' class="jodit_list_element"><span>'+t.i18n(i)+"</span></"+e+"></li>",tooltip:"Insert format block"},qe.prototype.fullsize=!1,qe.prototype.globalFullsize=!0,qe.prototype.controls.fullsize={exec(t){t.toggleFullSize()},isActive:t=>t.isFullSize(),getLabel(t,e,i){const o=t.isFullSize()?"shrink":"fullsize";i&&(i.textBox.innerHTML=t.options.textIcons?`<span>${t.i18n(o)}</span>`:Ce.getIcon(o),i.textBox.firstChild.classList.add("jodit_icon"))},tooltip:"Open editor in fullsize",mode:H+P},qe.prototype.commandToHotkeys={removeFormat:["ctrl+shift+m","cmd+shift+m"],insertOrderedList:["ctrl+shift+7","cmd+shift+7"],insertUnorderedList:["ctrl+shift+8, cmd+shift+8"],selectall:["ctrl+a","cmd+a"]};class yo extends oo{constructor(){super(...arguments),this.onKeyPress=t=>{const e=this.specialKeys[t.which],i=(t.key||String.fromCharCode(t.which)).toLowerCase(),o=[e||i];return["alt","ctrl","shift","meta"].forEach(i=>{t[i+"Key"]&&e!==i&&o.push(i)}),Kt(o.join("+"))},this.specialKeys={8:"backspace",9:"tab",10:"return",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",59:";",61:"=",91:"meta",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"}}afterInit(t){Object.keys(t.options.commandToHotkeys).forEach(e=>{const i=t.options.commandToHotkeys[e];i&&t.registerHotkeyToCommand(i,e)});let e=!1;t.events.on("keydown.hotkeys",i=>{const o=this.onKeyPress(i);if(!1===this.jodit.events.fire(o+".hotkey",i.type))return e=!0,t.events.stopPropagation("keydown"),!1},void 0,void 0,!0).on("keyup.hotkeys",()=>{if(e)return e=!1,t.events.stopPropagation("keyup"),!1},void 0,void 0,!0)}beforeDestruct(t){t.events&&t.events.off(".hotkeys")}}function wo(t){t.events.on("afterSetMode",()=>{t.isEditorMode()&&t.selection.focus()}).on("generateDocumentStructure.iframe",(t,e)=>{const i=t||e.iframe.contentWindow.document;if(i.open(),i.write('<!DOCTYPE html><html dir="'+e.options.direction+'" class="jodit" lang="'+Ht(e.options.language)+'"><head><title>Jodit Editor</title>'+(e.options.iframeBaseUrl?'<base href="'+e.options.iframeBaseUrl+'"/>':"")+'</head><body class="jodit_wysiwyg" style="outline:none" contenteditable="true"></body></html>'),i.close(),e.options.iframeCSSLinks&&e.options.iframeCSSLinks.forEach(t=>{const e=i.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),i.head&&i.head.appendChild(e)}),e.options.iframeStyle){const t=i.createElement("style");t.innerHTML=e.options.iframeStyle,i.head&&i.head.appendChild(t)}}).on("createEditor",async()=>{if(!t.options.iframe)return;delete t.editor;const e=t.create.element("iframe");e.style.display="block",e.src="about:blank",e.className="jodit_wysiwyg_iframe",e.setAttribute("allowtransparency","true"),e.setAttribute("tabindex",""+t.options.tabIndex),e.setAttribute("frameborder","0"),t.workplace.appendChild(e),t.iframe=e,await t.events.fire("generateDocumentStructure.iframe",null,t);const i=t.iframe.contentWindow.document;if(t.editorDocument=i,t.editorWindow=t.iframe.contentWindow,t.create.inside.setDocument(i),t.editor=i.body,"auto"===t.options.height){i.documentElement&&(i.documentElement.style.overflowY="hidden");const e=at(()=>{t.editor&&t.iframe&&"auto"===t.options.height&&fe(t.iframe,"height",t.editor.offsetHeight)},t.defaultTimeout/2);t.events.on("change afterInit afterSetMode resize",e).on([t.iframe,t.editorWindow,i.documentElement],"load",e).on(i,"readystatechange DOMContentLoaded",e)}return(t=>{t.matches||(t.matches=Element.prototype.matches)})(t.editorWindow.Element.prototype),t.editorDocument.documentElement&&t.events.on(t.editorDocument.documentElement,"mousedown touchend",()=>{t.selection.isFocused()||(t.selection.focus(),t.selection.setCursorIn(t.editor))}).on(t.editorWindow,"mousedown touchstart keydown keyup touchend click mouseup mousemove scroll",e=>{t.events&&t.events.fire&&t.events.fire(t.ownerWindow,e)}),!1})}qe.prototype.iframeBaseUrl="",qe.prototype.iframeDefaultSrc="about:blank",qe.prototype.iframeStyle='html{margin: 0px;min-height: 100%;}body{box-sizing: border-box;font-size: 13px;    line-height: 1.6;padding:10px;background:transparent;color:#000;position:relative;z-index: 2;user-select:auto;margin:0px;overflow:auto;}table{width:100%;border: none;border-collapse:collapse;empty-cells: show;max-width: 100%;}th,td{padding: 2px 5px;border:1px solid #ccc;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}td[data-jodit-selected-cell],th[data-jodit-selected-cell]{border: 1px double #1e88e5}p{margin-top:0;}.jodit_editor .jodit_iframe_wrapper{display: block;clear: both;user-select: none;position: relative;}.jodit_editor .jodit_iframe_wrapper:after {position:absolute;content:"";z-index:1;top:0;left:0;right: 0;bottom: 0;cursor: pointer;display: block;background: rgba(0, 0, 0, 0);} .jodit_disabled{user-select: none;-o-user-select: none;-moz-user-select: none;-khtml-user-select: none;-webkit-user-select: none;-ms-user-select: none}',qe.prototype.iframeCSSLinks=[];const _o="__jodit_imageprocessor_binded";function ko(t){t.events.on("change afterInit",rt(()=>{t.editor&&Mt("img",t.editor).forEach(e=>{e[_o]||(e[_o]=!0,e.complete||e.addEventListener("load",(function i(){t.events&&t.events.fire&&t.events.fire("resize"),e.removeEventListener("load",i)})),t.events.on(e,"mousedown touchstart",()=>{t.selection.select(e)}))})},t.defaultTimeout))}var jo=ze.TabsWidget,xo=ze.FileSelectorWidget;function Co(t){const e=t.i18n,i=Ce.getIcon.bind(Ce),o=t.options,s=t.create.fromHTML.bind(t.create),n=function(n){if(o.readonly)return;n&&n.stopImmediatePropagation();const r=this,a=new Xo(t),l={check:s(`<a href="javascript:void(0)" class="jodit_button  jodit_status_success">${i("check")}<span>${e("Ok")}</span></a>`),cancel:s(`<a href="javascript:void(0)" class="jodit_button  jodit_status_primary">${i("cancel")}<span>${e("Cancel")}</span></a>`),remove:s(`<a href="javascript:void(0)" class="jodit_button">${i("bin")}<span>${e("Delete")}</span></a>`)},d=s(`<form class="jodit_properties">\n\t\t\t\t\t\t\t\t<div class="jodit_grid">\n\t\t\t\t\t\t\t\t\t<div class="jodit_col-lg-2-5">\n\t\t\t\t\t\t\t\t\t\t<div class="jodit_properties_view_box">\n\t\t\t\t\t\t\t\t\t\t\t<div style="${o.image.showPreview?"":"display:none"}" class="jodit_properties_image_view">\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="imageViewSrc" src="" alt=""/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div style="${o.image.editSize?"":"display:none"}" class="jodit_form_group jodit_properties_image_sizes">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="number" class="imageWidth jodit_input"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class="jodit_lock_helper jodit_lock_size" href="javascript:void(0)">${i("lock")}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="number" class="imageHeight jodit_input"/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="jodit_col-lg-3-5 tabsbox"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>`),c=s(`<div style="${o.image.editMargins?"":"display:none"}" class="jodit_form_group">\n\t\t\t\t\t\t\t\t<label>${e("Margins")}</label>\n\t\t\t\t\t\t\t\t<div class="jodit_grid jodit_vertical_middle">\n\t\t\t\t\t\t\t\t\t<input class="jodit_col-lg-1-5 margins marginTop jodit_input" data-id="marginTop" type="text" placeholder="${e("top")}"/>\n\t\t\t\t\t\t\t\t\t<a style="text-align: center;" class="jodit_lock_helper jodit_lock_margin jodit_col-lg-1-5" href="javascript:void(0)">${i("lock")}</a>\n\t\t\t\t\t\t\t\t\t<input disabled="true" class="jodit_col-lg-1-5 margins marginRight jodit_input" data-id="marginRight" type="text" placeholder="${e("right")}"/>\n\t\t\t\t\t\t\t\t\t<input disabled="true" class="jodit_col-lg-1-5 margins marginBottom jodit_input" data-id="marginBottom" type="text" placeholder="${e("bottom")}"/>\n\t\t\t\t\t\t\t\t\t<input disabled="true" class="jodit_col-lg-1-5 margins marginLeft jodit_input" data-id="marginLeft" type="text" placeholder="${e("left")}"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style="${o.image.editStyle?"":"display:none"}" class="jodit_form_group">\n\t\t\t\t\t\t\t\t<label>${e("Styles")}</label>\n\t\t\t\t\t\t\t\t<input type="text" class="style jodit_input"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style="${o.image.editClass?"":"display:none"}" class="jodit_form_group">\n\t\t\t\t\t\t\t\t<label for="classes">${e("Classes")}</label>\n\t\t\t\t\t\t\t\t<input type="text" class="classes jodit_input"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style="${o.image.editId?"":"display:none"}" class="jodit_form_group">\n\t\t\t\t\t\t\t\t<label for="id">Id</label>\n\t\t\t\t\t\t\t\t<input type="text" class="id jodit_input"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="${o.image.editBorderRadius?"":"display:none"}"\n\t\t\t\t\t\t\t\tclass="jodit_form_group"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<label for="border_radius">${e("Border radius")}</label>\n\t\t\t\t\t\t\t\t<input type="number" class="border_radius jodit_input"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="${o.image.editAlign?"":"display:none"}"\n\t\t\t\t\t\t\t\tclass="jodit_form_group"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<label for="align">${e("Align")}</label>\n\t\t\t\t\t\t\t\t<select class="select align jodit_select">\n\t\t\t\t\t\t\t\t\t<option value="">${e("--Not Set--")}</option>\n\t\t\t\t\t\t\t\t\t<option value="left">${e("Left")}</option>\n\t\t\t\t\t\t\t\t\t<option value="center">${e("Center")}</option>\n\t\t\t\t\t\t\t\t\t<option value="right">${e("Right")}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>`),h=o.filebrowser.ajax.url||o.uploader.url,p=o.image.useImageEditor,u=s(`<div style="${o.image.editSrc?"":"display:none"}" class="jodit_form_group">\n\t\t\t\t\t\t\t\t<label>${e("Src")}</label>\n\t\t\t\t\t\t\t\t<div class="jodit_input_group">\n\t\t\t\t\t\t\t\t\t<input class="jodit_input imageSrc" type="text"/>\n\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\tclass="jodit_input_group-buttons"\n\t\t\t\t\t\t\t\t\t\tstyle="${h?"":"display: none"}"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<a class="jodit_button jodit_rechange" href="javascript:void(0)">${i("image")}</a>\n\t\t\t\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\t\t\t\tclass="jodit_button jodit_use_image_editor" href="javascript:void(0)"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle="${p?"":"display: none"}"\n\t\t\t\t\t\t\t\t\t\t\t>${i("crop")}</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style="${o.image.editTitle?"":"display:none"}" class="jodit_form_group">\n\t\t\t\t\t\t\t\t<label for="imageTitle">${e("Title")}</label>\n\t\t\t\t\t\t\t\t<input type="text" class="imageTitle jodit_input"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style="${o.image.editAlt?"":"display:none"}" class="jodit_form_group">\n\t\t\t\t\t\t\t\t<label for="imageAlt">${e("Alternative")}</label>\n\t\t\t\t\t\t\t\t<input type="text" class="imageAlt jodit_input"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style="${o.image.editLink?"":"display:none"}" class="jodit_form_group">\n\t\t\t\t\t\t\t\t<label for="imageLink">${e("Link")}</label>\n\t\t\t\t\t\t\t\t<input type="text" class="imageLink jodit_input"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style="${o.image.editLink?"":"display:none"}" class="jodit_form_group">\n\t\t\t\t\t\t\t\t<div class="jodit_vertical_middle">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" class="imageLinkOpenInNewTab jodit_checkbox"/>\n\t\t\t\t\t\t\t\t\t${e("Open link in new tab")}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>`),f=r.naturalWidth/r.naturalHeight||1,m=d.querySelector(".imageWidth"),g=d.querySelector(".imageHeight"),v=()=>{je(d,".imageSrc",r.getAttribute("src")||"");const t=d.querySelector(".imageViewSrc");t&&t.setAttribute("src",r.getAttribute("src")||"")},b=()=>{v(),(()=>{r.hasAttribute("title")&&je(d,".imageTitle",r.getAttribute("title")||""),r.hasAttribute("alt")&&je(d,".imageAlt",r.getAttribute("alt")||"");const e=xe.closest(r,"a",t.editor);e&&(je(d,".imageLink",e.getAttribute("href")||""),d.querySelector(".imageLinkOpenInNewTab").checked="_blank"===e.getAttribute("target"))})(),m.value=""+r.offsetWidth,g.value=""+r.offsetHeight,(()=>{if(!o.image.editMargins)return;let t=!1;Mt(".margins",d).forEach(e=>{const i=e.getAttribute("data-id")||"";let o=r.style[i];o&&(/^[0-9]+(px)?$/.test(o)&&(o=parseInt(o,10)),e.value=""+o||"",t||"marginTop"===i||e.value===je(d,".marginTop")||(t=!0))}),_=!t;const e=d.querySelector(".jodit_lock_margin");e&&(e.innerHTML=i(_?"lock":"unlock")),Mt(".margins:not(.marginTop)",d).forEach(t=>_?t.setAttribute("disabled","true"):t.removeAttribute("disabled"))})(),je(d,".classes",(r.getAttribute("class")||"").replace(/jodit_focused_image[\s]*/,"")),je(d,".id",r.getAttribute("id")||""),je(d,".border_radius",""+(parseInt(r.style.borderRadius||"0",10)||"0")),r.style.cssFloat&&-1!==["left","right"].indexOf(r.style.cssFloat.toLowerCase())?je(d,".align",fe(r,"float")):"block"===fe(r,"display")&&"auto"===r.style.marginLeft&&"auto"===r.style.marginRight&&je(d,".align","center"),je(d,".style",r.getAttribute("style")||"")};let y,w=!0,_=!0;const k={},j=d.querySelector(".tabsbox");k.Image=u,k.Advanced=c,j&&j.appendChild(jo(t,k)),b(),t.events.on(a,"afterClose",()=>{a.destruct(),r.parentNode&&o.image.selectImageAfterClose&&t.selection.select(r)}),l.remove.addEventListener("click",()=>{xe.safeRemove(r),a.close()}),o.image.useImageEditor&&Mt(".jodit_use_image_editor",u).forEach(i=>{t.events.on(i,"mousedown touchstart",()=>{const i=r.getAttribute("src")||"",o=t.create.element("a"),s=()=>{o.host===location.host||Jo(e("You can only edit your own images. Download this image on the host?"),i=>{i&&t.uploader&&t.uploader.uploadRemoteImage(""+o.href,t=>{Yo(e("The image has been successfully uploaded to the host!"),()=>{"string"==typeof t.newfilename&&(r.setAttribute("src",t.baseurl+t.newfilename),v())})},t=>{Yo(e("There was an error loading %s",t.message))})})};o.href=i,t.getInstance("FileBrowser").dataProvider.getPathByUrl(""+o.href,(e,s,n)=>{t.getInstance("FileBrowser").openImageEditor(o.href,s,e,n,()=>{const t=(new Date).getTime();r.setAttribute("src",i+(-1!==i.indexOf("?")?"":"?")+"&_tmp="+t),v()},t=>{Yo(t.message)})},t=>{Yo(t.message,s)})})}),Mt(".jodit_rechange",u).forEach(e=>{e.addEventListener("mousedown",i=>{e.classList.toggle("active");const o=new Ze(t,e);o.open(xo(t,{upload(t){t.files&&t.files.length&&r.setAttribute("src",t.baseurl+t.files[0]),b(),o.close()},filebrowser(t){t&&t.files&&Array.isArray(t.files)&&t.files.length&&(r.setAttribute("src",t.files[0]),o.close(),b())}},r,o.close),!0),i.stopPropagation()})});const x=d.querySelector(".jodit_lock_helper.jodit_lock_size"),C=d.querySelector(".jodit_lock_helper.jodit_lock_margin");x&&x.addEventListener("click",(function(){w=!w,this.innerHTML=i(w?"lock":"unlock"),t.events.fire(m,"change")})),C&&C.addEventListener("click",(function(){_=!_,this.innerHTML=i(_?"lock":"unlock"),_?Mt(".margins",d).forEach(t=>{t.matches(".marginTop")||t.setAttribute("disabled","true")}):Mt(".margins",d).forEach(t=>{t.matches(".marginTop")||t.removeAttribute("disabled")})}));const z=t=>{const e=parseInt(m.value,10),i=parseInt(g.value,10);t.target===m?g.value=""+Math.round(e/f):m.value=""+Math.round(i*f)};return t.events.on([m,g],"change keydown mousedown paste",e=>{w&&(t.defaultTimeout?(clearTimeout(y),y=nt(z.bind(this,e),t.defaultTimeout)):z(e))}),a.setTitle(e("Image properties")),a.setContent(d),l.check.addEventListener("click",()=>{if(o.image.editStyle&&(je(d,".style")?r.setAttribute("style",je(d,".style")):r.removeAttribute("style")),!je(d,".imageSrc"))return xe.safeRemove(r),void a.close();r.setAttribute("src",je(d,".imageSrc")),r.style.borderRadius="0"!==je(d,".border_radius")&&/^[0-9]+$/.test(je(d,".border_radius"))?je(d,".border_radius")+"px":"",je(d,".imageTitle")?r.setAttribute("title",je(d,".imageTitle")):r.removeAttribute("title"),je(d,".imageAlt")?r.setAttribute("alt",je(d,".imageAlt")):r.removeAttribute("alt");let e=xe.closest(r,"a",t.editor);je(d,".imageLink")?(e||(e=xe.wrap(r,"a",t)),e.setAttribute("href",je(d,".imageLink")),d.querySelector(".imageLinkOpenInNewTab").checked?e.setAttribute("target","_blank"):e.removeAttribute("target")):e&&e.parentNode&&e.parentNode.replaceChild(r,e);const i=t=>(t=Bt(t),/^[0-9]+$/.test(t)?t+"px":t);m.value===""+r.offsetWidth&&g.value===""+r.offsetHeight||fe(r,{width:Bt(m.value)?i(m.value):null,height:Bt(g.value)?i(g.value):null}),o.image.editMargins&&(_?fe(r,"margin",i(je(d,".marginTop"))):Mt(".margins",d).forEach(t=>{const e=t.getAttribute("data-id")||"";fe(r,e,i(t.value))})),o.image.editClass&&(je(d,".classes")?r.setAttribute("class",je(d,".classes")):r.removeAttribute("class")),o.image.editId&&(je(d,".id")?r.setAttribute("id",je(d,".id")):r.removeAttribute("id")),o.image.editAlign&&(je(d,".align")?-1!==["right","left"].indexOf(je(d,".align").toLowerCase())?(fe(r,"float",je(d,".align")),me(r)):(fe(r,"float",""),fe(r,{display:"block","margin-left":"auto","margin-right":"auto"})):(fe(r,"float")&&-1!==["right","left"].indexOf((""+fe(r,"float")).toLowerCase())&&fe(r,"float",""),me(r))),r.getAttribute("style")||r.removeAttribute("style"),t.setEditorValue(),a.close()}),l.cancel.addEventListener("click",()=>a.close()),a.setFooter([[l.cancel,l.remove],l.check]),a.setSize(500),a.open(),n&&n.preventDefault(),!1};t.events.on("afterInit",()=>{t.events.on(t.editor,"dblclick",o.image.openOnDblClick?n:function(e){e.stopImmediatePropagation(),t.selection.select(this)},"img")}).on("openImageProperties",t=>{n.call(t)})}function zo(t){const e=e=>{const i=[];return t.selection.eachSelection(o=>{const s=t.selection.save();let n=!!o&&xe.up(o,e=>xe.isBlock(e,t.editorWindow),t.editor);const r=t.options.enter;if(!n&&o&&(n=xe.wrapInline(o,r!==R?r:B,t)),!n)return t.selection.restore(s),!1;const a=-1!==i.indexOf(n);if(n&&n.style&&!a){i.push(n);let o=n.style.marginLeft?parseInt(n.style.marginLeft,10):0;o+=t.options.indentMargin*("outdent"===e?-1:1),n.style.marginLeft=o>0?o+"px":"",n.getAttribute("style")||n.removeAttribute("style")}t.selection.restore(s)}),t.setEditorValue(),!1};t.registerCommand("indent",{exec:e,hotkeys:["ctrl+]","cmd+]"]}),t.registerCommand("outdent",{exec:e,hotkeys:["ctrl+[","cmd+["]})}qe.prototype.image={openOnDblClick:!0,editSrc:!0,useImageEditor:!0,editTitle:!0,editAlt:!0,editLink:!0,editSize:!0,editBorderRadius:!0,editMargins:!0,editClass:!0,editStyle:!0,editId:!0,editAlign:!0,showPreview:!0,selectImageAfterClose:!0},qe.prototype.controls.indent={tooltip:"Increase Indent"},qe.prototype.controls.outdent={isDisable(t){const e=t.selection.current();if(e){const i=xe.closest(e,e=>xe.isBlock(e,t.editorWindow),t.editor);if(i&&i.style&&i.style.marginLeft)return 0>=parseInt(i.style.marginLeft,10)}return!0},tooltip:"Decrease Indent"},qe.prototype.indentMargin=10;class Eo{static addSelected(t){t.setAttribute(X,"1")}static restoreSelection(t){t.removeAttribute(X)}static getAllSelectedCells(t){return t?Mt(`td[${X}],th[${X}]`,t):[]}static getRowsCount(t){return t.rows.length}static getColumnsCount(t){return Eo.formalMatrix(t).reduce((t,e)=>Math.max(t,e.length),0)}static formalMatrix(t,e){const i=[[]],o=Array.prototype.slice.call(t.rows),s=(t,o)=>{void 0===i[o]&&(i[o]=[]);const s=t.colSpan,n=t.rowSpan;let r,a,l=0;for(;i[o][l];)l+=1;for(a=0;n>a;a+=1)for(r=0;s>r;r+=1){if(void 0===i[o+a]&&(i[o+a]=[]),e&&!1===e(t,o+a,l+r,s,n))return!1;i[o+a][l+r]=t}};for(let t,e=0;o.length>e;e+=1){const n=Array.prototype.slice.call(o[e].cells);for(t=0;n.length>t;t+=1)if(!1===s(n[t],e))return i}return i}static formalCoordinate(t,e,i=!1){let o=0,s=0,n=1,r=1;return Eo.formalMatrix(t,(t,a,l,d,c)=>{if(e===t)return o=a,s=l,n=d||1,r=c||1,i&&(s+=(d||1)-1,o+=(c||1)-1),!1}),[o,s,n,r]}static appendRow(t,e=!1,i=!0){const o=t.ownerDocument||document,s=Eo.getColumnsCount(t),n=o.createElement("tr");for(let t=0;s>t;t+=1)n.appendChild(o.createElement("td"));i&&e&&e.nextSibling?e.parentNode&&e.parentNode.insertBefore(n,e.nextSibling):!i&&e?e.parentNode&&e.parentNode.insertBefore(n,e):(Mt(":scope>tbody",t)[0]||t).appendChild(n)}static removeRow(t,e){const i=Eo.formalMatrix(t);let o;const s=t.rows[e];be(i[e],(n,r)=>{if(o=!1,0>e-1||i[e-1][n]!==r)if(i[e+1]&&i[e+1][n]===r){if(r.parentNode===s&&r.parentNode.nextSibling){o=!0;let s=n+1;for(;i[e+1][s]===r;)s+=1;const a=xe.next(r.parentNode,t=>t&&t.nodeType===Node.ELEMENT_NODE&&"TR"===t.nodeName,t);i[e+1][s]?a.insertBefore(r,i[e+1][s]):a.appendChild(r)}}else xe.safeRemove(r);else o=!0;if(o&&(r.parentNode===s||r!==i[e][n-1])){const t=r.rowSpan;t-1>1?r.setAttribute("rowspan",""+(t-1)):r.removeAttribute("rowspan")}}),xe.safeRemove(s)}static appendColumn(t,e,i=!0){const o=Eo.formalMatrix(t);let s;for(void 0===e&&(e=Eo.getColumnsCount(t)-1),s=0;o.length>s;s+=1){const n=(t.ownerDocument||document).createElement("td"),r=o[s][e];let a=!1;i?(o[s]&&r&&e+1>=o[s].length||r!==o[s][e+1])&&(r.nextSibling?r.parentNode&&r.parentNode.insertBefore(n,r.nextSibling):r.parentNode&&r.parentNode.appendChild(n),a=!0):(0>e-1||o[s][e]!==o[s][e-1]&&o[s][e].parentNode)&&(r.parentNode&&r.parentNode.insertBefore(n,o[s][e]),a=!0),a||o[s][e].setAttribute("colspan",""+(parseInt(o[s][e].getAttribute("colspan")||"1",10)+1))}}static removeColumn(t,e){const i=Eo.formalMatrix(t);let o;be(i,(t,s)=>{const n=s[e];if(o=!1,0>e-1||i[t][e-1]!==n?s.length>e+1&&i[t][e+1]===n?o=!0:xe.safeRemove(n):o=!0,o&&(0>t-1||n!==i[t-1][e])){const t=n.colSpan;t-1>1?n.setAttribute("colspan",""+(t-1)):n.removeAttribute("colspan")}})}static getSelectedBound(t,e){const i=[[1/0,1/0],[0,0]],o=Eo.formalMatrix(t);let s,n,r;for(s=0;o.length>s;s+=1)for(n=0;o[s].length>n;n+=1)-1!==e.indexOf(o[s][n])&&(i[0][0]=Math.min(s,i[0][0]),i[0][1]=Math.min(n,i[0][1]),i[1][0]=Math.max(s,i[1][0]),i[1][1]=Math.max(n,i[1][1]));for(s=i[0][0];i[1][0]>=s;s+=1)for(r=1,n=i[0][1];i[1][1]>=n;n+=1){for(;o[s][n-r]&&o[s][n]===o[s][n-r];)i[0][1]=Math.min(n-r,i[0][1]),i[1][1]=Math.max(n-r,i[1][1]),r+=1;for(r=1;o[s][n+r]&&o[s][n]===o[s][n+r];)i[0][1]=Math.min(n+r,i[0][1]),i[1][1]=Math.max(n+r,i[1][1]),r+=1;for(r=1;o[s-r]&&o[s][n]===o[s-r][n];)i[0][0]=Math.min(s-r,i[0][0]),i[1][0]=Math.max(s-r,i[1][0]),r+=1;for(r=1;o[s+r]&&o[s][n]===o[s+r][n];)i[0][0]=Math.min(s+r,i[0][0]),i[1][0]=Math.max(s+r,i[1][0]),r+=1}return i}static normalizeTable(t){let e,i,o,s;const n=[],r=Eo.formalMatrix(t);for(i=0;r[0].length>i;i+=1){for(o=1e6,s=!1,e=0;r.length>e;e+=1)if(void 0!==r[e][i]){if(2>r[e][i].colSpan){s=!0;break}o=Math.min(o,r[e][i].colSpan)}if(!s)for(e=0;r.length>e;e+=1)void 0!==r[e][i]&&Eo.__mark(r[e][i],"colspan",r[e][i].colSpan-o+1,n)}for(e=0;r.length>e;e+=1){for(o=1e6,s=!1,i=0;r[e].length>i;i+=1)if(void 0!==r[e][i]){if(2>r[e][i].rowSpan){s=!0;break}o=Math.min(o,r[e][i].rowSpan)}if(!s)for(i=0;r[e].length>i;i+=1)void 0!==r[e][i]&&Eo.__mark(r[e][i],"rowspan",r[e][i].rowSpan-o+1,n)}for(e=0;r.length>e;e+=1)for(i=0;r[e].length>i;i+=1)void 0!==r[e][i]&&(r[e][i].hasAttribute("rowspan")&&1===r[e][i].rowSpan&&r[e][i].removeAttribute("rowspan"),r[e][i].hasAttribute("colspan")&&1===r[e][i].colSpan&&r[e][i].removeAttribute("colspan"),r[e][i].hasAttribute("class")&&!r[e][i].getAttribute("class")&&r[e][i].removeAttribute("class"));Eo.__unmark(n)}static mergeSelected(t){const e=[],i=Eo.getSelectedBound(t,Eo.getAllSelectedCells(t));let o,s=0,n=null,r=0,a=0,l=0;const d=[];i&&(i[0][0]-i[1][0]||i[0][1]-i[1][1])&&(Eo.formalMatrix(t,(t,c,h,p,u)=>{if(!(i[0][0]>c||c>i[1][0]||i[0][1]>h||h>i[1][1])){if(o=t,o.__i_am_already_was)return;o.__i_am_already_was=!0,c===i[0][0]&&o.style.width&&(s+=o.offsetWidth),""!==Bt(t.innerHTML.replace(/<br(\/)?>/g,""))&&e.push(t.innerHTML),p>1&&(a+=p-1),u>1&&(l+=u-1),n?Eo.__mark(o,"remove",1,d):(n=t,r=h)}}),a=i[1][1]-i[0][1]+1,l=i[1][0]-i[0][0]+1,n&&(a>1&&Eo.__mark(n,"colspan",a,d),l>1&&Eo.__mark(n,"rowspan",l,d),s&&(Eo.__mark(n,"width",(s/t.offsetWidth*100).toFixed(I)+"%",d),r&&Eo.setColumnWidthByDelta(t,r,0,!0,d)),n.innerHTML=e.join("<br/>"),delete n.__i_am_already_was,Eo.__unmark(d),Eo.normalizeTable(t),be(Array.from(t.rows),(t,e)=>{e.cells.length||xe.safeRemove(e)})))}static splitHorizontal(t){let e,i,o,s,n;const r=[],a=t.ownerDocument||document;Eo.getAllSelectedCells(t).forEach(l=>{i=a.createElement("td"),i.appendChild(a.createElement("br")),o=a.createElement("tr"),e=Eo.formalCoordinate(t,l),2>l.rowSpan?(Eo.formalMatrix(t,(t,i,o)=>{e[0]===i&&e[1]!==o&&t!==l&&Eo.__mark(t,"rowspan",t.rowSpan+1,r)}),xe.after(xe.closest(l,"tr",t),o),o.appendChild(i)):(Eo.__mark(l,"rowspan",l.rowSpan-1,r),Eo.formalMatrix(t,(i,o,r)=>{o>e[0]&&e[0]+l.rowSpan>o&&e[1]>r&&i.parentNode.rowIndex===o&&(n=i),o>e[0]&&i===l&&(s=t.rows[o])}),n?xe.after(n,i):s.insertBefore(i,s.firstChild)),l.colSpan>1&&Eo.__mark(i,"colspan",l.colSpan,r),Eo.__unmark(r),Eo.restoreSelection(l)}),this.normalizeTable(t)}static splitVertical(t){let e,i,o;const s=[],n=t.ownerDocument||document;Eo.getAllSelectedCells(t).forEach(r=>{e=Eo.formalCoordinate(t,r),2>r.colSpan?Eo.formalMatrix(t,(t,i,o)=>{e[1]===o&&e[0]!==i&&t!==r&&Eo.__mark(t,"colspan",t.colSpan+1,s)}):Eo.__mark(r,"colspan",r.colSpan-1,s),i=n.createElement("td"),i.appendChild(n.createElement("br")),r.rowSpan>1&&Eo.__mark(i,"rowspan",r.rowSpan,s);const a=r.offsetWidth;xe.after(r,i),o=a/t.offsetWidth/2,Eo.__mark(r,"width",(100*o).toFixed(I)+"%",s),Eo.__mark(i,"width",(100*o).toFixed(I)+"%",s),Eo.__unmark(s),Eo.restoreSelection(r)}),Eo.normalizeTable(t)}static setColumnWidthByDelta(t,e,i,o,s){const n=Eo.formalMatrix(t);let r,a,l;for(r=0;n.length>r;r+=1)a=n[r][e].offsetWidth,l=(a+i)/t.offsetWidth*100,Eo.__mark(n[r][e],"width",l.toFixed(I)+"%",s);o||Eo.__unmark(s)}static __mark(t,e,i,o){o.push(t),t.__marked_value||(t.__marked_value={}),t.__marked_value[e]=void 0===i?1:i}static __unmark(t){t.forEach(t=>{t.__marked_value&&(be(t.__marked_value,(e,i)=>{switch(e){case"remove":xe.safeRemove(t);break;case"rowspan":i>1?t.setAttribute("rowspan",""+i):t.removeAttribute("rowspan");break;case"colspan":i>1?t.setAttribute("colspan",""+i):t.removeAttribute("colspan");break;case"width":t.style.width=""+i}delete t.__marked_value[e]}),delete t.__marked_value)})}}var To=ze.ColorPickerWidget,So=ze.TabsWidget;qe.prototype.toolbarInline=!0,qe.prototype.toolbarInlineDisableFor=[],qe.prototype.popup={a:[{name:"eye",tooltip:"Open link",exec(t,e){const i=e.getAttribute("href");e&&i&&t.ownerWindow.open(i)}},{name:"link",tooltip:"Edit link",icon:"pencil"},"unlink","brush","file"],jodit:[{name:"bin",tooltip:"Delete",exec(t,e){e.parentNode&&(xe.safeRemove(e),t.events.fire("hidePopup"))}}],"jodit-media":[{name:"bin",tooltip:"Delete",exec(t,e){e.parentNode&&(xe.safeRemove(e),t.events.fire("hidePopup"))}}],img:[{name:"delete",icon:"bin",tooltip:"Delete",exec(t,e){e.parentNode&&(xe.safeRemove(e),t.events.fire("hidePopup"))}},{name:"pencil",exec(t,e){"img"===e.tagName.toLowerCase()&&t.events.fire("openImageProperties",e)},tooltip:"Edit"},{name:"valign",list:["Top","Middle","Bottom"],tooltip:"Vertical align",exec(t,e,i){if("img"!==e.tagName.toLowerCase())return;const o=i.args&&"string"==typeof i.args[1]?i.args[1].toLowerCase():"";fe(e,"vertical-align",o),t.events.fire("recalcPositionPopup")}},{name:"left",list:["Left","Right","Center","Normal"],exec(t,e,i){if("img"!==e.tagName.toLowerCase())return;const o=i.args&&"string"==typeof i.args[1]?i.args[1].toLowerCase():"";"normal"!==o?-1!==["right","left"].indexOf(o)?(fe(e,"float",o),me(e)):(fe(e,"float",""),fe(e,{display:"block","margin-left":"auto","margin-right":"auto"})):(fe(e,"float")&&-1!==["right","left"].indexOf(fe(e,"float").toLowerCase())&&fe(e,"float",""),me(e)),t.events.fire("recalcPositionPopup")},tooltip:"Horizontal align"}],table:[{name:"brush",popup(t,e){const i=Eo.getAllSelectedCells(e);let o,s,n,r,a,l,d;return!!i.length&&(a=fe(i[0],"color"),d=fe(i[0],"background-color"),l=fe(i[0],"border-color"),o=To(t,e=>{i.forEach(t=>{fe(t,"background-color",e)}),t.setEditorValue()},d),s=To(t,e=>{i.forEach(t=>{fe(t,"color",e)}),t.setEditorValue()},a),n=To(t,e=>{i.forEach(t=>{fe(t,"border-color",e)}),t.setEditorValue()},l),r=So(t,{Background:o,Text:s,Border:n}),r)},tooltip:"Background"},{name:"valign",list:["Top","Middle","Bottom"],exec(t,e,i){const o=i.args&&"string"==typeof i.args[1]?i.args[1].toLowerCase():"";Eo.getAllSelectedCells(e).forEach(t=>{fe(t,"vertical-align",o)})},tooltip:"Vertical align"},{name:"splitv",list:{tablesplitv:"Split vertical",tablesplitg:"Split horizontal"},tooltip:"Split"},{name:"align",icon:"left"},"\n",{name:"merge",command:"tablemerge",tooltip:"Merge"},{name:"addcolumn",list:{tableaddcolumnbefore:"Insert column before",tableaddcolumnafter:"Insert column after"},exec(t,e,i){const o=i.args&&"string"==typeof i.args[0]?i.args[0].toLowerCase():"";t.execCommand(o,!1,e)},tooltip:"Add column"},{name:"addrow",list:{tableaddrowbefore:"Insert row above",tableaddrowafter:"Insert row below"},exec(t,e,i){const o=i.args&&"string"==typeof i.args[0]?i.args[0].toLowerCase():"";t.execCommand(o,!1,e)},tooltip:"Add row"},{name:"delete",icon:"bin",list:{tablebin:"Delete table",tablebinrow:"Delete row",tablebincolumn:"Delete column",tableempty:"Empty cell"},exec(t,e,i){const o=i.args&&"string"==typeof i.args[0]?i.args[0].toLowerCase():"";t.execCommand(o,!1,e),t.events.fire("hidePopup")},tooltip:"Delete"}]};class qo extends oo{constructor(){super(...arguments),this._hiddenClass="jodit_toolbar_popup-inline-target-hidden",this.isSelectionStarted=!1,this.onSelectionEnd=rt(()=>{!this.isDestructed&&this.jodit.isEditorMode()&&(this.isSelectionStarted&&(this.isTargetAction||this.onChangeSelection()),this.isSelectionStarted=!1,this.isTargetAction=!1)},this.jodit.defaultTimeout),this.isTargetAction=!1,this.isSelectionPopup=!1,this.calcWindSizes=()=>{const t=this.jodit.ownerWindow,e=this.jodit.ownerDocument.documentElement;if(!e)return{left:0,top:0,width:0,height:0};const i=this.jodit.ownerDocument.body,o=e.clientTop||i.clientTop||0,s=e.clientLeft||i.clientLeft||0;return{left:s,top:o,width:e.clientWidth+(t.pageXOffset||e.scrollLeft||i.scrollLeft)-s,height:e.clientHeight+(t.pageYOffset||e.scrollTop||i.scrollTop)-o}},this.calcPosition=(t,e)=>{if(this.isDestructed)return;this.popup.target.classList.remove(this._hiddenClass);const i=t.left+t.width/2,o=se(this.jodit.workplace,this.jodit,this.jodit.ownerDocument,!0);let s=t.top+t.height+10;this.target.style.left=i+"px",this.target.style.top=s+"px",this.jodit.isFullSize()&&(this.target.style.zIndex=""+fe(this.jodit.container,"zIndex"));const n=this.container.offsetWidth/2;let r=-n;this.popup.container.classList.remove("jodit_toolbar_popup-inline-top"),s+this.container.offsetHeight>e.height&&(s=t.top-this.container.offsetHeight-10,this.target.style.top=s+"px",this.popup.container.classList.add("jodit_toolbar_popup-inline-top")),0>i-n&&(r=-(t.width/2+t.left)),i+n>e.width&&(r=-(this.container.offsetWidth-(e.width-i))),this.container.style.marginLeft=r+"px",(o.top-s>50||s-(o.top+o.height)>50)&&this.popup.target.classList.add(this._hiddenClass)},this.reCalcPosition=()=>{this.__getRect&&this.calcPosition(this.__getRect(),this.calcWindSizes())},this.showPopup=(t,e,i)=>{if(!this.jodit.options.toolbarInline||!this.jodit.options.popup[e.toLowerCase()])return!1;if(this.isExcludedTarget(e))return!0;this.isOpened=!0,this.isTargetAction=!0;const o=this.calcWindSizes();return this.targetContainer.parentNode||this.jodit.ownerDocument.body.appendChild(this.targetContainer),this.toolbar.build(this.jodit.options.popup[e.toLowerCase()],this.container,i),this.popup.open(this.container,!1,!0),this.__getRect=t,this.calcPosition(t(),o),!0},this.hidePopup=t=>{this.isDestructed||t&&(xe.isNode(t,this.jodit.editorWindow||window)||t instanceof Ze)&&xe.isOrContains(this.target,t instanceof Ze?t.target:t)||(this.isTargetAction=!1,this.isOpened=!1,this.popup.close(),xe.safeRemove(this.targetContainer))},this.onSelectionStart=t=>{if(!this.isDestructed&&this.jodit.isEditorMode()&&(this.isTargetAction=!1,this.isSelectionPopup=!1,!this.isSelectionStarted)){const e=Object.keys(this.jodit.options.popup).join("|"),i="IMG"===t.target.nodeName?t.target:xe.closest(t.target,e,this.jodit.editor);i&&this.showPopup(()=>se(i,this.jodit,this.jodit.editorDocument),i.nodeName,i)||(this.isSelectionStarted=!0)}},this.checkIsTargetEvent=()=>{this.isTargetAction?this.isTargetAction=!1:this.hidePopup()},this.isOpened=!1,this.onChangeSelection=()=>{if(this.jodit.options.toolbarInline&&this.jodit.isEditorMode()&&!this.hideIfCollapsed()&&void 0!==this.jodit.options.popup.selection){const t=this.jodit.selection.sel;if(t&&t.rangeCount){this.isSelectionPopup=!0;const e=t.getRangeAt(0);this.showPopup(()=>se(e,this.jodit,this.jodit.editorDocument),"selection")}}}}isExcludedTarget(t){return-1!==st(this.jodit.options.toolbarInlineDisableFor).map(t=>t.toLowerCase()).indexOf(t.toLowerCase())}hideIfCollapsed(){return!!this.jodit.selection.isCollapsed()&&(this.hidePopup(),!0)}afterInit(t){this.toolbar=si.makeCollection(t),this.target=t.create.div("jodit_toolbar_popup-inline-target"),this.targetContainer=t.create.div("jodit_toolbar_popup-inline-container",this.target),this.container=t.create.div(),this.popup=new Ze(t,this.target,void 0,"jodit_toolbar_popup-inline"),t.events.on(this.target,"mousedown keydown touchstart",t=>{t.stopPropagation()}).on("beforeOpenPopup hidePopup afterSetMode blur",this.hidePopup).on("recalcPositionPopup",this.reCalcPosition).on("getDiffButtons.mobile",e=>{if(this.toolbar===e)return st(t.options.buttons).filter(t=>"|"!==t&&"\n"!==t).filter(t=>0>this.toolbar.getButtonsList().indexOf(t))}).on("selectionchange",this.onChangeSelection).on("afterCommand afterExec",()=>{this.isOpened&&this.isSelectionPopup&&this.onChangeSelection()}).on("showPopup",(t,e)=>{const i=("string"==typeof t?t:t.nodeName).toLowerCase();this.isSelectionPopup=!1,this.showPopup(e,i,"string"==typeof t?void 0:t)}).on("mousedown keydown touchstart",this.onSelectionStart).on([t.ownerWindow,t.editor],"scroll resize",this.reCalcPosition).on([t.ownerWindow],"mouseup keyup touchend",this.onSelectionEnd).on([t.ownerWindow],"mousedown keydown touchstart",this.checkIsTargetEvent)}beforeDestruct(t){this.popup&&this.popup.destruct(),delete this.popup,this.toolbar&&this.toolbar.destruct(),delete this.toolbar,xe.safeRemove(this.target),xe.safeRemove(this.container),t.events&&t.events.off([t.ownerWindow],"scroll resize",this.reCalcPosition).off([t.ownerWindow],"mouseup keyup touchend",this.onSelectionEnd).off([t.ownerWindow],"mousedown keydown touchstart",this.checkIsTargetEvent)}}function Lo(t){const e=e=>{const i=i=>{if(i instanceof t.editorWindow.HTMLElement)switch(e.toLowerCase()){case"justifyfull":i.style.textAlign="justify";break;case"justifyright":i.style.textAlign="right";break;case"justifyleft":i.style.textAlign="left";break;case"justifycenter":i.style.textAlign="center"}};return t.selection.focus(),t.selection.eachSelection(e=>{if(!e&&t.editor.querySelector(".jodit_selected_cell"))return Mt(".jodit_selected_cell",t.editor).forEach(i),!1;if(!(e instanceof t.editorWindow.Node))return;let o=!!e&&xe.up(e,e=>xe.isBlock(e,t.editorWindow),t.editor);!o&&e&&(o=xe.wrapInline(e,t.options.enterBlock,t)),i(o)}),!1};t.registerCommand("justifyfull",e),t.registerCommand("justifyright",e),t.registerCommand("justifyleft",e),t.registerCommand("justifycenter",e)}function No(t){if(t&&(t.options.limitWords||t.options.limitChars)){const e=(e,i="")=>{const o=(i||(t.options.limitHTML?t.value:t.getEditorText())).replace(d,"").split(p).filter(t=>t.length);if(!e||-1===D.indexOf(e.which))return t.options.limitWords&&o.length>=t.options.limitWords?t.options.limitWords===o.length:t.options.limitChars&&t.options.limitChars<=o.join("").length?t.options.limitChars===o.join("").length:void 0};let i=null;t.events.on("beforePaste",()=>{i=t.observer.snapshot.make()}).on("keydown keyup beforeEnter beforePaste",t=>{if(void 0!==e(t))return!1}).on("change",rt((i,o)=>{!1===e(null,t.options.limitHTML?i:Ut(i))&&(t.value=o)},t.defaultTimeout)).on("afterPaste",()=>{if(!1===e(null)&&i)return t.observer.snapshot.restore(i),!1})}}function Mo(t){t.options.link.followOnDblClick&&t.events.on("afterInit",()=>{t.events.on(t.editor,"dblclick",(function(t){const e=this.getAttribute("href");e&&(location.href=e,t.preventDefault())}),"a")}),t.options.link.processPastedLink&&t.events.on("processPaste",(e,i)=>{if(Tt(i)){if(t.options.link.processVideoLink){const e=ue(i);if(e!==i)return t.create.inside.fromHTML(e)}const e=t.create.inside.element("a");return e.setAttribute("href",i),e.textContent=i,e}}),t.options.link.removeLinkAfterFormat&&t.events.on("afterCommand",e=>{let i,o;"removeFormat"===e&&(o=t.selection.current(),o&&"A"!==o.nodeName&&(o=xe.closest(o,"A",t.editor)),o&&"A"===o.nodeName&&(o.innerHTML===o.textContent?i=t.editorDocument.createTextNode(o.innerHTML):(i=t.editorDocument.createElement("span"),i.innerHTML=o.innerHTML),o.parentNode&&(o.parentNode.replaceChild(i,o),t.selection.setCursorIn(i,!0))))})}function Ao(t){const e="jodit_fake_wrapper",{mediaFakeTag:i,mediaBlocks:o,mediaInFakeBlock:s}=t.options;s&&t.events.on("afterGetValueFromEditor",t=>{const o=RegExp(`<${i}[^>]+data-${e}[^>]+>(.+?)</${i}>`,"ig");o.test(t.value)&&(t.value=t.value.replace(o,"$1"))}).on("change afterInit afterSetMode",rt(()=>{t.isDestructed||t.getMode()===H||Mt(o.join(","),t.editor).forEach(o=>{o["__"+e]||(o["__"+e]=!0,(o=>{if(o.parentNode&&o.parentNode.getAttribute("data-jodit_iframe_wrapper"))o=o.parentNode;else{let s;s=t.create.inside.fromHTML("<"+i+' data-jodit-temp="1" contenteditable="false" draggable="true" data-'+e+'="1"></'+i+">"),s.style.display="inline-block"===o.style.display?"inline-block":"block",s.style.width=o.offsetWidth+"px",s.style.height=o.offsetHeight+"px",o.parentNode&&o.parentNode.insertBefore(s,o),s.appendChild(o),o=s}t.events.off(o,"mousedown.select touchstart.select").on(o,"mousedown.select touchstart.select",()=>{t.selection.setCursorAfter(o)})})(o))})},t.defaultTimeout))}function Io(t){let e,i=0,o=st(t.options.buttons);t.events.on("touchend",o=>{o.changedTouches&&o.changedTouches.length&&(e=(new Date).getTime(),e-i>t.options.mobileTapTimeout&&(i=e,t.selection.insertCursorAtPoint(o.changedTouches[0].clientX,o.changedTouches[0].clientY)))}).on("getDiffButtons.mobile",e=>{if(e===t.toolbar)return st(t.options.buttons).filter(t=>0>o.indexOf(t))}),t.options.toolbarAdaptive&&t.events.on("resize afterInit",()=>{if(!t.options.toolbar)return;const e=t.container.offsetWidth;let i=[];i=st(t.options.sizeLG>e?t.options.sizeMD>e?t.options.sizeSM>e?t.options.buttonsXS:t.options.buttonsSM:t.options.buttonsMD:t.options.buttons),""+i!=""+o&&(o=i,t.toolbar.build(o.concat(t.options.extraButtons),t.toolbar.container.parentElement||t.toolbar.getParentContainer()))})}function Do(t){t.events.on("afterCommand",e=>{if(/insert(un)?orderedlist/i.test(e)){const e=xe.up(t.selection.current(),t=>t&&/^UL|OL$/i.test(t.nodeName),t.editor);if(e&&e.parentNode&&"P"===e.parentNode.nodeName){const i=t.selection.save();xe.unwrap(e.parentNode),Array.from(e.childNodes).forEach(t=>{t.lastChild&&t.lastChild.nodeType===Node.ELEMENT_NODE&&"BR"===t.lastChild.nodeName&&xe.safeRemove(t.lastChild)}),t.selection.restore(i)}t.setEditorValue()}})}function Ro(t){if(!t.options.showPlaceholder)return;this.destruct=()=>{xe.safeRemove(o)};const e=()=>{o.parentNode&&(o.style.display="none")},i=rt(()=>{if(null===o.parentNode)return;if(!t.editor)return;if(t.getRealMode()!==P)return e();const i=t.getEditorValue();i&&!/^<(p|div|h[1-6])><\/\1>$/.test(i)?e():(()=>{if(!o.parentNode||t.options.readonly)return;let e=0,i=0;const s=t.editorWindow.getComputedStyle(t.editor);if(t.editor.firstChild&&t.editor.firstChild.nodeType===Node.ELEMENT_NODE){const s=t.editorWindow.getComputedStyle(t.editor.firstChild);e=parseInt(s.getPropertyValue("margin-top"),10),i=parseInt(s.getPropertyValue("margin-left"),10),o.style.fontSize=parseInt(s.getPropertyValue("font-size"),10)+"px",o.style.lineHeight=s.getPropertyValue("line-height")}else o.style.fontSize=parseInt(s.getPropertyValue("font-size"),10)+"px",o.style.lineHeight=s.getPropertyValue("line-height");fe(o,{display:"block",marginTop:Math.max(parseInt(s.getPropertyValue("margin-top"),10),e),marginLeft:Math.max(parseInt(s.getPropertyValue("margin-left"),10),i)})})()},t.defaultTimeout/10),o=t.create.fromHTML('<span style="display: none;" class="jodit_placeholder">'+t.i18n(t.options.placeholder)+"</span>");"rtl"===t.options.direction&&(o.style.right="0px",o.style.direction="rtl"),t.options.useInputsPlaceholder&&t.element.hasAttribute("placeholder")&&(o.innerHTML=t.element.getAttribute("placeholder")||""),t.events.on("readonly",t=>{t?e():i()}).on("afterInit",()=>{t.workplace.appendChild(o),i(),t.events.fire("placeholder",o.innerHTML),t.events.on("change keyup mouseup keydown mousedown afterSetMode",i).on(window,"load",i)})}qe.prototype.controls.align={name:"left",tooltip:"Align",getLabel(t,e,i){const o=t.selection.current();if(o){const s=xe.closest(o,e=>xe.isBlock(e,t.editorWindow),t.editor)||t.editor;let n=""+fe(s,"text-align");e.defaultValue&&-1!==e.defaultValue.indexOf(n)&&(n="left"),i&&e.data&&e.data.currentValue!==n&&e.list&&-1!==e.list.indexOf(n)&&(i.textBox.innerHTML=t.options.textIcons?`<span>${n}</span>`:Ce.getIcon(n,""),i.textBox.firstChild.classList.add("jodit_icon"),e.data.currentValue=n)}return!1},isActive(t,e){const i=t.selection.current();if(i&&e.defaultValue){const o=xe.closest(i,e=>xe.isBlock(e,t.editorWindow),t.editor)||t.editor;return-1===e.defaultValue.indexOf(""+fe(o,"text-align"))}return!1},defaultValue:["left","start","inherit"],data:{currentValue:"left"},list:["center","left","right","justify"]},qe.prototype.controls.center={command:"justifyCenter",css:{"text-align":"center"},tooltip:"Align Center"},qe.prototype.controls.justify={command:"justifyFull",css:{"text-align":"justify"},tooltip:"Align Justify"},qe.prototype.controls.left={command:"justifyLeft",css:{"text-align":"left"},tooltip:"Align Left"},qe.prototype.controls.right={command:"justifyRight",css:{"text-align":"right"},tooltip:"Align Right"},qe.prototype.limitWords=!1,qe.prototype.limitChars=!1,qe.prototype.limitHTML=!1,qe.prototype.link={followOnDblClick:!0,processVideoLink:!0,processPastedLink:!0,removeLinkAfterFormat:!0,noFollowCheckbox:!0,openInNewTabCheckbox:!0},qe.prototype.controls.unlink={exec(t,e){const i=xe.closest(e,"A",t.editor);i&&xe.unwrap(i),t.events.fire("hidePopup")}},qe.prototype.controls.link={isActive(t){const e=t.selection.current();return e&&!1!==xe.closest(e,"a",t.editor)},popup(t,e,i,o){const s=t.selection.sel,n=t.create.fromHTML('<form class="jodit_form"><div class="jodit_form_group"><input class="jodit_input" required type="text" name="url" placeholder="http://" type="text"/></div><div class="jodit_form_group"><input class="jodit_input" name="text" placeholder="'+t.i18n("Text")+'" type="text"/></div>'+(t.options.link.openInNewTabCheckbox?'<label><input class="jodit_checkbox" name="target" type="checkbox"/> '+t.i18n("Open in new tab")+"</label>":"")+(t.options.link.noFollowCheckbox?'<label><input class="jodit_checkbox" name="nofollow" type="checkbox"/> '+t.i18n("No follow")+"</label>":"")+'<div style="text-align: right"><button class="jodit_button jodit_unlink_button" type="button">'+t.i18n("Unlink")+'</button> &nbsp;&nbsp;<button class="jodit_button jodit_link_insert_button" type="submit"></button></div><form/>');e=!(!e||!xe.closest(e,"A",t.editor))&&xe.closest(e,"A",t.editor);const r=n.querySelector(".jodit_link_insert_button"),a=n.querySelector(".jodit_unlink_button");e?(je(n,"input[name=url]",e.getAttribute("href")||""),je(n,"input[name=text]",e.textContent||""),t.options.link.openInNewTabCheckbox&&(n.querySelector("input[name=target]").checked="_blank"===e.getAttribute("target")),t.options.link.noFollowCheckbox&&(n.querySelector("input[name=nofollow]").checked="nofollow"===e.getAttribute("rel")),r&&(r.innerHTML=t.i18n("Update"))):(a&&(a.style.display="none"),je(n,"input[name=text]",s?""+s:""),r&&(r.innerHTML=t.i18n("Insert")));const l=t.selection.save();return a&&a.addEventListener("mousedown",i=>{e&&xe.unwrap(e),t.selection.restore(l),o(),i.preventDefault()}),n.addEventListener("submit",i=>{i.preventDefault(),t.selection.restore(l);const s=e||t.editorDocument.createElement("a");return je(n,"input[name=url]")?(s.setAttribute("href",je(n,"input[name=url]")),s.textContent=je(n,"input[name=text]"),t.options.link.openInNewTabCheckbox&&(n.querySelector("input[name=target]").checked?s.setAttribute("target","_blank"):s.removeAttribute("target")),t.options.link.noFollowCheckbox&&(n.querySelector("input[name=nofollow]").checked?s.setAttribute("rel","nofollow"):s.removeAttribute("rel")),e||t.selection.insertNode(s),o(),!1):(n.querySelector("input[name=url]").focus(),n.querySelector("input[name=url]").classList.add("jodit_error"),!1)}),n},tags:["a"],tooltip:"Insert link"},qe.prototype.mediaFakeTag="jodit-media",qe.prototype.mediaInFakeBlock=!0,qe.prototype.mediaBlocks=["video","audio"],qe.prototype.mobileTapTimeout=300,qe.prototype.toolbarAdaptive=!0,qe.prototype.controls.dots={mode:H+P,popup(t,e,i,o,s){let n=i.data;if(void 0===n){n={container:t.create.div(),toolbar:si.makeCollection(t),rebuild(){if(s){const e=t.events.fire("getDiffButtons.mobile",s.parentToolbar);e&&n&&n.toolbar.build(st(e),n.container)}}};let e=32;const o=t.options.toolbarButtonSize;"large"===o?e=36:"small"===o&&(e=24),n.container.style.width=3*e+"px",i.data=n}return n.rebuild(),n.container}},qe.prototype.controls.ul={command:"insertUnorderedList",controlName:"ul",tags:["ul"],tooltip:"Insert Unordered List"},qe.prototype.controls.ol={command:"insertOrderedList",controlName:"ol",tags:["ol"],tooltip:"Insert Ordered List"},qe.prototype.showPlaceholder=!0,qe.prototype.useInputsPlaceholder=!0,qe.prototype.placeholder="Type something",qe.prototype.controls.redo={mode:O,isDisable:t=>!t.observer.stack.canRedo(),tooltip:"Redo"},qe.prototype.controls.undo={mode:O,isDisable:t=>!t.observer.stack.canUndo(),tooltip:"Undo"};class Bo extends oo{beforeDestruct(){}afterInit(t){const e=e=>(t.getRealMode()===P&&t.observer[e](),!1);t.registerCommand("redo",{exec:e,hotkeys:["ctrl+y","ctrl+shift+z","cmd+y","cmd+shift+z"]}),t.registerCommand("undo",{exec:e,hotkeys:["ctrl+z","cmd+z"]})}}function Po(t){let e,i,o,s,n,r,a,l,d,c,h,p=!1,u=!1,f=!1,m=0;const g=t.create.fromHTML('<div data-editor_id="'+t.id+'" style="display:none" class="jodit_resizer"><i class="jodit_resizer-topleft"></i><i class="jodit_resizer-topright"></i><i class="jodit_resizer-bottomright"></i><i class="jodit_resizer-bottomleft"></i><span>100x100</span></div>'),v=g.getElementsByTagName("span")[0],b=()=>{u=!1,f=!1,i=null,g.style.display="none"},y=()=>{v.style.opacity="0"},w=()=>{if(f&&i&&g){const e=se(g.parentNode||t.ownerDocument.documentElement,t,t.ownerDocument,!0),o=se(i,t,t.editorDocument),s=parseInt(g.style.left||"0",10),n=g.offsetWidth,r=g.offsetHeight,a=o.top-1-e.top,l=o.left-1-e.left;parseInt(g.style.top||"0",10)===a&&s===l&&n===i.offsetWidth&&r===i.offsetHeight||(g.style.top=a+"px",g.style.left=l+"px",g.style.width=i.offsetWidth+"px",g.style.height=i.offsetHeight+"px",t.events&&(t.events.fire(i,"changesize"),isNaN(s)||t.events.fire("resize")))}};Mt("i",g).forEach(l=>{t.events.on(l,"mousedown touchstart",d=>{if(!i||!i.parentNode)return b(),!1;e=l,d.preventDefault(),d.stopImmediatePropagation(),n=i.offsetWidth,r=i.offsetHeight,a=n/r,u=!0,o=d.clientX,s=d.clientY,t.events.fire("hidePopup"),t.lock("resizer")})}),t.events.on("readonly",t=>{t&&b()}).on("beforeDestruct",()=>{xe.safeRemove(g)}).on("afterInit",()=>{t.events.on(t.editor,"keydown",e=>{f&&e.which===z&&i&&"table"!==i.tagName.toLowerCase()&&("JODIT"!==i.tagName?t.selection.select(i):(xe.safeRemove(i),b(),e.preventDefault()))}).on(t.ownerWindow,"mousemove touchmove",p=>{if(u){if(c=p.clientX-o,h=p.clientY-s,!i)return;const u=e.className;"IMG"===i.tagName?(c?(d=n+(u.match(/left/)?-1:1)*c,l=Math.round(d/a)):(l=r+(u.match(/top/)?-1:1)*h,d=Math.round(l*a)),d>oe(t.editor,t.ownerWindow)&&(d=oe(t.editor,t.ownerWindow),l=Math.round(d/a))):(d=n+(u.match(/left/)?-1:1)*c,l=r+(u.match(/top/)?-1:1)*h),d>t.options.resizer.min_width&&(i.style.width=g.parentNode.offsetWidth>d?d+"px":"100%"),l>t.options.resizer.min_height&&(i.style.height=l+"px"),w(),((e,i)=>{t.options.resizer.showSize&&(v.offsetWidth>e||v.offsetHeight>i?y():(v.style.opacity="1",v.innerHTML=`${e} x ${i}`,clearTimeout(m),m=nt(y,t.options.resizer.hideSizeTimeout)))})(i.offsetWidth,i.offsetHeight),p.stopImmediatePropagation()}}).on(t.ownerWindow,"resize",()=>{f&&w()}).on(t.ownerWindow,"mouseup keydown touchend",e=>{f&&!p&&(u?(t.unlock(),u=!1,t.setEditorValue(),e.stopImmediatePropagation()):b())}).on([t.ownerWindow,t.editor],"scroll",()=>{f&&!u&&b()})}).on("afterGetValueFromEditor",t=>{const e=/<jodit[^>]+data-jodit_iframe_wrapper[^>]+>(.*?<iframe[^>]+>[\s\n\r]*<\/iframe>.*?)<\/jodit>/gi;e.test(t.value)&&(t.value=t.value.replace(e,"$1"))}).on("hideResizer",b).on("change afterInit afterSetMode",rt(()=>{f&&(i&&i.parentNode?w():b()),t.isDestructed||Mt("img, table, iframe",t.editor).forEach(e=>{t.getMode()!==H&&!e.__jodit_resizer_binded&&("IFRAME"===e.tagName&&t.options.useIframeResizer||"IMG"===e.tagName&&t.options.useImageResizer||"TABLE"===e.tagName&&t.options.useTableResizer)&&(e.__jodit_resizer_binded=!0,(e=>{let o,s;if("IFRAME"===e.tagName){const i=e;e.parentNode&&e.parentNode.getAttribute("data-jodit_iframe_wrapper")?e=e.parentNode:(o=t.create.inside.fromHTML('<jodit data-jodit-temp="1" contenteditable="false" draggable="true" data-jodit_iframe_wrapper="1"></jodit>'),o.style.display="inline-block"===e.style.display?"inline-block":"block",o.style.width=e.offsetWidth+"px",o.style.height=e.offsetHeight+"px",e.parentNode&&e.parentNode.insertBefore(o,e),o.appendChild(e),e=o),t.events.off(e,"mousedown.select touchstart.select").on(e,"mousedown.select touchstart.select",()=>{t.selection.select(e)}),t.events.off(e,"changesize").on(e,"changesize",()=>{i.setAttribute("width",e.offsetWidth+"px"),i.setAttribute("height",e.offsetHeight+"px")})}t.events.on(e,"dragstart",b).on(e,"mousedown",t=>{W&&"IMG"===e.nodeName&&t.preventDefault()}).on(e,"mousedown touchstart",()=>{p||(p=!0,i=e,t.options.readonly||(g.parentNode||t.workplace.appendChild(g),f=!0,g.style.display="block",t.isFullSize()&&(g.style.zIndex=""+fe(t.container,"zIndex")),w()),"IMG"!==i.tagName||i.complete||i.addEventListener("load",(function t(){w(),i&&i.removeEventListener("load",t)})),clearTimeout(s)),s=nt(()=>{p=!1},400)})})(e))})},t.defaultTimeout))}qe.prototype.useIframeResizer=!0,qe.prototype.useTableResizer=!0,qe.prototype.useImageResizer=!0,qe.prototype.resizer={showSize:!0,hideSizeTimeout:1e3,min_width:10,min_height:10},qe.prototype.useSearch=!0;class Ho extends oo{constructor(){super(...arguments),this.template='<div class="jodit_search"><div class="jodit_search_box"><div class="jodit_search_inputs"><input tabindex="0" class="jodit_search-query" placeholder="'+this.jodit.i18n("Search for")+'" type="text"/><input tabindex="0" class="jodit_search-replace" placeholder="'+this.jodit.i18n("Replace with")+'" type="text"/></div><div class="jodit_search_counts"><span>0/0</span></div><div class="jodit_search_buttons"><button tabindex="0" type="button" class="jodit_search_buttons-next">'+Ce.getIcon("angle-down")+'</button><button tabindex="0" type="button" class="jodit_search_buttons-prev">'+Ce.getIcon("angle-up")+'</button><button tabindex="0" type="button" class="jodit_search_buttons-cancel">'+Ce.getIcon("cancel")+'</button><button tabindex="0" type="button" class="jodit_search_buttons-replace">'+this.jodit.i18n("Replace")+"</button></div></div></div>",this.isOpened=!1,this.selInfo=null,this.current=!1,this.eachMap=(t,e,i)=>{xe.findWithCurrent(t,t=>!!t&&e(t),this.jodit.editor,i?"nextSibling":"previousSibling",i?"firstChild":"lastChild")},this.updateCounters=()=>{if(!this.isOpened)return;this.counterBox.style.display=this.queryInput.value.length?"inline-block":"none";const t=this.calcCounts(this.queryInput.value,this.jodit.selection.range);this.counterBox.textContent=t.join("/")},this.calcCounts=(t,e=!1)=>{const i=[];let o=0,s=0,n=!1,r=this.jodit.editor.firstChild;for(;r&&t.length;)if(n=this.find(r,t,!0,0,n||this.jodit.editorDocument.createRange()),n){if(this.boundAlreadyWas(n,i))break;i.push(n),r=n.startContainer,s+=1,e&&this.boundAlreadyWas(e,[n])&&(o=s)}else r=null;return[o,s]},this.findAndReplace=(t,e)=>{const i=this.find(t,e,!0,0,this.jodit.selection.range);if(i&&i.startContainer&&i.endContainer){const t=this.jodit.editorDocument.createRange();try{if(i&&i.startContainer&&i.endContainer){t.setStart(i.startContainer,i.startOffset),t.setEnd(i.endContainer,i.endOffset),t.deleteContents();const e=this.jodit.editorDocument.createTextNode(this.replaceInput.value);t.insertNode(e),this.jodit.selection.select(e),this.tryScrollToElement(e)}}catch(t){}return!0}return!1},this.findAndSelect=(t,e,i)=>{const o=this.find(t,e,i,0,this.jodit.selection.range);if(o&&o.startContainer&&o.endContainer){const t=this.jodit.editorDocument.createRange();try{t.setStart(o.startContainer,o.startOffset),t.setEnd(o.endContainer,o.endOffset),this.jodit.selection.selectRange(t)}catch(t){}return this.tryScrollToElement(o.startContainer),this.current=o.startContainer,this.updateCounters(),!0}return!1},this.find=(t,e,i,o,s)=>{if(t&&e.length){let n="",r={startContainer:null,startOffset:null,endContainer:null,endOffset:null};if(this.eachMap(t,t=>{if(t.nodeType===Node.TEXT_NODE&&null!==t.nodeValue&&t.nodeValue.length){let a=t.nodeValue;i||t!==s.startContainer?i&&t===s.endContainer&&(a=o?a.substr(0,s.startOffset):a.substr(s.endOffset)):a=o?a.substr(s.endOffset):a.substr(0,s.startOffset);const l=i?n+a:a+n,d=Ho.findSomePartOfString(e,l,i);if(!1!==d){let s=Ho.findSomePartOfString(e,a,i);!0===s?s=Bt(e):!1===s&&(s=Ho.findSomePartOfString(a,e,i),!0===s&&(s=Bt(a)));let c=Ho.getSomePartOfStringIndex(e,a,i)||0;if((i&&!o||!i&&o)&&t.nodeValue.length-a.length>0&&(c+=t.nodeValue.length-a.length),null===r.startContainer&&(r.startContainer=t,r.startOffset=c),!0===d)return r.endContainer=t,r.endOffset=c,r.endOffset+=s.length,!0;n=l}else n="",r={startContainer:null,startOffset:null,endContainer:null,endOffset:null}}else xe.isBlock(t,this.jodit.editorWindow)&&""!==n&&(n=i?n+" ":" "+n);return!1},i),r.startContainer&&r.endContainer)return r;if(!o)return this.current=i?this.jodit.editor.firstChild:this.jodit.editor.lastChild,this.find(this.current,e,i,o+1,s)}return!1},this.open=(t=!1)=>{this.isOpened||(this.searchBox.classList.add("jodit_search-active"),this.isOpened=!0),this.jodit.events.fire("hidePopup"),this.searchBox.classList.toggle("jodit_search-and-replace",t),this.current=this.jodit.selection.current(),this.selInfo=this.jodit.selection.save();const e=""+(this.jodit.selection.sel||"");e&&(this.queryInput.value=e),this.updateCounters(),e?this.queryInput.select():this.queryInput.focus()},this.close=()=>{this.isOpened&&(this.selInfo&&(this.jodit.selection.restore(this.selInfo),this.selInfo=null),this.searchBox.classList.remove("jodit_search-active"),this.isOpened=!1)}}static getSomePartOfStringIndex(t,e,i=!0){return this.findSomePartOfString(t,e,i,!0)}static findSomePartOfString(t,e,i=!0,o=!1){t=Bt(t.toLowerCase().replace(p," ")),e=e.toLowerCase();let s=i?0:e.length-1,n=i?0:t.length-1,r=0,a=null;const l=i?1:-1,d=[];for(;void 0!==e[s];s+=l){const c=t[n]===e[s];if(c||null!==a&&p.test(e[s])?(null!==a&&i||(a=s),d.push(e[s]),c&&(r+=1,n+=l)):(a=null,d.length=0,r=0,n=i?0:t.length-1),r===t.length)return!o||a}return o?null!=a&&a:!!d.length&&(i?d.join(""):d.reverse().join(""))}boundAlreadyWas(t,e){return e.some(e=>e.startContainer===t.startContainer&&e.endContainer===t.endContainer&&e.startOffset===t.startOffset&&e.endOffset===t.endOffset,!1)}tryScrollToElement(t){let e=xe.closest(t,t=>t&&t.nodeType===Node.ELEMENT_NODE,this.jodit.editor);e||(e=xe.prev(t,t=>t&&t.nodeType===Node.ELEMENT_NODE,this.jodit.editor)),e&&e!==this.jodit.editor&&e.scrollIntoView()}afterInit(t){if(t.options.useSearch){const e=this;e.searchBox=t.create.fromHTML(e.template);const i=e.searchBox.querySelector.bind(e.searchBox);e.queryInput=i("input.jodit_search-query"),e.replaceInput=i("input.jodit_search-replace"),e.closeButton=i(".jodit_search_buttons-cancel"),e.nextButton=i(".jodit_search_buttons-next"),e.prevButton=i(".jodit_search_buttons-prev"),e.replaceButton=i(".jodit_search_buttons-replace"),e.counterBox=i(".jodit_search_counts span"),t.workplace.appendChild(this.searchBox),t.events.on(e.closeButton,"click",this.close).on(e.queryInput,"mousedown",()=>{t.selection.isFocused()&&(t.selection.removeMarkers(),e.selInfo=t.selection.save())}).on(e.replaceButton,"click",i=>{e.findAndReplace(t.selection.current()||t.editor.firstChild,e.queryInput.value),this.updateCounters(),i.preventDefault(),i.stopImmediatePropagation()}).on([e.nextButton,e.prevButton],"click",(function(i){t.events.fire(e.nextButton===this?"searchNext":"searchPrevious"),i.preventDefault(),i.stopImmediatePropagation()})).on(this.queryInput,"keydown",rt(e=>{switch(e.which){case w:e.preventDefault(),e.stopImmediatePropagation(),t.events.fire("searchNext")&&this.close();break;default:this.updateCounters()}},this.jodit.defaultTimeout)).on(this.jodit.container,"keydown.search",i=>{if(t.getRealMode()===P)switch(i.which){case _:this.close();break;case M:e.queryInput.value&&(t.events.fire(i.shiftKey?"searchPrevious":"searchNext"),i.preventDefault())}}).on("beforeSetMode.search",()=>{this.close()}).on("keydown.search mousedown.search",()=>{this.selInfo&&(t.selection.removeMarkers(),this.selInfo=null),this.isOpened&&(this.current=this.jodit.selection.current(),this.updateCounters())}).on("searchNext.search searchPrevious.search",()=>e.findAndSelect(t.selection.current()||t.editor.firstChild,e.queryInput.value,"searchNext"===t.events.current[t.events.current.length-1])).on("search.search",(e,i=!0)=>{t.execCommand("search",e,i)}),t.registerCommand("search",{exec:(i,o,s=!0)=>(e.findAndSelect(t.selection.current()||t.editor.firstChild,o||"",s),!1)}),t.registerCommand("openSearchDialog",{exec:()=>(e.open(),!1),hotkeys:["ctrl+f","cmd+f"]}),t.registerCommand("openReplaceDialog",{exec:()=>(t.options.readonly||e.open(!0),!1),hotkeys:["ctrl+h","cmd+h"]})}}beforeDestruct(t){xe.safeRemove(this.searchBox),t.events&&t.events.off(".search"),t.events&&t.events.off(t.container,".search")}}function Oo(t){const e=e=>{fe(t.container,"height",e),t.options.saveHeightInStorage&&t.storage.set("height",e)},i=e=>fe(t.container,"width",e),o=e=>fe(t.workplace,"height",e);if("auto"!==t.options.height&&(t.options.allowResizeX||t.options.allowResizeY)){const o=t.create.div("jodit_editor_resize",'<a tabindex="-1" href="javascript:void(0)"></a>'),s={x:0,y:0,w:0,h:0};let n=!1;t.events.on(o,"mousedown touchstart",e=>{n=!0,s.x=e.clientX,s.y=e.clientY,s.w=t.container.offsetWidth,s.h=t.container.offsetHeight,t.lock(),e.preventDefault()}).on(t.ownerWindow,"mousemove touchmove",at(o=>{n&&(t.options.allowResizeY&&e(s.h+o.clientY-s.y),t.options.allowResizeX&&i(s.w+o.clientX-s.x),r(),t.events.fire("resize"))},t.defaultTimeout/10)).on(t.ownerWindow,"mouseup touchsend",()=>{n&&(n=!1,t.unlock())}).on("afterInit",()=>{t.container.appendChild(o)}).on("toggleFullSize",t=>{o.style.display=t?"none":"block"})}const s=()=>(t.options.toolbar?t.toolbar.container.offsetHeight:0)+(t.statusbar?t.statusbar.getHeight():0),n=()=>{if(!t.container||!t.container.parentNode)return;const e=fe(t.container,"minHeight")-s();[t.workplace,t.iframe,t.editor].map(i=>{const o=i===t.editor?e-2:e;i&&fe(i,"minHeight",o),t.events.fire("setMinHeight",o)})},r=()=>{t&&!t.isDestructed&&t.options&&!t.options.inline&&(n(),t.container&&("auto"!==t.options.height||t.isFullSize())&&o(t.container.offsetHeight-s()))},a=rt(r,t.defaultTimeout);t.events.on("toggleFullSize",e=>{e||"auto"!==t.options.height||(o("auto"),n())}).on("afterInit",()=>{t.options.inline||(fe(t.editor,{minHeight:"100%"}),fe(t.container,{minHeight:t.options.minHeight,minWidth:t.options.minWidth,maxWidth:t.options.maxWidth}));let o=t.options.height;if(t.options.saveHeightInStorage&&"auto"!==o){const e=t.storage.get("height");e&&(o=e)}t.options.inline||(e(o),i(t.options.width)),r()},void 0,void 0,!0).on(window,"load",a).on("afterInit resize updateToolbar scroll afterResize",a)}qe.prototype.allowResizeX=!1,qe.prototype.allowResizeY=!0,qe.prototype.beautifyHTML=!0,qe.prototype.useAceEditor=!0,qe.prototype.sourceEditorNativeOptions={showGutter:!0,theme:"ace/theme/idle_fingers",mode:"ace/mode/html",wrap:!0,highlightActiveLine:!0},qe.prototype.sourceEditorCDNUrlsJS=["https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.5/ace.js"],qe.prototype.beautifyHTMLCDNUrlsJS=["https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.10.0/beautify.min.js","https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.10.0/beautify-html.min.js"],qe.prototype.controls.source={mode:O,exec(t){t.toggleMode()},isActive:t=>t.getRealMode()===H,tooltip:"Change mode"};class Wo extends oo{constructor(){super(...arguments),this.className="jodit_ace_editor",this.__lock=!1,this.__oldMirrorValue="",this.autosize=rt(()=>{this.mirror.style.height="auto",this.mirror.style.height=this.mirror.scrollHeight+"px"},this.jodit.defaultTimeout),this.tempMarkerStart="{start-jodit-selection}",this.tempMarkerStartReg=/{start-jodit-selection}/g,this.tempMarkerEnd="{end-jodit-selection}",this.tempMarkerEndReg=/{end-jodit-selection}/g,this.selInfo=[],this.lastTuple=null,this.loadNext=(t,e,i="aceReady",o=this.className)=>{if(i&&void 0===e[t]&&!this.isDestructed)return this.jodit&&this.jodit.events&&this.jodit.events.fire(i),void(this.jodit&&this.jodit.events&&this.jodit.events.fire(this.jodit.ownerWindow,i));void 0!==e[t]&&(this.lastTuple&&this.lastTuple.element.removeEventListener("load",this.lastTuple.callback),this.lastTuple=le(e[t],()=>{this.isDestructed||this.loadNext(t+1,e,i,o)},o,this.jodit.ownerDocument))},this.insertHTML=t=>{if(this.mirror.selectionStart||0===this.mirror.selectionStart){const e=this.mirror.selectionEnd;this.mirror.value=this.mirror.value.substring(0,this.mirror.selectionStart)+t+this.mirror.value.substring(e,this.mirror.value.length)}else this.mirror.value+=this.mirror;this.toWYSIWYG()},this.fromWYSIWYG=(t=!1)=>{if(!this.__lock||!0===t){this.__lock=!0;const t=this.jodit.getEditorValue(!1);t!==this.getMirrorValue()&&this.setMirrorValue(t),this.__lock=!1}},this.toWYSIWYG=()=>{if(this.__lock)return;const t=this.getMirrorValue();t!==this.__oldMirrorValue&&(this.__lock=!0,this.jodit.setEditorValue(t),this.__lock=!1,this.__oldMirrorValue=t)},this.getNormalPosition=(t,e)=>{let i=t;for(;i>0;){if(i--,"<"===e[i]&&void 0!==e[i+1]&&e[i+1].match(/[\w\/]+/i))return i;if(">"===e[i])return t}return t},this.__clear=t=>t.replace(d,""),this.selectAll=()=>{this.mirror.select()},this.onSelectAll=t=>{if("selectall"===t.toLowerCase()&&this.jodit.getRealMode()===H)return this.selectAll(),!1},this.getSelectionStart=()=>this.mirror.selectionStart,this.getSelectionEnd=()=>this.mirror.selectionEnd,this.saveSelection=()=>{if(this.jodit.getRealMode()===P)this.selInfo=this.jodit.selection.save()||[],this.jodit.setEditorValue(),this.fromWYSIWYG(!0);else{this.selInfo.length=0;const t=this.getMirrorValue();if(this.getSelectionStart()===this.getSelectionEnd()){const e=this.jodit.selection.marker(!0);this.selInfo[0]={startId:e.id,collapsed:!0,startMarker:e.outerHTML};const i=this.getNormalPosition(this.getSelectionStart(),this.getMirrorValue());this.setMirrorValue(t.substr(0,i)+this.__clear(this.selInfo[0].startMarker)+t.substr(i))}else{const e=this.jodit.selection.marker(!0),i=this.jodit.selection.marker(!1);this.selInfo[0]={startId:e.id,endId:i.id,collapsed:!1,startMarker:this.__clear(e.outerHTML),endMarker:this.__clear(i.outerHTML)};const o=this.getNormalPosition(this.getSelectionStart(),t),s=this.getNormalPosition(this.getSelectionEnd(),t);this.setMirrorValue(t.substr(0,o)+this.selInfo[0].startMarker+t.substr(o,s-o)+this.selInfo[0].endMarker+t.substr(s))}this.toWYSIWYG()}},this.restoreSelection=()=>{if(!this.selInfo.length)return;if(this.jodit.getRealMode()===P)return this.__lock=!0,this.jodit.selection.restore(this.selInfo),void(this.__lock=!1);let t=this.getMirrorValue(),e=0,i=0;try{this.selInfo[0].startMarker&&(t=t.replace(/<span[^>]+data-jodit_selection_marker="start"[^>]*>[<>]*?<\/span>/gim,this.tempMarkerStart)),this.selInfo[0].endMarker&&(t=t.replace(/<span[^>]+data-jodit_selection_marker="end"[^>]*>[<>]*?<\/span>/gim,this.tempMarkerEnd)),this.jodit.ownerWindow.html_beautify&&this.jodit.options.beautifyHTML&&(t=this.jodit.ownerWindow.html_beautify(t)),e=t.indexOf(this.tempMarkerStart),i=e,t=t.replace(this.tempMarkerStartReg,""),this.selInfo[0].collapsed&&-1!==e||(i=t.indexOf(this.tempMarkerEnd),-1===e&&(e=i)),t=t.replace(this.tempMarkerEndReg,"")}finally{t=t.replace(this.tempMarkerEndReg,"").replace(this.tempMarkerStartReg,"")}this.setMirrorValue(t),this.setMirrorSelectionRange(e,i),this.toWYSIWYG(),this.setFocusToMirror()},this.__proxyOnFocus=t=>{this.jodit.events.fire("focus",t)},this.__proxyOnMouseDown=t=>{this.jodit.events.fire("mousedown",t)},this.setMirrorSelectionRange=(t,e)=>{this.mirror.setSelectionRange(t,e)},this.onReadonlyReact=()=>{const t=this.jodit.options.readonly;t?this.mirror.setAttribute("readonly","true"):this.mirror.removeAttribute("readonly"),this.aceEditor&&this.aceEditor.setReadOnly(t)}}getMirrorValue(){return this.mirror.value}setMirrorValue(t){this.mirror.value=t}setFocusToMirror(){this.mirror.focus()}replaceMirrorToACE(){const t=this.jodit;let e,i;const o=()=>{i&&t.getRealMode()===H&&(t.events.fire("canRedo",i.hasRedo()),t.events.fire("canUndo",i.hasUndo()))},s=t=>e.session.getLine(t).length,n=()=>{const t=e.session.getLength(),i=[];let o=0;for(let e=0;t>e;e++)o+=s(e),e>0&&(o+=1),i[e]=o;return i},r=t=>{const e=n();if(e[0]>=t)return{row:0,column:t};let i=1;for(let o=1;e.length>o;o++)t>e[o]&&(i=o+1);return{row:i,column:t-e[i-1]-1}},a=(t,e)=>n()[t]-s(t)+e,l=()=>{if(void 0===e&&void 0!==this.jodit.ownerWindow.ace){this.jodit.events.off(this.jodit.ownerWindow,"aceReady",l);const s=this.jodit.create.div("jodit_source_mirror-fake");this.mirrorContainer.insertBefore(s,this.mirrorContainer.firstChild),this.aceEditor=e=this.jodit.ownerWindow.ace.edit(s),e.setTheme(t.options.sourceEditorNativeOptions.theme),e.renderer.setShowGutter(t.options.sourceEditorNativeOptions.showGutter),e.getSession().setMode(t.options.sourceEditorNativeOptions.mode),e.setHighlightActiveLine(t.options.sourceEditorNativeOptions.highlightActiveLine),e.getSession().setUseWrapMode(!0),e.setOption("indentedSoftWrap",!1),e.setOption("wrap",t.options.sourceEditorNativeOptions.wrap),e.getSession().setUseWorker(!1),e.$blockScrolling=1/0,e.setOptions({maxLines:1/0}),e.on("change",this.toWYSIWYG),e.on("focus",this.__proxyOnFocus),e.on("mousedown",this.__proxyOnMouseDown),this.mirror.style.display="none",i=e.getSession().getUndoManager(),this.setMirrorValue=i=>{e.setValue(t.options.beautifyHTML&&t.ownerWindow.html_beautify?t.ownerWindow.html_beautify(i):i),e.clearSelection(),o()},this.jodit.getRealMode()!==P&&this.setMirrorValue(this.getMirrorValue()),this.getMirrorValue=()=>e.getValue(),this.setFocusToMirror=()=>{e.focus()},this.getSelectionStart=()=>{const t=e.selection.getRange();return a(t.start.row,t.start.column)},this.getSelectionEnd=()=>{const t=e.selection.getRange();return a(t.end.row,t.end.column)},this.selectAll=()=>{e.selection.selectAll()},this.insertHTML=t=>{const i=e.selection.getCursor(),o=e.session.insert(i,t);e.selection.setRange({start:i,end:o},!1)},this.setMirrorSelectionRange=(t,i)=>{((t,i)=>{const o=r(t),s=r(i);e.getSelection().setSelectionRange({start:o,end:s})})(t,i)},t.events.on("afterResize",()=>{e.resize()}).fire("aceInited",t)}};t.events.on(this.jodit.ownerWindow,"aceReady",l).on("aceReady",l).on("afterSetMode",()=>{t.getRealMode()!==H&&t.getMode()!==O||(this.fromWYSIWYG(),l())}).on("beforeCommand",s=>{if(t.getRealMode()!==P&&("redo"===s||"undo"===s)&&i)return i["has"+s.substr(0,1).toUpperCase()+s.substr(1)]&&e[s](),o(),!1}),l(),void 0!==this.jodit.ownerWindow.ace||Mt("script."+this.className,this.jodit.ownerDocument.body).length||this.loadNext(0,t.options.sourceEditorCDNUrlsJS,"aceReady",this.className)}afterInit(t){this.mirrorContainer=t.create.div("jodit_source"),this.mirror=t.create.fromHTML('<textarea class="jodit_source_mirror"/>');const e=()=>{t.events.off("beforeSetMode.source afterSetMode.source").on("beforeSetMode.source",this.saveSelection).on("afterSetMode.source",this.restoreSelection)};e(),this.onReadonlyReact(),t.events.on(this.mirror,"mousedown keydown touchstart input",rt(this.toWYSIWYG,t.defaultTimeout)).on(this.mirror,"change keydown mousedown touchstart input",this.autosize).on("afterSetMode.source",this.autosize).on(this.mirror,"mousedown focus",e=>{t.events.fire(e.type,e)}),t.events.on("setMinHeight.source",t=>{this.mirror&&fe(this.mirror,"minHeight",t)}).on("insertHTML.source",e=>{if(!t.options.readonly&&!this.jodit.isEditorMode())return this.insertHTML(e),!1}).on("aceInited",()=>{this.onReadonlyReact(),e()},void 0,void 0,!0).on("readonly.source",this.onReadonlyReact).on("placeholder.source",t=>{this.mirror.setAttribute("placeholder",t)}).on("beforeCommand.source",this.onSelectAll).on("change.source",this.fromWYSIWYG),this.mirrorContainer.appendChild(this.mirror),t.workplace.appendChild(this.mirrorContainer),this.autosize(),t.options.beautifyHTML&&void 0===t.ownerWindow.html_beautify&&!Mt("script.beutyfy_html_jodit_helper",t.ownerDocument.body).length&&this.loadNext(0,t.options.beautifyHTMLCDNUrlsJS,!1,"beutyfy_html_jodit_helper"),t.options.useAceEditor&&this.replaceMirrorToACE(),this.fromWYSIWYG()}beforeDestruct(t){xe.safeRemove(this.mirrorContainer),xe.safeRemove(this.mirror),t&&t.events&&t.events.off("aceInited.source"),this.aceEditor&&(this.setFocusToMirror=()=>{},this.aceEditor.off("change",this.toWYSIWYG),this.aceEditor.off("focus",this.__proxyOnFocus),this.aceEditor.off("mousedown",this.__proxyOnMouseDown),this.aceEditor.destroy(),delete this.aceEditor),this.lastTuple&&this.lastTuple.element.removeEventListener("load",this.lastTuple.callback)}}qe.prototype.showCharsCounter=!0,qe.prototype.showWordsCounter=!0;class Fo extends oo{constructor(){super(...arguments),this.calc=at(()=>{const t=this.jodit.getEditorText();this.jodit.options.showCharsCounter&&this.charCounter&&(this.charCounter.textContent=this.jodit.i18n("Chars: %d",t.replace(p,"").length)),this.jodit.options.showWordsCounter&&this.wordCounter&&(this.wordCounter.textContent=this.jodit.i18n("Words: %d",t.replace(d,"").split(p).filter(t=>t.length).length))},this.jodit.defaultTimeout)}afterInit(){this.jodit.options.showCharsCounter&&(this.charCounter=this.jodit.create.span(),this.jodit.statusbar.append(this.charCounter,!0)),this.jodit.options.showWordsCounter&&(this.wordCounter=this.jodit.create.span(),this.jodit.statusbar.append(this.wordCounter,!0)),this.jodit.events.on("change keyup",this.calc),this.calc()}beforeDestruct(){xe.safeRemove(this.charCounter),xe.safeRemove(this.wordCounter),this.charCounter=null,this.wordCounter=null}}qe.prototype.toolbarSticky=!0,qe.prototype.toolbarDisableStickyForMobile=!0,qe.prototype.toolbarStickyOffset=0;class Vo extends oo{constructor(){super(...arguments),this.isToolbarSticked=!1,this.createDummy=t=>{W&&!this.dummyBox&&(this.dummyBox=this.jodit.create.div(),this.dummyBox.classList.add("jodit_sticky-dummy_toolbar"),this.jodit.container.insertBefore(this.dummyBox,t))},this.addSticky=t=>{this.isToolbarSticked||(this.createDummy(t),this.jodit.container.classList.add("jodit_sticky"),this.isToolbarSticked=!0),fe(t,{top:this.jodit.options.toolbarStickyOffset,width:this.jodit.container.offsetWidth}),W&&this.dummyBox&&fe(this.dummyBox,{height:t.offsetHeight})},this.removeSticky=t=>{this.isToolbarSticked&&(fe(t,{width:"",top:""}),this.jodit.container.classList.remove("jodit_sticky"),this.isToolbarSticked=!1)}}isMobile(){return this.jodit&&this.jodit.options&&this.jodit.container&&this.jodit.options.sizeSM>=this.jodit.container.offsetWidth}afterInit(t){t.events.on(t.ownerWindow,"scroll wheel mousewheel resize",()=>{const e=t.ownerWindow.pageYOffset||t.ownerDocument.documentElement&&t.ownerDocument.documentElement.scrollTop||0,i=se(t.container,t,t.ownerDocument,!0),o=t.getMode()===P&&e+t.options.toolbarStickyOffset>i.top&&i.top+i.height>e+t.options.toolbarStickyOffset&&!(t.options.toolbarDisableStickyForMobile&&this.isMobile());t.options.toolbarSticky&&!0===t.options.toolbar&&(o?this.addSticky(t.toolbar.getParentContainer()):this.removeSticky(t.toolbar.getParentContainer())),t.events.fire("toggleSticky",o)})}beforeDestruct(t){this.dummyBox&&xe.safeRemove(this.dummyBox)}}function $o(t){t.events.on("keydown",e=>{let i,o;if(e.which!==y&&e.which!==k&&e.which!==x&&e.which!==j&&e.which!==C)return;{if(i=t.selection.current(),o=xe.up(i,t=>t&&t.nodeName&&/^td|th$/i.test(t.nodeName),t.editor),!o)return;const s=t.selection.range;if(e.which!==y&&i!==o&&((e.which===k||e.which===j)&&(xe.prev(i,t=>e.which===j?t&&"BR"===t.nodeName:!!t,o)||e.which!==j&&i.nodeType===Node.TEXT_NODE&&0!==s.startOffset)||(e.which===x||e.which===C)&&(xe.next(i,t=>e.which===C?t&&"BR"===t.nodeName:!!t,o)||e.which!==C&&i.nodeType===Node.TEXT_NODE&&i.nodeValue&&s.startOffset!==i.nodeValue.length)))return}const s=xe.up(o,t=>t&&/^table$/i.test(t.nodeName),t.editor);let n=null;switch(e.which){case y:case k:const i=e.which===k||e.shiftKey?"prev":"next";n=xe[i](o,t=>t&&/^td|th$/i.test(t.tagName),s),n||(Eo.appendRow(s,"next"!==i&&s.querySelector("tr"),"next"===i),n=xe[i](o,e=>e&&xe.isCell(e,t.editorWindow),s));break;case j:case C:{let t=0,i=0;const r=Eo.formalMatrix(s,(e,s,n)=>{e===o&&(t=s,i=n)});e.which===j?void 0!==r[t-1]&&(n=r[t-1][i]):void 0!==r[t+1]&&(n=r[t+1][i])}}if(n){if(n.firstChild)e.which===y?t.selection.select(n,!0):t.selection.setCursorIn(n,e.which===x||e.which===C);else{const e=t.editorDocument.createElement("br");n.appendChild(e),t.selection.setCursorBefore(e)}return!1}})}qe.prototype.usePopupForSpecialCharacters=!1,qe.prototype.specialCharacters=["!","&quot;","#","$","%","&amp;","'","(",")","*","+","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","&lt;","=","&gt;","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~","&euro;","&lsquo;","&rsquo;","&ldquo;","&rdquo;","&ndash;","&mdash;","&iexcl;","&cent;","&pound;","&curren;","&yen;","&brvbar;","&sect;","&uml;","&copy;","&ordf;","&laquo;","&raquo;","&not;","&reg;","&macr;","&deg;","&sup2;","&sup3;","&acute;","&micro;","&para;","&middot;","&cedil;","&sup1;","&ordm;","&frac14;","&frac12;","&frac34;","&iquest;","&Agrave;","&Aacute;","&Acirc;","&Atilde;","&Auml;","&Aring;","&AElig;","&Ccedil;","&Egrave;","&Eacute;","&Ecirc;","&Euml;","&Igrave;","&Iacute;","&Icirc;","&Iuml;","&ETH;","&Ntilde;","&Ograve;","&Oacute;","&Ocirc;","&Otilde;","&Ouml;","&times;","&Oslash;","&Ugrave;","&Uacute;","&Ucirc;","&Uuml;","&Yacute;","&THORN;","&szlig;","&agrave;","&aacute;","&acirc;","&atilde;","&auml;","&aring;","&aelig;","&ccedil;","&egrave;","&eacute;","&ecirc;","&euml;","&igrave;","&iacute;","&icirc;","&iuml;","&eth;","&ntilde;","&ograve;","&oacute;","&ocirc;","&otilde;","&ouml;","&divide;","&oslash;","&ugrave;","&uacute;","&ucirc;","&uuml;","&yacute;","&thorn;","&yuml;","&OElig;","&oelig;","&#372;","&#374","&#373","&#375;","&sbquo;","&#8219;","&bdquo;","&hellip;","&trade;","&#9658;","&bull;","&rarr;","&rArr;","&hArr;","&diams;","&asymp;"],qe.prototype.controls.symbol={icon:"omega",hotkeys:["ctrl+shift+i","cmd+shift+i"],tooltip:"Insert Special Character",popup(t,e,i,o){const s=t.events.fire("generateSpecialCharactersTable.symbols");if(s){if(t.options.usePopupForSpecialCharacters){const e=t.ownerDocument.createElement("div");return e.classList.add("jodit_symbols"),e.appendChild(s),t.events.on(s,"close_dialog",o),e}{const e=Yo(s,t.i18n("Select Special Character"),void 0,"jodit_symbols"),i=s.querySelector("a");i&&i.focus(),t.events.on("beforeDestruct",()=>{e&&e.close()})}}}},qe.prototype.useTableProcessor=!0,qe.prototype.useExtraClassesOptions=!0,qe.prototype.controls.table={data:{cols:10,rows:10,classList:{"table table-bordered":"Bootstrap Bordered","table table-striped":"Bootstrap Striped","table table-dark":"Bootstrap Dark"}},popup(t,e,i,o,s){const n=i.data&&i.data.rows?i.data.rows:10,r=i.data&&i.data.cols?i.data.cols:10,a=t.create.fromHTML('<form class="jodit_form jodit_form_inserter"><label class="jodit_form_center"><span>1</span> &times; <span>1</span></label><div class="jodit_form-table-creator-box"><div class="jodit_form-container"></div><div class="jodit_form-options">'+(()=>{if(!t.options.useExtraClassesOptions)return"";const e=[];if(i.data){const t=i.data.classList;Object.keys(t).forEach(i=>{e.push(`<label class="jodit_vertical_middle"><input class="jodit_checkbox" value="${i}" type="checkbox"/>${t[i]}</label>`)})}return e.join("")})()+"</div></div></form>"),l=a.querySelectorAll("span")[0],d=a.querySelectorAll("span")[1],c=a.querySelector(".jodit_form-container"),h=a.querySelector(".jodit_form-table-creator-box"),p=a.querySelector(".jodit_form-options"),u=[];return c.addEventListener("mousemove",(t,e)=>{const i=t.target;if(!i||"DIV"!==i.tagName)return;let o=void 0===e||isNaN(e)?parseInt(i.getAttribute("data-index")||"0",10):e||0;const s=Math.ceil((o+1)/r),n=o%r+1;for(let t=0;u.length>t;t+=1)u[t].className=t%r+1>n||Math.ceil((t+1)/r)>s?"":"hovered";d.textContent=""+n,l.textContent=""+s}),t.events.on(c,"touchstart mousedown",e=>{const i=e.target;if(e.preventDefault(),e.stopImmediatePropagation(),"DIV"!==i.tagName)return;let s=parseInt(i.getAttribute("data-index")||"0",10);const n=Math.ceil((s+1)/r),a=s%r+1,l=t.create.inside,d=l.element("tbody"),c=l.element("table");c.appendChild(d),c.style.width="100%";let h,u,f=null;for(let t=1;n>=t;t+=1){h=l.element("tr");for(let t=1;a>=t;t+=1)u=l.element("td"),f||(f=u),u.appendChild(l.element("br")),h.appendChild(l.text("\n")),h.appendChild(l.text("\t")),h.appendChild(u);d.appendChild(l.text("\n")),d.appendChild(h)}const m=t.selection.current();if(m&&t.selection.isCollapsed()){const e=xe.closest(m,e=>xe.isBlock(e,t.editorWindow),t.editor);e&&e!==t.editor&&!e.nodeName.match(/^TD|TH|TBODY|TABLE|THEADER|TFOOTER$/)&&t.selection.setCursorAfter(e)}Mt("input[type=checkbox]:checked",p).forEach(t=>{t.value.split(/[\s]+/).forEach(t=>{c.classList.add(t)})}),t.selection.insertNode(l.text("\n")),t.selection.insertNode(c,!1),f&&(t.selection.setCursorIn(f),ke(f,t.editor,t.editorDocument)),o()}),s&&s.parentToolbar&&t.events.off(s.parentToolbar.container,"afterOpenPopup.tableGenerator").on(s.parentToolbar.container,"afterOpenPopup.tableGenerator",()=>{(e=>{const i=e*r;if(u.length>i){for(let t=i;u.length>t;t+=1)xe.safeRemove(u[t]),delete u[t];u.length=i}for(let e=0;i>e;e+=1)if(!u[e]){const i=t.create.div();i.setAttribute("data-index",""+e),u.push(i)}u.forEach(t=>{c.appendChild(t)});const o=(u[0].offsetWidth||18)*r;c.style.width=o+"px",h.style.width=o+p.offsetWidth+1+"px"})(n),u[0]&&(u[0].className="hovered")},"",!0),a},tooltip:"Insert table"};class Uo extends oo{constructor(){super(...arguments),this.__key="table_processor_observer",this.__selectMode=!1,this.__resizerDelta=0,this.__drag=!1,this.__addResizer=()=>{if(!this.__resizerHandler&&(this.__resizerHandler=this.jodit.container.querySelector(".jodit_table_resizer"),!this.__resizerHandler)){this.__resizerHandler=this.jodit.create.div("jodit_table_resizer");let t=0;this.jodit.events.on(this.__resizerHandler,"mousedown.table touchstart.table",e=>{this.__drag=!0,t=e.clientX,this.jodit.lock(this.__key),this.__resizerHandler.classList.add("jodit_table_resizer-moved");let i,o=this.__workTable.getBoundingClientRect();if(this.__minX=0,this.__maxX=1e6,null!==this.__wholeTable)o=this.__workTable.parentNode.getBoundingClientRect(),this.__minX=o.left,this.__maxX=o.left+o.width;else{const t=Eo.formalCoordinate(this.__workTable,this.__workCell,!0);Eo.formalMatrix(this.__workTable,(e,o,s)=>{t[1]===s&&(i=e.getBoundingClientRect(),this.__minX=Math.max(i.left+A/2,this.__minX)),t[1]+1===s&&(i=e.getBoundingClientRect(),this.__maxX=Math.min(i.left+i.width-A/2,this.__maxX))})}return!1}).on(this.__resizerHandler,"mouseenter.table",()=>{clearTimeout(this.hideTimeout)}).on(this.jodit.editorWindow,"mousemove.table touchmove.table",e=>{if(this.__drag){let i=e.clientX;const o=se(this.__resizerHandler.parentNode||this.jodit.ownerDocument.documentElement,this.jodit,this.jodit.ownerDocument,!0);this.__minX>i&&(i=this.__minX),i>this.__maxX&&(i=this.__maxX),this.__resizerDelta=i-t+(this.jodit.options.iframe?o.left:0),this.__resizerHandler.style.left=i-(this.jodit.options.iframe?0:o.left)+"px";const s=this.jodit.selection.sel;s&&s.removeAllRanges(),e.preventDefault&&e.preventDefault()}}),this.jodit.workplace.appendChild(this.__resizerHandler)}},this.onExecCommand=t=>{if(/table(splitv|splitg|merge|empty|bin|binrow|bincolumn|addcolumn|addrow)/.test(t)){t=t.replace("table","");const e=Eo.getAllSelectedCells(this.jodit.editor);if(e.length){const i=e.shift();if(!i)return;const o=xe.closest(i,"table",this.jodit.editor);switch(t){case"splitv":Eo.splitVertical(o);break;case"splitg":Eo.splitHorizontal(o);break;case"merge":Eo.mergeSelected(o);break;case"empty":Eo.getAllSelectedCells(this.jodit.editor).forEach(t=>t.innerHTML="");break;case"bin":xe.safeRemove(o);break;case"binrow":Eo.removeRow(o,i.parentNode.rowIndex);break;case"bincolumn":Eo.removeColumn(o,i.cellIndex);break;case"addcolumnafter":case"addcolumnbefore":Eo.appendColumn(o,i.cellIndex,"addcolumnafter"===t);break;case"addrowafter":case"addrowbefore":Eo.appendRow(o,i.parentNode,"addrowafter"===t)}}return!1}}}static isCell(t){return!!t&&/^TD|TH$/i.test(t.nodeName)}showResizer(){clearTimeout(this.hideTimeout),this.__resizerHandler.style.display="block"}hideResizer(){clearTimeout(this.hideTimeout),this.hideTimeout=nt(()=>{this.__resizerHandler.style.display="none"},this.jodit.defaultTimeout)}__deSelectAll(t,e){const i=Eo.getAllSelectedCells(t||this.jodit.editor);i.length&&i.forEach(t=>{e&&e===t||Eo.restoreSelection(t)})}__setWorkCell(t,e=null){this.__wholeTable=e,this.__workCell=t,this.__workTable=xe.up(t,t=>t&&"TABLE"===t.nodeName,this.jodit.editor)}__calcResizerPosition(t,e,i=0,o=0){const s=se(e,this.jodit,this.jodit.editorDocument);if(i>A&&s.width-i>A)this.hideResizer();else{const n=se(this.__resizerHandler.parentNode||this.jodit.ownerDocument.documentElement,this.jodit,this.jodit.ownerDocument,!0),r=se(t,this.jodit,this.jodit.editorDocument);if(this.__resizerHandler.style.left=(i>A?s.left+s.width:s.left)-n.left+o+"px",this.__resizerHandler.style.height=r.height+"px",this.__resizerHandler.style.top=r.top-n.top+"px",this.showResizer(),i>A){const t=xe.next(e,Uo.isCell,e.parentNode);this.__setWorkCell(e,!!t&&null)}else{const t=xe.prev(e,Uo.isCell,e.parentNode);t?this.__setWorkCell(t):this.__setWorkCell(e,!0)}}}observe(t){let e;t[this.__key]=!0,this.jodit.events.on(t,"mousedown.table touchstart.table",i=>{if(this.jodit.options.readonly)return;const o=xe.up(i.target,Uo.isCell,t);o&&o instanceof this.jodit.editorWindow.HTMLElement&&(o.firstChild||o.appendChild(this.jodit.editorDocument.createElement("br")),e=o,Eo.addSelected(o),this.__selectMode=!0)}).on(t,"mouseleave.table",t=>{this.__resizerHandler&&this.__resizerHandler!==t.relatedTarget&&this.hideResizer()}).on(t,"mousemove.table touchmove.table",i=>{if(this.jodit.options.readonly)return;if(this.__drag||this.jodit.isLockedNotBy(this.__key))return;const o=xe.up(i.target,Uo.isCell,t);if(o)if(this.__selectMode){if(o!==e){this.jodit.lock(this.__key);const t=this.jodit.selection.sel;t&&t.removeAllRanges(),i.preventDefault&&i.preventDefault()}this.__deSelectAll(t);const s=Eo.getSelectedBound(t,[o,e]),n=Eo.formalMatrix(t);for(let t=s[0][0];s[1][0]>=t;t+=1)for(let e=s[0][1];s[1][1]>=e;e+=1)Eo.addSelected(n[t][e]);const r=n[s[1][0]][s[1][1]],a=n[s[0][0]][s[0][1]];this.jodit.events.fire("showPopup",t,()=>{const t=se(a,this.jodit,this.jodit.editorDocument),e=se(r,this.jodit,this.jodit.editorDocument);return{left:t.left,top:t.top,width:e.left-t.left+e.width,height:e.top-t.top+e.height}}),i.stopPropagation()}else this.__calcResizerPosition(t,o,i.offsetX)}),this.__addResizer()}afterInit(t){t.options.useTableProcessor&&t.events.on(this.jodit.ownerWindow,"mouseup.table touchend.table",()=>{if((this.__selectMode||this.__drag)&&(this.__selectMode=!1,this.jodit.unlock()),this.__resizerHandler&&this.__drag){if(this.__drag=!1,this.__resizerHandler.classList.remove("jodit_table_resizer-moved"),null===this.__wholeTable){const t=[];Eo.setColumnWidthByDelta(this.__workTable,Eo.formalCoordinate(this.__workTable,this.__workCell,!0)[1],this.__resizerDelta,!0,t);const e=xe.next(this.__workCell,Uo.isCell,this.__workCell.parentNode);Eo.setColumnWidthByDelta(this.__workTable,Eo.formalCoordinate(this.__workTable,e)[1],-this.__resizerDelta,!1,t)}else{const t=this.__workTable.offsetWidth,e=ie(this.__workTable.parentNode,this.jodit.editorWindow);if(this.__wholeTable){const i=parseInt(this.jodit.editorWindow.getComputedStyle(this.__workTable).marginLeft||"0",10);this.__workTable.style.width=(t-this.__resizerDelta)/e*100+"%",this.__workTable.style.marginLeft=(i+this.__resizerDelta)/e*100+"%"}else this.__workTable.style.width=(t+this.__resizerDelta)/e*100+"%"}t.setEditorValue(),t.selection.focus()}}).on(this.jodit.ownerWindow,"scroll.table",()=>{if(this.__drag){const e=xe.up(this.__workCell,t=>t&&"TABLE"===t.nodeName,t.editor);if(e){const t=e.getBoundingClientRect();this.__resizerHandler.style.top=t.top+"px"}}}).on(this.jodit.ownerWindow,"mousedown.table touchend.table",t=>{const e=xe.closest(t.originalEvent.target,"TD|TH",this.jodit.editor);let i=null;e instanceof this.jodit.editorWindow.HTMLTableCellElement&&(i=xe.closest(e,"table",this.jodit.editor)),i?this.__deSelectAll(i,e instanceof this.jodit.editorWindow.HTMLTableCellElement&&e):this.__deSelectAll()}).on("afterGetValueFromEditor.table",t=>{const e=RegExp(`([s]*)${X}="1"`,"g");e.test(t.value)&&(t.value=t.value.replace(e,""))}).on("change.table afterCommand.table afterSetMode.table",()=>{Mt("table",t.editor).forEach(t=>{t[this.__key]||this.observe(t)})}).on("beforeSetMode.table",()=>{Eo.getAllSelectedCells(t.editor).forEach(e=>{Eo.restoreSelection(e),Eo.normalizeTable(xe.closest(e,"table",t.editor))})}).on("keydown.table",e=>{e.which===y&&Mt("table",t.editor).forEach(t=>{this.__deSelectAll(t)})}).on("beforeCommand.table",this.onExecCommand.bind(this))}beforeDestruct(t){t.events&&(t.events.off(this.jodit.ownerWindow,".table"),t.events.off(".table"))}}qe.prototype.controls.selectall={icon:"select-all",command:"selectall",tooltip:"Select all"},qe.prototype.showXPathInStatusbar=!0;class Ko extends oo{constructor(){super(...arguments),this.onContext=(t,e)=>(this.menu||(this.menu=new Ki(this.jodit)),this.menu.show(e.clientX,e.clientY,[{icon:"bin",title:t===this.jodit.editor?"Clear":"Remove",exec:()=>{t!==this.jodit.editor?xe.safeRemove(t):this.jodit.value="",this.jodit.setEditorValue()}},{icon:"select-all",title:"Select",exec:()=>{this.jodit.selection.select(t)}}]),!1),this.onSelectPath=(t,e)=>{this.jodit.selection.focus();const i=e.target.getAttribute("data-path")||"/";if("/"===i)return this.jodit.execCommand("selectall"),!1;try{const t=this.jodit.editorDocument.evaluate(i,this.jodit.editor,null,XPathResult.ANY_TYPE,null).iterateNext();if(t)return this.jodit.selection.select(t),!1}catch(t){}return this.jodit.selection.select(t),!1},this.tpl=(t,e,i,o)=>{const s=this.jodit.create.fromHTML("<li>"+`<a role="button" data-path="${e}" href="javascript:void(0)" title="${o}" tabindex="-1"'>${Bt(i)}</a>`+"</li>"),n=s.firstChild;return this.jodit.events.on(n,"click",this.onSelectPath.bind(this,t)).on(n,"contextmenu",this.onContext.bind(this,t)),s},this.removeSelectAll=()=>{this.selectAllButton&&(this.selectAllButton.destruct(),delete this.selectAllButton)},this.appendSelectAll=()=>{this.removeSelectAll(),this.selectAllButton=new ei(this.jodit,{name:"selectall",...this.jodit.options.controls.selectall}),this.container&&this.container.insertBefore(this.selectAllButton.container,this.container.firstChild)},this.calcPathImd=()=>{if(this.isDestructed)return;const t=this.jodit.selection.current();if(this.container&&(this.container.innerHTML=l),t){let e,i,o;xe.up(t,t=>{t&&this.jodit.editor!==t&&t.nodeType!==Node.TEXT_NODE&&(e=t.nodeName.toLowerCase(),i=At(t,this.jodit.editor).replace(/^\//,""),o=this.tpl(t,i,e,this.jodit.i18n("Select %s",e)),this.container&&this.container.insertBefore(o,this.container.firstChild))},this.jodit.editor)}this.appendSelectAll()},this.calcPath=rt(this.calcPathImd,2*this.jodit.defaultTimeout),this.container=null,this.menu=null}afterInit(){this.jodit.options.showXPathInStatusbar&&(this.container=this.jodit.create.element("ul"),this.container.classList.add("jodit_xpath"),this.jodit.statusbar.append(this.container),this.jodit.events.on("mouseup.xpath change.xpath keydown.xpath changeSelection.xpath",this.calcPath).on("afterSetMode.xpath afterInit.xpath",()=>{this.jodit.getRealMode()===P?this.calcPath():(this.container&&(this.container.innerHTML=l),this.appendSelectAll())}),this.calcPath())}beforeDestruct(){this.jodit&&this.jodit.events&&this.jodit.events.off(".xpath"),this.removeSelectAll(),this.menu&&this.menu.destruct(),xe.safeRemove(this.container),this.menu=null,this.container=null}}qe.prototype.dialog={resizable:!0,draggable:!0,buttons:["dialog.close"],removeButtons:[]},qe.prototype.controls.dialog={close:{icon:"cancel",exec(t){t.close()}},fullsize:{icon:"fullsize",getLabel(t,e,i){if(qe.prototype.controls.fullsize&&qe.prototype.controls.fullsize.getLabel&&"function"==typeof qe.prototype.controls.fullsize.getLabel)return qe.prototype.controls.fullsize.getLabel(t,e,i)},exec(t){t.toggleFullSize()}}};class Xo extends Ye{constructor(t,e=qe.prototype.dialog){super(t,e),this.destination=document.body,this.destroyAfterClose=!1,this.moved=!1,this.iSetMaximization=!1,this.resizable=!1,this.draggable=!1,this.startX=0,this.startY=0,this.startPoint={x:0,y:0,w:0,h:0},this.lockSelect=()=>{this.container.classList.add("jodit_dialog_box-moved")},this.unlockSelect=()=>{this.container.classList.remove("jodit_dialog_box-moved")},this.onMouseUp=()=>{(this.draggable||this.resizable)&&(this.draggable=!1,this.resizable=!1,this.unlockSelect(),this.jodit&&this.jodit.events&&this.jodit.events.fire(this,"endResize endMove"))},this.onHeaderMouseDown=t=>{const e=t.target;!this.options.draggable||e&&e.nodeName.match(/^(INPUT|SELECT)$/)||(this.draggable=!0,this.startX=t.clientX,this.startY=t.clientY,this.startPoint.x=fe(this.dialog,"left"),this.startPoint.y=fe(this.dialog,"top"),this.setMaxZIndex(),t.preventDefault(),this.lockSelect(),this.jodit&&this.jodit.events&&this.jodit.events.fire(this,"startMove"))},this.onMouseMove=t=>{this.draggable&&this.options.draggable&&(this.setPosition(this.startPoint.x+t.clientX-this.startX,this.startPoint.y+t.clientY-this.startY),this.jodit&&this.jodit.events&&this.jodit.events.fire(this,"move",t.clientX-this.startX,t.clientY-this.startY),t.stopImmediatePropagation(),t.preventDefault()),this.resizable&&this.options.resizable&&(this.setSize(this.startPoint.w+t.clientX-this.startX,this.startPoint.h+t.clientY-this.startY),this.jodit&&this.jodit.events&&this.jodit.events.fire(this,"resizeDialog",t.clientX-this.startX,t.clientY-this.startY),t.stopImmediatePropagation(),t.preventDefault())},this.onKeyDown=t=>{if(this.isOpened()&&t.which===_){const e=this.getMaxZIndexDialog();e?e.close():this.close(),t.stopImmediatePropagation()}},this.onResize=()=>{this.options&&this.options.resizable&&!this.moved&&this.isOpened()&&!this.offsetX&&!this.offsetY&&this.setPosition()},this.document=document,this.window=window,this.close=t=>{this.isDestructed||(t&&(t.stopImmediatePropagation(),t.preventDefault()),this.jodit&&this.jodit.events&&this.jodit.events.fire("beforeClose",this),this.container&&this.container.classList&&this.container.classList.remove("active"),this.iSetMaximization&&this.maximization(!1),this.destroyAfterClose&&this.destruct(),this.jodit&&this.jodit.events&&(this.jodit.events.fire(this,"afterClose"),this.jodit.events.fire(this.ownerWindow,"jodit_close_dialog")))},Ct(t)&&(this.window=t.ownerWindow,this.document=t.ownerDocument,t.events.on("beforeDestruct",()=>{this.destruct()})),this.options={...t&&t.options?t.options.dialog:qe.prototype.dialog,...this.options},this.container=this.create.fromHTML('<div style="z-index:'+this.options.zIndex+'" class="jodit jodit_dialog_box"><div class="jodit_dialog_overlay"></div><div class="jodit_dialog"><div class="jodit_dialog_header non-selected"><div class="jodit_dialog_header-title"></div><div class="jodit_dialog_header-toolbar"></div></div><div class="jodit_dialog_content"></div><div class="jodit_dialog_footer"></div>'+(this.options.resizable?'<div class="jodit_dialog_resizer"></div>':"")+"</div></div>"),t&&t.id&&this.container.setAttribute("data-editor_id",t.id),Object.defineProperty(this.container,"__jodit_dialog",{value:this}),this.dialog=this.container.querySelector(".jodit_dialog"),this.resizer=this.container.querySelector(".jodit_dialog_resizer"),this.jodit&&this.jodit.options&&this.jodit.options.textIcons&&this.container.classList.add("jodit_text_icons"),this.dialogbox_header=this.container.querySelector(".jodit_dialog_header>.jodit_dialog_header-title"),this.dialogbox_content=this.container.querySelector(".jodit_dialog_content"),this.dialogbox_footer=this.container.querySelector(".jodit_dialog_footer"),this.dialogbox_toolbar=this.container.querySelector(".jodit_dialog_header>.jodit_dialog_header-toolbar"),this.destination.appendChild(this.container),this.container.addEventListener("close_dialog",this.close),this.toolbar=si.makeCollection(this),this.toolbar.build(this.options.buttons,this.dialogbox_toolbar),this.events.on(this.window,"mousemove",this.onMouseMove).on(this.window,"mouseup",this.onMouseUp).on(this.window,"keydown",this.onKeyDown).on(this.window,"resize",this.onResize);const i=this.container.querySelector(".jodit_dialog_header");i&&i.addEventListener("mousedown",this.onHeaderMouseDown.bind(this)),this.options.resizable&&this.resizer.addEventListener("mousedown",this.onResizerMouseDown.bind(this)),bo(this)}setElements(t,e){const i=[];it(e).forEach(e=>{if(Array.isArray(e)){const o=this.create.div("jodit_dialog_column");return i.push(o),t.appendChild(o),this.setElements(o,e)}const o="string"==typeof e?this.create.fromHTML(e):e;i.push(o),o.parentNode!==t&&t.appendChild(o)}),Array.from(t.childNodes).forEach(e=>{-1===i.indexOf(e)&&t.removeChild(e)})}onResizerMouseDown(t){this.resizable=!0,this.startX=t.clientX,this.startY=t.clientY,this.startPoint.w=this.dialog.offsetWidth,this.startPoint.h=this.dialog.offsetHeight,this.lockSelect(),this.jodit.events&&this.jodit.events.fire(this,"startResize")}setSize(t,e){t&&fe(this.dialog,"width",t),e&&fe(this.dialog,"height",e)}setPosition(t,e){let i=this.window.innerWidth/2-this.dialog.offsetWidth/2,o=this.window.innerHeight/2-this.dialog.offsetHeight/2;0>i&&(i=0),0>o&&(o=0),void 0!==t&&void 0!==e&&(this.offsetX=t,this.offsetY=e,this.moved=Math.abs(t-i)>100||Math.abs(e-o)>100),this.dialog.style.left=(t||i)+"px",this.dialog.style.top=(e||o)+"px"}setTitle(t){this.setElements(this.dialogbox_header,t)}setContent(t){this.setElements(this.dialogbox_content,t)}setFooter(t){this.setElements(this.dialogbox_footer,t),this.dialog.classList.toggle("with_footer",!!t)}getZIndex(){return parseInt(this.container.style.zIndex||"0",10)}getMaxZIndexDialog(){let t,e,i=0,o=this;return Mt(".jodit_dialog_box",this.destination).forEach(s=>{t=s.__jodit_dialog,e=parseInt(fe(s,"zIndex"),10),t.isOpened()&&!isNaN(e)&&e>i&&(o=t,i=e)}),o}setMaxZIndex(){let t=0,e=0;Mt(".jodit_dialog_box",this.destination).forEach(i=>{e=parseInt(fe(i,"zIndex"),10),t=Math.max(isNaN(e)?0:e,t)}),this.container.style.zIndex=""+(t+1)}maximization(t){return"boolean"!=typeof t&&(t=!this.container.classList.contains("jodit_dialog_box-fullsize")),this.container.classList.toggle("jodit_dialog_box-fullsize",t),[this.destination,this.destination.parentNode].forEach(e=>{e&&e.classList&&e.classList.toggle("jodit_fullsize_box",t)}),this.iSetMaximization=t,t}open(t,e,i,o){this.jodit&&this.jodit.events&&!1===this.jodit.events.fire(this,"beforeOpen")||(this.destroyAfterClose=!0===i,void 0!==e&&this.setTitle(e),t&&this.setContent(t),this.container.classList.add("active"),o&&this.container.classList.add("jodit_modal"),this.setPosition(this.offsetX,this.offsetY),this.setMaxZIndex(),this.options.fullsize&&this.maximization(!0),this.jodit&&this.jodit.events&&this.jodit.events.fire("afterOpen",this))}isOpened(){return!this.isDestructed&&this.container&&this.container.classList.contains("active")}destruct(){this.isDestructed||(this.toolbar&&(this.toolbar.destruct(),delete this.toolbar),this.events&&this.events.off(this.window,"mousemove",this.onMouseMove).off(this.window,"mouseup",this.onMouseUp).off(this.window,"keydown",this.onKeyDown).off(this.window,"resize",this.onResize),!this.jodit&&this.events&&(this.events.destruct(),delete this.events),this.container&&(xe.safeRemove(this.container),delete this.container),super.destruct())}}const Yo=(t,e,i,o="jodit_alert")=>{"function"==typeof e&&(i=e,e=void 0);const s=new Xo,n=s.create.div(o),r=s.create.fromHTML('<a href="javascript:void(0)" style="float:right;" class="jodit_button">'+Ce.getIcon("cancel")+"<span>"+li.prototype.i18n("Ok")+"</span></a>");return it(t).forEach(t=>{n.appendChild(xe.isNode(t,s.window)?t:s.create.fromHTML(t))}),r.addEventListener("click",()=>{i&&"function"==typeof i&&!1===i(s)||s.close()}),s.setFooter([r]),s.open(n,e||"&nbsp;",!0,!0),r.focus(),s},Go=(t,e,i,o,s)=>{const n=new Xo,r=n.create.fromHTML('<a href="javascript:void(0)" style="float:right;" class="jodit_button">'+Ce.getIcon("cancel")+"<span>"+li.prototype.i18n("Cancel")+"</span></a>"),a=n.create.fromHTML('<a href="javascript:void(0)" style="float:left;" class="jodit_button">'+Ce.getIcon("check")+"<span>"+li.prototype.i18n("Ok")+"</span></a>"),l=n.create.element("form",{class:"jodit_promt"}),d=n.create.element("input",{autofocus:!0,class:"jodit_input"}),c=n.create.element("label");"function"==typeof e&&(i=e,e=void 0),o&&d.setAttribute("placeholder",o),c.appendChild(n.create.text(t)),l.appendChild(c),l.appendChild(d),r.addEventListener("click",n.close,!1);const h=()=>{i&&"function"==typeof i&&!1===i(d.value)||n.close()};return a.addEventListener("click",h),l.addEventListener("submit",()=>(h(),!1)),n.setFooter([a,r]),n.open(l,e||"&nbsp;",!0,!0),d.focus(),void 0!==s&&s.length&&(d.value=s,d.select()),n},Jo=(t,e,i)=>{const o=new Xo,s=o.create.fromHTML('<form class="jodit_promt"></form>'),n=o.create.element("label");"function"==typeof e&&(i=e,e=void 0),n.appendChild(o.create.fromHTML(t)),s.appendChild(n);const r=o.create.fromHTML('<a href="javascript:void(0)" style="float:right;" class="jodit_button">'+Ce.getIcon("cancel")+"<span>"+li.prototype.i18n("Cancel")+"</span></a>");r.addEventListener("click",()=>{i&&i(!1),o.close()});const a=()=>{i&&i(!0),o.close()},l=o.create.fromHTML('<a href="javascript:void(0)" style="float:left;" class="jodit_button">'+Ce.getIcon("check")+"<span>"+li.prototype.i18n("Yes")+"</span></a>");return l.addEventListener("click",a),s.addEventListener("submit",()=>(a(),!1)),o.setFooter([l,r]),o.open(s,e||"&nbsp;",!0,!0),l.focus(),o},Zo="jodit_filebrowser",Qo=Zo+"_files_item",ts='<i class="jodit_icon-loader"></i>';qe.prototype.filebrowser={filter:(t,e)=>(e=e.toLowerCase(),"string"==typeof t?-1!==t.toLowerCase().indexOf(e):"string"==typeof t.name?-1!==t.name.toLowerCase().indexOf(e):"string"!=typeof t.file||-1!==t.file.toLowerCase().indexOf(e)),sortBy:"changed-desc",sort(t,e,i){const[o,s]=i.toLowerCase().split("-"),n="asc"===s,r=(t,e)=>e>t?n?-1:1:t>e?n?1:-1:0;if("string"==typeof t)return r(t.toLowerCase(),e.toLowerCase());if(void 0===t[o]||"name"===o)return"string"==typeof t.name?r(t.name.toLowerCase(),e.name.toLowerCase()):"string"==typeof t.file?r(t.file.toLowerCase(),e.file.toLowerCase()):0;switch(o){case"changed":{const i=new Date(t.changed).getTime(),o=new Date(e.changed).getTime();return n?i-o:o-i}case"size":{const i=ye(t.size),o=ye(e.size);return n?i-o:o-i}}return 0},editImage:!0,preview:!0,showPreviewNavigation:!0,showSelectButtonInPreview:!0,contextMenu:!0,howLongShowMsg:3e3,createNewFolder:!0,deleteFolder:!0,moveFolder:!0,moveFile:!0,showFoldersPanel:!0,width:859,height:400,buttons:["filebrowser.upload","filebrowser.remove","filebrowser.update","filebrowser.select","filebrowser.edit","|","filebrowser.tiles","filebrowser.list","|","filebrowser.filter","|","filebrowser.sort"],removeButtons:[],fullsize:!1,showTooltip:!0,view:null,isSuccess:t=>t.success,getMessage:t=>void 0!==t.data.messages&&Array.isArray(t.data.messages)?t.data.messages.join(" "):"",showFileName:!0,showFileSize:!0,showFileChangeTime:!0,saveStateInStorage:!0,getThumbTemplate(t,e,i){const o=this.options,s=o.showFileName,n=o.showFileSize&&t.size,r=o.showFileChangeTime&&t.time;let a,l="";return void 0!==t.file&&(l=t.file),a=`<div class="${Qo}-info">`+(s?`<span class="${Qo}-info-filename">${l}</span>`:"")+(n?`<span class="${Qo}-info-filesize">${t.size}</span>`:"")+(r?`<span class="${Qo}-info-filechanged">${r}</span>`:"")+"</div>","<a "+`data-is-file="${t.isImage?0:1}" `+'draggable="true" '+`class="${Qo}" `+`href="${t.fileURL}" `+`data-source="${i}" `+`data-path="${t.path}" `+`data-name="${l}" `+`title="${l}" `+`data-url="${t.fileURL}"`+"><img "+`data-is-file="${t.isImage?0:1}" `+`data-src="${t.fileURL}" `+`src="${t.imageURL}" `+`alt="${l}" `+'loading="lazy" />'+(s||n||r?a:"")+"</a>"},ajax:{url:"",async:!0,data:{},cache:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",method:"POST",processData:!0,dataType:"json",headers:{},prepareData:t=>t,process:t=>t},create:{data:{action:"folderCreate"}},getLocalFileByUrl:{data:{action:"getLocalFileByUrl"}},resize:{data:{action:"imageResize"}},crop:{data:{action:"imageCrop"}},fileMove:{data:{action:"fileMove"}},folderMove:{data:{action:"folderMove"}},fileRename:{data:{action:"fileRename"}},folderRename:{data:{action:"folderRename"}},fileRemove:{data:{action:"fileRemove"}},folderRemove:{data:{action:"folderRemove"}},items:{data:{action:"files"}},folder:{data:{action:"folders"}},permissions:{data:{action:"permissions"}},uploader:null},qe.prototype.controls.filebrowser={upload:{icon:"plus",isInput:!0,exec(){},isDisable:t=>!t.dataProvider.canI("FileUpload"),getContent(t,e){const i=t.create.fromHTML('<span class="jodit_upload_button">'+Ce.getIcon("plus")+'<input type="file" accept="'+(t.state.onlyImages?"image/*":"*")+'" tabindex="-1" dir="auto" multiple=""/></span>'),o=i.querySelector("input");return t.events.on("updateToolbar",()=>{e&&e.isDisable&&(e.isDisable(t,e)?o.setAttribute("disabled","disabled"):o.removeAttribute("disabled"))}).fire("bindUploader.filebrowser",i),i}},remove:{icon:"bin",isDisable:t=>!t.state.activeElements.length||!t.dataProvider.canI("FileRemove"),exec(t){t.events.fire("fileRemove.filebrowser")}},update:{exec(t){t.events.fire("update.filebrowser")}},select:{icon:"check",isDisable:t=>!t.state.activeElements.length,exec(t){t.events.fire("select.filebrowser")}},edit:{icon:"pencil",isDisable(t){const e=t.state.activeElements;return 1!==e.length||!e[0].isImage||!(t.dataProvider.canI("ImageCrop")||t.dataProvider.canI("ImageResize"))},exec(t){t.events.fire("edit.filebrowser")}},tiles:{icon:"th",isActive:t=>"tiles"===t.state.view,exec(t){t.events.fire("view.filebrowser","tiles")}},list:{icon:"th-list",isActive:t=>"list"===t.state.view,exec(t){t.events.fire("view.filebrowser","list")}},filter:{isInput:!0,getContent(t){const e=t.create.element("input",{class:"jodit_input",placeholder:t.i18n("Filter")});return t.events.on(e,"keydown mousedown",rt(()=>{t.events.fire("filter.filebrowser",e.value)},t.defaultTimeout)),e}},sort:{isInput:!0,getContent(t){const e=t.create.fromHTML('<select class="jodit_input jodit_select">'+`<option value="changed-asc">${t.i18n("Sort by changed")} (⬆)</option>`+`<option value="changed-desc">${t.i18n("Sort by changed")} (⬇)</option>`+`<option value="name-asc">${t.i18n("Sort by name")} (⬆)</option>`+`<option value="name-desc">${t.i18n("Sort by name")} (⬇)</option>`+`<option value="size-asc">${t.i18n("Sort by size")} (⬆)</option>`+`<option value="size-desc">${t.i18n("Sort by size")} (⬇)</option>`+"</select>");return t.events.on("sort.filebrowser",t=>{e.value!==t&&(e.value=t)}).on(e,"change",()=>{t.events.fire("sort.filebrowser",e.value)}),e}}};const es="default";class is{constructor(t,e){this.options=t,this.parent=e,this.__currentPermissions=null,this.currentPath="",this.currentSource=es,this.currentBaseUrl="",this.getPathByUrl=(t,e,i)=>(this.options.getLocalFileByUrl.data.url=t,this.get("getLocalFileByUrl",t=>{this.options.isSuccess(t)?e(t.data.path,t.data.name,t.data.source):i(Error(this.options.getMessage(t)))},i))}canI(t){const e="allow"+t;return null===this.__currentPermissions||void 0===this.__currentPermissions[e]||this.__currentPermissions[e]}get(t,e,i){const o=gt(!0,{},this.options.ajax,void 0!==this.options[t]?this.options[t]:this.options.ajax);o.prepareData&&(o.data=o.prepareData.call(this,o.data));const s=new Ui(this.parent,o).send();return e&&s.then(e),i&&s.catch(i),s}async permissions(t=this.currentPath,e=this.currentSource){return this.options.permissions?(this.options.permissions.data.path=t,this.options.permissions.data.source=e,this.options.permissions.url?this.get("permissions").then(t=>{let e=this.options.permissions.process;if(e||(e=this.options.ajax.process),e){const i=e.call(self,t);i.data.permissions&&(this.__currentPermissions=i.data.permissions)}}):Promise.resolve()):Promise.resolve()}async items(t=this.currentPath,e=this.currentSource){const i=this.options;return i.items?(i.items.data.path=t,i.items.data.source=e,this.get("items")):Promise.reject("Set Items api options")}async tree(t=this.currentPath,e=this.currentSource){return t=Jt(t),await this.permissions(t,e),this.options.folder?(this.options.folder.data.path=t,this.options.folder.data.source=e,this.get("folder")):Promise.reject("Set Folder Api options")}createFolder(t,e,i){return this.options.create?(this.options.create.data.source=i,this.options.create.data.path=e,this.options.create.data.name=t,this.get("create").then(t=>(this.currentPath=e,this.currentSource=i,t))):Promise.reject("Set Create api options")}move(t,e,i,o){const s=o?"fileMove":"folderMove",n=this.options[s];return n?(n.data.from=t,n.data.path=e,n.data.source=i,this.get(s)):Promise.reject("Set Move api options")}fileRemove(t,e,i){return this.options.fileRemove?(this.options.fileRemove.data.path=t,this.options.fileRemove.data.name=e,this.options.fileRemove.data.source=i,this.get("fileRemove")):Promise.reject("Set fileRemove api options")}folderRemove(t,e,i){return this.options.folderRemove?(this.options.folderRemove.data.path=t,this.options.folderRemove.data.name=e,this.options.folderRemove.data.source=i,this.get("folderRemove")):Promise.reject("Set folderRemove api options")}folderRename(t,e,i,o){return this.options.folderRename?(this.options.folderRename.data.path=t,this.options.folderRename.data.name=e,this.options.folderRename.data.newname=i,this.options.folderRename.data.source=o,this.get("folderRename")):Promise.reject("Set folderRename api options")}fileRename(t,e,i,o){return this.options.fileRename?(this.options.fileRename.data.path=t,this.options.fileRename.data.name=e,this.options.fileRename.data.newname=i,this.options.fileRename.data.source=o,this.get("fileRename")):Promise.reject("Set fileRename api options")}crop(t,e,i,o,s){return this.options.crop||(this.options.crop={data:{}}),void 0===this.options.crop.data&&(this.options.crop.data={action:"crop"}),this.options.crop.data.newname=o||i,s&&(this.options.crop.data.box=s),this.options.crop.data.path=t,this.options.crop.data.name=i,this.options.crop.data.source=e,this.get("crop")}resize(t,e,i,o,s){return this.options.resize||(this.options.resize={data:{}}),void 0===this.options.resize.data&&(this.options.resize.data={action:"resize"}),this.options.resize.data.newname=o||i,s&&(this.options.resize.data.box=s),this.options.resize.data.path=t,this.options.resize.data.name=i,this.options.resize.data.source=e,this.get("resize")}}const os=Zo+"_preview_",ss=(t="next",e="right")=>`<a href="javascript:void(0)" class="${os}navigation ${os}navigation-${t}">`+""+Ce.getIcon("angle-"+e)+"</a>";var ns=t=>{if(!t.options.contextMenu)return()=>{};const e=new Ki(t.jodit||t);return function(i){let o=this,s=t.options,n=t=>o.getAttribute(t)||"";return nt(()=>{e.show(i.pageX,i.pageY,[!("1"===n("data-is-file")||!s.editImage||!t.dataProvider.canI("ImageResize")&&!t.dataProvider.canI("ImageCrop"))&&{icon:"pencil",title:"Edit",exec(){t.openImageEditor(n("href"),n("data-name"),n("data-path"),n("data-source"))}},!!t.dataProvider.canI("FileRename")&&{icon:"italic",title:"Rename",async exec(){t.events.fire("fileRename.filebrowser",n("data-name"),n("data-path"),n("data-source"))}},!!t.dataProvider.canI("FileRemove")&&{icon:"bin",title:"Delete",async exec(){await t.deleteFile(n("data-name"),n("data-source")),t.state.activeElements=[],t.loadTree()}},!!s.preview&&{icon:"eye",title:"Preview",exec(){var e,i;const r=new Xo(t),a=t.create.div(Zo+"_preview",ts),l=t.create.div(Zo+"_preview_box"),d=t.create.fromHTML(ss()),c=t.create.fromHTML(ss("prev","left")),h=e=>{const i=t.create.element("img");i.setAttribute("src",e);const n=()=>{var e,h;i.removeEventListener("load",n),a.innerHTML="",s.showPreviewNavigation&&(xe.prevWithClass(o,Qo)&&a.appendChild(c),xe.nextWithClass(o,Qo)&&a.appendChild(d)),a.appendChild(l),l.appendChild(i),r.setPosition(),null===(h=null===(e=t)||void 0===e?void 0:e.events)||void 0===h||h.fire("previewOpenedAndLoaded")};i.addEventListener("load",n),i.complete&&n()};h(n("href")),t.events.on([d,c],"click",(function(){if(o=this.classList.contains(os+"navigation-next")?xe.nextWithClass(o,Qo):xe.prevWithClass(o,Qo),!o)throw Error("Need element");xe.detach(a),xe.detach(l),a.innerHTML=ts,h(n("href"))})),r.setContent(a),r.setPosition(),r.open(),null===(i=null===(e=t)||void 0===e?void 0:e.events)||void 0===i||i.fire("previewOpened")}},{icon:"upload",title:"Download",exec(){const e=n("href");e&&t.ownerWindow.open(e)}}],t.dialog.getZIndex()+1)},t.defaultTimeout),i.stopPropagation(),i.preventDefault(),!1}};class rs{constructor(t){this.data=t,this.__onEvents={},this.__lockEvent={},Object.keys(t).forEach(e=>{Object.defineProperty(this,e,{set:i=>{this.fire(["beforeChange",`beforeChange.${e}`],e,i),t[e]=i,this.fire(["change",`change.${e}`],e,i)},get:()=>t[e]})})}on(t,e){return Array.isArray(t)?(t.map(t=>this.on(t,e)),this):(this.__onEvents[t]||(this.__onEvents[t]=[]),this.__onEvents[t].push(e),this)}fire(t,...e){if(Array.isArray(t))t.map(t=>this.fire(t,...e));else try{!this.__lockEvent[t]&&this.__onEvents[t]&&(this.__lockEvent[t]=!0,this.__onEvents[t].forEach(t=>t.call(this,...e)))}catch(t){}finally{this.__lockEvent[t]=!1}}static create(t){return new rs(t)}}class as{constructor(t){this.data=t,gt(this,t)}static create(t){return new as(t)}get path(){return Gt(this.data.source.path?this.data.source.path+"/":"/")}get imageURL(){const t=""+(new Date).getTime(),{thumbIsAbsolute:e,source:i,thumb:o,file:s}=this.data,n=o||s;return e&&n?n:Qt(i.baseurl,i.path,n||"")+"?_tmst="+t}get fileURL(){let{name:t,file:e,fileIsAbsolute:i,source:o}=this.data;return void 0!==e&&(t=e),i&&t?t:Qt(o.baseurl,o.path,t||"")}get time(){const{changed:t}=this.data;return t&&("number"==typeof t?new Date(t).toLocaleString():t)||""}get uniqueHashKey(){const t=this.data;let e=[t.sourceName,t.name,t.file,this.time,t.thumb].join("_");return e=e.toLowerCase().replace(/[^0-9a-z\-.]/g,"-"),e}}const ls="default",ds=Qo+"-active-true";class cs extends ni{constructor(t,e){super(t,e),this.loader=this.create.div(Zo+"_loader",ts),this.browser=this.create.div(Zo+" non-selected"),this.status_line=this.create.div(Zo+"_status"),this.tree=this.create.div(Zo+"_tree"),this.files=this.create.div(Zo+"_files"),this.state=rs.create({activeElements:[],elements:[],folders:[],view:"tiles",sortBy:"changed-desc",filterWord:"",onlyImages:!1}),this.errorHandler=t=>{this.status(t instanceof Error?this.i18n(t.message):this.options.getMessage(t))},this.status=(t,e)=>{"string"!=typeof t&&(t=t.message),clearTimeout(this.statusTimer),this.status_line.classList.remove("success"),this.status_line.classList.add("active");const i=this.create.div();i.textContent=t,this.status_line.appendChild(i),e&&this.status_line.classList.add("success"),this.statusTimer=nt(()=>{this.status_line.classList.remove("active"),xe.detach(this.status_line)},this.options.howLongShowMsg)},this.close=()=>{this.dialog.close()},this.open=(t,e=!1)=>(this.state.onlyImages=e,new Promise((e,i)=>{if(!this.options.items||!this.options.items.url)throw Error("Need set options.filebrowser.ajax.url");let o=0;this.events.off(this.files,"dblclick").on(this.files,"dblclick",this.onSelect(t),"a").on(this.files,"touchstart",()=>{const e=(new Date).getTime();K>e-o&&this.onSelect(t)(),o=e},"a").off("select.filebrowser").on("select.filebrowser",this.onSelect(t));const s=this.create.div();this.toolbar.build(this.options.buttons,s),this.dialog.dialogbox_header.classList.add(Zo+"_title_box"),this.dialog.open(this.browser,s),this.events.fire("sort.filebrowser",this.state.sortBy),this.loadTree().then(e,i)})),this.openImageEditor=(t,e,i,o,s,n)=>this.getInstance("ImageEditor").open(t,(t,r,a,l)=>{let d;d="resize"===r.action?this.dataProvider.resize(i,o,e,t,r.box):this.dataProvider.crop(i,o,e,t,r.box),d.then(t=>{this.options.isSuccess(t)?this.loadTree().then(()=>{a(),s&&s()}):(l(Error(this.options.getMessage(t))),n&&n(Error(this.options.getMessage(t))))}).catch(t=>{l(t),n&&n(t)})}),this.elementsMap={};const i=this,o=t?t.ownerDocument:document,s=t?t.editorDocument:o;t&&(this.id=t.id),i.options=new Le(gt(!0,{},i.options,qe.defaultOptions.filebrowser,e,t?t.options.filebrowser:void 0)),i.storage=Fe.makeStorage(this.options.filebrowser.saveStateInStorage),i.dataProvider=new is(i.options,i.jodit||i),i.dialog=new Xo(t||i,{fullsize:i.options.fullsize,buttons:["dialog.fullsize","dialog.close"]}),i.options.showFoldersPanel&&i.browser.appendChild(i.tree),i.browser.appendChild(i.files),i.browser.appendChild(i.status_line),this.initEventsListeners(),this.initNativeEventsListeners(),i.dialog.setSize(i.options.width,i.options.height),["getLocalFileByUrl","crop","resize","create","fileMove","folderMove","fileRename","folderRename","fileRemove","folderRemove","folder","items","permissions"].forEach(t=>{null!==this.options[t]&&(this.options[t]=gt(!0,{},this.options.ajax,this.options[t]))}),i.stateToView();const n=this.storage.get(Zo+"_view");i.state.view=n&&null===this.options.view?"list"===n?"list":"tiles":"list"===i.options.view?"list":"tiles";const r=i.storage.get(Zo+"_sortby");if(r){const t=r.split("-");i.state.sortBy=["changed","name","size"].includes(t[0])?r:"changed-desc"}else i.state.sortBy=i.options.sortBy||"changed-desc";i.dataProvider.currentBaseUrl=Mt("base",s).length?Mt("base",s)[0].getAttribute("href")||"":location.protocol+"//"+location.host,i.initUploader(t)}get defaultTimeout(){return this.jodit&&this.jodit!==this?this.jodit.defaultTimeout:qe.defaultOptions.observer.timeout}async loadItems(t=this.dataProvider.currentPath,e=this.dataProvider.currentSource){return this.files.classList.add("active"),this.files.appendChild(this.loader.cloneNode(!0)),this.dataProvider.items(t,e).then(t=>{let e=this.options.items.process;if(e||(e=this.options.ajax.process),e){const i=e.call(self,t);this.generateItemsList(i.data.sources),this.state.activeElements=[]}}).catch(t=>{Yo(t.message),this.errorHandler(t)})}async loadTree(){const t=this.dataProvider.currentPath,e=this.dataProvider.currentSource,i=t=>{throw t instanceof Error?t:Error(t)};if(this.uploader&&(this.uploader.setPath(t),this.uploader.setSource(e)),this.tree.classList.add("active"),xe.detach(this.tree),this.tree.appendChild(this.loader.cloneNode(!0)),this.options.showFoldersPanel){const o=this.dataProvider.tree(t,e).then(t=>{let e=this.options.folder.process;if(e||(e=this.options.ajax.process),e){const i=e.call(self,t);this.generateFolderTree(i.data.sources)}}).catch(t=>{this.errorHandler(Error(this.jodit.i18n("Error on load folders"))),i(t)}),s=this.loadItems(t,e);return Promise.all([o,s]).catch(i)}this.tree.classList.remove("active")}async deleteFile(t,e){return this.dataProvider.fileRemove(this.dataProvider.currentPath,t,e).then(e=>{if(this.options.remove&&this.options.remove.process&&(e=this.options.remove.process.call(this,e)),!this.options.isSuccess(e))throw Error(this.options.getMessage(e));this.status(this.options.getMessage(e)||this.i18n('File "%s" was deleted',t),!0)}).catch(this.status)}generateFolderTree(t){const e=[];be(t,(t,i)=>{i.folders.forEach(o=>{e.push({name:o,source:i,sourceName:t})})}),this.state.folders=e}generateItemsList(t){const e=[],i=this.state,o=t=>!this.state.onlyImages||void 0===t.isImage||t.isImage,s=t=>!i.filterWord.length||void 0===this.options.filter||this.options.filter(t,i.filterWord);be(t,(t,n)=>{n.files&&n.files.length&&("function"==typeof this.options.sort&&n.files.sort((t,e)=>this.options.sort(t,e,i.sortBy)),n.files.forEach(i=>{s(i)&&o(i)&&e.push(as.create({...i,sourceName:t,source:n}))}))}),this.state.elements=e}onSelect(t){return()=>{if(this.state.activeElements.length){const e=[];this.state.activeElements.forEach(t=>{const i=t.fileURL;i&&e.push(i)}),this.close(),"function"==typeof t&&t({baseurl:"",files:e})}return!1}}isOpened(){return this.dialog.isOpened()&&"none"!==this.browser.style.display}elementToItem(t){const{key:e}=t.dataset,{item:i}=this.elementsMap[e||""];return i}stateToView(){const{state:t,files:e,create:i,options:o}=this,s=t=>{const e=t.uniqueHashKey;if(this.elementsMap[e])return this.elementsMap[e].elm;const s=i.fromHTML(o.getThumbTemplate.call(this,t,t.source,""+t.sourceName));return s.dataset.key=e,this.elementsMap[e]={item:t,elm:s},this.elementsMap[e].elm};t.on("beforeChange.activeElements",()=>{t.activeElements.forEach(t=>{const e=t.uniqueHashKey,{elm:i}=this.elementsMap[e];i&&i.classList.remove(ds)})}).on("change.activeElements",()=>{this.events.fire("changeSelection"),t.activeElements.forEach(t=>{const e=t.uniqueHashKey,{elm:i}=this.elementsMap[e];i&&i.classList.add(ds)})}).on("change.view",()=>{e.classList.remove(Zo+"_files_view-tiles"),e.classList.remove(Zo+"_files_view-list"),e.classList.add(Zo+"_files_view-"+t.view),this.storage.set(Zo+"_view",t.view)}).on("change.sortBy",()=>{this.storage.set(Zo+"_sortby",t.sortBy)}).on("change.elements",rt(()=>{xe.detach(e),t.elements.length?t.elements.forEach(t=>{this.files.appendChild(s(t))}):e.appendChild(i.div(Zo+"_no_files",this.i18n("There are no files")))},this.defaultTimeout)).on("change.folders",rt(()=>{xe.detach(this.tree);let e=ls,s=null;const n=(t,e,n=!1)=>{t&&s&&(t!==s||n)&&o.createNewFolder&&this.dataProvider.canI("FolderCreate")&&(this.tree.appendChild(i.a("jodit_button addfolder",{href:"javascript:void(0)","data-path":Gt(t.path+"/"),"data-source":e},Ce.getIcon("plus")+" "+this.i18n("Add folder"))),s=t)};t.folders.forEach(t=>{const{name:r,source:a,sourceName:l}=t;l&&l!==e&&(this.tree.appendChild(i.div(Zo+"_source_title",l)),e=l);const d=i.a(Zo+"_tree_item",{draggable:"draggable",href:"javascript:void(0)","data-path":Gt(a.path,r+"/"),"data-name":r,"data-source":l,"data-source-path":a.path},i.span(Zo+"_tree_item_title",r));n(a,l),s=a,this.tree.appendChild(d),".."!==r&&"."!==r&&(o.deleteFolder&&this.dataProvider.canI("FolderRename")&&d.appendChild(i.element("i",{class:"jodit_icon_folder jodit_icon_folder_rename",title:this.i18n("Rename")},Ce.getIcon("pencil"))),o.deleteFolder&&this.dataProvider.canI("FolderRemove")&&d.appendChild(i.element("i",{class:"jodit_icon_folder jodit_icon_folder_remove",title:this.i18n("Delete")},Ce.getIcon("cancel"))))}),n(s,e,!0)},this.defaultTimeout))}initEventsListeners(){const t=this.state,e=this;e.events.on("view.filebrowser",e=>{e!==t.view&&(t.view=e)}).on("sort.filebrowser",i=>{i!==t.sortBy&&(t.sortBy=i,e.loadItems())}).on("filter.filebrowser",i=>{i!==t.filterWord&&(t.filterWord=i,e.loadItems())}).on("fileRemove.filebrowser",()=>{e.state.activeElements.length&&Jo(e.i18n("Are you sure?"),"",t=>{if(t){const t=[];e.state.activeElements.forEach(i=>{t.push(e.deleteFile(i.file||i.name||"",i.sourceName))}),e.state.activeElements=[],Promise.all(t).then(()=>e.loadTree())}})}).on("edit.filebrowser",()=>{if(1===e.state.activeElements.length){const[t]=this.state.activeElements;e.openImageEditor(t.fileURL,t.file||"",t.path,t.sourceName)}}).on("fileRename.filebrowser",(t,i,o)=>{1===e.state.activeElements.length&&Go(e.i18n("Enter new name"),e.i18n("Rename"),s=>{if(!St(s))return e.status(e.i18n("Enter new name")),!1;e.dataProvider.fileRename(i,t,s,o).then(t=>{if(e.options.fileRename&&e.options.fileRename.process&&(t=e.options.fileRename.process.call(e,t)),!e.options.isSuccess(t))throw Error(e.options.getMessage(t));e.state.activeElements=[],e.status(e.options.getMessage(t),!0),e.loadItems()}).catch(e.status)},e.i18n("type name"),t)}).on("update.filebrowser",()=>{e.loadTree()})}initNativeEventsListeners(){let t=!1;const e=this;e.events.on(e.tree,"click",(function(t){const i=this.parentNode,o=i.getAttribute("data-path")||"";return Jo(e.i18n("Are you sure?"),e.i18n("Delete"),t=>{t&&e.dataProvider.folderRemove(o,i.getAttribute("data-name")||"",i.getAttribute("data-source")||"").then(t=>{if(e.options.folderRemove&&e.options.folderRemove.process&&(t=e.options.folderRemove.process.call(e,t)),!e.options.isSuccess(t))throw Error(e.options.getMessage(t));e.state.activeElements=[],e.status(e.options.getMessage(t),!0),e.loadTree()}).catch(e.status)}),t.stopImmediatePropagation(),!1}),"a>.jodit_icon_folder_remove").on(e.tree,"click",(function(t){const i=this.parentNode,o=i.getAttribute("data-name")||"",s=i.getAttribute("data-source-path")||"";return Go(e.i18n("Enter new name"),e.i18n("Rename"),t=>{if(!St(t))return e.status(e.i18n("Enter new name")),!1;e.dataProvider.folderRename(s,i.getAttribute("data-name")||"",t,i.getAttribute("data-source")||"").then(t=>{if(e.options.folderRename&&e.options.folderRename.process&&(t=e.options.folderRename.process.call(e,t)),!e.options.isSuccess(t))throw Error(e.options.getMessage(t));e.state.activeElements=[],e.status(e.options.getMessage(t),!0),e.loadTree()}).catch(e.status)},e.i18n("type name"),o),t.stopImmediatePropagation(),!1}),"a>.jodit_icon_folder_rename").on(e.tree,"click",(function(){this.classList.contains("addfolder")?Go(e.i18n("Enter Directory name"),e.i18n("Create directory"),t=>{e.dataProvider.createFolder(t,this.getAttribute("data-path")||"",this.getAttribute("data-source")||"").then(t=>(e.options.isSuccess(t)?e.loadTree():e.status(e.options.getMessage(t)),t),e.status)},e.i18n("type name")):(e.dataProvider.currentPath=this.getAttribute("data-path")||"",e.dataProvider.currentSource=this.getAttribute("data-source")||"",e.loadTree())}),"a").on(e.tree,"dragstart",(function(){e.options.moveFolder&&(t=this)}),"a").on(e.tree,"drop",(function(){if((e.options.moveFile||e.options.moveFolder)&&t){let i=t.getAttribute("data-path")||"";if(!e.options.moveFolder&&t.classList.contains(Zo+"_tree_item"))return!1;if(t.classList.contains(Qo)&&(i+=t.getAttribute("data-name"),!e.options.moveFile))return!1;e.dataProvider.move(i,this.getAttribute("data-path")||"",this.getAttribute("data-source")||"",t.classList.contains(Qo)).then(t=>{e.options.isSuccess(t)?e.loadTree():e.status(e.options.getMessage(t))},e.status),t=!1}}),"a").on(e.files,"contextmenu",ns(e),"a").on(e.files,"click",t=>{ge(t)||(this.state.activeElements=[])}).on(e.files,"click",(function(t){const i=e.elementToItem(this);if(i)return e.state.activeElements=ge(t)?[...e.state.activeElements,i]:[i],t.stopPropagation(),!1}),"a").on(e.files,"dragstart",(function(){e.options.moveFile&&(t=this)}),"a").on(e.dialog.container,"drop",t=>t.preventDefault())}initUploader(t){var e,i;const o=this,s=gt(!0,{},qe.defaultOptions.uploader,o.options.uploader,{...null===(i=null===(e=t)||void 0===e?void 0:e.options)||void 0===i?void 0:i.uploader}),n=()=>{this.loadItems()};o.uploader=o.getInstance("Uploader",s),o.uploader.setPath(o.dataProvider.currentPath),o.uploader.setSource(o.dataProvider.currentSource),o.uploader.bind(o.browser,n,o.errorHandler),o.events.on("bindUploader.filebrowser",t=>{o.uploader.bind(t,n,o.errorHandler)})}destruct(){this.dialog.destruct(),delete this.dialog,this.events&&this.events.off(".filebrowser"),this.uploader&&this.uploader.destruct(),delete this.uploader,super.destruct()}}qe.prototype.imageeditor={min_width:20,min_height:20,closeAfterSave:!1,width:"85%",height:"85%",crop:!0,resize:!0,resizeUseRatio:!0,resizeMinWidth:20,resizeMinHeight:20,cropUseRatio:!0,cropDefaultWidth:"70%",cropDefaultHeight:"70%"};const hs="jodit_image_editor",ps=Ce.getIcon.bind(Ce);class us extends Ne{constructor(t){super(t),this.resizeUseRatio=!0,this.cropUseRatio=!0,this.clicked=!1,this.activeTab="resize",this.cropBox={x:0,y:0,w:0,h:0},this.resizeBox={w:0,h:0},this.calcValueByPercent=(t,e)=>{const i=""+e,o=parseFloat(""+t);let s;return s=/^[\-+]?[0-9]+(px)?$/.exec(i),s?parseInt(i,10):(s=/^([\-+]?[0-9.]+)%$/.exec(i),s?Math.round(o*(parseFloat(s[1])/100)):o||0)},this.calcCropBox=()=>{const t=.8*this.crop_box.parentNode.offsetWidth,e=.8*this.crop_box.parentNode.offsetHeight;let i=t,o=e;t>this.naturalWidth&&e>this.naturalHeight?(i=this.naturalWidth,o=this.naturalHeight):this.ratio>t/e?(i=t,o=this.naturalHeight*(t/this.naturalWidth)):(i=this.naturalWidth*(e/this.naturalHeight),o=e),fe(this.crop_box,{width:i,height:o})},this.showCrop=()=>{this.cropImage&&(this.calcCropBox(),this.new_w=this.calcValueByPercent(this.cropImage.offsetWidth||this.image.offsetWidth,this.options.cropDefaultWidth),this.new_h=this.cropUseRatio?this.new_w/this.ratio:this.calcValueByPercent(this.cropImage.offsetHeight||this.image.offsetHeight,this.options.cropDefaultHeight),fe(this.cropHandler,{backgroundImage:"url("+this.cropImage.getAttribute("src")+")",width:this.new_w,height:this.new_h,left:(this.cropImage.offsetWidth||this.image.offsetWidth)/2-this.new_w/2,top:(this.cropImage.offsetHeight||this.image.offsetHeight)/2-this.new_h/2}),this.jodit.events.fire(this.cropHandler,"updatesize"))},this.updateCropBox=()=>{if(!this.cropImage)return;const t=this.cropImage.offsetWidth/this.naturalWidth,e=this.cropImage.offsetHeight/this.naturalHeight;this.cropBox.x=fe(this.cropHandler,"left")/t,this.cropBox.y=fe(this.cropHandler,"top")/e,this.cropBox.w=this.cropHandler.offsetWidth/t,this.cropBox.h=this.cropHandler.offsetHeight/e,this.sizes.textContent=this.cropBox.w.toFixed(0)+"x"+this.cropBox.h.toFixed(0)},this.updateResizeBox=()=>{this.resizeBox.w=this.image.offsetWidth||this.naturalWidth,this.resizeBox.h=this.image.offsetHeight||this.naturalHeight},this.setHandlers=()=>{const t=this;t.jodit.events.on([t.editor.querySelector(".jodit_bottomright"),t.cropHandler],`mousedown.${hs}`,e=>{t.target=e.target,e.preventDefault(),e.stopImmediatePropagation(),t.clicked=!0,t.start_x=e.clientX,t.start_y=e.clientY,"crop"===t.activeTab?(t.top_x=fe(t.cropHandler,"left"),t.top_y=fe(t.cropHandler,"top"),t.width=t.cropHandler.offsetWidth,t.height=t.cropHandler.offsetHeight):(t.width=t.image.offsetWidth,t.height=t.image.offsetHeight)}).off(this.jodit.ownerWindow,`.${hs}`+t.jodit.id).on(this.jodit.ownerWindow,`mousemove.${hs}`+t.jodit.id,at(e=>{t.clicked&&(t.diff_x=e.clientX-t.start_x,t.diff_y=e.clientY-t.start_y,"resize"===t.activeTab&&t.resizeUseRatio||"crop"===t.activeTab&&t.cropUseRatio?t.diff_x?(t.new_w=t.width+t.diff_x,t.new_h=Math.round(t.new_w/t.ratio)):(t.new_h=t.height+t.diff_y,t.new_w=Math.round(t.new_h*t.ratio)):(t.new_w=t.width+t.diff_x,t.new_h=t.height+t.diff_y),"resize"===t.activeTab?(t.new_w>t.options.resizeMinWidth&&(fe(t.image,"width",t.new_w+"px"),t.widthInput.value=""+t.new_w),t.new_h>t.options.resizeMinHeight&&(fe(t.image,"height",t.new_h+"px"),t.heightInput.value=""+t.new_h),this.jodit.events.fire(t.resizeHandler,"updatesize")):(t.target!==t.cropHandler?(t.top_x+t.new_w>t.cropImage.offsetWidth&&(t.new_w=t.cropImage.offsetWidth-t.top_x),t.top_y+t.new_h>t.cropImage.offsetHeight&&(t.new_h=t.cropImage.offsetHeight-t.top_y),fe(t.cropHandler,{width:t.new_w,height:t.new_h})):(t.top_x+t.diff_x+t.cropHandler.offsetWidth>t.cropImage.offsetWidth&&(t.diff_x=t.cropImage.offsetWidth-t.top_x-t.cropHandler.offsetWidth),fe(t.cropHandler,"left",t.top_x+t.diff_x),t.top_y+t.diff_y+t.cropHandler.offsetHeight>t.cropImage.offsetHeight&&(t.diff_y=t.cropImage.offsetHeight-t.top_y-t.cropHandler.offsetHeight),fe(t.cropHandler,"top",t.top_y+t.diff_y)),this.jodit.events.fire(t.cropHandler,"updatesize")),e.stopImmediatePropagation())},5)).on(this.jodit.ownerWindow,`resize.${hs}`+t.jodit.id,()=>{this.jodit.events.fire(t.resizeHandler,"updatesize"),t.showCrop(),this.jodit.events.fire(t.cropHandler,"updatesize")}).on(this.jodit.ownerWindow,`mouseup.${hs} ${t.jodit.id} keydown.${hs}`+t.jodit.id,e=>{t.clicked&&(t.clicked=!1,e.stopImmediatePropagation())}),Mt(".jodit_button_group",t.editor).forEach(e=>{const i=e.querySelector("input");t.jodit.events.on(e,"click change",()=>{i.checked=!i.checked,t.jodit.events.fire(i,"change")},"button")}),t.jodit.events.on(this.editor,"click."+hs,(function(){Mt(`.${hs}_slider,.${hs}_area`,t.editor).forEach(t=>t.classList.remove("active"));const e=this.parentNode;e.classList.add("active"),t.activeTab=e.getAttribute("data-area")||"resize";const i=t.editor.querySelector(`.${hs}_area.${hs}_area_`+t.activeTab);i&&i.classList.add("active"),"crop"===t.activeTab&&t.showCrop()}),`.${hs}_slider-title`).on(t.widthInput,`change.${hs} mousedown.${hs} keydown.${hs}`,rt(()=>{const e=parseInt(t.widthInput.value,10);let i;e>t.options.min_width&&(fe(t.image,"width",e+"px"),t.resizeUseRatio&&(i=Math.round(e/t.ratio),i>t.options.min_height&&(fe(t.image,"height",i+"px"),t.heightInput.value=""+i))),this.jodit.events.fire(t.resizeHandler,"updatesize")},200)).on(t.heightInput,`change.${hs} mousedown.${hs} keydown.${hs}`,rt(()=>{if(this.isDestructed)return;const e=parseInt(t.heightInput.value,10);let i;e>t.options.min_height&&(fe(t.image,"height",e+"px"),t.resizeUseRatio&&(i=Math.round(e*t.ratio),i>t.options.min_width&&(fe(t.image,"width",i+"px"),t.widthInput.value=""+i))),this.jodit.events.fire(t.resizeHandler,"updatesize")},200));const e=t.editor.querySelector(`.${hs}_keep_spect_ratio`);e&&e.addEventListener("change",()=>{t.resizeUseRatio=e.checked});const i=t.editor.querySelector(`.${hs}_keep_spect_ratio_crop`);i&&i.addEventListener("change",()=>{t.cropUseRatio=i.checked}),t.jodit.events.on(t.resizeHandler,"updatesize",()=>{fe(t.resizeHandler,{top:0,left:0,width:(t.image.offsetWidth||t.naturalWidth)+"px",height:(t.image.offsetHeight||t.naturalHeight)+"px"}),this.updateResizeBox()}).on(t.cropHandler,"updatesize",()=>{if(!t.cropImage)return;let e=fe(t.cropHandler,"left"),i=fe(t.cropHandler,"top"),o=t.cropHandler.offsetWidth,s=t.cropHandler.offsetHeight;0>e&&(e=0),0>i&&(i=0),e+o>t.cropImage.offsetWidth&&(o=t.cropImage.offsetWidth-e,t.cropUseRatio&&(s=o/t.ratio)),i+s>t.cropImage.offsetHeight&&(s=t.cropImage.offsetHeight-i,t.cropUseRatio&&(o=s*t.ratio)),fe(t.cropHandler,{width:o,height:s,left:e,top:i,backgroundPosition:-e-1+"px "+(-i-1)+"px",backgroundSize:t.cropImage.offsetWidth+"px "+t.cropImage.offsetHeight+"px"}),t.updateCropBox()}),t.buttons.forEach(e=>{e.addEventListener("mousedown",t=>{t.stopImmediatePropagation()}),e.addEventListener("click",()=>{const i={action:t.activeTab,box:"resize"===t.activeTab?t.resizeBox:t.cropBox};switch(e.getAttribute("data-action")){case"saveas":Go(t.jodit.i18n("Enter new name"),t.jodit.i18n("Save in new file"),e=>{if(!Bt(e))return Yo(t.jodit.i18n("The name should not be empty")),!1;t.onSave(e,i,t.hide,t=>{Yo(t.message)})});break;case"save":t.onSave(void 0,i,t.hide,t=>{Yo(t.message)});break;case"reset":"resize"===t.activeTab?(fe(t.image,{width:null,height:null}),t.widthInput.value=""+t.naturalWidth,t.heightInput.value=""+t.naturalHeight,t.jodit.events.fire(t.resizeHandler,"updatesize")):t.showCrop()}})})},this.hide=()=>{this.dialog.close()},this.open=(t,e)=>new Promise(i=>{const o=(new Date).getTime();this.image=this.jodit.create.element("img"),Mt("img,.jodit_icon-loader",this.resize_box).forEach(xe.safeRemove),Mt("img,.jodit_icon-loader",this.crop_box).forEach(xe.safeRemove),fe(this.cropHandler,"background","transparent"),this.onSave=e,this.resize_box.appendChild(this.jodit.create.element("i",{class:"jodit_icon-loader"})),this.crop_box.appendChild(this.jodit.create.element("i",{class:"jodit_icon-loader"})),this.image.setAttribute("src",t+=/\?/.test(t)?"&_tst="+o:"?_tst="+o),this.dialog.open();const s=()=>{this.isDestructed||(this.image.removeEventListener("load",s),this.naturalWidth=this.image.naturalWidth,this.naturalHeight=this.image.naturalHeight,this.widthInput.value=""+this.naturalWidth,this.heightInput.value=""+this.naturalHeight,this.ratio=this.naturalWidth/this.naturalHeight,this.resize_box.appendChild(this.image),this.cropImage=this.image.cloneNode(),this.crop_box.appendChild(this.cropImage),Mt(".jodit_icon-loader",this.editor).forEach(xe.safeRemove),"crop"===this.activeTab&&this.showCrop(),this.jodit.events.fire(this.resizeHandler,"updatesize"),this.jodit.events.fire(this.cropHandler,"updatesize"),this.dialog.setPosition(),this.jodit.events.fire("afterImageEditor"),i(this.dialog))};this.image.addEventListener("load",s),this.image.complete&&s()}),this.options=t&&t.options?t.options.imageeditor:qe.defaultOptions.imageeditor;const e=this.options,i=t.i18n;this.resizeUseRatio=e.resizeUseRatio,this.cropUseRatio=e.cropUseRatio;const o=this.resizeUseRatio,s=this.cropUseRatio;this.buttons=[this.jodit.create.fromHTML('<button data-action="reset" type="button" class="jodit_button">'+ps("update")+"&nbsp;"+i("Reset")+"</button>"),this.jodit.create.fromHTML('<button data-action="save" type="button" class="jodit_button jodit_button_success">'+ps("save")+"&nbsp;"+i("Save")+"</button>"),this.jodit.create.fromHTML('<button data-action="saveas" type="button" class="jodit_button jodit_button_success">'+ps("save")+"&nbsp;"+i("Save as ...")+"</button>")],this.activeTab=e.resize?"resize":"crop";const n=(t,e="active")=>t?e:"",r=(t,e,o=!0)=>`<div class="jodit_form_group">\n\t\t\t<label>${i(t)}</label>\n\t\t\t<div class="jodit_button_group jodit_button_radio_group">\n\t\t\t\t<input ${n(o,"checked")} type="checkbox" class="${hs}_${e} jodit_input"/>\n\n\t\t\t\t<button type="button" data-yes="1" class="jodit_button jodit_status_success">${i("Yes")}</button>\n\n\t\t\t\t<button type="button" class="jodit_button jodit_status_danger">${i("No")}</button>\n\t\t\t</div>\n\t\t</div>`;this.editor=this.jodit.create.fromHTML(`<form class="${hs} jodit_properties">\n\t\t\t\t\t\t\t<div class="jodit_grid">\n\t\t\t\t\t\t\t\t<div class="jodit_col-lg-3-4">\n\t\t\t\t\t\t\t\t${e.resize?`<div class="${hs}_area ${hs}_area_resize active">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="${hs}_box"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="${hs}_resizer">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="jodit_bottomright"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>`:""}\n\t\t\t\t\t\t\t\t${e.crop?`<div class="${hs}_area ${hs}_area_crop ${n(!e.resize)}">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="${hs}_box">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="${hs}_croper">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="jodit_bottomright"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="jodit_sizes"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>`:""}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="jodit_col-lg-1-4">\n\t\t\t\t\t\t\t\t${e.resize?`<div data-area="resize" class="${hs}_slider active">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="${hs}_slider-title">\n\t\t\t\t\t\t\t\t\t\t\t\t\t${ps("resize")}\n\t\t\t\t\t\t\t\t\t\t\t\t\t${i("Resize")}\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="${hs}_slider-content">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="jodit_form_group">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="${hs}_width">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t${i("Width")}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="number" class="${hs}_width jodit_input"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="jodit_form_group">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="${hs}_height">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t${i("Height")}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="number" class="${hs}_height jodit_input"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t${r("Keep Aspect Ratio","keep_spect_ratio",o)}\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>`:""}\n\t\t\t\t\t\t\t\t${e.crop?`<div data-area="crop" class="${hs}_slider ${n(!e.resize)}'">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="${hs}_slider-title">\n\t\t\t\t\t\t\t\t\t\t\t\t\t${ps("crop")}\n\t\t\t\t\t\t\t\t\t\t\t\t\t${i("Crop")}\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="${hs}_slider-content">\n\t\t\t\t\t\t\t\t\t\t\t\t\t${r("Keep Aspect Ratio","keep_spect_ratio_crop",s)}\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>`:""}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>`),this.widthInput=this.editor.querySelector(`.${hs}_width`),this.heightInput=this.editor.querySelector(`.${hs}_height`),this.resize_box=this.editor.querySelector(`.${hs}_area.${hs}_area_resize .${hs}_box`),this.crop_box=this.editor.querySelector(`.${hs}_area.${hs}_area_crop .${hs}_box`),this.sizes=this.editor.querySelector(`.${hs}_area.${hs}_area_crop .jodit_sizes`),this.resizeHandler=this.editor.querySelector(`.${hs}_resizer`),this.cropHandler=this.editor.querySelector(`.${hs}_croper`),this.dialog=new Xo(t),this.dialog.setContent(this.editor),this.dialog.setSize(this.options.width,this.options.height),this.dialog.setTitle(this.buttons),this.setHandlers()}destruct(){this.isDestructed||(this.dialog&&(this.dialog.destruct(),delete this.dialog),xe.safeRemove(this.editor),delete this.widthInput,delete this.heightInput,delete this.resize_box,delete this.crop_box,delete this.sizes,delete this.resizeHandler,delete this.cropHandler,delete this.editor,this.jodit.events&&this.jodit.events.off(`.${hs}`),super.destruct())}}qe.prototype.enableDragAndDropFileToEditor=!0,qe.prototype.uploader={url:"",insertImageAsBase64URI:!1,imagesExtensions:["jpg","png","jpeg","gif"],headers:null,data:null,filesVariableName:t=>`files[${t}]`,withCredentials:!1,pathVariableName:"path",format:"json",method:"POST",prepareData:t=>t,isSuccess:t=>t.success,getMessage:t=>void 0!==t.data.messages&&Array.isArray(t.data.messages)?t.data.messages.join(" "):"",process:t=>t.data,error(t){this.jodit.events.fire("errorMessage",t.message,"error",4e3)},defaultHandlerSuccess(t){t.files&&t.files.length&&t.files.forEach((e,i)=>{const[o,s]=t.isImages&&t.isImages[i]?["img","src"]:["a","href"],n=this.jodit.create.inside.element(o);n.setAttribute(s,t.baseurl+e),"a"===o&&(n.textContent=t.baseurl+e),Ct(this.jodit)&&("img"===o?this.jodit.selection.insertImage(n,null,this.jodit.options.imageDefaultWidth):this.jodit.selection.insertNode(n))})},defaultHandlerError(t){this.jodit.events.fire("errorMessage",t.message)},contentType(t){return(void 0===this.jodit.ownerWindow.FormData||"string"==typeof t)&&"application/x-www-form-urlencoded; charset=UTF-8"}};class fs extends Ne{constructor(t,e){super(t),this.path="",this.source="default",this.ajaxInstances=[],this.options=gt(!0,{},qe.defaultOptions.uploader,Ct(t)?t.options.uploader:null,e)}static dataURItoBlob(t){const e=atob(t.split(",")[1]),i=t.split(",")[0].split(":")[1].split(";")[0],o=new ArrayBuffer(e.length),s=new Uint8Array(o);for(let t=0;e.length>t;t+=1)s[t]=e.charCodeAt(t);return new Blob([s],{type:i})}buildData(t){if(this.options.buildData&&"function"==typeof this.options.buildData)return this.options.buildData.call(this,t);const e=this.jodit.ownerWindow.FormData;if(void 0!==e){if(t instanceof e)return t;if("string"==typeof t)return t;const i=new e;return Object.keys(t).forEach(e=>{i.append(e,t[e])}),i}return t}send(t,e){const i=this.buildData(t),o=t=>{const i=new Ui(this.jodit||this,{xhr:()=>{const t=new XMLHttpRequest;return void 0!==this.jodit.ownerWindow.FormData&&t.upload?t.upload.addEventListener("progress",t=>{if(t.lengthComputable){let e=t.loaded/t.total;e*=100,this.jodit.progress_bar.style.display="block",this.jodit.progress_bar.style.width=e+"%",100===e&&(this.jodit.progress_bar.style.display="none")}},!1):this.jodit.progress_bar.style.display="none",t},method:this.options.method||"POST",data:t,url:this.options.url,headers:this.options.headers,queryBuild:this.options.queryBuild,contentType:this.options.contentType.call(this,t),dataType:this.options.format||"json",withCredentials:this.options.withCredentials||!1});this.ajaxInstances.push(i);const o=()=>{const t=this.ajaxInstances.indexOf(i);-1!==t&&this.ajaxInstances.splice(t,1)};return i.send().then(t=>{o(),e.call(this,t)}).catch(t=>{o(),this.options.error.call(this,t)})};return i instanceof Promise?i.then(o).catch(t=>{this.options.error.call(this,t)}):o(i)}sendFiles(t,e,i,o){if(!t)return Promise.reject(Error("Need files"));const s=this;let n=Array.from(t);if(!n.length)return Promise.reject(Error("Need files"));const r=[];if(this.options.insertImageAsBase64URI){let t,i;for(i=0;n.length>i;i+=1)if(t=n[i],t&&t.type){const o=t.type.match(/\/([a-z0-9]+)/i),a=o[1]?o[1].toLowerCase():"";if(this.options.imagesExtensions.includes(a)){const o=new FileReader;r.push(new Promise((i,n)=>{o.onerror=n,o.onloadend=()=>{const t={baseurl:"",files:[o.result],isImages:[!0]};"function"==typeof(e||s.options.defaultHandlerSuccess)&&(e||s.options.defaultHandlerSuccess).call(s,t),i(t)},o.readAsDataURL(t)})),n[i]=null}}}if(n=n.filter(t=>t),n.length){const t=new FormData;let a;t.append(this.options.pathVariableName,s.path),t.append("source",s.source);for(let e=0;n.length>e;e+=1)if(a=n[e],a){const i=a.type.match(/\/([a-z0-9]+)/i),o=i&&i[1]?i[1].toLowerCase():"";let s=n[e].name||(""+Math.random()).replace(".","");if(o){let t=o;["jpeg","jpg"].includes(t)&&(t="jpeg|jpg"),RegExp(".("+t+")$","i").test(s)||(s+="."+o)}t.append(this.options.filesVariableName(e),n[e],s)}o&&o(t),s.options.data&&mt(s.options.data)&&Object.keys(s.options.data).forEach(e=>{t.append(e,s.options.data[e])}),s.options.prepareData.call(this,t),r.push(s.send(t,t=>{this.options.isSuccess.call(s,t)?"function"==typeof(e||s.options.defaultHandlerSuccess)&&(e||s.options.defaultHandlerSuccess).call(s,s.options.process.call(s,t)):(i||s.options.defaultHandlerError).call(s,Error(s.options.getMessage.call(s,t)))}).then(()=>{this.jodit.events&&this.jodit.events.fire("filesWereUploaded")}))}return Promise.all(r)}setPath(t){this.path=t}setSource(t){this.source=t}bind(t,e,i){const o=this,s=t=>{let s,n,r;const a=t=>{n&&(t.append("extension",r),t.append("mimetype",n.type))};if(t.clipboardData&&t.clipboardData.files&&t.clipboardData.files.length)return this.sendFiles(t.clipboardData.files,e,i),!1;if(he("ff")||W){if(t.clipboardData&&!t.clipboardData.types.length&&t.clipboardData.types[0]!==V){const t=this.jodit.create.div("",{tabindex:-1,style:"left: -9999px; top: 0; width: 0; height: 100%;line-height: 140%; overflow: hidden; position: fixed; z-index: 2147483647; word-break: break-all;",contenteditable:!0});this.jodit.ownerDocument.body.appendChild(t);const s=this.jodit&&Ct(this.jodit)?this.jodit.selection.save():null,n=()=>s&&this.jodit&&Ct(this.jodit)&&this.jodit.selection.restore(s);t.focus(),setTimeout(()=>{const s=t.firstChild;if(xe.safeRemove(t),s&&s.hasAttribute("src")){const t=s.getAttribute("src")||"";n(),o.sendFiles([fs.dataURItoBlob(t)],e,i)}},200)}}else if(t.clipboardData&&t.clipboardData.items&&t.clipboardData.items.length){const o=t.clipboardData.items;for(s=0;o.length>s;s+=1)if("file"===o[s].kind&&"image/png"===o[s].type){if(n=o[s].getAsFile(),n){const t=n.type.match(/\/([a-z0-9]+)/i);r=t[1]?t[1].toLowerCase():"",this.sendFiles([n],e,i,a)}t.preventDefault();break}}};this.jodit&&this.jodit.editor!==t?o.jodit.events.on(t,"paste",s):o.jodit.events.on("beforePaste",s);const n=t=>!(!t.dataTransfer||!t.dataTransfer.files||0===t.dataTransfer.files.length);o.jodit.events.on(t,"dragend dragover dragenter dragleave drop",t=>{t.preventDefault()}).on(t,"dragover",e=>{n(e)&&(t.classList.contains("jodit_draghover")||t.classList.add("jodit_draghover"),e.preventDefault())}).on(t,"dragend",e=>{n(e)&&(t.classList.contains("jodit_draghover")&&t.classList.remove("jodit_draghover"),e.preventDefault())}).on(t,"drop",o=>{t.classList.remove("jodit_draghover"),n(o)&&o.dataTransfer&&o.dataTransfer.files&&(o.preventDefault(),o.stopImmediatePropagation(),this.sendFiles(o.dataTransfer.files,e,i))});const r=t.querySelector("input[type=file]");r&&o.jodit.events.on(r,"change",(function(){o.sendFiles(this.files,e,i).then(()=>{r.value="",/safari/i.test(navigator.userAgent)||(r.type="",r.type="file")})}))}uploadRemoteImage(t,e,i){const o=this;o.send({action:"fileUploadRemote",url:t},t=>{if(o.options.isSuccess.call(o,t))"function"==typeof e?e.call(o,this.options.process.call(this,t)):this.options.defaultHandlerSuccess.call(o,this.options.process.call(this,t));else if("function"==typeof(i||o.options.defaultHandlerError))return void(i||this.options.defaultHandlerError).call(o,Error(o.options.getMessage.call(this,t)))})}destruct(){this.ajaxInstances.forEach(t=>{try{t.abort()}catch(t){}}),delete this.options,super.destruct()}}var ms=i(1),gs=i(2),vs=i(3),bs=i(4),ys=i(5),ws=i(6),_s=i(7),ks=i(8),js=i(9),xs=i(10),Cs=i(11),zs=i(12),Es=i(13),Ts=i(14),Ss=i(15),qs=i(16),Ls=i(17),Ns=i(18),Ms=i(19),As=i(20),Is=i(21),Ds=i(22),Rs=i(23),Bs=i(24),Ps=i(25),Hs=i(26),Os=i(27),Ws=i(28),Fs=i(29),Vs=i(30),$s=i(31),Us=i(32),Ks=i(33),Xs=i(34),Ys=i(35),Gs=i(36),Js=i(37),Zs=i(38),Qs=i(39),tn=i(40),en=i(41),on=i(42),sn=i(43),nn=i(44),rn=i(45),an=i(46),ln=i(47),dn=i(48),cn=i(49),hn=i(50),pn=i(51),un=i(52),fn=i(53),mn=i(54),gn=i(55),vn=i(56),bn=i(57),yn=i(58),wn=i(59),_n=i(60),kn=i(61),jn=i(62),xn=i(63),Cn=i(64),zn=i(65),En=i(66),Tn=i(67),Sn=i(68),qn=i(69),Ln=i(70),Nn=i(71),Mn=i(72),An=i(73),In=i(74),Dn=i(75),Rn=i(76),Bn=i(77),Pn=i(78);i.d(e,"Jodit",()=>On),Object.keys(o).forEach(t=>{li[t]=o[t]});const Hn=t=>"__esModule"!==t;Object.keys(a).filter(Hn).forEach(t=>{Ce.setIcon(t.replace("_","-"),a[t])}),Object.keys(r).filter(Hn).forEach(t=>{li.modules[t]=r[t]}),["Confirm","Alert","Promt"].forEach(t=>{li[t]=r[t]}),Object.keys(n).filter(Hn).forEach(t=>{li.plugins.add(t,n[t])}),Object.keys($i).filter(Hn).forEach(t=>{li.lang[t]=$i[t]}),li.defaultOptions=qe.defaultOptions,Le.prototype=li.defaultOptions;const On=li;e.default=li}])}));

///////////////////////////////////////////////////////////////////////////
// src/js/local/atlantis.js ///////////////////////////////////////////////

class Atlantis {

	static Request(Opt){

		var Config = {
			Method: 'Get',
			URL: '/no/url/lol',
			Data: null,
			IsFormData: false,
			OnSuccess: null,
			OnError: null
		};

		NUI.Util.MergeProperties(Opt,Config);

		////////

		let Request = {
			type: Config.Method.toUpperCase(),
			url: Config.URL,
			data: Config.Data,
			dataType: 'json'
		};

		if(Config.IsFormData) {
			Request.processData = false;
			Request.contentType = false;
			Request.mimeType = 'multipart/form-data';
		}

		jQuery
		.ajax(Request)
		.done(function(Result){

			// handle api result errors.

			if(Result.Error != 0) {

				if(typeof Config.OnError == 'function')
				Config.OnError(Result);

				else
				alert(Result.Message);

				return;
			}

			// handle api success.

			if(typeof Config.OnSuccess == 'function')
			Config.OnSuccess(Result);

			return;
		});

		return;
	};

	static CopyToClipboard(What) {
	/*//
	copy the specified text to the clipboard. the source element will have its content
	modified for a few seconds to visually demonstrate something has happened. generally
	we are expecting things calling this to be buttons.
	//*/

		let that = this;
		let Textbox;
		let OgText;

		// create a textbox that contains the content we want and add it to the dom.
		// we couldn't display none it or else the selection would not work. we can
		// however set it to 0x0.

		jQuery(that).append(
			Textbox = jQuery('<textarea />')
			.css({'width':'0px','height':'0px','border':'0px;'})
			.val(What)
		);

		Textbox.select();
		document.execCommand('copy');
		Textbox.remove();

		// make the button we clicked react to the click visually.

		OgText = jQuery(that).text();
		jQuery(that).text('Copied!');
		setTimeout(function(){ jQuery(that).text(OgText); },1000);

		return false;
	};

	static CopyElementToClipboard() {
	/*//
	copy an element's text to the clipboard. the element that triggered this should have
	an attribute called data-copy-element that contains a selector to identify where to
	pull text data from.
	//*/

		let ElementID = jQuery(this).attr('data-copy-element');
		let Value = jQuery.trim(
			jQuery(ElementID).text()
		);

		(Atlantis.CopyToClipboard)
		.call(this,Value);

		return false;
	};

	static CopyValueToClipboard() {
	/*//
	copy an element's value to the clipboard. the element that triggered this should have
	an attribute called data-copy-value that contains the content that you want copied.
	//*/

		e.preventDefault();

		let Value = jQuery.trim(
			jQuery(this).attr('data-copy-value')
		);

		(Atlantis.CopyToClipboard)
		.call(this,Value);

		return false;
	};

};

jQuery(document)
.ready(function(){

	jQuery('.CopyElementToClipboard')
	.on('click',Atlantis.CopyElementToClipboard);

	jQuery('.CopyValueToClipboard')
	.on('click',Atlantis.CopyValueToClipboard);

	return;
});

