"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6549,6147,8634,1275,654,9812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(l,".").concat(c)]||m[c]||p[c]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,s={unversionedId:"features/common/custom-request-config-note",id:"features/common/custom-request-config-note",title:"custom-request-config-note",description:"To ensure API consistency, the SAP Cloud SDK does not allow overriding the following options:",source:"@site/docs-js/features/common/custom-request-config-note.mdx",sourceDirName:"features/common",slug:"/features/common/custom-request-config-note",permalink:"/cloud-sdk/docs/js/v3/features/common/custom-request-config-note",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/custom-request-config-note.mdx",tags:[],version:"current",frontMatter:{}},l={},u=[],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To ensure API consistency, the SAP Cloud SDK does not allow overriding the following options:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"method")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"baseURL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")))))}p.isMDXComponent=!0},96147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,s={unversionedId:"features/common/custom-request-config",id:"features/common/custom-request-config",title:"custom-request-config",description:"By default, the SAP Cloud SDK uses axios as an HTTP client for executing requests.",source:"@site/docs-js/features/common/custom-request-config.mdx",sourceDirName:"features/common",slug:"/features/common/custom-request-config",permalink:"/cloud-sdk/docs/js/v3/features/common/custom-request-config",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/custom-request-config.mdx",tags:[],version:"current",frontMatter:{}},l={},u=[],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default, the SAP Cloud SDK uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," as an HTTP client for executing requests.\nThe SAP Cloud SDK derives and configures most request options including ",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headers"),", etc.\nYou can provide a custom request configuration to pass additional options to axios.\nThe example below demonstrates how to configure the response data type, typically used when downloading a file from an endpoint."))}p.isMDXComponent=!0},24249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,s={unversionedId:"features/common/execute-raw-overview",id:"features/common/execute-raw-overview",title:"execute-raw-overview",description:"In addition to the execute() method, you can execute a request using the executeRaw() method.",source:"@site/docs-js/features/common/execute-raw-overview.mdx",sourceDirName:"features/common",slug:"/features/common/execute-raw-overview",permalink:"/cloud-sdk/docs/js/v3/features/common/execute-raw-overview",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/execute-raw-overview.mdx",tags:[],version:"current",frontMatter:{}},l={},u=[],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute()")," method, you can execute a request using the ",(0,r.kt)("inlineCode",{parentName:"p"},"executeRaw()")," method.\nIt returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpResponse")," instance, which contains the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status"),": the status code of the response"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headers"),": the response headers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data"),": the response body"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request"),": the original request")))}p.isMDXComponent=!0},33518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,s={unversionedId:"features/common/execute-raw-use-cases",id:"features/common/execute-raw-use-cases",title:"execute-raw-use-cases",description:"Typical cases, where you might need to use the executeRaw() method are:",source:"@site/docs-js/features/common/execute-raw-use-cases.mdx",sourceDirName:"features/common",slug:"/features/common/execute-raw-use-cases",permalink:"/cloud-sdk/docs/js/v3/features/common/execute-raw-use-cases",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/execute-raw-use-cases.mdx",tags:[],version:"current",frontMatter:{}},l={},u=[],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Typical cases, where you might need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"executeRaw()")," method are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You need additional information about the response, like the status code or response headers."),(0,r.kt)("li",{parentName:"ul"},"You need additional information about the request, like payload, method, or request headers."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"execute()")," method is omitted in some request builders because the response data cannot be deserialized by the request builder."),(0,r.kt)("li",{parentName:"ul"},"Debugging purposes.")))}p.isMDXComponent=!0},25754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,s={unversionedId:"features/common/skip-csrf-token",id:"features/common/skip-csrf-token",title:"skip-csrf-token",description:"For some services, the CSRF token is not required even for non-GET requests.",source:"@site/docs-js/features/common/skip-csrf-token.mdx",sourceDirName:"features/common",slug:"/features/common/skip-csrf-token",permalink:"/cloud-sdk/docs/js/v3/features/common/skip-csrf-token",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/skip-csrf-token.mdx",tags:[],version:"current",frontMatter:{}},l={},u=[],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For some services, the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF")," token is not required even for non-",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests.\nTherefore, skipping to fetch the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF")," token makes sense as a performance improvement.\nYou can disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF")," token request by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"skipCsrfTokenFetching()")," method like below:"))}p.isMDXComponent=!0},86311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=(n(44996),n(65488)),o=n(85162),s=n(41609);const l={id:"execute-request",title:"Executing a Request Using a Generated OData v2/v4 Client",sidebar_label:"Execute an OData request",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","consume"]},u=void 0,d={unversionedId:"features/odata/execute-request",id:"features/odata/execute-request",title:"Executing a Request Using a Generated OData v2/v4 Client",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",source:"@site/docs-js/features/odata/execute-odata-request.mdx",sourceDirName:"features/odata",slug:"/features/odata/execute-request",permalink:"/cloud-sdk/docs/js/v3/features/odata/execute-request",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/execute-odata-request.mdx",tags:[],version:"current",frontMatter:{id:"execute-request",title:"Executing a Request Using a Generated OData v2/v4 Client",sidebar_label:"Execute an OData request",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","consume"]},sidebar:"docsJsSidebar",previous:{title:"Generate an OData Client",permalink:"/cloud-sdk/docs/js/v3/features/odata/generate-client"},next:{title:"OData v2 Client API",permalink:"/cloud-sdk/docs/js/v3/features/odata/v2-client"}},p={},m=[{value:"General Request Structure",id:"general-request-structure",level:2},{value:"Conversion of OData Types",id:"conversion-of-odata-types",level:3},{value:"Setting Custom Request Headers",id:"setting-custom-request-headers",level:3},{value:"Setting Custom Query Parameters",id:"setting-custom-query-parameters",level:3},{value:"Setting a Custom Service Path",id:"setting-a-custom-service-path",level:3},{value:"Setting a Custom Request Configuration",id:"setting-a-custom-request-configuration",level:3},{value:"Appending Paths to the Request URL Built by the Request Builders",id:"appending-paths-to-the-request-url-built-by-the-request-builders",level:3},{value:"Setting Middlewares",id:"setting-middlewares",level:3},{value:"Getting the Raw Response and the Original Request",id:"getting-the-raw-response-and-the-original-request",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Deserialize Nested Navigation Properties",id:"deserialize-nested-navigation-properties",level:4}],c={toc:m};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Once you have generated a typed OData client using the SAP Cloud SDK generator, you can use this OData client to execute HTTP requests for your service.\nThe client provides request builders for the different types of requests and abstractions of the entity sets of the given service."),(0,r.kt)("h2",{id:"general-request-structure"},"General Request Structure"),(0,r.kt)("p",null,"On an abstract level, creating a request using the fluent API always follows the same simple structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { myEntityService } from './outputDir/my-service';\n\nconst { myEntityApi } = myEntityService();\nreturn myEntityApi.requestBuilder()\n  .<requestType>(...)\n  .<additionalRequestConfiguration>(...)\n  .execute(destination);\n")),(0,r.kt)("p",null,"If you are using an OData client, that you generated on your own, import the service function, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"myEntityService"),", from the generated service directory (",(0,r.kt)("inlineCode",{parentName:"p"},"my-service"),") within the specified output directory (",(0,r.kt)("inlineCode",{parentName:"p"},"outputDir"),").\nThe name of the service directory corresponds to the ",(0,r.kt)("inlineCode",{parentName:"p"},"directoryName")," specified in the service mapping file (",(0,r.kt)("inlineCode",{parentName:"p"},"serviceMapping.json")," by default) in your input directory."),(0,r.kt)("p",null,"Destructure the service to get the API of the entity you want to make requests for - ",(0,r.kt)("inlineCode",{parentName:"p"},"myEntityApi")," in the example above."),(0,r.kt)("p",null,"Every entity API has a ",(0,r.kt)("inlineCode",{parentName:"p"},"requestBuilder()")," method, that allows to chain all types of request builders that are available for this entity, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"myEntityApi.requestBuilder().getAll()")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"getAll")," request type."),(0,r.kt)("p",null,"See the list below for details on all available request types (denoted by ",(0,r.kt)("inlineCode",{parentName:"p"},"requestType")," in the example above):"),(0,r.kt)(i.Z,{groupId:"odataVersion",defaultValue:"v2",values:[{label:"OData v2",value:"v2"},{label:"OData v4",value:"v4"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"v2",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("a",{href:"./v2-client#getall-request-builder"},(0,r.kt)("code",null,"getAll"))," ","Build requests to get a list of entities (OData v2)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./v2-client#getbykey-request-builder"},(0,r.kt)("code",null,"getByKey"))," ","Build requests to get an entity based on a key (OData v2)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./v2-client#create-request-builder"},(0,r.kt)("code",null,"create"))," ","Build requests to create entities (OData v2)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./v2-client#update-request-builder"},(0,r.kt)("code",null,"update"))," ","Build requests to update entities (OData v2)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./v2-client#delete-request-builder"},(0,r.kt)("code",null,"delete"))," ","Build requests to delete entities (OData v2)")),(0,r.kt)(o.Z,{value:"v4",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("a",{href:"./v4-client#getall-request-builder"},(0,r.kt)("code",null,"getAll"))," ","Build requests to get a list of entities (OData v4)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./v4-client#getbykey-request-builder"},(0,r.kt)("code",null,"getByKey"))," ","Build requests to get an entity based on a key (OData v4)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./v4-client#create-request-builder"},(0,r.kt)("code",null,"create"))," ","Build requests to create entities (OData v4)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./v4-client#update-request-builder"},(0,r.kt)("code",null,"update"))," ","Build requests to update entities (OData v4)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./v4-client#delete-request-builder"},(0,r.kt)("code",null,"delete"))," ","Build requests to delete entities (OData v4)"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some entities do not support all the request types, which in turn won't be available through the API.")),(0,r.kt)("p",null,"The request can further be configured by chaining additional configuration functions (denoted by ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalRequestConfiguration")," in the example above).\nAll requests can be configured by setting ",(0,r.kt)("a",{parentName:"p",href:"#setting-custom-request-headers"},"custom request headers"),", ",(0,r.kt)("a",{parentName:"p",href:"#setting-custom-query-parameters"},"custom query parameters")," and a ",(0,r.kt)("a",{parentName:"p",href:"#setting-a-custom-service-path"},"custom service path"),"."),(0,r.kt)("p",null,"Each request type has additional request specific configuration options, e.g. creating an entity ",(0,r.kt)("inlineCode",{parentName:"p"},"asChildOf")," another entity for create requests, ETag handling for update and delete requests, as well as set operations for ",(0,r.kt)("inlineCode",{parentName:"p"},"getAll")," requests and selecting properties for ",(0,r.kt)("inlineCode",{parentName:"p"},"getAll")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getByKey")," requests."),(0,r.kt)("p",null,"The last step when making a request using the SAP Cloud SDK is the request execution.\nOnce the request is configured use the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute()")," method and pass a ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v3/features/connectivity/destinations"},"destination")," to it.\nThis will automatically construct your request URL and headers, execute the request, and return a typed response if applicable."),(0,r.kt)("h3",{id:"conversion-of-odata-types"},"Conversion of OData Types"),(0,r.kt)("p",null,"OData uses the Entity Data Model (EDM) to represent values such as strings, numbers, dates, and times.\nCalling the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute()")," method by default automatically converts OData Entity Data Model (EDM) values to their respective types in JavaScript and TypeScript."),(0,r.kt)("p",null,"By default, the SAP Cloud SDK converts EDM types into TypeScript types as described by the following tables.\nThis can be changed by providing custom serializers and deserializers as described ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v3/features/odata/v2-client#customize-de-serialization"},"here for OData v2")," and ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v3/features/odata/v4-client#customize-de-serialization"},"here for OData v4"),"."),(0,r.kt)("p",null,"For definition of the EDM data types in OData, see ",(0,r.kt)("a",{parentName:"p",href:"https://www.odata.org/documentation/odata-version-2-0/json-format/"},"the v2 spec")," or the ",(0,r.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/odata/odata/v4.0/os/part3-csdl/odata-v4.0-os-part3-csdl.html#_The_edm:Documentation_Element"},"v4 spec")," of OData."),(0,r.kt)("p",null,"The following table describes how types are mapped by default:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"EDM Type"),(0,r.kt)("th",{parentName:"tr",align:null},"TypeScript Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.Guid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.Decimal")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.Int16")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.Int32")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.Int64")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.Single")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.Double")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.Float")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Not an actual edm type, implemented for compatibility")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.Byte")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.SByte")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.DateTimeOffset")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"moment.Moment")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.Binary")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.DateTime")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"moment.Moment")),(0,r.kt)("td",{parentName:"tr",align:null},"OData v2 only, precision limited to milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.Time")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"pathname:///api/v3/interfaces/sap_cloud_sdk_odata_common.Time.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Time"))),(0,r.kt)("td",{parentName:"tr",align:null},"OData v2 only, does not consider time zones")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.Date")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"moment.Moment")),(0,r.kt)("td",{parentName:"tr",align:null},"OData v4 only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.Duration")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"moment.Duration")),(0,r.kt)("td",{parentName:"tr",align:null},"OData v4 only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Edm.TimeOfDay")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"pathname:///api/v3/interfaces/sap_cloud_sdk_odata_common.Time.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Time"))),(0,r.kt)("td",{parentName:"tr",align:null},"OData v4 only, does not consider time-zones")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Any other type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"If you require the raw OData response, you can look into ",(0,r.kt)("a",{parentName:"p",href:"#getting-the-raw-response-and-the-original-request"},"getting the raw response and the original request"),"."),(0,r.kt)("h3",{id:"setting-custom-request-headers"},"Setting Custom Request Headers"),(0,r.kt)("p",null,"The SAP Cloud SDK automatically sets some necessary request headers on every request.\nYou can specify additional custom headers using the ",(0,r.kt)("inlineCode",{parentName:"p"},"addCustomHeaders()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nmyEntityApi.requestBuilder().getAll().addCustomHeaders({\n  apikey: 'my-api-key'\n});\n")),(0,r.kt)("p",null,"The keys and values of the passed object correspond with the header names and values.\nCustom headers take priority over automatically generated headers.\nAutomatically generated headers are sent with lowercase header names, and custom headers keep the case they were set in.\nSAP API Business Hub sandbox requires a custom header called ",(0,r.kt)("inlineCode",{parentName:"p"},"apikey"),".\nThe example above shows how to add this header."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Setting an ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"apikey")," header (regardless of lowercase or uppercase spelling) will skip any automatic authorization header building that the SAP Cloud SDK would normally do.")),(0,r.kt)("h3",{id:"setting-custom-query-parameters"},"Setting Custom Query Parameters"),(0,r.kt)("p",null,"The SAP Cloud SDK adds necessary query parameters for a request based on your configuration.\nYou can add custom parameters by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"withCustomQueryParameters()")," method.\nCustom query parameters take precedence over those created by the SAP Cloud SDK."),(0,r.kt)("p",null,"In the example below an additional query parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"language=en")," will be added to the request URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nmyEntityApi.requestBuilder().getAll().withCustomQueryParameters({\n  language: 'en'\n});\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you want to set a query parameter in quotes (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"language='en'"),") you will have to provide the parameter with quotes, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"{ language: \"'en'\" }"),".")),(0,r.kt)("h3",{id:"setting-a-custom-service-path"},"Setting a Custom Service Path"),(0,r.kt)("p",null,"If a service specification contains a specification for the ",(0,r.kt)("inlineCode",{parentName:"p"},"servicePath"),", the SAP Cloud SDK generator generates an OData client with a default service path according to the specification (typically ",(0,r.kt)("inlineCode",{parentName:"p"},"'/sap/opus/data/sap/'")," for SAP S/4HANA services).\nWhen there is no such path defined in the specification, it can be manually set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"service-mapping.json"),".\nIt can also be adjusted per request by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"withCustomServicePath()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nmyEntityApi\n  .requestBuilder()\n  .getAll()\n  .withCustomServicePath('my/custom/service/path');\n")),(0,r.kt)("p",null,"This will add the custom service path to your request.\nExecuting the example request above against a destination with URL ",(0,r.kt)("inlineCode",{parentName:"p"},"https://my.s4-system.com")," would result in a request against something like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://my.s4-system.com/my/custom/service/path/MyEntity"),"."),(0,r.kt)("h3",{id:"setting-a-custom-request-configuration"},"Setting a Custom Request Configuration"),(0,r.kt)(s.Ol,{mdxType:"CustomRequestConfig"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nmyEntityApi\n  .requestBuilder()\n  .getAll()\n  .addCustomRequestConfiguration({ responseType: 'arraybuffer' });\n")),(0,r.kt)(s.nc,{mdxType:"CustomRequestConfigNote"}),(0,r.kt)("h3",{id:"appending-paths-to-the-request-url-built-by-the-request-builders"},"Appending Paths to the Request URL Built by the Request Builders"),(0,r.kt)("p",null,"Usually, the request builders construct the request URL for you automatically.\nHowever, for certain OData features like navigation properties, the SAP Cloud SDK does not provide a type-safe API that constructs the request path in a fully automated manner.\nFor that reason, there is a non-typed API to request builders providing the capability to append additional path segments to the request URL.\nYou have to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"executeRaw(destination)")," method to get results because the SAP Cloud SDK can't deserialize these responses in a type-safe way."),(0,r.kt)("p",null,"The example below shows how to query a navigation property from a given entity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nmyEntityApi\n  .requestBuilder()\n  .getByKey('123')\n  .appendPath(\n    '/to_SingleValueNavigationProperty1',\n    '/to_SingleValueNavigationProperty2'\n  )\n  .executeRaw(destination);\n")),(0,r.kt)("p",null,"It will build the request URL like below:\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://my.s4-system.com/service-path/MyEntity(key='123')/to_SingleValueNavigationProperty1/to_SingleValueNavigationProperty2"),"\nwhere:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/to_SingleValueNavigationProperty1/to_SingleValueNavigationProperty2")," is the additional path that you provide from the parameters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://my.s4-system.com/service-path/MyEntity(key='123')")," is the path of the original request URL built by the SAP Cloud SDK.")),(0,r.kt)("h3",{id:"setting-middlewares"},"Setting Middlewares"),(0,r.kt)("p",null,"You can specify middlewares for a request via the ",(0,r.kt)("inlineCode",{parentName:"p"},"middleware()")," method on the request builder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nconst httpResponse: HttpResponse = myEntityApi\n  .requestBuilder()\n  .getAll()\n  .middleware(myMiddlewares)\n  .execute(destination);\n")),(0,r.kt)("p",null,"Middleware is a general concept used to add ",(0,r.kt)("a",{parentName:"p",href:"../middleware"},"arbitrary enhancements to the request"),".\nA typical use case is to also add ",(0,r.kt)("a",{parentName:"p",href:"../../guides/resilience"},"resilience")," to requests."),(0,r.kt)("h3",{id:"getting-the-raw-response-and-the-original-request"},"Getting the Raw Response and the Original Request"),(0,r.kt)(s.WD,{mdxType:"ExecuteRawOverview"}),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { myEntityApi } = myEntityService();\nconst httpResponse: HttpResponse = myEntityApi\n  .requestBuilder()\n  .getAll()\n  .executeRaw(destination);\n")),(0,r.kt)(s.zl,{mdxType:"ExecuteRawUseCases"}),(0,r.kt)("ul",{style:{"margin-top":"-16px"}},(0,r.kt)("li",null,"In rare cases, when the response data cannot be deserialized. This can happen when function imports use an entity type as a return type, and this entity type is shared by multiple `EntitySet` instances. Without further information, it is unclear which ",(0,r.kt)("code",null,"Entity")," should be deserialized. For those cases, you have to use ",(0,r.kt)("code",null,"executeRaw()")," and use the ",(0,r.kt)("code",null,"deserialize()")," function on the response data.")),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h4",{id:"deserialize-nested-navigation-properties"},"Deserialize Nested Navigation Properties"),(0,r.kt)("p",null,"When deserializing an OData response that contains nested navigation properties, a user reported an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/issues/2606"},"issue")," about some missing navigation properties.\nThis might happen if you don't use the object destructuring for getting multiple APIs.\nWhat you should do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\n")),(0,r.kt)("p",null,"What you should avoid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const businessPartnerApi = businessPartnerService().businessPartnerApi;\nconst businessPartnerAddressApi =\n  businessPartnerService().businessPartnerAddressApi;\n")))}k.isMDXComponent=!0},41609:(e,t,n)=>{n.d(t,{Ol:()=>u,WD:()=>p,Xc:()=>c,nc:()=>d,zl:()=>m});var a=n(67294),r=n(96147),i=n(66071),o=n(24249),s=n(33518),l=n(25754);function u(){return a.createElement(r.default,null)}function d(){return a.createElement(i.default,null)}function p(){return a.createElement(o.default,null)}function m(){return a.createElement(s.default,null)}function c(){return a.createElement(l.default,null)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),i=n(86010),o=n(72389),s=n(67392),l=n(7094),u=n(12466);const d="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:c,groupId:k,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,s.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:b}=(0,l.U)(),[C,q]=(0,r.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=k){const e=N[k];null!=e&&e!==C&&g.some((t=>t.value===e))&&q(e)}const D=e=>{const t=e.currentTarget,n=w.indexOf(t),a=g[n].value;a!==C&&(S(t),q(a),null!=k&&b(k,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},h)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>w.push(e),onKeyDown:x,onClick:D},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function c(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}}}]);