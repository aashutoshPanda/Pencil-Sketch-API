(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,a){e.exports=a(80)},29:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),l=(a(29),a(4)),s=a.n(l),i=a(10),m=a(6),u=a(7),h=a(9),p=a(8),d=a(21),g=a.n(d),f=a(22),v=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.original,a=e.sketchUrl;return console.log({original:t,sketchUrl:a}),console.log(t&&a),t&&a?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column"},c.a.createElement("figure",{className:"image "},c.a.createElement("img",{alt:"uploaded",src:window.URL.createObjectURL(t)}))),c.a.createElement("div",{className:"column"},c.a.createElement("figure",{className:"image "},c.a.createElement("img",{alt:"sketch",src:a})))),c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column"}),c.a.createElement("div",{className:"column"},c.a.createElement("a",{download:"".concat(t.name,"_sketch.jpg"),href:a,title:"DOWNLOAD"},"DOWNLOAD")),c.a.createElement("div",{className:"column"}))):null}}]),a}(n.Component),E=a(62),k=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onDrop=function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({picture:t[0],loading:!0}),(a=new FormData).append("picture",t[0]),E({method:"post",url:"https://imagetosketch.herokuapp.com/api/sketch/",headers:{"Content-Type":"multipart/form-data"},data:a}).then(function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({loading:!1,sketchUrl:t.data});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Error in Image Upload",t),n.setState({loading:!1});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={picture:null,loading:!1,sketchUrl:null},n}return Object(u.a)(a,[{key:"render",value:function(){return!0===this.state.loading?c.a.createElement("div",{className:"centerall"},c.a.createElement(f.ClockLoader,{size:150,color:"purple"})):c.a.createElement("div",null,c.a.createElement(g.a,{withIcon:!0,buttonText:"Choose image",onChange:this.onDrop,imgExtension:[".jpg",".gif",".png",".gif"],maxFileSize:5242880}),c.a.createElement(v,{original:this.state.picture,sketchUrl:this.state.sketchUrl}))}}]),a}(n.Component);var N=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("section",{className:"hero is-primary is-bold"},c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title"},"Image to Sketch "),c.a.createElement("a",{target:"_blank",href:"https://github.com/aashutoshpanda",className:"give-padding fa fa-github"},"Check out the Source Code")))),c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column"}),c.a.createElement("div",{className:"column"},c.a.createElement(k,null)),c.a.createElement("div",{className:"column"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.c3726e2b.chunk.js.map