(this.webpackJsonptexttool=this.webpackJsonptexttool||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),s=n.n(r),l=(n(9),n(2)),o=n(0);function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," "),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function d(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container mt-5",style:{color:"dark"===e.mode?"white":"#343a40"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control ",id:"exampleFormControlTextarea1",rows:"8",value:c,onChange:function(e){r(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"#343a40",color:"dark"===e.mode?"white":"#343a40"}})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary rounded-pill",onClick:function(){r(c.toUpperCase()),e.showAlert("Converted to Uppercase","success")},style:{marginRight:"5px",marginBottom:"3px"},children:"Convert to Uppercase"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary rounded-pill",onClick:function(){r(c.toLowerCase()),e.showAlert("Converted to Lowercase","success")},style:{marginRight:"5px",marginBottom:"3px"},children:"Convert to Lowercase"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary rounded-pill",onClick:function(){r(""),e.showAlert("Text Cleared ","success")},style:{marginRight:"5px",marginBottom:"2px"},children:"Clear Text"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary rounded-pill",onClick:function(){navigator.clipboard.writeText(c),e.showAlert("Text Copied  ","success")},style:{marginRight:"5px",marginBottom:"2px"},children:"Copy Text"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary rounded-pill",onClick:function(){var t=c.split(/[ ]+/);r(t.join(" ")),e.showAlert("Extra Spaces are Removed","success")},children:"Remove Extraspaces"})]})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#343a40"},children:[Object(o.jsx)("h2",{children:"Your Text Summary"}),Object(o.jsxs)("p",{children:["You Typed ",c===/\s+/?"0":c.length-c.split(/\s+/).length+1," Character And"," ",""===c?"0":c.split(/\s+/).filter((function(e){return 0!==e.length})).length," Words"]}),Object(o.jsxs)("p",{children:[""===c?"0":.48*c.split(" ").filter((function(e){return 0!==e.length})).length," seconds are taken in read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:c.length>0?c:"Enter something into the textbox to preview it here"})]})]})}i.defaultProps={title:"Please set Title",aboutText:"About"};var b=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),style:{padding:"3px"},children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})};var h=function(){var e=Object(a.useState)("light"),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(l.a)(r,2),h=s[0],j=s[1],m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextyFire",mode:n,toggleMode:function(){"light"===n?(c("dark"),document.body.style.backgroundColor="#343a40",m("Dark mode has been enabled","success")):(c("light"),document.body.style.backgroundColor="white",m("Light mode has been enabled","success"))}}),Object(o.jsx)(b,{alert:h}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(d,{showAlert:m,heading:"Enter the text to Analyze ",mode:n})})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.4948284c.chunk.js.map