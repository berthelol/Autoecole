jQuery.noConflict();;

var JCaption=function(c){var e,b,a=function(f){e=jQuery.noConflict();b=f;e(b).each(function(g,h){d(h)})},d=function(i){var h=e(i),f=h.attr("title"),j=h.attr("width")||i.width,l=h.attr("align")||h.css("float")||i.style.styleFloat||"none",g=e("<p/>",{text:f,"class":b.replace(".","_")}),k=e("<div/>",{"class":b.replace(".","_")+" "+l,css:{"float":l,width:j}});h.before(k);k.append(h);if(f!==""){k.append(g)}};a(c)};;

(function(){this.MooTools={version:"1.4.5",build:"74e34796f5f76640cdb98853004650aea1499d69"};var b=this.typeOf=function(b){if(null==b)return"null";if(null!=b.$family)return b.$family();if(b.nodeName){if(1==b.nodeType)return"element";if(3==b.nodeType)return/\S/.test(b.nodeValue)?"textnode":"whitespace"}else if("number"==typeof b.length){if(b.callee)return"arguments";if("item"in b)return"collection"}return typeof b};this.instanceOf=function(b,a){if(null==b)return!1;for(var c=b.$constructor||b.constructor;c;){if(c===
a)return!0;c=c.parent}return!b.hasOwnProperty?!1:b instanceof a};var a=this.Function,c=!0,d;for(d in{toString:1})c=null;c&&(c="hasOwnProperty,valueOf,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,constructor".split(","));a.prototype.overloadSetter=function(b){var a=this;return function(h,k){if(null==h)return this;if(b||"string"!=typeof h){for(var e in h)a.call(this,e,h[e]);if(c)for(var d=c.length;d--;)e=c[d],h.hasOwnProperty(e)&&a.call(this,e,h[e])}else a.call(this,h,k);return this}};
a.prototype.overloadGetter=function(b){var a=this;return function(c){var h,k;"string"!=typeof c?h=c:1<arguments.length?h=arguments:b&&(h=[c]);if(h){k={};for(var e=0;e<h.length;e++)k[h[e]]=a.call(this,h[e])}else k=a.call(this,c);return k}};a.prototype.extend=function(b,a){this[b]=a}.overloadSetter();a.prototype.implement=function(b,a){this.prototype[b]=a}.overloadSetter();var e=Array.prototype.slice;a.from=function(a){return"function"==b(a)?a:function(){return a}};Array.from=function(a){return null==
a?[]:f.isEnumerable(a)&&"string"!=typeof a?"array"==b(a)?a:e.call(a):[a]};Number.from=function(b){b=parseFloat(b);return isFinite(b)?b:null};String.from=function(b){return b+""};a.implement({hide:function(){this.$hidden=!0;return this},protect:function(){this.$protected=!0;return this}});var f=this.Type=function(a,c){if(a){var h=a.toLowerCase();f["is"+a]=function(a){return b(a)==h};null!=c&&(c.prototype.$family=function(){return h}.hide())}if(null==c)return null;c.extend(this);c.$constructor=f;return c.prototype.$constructor=
c},g=Object.prototype.toString;f.isEnumerable=function(b){return null!=b&&"number"==typeof b.length&&"[object Function]"!=g.call(b)};var i={},j=function(a){a=b(a.prototype);return i[a]||(i[a]=[])},m=function(a,c){if(!c||!c.$hidden){for(var k=j(this),d=0;d<k.length;d++){var o=k[d];"type"==b(o)?m.call(o,a,c):o.call(this,a,c)}k=this.prototype[a];if(null==k||!k.$protected)this.prototype[a]=c;null==this[a]&&"function"==b(c)&&h.call(this,a,function(b){return c.apply(b,e.call(arguments,1))})}},h=function(b,
a){if(!a||!a.$hidden){var c=this[b];if(null==c||!c.$protected)this[b]=a}};f.implement({implement:m.overloadSetter(),extend:h.overloadSetter(),alias:function(b,a){m.call(this,b,this.prototype[a])}.overloadSetter(),mirror:function(b){j(this).push(b);return this}});new f("Type",f);var k=function(b,a,c){var h=a!=Object,e=a.prototype;h&&(a=new f(b,a));for(var b=0,d=c.length;b<d;b++){var o=c[b],q=a[o],g=e[o];q&&q.protect();h&&g&&a.implement(o,g.protect())}if(h){var j=e.propertyIsEnumerable(c[0]);a.forEachMethod=
function(b){if(!j)for(var a=0,h=c.length;a<h;a++)b.call(e,e[c[a]],c[a]);for(var k in e)b.call(e,e[k],k)}}return k};k("String",String,"charAt,charCodeAt,concat,indexOf,lastIndexOf,match,quote,replace,search,slice,split,substr,substring,trim,toLowerCase,toUpperCase".split(","))("Array",Array,"pop,push,reverse,shift,sort,splice,unshift,concat,join,slice,indexOf,lastIndexOf,filter,forEach,every,map,some,reduce,reduceRight".split(","))("Number",Number,["toExponential","toFixed","toLocaleString","toPrecision"])("Function",
a,["apply","call","bind"])("RegExp",RegExp,["exec","test"])("Object",Object,"create,defineProperty,defineProperties,keys,getPrototypeOf,getOwnPropertyDescriptor,getOwnPropertyNames,preventExtensions,isExtensible,seal,isSealed,freeze,isFrozen".split(","))("Date",Date,["now"]);Object.extend=h.overloadSetter();Date.extend("now",function(){return+new Date});new f("Boolean",Boolean);Number.prototype.$family=function(){return isFinite(this)?"number":"null"}.hide();Number.extend("random",function(b,a){return Math.floor(Math.random()*
(a-b+1)+b)});var o=Object.prototype.hasOwnProperty;Object.extend("forEach",function(b,a,c){for(var h in b)o.call(b,h)&&a.call(c,b[h],h,b)});Object.each=Object.forEach;Array.implement({forEach:function(b,a){for(var c=0,h=this.length;c<h;c++)c in this&&b.call(a,this[c],c,this)},each:function(b,a){Array.forEach(this,b,a);return this}});var q=function(a){switch(b(a)){case "array":return a.clone();case "object":return Object.clone(a);default:return a}};Array.implement("clone",function(){for(var b=this.length,
a=Array(b);b--;)a[b]=q(this[b]);return a});var u=function(a,c,h){switch(b(h)){case "object":"object"==b(a[c])?Object.merge(a[c],h):a[c]=Object.clone(h);break;case "array":a[c]=h.clone();break;default:a[c]=h}return a};Object.extend({merge:function(a,c,h){if("string"==b(c))return u(a,c,h);for(var k=1,e=arguments.length;k<e;k++){var d=arguments[k],o;for(o in d)u(a,o,d[o])}return a},clone:function(b){var a={},c;for(c in b)a[c]=q(b[c]);return a},append:function(b){for(var a=1,c=arguments.length;a<c;a++){var h=
arguments[a]||{},k;for(k in h)b[k]=h[k]}return b}});["Object","WhiteSpace","TextNode","Collection","Arguments"].each(function(b){new f(b)});var r=Date.now();String.extend("uniqueID",function(){return(r++).toString(36)})})();
Array.implement({every:function(b,a){for(var c=0,d=this.length>>>0;c<d;c++)if(c in this&&!b.call(a,this[c],c,this))return!1;return!0},filter:function(b,a){for(var c=[],d,e=0,f=this.length>>>0;e<f;e++)e in this&&(d=this[e],b.call(a,d,e,this)&&c.push(d));return c},indexOf:function(b,a){for(var c=this.length>>>0,d=0>a?Math.max(0,c+a):a||0;d<c;d++)if(this[d]===b)return d;return-1},map:function(b,a){for(var c=this.length>>>0,d=Array(c),e=0;e<c;e++)e in this&&(d[e]=b.call(a,this[e],e,this));return d},some:function(b,
a){for(var c=0,d=this.length>>>0;c<d;c++)if(c in this&&b.call(a,this[c],c,this))return!0;return!1},clean:function(){return this.filter(function(b){return null!=b})},invoke:function(b){var a=Array.slice(arguments,1);return this.map(function(c){return c[b].apply(c,a)})},associate:function(b){for(var a={},c=Math.min(this.length,b.length),d=0;d<c;d++)a[b[d]]=this[d];return a},link:function(b){for(var a={},c=0,d=this.length;c<d;c++)for(var e in b)if(b[e](this[c])){a[e]=this[c];delete b[e];break}return a},
contains:function(b,a){return-1!=this.indexOf(b,a)},append:function(b){this.push.apply(this,b);return this},getLast:function(){return this.length?this[this.length-1]:null},getRandom:function(){return this.length?this[Number.random(0,this.length-1)]:null},include:function(b){this.contains(b)||this.push(b);return this},combine:function(b){for(var a=0,c=b.length;a<c;a++)this.include(b[a]);return this},erase:function(b){for(var a=this.length;a--;)this[a]===b&&this.splice(a,1);return this},empty:function(){this.length=
0;return this},flatten:function(){for(var b=[],a=0,c=this.length;a<c;a++){var d=typeOf(this[a]);"null"!=d&&(b=b.concat("array"==d||"collection"==d||"arguments"==d||instanceOf(this[a],Array)?Array.flatten(this[a]):this[a]))}return b},pick:function(){for(var b=0,a=this.length;b<a;b++)if(null!=this[b])return this[b];return null},hexToRgb:function(b){if(3!=this.length)return null;var a=this.map(function(b){1==b.length&&(b+=b);return b.toInt(16)});return b?a:"rgb("+a+")"},rgbToHex:function(b){if(3>this.length)return null;
if(4==this.length&&0==this[3]&&!b)return"transparent";for(var a=[],c=0;3>c;c++){var d=(this[c]-0).toString(16);a.push(1==d.length?"0"+d:d)}return b?a:"#"+a.join("")}});
String.implement({test:function(b,a){return("regexp"==typeOf(b)?b:RegExp(""+b,a)).test(this)},contains:function(b,a){return a?-1<(a+this+a).indexOf(a+b+a):-1<(""+this).indexOf(b)},trim:function(){return(""+this).replace(/^\s+|\s+$/g,"")},clean:function(){return(""+this).replace(/\s+/g," ").trim()},camelCase:function(){return(""+this).replace(/-\D/g,function(b){return b.charAt(1).toUpperCase()})},hyphenate:function(){return(""+this).replace(/[A-Z]/g,function(b){return"-"+b.charAt(0).toLowerCase()})},
capitalize:function(){return(""+this).replace(/\b[a-z]/g,function(b){return b.toUpperCase()})},escapeRegExp:function(){return(""+this).replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1")},toInt:function(b){return parseInt(this,b||10)},toFloat:function(){return parseFloat(this)},hexToRgb:function(b){var a=(""+this).match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);return a?a.slice(1).hexToRgb(b):null},rgbToHex:function(b){var a=(""+this).match(/\d{1,3}/g);return a?a.rgbToHex(b):null},substitute:function(b,a){return(""+
this).replace(a||/\\?\{([^{}]+)\}/g,function(a,d){return"\\"==a.charAt(0)?a.slice(1):null!=b[d]?b[d]:""})}});Number.implement({limit:function(b,a){return Math.min(a,Math.max(b,this))},round:function(b){b=Math.pow(10,b||0).toFixed(0>b?-b:0);return Math.round(this*b)/b},times:function(b,a){for(var c=0;c<this;c++)b.call(a,c,this)},toFloat:function(){return parseFloat(this)},toInt:function(b){return parseInt(this,b||10)}});Number.alias("each","times");
(function(b){var a={};b.each(function(b){Number[b]||(a[b]=function(){return Math[b].apply(null,[this].concat(Array.from(arguments)))})});Number.implement(a)})("abs,acos,asin,atan,atan2,ceil,cos,exp,floor,log,max,min,pow,sin,sqrt,tan".split(","));Function.extend({attempt:function(){for(var b=0,a=arguments.length;b<a;b++)try{return arguments[b]()}catch(c){}return null}});
Function.implement({attempt:function(b,a){try{return this.apply(a,Array.from(b))}catch(c){}return null},bind:function(b){var a=this,c=1<arguments.length?Array.slice(arguments,1):null,d=function(){},e=function(){var f=b,g=arguments.length;this instanceof e&&(d.prototype=a.prototype,f=new d);g=!c&&!g?a.call(f):a.apply(f,c&&g?c.concat(Array.slice(arguments)):c||arguments);return f==b?g:f};return e},pass:function(b,a){var c=this;null!=b&&(b=Array.from(b));return function(){return c.apply(a,b||arguments)}},
delay:function(b,a,c){return setTimeout(this.pass(null==c?[]:c,a),b)},periodical:function(b,a,c){return setInterval(this.pass(null==c?[]:c,a),b)}});
(function(){var b=Object.prototype.hasOwnProperty;Object.extend({subset:function(b,c){for(var d={},e=0,f=c.length;e<f;e++){var g=c[e];g in b&&(d[g]=b[g])}return d},map:function(a,c,d){var e={},f;for(f in a)b.call(a,f)&&(e[f]=c.call(d,a[f],f,a));return e},filter:function(a,c,d){var e={},f;for(f in a){var g=a[f];b.call(a,f)&&c.call(d,g,f,a)&&(e[f]=g)}return e},every:function(a,c,d){for(var e in a)if(b.call(a,e)&&!c.call(d,a[e],e))return!1;return!0},some:function(a,c,d){for(var e in a)if(b.call(a,e)&&
c.call(d,a[e],e))return!0;return!1},keys:function(a){var c=[],d;for(d in a)b.call(a,d)&&c.push(d);return c},values:function(a){var c=[],d;for(d in a)b.call(a,d)&&c.push(a[d]);return c},getLength:function(b){return Object.keys(b).length},keyOf:function(a,c){for(var d in a)if(b.call(a,d)&&a[d]===c)return d;return null},contains:function(b,c){return null!=Object.keyOf(b,c)},toQueryString:function(b,c){var d=[];Object.each(b,function(b,a){c&&(a=c+"["+a+"]");var g;switch(typeOf(b)){case "object":g=Object.toQueryString(b,
a);break;case "array":var i={};b.each(function(b,a){i[a]=b});g=Object.toQueryString(i,a);break;default:g=a+"="+encodeURIComponent(b)}null!=b&&d.push(g)});return d.join("&")}})})();
(function(){var b=this.document,a=b.window=this,c=navigator.userAgent.toLowerCase(),d=navigator.platform.toLowerCase(),e=c.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],f=this.Browser={extend:Function.prototype.extend,name:"version"==e[1]?e[3]:e[1],version:"ie"==e[1]&&b.documentMode||parseFloat("opera"==e[1]&&e[4]?e[4]:e[2]),Platform:{name:c.match(/ip(?:ad|od|hone)/)?"ios":(c.match(/(?:webos|android)/)||d.match(/mac|win|linux/)||
["other"])[0]},Features:{xpath:!!b.evaluate,air:!!a.runtime,query:!!b.querySelector,json:!!a.JSON},Plugins:{}};f[f.name]=!0;f[f.name+parseInt(f.version,10)]=!0;f.Platform[f.Platform.name]=!0;f.Request=function(){var b=function(){return new XMLHttpRequest},a=function(){return new ActiveXObject("MSXML2.XMLHTTP")},c=function(){return new ActiveXObject("Microsoft.XMLHTTP")};return Function.attempt(function(){b();return b},function(){a();return a},function(){c();return c})}();f.Features.xhr=!!f.Request;
c=(Function.attempt(function(){return navigator.plugins["Shockwave Flash"].description},function(){return(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")})||"0 r0").match(/\d+/g);f.Plugins.Flash={version:Number(c[0]||"0."+c[1])||0,build:Number(c[2])||0};f.exec=function(c){if(!c)return c;if(a.execScript)a.execScript(c);else{var h=b.createElement("script");h.setAttribute("type","text/javascript");h.text=c;b.head.appendChild(h);b.head.removeChild(h)}return c};String.implement("stripScripts",
function(b){var a="",c=this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(b,c){a+=c+"\n";return""});!0===b?f.exec(a):"function"==typeOf(b)&&b(a,c);return c});f.extend({Document:this.Document,Window:this.Window,Element:this.Element,Event:this.Event});this.Window=this.$constructor=new Type("Window",function(){});this.$family=Function.from("window").hide();Window.mirror(function(b,c){a[b]=c});this.Document=b.$constructor=new Type("Document",function(){});b.$family=Function.from("document").hide();
Document.mirror(function(a,c){b[a]=c});b.html=b.documentElement;b.head||(b.head=b.getElementsByTagName("head")[0]);if(b.execCommand)try{b.execCommand("BackgroundImageCache",!1,!0)}catch(g){}if(this.attachEvent&&!this.addEventListener){var i=function(){this.detachEvent("onunload",i);b.head=b.html=b.window=null};this.attachEvent("onunload",i)}var j=Array.from;try{j(b.html.childNodes)}catch(m){Array.from=function(b){if(typeof b!="string"&&Type.isEnumerable(b)&&typeOf(b)!="array"){for(var a=b.length,
c=Array(a);a--;)c[a]=b[a];return c}return j(b)};var h=Array.prototype,k=h.slice;"pop,push,reverse,shift,sort,splice,unshift,concat,join,slice".split(",").each(function(b){var a=h[b];Array[b]=function(b){return a.apply(Array.from(b),k.call(arguments,1))}})}})();
(function(){var b={},a=this.DOMEvent=new Type("DOMEvent",function(a,d){d||(d=window);a=a||d.event;if(a.$extended)return a;this.event=a;this.$extended=!0;this.shift=a.shiftKey;this.control=a.ctrlKey;this.alt=a.altKey;this.meta=a.metaKey;for(var e=this.type=a.type,f=a.target||a.srcElement;f&&3==f.nodeType;)f=f.parentNode;this.target=document.id(f);if(0==e.indexOf("key")){if(f=this.code=a.which||a.keyCode,this.key=b[f],"keydown"==e&&(111<f&&124>f?this.key="f"+(f-111):95<f&&106>f&&(this.key=f-96)),null==
this.key)this.key=String.fromCharCode(f).toLowerCase()}else if("click"==e||"dblclick"==e||"contextmenu"==e||"DOMMouseScroll"==e||0==e.indexOf("mouse")){f=d.document;f=!f.compatMode||"CSS1Compat"==f.compatMode?f.html:f.body;this.page={x:null!=a.pageX?a.pageX:a.clientX+f.scrollLeft,y:null!=a.pageY?a.pageY:a.clientY+f.scrollTop};this.client={x:null!=a.pageX?a.pageX-d.pageXOffset:a.clientX,y:null!=a.pageY?a.pageY-d.pageYOffset:a.clientY};if("DOMMouseScroll"==e||"mousewheel"==e)this.wheel=a.wheelDelta?
a.wheelDelta/120:-(a.detail||0)/3;this.rightClick=3==a.which||2==a.button;if("mouseover"==e||"mouseout"==e){for(e=a.relatedTarget||a[("mouseover"==e?"from":"to")+"Element"];e&&3==e.nodeType;)e=e.parentNode;this.relatedTarget=document.id(e)}}else if(0==e.indexOf("touch")||0==e.indexOf("gesture"))if(this.rotation=a.rotation,this.scale=a.scale,this.targetTouches=a.targetTouches,this.changedTouches=a.changedTouches,(e=this.touches=a.touches)&&e[0])e=e[0],this.page={x:e.pageX,y:e.pageY},this.client={x:e.clientX,
y:e.clientY};this.client||(this.client={});this.page||(this.page={})});a.implement({stop:function(){return this.preventDefault().stopPropagation()},stopPropagation:function(){this.event.stopPropagation?this.event.stopPropagation():this.event.cancelBubble=!0;return this},preventDefault:function(){this.event.preventDefault?this.event.preventDefault():this.event.returnValue=!1;return this}});a.defineKey=function(a,d){b[a]=d;return this};a.defineKeys=a.defineKey.overloadSetter(!0);a.defineKeys({38:"up",
40:"down",37:"left",39:"right",27:"esc",32:"space",8:"backspace",9:"tab",46:"delete",13:"enter"})})();
(function(){var b=this.Class=new Type("Class",function(e){instanceOf(e,Function)&&(e={initialize:e});var d=function(){c(this);if(d.$prototyping)return this;this.$caller=null;var a=this.initialize?this.initialize.apply(this,arguments):this;this.$caller=this.caller=null;return a}.extend(this).implement(e);d.$constructor=b;d.prototype.$constructor=d;d.prototype.parent=a;return d}),a=function(){if(!this.$caller)throw Error('The method "parent" cannot be called.');var a=this.$caller.$name,b=this.$caller.$owner.parent,
b=b?b.prototype[a]:null;if(!b)throw Error('The method "'+a+'" has no parent.');return b.apply(this,arguments)},c=function(a){for(var b in a){var e=a[b];switch(typeOf(e)){case "object":var d=function(){};d.prototype=e;a[b]=c(new d);break;case "array":a[b]=e.clone()}}return a},d=function(a,b,c){c.$origin&&(c=c.$origin);var e=function(){if(c.$protected&&this.$caller==null)throw Error('The method "'+b+'" cannot be called.');var a=this.caller,h=this.$caller;this.caller=h;this.$caller=e;var k=c.apply(this,
arguments);this.$caller=h;this.caller=a;return k}.extend({$owner:a,$origin:c,$name:b});return e},e=function(a,c,e){if(b.Mutators.hasOwnProperty(a)&&(c=b.Mutators[a].call(this,c),null==c))return this;if("function"==typeOf(c)){if(c.$hidden)return this;this.prototype[a]=e?c:d(this,a,c)}else Object.merge(this.prototype,a,c);return this};b.implement("implement",e.overloadSetter());b.Mutators={Extends:function(a){this.parent=a;a.$prototyping=!0;var b=new a;delete a.$prototyping;this.prototype=b},Implements:function(a){Array.from(a).each(function(a){var a=
new a,b;for(b in a)e.call(this,b,a[b],!0)},this)}}})();
(function(){this.Chain=new Class({$chain:[],chain:function(){this.$chain.append(Array.flatten(arguments));return this},callChain:function(){return this.$chain.length?this.$chain.shift().apply(this,arguments):!1},clearChain:function(){this.$chain.empty();return this}});var b=function(a){return a.replace(/^on([A-Z])/,function(a,b){return b.toLowerCase()})};this.Events=new Class({$events:{},addEvent:function(a,c,d){a=b(a);this.$events[a]=(this.$events[a]||[]).include(c);d&&(c.internal=!0);return this},
addEvents:function(a){for(var b in a)this.addEvent(b,a[b]);return this},fireEvent:function(a,c,d){a=b(a);a=this.$events[a];if(!a)return this;c=Array.from(c);a.each(function(a){d?a.delay(d,this,c):a.apply(this,c)},this);return this},removeEvent:function(a,c){var a=b(a),d=this.$events[a];if(d&&!c.internal){var e=d.indexOf(c);-1!=e&&delete d[e]}return this},removeEvents:function(a){var c;if("object"==typeOf(a)){for(c in a)this.removeEvent(c,a[c]);return this}a&&(a=b(a));for(c in this.$events)if(!(a&&
a!=c))for(var d=this.$events[c],e=d.length;e--;)e in d&&this.removeEvent(c,d[e]);return this}});this.Options=new Class({setOptions:function(){var a=this.options=Object.merge.apply(null,[{},this.options].append(arguments));if(this.addEvent)for(var b in a)"function"==typeOf(a[b])&&/^on[A-Z]/.test(b)&&(this.addEvent(b,a[b]),delete a[b]);return this}})})();
(function(){function b(b,h,o,l,f,q,j,g,x,F,t,B,A,D,v,z){if(h||-1===c)if(a.expressions[++c]=[],d=-1,h)return"";if(o||l||-1===d)o=o||" ",b=a.expressions[c],e&&b[d]&&(b[d].reverseCombinator=m(o)),b[++d]={combinator:o,tag:"*"};o=a.expressions[c][d];if(f)o.tag=f.replace(i,"");else if(q)o.id=q.replace(i,"");else if(j)j=j.replace(i,""),o.classList||(o.classList=[]),o.classes||(o.classes=[]),o.classList.push(j),o.classes.push({value:j,regexp:RegExp("(^|\\s)"+k(j)+"(\\s|$)")});else if(A)z=(z=z||v)?z.replace(i,
""):null,o.pseudos||(o.pseudos=[]),o.pseudos.push({key:A.replace(i,""),value:z,type:1==B.length?"class":"element"});else if(g){var g=g.replace(i,""),t=(t||"").replace(i,""),y,E;switch(x){case "^=":E=RegExp("^"+k(t));break;case "$=":E=RegExp(k(t)+"$");break;case "~=":E=RegExp("(^|\\s)"+k(t)+"(\\s|$)");break;case "|=":E=RegExp("^"+k(t)+"(-|$)");break;case "=":y=function(a){return t==a};break;case "*=":y=function(a){return a&&-1<a.indexOf(t)};break;case "!=":y=function(a){return t!=a};break;default:y=
function(a){return!!a}}""==t&&/^[*$^]=$/.test(x)&&(y=function(){return!1});y||(y=function(a){return a&&E.test(a)});o.attributes||(o.attributes=[]);o.attributes.push({key:g,operator:x,value:t,test:y})}return""}var a,c,d,e,f={},g={},i=/\\/g,j=function(k,d){if(null==k)return null;if(!0===k.Slick)return k;var k=(""+k).replace(/^\s+|\s+$/g,""),q=(e=!!d)?g:f;if(q[k])return q[k];a={Slick:!0,expressions:[],raw:k,reverse:function(){return j(this.raw,!0)}};for(c=-1;k!=(k=k.replace(o,b)););a.length=a.expressions.length;
return q[a.raw]=e?h(a):a},m=function(a){return"!"===a?" ":" "===a?"!":/^!/.test(a)?a.replace(/^!/,""):"!"+a},h=function(a){for(var b=a.expressions,c=0;c<b.length;c++){for(var h=b[c],k={parts:[],tag:"*",combinator:m(h[0].combinator)},e=0;e<h.length;e++){var d=h[e];d.reverseCombinator||(d.reverseCombinator=" ");d.combinator=d.reverseCombinator;delete d.reverseCombinator}h.reverse().push(k)}return a},k=function(a){return a.replace(/[-[\]{}()*+?.\\^$|,#\s]/g,function(a){return"\\"+a})},o=RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:([\"'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/,
"["+k(">+~`!@$%^&={}\\;</")+"]").replace(/<unicode>/g,"(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g,"(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])")),q=this.Slick||{};q.parse=function(a){return j(a)};q.escapeRegExp=k;this.Slick||(this.Slick=q)}).apply("undefined"!=typeof exports?exports:this);
(function(){var b={},a={},c=Object.prototype.toString;b.isNativeCode=function(a){return/\{\s*\[native code\]\s*\}/.test(""+a)};b.isXML=function(a){return!!a.xmlVersion||!!a.xml||"[object XMLDocument]"==c.call(a)||9==a.nodeType&&"HTML"!=a.documentElement.nodeName};b.setDocument=function(b){var c=b.nodeType;if(9!=c)if(c)b=b.ownerDocument;else if(b.navigator)b=b.document;else return;if(this.document!==b){this.document=b;var c=b.documentElement,e=this.getUIDXML(c),d=a[e],f;if(!d){d=a[e]={};d.root=c;d.isXMLDocument=
this.isXML(b);d.brokenStarGEBTN=d.starSelectsClosedQSA=d.idGetsName=d.brokenMixedCaseQSA=d.brokenGEBCN=d.brokenCheckedQSA=d.brokenEmptyAttributeQSA=d.isHTMLDocument=d.nativeMatchesSelector=!1;var j,m,l,s,g,n=b.createElement("div"),i=b.body||b.getElementsByTagName("body")[0]||c;i.appendChild(n);try{n.innerHTML='<a id="slick_uniqueid"></a>',d.isHTMLDocument=!!b.getElementById("slick_uniqueid")}catch(x){}if(d.isHTMLDocument){n.style.display="none";n.appendChild(b.createComment(""));e=1<n.getElementsByTagName("*").length;
try{n.innerHTML="foo</foo>",j=(g=n.getElementsByTagName("*"))&&!!g.length&&"/"==g[0].nodeName.charAt(0)}catch(F){}d.brokenStarGEBTN=e||j;try{n.innerHTML='<a name="slick_uniqueid"></a><b id="slick_uniqueid"></b>',d.idGetsName=b.getElementById("slick_uniqueid")===n.firstChild}catch(t){}if(n.getElementsByClassName){try{n.innerHTML='<a class="f"></a><a class="b"></a>',n.getElementsByClassName("b").length,n.firstChild.className="b",l=2!=n.getElementsByClassName("b").length}catch(B){}try{n.innerHTML='<a class="a"></a><a class="f b a"></a>',
m=2!=n.getElementsByClassName("a").length}catch(A){}d.brokenGEBCN=l||m}if(n.querySelectorAll){try{n.innerHTML="foo</foo>",g=n.querySelectorAll("*"),d.starSelectsClosedQSA=g&&!!g.length&&"/"==g[0].nodeName.charAt(0)}catch(D){}try{n.innerHTML='<a class="MiX"></a>',d.brokenMixedCaseQSA=!n.querySelectorAll(".MiX").length}catch(v){}try{n.innerHTML='<select><option selected="selected">a</option></select>',d.brokenCheckedQSA=0==n.querySelectorAll(":checked").length}catch(z){}try{n.innerHTML='<a class=""></a>',
d.brokenEmptyAttributeQSA=0!=n.querySelectorAll('[class*=""]').length}catch(y){}}try{n.innerHTML='<form action="s"><input id="action"/></form>',s="s"!=n.firstChild.getAttribute("action")}catch(E){}d.nativeMatchesSelector=c.matchesSelector||c.mozMatchesSelector||c.webkitMatchesSelector;if(d.nativeMatchesSelector)try{d.nativeMatchesSelector.call(c,":slick"),d.nativeMatchesSelector=null}catch(G){}}try{c.slick_expando=1,delete c.slick_expando,d.getUID=this.getUIDHTML}catch(H){d.getUID=this.getUIDXML}i.removeChild(n);
n=g=i=null;d.getAttribute=d.isHTMLDocument&&s?function(a,b){var c=this.attributeGetters[b];return c?c.call(a):(c=a.getAttributeNode(b))?c.nodeValue:null}:function(a,b){var c=this.attributeGetters[b];return c?c.call(a):a.getAttribute(b)};d.hasAttribute=c&&this.isNativeCode(c.hasAttribute)?function(a,b){return a.hasAttribute(b)}:function(a,b){a=a.getAttributeNode(b);return!(!a||!a.specified&&!a.nodeValue)};j=c&&this.isNativeCode(c.contains);m=b&&this.isNativeCode(b.contains);d.contains=j&&m?function(a,
b){return a.contains(b)}:j&&!m?function(a,c){return a===c||(a===b?b.documentElement:a).contains(c)}:c&&c.compareDocumentPosition?function(a,b){return a===b||!!(a.compareDocumentPosition(b)&16)}:function(a,b){if(b){do if(b===a)return!0;while(b=b.parentNode)}return!1};d.documentSorter=c.compareDocumentPosition?function(a,b){return!a.compareDocumentPosition||!b.compareDocumentPosition?0:a.compareDocumentPosition(b)&4?-1:a===b?0:1}:"sourceIndex"in c?function(a,b){return!a.sourceIndex||!b.sourceIndex?
0:a.sourceIndex-b.sourceIndex}:b.createRange?function(a,b){if(!a.ownerDocument||!b.ownerDocument)return 0;var c=a.ownerDocument.createRange(),h=b.ownerDocument.createRange();c.setStart(a,0);c.setEnd(a,0);h.setStart(b,0);h.setEnd(b,0);return c.compareBoundaryPoints(Range.START_TO_END,h)}:null;c=null}for(f in d)this[f]=d[f]}};var d=/^([#.]?)((?:[\w-]+|\*))$/,e=/\[.+[*$^]=(?:""|'')?\]/,f={};b.search=function(a,b,c,j){var g=this.found=j?null:c||[];if(a)if(a.navigator)a=a.document;else{if(!a.nodeType)return g}else return g;
var r,i,l=this.uniques={},c=!(!c||!c.length),s=9==a.nodeType;this.document!==(s?a:a.ownerDocument)&&this.setDocument(a);if(c)for(i=g.length;i--;)l[this.getUID(g[i])]=!0;if("string"==typeof b){var p=b.match(d);a:if(p){i=p[1];var n=p[2];if(i)if("#"==i){if(!this.isHTMLDocument||!s)break a;p=a.getElementById(n);if(!p)return g;if(this.idGetsName&&p.getAttributeNode("id").nodeValue!=n)break a;if(j)return p||null;(!c||!l[this.getUID(p)])&&g.push(p)}else{if("."==i){if(!this.isHTMLDocument||(!a.getElementsByClassName||
this.brokenGEBCN)&&a.querySelectorAll)break a;if(a.getElementsByClassName&&!this.brokenGEBCN){r=a.getElementsByClassName(n);if(j)return r[0]||null;for(i=0;p=r[i++];)(!c||!l[this.getUID(p)])&&g.push(p)}else{var C=RegExp("(^|\\s)"+m.escapeRegExp(n)+"(\\s|$)");r=a.getElementsByTagName("*");for(i=0;p=r[i++];)if((className=p.className)&&C.test(className)){if(j)return p;(!c||!l[this.getUID(p)])&&g.push(p)}}}}else{if("*"==n&&this.brokenStarGEBTN)break a;r=a.getElementsByTagName(n);if(j)return r[0]||null;
for(i=0;p=r[i++];)(!c||!l[this.getUID(p)])&&g.push(p)}c&&this.sort(g);return j?null:g}a:if(a.querySelectorAll&&this.isHTMLDocument&&!f[b]&&!this.brokenMixedCaseQSA&&!(this.brokenCheckedQSA&&-1<b.indexOf(":checked")||this.brokenEmptyAttributeQSA&&e.test(b)||!s&&-1<b.indexOf(",")||m.disableQSA)){i=b;p=a;if(!s){var x=p.getAttribute("id");p.setAttribute("id","slickid__");i="#slickid__ "+i;a=p.parentNode}try{if(j)return a.querySelector(i)||null;r=a.querySelectorAll(i)}catch(F){f[b]=1;break a}finally{s||
(x?p.setAttribute("id",x):p.removeAttribute("id"),a=p)}if(this.starSelectsClosedQSA)for(i=0;p=r[i++];)"@"<p.nodeName&&(!c||!l[this.getUID(p)])&&g.push(p);else for(i=0;p=r[i++];)(!c||!l[this.getUID(p)])&&g.push(p);c&&this.sort(g);return g}r=this.Slick.parse(b);if(!r.length)return g}else{if(null==b)return g;if(b.Slick)r=b;else{if(this.contains(a.documentElement||a,b))g?g.push(b):g=b;return g}}this.posNTH={};this.posNTHLast={};this.posNTHType={};this.posNTHTypeLast={};this.push=!c&&(j||1==r.length&&
1==r.expressions[0].length)?this.pushArray:this.pushUID;null==g&&(g=[]);var t,B,A,D,v,z,y=r.expressions;i=0;a:for(;z=y[i];i++)for(b=0;v=z[b];b++){x="combinator:"+v.combinator;if(!this[x])continue a;s=this.isXMLDocument?v.tag:v.tag.toUpperCase();p=v.id;n=v.classList;A=v.classes;D=v.attributes;v=v.pseudos;t=b===z.length-1;this.bitUniques={};t?(this.uniques=l,this.found=g):(this.uniques={},this.found=[]);if(0===b){if(this[x](a,s,p,A,D,v,n),j&&t&&g.length)break a}else if(j&&t){t=0;for(B=C.length;t<B;t++)if(this[x](C[t],
s,p,A,D,v,n),g.length)break a}else{t=0;for(B=C.length;t<B;t++)this[x](C[t],s,p,A,D,v,n)}C=this.found}(c||1<r.expressions.length)&&this.sort(g);return j?g[0]||null:g};b.uidx=1;b.uidk="slick-uniqueid";b.getUIDXML=function(a){var b=a.getAttribute(this.uidk);b||(b=this.uidx++,a.setAttribute(this.uidk,b));return b};b.getUIDHTML=function(a){return a.uniqueNumber||(a.uniqueNumber=this.uidx++)};b.sort=function(a){if(!this.documentSorter)return a;a.sort(this.documentSorter);return a};b.cacheNTH={};b.matchNTH=
/^([+-]?\d*)?([a-z]+)?([+-]\d+)?$/;b.parseNTHArgument=function(a){var b=a.match(this.matchNTH);if(!b)return!1;var c=b[2]||!1,d=b[1]||1;"-"==d&&(d=-1);b=+b[3]||0;b="n"==c?{a:d,b:b}:"odd"==c?{a:2,b:1}:"even"==c?{a:2,b:0}:{a:0,b:d};return this.cacheNTH[a]=b};b.createNTHPseudo=function(a,b,c,d){return function(e,f){var g=this.getUID(e);if(!this[c][g]){var l=e.parentNode;if(!l)return!1;var l=l[a],s=1;if(d){var j=e.nodeName;do l.nodeName==j&&(this[c][this.getUID(l)]=s++);while(l=l[b])}else{do 1==l.nodeType&&
(this[c][this.getUID(l)]=s++);while(l=l[b])}}f=f||"n";s=this.cacheNTH[f]||this.parseNTHArgument(f);if(!s)return!1;l=s.a;s=s.b;g=this[c][g];if(0==l)return s==g;if(0<l){if(g<s)return!1}else if(s<g)return!1;return 0==(g-s)%l}};b.pushArray=function(a,b,c,d,e,f){this.matchSelector(a,b,c,d,e,f)&&this.found.push(a)};b.pushUID=function(a,b,c,d,e,f){var g=this.getUID(a);!this.uniques[g]&&this.matchSelector(a,b,c,d,e,f)&&(this.uniques[g]=!0,this.found.push(a))};b.matchNode=function(a,b){if(this.isHTMLDocument&&
this.nativeMatchesSelector)try{return this.nativeMatchesSelector.call(a,b.replace(/\[([^=]+)=\s*([^'"\]]+?)\s*\]/g,'[$1="$2"]'))}catch(c){}var d=this.Slick.parse(b);if(!d)return!0;var e=d.expressions,f=0,g;for(g=0;currentExpression=e[g];g++)if(1==currentExpression.length){var l=currentExpression[0];if(this.matchSelector(a,this.isXMLDocument?l.tag:l.tag.toUpperCase(),l.id,l.classes,l.attributes,l.pseudos))return!0;f++}if(f==d.length)return!1;d=this.search(this.document,d);for(g=0;e=d[g++];)if(e===
a)return!0;return!1};b.matchPseudo=function(a,b,c){var d="pseudo:"+b;if(this[d])return this[d](a,c);a=this.getAttribute(a,b);return c?c==a:!!a};b.matchSelector=function(a,b,c,d,e,f){if(b){var g=this.isXMLDocument?a.nodeName:a.nodeName.toUpperCase();if("*"==b){if("@">g)return!1}else if(g!=b)return!1}if(c&&a.getAttribute("id")!=c)return!1;if(d)for(b=d.length;b--;)if(c=this.getAttribute(a,"class"),!c||!d[b].regexp.test(c))return!1;if(e)for(b=e.length;b--;)if(d=e[b],d.operator?!d.test(this.getAttribute(a,
d.key)):!this.hasAttribute(a,d.key))return!1;if(f)for(b=f.length;b--;)if(d=f[b],!this.matchPseudo(a,d.key,d.value))return!1;return!0};var g={" ":function(a,b,c,d,e,f,g){var l;if(this.isHTMLDocument){if(c){l=this.document.getElementById(c);if(!l&&a.all||this.idGetsName&&l&&l.getAttributeNode("id").nodeValue!=c){g=a.all[c];if(!g)return;g[0]||(g=[g]);for(a=0;l=g[a++];){var s=l.getAttributeNode("id");if(s&&s.nodeValue==c){this.push(l,b,null,d,e,f);break}}return}if(l){if(this.document!==a&&!this.contains(a,
l))return;this.push(l,b,null,d,e,f);return}if(this.contains(this.root,a))return}if(d&&a.getElementsByClassName&&!this.brokenGEBCN&&(g=a.getElementsByClassName(g.join(" ")))&&g.length){for(a=0;l=g[a++];)this.push(l,b,c,null,e,f);return}}if((g=a.getElementsByTagName(b))&&g.length){this.brokenStarGEBTN||(b=null);for(a=0;l=g[a++];)this.push(l,b,c,d,e,f)}},">":function(a,b,c,d,e,f){if(a=a.firstChild){do 1==a.nodeType&&this.push(a,b,c,d,e,f);while(a=a.nextSibling)}},"+":function(a,b,c,d,e,f){for(;a=a.nextSibling;)if(1==
a.nodeType){this.push(a,b,c,d,e,f);break}},"^":function(a,b,c,d,e,f){if(a=a.firstChild)if(1==a.nodeType)this.push(a,b,c,d,e,f);else this["combinator:+"](a,b,c,d,e,f)},"~":function(a,b,c,d,e,f){for(;a=a.nextSibling;)if(1==a.nodeType){var g=this.getUID(a);if(this.bitUniques[g])break;this.bitUniques[g]=!0;this.push(a,b,c,d,e,f)}},"++":function(a,b,c,d,e,f){this["combinator:+"](a,b,c,d,e,f);this["combinator:!+"](a,b,c,d,e,f)},"~~":function(a,b,c,d,e,f){this["combinator:~"](a,b,c,d,e,f);this["combinator:!~"](a,
b,c,d,e,f)},"!":function(a,b,c,d,e,f){for(;a=a.parentNode;)a!==this.document&&this.push(a,b,c,d,e,f)},"!>":function(a,b,c,d,e,f){a=a.parentNode;a!==this.document&&this.push(a,b,c,d,e,f)},"!+":function(a,b,c,d,e,f){for(;a=a.previousSibling;)if(1==a.nodeType){this.push(a,b,c,d,e,f);break}},"!^":function(a,b,c,d,e,f){if(a=a.lastChild)if(1==a.nodeType)this.push(a,b,c,d,e,f);else this["combinator:!+"](a,b,c,d,e,f)},"!~":function(a,b,c,d,e,f){for(;a=a.previousSibling;)if(1==a.nodeType){var g=this.getUID(a);
if(this.bitUniques[g])break;this.bitUniques[g]=!0;this.push(a,b,c,d,e,f)}}},i;for(i in g)b["combinator:"+i]=g[i];var g={empty:function(a){var b=a.firstChild;return!(b&&1==b.nodeType)&&!(a.innerText||a.textContent||"").length},not:function(a,b){return!this.matchNode(a,b)},contains:function(a,b){return-1<(a.innerText||a.textContent||"").indexOf(b)},"first-child":function(a){for(;a=a.previousSibling;)if(1==a.nodeType)return!1;return!0},"last-child":function(a){for(;a=a.nextSibling;)if(1==a.nodeType)return!1;
return!0},"only-child":function(a){for(var b=a;b=b.previousSibling;)if(1==b.nodeType)return!1;for(;a=a.nextSibling;)if(1==a.nodeType)return!1;return!0},"nth-child":b.createNTHPseudo("firstChild","nextSibling","posNTH"),"nth-last-child":b.createNTHPseudo("lastChild","previousSibling","posNTHLast"),"nth-of-type":b.createNTHPseudo("firstChild","nextSibling","posNTHType",!0),"nth-last-of-type":b.createNTHPseudo("lastChild","previousSibling","posNTHTypeLast",!0),index:function(a,b){return this["pseudo:nth-child"](a,
""+(b+1))},even:function(a){return this["pseudo:nth-child"](a,"2n")},odd:function(a){return this["pseudo:nth-child"](a,"2n+1")},"first-of-type":function(a){for(var b=a.nodeName;a=a.previousSibling;)if(a.nodeName==b)return!1;return!0},"last-of-type":function(a){for(var b=a.nodeName;a=a.nextSibling;)if(a.nodeName==b)return!1;return!0},"only-of-type":function(a){for(var b=a,c=a.nodeName;b=b.previousSibling;)if(b.nodeName==c)return!1;for(;a=a.nextSibling;)if(a.nodeName==c)return!1;return!0},enabled:function(a){return!a.disabled},
disabled:function(a){return a.disabled},checked:function(a){return a.checked||a.selected},focus:function(a){return this.isHTMLDocument&&this.document.activeElement===a&&(a.href||a.type||this.hasAttribute(a,"tabindex"))},root:function(a){return a===this.root},selected:function(a){return a.selected}},j;for(j in g)b["pseudo:"+j]=g[j];j=b.attributeGetters={"for":function(){return"htmlFor"in this?this.htmlFor:this.getAttribute("for")},href:function(){return"href"in this?this.getAttribute("href",2):this.getAttribute("href")},
style:function(){return this.style?this.style.cssText:this.getAttribute("style")},tabindex:function(){var a=this.getAttributeNode("tabindex");return a&&a.specified?a.nodeValue:null},type:function(){return this.getAttribute("type")},maxlength:function(){var a=this.getAttributeNode("maxLength");return a&&a.specified?a.nodeValue:null}};j.MAXLENGTH=j.maxLength=j.maxlength;var m=b.Slick=this.Slick||{};m.version="1.1.7";m.search=function(a,c,d){return b.search(a,c,d)};m.find=function(a,c){return b.search(a,
c,null,!0)};m.contains=function(a,c){b.setDocument(a);return b.contains(a,c)};m.getAttribute=function(a,c){b.setDocument(a);return b.getAttribute(a,c)};m.hasAttribute=function(a,c){b.setDocument(a);return b.hasAttribute(a,c)};m.match=function(a,c){if(!a||!c)return!1;if(!c||c===a)return!0;b.setDocument(a);return b.matchNode(a,c)};m.defineAttributeGetter=function(a,c){b.attributeGetters[a]=c;return this};m.lookupAttributeGetter=function(a){return b.attributeGetters[a]};m.definePseudo=function(a,c){b["pseudo:"+
a]=function(a,b){return c.call(a,b)};return this};m.lookupPseudo=function(a){var c=b["pseudo:"+a];return c?function(a){return c.call(this,a)}:null};m.override=function(a,c){b.override(a,c);return this};m.isXML=b.isXML;m.uidOf=function(a){return b.getUIDHTML(a)};this.Slick||(this.Slick=m)}).apply("undefined"!=typeof exports?exports:this);
var Element=function(b,a){var c=Element.Constructors[b];if(c)return c(a);if("string"!=typeof b)return document.id(b).set(a);a||(a={});if(!/^[\w-]+$/.test(b)){c=Slick.parse(b).expressions[0][0];b="*"==c.tag?"div":c.tag;c.id&&null==a.id&&(a.id=c.id);var d=c.attributes;if(d)for(var e,f=0,g=d.length;f<g;f++)e=d[f],null==a[e.key]&&(null!=e.value&&"="==e.operator?a[e.key]=e.value:!e.value&&!e.operator&&(a[e.key]=!0));c.classList&&null==a["class"]&&(a["class"]=c.classList.join(" "))}return document.newElement(b,
a)};Browser.Element&&(Element.prototype=Browser.Element.prototype,Element.prototype._fireEvent=function(b){return function(a,c){return b.call(this,a,c)}}(Element.prototype.fireEvent));(new Type("Element",Element)).mirror(function(b){if(!Array.prototype[b]){var a={};a[b]=function(){for(var a=[],d=arguments,e=true,f=0,g=this.length;f<g;f++)var i=this[f],i=a[f]=i[b].apply(i,d),e=e&&typeOf(i)=="element";return e?new Elements(a):a};Elements.implement(a)}});
Browser.Element||(Element.parent=Object,Element.Prototype={$constructor:Element,$family:Function.from("element").hide()},Element.mirror(function(b,a){Element.Prototype[b]=a}));Element.Constructors={};
var IFrame=new Type("IFrame",function(){var b=Array.link(arguments,{properties:Type.isObject,iframe:function(a){return a!=null}}),a=b.properties||{},c;b.iframe&&(c=document.id(b.iframe));var d=a.onload||function(){};delete a.onload;a.id=a.name=[a.id,a.name,c?c.id||c.name:"IFrame_"+String.uniqueID()].pick();c=new Element(c||"iframe",a);b=function(){d.call(c.contentWindow)};window.frames[a.id]?b():c.addListener("load",b);return c}),Elements=this.Elements=function(b){if(b&&b.length)for(var a={},c,d=
0;c=b[d++];){var e=Slick.uidOf(c);if(!a[e]){a[e]=true;this.push(c)}}};Elements.prototype={length:0};Elements.parent=Array;
(new Type("Elements",Elements)).implement({filter:function(b,a){return!b?this:new Elements(Array.filter(this,typeOf(b)=="string"?function(a){return a.match(b)}:b,a))}.protect(),push:function(){for(var b=this.length,a=0,c=arguments.length;a<c;a++){var d=document.id(arguments[a]);d&&(this[b++]=d)}return this.length=b}.protect(),unshift:function(){for(var b=[],a=0,c=arguments.length;a<c;a++){var d=document.id(arguments[a]);d&&b.push(d)}return Array.prototype.unshift.apply(this,b)}.protect(),concat:function(){for(var b=
new Elements(this),a=0,c=arguments.length;a<c;a++){var d=arguments[a];Type.isEnumerable(d)?b.append(d):b.push(d)}return b}.protect(),append:function(b){for(var a=0,c=b.length;a<c;a++)this.push(b[a]);return this}.protect(),empty:function(){for(;this.length;)delete this[--this.length];return this}.protect()});
(function(){var b=Array.prototype.splice,a={"0":0,1:1,length:2};b.call(a,1,1);a[1]==1&&Elements.implement("splice",function(){for(var a=this.length,c=b.apply(this,arguments);a>=this.length;)delete this[a--];return c}.protect());Array.forEachMethod(function(a,b){Elements.implement(b,a)});Array.mirror(Elements);var c;try{c=document.createElement("<input name=x>").name=="x"}catch(d){}var e=function(a){return(""+a).replace(/&/g,"&amp;").replace(/"/g,"&quot;")};Document.implement({newElement:function(a,
b){if(b&&b.checked!=null)b.defaultChecked=b.checked;if(c&&b){a="<"+a;b.name&&(a=a+(' name="'+e(b.name)+'"'));b.type&&(a=a+(' type="'+e(b.type)+'"'));a=a+">";delete b.name;delete b.type}return this.id(this.createElement(a)).set(b)}})})();
(function(){Slick.uidOf(window);Slick.uidOf(document);Document.implement({newTextNode:function(a){return this.createTextNode(a)},getDocument:function(){return this},getWindow:function(){return this.window},id:function(){var a={string:function(b,c,d){return(b=Slick.find(d,"#"+b.replace(/(\W)/g,"\\$1")))?a.element(b,c):null},element:function(a,b){Slick.uidOf(a);if(!b&&!a.$family&&!/^(?:object|embed)$/i.test(a.tagName)){var c=a.fireEvent;a._fireEvent=function(a,b){return c(a,b)};Object.append(a,Element.Prototype)}return a},
object:function(b,c,d){return b.toElement?a.element(b.toElement(d),c):null}};a.textnode=a.whitespace=a.window=a.document=function(a){return a};return function(b,c,d){if(b&&b.$family&&b.uniqueNumber)return b;var e=typeOf(b);return a[e]?a[e](b,c,d||document):null}}()});window.$==null&&Window.implement("$",function(a,b){return document.id(a,b,this.document)});Window.implement({getDocument:function(){return this.document},getWindow:function(){return this}});[Document,Element].invoke("implement",{getElements:function(a){return Slick.search(this,
a,new Elements)},getElement:function(a){return document.id(Slick.find(this,a))}});var b={contains:function(a){return Slick.contains(this,a)}};document.contains||Document.implement(b);document.createElement("div").contains||Element.implement(b);var a=function(a,b){if(!a)return b;for(var a=Object.clone(Slick.parse(a)),c=a.expressions,d=c.length;d--;)c[d][0].combinator=b;return a};Object.forEach({getNext:"~",getPrevious:"!~",getParent:"!"},function(b,c){Element.implement(c,function(c){return this.getElement(a(c,
b))})});Object.forEach({getAllNext:"~",getAllPrevious:"!~",getSiblings:"~~",getChildren:">",getParents:"!"},function(b,c){Element.implement(c,function(c){return this.getElements(a(c,b))})});Element.implement({getFirst:function(b){return document.id(Slick.search(this,a(b,">"))[0])},getLast:function(b){return document.id(Slick.search(this,a(b,">")).getLast())},getWindow:function(){return this.ownerDocument.window},getDocument:function(){return this.ownerDocument},getElementById:function(a){return document.id(Slick.find(this,
"#"+(""+a).replace(/(\W)/g,"\\$1")))},match:function(a){return!a||Slick.match(this,a)}});window.$$==null&&Window.implement("$$",function(a){if(arguments.length==1){if(typeof a=="string")return Slick.search(this.document,a,new Elements);if(Type.isEnumerable(a))return new Elements(a)}return new Elements(arguments)});var c={before:function(a,b){var c=b.parentNode;c&&c.insertBefore(a,b)},after:function(a,b){var c=b.parentNode;c&&c.insertBefore(a,b.nextSibling)},bottom:function(a,b){b.appendChild(a)},
top:function(a,b){b.insertBefore(a,b.firstChild)}};c.inside=c.bottom;var d={},e={},f={};Array.forEach(["type","value","defaultValue","accessKey","cellPadding","cellSpacing","colSpan","frameBorder","rowSpan","tabIndex","useMap"],function(a){f[a.toLowerCase()]=a});f.html="innerHTML";f.text=document.createElement("div").textContent==null?"innerText":"textContent";Object.forEach(f,function(a,b){e[b]=function(b,c){b[a]=c};d[b]=function(b){return b[a]}});Array.forEach(["compact","nowrap","ismap","declare",
"noshade","checked","disabled","readOnly","multiple","selected","noresize","defer","defaultChecked","autofocus","controls","autoplay","loop"],function(a){var b=a.toLowerCase();e[b]=function(b,c){b[a]=!!c};d[b]=function(b){return!!b[a]}});Object.append(e,{"class":function(a,b){"className"in a?a.className=b||"":a.setAttribute("class",b)},"for":function(a,b){"htmlFor"in a?a.htmlFor=b:a.setAttribute("for",b)},style:function(a,b){a.style?a.style.cssText=b:a.setAttribute("style",b)},value:function(a,b){a.value=
b!=null?b:""}});d["class"]=function(a){return"className"in a?a.className||null:a.getAttribute("class")};b=document.createElement("button");try{b.type="button"}catch(g){}if(b.type!="button")e.type=function(a,b){a.setAttribute("type",b)};b=null;b=document.createElement("input");b.value="t";b.type="submit";if(b.value!="t")e.type=function(a,b){var c=a.value;a.type=b;a.value=c};var b=null,i=function(a){a.random="attribute";return a.getAttribute("random")=="attribute"}(document.createElement("div"));Element.implement({setProperty:function(a,
b){var c=e[a.toLowerCase()];if(c)c(this,b);else{if(i)var d=this.retrieve("$attributeWhiteList",{});if(b==null){this.removeAttribute(a);i&&delete d[a]}else{this.setAttribute(a,""+b);i&&(d[a]=true)}}return this},setProperties:function(a){for(var b in a)this.setProperty(b,a[b]);return this},getProperty:function(a){var b=d[a.toLowerCase()];if(b)return b(this);if(i){var c=this.getAttributeNode(a),b=this.retrieve("$attributeWhiteList",{});if(!c)return null;if(c.expando&&!b[a]){c=this.outerHTML;if(c.substr(0,
c.search(/\/?['"]?>(?![^<]*<['"])/)).indexOf(a)<0)return null;b[a]=true}}b=Slick.getAttribute(this,a);return!b&&!Slick.hasAttribute(this,a)?null:b},getProperties:function(){var a=Array.from(arguments);return a.map(this.getProperty,this).associate(a)},removeProperty:function(a){return this.setProperty(a,null)},removeProperties:function(){Array.each(arguments,this.removeProperty,this);return this},set:function(a,b){var c=Element.Properties[a];c&&c.set?c.set.call(this,b):this.setProperty(a,b)}.overloadSetter(),
get:function(a){var b=Element.Properties[a];return b&&b.get?b.get.apply(this):this.getProperty(a)}.overloadGetter(),erase:function(a){var b=Element.Properties[a];b&&b.erase?b.erase.apply(this):this.removeProperty(a);return this},hasClass:function(a){return this.className.clean().contains(a," ")},addClass:function(a){if(!this.hasClass(a))this.className=(this.className+" "+a).clean();return this},removeClass:function(a){this.className=this.className.replace(RegExp("(^|\\s)"+a+"(?:\\s|$)"),"$1");return this},
toggleClass:function(a,b){b==null&&(b=!this.hasClass(a));return b?this.addClass(a):this.removeClass(a)},adopt:function(){var a=this,b,c=Array.flatten(arguments),d=c.length;d>1&&(a=b=document.createDocumentFragment());for(var e=0;e<d;e++){var f=document.id(c[e],true);f&&a.appendChild(f)}b&&this.appendChild(b);return this},appendText:function(a,b){return this.grab(this.getDocument().newTextNode(a),b)},grab:function(a,b){c[b||"bottom"](document.id(a,true),this);return this},inject:function(a,b){c[b||
"bottom"](this,document.id(a,true));return this},replaces:function(a){a=document.id(a,true);a.parentNode.replaceChild(this,a);return this},wraps:function(a,b){a=document.id(a,true);return this.replaces(a).grab(a,b)},getSelected:function(){this.selectedIndex;return new Elements(Array.from(this.options).filter(function(a){return a.selected}))},toQueryString:function(){var a=[];this.getElements("input, select, textarea").each(function(b){var c=b.type;if(b.name&&!b.disabled&&!(c=="submit"||c=="reset"||
c=="file"||c=="image")){c=b.get("tag")=="select"?b.getSelected().map(function(a){return document.id(a).get("value")}):(c=="radio"||c=="checkbox")&&!b.checked?null:b.get("value");Array.from(c).each(function(c){typeof c!="undefined"&&a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(c))})}});return a.join("&")}});var j={},m={},h=function(a){return m[a]||(m[a]={})},k=function(a){var b=a.uniqueNumber;a.removeEvents&&a.removeEvents();a.clearAttributes&&a.clearAttributes();if(b!=null){delete j[b];
delete m[b]}return a},o={input:"checked",option:"selected",textarea:"value"};Element.implement({destroy:function(){var a=k(this).getElementsByTagName("*");Array.each(a,k);Element.dispose(this);return null},empty:function(){Array.from(this.childNodes).each(Element.dispose);return this},dispose:function(){return this.parentNode?this.parentNode.removeChild(this):this},clone:function(a,b){var a=a!==false,c=this.cloneNode(a),d=[c],e=[this],f;if(a){d.append(Array.from(c.getElementsByTagName("*")));e.append(Array.from(this.getElementsByTagName("*")))}for(f=
d.length;f--;){var k=d[f],g=e[f];b||k.removeAttribute("id");if(k.clearAttributes){k.clearAttributes();k.mergeAttributes(g);k.removeAttribute("uniqueNumber");if(k.options)for(var j=k.options,m=g.options,h=j.length;h--;)j[h].selected=m[h].selected}(j=o[g.tagName.toLowerCase()])&&g[j]&&(k[j]=g[j])}if(Browser.ie){d=c.getElementsByTagName("object");e=this.getElementsByTagName("object");for(f=d.length;f--;)d[f].outerHTML=e[f].outerHTML}return document.id(c)}});[Element,Window,Document].invoke("implement",
{addListener:function(a,b,c){if(a=="unload")var d=b,e=this,b=function(){e.removeListener("unload",b);d()};else j[Slick.uidOf(this)]=this;this.addEventListener?this.addEventListener(a,b,!!c):this.attachEvent("on"+a,b);return this},removeListener:function(a,b,c){this.removeEventListener?this.removeEventListener(a,b,!!c):this.detachEvent("on"+a,b);return this},retrieve:function(a,b){var c=h(Slick.uidOf(this)),d=c[a];b!=null&&d==null&&(d=c[a]=b);return d!=null?d:null},store:function(a,b){h(Slick.uidOf(this))[a]=
b;return this},eliminate:function(a){delete h(Slick.uidOf(this))[a];return this}});window.attachEvent&&!window.addEventListener&&window.addListener("unload",function(){Object.each(j,k);window.CollectGarbage&&CollectGarbage()});Element.Properties={};Element.Properties.style={set:function(a){this.style.cssText=a},get:function(){return this.style.cssText},erase:function(){this.style.cssText=""}};Element.Properties.tag={get:function(){return this.tagName.toLowerCase()}};Element.Properties.html={set:function(a){a==
null?a="":typeOf(a)=="array"&&(a=a.join(""));this.innerHTML=a},erase:function(){this.innerHTML=""}};b=document.createElement("div");b.innerHTML="<nav></nav>";var q=b.childNodes.length==1;if(!q)for(var b=["abbr","article","aside","audio","canvas","datalist","details","figcaption","figure","footer","header","hgroup","mark","meter","nav","output","progress","section","summary","time","video"],u=document.createDocumentFragment(),r=b.length;r--;)u.createElement(b[r]);b=null;b=Function.attempt(function(){document.createElement("table").innerHTML=
"<tr><td></td></tr>";return true});r=document.createElement("tr");r.innerHTML="<td></td>";var w=r.innerHTML=="<td></td>",r=null;if(!b||!w||!q)Element.Properties.html.set=function(a){var b={table:[1,"<table>","</table>"],select:[1,"<select>","</select>"],tbody:[2,"<table><tbody>","</tbody></table>"],tr:[3,"<table><tbody><tr>","</tr></tbody></table>"]};b.thead=b.tfoot=b.tbody;return function(c){var d=b[this.get("tag")];!d&&!q&&(d=[0,"",""]);if(!d)return a.call(this,c);var e=d[0],f=document.createElement("div"),
k=f;q||u.appendChild(f);for(f.innerHTML=[d[1],c,d[2]].flatten().join("");e--;)k=k.firstChild;this.empty().adopt(k.childNodes);q||u.removeChild(f)}}(Element.Properties.html.set);b=document.createElement("form");b.innerHTML="<select><option>s</option></select>";if(b.firstChild.value!="s")Element.Properties.value={set:function(a){if(this.get("tag")!="select")return this.setProperty("value",a);for(var b=this.getElements("option"),c=0;c<b.length;c++){var d=b[c],e=d.getAttributeNode("value");if((e&&e.specified?
d.value:d.get("text"))==a)return d.selected=true}},get:function(){var a=this,b=a.get("tag");if(b!="select"&&b!="option")return this.getProperty("value");if(b=="select"&&!(a=a.getSelected()[0]))return"";return(b=a.getAttributeNode("value"))&&b.specified?a.value:a.get("text")}};b=null;if(document.createElement("div").getAttributeNode("id"))Element.Properties.id={set:function(a){this.id=this.getAttributeNode("id").value=a},get:function(){return this.id||null},erase:function(){this.id=this.getAttributeNode("id").value=
""}}})();
(function(){var b=document.html,a=document.createElement("div");a.style.color="red";a.style.color=null;var c=a.style.color=="red",a=null;Element.Properties.styles={set:function(a){this.setStyles(a)}};var a=b.style.opacity!=null,d=b.style.filter!=null,e=/alpha\(opacity=([\d.]+)\)/i,f=a?function(a,b){a.style.opacity=b}:d?function(a,b){var c=a.style;if(!a.currentStyle||!a.currentStyle.hasLayout)c.zoom=1;var b=b==null||b==1?"":"alpha(opacity="+(b*100).limit(0,100).round()+")",d=c.filter||a.getComputedStyle("filter")||"";
c.filter=e.test(d)?d.replace(e,b):d+b;c.filter||c.removeAttribute("filter")}:function(a,b){a.store("$opacity",b);a.style.visibility=b>0||b==null?"visible":"hidden"},g=a?function(a){a=a.style.opacity||a.getComputedStyle("opacity");return a==""?1:a.toFloat()}:d?function(a){var a=a.style.filter||a.getComputedStyle("filter"),b;a&&(b=a.match(e));return b==null||a==null?1:b[1]/100}:function(a){var b=a.retrieve("$opacity");b==null&&(b=a.style.visibility=="hidden"?0:1);return b},i=b.style.cssFloat==null?
"styleFloat":"cssFloat";Element.implement({getComputedStyle:function(a){if(this.currentStyle)return this.currentStyle[a.camelCase()];var b=Element.getDocument(this).defaultView;return(b=b?b.getComputedStyle(this,null):null)?b.getPropertyValue(a==i?"float":a.hyphenate()):null},setStyle:function(a,b){if(a=="opacity"){b!=null&&(b=parseFloat(b));f(this,b);return this}a=(a=="float"?i:a).camelCase();if(typeOf(b)!="string")var d=(Element.Styles[a]||"@").split(" "),b=Array.from(b).map(function(a,b){return!d[b]?
"":typeOf(a)=="number"?d[b].replace("@",Math.round(a)):a}).join(" ");else b==""+Number(b)&&(b=Math.round(b));this.style[a]=b;(b==""||b==null)&&c&&this.style.removeAttribute&&this.style.removeAttribute(a);return this},getStyle:function(a){if(a=="opacity")return g(this);var a=(a=="float"?i:a).camelCase(),b=this.style[a];if(!b||a=="zIndex"){var b=[],c;for(c in Element.ShortStyles)if(a==c){for(var d in Element.ShortStyles[c])b.push(this.getStyle(d));return b.join(" ")}b=this.getComputedStyle(a)}if(b){b=
""+b;(c=b.match(/rgba?\([\d\s,]+\)/))&&(b=b.replace(c[0],c[0].rgbToHex()))}if(Browser.ie&&isNaN(parseFloat(b))){if(/^(height|width)$/.test(a)){var e=0;(a=="width"?["left","right"]:["top","bottom"]).each(function(a){e=e+(this.getStyle("border-"+a+"-width").toInt()+this.getStyle("padding-"+a).toInt())},this);return this["offset"+a.capitalize()]-e+"px"}if(Browser.opera&&(""+b).indexOf("px")!=-1)return b;if(/^border(.+)Width|margin|padding/.test(a))return"0px"}return b},setStyles:function(a){for(var b in a)this.setStyle(b,
a[b]);return this},getStyles:function(){var a={};Array.flatten(arguments).each(function(b){a[b]=this.getStyle(b)},this);return a}});Element.Styles={left:"@px",top:"@px",bottom:"@px",right:"@px",width:"@px",height:"@px",maxWidth:"@px",maxHeight:"@px",minWidth:"@px",minHeight:"@px",backgroundColor:"rgb(@, @, @)",backgroundPosition:"@px @px",color:"rgb(@, @, @)",fontSize:"@px",letterSpacing:"@px",lineHeight:"@px",clip:"rect(@px @px @px @px)",margin:"@px @px @px @px",padding:"@px @px @px @px",border:"@px @ rgb(@, @, @) @px @ rgb(@, @, @) @px @ rgb(@, @, @)",
borderWidth:"@px @px @px @px",borderStyle:"@ @ @ @",borderColor:"rgb(@, @, @) rgb(@, @, @) rgb(@, @, @) rgb(@, @, @)",zIndex:"@",zoom:"@",fontWeight:"@",textIndent:"@px",opacity:"@"};Element.ShortStyles={margin:{},padding:{},border:{},borderWidth:{},borderStyle:{},borderColor:{}};["Top","Right","Bottom","Left"].each(function(a){var b=Element.ShortStyles,c=Element.Styles;["margin","padding"].each(function(d){var e=d+a;b[d][e]=c[e]="@px"});var d="border"+a;b.border[d]=c[d]="@px @ rgb(@, @, @)";var e=
d+"Width",f=d+"Style",g=d+"Color";b[d]={};b.borderWidth[e]=b[d][e]=c[e]="@px";b.borderStyle[f]=b[d][f]=c[f]="@";b.borderColor[g]=b[d][g]=c[g]="rgb(@, @, @)"})})();
(function(){Element.Properties.events={set:function(a){this.addEvents(a)}};[Element,Window,Document].invoke("implement",{addEvent:function(a,b,d){var e=this.retrieve("events",{});e[a]||(e[a]={keys:[],values:[]});if(e[a].keys.contains(b))return this;e[a].keys.push(b);var f=a,g=Element.Events[a],i=b,j=this;if(g){g.onAdd&&g.onAdd.call(this,b,a);g.condition&&(i=function(d){return g.condition.call(this,d,a)?b.call(this,d):true});g.base&&(f=Function.from(g.base).call(this,a))}var m=function(){return b.call(j)},
h=Element.NativeEvents[f];if(h){h==2&&(m=function(a){a=new DOMEvent(a,j.getWindow());i.call(j,a)===false&&a.stop()});this.addListener(f,m,d)}e[a].values.push(m);return this},removeEvent:function(a,b,d){var e=this.retrieve("events");if(!e||!e[a])return this;var f=e[a],g=f.keys.indexOf(b);if(g==-1)return this;e=f.values[g];delete f.keys[g];delete f.values[g];if(f=Element.Events[a]){f.onRemove&&f.onRemove.call(this,b,a);f.base&&(a=Function.from(f.base).call(this,a))}return Element.NativeEvents[a]?this.removeListener(a,
e,d):this},addEvents:function(a){for(var b in a)this.addEvent(b,a[b]);return this},removeEvents:function(a){var b;if(typeOf(a)=="object"){for(b in a)this.removeEvent(b,a[b]);return this}var d=this.retrieve("events");if(!d)return this;if(a){if(d[a]){d[a].keys.each(function(b){this.removeEvent(a,b)},this);delete d[a]}}else{for(b in d)this.removeEvents(b);this.eliminate("events")}return this},fireEvent:function(a,b,d){var e=this.retrieve("events");if(!e||!e[a])return this;b=Array.from(b);e[a].keys.each(function(a){d?
a.delay(d,this,b):a.apply(this,b)},this);return this},cloneEvents:function(a,b){var a=document.id(a),d=a.retrieve("events");if(!d)return this;if(b)d[b]&&d[b].keys.each(function(a){this.addEvent(b,a)},this);else for(var e in d)this.cloneEvents(a,e);return this}});Element.NativeEvents={click:2,dblclick:2,mouseup:2,mousedown:2,contextmenu:2,mousewheel:2,DOMMouseScroll:2,mouseover:2,mouseout:2,mousemove:2,selectstart:2,selectend:2,keydown:2,keypress:2,keyup:2,orientationchange:2,touchstart:2,touchmove:2,
touchend:2,touchcancel:2,gesturestart:2,gesturechange:2,gestureend:2,focus:2,blur:2,change:2,reset:2,select:2,submit:2,paste:2,input:2,load:2,unload:1,beforeunload:2,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,error:1,abort:1,scroll:1};Element.Events={mousewheel:{base:Browser.firefox?"DOMMouseScroll":"mousewheel"}};if("onmouseenter"in document.documentElement)Element.NativeEvents.mouseenter=Element.NativeEvents.mouseleave=2;else{var b=function(a){a=a.relatedTarget;return a==null?true:!a?
false:a!=this&&a.prefix!="xul"&&typeOf(this)!="document"&&!this.contains(a)};Element.Events.mouseenter={base:"mouseover",condition:b};Element.Events.mouseleave={base:"mouseout",condition:b}}if(!window.addEventListener){Element.NativeEvents.propertychange=2;Element.Events.change={base:function(){var a=this.type;return this.get("tag")=="input"&&(a=="radio"||a=="checkbox")?"propertychange":"change"},condition:function(a){return this.type!="radio"||a.event.propertyName=="checked"&&this.checked}}}})();
(function(){var b,a=!!window.addEventListener;Element.NativeEvents.focusin=Element.NativeEvents.focusout=2;var c=function(a,b,c,d,e){for(;e&&e!=a;){if(b(e,d))return c.call(e,d,e);e=document.id(e.parentNode)}},d={mouseenter:{base:"mouseover"},mouseleave:{base:"mouseout"},focus:{base:"focus"+(a?"":"in"),capture:true},blur:{base:a?"blur":"focusout",capture:true}},e=function(a){return{base:"focusin",remove:function(b,c){var d=b.retrieve("$delegation:"+a+"listeners",{})[c];if(d&&d.forms)for(var e=d.forms.length;e--;)d.forms[e].removeEvent(a,
d.fns[e])},listen:function(b,d,e,f,g,i){if(f=g.get("tag")=="form"?g:f.target.getParent("form")){var r=b.retrieve("$delegation:"+a+"listeners",{}),w=r[i]||{forms:[],fns:[]},l=w.forms,s=w.fns;if(l.indexOf(f)==-1){l.push(f);l=function(a){c(b,d,e,a,g)};f.addEvent(a,l);s.push(l);r[i]=w;b.store("$delegation:"+a+"listeners",r)}}}}},f=function(a){return{base:"focusin",listen:function(b,d,e,f,g){var i={blur:function(){this.removeEvents(i)}};i[a]=function(a){c(b,d,e,a,g)};f.target.addEvents(i)}}};a||Object.append(d,
{submit:e("submit"),reset:e("reset"),change:f("change"),select:f("select")});var a=Element.prototype,g=a.addEvent,i=a.removeEvent,a=function(a,b){return function(c,d,e){if(c.indexOf(":relay")==-1)return a.call(this,c,d,e);var f=Slick.parse(c).expressions[0][0];if(f.pseudos[0].key!="relay")return a.call(this,c,d,e);var g=f.tag;f.pseudos.slice(1).each(function(a){g=g+(":"+a.key+(a.value?"("+a.value+")":""))});a.call(this,c,d);return b.call(this,g,f.pseudos[0].value,d)}};b=function(a,c,e,f){var g=this.retrieve("$delegates",
{}),q=g[a];if(!q)return this;if(f){var c=a,e=q[f].delegator,u=d[a]||{},a=u.base||c;u.remove&&u.remove(this,f);delete q[f];g[c]=q;return i.call(this,a,e)}if(e)for(u in q){f=q[u];if(f.match==c&&f.fn==e)return b.call(this,a,c,e,u)}else for(u in q){f=q[u];f.match==c&&b.call(this,a,c,f.fn,u)}return this};[Element,Window,Document].invoke("implement",{addEvent:a(g,function(a,b,e){var f=this.retrieve("$delegates",{}),i=f[a];if(i)for(var q in i)if(i[q].fn==e&&i[q].match==b)return this;q=a;var u=b,r=d[a]||
{},a=r.base||q,b=function(a){return Slick.match(a,u)},w=Element.Events[q];if(w&&w.condition)var l=b,s=w.condition,b=function(b,c){return l(b,c)&&s.call(b,c,a)};var p=this,n=String.uniqueID(),w=r.listen?function(a,c){if(!c&&a&&a.target)c=a.target;c&&r.listen(p,b,e,a,c,n)}:function(a,d){if(!d&&a&&a.target)d=a.target;d&&c(p,b,e,a,d)};i||(i={});i[n]={match:u,fn:e,delegator:w};f[q]=i;return g.call(this,a,w,r.capture)}),removeEvent:a(i,b)})})();
(function(){function b(a){return h(a,"-moz-box-sizing")=="border-box"}function a(a){return h(a,"border-top-width").toInt()||0}function c(a){return h(a,"border-left-width").toInt()||0}function d(a){return/^(?:body|html)$/i.test(a.tagName)}function e(a){a=a.getDocument();return!a.compatMode||a.compatMode=="CSS1Compat"?a.html:a.body}var f=document.createElement("div"),g=document.createElement("div");f.style.height="0";f.appendChild(g);var i=g.offsetParent===f,f=g=null,j=function(a){return h(a,"position")!=
"static"||d(a)},m=function(a){return j(a)||/^(?:table|td|th)$/i.test(a.tagName)};Element.implement({scrollTo:function(a,b){if(d(this))this.getWindow().scrollTo(a,b);else{this.scrollLeft=a;this.scrollTop=b}return this},getSize:function(){return d(this)?this.getWindow().getSize():{x:this.offsetWidth,y:this.offsetHeight}},getScrollSize:function(){return d(this)?this.getWindow().getScrollSize():{x:this.scrollWidth,y:this.scrollHeight}},getScroll:function(){return d(this)?this.getWindow().getScroll():
{x:this.scrollLeft,y:this.scrollTop}},getScrolls:function(){for(var a=this.parentNode,b={x:0,y:0};a&&!d(a);){b.x=b.x+a.scrollLeft;b.y=b.y+a.scrollTop;a=a.parentNode}return b},getOffsetParent:i?function(){var a=this;if(d(a)||h(a,"position")=="fixed")return null;for(var b=h(a,"position")=="static"?m:j;a=a.parentNode;)if(b(a))return a;return null}:function(){if(d(this)||h(this,"position")=="fixed")return null;try{return this.offsetParent}catch(a){}return null},getOffsets:function(){if(this.getBoundingClientRect&&
!Browser.Platform.ios){var e=this.getBoundingClientRect(),f=document.id(this.getDocument().documentElement),g=f.getScroll(),i=this.getScrolls(),j=h(this,"position")=="fixed";return{x:e.left.toInt()+i.x+(j?0:g.x)-f.clientLeft,y:e.top.toInt()+i.y+(j?0:g.y)-f.clientTop}}e=this;f={x:0,y:0};if(d(this))return f;for(;e&&!d(e);){f.x=f.x+e.offsetLeft;f.y=f.y+e.offsetTop;if(Browser.firefox){if(!b(e)){f.x=f.x+c(e);f.y=f.y+a(e)}if((g=e.parentNode)&&h(g,"overflow")!="visible"){f.x=f.x+c(g);f.y=f.y+a(g)}}else if(e!=
this&&Browser.safari){f.x=f.x+c(e);f.y=f.y+a(e)}e=e.offsetParent}if(Browser.firefox&&!b(this)){f.x=f.x-c(this);f.y=f.y-a(this)}return f},getPosition:function(b){var d=this.getOffsets(),e=this.getScrolls(),d={x:d.x-e.x,y:d.y-e.y};if(b&&(b=document.id(b))){e=b.getPosition();return{x:d.x-e.x-c(b),y:d.y-e.y-a(b)}}return d},getCoordinates:function(a){if(d(this))return this.getWindow().getCoordinates();var a=this.getPosition(a),b=this.getSize(),a={left:a.x,top:a.y,width:b.x,height:b.y};a.right=a.left+a.width;
a.bottom=a.top+a.height;return a},computePosition:function(a){return{left:a.x-(h(this,"margin-left").toInt()||0),top:a.y-(h(this,"margin-top").toInt()||0)}},setPosition:function(a){return this.setStyles(this.computePosition(a))}});[Document,Window].invoke("implement",{getSize:function(){var a=e(this);return{x:a.clientWidth,y:a.clientHeight}},getScroll:function(){var a=this.getWindow(),b=e(this);return{x:a.pageXOffset||b.scrollLeft,y:a.pageYOffset||b.scrollTop}},getScrollSize:function(){var a=e(this),
b=this.getSize(),c=this.getDocument().body;return{x:Math.max(a.scrollWidth,c.scrollWidth,b.x),y:Math.max(a.scrollHeight,c.scrollHeight,b.y)}},getPosition:function(){return{x:0,y:0}},getCoordinates:function(){var a=this.getSize();return{top:0,left:0,bottom:a.y,right:a.x,height:a.y,width:a.x}}});var h=Element.getComputedStyle})();Element.alias({position:"setPosition"});
[Window,Document,Element].invoke("implement",{getHeight:function(){return this.getSize().y},getWidth:function(){return this.getSize().x},getScrollTop:function(){return this.getScroll().y},getScrollLeft:function(){return this.getScroll().x},getScrollHeight:function(){return this.getScrollSize().y},getScrollWidth:function(){return this.getScrollSize().x},getTop:function(){return this.getPosition().y},getLeft:function(){return this.getPosition().x}});
(function(){var b=this.Fx=new Class({Implements:[Chain,Events,Options],options:{fps:60,unit:false,duration:500,frames:null,frameSkip:true,link:"ignore"},initialize:function(a){this.subject=this.subject||this;this.setOptions(a)},getTransition:function(){return function(a){return-(Math.cos(Math.PI*a)-1)/2}},step:function(a){if(this.options.frameSkip){var b=(this.time!=null?a-this.time:0)/this.frameInterval;this.time=a;this.frame=this.frame+b}else this.frame++;if(this.frame<this.frames)this.set(this.compute(this.from,
this.to,this.transition(this.frame/this.frames)));else{this.frame=this.frames;this.set(this.compute(this.from,this.to,1));this.stop()}},set:function(a){return a},compute:function(a,c,d){return b.compute(a,c,d)},check:function(){if(!this.isRunning())return true;switch(this.options.link){case "cancel":this.cancel();return true;case "chain":this.chain(this.caller.pass(arguments,this))}return false},start:function(a,c){if(!this.check(a,c))return this;this.from=a;this.to=c;this.frame=this.options.frameSkip?
0:-1;this.time=null;this.transition=this.getTransition();var d=this.options.frames,f=this.options.fps,h=this.options.duration;this.duration=b.Durations[h]||h.toInt();this.frameInterval=1E3/f;this.frames=d||Math.round(this.duration/this.frameInterval);this.fireEvent("start",this.subject);e.call(this,f);return this},stop:function(){if(this.isRunning()){this.time=null;f.call(this,this.options.fps);if(this.frames==this.frame){this.fireEvent("complete",this.subject);this.callChain()||this.fireEvent("chainComplete",
this.subject)}else this.fireEvent("stop",this.subject)}return this},cancel:function(){if(this.isRunning()){this.time=null;f.call(this,this.options.fps);this.frame=this.frames;this.fireEvent("cancel",this.subject).clearChain()}return this},pause:function(){if(this.isRunning()){this.time=null;f.call(this,this.options.fps)}return this},resume:function(){this.frame<this.frames&&!this.isRunning()&&e.call(this,this.options.fps);return this},isRunning:function(){var b=a[this.options.fps];return b&&b.contains(this)}});
b.compute=function(a,b,c){return(b-a)*c+a};b.Durations={"short":250,normal:500,"long":1E3};var a={},c={},d=function(){for(var a=Date.now(),b=this.length;b--;){var c=this[b];c&&c.step(a)}},e=function(b){var e=a[b]||(a[b]=[]);e.push(this);c[b]||(c[b]=d.periodical(Math.round(1E3/b),e))},f=function(b){var d=a[b];if(d){d.erase(this);if(!d.length&&c[b]){delete a[b];c[b]=clearInterval(c[b])}}}})();
Fx.CSS=new Class({Extends:Fx,prepare:function(b,a,c){var c=Array.from(c),d=c[0],c=c[1];if(c==null){var c=d,d=b.getStyle(a),e=this.options.unit;if(e&&d.slice(-e.length)!=e&&parseFloat(d)!=0){b.setStyle(a,c+e);var f=b.getComputedStyle(a);if(!/px$/.test(f)){f=b.style[("pixel-"+a).camelCase()];if(f==null){var g=b.style.left;b.style.left=c+e;f=b.style.pixelLeft;b.style.left=g}}d=(c||1)/(parseFloat(f)||1)*(parseFloat(d)||0);b.setStyle(a,d+e)}}return{from:this.parse(d),to:this.parse(c)}},parse:function(b){b=
Function.from(b)();b=typeof b=="string"?b.split(" "):Array.from(b);return b.map(function(a){var a=""+a,b=false;Object.each(Fx.CSS.Parsers,function(d){if(!b){var e=d.parse(a);if(e||e===0)b={value:e,parser:d}}});return b=b||{value:a,parser:Fx.CSS.Parsers.String}})},compute:function(b,a,c){var d=[];Math.min(b.length,a.length).times(function(e){d.push({value:b[e].parser.compute(b[e].value,a[e].value,c),parser:b[e].parser})});d.$family=Function.from("fx:css:value");return d},serve:function(b,a){typeOf(b)!=
"fx:css:value"&&(b=this.parse(b));var c=[];b.each(function(b){c=c.concat(b.parser.serve(b.value,a))});return c},render:function(b,a,c,d){b.setStyle(a,this.serve(c,d))},search:function(b){if(Fx.CSS.Cache[b])return Fx.CSS.Cache[b];var a={},c=RegExp("^"+b.escapeRegExp()+"$");Array.each(document.styleSheets,function(b){var e=b.href;if(!e||!e.contains("://")||e.contains(document.domain))Array.each(b.rules||b.cssRules,function(b){if(b.style){var d=b.selectorText?b.selectorText.replace(/^\w+/,function(a){return a.toLowerCase()}):
null;d&&c.test(d)&&Object.each(Element.Styles,function(c,d){if(b.style[d]&&!Element.ShortStyles[d]){c=""+b.style[d];a[d]=/^rgb/.test(c)?c.rgbToHex():c}})}})});return Fx.CSS.Cache[b]=a}});Fx.CSS.Cache={};
Fx.CSS.Parsers={Color:{parse:function(b){return b.match(/^#[0-9a-f]{3,6}$/i)?b.hexToRgb(true):(b=b.match(/(\d+),\s*(\d+),\s*(\d+)/))?[b[1],b[2],b[3]]:false},compute:function(b,a,c){return b.map(function(d,e){return Math.round(Fx.compute(b[e],a[e],c))})},serve:function(b){return b.map(Number)}},Number:{parse:parseFloat,compute:Fx.compute,serve:function(b,a){return a?b+a:b}},String:{parse:Function.from(!1),compute:function(b,a){return a},serve:function(b){return b}}};
Fx.Tween=new Class({Extends:Fx.CSS,initialize:function(b,a){this.element=this.subject=document.id(b);this.parent(a)},set:function(b,a){if(arguments.length==1){a=b;b=this.property||this.options.property}this.render(this.element,b,a,this.options.unit);return this},start:function(b,a,c){if(!this.check(b,a,c))return this;var d=Array.flatten(arguments);this.property=this.options.property||d.shift();d=this.prepare(this.element,this.property,d);return this.parent(d.from,d.to)}});
Element.Properties.tween={set:function(b){this.get("tween").cancel().setOptions(b);return this},get:function(){var b=this.retrieve("tween");if(!b){b=new Fx.Tween(this,{link:"cancel"});this.store("tween",b)}return b}};
Element.implement({tween:function(b,a,c){this.get("tween").start(b,a,c);return this},fade:function(b){var a=this.get("tween"),c,d=["opacity"].append(arguments),e;d[1]==null&&(d[1]="toggle");switch(d[1]){case "in":c="start";d[1]=1;break;case "out":c="start";d[1]=0;break;case "show":c="set";d[1]=1;break;case "hide":c="set";d[1]=0;break;case "toggle":e=this.retrieve("fade:flag",this.getStyle("opacity")==1);c="start";d[1]=e?0:1;this.store("fade:flag",!e);e=true;break;default:c="start"}e||this.eliminate("fade:flag");
a[c].apply(a,d);d=d[d.length-1];c=="set"||d!=0?this.setStyle("visibility",d==0?"hidden":"visible"):a.chain(function(){this.element.setStyle("visibility","hidden");this.callChain()});return this},highlight:function(b,a){if(!a){a=this.retrieve("highlight:original",this.getStyle("background-color"));a=a=="transparent"?"#fff":a}var c=this.get("tween");c.start("background-color",b||"#ffff88",a).chain(function(){this.setStyle("background-color",this.retrieve("highlight:original"));c.callChain()}.bind(this));
return this}});
Fx.Morph=new Class({Extends:Fx.CSS,initialize:function(b,a){this.element=this.subject=document.id(b);this.parent(a)},set:function(b){typeof b=="string"&&(b=this.search(b));for(var a in b)this.render(this.element,a,b[a],this.options.unit);return this},compute:function(b,a,c){var d={},e;for(e in b)d[e]=this.parent(b[e],a[e],c);return d},start:function(b){if(!this.check(b))return this;typeof b=="string"&&(b=this.search(b));var a={},c={},d;for(d in b){var e=this.prepare(this.element,d,b[d]);a[d]=e.from;
c[d]=e.to}return this.parent(a,c)}});Element.Properties.morph={set:function(b){this.get("morph").cancel().setOptions(b);return this},get:function(){var b=this.retrieve("morph");if(!b){b=new Fx.Morph(this,{link:"cancel"});this.store("morph",b)}return b}};Element.implement({morph:function(b){this.get("morph").start(b);return this}});
Fx.implement({getTransition:function(){var b=this.options.transition||Fx.Transitions.Sine.easeInOut;if(typeof b=="string"){var a=b.split(":"),b=Fx.Transitions,b=b[a[0]]||b[a[0].capitalize()];a[1]&&(b=b["ease"+a[1].capitalize()+(a[2]?a[2].capitalize():"")])}return b}});Fx.Transition=function(b,a){var a=Array.from(a),c=function(c){return b(c,a)};return Object.append(c,{easeIn:c,easeOut:function(c){return 1-b(1-c,a)},easeInOut:function(c){return(c<=0.5?b(2*c,a):2-b(2*(1-c),a))/2}})};Fx.Transitions={linear:function(b){return b}};
Fx.Transitions.extend=function(b){for(var a in b)Fx.Transitions[a]=new Fx.Transition(b[a])};
Fx.Transitions.extend({Pow:function(b,a){return Math.pow(b,a&&a[0]||6)},Expo:function(b){return Math.pow(2,8*(b-1))},Circ:function(b){return 1-Math.sin(Math.acos(b))},Sine:function(b){return 1-Math.cos(b*Math.PI/2)},Back:function(b,a){a=a&&a[0]||1.618;return Math.pow(b,2)*((a+1)*b-a)},Bounce:function(b){for(var a,c=0,d=1;;c=c+d,d=d/2)if(b>=(7-4*c)/11){a=d*d-Math.pow((11-6*c-11*b)/4,2);break}return a},Elastic:function(b,a){return Math.pow(2,10*--b)*Math.cos(20*b*Math.PI*(a&&a[0]||1)/3)}});
["Quad","Cubic","Quart","Quint"].each(function(b,a){Fx.Transitions[b]=new Fx.Transition(function(b){return Math.pow(b,a+2)})});
(function(){var b=function(){},a="onprogress"in new Browser.Request,c=this.Request=new Class({Implements:[Chain,Events,Options],options:{url:"",data:"",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"text/javascript, text/html, application/xml, text/xml, */*"},async:true,format:false,method:"post",link:"ignore",isSuccess:null,emulation:true,urlEncoded:true,encoding:"utf-8",evalScripts:false,evalResponse:false,timeout:0,noCache:false},initialize:function(a){this.xhr=new Browser.Request;this.setOptions(a);
this.headers=this.options.headers},onStateChange:function(){var c=this.xhr;if(c.readyState==4&&this.running){this.running=false;this.status=0;Function.attempt(function(){var a=c.status;this.status=a==1223?204:a}.bind(this));c.onreadystatechange=b;if(a)c.onprogress=c.onloadstart=b;clearTimeout(this.timer);this.response={text:this.xhr.responseText||"",xml:this.xhr.responseXML};this.options.isSuccess.call(this,this.status)?this.success(this.response.text,this.response.xml):this.failure()}},isSuccess:function(){var a=
this.status;return a>=200&&a<300},isRunning:function(){return!!this.running},processScripts:function(a){return this.options.evalResponse||/(ecma|java)script/.test(this.getHeader("Content-type"))?Browser.exec(a):a.stripScripts(this.options.evalScripts)},success:function(a,b){this.onSuccess(this.processScripts(a),b)},onSuccess:function(){this.fireEvent("complete",arguments).fireEvent("success",arguments).callChain()},failure:function(){this.onFailure()},onFailure:function(){this.fireEvent("complete").fireEvent("failure",
this.xhr)},loadstart:function(a){this.fireEvent("loadstart",[a,this.xhr])},progress:function(a){this.fireEvent("progress",[a,this.xhr])},timeout:function(){this.fireEvent("timeout",this.xhr)},setHeader:function(a,b){this.headers[a]=b;return this},getHeader:function(a){return Function.attempt(function(){return this.xhr.getResponseHeader(a)}.bind(this))},check:function(){if(!this.running)return true;switch(this.options.link){case "cancel":this.cancel();return true;case "chain":this.chain(this.caller.pass(arguments,
this))}return false},send:function(b){if(!this.check(b))return this;this.options.isSuccess=this.options.isSuccess||this.isSuccess;this.running=true;var c=typeOf(b);if(c=="string"||c=="element")b={data:b};var c=this.options,b=Object.append({data:c.data,url:c.url,method:c.method},b),c=b.data,d=""+b.url,b=b.method.toLowerCase();switch(typeOf(c)){case "element":c=document.id(c).toQueryString();break;case "object":case "hash":c=Object.toQueryString(c)}if(this.options.format)var i="format="+this.options.format,
c=c?i+"&"+c:i;if(this.options.emulation&&!["get","post"].contains(b)){b="_method="+b;c=c?b+"&"+c:b;b="post"}this.options.urlEncoded&&["post","put"].contains(b)&&(this.headers["Content-type"]="application/x-www-form-urlencoded"+(this.options.encoding?"; charset="+this.options.encoding:""));if(!d)d=document.location.pathname;i=d.lastIndexOf("/");if(i>-1&&(i=d.indexOf("#"))>-1)d=d.substr(0,i);this.options.noCache&&(d=d+((d.contains("?")?"&":"?")+String.uniqueID()));if(c&&b=="get"){d=d+((d.contains("?")?
"&":"?")+c);c=null}var j=this.xhr;if(a){j.onloadstart=this.loadstart.bind(this);j.onprogress=this.progress.bind(this)}j.open(b.toUpperCase(),d,this.options.async,this.options.user,this.options.password);if(this.options.user&&"withCredentials"in j)j.withCredentials=true;j.onreadystatechange=this.onStateChange.bind(this);Object.each(this.headers,function(a,b){try{j.setRequestHeader(b,a)}catch(c){this.fireEvent("exception",[b,a])}},this);this.fireEvent("request");j.send(c);if(this.options.async){if(this.options.timeout)this.timer=
this.timeout.delay(this.options.timeout,this)}else this.onStateChange();return this},cancel:function(){if(!this.running)return this;this.running=false;var c=this.xhr;c.abort();clearTimeout(this.timer);c.onreadystatechange=b;if(a)c.onprogress=c.onloadstart=b;this.xhr=new Browser.Request;this.fireEvent("cancel");return this}}),d={};["get","post","put","delete","GET","POST","PUT","DELETE"].each(function(a){d[a]=function(b){var c={method:a};if(b!=null)c.data=b;return this.send(c)}});c.implement(d);Element.Properties.send=
{set:function(a){this.get("send").cancel().setOptions(a);return this},get:function(){var a=this.retrieve("send");if(!a){a=new c({data:this,link:"cancel",method:this.get("method")||"post",url:this.get("action")});this.store("send",a)}return a}};Element.implement({send:function(a){var b=this.get("send");b.send({data:this,url:a||b.options.url});return this}})})();
Request.HTML=new Class({Extends:Request,options:{update:!1,append:!1,evalScripts:!0,filter:!1,headers:{Accept:"text/html, application/xml, text/xml, */*"}},success:function(b){var a=this.options,c=this.response;c.html=b.stripScripts(function(a){c.javascript=a});if(b=c.html.match(/<body[^>]*>([\s\S]*?)<\/body>/i))c.html=b[1];b=(new Element("div")).set("html",c.html);c.tree=b.childNodes;c.elements=b.getElements(a.filter||"*");if(a.filter)c.tree=c.elements;if(a.update){b=document.id(a.update).empty();
a.filter?b.adopt(c.elements):b.set("html",c.html)}else if(a.append){var d=document.id(a.append);a.filter?c.elements.reverse().inject(d):d.adopt(b.getChildren())}a.evalScripts&&Browser.exec(c.javascript);this.onSuccess(c.tree,c.elements,c.html,c.javascript)}});Element.Properties.load={set:function(b){this.get("load").cancel().setOptions(b);return this},get:function(){var b=this.retrieve("load");if(!b){b=new Request.HTML({data:this,link:"cancel",update:this,method:"get"});this.store("load",b)}return b}};
Element.implement({load:function(){this.get("load").send(Array.link(arguments,{data:Type.isObject,url:Type.isString}));return this}});"undefined"==typeof JSON&&(this.JSON={});
(function(){var b={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},a=function(a){return b[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)};JSON.validate=function(a){a=a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");return/^[\],:{}\s]*$/.test(a)};JSON.encode=JSON.stringify?function(a){return JSON.stringify(a)}:function(b){b&&b.toJSON&&
(b=b.toJSON());switch(typeOf(b)){case "string":return'"'+b.replace(/[\x00-\x1f\\"]/g,a)+'"';case "array":return"["+b.map(JSON.encode).clean()+"]";case "object":case "hash":var d=[];Object.each(b,function(a,b){var c=JSON.encode(a);c&&d.push(JSON.encode(b)+":"+c)});return"{"+d+"}";case "number":case "boolean":return""+b;case "null":return"null"}return null};JSON.decode=function(a,b){if(!a||typeOf(a)!="string")return null;if(b||JSON.secure){if(JSON.parse)return JSON.parse(a);if(!JSON.validate(a))throw Error("JSON could not decode the input; security is enabled and the value is not secure.");
}return eval("("+a+")")}})();Request.JSON=new Class({Extends:Request,options:{secure:!0},initialize:function(b){this.parent(b);Object.append(this.headers,{Accept:"application/json","X-Request":"JSON"})},success:function(b){var a;try{a=this.response.json=JSON.decode(b,this.options.secure)}catch(c){this.fireEvent("error",[b,c]);return}if(a==null)this.onFailure();else this.onSuccess(a,b)}});
var Cookie=new Class({Implements:Options,options:{path:"/",domain:!1,duration:!1,secure:!1,document:document,encode:!0},initialize:function(b,a){this.key=b;this.setOptions(a)},write:function(b){this.options.encode&&(b=encodeURIComponent(b));this.options.domain&&(b=b+("; domain="+this.options.domain));this.options.path&&(b=b+("; path="+this.options.path));if(this.options.duration){var a=new Date;a.setTime(a.getTime()+this.options.duration*864E5);b=b+("; expires="+a.toGMTString())}this.options.secure&&
(b=b+"; secure");this.options.document.cookie=this.key+"="+b;return this},read:function(){var b=this.options.document.cookie.match("(?:^|;)\\s*"+this.key.escapeRegExp()+"=([^;]*)");return b?decodeURIComponent(b[1]):null},dispose:function(){(new Cookie(this.key,Object.merge({},this.options,{duration:-1}))).write("");return this}});Cookie.write=function(b,a,c){return(new Cookie(b,c)).write(a)};Cookie.read=function(b){return(new Cookie(b)).read()};Cookie.dispose=function(b,a){return(new Cookie(b,a)).dispose()};
(function(b,a){var c,d,e=[],f,g,i=a.createElement("div"),j=function(){clearTimeout(g);if(!c){Browser.loaded=c=true;a.removeListener("DOMContentLoaded",j).removeListener("readystatechange",m);a.fireEvent("domready");b.fireEvent("domready")}},m=function(){for(var a=e.length;a--;)if(e[a]()){j();return true}return false},h=function(){clearTimeout(g);m()||(g=setTimeout(h,10))};a.addListener("DOMContentLoaded",j);var k=function(){try{i.doScroll();return true}catch(a){}return false};if(i.doScroll&&!k()){e.push(k);
f=true}a.readyState&&e.push(function(){var b=a.readyState;return b=="loaded"||b=="complete"});"onreadystatechange"in a?a.addListener("readystatechange",m):f=true;f&&h();Element.Events.domready={onAdd:function(a){c&&a.call(this)}};Element.Events.load={base:"load",onAdd:function(a){d&&this==b&&a.call(this)},condition:function(){if(this==b){j();delete Element.Events.load}return true}};b.addEvent("load",function(){d=true})})(window,document);
(function(){var b=this.Swiff=new Class({Implements:Options,options:{id:null,height:1,width:1,container:null,properties:{},params:{quality:"high",allowScriptAccess:"always",wMode:"window",swLiveConnect:true},callBacks:{},vars:{}},toElement:function(){return this.object},initialize:function(a,c){this.instance="Swiff_"+String.uniqueID();this.setOptions(c);var c=this.options,d=this.id=c.id||this.instance,e=document.id(c.container);b.CallBacks[this.instance]={};var f=c.params,g=c.vars,i=c.callBacks,j=
Object.append({height:c.height,width:c.width},c.properties),m=this,h;for(h in i){b.CallBacks[this.instance][h]=function(a){return function(){return a.apply(m.object,arguments)}}(i[h]);g[h]="Swiff.CallBacks."+this.instance+"."+h}f.flashVars=Object.toQueryString(g);if(Browser.ie){j.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";f.movie=a}else j.type="application/x-shockwave-flash";j.data=a;var d='<object id="'+d+'"',k;for(k in j)d=d+(" "+k+'="'+j[k]+'"');var d=d+">",o;for(o in f)f[o]&&(d=d+('<param name="'+
o+'" value="'+f[o]+'" />'));this.object=(e?e.empty():new Element("div")).set("html",d+"</object>").firstChild},replaces:function(a){a=document.id(a,true);a.parentNode.replaceChild(this.toElement(),a);return this},inject:function(a){document.id(a,true).appendChild(this.toElement());return this},remote:function(){return b.remote.apply(b,[this.toElement()].append(arguments))}});b.CallBacks={};b.remote=function(a,b){var d=a.CallFunction('<invoke name="'+b+'" returntype="javascript">'+__flash__argumentsToXML(arguments,
2)+"</invoke>");return eval(d)}})();;

Joomla=window.Joomla||{};Joomla.editors={};Joomla.editors.instances={};Joomla.submitform=function(a,b){if(typeof(b)==="undefined"){b=document.getElementById("adminForm")}if(typeof(a)!=="undefined"&&a!==""){b.task.value=a}if(typeof b.onsubmit=="function"){b.onsubmit()}if(typeof b.fireEvent=="function"){b.fireEvent("submit")}b.submit()};Joomla.submitbutton=function(a){Joomla.submitform(a)};Joomla.JText={strings:{},_:function(a,b){return typeof this.strings[a.toUpperCase()]!=="undefined"?this.strings[a.toUpperCase()]:b},load:function(a){for(var b in a){this.strings[b.toUpperCase()]=a[b]}return this}};Joomla.replaceTokens=function(c){var b=document.getElementsByTagName("input"),a;for(a=0;a<b.length;a++){if((b[a].type=="hidden")&&(b[a].name.length==32)&&b[a].value=="1"){b[a].name=c}}};Joomla.isEmail=function(b){var a=new RegExp("^[\\w-_.]*[\\w-_.]@[\\w].+[\\w]+[\\w]$");return a.test(b)};Joomla.checkAll=function(b,f){if(!f){f="cb"}if(b.form){var g=0,a,d;for(a=0,n=b.form.elements.length;a<n;a++){d=b.form.elements[a];if(d.type==b.type){if((f&&d.id.indexOf(f)==0)||!f){d.checked=b.checked;g+=(d.checked==true?1:0)}}}if(b.form.boxchecked){b.form.boxchecked.value=g}return true}return false};Joomla.renderMessages=function(d){var e=jQuery.noConflict(),g,b,a,f,c;Joomla.removeMessages();g=e("#system-message-container");e.each(d,function(h,j){b=e("<div/>",{id:"system-message","class":"alert alert-"+h});g.append(b);a=e("<h4/>",{"class":"alert-heading",text:Joomla.JText._(h)});b.append(a);f=e("<div/>");e.each(j,function(k,l){c=e("<p/>",{html:l});f.append(c)});b.append(f)})};Joomla.removeMessages=function(){jQuery("#system-message-container").empty()};Joomla.isChecked=function(a,d){if(typeof(d)==="undefined"){d=document.getElementById("adminForm")}if(a==true){d.boxchecked.value++}else{d.boxchecked.value--}var g=true,b,f;for(b=0,n=d.elements.length;b<n;b++){f=d.elements[b];if(f.type=="checkbox"){if(f.name!="checkall-toggle"&&f.checked==false){g=false;break}}}if(d.elements["checkall-toggle"]){d.elements["checkall-toggle"].checked=g}};Joomla.popupWindow=function(e,k,j,c,f){var g=(screen.width-j)/2,b,a,d;b=(screen.height-c)/2;a="height="+c+",width="+j+",top="+b+",left="+g+",scrollbars="+f+",resizable";d=window.open(e,k,a);d.window.focus()};Joomla.tableOrdering=function(a,c,b,d){if(typeof(d)==="undefined"){d=document.getElementById("adminForm")}d.filter_order.value=a;d.filter_order_Dir.value=c;Joomla.submitform(b,d)};function writeDynaList(e,g,d,h,a){var c="\n  <select "+e+">",b,f;b=0;for(x in g){if(g[x][0]==d){f="";if((h==d&&a==g[x][1])||(b==0&&h!=d)){f='selected="selected"'}c+='\n     <option value="'+g[x][1]+'" '+f+">"+g[x][2]+"</option>"}b++}c+="\n </select>";document.writeln(c)}function changeDynaList(c,e,b,f,a){var d=document.adminForm[c];for(i in d.options.length){d.options[i]=null}i=0;for(x in e){if(e[x][0]==b){opt=new Option();opt.value=e[x][1];opt.text=e[x][2];if((f==b&&a==opt.value)||i==0){opt.selected=true}d.options[i++]=opt}}d.length=i}function radioGetCheckedValue(b){if(!b){return""}var c=b.length,a;if(c==undefined){if(b.checked){return b.value}else{return""}}for(a=0;a<c;a++){if(b[a].checked){return b[a].value}}return""}function getSelectedValue(b,a){var c=document[b],d=c[a];i=d.selectedIndex;if(i!=null&&i>-1){return d.options[i].value}else{return null}}function listItemTask(g,b){var d=document.adminForm,c,e,a=d[g];if(a){for(c=0;true;c++){e=d["cb"+c];if(!e){break}e.checked=false}a.checked=true;d.boxchecked.value=1;submitbutton(b)}return false}function submitbutton(a){submitform(a)}function submitform(a){if(a){document.adminForm.task.value=a}if(typeof document.adminForm.onsubmit=="function"){document.adminForm.onsubmit()}if(typeof document.adminForm.fireEvent=="function"){document.adminForm.fireEvent("submit")}document.adminForm.submit()}function saveorder(b,a){checkAll_button(b,a)}function checkAll_button(d,a){if(!a){a="saveorder"}var b,c;for(b=0;b<=d;b++){c=document.adminForm["cb"+b];if(c){if(c.checked==false){c.checked=true}}else{alert("You cannot change the order of items, as an item in the list is `Checked Out`");return}}submitform(a)};;

if (typeof jQuery === 'undefined') { throw new Error('Bootstrap\'s JavaScript requires jQuery') }
+function ($) {
  'use strict';
  function transitionEnd() {
    var el = document.createElement('bootstrap')
    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd',
      'MozTransition'    : 'transitionend',
      'OTransition'      : 'oTransitionEnd otransitionend',
      'transition'       : 'transitionend'
    }
    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
    return false 
  }
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }
  $(function () {
    $.support.transition = transitionEnd()
  })
}(jQuery);
+function ($) {
  'use strict';
  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }
  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')
    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') 
    }
    var $parent = $(selector)
    if (e) e.preventDefault()
    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }
    $parent.trigger(e = $.Event('close.bs.alert'))
    if (e.isDefaultPrevented()) return
    $parent.removeClass('in')
    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }
    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }
  var old = $.fn.alert
  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')
      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }
  $.fn.alert.Constructor = Alert
  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }
  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)
}(jQuery);
+function ($) {
  'use strict';
  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }
  Button.DEFAULTS = {
    loadingText: 'loading...'
  }
  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()
    state = state + 'Text'
    if (!data.resetText) $el.data('resetText', $el[val]())
    $el[val](data[state] || this.options[state])
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }
  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')
    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }
    if (changed) this.$element.toggleClass('active')
  }
  var old = $.fn.button
  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option
      if (!data) $this.data('bs.button', (data = new Button(this, options)))
      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }
  $.fn.button.Constructor = Button
  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }
  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })
}(jQuery);
+function ($) {
  'use strict';
  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null
    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }
  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  }
  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)
    this.interval && clearInterval(this.interval)
    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
    return this
  }
  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()
    return this.$items.index(this.$active)
  }
  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()
    if (pos > (this.$items.length - 1) || pos < 0) return
    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()
    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }
  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)
    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }
    this.interval = clearInterval(this.interval)
    return this
  }
  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }
  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }
  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this
    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }
    if ($next.hasClass('active')) return this.sliding = false
    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })
    this.$element.trigger(e)
    if (e.isDefaultPrevented()) return
    this.sliding = true
    isCycling && this.pause()
    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid.bs.carousel', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth 
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid.bs.carousel') }, 0)
        })
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid.bs.carousel')
    }
    isCycling && this.cycle()
    return this
  }
  var old = $.fn.carousel
  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide
      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }
  $.fn.carousel.Constructor = Carousel
  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }
  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) 
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false
    $target.carousel(options)
    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }
    e.preventDefault()
  })
  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })
}(jQuery);
+function ($) {
  'use strict';
  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null
    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }
  Collapse.DEFAULTS = {
    toggle: true
  }
  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }
  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return
    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return
    var actives = this.$parent && this.$parent.find('> .panel > .in')
    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }
    var dimension = this.dimension()
    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)
    this.transitioning = 1
    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }
    if (!$.support.transition) return complete.call(this)
    var scrollSize = $.camelCase(['scroll', dimension].join('-'))
    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }
  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return
    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return
    var dimension = this.dimension()
    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight
    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')
    this.transitioning = 1
    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }
    if (!$.support.transition) return complete.call(this)
    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }
  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }
  var old = $.fn.collapse
  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)
      if (!data && options.toggle && option == 'show') option = !option
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }
  $.fn.collapse.Constructor = Collapse
  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }
  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') 
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)
    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }
    $target.collapse(option)
  })
}(jQuery);
+function ($) {
  'use strict';
  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }
  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)
    if ($this.is('.disabled, :disabled')) return
    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')
    clearMenus()
    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }
      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
      $this.focus()
    }
    return false
  }
  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return
    var $this = $(this)
    e.preventDefault()
    e.stopPropagation()
    if ($this.is('.disabled, :disabled')) return
    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')
    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }
    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role=menu]' + desc + ', [role=listbox]' + desc)
    if (!$items.length) return
    var index = $items.index($items.filter(':focus'))
    if (e.keyCode == 38 && index > 0)                 index--                        
    if (e.keyCode == 40 && index < $items.length - 1) index++                        
    if (!~index)                                      index = 0
    $items.eq(index).focus()
  }
  function clearMenus(e) {
    $(backdrop).remove()
    $(toggle).each(function () {
      var $parent = getParent($(this))
      var relatedTarget = { relatedTarget: this }
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }
  function getParent($this) {
    var selector = $this.attr('data-target')
    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') 
    }
    var $parent = selector && $(selector)
    return $parent && $parent.length ? $parent : $this.parent()
  }
  var old = $.fn.dropdown
  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')
      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }
  $.fn.dropdown.Constructor = Dropdown
  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }
  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu], [role=listbox]', Dropdown.prototype.keydown)
}(jQuery);
+function ($) {
  'use strict';
  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null
    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }
  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }
  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }
  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })
    this.$element.trigger(e)
    if (this.isShown || e.isDefaultPrevented()) return
    this.isShown = true
    this.escape()
    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))
    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')
      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) 
      }
      that.$element
        .show()
        .scrollTop(0)
      if (transition) {
        that.$element[0].offsetWidth 
      }
      that.$element
        .addClass('in')
        .attr('aria-hidden', false)
      that.enforceFocus()
      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })
      transition ?
        that.$element.find('.modal-dialog') 
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }
  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()
    e = $.Event('hide.bs.modal')
    this.$element.trigger(e)
    if (!this.isShown || e.isDefaultPrevented()) return
    this.isShown = false
    this.escape()
    $(document).off('focusin.bs.modal')
    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')
    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }
  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') 
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }
  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }
  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }
  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }
  Modal.prototype.backdrop = function (callback) {
    var animate = this.$element.hasClass('fade') ? 'fade' : ''
    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate
      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)
      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))
      if (doAnimate) this.$backdrop[0].offsetWidth 
      this.$backdrop.addClass('in')
      if (!callback) return
      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()
    } else if (callback) {
      callback()
    }
  }
  var old = $.fn.modal
  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }
  $.fn.modal.Constructor = Modal
  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }
  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) 
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())
    if ($this.is('a')) e.preventDefault()
    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })
  $(document)
    .on('show.bs.modal', '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })
}(jQuery);
+function ($) {
  'use strict';
  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null
    this.init('tooltip', element, options)
  }
  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false
  }
  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)
    var triggers = this.options.trigger.split(' ')
    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]
      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'
        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }
    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }
  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }
  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)
    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }
    return options
  }
  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()
    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })
    return options
  }
  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)
    clearTimeout(self.timeout)
    self.hoverState = 'in'
    if (!self.options.delay || !self.options.delay.show) return self.show()
    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }
  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)
    clearTimeout(self.timeout)
    self.hoverState = 'out'
    if (!self.options.delay || !self.options.delay.hide) return self.hide()
    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }
  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      var that = this;
      var $tip = this.tip()
      this.setContent()
      if (this.options.animation) $tip.addClass('fade')
      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement
      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'
      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight
      if (autoPlace) {
        var $parent = this.$element.parent()
        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left
        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement
        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }
      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)
      this.applyPlacement(calculatedOffset, placement)
      this.hoverState = null
      var complete = function() {
        that.$element.trigger('shown.bs.' + that.type)
      }
      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one($.support.transition.end, complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }
  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0
    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)
    $tip.addClass('in')
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight
    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }
    if (/bottom|top/.test(placement)) {
      var delta = 0
      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0
        $tip.offset(offset)
        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }
      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }
    if (replace) $tip.offset(offset)
  }
  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }
  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()
    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }
  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)
    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }
    this.$element.trigger(e)
    if (e.isDefaultPrevented()) return
    $tip.removeClass('in')
    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()
    this.hoverState = null
    return this
  }
  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }
  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }
  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth,
      height: el.offsetHeight
    }, this.$element.offset())
  }
  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
         { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }
  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options
    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)
    return title
  }
  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }
  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }
  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }
  Tooltip.prototype.enable = function () {
    this.enabled = true
  }
  Tooltip.prototype.disable = function () {
    this.enabled = false
  }
  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }
  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }
  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }
  var old = $.fn.tooltip
  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option
      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }
  $.fn.tooltip.Constructor = Tooltip
  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }
}(jQuery);
+function ($) {
  'use strict';
  var Popover = function (element, options) {
    this.init('popover', element, options)
  }
  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')
  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })
  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)
  Popover.prototype.constructor = Popover
  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }
  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()
    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[ 
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)
    $tip.removeClass('fade top bottom left right in')
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }
  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }
  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options
    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }
  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }
  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }
  var old = $.fn.popover
  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option
      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }
  $.fn.popover.Constructor = Popover
  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }
}(jQuery);
+function ($) {
  'use strict';
  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)
    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) 
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null
    this.refresh()
    this.process()
  }
  ScrollSpy.DEFAULTS = {
    offset: 10
  }
  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'
    this.offsets = $([])
    this.targets = $([])
    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)
        return ($href
          && $href.length
          && $href.is(':visible')
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }
  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i
    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }
    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }
    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }
  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'
    var active = $(selector)
      .parents('li')
      .addClass('active')
    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }
    active.trigger('activate.bs.scrollspy')
  }
  var old = $.fn.scrollspy
  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option
      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }
  $.fn.scrollspy.Constructor = ScrollSpy
  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }
  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })
}(jQuery);
+function ($) {
  'use strict';
  var Tab = function (element) {
    this.element = $(element)
  }
  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')
    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') 
    }
    if ($this.parent('li').hasClass('active')) return
    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })
    $this.trigger(e)
    if (e.isDefaultPrevented()) return
    var $target = $(selector)
    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      })
    })
  }
  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')
    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')
      element.addClass('active')
      if (transition) {
        element[0].offsetWidth 
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }
      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }
      callback && callback()
    }
    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()
    $active.removeClass('in')
  }
  var old = $.fn.tab
  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')
      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }
  $.fn.tab.Constructor = Tab
  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }
  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
}(jQuery);
+function ($) {
  'use strict';
  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))
    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null
    this.checkPosition()
  }
  Affix.RESET = 'affix affix-top affix-bottom'
  Affix.DEFAULTS = {
    offset: 0
  }
  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$window.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }
  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }
  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return
    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    if (this.affixed == 'top') position.top += scrollTop
    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)
    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false
    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')
    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')
    this.$element.trigger(e)
    if (e.isDefaultPrevented()) return
    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null
    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))
    if (affix == 'bottom') {
      this.$element.offset({ top: scrollHeight - offsetBottom - this.$element.height() })
    }
  }
  var old = $.fn.affix
  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option
      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }
  $.fn.affix.Constructor = Affix
  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }
  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()
      data.offset = data.offset || {}
      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop
      $spy.affix(data)
    })
  })
}(jQuery);;

