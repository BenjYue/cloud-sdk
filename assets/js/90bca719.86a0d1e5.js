"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),o=n(58911);const s={id:"btp-business-rules-rest-api",title:"Type-Safe Client for SAP Business Rules service",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"SAP Business Rules service",description:"Learn how to access the SAP BTP Business Rules REST API with the type-safe client from the SAP Cloud SDK for Java",keywords:["sap","cloud","sdk","rest","scp","business-rules"]},r=void 0,l={unversionedId:"features/rest/clients/btp-business-rules-rest-api",id:"features/rest/clients/btp-business-rules-rest-api",title:"Type-Safe Client for SAP Business Rules service",description:"Learn how to access the SAP BTP Business Rules REST API with the type-safe client from the SAP Cloud SDK for Java",source:"@site/docs-java/features/rest/clients/btp-business-rules-rest-api.mdx",sourceDirName:"features/rest/clients",slug:"/features/rest/clients/btp-business-rules-rest-api",permalink:"/cloud-sdk/docs/java/features/rest/clients/btp-business-rules-rest-api",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/features/rest/clients/btp-business-rules-rest-api.mdx",tags:[],version:"current",frontMatter:{id:"btp-business-rules-rest-api",title:"Type-Safe Client for SAP Business Rules service",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"SAP Business Rules service",description:"Learn how to access the SAP BTP Business Rules REST API with the type-safe client from the SAP Cloud SDK for Java",keywords:["sap","cloud","sdk","rest","scp","business-rules"]},sidebar:"docsJavaSidebar",previous:{title:"SAP Workflow service",permalink:"/cloud-sdk/docs/java/features/rest/clients/scp-workflow-rest-api"},next:{title:"BAPI/RFC",permalink:"/cloud-sdk/docs/java/features/bapi-and-rfc/overview"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Cloud Foundry Configuration",id:"cloud-foundry-configuration",level:3},{value:"Bind App to SAP Business Technology Platform Business Rules Service Instance",id:"bind-app-to-sap-business-technology-platform-business-rules-service-instance",level:4},{value:"Create Service Instance",id:"create-service-instance",level:5},{value:"Bind your App to Service Instance",id:"bind-your-app-to-service-instance",level:5},{value:"Develop Your App",id:"develop-your-app",level:3},{value:"Dependency Assumptions",id:"dependency-assumptions",level:4},{value:"Add SAP BTP Business Rules Service Dependency To Your Project",id:"add-sap-btp-business-rules-service-dependency-to-your-project",level:4},{value:"Invoke the Java Client Library",id:"invoke-the-java-client-library",level:3},{value:"Create Destination",id:"create-destination",level:4},{value:"Invoke the APIs",id:"invoke-the-apis",level:4},{value:"Capabilities and Limitations",id:"capabilities-and-limitations",level:2},{value:"Capabilities and Benefits",id:"capabilities-and-benefits",level:3},{value:"Known Limitations",id:"known-limitations",level:3},{value:"Additional Information",id:"additional-information",level:2},{value:"Creating HTTP Destinations Manually",id:"creating-http-destinations-manually",level:3},{value:"Take Note of API endpoint and OAuth Credentials",id:"take-note-of-api-endpoint-and-oauth-credentials",level:3},{value:"Create HTTP Destination",id:"create-http-destination",level:3},{value:"Create Destination Programmatically",id:"create-destination-programmatically",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{mdxType:"MvnBadge"}),(0,i.kt)("admonition",{title:"Beta State",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This library is released in ",(0,i.kt)("strong",{parentName:"p"},"beta state")," only and is subject to change.")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/product/BUSINESS_RULES/Cloud/en-US"},"SAP Business Rules service")," for Cloud Foundry helps customers to translate complex business logic into a natural language.\nIt consists of multiple APIs that can be used for modelling, authoring, and simulating business rules."),(0,i.kt)("p",null,"To benefit from features offered by the REST APIs of the SAP BTP Business Rules service, you can leverage the type-safe client library provided by the ",(0,i.kt)("strong",{parentName:"p"},"SAP Cloud SDK")," and discover it via your IDE."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Add the latest version of the ",(0,i.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/com.sap.cloud.sdk/sdk-bom"},"SAP Cloud SDK")," to your Java application dependencies or ",(0,i.kt)("a",{parentName:"p",href:"../../../getting-started"},"generate a new one from archetypes that we provide"),"."),(0,i.kt)("p",null,"After you created an SAP Cloud SDK-based Java app, you can invoke the SAP BTP Business Rules REST API in your business logic.\nMore precisely, the SAP Cloud SDK offers abstractions for the ",(0,i.kt)("a",{parentName:"p",href:"https://api.sap.com/api/SAP_CF_BusinessRules_Repository/resource"},"Rule Authoring API")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://api.sap.com/api/SAP_CF_BusinessRules_Runtime_V2/resource"},"Rule Execution API"),".\nBoth of them can be accessed conveniently once the initial configuration is completed."),(0,i.kt)("h3",{id:"cloud-foundry-configuration"},"Cloud Foundry Configuration"),(0,i.kt)("p",null,"Let's look in detail at all necessary steps to configure your Cloud Foundry app to use the SAP BTP Business Rules service."),(0,i.kt)("h4",{id:"bind-app-to-sap-business-technology-platform-business-rules-service-instance"},"Bind App to SAP Business Technology Platform Business Rules Service Instance"),(0,i.kt)("p",null,"Refer to the documentation on ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/0e4dd38c4e204f47b1ffd09e5684537b/Cloud/en-US/82b7be2d1a5f4ade823ad8e740d88834.html"},"help.sap.com")," for the full picture.\nWe'll outline the essentials with the assumption that you understand or have all the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Which Cloud Foundry subaccount and space you want to use"),(0,i.kt)("li",{parentName:"ul"},"You have access to the SAP BTP Business Rules Service feature"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../../guides/cf-cli"},"You have installed the Cloud Foundry Command Line Interface (CLI) on your machine"),".")),(0,i.kt)("h5",{id:"create-service-instance"},"Create Service Instance"),(0,i.kt)("p",null,"Open the command line and authenticate at your Cloud Foundry organization by invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"cf login"),"."),(0,i.kt)("p",null,"Consider specifying the respective ",(0,i.kt)("strong",{parentName:"p"},"subaccount"),", ",(0,i.kt)("strong",{parentName:"p"},"organization"),", and ",(0,i.kt)("strong",{parentName:"p"},"space")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"cf target")," if necessary."),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," to navigate to the directory of your app and run the following to create the service instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cf create-service business-rules lite my-business-rules\n")),(0,i.kt)("p",null,"This command creates an instance of the SAP BTP Business Rules Service in the CF space that your CLI points to.\nNote that we named the service instance ",(0,i.kt)("inlineCode",{parentName:"p"},"my-business-rules"),".\nIf you have chosen a different name, please, remember the name as you'll need it for your deployment descriptor ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml")," later on."),(0,i.kt)("p",null,"Once the service instance creation is finished, you can see the service instance in your CF space under ",(0,i.kt)("inlineCode",{parentName:"p"},"Services\\Instances")," in the left-hand side menu."),(0,i.kt)("h5",{id:"bind-your-app-to-service-instance"},"Bind your App to Service Instance"),(0,i.kt)("p",null,"Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml")," in your project and mention your service instance under ",(0,i.kt)("inlineCode",{parentName:"p"},"services")," as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"applications:\n  - name: awesome-app\n    memory: 1024M\n    timeout: 600\n    random-route: false\n    path: application/target/awesome-app-application.war\n    buildpacks:\n      - sap_java_buildpack\n    env:\n      TARGET_RUNTIME: tomee7\n      SET_LOGGING_LEVEL: '{ROOT: INFO, com.sap.cloud.sdk: INFO}'\n      JBP_CONFIG_SAPJVM_MEMORY_SIZES: metaspace:128m..\n    services:\n      - my-destination\n      - my-business-rules\n    routes:\n      - route: <omitted-on-purpose>\n")),(0,i.kt)("p",null,"This ensures that the ",(0,i.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICES")," environment variable of the CF application gets enhanced with an additional entry containing the connection details of the newly bound SAP BTP Business Rules service.\nNow, redeploy your app with ",(0,i.kt)("inlineCode",{parentName:"p"},"cf push"),"."),(0,i.kt)("h3",{id:"develop-your-app"},"Develop Your App"),(0,i.kt)("h4",{id:"dependency-assumptions"},"Dependency Assumptions"),(0,i.kt)("p",null,"This guide assumes that you have a Java project using the SAP Cloud SDK.\nIf not, we recommend going ahead and ",(0,i.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/java/getting-started"},"creating one from one of the Maven archetypes"),".\nYou should also have ",(0,i.kt)("a",{parentName:"p",href:"https://maven.apache.org/download.cgi"},"Apache Maven")," installed and be able to successfully run ",(0,i.kt)("inlineCode",{parentName:"p"},"mvn clean install")," from the root of your project."),(0,i.kt)("p",null,"Make sure that you have the SAP Cloud SDK Bill-of-Material (BOM) in your ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencyManagement")," section of your ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," structure like in the example below."),(0,i.kt)("admonition",{title:"Always use the latest version of SAP Cloud SDK",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Current version is: ",(0,i.kt)(o.Z,{mdxType:"MvnBadge"}))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependencyManagement>\n  <dependencies>\n    <dependency>\n      <groupId>com.sap.cloud.sdk</groupId>\n      <artifactId>sdk-bom</artifactId>\n      <version>4.XX.X</version>\n      <type>pom</type>\n      <scope>import</scope>\n    </dependency>\n  </dependencies>\n</dependencyManagement>\n")),(0,i.kt)("h4",{id:"add-sap-btp-business-rules-service-dependency-to-your-project"},"Add SAP BTP Business Rules Service Dependency To Your Project"),(0,i.kt)("p",null,"You can refer to the Java client library for the SAP BTP Business Rules service with the following Maven dependency:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>com.sap.cloud.sdk.services</groupId>\n    <artifactId>btp-business-rules</artifactId>\n</dependency>\n")),(0,i.kt)("p",null,"After adding the dependency to your ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," file, run ",(0,i.kt)("inlineCode",{parentName:"p"},"mvn clean install")," to let ",(0,i.kt)("inlineCode",{parentName:"p"},"Maven")," install it."),(0,i.kt)("h3",{id:"invoke-the-java-client-library"},"Invoke the Java Client Library"),(0,i.kt)("h4",{id:"create-destination"},"Create Destination"),(0,i.kt)("p",null,"Let's create a Java representation of this destination.\nYou can use ",(0,i.kt)("inlineCode",{parentName:"p"},"ScpCfServiceDestinationLoader.getDestinationForService")," to create a destination by reading properties from the ",(0,i.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICES")," environment variable entry for the Business Rules service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// get destination for Rule Authoring API\nfinal HttpDestination ruleAuthoringDestination =\n                ScpCfServiceDestinationLoader.getDestinationForService(\n                        ScpCfServiceDestinationLoader.CfServices.BUSINESS_RULES_AUTHORING,\n                        "my-business-rules");\n\n// get destination for Rule Execution API\nfinal HttpDestination ruleExecutionDestination =\n                ScpCfServiceDestinationLoader.getDestinationForService(\n                        ScpCfServiceDestinationLoader.CfServices.BUSINESS_RULES_EXECUTION,\n                        "my-business-rules");\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ScpCfServiceDestinationLoader.getDestinationForService")," API currently only works out of the box for a handful of services.\nFor other services, the alternative would be to create a Destination manually in CF using values in the ",(0,i.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICES")," and then accessing the destination using the ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationAccessor"),".\nFor details refer to ",(0,i.kt)("a",{parentName:"p",href:"btp-business-rules-rest-api#additional-information"},"Additional information")," section.")),(0,i.kt)("h4",{id:"invoke-the-apis"},"Invoke the APIs"),(0,i.kt)("p",null,"Once you created a destination that points to the API of your choice, you can make the first call to that API."),(0,i.kt)("p",null,"For example, you can list all existing projects from the Rule Authoring API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"final List<ProjectVersionObject> allProjects =\n                new ProjectsApi(authoringDestination).readProjects();\n")),(0,i.kt)("p",null,"This is how we call the APIs of the SAP BTP Business Rules service in a type-safe manner and benefit from type-safe access to the resulting response objects.\nFor instance, we can read particular details about each project definition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"allProjects.forEach(project -> {\n    log.info(project.getId());\n    log.info(project.getName());\n    log.info(project.getVersion().toString());\n});\n")),(0,i.kt)("p",null,"You can check the SAP BTP Business Rules API's model definition on the ",(0,i.kt)("a",{parentName:"p",href:"https://api.sap.com/package/SAPCPBusinessRulesAPIs?section=Artifacts"},"SAP Business Accelerator Hub")," or use your IDE to discover available properties via its auto-complete function."),(0,i.kt)("h2",{id:"capabilities-and-limitations"},"Capabilities and Limitations"),(0,i.kt)("h3",{id:"capabilities-and-benefits"},"Capabilities and Benefits"),(0,i.kt)("p",null,"The Java client library for SAP BTP Business Rules service enables the developer to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Invoke the REST API in a type-safe and convenient manner"),(0,i.kt)("li",{parentName:"ul"},"Provides Java abstractions for the ",(0,i.kt)("a",{parentName:"li",href:"https://api.sap.com/api/SAP_CF_BusinessRules_Repository/resource"},"Rule Authoring")," and the ",(0,i.kt)("a",{parentName:"li",href:"https://api.sap.com/api/SAP_CF_BusinessRules_Runtime_V2/resource"},"Rule Execution")," REST API endpoints along with the respective model classes"),(0,i.kt)("li",{parentName:"ul"},"Relieves the developer from all the ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTP-related")," development work like interpreting ",(0,i.kt)("inlineCode",{parentName:"li"},"status codes"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"JSON de-/serialization"),", etc"),(0,i.kt)("li",{parentName:"ul"},"It lets the developer focus on the business logic instead of coding low-level API calls"),(0,i.kt)("li",{parentName:"ul"},"We keep the library up to date with the latest API specifications which simplifies the maintainability of your app's code"),(0,i.kt)("li",{parentName:"ul"},"We integrate the SAP BTP Business Rules library with SAP Cloud SDK capabilities, such as tenant-aware destination retrieval and many more")),(0,i.kt)("h3",{id:"known-limitations"},"Known Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We support SAP BTP Business Rules service APIs only on the SAP BTP Cloud Foundry environment.\nThe SAP Business Technology Platform Neo environment is ",(0,i.kt)("strong",{parentName:"li"},"Not supported!"))),(0,i.kt)("h2",{id:"additional-information"},"Additional Information"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please note the steps outlined in the below section are only required if you chose to skip using the convenience API ",(0,i.kt)("inlineCode",{parentName:"p"},"ScpCfServiceDestinationLoader.getDestinationForService")," introduced ",(0,i.kt)("a",{parentName:"p",href:"btp-business-rules-rest-api#create-destination"},"here")," and instead would like to use ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationAccessor"),".\nThis could be case, for example, if you are interested in trying to use generated clients of other services.")),(0,i.kt)("h3",{id:"creating-http-destinations-manually"},"Creating HTTP Destinations Manually"),(0,i.kt)("p",null,"To create HTTP destinations manually in CF from the values read from ",(0,i.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICES")," of the CF application, please follow the below steps.\nThe steps below can be continued in this example from the ",(0,i.kt)("a",{parentName:"p",href:"btp-business-rules-rest-api#bind-your-app-to-service-instance"},"Bind your App to Service Instance")," section."),(0,i.kt)("h3",{id:"take-note-of-api-endpoint-and-oauth-credentials"},"Take Note of API endpoint and OAuth Credentials"),(0,i.kt)("p",null,"Once the app is bound to the Business Rules service instance and app deployment has finished, go to your CF space and navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"Services\\Instances"),".\nYou should see the service instance you created along with the information that is bound to your application."),(0,i.kt)("p",null,"Click on the service instance name, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"my-business-rules"),".\nOn the right-hand side, you can see all apps that are bound to that service instance along with a button ",(0,i.kt)("inlineCode",{parentName:"p"},"View Credentials"),".\nMake sure that the entry that belongs to your app is selected in the table below, given that multiple apps are bound to the same service instance, and click the ",(0,i.kt)("inlineCode",{parentName:"p"},"View Credentials")," button."),(0,i.kt)("p",null,"Consider the ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," content in the new pop-up window.\nHere is a quick example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "endpoints": {\n    "rule_repository_url": "foo",\n    "rule_runtime_url": "bar"\n  },\n  "html5-apps-repo": {\n    "app_host_id": "foo"\n  },\n  "uaa": {\n    "uaadomain": "bar",\n    "tenantmode": "dedicated",\n    "sburl": "bar",\n    "clientid": "foo",\n    "verificationkey": "bar",\n    "apiurl": "foo",\n    "xsappname": "bar",\n    "identityzone": "foo",\n    "identityzoneid": "bar",\n    "clientsecret": "foo",\n    "tenantid": "bar",\n    "url": "foo"\n  },\n  "sap.cloud.service": "com.sap.bpm.rule"\n}\n')),(0,i.kt)("p",null,"Next, look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," content and collect the values for the following ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rule_repository_url")," (this one is needed if you want to use the Rule Authoring API)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rule_runtime_url")," (this one is needed if you want to use the Rule Execution API)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uaa\\url")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uaa\\clientid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uaa\\clientsecret"))),(0,i.kt)("p",null,"You'll need these values in the next step."),(0,i.kt)("h3",{id:"create-http-destination"},"Create HTTP Destination"),(0,i.kt)("p",null,"Go to your CF subaccount, navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"Connectivity\\Destinations")," in the left-hand side menu, and create a new HTTP destination with the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: Business-Rules-Authoring-Api"),(0,i.kt)("li",{parentName:"ul"},"Type: HTTP"),(0,i.kt)("li",{parentName:"ul"},"URL: The value of ",(0,i.kt)("inlineCode",{parentName:"li"},"rule_repository_url")),(0,i.kt)("li",{parentName:"ul"},"Proxy Type: Internet"),(0,i.kt)("li",{parentName:"ul"},"Authentication: OAuth2ClientCredentials"),(0,i.kt)("li",{parentName:"ul"},"Client ID: The value of ",(0,i.kt)("inlineCode",{parentName:"li"},"clientid")),(0,i.kt)("li",{parentName:"ul"},"Client Secret: The value of ",(0,i.kt)("inlineCode",{parentName:"li"},"clientsecret")),(0,i.kt)("li",{parentName:"ul"},"Token Service URL: The value of ",(0,i.kt)("inlineCode",{parentName:"li"},"url")," appended by ",(0,i.kt)("inlineCode",{parentName:"li"},"/oauth/token?grant_type=client_credentials"))),(0,i.kt)("admonition",{title:"Rule Execution Destination",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The above example shows how to configure the destination for the Rule Authoring API.\nYou can configure the destination to point to the Rule Execution API by adapting the Name, the URL, and the Token Service URL fields accordingly.")),(0,i.kt)("p",null,"Click Save.\nRestart your app by navigating to ",(0,i.kt)("inlineCode",{parentName:"p"},"Spaces\\<you-space-name>\\Applications"),".\nChose your app from the list by clicking on the link with its name and find the restart button on the page that loads."),(0,i.kt)("h3",{id:"create-destination-programmatically"},"Create Destination Programmatically"),(0,i.kt)("p",null,"The invocation of the Business Rules client remains the same, the only difference in code is while trying to fetch the destination.\nThe name of the HTTP destination that we configured in the SAP BTP cockpit is Business-Rules-Authoring-Api.\nLet's create a Java representation of this destination."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final String destinationName = "Business-Rules-Authoring-Api";\nfinal HttpDestination ruleAuthoringDestination = DestinationAccessor.getDestination(destinationName).asHttp();\n')),(0,i.kt)("p",null,"That's it, the invocation to the java client library would remain the ",(0,i.kt)("a",{parentName:"p",href:"btp-business-rules-rest-api#invoke-the-apis"},"same")," and no more changes are required."))}d.isMDXComponent=!0},58911:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294);const i=function(e){let{align:t}=e;return a.createElement("span",{className:t?"col text--right":""},a.createElement("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom"},a.createElement("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})))}}}]);