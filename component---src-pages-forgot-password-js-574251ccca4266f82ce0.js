"use strict";(self.webpackChunkgatsby_redux_material_ui_boilerplate=self.webpackChunkgatsby_redux_material_ui_boilerplate||[]).push([[153],{30664:function(e,r,o){o.d(r,{Z:function(){return h}});var t=o(87462),i=o(63366),n=o(67294),a=o(85505),l=o(90600),d=o(43656),s=o(47761),u=o(98953),c=o(62717);function m(e){return(0,c.Z)("MuiCard",e)}(0,o(35495).Z)("MuiCard",["root"]);var f=o(85893),p=["className","raised"],v=(0,d.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),h=n.forwardRef((function(e,r){var o=(0,s.Z)({props:e,name:"MuiCard"}),n=o.className,d=o.raised,u=void 0!==d&&d,c=(0,i.Z)(o,p),h=(0,t.Z)({},o,{raised:u}),Z=function(e){var r=e.classes;return(0,l.Z)({root:["root"]},m,r)}(h);return(0,f.jsx)(v,(0,t.Z)({className:(0,a.default)(Z.root,n),elevation:u?8:void 0,ref:r,ownerState:h},c))}))},17216:function(e,r,o){o.d(r,{Z:function(){return z}});var t=o(87462),i=o(63366),n=o(67294),a=o(85505),l=o(90600),d=o(43656),s=o(47761),u=o(3320),c=o(11519),m=o(73750),f=o(24334),p=o(13827),v=o(4942),h=o(11825),Z=o(8230),x=o(49240),b=o(62717),g=o(35495);function w(e){return(0,b.Z)("MuiFormHelperText",e)}var P=(0,g.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),R=o(85893),y=["children","className","component","disabled","error","filled","focused","margin","required","variant"],j=(0,d.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,o.size&&r["size".concat((0,x.Z)(o.size))],o.contained&&r.contained,o.filled&&r.filled]}})((function(e){var r,o=e.theme,i=e.ownerState;return(0,t.Z)({color:o.palette.text.secondary},o.typography.caption,(r={textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0},(0,v.Z)(r,"&.".concat(P.disabled),{color:o.palette.text.disabled}),(0,v.Z)(r,"&.".concat(P.error),{color:o.palette.error.main}),r),"small"===i.size&&{marginTop:4},i.contained&&{marginLeft:14,marginRight:14})})),F=n.forwardRef((function(e,r){var o=(0,s.Z)({props:e,name:"MuiFormHelperText"}),n=o.children,d=o.className,u=o.component,c=void 0===u?"p":u,m=(0,i.Z)(o,y),f=(0,Z.Z)(),p=(0,h.Z)({props:o,muiFormControl:f,states:["variant","size","disabled","error","filled","focused","required"]}),v=(0,t.Z)({},o,{component:c,contained:"filled"===p.variant||"outlined"===p.variant,variant:p.variant,size:p.size,disabled:p.disabled,error:p.error,filled:p.filled,focused:p.focused,required:p.required}),b=function(e){var r=e.classes,o=e.contained,t=e.size,i=e.disabled,n=e.error,a=e.filled,d=e.focused,s=e.required,u={root:["root",i&&"disabled",n&&"error",t&&"size".concat((0,x.Z)(t)),o&&"contained",d&&"focused",a&&"filled",s&&"required"]};return(0,l.Z)(u,w,r)}(v);return(0,R.jsx)(j,(0,t.Z)({as:c,ownerState:v,className:(0,a.default)(b.root,d),ref:r},m,{children:" "===n?(0,R.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):n}))})),C=o(32523);function T(e){return(0,b.Z)("MuiTextField",e)}(0,g.Z)("MuiTextField",["root"]);var M=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],S={standard:u.Z,filled:c.Z,outlined:m.Z},q=(0,d.ZP)(p.Z,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,r){return r.root}})({}),z=n.forwardRef((function(e,r){var o=(0,s.Z)({props:e,name:"MuiTextField"}),d=o.autoComplete,u=o.autoFocus,c=void 0!==u&&u,m=o.children,p=o.className,v=o.color,h=void 0===v?"primary":v,Z=o.defaultValue,x=o.disabled,b=void 0!==x&&x,g=o.error,w=void 0!==g&&g,P=o.FormHelperTextProps,y=o.fullWidth,j=void 0!==y&&y,z=o.helperText,N=o.id,k=o.InputLabelProps,_=o.inputProps,H=o.InputProps,I=o.inputRef,W=o.label,B=o.maxRows,L=o.minRows,V=o.multiline,A=void 0!==V&&V,E=o.name,J=o.onBlur,D=o.onChange,G=o.onFocus,K=o.placeholder,O=o.required,Q=void 0!==O&&O,U=o.rows,X=o.select,Y=void 0!==X&&X,$=o.SelectProps,ee=o.type,re=o.value,oe=o.variant,te=void 0===oe?"outlined":oe,ie=(0,i.Z)(o,M),ne=(0,t.Z)({},o,{autoFocus:c,color:h,disabled:b,error:w,fullWidth:j,multiline:A,required:Q,select:Y,variant:te}),ae=function(e){var r=e.classes;return(0,l.Z)({root:["root"]},T,r)}(ne);var le={};if("outlined"===te&&(k&&void 0!==k.shrink&&(le.notched=k.shrink),W)){var de,se=null!=(de=null==k?void 0:k.required)?de:Q;le.label=(0,R.jsxs)(n.Fragment,{children:[W,se&&" *"]})}Y&&($&&$.native||(le.id=void 0),le["aria-describedby"]=void 0);var ue=z&&N?"".concat(N,"-helper-text"):void 0,ce=W&&N?"".concat(N,"-label"):void 0,me=S[te],fe=(0,R.jsx)(me,(0,t.Z)({"aria-describedby":ue,autoComplete:d,autoFocus:c,defaultValue:Z,fullWidth:j,multiline:A,name:E,rows:U,maxRows:B,minRows:L,type:ee,value:re,id:N,inputRef:I,onBlur:J,onChange:D,onFocus:G,placeholder:K,inputProps:_},le,H));return(0,R.jsxs)(q,(0,t.Z)({className:(0,a.default)(ae.root,p),disabled:b,error:w,fullWidth:j,ref:r,required:Q,color:h,variant:te,ownerState:ne},ie,{children:[W&&(0,R.jsx)(f.Z,(0,t.Z)({htmlFor:N,id:ce},k,{children:W})),Y?(0,R.jsx)(C.Z,(0,t.Z)({"aria-describedby":ue,id:N,labelId:ce,value:re,input:fe},$,{children:m})):fe,z&&(0,R.jsx)(F,(0,t.Z)({id:ue},P,{children:z}))]}))}))},8974:function(e,r,o){o.r(r);var t=o(48926),i=o.n(t),n=o(63038),a=o.n(n),l=o(87757),d=o.n(l),s=o(43656),u=o(17951),c=o(30664),m=o(4320),f=o(17216),p=o(11521),v=o(67294),h=o(69360),Z=o(75708),x=o(85893),b=(0,s.ZP)(u.Z)((function(){return{display:"flex",alignItems:"center"}})),g=(0,s.ZP)(b)((function(){return{justifyContent:"center"}})),w=(0,s.ZP)(u.Z)((function(e){return{padding:32,background:e.theme.palette.background.default}})),P=(0,s.ZP)(g)((function(){return{"& .card":{maxWidth:800,margin:"1rem",borderRadius:12}}})),R={email:""};r.default=function(){var e=(0,v.useState)(""),r=a()(e,2),o=(r[0],r[1],(0,v.useState)(!1)),t=a()(o,2),n=t[0],l=t[1],s=function(){var e=i()(d().mark((function e(r){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Z.Cloud.run("forgetPassword",{email:r.email});case 2:e.sent,l(!0);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,x.jsx)(P,{children:(0,x.jsx)(c.Z,{className:"card",children:(0,x.jsx)(m.ZP,{container:!0,children:(0,x.jsx)(m.ZP,{item:!0,xs:12,children:(0,x.jsxs)(w,{children:[!n&&(0,x.jsx)(Z.J9,{initialValues:R,onSubmit:s,children:function(e){var r=e.values,o=(e.errors,e.touched,e.handleChange),t=(e.handleBlur,e.handleSubmit);return(0,x.jsxs)("form",{onSubmit:t,children:[(0,x.jsx)(f.Z,{type:"email",name:"email",size:"small",label:"Email",value:r.email,variant:"outlined",onChange:o,sx:{mb:3,width:"100%"}}),(0,x.jsx)(p.Z,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",children:"Reset Password"})]})}}),n&&(0,x.jsx)(u.Z,{children:"Please Check your email to reset your password."})]})})})})})}}}]);