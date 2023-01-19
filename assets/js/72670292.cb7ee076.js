"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8622],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,y=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},59235:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={id:"generic-untyped-odata-client",title:"Generic Advanced OData Client",sidebar_label:"Generic OData Client",description:"Together with type-safe OData client we provide a more generic and untyped OData client implementation to be used in advanced use-cases when the capabilities of typed OData client are not yet covering your use-case or fundamentally not enough to achieve your development goals. You can leverage untyped generic OData client for workarounds and trying out OData features that are not very frequently used. It's also helpful in a situation when flexibility is above safety and convenience.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},i=void 0,s={unversionedId:"features/odata/generic-untyped-odata-client",id:"version-v3/features/odata/generic-untyped-odata-client",title:"Generic Advanced OData Client",description:"Together with type-safe OData client we provide a more generic and untyped OData client implementation to be used in advanced use-cases when the capabilities of typed OData client are not yet covering your use-case or fundamentally not enough to achieve your development goals. You can leverage untyped generic OData client for workarounds and trying out OData features that are not very frequently used. It's also helpful in a situation when flexibility is above safety and convenience.",source:"@site/docs-java_versioned_docs/version-v3/features/odata/generic-odata-client.mdx",sourceDirName:"features/odata",slug:"/features/odata/generic-untyped-odata-client",permalink:"/cloud-sdk/docs/java/v3/features/odata/generic-untyped-odata-client",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v3/features/odata/generic-odata-client.mdx",tags:[],version:"v3",frontMatter:{id:"generic-untyped-odata-client",title:"Generic Advanced OData Client",sidebar_label:"Generic OData Client",description:"Together with type-safe OData client we provide a more generic and untyped OData client implementation to be used in advanced use-cases when the capabilities of typed OData client are not yet covering your use-case or fundamentally not enough to achieve your development goals. You can leverage untyped generic OData client for workarounds and trying out OData features that are not very frequently used. It's also helpful in a situation when flexibility is above safety and convenience.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJavaSidebar",previous:{title:"OData v4 Client API",permalink:"/cloud-sdk/docs/java/v3/features/odata/v4-vdm-client"},next:{title:"Overview",permalink:"/cloud-sdk/docs/java/v3/features/rest/overview"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Basic API Usage",id:"basic-api-usage",level:2},{value:"Creating Requests",id:"creating-requests",level:3},{value:"Evaluating Responses",id:"evaluating-responses",level:3},{value:"Building Queries",id:"building-queries",level:3},{value:"Cookbook - Generic OData Client",id:"cookbook---generic-odata-client",level:2},{value:"Handling OData Delta Token",id:"handling-odata-delta-token",level:3},{value:"OData v2 Batch Read Request",id:"odata-v2-batch-read-request",level:3},{value:"Call OData v4 Bound Functions and Actions",id:"call-odata-v4-bound-functions-and-actions",level:3},{value:"Adding Trailing Slash to the Service Path",id:"adding-trailing-slash-to-the-service-path",level:3},{value:"Fetching Raw Stream Data From /$value Endpoint",id:"fetching-raw-stream-data-from-value-endpoint",level:3}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Advanced! Use on your own discretion.",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The API for generic OData client is not intended to be used by application developers unless required otherwise.\nIts API is a subject to change and non-breaking changes are not guaranteed."),(0,r.kt)("p",{parentName:"admonition"},"Please, make sure you know what you're doing and check if stable type-safe OData client API can solve you problem.")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Together with type-safe OData client, we provide a more generic and untyped OData client implementation to be used in ",(0,r.kt)("strong",{parentName:"p"},"advanced")," use-cases.\nWhen the capabilities of typed OData client are not enough to achieve your development goals.\nYou can leverage generic untyped OData client for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Workarounds and quick fixes"),(0,r.kt)("li",{parentName:"ul"},"Trying out OData features that are not yet implemented in OData type-safe client."),(0,r.kt)("li",{parentName:"ul"},"When flexibility is above safety and convenience"),(0,r.kt)("li",{parentName:"ul"},"Debugging and testing"),(0,r.kt)("li",{parentName:"ul"},"Building specific OData protocol based API yourself"),(0,r.kt)("li",{parentName:"ul"},"Integrating OData capabilities and awareness into your project")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The generic client is capable of both OData V2 and V4 protocols.\nThe client is made aware about which version to use in requests via a dedicated parameter.")),(0,r.kt)("h2",{id:"basic-api-usage"},"Basic API Usage"),(0,r.kt)("h3",{id:"creating-requests"},"Creating Requests"),(0,r.kt)("p",null,"Requests are represented by dedicated request classes for each operation.\nFor example to read a collection of entities use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'StructuredQuery query = StructuredQuery.onEntity("A_Entity", ODataProtocol.V4);\nnew ODataRequestRead("/path/to/service", query);\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Queries can be created conveniently as described in ",(0,r.kt)("a",{parentName:"p",href:"#building-queries"},"Building Queries below"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Other Operations:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"ODataRequestRead\nODataRequestReadByKey\nODataRequestCreate\nODataRequestUpdate\nODataRequestDelete\nODataRequestFunction\nODataRequestAction\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"What used to be function imports in OData V2 have been split into functions and actions in the OData V4 standard.\nThe above classes adopt the OData V4 notion.\nTo perform V2 function imports leverage the function class in case the operation should use HTTP GET.\nIf instead the operation should use POST, use the action class.")),(0,r.kt)("h3",{id:"evaluating-responses"},"Evaluating Responses"),(0,r.kt)("p",null,"Requests can be executed by supplying an HTTP client to the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," method.\nYou can obtain a client from any given destination as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"final HttpClient client = HttpClientAccessor.getHttpClient(destination);\n// perform the HTTP operation:\nfinal ODataRequestResultGeneric result = request.execute(client);\n")),(0,r.kt)("p",null,"Within ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," the SAP Cloud SDK will perform a health check on the response.\nIn case of a status code greater or equal to 400 an exception will be thrown."),(0,r.kt)("p",null,"The result class allows for parsing the result into a specific Java type, getting metadata or even the raw HTTP response.\nFor example, you can parse the response body into a ",(0,r.kt)("inlineCode",{parentName:"p"},"SalesOrder")," or a list of sales orders as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"SalesOrder order = result.as(SalesOrder.class);\nCollection<SalesOrder> order = result.asList(SalesOrder.class);\n")),(0,r.kt)("h3",{id:"building-queries"},"Building Queries"),(0,r.kt)("p",null,"Queries can be build with dedicated, fluent builder classes.\nUse the ",(0,r.kt)("inlineCode",{parentName:"p"},"StructuredQuery")," class to create a query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'StructuredQuery query = StructuredQuery.onEntity("Movies", ODataProtocol.V4);\n// method names correspond to the OData query parameters $select, $filter, etc.\nquery.select("Field A", "Field B");\n// obtain the encoded URL string representation:\nString encodedQuery = query.getEncodedQueryString();\n')),(0,r.kt)("p",null,"For filters there is a dedicated API to build filter expressions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'FieldUntyped fieldA = FieldReference.of("Field A")\nFieldUntyped fieldB = FieldReference.of("Field B")\n\nValueBoolean expression = fieldA.equalTo("foo").and(fieldB.greaterThan(42));\n\n// add the expression as filter to a query:\nquery.filter(expression);\n')),(0,r.kt)("h2",{id:"cookbook---generic-odata-client"},"Cookbook - Generic OData Client"),(0,r.kt)("p",null,"We collect popular use-cases and scenarios leveraging the Generic OData Client in this cookbook section."),(0,r.kt)("h3",{id:"handling-odata-delta-token"},"Handling OData Delta Token"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_RequestingChanges"},"OData v4 specification")," provides capabilities to return only a delta between your last and ongoing request.\nFor example, if your previous request loaded information from the service which continues to be updated with new records.\nThen with your next request you can ask to provide you only with the difference between what you've already loaded and current records on the service side.\nFor that, you can leverage ",(0,r.kt)("inlineCode",{parentName:"p"},"$deltatokens")," query parameter."),(0,r.kt)("p",null,"We do not provide convenience API for delta tokens in our type-safe client.\nBut you can leverage generic OData client to fetch the delta token from the ",(0,r.kt)("inlineCode",{parentName:"p"},"response")," as in the code snippet below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ODataRequestResultGeneric response = request.execute(httpClient);\n// obtain delta token and add it to the next request, if present\nresponse.getDeltaLink()\n        .flatMap(ODataUriFactory::extractDeltaToken)\n        .peek(token -> deltaRequest.addQueryParameter("$deltatoken", token));\n')),(0,r.kt)("h3",{id:"odata-v2-batch-read-request"},"OData v2 Batch Read Request"),(0,r.kt)("p",null,"For use cases that are not supported in the ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/v3/features/odata/v2-vdm-client"},"type-safe client")," you can choose to use the generic OData client.\nLet's see an example of how to use the generic OData client for batch requests for OData v2."),(0,r.kt)("p",null,"In the code snippet below we:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prepare an instance of ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpClient")," that will be used to execute the HTTP request."),(0,r.kt)("li",{parentName:"ol"},"Initialize a generic OData Batch request with OData service path and protocol version."),(0,r.kt)("li",{parentName:"ol"},"Build a read request for an OData entity collection and add it to the Batch request object."),(0,r.kt)("li",{parentName:"ol"},"Execute the Batch request."),(0,r.kt)("li",{parentName:"ol"},"Access the Batch response and fetch the list of fields from OData entities, that matched the applied read request.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'HttpDestination destination;\nString servicePath = "/sap/opu/odata/sap/<SERVICE_PATH>";\nString entityName = "EntityCollectionName";\nHttpClient httpClient = HttpClientAccessor.getHttpClient(destination);\n\n// instantiate custom OData V2 batch request\nODataRequestBatch requestBatch = new ODataRequestBatch(servicePath, ODataProtocol.V2);\n\n// instantiate custom OData V2 read request\nStructuredQuery structuredQuery = StructuredQuery.onEntity(entityName, ODataProtocol.V2);\nstructuredQuery.select("Field1", "Field2", "Field3");\nstructuredQuery.filter(FieldReference.of("Field4").equalTo("FooBar"));\nString encodedQuery = structuredQuery.getEncodedQueryString();\nODataRequestRead requestRead = new ODataRequestRead(servicePath, entityName, encodedQuery, ODataProtocol.V2);\n\n// add read request to batch\nrequestBatch.addRead(requestRead);\n\n// execute the batch request\nODataRequestResultMultipartGeneric batchResult = requestBatch.execute(httpClient);\n\n// extract information from batch response, by referring to the individual OData request reference\nODataRequestResultGeneric queryResult = batchResult.getResult(requestRead);\nList<Map<String, Object>> listOfEntityFields = queryResult.asListOfMaps();\n')),(0,r.kt)("p",null,"This example is a great demonstration of how you can work around certain limitations of a type-safe client aka VDM, tackle advanced OData features, or even take care of misbehaving servers or OData standard deviations."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Batch requests in OData v2 are now supported in our typed clients and you no longer need to use the generic OData client for such requests.\nRefer ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/v3/features/odata/v2-vdm-client#batch-requests"},"here")," for more details.")),(0,r.kt)("h3",{id:"call-odata-v4-bound-functions-and-actions"},"Call OData v4 Bound Functions and Actions"),(0,r.kt)("p",null,"Bound function and actions were freshly introduced in OData v4 specification.\nWe'll soon provide a type-safe API to leverage these features in a convenient way.\nIf you already require using this functionality, we have a low-level implementation in place that is capable of performing bound function and action calls."),(0,r.kt)("p",null,"Below is a generic client example that you can use as a workaround:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// this code will build the following URL:\n// "/service/Entity(key1=\'foo%2Fbar\',key2=123)/Model.Function(param1=\'foo%2Fbar\',param2=123)"\n\nODataEntityKey key = new ODataEntityKey(ODataProtocol.V4)\n    .addKeyProperty("key1", "foo/bar")\n    .addKeyProperty("key2", 123);\n\nODataFunctionParameters  params = new ODataFunctionParameters(ODataProtocol.V4)\n    .addKeyProperty("param1", "foo/bar")\n    .addKeyProperty("param2", 123);\n\nODataResourcePath functionPath =\n    new ODataResourcePath()\n        .addSegment("Entity", key)\n        .addSegment("Model.Function", params);\n\nODataRequestFunction request =\n    new ODataRequestFunction("/service", functionPath, null, ODataProtocol.V4);\n')),(0,r.kt)("p",null,"This is essentially what happens under the hood when you are using the generated type-safe client code.\nWhen we release a support for type-safe calls you can replace these snippets with the fluent API."),(0,r.kt)("h3",{id:"adding-trailing-slash-to-the-service-path"},"Adding Trailing Slash to the Service Path"),(0,r.kt)("p",null,"By default, the SAP Cloud SDK strips all trailing slashes from a resource path.\nIt's a standard behavior and works for 99% of productively available services.\nSometimes, however, services might complain or even fail if a path doesn't end with a slash ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://host/service-path/resource-path/?$filter...")," - works"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://host/service-path/resource-path?$filter..")," - doesn't work (default URI composition strategy in the SAP Cloud SDK)")),(0,r.kt)("p",null,"To work around this situation you can use the generic OData client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nODataRequestRead request = new ODataRequestRead("/service-path/resource-path/", "", "$filter=...", ODataProtocol.V2)\n// produces an URI like this: /service-path/resource-path/?$filter=...\n\nHttpClient client = HttpClientAccessor.getHttpClient(destination);\nODataRequestResultGeneric result = request.execute(client);\n\n')),(0,r.kt)("h3",{id:"fetching-raw-stream-data-from-value-endpoint"},"Fetching Raw Stream Data From /$value Endpoint"),(0,r.kt)("p",null,"You can get ",(0,r.kt)("inlineCode",{parentName:"p"},"fileStream")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"responseHeaders")," in a single request by using the low-level Generic OData Client.\nLet's take this dummy OData request as an example: ",(0,r.kt)("inlineCode",{parentName:"p"},"/FileService/FileCollection(id='abc')/$value?foo=bar")),(0,r.kt)("p",null,"The corresponding code to fetch the raw file's content will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nHttpDestination destination;\n\nODataEntityKey entityKey = new ODataEntityKey(ODataProtocol.V2).addKeyProperty("id", "abc")\nODataResourcePath resource = ODataResourcePath.of("FileCollection", entityKey).addSegment("$value");\nODataRequestReadByKey request = new ODataRequestReadByKey("FileService", resource, "?foo=bar", ODataProtocol.V2);\n\nODataRequestResultGeneric result = request.execute(HttpClientAccessor.getHttpClient(destination));\nHttpResponse httpResponse = result.getHttpResponse();\nHeader[] responseHeaders = httpResponse.getAllHeaders();\ntry( InputStream fileStream = httpResponse.getEntity().getContent(); ) {\n  // do thing\n}\n\n')),(0,r.kt)("p",null,"Alternatively you can run the HTTP request yourself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nHttpDestination destination;\n\nHttpClient httpClient = HttpClientAccessor.getHttpClient(destination);\nHttpResponse httpResponse = httpClient.execute(new HttpGet(\"/FileService/FileCollection(id='abc')/$value\"));\nHeader[] responseHeaders = httpResponse.getAllHeaders();\ntry( InputStream fileStream = httpResponse.getEntity().getContent(); ) {\n  // do thing\n}\n\n")))}d.isMDXComponent=!0}}]);