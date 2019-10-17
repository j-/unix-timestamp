(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(6),l=n(5),u=n(4),c=function(e){return"SET_CURRENT_TIME"===e.type},o=function(e){return"SET_INPUT_VALUE"===e.type},m={currentTime:0,inputValue:"",inputNumber:0,outputNumber:0,isValid:!1,oom:0},i=function(e){return""!==e&&s(Number(e))},s=function(e){return!isNaN(e)},p=function(e){return e>=-864e13&&e<=864e13},d=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;if(c(a)||o(a)){var r=n.currentTime,l=n.inputValue;if(c(a)?(r=a.data.currentTime,l=String(r)):o(a)&&(l=a.data.inputValue),!i(l))return Object(u.a)({},n,{currentTime:r,inputValue:l,isValid:!1});var s=Number(l);if(0===s)return Object(u.a)({},n,{currentTime:r,inputValue:l,inputNumber:s,isValid:!0,outputNumber:0,oom:0});var d=(e=s,t=r,Math.round(Math.log(t)/Math.LN10-Math.log(e)/Math.LN10));d!==1/0&&d!==-1/0||(d=0);var E=s*Math.pow(10,d);return p(E)?Object(u.a)({},n,{currentTime:r,inputValue:l,inputNumber:s,isValid:!0,outputNumber:E,oom:d}):Object(u.a)({},n,{currentTime:r,inputValue:l,isValid:!1})}if(function(e){return"SET_ORDER_OF_MAGNITUDE"===e.type}(a)){var N=a.data.oom,b=n.inputNumber*Math.pow(10,a.data.oom);return p(b)?Object(u.a)({},n,{outputNumber:b,oom:N,isValid:i(n.inputValue)}):Object(u.a)({},n,{oom:N,isValid:!1})}return n},E=function(e){return e.inputValue},N=function(e){return new Date(e.outputNumber)},b=function(e){return e.isValid},f=function(e){return e.oom},v=n(12),O=n(2),g=function(){var e=Object(O.c)(E),t=Object(O.c)(f),n=Object(O.b)();return a.createElement("div",{className:"AppInputs-inputs"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-md-9"},a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"AppInputs-input"},"Unix timestamp"),a.createElement("br",null),a.createElement("input",{id:"AppInputs-input",className:"form-control form-control-lg",type:"text",autoFocus:!0,autoComplete:"off",value:e,onChange:function(e){n({type:"SET_INPUT_VALUE",data:{inputValue:e.currentTarget.value}})}}))),a.createElement("div",{className:"col-md-3"},a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"AppInputs-oom"},"Order of magnitude"),a.createElement("br",null),a.createElement("input",{id:"AppInputs-oom",className:"form-control form-control-lg",type:"number",value:t,onChange:function(e){n({type:"SET_ORDER_OF_MAGNITUDE",data:{oom:e.currentTarget.valueAsNumber}})}})))))},T=function(){var e=Object(O.c)(N);return Object(O.c)(b)?a.createElement("div",{className:"AppOutputs"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-sm"},a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"AppOutputs-milliseconds"},a.createElement("strong",null,"Unix timestamp (milliseconds)")),a.createElement("input",{id:"AppOutputs-milliseconds",type:"text",readOnly:!0,className:"form-control-plaintext",value:e.getTime()}))),a.createElement("div",{className:"col-sm"},a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"AppOutputs-seconds"},a.createElement("strong",null,"Unix timestamp (seconds)")),a.createElement("input",{id:"AppOutputs-seconds",type:"text",readOnly:!0,className:"form-control-plaintext",value:e.getTime()/1e3})))),a.createElement("div",{className:"row"},a.createElement("div",{className:"col-sm"},a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"AppOutputs-iso"},a.createElement("strong",null,"ISO string")),a.createElement("input",{id:"AppOutputs-iso",type:"text",readOnly:!0,className:"form-control-plaintext",value:e.toISOString()}))),a.createElement("div",{className:"col-sm"},a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"AppOutputs-locale"},a.createElement("strong",null,"Locale date/time")),a.createElement("input",{id:"AppOutputs-locale",type:"text",readOnly:!0,className:"form-control-plaintext",value:e.toLocaleString()}))))):null},h=function(){return a.createElement("div",{className:"App"},a.createElement(g,null),a.createElement("br",null),a.createElement("hr",null),a.createElement("br",null),a.createElement(T,null))},A=(n(23),Object(l.createStore)(d,Object(v.composeWithDevTools)()));A.dispatch({type:"SET_CURRENT_TIME",data:{currentTime:Date.now()}}),Object(r.render)(a.createElement(O.a,{store:A},a.createElement(h,null)),document.getElementById("root"))}},[[14,2,1]]]);
//# sourceMappingURL=main.47cf02c3.chunk.js.map