"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var o=n(87462),i=(n(67294),n(3905)),a=n(44996);const r={id:"api-business-hub-download-specification",title:"Download Specification Files from SAP Business Accelerator Hub",sidebar_label:"Download specification files",description:"This guide demonstrates the steps to download OData and OpenAPI specification files (specs) from SAP Business Accelerator Hub."},s=void 0,c={unversionedId:"guides/api-business-hub-download-specification",id:"version-v2/guides/api-business-hub-download-specification",title:"Download Specification Files from SAP Business Accelerator Hub",description:"This guide demonstrates the steps to download OData and OpenAPI specification files (specs) from SAP Business Accelerator Hub.",source:"@site/docs-js_versioned_docs/version-v2/guides/apihub-download-spec.mdx",sourceDirName:"guides",slug:"/guides/api-business-hub-download-specification",permalink:"/cloud-sdk/docs/js/v2/guides/api-business-hub-download-specification",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/guides/apihub-download-spec.mdx",tags:[],version:"v2",frontMatter:{id:"api-business-hub-download-specification",title:"Download Specification Files from SAP Business Accelerator Hub",sidebar_label:"Download specification files",description:"This guide demonstrates the steps to download OData and OpenAPI specification files (specs) from SAP Business Accelerator Hub."},sidebar:"docsJsSidebar",previous:{title:"Remotely debug an application on SAP BTP",permalink:"/cloud-sdk/docs/js/v2/guides/remote-debugging"},next:{title:"Introduction",permalink:"/cloud-sdk/docs/js/v2/tutorials/getting-started/introduction"}},l={},p=[{value:"When Do I Need A Specification File?",id:"when-do-i-need-a-specification-file",level:2},{value:"Steps To Download A Specification File",id:"steps-to-download-a-specification-file",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide demonstrates the steps to download OData and OpenAPI specification files (specs) from SAP Business Accelerator Hub."),(0,i.kt)("h2",{id:"when-do-i-need-a-specification-file"},"When Do I Need A Specification File?"),(0,i.kt)("p",null,"To consume an OData or OpenAPI service, you need to generate a corresponding client.\nThe documentation of the generator packages can be found below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/generator")," for generating an OData client (see ",(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/v2/features/odata/generate-client"},"doc"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/openapi-generator")," for generating an OpenAPI client (see ",(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/v2/features/openapi/generate-client"},"doc"),")")),(0,i.kt)("h2",{id:"steps-to-download-a-specification-file"},"Steps To Download A Specification File"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://api.sap.com"},"SAP Business Accelerator Hub"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"login"),", as this is necessary for downloading the specs."),(0,i.kt)("li",{parentName:"ol"},'Search for the service you want to consume like "business partner". The search results should look like the screenshot below.'),(0,i.kt)("li",{parentName:"ol"},"Apply filters for targeting a specific service by clicking the ",(0,i.kt)("strong",{parentName:"li"},"Show Filters")," button. For example, to filter only S/4HANA Cloud services, in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Product")," list, select ",(0,i.kt)("inlineCode",{parentName:"li"},"SAP S/4HANA Cloud"),".")),(0,i.kt)("img",{src:(0,a.Z)("img/apihub-download-spec-1.png")}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the service name, when you find your service, so you can see a similar page like the screenshot below.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"API Specification")),(0,i.kt)("img",{src:(0,a.Z)("img/apihub-download-spec-2.png")})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scroll down and download the EDMX file for an OData service. (For OpenAPI, choose YAML or JSON)"),(0,i.kt)("img",{src:(0,a.Z)("img/apihub-download-spec-3.png")}))),(0,i.kt)("admonition",{title:"Try out sandbox systems",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you're unsure whether the chosen service is correct, click ",(0,i.kt)("strong",{parentName:"p"},"Try Out")," to test the sandbox system, which exposes a few endpoints.")))}u.isMDXComponent=!0}}]);