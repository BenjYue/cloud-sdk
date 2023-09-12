"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const l={id:"5.0-upgrade",title:"Update to Version 5 of the SAP Cloud SDK",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Update to Version 5",description:"Update your application to use version 5 of the SAP Cloud SDK",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk",5,"Update"]},o=void 0,r={unversionedId:"guides/5.0-upgrade",id:"version-v5/guides/5.0-upgrade",title:"Update to Version 5 of the SAP Cloud SDK",description:"Update your application to use version 5 of the SAP Cloud SDK",source:"@site/docs-java_versioned_docs/version-v5/guides/5.0-upgrade.mdx",sourceDirName:"guides",slug:"/guides/5.0-upgrade",permalink:"/cloud-sdk/docs/java/v5/guides/5.0-upgrade",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v5/guides/5.0-upgrade.mdx",tags:[],version:"v5",frontMatter:{id:"5.0-upgrade",title:"Update to Version 5 of the SAP Cloud SDK",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Update to Version 5",description:"Update your application to use version 5 of the SAP Cloud SDK",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","5","Update"]},sidebar:"docsJavaSidebar",previous:{title:"Kubernetes with SAP Kyma",permalink:"/cloud-sdk/docs/java/v5/environments/kubernetes-kyma"},next:{title:"Dependency Management",permalink:"/cloud-sdk/docs/java/v5/guides/manage-dependencies"}},s={},d=[{value:"Steps to migrate <code>Destination</code> usages",id:"steps-to-migrate-destination-usages",level:2},{value:"List of modules that have been removed with version 5",id:"list-of-modules-that-have-been-removed-with-version-5",level:2},{value:"List of modules that remain deprecated with version 5",id:"list-of-modules-that-remain-deprecated-with-version-5",level:2},{value:"List of APIs that have been removed with version 5",id:"list-of-apis-that-have-been-removed-with-version-5",level:2},{value:"List of changes to the OData Generator",id:"list-of-changes-to-the-odata-generator",level:2},{value:"List of updates to dependency management",id:"list-of-updates-to-dependency-management",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Version 5 of the SAP Cloud SDK is still under active development and hence the migration guide is incomplete.\nWe will publish the full migration guide when we release v5.")),(0,i.kt)("h2",{id:"steps-to-migrate-destination-usages"},"Steps to migrate ",(0,i.kt)("inlineCode",{parentName:"h2"},"Destination")," usages"),(0,i.kt)("p",null,"Version 5 of the SAP Cloud SDK comes with a major cleanup of the APIs around the ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination")," concept.\nLuckily, this cleanup comes ",(0,i.kt)("strong",{parentName:"p"},"without a lot of breaking changes")," so that existing applications require only a minimum of adjustments.\nTo make the process of adjusting existing applications as easy as possible, please follow the below steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Remove any invocation of ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination#decorate"),".\nThis method was only really used in conjunction with the ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultErpHttpDestination"),", which has been removed in this major version update.\nThe functionality has been moved internally, so that decorating existing ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination")," instances is no longer needed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"(Optional) Remove any invocations of ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination#asHttp")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination#asRfc"),".\nA big part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination")," cleanup was to straighten our public APIs that previously expected specific sub-types of ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationProperties")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpClientAccessor#getHttpClient(HttpDestinationProperties)"),").\nThese APIs now all simply rely on ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination"),", which makes casting via ",(0,i.kt)("inlineCode",{parentName:"p"},"#asHttp")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"#asRfc")," unnecessary.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Adjust error handling.\nPrior to version 5 of the SAP Cloud SDK, ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination#asHttp")," would throw an Exception in case the Destination Service wasn't able to provide valid ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header suggestions.\nThis has been changed so that ",(0,i.kt)("inlineCode",{parentName:"p"},"asHttp")," will no longer throw an Exception.\nInstead, calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"getHeaders")," method on an ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpDestination")," will throw an exception if any ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header suggestion provided by the Destination service contained an error."),(0,i.kt)("p",{parentName:"li"},"This change is ",(0,i.kt)("strong",{parentName:"p"},"important")," to keep in mind because it influences where applications are expected to catch Exceptions as the ",(0,i.kt)("inlineCode",{parentName:"p"},"getHeaders")," method will be called during request execution."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"  <details>\n")),(0,i.kt)("summary",null,"Example"),(0,i.kt)("p",{parentName:"li"},"Given the following code:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Try<Destination> maybeDestination = DestinationAccessor.tryGetDestination("my-destination");\nif (maybeDestination.isFailure()) {\n    throw new IllegalStateException("Unable to retrieve \'my-destination\'.", maybeDestination.getCause());\n}\n\nHttpDestination httpDestination;\ntry {\n    httpDestination = maybeDestination.get().asHttp();\n} catch (DestinationAccessException e) {\n    throw new IllegalStateException("Destination service wasn\'t able to provide a valid HTTP destination.", e);\n}\n\ntry {\n    new MyODataService().getAllEntities().executeRequest(httpDestination);\n} catch (ODataException e) {\n    throw new IllegalStateException("Unable to retrieve odata entities.", e);\n}\n')),(0,i.kt)("p",{parentName:"li"},"The code should be updated like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'   Try<Destination> maybeDestination = DestinationAccessor.tryGetDestination("my-destination");\n   if (maybeDestination.isFailure()) {\n       throw new IllegalStateException("Unable to retrieve \'my-destination\'.", maybeDestination.getCause());\n   }\n\n-  HttpDestination httpDestination;\n-  try {\n-      httpDestination = maybeDestination.get().asHttp();\n-  } catch (DestinationAccessException e) {\n-      throw new IllegalStateException("Destination service wasn\'t able to provide a valid HTTP destination.", e);\n-  }\n\n   try {\n-      new MyODataService().getAllEntities().executeRequest(httpDestination);\n+      new MyODataService().getAllEntities().executeRequest(maybeDestination.get());\n+  } catch (DestinationAccessException e) {\n+      throw new IllegalStateException("Destination service wasn\'t able to provide a valid HTTP destination.", e);\n   } catch (ODataException e) {\n       throw new IllegalStateException("Unable to retrieve odata entities.", e);\n   }\n')),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"  </details>\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Replace any of the removed classes related to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination")," API as mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"#list-of-apis-that-have-been-removed-with-version-5"},"list of removed APIs"),"."))),(0,i.kt)("h2",{id:"list-of-modules-that-have-been-removed-with-version-5"},"List of modules that have been removed with version 5"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Full list of removed modules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Blockchain:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blockchain-business-services-sdk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blockchain-business-services-visibility")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blockchain-client-fabric")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blockchain-client-multichain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scp-blockchain")))),(0,i.kt)("li",{parentName:"ul"},"Neo related modules:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"auditlog-scp-neo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cloudplatform-connectivity-scp-neo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cloudplatform-core-scp-neo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scp-neo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"security-scp-neo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tenant-scp-neo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"concurrency-scp-neo")))),(0,i.kt)("li",{parentName:"ul"},"Pregenerated clients",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scp-workflow-cf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"btp-business-rules")))),(0,i.kt)("li",{parentName:"ul"},"Others:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk:sdk-sjb-bom")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.archetypes:sdk-neo-javaee7")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.plugins:plugins-parent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.plugins:scp-neo-maven-plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.cloudplatform:security-servlet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.datamodel:odata-generator-cli"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Call the generator directly as a maven plugin: ",(0,i.kt)("inlineCode",{parentName:"li"},"mvn com.sap.cloud.sdk.datamodel:odata-generator-maven-plugin:5.0.0:generate")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.datamodel:odata-v4-generator-cli"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Call the generator directly as a maven plugin: ",(0,i.kt)("inlineCode",{parentName:"li"},"mvn com.sap.cloud.sdk.datamodel:odata-v4-generator-maven-plugin:5.0.0:generate")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.datamodel:openapi-generator-cli"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Call the generator directly as a maven plugin: ",(0,i.kt)("inlineCode",{parentName:"li"},"mvn com.sap.cloud.sdk.datamodel:openapi-generator-maven-plugin:5.0.0:generate")))))))),(0,i.kt)("h2",{id:"list-of-modules-that-remain-deprecated-with-version-5"},"List of modules that remain deprecated with version 5"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Full list of deprecated modules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.s4hana:s4hana-connectivity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.s4hana:s4hana-core")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.s4hana:rfc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.datamodel:soap")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"com.sap.cloud.sdk.cloudplatform:auditlog-scp-cf")))),(0,i.kt)("h2",{id:"list-of-apis-that-have-been-removed-with-version-5"},"List of APIs that have been removed with version 5"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Full list of deprecated API"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"API")),(0,i.kt)("td",null,(0,i.kt)("b",null,"Replacement")),(0,i.kt)("td",null,(0,i.kt)("b",null,"Comment")))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"DefaultErpHttpDestination"),(0,i.kt)("td",null,"HttpDestination"),(0,i.kt)("td",null,"HttpDestination now automatically adds sap-client and sap-language headers defined on the destination")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ErpHttpDestination"),(0,i.kt)("td",null,"DefaultHttpDestination"),(0,i.kt)("td",null,"-")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ErpHttpDestinationProperties"),(0,i.kt)("td",null,"DefaultHttpDestination"),(0,i.kt)("td",null,"-")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ErpHttpDestinationUtils"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"No replacement necessary")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"AbstractHttpDestination"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"No replacement necessary")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"WrappedDestination"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"No replacement necessary")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"AbstractScpDestination"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"No replacement necessary")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"AbstractScpDestinationBuilder"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"No replacement necessary")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ScpCfDestination"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"No replacement necessary")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ScpCfHttpDestination"),(0,i.kt)("td",null,"DefaultHttpDestination"),(0,i.kt)("td",null,"-")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ScpCfRfcDestination"),(0,i.kt)("td",null,"DefaultRfcDestination"),(0,i.kt)("td",null,"-")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"StringConverter"),(0,i.kt)("td",null,"Java Standard Library"),(0,i.kt)("td",null,"The Java Standard Library offers the same features, e.g.",(0,i.kt)("code",null,"SimpleDateFormat")," or ",(0,i.kt)("code",null,"DateTimeFormatter"),", with the pattern",(0,i.kt)("code",null,"yyyy-MM-dd")," or ",(0,i.kt)("code",null,"yyyy-MM-dd HH:mm:ss"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"StringValidator"),(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://commons.apache.org/proper/commons-codec/"},"Apache Commons Codec")),(0,i.kt)("td",null,"Use libraries like"," ",(0,i.kt)("a",{href:"https://commons.apache.org/proper/commons-codec/"},"Apache Commons Codec"),", which offers a"," ",(0,i.kt)("a",{href:"https://commons.apache.org/proper/commons-codec/apidocs/org/apache/commons/codec/binary/Base64.html"},"Base64")," ","class.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ClientCredentialsValidator"),(0,i.kt)("td",null,"Java Standard Library"),(0,i.kt)("td",null,"For validation client secrets see ",(0,i.kt)("code",null,"StringValidator")," above. To validate the client id, try to match the regular expression",(0,i.kt)("code",null,"[a-zA-Z0-9\\\\-!|]+"),".")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"OAuth2ServiceProvider"),(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://github.com/SAP/cloud-security-services-integration-library/tree/main/token-client"},"SAP BTP Java Token Client")),(0,i.kt)("td",null,"Please directly use the ",(0,i.kt)("a",{href:"https://github.com/SAP/cloud-security-services-integration-library/tree/main/token-client"},"SAP BTP Java Token Client")," library instead.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"AuthTokenBuilder"),(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://github.com/auth0/java-jwt"},"Java JWT implementation")),(0,i.kt)("td",null,"For creating an ",(0,i.kt)("code",null,"AuthToken")," from scratch, please manually define the claims and optional audience field. For example:",(0,i.kt)("pre",null,"String jwt = JWT.create()",(0,i.kt)("br",null),'\xa0\xa0.withClaim("zid", "tenant-id")',(0,i.kt)("br",null),'\xa0\xa0.withClaim("iss", "http://subscriber.domain")',(0,i.kt)("br",null),'\xa0\xa0.withAudience("my-app!t123")',(0,i.kt)("br",null),"\xa0\xa0.sign(Algorithm.none());",(0,i.kt)("br",null),"AuthToken token = new AuthToken(JWT.decode(jwt));"),"Alternatively for creating extended unit tests based on token handling, please find the ",(0,i.kt)("a",{href:"https://github.com/SAP/cloud-security-services-integration-library/tree/main/java-security-test"},"SAP BTP Java Security Test")," library instead."))))),(0,i.kt)("h2",{id:"list-of-changes-to-the-odata-generator"},"List of changes to the OData Generator"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Full list of OData Generator changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"javax.inject.Named")," annotation removed from code generated by the OData v2 and v4 generators. With that, ",(0,i.kt)("a",{parentName:"li",href:"https://search.maven.org/artifact/javax.inject/javax.inject"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"javax.inject")," dependency")," is no longer needed to compile the generated code."))),(0,i.kt)("h2",{id:"list-of-updates-to-dependency-management"},"List of updates to dependency management"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Full list of dependency management updates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"javax.inject.Named")," annotation removed from code generated by the OData v2 and v4 generators. With that, ",(0,i.kt)("a",{parentName:"li",href:"https://search.maven.org/artifact/javax.inject/javax.inject"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"javax.inject")," dependency")," is no longer needed to compile the generated code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://search.maven.org/artifact/org.slf4j/jcl-over-slf4j"},"The ",(0,i.kt)("inlineCode",{parentName:"a"},"jcl-over-slf4j")," dependency")," is no longer needed in Spring Boot 3 applications. Should you wish to include it, be sure to define the dependency version."))))}c.isMDXComponent=!0}}]);