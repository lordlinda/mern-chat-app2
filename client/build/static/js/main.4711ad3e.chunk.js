(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{283:function(e,t,a){e.exports=a(562)},288:function(e,t,a){},548:function(e,t){},558:function(e,t,a){},562:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=(a(288),a(51)),i=a(78),c=a.n(i),m=a(119),u=a(30),p=a.n(u),d="login_user",h="register_user",g="auth_user",f="logout_user",E="after_post_message",y="/api/users";var b=a(24),v=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return function(s){var o=Object(b.d)(function(e){return e.user}),l=Object(b.c)();return Object(r.useEffect)(function(){l(function(){var e=p.a.get("".concat(y,"/auth")).then(function(e){return e.data});return{type:g,payload:e}}()).then(function(){var e=Object(m.a)(c.a.mark(function e(r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,!r.payload.isAuth;case 2:if(!e.sent){e.next=6;break}t&&s.history.push("/register_login"),e.next=7;break;case 6:a&&!r.payload.isAdmin?s.history.push("/"):!1===t&&s.history.push("/");case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},[l,s.history,o.googleAuth]),n.a.createElement(e,Object.assign({},s,{user:o}))}},w=a(95),O=a(131),x=a(28),j=a(568),k=a(567),N=a(572),S=a(8),I=a(570),C=a(183),P=j.a.Title;var D=Object(l.f)(function(e){var t=Object(b.c)(),a=!!localStorage.getItem("rememberMe"),s=Object(r.useState)(""),o=Object(w.a)(s,2),l=o[0],i=o[1],c=Object(r.useState)(a),m=Object(w.a)(c,2),u=m[0],h=m[1],g=function(){h(!u)},f=localStorage.getItem("rememberMe")?localStorage.getItem("rememberMe"):"";return n.a.createElement(O.a,{initialValues:{email:f,password:""},validationSchema:x.object().shape({email:x.string().email("Email is invalid").required("Email is required"),password:x.string().min(6,"Password must be at least 6 characters").required("Password is required")}),onSubmit:function(a,r){var n=r.setSubmitting;setTimeout(function(){var r={email:a.email,password:a.password};t(function(e){var t=p.a.post("".concat(y,"/login"),e).then(function(e){return e.data});return{type:d,payload:t}}(r)).then(function(t){t.payload.loginSuccess?(!0===u?window.localStorage.setItem("rememberMe",a.id):localStorage.removeItem("rememberMe"),e.history.push("/")):i("Check out your Account or Password again")}).catch(function(e){i("Check out your Account or Password again"),setTimeout(function(){i("")},3e3)}),n(!1)},500)}},function(e){var t=e.values,a=e.touched,r=e.errors,s=(e.dirty,e.isSubmitting),o=e.handleChange,i=e.handleBlur,c=e.handleSubmit;return e.handleReset,n.a.createElement("div",{className:"app"},n.a.createElement(P,{level:2},"Log In"),n.a.createElement("form",{onSubmit:c,style:{width:"350px"}},n.a.createElement(k.a.Item,{required:!0},n.a.createElement(N.a,{id:"email",prefix:n.a.createElement(S.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your email",type:"email",value:t.email,onChange:o,onBlur:i,className:r.email&&a.email?"text-input error":"text-input"}),r.email&&a.email&&n.a.createElement("div",{className:"input-feedback"},r.email)),n.a.createElement(k.a.Item,{required:!0},n.a.createElement(N.a,{id:"password",prefix:n.a.createElement(S.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your password",type:"password",value:t.password,onChange:o,onBlur:i,className:r.password&&a.password?"text-input error":"text-input"}),r.password&&a.password&&n.a.createElement("div",{className:"input-feedback"},r.password)),l&&n.a.createElement("label",null,n.a.createElement("p",{style:{color:"#ff0000bf",fontSize:"0.7rem",border:"1px solid",padding:"1rem",borderRadius:"10px"}},l)),n.a.createElement(k.a.Item,null,n.a.createElement(I.a,{id:"rememberMe",onChange:g,checked:u},"Remember me"),n.a.createElement("a",{className:"login-form-forgot",href:"/reset_user",style:{float:"right"}},"forgot password"),n.a.createElement("div",null,n.a.createElement(C.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{minWidth:"100%"},disabled:s,onSubmit:c},"Log in")),"Or ",n.a.createElement("a",{href:"/register"},"register now!"))))})}),_=a(31),M=a.n(_),q={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},T={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};var L=function(e){var t=Object(b.c)();return n.a.createElement(O.a,{initialValues:{email:"",lastName:"",name:"",password:"",confirmPassword:""},validationSchema:x.object().shape({name:x.string().required("Name is required"),lastName:x.string().required("Last Name is required"),email:x.string().email("Email is invalid").required("Email is required"),password:x.string().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:x.string().oneOf([x.ref("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(a,r){var n=r.setSubmitting;setTimeout(function(){var r={email:a.email,password:a.password,name:a.name,lastname:a.lastname,image:"http://gravatar.com/avatar/".concat(M()().unix(),"?d=identicon")};t(function(e){var t=p.a.post("".concat(y,"/register"),e).then(function(e){return e.data});return{type:h,payload:t}}(r)).then(function(t){t.payload.success?e.history.push("/login"):alert(t.payload.err.errmsg)}),n(!1)},500)}},function(e){var t=e.values,a=e.touched,r=e.errors,s=(e.dirty,e.isSubmitting),o=e.handleChange,l=e.handleBlur,i=e.handleSubmit;return e.handleReset,n.a.createElement("div",{className:"app"},n.a.createElement("h2",null,"Sign up"),n.a.createElement(k.a,Object.assign({style:{minWidth:"375px"}},q,{onSubmit:i}),n.a.createElement(k.a.Item,{required:!0,label:"Name"},n.a.createElement(N.a,{id:"name",placeholder:"Enter your name",type:"text",value:t.name,onChange:o,onBlur:l,className:r.name&&a.name?"text-input error":"text-input"}),r.name&&a.name&&n.a.createElement("div",{className:"input-feedback"},r.name)),n.a.createElement(k.a.Item,{required:!0,label:"Last Name"},n.a.createElement(N.a,{id:"lastName",placeholder:"Enter your Last Name",type:"text",value:t.lastName,onChange:o,onBlur:l,className:r.lastName&&a.lastName?"text-input error":"text-input"}),r.lastName&&a.lastName&&n.a.createElement("div",{className:"input-feedback"},r.lastName)),n.a.createElement(k.a.Item,{required:!0,label:"Email",hasFeedback:!0,validateStatus:r.email&&a.email?"error":"success"},n.a.createElement(N.a,{id:"email",placeholder:"Enter your Email",type:"email",value:t.email,onChange:o,onBlur:l,className:r.email&&a.email?"text-input error":"text-input"}),r.email&&a.email&&n.a.createElement("div",{className:"input-feedback"},r.email)),n.a.createElement(k.a.Item,{required:!0,label:"Password",hasFeedback:!0,validateStatus:r.password&&a.password?"error":"success"},n.a.createElement(N.a,{id:"password",placeholder:"Enter your password",type:"password",value:t.password,onChange:o,onBlur:l,className:r.password&&a.password?"text-input error":"text-input"}),r.password&&a.password&&n.a.createElement("div",{className:"input-feedback"},r.password)),n.a.createElement(k.a.Item,{required:!0,label:"Confirm",hasFeedback:!0},n.a.createElement(N.a,{id:"confirmPassword",placeholder:"Enter your confirmPassword",type:"password",value:t.confirmPassword,onChange:o,onBlur:l,className:r.confirmPassword&&a.confirmPassword?"text-input error":"text-input"}),r.confirmPassword&&a.confirmPassword&&n.a.createElement("div",{className:"input-feedback"},r.confirmPassword)),n.a.createElement(k.a.Item,T,n.a.createElement(C.a,{onClick:i,type:"primary",disabled:s},"Submit"))))})},B=a(268),A=a(269),R=a(279),W=a(270),z=a(280),F=a(565),V=a(566),H=a(271),X=a.n(H);var Y=a(563),U=a(564),J=a(93);var G=function(e){return console.log("http://localhost:5000/"),n.a.createElement("div",{style:{width:"100%"}},n.a.createElement(Y.a,{author:e.sender.name,avatar:n.a.createElement(U.a,{src:e.sender.image,alt:e.sender.name}),content:"uploads/"===e.message.substring(0,8)?"mp4"===e.message.substring(e.message.length-3,e.message.length)?n.a.createElement("video",{style:{maxWidth:"200px"},src:"".concat("http://localhost:5000/").concat(e.message),alt:"video",type:"video/mp4",controls:!0}):n.a.createElement("img",{style:{maxWidth:"200px"},src:"".concat("http://localhost:5000/").concat(e.message),alt:"img"}):n.a.createElement("p",null,e.message),datetime:n.a.createElement(J.a,{title:M()().format("YYYY-MM-DD HH:mm:ss")},n.a.createElement("span",null,M()().fromNow()))}))},$=a(278),K=function(e){function t(){var e,a;Object(B.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(R.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(s)))).state={chatMessage:""},a.hanleSearchChange=function(e){a.setState({chatMessage:e.target.value})},a.renderCards=function(){return a.props.chats&&a.props.chats.map(function(e){return n.a.createElement(G,Object.assign({key:e._id},e))})},a.onDrop=function(e){if(console.log(e),a.props.user.userData&&!a.props.user.userData.isAuth)return alert("Please Log in first");var t=new FormData;t.append("file",e[0]),p.a.post("api/chat/uploadfiles",t,{header:{"content-type":"multipart/form-data"}}).then(function(e){if(e.data.success){var t=e.data.url,r=a.props.user.userData._id,n=a.props.user.userData.name,s=a.props.user.userData.image,o=M()();a.socket.emit("Input Chat Message",{chatMessage:t,userId:r,userName:n,userImage:s,nowTime:o,type:"VideoOrImage"})}})},a.submitChatMessage=function(e){if(e.preventDefault(),a.props.user.userData&&!a.props.user.userData.isAuth)return alert("Please Log in first");var t=a.state.chatMessage,r=a.props.user.userData._id,n=a.props.user.userData.name,s=a.props.user.userData.image,o=M()();a.socket.emit("Input Chat Message",{chatMessage:t,userId:r,userName:n,userImage:s,nowTime:o,type:"Text"}),a.setState({chatMessage:""})},a}return Object(z.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(function(){var e=Object(m.a)(c.a.mark(function e(t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat("/api/chat","/getChats")).then(function(e){return e.data});case 2:a=e.sent,console.log(a),t({type:"get_chat",payload:a});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),this.socket=X()("https://mernchatapp2.herokuapp.com/",{transports:["websocket"]}),this.socket.on("Output Chat Message",function(t){console.log(t),e.props.dispatch({type:E,payload:t})})}},{key:"componentDidUpdate",value:function(){this.messagesEnd.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("p",{style:{fontSize:"2rem",textAlign:"center"}}," ","Real Time Chat")),n.a.createElement("div",{style:{maxWidth:"800px",margin:"0 auto"}},n.a.createElement("div",{className:"infinite-container"},this.props.chats&&this.renderCards(),n.a.createElement("div",{ref:function(t){e.messagesEnd=t},style:{float:"left",clear:"both"}})),n.a.createElement(F.a,null,n.a.createElement(k.a,{layout:"inline",onSubmit:this.submitChatMessage},n.a.createElement(V.a,{span:18},n.a.createElement(N.a,{id:"message",prefix:n.a.createElement(S.a,{type:"message",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Let's start talking",type:"text",value:this.state.chatMessage,onChange:this.hanleSearchChange})),n.a.createElement(V.a,{span:2},n.a.createElement($.a,{onDrop:this.onDrop},function(e){var t=e.getRootProps,a=e.getInputProps;return n.a.createElement("section",null,n.a.createElement("div",t(),n.a.createElement("input",a()),n.a.createElement(C.a,null,n.a.createElement(S.a,{type:"upload"}))))})),n.a.createElement(V.a,{span:4},n.a.createElement(C.a,{type:"primary",style:{width:"100%"},onClick:this.submitChatMessage,htmlType:"submit"},n.a.createElement(S.a,{type:"enter"})))))))}}]),t}(r.Component),Q=Object(b.b)(function(e){return{user:e.user,chats:e.chat.chats}})(K),Z=a(569),ee=Z.a.SubMenu,te=Z.a.ItemGroup;var ae=function(e){return n.a.createElement(Z.a,{mode:e.mode},n.a.createElement(Z.a.Item,{key:"mail"},n.a.createElement("a",{href:"/"},"Home")),n.a.createElement(Z.a.Item,{key:"chat"},n.a.createElement("a",{href:"/chat"},"Chat")),n.a.createElement(ee,{title:n.a.createElement("span",null,"Blogs")},n.a.createElement(te,{title:"Item 1"},n.a.createElement(Z.a.Item,{key:"setting:1"},"Option 1"),n.a.createElement(Z.a.Item,{key:"setting:2"},"Option 2")),n.a.createElement(te,{title:"Item 2"},n.a.createElement(Z.a.Item,{key:"setting:3"},"Option 3"),n.a.createElement(Z.a.Item,{key:"setting:4"},"Option 4"))))};var re=Object(l.f)(function(e){var t=Object(b.d)(function(e){return e.user});return t.userData&&!t.userData.isAuth?n.a.createElement(Z.a,{mode:e.mode},n.a.createElement(Z.a.Item,{key:"mail"},n.a.createElement("a",{href:"/login"},"Signin")),n.a.createElement(Z.a.Item,{key:"app"},n.a.createElement("a",{href:"/register"},"Signup"))):n.a.createElement(Z.a,{mode:e.mode},n.a.createElement(Z.a.Item,{key:"logout"},n.a.createElement("a",{onClick:function(){p.a.get("".concat(y,"/logout")).then(function(t){200===t.status?e.history.push("/login"):alert("Log Out Failed")})}},"Logout")))}),ne=a(571);a(558);var se=function(){var e=Object(r.useState)(!1),t=Object(w.a)(e,2),a=t[0],s=t[1];return n.a.createElement("nav",{className:"menu",style:{position:"fixed",zIndex:1,width:"100%"}},n.a.createElement("div",{className:"menu__logo"},n.a.createElement("a",{href:"/"},"Logo")),n.a.createElement("div",{className:"menu__container"},n.a.createElement("div",{className:"menu_left"},n.a.createElement(ae,{mode:"horizontal"})),n.a.createElement("div",{className:"menu_rigth"},n.a.createElement(re,{mode:"horizontal"})),n.a.createElement(C.a,{className:"menu__mobile-button",type:"primary",onClick:function(){s(!0)}},n.a.createElement(S.a,{type:"align-right"})),n.a.createElement(ne.a,{title:"Basic Drawer",placement:"right",className:"menu_drawer",closable:!1,onClose:function(){s(!1)},visible:a},n.a.createElement(ae,{mode:"inline"}),n.a.createElement(re,{mode:"inline"}))))};var oe=function(){return n.a.createElement("div",{style:{height:"80px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"1rem"}},n.a.createElement("p",null," Happy Coding  ",n.a.createElement(S.a,{type:"smile"})))};var le=function(){return n.a.createElement(r.Suspense,{fallback:n.a.createElement("div",null,"Loading...")},n.a.createElement(se,null),n.a.createElement("div",{className:"content_wrapper",style:{paddingTop:"75px",minHeight:"calc(100vh - 80px)"}},n.a.createElement(l.c,null,n.a.createElement(l.a,{exact:!0,path:"/",component:v(Q,null)}),n.a.createElement(l.a,{exact:!0,path:"/login",component:v(D,!1)}),n.a.createElement(l.a,{exact:!0,path:"/register",component:v(L,!1)}))),n.a.createElement(oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=a(89),ce=a(64),me=a(130);function ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function pe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ue(a,!0).forEach(function(t){Object(me.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ue(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function de(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function he(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?de(a,!0).forEach(function(t){Object(me.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):de(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ge=Object(ce.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return pe({},e,{register:t.payload});case d:return pe({},e,{loginSucces:t.payload});case g:return pe({},e,{userData:t.payload});case f:return pe({},e);default:return e}},chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"get_chat":return he({},e,{chats:t.payload});case E:return he({},e,{chats:e.chats.concat(t.payload)});default:return e}}}),fe=a(276),Ee=a.n(fe),ye=a(277),be=Object(ce.a)(Ee.a,ye.a)(ce.d);o.a.render(n.a.createElement(b.a,{store:be(ge,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},n.a.createElement(ie.a,null,n.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[283,1,2]]]);
//# sourceMappingURL=main.4711ad3e.chunk.js.map