(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{208:function(e,t,a){"use strict";a.r(t);a(57);var n=a(7),r=a.n(n),i=(a(37),a(0)),o=a.n(i),s=a(236),c=a.n(s),l=a(217),u=a(243),m=a(229),p=a.n(m),h=a(211),f=a(238),d=a.n(f),g=a(225),E=a.n(g),y=a(218),b=a.n(y),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.direction,a=e.rel,n=e.classes;return t?o.a.createElement(d.a,{component:l.Link,variant:"contained",color:"primary",to:t.fields.slug},"prev"===a&&o.a.createElement(E.a,{className:"fas fa-arrow-left "+n.leftIcon}),o.a.createElement(b.a,{variant:"button",color:"inherit",noWrap:!0,className:n.text},t.frontmatter.title),"next"===a&&o.a.createElement(E.a,{className:"fas fa-arrow-right "+n.rightIcon})):null},t}(i.Component),w=Object(h.withStyles)(function(e){return{leftIcon:{marginRight:e.spacing.unit},rightIcon:{marginLeft:e.spacing.unit},text:{width:100}}},{name:"moveButton"})(v),N=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.previous,a=e.next,n=e.classes;return o.a.createElement(p.a,{container:!0,direction:"row",justify:"space-around",alignItems:"center",className:n.container},o.a.createElement(w,{direction:t,rel:"prev"}),o.a.createElement(w,{direction:a,rel:"next"}))},t}(i.Component),x=Object(h.withStyles)(function(e){return{container:{padding:20}}},{name:"postNav"})(N),C=a(482),j=a(228),k=a.n(j),I=a(242),S=a(292),_=(a(290),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.translation,a=e.classes;return t?o.a.createElement("div",{className:a.root},o.a.createElement(b.a,{variant:"subtitle2",gutterBottom:!0},"이 글은 ",o.a.createElement("a",{href:t.link},'"',t.title,'"'),"를 번역한 글입니다."),o.a.createElement(b.a,{variant:"subtitle2",gutterBottom:!0},"의역과 오역이 난무하니 자세한 내용은 해당 블로그를 참조하시면 이해가 더 쉬울 것 같습니다."),o.a.createElement(b.a,{variant:"subtitle2"},"억지로 번역하면 뜻이 더 모호해지는 단어들은 그 자체로 두었습니다.")):null},t}(i.Component)),R=Object(h.withStyles)(function(e){return{root:{padding:e.spacing.unit,background:e.palette.secondary.main,margin:2*e.spacing.unit+"px 0"}}},{name:"translationGuide"})(_);a(486);a.d(t,"pageQuery",function(){return O});var L=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=e.excerpt,a=this.props.classes,n={identifier:e.id,title:e.frontmatter.title};return o.a.createElement(u.a,{location:this.props.location},o.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:""+e.frontmatter.title}),o.a.createElement(I.a,{img:e.frontmatter.mainImage.childImageSharp.sizes.src,alt:""+e.frontmatter.title}),o.a.createElement("div",{className:a.root},o.a.createElement(p.a,{container:!0,spacing:24,className:a.container},o.a.createElement(p.a,{item:!0,xs:12},o.a.createElement(k.a,{className:a.paper,elevation:1},o.a.createElement(S.a,{title:e.frontmatter.title,subTitle:e.frontmatter.date}),o.a.createElement("div",{className:a.buttons},e.frontmatter.tags.map(function(e,t){return o.a.createElement(d.a,{key:t,color:"primary",className:a.button,component:l.Link,to:"/tags/"+e},e)})),o.a.createElement(R,{translation:e.frontmatter.translation}),o.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:e.html}}))),o.a.createElement(p.a,{item:!0,xs:12},o.a.createElement(k.a,{className:a.paper,elevation:1},o.a.createElement(C.DiscussionEmbed,{shortname:"pjb0811",config:n}))),o.a.createElement(x,this.props.pageContext))))},t}(o.a.Component),O=(t.default=Object(h.withStyles)(function(e){var t;return{root:(t={},t[e.breakpoints.up("sm")]={width:600},t[e.breakpoints.up("md")]={width:960},t.margin="20px auto",t),container:{width:"100%",margin:0},buttons:{display:"flex",justifyContent:"flex-start",flexWrap:"wrap",marginBottom:e.spacing.unit},button:{margin:e.spacing.unit},paper:Object.assign({},e.mixins.gutters(),{padding:4*e.spacing.unit})}},{name:"blogPost"})(L),"2964409469")},217:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(214),c=a.n(s);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var l=a(224),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var m=a(38);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),h=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},224:function(e,t,a){var n;e.exports=(n=a(237))&&n.default||n},237:function(e,t,a){"use strict";a.r(t);a(37);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(61),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},240:function(e,t,a){e.exports=a.p+"static/gatsby-4a9773549091c227cd2eb82ccd9c5e3a.png"},241:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return c});a(106),a(58),a(107),a(268);var r=a(244),i=a(211),o=Object(i.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:{main:"#448AFF"},secondary:{main:"#EEEEEE"}}});function s(){return{theme:o,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)({dangerouslyUseGlobalCSS:!0,productionPrefix:"c"})}}function c(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=s()),n.__INIT_MATERIAL_UI__):s()}}).call(this,a(248),a(230))},242:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(211),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.img,n=e.alt,r=e.classes;return o.a.createElement(i.Fragment,null,o.a.createElement("div",{className:r.root},o.a.createElement("img",{src:a,className:r.img,alt:n}),t),o.a.createElement("div",{className:r.space}))},t}(i.Component);t.a=Object(s.withStyles)(function(e){return{root:{position:"absolute",width:"100%",height:400},img:{zIndex:-1,position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center center"},space:{height:300}}},{name:"imageCover"})(c)},243:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=(a(37),a(217)),c=a(211),l=a(263),u=a.n(l),m=a(264),p=a.n(m),h=a(218),f=a.n(h),d=a(226),g=a.n(d),E=a(265),y=a.n(E),b=a(225),v=a.n(b),w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classes;return o.a.createElement("div",{className:e.sectionDesktop},o.a.createElement(g.a,{color:"inherit"},o.a.createElement("a",{href:"https://github.com/pjb0811",className:"icon"},o.a.createElement(v.a,{className:"fab fa-github"}))),o.a.createElement(g.a,{color:"inherit"},o.a.createElement("a",{href:"/tags",className:"icon"},o.a.createElement(v.a,{className:"fas fa-tag"}))),o.a.createElement(g.a,{color:"inherit"},o.a.createElement("a",{href:"/analysis",className:"icon"},o.a.createElement(v.a,{className:"fas fa-chart-bar"}))))},t}(i.Component),N=Object(c.withStyles)(function(e){var t;return{sectionDesktop:(t={display:"none"},t[e.breakpoints.up("sm")]={display:"flex"},t)}},{name:"appMenu"})(w),x=(a(57),a(60),a(231)),C=a(258),j=a.n(C),k=a(259),I=a.n(k),S=a(254),_=a.n(S),R=a(253),L=a.n(R),O=a(228),T=a.n(O),P=a(252),q=a.n(P),A=a(232),M=a.n(A),D=a(233),B=a.n(D),F=a(234),U=a.n(F),G=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.open,a=e.results,n=e.classes,r=e.handleClose,i=e.anchorEl;return o.a.createElement(q.a,{open:t,anchorEl:i,transition:!0,disablePortal:!0,className:n.popper},function(e){var t=e.TransitionProps,i=e.placement;return o.a.createElement(L.a,Object.assign({},t,{id:"menu-list-grow",style:{transformOrigin:"bottom"===i?"center top":"center bottom"}}),o.a.createElement(T.a,null,o.a.createElement(_.a,{onClickAway:r},o.a.createElement(M.a,{className:n.list},a.map(function(e){return o.a.createElement(B.a,{button:!0,key:e.path,component:s.Link,to:e.path},o.a.createElement(U.a,{primary:e.title,primaryTypographyProps:{variant:"button",color:"textPrimary",noWrap:!0},secondary:e.tags.join(", ")}))})))))})},t}(i.Component),z=Object(c.withStyles)(function(e){return{popper:{marginTop:10,width:"100%"},list:{maxHeight:300,overflow:"auto"},chips:{display:"flex",justifyContent:"flex-start",flexWrap:"wrap"},chip:{margin:e.spacing.unit/2}}},{name:"searchList"})(G),K=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={open:!1,query:"",results:[]},t.search=function(e){var a=e.target.value,n=t.getSearchResults(a);t.setState({open:!!n.length,query:a,results:n})},t.checkEnterKey=function(e){"Enter"===e.key&&t.search(e)},t.onSuccess=function(){t.setState({open:!1})},t.handleClose=function(e){t.anchorEl.contains(e.target)||t.setState({open:!1})},t}r()(t,e);var a=t.prototype;return a.getSearchResults=function(e){return e&&window.__LUNR__?window.__LUNR__.en.index.search(e).map(function(e){var t=e.ref;return window.__LUNR__.en.store[t]}):[]},a.render=function(){var e=this,t=this.props.classes,a=this.state,n=a.open,r=a.query,i=a.results;return o.a.createElement("div",{className:t.search},o.a.createElement("div",{className:t.searchIcon},o.a.createElement(j.a,null)),o.a.createElement(I.a,{placeholder:"Search…",classes:{root:t.searchInputRoot,input:t.searchInput},inputRef:function(t){e.anchorEl=t},onFocus:this.search,onChange:this.search,onKeyDown:this.checkEnterKey}),o.a.createElement(z,{open:n,query:r,handleClose:this.handleClose,anchorEl:this.anchorEl,results:i}))},t}(i.Component),Q=Object(c.withStyles)(function(e){var t,a;return{search:(t={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(x.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(x.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},t[e.breakpoints.up("sm")]={marginLeft:3*e.spacing.unit,width:"auto"},t),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},searchInputRoot:{color:"inherit",width:"100%"},searchInput:(a={paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},a[e.breakpoints.up("md")]={width:200},a)}},{name:"searchBox"})(K),W=a(262),H=a.n(W),J=a(260),V=a.n(J),X=a(261),Y=a.n(X),Z=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement("div",{className:e.header},o.a.createElement(f.a,{variant:"h6",color:"inherit",component:s.Link,to:"/"},"pjb0811.github.io")),o.a.createElement(V.a,null),o.a.createElement(M.a,null,o.a.createElement("a",{href:"https://github.com/pjb0811"},o.a.createElement(B.a,{button:!0},o.a.createElement(Y.a,null,o.a.createElement(v.a,{className:"fab fa-github"})),o.a.createElement(U.a,{primary:"github"}))),o.a.createElement(B.a,{button:!0,component:s.Link,to:"/tags"},o.a.createElement(Y.a,null,o.a.createElement(v.a,{className:"fas fa-tag"})),o.a.createElement(U.a,{primary:"tags"})),o.a.createElement(B.a,{button:!0,component:s.Link,to:"/analysis"},o.a.createElement(Y.a,null,o.a.createElement(v.a,{className:"fas fa-chart-bar"})),o.a.createElement(U.a,{primary:"analysis"})),o.a.createElement("a",{href:"mailto:pjb0811@gmail.com"},o.a.createElement(B.a,{button:!0},o.a.createElement(Y.a,null,o.a.createElement(v.a,{className:"far fa-envelope"})),o.a.createElement(U.a,{primary:"mail"})))))},t}(i.Component),$=Object(c.withStyles)(function(e){return{root:{width:250},header:Object.assign({},e.mixins.toolbar,{display:"flex",justifyContent:"center",alignItems:"center"})}},{name:"sideList"})(Z),ee=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={drawer:{open:!1}},t.toggleDrawer=function(e){return function(){t.setState({drawer:{open:e}})}},t}return r()(t,e),t.prototype.render=function(){var e=this.props.classes,t=this.state.drawer;return o.a.createElement(i.Fragment,null,o.a.createElement(H.a,{open:t.open,onClose:this.toggleDrawer(!1)},o.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer(!1),onKeyDown:this.toggleDrawer(!1)},o.a.createElement($,null))),o.a.createElement("div",{classes:e.root},o.a.createElement(u.a,{position:"fixed"},o.a.createElement(p.a,null,o.a.createElement(g.a,{color:"inherit","aria-label":"Menu",onClick:this.toggleDrawer(!0),className:e.menuIcon},o.a.createElement(y.a,null)),o.a.createElement(f.a,{variant:"h6",color:"inherit",className:e.title,component:s.Link,to:"/"},"pjb0811.github.io"),o.a.createElement("div",{className:e.grow}),o.a.createElement(Q,null),o.a.createElement(N,null)))),o.a.createElement("div",{className:e.space}))},t}(i.Component),te=Object(c.withStyles)(function(e){var t;return{root:{width:"100%"},grow:{flexGrow:1},space:Object.assign({},e.mixins.toolbar,{marginBottom:10}),menuIcon:{marginLeft:-12,marginRight:20},title:(t={display:"none"},t[e.breakpoints.up("sm")]={display:"block"},t)}},{name:"appBar"})(ee),ae=a(229),ne=a.n(ae),re=a(240),ie=a.n(re),oe=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement(ne.a,{item:!0,xs:12},o.a.createElement(f.a,{variant:"subtitle2",color:"inherit",align:"center"},"Copyright © 2018. pjb0811 All rights reserved."),o.a.createElement("div",{className:e.container},o.a.createElement(g.a,{color:"inherit"},o.a.createElement("a",{href:"https://github.com/pjb0811",className:"icon"},o.a.createElement(v.a,{className:"fab fa-github",fontSize:"small"}))),o.a.createElement(g.a,{color:"inherit"},o.a.createElement("a",{href:"mailto:pjb0811@gmail.com",className:"icon"},o.a.createElement(v.a,{className:"far fa-envelope",fontSize:"small"}))),o.a.createElement(g.a,{color:"inherit"},o.a.createElement("a",{href:"/rss.xml",className:"icon"},o.a.createElement(v.a,{className:"fas fa-rss",fontSize:"small"})))),o.a.createElement(f.a,{variant:"subtitle2",color:"inherit",align:"center",className:e.copyright},"Powered by"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/"},o.a.createElement("img",{src:ie.a,alt:"gatsby",className:e.gatsbyImg})))))},t}(i.Component),se=Object(c.withStyles)(function(e){return{root:{padding:20,background:e.palette.secondary.main},container:{display:"flex",justifyContent:"center"},gatsbyImg:{width:24,height:24,verticalAlign:"middle",marginLeft:10},copyright:{display:"flex",justifyContent:"center",alignItems:"center"}}},{name:"footer"})(oe),ce=(a(266),a(269)),le=a.n(ce),ue=a(267),me=a.n(ue),pe=a(241);var he=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(pe.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return o.a.createElement(me.a,{registry:this.muiPageContext.sheetsRegistry,generateClassName:this.muiPageContext.generateClassName},o.a.createElement(c.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(le.a,null),o.a.createElement(e,this.props)))},a}(o.a.Component)},fe=a(236),de=a.n(fe),ge=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(i.Fragment,null,o.a.createElement(de.a,null,o.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.1.0/css/all.css",media:"all"})),o.a.createElement(te,null),e,o.a.createElement(se,null))},t}(o.a.Component);t.a=he(ge)},292:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(218),c=a.n(s),l=a(211),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.subTitle,n=e.classes;return o.a.createElement(i.Fragment,null,o.a.createElement(c.a,{variant:"h3",className:n.title},t),o.a.createElement(c.a,{variant:"subtitle1",align:"right"},a))},t}(i.Component);t.a=Object(l.withStyles)(function(e){return{title:{marginBottom:20}}},{name:"pageTitle"})(u)}}]);
//# sourceMappingURL=component---src-components-pages-blog-post-jsx-2517d59234fcf79c53f3.js.map