"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,c=u["".concat(d,".").concat(h)]||u[h]||m[h]||o;return n?a.createElement(c,r(r({ref:t},p),{},{components:n})):a.createElement(c,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={id:"http-destinations",title:"HTTP Destinations",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"HTTP Destinations",description:"This article dives into the DefaultHttpDestination API, explaining important implementation details and how to customize it.",keywords:["sap","cloud","sdk","destination","java","connectivity","btp","httpdestination"]},r=void 0,l={unversionedId:"features/connectivity/http-destinations",id:"features/connectivity/http-destinations",title:"HTTP Destinations",description:"This article dives into the DefaultHttpDestination API, explaining important implementation details and how to customize it.",source:"@site/docs-java/features/connectivity/004-http-destinations.mdx",sourceDirName:"features/connectivity",slug:"/features/connectivity/http-destinations",permalink:"/cloud-sdk/docs/java/features/connectivity/http-destinations",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/features/connectivity/004-http-destinations.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"http-destinations",title:"HTTP Destinations",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"HTTP Destinations",description:"This article dives into the DefaultHttpDestination API, explaining important implementation details and how to customize it.",keywords:["sap","cloud","sdk","destination","java","connectivity","btp","httpdestination"]},sidebar:"docsJavaSidebar",previous:{title:"Bound Services",permalink:"/cloud-sdk/docs/java/features/connectivity/service-bindings"},next:{title:"HTTP Client",permalink:"/cloud-sdk/docs/java/features/connectivity/http-client"}},d={},s=[{value:"About Immutability",id:"about-immutability",level:2},{value:"About HTTP Headers",id:"about-http-headers",level:2},{value:"Deriving The <code>Authorization</code> Header",id:"deriving-the-authorization-header",level:3},{value:"Deriving The <code>Proxy-Authorization</code> Header",id:"deriving-the-proxy-authorization-header",level:3},{value:"About The <em>Builder</em> API",id:"about-the-builder-api",level:2},{value:"Building On Top Of An Existing Destination",id:"building-on-top-of-an-existing-destination",level:3},{value:"Adding Individual Headers",id:"adding-individual-headers",level:3},{value:"Adding Individual Header Providers",id:"adding-individual-header-providers",level:3},{value:"Using mTLS",id:"using-mtls",level:3},{value:"About <em>HeaderProviders</em>",id:"about-headerproviders",level:2},{value:"Adding Static Header Providers",id:"adding-static-header-providers",level:3},{value:"Special Header Providers",id:"special-header-providers",level:3}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"HTTP is the most prominent communication protocol supported by the SAP Cloud SDK.\nConnecting to a remote system or service using HTTP is, therefore, a very common use case."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"pathname:////java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/HttpDestinationProperties.html"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpDestinationProperties"))," interface defines a set of properties that are required to connect to a remote system or service using HTTP, such as the URL, authentication, proxy settings, and HTTP headers."),(0,i.kt)("p",null,"In the following sections, we are diving into its default, and only, implementation: The ",(0,i.kt)("a",{parentName:"p",href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultHttpDestination.html"},(0,i.kt)("inlineCode",{parentName:"a"},"DefaultHttpDestination")),"."),(0,i.kt)("h2",{id:"about-immutability"},"About Immutability"),(0,i.kt)("p",null,"As per API contract, the ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination")," is an ",(0,i.kt)("strong",{parentName:"p"},"immutable container")," for destination properties.\nOnce initialized, it is not possible to add, remove, or modify any of its properties."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"However"),", there might be properties that contain non-primitive values, such as lists, maps, or other objects.\nThese values ",(0,i.kt)("strong",{parentName:"p"},"might")," be mutable, depending on their implementation.\nTherefore, it is impossible to guarantee ",(0,i.kt)("em",{parentName:"p"},"true immutability")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination")," implementation.\nInstead, the implementation provides a ",(0,i.kt)("em",{parentName:"p"},"shallow immutability")," guarantee."),(0,i.kt)("p",null,"This implementation detail is important for using ",(0,i.kt)("a",{parentName:"p",href:"#about-the-builder-api"},"the builder API"),"."),(0,i.kt)("h2",{id:"about-http-headers"},"About HTTP Headers"),(0,i.kt)("p",null,"One of the most important properties of any ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpDestination")," are the HTTP headers, which are attached to any outgoing request performed with the destination."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination")," implements support for following sources of HTTP headers:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Properties named using the pattern ",(0,i.kt)("inlineCode",{parentName:"li"},"URL.header.<header-name>")," will be converted into HTTP headers."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#special-header-providers"},"Special properties"),", which will be converted into HTTP headers."),(0,i.kt)("li",{parentName:"ol"},"Headers that were ",(0,i.kt)("a",{parentName:"li",href:"#adding-individual-headers"},"directly added")," via the ",(0,i.kt)("a",{parentName:"li",href:"#about-the-builder-api"},"Builder API")," while assembling the ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultHttpDestination")," instance."),(0,i.kt)("li",{parentName:"ol"},"Headers that are provided by ",(0,i.kt)("a",{parentName:"li",href:"#about-headerproviders"},(0,i.kt)("inlineCode",{parentName:"a"},"DestinationHeaderProvider"),"s"),"."),(0,i.kt)("li",{parentName:"ol"},"Any headers required for on-premise connectivity will automatically be added, ",(0,i.kt)("strong",{parentName:"li"},"iff")," the ",(0,i.kt)("inlineCode",{parentName:"li"},"ProxyType")," property is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"OnPremise")," as ",(0,i.kt)("a",{parentName:"li",href:"#deriving-the-proxy-authorization-header"},"explained below"),"."),(0,i.kt)("li",{parentName:"ol"},"Headers that are dervied from ",(0,i.kt)("a",{parentName:"li",href:"#deriving-the-authorization-header"},"authentication related properties"),", ",(0,i.kt)("strong",{parentName:"li"},"iff")," no ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization")," header was provided by any of the previous options."),(0,i.kt)("li",{parentName:"ol"},"Headers that are derived from ",(0,i.kt)("a",{parentName:"li",href:"#deriving-the-proxy-authorization-header"},"proxy authentication related properties"),", ",(0,i.kt)("strong",{parentName:"li"},"iff")," no ",(0,i.kt)("inlineCode",{parentName:"li"},"Proxy-Authorization")," header was provided by any of the previous options. ",(0,i.kt)("br",null),"\nIn most cases, the ",(0,i.kt)("inlineCode",{parentName:"li"},"Proxy-Authorization")," header will be ",(0,i.kt)("a",{parentName:"li",href:"on-premise"},"derived automatically")," from the bound BTP Connectivity Service.")),(0,i.kt)("h3",{id:"deriving-the-authorization-header"},"Deriving The ",(0,i.kt)("inlineCode",{parentName:"h3"},"Authorization")," Header"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination")," tries to derive the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header from authentication related properties, ",(0,i.kt)("strong",{parentName:"p"},"iff")," no ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header is provided by any other source.\nIn most cases, however, the BTP Destination Service will ",(0,i.kt)("a",{parentName:"p",href:"btp-destination-service#how-authentication-at-the-target-system-works"},"provide a ",(0,i.kt)("inlineCode",{parentName:"a"},"Authorization")," header"),", so this step is usually skipped."),(0,i.kt)("p",null,"If the destination does not stem from the BTP destination service, then the concrete properties depend on the ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthenticationType")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthenticationType.BASIC_AUTHENTICATION"),", the basic credentials are taken from the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"username"),", if the former doesn't exist) and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Password")," properties. ",(0,i.kt)("br",null),"\nIf these properties are not set, an exception is thrown.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthenticationType.TOKEN_FORWARDING"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestHeaderAccessor")," is used to find any ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header in the current request. All headers that are found (there should usually only be one) are then forwarded."))),(0,i.kt)("h3",{id:"deriving-the-proxy-authorization-header"},"Deriving The ",(0,i.kt)("inlineCode",{parentName:"h3"},"Proxy-Authorization")," Header"),(0,i.kt)("admonition",{title:"On-Premise Handling",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"As described above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination")," implements dedicated support for on-premise connectivity.\nTherefore, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Proxy-Authorization")," header will automatically be created as ",(0,i.kt)("a",{parentName:"p",href:"on-premise"},"documented here")," ",(0,i.kt)("strong",{parentName:"p"},"iff")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"ProxyType")," property is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"ON_PREMISE"),".")),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("a",{parentName:"p",href:"#deriving-the-authorization-header"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"Authorization")," header"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"Proxy-Authentication")," header is derived from proxy authentication related properties, ",(0,i.kt)("strong",{parentName:"p"},"iff")," no ",(0,i.kt)("inlineCode",{parentName:"p"},"Proxy-Authentication")," header is provided by any other source."),(0,i.kt)("p",null,"This is done by attempting to transform the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ProxyAuthorization")," property as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the property doesn't exist or contains an empty ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),", no header is derived."),(0,i.kt)("li",{parentName:"ul"},"If the property contains a ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," that starts with ",(0,i.kt)("inlineCode",{parentName:"li"},'"Basic "'),", the value is assumed to be a Base64-encoded ",(0,i.kt)("inlineCode",{parentName:"li"},"username:password")," pair and is transformed into a ",(0,i.kt)("inlineCode",{parentName:"li"},"Basic")," header."),(0,i.kt)("li",{parentName:"ul"},"If the property contains a ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," that starts with ",(0,i.kt)("inlineCode",{parentName:"li"},'"Bearer "'),", the value is assumed to be a JWT token and is transformed into a ",(0,i.kt)("inlineCode",{parentName:"li"},"Bearer")," header."),(0,i.kt)("li",{parentName:"ul"},"Any other value will be ",(0,i.kt)("strong",{parentName:"li"},"ignored")," and no header will be derived. Additionally, an error message will be logged.")),(0,i.kt)("p",null,"In general, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Proxy-Authorization")," header will ",(0,i.kt)("strong",{parentName:"p"},"only")," be derived if the properties contain a full proxy configuration.\nSuch a proxy configuration must contain a proxy URI, which is either taken from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Proxy")," property or, if that doesn't exist, is constructed from the ",(0,i.kt)("inlineCode",{parentName:"p"},"ProxyHost")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ProxyPort")," properties."),(0,i.kt)("h2",{id:"about-the-builder-api"},"About The ",(0,i.kt)("em",{parentName:"h2"},"Builder")," API"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultHttpDestination.Builder.html"},(0,i.kt)("inlineCode",{parentName:"a"},"DefaultHttpDestination.Builder"))," allows applications to either create a ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination"),' instance from scratch or to "modify" an existing one.\nIt offers APIs to set any desired property, header, header provider, or any other value that is supported by the ',(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination")," implementation."),(0,i.kt)("h3",{id:"building-on-top-of-an-existing-destination"},"Building On Top Of An Existing Destination"),(0,i.kt)("p",null,"Sometimes, it is needed to slightly adjust an existing ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination")," instance.\nFor example, there might be just this one single header missing for a specific request. ",(0,i.kt)("br",null),"\nAdding this header directly to the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination")," instance, however, is not possible, as ",(0,i.kt)("a",{parentName:"p",href:"#about-immutability"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"Destination")," is immutable"),"."),(0,i.kt)("p",null,"Therefore, the ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination")," provides a way to create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination")," instance that is based on an existing ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination")," instance.\nThis way is implemented in the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultHttpDestination.html#fromDestination(com.sap.cloud.sdk.cloudplatform.connectivity.Destination)"},(0,i.kt)("inlineCode",{parentName:"a"},"fromDestination(Destination)")),", ",(0,i.kt)("a",{parentName:"p",href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultHttpDestination.html#fromProperties(com.sap.cloud.sdk.cloudplatform.connectivity.DestinationProperties)"},(0,i.kt)("inlineCode",{parentName:"a"},"fromProperties(DestinationProperties)")),", and ",(0,i.kt)("a",{parentName:"p",href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultHttpDestination.html#toBuilder()"},(0,i.kt)("inlineCode",{parentName:"a"},"toBuilder()"))," methods."),(0,i.kt)("p",null,"All of these methods will return a new ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination.Builder")," instance, which is pre-configured with all properties of the given ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationProperties"),".\nIf the ",(0,i.kt)("inlineCode",{parentName:"p"},"fromDestination")," method is used with an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination"),", further details will be copied, such as the manually added HTTP headers and ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationHeaderProvider"),"s.\nThe same is true for the ",(0,i.kt)("inlineCode",{parentName:"p"},"toBuilder")," method."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example"),(0,i.kt)("p",null,"In the following example, we are retrieving a destination using ",(0,i.kt)("a",{parentName:"p",href:"btp-destination-service"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"DestinationAccessor")," API"),"."),(0,i.kt)("p",null,"We would like to add a new header to the destination, but we don't want to lose any of the existing headers.\nTherefore, we are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination#fromDestination")," method like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Destination existingDestination = DestinationAccessor.getDestination("my-destination");\nassertThat(existingDestination.asHttp().getHeaders())\n        .containsExactly(\n                new Header("X-My-Header", "MyHeaderValue")\n        );\n\nDefaultHttpDestination enhancedDestination = DefaultHttpDestination.fromDestination(existingDestination)\n        .header(new Header("My-New-Header", "MyNewHeaderValue"))\n        .build();\n\nassertThat(enhancedDestination.getHeaders())\n        .containsExactly(\n                new Header("X-My-Header", "MyHeaderValue"),\n                new Header("My-New-Header", "MyNewHeaderValue")\n        );\n')),(0,i.kt)("p",null,"As a result, our ",(0,i.kt)("inlineCode",{parentName:"p"},"enhancedDestination")," will contain all headers from the ",(0,i.kt)("inlineCode",{parentName:"p"},"existingDestination")," and the new ",(0,i.kt)("inlineCode",{parentName:"p"},"My-New-Header")," header."),(0,i.kt)("p",null,"Please note the behavior of ",(0,i.kt)("a",{parentName:"p",href:"#adding-individual-headers"},"adding individual headers")," and ",(0,i.kt)("a",{parentName:"p",href:"#adding-individual-header-providers"},"adding individual header providers"),".\nAlso, pay attention to ",(0,i.kt)("a",{parentName:"p",href:"#about-immutability"},"potentially shared state")," between the ",(0,i.kt)("inlineCode",{parentName:"p"},"existingDestination")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"enhancedDestination"),".")),(0,i.kt)("h3",{id:"adding-individual-headers"},"Adding Individual Headers"),(0,i.kt)("p",null,"Individual headers can be added via the ",(0,i.kt)("a",{parentName:"p",href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultHttpDestination.Builder.html#header(com.sap.cloud.sdk.cloudplatform.connectivity.Header)"},(0,i.kt)("inlineCode",{parentName:"a"},"header(Header)"))," and ",(0,i.kt)("a",{parentName:"p",href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultHttpDestination.Builder.html#header(java.lang.String,java.lang.String)"},(0,i.kt)("inlineCode",{parentName:"a"},"header(String, String)"))," methods.\nIn either case, the newly added header is ",(0,i.kt)("strong",{parentName:"p"},"only added")," to the list of all headers.\nIt will ",(0,i.kt)("strong",{parentName:"p"},"not")," override any existing header with the same name."),(0,i.kt)("h3",{id:"adding-individual-header-providers"},"Adding Individual Header Providers"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DefaultHttpDestination.Builder.html#headerProviders(com.sap.cloud.sdk.cloudplatform.connectivity.DestinationHeaderProvider...)"},(0,i.kt)("inlineCode",{parentName:"a"},"headerProviders(DestinationHeaderProvider...)"))," method allows you to add as many ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationHeaderProvider"),"s to the ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination")," instance as you wish.\nOnce again, existing header providers will ",(0,i.kt)("strong",{parentName:"p"},"not")," be overridden."),(0,i.kt)("h3",{id:"using-mtls"},"Using mTLS"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination")," can be configured to use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/devguide/deploy-apps/instance-identity.html"},"BTP CF Instance Identity")," by using ",(0,i.kt)("a",{parentName:"p",href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/SecurityConfigurationStrategy.html#FROM_PLATFORM"},(0,i.kt)("inlineCode",{parentName:"a"},"SecurityConfigurationStrategy.FROM_PLATFORM")),". ",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/SecurityConfigurationStrategy.html#FROM_DESTINATION"},(0,i.kt)("inlineCode",{parentName:"a"},"SecurityConfigurationStrategy.FROM_DESTINATION")),", on the other hand, derives the security configuration from the destination properties."),(0,i.kt)("h2",{id:"about-headerproviders"},"About ",(0,i.kt)("em",{parentName:"h2"},"HeaderProviders")),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/DestinationHeaderProvider.html"},(0,i.kt)("inlineCode",{parentName:"a"},"DestinationHeaderProvider"))," is a simple, yet powerful way of adding HTTP headers to a ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination"),"."),(0,i.kt)("p",null,"The interface defines just a single method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"List<Header> getHeaders( DestinationRequestContext requestContext );\n")),(0,i.kt)("p",null,"If attached to a ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination"),", this method will be called whenever the ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination")," is collecting its HTTP headers (i.e. whenever the ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination#getHeaders()")," method is called)."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationHeaderProvider")," implementation hereby gets an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationRequestContext"),", which provides access to the current request URI and the destination.\nThus, the implementation gets full access to all properties of the calling ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination")," instance and can, therefore, decide whether and which HTTP headers it wants to add."),(0,i.kt)("admonition",{title:"Infinite Loop",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpDestination#getHeaders()")," method within a ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationHeaderProvider")," implementation will result in an infinite loop and, therefore, a ",(0,i.kt)("inlineCode",{parentName:"p"},"StackOverflowError"),".")),(0,i.kt)("h3",{id:"adding-static-header-providers"},"Adding Static Header Providers"),(0,i.kt)("p",null,"In some scenarios, there are certain HTTP headers that should always be sent to a destination, regardless of the request."),(0,i.kt)("p",null,"Adding these headers to each and every ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination")," is not only cumbersome but also error-prone.\nSo instead of doing that, the ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination")," uses the ",(0,i.kt)("em",{parentName:"p"},"Service Locator Pattern")," to find ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationHeaderProvider")," implementations on the classpath and adds them automatically."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example"),(0,i.kt)("p",null,"Lets assume you would like to always send a special ",(0,i.kt)("inlineCode",{parentName:"p"},"X-My-Header")," header to all remote systems your application is communicating with."),(0,i.kt)("p",null,"To do so, you would first create a ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationHeaderProvider")," implementation that adds the header to any destination:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.sap.cloud.sdk.cloudplatform.connectivity.example;\n\nclass MyHeaderProvider implements DestinationHeaderProvider {\n    @Nonnull\n    @Override\n    public List<Header> getHeaders(@Nonnull DestinationRequestContext requestContext) {\n        return Collections.singletonList(new Header("X-My-Header", "MyHeaderValue"));\n    }\n}\n')),(0,i.kt)("p",null,"The above code is as simple as it gets.\nIt will always add a static value (",(0,i.kt)("inlineCode",{parentName:"p"},'"MyHeaderValue"'),") to every ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination"),"."),(0,i.kt)("p",null,"Of course, in a real application, the logic might be a bit more complex.\nTo cope with that, the ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationRequestContext")," provides access to the current request URI and the destination.\nThat way, you could implement a more complex logic that adds different values to different destinations or decides to not add any headers, if some special condition is met."),(0,i.kt)("p",null,"Lastly, you would still need to make use of the ",(0,i.kt)("em",{parentName:"p"},"Service Locator Pattern")," to register your ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationHeaderProvider")," implementation. ",(0,i.kt)("br",null),"\nFor that, you need to create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"com.sap.cloud.sdk.cloudplatform.connectivity.DestinationHeaderProvider")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/resources/META-INF/services")," folder of your application.\nThis file must contain the fully qualified name of your ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationHeaderProvider")," implementation. ",(0,i.kt)("br",null),"\nIn this example, the content should be ",(0,i.kt)("inlineCode",{parentName:"p"},"com.sap.cloud.sdk.cloudplatform.connectivity.example.MyHeaderProvider"),"."),(0,i.kt)("p",null,"The result should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(your application root)\n\u251c\u2500\u2500 pom.xml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 main\n        \u2514\u2500\u2500 java\n            \u251c\u2500\u2500 com\n            \u2502 ... (truncated)\n            \u2514\u2500\u2500 resources\n                \u2514\u2500\u2500 META-INF\n                    \u2514\u2500\u2500 services\n                        \u2514\u2500\u2500 com.sap.cloud.sdk.cloudplatform.connectivity.DestinationHeaderProvider\n"))),(0,i.kt)("h3",{id:"special-header-providers"},"Special Header Providers"),(0,i.kt)("p",null,"The SAP Cloud SDK comes with a set of ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationHeaderProvider"),"s that are automatically added to any ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination")," instance."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"pathname:///java-api/v5/com/sap/cloud/sdk/cloudplatform/connectivity/ErpDestinationHeaderProvider.html"},(0,i.kt)("inlineCode",{parentName:"a"},"ErpDestinationHeaderProvider"))," is part of the ",(0,i.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/com.sap.cloud.sdk.cloudplatform/cloudplatform-connectivity"},(0,i.kt)("inlineCode",{parentName:"a"},"cloudplatform-connectivity")," artifact")," and, therefore, will ",(0,i.kt)("strong",{parentName:"p"},"always")," be added to any ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultHttpDestination")," instance. ",(0,i.kt)("br",null),"\nIt provides the following headers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"sap-client")," header, ",(0,i.kt)("strong",{parentName:"li"},"iff")," the ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultHttpDestination")," contains a ",(0,i.kt)("inlineCode",{parentName:"li"},"sap-client")," property."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"sap-language")," header.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultHttpDestination")," contains a property called ",(0,i.kt)("inlineCode",{parentName:"li"},"cloudsdk.dynamicSapLanguage")," with value ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", the ",(0,i.kt)("inlineCode",{parentName:"li"},"LocaleAccessor")," will be used to determine the current locale."),(0,i.kt)("li",{parentName:"ul"},"Otherwise, if there is a ",(0,i.kt)("inlineCode",{parentName:"li"},"sap-language")," property, its value will be used.")))))}m.isMDXComponent=!0}}]);