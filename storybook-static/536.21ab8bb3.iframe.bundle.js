(self.webpackChunktoks_web=self.webpackChunktoks_web||[]).push([[536],{"./node_modules/.pnpm/@storybook+nextjs@7.0.26_@babel+core@7.22.8_esbuil_cuaaon3uehhffc3sn6grwbfbcu/node_modules/@storybook/nextjs/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/.pnpm/@storybook+nextjs@7.0.26_@babel+core@7.22.8_esbuil_cuaaon3uehhffc3sn6grwbfbcu/node_modules/@storybook/nextjs/dist sync recursive",module.exports=webpackEmptyContext},"./src/common/components/Appbar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>Appbar});var next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@7.0.26_@babel+core@7.22.8_esbuil_cuaaon3uehhffc3sn6grwbfbcu/node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_navigation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/next@13.4.9_@babel+core@7.22.8_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_common_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/common/constants/index.ts"),_Text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/common/components/Text/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Appbar=function Appbar(){var router=(0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();return __jsx("header",{className:"sticky left-0 right-0 top-0 z-50 h-54px bg-gray-120"},__jsx("div",{className:"flex h-full w-full items-center justify-between px-20px"},__jsx("div",{className:"flex items-center gap-4px"},__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,{layout:"fixed",width:60,height:20,src:_common_constants__WEBPACK_IMPORTED_MODULE_3__.R.TOKS_LOGO,alt:"toks 로고"})),__jsx("button",{className:"flex items-center",onClick:function onClick(){router.replace("/login")}},__jsx(_Text__WEBPACK_IMPORTED_MODULE_4__.x,{color:"gray10",typo:"body"},"로그인"))))};Appbar.displayName="Appbar",Appbar.__docgenInfo={description:"",methods:[],displayName:"Appbar"}},"./src/common/components/Avatar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>Avatar});var _Users_chaerimkim_toks_web_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_chaerimkim_toks_web_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@7.0.26_@babel+core@7.22.8_esbuil_cuaaon3uehhffc3sn6grwbfbcu/node_modules/@storybook/nextjs/dist/images/next-image.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_common_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/constants/index.ts"),_excluded=["src","size","name"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Avatar=function Avatar(_ref){var _ref$src=_ref.src,src=void 0===_ref$src?_common_constants__WEBPACK_IMPORTED_MODULE_2__.R.AVATAR_DEFAULT:_ref$src,_ref$size=_ref.size,size=void 0===_ref$size?"M":_ref$size,name=_ref.name,rest=(0,_Users_chaerimkim_toks_web_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return __jsx("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("relative inline-block overflow-hidden rounded-full",{"h-30px w-30px":"M"===size,"h-24px w-24px":"S"===size})},__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,(0,_Users_chaerimkim_toks_web_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.Z)({alt:"".concat(name," 아바타"),src,layout:"fill"},rest)))};Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{defaultValue:{value:"ICON_URL.AVATAR_DEFAULT",computed:!0},required:!1},size:{defaultValue:{value:"'M'",computed:!1},required:!1}}};try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},size:{defaultValue:{value:"M"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"M"'},{value:'"S"'}]}},src:{defaultValue:{value:"https://toks-web-assets.s3.amazonaws.com/ic_toks_avatar_default.svg"},description:"",name:"src",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/Avatar/index.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/common/components/Avatar/index.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/common/components/BottomSheet/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>BottomSheet});var esm_extends=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),clsx_m=__webpack_require__("./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),PurePortal=__webpack_require__("./src/common/components/PurePortal/index.tsx"),_excluded=["isShow","children","onClose"],__jsx=react.createElement,BottomSheet=function BottomSheet(_ref){var isShow=_ref.isShow,children=_ref.children,onClose=_ref.onClose,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),bottomSheetContentRef=function useClickAway(_ref){var callback=_ref.callback,ref=(0,react.useRef)(null),savedHandler=(0,react.useRef)(callback);return(0,react.useEffect)((function(){savedHandler.current=callback}),[callback]),(0,react.useEffect)((function(){var element=ref.current;if(element){var handleEvent=function handleEvent(event){!element.contains(event.target)&&savedHandler.current()};return document.addEventListener("mousedown",handleEvent),document.addEventListener("touchstart",handleEvent),function(){document.removeEventListener("mousedown",handleEvent),document.removeEventListener("touchstart",handleEvent)}}}),[ref]),ref}({callback:function callback(){onClose()}});return __jsx(PurePortal.A,(0,esm_extends.Z)({isShow},rest),__jsx("div",{ref:bottomSheetContentRef,className:(0,clsx_m.Z)("fixed bottom-0 left-0 right-0 z-50 h-486px w-full translate-y-full rounded-tl-16px rounded-tr-16px bg-gray-90 transition-transform duration-75",{"translate-y-0 animate-slide-up-bottom-sheet":isShow})},children))};BottomSheet.displayName="BottomSheet",BottomSheet.__docgenInfo={description:"",methods:[],displayName:"BottomSheet"};try{BottomSheet.displayName="BottomSheet",BottomSheet.__docgenInfo={description:"",displayName:"BottomSheet",props:{isShow:{defaultValue:null,description:"",name:"isShow",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"VoidFunction"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/BottomSheet/index.tsx#BottomSheet"]={docgenInfo:BottomSheet.__docgenInfo,name:"BottomSheet",path:"src/common/components/BottomSheet/index.tsx#BottomSheet"})}catch(__react_docgen_typescript_loader_error){}},"./src/common/components/PurePortal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>PureModal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,PureModal=function PureModal(_ref){var isShow=_ref.isShow,children=_ref.children,portalElement=document.getElementById("portal");return portalElement?(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(__jsx("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("fixed inset-0 z-30  items-center justify-center bg-gray-120/80",{hidden:!isShow,"flex animate-fade-in-back-drop":isShow})},children),portalElement):null};try{PureModal.displayName="PureModal",PureModal.__docgenInfo={description:"",displayName:"PureModal",props:{isShow:{defaultValue:null,description:"",name:"isShow",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/PurePortal/index.tsx#PureModal"]={docgenInfo:PureModal.__docgenInfo,name:"PureModal",path:"src/common/components/PurePortal/index.tsx#PureModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/common/components/QuizCard/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>QuizCard});var clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@7.0.26_@babel+core@7.22.8_esbuil_cuaaon3uehhffc3sn6grwbfbcu/node_modules/@storybook/nextjs/dist/images/next-image.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_common_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/constants/index.ts"),_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/common/components/Text/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,QuizCard=function QuizCard(_ref){var categoryTitle=_ref.categoryTitle,quizDescription=_ref.quizDescription,images=_ref.images,_ref$likeCount=_ref.likeCount,likeCount=void 0===_ref$likeCount?0:_ref$likeCount,_ref$commentCount=_ref.commentCount,commentCount=void 0===_ref$commentCount?0:_ref$commentCount,_ref$sizeType=_ref.sizeType,sizeType=void 0===_ref$sizeType?"large":_ref$sizeType,_ref$quizType=_ref.quizType,isSmall="small"===sizeType,isOX="ox"===(void 0===_ref$quizType?"default":_ref$quizType);return __jsx("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("flex w-full min-w-180px justify-between gap-20px rounded-12px bg-gray-110 px-16px py-20px",isSmall?"h-160px":"h-220px")},__jsx("div",{className:"flex w-full flex-1 flex-col"},__jsx(_Text__WEBPACK_IMPORTED_MODULE_3__.x,{className:"inline-block",typo:"captionBold",color:"primaryDefault"},categoryTitle),__jsx(_Text__WEBPACK_IMPORTED_MODULE_3__.x,{className:"inline-block pt-12px",typo:isSmall?"subheadingBold":"headingM",color:"gray10"},quizDescription),__jsx("div",{className:"mt-auto flex gap-8px"},__jsx(_Text__WEBPACK_IMPORTED_MODULE_3__.x,{typo:"caption",color:"gray50"},"🔥 참여 ",likeCount,"명"),__jsx(_Text__WEBPACK_IMPORTED_MODULE_3__.x,{typo:"caption",color:"gray50"},"💬 댓글 ",commentCount,"개"))),__jsx("div",{className:"flex w-full flex-1 flex-col justify-between overflow-hidden rounded-8px"},isOX?__jsx((function OxQuizThumbnail(){return isSmall?__jsx("div",{className:"flex h-full w-full rounded-8px"},__jsx("div",{className:"flex flex-1 items-center justify-center",style:{backgroundColor:"#3E97FF"}},__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,{src:_common_constants__WEBPACK_IMPORTED_MODULE_2__.R.O,alt:"OX 퀴즈 O",width:24,height:24})),__jsx("div",{className:"flex flex-1 items-center justify-center",style:{backgroundColor:"#FF5B65"}},__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,{src:_common_constants__WEBPACK_IMPORTED_MODULE_2__.R.X,alt:"OX 퀴즈 X",width:22,height:22}))):__jsx("div",{className:"flex h-full w-full flex-col gap-8px"},__jsx("div",{className:"relative flex flex-1 items-center justify-center rounded-8px",style:{backgroundColor:"#3E97FF"}},__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,{src:"https://toks-web-assets.s3.amazonaws.com/ic_O.svg",alt:"OX 퀴즈 O",width:38,height:38})),__jsx("div",{className:"relative flex flex-1 items-center justify-center rounded-8px",style:{backgroundColor:"#FF5B65"}},__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,{src:"https://toks-web-assets.s3.amazonaws.com/ic_X.svg",alt:"OX 퀴즈 X",width:36,height:36})))}),null):null==images?void 0:images.map((function(src,index){return __jsx("div",{className:"relative h-full",key:"".concat(src,"-").concat(index)},__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,{className:"flex-1",src,alt:src,loading:"lazy",layout:"fill",objectFit:"cover",objectPosition:"center",placeholder:"blur",blurDataURL:_common_constants__WEBPACK_IMPORTED_MODULE_2__.R.BLUR_BACKGROUND}))}))))};QuizCard.displayName="QuizCard",QuizCard.__docgenInfo={description:"",methods:[],displayName:"QuizCard",props:{likeCount:{defaultValue:{value:"0",computed:!1},required:!1},commentCount:{defaultValue:{value:"0",computed:!1},required:!1},sizeType:{defaultValue:{value:"'large'",computed:!1},required:!1},quizType:{defaultValue:{value:"'default'",computed:!1},required:!1}}};try{QuizCard.displayName="QuizCard",QuizCard.__docgenInfo={description:"",displayName:"QuizCard",props:{categoryTitle:{defaultValue:null,description:"",name:"categoryTitle",required:!0,type:{name:"string"}},quizDescription:{defaultValue:null,description:"",name:"quizDescription",required:!0,type:{name:"string"}},likeCount:{defaultValue:{value:"0"},description:"",name:"likeCount",required:!1,type:{name:"number"}},commentCount:{defaultValue:{value:"0"},description:"",name:"commentCount",required:!1,type:{name:"number"}},images:{defaultValue:null,description:"",name:"images",required:!1,type:{name:"string[]"}},sizeType:{defaultValue:{value:"large"},description:"",name:"sizeType",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'}]}},quizType:{defaultValue:{value:"default"},description:"",name:"quizType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"ox"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/QuizCard/index.tsx#QuizCard"]={docgenInfo:QuizCard.__docgenInfo,name:"QuizCard",path:"src/common/components/QuizCard/index.tsx#QuizCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/common/components/Text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _Users_chaerimkim_toks_web_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_chaerimkim_toks_web_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/common/index.ts"),_excluded=["color","children","typo","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function Text(_ref){var _ref$color=_ref.color,color=void 0===_ref$color?"white":_ref$color,children=_ref.children,typo=_ref.typo,className=_ref.className,rest=(0,_Users_chaerimkim_toks_web_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx("span",(0,_Users_chaerimkim_toks_web_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(_common__WEBPACK_IMPORTED_MODULE_1__.cp[typo],_common__WEBPACK_IMPORTED_MODULE_1__.zP[color],className)},rest),children)}Text.displayName="Text",Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{color:{defaultValue:{value:"'white'",computed:!1},required:!1,tsType:{name:"KeyOfColor"},description:""},typo:{required:!0,tsType:{name:"KeyOfTypography"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{color:{defaultValue:{value:"white"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"success"'},{value:'"transparent"'},{value:'"gray10"'},{value:'"gray20"'},{value:'"gray30"'},{value:'"gray40"'},{value:'"gray50"'},{value:'"gray60"'},{value:'"gray70"'},{value:'"gray80"'},{value:'"gray90"'},{value:'"gray100"'},{value:'"gray110"'},{value:'"gray120"'},{value:'"blue10"'},{value:'"dangerDefault"'},{value:'"dangerPress"'},{value:'"primaryDefault"'},{value:'"primaryPress"'}]}},typo:{defaultValue:null,description:"",name:"typo",required:!0,type:{name:"enum",value:[{value:'"headingL"'},{value:'"headingM"'},{value:'"subheading"'},{value:'"subheadingBold"'},{value:'"body"'},{value:'"bodyBold"'},{value:'"caption"'},{value:'"captionBold"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/Text/index.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/common/components/Text/index.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/common/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>ICON_URL});var ICON_URL={O:"https://toks-web-assets.s3.amazonaws.com/ic_O.svg",X:"https://toks-web-assets.s3.amazonaws.com/ic_X.svg",TOKS_LOGO:"https://toks-web-assets.s3.amazonaws.com/ic_toks_logo.svg",AVATAR_DEFAULT:"https://toks-web-assets.s3.amazonaws.com/ic_toks_avatar_default.svg",EMOJI_BASE_GRAY:"https://toks-web-assets.s3.amazonaws.com/emoji/ic_base-gray.svg",EMOJI_NINJA:"https://toks-web-assets.s3.amazonaws.com/emoji/ic_ninja.svg",EMOJI_DROOLING:"https://toks-web-assets.s3.amazonaws.com/emoji/ic_drooling.svg",THUMBS_UP:"https://toks-web-assets.s3.amazonaws.com/ic_thumbs-up.svg",THUMBS_UP_FILLED:"https://toks-web-assets.s3.amazonaws.com/ic_thumbs-up-filled.svg",CHEVRON_DOWN:"https://toks-web-assets.s3.amazonaws.com/chevron/ic_chevron-down.svg",CHEVRON_RIGHT:"https://toks-web-assets.s3.amazonaws.com/chevron/ic_chevron-right.svg",BLUR_BACKGROUND:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII=",DANGER:"https://toks-web-assets.s3.amazonaws.com/legacy/ic-danger.svg"}},"./src/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{zx:()=>Button,RH:()=>constants.R,II:()=>Input,Y3:()=>QuizCard.Y,OK:()=>Tab,xv:()=>Text.x,Um:()=>bgColor,cn:()=>cn,zP:()=>textColor,cp:()=>typography});var Text=__webpack_require__("./src/common/components/Text/index.tsx"),QuizCard=(__webpack_require__("./src/common/components/Appbar/index.tsx"),__webpack_require__("./src/common/components/QuizCard/index.tsx")),esm_extends=(__webpack_require__("./src/common/components/PurePortal/index.tsx"),__webpack_require__("./src/common/components/BottomSheet/index.tsx"),__webpack_require__("./src/common/components/Avatar/index.tsx"),__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js")),objectWithoutProperties=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),next_image=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@7.0.26_@babel+core@7.22.8_esbuil_cuaaon3uehhffc3sn6grwbfbcu/node_modules/@storybook/nextjs/dist/images/next-image.mjs"),PRESSED_BACKGROUND_BY_COLOR={gray20:"active:bg-gray-40",primaryDefault:"active:bg-primary-press",transparent:"active:bg-transparent"},ICON_BY_BUTTON_SIZE={S:16,M:24,L:24},HEIGHT_BY_BUTTON_SIZE={S:"h-32px",M:"h-40px",L:"h-48px"},PADDING_BY_BUTTON_SIZE={S:"px-12px",M:"px-16px",L:"px-16px"},GAP_BY_BUTTON_SIZE={S:"gap-4px",M:"gap-8px",L:"gap-8px"},_excluded=["iconName","className","textColor","backgroundColor","size","typo","iconPosition","disabled","children","aria-label"],__jsx=react.createElement;function Button(_ref){var iconName=_ref.iconName,className=_ref.className,_ref$textColor=_ref.textColor,textColor=void 0===_ref$textColor?"gray10":_ref$textColor,_ref$backgroundColor=_ref.backgroundColor,backgroundColor=void 0===_ref$backgroundColor?"transparent":_ref$backgroundColor,_ref$size=_ref.size,size=void 0===_ref$size?"S":_ref$size,_ref$typo=_ref.typo,typo=void 0===_ref$typo?"body":_ref$typo,_ref$iconPosition=_ref.iconPosition,iconPosition=void 0===_ref$iconPosition?"RIGHT":_ref$iconPosition,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,children=_ref.children,ariaLabel=_ref["aria-label"],rest=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx("button",(0,esm_extends.Z)({className:cn(className,HEIGHT_BY_BUTTON_SIZE[size],PADDING_BY_BUTTON_SIZE[size],GAP_BY_BUTTON_SIZE[size],bgColor[backgroundColor],disabled?"opacity-40":PRESSED_BACKGROUND_BY_COLOR[backgroundColor],"flex items-center justify-center rounded-8px"),"aria-label":ariaLabel,disabled},rest),iconName&&"LEFT"===iconPosition&&__jsx(next_image.Z,{width:ICON_BY_BUTTON_SIZE[size],height:ICON_BY_BUTTON_SIZE[size],src:constants.R[iconName],alt:"버튼 아이콘 입니다."}),__jsx(Text.x,{typo,color:textColor,"aria-hidden":Boolean(ariaLabel)},children),iconName&&"RIGHT"===iconPosition&&__jsx(next_image.Z,{width:ICON_BY_BUTTON_SIZE[size],height:ICON_BY_BUTTON_SIZE[size],src:constants.R[iconName],alt:"버튼 아이콘 입니다."}))}Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{textColor:{defaultValue:{value:"'gray10'",computed:!1},required:!1},backgroundColor:{defaultValue:{value:"'transparent'",computed:!1},required:!1},size:{defaultValue:{value:"'S'",computed:!1},required:!1},typo:{defaultValue:{value:"'body'",computed:!1},required:!1},iconPosition:{defaultValue:{value:"'RIGHT'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"O"'},{value:'"X"'},{value:'"TOKS_LOGO"'},{value:'"AVATAR_DEFAULT"'},{value:'"EMOJI_BASE_GRAY"'},{value:'"EMOJI_NINJA"'},{value:'"EMOJI_DROOLING"'},{value:'"THUMBS_UP"'},{value:'"THUMBS_UP_FILLED"'},{value:'"CHEVRON_DOWN"'},{value:'"CHEVRON_RIGHT"'},{value:'"BLUR_BACKGROUND"'},{value:'"DANGER"'}]}},size:{defaultValue:{value:"S"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"M"'},{value:'"S"'},{value:'"L"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:{value:"RIGHT"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"LEFT"'},{value:'"RIGHT"'}]}},textColor:{defaultValue:{value:"gray10"},description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"gray10"'},{value:'"gray110"'},{value:'"primaryDefault"'}]}},typo:{defaultValue:{value:"body"},description:"@Note 버튼의 사이즈가 S이면 body 이고\nM, L이면 subheading 입니다.\n배경이 있는 버튼의 경우 Bold를 붙여주세요.",name:"typo",required:!1,type:{name:"enum",value:[{value:'"subheading"'},{value:'"subheadingBold"'},{value:'"body"'},{value:'"bodyBold"'}]}},backgroundColor:{defaultValue:{value:"transparent"},description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"transparent"'},{value:'"gray20"'},{value:'"primaryDefault"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/common/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var clsx_m=__webpack_require__("./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),motion=__webpack_require__("./node_modules/.pnpm/framer-motion@10.12.22_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion.mjs"),Tab_jsx=react.createElement,Tab=function Tab(_ref){var tabs=_ref.tabs,activeIndex=_ref.activeIndex,onTabChange=_ref.onTabChange,childRef=(0,react.useRef)(new Map),tabListRef=(0,react.useRef)(null),_useState=(0,react.useState)({hasValue:!1,left:0,right:0}),sliderPosition=_useState[0],setSliderPosition=_useState[1];return(0,react.useEffect)((function(){var target=childRef.current.get(activeIndex),container=tabListRef.current;if(target){var containerRect=null==container?void 0:container.getBoundingClientRect();if(!containerRect||0===containerRect.width)return;var targetRect=target.getBoundingClientRect(),left=targetRect.left-containerRect.left,right=containerRect.right-targetRect.right;setSliderPosition({hasValue:!0,left:left+4,right:right+4})}}),[activeIndex]),Tab_jsx("div",{className:"overflow-y-hidden border-b-1px border-solid border-gray-90 shadow-none"},Tab_jsx("div",{className:"relative z-0 flex overflow-x-auto",ref:tabListRef},tabs.map((function(tab,index){var isSelected=activeIndex===index;return Tab_jsx(motion.E.button,{key:index,onClick:function onClick(){onTabChange(index)},className:(0,clsx_m.Z)("flex h-40px flex-1 items-center justify-center",{"text-primary-default":isSelected}),ref:function ref(_ref2){return childRef.current.set(index,_ref2)}},Tab_jsx(Text.x,{typo:isSelected?"bodyBold":"body",color:"white"},tab))})),sliderPosition.hasValue&&Tab_jsx(motion.E.div,{animate:{left:sliderPosition.left,right:sliderPosition.right},transition:{duration:.3},className:"absolute bottom-0 z-10 mx-2px h-2px bg-primary-default",initial:!1})))};Tab.displayName="Tab",Tab.__docgenInfo={description:"",methods:[],displayName:"Tab"};try{Tab.displayName="Tab",Tab.__docgenInfo={description:"",displayName:"Tab",props:{activeIndex:{defaultValue:null,description:"",name:"activeIndex",required:!0,type:{name:"number"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!0,type:{name:"(index: number) => void"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/Tab/index.tsx#Tab"]={docgenInfo:Tab.__docgenInfo,name:"Tab",path:"src/common/components/Tab/index.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}var Input_excluded=["label","name","errorMessage","onFocus","onBlur","suffix","className"],Input_jsx=react.createElement,Input=(0,react.forwardRef)((function(_ref,ref){var label=_ref.label,name=_ref.name,errorMessage=_ref.errorMessage,_onFocus=_ref.onFocus,_onBlur=_ref.onBlur,suffix=_ref.suffix,className=_ref.className,props=(0,objectWithoutProperties.Z)(_ref,Input_excluded),_useState=(0,react.useState)(!1),isFocus=_useState[0],setIsFocus=_useState[1];return Input_jsx("div",{className:cn("relative flex w-full flex-col gap-6px",className)},label&&Input_jsx("label",{htmlFor:name},Input_jsx(Text.x,{typo:"body",color:"white"},label)),Input_jsx("div",(0,esm_extends.Z)({className:cn("align-center flex h-48px rounded-8px border-none bg-gray-100 px-14px py-0","hover:border-2 hover:border-solid hover:border-white","placeholder:text-gray-70",typography.body,{"border-2 border-solid border-primary-default":isFocus,"border-2 border-solid border-danger-default":Boolean(errorMessage)})},props),Input_jsx("input",(0,esm_extends.Z)({className:"h-full w-full border-none bg-transparent text-white outline-none",autoComplete:"off",ref,id:name,name,onFocus:function onFocus(e){null==_onFocus||_onFocus(e),setIsFocus(!0)},onBlur:function onBlur(e){null==_onBlur||_onBlur(e),setIsFocus(!1)}},props)),suffix&&suffix,errorMessage&&Input_jsx(next_image.Z,{src:constants.R.DANGER,alt:"경고",width:22,height:22})),errorMessage&&Input_jsx(Text.x,{className:"absolute -bottom-20px whitespace-pre",typo:"caption",color:"dangerDefault"},errorMessage))}));Input.__docgenInfo={description:"",methods:[],displayName:"Input"};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/Input/index.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/common/components/Input/index.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}var swiper_react=__webpack_require__("./node_modules/.pnpm/swiper@10.0.4/node_modules/swiper/swiper-react.mjs"),QuizCarousel_jsx=(__webpack_require__("./node_modules/.pnpm/swiper@10.0.4/node_modules/swiper/swiper.css"),react.createElement);function QuizCarousel(_ref){var className=_ref.className;return QuizCarousel_jsx("div",{className},QuizCarousel_jsx(swiper_react.tq,(0,esm_extends.Z)({className:"!important -mx-20px px-20px"},{spaceBetween:8,slidesPerView:1.03}),QuizCarousel_jsx(swiper_react.o5,null,QuizCarousel_jsx(QuizCard.Y,{categoryTitle:"카테고리",quizDescription:"Title Text Title Text Title Text Title Text",images:["https://source.unsplash.com/random/?programming"],sizeType:"small",likeCount:10,commentCount:10})),QuizCarousel_jsx(swiper_react.o5,null,QuizCarousel_jsx(QuizCard.Y,{categoryTitle:"카테고리",quizDescription:"Title Text Title Text Title Text Title Text",images:["https://source.unsplash.com/random/?programming"],sizeType:"small",likeCount:10,commentCount:10})),QuizCarousel_jsx(swiper_react.o5,null,QuizCarousel_jsx(QuizCard.Y,{categoryTitle:"카테고리",quizDescription:"Title Text Title Text Title Text Title Text",images:["https://source.unsplash.com/random/?programming","https://source.unsplash.com/random/daily"],likeCount:10,commentCount:10,sizeType:"small",quizType:"ox"})),QuizCarousel_jsx(swiper_react.o5,null,QuizCarousel_jsx(QuizCard.Y,{categoryTitle:"카테고리",quizDescription:"Title Text Title Text Title Text Title Text",likeCount:10,commentCount:10,images:["https://source.unsplash.com/random/?programming"],sizeType:"small"})),QuizCarousel_jsx(swiper_react.o5,null,QuizCarousel_jsx(QuizCard.Y,{categoryTitle:"카테고리",quizDescription:"Title Text Title Text Title Text Title Text",likeCount:10,commentCount:10,quizType:"ox",sizeType:"small"}))))}QuizCarousel.displayName="QuizCarousel",QuizCarousel.__docgenInfo={description:"",methods:[],displayName:"QuizCarousel"};try{QuizCarousel.displayName="QuizCarousel",QuizCarousel.__docgenInfo={description:"",displayName:"QuizCarousel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/QuizCarousel/index.tsx#QuizCarousel"]={docgenInfo:QuizCarousel.__docgenInfo,name:"QuizCarousel",path:"src/common/components/QuizCarousel/index.tsx#QuizCarousel"})}catch(__react_docgen_typescript_loader_error){}var constants=__webpack_require__("./src/common/constants/index.ts"),bgColor={gray10:"bg-gray-10",gray20:"bg-gray-20",gray30:"bg-gray-30",gray40:"bg-gray-40",gray50:"bg-gray-50",gray60:"bg-gray-60",gray70:"bg-gray-70",gray80:"bg-gray-80",gray90:"bg-gray-90",gray100:"bg-gray-100",gray110:"bg-gray-110",gray120:"bg-gray-120",blue10:"bg-blue-10",white:"bg-white",success:"bg-success",dangerDefault:"bg-danger-default",dangerPress:"bg-danger-press",primaryDefault:"bg-primary-default",primaryPress:"bg-primary-press",transparent:"bg-transparent"},textColor={gray10:"text-gray-10",gray20:"text-gray-20",gray30:"text-gray-30",gray40:"text-gray-40",gray50:"text-gray-50",gray60:"text-gray-60",gray70:"text-gray-70",gray80:"text-gray-80",gray90:"text-gray-90",gray100:"text-gray-100",gray110:"text-gray-110",gray120:"text-gray-120",blue10:"text-blue-10",white:"text-white",success:"text-success",dangerDefault:"text-danger-default",dangerPress:"text-danger-press",primaryDefault:"text-primary-default",primaryPress:"text-primary-press",transparent:"text-transparent"},typography={headingL:"font-bold text-headingL leading-headingL",headingM:"font-bold text-headingM leading-headingM",subheading:"font-regular text-subheading leading-subheading",subheadingBold:"font-bold text-subheading leading-subheading",body:"font-regular text-body leading-body",bodyBold:"font-bold text-body leading-body",caption:"font-regular text-caption leading-caption",captionBold:"font-bold text-caption leading-caption"},tw_merge=__webpack_require__("./node_modules/.pnpm/tailwind-merge@1.14.0/node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),cn=function cn(){for(var _len=arguments.length,classes=new Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return(0,tw_merge.m)((0,clsx_m.W)(classes))}}}]);