jQuery (document).ready(function($){
    if (/MSIE\s([\d.]+)/.test(navigator.userAgent) ? new Number(RegExp.$1) < 10 : false) {
        $('html').addClass ('old-ie');
    } else if(/constructor/i.test(window.HTMLElement)){
        $('html').addClass('safari');
    }
    var $wrapper = $('body'),
        $inner = $('.t3-wrapper'),
        $toggles = $('.off-canvas-toggle'),
        $offcanvas = $('.t3-off-canvas'),
        $close = $('.t3-off-canvas .close'),
        $btn=null,
        $nav=null,
        direction = 'left',
        $fixed = null;
    if (!$wrapper.length) return ;
    $toggles.each (function () {
        var $this = $(this),
            $nav = $($this.data('nav')),
            effect = $this.data('effect'),
            direction = ($('html').attr('dir') == 'rtl' && $this.data('pos')!='right') || ($('html').attr('dir') != 'rtl' && $this.data('pos')=='right')  ? 'right':'left';
        $nav.addClass (effect).addClass ('off-canvas-'+direction);
        var inside_effect = ['off-canvas-effect-3','off-canvas-effect-16','off-canvas-effect-7','off-canvas-effect-8','off-canvas-effect-14'];
        if ($.inArray(effect, inside_effect) == -1) {
            $inner.before($nav);
        } else {
            $inner.prepend($nav);
        }
    });
    $toggles.on('tap', function(e){
        stopBubble (e);
        if ($wrapper.hasClass ('off-canvas-open')) {
            oc_hide (e);
            return false;
        }
        $btn = $(this);
        $nav = $($btn.data('nav'));
        $fixed = $inner.find('*').filter (function() {return $(this).css("position") === 'fixed';});
        $nav.addClass ('off-canvas-current');
        direction = ($('html').attr('dir') == 'rtl' && $btn.data('pos')!='right') || ($('html').attr('dir') != 'rtl' && $btn.data('pos')=='right')  ? 'right':'left';
        $offcanvas.height($(window).height());
        var events = $(window).data('events');
        if (events && events.scroll && events.scroll.length) {
          var handlers = [];
          for (var i=0; i<events.scroll.length; i++){
            handlers[i] = events.scroll[i].handler;
          }
          $(window).data('scroll-events', handlers);
          $(window).off ('scroll');
        }
        var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); 
        $('html').addClass('noscroll').css('top',-scrollTop).data('top', scrollTop);
        $('.t3-off-canvas').css('top',scrollTop);
        $fixed.each (function () {
            var $this = $(this),
                $parent = $this.parent(),
                mtop = 0;
            while (!$parent.is($inner) && $parent.css("position") === 'static') $parent = $parent.parent();
            mtop = -$parent.offset().top;
            $this.css ({'position': 'absolute', 'margin-top': mtop});
        });
        $wrapper.scrollTop (scrollTop);
        $wrapper[0].className = $wrapper[0].className.replace (/\s*off\-canvas\-effect\-\d+\s*/g, ' ').trim() +
            ' ' + $btn.data('effect') + ' ' + 'off-canvas-' + direction;
        setTimeout(oc_show, 50);
        return false;
    });
    var oc_show = function () {
        $wrapper.addClass ('off-canvas-open');
        $inner.on ('click', oc_hide);
        $close.on ('click', oc_hide);
        $offcanvas.on ('click', stopBubble);
        if ($.browser.msie && $.browser.version < 10) {
            var p1 = {}, p2 = {};
            p1['padding-'+direction] = $('.t3-off-canvas').width();
            p2[direction] = 0;
            $inner.animate (p1);
            $nav.animate (p2);
        }
    };
    var oc_hide = function () {
        //remove events
        $inner.off ('tab', oc_hide);
        $close.off ('click', oc_hide);
        $offcanvas.off ('click', stopBubble);
        //delay for click action
        setTimeout(function(){
            $wrapper.removeClass ('off-canvas-open');
        }, 100);
        setTimeout (function (){
            $wrapper.removeClass ($btn.data('effect')).removeClass ('off-canvas-'+direction);
            $wrapper.scrollTop (0);
            $('html').removeClass ('noscroll').css('top', '');
            $('html,body').scrollTop ($('html').data('top'));
            $nav.removeClass ('off-canvas-current');
            $fixed.css ({'position': '', 'margin-top': ''});
            if ($(window).data('scroll-events')) {
              var handlers = $(window).data('scroll-events');
              for (var i=0; i<handlers.length; i++) {
                $(window).on ('scroll', handlers[i]);
              }
              $(window).data('scroll-events', null);
            }
        }, 550);
        if ($('html').hasClass ('old-ie')) {
            var p1 = {}, p2 = {};
            p1['padding-'+direction] = 0;
            p2[direction] = -$('.t3-off-canvas').width();
            $inner.animate (p1);
            $nav.animate (p2);
        }
    };
    var stopBubble = function (e) {
        e.stopPropagation();
        return true;
    }
});

