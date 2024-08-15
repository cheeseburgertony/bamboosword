"use strict";(self.webpackChunkbamboosword=self.webpackChunkbamboosword||[]).push([[640],{"./src/components/AutoComplete/auto-complete.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AjaxAutoComplete:()=>AjaxAutoComplete,CustomAutoComplete:()=>CustomAutoComplete,SimpleAutoComplete:()=>SimpleAutoComplete,__namedExportsOrder:()=>__namedExportsOrder,default:()=>auto_complete_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),input=__webpack_require__("./src/components/Input/input.tsx"),icon=__webpack_require__("./src/components/Icon/icon.tsx"),transition=__webpack_require__("./src/components/Transition/transition.tsx");const useDebounce=function(value){let delay=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;const[debounceValue,setDebounceValue]=(0,react.useState)(value);return(0,react.useEffect)((()=>{const timer=setTimeout((()=>{setDebounceValue(value)}),delay);return()=>{clearTimeout(timer)}}),[value,delay]),debounceValue};var useClickOutside=__webpack_require__("./src/hooks/useClickOutside.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AutoComplete=props=>{const{fetchSuggestions,onSelect,onChange,value,renderOption,...restProps}=props,[inputValue,setInputValue]=(0,react.useState)(value),[suggestions,setSugestions]=(0,react.useState)([]),[loading,setLoading]=(0,react.useState)(!1),[showDropdown,setShowDropdown]=(0,react.useState)(!1),[highlightIndex,setHighlightIndex]=(0,react.useState)(-1),triggerSearch=(0,react.useRef)(!1),componentRef=(0,react.useRef)(null);(0,useClickOutside.L)(componentRef,(()=>{setSugestions([])}));const debouncedValue=useDebounce(inputValue,300);(0,react.useEffect)((()=>{if(debouncedValue&&triggerSearch.current){setSugestions([]);const results=fetchSuggestions(debouncedValue);results instanceof Promise?(setLoading(!0),results.then((data=>{setLoading(!1),setSugestions(data),data.length>0&&setShowDropdown(!0)}))):(setSugestions(results),setShowDropdown(!0),results.length>0&&setShowDropdown(!0))}else setShowDropdown(!1);setHighlightIndex(-1)}),[debouncedValue,fetchSuggestions]);const highLightHandle=index=>{index<0&&(index=0),index>=suggestions.length&&(index=suggestions.length-1),setHighlightIndex(index)},handleSelect=item=>{setInputValue(item.value),setShowDropdown(!1),onSelect&&onSelect(item),triggerSearch.current=!1},renderTemplate=item=>renderOption?renderOption(item):item.value;return(0,jsx_runtime.jsxs)("div",{className:"bamboosword-auto-complete",ref:componentRef,children:[(0,jsx_runtime.jsx)(input.A,{...restProps,value:inputValue,onChange:e=>{const value=e.target.value.trim();setInputValue(value),onChange&&onChange(value),triggerSearch.current=!0},onKeyDown:e=>{switch(console.log(e.code),e.code){case"Enter":suggestions[highlightIndex]&&handleSelect(suggestions[highlightIndex]);break;case"ArrowUp":highLightHandle(highlightIndex-1);break;case"ArrowDown":highLightHandle(highlightIndex+1);break;case"Escape":setShowDropdown(!1)}}}),(0,jsx_runtime.jsx)(transition.A,{in:showDropdown||loading,animation:"zoom-in-top",timeout:300,onExited:()=>{setSugestions([])},children:(0,jsx_runtime.jsxs)("ul",{className:"bamboosword-suggestion-list",children:[loading&&(0,jsx_runtime.jsx)("div",{className:"suggstions-loading-icon",children:(0,jsx_runtime.jsx)(icon.A,{icon:"spinner",spin:!0})}),suggestions.map(((item,index)=>{const cnames=classnames_default()("suggestion-item",{"is-active":index===highlightIndex});return(0,jsx_runtime.jsx)("li",{className:cnames,onClick:()=>handleSelect(item),children:renderTemplate(item)},index)}))]})})]})};AutoComplete.__docgenInfo={description:"输入框自动完成功能。当输入值需要自动完成时使用，支持同步和异步两种方式\n支持 Input 组件的所有属性 支持键盘事件选择\n### 引用方法\n\n~~~js\nimport { AutoComplete } from 'bamboosword'\n~~~",methods:[],displayName:"AutoComplete",props:{fetchSuggestions:{required:!0,tsType:{name:"signature",type:"function",raw:"(str: string) => DataSourceType[] | Promise<DataSourceType[]>",signature:{arguments:[{type:{name:"string"},name:"str"}],return:{name:"union",raw:"DataSourceType[] | Promise<DataSourceType[]>",elements:[{name:"Array",elements:[{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]}],raw:"DataSourceType[]"},{name:"Promise",elements:[{name:"Array",elements:[{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]}],raw:"DataSourceType[]"}],raw:"Promise<DataSourceType[]>"}]}}},description:"返回输入建议的方法，可以拿到当前的输入，然后返回同步的数组或者是异步的 Promise\ntype DataSourceType<T = {}> = T & DataSourceObject"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: DataSourceType) => void",signature:{arguments:[{type:{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]},name:"item"}],return:{name:"void"}}},description:"点击选中建议项时触发的回调"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"文本框发生改变的时候触发的事件"},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: DataSourceType) => ReactElement",signature:{arguments:[{type:{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]},name:"item"}],return:{name:"ReactElement"}}},description:""}},composes:["Omit"]};const auto_complete_stories={title:"AutoComplete",component:AutoComplete,tags:["autodocs"]},SimpleAutoComplete={render:args=>{const hero=["Iron Man","Spider-Man","Captain America","Thor","Hulk","Black Widow","Captain Marvel","Doctor Strange","Black Panther","Wolverine"];return(0,jsx_runtime.jsx)(AutoComplete,{...args,fetchSuggestions:query=>hero.filter((item=>item.includes(query))).map((item=>({value:item}))),placeholder:"输入漫威超级英雄的英文名试试"})},storyName:"基本的搜索"},CustomAutoComplete={render:args=>{const heroes=[{name:"Iron Man",luckyNum:6},{name:"Spider-Man",luckyNum:12},{name:"Captain America",luckyNum:2},{name:"Thor",luckyNum:4},{name:"Hulk",luckyNum:8},{name:"Black Widow",luckyNum:10},{name:"Captain Marvel",luckyNum:14},{name:"Doctor Strange",luckyNum:16},{name:"Black Panther",luckyNum:20},{name:"Wolverine",luckyNum:22}];return(0,jsx_runtime.jsx)(AutoComplete,{...args,fetchSuggestions:query=>heroes.filter((item=>item.name.includes(query))),placeholder:"输入漫威超级英雄的英文名试试,自定义下拉模版",renderOption:item=>{const itemWithNumber=item;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("b",{style:{marginRight:"10px"},children:["Name: ",itemWithNumber.name]}),(0,jsx_runtime.jsxs)("span",{children:["LuckyNumber: ",itemWithNumber.luckyNum]})]})}})},storyName:"自定义搜索结果模版"},AjaxAutoComplete={render:args=>(0,jsx_runtime.jsx)(AutoComplete,{...args,fetchSuggestions:query=>fetch(`https://api.github.com/search/users?q=${query}`).then((res=>res.json())).then((_ref=>{let{items}=_ref;return items.slice(0,10).map((item=>({value:item.login,...item})))})),placeholder:"输入Github用户名试试",renderOption:item=>{const itemWithGithub=item;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("b",{children:["Name: ",itemWithGithub.value]}),(0,jsx_runtime.jsxs)("span",{children:["url: ",itemWithGithub.url]})]})}}),storyName:"支持异步搜索"},__namedExportsOrder=["SimpleAutoComplete","CustomAutoComplete","AjaxAutoComplete"];SimpleAutoComplete.parameters={...SimpleAutoComplete.parameters,docs:{...SimpleAutoComplete.parameters?.docs,source:{originalSource:"{\n  render: (args: any) => {\n    const hero = ['Iron Man', 'Spider-Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Captain Marvel', 'Doctor Strange', 'Black Panther', 'Wolverine'];\n    const handleFetch = (query: string) => {\n      return hero.filter(item => item.includes(query)).map(item => ({\n        value: item\n      }));\n    };\n    return <AutoComplete {...args} fetchSuggestions={handleFetch} placeholder=\"输入漫威超级英雄的英文名试试\" />;\n  }\n}",...SimpleAutoComplete.parameters?.docs?.source}}},CustomAutoComplete.parameters={...CustomAutoComplete.parameters,docs:{...CustomAutoComplete.parameters?.docs,source:{originalSource:"{\n  render: (args: any) => {\n    const heroes = [{\n      name: 'Iron Man',\n      luckyNum: 6\n    }, {\n      name: 'Spider-Man',\n      luckyNum: 12\n    }, {\n      name: 'Captain America',\n      luckyNum: 2\n    }, {\n      name: 'Thor',\n      luckyNum: 4\n    }, {\n      name: 'Hulk',\n      luckyNum: 8\n    }, {\n      name: 'Black Widow',\n      luckyNum: 10\n    }, {\n      name: 'Captain Marvel',\n      luckyNum: 14\n    }, {\n      name: 'Doctor Strange',\n      luckyNum: 16\n    }, {\n      name: 'Black Panther',\n      luckyNum: 20\n    }, {\n      name: 'Wolverine',\n      luckyNum: 22\n    }];\n    const handleFetch = (query: string) => {\n      return heroes.filter(item => item.name.includes(query));\n    };\n    const renderOption = (item: DataSourceType) => {\n      const itemWithNumber = (item as DataSourceType<HeroesProps>);\n      return <>\n          <b style={{\n          marginRight: '10px'\n        }}>Name: {itemWithNumber.name}</b>\n          <span>LuckyNumber: {itemWithNumber.luckyNum}</span>\n        </>;\n    };\n    return <AutoComplete {...args} fetchSuggestions={handleFetch} placeholder=\"输入漫威超级英雄的英文名试试,自定义下拉模版\" renderOption={renderOption} />;\n  }\n}",...CustomAutoComplete.parameters?.docs?.source}}},AjaxAutoComplete.parameters={...AjaxAutoComplete.parameters,docs:{...AjaxAutoComplete.parameters?.docs,source:{originalSource:'{\n  render: (args: any) => {\n    const handleFetch = (query: string) => {\n      return fetch(`https://api.github.com/search/users?q=${query}`).then(res => res.json()).then(({\n        items\n      }) => {\n        return items.slice(0, 10).map((item: any) => ({\n          value: item.login,\n          ...item\n        }));\n      });\n    };\n    const renderOption = (item: DataSourceType) => {\n      const itemWithGithub = (item as DataSourceType<GithubUserProps>);\n      return <>\n          <b>Name: {itemWithGithub.value}</b>\n          <span>url: {itemWithGithub.url}</span>\n        </>;\n    };\n    return <AutoComplete {...args} fetchSuggestions={handleFetch} placeholder="输入Github用户名试试" renderOption={renderOption} />;\n  }\n}',...AjaxAutoComplete.parameters?.docs?.source}}}},"./src/components/Icon/icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,I:()=>Icon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Icon=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((props=>{const{theme,className,...restProps}=props,classes=classnames__WEBPACK_IMPORTED_MODULE_2___default()("bamboosword-icon",className,{[`icon-${theme}`]:theme});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.g,{className:classes,...restProps})})),__WEBPACK_DEFAULT_EXPORT__=Icon;Icon.__docgenInfo={description:"提供了一套常用的图标集合 基于 react-fontawesome。\n\n支持 react-fontawesome的所有属性 可以在这里查询 https://github.com/FortAwesome/react-fontawesome#basic\n\n支持 fontawesome 所有 free-solid-icons，可以在这里查看所有图标 https://fontawesome.com/icons?d=gallery&s=solid&m=free\n### 引用方法\n\n~~~js\nimport { Icon } from 'bamboosword'\n~~~",methods:[],displayName:"Icon",props:{theme:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"支持框架主题 根据主题显示不同的颜色"}},composes:["FontAwesomeIconProps"]}},"./src/components/Input/input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,p:()=>Input});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Icon_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>{const{disabled,size,icon,prepend,append,style,...restProps}=props,cnames=classnames__WEBPACK_IMPORTED_MODULE_1___default()("bamboosword-input-wrapper",{[`input-size-${size}`]:size,"is-disabled":disabled,"input-group":prepend||append,"input-group-append":!!append,"input-group-prepend":!!prepend});var value;return"value"in props&&(delete restProps.defaultValue,restProps.value=null==(value=props.value)?"":value),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:cnames,style,children:[prepend&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"bamboosword-input-group-prepend",children:prepend}),icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"icon-wrapper",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon_icon__WEBPACK_IMPORTED_MODULE_2__.A,{icon,title:`title-${icon}`})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{ref,className:"bamboosword-input-inner",disabled,...restProps}),append&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"bamboosword-input-group-append",children:append})]})})),__WEBPACK_DEFAULT_EXPORT__=Input;Input.__docgenInfo={description:"Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。\n\n~~~js\n// 这样引用\nimport { Input } from 'bamboosword'\n~~~\n\n支持 HTMLInput 的所有基本属性",methods:[],displayName:"Input"}},"./src/components/Transition/transition.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_transition_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Transition=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((props=>{const{children,animation,classNames,wrapper,...restProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.A,{classNames:classNames||animation,unmountOnExit:!0,appear:!0,...restProps,children:wrapper?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children}):children})})),__WEBPACK_DEFAULT_EXPORT__=Transition;Transition.__docgenInfo={description:"",methods:[],displayName:"Transition",props:{animation:{required:!1,tsType:{name:"union",raw:"'zoom-in-top' | 'zoom-in-right' | 'zoom-in-bottom' | 'zoom-in-left'",elements:[{name:"literal",value:"'zoom-in-top'"},{name:"literal",value:"'zoom-in-right'"},{name:"literal",value:"'zoom-in-bottom'"},{name:"literal",value:"'zoom-in-left'"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},wrapper:{required:!1,tsType:{name:"boolean"},description:""}}}},"./src/hooks/useClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,L:()=>useClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useClickOutside=(ref,handler)=>{(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const listener=e=>{ref.current&&!ref.current.contains(e.target)&&handler(e)};return document.addEventListener("click",listener),()=>{document.removeEventListener("click",listener)}}),[ref,handler])},__WEBPACK_DEFAULT_EXPORT__=useClickOutside}}]);