"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6154],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(a),m=o,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},59646:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),l=a(44996),r=["components"],s={id:"getting-started",title:"Getting Started With Documentation",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting Started",description:"This is a getting started guide for anyone willing to contribute to the SAP Cloud SDK documentation.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},d=void 0,c={unversionedId:"dzen/getting-started",id:"dzen/getting-started",title:"Getting Started With Documentation",description:"This is a getting started guide for anyone willing to contribute to the SAP Cloud SDK documentation.",source:"@site/docs/dzen/getting-started.mdx",sourceDirName:"dzen",slug:"/dzen/getting-started",permalink:"/cloud-sdk/docs/dzen/getting-started",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/dzen/getting-started.mdx",tags:[],version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1651150096,formattedLastUpdatedAt:"4/28/2022",frontMatter:{id:"getting-started",title:"Getting Started With Documentation",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting Started",description:"This is a getting started guide for anyone willing to contribute to the SAP Cloud SDK documentation.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]}},u={},p=[{value:"What You&#39;ll Need?",id:"what-youll-need",level:2},{value:"Follow These Steps",id:"follow-these-steps",level:3},{value:"Running Documentation Locally",id:"running-documentation-locally",level:2},{value:"Documenting",id:"documenting",level:2},{value:"Getting Hands Dirty",id:"getting-hands-dirty",level:3},{value:"Go Live!",id:"go-live",level:3},{value:"Review",id:"review",level:4},{value:"Publish",id:"publish",level:4},{value:"Conventions",id:"conventions",level:2},{value:"Linters",id:"linters",level:2},{value:"Vale",id:"vale",level:3},{value:"Prettier",id:"prettier",level:3},{value:"Advanced Topics",id:"advanced-topics",level:2},{value:"Where to Get Help?",id:"where-to-get-help",level:2},{value:"What to Do Next?",id:"what-to-do-next",level:2},{value:"Useful Resources",id:"useful-resources",level:2}],m={toc:p};function k(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-youll-need"},"What You'll Need?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A great attitude and a bit of inspiration")),(0,i.kt)("h3",{id:"follow-these-steps"},"Follow These Steps"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("strong",{parentName:"li"},"Be The Best You")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Install ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Install ",(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"Git")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Clone ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-sdk/"},"Documentation repository"),"."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Open it with you favorite Markdown editor"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Proceed to the next step")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Use Online GitHub editor if you can't clone things locally")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("img",{alt:"",src:(0,l.Z)("img/edit-article.png")}))),(0,i.kt)("h2",{id:"running-documentation-locally"},"Running Documentation Locally"),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"Node.js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," if necessary.\nYou can use the latest LTS release."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ node -v\nv12.16.1\n$ npm -v\n6.14.4\n")),(0,i.kt)("p",null,"Clone the repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:SAP/cloud-sdk.git\ncd cloud-sdk\ngit checkout documentation\n")),(0,i.kt)("p",null,"Run documentation locally."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm start\n")),(0,i.kt)("p",null,"You should see the following output in your console and documentation should automatically open in your browser."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> sap-cloud-sdk-documentation@0.1.0 start /home/USERNAME/dev/documentation\n> docusaurus start\n\nStarting the development server...\n\n\u2714 Client\n  Compiled successfully in 3.13s\n\n\u2139 \uff62wds\uff63: Project is running at http://localhost:3000/\n\u2139 \uff62wds\uff63: webpack output is served from /cloud-sdk/\n\u2139 \uff62wds\uff63: Content not from webpack is served from /home/USERNAME/dev/documentation\n\u2139 \uff62wds\uff63: 404s will fallback to /index.html\n\n")),(0,i.kt)("p",null,"A browser tab with the starting page of the documentation portal should open automatically.\nTry navigating to ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/")," as a fallback option."),(0,i.kt)("h2",{id:"documenting"},"Documenting"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Most of the people using the word ",(0,i.kt)("inlineCode",{parentName:"h5"},"creative")," forget about the ",(0,i.kt)("inlineCode",{parentName:"h5"},"create")," side of it.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Creativity is the ability to generate innovative ideas and manifest them from thought into reality.\nThe process involves original thinking and then producing."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Creative")," without producing is just ",(0,i.kt)("strong",{parentName:"p"},"Imaginative")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Rule of thumb:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Less than 5 minutes? - ",(0,i.kt)("strong",{parentName:"li"},"just do it, no need for a backlog item")),(0,i.kt)("li",{parentName:"ul"},"15 minutes - 2 hours - ",(0,i.kt)("strong",{parentName:"li"},"depending on your and your team's preferences add it to the backlog or to you personal to-do list")),(0,i.kt)("li",{parentName:"ul"},">"," 2 hours - ",(0,i.kt)("strong",{parentName:"li"},"Add an item to the backlog and track it together with the team"))))),(0,i.kt)("h3",{id:"getting-hands-dirty"},"Getting Hands Dirty"),(0,i.kt)("p",null,"Create a branch for the thing you document."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b java-client-generator-how-to\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"All the documentation resides in the ",(0,i.kt)("inlineCode",{parentName:"li"},"docs")," folder."),(0,i.kt)("li",{parentName:"ol"},"Let's start with creating a file containing our ",(0,i.kt)("em",{parentName:"li"},"How To"),".\nIn my case it will be ",(0,i.kt)("inlineCode",{parentName:"li"},"java/how-to/generate-client.md"),"."),(0,i.kt)("li",{parentName:"ol"},"Use content from this internal ",(0,i.kt)("a",{parentName:"li",href:"https://github.wdf.sap.corp/MA/sdk/edit/develop/docs/how-to/use-odata-v4.mdx"},"generator how-to"),"."),(0,i.kt)("li",{parentName:"ol"},"Add the meta-header and update the fields.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"---\nid: generate-odata-client-with-cloud-sdk-for-java-how-to\ntitle: Generate OData Client\nhide_title: false\nhide_table_of_contents: false\nsidebar_label: Generate OData Client\ndescription: You'll learn how to convert your service definition into a Java project containing type-safe OData V4 client to consume it\nkeywords:\n  - sap\n  - cloud\n  - sdk\n  - cloud native\n  - cloud sdk\n  - sap cloud sdk\n---\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Try it locally to enable preview")),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Open ",(0,i.kt)("inlineCode",{parentName:"li"},"sidebar.js")," from project root"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Find this code snippet in ",(0,i.kt)("inlineCode",{parentName:"li"},"Java")," section")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"        type: 'category',\n        label: 'How To',\n        items: [...]\n")),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add your file to the ",(0,i.kt)("inlineCode",{parentName:"li"},"How To")," category")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"        type: 'category',\n        label: 'How To',\n        items: [\n          'java/how-to/generate-odata-client-with-cloud-sdk-for-java-how-to',\n          'java/how-to/sap-cloud-sdk-linux-how-to',\n          'java/how-to/cf-cli',\n          '...'\n          ]\n")),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Start your project by running ",(0,i.kt)("inlineCode",{parentName:"li"},"npm start"),", it should recompile automatically on every change afterward"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure you can access your article via ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:3000/cloud-sdk/docs/java/how-to/generate-odata-client-with-cloud-sdk-for-java-how-to"},"localhost"))),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Showcase your knowledge, creativity, and markdown skills by delivering concise but useful documentation.\nPlease, check ",(0,i.kt)("a",{parentName:"li",href:"how-to-write-documentation"},"this material on good writing practices"),"."),(0,i.kt)("li",{parentName:"ol"},"Be proud of yourself!")),(0,i.kt)("h3",{id:"go-live"},"Go Live!"),(0,i.kt)("p",null,"Time to show your work to the world!"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure your documentation builds")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Please, ",(0,i.kt)("inlineCode",{parentName:"li"},"commit")," you work and create a ",(0,i.kt)("inlineCode",{parentName:"li"},"pull-request"),".")),(0,i.kt)("img",{alt:"pull-request",src:(0,l.Z)("img/docs/pull-request.png")}),(0,i.kt)("h4",{id:"review"},"Review"),(0,i.kt)("p",null,"Ask someone to review your work.\nPlease, make sure you followed ",(0,i.kt)("a",{parentName:"p",href:"how-to-write-documentation"},"these best practices")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk/blob/main/CONTRIBUTING.md"},"contributing guidelines"),"."),(0,i.kt)("h4",{id:"publish"},"Publish"),(0,i.kt)("p",null,"After your pull request is merged, the pipeline will automatically publish a new version of the documentation.\nYou can check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk/actions?query=workflow%3A%22Release+Cloud+SDK+documentation%22"},"GitHub actions")," for Documentation or navigate to the live documentation portal and check if your changes are applied."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Clear Cache")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"I recommend reloading the page without cache."))),(0,i.kt)("h2",{id:"conventions"},"Conventions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Static content resides in the ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," folder."),(0,i.kt)("li",{parentName:"ul"},"Linking to files and images from Markdown starts from the folder where your file is located.\nIn this case, if I want to link anything in the ",(0,i.kt)("inlineCode",{parentName:"li"},"docs")," folder I'll have to go with ",(0,i.kt)("a",{parentName:"li",href:"../java/getting-started"},"my-link"),".\nYou can reach up until the root ",(0,i.kt)("inlineCode",{parentName:"li"},"docs")," folder level with this approach."),(0,i.kt)("li",{parentName:"ul"},"To make a dynamic link to the ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," folder content you'll need to use a snippet similar to the one below:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import useBaseUrl from '@docusaurus/useBaseUrl';\n<img alt=\"pull-request\" src={useBaseUrl('img/docs/pull-request.png')} />;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Of course, you can link with ",(0,i.kt)("inlineCode",{parentName:"li"},"your-link/your-path#your-heading"),",\ncheck the right-side menu for the links like ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:3000/cloud-sdk/docs/dzen/getting-started#what-youll-need"},"sending you to the top"),".")),(0,i.kt)("h2",{id:"linters"},"Linters"),(0,i.kt)("p",null,"We use linters to catch the most frequent writing issues.\nPlease, use them at all times.\nThe best way to do it, is by adding an extension to your favorite editor."),(0,i.kt)("h3",{id:"vale"},"Vale"),(0,i.kt)("p",null,"We use a linter for ",(0,i.kt)("a",{parentName:"p",href:"https://docs.errata.ai/"},"Vale")," a linter for prose.\nIt's a powerful tool to keep our writing consistent.\nPlease, check the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.errata.ai/"},"documentation")," for more details."),(0,i.kt)("p",null,"In the situation where linting for grammar and writing style doesn't make sense use the following configuration tags to disable linting for that fragment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\x3c!-- vale off --\x3e\n\nThis is some text\n\nmore text here...\n\n\x3c!-- vale on --\x3e\n\n\x3c!-- vale Style.Rule = NO --\x3e\n\nThis is some text\n\n\x3c!-- vale Style.Rule = YES --\x3e\n")),(0,i.kt)("h3",{id:"prettier"},"Prettier"),(0,i.kt)("p",null,"Our ",(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," configuration supports Markdown and will help you keep the style consistent.\nPlease, run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run prettier")," before you commit your code."),(0,i.kt)("h2",{id:"advanced-topics"},"Advanced Topics"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tabs? Admonitions? Advanced code blocks? Write your own plugin?")),(0,i.kt)("p",null,"Docusaurus supports markup to extend markdown.\nPlease, refer to the official documentation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://v2.docusaurus.io/docs/markdown-features/#tabs"},"Tabs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://v2.docusaurus.io/docs/markdown-features/#calloutsadmonitions"},"Admonitions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://v2.docusaurus.io/docs/markdown-features/#embedding-react-components-with-mdx"},"Coding your own component with React and MDX"))),(0,i.kt)("h2",{id:"where-to-get-help"},"Where to Get Help?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check the ",(0,i.kt)("a",{parentName:"li",href:"https://v2.docusaurus.io/docs/markdown-features/"},"Docusaurus documentation"),"."),(0,i.kt)("li",{parentName:"ul"},"Read good documentation to write good documentation."),(0,i.kt)("li",{parentName:"ul"},"Ask a more experienced colleague.")),(0,i.kt)("h2",{id:"what-to-do-next"},"What to Do Next?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deliver your great documentation item now."),(0,i.kt)("li",{parentName:"ul"},"Share ideas and feedback about improving the SAP Cloud SDK documentation.")),(0,i.kt)("h2",{id:"useful-resources"},"Useful Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/"},"Markdown Guide")," - officially supported by Docusaurus")))}k.isMDXComponent=!0}}]);