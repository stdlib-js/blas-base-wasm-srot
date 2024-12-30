"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=d(function(Q,w){
var P=require("path").resolve,V=require('@stdlib/fs-read-wasm/dist').sync,g=V(P(__dirname,"..","src","main.wasm"));w.exports=g
});var f=d(function(U,_){
var j=require('@stdlib/assert-is-wasm-memory/dist'),E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=require('@stdlib/utils-inherit/dist'),M=require('@stdlib/wasm-module-wrapper/dist'),D=require('@stdlib/error-tools-fmtprodmsg/dist'),k=m();function c(e){if(!(this instanceof c))return new c(e);if(!j(e))throw new TypeError(D('22vH0',e));return M.call(this,k,e,{env:{memory:e}}),this}z(c,M);E(c.prototype,"main",function(r,s,i,a,t,n,u){return this._instance.exports.c_srot(r,s,i,a,t,n,u),a});E(c.prototype,"ndarray",function(r,s,i,a,t,n,u,l,q){return this._instance.exports.c_srot_ndarray(r,s,i,a,t,n,u,l,q),t});_.exports=c
});var W=d(function(Z,S){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=require('@stdlib/utils-inherit/dist'),R=require('@stdlib/strided-base-stride2offset/dist'),x=require('@stdlib/strided-base-read-dataview/dist').ndarray,F=require('@stdlib/wasm-memory/dist'),G=require('@stdlib/wasm-base-arrays2ptrs/dist'),b=require('@stdlib/wasm-base-strided2object/dist'),h=f();function p(){return this instanceof p?(h.call(this,new F({initial:0})),this):new p}C(p,h);T(p.prototype,"main",function(r,s,i,a,t,n,u){return this.ndarray(r,s,i,R(r,i),a,t,R(r,t),n,u)});T(p.prototype,"ndarray",function(r,s,i,a,t,n,u,l,q){var y,o,v;return y=G(this,[b(r,s,i,a),b(r,t,n,u)]),o=y[0],v=y[1],h.prototype.ndarray.call(this,r,o.ptr,o.stride,o.offset,v.ptr,v.stride,v.offset,l,q),o.copy&&x(r,this.view,o.stride*o.BYTES_PER_ELEMENT,o.ptr,s,i,a,!0),v.copy&&x(r,this.view,v.stride*v.BYTES_PER_ELEMENT,v.ptr,t,n,u,!0),t});S.exports=p
});var O=d(function($,B){
var H=W(),A=new H;A.initializeSync();B.exports=A
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=O(),J=f();I(L,"Module",J);module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
