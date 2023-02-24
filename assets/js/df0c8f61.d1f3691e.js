"use strict";(self.webpackChunkcss_fx_layout_docs=self.webpackChunkcss_fx_layout_docs||[]).push([[9025],{3905:(A,e,g)=>{g.d(e,{Zo:()=>l,kt:()=>I});var n=g(7294);function t(A,e,g){return e in A?Object.defineProperty(A,e,{value:g,enumerable:!0,configurable:!0,writable:!0}):A[e]=g,A}function r(A,e){var g=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),g.push.apply(g,n)}return g}function a(A){for(var e=1;e<arguments.length;e++){var g=null!=arguments[e]?arguments[e]:{};e%2?r(Object(g),!0).forEach((function(e){t(A,e,g[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(g)):r(Object(g)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(g,e))}))}return A}function C(A,e){if(null==A)return{};var g,n,t=function(A,e){if(null==A)return{};var g,n,t={},r=Object.keys(A);for(n=0;n<r.length;n++)g=r[n],e.indexOf(g)>=0||(t[g]=A[g]);return t}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)g=r[n],e.indexOf(g)>=0||Object.prototype.propertyIsEnumerable.call(A,g)&&(t[g]=A[g])}return t}var s=n.createContext({}),o=function(A){var e=n.useContext(s),g=e;return A&&(g="function"==typeof A?A(e):a(a({},e),A)),g},l=function(A){var e=o(A.components);return n.createElement(s.Provider,{value:e},A.children)},B="mdxType",E={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(A,e){var g=A.components,t=A.mdxType,r=A.originalType,s=A.parentName,l=C(A,["components","mdxType","originalType","parentName"]),B=o(g),c=t,I=B["".concat(s,".").concat(c)]||B[c]||E[c]||r;return g?n.createElement(I,a(a({ref:e},l),{},{components:g})):n.createElement(I,a({ref:e},l))}));function I(A,e){var g=arguments,t=e&&e.mdxType;if("string"==typeof A||t){var r=g.length,a=new Array(r);a[0]=c;var C={};for(var s in e)hasOwnProperty.call(e,s)&&(C[s]=e[s]);C.originalType=A,C[B]="string"==typeof A?A:t,a[1]=C;for(var o=2;o<r;o++)a[o]=g[o];return n.createElement.apply(null,a)}return n.createElement.apply(null,g)}c.displayName="MDXCreateElement"},1763:(A,e,g)=>{g.r(e),g.d(e,{assets:()=>o,contentTitle:()=>C,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=g(7462),t=(g(7294),g(3905)),r=g(4729);const a={sidebar_label:"Gap API",sidebar_position:2},C="Class Gap API",s={unversionedId:"class-selectors/gap",id:"class-selectors/gap",title:"Class Gap API",description:"This page describes how to use the class based gap API to add gaps between elements inside a flex container.",source:"@site/docs/class-selectors/gap.mdx",sourceDirName:"class-selectors",slug:"/class-selectors/gap",permalink:"/css-fx-layout/docs/next/class-selectors/gap",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Gap API",sidebar_position:2},sidebar:"autoSidebar",previous:{title:"Layout API",permalink:"/css-fx-layout/docs/next/class-selectors/layout"},next:{title:"Flex API",permalink:"/css-fx-layout/docs/next/class-selectors/flex"}},o={},l=[{value:"Configuration",id:"configuration",level:2},{value:"<code>fx-gap</code> classes",id:"fx-gap-classes",level:2},{value:"Values",id:"values",level:3},{value:"Example",id:"example",level:3}],B={toc:l},E="wrapper";function c(A){let{components:e,...g}=A;return(0,t.kt)(E,(0,n.Z)({},B,g,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"class-gap-api"},"Class Gap API"),(0,t.kt)("p",null,"This page describes how to use the class based gap API to add gaps between elements inside a flex container."),(0,t.kt)("h2",{id:"configuration"},"Configuration"),(0,t.kt)("p",null,"The gap selectors are customisable and need to be included using the provided mixin:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scss"},"@include fx.gap-class-selectors(1, 8, 1, px em, $includeResponsiveApi);\n@include fx.gap-class-selectors-from-list(16 32 48, px em, $includeResponsiveApi);\n")),(0,t.kt)("p",null,"There you can decide which sizes and units you want selectors to be generated for and whether to include selectors for the responsive API or not."),(0,t.kt)("p",null,"The above example generates selectors for all sizes from 1 to 8 ",(0,t.kt)("inlineCode",{parentName:"p"},"px")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"em")," and additionally for 16, 32 and 48 ",(0,t.kt)("inlineCode",{parentName:"p"},"px")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"em"),"."),(0,t.kt)("h2",{id:"fx-gap-classes"},(0,t.kt)("inlineCode",{parentName:"h2"},"fx-gap")," classes"),(0,t.kt)("h3",{id:"values"},"Values"),(0,t.kt)("p",null,'Naming scheme:  "',(0,t.kt)("inlineCode",{parentName:"p"},"fx-gap--<number><unit>"),'".'),(0,t.kt)("p",null,"With ",(0,t.kt)("inlineCode",{parentName:"p"},"<number>")," being a number that is included in your generated selectors and ",(0,t.kt)("inlineCode",{parentName:"p"},"<unit>")," being a unit you chose the selectors to be generated for."),(0,t.kt)("h3",{id:"example"},"Example"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<div class="fx-layout-row\n            fx-layout-reverse\n            fx-align--start-x\n            fx-align--x-center\n\x3c!-- highlight-next-line --\x3e\n            fx-gap--4px">\n    <span>One</span>\n    <span>Two</span>\n    <span>Three</span>\n</div>\n')),(0,t.kt)("img",{src:r.Z,alt:"Layout Gap Example",width:"280px"}))}c.isMDXComponent=!0},4729:(A,e,g)=>{g.d(e,{Z:()=>n});const n="data:image/png;base64,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nIAApnNF5oAJECBAgAABAYxzgAABAgQIEOicgACmc0XmgAkQIECAAAEBjHOAAAECBAgQ6JyAAKZzReaACRAgQIAAAQGMc4AAAQIECBDonIAApnNF5oAJECBAgAABAYxzgAABAgQIEOicgACmc0XmgAkQIECAAAEBjHOAAAECBAgQ6JyAAKZzReaACRAgQIAAAQGMc4AAAQIECBDonIAApnNF5oAJECBAgAABAYxzgAABAgQIEOicgACmc0XmgAkQIECAAAEBjHOAAAECBAgQ6JyAAKZzReaACRAgQIAAAQGMc4AAAQIECBDonIAApnNF5oAJECBAgAABAYxzgAABAgQIEOicgACmc0XmgAkQIECAAIEVERBYmgV2PfX4pfnPW+b/tgv2P3isgfIfy9P5N5V/54twof4ANTALxWdlAgQIECBAoA0BAUwb6vZJgAABAgQILJSAAGah+KxMgAABAgQItCEggGlD3T4JECBAgACBhRIQwCwUn5UJECBAgACBNgSMQmpD3T6XmMA1P/95M+c3v1kk+3vWk57UrLHqqs335sxprr/rrt42n/74xzfxT5pMgcVR/pP5lzqqWoF7H3igOe+GG5pzr7++ueXXv25+es89zZ8eeqh5zMorN2s98pHNhmus0fz1U57S7LrRRs1qq6xSu3n5l4CAAGYJINtFewIfv/ji5pQf/GCRHMD/HnRQs2f6Qvvc977XnPDtb/e2+Y+77CKAWSS6i2cji6P8F8+R2uqSEvhjClKOSt8LH/j614fu8q7f/7658e67m8tuvbU5OX3WI715552bf06f9Uc+/OFD17GwHQFNSO242ysBAgQILGGBO3/3u2b3T3xiZPAy6nA+dtFFzTYf/Wi/5nVUPsuXrIAamCXrbW9LWGDTtddutl9//ZF7jausnOLqaosxzUFrpuYjqVsCyr9b5bU4j/Y3f/hD89KTTmqiWbFMm661VrPrxhs3W6yzTrPB6qv3mpKuvvPO5vL03fDd1FycU9TMvOiEE5qzDzmk2fixj82LPbYoIIBpEd+uF7/AEanqN/6NSuu9//1NtIVHetU22zTv22uvUVkt76CA8u9goS2mQz7iC1+YFry8Z889mzfusEOzwvLTGyPmzp3bnHjFFc1bvvSl/hFFEHP4WWc156QgRmpfYHqptX9MjoAAAQIECCwygR+lWpcvXHNNf3tR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"}}]);