!function($){
	if (match = navigator.userAgent.match (/MSIE ([0-9]{1,}[\.0-9]{0,})/) || navigator.userAgent.match (/Trident.*rv:([0-9]{1,}[\.0-9]{0,})/)) {
			$('html').addClass('ie'+parseInt (match[1]));
	}
	$(document).ready(function(){
			if (!window.getComputedStyle) {
					window.getComputedStyle = function(el, pseudo) {
							this.el = el;
							this.getPropertyValue = function(prop) {
									var re = /(\-([a-z]){1})/g;
									if (prop == 'float') prop = 'styleFloat';
									if (re.test(prop)) {
											prop = prop.replace(re, function () {
													return arguments[2].toUpperCase();
											});
									}
									return el.currentStyle[prop] ? el.currentStyle[prop] : null;
							}
							return this;
					}
			}
			var fromClass = 'body-data-holder',
					prop = 'content',
					$inspector = $('<div>').css('display', 'none').addClass(fromClass).appendTo($('body'));
			try {
					var attrs = window.getComputedStyle(
							$inspector[0], ':before'
					).getPropertyValue(prop);
					if(attrs){
							var matches = attrs.match(/([\da-z\-]+)/gi),
									data = {};
							if (matches && matches.length) {
									for (var i=0; i<matches.length; i++) {
											data[matches[i++]] = i<matches.length ? matches[i] : null;
									}
							}
							$('body').data (data);
					}
			} finally {
					$inspector.remove(); 
			}
	});
	//detect transform (https://github.com/cubiq/)
	(function(){
		$.support.t3transform = (function () {
			var style = document.createElement('div').style,
			vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform, i = 0, l = vendors.length;
			for ( ; i < l; i++ ) {
				transform = vendors[i] + 'ransform';
				if ( transform in style ) {
					return transform;
				}
			}
			return false;
		})();
	})();
	//basic detect touch
	(function(){
		$('html').addClass('ontouchstart' in window ? 'touch' : 'no-touch');
	})();
	//document ready
	$(document).ready(function(){
		//remove conflict of mootools more show/hide function of element
		(function(){
			if(window.MooTools && window.MooTools.More && Element && Element.implement){
				var mthide = Element.prototype.hide,
					mtshow = Element.prototype.show,
					mtslide = Element.prototype.slide;
				Element.implement({
					show: function(args){
						if(arguments.callee &&
							arguments.callee.caller &&
							arguments.callee.caller.toString().indexOf('isPropagationStopped') !== -1){	//jquery mark
							return this;
						}
						return $.isFunction(mtshow) && mtshow.apply(this, args);
					},
					hide: function(){
						if(arguments.callee &&
							arguments.callee.caller &&
							arguments.callee.caller.toString().indexOf('isPropagationStopped') !== -1){	//jquery mark
							return this;
						}
						return $.isFunction(mthide) && mthide.apply(this, arguments);
					},
					slide: function(args){
						if(arguments.callee &&
							arguments.callee.caller &&
							arguments.callee.caller.toString().indexOf('isPropagationStopped') !== -1){	//jquery mark
							return this;
						}
						return $.isFunction(mtslide) && mtslide.apply(this, args);
					}
				})
			}
		})();
		$.fn.tooltip.Constructor && $.fn.tooltip.Constructor.DEFAULTS && ($.fn.tooltip.Constructor.DEFAULTS.html = true);
		$.fn.popover.Constructor && $.fn.popover.Constructor.DEFAULTS && ($.fn.popover.Constructor.DEFAULTS.html = true);
		$.fn.tooltip.defaults && ($.fn.tooltip.defaults.html = true);
		$.fn.popover.defaults && ($.fn.popover.defaults.html = true);
		//fix JomSocial navbar-collapse toggle
		(function(){
			if(window.jomsQuery && jomsQuery.fn.collapse){
				$('[data-toggle="collapse"]').on('click', function(e){
					//toggle manual
					$($(this).attr('data-target')).eq(0).collapse('toggle');
					e.stopPropagation();
					return false;
				});
				//remove conflict on touch screen
				jomsQuery('html, body').off('touchstart.dropdown.data-api');
			}	
		})();
		//fix chosen select
		(function(){
			if($.fn.chosen && $(document.documentElement).attr('dir') == 'rtl'){
				$('select').addClass('chzn-rtl');
			}	
		})();
	});
	$(window).load(function(){
		//fix animation for navbar-collapse-fixed-top||bottom
		if(!$(document.documentElement).hasClass('off-canvas-ready') &&
			($('.navbar-collapse-fixed-top').length ||
			$('.navbar-collapse-fixed-bottom').length)){
			var btn = $('.btn-navbar[data-toggle="collapse"]');
			if (!btn.length){
				return;
			}
			if(btn.data('target')){
				var nav = $(btn.data('target'));
				if(!nav.length){
					return;
				}
				var fixedtop = nav.closest('.navbar-collapse-fixed-top').length;
				btn.on('click', function(){
					var wheight = (window.innerHeight || $(window).height());
					if(!$.support.transition){
						nav.parent().css('height', !btn.hasClass('collapsed') && btn.data('t3-clicked') ? '' : wheight);
						btn.data('t3-clicked', 1);
					}
					nav
						.addClass('animate')
						.css('max-height', wheight -
							(fixedtop ? (parseFloat(nav.css('top')) || 0) : (parseFloat(nav.css('bottom')) || 0)));
				});
				nav.on('shown hidden', function(){
					nav.removeClass('animate');
				});
			}
		}
	});
}(jQuery);
(function($){
	$(document).ready(function(){
		$('.page-header').remove();
		$('.btn-group.pull-right').remove();
		$('.article-image-intro img').css('width', '100%');
	});
})(jQuery);;

