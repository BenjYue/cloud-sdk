"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3855],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},46882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),i=n(58911);n(74866),n(85162);const r={id:"troubleshooting-frequent-problems",title:"Troubleshooting SDK Java",sidebar_label:"Troubleshooting",description:"This article is a collection of frequently occurring symptoms and a short guidance on how to address them.",keywords:["sap","cloud","sdk","debugging","FAQ","common mistakes","problems"]},l=void 0,s={unversionedId:"troubleshooting-frequent-problems",id:"troubleshooting-frequent-problems",title:"Troubleshooting SDK Java",description:"This article is a collection of frequently occurring symptoms and a short guidance on how to address them.",source:"@site/docs-java/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting-frequent-problems",permalink:"/cloud-sdk/docs/java/troubleshooting-frequent-problems",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/troubleshooting.mdx",tags:[],version:"current",frontMatter:{id:"troubleshooting-frequent-problems",title:"Troubleshooting SDK Java",sidebar_label:"Troubleshooting",description:"This article is a collection of frequently occurring symptoms and a short guidance on how to address them.",keywords:["sap","cloud","sdk","debugging","FAQ","common mistakes","problems"]},sidebar:"docsJavaSidebar",previous:{title:"Use OData v4 Client",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client"},next:{title:"Release Policy",permalink:"/cloud-sdk/docs/java/release-policy"}},u={},d=[{value:"Solving Common Problems",id:"solving-common-problems",level:2},{value:"Tenant or Principal Not Available",id:"tenant-or-principal-not-available",level:2},{value:"Provider Instead of Subscriber Account Used",id:"provider-instead-of-subscriber-account-used",level:2},{value:"JSON Web Token Validation Fails",id:"json-web-token-validation-fails",level:2},{value:"Connecting to an ERP System fails",id:"connecting-to-an-erp-system-fails",level:2},{value:"Compilation Failures in the Generated OData Virtual Data Model Classes",id:"compilation-failures-in-the-generated-odata-virtual-data-model-classes",level:2},{value:"Compilation or Runtime Failures After Updating the SAP Cloud SDK Version",id:"compilation-or-runtime-failures-after-updating-the-sap-cloud-sdk-version",level:2},{value:"The Java App Has Good Performance on Your Local Machine but Utilizes 100% CPU on SAP Business Technology Platform, Cloud Foundry Environment",id:"the-java-app-has-good-performance-on-your-local-machine-but-utilizes-100-cpu-on-sap-business-technology-platform-cloud-foundry-environment",level:2},{value:"Request via Cloud Connector Fails with HTTP 407",id:"request-via-cloud-connector-fails-with-http-407",level:2},{value:"<code>No Such Method: com.google.gson.JsonParser.parseReader</code>",id:"no-such-method-comgooglegsonjsonparserparsereader",level:2},{value:"<code>Class Not Found: JsonEncoder</code>",id:"class-not-found-jsonencoder",level:2},{value:"OData Request Rejected by or Failed in OData Service",id:"odata-request-rejected-by-or-failed-in-odata-service",level:2},{value:"<code>java.lang.IllegalArgumentException: JClass name empty</code>",id:"javalangillegalargumentexception-jclass-name-empty",level:2},{value:"<code>DestinationAccessException: Failed to read authentication token. The destination service responded with an error: Could not verify the provided CSRF token because your session was not found</code>",id:"destinationaccessexception-failed-to-read-authentication-token-the-destination-service-responded-with-an-error-could-not-verify-the-provided-csrf-token-because-your-session-was-not-found",level:2},{value:"<code>SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target</code>",id:"sslhandshakeexception-pkix-path-building-failed-sunsecurityprovidercertpathsuncertpathbuilderexception-unable-to-find-valid-certification-path-to-requested-target",level:2},{value:"<code>NoSuchMethodError: &#39;java.util.Set org.json.JSONObject.keySet()&#39;</code>",id:"nosuchmethoderror-javautilset-orgjsonjsonobjectkeyset",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{mdxType:"MvnBadge"}),(0,o.kt)("h2",{id:"solving-common-problems"},"Solving Common Problems"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check if you're using the latest ",(0,o.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/java/release-notes"},"SAP Cloud SDK version"),".\nWe release significant updates bi-weekly."),(0,o.kt)("li",{parentName:"ul"},"Try searching on ",(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/tagged/sap-cloud-sdk"},"Stack Overflow"),"\nYou can ",(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions"},"ask there questions")," as well by tagging it with ",(0,o.kt)("inlineCode",{parentName:"li"},"sap-cloud-sdk")),(0,o.kt)("li",{parentName:"ul"},"Check this page for known solutions for most frequent problems"),(0,o.kt)("li",{parentName:"ul"},"Welcome to our ",(0,o.kt)("a",{parentName:"li",href:"/docs/overview/get-support"},"awesome support")," if nothing else helps.")),(0,o.kt)("h2",{id:"tenant-or-principal-not-available"},"Tenant or Principal Not Available"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Symptoms")),(0,o.kt)("p",{parentName:"admonition"},"Tenant or principal information is not available or an incorrect tenant is used.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible causes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A subscriber based JWT is passed in, but its validation fails, causing the SAP Cloud SDK to fall back to the provider account.\nSee ",(0,o.kt)("a",{parentName:"p",href:"#json-web-token-validation-fails"},"JWT validation fails"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"An operation is performed in an asynchronous manner without propagating the ",(0,o.kt)("inlineCode",{parentName:"p"},"ThreadContext"),".\nSee ",(0,o.kt)("a",{parentName:"p",href:"features/multi-tenancy/thread-context#running-asynchronous-operations"},"Running Asynchronous Operations"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The SAP Cloud SDK components are not registered as listeners on incoming requests.\nSee ",(0,o.kt)("a",{parentName:"p",href:"getting-started#framework-integration"},"Framework Support"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"There was no JWT in the authorization header.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A BAPI/RFC call was attempted while using resilience or multithreading capabilities of the SAP Cloud SDK.\nSee ",(0,o.kt)("a",{parentName:"p",href:"features/bapi-and-rfc/overview#subscriber-tenant-is-not-found-at-runtime"},"Subscriber Tenant Is Not Found at Runtime")))),(0,o.kt)("h2",{id:"provider-instead-of-subscriber-account-used"},"Provider Instead of Subscriber Account Used"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Symptoms")),(0,o.kt)("p",{parentName:"admonition"},"Destinations are returned only for the provider account, but not for a subscriber account.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible causes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The SAP Cloud SDK defaults back to the provider account if no tenant information is available.\nSee the above section on ",(0,o.kt)("a",{parentName:"li",href:"#tenant-or-principal-not-available"},"Tenant or Principal not available"),".")),(0,o.kt)("h2",{id:"json-web-token-validation-fails"},"JSON Web Token Validation Fails"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Symptoms:")),(0,o.kt)("p",{parentName:"admonition"},"Logs show JWT validation exceptions, Tenant information is not available.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible causes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The SAP Cloud SDK version might be outdated.\nCheck with the ",(0,o.kt)("a",{parentName:"li",href:"https://search.maven.org/artifact/com.sap.cloud.sdk/sdk-bom"},"latest SAP Cloud SDK version"),".")),(0,o.kt)("h2",{id:"connecting-to-an-erp-system-fails"},"Connecting to an ERP System fails"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Symptoms:")),(0,o.kt)("p",{parentName:"admonition"},"The ERP system unexpectedly responds with ",(0,o.kt)("em",{parentName:"p"},"401: Unauthorized")," or ",(0,o.kt)("em",{parentName:"p"},"403: Forbidden"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible causes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The SAP Client and Locale headers will be missing if the ",(0,o.kt)("inlineCode",{parentName:"li"},"Destination")," is not an ",(0,o.kt)("inlineCode",{parentName:"li"},"ErpHttpDestination"),".\nSee ",(0,o.kt)("a",{parentName:"li",href:"features/connectivity/destination-service#connect-to-on-premise-s4hana-system"},"Connecting to SAP S/4HANA"),".")),(0,o.kt)("h2",{id:"compilation-failures-in-the-generated-odata-virtual-data-model-classes"},"Compilation Failures in the Generated OData Virtual Data Model Classes"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Symptoms:")),(0,o.kt)("p",{parentName:"admonition"},"Compilation fails due to missing ",(0,o.kt)("em",{parentName:"p"},"Getters")," and ",(0,o.kt)("em",{parentName:"p"},"Setters")," on entity objects.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible causes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Getters and Setters will be missing if ",(0,o.kt)("a",{parentName:"li",href:"https://projectlombok.org/"},"Lombok")," is not present in the dependency tree of your project.\nSee ",(0,o.kt)("a",{parentName:"li",href:"features/odata/vdm-generator#using-the-odata-generator"},"Using the OData Generator"),"."),(0,o.kt)("li",{parentName:"ul"},"Getters and Setters will be shown red if your IDE does not support Lombok. Hence, install the Lombok plugin for your IDE.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For IntelliJ, install ",(0,o.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/6317-lombok"},"the Lombok plugin"),"."),(0,o.kt)("li",{parentName:"ul"},"For Eclipse, follow ",(0,o.kt)("a",{parentName:"li",href:"https://projectlombok.org/setup/eclipse"},"this guide"),".")))),(0,o.kt)("h2",{id:"compilation-or-runtime-failures-after-updating-the-sap-cloud-sdk-version"},"Compilation or Runtime Failures After Updating the SAP Cloud SDK Version"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Symptoms:")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"MethodNotFound"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ClassDefNotFound")," or similar exceptions occur.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible causes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Conflicting dependency versions may cause such issues.\nSee the section on ",(0,o.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/java/guides/manage-dependencies#dealing-with-dependency-conflicts"},"Managing Dependencies"),".")),(0,o.kt)("h2",{id:"the-java-app-has-good-performance-on-your-local-machine-but-utilizes-100-cpu-on-sap-business-technology-platform-cloud-foundry-environment"},"The Java App Has Good Performance on Your Local Machine but Utilizes 100% CPU on SAP Business Technology Platform, Cloud Foundry Environment"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Symptoms:")),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"The Java app executes multiple threads and runs with good performance on a powerful local machine."),(0,o.kt)("li",{parentName:"ul"},"The performance significantly drops after the app is deployed to SAP Business Technology Platform - Cloud Foundry and CPU utilization is always around 100%."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible causes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A powerful developer's machine usually has much better CPU and memory capacity than a standard cloud instance."),(0,o.kt)("li",{parentName:"ul"},"SAP BTP, Cloud Foundry environment provides 1/4 of CPU unit per every GB of memory.\nWith maximum memory per instance of 8 GB, you can get a maximum of 2 CPU cores."),(0,o.kt)("li",{parentName:"ul"},"All the limitations are subject to change.\nPlease check the latest details about ",(0,o.kt)("a",{parentName:"li",href:"https://help.sap.com/viewer/3504ec5ef16548778610c7e89cc0eac3/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html#loio9809fa4f02cb4696baea5c23d6eaac94"},"SAP BTP, Cloud Foundry Environment quotas and limitations")),(0,o.kt)("li",{parentName:"ul"},"If even after achieving the maximum vertical scale of your instance, your app doesn't reach the desired performance level, try to optimize it.\nConsider scaling it horizontally or different custom solutions to boost performance where it lags.")),(0,o.kt)("h2",{id:"request-via-cloud-connector-fails-with-http-407"},"Request via Cloud Connector Fails with HTTP 407"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Symptoms")),(0,o.kt)("p",{parentName:"admonition"},"In your application log you find the HTTP error code 407 and the request targets an On-Premise system via the SAP Cloud Connector.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible causes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You are caching the ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpDestination")," instance in your application code instead of retrieving it for each request.\nSince the ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpDestination")," object stores the JWT needed for passing the SAP Cloud Connector, the JWT does not get refreshed after its expiration."),(0,o.kt)("p",{parentName:"li"},"To solve this issue, retrieve the ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpDestination")," for each request again with the ",(0,o.kt)("inlineCode",{parentName:"p"},"DestinationAccessor")," API.\nThere is no need to worry about performance, because the SAP Cloud SDK uses an optimized built-in cache for Destinations."))),(0,o.kt)("h2",{id:"no-such-method-comgooglegsonjsonparserparsereader"},(0,o.kt)("inlineCode",{parentName:"h2"},"No Such Method: com.google.gson.JsonParser.parseReader")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Symptoms")),(0,o.kt)("p",{parentName:"admonition"},"In your application log you find exception ",(0,o.kt)("inlineCode",{parentName:"p"},"java.lang.NoSuchMethodError: com.google.gson.JsonParser.parseReader(Lcom/google/gson/stream/JsonReader;)Lcom/google/gson/JsonElement;"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible causes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your project uses the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/gson"},"GSON library")," in version ",(0,o.kt)("inlineCode",{parentName:"li"},"2.8.5")," or earlier.\nThis could happen if you do not use the SAP Cloud SDK Bill-of-Material.\nTo solve this issue, update GSON to at least version ",(0,o.kt)("inlineCode",{parentName:"li"},"2.8.6"),".")),(0,o.kt)("h2",{id:"class-not-found-jsonencoder"},(0,o.kt)("inlineCode",{parentName:"h2"},"Class Not Found: JsonEncoder")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Symptoms")),(0,o.kt)("p",{parentName:"admonition"},"Your application does not start and fails with the error message ",(0,o.kt)("inlineCode",{parentName:"p"},'"Could not create component [encoder] of type [com.sap.hcp.cf.logback.encoder.JsonEncoder] java.lang.ClassNotFoundException: com.sap.hcp.cf.logback.encoder.JsonEncoder"'),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible causes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your project uses the ",(0,o.kt)("a",{parentName:"li",href:"http://logback.qos.ch/"},"Logback library")," for application logging.\nThe required dependency ",(0,o.kt)("inlineCode",{parentName:"li"},"com.sap.hcp.cf.logging:cf-java-logging-support-logback")," is missing.\nTo solve this issue, add this dependency to your project.\nAlso, use the SAP Cloud SDK Bill-Of-Material in your POM to manage the version of this dependency.")),(0,o.kt)("h2",{id:"odata-request-rejected-by-or-failed-in-odata-service"},"OData Request Rejected by or Failed in OData Service"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Symptoms")),(0,o.kt)("p",{parentName:"admonition"},"Your OData request returns with a 400 (bad request) or 500 (server error) HTTP code.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible causes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The service may not be implemented correctly or deviate from the OData standard / conventions."),(0,o.kt)("p",{parentName:"li"},"Check the request being sent out (",(0,o.kt)("a",{parentName:"p",href:"./guides/logging-overview"},"looking at HTTP logs"),") against the ",(0,o.kt)("a",{parentName:"p",href:"https://www.odata.org/documentation/"},"OData documentation"),".\nIf the service deviates from OData conventions, try using the more ",(0,o.kt)("a",{parentName:"p",href:"./features/odata/generic-untyped-odata-client"},"low-level generic OData client")," which gives you more flexibility to adapt requests.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The SAP Cloud SDK may send an incorrect OData request."),(0,o.kt)("p",{parentName:"li"},"Verify that the request the SAP Cloud SDK sends out (",(0,o.kt)("a",{parentName:"p",href:"./guides/logging-overview"},"looking at HTTP logs"),") does not conform to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.odata.org/documentation/"},"OData documentation"),".\nIn that case please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk/issues/new?assignees=&labels=Java&template=sap-cloud-sdk-for-java-issue.md&title="},"raise an issue on our GitHub"),"."),(0,o.kt)("p",{parentName:"li"},"In addition, you can leverage the ",(0,o.kt)("a",{parentName:"p",href:"./features/odata/generic-untyped-odata-client"},"low-level generic OData client")," which gives you more flexibility to adapt requests to overcome potential issues with the typed APIs."))),(0,o.kt)("h2",{id:"javalangillegalargumentexception-jclass-name-empty"},(0,o.kt)("inlineCode",{parentName:"h2"},"java.lang.IllegalArgumentException: JClass name empty")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Symptoms")),(0,o.kt)("p",{parentName:"admonition"},"While generating a type-safe API client for an OData service, you encounter the exception message ",(0,o.kt)("inlineCode",{parentName:"p"},'"java.lang.IllegalArgumentException: JClass name empty"'),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible causes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The service specification (",(0,o.kt)("inlineCode",{parentName:"p"},"EDMX")," file) contains an entity that is named ",(0,o.kt)("inlineCode",{parentName:"p"},"Type"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Type_"),", or just ",(0,o.kt)("inlineCode",{parentName:"p"},"_"),"."),(0,o.kt)("p",{parentName:"li"},"By default, both the OData V2 and V4 VDM generators use the ",(0,o.kt)("inlineCode",{parentName:"p"},"S4HanaNamingStrategy")," to generate valid Java names from the given service specification.\nHereby, it removes pre- and suffixes that are commonly used in SAP service specifications, such as the suffixes ",(0,o.kt)("inlineCode",{parentName:"p"},"Type")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"_")," for entities.\nIn special cases, where an entity name consist of those suffixes only, that logic leads to the generation of an empty class name, which, in turn, then results in the observed exception."),(0,o.kt)("p",{parentName:"li"},"To solve that issue, you can change the naming strategy used by the generator.\nThe SAP Cloud SDK additionally includes the ",(0,o.kt)("inlineCode",{parentName:"p"},"com.sap.cloud.sdk.datamodel.odata.utility.SimpleNamingStrategy")," out-of-the-box, which does not perform any unnecessary pre- and suffix removal."))),(0,o.kt)("h2",{id:"destinationaccessexception-failed-to-read-authentication-token-the-destination-service-responded-with-an-error-could-not-verify-the-provided-csrf-token-because-your-session-was-not-found"},(0,o.kt)("inlineCode",{parentName:"h2"},"DestinationAccessException: Failed to read authentication token. The destination service responded with an error: Could not verify the provided CSRF token because your session was not found")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Symptoms")),(0,o.kt)("p",{parentName:"admonition"},"When running ",(0,o.kt)("inlineCode",{parentName:"p"},"Destination#asHttp()")," you encounter an exception message like ",(0,o.kt)("inlineCode",{parentName:"p"},'"DestinationAccessException: Failed to read authentication token. The destination service responded with an error: Could not verify the provided CSRF token because your session was not found"'),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible causes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Destination Service on Cloud Foundry is unable to generate an authentication token that will be used in later requests.\nIn the service configuration, the destination entry references a token service endpoint that could not communicate correctly with the Destination Service."),(0,o.kt)("p",{parentName:"li"},"To solve that issue, please check every field in the destination configuration for valid input.\nPlease find the official ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/42a0e6b966924f2e902090bdf435e1b2.html"},"documentation from the Destination Service"),' for more details.\nThe value for field "Token Service URL" may require the full service endpoint path, including e.g. ',(0,o.kt)("inlineCode",{parentName:"p"},"/oauth/token"),"."))),(0,o.kt)("h2",{id:"sslhandshakeexception-pkix-path-building-failed-sunsecurityprovidercertpathsuncertpathbuilderexception-unable-to-find-valid-certification-path-to-requested-target"},(0,o.kt)("inlineCode",{parentName:"h2"},"SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Symptoms")),(0,o.kt)("p",{parentName:"admonition"},"When accessing an On-Premise system from your local machine the HTTP client is unable to establish a secure connection to the target server.\nYou may experience the follow-up error message: ",(0,o.kt)("inlineCode",{parentName:"p"},'"ODataConnectionException: Connection was aborted."'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible causes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To validate the SSL connection your Java runtime would need to check the chain of trusted certificates.\nPlease review your local Java trust store."),(0,o.kt)("p",{parentName:"li"},"To solve the issue there are many tutorials on how to register certificates.\nHowever, if you require a quick solution for your local development environmment, you can add a special flag to your ",(0,o.kt)("inlineCode",{parentName:"p"},'"destinations"')," environment variable: ",(0,o.kt)("inlineCode",{parentName:"p"},'"TrustAll" : "true"'),".\nThis will disable the certificate validation on your local runtime."))),(0,o.kt)("h2",{id:"nosuchmethoderror-javautilset-orgjsonjsonobjectkeyset"},(0,o.kt)("inlineCode",{parentName:"h2"},"NoSuchMethodError: 'java.util.Set org.json.JSONObject.keySet()'")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Symptoms")),(0,o.kt)("p",{parentName:"admonition"},"In your application log you find exception ",(0,o.kt)("inlineCode",{parentName:"p"},"java.lang.NoSuchMethodError: 'java.util.Set org.json.JSONObject.keySet()'"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Possible causes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your project uses the ",(0,o.kt)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/com.vaadin.external.google/android-json"},"Vaadin json library"),".\nTo solve this issue, exclude ",(0,o.kt)("inlineCode",{parentName:"li"},"com.vaadin.external.google:android-json")," from your project.")))}p.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(86010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(87462),o=n(67294),i=n(86010),r=n(12466),l=n(76775),s=n(91980),u=n(67392),d=n(50012);function c(e){return function(e){var t;return(null==(t=o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=h({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),k=(()=>{const e=s??c;return m({value:e,tabValues:i})?e:null})();(0,o.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var k=n(72389);const g="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==l&&(c(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},r,{className:(0,i.Z)("tabs__item",v,null==r?void 0:r.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",g)},o.createElement(b,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function S(e){const t=(0,k.Z)();return o.createElement(N,(0,a.Z)({key:String(t)},e))}},58911:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294);const o=function(e){let{align:t}=e;return a.createElement("span",{className:t?"col text--right":""},a.createElement("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom"},a.createElement("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})))}}}]);