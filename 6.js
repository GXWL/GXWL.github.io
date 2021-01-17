From: <Saved by Blink>
Snapshot-Content-Location: https://cdn.staticfile.org/amazeui/2.3.0/js/amazeui.min.js
Subject: 
Date: Sun, 17 Jan 2021 18:20:17 -0000
MIME-Version: 1.0
Content-Type: multipart/related;
	type="text/html";
	boundary="----MultipartBoundary--hDggK0k7M2YWFlWQEAczmZa8LzD8vdzKZPMoQHQ39Q----"


------MultipartBoundary--hDggK0k7M2YWFlWQEAczmZa8LzD8vdzKZPMoQHQ39Q----
Content-Type: text/html
Content-ID: <frame-805D86EF6835F4F9D6EC9FF0863E533E@mhtml.blink>
Content-Transfer-Encoding: quoted-printable
Content-Location: https://cdn.staticfile.org/amazeui/2.3.0/js/amazeui.min.js

<html><head><meta http-equiv=3D"Content-Type" content=3D"text/html; charset=
=3DUTF-8"><link id=3D"via_inject_css_blocker" type=3D"text/css" rel=3D"styl=
esheet" href=3D"https://cdn.staticfile.org/via_inject_blocker.css"></head><=
body><pre style=3D"word-wrap: break-word; white-space: pre-wrap;">/*! Amaze=
 UI v2.3.0 | by Amaze UI Team | (c) 2015 AllMobilize, Inc. | Licensed under=
 MIT | 2015-04-08T06:04:29 UTC */=20
!function t(e,i,n){function o(a,r){if(!i[a]){if(!e[a]){var l=3D"function"=
=3D=3Dtypeof require&amp;&amp;require;if(!r&amp;&amp;l)return l(a,!0);if(s)=
return s(a,!0);var c=3Dnew Error("Cannot find module '"+a+"'");throw c.code=
=3D"MODULE_NOT_FOUND",c}var u=3Di[a]=3D{exports:{}};e[a][0].call(u.exports,=
function(t){var i=3De[a][1][t];return o(i?i:t)},u,u.exports,t,e,i,n)}return=
 i[a].exports}for(var s=3D"function"=3D=3Dtypeof require&amp;&amp;require,a=
=3D0;a&lt;n.length;a++)o(n[a]);return o}({1:[function(t,e){(function(i){"us=
e strict";function n(){var t=3Do('[data-am-widget=3D"accordion"]'),e=3D{ite=
m:".am-accordion-item",title:".am-accordion-title",body:".am-accordion-bd",=
disabled:".am-disabled"};t.each(function(t,i){var n=3Ds.utils.parseOptions(=
o(i).attr("data-am-accordion")),a=3Do(i).find(e.title);a.on("click.accordio=
n.amui",function(){var t=3Do(this).next(e.body),s=3Do(this).parent(e.item),=
a=3Dt.data("amui.collapse");s.is(e.disabled)||(s.toggleClass("am-active"),a=
?t.collapse("toggle"):t.collapse(),!n.multiple&amp;&amp;o(i).children(".am-=
active").not(s).not(e.disabled).removeClass("am-active").find(e.body+".am-i=
n").collapse("close"))})})}t("./core"),t("./ui.collapse");var o=3D"undefine=
d"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:null,s=
=3Do.AMUI;o(function(){n()}),e.exports=3Do.AMUI.accordion=3D{VERSION:"2.1.0=
",init:n}}).call(this,"undefined"!=3Dtypeof global?global:"undefined"!=3Dty=
peof self?self:"undefined"!=3Dtypeof window?window:{})},{"./core":4,"./ui.c=
ollapse":26}],2:[function(t,e){(function(i){"use strict";var n=3D"undefined=
"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:null;t(".=
/core"),t("./util.fastclick"),t("./util.hammer"),t("./amazeui"),t("./amazeu=
i.legacy"),t("./ui.add2home"),t("./ui.alert"),t("./ui.button"),t("./ui.coll=
apse"),t("./ui.datepicker"),t("./ui.dimmer"),t("./ui.dropdown"),t("./ui.fle=
xslider"),t("./ui.iscroll-lite"),t("./ui.modal"),t("./ui.offcanvas"),t("./u=
i.pinchzoom"),t("./ui.popover"),t("./ui.progress"),t("./ui.pureview"),t("./=
ui.scrollspy"),t("./ui.scrollspynav"),t("./ui.selected"),t("./ui.share"),t(=
"./ui.smooth-scroll"),t("./ui.sticky"),t("./ui.tabs"),t("./ui.ucheck"),t(".=
/ui.validator"),t("./util.cookie"),t("./util.fullscreen"),t("./util.geoloca=
tion"),t("./util.qrcode"),t("./util.store"),t("./accordion"),t("./divider")=
,t("./duoshuo"),t("./figure"),t("./footer"),t("./gallery"),t("./gotop"),t("=
./header"),t("./intro"),t("./list_news"),t("./map"),t("./mechat"),t("./menu=
"),t("./navbar"),t("./pagination"),t("./paragraph"),t("./slider"),t("./tabs=
"),t("./titlebar"),t("./wechatpay"),e.exports=3Dn.AMUI}).call(this,"undefin=
ed"!=3Dtypeof global?global:"undefined"!=3Dtypeof self?self:"undefined"!=3D=
typeof window?window:{})},{"./accordion":1,"./amazeui":2,"./amazeui.legacy"=
:3,"./core":4,"./divider":5,"./duoshuo":6,"./figure":7,"./footer":8,"./gall=
ery":9,"./gotop":10,"./header":11,"./intro":12,"./list_news":13,"./map":14,=
"./mechat":15,"./menu":16,"./navbar":17,"./pagination":18,"./paragraph":19,=
"./slider":20,"./tabs":21,"./titlebar":22,"./ui.add2home":23,"./ui.alert":2=
4,"./ui.button":25,"./ui.collapse":26,"./ui.datepicker":27,"./ui.dimmer":28=
,"./ui.dropdown":29,"./ui.flexslider":30,"./ui.iscroll-lite":31,"./ui.modal=
":32,"./ui.offcanvas":33,"./ui.pinchzoom":34,"./ui.popover":35,"./ui.progre=
ss":36,"./ui.pureview":37,"./ui.scrollspy":38,"./ui.scrollspynav":39,"./ui.=
selected":40,"./ui.share":41,"./ui.smooth-scroll":42,"./ui.sticky":43,"./ui=
.tabs":44,"./ui.ucheck":45,"./ui.validator":46,"./util.cookie":47,"./util.f=
astclick":48,"./util.fullscreen":49,"./util.geolocation":50,"./util.hammer"=
:51,"./util.qrcode":52,"./util.store":53,"./wechatpay":54}],3:[function(t,e=
){(function(i){"use strict";var n=3D"undefined"!=3Dtypeof window?window.jQu=
ery:"undefined"!=3Dtypeof i?i.jQuery:null;t("./core"),t("./ui.alert"),t("./=
ui.button"),t("./ui.collapse"),t("./ui.dimmer"),t("./ui.dropdown"),t("./ui.=
flexslider"),t("./ui.modal"),t("./ui.offcanvas"),t("./ui.popover"),t("./ui.=
progress"),t("./ui.scrollspynav"),t("./ui.sticky"),t("./util.cookie"),e.exp=
orts=3Dn.AMUI}).call(this,"undefined"!=3Dtypeof global?global:"undefined"!=
=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:{})},{"./core":4,".=
/ui.alert":24,"./ui.button":25,"./ui.collapse":26,"./ui.dimmer":28,"./ui.dr=
opdown":29,"./ui.flexslider":30,"./ui.modal":32,"./ui.offcanvas":33,"./ui.p=
opover":35,"./ui.progress":36,"./ui.scrollspynav":39,"./ui.sticky":43,"./ut=
il.cookie":47}],4:[function(t,e){(function(t){"use strict";var i=3D"undefin=
ed"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof t?t.jQuery:null;if=
("undefined"=3D=3Dtypeof i)throw new Error("Amaze UI 2.x requires jQuery :-=
(\n=E7=88=B1=E4=B8=8A=E4=B8=80=E5=8C=B9=E9=87=8E=E9=A9=AC=EF=BC=8C=E5=8F=AF=
=E4=BD=A0=E7=9A=84=E5=AE=B6=E9=87=8C=E6=B2=A1=E6=9C=89=E8=8D=89=E5=8E=9F=E2=
=80=A6");var n=3Di.AMUI||{},o=3Di(window),s=3Dwindow.document,a=3Di("html")=
;n.VERSION=3D"2.3.0",n.support=3D{},n.support.transition=3Dfunction(){var t=
=3Dfunction(){var t=3Ds.body||s.documentElement,e=3D{WebkitTransition:"webk=
itTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd =
otransitionend",transition:"transitionend"};for(var i in e)if(void 0!=3D=3D=
t.style[i])return e[i]}();return t&amp;&amp;{end:t}}(),n.support.animation=
=3Dfunction(){var t=3Dfunction(){var t=3Ds.body||s.documentElement,e=3D{Web=
kitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"o=
AnimationEnd oanimationend",animation:"animationend"};for(var i in e)if(voi=
d 0!=3D=3Dt.style[i])return e[i]}();return t&amp;&amp;{end:t}}(),n.support.=
touch=3D"ontouchstart"in window&amp;&amp;navigator.userAgent.toLowerCase().=
match(/mobile|tablet/)||window.DocumentTouch&amp;&amp;document instanceof w=
indow.DocumentTouch||window.navigator.msPointerEnabled&amp;&amp;window.navi=
gator.msMaxTouchPoints&gt;0||window.navigator.pointerEnabled&amp;&amp;windo=
w.navigator.maxTouchPoints&gt;0||!1,n.support.mutationobserver=3Dwindow.Mut=
ationObserver||window.WebKitMutationObserver||null,n.support.formValidation=
=3D"function"=3D=3Dtypeof document.createElement("form").checkValidity,n.ut=
ils=3D{},n.utils.debounce=3Dfunction(t,e,i){var n;return function(){var o=
=3Dthis,s=3Darguments,a=3Dfunction(){n=3Dnull,i||t.apply(o,s)},r=3Di&amp;&a=
mp;!n;clearTimeout(n),n=3DsetTimeout(a,e),r&amp;&amp;t.apply(o,s)}},n.utils=
.isInView=3Dfunction(t,e){var n=3Di(t),s=3D!(!n.width()&amp;&amp;!n.height(=
))&amp;&amp;"none"!=3D=3Dn.css("display");if(!s)return!1;var a=3Do.scrollLe=
ft(),r=3Do.scrollTop(),l=3Dn.offset(),c=3Dl.left,u=3Dl.top;return e=3Di.ext=
end({topOffset:0,leftOffset:0},e),u+n.height()&gt;=3Dr&amp;&amp;u-e.topOffs=
et&lt;=3Dr+o.height()&amp;&amp;c+n.width()&gt;=3Da&amp;&amp;c-e.leftOffset&=
lt;=3Da+o.width()},n.utils.parseOptions=3Dn.utils.options=3Dfunction(t){if(=
i.isPlainObject(t))return t;var e=3Dt?t.indexOf("{"):-1,n=3D{};if(-1!=3De)t=
ry{n=3Dnew Function("","var json =3D "+t.substr(e)+"; return JSON.parse(JSO=
N.stringify(json));")()}catch(o){}return n},n.utils.generateGUID=3Dfunction=
(t){var e=3Dt+"-"||"am-";do e+=3DMath.random().toString(36).substring(2,7);=
while(document.getElementById(e));return e},i.fn.emulateTransitionEnd=3Dfun=
ction(t){var e=3D!1,o=3Dthis;i(this).one(n.support.transition.end,function(=
){e=3D!0});var s=3Dfunction(){e||i(o).trigger(n.support.transition.end),o.t=
ransitionEndTimmer=3Dvoid 0};return this.transitionEndTimmer=3DsetTimeout(s=
,t),this},i.fn.redraw=3Dfunction(){return i(this).each(function(){this.offs=
etHeight}),this},i.fn.transitionEnd=3Dfunction(t){function e(n){t.call(this=
,n),i&amp;&amp;o.off(i,e)}var i=3Dn.support.transition.end,o=3Dthis;return =
t&amp;&amp;i&amp;&amp;o.on(i,e),this},i.fn.removeClassRegEx=3Dfunction(){re=
turn this.each(function(t){var e=3Di(this).attr("class");if(!e||!t)return!1=
;var n=3D[];e=3De.split(" ");for(var o=3D0,s=3De.length;s&gt;o;o++)e[o].mat=
ch(t)||n.push(e[o]);i(this).attr("class",n.join(" "))})},i.fn.alterClass=3D=
function(t,e){var n=3Dthis;if(-1=3D=3D=3Dt.indexOf("*"))return n.removeClas=
s(t),e?n.addClass(e):n;var o=3Dnew RegExp("\\s"+t.replace(/\*/g,"[A-Za-z0-9=
-_]+").split(" ").join("\\s|\\s")+"\\s","g");return n.each(function(t,e){fo=
r(var n=3D" "+e.className+" ";o.test(n);)n=3Dn.replace(o," ");e.className=
=3Di.trim(n)}),e?n.addClass(e):n},n.utils.rAF=3Dfunction(){return window.re=
questAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestA=
nimationFrame||window.oRequestAnimationFrame||function(t){return window.set=
Timeout(t,1e3/60)}}(),n.utils.cancelAF=3Dfunction(){return window.cancelAni=
mationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFr=
ame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t)}}(),n=
.utils.measureScrollbar=3Dfunction(){if(document.body.clientWidth&gt;=3Dwin=
dow.innerWidth)return 0;var t=3Di('&lt;div style=3D"width: 100px;height: 10=
0px;overflow: scroll;position: absolute;top: -9999px;"&gt;&lt;/div&gt;');i(=
document.body).append(t);var e=3Dt[0].offsetWidth-t[0].clientWidth;return t=
.remove(),e},n.utils.imageLoader=3Dfunction(t,e){function i(){e(t[0])}funct=
ion n(){if(this.one("load",i),/MSIE (\d+\.\d+);/.test(navigator.userAgent))=
{var t=3Dthis.attr("src"),e=3Dt.match(/\?/)?"&amp;":"?";e+=3D"random=3D"+(n=
ew Date).getTime(),this.attr("src",t+e)}}return t.attr("src")?void(t[0].com=
plete||4=3D=3D=3Dt[0].readyState?i():n.call(t)):void i()},n.template=3Dfunc=
tion(t,e){var i=3Dn.template;return i.cache[t]||(i.cache[t]=3Dfunction(){va=
r e=3Dt,n=3D/^[\w\-]+$/.test(t)?i.get(t):(e=3D"template(string)",t),o=3D1,s=
=3D("try { "+(i.variable?"var "+i.variable+" =3D this.stash;":"with (this.s=
tash) { ")+"this.ret +=3D '"+n.replace(/&lt;%/g,"=11").replace(/%&gt;/g,"=
=13").replace(/'(?![^\x11\x13]+?\x13)/g,"\\x27").replace(/^\s*|\s*$/g,"").r=
eplace(/\n/g,function(){return"';\nthis.line =3D "+ ++o+"; this.ret +=3D '\=
\n"}).replace(/\x11-(.+?)\x13/g,"' + ($1) + '").replace(/\x11=3D(.+?)\x13/g=
,"' + this.escapeHTML($1) + '").replace(/\x11(.+?)\x13/g,"'; $1; this.ret +=
=3D '")+"'; "+(i.variable?"":"}")+"return this.ret;} catch (e) { throw 'Tem=
plateError: ' + e + ' (on "+e+"' + ' line ' + this.line + ')'; } //@ source=
URL=3D"+e+"\n").replace(/this\.ret \+=3D '';/g,""),a=3Dnew Function(s),r=3D=
{"&amp;":"&amp;amp;","&lt;":"&amp;lt;","&gt;":"&amp;gt;",'"':"&amp;#x22;","=
'":"&amp;#x27;"},l=3Dfunction(t){return(""+t).replace(/[&amp;&lt;&gt;\'\"]/=
g,function(t){return r[t]})};return function(t){return a.call(i.context=3D{=
escapeHTML:l,line:1,ret:"",stash:t})}}()),e?i.cache[t](e):i.cache[t]},n.tem=
plate.cache=3D{},n.template.get=3Dfunction(t){if(t){var e=3Ddocument.getEle=
mentById(t);return e&amp;&amp;e.innerHTML||""}},n.DOMWatchers=3D[],n.DOMRea=
dy=3D!1,n.ready=3Dfunction(t){n.DOMWatchers.push(t),n.DOMReady&amp;&amp;t(d=
ocument)},n.DOMObserve=3Dfunction(t,e,o){var s=3Dn.support.mutationobserver=
;s&amp;&amp;(e=3Di.isPlainObject(e)?e:{childList:!0,subtree:!0},o=3D"functi=
on"=3D=3Dtypeof o&amp;&amp;o||function(){},i(t).each(function(){var t=3Dthi=
s,a=3Di(t);if(!a.data("am.observer"))try{var r=3Dnew s(n.utils.debounce(fun=
ction(e,i){o.call(t,e,i),a.trigger("changed.dom.amui")},50));r.observe(t,e)=
,a.data("am.observer",r)}catch(l){}}))},i.fn.DOMObserve=3Dfunction(t,e){ret=
urn this.each(function(){n.DOMObserve(this,t,e)})},n.support.touch&amp;&amp=
;(a.addClass("am-touch"),i(function(){var t=3Dn.FastClick;t&amp;&amp;(i("[c=
ontenteditable]").addClass("needsclick"),t.attach(document.body))})),i(docu=
ment).on("changed.dom.amui",function(t){var e=3Dt.target;i.each(n.DOMWatche=
rs,function(t,i){i(e)})}),i(function(){var t=3Di("body");n.DOMReady=3D!0,i.=
each(n.DOMWatchers,function(t,e){e(document)}),n.DOMObserve("[data-am-obser=
ve]"),a.removeClass("no-js").addClass("js"),n.support.animation&amp;&amp;a.=
addClass("cssanimations"),window.navigator.standalone&amp;&amp;a.addClass("=
am-standalone"),i(".am-topbar-fixed-top").length&amp;&amp;t.addClass("am-wi=
th-topbar-fixed-top"),i(".am-topbar-fixed-bottom").length&amp;&amp;t.addCla=
ss("am-with-topbar-fixed-bottom");var e=3Di(".am-layout");e.find('[class*=
=3D"md-block-grid"]').alterClass("md-block-grid-*"),e.find('[class*=3D"lg-b=
lock-grid"]').alterClass("lg-block-grid"),i("[data-am-widget]").each(functi=
on(){var t=3Di(this);0=3D=3D=3Dt.parents(".am-layout").length&amp;&amp;t.ad=
dClass("am-no-layout")})}),i.AMUI=3Dn,e.exports=3Dn}).call(this,"undefined"=
!=3Dtypeof global?global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtyp=
eof window?window:{})},{}],5:[function(t,e){"use strict";e.exports=3D{VERSI=
ON:"2.0.1"}},{}],6:[function(t,e){(function(i){"use strict";function n(){va=
r t=3Do(".ds-thread"),e=3Dt.parent('[data-am-widget=3D"duoshuo"]').attr("da=
ta-ds-short-name"),i=3D("https:"=3D=3Ddocument.location.protocol?"https:":"=
http:")+"//static.duoshuo.com/embed.js";if(t.length&amp;&amp;e&amp;&amp;(wi=
ndow.duoshuoQuery=3D{short_name:e},!o('script[src=3D"'+i+'"]').length)){var=
 n=3Do("&lt;script&gt;",{async:!0,type:"text/javascript",src:i,charset:"utf=
-8"});o("body").append(n)}}var o=3D"undefined"!=3Dtypeof window?window.jQue=
ry:"undefined"!=3Dtypeof i?i.jQuery:null;t("./core"),o(window).on("load",n)=
,e.exports=3Do.AMUI.duoshuo=3D{VERSION:"2.0.1",init:n}}).call(this,"undefin=
ed"!=3Dtypeof global?global:"undefined"!=3Dtypeof self?self:"undefined"!=3D=
typeof window?window:{})},{"./core":4}],7:[function(t,e){(function(i){"use =
strict";function n(){o(".am-figure").each(function(t,e){var i,n=3Ds.utils.p=
arseOptions(o(e).attr("data-am-figure")),a=3Do(e);if(n.pureview)if("auto"=
=3D=3D=3Dn.pureview){var r=3Do.isImgZoomAble(a.find("img")[0]);r&amp;&amp;a=
.pureview()}else a.addClass("am-figure-zoomable").pureview();i=3Da.data("am=
ui.pureview"),i&amp;&amp;a.on("click",":not(img)",function(){i.open(0)})})}=
t("./core"),t("./ui.pureview");var o=3D"undefined"!=3Dtypeof window?window.=
jQuery:"undefined"!=3Dtypeof i?i.jQuery:null,s=3Do.AMUI;o.isImgZoomAble=3Df=
unction(t){var e=3Dnew Image;e.src=3Dt.src;var i=3Do(t).width()&lt;e.width;=
return i&amp;&amp;o(t).closest(".am-figure").addClass("am-figure-zoomable")=
,i},o(window).on("load",function(){n()}),e.exports=3Do.AMUI.figure=3D{VERSI=
ON:"2.0.3",init:n}}).call(this,"undefined"!=3Dtypeof global?global:"undefin=
ed"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:{})},{"./core":=
4,"./ui.pureview":37}],8:[function(t,e){(function(i){"use strict";function =
n(){o(".am-footer-ysp").on("click",function(){o("#am-footer-modal").modal()=
});var t=3Ds.utils.parseOptions(o(".am-footer").data("amFooter"));t.addToHS=
&amp;&amp;a(),o('[data-rel=3D"desktop"]').on("click",function(t){t.preventD=
efault(),window.AMPlatform?window.AMPlatform.util.goDesktop():(r.set("allmo=
bilize","desktop","","/"),window.location=3Dwindow.location)})}var o=3D"und=
efined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:nul=
l,s=3Dt("./core");t("./ui.modal");var a=3Dt("./ui.add2home"),r=3Dt("./util.=
cookie");o(function(){n()}),e.exports=3Do.AMUI.footer=3D{VERSION:"3.1.2",in=
it:n}}).call(this,"undefined"!=3Dtypeof global?global:"undefined"!=3Dtypeof=
 self?self:"undefined"!=3Dtypeof window?window:{})},{"./core":4,"./ui.add2h=
ome":23,"./ui.modal":32,"./util.cookie":47}],9:[function(t,e){(function(i){=
"use strict";function n(){var t=3Do('[data-am-widget=3D"gallery"]');t.each(=
function(){var t=3Ds.utils.parseOptions(o(this).attr("data-am-gallery"));t.=
pureview&amp;&amp;("object"=3D=3Dtypeof t.pureview?o(this).pureview(t.purev=
iew):o(this).pureview())})}var o=3D"undefined"!=3Dtypeof window?window.jQue=
ry:"undefined"!=3Dtypeof i?i.jQuery:null;t("./core"),t("./ui.pureview");var=
 s=3Do.AMUI;o(function(){n()}),e.exports=3Do.AMUI.gallery=3D{VERSION:"3.0.0=
",init:n}}).call(this,"undefined"!=3Dtypeof global?global:"undefined"!=3Dty=
peof self?self:"undefined"!=3Dtypeof window?window:{})},{"./core":4,"./ui.p=
ureview":37}],10:[function(t,e){(function(i){"use strict";function n(){func=
tion t(){i[(n.scrollTop()&gt;50?"add":"remove")+"Class"]("am-active")}var e=
=3Do('[data-am-widget=3D"gotop"]'),i=3De.filter(".am-gotop-fixed"),n=3Do(wi=
ndow);e.find("a").on("click",function(t){t.preventDefault(),n.smoothScroll(=
)}),t(),n.on("scroll.gotop.amui",o.AMUI.utils.debounce(t,100))}var o=3D"und=
efined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:nul=
l;t("./core"),t("./ui.smooth-scroll"),o(function(){n()}),e.exports=3Do.AMUI=
.gotop=3D{VERSION:"4.0.2",init:n}}).call(this,"undefined"!=3Dtypeof global?=
global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:=
{})},{"./core":4,"./ui.smooth-scroll":42}],11:[function(t,e){(function(i){"=
use strict";function n(){o('[data-am-widget=3D"header"]').each(function(){r=
eturn o(this).hasClass("am-header-fixed")?(o("body").addClass("am-with-fixe=
d-header"),!1):void 0})}var o=3D"undefined"!=3Dtypeof window?window.jQuery:=
"undefined"!=3Dtypeof i?i.jQuery:null;t("./core"),o(function(){n()}),e.expo=
rts=3Do.AMUI.header=3D{VERSION:"2.0.0",init:n}}).call(this,"undefined"!=3Dt=
ypeof global?global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof w=
indow?window:{})},{"./core":4}],12:[function(t,e){(function(i){"use strict"=
;var n=3D"undefined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i=
?i.jQuery:null;t("./core"),e.exports=3Dn.AMUI.intro=3D{VERSION:"4.0.2"}}).c=
all(this,"undefined"!=3Dtypeof global?global:"undefined"!=3Dtypeof self?sel=
f:"undefined"!=3Dtypeof window?window:{})},{"./core":4}],13:[function(t,e){=
(function(i){"use strict";var n=3D"undefined"!=3Dtypeof window?window.jQuer=
y:"undefined"!=3Dtypeof i?i.jQuery:null;t("./core"),e.exports=3Dn.AMUI.list=
News=3D{VERSION:"4.0.0",init:function(){}}}).call(this,"undefined"!=3Dtypeo=
f global?global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof windo=
w?window:{})},{"./core":4}],14:[function(t,e){(function(i){function n(t){va=
r e=3Ds("&lt;script /&gt;",{id:"am-map-api-0"});s("body").append(e),e.on("l=
oad",function(){console.log("load");var e=3Ds("&lt;script/&gt;",{id:"am-map=
-api-1"});s("body").append(e),e.on("load",function(){var e=3Ddocument.creat=
eElement("script");e.textContent=3D"("+t.toString()+")();",s("body")[0].app=
endChild(e)}).attr("src","http://api.map.baidu.com/getscript?type=3Dquick&a=
mp;file=3Dfeature&amp;ak=3DWVAXZ05oyNRXS5egLImmentg&amp;t=3D20140109092002"=
)}).attr("src","http://api.map.baidu.com/getscript?type=3Dquick&amp;file=3D=
api&amp;ak=3DWVAXZ05oyNRXS5egLImmentg&amp;t=3D20140109092002")}function o()=
{var t=3Ddocument.querySelector(".am-map"),e=3D116.331398,i=3D39.897445,n=
=3Dt.getAttribute("data-name"),o=3Dt.getAttribute("data-address"),s=3Dt.get=
Attribute("data-longitude")||e,a=3Dt.getAttribute("data-latitude")||i,r=3Dt=
.getAttribute("data-setZoom")||17,l=3Dt.getAttribute("data-icon"),c=3Dnew B=
Map.Map("bd-map"),u=3Dnew BMap.Point(s,a);c.centerAndZoom(u,r),t.getAttribu=
te("data-zoomControl")&amp;&amp;c.addControl(new BMap.ZoomControl),t.getAtt=
ribute("data-scaleControl")&amp;&amp;c.addControl(new BMap.ScaleControl);va=
r d=3Dnew BMap.Marker(u);l&amp;&amp;d.setIcon(new BMap.Icon(l,new BMap.Size=
(40,40)));var h=3D{width:200,title:n},p=3Dnew BMap.InfoWindow("=E5=9C=B0=E5=
=9D=80=EF=BC=9A"+o,h),f=3Dnew BMap.Geocoder;s=3D=3De&amp;&amp;a=3D=3Di?f.ge=
tPoint(o,function(t){t&amp;&amp;(c.centerAndZoom(t,r),d.setPosition(t),c.ad=
dOverlay(d),c.openInfoWindow(p,t))},""):f.getLocation(u,function(){c.center=
AndZoom(u,r),d.setPosition(u),c.addOverlay(d),o?c.openInfoWindow(p,u):c.ope=
nInfoWindow(new BMap.InfoWindow(o,h),u)})}var s=3D"undefined"!=3Dtypeof win=
dow?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:null;t("./core");var a=
=3Dfunction(){s(".am-map").length&amp;&amp;n(o)};s(document).on("ready",a),=
e.exports=3Ds.AMUI.map=3D{VERSION:"2.0.2",init:a}}).call(this,"undefined"!=
=3Dtypeof global?global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtype=
of window?window:{})},{"./core":4}],15:[function(t,e){(function(i){"use str=
ict";function n(){if(o("#mechat").length){var t=3Do('[data-am-widget=3D"mec=
hat"]'),e=3Dt.data("am-mechat-unitid"),i=3Do("&lt;script&gt;",{charset:"utf=
-8",src:"http://mechatim.com/js/unit/button.js?id=3D"+e});o("body").append(=
i)}}var o=3D"undefined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeo=
f i?i.jQuery:null;t("./core"),o(window).on("load",n),e.exports=3Do.AMUI.mec=
hat=3D{VERSION:"2.0.1",init:n}}).call(this,"undefined"!=3Dtypeof global?glo=
bal:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:{})=
},{"./core":4}],16:[function(t,e){(function(i){"use strict";var n=3D"undefi=
ned"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:null;t=
("./core"),t("./ui.offcanvas"),t("./ui.collapse");var o=3Dt("./ui.iscroll-l=
ite"),s=3Dfunction(){var t=3Dn('[data-am-widget=3D"menu"]');t.find(".am-men=
u-nav .am-parent &gt; a").on("click",function(t){t.preventDefault();var e=
=3Dn(this),i=3De.parent(),o=3De.next(".am-menu-sub");i.toggleClass("am-open=
"),o.collapse("toggle"),i.siblings(".am-parent").removeClass("am-open").chi=
ldren(".am-menu-sub.am-in").collapse("close")}),t.filter("[data-am-menu-col=
lapse]").find("&gt; .am-menu-toggle").on("click",function(t){t.preventDefau=
lt();var e=3Dn(this),i=3De.next(".am-menu-nav");e.toggleClass("am-active"),=
i.collapse("toggle")}),t.filter("[data-am-menu-offcanvas]").find("&gt; .am-=
menu-toggle").on("click",function(t){t.preventDefault();var e=3Dn(this),i=
=3De.next(".am-offcanvas");e.toggleClass("am-active"),i.offCanvas("open")})=
;var e=3D'.am-offcanvas[data-dismiss-on=3D"click"]',i=3Dn(e);i.find("a").no=
t(".am-parent&gt;a").on("click",function(){n(this).parents(e).offCanvas("cl=
ose")}),t.filter(".am-menu-one").each(function(t){var e,i=3Dn(this),s=3Dn('=
&lt;div class=3D"am-menu-nav-sub-wrap"&gt;&lt;/div&gt;'),a=3D0,r=3Di.find("=
.am-menu-nav"),l=3Dr.children("li");l.filter(".am-parent").each(function(t)=
{n(this).attr("data-rel","#am-menu-sub-"+t),n(this).find(".am-menu-sub").at=
tr("id","am-menu-sub-"+t).appendTo(s)}),i.append(s),r.wrap('&lt;div class=
=3D"am-menu-nav-wrap" id=3D"am-menu-'+t+'"&gt;'),l.each(function(){a+=3Dpar=
seFloat(n(this).css("width"))}),r.width(a);var c=3Dnew o("#am-menu-"+t,{eve=
ntPassthrough:!0,scrollX:!0,scrollY:!1,preventDefault:!1});l.on("click",fun=
ction(){var t=3Dn(this);t.addClass("am-active").siblings().removeClass("am-=
active"),s.find(".am-menu-sub.am-in").collapse("close"),t.is(".am-parent")?=
!t.hasClass(".am-open")&amp;&amp;s.find(t.attr("data-rel")).collapse("open"=
):t.siblings().removeClass("am-open"),void 0=3D=3D=3De&amp;&amp;(e=3Dn(this=
).index()?0:1);var o,a=3Dn(this).index()&gt;e,l=3Dn(this)[a?"next":"prev"](=
),u=3Dl.offset()||n(this).offset(),d=3Di.offset(),h=3DparseInt(i.css("paddi=
ng-left"));(a?u.left+u.width&gt;d.left+d.width:u.left&lt;d.left)&amp;&amp;(=
o=3Dr.offset(),c.scrollTo(a?d.width-u.left+o.left-u.width-h:o.left-u.left,0=
,400)),e=3Dn(this).index()}),i.on("touchmove",function(t){t.preventDefault(=
)})})};n(function(){s()}),e.exports=3Dn.AMUI.menu=3D{VERSION:"4.0.3",init:s=
}}).call(this,"undefined"!=3Dtypeof global?global:"undefined"!=3Dtypeof sel=
f?self:"undefined"!=3Dtypeof window?window:{})},{"./core":4,"./ui.collapse"=
:26,"./ui.iscroll-lite":31,"./ui.offcanvas":33}],17:[function(t,e){(functio=
n(i){"use strict";function n(){function t(){u.append(b),u.find("li").not(".=
am-navbar-more").slice(i()-1).appendTo(y),n.append(y)}function e(){return i=
()&gt;=3Dh?(b.hide(),void y.find("li").insertBefore(b)):(!n.find(".am-navba=
r-actions").length&amp;&amp;t(),b.show(),void(u.find("li").length&lt;i()?y.=
find("li").slice(0,i()-u.find("li").length).insertBefore(b):u.find("li").le=
ngth&gt;i()&amp;&amp;(y.find("li").length?u.find("li").not(b).slice(i()-1).=
insertBefore(y.find("li").first()):u.find("li").not(b).slice(i()-1).appendT=
o(y))))}function i(){return Math.floor((l.width()-m)/f)}var n=3Do('[data-am=
-widget=3D"navbar"]');if(n.length){var l=3Do(window),c=3Do("body"),u=3Dn.fi=
nd(".am-navbar-nav"),d=3Dn.find("li"),h=3Dd.length,p=3Du.attr("class")&amp;=
&amp;parseInt(u.attr("class").match(/am-avg-sm-(\d+)/)[1])||3,f=3D60,m=3D16=
,v=3Dd.filter("[data-am-navbar-share]"),g=3Dd.filter("[data-am-navbar-qrcod=
e]"),w=3D"am-active",y=3Do('&lt;ul class=3D"am-navbar-actions"&gt;&lt;/ul&g=
t;',{id:r.utils.generateGUID("am-navbar-actions")}),b=3Do('&lt;li class=3D"=
am-navbar-labels am-navbar-more"&gt;&lt;a href=3D"javascript: void(0);"&gt;=
&lt;span class=3D"am-icon-angle-up"&gt;&lt;/span&gt;&lt;span class=3D"am-na=
vbar-label"&gt;=E6=9B=B4=E5=A4=9A&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;');if("f=
ixed"=3D=3Dn.css("position")&amp;&amp;c.addClass("am-with-fixed-navbar"),g.=
length){var T=3D"am-navbar-qrcode";if(C=3Do("#"+T),!C.length){var x=3Dg.att=
r("data-am-navbar-qrcode"),C=3Do('&lt;div class=3D"am-modal am-modal-no-btn=
" id=3D""&gt;&lt;div class=3D"am-modal-dialog"&gt;&lt;div class=3D"am-modal=
-bd"&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;',{id:T}),E=3DC.find(".am-modal=
-bd");if(x)E.html('&lt;img src=3D"'+x+'"/&gt;');else{var k=3Dnew a({render:=
"canvas",correctLevel:0,text:window.location.href,width:200,height:200,back=
ground:"#fff",foreground:"#000"});E.html(k)}c.append(C)}g.on("click",functi=
on(t){t.preventDefault(),C.modal()})}h&gt;p&amp;&amp;h&gt;i()&amp;&amp;t(),=
n.on("click.navbar.amui",".am-navbar-more",function(t){t.preventDefault(),b=
[y.hasClass(w)?"removeClass":"addClass"](w),y.toggleClass(w)}),v.length&amp=
;&amp;v.on("click.navbar.amui",function(t){t.preventDefault(),s.toggle()}),=
l.on("resize.navbar.amui orientationchange.navbar.amui",r.utils.debounce(e,=
150))}}var o=3D"undefined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dty=
peof i?i.jQuery:null;t("./core"),t("./ui.modal");var s=3Dt("./ui.share"),a=
=3Dt("./util.qrcode"),r=3Do.AMUI;o(function(){n()}),e.exports=3Do.AMUI.navb=
ar=3D{VERSION:"2.0.2",init:n}}).call(this,"undefined"!=3Dtypeof global?glob=
al:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:{})}=
,{"./core":4,"./ui.modal":32,"./ui.share":41,"./util.qrcode":52}],18:[funct=
ion(t,e){(function(i){"use strict";var n=3D"undefined"!=3Dtypeof window?win=
dow.jQuery:"undefined"!=3Dtypeof i?i.jQuery:null;t("./core"),e.exports=3Dn.=
AMUI.pagination=3D{VERSION:"3.0.1"}}).call(this,"undefined"!=3Dtypeof globa=
l?global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?windo=
w:{})},{"./core":4}],19:[function(t,e){(function(i){"use strict";function n=
(){var t=3Do('[data-am-widget=3D"paragraph"]');t.each(function(t){var e=3Do=
(this),i=3Da.utils.parseOptions(e.attr("data-am-paragraph")),n=3Dt;i.purevi=
ew&amp;&amp;e.pureview(),i.tableScrollable&amp;&amp;e.find("table").each(fu=
nction(t){o(this).width()&gt;o(window).width()&amp;&amp;o(this).scrollTable=
(n+"-"+t)})})}var o=3D"undefined"!=3Dtypeof window?window.jQuery:"undefined=
"!=3Dtypeof i?i.jQuery:null;t("./core"),t("./ui.pureview");var s=3Dt("./ui.=
iscroll-lite"),a=3Do.AMUI;o.fn.scrollTable=3Dfunction(t){var e,i=3Do(this);=
i.wrap('&lt;div class=3D"am-paragraph-table-container" id=3D"am-paragraph-t=
able-'+t+'"&gt;&lt;div class=3D"am-paragraph-table-scroller"&gt;&lt;/div&gt=
;&lt;/div&gt;'),e=3Di.parent(),e.width(i.width()),e.height(i.height()),new =
s("#am-paragraph-table-"+t,{eventPassthrough:!0,scrollX:!0,scrollY:!1,preve=
ntDefault:!1})},o(window).on("load",function(){n()}),e.exports=3Do.AMUI.par=
agraph=3D{VERSION:"2.0.1",init:n}}).call(this,"undefined"!=3Dtypeof global?=
global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:=
{})},{"./core":4,"./ui.iscroll-lite":31,"./ui.pureview":37}],20:[function(t=
,e){(function(i){"use strict";function n(){var t=3Do('[data-am-widget=3D"sl=
ider"]');t.not(".am-slider-manual").each(function(t,e){var i=3Ds.utils.pars=
eOptions(o(e).attr("data-am-slider"));o(e).flexslider(i)})}var o=3D"undefin=
ed"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:null;t(=
"./core"),t("./ui.flexslider");var s=3Do.AMUI;o(document).on("ready",n),e.e=
xports=3Do.AMUI.slider=3D{VERSION:"3.0.1",init:n}}).call(this,"undefined"!=
=3Dtypeof global?global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtype=
of window?window:{})},{"./core":4,"./ui.flexslider":30}],21:[function(t,e){=
(function(i){"use strict";function n(){o('[data-am-widget=3D"tabs"]').each(=
function(){var t=3Do(this).data("amTabsNoswipe")?{noSwipe:1}:{};o(this).tab=
s(t)})}var o=3D"undefined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dty=
peof i?i.jQuery:null;t("./core"),t("./ui.tabs"),o(function(){n()}),e.export=
s=3Do.AMUI.tab=3D{VERSION:"4.0.1",init:n}}).call(this,"undefined"!=3Dtypeof=
 global?global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof window=
?window:{})},{"./core":4,"./ui.tabs":44}],22:[function(t,e){(function(i){"u=
se strict";var n=3D"undefined"!=3Dtypeof window?window.jQuery:"undefined"!=
=3Dtypeof i?i.jQuery:null;t("./core"),e.exports=3Dn.AMUI.titlebar=3D{VERSIO=
N:"4.0.1"}}).call(this,"undefined"!=3Dtypeof global?global:"undefined"!=3Dt=
ypeof self?self:"undefined"!=3Dtypeof window?window:{})},{"./core":4}],23:[=
function(t,e){(function(i){"use strict";function n(){window.removeEventList=
ener("load",n,!1),l=3D!0}function o(t){return c=3Dc||new o.Class(t)}functio=
n s(t,e){for(var i in e)t[i]=3De[i];return t}function a(){"#ath"=3D=3Ddocum=
ent.location.hash&amp;&amp;history.replaceState("",window.document.title,do=
cument.location.href.split("#")[0]),u.test(document.location.href)&amp;&amp=
;history.replaceState("",window.document.title,document.location.href.repla=
ce(u,"$1")),d.test(document.location.search)&amp;&amp;history.replaceState(=
"",window.document.title,document.location.href.replace(d,"$2"))}var r=3D"u=
ndefined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:n=
ull;t("./core");var l=3D!1;"complete"=3D=3D=3Ddocument.readyState?l=3D!0:wi=
ndow.addEventListener("load",n,!1);var c,u=3D/\/ath(\/)?$/,d=3D/([\?&amp;]a=
th=3D[^&amp;]*$|&amp;ath=3D[^&amp;]*(&amp;))/;o.intl=3D{en_us:{message:"To =
add this web app to the home screen: tap %icon and then &lt;strong&gt;%acti=
on&lt;/strong&gt;.",action:{ios:"Add to Home Screen",android:"Add to homesc=
reen",windows:"pin to start"}},zh_cn:{message:"=E5=A6=82=E8=A6=81=E6=8A=8A=
=E5=BA=94=E7=94=A8=E7=A8=8B=E5=BC=8F=E5=8A=A0=E8=87=B3=E4=B8=BB=E5=B1=8F=E5=
=B9=95,=E8=AF=B7=E7=82=B9=E5=87=BB%icon, =E7=84=B6=E5=90=8E&lt;strong&gt;%a=
ction&lt;/strong&gt;",action:{ios:"=E5=8A=A0=E8=87=B3=E4=B8=BB=E5=B1=8F=E5=
=B9=95",android:"=E5=8A=A0=E8=87=B3=E4=B8=BB=E5=B1=8F=E5=B9=95",windows:"=
=E6=8C=89=E4=BD=8F=E5=90=AF=E5=8A=A8"}},zh_tw:{message:"=E5=A6=82=E8=A6=81=
=E6=8A=8A=E6=87=89=E7=94=A8=E7=A8=8B=E5=BC=8F=E5=8A=A0=E8=87=B3=E4=B8=BB=E5=
=B1=8F=E5=B9=95, =E8=AB=8B=E9=BB=9E=E6=93=8A%icon, =E7=84=B6=E5=BE=8C&lt;st=
rong&gt;%action&lt;/strong&gt;.",action:{ios:"=E5=8A=A0=E8=87=B3=E4=B8=BB=
=E5=B1=8F=E5=B9=95",android:"=E5=8A=A0=E8=87=B3=E4=B8=BB=E5=B1=8F=E5=B9=95"=
,windows:"=E6=8C=89=E4=BD=8F=E5=95=9F=E5=8B=95"}}};for(var h in o.intl)o.in=
tl[h.substr(0,2)]=3Do.intl[h];o.defaults=3D{appID:"org.cubiq.addtohome",fon=
tSize:15,debug:!1,modal:!1,mandatory:!1,autostart:!0,skipFirstVisit:!1,star=
tDelay:1,lifespan:15,displayPace:1440,maxDisplayCount:0,icon:!0,message:"",=
validLocation:[],onInit:null,onShow:null,onRemove:null,onAdd:null,onPrivate=
:null,detectHomescreen:!1};var p=3Dwindow.navigator.userAgent,f=3Dwindow.na=
vigator;s(o,{hasToken:"#ath"=3D=3Ddocument.location.hash||u.test(document.l=
ocation.href)||d.test(document.location.search),isRetina:window.devicePixel=
Ratio&amp;&amp;window.devicePixelRatio&gt;1,isIDevice:/iphone|ipod|ipad/i.t=
est(p),isMobileChrome:p.indexOf("Android")&gt;-1&amp;&amp;/Chrome\/[.0-9]*/=
.test(p),isMobileIE:p.indexOf("Windows Phone")&gt;-1,language:f.language&am=
p;&amp;f.language.toLowerCase().replace("-","_")||""}),o.language=3Do.langu=
age&amp;&amp;o.language in o.intl?o.language:"en_us",o.isMobileSafari=3Do.i=
sIDevice&amp;&amp;p.indexOf("Safari")&gt;-1&amp;&amp;p.indexOf("CriOS")&lt;=
0,o.OS=3Do.isIDevice?"ios":o.isMobileChrome?"android":o.isMobileIE?"windows=
":"unsupported",o.OSVersion=3Dp.match(/(OS|Android) (\d+[_\.]\d+)/),o.OSVer=
sion=3Do.OSVersion&amp;&amp;o.OSVersion[2]?+o.OSVersion[2].replace("_",".")=
:0,o.isStandalone=3Dwindow.navigator.standalone||o.isMobileChrome&amp;&amp;=
screen.height-document.documentElement.clientHeight&lt;40,o.isTablet=3Do.is=
MobileSafari&amp;&amp;p.indexOf("iPad")&gt;-1||o.isMobileChrome&amp;&amp;p.=
indexOf("Mobile")&lt;0,o.isCompatible=3Do.isMobileSafari&amp;&amp;o.OSVersi=
on&gt;=3D6||o.isMobileChrome;var m=3D{lastDisplayTime:0,returningVisitor:!1=
,displayCount:0,optedout:!1,added:!1};o.removeSession=3Dfunction(t){try{loc=
alStorage.removeItem(t||o.defaults.appID)}catch(e){}},o.Class=3Dfunction(t)=
{if(this.options=3Ds({},o.defaults),s(this.options,t),this.options.mandator=
y=3Dthis.options.mandatory&amp;&amp;("standalone"in window.navigator||this.=
options.debug),this.options.modal=3Dthis.options.modal||this.options.mandat=
ory,this.options.mandatory&amp;&amp;(this.options.startDelay=3D-.5),this.op=
tions.detectHomescreen=3Dthis.options.detectHomescreen=3D=3D=3D!0?"hash":th=
is.options.detectHomescreen,this.options.debug&amp;&amp;(o.isCompatible=3D!=
0,o.OS=3D"string"=3D=3Dtypeof this.options.debug?this.options.debug:"unsupp=
orted"=3D=3Do.OS?"android":o.OS,o.OSVersion=3D"ios"=3D=3Do.OS?"8":"4"),this=
.container=3Ddocument.documentElement,this.session=3DlocalStorage.getItem(t=
his.options.appID),this.session=3Dthis.session?JSON.parse(this.session):voi=
d 0,!o.hasToken||o.isCompatible&amp;&amp;this.session||(o.hasToken=3D!1,a()=
),o.isCompatible){this.session=3Dthis.session||m;try{localStorage.setItem(t=
his.options.appID,JSON.stringify(this.session)),o.hasLocalStorage=3D!0}catc=
h(e){o.hasLocalStorage=3D!1,this.options.onPrivate&amp;&amp;this.options.on=
Private.call(this)}for(var i=3D!this.options.validLocation.length,n=3Dthis.=
options.validLocation.length;n--;)if(this.options.validLocation[n].test(doc=
ument.location.href)){i=3D!0;break}if(localStorage.getItem("addToHome")&amp=
;&amp;this.optOut(),!this.session.optedout&amp;&amp;!this.session.added&amp=
;&amp;i){if(o.isStandalone)return void(this.session.added||(this.session.ad=
ded=3D!0,this.updateSession(),this.options.onAdd&amp;&amp;o.hasLocalStorage=
&amp;&amp;this.options.onAdd.call(this)));if(this.options.detectHomescreen)=
{if(o.hasToken)return a(),void(this.session.added||(this.session.added=3D!0=
,this.updateSession(),this.options.onAdd&amp;&amp;o.hasLocalStorage&amp;&am=
p;this.options.onAdd.call(this)));"hash"=3D=3Dthis.options.detectHomescreen=
?history.replaceState("",window.document.title,document.location.href+"#ath=
"):"smartURL"=3D=3Dthis.options.detectHomescreen?history.replaceState("",wi=
ndow.document.title,document.location.href.replace(/(\/)?$/,"/ath$1")):hist=
ory.replaceState("",window.document.title,document.location.href+(document.=
location.search?"&amp;":"?")+"ath=3D")}(this.session.returningVisitor||(thi=
s.session.returningVisitor=3D!0,this.updateSession(),!this.options.skipFirs=
tVisit))&amp;&amp;o.hasLocalStorage&amp;&amp;(this.ready=3D!0,this.options.=
onInit&amp;&amp;this.options.onInit.call(this),this.options.autostart&amp;&=
amp;this.show())}}},o.Class.prototype=3D{events:{load:"_delayedShow",error:=
"_delayedShow",orientationchange:"resize",resize:"resize",scroll:"resize",c=
lick:"remove",touchmove:"_preventDefault",transitionend:"_removeElements",w=
ebkitTransitionEnd:"_removeElements",MSTransitionEnd:"_removeElements"},han=
dleEvent:function(t){var e=3Dthis.events[t.type];e&amp;&amp;this[e](t)},sho=
w:function(t){if(this.options.autostart&amp;&amp;!l)return void setTimeout(=
this.show.bind(this),50);if(!this.shown){var e=3DDate.now(),i=3Dthis.sessio=
n.lastDisplayTime;if(t!=3D=3D!0){if(!this.ready)return;
if(e-i&lt;6e4*this.options.displayPace)return;if(this.options.maxDisplayCou=
nt&amp;&amp;this.session.displayCount&gt;=3Dthis.options.maxDisplayCount)re=
turn}this.shown=3D!0,this.session.lastDisplayTime=3De,this.session.displayC=
ount++,this.updateSession(),this.applicationIcon||(this.applicationIcon=3Dd=
ocument.querySelector("ios"=3D=3Do.OS?'head link[rel^=3Dapple-touch-icon][s=
izes=3D"152x152"],head link[rel^=3Dapple-touch-icon][sizes=3D"144x144"],hea=
d link[rel^=3Dapple-touch-icon][sizes=3D"120x120"],head link[rel^=3Dapple-t=
ouch-icon][sizes=3D"114x114"],head link[rel^=3Dapple-touch-icon]':'head lin=
k[rel^=3D"shortcut icon"][sizes=3D"196x196"],head link[rel^=3Dapple-touch-i=
con]'));var n=3D"";n=3Dthis.options.message in o.intl?o.intl[this.options.m=
essage].message.replace("%action",o.intl[this.options.message].action[o.OS]=
):""!=3D=3Dthis.options.message?this.options.message:o.intl[o.language].mes=
sage.replace("%action",o.intl[o.language].action[o.OS]),n=3D"&lt;p&gt;"+n.r=
eplace("%icon",'&lt;span class=3D"ath-action-icon"&gt;icon&lt;/span&gt;')+"=
&lt;/p&gt;",this.viewport=3Ddocument.createElement("div"),this.viewport.cla=
ssName=3D"ath-viewport",this.options.modal&amp;&amp;(this.viewport.classNam=
e+=3D" ath-modal"),this.options.mandatory&amp;&amp;(this.viewport.className=
+=3D" ath-mandatory"),this.viewport.style.position=3D"absolute",this.elemen=
t=3Ddocument.createElement("div"),this.element.className=3D"ath-container a=
th-"+o.OS+" ath-"+o.OS+(o.OSVersion+"").substr(0,1)+" ath-"+(o.isTablet?"ta=
blet":"phone"),this.element.style.cssText=3D"-webkit-transition-property:-w=
ebkit-transform,opacity;-webkit-transition-duration:0;-webkit-transform:tra=
nslate3d(0,0,0);transition-property:transform,opacity;transition-duration:0=
;transform:translate3d(0,0,0);-webkit-transition-timing-function:ease-out",=
this.element.style.webkitTransform=3D"translate3d(0,-"+window.innerHeight+"=
px,0)",this.element.style.webkitTransitionDuration=3D"0s",this.options.icon=
&amp;&amp;this.applicationIcon&amp;&amp;(this.element.className+=3D" ath-ic=
on",this.img=3Ddocument.createElement("img"),this.img.className=3D"ath-appl=
ication-icon",this.img.addEventListener("load",this,!1),this.img.addEventLi=
stener("error",this,!1),this.img.src=3Dthis.applicationIcon.href,this.eleme=
nt.appendChild(this.img)),this.element.innerHTML+=3Dn,this.viewport.style.l=
eft=3D"-99999em",this.viewport.appendChild(this.element),this.container.app=
endChild(this.viewport),this.img||this._delayedShow()}},_delayedShow:functi=
on(){setTimeout(this._show.bind(this),1e3*this.options.startDelay+500)},_sh=
ow:function(){var t=3Dthis;this.updateViewport(),window.addEventListener("r=
esize",this,!1),window.addEventListener("scroll",this,!1),window.addEventLi=
stener("orientationchange",this,!1),this.options.modal&amp;&amp;document.ad=
dEventListener("touchmove",this,!0),this.options.mandatory||setTimeout(func=
tion(){t.element.addEventListener("click",t,!0)},1e3),setTimeout(function()=
{t.element.style.webkitTransform=3D"translate3d(0,0,0)",t.element.style.web=
kitTransitionDuration=3D"1.2s"},0),this.options.lifespan&amp;&amp;(this.rem=
oveTimer=3DsetTimeout(this.remove.bind(this),1e3*this.options.lifespan)),th=
is.options.onShow&amp;&amp;this.options.onShow.call(this)},remove:function(=
){clearTimeout(this.removeTimer),this.img&amp;&amp;(this.img.removeEventLis=
tener("load",this,!1),this.img.removeEventListener("error",this,!1)),window=
.removeEventListener("resize",this,!1),window.removeEventListener("scroll",=
this,!1),window.removeEventListener("orientationchange",this,!1),document.r=
emoveEventListener("touchmove",this,!0),this.element.removeEventListener("c=
lick",this,!0),this.element.addEventListener("transitionend",this,!1),this.=
element.addEventListener("webkitTransitionEnd",this,!1),this.element.addEve=
ntListener("MSTransitionEnd",this,!1),this.element.style.webkitTransitionDu=
ration=3D"0.3s",this.element.style.opacity=3D"0"},_removeElements:function(=
){this.element.removeEventListener("transitionend",this,!1),this.element.re=
moveEventListener("webkitTransitionEnd",this,!1),this.element.removeEventLi=
stener("MSTransitionEnd",this,!1),this.container.removeChild(this.viewport)=
,this.shown=3D!1,this.options.onRemove&amp;&amp;this.options.onRemove.call(=
this)},updateViewport:function(){if(this.shown){this.viewport.style.width=
=3Dwindow.innerWidth+"px",this.viewport.style.height=3Dwindow.innerHeight+"=
px",this.viewport.style.left=3Dwindow.scrollX+"px",this.viewport.style.top=
=3Dwindow.scrollY+"px";var t=3Ddocument.documentElement.clientWidth;this.or=
ientation=3Dt&gt;document.documentElement.clientHeight?"landscape":"portrai=
t";var e=3D"ios"=3D=3Do.OS?"portrait"=3D=3Dthis.orientation?screen.width:sc=
reen.height:screen.width;this.scale=3Dscreen.width&gt;t?1:e/window.innerWid=
th,this.element.style.fontSize=3Dthis.options.fontSize/this.scale+"px"}},re=
size:function(){clearTimeout(this.resizeTimer),this.resizeTimer=3DsetTimeou=
t(this.updateViewport.bind(this),100)},updateSession:function(){o.hasLocalS=
torage!=3D=3D!1&amp;&amp;localStorage.setItem(this.options.appID,JSON.strin=
gify(this.session))},clearSession:function(){this.session=3Dm,this.updateSe=
ssion()},optOut:function(){this.session.optedout=3D!0,this.updateSession()}=
,optIn:function(){this.session.optedout=3D!1,this.updateSession()},clearDis=
playCount:function(){this.session.displayCount=3D0,this.updateSession()},_p=
reventDefault:function(t){t.preventDefault(),t.stopPropagation()}},r.AMUI.a=
ddToHomescreen=3Do,e.exports=3Do}).call(this,"undefined"!=3Dtypeof global?g=
lobal:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:{=
})},{"./core":4}],24:[function(t,e){(function(i){"use strict";var n=3D"unde=
fined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:null=
,o=3Dt("./core"),s=3Dfunction(t,e){var i=3Dthis;this.options=3Dn.extend({},=
s.DEFAULTS,e),this.$element=3Dn(t),this.$element.addClass("am-fade am-in").=
on("click.alert.amui",".am-close",function(){i.close.call(this)})};s.DEFAUL=
TS=3D{removeElement:!0},s.prototype.close=3Dfunction(){function t(){i.trigg=
er("closed.alert.amui").remove()}var e=3Dn(this),i=3De.hasClass("am-alert")=
?e:e.parent(".am-alert");i.trigger("close.alert.amui"),i.removeClass("am-in=
"),o.support.transition&amp;&amp;i.hasClass("am-fade")?i.one(o.support.tran=
sition.end,t).emulateTransitionEnd(200):t()},n.fn.alert=3Dfunction(t){retur=
n this.each(function(){var e=3Dn(this),i=3De.data("amui.alert"),o=3D"object=
"=3D=3Dtypeof t&amp;&amp;t;i||e.data("amui.alert",i=3Dnew s(this,o||{})),"s=
tring"=3D=3Dtypeof t&amp;&amp;i[t].call(e)})},n(document).on("click.alert.a=
mui.data-api","[data-am-alert]",function(t){var e=3Dn(t.target);n(this).add=
Class("am-fade am-in"),e.is(".am-close")&amp;&amp;n(this).alert("close")}),=
n.AMUI.alert=3Ds,e.exports=3Ds}).call(this,"undefined"!=3Dtypeof global?glo=
bal:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:{})=
},{"./core":4}],25:[function(t,e){(function(i){"use strict";function n(t){r=
eturn this.each(function(){var e=3Do(this),i=3De.data("amui.button"),n=3D"o=
bject"=3D=3Dtypeof t&amp;&amp;t||{};i||e.data("amui.button",i=3Dnew a(this,=
n)),"toggle"=3D=3Dt?i.toggle():"string"=3D=3Dtypeof t&amp;&amp;i.setState(t=
)})}var o=3D"undefined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeo=
f i?i.jQuery:null,s=3Dt("./core"),a=3Dfunction(t,e){this.$element=3Do(t),th=
is.options=3Do.extend({},a.DEFAULTS,e),this.isLoading=3D!1,this.hasSpinner=
=3D!1};a.DEFAULTS=3D{loadingText:"loading...",className:{loading:"am-btn-lo=
ading",disabled:"am-disabled"},spinner:void 0},a.prototype.setState=3Dfunct=
ion(t){var e=3D"disabled",i=3Dthis.$element,n=3Dthis.options,a=3Di.is("inpu=
t")?"val":"html",r=3Dn.className.disabled+" "+n.className.loading;t+=3D"Tex=
t",n.resetText||(n.resetText=3Di[a]()),s.support.animation&amp;&amp;n.spinn=
er&amp;&amp;"html"=3D=3D=3Da&amp;&amp;!this.hasSpinner&amp;&amp;(n.loadingT=
ext=3D'&lt;span class=3D"am-icon-'+n.spinner+' am-icon-spin"&gt;&lt;/span&g=
t;'+n.loadingText,this.hasSpinner=3D!0),i[a](n[t]),setTimeout(o.proxy(funct=
ion(){"loadingText"=3D=3Dt?(i.addClass(r).attr(e,e),this.isLoading=3D!0):th=
is.isLoading&amp;&amp;(i.removeClass(r).removeAttr(e),this.isLoading=3D!1)}=
,this),0)},a.prototype.toggle=3Dfunction(){var t=3D!0,e=3Dthis.$element,i=
=3Dthis.$element.parent(".am-btn-group");if(i.length){var n=3Dthis.$element=
.find("input");"radio"=3D=3Dn.prop("type")&amp;&amp;(n.prop("checked")&amp;=
&amp;e.hasClass("am-active")?t=3D!1:i.find(".am-active").removeClass("am-ac=
tive")),t&amp;&amp;n.prop("checked",!e.hasClass("am-active")).trigger("chan=
ge")}t&amp;&amp;(e.toggleClass("am-active"),e.hasClass("am-active")||e.blur=
())},o.fn.button=3Dn,o(document).on("click.button.amui.data-api","[data-am-=
button]",function(t){var e=3Do(t.target);e.hasClass("am-btn")||(e=3De.close=
st(".am-btn")),n.call(e,"toggle"),t.preventDefault()}),s.ready(function(t){=
o("[data-am-loading]",t).each(function(){o(this).button(s.utils.parseOption=
s(o(this).data("amLoading")))})}),o.AMUI.button=3Da,e.exports=3Da}).call(th=
is,"undefined"!=3Dtypeof global?global:"undefined"!=3Dtypeof self?self:"und=
efined"!=3Dtypeof window?window:{})},{"./core":4}],26:[function(t,e){(funct=
ion(i){"use strict";function n(t){return this.each(function(){var e=3Do(thi=
s),i=3De.data("amui.collapse"),n=3Do.extend({},a.DEFAULTS,s.utils.options(e=
.attr("data-am-collapse")),"object"=3D=3Dtypeof t&amp;&amp;t);!i&amp;&amp;n=
.toggle&amp;&amp;"open"=3D=3Dt&amp;&amp;(t=3D!t),i||e.data("amui.collapse",=
i=3Dnew a(this,n)),"string"=3D=3Dtypeof t&amp;&amp;i[t]()})}var o=3D"undefi=
ned"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:null,s=
=3Dt("./core"),a=3Dfunction(t,e){this.$element=3Do(t),this.options=3Do.exte=
nd({},a.DEFAULTS,e),this.transitioning=3Dnull,this.options.parent&amp;&amp;=
(this.$parent=3Do(this.options.parent)),this.options.toggle&amp;&amp;this.t=
oggle()};a.DEFAULTS=3D{toggle:!0},a.prototype.open=3Dfunction(){if(!this.tr=
ansitioning&amp;&amp;!this.$element.hasClass("am-in")){var t=3Do.Event("ope=
n.collapse.amui");if(this.$element.trigger(t),!t.isDefaultPrevented()){var =
e=3Dthis.$parent&amp;&amp;this.$parent.find("&gt; .am-panel &gt; .am-in");i=
f(e&amp;&amp;e.length){var i=3De.data("amui.collapse");if(i&amp;&amp;i.tran=
sitioning)return;n.call(e,"close"),i||e.data("amui.collapse",null)}this.$el=
ement.removeClass("am-collapse").addClass("am-collapsing").height(0),this.t=
ransitioning=3D1;var a=3Dfunction(){this.$element.removeClass("am-collapsin=
g").addClass("am-collapse am-in").height(""),this.transitioning=3D0,this.$e=
lement.trigger("opened.collapse.amui")};if(!s.support.transition)return a.c=
all(this);var r=3Dthis.$element[0].scrollHeight;this.$element.one(s.support=
.transition.end,o.proxy(a,this)).emulateTransitionEnd(300).css({height:r})}=
}},a.prototype.close=3Dfunction(){if(!this.transitioning&amp;&amp;this.$ele=
ment.hasClass("am-in")){var t=3Do.Event("close.collapse.amui");if(this.$ele=
ment.trigger(t),!t.isDefaultPrevented()){this.$element.height(this.$element=
.height()).redraw(),this.$element.addClass("am-collapsing").removeClass("am=
-collapse am-in"),this.transitioning=3D1;var e=3Dfunction(){this.transition=
ing=3D0,this.$element.trigger("closed.collapse.amui").removeClass("am-colla=
psing").addClass("am-collapse")};return s.support.transition?void this.$ele=
ment.height(0).one(s.support.transition.end,o.proxy(e,this)).emulateTransit=
ionEnd(300):e.call(this)}}},a.prototype.toggle=3Dfunction(){this[this.$elem=
ent.hasClass("am-in")?"close":"open"]()},o.fn.collapse=3Dn,o(document).on("=
click.collapse.amui.data-api","[data-am-collapse]",function(t){var e,i=3Do(=
this),a=3Ds.utils.options(i.attr("data-am-collapse")),r=3Da.target||t.preve=
ntDefault()||(e=3Di.attr("href"))&amp;&amp;e.replace(/.*(?=3D#[^\s]+$)/,"")=
,l=3Do(r),c=3Dl.data("amui.collapse"),u=3Dc?"toggle":a,d=3Da.parent,h=3Dd&a=
mp;&amp;o(d);c&amp;&amp;c.transitioning||(h&amp;&amp;h.find("[data-am-colla=
pse]").not(i).addClass("am-collapsed"),i[l.hasClass("am-in")?"addClass":"re=
moveClass"]("am-collapsed")),n.call(l,u)}),o.AMUI.collapse=3Da,e.exports=3D=
a}).call(this,"undefined"!=3Dtypeof global?global:"undefined"!=3Dtypeof sel=
f?self:"undefined"!=3Dtypeof window?window:{})},{"./core":4}],27:[function(=
t,e){(function(i){"use strict";var n=3D"undefined"!=3Dtypeof window?window.=
jQuery:"undefined"!=3Dtypeof i?i.jQuery:null,o=3Dt("./core"),s=3Dn(document=
),a=3Dfunction(t,e){if(this.$element=3Dn(t),this.options=3Dn.extend({},a.DE=
FAULTS,e),this.format=3Dr.parseFormat(this.options.format),this.$element.da=
ta("date",this.options.date),this.language=3Dthis.getLocale(this.options.lo=
cale),this.theme=3Dthis.options.theme,this.$picker=3Dn(r.template).appendTo=
("body").on({click:n.proxy(this.click,this)}),this.isInput=3Dthis.$element.=
is("input"),this.component=3Dthis.$element.is(".am-datepicker-date")?this.$=
element.find(".am-datepicker-add-on"):!1,this.isInput?this.$element.on({"cl=
ick.datepicker.amui":n.proxy(this.open,this),"keyup.datepicker.amui":n.prox=
y(this.update,this)}):this.component?this.component.on("click.datepicker.am=
ui",n.proxy(this.open,this)):this.$element.on("click.datepicker.amui",n.pro=
xy(this.open,this)),this.minViewMode=3Dthis.options.minViewMode,"string"=3D=
=3Dtypeof this.minViewMode)switch(this.minViewMode){case"months":this.minVi=
ewMode=3D1;break;case"years":this.minViewMode=3D2;break;default:this.minVie=
wMode=3D0}if(this.viewMode=3Dthis.options.viewMode,"string"=3D=3Dtypeof thi=
s.viewMode)switch(this.viewMode){case"months":this.viewMode=3D1;break;case"=
years":this.viewMode=3D2;break;default:this.viewMode=3D0}this.startViewMode=
=3Dthis.viewMode,this.weekStart=3D(this.options.weekStart||a.locales[this.l=
anguage].weekStart||0)%7,this.weekEnd=3D(this.weekStart+6)%7,this.onRender=
=3Dthis.options.onRender,this.setTheme(),this.fillDow(),this.fillMonths(),t=
his.update(),this.showMode()};a.DEFAULTS=3D{locale:"zh_CN",format:"yyyy-mm-=
dd",weekStart:void 0,viewMode:0,minViewMode:0,date:"",theme:"",autoClose:1,=
onRender:function(){return""}},a.prototype.open=3Dfunction(t){this.$picker.=
show(),this.height=3Dthis.component?this.component.outerHeight():this.$elem=
ent.outerHeight(),this.place(),n(window).on("resize.datepicker.amui",n.prox=
y(this.place,this)),t&amp;&amp;(t.stopPropagation(),t.preventDefault());var=
 e=3Dthis;s.on("mousedown.datapicker.amui touchstart.datepicker.amui",funct=
ion(t){0=3D=3D=3Dn(t.target).closest(".am-datepicker").length&amp;&amp;e.cl=
ose()}),this.$element.trigger({type:"open.datepicker.amui",date:this.date})=
},a.prototype.close=3Dfunction(){this.$picker.hide(),n(window).off("resize.=
datepicker.amui",this.place),this.viewMode=3Dthis.startViewMode,this.showMo=
de(),this.isInput||n(document).off("mousedown.datapicker.amui touchstart.da=
tepicker.amui",this.close),this.$element.trigger({type:"close.datepicker.am=
ui",date:this.date})},a.prototype.set=3Dfunction(){var t=3Dr.formatDate(thi=
s.date,this.format);this.isInput?this.$element.prop("value",t):(this.compon=
ent&amp;&amp;this.$element.find("input").prop("value",t),this.$element.data=
("date",t))},a.prototype.setValue=3Dfunction(t){this.date=3D"string"=3D=3Dt=
ypeof t?r.parseDate(t,this.format):new Date(t),this.set(),this.viewDate=3Dn=
ew Date(this.date.getFullYear(),this.date.getMonth(),1,0,0,0,0),this.fill()=
},a.prototype.place=3Dfunction(){var t=3Dthis.component?this.component.offs=
et():this.$element.offset(),e=3Dthis.component?this.component.width():this.=
$element.width(),i=3Dt.top+this.height,n=3Dt.left,o=3Ds.width()-t.left-e,a=
=3Dthis.isOutView();if(this.$picker.removeClass("am-datepicker-right"),this=
.$picker.removeClass("am-datepicker-up"),s.width()&gt;640){if(a.outRight)re=
turn this.$picker.addClass("am-datepicker-right"),void this.$picker.css({to=
p:i,left:"auto",right:o});a.outBottom&amp;&amp;(this.$picker.addClass("am-d=
atepicker-up"),i=3Dt.top-this.$picker.outerHeight(!0))}else n=3D0;this.$pic=
ker.css({top:i,left:n})},a.prototype.update=3Dfunction(t){this.date=3Dr.par=
seDate("string"=3D=3Dtypeof t?t:this.isInput?this.$element.prop("value"):th=
is.$element.data("date"),this.format),this.viewDate=3Dnew Date(this.date.ge=
tFullYear(),this.date.getMonth(),1,0,0,0,0),this.fill()},a.prototype.fillDo=
w=3Dfunction(){for(var t=3Dthis.weekStart,e=3D"&lt;tr&gt;";t&lt;this.weekSt=
art+7;)e+=3D'&lt;th class=3D"am-datepicker-dow"&gt;'+a.locales[this.languag=
e].daysMin[t++%7]+"&lt;/th&gt;";e+=3D"&lt;/tr&gt;",this.$picker.find(".am-d=
atepicker-days thead").append(e)},a.prototype.fillMonths=3Dfunction(){for(v=
ar t=3D"",e=3D0;12&gt;e;)t+=3D'&lt;span class=3D"am-datepicker-month"&gt;'+=
a.locales[this.language].monthsShort[e++]+"&lt;/span&gt;";this.$picker.find=
(".am-datepicker-months td").append(t)},a.prototype.fill=3Dfunction(){var t=
=3Dnew Date(this.viewDate),e=3Dt.getFullYear(),i=3Dt.getMonth(),n=3Dthis.da=
te.valueOf(),o=3Dnew Date(e,i-1,28,0,0,0,0),s=3Dr.getDaysInMonth(o.getFullY=
ear(),o.getMonth()),l=3Dthis.$picker.find(".am-datepicker-days .am-datepick=
er-select");l.text("zh_CN"=3D=3D=3Dthis.language?e+a.locales[this.language]=
.year[0]+" "+a.locales[this.language].months[i]:a.locales[this.language].mo=
nths[i]+" "+e),o.setDate(s),o.setDate(s-(o.getDay()-this.weekStart+7)%7);va=
r c=3Dnew Date(o);c.setDate(c.getDate()+42),c=3Dc.valueOf();for(var u,d,h,p=
=3D[];o.valueOf()&lt;c;)o.getDay()=3D=3D=3Dthis.weekStart&amp;&amp;p.push("=
&lt;tr&gt;"),u=3Dthis.onRender(o),d=3Do.getFullYear(),h=3Do.getMonth(),i&gt=
;h&amp;&amp;d=3D=3D=3De||e&gt;d?u+=3D" am-datepicker-old":(h&gt;i&amp;&amp;=
d=3D=3D=3De||d&gt;e)&amp;&amp;(u+=3D" am-datepicker-new"),o.valueOf()=3D=3D=
=3Dn&amp;&amp;(u+=3D" am-active"),p.push('&lt;td class=3D"am-datepicker-day=
 '+u+'"&gt;'+o.getDate()+"&lt;/td&gt;"),o.getDay()=3D=3D=3Dthis.weekEnd&amp=
;&amp;p.push("&lt;/tr&gt;"),o.setDate(o.getDate()+1);this.$picker.find(".am=
-datepicker-days tbody").empty().append(p.join(""));var f=3Dthis.date.getFu=
llYear(),m=3Dthis.$picker.find(".am-datepicker-months").find(".am-datepicke=
r-select").text(e);m=3Dm.end().find("span").removeClass("am-active").remove=
Class("am-disabled");for(var v=3D0;12&gt;v;)this.onRender(t.setFullYear(e,v=
))&amp;&amp;m.eq(v).addClass("am-disabled"),v++;f=3D=3D=3De&amp;&amp;m.eq(t=
his.date.getMonth()).removeClass("am-disabled").addClass("am-active"),p=3D"=
",e=3D10*parseInt(e/10,10);var g,w=3Dthis.$picker.find(".am-datepicker-year=
s").find(".am-datepicker-select").text(e+"-"+(e+9)).end().find("td");e-=3D1=
;for(var y=3D-1;11&gt;y;y++)g=3Dthis.onRender(t.setFullYear(e)),p+=3D'&lt;s=
pan class=3D"'+g+(-1=3D=3D=3Dy||10=3D=3D=3Dy?" am-datepicker-old":"")+(f=3D=
=3D=3De?" am-active":"")+'"&gt;'+e+"&lt;/span&gt;",e+=3D1;w.html(p)},a.prot=
otype.click=3Dfunction(t){t.stopPropagation(),t.preventDefault();var e,i,o=
=3Dthis.$picker.find(".am-datepicker-days").find(".am-active"),s=3Dthis.$pi=
cker.find(".am-datepicker-months"),a=3Ds.find(".am-active").index(),l=3Dn(t=
.target).closest("span, td, th");if(1=3D=3D=3Dl.length)switch(l[0].nodeName=
.toLowerCase()){case"th":switch(l[0].className){case"am-datepicker-switch":=
this.showMode(1);break;case"am-datepicker-prev":case"am-datepicker-next":th=
is.viewDate["set"+r.modes[this.viewMode].navFnc].call(this.viewDate,this.vi=
ewDate["get"+r.modes[this.viewMode].navFnc].call(this.viewDate)+r.modes[thi=
s.viewMode].navStep*("am-datepicker-prev"=3D=3D=3Dl[0].className?-1:1)),thi=
s.fill(),this.set()}break;case"span":if(l.is(".am-disabled"))return;l.is(".=
am-datepicker-month")?(e=3Dl.parent().find("span").index(l),l.is(".am-activ=
e")?this.viewDate.setMonth(e,o.text()):this.viewDate.setMonth(e)):(i=3Dpars=
eInt(l.text(),10)||0,l.is(".am-active")?this.viewDate.setFullYear(i,a,o.tex=
t()):this.viewDate.setFullYear(i)),0!=3D=3Dthis.viewMode&amp;&amp;(this.dat=
e=3Dnew Date(this.viewDate),this.$element.trigger({type:"changeDate.datepic=
ker.amui",date:this.date,viewMode:r.modes[this.viewMode].clsName})),this.sh=
owMode(-1),this.fill(),this.set();break;case"td":if(l.is(".am-datepicker-da=
y")&amp;&amp;!l.is(".am-disabled")){var c=3DparseInt(l.text(),10)||1;e=3Dth=
is.viewDate.getMonth(),l.is(".am-datepicker-old")?e-=3D1:l.is(".am-datepick=
er-new")&amp;&amp;(e+=3D1),i=3Dthis.viewDate.getFullYear(),this.date=3Dnew =
Date(i,e,c,0,0,0,0),this.viewDate=3Dnew Date(i,e,Math.min(28,c),0,0,0,0),th=
is.fill(),this.set(),this.$element.trigger({type:"changeDate.datepicker.amu=
i",date:this.date,viewMode:r.modes[this.viewMode].clsName}),this.options.au=
toClose&amp;&amp;this.close()}}},a.prototype.mousedown=3Dfunction(t){t.stop=
Propagation(),t.preventDefault()},a.prototype.showMode=3Dfunction(t){t&amp;=
&amp;(this.viewMode=3DMath.max(this.minViewMode,Math.min(2,this.viewMode+t)=
)),this.$picker.find("&gt;div").hide().filter(".am-datepicker-"+r.modes[thi=
s.viewMode].clsName).show()},a.prototype.isOutView=3Dfunction(){var t=3Dthi=
s.component?this.component.offset():this.$element.offset(),e=3D{outRight:!1=
,outBottom:!1},i=3Dthis.$picker,n=3Dt.left+i.outerWidth(!0),o=3Dt.top+i.out=
erHeight(!0)+this.$element.innerHeight();return n&gt;s.width()&amp;&amp;(e.=
outRight=3D!0),o&gt;s.height()&amp;&amp;(e.outBottom=3D!0),e},a.prototype.g=
etLocale=3Dfunction(t){return t||(t=3Dnavigator.language&amp;&amp;navigator=
.language.split("-"),t[1]=3Dt[1].toUpperCase(),t=3Dt.join("_")),a.locales[t=
]||(t=3D"en_US"),t},a.prototype.setTheme=3Dfunction(){this.theme&amp;&amp;t=
his.$picker.addClass("am-datepicker-"+this.theme)},a.locales=3D{en_US:{days=
:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d=
aysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu=
","We","Th","Fr","Sa"],months:["January","February","March","April","May","=
June","July","August","September","October","November","December"],monthsSh=
ort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec=
"],weekStart:0},zh_CN:{days:["=E6=98=9F=E6=9C=9F=E6=97=A5","=E6=98=9F=E6=9C=
=9F=E4=B8=80","=E6=98=9F=E6=9C=9F=E4=BA=8C","=E6=98=9F=E6=9C=9F=E4=B8=89","=
=E6=98=9F=E6=9C=9F=E5=9B=9B","=E6=98=9F=E6=9C=9F=E4=BA=94","=E6=98=9F=E6=9C=
=9F=E5=85=AD"],daysShort:["=E5=91=A8=E6=97=A5","=E5=91=A8=E4=B8=80","=E5=91=
=A8=E4=BA=8C","=E5=91=A8=E4=B8=89","=E5=91=A8=E5=9B=9B","=E5=91=A8=E4=BA=94=
","=E5=91=A8=E5=85=AD"],daysMin:["=E6=97=A5","=E4=B8=80","=E4=BA=8C","=E4=
=B8=89","=E5=9B=9B","=E4=BA=94","=E5=85=AD"],months:["=E4=B8=80=E6=9C=88","=
=E4=BA=8C=E6=9C=88","=E4=B8=89=E6=9C=88","=E5=9B=9B=E6=9C=88","=E4=BA=94=E6=
=9C=88","=E5=85=AD=E6=9C=88","=E4=B8=83=E6=9C=88","=E5=85=AB=E6=9C=88","=E4=
=B9=9D=E6=9C=88","=E5=8D=81=E6=9C=88","=E5=8D=81=E4=B8=80=E6=9C=88","=E5=8D=
=81=E4=BA=8C=E6=9C=88"],monthsShort:["=E4=B8=80=E6=9C=88","=E4=BA=8C=E6=9C=
=88","=E4=B8=89=E6=9C=88","=E5=9B=9B=E6=9C=88","=E4=BA=94=E6=9C=88","=E5=85=
=AD=E6=9C=88","=E4=B8=83=E6=9C=88","=E5=85=AB=E6=9C=88","=E4=B9=9D=E6=9C=88=
","=E5=8D=81=E6=9C=88","=E5=8D=81=E4=B8=80=E6=9C=88","=E5=8D=81=E4=BA=8C=E6=
=9C=88"],weekStart:1,year:["=E5=B9=B4"]}};var r=3D{modes:[{clsName:"days",n=
avFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{cl=
sName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(t){return =
t%4=3D=3D=3D0&amp;&amp;t%100!=3D=3D0||t%400=3D=3D=3D0},getDaysInMonth:funct=
ion(t,e){return[31,r.isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]}=
,parseFormat:function(t){var e=3Dt.match(/[.\/\-\s].*?/),i=3Dt.split(/\W+/)=
;if(!e||!i||0=3D=3D=3Di.length)throw new Error("Invalid date format.");retu=
rn{separator:e,parts:i}},parseDate:function(t,e){var i,n=3Dt.split(e.separa=
tor);if(t=3Dnew Date,t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMil=
liseconds(0),n.length=3D=3D=3De.parts.length){for(var o=3Dt.getFullYear(),s=
=3Dt.getDate(),a=3Dt.getMonth(),r=3D0,l=3De.parts.length;l&gt;r;r++)switch(=
i=3DparseInt(n[r],10)||1,e.parts[r]){case"dd":case"d":s=3Di,t.setDate(i);br=
eak;case"mm":case"m":a=3Di-1,t.setMonth(i-1);break;case"yy":o=3D2e3+i,t.set=
FullYear(2e3+i);break;case"yyyy":o=3Di,t.setFullYear(i)}t=3Dnew Date(o,a,s,=
0,0,0)}return t},formatDate:function(t,e){var i=3D{d:t.getDate(),m:t.getMon=
th()+1,yy:t.getFullYear().toString().substring(2),yyyy:t.getFullYear()},n=
=3D[];i.dd=3D(i.d&lt;10?"0":"")+i.d,i.mm=3D(i.m&lt;10?"0":"")+i.m;for(var o=
=3D0,s=3De.parts.length;s&gt;o;o++)n.push(i[e.parts[o]]);return n.join(e.se=
parator)},headTemplate:'&lt;thead&gt;&lt;tr class=3D"am-datepicker-header"&=
gt;&lt;th class=3D"am-datepicker-prev"&gt;&lt;i class=3D"am-datepicker-prev=
-icon"&gt;&lt;/i&gt;&lt;/th&gt;&lt;th colspan=3D"5" class=3D"am-datepicker-=
switch"&gt;&lt;div class=3D"am-datepicker-select"&gt;&lt;/div&gt;&lt;/th&gt=
;&lt;th class=3D"am-datepicker-next"&gt;&lt;i class=3D"am-datepicker-next-i=
con"&gt;&lt;/i&gt;&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;',contTemplate:'&lt;t=
body&gt;&lt;tr&gt;&lt;td colspan=3D"7"&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&=
gt;'};r.template=3D'&lt;div class=3D"am-datepicker am-datepicker-dropdown"&=
gt;&lt;div class=3D"am-datepicker-caret"&gt;&lt;/div&gt;&lt;div class=3D"am=
-datepicker-days"&gt;&lt;table class=3D"am-datepicker-table"&gt;'+r.headTem=
plate+'&lt;tbody&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;/div&gt;&lt;div class=
=3D"am-datepicker-months"&gt;&lt;table class=3D"am-datepicker-table"&gt;'+r=
.headTemplate+r.contTemplate+'&lt;/table&gt;&lt;/div&gt;&lt;div class=3D"am=
-datepicker-years"&gt;&lt;table class=3D"am-datepicker-table"&gt;'+r.headTe=
mplate+r.contTemplate+"&lt;/table&gt;&lt;/div&gt;&lt;/div&gt;",n.fn.datepic=
ker=3Dfunction(t,e){return this.each(function(){var i=3Dn(this),s=3Di.data(=
"amui.datepicker"),r=3Dn.extend({},o.utils.options(i.data("amDatepicker")),=
"object"=3D=3Dtypeof t&amp;&amp;t);s||i.data("amui.datepicker",s=3Dnew a(th=
is,r)),"string"=3D=3Dtypeof t&amp;&amp;s[t]&amp;&amp;s[t](e)})},n.fn.datepi=
cker.Constructor=3Da,o.ready(function(){n("[data-am-datepicker]").datepicke=
r()}),n.AMUI.datepicker=3Da,e.exports=3Da}).call(this,"undefined"!=3Dtypeof=
 global?global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof window=
?window:{})},{"./core":4}],28:[function(t,e){(function(i){"use strict";var =
n=3D"undefined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQ=
uery:null,o=3Dt("./core"),s=3Dn(document),a=3Do.support.transition,r=3Dfunc=
tion(){this.id=3Do.utils.generateGUID("am-dimmer"),this.$element=3Dn(r.DEFA=
ULTS.tpl,{id:this.id}),this.inited=3D!1,this.scrollbarWidth=3D0,this.$used=
=3Dn([])};r.DEFAULTS=3D{tpl:'&lt;div class=3D"am-dimmer" data-am-dimmer&gt;=
&lt;/div&gt;'},r.prototype.init=3Dfunction(){return this.inited||(n(documen=
t.body).append(this.$element),this.inited=3D!0,s.trigger("init.dimmer.amui"=
)),this},r.prototype.open=3Dfunction(t){this.inited||this.init();var e=3Dth=
is.$element;return t&amp;&amp;(this.$used=3Dthis.$used.add(n(t))),this.chec=
kScrollbar().setScrollbar(),e.off(a.end).show().trigger("open.dimmer.amui")=
,setTimeout(function(){e.addClass("am-active")},0),this},r.prototype.close=
=3Dfunction(t,e){function i(){o.hide(),this.resetScrollbar()}if(this.$used=
=3Dthis.$used.not(n(t)),!e&amp;&amp;this.$used.length)return this;var o=3Dt=
his.$element;return o.removeClass("am-active").trigger("close.dimmer.amui")=
,i.call(this),this},r.prototype.checkScrollbar=3Dfunction(){return this.scr=
ollbarWidth=3Do.utils.measureScrollbar(),this},r.prototype.setScrollbar=3Df=
unction(){var t=3Dn(document.body),e=3DparseInt(t.css("padding-right")||0,1=
0);return this.scrollbarWidth&amp;&amp;t.css("padding-right",e+this.scrollb=
arWidth),t.addClass("am-dimmer-active"),this},r.prototype.resetScrollbar=3D=
function(){return n(document.body).css("padding-right","").removeClass("am-=
dimmer-active"),this};var l=3Dnew r;n.AMUI.dimmer=3Dl,e.exports=3Dl}).call(=
this,"undefined"!=3Dtypeof global?global:"undefined"!=3Dtypeof self?self:"u=
ndefined"!=3Dtypeof window?window:{})},{"./core":4}],29:[function(t,e){(fun=
ction(i){"use strict";function n(t){return this.each(function(){var e=3Do(t=
his),i=3De.data("amui.dropdown"),n=3Do.extend({},s.utils.parseOptions(e.att=
r("data-am-dropdown")),"object"=3D=3Dtypeof t&amp;&amp;t);i||e.data("amui.d=
ropdown",i=3Dnew r(this,n)),"string"=3D=3Dtypeof t&amp;&amp;i[t]()})}var o=
=3D"undefined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQu=
ery:null,s=3Dt("./core"),a=3Ds.support.animation,r=3Dfunction(t,e){this.opt=
ions=3Do.extend({},r.DEFAULTS,e),e=3Dthis.options,this.$element=3Do(t),this=
.$toggle=3Dthis.$element.find(e.selector.toggle),this.$dropdown=3Dthis.$ele=
ment.find(e.selector.dropdown),this.$boundary=3De.boundary=3D=3D=3Dwindow?o=
(window):this.$element.closest(e.boundary),this.$justify=3De.justify&amp;&a=
mp;o(e.justify).length&amp;&amp;o(e.justify)||void 0,!this.$boundary.length=
&amp;&amp;(this.$boundary=3Do(window)),this.active=3Dthis.$element.hasClass=
("am-active")?!0:!1,this.animating=3Dnull,this.events()};r.DEFAULTS=3D{anim=
ation:"am-animation-slide-top-fixed",boundary:window,justify:void 0,selecto=
r:{dropdown:".am-dropdown-content",toggle:".am-dropdown-toggle"},trigger:"c=
lick"},r.prototype.toggle=3Dfunction(){this.clear(),this.animating||this[th=
is.active?"close":"open"]()},r.prototype.open=3Dfunction(){var t=3Dthis.$to=
ggle,e=3Dthis.$element,i=3Dthis.$dropdown;if(!t.is(".am-disabled, :disabled=
")&amp;&amp;!this.active){e.trigger("open.dropdown.amui").addClass("am-acti=
ve"),t.trigger("focus"),this.checkDimensions();var n=3Do.proxy(function(){e=
.trigger("opened.dropdown.amui"),this.active=3D!0,this.animating=3D0},this)=
;a?(this.animating=3D1,i.addClass(this.options.animation).on(a.end+".open.d=
ropdown.amui",o.proxy(function(){n(),i.removeClass(this.options.animation)}=
,this))):n()}},r.prototype.close=3Dfunction(){if(this.active){var t=3D"am-d=
ropdown-animation",e=3Dthis.$element,i=3Dthis.$dropdown;e.trigger("close.dr=
opdown.amui");var n=3Do.proxy(function(){e.removeClass("am-active").trigger=
("closed.dropdown.amui"),this.active=3D!1,this.animating=3D0,this.$toggle.b=
lur()},this);a?(i.removeClass(this.options.animation),i.addClass(t),this.an=
imating=3D1,i.one(a.end+".close.dropdown.amui",function(){i.removeClass(t),=
n()})):n()}},r.prototype.checkDimensions=3Dfunction(){if(this.$dropdown.len=
gth){var t=3Dthis.$dropdown,e=3Dt.offset(),i=3Dt.outerWidth(),n=3Dthis.$bou=
ndary.width(),s=3Do.isWindow(this.boundary)&amp;&amp;this.$boundary.offset(=
)?this.$boundary.offset().left:0;this.$justify&amp;&amp;t.css({"min-width":=
this.$justify.css("width")}),i+(e.left-s)&gt;n&amp;&amp;this.$element.addCl=
ass("am-dropdown-flip")}},r.prototype.clear=3Dfunction(){o("[data-am-dropdo=
wn]").not(this.$element).each(function(){var t=3Do(this).data("amui.dropdow=
n");t&amp;&amp;t.close()})},r.prototype.events=3Dfunction(){var t=3D"dropdo=
wn.amui",e=3Dthis.$toggle;e.on("click."+t,o.proxy(function(t){t.preventDefa=
ult(),this.toggle()},this)),o(document).on("keydown.dropdown.amui",o.proxy(=
function(t){27=3D=3D=3Dt.keyCode&amp;&amp;this.active&amp;&amp;this.close()=
},this)).on("click.outer.dropdown.amui",o.proxy(function(t){!this.active||t=
his.$element[0]!=3D=3Dt.target&amp;&amp;this.$element.find(t.target).length=
||this.close()},this))},o.fn.dropdown=3Dn,s.ready(function(t){o("[data-am-d=
ropdown]",t).dropdown()}),o(document).on("click.dropdown.amui.data-api",".a=
m-dropdown form",function(t){t.stopPropagation()}),o.AMUI.dropdown=3Dr,e.ex=
ports=3Dr}).call(this,"undefined"!=3Dtypeof global?global:"undefined"!=3Dty=
peof self?self:"undefined"!=3Dtypeof window?window:{})},{"./core":4}],30:[f=
unction(t,e){(function(i){var n=3D"undefined"!=3Dtypeof window?window.jQuer=
y:"undefined"!=3Dtypeof i?i.jQuery:null,o=3Dt("./core");n.flexslider=3Dfunc=
tion(t,e){var i=3Dn(t);i.vars=3Dn.extend({},n.flexslider.defaults,e);var o,=
s=3Di.vars.namespace,a=3Dwindow.navigator&amp;&amp;window.navigator.msPoint=
erEnabled&amp;&amp;window.MSGesture,r=3D("ontouchstart"in window||a||window=
.DocumentTouch&amp;&amp;document instanceof DocumentTouch)&amp;&amp;i.vars.=
touch,l=3D"click touchend MSPointerUp keyup",c=3D"",u=3D"vertical"=3D=3D=3D=
i.vars.direction,d=3Di.vars.reverse,h=3Di.vars.itemWidth&gt;0,p=3D"fade"=3D=
=3D=3Di.vars.animation,f=3D""!=3D=3Di.vars.asNavFor,m=3D{},v=3D!0;n.data(t,=
"flexslider",i),m=3D{init:function(){i.animating=3D!1,i.currentSlide=3Dpars=
eInt(i.vars.startAt?i.vars.startAt:0,10),isNaN(i.currentSlide)&amp;&amp;(i.=
currentSlide=3D0),i.animatingTo=3Di.currentSlide,i.atEnd=3D0=3D=3D=3Di.curr=
entSlide||i.currentSlide=3D=3D=3Di.last,i.containerSelector=3Di.vars.select=
or.substr(0,i.vars.selector.search(" ")),i.slides=3Dn(i.vars.selector,i),i.=
container=3Dn(i.containerSelector,i),i.count=3Di.slides.length,i.syncExists=
=3Dn(i.vars.sync).length&gt;0,"slide"=3D=3D=3Di.vars.animation&amp;&amp;(i.=
vars.animation=3D"swing"),i.prop=3Du?"top":"marginLeft",i.args=3D{},i.manua=
lPause=3D!1,i.stopped=3D!1,i.started=3D!1,i.startTimeout=3Dnull,i.transitio=
ns=3D!i.vars.video&amp;&amp;!p&amp;&amp;i.vars.useCSS&amp;&amp;function(){v=
ar t=3Ddocument.createElement("div"),e=3D["perspectiveProperty","WebkitPers=
pective","MozPerspective","OPerspective","msPerspective"];for(var n in e)if=
(void 0!=3D=3Dt.style[e[n]])return i.pfx=3De[n].replace("Perspective","").t=
oLowerCase(),i.prop=3D"-"+i.pfx+"-transform",!0;return!1}(),i.ensureAnimati=
onEnd=3D"",""!=3D=3Di.vars.controlsContainer&amp;&amp;(i.controlsContainer=
=3Dn(i.vars.controlsContainer).length&gt;0&amp;&amp;n(i.vars.controlsContai=
ner)),""!=3D=3Di.vars.manualControls&amp;&amp;(i.manualControls=3Dn(i.vars.=
manualControls).length&gt;0&amp;&amp;n(i.vars.manualControls)),i.vars.rando=
mize&amp;&amp;(i.slides.sort(function(){return Math.round(Math.random())-.5=
}),i.container.empty().append(i.slides)),i.doMath(),i.setup("init"),i.vars.=
controlNav&amp;&amp;m.controlNav.setup(),i.vars.directionNav&amp;&amp;m.dir=
ectionNav.setup(),i.vars.keyboard&amp;&amp;(1=3D=3D=3Dn(i.containerSelector=
).length||i.vars.multipleKeyboard)&amp;&amp;n(document).bind("keyup",functi=
on(t){var e=3Dt.keyCode;if(!i.animating&amp;&amp;(39=3D=3D=3De||37=3D=3D=3D=
e)){var n=3D39=3D=3D=3De?i.getTarget("next"):37=3D=3D=3De?i.getTarget("prev=
"):!1;i.flexAnimate(n,i.vars.pauseOnAction)}}),i.vars.mousewheel&amp;&amp;i=
.bind("mousewheel",function(t,e){t.preventDefault();var n=3Di.getTarget(0&g=
t;e?"next":"prev");i.flexAnimate(n,i.vars.pauseOnAction)}),i.vars.pausePlay=
&amp;&amp;m.pausePlay.setup(),i.vars.slideshow&amp;&amp;i.vars.pauseInvisib=
le&amp;&amp;m.pauseInvisible.init(),i.vars.slideshow&amp;&amp;(i.vars.pause=
OnHover&amp;&amp;i.hover(function(){i.manualPlay||i.manualPause||i.pause()}=
,function(){i.manualPause||i.manualPlay||i.stopped||i.play()}),i.vars.pause=
Invisible&amp;&amp;m.pauseInvisible.isHidden()||(i.vars.initDelay&gt;0?i.st=
artTimeout=3DsetTimeout(i.play,i.vars.initDelay):i.play())),f&amp;&amp;m.as=
Nav.setup(),r&amp;&amp;i.vars.touch&amp;&amp;m.touch(),(!p||p&amp;&amp;i.va=
rs.smoothHeight)&amp;&amp;n(window).bind("resize orientationchange focus",m=
.resize),i.find("img").attr("draggable","false"),setTimeout(function(){i.va=
rs.start(i)},200)},asNav:{setup:function(){i.asNav=3D!0,i.animatingTo=3DMat=
h.floor(i.currentSlide/i.move),i.currentItem=3Di.currentSlide,i.slides.remo=
veClass(s+"active-slide").eq(i.currentItem).addClass(s+"active-slide"),a?(t=
._slider=3Di,i.slides.each(function(){var t=3Dthis;t._gesture=3Dnew MSGestu=
re,t._gesture.target=3Dt,t.addEventListener("MSPointerDown",function(t){t.p=
reventDefault(),t.currentTarget._gesture&amp;&amp;t.currentTarget._gesture.=
addPointer(t.pointerId)},!1),t.addEventListener("MSGestureTap",function(t){=
t.preventDefault();var e=3Dn(this),o=3De.index();n(i.vars.asNavFor).data("f=
lexslider").animating||e.hasClass("active")||(i.direction=3Di.currentItem&l=
t;o?"next":"prev",i.flexAnimate(o,i.vars.pauseOnAction,!1,!0,!0))})})):i.sl=
ides.on(l,function(t){t.preventDefault();var e=3Dn(this),o=3De.index(),a=3D=
e.offset().left-n(i).scrollLeft();0&gt;=3Da&amp;&amp;e.hasClass(s+"active-s=
lide")?i.flexAnimate(i.getTarget("prev"),!0):n(i.vars.asNavFor).data("flexs=
lider").animating||e.hasClass(s+"active-slide")||(i.direction=3Di.currentIt=
em&lt;o?"next":"prev",i.flexAnimate(o,i.vars.pauseOnAction,!1,!0,!0))})}},c=
ontrolNav:{setup:function(){i.manualControls?m.controlNav.setupManual():m.c=
ontrolNav.setupPaging()
},setupPaging:function(){var t,e,o=3D"thumbnails"=3D=3D=3Di.vars.controlNav=
?"control-thumbs":"control-paging",a=3D1;if(i.controlNavScaffold=3Dn('&lt;o=
l class=3D"'+s+"control-nav "+s+o+'"&gt;&lt;/ol&gt;'),i.pagingCount&gt;1)fo=
r(var r=3D0;r&lt;i.pagingCount;r++){if(e=3Di.slides.eq(r),t=3D"thumbnails"=
=3D=3D=3Di.vars.controlNav?'&lt;img src=3D"'+e.attr("data-thumb")+'"/&gt;':=
"&lt;a&gt;"+a+"&lt;/a&gt;","thumbnails"=3D=3D=3Di.vars.controlNav&amp;&amp;=
!0=3D=3D=3Di.vars.thumbCaptions){var u=3De.attr("data-thumbcaption");""!=3D=
u&amp;&amp;void 0!=3Du&amp;&amp;(t+=3D'&lt;span class=3D"'+s+'caption"&gt;'=
+u+"&lt;/span&gt;")}i.controlNavScaffold.append("&lt;li&gt;"+t+"&lt;i&gt;&l=
t;/i&gt;&lt;/li&gt;"),a++}i.controlsContainer?n(i.controlsContainer).append=
(i.controlNavScaffold):i.append(i.controlNavScaffold),m.controlNav.set(),m.=
controlNav.active(),i.controlNavScaffold.delegate("a, img",l,function(t){if=
(t.preventDefault(),""=3D=3D=3Dc||c=3D=3D=3Dt.type){var e=3Dn(this),o=3Di.c=
ontrolNav.index(e);e.hasClass(s+"active")||(i.direction=3Do&gt;i.currentSli=
de?"next":"prev",i.flexAnimate(o,i.vars.pauseOnAction))}""=3D=3D=3Dc&amp;&a=
mp;(c=3Dt.type),m.setToClearWatchedEvent()})},setupManual:function(){i.cont=
rolNav=3Di.manualControls,m.controlNav.active(),i.controlNav.bind(l,functio=
n(t){if(t.preventDefault(),""=3D=3D=3Dc||c=3D=3D=3Dt.type){var e=3Dn(this),=
o=3Di.controlNav.index(e);e.hasClass(s+"active")||(i.direction=3Do&gt;i.cur=
rentSlide?"next":"prev",i.flexAnimate(o,i.vars.pauseOnAction))}""=3D=3D=3Dc=
&amp;&amp;(c=3Dt.type),m.setToClearWatchedEvent()})},set:function(){var t=
=3D"thumbnails"=3D=3D=3Di.vars.controlNav?"img":"a";i.controlNav=3Dn("."+s+=
"control-nav li "+t,i.controlsContainer?i.controlsContainer:i)},active:func=
tion(){i.controlNav.removeClass(s+"active").eq(i.animatingTo).addClass(s+"a=
ctive")},update:function(t,e){i.pagingCount&gt;1&amp;&amp;"add"=3D=3D=3Dt?i=
.controlNavScaffold.append(n("&lt;li&gt;&lt;a&gt;"+i.count+"&lt;/a&gt;&lt;/=
li&gt;")):1=3D=3D=3Di.pagingCount?i.controlNavScaffold.find("li").remove():=
i.controlNav.eq(e).closest("li").remove(),m.controlNav.set(),i.pagingCount&=
gt;1&amp;&amp;i.pagingCount!=3D=3Di.controlNav.length?i.update(e,t):m.contr=
olNav.active()}},directionNav:{setup:function(){var t=3Dn('&lt;ul class=3D"=
'+s+'direction-nav"&gt;&lt;li&gt;&lt;a class=3D"'+s+'prev" href=3D"#"&gt;'+=
i.vars.prevText+'&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a class=3D"'+s+'next" h=
ref=3D"#"&gt;'+i.vars.nextText+"&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;");i.contro=
lsContainer?(n(i.controlsContainer).append(t),i.directionNav=3Dn("."+s+"dir=
ection-nav li a",i.controlsContainer)):(i.append(t),i.directionNav=3Dn("."+=
s+"direction-nav li a",i)),m.directionNav.update(),i.directionNav.bind(l,fu=
nction(t){t.preventDefault();var e;(""=3D=3D=3Dc||c=3D=3D=3Dt.type)&amp;&am=
p;(e=3Di.getTarget(n(this).hasClass(s+"next")?"next":"prev"),i.flexAnimate(=
e,i.vars.pauseOnAction)),""=3D=3D=3Dc&amp;&amp;(c=3Dt.type),m.setToClearWat=
chedEvent()})},update:function(){var t=3Ds+"disabled";1=3D=3D=3Di.pagingCou=
nt?i.directionNav.addClass(t).attr("tabindex","-1"):i.vars.animationLoop?i.=
directionNav.removeClass(t).removeAttr("tabindex"):0=3D=3D=3Di.animatingTo?=
i.directionNav.removeClass(t).filter("."+s+"prev").addClass(t).attr("tabind=
ex","-1"):i.animatingTo=3D=3D=3Di.last?i.directionNav.removeClass(t).filter=
("."+s+"next").addClass(t).attr("tabindex","-1"):i.directionNav.removeClass=
(t).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=3Dn('&lt;div=
 class=3D"'+s+'pauseplay"&gt;&lt;a&gt;&lt;/a&gt;&lt;/div&gt;');i.controlsCo=
ntainer?(i.controlsContainer.append(t),i.pausePlay=3Dn("."+s+"pauseplay a",=
i.controlsContainer)):(i.append(t),i.pausePlay=3Dn("."+s+"pauseplay a",i)),=
m.pausePlay.update(i.vars.slideshow?s+"pause":s+"play"),i.pausePlay.bind(l,=
function(t){t.preventDefault(),(""=3D=3D=3Dc||c=3D=3D=3Dt.type)&amp;&amp;(n=
(this).hasClass(s+"pause")?(i.manualPause=3D!0,i.manualPlay=3D!1,i.pause())=
:(i.manualPause=3D!1,i.manualPlay=3D!0,i.play())),""=3D=3D=3Dc&amp;&amp;(c=
=3Dt.type),m.setToClearWatchedEvent()})},update:function(t){"play"=3D=3D=3D=
t?i.pausePlay.removeClass(s+"pause").addClass(s+"play").html(i.vars.playTex=
t):i.pausePlay.removeClass(s+"play").addClass(s+"pause").html(i.vars.pauseT=
ext)}},touch:function(){function e(e){i.animating?e.preventDefault():(windo=
w.navigator.msPointerEnabled||1=3D=3D=3De.touches.length)&amp;&amp;(i.pause=
(),v=3Du?i.h:i.w,w=3DNumber(new Date),b=3De.touches[0].pageX,T=3De.touches[=
0].pageY,m=3Dh&amp;&amp;d&amp;&amp;i.animatingTo=3D=3D=3Di.last?0:h&amp;&am=
p;d?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:h&amp;&amp;i.c=
urrentSlide=3D=3D=3Di.last?i.limit:h?(i.itemW+i.vars.itemMargin)*i.move*i.c=
urrentSlide:d?(i.last-i.currentSlide+i.cloneOffset)*v:(i.currentSlide+i.clo=
neOffset)*v,c=3Du?T:b,f=3Du?b:T,t.addEventListener("touchmove",n,!1),t.addE=
ventListener("touchend",o,!1))}function n(t){b=3Dt.touches[0].pageX,T=3Dt.t=
ouches[0].pageY,g=3Du?c-T:c-b,y=3Du?Math.abs(g)&lt;Math.abs(b-f):Math.abs(g=
)&lt;Math.abs(T-f);var e=3D500;(!y||Number(new Date)-w&gt;e)&amp;&amp;(t.pr=
eventDefault(),!p&amp;&amp;i.transitions&amp;&amp;(i.vars.animationLoop||(g=
/=3D0=3D=3D=3Di.currentSlide&amp;&amp;0&gt;g||i.currentSlide=3D=3D=3Di.last=
&amp;&amp;g&gt;0?Math.abs(g)/v+2:1),i.setProps(m+g,"setTouch")))}function o=
(){if(t.removeEventListener("touchmove",n,!1),i.animatingTo=3D=3D=3Di.curre=
ntSlide&amp;&amp;!y&amp;&amp;null!=3D=3Dg){var e=3Dd?-g:g,s=3Di.getTarget(e=
&gt;0?"next":"prev");i.canAdvance(s)&amp;&amp;(Number(new Date)-w&lt;550&am=
p;&amp;Math.abs(e)&gt;50||Math.abs(e)&gt;v/2)?i.flexAnimate(s,i.vars.pauseO=
nAction):p||i.flexAnimate(i.currentSlide,i.vars.pauseOnAction,!0)}t.removeE=
ventListener("touchend",o,!1),c=3Dnull,f=3Dnull,g=3Dnull,m=3Dnull}function =
s(e){e.stopPropagation(),i.animating?e.preventDefault():(i.pause(),t._gestu=
re.addPointer(e.pointerId),x=3D0,v=3Du?i.h:i.w,w=3DNumber(new Date),m=3Dh&a=
mp;&amp;d&amp;&amp;i.animatingTo=3D=3D=3Di.last?0:h&amp;&amp;d?i.limit-(i.i=
temW+i.vars.itemMargin)*i.move*i.animatingTo:h&amp;&amp;i.currentSlide=3D=
=3D=3Di.last?i.limit:h?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:d?=
(i.last-i.currentSlide+i.cloneOffset)*v:(i.currentSlide+i.cloneOffset)*v)}f=
unction r(e){e.stopPropagation();var i=3De.target._slider;if(i){var n=3D-e.=
translationX,o=3D-e.translationY;return x+=3Du?o:n,g=3Dx,y=3Du?Math.abs(x)&=
lt;Math.abs(-n):Math.abs(x)&lt;Math.abs(-o),e.detail=3D=3D=3De.MSGESTURE_FL=
AG_INERTIA?void setImmediate(function(){t._gesture.stop()}):void((!y||Numbe=
r(new Date)-w&gt;500)&amp;&amp;(e.preventDefault(),!p&amp;&amp;i.transition=
s&amp;&amp;(i.vars.animationLoop||(g=3Dx/(0=3D=3D=3Di.currentSlide&amp;&amp=
;0&gt;x||i.currentSlide=3D=3D=3Di.last&amp;&amp;x&gt;0?Math.abs(x)/v+2:1)),=
i.setProps(m+g,"setTouch"))))}}function l(t){t.stopPropagation();var e=3Dt.=
target._slider;if(e){if(e.animatingTo=3D=3D=3De.currentSlide&amp;&amp;!y&am=
p;&amp;null!=3D=3Dg){var i=3Dd?-g:g,n=3De.getTarget(i&gt;0?"next":"prev");e=
.canAdvance(n)&amp;&amp;(Number(new Date)-w&lt;550&amp;&amp;Math.abs(i)&gt;=
50||Math.abs(i)&gt;v/2)?e.flexAnimate(n,e.vars.pauseOnAction):p||e.flexAnim=
ate(e.currentSlide,e.vars.pauseOnAction,!0)}c=3Dnull,f=3Dnull,g=3Dnull,m=3D=
null,x=3D0}}var c,f,m,v,g,w,y=3D!1,b=3D0,T=3D0,x=3D0;a?(t.style.msTouchActi=
on=3D"none",t._gesture=3Dnew MSGesture,t._gesture.target=3Dt,t.addEventList=
ener("MSPointerDown",s,!1),t._slider=3Di,t.addEventListener("MSGestureChang=
e",r,!1),t.addEventListener("MSGestureEnd",l,!1)):t.addEventListener("touch=
start",e,!1)},resize:function(){!i.animating&amp;&amp;i.is(":visible")&amp;=
&amp;(h||i.doMath(),p?m.smoothHeight():h?(i.slides.width(i.computedW),i.upd=
ate(i.pagingCount),i.setProps()):u?(i.viewport.height(i.h),i.setProps(i.h,"=
setTotal")):(i.vars.smoothHeight&amp;&amp;m.smoothHeight(),i.newSlides.widt=
h(i.computedW),i.setProps(i.computedW,"setTotal")))},smoothHeight:function(=
t){if(!u||p){var e=3Dp?i:i.viewport;t?e.animate({height:i.slides.eq(i.anima=
tingTo).height()},t):e.height(i.slides.eq(i.animatingTo).height())}},sync:f=
unction(t){var e=3Dn(i.vars.sync).data("flexslider"),o=3Di.animatingTo;swit=
ch(t){case"animate":e.flexAnimate(o,i.vars.pauseOnAction,!1,!0);break;case"=
play":e.playing||e.asNav||e.play();break;case"pause":e.pause()}},uniqueID:f=
unction(t){return t.filter("[id]").add(t.find("[id]")).each(function(){var =
t=3Dn(this);t.attr("id",t.attr("id")+"_clone")}),t},pauseInvisible:{visProp=
:null,init:function(){var t=3D["webkit","moz","ms","o"];if("hidden"in docum=
ent)return"hidden";for(var e=3D0;e&lt;t.length;e++)t[e]+"Hidden"in document=
&amp;&amp;(m.pauseInvisible.visProp=3Dt[e]+"Hidden");if(m.pauseInvisible.vi=
sProp){var n=3Dm.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilit=
ychange";document.addEventListener(n,function(){m.pauseInvisible.isHidden()=
?i.startTimeout?clearTimeout(i.startTimeout):i.pause():i.started?i.play():i=
.vars.initDelay&gt;0?setTimeout(i.play,i.vars.initDelay):i.play()})}},isHid=
den:function(){return document[m.pauseInvisible.visProp]||!1}},setToClearWa=
tchedEvent:function(){clearTimeout(o),o=3DsetTimeout(function(){c=3D""},3e3=
)}},i.flexAnimate=3Dfunction(t,e,o,a,l){if(i.vars.animationLoop||t=3D=3D=3D=
i.currentSlide||(i.direction=3Dt&gt;i.currentSlide?"next":"prev"),f&amp;&am=
p;1=3D=3D=3Di.pagingCount&amp;&amp;(i.direction=3Di.currentItem&lt;t?"next"=
:"prev"),!i.animating&amp;&amp;(i.canAdvance(t,l)||o)&amp;&amp;i.is(":visib=
le")){if(f&amp;&amp;a){var c=3Dn(i.vars.asNavFor).data("flexslider");if(i.a=
tEnd=3D0=3D=3D=3Dt||t=3D=3D=3Di.count-1,c.flexAnimate(t,!0,!1,!0,l),i.direc=
tion=3Di.currentItem&lt;t?"next":"prev",c.direction=3Di.direction,Math.ceil=
((t+1)/i.visible)-1=3D=3D=3Di.currentSlide||0=3D=3D=3Dt)return i.currentIte=
m=3Dt,i.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide=
"),!1;i.currentItem=3Dt,i.slides.removeClass(s+"active-slide").eq(t).addCla=
ss(s+"active-slide"),t=3DMath.floor(t/i.visible)}if(i.animating=3D!0,i.anim=
atingTo=3Dt,e&amp;&amp;i.pause(),i.vars.before(i),i.syncExists&amp;&amp;!l&=
amp;&amp;m.sync("animate"),i.vars.controlNav&amp;&amp;m.controlNav.active()=
,h||i.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide")=
,i.atEnd=3D0=3D=3D=3Dt||t=3D=3D=3Di.last,i.vars.directionNav&amp;&amp;m.dir=
ectionNav.update(),t=3D=3D=3Di.last&amp;&amp;(i.vars.end(i),i.vars.animatio=
nLoop||i.pause()),p)r?(i.slides.eq(i.currentSlide).css({opacity:0,zIndex:1}=
),i.slides.eq(t).css({opacity:1,zIndex:2}),i.wrapup(y)):(i.slides.eq(i.curr=
entSlide).css({zIndex:1}).animate({opacity:0},i.vars.animationSpeed,i.vars.=
easing),i.slides.eq(t).css({zIndex:2}).animate({opacity:1},i.vars.animation=
Speed,i.vars.easing,i.wrapup));else{var v,g,w,y=3Du?i.slides.filter(":first=
").height():i.computedW;h?(v=3Di.vars.itemMargin,w=3D(i.itemW+v)*i.move*i.a=
nimatingTo,g=3Dw&gt;i.limit&amp;&amp;1!=3D=3Di.visible?i.limit:w):g=3D0=3D=
=3D=3Di.currentSlide&amp;&amp;t=3D=3D=3Di.count-1&amp;&amp;i.vars.animation=
Loop&amp;&amp;"next"!=3D=3Di.direction?d?(i.count+i.cloneOffset)*y:0:i.curr=
entSlide=3D=3D=3Di.last&amp;&amp;0=3D=3D=3Dt&amp;&amp;i.vars.animationLoop&=
amp;&amp;"prev"!=3D=3Di.direction?d?0:(i.count+1)*y:d?(i.count-1-t+i.cloneO=
ffset)*y:(t+i.cloneOffset)*y,i.setProps(g,"",i.vars.animationSpeed),i.trans=
itions?(i.vars.animationLoop&amp;&amp;i.atEnd||(i.animating=3D!1,i.currentS=
lide=3Di.animatingTo),i.container.unbind("webkitTransitionEnd transitionend=
"),i.container.bind("webkitTransitionEnd transitionend",function(){clearTim=
eout(i.ensureAnimationEnd),i.wrapup(y)}),clearTimeout(i.ensureAnimationEnd)=
,i.ensureAnimationEnd=3DsetTimeout(function(){i.wrapup(y)},i.vars.animation=
Speed+100)):i.container.animate(i.args,i.vars.animationSpeed,i.vars.easing,=
function(){i.wrapup(y)})}i.vars.smoothHeight&amp;&amp;m.smoothHeight(i.vars=
.animationSpeed)}},i.wrapup=3Dfunction(t){p||h||(0=3D=3D=3Di.currentSlide&a=
mp;&amp;i.animatingTo=3D=3D=3Di.last&amp;&amp;i.vars.animationLoop?i.setPro=
ps(t,"jumpEnd"):i.currentSlide=3D=3D=3Di.last&amp;&amp;0=3D=3D=3Di.animatin=
gTo&amp;&amp;i.vars.animationLoop&amp;&amp;i.setProps(t,"jumpStart")),i.ani=
mating=3D!1,i.currentSlide=3Di.animatingTo,i.vars.after(i)},i.animateSlides=
=3Dfunction(){!i.animating&amp;&amp;v&amp;&amp;i.flexAnimate(i.getTarget("n=
ext"))},i.pause=3Dfunction(){clearInterval(i.animatedSlides),i.animatedSlid=
es=3Dnull,i.playing=3D!1,i.vars.pausePlay&amp;&amp;m.pausePlay.update("play=
"),i.syncExists&amp;&amp;m.sync("pause")},i.play=3Dfunction(){i.playing&amp=
;&amp;clearInterval(i.animatedSlides),i.animatedSlides=3Di.animatedSlides||=
setInterval(i.animateSlides,i.vars.slideshowSpeed),i.started=3Di.playing=3D=
!0,i.vars.pausePlay&amp;&amp;m.pausePlay.update("pause"),i.syncExists&amp;&=
amp;m.sync("play")},i.stop=3Dfunction(){i.pause(),i.stopped=3D!0},i.canAdva=
nce=3Dfunction(t,e){var n=3Df?i.pagingCount-1:i.last;return e?!0:f&amp;&amp=
;i.currentItem=3D=3D=3Di.count-1&amp;&amp;0=3D=3D=3Dt&amp;&amp;"prev"=3D=3D=
=3Di.direction?!0:f&amp;&amp;0=3D=3D=3Di.currentItem&amp;&amp;t=3D=3D=3Di.p=
agingCount-1&amp;&amp;"next"!=3D=3Di.direction?!1:t!=3D=3Di.currentSlide||f=
?i.vars.animationLoop?!0:i.atEnd&amp;&amp;0=3D=3D=3Di.currentSlide&amp;&amp=
;t=3D=3D=3Dn&amp;&amp;"next"!=3D=3Di.direction?!1:i.atEnd&amp;&amp;i.curren=
tSlide=3D=3D=3Dn&amp;&amp;0=3D=3D=3Dt&amp;&amp;"next"=3D=3D=3Di.direction?!=
1:!0:!1},i.getTarget=3Dfunction(t){return i.direction=3Dt,"next"=3D=3D=3Dt?=
i.currentSlide=3D=3D=3Di.last?0:i.currentSlide+1:0=3D=3D=3Di.currentSlide?i=
.last:i.currentSlide-1},i.setProps=3Dfunction(t,e,n){var o=3Dfunction(){var=
 n=3Dt?t:(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo,o=3Dfunction(){if=
(h)return"setTouch"=3D=3D=3De?t:d&amp;&amp;i.animatingTo=3D=3D=3Di.last?0:d=
?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:i.animatingTo=3D=
=3D=3Di.last?i.limit:n;switch(e){case"setTotal":return d?(i.count-1-i.curre=
ntSlide+i.cloneOffset)*t:(i.currentSlide+i.cloneOffset)*t;case"setTouch":re=
turn d?t:t;case"jumpEnd":return d?t:i.count*t;case"jumpStart":return d?i.co=
unt*t:t;default:return t}}();return-1*o+"px"}();i.transitions&amp;&amp;(o=
=3Du?"translate3d(0,"+o+",0)":"translate3d("+o+",0,0)",n=3Dvoid 0!=3D=3Dn?n=
/1e3+"s":"0s",i.container.css("-"+i.pfx+"-transition-duration",n),i.contain=
er.css("transition-duration",n)),i.args[i.prop]=3Do,(i.transitions||void 0=
=3D=3D=3Dn)&amp;&amp;i.container.css(i.args),i.container.css("transform",o)=
},i.setup=3Dfunction(t){if(p)i.slides.css({width:"100%","float":"left",marg=
inRight:"-100%",position:"relative"}),"init"=3D=3D=3Dt&amp;&amp;(r?i.slides=
.css({opacity:0,display:"block",webkitTransition:"opacity "+i.vars.animatio=
nSpeed/1e3+"s ease",zIndex:1}).eq(i.currentSlide).css({opacity:1,zIndex:2})=
:0=3D=3Di.vars.fadeFirstSlide?i.slides.css({opacity:0,display:"block",zInde=
x:1}).eq(i.currentSlide).css({zIndex:2}).css({opacity:1}):i.slides.css({opa=
city:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).animat=
e({opacity:1},i.vars.animationSpeed,i.vars.easing)),i.vars.smoothHeight&amp=
;&amp;m.smoothHeight();else{var e,o;"init"=3D=3D=3Dt&amp;&amp;(i.viewport=
=3Dn('&lt;div class=3D"'+s+'viewport"&gt;&lt;/div&gt;').css({overflow:"hidd=
en",position:"relative"}).appendTo(i).append(i.container),i.cloneCount=3D0,=
i.cloneOffset=3D0,d&amp;&amp;(o=3Dn.makeArray(i.slides).reverse(),i.slides=
=3Dn(o),i.container.empty().append(i.slides))),i.vars.animationLoop&amp;&am=
p;!h&amp;&amp;(i.cloneCount=3D2,i.cloneOffset=3D1,"init"!=3D=3Dt&amp;&amp;i=
.container.find(".clone").remove(),i.container.append(m.uniqueID(i.slides.f=
irst().clone().addClass("clone")).attr("aria-hidden","true")).prepend(m.uni=
queID(i.slides.last().clone().addClass("clone")).attr("aria-hidden","true")=
)),i.newSlides=3Dn(i.vars.selector,i),e=3Dd?i.count-1-i.currentSlide+i.clon=
eOffset:i.currentSlide+i.cloneOffset,u&amp;&amp;!h?(i.container.height(200*=
(i.count+i.cloneCount)+"%").css("position","absolute").width("100%"),setTim=
eout(function(){i.newSlides.css({display:"block"}),i.doMath(),i.viewport.he=
ight(i.h),i.setProps(e*i.h,"init")},"init"=3D=3D=3Dt?100:0)):(i.container.w=
idth(200*(i.count+i.cloneCount)+"%"),i.setProps(e*i.computedW,"init"),setTi=
meout(function(){i.doMath(),i.newSlides.css({width:i.computedW,"float":"lef=
t",display:"block"}),i.vars.smoothHeight&amp;&amp;m.smoothHeight()},"init"=
=3D=3D=3Dt?100:0))}h||i.slides.removeClass(s+"active-slide").eq(i.currentSl=
ide).addClass(s+"active-slide"),i.vars.init(i)},i.doMath=3Dfunction(){var t=
=3Di.slides.first(),e=3Di.vars.itemMargin,n=3Di.vars.minItems,o=3Di.vars.ma=
xItems;i.w=3Dvoid 0=3D=3D=3Di.viewport?i.width():i.viewport.width(),i.h=3Dt=
.height(),i.boxPadding=3Dt.outerWidth()-t.width(),h?(i.itemT=3Di.vars.itemW=
idth+e,i.minW=3Dn?n*i.itemT:i.w,i.maxW=3Do?o*i.itemT-e:i.w,i.itemW=3Di.minW=
&gt;i.w?(i.w-e*(n-1))/n:i.maxW&lt;i.w?(i.w-e*(o-1))/o:i.vars.itemWidth&gt;i=
.w?i.w:i.vars.itemWidth,i.visible=3DMath.floor(i.w/i.itemW),i.move=3Di.vars=
.move&gt;0&amp;&amp;i.vars.move&lt;i.visible?i.vars.move:i.visible,i.paging=
Count=3DMath.ceil((i.count-i.visible)/i.move+1),i.last=3Di.pagingCount-1,i.=
limit=3D1=3D=3D=3Di.pagingCount?0:i.vars.itemWidth&gt;i.w?i.itemW*(i.count-=
1)+e*(i.count-1):(i.itemW+e)*i.count-i.w-e):(i.itemW=3Di.w,i.pagingCount=3D=
i.count,i.last=3Di.count-1),i.computedW=3Di.itemW-i.boxPadding},i.update=3D=
function(t,e){i.doMath(),h||(t&lt;i.currentSlide?i.currentSlide+=3D1:t&lt;=
=3Di.currentSlide&amp;&amp;0!=3D=3Dt&amp;&amp;(i.currentSlide-=3D1),i.anima=
tingTo=3Di.currentSlide),i.vars.controlNav&amp;&amp;!i.manualControls&amp;&=
amp;("add"=3D=3D=3De&amp;&amp;!h||i.pagingCount&gt;i.controlNav.length?m.co=
ntrolNav.update("add"):("remove"=3D=3D=3De&amp;&amp;!h||i.pagingCount&lt;i.=
controlNav.length)&amp;&amp;(h&amp;&amp;i.currentSlide&gt;i.last&amp;&amp;(=
i.currentSlide-=3D1,i.animatingTo-=3D1),m.controlNav.update("remove",i.last=
))),i.vars.directionNav&amp;&amp;m.directionNav.update()},i.addSlide=3Dfunc=
tion(t,e){var o=3Dn(t);i.count+=3D1,i.last=3Di.count-1,u&amp;&amp;d?void 0!=
=3D=3De?i.slides.eq(i.count-e).after(o):i.container.prepend(o):void 0!=3D=
=3De?i.slides.eq(e).before(o):i.container.append(o),i.update(e,"add"),i.sli=
des=3Dn(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.added(i)},i.remo=
veSlide=3Dfunction(t){var e=3DisNaN(t)?i.slides.index(n(t)):t;i.count-=3D1,=
i.last=3Di.count-1,isNaN(t)?n(t,i.slides).remove():u&amp;&amp;d?i.slides.eq=
(i.last).remove():i.slides.eq(t).remove(),i.doMath(),i.update(e,"remove"),i=
.slides=3Dn(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.removed(i)},=
m.init()},n(window).blur(function(){focused=3D!1}).focus(function(){focused=
=3D!0}),n.flexslider.defaults=3D{namespace:"am-",selector:".am-slides &gt; =
li",animation:"slide",easing:"swing",direction:"horizontal",reverse:!1,anim=
ationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:5e3,anim=
ationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,=
pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video=
:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keybo=
ard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",pla=
yText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",ite=
mWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:f=
unction(){},before:function(){},after:function(){},end:function(){},added:f=
unction(){},removed:function(){},init:function(){}},n.fn.flexslider=3Dfunct=
ion(t){if(void 0=3D=3D=3Dt&amp;&amp;(t=3D{}),"object"=3D=3Dtypeof t)return =
this.each(function(){var e=3Dn(this),i=3Dt.selector?t.selector:".am-slides =
&gt; li",o=3De.find(i);1=3D=3D=3Do.length&amp;&amp;t.allowOneSlide=3D=3D=3D=
!0||0=3D=3D=3Do.length?(o.fadeIn(400),t.start&amp;&amp;t.start(e)):void 0=
=3D=3D=3De.data("flexslider")&amp;&amp;new n.flexslider(this,t)});var e=3Dn=
(this).data("flexslider");switch(t){case"play":e.play();break;case"pause":e=
.pause();break;case"stop":e.stop();break;case"next":e.flexAnimate(e.getTarg=
et("next"),!0);break;case"prev":case"previous":e.flexAnimate(e.getTarget("p=
rev"),!0);break;default:"number"=3D=3Dtypeof t&amp;&amp;e.flexAnimate(t,!0)=
}},o.ready(function(t){n("[data-am-flexslider]",t).each(function(t,e){var i=
=3Dn(e),s=3Do.utils.parseOptions(i.data("amFlexslider"));s.before=3Dfunctio=
n(t){t._pausedTimer&amp;&amp;(window.clearTimeout(t._pausedTimer),t._paused=
Timer=3Dnull)},s.after=3Dfunction(t){var e=3Dt.vars.playAfterPaused;!e||isN=
aN(e)||t.playing||t.manualPause||t.manualPlay||t.stopped||(t._pausedTimer=
=3Dwindow.setTimeout(function(){t.play()},e))},i.flexslider(s)})}),e.export=
s=3Dn.flexslider}).call(this,"undefined"!=3Dtypeof global?global:"undefined=
"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:{})},{"./core":4}=
],31:[function(t,e){(function(i){"use strict";function n(t,e){this.wrapper=
=3D"string"=3D=3Dtypeof t?document.querySelector(t):t,this.scroller=3Dthis.=
wrapper.children[0],this.scrollerStyle=3Dthis.scroller.style,this.options=
=3D{startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounc=
e:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultExcepti=
on:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransit=
ion:!0,useTransform:!0};for(var i in e)this.options[i]=3De[i];this.translat=
eZ=3Dthis.options.HWCompositing&amp;&amp;a.hasPerspective?" translateZ(0)":=
"",this.options.useTransition=3Da.hasTransition&amp;&amp;this.options.useTr=
ansition,this.options.useTransform=3Da.hasTransform&amp;&amp;this.options.u=
seTransform,this.options.eventPassthrough=3Dthis.options.eventPassthrough=
=3D=3D=3D!0?"vertical":this.options.eventPassthrough,this.options.preventDe=
fault=3D!this.options.eventPassthrough&amp;&amp;this.options.preventDefault=
,this.options.scrollY=3D"vertical"=3D=3Dthis.options.eventPassthrough?!1:th=
is.options.scrollY,this.options.scrollX=3D"horizontal"=3D=3Dthis.options.ev=
entPassthrough?!1:this.options.scrollX,this.options.freeScroll=3Dthis.optio=
ns.freeScroll&amp;&amp;!this.options.eventPassthrough,this.options.directio=
nLockThreshold=3Dthis.options.eventPassthrough?0:this.options.directionLock=
Threshold,this.options.bounceEasing=3D"string"=3D=3Dtypeof this.options.bou=
nceEasing?a.ease[this.options.bounceEasing]||a.ease.circular:this.options.b=
ounceEasing,this.options.resizePolling=3Dvoid 0=3D=3D=3Dthis.options.resize=
Polling?60:this.options.resizePolling,this.options.tap=3D=3D=3D!0&amp;&amp;=
(this.options.tap=3D"tap"),this.x=3D0,this.y=3D0,this.directionX=3D0,this.d=
irectionY=3D0,this._events=3D{},this._init(),this.refresh(),this.scrollTo(t=
his.options.startX,this.options.startY),this.enable()}var o=3D"undefined"!=
=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:null,s=3D(t=
("./core"),window.requestAnimationFrame||window.webkitRequestAnimationFrame=
||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.ms=
RequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}),a=3Dfuncti=
on(){function t(t){return n=3D=3D=3D!1?!1:""=3D=3D=3Dn?t:n+t.charAt(0).toUp=
perCase()+t.substr(1)}var e=3D{},i=3Ddocument.createElement("div").style,n=
=3Dfunction(){for(var t,e=3D["t","webkitT","MozT","msT","OT"],n=3D0,o=3De.l=
ength;o&gt;n;n++)if(t=3De[n]+"ransform",t in i)return e[n].substr(0,e[n].le=
ngth-1);return!1}();e.getTime=3DDate.now||function(){return(new Date).getTi=
me()},e.extend=3Dfunction(t,e){for(var i in e)t[i]=3De[i]},e.addEvent=3Dfun=
ction(t,e,i,n){t.addEventListener(e,i,!!n)},e.removeEvent=3Dfunction(t,e,i,=
n){t.removeEventListener(e,i,!!n)},e.prefixPointerEvent=3Dfunction(t){retur=
n window.MSPointerEvent?"MSPointer"+t.charAt(9).toUpperCase()+t.substr(10):=
t},e.momentum=3Dfunction(t,e,i,n,o,s){var a,r,l=3Dt-e,c=3DMath.abs(l)/i;ret=
urn s=3Dvoid 0=3D=3D=3Ds?6e-4:s,a=3Dt+c*c/(2*s)*(0&gt;l?-1:1),r=3Dc/s,n&gt;=
a?(a=3Do?n-o/2.5*(c/8):n,l=3DMath.abs(a-t),r=3Dl/c):a&gt;0&amp;&amp;(a=3Do?=
o/2.5*(c/8):0,l=3DMath.abs(t)+a,r=3Dl/c),{destination:Math.round(a),duratio=
n:r}};var o=3Dt("transform");return e.extend(e,{hasTransform:o!=3D=3D!1,has=
Perspective:t("perspective")in i,hasTouch:"ontouchstart"in window,hasPointe=
r:window.PointerEvent||window.MSPointerEvent,hasTransition:t("transition")i=
n i}),e.isBadAndroid=3D/Android /.test(window.navigator.appVersion)&amp;&am=
p;!/Chrome\/\d/.test(window.navigator.appVersion),e.extend(e.style=3D{},{tr=
ansform:o,transitionTimingFunction:t("transitionTimingFunction"),transition=
Duration:t("transitionDuration"),transitionDelay:t("transitionDelay"),trans=
formOrigin:t("transformOrigin")}),e.hasClass=3Dfunction(t,e){var i=3Dnew Re=
gExp("(^|\\s)"+e+"(\\s|$)");return i.test(t.className)},e.addClass=3Dfuncti=
on(t,i){if(!e.hasClass(t,i)){var n=3Dt.className.split(" ");n.push(i),t.cla=
ssName=3Dn.join(" ")}},e.removeClass=3Dfunction(t,i){if(e.hasClass(t,i)){va=
r n=3Dnew RegExp("(^|\\s)"+i+"(\\s|$)","g");t.className=3Dt.className.repla=
ce(n," ")}},e.offset=3Dfunction(t){for(var e=3D-t.offsetLeft,i=3D-t.offsetT=
op;t=3Dt.offsetParent;)e-=3Dt.offsetLeft,i-=3Dt.offsetTop;return{left:e,top=
:i}},e.preventDefaultException=3Dfunction(t,e){for(var i in e)if(e[i].test(=
t[i]))return!0;return!1},e.extend(e.eventType=3D{},{touchstart:1,touchmove:=
1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,=
pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),e.extend(e.ease=
=3D{},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(=
t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:fu=
nction(t){return Math.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.8=
85, 0.32, 1.275)",fn:function(t){var e=3D4;return(t-=3D1)*t*((e+1)*t+e)+1}}=
,bounce:{style:"",fn:function(t){return(t/=3D1)&lt;1/2.75?7.5625*t*t:2/2.75=
&gt;t?7.5625*(t-=3D1.5/2.75)*t+.75:2.5/2.75&gt;t?7.5625*(t-=3D2.25/2.75)*t+=
.9375:7.5625*(t-=3D2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t)=
{var e=3D.22,i=3D.4;return 0=3D=3D=3Dt?0:1=3D=3Dt?1:i*Math.pow(2,-10*t)*Mat=
h.sin(2*(t-e/4)*Math.PI/e)+1}}}),e.tap=3Dfunction(t,e){var i=3Ddocument.cre=
ateEvent("Event");i.initEvent(e,!0,!0),i.pageX=3Dt.pageX,i.pageY=3Dt.pageY,=
t.target.dispatchEvent(i)},e.click=3Dfunction(t){var e,i=3Dt.target;/(SELEC=
T|INPUT|TEXTAREA)/i.test(i.tagName)||(e=3Ddocument.createEvent("MouseEvents=
"),e.initMouseEvent("click",!0,!0,t.view,1,i.screenX,i.screenY,i.clientX,i.=
clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),e._constructed=3D!0=
,i.dispatchEvent(e))},e}();n.prototype=3D{version:"5.1.3",_init:function(){=
this._initEvents()},destroy:function(){this._initEvents(!0),this._execEvent=
("destroy")},_transitionEnd:function(t){t.target=3D=3Dthis.scroller&amp;&am=
p;this.isInTransition&amp;&amp;(this._transitionTime(),this.resetPosition(t=
his.options.bounceTime)||(this.isInTransition=3D!1,this._execEvent("scrollE=
nd")))},_start:function(t){if(!(1!=3Da.eventType[t.type]&amp;&amp;0!=3D=3Dt=
.button||!this.enabled||this.initiated&amp;&amp;a.eventType[t.type]!=3D=3Dt=
his.initiated)){!this.options.preventDefault||a.isBadAndroid||a.preventDefa=
ultException(t.target,this.options.preventDefaultException)||t.preventDefau=
lt();var e,i=3Dt.touches?t.touches[0]:t;this.initiated=3Da.eventType[t.type=
],this.moved=3D!1,this.distX=3D0,this.distY=3D0,this.directionX=3D0,this.di=
rectionY=3D0,this.directionLocked=3D0,this._transitionTime(),this.startTime=
=3Da.getTime(),this.options.useTransition&amp;&amp;this.isInTransition?(thi=
s.isInTransition=3D!1,e=3Dthis.getComputedPosition(),this._translate(Math.r=
ound(e.x),Math.round(e.y)),this._execEvent("scrollEnd")):!this.options.useT=
ransition&amp;&amp;this.isAnimating&amp;&amp;(this.isAnimating=3D!1,this._e=
xecEvent("scrollEnd")),this.startX=3Dthis.x,this.startY=3Dthis.y,this.absSt=
artX=3Dthis.x,this.absStartY=3Dthis.y,this.pointX=3Di.pageX,this.pointY=3Di=
.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.ena=
bled&amp;&amp;a.eventType[t.type]=3D=3D=3Dthis.initiated){this.options.prev=
entDefault&amp;&amp;t.preventDefault();var e,i,n,o,s=3Dt.touches?t.touches[=
0]:t,r=3Ds.pageX-this.pointX,l=3Ds.pageY-this.pointY,c=3Da.getTime();if(thi=
s.pointX=3Ds.pageX,this.pointY=3Ds.pageY,this.distX+=3Dr,this.distY+=3Dl,n=
=3DMath.abs(this.distX),o=3DMath.abs(this.distY),!(c-this.endTime&gt;300&am=
p;&amp;10&gt;n&amp;&amp;10&gt;o)){if(this.directionLocked||this.options.fre=
eScroll||(this.directionLocked=3Dn&gt;o+this.options.directionLockThreshold=
?"h":o&gt;=3Dn+this.options.directionLockThreshold?"v":"n"),"h"=3D=3Dthis.d=
irectionLocked){if("vertical"=3D=3Dthis.options.eventPassthrough)t.preventD=
efault();else if("horizontal"=3D=3Dthis.options.eventPassthrough)return voi=
d(this.initiated=3D!1);l=3D0}else if("v"=3D=3Dthis.directionLocked){if("hor=
izontal"=3D=3Dthis.options.eventPassthrough)t.preventDefault();else if("ver=
tical"=3D=3Dthis.options.eventPassthrough)return void(this.initiated=3D!1);=
r=3D0}r=3Dthis.hasHorizontalScroll?r:0,l=3Dthis.hasVerticalScroll?l:0,e=3Dt=
his.x+r,i=3Dthis.y+l,(e&gt;0||e&lt;this.maxScrollX)&amp;&amp;(e=3Dthis.opti=
ons.bounce?this.x+r/3:e&gt;0?0:this.maxScrollX),(i&gt;0||i&lt;this.maxScrol=
lY)&amp;&amp;(i=3Dthis.options.bounce?this.y+l/3:i&gt;0?0:this.maxScrollY),=
this.directionX=3Dr&gt;0?-1:0&gt;r?1:0,this.directionY=3Dl&gt;0?-1:0&gt;l?1=
:0,this.moved||this._execEvent("scrollStart"),this.moved=3D!0,this._transla=
te(e,i),c-this.startTime&gt;300&amp;&amp;(this.startTime=3Dc,this.startX=3D=
this.x,this.startY=3Dthis.y)}}},_end:function(t){if(this.enabled&amp;&amp;a=
.eventType[t.type]=3D=3D=3Dthis.initiated){this.options.preventDefault&amp;=
&amp;!a.preventDefaultException(t.target,this.options.preventDefaultExcepti=
on)&amp;&amp;t.preventDefault();var e,i,n=3D(t.changedTouches?t.changedTouc=
hes[0]:t,a.getTime()-this.startTime),o=3DMath.round(this.x),s=3DMath.round(=
this.y),r=3DMath.abs(o-this.startX),l=3DMath.abs(s-this.startY),c=3D0,u=3D"=
";if(this.isInTransition=3D0,this.initiated=3D0,this.endTime=3Da.getTime(),=
!this.resetPosition(this.options.bounceTime))return this.scrollTo(o,s),this=
.moved?this._events.flick&amp;&amp;200&gt;n&amp;&amp;100&gt;r&amp;&amp;100&=
gt;l?void this._execEvent("flick"):(this.options.momentum&amp;&amp;300&gt;n=
&amp;&amp;(e=3Dthis.hasHorizontalScroll?a.momentum(this.x,this.startX,n,thi=
s.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.decelerat=
ion):{destination:o,duration:0},i=3Dthis.hasVerticalScroll?a.momentum(this.=
y,this.startY,n,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,th=
is.options.deceleration):{destination:s,duration:0},o=3De.destination,s=3Di=
.destination,c=3DMath.max(e.duration,i.duration),this.isInTransition=3D1),o=
!=3Dthis.x||s!=3Dthis.y?((o&gt;0||o&lt;this.maxScrollX||s&gt;0||s&lt;this.m=
axScrollY)&amp;&amp;(u=3Da.ease.quadratic),void this.scrollTo(o,s,c,u)):voi=
d this._execEvent("scrollEnd")):(this.options.tap&amp;&amp;a.tap(t,this.opt=
ions.tap),this.options.click&amp;&amp;a.click(t),void this._execEvent("scro=
llCancel"))}},_resize:function(){var t=3Dthis;clearTimeout(this.resizeTimeo=
ut),this.resizeTimeout=3DsetTimeout(function(){t.refresh()},this.options.re=
sizePolling)},resetPosition:function(t){var e=3Dthis.x,i=3Dthis.y;return t=
=3Dt||0,!this.hasHorizontalScroll||this.x&gt;0?e=3D0:this.x&lt;this.maxScro=
llX&amp;&amp;(e=3Dthis.maxScrollX),!this.hasVerticalScroll||this.y&gt;0?i=
=3D0:this.y&lt;this.maxScrollY&amp;&amp;(i=3Dthis.maxScrollY),e=3D=3Dthis.x=
&amp;&amp;i=3D=3Dthis.y?!1:(this.scrollTo(e,i,t,this.options.bounceEasing),=
!0)},disable:function(){this.enabled=3D!1},enable:function(){this.enabled=
=3D!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=3Dthi=
s.wrapper.clientWidth,this.wrapperHeight=3Dthis.wrapper.clientHeight,this.s=
crollerWidth=3Dthis.scroller.offsetWidth,this.scrollerHeight=3Dthis.scrolle=
r.offsetHeight,this.maxScrollX=3Dthis.wrapperWidth-this.scrollerWidth,this.=
maxScrollY=3Dthis.wrapperHeight-this.scrollerHeight,this.hasHorizontalScrol=
l=3Dthis.options.scrollX&amp;&amp;this.maxScrollX&lt;0,this.hasVerticalScro=
ll=3Dthis.options.scrollY&amp;&amp;this.maxScrollY&lt;0,this.hasHorizontalS=
croll||(this.maxScrollX=3D0,this.scrollerWidth=3Dthis.wrapperWidth),this.ha=
sVerticalScroll||(this.maxScrollY=3D0,this.scrollerHeight=3Dthis.wrapperHei=
ght),this.endTime=3D0,this.directionX=3D0,this.directionY=3D0,this.wrapperO=
ffset=3Da.offset(this.wrapper),this._execEvent("refresh"),this.resetPositio=
n()},on:function(t,e){this._events[t]||(this._events[t]=3D[]),this._events[=
t].push(e)},off:function(t,e){if(this._events[t]){var i=3Dthis._events[t].i=
ndexOf(e);i&gt;-1&amp;&amp;this._events[t].splice(i,1)}},_execEvent:functio=
n(t){if(this._events[t]){var e=3D0,i=3Dthis._events[t].length;if(i)for(;i&g=
t;e;e++)this._events[t][e].apply(this,[].slice.call(arguments,1))}},scrollB=
y:function(t,e,i,n){t=3Dthis.x+t,e=3Dthis.y+e,i=3Di||0,this.scrollTo(t,e,i,=
n)},scrollTo:function(t,e,i,n){n=3Dn||a.ease.circular,this.isInTransition=
=3Dthis.options.useTransition&amp;&amp;i&gt;0,!i||this.options.useTransitio=
n&amp;&amp;n.style?(this._transitionTimingFunction(n.style),this._transitio=
nTime(i),this._translate(t,e)):this._animate(t,e,i,n.fn)},scrollToElement:f=
unction(t,e,i,n,o){if(t=3Dt.nodeType?t:this.scroller.querySelector(t)){var =
s=3Da.offset(t);s.left-=3Dthis.wrapperOffset.left,s.top-=3Dthis.wrapperOffs=
et.top,i=3D=3D=3D!0&amp;&amp;(i=3DMath.round(t.offsetWidth/2-this.wrapper.o=
ffsetWidth/2)),n=3D=3D=3D!0&amp;&amp;(n=3DMath.round(t.offsetHeight/2-this.=
wrapper.offsetHeight/2)),s.left-=3Di||0,s.top-=3Dn||0,s.left=3Ds.left&gt;0?=
0:s.left&lt;this.maxScrollX?this.maxScrollX:s.left,s.top=3Ds.top&gt;0?0:s.t=
op&lt;this.maxScrollY?this.maxScrollY:s.top,e=3Dvoid 0=3D=3D=3De||null=3D=
=3D=3De||"auto"=3D=3D=3De?Math.max(Math.abs(this.x-s.left),Math.abs(this.y-=
s.top)):e,this.scrollTo(s.left,s.top,e,o)}},_transitionTime:function(t){t=
=3Dt||0,this.scrollerStyle[a.style.transitionDuration]=3Dt+"ms",!t&amp;&amp=
;a.isBadAndroid&amp;&amp;(this.scrollerStyle[a.style.transitionDuration]=3D=
"0.001s")},_transitionTimingFunction:function(t){this.scrollerStyle[a.style=
.transitionTimingFunction]=3Dt},_translate:function(t,e){this.options.useTr=
ansform?this.scrollerStyle[a.style.transform]=3D"translate("+t+"px,"+e+"px)=
"+this.translateZ:(t=3DMath.round(t),e=3DMath.round(e),this.scrollerStyle.l=
eft=3Dt+"px",this.scrollerStyle.top=3De+"px"),this.x=3Dt,this.y=3De},_initE=
vents:function(t){var e=3Dt?a.removeEvent:a.addEvent,i=3Dthis.options.bindT=
oWrapper?this.wrapper:window;e(window,"orientationchange",this),e(window,"r=
esize",this),this.options.click&amp;&amp;e(this.wrapper,"click",this,!0),th=
is.options.disableMouse||(e(this.wrapper,"mousedown",this),e(i,"mousemove",=
this),e(i,"mousecancel",this),e(i,"mouseup",this)),a.hasPointer&amp;&amp;!t=
his.options.disablePointer&amp;&amp;(e(this.wrapper,a.prefixPointerEvent("p=
ointerdown"),this),e(i,a.prefixPointerEvent("pointermove"),this),e(i,a.pref=
ixPointerEvent("pointercancel"),this),e(i,a.prefixPointerEvent("pointerup")=
,this)),a.hasTouch&amp;&amp;!this.options.disableTouch&amp;&amp;(e(this.wra=
pper,"touchstart",this),e(i,"touchmove",this),e(i,"touchcancel",this),e(i,"=
touchend",this)),e(this.scroller,"transitionend",this),e(this.scroller,"web=
kitTransitionEnd",this),e(this.scroller,"oTransitionEnd",this),e(this.scrol=
ler,"MSTransitionEnd",this)},getComputedPosition:function(){var t,e,i=3Dwin=
dow.getComputedStyle(this.scroller,null);return this.options.useTransform?(=
i=3Di[a.style.transform].split(")")[0].split(", "),t=3D+(i[12]||i[4]),e=3D+=
(i[13]||i[5])):(t=3D+i.left.replace(/[^-\d.]/g,""),e=3D+i.top.replace(/[^-\=
d.]/g,"")),{x:t,y:e}},_animate:function(t,e,i,n){function o(){var h,p,f,m=
=3Da.getTime();return m&gt;=3Dd?(r.isAnimating=3D!1,r._translate(t,e),void(=
r.resetPosition(r.options.bounceTime)||r._execEvent("scrollEnd"))):(m=3D(m-=
u)/i,f=3Dn(m),h=3D(t-l)*f+l,p=3D(e-c)*f+c,r._translate(h,p),void(r.isAnimat=
ing&amp;&amp;s(o)))}var r=3Dthis,l=3Dthis.x,c=3Dthis.y,u=3Da.getTime(),d=3D=
u+i;this.isAnimating=3D!0,o()},handleEvent:function(t){switch(t.type){case"=
touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._sta=
rt(t);
break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove"=
:this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"=
mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"m=
ousecancel":this._end(t);break;case"orientationchange":case"resize":this._r=
esize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitio=
nEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"D=
OMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._ke=
y(t);break;case"click":t._constructed||(t.preventDefault(),t.stopPropagatio=
n())}}},n.utils=3Da,o.AMUI.iScroll=3Dn,e.exports=3Dn}).call(this,"undefined=
"!=3Dtypeof global?global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dty=
peof window?window:{})},{"./core":4}],32:[function(t,e){(function(i){"use s=
trict";function n(t,e){return this.each(function(){var i=3Do(this),n=3Di.da=
ta("amui.modal"),s=3Do.extend({},c.DEFAULTS,"object"=3D=3Dtypeof t&amp;&amp=
;t);n||i.data("amui.modal",n=3Dnew c(this,s)),"string"=3D=3Dtypeof t?n[t]&a=
mp;&amp;n[t](e):n.toggle(t&amp;&amp;t.relatedTarget||void 0)})}var o=3D"und=
efined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:nul=
l,s=3Dt("./core"),a=3Dt("./ui.dimmer"),r=3Do(document),l=3Ds.support.transi=
tion,c=3Dfunction(t,e){this.options=3Do.extend({},c.DEFAULTS,e||{}),this.$e=
lement=3Do(t),this.$dialog=3Dthis.$element.find(".am-modal-dialog"),this.$e=
lement.attr("id")||this.$element.attr("id",s.utils.generateGUID("am-modal")=
),this.isPopup=3Dthis.$element.hasClass("am-popup"),this.isActions=3Dthis.$=
element.hasClass("am-modal-actions"),this.isPrompt=3Dthis.$element.hasClass=
("am-modal-prompt"),this.isLoading=3Dthis.$element.hasClass("am-modal-loadi=
ng"),this.active=3Dthis.transitioning=3Dthis.relatedTarget=3Dnull,this.even=
ts()};c.DEFAULTS=3D{className:{active:"am-modal-active",out:"am-modal-out"}=
,selector:{modal:".am-modal",active:".am-modal-active"},closeViaDimmer:!0,c=
ancelable:!0,onConfirm:function(){},onCancel:function(){},height:void 0,wid=
th:void 0,duration:300,transitionEnd:l&amp;&amp;l.end+".modal.amui"},c.prot=
otype.toggle=3Dfunction(t){return this.active?this.close():this.open(t)},c.=
prototype.open=3Dfunction(t){var e=3Dthis.$element,i=3Dthis.options,n=3Dthi=
s.isPopup,s=3Di.width,r=3Di.height,c=3D{};if(!this.active&amp;&amp;this.$el=
ement.length){t&amp;&amp;(this.relatedTarget=3Dt),this.transitioning&amp;&a=
mp;(clearTimeout(e.transitionEndTimmer),e.transitionEndTimmer=3Dnull,e.trig=
ger(i.transitionEnd).off(i.transitionEnd)),n&amp;&amp;this.$element.show(),=
this.active=3D!0,e.trigger(o.Event("open.modal.amui",{relatedTarget:t})),a.=
open(e),e.show().redraw(),n||this.isActions||(s&amp;&amp;(s=3DparseInt(s,10=
),c.width=3Ds+"px",c.marginLeft=3D-parseInt(s/2)+"px"),r?(r=3DparseInt(r,10=
),c.marginTop=3D-parseInt(r/2)+"px",this.$dialog.css({height:r+"px"})):c.ma=
rginTop=3D-parseInt(e.height()/2,10)+"px",e.css(c)),e.removeClass(i.classNa=
me.out).addClass(i.className.active),this.transitioning=3D1;var u=3Dfunctio=
n(){e.trigger(o.Event("opened.modal.amui",{relatedTarget:t})),this.transiti=
oning=3D0,this.isPrompt&amp;&amp;this.$dialog.find("input").eq(0).focus()};=
return l?void e.one(i.transitionEnd,o.proxy(u,this)).emulateTransitionEnd(i=
.duration):u.call(this)}},c.prototype.close=3Dfunction(t){if(this.active){v=
ar e=3Dthis.$element,i=3Dthis.options,n=3Dthis.isPopup;this.transitioning&a=
mp;&amp;(clearTimeout(e.transitionEndTimmer),e.transitionEndTimmer=3Dnull,e=
.trigger(i.transitionEnd).off(i.transitionEnd),a.close(e,!0)),this.$element=
.trigger(o.Event("close.modal.amui",{relatedTarget:t})),this.transitioning=
=3D1;var s=3Dfunction(){e.trigger("closed.modal.amui"),n&amp;&amp;e.removeC=
lass(i.className.out),e.hide(),this.transitioning=3D0,a.close(e,!1),this.ac=
tive=3D!1};return e.removeClass(i.className.active).addClass(i.className.ou=
t),l?void e.one(i.transitionEnd,o.proxy(s,this)).emulateTransitionEnd(i.dur=
ation):s.call(this)}},c.prototype.events=3Dfunction(){var t=3Dthis,e=3Dthis=
.$element,i=3De.find(".am-modal-prompt-input"),n=3Dfunction(){var t=3D[];re=
turn i.each(function(){t.push(o(this).val())}),0=3D=3D=3Dt.length?void 0:1=
=3D=3D=3Dt.length?t[0]:t};this.options.cancelable&amp;&amp;e.on("keyup.moda=
l.amui",function(i){t.active&amp;&amp;27=3D=3D=3Di.which&amp;&amp;(e.trigge=
r("cancel.modal.amui"),t.close())}),this.options.closeViaDimmer&amp;&amp;!t=
his.isLoading&amp;&amp;a.$element.on("click.dimmer.modal.amui",function(){t=
.close()}),e.find("[data-am-modal-close], .am-modal-btn").on("click.close.m=
odal.amui",function(e){e.preventDefault(),t.close()}),e.find("[data-am-moda=
l-confirm]").on("click.confirm.modal.amui",function(){e.trigger(o.Event("co=
nfirm.modal.amui",{trigger:this}))}),e.find("[data-am-modal-cancel]").on("c=
lick.cancel.modal.amui",function(){e.trigger(o.Event("cancel.modal.amui",{t=
rigger:this}))}),e.on("confirm.modal.amui",function(e){e.data=3Dn(),t.optio=
ns.onConfirm.call(t,e)}).on("cancel.modal.amui",function(e){e.data=3Dn(),t.=
options.onCancel.call(t,e)})},o.fn.modal=3Dn,r.on("click.modal.amui.data-ap=
i","[data-am-modal]",function(){var t=3Do(this),e=3Ds.utils.parseOptions(t.=
attr("data-am-modal")),i=3Do(e.target||this.href&amp;&amp;this.href.replace=
(/.*(?=3D#[^\s]+$)/,"")),a=3Di.data("amui.modal")?"toggle":e;n.call(i,a,thi=
s)}),o.AMUI.modal=3Dc,e.exports=3Dc}).call(this,"undefined"!=3Dtypeof globa=
l?global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?windo=
w:{})},{"./core":4,"./ui.dimmer":28}],33:[function(t,e){(function(i){"use s=
trict";function n(t,e){return this.each(function(){var i=3Ds(this),n=3Di.da=
ta("amui.offcanvas"),o=3Ds.extend({},"object"=3D=3Dtypeof t&amp;&amp;t);n||=
(i.data("amui.offcanvas",n=3Dnew c(this,o)),(!t||"object"=3D=3Dtypeof t)&am=
p;&amp;n.open(e)),"string"=3D=3Dtypeof t&amp;&amp;n[t]&amp;&amp;n[t](e)})}v=
ar o,s=3D"undefined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i=
?i.jQuery:null,a=3Dt("./core"),r=3D(t("./util.hammer"),s(window)),l=3Ds(doc=
ument),c=3Dfunction(t,e){this.$element=3Ds(t),this.options=3Ds.extend({},c.=
DEFAULTS,e),this.active=3Dnull,this.bindEvents()};c.DEFAULTS=3D{duration:30=
0,effect:"overlay"},c.prototype.open=3Dfunction(){var t=3Dthis,e=3Dthis.$el=
ement;if(e.length&amp;&amp;!e.hasClass("am-active")){var i=3Dthis.options.e=
ffect,n=3Ds("html"),a=3Ds("body"),l=3De.find(".am-offcanvas-bar").first(),c=
=3Dl.hasClass("am-offcanvas-bar-flip")?-1:1;l.addClass("am-offcanvas-bar-"+=
i),o=3D{x:window.scrollX,y:window.scrollY},e.addClass("am-active"),a.css({w=
idth:window.innerWidth,height:r.height()}).addClass("am-offcanvas-page"),"o=
verlay"!=3D=3Di&amp;&amp;a.css({"margin-left":l.outerWidth()*c}).width(),n.=
css("margin-top",-1*o.y),setTimeout(function(){l.addClass("am-offcanvas-bar=
-active").width()},0),e.trigger("open.offcanvas.amui"),this.active=3D1,e.on=
("click.offcanvas.amui",function(e){var i=3Ds(e.target);i.hasClass("am-offc=
anvas-bar")||i.parents(".am-offcanvas-bar").first().length||(e.stopImmediat=
ePropagation(),t.close())}),n.on("keydown.offcanvas.amui",function(e){27=3D=
=3D=3De.keyCode&amp;&amp;t.close()})}},c.prototype.close=3Dfunction(){funct=
ion t(){n.removeClass("am-offcanvas-page").css({width:"",height:"","margin-=
left":"","margin-right":""}),r.removeClass("am-active"),l.removeClass("am-o=
ffcanvas-bar-active"),i.css("margin-top",""),window.scrollTo(o.x,o.y),r.tri=
gger("closed.offcanvas.amui"),e.active=3D0}var e=3Dthis,i=3Ds("html"),n=3Ds=
("body"),r=3Dthis.$element,l=3Dr.find(".am-offcanvas-bar").first();r.length=
&amp;&amp;this.active&amp;&amp;r.hasClass("am-active")&amp;&amp;(r.trigger(=
"close.offcanvas.amui"),a.support.transition?(setTimeout(function(){l.remov=
eClass("am-offcanvas-bar-active")},0),n.css("margin-left","").one(a.support=
.transition.end,function(){t()}).emulateTransitionEnd(this.options.duration=
)):t(),r.off("click.offcanvas.amui"),i.off(".offcanvas.amui"))},c.prototype=
.bindEvents=3Dfunction(){var t=3Dthis;return l.on("click.offcanvas.amui",'[=
data-am-dismiss=3D"offcanvas"]',function(e){e.preventDefault(),t.close()}),=
r.on("resize.offcanvas.amui orientationchange.offcanvas.amui",function(){t.=
active&amp;&amp;t.close()}),this.$element.hammer().on("swipeleft swipeleft"=
,function(e){e.preventDefault(),t.close()}),this},s.fn.offCanvas=3Dn,l.on("=
click.offcanvas.amui","[data-am-offcanvas]",function(t){t.preventDefault();=
var e=3Ds(this),i=3Da.utils.parseOptions(e.data("amOffcanvas")),o=3Ds(i.tar=
get||this.href&amp;&amp;this.href.replace(/.*(?=3D#[^\s]+$)/,"")),r=3Do.dat=
a("amui.offcanvas")?"open":i;n.call(o,r,this)}),s.AMUI.offcanvas=3Dc,e.expo=
rts=3Dc}).call(this,"undefined"!=3Dtypeof global?global:"undefined"!=3Dtype=
of self?self:"undefined"!=3Dtypeof window?window:{})},{"./core":4,"./util.h=
ammer":51}],34:[function(t,e){(function(i){"use strict";var n=3D"undefined"=
!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:null,o=3D(=
t("./core"),function(t){var e=3Dfunction(e,i){this.el=3Dt(e),this.zoomFacto=
r=3D1,this.lastScale=3D1,this.offset=3D{x:0,y:0},this.options=3Dt.extend({}=
,this.defaults,i),this.setupMarkup(),this.bindEvents(),this.update(),this.e=
nable()},i=3Dfunction(t,e){return t+e},n=3Dfunction(t,e){return t&gt;e-.01&=
amp;&amp;e+.01&gt;t};e.prototype=3D{defaults:{tapZoomFactor:2,zoomOutFactor=
:1.3,animationDuration:300,animationInterval:5,maxZoom:5,minZoom:.5,lockDra=
gAxis:!1,use2d:!1,zoomStartEventName:"pz_zoomstart",zoomEndEventName:"pz_zo=
omend",dragStartEventName:"pz_dragstart",dragEndEventName:"pz_dragend",doub=
leTapEventName:"pz_doubletap"},handleDragStart:function(t){this.el.trigger(=
this.options.dragStartEventName),this.stopAnimation(),this.lastDragPosition=
=3D!1,this.hasInteraction=3D!0,this.handleDrag(t)},handleDrag:function(t){i=
f(this.zoomFactor&gt;1){var e=3Dthis.getTouches(t)[0];this.drag(e,this.last=
DragPosition),this.offset=3Dthis.sanitizeOffset(this.offset),this.lastDragP=
osition=3De}},handleDragEnd:function(){this.el.trigger(this.options.dragEnd=
EventName),this.end()},handleZoomStart:function(){this.el.trigger(this.opti=
ons.zoomStartEventName),this.stopAnimation(),this.lastScale=3D1,this.nthZoo=
m=3D0,this.lastZoomCenter=3D!1,this.hasInteraction=3D!0},handleZoom:functio=
n(t,e){var i=3Dthis.getTouchCenter(this.getTouches(t)),n=3De/this.lastScale=
;this.lastScale=3De,this.nthZoom+=3D1,this.nthZoom&gt;3&amp;&amp;(this.scal=
e(n,i),this.drag(i,this.lastZoomCenter)),this.lastZoomCenter=3Di},handleZoo=
mEnd:function(){this.el.trigger(this.options.zoomEndEventName),this.end()},=
handleDoubleTap:function(t){var e=3Dthis.getTouches(t)[0],i=3Dthis.zoomFact=
or&gt;1?1:this.options.tapZoomFactor,n=3Dthis.zoomFactor,o=3Dfunction(t){th=
is.scaleTo(n+t*(i-n),e)}.bind(this);this.hasInteraction||(n&gt;i&amp;&amp;(=
e=3Dthis.getCurrentZoomCenter()),this.animate(this.options.animationDuratio=
n,this.options.animationInterval,o,this.swing),this.el.trigger(this.options=
.doubleTapEventName))},sanitizeOffset:function(t){var e=3D(this.zoomFactor-=
1)*this.getContainerX(),i=3D(this.zoomFactor-1)*this.getContainerY(),n=3DMa=
th.max(e,0),o=3DMath.max(i,0),s=3DMath.min(e,0),a=3DMath.min(i,0);return{x:=
Math.min(Math.max(t.x,s),n),y:Math.min(Math.max(t.y,a),o)}},scaleTo:functio=
n(t,e){this.scale(t/this.zoomFactor,e)},scale:function(t,e){t=3Dthis.scaleZ=
oomFactor(t),this.addOffset({x:(t-1)*(e.x+this.offset.x),y:(t-1)*(e.y+this.=
offset.y)})},scaleZoomFactor:function(t){var e=3Dthis.zoomFactor;return thi=
s.zoomFactor*=3Dt,this.zoomFactor=3DMath.min(this.options.maxZoom,Math.max(=
this.zoomFactor,this.options.minZoom)),this.zoomFactor/e},drag:function(t,e=
){e&amp;&amp;this.addOffset(this.options.lockDragAxis?Math.abs(t.x-e.x)&gt;=
Math.abs(t.y-e.y)?{x:-(t.x-e.x),y:0}:{y:-(t.y-e.y),x:0}:{y:-(t.y-e.y),x:-(t=
.x-e.x)})},getTouchCenter:function(t){return this.getVectorAvg(t)},getVecto=
rAvg:function(t){return{x:t.map(function(t){return t.x}).reduce(i)/t.length=
,y:t.map(function(t){return t.y}).reduce(i)/t.length}},addOffset:function(t=
){this.offset=3D{x:this.offset.x+t.x,y:this.offset.y+t.y}},sanitize:functio=
n(){this.zoomFactor&lt;this.options.zoomOutFactor?this.zoomOutAnimation():t=
his.isInsaneOffset(this.offset)&amp;&amp;this.sanitizeOffsetAnimation()},is=
InsaneOffset:function(t){var e=3Dthis.sanitizeOffset(t);return e.x!=3D=3Dt.=
x||e.y!=3D=3Dt.y},sanitizeOffsetAnimation:function(){var t=3Dthis.sanitizeO=
ffset(this.offset),e=3D{x:this.offset.x,y:this.offset.y},i=3Dfunction(i){th=
is.offset.x=3De.x+i*(t.x-e.x),this.offset.y=3De.y+i*(t.y-e.y),this.update()=
}.bind(this);this.animate(this.options.animationDuration,this.options.anima=
tionInterval,i,this.swing)},zoomOutAnimation:function(){var t=3Dthis.zoomFa=
ctor,e=3D1,i=3Dthis.getCurrentZoomCenter(),n=3Dfunction(n){this.scaleTo(t+n=
*(e-t),i)}.bind(this);this.animate(this.options.animationDuration,this.opti=
ons.animationInterval,n,this.swing)},updateAspectRatio:function(){this.setC=
ontainerY()},getInitialZoomFactor:function(){return this.container[0].offse=
tWidth/this.el[0].offsetWidth},getAspectRatio:function(){return this.el[0].=
offsetWidth/this.el[0].offsetHeight},getCurrentZoomCenter:function(){var t=
=3Dthis.container[0].offsetWidth*this.zoomFactor,e=3Dthis.offset.x,i=3Dt-e-=
this.container[0].offsetWidth,n=3De/i,o=3Dn*this.container[0].offsetWidth/(=
n+1),s=3Dthis.container[0].offsetHeight*this.zoomFactor,a=3Dthis.offset.y,r=
=3Ds-a-this.container[0].offsetHeight,l=3Da/r,c=3Dl*this.container[0].offse=
tHeight/(l+1);return 0=3D=3D=3Di&amp;&amp;(o=3Dthis.container[0].offsetWidt=
h),0=3D=3D=3Dr&amp;&amp;(c=3Dthis.container[0].offsetHeight),{x:o,y:c}},can=
Drag:function(){return!n(this.zoomFactor,1)},getTouches:function(t){var e=
=3Dthis.container.offset();return Array.prototype.slice.call(t.touches).map=
(function(t){return{x:t.pageX-e.left,y:t.pageY-e.top}})},animate:function(t=
,e,i,n,o){var s=3D(new Date).getTime(),a=3Dfunction(){if(this.inAnimation){=
var r=3D(new Date).getTime()-s,l=3Dr/t;r&gt;=3Dt?(i(1),o&amp;&amp;o(),this.=
update(),this.stopAnimation(),this.update()):(n&amp;&amp;(l=3Dn(l)),i(l),th=
is.update(),setTimeout(a,e))}}.bind(this);this.inAnimation=3D!0,a()},stopAn=
imation:function(){this.inAnimation=3D!1},swing:function(t){return-Math.cos=
(t*Math.PI)/2+.5},getContainerX:function(){return window.innerWidth},getCon=
tainerY:function(){return window.innerHeight},setContainerY:function(){var =
t=3Dwindow.innerHeight;return this.el.css({height:t}),this.container.height=
(t)},setupMarkup:function(){this.container=3Dt('&lt;div class=3D"pinch-zoom=
-container"&gt;&lt;/div&gt;'),this.el.before(this.container),this.container=
.append(this.el),this.container.css({overflow:"hidden",position:"relative"}=
),this.el.css({"-webkit-transform-origin":"0% 0%","-moz-transform-origin":"=
0% 0%","-ms-transform-origin":"0% 0%","-o-transform-origin":"0% 0%","transf=
orm-origin":"0% 0%",position:"absolute"})},end:function(){this.hasInteracti=
on=3D!1,this.sanitize(),this.update()},bindEvents:function(){o(this.contain=
er.get(0),this),t(window).on("resize",this.update.bind(this)),t(this.el).fi=
nd("img").on("load",this.update.bind(this))},update:function(){this.updateP=
laned||(this.updatePlaned=3D!0,setTimeout(function(){this.updatePlaned=3D!1=
,this.updateAspectRatio();var t=3Dthis.getInitialZoomFactor()*this.zoomFact=
or,e=3D-this.offset.x/t,i=3D-this.offset.y/t,n=3D"scale3d("+t+", "+t+",1) t=
ranslate3d("+e+"px,"+i+"px,0px)",o=3D"scale("+t+", "+t+") translate("+e+"px=
,"+i+"px)",s=3Dfunction(){this.clone&amp;&amp;(this.clone.remove(),delete t=
his.clone)}.bind(this);!this.options.use2d||this.hasInteraction||this.inAni=
mation?(this.is3d=3D!0,s(),this.el.css({"-webkit-transform":n,"-o-transform=
":o,"-ms-transform":o,"-moz-transform":o,transform:n})):(this.is3d&amp;&amp=
;(this.clone=3Dthis.el.clone(),this.clone.css("pointer-events","none"),this=
.clone.appendTo(this.container),setTimeout(s,200)),this.el.css({"-webkit-tr=
ansform":o,"-o-transform":o,"-ms-transform":o,"-moz-transform":o,transform:=
o}),this.is3d=3D!1)}.bind(this),0))},enable:function(){this.enabled=3D!0},d=
isable:function(){this.enabled=3D!1}};var o=3Dfunction(t,e){var i=3Dnull,n=
=3D0,o=3Dnull,s=3Dnull,a=3Dfunction(t,n){if(i!=3D=3Dt){if(i&amp;&amp;!t)swi=
tch(i){case"zoom":e.handleZoomEnd(n);break;case"drag":e.handleDragEnd(n)}sw=
itch(t){case"zoom":e.handleZoomStart(n);break;case"drag":e.handleDragStart(=
n)}}i=3Dt},r=3Dfunction(t){2=3D=3D=3Dn?a("zoom"):1=3D=3D=3Dn&amp;&amp;e.can=
Drag()?a("drag",t):a(null,t)},l=3Dfunction(t){return Array.prototype.slice.=
call(t).map(function(t){return{x:t.pageX,y:t.pageY}})},c=3Dfunction(t,e){va=
r i,n;return i=3Dt.x-e.x,n=3Dt.y-e.y,Math.sqrt(i*i+n*n)},u=3Dfunction(t,e){=
var i=3Dc(t[0],t[1]),n=3Dc(e[0],e[1]);return n/i},d=3Dfunction(t){t.stopPro=
pagation(),t.preventDefault()},h=3Dfunction(t){var s=3D(new Date).getTime()=
;if(n&gt;1&amp;&amp;(o=3Dnull),300&gt;s-o)switch(d(t),e.handleDoubleTap(t),=
i){case"zoom":e.handleZoomEnd(t);break;case"drag":e.handleDragEnd(t)}1=3D=
=3D=3Dn&amp;&amp;(o=3Ds)},p=3D!0;t.addEventListener("touchstart",function(t=
){e.enabled&amp;&amp;(p=3D!0,n=3Dt.touches.length,h(t))}),t.addEventListene=
r("touchmove",function(t){if(e.enabled){if(p)r(t),i&amp;&amp;d(t),s=3Dl(t.t=
ouches);else{switch(i){case"zoom":e.handleZoom(t,u(s,l(t.touches)));break;c=
ase"drag":e.handleDrag(t)}i&amp;&amp;(d(t),e.update())}p=3D!1}}),t.addEvent=
Listener("touchend",function(t){e.enabled&amp;&amp;(n=3Dt.touches.length,r(=
t))})};return e});n.AMUI.pichzoom=3Do(n),e.exports=3Do(n)}).call(this,"unde=
fined"!=3Dtypeof global?global:"undefined"!=3Dtypeof self?self:"undefined"!=
=3Dtypeof window?window:{})},{"./core":4}],35:[function(t,e){(function(i){"=
use strict";function n(t){return this.each(function(){var e=3Do(this),i=3De=
.data("amui.popover"),n=3Do.extend({},s.utils.parseOptions(e.attr("data-am-=
popover")),"object"=3D=3Dtypeof t&amp;&amp;t);i||e.data("amui.popover",i=3D=
new r(this,n)),"string"=3D=3Dtypeof t&amp;&amp;i[t]&amp;&amp;i[t]()})}var o=
=3D"undefined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQu=
ery:null,s=3Dt("./core"),a=3Do(window),r=3Dfunction(t,e){this.options=3Do.e=
xtend({},r.DEFAULTS,e||{}),this.$element=3Do(t),this.active=3Dnull,this.$po=
pover=3Dthis.options.target&amp;&amp;o(this.options.target)||null,this.init=
(),this.events()};r.DEFAULTS=3D{theme:void 0,trigger:"click",content:"",ope=
n:!1,target:void 0,tpl:'&lt;div class=3D"am-popover"&gt;&lt;div class=3D"am=
-popover-inner"&gt;&lt;/div&gt;&lt;div class=3D"am-popover-caret"&gt;&lt;/d=
iv&gt;&lt;/div&gt;'},r.prototype.init=3Dfunction(){function t(){i.sizePopov=
er()}var e,i=3Dthis,n=3Dthis.$element;this.options.target||(this.$popover=
=3Dthis.getPopover(),this.setContent()),e=3Dthis.$popover,e.appendTo(o("bod=
y")),this.sizePopover(),n.on("open.popover.amui",function(){o(window).on("r=
esize.popover.amui",s.utils.debounce(t,50))}),n.on("close.popover.amui",fun=
ction(){o(window).off("resize.popover.amui",t)}),this.options.open&amp;&amp=
;this.open()},r.prototype.sizePopover=3Dfunction(){var t=3Dthis.$element,e=
=3Dthis.$popover;if(e&amp;&amp;e.length){var i=3De.outerWidth(),n=3De.outer=
Height(),o=3De.find(".am-popover-caret"),s=3Do.outerWidth()/2||8,r=3Dn+8,l=
=3Dt.outerWidth(),c=3Dt.outerHeight(),u=3Dt.offset(),d=3Dt[0].getBoundingCl=
ientRect(),h=3Da.height(),p=3Da.width(),f=3D0,m=3D0,v=3D0,g=3D2,w=3D"top";e=
.css({left:"",top:""}).removeClass("am-popover-left am-popover-right am-pop=
over-top am-popover-bottom"),o.css({left:"",top:""}),r-g&lt;d.top+g?f=3Du.t=
op-r-g:r&lt;h-d.top-d.height?(w=3D"bottom",f=3Du.top+c+s+g):(w=3D"middle",f=
=3Dc/2+u.top-n/2),"top"=3D=3D=3Dw||"bottom"=3D=3D=3Dw?(m=3Dl/2+u.left-i/2,v=
=3Dm,5&gt;m&amp;&amp;(m=3D5),m+i&gt;p&amp;&amp;(m=3Dp-i-20),"top"=3D=3D=3Dw=
&amp;&amp;e.addClass("am-popover-top"),"bottom"=3D=3D=3Dw&amp;&amp;e.addCla=
ss("am-popover-bottom"),v-=3Dm,o.css({left:i/2-s+v+"px"})):"middle"=3D=3D=
=3Dw&amp;&amp;(m=3Du.left-i-s,e.addClass("am-popover-left"),5&gt;m&amp;&amp=
;(m=3Du.left+l+s,e.removeClass("am-popover-left").addClass("am-popover-righ=
t")),m+i&gt;p&amp;&amp;(m=3Dp-i-5,e.removeClass("am-popover-left").addClass=
("am-popover-right")),o.css({top:n/2-s/2+"px"})),e.css({top:f+"px",left:m+"=
px"})}},r.prototype.toggle=3Dfunction(){return this[this.active?"close":"op=
en"]()},r.prototype.open=3Dfunction(){var t=3Dthis.$popover;this.$element.t=
rigger("open.popover.amui"),this.sizePopover(),t.show().addClass("am-active=
"),this.active=3D!0},r.prototype.close=3Dfunction(){var t=3Dthis.$popover;t=
his.$element.trigger("close.popover.amui"),t.removeClass("am-active").trigg=
er("closed.popover.amui").hide(),this.active=3D!1},r.prototype.getPopover=
=3Dfunction(){var t=3Ds.utils.generateGUID("am-popover"),e=3D[];return this=
.options.theme&amp;&amp;o.each(this.options.theme.split(","),function(t,i){=
e.push("am-popover-"+o.trim(i))}),o(this.options.tpl).attr("id",t).addClass=
(e.join(" "))},r.prototype.setContent=3Dfunction(t){t=3Dt||this.options.con=
tent,this.$popover&amp;&amp;this.$popover.find(".am-popover-inner").empty()=
.html(t)},r.prototype.events=3Dfunction(){for(var t=3D"popover.amui",e=3Dth=
is.options.trigger.split(" "),i=3De.length;i--;){var n=3De[i];if("click"=3D=
=3D=3Dn)this.$element.on("click."+t,o.proxy(this.toggle,this));else{var s=
=3D"hover"=3D=3Dn?"mouseenter":"focusin",a=3D"hover"=3D=3Dn?"mouseleave":"f=
ocusout";this.$element.on(s+"."+t,o.proxy(this.open,this)),this.$element.on=
(a+"."+t,o.proxy(this.close,this))}}},o.fn.popover=3Dn,s.ready(function(t){=
o("[data-am-popover]",t).popover()}),o.AMUI.popover=3Dr,e.exports=3Dr}).cal=
l(this,"undefined"!=3Dtypeof global?global:"undefined"!=3Dtypeof self?self:=
"undefined"!=3Dtypeof window?window:{})},{"./core":4}],36:[function(t,e){(f=
unction(i){"use strict";var n=3D"undefined"!=3Dtypeof window?window.jQuery:=
"undefined"!=3Dtypeof i?i.jQuery:null,o=3D(t("./core"),function(){function =
t(t,e,i){return e&gt;t?e:t&gt;i?i:t}function e(t){return 100*(-1+t)}functio=
n i(t,i,n){var o;return o=3D"translate3d"=3D=3D=3Da.positionUsing?{transfor=
m:"translate3d("+e(t)+"%,0,0)"}:"translate"=3D=3D=3Da.positionUsing?{transf=
orm:"translate("+e(t)+"%,0)"}:{"margin-left":e(t)+"%"},o.transition=3D"all =
"+i+"ms "+n,o}var o=3D{},s=3Dn("html");o.version=3D"0.1.6";var a=3Do.settin=
gs=3D{minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trick=
leRate:.02,trickleSpeed:800,showSpinner:!0,parent:"body",barSelector:'[role=
=3D"nprogress-bar"]',spinnerSelector:'[role=3D"nprogress-spinner"]',templat=
e:'&lt;div class=3D"nprogress-bar" role=3D"nprogress-bar"&gt;&lt;div class=
=3D"nprogress-peg"&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=3D"nprogress-sp=
inner" role=3D"nprogress-spinner"&gt;&lt;div class=3D"nprogress-spinner-ico=
n"&gt;&lt;/div&gt;&lt;/div&gt;'};o.configure=3Dfunction(t){var e,i;for(e in=
 t)i=3Dt[e],void 0!=3D=3Di&amp;&amp;t.hasOwnProperty(e)&amp;&amp;(a[e]=3Di)=
;return this},o.status=3Dnull,o.set=3Dfunction(e){var n=3Do.isStarted();e=
=3Dt(e,a.minimum,1),o.status=3D1=3D=3D=3De?null:e;var s=3Do.render(!n),c=3D=
s.querySelector(a.barSelector),u=3Da.speed,d=3Da.easing;return s.offsetWidt=
h,r(function(t){""=3D=3D=3Da.positionUsing&amp;&amp;(a.positionUsing=3Do.ge=
tPositioningCSS()),l(c,i(e,u,d)),1=3D=3D=3De?(l(s,{transition:"none",opacit=
y:1}),s.offsetWidth,setTimeout(function(){l(s,{transition:"all "+u+"ms line=
ar",opacity:0}),setTimeout(function(){o.remove(),t()},u)},u)):setTimeout(t,=
u)}),this},o.isStarted=3Dfunction(){return"number"=3D=3Dtypeof o.status},o.=
start=3Dfunction(){o.status||o.set(0);var t=3Dfunction(){setTimeout(functio=
n(){o.status&amp;&amp;(o.trickle(),t())},a.trickleSpeed)};return a.trickle&=
amp;&amp;t(),this},o.done=3Dfunction(t){return t||o.status?o.inc(.3+.5*Math=
.random()).set(1):this},o.inc=3Dfunction(e){var i=3Do.status;return i?("num=
ber"!=3Dtypeof e&amp;&amp;(e=3D(1-i)*t(Math.random()*i,.1,.95)),i=3Dt(i+e,0=
,.994),o.set(i)):o.start()},o.trickle=3Dfunction(){return o.inc(Math.random=
()*a.trickleRate)},o.render=3Dfunction(t){if(o.isRendered())return document=
.getElementById("nprogress");s.addClass("nprogress-busy");var i=3Ddocument.=
createElement("div");i.id=3D"nprogress",i.innerHTML=3Da.template;var r,c=3D=
i.querySelector(a.barSelector),u=3Dt?"-100":e(o.status||0),d=3Ddocument.que=
rySelector(a.parent);return l(c,{transition:"all 0 linear",transform:"trans=
late3d("+u+"%,0,0)"}),a.showSpinner||(r=3Di.querySelector(a.spinnerSelector=
),r&amp;&amp;n(r).remove()),d!=3Ddocument.body&amp;&amp;n(d).addClass("npro=
gress-custom-parent"),d.appendChild(i),i},o.remove=3Dfunction(){s.removeCla=
ss("nprogress-busy"),n(a.parent).removeClass("nprogress-custom-parent");var=
 t=3Ddocument.getElementById("nprogress");t&amp;&amp;n(t).remove()},o.isRen=
dered=3Dfunction(){return!!document.getElementById("nprogress")},o.getPosit=
ioningCSS=3Dfunction(){var t=3Ddocument.body.style,e=3D"WebkitTransform"in =
t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t=
?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"transla=
te":"margin"};var r=3Dfunction(){function t(){var i=3De.shift();i&amp;&amp;=
i(t)}var e=3D[];return function(i){e.push(i),1=3D=3De.length&amp;&amp;t()}}=
(),l=3Dfunction(){function t(t){return t.replace(/^-ms-/,"ms-").replace(/-(=
[\da-z])/gi,function(t,e){return e.toUpperCase()})}function e(t){var e=3Ddo=
cument.body.style;if(t in e)return t;for(var i,n=3Do.length,s=3Dt.charAt(0)=
.toUpperCase()+t.slice(1);n--;)if(i=3Do[n]+s,i in e)return i;return t}funct=
ion i(i){return i=3Dt(i),s[i]||(s[i]=3De(i))}function n(t,e,n){e=3Di(e),t.s=
tyle[e]=3Dn}var o=3D["Webkit","O","Moz","ms"],s=3D{};return function(t,e){v=
ar i,o,s=3Darguments;if(2=3D=3Ds.length)for(i in e)o=3De[i],void 0!=3D=3Do&=
amp;&amp;e.hasOwnProperty(i)&amp;&amp;n(t,i,o);else n(t,s[1],s[2])}}();retu=
rn o}());n.AMUI.progress=3Do,e.exports=3Do}).call(this,"undefined"!=3Dtypeo=
f global?global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof windo=
w?window:{})},{"./core":4}],37:[function(t,e){(function(i){"use strict";fun=
ction n(t){return this.each(function(){var e=3Do(this),i=3De.data("amui.pur=
eview"),n=3Do.extend({},s.utils.parseOptions(e.data("amPureview")),"object"=
=3D=3Dtypeof t&amp;&amp;t);i||e.data("amui.pureview",i=3Dnew u(this,n)),"st=
ring"=3D=3Dtypeof t&amp;&amp;i[t]()})}var o=3D"undefined"!=3Dtypeof window?=
window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:null,s=3Dt("./core"),a=3Dt("=
./ui.pinchzoom"),r=3Dt("./util.hammer"),l=3Ds.support.animation,c=3Ds.suppo=
rt.transition,u=3Dfunction(t,e){this.$element=3Do(t),this.$body=3Do(documen=
t.body),this.options=3Do.extend({},u.DEFAULTS,e),this.$pureview=3Do(this.op=
tions.tpl).attr("id",s.utils.generateGUID("am-pureview")),this.$slides=3Dnu=
ll,this.transitioning=3Dnull,this.scrollbarWidth=3D0,this.init()};u.DEFAULT=
S=3D{tpl:'&lt;div class=3D"am-pureview am-pureview-bar-active"&gt;&lt;ul cl=
ass=3D"am-pureview-slider"&gt;&lt;/ul&gt;&lt;ul class=3D"am-pureview-direct=
ion"&gt;&lt;li class=3D"am-pureview-prev"&gt;&lt;a href=3D""&gt;&lt;/a&gt;&=
lt;/li&gt;&lt;li class=3D"am-pureview-next"&gt;&lt;a href=3D""&gt;&lt;/a&gt=
;&lt;/li&gt;&lt;/ul&gt;&lt;ol class=3D"am-pureview-nav"&gt;&lt;/ol&gt;&lt;d=
iv class=3D"am-pureview-bar am-active"&gt;&lt;span class=3D"am-pureview-tit=
le"&gt;&lt;/span&gt;&lt;div class=3D"am-pureview-counter"&gt;&lt;span class=
=3D"am-pureview-current"&gt;&lt;/span&gt; / &lt;span class=3D"am-pureview-t=
otal"&gt;&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=3D"am-pureview-=
actions am-active"&gt;&lt;a href=3D"javascript: void(0)" class=3D"am-icon-c=
hevron-left" data-am-close=3D"pureview"&gt;&lt;/a&gt;&lt;/div&gt;&lt;/div&g=
t;',className:{prevSlide:"am-pureview-slide-prev",nextSlide:"am-pureview-sl=
ide-next",onlyOne:"am-pureview-only",active:"am-active",barActive:"am-purev=
iew-bar-active",activeBody:"am-pureview-active"},selector:{slider:".am-pure=
view-slider",close:'[data-am-close=3D"pureview"]',total:".am-pureview-total=
",current:".am-pureview-current",title:".am-pureview-title",actions:".am-pu=
review-actions",bar:".am-pureview-bar",pinchZoom:".am-pinch-zoom",nav:".am-=
pureview-nav"},shareBtn:!1,toggleToolbar:!0,target:"img",weChatImagePreview=
:!0},u.prototype.init=3Dfunction(){var t=3Dthis,e=3Dthis.options,i=3Dthis.$=
element,n=3Dthis.$pureview;this.refreshSlides(),o("body").append(n),this.$t=
itle=3Dn.find(e.selector.title),this.$current=3Dn.find(e.selector.current),=
this.$bar=3Dn.find(e.selector.bar),this.$actions=3Dn.find(e.selector.action=
s),e.shareBtn&amp;&amp;this.$actions.append('&lt;a href=3D"javascript: void=
(0)" class=3D"am-icon-share-square-o" data-am-toggle=3D"share"&gt;&lt;/a&gt=
;'),this.$element.on("click.pureview.amui",e.target,function(i){i.preventDe=
fault();var n=3Dt.$images.index(this);e.weChatImagePreview&amp;&amp;window.=
WeixinJSBridge?window.WeixinJSBridge.invoke("imagePreview",{current:t.imgUr=
ls[n],urls:t.imgUrls}):t.open(n)}),n.find(".am-pureview-direction").on("cli=
ck.direction.pureview.amui","li",function(e){e.preventDefault(),o(this).is(=
".am-pureview-prev")?t.prevSlide():t.nextSlide()}),n.find(e.selector.nav).o=
n("click.nav.pureview.amui","li",function(){var e=3Dt.$navItems.index(o(thi=
s));t.activate(t.$slides.eq(e))}),n.find(e.selector.close).on("click.close.=
pureview.amui",function(e){e.preventDefault(),t.close()}),this.$slider.hamm=
er().on("swipeleft.pureview.amui",function(e){e.preventDefault(),t.nextSlid=
e()}).on("swiperight.pureview.amui",function(e){e.preventDefault(),t.prevSl=
ide()}).on("press.pureview.amui",function(i){i.preventDefault(),e.toggleToo=
lbar&amp;&amp;t.toggleToolBar()}),this.$slider.data("hammer").get("swipe").=
set({direction:r.DIRECTION_HORIZONTAL,velocity:.35}),i.DOMObserve({childLis=
t:!0,subtree:!0},function(){}),i.on("changed.dom.amui",function(e){e.stopPr=
opagation(),t.refreshSlides()}),o(document).on("keydown.pureview.amui",o.pr=
oxy(function(t){var e=3Dt.keyCode;37=3D=3De?this.prevSlide():39=3D=3De?this=
.nextSlide():27=3D=3De&amp;&amp;this.close()},this))},u.prototype.refreshSl=
ides=3Dfunction(){this.$images=3Dthis.$element.find(this.options.target);va=
r t=3Dthis,e=3Dthis.options,i=3Dthis.$pureview,n=3Do([]),s=3Do([]),a=3Dthis=
.$images,r=3Da.length;this.$slider=3Di.find(e.selector.slider),this.$nav=3D=
i.find(e.selector.nav);var l=3D"data-am-pureviewed";this.imgUrls=3Dthis.img=
Urls||[],r&amp;&amp;(1=3D=3D=3Dr&amp;&amp;i.addClass(e.className.onlyOne),a=
.not("["+l+"]").each(function(e,i){var a,r;"A"=3D=3D=3Di.nodeName?(a=3Di.hr=
ef,r=3Di.title||""):(a=3Do(i).data("rel")||i.src,r=3Do(i).attr("alt")||""),=
i.setAttribute(l,"1"),t.imgUrls.push(a),n=3Dn.add(o('&lt;li data-src=3D"'+a=
+'" data-title=3D"'+r+'"&gt;&lt;/li&gt;')),s=3Ds.add(o("&lt;li&gt;"+(e+1)+"=
&lt;/li&gt;"))}),i.find(e.selector.total).text(r),this.$slider.append(n),th=
is.$nav.append(s),this.$navItems=3Dthis.$nav.find("li"),this.$slides=3Dthis=
.$slider.find("li"))},u.prototype.loadImage=3Dfunction(t,e){var i=3D"image-=
appended";if(!t.data(i)){var n=3Do("&lt;img&gt;",{src:t.data("src"),alt:t.d=
ata("title")});t.html(n).wrapInner('&lt;div class=3D"am-pinch-zoom"&gt;&lt;=
/div&gt;').redraw();var s=3Dt.find(this.options.selector.pinchZoom);s.data(=
"amui.pinchzoom",new a(s[0],{})),t.data("image-appended",!0)}e&amp;&amp;e.c=
all(this)},u.prototype.activate=3Dfunction(t){var e=3Dthis.options,i=3Dthis=
.$slides,n=3Di.index(t),a=3Dt.data("title")||"",r=3De.className.active;i.fi=
nd("."+r).is(t)||this.transitioning||(this.loadImage(t,function(){s.utils.i=
mageLoader(t.find("img"),function(t){o(t).addClass("am-img-loaded")})}),thi=
s.transitioning=3D1,this.$title.text(a),this.$current.text(n+1),i.removeCla=
ss(),t.addClass(r),i.eq(n-1).addClass(e.className.prevSlide),i.eq(n+1).addC=
lass(e.className.nextSlide),this.$navItems.removeClass().eq(n).addClass(e.c=
lassName.active),c?t.one(c.end,o.proxy(function(){this.transitioning=3D0},t=
his)).emulateTransitionEnd(300):this.transitioning=3D0)},u.prototype.nextSl=
ide=3Dfunction(){if(1!=3D=3Dthis.$slides.length){var t=3Dthis.$slides,e=3Dt=
.filter(".am-active"),i=3Dt.index(e),n=3D"am-animation-right-spring";i+1&gt=
;=3Dt.length?l&amp;&amp;e.addClass(n).on(l.end,function(){e.removeClass(n)}=
):this.activate(t.eq(i+1))}},u.prototype.prevSlide=3Dfunction(){if(1!=3D=3D=
this.$slides.length){var t=3Dthis.$slides,e=3Dt.filter(".am-active"),i=3Dth=
is.$slides.index(e),n=3D"am-animation-left-spring";0=3D=3D=3Di?l&amp;&amp;e=
.addClass(n).on(l.end,function(){e.removeClass(n)}):this.activate(t.eq(i-1)=
)}},u.prototype.toggleToolBar=3Dfunction(){this.$pureview.toggleClass(this.=
options.className.barActive)},u.prototype.open=3Dfunction(t){var e=3Dt||0;t=
his.checkScrollbar(),this.setScrollbar(),this.activate(this.$slides.eq(e)),=
this.$pureview.show().redraw().addClass(this.options.className.active),this=
.$body.addClass(this.options.className.activeBody)},u.prototype.close=3Dfun=
ction(){function t(){this.$pureview.hide(),this.$body.removeClass(e.classNa=
me.activeBody),this.resetScrollbar()}var e=3Dthis.options;this.$pureview.re=
moveClass(e.className.active),this.$slides.removeClass(),c?this.$pureview.o=
ne(c.end,o.proxy(t,this)).emulateTransitionEnd(300):t.call(this)},u.prototy=
pe.checkScrollbar=3Dfunction(){this.scrollbarWidth=3Ds.utils.measureScrollb=
ar()},u.prototype.setScrollbar=3Dfunction(){var t=3DparseInt(this.$body.css=
("padding-right")||0,10);this.scrollbarWidth&amp;&amp;this.$body.css("paddi=
ng-right",t+this.scrollbarWidth)},u.prototype.resetScrollbar=3Dfunction(){t=
his.$body.css("padding-right","")},o.fn.pureview=3Dn,s.ready(function(t){o(=
"[data-am-pureview]",t).pureview()}),o.AMUI.pureview=3Du,e.exports=3Du}).ca=
ll(this,"undefined"!=3Dtypeof global?global:"undefined"!=3Dtypeof self?self=
:"undefined"!=3Dtypeof window?window:{})},{"./core":4,"./ui.pinchzoom":34,"=
./util.hammer":51}],38:[function(t,e){(function(i){"use strict";function n(=
t){return this.each(function(){var e=3Do(this),i=3De.data("am.scrollspy"),n=
=3D"object"=3D=3Dtypeof t&amp;&amp;t;i||e.data("am.scrollspy",i=3Dnew a(thi=
s,n)),"string"=3D=3Dtypeof t&amp;&amp;i[t]()})}var o=3D"undefined"!=3Dtypeo=
f window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:null,s=3Dt("./core"=
),a=3Dfunction(t,e){if(s.support.animation){this.options=3Do.extend({},a.DE=
FAULTS,e),this.$element=3Do(t);var i=3Dfunction(){s.utils.rAF.call(window,o=
.proxy(this.checkView,this))}.bind(this);this.$window=3Do(window).on("scrol=
l.scrollspy.amui",i).on("resize.scrollspy.amui orientationchange.scrollspy.=
amui",s.utils.debounce(i,50)),this.timer=3Dthis.inViewState=3Dthis.initInVi=
ew=3Dnull,i()}};a.DEFAULTS=3D{animation:"fade",className:{inView:"am-scroll=
spy-inview",init:"am-scrollspy-init"},repeat:!0,delay:0,topOffset:0,leftOff=
set:0},a.prototype.checkView=3Dfunction(){var t=3Dthis.$element,e=3Dthis.op=
tions,i=3Ds.utils.isInView(t,e),n=3De.animation?" am-animation-"+e.animatio=
n:"";i&amp;&amp;!this.inViewState&amp;&amp;(this.timer&amp;&amp;clearTimeou=
t(this.timer),this.initInView||(t.addClass(e.className.init),this.offset=3D=
t.offset(),this.initInView=3D!0,t.trigger("init.scrollspy.amui")),this.time=
r=3DsetTimeout(function(){i&amp;&amp;t.addClass(e.className.inView+n).width=
()},e.delay),this.inViewState=3D!0,t.trigger("inview.scrollspy.amui")),!i&a=
mp;&amp;this.inViewState&amp;&amp;e.repeat&amp;&amp;(t.removeClass(e.classN=
ame.inView+n),this.inViewState=3D!1,t.trigger("outview.scrollspy.amui"))
},a.prototype.check=3Dfunction(){s.utils.rAF.call(window,o.proxy(this.check=
View,this))},o.fn.scrollspy=3Dn,s.ready(function(t){o("[data-am-scrollspy]"=
,t).each(function(){var t=3Do(this),e=3Ds.utils.options(t.data("amScrollspy=
"));t.scrollspy(e)})}),o.AMUI.scrollspy=3Da,e.exports=3Da}).call(this,"unde=
fined"!=3Dtypeof global?global:"undefined"!=3Dtypeof self?self:"undefined"!=
=3Dtypeof window?window:{})},{"./core":4}],39:[function(t,e){(function(i){"=
use strict";function n(t){return this.each(function(){var e=3Do(this),i=3De=
.data("amui.scrollspynav"),n=3D"object"=3D=3Dtypeof t&amp;&amp;t;i||e.data(=
"amui.scrollspynav",i=3Dnew a(this,n)),"string"=3D=3Dtypeof t&amp;&amp;i[t]=
()})}var o=3D"undefined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtype=
of i?i.jQuery:null,s=3Dt("./core");t("./ui.smooth-scroll");var a=3Dfunction=
(t,e){this.options=3Do.extend({},a.DEFAULTS,e),this.$element=3Do(t),this.an=
chors=3D[],this.$links=3Dthis.$element.find('a[href^=3D"#"]').each(function=
(t,e){this.anchors.push(o(e).attr("href"))}.bind(this)),this.$targets=3Do(t=
his.anchors.join(", "));var i=3Dfunction(){s.utils.rAF.call(window,o.proxy(=
this.process,this))}.bind(this);this.$window=3Do(window).on("scroll.scrolls=
pynav.amui",i).on("resize.scrollspynav.amui orientationchange.scrollspynav.=
amui",s.utils.debounce(i,50)),i(),this.scrollProcess()};a.DEFAULTS=3D{class=
Name:{active:"am-active"},closest:!1,smooth:!0,offsetTop:0},a.prototype.pro=
cess=3Dfunction(){var t=3Dthis.$window.scrollTop(),e=3Dthis.options,i=3D[],=
n=3Dthis.$links,a=3Dthis.$targets;if(a.each(function(t,n){s.utils.isInView(=
n,e)&amp;&amp;i.push(n)}),i.length){var r;if(o.each(i,function(e,i){return =
o(i).offset().top&gt;=3Dt?(r=3Do(i),!1):void 0}),!r)return;e.closest?(n.clo=
sest(e.closest).removeClass(e.className.active),n.filter('a[href=3D"#'+r.at=
tr("id")+'"]').closest(e.closest).addClass(e.className.active)):n.removeCla=
ss(e.className.active).filter('a[href=3D"#'+r.attr("id")+'"]').addClass(e.c=
lassName.active)}},a.prototype.scrollProcess=3Dfunction(){var t=3Dthis.$lin=
ks,e=3Dthis.options;e.smooth&amp;&amp;t.on("click",function(t){t.preventDef=
ault();var i=3Do(this),n=3Do(i.attr("href"));if(n){var s=3De.offsetTop&amp;=
&amp;!isNaN(parseInt(e.offsetTop))&amp;&amp;parseInt(e.offsetTop)||0;o(wind=
ow).smoothScroll({position:n.offset().top-s})}})},o.fn.scrollspynav=3Dn,s.r=
eady(function(t){o("[data-am-scrollspy-nav]",t).each(function(){var t=3Do(t=
his),e=3Ds.utils.options(t.data("amScrollspyNav"));n.call(t,e)})}),o.AMUI.s=
crollspynav=3Da,e.exports=3Da}).call(this,"undefined"!=3Dtypeof global?glob=
al:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:{})}=
,{"./core":4,"./ui.smooth-scroll":42}],40:[function(t,e){(function(i){"use =
strict";function n(t){return this.each(function(){var e=3Do(this),i=3De.dat=
a("amui.selected"),n=3Do.extend({},s.utils.parseOptions(e.data("amSelected"=
)),s.utils.parseOptions(e.data("amSelectit")),"object"=3D=3Dtypeof t&amp;&a=
mp;t);(i||"destroy"!=3D=3Dt)&amp;&amp;(i||e.data("amui.selected",i=3Dnew a(=
this,n)),"string"=3D=3Dtypeof t&amp;&amp;i[t]&amp;&amp;i[t]())})}var o=3D"u=
ndefined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:n=
ull,s=3Dt("./core");o.expr[":"].containsNC=3Dfunction(t,e,i){return(t.textC=
ontent||t.innerText||"").toLowerCase().indexOf((i[3]||"").toLowerCase())&gt=
;=3D0};var a=3Dfunction(t,e){this.$element=3Do(t),this.options=3Do.extend({=
},a.DEFAULTS,e),this.$originalOptions=3Dthis.$element.find("option"),this.m=
ultiple=3Dt.multiple,this.$selector=3Dnull,this.init()};a.DEFAULTS=3D{btnWi=
dth:null,btnSize:null,btnStyle:"default",dropUp:0,maxHeight:null,noSelected=
Text:"=E7=82=B9=E5=87=BB=E9=80=89=E6=8B=A9...",selectedClass:"am-checked",d=
isabledClass:"am-disabled",searchBox:!1,tpl:'&lt;div class=3D"am-selected a=
m-dropdown &lt;%=3D dropUp ? \'am-dropdown-up\': \'\' %&gt;" id=3D"&lt;%=3D=
 id %&gt;" data-am-dropdown&gt;  &lt;button type=3D"button" class=3D"am-sel=
ected-btn am-btn am-dropdown-toggle"&gt;    &lt;span class=3D"am-selected-s=
tatus am-fl"&gt;&lt;/span&gt;    &lt;i class=3D"am-selected-icon am-icon-ca=
ret-&lt;%=3D dropUp ? \'up\' : \'down\' %&gt;"&gt;&lt;/i&gt;  &lt;/button&g=
t;  &lt;div class=3D"am-selected-content am-dropdown-content"&gt;    &lt;h2=
 class=3D"am-selected-header"&gt;&lt;span class=3D"am-icon-chevron-left"&gt=
;=E8=BF=94=E5=9B=9E&lt;/span&gt;&lt;/h2&gt;   &lt;% if (searchBox) { %&gt; =
  &lt;div class=3D"am-selected-search"&gt;     &lt;input type=3D"text" auto=
complete=3D"off" class=3D"am-form-field" /&gt;   &lt;/div&gt;   &lt;% } %&g=
t;    &lt;ul class=3D"am-selected-list"&gt;      &lt;% for (var i =3D 0; i =
&lt; options.length; i++) { %&gt;       &lt;% var option =3D options[i] %&g=
t;       &lt;% if (option.header) { %&gt;  &lt;li data-group=3D"&lt;%=3D op=
tion.group %&gt;" class=3D"am-selected-list-header"&gt;       &lt;%=3D opti=
on.text %&gt;&lt;/li&gt;       &lt;% } else { %&gt;       &lt;li class=3D"&=
lt;%=3D option.classNames%&gt;"          data-index=3D"&lt;%=3D option.inde=
x %&gt;"          data-group=3D"&lt;%=3D option.group || 0 %&gt;"          =
data-value=3D"&lt;%=3D option.value %&gt;" &gt;         &lt;span class=3D"a=
m-selected-text"&gt;&lt;%=3D option.text %&gt;&lt;/span&gt;         &lt;i c=
lass=3D"am-icon-check"&gt;&lt;/i&gt;&lt;/li&gt;      &lt;% } %&gt;      &lt=
;% } %&gt;    &lt;/ul&gt;    &lt;div class=3D"am-selected-hint"&gt;&lt;/div=
&gt;  &lt;/div&gt;&lt;/div&gt;',listTpl:'&lt;% for (var i =3D 0; i &lt; opt=
ions.length; i++) { %&gt;       &lt;% var option =3D options[i] %&gt;      =
 &lt;% if (option.header) { %&gt;  &lt;li data-group=3D"&lt;%=3D option.gro=
up %&gt;" class=3D"am-selected-list-header"&gt;       &lt;%=3D option.text =
%&gt;&lt;/li&gt;       &lt;% } else { %&gt;       &lt;li class=3D"&lt;%=3D =
option.classNames %&gt;"          data-index=3D"&lt;%=3D option.index %&gt;=
"          data-group=3D"&lt;%=3D option.group || 0 %&gt;"          data-va=
lue=3D"&lt;%=3D option.value %&gt;" &gt;         &lt;span class=3D"am-selec=
ted-text"&gt;&lt;%=3D option.text %&gt;&lt;/span&gt;         &lt;i class=3D=
"am-icon-check"&gt;&lt;/i&gt;&lt;/li&gt;      &lt;% } %&gt;      &lt;% } %&=
gt;'},a.prototype.init=3Dfunction(){var t=3Dthis,e=3Dthis.$element,i=3Dthis=
.options;e.hide();var n=3D{id:s.utils.generateGUID("am-selected"),multiple:=
this.multiple,options:[],searchBox:i.searchBox,dropUp:i.dropUp};this.$selec=
tor=3Do(s.template(this.options.tpl,n)),this.$list=3Dthis.$selector.find(".=
am-selected-list"),this.$searchField=3Dthis.$selector.find(".am-selected-se=
arch input"),this.$hint=3Dthis.$selector.find(".am-selected-hint");var a=3D=
this.$selector.find(".am-selected-btn").css({width:this.options.btnWidth}),=
r=3D[];i.btnSize&amp;&amp;r.push("am-btn-"+i.btnSize),i.btnStyle&amp;&amp;r=
.push("am-btn-"+i.btnStyle),a.addClass(r.join(" ")),this.$selector.dropdown=
({justify:a}),i.maxHeight&amp;&amp;this.$selector.find(".am-selected-list")=
.css({"max-height":i.maxHeight,"overflow-y":"scroll"});var l=3D[],c=3De.att=
r("minchecked"),u=3De.attr("maxchecked");e[0].required&amp;&amp;l.push("=E5=
=BF=85=E9=80=89"),(c||u)&amp;&amp;(c&amp;&amp;l.push("=E8=87=B3=E5=B0=91=E9=
=80=89=E6=8B=A9 "+c+" =E9=A1=B9"),u&amp;&amp;l.push("=E8=87=B3=E5=A4=9A=E9=
=80=89=E6=8B=A9 "+u+" =E9=A1=B9")),this.$hint.text(l.join("=EF=BC=8C")),thi=
s.renderOptions(),this.$element.after(this.$selector),this.dropdown=3Dthis.=
$selector.data("amui.dropdown"),this.$status=3Dthis.$selector.find(".am-sel=
ected-status"),setTimeout(function(){t.syncData()},0),this.bindEvents()},a.=
prototype.renderOptions=3Dfunction(){function t(t,e,o){var s=3D"";e.disable=
d&amp;&amp;(s+=3Di.disabledClass),!e.disabled&amp;&amp;e.selected&amp;&amp;=
(s+=3Di.selectedClass),n.push({group:o,index:t,classNames:s,text:e.text,val=
ue:e.value})}var e=3Dthis.$element,i=3Dthis.options,n=3D[],o=3De.find("optg=
roup");this.$originalOptions=3Dthis.$element.find("option"),this.multiple||=
null!=3D=3De.val()||(this.$originalOptions.get(0).selected=3D!0),o.length?o=
.each(function(e){n.push({header:!0,group:e+1,text:this.label}),o.eq(e).fin=
d("option").each(function(i,n){t(i,n,e)})}):this.$originalOptions.each(func=
tion(e,i){t(e,i,null)}),this.$list.html(s.template(i.listTpl,{options:n})),=
this.$shadowOptions=3Dthis.$list.find("&gt; li").not(".am-selected-list-hea=
der")},a.prototype.setChecked=3Dfunction(t){var e=3Dthis.options,i=3Do(t),n=
=3Di.hasClass(e.selectedClass);if(!this.multiple){if(n)return;this.dropdown=
.close(),this.$shadowOptions.not(i).removeClass(e.selectedClass)}i.toggleCl=
ass(e.selectedClass),this.syncData(t)},a.prototype.syncData=3Dfunction(t){v=
ar e=3Dthis,i=3Dthis.options,n=3D[],s=3Do([]);if(this.$shadowOptions.filter=
("."+i.selectedClass).each(function(){var i=3Do(this);n.push(i.find(".am-se=
lected-text").text()),t||(s=3Ds.add(e.$originalOptions.filter('[value=3D"'+=
i.data("value")+'"]').prop("selected",!0)))}),t){var a=3Do(t);this.$origina=
lOptions.filter('[value=3D"'+a.data("value")+'"]').prop("selected",a.hasCla=
ss(i.selectedClass))}else this.$originalOptions.not(s).prop("selected",!1);=
this.$element.val()||(n=3D[i.noSelectedText]),this.$status.text(n.join(", "=
)),this.$element.trigger("change")},a.prototype.bindEvents=3Dfunction(){var=
 t=3Dthis,e=3D"am-selected-list-header",i=3Ds.utils.debounce(function(i){t.=
$shadowOptions.not("."+e).hide().filter(':containsNC("'+i.target.value+'")'=
).show()},100);this.$list.on("click","&gt; li",function(){var i=3Do(this);!=
i.hasClass(t.options.disabledClass)&amp;&amp;!i.hasClass(e)&amp;&amp;t.setC=
hecked(this)}),this.$searchField.on("keyup.selected.amui",i),this.$selector=
.on("closed.dropdown.amui",function(){t.$searchField.val(""),t.$shadowOptio=
ns.css({display:""})}),s.support.mutationobserver&amp;&amp;(this.observer=
=3Dnew s.support.mutationobserver(function(){t.$element.trigger("changed.se=
lected.amui")}),this.observer.observe(this.$element[0],{childList:!0,attrib=
utes:!0,subtree:!0,characterData:!0})),this.$element.on("changed.selected.a=
mui",function(){t.renderOptions(),t.syncData()})},a.prototype.destroy=3Dfun=
ction(){this.$element.removeData("amui.selected").show(),this.$selector.rem=
ove()},o.fn.selected=3Do.fn.selectIt=3Dn,s.ready(function(t){o("[data-am-se=
lected]",t).selectIt()}),o.AMUI.selected=3Da,e.exports=3Da}).call(this,"und=
efined"!=3Dtypeof global?global:"undefined"!=3Dtypeof self?self:"undefined"=
!=3Dtypeof window?window:{})},{"./core":4}],41:[function(t,e){(function(i){=
"use strict";t("./ui.modal");var n=3D"undefined"!=3Dtypeof window?window.jQ=
uery:"undefined"!=3Dtypeof i?i.jQuery:null,o=3Dt("./core"),s=3Dt("./util.qr=
code"),a=3Ddocument,r=3Dn(a),l=3Dfunction(t){this.options=3Dn.extend({},l.D=
EFAULTS,t||{}),this.$element=3Dnull,this.$wechatQr=3Dnull,this.pics=3Dnull,=
this.inited=3D!1,this.active=3D!1};l.DEFAULTS=3D{sns:["weibo","qq","qzone",=
"tqq","wechat","renren"],title:"=E5=88=86=E4=BA=AB=E5=88=B0",cancel:"=E5=8F=
=96=E6=B6=88",closeOnShare:!0,id:o.utils.generateGUID("am-share"),desc:"Hi=
=EF=BC=8C=E5=AD=A4=E5=A4=9C=E8=A7=82=E5=A4=A9=E8=B1=A1=EF=BC=8C=E5=8F=91=E7=
=8E=B0=E4=B8=80=E4=B8=AA=E4=B8=8D=E9=94=99=E7=9A=84=E8=A5=BF=E8=A5=BF=EF=BC=
=8C=E5=88=86=E4=BA=AB=E4=B8=80=E4=B8=8B=E4=B8=8B ;-)",via:"Amaze UI",tpl:'&=
lt;div class=3D"am-share am-modal-actions" id=3D"&lt;%=3D id %&gt;"&gt;&lt;=
h3 class=3D"am-share-title"&gt;&lt;%=3D title %&gt;&lt;/h3&gt;&lt;ul class=
=3D"am-share-sns am-avg-sm-3"&gt;&lt;% for(var i =3D 0; i &lt; sns.length; =
i++) {%&gt;&lt;li&gt;&lt;a href=3D"&lt;%=3D sns[i].shareUrl %&gt;" data-am-=
share-to=3D"&lt;%=3D sns[i].id %&gt;" &gt;&lt;i class=3D"am-icon-&lt;%=3D s=
ns[i].icon %&gt;"&gt;&lt;/i&gt;&lt;span&gt;&lt;%=3D sns[i].title %&gt;&lt;/=
span&gt;&lt;/a&gt;&lt;/li&gt;&lt;% } %&gt;&lt;/ul&gt;&lt;div class=3D"am-sh=
are-footer"&gt;&lt;button class=3D"am-btn am-btn-default am-btn-block" data=
-am-share-close&gt;&lt;%=3D cancel %&gt;&lt;/button&gt;&lt;/div&gt;&lt;/div=
&gt;'},l.SNS=3D{weibo:{title:"=E6=96=B0=E6=B5=AA=E5=BE=AE=E5=8D=9A",url:"ht=
tp://service.weibo.com/share/share.php",width:620,height:450,icon:"weibo"},=
qq:{title:"QQ =E5=A5=BD=E5=8F=8B",url:"http://connect.qq.com/widget/shareqq=
/index.html",icon:"qq"},qzone:{title:"QQ =E7=A9=BA=E9=97=B4",url:"http://sn=
s.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",icon:"star"},tqq:{title:=
"=E8=85=BE=E8=AE=AF=E5=BE=AE=E5=8D=9A",url:"http://v.t.qq.com/share/share.p=
hp",icon:"tencent-weibo"},wechat:{title:"=E5=BE=AE=E4=BF=A1",url:"[qrcode]"=
,icon:"wechat"},renren:{title:"=E4=BA=BA=E4=BA=BA=E7=BD=91",url:"http://wid=
get.renren.com/dialog/share",icon:"renren"},douban:{title:"=E8=B1=86=E7=93=
=A3",url:"http://www.douban.com/recommend/",icon:"share-alt"},mail:{title:"=
=E9=82=AE=E4=BB=B6=E5=88=86=E4=BA=AB",url:"mailto:",icon:"envelope-o"},sms:=
{title:"=E7=9F=AD=E4=BF=A1=E5=88=86=E4=BA=AB",url:"sms:",icon:"comment"}},l=
.prototype.render=3Dfunction(){var t=3Dthis.options,e=3D[],i=3DencodeURICom=
ponent(a.title),s=3DencodeURIComponent(a.location),r=3D"?body=3D"+i+s;retur=
n t.sns.forEach(function(n){if(l.SNS[n]){var o,a=3Dl.SNS[n];a.id=3Dn,o=3D"m=
ail"=3D=3D=3Dn?r+"&amp;subject=3D"+t.desc:"sms"=3D=3D=3Dn?r:"?url=3D"+s+"&a=
mp;title=3D"+i,a.shareUrl=3Da.url+o,e.push(a)}}),o.template(t.tpl,n.extend(=
{},t,{sns:e}))},l.prototype.init=3Dfunction(){if(!this.inited){var t=3Dthis=
,e=3D"[data-am-share-to]";r.ready(n.proxy(function(){n("body").append(this.=
render()),this.$element=3Dn("#"+this.options.id),this.$element.find("[data-=
am-share-close]").on("click.share.amui",function(){t.close()})},this)),r.on=
("click.share.amui",e,n.proxy(function(t){var i=3Dn(t.target),o=3Di.is(e)&a=
mp;&amp;i||i.parent(e),s=3Do.attr("data-am-share-to");"mail"!=3D=3Ds&amp;&a=
mp;"sms"!=3D=3Ds&amp;&amp;(t.preventDefault(),this.shareTo(s,this.setData(s=
))),this.close()},this)),this.inited=3D!0}},l.prototype.open=3Dfunction(){!=
this.inited&amp;&amp;this.init(),this.$element&amp;&amp;this.$element.modal=
("open"),this.$element.trigger("open.share.amui"),this.active=3D!0},l.proto=
type.close=3Dfunction(){this.$element&amp;&amp;this.$element.modal("close")=
,this.$element.trigger("close.share.amui"),this.active=3D!1},l.prototype.to=
ggle=3Dfunction(){this.active?this.close():this.open()},l.prototype.setData=
=3Dfunction(t){if(t){var e=3D{url:a.location,title:a.title},i=3Dthis.option=
s.desc,n=3Dthis.pics||[],o=3D/^(qzone|qq|tqq)$/;if(o.test(t)&amp;&amp;!n.le=
ngth){for(var s=3Da.images,r=3D0;r&lt;s.length&amp;&amp;10&gt;r;r++)!!s[r].=
src&amp;&amp;n.push(encodeURIComponent(s[r].src));this.pics=3Dn}switch(t){c=
ase"qzone":e.desc=3Di,e.site=3Dthis.options.via,e.pics=3Dn.join("|");break;=
case"qq":e.desc=3Di,e.site=3Dthis.options.via,e.pics=3Dn[0];break;case"tqq"=
:e.pic=3Dn.join("|")}return e}},l.prototype.shareTo=3Dfunction(t,e){var i=
=3Dl.SNS[t];if(i){if("wechat"=3D=3D=3Dt||"weixin"=3D=3D=3Dt)return this.wec=
hatQr();var n=3D[];for(var o in e)e[o]&amp;&amp;n.push(o.toString()+"=3D"+(=
"pic"=3D=3D=3Do||"pics"=3D=3D=3Do?e[o]:encodeURIComponent(e[o])));window.op=
en(i.url+"?"+n.join("&amp;"))}},l.prototype.wechatQr=3Dfunction(){if(!this.=
$wechatQr){var t=3Do.utils.generateGUID("am-share-wechat"),e=3Dn('&lt;div c=
lass=3D"am-modal am-modal-no-btn am-share-wechat-qr"&gt;&lt;div class=3D"am=
-modal-dialog"&gt;&lt;div class=3D"am-modal-hd"&gt;=E5=88=86=E4=BA=AB=E5=88=
=B0=E5=BE=AE=E4=BF=A1 &lt;a href=3D"" class=3D"am-close am-close-spin" data=
-am-modal-close&gt;&amp;times;&lt;/a&gt; &lt;/div&gt;&lt;div class=3D"am-mo=
dal-bd"&gt;&lt;div class=3D"am-share-wx-qr"&gt;&lt;/div&gt;&lt;div class=3D=
"am-share-wechat-tip"&gt;=E6=89=93=E5=BC=80=E5=BE=AE=E4=BF=A1=EF=BC=8C=E7=
=82=B9=E5=87=BB=E5=BA=95=E9=83=A8=E7=9A=84&lt;em&gt;=E5=8F=91=E7=8E=B0&lt;/=
em&gt;=EF=BC=8C&lt;br/&gt; =E4=BD=BF=E7=94=A8&lt;em&gt;=E6=89=AB=E4=B8=80=
=E6=89=AB&lt;/em&gt;=E5=B0=86=E7=BD=91=E9=A1=B5=E5=88=86=E4=BA=AB=E8=87=B3=
=E6=9C=8B=E5=8F=8B=E5=9C=88&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;=
');e.attr("id",t);var i=3Dnew s({render:"canvas",correctLevel:0,text:a.loca=
tion.href,width:180,height:180,background:"#fff",foreground:"#000"});e.find=
(".am-share-wx-qr").html(i),e.appendTo(n("body")),this.$wechatQr=3Dn("#"+t)=
}this.$wechatQr.modal("open")};var c=3Dnew l;r.on("click.share.amui.data-ap=
i",'[data-am-toggle=3D"share"]',function(t){t.preventDefault(),c.toggle()})=
,n.AMUI.share=3Dc,e.exports=3Dc}).call(this,"undefined"!=3Dtypeof global?gl=
obal:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:{}=
)},{"./core":4,"./ui.modal":32,"./util.qrcode":52}],42:[function(t,e){(func=
tion(i){"use strict";var n=3D"undefined"!=3Dtypeof window?window.jQuery:"un=
defined"!=3Dtypeof i?i.jQuery:null,o=3Dt("./core"),s=3Do.utils.rAF,a=3Do.ut=
ils.cancelAF,r=3D!1,l=3Dfunction(t,e){function i(t){return(t/=3D.5)&lt;1?.5=
*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)}function o(){p.off("touchstart.smooth=
scroll.amui",y),r=3D!1}function c(t){r&amp;&amp;(u||(u=3Dt),d=3DMath.min(1,=
Math.max((t-u)/w,0)),h=3DMath.round(m+g*i(d)),g&gt;0&amp;&amp;h&gt;f&amp;&a=
mp;(h=3Df),0&gt;g&amp;&amp;f&gt;h&amp;&amp;(h=3Df),v!=3Dh&amp;&amp;p.scroll=
Top(h),v=3Dh,h!=3D=3Df?(a(b),b=3Ds(c)):(a(b),o()))}e=3De||{};var u,d,h,p=3D=
n(t),f=3DparseInt(e.position)||l.DEFAULTS.position,m=3Dp.scrollTop(),v=3Dm,=
g=3Df-m,w=3De.speed||Math.min(750,Math.min(1500,Math.abs(m-f))),y=3Dfunctio=
n(){o()};if(!r&amp;&amp;0!=3D=3Dg){p.on("touchstart.smoothscroll.amui",y),r=
=3D!0;var b=3Ds(c)}};l.DEFAULTS=3D{position:0},n.fn.smoothScroll=3Dfunction=
(t){return this.each(function(){new l(this,t)})},n(document).on("click.smoo=
thScroll.amui.data-api","[data-am-smooth-scroll]",function(t){t.preventDefa=
ult();var e=3Do.utils.parseOptions(n(this).data("amSmoothScroll"));n(window=
).smoothScroll(e)}),e.exports=3Dl}).call(this,"undefined"!=3Dtypeof global?=
global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:=
{})},{"./core":4}],43:[function(t,e){(function(i){"use strict";function n(t=
){return this.each(function(){var e=3Do(this),i=3De.data("amui.sticky"),n=
=3D"object"=3D=3Dtypeof t&amp;&amp;t;i||e.data("amui.sticky",i=3Dnew a(this=
,n)),"string"=3D=3Dtypeof t&amp;&amp;i[t]()})}var o=3D"undefined"!=3Dtypeof=
 window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:null,s=3Dt("./core")=
,a=3Dfunction(t,e){var i=3Dthis;this.options=3Do.extend({},a.DEFAULTS,e),th=
is.$element=3Do(t),this.sticked=3Dnull,this.inited=3Dnull,this.$holder=3Dvo=
id 0,this.$window=3Do(window).on("scroll.sticky.amui",s.utils.debounce(o.pr=
oxy(this.checkPosition,this),10)).on("resize.sticky.amui orientationchange.=
sticky.amui",s.utils.debounce(function(){i.reset(!0,function(){i.checkPosit=
ion()})},50)).on("load.sticky.amui",o.proxy(this.checkPosition,this)),this.=
offset=3Dthis.$element.offset(),this.init()};a.DEFAULTS=3D{top:0,bottom:0,a=
nimation:"",className:{sticky:"am-sticky",resetting:"am-sticky-resetting",s=
tickyBtm:"am-sticky-bottom",animationRev:"am-animation-reverse"}},a.prototy=
pe.init=3Dfunction(){var t=3Dthis.check();if(!t)return!1;var e=3Dthis.$elem=
ent,i=3D"";o.each(e.css(["marginTop","marginRight","marginBottom","marginLe=
ft"]),function(t,e){return i+=3D" "+e});var n=3Do('&lt;div class=3D"am-stic=
ky-placeholder"&gt;&lt;/div&gt;').css({height:"absolute"!=3De.css("position=
")?e.outerHeight():"","float":"none"!=3De.css("float")?e.css("float"):"",ma=
rgin:i});return this.$holder=3De.css("margin",0).wrap(n).parent(),this.init=
ed=3D1,!0},a.prototype.reset=3Dfunction(t,e){var i=3Dthis.options,n=3Dthis.=
$element,o=3Di.animation?" am-animation-"+i.animation:"",a=3Dfunction(){n.c=
ss({position:"",top:"",width:"",left:"",margin:0}),n.removeClass([o,i.class=
Name.animationRev,i.className.sticky,i.className.resetting].join(" ")),this=
.animating=3D!1,this.sticked=3D!1,this.offset=3Dn.offset(),e&amp;&amp;e()}.=
bind(this);n.addClass(i.className.resetting),!t&amp;&amp;i.animation&amp;&a=
mp;s.support.animation?(this.animating=3D!0,n.removeClass(o).one(s.support.=
animation.end,function(){a()}).width(),n.addClass(o+" "+i.className.animati=
onRev)):a()},a.prototype.check=3Dfunction(){if(!this.$element.is(":visible"=
))return!1;var t=3Dthis.options.media;if(t)switch(typeof t){case"number":if=
(window.innerWidth&lt;t)return!1;break;case"string":if(window.matchMedia&am=
p;&amp;!window.matchMedia(t).matches)return!1}return!0},a.prototype.checkPo=
sition=3Dfunction(){if(!this.inited){var t=3Dthis.init();if(!t)return}var e=
=3Dthis.options,i=3Dthis.$window.scrollTop(),n=3De.top,o=3De.bottom,s=3Dthi=
s.$element,a=3De.animation?" am-animation-"+e.animation:"",r=3D[e.className=
.sticky,a].join(" ");"function"=3D=3Dtypeof o&amp;&amp;(o=3Do(this.$element=
));var l=3Di&gt;this.$holder.offset().top;!this.sticked&amp;&amp;l?s.addCla=
ss(r):this.sticked&amp;&amp;!l&amp;&amp;this.reset(),this.$holder.height(s.=
is(":visible")?s.height():0),l&amp;&amp;s.css({top:n,left:this.$holder.offs=
et().left,width:this.$holder.width()}),this.sticked=3Dl},o.fn.sticky=3Dn,o(=
window).on("load",function(){o("[data-am-sticky]").each(function(){var t=3D=
o(this),e=3Ds.utils.options(t.attr("data-am-sticky"));n.call(t,e)})}),o.AMU=
I.sticky=3Da,e.exports=3Da}).call(this,"undefined"!=3Dtypeof global?global:=
"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:{})},{"=
./core":4}],44:[function(t,e){(function(i){"use strict";function n(t){retur=
n this.each(function(){var e=3Do(this),i=3De.is(".am-tabs")&amp;&amp;e||e.c=
losest(".am-tabs"),n=3Di.data("amui.tabs"),a=3Do.extend({},o.isPlainObject(=
t)?t:{},s.utils.parseOptions(e.data("amTabs")));n||i.data("amui.tabs",n=3Dn=
ew c(i[0],a)),"string"=3D=3Dtypeof t&amp;&amp;e.is(".am-tabs-nav a")&amp;&a=
mp;n[t](e)})}var o=3D"undefined"!=3Dtypeof window?window.jQuery:"undefined"=
!=3Dtypeof i?i.jQuery:null,s=3Dt("./core"),a=3Dt("./util.hammer"),r=3Ds.sup=
port.transition,l=3Ds.support.animation,c=3Dfunction(t,e){this.$element=3Do=
(t),this.options=3Do.extend({},c.DEFAULTS,e||{}),this.$tabNav=3Dthis.$eleme=
nt.find(this.options.selector.nav),this.$navs=3Dthis.$tabNav.find("a"),this=
.$content=3Dthis.$element.find(this.options.selector.content),this.$tabPane=
ls=3Dthis.$content.find(this.options.selector.panel),this.transitioning=3Dn=
ull,this.init()};c.DEFAULTS=3D{selector:{nav:"&gt; .am-tabs-nav",content:"&=
gt; .am-tabs-bd",panel:"&gt; .am-tab-panel"},className:{active:"am-active"}=
},c.prototype.init=3Dfunction(){var t=3Dthis,e=3Dthis.options;if(1!=3D=3Dth=
is.$tabNav.find("&gt; .am-active").length){var i=3Dthis.$tabNav;this.activa=
te(i.children("li").first(),i),this.activate(this.$tabPanels.first(),this.$=
content)}if(this.$navs.on("click.tabs.amui",function(e){e.preventDefault(),=
t.open(o(this))}),!e.noSwipe){var n=3Dnew a(this.$content[0]);n.get("pan").=
set({direction:a.DIRECTION_HORIZONTAL,threshold:120}),n.on("panleft",s.util=
s.debounce(function(i){i.preventDefault();var n=3Do(i.target);n.is(e.select=
or.panel)||(n=3Dn.closest(e.selector.panel)),n.focus();var s=3Dt.getNextNav=
(n);s&amp;&amp;t.open(s)},100)),n.on("panright",s.utils.debounce(function(i=
){i.preventDefault();var n=3Do(i.target);n.is(e.selector.panel)||(n=3Dn.clo=
sest(e.selector.panel));var s=3Dt.getPrevNav(n);s&amp;&amp;t.open(s)},100))=
}},c.prototype.open=3Dfunction(t){if(t&amp;&amp;!this.transitioning&amp;&am=
p;!t.parent("li").hasClass("am-active")){var e=3Dthis.$tabNav,i=3Dthis.$nav=
s,n=3Dthis.$content,s=3Dt.attr("href"),a=3D/^#.+$/,r=3Da.test(s)&amp;&amp;t=
his.$content.find(s)||this.$tabPanels.eq(i.index(t)),l=3De.find(".am-active=
 a")[0],c=3Do.Event("open.tabs.amui",{relatedTarget:l});t.trigger(c),c.isDe=
faultPrevented()||(this.activate(t.closest("li"),e),this.activate(r,n,funct=
ion(){t.trigger({type:"opened.tabs.amui",relatedTarget:l})}))}},c.prototype=
.activate=3Dfunction(t,e,i){function n(){i&amp;&amp;i(),this.transitioning=
=3D!1}this.transitioning=3D!0;var s=3De.find("&gt; .am-active"),a=3Di&amp;&=
amp;r&amp;&amp;!!s.length;s.removeClass("am-active am-in"),t.addClass("am-a=
ctive"),a?(t.redraw(),t.addClass("am-in")):t.removeClass("am-fade"),a?s.one=
(r.end,o.proxy(n,this)):o.proxy(n,this)()},c.prototype.getNextNav=3Dfunctio=
n(t){var e=3Dthis.$tabPanels.index(t),i=3D"am-animation-right-spring";retur=
n e+1&gt;=3Dthis.$navs.length?(l&amp;&amp;t.addClass(i).on(l.end,function()=
{t.removeClass(i)}),null):this.$navs.eq(e+1)},c.prototype.getPrevNav=3Dfunc=
tion(t){var e=3Dthis.$tabPanels.index(t),i=3D"am-animation-left-spring";ret=
urn 0=3D=3D=3De?(l&amp;&amp;t.addClass(i).on(l.end,function(){t.removeClass=
(i)}),null):this.$navs.eq(e-1)},o.fn.tabs=3Dn,s.ready(function(t){o("[data-=
am-tabs]",t).tabs()}),o.AMUI.tabs=3Dc,e.exports=3Dc}).call(this,"undefined"=
!=3Dtypeof global?global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtyp=
eof window?window:{})},{"./core":4,"./util.hammer":51}],45:[function(t,e){(=
function(i){"use strict";function n(t){return this.each(function(){var e=3D=
o(this),i=3De.data("amui.ucheck"),n=3Do.extend({},s.utils.parseOptions(e.da=
ta("amUcheck")),"object"=3D=3Dtypeof t&amp;&amp;t);(i||"destroy"!=3D=3Dt)&a=
mp;&amp;(i||e.data("amui.ucheck",i=3Dnew a(this,n)),"string"=3D=3Dtypeof t&=
amp;&amp;i[t]&amp;&amp;i[t](),s.support.touch&amp;&amp;e.parent().hover(fun=
ction(){e.addClass("am-nohover")},function(){e.removeClass("am-nohover")}))=
})}var o=3D"undefined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof=
 i?i.jQuery:null,s=3Dt("./core"),a=3Dfunction(t,e){this.options=3Do.extend(=
{},a.DEFAULTS,e),this.$element=3Do(t),this.init()};a.DEFAULTS=3D{checkboxCl=
ass:"am-ucheck-checkbox",radioClass:"am-ucheck-radio",checkboxTpl:'&lt;span=
 class=3D"am-ucheck-icons"&gt;&lt;i class=3D"am-icon-unchecked"&gt;&lt;/i&g=
t;&lt;i class=3D"am-icon-checked"&gt;&lt;/i&gt;&lt;/span&gt;',radioTpl:'&lt=
;span class=3D"am-ucheck-icons"&gt;&lt;i class=3D"am-icon-unchecked"&gt;&lt=
;/i&gt;&lt;i class=3D"am-icon-checked"&gt;&lt;/i&gt;&lt;/span&gt;'},a.proto=
type.init=3Dfunction(){var t=3Dthis.$element,e=3Dt[0],i=3Dthis.options;"che=
ckbox"=3D=3D=3De.type?t.addClass(i.checkboxClass).after(i.checkboxTpl):"rad=
io"=3D=3D=3De.type&amp;&amp;t.addClass(i.radioClass).after(i.radioTpl)},a.p=
rototype.check=3Dfunction(){this.$element.prop("checked",!0).trigger("chang=
e.ucheck.amui").trigger("checked.ucheck.amui")},a.prototype.uncheck=3Dfunct=
ion(){this.$element.prop("checked",!1).trigger("change.ucheck.amui").trigge=
r("unchecked.ucheck.amui")},a.prototype.toggle=3Dfunction(){this.$element.p=
rop("checked",function(t,e){return!e}).trigger("change.ucheck.amui").trigge=
r("toggled.ucheck.amui")},a.prototype.disable=3Dfunction(){this.$element.pr=
op("disabled",!0).trigger("change.ucheck.amui").trigger("disabled.ucheck.am=
ui")},a.prototype.enable=3Dfunction(){this.$element.prop("disabled",!1),thi=
s.$element.trigger("change.ucheck.amui").trigger("enabled.ucheck.amui")},a.=
prototype.destroy=3Dfunction(){this.$element.removeData("amui.ucheck").remo=
veClass(this.options.checkboxClass+" "+this.options.radioClass).next(".am-u=
check-icons").remove().end().trigger("destroyed.ucheck.amui")},o.fn.uCheck=
=3Dn,s.ready(function(t){o("[data-am-ucheck]",t).uCheck()}),o.AMUI.uCheck=
=3Da,e.exports=3Da}).call(this,"undefined"!=3Dtypeof global?global:"undefin=
ed"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:{})},{"./core":=
4}],46:[function(t,e){(function(i){"use strict";function n(t){return this.e=
ach(function(){var e=3Do(this),i=3De.data("amui.validator"),n=3Do.extend({}=
,s.utils.parseOptions(e.data("amValidator")),"object"=3D=3Dtypeof t&amp;&am=
p;t);i||e.data("amui.validator",i=3Dnew a(this,n)),"string"=3D=3Dtypeof t&a=
mp;&amp;i[t]&amp;&amp;i[t]()})}var o=3D"undefined"!=3Dtypeof window?window.=
jQuery:"undefined"!=3Dtypeof i?i.jQuery:null,s=3Dt("./core"),a=3Dfunction(t=
,e){this.options=3Do.extend({},a.DEFAULTS,e),this.options.patterns=3Do.exte=
nd({},a.patterns,this.options.patterns);var i=3Dthis.options.locales;!a.val=
idationMessages[i]&amp;&amp;(this.options.locales=3D"zh_CN"),this.$element=
=3Do(t),this.init()};a.DEFAULTS=3D{debug:!1,locales:"zh_CN",H5validation:!1=
,H5inputType:["email","url","number"],patterns:{},patternClassPrefix:"js-pa=
ttern-",activeClass:"am-active",inValidClass:"am-field-error",validClass:"a=
m-field-valid",validateOnSubmit:!0,allFields:":input:visible:not(:submit, :=
button, :disabled, .am-novalidate)",customEvents:"validate",keyboardFields:=
":input:not(:submit, :button, :disabled, .am-novalidate)",keyboardEvents:"f=
ocusout, change",activeKeyup:!0,pointerFields:'input[type=3D"range"]:not(:d=
isabled, .am-novalidate), input[type=3D"radio"]:not(:disabled, .am-novalida=
te), input[type=3D"checkbox"]:not(:disabled, .am-novalidate), select:not(:d=
isabled, .am-novalidate), option:not(:disabled, .am-novalidate)',pointerEve=
nts:"click",onValid:function(){},onInValid:function(){},markValid:function(=
t){var e=3Dthis.options,i=3Do(t.field),n=3Di.closest(".am-form-group");i.ad=
dClass(e.validClass).removeClass(e.inValidClass),n.addClass("am-form-succes=
s").removeClass("am-form-error"),e.onValid.call(this,t)},markInValid:functi=
on(t){var e=3Dthis.options,i=3Do(t.field),n=3Di.closest(".am-form-group");i=
.addClass(e.inValidClass+" "+e.activeClass).removeClass(e.validClass),n.add=
Class("am-form-error").removeClass("am-form-success"),e.onInValid.call(this=
,t)},validate:function(){},submit:null},a.VERSION=3D"2.0.0",a.patterns=3D{e=
mail:/^((([a-zA-Z]|\d|[!#\$%&amp;'\*\+\-\/=3D\?\^_`{\|}~]|[\u00A0-\uD7FF\uF=
900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&amp;'\*\+\-\/=3D\?\^_`{\|}=
~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x=
0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|=
[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x=
0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\=
x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF=
\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a=
-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|=
[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\u=
F900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uF=
FEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z=
A-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/,url:/^(https?|ftp):\=
/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\=
da-f]{2})|[!\$&amp;'\(\)\*\+,;=3D]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-=
5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5=
])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF90=
0-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uF=
FEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z=
A-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-=
\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\u=
FDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF=
])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/(((=
[a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2=
})|[!\$&amp;'\(\)\*\+,;=3D]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\u=
F900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;'\(\)\*\+,;=3D]|:|@)*)*)?=
)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[=
\da-f]{2})|[!\$&amp;'\(\)\*\+,;=3D]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-=
zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|=
[!\$&amp;'\(\)\*\+,;=3D]|:|@)|\/|\?)*)?$/,number:/^-?(?:\d+|\d{1,3}(?:,\d{3=
})+)?(?:\.\d+)?$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,integer:/^-?\=
d+$/},a.validationMessages=3D{zh_CN:{valueMissing:"=E8=AF=B7=E5=A1=AB=E5=86=
=99=EF=BC=88=E9=80=89=E6=8B=A9=EF=BC=89=E6=AD=A4=E5=AD=97=E6=AE=B5",customE=
rror:{tooShort:"=E8=87=B3=E5=B0=91=E5=A1=AB=E5=86=99 %s =E4=B8=AA=E5=AD=97=
=E7=AC=A6",checkedOverflow:"=E8=87=B3=E5=A4=9A=E9=80=89=E6=8B=A9 %s =E9=A1=
=B9",checkedUnderflow:"=E8=87=B3=E5=B0=91=E9=80=89=E6=8B=A9 %s =E9=A1=B9"},=
patternMismatch:"=E8=AF=B7=E6=8C=89=E7=85=A7=E8=A6=81=E6=B1=82=E7=9A=84=E6=
=A0=BC=E5=BC=8F=E5=A1=AB=E5=86=99",rangeOverflow:"=E8=AF=B7=E5=A1=AB=E5=86=
=99=E5=B0=8F=E4=BA=8E=E7=AD=89=E4=BA=8E %s =E7=9A=84=E5=80=BC",rangeUnderfl=
ow:"=E8=AF=B7=E5=A1=AB=E5=86=99=E5=A4=A7=E4=BA=8E=E7=AD=89=E4=BA=8E %s =E7=
=9A=84=E5=80=BC",stepMismatch:"",tooLong:"=E8=87=B3=E5=A4=9A=E5=A1=AB=E5=86=
=99 %s =E4=B8=AA=E5=AD=97=E7=AC=A6",typeMismatch:"=E8=AF=B7=E6=8C=89=E7=85=
=A7=E8=A6=81=E6=B1=82=E7=9A=84=E7=B1=BB=E5=9E=8B=E5=A1=AB=E5=86=99"}},a.ERR=
OR_MAP=3D{tooShort:"minlength",checkedOverflow:"maxchecked",checkedUnderflo=
w:"minchecked",rangeOverflow:"max",rangeUnderflow:"min",tooLong:"maxlength"=
},a.prototype.init=3Dfunction(){function t(t){var e=3Dt.toString();return e=
.substring(1,e.length-1)}function e(t,e,a){var r=3De.split(","),l=3Dfunctio=
n(){i.validate(this)};a&amp;&amp;(l=3Ds.utils.debounce(l,a)),o.each(r,funct=
ion(e,i){n.on(i+".validator.amui",t,l)})}var i=3Dthis,n=3Dthis.$element,a=
=3Dthis.options;return a.H5validation&amp;&amp;s.support.formValidation?!1:=
(n.attr("novalidate","novalidate"),o.each(a.H5inputType,function(e,i){var o=
=3Dn.find("input[type=3D"+i+"]");o.attr("pattern")||o.attr("pattern",t(a.pa=
tterns[i]))}),o.each(a.patterns,function(e,i){var o=3Dn.find("."+a.patternC=
lassPrefix+e);!o.attr("pattern")&amp;&amp;o.attr("pattern",t(i))}),n.submit=
(function(t){if("function"=3D=3Dtypeof a.submit)return a.submit.call(i,t);i=
f(a.validateOnSubmit){var e=3Di.isFormValid();return"boolean"=3D=3D=3Do.typ=
e(e)?e:n.data("amui.checked")?!0:(o.when(e).then(function(){n.data("amui.ch=
ecked",!0).submit()},function(){n.data("amui.checked",!1).find("."+a.inVali=
dClass).eq(0).focus()}),!1)}}),e(":input",a.customEvents),e(a.keyboardField=
s,a.keyboardEvents),e(a.pointerFields,a.pointerEvents),e(".am-active","keyu=
p",50),void e("textarea[maxlength]","keyup",50))},a.prototype.isValid=3Dfun=
ction(t){var e=3Do(t);return void 0=3D=3D=3De.data("validity")&amp;&amp;thi=
s.validate(t),e.data("validity")&amp;&amp;e.data("validity").valid},a.proto=
type.validate=3Dfunction(t){var e=3Dthis,i=3Dthis.$element,n=3Dthis.options=
,s=3Do(t),a=3Ds.data("equalTo");a&amp;&amp;s.attr("pattern","^"+i.find(a).v=
al()+"$");var r=3Ds.attr("pattern")||!1,l=3Dnew RegExp(r),c=3Dnull,u=3Dnull=
,d=3Ds.is("[type=3Dcheckbox]")?(u=3Di.find('input[name=3D"'+t.name+'"]')).f=
ilter(":checked").length:s.is("[type=3Dradio]")?(c=3Dthis.$element.find('in=
put[name=3D"'+t.name+'"]')).filter(":checked").length&gt;0:s.val();s=3Du&am=
p;&amp;u.length?u.first():s;var h=3Dvoid 0!=3D=3Ds.attr("required")&amp;&am=
p;"false"!=3D=3Ds.attr("required"),p=3DparseInt(s.attr("maxlength"),10),f=
=3DparseInt(s.attr("minlength"),10),m=3DNumber(s.attr("min")),v=3DNumber(s.=
attr("max")),g=3Dthis.createValidity({field:s[0],valid:!0});if(n.debug&amp;=
&amp;window.console&amp;&amp;(console.log("Validate: value -&gt; ["+d+", re=
gex -&gt; ["+l+"], required -&gt; "+h),console.log("Regex test: "+l.test(d)=
+", Pattern: "+r)),!isNaN(p)&amp;&amp;d.length&gt;p&amp;&amp;(g.valid=3D!1,=
g.tooLong=3D!0),!isNaN(f)&amp;&amp;d.length&lt;f&amp;&amp;(g.valid=3D!1,g.c=
ustomError=3D"tooShort"),!isNaN(m)&amp;&amp;Number(d)&lt;m&amp;&amp;(g.vali=
d=3D!1,g.rangeUnderflow=3D!0),!isNaN(v)&amp;&amp;Number(d)&gt;v&amp;&amp;(g=
.valid=3D!1,g.rangeOverflow=3D!0),h&amp;&amp;!d)g.valid=3D!1,g.valueMissing=
=3D!0;else if((u||s.is('select[multiple=3D"multiple"]'))&amp;&amp;d){d=3Du?=
d:d.length;var w=3DparseInt(s.attr("minchecked"),10),y=3DparseInt(s.attr("m=
axchecked"),10);!isNaN(w)&amp;&amp;w&gt;d&amp;&amp;(g.valid=3D!1,g.customEr=
ror=3D"checkedUnderflow"),!isNaN(y)&amp;&amp;d&gt;y&amp;&amp;(g.valid=3D!1,=
g.customError=3D"checkedOverflow")}else r&amp;&amp;!l.test(d)&amp;&amp;d&am=
p;&amp;(g.valid=3D!1,g.patternMismatch=3D!0);var b,T=3Dfunction(t){this.mar=
kField(t),s.trigger("validated.field.validator.amui",t).data("validity",t);=
var i=3Dc||u;i&amp;&amp;i.not(s).data("validity",t).each(function(){t.field=
=3Dthis,e.markField(t)})};if("function"=3D=3Dtypeof n.validate&amp;&amp;(b=
=3Dn.validate.call(this,g)),b){var x=3Dnew o.Deferred;return s.data("amui.d=
fdValidity",x.promise()),o.when(b).always(function(t){x[t.valid?"resolve":"=
reject"](t),T.call(e,t)})}T.call(this,g)},a.prototype.markField=3Dfunction(=
t){var e=3Dthis.options,i=3D"mark"+(t.valid?"":"In")+"Valid";e[i]&amp;&amp;=
e[i].call(this,t)},a.prototype.validateForm=3Dfunction(){var t=3Dthis,e=3Dt=
his.$element,i=3Dthis.options,n=3De.find(i.allFields),s=3D[],a=3D!0,r=3D[],=
l=3Do([]),c=3D[],u=3D!1;e.trigger("validate.form.validator.amui");var d=3Dn=
.filter(function(){var t;if("INPUT"=3D=3D=3Dthis.tagName&amp;&amp;"radio"=
=3D=3D=3Dthis.type){if(t=3Dthis.name,s[t]=3D=3D=3D!0)return!1;s[t]=3D!0}ret=
urn!0});d.each(function(){var i=3Do(this),n=3Dt.isValid(this),s=3Di.data("v=
alidity");a=3D!!n&amp;&amp;a,r.push(s),n||(l=3Dl.add(o(this),e));var d=3Di.=
data("amui.dfdValidity");if(d)c.push(d),u=3D!0;else{var h=3Dnew o.Deferred;=
c.push(h.promise()),h[n?"resolve":"reject"](s)}});var h=3D{valid:a,$invalid=
Fields:l,validity:r,promises:c,async:u};return e.trigger("validated.form.va=
lidator.amui",h),h},a.prototype.isFormValid=3Dfunction(){var t=3Dthis,e=3Dt=
his.validateForm(),i=3Dfunction(e){t.$element.trigger(e+".validator.amui")}=
;if(e.async){var n=3Dnew o.Deferred;return o.when.apply(null,e.promises).th=
en(function(){n.resolve(),i("valid")
},function(){n.reject(),i("invalid")}),n.promise()}return e.valid?(i("valid=
"),!0):(e.$invalidFields.first().focus(),i("invalid"),!1)},a.prototype.crea=
teValidity=3Dfunction(t){return o.extend({customError:t.customError||!1,pat=
ternMismatch:t.patternMismatch||!1,rangeOverflow:t.rangeOverflow||!1,rangeU=
nderflow:t.rangeUnderflow||!1,stepMismatch:t.stepMismatch||!1,tooLong:t.too=
Long||!1,typeMismatch:t.typeMismatch||!1,valid:t.valid||!0,valueMissing:t.v=
alueMissing||!1},t)},a.prototype.getValidationMessage=3Dfunction(t){var e,i=
,n=3Da.validationMessages[this.options.locales],s=3D"%s",r=3Do(t.field);ret=
urn(r.is('[type=3D"checkbox"]')||r.is('[type=3D"radio"]'))&amp;&amp;(r=3Dth=
is.$element.find("[name=3D"+r.attr("name")+"]").first()),o.each(t,function(=
t,i){return"field"=3D=3D=3Dt||"valid"=3D=3D=3Dt?t:"customError"=3D=3D=3Dt&a=
mp;&amp;i?(e=3Di,n=3Dn.customError,!1):i=3D=3D=3D!0?(e=3Dt,!1):void 0}),i=
=3Dn[e]||void 0,i&amp;&amp;a.ERROR_MAP[e]&amp;&amp;(i=3Di.replace(s,r.attr(=
a.ERROR_MAP[e])||"=E8=A7=84=E5=AE=9A=E7=9A=84")),i},o.fn.validator=3Dn,s.re=
ady(function(t){o("[data-am-validator]",t).validator()}),o.AMUI.validator=
=3Da,e.exports=3Da}).call(this,"undefined"!=3Dtypeof global?global:"undefin=
ed"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:{})},{"./core":=
4}],47:[function(t,e){(function(i){"use strict";var n=3D"undefined"!=3Dtype=
of window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:null;t("./core");v=
ar o=3D{get:function(t){var e,i=3DencodeURIComponent(t)+"=3D",n=3Ddocument.=
cookie.indexOf(i),o=3Dnull;return n&gt;-1&amp;&amp;(e=3Ddocument.cookie.ind=
exOf(";",n),-1=3D=3De&amp;&amp;(e=3Ddocument.cookie.length),o=3DdecodeURICo=
mponent(document.cookie.substring(n+i.length,e))),o},set:function(t,e,i,n,o=
,s){var a=3DencodeURIComponent(t)+"=3D"+encodeURIComponent(e);i instanceof =
Date&amp;&amp;(a+=3D"; expires=3D"+i.toGMTString()),n&amp;&amp;(a+=3D"; pat=
h=3D"+n),o&amp;&amp;(a+=3D"; domain=3D"+o),s&amp;&amp;(a+=3D"; secure"),doc=
ument.cookie=3Da},unset:function(t,e,i,n){this.set(t,"",new Date(0),e,i,n)}=
};n.AMUI.utils.cookie=3Do,e.exports=3Do}).call(this,"undefined"!=3Dtypeof g=
lobal?global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?w=
indow:{})},{"./core":4}],48:[function(t,e){(function(t){"use strict";functi=
on i(t,e){function n(t,e){return function(){return t.apply(e,arguments)}}va=
r o;if(e=3De||{},this.trackingClick=3D!1,this.trackingClickStart=3D0,this.t=
argetElement=3Dnull,this.touchStartX=3D0,this.touchStartY=3D0,this.lastTouc=
hIdentifier=3D0,this.touchBoundary=3De.touchBoundary||10,this.layer=3Dt,thi=
s.tapDelay=3De.tapDelay||200,this.tapTimeout=3De.tapTimeout||700,!i.notNeed=
ed(t)){for(var a=3D["onMouse","onClick","onTouchStart","onTouchMove","onTou=
chEnd","onTouchCancel"],r=3Dthis,l=3D0,c=3Da.length;c&gt;l;l++)r[a[l]]=3Dn(=
r[a[l]],r);s&amp;&amp;(t.addEventListener("mouseover",this.onMouse,!0),t.ad=
dEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",th=
is.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListe=
ner("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.=
onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEven=
tListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediat=
ePropagation||(t.removeEventListener=3Dfunction(e,i,n){var o=3DNode.prototy=
pe.removeEventListener;"click"=3D=3D=3De?o.call(t,e,i.hijacked||i,n):o.call=
(t,e,i,n)},t.addEventListener=3Dfunction(e,i,n){var o=3DNode.prototype.addE=
ventListener;"click"=3D=3D=3De?o.call(t,e,i.hijacked||(i.hijacked=3Dfunctio=
n(t){t.propagationStopped||i(t)}),n):o.call(t,e,i,n)}),"function"=3D=3Dtype=
of t.onclick&amp;&amp;(o=3Dt.onclick,t.addEventListener("click",function(t)=
{o(t)},!1),t.onclick=3Dnull)}}var n=3D"undefined"!=3Dtypeof window?window.j=
Query:"undefined"!=3Dtypeof t?t.jQuery:null,o=3Dnavigator.userAgent.indexOf=
("Windows Phone")&gt;=3D0,s=3Dnavigator.userAgent.indexOf("Android")&gt;0&a=
mp;&amp;!o,a=3D/iP(ad|hone|od)/.test(navigator.userAgent)&amp;&amp;!o,r=3Da=
&amp;&amp;/OS 4_\d(_\d)?/.test(navigator.userAgent),l=3Da&amp;&amp;/OS [6-7=
]_\d/.test(navigator.userAgent),c=3Dnavigator.userAgent.indexOf("BB10")&gt;=
0;i.prototype.needsClick=3Dfunction(t){switch(t.nodeName.toLowerCase()){cas=
e"button":case"select":case"textarea":if(t.disabled)return!0;break;case"inp=
ut":if(a&amp;&amp;"file"=3D=3D=3Dt.type||t.disabled)return!0;break;case"lab=
el":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.classNa=
me)},i.prototype.needsFocus=3Dfunction(t){switch(t.nodeName.toLowerCase()){=
case"textarea":return!0;case"select":return!s;case"input":switch(t.type){ca=
se"button":case"checkbox":case"file":case"image":case"radio":case"submit":r=
eturn!1}return!t.disabled&amp;&amp;!t.readOnly;default:return/\bneedsfocus\=
b/.test(t.className)}},i.prototype.sendClick=3Dfunction(t,e){var i,n;docume=
nt.activeElement&amp;&amp;document.activeElement!=3D=3Dt&amp;&amp;document.=
activeElement.blur(),n=3De.changedTouches[0],i=3Ddocument.createEvent("Mous=
eEvents"),i.initMouseEvent(this.determineEventType(t),!0,!0,window,1,n.scre=
enX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),i.forwardedTouchEvent=
=3D!0,t.dispatchEvent(i)},i.prototype.determineEventType=3Dfunction(t){retu=
rn s&amp;&amp;"select"=3D=3D=3Dt.tagName.toLowerCase()?"mousedown":"click"}=
,i.prototype.focus=3Dfunction(t){var e;a&amp;&amp;t.setSelectionRange&amp;&=
amp;0!=3D=3Dt.type.indexOf("date")&amp;&amp;"time"!=3D=3Dt.type&amp;&amp;"m=
onth"!=3D=3Dt.type?(e=3Dt.value.length,t.setSelectionRange(e,e)):t.focus()}=
,i.prototype.updateScrollParent=3Dfunction(t){var e,i;if(e=3Dt.fastClickScr=
ollParent,!e||!e.contains(t)){i=3Dt;do{if(i.scrollHeight&gt;i.offsetHeight)=
{e=3Di,t.fastClickScrollParent=3Di;break}i=3Di.parentElement}while(i)}e&amp=
;&amp;(e.fastClickLastScrollTop=3De.scrollTop)},i.prototype.getTargetElemen=
tFromEventTarget=3Dfunction(t){return t.nodeType=3D=3D=3DNode.TEXT_NODE?t.p=
arentNode:t},i.prototype.onTouchStart=3Dfunction(t){var e,i,n;if(t.targetTo=
uches.length&gt;1)return!0;if(e=3Dthis.getTargetElementFromEventTarget(t.ta=
rget),i=3Dt.targetTouches[0],a){if(n=3Dwindow.getSelection(),n.rangeCount&a=
mp;&amp;!n.isCollapsed)return!0;if(!r){if(i.identifier&amp;&amp;i.identifie=
r=3D=3D=3Dthis.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTo=
uchIdentifier=3Di.identifier,this.updateScrollParent(e)}}return this.tracki=
ngClick=3D!0,this.trackingClickStart=3Dt.timeStamp,this.targetElement=3De,t=
his.touchStartX=3Di.pageX,this.touchStartY=3Di.pageY,t.timeStamp-this.lastC=
lickTime&lt;this.tapDelay&amp;&amp;t.preventDefault(),!0},i.prototype.touch=
HasMoved=3Dfunction(t){var e=3Dt.changedTouches[0],i=3Dthis.touchBoundary;r=
eturn Math.abs(e.pageX-this.touchStartX)&gt;i||Math.abs(e.pageY-this.touchS=
tartY)&gt;i?!0:!1},i.prototype.onTouchMove=3Dfunction(t){return this.tracki=
ngClick?((this.targetElement!=3D=3Dthis.getTargetElementFromEventTarget(t.t=
arget)||this.touchHasMoved(t))&amp;&amp;(this.trackingClick=3D!1,this.targe=
tElement=3Dnull),!0):!0},i.prototype.findControl=3Dfunction(t){return void =
0!=3D=3Dt.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.=
querySelector("button, input:not([type=3Dhidden]), keygen, meter, output, p=
rogress, select, textarea")},i.prototype.onTouchEnd=3Dfunction(t){var e,i,n=
,o,c,u=3Dthis.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-=
this.lastClickTime&lt;this.tapDelay)return this.cancelNextClick=3D!0,!0;if(=
t.timeStamp-this.trackingClickStart&gt;this.tapTimeout)return!0;if(this.can=
celNextClick=3D!1,this.lastClickTime=3Dt.timeStamp,i=3Dthis.trackingClickSt=
art,this.trackingClick=3D!1,this.trackingClickStart=3D0,l&amp;&amp;(c=3Dt.c=
hangedTouches[0],u=3Ddocument.elementFromPoint(c.pageX-window.pageXOffset,c=
.pageY-window.pageYOffset)||u,u.fastClickScrollParent=3Dthis.targetElement.=
fastClickScrollParent),n=3Du.tagName.toLowerCase(),"label"=3D=3D=3Dn){if(e=
=3Dthis.findControl(u)){if(this.focus(u),s)return!1;u=3De}}else if(this.nee=
dsFocus(u))return t.timeStamp-i&gt;100||a&amp;&amp;window.top!=3D=3Dwindow&=
amp;&amp;"input"=3D=3D=3Dn?(this.targetElement=3Dnull,!1):(this.focus(u),th=
is.sendClick(u,t),a&amp;&amp;"select"=3D=3D=3Dn||(this.targetElement=3Dnull=
,t.preventDefault()),!1);return a&amp;&amp;!r&amp;&amp;(o=3Du.fastClickScro=
llParent,o&amp;&amp;o.fastClickLastScrollTop!=3D=3Do.scrollTop)?!0:(this.ne=
edsClick(u)||(t.preventDefault(),this.sendClick(u,t)),!1)},i.prototype.onTo=
uchCancel=3Dfunction(){this.trackingClick=3D!1,this.targetElement=3Dnull},i=
.prototype.onMouse=3Dfunction(t){return this.targetElement?t.forwardedTouch=
Event?!0:t.cancelable&amp;&amp;(!this.needsClick(this.targetElement)||this.=
cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t=
.propagationStopped=3D!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},=
i.prototype.onClick=3Dfunction(t){var e;return this.trackingClick?(this.tar=
getElement=3Dnull,this.trackingClick=3D!1,!0):"submit"=3D=3D=3Dt.target.typ=
e&amp;&amp;0=3D=3D=3Dt.detail?!0:(e=3Dthis.onMouse(t),e||(this.targetElemen=
t=3Dnull),e)},i.prototype.destroy=3Dfunction(){var t=3Dthis.layer;s&amp;&am=
p;(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener=
("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,=
!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("=
touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.on=
TouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.remove=
EventListener("touchcancel",this.onTouchCancel,!1)},i.notNeeded=3Dfunction(=
t){var e,i,n,o;if("undefined"=3D=3Dtypeof window.ontouchstart)return!0;if(i=
=3D+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!s)return!0=
;if(e=3Ddocument.querySelector("meta[name=3Dviewport]")){if(-1!=3D=3De.cont=
ent.indexOf("user-scalable=3Dno"))return!0;if(i&gt;31&amp;&amp;document.doc=
umentElement.scrollWidth&lt;=3Dwindow.outerWidth)return!0}}if(c&amp;&amp;(n=
=3Dnavigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),n[1]&gt;=3D10&a=
mp;&amp;n[2]&gt;=3D3&amp;&amp;(e=3Ddocument.querySelector("meta[name=3Dview=
port]")))){if(-1!=3D=3De.content.indexOf("user-scalable=3Dno"))return!0;if(=
document.documentElement.scrollWidth&lt;=3Dwindow.outerWidth)return!0}retur=
n"none"=3D=3D=3Dt.style.msTouchAction||"manipulation"=3D=3D=3Dt.style.touch=
Action?!0:(o=3D+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],o&=
gt;=3D27&amp;&amp;(e=3Ddocument.querySelector("meta[name=3Dviewport]"),e&am=
p;&amp;(-1!=3D=3De.content.indexOf("user-scalable=3Dno")||document.document=
Element.scrollWidth&lt;=3Dwindow.outerWidth))?!0:"none"=3D=3D=3Dt.style.tou=
chAction||"manipulation"=3D=3D=3Dt.style.touchAction?!0:!1)},i.attach=3Dfun=
ction(t,e){return new i(t,e)},i.VERSION=3D"1.0.6",n&amp;&amp;(n.AMUI?n.AMUI=
.FastClick=3Di:n.AMUI=3D{FastClick:i}),e.exports=3Di}).call(this,"undefined=
"!=3Dtypeof global?global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dty=
peof window?window:{})},{}],49:[function(t,e){(function(i){"use strict";var=
 n=3D"undefined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.j=
Query:null,o=3D(t("./core"),"undefined"!=3Dtypeof Element&amp;&amp;"ALLOW_K=
EYBOARD_INPUT"in Element),s=3Dfunction(){for(var t,e,i=3D[["requestFullscre=
en","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreencha=
nge","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","=
webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange"=
,"webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScree=
n","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscr=
eenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullS=
creen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange",=
"mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscre=
enElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]]=
,n=3D0,o=3Di.length,s=3D{};o&gt;n;n++)if(t=3Di[n],t&amp;&amp;t[1]in documen=
t){for(n=3D0,e=3Dt.length;e&gt;n;n++)s[i[0][n]]=3Dt[n];return s}return!1}()=
,a=3D{request:function(t){var e=3Ds.requestFullscreen;t=3Dt||document.docum=
entElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?t[e]():t[e](o&amp=
;&amp;Element.ALLOW_KEYBOARD_INPUT)},exit:function(){document[s.exitFullscr=
een]()},toggle:function(t){this.isFullscreen?this.exit():this.request(t)},r=
aw:s};return s?(Object.defineProperties(a,{isFullscreen:{get:function(){ret=
urn!!document[s.fullscreenElement]}},element:{enumerable:!0,get:function(){=
return document[s.fullscreenElement]}},enabled:{enumerable:!0,get:function(=
){return!!document[s.fullscreenEnabled]}}}),a.VERSION=3D"2.0.0",n.AMUI.full=
screen=3Da,void(e.exports=3Da)):void(e.exports=3D!1)}).call(this,"undefined=
"!=3Dtypeof global?global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dty=
peof window?window:{})},{"./core":4}],50:[function(t,e){(function(i){"use s=
trict";var n=3D"undefined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dty=
peof i?i.jQuery:null,o=3Dt("./core");o.support.geolocation=3Dwindow.navigat=
or&amp;&amp;window.navigator.geolocation;var s=3Do.support.geolocation,a=3D=
function(t){this.options=3Dt||{}};a.MESSAGES=3D{unsupportedBrowser:"Browser=
 does not support location services",permissionDenied:"You have rejected ac=
cess to your location",positionUnavailable:"Unable to determine your locati=
on",timeout:"Service timeout has been reached"},a.ERROR_CODE=3D{0:"unsuppor=
tedBrowser",1:"permissionDenied",2:"positionUnavailable",3:"timeout"},a.pro=
totype.get=3Dfunction(t){var e=3Dthis;t=3Dn.extend({},this.options,t);var i=
=3Dnew n.Deferred;return s?this.watchID=3Ds.getCurrentPosition(function(t){=
i.resolve.call(e,t)},function(t){i.reject(a.MESSAGES[a.ERROR_CODE[t.code]])=
},t):i.reject(a.MESSAGES.unsupportedBrowser),i.promise()},a.prototype.watch=
=3Dfunction(t){if(s&amp;&amp;(t=3Dn.extend({},this.options,t),n.isFunction(=
t.done))){this.clearWatch();var e=3Dn.isFunction(t.fail)?t.fail:null;return=
 this.watchID=3Ds.watchPosition(t.done,e,t),this.watchID}},a.prototype.clea=
rWatch=3Dfunction(){s&amp;&amp;this.watchID&amp;&amp;(s.clearWatch(this.wat=
chID),this.watchID=3Dnull)},n.AMUI.Geolocation=3Da,e.exports=3Da}).call(thi=
s,"undefined"!=3Dtypeof global?global:"undefined"!=3Dtypeof self?self:"unde=
fined"!=3Dtypeof window?window:{})},{"./core":4}],51:[function(t,e){(functi=
on(i){"use strict";function n(t,e,i){return setTimeout(c(t,i),e)}function o=
(t,e,i){return Array.isArray(t)?(s(t,i[e],i),!0):!1}function s(t,e,i){var n=
;if(t)if(t.forEach)t.forEach(e,i);else if(void 0!=3D=3Dt.length)for(n=3D0;n=
&lt;t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&am=
p;&amp;e.call(i,t[n],n,t)}function a(t,e,i){for(var n=3DObject.keys(e),o=3D=
0;o&lt;n.length;)(!i||i&amp;&amp;void 0=3D=3D=3Dt[n[o]])&amp;&amp;(t[n[o]]=
=3De[n[o]]),o++;return t}function r(t,e){return a(t,e,!0)}function l(t,e,i)=
{var n,o=3De.prototype;n=3Dt.prototype=3DObject.create(o),n.constructor=3Dt=
,n._super=3Do,i&amp;&amp;a(n,i)}function c(t,e){return function(){return t.=
apply(e,arguments)}}function u(t,e){return typeof t=3D=3Due?t.apply(e?e[0]|=
|void 0:void 0,e):t}function d(t,e){return void 0=3D=3D=3Dt?e:t}function h(=
t,e,i){s(v(e),function(e){t.addEventListener(e,i,!1)})}function p(t,e,i){s(=
v(e),function(e){t.removeEventListener(e,i,!1)})}function f(t,e){for(;t;){i=
f(t=3D=3De)return!0;t=3Dt.parentNode}return!1}function m(t,e){return t.inde=
xOf(e)&gt;-1}function v(t){return t.trim().split(/\s+/g)}function g(t,e,i){=
if(t.indexOf&amp;&amp;!i)return t.indexOf(e);for(var n=3D0;n&lt;t.length;){=
if(i&amp;&amp;t[n][i]=3D=3De||!i&amp;&amp;t[n]=3D=3D=3De)return n;n++}retur=
n-1}function w(t){return Array.prototype.slice.call(t,0)}function y(t,e,i){=
for(var n=3D[],o=3D[],s=3D0;s&lt;t.length;){var a=3De?t[s][e]:t[s];g(o,a)&l=
t;0&amp;&amp;n.push(t[s]),o[s]=3Da,s++}return i&amp;&amp;(n=3De?n.sort(func=
tion(t,i){return t[e]&gt;i[e]}):n.sort()),n}function b(t,e){for(var i,n,o=
=3De[0].toUpperCase()+e.slice(1),s=3D0;s&lt;le.length;){if(i=3Dle[s],n=3Di?=
i+o:e,n in t)return n;s++}return void 0}function T(){return fe++}function x=
(t){var e=3Dt.ownerDocument;return e.defaultView||e.parentWindow}function C=
(t,e){var i=3Dthis;this.manager=3Dt,this.callback=3De,this.element=3Dt.elem=
ent,this.target=3Dt.options.inputTarget,this.domHandler=3Dfunction(e){u(t.o=
ptions.enable,[t])&amp;&amp;i.handler(e)},this.init()}function E(t){var e,i=
=3Dt.options.inputClass;return new(e=3Di?i:ge?_:we?U:ve?W:z)(t,k)}function =
k(t,e,i){var n=3Di.pointers.length,o=3Di.changedPointers.length,s=3De&amp;E=
e&amp;&amp;n-o=3D=3D=3D0,a=3De&amp;(Se|Ae)&amp;&amp;n-o=3D=3D=3D0;i.isFirst=
=3D!!s,i.isFinal=3D!!a,s&amp;&amp;(t.session=3D{}),i.eventType=3De,S(t,i),t=
.emit("hammer.input",i),t.recognize(i),t.session.prevInput=3Di}function S(t=
,e){var i=3Dt.session,n=3De.pointers,o=3Dn.length;i.firstInput||(i.firstInp=
ut=3DF(e)),o&gt;1&amp;&amp;!i.firstMultiple?i.firstMultiple=3DF(e):1=3D=3D=
=3Do&amp;&amp;(i.firstMultiple=3D!1);var s=3Di.firstInput,a=3Di.firstMultip=
le,r=3Da?a.center:s.center,l=3De.center=3DM(n);e.timeStamp=3Dpe(),e.deltaTi=
me=3De.timeStamp-s.timeStamp,e.angle=3D$(r,l),e.distance=3DN(r,l),A(i,e),e.=
offsetDirection=3DI(e.deltaX,e.deltaY),e.scale=3Da?O(a.pointers,n):1,e.rota=
tion=3Da?L(a.pointers,n):0,D(i,e);var c=3Dt.element;f(e.srcEvent.target,c)&=
amp;&amp;(c=3De.srcEvent.target),e.target=3Dc}function A(t,e){var i=3De.cen=
ter,n=3Dt.offsetDelta||{},o=3Dt.prevDelta||{},s=3Dt.prevInput||{};(e.eventT=
ype=3D=3D=3DEe||s.eventType=3D=3D=3DSe)&amp;&amp;(o=3Dt.prevDelta=3D{x:s.de=
ltaX||0,y:s.deltaY||0},n=3Dt.offsetDelta=3D{x:i.x,y:i.y}),e.deltaX=3Do.x+(i=
.x-n.x),e.deltaY=3Do.y+(i.y-n.y)}function D(t,e){var i,n,o,s,a=3Dt.lastInte=
rval||e,r=3De.timeStamp-a.timeStamp;if(e.eventType!=3DAe&amp;&amp;(r&gt;Ce|=
|void 0=3D=3D=3Da.velocity)){var l=3Da.deltaX-e.deltaX,c=3Da.deltaY-e.delta=
Y,u=3DP(r,l,c);n=3Du.x,o=3Du.y,i=3Dhe(u.x)&gt;he(u.y)?u.x:u.y,s=3DI(l,c),t.=
lastInterval=3De}else i=3Da.velocity,n=3Da.velocityX,o=3Da.velocityY,s=3Da.=
direction;e.velocity=3Di,e.velocityX=3Dn,e.velocityY=3Do,e.direction=3Ds}fu=
nction F(t){for(var e=3D[],i=3D0;i&lt;t.pointers.length;)e[i]=3D{clientX:de=
(t.pointers[i].clientX),clientY:de(t.pointers[i].clientY)},i++;return{timeS=
tamp:pe(),pointers:e,center:M(e),deltaX:t.deltaX,deltaY:t.deltaY}}function =
M(t){var e=3Dt.length;if(1=3D=3D=3De)return{x:de(t[0].clientX),y:de(t[0].cl=
ientY)};for(var i=3D0,n=3D0,o=3D0;e&gt;o;)i+=3Dt[o].clientX,n+=3Dt[o].clien=
tY,o++;return{x:de(i/e),y:de(n/e)}}function P(t,e,i){return{x:e/t||0,y:i/t|=
|0}}function I(t,e){return t=3D=3D=3De?De:he(t)&gt;=3Dhe(e)?t&gt;0?Fe:Me:e&=
gt;0?Pe:Ie}function N(t,e,i){i||(i=3DOe);var n=3De[i[0]]-t[i[0]],o=3De[i[1]=
]-t[i[1]];return Math.sqrt(n*n+o*o)}function $(t,e,i){i||(i=3DOe);var n=3De=
[i[0]]-t[i[0]],o=3De[i[1]]-t[i[1]];return 180*Math.atan2(o,n)/Math.PI}funct=
ion L(t,e){return $(e[1],e[0],ze)-$(t[1],t[0],ze)}function O(t,e){return N(=
e[0],e[1],ze)/N(t[0],t[1],ze)}function z(){this.evEl=3Dje,this.evWin=3DRe,t=
his.allow=3D!0,this.pressed=3D!1,C.apply(this,arguments)}function _(){this.=
evEl=3DWe,this.evWin=3DBe,C.apply(this,arguments),this.store=3Dthis.manager=
.session.pointerEvents=3D[]}function j(){this.evTarget=3DQe,this.evWin=3DVe=
,this.started=3D!1,C.apply(this,arguments)}function R(t,e){var i=3Dw(t.touc=
hes),n=3Dw(t.changedTouches);return e&amp;(Se|Ae)&amp;&amp;(i=3Dy(i.concat(=
n),"identifier",!0)),[i,n]}function U(){this.evTarget=3DYe,this.targetIds=
=3D{},C.apply(this,arguments)}function q(t,e){var i=3Dw(t.touches),n=3Dthis=
.targetIds;if(e&amp;(Ee|ke)&amp;&amp;1=3D=3D=3Di.length)return n[i[0].ident=
ifier]=3D!0,[i,i];var o,s,a=3Dw(t.changedTouches),r=3D[],l=3Dthis.target;if=
(s=3Di.filter(function(t){return f(t.target,l)}),e=3D=3D=3DEe)for(o=3D0;o&l=
t;s.length;)n[s[o].identifier]=3D!0,o++;for(o=3D0;o&lt;a.length;)n[a[o].ide=
ntifier]&amp;&amp;r.push(a[o]),e&amp;(Se|Ae)&amp;&amp;delete n[a[o].identif=
ier],o++;return r.length?[y(s.concat(r),"identifier",!0),r]:void 0}function=
 W(){C.apply(this,arguments);var t=3Dc(this.handler,this);this.touch=3Dnew =
U(this.manager,t),this.mouse=3Dnew z(this.manager,t)}function B(t,e){this.m=
anager=3Dt,this.set(e)}function H(t){if(m(t,ei))return ei;var e=3Dm(t,ii),i=
=3Dm(t,ni);return e&amp;&amp;i?ii+" "+ni:e||i?e?ii:ni:m(t,ti)?ti:Ke}functio=
n Q(t){this.id=3DT(),this.manager=3Dnull,this.options=3Dr(t||{},this.defaul=
ts),this.options.enable=3Dd(this.options.enable,!0),this.state=3Doi,this.si=
multaneous=3D{},this.requireFail=3D[]}function V(t){return t&amp;ci?"cancel=
":t&amp;ri?"end":t&amp;ai?"move":t&amp;si?"start":""}function X(t){return t=
=3D=3DIe?"down":t=3D=3DPe?"up":t=3D=3DFe?"left":t=3D=3DMe?"right":""}functi=
on Y(t,e){var i=3De.manager;return i?i.get(t):t}function Z(){Q.apply(this,a=
rguments)}function G(){Z.apply(this,arguments),this.pX=3Dnull,this.pY=3Dnul=
l}function J(){Z.apply(this,arguments)}function K(){Q.apply(this,arguments)=
,this._timer=3Dnull,this._input=3Dnull}function te(){Z.apply(this,arguments=
)}function ee(){Z.apply(this,arguments)}function ie(){Q.apply(this,argument=
s),this.pTime=3D!1,this.pCenter=3D!1,this._timer=3Dnull,this._input=3Dnull,=
this.count=3D0}function ne(t,e){return e=3De||{},e.recognizers=3Dd(e.recogn=
izers,ne.defaults.preset),new oe(t,e)}function oe(t,e){e=3De||{},this.optio=
ns=3Dr(e,ne.defaults),this.options.inputTarget=3Dthis.options.inputTarget||=
t,this.handlers=3D{},this.session=3D{},this.recognizers=3D[],this.element=
=3Dt,this.input=3DE(this),this.touchAction=3Dnew B(this,this.options.touchA=
ction),se(this,!0),s(e.recognizers,function(t){var e=3Dthis.add(new t[0](t[=
1]));t[2]&amp;&amp;e.recognizeWith(t[2]),t[3]&amp;&amp;e.requireFailure(t[3=
])},this)}function se(t,e){var i=3Dt.element;s(t.options.cssProps,function(=
t,n){i.style[b(i.style,n)]=3De?t:""})}function ae(t,e){var i=3Ddocument.cre=
ateEvent("Event");i.initEvent(t,!0,!0),i.gesture=3De,e.target.dispatchEvent=
(i)}var re=3D"undefined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtype=
of i?i.jQuery:null,le=3D(t("./core"),["","webkit","moz","MS","ms","o"]),ce=
=3Ddocument.createElement("div"),ue=3D"function",de=3DMath.round,he=3DMath.=
abs,pe=3DDate.now,fe=3D1,me=3D/mobile|tablet|ip(ad|hone|od)|android/i,ve=3D=
"ontouchstart"in window,ge=3Dvoid 0!=3D=3Db(window,"PointerEvent"),we=3Dve&=
amp;&amp;me.test(navigator.userAgent),ye=3D"touch",be=3D"pen",Te=3D"mouse",=
xe=3D"kinect",Ce=3D25,Ee=3D1,ke=3D2,Se=3D4,Ae=3D8,De=3D1,Fe=3D2,Me=3D4,Pe=
=3D8,Ie=3D16,Ne=3DFe|Me,$e=3DPe|Ie,Le=3DNe|$e,Oe=3D["x","y"],ze=3D["clientX=
","clientY"];C.prototype=3D{handler:function(){},init:function(){this.evEl&=
amp;&amp;h(this.element,this.evEl,this.domHandler),this.evTarget&amp;&amp;h=
(this.target,this.evTarget,this.domHandler),this.evWin&amp;&amp;h(x(this.el=
ement),this.evWin,this.domHandler)},destroy:function(){this.evEl&amp;&amp;p=
(this.element,this.evEl,this.domHandler),this.evTarget&amp;&amp;p(this.targ=
et,this.evTarget,this.domHandler),this.evWin&amp;&amp;p(x(this.element),thi=
s.evWin,this.domHandler)}};var _e=3D{mousedown:Ee,mousemove:ke,mouseup:Se},=
je=3D"mousedown",Re=3D"mousemove mouseup";l(z,C,{handler:function(t){var e=
=3D_e[t.type];e&amp;Ee&amp;&amp;0=3D=3D=3Dt.button&amp;&amp;(this.pressed=
=3D!0),e&amp;ke&amp;&amp;1!=3D=3Dt.which&amp;&amp;(e=3DSe),this.pressed&amp=
;&amp;this.allow&amp;&amp;(e&amp;Se&amp;&amp;(this.pressed=3D!1),this.callb=
ack(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:Te,srcEven=
t:t}))}});var Ue=3D{pointerdown:Ee,pointermove:ke,pointerup:Se,pointercance=
l:Ae,pointerout:Ae},qe=3D{2:ye,3:be,4:Te,5:xe},We=3D"pointerdown",Be=3D"poi=
ntermove pointerup pointercancel";window.MSPointerEvent&amp;&amp;(We=3D"MSP=
ointerDown",Be=3D"MSPointerMove MSPointerUp MSPointerCancel"),l(_,C,{handle=
r:function(t){var e=3Dthis.store,i=3D!1,n=3Dt.type.toLowerCase().replace("m=
s",""),o=3DUe[n],s=3Dqe[t.pointerType]||t.pointerType,a=3Ds=3D=3Dye,r=3Dg(e=
,t.pointerId,"pointerId");o&amp;Ee&amp;&amp;(0=3D=3D=3Dt.button||a)?0&gt;r&=
amp;&amp;(e.push(t),r=3De.length-1):o&amp;(Se|Ae)&amp;&amp;(i=3D!0),0&gt;r|=
|(e[r]=3Dt,this.callback(this.manager,o,{pointers:e,changedPointers:[t],poi=
nterType:s,srcEvent:t}),i&amp;&amp;e.splice(r,1))}});var He=3D{touchstart:E=
e,touchmove:ke,touchend:Se,touchcancel:Ae},Qe=3D"touchstart",Ve=3D"touchsta=
rt touchmove touchend touchcancel";l(j,C,{handler:function(t){var e=3DHe[t.=
type];if(e=3D=3D=3DEe&amp;&amp;(this.started=3D!0),this.started){var i=3DR.=
call(this,t,e);e&amp;(Se|Ae)&amp;&amp;i[0].length-i[1].length=3D=3D=3D0&amp=
;&amp;(this.started=3D!1),this.callback(this.manager,e,{pointers:i[0],chang=
edPointers:i[1],pointerType:ye,srcEvent:t})}}});var Xe=3D{touchstart:Ee,tou=
chmove:ke,touchend:Se,touchcancel:Ae},Ye=3D"touchstart touchmove touchend t=
ouchcancel";l(U,C,{handler:function(t){var e=3DXe[t.type],i=3Dq.call(this,t=
,e);i&amp;&amp;this.callback(this.manager,e,{pointers:i[0],changedPointers:=
i[1],pointerType:ye,srcEvent:t})}}),l(W,C,{handler:function(t,e,i){var n=3D=
i.pointerType=3D=3Dye,o=3Di.pointerType=3D=3DTe;if(n)this.mouse.allow=3D!1;=
else if(o&amp;&amp;!this.mouse.allow)return;e&amp;(Se|Ae)&amp;&amp;(this.mo=
use.allow=3D!0),this.callback(t,e,i)},destroy:function(){this.touch.destroy=
(),this.mouse.destroy()}});var Ze=3Db(ce.style,"touchAction"),Ge=3Dvoid 0!=
=3D=3DZe,Je=3D"compute",Ke=3D"auto",ti=3D"manipulation",ei=3D"none",ii=3D"p=
an-x",ni=3D"pan-y";B.prototype=3D{set:function(t){t=3D=3DJe&amp;&amp;(t=3Dt=
his.compute()),Ge&amp;&amp;(this.manager.element.style[Ze]=3Dt),this.action=
s=3Dt.toLowerCase().trim()},update:function(){this.set(this.manager.options=
.touchAction)},compute:function(){var t=3D[];return s(this.manager.recogniz=
ers,function(e){u(e.options.enable,[e])&amp;&amp;(t=3Dt.concat(e.getTouchAc=
tion()))}),H(t.join(" "))},preventDefaults:function(t){if(!Ge){var e=3Dt.sr=
cEvent,i=3Dt.offsetDirection;if(this.manager.session.prevented)return void =
e.preventDefault();var n=3Dthis.actions,o=3Dm(n,ei),s=3Dm(n,ni),a=3Dm(n,ii)=
;return o||s&amp;&amp;i&amp;Ne||a&amp;&amp;i&amp;$e?this.preventSrc(e):void=
 0}},preventSrc:function(t){this.manager.session.prevented=3D!0,t.preventDe=
fault()}};var oi=3D1,si=3D2,ai=3D4,ri=3D8,li=3Dri,ci=3D16,ui=3D32;Q.prototy=
pe=3D{defaults:{},set:function(t){return a(this.options,t),this.manager&amp=
;&amp;this.manager.touchAction.update(),this},recognizeWith:function(t){if(=
o(t,"recognizeWith",this))return this;var e=3Dthis.simultaneous;return t=3D=
Y(t,this),e[t.id]||(e[t.id]=3Dt,t.recognizeWith(this)),this},dropRecognizeW=
ith:function(t){return o(t,"dropRecognizeWith",this)?this:(t=3DY(t,this),de=
lete this.simultaneous[t.id],this)},requireFailure:function(t){if(o(t,"requ=
ireFailure",this))return this;var e=3Dthis.requireFail;return t=3DY(t,this)=
,-1=3D=3D=3Dg(e,t)&amp;&amp;(e.push(t),t.requireFailure(this)),this},dropRe=
quireFailure:function(t){if(o(t,"dropRequireFailure",this))return this;t=3D=
Y(t,this);var e=3Dg(this.requireFail,t);return e&gt;-1&amp;&amp;this.requir=
eFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFa=
il.length&gt;0},canRecognizeWith:function(t){return!!this.simultaneous[t.id=
]},emit:function(t){function e(e){i.manager.emit(i.options.event+(e?V(n):""=
),t)}var i=3Dthis,n=3Dthis.state;ri&gt;n&amp;&amp;e(!0),e(),n&gt;=3Dri&amp;=
&amp;e(!0)},tryEmit:function(t){return this.canEmit()?this.emit(t):void(thi=
s.state=3Dui)},canEmit:function(){for(var t=3D0;t&lt;this.requireFail.lengt=
h;){if(!(this.requireFail[t].state&amp;(ui|oi)))return!1;t++}return!0},reco=
gnize:function(t){var e=3Da({},t);return u(this.options.enable,[this,e])?(t=
his.state&amp;(li|ci|ui)&amp;&amp;(this.state=3Doi),this.state=3Dthis.proce=
ss(e),void(this.state&amp;(si|ai|ri|ci)&amp;&amp;this.tryEmit(e))):(this.re=
set(),void(this.state=3Dui))},process:function(){},getTouchAction:function(=
){},reset:function(){}},l(Z,Q,{defaults:{pointers:1},attrTest:function(t){v=
ar e=3Dthis.options.pointers;return 0=3D=3D=3De||t.pointers.length=3D=3D=3D=
e},process:function(t){var e=3Dthis.state,i=3Dt.eventType,n=3De&amp;(si|ai)=
,o=3Dthis.attrTest(t);return n&amp;&amp;(i&amp;Ae||!o)?e|ci:n||o?i&amp;Se?e=
|ri:e&amp;si?e|ai:si:ui}}),l(G,Z,{defaults:{event:"pan",threshold:10,pointe=
rs:1,direction:Le},getTouchAction:function(){var t=3Dthis.options.direction=
,e=3D[];return t&amp;Ne&amp;&amp;e.push(ni),t&amp;$e&amp;&amp;e.push(ii),e}=
,directionTest:function(t){var e=3Dthis.options,i=3D!0,n=3Dt.distance,o=3Dt=
.direction,s=3Dt.deltaX,a=3Dt.deltaY;return o&amp;e.direction||(e.direction=
&amp;Ne?(o=3D0=3D=3D=3Ds?De:0&gt;s?Fe:Me,i=3Ds!=3Dthis.pX,n=3DMath.abs(t.de=
ltaX)):(o=3D0=3D=3D=3Da?De:0&gt;a?Pe:Ie,i=3Da!=3Dthis.pY,n=3DMath.abs(t.del=
taY))),t.direction=3Do,i&amp;&amp;n&gt;e.threshold&amp;&amp;o&amp;e.directi=
on},attrTest:function(t){return Z.prototype.attrTest.call(this,t)&amp;&amp;=
(this.state&amp;si||!(this.state&amp;si)&amp;&amp;this.directionTest(t))},e=
mit:function(t){this.pX=3Dt.deltaX,this.pY=3Dt.deltaY;var e=3DX(t.direction=
);e&amp;&amp;this.manager.emit(this.options.event+e,t),this._super.emit.cal=
l(this,t)}}),l(J,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouc=
hAction:function(){return[ei]},attrTest:function(t){return this._super.attr=
Test.call(this,t)&amp;&amp;(Math.abs(t.scale-1)&gt;this.options.threshold||=
this.state&amp;si)},emit:function(t){if(this._super.emit.call(this,t),1!=3D=
=3Dt.scale){var e=3Dt.scale&lt;1?"in":"out";this.manager.emit(this.options.=
event+e,t)}}}),l(K,Q,{defaults:{event:"press",pointers:1,time:500,threshold=
:5},getTouchAction:function(){return[Ke]},process:function(t){var e=3Dthis.=
options,i=3Dt.pointers.length=3D=3D=3De.pointers,o=3Dt.distance&lt;e.thresh=
old,s=3Dt.deltaTime&gt;e.time;if(this._input=3Dt,!o||!i||t.eventType&amp;(S=
e|Ae)&amp;&amp;!s)this.reset();else if(t.eventType&amp;Ee)this.reset(),this=
._timer=3Dn(function(){this.state=3Dli,this.tryEmit()},e.time,this);else if=
(t.eventType&amp;Se)return li;return ui},reset:function(){clearTimeout(this=
._timer)},emit:function(t){this.state=3D=3D=3Dli&amp;&amp;(t&amp;&amp;t.eve=
ntType&amp;Se?this.manager.emit(this.options.event+"up",t):(this._input.tim=
eStamp=3Dpe(),this.manager.emit(this.options.event,this._input)))}}),l(te,Z=
,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(=
){return[ei]},attrTest:function(t){return this._super.attrTest.call(this,t)=
&amp;&amp;(Math.abs(t.rotation)&gt;this.options.threshold||this.state&amp;s=
i)}}),l(ee,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:N=
e|$e,pointers:1},getTouchAction:function(){return G.prototype.getTouchActio=
n.call(this)},attrTest:function(t){var e,i=3Dthis.options.direction;return =
i&amp;(Ne|$e)?e=3Dt.velocity:i&amp;Ne?e=3Dt.velocityX:i&amp;$e&amp;&amp;(e=
=3Dt.velocityY),this._super.attrTest.call(this,t)&amp;&amp;i&amp;t.directio=
n&amp;&amp;t.distance&gt;this.options.threshold&amp;&amp;he(e)&gt;this.opti=
ons.velocity&amp;&amp;t.eventType&amp;Se},emit:function(t){var e=3DX(t.dire=
ction);e&amp;&amp;this.manager.emit(this.options.event+e,t),this.manager.em=
it(this.options.event,t)}}),l(ie,Q,{defaults:{event:"tap",pointers:1,taps:1=
,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function=
(){return[ti]},process:function(t){var e=3Dthis.options,i=3Dt.pointers.leng=
th=3D=3D=3De.pointers,o=3Dt.distance&lt;e.threshold,s=3Dt.deltaTime&lt;e.ti=
me;if(this.reset(),t.eventType&amp;Ee&amp;&amp;0=3D=3D=3Dthis.count)return =
this.failTimeout();if(o&amp;&amp;s&amp;&amp;i){if(t.eventType!=3DSe)return =
this.failTimeout();var a=3Dthis.pTime?t.timeStamp-this.pTime&lt;e.interval:=
!0,r=3D!this.pCenter||N(this.pCenter,t.center)&lt;e.posThreshold;this.pTime=
=3Dt.timeStamp,this.pCenter=3Dt.center,r&amp;&amp;a?this.count+=3D1:this.co=
unt=3D1,this._input=3Dt;var l=3Dthis.count%e.taps;if(0=3D=3D=3Dl)return thi=
s.hasRequireFailures()?(this._timer=3Dn(function(){this.state=3Dli,this.try=
Emit()},e.interval,this),si):li}return ui},failTimeout:function(){return th=
is._timer=3Dn(function(){this.state=3Dui},this.options.interval,this),ui},r=
eset:function(){clearTimeout(this._timer)},emit:function(){this.state=3D=3D=
li&amp;&amp;(this._input.tapCount=3Dthis.count,this.manager.emit(this.optio=
ns.event,this._input))}}),ne.VERSION=3D"2.0.4",ne.defaults=3D{domEvents:!1,=
touchAction:Je,enable:!0,inputTarget:null,inputClass:null,preset:[[te,{enab=
le:!1}],[J,{enable:!1},["rotate"]],[ee,{direction:Ne}],[G,{direction:Ne},["=
swipe"]],[ie],[ie,{event:"doubletap",taps:2},["tap"]],[K]],cssProps:{userSe=
lect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",us=
erDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var di=3D1,hi=3D2;oe.prot=
otype=3D{set:function(t){return a(this.options,t),t.touchAction&amp;&amp;th=
is.touchAction.update(),t.inputTarget&amp;&amp;(this.input.destroy(),this.i=
nput.target=3Dt.inputTarget,this.input.init()),this},stop:function(t){this.=
session.stopped=3Dt?hi:di},recognize:function(t){var e=3Dthis.session;if(!e=
.stopped){this.touchAction.preventDefaults(t);var i,n=3Dthis.recognizers,o=
=3De.curRecognizer;(!o||o&amp;&amp;o.state&amp;li)&amp;&amp;(o=3De.curRecog=
nizer=3Dnull);for(var s=3D0;s&lt;n.length;)i=3Dn[s],e.stopped=3D=3D=3Dhi||o=
&amp;&amp;i!=3Do&amp;&amp;!i.canRecognizeWith(o)?i.reset():i.recognize(t),!=
o&amp;&amp;i.state&amp;(si|ai|ri)&amp;&amp;(o=3De.curRecognizer=3Di),s++}},=
get:function(t){if(t instanceof Q)return t;for(var e=3Dthis.recognizers,i=
=3D0;i&lt;e.length;i++)if(e[i].options.event=3D=3Dt)return e[i];return null=
},add:function(t){if(o(t,"add",this))return this;var e=3Dthis.get(t.options=
.event);return e&amp;&amp;this.remove(e),this.recognizers.push(t),t.manager=
=3Dthis,this.touchAction.update(),t},remove:function(t){if(o(t,"remove",thi=
s))return this;var e=3Dthis.recognizers;return t=3Dthis.get(t),e.splice(g(e=
,t),1),this.touchAction.update(),this},on:function(t,e){var i=3Dthis.handle=
rs;return s(v(t),function(t){i[t]=3Di[t]||[],i[t].push(e)}),this},off:funct=
ion(t,e){var i=3Dthis.handlers;return s(v(t),function(t){e?i[t].splice(g(i[=
t],e),1):delete i[t]}),this},emit:function(t,e){this.options.domEvents&amp;=
&amp;ae(t,e);var i=3Dthis.handlers[t]&amp;&amp;this.handlers[t].slice();if(=
i&amp;&amp;i.length){e.type=3Dt,e.preventDefault=3Dfunction(){e.srcEvent.pr=
eventDefault()};for(var n=3D0;n&lt;i.length;)i[n](e),n++}},destroy:function=
(){this.element&amp;&amp;se(this,!1),this.handlers=3D{},this.session=3D{},t=
his.input.destroy(),this.element=3Dnull}},a(ne,{INPUT_START:Ee,INPUT_MOVE:k=
e,INPUT_END:Se,INPUT_CANCEL:Ae,STATE_POSSIBLE:oi,STATE_BEGAN:si,STATE_CHANG=
ED:ai,STATE_ENDED:ri,STATE_RECOGNIZED:li,STATE_CANCELLED:ci,STATE_FAILED:ui=
,DIRECTION_NONE:De,DIRECTION_LEFT:Fe,DIRECTION_RIGHT:Me,DIRECTION_UP:Pe,DIR=
ECTION_DOWN:Ie,DIRECTION_HORIZONTAL:Ne,DIRECTION_VERTICAL:$e,DIRECTION_ALL:=
Le,Manager:oe,Input:C,TouchAction:B,TouchInput:U,MouseInput:z,PointerEventI=
nput:_,TouchMouseInput:W,SingleTouchInput:j,Recognizer:Q,AttrRecognizer:Z,T=
ap:ie,Pan:G,Swipe:ee,Pinch:J,Rotate:te,Press:K,on:h,off:p,each:s,merge:r,ex=
tend:a,inherit:l,bindFn:c,prefixed:b}),function(t,e){function i(i,n){var o=
=3Dt(i);o.data("hammer")||o.data("hammer",new e(o[0],n))}t.fn.hammer=3Dfunc=
tion(t){return this.each(function(){i(this,t)})},e.Manager.prototype.emit=
=3Dfunction(e){return function(i,n){e.call(this,i,n),t(this.element).trigge=
r({type:i,gesture:n})}}(e.Manager.prototype.emit)}(re,ne),re.AMUI.Hammer=3D=
ne,e.exports=3Dne}).call(this,"undefined"!=3Dtypeof global?global:"undefine=
d"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:{})},{"./core":4=
}],52:[function(t,e){(function(i){function n(t){return 128&gt;t?[t]:2048&gt=
;t?(c0=3D192+(t&gt;&gt;6),c1=3D128+(63&amp;t),[c0,c1]):(c0=3D224+(t&gt;&gt;=
12),c1=3D128+(t&gt;&gt;6&amp;63),c2=3D128+(63&amp;t),[c0,c1,c2])}function o=
(t){for(var e=3D[],i=3D0;i&lt;t.length;i++)for(var o=3Dt.charCodeAt(i),s=3D=
n(o),a=3D0;a&lt;s.length;a++)e.push(s[a]);return e}function s(t,e){this.typ=
eNumber=3D-1,this.errorCorrectLevel=3De,this.modules=3Dnull,this.moduleCoun=
t=3D0,this.dataCache=3Dnull,this.rsBlocks=3Dnull,this.totalDataCount=3D-1,t=
his.data=3Dt,this.utf8bytes=3Do(t),this.make()
}function a(t,e){if(void 0=3D=3Dt.length)throw new Error(t.length+"/"+e);fo=
r(var i=3D0;i&lt;t.length&amp;&amp;0=3D=3Dt[i];)i++;this.num=3Dnew Array(t.=
length-i+e);for(var n=3D0;n&lt;t.length-i;n++)this.num[n]=3Dt[n+i]}function=
 r(){this.buffer=3Dnew Array,this.length=3D0}function n(t){return 128&gt;t?=
[t]:2048&gt;t?(c0=3D192+(t&gt;&gt;6),c1=3D128+(63&amp;t),[c0,c1]):(c0=3D224=
+(t&gt;&gt;12),c1=3D128+(t&gt;&gt;6&amp;63),c2=3D128+(63&amp;t),[c0,c1,c2])=
}function o(t){for(var e=3D[],i=3D0;i&lt;t.length;i++)for(var o=3Dt.charCod=
eAt(i),s=3Dn(o),a=3D0;a&lt;s.length;a++)e.push(s[a]);return e}function s(t,=
e){this.typeNumber=3D-1,this.errorCorrectLevel=3De,this.modules=3Dnull,this=
.moduleCount=3D0,this.dataCache=3Dnull,this.rsBlocks=3Dnull,this.totalDataC=
ount=3D-1,this.data=3Dt,this.utf8bytes=3Do(t),this.make()}function a(t,e){i=
f(void 0=3D=3Dt.length)throw new Error(t.length+"/"+e);for(var i=3D0;i&lt;t=
.length&amp;&amp;0=3D=3Dt[i];)i++;this.num=3Dnew Array(t.length-i+e);for(va=
r n=3D0;n&lt;t.length-i;n++)this.num[n]=3Dt[n+i]}function r(){this.buffer=
=3Dnew Array,this.length=3D0}var c=3D"undefined"!=3Dtypeof window?window.jQ=
uery:"undefined"!=3Dtypeof i?i.jQuery:null;t("./core");var u=3D[],d=3Dfunct=
ion(t){"string"=3D=3Dtypeof t&amp;&amp;(t=3D{text:t}),this.options=3Dc.exte=
nd({},{text:"",render:"",width:256,height:256,correctLevel:3,background:"#f=
fffff",foreground:"#000000"},t);for(var e=3Dnull,i=3D0,n=3Du.length;n&gt;i;=
i++)if(u[i].text=3D=3Dthis.options.text&amp;&amp;u[i].text.correctLevel=3D=
=3Dthis.options.correctLevel){e=3Du[i].obj;break}if(i=3D=3Dn&amp;&amp;(e=3D=
new s(this.options.text,this.options.correctLevel),u.push({text:this.option=
s.text,correctLevel:this.options.correctLevel,obj:e})),this.options.render)=
switch(this.options.render){case"canvas":return this.createCanvas(e);case"t=
able":return this.createTable(e);case"svg":return this.createSVG(e);default=
:return this.createDefault(e)}return this.createDefault(e)};d.prototype.cre=
ateDefault=3Dfunction(t){var e=3Ddocument.createElement("canvas");return e.=
getContext?this.createCanvas(t):document.createElementNS&amp;&amp;document.=
createElementNS(SVG_NS,"svg").createSVGRect?this.createSVG(t):this.createTa=
ble(t)},d.prototype.createCanvas=3Dfunction(t){var e=3Ddocument.createEleme=
nt("canvas");e.width=3Dthis.options.width,e.height=3Dthis.options.height;fo=
r(var i=3De.getContext("2d"),n=3D(this.options.width/t.getModuleCount()).to=
Precision(4),o=3Dthis.options.height/t.getModuleCount().toPrecision(4),s=3D=
0;s&lt;t.getModuleCount();s++)for(var a=3D0;a&lt;t.getModuleCount();a++){i.=
fillStyle=3Dt.modules[s][a]?this.options.foreground:this.options.background=
;var r=3DMath.ceil((a+1)*n)-Math.floor(a*n),l=3DMath.ceil((s+1)*n)-Math.flo=
or(s*n);i.fillRect(Math.round(a*n),Math.round(s*o),r,l)}return e},d.prototy=
pe.createTable=3Dfunction(t){var e=3D[];e.push('&lt;table style=3D"border:0=
px; margin:0px; padding:0px; border-collapse:collapse; background-color: '+=
this.options.background+';"&gt;');var i=3D-1,n=3D-1,o=3D-1,s=3D-1;i=3Do=3DM=
ath.floor(this.options.width/t.getModuleCount()),n=3Ds=3DMath.floor(this.op=
tions.height/t.getModuleCount()),0&gt;=3Do&amp;&amp;(i=3Dt.getModuleCount()=
&lt;80?2:1),0&gt;=3Ds&amp;&amp;(n=3Dt.getModuleCount()&lt;80?2:1),foreTd=3D=
'&lt;td style=3D"border:0px; margin:0px; padding:0px; width:'+i+"px; backgr=
ound-color: "+this.options.foreground+'"&gt;&lt;/td&gt;',backTd=3D'&lt;td s=
tyle=3D"border:0px; margin:0px; padding:0px; width:'+i+"px; background-colo=
r: "+this.options.background+'"&gt;&lt;/td&gt;',l=3Dt.getModuleCount();for(=
var a=3D0;l&gt;a;a++){e.push('&lt;tr style=3D"border:0px; margin:0px; paddi=
ng:0px; height: '+n+'px"&gt;');for(var r=3D0;l&gt;r;r++)e.push(t.modules[a]=
[r]?foreTd:backTd);e.push("&lt;/tr&gt;")}e.push("&lt;/table&gt;");var c=3Dd=
ocument.createElement("span");return c.innerHTML=3De.join(""),c.firstChild}=
,d.prototype.createSVG=3Dfunction(t){for(var e,i,n,o,s=3Dt.getModuleCount()=
,a=3Dthis.options.height/this.options.width,r=3D'&lt;svg xmlns=3D"http://ww=
w.w3.org/2000/svg" width=3D"'+this.options.width+'px" height=3D"'+this.opti=
ons.height+'px" viewbox=3D"0 0 '+10*s+" "+10*s*a+'"&gt;',l=3D"&lt;path ",u=
=3D' style=3D"stroke-width:0.5;stroke:'+this.options.foreground+";fill:"+th=
is.options.foreground+';"&gt;&lt;/path&gt;',d=3D' style=3D"stroke-width:0.5=
;stroke:'+this.options.background+";fill:"+this.options.background+';"&gt;&=
lt;/path&gt;',h=3D0;s&gt;h;h++)for(var p=3D0;s&gt;p;p++)e=3D10*p,n=3D10*h*a=
,i=3D10*(p+1),o=3D10*(h+1)*a,r+=3Dl+'d=3D"M '+e+","+n+" L "+i+","+n+" L "+i=
+","+o+" L "+e+","+o+' Z"',r+=3Dt.modules[h][p]?u:d;return r+=3D"&lt;/svg&g=
t;",c(r)[0]},s.prototype=3D{constructor:s,getModuleCount:function(){return =
this.moduleCount},make:function(){this.getRightType(),this.dataCache=3Dthis=
.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=3D=
4*this.typeNumber+17,this.modules=3Dnew Array(this.moduleCount);for(var e=
=3D0;e&lt;this.moduleCount;e++)this.modules[e]=3Dnew Array(this.moduleCount=
);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.m=
oduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.s=
etupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0=
,t),this.typeNumber&gt;=3D7&amp;&amp;this.setupTypeNumber(!0),this.mapData(=
this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var i=3D-1;7=
&gt;=3Di;i++)if(!(-1&gt;=3Dt+i||this.moduleCount&lt;=3Dt+i))for(var n=3D-1;=
7&gt;=3Dn;n++)-1&gt;=3De+n||this.moduleCount&lt;=3De+n||(this.modules[t+i][=
e+n]=3Di&gt;=3D0&amp;&amp;6&gt;=3Di&amp;&amp;(0=3D=3Dn||6=3D=3Dn)||n&gt;=3D=
0&amp;&amp;6&gt;=3Dn&amp;&amp;(0=3D=3Di||6=3D=3Di)||i&gt;=3D2&amp;&amp;4&gt=
;=3Di&amp;&amp;n&gt;=3D2&amp;&amp;4&gt;=3Dn?!0:!1)},createQrcode:function()=
{for(var t=3D0,e=3D0,i=3Dnull,n=3D0;8&gt;n;n++){this.makeImpl(n);var o=3Df.=
getLostPoint(this);(0=3D=3Dn||t&gt;o)&amp;&amp;(t=3Do,e=3Dn,i=3Dthis.module=
s)}this.modules=3Di,this.setupTypeInfo(!1,e),this.typeNumber&gt;=3D7&amp;&a=
mp;this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=3D8;t&=
lt;this.moduleCount-8;t++)null=3D=3Dthis.modules[t][6]&amp;&amp;(this.modul=
es[t][6]=3Dt%2=3D=3D0,null=3D=3Dthis.modules[6][t]&amp;&amp;(this.modules[6=
][t]=3Dt%2=3D=3D0))},setupPositionAdjustPattern:function(){for(var t=3Df.ge=
tPatternPosition(this.typeNumber),e=3D0;e&lt;t.length;e++)for(var i=3D0;i&l=
t;t.length;i++){var n=3Dt[e],o=3Dt[i];if(null=3D=3Dthis.modules[n][o])for(v=
ar s=3D-2;2&gt;=3Ds;s++)for(var a=3D-2;2&gt;=3Da;a++)this.modules[n+s][o+a]=
=3D-2=3D=3Ds||2=3D=3Ds||-2=3D=3Da||2=3D=3Da||0=3D=3Ds&amp;&amp;0=3D=3Da?!0:=
!1}},setupTypeNumber:function(t){for(var e=3Df.getBCHTypeNumber(this.typeNu=
mber),i=3D0;18&gt;i;i++){var n=3D!t&amp;&amp;1=3D=3D(e&gt;&gt;i&amp;1);this=
.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=3Dn,this.modules[i%3+th=
is.moduleCount-8-3][Math.floor(i/3)]=3Dn}},setupTypeInfo:function(t,e){for(=
var i=3Dh[this.errorCorrectLevel]&lt;&lt;3|e,n=3Df.getBCHTypeInfo(i),o=3D0;=
15&gt;o;o++){var s=3D!t&amp;&amp;1=3D=3D(n&gt;&gt;o&amp;1);6&gt;o?this.modu=
les[o][8]=3Ds:8&gt;o?this.modules[o+1][8]=3Ds:this.modules[this.moduleCount=
-15+o][8]=3Ds;var s=3D!t&amp;&amp;1=3D=3D(n&gt;&gt;o&amp;1);8&gt;o?this.mod=
ules[8][this.moduleCount-o-1]=3Ds:9&gt;o?this.modules[8][15-o-1+1]=3Ds:this=
.modules[8][15-o-1]=3Ds}this.modules[this.moduleCount-8][8]=3D!t},createDat=
a:function(){var t=3Dnew r,e=3Dthis.typeNumber&gt;9?16:8;t.put(4,4),t.put(t=
his.utf8bytes.length,e);for(var i=3D0,n=3Dthis.utf8bytes.length;n&gt;i;i++)=
t.put(this.utf8bytes[i],8);for(t.length+4&lt;=3D8*this.totalDataCount&amp;&=
amp;t.put(0,4);t.length%8!=3D0;)t.putBit(!1);for(;;){if(t.length&gt;=3D8*th=
is.totalDataCount)break;if(t.put(s.PAD0,8),t.length&gt;=3D8*this.totalDataC=
ount)break;t.put(s.PAD1,8)}return this.createBytes(t)},createBytes:function=
(t){for(var e=3D0,i=3D0,n=3D0,o=3Dthis.rsBlock.length/3,s=3Dnew Array,r=3D0=
;o&gt;r;r++)for(var l=3Dthis.rsBlock[3*r+0],c=3Dthis.rsBlock[3*r+1],u=3Dthi=
s.rsBlock[3*r+2],d=3D0;l&gt;d;d++)s.push([u,c]);for(var h=3Dnew Array(s.len=
gth),p=3Dnew Array(s.length),m=3D0;m&lt;s.length;m++){var v=3Ds[m][0],g=3Ds=
[m][1]-v;i=3DMath.max(i,v),n=3DMath.max(n,g),h[m]=3Dnew Array(v);for(var r=
=3D0;r&lt;h[m].length;r++)h[m][r]=3D255&amp;t.buffer[r+e];e+=3Dv;var w=3Df.=
getErrorCorrectPolynomial(g),y=3Dnew a(h[m],w.getLength()-1),b=3Dy.mod(w);p=
[m]=3Dnew Array(w.getLength()-1);for(var r=3D0;r&lt;p[m].length;r++){var T=
=3Dr+b.getLength()-p[m].length;p[m][r]=3DT&gt;=3D0?b.get(T):0}}for(var x=3D=
new Array(this.totalDataCount),C=3D0,r=3D0;i&gt;r;r++)for(var m=3D0;m&lt;s.=
length;m++)r&lt;h[m].length&amp;&amp;(x[C++]=3Dh[m][r]);for(var r=3D0;n&gt;=
r;r++)for(var m=3D0;m&lt;s.length;m++)r&lt;p[m].length&amp;&amp;(x[C++]=3Dp=
[m][r]);return x},mapData:function(t,e){for(var i=3D-1,n=3Dthis.moduleCount=
-1,o=3D7,s=3D0,a=3Dthis.moduleCount-1;a&gt;0;a-=3D2)for(6=3D=3Da&amp;&amp;a=
--;;){for(var r=3D0;2&gt;r;r++)if(null=3D=3Dthis.modules[n][a-r]){var l=3D!=
1;s&lt;t.length&amp;&amp;(l=3D1=3D=3D(t[s]&gt;&gt;&gt;o&amp;1));var c=3Df.g=
etMask(e,n,a-r);c&amp;&amp;(l=3D!l),this.modules[n][a-r]=3Dl,o--,-1=3D=3Do&=
amp;&amp;(s++,o=3D7)}if(n+=3Di,0&gt;n||this.moduleCount&lt;=3Dn){n-=3Di,i=
=3D-i;break}}}},s.PAD0=3D236,s.PAD1=3D17;for(var h=3D[1,0,3,2],p=3D{PATTERN=
000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATT=
ERN110:6,PATTERN111:7},f=3D{PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26]=
,[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],=
[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],=
[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],=
[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,5=
0,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134]=
,[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78=
,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84=
,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G=
18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=3Dt&lt;&lt;10;f=
.getBCHDigit(e)-f.getBCHDigit(f.G15)&gt;=3D0;)e^=3Df.G15&lt;&lt;f.getBCHDig=
it(e)-f.getBCHDigit(f.G15);return(t&lt;&lt;10|e)^f.G15_MASK},getBCHTypeNumb=
er:function(t){for(var e=3Dt&lt;&lt;12;f.getBCHDigit(e)-f.getBCHDigit(f.G18=
)&gt;=3D0;)e^=3Df.G18&lt;&lt;f.getBCHDigit(e)-f.getBCHDigit(f.G18);return t=
&lt;&lt;12|e},getBCHDigit:function(t){for(var e=3D0;0!=3Dt;)e++,t&gt;&gt;&g=
t;=3D1;return e},getPatternPosition:function(t){return f.PATTERN_POSITION_T=
ABLE[t-1]},getMask:function(t,e,i){switch(t){case p.PATTERN000:return(e+i)%=
2=3D=3D0;case p.PATTERN001:return e%2=3D=3D0;case p.PATTERN010:return i%3=
=3D=3D0;case p.PATTERN011:return(e+i)%3=3D=3D0;case p.PATTERN100:return(Mat=
h.floor(e/2)+Math.floor(i/3))%2=3D=3D0;case p.PATTERN101:return e*i%2+e*i%3=
=3D=3D0;case p.PATTERN110:return(e*i%2+e*i%3)%2=3D=3D0;case p.PATTERN111:re=
turn(e*i%3+(e+i)%2)%2=3D=3D0;default:throw new Error("bad maskPattern:"+t)}=
},getErrorCorrectPolynomial:function(t){for(var e=3Dnew a([1],0),i=3D0;t&gt=
;i;i++)e=3De.multiply(new a([1,m.gexp(i)],0));return e},getLostPoint:functi=
on(t){for(var e=3Dt.getModuleCount(),i=3D0,n=3D0,o=3D0;e&gt;o;o++)for(var s=
=3D0,a=3Dt.modules[o][0],r=3D0;e&gt;r;r++){var l=3Dt.modules[o][r];if(e-6&g=
t;r&amp;&amp;l&amp;&amp;!t.modules[o][r+1]&amp;&amp;t.modules[o][r+2]&amp;&=
amp;t.modules[o][r+3]&amp;&amp;t.modules[o][r+4]&amp;&amp;!t.modules[o][r+5=
]&amp;&amp;t.modules[o][r+6]&amp;&amp;(e-10&gt;r?t.modules[o][r+7]&amp;&amp=
;t.modules[o][r+8]&amp;&amp;t.modules[o][r+9]&amp;&amp;t.modules[o][r+10]&a=
mp;&amp;(i+=3D40):r&gt;3&amp;&amp;t.modules[o][r-1]&amp;&amp;t.modules[o][r=
-2]&amp;&amp;t.modules[o][r-3]&amp;&amp;t.modules[o][r-4]&amp;&amp;(i+=3D40=
)),e-1&gt;o&amp;&amp;e-1&gt;r){var c=3D0;l&amp;&amp;c++,t.modules[o+1][r]&a=
mp;&amp;c++,t.modules[o][r+1]&amp;&amp;c++,t.modules[o+1][r+1]&amp;&amp;c++=
,(0=3D=3Dc||4=3D=3Dc)&amp;&amp;(i+=3D3)}a^l?s++:(a=3Dl,s&gt;=3D5&amp;&amp;(=
i+=3D3+s-5),s=3D1),l&amp;&amp;n++}for(var r=3D0;e&gt;r;r++)for(var s=3D0,a=
=3Dt.modules[0][r],o=3D0;e&gt;o;o++){var l=3Dt.modules[o][r];e-6&gt;o&amp;&=
amp;l&amp;&amp;!t.modules[o+1][r]&amp;&amp;t.modules[o+2][r]&amp;&amp;t.mod=
ules[o+3][r]&amp;&amp;t.modules[o+4][r]&amp;&amp;!t.modules[o+5][r]&amp;&am=
p;t.modules[o+6][r]&amp;&amp;(e-10&gt;o?t.modules[o+7][r]&amp;&amp;t.module=
s[o+8][r]&amp;&amp;t.modules[o+9][r]&amp;&amp;t.modules[o+10][r]&amp;&amp;(=
i+=3D40):o&gt;3&amp;&amp;t.modules[o-1][r]&amp;&amp;t.modules[o-2][r]&amp;&=
amp;t.modules[o-3][r]&amp;&amp;t.modules[o-4][r]&amp;&amp;(i+=3D40)),a^l?s+=
+:(a=3Dl,s&gt;=3D5&amp;&amp;(i+=3D3+s-5),s=3D1)}var u=3DMath.abs(100*n/e/e-=
50)/5;return i+=3D10*u}},m=3D{glog:function(t){if(1&gt;t)throw new Error("g=
log("+t+")");return m.LOG_TABLE[t]},gexp:function(t){for(;0&gt;t;)t+=3D255;=
for(;t&gt;=3D256;)t-=3D255;return m.EXP_TABLE[t]},EXP_TABLE:new Array(256),=
LOG_TABLE:new Array(256)},v=3D0;8&gt;v;v++)m.EXP_TABLE[v]=3D1&lt;&lt;v;for(=
var v=3D8;256&gt;v;v++)m.EXP_TABLE[v]=3Dm.EXP_TABLE[v-4]^m.EXP_TABLE[v-5]^m=
.EXP_TABLE[v-6]^m.EXP_TABLE[v-8];for(var v=3D0;255&gt;v;v++)m.LOG_TABLE[m.E=
XP_TABLE[v]]=3Dv;a.prototype=3D{get:function(t){return this.num[t]},getLeng=
th:function(){return this.num.length},multiply:function(t){for(var e=3Dnew =
Array(this.getLength()+t.getLength()-1),i=3D0;i&lt;this.getLength();i++)for=
(var n=3D0;n&lt;t.getLength();n++)e[i+n]^=3Dm.gexp(m.glog(this.get(i))+m.gl=
og(t.get(n)));return new a(e,0)},mod:function(t){var e=3Dthis.getLength(),i=
=3Dt.getLength();if(0&gt;e-i)return this;for(var n=3Dnew Array(e),o=3D0;e&g=
t;o;o++)n[o]=3Dthis.get(o);for(;n.length&gt;=3Di;){for(var s=3Dm.glog(n[0])=
-m.glog(t.get(0)),o=3D0;o&lt;t.getLength();o++)n[o]^=3Dm.gexp(m.glog(t.get(=
o))+s);for(;0=3D=3Dn[0];)n.shift()}return new a(n,0)}};var g=3D[[1,26,19],[=
1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,5=
5],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1=
,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27]=
,[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14=
],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,1=
16],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69]=
,[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,=
4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2=
,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[=
8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41]=
,[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42=
],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43=
,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1=
,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44]=
,[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71=
,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,1=
3,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,6=
8,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46=
],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[1=
1,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,=
46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,1=
3,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,=
74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],=
[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148=
,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,=
7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145=
,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16=
],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28=
,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,4=
6,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45=
,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25]=
,[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14=
,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,5=
4,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47=
],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,=
32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[4=
0,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,=
119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];s.prototy=
pe.getRightType=3Dfunction(){for(var t=3D1;41&gt;t;t++){var e=3Dg[4*(t-1)+t=
his.errorCorrectLevel];if(void 0=3D=3De)throw new Error("bad rs block @ typ=
eNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var i=3De.len=
gth/3,n=3D0,o=3D0;i&gt;o;o++){var s=3De[3*o+0],a=3De[3*o+2];n+=3Da*s}var r=
=3Dt&gt;9?2:1;if(this.utf8bytes.length+r&lt;n||40=3D=3Dt){this.typeNumber=
=3Dt,this.rsBlock=3De,this.totalDataCount=3Dn;break}}},r.prototype=3D{get:f=
unction(t){var e=3DMath.floor(t/8);return this.buffer[e]&gt;&gt;&gt;7-t%8&a=
mp;1},put:function(t,e){for(var i=3D0;e&gt;i;i++)this.putBit(t&gt;&gt;&gt;e=
-i-1&amp;1)},putBit:function(t){var e=3DMath.floor(this.length/8);this.buff=
er.length&lt;=3De&amp;&amp;this.buffer.push(0),t&amp;&amp;(this.buffer[e]|=
=3D128&gt;&gt;&gt;this.length%8),this.length++}},s.prototype=3D{constructor=
:s,getModuleCount:function(){return this.moduleCount},make:function(){this.=
getRightType(),this.dataCache=3Dthis.createData(),this.createQrcode()},make=
Impl:function(t){this.moduleCount=3D4*this.typeNumber+17,this.modules=3Dnew=
 Array(this.moduleCount);for(var e=3D0;e&lt;this.moduleCount;e++)this.modul=
es[e]=3Dnew Array(this.moduleCount);this.setupPositionProbePattern(0,0),thi=
s.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePa=
ttern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTim=
ingPattern(),this.setupTypeInfo(!0,t),this.typeNumber&gt;=3D7&amp;&amp;this=
.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePatt=
ern:function(t,e){for(var i=3D-1;7&gt;=3Di;i++)if(!(-1&gt;=3Dt+i||this.modu=
leCount&lt;=3Dt+i))for(var n=3D-1;7&gt;=3Dn;n++)-1&gt;=3De+n||this.moduleCo=
unt&lt;=3De+n||(this.modules[t+i][e+n]=3Di&gt;=3D0&amp;&amp;6&gt;=3Di&amp;&=
amp;(0=3D=3Dn||6=3D=3Dn)||n&gt;=3D0&amp;&amp;6&gt;=3Dn&amp;&amp;(0=3D=3Di||=
6=3D=3Di)||i&gt;=3D2&amp;&amp;4&gt;=3Di&amp;&amp;n&gt;=3D2&amp;&amp;4&gt;=
=3Dn?!0:!1)},createQrcode:function(){for(var t=3D0,e=3D0,i=3Dnull,n=3D0;8&g=
t;n;n++){this.makeImpl(n);var o=3Df.getLostPoint(this);(0=3D=3Dn||t&gt;o)&a=
mp;&amp;(t=3Do,e=3Dn,i=3Dthis.modules)}this.modules=3Di,this.setupTypeInfo(=
!1,e),this.typeNumber&gt;=3D7&amp;&amp;this.setupTypeNumber(!1)},setupTimin=
gPattern:function(){for(var t=3D8;t&lt;this.moduleCount-8;t++)null=3D=3Dthi=
s.modules[t][6]&amp;&amp;(this.modules[t][6]=3Dt%2=3D=3D0,null=3D=3Dthis.mo=
dules[6][t]&amp;&amp;(this.modules[6][t]=3Dt%2=3D=3D0))},setupPositionAdjus=
tPattern:function(){for(var t=3Df.getPatternPosition(this.typeNumber),e=3D0=
;e&lt;t.length;e++)for(var i=3D0;i&lt;t.length;i++){var n=3Dt[e],o=3Dt[i];i=
f(null=3D=3Dthis.modules[n][o])for(var s=3D-2;2&gt;=3Ds;s++)for(var a=3D-2;=
2&gt;=3Da;a++)this.modules[n+s][o+a]=3D-2=3D=3Ds||2=3D=3Ds||-2=3D=3Da||2=3D=
=3Da||0=3D=3Ds&amp;&amp;0=3D=3Da?!0:!1}},setupTypeNumber:function(t){for(va=
r e=3Df.getBCHTypeNumber(this.typeNumber),i=3D0;18&gt;i;i++){var n=3D!t&amp=
;&amp;1=3D=3D(e&gt;&gt;i&amp;1);this.modules[Math.floor(i/3)][i%3+this.modu=
leCount-8-3]=3Dn,this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=3D=
n}},setupTypeInfo:function(t,e){for(var i=3Dh[this.errorCorrectLevel]&lt;&l=
t;3|e,n=3Df.getBCHTypeInfo(i),o=3D0;15&gt;o;o++){var s=3D!t&amp;&amp;1=3D=
=3D(n&gt;&gt;o&amp;1);6&gt;o?this.modules[o][8]=3Ds:8&gt;o?this.modules[o+1=
][8]=3Ds:this.modules[this.moduleCount-15+o][8]=3Ds;var s=3D!t&amp;&amp;1=
=3D=3D(n&gt;&gt;o&amp;1);8&gt;o?this.modules[8][this.moduleCount-o-1]=3Ds:9=
&gt;o?this.modules[8][15-o-1+1]=3Ds:this.modules[8][15-o-1]=3Ds}this.module=
s[this.moduleCount-8][8]=3D!t},createData:function(){var t=3Dnew r,e=3Dthis=
.typeNumber&gt;9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var i=
=3D0,n=3Dthis.utf8bytes.length;n&gt;i;i++)t.put(this.utf8bytes[i],8);for(t.=
length+4&lt;=3D8*this.totalDataCount&amp;&amp;t.put(0,4);t.length%8!=3D0;)t=
.putBit(!1);for(;;){if(t.length&gt;=3D8*this.totalDataCount)break;if(t.put(=
s.PAD0,8),t.length&gt;=3D8*this.totalDataCount)break;t.put(s.PAD1,8)}return=
 this.createBytes(t)},createBytes:function(t){for(var e=3D0,i=3D0,n=3D0,o=
=3Dthis.rsBlock.length/3,s=3Dnew Array,r=3D0;o&gt;r;r++)for(var l=3Dthis.rs=
Block[3*r+0],c=3Dthis.rsBlock[3*r+1],u=3Dthis.rsBlock[3*r+2],d=3D0;l&gt;d;d=
++)s.push([u,c]);for(var h=3Dnew Array(s.length),p=3Dnew Array(s.length),m=
=3D0;m&lt;s.length;m++){var v=3Ds[m][0],g=3Ds[m][1]-v;i=3DMath.max(i,v),n=
=3DMath.max(n,g),h[m]=3Dnew Array(v);for(var r=3D0;r&lt;h[m].length;r++)h[m=
][r]=3D255&amp;t.buffer[r+e];e+=3Dv;var w=3Df.getErrorCorrectPolynomial(g),=
y=3Dnew a(h[m],w.getLength()-1),b=3Dy.mod(w);p[m]=3Dnew Array(w.getLength()=
-1);for(var r=3D0;r&lt;p[m].length;r++){var T=3Dr+b.getLength()-p[m].length=
;p[m][r]=3DT&gt;=3D0?b.get(T):0}}for(var x=3Dnew Array(this.totalDataCount)=
,C=3D0,r=3D0;i&gt;r;r++)for(var m=3D0;m&lt;s.length;m++)r&lt;h[m].length&am=
p;&amp;(x[C++]=3Dh[m][r]);for(var r=3D0;n&gt;r;r++)for(var m=3D0;m&lt;s.len=
gth;m++)r&lt;p[m].length&amp;&amp;(x[C++]=3Dp[m][r]);return x},mapData:func=
tion(t,e){for(var i=3D-1,n=3Dthis.moduleCount-1,o=3D7,s=3D0,a=3Dthis.module=
Count-1;a&gt;0;a-=3D2)for(6=3D=3Da&amp;&amp;a--;;){for(var r=3D0;2&gt;r;r++=
)if(null=3D=3Dthis.modules[n][a-r]){var l=3D!1;s&lt;t.length&amp;&amp;(l=3D=
1=3D=3D(t[s]&gt;&gt;&gt;o&amp;1));var c=3Df.getMask(e,n,a-r);c&amp;&amp;(l=
=3D!l),this.modules[n][a-r]=3Dl,o--,-1=3D=3Do&amp;&amp;(s++,o=3D7)}if(n+=3D=
i,0&gt;n||this.moduleCount&lt;=3Dn){n-=3Di,i=3D-i;break}}}},s.PAD0=3D236,s.=
PAD1=3D17;for(var h=3D[1,0,3,2],p=3D{PATTERN000:0,PATTERN001:1,PATTERN010:2=
,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f=3D{PAT=
TERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,=
42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48=
,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28=
,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,11=
0],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,12=
6],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,=
86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,1=
28,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,1=
38,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTy=
peInfo:function(t){for(var e=3Dt&lt;&lt;10;f.getBCHDigit(e)-f.getBCHDigit(f=
.G15)&gt;=3D0;)e^=3Df.G15&lt;&lt;f.getBCHDigit(e)-f.getBCHDigit(f.G15);retu=
rn(t&lt;&lt;10|e)^f.G15_MASK},getBCHTypeNumber:function(t){for(var e=3Dt&lt=
;&lt;12;f.getBCHDigit(e)-f.getBCHDigit(f.G18)&gt;=3D0;)e^=3Df.G18&lt;&lt;f.=
getBCHDigit(e)-f.getBCHDigit(f.G18);return t&lt;&lt;12|e},getBCHDigit:funct=
ion(t){for(var e=3D0;0!=3Dt;)e++,t&gt;&gt;&gt;=3D1;return e},getPatternPosi=
tion:function(t){return f.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e=
,i){switch(t){case p.PATTERN000:return(e+i)%2=3D=3D0;case p.PATTERN001:retu=
rn e%2=3D=3D0;case p.PATTERN010:return i%3=3D=3D0;case p.PATTERN011:return(=
e+i)%3=3D=3D0;case p.PATTERN100:return(Math.floor(e/2)+Math.floor(i/3))%2=
=3D=3D0;case p.PATTERN101:return e*i%2+e*i%3=3D=3D0;case p.PATTERN110:retur=
n(e*i%2+e*i%3)%2=3D=3D0;case p.PATTERN111:return(e*i%3+(e+i)%2)%2=3D=3D0;de=
fault:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:fun=
ction(t){for(var e=3Dnew a([1],0),i=3D0;t&gt;i;i++)e=3De.multiply(new a([1,=
m.gexp(i)],0));return e},getLostPoint:function(t){for(var e=3Dt.getModuleCo=
unt(),i=3D0,n=3D0,o=3D0;e&gt;o;o++)for(var s=3D0,a=3Dt.modules[o][0],r=3D0;=
e&gt;r;r++){var l=3Dt.modules[o][r];if(e-6&gt;r&amp;&amp;l&amp;&amp;!t.modu=
les[o][r+1]&amp;&amp;t.modules[o][r+2]&amp;&amp;t.modules[o][r+3]&amp;&amp;=
t.modules[o][r+4]&amp;&amp;!t.modules[o][r+5]&amp;&amp;t.modules[o][r+6]&am=
p;&amp;(e-10&gt;r?t.modules[o][r+7]&amp;&amp;t.modules[o][r+8]&amp;&amp;t.m=
odules[o][r+9]&amp;&amp;t.modules[o][r+10]&amp;&amp;(i+=3D40):r&gt;3&amp;&a=
mp;t.modules[o][r-1]&amp;&amp;t.modules[o][r-2]&amp;&amp;t.modules[o][r-3]&=
amp;&amp;t.modules[o][r-4]&amp;&amp;(i+=3D40)),e-1&gt;o&amp;&amp;e-1&gt;r){=
var c=3D0;l&amp;&amp;c++,t.modules[o+1][r]&amp;&amp;c++,t.modules[o][r+1]&a=
mp;&amp;c++,t.modules[o+1][r+1]&amp;&amp;c++,(0=3D=3Dc||4=3D=3Dc)&amp;&amp;=
(i+=3D3)}a^l?s++:(a=3Dl,s&gt;=3D5&amp;&amp;(i+=3D3+s-5),s=3D1),l&amp;&amp;n=
++}for(var r=3D0;e&gt;r;r++)for(var s=3D0,a=3Dt.modules[0][r],o=3D0;e&gt;o;=
o++){var l=3Dt.modules[o][r];e-6&gt;o&amp;&amp;l&amp;&amp;!t.modules[o+1][r=
]&amp;&amp;t.modules[o+2][r]&amp;&amp;t.modules[o+3][r]&amp;&amp;t.modules[=
o+4][r]&amp;&amp;!t.modules[o+5][r]&amp;&amp;t.modules[o+6][r]&amp;&amp;(e-=
10&gt;o?t.modules[o+7][r]&amp;&amp;t.modules[o+8][r]&amp;&amp;t.modules[o+9=
][r]&amp;&amp;t.modules[o+10][r]&amp;&amp;(i+=3D40):o&gt;3&amp;&amp;t.modul=
es[o-1][r]&amp;&amp;t.modules[o-2][r]&amp;&amp;t.modules[o-3][r]&amp;&amp;t=
.modules[o-4][r]&amp;&amp;(i+=3D40)),a^l?s++:(a=3Dl,s&gt;=3D5&amp;&amp;(i+=
=3D3+s-5),s=3D1)}var u=3DMath.abs(100*n/e/e-50)/5;return i+=3D10*u}},m=3D{g=
log:function(t){if(1&gt;t)throw new Error("glog("+t+")");return m.LOG_TABLE=
[t]},gexp:function(t){for(;0&gt;t;)t+=3D255;for(;t&gt;=3D256;)t-=3D255;retu=
rn m.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},v=3D0=
;8&gt;v;v++)m.EXP_TABLE[v]=3D1&lt;&lt;v;for(var v=3D8;256&gt;v;v++)m.EXP_TA=
BLE[v]=3Dm.EXP_TABLE[v-4]^m.EXP_TABLE[v-5]^m.EXP_TABLE[v-6]^m.EXP_TABLE[v-8=
];for(var v=3D0;255&gt;v;v++)m.LOG_TABLE[m.EXP_TABLE[v]]=3Dv;a.prototype=3D=
{get:function(t){return this.num[t]},getLength:function(){return this.num.l=
ength},multiply:function(t){for(var e=3Dnew Array(this.getLength()+t.getLen=
gth()-1),i=3D0;i&lt;this.getLength();i++)for(var n=3D0;n&lt;t.getLength();n=
++)e[i+n]^=3Dm.gexp(m.glog(this.get(i))+m.glog(t.get(n)));return new a(e,0)=
},mod:function(t){var e=3Dthis.getLength(),i=3Dt.getLength();if(0&gt;e-i)re=
turn this;for(var n=3Dnew Array(e),o=3D0;e&gt;o;o++)n[o]=3Dthis.get(o);for(=
;n.length&gt;=3Di;){for(var s=3Dm.glog(n[0])-m.glog(t.get(0)),o=3D0;o&lt;t.=
getLength();o++)n[o]^=3Dm.gexp(m.glog(t.get(o))+s);for(;0=3D=3Dn[0];)n.shif=
t()}return new a(n,0)}},g=3D[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,3=
4],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1=
,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,1=
6],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,4=
9,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,4=
0,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37=
,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20=
],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12=
,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,=
4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12]=
,[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,=
13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,1=
22,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,=
135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15]=
,[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,=
15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16=
,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,=
15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,=
6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,=
151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,1=
6],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2=
,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,=
15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[=
33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,2=
4],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,3=
1,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53=
,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48=
],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,2=
9,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,7=
5,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74=
,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116=
],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,1=
52,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,=
121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[=
17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,=
46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,4=
5,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25=
],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,=
34,55,25],[20,45,15,61,46,16]],s.prototype.getRightType=3Dfunction(){for(va=
r t=3D1;41&gt;t;t++){var e=3Dg[4*(t-1)+this.errorCorrectLevel];if(void 0=3D=
=3De)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+t=
his.errorCorrectLevel);for(var i=3De.length/3,n=3D0,o=3D0;i&gt;o;o++){var s=
=3De[3*o+0],a=3De[3*o+2];n+=3Da*s}var r=3Dt&gt;9?2:1;if(this.utf8bytes.leng=
th+r&lt;n||40=3D=3Dt){this.typeNumber=3Dt,this.rsBlock=3De,this.totalDataCo=
unt=3Dn;break}}},r.prototype=3D{get:function(t){var e=3DMath.floor(t/8);ret=
urn this.buffer[e]&gt;&gt;&gt;7-t%8&amp;1},put:function(t,e){for(var i=3D0;=
e&gt;i;i++)this.putBit(t&gt;&gt;&gt;e-i-1&amp;1)},putBit:function(t){var e=
=3DMath.floor(this.length/8);this.buffer.length&lt;=3De&amp;&amp;this.buffe=
r.push(0),t&amp;&amp;(this.buffer[e]|=3D128&gt;&gt;&gt;this.length%8),this.=
length++}},c.AMUI.qrcode=3Dd,e.exports=3Dd}).call(this,"undefined"!=3Dtypeo=
f global?global:"undefined"!=3Dtypeof self?self:"undefined"!=3Dtypeof windo=
w?window:{})},{"./core":4}],53:[function(t,e){(function(i){"use strict";fun=
ction n(){try{return l in r&amp;&amp;r[l]}catch(t){return!1}}var o=3D"undef=
ined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:null;=
t("./core");var s,a=3D{},r=3Dwindow,l=3D"localStorage";a.disabled=3D!1,a.ve=
rsion=3D"1.3.17",a.set=3Dfunction(){},a.get=3Dfunction(){},a.has=3Dfunction=
(t){return void 0!=3D=3Da.get(t)},a.remove=3Dfunction(){},a.clear=3Dfunctio=
n(){},a.transact=3Dfunction(t,e,i){null=3D=3Di&amp;&amp;(i=3De,e=3Dnull),nu=
ll=3D=3De&amp;&amp;(e=3D{});var n=3Da.get(t,e);i(n),a.set(t,n)},a.getAll=3D=
function(){},a.forEach=3Dfunction(){},a.serialize=3Dfunction(t){return JSON=
.stringify(t)},a.deserialize=3Dfunction(t){if("string"!=3Dtypeof t)return v=
oid 0;try{return JSON.parse(t)}catch(e){return t||void 0}},n()&amp;&amp;(s=
=3Dr[l],a.set=3Dfunction(t,e){return void 0=3D=3D=3De?a.remove(t):(s.setIte=
m(t,a.serialize(e)),e)},a.get=3Dfunction(t,e){var i=3Da.deserialize(s.getIt=
em(t));return void 0=3D=3D=3Di?e:i},a.remove=3Dfunction(t){s.removeItem(t)}=
,a.clear=3Dfunction(){s.clear()},a.getAll=3Dfunction(){var t=3D{};return a.=
forEach(function(e,i){t[e]=3Di}),t},a.forEach=3Dfunction(t){for(var e=3D0;e=
&lt;s.length;e++){var i=3Ds.key(e);t(i,a.get(i))}});try{var c=3D"__storeJs_=
_";a.set(c,c),a.get(c)!=3Dc&amp;&amp;(a.disabled=3D!0),a.remove(c)}catch(u)=
{a.disabled=3D!0}a.enabled=3D!a.disabled,o.AMUI=3Do.AMUI||{},o.AMUI.store=
=3Da,e.exports=3Da}).call(this,"undefined"!=3Dtypeof global?global:"undefin=
ed"!=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:{})},{"./core":=
4}],54:[function(t,e){(function(i){"use strict";function n(){var t=3Do('[da=
ta-am-widget=3D"wechatpay"]');return a?void t.on("click",".am-wechatpay-btn=
",function(t){t.preventDefault();var e=3Ds.utils.parseOptions(o(this).paren=
t().data("wechatPay"));return window.wx?void wx.checkJsApi({jsApiList:["cho=
oseWXPay"],success:function(t){t.checkResult.chooseWXPay?wx.chooseWXPay(e):=
alert("=E5=BE=AE=E4=BF=A1=E7=89=88=E6=9C=AC=E4=B8=8D=E6=94=AF=E6=8C=81=E6=
=94=AF=E4=BB=98=E6=8E=A5=E5=8F=A3=E6=88=96=E6=B2=A1=E6=9C=89=E5=BC=80=E5=90=
=AF=EF=BC=81")},fail:function(){alert("=E8=B0=83=E7=94=A8 checkJsApi =E6=8E=
=A5=E5=8F=A3=E6=97=B6=E5=8F=91=E7=94=9F=E9=94=99=E8=AF=AF!")}}):void alert(=
"=E6=B2=A1=E6=9C=89=E5=BE=AE=E4=BF=A1 JS SDK")}):(t.hide(),!1)}var o=3D"und=
efined"!=3Dtypeof window?window.jQuery:"undefined"!=3Dtypeof i?i.jQuery:nul=
l,s=3Dt("./core"),a=3Dwindow.navigator.userAgent.indexOf("MicroMessenger")&=
gt;-1,r=3Dn;o(document).on("ready",r),e.exports=3Do.AMUI.pay=3D{VERSION:"1.=
0.0",init:r}}).call(this,"undefined"!=3Dtypeof global?global:"undefined"!=
=3Dtypeof self?self:"undefined"!=3Dtypeof window?window:{})},{"./core":4}]}=
,{},[2]);</pre></body></html>
------MultipartBoundary--hDggK0k7M2YWFlWQEAczmZa8LzD8vdzKZPMoQHQ39Q----
Content-Type: text/css
Content-Transfer-Encoding: quoted-printable
Content-Location: https://cdn.staticfile.org/via_inject_blocker.css

@charset "utf-8";

.adsbygoogle { display: none !important; }
------MultipartBoundary--hDggK0k7M2YWFlWQEAczmZa8LzD8vdzKZPMoQHQ39Q------
