"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3019],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},55541:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const a={},i=void 0,s={unversionedId:"release-notes/release-notes-0-to-14",id:"release-notes/release-notes-0-to-14",title:"release-notes-0-to-14",description:"4.0.0 - October 12, 2022",source:"@site/docs-java/release-notes/release-notes-0-to-14.mdx",sourceDirName:"release-notes",slug:"/release-notes/release-notes-0-to-14",permalink:"/cloud-sdk/docs/java/release-notes/release-notes-0-to-14",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/release-notes/release-notes-0-to-14.mdx",tags:[],version:"current",frontMatter:{}},c={},d=[{value:"4.0.0 - October 12, 2022",id:"400---october-12-2022",level:2},{value:"Improvements",id:"improvements",level:3},{value:"Compatibility Notes",id:"compatibility-notes",level:3},{value:"Known Issues",id:"known-issues",level:3}],l={toc:d};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"400---october-12-2022"},"4.0.0 - October 12, 2022"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:com.sap.cloud.sdk*%20AND%20v:4.0.0"},"Maven Central")),(0,o.kt)("h3",{id:"improvements"},"Improvements"),(0,o.kt)("p",null,"This is the first release of the SAP Cloud SDK version 4.\nAs this is a new major version, this release contains a lot of (under the hood) improvements, refactoring, and other changes.\nPlease refer to the ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/guides/4.0-upgrade"},"Upgrade Guide")," for details instructions on how to upgrade your SAP Cloud SDK dependencies to our new major version and for a detailed list of changes."),(0,o.kt)("h3",{id:"compatibility-notes"},"Compatibility Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We are aware of the vulnerability ",(0,o.kt)("a",{parentName:"p",href:"https://nvd.nist.gov/vuln/detail/CVE-2022-42003"},"CVE-2022-42003"),", which affects a version of ",(0,o.kt)("inlineCode",{parentName:"p"},"jackson-databind")," that is shipped as part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-bom"),".\nAfter careful investigation we found that the described exploit ",(0,o.kt)("strong",{parentName:"p"},"does not")," affect the SAP Cloud SDK.\nNevertheless, customers should be aware of this vulnerability and check their code."),(0,o.kt)("p",{parentName:"li"},"We will update the affected dependency as soon as a production ready fix is available."))),(0,o.kt)("h3",{id:"known-issues"},"Known Issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We are aware of a version conflict of the ",(0,o.kt)("inlineCode",{parentName:"p"},"com.sap.cloud.environment.servicebinding:*")," dependencies when the SAP Cloud SDK is used in combination with CAP (",(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:com.sap.cds%20AND%20a:cds-integration-cloud-sdk"},(0,o.kt)("inlineCode",{parentName:"a"},"cds-integration-cloud-sdk")),").\nThis conflict can be resolved by including following dependency in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<dependencyManagement>")," section of your project:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- Service Binding Library --\x3e\n<dependency>\n  <groupId>com.sap.cloud.environment.servicebinding</groupId>\n  <artifactId>java-modules-bom</artifactId>\n  <version>0.5.0</version>\n  <type>pom</type>\n  <scope>import</scope>\n</dependency>\n")))),(0,o.kt)("details",null,(0,o.kt)("p",null,"{' '}"),(0,o.kt)("summary",null,"Resulting ",(0,o.kt)("code",null,"pom.xml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencyManagement>\n    <dependencies>\n\n        \x3c!-- CDS SERVICES --\x3e\n        <dependency>\n            <groupId>com.sap.cds</groupId>\n            <artifactId>cds-services-bom</artifactId>\n            <version>${cds.services.version}</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n\n        \x3c!-- Cloud SDK --\x3e\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-modules-bom</artifactId>\n            <version>4.0.0</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n\n        \x3c!-- Service Binding Library --\x3e\n        <dependency>\n            <groupId>com.sap.cloud.environment.servicebinding</groupId>\n            <artifactId>java-modules-bom</artifactId>\n            <version>0.5.0</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n\n    </dependencies>\n</dependencyManagement>\n"))))}p.isMDXComponent=!0}}]);