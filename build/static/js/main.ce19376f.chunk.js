(this.webpackJsonpreact_js=this.webpackJsonpreact_js||[]).push([[0],{116:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(20),i=t.n(r),s=t(17),o=t(150),l=t(151),d=t(152),b=t(153),j=t(86),u=t(65),h=t.n(u),g=t(143),x=t(162),O=t(145),p=t(165),m=t(147),f=t(148),S=t(161),v=t(149),k=t(68),w=t.n(k),C=t(77),N=t(52);function A(){return(A=Object(C.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.database().ref("users").get();case 2:return a=e.sent,e.abrupt("return",Object.values(a.val()));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=t(5),I=Object(g.a)((function(e){return{bttn:{background:"linear-gradient(45deg, #a9abad 20%, #515253 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(81, 82, 83, .3)",color:"white",height:34,padding:"0 30px",marginRight:e.spacing(1)},title:{flexGrow:1},errorMessage:{color:"red"}}}));function D(e){var a=I(),t=c.a.useState(""),n=Object(s.a)(t,2),r=n[0],i=n[1],o=c.a.useState(""),l=Object(s.a)(o,2),d=l[0],b=l[1],j=c.a.useState(""),u=Object(s.a)(j,2),h=u[0],g=u[1];return Object(y.jsxs)(x.a,{children:[Object(y.jsx)(O.a,{variant:"contained",className:a.bttn,onClick:e.openDialogSI,children:"Sign In"}),Object(y.jsxs)(p.a,{open:e.openSignIn,onClose:e.closeDialogSI,children:[Object(y.jsx)(m.a,{children:"Log in"}),Object(y.jsxs)(f.a,{children:[Object(y.jsx)("span",{className:a.errorMessage,children:h}),Object(y.jsx)(S.a,{autoFocus:!0,margin:"dense",label:"Email Address",type:"email",onChange:function(e){i(e.target.value)},fullWidth:!0}),Object(y.jsx)(S.a,{margin:"dense",label:"Password",type:"password",onChange:function(e){b(e.target.value)},fullWidth:!0})]}),Object(y.jsxs)(v.a,{children:[Object(y.jsx)(O.a,{className:a.bttn,onClick:function(){""!==r&&""!==d&&function(e,a){return N.a.auth().signInWithEmailAndPassword(e,a)}(r,d).then((function(){e.onSuccess(r)})).catch((function(e){g(e.message)}))},children:"Done"}),Object(y.jsxs)(O.a,{onClick:e.closeDialogSI,className:a.bttn,children:[" ","Cancel"]})]})]})]})}var U=Object(g.a)((function(e){return{bttn:{background:"linear-gradient(45deg, #a9abad 20%, #515253 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(81, 82, 83, .3)",color:"white",height:34,padding:"0 30px",marginRight:e.spacing(1)},title:{flexGrow:1},errorMessage:{color:"red"}}}));function W(e){var a=U(),t=c.a.useState(""),n=Object(s.a)(t,2),r=n[0],i=n[1],o=c.a.useState(""),l=Object(s.a)(o,2),d=l[0],b=l[1],j=c.a.useState(""),u=Object(s.a)(j,2),h=u[0],g=u[1],k=c.a.useState(""),w=Object(s.a)(k,2),C=w[0],A=w[1],I=c.a.useState(""),D=Object(s.a)(I,2),W=D[0],E=D[1],R=c.a.useState(""),B=Object(s.a)(R,2),G=B[0],P=B[1];return Object(y.jsxs)(x.a,{children:[Object(y.jsx)(O.a,{variant:"contained",className:a.bttn,onClick:e.openDialogSU,children:"Sign Up"}),Object(y.jsxs)(p.a,{open:e.openSignUp,onClose:e.closeDialogSU,children:[Object(y.jsx)(m.a,{children:"Sign Up"}),Object(y.jsxs)(f.a,{children:[Object(y.jsx)("span",{className:a.errorMessage,children:G}),Object(y.jsx)(S.a,{autoFocus:!0,margin:"dense",label:"Email Address",type:"email",value:r,onChange:function(e){i(e.target.value)},fullWidth:!0}),Object(y.jsx)(S.a,{margin:"dense",label:"Name",type:"text",value:d,onChange:function(e){b(e.target.value)},fullWidth:!0}),Object(y.jsx)(S.a,{margin:"dense",label:"Password",type:"password",value:C,onChange:function(e){A(e.target.value)},fullWidth:!0}),Object(y.jsx)(S.a,{margin:"dense",label:"Repeat Password",type:"password",value:W,onChange:function(e){E(e.target.value)},fullWidth:!0}),Object(y.jsx)(S.a,{margin:"dense",label:"Age",type:"number",value:h,onChange:function(e){g(e.target.value)},fullWidth:!0})]}),Object(y.jsxs)(v.a,{children:[Object(y.jsxs)(O.a,{onClick:function(){C===W&&""!==C?function(e,a){return N.a.auth().createUserWithEmailAndPassword(e,a)}(r,C).then((function(){return function(e,a,t,n){var c=N.a.database().ref("users").push();c.set({username:e,email:a,age:t,isAdmin:n,id:c.key})}(d,r,h,!1)})).then((function(){e.onSuccess(r)})).catch((function(e){P(e.message)})):P("check passwords failed")},className:a.bttn,children:[" ","Done"]}),Object(y.jsxs)(O.a,{onClick:e.closeDialogSU,className:a.bttn,children:[" ","Cancel"]})]})]})]})}var E=Object(g.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},toolBar:{background:"linear-gradient(45deg, #515253 20%, #a9abad 90%)"}}}));function R(e){var a=E(),t=c.a.useState(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],u=c.a.useState(!1),g=Object(s.a)(u,2),x=g[0],O=g[1],p=function(a){e.onLogIn(a)};return Object(y.jsx)(o.a,{className:a.toolBar,position:"fixed",children:Object(y.jsx)(l.a,{fixed:!0,children:Object(y.jsxs)(d.a,{children:[Object(y.jsx)(b.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(y.jsx)(h.a,{})}),Object(y.jsx)(j.a,{className:a.title,children:"ProArea Company"}),Object(y.jsx)(D,{openSignIn:r,openDialogSI:function(){i(!0)},closeDialogSI:function(){i(!1)},onSuccess:p}),Object(y.jsx)(W,{openSignUp:x,openDialogSU:function(){O(!0)},closeDialogSU:function(){O(!1)},onSuccess:p})]})})})}var B=t(7),G=t(155),P=t(156),L=t(157),M=t(119),F=t(158),z=t(159),T=t(160),J=t(164),K=t(154),_=Object(g.a)((function(e){return{bttn:{background:"linear-gradient(45deg, #a9abad 20%, #515253 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(81, 82, 83, .3)",color:"white",height:34,padding:"0 30px",marginRight:e.spacing(1)},title:{flexGrow:1}}}));function Q(e){var a=_(),t=c.a.useState(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],o=c.a.useState(e.user.username),l=Object(s.a)(o,2),d=l[0],b=l[1],j=c.a.useState(e.user.age),u=Object(s.a)(j,2),h=u[0],g=u[1],k=c.a.useState(e.user.isAdmin),w=Object(s.a)(k,2),C=w[0],N=w[1],A=function(){i(!1)};return Object(y.jsxs)(x.a,{children:[Object(y.jsx)(O.a,{variant:"contained",className:a.bttn,onClick:function(){i(!0)},children:"Edit User"}),Object(y.jsxs)(p.a,{open:r,children:[Object(y.jsx)(m.a,{children:"Edit"}),Object(y.jsxs)(f.a,{children:[Object(y.jsx)(S.a,{autoFocus:!0,margin:"dense",label:"Email Address",type:"email",value:e.user.email,fullWidth:!0,disabled:!0}),Object(y.jsx)(S.a,{margin:"dense",label:"Name",type:"text",value:d,onChange:function(e){return b(e.target.value)},fullWidth:!0}),Object(y.jsx)(S.a,{margin:"dense",label:"Age",type:"number",value:h,onChange:function(e){return g(e.target.value)},fullWidth:!0}),Object(y.jsx)(K.a,{control:Object(y.jsx)(J.a,{color:"default",checked:C,onClick:function(){return N(!C)}}),label:"Is admin"})]}),Object(y.jsxs)(v.a,{children:[Object(y.jsx)(O.a,{className:a.bttn,onClick:function(){e.onEdit({name:d,age:h,isAdmin:C}),A()},children:"Done"}),Object(y.jsxs)(O.a,{className:a.bttn,onClick:A,children:[" ","Cancel"]})]})]})]})}var q=Object(B.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(G.a),H=Object(B.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(P.a),V=Object(g.a)({table:{minWidth:700,marginTop:80}});function X(e){var a=V(),t=function(a,t){var n=t.name,c=t.age,r=t.isAdmin;!function(e,a,t,n,c){N.a.database().ref("users/"+e).set({id:e,email:a,username:t,age:n,isAdmin:c})}(a.id,a.email,n,c,r),e.onUpdate(!0)};return Object(y.jsx)(L.a,{component:M.a,children:Object(y.jsxs)(F.a,{className:a.table,"aria-label":"customized table",children:[Object(y.jsx)(z.a,{children:Object(y.jsxs)(P.a,{children:[Object(y.jsx)(q,{children:"Name"}),Object(y.jsx)(q,{align:"right",children:"Email"}),Object(y.jsx)(q,{align:"right",children:"Age"}),Object(y.jsx)(q,{align:"right",children:"Is Admin"}),e.isAdmin&&Object(y.jsx)(q,{align:"right"})]})}),Object(y.jsx)(T.a,{children:e.users.map((function(a){return Object(y.jsxs)(H,{children:[Object(y.jsx)(q,{component:"th",scope:"row",children:a.username}),Object(y.jsx)(q,{align:"right",children:a.email}),Object(y.jsx)(q,{align:"right",children:a.age}),Object(y.jsx)(q,{align:"right",children:Object(y.jsx)(J.a,{color:"default",checked:a.isAdmin})}),e.isAdmin&&Object(y.jsx)(q,{align:"right",children:Object(y.jsx)(Q,{user:a,onEdit:function(e){t(a,e)}})})]},a.email)}))})]})})}var Y=Object(g.a)((function(e){return{bttn:{background:"linear-gradient(45deg, #a9abad 20%, #515253 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(81, 82, 83, .3)",color:"white",height:34,padding:"0 30px",marginRight:e.spacing(1)},title:{flexGrow:1},root:{flexGrow:1},toolBar:{background:"linear-gradient(45deg, #515253 20%, #a9abad 90%)"}}}));function Z(e){var a,t=Y(),n=c.a.useState([]),r=Object(s.a)(n,2),i=r[0],u=r[1],g=c.a.useState(!0),x=Object(s.a)(g,2),p=x[0],m=x[1];c.a.useEffect((function(){p&&(function(){return A.apply(this,arguments)}().then(u),m(!1))}),[p]);var f=null===(a=i.find((function(a){return e.email===a.email})))||void 0===a?void 0:a.isAdmin;return Object(y.jsxs)(l.a,{fixed:!0,children:[Object(y.jsx)(o.a,{className:t.toolBar,position:"fixed",children:Object(y.jsx)(l.a,{fixed:!0,children:Object(y.jsxs)(d.a,{children:[Object(y.jsx)(b.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(y.jsx)(h.a,{})}),Object(y.jsx)(j.a,{className:t.title,children:"ProArea Company"}),Object(y.jsx)(O.a,{className:t.bttn,onClick:e.onLogOut,children:"Sign Out"})]})})}),Object(y.jsx)(l.a,{className:t.table,children:Object(y.jsx)(X,{isAdmin:f,users:i,onUpdate:m})})]})}var $=t(83),ee=t(21);function ae(e){var a=c.a.useState(!1),t=Object(s.a)(a,2),n=t[0],r=t[1],i=c.a.useState(""),o=Object(s.a)(i,2),l=o[0],d=o[1];return Object(y.jsxs)($.a,{basename:"/proarea",children:[Object(y.jsx)(ee.b,{exact:!0,path:"/",children:n?Object(y.jsx)(ee.a,{to:"/dashboard"}):Object(y.jsx)(R,{onLogIn:function(e){d(e),r(!0)}})}),Object(y.jsx)(ee.b,{exact:!0,path:"/dashboard",children:n?Object(y.jsx)(Z,{email:l,onLogOut:function(){d(""),r(!1)}}):Object(y.jsx)(ee.a,{to:"/"})})]})}var te=t(84);t(115);te.a.initializeApp({apiKey:"AIzaSyBTGs7NF-m9nKsFnfDfbuNaReligMT8Q0w",authDomain:"proarea-testtask.firebaseapp.com",databaseURL:"https://proarea-testtask-default-rtdb.firebaseio.com",projectId:"proarea-testtask",storageBucket:"proarea-testtask.appspot.com",messagingSenderId:"675443557430",appId:"1:675443557430:web:c94fe5baaa34b222054497"}),i.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(ae,{})}),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.ce19376f.chunk.js.map