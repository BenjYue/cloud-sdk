"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6858],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=o,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58911:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.align;return n.createElement("span",{className:t?"col text--right":""},n.createElement("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom"},n.createElement("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})))}},10692:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=a(58911),s=["components"],l={id:"sdk-java-troubleshooting-frequent-problems",title:"Troubleshooting SDK Java",sidebar_label:"Troubleshooting",description:"This article is a collection of frequently occurring symptoms and a short guidance on how to address them.",keywords:["sap","cloud","sdk","debugging","FAQ","common mistakes","problems"]},d=void 0,p={unversionedId:"java/sdk-java-troubleshooting-frequent-problems",id:"java/sdk-java-troubleshooting-frequent-problems",title:"Troubleshooting SDK Java",description:"This article is a collection of frequently occurring symptoms and a short guidance on how to address them.",source:"@site/docs/java/troubleshooting.mdx",sourceDirName:"java",slug:"/java/sdk-java-troubleshooting-frequent-problems",permalink:"/cloud-sdk/docs/java/sdk-java-troubleshooting-frequent-problems",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/troubleshooting.mdx",tags:[],version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1652795934,formattedLastUpdatedAt:"5/17/2022",frontMatter:{id:"sdk-java-troubleshooting-frequent-problems",title:"Troubleshooting SDK Java",sidebar_label:"Troubleshooting",description:"This article is a collection of frequently occurring symptoms and a short guidance on how to address them.",keywords:["sap","cloud","sdk","debugging","FAQ","common mistakes","problems"]},sidebar:"someSidebar",previous:{title:"Use OData v4 Client",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client"},next:{title:"Release Policy",permalink:"/cloud-sdk/docs/java/release-policy"}},c={},m=[{value:"Solving common problems",id:"solving-common-problems",level:2},{value:"Tenant or Principal Not Available",id:"tenant-or-principal-not-available",level:2},{value:"Provider Instead of Subscriber Account Used",id:"provider-instead-of-subscriber-account-used",level:2},{value:"JSON Web Token Validation Fails",id:"json-web-token-validation-fails",level:2},{value:"Connecting to an ERP System fails",id:"connecting-to-an-erp-system-fails",level:2},{value:"Compilation Failures in the Generated OData Virtual Data Model Classes",id:"compilation-failures-in-the-generated-odata-virtual-data-model-classes",level:2},{value:"Compilation or Runtime Failures After Updating the SAP Cloud SDK Version",id:"compilation-or-runtime-failures-after-updating-the-sap-cloud-sdk-version",level:2},{value:"The Java App Has Good Performance on Your Local Machine but Utilizes 100% CPU on SAP Business Technology Platform, Cloud Foundry Environment",id:"the-java-app-has-good-performance-on-your-local-machine-but-utilizes-100-cpu-on-sap-business-technology-platform-cloud-foundry-environment",level:2},{value:"Request via Cloud Connector Fails with HTTP 407",id:"request-via-cloud-connector-fails-with-http-407",level:2},{value:"<code>No Such Method: com.google.gson.JsonParser.parseReader</code>",id:"no-such-method-comgooglegsonjsonparserparsereader",level:2},{value:"<code>Class Not Found: JsonEncoder</code>",id:"class-not-found-jsonencoder",level:2},{value:"OData Request Rejected by or Failed in OData Service",id:"odata-request-rejected-by-or-failed-in-odata-service",level:2},{value:"<code>java.lang.IllegalArgumentException: JClass name empty</code>",id:"javalangillegalargumentexception-jclass-name-empty",level:2},{value:"<code>DestinationAccessException: Failed to read authentication token. The destination service responded with an error: Could not verify the provided CSRF token because your session was not found</code>",id:"destinationaccessexception-failed-to-read-authentication-token-the-destination-service-responded-with-an-error-could-not-verify-the-provided-csrf-token-because-your-session-was-not-found",level:2},{value:"<code>SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target</code>",id:"sslhandshakeexception-pkix-path-building-failed-sunsecurityprovidercertpathsuncertpathbuilderexception-unable-to-find-valid-certification-path-to-requested-target",level:2},{value:"Olingo Dependency Conflicts",id:"olingo-dependency-conflicts",level:2}],u={toc:m};function h(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{mdxType:"MvnBadge"}),(0,i.kt)("h2",{id:"solving-common-problems"},"Solving common problems"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check if you're using the latest ",(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java"},"SAP Cloud SDK version"),".\nWe release significant updates bi-weekly."),(0,i.kt)("li",{parentName:"ul"},"Try searching on ",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/tagged/sap-cloud-sdk"},"Stack Overflow"),"\nYou can ",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions"},"ask there questions")," as well by tagging it with ",(0,i.kt)("inlineCode",{parentName:"li"},"sap-cloud-sdk")),(0,i.kt)("li",{parentName:"ul"},"Check this page for known solutions for most frequent problems"),(0,i.kt)("li",{parentName:"ul"},"Welcome to our ",(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/overview/get-support"},"awesome support")," if nothing else helps.")),(0,i.kt)("h2",{id:"tenant-or-principal-not-available"},"Tenant or Principal Not Available"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Tenant or principal information is not available or an incorrect tenant is used."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A subscriber based JWT is passed in, but its validation fails, causing the SAP Cloud SDK to fall back to the provider account.\nSee ",(0,i.kt)("a",{parentName:"p",href:"#json-web-token-validation-fails"},"JWT validation fails"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An operation is performed in an asynchronous manner without propagating the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadContext"),".\nSee ",(0,i.kt)("a",{parentName:"p",href:"features/multi-tenancy/multi-tenancy-thread-context#running-asynchronous-operations"},"Running Asynchronous Operations"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The SAP Cloud SDK components are not registered as listeners on incoming requests.\nSee ",(0,i.kt)("a",{parentName:"p",href:"getting-started#framework-integration"},"Framework Support"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There was no JWT in the authorization header.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A BAPI/RFC call was attempted while using resilience or multithreading capabilities of the SAP Cloud SDK.\nSee ",(0,i.kt)("a",{parentName:"p",href:"features/bapi-and-rfc/bapi-and-rfc-overview#subscriber-tenant-is-not-found-at-runtime"},"Subscriber Tenant Is Not Found at Runtime")))),(0,i.kt)("h2",{id:"provider-instead-of-subscriber-account-used"},"Provider Instead of Subscriber Account Used"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Destinations are returned only for the provider account, but not for a subscriber account."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The SAP Cloud SDK defaults back to the provider account if no tenant information is available.\nSee the above section on ",(0,i.kt)("a",{parentName:"li",href:"#tenant-or-principal-not-available"},"Tenant or Principal not available"),".")),(0,i.kt)("h2",{id:"json-web-token-validation-fails"},"JSON Web Token Validation Fails"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms:"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Logs show JWT validation exceptions, Tenant information is not available."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The SAP Cloud SDK version might be outdated.\nCheck with the ",(0,i.kt)("a",{parentName:"li",href:"https://search.maven.org/artifact/com.sap.cloud.sdk/sdk-bom"},"latest SAP Cloud SDK version"),".")),(0,i.kt)("h2",{id:"connecting-to-an-erp-system-fails"},"Connecting to an ERP System fails"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms:"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ERP system unexpectedly responds with ",(0,i.kt)("em",{parentName:"p"},"401: Unauthorized")," or ",(0,i.kt)("em",{parentName:"p"},"403: Forbidden"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The SAP Client and Locale headers will be missing if the ",(0,i.kt)("inlineCode",{parentName:"li"},"Destination")," is not an ",(0,i.kt)("inlineCode",{parentName:"li"},"ErpHttpDestination"),".\nSee ",(0,i.kt)("a",{parentName:"li",href:"features/connectivity/sdk-connectivity-destination-service#connect-to-on-premise-s4hana-system"},"Connecting to SAP S/4HANA"),".")),(0,i.kt)("h2",{id:"compilation-failures-in-the-generated-odata-virtual-data-model-classes"},"Compilation Failures in the Generated OData Virtual Data Model Classes"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms:"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Compilation fails due to missing ",(0,i.kt)("em",{parentName:"p"},"Getters")," and ",(0,i.kt)("em",{parentName:"p"},"Setters")," on entity objects."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Getters and Setters will be missing if ",(0,i.kt)("a",{parentName:"li",href:"https://projectlombok.org/"},"Lombok")," is not present in the dependency tree of your project.\nSee ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:3000/cloud-sdk/docs/java/features/odata/generate-typed-odata-v2-and-v4-client-for-java#using-the-odata-generator"},"Using the OData Generator"),"."),(0,i.kt)("li",{parentName:"ul"},"Getters and Setters will be shown red if your IDE does not support Lombok. Hence, install the Lombok plugin for your IDE.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For IntelliJ, install ",(0,i.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/6317-lombok"},"the Lombok plugin"),"."),(0,i.kt)("li",{parentName:"ul"},"For Eclipse, follow ",(0,i.kt)("a",{parentName:"li",href:"https://projectlombok.org/setup/eclipse"},"this guide"),".")))),(0,i.kt)("h2",{id:"compilation-or-runtime-failures-after-updating-the-sap-cloud-sdk-version"},"Compilation or Runtime Failures After Updating the SAP Cloud SDK Version"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms:"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"MethodNotFound"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ClassDefNotFound")," or similar exceptions occur."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Conflicting dependency versions may cause such issues.\nSee the section on ",(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/java/guides/manage-dependencies#dealing-with-dependency-conflicts"},"Managing Dependencies"),".")),(0,i.kt)("h2",{id:"the-java-app-has-good-performance-on-your-local-machine-but-utilizes-100-cpu-on-sap-business-technology-platform-cloud-foundry-environment"},"The Java App Has Good Performance on Your Local Machine but Utilizes 100% CPU on SAP Business Technology Platform, Cloud Foundry Environment"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms:"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"The Java app executes multiple threads and runs with good performance on a powerful local machine."),(0,i.kt)("li",{parentName:"ul"},"The performance significantly drops after the app is deployed to SAP Business Technology Platform - Cloud Foundry and CPU utilization is always around 100%.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A powerful developer's machine usually has much better CPU and memory capacity than a standard cloud instance."),(0,i.kt)("li",{parentName:"ul"},"SAP BTP, Cloud Foundry environment provides 1/4 of CPU unit per every GB of memory.\nWith maximum memory per instance of 8 GB, you can get a maximum of 2 CPU cores."),(0,i.kt)("li",{parentName:"ul"},"All the limitations are subject to change.\nPlease check the latest details about ",(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/viewer/3504ec5ef16548778610c7e89cc0eac3/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html#loio9809fa4f02cb4696baea5c23d6eaac94"},"SAP BTP, Cloud Foundry Environment quotas and limitations")),(0,i.kt)("li",{parentName:"ul"},"If even after achieving the maximum vertical scale of your instance, your app doesn't reach the desired performance level, try to optimize it.\nConsider scaling it horizontally or different custom solutions to boost performance where it lags.")),(0,i.kt)("h2",{id:"request-via-cloud-connector-fails-with-http-407"},"Request via Cloud Connector Fails with HTTP 407"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In your application log you find the HTTP error code 407 and the request targets an On-Premise system via the SAP Cloud Connector."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You are caching the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpDestination")," instance in your application code instead of retrieving it for each request.\nSince the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpDestination")," object stores the JWT needed for passing the SAP Cloud Connector, the JWT does not get refreshed after its expiration."),(0,i.kt)("p",{parentName:"li"},"To solve this issue, retrieve the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpDestination")," for each request again with the ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationAccessor")," API.\nThere is no need to worry about performance, because the SAP Cloud SDK uses an optimized built-in cache for Destinations."))),(0,i.kt)("h2",{id:"no-such-method-comgooglegsonjsonparserparsereader"},(0,i.kt)("inlineCode",{parentName:"h2"},"No Such Method: com.google.gson.JsonParser.parseReader")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In your application log you find exception ",(0,i.kt)("inlineCode",{parentName:"p"},"java.lang.NoSuchMethodError: com.google.gson.JsonParser.parseReader(Lcom/google/gson/stream/JsonReader;)Lcom/google/gson/JsonElement;"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your project uses the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/google/gson"},"GSON library")," in version ",(0,i.kt)("inlineCode",{parentName:"li"},"2.8.5")," or earlier.\nThis could happen if you do not use the SAP Cloud SDK Bill-of-Material.\nTo solve this issue, update GSON to at least version ",(0,i.kt)("inlineCode",{parentName:"li"},"2.8.6"),".")),(0,i.kt)("h2",{id:"class-not-found-jsonencoder"},(0,i.kt)("inlineCode",{parentName:"h2"},"Class Not Found: JsonEncoder")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your application does not start and fails with the error message ",(0,i.kt)("inlineCode",{parentName:"p"},'"Could not create component [encoder] of type [com.sap.hcp.cf.logback.encoder.JsonEncoder] java.lang.ClassNotFoundException: com.sap.hcp.cf.logback.encoder.JsonEncoder"'),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your project uses the ",(0,i.kt)("a",{parentName:"li",href:"http://logback.qos.ch/"},"Logback library")," for application logging.\nThe required dependency ",(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.hcp.cf.logging:cf-java-logging-support-logback")," is missing.\nTo solve this issue, add this dependency to your project.\nAlso, use the SAP Cloud SDK Bill-Of-Material in your POM to manage the version of this dependency.")),(0,i.kt)("h2",{id:"odata-request-rejected-by-or-failed-in-odata-service"},"OData Request Rejected by or Failed in OData Service"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your OData request returns with a 400 (bad request) or 500 (server error) HTTP code."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The service may not be implemented correctly or deviate from the OData standard / conventions."),(0,i.kt)("p",{parentName:"li"},"Check the request being sent out (",(0,i.kt)("a",{parentName:"p",href:"./guides/logging-overview"},"looking at HTTP logs"),") against the ",(0,i.kt)("a",{parentName:"p",href:"https://www.odata.org/documentation/"},"OData documentation"),".\nIf the service deviates from OData conventions, try using the more ",(0,i.kt)("a",{parentName:"p",href:"./features/odata/generic-untyped-odata-client"},"low-level generic OData client")," which gives you more flexibility to adapt requests.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The SAP Cloud SDK may send an incorrect OData request."),(0,i.kt)("p",{parentName:"li"},"Verify that the request the SAP Cloud SDK sends out (",(0,i.kt)("a",{parentName:"p",href:"./guides/logging-overview"},"looking at HTTP logs"),") does not conform to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.odata.org/documentation/"},"OData documentation"),".\nIn that case please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk/issues/new?assignees=&labels=Java&template=sap-cloud-sdk-for-java-issue.md&title="},"raise an issue on our GitHub"),"."),(0,i.kt)("p",{parentName:"li"},"In addition, you can leverage the ",(0,i.kt)("a",{parentName:"p",href:"./features/odata/generic-untyped-odata-client"},"low-level generic OData client")," which gives you more flexibility to adapt requests to overcome potential issues with the typed APIs."))),(0,i.kt)("h2",{id:"javalangillegalargumentexception-jclass-name-empty"},(0,i.kt)("inlineCode",{parentName:"h2"},"java.lang.IllegalArgumentException: JClass name empty")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"While generating a type-safe API client for an OData service, you encounter the exception message ",(0,i.kt)("inlineCode",{parentName:"p"},'"java.lang.IllegalArgumentException: JClass name empty"'),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The service specification (",(0,i.kt)("inlineCode",{parentName:"p"},"EDMX")," file) contains an entity that is named ",(0,i.kt)("inlineCode",{parentName:"p"},"Type"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Type_"),", or just ",(0,i.kt)("inlineCode",{parentName:"p"},"_"),"."),(0,i.kt)("p",{parentName:"li"},"By default, both the OData V2 and V4 VDM generators use the ",(0,i.kt)("inlineCode",{parentName:"p"},"S4HanaNamingStrategy")," to generate valid Java names from the given service specification.\nHereby, it removes pre- and suffixes that are commonly used in SAP service specifications, such as the suffixes ",(0,i.kt)("inlineCode",{parentName:"p"},"Type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," for entities.\nIn special cases, where an entity name consist of those suffixes only, that logic leads to the generation of an empty class name, which, in turn, then results in the observed exception."),(0,i.kt)("p",{parentName:"li"},"To solve that issue, you can change the naming strategy used by the generator.\nThe SAP Cloud SDK additionally includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"com.sap.cloud.sdk.datamodel.odata.utility.SimpleNamingStrategy")," out-of-the-box, which does not perform any unnecessary pre- and suffix removal."))),(0,i.kt)("h2",{id:"destinationaccessexception-failed-to-read-authentication-token-the-destination-service-responded-with-an-error-could-not-verify-the-provided-csrf-token-because-your-session-was-not-found"},(0,i.kt)("inlineCode",{parentName:"h2"},"DestinationAccessException: Failed to read authentication token. The destination service responded with an error: Could not verify the provided CSRF token because your session was not found")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When running ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination#asHttp()")," you encounter an exception message like ",(0,i.kt)("inlineCode",{parentName:"p"},'"DestinationAccessException: Failed to read authentication token. The destination service responded with an error: Could not verify the provided CSRF token because your session was not found"'),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The Destination Service on Cloud Foundry is unable to generate an authentication token that will be used in later requests.\nIn the service configuration, the destination entry references a token service endpoint that could not communicate correctly with the Destination Service."),(0,i.kt)("p",{parentName:"li"},"To solve that issue, please check every field in the destination configuration for valid input.\nPlease find the official ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/42a0e6b966924f2e902090bdf435e1b2.html"},"documentation from the Destination Service"),' for more details.\nThe value for field "Token Service URL" may require the full service endpoint path, including e.g. ',(0,i.kt)("inlineCode",{parentName:"p"},"/oauth/token"),"."))),(0,i.kt)("h2",{id:"sslhandshakeexception-pkix-path-building-failed-sunsecurityprovidercertpathsuncertpathbuilderexception-unable-to-find-valid-certification-path-to-requested-target"},(0,i.kt)("inlineCode",{parentName:"h2"},"SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When accessing an On-Premise system from your local machine the HTTP client is unable to establish a secure connection to the target server.\nYou may experience the follow-up error message: ",(0,i.kt)("inlineCode",{parentName:"p"},'"ODataConnectionException: Connection was aborted."')))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In order to validate the SSL connection your Java runtime would need to check the chain of trusted certificates.\nPlease review your local Java trust store."),(0,i.kt)("p",{parentName:"li"},"To solve the issue there are many tutorials on how to register certificates.\nHowever if you require a quick solution for your local development environmment, you can add a special flag to your ",(0,i.kt)("inlineCode",{parentName:"p"},'"destinations"')," environment variable: ",(0,i.kt)("inlineCode",{parentName:"p"},'"TrustAll" : "true"'),".\nThis will disable the certificate validation on your local runtime."))),(0,i.kt)("h2",{id:"olingo-dependency-conflicts"},"Olingo Dependency Conflicts"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Symptoms"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In your CAP based application you encounter exception messages like ",(0,i.kt)("inlineCode",{parentName:"p"},"NoSuchMethodError")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ClassDefNotFoundException")," on methods or classes of ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.olingo.odata2"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible causes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The SAP Cloud SDK brings the dependency ",(0,i.kt)("inlineCode",{parentName:"p"},"com.sap.cloud.servicesdk:odata-v2-lib")," which internally repackages Olingo.\nIf you don't rely on any deprecated OData V2 functionality of the SAP Cloud SDK this dependency is not required and can be excluded."),(0,i.kt)("p",{parentName:"li"},"Add this exclusion in all places where ",(0,i.kt)("inlineCode",{parentName:"p"},"odata-v2-lib")," is coming into your ",(0,i.kt)("inlineCode",{parentName:"p"},"mvn dependency:tree"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<exclusion>\n  <groupId>com.sap.cloud.servicesdk</groupId>\n  <artifactId>odata-v2-lib</artifactId>\n</exclusion>\n")))))}h.isMDXComponent=!0}}]);