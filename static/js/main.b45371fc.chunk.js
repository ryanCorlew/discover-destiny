(this["webpackJsonpbungie-api-app"]=this["webpackJsonpbungie-api-app"]||[]).push([[0],{42:function(e,t,n){e.exports=n(52)},47:function(e,t,n){},48:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(47),n(31)),s=n(32),u=n(35),l=n(34),h=(n(48),n(88)),p=n(89),m=n(83),f=Object(m.a)({root:{marginRight:"15px",marginBottom:"10px"}}),d=function(e){var t=e.inputChange,n=e.print,a=f();return r.a.createElement("form",{onSubmit:function(e){return n(e)}},r.a.createElement(h.a,{className:a.root,placeholder:"enter item name",onChange:function(e){return t(e)},type:"text"}),r.a.createElement(p.a,{variant:"outlined",onClick:function(){return n()}},"Search"))},g=n(87),v=Object(m.a)({root:{width:"fit-content",maxWidth:"60%",padding:"8px",margin:"auto"}}),E=function(e){var t=e.searchResult,n=v(),a=t?r.a.createElement("div",null,r.a.createElement("h2",null,t.name),r.a.createElement("p",null,t.description),r.a.createElement("img",{src:"https://www.bungie.net".concat(t.icon),alt:t.name})):r.a.createElement("h2",null,"Result Not Found");return r.a.createElement(g.a,{className:n.root},a)},w="d412c8322a5249f1849e04b9aa63ded9",b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={userInput:"",searchResult:""},e.inputChange=function(t){var n=t.target.value;e.setState({userInput:n})},e.print=function(t){t&&t.preventDefault(),fetch("https://www.bungie.net/platform/Destiny2/Armory/Search/DestinyInventoryItemDefinition/".concat(e.state.userInput,"/"),{headers:{"X-API-Key":w,"Content-Type":"application/json"},mode:"cors",cache:"default",method:"GET"}).then((function(e){return e.json()})).then((function(t){if(t.Response.results.results.length>0){var n=t.Response.results.results[0].displayProperties;e.setState({searchResult:n})}else e.setState({searchResult:""})}))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Discover Destiny"),r.a.createElement(d,{inputChange:this.inputChange,print:this.print}),this.state.searchResult?r.a.createElement(E,{searchResult:this.state.searchResult}):null)}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.b45371fc.chunk.js.map