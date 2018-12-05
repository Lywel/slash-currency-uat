(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,n){"use strict";(function(e){var a=n(5),o=n(6),s=n(8),r=n(7),c=n(9),l=n(18),i=n(14),u=n(1),d=n.n(u),h=n(3);n(141);var p=function(t){function n(){return Object(a.a)(this,n),Object(s.a)(this,Object(r.a)(n).apply(this,arguments))}return Object(c.a)(n,t),Object(o.a)(n,[{key:"render",value:function(){var t=this.props,n=t.isOpen,a=t.toggle,o=t.details,s=o?function(t){switch(t.dataType){case"core.RequestEvent":var n=t.data.Proposal,a=n.block,o=n.transactions;return d.a.createElement(d.a.Fragment,null,d.a.createElement("h3",null,"Proposal: block"),d.a.createElement(h.r,{striped:!0,size:"sm"},d.a.createElement("tbody",null,Object.entries(a).map(function(e,t){var n=Object(l.a)(e,2),a=n[0],o=n[1];return d.a.createElement("tr",{key:t},d.a.createElement("th",null,a),d.a.createElement("td",null,o))}))),d.a.createElement("h4",null,"Transactions"),d.a.createElement(h.r,{striped:!0,size:"sm"},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"From"),d.a.createElement("th",null,"To"),d.a.createElement("th",null,"Amount"))),d.a.createElement("tbody",null,o.map(function(t,n){return d.a.createElement("tr",{key:n},d.a.createElement("td",null,e.from(t.from).toString("hex").substring(0,16)),d.a.createElement("td",null,e.from(t.to).toString("hex").substring(0,16)),d.a.createElement("td",null,t.amount))}))));case"types.Transaction":return console.log(t),d.a.createElement(d.a.Fragment,null,d.a.createElement("h3",null,"Transaction"),d.a.createElement(h.r,{striped:!0,size:"sm"},d.a.createElement("tbody",null,Object.entries(t.data).map(function(t,n){var a=Object(l.a)(t,2),o=a[0],s=a[1];return d.a.createElement("tr",{key:n},d.a.createElement("th",null,o),d.a.createElement("td",null,"from"===o||"to"===o?e.from(s).toString("hex"):s))}))));default:return d.a.createElement("pre",null,JSON.stringify(t,null,2))}}(o):null;return d.a.createElement("div",null,d.a.createElement(h.l,{isOpen:n,toggle:a,size:"lg"},o?d.a.createElement(d.a.Fragment,null,d.a.createElement(h.n,{toggle:a},"ibftEventIn"===o.type?d.a.createElement(i.e,{icon:i.b}):d.a.createElement(i.e,{icon:i.c}),o.dataType||o.type),d.a.createElement(h.m,null,s)):""))}}]),n}(u.Component);t.a=p}).call(this,n(137).Buffer)},124:function(e,t,n){e.exports=n(282)},129:function(e,t,n){},131:function(e,t,n){},133:function(e,t,n){},141:function(e,t,n){},143:function(e,t,n){},276:function(e,t,n){},278:function(e,t,n){},282:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),s=n(15),r=n.n(s),c=(n(129),n(5)),l=n(6),i=n(8),u=n(7),d=n(9),h=(n(131),n(44)),p=n(4),m=n(3),b=(n(133),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={url:n.props.url},n.handleChange=n.handleChange.bind(Object(p.a)(Object(p.a)(n))),n.handleKeyPress=n.handleKeyPress.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(h.a)({},this.state,{url:e.target.value}))}},{key:"handleKeyPress",value:function(e){if("Enter"===e.key){if("connected"===this.props.status&&this.props.url===this.state.url)return;this.props.onChange(this.state.url)}}},{key:"render",value:function(){var e=this.props,t=e.status,n=e.onChange,a=this.state.url,s={connected:"success",connecting:"warning",disconnected:"danger"}[t];return o.a.createElement("div",{className:"Navigation "+t},o.a.createElement("h1",null,"Validator UAT"),o.a.createElement(m.o,{dark:!0,expand:"md"},o.a.createElement(m.p,null,"Validator"),o.a.createElement(m.h,null,o.a.createElement(m.i,{addonType:"prepend"},o.a.createElement(m.a,{color:s}," ")),o.a.createElement(m.g,{value:a,onChange:this.handleChange,onKeyPress:this.handleKeyPress}),o.a.createElement(m.i,{addonType:"append"},o.a.createElement(m.b,{onClick:function(){return n(a)},disabled:"connected"===t&&this.props.url===this.state.url},"connected"===t?this.props.url!==this.state.url?"Change":"Connected":"Connect")))))}}]),t}(a.Component)),f=n(123),g=n(18),E=n(14),O=n(121);n(143);function v(e){switch(e){case"ibftEventIn":return{color:"primary",icon:E.c};case"ibftEventOut":return{color:"info",icon:E.b};case"txEvent":return{color:"success",icon:E.d};default:return{color:"dark",icon:E.a}}}var j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={detailsModalOpen:!1,details:null},n.openDetailsModal=n.openDetailsModal.bind(Object(p.a)(Object(p.a)(n))),n.closeDetailsModal=n.closeDetailsModal.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"openDetailsModal",value:function(e){var t=this;return function(){t.setState({detailsModalOpen:!0,details:e})}}},{key:"closeDetailsModal",value:function(){this.setState({detailsModalOpen:!1})}},{key:"render",value:function(){var e=this,t=this.props.logs.map(function(t,n){return o.a.createElement(m.k,{key:n,color:v(t.type).color},o.a.createElement(m.b,{color:"link",onClick:e.openDetailsModal(t)},o.a.createElement(E.e,{icon:v(t.type).icon}),function(){switch(t.dataType){case"core.RequestEvent":return"Proposal: block";default:return t.dataType||t.type}}()))}),n=this.state,a=n.details,s=n.detailsModalOpen;return o.a.createElement("div",{className:"LiveLogs h-100"},o.a.createElement(O.a,{isOpen:s,toggle:this.closeDetailsModal,details:a}),o.a.createElement(m.j,null,t))}}]),t}(a.Component),y=n(122),k=n.n(y),w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).options={layout:{improvedLayout:!0},edges:{shadow:!0,smooth:!0},nodes:{shape:"hexagon",shadow:!0,size:20,font:{color:"white"}},autoResize:!0},n.events={select:function(e){var t=e.nodes;n.props.onNodeSelect(t[0])}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.graph;return o.a.createElement("div",{className:"NetworkTopo"},o.a.createElement(k.a,{graph:e,options:this.options,events:this.events,style:{height:"100%",width:"100%"}}))}}]),t}(a.Component),S=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.node;return o.a.createElement("div",{className:"NetworkDetails"},o.a.createElement(m.c,{body:!0,color:"dark"},o.a.createElement(m.d,null,"Validator details"),o.a.createElement("ul",null,e?Object.entries(e).map(function(e,t){var n=Object(g.a)(e,2),a=n[0],s=n[1];return o.a.createElement("li",{key:t},o.a.createElement("strong",null,a,": "),s)}):"Please select a node")))}}]),t}(a.Component),C=(n(276),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={logs:[],status:"disconnected",failed:!1,nodes:[],edges:[],ws:null,tries:0,selectedNetworkNode:null,updateTopoInter:null},n.connect=n.connect.bind(Object(p.a)(Object(p.a)(n))),n.connectionStatusChanged=n.connectionStatusChanged.bind(Object(p.a)(Object(p.a)(n))),n.updateNetworkTopo=n.updateNetworkTopo.bind(Object(p.a)(Object(p.a)(n))),n.onNodeSelect=n.onNodeSelect.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.connect(this.props.url),this.setState({updateTopoInter:setInterval(this.updateNetworkTopo,500)})}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.url!==e.url?this.setState({tries:0},function(){return t.connect(t.props.url)}):"disconnected"===this.state.status&&this.state.tries<3&&this.connect(this.props.url)}},{key:"connectionStatusChanged",value:function(e){this.setState({status:e}),this.props.onStateChange(e)}},{key:"connect",value:function(e){var t=this;console.log('connect url:"'+e+'" '+this.state.tries),this.setState({tries:this.state.tries+1}),this.state.ws&&"disconnected"!==this.state.status&&(this.state.ws.onopen=null,this.state.ws.onclose=null,this.state.ws.close()),this.connectionStatusChanged("connecting");var n=new WebSocket("ws://"+e);n.onmessage=function(e){var n=JSON.parse(e.data);switch(n.type){case"network-state":var a=Object.entries(n.data).map(function(e,t){var n=Object(g.a)(e,2),a=n[0],o=n[1],s={id:t,label:o.split(":")[0]||"THIS",address:a,networkAddress:o};return":8080"===o&&(s.color="green",s.fixed=!0),s}),o=a.filter(function(e){return 1!==e.id}).map(function(e){return{to:1,from:e.id}});t.setState({edges:o,nodes:a});break;default:n.date=Date.now();var s=Object(f.a)(t.state.logs).concat([n]).sort(function(e,t){return t.date-e.date}).slice(0,20);t.setState({logs:s})}},n.onopen=function(e){if(n.url!=="ws://"+t.props.url)return n.close();t.connectionStatusChanged("connected"),t.setState({logs:[],failed:!1}),t.updateNetworkTopo()},n.onerror=function(e){if(n.url!=="ws://"+t.props.url)return n.close();t.connectionStatusChanged("disconnected"),t.state.ws.close()},n.onclose=function(e){n.url==="ws://"+t.props.url&&t.connectionStatusChanged("disconnected")},this.setState({ws:n})}},{key:"updateNetworkTopo",value:function(){"connected"===this.state.status&&this.state.ws.url==="ws://"+this.props.url&&this.state.ws.send(JSON.stringify({type:"network-state"}))}},{key:"onNodeSelect",value:function(e){this.setState({selectedNetworkNode:this.state.nodes[e]})}},{key:"render",value:function(){var e=this.state,t=e.logs,n=e.status,a=e.nodes,s=e.edges,r=e.selectedNetworkNode;return o.a.createElement(m.f,{fluid:!0,className:"MainPage "+n},o.a.createElement(m.q,{className:"h-100"},o.a.createElement(m.e,{md:"2",className:"h-100"},o.a.createElement(j,{logs:t}),o.a.createElement("h2",null,"Live logs")),o.a.createElement(m.e,{md:"6",className:"h-100"},o.a.createElement(w,{graph:{nodes:a,edges:s},onNodeSelect:this.onNodeSelect}),o.a.createElement(S,{node:r}),o.a.createElement("h2",null,"Network topology")),o.a.createElement(m.e,{md:"4",className:"h-100"},o.a.createElement("h2",null,"Blockchain"))))}}]),t}(a.Component)),N=(n(278),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={node_url:"a263d53aae7c911e8a7a9069f40f5f2f-415446416.ap-southeast-1.elb.amazonaws.com:3000/ws",conn_status:"disconnected"},n.handleChange=n.handleChange.bind(Object(p.a)(Object(p.a)(n))),n.handleStateChange=n.handleStateChange.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({node_url:e})}},{key:"handleStateChange",value:function(e){this.setState(Object(h.a)({},this.state,{conn_status:e}))}},{key:"render",value:function(){var e=this.state,t=e.node_url,n=e.conn_status;return o.a.createElement("div",{className:"Dashboard"},o.a.createElement(b,{url:t,status:n,onChange:this.handleChange}),o.a.createElement(C,{url:t,onStateChange:this.handleStateChange}))}}]),t}(a.Component)),T=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(N,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(280);r.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[124,2,1]]]);
//# sourceMappingURL=main.550e79c6.chunk.js.map