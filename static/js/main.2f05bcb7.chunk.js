(this.webpackJsonpreact_simple_test=this.webpackJsonpreact_simple_test||[]).push([[0],{28:function(e){e.exports=JSON.parse('[{"question":"\u041a\u043e\u0433\u0434\u0430 \u0440\u043e\u0434\u0438\u043b\u0441\u044f \u0418\u0438\u0441\u0443\u0441 \u0425\u0440\u0438\u0441\u0442\u043e\u0441?","correctAnswer":"A","answers":[{"A":"B \u043f\u0435\u0440\u0438\u043e\u0434 \u0441 7 \u0433\u043e\u0434\u0430 \u0434\u043e \u043d. \u044d. \u043f\u043e 4 \u0433\u043e\u0434 \u0434\u043e \u043d. \u044d."},{"B":"B \u043f\u0435\u0440\u0438\u043e\u0434 \u0441 1 \u0433\u043e\u0434\u0430 \u043d. \u044d. \u043f\u043e 10 \u0433\u043e\u0434 \u0434\u043e \u043d. \u044d."},{"C":"\u0412 2021 \u0433\u043e\u0434\u0443"},{"D":"\u0412 2022 \u0433\u043e\u0434\u0443"}],"hintTitle":"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043e\u0447\u043a\u0438","hintText":"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043e\u0447\u043a\u0438"}]')},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(22),i=c.n(s),r=(c(74),c(6)),o=(c(75),c.p+"static/media/logoKapitalBank.3f779495.png"),l=c.p+"static/media/icon__fifty.3d06a290.png",j=c.p+"static/media/icon__hall_help.1d686da3.png",u=c.p+"static/media/chart.a883c90a.svg",d=c.p+"static/media/logo.177354fb.png",p=c(108),b=c(63),O=c.n(b),m=c(64),h=c.n(m),f=c(101),x=c(106),g=c.p+"static/media/start.446fd270.mp3",_=c(107),v=c(110),w=c(105),N=(c(76),c(2)),k=function(e){var t=e.children,c=e.open,n=e.onPopupClose,a=e.color;return Object(N.jsx)(_.a,{className:"popup",open:c,onClose:n,closeAfterTransition:!0,BackdropComponent:v.a,BackdropProps:{timeout:600},children:Object(N.jsx)(w.a,{in:c,timeout:600,children:Object(N.jsx)("div",{className:"popup__inner ".concat(a?"popup__inner--"+a:""),children:Object(N.jsxs)("div",{className:"popup__overflow text_center",children:[Object(N.jsx)("h1",{children:"\u041f\u043e\u043c\u043e\u0449\u044c \u0437\u0430\u043b\u0430"}),t]})})})})},C=c(28),S=c.p+"static/media/correct.211016a5.mp3",B=c.p+"static/media/wrong.585aa0fd.mp3",y=function(e){var t=e.idx,c=void 0===t?0:t,a=Object(n.useState)(!1),s=Object(r.a)(a,2),i=s[0],o=s[1],l=Object(n.useState)(""),j=Object(r.a)(l,2),u=j[0],d=j[1];return Object(N.jsxs)(p.a,{item:!0,xs:6,children:[Object(N.jsxs)("div",{className:"answer ".concat(i?"":"answer--hide"," answer--").concat(u),onClick:function(){return function(){var e=C[0].correctAnswer,t=Object.keys(C[0].answers[c])[0];i?d(e===t?"right":"wrong"):o(!i)}()},tabIndex:c+1,children:[Object(N.jsxs)("div",{className:"answer__letter",children:[" ",P[c],": \xa0 "]}),Object(N.jsxs)("div",{className:"answer__text",children:[" ",C[0].answers[c][P[c]],"  "]})]}),"right"===u&&Object(N.jsx)("audio",{autoPlay:!0,src:S}),"wrong"===u&&Object(N.jsx)("audio",{autoPlay:!0,src:B})]})},A="react-game/playMusic",P=["A","B","C","D"],I=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],a=(t[1],Object(n.useState)(!1)),s=Object(r.a)(a,2),i=s[0],b=s[1],m=Object(n.useState)(!1),_=Object(r.a)(m,2),v=_[0],w=_[1],S=Object(n.useState)(!1),B=Object(r.a)(S,2),P=B[0],I=B[1],T=Object(n.useState)(!0),F=Object(r.a)(T,2),J=F[0],q=F[1],K=Object(n.useRef)(null);Object(n.useEffect)((function(){K.current&&(J?(K.current.defaultMuted=!1,K.current.muted=!1):(K.current.defaultMuted=!0,K.current.muted=!0))}),[J]),Object(n.useEffect)((function(){var e=localStorage.getItem(A);e&&q(JSON.parse(e||""))}),[]);return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(f.a,{in:!0,timeout:4e3,children:Object(N.jsxs)("div",{className:"millionaire ".concat(v?"hideTwo":""),children:[Object(N.jsxs)("header",{className:"App-header",children:[Object(N.jsx)("img",{src:o,alt:"KapitalBank",className:"logoKapitalBank"}),Object(N.jsx)("img",{src:l,alt:"",className:"icon_right icon_right--fifty",onClick:function(){console.log("onFiftyCLick"),w(!v)}}),Object(N.jsx)("img",{src:j,onClick:function(){return b(!0)},alt:"",className:"icon_right icon_right--hall"}),Object(N.jsx)(k,{open:i,color:"white",onPopupClose:function(){return b(!1)},children:Object(N.jsx)("img",{src:u,alt:"",className:"hallImg"})})]}),Object(N.jsx)("img",{src:d,alt:"KapitalBank",className:"millionaire__logo"}),Object(N.jsxs)("div",{className:"question ".concat(P?"":"question--hide"),onClick:function(){return I(!P)},children:[" ",C[0].question," "]}),Object(N.jsx)(p.a,{container:!0,spacing:0,children:[0,1,2,3].map((function(e){return Object(N.jsx)(y,{answerResult:c,idx:e},e)}))}),Object(N.jsx)("div",{className:"volume",children:Object(N.jsxs)(x.a,{size:"large",onClick:function(){q(!J),localStorage.setItem(A,JSON.stringify(!J))},children:[J?Object(N.jsx)(O.a,{}):Object(N.jsx)(h.a,{}),J&&Object(N.jsx)("audio",{autoPlay:!0,ref:K,src:g})]})})]})})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,111)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(I,{})}),document.getElementById("root")),T()}},[[81,1,2]]]);
//# sourceMappingURL=main.2f05bcb7.chunk.js.map