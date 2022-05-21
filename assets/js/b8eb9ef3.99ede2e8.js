"use strict";(self.webpackChunk_ts_node_website=self.webpackChunk_ts_node_website||[]).push([[570],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return N}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(a),N=r,v=m["".concat(p,".").concat(N)]||m[N]||d[N]||o;return a?n.createElement(v,s(s({ref:t},c),{},{components:a})):n.createElement(v,s({ref:t},c))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1543:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],l={title:"Visual Studio Code"},p=void 0,i={unversionedId:"recipes/visual-studio-code",id:"recipes/visual-studio-code",title:"Visual Studio Code",description:"Create a new Node.js debug configuration, add -r ts-node/register to node args and move the program to the args list (so VS Code doesn't look for outFiles).",source:"@site/docs/recipes/visual-studio-code.md",sourceDirName:"recipes",slug:"/recipes/visual-studio-code",permalink:"/ts-node/docs/recipes/visual-studio-code",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/recipes/visual-studio-code.md",tags:[],version:"current",frontMatter:{title:"Visual Studio Code"},sidebar:"primarySidebar",previous:{title:"Tape",permalink:"/ts-node/docs/recipes/tape"},next:{title:"Other",permalink:"/ts-node/docs/recipes/other"}},c={},d=[],m={toc:d};function N(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a new Node.js debug configuration, add ",(0,o.kt)("inlineCode",{parentName:"p"},"-r ts-node/register")," to node args and move the ",(0,o.kt)("inlineCode",{parentName:"p"},"program")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," list (so VS Code doesn't look for ",(0,o.kt)("inlineCode",{parentName:"p"},"outFiles"),")."),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light with-title",style:{backgroundColor:"#ffffff",color:"#24292e"},title:".vscode/launch.json"},(0,o.kt)("div",{parentName:"pre",className:"code-title"},".vscode/launch.json"),(0,o.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"configurations"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": [{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"type"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"node"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"request"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"launch"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"name"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"Launch Program"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"runtimeArgs"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": [")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"            "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"-r"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"            "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"ts-node/register"')),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        ],")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"args"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": [")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"            "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"${workspaceFolder}/src/index.ts"')),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        ]")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    }],")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"}"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord with-title",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"},title:".vscode/launch.json"},(0,o.kt)("div",{parentName:"pre",className:"code-title"},".vscode/launch.json"),(0,o.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"configurations"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"[{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"type"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"node"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"request"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"launch"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"name"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"Launch Program"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"runtimeArgs"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"[")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"            "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"-r"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"            "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"ts-node/register"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"],")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"args"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"[")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"            "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"${workspaceFolder}/src/index.ts"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"]")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}],")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," If you are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--project <tsconfig.json>")," command line argument as per the ",(0,o.kt)("a",{parentName:"p",href:"/ts-node/docs/configuration"},"Configuration Options"),', and want to apply this same behavior when launching in VS Code, add an "env" key into the launch configuration: ',(0,o.kt)("inlineCode",{parentName:"p"},'"env": { "TS_NODE_PROJECT": "<tsconfig.json>" }'),"."))}N.isMDXComponent=!0}}]);