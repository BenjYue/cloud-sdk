"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,s={unversionedId:"features/odata/common/query-parameter/filter-one-to-one",id:"version-v1/features/odata/common/query-parameter/filter-one-to-one",title:"filter-one-to-one",description:"In addition to basic properties, filters can also be applied to one-to-one navigation properties.",source:"@site/docs-js_versioned_docs/version-v1/features/odata/common/query-parameter/filter-one-to-one.mdx",sourceDirName:"features/odata/common/query-parameter",slug:"/features/odata/common/query-parameter/filter-one-to-one",permalink:"/cloud-sdk/docs/js/v1/features/odata/common/query-parameter/filter-one-to-one",draft:!1,tags:[],version:"v1",frontMatter:{}},p={},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In addition to basic properties, filters can also be applied to one-to-one navigation properties.\nThe example below shows how to filter on the ",(0,o.kt)("inlineCode",{parentName:"p"},"TO_CUSTOMER"),", which is a one-to-one navigation property of the BusinessPartner entity.\nPlease note, that the ",(0,o.kt)("inlineCode",{parentName:"p"},"CUSTOMER_NAME")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CUSTOMER_ACCOUNT_GROUP")," are properties of the entity ",(0,o.kt)("inlineCode",{parentName:"p"},"Customer"),", which is the type of the one-to-one navigation property ",(0,o.kt)("inlineCode",{parentName:"p"},"TO_CUSTOMER"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n  Get all business partners that match all the following conditions:\n    - Have customer with the customer name 'John'\n    - Have customer with the customer account group '0001'\n*/\n.filter(\n  BusinessPartner.TO_CUSTOMER.filter(\n    Customer.CUSTOMER_NAME.equals('John'),\n    Customer.CUSTOMER_ACCOUNT_GROUP.equals('0001')\n  )\n)\n")),(0,o.kt)("p",null,"The generated ",(0,o.kt)("inlineCode",{parentName:"p"},"$filter")," will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"$filter=((to_Customer/CustomerName eq 'John' and to_Customer/CustomerAccountGroup  eq '0001'))\n")))}u.isMDXComponent=!0}}]);