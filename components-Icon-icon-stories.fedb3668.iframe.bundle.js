/*! For license information please see components-Icon-icon-stories.fedb3668.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkbamboosword=self.webpackChunkbamboosword||[]).push([[559],{"./node_modules/@fortawesome/react-fontawesome/index.es.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>FontAwesomeIcon});var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function camelize(string){return function _isNumerical(obj){return(obj-=0)==obj}(string)?string:(string=string.replace(/[\-_\s]+(.)?/g,(function(match,chr){return chr?chr.toUpperCase():""}))).substr(0,1).toLowerCase()+string.substr(1)}var _excluded=["style"];var PRODUCTION=!1;try{PRODUCTION=!0}catch(e){}function normalizeIconArgs(icon){return icon&&"object"===_typeof(icon)&&icon.prefix&&icon.iconName&&icon.icon?icon:_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.qg.icon?_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.qg.icon(icon):null===icon?null:icon&&"object"===_typeof(icon)&&icon.prefix&&icon.iconName?icon:Array.isArray(icon)&&2===icon.length?{prefix:icon[0],iconName:icon[1]}:"string"==typeof icon?{prefix:"fas",iconName:icon}:void 0}function objectWithKey(key,value){return Array.isArray(value)&&value.length>0||!Array.isArray(value)&&value?_defineProperty({},key,value):{}}var defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},FontAwesomeIcon=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function(props,ref){var allProps=_objectSpread2(_objectSpread2({},defaultProps),props),iconArgs=allProps.icon,maskArgs=allProps.mask,symbol=allProps.symbol,className=allProps.className,title=allProps.title,titleId=allProps.titleId,maskId=allProps.maskId,iconLookup=normalizeIconArgs(iconArgs),classes=objectWithKey("classes",[].concat(_toConsumableArray(function classList(props){var _classes,beat=props.beat,fade=props.fade,beatFade=props.beatFade,bounce=props.bounce,shake=props.shake,flash=props.flash,spin=props.spin,spinPulse=props.spinPulse,spinReverse=props.spinReverse,pulse=props.pulse,fixedWidth=props.fixedWidth,inverse=props.inverse,border=props.border,listItem=props.listItem,flip=props.flip,size=props.size,rotation=props.rotation,pull=props.pull,classes=(_defineProperty(_classes={"fa-beat":beat,"fa-fade":fade,"fa-beat-fade":beatFade,"fa-bounce":bounce,"fa-shake":shake,"fa-flash":flash,"fa-spin":spin,"fa-spin-reverse":spinReverse,"fa-spin-pulse":spinPulse,"fa-pulse":pulse,"fa-fw":fixedWidth,"fa-inverse":inverse,"fa-border":border,"fa-li":listItem,"fa-flip":!0===flip,"fa-flip-horizontal":"horizontal"===flip||"both"===flip,"fa-flip-vertical":"vertical"===flip||"both"===flip},"fa-".concat(size),null!=size),_defineProperty(_classes,"fa-rotate-".concat(rotation),null!=rotation&&0!==rotation),_defineProperty(_classes,"fa-pull-".concat(pull),null!=pull),_defineProperty(_classes,"fa-swap-opacity",props.swapOpacity),_classes);return Object.keys(classes).map((function(key){return classes[key]?key:null})).filter((function(key){return key}))}(allProps)),_toConsumableArray((className||"").split(" ")))),transform=objectWithKey("transform","string"==typeof allProps.transform?_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.qg.transform(allProps.transform):allProps.transform),mask=objectWithKey("mask",normalizeIconArgs(maskArgs)),renderedIcon=(0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.Kk)(iconLookup,_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({},classes),transform),mask),{},{symbol,title,titleId,maskId}));if(!renderedIcon)return function log(){var _console;!PRODUCTION&&console&&"function"==typeof console.error&&(_console=console).error.apply(_console,arguments)}("Could not find icon",iconLookup),null;var abstract=renderedIcon.abstract,extraProps={ref};return Object.keys(allProps).forEach((function(key){defaultProps.hasOwnProperty(key)||(extraProps[key]=allProps[key])})),convertCurry(abstract[0],extraProps)}));FontAwesomeIcon.displayName="FontAwesomeIcon",FontAwesomeIcon.propTypes={beat:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,border:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,beatFade:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,bounce:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,fade:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,flash:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,mask:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,prop_types__WEBPACK_IMPORTED_MODULE_2___default().array,prop_types__WEBPACK_IMPORTED_MODULE_2___default().string]),maskId:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,fixedWidth:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,inverse:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,flip:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([!0,!1,"horizontal","vertical","both"]),icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,prop_types__WEBPACK_IMPORTED_MODULE_2___default().array,prop_types__WEBPACK_IMPORTED_MODULE_2___default().string]),listItem:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,pull:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["right","left"]),pulse:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,rotation:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([0,90,180,270]),shake:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,spinPulse:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,spinReverse:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,symbol:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,prop_types__WEBPACK_IMPORTED_MODULE_2___default().string]),title:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,titleId:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,transform:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,prop_types__WEBPACK_IMPORTED_MODULE_2___default().object]),swapOpacity:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool};var convertCurry=function convert(createElement,element){var extraProps=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof element)return element;var children=(element.children||[]).map((function(child){return convert(createElement,child)})),mixins=Object.keys(element.attributes||{}).reduce((function(acc,key){var val=element.attributes[key];switch(key){case"class":acc.attrs.className=val,delete element.attributes.class;break;case"style":acc.attrs.style=function styleToObject(style){return style.split(";").map((function(s){return s.trim()})).filter((function(s){return s})).reduce((function(acc,pair){var i=pair.indexOf(":"),prop=camelize(pair.slice(0,i)),value=pair.slice(i+1).trim();return prop.startsWith("webkit")?acc[function capitalize(val){return val.charAt(0).toUpperCase()+val.slice(1)}(prop)]=value:acc[prop]=value,acc}),{})}(val);break;default:0===key.indexOf("aria-")||0===key.indexOf("data-")?acc.attrs[key.toLowerCase()]=val:acc.attrs[camelize(key)]=val}return acc}),{attrs:{}}),_extraProps$style=extraProps.style,existingStyle=void 0===_extraProps$style?{}:_extraProps$style,remaining=_objectWithoutProperties(extraProps,_excluded);return mixins.attrs.style=_objectSpread2(_objectSpread2({},mixins.attrs.style),existingStyle),createElement.apply(void 0,[element.tag,_objectSpread2(_objectSpread2({},mixins.attrs),remaining)].concat(_toConsumableArray(children)))}.bind(null,react__WEBPACK_IMPORTED_MODULE_1__.createElement)},"./src/components/Icon/icon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomIcon:()=>CustomIcon,DefaultIcon:()=>DefaultIcon,ThemeIcon:()=>ThemeIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Icon",component:_icon__WEBPACK_IMPORTED_MODULE_0__.I,tags:["autodocs"]},DefaultIcon={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_0__.I,{...args,icon:"house",size:"3x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_0__.I,{...args,icon:"ghost",size:"3x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_0__.I,{...args,icon:"bolt",size:"3x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_0__.I,{...args,icon:"snowman",size:"3x"})]}),storyName:"默认图标"},ThemeIcon={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_0__.I,{...args,icon:"house",size:"3x",theme:"primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_0__.I,{...args,icon:"ghost",size:"3x",theme:"secondary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_0__.I,{...args,icon:"bolt",size:"3x",theme:"warning"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_0__.I,{...args,icon:"snowman",size:"3x",theme:"info"})]}),storyName:"不同主题的Icon"},CustomIcon={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_0__.I,{...args,icon:"spinner",size:"3x",theme:"primary",spin:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_0__.I,{...args,icon:"spinner",size:"3x",theme:"success",pulse:!0})]}),storyName:"更多行为的Icon"},__namedExportsOrder=["DefaultIcon","ThemeIcon","CustomIcon"];DefaultIcon.parameters={...DefaultIcon.parameters,docs:{...DefaultIcon.parameters?.docs,source:{originalSource:'{\n  render: (args: any) => <>\n      <Icon {...args} icon="house" size="3x" />\n      <Icon {...args} icon="ghost" size="3x" />\n      <Icon {...args} icon="bolt" size="3x" />\n      <Icon {...args} icon="snowman" size="3x" />\n    </>\n}',...DefaultIcon.parameters?.docs?.source}}},ThemeIcon.parameters={...ThemeIcon.parameters,docs:{...ThemeIcon.parameters?.docs,source:{originalSource:'{\n  render: (args: any) => <>\n      <Icon {...args} icon="house" size="3x" theme=\'primary\' />\n      <Icon {...args} icon="ghost" size="3x" theme=\'secondary\' />\n      <Icon {...args} icon="bolt" size="3x" theme=\'warning\' />\n      <Icon {...args} icon="snowman" size="3x" theme=\'info\' />\n    </>\n}',...ThemeIcon.parameters?.docs?.source}}},CustomIcon.parameters={...CustomIcon.parameters,docs:{...CustomIcon.parameters?.docs,source:{originalSource:'{\n  render: (args: any) => <>\n      <Icon {...args} icon="spinner" size="3x" theme="primary" spin />\n      <Icon {...args} icon="spinner" size="3x" theme="success" pulse />\n    </>\n}',...CustomIcon.parameters?.docs?.source}}}},"./src/components/Icon/icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,I:()=>Icon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Icon=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((props=>{const{theme,className,...restProps}=props,classes=classnames__WEBPACK_IMPORTED_MODULE_2___default()("bamboosword-icon",className,{[`icon-${theme}`]:theme});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.g,{className:classes,...restProps})})),__WEBPACK_DEFAULT_EXPORT__=Icon;Icon.__docgenInfo={description:"提供了一套常用的图标集合 基于 react-fontawesome。\n\n支持 react-fontawesome的所有属性 可以在这里查询 https://github.com/FortAwesome/react-fontawesome#basic\n\n支持 fontawesome 所有 free-solid-icons，可以在这里查看所有图标 https://fontawesome.com/icons?d=gallery&s=solid&m=free\n### 引用方法\n\n~~~js\nimport { Icon } from 'bamboosword'\n~~~",methods:[],displayName:"Icon",props:{theme:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"支持框架主题 根据主题显示不同的颜色"}},composes:["FontAwesomeIconProps"]}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);