"use strict";(self.webpackChunkgatsby_redux_material_ui_boilerplate=self.webpackChunkgatsby_redux_material_ui_boilerplate||[]).push([[882],{61564:function(e,n,t){t.d(n,{Z:function(){return E}});var r=t(59713),i=t.n(r),a=t(63038),o=t.n(a),c=t(6479),s=t.n(c),u=t(87462),l=t(63366),d=t(67294),p=t(85505),f=t(90600),h=t(43656),m=t(47761),x=t(49240),y=t(62717);function v(e){return(0,y.Z)("MuiIcon",e)}(0,t(35495).Z)("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var S=t(85893),g=["baseClassName","className","color","component","fontSize"],j=(0,h.ZP)("span",{name:"MuiIcon",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,"inherit"!==t.color&&n["color".concat((0,x.Z)(t.color))],n["fontSize".concat((0,x.Z)(t.fontSize))]]}})((function(e){var n=e.theme,t=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:{inherit:"inherit",small:n.typography.pxToRem(20),medium:n.typography.pxToRem(24),large:n.typography.pxToRem(36)}[t.fontSize],color:{primary:n.palette.primary.main,secondary:n.palette.secondary.main,info:n.palette.info.main,success:n.palette.success.main,warning:n.palette.warning.main,action:n.palette.action.active,error:n.palette.error.main,disabled:n.palette.action.disabled,inherit:void 0}[t.color]}})),b=d.forwardRef((function(e,n){var t=(0,m.Z)({props:e,name:"MuiIcon"}),r=t.baseClassName,i=void 0===r?"material-icons":r,a=t.className,o=t.color,c=void 0===o?"inherit":o,s=t.component,d=void 0===s?"span":s,h=t.fontSize,y=void 0===h?"medium":h,b=(0,l.Z)(t,g),w=(0,u.Z)({},t,{baseClassName:i,color:c,component:d,fontSize:y}),Z=function(e){var n=e.color,t=e.fontSize,r=e.classes,i={root:["root","inherit"!==n&&"color".concat((0,x.Z)(n)),"fontSize".concat((0,x.Z)(t))]};return(0,f.Z)(i,v,r)}(w);return(0,S.jsx)(j,(0,u.Z)({as:d,className:(0,p.default)(i,"notranslate",Z.root,a),ownerState:w,"aria-hidden":!0,ref:n},b))}));b.muiName="Icon";var w=b,Z=t(11521),C=t(66449),k=t(17951),z=t(22647),P=t(22840),I=(t(319),t(82374)),O=(0,h.ZP)(Z.Z)((function(){return{fontSize:"26px"}})),D=function(e){var n=e.onRefresh,t=(e.min,e.max,e.hidePagination),r=e.content2,i=e.renderItem,a=(e.showPrice,e.hideCopy,e.isLoading),c=e.dataArr,s=e.pageSize,u=void 0===s?15:s,l=(e.unmask,e.unmaskValue,e.handleClick,e.mask,e.displaySource,e.hideAuto),p=e.hideDl,f=((0,P.Z)("(min-width:600px)"),(0,C.Z)().palette,(0,d.useState)(c)),h=o()(f,2),m=(h[0],h[1],(0,d.useState)([])),x=o()(m,2),y=x[0],v=x[1],g=(0,d.useState)([]),j=o()(g,2),b=(j[0],j[1],(0,d.useState)(0)),w=o()(b,2),Z=(w[0],w[1],(0,d.useState)(0)),z=o()(Z,2),D=z[0],N=z[1],_=(0,d.useState)(!1),A=o()(_,2),R=A[0],E=A[1],L=(0,d.useState)(5),M=o()(L,2),F=M[0],q=(M[1],(0,d.useState)(0)),T=o()(q,2),W=T[0],U=T[1],V=(0,d.useState)(88),J=o()(V,2),$=(J[0],J[1],(0,d.useState)(0)),G=o()($,2),H=G[0],X=G[1],B=function(e){N(D+e)};(0,d.useEffect)((function(){n&&n(H)}),[H]);(0,d.useEffect)((function(){v(function(e,n){for(var t=[],r=0,i=e.length;r<i;)t.push(e.slice(r,r+=n));return t}(c,u)),N(0)}),[c,u]),(0,d.useEffect)((function(){if(R){var e=setInterval((function(){U((function(e){var n=e+1;return console.log(n),n}))}),1e3);return function(){clearInterval(e)}}U(0)}),[y,R]),(0,d.useEffect)((function(){W%F==0&&N((function(e){return e<y.length-1?e+1:0}))}),[W]);return(0,S.jsxs)(d.Fragment,{children:[(0,S.jsx)(k.Z,{display:"flex",width:"100%",flexDirection:"column",alignItems:"center",alignContent:"center",children:r}),(0,S.jsx)(k.Z,{gap:"30px",display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:y.map((function(e,n){return n===D&&e.map((function(e){return i&&i(e)}))}))}),(0,S.jsx)(k.Z,{display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:a?(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(I.Z,{})}):(0,S.jsx)(k.Z,{height:"40px"})}),!t&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(k.Z,{display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:[(0,S.jsx)(O,{variant:"outlined","aria-haspopup":"true",onClick:function(){return B(-1)},disabled:0===D,children:"Prev"}),"Page ".concat(y.length?D+1:0," of ").concat(y.length),(0,S.jsx)(O,{variant:"outlined","aria-haspopup":"true",onClick:function(){return B(1)},disabled:D>=y.length-1,children:"Next"}),!l&&(0,S.jsxs)(O,{variant:"outlined","aria-haspopup":"true",onClick:function(){return E(!R)},children:[" ",R?"".concat(W%F," sec"):"Auto"]}),!p&&(0,S.jsx)(O,{variant:"outlined","aria-haspopup":"true",onClick:function(){X((function(e){return e+1}))},children:" Refresh Price"}),!p&&(0,S.jsx)(O,{variant:"outlined","aria-haspopup":"true",onClick:function(){},children:" Download"})]}),(0,S.jsx)(k.Z,{display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:(0,S.jsxs)("h5",{children:[" ",c.length," result found"]})})]}),(0,S.jsx)("br",{}),(0,S.jsx)("br",{})]})},N=["min","max","crazySale","showPrice","hideCopy","isLoading","dataArr","pageSize","unmask","unmaskValue","handleClick","mask","displaySource","hideAuto","hideDl"];function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var R=(0,h.ZP)(Z.Z)((function(){return{fontSize:"26px"}})),E=function(e){var n=e.min,t=e.max,r=e.crazySale,i=(e.showPrice,e.hideCopy),a=e.isLoading,c=e.dataArr,u=e.pageSize,l=(e.unmask,e.unmaskValue,e.handleClick),p=e.mask,f=void 0===p?"yyyyyyyy":p,h=e.displaySource,m=(e.hideAuto,e.hideDl),x=s()(e,N),y=((0,P.Z)("(min-width:600px)"),(0,C.Z)().palette,(0,d.useState)([])),v=o()(y,2),g=v[0],j=v[1],b=(0,d.useState)([]),Z=o()(b,2),I=(Z[0],Z[1],(0,d.useState)([])),O=o()(I,2),_=(O[0],O[1],(0,d.useState)(0)),E=o()(_,2),L=(E[0],E[1],(0,d.useState)(0)),M=o()(L,2),F=(M[0],M[1],(0,d.useState)(!1)),q=o()(F,2),T=(q[0],q[1],(0,d.useState)(5)),W=o()(T,2),U=(W[0],W[1],(0,d.useState)(0)),V=o()(U,2),J=(V[0],V[1],(0,d.useState)(88)),$=o()(J,2),G=($[0],$[1],function(e,n){var r=Math.floor(Math.random()*t)+e;return"$".concat(r)}),H=function(e){return e&&e.map?e.map((function(e){return A(A({},e),{},{crazyPrice:"$"+G(Number(n),Number(t))})})):[]};(0,d.useEffect)((function(){j(H(c))}),[c]);var X={Gomo:"directions",Starhub:"star",Singtel:"music_note",M1:"brightness_7",MyRepublic:"domain",Simba:"title","singtel-changeNumber":"music_note"};return(0,S.jsx)(d.Fragment,{children:(0,S.jsx)(k.Z,{children:(0,S.jsx)(D,A(A({hideDl:m,hideAuto:!r},x),{},{pageSize:u,isLoading:a,dataArr:g,onRefresh:function(){j(H(c))},renderItem:function(e){return(0,S.jsx)(R,{title:null==e?void 0:e.title,variant:e.active?"contained":"outlined","aria-haspopup":"true",onClick:function(){return l&&l(e)},children:(0,S.jsxs)(k.Z,{children:[f.padEnd(e.num.length,"y").split("").map((function(n,t){return"x"===n?"X":e.num[t]})),"",h&&(0,S.jsx)(w,{style:{fontSize:"14px"},children:X[e.sourceId]}),!i&&(0,S.jsx)(z.Z,{onClick:function(n){n.stopPropagation(),navigator.clipboard.writeText(e.num)},children:(0,S.jsx)(w,{children:"content_copy"})})]})})}}))})})}},48885:function(e,n,t){t.r(n);var r=t(48926),i=t.n(r),a=t(63038),o=t.n(a),c=t(87757),s=t.n(c),u=t(67294),l=(t(36176),t(17951)),d=t(90174),p=t(24251),f=(t(38538),t(23490)),h=t(81595),m=(t(92492),t(8359),t(22840)),x=t(17216),y=t(66449),v=(t(27591),t(49308)),S=(t(48767),t(61564)),g=t(11521),j=(t(36916),t(69360)),b=(t(57154),t(80206)),w=t(4320),Z=t(29499),C=t(85893),k=u.useEffect,z={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};n.default=function(){var e=(0,Z.useLocation)(),n=new URLSearchParams(e.search).get("search"),t=(0,u.useState)(""),r=o()(t,2),a=r[0],c=r[1],P=(0,u.useState)(""),I=o()(P,2),O=(I[0],I[1],(0,u.useState)("")),D=o()(O,2),N=(D[0],D[1],(0,u.useState)("")),_=o()(N,2),A=(_[0],_[1],(0,u.useState)(null)),R=o()(A,2),E=(R[0],R[1],(0,u.useState)("")),L=o()(E,2),M=L[0],F=L[1],q=(0,u.useState)([]),T=o()(q,2),W=T[0],U=T[1],V=(0,u.useState)(!1),J=o()(V,2),$=J[0],G=J[1],H=(0,u.useState)(null),X=o()(H,2),B=X[0],K=X[1],Q=(0,u.useState)(0),Y=o()(Q,2),ee=(Y[0],Y[1]),ne=(0,y.Z)(),te=((0,m.Z)(ne.breakpoints.up("sm")),u.useState(!1)),re=o()(te,2),ie=re[0],ae=re[1],oe=function(){var e=i()(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j.Z.Cloud.run("queryNumbers",{query:n}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ce=function(){var e=i()(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j.Z.Cloud.run("queryCount",{query:n}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),se=function(){var e=i()(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j.Z.Cloud.run("querySpecificNumber",{_id:n}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();k((function(){var e=function(){var e=i()(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return isNaN(a)||oe(a),e.next=3,ce();case 3:n=e.sent,ee(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),k((function(){var e=function(){var e=i()(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe("");case 2:n=e.sent,U((null==n?void 0:n.data)||[]),F(null==n?void 0:n.lastUpdatedDate);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var ue=function(){return(0,C.jsxs)("h2",{children:[(0,C.jsx)("a",{style:{color:"#25D366",textDecoration:"none"},href:"https://api.whatsapp.com/send?phone=6587413159&text=I want to see the full number",children:"Whatsapp"})," us to see the full number."]})};return(0,C.jsx)(d.Z,{children:(0,C.jsxs)(w.ZP,{item:!0,xs:12,lg:6,children:[(0,C.jsx)(p.Z,{title:"Home"}),JSON.stringify(n),"eeee",JSON.stringify(e),"dddd",(0,C.jsx)(l.Z,{display:"flex",justifyContent:"center",flexDirection:"column",children:(0,C.jsxs)(f._,{dateAdapter:h.y,children:[(0,C.jsxs)(l.Z,{sx:{textAlign:"center"},justifyContent:"center",children:[(0,C.jsx)(ue,{}),(0,C.jsxs)("h2",{children:["Last Updated: ",M]})]}),(0,C.jsxs)(l.Z,{display:"flex",justifyContent:"center",flexDirection:"row",children:[(0,C.jsx)(x.Z,{id:"outlined-basic",label:"3 - 5 digits",variant:"outlined",onChange:function(e){return c(e.target.value)}}),(0,C.jsx)(g.Z,{onClick:i()(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!0),e.next=3,oe(a);case 3:n=e.sent,U((null==n?void 0:n.data)||[]),G(!1);case 6:case"end":return e.stop()}}),e)}))),children:"Find"})]})]})}),(0,C.jsx)(l.Z,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",children:!!W.length&&(0,C.jsx)("h2",{children:"".concat(W.length," number Found. ")})}),(0,C.jsx)("br",{}),(0,C.jsx)(S.Z,{displaySource:!1,isLoading:$,hideDl:!0,dataArr:W,hideCopy:!0,handleClick:function(){var e=i()(s().mark((function e(n){var t,r,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se(n._id);case 2:null!=(t=e.sent)&&t.answer?K({title:null==t||null===(r=t.answer)||void 0===r?void 0:r.num,content:(0,C.jsxs)("h2",{children:["The number can be found from ",null==t||null===(i=t.answer)||void 0===i?void 0:i.sourceId]})}):K({title:n.num,content:(0,C.jsx)("h2",{children:(0,C.jsx)(ue,{})})}),ae(!0);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}),(0,C.jsx)(b.Z,{open:ie,onClose:function(){return ae(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,C.jsxs)(l.Z,{sx:z,children:[(0,C.jsx)(v.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:null==B?void 0:B.title}),(0,C.jsx)(v.Z,{id:"modal-modal-description",sx:{mt:2},children:null==B?void 0:B.content})]})})]})})}}}]);