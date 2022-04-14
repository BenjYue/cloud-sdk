"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4401],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,u=h["".concat(d,".").concat(m)]||h[m]||p[m]||i;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},61609:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={id:"multi-tenancy-thread-context",title:"Multitenancy With the Thread Context",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Thread Context",description:"This article describes how the SAP Cloud SDK for Java provides an application context that is stored in a thread-safe manner and enables cloud-native features to be used out of the box.",keywords:["sap","cloud","sdk","thread context","multi tenancy","cloud native","tenant","user","principal","JWT","AuthToken"]},d=void 0,l={unversionedId:"java/features/multi-tenancy/multi-tenancy-thread-context",id:"java/features/multi-tenancy/multi-tenancy-thread-context",title:"Multitenancy With the Thread Context",description:"This article describes how the SAP Cloud SDK for Java provides an application context that is stored in a thread-safe manner and enables cloud-native features to be used out of the box.",source:"@site/docs/java/features/multi-tenancy/thread-context.mdx",sourceDirName:"java/features/multi-tenancy",slug:"/java/features/multi-tenancy/multi-tenancy-thread-context",permalink:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/multi-tenancy/thread-context.mdx",tags:[],version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1649939098,formattedLastUpdatedAt:"4/14/2022",frontMatter:{id:"multi-tenancy-thread-context",title:"Multitenancy With the Thread Context",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Thread Context",description:"This article describes how the SAP Cloud SDK for Java provides an application context that is stored in a thread-safe manner and enables cloud-native features to be used out of the box.",keywords:["sap","cloud","sdk","thread context","multi tenancy","cloud native","tenant","user","principal","JWT","AuthToken"]},sidebar:"someSidebar",previous:{title:"Certificate-based Authentication",permalink:"/cloud-sdk/docs/java/features/connectivity/sdk-connectivity-mtls"},next:{title:"Resilience",permalink:"/cloud-sdk/docs/java/features/resilience/"}},c={},p=[{value:"What Is a Thread Context?",id:"what-is-a-thread-context",level:2},{value:"How Is a Thread Context Created?",id:"how-is-a-thread-context-created",level:2},{value:"How Can the Thread Context Be Used?",id:"how-can-the-thread-context-be-used",level:2},{value:"Accessing Information",id:"accessing-information",level:3},{value:"Storing Information",id:"storing-information",level:3},{value:"Running Asynchronous Operations",id:"running-asynchronous-operations",level:3}],h={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-a-thread-context"},"What Is a Thread Context?"),(0,i.kt)("p",null,"The SAP Cloud SDK for Java provides a so-called ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadContext"),".\nIt serves as thread-safe storage for potentially sensitive information.\nSpecifically, the following three objects are stored:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The current ",(0,i.kt)("em",{parentName:"li"},"Tenant")),(0,i.kt)("li",{parentName:"ul"},"The current ",(0,i.kt)("em",{parentName:"li"},"Principal")," (User)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://jwt.io"},"JSON Web Token")," (JWT)")),(0,i.kt)("p",null,"This information is used throughout the SAP Cloud SDK to provide features like tenant and principal isolation, JWT verification and authorization against other systems and services.\nTo ensure different tenants and users are properly isolated in an application, this information is always limited to the thread it was created on unless it is explicitly passed on by the application (see ",(0,i.kt)("a",{parentName:"p",href:"#running-asynchronous-operations"},"Propagating the Thread Context"),")."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Multi-tenancy describes the access of different, technically separated user groups to the same instance of an application.\nIn the terms of XSUAA service, these user groups are called Tenants, while in terms of Identity Authentication Service (IAS) they are called Zones."),(0,i.kt)("p",{parentName:"div"},"The SAP Cloud SDK for Java uses the term ",(0,i.kt)("em",{parentName:"p"},"Tenant")," to refer to both XSUAA Tenants and IAS Zones.\nThis implies, that the ",(0,i.kt)("em",{parentName:"p"},"tenantId")," exposed in the ",(0,i.kt)("em",{parentName:"p"},"Tenant")," interface either returns the ",(0,i.kt)("em",{parentName:"p"},"tenantId")," or ",(0,i.kt)("em",{parentName:"p"},"zoneId"),", depending on the context you are currently running in."))),(0,i.kt)("h2",{id:"how-is-a-thread-context-created"},"How Is a Thread Context Created?"),(0,i.kt)("p",null,"The SAP Cloud SDK provides a ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/servlet/RequestAccessorFilter.html"},(0,i.kt)("inlineCode",{parentName:"a"},"RequestFilter"))," that will listen to incoming HTTP requests.\nIf the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"JWT")," from the ",(0,i.kt)("a",{parentName:"p",href:"https://blogs.sap.com/2020/04/03/sap-application-router/"},(0,i.kt)("inlineCode",{parentName:"a"},"AppRouter")),", the filter will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verify this token"),(0,i.kt)("li",{parentName:"ul"},"Store it in the ",(0,i.kt)("inlineCode",{parentName:"li"},"ThreadContext")," and"),(0,i.kt)("li",{parentName:"ul"},"Pull the ",(0,i.kt)("em",{parentName:"li"},"Tenant")," and ",(0,i.kt)("em",{parentName:"li"},"Principal")," information from it")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Integration with CAP")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In case you are using CAP (with the ",(0,i.kt)("inlineCode",{parentName:"p"},"cds-integration-cloud-sdk")," dependency) the Tenant and Principal information will ",(0,i.kt)("strong",{parentName:"p"},"instead")," be derived from the ",(0,i.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/java/request-contexts"},"CAP Request Context"),".\nThat also means that the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadContext")," will not be used when accessing this information.\nAll other information (not Tenant or Principal) will still be derived and maintained via the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadContext"),"."))),(0,i.kt)("h2",{id:"how-can-the-thread-context-be-used"},"How Can the Thread Context Be Used?"),(0,i.kt)("h3",{id:"accessing-information"},"Accessing Information"),(0,i.kt)("p",null,"The Thread context can be accessed via the static ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/thread/ThreadContextAccessor.html"},(0,i.kt)("inlineCode",{parentName:"a"},"ThreadContextAccessor")),"."),(0,i.kt)("p",null,"For the frequently needed ",(0,i.kt)("em",{parentName:"p"},"Tenant"),", ",(0,i.kt)("em",{parentName:"p"},"Principal")," and ",(0,i.kt)("em",{parentName:"p"},"JWT")," there are also dedicated accessors:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/tenant/TenantAccessor.html"},(0,i.kt)("inlineCode",{parentName:"a"},"TenantAccessor"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/security/principal/PrincipalAccessor.html"},(0,i.kt)("inlineCode",{parentName:"a"},"PrincipalAccessor"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/security/AuthTokenAccessor.html"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthTokenAccessor")))),(0,i.kt)("h3",{id:"storing-information"},"Storing Information"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/thread/ThreadContext.html"},(0,i.kt)("inlineCode",{parentName:"a"},"ThreadContext"))," allows for some manipulation by the application.\nHowever, oftentimes it is more convenient to leverage the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeWith...()")," functionality offered by the dedicated accessors."),(0,i.kt)("p",null,"Consider a scenario where some part of the code should run on behalf of a specific tenant.\nIn that case you can override the current tenant explicitly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"TenantAccessor.executeWithTenant(customTenant, () -> doStuff());\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"CAP Integration")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The above does not apply for ",(0,i.kt)("inlineCode",{parentName:"p"},"TenantAccessor")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PrincipalAccessor")," when using the CAP framework (with the ",(0,i.kt)("inlineCode",{parentName:"p"},"cds-integration-cloud-sdk")," dependency).\nWhen using CAP the Tenant and Principal information is derived from the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestContext"),".\nPlease refer to ",(0,i.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/java/request-contexts#defining-requestcontext"},"this section")," on how to override existing values in the CAP context."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Be aware, that the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeWith")," methods shown above only replaces the given property, but does not update properties derived from it."),(0,i.kt)("p",{parentName:"div"},"Example: You have a special ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthToken"),", that you propagate with ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthTokenAccessor.executeWithAuthToken"),".\nInside the given code block only the ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthToken")," will be replaced, while e.g. the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tenant")," is the same as in the original context."),(0,i.kt)("p",{parentName:"div"},"If you want to start a fresh context based on a given ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthToken"),", for example accessing information of the provider tenant while in a subscriber context, have a look at this code:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nTenant retrieveProviderTenant()\n{\n    // retrieves an access token from the provider context\n    AuthToken providerXsuaaAccessToken = AuthTokenAccessor.getXsuaaServiceToken();\n    return new ThreadContextExecutor()\n        // don't reuse the original context\n        .withoutParentThreadContext()\n        // add the provider token into the new context\n        .withListeners(new AuthTokenThreadContextListener(providerXsuaaAccessToken))\n        // return the actual provider tenant\n        .execute(TenantAccessor::getCurrentTenant);\n}\n\n")))),(0,i.kt)("h3",{id:"running-asynchronous-operations"},"Running Asynchronous Operations"),(0,i.kt)("p",null,"As the name suggests the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadContext")," is bound to a thread, more specifically to the one it was created.\nIf asynchronous operations need to access the information, it has to be propagated to the new threads."),(0,i.kt)("p",null,"The following code achieves this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ThreadContextExecutor executor = new ThreadContextExecutor();\nCallable operationWithContext = () -> executor.execute(() -> operation());\n\ninvokeAsynchronously(operationWithContext);\n")),(0,i.kt)("p",null,"Take note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadContextExecutor")," is created ",(0,i.kt)("em",{parentName:"p"},"before")," performing the asynchronous operation.\nThis is important because only at that time the context is available and will be propagated."),(0,i.kt)("p",null,"A similar approach can be applied with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tenant"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Principal")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthToken")," accessors.\nThis code runs an asynchronous operation with a dedicated tenant:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Callable operationWithTenant = TenantAccessor.executeWithTenant(customTenant, () -> operation());\n\ninvokeAsynchronously(operationWithContext);\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"CAP Integration")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In case you are using CAP the CAP Request Context also needs to be passed on (in addition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadContext"),").\nPlease refer to ",(0,i.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/guides/cap-sdk-integration"},"this guide")," on how to achieve this."))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Thread Lifecycle")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Be cautious with long-running, asynchronous operations.\nA propagated thread context will only persist as long as the thread lives that it was created on.\nSo when the parent thread dies the context will cease to exist and no longer be available in any of the threads."),(0,i.kt)("details",null,(0,i.kt)("summary",null," Workaround "),"You can work around this limitation with the following approach:",(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"RequestHeaderContainer requestHeaders = RequestHeaderAccessor.tryGetHeaderContainer().getOrElse(RequestHeaderContainer.EMPTY);\nThreadContextExecutor executor = new ThreadContextExecutor().withThreadContext(new DefaultThreadContext())\n        .withListeners(new RequestHeaderThreadContextListener(requestHeaders));\n\nCallable operationWithContext = () -> executor.execute(() -> operation());\ninvokeAsynchronously(operationWithContext);\n"))))))}m.isMDXComponent=!0}}]);