;(function($){
	var T3Menu = function(elm, options){
		this.$menu = $(elm);
		if (!this.$menu.length){
			return;
		}
		this.options = $.extend({}, $.fn.t3menu.defaults, options);
		this.child_open = [];
		this.loaded = false;
		this.start();
	};
	T3Menu.prototype = {
		constructor: T3Menu,
		start: function () {
			//init once
			if (this.loaded){
				return;
			}
			this.loaded = true;
			var self = this,
				options = this.options,
				$menu = this.$menu;
			this.$items = $menu.find('li');
			this.$items.each(function (idx, li) {
				var $item = $(this),
					$child = $item.children('.dropdown-menu'),
					$link = $item.children('a'),
					item = {
						$item: $item,
						child: $child.length,
						link: $link.length,
						clickable: !($link.length && $child.length),
						mega: $item.hasClass('mega'),
						status: 'close',
						timer: null,
						atimer: null
					};
				$item.data('t3menu.item', item);
				//click action
				if ($child.length && !options.hover) {
					$item.on('click', function (e) {
						e.stopPropagation();
						if ($item.hasClass('group')) {
							return;
						}
						if (item.status == 'close') {
							e.preventDefault();
							self.show(item);
						}
					});
				} else {
					$item.on('click', function (e) {
						e.stopPropagation()
					});
				}
                if (options.hover) {
                    $item.on('mouseover', function (e) {
                        if ($item.hasClass('group')) return ;
                        var $target = $(e.target);
                        if ($target.data('show-processed')) return ;
                        $target.data('show-processed', true);
                        setTimeout(function(){$target.data('show-processed', false);}, 10);
                        self.show(item);
                    }).on('mouseleave', function (e) {
                        if ($item.hasClass('group')) return ;
                        var $target = $(e.target);
                        if ($target.data('hide-processed')) return ;
                        $target.data('hide-processed', true);
                        setTimeout(function(){$target.data('hide-processed', false);}, 10);
                        self.hide(item);
                    });
                    //if has child, don't goto link before open child - fix for touch screen
                    if ($link.length && $child.length) {
                        $link.on('click', function (e) {
                            return item.clickable;
                        });
                    }
                }
			});
			$(document.body).on('tap hideall.t3menu', function(e){
				clearTimeout(self.timer);
				self.timer = setTimeout($.proxy(self.hide_alls, self), e.type == 'tap' ? 500 : self.options.hidedelay);
			});
		},
		show: function (item) {
			if($.inArray(item, this.child_open) < this.child_open.length -1){
				this.hide_others(item);
			}
			$(document.body).trigger('hideall.t3menu', [this]);
			clearTimeout(this.timer);		//hide alls
			clearTimeout(item.timer);		//hide this item
			clearTimeout(item.ftimer);	//on hidden
			clearTimeout(item.ctimer);	//on hidden
			if(item.status != 'open' || !item.$item.hasClass('open') || !this.child_open.length){
				if(item.mega){
					//remove timer
					clearTimeout(item.astimer);	//animate
					clearTimeout(item.atimer);	//animate
					//place menu
					this.position(item.$item);
					item.astimer = setTimeout(function(){item.$item.addClass('animating')}, 10);
					item.atimer = setTimeout(function(){item.$item.removeClass('animating')}, this.options.duration + 50);
					item.timer = setTimeout(function(){item.$item.addClass('open')}, 100);
				} else {
					item.$item.addClass('open');
				}
				item.status = 'open';
				if (item.child && $.inArray(item, this.child_open) == -1) {
					this.child_open.push(item);
				}
			}
			item.ctimer = setTimeout($.proxy(this.clickable, this, item), 300);
		},
		hide: function (item) {
			clearTimeout(this.timer);		//hide alls
			clearTimeout(item.timer);		//hide this item
			clearTimeout(item.astimer);	//animate timer
			clearTimeout(item.atimer);	//animate timer
			clearTimeout(item.ftimer);	//on hidden
			if(item.mega){
				//animate out
				item.$item.addClass('animating');
				item.atimer = setTimeout(function(){item.$item.removeClass('animating')}, this.options.duration);
				item.timer = setTimeout(function(){item.$item.removeClass('open')}, 100);
			} else {
				item.$item.removeClass('open');
			}
			item.status = 'close';
			for (var i = this.child_open.length; i--;){
				if (this.child_open[i] === item){
					this.child_open.splice(i, 1);
				}
			}
			item.ftimer = setTimeout($.proxy(this.hidden, this, item), this.options.duration);
			this.timer = setTimeout($.proxy(this.hide_alls, this), this.options.hidedelay);
		},
		hidden: function (item) {
			//hide done
			if (item.status == 'close') {
				item.clickable = false;
			}
		},
		hide_others: function (item) {
			var self = this;
			$.each(this.child_open.slice(), function (idx, open) {
				if (!item || (open != item && !open.$item.has(item.$item).length)) {
					self.hide(open);
				}
			});
		},
		hide_alls: function (e, inst) {
			if(!e || e.type == 'tap' || (e.type == 'hideall' && this != inst)){
				var self = this;
				$.each(this.child_open.slice(), function (idx, item) {
					item && self.hide(item);
				});
			}
		},
		clickable: function (item) {
			item.clickable = true;
		},
		position: function ($item) {
			var sub = $item.children('.mega-dropdown-menu'),
				is_show = sub.is(':visible');
			if(!is_show){
				sub.show();
			}
			var offset = $item.offset(),
				width = $item.outerWidth(),
				screen_width = $(window).width() - this.options.sb_width,
				sub_width = sub.outerWidth(),
				level = $item.data('level');
			if(!is_show){
				sub.css('display', '');
			}
			//reset custom align
			sub.css({left : '', right : ''});
			if(level == 1){
				var align = $item.data('alignsub'),
					align_offset = 0,
					align_delta = 0,
					align_trans = 0;
				if(align == 'justify'){
					return;	//do nothing
				}
				if(!align){
					align = 'left';
				}
				if(align == 'center'){
					align_offset = offset.left + (width /2);
					if(!$.support.t3transform){
						align_trans = -sub_width /2;
						sub.css(this.options.rtl ? 'right' : 'left', align_trans + width /2);
					}
				} else {
					align_offset = offset.left + ((align == 'left' && this.options.rtl || align == 'right' && !this.options.rtl) ? width : 0);
				}
				if (this.options.rtl) {
					if(align == 'right'){
						if(align_offset + sub_width > screen_width){
							align_delta = screen_width - align_offset - sub_width;
							sub.css('left', align_delta);
							if(screen_width < sub_width){
								sub.css('left', align_delta + sub_width - screen_width);
							}
						}
					} else {
						if(align_offset < (align == 'center' ? sub_width /2 : sub_width)){
							align_delta = align_offset - (align == 'center' ? sub_width /2 : sub_width);
							sub.css('right', align_delta + align_trans);
						}
						if(align_offset + (align == 'center' ? sub_width /2 : 0) - align_delta > screen_width){
							sub.css('right', align_offset + (align == 'center' ? (sub_width + width) /2 : 0) + align_trans - screen_width);
						}
					}
				} else {
					if(align == 'right'){
						if(align_offset < sub_width){
							align_delta = align_offset - sub_width;
							sub.css('right', align_delta);
							if(sub_width > screen_width){
								sub.css('right', sub_width - screen_width + align_delta);
							}
						}
					} else {
						if(align_offset + (align == 'center' ? sub_width /2 : sub_width) > screen_width){
							align_delta = screen_width - align_offset -(align == 'center' ? sub_width /2 : sub_width);
							sub.css('left', align_delta + align_trans);
						}
						if(align_offset - (align == 'center' ? sub_width /2 : 0) + align_delta < 0){
							sub.css('left', (align == 'center' ? (sub_width + width) /2 : 0) + align_trans - align_offset);
						}
					}
				}
			} else {
				if (this.options.rtl) {
					if ($item.closest('.mega-dropdown-menu').parent().hasClass('mega-align-right')) {
						if (offset.left + width + sub_width > screen_width) {
							$item.removeClass('mega-align-right'); 
							if(offset.left - sub_width < 0){
								sub.css('right', offset.left + width - sub_width);
							}
						}
					} else {
						if (offset.left - sub_width < 0) {
							$item.removeClass('mega-align-left').addClass('mega-align-right');
							if(offset.left + width + sub_width > screen_width){
								sub.css('left', screen_width - offset.left - sub_width);
							}
						}
					}
				} else {
					if ($item.closest('.mega-dropdown-menu').parent().hasClass('mega-align-right')) {
						if (offset.left - sub_width < 0) {
							$item.removeClass('mega-align-right'); 
							if(offset.left + width + sub_width > screen_width){
								sub.css('left', screen_width - offset.left - sub_width);
							}
						}
					} else {
						if (offset.left + width + sub_width > screen_width) {
							$item.removeClass('mega-align-left').addClass('mega-align-right');
							if(offset.left - sub_width < 0){
								sub.css('right', offset.left + width - sub_width);
							}
						}
					}
				}
			}
		}
	};
	$.fn.t3menu = function (option) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('megamenu'),
				options = typeof option == 'object' && option;
			if (!data) {
				$this.data('megamenu', (data = new T3Menu(this, options)));
			} else {
				if (typeof option == 'string' && data[option]){
					data[option]()
				}
			}
		})
	};
	$.fn.t3menu.defaults = {
		duration: 400,
		timeout: 100,
		hidedelay: 200,
		hover: true,
		sb_width: 20
	};
	//apply script
	$(document).ready(function(){
		//detect settings
		var mm_duration = $('.t3-megamenu').data('duration') || 0;
		if (mm_duration) {
			$('<style type="text/css">' +
					'.t3-megamenu.animate .animating > .mega-dropdown-menu,' +
					'.t3-megamenu.animate.slide .animating > .mega-dropdown-menu > div {' +
						'transition-duration: ' + mm_duration + 'ms !important;' +
						'-webkit-transition-duration: ' + mm_duration + 'ms !important;' +
					'}' +
				'</style>').appendTo ('head');
		}
		var mm_timeout = mm_duration ? 100 + mm_duration : 500,
			mm_rtl = $(document.documentElement).attr('dir') == 'rtl',
			mm_trigger = $(document.documentElement).hasClass('mm-hover'),
			sb_width = (function () { 
			var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
				child = parent.children(),
				width = child.innerWidth() - child.height(100).innerWidth();
			parent.remove();
			return width;
		})();
		//lt IE 10
		if(!$.support.transition){
			//it is not support animate
			$('.t3-megamenu').removeClass('animate');
			mm_timeout = 100;
		}
		//get ready
		$('.nav').has('.dropdown-menu').t3menu({
			duration: mm_duration,
			timeout: mm_timeout,
			rtl: mm_rtl,
			sb_width: sb_width,
			hover: mm_trigger
		});
		$(window).load(function(){
			//check we miss any nav
			$('.nav').has('.dropdown-menu').t3menu({
				duration: mm_duration,
				timeout: mm_timeout,
				rtl: mm_rtl,
				sb_width: sb_width,
				hover: mm_trigger
			});
		});
	});
})(jQuery);;

