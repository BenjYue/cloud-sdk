"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9038],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(74866),o=a(85162);const l={id:"generate-rest-client",title:"Generate a Typed OpenAPI Client",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Generate a Typed OpenAPI Client",description:"This article describes how to leverage the OpenAPI client generator to obtain Java classes from a service definition. These classes can then be used to build type-safe OpenAPI requests.",keywords:["sap","cloud","sdk","rest","java","VDM","generate"]},p=void 0,s={unversionedId:"features/rest/generate-rest-client",id:"version-v5/features/rest/generate-rest-client",title:"Generate a Typed OpenAPI Client",description:"This article describes how to leverage the OpenAPI client generator to obtain Java classes from a service definition. These classes can then be used to build type-safe OpenAPI requests.",source:"@site/docs-java_versioned_docs/version-v5/features/rest/generate-rest-client.mdx",sourceDirName:"features/rest",slug:"/features/rest/generate-rest-client",permalink:"/cloud-sdk/docs/java/v5/features/rest/generate-rest-client",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java_versioned_docs/version-v5/features/rest/generate-rest-client.mdx",tags:[],version:"v5",frontMatter:{id:"generate-rest-client",title:"Generate a Typed OpenAPI Client",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Generate a Typed OpenAPI Client",description:"This article describes how to leverage the OpenAPI client generator to obtain Java classes from a service definition. These classes can then be used to build type-safe OpenAPI requests.",keywords:["sap","cloud","sdk","rest","java","VDM","generate"]},sidebar:"docsJavaSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/java/v5/features/rest/overview"},next:{title:"SAP Workflow service",permalink:"/cloud-sdk/docs/java/v5/features/rest/clients/scp-workflow-rest-api"}},d={},c=[{value:"Customize Java Class and Method Names with OpenAPI Vendor Extensions",id:"customize-java-class-and-method-names-with-openapi-vendor-extensions",level:2},{value:"Java Class Name",id:"java-class-name",level:3},{value:"Java Method Name",id:"java-method-name",level:3},{value:"Using the OpenAPI Generator Maven Plugin",id:"using-the-openapi-generator-maven-plugin",level:2},{value:"Generating Java Client Library for Multiple OpenAPI Specifications",id:"generating-java-client-library-for-multiple-openapi-specifications",level:3},{value:"Using the OpenAPI Generator CLI",id:"using-the-openapi-generator-cli",level:2},{value:"Available Parameters",id:"available-parameters",level:2},{value:"Solving Compilation Issues After Generation",id:"solving-compilation-issues-after-generation",level:2}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The SAP Cloud SDK offers an OpenAPI client generator as a Maven plugin and as a command-line tool.\nEither can be used to generate a client library for a REST API based on its OpenAPI specification.\nThe OpenAPI generator is a wrapper around the public open-source ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator"},"OpenAPI Generator")," where we have adjusted the ",(0,r.kt)("inlineCode",{parentName:"p"},"mustache")," templates to integrate the generated client library with the SAP Cloud SDK core."),(0,r.kt)("admonition",{title:"Localisation",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The generator is designed to generate source code in english.\nYou may also generate a client based on other languages in the OpenAPI specification.\nHowever, languages that use non-latin characters, specifically languages that read from right to left or that don't have capitalisation, may not be supported.")),(0,r.kt)("p",null,"The generated Java classes need the following dependency to be present in your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>openapi-core</artifactId>\n</dependency>\n")),(0,r.kt)("p",null,"To use the generated client library, either the SAP Cloud SDK BOM should be part of your project's ",(0,r.kt)("inlineCode",{parentName:"p"},"<dependencyManagement>")," section, or the version for the ",(0,r.kt)("inlineCode",{parentName:"p"},"openapi-core")," artifact must be mentioned explicitly here."),(0,r.kt)("h2",{id:"customize-java-class-and-method-names-with-openapi-vendor-extensions"},"Customize Java Class and Method Names with OpenAPI Vendor Extensions"),(0,r.kt)("p",null,"The OpenAPI generator uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," field to determine the Java service class name and the ",(0,r.kt)("inlineCode",{parentName:"p"},"operationId")," to determine the Java method for each service operation.\nYou can influence the service class name and the method names by adding extension fields to the OpenAPI specification.\nThereby you can leave the ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"operationId")," fields untouched if they need to stay stable."),(0,r.kt)("h3",{id:"java-class-name"},"Java Class Name"),(0,r.kt)("p",null,"The Java class name can be influenced with the extension field ",(0,r.kt)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-api-name"),".\nThe OpenAPI generator takes the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-api-name")," and adds an ",(0,r.kt)("inlineCode",{parentName:"p"},"Api")," suffix (if not already present) to determine the class name."),(0,r.kt)("p",null,"In the following example the custom value ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomOperations")," takes precedence over the ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," value ",(0,r.kt)("inlineCode",{parentName:"p"},"Operations")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"/operation/path:\n  get:\n    summary: My operation\n    operationId: myOperation\n    x-sap-cloud-sdk-api-name: CustomOperations\n    tags:\n      - Operations\n")),(0,r.kt)("p",null,"The Java class for this service operation will be named ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomOperationsApi"),"."),(0,r.kt)("p",null,"You can use the extension field ",(0,r.kt)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-api-name")," on an operation, on a path or on the root level of the OpenAPI specification.\nAll subordinated objects inherit its value automatically.\nFor instance, if you assign the field ",(0,r.kt)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-api-name")," to one path, all operations under that path inherit this field automatically."),(0,r.kt)("h3",{id:"java-method-name"},"Java Method Name"),(0,r.kt)("p",null,"The Java method name can be overwritten with the extension field ",(0,r.kt)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-operation-name"),"."),(0,r.kt)("p",null,"In the following example the custom value ",(0,r.kt)("inlineCode",{parentName:"p"},"performMyOperation")," takes precedence over the ",(0,r.kt)("inlineCode",{parentName:"p"},"operationId")," value ",(0,r.kt)("inlineCode",{parentName:"p"},"myOperation"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"/operation/path:\n  get:\n    summary: My Operation\n    x-sap-cloud-sdk-operation-name: performMyOperation\n    operationId: myOperation\n")),(0,r.kt)("p",null,"The Java method for this service operation will be named ",(0,r.kt)("inlineCode",{parentName:"p"},"peformMyOperation"),"."),(0,r.kt)("admonition",{title:"Field Order",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The order of fields in the OpenAPI specification does not matter.\nOnly the right nesting is necessary, that is, the two fields ",(0,r.kt)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-operation-name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"x-sap-cloud-sdk-api-name")," should be assigned to an operation (get, post, etc).")),(0,r.kt)("h2",{id:"using-the-openapi-generator-maven-plugin"},"Using the OpenAPI Generator Maven Plugin"),(0,r.kt)("p",null,"To use the Maven plugin following XML snippet should be added to the POM file of your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>openapi-generator-maven-plugin</artifactId>\n    \x3c!-- Maintain Maven property sap-cloud-sdk.version in your POM with the latest SAP Cloud SDK version --\x3e\n    <version>${sap-cloud-sdk.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate</goal>\n            </goals>\n            <phase>generate-sources</phase>\n        </execution>\n    </executions>\n    <configuration>\n        <inputSpec>${project.basedir}/sample.yaml</inputSpec>\n        <outputDirectory>${project.basedir}/openapi</outputDirectory>\n        <apiPackage>com.mycompany.openapi.sample.api</apiPackage>\n        <modelPackage>com.mycompany.openapi.sample.model</modelPackage>\n        <apiMaturity>released</apiMaturity>\n        \x3c!-- (Optional) You can add a custom copyright header:\n        <copyrightHeader>Copyright (c) this year, my company</copyrightHeader>\n\n        Or use the SAP copyright header:\n        <sapCopyrightHeader>true</sapCopyrightHeader>\n        --\x3e\n    </configuration>\n</plugin>\n")),(0,r.kt)("p",null,"Maven requires that we specify the version for plugins explicitly.\nIn above code snippet you can see the ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," tag pointing to the Maven property ",(0,r.kt)("inlineCode",{parentName:"p"},"sap-cloud-sdk.version"),".\nMaintain such a property in your POM and ensure that you always use the latest SAP Cloud SDK version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<properties>\n    \x3c!-- Use latest version always as per https://sap.github.io/cloud-sdk/docs/java/release-notes --\x3e\n    <sap-cloud-sdk.version>4.XX.X</sap-cloud-sdk.version>\n</properties>\n")),(0,r.kt)("p",null,"Maven will run the generator within the ",(0,r.kt)("inlineCode",{parentName:"p"},"generate-sources")," phase which is executed before ",(0,r.kt)("inlineCode",{parentName:"p"},"compile"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The phase ",(0,r.kt)("inlineCode",{parentName:"p"},"generate-sources")," is just a recommendation from our side, it can be changed per your project's requirement.\nRefer to the ",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#Lifecycle_Reference"},"Maven build lifecycle guide")," for a complete explanation.")),(0,r.kt)("p",null,"Please note that the version of the above plugin must be specified at least once in your project, preferably in the root POM.\nAlso, the version of the plugin should be the same as of the SAP Cloud SDK.\nWe recommend using a Maven property for defining the version of both the Maven plugin and the SAP Cloud SDK BOM."),(0,r.kt)("h3",{id:"generating-java-client-library-for-multiple-openapi-specifications"},"Generating Java Client Library for Multiple OpenAPI Specifications"),(0,r.kt)("p",null,"This Maven plugin processes one OpenAPI specification per execution.\nIn case you want to generate sources for multiple OpenAPI specifications then you need to create multiple executions of the plugin each corresponding to a particular OpenAPI specification.\nAs an example refer to the plugin XML below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>openapi-generator-maven-plugin</artifactId>\n    <executions>\n        <execution>\n            <id>generate-sample1-id</id>\n            <goals>\n                <goal>generate</goal>\n            </goals>\n            <configuration>\n                <inputSpec>${project.basedir}/sample1.yaml</inputSpec>\n            </configuration>\n        </execution>\n        <execution>\n            <id>generate-sample2-id</id>\n            <goals>\n                <goal>generate</goal>\n            </goals>\n            <configuration>\n                <inputSpec>${project.basedir}/sample2.yaml</inputSpec>\n            </configuration>\n        </execution>\n    </executions>\n    <configuration>\n        <apiPackage>com.mycompany.openapi.sample.api</apiPackage>\n        <modelPackage>com.mycompany.openapi.sample.api.model</modelPackage>\n        <outputDirectory>${project.basedir}/openapi</outputDirectory>\n        <apiMaturity>released</apiMaturity>\n    </configuration>\n</plugin>\n")),(0,r.kt)("h2",{id:"using-the-openapi-generator-cli"},"Using the OpenAPI Generator CLI"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the latest command-line interface (CLI) of the generator from ",(0,r.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/com.sap.cloud.sdk.datamodel/openapi-generator-cli"},"Maven Central"),".\nRename it to ",(0,r.kt)("inlineCode",{parentName:"p"},"openapi-generator-cli.jar")," and put it in a directory of your choice.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"java -jar openapi-generator-cli.jar -i /path/to/input/specification -o /path/to/output/folder -a name.of.api.package -m name.of.model.package"),".\nA full list of parameters is ",(0,r.kt)("a",{parentName:"p",href:"#available-parameters"},"available here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Put the generated Java source files from the output folder into your project that is using the SAP Cloud SDK so that they are picked up by Java.\nFor example, move them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"application/src/main/java")," folder."))),(0,r.kt)("h2",{id:"available-parameters"},"Available Parameters"),(0,r.kt)("admonition",{title:"Passing Additional Properties to the Underlying OpenAPI Generator",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can pass arbitrary additional configuration properties to the underlying ",(0,r.kt)("a",{parentName:"p",href:"https://openapi-generator.tech/docs/generators/java/"},"open source OpenAPI generator")," via ",(0,r.kt)("inlineCode",{parentName:"p"},"<additionalProperties>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--additional-properties"),".")),(0,r.kt)("p",null,"The complete list of available parameters with their description is as follows:"),(0,r.kt)(i.Z,{defaultValue:"maven",values:[{label:"Maven Plugin",value:"maven"},{label:"CLI",value:"cli"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"maven",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<inputSpec>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Location of the OpenAPI specification file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<outputDirectory>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Output directory for generated sources")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<apiPackage>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Package name for the generated API classes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<modelPackage>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Package name for the generated Model classes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<deleteOutputDirectory>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines whether to delete the output directory before running the generator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<apiMaturity>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"released")),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines the maturity of the OpenAPI for which Java classes are generated. Possible values are ",(0,r.kt)("inlineCode",{parentName:"td"},"released")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"beta"),". Please note if you define it as ",(0,r.kt)("inlineCode",{parentName:"td"},"beta")," then ",(0,r.kt)("a",{parentName:"td",href:"https://www.javadoc.io/doc/com.google.guava/guava/latest/com/google/common/annotations/Beta.html"},"@Beta annotations")," are added to the generated classes which indicate that they are in an experimental state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<compileScope>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"NONE")),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds the generated sources to the compilation or test phase. Respective values are ",(0,r.kt)("inlineCode",{parentName:"td"},"COMPILE")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"TEST_COMPILE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<copyrightHeader>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Copyright header to be added at the top of generated files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<verbose>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Run the generator with verbose output")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<sapCopyrightHeader>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add the SAP copyright header (overrides ",(0,r.kt)("inlineCode",{parentName:"td"},"copyrightHeader"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<additionalProperties>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines a map of key-value pairs that will be passed to the Java generator. E.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"<param>value</param>")))))),(0,r.kt)(o.Z,{value:"cli",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Alias"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--input-spec")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-i")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Location of the OpenAPI specification file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--output-dir")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-o")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Output directory for generated sources")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--api-package")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-a")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Package name for the generated API classes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--model-package")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-m")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Package name for the generated Model classes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--delete-output-dir")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-d")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines whether to delete the output directory before running the generator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--api-maturity")),(0,r.kt)("td",{parentName:"tr",align:"center"},"none"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"released")),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines the maturity of the OpenAPI for which Java classes are generated. Possible values are ",(0,r.kt)("inlineCode",{parentName:"td"},"released")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"beta"),". Please note if you define it as ",(0,r.kt)("inlineCode",{parentName:"td"},"beta")," then ",(0,r.kt)("a",{parentName:"td",href:"https://www.javadoc.io/doc/com.google.guava/guava/latest/com/google/common/annotations/Beta.html"},(0,r.kt)("inlineCode",{parentName:"a"},"@Beta")," annotations")," are added to the generated classes which indicate that they are in an experimental state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--user-copyright")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-c")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Copyright header to be added at the top of generated files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-v")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Run the generator with verbose output")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--use-sap-copyright")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-u")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add the SAP copyright header (overrides ",(0,r.kt)("inlineCode",{parentName:"td"},"copyrightHeader"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--additional-properties")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"-p")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines a list of key-value pairs that will be passed to the Java generator in the format: ",(0,r.kt)("inlineCode",{parentName:"td"},"key1=val1,key2=val2"),".")))))),(0,r.kt)("h2",{id:"solving-compilation-issues-after-generation"},"Solving Compilation Issues After Generation"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"From version ",(0,r.kt)("inlineCode",{parentName:"p"},"3.58")," of the SAP Cloud SDK, the OpenAPI generator has been enhanced to fail if the input specification contains keywords ",(0,r.kt)("inlineCode",{parentName:"p"},"anyOf")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"oneOf")," in certain positions.")),(0,r.kt)("p",null,"In certain cases although the generation of the client succeeds the subsequent compilation fails due to multiple reasons."),(0,r.kt)("p",null,"If you observe that you notice ",(0,r.kt)("inlineCode",{parentName:"p"},"Cannot find Symbol for AnyOf{ClassName} Classes")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Cannot find symbol OneOf{ClassName} Classes")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Cannot find symbol UNKNOWN_BASE_TYPE")," during compilation, check if your specification contains keywords ",(0,r.kt)("inlineCode",{parentName:"p"},"anyOf")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"oneOf"),"."),(0,r.kt)("p",null,"The public open-source ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator"},"OpenAPI Generator")," that is used by the SAP Cloud SDK under the hood generates non-compilable code if ",(0,r.kt)("inlineCode",{parentName:"p"},"anyOf")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"oneOf")," are present in certain parts of the input specification."),(0,r.kt)("p",null,"Compilation fails if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These keywords exist under the ",(0,r.kt)("inlineCode",{parentName:"li"},"paths")," part, under any operation while defining either the ",(0,r.kt)("inlineCode",{parentName:"li"},"requestbody")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"responses"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Keywords under paths"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"paths:\n /APIPath:\n        put:\n          summary: ...\n          requestBody:\n            description: ...\n            content:\n              application/json:\n                schema:\n                  oneOf:\n                    - $ref: '#/components/schemas/SomeSchema'\n                    - $ref: '#/components/schemas/SomeOtherSchema'\n          responses:\n            '200':\n              description: ...\n              content:\n                application/json:\n                  schema:\n                    oneOf:\n                      - $ref: '#/components/schemas/SomeSchema'\n                      - type: array\n                        items:\n                          $ref: '#/components/schemas/SomeOtherSchema'\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These keywords exist under any of the ",(0,r.kt)("inlineCode",{parentName:"li"},"schemas")," either under any property in ",(0,r.kt)("inlineCode",{parentName:"li"},"properties")," or under ",(0,r.kt)("inlineCode",{parentName:"li"},"additionalProperties"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Keywords under properties of schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"components:\n  schemas:\n    SampleSchema:\n      title: SampleSchema\n      description: ...\n      type: object\n      properties:\n        embeddedData:\n          $ref: '#/components/schemas/EmbeddedData'\n        questions:\n          type: array\n          title: questions\n          items:\n            title: Question\n            oneOf:\n              - $ref: '#/components/schemas/mc'\n              - $ref: '#/components/schemas/te'\n              - $ref: '#/components/schemas/db'\n            discriminator:\n              propertyName: type\n      AnotherSampleSchema:\n        description: ...\n        type: ...\n        anotherProperty:\n            description: ...\n            oneOf:\n              - type: string\n                enum:\n                  - ENDOFBLOCK\n                  - ENDOFSURVEY\n              - $ref: '#/components/schemas/SurveyID'\n        additionalProperties:\n          oneOf:\n            - $ref: '#/components/schemas/SomeSchema'\n            - $ref: '#/components/schemas/SomeOtherSchema'\n"))),(0,r.kt)("p",null,"To make the compilation succeed, please remove these keywords from your specification and generate the client again."),(0,r.kt)("p",null,"Please note that while removing these keywords from a property, you must also supply a meaningful replacement.\nSometimes you may also choose to drop the property altogether for e.g, in the case of ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalProperties")),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/data-models/oneof-anyof-allof-not/"},"Swagger documentation")," to understand more about the usage of these keywords and to derive their replacement."))}u.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(34334);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(87462),r=a(67294),i=a(34334),o=a(12466),l=a(76775),p=a(91980),s=a(67392),d=a(50012);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[p,s]=h({queryString:a,groupId:n}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),k=(()=>{const e=p??c;return u({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),g(e)}),[s,g,i]),tabValues:i}}var k=a(72389);const f="tabList__CuJ",N="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:l,selectValue:p,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=s[a].value;n!==l&&(c(t),p(n))},u=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:u,onClick:m},o,{className:(0,i.Z)("tabs__item",N,null==o?void 0:o.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function C(e){const t=(0,k.Z)();return r.createElement(b,(0,n.Z)({key:String(t)},e))}}}]);