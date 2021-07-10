(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(n){n.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},21:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var r,a,o,i,c,s,d,b,u,p,l,x=t(1),h=t.n(x),m=t(11),f=t.n(m),j=(t(21),t(14)),g=t(10),O=t(4),v=t(5),C=t(7),w=t(6),y=t(27),k=t(12),S=t(8),z=t(2),F=t(3),I=F.a.form(r||(r=Object(z.a)([""]))),A=F.a.label(a||(a=Object(z.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  justify-content: center;\n  padding-bottom: 15px;\n  margin: 0;\n"]))),N=F.a.input(o||(o=Object(z.a)(["\n  display: flex;\n  padding: 6px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  min-width: 300px;\n  cursor: pointer;\n  box-shadow: rgba(38, 38, 112, 0.25) 0px 50px 100px -20px,\n    rgba(34, 74, 114, 0.35) 0px -2px 6px 0px inset;\n  &:focus {\n    border: 2px solid #928ec7;\n    outline: none;\n  }\n"]))),D=F.a.button(i||(i=Object(z.a)(["\n  background-color: #ebedf32c;\n  color: #161127;\n  border: none;\n  padding: 8px 16px;\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: bold;\n  text-transform: uppercase;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 2px solid #1f3d9e30;\n  box-shadow: 0 12px 16px 0 #278cbb3d, 0 17px 50px 0 #1f3d9e30;\n  &:hover {\n    border-radius: 4px;\n    background-color: #020c2b2c;\n    transition-duration: 250ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    box-shadow: 0 12px 16px 0 #278cbb3d, 0 17px 50px 0 #1f3d9e30;\n  }\n"]))),E=t(0),J=function(n){Object(C.a)(t,n);var e=Object(w.a)(t);function t(){var n;Object(O.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))).state={name:"",number:""},n.idInputName=Object(y.a)(),n.idInputNumber=Object(y.a)(),n.handleInputChange=function(e){var t=e.currentTarget,r=t.name,a=t.value;n.setState(Object(S.a)({},r,a))},n.handleSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state),n.resetForm()},n.resetForm=function(){n.setState({name:"",number:""})},n}return Object(v.a)(t,[{key:"render",value:function(){var n=this.state,e=n.name,t=n.number;return Object(E.jsxs)(I,{onSubmit:this.handleSubmit,children:[Object(E.jsxs)(A,{htmlFor:this.idInputName,children:["Name",Object(E.jsx)(N,{onChange:this.handleInputChange,type:"text",id:this.idInputName,name:"name",autoComplete:"off",placeholder:"Enter name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(E.jsxs)(A,{htmlFor:this.idInputNumber,children:["Number",Object(E.jsx)(N,{onChange:this.handleInputChange,type:"tel",id:this.idInputNumber,name:"number",autoComplete:"off",placeholder:"Enter number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(E.jsx)(D,{type:"submit",disabled:!e||!t,children:"Add contact"})]})}}]),t}(x.Component),L=F.a.label(c||(c=Object(z.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  justify-content: center;\n  padding-bottom: 15px;\n  margin: 0;\n"]))),T=F.a.input(s||(s=Object(z.a)(["\n  display: flex;\n  padding: 6px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  min-width: 300px;\n  cursor: pointer;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  &:focus {\n    border: 2px solid #eee;\n    outline: none;\n  }\n"]))),B=function(n){Object(C.a)(t,n);var e=Object(w.a)(t);function t(){return Object(O.a)(this,t),e.apply(this,arguments)}return Object(v.a)(t,[{key:"render",value:function(){var n=this.props.onChange;return Object(E.jsxs)(L,{children:["Find contacts by name:",Object(E.jsx)(T,{onChange:n,type:"text",name:"filter"})]})}}]),t}(x.Component),H=F.a.ul(d||(d=Object(z.a)(["\n  padding: 0;\n"]))),P=F.a.li(b||(b=Object(z.a)(["\n  display: flex;\n  align-items: center;\n"]))),Z=F.a.p(u||(u=Object(z.a)(["\n  font-size: 18px;\n  line-height: 20px;\n  font-weight: bold;\n  word-break: break-all;\n"]))),q=F.a.button(p||(p=Object(z.a)(["\n  margin-left: auto;\n  background-color: #ebedf32c;\n  color: #161127;\n  border: none;\n  padding: 6px 12px;\n  font-size: 12px;\n  line-height: 14px;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 2px solid #1f3d9e30;\n  box-shadow: 0 12px 16px 0 #278cbb3d, 0 17px 50px 0 #1f3d9e30;\n  &:hover {\n    border-radius: 4px;\n    background-color: #020c2b2c;\n    transition-duration: 250ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    box-shadow: 0 12px 16px 0 #278cbb3d, 0 17px 50px 0 #1f3d9e30;\n  }\n"])));function M(n){var e=n.contacts,t=n.onDelete;return Object(E.jsx)(H,{children:e.map((function(n){var e=n.id,r=n.name,a=n.number;return Object(E.jsxs)(P,{children:[Object(E.jsxs)(Z,{children:[r,":\xa0",a]}),Object(E.jsx)(q,{onClick:function(){return t(e)},children:"Delete"})]},e)}))})}var V=F.a.div(l||(l=Object(z.a)(["\n  max-width: 350px;\n  margin-top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 15px 20px;\n  background-color: #cfcfe6;\n  border: 2mm ridge #1c2e9499;\n  box-shadow: 0 5px 5px #0000008c;\n  border-radius: 15px;\n  color: #161127;\n"])));function K(n){var e=n.children;return Object(E.jsx)(V,{children:e})}var R=function(n){Object(C.a)(t,n);var e=Object(w.a)(t);function t(){var n;Object(O.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))).state={contacts:k,filter:""},n.formSubmitHandle=function(e){var t=e.name,r=e.number,a=n.state.contacts,o={id:Object(y.a)(),name:t,number:r};a.some((function(n){return n.name===t}))?alert("".concat(t," is already in the contacts.")):n.setState((function(n){return Object(g.a)(Object(g.a)({},n),{},{contacts:[o].concat(Object(j.a)(n.contacts))})}))},n.changeFilter=function(e){n.setState({filter:e.currentTarget.value})},n.getVisibleContacts=function(){var e=n.state,t=e.contacts,r=e.filter.toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(r)}))},n.deleteContact=function(e){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==e}))}}))},n}return Object(v.a)(t,[{key:"render",value:function(){var n=this.state.filter,e=this.getVisibleContacts();return Object(E.jsxs)(K,{children:[Object(E.jsx)("h2",{children:"Phonebook"}),Object(E.jsx)(J,{onSubmit:this.formSubmitHandle}),Object(E.jsx)("h2",{children:"Contacts"}),Object(E.jsx)(B,{value:n,onChange:this.changeFilter}),Object(E.jsx)(M,{contacts:e,onDelete:this.deleteContact})]})}}]),t}(x.Component),$=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),o(n),i(n)}))};f.a.render(Object(E.jsx)(h.a.StrictMode,{children:Object(E.jsx)(R,{})}),document.getElementById("root")),$()}},[[26,1,2]]]);
//# sourceMappingURL=main.d7974d6b.chunk.js.map