function submitacymailingform(task,formName){
	var varform = document[formName];
	var filterEmail = /^([a-z0-9_'&\.\-\+=])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,10})+$/i;
	if(!varform.elements){
		if(varform[0].elements['user[email]'] && varform[0].elements['user[email]'].value && filterEmail.test(varform[0].elements['user[email]'].value)){
			varform = varform[0];
		}else{
			varform = varform[varform.length - 1];
		}
	}
	 if(task != 'optout'){
		 nameField = varform.elements['user[name]'];
		 if(nameField && (( typeof acymailing != 'undefined' && nameField.value == acymailing['NAMECAPTION'] ) || nameField.value.replace(/ /g,"").length < 2)){
			 if(typeof acymailing != 'undefined'){ alert(acymailing['NAME_MISSING']); }
			 nameField.className = nameField.className +' invalid';
			 return false;
		 }
	 }
	 var emailField = varform.elements['user[email]'];
	 if(emailField){
		if(typeof acymailing == 'undefined' || emailField.value != acymailing['EMAILCAPTION']) emailField.value = emailField.value.replace(/ /g,"");
		if(!emailField || (typeof acymailing != 'undefined' && emailField.value == acymailing['EMAILCAPTION']) || !filterEmail.test(emailField.value)){
			if(typeof acymailing != 'undefined'){ alert(acymailing['VALID_EMAIL']); }
			emailField.className = emailField.className +' invalid';
			return false;
		}
	 }
	if(varform.elements['hiddenlists'].value.length < 1){
		var listschecked = false;
		var alllists = varform.elements['subscription[]'];
		if(alllists && (typeof alllists.value == 'undefined' || alllists.value.length == 0)){
			for(b=0;b<alllists.length;b++){
				if(alllists[b].checked) listschecked = true;
			}
			if(!listschecked){ alert(acymailing['NO_LIST_SELECTED']); return false;}
		}
	}
	 if(task != 'optout' && typeof acymailing != 'undefined' && typeof acymailing['reqFields'+formName] != 'undefined' && acymailing['reqFields'+formName].length > 0){
		for(var i =0;i<acymailing['reqFields'+formName].length;i++){
			elementName = 'user['+acymailing['reqFields'+formName][i]+']';
			elementToCheck = varform.elements[elementName];
			if(elementToCheck){
				var isValid = false;
				if(typeof elementToCheck.value != 'undefined'){
					if(elementToCheck.value==' ' && typeof varform[elementName+'[]'] != 'undefined'){
						if(varform[elementName+'[]'].checked){
							isValid = true;
						}else{
							for(var a=0; a < varform[elementName+'[]'].length; a++){
								if((varform[elementName+'[]'][a].checked || varform[elementName+'[]'][a].selected) && varform[elementName+'[]'][a].value.length>0) isValid = true;
							}
						}
					}else{
						if(elementToCheck.value.replace(/ /g,"").length>0){
							if(typeof acymailing['excludeValues'+formName] == 'undefined' || typeof acymailing['excludeValues'+formName][acymailing['reqFields'+formName][i]] == 'undefined' || acymailing['excludeValues'+formName][acymailing['reqFields'+formName][i]] != elementToCheck.value) isValid = true;
						}
					}
				}else{
					for(var a=0; a < elementToCheck.length; a++){
						 if(elementToCheck[a].checked && elementToCheck[a].value.length>0) isValid = true;
					}
				}
				if(!isValid){
					elementToCheck.className = elementToCheck.className +' invalid';
					alert(acymailing['validFields'+formName][i]);
					return false;
				}
			}else{
				if((varform.elements[elementName+'[day]'] && varform.elements[elementName+'[day]'].value<1) || (varform.elements[elementName+'[month]'] && varform.elements[elementName+'[month]'].value<1) || (varform.elements[elementName+'[year]'] && varform.elements[elementName+'[year]'].value<1902)){
					if(varform.elements[elementName+'[day]'] && varform.elements[elementName+'[day]'].value<1) varform.elements[elementName+'[day]'].className = varform.elements[elementName+'[day]'].className + ' invalid';
					if(varform.elements[elementName+'[month]'] && varform.elements[elementName+'[month]'].value<1) varform.elements[elementName+'[month]'].className = varform.elements[elementName+'[month]'].className + ' invalid';
					if(varform.elements[elementName+'[year]'] && varform.elements[elementName+'[year]'].value<1902) varform.elements[elementName+'[year]'].className = varform.elements[elementName+'[year]'].className + ' invalid';
					alert(acymailing['validFields'+formName][i]);
					return false;
				}
				if((varform.elements[elementName+'[country]'] && varform.elements[elementName+'[country]'].value<1) || (varform.elements[elementName+'[num]'] && (varform.elements[elementName+'[num]'].value<3 || (typeof acymailing['excludeValues'+formName] != 'undefined' && typeof acymailing['excludeValues'+formName][acymailing['reqFields'+formName][i]] != 'undefined' && acymailing['excludeValues'+formName][acymailing['reqFields'+formName][i]] == varform.elements[elementName+'[num]'].value)))){
					if(varform.elements[elementName+'[country]'] && varform.elements[elementName+'[country]'].value<1) varform.elements[elementName+'[country]'].className = varform.elements[elementName+'[country]'].className + ' invalid';
					if(varform.elements[elementName+'[num]'] && (varform.elements[elementName+'[num]'].value<3 || (typeof acymailing['excludeValues'+formName] != 'undefined' && typeof acymailing['excludeValues'+formName][acymailing['reqFields'+formName][i]] != 'undefined' && acymailing['excludeValues'+formName][acymailing['reqFields'+formName][i]] == varform.elements[elementName+'[num]'].value))) varform.elements[elementName+'[num]'].className = varform.elements[elementName+'[num]'].className + ' invalid';
					alert(acymailing['validFields'+formName][i]);
					return false;
				}
			}
		}
	}
	 if(task != 'optout' && typeof acymailing != 'undefined' && typeof acymailing['checkFields'+formName] != 'undefined' && acymailing['checkFields'+formName].length > 0){
		 for(var i =0;i<acymailing['checkFields'+formName].length;i++){
			elementName = 'user['+acymailing['checkFields'+formName][i]+']';
			elementtypeToCheck = acymailing['checkFieldsType'+formName][i];
			elementToCheck = varform.elements[elementName].value;
			switch(elementtypeToCheck){
				case 'number':
					myregexp = new RegExp('^[0-9]*$');
					break;
				case 'letter':
					myregexp = new RegExp('^[A-Za-z\u00C0-\u017F ]*$');
					break;
				case 'letnum':
					myregexp = new RegExp('^[0-9a-zA-Z\u00C0-\u017F ]*$');
					break;
				case 'regexp':
					myregexp = new RegExp(acymailing['checkFieldsRegexp'+formName][i]);
					break;
			}
			if(!myregexp.test(elementToCheck)){
				alert(acymailing['validCheckFields'+formName][i]);
				return false;
			}
		}
	 }
	var captchaField = varform.elements['acycaptcha'];
	if(captchaField){
		if(captchaField.value.length<1){
			if(typeof acymailing != 'undefined'){ alert(acymailing['CAPTCHA_MISSING']); }
			captchaField.className = captchaField.className +' invalid';
					return false;
		}
	}
	if(task != 'optout'){
		var termsandconditions = varform.terms;
		if(termsandconditions && !termsandconditions.checked){
			if(typeof acymailing != 'undefined'){ alert(acymailing['ACCEPT_TERMS']); }
			termsandconditions.className = termsandconditions.className +' invalid';
			return false;
		}
	}
	taskField = varform.task;
	taskField.value = task;
	if(!varform.elements['ajax'] || !varform.elements['ajax'].value || varform.elements['ajax'].value == '0'){
		varform.submit();
		return false;
	}
	if(window.jQuery){
		var form = jQuery('#'+formName);
		form.addClass('acymailing_module_loading');
		form.css("filter:","alpha(opacity=50)");
		form.css("-moz-opacity","0.5");
		form.css("-khtml-opacity", "0.5");
		form.css("opacity", "0.5");
		data = form.serialize();
		jQuery.ajax({
			url: document.getElementById(formName).action,
			data: data,
			type: 'POST',
			async: false,
			success:function(response){
				response = JSON.parse(response);
				acymailingDisplayAjaxResponseJQuery( unescape(response.message), response.type, formName );
			},
			error:function(){
				acymailingDisplayAjaxResponseJQuery('Ajax Request Failure', 'error', formName);
			}
		});
	} else{
		try{
			var form = document.id(formName);
		}catch(err){
			var form = $(formName);
		}
		data = form.toQueryString();
		if (typeof Ajax == 'function'){
			new Ajax(form.action, {
				data: data,
				method: 'post',
				onRequest: function()
				{
					form.addClass('acymailing_module_loading');
					form.setStyle("filter:","alpha(opacity=50)");
					form.setStyle("-moz-opacity","0.5");
					form.setStyle("-khtml-opacity", "0.5");
					form.setStyle("opacity", "0.5");
				},
				onSuccess: function(response)
				{
					response = Json.evaluate(response);
					acymailingDisplayAjaxResponseMootools(unescape(response.message), response.type, formName);
				},
				onFailure: function(){
					acymailingDisplayAjaxResponseMootools('Ajax Request Failure', 'error', formName);
				}
			}).request();
		}else{
			new Request.JSON({
				url: document.id(formName).action,
				data: data,
				method: 'post',
				onRequest: function()
				{
					form.addClass('acymailing_module_loading');
					form.setStyle("filter:","alpha(opacity=50)");
					form.setStyle("-moz-opacity","0.5");
					form.setStyle("-khtml-opacity", "0.5");
					form.setStyle("opacity", "0.5");
				},
				onSuccess: function(response)
				{
					acymailingDisplayAjaxResponseMootools(unescape(response.message), response.type, formName);
				},
				onFailure: function(){
					acymailingDisplayAjaxResponseMootools('Ajax Request Failure', 'error', formName);
				}
			}).send();
		}
	}
	return false;
}
function acymailingDisplayAjaxResponseJQuery(message, type, formName){
	var toggleButton = jQuery('#acymailing_togglemodule_'+formName);
	if (toggleButton && toggleButton.hasClass('acyactive')) {
		var wrapper = toggleButton.parent().parent().children()[1];
		jQuery(wrapper).css('height', '');
	};
	var responseContainer = jQuery('#acymailing_fulldiv_'+formName+' .responseContainer')[0];
	if (typeof responseContainer == 'undefined'){
		responseContainer = document.createElement('div');
		var fulldiv = jQuery('#acymailing_fulldiv_'+formName);
		fulldiv.prepend(responseContainer);
		oldContainerHeight = '0px';
	}else{
		oldContainerHeight = jQuery(responseContainer).css('height');
	}
	responseContainer.className = 'responseContainer';
	var form = jQuery('#'+formName);
	form.removeClass('acymailing_module_loading');
	responseContainer.innerHTML = message;
	if(type == 'success'){
		jQuery(responseContainer).addClass('acymailing_module_success');
	}else{
		jQuery(responseContainer).addClass('acymailing_module_error');
		form.css("filter:","alpha(opacity=100)");
		form.css("-moz-opacity","1");
		form.css("-khtml-opacity", "1");
		form.css("opacity", "1");
	}
	newContainerHeight = jQuery(responseContainer).css('height');
	if(type == 'success'){
		form.animate({
				'height': 0,
				'opacity': 0
		});
	}
	jQuery(responseContainer).css({
		'height': oldContainerHeight,
		'filter:':"alpha(opacity=0)",
		'-moz-opacity':0,
		'-khtml-opacity': 0,
		'opacity': 0
	});
	jQuery(responseContainer).animate({
		'height': newContainerHeight,
		'opacity': 1
	});
}
function acymailingDisplayAjaxResponseMootools(message, type, formName)
{
	try{
		var toggleButton = document.id('acymailing_togglemodule_'+formName);
	}catch(err){
		var toggleButton = $('acymailing_togglemodule_'+formName);
	}
	if (toggleButton && toggleButton.hasClass('acyactive')) {
		var wrapper = toggleButton.getParent().getParent().getChildren()[1];
		wrapper.setStyle('height', '');
	};
	try{
		var responseContainer = document.getElements('#acymailing_fulldiv_'+formName+' .responseContainer')[0];
	}catch(err){
		var responseContainer = $$('#acymailing_fulldiv_'+formName+' .responseContainer')[0];
	}
	if (typeof responseContainer == 'undefined'){
		responseContainer = new Element('div');
		try{
			var fulldiv = document.id('acymailing_fulldiv_'+formName);
		}catch(err){
			var fulldiv = $('acymailing_fulldiv_'+formName);
		}
		responseContainer.inject(fulldiv, 'top');
		oldContainerHeight = '0px';
	}else{
		oldContainerHeight = responseContainer.getStyle('height');
	}
	responseContainer.className = 'responseContainer';
	try{
		var form = document.id(formName);
	}catch(err){
		var form = $(formName);
	}
	form.removeClass('acymailing_module_loading');
	responseContainer.innerHTML = message;
	if(type == 'success'){
		responseContainer.addClass('acymailing_module_success');
	}else{
		responseContainer.addClass('acymailing_module_error');
		form.setStyle("filter:","alpha(opacity=100)");
		form.setStyle("-moz-opacity","1");
		form.setStyle("-khtml-opacity", "1");
		form.setStyle("opacity", "1");
	}
	newContainerHeight = responseContainer.getStyle('height');
	if (typeof Ajax == 'function')
	{
		if(type == 'success'){
			var myEffect = new Fx.Styles(form, {duration: 500, transition: Fx.Transitions.linear});
			myEffect.start({
				'height': [form.getSize().size.y, 0],
				'opacity': [1, 0]
			});
		}
		try {
			responseContainer.setStyle('height', oldContainerHeight+'px');
			responseContainer.setStyle("filter:","alpha(opacity=0)");
			responseContainer.setStyle("-moz-opacity","0");
			responseContainer.setStyle("-khtml-opacity", "0");
			responseContainer.setStyle("opacity", "0");
		}
		catch (e) {}
		var myEffect2 = new Fx.Styles(responseContainer, {duration: 500, transition: Fx.Transitions.linear});
		myEffect2.start({
			'height': [oldContainerHeight, newContainerHeight],
			'opacity': [0, 1]
		});
	}
	else 
	{
		if(type == 'success'){
			form.set('morph');
			form.morph({
				'height': '0px',
				'opacity': 0
			});
			form.setStyles({
				'display': 'none'
			});
		}
		if(newContainerHeight != 'auto'){
			responseContainer.setStyles({
				'height': oldContainerHeight,
				'opacity': 0
			});
			responseContainer.set('morph');
			responseContainer.morph({
				'height': newContainerHeight,
				'opacity': 1
			});
		}
	}
}
function refreshCaptchaModule(formName){
	var captchaLink = document.getElementById('captcha_picture_'+formName).src;
	myregexp = new RegExp('val[-=]([0-9]+)');
	valToChange=captchaLink.match(myregexp)[1];
	document.getElementById('captcha_picture_'+formName).src = captchaLink.replace(valToChange,valToChange+'0');
};

(function(){Browser.Device={name:"other"};
if(Browser.Platform.ios){var a=navigator.userAgent.toLowerCase().match(/(ip(ad|od|hone))/)[0];Browser.Device[a]=true;Browser.Device.name=a;}if(this.devicePixelRatio==2){Browser.hasHighResolution=true;
}Browser.isMobile=!["mac","linux","win"].contains(Browser.Platform.name);}).call(this);(function(){[Element,Window,Document].invoke("implement",{hasEvent:function(f){var e=this.retrieve("events"),g=(e&&e[f])?e[f].values:null;
if(g){var d=g.length;while(d--){if(d in g){return true;}}}return false;}});var c=function(e,f,d){f=e[f];d=e[d];return function(h,g){if(d&&!this.hasEvent(g)){d.call(this,h,g);
}if(f){f.call(this,h,g);}};};var a=function(e,d,f){return function(h,g){d[f].call(this,h,g);e[f].call(this,h,g);};};var b=Element.Events;Element.defineCustomEvent=function(d,f){var e=b[f.base];
f.onAdd=c(f,"onAdd","onSetup");f.onRemove=c(f,"onRemove","onTeardown");b[d]=e?Object.append({},f,{base:e.base,condition:function(h,g){return(!e.condition||e.condition.call(this,h,g))&&(!f.condition||f.condition.call(this,h,g));
},onAdd:a(f,e,"onAdd"),onRemove:a(f,e,"onRemove")}):f;return this;};Element.enableCustomEvents=function(){Object.each(b,function(e,d){if(e.onEnable){e.onEnable.call(e,d);
}});};Element.disableCustomEvents=function(){Object.each(b,function(e,d){if(e.onDisable){e.onDisable.call(e,d);}});};})();Browser.Features.Touch=(function(){try{document.createEvent("TouchEvent").initTouchEvent("touchstart");
return true;}catch(a){}return false;})();Browser.Features.iOSTouch=(function(){var a="cantouch",c=document.html,f=false;if(!c.addEventListener){return false;
}var d=function(){c.removeEventListener(a,d,true);f=true;};try{c.addEventListener(a,d,true);var e=document.createEvent("TouchEvent");e.initTouchEvent(a);
c.dispatchEvent(e);return f;}catch(b){}d();return false;})();(function(){var a=function(c){if(!c.target||c.target.tagName.toLowerCase()!="select"){c.preventDefault();
}};var b;Element.defineCustomEvent("touch",{base:"touchend",condition:function(c){if(b||c.targetTouches.length!=0){return false;}var e=c.changedTouches[0],d=document.elementFromPoint(e.clientX,e.clientY);
do{if(d==this){return true;}}while(d&&(d=d.parentNode));return false;},onSetup:function(){this.addEvent("touchstart",a);},onTeardown:function(){this.removeEvent("touchstart",a);
},onEnable:function(){b=false;},onDisable:function(){b=true;}});})();if(Browser.Features.iOSTouch){(function(){var a="click";delete Element.NativeEvents[a];
Element.defineCustomEvent(a,{base:"touchend"});})();}if(Browser.Features.Touch){(function(){var a="pinch",d=a+":threshold",c,e;var b={touchstart:function(f){if(f.targetTouches.length==2){e=true;
}},touchmove:function(g){if(c||!e){return;}g.preventDefault();var f=this.retrieve(d,0.5);if(g.scale<(1+f)&&g.scale>(1-f)){return;}e=false;g.pinch=(g.scale>1)?"in":"out";
this.fireEvent(a,g);}};Element.defineCustomEvent(a,{onSetup:function(){this.addEvents(b);},onTeardown:function(){this.removeEvents(b);},onEnable:function(){c=false;
},onDisable:function(){c=true;}});})();}(function(){var a="swipe",c=a+":distance",f=a+":cancelVertical",g=50;var b={},e,d;var h=function(){d=false;};var i={touchstart:function(j){if(j.touches.length>1){return;
}var k=j.touches[0];d=true;b={x:k.pageX,y:k.pageY};},touchmove:function(l){if(e||!d){return;}var p=l.changedTouches[0],j={x:p.pageX,y:p.pageY};if(this.retrieve(f)&&Math.abs(b.y-j.y)>10){d=false;
return;}var o=this.retrieve(c,g),n=j.x-b.x,m=n<-o,k=n>o;if(!k&&!m){return;}l.preventDefault();d=false;l.direction=(m?"left":"right");l.start=b;l.end=j;
this.fireEvent(a,l);},touchend:h,touchcancel:h};Element.defineCustomEvent(a,{onSetup:function(){this.addEvents(i);},onTeardown:function(){this.removeEvents(i);
},onEnable:function(){e=false;},onDisable:function(){e=true;h();}});})();(function(){var b="touchhold",e=b+":delay",d,f;var a=function(g){clearTimeout(f);
};var c={touchstart:function(g){if(g.touches.length>1){a();return;}f=(function(){this.fireEvent(b,g);}).delay(this.retrieve(e)||750,this);},touchmove:a,touchcancel:a,touchend:a};
Element.defineCustomEvent(b,{onSetup:function(){this.addEvents(c);},onTeardown:function(){this.removeEvents(c);},onEnable:function(){d=false;},onDisable:function(){d=true;
a();}});})();;

((function(){window.matchMedia=window.matchMedia||window.msMatchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");
g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.style.background="none";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';
a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h,addListener:function(i){if(!Browser.ie9&&!window.opera){return"";}if(window.retrieve("rokmediaqueries:listener:"+h.replace(/[a-z]|[(|)|:|\s|-]/gi,""),false)){return;
}window.store("rokmediaqueries:listener:"+h.replace(/[a-z]|[(|)|:|\s|-]/gi,""),true);window[window.addListener?"addListener":"attachEvent"]("resize",function(){var l={},k=0,j,m=false;
h.replace(/(\w+-?\w+)\s?:\s?(\d+){1,}/g,function(o,s,q,p,r,n){l[s]=q;k++;});if(!k){return;}else{if(k==1){j=window.getSize();m=false;Object.each(l,function(n,o){if(o=="min-width"){m+=j.x>=n;
}else{if(o=="max-width"){m+=j.x<=n;}else{if(o=="width"){m+=j.x==n;}}}});}else{if(k>1){j=window.getSize();m=true;Object.each(l,function(n,o){if(o=="min-width"){m*=j.x>=n;
}else{if(o=="max-width"){m*=j.x<=n;}else{if(o=="width"){m*=j.x==n;}}}});}}}if(m){return i.call(i,h);}});}};};})(document);})());((function(c,b){if(typeof RokMediaQueries!="undefined"){return;
}var a=new Class({Implements:[Events,Options],options:{queries:["(min-width: 1200px)","(min-width: 960px) and (max-width: 1199px)","(min-width: 768px) and (max-width: 959px)","(min-width: 481px) and (max-width: 767px)","(max-width: 480px)"]},initialize:function(d){this.setOptions(d);
this.queries=this.options.queries;this.queriesEvents={};this.timers=[];for(var e=this.queries.length-1;e>=0;e--){var f=c.matchMedia(this.queries[e]);f.addListener(this._fireEvent.bind(this,this.queries[e]));
this.queriesEvents[this.queries[e]]=[];}},on:function(f,d){if(f=="every"){for(var e=this.queries.length-1;e>=0;e--){this._addOnMatch(this.queries[e],d);
}}else{this._addOnMatch(f,d);}},add:function(d){if(!this.queries.contains(d)){var e;this.queries.push(d);e=c.matchMedia(d);e.addListener(this._fireEvent.bind(this,d));
}if(!this.queriesEvents[d]){this.queriesEvents[d]=[];}},getQuery:function(){var e="";for(var d=this.queries.length-1;d>=0;d--){if(c.matchMedia(this.queries[d]).matches){e=this.queries[d];
break;}}return e;},_fireEvent:function(e){if(!c.matchMedia(e).matches||!Object.getLength(this.queriesEvents)||!this.queriesEvents[e]){return;}for(var d=this.queriesEvents[e].length-1;
d>=0;d--){this.queriesEvents[e][d].delay(5,this,e);}},_addOnMatch:function(e,d){this.add(e);this.queriesEvents[e].push(d);}});c.RokMediaQueries=new a();
})(window,document));;

