(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{142:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(163),l=n.n(c),u=n(171),s=(n(50),n(34),n(155)),p=n(450),f=n.n(p),m=n(146),d=n(166),h=n.n(d),g=n(151),y=n.n(g),b=n(178),E=n.n(b),v=n(179),x=n.n(v),j=n(180),w=n.n(j),C=n(460),N=n.n(C),O=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.group,n=e.classes;return i.a.createElement("div",{className:n.tagListRoot,style:{margin:"20px auto"}},i.a.createElement(h.a,{className:n.tagListPaper,elevation:1},i.a.createElement(y.a,{variant:"h3",style:{marginBottom:20}},"Tags"),i.a.createElement(E.a,{component:"nav"},t.map(function(e){return i.a.createElement(x.a,{button:!0,key:e.fieldValue,component:s.Link,to:"/tags/"+f()(e.fieldValue)+"/"},i.a.createElement(N.a,{className:n.margin,badgeContent:e.totalCount,color:"primary"},i.a.createElement(w.a,{primary:e.fieldValue})))}))))},t}(o.Component),S=Object(m.withStyles)(function(e){var t;return{tagListRoot:(t={},t[e.breakpoints.up("sm")]={width:600},t[e.breakpoints.up("md")]={width:960},t),tagListPaper:Object.assign({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}})(O),k=n(168),R=n(226),A=n.n(R);n.d(t,"pageQuery",function(){return L});var T=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.allMarkdownRemark.group,n=e.site.siteMetadata.title;return i.a.createElement(u.a,{location:this.props.location},i.a.createElement(l.a,{title:n}),i.a.createElement(k.a,{img:A.a,alt:"tags"}),i.a.createElement(S,{group:t}))},t}(o.Component),L=(t.default=T,"3450235017")},155:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return d}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(145),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(156),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var p=n(35);n.d(t,"parsePath",function(){return p.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,n){var a;e.exports=(a=n(162))&&a.default||a},162:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(53),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},167:function(e,t,n){e.exports=n.p+"static/gatsby-4a9773549091c227cd2eb82ccd9c5e3a.png"},168:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.img,a=e.alt;return i.a.createElement(o.Fragment,null,i.a.createElement("div",{style:{position:"absolute",width:"100%",height:400}},i.a.createElement("img",{src:n,style:{zIndex:-1,position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center center"},alt:a}),t),i.a.createElement("div",{style:{height:300}}))},t}(o.Component);t.a=c},170:function(e,t,n){var a=n(184).Symbol;e.exports=a},171:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=(n(34),n(155)),l=n(146),u=n(199),s=n.n(u),p=n(200),f=n.n(p),m=n(151),d=n.n(m),h=n(158),g=n.n(h),y=n(201),b=n.n(y),E=n(157),v=n.n(E),x=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classes;return i.a.createElement("div",{className:e.appMenuSectionDesktop},i.a.createElement(g.a,{color:"inherit"},i.a.createElement("a",{href:"https://github.com/pjb0811",className:"icon"},i.a.createElement(v.a,{className:"fab fa-github"}))),i.a.createElement(g.a,{color:"inherit"},i.a.createElement("a",{href:"/tags",className:"icon"},i.a.createElement(v.a,{className:"fas fa-tag"}))),i.a.createElement(g.a,{color:"inherit"},i.a.createElement("a",{href:"mailto:pjb0811@gmail.com",className:"icon"},i.a.createElement(v.a,{className:"far fa-envelope"}))))},t}(o.Component),j=Object(l.withStyles)(function(e){var t;return{appMenuSectionDesktop:(t={display:"none"},t[e.breakpoints.up("sm")]={display:"flex"},t)}})(x),w=(n(52),n(160)),C=n(193),N=n.n(C),O=n(194),S=n.n(O),k=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classes;return i.a.createElement("div",{className:e.search},i.a.createElement("div",{className:e.searchIcon},i.a.createElement(N.a,null)),i.a.createElement(S.a,{placeholder:"Search…",classes:{root:e.searchInputRoot,input:e.searchInput}}))},t}(o.Component),R=Object(l.withStyles)(function(e){var t,n;return{search:(t={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(w.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(w.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},t[e.breakpoints.up("sm")]={marginLeft:3*e.spacing.unit,width:"auto"},t),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},searchInputRoot:{color:"inherit",width:"100%"},searchInput:(n={paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},n[e.breakpoints.up("md")]={width:200},n)}})(k),A=n(198),T=n.n(A),L=n(178),I=n.n(L),P=n(196),z=n.n(P),D=n(179),M=n.n(D),U=n(197),q=n.n(U),Z=n(180),F=n.n(Z),G=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classes;return i.a.createElement("div",{style:{width:250}},i.a.createElement("div",{className:e.sideHeader},i.a.createElement(d.a,{variant:"h6",color:"inherit",component:c.Link,to:"/"},"pjb0811.github.io")),i.a.createElement(z.a,null),i.a.createElement(I.a,null,i.a.createElement("a",{href:"https://github.com/pjb0811"},i.a.createElement(M.a,{button:!0},i.a.createElement(q.a,null,i.a.createElement(v.a,{className:"fab fa-github"})),i.a.createElement(F.a,{primary:"github"}))),i.a.createElement(M.a,{button:!0,component:c.Link,to:"/tags"},i.a.createElement(q.a,null,i.a.createElement(v.a,{className:"fas fa-tag"})),i.a.createElement(F.a,{primary:"tags"})),i.a.createElement("a",{href:"mailto:pjb0811@gmail.com"},i.a.createElement(M.a,{button:!0},i.a.createElement(q.a,null,i.a.createElement(v.a,{className:"far fa-envelope"})),i.a.createElement(F.a,{primary:"mail"})))))},t}(o.Component),B=Object(l.withStyles)(function(e){return{sideHeader:Object.assign({},e.mixins.toolbar,{display:"flex",justifyContent:"center",alignItems:"center"})}})(G),V=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={drawer:{open:!1}},t.toggleDrawer=function(e){return function(){t.setState({drawer:{open:e}})}},t}return r()(t,e),t.prototype.render=function(){var e=this.props.classes,t=this.state.drawer;return i.a.createElement(o.Fragment,null,i.a.createElement(T.a,{open:t.open,onClose:this.toggleDrawer(!1)},i.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer(!1),onKeyDown:this.toggleDrawer(!1)},i.a.createElement(B,null))),i.a.createElement("div",{style:{width:"100%"}},i.a.createElement(s.a,{position:"fixed"},i.a.createElement(f.a,null,i.a.createElement(g.a,{color:"inherit","aria-label":"Menu",onClick:this.toggleDrawer(!0),style:{marginLeft:-12,marginRight:20}},i.a.createElement(b.a,null)),i.a.createElement(d.a,{variant:"h6",color:"inherit",className:e.appBarTitle,component:c.Link,to:"/"},"pjb0811.github.io"),i.a.createElement("div",{style:{flexGrow:1}}),i.a.createElement(R,null),i.a.createElement(j,null)))),i.a.createElement("div",{className:e.appBarSpace}))},t}(o.Component),_=Object(l.withStyles)(function(e){var t;return{appBarSpace:Object.assign({},e.mixins.toolbar,{marginBottom:10}),appBarTitle:(t={display:"none"},t[e.breakpoints.up("sm")]={display:"block"},t)}})(V),H=n(161),J=n.n(H),Q=n(167),W=n.n(Q),Y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classes;return i.a.createElement("div",{className:e.footerRoot},i.a.createElement(J.a,{item:!0,xs:12},i.a.createElement(d.a,{variant:"subtitle2",color:"inherit",align:"center"},"Copyright © 2018. pjb0811 All rights reserved."),i.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},i.a.createElement(g.a,{color:"inherit"},i.a.createElement("a",{href:"https://github.com/pjb0811",className:"icon"},i.a.createElement(v.a,{className:"fab fa-github",fontSize:"small"}))),i.a.createElement(g.a,{color:"inherit"},i.a.createElement("a",{href:"mailto:pjb0811@gmail.com",className:"icon"},i.a.createElement(v.a,{className:"far fa-envelope",fontSize:"small"}))),i.a.createElement(g.a,{color:"inherit"},i.a.createElement("a",{href:"/rss.xml",className:"icon"},i.a.createElement(v.a,{className:"fas fa-rss",fontSize:"small"})))),i.a.createElement(d.a,{variant:"subtitle2",color:"inherit",align:"center"},"Powered by"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},i.a.createElement("img",{src:W.a,alt:"gatsby",style:{width:24,height:24,verticalAlign:"middle",marginLeft:10}})))))},t}(o.Component),K=Object(l.withStyles)(function(e){return{footerRoot:{padding:20,background:e.palette.secondary.main}}})(Y),$=(n(202),n(204)),X=n.n($),ee=n(203),te=n.n(ee),ne=n(165),ae=Object(l.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:{main:"#448AFF"},secondary:{main:"#EEEEEE"}}});function re(){return{theme:ae,jss:Object(ne.create)(Object(l.jssPreset)()),generateClassName:Object(l.createGenerateClassName)()}}var oe=function(e){return function(t){function n(e){var n;return(n=t.call(this,e)||this).muiPageContext=re(),n}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},a.render=function(){return i.a.createElement(te.a,{jss:this.muiPageContext.jss,generateClassName:this.muiPageContext.generateClassName},i.a.createElement(l.MuiThemeProvider,{theme:this.muiPageContext.theme},i.a.createElement(X.a,null),i.a.createElement(e,this.props)))},n}(i.a.Component)},ie=n(163),ce=n.n(ie),le=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(o.Fragment,null,i.a.createElement(ce.a,null,i.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.1.0/css/all.css",media:"all"})),i.a.createElement(_,null),e,i.a.createElement(K,null))},t}(i.a.Component);t.a=oe(le)},182:function(e,t){var n=Array.isArray;e.exports=n},183:function(e,t,n){var a=n(205),r=n(222),o="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||r(e)&&a(e)==o}},184:function(e,t,n){var a=n(219),r="object"==typeof self&&self&&self.Object===Object&&self,o=a||r||Function("return this")();e.exports=o},205:function(e,t,n){var a=n(170),r=n(220),o=n(221),i="[object Null]",c="[object Undefined]",l=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?c:i:l&&l in Object(e)?r(e):o(e)}},209:function(e,t,n){var a=n(223);e.exports=function(e){return null==e?"":a(e)}},219:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(164))},220:function(e,t,n){var a=n(170),r=Object.prototype,o=r.hasOwnProperty,i=r.toString,c=a?a.toStringTag:void 0;e.exports=function(e){var t=o.call(e,c),n=e[c];try{e[c]=void 0;var a=!0}catch(e){}var r=i.call(e);return a&&(t?e[c]=n:delete e[c]),r}},221:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},222:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},223:function(e,t,n){var a=n(170),r=n(224),o=n(182),i=n(183),c=1/0,l=a?a.prototype:void 0,u=l?l.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return r(t,e)+"";if(i(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-c?"-0":n}},224:function(e,t){e.exports=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r}},226:function(e,t,n){e.exports=n.p+"static/tags-f255c38ccd7fde9db031f6beda32f8fb.jpg"},450:function(e,t,n){var a=n(451)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=a},451:function(e,t,n){var a=n(452),r=n(453),o=n(456),i=RegExp("['’]","g");e.exports=function(e){return function(t){return a(o(r(t).replace(i,"")),e,"")}}},452:function(e,t){e.exports=function(e,t,n,a){var r=-1,o=null==e?0:e.length;for(a&&o&&(n=e[++r]);++r<o;)n=t(n,e[r],r,e);return n}},453:function(e,t,n){var a=n(454),r=n(209),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(o,a).replace(i,"")}},454:function(e,t,n){var a=n(455)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=a},455:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},456:function(e,t,n){var a=n(457),r=n(458),o=n(209),i=n(459);e.exports=function(e,t,n){return e=o(e),void 0===(t=n?void 0:t)?r(e)?i(e):a(e):e.match(t)||[]}},457:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},458:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},459:function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+n+"]",r="\\d+",o="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",c="[^\\ud800-\\udfff"+n+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",p="(?:"+i+"|"+c+")",f="(?:"+s+"|"+c+")",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",d="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,u].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),h="(?:"+[o,l,u].join("|")+")"+d,g=RegExp([s+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,s,"$"].join("|")+")",f+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,s+p,"$"].join("|")+")",s+"?"+p+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,h].join("|"),"g");e.exports=function(e){return e.match(g)||[]}},460:function(e,t,n){"use strict";var a=n(33);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(461))},461:function(e,t,n){"use strict";var a=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(143)),o=a(n(48)),i=a(n(144)),c=a(n(0)),l=(a(n(4)),a(n(147))),u=a(n(148)),s=n(159),p=function(e){return{root:{position:"relative",display:"inline-flex",verticalAlign:"middle"},badge:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",top:-11,right:-11,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeight,fontSize:e.typography.pxToRem(12),width:22,height:22,borderRadius:"50%",backgroundColor:e.palette.color,color:e.palette.textColor,zIndex:1},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorError:{backgroundColor:e.palette.error.main,color:e.palette.error.contrastText}}};function f(e){var t=e.badgeContent,n=e.children,a=e.classes,u=e.className,p=e.color,f=e.component,m=(0,i.default)(e,["badgeContent","children","classes","className","color","component"]),d=(0,l.default)(a.badge,(0,o.default)({},a["color".concat((0,s.capitalize)(p))],"default"!==p));return c.default.createElement(f,(0,r.default)({className:(0,l.default)(a.root,u)},m),n,c.default.createElement("span",{className:d},t))}t.styles=p,f.propTypes={},f.defaultProps={color:"default",component:"span"};var m=(0,u.default)(p,{name:"MuiBadge"})(f);t.default=m}}]);
//# sourceMappingURL=component---src-pages-tags-jsx-49578ae313d1b48ded21.js.map