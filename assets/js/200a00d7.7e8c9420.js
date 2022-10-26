"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7936,3019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,v=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(v,s(s({ref:t},c),{},{components:n})):a.createElement(v,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),o=n(67294),r=n(3905),s=n(55541);function i(){return o.createElement(s.default,null)}var d=n(58911);const l={id:"release-notes-sap-cloud-sdk-for-java",title:"Release Notes",sidebar_label:"Release Notes",description:"Release notes of SAP Cloud SDK for Java, stay up to date with the recent features, fixes, dependency updates and recommendedations.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},c=void 0,p={unversionedId:"release-notes-sap-cloud-sdk-for-java",id:"release-notes-sap-cloud-sdk-for-java",title:"Release Notes",description:"Release notes of SAP Cloud SDK for Java, stay up to date with the recent features, fixes, dependency updates and recommendedations.",source:"@site/docs-java/release-notes.mdx",sourceDirName:".",slug:"/release-notes-sap-cloud-sdk-for-java",permalink:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/release-notes.mdx",tags:[],version:"current",frontMatter:{id:"release-notes-sap-cloud-sdk-for-java",title:"Release Notes",sidebar_label:"Release Notes",description:"Release notes of SAP Cloud SDK for Java, stay up to date with the recent features, fixes, dependency updates and recommendedations.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJavaSidebar",previous:{title:"Release Policy",permalink:"/cloud-sdk/docs/java/release-policy"},next:{title:"Support",permalink:"/cloud-sdk/docs/java/support-java"}},u={},m=[{value:"Should I update?",id:"should-i-update",level:2},{value:"The SAP Cloud SDK v3 for Java is in Maintenance Mode",id:"the-sap-cloud-sdk-v3-for-java-is-in-maintenance-mode",level:3}],v={toc:m};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"logo logo-java"}," "),(0,r.kt)(d.Z,{mdxType:"MvnBadge"}),(0,r.kt)("h2",{id:"should-i-update"},"Should I update?"),(0,r.kt)("p",null,"We highly recommend regularly updating to the latest SAP Cloud SDK version.\nIt will help you:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure access to the latest SAP Cloud SDK features"),(0,r.kt)("li",{parentName:"ul"},"Keep up with the latest changes in SAP Cloud Platform"),(0,r.kt)("li",{parentName:"ul"},"Update client libraries giving access to latest SAP services on SAP Cloud Platform and SAP S/4HANA"),(0,r.kt)("li",{parentName:"ul"},"Protect yourself from bugs and breaking changes in the future")),(0,r.kt)("h3",{id:"the-sap-cloud-sdk-v3-for-java-is-in-maintenance-mode"},"The SAP Cloud SDK v3 for Java is in Maintenance Mode"),(0,r.kt)("admonition",{title:"Update to the SAP Cloud SDK v4",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Version 3.x of the SAP Cloud SDK for Java is now in maintenance and receives security fixes only.\nTo continue using the latest features outlined in the release notes below, please ",(0,r.kt)("a",{parentName:"p",href:"/docs/java/guides/4.0-upgrade"},"update to ",(0,r.kt)("strong",{parentName:"a"},"the SAP Cloud SDK v4")),".")),(0,r.kt)(i,{mdxType:"ReleaseNotes0To14"}))}f.isMDXComponent=!0},55541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={},s=void 0,i={unversionedId:"release-notes/release-notes-0-to-14",id:"release-notes/release-notes-0-to-14",title:"release-notes-0-to-14",description:"4.0.0 - October 12, 2022",source:"@site/docs-java/release-notes/release-notes-0-to-14.mdx",sourceDirName:"release-notes",slug:"/release-notes/release-notes-0-to-14",permalink:"/cloud-sdk/docs/java/release-notes/release-notes-0-to-14",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/release-notes/release-notes-0-to-14.mdx",tags:[],version:"current",frontMatter:{}},d={},l=[{value:"4.0.0 - October 12, 2022",id:"400---october-12-2022",level:2},{value:"Improvements",id:"improvements",level:3},{value:"Compatibility Notes",id:"compatibility-notes",level:3},{value:"Known Issues",id:"known-issues",level:3}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"400---october-12-2022"},"4.0.0 - October 12, 2022"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:com.sap.cloud.sdk*%20AND%20v:4.0.0"},"Maven Central")),(0,o.kt)("h3",{id:"improvements"},"Improvements"),(0,o.kt)("p",null,"This is the first release of the SAP Cloud SDK version 4.\nAs this is a new major version, this release contains a lot of (under the hood) improvements, refactoring, and other changes.\nPlease refer to the ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/guides/4.0-upgrade"},"Upgrade Guide")," for details instructions on how to upgrade your SAP Cloud SDK dependencies to our new major version and for a detailed list of changes."),(0,o.kt)("h3",{id:"compatibility-notes"},"Compatibility Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We are aware of the vulnerability ",(0,o.kt)("a",{parentName:"p",href:"https://nvd.nist.gov/vuln/detail/CVE-2022-42003"},"CVE-2022-42003"),", which affects a version of ",(0,o.kt)("inlineCode",{parentName:"p"},"jackson-databind")," that is shipped as part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-bom"),".\nAfter careful investigation we found that the described exploit ",(0,o.kt)("strong",{parentName:"p"},"does not")," affect the SAP Cloud SDK.\nNevertheless, customers should be aware of this vulnerability and check their code."),(0,o.kt)("p",{parentName:"li"},"We will update the affected dependency as soon as a production ready fix is available."))),(0,o.kt)("h3",{id:"known-issues"},"Known Issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We are aware of a version conflict of the ",(0,o.kt)("inlineCode",{parentName:"p"},"com.sap.cloud.environment.servicebinding:*")," dependencies when the SAP Cloud SDK is used in combination with CAP (",(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:com.sap.cds%20AND%20a:cds-integration-cloud-sdk"},(0,o.kt)("inlineCode",{parentName:"a"},"cds-integration-cloud-sdk")),").\nThis conflict can be resolved by including following dependency in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<dependencyManagement>")," section of your project:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- Service Binding Library --\x3e\n<dependency>\n  <groupId>com.sap.cloud.environment.servicebinding</groupId>\n  <artifactId>java-modules-bom</artifactId>\n  <version>0.5.0</version>\n  <type>pom</type>\n  <scope>import</scope>\n</dependency>\n")))),(0,o.kt)("details",null,(0,o.kt)("p",null,"{' '}"),(0,o.kt)("summary",null,"Resulting ",(0,o.kt)("code",null,"pom.xml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencyManagement>\n    <dependencies>\n\n        \x3c!-- CDS SERVICES --\x3e\n        <dependency>\n            <groupId>com.sap.cds</groupId>\n            <artifactId>cds-services-bom</artifactId>\n            <version>${cds.services.version}</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n\n        \x3c!-- Cloud SDK --\x3e\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-modules-bom</artifactId>\n            <version>4.0.0</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n\n        \x3c!-- Service Binding Library --\x3e\n        <dependency>\n            <groupId>com.sap.cloud.environment.servicebinding</groupId>\n            <artifactId>java-modules-bom</artifactId>\n            <version>0.5.0</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n\n    </dependencies>\n</dependencyManagement>\n"))))}p.isMDXComponent=!0},58911:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294);const o=function(e){let{align:t}=e;return a.createElement("span",{className:t?"col text--right":""},a.createElement("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom"},a.createElement("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})))}}}]);