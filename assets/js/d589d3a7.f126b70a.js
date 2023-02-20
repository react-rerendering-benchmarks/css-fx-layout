"use strict";(self.webpackChunkcss_fx_layout_docs=self.webpackChunkcss_fx_layout_docs||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var s=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},f=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return n?s.createElement(m,i(i({ref:t},u),{},{components:n})):s.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<r;c++)i[c]=n[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2},i="Getting Started",a={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Installation",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/css-fx-layout/docs/next/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"autoSidebar",previous:{title:"About",permalink:"/css-fx-layout/docs/next/about"},next:{title:"Attribute selectors",permalink:"/css-fx-layout/docs/next/category/attribute-selectors"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Using attributes",id:"using-attributes",level:3},{value:"Using CSS classes",id:"using-css-classes",level:3},{value:"Ready to go",id:"ready-to-go",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Add the library to your project's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -s css-fx-layout\n")),(0,o.kt)("p",null,"Then use the provided mixins in your main stylesheet to include the css-fx-layout selectors. You can choose between using CSS classes\nor HTML data attributes (or, while not recommended, use both). If you want to use the layout-gap functionality you can customise which selectors\nare going to be generated by providing the start, end and unit as shown in the example below."),(0,o.kt)("p",null,"css-fx-layout includes a responsive API which is not included per default. If you want to use the responsive API please set the corresponding parameter of the\nmixins to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," as shown in the examples below."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You should customize the included mixins using their parameters. If you don't need the functionality provided by a mixin and the selectors it generates you can\nsimply omit it. Only pick what you need to keep your code base small.")),(0,o.kt)("h3",{id:"using-attributes"},"Using attributes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},'@use "css-fx-layout" as fx;\n\n// If you want to include the responsive API selectors\n$includeResponsiveApi: true;\n\n// If you choose to use attribute selectors:\n@include fx.attribute-selectors($includeResponsiveApi);\n@include fx.gap-attribute-selectors(1, 16, 1, px em, $includeResponsiveApi);\n@include fx.gap-attribute-selectors-from-list(32 48, px em, $includeResponsiveApi);\n@include fx.flex-size-attribute-selectors(5, 100, 5, $includeResponsiveApi);\n@include fx.flex-size-attribute-selectors-from-list(33 66, $includeResponsiveApi);\n\n')),(0,o.kt)("h3",{id:"using-css-classes"},"Using CSS classes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},'@use "css-fx-layout" as fx;\n\n// If you want to include the responsive API selectors\n$includeResponsiveApi: true;\n\n// If you choose to use CSS class selectors:\n@include fx.class-selectors($includeResponsiveApi);\n@include fx.gap-class-selectors(1, 16, 1, px em, $includeResponsiveApi);\n@include fx.gap-class-selectors-from-list(32 48, px em, $includeResponsiveApi);\n@include fx.flex-size-class-selectors(5, 100, 5, $includeResponsiveApi);\n@include fx.flex-size-class-selectors-from-list(33 66, $includeResponsiveApi);\n')),(0,o.kt)("h2",{id:"ready-to-go"},"Ready to go"),(0,o.kt)("p",null,"Done. You can now start using the ",(0,o.kt)("inlineCode",{parentName:"p"},"css-fx-layout")," selectors. Continue reading the docs to find out\nmore about the available selectors and for examples."))}d.isMDXComponent=!0}}]);