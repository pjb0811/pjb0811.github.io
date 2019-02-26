(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{327:function(e,t,a){"use strict";a.r(t);a(86);var n=a(10),r=a.n(n),i=(a(55),a(0)),o=a.n(i),s=a(345),c=a.n(s),l=a(333),m=a(352),u=a(340),p=a.n(u),h=a(85),d=a(347),f=a.n(d),g=a(336),E=a.n(g),y=a(334),b=a.n(y),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.direction,a=e.rel,n=e.classes;return t?o.a.createElement(f.a,{component:l.Link,variant:"contained",color:"primary",to:t.fields.slug},"prev"===a&&o.a.createElement(E.a,{className:"fas fa-arrow-left "+n.leftIcon}),o.a.createElement(b.a,{variant:"button",color:"inherit",noWrap:!0,className:n.text},t.frontmatter.title),"next"===a&&o.a.createElement(E.a,{className:"fas fa-arrow-right "+n.rightIcon})):null},t}(i.Component),w=Object(h.withStyles)(function(e){return{leftIcon:{marginRight:e.spacing.unit},rightIcon:{marginLeft:e.spacing.unit},text:{width:100}}},{name:"moveButton"})(v),N=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.previous,a=e.next,n=e.classes;return o.a.createElement(p.a,{container:!0,direction:"row",justify:"space-around",alignItems:"center",className:n.container},o.a.createElement(w,{direction:t,rel:"prev"}),o.a.createElement(w,{direction:a,rel:"next"}))},t}(i.Component),x=Object(h.withStyles)(function(e){return{container:{padding:20}}},{name:"postNav"})(N),C=a(497),j=a(339),k=a.n(j),I=a(351),S=a(381),_=(a(379),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.translation,a=e.classes;return t?o.a.createElement("div",{className:a.root},o.a.createElement(b.a,{variant:"subtitle2",gutterBottom:!0},"이 글은 ",o.a.createElement("a",{href:t.link},'"',t.title,'"'),"를 번역한 글입니다."),o.a.createElement(b.a,{variant:"subtitle2",gutterBottom:!0},"의역과 오역이 난무하니 자세한 내용은 해당 블로그를 참조하시면 이해가 더 쉬울 것 같습니다."),o.a.createElement(b.a,{variant:"subtitle2"},"억지로 번역하면 뜻이 더 모호해지는 단어들은 그 자체로 두었습니다.")):null},t}(i.Component)),R=Object(h.withStyles)(function(e){return{root:{padding:e.spacing.unit,background:e.palette.secondary.main,margin:2*e.spacing.unit+"px 0"}}},{name:"translationGuide"})(_);a(501);a.d(t,"pageQuery",function(){return O});var L=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=this.props.data,a=t.site,n=t.markdownRemark,r=n.frontmatter,i=r.title,s=r.mainImage,u=this.props.classes,h={identifier:n.id,title:i};return o.a.createElement(m.a,{location:this.props.location},o.a.createElement(c.a,{title:""+i,meta:[{name:"description",content:n.excerpt},{name:"image",content:""+a.siteMetadata.siteUrl+s.childImageSharp.sizes.src},{name:"og:url",content:""+a.siteMetadata.siteUrl+e.slug},{name:"og:type",content:"article"},{name:"og:title",content:i},{name:"og:description",content:n.excerpt},{name:"og:image",content:""+a.siteMetadata.siteUrl+s.childImageSharp.sizes.src}]}),o.a.createElement(I.a,{img:s.childImageSharp.sizes.src,alt:""+i}),o.a.createElement("div",{className:u.root},o.a.createElement(p.a,{container:!0,spacing:24,className:u.container},o.a.createElement(p.a,{item:!0,xs:12},o.a.createElement(k.a,{className:u.paper,elevation:1},o.a.createElement(S.a,{title:i,subTitle:n.frontmatter.date}),o.a.createElement("div",{className:u.buttons},n.frontmatter.tags.map(function(e,t){return o.a.createElement(f.a,{key:t,color:"primary",className:u.button,component:l.Link,to:"/tags/"+e},e)})),o.a.createElement(R,{translation:n.frontmatter.translation}),o.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:n.html}}))),o.a.createElement(p.a,{item:!0,xs:12},o.a.createElement(k.a,{className:u.paper,elevation:1},o.a.createElement(C.DiscussionEmbed,{shortname:"pjb0811",config:h}))),o.a.createElement(x,this.props.pageContext))))},t}(o.a.Component),O=(t.default=Object(h.withStyles)(function(e){var t;return{root:(t={},t[e.breakpoints.up("sm")]={width:600},t[e.breakpoints.up("md")]={width:960},t.margin="20px auto",t),container:{width:"100%",margin:0},buttons:{display:"flex",justifyContent:"flex-start",flexWrap:"wrap",marginBottom:e.spacing.unit},button:{margin:e.spacing.unit},paper:Object.assign({},e.mixins.gutters(),{padding:4*e.spacing.unit})}},{name:"blogPost"})(L),"120781662")},333:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return d}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),i=a(1),o=a.n(i),s=a(331),c=a.n(s);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var l=a(335),m=a.n(l);a.d(t,"PageRenderer",function(){return m.a});var u=a(56);a.d(t,"parsePath",function(){return u.a});var p=r.a.createContext({}),h=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},335:function(e,t,a){var n;e.exports=(n=a(346))&&n.default||n},346:function(e,t,a){"use strict";a.r(t);a(55);var n=a(0),r=a.n(n),i=a(1),o=a.n(i),s=a(89),c=a(5),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},349:function(e,t,a){e.exports=a.p+"static/gatsby-4a9773549091c227cd2eb82ccd9c5e3a.png"},350:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return c});a(159),a(87),a(162),a(370);var r=a(39),i=a(85),o=Object(i.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:{main:"#448AFF"},secondary:{main:"#EEEEEE"}}});function s(){return{theme:o,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function c(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=s()),n.__INIT_MATERIAL_UI__):s()}}).call(this,a(355),a(57))},351:function(e,t,a){"use strict";var n=a(10),r=a.n(n),i=a(0),o=a.n(i),s=a(85),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.img,n=e.alt,r=e.classes;return o.a.createElement(i.Fragment,null,o.a.createElement("div",{className:r.root},o.a.createElement("img",{src:a,className:r.img,alt:n}),t),o.a.createElement("div",{className:r.space}))},t}(i.Component);t.a=Object(s.withStyles)(function(e){return{root:{position:"absolute",width:"100%",height:400},img:{zIndex:-1,position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center center"},space:{height:300}}},{name:"imageCover"})(c)},352:function(e,t,a){"use strict";var n=a(10),r=a.n(n),i=a(0),o=a.n(i),s=(a(55),a(333)),c=a(85),l=a(366),m=a.n(l),u=a(367),p=a.n(u),h=a(334),d=a.n(h),f=a(337),g=a.n(f),E=a(368),y=a.n(E),b=a(336),v=a.n(b),w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classes;return o.a.createElement("div",{className:e.sectionDesktop},o.a.createElement(g.a,{color:"inherit"},o.a.createElement("a",{href:"https://github.com/pjb0811",className:"icon"},o.a.createElement(v.a,{className:"fab fa-github"}))),o.a.createElement(g.a,{color:"inherit"},o.a.createElement("a",{href:"/tags",className:"icon"},o.a.createElement(v.a,{className:"fas fa-tag"}))),o.a.createElement(g.a,{color:"inherit"},o.a.createElement("a",{href:"/analysis",className:"icon"},o.a.createElement(v.a,{className:"fas fa-chart-bar"}))))},t}(i.Component),N=Object(c.withStyles)(function(e){var t;return{sectionDesktop:(t={display:"none"},t[e.breakpoints.up("sm")]={display:"flex"},t)}},{name:"appMenu"})(w),x=(a(86),a(88),a(158)),C=a(361),j=a.n(C),k=a(362),I=a.n(k),S=a(358),_=a.n(S),R=a(357),L=a.n(R),O=a(339),T=a.n(O),P=a(356),M=a.n(P),q=a(341),A=a.n(q),D=a(342),U=a.n(D),B=a(343),F=a.n(B),z=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.open,a=e.results,n=e.classes,r=e.handleClose,i=e.anchorEl;return o.a.createElement(M.a,{open:t,anchorEl:i,transition:!0,disablePortal:!0,className:n.popper},function(e){var t=e.TransitionProps,i=e.placement;return o.a.createElement(L.a,Object.assign({},t,{id:"menu-list-grow",style:{transformOrigin:"bottom"===i?"center top":"center bottom"}}),o.a.createElement(T.a,null,o.a.createElement(_.a,{onClickAway:r},o.a.createElement(A.a,{className:n.list},a.map(function(e){return o.a.createElement(U.a,{button:!0,key:e.path,component:s.Link,to:e.path},o.a.createElement(F.a,{primary:e.title,primaryTypographyProps:{variant:"button",color:"textPrimary",noWrap:!0},secondary:e.tags.join(", ")}))})))))})},t}(i.Component),G=Object(c.withStyles)(function(e){return{popper:{marginTop:10,width:"100%"},list:{maxHeight:300,overflow:"auto"},chips:{display:"flex",justifyContent:"flex-start",flexWrap:"wrap"},chip:{margin:e.spacing.unit/2}}},{name:"searchList"})(z),K=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={open:!1,query:"",results:[]},t.search=function(e){var a=e.target.value,n=t.getSearchResults(a);t.setState({open:!!n.length,query:a,results:n})},t.checkEnterKey=function(e){"Enter"===e.key&&t.search(e)},t.onSuccess=function(){t.setState({open:!1})},t.handleClose=function(e){t.anchorEl.contains(e.target)||t.setState({open:!1})},t}r()(t,e);var a=t.prototype;return a.getSearchResults=function(e){return e&&window.__LUNR__?window.__LUNR__.en.index.search(e).map(function(e){var t=e.ref;return window.__LUNR__.en.store[t]}):[]},a.render=function(){var e=this,t=this.props.classes,a=this.state,n=a.open,r=a.query,i=a.results;return o.a.createElement("div",{className:t.search},o.a.createElement("div",{className:t.searchIcon},o.a.createElement(j.a,null)),o.a.createElement(I.a,{placeholder:"Search…",classes:{root:t.searchInputRoot,input:t.searchInput},inputRef:function(t){e.anchorEl=t},onFocus:this.search,onChange:this.search,onKeyDown:this.checkEnterKey}),o.a.createElement(G,{open:n,query:r,handleClose:this.handleClose,anchorEl:this.anchorEl,results:i}))},t}(i.Component),Q=Object(c.withStyles)(function(e){var t,a;return{search:(t={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(x.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(x.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},t[e.breakpoints.up("sm")]={marginLeft:3*e.spacing.unit,width:"auto"},t),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},searchInputRoot:{color:"inherit",width:"100%"},searchInput:(a={paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},a[e.breakpoints.up("md")]={width:200},a)}},{name:"searchBox"})(K),W=a(365),H=a.n(W),J=a(363),V=a.n(J),X=a(364),Y=a.n(X),Z=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement("div",{className:e.header},o.a.createElement(d.a,{variant:"h6",color:"inherit",component:s.Link,to:"/"},"pjb0811.github.io")),o.a.createElement(V.a,null),o.a.createElement(A.a,null,o.a.createElement("a",{href:"https://github.com/pjb0811"},o.a.createElement(U.a,{button:!0},o.a.createElement(Y.a,null,o.a.createElement(v.a,{className:"fab fa-github"})),o.a.createElement(F.a,{primary:"github"}))),o.a.createElement(U.a,{button:!0,component:s.Link,to:"/tags"},o.a.createElement(Y.a,null,o.a.createElement(v.a,{className:"fas fa-tag"})),o.a.createElement(F.a,{primary:"tags"})),o.a.createElement(U.a,{button:!0,component:s.Link,to:"/analysis"},o.a.createElement(Y.a,null,o.a.createElement(v.a,{className:"fas fa-chart-bar"})),o.a.createElement(F.a,{primary:"analysis"})),o.a.createElement("a",{href:"mailto:pjb0811@gmail.com"},o.a.createElement(U.a,{button:!0},o.a.createElement(Y.a,null,o.a.createElement(v.a,{className:"far fa-envelope"})),o.a.createElement(F.a,{primary:"mail"})))))},t}(i.Component),$=Object(c.withStyles)(function(e){return{root:{width:250},header:Object.assign({},e.mixins.toolbar,{display:"flex",justifyContent:"center",alignItems:"center"})}},{name:"sideList"})(Z),ee=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={drawer:{open:!1}},t.toggleDrawer=function(e){return function(){t.setState({drawer:{open:e}})}},t}return r()(t,e),t.prototype.render=function(){var e=this.props.classes,t=this.state.drawer;return o.a.createElement(i.Fragment,null,o.a.createElement(H.a,{open:t.open,onClose:this.toggleDrawer(!1)},o.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer(!1),onKeyDown:this.toggleDrawer(!1)},o.a.createElement($,null))),o.a.createElement("div",{classes:e.root},o.a.createElement(m.a,{position:"fixed"},o.a.createElement(p.a,null,o.a.createElement(g.a,{color:"inherit","aria-label":"Menu",onClick:this.toggleDrawer(!0),className:e.menuIcon},o.a.createElement(y.a,null)),o.a.createElement(d.a,{variant:"h6",color:"inherit",className:e.title,component:s.Link,to:"/"},"pjb0811.github.io"),o.a.createElement("div",{className:e.grow}),o.a.createElement(Q,null),o.a.createElement(N,null)))),o.a.createElement("div",{className:e.space}))},t}(i.Component),te=Object(c.withStyles)(function(e){var t;return{root:{width:"100%"},grow:{flexGrow:1},space:Object.assign({},e.mixins.toolbar,{marginBottom:10}),menuIcon:{marginLeft:-12,marginRight:20},title:(t={display:"none"},t[e.breakpoints.up("sm")]={display:"block"},t)}},{name:"appBar"})(ee),ae=a(340),ne=a.n(ae),re=a(349),ie=a.n(re),oe=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement(ne.a,{item:!0,xs:12},o.a.createElement(d.a,{variant:"subtitle2",color:"inherit",align:"center"},"Copyright © 2018. pjb0811 All rights reserved."),o.a.createElement("div",{className:e.container},o.a.createElement(g.a,{color:"inherit"},o.a.createElement("a",{href:"https://github.com/pjb0811",className:"icon"},o.a.createElement(v.a,{className:"fab fa-github",fontSize:"small"}))),o.a.createElement(g.a,{color:"inherit"},o.a.createElement("a",{href:"mailto:pjb0811@gmail.com",className:"icon"},o.a.createElement(v.a,{className:"far fa-envelope",fontSize:"small"}))),o.a.createElement(g.a,{color:"inherit"},o.a.createElement("a",{href:"/rss.xml",className:"icon"},o.a.createElement(v.a,{className:"fas fa-rss",fontSize:"small"})))),o.a.createElement(d.a,{variant:"subtitle2",color:"inherit",align:"center",className:e.copyright},"Powered by"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/"},o.a.createElement("img",{src:ie.a,alt:"gatsby",className:e.gatsbyImg})))))},t}(i.Component),se=Object(c.withStyles)(function(e){return{root:{padding:20,background:e.palette.secondary.main},container:{display:"flex",justifyContent:"center"},gatsbyImg:{width:24,height:24,verticalAlign:"middle",marginLeft:10},copyright:{display:"flex",justifyContent:"center",alignItems:"center"}}},{name:"footer"})(oe),ce=(a(369),a(161)),le=a.n(ce),me=a(160),ue=a.n(me),pe=a(350);var he=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(pe.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return o.a.createElement(ue.a,{generateClassName:this.muiPageContext.generateClassName},o.a.createElement(c.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(le.a,null),o.a.createElement(e,this.props)))},a}(o.a.Component)},de=a(345),fe=a.n(de),ge=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(i.Fragment,null,o.a.createElement(fe.a,null,o.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.1.0/css/all.css",media:"all"})),o.a.createElement(te,null),e,o.a.createElement(se,null))},t}(o.a.Component);t.a=he(ge)},381:function(e,t,a){"use strict";var n=a(10),r=a.n(n),i=a(0),o=a.n(i),s=a(334),c=a.n(s),l=a(85),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.subTitle,n=e.classes;return o.a.createElement(i.Fragment,null,o.a.createElement(c.a,{variant:"h3",className:n.title},t),o.a.createElement(c.a,{variant:"subtitle1",align:"right"},a))},t}(i.Component);t.a=Object(l.withStyles)(function(e){return{title:{marginBottom:20}}},{name:"pageTitle"})(m)}}]);
//# sourceMappingURL=component---src-components-pages-blog-post-jsx-6ccbf100fa4f32f90179.js.map