((function(){var a={instances:{}};
if(typeof this.RokSprocket=="undefined"){this.RokSprocket=a;}else{Object.merge(this.RokSprocket,{instances:{}});}if(MooTools.version<"1.4.4"&&(Browser.name=="ie"&&Browser.version<9)){((function(){var b=["rel","data-next","data-previous","data-tabs","data-tabs-navigation","data-tabs-panel","data-tabs-next","data-tabs-previous","data-lists","data-lists-items","data-lists-item","data-lists-toggler","data-lists-content","data-lists-page","data-lists-next","data-lists-previous","data-headlines","data-headlines-item","data-headlines-next","data-headlines-previous","data-features","data-features-pagination","data-features-next","data-features-previous","data-slideshow","data-slideshow-pagination","data-slideshow-next","data-slideshow-previous","data-showcase","data-showcase-pagination","data-showcase-next","data-showcase-previous"];
b.each(function(c){Element.Properties[c]={get:function(){return this.getAttribute(c);}};});})());}})());;

(function(c){var a={},b=function(f){var e=a[f];
if(!e){e=a[f]={};var d=e.exports={};c[f].call(d,b,e,d,window);}return e.exports;};window.moofx=b("0");})({"0":function(c,e,b,f){var a=c("1"),g=c("2");var d=typeof document!=="undefined"?c("7"):c("b");
d.requestFrame=function(h){g.request(h);return this;};d.cancelFrame=function(h){g.cancel(h);return this;};d.color=a;e.exports=d;},"1":function(j,e,w,q){var k={maroon:"#800000",red:"#ff0000",orange:"#ffA500",yellow:"#ffff00",olive:"#808000",purple:"#800080",fuchsia:"#ff00ff",white:"#ffffff",lime:"#00ff00",green:"#008000",navy:"#000080",blue:"#0000ff",aqua:"#00ffff",teal:"#008080",black:"#000000",silver:"#c0c0c0",gray:"#808080",transparent:"#0000"};
var d=function(z,y,c,x){if(x==null||x===""){x=1;}z=parseFloat(z);y=parseFloat(y);c=parseFloat(c);x=parseFloat(x);if(!(z<=255&&z>=0&&y<=255&&y>=0&&c<=255&&c>=0&&x<=1&&x>=0)){return null;
}return[Math.round(z),Math.round(y),Math.round(c),x];};var v=function(D){if(D.length===3){D+="f";}if(D.length===4){var C=D.charAt(0),B=D.charAt(1),z=D.charAt(2),x=D.charAt(3);
D=C+C+B+B+z+z+x+x;}if(D.length===6){D+="ff";}var y=[];for(var A=0,c=D.length;A<c;A+=2){y.push(parseInt(D.substr(A,2),16)/(A===6?255:1));}return y;};var l=function(y,x,c){if(c<0){c+=1;
}if(c>1){c-=1;}if(c<1/6){return y+(x-y)*6*c;}if(c<1/2){return x;}if(c<2/3){return y+(x-y)*(2/3-c)*6;}return y;};var a=function(A,E,z,D){var c,C,B;if(D==null||D===""){D=1;
}A=parseFloat(A)/360;E=parseFloat(E)/100;z=parseFloat(z)/100;D=parseFloat(D)/1;if(A>1||A<0||E>1||E<0||z>1||z<0||D>1||D<0){return null;}if(E===0){c=C=B=z;
}else{var x=z<0.5?z*(1+E):z+E-z*E;var y=2*z-x;c=l(y,x,A+1/3);B=l(y,x,A);C=l(y,x,A-1/3);}return[c*255,B*255,C*255,D];};var p=[];for(var t in k){p.push(t);
}var m="(?:#([a-f0-9]{3,8}))",f="\\s*([.\\d%]+)\\s*",b="(?:,\\s*([.\\d]+)\\s*)?",s="\\("+[f,f,f]+b+"\\)",g="(?:rgb)a?",o="(?:hsl)a?",n="("+p.join("|")+")";
var h=RegExp(m,"i"),u=RegExp(g+s,"i"),i=RegExp(o+s,"i");var r=function(c,y){if(c==null){return null;}c=(c+"").replace(/\s+/,"");var x=k[c];if(x){return r(x,y);
}else{if(x=c.match(h)){c=v(x[1]);}else{if(x=c.match(u)){c=x.slice(1);}else{if(x=c.match(i)){c=a.apply(null,x.slice(1));}else{return null;}}}}if(!(c&&(c=d.apply(null,c)))){return null;
}if(y){return c;}if(c[3]===1){c.splice(3,1);}return"rgb"+(c.length===4?"a":"")+"("+c+")";};r.x=RegExp([n,m,g+s,o+s].join("|"),"gi");e.exports=r;},"2":function(c,b,f,a){var h=c("3");
var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(k){return setTimeout(k,1000/60);
};var i=[];var g=function(o){var n=i.splice(0,i.length);for(var m=0,k=n.length;m<k;m++){n[m](o||(o=+new Date()));}};var j=function(l){var k=h.indexOf(i,l);
if(k>-1){i.splice(k,1);}};var e=function(l){var k=i.push(l);if(k===1){d(g);}return function(){j(l);};};f.request=e;f.cancel=j;},"3":function(f,e,h,c){var k=f("4")["array"];
var l=("pop,push,reverse,shift,sort,splice,unshift,concat,join,slice,toString,indexOf,lastIndexOf,forEach,every,some,filter,map,reduce,reduceRight").split(",");
for(var g={},j=0,b,a;b=l[j++];){if(a=Array.prototype[b]){g[b]=a;}}if(!g.filter){g.filter=function(q,p){var o=[];for(var n=0,m=this.length>>>0;n<m;n++){if(n in this){var r=this[n];
if(q.call(p,r,n,this)){o.push(r);}}}return o;};}if(!g.indexOf){g.indexOf=function(o,p){for(var m=this.length>>>0,n=p<0?Math.max(0,m+p):p||0;n<m;n++){if(n in this&&this[n]===o){return n;
}}return -1;};}if(!g.map){g.map=function(q,p){var r=this.length>>>0,o=Array(r);for(var n=0,m=r;n<m;n++){if(n in this){o[n]=q.call(p,this[n],n,this);}}return o;
};}if(!g.every){g.every=function(p,o){for(var n=0,m=this.length>>>0;n<m;n++){if(n in this&&!p.call(o,this[n],n,this)){return false;}}return true;};}if(!g.some){g.some=function(p,o){for(var n=0,m=this.length>>>0;
n<m;n++){if(n in this&&p.call(o,this[n],n,this)){return true;}}return false;};}if(!g.forEach){g.forEach=function(p,o){for(var n=0,m=this.length>>>0;n<m;
n++){if(n in this){p.call(o,this[n],n,this);}}};}var d=Object.prototype.toString;k.isArray=Array.isArray||function(i){return d.call(i)==="[object Array]";
};e.exports=k.implement(g);},"4":function(d,c,e,b){var a=d("5"),j=d("6");var k=Array.prototype.slice;var m=a({constructor:function m(i){this.valueOf=function(){return i;
};this.toString=function(){return i+"";};this.is=function(n){return i===n;};}});var h=function(i){if(i==null||i instanceof m){return i;}var n=h[j(i)];return n?new n(i):i;
};var l=function(){var i=a({inherits:m});return a({constructor:function(n){return new i(n);},define:function(n,o){var p=o.value;this[n]=function(q){return arguments.length>1?p.apply(q,k.call(arguments,1)):p.call(q);
};i.prototype[n]=function(){return h(p.apply(this.valueOf(),arguments));};a.define(this.prototype,n,o);return this;}});};for(var g="string,number,array,object,date,function,regexp".split(","),f=g.length;
f--;){h[g[f]]=l();}c.exports=h;},"5":function(g,d,h,c){var p=function(e,q){return Object.hasOwnProperty.call(e,q);};var n=function(e,s,r){for(var q in e){if(s.call(r,e[q],q,e)===false){break;
}}return e;};if(!{valueOf:0}.propertyIsEnumerable("valueOf")){var f="constructor,toString,valueOf,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString".split(",");
var l=Object.prototype;n=function(e,u,s){for(var r in e){if(u.call(s,e[r],r,e)===false){return e;}}for(var q=0;r=f[q];q++){var t=e[r];if((t!==l[r]||p(e,r))&&u.call(s,t,r,e)===false){break;
}}return e;};}var k=Object.create||function(e){var q=function(){};q.prototype=e;return new q();};var o=Object.getOwnPropertyDescriptor;var j=Object.defineProperty;
try{var i={a:1};o(i,"a");j(i,"a",{value:2});}catch(m){o=function(e,q){return{value:e[q]};};j=function(e,q,r){e[q]=r.value;return e;};}var b=function(e){n(e,function(r,q){if(q!=="constructor"&&q!=="define"&&q!=="inherits"){this.define(q,o(e,q)||{writable:true,enumerable:true,configurable:true,value:r});
}},this);return this;};var a=function(q){var r=q.inherits;var e=p(q,"constructor")?q.constructor:r?function(){return r.apply(this,arguments);}:function(){};
if(r){var t=r.prototype;var s=e.prototype=k(t);e.parent=t;s.constructor=e;}e.define=q.define||r&&r.define||function(u,v){j(this.prototype,u,v);return this;
};e.implement=b;return e.implement(q);};a.has=p;a.each=n;a.create=k;a.define=j;d.exports=a;},"6":function(b,d,a,f){var g=Object.prototype.toString,c=/number|object|array|string|function|date|regexp|boolean/;
var e=function(i){if(i==null){return"null";}var h=g.call(i).slice(8,-1).toLowerCase();if(h==="number"&&isNaN(i)){return"null";}if(c.test(h)){return h;}return"object";
};d.exports=e;},"7":function(k,h,ae,d){var O=k("1"),b=k("2");var ad=b.cancel,X=b.request;var E=k("5"),o=k("3"),z=k("8");var aj=z.camelize,aa=z.clean,P=z.capitalize;
var N=o.map,c=o.forEach,F=o.indexOf;var m=k("a");var H=k("b");var R={};var l=function(e){return R[e]||(R[e]=z.hyphenate(e));};var ag=function(e){return Math.round(e*1000)/1000;
};var w=d.getComputedStyle?function(ar){var e=getComputedStyle(ar);return function(at){return e?e.getPropertyValue(l(at)):"";};}:function(ar){var e=ar.currentStyle;
return function(at){return e?e[aj(at)]:"";};};var s=document.createElement("div");var L="border:none;margin:none;padding:none;visibility:hidden;position:absolute;height:0;";
var ah=function(ar,e){var au=ar.parentNode,at=1;if(au){s.style.cssText=L+("width:100"+e+";");au.appendChild(s);at=s.offsetWidth/100;au.removeChild(s);}return at;
};var I=function(e){var ar=e.length;if(ar===1){e.push(e[0],e[0],e[0]);}else{if(ar===2){e.push(e[0],e[1]);}else{if(ar===3){e.push(e[1]);}}}return e;};var q="([-.\\d]+)(%|cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vm)",t=q+"?",ak="none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit";
var f=RegExp(q,"g"),ao=RegExp(t),J=RegExp(t,"g"),C=RegExp(ak);var V=function(e){return e==null?"":e+"";};var j=function(ar,e){if(ar==null||ar===""){return e?"1":"";
}return isFinite(ar=+ar)?ar<0?"0":ar+"":"1";};try{s.style.color="rgba(0,0,0,0.5)";}catch(am){}var af=/^rgba/.test(s.style.color);var v=function(ar,e){var av="rgba(0,0,0,1)",au;
if(!ar||!(au=O(ar,true))){return e?av:"";}if(e){return"rgba("+au+")";}var at=au[3];if(at===0){return"transparent";}return !af||at===1?"rgb("+au.slice(0,3)+")":"rgba("+au+")";
};var Z=function(at,e){if(at==null||at===""){return e?"0px":"";}var ar=z.match(at,ao);return ar?ar[1]+(ar[2]||"px"):at;};var i=function(at,e){if(at==null||at===""){return e?"none":"";
}var ar=at.match(C);return ar?at:e?"none":"";};var U=function(au,ar){var av="0px none rgba(0,0,0,1)";if(au==null||au===""){return ar?av:"";}if(au===0||au==="none"){return ar?av:au+"";
}var aw;au=au.replace(O.x,function(ax){aw=ax;return"";});var at=au.match(C),e=au.match(J);return aa([Z(e?e[0]:"",ar),i(at?at[0]:"",ar),v(aw,ar)].join(" "));
};var u=function(ar,e){if(ar==null||ar===""){return e?"0px 0px 0px 0px":"";}return aa(I(N(aa(ar).split(" "),function(at){return Z(at,e);})).join(" "));
};var a=function(au,at,e){var aw="rgba(0,0,0,0)",av=e===3?aw+" 0px 0px 0px":aw+" 0px 0px 0px 0px";if(au==null||au===""){return at?av:"";}if(au==="none"){return at?av:au;
}var ar=[],au=aa(au).replace(O.x,function(ax){ar.push(ax);return"";});return N(au.split(","),function(aC,az){var aB=v(ar[az],at),ax=/inset/.test(aC),aA=aC.match(J)||["0px"];
aA=N(aA,function(aD){return Z(aD,at);});while(aA.length<e){aA.push("0px");}var ay=ax?["inset",aB]:[aB];return ay.concat(aA).join(" ");}).join(", ");};var G=function(ar,e){if(ar==null||ar===""){return"";
}return ar.replace(O.x,function(at){return v(at,e);}).replace(f,function(at){return Z(at,e);});};var p={},r={},y={},S={};var M=function(e){return p[e]||(p[e]=function(){var ar=S[e]||e,at=y[e]||G;
return function(){return at(w(this)(ar),true);};}());};var Y=function(e){return r[e]||(r[e]=function(){var ar=S[e]||e,at=y[e]||G;return function(au){this.style[ar]=at(au,false);
};}());};var A=["Top","Right","Bottom","Left"],aq=["TopLeft","TopRight","BottomRight","BottomLeft"];c(A,function(ar){var e="border"+ar;c(["margin"+ar,"padding"+ar,e+"Width",ar.toLowerCase()],function(at){y[at]=Z;
});y[e+"Color"]=v;y[e+"Style"]=i;y[e]=U;p[e]=function(){return[M(e+"Width").call(this),M(e+"Style").call(this),M(e+"Color").call(this)].join(" ");};});
c(aq,function(e){y["border"+e+"Radius"]=Z;});y.color=y.backgroundColor=v;y.width=y.height=y.minWidth=y.minHeight=y.maxWidth=y.maxHeight=y.fontSize=y.backgroundSize=Z;
c(["margin","padding"],function(e){y[e]=u;p[e]=function(){return N(A,function(ar){return M(e+ar).call(this);},this).join(" ");};});y.borderWidth=u;y.borderStyle=function(ar,e){if(ar==null||ar===""){return e?I(["none"]).join(" "):"";
}ar=aa(ar).split(" ");return aa(I(N(ar,function(at){i(at,e);})).join(" "));};y.borderColor=function(ar,e){if(!ar||!(ar=z.match(ar,O.x))){return e?I(["rgba(0,0,0,1)"]).join(" "):"";
}return aa(I(N(ar,function(at){return v(at,e);})).join(" "));};c(["Width","Style","Color"],function(e){p["border"+e]=function(){return N(A,function(ar){return M("border"+ar+e).call(this);
},this).join(" ");};});y.borderRadius=u;p.borderRadius=function(){return N(aq,function(e){return M("border"+e+"Radius").call(this);},this).join(" ");};
y.border=U;p.border=function(){var at;for(var e=0;e<A.length;e++){var ar=M("border"+A[e]).call(this);if(at&&ar!==at){return null;}at=ar;}return at;};y.zIndex=V;
y.opacity=j;var ab=s.style.MsFilter!=null&&"MsFilter"||s.style.filter!=null&&"filter";if(ab&&s.style.opacity==null){var x=/alpha\(opacity=([\d.]+)\)/i;
r.opacity=function(ar){ar=(ar=j(ar))==="1"?"":"alpha(opacity="+Math.round(ar*100)+")";var e=w(this)(ab);return this.style[ab]=x.test(e)?e.replace(x,ar):e+" "+ar;
};p.opacity=function(){var e=w(this)(ab).match(x);return(!e?1:e[1]/100)+"";};}var Q=y.boxShadow=function(ar,e){return a(ar,e,4);};var K=y.textShadow=function(ar,e){return a(ar,e,3);
};c(["Webkit","Moz","ms","O",null],function(e){c(["transition","transform","transformOrigin","transformStyle","perspective","perspectiveOrigin","backfaceVisibility"],function(ar){var at=e?e+P(ar):ar;
if(e==="ms"){R[at]="-ms-"+l(ar);}if(s.style[at]!=null){S[ar]=at;}});});var n=S.transition,D=S.transform;if(n==="OTransition"){n=null;}var ac,W;if(!n&&D){(function(){var av=k("d");
var ar="\\s*([-\\d\\w.]+)\\s*";var au=RegExp("matrix\\("+[ar,ar,ar,ar,ar,ar]+"\\)");var ax=function(az){var aA=av.apply(null,az.match(au).slice(1))||[[0,0],0,0,[0,0]];
return["translate("+N(aA[0],function(aB){return ag(aB)+"px";})+")","rotate("+ag(aA[1]*180/Math.PI)+"deg)","skewX("+ag(aA[2]*180/Math.PI)+"deg)","scale("+N(aA[3],ag)+")"].join(" ");
};var at=function(az){return az||"0px";},e=function(az){return az||"1";},ay=function(az){return az||"0deg";};var aw={translate:function(aA){if(!aA){aA="0px,0px";
}var az=aA.split(",");if(!az[1]){az[1]="0px";}return N(az,aa)+"";},translateX:at,translateY:at,scale:function(aA){if(!aA){aA="1,1";}var az=aA.split(",");
if(!az[1]){az[1]=az[0];}return N(az,aa)+"";},scaleX:e,scaleY:e,rotate:ay,skewX:ay,skewY:ay};W=E({constructor:function(aA){var aB=this.names=[];var az=this.values=[];
aA.replace(/(\w+)\(([-.\d\s\w,]+)\)/g,function(aD,aC,aE){aB.push(aC);az.push(aE);});},identity:function(){var az=[];c(this.names,function(aA){var aB=aw[aA];
if(aB){az.push(aA+"("+aB()+")");}});return az.join(" ");},sameType:function(az){return this.names.toString()===az.names.toString();},decompose:function(){var aA=this.toString();
s.style.cssText=L+l(D)+":"+aA+";";document.body.appendChild(s);var az=w(s)(D);if(!az||az==="none"){az="matrix(1, 0, 0, 1, 0, 0)";}document.body.removeChild(s);
return ax(az);}});W.prototype.toString=function(aA){var az=this.values,aB=[];c(this.names,function(aC,aD){var aE=aw[aC];if(!aE){return;}var aF=aE(az[aD]);
if(!aA||aF!==aE()){aB.push(aC+"("+aF+")");}});return aB.length?aB.join(" "):"none";};W.union=function(aC,aB){if(aC===aB){return;}var az,aA;if(aC==="none"){aA=new W(aB);
aB=aA.toString();aC=aA.identity();az=new W(aC);}else{if(aB==="none"){az=new W(aC);aC=az.toString();aB=az.identity();aA=new W(aB);}else{az=new W(aC);aC=az.toString();
aA=new W(aB);aB=aA.toString();}}if(aC===aB){return;}if(!az.sameType(aA)){aC=az.decompose();aB=aA.decompose();}if(aC===aB){return;}return[aC,aB];};ac=y.transform=function(az){if(!az||az==="none"){return"none";
}return new W(au.test(az)?ax(az):az).toString(true);};p.transform=function(){var az=this.style;return az[D]||(az[D]=ac(w(this)(D)));};})();}var an=function(at,au,ax){var aw=y[au]||G,av=M(au).call(at),ax=aw(ax,true);
if(av===ax){return;}if(aw===Z||aw===U||aw===u){var e=ax.match(f),ar=0;if(e){av=av.replace(f,function(aB,aE,aC){var ay=e[ar++],aD=ay.match(ao),aA=aD[2];
if(aC!==aA){var az=aC==="px"?aE:ah(at,aC)*aE;return ag(az/ah(at,aA))+aA;}return aB;});}if(ar>0){Y(au).call(at,av);}}else{if(aw===ac){return W.union(av,ax);
}}return av!==ax?[av,ax]:null;};var T=E({inherits:H,constructor:function T(at,au){var ar=M(au),e=Y(au);this.get=function(){return ar.call(at);};this.set=function(av){return e.call(at,av);
};T.parent.constructor.call(this,this.set);this.node=at;this.property=au;}});var ai;ai=E({inherits:T,constructor:function ai(){return ai.parent.constructor.apply(this,arguments);
},start:function(at){this.stop();if(this.duration===0){this.cancel(at);return this;}var e=an(this.node,this.property,at);if(!e){this.cancel(at);return this;
}ai.parent.start.apply(this,e);if(!this.cancelStep){return this;}var ar=y[this.property]||G;if((ar===Q||ar===K||ar===G)&&this.templateFrom!==this.templateTo){this.cancelStep();
delete this.cancelStep;this.cancel(at);}return this;},parseEquation:function(e){if(typeof e==="string"){return ai.parent.parseEquation.call(this,e);}}});
var ap=function(au,ar,e,av){var at=F(ar,au);if(at!==-1){ar.splice(at,1);e.splice(at,1);av.splice(at,1);}};var al=E({inherits:T,constructor:function al(ar,at){al.parent.constructor.call(this,ar,at);
this.hproperty=l(S[at]||at);var e=this;this.bSetTransitionCSS=function(au){e.setTransitionCSS(au);};this.bSetStyleCSS=function(au){e.setStyleCSS(au);};
this.bComplete=function(){e.complete();};},start:function(ar){this.stop();if(this.duration===0){this.cancel(ar);return this;}var e=an(this.node,this.property,ar);
if(!e){this.cancel(ar);return this;}this.to=e[1];this.cancelSetTransitionCSS=X(this.bSetTransitionCSS);return this;},setTransitionCSS:function(e){delete this.cancelSetTransitionCSS;
this.resetCSS(true);this.cancelSetStyleCSS=X(this.bSetStyleCSS);},setStyleCSS:function(ar){delete this.cancelSetStyleCSS;var e=this.duration;this.cancelComplete=setTimeout(this.bComplete,e);
this.endTime=ar+e;this.set(this.to);},complete:function(){delete this.cancelComplete;this.resetCSS();this.callback(this.endTime);},stop:function(e){if(this.cancelExit){this.cancelExit();
delete this.cancelExit;}else{if(this.cancelSetTransitionCSS){this.cancelSetTransitionCSS();delete this.cancelSetTransitionCSS;}else{if(this.cancelSetStyleCSS){this.cancelSetStyleCSS();
delete this.cancelSetStyleCSS;if(e){this.resetCSS();}}else{if(this.cancelComplete){clearTimeout(this.cancelComplete);delete this.cancelComplete;if(e){this.resetCSS();
this.set(this.get());}}}}}return this;},resetCSS:function(ar){var aw=w(this.node),av=(aw(n+"Property").replace(/\s+/g,"")||"all").split(","),au=(aw(n+"Duration").replace(/\s+/g,"")||"0s").split(","),e=(aw(n+"TimingFunction").replace(/\s+/g,"")||"ease").match(/cubic-bezier\([\d-.,]+\)|([a-z-]+)/g);
ap("all",av,au,e);ap(this.hproperty,av,au,e);if(ar){av.push(this.hproperty);au.push(this.duration+"ms");e.push("cubic-bezier("+this.equation+")");}var at=this.node.style;
at[n+"Property"]=av;at[n+"Duration"]=au;at[n+"TimingFunction"]=e;},parseEquation:function(e){if(typeof e==="string"){return al.parent.parseEquation.call(this,e,true);
}}});var g=n?al:ai;var B=function(e,ar){return typeof e==="function"?H(e):m(e,ar);};m.implement({animate:function(au,ar,e){var aA=au,aB=ar;if(typeof au==="string"){aA={};
aA[au]=ar;aB=e;}if(aB==null){aB={};}var aw=typeof aB;aB=aw==="function"?{callback:aB}:aw==="string"||aw==="number"?{duration:aB}:aB;var az=aB.callback||function(){},av=0,at=0;
aB.callback=function(aC){if(++av===at){az(aC);}};for(var ay in aA){var ax=aA[ay],ay=aj(ay);this.forEach(function(aE){at++;var aD=m(aE),aC=aD._animations||(aD._animations={});
var aF=aC[ay]||(aC[ay]=new g(aE,ay));aF.setOptions(aB).start(ax);});}return this;},style:function(e,aw){var ar=e;if(typeof e==="string"){ar={};ar[e]=aw;
}for(var au in ar){var at=ar[au],av=Y(au=aj(au));this.forEach(function(az){var ay=m(az),ax=ay._animations,aA;if(ax&&(aA=ax[au])){aA.stop(true);}av.call(az,at);
});}return this;},compute:function(at){at=aj(at);var e=this[0];if(at==="transform"&&ac){return w(e)(D);}var ar=M(at).call(e);return ar!=null?ar.replace(f,function(au,aw,av){return av==="px"?au:ah(e,av)*aw+"px";
}):"";}});B.parse=function(at,ar,e){return(y[aj(at)]||G)(ar,e);};h.exports=B;},"8":function(c,d,a,e){var b=c("9");b.implement({clean:function(){return b.trim((this+"").replace(/\s+/g," "));
},camelize:function(){return(this+"").replace(/-\D/g,function(f){return f.charAt(1).toUpperCase();});},hyphenate:function(){return(this+"").replace(/[A-Z]/g,function(f){return"-"+f.toLowerCase();
});},capitalize:function(){return(this+"").replace(/\b[a-z]/g,function(f){return f.toUpperCase();});},escape:function(){return(this+"").replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1");
},number:function(){return parseFloat(this);}});if(typeof JSON!=="undefined"){b.implement({decode:function(){return JSON.parse(this);}});}d.exports=b;},"9":function(e,d,g,c){var j=e("4")["string"];
var k=("charAt,charCodeAt,concat,contains,endsWith,indexOf,lastIndexOf,localeCompare,match,replace,search,slice,split,startsWith,substr,substring,toLocaleLowerCase,toLocaleUpperCase,toLowerCase,toString,toUpperCase,trim,valueOf").split(",");
for(var f={},h=0,b,a;b=k[h++];){if(a=String.prototype[b]){f[b]=a;}}if(!f.trim){f.trim=function(){return(this+"").replace(/^\s+|\s+$/g,"");};}d.exports=j.implement(f);
},a:function(g,f,h,e){var d=g("5"),j=g("3").prototype;var k=0;var c=function(l){return l===e?"global":l.uniqueNumber||(l.uniqueNumber="n:"+(k++).toString(36));
};var b={};var i=d({constructor:function i(p,o){if(p==null){return this&&this.constructor===i?new a():null;}var x=p;if(p.constructor!==a){x=new a();var v;
if(typeof p==="string"){if(!x.search){return null;}x[x.length++]=o||document;return x.search(p);}if(p.nodeType||p===e){x[x.length++]=p;}else{if(p.length){var w={};
for(var u=0,r=p.length;u<r;u++){var m=i(p[u],o);if(m&&m.length){for(var t=0,s=m.length;t<s;t++){var q=m[t];v=c(q);if(!w[v]){x[x.length++]=q;w[v]=true;}}}}}}}if(!x.length){return null;
}if(x.length===1){v=c(x[0]);return b[v]||(b[v]=x);}return x;}});var a=d({inherits:i,constructor:function a(){this.length=0;},unlink:function(){return this.map(function(m,l){delete b[c(m)];
return m;});},forEach:j.forEach,map:j.map,filter:j.filter,every:j.every,some:j.some});f.exports=i;},b:function(h,b,r,n){var c=h("5"),a=h("2").request,k=h("c");
var q=h("3").map;var g="([\\d.]+)(s|ms)?",j="cubic-bezier\\(([-.\\d]+),([-.\\d]+),([-.\\d]+),([-.\\d]+)\\)";var p=RegExp(g),e=RegExp(j),m=RegExp(j,"g");
var i={"default":"cubic-bezier(0.25, 0.1, 0.25, 1.0)",linear:"cubic-bezier(0, 0, 1, 1)","ease-in":"cubic-bezier(0.42, 0, 1.0, 1.0)","ease-out":"cubic-bezier(0, 0, 0.58, 1.0)","ease-in-out":"cubic-bezier(0.42, 0, 0.58, 1.0)"};
i.ease=i["default"];var o=function(u,t,s){return(t-u)*s+u;};var l=function(t){var s=[];var u=(t+"").replace(/[-.\d]+/g,function(v){s.push(+v);return"@";
});return[s,u];};var f=c({constructor:function f(u,t){this.setOptions(t);this.render=u||function(){};var s=this;this.bStep=function(v){return s.step(v);
};this.bExit=function(v){s.exit(v);};},setOptions:function(s){if(s==null){s={};}if(!(this.duration=this.parseDuration(s.duration||"500ms"))){throw new Error("invalid duration");
}if(!(this.equation=this.parseEquation(s.equation||"default"))){throw new Error("invalid equation");}this.callback=s.callback||function(){};return this;
},parseDuration:function(u){if(u=(u+"").match(p)){var t=+u[1],s=u[2]||"ms";if(s==="s"){return t*1000;}if(s==="ms"){return t;}}},parseEquation:function(t,v){var u=typeof t;
if(u==="function"){return t;}else{if(u==="string"){t=i[t]||t;var s=t.replace(/\s+/g,"").match(e);if(s){t=q(s.slice(1),function(w){return +w;});if(v){return t;
}if(t.toString()==="0,0,1,1"){return function(w){return w;};}u="object";}}}if(u==="object"){return k(t[0],t[1],t[2],t[3],1000/60/this.duration/4);}},cancel:function(s){this.to=s;
this.cancelExit=a(this.bExit);},exit:function(s){this.render(this.to);delete this.cancelExit;this.callback(s);},start:function(x,w){this.stop();if(this.duration===0){this.cancel(w);
return this;}this.isArray=false;this.isNumber=false;var v=typeof x,u=typeof w;if(v==="object"&&u==="object"){this.isArray=true;}else{if(v==="number"&&u==="number"){this.isNumber=true;
}}var t=l(x),s=l(w);this.from=t[0];this.to=s[0];this.templateFrom=t[1];this.templateTo=s[1];if(this.from.length!==this.to.length||this.from.toString()===this.to.toString()){this.cancel(w);
return this;}delete this.time;this.length=this.from.length;this.cancelStep=a(this.bStep);return this;},stop:function(){if(this.cancelExit){this.cancelExit();
delete this.cancelExit;}else{if(this.cancelStep){this.cancelStep();delete this.cancelStep;}}return this;},step:function(s){this.time||(this.time=s);var y=(s-this.time)/this.duration;
if(y>1){y=1;}var B=this.equation(y),z=this.from,A=this.to,x=this.templateTo;for(var v=0,u=this.length;v<u;v++){var w=z[v],C=A[v];x=x.replace("@",C!==w?o(w,C,B):C);
}this.render(this.isArray?x.split(","):this.isNumber?+x:x,y);if(y!==1){this.cancelStep=a(this.bStep);}else{delete this.cancelStep;this.callback(s);}}});
var d=function(t){var s=new f(t);return{start:function(x,w,u){var v=typeof u;s.setOptions(v==="function"?{callback:u}:v==="string"||v==="number"?{duration:u}:u).start(x,w);
return this;},stop:function(){s.stop();return this;}};};d.prototype=f.prototype;b.exports=d;},c:function(b,c,a,d){c.exports=function(h,j,f,i,l){var g=function(n){var m=1-n;
return 3*m*m*n*h+3*m*n*n*f+n*n*n;};var e=function(n){var m=1-n;return 3*m*m*n*j+3*m*n*n*i+n*n*n;};var k=function(n){var m=1-n;return 3*(2*(n-1)*n+m*m)*h+3*(-n*n*n+2*m*n)*f;
};return function(p){var m=p,u,s,q,n,r,o;for(q=m,o=0;o<8;o++){n=g(q)-m;if(Math.abs(n)<l){return e(q);}r=k(q);if(Math.abs(r)<0.000001){break;}q=q-n/r;}u=0,s=1,q=m;
if(q<u){return e(u);}if(q>s){return e(s);}while(u<s){n=g(q);if(Math.abs(n-m)<l){return e(q);}if(m>n){u=q;}else{s=q;}q=(s-u)*0.5+u;}return e(q);};};},d:function(e,d,f,b){var c=function(j){return Math.sqrt(j[0]*j[0]+j[1]*j[1]);
};var g=function(k){var j=c(k);return j?[k[0]/j,k[1]/j]:[0,0];};var a=function(k,j){return k[0]*j[0]+k[1]*j[1];};var i=Math.atan2;var h=function(k,j,m,l){return[m*k[0]+l*j[0],m*k[1]+l*j[1]];
};d.exports=function(t,s,r,q,p,o){if(t*q-s*r===0){return false;}var j=[p,o];var k=[[t,s],[r,q]];var l=[c(k[0])];k[0]=g(k[0]);var u=a(k[0],k[1]);k[1]=h(k[1],k[0],1,-u);
l[1]=c(k[1]);u/=l[1];var n=i(k[0][1],k[0][0]);return[j,n,u,l];};}});;

