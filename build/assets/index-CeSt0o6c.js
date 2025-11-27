(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Uh={exports:{}},Sa={},jh={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function nw(){if(Vm)return Re;Vm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.iterator;function C(O){return O===null||typeof O!="object"?null:(O=A&&O[A]||O["@@iterator"],typeof O=="function"?O:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,X={};function q(O,H,Se){this.props=O,this.context=H,this.refs=X,this.updater=Se||z}q.prototype.isReactComponent={},q.prototype.setState=function(O,H){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,H,"setState")},q.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ne(){}ne.prototype=q.prototype;function ie(O,H,Se){this.props=O,this.context=H,this.refs=X,this.updater=Se||z}var ee=ie.prototype=new ne;ee.constructor=ie,Q(ee,q.prototype),ee.isPureReactComponent=!0;var fe=Array.isArray,le=Object.prototype.hasOwnProperty,ye={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(O,H,Se){var Ae,Ce={},ke=null,Fe=null;if(H!=null)for(Ae in H.ref!==void 0&&(Fe=H.ref),H.key!==void 0&&(ke=""+H.key),H)le.call(H,Ae)&&!P.hasOwnProperty(Ae)&&(Ce[Ae]=H[Ae]);var Oe=arguments.length-2;if(Oe===1)Ce.children=Se;else if(1<Oe){for(var Be=Array(Oe),jt=0;jt<Oe;jt++)Be[jt]=arguments[jt+2];Ce.children=Be}if(O&&O.defaultProps)for(Ae in Oe=O.defaultProps,Oe)Ce[Ae]===void 0&&(Ce[Ae]=Oe[Ae]);return{$$typeof:i,type:O,key:ke,ref:Fe,props:Ce,_owner:ye.current}}function R(O,H){return{$$typeof:i,type:O.type,key:H,ref:O.ref,props:O.props,_owner:O._owner}}function D(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function N(O){var H={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Se){return H[Se]})}var V=/\/+/g;function S(O,H){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):H.toString(36)}function qe(O,H,Se,Ae,Ce){var ke=typeof O;(ke==="undefined"||ke==="boolean")&&(O=null);var Fe=!1;if(O===null)Fe=!0;else switch(ke){case"string":case"number":Fe=!0;break;case"object":switch(O.$$typeof){case i:case e:Fe=!0}}if(Fe)return Fe=O,Ce=Ce(Fe),O=Ae===""?"."+S(Fe,0):Ae,fe(Ce)?(Se="",O!=null&&(Se=O.replace(V,"$&/")+"/"),qe(Ce,H,Se,"",function(jt){return jt})):Ce!=null&&(D(Ce)&&(Ce=R(Ce,Se+(!Ce.key||Fe&&Fe.key===Ce.key?"":(""+Ce.key).replace(V,"$&/")+"/")+O)),H.push(Ce)),1;if(Fe=0,Ae=Ae===""?".":Ae+":",fe(O))for(var Oe=0;Oe<O.length;Oe++){ke=O[Oe];var Be=Ae+S(ke,Oe);Fe+=qe(ke,H,Se,Be,Ce)}else if(Be=C(O),typeof Be=="function")for(O=Be.call(O),Oe=0;!(ke=O.next()).done;)ke=ke.value,Be=Ae+S(ke,Oe++),Fe+=qe(ke,H,Se,Be,Ce);else if(ke==="object")throw H=String(O),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Fe}function _t(O,H,Se){if(O==null)return O;var Ae=[],Ce=0;return qe(O,Ae,"","",function(ke){return H.call(Se,ke,Ce++)}),Ae}function Nt(O){if(O._status===-1){var H=O._result;H=H(),H.then(function(Se){(O._status===0||O._status===-1)&&(O._status=1,O._result=Se)},function(Se){(O._status===0||O._status===-1)&&(O._status=2,O._result=Se)}),O._status===-1&&(O._status=0,O._result=H)}if(O._status===1)return O._result.default;throw O._result}var Ye={current:null},Z={transition:null},pe={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:Z,ReactCurrentOwner:ye};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:_t,forEach:function(O,H,Se){_t(O,function(){H.apply(this,arguments)},Se)},count:function(O){var H=0;return _t(O,function(){H++}),H},toArray:function(O){return _t(O,function(H){return H})||[]},only:function(O){if(!D(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=q,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=ie,Re.StrictMode=s,Re.Suspense=y,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Re.act=oe,Re.cloneElement=function(O,H,Se){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ae=Q({},O.props),Ce=O.key,ke=O.ref,Fe=O._owner;if(H!=null){if(H.ref!==void 0&&(ke=H.ref,Fe=ye.current),H.key!==void 0&&(Ce=""+H.key),O.type&&O.type.defaultProps)var Oe=O.type.defaultProps;for(Be in H)le.call(H,Be)&&!P.hasOwnProperty(Be)&&(Ae[Be]=H[Be]===void 0&&Oe!==void 0?Oe[Be]:H[Be])}var Be=arguments.length-2;if(Be===1)Ae.children=Se;else if(1<Be){Oe=Array(Be);for(var jt=0;jt<Be;jt++)Oe[jt]=arguments[jt+2];Ae.children=Oe}return{$$typeof:i,type:O.type,key:Ce,ref:ke,props:Ae,_owner:Fe}},Re.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Re.createElement=I,Re.createFactory=function(O){var H=I.bind(null,O);return H.type=O,H},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:m,render:O}},Re.isValidElement=D,Re.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:Nt}},Re.memo=function(O,H){return{$$typeof:_,type:O,compare:H===void 0?null:H}},Re.startTransition=function(O){var H=Z.transition;Z.transition={};try{O()}finally{Z.transition=H}},Re.unstable_act=oe,Re.useCallback=function(O,H){return Ye.current.useCallback(O,H)},Re.useContext=function(O){return Ye.current.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O){return Ye.current.useDeferredValue(O)},Re.useEffect=function(O,H){return Ye.current.useEffect(O,H)},Re.useId=function(){return Ye.current.useId()},Re.useImperativeHandle=function(O,H,Se){return Ye.current.useImperativeHandle(O,H,Se)},Re.useInsertionEffect=function(O,H){return Ye.current.useInsertionEffect(O,H)},Re.useLayoutEffect=function(O,H){return Ye.current.useLayoutEffect(O,H)},Re.useMemo=function(O,H){return Ye.current.useMemo(O,H)},Re.useReducer=function(O,H,Se){return Ye.current.useReducer(O,H,Se)},Re.useRef=function(O){return Ye.current.useRef(O)},Re.useState=function(O){return Ye.current.useState(O)},Re.useSyncExternalStore=function(O,H,Se){return Ye.current.useSyncExternalStore(O,H,Se)},Re.useTransition=function(){return Ye.current.useTransition()},Re.version="18.3.1",Re}var Om;function Pd(){return Om||(Om=1,jh.exports=nw()),jh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function rw(){if(Mm)return Sa;Mm=1;var i=Pd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,_){var E,A={},C=null,z=null;_!==void 0&&(C=""+_),y.key!==void 0&&(C=""+y.key),y.ref!==void 0&&(z=y.ref);for(E in y)s.call(y,E)&&!u.hasOwnProperty(E)&&(A[E]=y[E]);if(m&&m.defaultProps)for(E in y=m.defaultProps,y)A[E]===void 0&&(A[E]=y[E]);return{$$typeof:e,type:m,key:C,ref:z,props:A,_owner:o.current}}return Sa.Fragment=t,Sa.jsx=h,Sa.jsxs=h,Sa}var Lm;function iw(){return Lm||(Lm=1,Uh.exports=rw()),Uh.exports}var L=iw(),gu={},zh={exports:{}},Kt={},Bh={exports:{}},$h={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function sw(){return bm||(bm=1,(function(i){function e(Z,pe){var oe=Z.length;Z.push(pe);e:for(;0<oe;){var O=oe-1>>>1,H=Z[O];if(0<o(H,pe))Z[O]=pe,Z[oe]=H,oe=O;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var pe=Z[0],oe=Z.pop();if(oe!==pe){Z[0]=oe;e:for(var O=0,H=Z.length,Se=H>>>1;O<Se;){var Ae=2*(O+1)-1,Ce=Z[Ae],ke=Ae+1,Fe=Z[ke];if(0>o(Ce,oe))ke<H&&0>o(Fe,Ce)?(Z[O]=Fe,Z[ke]=oe,O=ke):(Z[O]=Ce,Z[Ae]=oe,O=Ae);else if(ke<H&&0>o(Fe,oe))Z[O]=Fe,Z[ke]=oe,O=ke;else break e}}return pe}function o(Z,pe){var oe=Z.sortIndex-pe.sortIndex;return oe!==0?oe:Z.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],_=[],E=1,A=null,C=3,z=!1,Q=!1,X=!1,q=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(Z){for(var pe=t(_);pe!==null;){if(pe.callback===null)s(_);else if(pe.startTime<=Z)s(_),pe.sortIndex=pe.expirationTime,e(y,pe);else break;pe=t(_)}}function fe(Z){if(X=!1,ee(Z),!Q)if(t(y)!==null)Q=!0,Nt(le);else{var pe=t(_);pe!==null&&Ye(fe,pe.startTime-Z)}}function le(Z,pe){Q=!1,X&&(X=!1,ne(I),I=-1),z=!0;var oe=C;try{for(ee(pe),A=t(y);A!==null&&(!(A.expirationTime>pe)||Z&&!N());){var O=A.callback;if(typeof O=="function"){A.callback=null,C=A.priorityLevel;var H=O(A.expirationTime<=pe);pe=i.unstable_now(),typeof H=="function"?A.callback=H:A===t(y)&&s(y),ee(pe)}else s(y);A=t(y)}if(A!==null)var Se=!0;else{var Ae=t(_);Ae!==null&&Ye(fe,Ae.startTime-pe),Se=!1}return Se}finally{A=null,C=oe,z=!1}}var ye=!1,P=null,I=-1,R=5,D=-1;function N(){return!(i.unstable_now()-D<R)}function V(){if(P!==null){var Z=i.unstable_now();D=Z;var pe=!0;try{pe=P(!0,Z)}finally{pe?S():(ye=!1,P=null)}}else ye=!1}var S;if(typeof ie=="function")S=function(){ie(V)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,_t=qe.port2;qe.port1.onmessage=V,S=function(){_t.postMessage(null)}}else S=function(){q(V,0)};function Nt(Z){P=Z,ye||(ye=!0,S())}function Ye(Z,pe){I=q(function(){Z(i.unstable_now())},pe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){Q||z||(Q=!0,Nt(le))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(Z){switch(C){case 1:case 2:case 3:var pe=3;break;default:pe=C}var oe=C;C=pe;try{return Z()}finally{C=oe}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,pe){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var oe=C;C=Z;try{return pe()}finally{C=oe}},i.unstable_scheduleCallback=function(Z,pe,oe){var O=i.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?O+oe:O):oe=O,Z){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=oe+H,Z={id:E++,callback:pe,priorityLevel:Z,startTime:oe,expirationTime:H,sortIndex:-1},oe>O?(Z.sortIndex=oe,e(_,Z),t(y)===null&&Z===t(_)&&(X?(ne(I),I=-1):X=!0,Ye(fe,oe-O))):(Z.sortIndex=H,e(y,Z),Q||z||(Q=!0,Nt(le))),Z},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(Z){var pe=C;return function(){var oe=C;C=pe;try{return Z.apply(this,arguments)}finally{C=oe}}}})($h)),$h}var Fm;function ow(){return Fm||(Fm=1,Bh.exports=sw()),Bh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function aw(){if(Um)return Kt;Um=1;var i=Pd(),e=ow();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},A={};function C(n){return y.call(A,n)?!0:y.call(E,n)?!1:_.test(n)?A[n]=!0:(E[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Q(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(n,r,a,c,d,f,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=v}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){q[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];q[r]=new X(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){q[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){q[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){q[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){q[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){q[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){q[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){q[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var ne=/[\-:]([a-z])/g;function ie(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ne,ie);q[r]=new X(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ne,ie);q[r]=new X(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ne,ie);q[r]=new X(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){q[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),q.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){q[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function ee(n,r,a,c){var d=q.hasOwnProperty(r)?q[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Q(r,a,d,c)&&(a=null),c||d===null?C(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var fe=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,le=Symbol.for("react.element"),ye=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),N=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Ye=Symbol.for("react.offscreen"),Z=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,O;function H(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var Se=!1;function Ae(n,r){if(!n||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,T=f.length-1;1<=v&&0<=T&&d[v]!==f[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==f[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==f[T]){var k=`
`+d[v].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=v&&0<=T);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Ce(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function ke(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case ye:return"Portal";case R:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case qe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case V:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _t:return r=n.displayName||null,r!==null?r:ke(n.type)||"Memo";case Nt:r=n._payload,n=n._init;try{return ke(n(r))}catch{}}return null}function Fe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function jt(n){var r=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ps(n){n._valueTracker||(n._valueTracker=jt(n))}function No(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Dr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ms(n,r){var a=r.checked;return oe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function tl(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Oe(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function gs(n,r){r=r.checked,r!=null&&ee(n,"checked",r,!1)}function Ri(n,r){gs(n,r);var a=Oe(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ut(n,r.type,a):r.hasOwnProperty("defaultValue")&&ut(n,r.type,Oe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function xo(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ut(n,r,a){(r!=="number"||Dr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var it=Array.isArray;function yn(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Oe(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Do(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Vo(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(it(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Oe(a)}}function nl(n,r){var a=Oe(r.value),c=Oe(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Vr(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Oo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ys(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Oo(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Or,rl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Or=Or||document.createElement("div"),Or.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Or.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ci(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},il=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(n){il.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Mr[r]=Mr[n]})});function Lr(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Mr.hasOwnProperty(n)&&Mr[n]?(""+r).trim():r+"px"}function _s(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Lr(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Mo=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _n(n,r){if(r){if(Mo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function vs(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var br=null;function ws(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var sr=null,or=null,nt=null;function Lo(n){if(n=ua(n)){if(typeof sr!="function")throw Error(t(280));var r=n.stateNode;r&&(r=xl(r),sr(n.stateNode,n.type,r))}}function Fr(n){or?nt?nt.push(n):nt=[n]:or=n}function Ur(){if(or){var n=or,r=nt;if(nt=or=null,Lo(n),r)for(n=0;n<r.length;n++)Lo(r[n])}}function sl(n,r){return n(r)}function ol(){}var xn=!1;function al(n,r,a){if(xn)return n(r,a);xn=!0;try{return sl(n,r,a)}finally{xn=!1,(or!==null||nt!==null)&&(ol(),Ur())}}function ki(n,r){var a=n.stateNode;if(a===null)return null;var c=xl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var jr=!1;if(m)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){jr=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{jr=!1}function ll(n,r,a,c,d,f,v,T,k){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(G){this.onError(G)}}var ar=!1,Dn=null,Es=!1,an=null,ul={onError:function(n){ar=!0,Dn=n}};function cl(n,r,a,c,d,f,v,T,k){ar=!1,Dn=null,ll.apply(ul,arguments)}function bo(n,r,a,c,d,f,v,T,k){if(cl.apply(this,arguments),ar){if(ar){var U=Dn;ar=!1,Dn=null}else throw Error(t(198));Es||(Es=!0,an=U)}}function vn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Fo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function hl(n){if(vn(n)!==n)throw Error(t(188))}function dl(n){var r=n.alternate;if(!r){if(r=vn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return hl(d),n;if(f===c)return hl(d),r;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,T=d.child;T;){if(T===a){v=!0,a=d,c=f;break}if(T===c){v=!0,c=d,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,c=d;break}if(T===c){v=!0,c=f,a=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function fl(n){return n=dl(n),n!==null?Pi(n):null}function Pi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Pi(n);if(r!==null)return r;n=n.sibling}return null}var Uo=e.unstable_scheduleCallback,Ts=e.unstable_cancelCallback,Ni=e.unstable_shouldYield,lr=e.unstable_requestPaint,Ge=e.unstable_now,gc=e.unstable_getCurrentPriorityLevel,Is=e.unstable_ImmediatePriority,jo=e.unstable_UserBlockingPriority,xi=e.unstable_NormalPriority,zo=e.unstable_LowPriority,Ss=e.unstable_IdlePriority,Di=null,Xt=null;function pl(n){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Di,n,void 0,(n.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:Vi,Vn=Math.log,ln=Math.LN2;function Vi(n){return n>>>=0,n===0?32:31-(Vn(n)/ln|0)|0}var On=64,Br=4194304;function be(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ur(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~d;T!==0?c=be(T):(f&=v,f!==0&&(c=be(f)))}else v=a&~d,v!==0?c=be(v):f!==0&&(c=be(f));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Yt(r),d=1<<a,c|=n[a],r&=~d;return c}function Oi(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mi(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-Yt(f),T=1<<v,k=d[v];k===-1?((T&a)===0||(T&c)!==0)&&(d[v]=Oi(T,r)):k<=r&&(n.expiredLanes|=T),f&=~T}}function Bo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function $o(){var n=On;return On<<=1,(On&4194240)===0&&(On=64),n}function qo(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Li(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Yt(r),n[r]=a}function yc(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Yt(a),f=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function Ho(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Yt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var De=0;function Mn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Wo,As,Go,Ko,Qo,Ln=!1,Rs=[],bn=null,Fn=null,It=null,bi=new Map,cr=new Map,Jt=[],ml="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $r(n,r){switch(n){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":bi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(r.pointerId)}}function wn(n,r,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},r!==null&&(r=ua(r),r!==null&&As(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function gl(n,r,a,c,d){switch(r){case"focusin":return bn=wn(bn,n,r,a,c,d),!0;case"dragenter":return Fn=wn(Fn,n,r,a,c,d),!0;case"mouseover":return It=wn(It,n,r,a,c,d),!0;case"pointerover":var f=d.pointerId;return bi.set(f,wn(bi.get(f)||null,n,r,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,cr.set(f,wn(cr.get(f)||null,n,r,a,c,d)),!0}return!1}function Cs(n){var r=zi(n.target);if(r!==null){var a=vn(r);if(a!==null){if(r=a.tag,r===13){if(r=Fo(a),r!==null){n.blockedOn=r,Qo(n.priority,function(){Go(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $e(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ks(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);br=c,a.target.dispatchEvent(c),br=null}else return r=ua(a),r!==null&&As(r),n.blockedOn=a,!1;r.shift()}return!0}function yl(n,r,a){$e(n)&&a.delete(r)}function _c(){Ln=!1,bn!==null&&$e(bn)&&(bn=null),Fn!==null&&$e(Fn)&&(Fn=null),It!==null&&$e(It)&&(It=null),bi.forEach(yl),cr.forEach(yl)}function qr(n,r){n.blockedOn===r&&(n.blockedOn=null,Ln||(Ln=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,_c)))}function Hr(n){function r(d){return qr(d,n)}if(0<Rs.length){qr(Rs[0],n);for(var a=1;a<Rs.length;a++){var c=Rs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(bn!==null&&qr(bn,n),Fn!==null&&qr(Fn,n),It!==null&&qr(It,n),bi.forEach(r),cr.forEach(r),a=0;a<Jt.length;a++)c=Jt[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Jt.length&&(a=Jt[0],a.blockedOn===null);)Cs(a),a.blockedOn===null&&Jt.shift()}var hr=fe.ReactCurrentBatchConfig,dr=!0;function Un(n,r,a,c){var d=De,f=hr.transition;hr.transition=null;try{De=1,Xo(n,r,a,c)}finally{De=d,hr.transition=f}}function _l(n,r,a,c){var d=De,f=hr.transition;hr.transition=null;try{De=4,Xo(n,r,a,c)}finally{De=d,hr.transition=f}}function Xo(n,r,a,c){if(dr){var d=ks(n,r,a,c);if(d===null)Pc(n,r,c,jn,a),$r(n,c);else if(gl(d,n,r,a,c))c.stopPropagation();else if($r(n,c),r&4&&-1<ml.indexOf(n)){for(;d!==null;){var f=ua(d);if(f!==null&&Wo(f),f=ks(n,r,a,c),f===null&&Pc(n,r,c,jn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Pc(n,r,c,null,a)}}var jn=null;function ks(n,r,a,c){if(jn=null,n=ws(c),n=zi(n),n!==null)if(r=vn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Fo(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return jn=n,null}function Ps(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gc()){case Is:return 1;case jo:return 4;case xi:case zo:return 16;case Ss:return 536870912;default:return 16}default:return 16}}var Zt=null,Ns=null,fr=null;function vl(){if(fr)return fr;var n,r=Ns,a=r.length,c,d="value"in Zt?Zt.value:Zt.textContent,f=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[f-c];c++);return fr=d.slice(n,1<c?1-c:void 0)}function Fi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function zn(){return!0}function Yo(){return!1}function xt(n){function r(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?zn:Yo,this.isPropagationStopped=Yo,this}return oe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zn)},persist:function(){},isPersistent:zn}),r}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ui=xt(Bn),Wr=oe({},Bn,{view:0,detail:0}),xs=xt(Wr),Ds,Vs,en,ji=oe({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Te,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==en&&(en&&n.type==="mousemove"?(Ds=n.screenX-en.screenX,Vs=n.screenY-en.screenY):Vs=Ds=0,en=n),Ds)},movementY:function(n){return"movementY"in n?n.movementY:Vs}}),Jo=xt(ji),wl=oe({},ji,{dataTransfer:0}),El=xt(wl),Os=oe({},Wr,{relatedTarget:0}),St=xt(Os),Tl=oe({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Il=xt(Tl),Gr=oe({},Bn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=xt(Gr),p=oe({},Bn,{data:0}),g=xt(p),w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=j[n])?!!r[n]:!1}function Te(){return J}var st=oe({},Wr,{key:function(n){if(n.key){var r=w[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Fi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?b[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Te,charCode:function(n){return n.type==="keypress"?Fi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),je=xt(st),ct=oe({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tn=xt(ct),pr=oe({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Te}),$n=xt(pr),qn=oe({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ms=xt(qn),Zo=oe({},ji,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=xt(Zo),Yv=[9,13,27,32],vc=m&&"CompositionEvent"in window,ea=null;m&&"documentMode"in document&&(ea=document.documentMode);var Jv=m&&"TextEvent"in window&&!ea,Af=m&&(!vc||ea&&8<ea&&11>=ea),Rf=" ",Cf=!1;function kf(n,r){switch(n){case"keyup":return Yv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function Zv(n,r){switch(n){case"compositionend":return Pf(r);case"keypress":return r.which!==32?null:(Cf=!0,Rf);case"textInput":return n=r.data,n===Rf&&Cf?null:n;default:return null}}function e0(n,r){if(Ls)return n==="compositionend"||!vc&&kf(n,r)?(n=vl(),fr=Ns=Zt=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Af&&r.locale!=="ko"?null:r.data;default:return null}}var t0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!t0[n.type]:r==="textarea"}function xf(n,r,a,c){Fr(c),r=kl(r,"onChange"),0<r.length&&(a=new Ui("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var ta=null,na=null;function n0(n){Qf(n,0)}function Sl(n){var r=zs(n);if(No(r))return n}function r0(n,r){if(n==="change")return r}var Df=!1;if(m){var wc;if(m){var Ec="oninput"in document;if(!Ec){var Vf=document.createElement("div");Vf.setAttribute("oninput","return;"),Ec=typeof Vf.oninput=="function"}wc=Ec}else wc=!1;Df=wc&&(!document.documentMode||9<document.documentMode)}function Of(){ta&&(ta.detachEvent("onpropertychange",Mf),na=ta=null)}function Mf(n){if(n.propertyName==="value"&&Sl(na)){var r=[];xf(r,na,n,ws(n)),al(n0,r)}}function i0(n,r,a){n==="focusin"?(Of(),ta=r,na=a,ta.attachEvent("onpropertychange",Mf)):n==="focusout"&&Of()}function s0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Sl(na)}function o0(n,r){if(n==="click")return Sl(r)}function a0(n,r){if(n==="input"||n==="change")return Sl(r)}function l0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var En=typeof Object.is=="function"?Object.is:l0;function ra(n,r){if(En(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!En(n[d],r[d]))return!1}return!0}function Lf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bf(n,r){var a=Lf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lf(a)}}function Ff(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Ff(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Uf(){for(var n=window,r=Dr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Dr(n.document)}return r}function Tc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function u0(n){var r=Uf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Ff(a.ownerDocument.documentElement,a)){if(c!==null&&Tc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=bf(a,f);var v=bf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var c0=m&&"documentMode"in document&&11>=document.documentMode,bs=null,Ic=null,ia=null,Sc=!1;function jf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Sc||bs==null||bs!==Dr(c)||(c=bs,"selectionStart"in c&&Tc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ia&&ra(ia,c)||(ia=c,c=kl(Ic,"onSelect"),0<c.length&&(r=new Ui("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=bs)))}function Al(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Fs={animationend:Al("Animation","AnimationEnd"),animationiteration:Al("Animation","AnimationIteration"),animationstart:Al("Animation","AnimationStart"),transitionend:Al("Transition","TransitionEnd")},Ac={},zf={};m&&(zf=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Rl(n){if(Ac[n])return Ac[n];if(!Fs[n])return n;var r=Fs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in zf)return Ac[n]=r[a];return n}var Bf=Rl("animationend"),$f=Rl("animationiteration"),qf=Rl("animationstart"),Hf=Rl("transitionend"),Wf=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(n,r){Wf.set(n,r),u(r,[n])}for(var Rc=0;Rc<Gf.length;Rc++){var Cc=Gf[Rc],h0=Cc.toLowerCase(),d0=Cc[0].toUpperCase()+Cc.slice(1);Kr(h0,"on"+d0)}Kr(Bf,"onAnimationEnd"),Kr($f,"onAnimationIteration"),Kr(qf,"onAnimationStart"),Kr("dblclick","onDoubleClick"),Kr("focusin","onFocus"),Kr("focusout","onBlur"),Kr(Hf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f0=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Kf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,bo(c,r,void 0,n),n.currentTarget=null}function Qf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(r)for(var v=c.length-1;0<=v;v--){var T=c[v],k=T.instance,U=T.currentTarget;if(T=T.listener,k!==f&&d.isPropagationStopped())break e;Kf(d,T,U),f=k}else for(v=0;v<c.length;v++){if(T=c[v],k=T.instance,U=T.currentTarget,T=T.listener,k!==f&&d.isPropagationStopped())break e;Kf(d,T,U),f=k}}}if(Es)throw n=an,Es=!1,an=null,n}function Ke(n,r){var a=r[Mc];a===void 0&&(a=r[Mc]=new Set);var c=n+"__bubble";a.has(c)||(Xf(r,n,2,!1),a.add(c))}function kc(n,r,a){var c=0;r&&(c|=4),Xf(a,n,c,r)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function oa(n){if(!n[Cl]){n[Cl]=!0,s.forEach(function(a){a!=="selectionchange"&&(f0.has(a)||kc(a,!1,n),kc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Cl]||(r[Cl]=!0,kc("selectionchange",!1,r))}}function Xf(n,r,a,c){switch(Ps(r)){case 1:var d=Un;break;case 4:d=_l;break;default:d=Xo}a=d.bind(null,r,a,n),d=void 0,!jr||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Pc(n,r,a,c,d){var f=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;v=v.return}for(;T!==null;){if(v=zi(T),v===null)return;if(k=v.tag,k===5||k===6){c=f=v;continue e}T=T.parentNode}}c=c.return}al(function(){var U=f,G=ws(a),K=[];e:{var W=Wf.get(n);if(W!==void 0){var re=Ui,ue=n;switch(n){case"keypress":if(Fi(a)===0)break e;case"keydown":case"keyup":re=je;break;case"focusin":ue="focus",re=St;break;case"focusout":ue="blur",re=St;break;case"beforeblur":case"afterblur":re=St;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=El;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=$n;break;case Bf:case $f:case qf:re=Il;break;case Hf:re=Ms;break;case"scroll":re=xs;break;case"wheel":re=Xv;break;case"copy":case"cut":case"paste":re=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=tn}var ce=(r&4)!==0,ot=!ce&&n==="scroll",M=ce?W!==null?W+"Capture":null:W;ce=[];for(var x=U,F;x!==null;){F=x;var Y=F.stateNode;if(F.tag===5&&Y!==null&&(F=Y,M!==null&&(Y=ki(x,M),Y!=null&&ce.push(aa(x,Y,F)))),ot)break;x=x.return}0<ce.length&&(W=new re(W,ue,null,a,G),K.push({event:W,listeners:ce}))}}if((r&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",W&&a!==br&&(ue=a.relatedTarget||a.fromElement)&&(zi(ue)||ue[mr]))break e;if((re||W)&&(W=G.window===G?G:(W=G.ownerDocument)?W.defaultView||W.parentWindow:window,re?(ue=a.relatedTarget||a.toElement,re=U,ue=ue?zi(ue):null,ue!==null&&(ot=vn(ue),ue!==ot||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(re=null,ue=U),re!==ue)){if(ce=Jo,Y="onMouseLeave",M="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(ce=tn,Y="onPointerLeave",M="onPointerEnter",x="pointer"),ot=re==null?W:zs(re),F=ue==null?W:zs(ue),W=new ce(Y,x+"leave",re,a,G),W.target=ot,W.relatedTarget=F,Y=null,zi(G)===U&&(ce=new ce(M,x+"enter",ue,a,G),ce.target=F,ce.relatedTarget=ot,Y=ce),ot=Y,re&&ue)t:{for(ce=re,M=ue,x=0,F=ce;F;F=Us(F))x++;for(F=0,Y=M;Y;Y=Us(Y))F++;for(;0<x-F;)ce=Us(ce),x--;for(;0<F-x;)M=Us(M),F--;for(;x--;){if(ce===M||M!==null&&ce===M.alternate)break t;ce=Us(ce),M=Us(M)}ce=null}else ce=null;re!==null&&Yf(K,W,re,ce,!1),ue!==null&&ot!==null&&Yf(K,ot,ue,ce,!0)}}e:{if(W=U?zs(U):window,re=W.nodeName&&W.nodeName.toLowerCase(),re==="select"||re==="input"&&W.type==="file")var he=r0;else if(Nf(W))if(Df)he=a0;else{he=s0;var me=i0}else(re=W.nodeName)&&re.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(he=o0);if(he&&(he=he(n,U))){xf(K,he,a,G);break e}me&&me(n,W,U),n==="focusout"&&(me=W._wrapperState)&&me.controlled&&W.type==="number"&&ut(W,"number",W.value)}switch(me=U?zs(U):window,n){case"focusin":(Nf(me)||me.contentEditable==="true")&&(bs=me,Ic=U,ia=null);break;case"focusout":ia=Ic=bs=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,jf(K,a,G);break;case"selectionchange":if(c0)break;case"keydown":case"keyup":jf(K,a,G)}var ge;if(vc)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Ls?kf(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Af&&a.locale!=="ko"&&(Ls||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ls&&(ge=vl()):(Zt=G,Ns="value"in Zt?Zt.value:Zt.textContent,Ls=!0)),me=kl(U,ve),0<me.length&&(ve=new g(ve,n,null,a,G),K.push({event:ve,listeners:me}),ge?ve.data=ge:(ge=Pf(a),ge!==null&&(ve.data=ge)))),(ge=Jv?Zv(n,a):e0(n,a))&&(U=kl(U,"onBeforeInput"),0<U.length&&(G=new g("onBeforeInput","beforeinput",null,a,G),K.push({event:G,listeners:U}),G.data=ge))}Qf(K,r)})}function aa(n,r,a){return{instance:n,listener:r,currentTarget:a}}function kl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=ki(n,a),f!=null&&c.unshift(aa(n,f,d)),f=ki(n,r),f!=null&&c.push(aa(n,f,d))),n=n.return}return c}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Yf(n,r,a,c,d){for(var f=r._reactName,v=[];a!==null&&a!==c;){var T=a,k=T.alternate,U=T.stateNode;if(k!==null&&k===c)break;T.tag===5&&U!==null&&(T=U,d?(k=ki(a,f),k!=null&&v.unshift(aa(a,k,T))):d||(k=ki(a,f),k!=null&&v.push(aa(a,k,T)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var p0=/\r\n?/g,m0=/\u0000|\uFFFD/g;function Jf(n){return(typeof n=="string"?n:""+n).replace(p0,`
`).replace(m0,"")}function Pl(n,r,a){if(r=Jf(r),Jf(n)!==r&&a)throw Error(t(425))}function Nl(){}var Nc=null,xc=null;function Dc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Vc=typeof setTimeout=="function"?setTimeout:void 0,g0=typeof clearTimeout=="function"?clearTimeout:void 0,Zf=typeof Promise=="function"?Promise:void 0,y0=typeof queueMicrotask=="function"?queueMicrotask:typeof Zf<"u"?function(n){return Zf.resolve(null).then(n).catch(_0)}:Vc;function _0(n){setTimeout(function(){throw n})}function Oc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Hr(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Hr(r)}function Qr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function ep(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var js=Math.random().toString(36).slice(2),Hn="__reactFiber$"+js,la="__reactProps$"+js,mr="__reactContainer$"+js,Mc="__reactEvents$"+js,v0="__reactListeners$"+js,w0="__reactHandles$"+js;function zi(n){var r=n[Hn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[mr]||a[Hn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=ep(n);n!==null;){if(a=n[Hn])return a;n=ep(n)}return r}n=a,a=n.parentNode}return null}function ua(n){return n=n[Hn]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function xl(n){return n[la]||null}var Lc=[],Bs=-1;function Xr(n){return{current:n}}function Qe(n){0>Bs||(n.current=Lc[Bs],Lc[Bs]=null,Bs--)}function He(n,r){Bs++,Lc[Bs]=n.current,n.current=r}var Yr={},Dt=Xr(Yr),$t=Xr(!1),Bi=Yr;function $s(n,r){var a=n.type.contextTypes;if(!a)return Yr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=r[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function qt(n){return n=n.childContextTypes,n!=null}function Dl(){Qe($t),Qe(Dt)}function tp(n,r,a){if(Dt.current!==Yr)throw Error(t(168));He(Dt,r),He($t,a)}function np(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Fe(n)||"Unknown",d));return oe({},a,c)}function Vl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Yr,Bi=Dt.current,He(Dt,n),He($t,$t.current),!0}function rp(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=np(n,r,Bi),c.__reactInternalMemoizedMergedChildContext=n,Qe($t),Qe(Dt),He(Dt,n)):Qe($t),He($t,a)}var gr=null,Ol=!1,bc=!1;function ip(n){gr===null?gr=[n]:gr.push(n)}function E0(n){Ol=!0,ip(n)}function Jr(){if(!bc&&gr!==null){bc=!0;var n=0,r=De;try{var a=gr;for(De=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}gr=null,Ol=!1}catch(d){throw gr!==null&&(gr=gr.slice(n+1)),Uo(Is,Jr),d}finally{De=r,bc=!1}}return null}var qs=[],Hs=0,Ml=null,Ll=0,un=[],cn=0,$i=null,yr=1,_r="";function qi(n,r){qs[Hs++]=Ll,qs[Hs++]=Ml,Ml=n,Ll=r}function sp(n,r,a){un[cn++]=yr,un[cn++]=_r,un[cn++]=$i,$i=n;var c=yr;n=_r;var d=32-Yt(c)-1;c&=~(1<<d),a+=1;var f=32-Yt(r)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,yr=1<<32-Yt(r)+d|a<<d|c,_r=f+n}else yr=1<<f|a<<d|c,_r=n}function Fc(n){n.return!==null&&(qi(n,1),sp(n,1,0))}function Uc(n){for(;n===Ml;)Ml=qs[--Hs],qs[Hs]=null,Ll=qs[--Hs],qs[Hs]=null;for(;n===$i;)$i=un[--cn],un[cn]=null,_r=un[--cn],un[cn]=null,yr=un[--cn],un[cn]=null}var nn=null,rn=null,Je=!1,Tn=null;function op(n,r){var a=pn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function ap(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,nn=n,rn=Qr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,nn=n,rn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=$i!==null?{id:yr,overflow:_r}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=pn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,nn=n,rn=null,!0):!1;default:return!1}}function jc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zc(n){if(Je){var r=rn;if(r){var a=r;if(!ap(n,r)){if(jc(n))throw Error(t(418));r=Qr(a.nextSibling);var c=nn;r&&ap(n,r)?op(c,a):(n.flags=n.flags&-4097|2,Je=!1,nn=n)}}else{if(jc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,nn=n}}}function lp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;nn=n}function bl(n){if(n!==nn)return!1;if(!Je)return lp(n),Je=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Dc(n.type,n.memoizedProps)),r&&(r=rn)){if(jc(n))throw up(),Error(t(418));for(;r;)op(n,r),r=Qr(r.nextSibling)}if(lp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){rn=Qr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}rn=null}}else rn=nn?Qr(n.stateNode.nextSibling):null;return!0}function up(){for(var n=rn;n;)n=Qr(n.nextSibling)}function Ws(){rn=nn=null,Je=!1}function Bc(n){Tn===null?Tn=[n]:Tn.push(n)}var T0=fe.ReactCurrentBatchConfig;function ca(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(v){var T=d.refs;v===null?delete T[f]:T[f]=v},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Fl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function cp(n){var r=n._init;return r(n._payload)}function hp(n){function r(M,x){if(n){var F=M.deletions;F===null?(M.deletions=[x],M.flags|=16):F.push(x)}}function a(M,x){if(!n)return null;for(;x!==null;)r(M,x),x=x.sibling;return null}function c(M,x){for(M=new Map;x!==null;)x.key!==null?M.set(x.key,x):M.set(x.index,x),x=x.sibling;return M}function d(M,x){return M=oi(M,x),M.index=0,M.sibling=null,M}function f(M,x,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<x?(M.flags|=2,x):F):(M.flags|=2,x)):(M.flags|=1048576,x)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,x,F,Y){return x===null||x.tag!==6?(x=Vh(F,M.mode,Y),x.return=M,x):(x=d(x,F),x.return=M,x)}function k(M,x,F,Y){var he=F.type;return he===P?G(M,x,F.props.children,Y,F.key):x!==null&&(x.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Nt&&cp(he)===x.type)?(Y=d(x,F.props),Y.ref=ca(M,x,F),Y.return=M,Y):(Y=lu(F.type,F.key,F.props,null,M.mode,Y),Y.ref=ca(M,x,F),Y.return=M,Y)}function U(M,x,F,Y){return x===null||x.tag!==4||x.stateNode.containerInfo!==F.containerInfo||x.stateNode.implementation!==F.implementation?(x=Oh(F,M.mode,Y),x.return=M,x):(x=d(x,F.children||[]),x.return=M,x)}function G(M,x,F,Y,he){return x===null||x.tag!==7?(x=Ji(F,M.mode,Y,he),x.return=M,x):(x=d(x,F),x.return=M,x)}function K(M,x,F){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Vh(""+x,M.mode,F),x.return=M,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case le:return F=lu(x.type,x.key,x.props,null,M.mode,F),F.ref=ca(M,null,x),F.return=M,F;case ye:return x=Oh(x,M.mode,F),x.return=M,x;case Nt:var Y=x._init;return K(M,Y(x._payload),F)}if(it(x)||pe(x))return x=Ji(x,M.mode,F,null),x.return=M,x;Fl(M,x)}return null}function W(M,x,F,Y){var he=x!==null?x.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return he!==null?null:T(M,x,""+F,Y);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case le:return F.key===he?k(M,x,F,Y):null;case ye:return F.key===he?U(M,x,F,Y):null;case Nt:return he=F._init,W(M,x,he(F._payload),Y)}if(it(F)||pe(F))return he!==null?null:G(M,x,F,Y,null);Fl(M,F)}return null}function re(M,x,F,Y,he){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(F)||null,T(x,M,""+Y,he);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case le:return M=M.get(Y.key===null?F:Y.key)||null,k(x,M,Y,he);case ye:return M=M.get(Y.key===null?F:Y.key)||null,U(x,M,Y,he);case Nt:var me=Y._init;return re(M,x,F,me(Y._payload),he)}if(it(Y)||pe(Y))return M=M.get(F)||null,G(x,M,Y,he,null);Fl(x,Y)}return null}function ue(M,x,F,Y){for(var he=null,me=null,ge=x,ve=x=0,Et=null;ge!==null&&ve<F.length;ve++){ge.index>ve?(Et=ge,ge=null):Et=ge.sibling;var Le=W(M,ge,F[ve],Y);if(Le===null){ge===null&&(ge=Et);break}n&&ge&&Le.alternate===null&&r(M,ge),x=f(Le,x,ve),me===null?he=Le:me.sibling=Le,me=Le,ge=Et}if(ve===F.length)return a(M,ge),Je&&qi(M,ve),he;if(ge===null){for(;ve<F.length;ve++)ge=K(M,F[ve],Y),ge!==null&&(x=f(ge,x,ve),me===null?he=ge:me.sibling=ge,me=ge);return Je&&qi(M,ve),he}for(ge=c(M,ge);ve<F.length;ve++)Et=re(ge,M,ve,F[ve],Y),Et!==null&&(n&&Et.alternate!==null&&ge.delete(Et.key===null?ve:Et.key),x=f(Et,x,ve),me===null?he=Et:me.sibling=Et,me=Et);return n&&ge.forEach(function(ai){return r(M,ai)}),Je&&qi(M,ve),he}function ce(M,x,F,Y){var he=pe(F);if(typeof he!="function")throw Error(t(150));if(F=he.call(F),F==null)throw Error(t(151));for(var me=he=null,ge=x,ve=x=0,Et=null,Le=F.next();ge!==null&&!Le.done;ve++,Le=F.next()){ge.index>ve?(Et=ge,ge=null):Et=ge.sibling;var ai=W(M,ge,Le.value,Y);if(ai===null){ge===null&&(ge=Et);break}n&&ge&&ai.alternate===null&&r(M,ge),x=f(ai,x,ve),me===null?he=ai:me.sibling=ai,me=ai,ge=Et}if(Le.done)return a(M,ge),Je&&qi(M,ve),he;if(ge===null){for(;!Le.done;ve++,Le=F.next())Le=K(M,Le.value,Y),Le!==null&&(x=f(Le,x,ve),me===null?he=Le:me.sibling=Le,me=Le);return Je&&qi(M,ve),he}for(ge=c(M,ge);!Le.done;ve++,Le=F.next())Le=re(ge,M,ve,Le.value,Y),Le!==null&&(n&&Le.alternate!==null&&ge.delete(Le.key===null?ve:Le.key),x=f(Le,x,ve),me===null?he=Le:me.sibling=Le,me=Le);return n&&ge.forEach(function(tw){return r(M,tw)}),Je&&qi(M,ve),he}function ot(M,x,F,Y){if(typeof F=="object"&&F!==null&&F.type===P&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case le:e:{for(var he=F.key,me=x;me!==null;){if(me.key===he){if(he=F.type,he===P){if(me.tag===7){a(M,me.sibling),x=d(me,F.props.children),x.return=M,M=x;break e}}else if(me.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Nt&&cp(he)===me.type){a(M,me.sibling),x=d(me,F.props),x.ref=ca(M,me,F),x.return=M,M=x;break e}a(M,me);break}else r(M,me);me=me.sibling}F.type===P?(x=Ji(F.props.children,M.mode,Y,F.key),x.return=M,M=x):(Y=lu(F.type,F.key,F.props,null,M.mode,Y),Y.ref=ca(M,x,F),Y.return=M,M=Y)}return v(M);case ye:e:{for(me=F.key;x!==null;){if(x.key===me)if(x.tag===4&&x.stateNode.containerInfo===F.containerInfo&&x.stateNode.implementation===F.implementation){a(M,x.sibling),x=d(x,F.children||[]),x.return=M,M=x;break e}else{a(M,x);break}else r(M,x);x=x.sibling}x=Oh(F,M.mode,Y),x.return=M,M=x}return v(M);case Nt:return me=F._init,ot(M,x,me(F._payload),Y)}if(it(F))return ue(M,x,F,Y);if(pe(F))return ce(M,x,F,Y);Fl(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,x!==null&&x.tag===6?(a(M,x.sibling),x=d(x,F),x.return=M,M=x):(a(M,x),x=Vh(F,M.mode,Y),x.return=M,M=x),v(M)):a(M,x)}return ot}var Gs=hp(!0),dp=hp(!1),Ul=Xr(null),jl=null,Ks=null,$c=null;function qc(){$c=Ks=jl=null}function Hc(n){var r=Ul.current;Qe(Ul),n._currentValue=r}function Wc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Qs(n,r){jl=n,$c=Ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Ht=!0),n.firstContext=null)}function hn(n){var r=n._currentValue;if($c!==n)if(n={context:n,memoizedValue:r,next:null},Ks===null){if(jl===null)throw Error(t(308));Ks=n,jl.dependencies={lanes:0,firstContext:n}}else Ks=Ks.next=n;return r}var Hi=null;function Gc(n){Hi===null?Hi=[n]:Hi.push(n)}function fp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Gc(r)):(a.next=d.next,d.next=a),r.interleaved=a,vr(n,c)}function vr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Zr=!1;function Kc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function wr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ei(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Me&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,vr(n,a)}return d=c.interleaved,d===null?(r.next=r,Gc(c)):(r.next=d.next,d.next=r),c.interleaved=r,vr(n,a)}function zl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Ho(n,a)}}function mp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=r:f=f.next=r}else d=f=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Bl(n,r,a,c){var d=n.updateQueue;Zr=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var k=T,U=k.next;k.next=null,v===null?f=U:v.next=U,v=k;var G=n.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==v&&(T===null?G.firstBaseUpdate=U:T.next=U,G.lastBaseUpdate=k))}if(f!==null){var K=d.baseState;v=0,G=U=k=null,T=f;do{var W=T.lane,re=T.eventTime;if((c&W)===W){G!==null&&(G=G.next={eventTime:re,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ue=n,ce=T;switch(W=r,re=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){K=ue.call(re,K,W);break e}K=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,W=typeof ue=="function"?ue.call(re,K,W):ue,W==null)break e;K=oe({},K,W);break e;case 2:Zr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[T]:W.push(T))}else re={eventTime:re,lane:W,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(U=G=re,k=K):G=G.next=re,v|=W;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;W=T,T=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(G===null&&(k=K),d.baseState=k,d.firstBaseUpdate=U,d.lastBaseUpdate=G,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);Ki|=v,n.lanes=v,n.memoizedState=K}}function gp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ha={},Wn=Xr(ha),da=Xr(ha),fa=Xr(ha);function Wi(n){if(n===ha)throw Error(t(174));return n}function Qc(n,r){switch(He(fa,r),He(da,n),He(Wn,ha),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ys(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ys(r,n)}Qe(Wn),He(Wn,r)}function Xs(){Qe(Wn),Qe(da),Qe(fa)}function yp(n){Wi(fa.current);var r=Wi(Wn.current),a=ys(r,n.type);r!==a&&(He(da,n),He(Wn,a))}function Xc(n){da.current===n&&(Qe(Wn),Qe(da))}var Ze=Xr(0);function $l(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Yc=[];function Jc(){for(var n=0;n<Yc.length;n++)Yc[n]._workInProgressVersionPrimary=null;Yc.length=0}var ql=fe.ReactCurrentDispatcher,Zc=fe.ReactCurrentBatchConfig,Gi=0,et=null,mt=null,vt=null,Hl=!1,pa=!1,ma=0,I0=0;function Vt(){throw Error(t(321))}function eh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!En(n[a],r[a]))return!1;return!0}function th(n,r,a,c,d,f){if(Gi=f,et=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ql.current=n===null||n.memoizedState===null?C0:k0,n=a(c,d),pa){f=0;do{if(pa=!1,ma=0,25<=f)throw Error(t(301));f+=1,vt=mt=null,r.updateQueue=null,ql.current=P0,n=a(c,d)}while(pa)}if(ql.current=Kl,r=mt!==null&&mt.next!==null,Gi=0,vt=mt=et=null,Hl=!1,r)throw Error(t(300));return n}function nh(){var n=ma!==0;return ma=0,n}function Gn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?et.memoizedState=vt=n:vt=vt.next=n,vt}function dn(){if(mt===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=mt.next;var r=vt===null?et.memoizedState:vt.next;if(r!==null)vt=r,mt=n;else{if(n===null)throw Error(t(310));mt=n,n={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},vt===null?et.memoizedState=vt=n:vt=vt.next=n}return vt}function ga(n,r){return typeof r=="function"?r(n):r}function rh(n){var r=dn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=mt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var T=v=null,k=null,U=f;do{var G=U.lane;if((Gi&G)===G)k!==null&&(k=k.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var K={lane:G,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};k===null?(T=k=K,v=c):k=k.next=K,et.lanes|=G,Ki|=G}U=U.next}while(U!==null&&U!==f);k===null?v=c:k.next=T,En(c,r.memoizedState)||(Ht=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,et.lanes|=f,Ki|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function ih(n){var r=dn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);En(f,r.memoizedState)||(Ht=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,c]}function _p(){}function vp(n,r){var a=et,c=dn(),d=r(),f=!En(c.memoizedState,d);if(f&&(c.memoizedState=d,Ht=!0),c=c.queue,sh(Tp.bind(null,a,c,n),[n]),c.getSnapshot!==r||f||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,ya(9,Ep.bind(null,a,c,d,r),void 0,null),wt===null)throw Error(t(349));(Gi&30)!==0||wp(a,r,d)}return d}function wp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Ep(n,r,a,c){r.value=a,r.getSnapshot=c,Ip(r)&&Sp(n)}function Tp(n,r,a){return a(function(){Ip(r)&&Sp(n)})}function Ip(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!En(n,a)}catch{return!0}}function Sp(n){var r=vr(n,1);r!==null&&Rn(r,n,1,-1)}function Ap(n){var r=Gn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:n},r.queue=n,n=n.dispatch=R0.bind(null,et,n),[r.memoizedState,n]}function ya(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Rp(){return dn().memoizedState}function Wl(n,r,a,c){var d=Gn();et.flags|=n,d.memoizedState=ya(1|r,a,void 0,c===void 0?null:c)}function Gl(n,r,a,c){var d=dn();c=c===void 0?null:c;var f=void 0;if(mt!==null){var v=mt.memoizedState;if(f=v.destroy,c!==null&&eh(c,v.deps)){d.memoizedState=ya(r,a,f,c);return}}et.flags|=n,d.memoizedState=ya(1|r,a,f,c)}function Cp(n,r){return Wl(8390656,8,n,r)}function sh(n,r){return Gl(2048,8,n,r)}function kp(n,r){return Gl(4,2,n,r)}function Pp(n,r){return Gl(4,4,n,r)}function Np(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function xp(n,r,a){return a=a!=null?a.concat([n]):null,Gl(4,4,Np.bind(null,r,n),a)}function oh(){}function Dp(n,r){var a=dn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&eh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Vp(n,r){var a=dn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&eh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Op(n,r,a){return(Gi&21)===0?(n.baseState&&(n.baseState=!1,Ht=!0),n.memoizedState=a):(En(a,r)||(a=$o(),et.lanes|=a,Ki|=a,n.baseState=!0),r)}function S0(n,r){var a=De;De=a!==0&&4>a?a:4,n(!0);var c=Zc.transition;Zc.transition={};try{n(!1),r()}finally{De=a,Zc.transition=c}}function Mp(){return dn().memoizedState}function A0(n,r,a){var c=ii(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Lp(n))bp(r,a);else if(a=fp(n,r,a,c),a!==null){var d=Bt();Rn(a,n,c,d),Fp(a,r,c)}}function R0(n,r,a){var c=ii(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lp(n))bp(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var v=r.lastRenderedState,T=f(v,a);if(d.hasEagerState=!0,d.eagerState=T,En(T,v)){var k=r.interleaved;k===null?(d.next=d,Gc(r)):(d.next=k.next,k.next=d),r.interleaved=d;return}}catch{}finally{}a=fp(n,r,d,c),a!==null&&(d=Bt(),Rn(a,n,c,d),Fp(a,r,c))}}function Lp(n){var r=n.alternate;return n===et||r!==null&&r===et}function bp(n,r){pa=Hl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Fp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Ho(n,a)}}var Kl={readContext:hn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},C0={readContext:hn,useCallback:function(n,r){return Gn().memoizedState=[n,r===void 0?null:r],n},useContext:hn,useEffect:Cp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Wl(4194308,4,Np.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Wl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Wl(4,2,n,r)},useMemo:function(n,r){var a=Gn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Gn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=A0.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var r=Gn();return n={current:n},r.memoizedState=n},useState:Ap,useDebugValue:oh,useDeferredValue:function(n){return Gn().memoizedState=n},useTransition:function(){var n=Ap(!1),r=n[0];return n=S0.bind(null,n[1]),Gn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=et,d=Gn();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),wt===null)throw Error(t(349));(Gi&30)!==0||wp(c,r,a)}d.memoizedState=a;var f={value:a,getSnapshot:r};return d.queue=f,Cp(Tp.bind(null,c,f,n),[n]),c.flags|=2048,ya(9,Ep.bind(null,c,f,a,r),void 0,null),a},useId:function(){var n=Gn(),r=wt.identifierPrefix;if(Je){var a=_r,c=yr;a=(c&~(1<<32-Yt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ma++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=I0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},k0={readContext:hn,useCallback:Dp,useContext:hn,useEffect:sh,useImperativeHandle:xp,useInsertionEffect:kp,useLayoutEffect:Pp,useMemo:Vp,useReducer:rh,useRef:Rp,useState:function(){return rh(ga)},useDebugValue:oh,useDeferredValue:function(n){var r=dn();return Op(r,mt.memoizedState,n)},useTransition:function(){var n=rh(ga)[0],r=dn().memoizedState;return[n,r]},useMutableSource:_p,useSyncExternalStore:vp,useId:Mp,unstable_isNewReconciler:!1},P0={readContext:hn,useCallback:Dp,useContext:hn,useEffect:sh,useImperativeHandle:xp,useInsertionEffect:kp,useLayoutEffect:Pp,useMemo:Vp,useReducer:ih,useRef:Rp,useState:function(){return ih(ga)},useDebugValue:oh,useDeferredValue:function(n){var r=dn();return mt===null?r.memoizedState=n:Op(r,mt.memoizedState,n)},useTransition:function(){var n=ih(ga)[0],r=dn().memoizedState;return[n,r]},useMutableSource:_p,useSyncExternalStore:vp,useId:Mp,unstable_isNewReconciler:!1};function In(n,r){if(n&&n.defaultProps){r=oe({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function ah(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:oe({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ql={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=ii(n),f=wr(c,d);f.payload=r,a!=null&&(f.callback=a),r=ei(n,f,d),r!==null&&(Rn(r,n,d,c),zl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=ii(n),f=wr(c,d);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=ei(n,f,d),r!==null&&(Rn(r,n,d,c),zl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Bt(),c=ii(n),d=wr(a,c);d.tag=2,r!=null&&(d.callback=r),r=ei(n,d,c),r!==null&&(Rn(r,n,c,a),zl(r,n,c))}};function Up(n,r,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):r.prototype&&r.prototype.isPureReactComponent?!ra(a,c)||!ra(d,f):!0}function jp(n,r,a){var c=!1,d=Yr,f=r.contextType;return typeof f=="object"&&f!==null?f=hn(f):(d=qt(r)?Bi:Dt.current,c=r.contextTypes,f=(c=c!=null)?$s(n,d):Yr),r=new r(a,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ql,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function zp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Ql.enqueueReplaceState(r,r.state,null)}function lh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Kc(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=hn(f):(f=qt(r)?Bi:Dt.current,d.context=$s(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(ah(n,r,f,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Ql.enqueueReplaceState(d,d.state,null),Bl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ys(n,r){try{var a="",c=r;do a+=Ce(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function uh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function ch(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var N0=typeof WeakMap=="function"?WeakMap:Map;function Bp(n,r,a){a=wr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){nu||(nu=!0,Ah=c),ch(n,r)},a}function $p(n,r,a){a=wr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){ch(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){ch(n,r),typeof c!="function"&&(ni===null?ni=new Set([this]):ni.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function qp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new N0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=q0.bind(null,n,r,a),r.then(n,n))}function Hp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Wp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=wr(-1,1),r.tag=2,ei(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var x0=fe.ReactCurrentOwner,Ht=!1;function zt(n,r,a,c){r.child=n===null?dp(r,null,a,c):Gs(r,n.child,a,c)}function Gp(n,r,a,c,d){a=a.render;var f=r.ref;return Qs(r,d),c=th(n,r,a,c,f,d),a=nh(),n!==null&&!Ht?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Er(n,r,d)):(Je&&a&&Fc(r),r.flags|=1,zt(n,r,c,d),r.child)}function Kp(n,r,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Dh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=f,Qp(n,r,f,c,d)):(n=lu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ra,a(v,c)&&n.ref===r.ref)return Er(n,r,d)}return r.flags|=1,n=oi(f,c),n.ref=r.ref,n.return=r,r.child=n}function Qp(n,r,a,c,d){if(n!==null){var f=n.memoizedProps;if(ra(f,c)&&n.ref===r.ref)if(Ht=!1,r.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Ht=!0);else return r.lanes=n.lanes,Er(n,r,d)}return hh(n,r,a,c,d)}function Xp(n,r,a){var c=r.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Zs,sn),sn|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,He(Zs,sn),sn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,He(Zs,sn),sn|=c}else f!==null?(c=f.baseLanes|a,r.memoizedState=null):c=a,He(Zs,sn),sn|=c;return zt(n,r,d,a),r.child}function Yp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function hh(n,r,a,c,d){var f=qt(a)?Bi:Dt.current;return f=$s(r,f),Qs(r,d),a=th(n,r,a,c,f,d),c=nh(),n!==null&&!Ht?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Er(n,r,d)):(Je&&c&&Fc(r),r.flags|=1,zt(n,r,a,d),r.child)}function Jp(n,r,a,c,d){if(qt(a)){var f=!0;Vl(r)}else f=!1;if(Qs(r,d),r.stateNode===null)Yl(n,r),jp(r,a,c),lh(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,T=r.memoizedProps;v.props=T;var k=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=hn(U):(U=qt(a)?Bi:Dt.current,U=$s(r,U));var G=a.getDerivedStateFromProps,K=typeof G=="function"||typeof v.getSnapshotBeforeUpdate=="function";K||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||k!==U)&&zp(r,v,c,U),Zr=!1;var W=r.memoizedState;v.state=W,Bl(r,c,v,d),k=r.memoizedState,T!==c||W!==k||$t.current||Zr?(typeof G=="function"&&(ah(r,a,G,c),k=r.memoizedState),(T=Zr||Up(r,a,T,c,W,k,U))?(K||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=k),v.props=c,v.state=k,v.context=U,c=T):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,pp(n,r),T=r.memoizedProps,U=r.type===r.elementType?T:In(r.type,T),v.props=U,K=r.pendingProps,W=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=hn(k):(k=qt(a)?Bi:Dt.current,k=$s(r,k));var re=a.getDerivedStateFromProps;(G=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==K||W!==k)&&zp(r,v,c,k),Zr=!1,W=r.memoizedState,v.state=W,Bl(r,c,v,d);var ue=r.memoizedState;T!==K||W!==ue||$t.current||Zr?(typeof re=="function"&&(ah(r,a,re,c),ue=r.memoizedState),(U=Zr||Up(r,a,U,c,W,ue,k)||!1)?(G||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,k)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ue),v.props=c,v.state=ue,v.context=k,c=U):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),c=!1)}return dh(n,r,a,c,f,d)}function dh(n,r,a,c,d,f){Yp(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&rp(r,a,!1),Er(n,r,f);c=r.stateNode,x0.current=r;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=Gs(r,n.child,null,f),r.child=Gs(r,null,T,f)):zt(n,r,T,f),r.memoizedState=c.state,d&&rp(r,a,!0),r.child}function Zp(n){var r=n.stateNode;r.pendingContext?tp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&tp(n,r.context,!1),Qc(n,r.containerInfo)}function em(n,r,a,c,d){return Ws(),Bc(d),r.flags|=256,zt(n,r,a,c),r.child}var fh={dehydrated:null,treeContext:null,retryLane:0};function ph(n){return{baseLanes:n,cachePool:null,transitions:null}}function tm(n,r,a){var c=r.pendingProps,d=Ze.current,f=!1,v=(r.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Ze,d&1),n===null)return zc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=r.mode,f=r.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=uu(v,c,0,null),n=Ji(n,c,a,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=ph(a),r.memoizedState=fh,n):mh(r,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return D0(n,r,v,c,T,d,a);if(f){f=c.fallback,v=r.mode,d=n.child,T=d.sibling;var k={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=k,r.deletions=null):(c=oi(d,k),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?f=oi(T,f):(f=Ji(f,v,a,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,v=n.child.memoizedState,v=v===null?ph(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,r.memoizedState=fh,c}return f=n.child,n=f.sibling,c=oi(f,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function mh(n,r){return r=uu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Xl(n,r,a,c){return c!==null&&Bc(c),Gs(r,n.child,null,a),n=mh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function D0(n,r,a,c,d,f,v){if(a)return r.flags&256?(r.flags&=-257,c=uh(Error(t(422))),Xl(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=c.fallback,d=r.mode,c=uu({mode:"visible",children:c.children},d,0,null),f=Ji(f,d,v,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,(r.mode&1)!==0&&Gs(r,n.child,null,v),r.child.memoizedState=ph(v),r.memoizedState=fh,f);if((r.mode&1)===0)return Xl(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,f=Error(t(419)),c=uh(f,c,void 0),Xl(n,r,v,c)}if(T=(v&n.childLanes)!==0,Ht||T){if(c=wt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,vr(n,d),Rn(c,n,d,-1))}return xh(),c=uh(Error(t(421))),Xl(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=H0.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,rn=Qr(d.nextSibling),nn=r,Je=!0,Tn=null,n!==null&&(un[cn++]=yr,un[cn++]=_r,un[cn++]=$i,yr=n.id,_r=n.overflow,$i=r),r=mh(r,c.children),r.flags|=4096,r)}function nm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Wc(n.return,r,a)}function gh(n,r,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function rm(n,r,a){var c=r.pendingProps,d=c.revealOrder,f=c.tail;if(zt(n,r,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&nm(n,a,r);else if(n.tag===19)nm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Ze,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&$l(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),gh(r,!1,d,a,f);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&$l(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}gh(r,!0,a,null,f);break;case"together":gh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Yl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Er(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Ki|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=oi(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=oi(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function V0(n,r,a){switch(r.tag){case 3:Zp(r),Ws();break;case 5:yp(r);break;case 1:qt(r.type)&&Vl(r);break;case 4:Qc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;He(Ul,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(He(Ze,Ze.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?tm(n,r,a):(He(Ze,Ze.current&1),n=Er(n,r,a),n!==null?n.sibling:null);He(Ze,Ze.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return rm(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Ze,Ze.current),c)break;return null;case 22:case 23:return r.lanes=0,Xp(n,r,a)}return Er(n,r,a)}var im,yh,sm,om;im=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},yh=function(){},sm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Wi(Wn.current);var f=null;switch(a){case"input":d=ms(n,d),c=ms(n,c),f=[];break;case"select":d=oe({},d,{value:void 0}),c=oe({},c,{value:void 0}),f=[];break;case"textarea":d=Do(n,d),c=Do(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Nl)}_n(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var T=d[U];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in c){var k=c[U];if(T=d?.[U],c.hasOwnProperty(U)&&k!==T&&(k!=null||T!=null))if(U==="style")if(T){for(v in T)!T.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&T[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(f||(f=[]),f.push(U,a)),a=k;else U==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,T=T?T.__html:void 0,k!=null&&T!==k&&(f=f||[]).push(U,k)):U==="children"?typeof k!="string"&&typeof k!="number"||(f=f||[]).push(U,""+k):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(k!=null&&U==="onScroll"&&Ke("scroll",n),f||T===k||(f=[])):(f=f||[]).push(U,k))}a&&(f=f||[]).push("style",a);var U=f;(r.updateQueue=U)&&(r.flags|=4)}},om=function(n,r,a,c){a!==c&&(r.flags|=4)};function _a(n,r){if(!Je)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function O0(n,r,a){var c=r.pendingProps;switch(Uc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return qt(r.type)&&Dl(),Ot(r),null;case 3:return c=r.stateNode,Xs(),Qe($t),Qe(Dt),Jc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(bl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Tn!==null&&(kh(Tn),Tn=null))),yh(n,r),Ot(r),null;case 5:Xc(r);var d=Wi(fa.current);if(a=r.type,n!==null&&r.stateNode!=null)sm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=Wi(Wn.current),bl(r)){c=r.stateNode,a=r.type;var f=r.memoizedProps;switch(c[Hn]=r,c[la]=f,n=(r.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<sa.length;d++)Ke(sa[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":tl(c,f),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ke("invalid",c);break;case"textarea":Vo(c,f),Ke("invalid",c)}_n(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var T=f[v];v==="children"?typeof T=="string"?c.textContent!==T&&(f.suppressHydrationWarning!==!0&&Pl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(f.suppressHydrationWarning!==!0&&Pl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":ps(c),xo(c,f,!0);break;case"textarea":ps(c),Vr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Nl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Oo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Hn]=r,n[la]=c,im(n,r,!1,!1),r.stateNode=n;e:{switch(v=vs(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<sa.length;d++)Ke(sa[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":tl(n,c),d=ms(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=oe({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":Vo(n,c),d=Do(n,c),Ke("invalid",n);break;default:d=c}_n(a,d),T=d;for(f in T)if(T.hasOwnProperty(f)){var k=T[f];f==="style"?_s(n,k):f==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&rl(n,k)):f==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Ci(n,k):typeof k=="number"&&Ci(n,""+k):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?k!=null&&f==="onScroll"&&Ke("scroll",n):k!=null&&ee(n,f,k,v))}switch(a){case"input":ps(n),xo(n,c,!1);break;case"textarea":ps(n),Vr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Oe(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?yn(n,!!c.multiple,f,!1):c.defaultValue!=null&&yn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Nl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)om(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Wi(fa.current),Wi(Wn.current),bl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Hn]=r,(f=c.nodeValue!==a)&&(n=nn,n!==null))switch(n.tag){case 3:Pl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Pl(c.nodeValue,a,(n.mode&1)!==0)}f&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Hn]=r,r.stateNode=c}return Ot(r),null;case 13:if(Qe(Ze),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&rn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)up(),Ws(),r.flags|=98560,f=!1;else if(f=bl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Hn]=r}else Ws(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ot(r),f=!1}else Tn!==null&&(kh(Tn),Tn=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ze.current&1)!==0?gt===0&&(gt=3):xh())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return Xs(),yh(n,r),n===null&&oa(r.stateNode.containerInfo),Ot(r),null;case 10:return Hc(r.type._context),Ot(r),null;case 17:return qt(r.type)&&Dl(),Ot(r),null;case 19:if(Qe(Ze),f=r.memoizedState,f===null)return Ot(r),null;if(c=(r.flags&128)!==0,v=f.rendering,v===null)if(c)_a(f,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=$l(n),v!==null){for(r.flags|=128,_a(f,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Ze,Ze.current&1|2),r.child}n=n.sibling}f.tail!==null&&Ge()>eo&&(r.flags|=128,c=!0,_a(f,!1),r.lanes=4194304)}else{if(!c)if(n=$l(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),_a(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Je)return Ot(r),null}else 2*Ge()-f.renderingStartTime>eo&&a!==1073741824&&(r.flags|=128,c=!0,_a(f,!1),r.lanes=4194304);f.isBackwards?(v.sibling=r.child,r.child=v):(a=f.last,a!==null?a.sibling=v:r.child=v,f.last=v)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Ge(),r.sibling=null,a=Ze.current,He(Ze,c?a&1|2:a&1),r):(Ot(r),null);case 22:case 23:return Nh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(sn&1073741824)!==0&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function M0(n,r){switch(Uc(r),r.tag){case 1:return qt(r.type)&&Dl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Xs(),Qe($t),Qe(Dt),Jc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Xc(r),null;case 13:if(Qe(Ze),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ws()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Qe(Ze),null;case 4:return Xs(),null;case 10:return Hc(r.type._context),null;case 22:case 23:return Nh(),null;case 24:return null;default:return null}}var Jl=!1,Mt=!1,L0=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Js(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(n,r,c)}else a.current=null}function _h(n,r,a){try{a()}catch(c){rt(n,r,c)}}var am=!1;function b0(n,r){if(Nc=dr,n=Uf(),Tc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,T=-1,k=-1,U=0,G=0,K=n,W=null;t:for(;;){for(var re;K!==a||d!==0&&K.nodeType!==3||(T=v+d),K!==f||c!==0&&K.nodeType!==3||(k=v+c),K.nodeType===3&&(v+=K.nodeValue.length),(re=K.firstChild)!==null;)W=K,K=re;for(;;){if(K===n)break t;if(W===a&&++U===d&&(T=v),W===f&&++G===c&&(k=v),(re=K.nextSibling)!==null)break;K=W,W=K.parentNode}K=re}a=T===-1||k===-1?null:{start:T,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(xc={focusedElem:n,selectionRange:a},dr=!1,ae=r;ae!==null;)if(r=ae,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ae=n;else for(;ae!==null;){r=ae;try{var ue=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,ot=ue.memoizedState,M=r.stateNode,x=M.getSnapshotBeforeUpdate(r.elementType===r.type?ce:In(r.type,ce),ot);M.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){rt(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,ae=n;break}ae=r.return}return ue=am,am=!1,ue}function va(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&_h(r,a,f)}d=d.next}while(d!==c)}}function Zl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function vh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function lm(n){var r=n.alternate;r!==null&&(n.alternate=null,lm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Hn],delete r[la],delete r[Mc],delete r[v0],delete r[w0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function um(n){return n.tag===5||n.tag===3||n.tag===4}function cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||um(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Nl));else if(c!==4&&(n=n.child,n!==null))for(wh(n,r,a),n=n.sibling;n!==null;)wh(n,r,a),n=n.sibling}function Eh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Eh(n,r,a),n=n.sibling;n!==null;)Eh(n,r,a),n=n.sibling}var At=null,Sn=!1;function ti(n,r,a){for(a=a.child;a!==null;)hm(n,r,a),a=a.sibling}function hm(n,r,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Di,a)}catch{}switch(a.tag){case 5:Mt||Js(a,r);case 6:var c=At,d=Sn;At=null,ti(n,r,a),At=c,Sn=d,At!==null&&(Sn?(n=At,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):At.removeChild(a.stateNode));break;case 18:At!==null&&(Sn?(n=At,a=a.stateNode,n.nodeType===8?Oc(n.parentNode,a):n.nodeType===1&&Oc(n,a),Hr(n)):Oc(At,a.stateNode));break;case 4:c=At,d=Sn,At=a.stateNode.containerInfo,Sn=!0,ti(n,r,a),At=c,Sn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&_h(a,r,v),d=d.next}while(d!==c)}ti(n,r,a);break;case 1:if(!Mt&&(Js(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){rt(a,r,T)}ti(n,r,a);break;case 21:ti(n,r,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,ti(n,r,a),Mt=c):ti(n,r,a);break;default:ti(n,r,a)}}function dm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new L0),r.forEach(function(c){var d=W0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function An(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=r,T=v;e:for(;T!==null;){switch(T.tag){case 5:At=T.stateNode,Sn=!1;break e;case 3:At=T.stateNode.containerInfo,Sn=!0;break e;case 4:At=T.stateNode.containerInfo,Sn=!0;break e}T=T.return}if(At===null)throw Error(t(160));hm(f,v,d),At=null,Sn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(U){rt(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)fm(r,n),r=r.sibling}function fm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(An(r,n),Kn(n),c&4){try{va(3,n,n.return),Zl(3,n)}catch(ce){rt(n,n.return,ce)}try{va(5,n,n.return)}catch(ce){rt(n,n.return,ce)}}break;case 1:An(r,n),Kn(n),c&512&&a!==null&&Js(a,a.return);break;case 5:if(An(r,n),Kn(n),c&512&&a!==null&&Js(a,a.return),n.flags&32){var d=n.stateNode;try{Ci(d,"")}catch(ce){rt(n,n.return,ce)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,T=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{T==="input"&&f.type==="radio"&&f.name!=null&&gs(d,f),vs(T,v);var U=vs(T,f);for(v=0;v<k.length;v+=2){var G=k[v],K=k[v+1];G==="style"?_s(d,K):G==="dangerouslySetInnerHTML"?rl(d,K):G==="children"?Ci(d,K):ee(d,G,K,U)}switch(T){case"input":Ri(d,f);break;case"textarea":nl(d,f);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var re=f.value;re!=null?yn(d,!!f.multiple,re,!1):W!==!!f.multiple&&(f.defaultValue!=null?yn(d,!!f.multiple,f.defaultValue,!0):yn(d,!!f.multiple,f.multiple?[]:"",!1))}d[la]=f}catch(ce){rt(n,n.return,ce)}}break;case 6:if(An(r,n),Kn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(ce){rt(n,n.return,ce)}}break;case 3:if(An(r,n),Kn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Hr(r.containerInfo)}catch(ce){rt(n,n.return,ce)}break;case 4:An(r,n),Kn(n);break;case 13:An(r,n),Kn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Sh=Ge())),c&4&&dm(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(U=Mt)||G,An(r,n),Mt=U):An(r,n),Kn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!G&&(n.mode&1)!==0)for(ae=n,G=n.child;G!==null;){for(K=ae=G;ae!==null;){switch(W=ae,re=W.child,W.tag){case 0:case 11:case 14:case 15:va(4,W,W.return);break;case 1:Js(W,W.return);var ue=W.stateNode;if(typeof ue.componentWillUnmount=="function"){c=W,a=W.return;try{r=c,ue.props=r.memoizedProps,ue.state=r.memoizedState,ue.componentWillUnmount()}catch(ce){rt(c,a,ce)}}break;case 5:Js(W,W.return);break;case 22:if(W.memoizedState!==null){gm(K);continue}}re!==null?(re.return=W,ae=re):gm(K)}G=G.sibling}e:for(G=null,K=n;;){if(K.tag===5){if(G===null){G=K;try{d=K.stateNode,U?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(T=K.stateNode,k=K.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,T.style.display=Lr("display",v))}catch(ce){rt(n,n.return,ce)}}}else if(K.tag===6){if(G===null)try{K.stateNode.nodeValue=U?"":K.memoizedProps}catch(ce){rt(n,n.return,ce)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;G===K&&(G=null),K=K.return}G===K&&(G=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:An(r,n),Kn(n),c&4&&dm(n);break;case 21:break;default:An(r,n),Kn(n)}}function Kn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(um(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ci(d,""),c.flags&=-33);var f=cm(n);Eh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=cm(n);wh(n,T,v);break;default:throw Error(t(161))}}catch(k){rt(n,n.return,k)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function F0(n,r,a){ae=n,pm(n)}function pm(n,r,a){for(var c=(n.mode&1)!==0;ae!==null;){var d=ae,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Jl;if(!v){var T=d.alternate,k=T!==null&&T.memoizedState!==null||Mt;T=Jl;var U=Mt;if(Jl=v,(Mt=k)&&!U)for(ae=d;ae!==null;)v=ae,k=v.child,v.tag===22&&v.memoizedState!==null?ym(d):k!==null?(k.return=v,ae=k):ym(d);for(;f!==null;)ae=f,pm(f),f=f.sibling;ae=d,Jl=T,Mt=U}mm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,ae=f):mm(n)}}function mm(n){for(;ae!==null;){var r=ae;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Mt||Zl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:In(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&gp(r,f,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}gp(r,v,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var G=U.memoizedState;if(G!==null){var K=G.dehydrated;K!==null&&Hr(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||r.flags&512&&vh(r)}catch(W){rt(r,r.return,W)}}if(r===n){ae=null;break}if(a=r.sibling,a!==null){a.return=r.return,ae=a;break}ae=r.return}}function gm(n){for(;ae!==null;){var r=ae;if(r===n){ae=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ae=a;break}ae=r.return}}function ym(n){for(;ae!==null;){var r=ae;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Zl(4,r)}catch(k){rt(r,a,k)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(k){rt(r,d,k)}}var f=r.return;try{vh(r)}catch(k){rt(r,f,k)}break;case 5:var v=r.return;try{vh(r)}catch(k){rt(r,v,k)}}}catch(k){rt(r,r.return,k)}if(r===n){ae=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ae=T;break}ae=r.return}}var U0=Math.ceil,eu=fe.ReactCurrentDispatcher,Th=fe.ReactCurrentOwner,fn=fe.ReactCurrentBatchConfig,Me=0,wt=null,ht=null,Rt=0,sn=0,Zs=Xr(0),gt=0,wa=null,Ki=0,tu=0,Ih=0,Ea=null,Wt=null,Sh=0,eo=1/0,Tr=null,nu=!1,Ah=null,ni=null,ru=!1,ri=null,iu=0,Ta=0,Rh=null,su=-1,ou=0;function Bt(){return(Me&6)!==0?Ge():su!==-1?su:su=Ge()}function ii(n){return(n.mode&1)===0?1:(Me&2)!==0&&Rt!==0?Rt&-Rt:T0.transition!==null?(ou===0&&(ou=$o()),ou):(n=De,n!==0||(n=window.event,n=n===void 0?16:Ps(n.type)),n)}function Rn(n,r,a,c){if(50<Ta)throw Ta=0,Rh=null,Error(t(185));Li(n,a,c),((Me&2)===0||n!==wt)&&(n===wt&&((Me&2)===0&&(tu|=a),gt===4&&si(n,Rt)),Gt(n,c),a===1&&Me===0&&(r.mode&1)===0&&(eo=Ge()+500,Ol&&Jr()))}function Gt(n,r){var a=n.callbackNode;Mi(n,r);var c=ur(n,n===wt?Rt:0);if(c===0)a!==null&&Ts(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Ts(a),r===1)n.tag===0?E0(vm.bind(null,n)):ip(vm.bind(null,n)),y0(function(){(Me&6)===0&&Jr()}),a=null;else{switch(Mn(c)){case 1:a=Is;break;case 4:a=jo;break;case 16:a=xi;break;case 536870912:a=Ss;break;default:a=xi}a=Cm(a,_m.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function _m(n,r){if(su=-1,ou=0,(Me&6)!==0)throw Error(t(327));var a=n.callbackNode;if(to()&&n.callbackNode!==a)return null;var c=ur(n,n===wt?Rt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=au(n,c);else{r=c;var d=Me;Me|=2;var f=Em();(wt!==n||Rt!==r)&&(Tr=null,eo=Ge()+500,Xi(n,r));do try{B0();break}catch(T){wm(n,T)}while(!0);qc(),eu.current=f,Me=d,ht!==null?r=0:(wt=null,Rt=0,r=gt)}if(r!==0){if(r===2&&(d=Bo(n),d!==0&&(c=d,r=Ch(n,d))),r===1)throw a=wa,Xi(n,0),si(n,c),Gt(n,Ge()),a;if(r===6)si(n,c);else{if(d=n.current.alternate,(c&30)===0&&!j0(d)&&(r=au(n,c),r===2&&(f=Bo(n),f!==0&&(c=f,r=Ch(n,f))),r===1))throw a=wa,Xi(n,0),si(n,c),Gt(n,Ge()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Yi(n,Wt,Tr);break;case 3:if(si(n,c),(c&130023424)===c&&(r=Sh+500-Ge(),10<r)){if(ur(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Vc(Yi.bind(null,n,Wt,Tr),r);break}Yi(n,Wt,Tr);break;case 4:if(si(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-Yt(c);f=1<<v,v=r[v],v>d&&(d=v),c&=~f}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*U0(c/1960))-c,10<c){n.timeoutHandle=Vc(Yi.bind(null,n,Wt,Tr),c);break}Yi(n,Wt,Tr);break;case 5:Yi(n,Wt,Tr);break;default:throw Error(t(329))}}}return Gt(n,Ge()),n.callbackNode===a?_m.bind(null,n):null}function Ch(n,r){var a=Ea;return n.current.memoizedState.isDehydrated&&(Xi(n,r).flags|=256),n=au(n,r),n!==2&&(r=Wt,Wt=a,r!==null&&kh(r)),n}function kh(n){Wt===null?Wt=n:Wt.push.apply(Wt,n)}function j0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!En(f(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function si(n,r){for(r&=~Ih,r&=~tu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Yt(r),c=1<<a;n[a]=-1,r&=~c}}function vm(n){if((Me&6)!==0)throw Error(t(327));to();var r=ur(n,0);if((r&1)===0)return Gt(n,Ge()),null;var a=au(n,r);if(n.tag!==0&&a===2){var c=Bo(n);c!==0&&(r=c,a=Ch(n,c))}if(a===1)throw a=wa,Xi(n,0),si(n,r),Gt(n,Ge()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Yi(n,Wt,Tr),Gt(n,Ge()),null}function Ph(n,r){var a=Me;Me|=1;try{return n(r)}finally{Me=a,Me===0&&(eo=Ge()+500,Ol&&Jr())}}function Qi(n){ri!==null&&ri.tag===0&&(Me&6)===0&&to();var r=Me;Me|=1;var a=fn.transition,c=De;try{if(fn.transition=null,De=1,n)return n()}finally{De=c,fn.transition=a,Me=r,(Me&6)===0&&Jr()}}function Nh(){sn=Zs.current,Qe(Zs)}function Xi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,g0(a)),ht!==null)for(a=ht.return;a!==null;){var c=a;switch(Uc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Dl();break;case 3:Xs(),Qe($t),Qe(Dt),Jc();break;case 5:Xc(c);break;case 4:Xs();break;case 13:Qe(Ze);break;case 19:Qe(Ze);break;case 10:Hc(c.type._context);break;case 22:case 23:Nh()}a=a.return}if(wt=n,ht=n=oi(n.current,null),Rt=sn=r,gt=0,wa=null,Ih=tu=Ki=0,Wt=Ea=null,Hi!==null){for(r=0;r<Hi.length;r++)if(a=Hi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}Hi=null}return n}function wm(n,r){do{var a=ht;try{if(qc(),ql.current=Kl,Hl){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Hl=!1}if(Gi=0,vt=mt=et=null,pa=!1,ma=0,Th.current=null,a===null||a.return===null){gt=1,wa=r,ht=null;break}e:{var f=n,v=a.return,T=a,k=r;if(r=Rt,T.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var U=k,G=T,K=G.tag;if((G.mode&1)===0&&(K===0||K===11||K===15)){var W=G.alternate;W?(G.updateQueue=W.updateQueue,G.memoizedState=W.memoizedState,G.lanes=W.lanes):(G.updateQueue=null,G.memoizedState=null)}var re=Hp(v);if(re!==null){re.flags&=-257,Wp(re,v,T,f,r),re.mode&1&&qp(f,U,r),r=re,k=U;var ue=r.updateQueue;if(ue===null){var ce=new Set;ce.add(k),r.updateQueue=ce}else ue.add(k);break e}else{if((r&1)===0){qp(f,U,r),xh();break e}k=Error(t(426))}}else if(Je&&T.mode&1){var ot=Hp(v);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),Wp(ot,v,T,f,r),Bc(Ys(k,T));break e}}f=k=Ys(k,T),gt!==4&&(gt=2),Ea===null?Ea=[f]:Ea.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var M=Bp(f,k,r);mp(f,M);break e;case 1:T=k;var x=f.type,F=f.stateNode;if((f.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ni===null||!ni.has(F)))){f.flags|=65536,r&=-r,f.lanes|=r;var Y=$p(f,T,r);mp(f,Y);break e}}f=f.return}while(f!==null)}Im(a)}catch(he){r=he,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function Em(){var n=eu.current;return eu.current=Kl,n===null?Kl:n}function xh(){(gt===0||gt===3||gt===2)&&(gt=4),wt===null||(Ki&268435455)===0&&(tu&268435455)===0||si(wt,Rt)}function au(n,r){var a=Me;Me|=2;var c=Em();(wt!==n||Rt!==r)&&(Tr=null,Xi(n,r));do try{z0();break}catch(d){wm(n,d)}while(!0);if(qc(),Me=a,eu.current=c,ht!==null)throw Error(t(261));return wt=null,Rt=0,gt}function z0(){for(;ht!==null;)Tm(ht)}function B0(){for(;ht!==null&&!Ni();)Tm(ht)}function Tm(n){var r=Rm(n.alternate,n,sn);n.memoizedProps=n.pendingProps,r===null?Im(n):ht=r,Th.current=null}function Im(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=O0(a,r,sn),a!==null){ht=a;return}}else{if(a=M0(a,r),a!==null){a.flags&=32767,ht=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gt=6,ht=null;return}}if(r=r.sibling,r!==null){ht=r;return}ht=r=n}while(r!==null);gt===0&&(gt=5)}function Yi(n,r,a){var c=De,d=fn.transition;try{fn.transition=null,De=1,$0(n,r,a,c)}finally{fn.transition=d,De=c}return null}function $0(n,r,a,c){do to();while(ri!==null);if((Me&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(yc(n,f),n===wt&&(ht=wt=null,Rt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ru||(ru=!0,Cm(xi,function(){return to(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=fn.transition,fn.transition=null;var v=De;De=1;var T=Me;Me|=4,Th.current=null,b0(n,a),fm(a,n),u0(xc),dr=!!Nc,xc=Nc=null,n.current=a,F0(a),lr(),Me=T,De=v,fn.transition=f}else n.current=a;if(ru&&(ru=!1,ri=n,iu=d),f=n.pendingLanes,f===0&&(ni=null),pl(a.stateNode),Gt(n,Ge()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(nu)throw nu=!1,n=Ah,Ah=null,n;return(iu&1)!==0&&n.tag!==0&&to(),f=n.pendingLanes,(f&1)!==0?n===Rh?Ta++:(Ta=0,Rh=n):Ta=0,Jr(),null}function to(){if(ri!==null){var n=Mn(iu),r=fn.transition,a=De;try{if(fn.transition=null,De=16>n?16:n,ri===null)var c=!1;else{if(n=ri,ri=null,iu=0,(Me&6)!==0)throw Error(t(331));var d=Me;for(Me|=4,ae=n.current;ae!==null;){var f=ae,v=f.child;if((ae.flags&16)!==0){var T=f.deletions;if(T!==null){for(var k=0;k<T.length;k++){var U=T[k];for(ae=U;ae!==null;){var G=ae;switch(G.tag){case 0:case 11:case 15:va(8,G,f)}var K=G.child;if(K!==null)K.return=G,ae=K;else for(;ae!==null;){G=ae;var W=G.sibling,re=G.return;if(lm(G),G===U){ae=null;break}if(W!==null){W.return=re,ae=W;break}ae=re}}}var ue=f.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var ot=ce.sibling;ce.sibling=null,ce=ot}while(ce!==null)}}ae=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,ae=v;else e:for(;ae!==null;){if(f=ae,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:va(9,f,f.return)}var M=f.sibling;if(M!==null){M.return=f.return,ae=M;break e}ae=f.return}}var x=n.current;for(ae=x;ae!==null;){v=ae;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,ae=F;else e:for(v=x;ae!==null;){if(T=ae,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:Zl(9,T)}}catch(he){rt(T,T.return,he)}if(T===v){ae=null;break e}var Y=T.sibling;if(Y!==null){Y.return=T.return,ae=Y;break e}ae=T.return}}if(Me=d,Jr(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Di,n)}catch{}c=!0}return c}finally{De=a,fn.transition=r}}return!1}function Sm(n,r,a){r=Ys(a,r),r=Bp(n,r,1),n=ei(n,r,1),r=Bt(),n!==null&&(Li(n,1,r),Gt(n,r))}function rt(n,r,a){if(n.tag===3)Sm(n,n,a);else for(;r!==null;){if(r.tag===3){Sm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ni===null||!ni.has(c))){n=Ys(a,n),n=$p(r,n,1),r=ei(r,n,1),n=Bt(),r!==null&&(Li(r,1,n),Gt(r,n));break}}r=r.return}}function q0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(Rt&a)===a&&(gt===4||gt===3&&(Rt&130023424)===Rt&&500>Ge()-Sh?Xi(n,0):Ih|=a),Gt(n,r)}function Am(n,r){r===0&&((n.mode&1)===0?r=1:(r=Br,Br<<=1,(Br&130023424)===0&&(Br=4194304)));var a=Bt();n=vr(n,r),n!==null&&(Li(n,r,a),Gt(n,a))}function H0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Am(n,a)}function W0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Am(n,a)}var Rm;Rm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||$t.current)Ht=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Ht=!1,V0(n,r,a);Ht=(n.flags&131072)!==0}else Ht=!1,Je&&(r.flags&1048576)!==0&&sp(r,Ll,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Yl(n,r),n=r.pendingProps;var d=$s(r,Dt.current);Qs(r,a),d=th(null,r,c,n,d,a);var f=nh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,qt(c)?(f=!0,Vl(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Kc(r),d.updater=Ql,r.stateNode=d,d._reactInternals=r,lh(r,c,n,a),r=dh(null,r,c,!0,f,a)):(r.tag=0,Je&&f&&Fc(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Yl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=K0(c),n=In(c,n),d){case 0:r=hh(null,r,c,n,a);break e;case 1:r=Jp(null,r,c,n,a);break e;case 11:r=Gp(null,r,c,n,a);break e;case 14:r=Kp(null,r,c,In(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:In(c,d),hh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:In(c,d),Jp(n,r,c,d,a);case 3:e:{if(Zp(r),n===null)throw Error(t(387));c=r.pendingProps,f=r.memoizedState,d=f.element,pp(n,r),Bl(r,c,null,a);var v=r.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=Ys(Error(t(423)),r),r=em(n,r,c,a,d);break e}else if(c!==d){d=Ys(Error(t(424)),r),r=em(n,r,c,a,d);break e}else for(rn=Qr(r.stateNode.containerInfo.firstChild),nn=r,Je=!0,Tn=null,a=dp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ws(),c===d){r=Er(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return yp(r),n===null&&zc(r),c=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,Dc(c,d)?v=null:f!==null&&Dc(c,f)&&(r.flags|=32),Yp(n,r),zt(n,r,v,a),r.child;case 6:return n===null&&zc(r),null;case 13:return tm(n,r,a);case 4:return Qc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Gs(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:In(c,d),Gp(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,f=r.memoizedProps,v=d.value,He(Ul,c._currentValue),c._currentValue=v,f!==null)if(En(f.value,v)){if(f.children===d.children&&!$t.current){r=Er(n,r,a);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var T=f.dependencies;if(T!==null){v=f.child;for(var k=T.firstContext;k!==null;){if(k.context===c){if(f.tag===1){k=wr(-1,a&-a),k.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var G=U.pending;G===null?k.next=k:(k.next=G.next,G.next=k),U.pending=k}}f.lanes|=a,k=f.alternate,k!==null&&(k.lanes|=a),Wc(f.return,a,r),T.lanes|=a;break}k=k.next}}else if(f.tag===10)v=f.type===r.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),Wc(v,a,r),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===r){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Qs(r,a),d=hn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=In(c,r.pendingProps),d=In(c.type,d),Kp(n,r,c,d,a);case 15:return Qp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:In(c,d),Yl(n,r),r.tag=1,qt(c)?(n=!0,Vl(r)):n=!1,Qs(r,a),jp(r,c,d),lh(r,c,d,a),dh(null,r,c,!0,n,a);case 19:return rm(n,r,a);case 22:return Xp(n,r,a)}throw Error(t(156,r.tag))};function Cm(n,r){return Uo(n,r)}function G0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(n,r,a,c){return new G0(n,r,a,c)}function Dh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function K0(n){if(typeof n=="function")return Dh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===_t)return 14}return 2}function oi(n,r){var a=n.alternate;return a===null?(a=pn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function lu(n,r,a,c,d,f){var v=2;if(c=n,typeof n=="function")Dh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case P:return Ji(a.children,d,f,r);case I:v=8,d|=8;break;case R:return n=pn(12,a,r,d|2),n.elementType=R,n.lanes=f,n;case S:return n=pn(13,a,r,d),n.elementType=S,n.lanes=f,n;case qe:return n=pn(19,a,r,d),n.elementType=qe,n.lanes=f,n;case Ye:return uu(a,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:v=10;break e;case N:v=9;break e;case V:v=11;break e;case _t:v=14;break e;case Nt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=pn(v,a,r,d),r.elementType=n,r.type=c,r.lanes=f,r}function Ji(n,r,a,c){return n=pn(7,n,c,r),n.lanes=a,n}function uu(n,r,a,c){return n=pn(22,n,c,r),n.elementType=Ye,n.lanes=a,n.stateNode={isHidden:!1},n}function Vh(n,r,a){return n=pn(6,n,null,r),n.lanes=a,n}function Oh(n,r,a){return r=pn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Q0(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qo(0),this.expirationTimes=qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qo(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Mh(n,r,a,c,d,f,v,T,k){return n=new Q0(n,r,a,T,k),r===1?(r=1,f===!0&&(r|=8)):r=0,f=pn(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kc(f),n}function X0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ye,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function km(n){if(!n)return Yr;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(qt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(qt(a))return np(n,a,r)}return r}function Pm(n,r,a,c,d,f,v,T,k){return n=Mh(a,c,!0,n,d,f,v,T,k),n.context=km(null),a=n.current,c=Bt(),d=ii(a),f=wr(c,d),f.callback=r??null,ei(a,f,d),n.current.lanes=d,Li(n,d,c),Gt(n,c),n}function cu(n,r,a,c){var d=r.current,f=Bt(),v=ii(d);return a=km(a),r.context===null?r.context=a:r.pendingContext=a,r=wr(f,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=ei(d,r,v),n!==null&&(Rn(n,d,v,f),zl(n,d,v)),v}function hu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Nm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Lh(n,r){Nm(n,r),(n=n.alternate)&&Nm(n,r)}function Y0(){return null}var xm=typeof reportError=="function"?reportError:function(n){console.error(n)};function bh(n){this._internalRoot=n}du.prototype.render=bh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));cu(n,r,null,null)},du.prototype.unmount=bh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Qi(function(){cu(null,n,null,null)}),r[mr]=null}};function du(n){this._internalRoot=n}du.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ko();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Jt.length&&r!==0&&r<Jt[a].priority;a++);Jt.splice(a,0,n),a===0&&Cs(n)}};function Fh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function fu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function J0(n,r,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var U=hu(v);f.call(U)}}var v=Pm(r,c,n,0,null,!1,!1,"",Dm);return n._reactRootContainer=v,n[mr]=v.current,oa(n.nodeType===8?n.parentNode:n),Qi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var U=hu(k);T.call(U)}}var k=Mh(n,0,!1,null,null,!1,!1,"",Dm);return n._reactRootContainer=k,n[mr]=k.current,oa(n.nodeType===8?n.parentNode:n),Qi(function(){cu(r,k,a,c)}),k}function pu(n,r,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var T=d;d=function(){var k=hu(v);T.call(k)}}cu(r,v,n,d)}else v=J0(a,r,n,d,c);return hu(v)}Wo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=be(r.pendingLanes);a!==0&&(Ho(r,a|1),Gt(r,Ge()),(Me&6)===0&&(eo=Ge()+500,Jr()))}break;case 13:Qi(function(){var c=vr(n,1);if(c!==null){var d=Bt();Rn(c,n,1,d)}}),Lh(n,1)}},As=function(n){if(n.tag===13){var r=vr(n,134217728);if(r!==null){var a=Bt();Rn(r,n,134217728,a)}Lh(n,134217728)}},Go=function(n){if(n.tag===13){var r=ii(n),a=vr(n,r);if(a!==null){var c=Bt();Rn(a,n,r,c)}Lh(n,r)}},Ko=function(){return De},Qo=function(n,r){var a=De;try{return De=n,r()}finally{De=a}},sr=function(n,r,a){switch(r){case"input":if(Ri(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=xl(c);if(!d)throw Error(t(90));No(c),Ri(c,d)}}}break;case"textarea":nl(n,a);break;case"select":r=a.value,r!=null&&yn(n,!!a.multiple,r,!1)}},sl=Ph,ol=Qi;var Z0={usingClientEntryPoint:!1,Events:[ua,zs,xl,Fr,Ur,Ph]},Ia={findFiberByHostInstance:zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ew={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=fl(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||Y0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{Di=mu.inject(ew),Xt=mu}catch{}}return Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0,Kt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fh(r))throw Error(t(200));return X0(n,r,null,a)},Kt.createRoot=function(n,r){if(!Fh(n))throw Error(t(299));var a=!1,c="",d=xm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Mh(n,1,!1,null,null,a,!1,c,d),n[mr]=r.current,oa(n.nodeType===8?n.parentNode:n),new bh(r)},Kt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=fl(r),n=n===null?null:n.stateNode,n},Kt.flushSync=function(n){return Qi(n)},Kt.hydrate=function(n,r,a){if(!fu(r))throw Error(t(200));return pu(null,n,r,!0,a)},Kt.hydrateRoot=function(n,r,a){if(!Fh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=xm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=Pm(r,null,n,1,a??null,d,!1,f,v),n[mr]=r.current,oa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new du(r)},Kt.render=function(n,r,a){if(!fu(r))throw Error(t(200));return pu(null,n,r,!1,a)},Kt.unmountComponentAtNode=function(n){if(!fu(n))throw Error(t(40));return n._reactRootContainer?(Qi(function(){pu(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1},Kt.unstable_batchedUpdates=Ph,Kt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!fu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return pu(n,r,a,!1,c)},Kt.version="18.3.1-next-f1338f8080-20240426",Kt}var jm;function lw(){if(jm)return zh.exports;jm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),zh.exports=aw(),zh.exports}var zm;function uw(){if(zm)return gu;zm=1;var i=lw();return gu.createRoot=i.createRoot,gu.hydrateRoot=i.hydrateRoot,gu}var cw=uw(),ze=Pd();const hw=()=>{};var Bm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},dw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},wy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,_=y?i[o+2]:0,E=u>>2,A=(u&3)<<4|m>>4;let C=(m&15)<<2|_>>6,z=_&63;y||(z=64,h||(C=64)),s.push(t[E],t[A],t[C],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(vy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):dw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const A=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||A==null)throw new fw;const C=u<<2|m>>4;if(s.push(C),_!==64){const z=m<<4&240|_>>2;if(s.push(z),A!==64){const Q=_<<6&192|A;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class fw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pw=function(i){const e=vy(i);return wy.encodeByteArray(e,!0)},Ou=function(i){return pw(i).replace(/\./g,"")},Ey=function(i){try{return wy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=()=>mw().__FIREBASE_DEFAULTS__,yw=()=>{if(typeof process>"u"||typeof Bm>"u")return;const i=Bm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},_w=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Ey(i[1]);return e&&JSON.parse(e)},Zu=()=>{try{return hw()||gw()||yw()||_w()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Ty=i=>Zu()?.emulatorHosts?.[i],vw=i=>{const e=Ty(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Iy=()=>Zu()?.config,Sy=i=>Zu()?.[`_${i}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ay(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Ou(JSON.stringify(t)),Ou(JSON.stringify(h)),""].join(".")}const Na={};function Tw(){const i={prod:[],emulator:[]};for(const e of Object.keys(Na))Na[e]?i.emulator.push(e):i.prod.push(e);return i}function Iw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let $m=!1;function Ry(i,e){if(typeof window>"u"||typeof document>"u"||!To(window.location.host)||Na[i]===e||Na[i]||$m)return;Na[i]=e;function t(C){return`__firebase__banner__${C}`}const s="__firebase__banner",u=Tw().prod.length>0;function h(){const C=document.getElementById(s);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function y(C,z){C.setAttribute("width","24"),C.setAttribute("id",z),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function _(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{$m=!0,h()},C}function E(C,z){C.setAttribute("id",z),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function A(){const C=Iw(s),z=t("text"),Q=document.getElementById(z)||document.createElement("span"),X=t("learnmore"),q=document.getElementById(X)||document.createElement("a"),ne=t("preprendIcon"),ie=document.getElementById(ne)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ee=C.element;m(ee),E(q,X);const fe=_();y(ie,ne),ee.append(ie,Q,q,fe),document.body.appendChild(ee)}u?(Q.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ie.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Q.innerText="Preview backend running in this workspace."),Q.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function Aw(){const i=Zu()?.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function kw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pw(){const i=Ut();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Nw(){return!Aw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xw(){try{return typeof indexedDB=="object"}catch{return!1}}function Dw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="FirebaseError";class Nr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Vw,Object.setPrototypeOf(this,Nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ha.prototype.create)}}class Ha{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Ow(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Nr(o,m,s)}}function Ow(i,e){return i.replace(Mw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Mw=/\{\$([^}]+)}/g;function Lw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function rs(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(qm(u)&&qm(h)){if(!rs(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function qm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function bw(i,e){const t=new Fw(i,e);return t.subscribe.bind(t)}class Fw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Uw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=qh),o.error===void 0&&(o.error=qh),o.complete===void 0&&(o.complete=qh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Uw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function qh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(i){return i&&i._delegate?i._delegate:i}class is{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ww;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bw(e))try{this.getOrInitializeService({instanceIdentifier:Zi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zi){return this.instances.has(e)}getOptions(e=Zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zi){return this.component?this.component.multipleInstances?e:Zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zw(i){return i===Zi?void 0:i}function Bw(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Pe||(Pe={}));const qw={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},Hw=Pe.INFO,Ww={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},Gw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=Ww[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nd{constructor(e){this.name=e,this._logLevel=Hw,this._logHandler=Gw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const Kw=(i,e)=>e.some(t=>i instanceof t);let Hm,Wm;function Qw(){return Hm||(Hm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xw(){return Wm||(Wm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cy=new WeakMap,nd=new WeakMap,ky=new WeakMap,Hh=new WeakMap,xd=new WeakMap;function Yw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(pi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Cy.set(t,i)}).catch(()=>{}),xd.set(e,i),e}function Jw(i){if(nd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});nd.set(i,e)}let rd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return nd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ky.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Zw(i){rd=i(rd)}function eE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Wh(this),e,...t);return ky.set(s,e.sort?e.sort():[e]),pi(s)}:Xw().includes(i)?function(...e){return i.apply(Wh(this),e),pi(Cy.get(this))}:function(...e){return pi(i.apply(Wh(this),e))}}function tE(i){return typeof i=="function"?eE(i):(i instanceof IDBTransaction&&Jw(i),Kw(i,Qw())?new Proxy(i,rd):i)}function pi(i){if(i instanceof IDBRequest)return Yw(i);if(Hh.has(i))return Hh.get(i);const e=tE(i);return e!==i&&(Hh.set(i,e),xd.set(e,i)),e}const Wh=i=>xd.get(i);function nE(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=pi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(pi(h.result),y.oldVersion,y.newVersion,pi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const rE=["get","getKey","getAll","getAllKeys","count"],iE=["put","add","delete","clear"],Gh=new Map;function Gm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Gh.get(e))return Gh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=iE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||rE.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&y.done]))[0]};return Gh.set(e,u),u}Zw(i=>({...i,get:(e,t,s)=>Gm(e,t)||i.get(e,t,s),has:(e,t)=>!!Gm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(oE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function oE(i){return i.getComponent()?.type==="VERSION"}const id="@firebase/app",Km="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Nd("@firebase/app"),aE="@firebase/app-compat",lE="@firebase/analytics-compat",uE="@firebase/analytics",cE="@firebase/app-check-compat",hE="@firebase/app-check",dE="@firebase/auth",fE="@firebase/auth-compat",pE="@firebase/database",mE="@firebase/data-connect",gE="@firebase/database-compat",yE="@firebase/functions",_E="@firebase/functions-compat",vE="@firebase/installations",wE="@firebase/installations-compat",EE="@firebase/messaging",TE="@firebase/messaging-compat",IE="@firebase/performance",SE="@firebase/performance-compat",AE="@firebase/remote-config",RE="@firebase/remote-config-compat",CE="@firebase/storage",kE="@firebase/storage-compat",PE="@firebase/firestore",NE="@firebase/ai",xE="@firebase/firestore-compat",DE="firebase",VE="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="[DEFAULT]",OE={[id]:"fire-core",[aE]:"fire-core-compat",[uE]:"fire-analytics",[lE]:"fire-analytics-compat",[hE]:"fire-app-check",[cE]:"fire-app-check-compat",[dE]:"fire-auth",[fE]:"fire-auth-compat",[pE]:"fire-rtdb",[mE]:"fire-data-connect",[gE]:"fire-rtdb-compat",[yE]:"fire-fn",[_E]:"fire-fn-compat",[vE]:"fire-iid",[wE]:"fire-iid-compat",[EE]:"fire-fcm",[TE]:"fire-fcm-compat",[IE]:"fire-perf",[SE]:"fire-perf-compat",[AE]:"fire-rc",[RE]:"fire-rc-compat",[CE]:"fire-gcs",[kE]:"fire-gcs-compat",[PE]:"fire-fst",[xE]:"fire-fst-compat",[NE]:"fire-vertex","fire-js":"fire-js",[DE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=new Map,ME=new Map,od=new Map;function Qm(i,e){try{i.container.addComponent(e)}catch(t){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function po(i){const e=i.name;if(od.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;od.set(e,i);for(const t of Mu.values())Qm(t,i);for(const t of ME.values())Qm(t,i);return!0}function Dd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Xn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mi=new Ha("app","Firebase",LE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=VE;function Py(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:sd,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw mi.create("bad-app-name",{appName:String(o)});if(t||(t=Iy()),!t)throw mi.create("no-options");const u=Mu.get(o);if(u){if(rs(t,u.options)&&rs(s,u.config))return u;throw mi.create("duplicate-app",{appName:o})}const h=new $w(o);for(const y of od.values())h.addComponent(y);const m=new bE(t,s,h);return Mu.set(o,m),m}function Ny(i=sd){const e=Mu.get(i);if(!e&&i===sd&&Iy())return Py();if(!e)throw mi.create("no-app",{appName:i});return e}function gi(i,e,t){let s=OE[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(h.join(" "));return}po(new is(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="firebase-heartbeat-database",UE=1,La="firebase-heartbeat-store";let Kh=null;function xy(){return Kh||(Kh=nE(FE,UE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(La)}catch(t){console.warn(t)}}}}).catch(i=>{throw mi.create("idb-open",{originalErrorMessage:i.message})})),Kh}async function jE(i){try{const t=(await xy()).transaction(La),s=await t.objectStore(La).get(Dy(i));return await t.done,s}catch(e){if(e instanceof Nr)Ar.warn(e.message);else{const t=mi.create("idb-get",{originalErrorMessage:e?.message});Ar.warn(t.message)}}}async function Xm(i,e){try{const s=(await xy()).transaction(La,"readwrite");await s.objectStore(La).put(e,Dy(i)),await s.done}catch(t){if(t instanceof Nr)Ar.warn(t.message);else{const s=mi.create("idb-set",{originalErrorMessage:t?.message});Ar.warn(s.message)}}}function Dy(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=1024,BE=30;class $E{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new HE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ym();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>BE){const o=WE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ar.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ym(),{heartbeatsToSend:t,unsentEntries:s}=qE(this._heartbeatsCache.heartbeats),o=Ou(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ar.warn(e),""}}}function Ym(){return new Date().toISOString().substring(0,10)}function qE(i,e=zE){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Jm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Jm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class HE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xw()?Dw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await jE(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Xm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Xm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jm(i){return Ou(JSON.stringify({version:2,heartbeats:i})).length}function WE(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(i){po(new is("platform-logger",e=>new sE(e),"PRIVATE")),po(new is("heartbeat",e=>new $E(e),"PRIVATE")),gi(id,Km,i),gi(id,Km,"esm2020"),gi("fire-js","")}GE("");var Zm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yi,Vy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,I){function R(){}R.prototype=I.prototype,P.F=I.prototype,P.prototype=new R,P.prototype.constructor=P,P.D=function(D,N,V){for(var S=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)S[qe-2]=arguments[qe];return I.prototype[N].apply(D,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,I,R){R||(R=0);const D=Array(16);if(typeof I=="string")for(var N=0;N<16;++N)D[N]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(N=0;N<16;++N)D[N]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=P.g[0],R=P.g[1],N=P.g[2];let V=P.g[3],S;S=I+(V^R&(N^V))+D[0]+3614090360&4294967295,I=R+(S<<7&4294967295|S>>>25),S=V+(N^I&(R^N))+D[1]+3905402710&4294967295,V=I+(S<<12&4294967295|S>>>20),S=N+(R^V&(I^R))+D[2]+606105819&4294967295,N=V+(S<<17&4294967295|S>>>15),S=R+(I^N&(V^I))+D[3]+3250441966&4294967295,R=N+(S<<22&4294967295|S>>>10),S=I+(V^R&(N^V))+D[4]+4118548399&4294967295,I=R+(S<<7&4294967295|S>>>25),S=V+(N^I&(R^N))+D[5]+1200080426&4294967295,V=I+(S<<12&4294967295|S>>>20),S=N+(R^V&(I^R))+D[6]+2821735955&4294967295,N=V+(S<<17&4294967295|S>>>15),S=R+(I^N&(V^I))+D[7]+4249261313&4294967295,R=N+(S<<22&4294967295|S>>>10),S=I+(V^R&(N^V))+D[8]+1770035416&4294967295,I=R+(S<<7&4294967295|S>>>25),S=V+(N^I&(R^N))+D[9]+2336552879&4294967295,V=I+(S<<12&4294967295|S>>>20),S=N+(R^V&(I^R))+D[10]+4294925233&4294967295,N=V+(S<<17&4294967295|S>>>15),S=R+(I^N&(V^I))+D[11]+2304563134&4294967295,R=N+(S<<22&4294967295|S>>>10),S=I+(V^R&(N^V))+D[12]+1804603682&4294967295,I=R+(S<<7&4294967295|S>>>25),S=V+(N^I&(R^N))+D[13]+4254626195&4294967295,V=I+(S<<12&4294967295|S>>>20),S=N+(R^V&(I^R))+D[14]+2792965006&4294967295,N=V+(S<<17&4294967295|S>>>15),S=R+(I^N&(V^I))+D[15]+1236535329&4294967295,R=N+(S<<22&4294967295|S>>>10),S=I+(N^V&(R^N))+D[1]+4129170786&4294967295,I=R+(S<<5&4294967295|S>>>27),S=V+(R^N&(I^R))+D[6]+3225465664&4294967295,V=I+(S<<9&4294967295|S>>>23),S=N+(I^R&(V^I))+D[11]+643717713&4294967295,N=V+(S<<14&4294967295|S>>>18),S=R+(V^I&(N^V))+D[0]+3921069994&4294967295,R=N+(S<<20&4294967295|S>>>12),S=I+(N^V&(R^N))+D[5]+3593408605&4294967295,I=R+(S<<5&4294967295|S>>>27),S=V+(R^N&(I^R))+D[10]+38016083&4294967295,V=I+(S<<9&4294967295|S>>>23),S=N+(I^R&(V^I))+D[15]+3634488961&4294967295,N=V+(S<<14&4294967295|S>>>18),S=R+(V^I&(N^V))+D[4]+3889429448&4294967295,R=N+(S<<20&4294967295|S>>>12),S=I+(N^V&(R^N))+D[9]+568446438&4294967295,I=R+(S<<5&4294967295|S>>>27),S=V+(R^N&(I^R))+D[14]+3275163606&4294967295,V=I+(S<<9&4294967295|S>>>23),S=N+(I^R&(V^I))+D[3]+4107603335&4294967295,N=V+(S<<14&4294967295|S>>>18),S=R+(V^I&(N^V))+D[8]+1163531501&4294967295,R=N+(S<<20&4294967295|S>>>12),S=I+(N^V&(R^N))+D[13]+2850285829&4294967295,I=R+(S<<5&4294967295|S>>>27),S=V+(R^N&(I^R))+D[2]+4243563512&4294967295,V=I+(S<<9&4294967295|S>>>23),S=N+(I^R&(V^I))+D[7]+1735328473&4294967295,N=V+(S<<14&4294967295|S>>>18),S=R+(V^I&(N^V))+D[12]+2368359562&4294967295,R=N+(S<<20&4294967295|S>>>12),S=I+(R^N^V)+D[5]+4294588738&4294967295,I=R+(S<<4&4294967295|S>>>28),S=V+(I^R^N)+D[8]+2272392833&4294967295,V=I+(S<<11&4294967295|S>>>21),S=N+(V^I^R)+D[11]+1839030562&4294967295,N=V+(S<<16&4294967295|S>>>16),S=R+(N^V^I)+D[14]+4259657740&4294967295,R=N+(S<<23&4294967295|S>>>9),S=I+(R^N^V)+D[1]+2763975236&4294967295,I=R+(S<<4&4294967295|S>>>28),S=V+(I^R^N)+D[4]+1272893353&4294967295,V=I+(S<<11&4294967295|S>>>21),S=N+(V^I^R)+D[7]+4139469664&4294967295,N=V+(S<<16&4294967295|S>>>16),S=R+(N^V^I)+D[10]+3200236656&4294967295,R=N+(S<<23&4294967295|S>>>9),S=I+(R^N^V)+D[13]+681279174&4294967295,I=R+(S<<4&4294967295|S>>>28),S=V+(I^R^N)+D[0]+3936430074&4294967295,V=I+(S<<11&4294967295|S>>>21),S=N+(V^I^R)+D[3]+3572445317&4294967295,N=V+(S<<16&4294967295|S>>>16),S=R+(N^V^I)+D[6]+76029189&4294967295,R=N+(S<<23&4294967295|S>>>9),S=I+(R^N^V)+D[9]+3654602809&4294967295,I=R+(S<<4&4294967295|S>>>28),S=V+(I^R^N)+D[12]+3873151461&4294967295,V=I+(S<<11&4294967295|S>>>21),S=N+(V^I^R)+D[15]+530742520&4294967295,N=V+(S<<16&4294967295|S>>>16),S=R+(N^V^I)+D[2]+3299628645&4294967295,R=N+(S<<23&4294967295|S>>>9),S=I+(N^(R|~V))+D[0]+4096336452&4294967295,I=R+(S<<6&4294967295|S>>>26),S=V+(R^(I|~N))+D[7]+1126891415&4294967295,V=I+(S<<10&4294967295|S>>>22),S=N+(I^(V|~R))+D[14]+2878612391&4294967295,N=V+(S<<15&4294967295|S>>>17),S=R+(V^(N|~I))+D[5]+4237533241&4294967295,R=N+(S<<21&4294967295|S>>>11),S=I+(N^(R|~V))+D[12]+1700485571&4294967295,I=R+(S<<6&4294967295|S>>>26),S=V+(R^(I|~N))+D[3]+2399980690&4294967295,V=I+(S<<10&4294967295|S>>>22),S=N+(I^(V|~R))+D[10]+4293915773&4294967295,N=V+(S<<15&4294967295|S>>>17),S=R+(V^(N|~I))+D[1]+2240044497&4294967295,R=N+(S<<21&4294967295|S>>>11),S=I+(N^(R|~V))+D[8]+1873313359&4294967295,I=R+(S<<6&4294967295|S>>>26),S=V+(R^(I|~N))+D[15]+4264355552&4294967295,V=I+(S<<10&4294967295|S>>>22),S=N+(I^(V|~R))+D[6]+2734768916&4294967295,N=V+(S<<15&4294967295|S>>>17),S=R+(V^(N|~I))+D[13]+1309151649&4294967295,R=N+(S<<21&4294967295|S>>>11),S=I+(N^(R|~V))+D[4]+4149444226&4294967295,I=R+(S<<6&4294967295|S>>>26),S=V+(R^(I|~N))+D[11]+3174756917&4294967295,V=I+(S<<10&4294967295|S>>>22),S=N+(I^(V|~R))+D[2]+718787259&4294967295,N=V+(S<<15&4294967295|S>>>17),S=R+(V^(N|~I))+D[9]+3951481745&4294967295,P.g[0]=P.g[0]+I&4294967295,P.g[1]=P.g[1]+(N+(S<<21&4294967295|S>>>11))&4294967295,P.g[2]=P.g[2]+N&4294967295,P.g[3]=P.g[3]+V&4294967295}s.prototype.v=function(P,I){I===void 0&&(I=P.length);const R=I-this.blockSize,D=this.C;let N=this.h,V=0;for(;V<I;){if(N==0)for(;V<=R;)o(this,P,V),V+=this.blockSize;if(typeof P=="string"){for(;V<I;)if(D[N++]=P.charCodeAt(V++),N==this.blockSize){o(this,D),N=0;break}}else for(;V<I;)if(D[N++]=P[V++],N==this.blockSize){o(this,D),N=0;break}}this.h=N,this.o+=I},s.prototype.A=function(){var P=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);P[0]=128;for(var I=1;I<P.length-8;++I)P[I]=0;I=this.o*8;for(var R=P.length-8;R<P.length;++R)P[R]=I&255,I/=256;for(this.v(P),P=Array(16),I=0,R=0;R<4;++R)for(let D=0;D<32;D+=8)P[I++]=this.g[R]>>>D&255;return P};function u(P,I){var R=m;return Object.prototype.hasOwnProperty.call(R,P)?R[P]:R[P]=I(P)}function h(P,I){this.h=I;const R=[];let D=!0;for(let N=P.length-1;N>=0;N--){const V=P[N]|0;D&&V==I||(R[N]=V,D=!1)}this.g=R}var m={};function y(P){return-128<=P&&P<128?u(P,function(I){return new h([I|0],I<0?-1:0)}):new h([P|0],P<0?-1:0)}function _(P){if(isNaN(P)||!isFinite(P))return A;if(P<0)return q(_(-P));const I=[];let R=1;for(let D=0;P>=R;D++)I[D]=P/R|0,R*=4294967296;return new h(I,0)}function E(P,I){if(P.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(P.charAt(0)=="-")return q(E(P.substring(1),I));if(P.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(I,8));let D=A;for(let V=0;V<P.length;V+=8){var N=Math.min(8,P.length-V);const S=parseInt(P.substring(V,V+N),I);N<8?(N=_(Math.pow(I,N)),D=D.j(N).add(_(S))):(D=D.j(R),D=D.add(_(S)))}return D}var A=y(0),C=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(X(this))return-q(this).m();let P=0,I=1;for(let R=0;R<this.g.length;R++){const D=this.i(R);P+=(D>=0?D:4294967296+D)*I,I*=4294967296}return P},i.toString=function(P){if(P=P||10,P<2||36<P)throw Error("radix out of range: "+P);if(Q(this))return"0";if(X(this))return"-"+q(this).toString(P);const I=_(Math.pow(P,6));var R=this;let D="";for(;;){const N=fe(R,I).g;R=ne(R,N.j(I));let V=((R.g.length>0?R.g[0]:R.h)>>>0).toString(P);if(R=N,Q(R))return V+D;for(;V.length<6;)V="0"+V;D=V+D}},i.i=function(P){return P<0?0:P<this.g.length?this.g[P]:this.h};function Q(P){if(P.h!=0)return!1;for(let I=0;I<P.g.length;I++)if(P.g[I]!=0)return!1;return!0}function X(P){return P.h==-1}i.l=function(P){return P=ne(this,P),X(P)?-1:Q(P)?0:1};function q(P){const I=P.g.length,R=[];for(let D=0;D<I;D++)R[D]=~P.g[D];return new h(R,~P.h).add(C)}i.abs=function(){return X(this)?q(this):this},i.add=function(P){const I=Math.max(this.g.length,P.g.length),R=[];let D=0;for(let N=0;N<=I;N++){let V=D+(this.i(N)&65535)+(P.i(N)&65535),S=(V>>>16)+(this.i(N)>>>16)+(P.i(N)>>>16);D=S>>>16,V&=65535,S&=65535,R[N]=S<<16|V}return new h(R,R[R.length-1]&-2147483648?-1:0)};function ne(P,I){return P.add(q(I))}i.j=function(P){if(Q(this)||Q(P))return A;if(X(this))return X(P)?q(this).j(q(P)):q(q(this).j(P));if(X(P))return q(this.j(q(P)));if(this.l(z)<0&&P.l(z)<0)return _(this.m()*P.m());const I=this.g.length+P.g.length,R=[];for(var D=0;D<2*I;D++)R[D]=0;for(D=0;D<this.g.length;D++)for(let N=0;N<P.g.length;N++){const V=this.i(D)>>>16,S=this.i(D)&65535,qe=P.i(N)>>>16,_t=P.i(N)&65535;R[2*D+2*N]+=S*_t,ie(R,2*D+2*N),R[2*D+2*N+1]+=V*_t,ie(R,2*D+2*N+1),R[2*D+2*N+1]+=S*qe,ie(R,2*D+2*N+1),R[2*D+2*N+2]+=V*qe,ie(R,2*D+2*N+2)}for(P=0;P<I;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=I;P<2*I;P++)R[P]=0;return new h(R,0)};function ie(P,I){for(;(P[I]&65535)!=P[I];)P[I+1]+=P[I]>>>16,P[I]&=65535,I++}function ee(P,I){this.g=P,this.h=I}function fe(P,I){if(Q(I))throw Error("division by zero");if(Q(P))return new ee(A,A);if(X(P))return I=fe(q(P),I),new ee(q(I.g),q(I.h));if(X(I))return I=fe(P,q(I)),new ee(q(I.g),I.h);if(P.g.length>30){if(X(P)||X(I))throw Error("slowDivide_ only works with positive integers.");for(var R=C,D=I;D.l(P)<=0;)R=le(R),D=le(D);var N=ye(R,1),V=ye(D,1);for(D=ye(D,2),R=ye(R,2);!Q(D);){var S=V.add(D);S.l(P)<=0&&(N=N.add(R),V=S),D=ye(D,1),R=ye(R,1)}return I=ne(P,N.j(I)),new ee(N,I)}for(N=A;P.l(I)>=0;){for(R=Math.max(1,Math.floor(P.m()/I.m())),D=Math.ceil(Math.log(R)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),V=_(R),S=V.j(I);X(S)||S.l(P)>0;)R-=D,V=_(R),S=V.j(I);Q(V)&&(V=C),N=N.add(V),P=ne(P,S)}return new ee(N,P)}i.B=function(P){return fe(this,P).h},i.and=function(P){const I=Math.max(this.g.length,P.g.length),R=[];for(let D=0;D<I;D++)R[D]=this.i(D)&P.i(D);return new h(R,this.h&P.h)},i.or=function(P){const I=Math.max(this.g.length,P.g.length),R=[];for(let D=0;D<I;D++)R[D]=this.i(D)|P.i(D);return new h(R,this.h|P.h)},i.xor=function(P){const I=Math.max(this.g.length,P.g.length),R=[];for(let D=0;D<I;D++)R[D]=this.i(D)^P.i(D);return new h(R,this.h^P.h)};function le(P){const I=P.g.length+1,R=[];for(let D=0;D<I;D++)R[D]=P.i(D)<<1|P.i(D-1)>>>31;return new h(R,P.h)}function ye(P,I){const R=I>>5;I%=32;const D=P.g.length-R,N=[];for(let V=0;V<D;V++)N[V]=I>0?P.i(V+R)>>>I|P.i(V+R+1)<<32-I:P.i(V+R);return new h(N,P.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Vy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,yi=h}).apply(typeof Zm<"u"?Zm:typeof self<"u"?self:typeof window<"u"?window:{});var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oy,Ra,My,Iu,ad,Ly,by,Fy;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof yu=="object"&&yu];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var g=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var b=l[w];if(!(b in g))break e;g=g[b]}l=l[l.length-1],w=g[l],p=p(w),p!=w&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var g=[],w;for(w in p)Object.prototype.hasOwnProperty.call(p,w)&&g.push([w,p[w]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function _(l,p,g){return _=y,_.apply(null,arguments)}function E(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function A(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(w,b,j){for(var J=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)J[Te-2]=arguments[Te];return p.prototype[b].apply(w,J)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function z(l){const p=l.length;if(p>0){const g=Array(p);for(let w=0;w<p;w++)g[w]=l[w];return g}return[]}function Q(l,p){for(let w=1;w<arguments.length;w++){const b=arguments[w];var g=typeof b;if(g=g!="object"?g:b?Array.isArray(b)?"array":g:"null",g=="array"||g=="object"&&typeof b.length=="number"){g=l.length||0;const j=b.length||0;l.length=g+j;for(let J=0;J<j;J++)l[g+J]=b[J]}else l.push(b)}}class X{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function q(l){h.setTimeout(()=>{throw l},0)}function ne(){var l=P;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class ie{constructor(){this.h=this.g=null}add(p,g){const w=ee.get();w.set(p,g),this.h?this.h.next=w:this.g=w,this.h=w}}var ee=new X(()=>new fe,l=>l.reset());class fe{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let le,ye=!1,P=new ie,I=()=>{const l=Promise.resolve(void 0);le=()=>{l.then(R)}};function R(){for(var l;l=ne();){try{l.h.call(l.g)}catch(g){q(g)}var p=ee;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}ye=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function S(l){return/^[\s\xa0]*$/.test(l)}function qe(l,p){N.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}A(qe,N),qe.prototype.init=function(l,p){const g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&qe.Z.h.call(this)},qe.prototype.h=function(){qe.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var _t="closure_listenable_"+(Math.random()*1e6|0),Nt=0;function Ye(l,p,g,w,b){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!w,this.ha=b,this.key=++Nt,this.da=this.fa=!1}function Z(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function pe(l,p,g){for(const w in l)p.call(g,l[w],w,l)}function oe(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function O(l){const p={};for(const g in l)p[g]=l[g];return p}const H="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Se(l,p){let g,w;for(let b=1;b<arguments.length;b++){w=arguments[b];for(g in w)l[g]=w[g];for(let j=0;j<H.length;j++)g=H[j],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function Ae(l){this.src=l,this.g={},this.h=0}Ae.prototype.add=function(l,p,g,w,b){const j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);const J=ke(l,p,w,b);return J>-1?(p=l[J],g||(p.fa=!1)):(p=new Ye(p,this.src,j,!!w,b),p.fa=g,l.push(p)),p};function Ce(l,p){const g=p.type;if(g in l.g){var w=l.g[g],b=Array.prototype.indexOf.call(w,p,void 0),j;(j=b>=0)&&Array.prototype.splice.call(w,b,1),j&&(Z(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function ke(l,p,g,w){for(let b=0;b<l.length;++b){const j=l[b];if(!j.da&&j.listener==p&&j.capture==!!g&&j.ha==w)return b}return-1}var Fe="closure_lm_"+(Math.random()*1e6|0),Oe={};function Be(l,p,g,w,b){if(Array.isArray(p)){for(let j=0;j<p.length;j++)Be(l,p[j],g,w,b);return null}return g=xo(g),l&&l[_t]?l.J(p,g,m(w)?!!w.capture:!1,b):jt(l,p,g,!1,w,b)}function jt(l,p,g,w,b,j){if(!p)throw Error("Invalid event type");const J=m(b)?!!b.capture:!!b;let Te=gs(l);if(Te||(l[Fe]=Te=new Ae(l)),g=Te.add(p,g,w,J,j),g.proxy)return g;if(w=ps(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)V||(b=J),b===void 0&&(b=!1),l.addEventListener(p.toString(),w,b);else if(l.attachEvent)l.attachEvent(ms(p.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ps(){function l(g){return p.call(l.src,l.listener,g)}const p=tl;return l}function No(l,p,g,w,b){if(Array.isArray(p))for(var j=0;j<p.length;j++)No(l,p[j],g,w,b);else w=m(w)?!!w.capture:!!w,g=xo(g),l&&l[_t]?(l=l.i,j=String(p).toString(),j in l.g&&(p=l.g[j],g=ke(p,g,w,b),g>-1&&(Z(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[j],l.h--)))):l&&(l=gs(l))&&(p=l.g[p.toString()],l=-1,p&&(l=ke(p,g,w,b)),(g=l>-1?p[l]:null)&&Dr(g))}function Dr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[_t])Ce(p.i,l);else{var g=l.type,w=l.proxy;p.removeEventListener?p.removeEventListener(g,w,l.capture):p.detachEvent?p.detachEvent(ms(g),w):p.addListener&&p.removeListener&&p.removeListener(w),(g=gs(p))?(Ce(g,l),g.h==0&&(g.src=null,p[Fe]=null)):Z(l)}}}function ms(l){return l in Oe?Oe[l]:Oe[l]="on"+l}function tl(l,p){if(l.da)l=!0;else{p=new qe(p,this);const g=l.listener,w=l.ha||l.src;l.fa&&Dr(l),l=g.call(w,p)}return l}function gs(l){return l=l[Fe],l instanceof Ae?l:null}var Ri="__closure_events_fn_"+(Math.random()*1e9>>>0);function xo(l){return typeof l=="function"?l:(l[Ri]||(l[Ri]=function(p){return l.handleEvent(p)}),l[Ri])}function ut(){D.call(this),this.i=new Ae(this),this.M=this,this.G=null}A(ut,D),ut.prototype[_t]=!0,ut.prototype.removeEventListener=function(l,p,g,w){No(this,l,p,g,w)};function it(l,p){var g,w=l.G;if(w)for(g=[];w;w=w.G)g.push(w);if(l=l.M,w=p.type||p,typeof p=="string")p=new N(p,l);else if(p instanceof N)p.target=p.target||l;else{var b=p;p=new N(w,l),Se(p,b)}b=!0;let j,J;if(g)for(J=g.length-1;J>=0;J--)j=p.g=g[J],b=yn(j,w,!0,p)&&b;if(j=p.g=l,b=yn(j,w,!0,p)&&b,b=yn(j,w,!1,p)&&b,g)for(J=0;J<g.length;J++)j=p.g=g[J],b=yn(j,w,!1,p)&&b}ut.prototype.N=function(){if(ut.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let w=0;w<g.length;w++)Z(g[w]);delete l.g[p],l.h--}}this.G=null},ut.prototype.J=function(l,p,g,w){return this.i.add(String(l),p,!1,g,w)},ut.prototype.K=function(l,p,g,w){return this.i.add(String(l),p,!0,g,w)};function yn(l,p,g,w){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let b=!0;for(let j=0;j<p.length;++j){const J=p[j];if(J&&!J.da&&J.capture==g){const Te=J.listener,st=J.ha||J.src;J.fa&&Ce(l.i,J),b=Te.call(st,w)!==!1&&b}}return b&&!w.defaultPrevented}function Do(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Vo(l){l.g=Do(()=>{l.g=null,l.i&&(l.i=!1,Vo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class nl extends D{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Vo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vr(l){D.call(this),this.h=l,this.g={}}A(Vr,D);var Oo=[];function ys(l){pe(l.g,function(p,g){this.g.hasOwnProperty(g)&&Dr(p)},l),l.g={}}Vr.prototype.N=function(){Vr.Z.N.call(this),ys(this)},Vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Or=h.JSON.stringify,rl=h.JSON.parse,Ci=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Mr(){}function il(){}var Lr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _s(){N.call(this,"d")}A(_s,N);function Mo(){N.call(this,"c")}A(Mo,N);var _n={},vs=null;function br(){return vs=vs||new ut}_n.Ia="serverreachability";function ws(l){N.call(this,_n.Ia,l)}A(ws,N);function sr(l){const p=br();it(p,new ws(p))}_n.STAT_EVENT="statevent";function or(l,p){N.call(this,_n.STAT_EVENT,l),this.stat=p}A(or,N);function nt(l){const p=br();it(p,new or(p,l))}_n.Ja="timingevent";function Lo(l,p){N.call(this,_n.Ja,l),this.size=p}A(Lo,N);function Fr(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function Ur(){this.g=!0}Ur.prototype.ua=function(){this.g=!1};function sl(l,p,g,w,b,j){l.info(function(){if(l.g)if(j){var J="",Te=j.split("&");for(let je=0;je<Te.length;je++){var st=Te[je].split("=");if(st.length>1){const ct=st[0];st=st[1];const tn=ct.split("_");J=tn.length>=2&&tn[1]=="type"?J+(ct+"="+st+"&"):J+(ct+"=redacted&")}}}else J=null;else J=j;return"XMLHTTP REQ ("+w+") [attempt "+b+"]: "+p+`
`+g+`
`+J})}function ol(l,p,g,w,b,j,J){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+b+"]: "+p+`
`+g+`
`+j+" "+J})}function xn(l,p,g,w){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+ki(l,g)+(w?" "+w:"")})}function al(l,p){l.info(function(){return"TIMEOUT: "+p})}Ur.prototype.info=function(){};function ki(l,p){if(!l.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(l=0;l<j.length;l++)if(Array.isArray(j[l])){var g=j[l];if(!(g.length<2)){var w=g[1];if(Array.isArray(w)&&!(w.length<1)){var b=w[0];if(b!="noop"&&b!="stop"&&b!="close")for(let J=1;J<w.length;J++)w[J]=""}}}}return Or(j)}catch{return p}}var jr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},zr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ll;function ar(){}A(ar,Mr),ar.prototype.g=function(){return new XMLHttpRequest},ll=new ar;function Dn(l){return encodeURIComponent(String(l))}function Es(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function an(l,p,g,w){this.j=l,this.i=p,this.l=g,this.S=w||1,this.V=new Vr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ul}function ul(){this.i=null,this.g="",this.h=!1}var cl={},bo={};function vn(l,p,g){l.M=1,l.A=ur(ln(p)),l.u=g,l.R=!0,Fo(l,null)}function Fo(l,p){l.F=Date.now(),Pi(l),l.B=ln(l.A);var g=l.B,w=l.S;Array.isArray(w)||(w=[String(w)]),Ko(g.i,"t",w),l.C=0,g=l.j.L,l.h=new ul,l.g=wl(l.j,g?p:null,!l.u),l.P>0&&(l.O=new nl(_(l.Y,l,l.g),l.P)),p=l.V,g=l.g,w=l.ba;var b="readystatechange";Array.isArray(b)||(b&&(Oo[0]=b.toString()),b=Oo);for(let j=0;j<b.length;j++){const J=Be(g,b[j],w||p.handleEvent,!1,p.h||p);if(!J)break;p.g[J.key]=J}p=l.J?O(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),sr(),sl(l.i,l.v,l.B,l.l,l.S,l.u)}an.prototype.ba=function(l){l=l.target;const p=this.O;p&&Un(l)==3?p.j():this.Y(l)},an.prototype.Y=function(l){try{if(l==this.g)e:{const Te=Un(this.g),st=this.g.ya(),je=this.g.ca();if(!(Te<3)&&(Te!=3||this.g&&(this.h.h||this.g.la()||_l(this.g)))){this.K||Te!=4||st==7||(st==8||je<=0?sr(3):sr(2)),Ts(this);var p=this.g.ca();this.X=p;var g=hl(this);if(this.o=p==200,ol(this.i,this.v,this.B,this.l,this.S,Te,p),this.o){if(this.U&&!this.L){t:{if(this.g){var w,b=this.g;if((w=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(w)){var j=w;break t}}j=null}if(l=j)xn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,l);else{this.o=!1,this.m=3,nt(12),lr(this),Ni(this);break e}}if(this.R){l=!0;let ct;for(;!this.K&&this.C<g.length;)if(ct=fl(this,g),ct==bo){Te==4&&(this.m=4,nt(14),l=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==cl){this.m=4,nt(15),xn(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else xn(this.i,this.l,ct,null),Ge(this,ct);if(dl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||g.length!=0||this.h.h||(this.m=1,nt(16),l=!1),this.o=this.o&&l,!l)xn(this.i,this.l,g,"[Invalid Chunked Response]"),lr(this),Ni(this);else if(g.length>0&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.aa&&!J.P&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Ui(J),J.P=!0,nt(11))}}else xn(this.i,this.l,g,null),Ge(this,g);Te==4&&lr(this),this.o&&!this.K&&(Te==4?Ds(this.j,this):(this.o=!1,Pi(this)))}else Xo(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),lr(this),Ni(this)}}}catch{}finally{}};function hl(l){if(!dl(l))return l.g.la();const p=_l(l.g);if(p==="")return"";let g="";const w=p.length,b=Un(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return lr(l),Ni(l),"";l.h.i=new h.TextDecoder}for(let j=0;j<w;j++)l.h.h=!0,g+=l.h.i.decode(p[j],{stream:!(b&&j==w-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function dl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function fl(l,p){var g=l.C,w=p.indexOf(`
`,g);return w==-1?bo:(g=Number(p.substring(g,w)),isNaN(g)?cl:(w+=1,w+g>p.length?bo:(p=p.slice(w,w+g),l.C=w+g,p)))}an.prototype.cancel=function(){this.K=!0,lr(this)};function Pi(l){l.T=Date.now()+l.H,Uo(l,l.H)}function Uo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Fr(_(l.aa,l),p)}function Ts(l){l.D&&(h.clearTimeout(l.D),l.D=null)}an.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(al(this.i,this.B),this.M!=2&&(sr(),nt(17)),lr(this),this.m=2,Ni(this)):Uo(this,this.T-l)};function Ni(l){l.j.I==0||l.K||Ds(l.j,l)}function lr(l){Ts(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,ys(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Ge(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||zo(g.h,l))){if(!l.L&&zo(g.h,l)&&g.I==3){try{var w=g.Ba.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var b=w;if(b[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)xs(g),Zt(g);else break e;Bn(g),nt(18)}}else g.xa=b[1],0<g.xa-g.K&&b[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Fr(_(g.Va,g),6e3));xi(g.h)<=1&&g.ta&&(g.ta=void 0)}else en(g,11)}else if((l.L||g.g==l)&&xs(g),!S(p))for(b=g.Ba.g.parse(p),p=0;p<b.length;p++){let je=b[p];const ct=je[0];if(!(ct<=g.K))if(g.K=ct,je=je[1],g.I==2)if(je[0]=="c"){g.M=je[1],g.ba=je[2];const tn=je[3];tn!=null&&(g.ka=tn,g.j.info("VER="+g.ka));const pr=je[4];pr!=null&&(g.za=pr,g.j.info("SVER="+g.za));const $n=je[5];$n!=null&&typeof $n=="number"&&$n>0&&(w=1.5*$n,g.O=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const qn=l.g;if(qn){const Ms=qn.g?qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ms){var j=w.h;j.g||Ms.indexOf("spdy")==-1&&Ms.indexOf("quic")==-1&&Ms.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Ss(j,j.h),j.h=null))}if(w.G){const Zo=qn.g?qn.g.getResponseHeader("X-HTTP-Session-Id"):null;Zo&&(w.wa=Zo,be(w.J,w.G,Zo))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),w=g;var J=l;if(w.na=Jo(w,w.L?w.ba:null,w.W),J.L){Di(w.h,J);var Te=J,st=w.O;st&&(Te.H=st),Te.D&&(Ts(Te),Pi(Te)),w.g=J}else xt(w);g.i.length>0&&fr(g)}else je[0]!="stop"&&je[0]!="close"||en(g,7);else g.I==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?en(g,7):Ps(g):je[0]!="noop"&&g.l&&g.l.qa(je),g.A=0)}}sr(4)}catch{}}var gc=class{constructor(l,p){this.g=l,this.map=p}};function Is(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function jo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function xi(l){return l.h?1:l.g?l.g.size:0}function zo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Ss(l,p){l.g?l.g.add(p):l.h=p}function Di(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Is.prototype.cancel=function(){if(this.i=Xt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Xt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return z(l.i)}var pl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yt(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const w=l[g].indexOf("=");let b,j=null;w>=0?(b=l[g].substring(0,w),j=l[g].substring(w+1)):b=l[g],p(b,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Vn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Vn?(this.l=l.l,Vi(this,l.j),this.o=l.o,this.g=l.g,On(this,l.u),this.h=l.h,Br(this,Qo(l.i)),this.m=l.m):l&&(p=String(l).match(pl))?(this.l=!1,Vi(this,p[1]||"",!0),this.o=Oi(p[2]||""),this.g=Oi(p[3]||"",!0),On(this,p[4]),this.h=Oi(p[5]||"",!0),Br(this,p[6]||"",!0),this.m=Oi(p[7]||"")):(this.l=!1,this.i=new De(null,this.l))}Vn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Mi(p,$o,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Mi(p,$o,!0),"@"),l.push(Dn(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Mi(g,g.charAt(0)=="/"?Li:qo,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Mi(g,Ho)),l.join("")},Vn.prototype.resolve=function(l){const p=ln(this);let g=!!l.j;g?Vi(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var w=l.h;if(g)On(p,l.u);else if(g=!!l.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var b=p.h.lastIndexOf("/");b!=-1&&(w=p.h.slice(0,b+1)+w)}if(b=w,b==".."||b==".")w="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){w=b.lastIndexOf("/",0)==0,b=b.split("/");const j=[];for(let J=0;J<b.length;){const Te=b[J++];Te=="."?w&&J==b.length&&j.push(""):Te==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),w&&J==b.length&&j.push("")):(j.push(Te),w=!0)}w=j.join("/")}else w=b}return g?p.h=w:g=l.i.toString()!=="",g?Br(p,Qo(l.i)):g=!!l.m,g&&(p.m=l.m),p};function ln(l){return new Vn(l)}function Vi(l,p,g){l.j=g?Oi(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function On(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function Br(l,p,g){p instanceof De?(l.i=p,Rs(l.i,l.l)):(g||(p=Mi(p,yc)),l.i=new De(p,l.l))}function be(l,p,g){l.i.set(p,g)}function ur(l){return be(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Oi(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Mi(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,Bo),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Bo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var $o=/[#\/\?@]/g,qo=/[#\?:]/g,Li=/[#\?]/g,yc=/[#\?@]/g,Ho=/#/g;function De(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Mn(l){l.g||(l.g=new Map,l.h=0,l.i&&Yt(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}i=De.prototype,i.add=function(l,p){Mn(this),this.i=null,l=Ln(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function Wo(l,p){Mn(l),p=Ln(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function As(l,p){return Mn(l),p=Ln(l,p),l.g.has(p)}i.forEach=function(l,p){Mn(this),this.g.forEach(function(g,w){g.forEach(function(b){l.call(p,b,w,this)},this)},this)};function Go(l,p){Mn(l);let g=[];if(typeof p=="string")As(l,p)&&(g=g.concat(l.g.get(Ln(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}i.set=function(l,p){return Mn(this),this.i=null,l=Ln(this,l),As(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=Go(this,l),l.length>0?String(l[0]):p):p};function Ko(l,p,g){Wo(l,p),g.length>0&&(l.i=null,l.g.set(Ln(l,p),z(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let w=0;w<p.length;w++){var g=p[w];const b=Dn(g);g=Go(this,g);for(let j=0;j<g.length;j++){let J=b;g[j]!==""&&(J+="="+Dn(g[j])),l.push(J)}}return this.i=l.join("&")};function Qo(l){const p=new De;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Ln(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Rs(l,p){p&&!l.j&&(Mn(l),l.i=null,l.g.forEach(function(g,w){const b=w.toLowerCase();w!=b&&(Wo(this,w),Ko(this,b,g))},l)),l.j=p}function bn(l,p){const g=new Ur;if(h.Image){const w=new Image;w.onload=E(It,g,"TestLoadImage: loaded",!0,p,w),w.onerror=E(It,g,"TestLoadImage: error",!1,p,w),w.onabort=E(It,g,"TestLoadImage: abort",!1,p,w),w.ontimeout=E(It,g,"TestLoadImage: timeout",!1,p,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else p(!1)}function Fn(l,p){const g=new Ur,w=new AbortController,b=setTimeout(()=>{w.abort(),It(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:w.signal}).then(j=>{clearTimeout(b),j.ok?It(g,"TestPingServer: ok",!0,p):It(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(b),It(g,"TestPingServer: error",!1,p)})}function It(l,p,g,w,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),w(g)}catch{}}function bi(){this.g=new Ci}function cr(l){this.i=l.Sb||null,this.h=l.ab||!1}A(cr,Mr),cr.prototype.g=function(){return new Jt(this.i,this.h)};function Jt(l,p){ut.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(Jt,ut),i=Jt.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,wn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,$r(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ml(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function ml(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?$r(this):wn(this),this.readyState==3&&ml(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,$r(this))},i.Na=function(l){this.g&&(this.response=l,$r(this))},i.ga=function(){this.g&&$r(this)};function $r(l){l.readyState=4,l.l=null,l.j=null,l.B=null,wn(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function wn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Jt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function gl(l){let p="";return pe(l,function(g,w){p+=w,p+=":",p+=g,p+=`\r
`}),p}function Cs(l,p,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=gl(g),typeof l=="string"?g!=null&&Dn(g):be(l,p,g))}function $e(l){ut.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A($e,ut);var yl=/^https?$/i,_c=["POST","PUT"];i=$e.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ll.g(),this.g.onreadystatechange=C(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(j){qr(this,j);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var b in w)g.set(b,w[b]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())g.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),b=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(_c,p,void 0)>=0)||w||b||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,J]of g)this.g.setRequestHeader(j,J);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(j){qr(this,j)}};function qr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Hr(l),dr(l)}function Hr(l){l.A||(l.A=!0,it(l,"complete"),it(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,it(this,"complete"),it(this,"abort"),dr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dr(this,!0)),$e.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?hr(this):this.Xa())},i.Xa=function(){hr(this)};function hr(l){if(l.h&&typeof u<"u"){if(l.v&&Un(l)==4)setTimeout(l.Ca.bind(l),0);else if(it(l,"readystatechange"),Un(l)==4){l.h=!1;try{const j=l.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var w;if(w=j===0){let J=String(l.D).match(pl)[1]||null;!J&&h.self&&h.self.location&&(J=h.self.location.protocol.slice(0,-1)),w=!yl.test(J?J.toLowerCase():"")}g=w}if(g)it(l,"complete"),it(l,"success");else{l.o=6;try{var b=Un(l)>2?l.g.statusText:""}catch{b=""}l.l=b+" ["+l.ca()+"]",Hr(l)}}finally{dr(l)}}}}function dr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||it(l,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Un(l){return l.g?l.g.readyState:0}i.ca=function(){try{return Un(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),rl(p)}};function _l(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Xo(l){const p={};l=(l.g&&Un(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(S(l[w]))continue;var g=Es(l[w]);const b=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=p[b]||[];p[b]=j,j.push(g)}oe(p,function(w){return w.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function jn(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function ks(l){this.za=0,this.i=[],this.j=new Ur,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=jn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=jn("baseRetryDelayMs",5e3,l),this.Za=jn("retryDelaySeedMs",1e4,l),this.Ta=jn("forwardChannelMaxRetries",2,l),this.va=jn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Is(l&&l.concurrentRequestLimit),this.Ba=new bi,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=ks.prototype,i.ka=8,i.I=1,i.connect=function(l,p,g,w){nt(0),this.W=l,this.H=p||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.J=Jo(this,null,this.W),fr(this)};function Ps(l){if(Ns(l),l.I==3){var p=l.V++,g=ln(l.J);if(be(g,"SID",l.M),be(g,"RID",p),be(g,"TYPE","terminate"),zn(l,g),p=new an(l,l.j,p),p.M=2,p.A=ur(ln(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=wl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Pi(p)}ji(l)}function Zt(l){l.g&&(Ui(l),l.g.cancel(),l.g=null)}function Ns(l){Zt(l),l.v&&(h.clearTimeout(l.v),l.v=null),xs(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function fr(l){if(!jo(l.h)&&!l.m){l.m=!0;var p=l.Ea;le||I(),ye||(le(),ye=!0),P.add(p,l),l.D=0}}function vl(l,p){return xi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Fr(_(l.Ea,l,p),Vs(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const b=new an(this,this.j,l);let j=this.o;if(this.U&&(j?(j=O(j),Se(j,this.U)):j=this.U),this.u!==null||this.R||(b.J=j,j=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=Yo(this,b,p),g=ln(this.J),be(g,"RID",l),be(g,"CVER",22),this.G&&be(g,"X-HTTP-Session-Id",this.G),zn(this,g),j&&(this.R?p="headers="+Dn(gl(j))+"&"+p:this.u&&Cs(g,this.u,j)),Ss(this.h,b),this.Ra&&be(g,"TYPE","init"),this.S?(be(g,"$req",p),be(g,"SID","null"),b.U=!0,vn(b,g,null)):vn(b,g,p),this.I=2}}else this.I==3&&(l?Fi(this,l):this.i.length==0||jo(this.h)||Fi(this))};function Fi(l,p){var g;p?g=p.l:g=l.V++;const w=ln(l.J);be(w,"SID",l.M),be(w,"RID",g),be(w,"AID",l.K),zn(l,w),l.u&&l.o&&Cs(w,l.u,l.o),g=new an(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Yo(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Ss(l.h,g),vn(g,w,p)}function zn(l,p){l.H&&pe(l.H,function(g,w){be(p,w,g)}),l.l&&pe({},function(g,w){be(p,w,g)})}function Yo(l,p,g){g=Math.min(l.i.length,g);const w=l.l?_(l.l.Ka,l.l,l):null;e:{var b=l.i;let Te=-1;for(;;){const st=["count="+g];Te==-1?g>0?(Te=b[0].g,st.push("ofs="+Te)):Te=0:st.push("ofs="+Te);let je=!0;for(let ct=0;ct<g;ct++){var j=b[ct].g;const tn=b[ct].map;if(j-=Te,j<0)Te=Math.max(0,b[ct].g-100),je=!1;else try{j="req"+j+"_"||"";try{var J=tn instanceof Map?tn:Object.entries(tn);for(const[pr,$n]of J){let qn=$n;m($n)&&(qn=Or($n)),st.push(j+pr+"="+encodeURIComponent(qn))}}catch(pr){throw st.push(j+"type="+encodeURIComponent("_badmap")),pr}}catch{w&&w(tn)}}if(je){J=st.join("&");break e}}J=void 0}return l=l.i.splice(0,g),p.G=l,J}function xt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;le||I(),ye||(le(),ye=!0),P.add(p,l),l.A=0}}function Bn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Fr(_(l.Da,l),Vs(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,Wr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Fr(_(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),Zt(this),Wr(this))};function Ui(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Wr(l){l.g=new an(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=ln(l.na);be(p,"RID","rpc"),be(p,"SID",l.M),be(p,"AID",l.K),be(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&be(p,"TO",l.ia),be(p,"TYPE","xmlhttp"),zn(l,p),l.u&&l.o&&Cs(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=ur(ln(p)),g.u=null,g.R=!0,Fo(g,l)}i.Va=function(){this.C!=null&&(this.C=null,Zt(this),Bn(this),nt(19))};function xs(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Ds(l,p){var g=null;if(l.g==p){xs(l),Ui(l),l.g=null;var w=2}else if(zo(l.h,p))g=p.G,Di(l.h,p),w=1;else return;if(l.I!=0){if(p.o)if(w==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var b=l.D;w=br(),it(w,new Lo(w,g)),fr(l)}else xt(l);else if(b=p.m,b==3||b==0&&p.X>0||!(w==1&&vl(l,p)||w==2&&Bn(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),b){case 1:en(l,5);break;case 4:en(l,10);break;case 3:en(l,6);break;default:en(l,2)}}}function Vs(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function en(l,p){if(l.j.info("Error code "+p),p==2){var g=_(l.bb,l),w=l.Ua;const b=!w;w=new Vn(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Vi(w,"https"),ur(w),b?bn(w.toString(),g):Fn(w.toString(),g)}else nt(2);l.I=0,l.l&&l.l.pa(p),ji(l),Ns(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function ji(l){if(l.I=0,l.ja=[],l.l){const p=Xt(l.h);(p.length!=0||l.i.length!=0)&&(Q(l.ja,p),Q(l.ja,l.i),l.h.i.length=0,z(l.i),l.i.length=0),l.l.oa()}}function Jo(l,p,g){var w=g instanceof Vn?ln(g):new Vn(g);if(w.g!="")p&&(w.g=p+"."+w.g),On(w,w.u);else{var b=h.location;w=b.protocol,p=p?p+"."+b.hostname:b.hostname,b=+b.port;const j=new Vn(null);w&&Vi(j,w),p&&(j.g=p),b&&On(j,b),g&&(j.h=g),w=j}return g=l.G,p=l.wa,g&&p&&be(w,g,p),be(w,"VER",l.ka),zn(l,w),w}function wl(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new $e(new cr({ab:g})):new $e(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function El(){}i=El.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Os(){}Os.prototype.g=function(l,p){return new St(l,p)};function St(l,p){ut.call(this),this.g=new ks(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!S(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!S(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Gr(this)}A(St,ut),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Ps(this.g)},St.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=Or(l),l=g);p.i.push(new gc(p.Ya++,l)),p.I==3&&fr(p)},St.prototype.N=function(){this.g.l=null,delete this.j,Ps(this.g),delete this.g,St.Z.N.call(this)};function Tl(l){_s.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}A(Tl,_s);function Il(){Mo.call(this),this.status=1}A(Il,Mo);function Gr(l){this.g=l}A(Gr,El),Gr.prototype.ra=function(){it(this.g,"a")},Gr.prototype.qa=function(l){it(this.g,new Tl(l))},Gr.prototype.pa=function(l){it(this.g,new Il)},Gr.prototype.oa=function(){it(this.g,"b")},Os.prototype.createWebChannel=Os.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,Fy=function(){return new Os},by=function(){return br()},Ly=_n,ad={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},jr.NO_ERROR=0,jr.TIMEOUT=8,jr.HTTP_ERROR=6,Iu=jr,zr.COMPLETE="complete",My=zr,il.EventType=Lr,Lr.OPEN="a",Lr.CLOSE="b",Lr.ERROR="c",Lr.MESSAGE="d",ut.prototype.listen=ut.prototype.J,Ra=il,$e.prototype.listenOnce=$e.prototype.K,$e.prototype.getLastError=$e.prototype.Ha,$e.prototype.getLastErrorCode=$e.prototype.ya,$e.prototype.getStatus=$e.prototype.ca,$e.prototype.getResponseJson=$e.prototype.La,$e.prototype.getResponseText=$e.prototype.la,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Fa,Oy=$e}).apply(typeof yu<"u"?yu:typeof self<"u"?self:typeof window<"u"?window:{});const eg="@firebase/firestore",tg="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new Nd("@firebase/firestore");function no(){return ss.logLevel}function se(i,...e){if(ss.logLevel<=Pe.DEBUG){const t=e.map(Vd);ss.debug(`Firestore (${So}): ${i}`,...t)}}function Rr(i,...e){if(ss.logLevel<=Pe.ERROR){const t=e.map(Vd);ss.error(`Firestore (${So}): ${i}`,...t)}}function mo(i,...e){if(ss.logLevel<=Pe.WARN){const t=e.map(Vd);ss.warn(`Firestore (${So}): ${i}`,...t)}}function Vd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Uy(i,s,t)}function Uy(i,e,t){let s=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Rr(s),new Error(s)}function Ue(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||Uy(e,o,s)}function Ie(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Nr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(bt.UNAUTHENTICATED)))}shutdown(){}}class QE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class XE{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new _i;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new _i,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new _i)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string",31837,{l:s}),new jy(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new bt(e)}}class YE{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class JE{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new YE(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ng{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZE{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const s=u=>{u.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ng(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ng(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=eT(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ne(i,e){return i<e?-1:i>e?1:0}function ld(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return Qh(o)===Qh(u)?Ne(o,u):Qh(o)?1:-1}return Ne(i.length,e.length)}const tT=55296,nT=57343;function Qh(i){const e=i.charCodeAt(0);return e>=tT&&e<=nT}function go(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="__name__";class Qn{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Qn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Qn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ne(e.length,t.length)}static compareSegments(e,t){const s=Qn.isNumericId(e),o=Qn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Qn.extractNumericId(e).compare(Qn.extractNumericId(t)):ld(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yi.fromString(e.substring(4,e.length-2))}}class We extends Qn{construct(e,t,s){return new We(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new te(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new We(t)}static emptyPath(){return new We([])}}const rT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Qn{construct(e,t,s){return new kt(e,t,s)}static isValidIdentifier(e){return rT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rg}static keyField(){return new kt([rg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new te(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new te(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new te(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new te(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(We.fromString(e))}static fromName(e){return new de(We.fromString(e).popFirst(5))}static empty(){return new de(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new We(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(i,e,t){if(!t)throw new te(B.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function iT(i,e,t,s){if(e===!0&&s===!0)throw new te(B.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function ig(i){if(!de.isDocumentKey(i))throw new te(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function sg(i){if(de.isDocumentKey(i))throw new te(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function By(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function ec(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":_e(12329,{type:typeof i})}function Yn(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new te(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ec(i);throw new te(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(i,e){const t={typeString:i};return e&&(t.value=e),t}function Ga(i,e){if(!By(i))throw new te(B.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new te(B.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=-62135596800,ag=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*ag);return new Xe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<og)throw new te(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ag}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ga(e,Xe._jsonSchema))return new Xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-og;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Xe._jsonSchemaVersion="firestore/timestamp/1.0",Xe._jsonSchema={type:pt("string",Xe._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Xe(0,0))}static max(){return new Ee(new Xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=-1;function sT(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(s===1e9?new Xe(t+1,0):new Xe(t,s));return new wi(o,de.empty(),e)}function oT(i){return new wi(i.readTime,i.key,ba)}class wi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new wi(Ee.min(),de.empty(),ba)}static max(){return new wi(Ee.max(),de.empty(),ba)}}function aT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(i.documentKey,e.documentKey),t!==0?t:Ne(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(i){if(i.code!==B.FAILED_PRECONDITION||i.message!==lT)throw i;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const _=y;t(e[_]).next((E=>{h[_]=E,++m,m===u&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new $(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function cT(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ro(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}tc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=-1;function nc(i){return i==null}function Lu(i){return i===0&&1/i==-1/0}function hT(i){return typeof i=="number"&&Number.isInteger(i)&&!Lu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="";function dT(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=lg(e)),e=fT(i.get(t),e);return lg(e)}function fT(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case $y:t+="";break;default:t+=u}}return t}function lg(i){return i+$y+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function us(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function qy(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _u(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _u(this.root,e,this.comparator,!1)}getReverseIterator(){return new _u(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _u(this.root,e,this.comparator,!0)}}class _u{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=o??Ct.EMPTY,this.right=u??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Ct(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new cg(this.data.getIterator())}getIteratorFrom(e){return new cg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class cg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new Cn([])}unionWith(e){let t=new yt(kt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Cn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Hy("Invalid base64 string: "+u):u}})(e);return new Pt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const pT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ei(i){if(Ue(!!i,39018),typeof i=="string"){let e=0;const t=pT.exec(i);if(Ue(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:at(i.seconds),nanos:at(i.nanos)}}function at(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ti(i){return typeof i=="string"?Pt.fromBase64String(i):Pt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="server_timestamp",Gy="__type__",Ky="__previous_value__",Qy="__local_write_time__";function Ld(i){return(i?.mapValue?.fields||{})[Gy]?.stringValue===Wy}function rc(i){const e=i.mapValue.fields[Ky];return Ld(e)?rc(e):e}function Fa(i){const e=Ei(i.mapValue.fields[Qy].timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,t,s,o,u,h,m,y,_,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=E}}const bu="(default)";class Ua{constructor(e,t){this.projectId=e,this.database=t||bu}static empty(){return new Ua("","")}get isDefaultDatabase(){return this.database===bu}isEqual(e){return e instanceof Ua&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy="__type__",gT="__max__",vu={mapValue:{}},Yy="__vector__",Fu="value";function Ii(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Ld(i)?4:_T(i)?9007199254740991:yT(i)?10:11:_e(28295,{value:i})}function ir(i,e){if(i===e)return!0;const t=Ii(i);if(t!==Ii(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Fa(i).isEqual(Fa(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ei(o.timestampValue),m=Ei(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Ti(o.bytesValue).isEqual(Ti(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return at(o.geoPointValue.latitude)===at(u.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return at(o.integerValue)===at(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=at(o.doubleValue),m=at(u.doubleValue);return h===m?Lu(h)===Lu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return go(i.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(ug(h)!==ug(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!ir(h[y],m[y])))return!1;return!0})(i,e);default:return _e(52216,{left:i})}}function ja(i,e){return(i.values||[]).find((t=>ir(t,e)))!==void 0}function yo(i,e){if(i===e)return 0;const t=Ii(i),s=Ii(e);if(t!==s)return Ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=at(u.integerValue||u.doubleValue),y=at(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return hg(i.timestampValue,e.timestampValue);case 4:return hg(Fa(i),Fa(e));case 5:return ld(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ti(u),y=Ti(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let _=0;_<m.length&&_<y.length;_++){const E=Ne(m[_],y[_]);if(E!==0)return E}return Ne(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Ne(at(u.latitude),at(h.latitude));return m!==0?m:Ne(at(u.longitude),at(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return dg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){const m=u.fields||{},y=h.fields||{},_=m[Fu]?.arrayValue,E=y[Fu]?.arrayValue,A=Ne(_?.values?.length||0,E?.values?.length||0);return A!==0?A:dg(_,E)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===vu.mapValue&&h===vu.mapValue)return 0;if(u===vu.mapValue)return 1;if(h===vu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),_=h.fields||{},E=Object.keys(_);y.sort(),E.sort();for(let A=0;A<y.length&&A<E.length;++A){const C=ld(y[A],E[A]);if(C!==0)return C;const z=yo(m[y[A]],_[E[A]]);if(z!==0)return z}return Ne(y.length,E.length)})(i.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function hg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ne(i,e);const t=Ei(i),s=Ei(e),o=Ne(t.seconds,s.seconds);return o!==0?o:Ne(t.nanos,s.nanos)}function dg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=yo(t[o],s[o]);if(u)return u}return Ne(t.length,s.length)}function _o(i){return ud(i)}function ud(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Ei(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ti(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return de.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=ud(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${ud(t.fields[h])}`;return o+"}"})(i.mapValue):_e(61005,{value:i})}function Su(i){switch(Ii(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=rc(i);return e?16+Su(e):16;case 5:return 2*i.stringValue.length;case 6:return Ti(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Su(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return us(s.fields,((u,h)=>{o+=u.length+Su(h)})),o})(i.mapValue);default:throw _e(13486,{value:i})}}function fg(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function cd(i){return!!i&&"integerValue"in i}function bd(i){return!!i&&"arrayValue"in i}function pg(i){return!!i&&"nullValue"in i}function mg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Au(i){return!!i&&"mapValue"in i}function yT(i){return(i?.mapValue?.fields||{})[Xy]?.stringValue===Yy}function xa(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return us(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=xa(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xa(i.arrayValue.values[t]);return e}return{...i}}function _T(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===gT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.value=e}static empty(){return new mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Au(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xa(t)}setAll(e){let t=kt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=xa(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Au(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Au(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){us(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new mn(xa(this.value))}}function Jy(i){const e=[];return us(i.fields,((t,s)=>{const o=new kt([t]);if(Au(s)){const u=Jy(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Cn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ft(e,0,Ee.min(),Ee.min(),Ee.min(),mn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ft(e,1,t,Ee.min(),s,o,0)}static newNoDocument(e,t){return new Ft(e,2,t,Ee.min(),Ee.min(),mn.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,Ee.min(),Ee.min(),mn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,t){this.position=e,this.inclusive=t}}function gg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=yo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function yg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ir(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t="asc"){this.field=e,this.dir=t}}function vT(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{}class ft extends Zy{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new ET(e,t,s):t==="array-contains"?new ST(e,s):t==="in"?new AT(e,s):t==="not-in"?new RT(e,s):t==="array-contains-any"?new CT(e,s):new ft(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new TT(e,s):new IT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(yo(t,this.value)):t!==null&&Ii(this.value)===Ii(t)&&this.matchesComparison(yo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends Zy{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Nn(e,t)}matches(e){return e_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function e_(i){return i.op==="and"}function t_(i){return wT(i)&&e_(i)}function wT(i){for(const e of i.filters)if(e instanceof Nn)return!1;return!0}function hd(i){if(i instanceof ft)return i.field.canonicalString()+i.op.toString()+_o(i.value);if(t_(i))return i.filters.map((e=>hd(e))).join(",");{const e=i.filters.map((t=>hd(t))).join(",");return`${i.op}(${e})`}}function n_(i,e){return i instanceof ft?(function(s,o){return o instanceof ft&&s.op===o.op&&s.field.isEqual(o.field)&&ir(s.value,o.value)})(i,e):i instanceof Nn?(function(s,o){return o instanceof Nn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&n_(h,o.filters[m])),!0):!1})(i,e):void _e(19439)}function r_(i){return i instanceof ft?(function(t){return`${t.field.canonicalString()} ${t.op} ${_o(t.value)}`})(i):i instanceof Nn?(function(t){return t.op.toString()+" {"+t.getFilters().map(r_).join(" ,")+"}"})(i):"Filter"}class ET extends ft{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class TT extends ft{constructor(e,t){super(e,"in",t),this.keys=i_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class IT extends ft{constructor(e,t){super(e,"not-in",t),this.keys=i_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function i_(i,e){return(e.arrayValue?.values||[]).map((t=>de.fromName(t.referenceValue)))}class ST extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return bd(t)&&ja(t.arrayValue,this.value)}}class AT extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ja(this.value.arrayValue,t)}}class RT extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(ja(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ja(this.value.arrayValue,t)}}class CT extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!bd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>ja(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function _g(i,e=null,t=[],s=[],o=null,u=null,h=null){return new kT(i,e,t,s,o,u,h)}function Fd(i){const e=Ie(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>hd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),nc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>_o(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>_o(s))).join(",")),e.Te=t}return e.Te}function Ud(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!vT(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!n_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!yg(i.startAt,e.startAt)&&yg(i.endAt,e.endAt)}function dd(i){return de.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function PT(i,e,t,s,o,u,h,m){return new Co(i,e,t,s,o,u,h,m)}function ic(i){return new Co(i)}function vg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function s_(i){return i.collectionGroup!==null}function Da(i){const e=Ie(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(kt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new za(u,s))})),t.has(kt.keyField().canonicalString())||e.Ie.push(new za(kt.keyField(),s))}return e.Ie}function Jn(i){const e=Ie(i);return e.Ee||(e.Ee=NT(e,Da(i))),e.Ee}function NT(i,e){if(i.limitType==="F")return _g(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new za(o.field,u)}));const t=i.endAt?new Uu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Uu(i.startAt.position,i.startAt.inclusive):null;return _g(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function fd(i,e){const t=i.filters.concat([e]);return new Co(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function pd(i,e,t){return new Co(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function sc(i,e){return Ud(Jn(i),Jn(e))&&i.limitType===e.limitType}function o_(i){return`${Fd(Jn(i))}|lt:${i.limitType}`}function ro(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>r_(o))).join(", ")}]`),nc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>_o(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>_o(o))).join(",")),`Target(${s})`})(Jn(i))}; limitType=${i.limitType})`}function oc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):de.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Da(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const _=gg(h,m,y);return h.inclusive?_<=0:_<0})(s.startAt,Da(s),o)||s.endAt&&!(function(h,m,y){const _=gg(h,m,y);return h.inclusive?_>=0:_>0})(s.endAt,Da(s),o))})(i,e)}function xT(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function a_(i){return(e,t)=>{let s=!1;for(const o of Da(i)){const u=DT(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function DT(i,e,t){const s=i.field.isKeyField()?de.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),_=m.data.field(u);return y!==null&&_!==null?yo(y,_):_e(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){us(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return qy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=new tt(de.comparator);function Cr(){return VT}const l_=new tt(de.comparator);function Ca(...i){let e=l_;for(const t of i)e=e.insert(t.key,t);return e}function u_(i){let e=l_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function es(){return Va()}function c_(){return Va()}function Va(){return new cs((i=>i.toString()),((i,e)=>i.isEqual(e)))}const OT=new tt(de.comparator),MT=new yt(de.comparator);function xe(...i){let e=MT;for(const t of i)e=e.add(t);return e}const LT=new yt(Ne);function bT(){return LT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lu(e)?"-0":e}}function h_(i){return{integerValue:""+i}}function FT(i,e){return hT(e)?h_(e):jd(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this._=void 0}}function UT(i,e,t){return i instanceof ju?(function(o,u){const h={fields:{[Gy]:{stringValue:Wy},[Qy]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Ld(u)&&(u=rc(u)),u&&(h.fields[Ky]=u),{mapValue:h}})(t,e):i instanceof Ba?f_(i,e):i instanceof $a?p_(i,e):(function(o,u){const h=d_(o,u),m=wg(h)+wg(o.Ae);return cd(h)&&cd(o.Ae)?h_(m):jd(o.serializer,m)})(i,e)}function jT(i,e,t){return i instanceof Ba?f_(i,e):i instanceof $a?p_(i,e):t}function d_(i,e){return i instanceof zu?(function(s){return cd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class ju extends ac{}class Ba extends ac{constructor(e){super(),this.elements=e}}function f_(i,e){const t=m_(e);for(const s of i.elements)t.some((o=>ir(o,s)))||t.push(s);return{arrayValue:{values:t}}}class $a extends ac{constructor(e){super(),this.elements=e}}function p_(i,e){let t=m_(e);for(const s of i.elements)t=t.filter((o=>!ir(o,s)));return{arrayValue:{values:t}}}class zu extends ac{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function wg(i){return at(i.integerValue||i.doubleValue)}function m_(i){return bd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function zT(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Ba&&o instanceof Ba||s instanceof $a&&o instanceof $a?go(s.elements,o.elements,ir):s instanceof zu&&o instanceof zu?ir(s.Ae,o.Ae):s instanceof ju&&o instanceof ju})(i.transform,e.transform)}class BT{constructor(e,t){this.version=e,this.transformResults=t}}class Pn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Pn}static exists(e){return new Pn(void 0,e)}static updateTime(e){return new Pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ru(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class lc{}function g_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new zd(i.key,Pn.none()):new Ka(i.key,i.data,Pn.none());{const t=i.data,s=mn.empty();let o=new yt(kt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new hs(i.key,s,new Cn(o.toArray()),Pn.none())}}function $T(i,e,t){i instanceof Ka?(function(o,u,h){const m=o.value.clone(),y=Tg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof hs?(function(o,u,h){if(!Ru(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Tg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(y_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Oa(i,e,t,s){return i instanceof Ka?(function(u,h,m,y){if(!Ru(u.precondition,h))return m;const _=u.value.clone(),E=Ig(u.fieldTransforms,y,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof hs?(function(u,h,m,y){if(!Ru(u.precondition,h))return m;const _=Ig(u.fieldTransforms,y,h),E=h.data;return E.setAll(y_(u)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((A=>A.field)))})(i,e,t,s):(function(u,h,m){return Ru(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function qT(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=d_(s.transform,o||null);u!=null&&(t===null&&(t=mn.empty()),t.set(s.field,u))}return t||null}function Eg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&go(s,o,((u,h)=>zT(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Ka extends lc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class hs extends lc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function y_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Tg(i,e,t){const s=new Map;Ue(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,jT(h,m,t[o]))}return s}function Ig(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,UT(u,h,e))}return s}class zd extends lc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HT extends lc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&$T(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Oa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Oa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=c_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=g_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(Ee.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),xe())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,((t,s)=>Eg(t,s)))&&go(this.baseMutations,e.baseMutations,((t,s)=>Eg(t,s)))}}class Bd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ue(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return OT})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Bd(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,Ve;function QT(i){switch(i){case B.OK:return _e(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return _e(15467,{code:i})}}function __(i){if(i===void 0)return Rr("GRPC error has no .code"),B.UNKNOWN;switch(i){case dt.OK:return B.OK;case dt.CANCELLED:return B.CANCELLED;case dt.UNKNOWN:return B.UNKNOWN;case dt.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case dt.INTERNAL:return B.INTERNAL;case dt.UNAVAILABLE:return B.UNAVAILABLE;case dt.UNAUTHENTICATED:return B.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case dt.NOT_FOUND:return B.NOT_FOUND;case dt.ALREADY_EXISTS:return B.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return B.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case dt.ABORTED:return B.ABORTED;case dt.OUT_OF_RANGE:return B.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return B.UNIMPLEMENTED;case dt.DATA_LOSS:return B.DATA_LOSS;default:return _e(39323,{code:i})}}(Ve=dt||(dt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=new yi([4294967295,4294967295],0);function Sg(i){const e=XT().encode(i),t=new Vy;return t.update(e),new Uint8Array(t.digest())}function Ag(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new yi([t,s],0),new yi([o,u],0)]}class $d{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ka(`Invalid padding: ${t}`);if(s<0)throw new ka(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ka(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ka(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=yi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(yi.fromNumber(s)));return o.compare(YT)===1&&(o=new yi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Sg(e),[s,o]=Ag(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new $d(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=Sg(e),[s,o]=Ag(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Qa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new uc(Ee.min(),o,new tt(Ne),Cr(),xe())}}class Qa{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Qa(s,t,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class v_{constructor(e,t){this.targetId=e,this.Ce=t}}class w_{constructor(e,t,s=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Rg{constructor(){this.ve=0,this.Fe=Cg(),this.Me=Pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=xe(),t=xe(),s=xe();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:u})}})),new Qa(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Cg()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class JT{constructor(e){this.Ge=e,this.ze=new Map,this.je=Cr(),this.Je=wu(),this.He=wu(),this.Ye=new tt(Ne)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(dd(u))if(s===0){const h=new de(u.path);this.et(t,h,Ft.newNoDocument(h,Ee.min()))}else Ue(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ti(s).toUint8Array()}catch(y){if(y instanceof Hy)return mo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new $d(h,o,u)}catch(y){return mo(y instanceof ka?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&dd(m.target)){const y=new de(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,Ft.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=xe();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const _=this.ot(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new uc(e,t,this.Ye,this.je,s);return this.je=Cr(),this.Je=wu(),this.He=wu(),this.Ye=new tt(Ne),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Rg,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new yt(Ne),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new yt(Ne),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Rg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function wu(){return new tt(de.comparator)}function Cg(){return new tt(de.comparator)}const ZT={asc:"ASCENDING",desc:"DESCENDING"},eI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tI={and:"AND",or:"OR"};class nI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function md(i,e){return i.useProto3Json||nc(e)?e:{value:e}}function Bu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function E_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function rI(i,e){return Bu(i,e.toTimestamp())}function Zn(i){return Ue(!!i,49232),Ee.fromTimestamp((function(t){const s=Ei(t);return new Xe(s.seconds,s.nanos)})(i))}function qd(i,e){return gd(i,e).canonicalString()}function gd(i,e){const t=(function(o){return new We(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function T_(i){const e=We.fromString(i);return Ue(C_(e),10190,{key:e.toString()}),e}function yd(i,e){return qd(i.databaseId,e.path)}function Xh(i,e){const t=T_(e);if(t.get(1)!==i.databaseId.projectId)throw new te(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new te(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new de(S_(t))}function I_(i,e){return qd(i.databaseId,e)}function iI(i){const e=T_(i);return e.length===4?We.emptyPath():S_(e)}function _d(i){return new We(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function S_(i){return Ue(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function kg(i,e,t){return{name:yd(i,e),fields:t.value.mapValue.fields}}function sI(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,E){return _.useProto3Json?(Ue(E===void 0||typeof E=="string",58123),Pt.fromBase64String(E||"")):(Ue(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Pt.fromUint8Array(E||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const E=_.code===void 0?B.UNKNOWN:__(_.code);return new te(E,_.message||"")})(h);t=new w_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Xh(i,s.document.name),u=Zn(s.document.updateTime),h=s.document.createTime?Zn(s.document.createTime):Ee.min(),m=new mn({mapValue:{fields:s.document.fields}}),y=Ft.newFoundDocument(o,u,h,m),_=s.targetIds||[],E=s.removedTargetIds||[];t=new Cu(_,E,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Xh(i,s.document),u=s.readTime?Zn(s.readTime):Ee.min(),h=Ft.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Cu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Xh(i,s.document),u=s.removedTargetIds||[];t=new Cu([],u,o,null)}else{if(!("filter"in e))return _e(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new KT(o,u),m=s.targetId;t=new v_(m,h)}}return t}function oI(i,e){let t;if(e instanceof Ka)t={update:kg(i,e.key,e.value)};else if(e instanceof zd)t={delete:yd(i,e.key)};else if(e instanceof hs)t={update:kg(i,e.key,e.data),updateMask:mI(e.fieldMask)};else{if(!(e instanceof HT))return _e(16599,{Vt:e.type});t={verify:yd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof ju)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ba)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof $a)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof zu)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw _e(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:rI(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e(27497)})(i,e.precondition)),t}function aI(i,e){return i&&i.length>0?(Ue(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?Zn(o.updateTime):Zn(u);return h.isEqual(Ee.min())&&(h=Zn(u)),new BT(h,o.transformResults||[])})(t,e)))):[]}function lI(i,e){return{documents:[I_(i,e.path)]}}function uI(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=I_(i,o);const u=(function(_){if(_.length!==0)return R_(Nn.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((E=>(function(C){return{field:io(C.field),direction:dI(C.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=md(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function cI(i){let e=iI(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ue(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=(function(A){const C=A_(A);return C instanceof Nn&&t_(C)?C.getFilters():[C]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((C=>(function(Q){return new za(so(Q.field),(function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Q.direction))})(C)))})(t.orderBy));let m=null;t.limit&&(m=(function(A){let C;return C=typeof A=="object"?A.value:A,nc(C)?null:C})(t.limit));let y=null;t.startAt&&(y=(function(A){const C=!!A.before,z=A.values||[];return new Uu(z,C)})(t.startAt));let _=null;return t.endAt&&(_=(function(A){const C=!A.before,z=A.values||[];return new Uu(z,C)})(t.endAt)),PT(e,o,h,u,m,"F",y,_)}function hI(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function A_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=so(t.unaryFilter.field);return ft.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=so(t.unaryFilter.field);return ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=so(t.unaryFilter.field);return ft.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=so(t.unaryFilter.field);return ft.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(i):i.fieldFilter!==void 0?(function(t){return ft.create(so(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Nn.create(t.compositeFilter.filters.map((s=>A_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(i):_e(30097,{filter:i})}function dI(i){return ZT[i]}function fI(i){return eI[i]}function pI(i){return tI[i]}function io(i){return{fieldPath:i.canonicalString()}}function so(i){return kt.fromServerFormat(i.fieldPath)}function R_(i){return i instanceof ft?(function(t){if(t.op==="=="){if(mg(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NAN"}};if(pg(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(mg(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NOT_NAN"}};if(pg(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:io(t.field),op:fI(t.op),value:t.value}}})(i):i instanceof Nn?(function(t){const s=t.getFilters().map((o=>R_(o)));return s.length===1?s[0]:{compositeFilter:{op:pI(t.op),filters:s}}})(i):_e(54877,{filter:i})}function mI(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function C_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t,s,o,u=Ee.min(),h=Ee.min(),m=Pt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new fi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.yt=e}}function yI(i){const e=cI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?pd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(){this.Cn=new vI}addToCollectionParentIndex(e,t){return this.Cn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(wi.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(wi.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class vI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(We.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},k_=41943040;class Qt{static withCacheSize(e){return new Qt(e,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.DEFAULT_COLLECTION_PERCENTILE=10,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qt.DEFAULT=new Qt(k_,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qt.DISABLED=new Qt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new vo(0)}static cr(){return new vo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="LruGarbageCollector",wI=1048576;function xg([i,e],[t,s]){const o=Ne(i,t);return o===0?Ne(e,s):o}class EI{constructor(e){this.Ir=e,this.buffer=new yt(xg),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();xg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class TI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){se(Ng,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ro(t)?se(Ng,"Ignoring IndexedDB error during garbage collection: ",t):await Ao(t)}await this.Vr(3e5)}))}}class II{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(tc.ce);const s=new EI(t);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Pg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pg):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,m,y,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(s=A,m=Date.now(),this.removeTargets(e,s,t)))).next((A=>(u=A,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((A=>(_=Date.now(),no()<=Pe.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${A} documents in `+(_-y)+`ms
Total Duration: ${_-E}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A}))))}}function SI(i,e){return new II(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this.changes=new cs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Oa(s.mutation,o,Cn.empty(),Xe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,xe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=xe()){const o=es();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Ca();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=es();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,xe())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Cr();const h=Va(),m=(function(){return Va()})();return t.forEach(((y,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof hs)?u=u.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),Oa(E.mutation,_,E.mutation.getFieldMask(),Xe.now())):h.set(_.key,Cn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>m.set(_,new RI(E,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Va();let o=new tt(((h,m)=>h-m)),u=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const _=t.get(y);if(_===null)return;let E=s.get(y)||Cn.empty();E=m.applyToLocalView(_,E),s.set(y,E);const A=(o.get(m.batchId)||xe()).add(y);o=o.insert(m.batchId,A)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),_=y.key,E=y.value,A=c_();E.forEach((C=>{if(!u.has(C)){const z=g_(t.get(C),s.get(C));z!==null&&A.set(C,z),u=u.add(C)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,A))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):s_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(es());let m=ba,y=u;return h.next((_=>$.forEach(_,((E,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(E)?$.resolve():this.remoteDocumentCache.getEntry(e,E).next((C=>{y=y.insert(E,C)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,y,_,xe()))).next((E=>({batchId:m,changes:u_(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((s=>{let o=Ca();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ca();return this.indexManager.getCollectionParents(e,u).next((m=>$.forEach(m,(y=>{const _=(function(A,C){return new Co(C,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((E=>{E.forEach(((A,C)=>{h=h.insert(A,C)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,Ft.newInvalidDocument(E)))}));let m=Ca();return h.forEach(((y,_)=>{const E=u.get(y);E!==void 0&&Oa(E.mutation,_,Cn.empty(),Xe.now()),oc(t,_)&&(m=m.insert(y,_))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return $.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Zn(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:yI(o.bundledQuery),readTime:Zn(o.readTime)}})(t)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.overlays=new tt(de.comparator),this.qr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=es();return $.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=es(),u=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,_=y.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new tt(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=u.get(_.largestBatchId);E===null&&(E=es(),u=u.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const m=es(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((_,E)=>m.set(_,E))),!(m.size()>=o)););return $.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new GT(t,s));let u=this.qr.get(t);u===void 0&&(u=xe(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.Qr=new yt(Tt.$r),this.Ur=new yt(Tt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Tt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Tt(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new de(new We([])),s=new Tt(t,e),o=new Tt(t,e+1),u=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),u.push(h.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new de(new We([])),s=new Tt(t,e),o=new Tt(t,e+1);let u=xe();return this.Ur.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Tt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Tt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return de.comparator(e.key,t.key)||Ne(e.Yr,t.Yr)}static Kr(e,t){return Ne(e.Yr,t.Yr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new yt(Tt.$r)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new WT(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new Tt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Md:this.tr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Tt(t,0),o=new Tt(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(h=>{const m=this.Xr(h.Yr);u.push(m)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(Ne);return t.forEach((o=>{const u=new Tt(o,0),h=new Tt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],(m=>{s=s.add(m.Yr)}))})),$.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;de.isDocumentKey(u)||(u=u.child(""));const h=new Tt(new de(u),0);let m=new yt(Ne);return this.Zr.forEachWhile((y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(y.Yr)),!0)}),h),$.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return $.forEach(t.mutations,(o=>{const u=new Tt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Tt(t,0),o=this.Zr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.ri=e,this.docs=(function(){return new tt(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let s=Cr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ft.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Cr();const h=t.path,m=new de(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:_,value:{document:E}}=y.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||aT(oT(E),s)<=0||(o.has(E.key)||oc(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ii(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new VI(this)}getSize(e){return $.resolve(this.size)}}class VI extends AI{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.persistence=e,this.si=new cs((t=>Fd(t)),Ud),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.oi=0,this._i=new Hd,this.targetCount=0,this.ai=vo.ur()}forEachTarget(e,t){return this.si.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),$.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new vo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Pr(t),$.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t){this.ui={},this.overlays={},this.ci=new tc(0),this.li=!1,this.li=!0,this.hi=new NI,this.referenceDelegate=e(this),this.Pi=new OI(this),this.indexManager=new _I,this.remoteDocumentCache=(function(o){return new DI(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new gI(t),this.Ii=new kI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new PI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new xI(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){se("MemoryPersistence","Starting transaction:",e);const o=new MI(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,t){return $.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class MI extends uT{constructor(e){super(),this.currentSequenceNumber=e}}class Wd{constructor(e){this.persistence=e,this.Ri=new Hd,this.Vi=null}static mi(e){return new Wd(e)}get fi(){if(this.Vi)return this.Vi;throw _e(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.fi,(s=>{const o=de.fromPath(s);return this.gi(e,o).next((u=>{u||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return $.or([()=>$.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class $u{constructor(e,t){this.persistence=e,this.pi=new cs((s=>dT(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=SI(this,t)}static mi(e,t){return new $u(e,t)}Ei(){}di(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return $.forEach(this.pi,((s,o)=>this.br(e,s,o).next((u=>u?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Ee.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),$.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Su(e.data.value)),t}br(e,t,s){return $.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=xe(),o=xe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Gd(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Nw()?8:cT(Ut())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ws(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new LI;return this.Ss(e,t,h).next((m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>u.result))}bs(e,t,s,o){return s.documentReadCount<this.fs?(no()<=Pe.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",ro(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),$.resolve()):(no()<=Pe.DEBUG&&se("QueryEngine","Query:",ro(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(no()<=Pe.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",ro(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jn(t))):$.resolve())}ys(e,t){if(vg(t))return $.resolve(null);let s=Jn(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=pd(t,null,"F"),s=Jn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=xe(...u);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const _=this.Ds(t,m);return this.Cs(t,_,h,y.readTime)?this.ys(e,pd(t,null,"F")):this.vs(e,_,t,y)}))))})))))}ws(e,t,s,o){return vg(t)||o.isEqual(Ee.min())?$.resolve(null):this.ps.getDocuments(e,s).next((u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?$.resolve(null):(no()<=Pe.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ro(t)),this.vs(e,h,t,sT(o,ba)).next((m=>m)))}))}Ds(e,t){let s=new yt(a_(e));return t.forEach(((o,u)=>{oc(e,u)&&(s=s.add(u))})),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return no()<=Pe.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",ro(t)),this.ps.getDocumentsMatchingQuery(e,t,wi.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="LocalStore",FI=3e8;class UI{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new tt(Ne),this.xs=new cs((u=>Fd(u)),Ud),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new CI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function jI(i,e,t,s){return new UI(i,e,t,s)}async function N_(i,e){const t=Ie(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=xe();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)y=y.add(E.key)}for(const _ of u){m.push(_.batchId);for(const E of _.mutations)y=y.add(E.key)}return t.localDocuments.getDocuments(s,y).next((_=>({Ls:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function zI(i,e){const t=Ie(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,_,E){const A=_.batch,C=A.keys();let z=$.resolve();return C.forEach((Q=>{z=z.next((()=>E.getEntry(y,Q))).next((X=>{const q=_.docVersions.get(Q);Ue(q!==null,48541),X.version.compareTo(q)<0&&(A.applyToRemoteDocument(X,_),X.isValidDocument()&&(X.setReadTime(_.commitVersion),E.addEntry(X)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(y,A)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=xe();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(y=y.add(m.batch.mutations[_].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function x_(i){const e=Ie(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function BI(i,e){const t=Ie(i),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach(((E,A)=>{const C=o.get(A);if(!C)return;m.push(t.Pi.removeMatchingKeys(u,E.removedDocuments,A).next((()=>t.Pi.addMatchingKeys(u,E.addedDocuments,A))));let z=C.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?z=z.withResumeToken(Pt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):E.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(E.resumeToken,s)),o=o.insert(A,z),(function(X,q,ne){return X.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=FI?!0:ne.addedDocuments.size+ne.modifiedDocuments.size+ne.removedDocuments.size>0})(C,z,E)&&m.push(t.Pi.updateTargetData(u,z))}));let y=Cr(),_=xe();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push($I(u,h,e.documentUpdates).next((E=>{y=E.ks,_=E.qs}))),!s.isEqual(Ee.min())){const E=t.Pi.getLastRemoteSnapshotVersion(u).next((A=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return $.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,_))).next((()=>y))})).then((u=>(t.Ms=o,u)))}function $I(i,e,t){let s=xe(),o=xe();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Cr();return t.forEach(((m,y)=>{const _=u.get(m);y.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Ee.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):se(Kd,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",y.version)})),{ks:h,qs:o}}))}function qI(i,e){const t=Ie(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Md),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function HI(i,e){const t=Ie(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Pi.getTargetData(s,e).next((u=>u?(o=u,$.resolve(o)):t.Pi.allocateTargetId(s).next((h=>(o=new fi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function vd(i,e,t){const s=Ie(i),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Ro(h))throw h;se(Kd,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function Dg(i,e,t){const s=Ie(i);let o=Ee.min(),u=xe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,_,E){const A=Ie(y),C=A.xs.get(E);return C!==void 0?$.resolve(A.Ms.get(C)):A.Pi.getTargetData(_,E)})(s,h,Jn(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?u:xe()))).next((m=>(WI(s,xT(e),m),{documents:m,Qs:u})))))}function WI(i,e,t){let s=i.Os.get(e)||Ee.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Os.set(e,s)}class Vg{constructor(){this.activeTargetIds=bT()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GI{constructor(){this.Mo=new Vg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Vg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="ConnectivityMonitor";class Mg{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){se(Og,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){se(Og,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu=null;function wd(){return Eu===null?Eu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Eu++,"0x"+Eu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="RestConnection",QI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class XI{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===bu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=wd(),m=this.zo(e,t.toUriEncodedString());se(Yh,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:_}=new URL(m),E=To(_);return this.Jo(e,m,y,s,E).then((A=>(se(Yh,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw mo(Yh,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A}))}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+So})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}zo(e,t){const s=QI[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="WebChannelConnection";class JI extends XI{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=wd();return new Promise(((m,y)=>{const _=new Oy;_.setWithCredentials(!0),_.listenOnce(My.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Iu.NO_ERROR:const A=_.getResponseJson();se(Lt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case Iu.TIMEOUT:se(Lt,`RPC '${e}' ${h} timed out`),y(new te(B.DEADLINE_EXCEEDED,"Request time out"));break;case Iu.HTTP_ERROR:const C=_.getStatus();if(se(Lt,`RPC '${e}' ${h} failed with status:`,C,"response text:",_.getResponseText()),C>0){let z=_.getResponseJson();Array.isArray(z)&&(z=z[0]);const Q=z?.error;if(Q&&Q.status&&Q.message){const X=(function(ne){const ie=ne.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(ie)>=0?ie:B.UNKNOWN})(Q.status);y(new te(X,Q.message))}else y(new te(B.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new te(B.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{se(Lt,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);se(Lt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,s,15)}))}T_(e,t,s){const o=wd(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Fy(),m=by(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const E=u.join("");se(Lt,`Creating RPC '${e}' stream ${o}: ${E}`,y);const A=h.createWebChannel(E,y);this.I_(A);let C=!1,z=!1;const Q=new YI({Yo:q=>{z?se(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(C||(se(Lt,`Opening RPC '${e}' stream ${o} transport.`),A.open(),C=!0),se(Lt,`RPC '${e}' stream ${o} sending:`,q),A.send(q))},Zo:()=>A.close()}),X=(q,ne,ie)=>{q.listen(ne,(ee=>{try{ie(ee)}catch(fe){setTimeout((()=>{throw fe}),0)}}))};return X(A,Ra.EventType.OPEN,(()=>{z||(se(Lt,`RPC '${e}' stream ${o} transport opened.`),Q.o_())})),X(A,Ra.EventType.CLOSE,(()=>{z||(z=!0,se(Lt,`RPC '${e}' stream ${o} transport closed`),Q.a_(),this.E_(A))})),X(A,Ra.EventType.ERROR,(q=>{z||(z=!0,mo(Lt,`RPC '${e}' stream ${o} transport errored. Name:`,q.name,"Message:",q.message),Q.a_(new te(B.UNAVAILABLE,"The operation could not be completed")))})),X(A,Ra.EventType.MESSAGE,(q=>{if(!z){const ne=q.data[0];Ue(!!ne,16349);const ie=ne,ee=ie?.error||ie[0]?.error;if(ee){se(Lt,`RPC '${e}' stream ${o} received error:`,ee);const fe=ee.status;let le=(function(I){const R=dt[I];if(R!==void 0)return __(R)})(fe),ye=ee.message;le===void 0&&(le=B.INTERNAL,ye="Unknown error status: "+fe+" with message "+ee.message),z=!0,Q.a_(new te(le,ye)),A.close()}else se(Lt,`RPC '${e}' stream ${o} received:`,ne),Q.u_(ne)}})),X(m,Ly.STAT_EVENT,(q=>{q.stat===ad.PROXY?se(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):q.stat===ad.NOPROXY&&se(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{Q.__()}),0),Q}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Jh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(i){return new nI(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="PersistentStream";class V_{constructor(e,t,s,o,u,h,m,y){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new D_(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(Rr(t.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new te(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return se(Lg,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(se(Lg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ZI extends V_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=sI(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Ee.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?Zn(h.readTime):Ee.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=_d(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=dd(y)?{documents:lI(u,y)}:{query:uI(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=E_(u,h.resumeToken);const _=md(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ee.min())>0){m.readTime=Bu(u,h.snapshotVersion.toTimestamp());const _=md(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=hI(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=_d(this.serializer),t.removeTarget=e,this.q_(t)}}class e1 extends V_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=aI(e.writeResults,e.commitTime),s=Zn(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=_d(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>oI(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{}class n1 extends t1{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new te(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Go(e,gd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new te(B.UNKNOWN,u.toString())}))}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,gd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new te(B.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class r1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Rr(t),this.aa=!1):se("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="RemoteStore";class i1{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{ds(this)&&(se(os,"Restarting streams for network reachability change."),await(async function(y){const _=Ie(y);_.Ea.add(4),await Xa(_),_.Ra.set("Unknown"),_.Ea.delete(4),await hc(_)})(this))}))})),this.Ra=new r1(s,o)}}async function hc(i){if(ds(i))for(const e of i.da)await e(!0)}async function Xa(i){for(const e of i.da)await e(!1)}function O_(i,e){const t=Ie(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Jd(t)?Yd(t):ko(t).O_()&&Xd(t,e))}function Qd(i,e){const t=Ie(i),s=ko(t);t.Ia.delete(e),s.O_()&&M_(t,e),t.Ia.size===0&&(s.O_()?s.L_():ds(t)&&t.Ra.set("Unknown"))}function Xd(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ko(i).Y_(e)}function M_(i,e){i.Va.Ue(e),ko(i).Z_(e)}function Yd(i){i.Va=new JT({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),ko(i).start(),i.Ra.ua()}function Jd(i){return ds(i)&&!ko(i).x_()&&i.Ia.size>0}function ds(i){return Ie(i).Ea.size===0}function L_(i){i.Va=void 0}async function s1(i){i.Ra.set("Online")}async function o1(i){i.Ia.forEach(((e,t)=>{Xd(i,e)}))}async function a1(i,e){L_(i),Jd(i)?(i.Ra.ha(e),Yd(i)):i.Ra.set("Unknown")}async function l1(i,e,t){if(i.Ra.set("Online"),e instanceof w_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))})(i,e)}catch(s){se(os,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await qu(i,s)}else if(e instanceof Cu?i.Va.Ze(e):e instanceof v_?i.Va.st(e):i.Va.tt(e),!t.isEqual(Ee.min()))try{const s=await x_(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach(((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const E=u.Ia.get(_);E&&u.Ia.set(_,E.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,_)=>{const E=u.Ia.get(y);if(!E)return;u.Ia.set(y,E.withResumeToken(Pt.EMPTY_BYTE_STRING,E.snapshotVersion)),M_(u,y);const A=new fi(E.target,y,_,E.sequenceNumber);Xd(u,A)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){se(os,"Failed to raise snapshot:",s),await qu(i,s)}}async function qu(i,e,t){if(!Ro(e))throw e;i.Ea.add(1),await Xa(i),i.Ra.set("Offline"),t||(t=()=>x_(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{se(os,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await hc(i)}))}function b_(i,e){return e().catch((t=>qu(i,t,e)))}async function dc(i){const e=Ie(i),t=Si(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Md;for(;u1(e);)try{const o=await qI(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,c1(e,o)}catch(o){await qu(e,o)}F_(e)&&U_(e)}function u1(i){return ds(i)&&i.Ta.length<10}function c1(i,e){i.Ta.push(e);const t=Si(i);t.O_()&&t.X_&&t.ea(e.mutations)}function F_(i){return ds(i)&&!Si(i).x_()&&i.Ta.length>0}function U_(i){Si(i).start()}async function h1(i){Si(i).ra()}async function d1(i){const e=Si(i);for(const t of i.Ta)e.ea(t.mutations)}async function f1(i,e,t){const s=i.Ta.shift(),o=Bd.from(s,e,t);await b_(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await dc(i)}async function p1(i,e){e&&Si(i).X_&&await(async function(s,o){if((function(h){return QT(h)&&h!==B.ABORTED})(o.code)){const u=s.Ta.shift();Si(s).B_(),await b_(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await dc(s)}})(i,e),F_(i)&&U_(i)}async function bg(i,e){const t=Ie(i);t.asyncQueue.verifyOperationInProgress(),se(os,"RemoteStore received new credentials");const s=ds(t);t.Ea.add(3),await Xa(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await hc(t)}async function m1(i,e){const t=Ie(i);e?(t.Ea.delete(2),await hc(t)):e||(t.Ea.add(2),await Xa(t),t.Ra.set("Unknown"))}function ko(i){return i.ma||(i.ma=(function(t,s,o){const u=Ie(t);return u.sa(),new ZI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:s1.bind(null,i),t_:o1.bind(null,i),r_:a1.bind(null,i),H_:l1.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),Jd(i)?Yd(i):i.Ra.set("Unknown")):(await i.ma.stop(),L_(i))}))),i.ma}function Si(i){return i.fa||(i.fa=(function(t,s,o){const u=Ie(t);return u.sa(),new e1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:h1.bind(null,i),r_:p1.bind(null,i),ta:d1.bind(null,i),na:f1.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await dc(i)):(await i.fa.stop(),i.Ta.length>0&&(se(os,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new _i,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Zd(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ef(i,e){if(Rr("AsyncQueue",`${e}: ${i}`),Ro(i))return new te(B.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{static emptySet(e){return new ao(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=Ca(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ao)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ao;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.ga=new tt(de.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class wo{constructor(e,t,s,o,u,h,m,y,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new wo(e,t,ao.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class y1{constructor(){this.queries=Ug(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Ie(t),u=o.queries;o.queries=Ug(),u.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new te(B.ABORTED,"Firestore shutting down"))}}function Ug(){return new cs((i=>o_(i)),sc)}async function j_(i,e){const t=Ie(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new g1,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=ef(h,`Initialization of query '${ro(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&tf(t)}async function z_(i,e){const t=Ie(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function _1(i,e){const t=Ie(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&tf(t)}function v1(i,e,t){const s=Ie(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function tf(i){i.Ca.forEach((e=>{e.next()}))}var Ed,jg;(jg=Ed||(Ed={})).Ma="default",jg.Cache="cache";class B_{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new wo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ed.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.key=e}}class q_{constructor(e){this.key=e}}class w1{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=xe(),this.mutatedKeys=xe(),this.eu=a_(e),this.tu=new ao(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Fg,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,A)=>{const C=o.get(E),z=oc(this.query,A)?A:null,Q=!!C&&this.mutatedKeys.has(C.key),X=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let q=!1;C&&z?C.data.isEqual(z.data)?Q!==X&&(s.track({type:3,doc:z}),q=!0):this.su(C,z)||(s.track({type:2,doc:z}),q=!0,(y&&this.eu(z,y)>0||_&&this.eu(z,_)<0)&&(m=!0)):!C&&z?(s.track({type:0,doc:z}),q=!0):C&&!z&&(s.track({type:1,doc:C}),q=!0,(y||_)&&(m=!0)),q&&(z?(h=h.add(z),u=X?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,A)=>(function(z,Q){const X=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Rt:q})}};return X(z)-X(Q)})(E.type,A.type)||this.eu(E.doc,A.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,_=y!==this.Za;return this.Za=y,h.length!==0||_?{snapshot:new wo(this.query,e.tu,u,h,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Fg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=xe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new q_(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new $_(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=xe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return wo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const nf="SyncEngine";class E1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class T1{constructor(e){this.key=e,this.hu=!1}}class I1{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new cs((m=>o_(m)),sc),this.Iu=new Map,this.Eu=new Set,this.du=new tt(de.comparator),this.Au=new Map,this.Ru=new Hd,this.Vu={},this.mu=new Map,this.fu=vo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function S1(i,e,t=!0){const s=X_(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await H_(s,e,t,!0),o}async function A1(i,e){const t=X_(i);await H_(t,e,!0,!1)}async function H_(i,e,t,s){const o=await HI(i.localStore,Jn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await R1(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&O_(i.remoteStore,o),m}async function R1(i,e,t,s,o){i.pu=(A,C,z)=>(async function(X,q,ne,ie){let ee=q.view.ru(ne);ee.Cs&&(ee=await Dg(X.localStore,q.query,!1).then((({documents:P})=>q.view.ru(P,ee))));const fe=ie&&ie.targetChanges.get(q.targetId),le=ie&&ie.targetMismatches.get(q.targetId)!=null,ye=q.view.applyChanges(ee,X.isPrimaryClient,fe,le);return Bg(X,q.targetId,ye.au),ye.snapshot})(i,A,C,z);const u=await Dg(i.localStore,e,!0),h=new w1(e,u.Qs),m=h.ru(u.documents),y=Qa.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,y);Bg(i,t,_.au);const E=new E1(e,t,h);return i.Tu.set(e,E),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),_.snapshot}async function C1(i,e,t){const s=Ie(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((h=>!sc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await vd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Qd(s.remoteStore,o.targetId),Td(s,o.targetId)})).catch(Ao)):(Td(s,o.targetId),await vd(s.localStore,o.targetId,!0))}async function k1(i,e){const t=Ie(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Qd(t.remoteStore,s.targetId))}async function P1(i,e,t){const s=L1(i);try{const o=await(function(h,m){const y=Ie(h),_=Xe.now(),E=m.reduce(((z,Q)=>z.add(Q.key)),xe());let A,C;return y.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let Q=Cr(),X=xe();return y.Ns.getEntries(z,E).next((q=>{Q=q,Q.forEach(((ne,ie)=>{ie.isValidDocument()||(X=X.add(ne))}))})).next((()=>y.localDocuments.getOverlayedDocuments(z,Q))).next((q=>{A=q;const ne=[];for(const ie of m){const ee=qT(ie,A.get(ie.key).overlayedDocument);ee!=null&&ne.push(new hs(ie.key,ee,Jy(ee.value.mapValue),Pn.exists(!0)))}return y.mutationQueue.addMutationBatch(z,_,ne,m)})).next((q=>{C=q;const ne=q.applyToLocalDocumentSet(A,X);return y.documentOverlayCache.saveOverlays(z,q.batchId,ne)}))})).then((()=>({batchId:C.batchId,changes:u_(A)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let _=h.Vu[h.currentUser.toKey()];_||(_=new tt(Ne)),_=_.insert(m,y),h.Vu[h.currentUser.toKey()]=_})(s,o.batchId,t),await Ya(s,o.changes),await dc(s.remoteStore)}catch(o){const u=ef(o,"Failed to persist write");t.reject(u)}}async function W_(i,e){const t=Ie(i);try{const s=await BI(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Ue(h.hu,14607):o.removedDocuments.size>0&&(Ue(h.hu,42227),h.hu=!1))})),await Ya(t,s,e)}catch(s){await Ao(s)}}function zg(i,e,t){const s=Ie(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=Ie(h);y.onlineState=m;let _=!1;y.queries.forEach(((E,A)=>{for(const C of A.Sa)C.va(m)&&(_=!0)})),_&&tf(y)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function N1(i,e,t){const s=Ie(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new tt(de.comparator);h=h.insert(u,Ft.newNoDocument(u,Ee.min()));const m=xe().add(u),y=new uc(Ee.min(),new Map,new tt(Ne),h,m);await W_(s,y),s.du=s.du.remove(u),s.Au.delete(e),rf(s)}else await vd(s.localStore,e,!1).then((()=>Td(s,e,t))).catch(Ao)}async function x1(i,e){const t=Ie(i),s=e.batch.batchId;try{const o=await zI(t.localStore,e);K_(t,s,null),G_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ya(t,o)}catch(o){await Ao(o)}}async function D1(i,e,t){const s=Ie(i);try{const o=await(function(h,m){const y=Ie(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return y.mutationQueue.lookupMutationBatch(_,m).next((A=>(Ue(A!==null,37113),E=A.keys(),y.mutationQueue.removeMutationBatch(_,A)))).next((()=>y.mutationQueue.performConsistencyCheck(_))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(_,E,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>y.localDocuments.getDocuments(_,E)))}))})(s.localStore,e);K_(s,e,t),G_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ya(s,o)}catch(o){await Ao(o)}}function G_(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function K_(i,e,t){const s=Ie(i);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Td(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((s=>{i.Ru.containsKey(s)||Q_(i,s)}))}function Q_(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(Qd(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),rf(i))}function Bg(i,e,t){for(const s of t)s instanceof $_?(i.Ru.addReference(s.key,e),V1(i,s)):s instanceof q_?(se(nf,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||Q_(i,s.key)):_e(19791,{wu:s})}function V1(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(se(nf,"New document in limbo: "+t),i.Eu.add(s),rf(i))}function rf(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new de(We.fromString(e)),s=i.fu.next();i.Au.set(s,new T1(t)),i.du=i.du.insert(t,s),O_(i.remoteStore,new fi(Jn(ic(t.path)),s,"TargetPurposeLimboResolution",tc.ce))}}async function Ya(i,e,t){const s=Ie(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((_=>{if((_||t)&&s.isPrimaryClient){const E=_?!_.fromCache:t?.targetChanges.get(y.targetId)?.current;s.sharedClientState.updateQueryState(y.targetId,E?"current":"not-current")}if(_){o.push(_);const E=Gd.As(y.targetId,_);u.push(E)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(y,_){const E=Ie(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>$.forEach(_,(C=>$.forEach(C.Es,(z=>E.persistence.referenceDelegate.addReference(A,C.targetId,z))).next((()=>$.forEach(C.ds,(z=>E.persistence.referenceDelegate.removeReference(A,C.targetId,z)))))))))}catch(A){if(!Ro(A))throw A;se(Kd,"Failed to update sequence numbers: "+A)}for(const A of _){const C=A.targetId;if(!A.fromCache){const z=E.Ms.get(C),Q=z.snapshotVersion,X=z.withLastLimboFreeSnapshotVersion(Q);E.Ms=E.Ms.insert(C,X)}}})(s.localStore,u))}async function O1(i,e){const t=Ie(i);if(!t.currentUser.isEqual(e)){se(nf,"User change. New user:",e.toKey());const s=await N_(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new te(B.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ya(t,s.Ls)}}function M1(i,e){const t=Ie(i),s=t.Au.get(e);if(s&&s.hu)return xe().add(s.key);{let o=xe();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function X_(i){const e=Ie(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=W_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=M1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=N1.bind(null,e),e.Pu.H_=_1.bind(null,e.eventManager),e.Pu.yu=v1.bind(null,e.eventManager),e}function L1(i){const e=Ie(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=x1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=D1.bind(null,e),e}class Hu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=cc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return jI(this.persistence,new bI,e.initialUser,this.serializer)}Cu(e){return new P_(Wd.mi,this.serializer)}Du(e){return new GI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hu.provider={build:()=>new Hu};class b1 extends Hu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ue(this.persistence.referenceDelegate instanceof $u,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new TI(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Qt.withCacheSize(this.cacheSizeBytes):Qt.DEFAULT;return new P_((s=>$u.mi(s,t)),this.serializer)}}class Id{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>zg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=O1.bind(null,this.syncEngine),await m1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new y1})()}createDatastore(e){const t=cc(e.databaseInfo.databaseId),s=(function(u){return new JI(u)})(e.databaseInfo);return(function(u,h,m,y){return new n1(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new i1(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>zg(this.syncEngine,t,0)),(function(){return Mg.v()?new Mg:new KI})())}createSyncEngine(e,t){return(function(o,u,h,m,y,_,E){const A=new I1(o,u,h,m,y,_);return E&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=Ie(t);se(os,"RemoteStore shutting down."),s.Ea.add(5),await Xa(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Id.provider={build:()=>new Id};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Rr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="FirestoreClient";class F1{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=bt.UNAUTHENTICATED,this.clientId=Od.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{se(Ai,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(se(Ai,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _i;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ef(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Zh(i,e){i.asyncQueue.verifyOperationInProgress(),se(Ai,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await N_(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function $g(i,e){i.asyncQueue.verifyOperationInProgress();const t=await U1(i);se(Ai,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>bg(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>bg(e.remoteStore,o))),i._onlineComponents=e}async function U1(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){se(Ai,"Using user provided OfflineComponentProvider");try{await Zh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===B.FAILED_PRECONDITION||o.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;mo("Error using user provided cache. Falling back to memory cache: "+t),await Zh(i,new Hu)}}else se(Ai,"Using default OfflineComponentProvider"),await Zh(i,new b1(void 0));return i._offlineComponents}async function J_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(se(Ai,"Using user provided OnlineComponentProvider"),await $g(i,i._uninitializedComponentsProvider._online)):(se(Ai,"Using default OnlineComponentProvider"),await $g(i,new Id))),i._onlineComponents}function j1(i){return J_(i).then((e=>e.syncEngine))}async function Sd(i){const e=await J_(i),t=e.eventManager;return t.onListen=S1.bind(null,e.syncEngine),t.onUnlisten=C1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=A1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=k1.bind(null,e.syncEngine),t}function z1(i,e,t={}){const s=new _i;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,_){const E=new Y_({next:C=>{E.Nu(),h.enqueueAndForget((()=>z_(u,A)));const z=C.docs.has(m);!z&&C.fromCache?_.reject(new te(B.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&C.fromCache&&y&&y.source==="server"?_.reject(new te(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(C)},error:C=>_.reject(C)}),A=new B_(ic(m.path),E,{includeMetadataChanges:!0,qa:!0});return j_(u,A)})(await Sd(i),i.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="firestore.googleapis.com",Hg=!0;class Wg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ev,this.ssl=Hg}else this.host=e.host,this.ssl=e.ssl??Hg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=k_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wI)throw new te(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Z_(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new KE;switch(s.type){case"firstParty":return new JE(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new te(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=qg.get(t);s&&(se("ComponentProvider","Removing Datastore"),qg.delete(t),s.terminate())})(this),Promise.resolve()}}function B1(i,e,t,s={}){i=Yn(i,fc);const o=To(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(Ay(`https://${m}`),Ry("Firestore",!0)),u.host!==ev&&u.host!==m&&mo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!rs(y,h)&&(i._setSettings(y),s.mockUserToken)){let _,E;if(typeof s.mockUserToken=="string")_=s.mockUserToken,E=bt.MOCK_USER;else{_=Ew(s.mockUserToken,i._app?.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new te(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new bt(A)}i._authCredentials=new QE(new jy(_,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new fs(this.firestore,e,this._query)}}class lt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ga(t,lt._jsonSchema))return new lt(e,s||null,new de(We.fromString(t.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:pt("string",lt._jsonSchemaVersion),referencePath:pt("string")};class vi extends fs{constructor(e,t,s){super(e,t,ic(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new de(e))}withConverter(e){return new vi(this.firestore,e,this._path)}}function Gg(i,e,...t){if(i=on(i),zy("collection","path",e),i instanceof fc){const s=We.fromString(e,...t);return sg(s),new vi(i,null,s)}{if(!(i instanceof lt||i instanceof vi))throw new te(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(We.fromString(e,...t));return sg(s),new vi(i.firestore,null,s)}}function ku(i,e,...t){if(i=on(i),arguments.length===1&&(e=Od.newId()),zy("doc","path",e),i instanceof fc){const s=We.fromString(e,...t);return ig(s),new lt(i,null,new de(s))}{if(!(i instanceof lt||i instanceof vi))throw new te(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(We.fromString(e,...t));return ig(s),new lt(i.firestore,i instanceof vi?i.converter:null,new de(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="AsyncQueue";class Qg{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new D_(this,"async_queue_retry"),this._c=()=>{const s=Jh();s&&se(Kg,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Jh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Jh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new _i;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ro(e))throw e;se(Kg,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Rr("INTERNAL UNHANDLED ERROR: ",Xg(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Zd.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:Xg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Xg(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(i,["next","error","complete"])}class as extends fc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Qg,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qg(e),this._firestoreClient=void 0,await e}}}function $1(i,e){const t=typeof i=="object"?i:Ny(),s=typeof i=="string"?i:bu,o=Dd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=vw("firestore");u&&B1(o,...u)}return o}function sf(i){if(i._terminated)throw new te(B.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||q1(i),i._firestoreClient}function q1(i){const e=i._freezeSettings(),t=(function(o,u,h,m){return new mT(o,u,h,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Z_(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(i._databaseId,i._app?.options.appId||"",i._persistenceKey,e);i._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new F1(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gn(Pt.fromBase64String(e))}catch(t){throw new te(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new gn(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:gn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ga(e,gn._jsonSchema))return gn.fromBase64String(e.bytes)}}gn._jsonSchemaVersion="firestore/bytes/1.0",gn._jsonSchema={type:pt("string",gn._jsonSchemaVersion),bytes:pt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:er._jsonSchemaVersion}}static fromJSON(e){if(Ga(e,er._jsonSchema))return new er(e.latitude,e.longitude)}}er._jsonSchemaVersion="firestore/geoPoint/1.0",er._jsonSchema={type:pt("string",er._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:tr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ga(e,tr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new tr(e.vectorValues);throw new te(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}tr._jsonSchemaVersion="firestore/vectorValue/1.0",tr._jsonSchema={type:pt("string",tr._jsonSchemaVersion),vectorValues:pt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=/^__.*__$/;class W1{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new hs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ka(e,this.data,t,this.fieldTransforms)}}function nv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ac:i})}}class af{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new af({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Wu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(nv(this.Ac)&&H1.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class G1{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||cc(e)}Cc(e,t,s,o=!1){return new af({Ac:e,methodName:t,Dc:s,path:kt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lf(i){const e=i._freezeSettings(),t=cc(i._databaseId);return new G1(i._databaseId,!!e.ignoreUndefinedProperties,t)}function rv(i,e,t,s,o,u={}){const h=i.Cc(u.merge||u.mergeFields?2:0,e,t,o);ov("Data must be an object, but it was:",h,s);const m=iv(s,h);let y,_;if(u.merge)y=new Cn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const A of u.mergeFields){const C=Q1(e,A,t);if(!h.contains(C))throw new te(B.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);Y1(E,C)||E.push(C)}y=new Cn(E),_=h.fieldTransforms.filter((A=>y.covers(A.field)))}else y=null,_=h.fieldTransforms;return new W1(new mn(m),y,_)}function K1(i,e,t,s=!1){return uf(t,i.Cc(s?4:3,e))}function uf(i,e){if(sv(i=on(i)))return ov("Unsupported field value:",e,i),iv(i,e);if(i instanceof tv)return(function(s,o){if(!nv(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=uf(m,o.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=on(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return FT(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Xe.fromDate(s);return{timestampValue:Bu(o.serializer,u)}}if(s instanceof Xe){const u=new Xe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Bu(o.serializer,u)}}if(s instanceof er)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof gn)return{bytesValue:E_(o.serializer,s._byteString)};if(s instanceof lt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:qd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof tr)return(function(h,m){return{mapValue:{fields:{[Xy]:{stringValue:Yy},[Fu]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.Sc("VectorValues must only contain numeric values.");return jd(m.serializer,_)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${ec(s)}`)})(i,e)}function iv(i,e){const t={};return qy(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):us(i,((s,o)=>{const u=uf(o,e.mc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function sv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Xe||i instanceof er||i instanceof gn||i instanceof lt||i instanceof tv||i instanceof tr)}function ov(i,e,t){if(!sv(t)||!By(t)){const s=ec(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function Q1(i,e,t){if((e=on(e))instanceof of)return e._internalPath;if(typeof e=="string")return av(i,e);throw Wu("Field path arguments must be of type string or ",i,!1,void 0,t)}const X1=new RegExp("[~\\*/\\[\\]]");function av(i,e,t){if(e.search(X1)>=0)throw Wu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new of(...e.split("."))._internalPath}catch{throw Wu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Wu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new te(B.INVALID_ARGUMENT,m+i+y)}function Y1(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new J1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(cf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class J1 extends lv{data(){return super.data()}}function cf(i,e){return typeof e=="string"?av(i,e):e instanceof of?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new te(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hf{}class uv extends hf{}function eS(i,e,...t){let s=[];e instanceof hf&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((y=>y instanceof ff)).length,m=u.filter((y=>y instanceof df)).length;if(h>1||h>0&&m>0)throw new te(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class df extends uv{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new df(e,t,s)}_apply(e){const t=this._parse(e);return cv(e._query,t),new fs(e.firestore,e.converter,fd(e._query,t))}_parse(e){const t=lf(e.firestore);return(function(u,h,m,y,_,E,A){let C;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new te(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){Zg(A,E);const Q=[];for(const X of A)Q.push(Jg(y,u,X));C={arrayValue:{values:Q}}}else C=Jg(y,u,A)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||Zg(A,E),C=K1(m,h,A,E==="in"||E==="not-in");return ft.create(_,E,C)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class ff extends hf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ff(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Nn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const y of m)cv(h,y),h=fd(h,y)})(e._query,t),new fs(e.firestore,e.converter,fd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pf extends uv{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new pf(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new te(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new te(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new za(u,h)})(e._query,this._field,this._direction);return new fs(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new Co(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function tS(i,e="asc"){const t=e,s=cf("orderBy",i);return pf._create(s,t)}function Jg(i,e,t){if(typeof(t=on(t))=="string"){if(t==="")throw new te(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!s_(e)&&t.indexOf("/")!==-1)throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(We.fromString(t));if(!de.isDocumentKey(s))throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return fg(i,new de(s))}if(t instanceof lt)return fg(i,t._key);throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ec(t)}.`)}function Zg(i,e){if(!Array.isArray(i)||i.length===0)throw new te(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cv(i,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new te(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class nS{convertValue(e,t="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return us(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){const t=e.fields?.[Fu].arrayValue?.values?.map((s=>at(s.doubleValue)));return new tr(t)}convertGeoPoint(e){return new er(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=rc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Fa(e));default:return null}}convertTimestamp(e){const t=Ei(e);return new Xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=We.fromString(e);Ue(C_(s),9688,{name:e});const o=new Ua(s.get(1),s.get(3)),u=new de(s.popFirst(5));return o.isEqual(t)||Rr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Pa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ts extends lv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Pu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(cf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ts._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ts._jsonSchemaVersion="firestore/documentSnapshot/1.0",ts._jsonSchema={type:pt("string",ts._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class Pu extends ts{data(e={}){return super.data(e)}}class lo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Pa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Pu(this._firestore,this._userDataWriter,s.key,s,new Pa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new Pu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Pa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new Pu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Pa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:rS(m.type),doc:y,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=lo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Od.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function rS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(i){i=Yn(i,lt);const e=Yn(i.firestore,as);return z1(sf(e),i._key).then((t=>fv(e,i,t)))}lo._jsonSchemaVersion="firestore/querySnapshot/1.0",lo._jsonSchema={type:pt("string",lo._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};class dv extends nS{constructor(e){super(),this.firestore=e}convertBytes(e){return new gn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,t)}}function sS(i,e,t){i=Yn(i,lt);const s=Yn(i.firestore,as),o=hv(i.converter,e);return mf(s,[rv(lf(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,Pn.none())])}function oS(i){return mf(Yn(i.firestore,as),[new zd(i._key,Pn.none())])}function aS(i,e){const t=Yn(i.firestore,as),s=ku(i),o=hv(i.converter,e);return mf(t,[rv(lf(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Pn.exists(!1))]).then((()=>s))}function lS(i,...e){i=on(i);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Yg(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Yg(e[s])){const y=e[s];e[s]=y.next?.bind(y),e[s+1]=y.error?.bind(y),e[s+2]=y.complete?.bind(y)}let u,h,m;if(i instanceof lt)h=Yn(i.firestore,as),m=ic(i._key.path),u={next:y=>{e[s]&&e[s](fv(h,i,y))},error:e[s+1],complete:e[s+2]};else{const y=Yn(i,fs);h=Yn(y.firestore,as),m=y._query;const _=new dv(h);u={next:E=>{e[s]&&e[s](new lo(h,_,y,E))},error:e[s+1],complete:e[s+2]},Z1(i._query)}return(function(_,E,A,C){const z=new Y_(C),Q=new B_(E,z,A);return _.asyncQueue.enqueueAndForget((async()=>j_(await Sd(_),Q))),()=>{z.Nu(),_.asyncQueue.enqueueAndForget((async()=>z_(await Sd(_),Q)))}})(sf(h),m,o,u)}function mf(i,e){return(function(s,o){const u=new _i;return s.asyncQueue.enqueueAndForget((async()=>P1(await j1(s),o,u))),u.promise})(sf(i),e)}function fv(i,e,t){const s=t.docs.get(e._key),o=new dv(i);return new ts(i,o,e._key,s,new Pa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){So=o})(Io),po(new is("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new as(new XE(s.getProvider("auth-internal")),new ZE(h,s.getProvider("app-check-internal")),(function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new te(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ua(_.options.projectId,E)})(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),gi(eg,tg,e),gi(eg,tg,"esm2020")})();var uS="firebase",cS="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gi(uS,cS,"app");function pv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hS=pv,mv=new Ha("auth","Firebase",pv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new Nd("@firebase/auth");function dS(i,...e){Gu.logLevel<=Pe.WARN&&Gu.warn(`Auth (${Io}): ${i}`,...e)}function Nu(i,...e){Gu.logLevel<=Pe.ERROR&&Gu.error(`Auth (${Io}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(i,...e){throw gf(i,...e)}function nr(i,...e){return gf(i,...e)}function gv(i,e,t){const s={...hS(),[e]:t};return new Ha("auth","Firebase",s).create(e,{appName:i.name})}function ns(i){return gv(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gf(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return mv.create(i,...e)}function we(i,e,...t){if(!i)throw gf(e,...t)}function Ir(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Nu(e),new Error(e)}function Pr(i,e){i||Ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(){return typeof self<"u"&&self.location?.href||""}function fS(){return ey()==="http:"||ey()==="https:"}function ey(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fS()||Cw()||"connection"in navigator)?navigator.onLine:!0}function mS(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pr(t>e,"Short delay should be less than long delay!"),this.isMobile=Sw()||kw()}get(){return pS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(i,e){Pr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_S=new Ja(3e4,6e4);function _f(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Po(i,e,t,s,o={}){return _v(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Wa({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const _={method:e,headers:y,...u};return Rw()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&To(i.emulatorConfig.host)&&(_.credentials="include"),yv.fetch()(await vv(i,i.config.apiHost,t,m),_)})}async function _v(i,e,t){i._canInitEmulator=!1;const s={...gS,...e};try{const o=new wS(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Tu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,_]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw Tu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw Tu(i,"user-disabled",h);const E=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw gv(i,E,_);kr(i,E)}}catch(o){if(o instanceof Nr)throw o;kr(i,"network-request-failed",{message:String(o)})}}async function vS(i,e,t,s,o={}){const u=await Po(i,e,t,s,o);return"mfaPendingCredential"in u&&kr(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function vv(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?yf(i.config,o):`${i.config.apiScheme}://${o}`;return yS.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class wS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(nr(this.auth,"network-request-failed")),_S.get())})}}function Tu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=nr(i,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(i,e){return Po(i,"POST","/v1/accounts:delete",e)}async function Ku(i,e){return Po(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TS(i,e=!1){const t=on(i),s=await t.getIdToken(e),o=vf(s);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u?.sign_in_provider;return{claims:o,token:s,authTime:Ma(ed(o.auth_time)),issuedAtTime:Ma(ed(o.iat)),expirationTime:Ma(ed(o.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function ed(i){return Number(i)*1e3}function vf(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Nu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ey(t);return o?JSON.parse(o):(Nu("Failed to decode base64 JWT payload"),null)}catch(o){return Nu("Caught error parsing JWT payload as JSON",o?.toString()),null}}function ty(i){const e=vf(i);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Nr&&IS(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function IS({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ma(this.lastLoginAt),this.creationTime=Ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qu(i){const e=i.auth,t=await i.getIdToken(),s=await qa(i,Ku(e,{idToken:t}));we(s?.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=o.providerUserInfo?.length?wv(o.providerUserInfo):[],h=RS(i.providerData,u),m=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!h?.length,_=m?y:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Rd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(i,E)}async function AS(i){const e=on(i);await Qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RS(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function wv(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(i,e){const t=await _v(i,{},async()=>{const s=Wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await vv(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&To(i.emulatorConfig.host)&&(y.credentials="include"),yv.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kS(i,e){return Po(i,"POST","/v2/accounts:revokeToken",_f(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ty(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=ty(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await CS(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new uo;return s&&(we(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(we(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(we(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new uo,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(i,e){we(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class kn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new SS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Rd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await qa(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return TS(this,e)}reload(){return AS(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Qu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xn(this.auth.app))return Promise.reject(ns(this.auth));const e=await this.getIdToken();return await qa(this,ES(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,_=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:A,emailVerified:C,isAnonymous:z,providerData:Q,stsTokenManager:X}=t;we(A&&X,e,"internal-error");const q=uo.fromJSON(this.name,X);we(typeof A=="string",e,"internal-error"),li(s,e.name),li(o,e.name),we(typeof C=="boolean",e,"internal-error"),we(typeof z=="boolean",e,"internal-error"),li(u,e.name),li(h,e.name),li(m,e.name),li(y,e.name),li(_,e.name),li(E,e.name);const ne=new kn({uid:A,auth:e,email:o,emailVerified:C,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:q,createdAt:_,lastLoginAt:E});return Q&&Array.isArray(Q)&&(ne.providerData=Q.map(ie=>({...ie}))),y&&(ne._redirectEventId=y),ne}static async _fromIdTokenResponse(e,t,s=!1){const o=new uo;o.updateFromServerResponse(t);const u=new kn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Qu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];we(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?wv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!u?.length,m=new uo;m.updateFromIdToken(s);const y=new kn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Rd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(y,_),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=new Map;function Sr(i){Pr(i instanceof Function,"Expected a class definition");let e=ny.get(i);return e?(Pr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,ny.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ev.type="NONE";const ry=Ev;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(i,e,t){return`firebase:${i}:${e}:${t}`}class co{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=xu(this.userKey,o.apiKey,u),this.fullPersistenceKey=xu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ku(this.auth,{idToken:e}).catch(()=>{});return t?kn._fromGetAccountInfoResponse(this.auth,t,e):null}return kn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new co(Sr(ry),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Sr(ry);const h=xu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const E=await _._get(h);if(E){let A;if(typeof E=="string"){const C=await Ku(e,{idToken:E}).catch(()=>{});if(!C)break;A=await kn._fromGetAccountInfoResponse(e,C,E)}else A=kn._fromJSON(e,E);_!==u&&(m=A),u=_;break}}catch{}const y=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new co(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new co(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Av(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cv(e))return"Blackberry";if(kv(e))return"Webos";if(Iv(e))return"Safari";if((e.includes("chrome/")||Sv(e))&&!e.includes("edge/"))return"Chrome";if(Rv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function Tv(i=Ut()){return/firefox\//i.test(i)}function Iv(i=Ut()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sv(i=Ut()){return/crios\//i.test(i)}function Av(i=Ut()){return/iemobile/i.test(i)}function Rv(i=Ut()){return/android/i.test(i)}function Cv(i=Ut()){return/blackberry/i.test(i)}function kv(i=Ut()){return/webos/i.test(i)}function wf(i=Ut()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function PS(i=Ut()){return wf(i)&&!!window.navigator?.standalone}function NS(){return Pw()&&document.documentMode===10}function Pv(i=Ut()){return wf(i)||Rv(i)||kv(i)||Cv(i)||/windows phone/i.test(i)||Av(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(i,e=[]){let t;switch(i){case"Browser":t=iy(Ut());break;case"Worker":t=`${iy(Ut())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Io}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(i,e={}){return Po(i,"GET","/v2/passwordPolicy",_f(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=6;class OS{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??VS,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sy(this),this.idTokenSubscription=new sy(this),this.beforeStateQueue=new xS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Sr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await co.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ku(this,{idToken:e}),s=await kn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Xn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,h=s?._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===h)&&m?.user&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qu(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xn(this.app))return Promise.reject(ns(this));const t=e?on(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xn(this.app)?Promise.reject(ns(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xn(this.app)?Promise.reject(ns(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DS(this),t=new OS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ha("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await kS(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Sr(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await co.create(this,[Sr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&dS(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ef(i){return on(i)}class sy{constructor(e){this.auth=e,this.observer=null,this.addObserver=bw(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LS(i){Tf=i}function bS(i){return Tf.loadJS(i)}function FS(){return Tf.gapiScript}function US(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(i,e){const t=Dd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(rs(u,e??{}))return o;kr(o,"already-initialized")}return t.initialize({options:e})}function zS(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Sr);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function BS(i,e,t){const s=Ef(i);we(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=xv(e),{host:h,port:m}=$S(e),y=m===null?"":`:${m}`,_={url:`${u}//${h}${y}/`},E=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){we(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),we(rs(_,s.config.emulator)&&rs(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,To(h)?(Ay(`${u}//${h}${y}`),Ry("Auth",!0)):qS()}function xv(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function $S(i){const e=xv(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:oy(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:oy(h)}}}function oy(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function qS(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ir("not implemented")}_getIdTokenResponse(e){return Ir("not implemented")}_linkToIdToken(e,t){return Ir("not implemented")}_getReauthenticationResolver(e){return Ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(i,e){return vS(i,"POST","/v1/accounts:signInWithIdp",_f(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="http://localhost";class ls extends Dv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new ls(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ho(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ho(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ho(e,t)}buildRequest(){const e={requestUri:HS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends Vv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Za{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.FACEBOOK_SIGN_IN_METHOD="facebook.com";ui.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Za{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ls._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ci.credential(t,s)}catch{return null}}}ci.GOOGLE_SIGN_IN_METHOD="google.com";ci.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Za{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.GITHUB_SIGN_IN_METHOD="github.com";hi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Za{constructor(){super("twitter.com")}static credential(e,t){return ls._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return di.credential(t,s)}catch{return null}}}di.TWITTER_SIGN_IN_METHOD="twitter.com";di.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await kn._fromIdTokenResponse(e,s,o),h=ay(s);return new Eo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=ay(s);return new Eo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function ay(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends Nr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Xu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Xu(e,t,s,o)}}function Ov(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Xu._fromErrorAndOperation(i,u,e,s):u})}async function WS(i,e,t=!1){const s=await qa(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Eo._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GS(i,e,t=!1){const{auth:s}=i;if(Xn(s.app))return Promise.reject(ns(s));const o="reauthenticate";try{const u=await qa(i,Ov(s,o,e,i),t);we(u.idToken,s,"internal-error");const h=vf(u.idToken);we(h,s,"internal-error");const{sub:m}=h;return we(i.uid===m,s,"user-mismatch"),Eo._forOperation(i,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&kr(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KS(i,e,t=!1){if(Xn(i.app))return Promise.reject(ns(i));const s="signIn",o=await Ov(i,s,e),u=await Eo._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function QS(i,e,t,s){return on(i).onIdTokenChanged(e,t,s)}function XS(i,e,t){return on(i).beforeAuthStateChanged(e,t)}const Yu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yu,"1"),this.storage.removeItem(Yu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=1e3,JS=10;class Lv extends Mv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);NS()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,JS):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},YS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lv.type="LOCAL";const ZS=Lv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv extends Mv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bv.type="SESSION";const Fv=bv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new pc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),y=await eA(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const _=If("",20);o.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const C=A;if(C.data.eventId===_)switch(C.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(C.data.response);break;default:clearTimeout(E),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){return window}function nA(i){rr().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function rA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iA(){return navigator?.serviceWorker?.controller||null}function sA(){return Uv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="firebaseLocalStorageDb",oA=1,Ju="firebaseLocalStorage",zv="fbase_key";class el{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mc(i,e){return i.transaction([Ju],e?"readwrite":"readonly").objectStore(Ju)}function aA(){const i=indexedDB.deleteDatabase(jv);return new el(i).toPromise()}function Cd(){const i=indexedDB.open(jv,oA);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Ju,{keyPath:zv})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Ju)?e(s):(s.close(),await aA(),e(await Cd()))})})}async function ly(i,e,t){const s=mc(i,!0).put({[zv]:e,value:t});return new el(s).toPromise()}async function lA(i,e){const t=mc(i,!1).get(e),s=await new el(t).toPromise();return s===void 0?null:s.value}function uy(i,e){const t=mc(i,!0).delete(e);return new el(t).toPromise()}const uA=800,cA=3;class Bv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>cA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pc._getInstance(sA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await rA(),!this.activeServiceWorker)return;this.sender=new tA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cd();return await ly(e,Yu,"1"),await uy(e,Yu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ly(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>lA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>uy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=mc(o,!1).getAll();return new el(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bv.type="LOCAL";const hA=Bv;new Ja(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(i,e){return e?Sr(e):(we(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends Dv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ho(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ho(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fA(i){return KS(i.auth,new Sf(i),i.bypassAuthState)}function pA(i){const{auth:e,user:t}=i;return we(t,e,"internal-error"),GS(t,new Sf(i),i.bypassAuthState)}async function mA(i){const{auth:e,user:t}=i;return we(t,e,"internal-error"),WS(t,new Sf(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fA;case"linkViaPopup":case"linkViaRedirect":return mA;case"reauthViaPopup":case"reauthViaRedirect":return pA;default:kr(this.auth,"internal-error")}}resolve(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=new Ja(2e3,1e4);class oo extends $v{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,oo.currentPopupAction&&oo.currentPopupAction.cancel(),oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Pr(this.filter.length===1,"Popup operations only handle one event");const e=If();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gA.get())};e()}}oo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA="pendingRedirect",Du=new Map;class _A extends $v{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Du.get(this.auth._key());if(!e){try{const s=await vA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Du.set(this.auth._key(),e)}return this.bypassAuthState||Du.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vA(i,e){const t=TA(e),s=EA(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function wA(i,e){Du.set(i._key(),e)}function EA(i){return Sr(i._redirectPersistence)}function TA(i){return xu(yA,i.config.apiKey,i.name)}async function IA(i,e,t=!1){if(Xn(i.app))return Promise.reject(ns(i));const s=Ef(i),o=dA(s,e),h=await new _A(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=600*1e3;class AA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!qv(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(nr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SA&&this.cachedEventUids.clear(),this.cachedEventUids.has(cy(e))}saveEventToCache(e){this.cachedEventUids.add(cy(e)),this.lastProcessedEventTime=Date.now()}}function cy(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function qv({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function RA(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qv(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(i,e={}){return Po(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PA=/^https?/;async function NA(i){if(i.config.emulator)return;const{authorizedDomains:e}=await CA(i);for(const t of e)try{if(xA(t))return}catch{}kr(i,"unauthorized-domain")}function xA(i){const e=Ad(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!PA.test(t))return!1;if(kA.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=new Ja(3e4,6e4);function hy(){const i=rr().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function VA(i){return new Promise((e,t)=>{function s(){hy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hy(),t(nr(i,"network-request-failed"))},timeout:DA.get()})}if(rr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(rr().gapi?.load)s();else{const o=US("iframefcb");return rr()[o]=()=>{gapi.load?s():t(nr(i,"network-request-failed"))},bS(`${FS()}?onload=${o}`).catch(u=>t(u))}}).catch(e=>{throw Vu=null,e})}let Vu=null;function OA(i){return Vu=Vu||VA(i),Vu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=new Ja(5e3,15e3),LA="__/auth/iframe",bA="emulator/auth/iframe",FA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jA(i){const e=i.config;we(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?yf(e,bA):`https://${i.config.authDomain}/${LA}`,s={apiKey:e.apiKey,appName:i.name,v:Io},o=UA.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Wa(s).slice(1)}`}async function zA(i){const e=await OA(i),t=rr().gapi;return we(t,i,"internal-error"),e.open({where:document.body,url:jA(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FA,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=nr(i,"network-request-failed"),m=rr().setTimeout(()=>{u(h)},MA.get());function y(){rr().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$A=500,qA=600,HA="_blank",WA="http://localhost";class dy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GA(i,e,t,s=$A,o=qA){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...BA,width:s.toString(),height:o.toString(),top:u,left:h},_=Ut().toLowerCase();t&&(m=Sv(_)?HA:t),Tv(_)&&(e=e||WA,y.scrollbars="yes");const E=Object.entries(y).reduce((C,[z,Q])=>`${C}${z}=${Q},`,"");if(PS(_)&&m!=="_self")return KA(e||"",m),new dy(null);const A=window.open(e||"",m,E);we(A,i,"popup-blocked");try{A.focus()}catch{}return new dy(A)}function KA(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="__/auth/handler",XA="emulator/auth/handler",YA=encodeURIComponent("fac");async function fy(i,e,t,s,o,u){we(i.config.authDomain,i,"auth-domain-config-required"),we(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Io,eventId:o};if(e instanceof Vv){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Lw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,A]of Object.entries({}))h[E]=A}if(e instanceof Za){const E=e.getScopes().filter(A=>A!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const y=await i._getAppCheckToken(),_=y?`#${YA}=${encodeURIComponent(y)}`:"";return`${JA(i)}?${Wa(m).slice(1)}${_}`}function JA({config:i}){return i.emulator?yf(i,XA):`https://${i.authDomain}/${QA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="webStorageSupport";class ZA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fv,this._completeRedirectFn=IA,this._overrideRedirectResult=wA}async _openPopup(e,t,s,o){Pr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await fy(e,t,s,Ad(),o);return GA(e,u,If())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await fy(e,t,s,Ad(),o);return nA(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Pr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await zA(e),s=new AA(e);return t.register("authEvent",o=>(we(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(td,{type:td},o=>{const u=o?.[0]?.[td];u!==void 0&&t(!!u),kr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=NA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pv()||Iv()||wf()}}const eR=ZA;var py="@firebase/auth",my="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rR(i){po(new is("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;we(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nv(i)},_=new MS(s,o,u,y);return zS(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),po(new is("auth-internal",e=>{const t=Ef(e.getProvider("auth").getImmediate());return(s=>new tR(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gi(py,my,nR(i)),gi(py,my,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=300,sR=Sy("authIdTokenMaxAge")||iR;let gy=null;const oR=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>sR)return;const o=t?.token;gy!==o&&(gy=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function aR(i=Ny()){const e=Dd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=jS(i,{popupRedirectResolver:eR,persistence:[hA,ZS,Fv]}),s=Sy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=oR(u.toString());XS(t,h,()=>h(t.currentUser)),QS(t,m=>h(m))}}const o=Ty("auth");return o&&BS(t,`http://${o}`),t}function lR(){return document.getElementsByTagName("head")?.[0]??document}LS({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=nr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",lR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rR("Browser");const uR={apiKey:"AIzaSyB-vFHeFhxBJGP8ah0s9GlWvdBlxmFK340",authDomain:"couples-calendar-755cf.firebaseapp.com",projectId:"couples-calendar-755cf",storageBucket:"couples-calendar-755cf.firebasestorage.app",messagingSenderId:"85617851608",appId:"1:85617851608:web:a96085f04c443f23702bad"},Hv=Py(uR),Aa=$1(Hv);aR(Hv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cR=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hR=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),yy=i=>{const e=hR(i);return e.charAt(0).toUpperCase()+e.slice(1)},Wv=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=ze.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>ze.createElement("svg",{ref:y,...dR,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:Wv("lucide",o),...m},[...h.map(([_,E])=>ze.createElement(_,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=(i,e)=>{const t=ze.forwardRef(({className:s,...o},u)=>ze.createElement(fR,{ref:u,iconNode:e,className:Wv(`lucide-${cR(yy(i))}`,`lucide-${i}`,s),...o}));return t.displayName=yy(i),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Gv=xr("calendar",pR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mR=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Kv=xr("chevron-left",mR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Qv=xr("chevron-right",gR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],fo=xr("heart",yR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],vR=xr("plus",_R);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ER=xr("settings",wR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],IR=xr("trash-2",TR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],AR=xr("upload",SR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],kd=xr("x",RR);function CR({events:i,startDate:e,onDateClick:t,onAddEvent:s}){const[o,u]=ze.useState(new Date),h=o.getFullYear(),m=o.getMonth(),y=new Date(h,m,1),E=new Date(h,m+1,0).getDate(),A=y.getDay(),C=["January","February","March","April","May","June","July","August","September","October","November","December"],z=[];for(let le=0;le<A;le++)z.push(null);for(let le=1;le<=E;le++)z.push(le);const Q=()=>{u(new Date(h,m-1))},X=()=>{u(new Date(h,m+1))},q=le=>{const ye=`${h}-${String(m+1).padStart(2,"0")}-${String(le).padStart(2,"0")}`;return i.filter(P=>P.date===ye)},ne=le=>`${h}-${String(m+1).padStart(2,"0")}-${String(le).padStart(2,"0")}`===e,ie=le=>{const ye=new Date;return le===ye.getDate()&&m===ye.getMonth()&&h===ye.getFullYear()},ee=le=>{const ye=`${h}-${String(m+1).padStart(2,"0")}-${String(le).padStart(2,"0")}`;t(ye)},fe=le=>{switch(le){case"anniversary":return"bg-red-500";case"date":return"bg-pink-500";case"special":return"bg-purple-500";default:return"bg-blue-500"}};return L.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 border-2 border-pink-100",children:[L.jsxs("div",{className:"flex items-center justify-between mb-6",children:[L.jsx("button",{onClick:Q,className:"p-2 hover:bg-pink-50 rounded-lg transition-colors",children:L.jsx(Kv,{className:"text-pink-600",size:24})}),L.jsxs("h2",{className:"text-pink-600",children:[C[m]," ",h]}),L.jsx("button",{onClick:X,className:"p-2 hover:bg-pink-50 rounded-lg transition-colors",children:L.jsx(Qv,{className:"text-pink-600",size:24})})]}),L.jsxs("button",{onClick:s,className:"w-full mb-4 py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2",children:[L.jsx(vR,{size:20}),"Add Special Moment"]}),L.jsx("div",{className:"grid grid-cols-7 gap-2 mb-2",children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(le=>L.jsx("div",{className:"text-center text-gray-500 py-2",children:le},le))}),L.jsx("div",{className:"grid grid-cols-7 gap-2",children:z.map((le,ye)=>L.jsx("div",{className:`aspect-square p-2 rounded-lg ${le?"cursor-pointer hover:bg-pink-50 transition-colors":""}`,onClick:()=>le&&ee(le),children:le&&L.jsxs("div",{className:"h-full flex flex-col",children:[L.jsx("div",{className:`text-center mb-1 ${ie(le)?"bg-pink-500 text-white rounded-full w-7 h-7 flex items-center justify-center mx-auto":ne(le)?"text-red-500":"text-gray-700"}`,children:le}),L.jsx("div",{className:"flex-1 flex flex-wrap gap-1 justify-center",children:q(le).map(P=>L.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${fe(P.type)}`,title:P.title},P.id))})]})},ye))}),L.jsxs("div",{className:"mt-6 pt-4 border-t border-pink-100 flex flex-wrap gap-4 justify-center text-sm",children:[L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500"}),L.jsx("span",{className:"text-gray-600",children:"Anniversary"})]}),L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("div",{className:"w-3 h-3 rounded-full bg-pink-500"}),L.jsx("span",{className:"text-gray-600",children:"Date"})]}),L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("div",{className:"w-3 h-3 rounded-full bg-purple-500"}),L.jsx("span",{className:"text-gray-600",children:"Special"})]}),L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-500"}),L.jsx("span",{className:"text-gray-600",children:"Other"})]})]})]})}function kR({startDate:i}){const[e,t]=ze.useState(0);ze.useEffect(()=>{const m=()=>{const[_,E,A]=i.split("-").map(Number),C=new Date(_,E-1,A),z=new Date;z.setHours(0,0,0,0);const Q=Math.abs(z.getTime()-C.getTime()),X=Math.ceil(Q/(1e3*60*60*24));t(X)};m();const y=setInterval(m,1e3*60*60);return()=>clearInterval(y)},[i]);const s=Math.floor(e/365),o=e%365,u=Math.floor(o/30),h=o%30;return L.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-pink-200",children:[L.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[L.jsx(Gv,{className:"text-pink-500",size:24}),L.jsx("h2",{className:"text-pink-600",children:"Days Together"})]}),L.jsxs("div",{className:"mb-6",children:[L.jsx("div",{className:"text-6xl text-purple-600 mb-2",children:e}),L.jsx("p",{className:"text-gray-600",children:"Beautiful Days"})]}),L.jsxs("div",{className:"flex justify-center gap-8 text-center",children:[s>0&&L.jsxs("div",{children:[L.jsx("div",{className:"text-3xl text-pink-500",children:s}),L.jsxs("p",{className:"text-gray-500 text-sm",children:["Year",s!==1?"s":""]})]}),u>0&&L.jsxs("div",{children:[L.jsx("div",{className:"text-3xl text-purple-500",children:u}),L.jsxs("p",{className:"text-gray-500 text-sm",children:["Month",u!==1?"s":""]})]}),L.jsxs("div",{children:[L.jsx("div",{className:"text-3xl text-blue-500",children:h}),L.jsxs("p",{className:"text-gray-500 text-sm",children:["Day",h!==1?"s":""]})]})]})]})}function PR({images:i,onClose:e}){const[t,s]=ze.useState(0),o=()=>{s(m=>m===0?i.length-1:m-1)},u=()=>{s(m=>m===i.length-1?0:m+1)},h=m=>{m.key==="ArrowLeft"&&o(),m.key==="ArrowRight"&&u(),m.key==="Escape"&&e()};return L.jsxs("div",{className:"fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50",onClick:e,onKeyDown:h,tabIndex:0,children:[L.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10",children:L.jsx(kd,{className:"text-white",size:24})}),i.length>1&&L.jsxs(L.Fragment,{children:[L.jsx("button",{onClick:m=>{m.stopPropagation(),o()},className:"absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10",children:L.jsx(Kv,{className:"text-white",size:32})}),L.jsx("button",{onClick:m=>{m.stopPropagation(),u()},className:"absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10",children:L.jsx(Qv,{className:"text-white",size:32})})]}),L.jsxs("div",{className:"max-w-4xl max-h-[90vh] relative",onClick:m=>m.stopPropagation(),children:[L.jsx("img",{src:i[t],alt:`Photo ${t+1}`,className:"w-full h-full object-contain rounded-lg"}),i.length>1&&L.jsxs("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full",children:[t+1," / ",i.length]})]}),i.length>1&&L.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4",children:i.map((m,y)=>L.jsx("button",{onClick:_=>{_.stopPropagation(),s(y)},className:`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${y===t?"border-pink-500 scale-110":"border-white/30 hover:border-white/60"}`,children:L.jsx("img",{src:m,alt:`Thumbnail ${y+1}`,className:"w-full h-full object-cover"})},y))})]})}function NR({events:i,onDeleteEvent:e}){const[t,s]=ze.useState("all"),[o,u]=ze.useState(null),h=new Date;h.setHours(0,0,0,0);const y=[...i].sort((C,z)=>new Date(z.date).getTime()-new Date(C.date).getTime()).filter(C=>{const z=new Date(C.date);return z.setHours(0,0,0,0),t==="upcoming"?z>=h:t==="past"?z<h:!0}),_=C=>new Date(C).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),E=C=>{switch(C){case"anniversary":return L.jsx(fo,{className:"text-red-500 fill-red-500",size:18});default:return L.jsx(Gv,{className:"text-purple-500",size:18})}},A=C=>{switch(C){case"anniversary":return"border-red-200 bg-red-50";case"date":return"border-pink-200 bg-pink-50";case"special":return"border-purple-200 bg-purple-50";default:return"border-blue-200 bg-blue-50"}};return L.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 border-2 border-pink-100",children:[L.jsx("h2",{className:"mb-4 text-pink-600",children:"Our Memories"}),L.jsxs("div",{className:"flex gap-2 mb-4",children:[L.jsx("button",{onClick:()=>s("all"),className:`px-3 py-1 rounded-lg text-sm transition-colors ${t==="all"?"bg-pink-500 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:"All"}),L.jsx("button",{onClick:()=>s("upcoming"),className:`px-3 py-1 rounded-lg text-sm transition-colors ${t==="upcoming"?"bg-pink-500 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:"Upcoming"}),L.jsx("button",{onClick:()=>s("past"),className:`px-3 py-1 rounded-lg text-sm transition-colors ${t==="past"?"bg-pink-500 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:"Past"})]}),L.jsx("div",{className:"space-y-3 max-h-[600px] overflow-y-auto",children:y.length===0?L.jsxs("div",{className:"text-center py-8 text-gray-400",children:[L.jsx(fo,{className:"mx-auto mb-2",size:48}),L.jsx("p",{children:"No memories yet"}),L.jsx("p",{className:"text-sm",children:"Start adding your special moments!"})]}):y.map(C=>L.jsx("div",{className:`p-4 rounded-lg border-2 ${A(C.type)} transition-all hover:shadow-md`,children:L.jsxs("div",{className:"flex items-start justify-between gap-2",children:[L.jsxs("div",{className:"flex-1",children:[L.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[E(C.type),L.jsx("span",{className:"text-gray-900",children:C.title})]}),L.jsx("p",{className:"text-sm text-gray-600 mb-1",children:_(C.date)}),C.description&&L.jsx("p",{className:"text-sm text-gray-500 mt-2",children:C.description}),C.images&&C.images.length>0&&L.jsxs("div",{className:"mt-3 flex gap-2 flex-wrap",children:[C.images.slice(0,3).map((z,Q)=>L.jsx("div",{className:"relative w-16 h-16 rounded-lg overflow-hidden border-2 border-white shadow-sm cursor-pointer hover:scale-105 transition-transform",onClick:()=>u(C.images||null),children:L.jsx("img",{src:z,alt:`${C.title} ${Q+1}`,className:"w-full h-full object-cover"})},Q)),C.images.length>3&&L.jsx("button",{onClick:()=>u(C.images||null),className:"w-16 h-16 rounded-lg border-2 border-white bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors",children:L.jsxs("span",{className:"text-sm",children:["+",C.images.length-3]})})]})]}),L.jsx("button",{onClick:()=>e(C.id),className:"p-1.5 hover:bg-white rounded-lg transition-colors group",children:L.jsx(IR,{size:16,className:"text-gray-400 group-hover:text-red-500"})})]})},C.id))}),o&&L.jsx(PR,{images:o,onClose:()=>u(null)})]})}function xR({isOpen:i,onClose:e,onAddEvent:t,preselectedDate:s}){const[o,u]=ze.useState(""),[h,m]=ze.useState(""),[y,_]=ze.useState(""),[E,A]=ze.useState("other"),[C,z]=ze.useState([]),Q=ze.useRef(null);ze.useEffect(()=>{if(s)m(s);else{const ee=new Date().toISOString().split("T")[0];m(ee)}},[s]);const X=(ee,fe=800,le=.7)=>new Promise((ye,P)=>{const I=document.createElement("canvas"),R=I.getContext("2d"),D=new Image;D.onload=()=>{let{width:N,height:V}=D;N>fe&&(V=V*fe/N,N=fe),I.width=N,I.height=V,R?.drawImage(D,0,0,N,V);const S=I.toDataURL("image/jpeg",le);ye(S)},D.onerror=P,D.src=URL.createObjectURL(ee)}),q=async ee=>{const fe=ee.target.files;if(fe){const le=Array.from(fe);for(const ye of le)try{const P=await X(ye);z(I=>[...I,P])}catch(P){console.error("Error compressing image:",P),alert("Failed to process image. Please try a smaller image.")}}},ne=ee=>{z(fe=>fe.filter((le,ye)=>ye!==ee))},ie=ee=>{ee.preventDefault(),o&&h&&(t({title:o,date:h,description:y||void 0,type:E,images:C.length>0?C:void 0}),u(""),m(""),_(""),A("other"),z([]))};return i?L.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:L.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 border-2 border-pink-200 max-h-[90vh] overflow-y-auto",children:[L.jsxs("div",{className:"flex items-center justify-between mb-6",children:[L.jsx("h2",{className:"text-pink-600",children:"Add Special Moment"}),L.jsx("button",{onClick:e,className:"p-1 hover:bg-pink-50 rounded-lg transition-colors",children:L.jsx(kd,{className:"text-gray-500",size:24})})]}),L.jsxs("form",{onSubmit:ie,className:"space-y-4",children:[L.jsxs("div",{children:[L.jsx("label",{htmlFor:"title",className:"block text-gray-700 mb-2",children:"Title *"}),L.jsx("input",{id:"title",type:"text",value:o,onChange:ee=>u(ee.target.value),className:"w-full px-4 py-2 border-2 border-pink-100 rounded-lg focus:outline-none focus:border-pink-300 transition-colors",placeholder:"Our first date, Anniversary, etc.",required:!0})]}),L.jsxs("div",{children:[L.jsx("label",{htmlFor:"date",className:"block text-gray-700 mb-2",children:"Date *"}),L.jsx("input",{id:"date",type:"date",value:h,onChange:ee=>m(ee.target.value),className:"w-full px-4 py-2 border-2 border-pink-100 rounded-lg focus:outline-none focus:border-pink-300 transition-colors",required:!0})]}),L.jsxs("div",{children:[L.jsx("label",{htmlFor:"type",className:"block text-gray-700 mb-2",children:"Type"}),L.jsxs("select",{id:"type",value:E,onChange:ee=>A(ee.target.value),className:"w-full px-4 py-2 border-2 border-pink-100 rounded-lg focus:outline-none focus:border-pink-300 transition-colors",children:[L.jsx("option",{value:"other",children:"Other"}),L.jsx("option",{value:"anniversary",children:"Anniversary"}),L.jsx("option",{value:"date",children:"Date"}),L.jsx("option",{value:"special",children:"Special Moment"})]})]}),L.jsxs("div",{children:[L.jsx("label",{htmlFor:"description",className:"block text-gray-700 mb-2",children:"Description (optional)"}),L.jsx("textarea",{id:"description",value:y,onChange:ee=>_(ee.target.value),className:"w-full px-4 py-2 border-2 border-pink-100 rounded-lg focus:outline-none focus:border-pink-300 transition-colors resize-none",placeholder:"Add a note about this special moment...",rows:3})]}),L.jsxs("div",{children:[L.jsx("label",{className:"block text-gray-700 mb-2",children:"Photos (optional)"}),L.jsx("input",{ref:Q,type:"file",accept:"image/*",multiple:!0,onChange:q,className:"hidden"}),L.jsxs("button",{type:"button",onClick:()=>Q.current?.click(),className:"w-full px-4 py-3 border-2 border-dashed border-pink-200 rounded-lg hover:border-pink-300 hover:bg-pink-50 transition-colors flex items-center justify-center gap-2 text-gray-600",children:[L.jsx(AR,{size:20}),"Upload Photos"]}),C.length>0&&L.jsx("div",{className:"grid grid-cols-3 gap-3 mt-3",children:C.map((ee,fe)=>L.jsxs("div",{className:"relative group aspect-square",children:[L.jsx("img",{src:ee,alt:`Upload ${fe+1}`,className:"w-full h-full object-cover rounded-lg border-2 border-pink-100"}),L.jsx("button",{type:"button",onClick:()=>ne(fe),className:"absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity",children:L.jsx(kd,{size:16})})]},fe))})]}),L.jsxs("div",{className:"flex gap-3 pt-2",children:[L.jsx("button",{type:"button",onClick:e,className:"flex-1 px-4 py-2 border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",children:"Cancel"}),L.jsx("button",{type:"submit",className:"flex-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all",children:"Add Memory"})]})]})]})}):null}function _y({isOpen:i,onSetStartDate:e,currentStartDate:t}){const[s,o]=ze.useState("");ze.useEffect(()=>{if(t)o(t);else{const h=new Date().toISOString().split("T")[0];o(h)}},[t]);const u=h=>{h.preventDefault(),s&&e(s)};return i?L.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:L.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 border-2 border-pink-200",children:[L.jsxs("div",{className:"text-center mb-6",children:[L.jsx("div",{className:"flex items-center justify-center gap-2 mb-4",children:L.jsx(fo,{className:"text-red-500 fill-red-500",size:48})}),L.jsx("h2",{className:"text-pink-600 mb-2",children:t?"Change Start Date":"Welcome to Your Love Story"}),L.jsx("p",{className:"text-gray-600",children:t?"Update when your journey together began":"When did your journey together begin?"})]}),L.jsxs("form",{onSubmit:u,className:"space-y-6",children:[L.jsxs("div",{children:[L.jsx("label",{htmlFor:"startDate",className:"block text-gray-700 mb-2 text-center",children:"Our Start Date"}),L.jsx("input",{id:"startDate",type:"date",value:s,onChange:h=>o(h.target.value),className:"w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-400 transition-colors text-center text-lg",required:!0})]}),L.jsx("button",{type:"submit",className:"w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl",children:t?"Update Date":"Begin Our Story"})]})]})}):null}function DR(){const[i,e]=ze.useState([]),[t,s]=ze.useState(!1),[o,u]=ze.useState(!1),[h,m]=ze.useState(null),[y,_]=ze.useState(null),[E,A]=ze.useState(!0);ze.useEffect(()=>{(async()=>{try{const ie=ku(Aa,"settings","main"),ee=await iS(ie);if(ee.exists()){const fe=ee.data().relationshipStartDate;_(fe)}else u(!0)}catch(ie){console.error("Error loading start date:",ie),u(!0)}finally{A(!1)}})()},[]),ze.useEffect(()=>{const ne=eS(Gg(Aa,"events"),tS("date","desc")),ie=lS(ne,ee=>{const fe=[];ee.forEach(le=>{fe.push({id:le.id,...le.data()})}),e(fe)},ee=>{console.error("Error loading events:",ee)});return()=>ie()},[]);const C=async ne=>{try{const ie=ku(Aa,"settings","main");await sS(ie,{relationshipStartDate:ne}),_(ne),u(!1)}catch(ie){console.error("Error setting start date:",ie),alert("Failed to save start date. Please try again.")}},z=async ne=>{try{const ie={title:ne.title,date:ne.date,type:ne.type,createdAt:new Date().toISOString()};ne.description&&(ie.description=ne.description),ne.images&&ne.images.length>0&&(ie.images=ne.images),await aS(Gg(Aa,"events"),ie),s(!1),m(null)}catch(ie){console.error("Error adding event:",ie),alert("Failed to add event. Please try again.")}},Q=async ne=>{try{await oS(ku(Aa,"events",ne))}catch(ie){console.error("Error deleting event:",ie),alert("Failed to delete event. Please try again.")}},X=ne=>{m(ne),s(!0)};if(E)return L.jsx("div",{className:"min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center",children:L.jsxs("div",{className:"text-center",children:[L.jsx(fo,{className:"text-pink-500 fill-pink-500 w-16 h-16 mx-auto mb-4 animate-pulse"}),L.jsx("p",{className:"text-gray-600",children:"Loading your love story..."})]})});if(!y&&o)return L.jsx("div",{className:"min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50",children:L.jsx(_y,{isOpen:o,onSetStartDate:C})});if(!y)return null;const q=ne=>{const[ie,ee,fe]=ne.split("-").map(Number);return new Date(ie,ee-1,fe).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})};return L.jsx("div",{className:"min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50",children:L.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-8",children:[L.jsxs("div",{className:"text-center mb-8",children:[L.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[L.jsx(fo,{className:"text-red-500 fill-red-500",size:32}),L.jsx("h1",{className:"text-pink-600",children:"Our Love Story"}),L.jsx(fo,{className:"text-red-500 fill-red-500",size:32})]}),L.jsxs("div",{className:"flex items-center justify-center gap-2",children:[L.jsxs("p",{className:"text-gray-600",children:["Together since ",q(y)]}),L.jsx("button",{onClick:()=>u(!0),className:"p-1 hover:bg-white/50 rounded-lg transition-colors",title:"Change start date",children:L.jsx(ER,{size:16,className:"text-gray-400 hover:text-pink-500"})})]})]}),L.jsx(kR,{startDate:y}),L.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8",children:[L.jsx("div",{className:"lg:col-span-2",children:L.jsx(CR,{events:i,startDate:y,onDateClick:X,onAddEvent:()=>s(!0)})}),L.jsx("div",{className:"lg:col-span-1",children:L.jsx(NR,{events:i,onDeleteEvent:Q})})]}),t&&L.jsx(xR,{isOpen:t,onClose:()=>{s(!1),m(null)},onAddEvent:z,preselectedDate:h}),L.jsx(_y,{isOpen:o,onSetStartDate:C,currentStartDate:y})]})})}cw.createRoot(document.getElementById("root")).render(L.jsx(DR,{}));
