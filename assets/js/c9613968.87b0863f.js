"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,v=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"overview",title:"Overview",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"SAP Cloud SDK offers type-safe client generators for OpenAPI services",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","openapi"]},i=void 0,s={unversionedId:"features/rest/overview",id:"features/rest/overview",title:"Overview",description:"SAP Cloud SDK offers type-safe client generators for OpenAPI services",source:"@site/docs-java/features/rest/overview.mdx",sourceDirName:"features/rest",slug:"/features/rest/overview",permalink:"/cloud-sdk/docs/java/features/rest/overview",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/features/rest/overview.mdx",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"SAP Cloud SDK offers type-safe client generators for OpenAPI services",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","openapi"]},sidebar:"docsJavaSidebar",previous:{title:"Generic OData Client",permalink:"/cloud-sdk/docs/java/features/odata/generic-untyped-odata-client"},next:{title:"Generate a Typed OpenAPI Client",permalink:"/cloud-sdk/docs/java/features/rest/generate-rest-client"}},l={},c=[{value:"OpenAPI Based Type-Safe Client for RESTful Services in Java",id:"openapi-based-type-safe-client-for-restful-services-in-java",level:2},{value:"Pregenerated Type-Safe OpenAPI Client",id:"pregenerated-type-safe-openapi-client",level:3},{value:"Why Using SAP Cloud SDK for Java With OpenAPI Services?",id:"why-using-sap-cloud-sdk-for-java-with-openapi-services",level:2},{value:"I&#39;m Providing a Service on SAP Business Technology Platform. How Can I Ship It With SAP Cloud SDK?",id:"im-providing-a-service-on-sap-business-technology-platform-how-can-i-ship-it-with-sap-cloud-sdk",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"openapi-based-type-safe-client-for-restful-services-in-java"},"OpenAPI Based Type-Safe Client for RESTful Services in Java"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI")," standard is a popular format to define RESTful APIs.\nTogether with ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/odata/overview"},"OData")," it is one of the key API definition formats used at SAP.\nThe SAP Cloud SDK provides convenient tooling to make the consumption of OpenAPI services easy and convenient.\nWe provide a customized ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/rest/generate-rest-client"},"OpenAPI code generator")," capable of converting an OpenAPI specification into a type-safe Java client library nicely integrated with the SAP Business Technology Platform abstractions also provided by the SAP Cloud SDK.\nYou can use that generator to create a client for an OpenAPI-based API of your choice.\nTo speed up things for developers and reduce maintenance, we are working with different SAP services to release pregenerated client libraries available through ",(0,r.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:com.sap.cloud.sdk*"},"Maven Central"),".\nAnother way to get a client library is to generate it yourself based on API specifications available at ",(0,r.kt)("a",{parentName:"p",href:"https://api.sap.com/"},"SAP Business Accelerator Hub"),".\nIf you encounter any problems or errors with OpenAPI tooling give us feedback via our ",(0,r.kt)("a",{parentName:"p",href:"/docs/overview/get-support"},"support channels"),"."),(0,r.kt)("h3",{id:"pregenerated-type-safe-openapi-client"},"Pregenerated Type-Safe OpenAPI Client"),(0,r.kt)("p",null,"We ship pregenerated type-safe OpenAPI client libraries as modules in collaboration with popular SAP services available on SAP Business Technology Platform and beyond."),(0,r.kt)("p",null,"Depending on the scope, modules could be available only internally within SAP or publicly released.\nThe ",(0,r.kt)("a",{parentName:"p",href:"clients/scp-workflow-rest-api"},"SAP Workflow service")," is an example of a publicly released API module."),(0,r.kt)("h2",{id:"why-using-sap-cloud-sdk-for-java-with-openapi-services"},"Why Using SAP Cloud SDK for Java With OpenAPI Services?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You'll benefit from type-safety, less code boilerplate, and better developer experience."),(0,r.kt)("li",{parentName:"ul"},"We take care of various complexities around the development of applications and extensions on the SAP Business Technology Platform."),(0,r.kt)("li",{parentName:"ul"},"You'll get convenience abstractions for Destinations, Authentication, Service bindings, CSRF and ETag tokens, Headers, and much more."),(0,r.kt)("li",{parentName:"ul"},"We hide the complexities of cloud development making many tasks ridiculously easy."),(0,r.kt)("li",{parentName:"ul"},"You're getting best in class support from the SAP Cloud SDK development team"),(0,r.kt)("li",{parentName:"ul"},"We take care of change management by continuously updating, integrating, and shipping the latest version of services that we release."),(0,r.kt)("li",{parentName:"ul"},"Our documentation is written by developers for developers.\nWe keep it relevant and up to date.")),(0,r.kt)("h2",{id:"im-providing-a-service-on-sap-business-technology-platform-how-can-i-ship-it-with-sap-cloud-sdk"},"I'm Providing a Service on SAP Business Technology Platform. How Can I Ship It With SAP Cloud SDK?"),(0,r.kt)("p",null,"Reach out to us via internal communication channels and we'll provide you with information on contributing."),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"We are happy to hear from you via internal communication channels or our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk/issues/new/choose"},"GitHub repository"),"."))}d.isMDXComponent=!0}}]);