((function(){if(typeof this.RokSprocket=="undefined"){this.RokSprocket={};
}else{Object.merge(this.RokSprocket,{Request:null});}var f=function(g){return g!=null;};var e=Object.prototype.hasOwnProperty;Object.extend({getFromPath:function(j,k){if(typeof k=="string"){k=k.split(".");
}for(var h=0,g=k.length;h<g;h++){if(e.call(j,k[h])){j=j[k[h]];}else{return null;}}return j;},cleanValues:function(g,i){i=i||f;for(var h in g){if(!i(g[h])){delete g[h];
}}return g;},erase:function(g,h){if(e.call(g,h)){delete g[h];}return g;},run:function(h){var g=Array.slice(arguments,1);for(var i in h){if(h[i].apply){h[i].apply(h,g);
}}return h;}});var d=function(){},a=("onprogress" in new Browser.Request()),c=new Class({Extends:this.Request,options:{method:"post",model:"",model_action:"",params:{}},initialize:function(g){this.options.url=RokSprocket.AjaxURL.replace(/&amp;/g,"&");
this.parent(g);},processScripts:function(g){return g;},onStateChange:function(){var g=this.xhr;if(g.readyState!=4||!this.running){return;}this.running=false;
this.status=0;Function.attempt(function(){var h=g.status;this.status=(h==1223)?204:h;}.bind(this));g.onreadystatechange=d;if(a){g.onprogress=g.onloadstart=d;
}clearTimeout(this.timer);this.response=new b(this.xhr.responseText||"",{onError:this.onResponseError.bind(this)});if(this.options.isSuccess.call(this,this.status)){if(this.response.getPath("status")=="success"){this.success(this.response);
}else{this.onResponseError(this.response);}}else{this.failure();this.onResponseError(this.response);}},onResponseError:function(i){var h=this.options.data,g="RokSprocket Error [model: "+h.model+", model_action: "+h.model_action+", params: "+h.params+"]: ";
g+=(i.status?i.status+" - "+i.statusText:i);this.fireEvent("onResponseError",i,g);throw new Error(g);},setParams:function(h){var g=Object.merge(this.options.data||{},{params:h||{}});
g.params=JSON.encode(g.params);this.options.data=g;["model","model_action"].each(function(i){this.options.data[i]=this.options[i];},this);return this;}});
var b=new Class({Implements:[Options,Events],options:{},initialize:function(h,g){this.setOptions(g);this.setData(h);return this;},setData:function(g){if(typeOf(g)=="string"){g=g.trim();
}this.data=g;},getData:function(){return(typeOf(this.data)!="object")?this.parseData(this.data):this.data;},parseData:function(){if(!JSON.validate(this.data)){return this.error("Invalid JSON data <hr /> "+this.data);
}this.data=JSON.decode(this.data);if(this.data.status!="success"){return this.error(this.data.message);}this.fireEvent("parse",this.data);return this.success(this.data);
},getPath:function(h){var g=this.getData();if(typeOf(g)=="object"){return Object.getFromPath(g,h||"");}else{return null;}},success:function(g){this.data=g;
this.fireEvent("success",this.data);return this.data;},error:function(g){this.data=g;this.fireEvent("error",this.data);return this.data;}});this.RokSprocket.Request=c;
})());;

