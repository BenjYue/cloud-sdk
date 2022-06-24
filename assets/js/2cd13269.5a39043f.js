"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5413],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),i=n(86010),o=n(72389),s=n(67392),l=n(7094),u=n(12466),d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,n,o=e.lazy,p=e.block,m=e.defaultValue,h=e.values,f=e.groupId,k=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==N&&!y.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),b=w.tabGroupChoices,T=w.setTabGroupChoices,C=(0,r.useState)(N),P=C[0],x=C[1],q=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var D=b[f];null!=D&&D!==P&&y.some((function(e){return e.value===D}))&&x(D)}var S=function(e){var t=e.currentTarget,n=q.indexOf(t),a=y[n].value;a!==P&&(O(t),x(a),null!=f&&T(f,String(a)))},H=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=q.indexOf(e.currentTarget)+1;n=null!=(a=q[r])?a:q[0];break;case"ArrowLeft":var i,o=q.indexOf(e.currentTarget)-1;n=null!=(i=q[o])?i:q[q.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},k)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return q.push(e)},onKeyDown:H,onFocus:S,onClick:S},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function m(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},20807:function(e,t,n){var a=n(67294),r=n(63081);t.Z=function(e){var t=e.slug,n=e.name;return a.createElement("a",{href:"/cloud-sdk/api/"+r.Z[0]+"/"+t},n)}},63081:function(e,t){t.Z=["2.5.0","2.4.0","2.3.0","2.2.0","2.1.0","2.0.0","1.54.0","1.53.1","1.53.0","1.52.0","1.51.0","1.50.0","1.49.0","1.48.1","1.48.0","1.47.1","1.47.0","1.46.0","1.45.0","1.44.0","1.43.0","1.42.0","1.41.0","1.40.0","1.39.0","1.38.0","1.37.1","1.37.0","1.36.1","1.36.0","1.35.0","1.34.0","1.33.0","1.32.1","1.32.0","1.31.0","1.30.0","1.29.0","1.28.2","1.28.1","1.28.0","1.27.0","1.26.1","1.26.0","1.25.0","1.24.1","1.24.0","1.23.0","1.22.0","1.21.2","1.21.1","1.21.0","1.20.1","1.20.0","1.19.0","1.18.1","1.18.0"]},23083:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(20807),s=n(65488),l=n(85162),u=["components"],d={title:"Generic HTTP Client",sidebar_label:"Generic HTTP Client",description:"How to use the generic http client for untyped requests",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},c=void 0,p={unversionedId:"js/features/connectivity/generic-http-client",id:"js/features/connectivity/generic-http-client",title:"Generic HTTP Client",description:"How to use the generic http client for untyped requests",source:"@site/docs/js/features/connectivity/generic-http-client.mdx",sourceDirName:"js/features/connectivity",slug:"/js/features/connectivity/generic-http-client",permalink:"/cloud-sdk/docs/js/features/connectivity/generic-http-client",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/connectivity/generic-http-client.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1656083751,formattedLastUpdatedAt:"6/24/2022",frontMatter:{title:"Generic HTTP Client",sidebar_label:"Generic HTTP Client",description:"How to use the generic http client for untyped requests",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"Proxies",permalink:"/cloud-sdk/docs/js/features/connectivity/proxy"},next:{title:"On-Premise Systems",permalink:"/cloud-sdk/docs/js/features/connectivity/on-premise"}},m={},h=[{value:"What Is the Generic HTTP Client?",id:"what-is-the-generic-http-client",level:2},{value:"How to Use It",id:"how-to-use-it",level:2},{value:"When to Use It",id:"when-to-use-it",level:2},{value:"Headers and Query Parameters from Different Origins",id:"headers-and-query-parameters-from-different-origins",level:2},{value:"Custom Headers and Query Parameters",id:"custom-headers-and-query-parameters",level:3},{value:"Headers and Query Parameters from Destination",id:"headers-and-query-parameters-from-destination",level:3},{value:"Provide Headers and Query Parameters with Origin information",id:"provide-headers-and-query-parameters-with-origin-information",level:3},{value:"Encoding",id:"encoding",level:2}],f={toc:h};function k(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-the-generic-http-client"},"What Is the Generic HTTP Client?"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/odata/execute-odata-request"},"Executing a request using a generated OData client")," section, we explained how to make OData requests using the generated OData client.\nThis client is the highest layer of convenience and type-safety for the user.\nBelow the OData client uses the generic HTTP client of the SAP Cloud SDK.\nFor the final HTTP calls the SAP Cloud SDK for JavaScript uses the axios library."),(0,i.kt)("p",null,"In this document, we explain when and how to use the middle layer directly.\nDifferent clients serve different purposes:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OData Client:"),"\nProvides strong typing for the request (payload, select, filter, etc.) and response.\nFor each OData service, a separate client needs to be generated which defines the types and methods for this service.\nThe client takes care of deserializing your request to a URL and JSON payload as well as serializing the response.\nThe generated payload and URL are passed to the Generic HTTP Client."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Generic HTTP Client:"),"\nAdds SAP infrastructure specific functionality on top of a standard HTTP Client.\nAll OData services use the same generic HTTP client, so it contains no service-specific information.\nThe client handles connectivity related issues such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"Destination lookup")),(0,i.kt)("li",{parentName:"ul"},"Connections to ",(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/on-premise"},"SAP S/4HANA On-premise")," via the connectivity service"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/proxy"},"Web proxies"),".")),(0,i.kt)("p",null,"In the end, all information from the destination, connectivity service, and proxy configuration ends up in header-fields and ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/proxy-agent"},"proxy-agents"),".\nThe information goes one level down to the axios client."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"axios HTTP Client:"),"\nIs a widely used open source ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/axios"},"HTTP client for node"),".\nThis client executes the actual HTTP requests in the end."),(0,i.kt)("h2",{id:"how-to-use-it"},"How to Use It"),(0,i.kt)("p",null,"To make a request using the Generic HTTP client use the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeHttpRequest")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"executeHttpRequest(destination, requestConfig, httpRequestOptions);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"destination")," argument is either a full ",(0,i.kt)(o.Z,{slug:"interfaces/sap_cloud_sdk_connectivity.Destination",name:"destination object",mdxType:"LinkToLatestJsApiDocs"}),", that you have already fetched or an ",(0,i.kt)(o.Z,{slug:"interfaces/sap_cloud_sdk_connectivity.DestinationNameAndJwt",name:"object containing a destination name and an optional JWT",mdxType:"LinkToLatestJsApiDocs"}),".\nIn the latter case, the SAP Cloud SDK fetches the destination for you.\nFor more details, see ",(0,i.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"here"),".\nThe ",(0,i.kt)(o.Z,{slug:"interfaces/sap_cloud_sdk_http_client#HttpRequestConfig",name:"request configuration",mdxType:"LinkToLatestJsApiDocs"})," argument contains the request configuration.\nA minimal configuration would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},"{\n  method: 'get',\n  params: {\n    a: 'a',\n    b: 'b'\n  },\n  ...\n}\n")),(0,i.kt)("p",null,"Note that you can also give values for ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," in the request configuration.\nThe values you give in the request configuration ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/blob/main/packages/core/src/http-client/http-client.ts#L136-L148"},"will be merged")," with ones related to the destination:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  ...destinationRequestConfig,\n  ...customRequestConfig,\n  headers: {\n   ...destinationRequestConfig.headers,\n   ...customRequestConfig.headers\n}\n")),(0,i.kt)("p",null,"For keys which exist for both object the value from the custom request configuration will be used.\nFor example, a request configuration with ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization")," headers will overwrite the authorization header information from the destination."),(0,i.kt)("p",null,"You can also pass an optional third parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"httpRequestOptions"),", where you can indicate for example whether the SAP Cloud SDK should fetch ",(0,i.kt)("inlineCode",{parentName:"p"},"CSRF")," token for a non-GET request.\nFor a get request, the ",(0,i.kt)("inlineCode",{parentName:"p"},"CSRF")," token is not fetched and this option is ignored."),(0,i.kt)(s.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,i.kt)("p",null,"By default, the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchCsrfToken")," is true."),(0,i.kt)("p",null,"For some non-GET requests, fetching the ",(0,i.kt)("inlineCode",{parentName:"p"},"CSRF")," token is not required, and can be skipped.\nYou can disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"CSRF")," token request by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchCsrfToken")," to false like below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"executeHttpRequest(destination, requestConfig, { fetchCsrfToken: false });\n"))),(0,i.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,i.kt)("p",null,"Below is an example of the ",(0,i.kt)("inlineCode",{parentName:"p"},"httpRequestOptions")," to delegate the ",(0,i.kt)("inlineCode",{parentName:"p"},"CSRF")," token fetching to the SAP Cloud SDK."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},"{\n     fetchCsrfToken: true\n}\n")),(0,i.kt)("p",null,"By default, the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchCsrfToken")," is false."))),(0,i.kt)("h2",{id:"when-to-use-it"},"When to Use It"),(0,i.kt)("p",null,"You should consider the Generic HTTP client if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You need to use an unsupported feature by the typed OData Client like ",(0,i.kt)("inlineCode",{parentName:"li"},"upsert")," for example.\nWith this, you can profit from the aforementioned convenience in connectivity."),(0,i.kt)("li",{parentName:"ul"},"You want to ping a service or trigger a function import without a complicated payload.\nIn such a case the size of a full data model of the typed client is perhaps not worth the benefits."),(0,i.kt)("li",{parentName:"ul"},"You want to call a non-OData service that has no service definition.")),(0,i.kt)("p",null,"You should consider the OData client if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have to build complicated filter, selection, and/or expand conditions.\nHere you will highly benefit from the help of the OData client."),(0,i.kt)("li",{parentName:"ul"},"You want to update or create new entities.\nThe OData Client has built-in ",(0,i.kt)("inlineCode",{parentName:"li"},"ETag")," versions handling.\nWith the generic client, you have to manage versions on your own.")),(0,i.kt)("h2",{id:"headers-and-query-parameters-from-different-origins"},"Headers and Query Parameters from Different Origins"),(0,i.kt)("p",null,"As partially described in the ",(0,i.kt)("a",{parentName:"p",href:"./destination#additional-headers-and-query-parameters-on-destinations"},"destination guide")," there are multiple possible origins for query parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provided by the user on request level.\nThese parameters are referred to as ",(0,i.kt)("inlineCode",{parentName:"li"},"custom")," parameters."),(0,i.kt)("li",{parentName:"ul"},"Defined by the destination object or properties."),(0,i.kt)("li",{parentName:"ul"},"Introduced by the SAP Cloud SDK.\nThese parameters are referred to as ",(0,i.kt)("inlineCode",{parentName:"li"},"internal")," parameters.")),(0,i.kt)("p",null,"In case there are parameters with the same key from multiple origins the priority is:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Custom")," headers and parameters"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Destination")," headers and parameters"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Internal")," headers and parameters")),(0,i.kt)("h3",{id:"custom-headers-and-query-parameters"},"Custom Headers and Query Parameters"),(0,i.kt)("p",null,"The code snippets demonstrate how to provide custom headers and parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"        executeHttpRequest( myDestination, {\n            headers: {\n                apiKey: 'my-api-key'\n            },\n            params: {\n                myParam: 'my-param'\n            }\n        });\n")),(0,i.kt)("h3",{id:"headers-and-query-parameters-from-destination"},"Headers and Query Parameters from Destination"),(0,i.kt)("p",null,"You set these parameters on the destination object as described ",(0,i.kt)("a",{parentName:"p",href:"./destination#additional-headers-and-query-parameters-on-destinations"},"here"),".\nThe example below shows how to get:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parsed parameters in the ",(0,i.kt)("inlineCode",{parentName:"li"},"queryParameters")," property of the destination object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authentication")," value from the destination object, which will be used for the authentication header")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const { queryParameters, authentication } = await getDestination({\n  destinationName: 'myDestination',\n  userJwt: 'yourJwt'\n});\n")),(0,i.kt)("h3",{id:"provide-headers-and-query-parameters-with-origin-information"},"Provide Headers and Query Parameters with Origin information"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is an SDK version 2.x feature."))),(0,i.kt)("p",null,"In some situations you want to define the priority of headers and parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You want to enforce a hard coded api key/JWT and ignore the ones from e.g. the destination\n-You want a default query parameter, which can be overwritten by the destination properties")),(0,i.kt)("p",null,"Check the example below, how you can define the headers and parameters with origin information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"        executeHttpRequestWithOrigin( myDestination, {\n            headers: {\n                custom: { apiKey: 'custom-header' },\n                requestConfig: { apiKey: 'default-header' }\n            },\n            params: {\n                custom: { myParam: 'custom-param' },\n                requestConfig: { myParam: 'default-param' }\n            }\n        });\n")),(0,i.kt)("h2",{id:"encoding"},"Encoding"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section applies to version 2 of the SAP Cloud SDK.\nFor version 1 of the SAP Cloud SDK, encoding is done on OData related query parameters without a way to configure it."))),(0,i.kt)("p",null,"In the end, query parameters end up in the URL to the target system.\nTherefore, special characters with a meaning in a URL need to be ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Uniform_Resource_Identifier"},"% encoded"),".\nThe SAP Cloud SDK takes care of this encoding depending on the origin you use.\nFor calls executed via a typed client and generic http client the encoding is done as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Custom")," parameters are not encoded.\nThe idea behind this is to give you a way to send parameters with the highest priority to the target system as they are."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Destination")," parameters are encoded."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Internal")," parameters are encoded.")),(0,i.kt)("p",null,"For the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeHttpRequest")," method, an option is available to adjust the behavior."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const parameterEncoder = function (\n  params: Record<string, any>\n): Record<string, any> {\n  // your custom implementation\n};\nexecuteHttpRequest(destination, { parameterEncoder });\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"parameterEncoder")," function is applied to the keys and values of all parameters of the request.\nIn case you have the need to encode all parameters including custom ones, we exported a ",(0,i.kt)("inlineCode",{parentName:"p"},"encodeAllParameters")," method to do that.\nPass this method as the ",(0,i.kt)("inlineCode",{parentName:"p"},"parameterEncoder")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeHttpRequest")," call."),(0,i.kt)("p",null,"Note that this option is not available for the OData and OpenApi clients.\nThe typed clients take care of encoding already, and an additional encoding layer would lead to errors."))}k.isMDXComponent=!0}}]);