(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(49)},26:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=(n(26),n(3)),l=n(4),s=n(6),u=n(5),h=n(7),m=n(9),b=n.n(m),d=n(17),p=n(18),v=n(2),g=n(19),f=n.n(g),j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={name:"",message:""},n.handleSubmit=n.handleSubmit.bind(Object(v.a)(Object(v.a)(n))),n.handleChange=n.handleChange.bind(Object(v.a)(Object(v.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value,n=e.target.name;this.setState(Object(p.a)({},n,t)),console.log(this.state)}},{key:"handleSubmit",value:function(){var e=Object(d.a)(b.a.mark(function e(t){var n,a,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.state,a=n.name,r=n.message,e.next=4,f.a.post("https://b8dk6x9i8i.execute-api.eu-west-2.amazonaws.com/default/serverlessAppFunction",{key1:"".concat(a,", ").concat(r)});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.state.name}),r.a.createElement("label",null,"Message:"),r.a.createElement("input",{type:"text",name:"message",onChange:this.handleChange,value:this.state.message}),r.a.createElement("button",{type:"submit"},"Send")))}}]),t}(a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Leave your message here:"),r.a.createElement(j,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.8e1fbfc3.chunk.js.map