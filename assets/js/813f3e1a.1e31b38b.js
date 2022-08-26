"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[795],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1679:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},o="Apps",s={unversionedId:"concepts/apps",id:"concepts/apps",title:"Apps",description:"Cyclic apps are a combination of code from a git repository and serverless cloud infrastructure. Each app is a stack like:",source:"@site/docs/concepts/apps.md",sourceDirName:"concepts",slug:"/concepts/apps",permalink:"/concepts/apps",draft:!1,editUrl:"https://github.com/cyclic-software/docs/blob/main/docs/concepts/apps.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Starters",permalink:"/overview/starters"},next:{title:"Auth",permalink:"/concepts/auth"}},l={},p=[{value:"Infrastructure",id:"infrastructure",level:2},{value:"Hosting",id:"hosting",level:3},{value:"Runtime",id:"runtime",level:2},{value:"Code",id:"code",level:2},{value:"Build",id:"build",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"apps"},"Apps"),(0,a.kt)("p",null,"Cyclic apps are a combination of code from a git repository and serverless cloud infrastructure. Each app is a stack like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Infrastructure: Serverless cloud components - Lambda, ApiGateway, SNS/SQS etc."),(0,a.kt)("li",{parentName:"ul"},"Runtime: Instrumentation and bootstrapping"),(0,a.kt)("li",{parentName:"ul"},"Code: Application code from git")),(0,a.kt)("p",null,"When deployed, they service requests from browsers, servers, other apps, or anything that can call out to the internet over http."),(0,a.kt)("h2",{id:"infrastructure"},"Infrastructure"),(0,a.kt)("p",null,"Cyclic manages the provisioning, upgrades, instrumentation, configuration and cloud best practices to set your code up with scalable, fault tolerant, serverless infrastructure."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"AWS Cloud"),": App infrastructure is provisioned and managed as infrastructure as code (IaC) in ",(0,a.kt)("a",{href:"https://aws.amazon.com/cloudformation/",target:"_blank"},"AWS CloudFormation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Serverless"),": a cloud execution model that enables your apps to be highly scalable, they can process single requests or millions of requests on demand without having to change logic, manage clusters, tune parameters or deploy anything."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fault Tolerant"),": Apps have the capability to be provisioned with ",(0,a.kt)("a",{href:"https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-iv-multi-site-active-active/",target:"_blank"},"active-active disaster recovery strategy")," in all AWS regions. This means that applications can be made resilient to severe outages, limiting impact to end-users with zero downtime.")),(0,a.kt)("h3",{id:"hosting"},"Hosting"),(0,a.kt)("p",null,"We describe hosting in terms of where the underlying app infrastructure is hosted. While the application code is executed on AWS Lambda compute, the Lambdas themselves can be hosted in any AWS cloud account, ",(0,a.kt)("a",{parentName:"p",href:"/concepts/hosting"},"ours or yours"),"."),(0,a.kt)("h2",{id:"runtime"},"Runtime"),(0,a.kt)("p",null,"The runtime is the Cyclic environment and process that manages the execution of your code."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bootstraps applications to run in a serverless Lambda environment "),(0,a.kt)("li",{parentName:"ul"},"Marshalls/unmarshalls requests and responses from port-listening applications to ApiGateway  "),(0,a.kt)("li",{parentName:"ul"},"Error handling and reporting"),(0,a.kt)("li",{parentName:"ul"},"Captures request/response pairs to and from the application code"),(0,a.kt)("li",{parentName:"ul"},"Captures traces and logs generated by application code")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("p",null,"You bring the code by connecting a git repository to Cyclic. Code is ",(0,a.kt)("a",{parentName:"p",href:"/overview/build"},"built and deployed")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"git push")," to the default branch on GitHub. Apps are directly linked to their git repositories via webhooks that Cyclic installs. "),(0,a.kt)("p",null,"The repos must contain a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file to inform the build and runtime processes on how to build and start apps.  "),(0,a.kt)("h3",{id:"build"},"Build"),(0,a.kt)("p",null,"Cyclic follows the instructions provided in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," scripts included in your code. The build environment is transient, all build files/memory is removed after the build. While built apps are ",(0,a.kt)("a",{parentName:"p",href:"/overview/limits"},"limited")," to 250 MB, the build environment can support up to 10GB including dev dependencies."),(0,a.kt)("p",null,"Cyclic will prune any devDependencies from the build directory before trying to package. Therefore move any frameworks or modules that are only needed at build time into the ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," section of your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."))}u.isMDXComponent=!0}}]);