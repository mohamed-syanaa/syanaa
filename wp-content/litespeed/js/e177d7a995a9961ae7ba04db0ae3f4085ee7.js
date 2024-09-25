!function(e){"use strict";var i="Morphext",s={animation:"bounceIn",separator:",",speed:2e3,complete:e.noop};function n(t,i){this.element=e(t),this.settings=e.extend({},s,i),this._defaults=s,this._init()}n.prototype={_init:function(){var s=this;this.phrases=[],this.element.addClass("morphext"),e.each(this.element.text().split(this.settings.separator),function(t,i){s.phrases.push(e.trim(i))}),this.index=-1,this.animate(),this.start()},animate:function(){this.index=++this.index%this.phrases.length,this.element[0].innerHTML='<span class="animated '+this.settings.animation+'">'+this.phrases[this.index]+"</span>",e.isFunction(this.settings.complete)&&this.settings.complete.call(this)},start:function(){var t=this;this._interval=setInterval(function(){t.animate()},this.settings.speed)},stop:function(){this._interval=clearInterval(this._interval)}},e.fn[i]=function(t){return this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new n(this,t))})}}(jQuery);(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Typed=e():t.Typed=e()})(this,function(){return function(t){function e(n){if(s[n])return s[n].exports;var i=s[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}([function(t,e,s){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),r=s(1),o=s(3),a=function(){function t(e,s){n(this,t),r.initializer.load(this,s,e),this.begin()}return i(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)}},{key:"typewrite",value:function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),i=1;return this.pause.status===!0?void this.setPauseStatus(t,e,!0):void(this.timeout=setTimeout(function(){e=o.htmlParser.typeHtmlChars(t,e,s);var n=0,r=t.substr(e);if("^"===r.charAt(0)&&/^\^\d+/.test(r)){var a=1;r=/\d+/.exec(r)[0],a+=r.length,n=parseInt(r),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+a),s.toggleBlinking(!0)}if("`"===r.charAt(0)){for(;"`"!==t.substr(e+i).charAt(0)&&(i++,!(e+i>t.length)););var u=t.substring(0,e),l=t.substring(u.length+1,e+i),c=t.substring(e+i+1);t=u+l+c,i--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),e>=t.length?s.doneTyping(t,e):s.keepTyping(t,e,i),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},n)},n))}},{key:"keepTyping",value:function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=s;var n=t.substr(0,e);this.replaceText(n),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,e)},this.backDelay))}},{key:"backspace",value:function(t,e){var s=this;if(this.pause.status===!0)return void this.setPauseStatus(t,e,!0);if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=o.htmlParser.backSpaceHtmlChars(t,e,s);var n=t.substr(0,e);if(s.replaceText(n),s.smartBackspace){var i=s.strings[s.arrayPos+1];i&&n===i.substr(0,e)?s.stopNum=e:s.stopNum=0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))},n)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e["default"]=a,t.exports=e["default"]},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},o=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),a=s(2),u=n(a),l=function(){function t(){i(this,t)}return o(t,[{key:"load",value:function(t,e,s){if("string"==typeof s?t.el=document.querySelector(s):t.el=s,t.options=r({},u["default"],e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var n=Array.prototype.slice.apply(t.stringsElement.children),i=n.length;if(i)for(var o=0;o<i;o+=1){var a=n[o];t.strings.push(a.innerHTML.trim())}}t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1;for(var o in t.strings)t.sequence[o]=o;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){var e="";return e=t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.type="text/css",s.setAttribute(e,!0);var n="";t.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==s.length&&(s.innerHTML=n,document.body.appendChild(s))}}}]),t}();e["default"]=l;var c=new l;e.initializer=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e["default"]=s,t.exports=e["default"]},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),i=function(){function t(){s(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if("<"===n||"&"===n){var i="";for(i="<"===n?">":";";t.substr(e+1).charAt(0)!==i&&(e++,!(e+1>t.length)););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if(">"===n||";"===n){var i="";for(i=">"===n?"<":"&";t.substr(e-1).charAt(0)!==i&&(e--,!(e<0)););e--}return e}}]),t}();e["default"]=i;var r=new i;e.htmlParser=r}])});!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(p){var a="tipso",d={speed:400,background:"#55b555",titleBackground:"#333333",color:"#ffffff",titleColor:"#ffffff",titleContent:"",showArrow:!0,position:"top",width:200,maxWidth:"",delay:200,hideDelay:0,animationIn:"",animationOut:"",offsetX:0,offsetY:0,arrowWidth:8,tooltipHover:!1,content:null,ajaxContentUrl:null,ajaxContentBuffer:0,contentElementId:null,useTitle:!1,templateEngineFunc:null,onBeforeShow:null,onShow:null,onHide:null};function s(t,o){this.element=t,this.$element=p(this.element),this.doc=p(document),this.win=p(window),this.settings=p.extend({},d,o),"object"==typeof this.$element.data("tipso")&&p.extend(this.settings,this.$element.data("tipso"));for(var e=Object.keys(this.$element.data()),r={},s=0;s<e.length;s++){var i=e[s].replace(a,"");if(""!==i)for(var n in r[i=i.charAt(0).toLowerCase()+i.slice(1)]=this.$element.data(e[s]),this.settings)n.toLowerCase()==i&&(this.settings[n]=r[i])}this._defaults=d,this._name=a,this._title=this.$element.attr("title"),this.mode="hide",this.ieFade=!l,this.settings.preferedPosition=this.settings.position,this.init()}function f(t){var o=t.clone();o.css("visibility","hidden"),p("body").append(o);var e=o.outerHeight(),r=o.outerWidth();return o.remove(),{width:r,height:e}}p.extend(s.prototype,{init:function(){var t=this,o=this.$element;this.doc;if(o.addClass("tipso_style").removeAttr("title"),t.settings.tooltipHover){var e=null,r=null;o.on("mouseover."+a,function(){clearTimeout(e),clearTimeout(r),r=setTimeout(function(){t.show()},150)}),o.on("mouseout."+a,function(){clearTimeout(e),clearTimeout(r),e=setTimeout(function(){t.hide()},200),t.tooltip().on("mouseover."+a,function(){t.mode="tooltipHover"}).on("mouseout."+a,function(){t.mode="show",clearTimeout(e),e=setTimeout(function(){t.hide()},200)})})}else o.on("mouseover."+a,function(){t.show()}),o.on("mouseout."+a,function(){t.hide()});t.settings.ajaxContentUrl&&(t.ajaxContent=null)},tooltip:function(){return this.tipso_bubble||(this.tipso_bubble=p('<div class="tipso_bubble"><div class="tipso_title"></div><div class="tipso_content"></div><div class="tipso_arrow"></div></div>')),this.tipso_bubble},show:function(){var t=this.tooltip(),o=this,e=this.win;!1===o.settings.showArrow?t.find(".tipso_arrow").hide():t.find(".tipso_arrow").show(),"hide"===o.mode&&(p.isFunction(o.settings.onBeforeShow)&&o.settings.onBeforeShow(o.$element,o.element,o),o.settings.size&&t.addClass(o.settings.size),o.settings.width?t.css({background:o.settings.background,color:o.settings.color,width:o.settings.width}).hide():o.settings.maxWidth?t.css({background:o.settings.background,color:o.settings.color,maxWidth:o.settings.maxWidth}).hide():t.css({background:o.settings.background,color:o.settings.color,width:200}).hide(),t.find(".tipso_title").css({background:o.settings.titleBackground,color:o.settings.titleColor}),t.find(".tipso_content").html(o.content()),t.find(".tipso_title").html(o.titleContent()),c(o),e.on("resize."+a,function(){o.settings.position=o.settings.preferedPosition,c(o)}),window.clearTimeout(o.timeout),o.timeout=null,o.timeout=window.setTimeout(function(){o.ieFade||""===o.settings.animationIn||""===o.settings.animationOut?t.appendTo("body").stop(!0,!0).fadeIn(o.settings.speed,function(){o.mode="show",p.isFunction(o.settings.onShow)&&o.settings.onShow(o.$element,o.element,o)}):t.remove().appendTo("body").stop(!0,!0).removeClass("animated "+o.settings.animationOut).addClass("noAnimation").removeClass("noAnimation").addClass("animated "+o.settings.animationIn).fadeIn(o.settings.speed,function(){p(this).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){p(this).removeClass("animated "+o.settings.animationIn)}),o.mode="show",p.isFunction(o.settings.onShow)&&o.settings.onShow(o.$element,o.element,o),e.off("resize."+a,null,"tipsoResizeHandler")})},o.settings.delay))},hide:function(t){var o=this,e=this.win,r=this.tooltip(),s=o.settings.hideDelay;t&&(s=0,o.mode="show"),window.clearTimeout(o.timeout),o.timeout=null,o.timeout=window.setTimeout(function(){"tooltipHover"!==o.mode&&(o.ieFade||""===o.settings.animationIn||""===o.settings.animationOut?r.stop(!0,!0).fadeOut(o.settings.speed,function(){p(this).remove(),p.isFunction(o.settings.onHide)&&"show"===o.mode&&o.settings.onHide(o.$element,o.element,o),o.mode="hide",e.off("resize."+a,null,"tipsoResizeHandler")}):r.stop(!0,!0).removeClass("animated "+o.settings.animationIn).addClass("noAnimation").removeClass("noAnimation").addClass("animated "+o.settings.animationOut).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){p(this).removeClass("animated "+o.settings.animationOut).remove(),p.isFunction(o.settings.onHide)&&"show"===o.mode&&o.settings.onHide(o.$element,o.element,o),o.mode="hide",e.off("resize."+a,null,"tipsoResizeHandler")}))},s)},close:function(){this.hide(!0)},destroy:function(){var t=this.$element,o=this.win;this.doc;t.off("."+a),o.off("resize."+a,null,"tipsoResizeHandler"),t.removeData(a),t.removeClass("tipso_style").attr("title",this._title)},titleContent:function(){var t=this.$element;return this.settings.titleContent?this.settings.titleContent:t.data("tipso-title")},content:function(){var t,o=this.$element,e=this,r=this._title;return e.settings.ajaxContentUrl?e._ajaxContent?t=e._ajaxContent:(e._ajaxContent=t=p.ajax({type:"GET",url:e.settings.ajaxContentUrl,async:!1}).responseText,0<e.settings.ajaxContentBuffer?setTimeout(function(){e._ajaxContent=null},e.settings.ajaxContentBuffer):e._ajaxContent=null):e.settings.contentElementId?t=p("#"+e.settings.contentElementId).text():e.settings.content?t=e.settings.content:!0===e.settings.useTitle?t=r:"string"==typeof o.data("tipso")&&(t=o.data("tipso")),null!==e.settings.templateEngineFunc&&(t=e.settings.templateEngineFunc(t)),t},update:function(t,o){if(!o)return this.settings[t];this.settings[t]=o}});var l=function(){var t=document.createElement("p").style,o=["ms","O","Moz","Webkit"];if(""===t.transition)return!0;for(;o.length;)if(o.pop()+"Transition"in t)return!0;return!1}();function g(t){t.removeClass("top_right_corner bottom_right_corner top_left_corner bottom_left_corner"),t.find(".tipso_title").removeClass("top_right_corner bottom_right_corner top_left_corner bottom_left_corner")}function c(t){var o,e,r,s=t.tooltip(),i=t.$element,n=t,a=p(window),d=n.settings.background,l=n.titleContent();switch(void 0!==l&&""!==l&&(d=n.settings.titleBackground),i.parent().outerWidth()>a.outerWidth()&&(a=i.parent()),n.settings.position){case"top-right":e=i.offset().left+i.outerWidth(),o=i.offset().top-f(s).height-10,s.find(".tipso_arrow").css({marginLeft:-n.settings.arrowWidth,marginTop:""}),o<a.scrollTop()?(o=i.offset().top+i.outerHeight()+10,s.find(".tipso_arrow").css({"border-bottom-color":d,"border-top-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),g(s),s.addClass("bottom_right_corner"),s.find(".tipso_title").addClass("bottom_right_corner"),s.find(".tipso_arrow").css({"border-left-color":d}),s.removeClass("top-right top bottom left right"),s.addClass("bottom")):(s.find(".tipso_arrow").css({"border-top-color":n.settings.background,"border-bottom-color":"transparent ","border-left-color":"transparent","border-right-color":"transparent"}),g(s),s.addClass("top_right_corner"),s.find(".tipso_arrow").css({"border-left-color":n.settings.background}),s.removeClass("top bottom left right"),s.addClass("top"));break;case"top-left":e=i.offset().left-f(s).width,o=i.offset().top-f(s).height-10,s.find(".tipso_arrow").css({marginLeft:-n.settings.arrowWidth,marginTop:""}),o<a.scrollTop()?(o=i.offset().top+i.outerHeight()+10,s.find(".tipso_arrow").css({"border-bottom-color":d,"border-top-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),g(s),s.addClass("bottom_left_corner"),s.find(".tipso_title").addClass("bottom_left_corner"),s.find(".tipso_arrow").css({"border-right-color":d}),s.removeClass("top-right top bottom left right"),s.addClass("bottom")):(s.find(".tipso_arrow").css({"border-top-color":n.settings.background,"border-bottom-color":"transparent ","border-left-color":"transparent","border-right-color":"transparent"}),g(s),s.addClass("top_left_corner"),s.find(".tipso_arrow").css({"border-right-color":n.settings.background}),s.removeClass("top bottom left right"),s.addClass("top"));break;case"bottom-right":e=i.offset().left+i.outerWidth(),o=i.offset().top+i.outerHeight()+10,s.find(".tipso_arrow").css({marginLeft:-n.settings.arrowWidth,marginTop:""}),o+f(s).height>a.scrollTop()+a.outerHeight()?(o=i.offset().top-f(s).height-10,s.find(".tipso_arrow").css({"border-bottom-color":"transparent","border-top-color":n.settings.background,"border-left-color":"transparent","border-right-color":"transparent"}),g(s),s.addClass("top_right_corner"),s.find(".tipso_title").addClass("top_left_corner"),s.find(".tipso_arrow").css({"border-left-color":n.settings.background}),s.removeClass("top-right top bottom left right"),s.addClass("top")):(s.find(".tipso_arrow").css({"border-top-color":"transparent","border-bottom-color":d,"border-left-color":"transparent","border-right-color":"transparent"}),g(s),s.addClass("bottom_right_corner"),s.find(".tipso_title").addClass("bottom_right_corner"),s.find(".tipso_arrow").css({"border-left-color":d}),s.removeClass("top bottom left right"),s.addClass("bottom"));break;case"bottom-left":e=i.offset().left-f(s).width,o=i.offset().top+i.outerHeight()+10,s.find(".tipso_arrow").css({marginLeft:-n.settings.arrowWidth,marginTop:""}),o+f(s).height>a.scrollTop()+a.outerHeight()?(o=i.offset().top-f(s).height-10,s.find(".tipso_arrow").css({"border-bottom-color":"transparent","border-top-color":n.settings.background,"border-left-color":"transparent","border-right-color":"transparent"}),g(s),s.addClass("top_left_corner"),s.find(".tipso_title").addClass("top_left_corner"),s.find(".tipso_arrow").css({"border-right-color":n.settings.background}),s.removeClass("top-right top bottom left right"),s.addClass("top")):(s.find(".tipso_arrow").css({"border-top-color":"transparent","border-bottom-color":d,"border-left-color":"transparent","border-right-color":"transparent"}),g(s),s.addClass("bottom_left_corner"),s.find(".tipso_title").addClass("bottom_left_corner"),s.find(".tipso_arrow").css({"border-right-color":d}),s.removeClass("top bottom left right"),s.addClass("bottom"));break;case"top":e=i.offset().left+i.outerWidth()/2-f(s).width/2,o=i.offset().top-f(s).height-10,s.find(".tipso_arrow").css({marginLeft:-n.settings.arrowWidth,marginTop:""}),o<a.scrollTop()?(o=i.offset().top+i.outerHeight()+10,s.find(".tipso_arrow").css({"border-bottom-color":d,"border-top-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),s.removeClass("top bottom left right"),s.addClass("bottom")):(s.find(".tipso_arrow").css({"border-top-color":n.settings.background,"border-bottom-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),s.removeClass("top bottom left right"),s.addClass("top"));break;case"bottom":e=i.offset().left+i.outerWidth()/2-f(s).width/2,o=i.offset().top+i.outerHeight()+10,s.find(".tipso_arrow").css({marginLeft:-n.settings.arrowWidth,marginTop:""}),o+f(s).height>a.scrollTop()+a.outerHeight()?(o=i.offset().top-f(s).height-10,s.find(".tipso_arrow").css({"border-top-color":n.settings.background,"border-bottom-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),s.removeClass("top bottom left right"),s.addClass("top")):(s.find(".tipso_arrow").css({"border-bottom-color":d,"border-top-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),s.removeClass("top bottom left right"),s.addClass(n.settings.position));break;case"left":e=i.offset().left-f(s).width-10,o=i.offset().top+i.outerHeight()/2-f(s).height/2,s.find(".tipso_arrow").css({marginTop:-n.settings.arrowWidth,marginLeft:""}),e<a.scrollLeft()?(e=i.offset().left+i.outerWidth()+10,s.find(".tipso_arrow").css({"border-right-color":n.settings.background,"border-left-color":"transparent","border-top-color":"transparent","border-bottom-color":"transparent"}),s.removeClass("top bottom left right"),s.addClass("right")):(s.find(".tipso_arrow").css({"border-left-color":n.settings.background,"border-right-color":"transparent","border-top-color":"transparent","border-bottom-color":"transparent"}),s.removeClass("top bottom left right"),s.addClass(n.settings.position));break;case"right":e=i.offset().left+i.outerWidth()+10,o=i.offset().top+i.outerHeight()/2-f(s).height/2,s.find(".tipso_arrow").css({marginTop:-n.settings.arrowWidth,marginLeft:""}),e+10+n.settings.width>a.scrollLeft()+a.outerWidth()?(e=i.offset().left-f(s).width-10,s.find(".tipso_arrow").css({"border-left-color":n.settings.background,"border-right-color":"transparent","border-top-color":"transparent","border-bottom-color":"transparent"}),s.removeClass("top bottom left right"),s.addClass("left")):(s.find(".tipso_arrow").css({"border-right-color":n.settings.background,"border-left-color":"transparent","border-top-color":"transparent","border-bottom-color":"transparent"}),s.removeClass("top bottom left right"),s.addClass(n.settings.position))}"top-right"===n.settings.position&&s.find(".tipso_arrow").css({"margin-left":-n.settings.width/2}),"top-left"===n.settings.position&&s.find(".tipso_arrow").eq(0).css({"margin-left":n.settings.width/2-2*n.settings.arrowWidth});"bottom-right"===n.settings.position&&s.find(".tipso_arrow").eq(0).css({"margin-left":-n.settings.width/2,"margin-top":""});"bottom-left"===n.settings.position&&s.find(".tipso_arrow").eq(0).css({"margin-left":n.settings.width/2-2*n.settings.arrowWidth,"margin-top":""});e<a.scrollLeft()&&("bottom"===n.settings.position||"top"===n.settings.position)&&(s.find(".tipso_arrow").css({marginLeft:e-n.settings.arrowWidth}),e=0),e+n.settings.width>a.outerWidth()&&("bottom"===n.settings.position||"top"===n.settings.position)&&(r=a.outerWidth()-(e+n.settings.width),s.find(".tipso_arrow").css({marginLeft:-r-n.settings.arrowWidth,marginTop:""}),e+=r),e<a.scrollLeft()&&("left"===n.settings.position||"right"===n.settings.position||"top-right"===n.settings.position||"top-left"===n.settings.position||"bottom-right"===n.settings.position||"bottom-left"===n.settings.position)&&(e=i.offset().left+i.outerWidth()/2-f(s).width/2,s.find(".tipso_arrow").css({marginLeft:-n.settings.arrowWidth,marginTop:""}),(o=i.offset().top-f(s).height-10)<a.scrollTop()?(o=i.offset().top+i.outerHeight()+10,s.find(".tipso_arrow").css({"border-bottom-color":d,"border-top-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),s.removeClass("top bottom left right"),g(s),s.addClass("bottom")):(s.find(".tipso_arrow").css({"border-top-color":n.settings.background,"border-bottom-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),s.removeClass("top bottom left right"),g(s),s.addClass("top")),e+n.settings.width>a.outerWidth()&&(r=a.outerWidth()-(e+n.settings.width),s.find(".tipso_arrow").css({marginLeft:-r-n.settings.arrowWidth,marginTop:""}),e+=r),e<a.scrollLeft()&&(s.find(".tipso_arrow").css({marginLeft:e-n.settings.arrowWidth}),e=0)),e+n.settings.width>a.outerWidth()&&("left"===n.settings.position||"right"===n.settings.position||"top-right"===n.settings.position||"top-left"===n.settings.position||"bottom-right"===n.settings.position||"bottom-right"===n.settings.position)&&(e=i.offset().left+i.outerWidth()/2-f(s).width/2,s.find(".tipso_arrow").css({marginLeft:-n.settings.arrowWidth,marginTop:""}),(o=i.offset().top-f(s).height-10)<a.scrollTop()?(o=i.offset().top+i.outerHeight()+10,s.find(".tipso_arrow").css({"border-bottom-color":d,"border-top-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),g(s),s.removeClass("top bottom left right"),s.addClass("bottom")):(s.find(".tipso_arrow").css({"border-top-color":n.settings.background,"border-bottom-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),g(s),s.removeClass("top bottom left right"),s.addClass("top")),e+n.settings.width>a.outerWidth()&&(r=a.outerWidth()-(e+n.settings.width),s.find(".tipso_arrow").css({marginLeft:-r-n.settings.arrowWidth,marginTop:""}),e+=r),e<a.scrollLeft()&&(s.find(".tipso_arrow").css({marginLeft:e-n.settings.arrowWidth}),e=0)),s.css({left:e+n.settings.offsetX,top:o+n.settings.offsetY}),o<a.scrollTop()&&("right"===n.settings.position||"left"===n.settings.position)&&(i.tipso("update","position","bottom"),c(n)),o+f(s).height>a.scrollTop()+a.outerHeight()&&("right"===n.settings.position||"left"===n.settings.position)&&(i.tipso("update","position","top"),c(n))}p[a]=p.fn[a]=function(o){var e,r=arguments;return void 0===o||"object"==typeof o?(this instanceof p||p.extend(d,o),this.each(function(){p.data(this,"plugin_"+a)||p.data(this,"plugin_"+a,new s(this,o))})):"string"==typeof o&&"_"!==o[0]&&"init"!==o?(this.each(function(){var t=p.data(this,"plugin_"+a);(t=t||p.data(this,"plugin_"+a,new s(this,o)))instanceof s&&"function"==typeof t[o]&&(e=t[o].apply(t,Array.prototype.slice.call(r,1))),"destroy"===o&&p.data(this,"plugin_"+a,null)}),void 0!==e?e:this):void 0}});!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}({10:function(e,t){var n=function(e,t){var n=e.find(".eael-fancy-text-container").eq(0),a=void 0!==n.data("fancy-text-id")?n.data("fancy-text-id"):"",o=void 0!==n.data("fancy-text")?n.data("fancy-text"):"",r=void 0!==n.data("fancy-text-transition-type")?n.data("fancy-text-transition-type"):"",i=void 0!==n.data("fancy-text-speed")?n.data("fancy-text-speed"):"",d=void 0!==n.data("fancy-text-delay")?n.data("fancy-text-delay"):"",c="yes"===n.data("fancy-text-cursor"),f=void 0!==n.data("fancy-text-loop")&&"yes"==n.data("fancy-text-loop");o=o.split("|"),"typing"==r&&new Typed("#eael-fancy-text-"+a,{strings:o,typeSpeed:i,backSpeed:0,startDelay:300,backDelay:d,showCursor:c,loop:f}),"typing"!=r&&t("#eael-fancy-text-"+a).Morphext({animation:r,separator:", ",speed:d,complete:function(){}}),jQuery(document).ready((function(){setTimeout((function(){t(".eael-fancy-text-strings",e).css("display","inline-block")}),500)})),isEditMode&&setTimeout((function(){t(".eael-fancy-text-strings",e).css("display","inline-block")}),800)};jQuery(window).on("elementor/frontend/init",(function(){if(ea.elementStatusCheck("eaelFancyTextLoad"))return!1;elementorFrontend.hooks.addAction("frontend/element_ready/eael-fancy-text.default",n)}))}});!function(t){var o={};function e(i){if(o[i])return o[i].exports;var n=o[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=o,e.d=function(t,o,i){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)e.d(i,n,function(o){return t[o]}.bind(null,n));return i},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=10)}({10:function(t,o){var e=function(t,o){var e=o("body.elementor-page.logged-in.admin-bar");"relative"===e.css("position")&&void 0!==o(".eael-hot-spot-wrap").data("tipso")&&e.css("position","inherit"),o(".eael-hot-spot-tooptip").each((function(){var t=o(this).data("tooltip-position-local"),e=o(this).data("tooltip-position-global"),i=o(this).data("tooltip-width"),n=o(this).data("tooltip-size"),a=o(this).data("tooltip-animation-in"),r=o(this).data("tooltip-animation-out"),l=o(this).data("tooltip-animation-speed"),d=o(this).data("tooltip-animation-delay"),s=o(this).data("tooltip-background"),u=o(this).data("tooltip-text-color"),p="yes"===o(this).data("eael-tooltip-arrow"),c=t;void 0!==t&&"global"!==t||(c=e),void 0!==r&&r||(r=a),o(this).tipso({speed:l,delay:d,width:i,background:s,color:u,size:n,position:c,animationIn:void 0!==a?"animate__"+a:"",animationOut:void 0!==r?"animate__"+r:"",showArrow:p,autoClose:!0})}))};jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-image-hotspots.default",e)}))}});!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=28)}({28:function(e,t){var n=function(e,t){var n=a("items_tablet",e),i=a("items_mobile",e),r=e.find(".eael-testimonial-slider-main").eq(0),d=void 0!==r.data("pagination")?r.data("pagination"):".swiper-pagination",l=void 0!==r.data("arrow-next")?r.data("arrow-next"):".swiper-button-next",s=void 0!==r.data("arrow-prev")?r.data("arrow-prev"):".swiper-button-prev",u=void 0!==r.data("items")?r.data("items"):3,c=void 0!==n?n:3,p=void 0!==i?i:3,f=void 0!==r.data("margin")?r.data("margin"):10,v=void 0!==r.data("margin-tablet")?r.data("margin-tablet"):10,m=void 0!==r.data("margin-mobile")?r.data("margin-mobile"):10,b=void 0!==r.data("effect")?r.data("effect"):"slide",w=void 0!==r.data("speed")?r.data("speed"):400,g=void 0!==r.data("autoplay_speed")?r.data("autoplay_speed"):999999,y=void 0!==r.data("loop")?r.data("loop"):0,h=void 0!==r.data("grab-cursor")?r.data("grab-cursor"):0,P="coverflow"==b,S=void 0!==r.data("pause-on-hover")?r.data("pause-on-hover"):"",_={direction:"horizontal",speed:w,effect:b,centeredSlides:P,grabCursor:h,autoHeight:!0,loop:y,autoplay:{delay:g,disableOnInteraction:!1},pagination:{el:d,clickable:!0},navigation:{nextEl:l,prevEl:s}};"slide"===b||"coverflow"===b?_.breakpoints={1024:{slidesPerView:u,spaceBetween:f},768:{slidesPerView:c,spaceBetween:v},320:{slidesPerView:p,spaceBetween:m}}:_.items=1,o(r,_).then((function(t){0===g&&t.autoplay.stop(),S&&0!==g&&(r.on("mouseenter",(function(){t.autoplay.stop()})),r.on("mouseleave",(function(){t.autoplay.start()}))),t.update();var n=e.find(".eael-testimonial-slider .eael-testimonial-gallary-pagination").eq(0);n.length>0&&o(n,{spaceBetween:20,centeredSlides:!0,touchRatio:.2,slideToClickedSlide:!0,loop:!0,slidesPerGroup:1,loopedSlides:u,slidesPerView:3}).then((function(e){t.controller.control=e,e.controller.control=t}))}));var x=t(".eael-advance-tabs"),j=x.find(".eael-tabs-nav li"),O=x.find(".eael-tabs-content > div");j.on("click",(function(){var e=O.eq(t(this).index());t(e).find(".swiper-container-wrap.eael-testimonial-slider").length&&o(r,_)}))},a=function(e,t){var n,a,o,i,r,d;return ea.isEditMode?null===(n=elementorFrontend.config.elements)||void 0===n||null===(a=n.data[null===(i=t[0])||void 0===i?void 0:i.dataset.modelCid])||void 0===a||null===(o=a.attributes[e])||void 0===o?void 0:o.size:null==t||null===(r=t.data("settings"))||void 0===r||null===(d=r[e])||void 0===d?void 0:d.size},o=function(e,t){return"undefined"==typeof Swiper?new(0,elementorFrontend.utils.swiper)(e,t).then((function(e){return e})):i(e,t)},i=function(e,t){return new Promise((function(n,a){n(new Swiper(e,t))}))};jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-testimonial-slider.default",n)}))}})
;