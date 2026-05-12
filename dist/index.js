"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var E=l(function(Q,m){
var L=require("path").resolve,P=require('@stdlib/fs-read-wasm/dist').sync,V=P(L(__dirname,"..","src","main.wasm"));m.exports=V
});var f=l(function(U,R){
var g=require('@stdlib/assert-is-wasm-memory/dist'),M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),_=require('@stdlib/wasm-module-wrapper/dist'),z=require('@stdlib/error-tools-fmtprodmsg/dist'),D=E();function c(e){if(!(this instanceof c))return new c(e);if(!g(e))throw new TypeError(z('273H0',e));return _.call(this,D,e,{env:{memory:e}}),this}j(c,_);M(c.prototype,"main",function(r,s,i,a,t,n,u){return this._instance.exports.c_srot(r,s,i,a,t,n,u),a});M(c.prototype,"ndarray",function(r,s,i,a,t,n,u,d,q){return this._instance.exports.c_srot_ndarray(r,s,i,a,t,n,u,d,q),t});R.exports=c
});var A=l(function(Z,W){
var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=require('@stdlib/utils-inherit/dist'),b=require('@stdlib/strided-base-stride2offset/dist'),x=require('@stdlib/strided-base-read-dataview/dist').ndarray,C=require('@stdlib/wasm-memory/dist'),F=require('@stdlib/wasm-base-arrays2ptrs/dist'),T=require('@stdlib/wasm-base-strided2object/dist'),h=f();function p(){return this instanceof p?(h.call(this,new C({initial:0})),this):new p}k(p,h);S(p.prototype,"main",function(r,s,i,a,t,n,u){return this.ndarray(r,s,i,b(r,i),a,t,b(r,t),n,u)});S(p.prototype,"ndarray",function(r,s,i,a,t,n,u,d,q){var y,o,v;return y=F(this,[T(r,s,i,a),T(r,t,n,u)]),o=y[0],v=y[1],h.prototype.ndarray.call(this,r,o.ptr,o.stride,o.offset,v.ptr,v.stride,v.offset,d,q),o.copy&&x(r,this.view,o.stride*o.BYTES_PER_ELEMENT,o.ptr,s,i,a,!0),v.copy&&x(r,this.view,v.stride*v.BYTES_PER_ELEMENT,v.ptr,t,n,u,!0),t});W.exports=p
});var O=l(function($,B){
var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),H=A(),I=f(),w=new H;w.initializeSync();G(w,"Module",I.bind(null));B.exports=w
});var J=O();module.exports=J;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
