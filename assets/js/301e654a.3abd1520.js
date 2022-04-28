"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9775],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65137:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return f}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=n.p+"assets/images/imports-in-v1-d998d7d6ee717529b1c0e6713066b542.png",l=n.p+"assets/images/imports-in-v2-31b49494001a1534bb902def22e94b91.png",s=n.p+"assets/images/ecma2019-8447f2de225b029f3e131a9a5a7db892.png",p=n.p+"assets/images/es5-27a4c7929b0768743fe63c49e0447be1.png",c=n.p+"assets/images/temporal-da595c2261bb60074866c9d0d4aa7b44.png",d=["components"],u={},m="Announcing Version 2 Beta",g={unversionedId:"js/announcing-version-2-beta",id:"js/announcing-version-2-beta",title:"Announcing Version 2 Beta",description:"What Is Included in the Beta?",source:"@site/docs/js/announcing-version-2-beta.mdx",sourceDirName:"js",slug:"/js/announcing-version-2-beta",permalink:"/cloud-sdk/docs/js/announcing-version-2-beta",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/announcing-version-2-beta.mdx",tags:[],version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1651150096,formattedLastUpdatedAt:"4/28/2022",frontMatter:{},sidebar:"someSidebar",previous:{title:"Announcing Version 2.x",permalink:"/cloud-sdk/docs/js/announcing-version-2"},next:{title:"SAP Cloud SDK & CAP",permalink:"/cloud-sdk/docs/js/video/demo-of-cloud-sdk-for-javascript-with-calm-and-cap"}},k={},f=[{value:"What Is Included in the Beta?",id:"what-is-included-in-the-beta",level:2},{value:"Split Packages and Export Only the Public Interface",id:"split-packages-and-export-only-the-public-interface",level:3},{value:"Increase Compilation Target to ECMAScript 2019",id:"increase-compilation-target-to-ecmascript-2019",level:3},{value:"Remove Deprecated Functionality",id:"remove-deprecated-functionality",level:3},{value:"Remove Generator Options",id:"remove-generator-options",level:3},{value:"Introduce Customizable (De-)Serialization",id:"introduce-customizable-de-serialization",level:3},{value:"How Can I Use It?",id:"how-can-i-use-it",level:2}],h={toc:f};function v(e){var t=e.components,n=(0,i.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"announcing-version-2-beta"},"Announcing Version 2 Beta"),(0,o.kt)("h2",{id:"what-is-included-in-the-beta"},"What Is Included in the Beta?"),(0,o.kt)("p",null,"We announced four noteworthy changes for our upcoming version increase:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Split packages and export only the public interface"),(0,o.kt)("li",{parentName:"ul"},"Increase compilation target to ECMAScript 2019"),(0,o.kt)("li",{parentName:"ul"},"Remove deprecated functionality"),(0,o.kt)("li",{parentName:"ul"},"Remove generator options"),(0,o.kt)("li",{parentName:"ul"},"Introduce customizable (de-)serialization")),(0,o.kt)("p",null,"The beta already provides many improvements, and we would love for you to try them.\nLet's take a look what was achieved so far."),(0,o.kt)("h3",{id:"split-packages-and-export-only-the-public-interface"},"Split Packages and Export Only the Public Interface"),(0,o.kt)("p",null,"There is no more ",(0,o.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/core")," package anymore.\nInstead, there are the following packages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/connectivity")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"getDestination()"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/http-client")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"executeHttpRequest()"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/openapi"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/odata-v2")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/odata-v4")," (e.g. filter functions, request builder)")),(0,o.kt)("p",null,"Internal functions are not exported in our new packages to make it easier to find the right function for your use case.\nWe expose internals via a special import path, but offer no stability guarantee for this internal interface."),(0,o.kt)("p",null,"This means you will see this:"),(0,o.kt)("img",{style:{maxWidth:"75%",height:"auto"},src:l,alt:"autocomplete for import from core"}),(0,o.kt)("p",null,"rather than this:"),(0,o.kt)("img",{style:{maxWidth:"75%",height:"auto"},src:r,alt:"autocomplete for import from odata-v2"}),(0,o.kt)("h3",{id:"increase-compilation-target-to-ecmascript-2019"},"Increase Compilation Target to ECMAScript 2019"),(0,o.kt)("p",null,"This will only affect you if you run your application in a legacy environment.\nIt makes the compiled JavaScript code a little cleaner, as in this example."),(0,o.kt)("p",null,"Old:"),(0,o.kt)("img",{style:{maxWidth:"75%",height:"auto"},src:p,alt:"file-generator in ES5"}),(0,o.kt)("p",null,"New:"),(0,o.kt)("img",{style:{maxWidth:"75%",height:"auto"},src:s,alt:"file-generator in ECMAScript 2019"}),(0,o.kt)("p",null,"The differences are minor, but it saves five lines of code in this file alone."),(0,o.kt)("h3",{id:"remove-deprecated-functionality"},"Remove Deprecated Functionality"),(0,o.kt)("p",null,"We hope you replaced deprecated functionality already.\nIf not, our upgrade guide lists all removed methods and their replacement.\nIn total, we removed a bit more than 100 deprecated methods."),(0,o.kt)("h3",{id:"remove-generator-options"},"Remove Generator Options"),(0,o.kt)("p",null,"The following generator options are removed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"generateTypedocJson")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"aggregatorDirectoryName")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"aggregatorNpmPackageName"))),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"generateTypedocJson")," option, you can add ",(0,o.kt)("inlineCode",{parentName:"p"},"typedoc")," or other documentation lib as a dependency to your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," by your own.\nThe options ",(0,o.kt)("inlineCode",{parentName:"p"},"aggregatorDirectoryName")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"aggregatorNpmPackageName")," are not useful from the user perspective."),(0,o.kt)("h3",{id:"introduce-customizable-de-serialization"},"Introduce Customizable (De-)Serialization"),(0,o.kt)("p",null,"We added options to dynamically change the types in your entities.\nYou can now define custom (de-)serializers - functions to convert data to and from the types you need.\nHere is an example for (de-)serializers to convert ",(0,o.kt)("inlineCode",{parentName:"p"},"Edm.DateTime"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Edm.DateTimeOffset")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Edm.Time")," to/from Temporal:"),(0,o.kt)("img",{style:{maxWidth:"75%",height:"auto"},src:c,alt:"example temporal serializer"}),(0,o.kt)("p",null,"Intrigued?\nYou can get the Temporal-based (de-)serializers via npm (",(0,o.kt)("inlineCode",{parentName:"p"},"npm install @sap-cloud-sdk/temporal-de-serializers@beta"),")."),(0,o.kt)("h2",{id:"how-can-i-use-it"},"How Can I Use It?"),(0,o.kt)("p",null,"We publish the beta version on ",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),".\nYou can install it by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"@beta")," after the package name (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install @sap-cloud-sdk/generator@beta"),")."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you use an OData or OpenAPI client, make sure it was generated with the same version as your other SAP Cloud SDK dependencies.\nWe do not provide pregenerated clients for beta versions."))),(0,o.kt)("p",null,"Check the ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/guides/upgrade-to-version-2"},"upgrade guide")," for detailed instructions how to upgrade."))}v.isMDXComponent=!0}}]);