((function(){if(typeof this.RokSprocket=="undefined"){this.RokSprocket={};
}else{Object.merge(this.RokSprocket,{Strips:null});}var a=new Class({Implements:[Options,Events],options:{settings:{}},initialize:function(c){this.setOptions(c);
this.strips=document.getElements("[data-strips]");this.settings={};this.timers={};this.statuses={};this.curve=Browser.opera?{equation:"ease-in-out"}:{curve:"cubic-bezier(0.37,0.61,0.59,0.87)"};
},attach:function(e,c){e=typeOf(e)=="number"?document.getElements("[data-strips="+this.getID(e)+"]"):e;c=typeOf(c)=="string"?JSON.decode(c):c;var d=(e?new Elements([e]).flatten():this.strips);
d.each(function(f){f.store("roksprocket:strips:attached",true);this.setSettings(f,c,"restore");var h={mouseenter:f.retrieve("roksprocket:strips:mouseenter",function(i){this.stopTimer.call(this,f);
this.pause.call(this,f);}.bind(this)),mouseleave:f.retrieve("roksprocket:strips:mouseleave",function(i){this.resume.call(this,f);this.startTimer.call(this,f);
}.bind(this)),page:f.retrieve("roksprocket:strips:relay",function(i,j){if(i){i.preventDefault();}this.toPage.call(this,f,j);}.bind(this)),next:f.retrieve("roksprocket:strips:next",function(j,i){this.direction.call(this,j,f,i,"next");
}.bind(this)),previous:f.retrieve("roksprocket:strips:previous",function(j,i){this.direction.call(this,j,f,i,"previous");}.bind(this)),swipe:f.retrieve("roksprocket:strips:swipe",function(j,i){j.preventDefault();
this.direction.call(this,j,f,i,(j.direction=="right"?"previous":"next"));}.bind(this))};["mouseenter","mouseleave"].each(function(i){f.addEvent(i,h[i]);
});["page","next","previous"].each(function(j,k){var l="[data-strips-"+j+"]";if(k>0){l+=", [data-"+j+"]";}f.addEvent("click:relay("+l+")",h[j]);},this);
f.retrieve("roksprocket:strips:ajax",new RokSprocket.Request({model:"strips",model_action:"getPage",onRequest:this.onRequest.bind(this,f),onSuccess:function(i){this.onSuccess(i,f,f.retrieve("roksprocket:strips:ajax"));
}.bind(this)}));if(Browser.Features.Touch){f.addEvent("swipe",h.swipe);}var g=f.getElement("[data-strips-page].active");if(!g){this.toPage(f,0);}else{if(this.getSettings(f).autoplay&&this.getSettings(f).autoplay.toInt()){this.startTimer(f);
}}},this);},detach:function(d){d=typeOf(d)=="number"?document.getElements("[data-strips="+this.getID(d)+"]"):d;var c=(d?new Elements([d]).flatten():this.strips);
c.each(function(e){e.store("roksprocket:strips:attached",false);var f={mouseenter:e.retrieve("roksprocket:strips:mouseenter"),mouseleave:e.retrieve("roksprocket:strips:mouseleave"),page:e.retrieve("roksprocket:strips:relay"),next:e.retrieve("roksprocket:strips:next"),previous:e.retrieve("roksprocket:strips:previous")};
["mouseenter","mouseleave"].each(function(g){e.removeEvent(g,f[g]);});["page","next","previous"].each(function(g,h){var j="[data-strips-"+g+"]";if(h>0){j+=", [data-"+g+"]";
}e.removeEvent("click:relay("+j+")",f[g]);},this);if(Browser.Features.Touch){e.removeEvent("swipe",f.swipe);}},this);},setSettings:function(c,f,e){var g=this.getID(c),d=Object.clone(this.options.settings);
if(!e||!this.settings["id-"+g]){this.settings["id-"+g]=Object.merge(d,f||d);}},getSettings:function(c){var d=this.getID(c);return this.settings["id-"+d];
},getContainer:function(c){if(!c){c=document.getElements("[data-strips]");}if(typeOf(c)=="number"){c=document.getElement("[data-strips="+c+"]");}if(typeOf(c)=="string"){c=document.getElement(c);
}return c;},getID:function(c){if(typeOf(c)=="number"){c=document.getElement("[data-strips="+c+"]");}if(typeOf(c)=="string"){c=document.getElement(c);}return !c?c:c.get("data-strips");
},toPage:function(c,f){c=this.getContainer(c);f=(typeOf(f)=="element")?f.get("data-strips-page"):f;if(!c.retrieve("roksprocket:strips:attached")){return;
}var d=c.getElements("[data-strips-page]"),e=c.retrieve("roksprocket:strips:ajax");if(!d.length){return;}if(f>d.length){f=1;}if(f<1){f=d.length;}if(d[f-1].hasClass("active")){return;
}if(!e.isRunning()){e.cancel().setParams({moduleid:c.get("data-strips"),page:f}).send();}},direction:function(f,c,e,d){if(f){f.preventDefault();}d=d||"next";
this[d](c,e);},next:function(c,d){c=this.getContainer(c);if(!c.retrieve("roksprocket:strips:attached")){return;}if(typeOf(c)=="elements"){return this.nextAll(c,d);
}var f=c.getElements("[data-strips-page]");if(!f.length){return;}var g=c.getElement("[data-strips-page].active").get("data-strips-page"),e=g.toInt()+1;
if(e>f.length){e=1;}this.dir="right";this.toPage(c,e);},nextAll:function(d,c){d=this.getContainer(d);if(typeOf(d)=="element"){return this.next(d,c);}d.each(function(e){this.next(e,c);
},this);},previous:function(c,d){c=this.getContainer(c);if(!c.retrieve("roksprocket:strips:attached")){return;}if(typeOf(c)=="elements"){return this.nextAll(c,d);
}var f=c.getElements("[data-strips-page]");if(!f.length){return;}var g=c.getElement("[data-strips-page].active").get("data-strips-page"),e=g.toInt()-1;
if(e<1){e=f.length;}this.dir="left";this.toPage(c,e);},previousAll:function(d,c){d=this.getContainer(d);if(typeOf(d)=="element"){return this.previous(d,c);
}d.each(function(e){this.previous(e,c);},this);},startTimer:function(d){d=this.getContainer(d);if(!d.retrieve("roksprocket:strips:attached")){return;}var f=this.getSettings(d),h=this.getID(d),c=this.statuses["id-"+h],g=f.autoplay.toInt(),e=(f.delay.toInt())*1000;
clearTimeout(this.timers["id-"+h]);if(g&&c!="pause"){this.timers["id-"+h]=this.next.delay(e,this,d);}},stopTimer:function(c){c=this.getContainer(c);var d=this.getID(c);
clearTimeout(this.timers["id-"+d]);},pause:function(c){c=this.getContainer(c);var d=this.getID(c);this.statuses["id-"+d]="pause";},resume:function(c){c=this.getContainer(c);
var d=this.getID(c);this.statuses["id-"+d]="play";},onRequest:function(c){c.addClass("loading");},onSuccess:function(h,d){var l=d.getElement("[data-strips-items]"),j=d.getElements("[data-strips-item]"),i=h.getPath("payload.html"),k=h.getPath("payload.page"),f=this.getSettings(d),g=f.animation||"fadeDelay";
d.removeClass("loading");var e=new Element("div",{html:i}),c=e.getChildren(),m,n;if(g=="random"){g=Object.keys(Object.merge({},this.Animations)).getRandom();
}if(!this.Animations[g]){g="fadeDelay";}f.callback=function(){if(f.autoplay&&f.autoplay.toInt()){this.startTimer(d);}}.bind(this);this.Animations[g].call(this,l,j,c,f);
this._switchPage(d,k);},_switchPage:function(c,e){var d=c.getElements("[data-strips-page]");d.removeClass("active");d[e-1].addClass("active");}});var b={fade:function(){var d=arguments[0],c=arguments[1],g=arguments[2],f=arguments[3],e={duration:this.AnimationsSpeed.fade.duration,curve:this.curve,callback:function(){d.empty().adopt(g);
e.callback=f.callback||function(){};moofx(d).animate({opacity:1},e);}};moofx(d).animate({opacity:0},e);},fadeDelay:function(){var d=arguments[0],c=arguments[1],g=arguments[2],f=arguments[3],e={duration:this.AnimationsSpeed.fadeDelay.duration,curve:this.curve};
if(this.dir=="left"){c.reverse();}c.forEach(function(j,h){(function(){if(h==c.length-1){e.callback=function(){moofx(g).style({opacity:0});d.empty().adopt(g);
e.callback=f.callback||function(){};if(this.dir=="left"){g.reverse();}g.forEach(function(k,i){(function(){moofx(g[i]).animate({opacity:1},e);}).delay(i*this.AnimationsSpeed.fadeDelay.delay);
},this);}.bind(this);}moofx(j).animate({opacity:0},e);}).delay(h*this.AnimationsSpeed.fadeDelay.delay,this);},this);},slide:function(){var d=arguments[0],c=arguments[1],g=arguments[2],f=arguments[3],e={duration:this.AnimationsSpeed.slide.duration,curve:this.curve,callback:function(){d.empty().adopt(g);
e.callback=f.callback||function(){};h=d.getSize().x+25;if(this.dir=="left"){moofx(g).style({right:h,position:"relative",left:"inherit"});moofx(g).animate({right:0},e);
}else{moofx(g).style({left:h,position:"relative",right:"inherit"});moofx(g).animate({left:0},e);}}.bind(this)},h=0;moofx(c).style({position:"relative"});
h=d.getSize().x+25;if(this.dir=="left"){moofx(c).animate({left:h,right:"inherit"},e);}else{moofx(c).animate({right:h,left:"inherit"},e);}},flyIn:function(){var d=arguments[0],c=arguments[1],g=arguments[2],f=arguments[3],e={duration:this.AnimationsSpeed.flyIn.duration,curve:this.curve},h=0;
if(this.dir=="left"){c.reverse();}c.forEach(function(k,j){(function(){if(j==c.length-1){e.callback=function(){d.empty().adopt(g);e.callback=null;if(this.dir=="left"){g.reverse();
}g.forEach(function(l,i){h=d.getSize().x+(g[i].getSize().x/(i+1))+25;if(this.dir=="left"){moofx(g).style({right:h,position:"relative",left:"inherit"});
}else{moofx(g).style({left:h,position:"relative",right:"inherit"});}(function(){if(i==g.length-1){e.callback=f.callback||function(){};}if(this.dir=="left"){moofx(g[i]).animate({right:0},e);
}else{moofx(g[i]).animate({left:0},e);}}).delay(i*this.AnimationsSpeed.flyIn.delay,this);},this);}.bind(this);}moofx(k).style({position:"relative"});h=d.getSize().x+(k.getSize().x/(j+1))+25;
if(this.dir=="left"){moofx(k).animate({left:h,right:"inherit"},e);}else{moofx(k).animate({right:h,left:"inherit"},e);}}).delay(j*this.AnimationsSpeed.flyIn.delay,this);
},this);},fallDown:function(){var d=arguments[0],c=arguments[1],g=arguments[2],f=arguments[3],e={duration:this.AnimationsSpeed.fallDown.duration,curve:this.curve},h=0;
if(this.dir=="left"){c.reverse();}c.forEach(function(k,j){(function(){if(j==c.length-1){e.callback=function(){d.empty().adopt(g);e.callback=null;if(this.dir=="left"){g.reverse();
}g.forEach(function(l,i){h=d.getSize().y+(g[i].getSize().y/(i+1))+25;moofx(g).style({bottom:h,position:"relative",top:"inherit"});(function(){if(i==g.length-1){e.callback=function(){g.set("style",null);
f.callback.call(this);};}moofx(g[i]).animate({bottom:0},e);}).delay(i*this.AnimationsSpeed.fallDown.delay,this);},this);}.bind(this);}moofx(k).style({position:"relative"});
h=d.getSize().y+(k.getSize().y/(j+1))+25;moofx(k).animate({top:h,bottom:"inherit"},e);}).delay(j*this.AnimationsSpeed.fallDown.delay,this);},this);},floatUp:function(){var d=arguments[0],c=arguments[1],g=arguments[2],f=arguments[3],e={duration:this.AnimationsSpeed.floatUp.duration,curve:this.curve},h=0;
if(this.dir=="left"){c.reverse();}c.forEach(function(k,j){(function(){if(j==c.length-1){e.callback=function(){d.empty().adopt(g);e.callback=null;if(this.dir=="left"){g.reverse();
}g.forEach(function(l,i){h=d.getSize().y+(g[i].getSize().y/(i+1))+25;moofx(g).style({top:h,position:"relative",bottom:"inherit"});(function(){if(i==g.length-1){e.callback=function(){g.set("style",null);
f.callback.call(this);};}moofx(g[i]).animate({top:0},e);}).delay(i*this.AnimationsSpeed.floatUp.delay,this);},this);}.bind(this);}moofx(k).style({position:"relative"});
h=d.getSize().y+(k.getSize().y/(j+1))+25;moofx(k).animate({bottom:h,top:"inherit"},e);}).delay(j*this.AnimationsSpeed.floatUp.delay,this);},this);},scaleOut:function(){var d=arguments[0],c=arguments[1],g=arguments[2],f=arguments[3],e={duration:this.AnimationsSpeed.scaleOut.duration,curve:this.curve};
if(this.dir=="left"){c.reverse();}c.forEach(function(j,h){(function(){if(h==c.length-1){e.callback=function(){d.empty().adopt(g);e.callback=null;if(this.dir=="left"){g.reverse();
}g.forEach(function(k,i){moofx(g).style({transform:"scale(0)",opacity:0});if(i==g.length-1){e.callback=f.callback||function(){};}(function(){moofx(g[i]).animate({transform:"scale(1)",opacity:1},e);
}).delay(i*this.AnimationsSpeed.scaleOut.delay,this);},this);}.bind(this);}moofx(j).style({"transform-origin":"center"});moofx(j).animate({transform:"scale(0)",opacity:0},e);
}).delay(h*this.AnimationsSpeed.scaleOut.delay,this);},this);},scaleIn:function(){var d=arguments[0],c=arguments[1],g=arguments[2],f=arguments[3],e={duration:this.AnimationsSpeed.scaleIn.duration,curve:this.curve};
if(this.dir=="left"){c.reverse();}d.store("overflow",d.getStyle("overflow"));d.setStyle("overflow","visible");c.forEach(function(j,h){(function(){if(h==c.length-1){e.callback=function(){d.empty().adopt(g);
e.callback=null;if(this.dir=="left"){g.reverse();}g.forEach(function(k,i){moofx(g).style({transform:"scale(1.5)",opacity:0});if(i==g.length-1){e.callback=function(){d.setStyle("overflow",null);
f.callback.call(this);};}(function(){moofx(g[i]).animate({transform:"scale(1)",opacity:1},e);}).delay(i*this.AnimationsSpeed.scaleIn.delay,this);},this);
}.bind(this);}moofx(j).style({"transform-origin":"center"});moofx(j).animate({transform:"scale(1.5)",opacity:0},e);}).delay(h*this.AnimationsSpeed.scaleIn.delay,this);
},this);}};a.prototype.Animations=b;this.RokSprocket.Strips=a;})());;

((function(){var a={fade:{duration:"250ms"},fadeDelay:{duration:"250ms",delay:75},slide:{duration:"250ms"},flyIn:{duration:"500ms",delay:90},fallDown:{duration:"250ms",delay:50},floatUp:{duration:"250ms",delay:50},scaleOut:{duration:"250ms",delay:100},scaleIn:{duration:"250ms",delay:100}};
this.RokSprocket.Strips.prototype.AnimationsSpeed=Object.merge({},this.RokSprocket.Strips.prototype.AnimationsSpeed,a);})());;

((function(){if(typeof this.RokSprocket=="undefined"){this.RokSprocket={};
}else{Object.merge(this.RokSprocket,{Tabs:null});}var a=new Class({Implements:[Options,Events],options:{settings:{}},initialize:function(b){this.setOptions(b);
this.tabs=document.getElements("[data-tabs]");this.settings={};this.timers={};this.statuses={};},attach:function(c,b){c=typeOf(c)=="number"?document.getElements("[data-tabs="+this.getID(c)+"]"):c;
b=typeOf(b)=="string"?JSON.decode(b):b;var d=(c?new Elements([c]).flatten():this.tabs);d.each(function(e){e.store("roksprocket:tabs:attached",true);this.setSettings(e,b,"restore");
var g={mouseenter:e.retrieve("roksprocket:tabs:mouseenter",function(h){this.stopTimer.call(this,e);this.pause.call(this,e);}.bind(this)),mouseleave:e.retrieve("roksprocket:tabs:mouseleave",function(h){this.resume.call(this,e);
this.startTimer.call(this,e);}.bind(this)),navigation:e.retrieve("roksprocket:tabs:relay",function(i,h){this.toTab.call(this,i,e,h);}.bind(this)),next:e.retrieve("roksprocket:tabs:next",function(i,h){this.direction.call(this,i,e,h,"next");
}.bind(this)),previous:e.retrieve("roksprocket:tabs:previous",function(i,h){this.direction.call(this,i,e,h,"previous");}.bind(this)),swipe:e.retrieve("roksprocket:tabs:swipe",function(i,h){i.preventDefault();
this.direction.call(this,i,e,h,(i.direction=="right"?"previous":"next"));}.bind(this))};["mouseenter","mouseleave"].each(function(h){e.addEvent(h,g[h]);
});["navigation","next","previous"].each(function(h,j){var k="[data-tabs-"+h+"]";if(j>0){k+=", [data-"+h+"]";}e.addEvent("click:relay("+k+")",g[h]);},this);
if(Browser.Features.Touch){e.getElements("[data-tabs-panel]").addEvent("swipe",g.swipe);}var f=e.getElement("[data-tabs-navigation].active");if(!f){this.toPosition(e,0);
}else{if(this.getSettings(e).autoplay&&this.getSettings(e).autoplay.toInt()){this.startTimer(e);}}},this);},detach:function(b){b=typeOf(b)=="number"?document.getElements("[data-tabs="+this.getID(b)+"]"):b;
var c=(b?new Elements([b]).flatten():this.tabs);c.each(function(d){d.store("roksprocket:tabs:attached",false);var e={mouseenter:d.retrieve("roksprocket:tabs:mouseenter"),mouseleave:d.retrieve("roksprocket:tabs:mouseleave"),navigation:d.retrieve("roksprocket:tabs:relay"),next:d.retrieve("roksprocket:tabs:next"),previous:d.retrieve("roksprocket:tabs:previous")};
["mouseenter","mouseleave"].each(function(f){d.removeEvent(f,e[f]);});["navigation","next","previous"].each(function(f,g){var h="[data-tabs-"+f+"]";if(g>0){h+=", [data-"+f+"]";
}d.removeEvent("click:relay("+h+")",e[f]);},this);if(Browser.Features.Touch){d.getElements("[data-tabs-panel]").removeEvent("swipe",e.swipe);}},this);},setSettings:function(b,e,d){var f=this.getID(b),c=Object.clone(this.options.settings);
if(!d||!this.settings["id-"+f]){this.settings["id-"+f]=Object.merge(c,e||c);}},getSettings:function(b){var c=this.getID(b);return this.settings["id-"+c];
},getContainer:function(b){if(!b){b=document.getElements("[data-tabs]");}if(typeOf(b)=="number"){b=document.getElement("[data-tabs="+b+"]");}if(typeOf(b)=="string"){b=document.getElement(b);
}return b;},getID:function(b){if(typeOf(b)=="number"){b=document.getElement("[data-tabs="+b+"]");}if(typeOf(b)=="string"){b=document.getElement(b);}return !b?b:b.get("data-tabs");
},toPosition:function(c,b){c=this.getContainer(c);if(!c.retrieve("roksprocket:tabs:attached")){return;}var e=c.getElements("[data-tabs-navigation]"),d=c.getElements("[data-tabs-panel]"),f=this.getSettings(c);
if(!e.length||!d.length){return;}if(e[b].hasClass("active")){return;}if(b>e.length-1){b=0;}if(b<0){b=e.length-1;}e.removeClass("active");d.removeClass("active");
e[b].addClass("active");d[b].addClass("active");if(f.autoplay&&f.autoplay.toInt()){this.startTimer(c);}},toTab:function(g,c,f){if(g){g.preventDefault();
}c=this.getContainer(c);if(!c.retrieve("roksprocket:tabs:attached")){return;}var e=c.getElements("[data-tabs-navigation]"),d=c.getElements("[data-tabs-panel]"),b=e.indexOf(f);
if(b==-1){throw new Error('RokSprocket Tabs: Instance ID "'+c.get("data-tabs")+'", index not found.');}this.toPosition(c,b);},direction:function(e,b,d,c){if(e){e.preventDefault();
}c=c||"next";this[c](b,d);},next:function(c,e){c=this.getContainer(c);if(!c.retrieve("roksprocket:tabs:attached")){return;}if(typeOf(c)=="elements"){return this.nextAll(c,e);
}var d=c.getElements("[data-tabs-navigation]"),g=d.filter(function(h){return h.hasClass("active");}),b=d.indexOf(g.length?g[0]:"")||0,f=b+1;if(f>d.length-1){f=0;
}this.toPosition(c,f);},nextAll:function(c,b){c=this.getContainer(c);if(typeOf(c)=="element"){return this.next(c,b);}c.each(function(d){this.next(d,b);
},this);},previous:function(c,e){c=this.getContainer(c);if(!c.retrieve("roksprocket:tabs:attached")){return;}if(typeOf(c)=="elements"){return this.nextAll(c,e);
}var d=c.getElements("[data-tabs-navigation]"),g=d.filter(function(h){return h.hasClass("active");}),b=d.indexOf(g.length?g[0]:"")||0,f=b-1;if(f<0){f=d.length-1;
}this.toPosition(c,f);},previousAll:function(c,b){c=this.getContainer(c);if(typeOf(c)=="element"){return this.previous(c,b);}c.each(function(d){this.previous(d,b);
},this);},startTimer:function(c){c=this.getContainer(c);if(!c.retrieve("roksprocket:tabs:attached")){return;}var e=this.getSettings(c),g=this.getID(c),b=this.statuses["id-"+g],f=e.autoplay.toInt(),d=(e.delay.toInt())*1000;
clearTimeout(this.timers["id-"+g]);if(f&&b!="pause"){this.timers["id-"+g]=this.next.delay(d,this,c);}},stopTimer:function(b){b=this.getContainer(b);var c=this.getID(b);
clearTimeout(this.timers["id-"+c]);},pause:function(b){b=this.getContainer(b);var c=this.getID(b);this.statuses["id-"+c]="pause";},resume:function(b){b=this.getContainer(b);
var c=this.getID(b);this.statuses["id-"+c]="play";}});this.RokSprocket.Tabs=a;})());;

