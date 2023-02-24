"use strict";(self.webpackChunkcss_fx_layout_docs=self.webpackChunkcss_fx_layout_docs||[]).push([[4638],{3905:(A,g,I)=>{I.d(g,{Zo:()=>E,kt:()=>u});var C=I(7294);function e(A,g,I){return g in A?Object.defineProperty(A,g,{value:I,enumerable:!0,configurable:!0,writable:!0}):A[g]=I,A}function t(A,g){var I=Object.keys(A);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(A);g&&(C=C.filter((function(g){return Object.getOwnPropertyDescriptor(A,g).enumerable}))),I.push.apply(I,C)}return I}function a(A){for(var g=1;g<arguments.length;g++){var I=null!=arguments[g]?arguments[g]:{};g%2?t(Object(I),!0).forEach((function(g){e(A,g,I[g])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(I)):t(Object(I)).forEach((function(g){Object.defineProperty(A,g,Object.getOwnPropertyDescriptor(I,g))}))}return A}function B(A,g){if(null==A)return{};var I,C,e=function(A,g){if(null==A)return{};var I,C,e={},t=Object.keys(A);for(C=0;C<t.length;C++)I=t[C],g.indexOf(I)>=0||(e[I]=A[I]);return e}(A,g);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);for(C=0;C<t.length;C++)I=t[C],g.indexOf(I)>=0||Object.prototype.propertyIsEnumerable.call(A,I)&&(e[I]=A[I])}return e}var Q=C.createContext({}),r=function(A){var g=C.useContext(Q),I=g;return A&&(I="function"==typeof A?A(g):a(a({},g),A)),I},E=function(A){var g=r(A.components);return C.createElement(Q.Provider,{value:g},A.children)},n="mdxType",o={inlineCode:"code",wrapper:function(A){var g=A.children;return C.createElement(C.Fragment,{},g)}},l=C.forwardRef((function(A,g){var I=A.components,e=A.mdxType,t=A.originalType,Q=A.parentName,E=B(A,["components","mdxType","originalType","parentName"]),n=r(I),l=e,u=n["".concat(Q,".").concat(l)]||n[l]||o[l]||t;return I?C.createElement(u,a(a({ref:g},E),{},{components:I})):C.createElement(u,a({ref:g},E))}));function u(A,g){var I=arguments,e=g&&g.mdxType;if("string"==typeof A||e){var t=I.length,a=new Array(t);a[0]=l;var B={};for(var Q in g)hasOwnProperty.call(g,Q)&&(B[Q]=g[Q]);B.originalType=A,B[n]="string"==typeof A?A:e,a[1]=B;for(var r=2;r<t;r++)a[r]=I[r];return C.createElement.apply(null,a)}return C.createElement.apply(null,I)}l.displayName="MDXCreateElement"},4493:(A,g,I)=>{I.r(g),I.d(g,{assets:()=>E,contentTitle:()=>Q,default:()=>u,frontMatter:()=>B,metadata:()=>r,toc:()=>n});var C=I(7462),e=(I(7294),I(3905)),t=I(7949),a=I(5002);const B={sidebar_label:"Layout API",sidebar_position:1},Q="Attribute Layout API",r={unversionedId:"attribute-selectors/layout",id:"version-2.1/attribute-selectors/layout",title:"Attribute Layout API",description:"This page describes how to use the attribute based layout API.",source:"@site/versioned_docs/version-2.1/attribute-selectors/layout.mdx",sourceDirName:"attribute-selectors",slug:"/attribute-selectors/layout",permalink:"/css-fx-layout/docs/2.1/attribute-selectors/layout",draft:!1,tags:[],version:"2.1",sidebarPosition:1,frontMatter:{sidebar_label:"Layout API",sidebar_position:1},sidebar:"autoSidebar",previous:{title:"Attribute selectors",permalink:"/css-fx-layout/docs/2.1/category/attribute-selectors"},next:{title:"Gap API",permalink:"/css-fx-layout/docs/2.1/attribute-selectors/gap"}},E={},n=[{value:"<code>data-layout</code> attribute",id:"data-layout-attribute",level:2},{value:"Values",id:"values",level:3},{value:"Direction",id:"direction",level:4},{value:"Options",id:"options",level:4},{value:"Example",id:"example",level:3},{value:"<code>data-layout-align</code> attribute",id:"data-layout-align-attribute",level:2},{value:"Values",id:"values-1",level:3},{value:"Main Axis",id:"main-axis",level:4},{value:"Cross Axis",id:"cross-axis",level:4},{value:"Example",id:"example-1",level:3}],o={toc:n},l="wrapper";function u(A){let{components:g,...I}=A;return(0,e.kt)(l,(0,C.Z)({},o,I,{components:g,mdxType:"MDXLayout"}),(0,e.kt)("h1",{id:"attribute-layout-api"},"Attribute Layout API"),(0,e.kt)("p",null,"This page describes how to use the attribute based layout API."),(0,e.kt)("h2",{id:"data-layout-attribute"},(0,e.kt)("inlineCode",{parentName:"h2"},"data-layout")," attribute"),(0,e.kt)("h3",{id:"values"},"Values"),(0,e.kt)("p",null,'Value format:  "',(0,e.kt)("inlineCode",{parentName:"p"},"<direction> <options>"),'". Possible values:'),(0,e.kt)("h4",{id:"direction"},"Direction"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("inlineCode",{parentName:"li"},"row"),": for a row layout"),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("inlineCode",{parentName:"li"},"column"),": for a column layout")),(0,e.kt)("h4",{id:"options"},"Options"),(0,e.kt)("p",null,"In addition to these you can optionally add the following, to control the corresponding flex properties:"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("inlineCode",{parentName:"li"},"reverse")),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("inlineCode",{parentName:"li"},"wrap"))),(0,e.kt)("h3",{id:"example"},"Example"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-html"},'<div data-layout="row">\n    <span>One</span>\n    <span>Two</span>\n    <span>Three</span>\n</div>\n')),(0,e.kt)("img",{src:t.Z,alt:"Layout Example",width:"280px"}),(0,e.kt)("h2",{id:"data-layout-align-attribute"},(0,e.kt)("inlineCode",{parentName:"h2"},"data-layout-align")," attribute"),(0,e.kt)("h3",{id:"values-1"},"Values"),(0,e.kt)("p",null,'Value format:  "',(0,e.kt)("inlineCode",{parentName:"p"},"<main-axis> <cross-axis>"),'". Possible values:'),(0,e.kt)("h4",{id:"main-axis"},"Main Axis"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("inlineCode",{parentName:"li"},"start")),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("inlineCode",{parentName:"li"},"end")),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("inlineCode",{parentName:"li"},"center")),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("inlineCode",{parentName:"li"},"space-between")),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("inlineCode",{parentName:"li"},"space-around")),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("inlineCode",{parentName:"li"},"space-evenly"))),(0,e.kt)("h4",{id:"cross-axis"},"Cross Axis"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("inlineCode",{parentName:"li"},"start")),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("inlineCode",{parentName:"li"},"end")),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("inlineCode",{parentName:"li"},"center")),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("inlineCode",{parentName:"li"},"baseline")),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("inlineCode",{parentName:"li"},"stretch"))),(0,e.kt)("h3",{id:"example-1"},"Example"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-html"},'<div data-layout="row"\n\x3c!-- highlight-next-line --\x3e\n     data-layout-align="center center">\n    <span>One</span>\n</div>\n')),(0,e.kt)("img",{src:a.Z,alt:"Layout Align Example",width:"280px"}))}u.isMDXComponent=!0},7949:(A,g,I)=>{I.d(g,{Z:()=>C});const C="data:image/png;base64,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kaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVARIYq5Gj3ggggAACCDgWIIFxHHyajgACCCCAgFUBEhirkaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVARIYq5Gj3ggggAACCDgWIIFxHHyajgACCCCAgFUBEhirkaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVARIYq5Gj3ggggAACCDgWIIFxHHyajgACCCCAgFUBEhirkaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVARIYq5Gj3ggggAACCDgWIIFxHHyajgACCCCAgFUBEhirkaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVARIYq5Gj3ggggAACCDgWIIFxHHyajgACCCCAgFUBEhirkaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVARIYq5Gj3ggggAACCDgWIIFxHHyajgACCCCAgFUBEhirkaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVARIYq5Gj3ggggAACCDgWIIFxHHyajgACCCCAgFUBEhirkaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVARIYq5Gj3ggggAACCDgWIIFxHHyajgACCCCAgFUBEhirkaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVARIYq5Gj3ggggAACCDgWIIFxHHyajgACCCCAgFUBEhirkaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVARIYq5Gj3ggggAACCDgWIIFxHHyajgACCCCAgFUBEhirkaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVARIYq5Gj3ggggAACCDgWIIFxHHyajgACCCCAgFUBEhirkaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVARIYq5Gj3ggggAACCDgWIIFxHHyajgACCCCAgFUBEhirkaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVARIYq5Gj3ggggAACCDgWIIFxHHyajgACCCCAgFUBEhirkaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVARIYq5Gj3ggggAACCDgWIIFxHHyajgACCCCAgFUBEhirkaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVARIYq5Gj3ggggAACCDgWIIFxHHyajgACCCCAgFUBEhirkaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVARIYq5Gj3ggggAACCDgWIIFxHHyajgACCCCAgFUBEhirkaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVARIYq5Gj3ggggAACCDgWIIFxHHyajgACCCCAgFUBEhirkaPeCCCAAAIIOBYggXEcfJqOAAIIIICAVQESGKuRo94IIIAAAgg4FiCBcRx8mo4AAggggIBVgf8HWbaXymkbeAAAAAAASUVORK5CYII="},5002:(A,g,I)=>{I.d(g,{Z:()=>C});const C="data:image/png;base64,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"}}]);