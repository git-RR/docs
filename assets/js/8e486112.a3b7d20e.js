"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},s="Websockets",a={unversionedId:"troubleshooting/websockets",id:"troubleshooting/websockets",title:"Websockets",description:"Websockets are currently not supported in Cyclic apps.",source:"@site/docs/troubleshooting/websockets.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/websockets",permalink:"/troubleshooting/websockets",draft:!1,editUrl:"https://github.com/cyclic-software/docs/blob/main/docs/troubleshooting/websockets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Nodemon",permalink:"/troubleshooting/nodemon"}},c={},l=[{value:"Why?",id:"why",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"websockets"},"Websockets"),(0,o.kt)("p",null,"Websockets are currently not supported in Cyclic apps."),(0,o.kt)("h2",{id:"why"},"Why?"),(0,o.kt)("p",null,"Serverless functions are active on-demand for just long enough to process a single event. After the processing task is finished, often just a few milliseconds, the runtime is suspended until it is again invoked by another event. The on-demand short lifecycle enables applications to have massive scalability with almost no idle cost. "),(0,o.kt)("p",null,"Websockets require a persistent bi-directional link. In most Websockets implementations, for an idle connection, a compute instance must be reserved for the duration of the connection regardless of whether a message is available for processing or not. At the same time, if a high traffic volume is possible - potentially many compute instances should be reserved in anticipation. This creates the need for further complexity in capacity planning and  managing tasks to facilitate the scaling up and down of the sizing and number of compute instances."))}p.isMDXComponent=!0}}]);