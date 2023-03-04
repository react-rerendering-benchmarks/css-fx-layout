"use strict";(self.webpackChunkcss_fx_layout_docs=self.webpackChunkcss_fx_layout_docs||[]).push([[6535],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1171:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"\ud83d\udce6 About",sidebar_position:1},i="\ud83d\udce6 About css-fx-layout",l={unversionedId:"about",id:"about",title:"\ud83d\udce6 About css-fx-layout",description:"css-fx-layout is a lightweight and modular SCSS flexbox library. It is inspired by Angular's Flex-Layout and can",source:"@site/docs/about.md",sourceDirName:".",slug:"/about",permalink:"/css-fx-layout/docs/next/about",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\ud83d\udce6 About",sidebar_position:1},sidebar:"autoSidebar",next:{title:"\ud83d\udc1d Getting Started",permalink:"/css-fx-layout/docs/next/getting-started"}},s={},u=[{value:"Features",id:"features",level:2},{value:"CSS class selectors",id:"css-class-selectors",level:3},{value:"HTML data-attribute selectors",id:"html-data-attribute-selectors",level:3},{value:"Responsive API",id:"responsive-api",level:3},{value:"SCSS Mixins",id:"scss-mixins",level:3},{value:"Why? What problem does this library solve?",id:"why-what-problem-does-this-library-solve",level:2},{value:"No pre-compiled CSS",id:"no-pre-compiled-css",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-about-css-fx-layout"},"\ud83d\udce6 About css-fx-layout"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"css-fx-layout")," is a lightweight and modular SCSS flexbox library. It is inspired by Angular's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/angular/flex-layout"},"Flex-Layout")," and can\nreplace the most popular functions of the (by now deprecated) Angular library."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"This library gives you the option between using CSS classes or data-attributes as selectors in your HTML. Both options give you the same features but the CSS\nclasses can be more verbose when you want a more complex layout."),(0,r.kt)("h3",{id:"css-class-selectors"},"CSS class selectors"),(0,r.kt)("p",null,'Using the CSS classes is more verbose and the more "CSS-y" way of styling your HTML:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".fx-layout-")," and ",(0,r.kt)("inlineCode",{parentName:"li"},".fx-align-"),": CSS classes to control the flexbox container"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".fx-gap--"),": CSS classes to add gaps between the elements in a flex container"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".show-")," and ",(0,r.kt)("inlineCode",{parentName:"li"},".hide-"),": CSS classes which can be used to show/hide elements depending on the screen size"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".fx-flex")," and ",(0,r.kt)("inlineCode",{parentName:"li"},".fx-glex-grow"),": Classes to control flex behaviour of an element")),(0,r.kt)("h3",{id:"html-data-attribute-selectors"},"HTML data-attribute selectors"),(0,r.kt)("p",null,"Using the data attributes is the easiest way to use this library and easier to migrate to from Angular Flex-Layout:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data-layout")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"data-layout-align"),": HTML attributes to be used to control the flexbox container"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data-layout-gap"),": attribute to add gaps between the elements in a flex container"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data-hide-")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"data-show-"),": attributes which can be used to show/hide elements depending on the screen size"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data-flex"),": Control flex behaviour of an element")),(0,r.kt)("h3",{id:"responsive-api"},"Responsive API"),(0,r.kt)("p",null,"The library provides a responsive API which allows to create different layouts for different screen sizes using known breakpoints\nlike ",(0,r.kt)("inlineCode",{parentName:"p"},"xs"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"md"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"xl")," and including ",(0,r.kt)("inlineCode",{parentName:"p"},"lt-")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"gt-")," variations of them."),(0,r.kt)("h3",{id:"scss-mixins"},"SCSS Mixins"),(0,r.kt)("p",null,"Many of the functions here are also available as mixins to accompany this library or to create your own customized selectors."),(0,r.kt)("h2",{id:"why-what-problem-does-this-library-solve"},"Why? What problem does this library solve?"),(0,r.kt)("p",null,"Initially I created this library because I liked the convenient syntax of Angular Flex-Layout and wanted to use it in non-Angular\nprojects and without JavaScript."),(0,r.kt)("p",null,"By now Angular Flex-Layout has been deprecated and this library can be a replacement for most of the popular parts."),(0,r.kt)("h2",{id:"no-pre-compiled-css"},"No pre-compiled CSS"),(0,r.kt)("p",null,"There are no pre-compiled CSS files available for css-fx-layout 2 and above.\nVersion 1 releases provided minified pre-compiled CSS files, although v1 was not as feature-rich as the latest versions. If you are interested in them you can\nfind and download them from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/philmtd/css-fx-layout/releases/"},"releases page"),"."),(0,r.kt)("p",null,"If you require pre-compiled CSS in your project you can compile it yourself easily by following the ",(0,r.kt)("a",{parentName:"p",href:"./getting-started"},"Getting Started")," guide and configuring the selectors you\nwant to include in your pre-compiled CSS."))}d.isMDXComponent=!0}}]);