(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{287:function(t,e,n){"use strict";n.r(e);n(53),n(3);var r=n(292),o=n.n(r),a=(n(291),n(76),n(41)),i=n(0),c=n(1),u=n(275),s=n(25),p=n(321),f=n(301),l=n(302),d=n(298);function h(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function m(){var t=w(["\n  color: ",";\n  margin-bottom: 0;\n"]);return m=function(){return t},t}function v(){var t=w(["\n  background-color: ",";\n\n  padding: ",";\n\n  @media screen and(max-width: ",") {\n    flex-direction: column;\n  }\n\n  @media screen and(max-width: ",") {\n    padding: ",";\n  }\n"]);return v=function(){return t},t}function w(t,e){return e||(e=t.slice(0)),t.raw=e,t}var b=c.d.section(v(),(function(t){return t.theme.colors.section}),(function(t){return t.theme.boxes.padding.section.smallTop}),(function(t){return t.theme.sizes.width.medium}),(function(t){return t.theme.sizes.width.small}),(function(t){return t.theme.boxes.padding.section.small})),y=c.d.p(m(),(function(t){return t.theme.colors.alert.danger}));e.default=function(){var t=Object(s.c)(),e=Object(i.useState)(""),n=e[0],r=e[1],c=Object(i.useState)(""),m=c[0],v=c[1],w=Object(i.useState)(""),g=w[0],x=w[1],k=Object(i.useState)(""),j=k[0],I=k[1],E=Object(i.useState)(""),L=E[0],O=E[1],T=function(){var t,e=(t=o.a.mark((function t(e){var r,i,c,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r=(new f.a).AuthResolver(),t.prev=2,i=void 0!==window.navigator?window.navigator.language:"en",c=Intl.DateTimeFormat().resolvedOptions().timeZone,t.next=7,r.signUp({username:m,email:n,password:g,passwordConfirmation:j,locale:i,timezone:c});case 7:(u=t.sent).ok?(d.a.storeJwt(u.data),Object(a.navigate)("/app/projects")):O(u.data.message),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),O("Invalid email/password");case 14:case"end":return t.stop()}}),t,null,[[2,11]])})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){h(a,r,o,i,c,"next",t)}function c(t){h(a,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}();return i.createElement(u.c,null,i.createElement(u.f,{title:"Sign Up",description:"Sign Up page for "+t.title+" website",urlSlug:"signup/"}),i.createElement(b,null,i.createElement(p.e,{heading:"Sign Up To Join "+t.title},L&&i.createElement(y,null,L),i.createElement(p.c,{htmlFor:"email"},"Email"),i.createElement(p.b,{name:"email",type:"email",placeholder:"unicorn@projectunicorn.net",onChange:function(t){return r(t.target.value)}}),i.createElement(p.c,{htmlFor:"username"},"Username"),i.createElement(p.b,{name:"username",type:"text",placeholder:"unicorn21",onChange:function(t){return v(t.target.value)}}),i.createElement(p.c,{htmlFor:"password"},"Password"),i.createElement(p.b,{name:"password1",type:"password",placeholder:"Your Password",onChange:function(t){return x(t.target.value)}}),i.createElement(p.c,{htmlFor:"password"},"Confirm Password"),i.createElement(p.b,{name:"password2",type:"password",placeholder:"Confirm Your Password",onChange:function(t){return I(t.target.value)}}),i.createElement(p.d,null,i.createElement(a.Link,{to:"/signin"},"Sign In")),i.createElement(p.a,null,i.createElement(l.a,{onClick:T,active:!1},"Sign Up")))))}},291:function(t,e,n){n(8),n(9),n(30),n(43),n(53),n(3),n(77),n(29),n(24),n(54),n(42),n(28);var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r=p;return function(o,a){if(r===l)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=I(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=l;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?d:f,u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=u;var p="suspendedStart",f="suspendedYield",l="executing",d="completed",h={};function m(){}function v(){}function w(){}var b={};b[a]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(T([])));g&&g!==n&&r.call(g,a)&&(b=g);var x=w.prototype=m.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){var e;this._invoke=function(n,o){function a(){return new Promise((function(e,a){!function e(n,o,a,i){var c=s(t[n],t,o);if("throw"!==c.type){var u=c.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?Promise.resolve(p.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(p).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,i)}))}i(c.arg)}(n,o,e,a)}))}return e=e?e.then(a,a):a()}}function I(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,I(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function T(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return v.prototype=x.constructor=w,w.constructor=v,w[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(j.prototype),j.prototype[i]=function(){return this},t.AsyncIterator=j,t.async=function(e,n,r,o){var a=new j(u(e,n,r,o));return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},292:function(t,e,n){t.exports=n(291)},298:function(t,e,n){"use strict";var r=function(){function t(){}return t.storeJwt=function(t){var e=this.stringifySessionData(t);localStorage.setItem("currentJwt",e)},t.getJwt=function(){var t=localStorage.getItem("currentJwt");if(null===t)return{refreshToken:void 0,token:void 0};try{return this.parseSessionData(t)}catch(e){return null}},t.parseSessionData=function(t){return JSON.parse(t)},t.stringifySessionData=function(t){return JSON.stringify(t)},t.deleteJwt=function(){localStorage.removeItem("currentJwt")},t}(),o=(n(4),n(21),function(){function t(){}return t.getJwtObject=function(t,e){try{var n=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),r=JSON.parse(window.atob(n));return e?JSON.parse(r[this.JwtClaimType]):r}catch(o){return null}},t}());o.JwtClaimType="http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata";var a=function(){function t(){}return t.isUserAuthenticated=function(){var t=r.getJwt();return t&&t.token},t.getMember=function(){return o.getJwtObject(r.getJwt().token,!0)},t.getUserId=function(){return this.getMember().id},t.getUsername=function(){return this.getMember().username},t}();n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}))},301:function(t,e,n){"use strict";n(53),n(3);var r=n(292),o=n.n(r),a=(n(291),{ok:!0,data:[{id:"3b721e49-a1b4-4253-a3c9-adaa134b5876",name:"Project One",projectTechnologies:[{name:"HTML",projectId:"3b721e49-a1b4-4253-a3c9-adaa134b5876"},{name:"CSS",projectId:"3b721e49-a1b4-4253-a3c9-adaa134b5876"}],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate massa nec est posuere, eget lobortis turpis tristique.",projectUsers:[{id:"ea968cc5-7834-4ff9-9472-6afb1bf00c42",projectId:"3b721e49-a1b4-4253-a3c9-adaa134b5876",userId:"08d74265-f020-e7a2-ce8c-e68276021e83",isOwner:!1,username:"Roy"}],communicationPlatformUrl:"https://slack.com/fw43rf",projectType:"community",repositoryUrl:"https://github.com/projectunic0rn/repo1",launchDate:new Date,lookingForMembers:!0,communicationPlatform:"slack"},{id:"1e7caa89-40cd-4d16-aea9-10c1cf0dabcd",name:"Mentrship",projectTechnologies:[{name:"HTML",projectId:"3b721e49-a1b4-4253-a3c9-adaa134b5876"},{name:"CSS",projectId:"3b721e49-a1b4-4253-a3c9-adaa134b5876"}],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate massa nec est posuere, eget lobortis turpis tristique.",projectUsers:[{id:"676da886-3b66-4b03-a18c-9c4e1a9e1abf",projectId:"1e7caa89-40cd-4d16-aea9-10c1cf0dabcd",userId:"7c73bf17-ccf7-4757-bdaa-84a37edac3ab",isOwner:!1,username:"dclark"}],communicationPlatformUrl:"https://discordapp.com/5qwc",projectType:"community",repositoryUrl:"https://github.com/projectunic0rn/repo1",launchDate:new Date,lookingForMembers:!0,communicationPlatform:"discord"},{id:"1e7caa89-40cd-4d16-aea9-10c1cf0dabcd",name:"Travel Map",projectTechnologies:[{name:"NodeJS",projectId:"3b721e49-a1b4-4253-a3c9-adaa134b5876"},{name:"Angular",projectId:"3b721e49-a1b4-4253-a3c9-adaa134b5876"}],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate massa nec est posuere, eget lobortis turpis tristique.",projectUsers:[{id:"ea968cc5-7834-4ff9-9472-6afb1bf00c42",projectId:"0e1d758e-1d1b-43e6-a658-2df898165557",userId:"cff2c023-8647-4fc8-af09-5ac436d10622",isOwner:!1,username:"Kkm"}],communicationPlatformUrl:"https://discordapp.com/5qwc",projectType:"community",repositoryUrl:"https://github.com/projectunic0rn/repo1",launchDate:new Date,lookingForMembers:!0,communicationPlatform:"discord"},{id:"0858f182-918e-4b4c-adee-feced0e5e2e5",name:"Project Two",projectTechnologies:[{name:"TypeScript",projectId:"3b721e49-a1b4-4253-a3c9-adaa134b5876"},{name:"GraphQL",projectId:"3b721e49-a1b4-4253-a3c9-adaa134b5876"}],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate massa nec est posuere, eget lobortis turpis tristique.",projectUsers:[{id:"ea968cc5-7834-4ff9-9472-6afb1bf00c42",projectId:"0858f182-918e-4b4c-adee-feced0e5e2e5",userId:"7029e8fa-8fb0-4ab3-b933-b26eab0f6687",isOwner:!1,username:"Ricky"}],communicationPlatformUrl:"https://slack.com/68urujs",projectType:"community",repositoryUrl:"https://github.com/projectunic0rn/repo1",launchDate:new Date,lookingForMembers:!0,communicationPlatform:"slack"}]}),i={ok:!0,data:{id:"9235f313-cd9b-4098-900c-4a751dd8d37a",projectId:"7aff3e27-d943-4f6a-bb24-52a53bfd9d89",userId:"c11a680f-b264-40e8-a730-801e5e8e9211",isOwner:!1,username:"Roy"}};function c(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){c(a,r,o,i,u,"next",t)}function u(t){c(a,r,o,i,u,"throw",t)}i(void 0)}))}}var s=function(){function t(){}var e=t.prototype;return e.createProject=function(){var t=u(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getProjects=function(){var t=u(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e.joinProject=function(){var t=u(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e.leaveProject=function(){var t=u(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t}();function p(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){p(a,r,o,i,c,"next",t)}function c(t){p(a,r,o,i,c,"throw",t)}i(void 0)}))}}var l=function(){function t(){}return t.makeRequest=function(){var t=f(o.a.mark((function t(e){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if((n=t.sent).ok||!n.type){t.next=5;break}throw new Error(n.statusText);case 5:return t.next=7,n.text();case 7:return r=t.sent,t.abrupt("return",r?JSON.parse(r):{});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t.get=function(){var e=f(o.a.mark((function e(n,r){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===r&&(r={}),a=new Request(n,{body:null,headers:r,method:"GET",mode:"cors"}),e.next=4,t.makeRequest(a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),t.post=function(){var e=f(o.a.mark((function e(n,r,a){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===r&&(r={}),void 0===a&&(a={}),i=new Request(n,{body:JSON.stringify(a),headers:r,method:"POST",mode:"cors"}),e.next=5,t.makeRequest(i);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),t.put=function(){var e=f(o.a.mark((function e(n,r,a){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===r&&(r={}),void 0===a&&(a={}),i=new Request(n,{body:JSON.stringify(a),headers:r,method:"PUT",mode:"cors"}),e.next=5,t.makeRequest(i);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),t.delete=function(){var e=f(o.a.mark((function e(n,r){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===r&&(r={}),a=new Request(n,{body:null,headers:r,method:"DELETE",mode:"cors"}),e.next=4,t.makeRequest(a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),t}(),d=n(298);function h(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function m(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){h(a,r,o,i,c,"next",t)}function c(t){h(a,r,o,i,c,"throw",t)}i(void 0)}))}}var v=function(){function t(){this.headers={Accept:"application/json",Authorization:"Bearer "+d.a.getJwt().token,"Content-Type":"application/json; charset=utf-8"},this.apiEndpoint={}.API_ENDPOINT||""}var e=t.prototype;return e.createProject=function(){var t=m(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.post(this.apiEndpoint+"/projects",this.headers,e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.getProjects=function(){var t=m(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.get(this.apiEndpoint+"/projects");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),e.joinProject=function(){var t=m(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.post(this.apiEndpoint+"/projectusers/",this.headers,e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.leaveProject=function(){var t=m(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.delete(this.apiEndpoint+"/projectusers/"+e,this.headers);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),t}(),w={ok:!0,data:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoie1wiaWRcIjpcIjA4ZDczZDUwLTZmZjMtNTk0ZS0xMDE0LTA1OWI5ZjZkOTMxN1wifSIsImV4cCI6MTU2OTUzNjc5OCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCJ9.d01uBxxk0lGMlOmRsTi2JpFx5zrloyJjTpQ5MWvXkU8"}},b={ok:!0,data:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoie1wiaWRcIjpcIjA4ZDczZDUwLTZmZjMtNTk0ZS0xMDE0LTA1OWI5ZjZkOTMxN1wifSIsImV4cCI6MTU2OTUzNjkyMCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCJ9.ecVEHUiLjw41kZa6-vbjVatd9RdiNr9QLNxRelqZyhQ"}};function y(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}var g=function(){function t(){}var e=t.prototype;return e.signIn=function(t){return b},e.signUp=function(){var t,e=(t=o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",w);case 1:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){y(a,r,o,i,c,"next",t)}function c(t){y(a,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}(),t}();function x(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function k(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){x(a,r,o,i,c,"next",t)}function c(t){x(a,r,o,i,c,"throw",t)}i(void 0)}))}}var j=function(){function t(){this.headers={Accept:"application/json","Content-Type":"application/json; charset=utf-8"},this.apiEndpoint={}.API_ENDPOINT||""}var e=t.prototype;return e.signIn=function(){var t=k(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.post(this.apiEndpoint+"/auth/login",this.headers,e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.signUp=function(){var t=k(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.post(this.apiEndpoint+"/auth/register",this.headers,e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),t}();n.d(e,"a",(function(){return I}));var I=function(){function t(){}var e=t.prototype;return e.ApiResolver=function(){return this.useMock()?new s:new v},e.AuthResolver=function(){return this.useMock()?new g:new j},e.useMock=function(){return!1},t}()},302:function(t,e,n){"use strict";var r=n(1);function o(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(["\n  background: ",";\n  color: ",";\n  border-radius: 0.2em;\n  padding: 3px 25px;\n  border: none;\n  transition: 0.15s;\n  @media (hover: hover) {\n    &:hover {\n      background: ",";\n      cursor: pointer;\n    }\n  }\n  :focus {\n    border: none;\n    outline: none;\n  }\n"]);return o=function(){return t},t}var a=r.d.button(o(),(function(t){var e=t.active,n=t.theme;return e?n.colors.button.secondary:n.colors.highlight}),(function(t){return t.theme.colors.baseinvert}),(function(t){var e=t.active,n=t.theme;return e?n.colors.button.secondary:n.colors.highlightDark}));function i(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(["\n  border: 6px solid ",";\n  border-radius: 100%;\n  border-top: 6px solid ",";\n  width: 48px;\n  height: 48px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  @-webkit-keyframes spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]);return i=function(){return t},t}var c=r.d.span(i(),(function(t){return t.theme.colors.highlightDark}),(function(t){return t.theme.colors.highlight}));n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c}))},321:function(t,e,n){"use strict";n.d(e,"c",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"d",(function(){return w})),n.d(e,"a",(function(){return b}));var r=n(0),o=n.n(r),a=n(1);function i(){var t=l(["\n  padding: 1.825em 0.125em;\n"]);return i=function(){return t},t}function c(){var t=l(["\n  margin: 0.625em 0.125em;\n  display: flex;\n  flex-direction: column;\n  max-width: fit-content;\n"]);return c=function(){return t},t}function u(){var t=l(["\n  max-width: 400px;\n  padding: 0.425em;\n  border-radius: 0;\n  box-shadow: none;\n  border: 1px solid gray;\n\n  :focus {\n    border-color: black;\n  }\n"]);return u=function(){return t},t}function s(){var t=l(["\n  font-weight: 800;\n  padding: 0.825em 0;\n"]);return s=function(){return t},t}function p(){var t=l(["\n  display: flex;\n  flex-direction: column;\n"]);return p=function(){return t},t}function f(){var t=l([""]);return f=function(){return t},t}function l(t,e){return e||(e=t.slice(0)),t.raw=e,t}var d=a.d.h2(f()),h=a.d.form(p()),m=a.d.label(s()),v=a.d.input(u()),w=a.d.div(c()),b=a.d.div(i());e.e=function(t){var e=t.heading,n=t.children;return o.a.createElement(h,null,o.a.createElement(d,null,e),n)}}}]);
//# sourceMappingURL=component---src-pages-signup-tsx-8352ed81e07948efec17.js.map