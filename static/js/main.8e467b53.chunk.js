(this.webpackJsonpreact_simple_test=this.webpackJsonpreact_simple_test||[]).push([[0],{39:function(e){e.exports=JSON.parse('[{"question":"\u041a\u043e\u0433\u0434\u0430 \u0440\u043e\u0434\u0438\u043b\u0441\u044f \u0418\u0438\u0441\u0443\u0441 \u0425\u0440\u0438\u0441\u0442\u043e\u0441?","correctAnswer":"B","answers":[{"A":"B \u043f\u0435\u0440\u0438\u043e\u0434 \u0441 7 \u0433\u043e\u0434\u0430 \u0434\u043e \u043d. \u044d. \u043f\u043e 4 \u0433\u043e\u0434 \u0434\u043e \u043d. \u044d."},{"B":"B \u043f\u0435\u0440\u0438\u043e\u0434 \u0441 1 \u0433\u043e\u0434\u0430 \u043d. \u044d. \u043f\u043e 10 \u0433\u043e\u0434 \u0434\u043e \u043d. \u044d."},{"C":"\u0412 2021 \u0433\u043e\u0434\u0443"},{"D":"\u0412 2022 \u0433\u043e\u0434\u0443"}],"hintTitle":"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043e\u0447\u043a\u0438","hintText":"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043e\u0447\u043a\u0438"}]')},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(22),i=c.n(s),r=(c(75),c(6)),o=(c(76),c.p+"static/media/logoKapitalBank.3f779495.png"),l=c.p+"static/media/icon__fifty.3d06a290.png",j=c.p+"static/media/icon__hall_help.1d686da3.png",u=c.p+"static/media/chart.a883c90a.svg",d=c.p+"static/media/logo.177354fb.png",p=c(109),b=c(63),m=c.n(b),O=c(64),h=c.n(O),x=c(102),f=c(107),g=c.p+"static/media/start.446fd270.mp3",_=c.p+"static/media/question.6912d72b.mp3",w=c.p+"static/media/correctAnswer.934f3cb4.mp3",v=c(108),N=c(111),C=c(106),k=(c(77),c(2)),S=function(e){var t=e.children,c=e.open,a=e.onPopupClose,n=e.color;return Object(k.jsx)(v.a,{className:"popup",open:c,onClose:a,closeAfterTransition:!0,BackdropComponent:N.a,BackdropProps:{timeout:600},children:Object(k.jsx)(C.a,{in:c,timeout:600,children:Object(k.jsx)("div",{className:"popup__inner ".concat(n?"popup__inner--"+n:""),children:Object(k.jsxs)("div",{className:"popup__overflow text_center",children:[Object(k.jsx)("h1",{children:"\u041f\u043e\u043c\u043e\u0449\u044c \u0437\u0430\u043b\u0430"}),t]})})})})},B=c(39),y=c.p+"static/media/answer.a97712cc.mp3",P=c.p+"static/media/correct.211016a5.mp3",A=c.p+"static/media/wrong.585aa0fd.mp3",I=function(e){var t=e.idx,c=void 0===t?0:t,n=Object(a.useState)(!1),s=Object(r.a)(n,2),i=s[0],o=s[1],l=Object(a.useState)(""),j=Object(r.a)(l,2),u=j[0],d=j[1];return Object(k.jsxs)(p.a,{item:!0,xs:6,children:[Object(k.jsxs)("div",{className:"answer ".concat(i?"":"answer--hide"," answer--").concat(u),onClick:function(){i?d("answer"):o(!i)},tabIndex:c+1,children:[Object(k.jsxs)("div",{className:"answer__letter",children:[" ",J[c],": \xa0 "]}),Object(k.jsxs)("div",{className:"answer__text",children:[" ",B[0].answers[c][J[c]],"  "]})]}),"answer"===u&&Object(k.jsx)("audio",{autoPlay:!0,src:y}),"right"===u&&Object(k.jsx)("audio",{autoPlay:!0,src:P}),"wrong"===u&&Object(k.jsx)("audio",{autoPlay:!0,src:A})]})},T=c(65),q=c.n(T),F="react-game/playMusic",J=["A","B","C","D"],K=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),i=Object(r.a)(s,2),b=i[0],O=i[1],v=Object(a.useState)(!1),N=Object(r.a)(v,2),C=N[0],y=N[1],P=Object(a.useState)(!1),A=Object(r.a)(P,2),T=A[0],J=A[1],K=Object(a.useState)(!0),M=Object(r.a)(K,2),D=M[0],E=M[1],L=Object(a.useRef)(null);Object(a.useEffect)((function(){L.current&&(D?(L.current.defaultMuted=!1,L.current.muted=!1):(L.current.defaultMuted=!0,L.current.muted=!0))}),[D]),Object(a.useEffect)((function(){var e=localStorage.getItem(F);e&&E(JSON.parse(e||""))}),[]);return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(x.a,{in:!0,timeout:4e3,children:Object(k.jsxs)("div",{className:"millionaire ".concat(b?"hideTwo":""," ").concat(T?"rightAnswer":""," "),children:[Object(k.jsxs)("header",{className:"App-header",children:[Object(k.jsx)("img",{src:o,alt:"KapitalBank",className:"logoKapitalBank"}),Object(k.jsx)("img",{src:l,alt:"",className:"icon_right icon_right--fifty",onClick:function(){console.log("onFiftyCLick"),O(!b)}}),Object(k.jsx)("img",{src:j,onClick:function(){return n(!0)},alt:"",className:"icon_right icon_right--hall"}),Object(k.jsx)(S,{open:c,color:"white",onPopupClose:function(){return n(!1)},children:Object(k.jsx)("img",{src:u,alt:"",className:"hallImg"})})]}),Object(k.jsx)("img",{src:d,alt:"KapitalBank",className:"millionaire__logo"}),Object(k.jsxs)("div",{className:"question ".concat(C?"":"question--hide"),onClick:function(){return y(!C)},children:[" ",B[0].question," "]}),C&&Object(k.jsx)("audio",{autoPlay:!0,src:_}),Object(k.jsx)(p.a,{container:!0,spacing:0,children:[0,1,2,3].map((function(e){return Object(k.jsx)(I,{idx:e},e)}))}),Object(k.jsx)("div",{className:"volume",children:Object(k.jsxs)(f.a,{size:"large",onClick:function(){E(!D),localStorage.setItem(F,JSON.stringify(!D))},children:[D?Object(k.jsx)(m.a,{}):Object(k.jsx)(h.a,{}),D&&!C&&Object(k.jsx)("audio",{autoPlay:!0,src:g})]})}),Object(k.jsx)("div",{className:"showRightAnswer",children:Object(k.jsxs)(f.a,{size:"large",onClick:function(){J(!T)},children:[Object(k.jsx)(q.a,{}),T&&Object(k.jsx)("audio",{autoPlay:!0,src:w})]})})]})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,112)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(K,{})}),document.getElementById("root")),M()}},[[82,1,2]]]);
//# sourceMappingURL=main.8e467b53.chunk.js.map