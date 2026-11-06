(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rc="170",Ef=0,$c=1,bf=2,bu=1,wf=2,Ln=3,Fn=0,Ne=1,_n=2,ri=0,or=1,Kc=2,Zc=3,jc=4,Tf=5,Mi=100,Af=101,Rf=102,Cf=103,Pf=104,Lf=200,If=201,Df=202,Uf=203,sa=204,oa=205,Nf=206,Of=207,Ff=208,Bf=209,zf=210,Hf=211,kf=212,Vf=213,Gf=214,aa=0,ca=1,la=2,hr=3,ua=4,ha=5,fa=6,da=7,wu=0,Wf=1,Xf=2,si=0,qf=1,Yf=2,$f=3,Kf=4,Zf=5,jf=6,Jf=7,Tu=300,fr=301,dr=302,pa=303,ma=304,Ks=306,ga=1e3,wi=1001,_a=1002,Ve=1003,Qf=1004,os=1005,vn=1006,lo=1007,Ti=1008,Bn=1009,Au=1010,Ru=1011,Xr=1012,sc=1013,Ii=1014,Un=1015,Mr=1016,oc=1017,ac=1018,pr=1020,Cu=35902,Pu=1021,Lu=1022,en=1023,Iu=1024,Du=1025,ar=1026,mr=1027,Uu=1028,cc=1029,Nu=1030,lc=1031,uc=1033,Ds=33776,Us=33777,Ns=33778,Os=33779,va=35840,xa=35841,ya=35842,Ma=35843,Sa=36196,Ea=37492,ba=37496,wa=37808,Ta=37809,Aa=37810,Ra=37811,Ca=37812,Pa=37813,La=37814,Ia=37815,Da=37816,Ua=37817,Na=37818,Oa=37819,Fa=37820,Ba=37821,Fs=36492,za=36494,Ha=36495,Ou=36283,ka=36284,Va=36285,Ga=36286,td=3200,ed=3201,hc=0,nd=1,ii="",Ue="srgb",Sr="srgb-linear",Zs="linear",te="srgb",zi=7680,Jc=519,id=512,rd=513,sd=514,Fu=515,od=516,ad=517,cd=518,ld=519,Qc=35044,tl="300 es",Nn=2e3,ks=2001;class Er{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let el=1234567;const kr=Math.PI/180,qr=180/Math.PI;function br(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]).toLowerCase()}function be(n,t,e){return Math.max(t,Math.min(e,n))}function fc(n,t){return(n%t+t)%t}function ud(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function hd(n,t,e){return n!==t?(e-n)/(t-n):0}function Vr(n,t,e){return(1-e)*n+e*t}function fd(n,t,e,i){return Vr(n,t,1-Math.exp(-e*i))}function dd(n,t=1){return t-Math.abs(fc(n,t*2)-t)}function pd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function md(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function gd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function _d(n,t){return n+Math.random()*(t-n)}function vd(n){return n*(.5-Math.random())}function xd(n){n!==void 0&&(el=n);let t=el+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yd(n){return n*kr}function Md(n){return n*qr}function Sd(n){return(n&n-1)===0&&n!==0}function Ed(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function bd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wd(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),f=o((t-i)/2),p=s((i-t)/2),v=o((i-t)/2);switch(r){case"XYX":n.set(a*u,c*h,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*v,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*v,a*l);break;case"ZYZ":n.set(c*v,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function er(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Di={DEG2RAD:kr,RAD2DEG:qr,generateUUID:br,clamp:be,euclideanModulo:fc,mapLinear:ud,inverseLerp:hd,lerp:Vr,damp:fd,pingpong:dd,smoothstep:pd,smootherstep:md,randInt:gd,randFloat:_d,randFloatSpread:vd,seededRandom:xd,degToRad:yd,radToDeg:Md,isPowerOfTwo:Sd,ceilPowerOfTwo:Ed,floorPowerOfTwo:bd,setQuaternionFromProperEuler:wd,normalize:Ie,denormalize:er};class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,i,r,s,o,a,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],p=i[5],v=i[8],_=r[0],m=r[3],d=r[6],E=r[1],y=r[4],g=r[7],R=r[2],w=r[5],A=r[8];return s[0]=o*_+a*E+c*R,s[3]=o*m+a*y+c*w,s[6]=o*d+a*g+c*A,s[1]=l*_+u*E+h*R,s[4]=l*m+u*y+h*w,s[7]=l*d+u*g+h*A,s[2]=f*_+p*E+v*R,s[5]=f*m+p*y+v*w,s[8]=f*d+p*g+v*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*s,p=l*s-o*c,v=e*h+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return t[0]=h*_,t[1]=(r*l-u*i)*_,t[2]=(a*i-r*o)*_,t[3]=f*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=p*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(uo.makeScale(t,e)),this}rotate(t){return this.premultiply(uo.makeRotation(-t)),this}translate(t,e){return this.premultiply(uo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const uo=new Ot;function Bu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Td(){const n=Vs("canvas");return n.style.display="block",n}const nl={};function Br(n){n in nl||(nl[n]=!0,console.warn(n))}function Ad(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Rd(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cd(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(n.r=On(n.r),n.g=On(n.g),n.b=On(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(n.r=cr(n.r),n.g=cr(n.g),n.b=cr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ii?Zs:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function On(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const il=[.64,.33,.3,.6,.15,.06],rl=[.2126,.7152,.0722],sl=[.3127,.329],ol=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),al=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[Sr]:{primaries:il,whitePoint:sl,transfer:Zs,toXYZ:ol,fromXYZ:al,luminanceCoefficients:rl,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:il,whitePoint:sl,transfer:te,toXYZ:ol,fromXYZ:al,luminanceCoefficients:rl,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});let Hi;class Pd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=Vs("canvas")),Hi.width=t.width,Hi.height=t.height;const i=Hi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=On(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(On(e[i]/255)*255):e[i]=On(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ld=0;class zu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=br(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ho(r[o].image)):s.push(ho(r[o]))}else s=ho(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function ho(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Id=0;class Pe extends Er{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,i=wi,r=wi,s=vn,o=Ti,a=en,c=Bn,l=Pe.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=br(),this.name="",this.source=new zu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ga:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ga:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=Tu;Pe.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,r=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],v=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(v+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,g=(p+1)/2,R=(d+1)/2,w=(u+f)/4,A=(h+_)/4,P=(v+m)/4;return y>g&&y>R?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=A/i):g>R?g<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(g),i=w/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=P/s),this.set(i,r,s,e),this}let E=Math.sqrt((m-v)*(m-v)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-v)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dd extends Er{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Pe(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new zu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Dd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Hu extends Pe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ud extends Pe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hn{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],v=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=v,t[e+3]=_;return}if(h!==_||c!==f||l!==p||u!==v){let m=1-a;const d=c*f+l*p+u*v+h*_,E=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const R=Math.sqrt(y),w=Math.atan2(R,d*E);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const g=a*E;if(c=c*m+f*g,l=l*m+p*g,u=u*m+v*g,h=h*m+_*g,m===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return t[e]=a*v+u*h+c*p-l*f,t[e+1]=c*v+u*f+l*h-a*p,t[e+2]=l*v+u*p+a*f-c*h,t[e+3]=u*v-a*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),p=c(r/2),v=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*p*v,this._y=l*p*h-f*u*v,this._z=l*u*v+f*p*h,this._w=l*u*h-f*p*v;break;case"YXZ":this._x=f*u*h+l*p*v,this._y=l*p*h-f*u*v,this._z=l*u*v-f*p*h,this._w=l*u*h+f*p*v;break;case"ZXY":this._x=f*u*h-l*p*v,this._y=l*p*h+f*u*v,this._z=l*u*v+f*p*h,this._w=l*u*h-f*p*v;break;case"ZYX":this._x=f*u*h-l*p*v,this._y=l*p*h+f*u*v,this._z=l*u*v-f*p*h,this._w=l*u*h+f*p*v;break;case"YZX":this._x=f*u*h+l*p*v,this._y=l*p*h+f*u*v,this._z=l*u*v-f*p*h,this._w=l*u*h-f*p*v;break;case"XZY":this._x=f*u*h-l*p*v,this._y=l*p*h-f*u*v,this._z=l*u*v+f*p*h,this._w=l*u*h+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fo.copy(this).projectOnVector(t),this.sub(fo)}reflect(t){return this.sub(fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fo=new L,cl=new Hn;class Jr{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(s,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),as.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),as.copy(i.boundingBox)),as.applyMatrix4(t.matrixWorld),this.union(as)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),cs.subVectors(this.max,Ir),ki.subVectors(t.a,Ir),Vi.subVectors(t.b,Ir),Gi.subVectors(t.c,Ir),$n.subVectors(Vi,ki),Kn.subVectors(Gi,Vi),hi.subVectors(ki,Gi);let e=[0,-$n.z,$n.y,0,-Kn.z,Kn.y,0,-hi.z,hi.y,$n.z,0,-$n.x,Kn.z,0,-Kn.x,hi.z,0,-hi.x,-$n.y,$n.x,0,-Kn.y,Kn.x,0,-hi.y,hi.x,0];return!po(e,ki,Vi,Gi,cs)||(e=[1,0,0,0,1,0,0,0,1],!po(e,ki,Vi,Gi,cs))?!1:(ls.crossVectors($n,Kn),e=[ls.x,ls.y,ls.z],po(e,ki,Vi,Gi,cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new L,new L,new L,new L,new L,new L,new L,new L],an=new L,as=new Jr,ki=new L,Vi=new L,Gi=new L,$n=new L,Kn=new L,hi=new L,Ir=new L,cs=new L,ls=new L,fi=new L;function po(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){fi.fromArray(n,s);const a=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),c=t.dot(fi),l=e.dot(fi),u=i.dot(fi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Nd=new Jr,Dr=new L,mo=new L;class dc{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Nd.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dr.subVectors(t,this.center);const e=Dr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Dr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dr.copy(t.center).add(mo)),this.expandByPoint(Dr.copy(t.center).sub(mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new L,go=new L,us=new L,Zn=new L,_o=new L,hs=new L,vo=new L;class Od{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){go.copy(t).add(e).multiplyScalar(.5),us.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(go);const s=t.distanceTo(e)*.5,o=-this.direction.dot(us),a=Zn.dot(this.direction),c=-Zn.dot(us),l=Zn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,v;if(u>0)if(h=o*c-a,f=o*a-c,v=s*u,h>=0)if(f>=-v)if(f<=v){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-v?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=v?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(go).addScaledVector(us,f),p}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const i=wn.dot(this.direction),r=wn.dot(wn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,i,r,s){_o.subVectors(e,t),hs.subVectors(i,t),vo.crossVectors(_o,hs);let o=this.direction.dot(vo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,t);const c=a*this.direction.dot(hs.crossVectors(Zn,hs));if(c<0)return null;const l=a*this.direction.dot(_o.cross(Zn));if(l<0||c+l>o)return null;const u=-a*Zn.dot(vo);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,i,r,s,o,a,c,l,u,h,f,p,v,_,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,h,f,p,v,_,m)}set(t,e,i,r,s,o,a,c,l,u,h,f,p,v,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=v,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Wi.setFromMatrixColumn(t,0).length(),s=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,p=o*h,v=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+v*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=v+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,p=c*h,v=l*u,_=l*h;e[0]=f+_*a,e[4]=v*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-v,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,p=c*h,v=l*u,_=l*h;e[0]=f-_*a,e[4]=-o*h,e[8]=v+p*a,e[1]=p+v*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,p=o*h,v=a*u,_=a*h;e[0]=c*u,e[4]=v*l-p,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=p*l-v,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,v=a*c,_=a*l;e[0]=c*u,e[4]=_-f*h,e[8]=v*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+v,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*c,p=o*l,v=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=o*u,e[9]=p*h-v,e[2]=v*h-p,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fd,t,Bd)}lookAt(t,e,i){const r=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),jn.crossVectors(i,We),jn.lengthSq()===0&&(Math.abs(i.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),jn.crossVectors(i,We)),jn.normalize(),fs.crossVectors(We,jn),r[0]=jn.x,r[4]=fs.x,r[8]=We.x,r[1]=jn.y,r[5]=fs.y,r[9]=We.y,r[2]=jn.z,r[6]=fs.z,r[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],p=i[13],v=i[2],_=i[6],m=i[10],d=i[14],E=i[3],y=i[7],g=i[11],R=i[15],w=r[0],A=r[4],P=r[8],S=r[12],x=r[1],C=r[5],z=r[9],D=r[13],W=r[2],B=r[6],I=r[10],X=r[14],H=r[3],K=r[7],Q=r[11],st=r[15];return s[0]=o*w+a*x+c*W+l*H,s[4]=o*A+a*C+c*B+l*K,s[8]=o*P+a*z+c*I+l*Q,s[12]=o*S+a*D+c*X+l*st,s[1]=u*w+h*x+f*W+p*H,s[5]=u*A+h*C+f*B+p*K,s[9]=u*P+h*z+f*I+p*Q,s[13]=u*S+h*D+f*X+p*st,s[2]=v*w+_*x+m*W+d*H,s[6]=v*A+_*C+m*B+d*K,s[10]=v*P+_*z+m*I+d*Q,s[14]=v*S+_*D+m*X+d*st,s[3]=E*w+y*x+g*W+R*H,s[7]=E*A+y*C+g*B+R*K,s[11]=E*P+y*z+g*I+R*Q,s[15]=E*S+y*D+g*X+R*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],p=t[14],v=t[3],_=t[7],m=t[11],d=t[15];return v*(+s*c*h-r*l*h-s*a*f+i*l*f+r*a*p-i*c*p)+_*(+e*c*p-e*l*f+s*o*f-r*o*p+r*l*u-s*c*u)+m*(+e*l*h-e*a*p-s*o*h+i*o*p+s*a*u-i*l*u)+d*(-r*a*u-e*c*h+e*a*f+r*o*h-i*o*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],p=t[11],v=t[12],_=t[13],m=t[14],d=t[15],E=h*m*l-_*f*l+_*c*p-a*m*p-h*c*d+a*f*d,y=v*f*l-u*m*l-v*c*p+o*m*p+u*c*d-o*f*d,g=u*_*l-v*h*l+v*a*p-o*_*p-u*a*d+o*h*d,R=v*h*c-u*_*c-v*a*f+o*_*f+u*a*m-o*h*m,w=e*E+i*y+r*g+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=E*A,t[1]=(_*f*s-h*m*s-_*r*p+i*m*p+h*r*d-i*f*d)*A,t[2]=(a*m*s-_*c*s+_*r*l-i*m*l-a*r*d+i*c*d)*A,t[3]=(h*c*s-a*f*s-h*r*l+i*f*l+a*r*p-i*c*p)*A,t[4]=y*A,t[5]=(u*m*s-v*f*s+v*r*p-e*m*p-u*r*d+e*f*d)*A,t[6]=(v*c*s-o*m*s-v*r*l+e*m*l+o*r*d-e*c*d)*A,t[7]=(o*f*s-u*c*s+u*r*l-e*f*l-o*r*p+e*c*p)*A,t[8]=g*A,t[9]=(v*h*s-u*_*s-v*i*p+e*_*p+u*i*d-e*h*d)*A,t[10]=(o*_*s-v*a*s+v*i*l-e*_*l-o*i*d+e*a*d)*A,t[11]=(u*a*s-o*h*s-u*i*l+e*h*l+o*i*p-e*a*p)*A,t[12]=R*A,t[13]=(u*_*r-v*h*r+v*i*f-e*_*f-u*i*m+e*h*m)*A,t[14]=(v*a*r-o*_*r-v*i*c+e*_*c+o*i*m-e*a*m)*A,t[15]=(o*h*r-u*a*r+u*i*c-e*h*c-o*i*f+e*a*f)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,f=s*l,p=s*u,v=s*h,_=o*u,m=o*h,d=a*h,E=c*l,y=c*u,g=c*h,R=i.x,w=i.y,A=i.z;return r[0]=(1-(_+d))*R,r[1]=(p+g)*R,r[2]=(v-y)*R,r[3]=0,r[4]=(p-g)*w,r[5]=(1-(f+d))*w,r[6]=(m+E)*w,r[7]=0,r[8]=(v+y)*A,r[9]=(m-E)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Wi.set(r[0],r[1],r[2]).length();const o=Wi.set(r[4],r[5],r[6]).length(),a=Wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],cn.copy(this);const l=1/s,u=1/o,h=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,e.setFromRotationMatrix(cn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Nn){const c=this.elements,l=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let p,v;if(a===Nn)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ks)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Nn){const c=this.elements,l=1/(e-t),u=1/(i-r),h=1/(o-s),f=(e+t)*l,p=(i+r)*u;let v,_;if(a===Nn)v=(o+s)*h,_=-2*h;else if(a===ks)v=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new L,cn=new se,Fd=new L(0,0,0),Bd=new L(1,1,1),jn=new L,fs=new L,We=new L,ll=new se,ul=new Hn;class kn{constructor(t=0,e=0,i=0,r=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ll,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ul.setFromEuler(this),this.setFromQuaternion(ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class ku{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zd=0;const hl=new L,Xi=new Hn,Tn=new se,ds=new L,Ur=new L,Hd=new L,kd=new Hn,fl=new L(1,0,0),dl=new L(0,1,0),pl=new L(0,0,1),ml={type:"added"},Vd={type:"removed"},qi={type:"childadded",child:null},xo={type:"childremoved",child:null};class Le extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new L,e=new kn,i=new Hn,r=new L(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new se},normalMatrix:{value:new Ot}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ku,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(fl,t)}rotateY(t){return this.rotateOnAxis(dl,t)}rotateZ(t){return this.rotateOnAxis(pl,t)}translateOnAxis(t,e){return hl.copy(t).applyQuaternion(this.quaternion),this.position.add(hl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fl,t)}translateY(t){return this.translateOnAxis(dl,t)}translateZ(t){return this.translateOnAxis(pl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ds.copy(t):ds.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Ur,ds,this.up):Tn.lookAt(ds,Ur,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ml),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vd),xo.child=t,this.dispatchEvent(xo),xo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ml),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,Hd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Le.DEFAULT_UP=new L(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new L,An=new L,yo=new L,Rn=new L,Yi=new L,$i=new L,gl=new L,Mo=new L,So=new L,Eo=new L,bo=new de,wo=new de,To=new de;class un{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ln.subVectors(t,e),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){ln.subVectors(r,e),An.subVectors(i,e),yo.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(An),c=ln.dot(yo),l=An.dot(An),u=An.dot(yo),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(l*c-a*u)*f,v=(o*u-a*c)*f;return s.set(1-p-v,v,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Rn.x),c.addScaledVector(o,Rn.y),c.addScaledVector(a,Rn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return bo.setScalar(0),wo.setScalar(0),To.setScalar(0),bo.fromBufferAttribute(t,e),wo.fromBufferAttribute(t,i),To.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(bo,s.x),o.addScaledVector(wo,s.y),o.addScaledVector(To,s.z),o}static isFrontFacing(t,e,i,r){return ln.subVectors(i,e),An.subVectors(t,e),ln.cross(An).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),An.subVectors(this.a,this.b),ln.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return un.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Yi.subVectors(r,i),$i.subVectors(s,i),Mo.subVectors(t,i);const c=Yi.dot(Mo),l=$i.dot(Mo);if(c<=0&&l<=0)return e.copy(i);So.subVectors(t,r);const u=Yi.dot(So),h=$i.dot(So);if(u>=0&&h<=u)return e.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Yi,o);Eo.subVectors(t,s);const p=Yi.dot(Eo),v=$i.dot(Eo);if(v>=0&&p<=v)return e.copy(s);const _=p*l-c*v;if(_<=0&&l>=0&&v<=0)return a=l/(l-v),e.copy(i).addScaledVector($i,a);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return gl.subVectors(s,r),a=(h-u)/(h-u+(p-v)),e.copy(r).addScaledVector(gl,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(Yi,o).addScaledVector($i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Ao(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=$t.workingColorSpace){return this.r=t,this.g=e,this.b=i,$t.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=$t.workingColorSpace){if(t=fc(t,1),e=be(e,0,1),i=be(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Ao(o,s,t+1/3),this.g=Ao(o,s,t),this.b=Ao(o,s,t-1/3)}return $t.toWorkingColorSpace(this,r),this}setStyle(t,e=Ue){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const i=Vu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return $t.fromWorkingColorSpace(Re.copy(this),t),Math.round(be(Re.r*255,0,255))*65536+Math.round(be(Re.g*255,0,255))*256+Math.round(be(Re.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Re.copy(this),e);const i=Re.r,r=Re.g,s=Re.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Ue){$t.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,i=Re.g,r=Re.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(ps);const i=Vr(Jn.h,ps.h,e),r=Vr(Jn.s,ps.s,e),s=Vr(Jn.l,ps.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new qt;qt.NAMES=Vu;let Gd=0;class wr extends Er{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=br(),this.name="",this.blending=or,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=oa,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sa&&(i.blendSrc=this.blendSrc),this.blendDst!==oa&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qr extends wr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new L,ms=new Mt;class hn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Qc,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ms.fromBufferAttribute(this,e),ms.applyMatrix3(t),this.setXY(e,ms.x,ms.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=er(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=er(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=er(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=er(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),r=Ie(r,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qc&&(t.usage=this.usage),t}}class Gu extends hn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Wu extends hn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class xe extends hn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Wd=0;const Ze=new se,Ro=new Le,Ki=new L,Xe=new Jr,Nr=new Jr,Se=new L;class rn extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bu(t)?Wu:Gu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ot().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,i){return Ze.makeTranslation(t,e,i),this.applyMatrix4(Ze),this}scale(t,e,i){return Ze.makeScale(t,e,i),this.applyMatrix4(Ze),this}lookAt(t){return Ro.lookAt(t),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Xe.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Xe.min,Nr.min),Xe.expandByPoint(Se),Se.addVectors(Xe.max,Nr.max),Xe.expandByPoint(Se)):(Xe.expandByPoint(Nr.min),Xe.expandByPoint(Nr.max))}Xe.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Se.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Se));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Se.fromBufferAttribute(a,l),c&&(Ki.fromBufferAttribute(t,l),Se.add(Ki)),r=Math.max(r,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<i.count;P++)a[P]=new L,c[P]=new L;const l=new L,u=new L,h=new L,f=new Mt,p=new Mt,v=new Mt,_=new L,m=new L;function d(P,S,x){l.fromBufferAttribute(i,P),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,x),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,S),v.fromBufferAttribute(s,x),u.sub(l),h.sub(l),p.sub(f),v.sub(f);const C=1/(p.x*v.y-v.x*p.y);isFinite(C)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(C),a[P].add(_),a[S].add(_),a[x].add(_),c[P].add(m),c[S].add(m),c[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,S=E.length;P<S;++P){const x=E[P],C=x.start,z=x.count;for(let D=C,W=C+z;D<W;D+=3)d(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const y=new L,g=new L,R=new L,w=new L;function A(P){R.fromBufferAttribute(r,P),w.copy(R);const S=a[P];y.copy(S),y.sub(R.multiplyScalar(R.dot(S))).normalize(),g.crossVectors(w,S);const C=g.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,C)}for(let P=0,S=E.length;P<S;++P){const x=E[P],C=x.start,z=x.count;for(let D=C,W=C+z;D<W;D+=3)A(t.getX(D+0)),A(t.getX(D+1)),A(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){const v=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,v),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let p=0,v=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let d=0;d<u;d++)f[v++]=l[p++]}return new hn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new rn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=t(f,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _l=new se,di=new Od,gs=new dc,vl=new L,_s=new L,vs=new L,xs=new L,Co=new L,ys=new L,xl=new L,Ms=new L;class le extends Le{constructor(t=new rn,e=new Qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ys.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Co.fromBufferAttribute(h,t),o?ys.addScaledVector(Co,u):ys.addScaledVector(Co.sub(e),u))}e.add(ys)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere),gs.applyMatrix4(s),di.copy(t.ray).recast(t.near),!(gs.containsPoint(di.origin)===!1&&(di.intersectSphere(gs,vl)===null||di.origin.distanceToSquared(vl)>(t.far-t.near)**2))&&(_l.copy(s).invert(),di.copy(t.ray).applyMatrix4(_l),!(i.boundingBox!==null&&di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const m=f[v],d=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let g=E,R=y;g<R;g+=3){const w=a.getX(g),A=a.getX(g+1),P=a.getX(g+2);r=Ss(this,d,t,i,l,u,h,w,A,P),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=v,d=_;m<d;m+=3){const E=a.getX(m),y=a.getX(m+1),g=a.getX(m+2);r=Ss(this,o,t,i,l,u,h,E,y,g),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const m=f[v],d=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let g=E,R=y;g<R;g+=3){const w=g,A=g+1,P=g+2;r=Ss(this,d,t,i,l,u,h,w,A,P),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=v,d=_;m<d;m+=3){const E=m,y=m+1,g=m+2;r=Ss(this,o,t,i,l,u,h,E,y,g),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Xd(n,t,e,i,r,s,o,a){let c;if(t.side===Ne?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===Fn,a),c===null)return null;Ms.copy(a),Ms.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ms);return l<e.near||l>e.far?null:{distance:l,point:Ms.clone(),object:n}}function Ss(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,_s),n.getVertexPosition(c,vs),n.getVertexPosition(l,xs);const u=Xd(n,t,e,i,_s,vs,xs,xl);if(u){const h=new L;un.getBarycoord(xl,_s,vs,xs,h),r&&(u.uv=un.getInterpolatedAttribute(r,a,c,l,h,new Mt)),s&&(u.uv1=un.getInterpolatedAttribute(s,a,c,l,h,new Mt)),o&&(u.normal=un.getInterpolatedAttribute(o,a,c,l,h,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};un.getNormal(_s,vs,xs,f.normal),u.face=f,u.barycoord=h}return u}class ne extends rn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,i,e,t,o,s,0),v("z","y","x",1,-1,i,e,-t,o,s,1),v("x","z","y",1,1,t,i,e,r,o,2),v("x","z","y",1,-1,t,i,-e,r,o,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(h,2));function v(_,m,d,E,y,g,R,w,A,P,S){const x=g/A,C=R/P,z=g/2,D=R/2,W=w/2,B=A+1,I=P+1;let X=0,H=0;const K=new L;for(let Q=0;Q<I;Q++){const st=Q*C-D;for(let St=0;St<B;St++){const Ht=St*x-z;K[_]=Ht*E,K[m]=st*y,K[d]=W,l.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[d]=w>0?1:-1,u.push(K.x,K.y,K.z),h.push(St/A),h.push(1-Q/P),X+=1}}for(let Q=0;Q<P;Q++)for(let st=0;st<A;st++){const St=f+st+B*Q,Ht=f+st+B*(Q+1),Y=f+(st+1)+B*(Q+1),tt=f+(st+1)+B*Q;c.push(St,Ht,tt),c.push(Ht,Y,tt),H+=6}a.addGroup(p,H,S),p+=H,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function De(n){const t={};for(let e=0;e<n.length;e++){const i=gr(n[e]);for(const r in i)t[r]=i[r]}return t}function qd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Xu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Yd={clone:gr,merge:De};var $d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends wr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gr(t.uniforms),this.uniformsGroups=qd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class qu extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new L,yl=new Mt,Ml=new Mt;class tn extends qu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,yl,Ml),e.subVectors(Ml,yl)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(kr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,ji=1;class Zd extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(Zi,ji,t,e);r.layers=this.layers,this.add(r);const s=new tn(Zi,ji,t,e);s.layers=this.layers,this.add(s);const o=new tn(Zi,ji,t,e);o.layers=this.layers,this.add(o);const a=new tn(Zi,ji,t,e);a.layers=this.layers,this.add(a);const c=new tn(Zi,ji,t,e);c.layers=this.layers,this.add(c);const l=new tn(Zi,ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Yu extends Pe{constructor(t,e,i,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:fr,super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jd extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Yu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ne(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ne,blending:ri});s.uniforms.tEquirect.value=e;const o=new le(r,s),a=e.minFilter;return e.minFilter===Ti&&(e.minFilter=vn),new Zd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Po=new L,Jd=new L,Qd=new Ot;class _i{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Po.subVectors(i,e).cross(Jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Po),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Qd.getNormalMatrix(t),r=this.coplanarPoint(Po).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new dc,Es=new L;class pc{constructor(t=new _i,e=new _i,i=new _i,r=new _i,s=new _i,o=new _i){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Nn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],p=r[8],v=r[9],_=r[10],m=r[11],d=r[12],E=r[13],y=r[14],g=r[15];if(i[0].setComponents(c-s,f-l,m-p,g-d).normalize(),i[1].setComponents(c+s,f+l,m+p,g+d).normalize(),i[2].setComponents(c+o,f+u,m+v,g+E).normalize(),i[3].setComponents(c-o,f-u,m-v,g-E).normalize(),i[4].setComponents(c-a,f-h,m-_,g-y).normalize(),e===Nn)i[5].setComponents(c+a,f+h,m+_,g+y).normalize();else if(e===ks)i[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Es.x=r.normal.x>0?t.max.x:t.min.x,Es.y=r.normal.y>0?t.max.y:t.min.y,Es.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Es)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $u(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function tp(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<h.length;p++){const v=h[f],_=h[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,v=h.length;p<v;p++){const _=h[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Fi extends rn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=t/a,f=e/c,p=[],v=[],_=[],m=[];for(let d=0;d<u;d++){const E=d*f-o;for(let y=0;y<l;y++){const g=y*h-s;v.push(g,-E,0),_.push(0,0,1),m.push(y/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<a;E++){const y=E+l*d,g=E+l*(d+1),R=E+1+l*(d+1),w=E+1+l*d;p.push(y,g,w),p.push(g,R,w)}this.setIndex(p),this.setAttribute("position",new xe(v,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.width,t.height,t.widthSegments,t.heightSegments)}}var ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,em=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,um=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Em=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,km=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ym=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$m=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Km=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ag=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ig=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:ep,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:rp,alphatest_fragment:sp,alphatest_pars_fragment:op,aomap_fragment:ap,aomap_pars_fragment:cp,batching_pars_vertex:lp,batching_vertex:up,begin_vertex:hp,beginnormal_vertex:fp,bsdfs:dp,iridescence_fragment:pp,bumpmap_pars_fragment:mp,clipping_planes_fragment:gp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:vp,clipping_planes_vertex:xp,color_fragment:yp,color_pars_fragment:Mp,color_pars_vertex:Sp,color_vertex:Ep,common:bp,cube_uv_reflection_fragment:wp,defaultnormal_vertex:Tp,displacementmap_pars_vertex:Ap,displacementmap_vertex:Rp,emissivemap_fragment:Cp,emissivemap_pars_fragment:Pp,colorspace_fragment:Lp,colorspace_pars_fragment:Ip,envmap_fragment:Dp,envmap_common_pars_fragment:Up,envmap_pars_fragment:Np,envmap_pars_vertex:Op,envmap_physical_pars_fragment:Yp,envmap_vertex:Fp,fog_vertex:Bp,fog_pars_vertex:zp,fog_fragment:Hp,fog_pars_fragment:kp,gradientmap_pars_fragment:Vp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:Xp,lights_pars_begin:qp,lights_toon_fragment:$p,lights_toon_pars_fragment:Kp,lights_phong_fragment:Zp,lights_phong_pars_fragment:jp,lights_physical_fragment:Jp,lights_physical_pars_fragment:Qp,lights_fragment_begin:tm,lights_fragment_maps:em,lights_fragment_end:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:sm,logdepthbuf_vertex:om,map_fragment:am,map_pars_fragment:cm,map_particle_fragment:lm,map_particle_pars_fragment:um,metalnessmap_fragment:hm,metalnessmap_pars_fragment:fm,morphinstance_vertex:dm,morphcolor_vertex:pm,morphnormal_vertex:mm,morphtarget_pars_vertex:gm,morphtarget_vertex:_m,normal_fragment_begin:vm,normal_fragment_maps:xm,normal_pars_fragment:ym,normal_pars_vertex:Mm,normal_vertex:Sm,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:Am,opaque_fragment:Rm,packing:Cm,premultiplied_alpha_fragment:Pm,project_vertex:Lm,dithering_fragment:Im,dithering_pars_fragment:Dm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Fm,shadowmap_vertex:Bm,shadowmask_pars_fragment:zm,skinbase_vertex:Hm,skinning_pars_vertex:km,skinning_vertex:Vm,skinnormal_vertex:Gm,specularmap_fragment:Wm,specularmap_pars_fragment:Xm,tonemapping_fragment:qm,tonemapping_pars_fragment:Ym,transmission_fragment:$m,transmission_pars_fragment:Km,uv_pars_fragment:Zm,uv_pars_vertex:jm,uv_vertex:Jm,worldpos_vertex:Qm,background_vert:tg,background_frag:eg,backgroundCube_vert:ng,backgroundCube_frag:ig,cube_vert:rg,cube_frag:sg,depth_vert:og,depth_frag:ag,distanceRGBA_vert:cg,distanceRGBA_frag:lg,equirect_vert:ug,equirect_frag:hg,linedashed_vert:fg,linedashed_frag:dg,meshbasic_vert:pg,meshbasic_frag:mg,meshlambert_vert:gg,meshlambert_frag:_g,meshmatcap_vert:vg,meshmatcap_frag:xg,meshnormal_vert:yg,meshnormal_frag:Mg,meshphong_vert:Sg,meshphong_frag:Eg,meshphysical_vert:bg,meshphysical_frag:wg,meshtoon_vert:Tg,meshtoon_frag:Ag,points_vert:Rg,points_frag:Cg,shadow_vert:Pg,shadow_frag:Lg,sprite_vert:Ig,sprite_frag:Dg},ot={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},gn={basic:{uniforms:De([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:De([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new qt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:De([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:De([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:De([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new qt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:De([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:De([ot.points,ot.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:De([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:De([ot.common,ot.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:De([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:De([ot.sprite,ot.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:De([ot.common,ot.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:De([ot.lights,ot.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};gn.physical={uniforms:De([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const bs={r:0,b:0,g:0},mi=new kn,Ug=new se;function Ng(n,t,e,i,r,s,o){const a=new qt(0);let c=s===!0?0:1,l,u,h=null,f=0,p=null;function v(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function _(E){let y=!1;const g=v(E);g===null?d(a,c):g&&g.isColor&&(d(g,1),y=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,y){const g=v(y);g&&(g.isCubeTexture||g.mapping===Ks)?(u===void 0&&(u=new le(new ne(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:gr(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),mi.copy(y.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(mi)),u.material.toneMapped=$t.getTransfer(g.colorSpace)!==te,(h!==g||f!==g.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=g,f=g.version,p=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new le(new Fi(2,2),new fn({name:"BackgroundMaterial",uniforms:gr(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=$t.getTransfer(g.colorSpace)!==te,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=g,f=g.version,p=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,y){E.getRGB(bs,Xu(n)),i.buffers.color.setClear(bs.r,bs.g,bs.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(a,c)},render:_,addToRenderList:m}}function Og(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(x,C,z,D,W){let B=!1;const I=h(D,z,C);s!==I&&(s=I,l(s.object)),B=p(x,D,z,W),B&&v(x,D,z,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,g(x,C,z,D),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,C,z){const D=z.wireframe===!0;let W=i[x.id];W===void 0&&(W={},i[x.id]=W);let B=W[C.id];B===void 0&&(B={},W[C.id]=B);let I=B[D];return I===void 0&&(I=f(c()),B[D]=I),I}function f(x){const C=[],z=[],D=[];for(let W=0;W<e;W++)C[W]=0,z[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:D,object:x,attributes:{},index:null}}function p(x,C,z,D){const W=s.attributes,B=C.attributes;let I=0;const X=z.getAttributes();for(const H in X)if(X[H].location>=0){const Q=W[H];let st=B[H];if(st===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),Q===void 0||Q.attribute!==st||st&&Q.data!==st.data)return!0;I++}return s.attributesNum!==I||s.index!==D}function v(x,C,z,D){const W={},B=C.attributes;let I=0;const X=z.getAttributes();for(const H in X)if(X[H].location>=0){let Q=B[H];Q===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor));const st={};st.attribute=Q,Q&&Q.data&&(st.data=Q.data),W[H]=st,I++}s.attributes=W,s.attributesNum=I,s.index=D}function _(){const x=s.newAttributes;for(let C=0,z=x.length;C<z;C++)x[C]=0}function m(x){d(x,0)}function d(x,C){const z=s.newAttributes,D=s.enabledAttributes,W=s.attributeDivisors;z[x]=1,D[x]===0&&(n.enableVertexAttribArray(x),D[x]=1),W[x]!==C&&(n.vertexAttribDivisor(x,C),W[x]=C)}function E(){const x=s.newAttributes,C=s.enabledAttributes;for(let z=0,D=C.length;z<D;z++)C[z]!==x[z]&&(n.disableVertexAttribArray(z),C[z]=0)}function y(x,C,z,D,W,B,I){I===!0?n.vertexAttribIPointer(x,C,z,W,B):n.vertexAttribPointer(x,C,z,D,W,B)}function g(x,C,z,D){_();const W=D.attributes,B=z.getAttributes(),I=C.defaultAttributeValues;for(const X in B){const H=B[X];if(H.location>=0){let K=W[X];if(K===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),K!==void 0){const Q=K.normalized,st=K.itemSize,St=t.get(K);if(St===void 0)continue;const Ht=St.buffer,Y=St.type,tt=St.bytesPerElement,ft=Y===n.INT||Y===n.UNSIGNED_INT||K.gpuType===sc;if(K.isInterleavedBufferAttribute){const rt=K.data,bt=rt.stride,wt=K.offset;if(rt.isInstancedInterleavedBuffer){for(let It=0;It<H.locationSize;It++)d(H.location+It,rt.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let It=0;It<H.locationSize;It++)m(H.location+It);n.bindBuffer(n.ARRAY_BUFFER,Ht);for(let It=0;It<H.locationSize;It++)y(H.location+It,st/H.locationSize,Y,Q,bt*tt,(wt+st/H.locationSize*It)*tt,ft)}else{if(K.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)d(H.location+rt,K.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let rt=0;rt<H.locationSize;rt++)m(H.location+rt);n.bindBuffer(n.ARRAY_BUFFER,Ht);for(let rt=0;rt<H.locationSize;rt++)y(H.location+rt,st/H.locationSize,Y,Q,st*tt,st/H.locationSize*rt*tt,ft)}}else if(I!==void 0){const Q=I[X];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(H.location,Q);break;case 3:n.vertexAttrib3fv(H.location,Q);break;case 4:n.vertexAttrib4fv(H.location,Q);break;default:n.vertexAttrib1fv(H.location,Q)}}}}E()}function R(){P();for(const x in i){const C=i[x];for(const z in C){const D=C[z];for(const W in D)u(D[W].object),delete D[W];delete C[z]}delete i[x]}}function w(x){if(i[x.id]===void 0)return;const C=i[x.id];for(const z in C){const D=C[z];for(const W in D)u(D[W].object),delete D[W];delete C[z]}delete i[x.id]}function A(x){for(const C in i){const z=i[C];if(z[x.id]===void 0)continue;const D=z[x.id];for(const W in D)u(D[W].object),delete D[W];delete z[x.id]}}function P(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Fg(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v];e.update(p,i,1)}function c(l,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<l.length;v++)o(l[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let v=0;for(let _=0;_<h;_++)v+=u[_]*f[_];e.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Bg(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==en&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Mr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Bn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Un&&!P)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:R,maxSamples:w}}function zg(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new _i,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||v===null||v.length===0||s&&!m)s?u(null):l();else{const E=s?0:i,y=E*4;let g=d.clippingState||null;c.value=g,g=u(v,f,y,p);for(let R=0;R!==y;++R)g[R]=e[R];d.clippingState=g,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,v){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,v!==!0||m===null){const d=p+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,g=p;y!==_;++y,g+=4)o.copy(h[y]).applyMatrix4(E,a),o.normal.toArray(m,g),m[g+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Hg(n){let t=new WeakMap;function e(o,a){return a===pa?o.mapping=fr:a===ma&&(o.mapping=dr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===pa||a===ma)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new jd(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class mc extends qu{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ir=4,Sl=[.125,.215,.35,.446,.526,.582],Si=20,Lo=new mc,El=new qt;let Io=null,Do=0,Uo=0,No=!1;const vi=(1+Math.sqrt(5))/2,Ji=1/vi,bl=[new L(-vi,Ji,0),new L(vi,Ji,0),new L(-Ji,0,vi),new L(Ji,0,vi),new L(0,vi,-Ji),new L(0,vi,Ji),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class wl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Io,Do,Uo),this._renderer.xr.enabled=No,t.scissorTest=!1,ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fr||t.mapping===dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Mr,format:en,colorSpace:Sr,depthBuffer:!1},r=Tl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tl(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kg(s)),this._blurMaterial=Vg(s,t,e)}return r}_compileMaterial(t){const e=new le(this._lodPlanes[0],t);this._renderer.compile(e,Lo)}_sceneToCubeUV(t,e,i,r){const a=new tn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(El),u.toneMapping=si,u.autoClear=!1;const p=new Qr({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),v=new le(new ne,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(El),_=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):E===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const y=this._cubeSize;ws(r,E*y,d>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===fr||t.mapping===dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Al());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;ws(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Lo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bl[(r-s-1)%bl.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new le(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Si-1),_=s/v,m=isFinite(s)?1+Math.floor(u*_):Si;m>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const d=[];let E=0;for(let A=0;A<Si;++A){const P=A/_,S=Math.exp(-P*P/2);d.push(S),A===0?E+=S:A<m&&(E+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-i;const g=this._sizeLods[r],R=3*g*(r>y-ir?r-y+ir:0),w=4*(this._cubeSize-g);ws(e,R,w,3*g,2*g),c.setRenderTarget(e),c.render(h,Lo)}}function kg(n){const t=[],e=[],i=[];let r=n;const s=n-ir+1+Sl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-ir?c=Sl[o-n+ir-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,_=3,m=2,d=1,E=new Float32Array(_*v*p),y=new Float32Array(m*v*p),g=new Float32Array(d*v*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,P=w>2?0:-1,S=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];E.set(S,_*v*w),y.set(f,m*v*w);const x=[w,w,w,w,w,w];g.set(x,d*v*w)}const R=new rn;R.setAttribute("position",new hn(E,_)),R.setAttribute("uv",new hn(y,m)),R.setAttribute("faceIndex",new hn(g,d)),t.push(R),r>ir&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Tl(n,t,e){const i=new zn(n,t,e);return i.texture.mapping=Ks,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Vg(n,t,e){const i=new Float32Array(Si),r=new L(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Al(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Rl(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===pa||c===ma,u=c===fr||c===dr;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new wl(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new wl(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Wg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Br("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Xg(n,t,e,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const _=f.morphAttributes[v];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const v in f)t.update(f[v],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const _=p[v];for(let m=0,d=_.length;m<d;m++)t.update(_[m],n.ARRAY_BUFFER)}}function l(h){const f=[],p=h.index,v=h.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let y=0,g=E.length;y<g;y+=3){const R=E[y+0],w=E[y+1],A=E[y+2];f.push(R,w,w,A,A,R)}}else if(v!==void 0){const E=v.array;_=v.version;for(let y=0,g=E.length/3-1;y<g;y+=3){const R=y+0,w=y+1,A=y+2;f.push(R,w,w,A,A,R)}}else return;const m=new(Bu(f)?Wu:Gu)(f,1);m.version=_;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function qg(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*o),e.update(p,i,1)}function l(f,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,f*o,v),e.update(p,i,v))}function u(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];e.update(m,i,1)}function h(f,p,v,_){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,v);let d=0;for(let E=0;E<v;E++)d+=p[E]*_[E];e.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Yg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function $g(n,t,e){const i=new WeakMap,r=new de;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),v===!0&&(y=2),_===!0&&(y=3);let g=a.attributes.position.count*y,R=1;g>t.maxTextureSize&&(R=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);const w=new Float32Array(g*R*4*h),A=new Hu(w,g,R,h);A.type=Un,A.needsUpdate=!0;const P=y*4;for(let x=0;x<h;x++){const C=m[x],z=d[x],D=E[x],W=g*R*4*x;for(let B=0;B<C.count;B++){const I=B*P;p===!0&&(r.fromBufferAttribute(C,B),w[W+I+0]=r.x,w[W+I+1]=r.y,w[W+I+2]=r.z,w[W+I+3]=0),v===!0&&(r.fromBufferAttribute(z,B),w[W+I+4]=r.x,w[W+I+5]=r.y,w[W+I+6]=r.z,w[W+I+7]=0),_===!0&&(r.fromBufferAttribute(D,B),w[W+I+8]=r.x,w[W+I+9]=r.y,w[W+I+10]=r.z,w[W+I+11]=D.itemSize===4?r.w:1)}}f={count:h,texture:A,size:new Mt(g,R)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const v=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Kg(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class _c extends Pe{constructor(t,e,i,r,s,o,a,c,l,u=ar){if(u!==ar&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ar&&(i=Ii),i===void 0&&u===mr&&(i=pr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ve,this.minFilter=c!==void 0?c:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ku=new Pe,Cl=new _c(1,1),Zu=new Hu,ju=new Ud,Ju=new Yu,Pl=[],Ll=[],Il=new Float32Array(16),Dl=new Float32Array(9),Ul=new Float32Array(4);function Tr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Pl[r];if(s===void 0&&(s=new Float32Array(r),Pl[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Me(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function js(n,t){let e=Ll[t];e===void 0&&(e=new Int32Array(t),Ll[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Zg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function jg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2fv(this.addr,t),Me(e,t)}}function Jg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;n.uniform3fv(this.addr,t),Me(e,t)}}function Qg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4fv(this.addr,t),Me(e,t)}}function t0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,i))return;Ul.set(i),n.uniformMatrix2fv(this.addr,!1,Ul),Me(e,i)}}function e0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,i))return;Dl.set(i),n.uniformMatrix3fv(this.addr,!1,Dl),Me(e,i)}}function n0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,i))return;Il.set(i),n.uniformMatrix4fv(this.addr,!1,Il),Me(e,i)}}function i0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function r0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2iv(this.addr,t),Me(e,t)}}function s0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3iv(this.addr,t),Me(e,t)}}function o0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4iv(this.addr,t),Me(e,t)}}function a0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function c0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2uiv(this.addr,t),Me(e,t)}}function l0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3uiv(this.addr,t),Me(e,t)}}function u0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4uiv(this.addr,t),Me(e,t)}}function h0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Cl.compareFunction=Fu,s=Cl):s=Ku,e.setTexture2D(t||s,r)}function f0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||ju,r)}function d0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Ju,r)}function p0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Zu,r)}function m0(n){switch(n){case 5126:return Zg;case 35664:return jg;case 35665:return Jg;case 35666:return Qg;case 35674:return t0;case 35675:return e0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return r0;case 35668:case 35672:return s0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return c0;case 36295:return l0;case 36296:return u0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return p0}}function g0(n,t){n.uniform1fv(this.addr,t)}function _0(n,t){const e=Tr(t,this.size,2);n.uniform2fv(this.addr,e)}function v0(n,t){const e=Tr(t,this.size,3);n.uniform3fv(this.addr,e)}function x0(n,t){const e=Tr(t,this.size,4);n.uniform4fv(this.addr,e)}function y0(n,t){const e=Tr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function M0(n,t){const e=Tr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function S0(n,t){const e=Tr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function E0(n,t){n.uniform1iv(this.addr,t)}function b0(n,t){n.uniform2iv(this.addr,t)}function w0(n,t){n.uniform3iv(this.addr,t)}function T0(n,t){n.uniform4iv(this.addr,t)}function A0(n,t){n.uniform1uiv(this.addr,t)}function R0(n,t){n.uniform2uiv(this.addr,t)}function C0(n,t){n.uniform3uiv(this.addr,t)}function P0(n,t){n.uniform4uiv(this.addr,t)}function L0(n,t,e){const i=this.cache,r=t.length,s=js(e,r);ye(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Ku,s[o])}function I0(n,t,e){const i=this.cache,r=t.length,s=js(e,r);ye(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||ju,s[o])}function D0(n,t,e){const i=this.cache,r=t.length,s=js(e,r);ye(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Ju,s[o])}function U0(n,t,e){const i=this.cache,r=t.length,s=js(e,r);ye(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Zu,s[o])}function N0(n){switch(n){case 5126:return g0;case 35664:return _0;case 35665:return v0;case 35666:return x0;case 35674:return y0;case 35675:return M0;case 35676:return S0;case 5124:case 35670:return E0;case 35667:case 35671:return b0;case 35668:case 35672:return w0;case 35669:case 35673:return T0;case 5125:return A0;case 36294:return R0;case 36295:return C0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return U0}}class O0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=m0(e.type)}}class F0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=N0(e.type)}}class B0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function Nl(n,t){n.seq.push(t),n.map[t.id]=t}function z0(n,t,e){const i=n.name,r=i.length;for(Oo.lastIndex=0;;){const s=Oo.exec(i),o=Oo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Nl(e,l===void 0?new O0(a,n,t):new F0(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new B0(a),Nl(e,h)),e=h}}}class Bs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);z0(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Ol(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const H0=37297;let k0=0;function V0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Fl=new Ot;function G0(n){$t._getMatrix(Fl,$t.workingColorSpace,n);const t=`mat3( ${Fl.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(n)){case Zs:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Bl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+V0(n.getShaderSource(t),o)}else return r}function W0(n,t){const e=G0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function X0(n,t){let e;switch(t){case qf:e="Linear";break;case Yf:e="Reinhard";break;case $f:e="Cineon";break;case Kf:e="ACESFilmic";break;case jf:e="AgX";break;case Jf:e="Neutral";break;case Zf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ts=new L;function q0(){$t.getLuminanceCoefficients(Ts);const n=Ts.x.toFixed(4),t=Ts.y.toFixed(4),e=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function $0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function K0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function zr(n){return n!==""}function zl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(n){return n.replace(Z0,J0)}const j0=new Map;function J0(n,t){let e=Bt[t];if(e===void 0){const i=j0.get(t);if(i!==void 0)e=Bt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Wa(e)}const Q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(n){return n.replace(Q0,t_)}function t_(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vl(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function e_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===wf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function n_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case dr:t="ENVMAP_TYPE_CUBE";break;case Ks:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case dr:t="ENVMAP_MODE_REFRACTION";break}return t}function r_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wu:t="ENVMAP_BLENDING_MULTIPLY";break;case Wf:t="ENVMAP_BLENDING_MIX";break;case Xf:t="ENVMAP_BLENDING_ADD";break}return t}function s_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function o_(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=e_(e),l=n_(e),u=i_(e),h=r_(e),f=s_(e),p=Y0(e),v=$0(s),_=r.createProgram();let m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(zr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(zr).join(`
`),d.length>0&&(d+=`
`)):(m=[Vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),d=[Vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?Bt.tonemapping_pars_fragment:"",e.toneMapping!==si?X0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,W0("linearToOutputTexel",e.outputColorSpace),q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zr).join(`
`)),o=Wa(o),o=zl(o,e),o=Hl(o,e),a=Wa(a),a=zl(a,e),a=Hl(a,e),o=kl(o),a=kl(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=E+m+o,g=E+d+a,R=Ol(r,r.VERTEX_SHADER,y),w=Ol(r,r.FRAGMENT_SHADER,g);r.attachShader(_,R),r.attachShader(_,w),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(C){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),D=r.getShaderInfoLog(R).trim(),W=r.getShaderInfoLog(w).trim();let B=!0,I=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,w);else{const X=Bl(r,R,"vertex"),H=Bl(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+X+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(D===""||W==="")&&(I=!1);I&&(C.diagnostics={runnable:B,programLog:z,vertexShader:{log:D,prefix:m},fragmentShader:{log:W,prefix:d}})}r.deleteShader(R),r.deleteShader(w),P=new Bs(r,_),S=K0(r,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,H0)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let a_=0;class c_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new l_(t),e.set(t,i)),i}}class l_{constructor(t){this.id=a_++,this.code=t,this.usedTimes=0}}function u_(n,t,e,i,r,s,o){const a=new ku,c=new c_,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,x,C,z,D){const W=z.fog,B=D.geometry,I=S.isMeshStandardMaterial?z.environment:null,X=(S.isMeshStandardMaterial?e:t).get(S.envMap||I),H=X&&X.mapping===Ks?X.image.height:null,K=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,st=Q!==void 0?Q.length:0;let St=0;B.morphAttributes.position!==void 0&&(St=1),B.morphAttributes.normal!==void 0&&(St=2),B.morphAttributes.color!==void 0&&(St=3);let Ht,Y,tt,ft;if(K){const Qt=gn[K];Ht=Qt.vertexShader,Y=Qt.fragmentShader}else Ht=S.vertexShader,Y=S.fragmentShader,c.update(S),tt=c.getVertexShaderID(S),ft=c.getFragmentShaderID(S);const rt=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),wt=D.isInstancedMesh===!0,It=D.isBatchedMesh===!0,ee=!!S.map,zt=!!S.matcap,Jt=!!X,N=!!S.aoMap,ve=!!S.lightMap,kt=!!S.bumpMap,Wt=!!S.normalMap,At=!!S.displacementMap,oe=!!S.emissiveMap,Tt=!!S.metalnessMap,T=!!S.roughnessMap,M=S.anisotropy>0,k=S.clearcoat>0,j=S.dispersion>0,et=S.iridescence>0,Z=S.sheen>0,xt=S.transmission>0,ct=M&&!!S.anisotropyMap,dt=k&&!!S.clearcoatMap,Yt=k&&!!S.clearcoatNormalMap,nt=k&&!!S.clearcoatRoughnessMap,pt=et&&!!S.iridescenceMap,Rt=et&&!!S.iridescenceThicknessMap,Pt=Z&&!!S.sheenColorMap,mt=Z&&!!S.sheenRoughnessMap,Xt=!!S.specularMap,Ft=!!S.specularColorMap,ie=!!S.specularIntensityMap,U=xt&&!!S.transmissionMap,at=xt&&!!S.thicknessMap,q=!!S.gradientMap,J=!!S.alphaMap,ht=S.alphaTest>0,lt=!!S.alphaHash,Ut=!!S.extensions;let he=si;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(he=n.toneMapping);const Te={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:Ht,fragmentShader:Y,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:ft,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:It,batchingColor:It&&D._colorsTexture!==null,instancing:wt,instancingColor:wt&&D.instanceColor!==null,instancingMorph:wt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Sr,alphaToCoverage:!!S.alphaToCoverage,map:ee,matcap:zt,envMap:Jt,envMapMode:Jt&&X.mapping,envMapCubeUVHeight:H,aoMap:N,lightMap:ve,bumpMap:kt,normalMap:Wt,displacementMap:f&&At,emissiveMap:oe,normalMapObjectSpace:Wt&&S.normalMapType===nd,normalMapTangentSpace:Wt&&S.normalMapType===hc,metalnessMap:Tt,roughnessMap:T,anisotropy:M,anisotropyMap:ct,clearcoat:k,clearcoatMap:dt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:nt,dispersion:j,iridescence:et,iridescenceMap:pt,iridescenceThicknessMap:Rt,sheen:Z,sheenColorMap:Pt,sheenRoughnessMap:mt,specularMap:Xt,specularColorMap:Ft,specularIntensityMap:ie,transmission:xt,transmissionMap:U,thicknessMap:at,gradientMap:q,opaque:S.transparent===!1&&S.blending===or&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:ht,alphaHash:lt,combine:S.combine,mapUv:ee&&_(S.map.channel),aoMapUv:N&&_(S.aoMap.channel),lightMapUv:ve&&_(S.lightMap.channel),bumpMapUv:kt&&_(S.bumpMap.channel),normalMapUv:Wt&&_(S.normalMap.channel),displacementMapUv:At&&_(S.displacementMap.channel),emissiveMapUv:oe&&_(S.emissiveMap.channel),metalnessMapUv:Tt&&_(S.metalnessMap.channel),roughnessMapUv:T&&_(S.roughnessMap.channel),anisotropyMapUv:ct&&_(S.anisotropyMap.channel),clearcoatMapUv:dt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(S.sheenRoughnessMap.channel),specularMapUv:Xt&&_(S.specularMap.channel),specularColorMapUv:Ft&&_(S.specularColorMap.channel),specularIntensityMapUv:ie&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:at&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Wt||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(ee||J),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:bt,skinning:D.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:St,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:he,decodeVideoTexture:ee&&S.map.isVideoTexture===!0&&$t.getTransfer(S.map.colorSpace)===te,decodeVideoTextureEmissive:oe&&S.emissiveMap.isVideoTexture===!0&&$t.getTransfer(S.emissiveMap.colorSpace)===te,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_n,flipSided:S.side===Ne,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&S.extensions.multiDraw===!0||It)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function d(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)x.push(C),x.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(E(x,S),y(x,S),x.push(n.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function E(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function y(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function g(S){const x=v[S.type];let C;if(x){const z=gn[x];C=Yd.clone(z.uniforms)}else C=S.uniforms;return C}function R(S,x){let C;for(let z=0,D=u.length;z<D;z++){const W=u[z];if(W.cacheKey===x){C=W,++C.usedTimes;break}}return C===void 0&&(C=new o_(n,x,S,s),u.push(C)),C}function w(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function A(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:g,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:P}}function h_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function f_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Gl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Wl(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,f,p,v,_,m){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:v,renderOrder:h.renderOrder,z:_,group:m},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function a(h,f,p,v,_,m){const d=o(h,f,p,v,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):e.push(d)}function c(h,f,p,v,_,m){const d=o(h,f,p,v,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function l(h,f){e.length>1&&e.sort(h||f_),i.length>1&&i.sort(f||Gl),r.length>1&&r.sort(f||Gl)}function u(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function d_(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Wl,n.set(i,[o])):r>=s.length?(o=new Wl,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function p_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new qt};break;case"SpotLight":e={position:new L,direction:new L,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function m_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let g_=0;function __(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function v_(n){const t=new p_,e=m_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const r=new L,s=new se,o=new se;function a(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,v=0,_=0,m=0,d=0,E=0,y=0,g=0,R=0,w=0,A=0;l.sort(__);for(let S=0,x=l.length;S<x;S++){const C=l[S],z=C.color,D=C.intensity,W=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=z.r*D,h+=z.g*D,f+=z.b*D;else if(C.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(C.sh.coefficients[I],D);A++}else if(C.isDirectionalLight){const I=t.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,H=e.get(C);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=C.shadow.matrix,E++}i.directional[p]=I,p++}else if(C.isSpotLight){const I=t.get(C);I.position.setFromMatrixPosition(C.matrixWorld),I.color.copy(z).multiplyScalar(D),I.distance=W,I.coneCos=Math.cos(C.angle),I.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),I.decay=C.decay,i.spot[_]=I;const X=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,X.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[_]=X.matrix,C.castShadow){const H=e.get(C);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=B,g++}_++}else if(C.isRectAreaLight){const I=t.get(C);I.color.copy(z).multiplyScalar(D),I.halfWidth.set(C.width*.5,0,0),I.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=I,m++}else if(C.isPointLight){const I=t.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),I.distance=C.distance,I.decay=C.decay,C.castShadow){const X=C.shadow,H=e.get(C);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,i.pointShadow[v]=H,i.pointShadowMap[v]=B,i.pointShadowMatrix[v]=C.shadow.matrix,y++}i.point[v]=I,v++}else if(C.isHemisphereLight){const I=t.get(C);I.skyColor.copy(C.color).multiplyScalar(D),I.groundColor.copy(C.groundColor).multiplyScalar(D),i.hemi[d]=I,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==p||P.pointLength!==v||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==E||P.numPointShadows!==y||P.numSpotShadows!==g||P.numSpotMaps!==R||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=g+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,P.directionalLength=p,P.pointLength=v,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=E,P.numPointShadows=y,P.numSpotShadows=g,P.numSpotMaps=R,P.numLightProbes=A,i.version=g_++)}function c(l,u){let h=0,f=0,p=0,v=0,_=0;const m=u.matrixWorldInverse;for(let d=0,E=l.length;d<E;d++){const y=l[d];if(y.isDirectionalLight){const g=i.directional[h];g.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),h++}else if(y.isSpotLight){const g=i.spot[p];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const g=i.rectArea[v];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),g.halfWidth.set(y.width*.5,0,0),g.halfHeight.set(0,y.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const g=i.point[f];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const g=i.hemi[_];g.direction.setFromMatrixPosition(y.matrixWorld),g.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function Xl(n){const t=new v_(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function x_(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Xl(n),t.set(r,[a])):s>=o.length?(a=new Xl(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class y_ extends wr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class M_ extends wr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const S_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function b_(n,t,e){let i=new pc;const r=new Mt,s=new Mt,o=new de,a=new y_({depthPacking:ed}),c=new M_,l={},u=e.maxTextureSize,h={[Fn]:Ne,[Ne]:Fn,[_n]:_n},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:S_,fragmentShader:E_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new rn;v.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new le(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bu;let d=this.type;this.render=function(w,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),x=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ri),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const D=d!==Ln&&this.type===Ln,W=d===Ln&&this.type!==Ln;for(let B=0,I=w.length;B<I;B++){const X=w[B],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const K=H.getFrameExtents();if(r.multiply(K),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,H.mapSize.y=s.y)),H.map===null||D===!0||W===!0){const st=this.type!==Ln?{minFilter:Ve,magFilter:Ve}:{};H.map!==null&&H.map.dispose(),H.map=new zn(r.x,r.y,st),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const Q=H.getViewportCount();for(let st=0;st<Q;st++){const St=H.getViewport(st);o.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),z.viewport(o),H.updateMatrices(X,st),i=H.getFrustum(),g(A,P,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===Ln&&E(H,P),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(S,x,C)};function E(w,A){const P=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zn(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,P,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,P,p,_,null)}function y(w,A,P,S){let x=null;const C=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)x=C;else if(x=P.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=x.uuid,D=A.uuid;let W=l[z];W===void 0&&(W={},l[z]=W);let B=W[D];B===void 0&&(B=x.clone(),W[D]=B,A.addEventListener("dispose",R)),x=B}if(x.visible=A.visible,x.wireframe=A.wireframe,S===Ln?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:h[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=n.properties.get(x);z.light=P}return x}function g(w,A,P,S,x){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Ln)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const D=t.update(w),W=w.material;if(Array.isArray(W)){const B=D.groups;for(let I=0,X=B.length;I<X;I++){const H=B[I],K=W[H.materialIndex];if(K&&K.visible){const Q=y(w,K,S,x);w.onBeforeShadow(n,w,A,P,D,Q,H),n.renderBufferDirect(P,null,D,Q,w,H),w.onAfterShadow(n,w,A,P,D,Q,H)}}}else if(W.visible){const B=y(w,W,S,x);w.onBeforeShadow(n,w,A,P,D,B,null),n.renderBufferDirect(P,null,D,B,w,null),w.onAfterShadow(n,w,A,P,D,B,null)}}const z=w.children;for(let D=0,W=z.length;D<W;D++)g(z[D],A,P,S,x)}function R(w){w.target.removeEventListener("dispose",R);for(const P in l){const S=l[P],x=w.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const w_={[aa]:ca,[la]:fa,[ua]:da,[hr]:ha,[ca]:aa,[fa]:la,[da]:ua,[ha]:hr};function T_(n,t){function e(){let U=!1;const at=new de;let q=null;const J=new de(0,0,0,0);return{setMask:function(ht){q!==ht&&!U&&(n.colorMask(ht,ht,ht,ht),q=ht)},setLocked:function(ht){U=ht},setClear:function(ht,lt,Ut,he,Te){Te===!0&&(ht*=he,lt*=he,Ut*=he),at.set(ht,lt,Ut,he),J.equals(at)===!1&&(n.clearColor(ht,lt,Ut,he),J.copy(at))},reset:function(){U=!1,q=null,J.set(-1,0,0,0)}}}function i(){let U=!1,at=!1,q=null,J=null,ht=null;return{setReversed:function(lt){if(at!==lt){const Ut=t.get("EXT_clip_control");at?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const he=ht;ht=null,this.setClear(he)}at=lt},getReversed:function(){return at},setTest:function(lt){lt?rt(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(lt){q!==lt&&!U&&(n.depthMask(lt),q=lt)},setFunc:function(lt){if(at&&(lt=w_[lt]),J!==lt){switch(lt){case aa:n.depthFunc(n.NEVER);break;case ca:n.depthFunc(n.ALWAYS);break;case la:n.depthFunc(n.LESS);break;case hr:n.depthFunc(n.LEQUAL);break;case ua:n.depthFunc(n.EQUAL);break;case ha:n.depthFunc(n.GEQUAL);break;case fa:n.depthFunc(n.GREATER);break;case da:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=lt}},setLocked:function(lt){U=lt},setClear:function(lt){ht!==lt&&(at&&(lt=1-lt),n.clearDepth(lt),ht=lt)},reset:function(){U=!1,q=null,J=null,ht=null,at=!1}}}function r(){let U=!1,at=null,q=null,J=null,ht=null,lt=null,Ut=null,he=null,Te=null;return{setTest:function(Qt){U||(Qt?rt(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(Qt){at!==Qt&&!U&&(n.stencilMask(Qt),at=Qt)},setFunc:function(Qt,sn,Sn){(q!==Qt||J!==sn||ht!==Sn)&&(n.stencilFunc(Qt,sn,Sn),q=Qt,J=sn,ht=Sn)},setOp:function(Qt,sn,Sn){(lt!==Qt||Ut!==sn||he!==Sn)&&(n.stencilOp(Qt,sn,Sn),lt=Qt,Ut=sn,he=Sn)},setLocked:function(Qt){U=Qt},setClear:function(Qt){Te!==Qt&&(n.clearStencil(Qt),Te=Qt)},reset:function(){U=!1,at=null,q=null,J=null,ht=null,lt=null,Ut=null,he=null,Te=null}}}const s=new e,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],v=null,_=!1,m=null,d=null,E=null,y=null,g=null,R=null,w=null,A=new qt(0,0,0),P=0,S=!1,x=null,C=null,z=null,D=null,W=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,X=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),I=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),I=X>=2);let K=null,Q={};const st=n.getParameter(n.SCISSOR_BOX),St=n.getParameter(n.VIEWPORT),Ht=new de().fromArray(st),Y=new de().fromArray(St);function tt(U,at,q,J){const ht=new Uint8Array(4),lt=n.createTexture();n.bindTexture(U,lt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<q;Ut++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(at,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(at+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return lt}const ft={};ft[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),ft[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ft[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(n.DEPTH_TEST),o.setFunc(hr),kt(!1),Wt($c),rt(n.CULL_FACE),N(ri);function rt(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function bt(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function wt(U,at){return h[U]!==at?(n.bindFramebuffer(U,at),h[U]=at,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=at),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=at),!0):!1}function It(U,at){let q=p,J=!1;if(U){q=f.get(at),q===void 0&&(q=[],f.set(at,q));const ht=U.textures;if(q.length!==ht.length||q[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Ut=ht.length;lt<Ut;lt++)q[lt]=n.COLOR_ATTACHMENT0+lt;q.length=ht.length,J=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,J=!0);J&&n.drawBuffers(q)}function ee(U){return v!==U?(n.useProgram(U),v=U,!0):!1}const zt={[Mi]:n.FUNC_ADD,[Af]:n.FUNC_SUBTRACT,[Rf]:n.FUNC_REVERSE_SUBTRACT};zt[Cf]=n.MIN,zt[Pf]=n.MAX;const Jt={[Lf]:n.ZERO,[If]:n.ONE,[Df]:n.SRC_COLOR,[sa]:n.SRC_ALPHA,[zf]:n.SRC_ALPHA_SATURATE,[Ff]:n.DST_COLOR,[Nf]:n.DST_ALPHA,[Uf]:n.ONE_MINUS_SRC_COLOR,[oa]:n.ONE_MINUS_SRC_ALPHA,[Bf]:n.ONE_MINUS_DST_COLOR,[Of]:n.ONE_MINUS_DST_ALPHA,[Hf]:n.CONSTANT_COLOR,[kf]:n.ONE_MINUS_CONSTANT_COLOR,[Vf]:n.CONSTANT_ALPHA,[Gf]:n.ONE_MINUS_CONSTANT_ALPHA};function N(U,at,q,J,ht,lt,Ut,he,Te,Qt){if(U===ri){_===!0&&(bt(n.BLEND),_=!1);return}if(_===!1&&(rt(n.BLEND),_=!0),U!==Tf){if(U!==m||Qt!==S){if((d!==Mi||g!==Mi)&&(n.blendEquation(n.FUNC_ADD),d=Mi,g=Mi),Qt)switch(U){case or:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.ONE,n.ONE);break;case Zc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case or:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,y=null,R=null,w=null,A.set(0,0,0),P=0,m=U,S=Qt}return}ht=ht||at,lt=lt||q,Ut=Ut||J,(at!==d||ht!==g)&&(n.blendEquationSeparate(zt[at],zt[ht]),d=at,g=ht),(q!==E||J!==y||lt!==R||Ut!==w)&&(n.blendFuncSeparate(Jt[q],Jt[J],Jt[lt],Jt[Ut]),E=q,y=J,R=lt,w=Ut),(he.equals(A)===!1||Te!==P)&&(n.blendColor(he.r,he.g,he.b,Te),A.copy(he),P=Te),m=U,S=!1}function ve(U,at){U.side===_n?bt(n.CULL_FACE):rt(n.CULL_FACE);let q=U.side===Ne;at&&(q=!q),kt(q),U.blending===or&&U.transparent===!1?N(ri):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),oe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function kt(U){x!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),x=U)}function Wt(U){U!==Ef?(rt(n.CULL_FACE),U!==C&&(U===$c?n.cullFace(n.BACK):U===bf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),C=U}function At(U){U!==z&&(I&&n.lineWidth(U),z=U)}function oe(U,at,q){U?(rt(n.POLYGON_OFFSET_FILL),(D!==at||W!==q)&&(n.polygonOffset(at,q),D=at,W=q)):bt(n.POLYGON_OFFSET_FILL)}function Tt(U){U?rt(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function T(U){U===void 0&&(U=n.TEXTURE0+B-1),K!==U&&(n.activeTexture(U),K=U)}function M(U,at,q){q===void 0&&(K===null?q=n.TEXTURE0+B-1:q=K);let J=Q[q];J===void 0&&(J={type:void 0,texture:void 0},Q[q]=J),(J.type!==U||J.texture!==at)&&(K!==q&&(n.activeTexture(q),K=q),n.bindTexture(U,at||ft[U]),J.type=U,J.texture=at)}function k(){const U=Q[K];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(U){Ht.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ht.copy(U))}function mt(U){Y.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function Xt(U,at){let q=l.get(at);q===void 0&&(q=new WeakMap,l.set(at,q));let J=q.get(U);J===void 0&&(J=n.getUniformBlockIndex(at,U.name),q.set(U,J))}function Ft(U,at){const J=l.get(at).get(U);c.get(at)!==J&&(n.uniformBlockBinding(at,J,U.__bindingPointIndex),c.set(at,J))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},K=null,Q={},h={},f=new WeakMap,p=[],v=null,_=!1,m=null,d=null,E=null,y=null,g=null,R=null,w=null,A=new qt(0,0,0),P=0,S=!1,x=null,C=null,z=null,D=null,W=null,Ht.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:rt,disable:bt,bindFramebuffer:wt,drawBuffers:It,useProgram:ee,setBlending:N,setMaterial:ve,setFlipSided:kt,setCullFace:Wt,setLineWidth:At,setPolygonOffset:oe,setScissorTest:Tt,activeTexture:T,bindTexture:M,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:et,texImage2D:pt,texImage3D:Rt,updateUBOMapping:Xt,uniformBlockBinding:Ft,texStorage2D:Yt,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:xt,compressedTexSubImage2D:ct,compressedTexSubImage3D:dt,scissor:Pt,viewport:mt,reset:ie}}function ql(n,t,e,i){const r=A_(i);switch(e){case Pu:return n*t;case Iu:return n*t;case Du:return n*t*2;case Uu:return n*t/r.components*r.byteLength;case cc:return n*t/r.components*r.byteLength;case Nu:return n*t*2/r.components*r.byteLength;case lc:return n*t*2/r.components*r.byteLength;case Lu:return n*t*3/r.components*r.byteLength;case en:return n*t*4/r.components*r.byteLength;case uc:return n*t*4/r.components*r.byteLength;case Ds:case Us:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ns:case Os:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xa:case Ma:return Math.max(n,16)*Math.max(t,8)/4;case va:case ya:return Math.max(n,8)*Math.max(t,8)/2;case Sa:case Ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Da:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Na:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Fs:case za:case Ha:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ou:case ka:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Va:case Ga:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function A_(n){switch(n){case Bn:case Au:return{byteLength:1,components:1};case Xr:case Ru:case Mr:return{byteLength:2,components:1};case oc:case ac:return{byteLength:2,components:4};case Ii:case sc:case Un:return{byteLength:4,components:1};case Cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function R_(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Mt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,M){return p?new OffscreenCanvas(T,M):Vs("canvas")}function _(T,M,k){let j=1;const et=Tt(T);if((et.width>k||et.height>k)&&(j=k/Math.max(et.width,et.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(j*et.width),xt=Math.floor(j*et.height);h===void 0&&(h=v(Z,xt));const ct=M?v(Z,xt):h;return ct.width=Z,ct.height=xt,ct.getContext("2d").drawImage(T,0,0,Z,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+xt+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,M,k,j,et=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=M;if(M===n.RED&&(k===n.FLOAT&&(Z=n.R32F),k===n.HALF_FLOAT&&(Z=n.R16F),k===n.UNSIGNED_BYTE&&(Z=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.R8UI),k===n.UNSIGNED_SHORT&&(Z=n.R16UI),k===n.UNSIGNED_INT&&(Z=n.R32UI),k===n.BYTE&&(Z=n.R8I),k===n.SHORT&&(Z=n.R16I),k===n.INT&&(Z=n.R32I)),M===n.RG&&(k===n.FLOAT&&(Z=n.RG32F),k===n.HALF_FLOAT&&(Z=n.RG16F),k===n.UNSIGNED_BYTE&&(Z=n.RG8)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RG8UI),k===n.UNSIGNED_SHORT&&(Z=n.RG16UI),k===n.UNSIGNED_INT&&(Z=n.RG32UI),k===n.BYTE&&(Z=n.RG8I),k===n.SHORT&&(Z=n.RG16I),k===n.INT&&(Z=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),k===n.UNSIGNED_INT&&(Z=n.RGB32UI),k===n.BYTE&&(Z=n.RGB8I),k===n.SHORT&&(Z=n.RGB16I),k===n.INT&&(Z=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),k===n.UNSIGNED_INT&&(Z=n.RGBA32UI),k===n.BYTE&&(Z=n.RGBA8I),k===n.SHORT&&(Z=n.RGBA16I),k===n.INT&&(Z=n.RGBA32I)),M===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),M===n.RGBA){const xt=et?Zs:$t.getTransfer(j);k===n.FLOAT&&(Z=n.RGBA32F),k===n.HALF_FLOAT&&(Z=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Z=xt===te?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function g(T,M){let k;return T?M===null||M===Ii||M===pr?k=n.DEPTH24_STENCIL8:M===Un?k=n.DEPTH32F_STENCIL8:M===Xr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ii||M===pr?k=n.DEPTH_COMPONENT24:M===Un?k=n.DEPTH_COMPONENT32F:M===Xr&&(k=n.DEPTH_COMPONENT16),k}function R(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ve&&T.minFilter!==vn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function w(T){const M=T.target;M.removeEventListener("dispose",w),P(M),M.isVideoTexture&&u.delete(M)}function A(T){const M=T.target;M.removeEventListener("dispose",A),x(M)}function P(T){const M=i.get(T);if(M.__webglInit===void 0)return;const k=T.source,j=f.get(k);if(j){const et=j[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(T),Object.keys(j).length===0&&f.delete(k)}i.remove(T)}function S(T){const M=i.get(T);n.deleteTexture(M.__webglTexture);const k=T.source,j=f.get(k);delete j[M.__cacheKey],o.memory.textures--}function x(T){const M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let et=0;et<M.__webglFramebuffer[j].length;et++)n.deleteFramebuffer(M.__webglFramebuffer[j][et]);else n.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)n.deleteFramebuffer(M.__webglFramebuffer[j]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=T.textures;for(let j=0,et=k.length;j<et;j++){const Z=i.get(k[j]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(k[j])}i.remove(T)}let C=0;function z(){C=0}function D(){const T=C;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),C+=1,T}function W(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function B(T,M){const k=i.get(T);if(T.isVideoTexture&&At(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,T,M);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function I(T,M){const k=i.get(T);if(T.version>0&&k.__version!==T.version){Y(k,T,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function X(T,M){const k=i.get(T);if(T.version>0&&k.__version!==T.version){Y(k,T,M);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function H(T,M){const k=i.get(T);if(T.version>0&&k.__version!==T.version){tt(k,T,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}const K={[ga]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[_a]:n.MIRRORED_REPEAT},Q={[Ve]:n.NEAREST,[Qf]:n.NEAREST_MIPMAP_NEAREST,[os]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[lo]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},st={[id]:n.NEVER,[ld]:n.ALWAYS,[rd]:n.LESS,[Fu]:n.LEQUAL,[sd]:n.EQUAL,[cd]:n.GEQUAL,[od]:n.GREATER,[ad]:n.NOTEQUAL};function St(T,M){if(M.type===Un&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===vn||M.magFilter===lo||M.magFilter===os||M.magFilter===Ti||M.minFilter===vn||M.minFilter===lo||M.minFilter===os||M.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,K[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,K[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,K[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Q[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Q[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,st[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ve||M.minFilter!==os&&M.minFilter!==Ti||M.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ht(T,M){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",w));const j=M.source;let et=f.get(j);et===void 0&&(et={},f.set(j,et));const Z=W(M);if(Z!==T.__cacheKey){et[Z]===void 0&&(et[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),et[Z].usedTimes++;const xt=et[T.__cacheKey];xt!==void 0&&(et[T.__cacheKey].usedTimes--,xt.usedTimes===0&&S(M)),T.__cacheKey=Z,T.__webglTexture=et[Z].texture}return k}function Y(T,M,k){let j=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=n.TEXTURE_3D);const et=Ht(T,M),Z=M.source;e.bindTexture(j,T.__webglTexture,n.TEXTURE0+k);const xt=i.get(Z);if(Z.version!==xt.__version||et===!0){e.activeTexture(n.TEXTURE0+k);const ct=$t.getPrimaries($t.workingColorSpace),dt=M.colorSpace===ii?null:$t.getPrimaries(M.colorSpace),Yt=M.colorSpace===ii||ct===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let nt=_(M.image,!1,r.maxTextureSize);nt=oe(M,nt);const pt=s.convert(M.format,M.colorSpace),Rt=s.convert(M.type);let Pt=y(M.internalFormat,pt,Rt,M.colorSpace,M.isVideoTexture);St(j,M);let mt;const Xt=M.mipmaps,Ft=M.isVideoTexture!==!0,ie=xt.__version===void 0||et===!0,U=Z.dataReady,at=R(M,nt);if(M.isDepthTexture)Pt=g(M.format===mr,M.type),ie&&(Ft?e.texStorage2D(n.TEXTURE_2D,1,Pt,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,Pt,nt.width,nt.height,0,pt,Rt,null));else if(M.isDataTexture)if(Xt.length>0){Ft&&ie&&e.texStorage2D(n.TEXTURE_2D,at,Pt,Xt[0].width,Xt[0].height);for(let q=0,J=Xt.length;q<J;q++)mt=Xt[q],Ft?U&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(n.TEXTURE_2D,q,Pt,mt.width,mt.height,0,pt,Rt,mt.data);M.generateMipmaps=!1}else Ft?(ie&&e.texStorage2D(n.TEXTURE_2D,at,Pt,nt.width,nt.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt.width,nt.height,pt,Rt,nt.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,nt.width,nt.height,0,pt,Rt,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ft&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,Pt,Xt[0].width,Xt[0].height,nt.depth);for(let q=0,J=Xt.length;q<J;q++)if(mt=Xt[q],M.format!==en)if(pt!==null)if(Ft){if(U)if(M.layerUpdates.size>0){const ht=ql(mt.width,mt.height,M.format,M.type);for(const lt of M.layerUpdates){const Ut=mt.data.subarray(lt*ht/mt.data.BYTES_PER_ELEMENT,(lt+1)*ht/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,lt,mt.width,mt.height,1,pt,Ut)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,mt.width,mt.height,nt.depth,pt,mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Pt,mt.width,mt.height,nt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,mt.width,mt.height,nt.depth,pt,Rt,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,Pt,mt.width,mt.height,nt.depth,0,pt,Rt,mt.data)}else{Ft&&ie&&e.texStorage2D(n.TEXTURE_2D,at,Pt,Xt[0].width,Xt[0].height);for(let q=0,J=Xt.length;q<J;q++)mt=Xt[q],M.format!==en?pt!==null?Ft?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,q,Pt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?U&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(n.TEXTURE_2D,q,Pt,mt.width,mt.height,0,pt,Rt,mt.data)}else if(M.isDataArrayTexture)if(Ft){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,Pt,nt.width,nt.height,nt.depth),U)if(M.layerUpdates.size>0){const q=ql(nt.width,nt.height,M.format,M.type);for(const J of M.layerUpdates){const ht=nt.data.subarray(J*q/nt.data.BYTES_PER_ELEMENT,(J+1)*q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,pt,Rt,ht)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,pt,Rt,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,nt.width,nt.height,nt.depth,0,pt,Rt,nt.data);else if(M.isData3DTexture)Ft?(ie&&e.texStorage3D(n.TEXTURE_3D,at,Pt,nt.width,nt.height,nt.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,pt,Rt,nt.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,nt.width,nt.height,nt.depth,0,pt,Rt,nt.data);else if(M.isFramebufferTexture){if(ie)if(Ft)e.texStorage2D(n.TEXTURE_2D,at,Pt,nt.width,nt.height);else{let q=nt.width,J=nt.height;for(let ht=0;ht<at;ht++)e.texImage2D(n.TEXTURE_2D,ht,Pt,q,J,0,pt,Rt,null),q>>=1,J>>=1}}else if(Xt.length>0){if(Ft&&ie){const q=Tt(Xt[0]);e.texStorage2D(n.TEXTURE_2D,at,Pt,q.width,q.height)}for(let q=0,J=Xt.length;q<J;q++)mt=Xt[q],Ft?U&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,pt,Rt,mt):e.texImage2D(n.TEXTURE_2D,q,Pt,pt,Rt,mt);M.generateMipmaps=!1}else if(Ft){if(ie){const q=Tt(nt);e.texStorage2D(n.TEXTURE_2D,at,Pt,q.width,q.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,Rt,nt)}else e.texImage2D(n.TEXTURE_2D,0,Pt,pt,Rt,nt);m(M)&&d(j),xt.__version=Z.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function tt(T,M,k){if(M.image.length!==6)return;const j=Ht(T,M),et=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+k);const Z=i.get(et);if(et.version!==Z.__version||j===!0){e.activeTexture(n.TEXTURE0+k);const xt=$t.getPrimaries($t.workingColorSpace),ct=M.colorSpace===ii?null:$t.getPrimaries(M.colorSpace),dt=M.colorSpace===ii||xt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Yt=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,pt=[];for(let J=0;J<6;J++)!Yt&&!nt?pt[J]=_(M.image[J],!0,r.maxCubemapSize):pt[J]=nt?M.image[J].image:M.image[J],pt[J]=oe(M,pt[J]);const Rt=pt[0],Pt=s.convert(M.format,M.colorSpace),mt=s.convert(M.type),Xt=y(M.internalFormat,Pt,mt,M.colorSpace),Ft=M.isVideoTexture!==!0,ie=Z.__version===void 0||j===!0,U=et.dataReady;let at=R(M,Rt);St(n.TEXTURE_CUBE_MAP,M);let q;if(Yt){Ft&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,at,Xt,Rt.width,Rt.height);for(let J=0;J<6;J++){q=pt[J].mipmaps;for(let ht=0;ht<q.length;ht++){const lt=q[ht];M.format!==en?Pt!==null?Ft?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,0,0,lt.width,lt.height,Pt,lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,Xt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,0,0,lt.width,lt.height,Pt,mt,lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,Xt,lt.width,lt.height,0,Pt,mt,lt.data)}}}else{if(q=M.mipmaps,Ft&&ie){q.length>0&&at++;const J=Tt(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,at,Xt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Ft?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pt[J].width,pt[J].height,Pt,mt,pt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,pt[J].width,pt[J].height,0,Pt,mt,pt[J].data);for(let ht=0;ht<q.length;ht++){const Ut=q[ht].image[J].image;Ft?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,0,0,Ut.width,Ut.height,Pt,mt,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,Xt,Ut.width,Ut.height,0,Pt,mt,Ut.data)}}else{Ft?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pt,mt,pt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,Pt,mt,pt[J]);for(let ht=0;ht<q.length;ht++){const lt=q[ht];Ft?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,0,0,Pt,mt,lt.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,Xt,Pt,mt,lt.image[J])}}}m(M)&&d(n.TEXTURE_CUBE_MAP),Z.__version=et.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ft(T,M,k,j,et,Z){const xt=s.convert(k.format,k.colorSpace),ct=s.convert(k.type),dt=y(k.internalFormat,xt,ct,k.colorSpace),Yt=i.get(M),nt=i.get(k);if(nt.__renderTarget=M,!Yt.__hasExternalTextures){const pt=Math.max(1,M.width>>Z),Rt=Math.max(1,M.height>>Z);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,dt,pt,Rt,M.depth,0,xt,ct,null):e.texImage2D(et,Z,dt,pt,Rt,0,xt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Wt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,et,nt.__webglTexture,0,kt(M)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,et,nt.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(T,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){const j=M.depthTexture,et=j&&j.isDepthTexture?j.type:null,Z=g(M.stencilBuffer,et),xt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=kt(M);Wt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,Z,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,Z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Z,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,T)}else{const j=M.textures;for(let et=0;et<j.length;et++){const Z=j[et],xt=s.convert(Z.format,Z.colorSpace),ct=s.convert(Z.type),dt=y(Z.internalFormat,xt,ct,Z.colorSpace),Yt=kt(M);k&&Wt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt,dt,M.width,M.height):Wt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt,dt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,dt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const et=j.__webglTexture,Z=kt(M);if(M.depthTexture.format===ar)Wt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(M.depthTexture.format===mr)Wt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function wt(T){const M=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",et)};j.addEventListener("dispose",et),M.__depthDisposeCallback=et}M.__boundDepthTexture=j}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");bt(M.__webglFramebuffer,T)}else if(k){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=n.createRenderbuffer(),rt(M.__webglDepthbuffer[j],T,!1);else{const et=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),rt(M.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,et)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function It(T,M,k){const j=i.get(T);M!==void 0&&ft(j.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&wt(T)}function ee(T){const M=T.texture,k=i.get(T),j=i.get(M);T.addEventListener("dispose",A);const et=T.textures,Z=T.isWebGLCubeRenderTarget===!0,xt=et.length>1;if(xt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=M.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ct]=[];for(let dt=0;dt<M.mipmaps.length;dt++)k.__webglFramebuffer[ct][dt]=n.createFramebuffer()}else k.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)k.__webglFramebuffer[ct]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(xt)for(let ct=0,dt=et.length;ct<dt;ct++){const Yt=i.get(et[ct]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&Wt(T)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ct=0;ct<et.length;ct++){const dt=et[ct];k.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ct]);const Yt=s.convert(dt.format,dt.colorSpace),nt=s.convert(dt.type),pt=y(dt.internalFormat,Yt,nt,dt.colorSpace,T.isXRRenderTarget===!0),Rt=kt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,pt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,k.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),rt(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),St(n.TEXTURE_CUBE_MAP,M);for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)ft(k.__webglFramebuffer[ct][dt],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,dt);else ft(k.__webglFramebuffer[ct],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(M)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ct=0,dt=et.length;ct<dt;ct++){const Yt=et[ct],nt=i.get(Yt);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture),St(n.TEXTURE_2D,Yt),ft(k.__webglFramebuffer,T,Yt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(Yt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,j.__webglTexture),St(ct,M),M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)ft(k.__webglFramebuffer[dt],T,M,n.COLOR_ATTACHMENT0,ct,dt);else ft(k.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,ct,0);m(M)&&d(ct),e.unbindTexture()}T.depthBuffer&&wt(T)}function zt(T){const M=T.textures;for(let k=0,j=M.length;k<j;k++){const et=M[k];if(m(et)){const Z=E(T),xt=i.get(et).__webglTexture;e.bindTexture(Z,xt),d(Z),e.unbindTexture()}}}const Jt=[],N=[];function ve(T){if(T.samples>0){if(Wt(T)===!1){const M=T.textures,k=T.width,j=T.height;let et=n.COLOR_BUFFER_BIT;const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(T),ct=M.length>1;if(ct)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[dt]);const Yt=i.get(M[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Yt,0)}n.blitFramebuffer(0,0,k,j,0,0,k,j,et,n.NEAREST),c===!0&&(Jt.length=0,N.length=0,Jt.push(n.COLOR_ATTACHMENT0+dt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Jt.push(Z),N.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[dt]);const Yt=i.get(M[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function kt(T){return Math.min(r.maxSamples,T.samples)}function Wt(T){const M=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(T){const M=o.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function oe(T,M){const k=T.colorSpace,j=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Sr&&k!==ii&&($t.getTransfer(k)===te?(j!==en||et!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Tt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=z,this.setTexture2D=B,this.setTexture2DArray=I,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=It,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Wt}function C_(n,t){function e(i,r=ii){let s;const o=$t.getTransfer(r);if(i===Bn)return n.UNSIGNED_BYTE;if(i===oc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ac)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Au)return n.BYTE;if(i===Ru)return n.SHORT;if(i===Xr)return n.UNSIGNED_SHORT;if(i===sc)return n.INT;if(i===Ii)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===Mr)return n.HALF_FLOAT;if(i===Pu)return n.ALPHA;if(i===Lu)return n.RGB;if(i===en)return n.RGBA;if(i===Iu)return n.LUMINANCE;if(i===Du)return n.LUMINANCE_ALPHA;if(i===ar)return n.DEPTH_COMPONENT;if(i===mr)return n.DEPTH_STENCIL;if(i===Uu)return n.RED;if(i===cc)return n.RED_INTEGER;if(i===Nu)return n.RG;if(i===lc)return n.RG_INTEGER;if(i===uc)return n.RGBA_INTEGER;if(i===Ds||i===Us||i===Ns||i===Os)if(o===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ds)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ds)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Us)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Os)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===va||i===xa||i===ya||i===Ma)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===va)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ya)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ma)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sa||i===Ea||i===ba)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sa||i===Ea)return o===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ba)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wa||i===Ta||i===Aa||i===Ra||i===Ca||i===Pa||i===La||i===Ia||i===Da||i===Ua||i===Na||i===Oa||i===Fa||i===Ba)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ta)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Aa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ra)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ca)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===La)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ia)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Da)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ua)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Na)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fa)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ba)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fs||i===za||i===Ha)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Fs)return o===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===za)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ha)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ou||i===ka||i===Va||i===Ga)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ka)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Va)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ga)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class P_ extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pe extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L_={type:"move"};class Fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,v=.005;l.inputState.pinching&&f>p+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new pe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const I_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class U_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Pe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new fn({vertexShader:I_,fragmentShader:D_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new Fi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N_ extends Er{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,v=null;const _=new U_,m=e.getContextAttributes();let d=null,E=null;const y=[],g=[],R=new Mt;let w=null;const A=new tn;A.viewport=new de;const P=new tn;P.viewport=new de;const S=[A,P],x=new P_;let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=y[Y];return tt===void 0&&(tt=new Fo,y[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=y[Y];return tt===void 0&&(tt=new Fo,y[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=y[Y];return tt===void 0&&(tt=new Fo,y[Y]=tt),tt.getHandSpace()};function D(Y){const tt=g.indexOf(Y.inputSource);if(tt===-1)return;const ft=y[tt];ft!==void 0&&(ft.update(Y.inputSource,Y.frame,l||o),ft.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",B);for(let Y=0;Y<y.length;Y++){const tt=g[Y];tt!==null&&(g[Y]=null,y[Y].disconnect(tt))}C=null,z=null,_.reset(),t.setRenderTarget(d),p=null,f=null,h=null,r=null,E=null,Ht.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",W),r.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),r.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new zn(p.framebufferWidth,p.framebufferHeight,{format:en,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,ft=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?mr:ar,ft=m.stencil?pr:Ii);const bt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(bt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new zn(f.textureWidth,f.textureHeight,{format:en,type:Bn,depthTexture:new _c(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Ht.setContext(r),Ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(Y){for(let tt=0;tt<Y.removed.length;tt++){const ft=Y.removed[tt],rt=g.indexOf(ft);rt>=0&&(g[rt]=null,y[rt].disconnect(ft))}for(let tt=0;tt<Y.added.length;tt++){const ft=Y.added[tt];let rt=g.indexOf(ft);if(rt===-1){for(let wt=0;wt<y.length;wt++)if(wt>=g.length){g.push(ft),rt=wt;break}else if(g[wt]===null){g[wt]=ft,rt=wt;break}if(rt===-1)break}const bt=y[rt];bt&&bt.connect(ft)}}const I=new L,X=new L;function H(Y,tt,ft){I.setFromMatrixPosition(tt.matrixWorld),X.setFromMatrixPosition(ft.matrixWorld);const rt=I.distanceTo(X),bt=tt.projectionMatrix.elements,wt=ft.projectionMatrix.elements,It=bt[14]/(bt[10]-1),ee=bt[14]/(bt[10]+1),zt=(bt[9]+1)/bt[5],Jt=(bt[9]-1)/bt[5],N=(bt[8]-1)/bt[0],ve=(wt[8]+1)/wt[0],kt=It*N,Wt=It*ve,At=rt/(-N+ve),oe=At*-N;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(oe),Y.translateZ(At),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Tt=It+At,T=ee+At,M=kt-oe,k=Wt+(rt-oe),j=zt*ee/T*Tt,et=Jt*ee/T*Tt;Y.projectionMatrix.makePerspective(M,k,j,et,Tt,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function K(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let tt=Y.near,ft=Y.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(ft=_.depthFar)),x.near=P.near=A.near=tt,x.far=P.far=A.far=ft,(C!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,z=x.far),A.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,x.layers.mask=A.layers.mask|P.layers.mask;const rt=Y.parent,bt=x.cameras;K(x,rt);for(let wt=0;wt<bt.length;wt++)K(bt[wt],rt);bt.length===2?H(x,A,P):x.projectionMatrix.copy(A.projectionMatrix),Q(Y,x,rt)};function Q(Y,tt,ft){ft===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(ft.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let st=null;function St(Y,tt){if(u=tt.getViewerPose(l||o),v=tt,u!==null){const ft=u.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let rt=!1;ft.length!==x.cameras.length&&(x.cameras.length=0,rt=!0);for(let wt=0;wt<ft.length;wt++){const It=ft[wt];let ee=null;if(p!==null)ee=p.getViewport(It);else{const Jt=h.getViewSubImage(f,It);ee=Jt.viewport,wt===0&&(t.setRenderTargetTextures(E,Jt.colorTexture,f.ignoreDepthValues?void 0:Jt.depthStencilTexture),t.setRenderTarget(E))}let zt=S[wt];zt===void 0&&(zt=new tn,zt.layers.enable(wt),zt.viewport=new de,S[wt]=zt),zt.matrix.fromArray(It.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(It.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(ee.x,ee.y,ee.width,ee.height),wt===0&&(x.matrix.copy(zt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),rt===!0&&x.cameras.push(zt)}const bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const wt=h.getDepthInformation(ft[0]);wt&&wt.isValid&&wt.texture&&_.init(t,wt,r.renderState)}}for(let ft=0;ft<y.length;ft++){const rt=g[ft],bt=y[ft];rt!==null&&bt!==void 0&&bt.update(rt,tt,l||o)}st&&st(Y,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),v=null}const Ht=new $u;Ht.setAnimationLoop(St),this.setAnimationLoop=function(Y){st=Y},this.dispose=function(){}}}const gi=new kn,O_=new se;function F_(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Xu(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,E,y,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,g)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,E,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ne&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ne&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=t.get(d),y=E.envMap,g=E.envMapRotation;y&&(m.envMap.value=y,gi.copy(g),gi.x*=-1,gi.y*=-1,gi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(gi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,E,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ne&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function B_(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){const g=y.program;i.uniformBlockBinding(E,g)}function l(E,y){let g=r[E.id];g===void 0&&(v(E),g=u(E),r[E.id]=g,E.addEventListener("dispose",m));const R=y.program;i.updateUBOMapping(E,R);const w=t.render.frame;s[E.id]!==w&&(f(E),s[E.id]=w)}function u(E){const y=h();E.__bindingPointIndex=y;const g=n.createBuffer(),R=E.__size,w=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,g),g}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const y=r[E.id],g=E.uniforms,R=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,A=g.length;w<A;w++){const P=Array.isArray(g[w])?g[w]:[g[w]];for(let S=0,x=P.length;S<x;S++){const C=P[S];if(p(C,w,S,R)===!0){const z=C.__offset,D=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let B=0;B<D.length;B++){const I=D[B],X=_(I);typeof I=="number"||typeof I=="boolean"?(C.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,z+W,C.__data)):I.isMatrix3?(C.__data[0]=I.elements[0],C.__data[1]=I.elements[1],C.__data[2]=I.elements[2],C.__data[3]=0,C.__data[4]=I.elements[3],C.__data[5]=I.elements[4],C.__data[6]=I.elements[5],C.__data[7]=0,C.__data[8]=I.elements[6],C.__data[9]=I.elements[7],C.__data[10]=I.elements[8],C.__data[11]=0):(I.toArray(C.__data,W),W+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,y,g,R){const w=E.value,A=y+"_"+g;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const P=R[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function v(E){const y=E.uniforms;let g=0;const R=16;for(let A=0,P=y.length;A<P;A++){const S=Array.isArray(y[A])?y[A]:[y[A]];for(let x=0,C=S.length;x<C;x++){const z=S[x],D=Array.isArray(z.value)?z.value:[z.value];for(let W=0,B=D.length;W<B;W++){const I=D[W],X=_(I),H=g%R,K=H%X.boundary,Q=H+K;g+=K,Q!==0&&R-Q<X.storage&&(g+=R-Q),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=g,g+=X.storage}}}const w=g%R;return w>0&&(g+=R-w),E.__size=g,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const g=o.indexOf(y.__bindingPointIndex);o.splice(g,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}class z_{constructor(t={}){const{canvas:e=Td(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const E=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=si,this.toneMappingExposure=1;const g=this;let R=!1,w=0,A=0,P=null,S=-1,x=null;const C=new de,z=new de;let D=null;const W=new qt(0);let B=0,I=e.width,X=e.height,H=1,K=null,Q=null;const st=new de(0,0,I,X),St=new de(0,0,I,X);let Ht=!1;const Y=new pc;let tt=!1,ft=!1;const rt=new se,bt=new se,wt=new L,It=new de,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function Jt(){return P===null?H:1}let N=i;function ve(b,O){return e.getContext(b,O)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",lt,!1),N===null){const O="webgl2";if(N=ve(O,b),N===null)throw ve(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let kt,Wt,At,oe,Tt,T,M,k,j,et,Z,xt,ct,dt,Yt,nt,pt,Rt,Pt,mt,Xt,Ft,ie,U;function at(){kt=new Wg(N),kt.init(),Ft=new C_(N,kt),Wt=new Bg(N,kt,t,Ft),At=new T_(N,kt),Wt.reverseDepthBuffer&&f&&At.buffers.depth.setReversed(!0),oe=new Yg(N),Tt=new h_,T=new R_(N,kt,At,Tt,Wt,Ft,oe),M=new Hg(g),k=new Gg(g),j=new tp(N),ie=new Og(N,j),et=new Xg(N,j,oe,ie),Z=new Kg(N,et,j,oe),Pt=new $g(N,Wt,T),nt=new zg(Tt),xt=new u_(g,M,k,kt,Wt,ie,nt),ct=new F_(g,Tt),dt=new d_,Yt=new x_(kt),Rt=new Ng(g,M,k,At,Z,p,c),pt=new b_(g,Z,Wt),U=new B_(N,oe,Wt,At),mt=new Fg(N,kt,oe),Xt=new qg(N,kt,oe),oe.programs=xt.programs,g.capabilities=Wt,g.extensions=kt,g.properties=Tt,g.renderLists=dt,g.shadowMap=pt,g.state=At,g.info=oe}at();const q=new N_(g,N);this.xr=q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=kt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=kt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(I,X,!1))},this.getSize=function(b){return b.set(I,X)},this.setSize=function(b,O,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=b,X=O,e.width=Math.floor(b*H),e.height=Math.floor(O*H),V===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(I*H,X*H).floor()},this.setDrawingBufferSize=function(b,O,V){I=b,X=O,H=V,e.width=Math.floor(b*V),e.height=Math.floor(O*V),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(st)},this.setViewport=function(b,O,V,G){b.isVector4?st.set(b.x,b.y,b.z,b.w):st.set(b,O,V,G),At.viewport(C.copy(st).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(St)},this.setScissor=function(b,O,V,G){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,O,V,G),At.scissor(z.copy(St).multiplyScalar(H).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(b){At.setScissorTest(Ht=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){Q=b},this.getClearColor=function(b){return b.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(b=!0,O=!0,V=!0){let G=0;if(b){let F=!1;if(P!==null){const it=P.texture.format;F=it===uc||it===lc||it===cc}if(F){const it=P.texture.type,ut=it===Bn||it===Ii||it===Xr||it===pr||it===oc||it===ac,gt=Rt.getClearColor(),_t=Rt.getClearAlpha(),Dt=gt.r,Nt=gt.g,vt=gt.b;ut?(v[0]=Dt,v[1]=Nt,v[2]=vt,v[3]=_t,N.clearBufferuiv(N.COLOR,0,v)):(_[0]=Dt,_[1]=Nt,_[2]=vt,_[3]=_t,N.clearBufferiv(N.COLOR,0,_))}else G|=N.COLOR_BUFFER_BIT}O&&(G|=N.DEPTH_BUFFER_BIT),V&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),dt.dispose(),Yt.dispose(),Tt.dispose(),M.dispose(),k.dispose(),Z.dispose(),ie.dispose(),U.dispose(),xt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Hc),q.removeEventListener("sessionend",kc),ui.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=oe.autoReset,O=pt.enabled,V=pt.autoUpdate,G=pt.needsUpdate,F=pt.type;at(),oe.autoReset=b,pt.enabled=O,pt.autoUpdate=V,pt.needsUpdate=G,pt.type=F}function lt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ut(b){const O=b.target;O.removeEventListener("dispose",Ut),he(O)}function he(b){Te(b),Tt.remove(b)}function Te(b){const O=Tt.get(b).programs;O!==void 0&&(O.forEach(function(V){xt.releaseProgram(V)}),b.isShaderMaterial&&xt.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,V,G,F,it){O===null&&(O=ee);const ut=F.isMesh&&F.matrixWorld.determinant()<0,gt=yf(b,O,V,G,F);At.setMaterial(G,ut);let _t=V.index,Dt=1;if(G.wireframe===!0){if(_t=et.getWireframeAttribute(V),_t===void 0)return;Dt=2}const Nt=V.drawRange,vt=V.attributes.position;let Kt=Nt.start*Dt,re=(Nt.start+Nt.count)*Dt;it!==null&&(Kt=Math.max(Kt,it.start*Dt),re=Math.min(re,(it.start+it.count)*Dt)),_t!==null?(Kt=Math.max(Kt,0),re=Math.min(re,_t.count)):vt!=null&&(Kt=Math.max(Kt,0),re=Math.min(re,vt.count));const ae=re-Kt;if(ae<0||ae===1/0)return;ie.setup(F,G,gt,V,_t);let Fe,Zt=mt;if(_t!==null&&(Fe=j.get(_t),Zt=Xt,Zt.setIndex(Fe)),F.isMesh)G.wireframe===!0?(At.setLineWidth(G.wireframeLinewidth*Jt()),Zt.setMode(N.LINES)):Zt.setMode(N.TRIANGLES);else if(F.isLine){let yt=G.linewidth;yt===void 0&&(yt=1),At.setLineWidth(yt*Jt()),F.isLineSegments?Zt.setMode(N.LINES):F.isLineLoop?Zt.setMode(N.LINE_LOOP):Zt.setMode(N.LINE_STRIP)}else F.isPoints?Zt.setMode(N.POINTS):F.isSprite&&Zt.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Zt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const yt=F._multiDrawStarts,En=F._multiDrawCounts,jt=F._multiDrawCount,on=_t?j.get(_t).bytesPerElement:1,Bi=Tt.get(G).currentProgram.getUniforms();for(let Ge=0;Ge<jt;Ge++)Bi.setValue(N,"_gl_DrawID",Ge),Zt.render(yt[Ge]/on,En[Ge])}else if(F.isInstancedMesh)Zt.renderInstances(Kt,ae,F.count);else if(V.isInstancedBufferGeometry){const yt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,En=Math.min(V.instanceCount,yt);Zt.renderInstances(Kt,ae,En)}else Zt.render(Kt,ae)};function Qt(b,O,V){b.transparent===!0&&b.side===_n&&b.forceSinglePass===!1?(b.side=Ne,b.needsUpdate=!0,ss(b,O,V),b.side=Fn,b.needsUpdate=!0,ss(b,O,V),b.side=_n):ss(b,O,V)}this.compile=function(b,O,V=null){V===null&&(V=b),d=Yt.get(V),d.init(O),y.push(d),V.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),b!==V&&b.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const G=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const it=F.material;if(it)if(Array.isArray(it))for(let ut=0;ut<it.length;ut++){const gt=it[ut];Qt(gt,V,F),G.add(gt)}else Qt(it,V,F),G.add(it)}),y.pop(),d=null,G},this.compileAsync=function(b,O,V=null){const G=this.compile(b,O,V);return new Promise(F=>{function it(){if(G.forEach(function(ut){Tt.get(ut).currentProgram.isReady()&&G.delete(ut)}),G.size===0){F(b);return}setTimeout(it,10)}kt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let sn=null;function Sn(b){sn&&sn(b)}function Hc(){ui.stop()}function kc(){ui.start()}const ui=new $u;ui.setAnimationLoop(Sn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(b){sn=b,q.setAnimationLoop(b),b===null?ui.stop():ui.start()},q.addEventListener("sessionstart",Hc),q.addEventListener("sessionend",kc),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),b.isScene===!0&&b.onBeforeRender(g,b,O,P),d=Yt.get(b,y.length),d.init(O),y.push(d),bt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(bt),ft=this.localClippingEnabled,tt=nt.init(this.clippingPlanes,ft),m=dt.get(b,E.length),m.init(),E.push(m),q.enabled===!0&&q.isPresenting===!0){const it=g.xr.getDepthSensingMesh();it!==null&&co(it,O,-1/0,g.sortObjects)}co(b,O,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(K,Q),zt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,zt&&Rt.addToRenderList(m,b),this.info.render.frame++,tt===!0&&nt.beginShadows();const V=d.state.shadowsArray;pt.render(V,b,O),tt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(d.setupLights(),O.isArrayCamera){const it=O.cameras;if(F.length>0)for(let ut=0,gt=it.length;ut<gt;ut++){const _t=it[ut];Gc(G,F,b,_t)}zt&&Rt.render(b);for(let ut=0,gt=it.length;ut<gt;ut++){const _t=it[ut];Vc(m,b,_t,_t.viewport)}}else F.length>0&&Gc(G,F,b,O),zt&&Rt.render(b),Vc(m,b,O);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(g,b,O),ie.resetDefaultState(),S=-1,x=null,y.pop(),y.length>0?(d=y[y.length-1],tt===!0&&nt.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function co(b,O,V,G){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){G&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(bt);const ut=Z.update(b),gt=b.material;gt.visible&&m.push(b,ut,gt,V,It.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){const ut=Z.update(b),gt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),It.copy(ut.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(bt)),Array.isArray(gt)){const _t=ut.groups;for(let Dt=0,Nt=_t.length;Dt<Nt;Dt++){const vt=_t[Dt],Kt=gt[vt.materialIndex];Kt&&Kt.visible&&m.push(b,ut,Kt,V,It.z,vt)}}else gt.visible&&m.push(b,ut,gt,V,It.z,null)}}const it=b.children;for(let ut=0,gt=it.length;ut<gt;ut++)co(it[ut],O,V,G)}function Vc(b,O,V,G){const F=b.opaque,it=b.transmissive,ut=b.transparent;d.setupLightsView(V),tt===!0&&nt.setGlobalState(g.clippingPlanes,V),G&&At.viewport(C.copy(G)),F.length>0&&rs(F,O,V),it.length>0&&rs(it,O,V),ut.length>0&&rs(ut,O,V),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Gc(b,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new zn(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Mr:Bn,minFilter:Ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const it=d.state.transmissionRenderTarget[G.id],ut=G.viewport||C;it.setSize(ut.z,ut.w);const gt=g.getRenderTarget();g.setRenderTarget(it),g.getClearColor(W),B=g.getClearAlpha(),B<1&&g.setClearColor(16777215,.5),g.clear(),zt&&Rt.render(V);const _t=g.toneMapping;g.toneMapping=si;const Dt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),tt===!0&&nt.setGlobalState(g.clippingPlanes,G),rs(b,V,G),T.updateMultisampleRenderTarget(it),T.updateRenderTargetMipmap(it),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let vt=0,Kt=O.length;vt<Kt;vt++){const re=O[vt],ae=re.object,Fe=re.geometry,Zt=re.material,yt=re.group;if(Zt.side===_n&&ae.layers.test(G.layers)){const En=Zt.side;Zt.side=Ne,Zt.needsUpdate=!0,Wc(ae,V,G,Fe,Zt,yt),Zt.side=En,Zt.needsUpdate=!0,Nt=!0}}Nt===!0&&(T.updateMultisampleRenderTarget(it),T.updateRenderTargetMipmap(it))}g.setRenderTarget(gt),g.setClearColor(W,B),Dt!==void 0&&(G.viewport=Dt),g.toneMapping=_t}function rs(b,O,V){const G=O.isScene===!0?O.overrideMaterial:null;for(let F=0,it=b.length;F<it;F++){const ut=b[F],gt=ut.object,_t=ut.geometry,Dt=G===null?ut.material:G,Nt=ut.group;gt.layers.test(V.layers)&&Wc(gt,O,V,_t,Dt,Nt)}}function Wc(b,O,V,G,F,it){b.onBeforeRender(g,O,V,G,F,it),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(g,O,V,G,b,it),F.transparent===!0&&F.side===_n&&F.forceSinglePass===!1?(F.side=Ne,F.needsUpdate=!0,g.renderBufferDirect(V,O,G,F,b,it),F.side=Fn,F.needsUpdate=!0,g.renderBufferDirect(V,O,G,F,b,it),F.side=_n):g.renderBufferDirect(V,O,G,F,b,it),b.onAfterRender(g,O,V,G,F,it)}function ss(b,O,V){O.isScene!==!0&&(O=ee);const G=Tt.get(b),F=d.state.lights,it=d.state.shadowsArray,ut=F.state.version,gt=xt.getParameters(b,F.state,it,O,V),_t=xt.getProgramCacheKey(gt);let Dt=G.programs;G.environment=b.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(b.isMeshStandardMaterial?k:M).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Dt===void 0&&(b.addEventListener("dispose",Ut),Dt=new Map,G.programs=Dt);let Nt=Dt.get(_t);if(Nt!==void 0){if(G.currentProgram===Nt&&G.lightsStateVersion===ut)return qc(b,gt),Nt}else gt.uniforms=xt.getUniforms(b),b.onBeforeCompile(gt,g),Nt=xt.acquireProgram(gt,_t),Dt.set(_t,Nt),G.uniforms=gt.uniforms;const vt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(vt.clippingPlanes=nt.uniform),qc(b,gt),G.needsLights=Sf(b),G.lightsStateVersion=ut,G.needsLights&&(vt.ambientLightColor.value=F.state.ambient,vt.lightProbe.value=F.state.probe,vt.directionalLights.value=F.state.directional,vt.directionalLightShadows.value=F.state.directionalShadow,vt.spotLights.value=F.state.spot,vt.spotLightShadows.value=F.state.spotShadow,vt.rectAreaLights.value=F.state.rectArea,vt.ltc_1.value=F.state.rectAreaLTC1,vt.ltc_2.value=F.state.rectAreaLTC2,vt.pointLights.value=F.state.point,vt.pointLightShadows.value=F.state.pointShadow,vt.hemisphereLights.value=F.state.hemi,vt.directionalShadowMap.value=F.state.directionalShadowMap,vt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,vt.spotShadowMap.value=F.state.spotShadowMap,vt.spotLightMatrix.value=F.state.spotLightMatrix,vt.spotLightMap.value=F.state.spotLightMap,vt.pointShadowMap.value=F.state.pointShadowMap,vt.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Nt,G.uniformsList=null,Nt}function Xc(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Bs.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function qc(b,O){const V=Tt.get(b);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function yf(b,O,V,G,F){O.isScene!==!0&&(O=ee),T.resetTextureUnits();const it=O.fog,ut=G.isMeshStandardMaterial?O.environment:null,gt=P===null?g.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Sr,_t=(G.isMeshStandardMaterial?k:M).get(G.envMap||ut),Dt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Nt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),vt=!!V.morphAttributes.position,Kt=!!V.morphAttributes.normal,re=!!V.morphAttributes.color;let ae=si;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ae=g.toneMapping);const Fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Zt=Fe!==void 0?Fe.length:0,yt=Tt.get(G),En=d.state.lights;if(tt===!0&&(ft===!0||b!==x)){const Ke=b===x&&G.id===S;nt.setState(G,b,Ke)}let jt=!1;G.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==En.state.version||yt.outputColorSpace!==gt||F.isBatchedMesh&&yt.batching===!1||!F.isBatchedMesh&&yt.batching===!0||F.isBatchedMesh&&yt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&yt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&yt.instancing===!1||!F.isInstancedMesh&&yt.instancing===!0||F.isSkinnedMesh&&yt.skinning===!1||!F.isSkinnedMesh&&yt.skinning===!0||F.isInstancedMesh&&yt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&yt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&yt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&yt.instancingMorph===!1&&F.morphTexture!==null||yt.envMap!==_t||G.fog===!0&&yt.fog!==it||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==nt.numPlanes||yt.numIntersection!==nt.numIntersection)||yt.vertexAlphas!==Dt||yt.vertexTangents!==Nt||yt.morphTargets!==vt||yt.morphNormals!==Kt||yt.morphColors!==re||yt.toneMapping!==ae||yt.morphTargetsCount!==Zt)&&(jt=!0):(jt=!0,yt.__version=G.version);let on=yt.currentProgram;jt===!0&&(on=ss(G,O,F));let Bi=!1,Ge=!1,Pr=!1;const ce=on.getUniforms(),dn=yt.uniforms;if(At.useProgram(on.program)&&(Bi=!0,Ge=!0,Pr=!0),G.id!==S&&(S=G.id,Ge=!0),Bi||x!==b){At.buffers.depth.getReversed()?(rt.copy(b.projectionMatrix),Rd(rt),Cd(rt),ce.setValue(N,"projectionMatrix",rt)):ce.setValue(N,"projectionMatrix",b.projectionMatrix),ce.setValue(N,"viewMatrix",b.matrixWorldInverse);const qn=ce.map.cameraPosition;qn!==void 0&&qn.setValue(N,wt.setFromMatrixPosition(b.matrixWorld)),Wt.logarithmicDepthBuffer&&ce.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ce.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,Ge=!0,Pr=!0)}if(F.isSkinnedMesh){ce.setOptional(N,F,"bindMatrix"),ce.setOptional(N,F,"bindMatrixInverse");const Ke=F.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),ce.setValue(N,"boneTexture",Ke.boneTexture,T))}F.isBatchedMesh&&(ce.setOptional(N,F,"batchingTexture"),ce.setValue(N,"batchingTexture",F._matricesTexture,T),ce.setOptional(N,F,"batchingIdTexture"),ce.setValue(N,"batchingIdTexture",F._indirectTexture,T),ce.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&ce.setValue(N,"batchingColorTexture",F._colorsTexture,T));const Lr=V.morphAttributes;if((Lr.position!==void 0||Lr.normal!==void 0||Lr.color!==void 0)&&Pt.update(F,V,on),(Ge||yt.receiveShadow!==F.receiveShadow)&&(yt.receiveShadow=F.receiveShadow,ce.setValue(N,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(dn.envMap.value=_t,dn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(dn.envMapIntensity.value=O.environmentIntensity),Ge&&(ce.setValue(N,"toneMappingExposure",g.toneMappingExposure),yt.needsLights&&Mf(dn,Pr),it&&G.fog===!0&&ct.refreshFogUniforms(dn,it),ct.refreshMaterialUniforms(dn,G,H,X,d.state.transmissionRenderTarget[b.id]),Bs.upload(N,Xc(yt),dn,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Bs.upload(N,Xc(yt),dn,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ce.setValue(N,"center",F.center),ce.setValue(N,"modelViewMatrix",F.modelViewMatrix),ce.setValue(N,"normalMatrix",F.normalMatrix),ce.setValue(N,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ke=G.uniformsGroups;for(let qn=0,Yn=Ke.length;qn<Yn;qn++){const Yc=Ke[qn];U.update(Yc,on),U.bind(Yc,on)}}return on}function Mf(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Sf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,O,V){Tt.get(b.texture).__webglTexture=O,Tt.get(b.depthTexture).__webglTexture=V;const G=Tt.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const V=Tt.get(b);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,V=0){P=b,w=O,A=V;let G=!0,F=null,it=!1,ut=!1;if(b){const _t=Tt.get(b);if(_t.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(_t.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(_t.__hasExternalTextures)T.rebindTextures(b,Tt.get(b.texture).__webglTexture,Tt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const vt=b.depthTexture;if(_t.__boundDepthTexture!==vt){if(vt!==null&&Tt.has(vt)&&(b.width!==vt.image.width||b.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const Dt=b.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ut=!0);const Nt=Tt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[O])?F=Nt[O][V]:F=Nt[O],it=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?F=Tt.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?F=Nt[V]:F=Nt,C.copy(b.viewport),z.copy(b.scissor),D=b.scissorTest}else C.copy(st).multiplyScalar(H).floor(),z.copy(St).multiplyScalar(H).floor(),D=Ht;if(At.bindFramebuffer(N.FRAMEBUFFER,F)&&G&&At.drawBuffers(b,F),At.viewport(C),At.scissor(z),At.setScissorTest(D),it){const _t=Tt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,_t.__webglTexture,V)}else if(ut){const _t=Tt.get(b.texture),Dt=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,_t.__webglTexture,V||0,Dt)}S=-1},this.readRenderTargetPixels=function(b,O,V,G,F,it,ut){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(gt=gt[ut]),gt){At.bindFramebuffer(N.FRAMEBUFFER,gt);try{const _t=b.texture,Dt=_t.format,Nt=_t.type;if(!Wt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-G&&V>=0&&V<=b.height-F&&N.readPixels(O,V,G,F,Ft.convert(Dt),Ft.convert(Nt),it)}finally{const _t=P!==null?Tt.get(P).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(b,O,V,G,F,it,ut){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(gt=gt[ut]),gt){const _t=b.texture,Dt=_t.format,Nt=_t.type;if(!Wt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-G&&V>=0&&V<=b.height-F){At.bindFramebuffer(N.FRAMEBUFFER,gt);const vt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,vt),N.bufferData(N.PIXEL_PACK_BUFFER,it.byteLength,N.STREAM_READ),N.readPixels(O,V,G,F,Ft.convert(Dt),Ft.convert(Nt),0);const Kt=P!==null?Tt.get(P).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,Kt);const re=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ad(N,re,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,vt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,it),N.deleteBuffer(vt),N.deleteSync(re),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,V=0){b.isTexture!==!0&&(Br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-V),F=Math.floor(b.image.width*G),it=Math.floor(b.image.height*G),ut=O!==null?O.x:0,gt=O!==null?O.y:0;T.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,ut,gt,F,it),At.unbindTexture()},this.copyTextureToTexture=function(b,O,V=null,G=null,F=0){b.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],O=arguments[2],F=arguments[3]||0,V=null);let it,ut,gt,_t,Dt,Nt,vt,Kt,re;const ae=b.isCompressedTexture?b.mipmaps[F]:b.image;V!==null?(it=V.max.x-V.min.x,ut=V.max.y-V.min.y,gt=V.isBox3?V.max.z-V.min.z:1,_t=V.min.x,Dt=V.min.y,Nt=V.isBox3?V.min.z:0):(it=ae.width,ut=ae.height,gt=ae.depth||1,_t=0,Dt=0,Nt=0),G!==null?(vt=G.x,Kt=G.y,re=G.z):(vt=0,Kt=0,re=0);const Fe=Ft.convert(O.format),Zt=Ft.convert(O.type);let yt;O.isData3DTexture?(T.setTexture3D(O,0),yt=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(T.setTexture2DArray(O,0),yt=N.TEXTURE_2D_ARRAY):(T.setTexture2D(O,0),yt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const En=N.getParameter(N.UNPACK_ROW_LENGTH),jt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),on=N.getParameter(N.UNPACK_SKIP_PIXELS),Bi=N.getParameter(N.UNPACK_SKIP_ROWS),Ge=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ae.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ae.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_t),N.pixelStorei(N.UNPACK_SKIP_ROWS,Dt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Nt);const Pr=b.isDataArrayTexture||b.isData3DTexture,ce=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const dn=Tt.get(b),Lr=Tt.get(O),Ke=Tt.get(dn.__renderTarget),qn=Tt.get(Lr.__renderTarget);At.bindFramebuffer(N.READ_FRAMEBUFFER,Ke.__webglFramebuffer),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Yn=0;Yn<gt;Yn++)Pr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.get(b).__webglTexture,F,Nt+Yn),b.isDepthTexture?(ce&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.get(O).__webglTexture,F,re+Yn),N.blitFramebuffer(_t,Dt,it,ut,vt,Kt,it,ut,N.DEPTH_BUFFER_BIT,N.NEAREST)):ce?N.copyTexSubImage3D(yt,F,vt,Kt,re+Yn,_t,Dt,it,ut):N.copyTexSubImage2D(yt,F,vt,Kt,re+Yn,_t,Dt,it,ut);At.bindFramebuffer(N.READ_FRAMEBUFFER,null),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ce?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(yt,F,vt,Kt,re,it,ut,gt,Fe,Zt,ae.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(yt,F,vt,Kt,re,it,ut,gt,Fe,ae.data):N.texSubImage3D(yt,F,vt,Kt,re,it,ut,gt,Fe,Zt,ae):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,vt,Kt,it,ut,Fe,Zt,ae.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,vt,Kt,ae.width,ae.height,Fe,ae.data):N.texSubImage2D(N.TEXTURE_2D,F,vt,Kt,it,ut,Fe,Zt,ae);N.pixelStorei(N.UNPACK_ROW_LENGTH,En),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,jt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,on),N.pixelStorei(N.UNPACK_SKIP_ROWS,Bi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge),F===0&&O.generateMipmaps&&N.generateMipmap(yt),At.unbindTexture()},this.copyTextureToTexture3D=function(b,O,V=null,G=null,F=0){return b.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,b=arguments[2],O=arguments[3],F=arguments[4]||0),Br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,V,G,F)},this.initRenderTarget=function(b){Tt.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),At.unbindTexture()},this.resetState=function(){w=0,A=0,P=null,At.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class Qu extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class H_ extends Pe{constructor(t=null,e=1,i=1,r,s,o,a,c,l=Ve,u=Ve,h,f){super(null,o,a,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class th extends Pe{constructor(t,e,i,r,s,o,a,c,l){super(t,e,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new Mt:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new L,r=[],s=[],o=[],a=new L,c=new se;for(let p=0;p<=t;p++){const v=p/t;r[p]=this.getTangentAt(v,new L)}s[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(be(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(be(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let v=1;v<=t;v++)s[v].applyMatrix4(c.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class eh extends Wn{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Mt){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*h+this.aX,l=f*h+p*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class k_ extends eh{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function vc(){let n=0,t=0,e=0,i=0;function r(s,o,a,c){n=s,t=a,e=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const As=new L,Bo=new vc,zo=new vc,Ho=new vc;class nh extends Wn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new L){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(As.subVectors(r[0],r[1]).add(r[0]),l=As);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(As.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=As),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),v<1e-4&&(v=_),m<1e-4&&(m=_),Bo.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,v,_,m),zo.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,v,_,m),Ho.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,v,_,m)}else this.curveType==="catmullrom"&&(Bo.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),zo.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Ho.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(Bo.calc(c),zo.calc(c),Ho.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new L().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Yl(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,c=n*a;return(2*e-2*i+s+o)*c+(-3*e+3*i-2*s-o)*a+s*n+e}function V_(n,t){const e=1-n;return e*e*t}function G_(n,t){return 2*(1-n)*n*t}function W_(n,t){return n*n*t}function Gr(n,t,e,i){return V_(n,t)+G_(n,e)+W_(n,i)}function X_(n,t){const e=1-n;return e*e*e*t}function q_(n,t){const e=1-n;return 3*e*e*n*t}function Y_(n,t){return 3*(1-n)*n*n*t}function $_(n,t){return n*n*n*t}function Wr(n,t,e,i,r){return X_(n,t)+q_(n,e)+Y_(n,i)+$_(n,r)}class K_ extends Wn{constructor(t=new Mt,e=new Mt,i=new Mt,r=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new Mt){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Wr(t,r.x,s.x,o.x,a.x),Wr(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Z_ extends Wn{constructor(t=new L,e=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new L){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Wr(t,r.x,s.x,o.x,a.x),Wr(t,r.y,s.y,o.y,a.y),Wr(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class j_ extends Wn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class J_ extends Wn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Q_ extends Wn{constructor(t=new Mt,e=new Mt,i=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Mt){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Gr(t,r.x,s.x,o.x),Gr(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ih extends Wn{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Gr(t,r.x,s.x,o.x),Gr(t,r.y,s.y,o.y),Gr(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tv extends Wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Yl(a,c.x,l.x,u.x,h.x),Yl(a,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new Mt().fromArray(r))}return this}}var ev=Object.freeze({__proto__:null,ArcCurve:k_,CatmullRomCurve3:nh,CubicBezierCurve:K_,CubicBezierCurve3:Z_,EllipseCurve:eh,LineCurve:j_,LineCurve3:J_,QuadraticBezierCurve:Q_,QuadraticBezierCurve3:ih,SplineCurve:tv});class ci extends rn{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let v=0;const _=[],m=i/2;let d=0;E(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new xe(h,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(p,2));function E(){const g=new L,R=new L;let w=0;const A=(e-t)/i;for(let P=0;P<=s;P++){const S=[],x=P/s,C=x*(e-t)+t;for(let z=0;z<=r;z++){const D=z/r,W=D*c+a,B=Math.sin(W),I=Math.cos(W);R.x=C*B,R.y=-x*i+m,R.z=C*I,h.push(R.x,R.y,R.z),g.set(B,A,I).normalize(),f.push(g.x,g.y,g.z),p.push(D,1-x),S.push(v++)}_.push(S)}for(let P=0;P<r;P++)for(let S=0;S<s;S++){const x=_[S][P],C=_[S+1][P],z=_[S+1][P+1],D=_[S][P+1];(t>0||S!==0)&&(u.push(x,C,D),w+=3),(e>0||S!==s-1)&&(u.push(C,z,D),w+=3)}l.addGroup(d,w,0),d+=w}function y(g){const R=v,w=new Mt,A=new L;let P=0;const S=g===!0?t:e,x=g===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),v++;const C=v;for(let z=0;z<=r;z++){const W=z/r*c+a,B=Math.cos(W),I=Math.sin(W);A.x=S*I,A.y=m*x,A.z=S*B,h.push(A.x,A.y,A.z),f.push(0,x,0),w.x=B*.5+.5,w.y=I*.5*x+.5,p.push(w.x,w.y),v++}for(let z=0;z<r;z++){const D=R+z,W=C+z;g===!0?u.push(W,W+1,D):u.push(W+1,W,D),P+=3}l.addGroup(d,P,g===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Js extends ci{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Js(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xc extends rn{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new xe(s,3)),this.setAttribute("normal",new xe(s.slice(),3)),this.setAttribute("uv",new xe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const y=new L,g=new L,R=new L;for(let w=0;w<e.length;w+=3)p(e[w+0],y),p(e[w+1],g),p(e[w+2],R),c(y,g,R,E)}function c(E,y,g,R){const w=R+1,A=[];for(let P=0;P<=w;P++){A[P]=[];const S=E.clone().lerp(g,P/w),x=y.clone().lerp(g,P/w),C=w-P;for(let z=0;z<=C;z++)z===0&&P===w?A[P][z]=S:A[P][z]=S.clone().lerp(x,z/C)}for(let P=0;P<w;P++)for(let S=0;S<2*(w-P)-1;S++){const x=Math.floor(S/2);S%2===0?(f(A[P][x+1]),f(A[P+1][x]),f(A[P][x])):(f(A[P][x+1]),f(A[P+1][x+1]),f(A[P+1][x]))}}function l(E){const y=new L;for(let g=0;g<s.length;g+=3)y.x=s[g+0],y.y=s[g+1],y.z=s[g+2],y.normalize().multiplyScalar(E),s[g+0]=y.x,s[g+1]=y.y,s[g+2]=y.z}function u(){const E=new L;for(let y=0;y<s.length;y+=3){E.x=s[y+0],E.y=s[y+1],E.z=s[y+2];const g=m(E)/2/Math.PI+.5,R=d(E)/Math.PI+.5;o.push(g,1-R)}v(),h()}function h(){for(let E=0;E<o.length;E+=6){const y=o[E+0],g=o[E+2],R=o[E+4],w=Math.max(y,g,R),A=Math.min(y,g,R);w>.9&&A<.1&&(y<.2&&(o[E+0]+=1),g<.2&&(o[E+2]+=1),R<.2&&(o[E+4]+=1))}}function f(E){s.push(E.x,E.y,E.z)}function p(E,y){const g=E*3;y.x=t[g+0],y.y=t[g+1],y.z=t[g+2]}function v(){const E=new L,y=new L,g=new L,R=new L,w=new Mt,A=new Mt,P=new Mt;for(let S=0,x=0;S<s.length;S+=9,x+=6){E.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),g.set(s[S+6],s[S+7],s[S+8]),w.set(o[x+0],o[x+1]),A.set(o[x+2],o[x+3]),P.set(o[x+4],o[x+5]),R.copy(E).add(y).add(g).divideScalar(3);const C=m(R);_(w,x+0,E,C),_(A,x+2,y,C),_(P,x+4,g,C)}}function _(E,y,g,R){R<0&&E.x===1&&(o[y]=E.x-1),g.x===0&&g.z===0&&(o[y]=R/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xc(t.vertices,t.indices,t.radius,t.details)}}class li extends xc{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new li(t.radius,t.detail)}}class yc extends rn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new L,f=new L,p=[],v=[],_=[],m=[];for(let d=0;d<=i;d++){const E=[],y=d/i;let g=0;d===0&&o===0?g=.5/e:d===i&&c===Math.PI&&(g=-.5/e);for(let R=0;R<=e;R++){const w=R/e;h.x=-t*Math.cos(r+w*s)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(r+w*s)*Math.sin(o+y*a),v.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+g,1-y),E.push(l++)}u.push(E)}for(let d=0;d<i;d++)for(let E=0;E<e;E++){const y=u[d][E+1],g=u[d][E],R=u[d+1][E],w=u[d+1][E+1];(d!==0||o>0)&&p.push(y,g,w),(d!==i-1||c<Math.PI)&&p.push(g,R,w)}this.setIndex(p),this.setAttribute("position",new xe(v,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Mc extends rn{constructor(t=new ih(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,c=new L,l=new Mt;let u=new L;const h=[],f=[],p=[],v=[];_(),this.setIndex(v),this.setAttribute("position",new xe(h,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(p,2));function _(){for(let y=0;y<e;y++)m(y);m(s===!1?e:0),E(),d()}function m(y){u=t.getPointAt(y/e,u);const g=o.normals[y],R=o.binormals[y];for(let w=0;w<=r;w++){const A=w/r*Math.PI*2,P=Math.sin(A),S=-Math.cos(A);c.x=S*g.x+P*R.x,c.y=S*g.y+P*R.y,c.z=S*g.z+P*R.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,h.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=e;y++)for(let g=1;g<=r;g++){const R=(r+1)*(y-1)+(g-1),w=(r+1)*y+(g-1),A=(r+1)*y+g,P=(r+1)*(y-1)+g;v.push(R,w,P),v.push(w,A,P)}}function E(){for(let y=0;y<=e;y++)for(let g=0;g<=r;g++)l.x=y/e,l.y=g/r,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Mc(new ev[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class nv extends wr{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new qt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class iv extends wr{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class rh extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ko=new se,$l=new L,Kl=new L;class rv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pc,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;$l.setFromMatrixPosition(t.matrixWorld),e.position.copy($l),Kl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kl),e.updateMatrixWorld(),ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sv extends rv{constructor(){super(new mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ov extends rh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new sv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class av extends rh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class cv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Zl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Zl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);const $={sky:6275772,skyLight:9363408,ink:2042667,paper:15922154,paperShade:13225926,leaf:4166752,leafDark:2911047,grass:7319146,grassDark:5214039,dirt:13154701,road:6190199,roadLine:15264473,roof:11046552,roofAlt:15316900,roofTeal:8370096,haldi:15910724,tagBlue:5941730,chai:12154430,wood:10120005,steel:10135462,skin:14262908,skinDark:11565653,hair:2762278,red:13193276,pink:15239846,window:3886162},Ce=40,sh=`
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
`,lv=new L(.45,.8,.35).normalize(),Sc=[new L(0,1,0),new L(1,0,.18).normalize()],xi=2.2,Ei=n=>new qt(n);function uv(){const n=new li(Ce,40),t=new fn({uniforms:{uLight:{value:lv},uGrass:{value:Ei($.grass)},uGrassDark:{value:Ei($.grassDark)},uDirt:{value:Ei($.dirt)},uRoad:{value:Ei($.road)},uLine:{value:Ei($.roadLine)},uRoads:{value:Sc},uHalf:{value:xi/Ce}},vertexShader:`
      varying vec3 vDir;
      varying vec3 vNormalW;
      void main(){
        vDir = normalize(position);
        vNormalW = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }`,fragmentShader:`
      ${sh}
      uniform vec3 uLight, uGrass, uGrassDark, uDirt, uRoad, uLine;
      uniform vec3 uRoads[2];
      uniform float uHalf;
      varying vec3 vDir;
      varying vec3 vNormalW;
      void main(){
        vec3 d = normalize(vDir);
        // hard-edged painted patches
        float n1 = snoise(d*3.2) + 0.5*snoise(d*7.0);
        float n2 = snoise(d*5.5 + 11.0);
        vec3 c = uGrass;
        if (n1 > 0.35) c = uGrassDark;
        if (n2 > 0.62) c = uDirt;
        // roads with a dashed centre line
        for (int i=0;i<2;i++){
          float dist = abs(dot(d, uRoads[i]));
          float edge = uHalf + 0.004*snoise(d*30.0);
          if (dist < edge) {
            c = uRoad;
            if (snoise(d*9.0+3.0) > 0.45) c = mix(uRoad, uGrassDark, 0.35); // worn patches
            vec3 t = normalize(cross(uRoads[i], vec3(0.0,0.0,1.0)+uRoads[i].yzx*0.3));
            float along = atan(dot(d, cross(uRoads[i], t)), dot(d, t));
            if (dist < uHalf*0.07 && fract(along*28.0) < 0.5) c = uLine;
          }
        }
        float ndl = dot(normalize(vNormalW), uLight);
        float shade = ndl > 0.05 ? 1.0 : 0.68;
        gl_FragColor = vec4(c*shade, 1.0);
      }`}),e=new le(n,t);return e.name="planet",e}function hv(){const n=new yc(900,48,24),t=new fn({side:Ne,depthWrite:!1,uniforms:{uSky:{value:Ei($.sky)},uLight:{value:Ei($.skyLight)},uTime:{value:0}},vertexShader:`
      varying vec3 vDir;
      void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
      ${sh}
      uniform vec3 uSky, uLight; uniform float uTime;
      varying vec3 vDir;
      void main(){
        vec3 d = normalize(vDir);
        vec3 p = vec3(d.x*1.6, d.y*3.2, d.z*1.6) + vec3(uTime*0.004, 0.0, 0.0);
        float n = snoise(p*1.4) + 0.55*snoise(p*3.7) + 0.25*snoise(p*9.0);
        vec3 c = uSky;
        if (n > 0.55) c = uLight;
        if (n > 0.55 && n < 0.6) c = mix(uSky, uLight, 0.5);
        gl_FragColor = vec4(c,1.0);
      }`}),e=new le(n,t);return e.name="sky",e.renderOrder=-1,e}const oh=new L(0,1,0);function ni(n,t){const e=Di.degToRad(n),i=Di.degToRad(t);return new L(Math.cos(e)*Math.sin(i),Math.sin(e),Math.cos(e)*Math.cos(i))}function nr(n,t=0,e=0,i=1){const r=new Hn().setFromUnitVectors(oh,n),s=new Hn().setFromAxisAngle(n,t),o=n.clone().multiplyScalar(Ce+e);return new se().compose(o,s.multiply(r),new L(i,i,i))}function jl(n,t,e=0,i=0){return nr(t,e,i).decompose(n.position,n.quaternion,n.scale),n}function fv(n,t){const e=new Hn().setFromUnitVectors(oh,n),i=new L(0,0,1).applyQuaternion(e),r=t.clone().sub(n.clone().multiplyScalar(t.dot(n))).normalize();let s=i.angleTo(r);return new L().crossVectors(i,r).dot(n)<0&&(s=-s),s}function Xa(n,t){return Math.acos(Di.clamp(n.dot(t),-1,1))}function Vo(n){let t=1/0;for(const e of Sc)t=Math.min(t,Math.abs(Math.asin(Di.clamp(n.dot(e),-1,1)))*Ce);return t}function ah(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new rn;let l=0;for(let u=0;u<n.length;++u){const h=n[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(e){let u=0;const h=[];for(let f=0;f<n.length;++f){const p=n[f].index;for(let v=0;v<p.count;++v)h.push(p.getX(v)+u);u+=n[f].attributes.position.count}c.setIndex(h)}for(const u in s){const h=Jl(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const p=[];for(let _=0;_<o[u].length;++_)p.push(o[u][_][f]);const v=Jl(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(v)}}return c}function Jl(n){let t,e,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const o=new t(s),a=new hn(o,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let f=0,p=u.count;f<p;f++)for(let v=0;v<e;v++){const _=u.getComponent(f,v);a.setComponent(f+h,v,_)}}else o.set(u.array,c);c+=u.count*e}return r!==void 0&&(a.gpuType=r),a}const Yr=new H_(new Uint8Array([150,150,150,255,255,255,255,255]),2,1,en);Yr.minFilter=Yr.magFilter=Ve;Yr.generateMipmaps=!1;Yr.needsUpdate=!0;const Go=new Map;function xn(n,t={}){const e=`${n}|${t.emissive||0}|${t.side||0}`;return Go.has(e)||Go.set(e,new nv({color:n,gradientMap:Yr,emissive:t.emissive||0,side:t.side??Fn})),Go.get(e)}function dv(n){return new Qr({map:n,toneMapped:!1})}class pv{constructor(){this.parts=new Map}add(t,e,i){const r=t.index?t.toNonIndexed():t.clone();r.applyMatrix4(e);for(const s of Object.keys(r.attributes))s!=="position"&&s!=="normal"&&r.deleteAttribute(s);this.parts.has(i)||this.parts.set(i,[]),this.parts.get(i).push(r)}addGroup(t,e){t.updateMatrixWorld(!0),t.traverse(i=>{if(!i.isMesh)return;const r=e.clone().multiply(i.matrixWorld);this.add(i.geometry,r,i.userData.color??i.material.color.getHex())})}build(){const t=new pe;for(const[e,i]of this.parts){const r=ah(i,!1),s=new le(r,xn(e));t.add(s)}return t.name="town",t}}function Ct(n,t,e=0,i=0,r=0,s=0,o=0,a=0){const c=new le(n,xn(t));return c.position.set(e,i,r),c.rotation.set(s,o,a),c.userData.color=t,c}const fe=(n,t,e)=>new ne(n,t,e),me=(n,t,e,i=10)=>new ci(n,t,e,i),mn={spawn:ni(-3,0),raju:ni(5.5,9),pinky:ni(-5.5,-12),lucky:ni(-5.5,24),sharma:ni(9,-26),tower:ni(13,4),addMoney:ni(-6.5,3.5)},Ec=[];function Qi(n,t){Ec.push({dir:n.clone(),radius:t})}function $r(n,{w:t=512,h:e=256,bg:i="#F2F3EA",fg:r="#1F2B2B",font:s="Gochi Hand",size:o=80,border:a=!0}={}){const c=document.createElement("canvas");c.width=t,c.height=e;const l=c.getContext("2d");l.fillStyle=i,l.fillRect(0,0,t,e),a&&(l.strokeStyle=r,l.lineWidth=10,l.strokeRect(8,8,t-16,e-16)),l.fillStyle=r,l.textAlign="center",l.textBaseline="middle";const u=Array.isArray(n)?n:[n];u.forEach((f,p)=>{const v=p===0?o:o*.55;l.font=`${v}px "${s}", "Comic Sans MS", cursive`,l.fillText(f,t/2,e/2+(p-(u.length-1)/2)*o*.8)});const h=new th(c);return h.colorSpace=Ue,h.anisotropy=4,h}function mv(n=1){const e=document.createElement("canvas");e.width=e.height=256;const i=e.getContext("2d");i.fillStyle="#fff",i.fillRect(0,0,256,256);const r=256/29;let s=n*9301+49297;const o=()=>(s=(s*9301+49297)%233280)/233280;i.fillStyle="#1F2B2B";for(let c=0;c<25;c++)for(let l=0;l<25;l++)c<7&&l<7||c>17&&l<7||c<7&&l>17||o()>.52&&i.fillRect((c+2)*r,(l+2)*r,r+.5,r+.5);for(const[c,l]of[[0,0],[18,0],[0,18]])i.fillRect((c+2)*r,(l+2)*r,7*r,7*r),i.fillStyle="#fff",i.fillRect((c+3)*r,(l+3)*r,5*r,5*r),i.fillStyle="#1F2B2B",i.fillRect((c+4)*r,(l+4)*r,3*r,3*r);const a=new th(e);return a.colorSpace=Ue,a}function lr(n,t,e){return new le(new Fi(t,e),dv(n))}function gv(n){const t=new pe,e=3.2+n()*2.4,i=3+n()*2,r=n()>.6?2:1,s=2.6*r,o=n()>.25?$.paper:$.paperShade,a=[$.roof,$.roofAlt,$.roofTeal,$.roof][Math.floor(n()*4)];if(t.add(Ct(fe(e,s,i),o,0,s/2,0)),n()>.45)t.add(Ct(fe(e+.2,.35,i+.2),$.paperShade,0,s+.17,0)),t.add(Ct(me(.45,.45,.9,8),$.ink,e*.25,s+.8,-i*.2));else{const c=Ct(new ci(.01,Math.max(e,i)*.78,1.6,4,1),a,0,s+.8,0,0,Math.PI/4,0);c.scale.set(e/Math.max(e,i),1,i/Math.max(e,i)),t.add(c)}for(let c=0;c<r;c++){const l=1.5+c*2.6;t.add(Ct(fe(.7,.8,.06),$.window,-e*.25,l,i/2+.01)),t.add(Ct(fe(.7,.8,.06),$.window,e*.25,l,i/2+.01))}return n()>.5&&t.add(Ct(fe(e*.9,.12,.9),$.paperShade,0,2.5,i/2+.45)),t.add(Ct(fe(.9,1.7,.06),$.wood,0,.85,i/2+.02)),{group:t,radius:Math.max(e,i)*.62}}function _v(n){const t=new pe,e=1.6+n()*1.4;t.add(Ct(me(.16,.24,e,6),$.wood,0,e/2,0));const i=2+Math.floor(n()*3);for(let r=0;r<i;r++){const s=.9+n()*.8,o=n()>.4?$.leaf:$.leafDark;t.add(Ct(new li(s,0),o,(n()-.5)*1.4,e+s*.6+r*.35,(n()-.5)*1.4,n(),n(),n()))}return{group:t,radius:.6}}function vv(){const n=new pe;return n.add(Ct(me(.12,.16,7,6),$.steel,0,3.5,0)),n.add(Ct(fe(1.8,.12,.12),$.steel,0,6.6,0)),n.add(Ct(me(.22,.22,.6,6),$.paperShade,.5,6.1,.15)),n}function xv(n){const t=new pe;t.add(Ct(fe(n,.3,.08),$.paper,0,.75,0));for(let e=-n/2;e<=n/2+.01;e+=1.5)t.add(Ct(fe(.12,.8,.12),$.paper,e,.4,0));return t}function yv(n){const t=new pe;return t.add(Ct(fe(.5,.45,1.5),n,0,.55,0)),t.add(Ct(fe(.45,.9,.25),n,0,.95,.6)),t.add(Ct(me(.28,.28,.2,10),$.ink,0,.28,.65,0,0,Math.PI/2)),t.add(Ct(me(.28,.28,.2,10),$.ink,0,.28,-.55,0,0,Math.PI/2)),t.add(Ct(fe(.9,.08,.08),$.steel,0,1.45,.65)),t}function Wo({name:n,sub:t,tarp:e,counter:i,extras:r}){const s=new pe;s.add(Ct(fe(3.6,1.1,1.4),i,0,.55,.6)),s.add(Ct(fe(3.8,.1,1.6),$.wood,0,1.15,.6));for(const u of[-1.75,1.75])for(const h of[-.9,1.2])s.add(Ct(me(.07,.07,2.9,6),$.steel,u,1.45,h));const o=Ct(fe(4.4,.12,2.9),e,0,2.95,.15,-.12,0,0);s.add(o),s.add(Ct(fe(4.4,.4,.06),e,0,2.75,1.6));const a=lr($r([n,t],{size:74}),2.8,.9);a.position.set(0,3.55,.95),a.rotation.x=-.12,s.add(a);const c=lr(mv(n.length*7),.75,.75);c.position.set(1.25,1.65,1.38),s.add(c);const l=lr($r("UPI",{w:256,h:96,size:64,bg:"#5AA9E2",fg:"#ffffff",border:!1}),.75,.28);l.position.set(1.25,2.15,1.38),s.add(l);for(const u of r)s.add(u);return s}function Mv(){const n=[];n.push(Ct(me(.32,.38,.55,12),$.steel,-.9,1.48,.6)),n.push(Ct(me(.05,.05,.4,6),$.steel,-.5,1.55,.6,0,0,-1.1)),n.push(Ct(me(.45,.45,.25,12),$.ink,-.9,1.15+.12,.6));for(let t=0;t<4;t++)n.push(Ct(me(.09,.07,.22,8),$.chai,.1+t*.25,1.32,.95));return n}function Sv(){const n=[];n.push(Ct(me(.55,.45,.3,14),$.ink,-.8,1.35,.6));for(let t=0;t<5;t++)n.push(Ct(new li(.15,0),$.haldi,.1+t%3*.3,1.33,.7+Math.floor(t/3)*.3));for(const t of[-1.5,1.5])n.push(Ct(me(.45,.45,.15,12),$.ink,t,.45,1.35,0,0,Math.PI/2));return n}function Ev(){const n=[];for(let t=0;t<6;t++)n.push(Ct(fe(.18,.5,.03),t%2?$.red:$.haldi,-1.5+t*.55,2.4,1.55));return n.push(Ct(fe(1,.5,.6),$.leaf,-.6,1.45,.6)),n}function bv(){const n=new pe;n.add(Ct(me(1.6,2.1,1,8),$.paperShade,0,.5,0)),n.add(Ct(me(1.1,1.5,7,8),$.paper,0,4.5,0));for(let i=2;i<8;i+=1.8)n.add(Ct(me(1.25,1.25,.22,8),$.tagBlue,0,i,0));n.add(Ct(me(1.6,1.6,.25,8),$.ink,0,8.1,0));const t=new le(new li(.9,1),xn($.haldi,{emissive:7033344}));t.position.y=9.1,t.name="beacon",n.add(t),n.add(Ct(new Js(1.4,1.2,8),$.roof,0,10.4,0));const e=lr($r(["ChaiPay Escrow","holds USDT, not us"],{size:64}),3,1);return e.position.set(0,3,1.6),n.add(e),n}function wv(){const n=new pe;n.add(Ct(fe(4,2.8,3.2),$.roofAlt,0,1.4,0)),n.add(Ct(fe(4.6,.3,3.8),$.ink,0,2.95,0)),n.add(Ct(fe(2.2,.9,.9),$.wood,0,.45,2.2)),n.add(Ct(fe(.3,.55,.05),$.ink,.5,1.2,2.2)),n.add(Ct(me(.06,.06,.6,6),$.steel,-.8,1.2,2.1)),n.add(Ct(me(.25,.1,.3,8),$.haldi,-.8,1.55,2.1));const t=lr($r(["Sharma Ji","cash partner"],{size:70}),2.6,.9);return t.position.set(0,2.2,1.62),n.add(t),n}function Tv(){const n=new pe;n.add(Ct(me(.08,.08,2.2,6),$.wood,-.7,1.1,0)),n.add(Ct(me(.08,.08,2.2,6),$.wood,.7,1.1,0));const t=lr($r(["Add money","top up USDT"],{size:70,bg:"#F2C744"}),1.9,.95);return t.position.set(0,1.85,.06),n.add(t),n}function Av(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Xo(n){const t=n()*2-1,e=n()*Math.PI*2,i=Math.sqrt(1-t*t);return new L(i*Math.cos(e),t,i*Math.sin(e))}function Rv(n){Ec.length=0;const t=Av(42),e=new pv,i={},r=_=>{let m=null,d=1/0;for(const y of Sc){const g=Math.abs(_.dot(y));g<d&&(d=g,m=y)}const E=_.clone().sub(m.clone().multiplyScalar(_.dot(m))).normalize();return fv(_,E)},s=(_,m,d,E,y=0)=>{const g=r(d);jl(m,d,g,y),n.add(m),Qi(d,E),i[_]={group:m,dir:d,yaw:g}};s("raju",Wo({name:"Raju's Chai",sub:"garam chai",tarp:$.red,counter:$.paper,extras:Mv()}),mn.raju,2.1),s("pinky",Wo({name:"Pinky Vada Pav",sub:"fresh & hot",tarp:$.pink,counter:$.haldi,extras:Sv()}),mn.pinky,2.1),s("lucky",Wo({name:"Lucky Paan",sub:"meetha paan",tarp:$.leaf,counter:$.paper,extras:Ev()}),mn.lucky,2.1),s("sharma",wv(),mn.sharma,2.6);{const _=bv();jl(_,mn.tower,0),n.add(_),Qi(mn.tower,2.2),i.tower={group:_,dir:mn.tower,yaw:0}}s("addMoney",Tv(),mn.addMoney,.6);const o=Object.values(mn),a=(_,m)=>o.some(d=>Xa(d,_)*Ce<m),c=[],l=(_,m)=>c.every(d=>Xa(d.dir,_)*Ce>d.r+m+.6);let u=0;for(;c.length<95&&u<6e3;){u++;const _=Xo(t),m=Vo(_);if(!(m>xi+2.6&&m<xi+6)&&t()>.35||m<xi+2.6||a(_,7))continue;const E=gv(t);l(_,E.radius)&&(e.addGroup(E.group,nr(_,r(_))),c.push({dir:_,r:E.radius}),Qi(_,E.radius))}let h=0;for(u=0;h<170&&u<8e3;){u++;const _=Xo(t);if(Vo(_)<xi+1||a(_,4.5)||!l(_,.8))continue;const m=_v(t);e.addGroup(m.group,nr(_,t()*6.28,0,.85+t()*.5)),c.push({dir:_,r:.8}),Qi(_,.55),h++}const f=[];for(let _=-180;_<180;_+=13){const m=ni(-3.1/Ce*(180/Math.PI),_);if(a(m,9))continue;const d=nr(m,0);e.addGroup(vv(),d),Qi(m,.3),f.push(m.clone().multiplyScalar(Ce+6.6))}for(let _=0;_<f.length;_++){const m=f[_],d=f[(_+1)%f.length];if(!(m.distanceTo(d)>14))for(const E of[-.7,.7]){const y=[];for(let R=0;R<=12;R++){const w=R/12,A=m.clone().lerp(d,w),P=Math.sin(Math.PI*w)*.9;A.setLength(A.length()-P),A.y+=E*.05,y.push(A)}const g=new Mc(new nh(y),12,.035,4);e.add(g,new se,$.ink)}}let p=0;u=0;for(let _=0;p<26&&u<2e4;u++){const m=Xo(t),d=Vo(m);if(d<xi+.6||d>xi+2||a(m,4)||!l(m,1.2))continue;_=p++;const E=r(m)+Math.PI/2;_%3===0?(e.addGroup(yv([$.red,$.tagBlue,$.haldi,$.roofTeal][_%4]),nr(m,E)),Qi(m,.8)):e.addGroup(xv(5),nr(m,E)),c.push({dir:m,r:1.2})}const v=e.build();return n.add(v),{town:v,landmarks:i}}const ue=(n,t)=>new le(n,xn(t));function ch(n={}){const t=n.skin??$.skin,e=new pe,i=new pe;e.add(i);const r=new ne(.22,.75,.24);r.translate(0,-.375,0);const s=ue(r,n.pants??$.window),o=ue(r,n.pants??$.window);s.position.set(-.14,.8,0),o.position.set(.14,.8,0);const a=new ne(.24,.12,.34);a.translate(0,-.75,.05),s.add(ue(a,$.paper)),o.add(ue(a,$.paper)),i.add(s,o);const c=ue(new ne(.62,.72,.36),n.shirt??$.paper);if(c.position.y=1.15,i.add(c),n.vest){const E=ue(new ne(.64,.5,.38),n.vest);E.position.y=1.2,i.add(E)}const l=new ne(.17,.62,.18);l.translate(0,-.31,0);const u=ue(l,n.sleeves??n.shirt??$.paper),h=ue(l,n.sleeves??n.shirt??$.paper);u.position.set(-.42,1.48,0),h.position.set(.42,1.48,0);const f=new ne(.15,.14,.16);f.translate(0,-.66,0),u.add(ue(f,t)),h.add(ue(f,t)),i.add(u,h);const p=new pe;p.position.y=1.78,i.add(p);const v=ue(new ne(.46,.5,.44),t);p.add(v);const _=ue(new ne(.5,.2,.48),n.hair??$.hair);_.position.set(0,.2,-.02),p.add(_);const m=ue(new ne(.5,.38,.12),n.hair??$.hair);m.position.set(0,.04,-.2),p.add(m);for(const E of[-.1,.1]){const y=ue(new ne(.06,.08,.02),$.ink);y.position.set(E,.02,.225),p.add(y)}if(n.mustache){const E=ue(new ne(.26,.05,.03),$.ink);E.position.set(0,-.1,.23),p.add(E)}if(n.glasses){const E=ue(new ne(.34,.03,.03),$.ink);E.position.set(0,.02,.235),p.add(E);for(const y of[-.1,.1]){const g=ue(new ne(.13,.11,.02),$.steel);g.position.set(y,.02,.24),p.add(g)}}if(n.cap){const E=ue(new ne(.52,.14,.5),n.cap);E.position.set(0,.3,0),p.add(E);const y=ue(new ne(.46,.05,.28),n.cap);y.position.set(0,.25,.32),p.add(y)}if(n.bun){const E=ue(new li(.16,0),n.hair??$.hair);E.position.set(0,.32,-.12),p.add(E)}if(n.towel){const E=ue(new ne(.12,.6,.38),n.towel);E.position.set(.32,1.35,0),i.add(E)}if(n.dupatta){const E=ue(new ne(.66,.14,.4),n.dupatta);E.position.set(0,1.45,0),E.rotation.z=.3,i.add(E)}if(n.bag){const E=ue(new ne(.3,.32,.12),n.bag);E.position.set(.3,1,-.22),i.add(E);const y=ue(new ne(.06,.8,.4),n.bag);y.position.set(0,1.25,0),y.rotation.z=.6,i.add(y)}const d=new pe;return d.position.set(0,-.72,.1),h.add(d),{group:e,body:i,legL:s,legR:o,armL:u,armR:h,head:p,holdSlot:d,phase:Math.random()*6}}function Ql(n,t,e,i){const r=e>.2;n.phase+=t*(r?2.2+e*1.1:1.5);const s=Math.sin(n.phase*2);if(r){const o=Math.min(.9,.35+e*.08);n.legL.rotation.x=s*o,n.legR.rotation.x=-s*o,n.armL.rotation.x=-s*o*.8,n.holding||(n.armR.rotation.x=s*o*.8),n.body.position.y=Math.abs(Math.cos(n.phase*2))*.08}else{const o=Math.min(1,t*8);n.legL.rotation.x+=(0-n.legL.rotation.x)*o,n.legR.rotation.x+=(0-n.legR.rotation.x)*o,n.armL.rotation.x+=(0-n.armL.rotation.x)*o,n.holding||(n.armR.rotation.x+=(0-n.armR.rotation.x)*o),n.body.position.y=Math.sin(i*2+n.phase)*.02}if(n.holding&&(n.armR.rotation.x+=(-1.2-n.armR.rotation.x)*Math.min(1,t*6)),n.cheer>0){n.cheer-=t;const o=Math.abs(Math.sin(n.cheer*9));n.body.position.y=o*.45,n.armL.rotation.z=-2.6,n.armR.rotation.z=2.6,n.cheer<=0&&(n.armL.rotation.z=n.armR.rotation.z=0)}}const bc={player:{shirt:$.paper,sleeves:$.paper,pants:$.window,cap:$.haldi,bag:$.tagBlue,hair:$.hair},raju:{shirt:$.paper,vest:$.paperShade,pants:$.wood,mustache:!0,towel:$.red,skin:$.skinDark},pinky:{shirt:$.pink,pants:$.window,dupatta:$.haldi,bun:!0},lucky:{shirt:$.haldi,pants:$.ink,cap:$.red,skin:$.skinDark},sharma:{shirt:$.paper,pants:$.paperShade,glasses:!0,hair:$.steel,mustache:!0}},Or=new Hn,Cv=new L;class Pv{constructor(t,e){this.p=t,this.dir=e.clone().normalize(),this.fwd=new L(0,1,0).cross(this.dir).normalize().negate(),this.fwd.lengthSq()<.5&&this.fwd.set(1,0,0),this.speed=0,this.input={x:0,y:0,run:!1},this.enabled=!1,this.apply()}face(t){const e=t.clone().sub(this.dir.clone().multiplyScalar(t.dot(this.dir))).normalize();e.lengthSq()>.5&&this.fwd.copy(e),this.apply()}update(t){const{x:e,y:i,run:r}=this.enabled?this.input:{x:0,y:0,run:!1};Math.abs(e)>.05&&(Or.setFromAxisAngle(this.dir,-e*2.6*t),this.fwd.applyQuaternion(Or));const s=i*(r?9:5);if(this.speed+=(s-this.speed)*Math.min(1,t*8),Math.abs(this.speed)>.01){const o=Cv.crossVectors(this.dir,this.fwd).normalize();Or.setFromAxisAngle(o,this.speed*t/Ce);const a=this.dir.clone().applyQuaternion(Or).normalize();this.blocked(a)?this.speed*=.3:(this.dir.copy(a),this.fwd.applyQuaternion(Or))}this.fwd.sub(this.dir.clone().multiplyScalar(this.fwd.dot(this.dir))).normalize(),this.apply()}blocked(t){for(const e of Ec){const i=Math.acos(Di.clamp(t.dot(e.dir),-1,1))*Ce;if(i<e.radius+.45){const r=Math.acos(Di.clamp(this.dir.dot(e.dir),-1,1))*Ce;if(i<r)return!0}}return!1}apply(){const t=this.p.group;t.position.copy(this.dir).multiplyScalar(Ce);const e=new se().makeBasis(new L().crossVectors(this.dir,this.fwd),this.dir,this.fwd);t.quaternion.setFromRotationMatrix(e)}get position(){return this.p.group.position}}class Lv{constructor(t){this.cam=t,this.pos=new L,this.look=new L,this.up=new L(0,1,0),this.orbit=0,this.initialised=!1}desired(t){const e=t.dir,i=t.fwd.clone().applyAxisAngle(e,this.orbit).negate(),r=t.dir.clone().multiplyScalar(Ce).addScaledVector(e,6.2).addScaledVector(i,10.5),s=t.dir.clone().multiplyScalar(Ce).addScaledVector(e,1.8).addScaledVector(i,-3);return{pos:r,look:s,up:e}}snap(t){const e=this.desired(t);this.pos.copy(e.pos),this.look.copy(e.look),this.up.copy(e.up),this.initialised=!0,this.apply()}update(t,e){const i=this.desired(t),r=1-Math.exp(-e*5);this.pos.lerp(i.pos,r),this.look.lerp(i.look,Math.min(1,r*1.6)),this.up.lerp(i.up,r).normalize(),this.orbit*=1-Math.min(1,e*.8),this.apply()}apply(){this.cam.position.copy(this.pos),this.cam.up.copy(this.up),this.cam.lookAt(this.look)}}class Iv{constructor(t){this.renderer=t;const e={type:Mr};this.color=new zn(1,1,e),this.color.depthTexture=new _c(1,1),this.normals=new zn(1,1,e),this.normalMat=new iv,this.quadCam=new mc(-1,1,1,-1,0,1),this.material=new fn({uniforms:{tColor:{value:this.color.texture},tDepth:{value:this.color.depthTexture},tNormal:{value:this.normals.texture},uRes:{value:new Mt(1,1)},uInk:{value:new qt($.ink)},uNear:{value:.1},uFar:{value:2e3},uTime:{value:0},uThick:{value:1.25}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
        uniform sampler2D tColor, tDepth, tNormal;
        uniform vec2 uRes; uniform vec3 uInk; uniform float uNear, uFar, uTime, uThick;
        varying vec2 vUv;
        float lin(float z){ float n=uNear, f=uFar; return (2.0*n*f)/(f+n-(z*2.0-1.0)*(f-n)); }
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
        float depthAt(vec2 uv){ return lin(texture2D(tDepth, uv).r); }
        vec3 normAt(vec2 uv){ return texture2D(tNormal, uv).rgb; }
        void main(){
          // wobble: offset changes in steps (~6x per second), like redrawn frames
          float t = floor(uTime*6.0);
          vec2 cell = floor(vUv*uRes/24.0);
          vec2 wob = (vec2(hash(cell+t), hash(cell+t+7.3))-0.5) * 1.6 / uRes;
          vec2 uv = vUv + wob;
          vec2 px = uThick / uRes;
          float d = depthAt(uv);
          float dx = 0.0, dy = 0.0;
          vec3 nx = vec3(0.0), ny = vec3(0.0);
          for (int i=-1;i<=1;i++) for (int j=-1;j<=1;j++){
            vec2 o = vec2(float(i),float(j))*px;
            float kx = float(i) * (j==0 ? 2.0 : 1.0);
            float ky = float(j) * (i==0 ? 2.0 : 1.0);
            float s = depthAt(uv+o);
            vec3 n = normAt(uv+o);
            dx += s*kx; dy += s*ky; nx += n*kx; ny += n*ky;
          }
          float depthEdge = sqrt(dx*dx+dy*dy) / max(d, 1.0);
          float normalEdge = sqrt(dot(nx,nx)+dot(ny,ny));
          float edge = max(step(0.22, depthEdge), step(0.9, normalEdge));
          if (d > uFar*0.8) edge = 0.0; // never outline the sky
          vec3 col = texture2D(tColor, vUv).rgb;
          gl_FragColor = vec4(mix(col, uInk, edge*0.92), 1.0);
          #include <colorspace_fragment>
        }`}),this.quad=new le(new Fi(2,2),this.material),this.quadScene=new Qu,this.quadScene.add(this.quad)}setSize(t,e,i){const r=Math.floor(t*i),s=Math.floor(e*i);this.color.setSize(r,s),this.normals.setSize(r,s),this.material.uniforms.uRes.value.set(r,s),this.material.uniforms.uThick.value=Math.max(1,i*.9)}render(t,e,i,r=[]){const s=this.renderer;this.material.uniforms.uNear.value=e.near,this.material.uniforms.uFar.value=e.far,this.material.uniforms.uTime.value=i,s.setRenderTarget(this.color),s.render(t,e);const o=t.background;t.background=null;for(const a of r)a.visible=!1;t.overrideMaterial=this.normalMat,s.setRenderTarget(this.normals),s.setClearColor(0,1),s.clear(),s.render(t,e),t.overrideMaterial=null;for(const a of r)a.visible=!0;t.background=o,s.setRenderTarget(null),s.render(this.quadScene,this.quadCam)}}const Dv={C:["#####","#....","#....","#....","#####"],H:["#...#","#...#","#####","#...#","#...#"],A:["#####","#...#","#####","#...#","#...#"],I:["#####","..#..","..#..","..#..","#####"],N:["##..#","#.#.#","#.#.#","#.#.#","#..##"],G:["#####","#....","#.###","#...#","#####"],R:["####.","#...#","####.","#..#.","#...#"]};function Uv(n){const t=Dv[n],e=[];return t.forEach((i,r)=>[...i].forEach((s,o)=>{if(s!=="#")return;const a=new ne(1,1,1.4);a.translate(o-2,2-r,0),e.push(a)})),new le(ah(e),xn($.paper))}function Nv(){const n=new pe;return["CHAI","NAGAR"].forEach((e,i)=>{[...e].forEach((r,s)=>{const o=Uv(r);o.position.set((s-(e.length-1)/2)*6.2,(.5-i)*6.8,0),o.rotation.y=(s%2?1:-1)*.06,o.userData.base=o.position.clone(),o.userData.k=s+i*3,n.add(o)})}),n.scale.setScalar(.62),n.position.set(0,2.2,-42),n.userData.update=e=>{n.children.forEach(i=>{i.position.y=i.userData.base.y+Math.sin(e*1.4+i.userData.k*.7)*.25}),n.rotation.x=Math.sin(e*.5)*.04,n.rotation.y=Math.sin(e*.37)*.08},n}function Ov(){const n=new pe,t=new le(new ne(.9,.06,.62),xn($.paper));n.add(t);const e=new le(new Js(.45,.32,3),xn($.paperShade));e.rotation.set(Math.PI/2,0,0),e.scale.set(1,1,.12),e.position.set(0,.04,0),n.add(e);const i=new le(new ci(.11,.11,.04,10),xn($.haldi,{emissive:3812352}));return i.position.set(0,.06,.05),n.add(i),n.scale.setScalar(1.3),n}class Fv{constructor(t){this.scene=t,this.mesh=Ov(),this.scene.add(this.mesh),this.anim=null,this.hover=null}fly(t,e,{height:i=7,duration:r=2.2}={}){return this.hover=null,new Promise(s=>{this.anim={from:t.clone(),to:e.clone(),t:0,height:i,duration:r,resolve:s}})}park(t){this.anim=null,this.hover={at:t.clone(),t:0}}update(t){if(this.anim){const e=this.anim;e.t=Math.min(1,e.t+t/e.duration);const i=e.t<.5?2*e.t*e.t:1-Math.pow(-2*e.t+2,2)/2,r=e.from.clone().normalize(),s=e.to.clone().normalize(),o=new L().copy(r).lerp(s,i).normalize(),a=Di.lerp(e.from.length(),e.to.length(),i)+Math.sin(Math.PI*i)*e.height,c=o.multiplyScalar(a),l=this.mesh.position.clone();this.mesh.position.copy(c);const u=c.clone().sub(l);u.lengthSq()>1e-6&&(this.mesh.up.copy(c).normalize(),this.mesh.lookAt(c.clone().add(u)),this.mesh.rotateZ(Math.sin(e.t*18)*.25)),e.t>=1&&(this.anim=null,e.resolve())}else if(this.hover){this.hover.t+=t;const e=this.hover,i=e.at.clone().normalize();this.mesh.position.copy(e.at).addScaledVector(i,Math.sin(e.t*2.5)*.25),this.mesh.up.copy(i),this.mesh.rotateOnWorldAxis(i,t*1.2)}}dispose(){this.scene.remove(this.mesh)}}class Bv{constructor(t){this.scene=t,this.bits=[],this.geo=new Fi(.22,.12),this.mats=[$.haldi,$.paper,$.tagBlue,$.pink].map(e=>new Qr({color:e,side:_n}))}burst(t,e=70){const i=t.clone().normalize();for(let r=0;r<e;r++){const s=new le(this.geo,this.mats[r%this.mats.length]);s.position.copy(t).addScaledVector(i,2);const o=new L(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(9),a=i.clone().multiplyScalar(7+Math.random()*5).add(o);this.scene.add(s),this.bits.push({m:s,v:a,life:2.2+Math.random(),spin:new L(Math.random()*9,Math.random()*9,0)})}}update(t){for(let e=this.bits.length-1;e>=0;e--){const i=this.bits[e],r=i.m.position.clone().normalize().multiplyScalar(-14);i.v.addScaledVector(r,t).multiplyScalar(1-t*1.6),i.m.position.addScaledVector(i.v,t),i.m.rotation.x+=i.spin.x*t,i.m.rotation.y+=i.spin.y*t,i.life-=t,(i.life<=0||i.m.position.length()<Ce)&&(this.scene.remove(i.m),this.bits.splice(e,1))}}}function zv(){const n=new pe,t=new le(new ci(.13,.1,.28,10),xn($.paperShade)),e=new le(new ci(.12,.095,.22,10),xn($.chai));e.position.y=-.02,n.add(t,e);const i=[];for(let r=0;r<3;r++){const s=new le(new li(.07,0),new Qr({color:16777215,transparent:!0,opacity:.8}));s.userData.o=r/3,n.add(s),i.push(s)}return n.userData.update=r=>{for(const s of i){const o=(r*.7+s.userData.o)%1;s.position.set(Math.sin(o*9+s.userData.o*5)*.06,.2+o*.6,0),s.material.opacity=.8*(1-o),s.scale.setScalar(.6+o)}},n}const Gt=n=>document.querySelector(n),yi=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Et={hideLoading(){const n=Gt("#loading");n.classList.add("gone"),setTimeout(()=>n.remove(),700)},showTitle(n){const t=Gt("#title");t.hidden=!1;const e=()=>{t.hidden=!0,removeEventListener("keydown",i),n()},i=r=>{(r.key==="Enter"||r.key===" ")&&e()};Gt("#start").onclick=e,addEventListener("keydown",i),Gt("#start").focus()},showHud(){Gt("#hud").hidden=!1,Gt("#feed-btn").hidden=!1},setBalance(n){if(!n){Gt("#hud-inr").textContent="₹ —",Gt("#hud-usdt").textContent="offline";return}Gt("#hud-inr").textContent=`₹ ${Math.floor(n.inr).toLocaleString("en-IN")}`,Gt("#hud-usdt").textContent=`${n.usdt.toFixed(2)} USDT`},hint(n){const t=Gt("#hint");t.hidden=!n,n&&(t.textContent=n),Gt("#talk").hidden=!n||!Et.touch},toast(n,t=2600){const e=Gt("#toast");e.textContent=n,e.hidden=!1,clearTimeout(Et._toast),Et._toast=setTimeout(()=>e.hidden=!0,t)},feed:new Map,upsertFeed(n){Et.feed.set(n.id,n);const t=Gt("#feed-list"),e=[...Et.feed.values()].sort((i,r)=>Number(r.id)-Number(i.id));t.innerHTML=e.length?e.map(i=>`<li><span class="f-id">#${yi(i.id)}</span><span class="f-what">₹${yi(i.inr)} to ${yi(i.to)}</span>
              <span class="f-st st-${yi(i.status)}">${yi(i.status)}</span>
              ${i.url?`<a href="${yi(i.url)}" target="_blank" rel="noopener">tx</a>`:""}</li>`).join(""):'<li class="f-empty">No envelopes yet. Buy something from a stall.</li>',Gt("#feed-count").textContent=e.length?String(e.length):""}};let bi=null,rr=null;Et.status=function(t,e,i=""){rr?.(),rr=null,clearInterval(bi),bi=null;const r=Gt("#dialogue");r.hidden=!1,r.dataset.tone="busy",Gt("#dlg-name").textContent=t,Gt("#dlg-text").textContent=e,Gt("#dlg-extra").innerHTML=i,Gt("#dlg-choices").innerHTML="",Gt("#dlg-next").hidden=!0};Et.say=function(t,e,{choices:i=null,html:r="",tone:s=""}={}){rr?.();const o=Gt("#dialogue"),a=Gt("#dlg-name"),c=Gt("#dlg-text"),l=Gt("#dlg-extra"),u=Gt("#dlg-choices"),h=Gt("#dlg-next");o.hidden=!1,o.dataset.tone=s,a.textContent=t,l.innerHTML=r,u.innerHTML="",h.hidden=!0,c.textContent="";const f=String(e);let p=0;clearInterval(bi);const v=matchMedia("(prefers-reduced-motion: reduce)").matches;return new Promise(_=>{const m=()=>{clearInterval(bi),bi=null,c.textContent=f,i?(u.innerHTML=i.map((g,R)=>`<button class="choice" data-k="${R}">${yi(g.label)}</button>`).join(""),u.querySelectorAll("button").forEach(g=>{g.onclick=R=>{R.stopPropagation(),y(),_(i[Number(g.dataset.k)].value)}}),u.querySelector("button")?.focus()):(h.hidden=!1,h.focus())},d=g=>{if(!(g&&g.target.closest&&g.target.closest("a, .choice, .copy"))){if(bi)return m();i||(y(),_(!0))}},E=g=>{["Enter"," ","e","E"].includes(g.key)&&!(g.target instanceof HTMLButtonElement&&g.target.classList.contains("choice"))&&(g.preventDefault(),d())},y=()=>{o.removeEventListener("click",d),removeEventListener("keydown",E),rr===y&&(rr=null)};if(rr=y,o.addEventListener("click",d),setTimeout(()=>addEventListener("keydown",E),50),v)return m();bi=setInterval(()=>{p+=1,c.textContent=f.slice(0,p),p>=f.length&&m()},28)})};Et.closeDialogue=()=>{Gt("#dialogue").hidden=!0};Et.dialogueOpen=()=>!Gt("#dialogue").hidden;Et.touch=matchMedia("(pointer: coarse)").matches;function Hv(n,t){const e=new Set,i=()=>{n.input.y=(e.has("w")||e.has("arrowup")?1:0)-(e.has("s")||e.has("arrowdown")?1:0),n.input.x=(e.has("d")||e.has("arrowright")?1:0)-(e.has("a")||e.has("arrowleft")?1:0),n.input.run=e.has("shift")};addEventListener("keydown",h=>{if(Et.dialogueOpen())return;const f=h.key.toLowerCase();if(f==="e")return t();e.add(f),i()}),addEventListener("keyup",h=>{e.delete(h.key.toLowerCase()),i()}),addEventListener("blur",()=>{e.clear(),i()}),Gt("#talk").onclick=t;const r=Gt("#joy"),s=Gt("#joy-knob");Et.touch&&(r.hidden=!1);let o=null,a=0,c=0;r.addEventListener("pointerdown",h=>{o=h.pointerId;const f=r.getBoundingClientRect();a=f.left+f.width/2,c=f.top+f.height/2,r.setPointerCapture(o),l(h)});const l=h=>{if(h.pointerId!==o)return;let f=(h.clientX-a)/50,p=(h.clientY-c)/50;const v=Math.hypot(f,p);v>1&&(f/=v,p/=v),s.style.transform=`translate(${f*40}px, ${p*40}px)`,n.input.x=Math.abs(f)>.15?f:0,n.input.y=-p,n.input.run=v>.95};r.addEventListener("pointermove",l);const u=h=>{h.pointerId===o&&(o=null,s.style.transform="",n.input.x=n.input.y=0,n.input.run=!1)};r.addEventListener("pointerup",u),r.addEventListener("pointercancel",u)}document.addEventListener("click",n=>{n.target.closest("#feed-btn")?Gt("#feed").hidden=!Gt("#feed").hidden:n.target.closest("#feed-close")&&(Gt("#feed").hidden=!0)});const _r={raju:{name:"RAJU",shop:"Raju's Chai",item:"chai",inr:20,vpa:"raju.chai@okaxis",greet:"CHAI? ₹20. GAS IS ON ME.",thanks:"EK CUTTING, GARAM GARAM!"},pinky:{name:"PINKY",shop:"Pinky Vada Pav",item:"vada pav",inr:25,vpa:"pinky.vp@ybl",greet:"VADA PAV, FRESH FROM THE KADHAI. ₹25.",thanks:"EXTRA CHUTNEY, ON THE HOUSE."},lucky:{name:"LUCKY",shop:"Lucky Paan",item:"paan",inr:30,vpa:"lucky.paan@paytm",greet:"MEETHA PAAN? ₹30. PAY HOWEVER YOU LIKE.",thanks:"LUCKY FOR YOU, LUCKY FOR ME."}};function Ar(n,{even:t=!1,strict:e=!0}={}){return!n||typeof n!="string"||t&&n.length%2!==0?!1:e?/^0x[0-9a-fA-F]*$/.test(n):n.startsWith("0x")}function we(n){return Ar(n,{strict:!1})?Math.ceil((n.length-2)/2):n.length}const lh="2.57.16";let qo={getDocsUrl:({docsBaseUrl:n,docsPath:t="",docsSlug:e})=>t?`${n??"https://viem.sh"}${t}${e?`#${e}`:""}`:void 0,version:`viem@${lh}`};class Vt extends Error{constructor(t,e={}){const i=e.cause instanceof Vt?e.cause.details:e.cause?.message?e.cause.message:e.details,r=e.cause instanceof Vt&&e.cause.docsPath||e.docsPath,s=qo.getDocsUrl?.({...e,docsPath:r}),o=[t||"An error occurred.","",...e.metaMessages?[...e.metaMessages,""]:[],...s?[`Docs: ${s}`]:[],...i?[`Details: ${i}`]:[],...qo.version?[`Version: ${qo.version}`]:[]].join(`
`);super(o,e.cause?{cause:e.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),this.details=i,this.docsPath=r,this.metaMessages=e.metaMessages,this.name=e.name??this.name,this.shortMessage=t,this.version=lh}walk(t){return uh(this,t)}}function uh(n,t){return t?.(n)?n:n&&typeof n=="object"&&"cause"in n&&n.cause!==void 0?uh(n.cause,t):t?null:n}class kv extends Vt{constructor({expectedLength:t,givenLength:e,type:i}){super([`ABI encoding array length mismatch for type ${i}.`,`Expected length: ${t}`,`Given length: ${e}`].join(`
`),{name:"AbiEncodingArrayLengthMismatchError"})}}class Vv extends Vt{constructor({expectedSize:t,value:e}){super(`Size of bytes "${e}" (bytes${we(e)}) does not match expected size (bytes${t}).`,{name:"AbiEncodingBytesSizeMismatchError"})}}class Gv extends Vt{constructor({expectedLength:t,givenLength:e}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${t}`,`Given length (values): ${e}`].join(`
`),{name:"AbiEncodingLengthMismatchError"})}}class Wv extends Vt{constructor({expectedSize:t,givenSize:e}){super(`Expected bytes${t}, got bytes${e}.`,{name:"BytesSizeMismatchError"})}}class Xv extends Vt{constructor(t,{docsPath:e}){super([`Type "${t}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:e,name:"InvalidAbiEncodingType"})}}class qv extends Vt{constructor(t){super([`Value "${t}" is not a valid array.`].join(`
`),{name:"InvalidArrayError"})}}class hh extends Vt{constructor({offset:t,position:e,size:i}){super(`Slice ${e==="start"?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${i}).`,{name:"SliceOffsetOutOfBoundsError"})}}class fh extends Vt{constructor({size:t,targetSize:e,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (${t}) exceeds padding size (${e}).`,{name:"SizeExceedsPaddingSizeError"})}}function Rr(n,{dir:t,size:e=32}={}){return typeof n=="string"?oi(n,{dir:t,size:e}):Yv(n,{dir:t,size:e})}function oi(n,{dir:t,size:e=32}={}){if(e===null)return n;const i=n.replace("0x","");if(i.length>e*2)throw new fh({size:Math.ceil(i.length/2),targetSize:e,type:"hex"});return`0x${i[t==="right"?"padEnd":"padStart"](e*2,"0")}`}function Yv(n,{dir:t,size:e=32}={}){if(e===null)return n;if(n.length>e)throw new fh({size:n.length,targetSize:e,type:"bytes"});const i=new Uint8Array(e);for(let r=0;r<e;r++){const s=t==="right";i[s?r:e-r-1]=n[s?r:n.length-r-1]}return i}class wc extends Vt{constructor({max:t,min:e,signed:i,size:r,value:s}){super(`Number "${s}" is not in safe ${r?`${r*8}-bit ${i?"signed":"unsigned"} `:""}integer range ${t?`(${e} to ${t})`:`(above ${e})`}`,{name:"IntegerOutOfRangeError"})}}class $v extends Vt{constructor({givenSize:t,maxSize:e}){super(`Size cannot exceed ${e} bytes. Given size: ${t} bytes.`,{name:"SizeOverflowError"})}}function Gs(n,{dir:t="left"}={}){let e=typeof n=="string"?n.replace("0x",""):n,i=0;for(let r=0;r<e.length-1&&e[t==="left"?r:e.length-r-1].toString()==="0";r++)i++;return e=t==="left"?e.slice(i):e.slice(0,e.length-i),typeof n=="string"?(e.length===1&&t==="right"&&(e=`${e}0`),`0x${e.length%2===1?`0${e}`:e}`):e}function Cr(n,{size:t}){if(we(n)>t)throw new $v({givenSize:we(n),maxSize:t})}function qa(n,t={}){const{signed:e}=t;t.size&&Cr(n,{size:t.size});const i=BigInt(n);if(!e)return i;const r=Math.ceil((n.length-2)/2),s=(1n<<BigInt(r)*8n-1n)-1n;return i<=s?i:i-BigInt(`0x${"f".padStart(r*2,"f")}`)-1n}function Kv(n,t={}){const e=qa(n,t),i=Number(e);if(!Number.isSafeInteger(i))throw new wc({max:`${Number.MAX_SAFE_INTEGER}`,min:`${Number.MIN_SAFE_INTEGER}`,signed:t.signed,size:t.size,value:`${e}n`});return i}const Zv=Array.from({length:256},(n,t)=>t.toString(16).padStart(2,"0"));function ai(n,t={}){return typeof n=="number"||typeof n=="bigint"?Lt(n,t):typeof n=="string"?Ws(n,t):typeof n=="boolean"?dh(n,t):Xn(n,t)}function dh(n,t={}){const e=`0x${Number(n)}`;return typeof t.size=="number"?(Cr(e,{size:t.size}),Rr(e,{size:t.size})):e}function Xn(n,t={}){let e="";for(let r=0;r<n.length;r++)e+=Zv[n[r]];const i=`0x${e}`;return typeof t.size=="number"?(Cr(i,{size:t.size}),Rr(i,{dir:"right",size:t.size})):i}function Lt(n,t={}){const{signed:e,size:i}=t,r=BigInt(n);let s;i?e?s=(1n<<BigInt(i)*8n-1n)-1n:s=2n**(BigInt(i)*8n)-1n:typeof n=="number"&&(s=BigInt(Number.MAX_SAFE_INTEGER));const o=typeof s=="bigint"&&e?-s-1n:0;if(s&&r>s||r<o){const c=typeof n=="bigint"?"n":"";throw new wc({max:s?`${s}${c}`:void 0,min:`${o}${c}`,signed:e,size:i,value:`${n}${c}`})}const a=`0x${(e&&r<0?(1n<<BigInt(i*8))+BigInt(r):r).toString(16)}`;return i?Rr(a,{size:i}):a}const jv=new TextEncoder;function Ws(n,t={}){const e=jv.encode(n);return Xn(e,t)}const Jv=new TextEncoder;function Tc(n,t={}){return typeof n=="number"||typeof n=="bigint"?tx(n,t):typeof n=="boolean"?Qv(n,t):Ar(n)?yn(n,t):ph(n,t)}function Qv(n,t={}){const e=new Uint8Array(1);return e[0]=Number(n),typeof t.size=="number"?(Cr(e,{size:t.size}),Rr(e,{size:t.size})):e}const Cn={zero:48,nine:57,A:65,F:70,a:97,f:102};function tu(n){if(n>=Cn.zero&&n<=Cn.nine)return n-Cn.zero;if(n>=Cn.A&&n<=Cn.F)return n-(Cn.A-10);if(n>=Cn.a&&n<=Cn.f)return n-(Cn.a-10)}function yn(n,t={}){let e=n;t.size&&(Cr(e,{size:t.size}),e=Rr(e,{dir:"right",size:t.size}));let i=e.slice(2);i.length%2&&(i=`0${i}`);const r=i.length/2,s=new Uint8Array(r);for(let o=0,a=0;o<r;o++){const c=tu(i.charCodeAt(a++)),l=tu(i.charCodeAt(a++));if(c===void 0||l===void 0)throw new Vt(`Invalid byte sequence ("${i[a-2]}${i[a-1]}" in "${i}").`);s[o]=c*16+l}return s}function tx(n,t){const e=Lt(n,t);return yn(e)}function ph(n,t={}){const e=Jv.encode(n);return typeof t.size=="number"?(Cr(e,{size:t.size}),Rr(e,{dir:"right",size:t.size})):e}const Rs=BigInt(2**32-1),eu=BigInt(32);function ex(n,t=!1){return t?{h:Number(n&Rs),l:Number(n>>eu&Rs)}:{h:Number(n>>eu&Rs)|0,l:Number(n&Rs)|0}}function nx(n,t=!1){const e=n.length;let i=new Uint32Array(e),r=new Uint32Array(e);for(let s=0;s<e;s++){const{h:o,l:a}=ex(n[s],t);[i[s],r[s]]=[o,a]}return[i,r]}const ix=(n,t,e)=>n<<e|t>>>32-e,rx=(n,t,e)=>t<<e|n>>>32-e,sx=(n,t,e)=>t<<e-32|n>>>64-e,ox=(n,t,e)=>n<<e-32|t>>>64-e,tr=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */function ax(n){return n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"}function Kr(n){if(!Number.isSafeInteger(n)||n<0)throw new Error("positive integer expected, got "+n)}function Ui(n,...t){if(!ax(n))throw new Error("Uint8Array expected");if(t.length>0&&!t.includes(n.length))throw new Error("Uint8Array expected of length "+t+", got length="+n.length)}function cx(n){if(typeof n!="function"||typeof n.create!="function")throw new Error("Hash should be wrapped by utils.createHasher");Kr(n.outputLen),Kr(n.blockLen)}function vr(n,t=!0){if(n.destroyed)throw new Error("Hash instance has been destroyed");if(t&&n.finished)throw new Error("Hash#digest() has already been called")}function mh(n,t){Ui(n);const e=t.outputLen;if(n.length<e)throw new Error("digestInto() expects output buffer of length at least "+e)}function lx(n){return new Uint32Array(n.buffer,n.byteOffset,Math.floor(n.byteLength/4))}function xr(...n){for(let t=0;t<n.length;t++)n[t].fill(0)}function Yo(n){return new DataView(n.buffer,n.byteOffset,n.byteLength)}function pn(n,t){return n<<32-t|n>>>t}const ux=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function hx(n){return n<<24&4278190080|n<<8&16711680|n>>>8&65280|n>>>24&255}function fx(n){for(let t=0;t<n.length;t++)n[t]=hx(n[t]);return n}const nu=ux?n=>n:fx;function dx(n){if(typeof n!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(n))}function Qs(n){return typeof n=="string"&&(n=dx(n)),Ui(n),n}function px(...n){let t=0;for(let i=0;i<n.length;i++){const r=n[i];Ui(r),t+=r.length}const e=new Uint8Array(t);for(let i=0,r=0;i<n.length;i++){const s=n[i];e.set(s,r),r+=s.length}return e}class Ac{}function gh(n){const t=i=>n().update(Qs(i)).digest(),e=n();return t.outputLen=e.outputLen,t.blockLen=e.blockLen,t.create=()=>n(),t}function mx(n=32){if(tr&&typeof tr.getRandomValues=="function")return tr.getRandomValues(new Uint8Array(n));if(tr&&typeof tr.randomBytes=="function")return Uint8Array.from(tr.randomBytes(n));throw new Error("crypto.getRandomValues must be defined")}const gx=BigInt(0),Fr=BigInt(1),_x=BigInt(2),vx=BigInt(7),xx=BigInt(256),yx=BigInt(113),_h=[],vh=[],xh=[];for(let n=0,t=Fr,e=1,i=0;n<24;n++){[e,i]=[i,(2*e+3*i)%5],_h.push(2*(5*i+e)),vh.push((n+1)*(n+2)/2%64);let r=gx;for(let s=0;s<7;s++)t=(t<<Fr^(t>>vx)*yx)%xx,t&_x&&(r^=Fr<<(Fr<<BigInt(s))-Fr);xh.push(r)}const yh=nx(xh,!0),Mx=yh[0],Sx=yh[1],iu=(n,t,e)=>e>32?sx(n,t,e):ix(n,t,e),ru=(n,t,e)=>e>32?ox(n,t,e):rx(n,t,e);function Ex(n,t=24){const e=new Uint32Array(10);for(let i=24-t;i<24;i++){for(let o=0;o<10;o++)e[o]=n[o]^n[o+10]^n[o+20]^n[o+30]^n[o+40];for(let o=0;o<10;o+=2){const a=(o+8)%10,c=(o+2)%10,l=e[c],u=e[c+1],h=iu(l,u,1)^e[a],f=ru(l,u,1)^e[a+1];for(let p=0;p<50;p+=10)n[o+p]^=h,n[o+p+1]^=f}let r=n[2],s=n[3];for(let o=0;o<24;o++){const a=vh[o],c=iu(r,s,a),l=ru(r,s,a),u=_h[o];r=n[u],s=n[u+1],n[u]=c,n[u+1]=l}for(let o=0;o<50;o+=10){for(let a=0;a<10;a++)e[a]=n[o+a];for(let a=0;a<10;a++)n[o+a]^=~e[(a+2)%10]&e[(a+4)%10]}n[0]^=Mx[i],n[1]^=Sx[i]}xr(e)}class Rc extends Ac{constructor(t,e,i,r=!1,s=24){if(super(),this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,this.enableXOF=!1,this.blockLen=t,this.suffix=e,this.outputLen=i,this.enableXOF=r,this.rounds=s,Kr(i),!(0<t&&t<200))throw new Error("only keccak-f1600 function is supported");this.state=new Uint8Array(200),this.state32=lx(this.state)}clone(){return this._cloneInto()}keccak(){nu(this.state32),Ex(this.state32,this.rounds),nu(this.state32),this.posOut=0,this.pos=0}update(t){vr(this),t=Qs(t),Ui(t);const{blockLen:e,state:i}=this,r=t.length;for(let s=0;s<r;){const o=Math.min(e-this.pos,r-s);for(let a=0;a<o;a++)i[this.pos++]^=t[s++];this.pos===e&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:t,suffix:e,pos:i,blockLen:r}=this;t[i]^=e,e&128&&i===r-1&&this.keccak(),t[r-1]^=128,this.keccak()}writeInto(t){vr(this,!1),Ui(t),this.finish();const e=this.state,{blockLen:i}=this;for(let r=0,s=t.length;r<s;){this.posOut>=i&&this.keccak();const o=Math.min(i-this.posOut,s-r);t.set(e.subarray(this.posOut,this.posOut+o),r),this.posOut+=o,r+=o}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return Kr(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(mh(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,xr(this.state)}_cloneInto(t){const{blockLen:e,suffix:i,outputLen:r,rounds:s,enableXOF:o}=this;return t||(t=new Rc(e,i,r,o,s)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=s,t.suffix=i,t.outputLen=r,t.enableXOF=o,t.destroyed=this.destroyed,t}}const bx=(n,t,e)=>gh(()=>new Rc(t,n,e)),wx=bx(1,136,256/8);function $e(n,t){const e=t||"hex",i=wx(Ar(n,{strict:!1})?Tc(n):n);return e==="bytes"?i:ai(i)}class Mh extends Map{constructor(t){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=t}get(t){const e=super.get(t);return super.has(t)&&(super.delete(t),super.set(t,e)),e}set(t,e){if(super.has(t)&&super.delete(t),super.set(t,e),this.maxSize&&this.size>this.maxSize){const i=super.keys().next().value;i!==void 0&&super.delete(i)}return this}}class Vn extends Vt{constructor({address:t}){super(`Address "${t}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."],name:"InvalidAddressError"})}}const $o=new Mh(8192);function Sh(n,t){if($o.has(`${n}.${t}`))return $o.get(`${n}.${t}`);const e=n.substring(2).toLowerCase(),i=$e(ph(e),"bytes"),r=e.split("");for(let o=0;o<40;o+=2)i[o>>1]>>4>=8&&r[o]&&(r[o]=r[o].toUpperCase()),(i[o>>1]&15)>=8&&r[o+1]&&(r[o+1]=r[o+1].toUpperCase());const s=`0x${r.join("")}`;return $o.set(`${n}.${t}`,s),s}const Tx=/^0x[a-fA-F0-9]{40}$/,Ko=new Mh(8192);function Gn(n,t){const{strict:e=!0}=t??{},i=`${n}.${e}`;if(Ko.has(i))return Ko.get(i);const r=Tx.test(n)?n.toLowerCase()===n?!0:e?Sh(n)===n:!0:!1;return Ko.set(i,r),r}function Eh(n){return typeof n[0]=="string"?nn(n):Ax(n)}function Ax(n){let t=0;for(const r of n)t+=r.length;const e=new Uint8Array(t);let i=0;for(const r of n)e.set(r,i),i+=r.length;return e}function nn(n){return`0x${n.reduce((t,e)=>t+e.replace("0x",""),"")}`}function bh(n,t,e,{strict:i}={}){return Ar(n,{strict:!1})?Cx(n,t,e,{strict:i}):Rx(n,t,e,{strict:i})}function wh(n,t){if(typeof t=="number"&&t>0&&t>we(n)-1)throw new hh({offset:t,position:"start",size:we(n)})}function Th(n,t,e){if(typeof t=="number"&&typeof e=="number"&&we(n)!==e-t)throw new hh({offset:e,position:"end",size:we(n)})}function Rx(n,t,e,{strict:i}={}){wh(n,t);const r=n.slice(t,e);return i&&Th(r,t,e),r}function Cx(n,t,e,{strict:i}={}){wh(n,t);const r=`0x${n.replace("0x","").slice((t??0)*2,(e??n.length)*2)}`;return i&&Th(r,t,e),r}const Ah=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,Cc=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function Rh(n,t){if(n.length!==t.length)throw new Gv({expectedLength:n.length,givenLength:t.length});const e=Px({params:n,values:t});return Lc(e)}function Px({params:n,values:t}){const e=[];for(let i=0;i<n.length;i++)e.push(Pc({param:n[i],value:t[i]}));return e}function Pc({param:n,value:t}){const e=Ch(n.type);if(e){const[i,r]=e;return Ix(t,{length:i,param:{...n,type:r}})}if(n.type==="tuple")return Fx(t,{param:n});if(n.type==="address")return Lx(t);if(n.type==="bool")return Ux(t);if(n.type.startsWith("uint")||n.type.startsWith("int")){const i=n.type.startsWith("int"),[,,r="256"]=Cc.exec(n.type)??[];return Nx(t,{signed:i,size:Number(r)})}if(n.type.startsWith("bytes"))return Dx(t,{param:n});if(n.type==="string")return Ox(t);throw new Xv(n.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function Lc(n){let t=0;for(let s=0;s<n.length;s++){const{dynamic:o,encoded:a}=n[s];o?t+=32:t+=we(a)}const e=[],i=[];let r=0;for(let s=0;s<n.length;s++){const{dynamic:o,encoded:a}=n[s];o?(e.push(Lt(t+r,{size:32})),i.push(a),r+=we(a)):e.push(a)}return nn([...e,...i])}function Lx(n){if(!Gn(n))throw new Vn({address:n});return{dynamic:!1,encoded:oi(n.toLowerCase())}}function Ix(n,{length:t,param:e}){const i=t===null;if(!Array.isArray(n))throw new qv(n);if(!i&&n.length!==t)throw new kv({expectedLength:t,givenLength:n.length,type:`${e.type}[${t}]`});let r=n.length===0&&Ya(e);const s=[];for(let o=0;o<n.length;o++){const a=Pc({param:e,value:n[o]});a.dynamic&&(r=!0),s.push(a)}if(i||r){const o=Lc(s);if(i){const a=Lt(s.length,{size:32});return{dynamic:!0,encoded:nn([a,o])}}if(r)return{dynamic:!0,encoded:o}}return{dynamic:!1,encoded:nn(s.map(({encoded:o})=>o))}}function Dx(n,{param:t}){const[,e]=t.type.split("bytes"),i=we(n);if(!e){let r=n;return i%32!==0&&(r=oi(r,{dir:"right",size:Math.ceil((n.length-2)/2/32)*32})),{dynamic:!0,encoded:nn([oi(Lt(i,{size:32})),r])}}if(i!==Number.parseInt(e,10))throw new Vv({expectedSize:Number.parseInt(e,10),value:n});return{dynamic:!1,encoded:oi(n,{dir:"right"})}}function Ux(n){if(typeof n!="boolean")throw new Vt(`Invalid boolean value: "${n}" (type: ${typeof n}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:oi(dh(n))}}function Nx(n,{signed:t,size:e=256}){if(typeof e=="number"){const i=2n**(BigInt(e)-(t?1n:0n))-1n,r=t?-i-1n:0n;if(n>i||n<r)throw new wc({max:i.toString(),min:r.toString(),signed:t,size:e/8,value:n.toString()})}return{dynamic:!1,encoded:Lt(n,{size:32,signed:t})}}function Ox(n){const t=Ws(n),e=Math.ceil(we(t)/32),i=[];for(let r=0;r<e;r++)i.push(oi(bh(t,r*32,(r+1)*32),{dir:"right"}));return{dynamic:!0,encoded:nn([oi(Lt(we(t),{size:32})),...i])}}function Fx(n,{param:t}){let e=!1;const i=[];for(let r=0;r<t.components.length;r++){const s=t.components[r],o=Array.isArray(n)?r:s.name,a=Pc({param:s,value:n[o]});i.push(a),a.dynamic&&(e=!0)}return{dynamic:e,encoded:e?Lc(i):nn(i.map(({encoded:r})=>r))}}function Ch(n){const t=n.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}function Ya(n){const{type:t}=n;if(t==="string"||t==="bytes"||t.endsWith("[]"))return!0;if(t==="tuple")return n.components.some(Ya);const e=Ch(t);return e?Ya({...n,type:e[1]}):!1}class su extends Vt{constructor({offset:t}){super(`Offset \`${t}\` cannot be negative.`,{name:"NegativeOffsetError"})}}class Bx extends Vt{constructor({length:t,position:e}){super(`Position \`${e}\` is out of bounds (\`0 < position < ${t}\`).`,{name:"PositionOutOfBoundsError"})}}class zx extends Vt{constructor({count:t,limit:e}){super(`Recursive read limit of \`${e}\` exceeded (recursive read count: \`${t}\`).`,{name:"RecursiveReadLimitExceededError"})}}const Hx={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:Number.POSITIVE_INFINITY,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new zx({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(n){if(n<0||n>this.bytes.length-1)throw new Bx({length:this.bytes.length,position:n})},decrementPosition(n){if(n<0)throw new su({offset:n});const t=this.position-n;this.assertPosition(t),this.position=t},getReadCount(n){return this.positionReadCount.get(n||this.position)||0},incrementPosition(n){if(n<0)throw new su({offset:n});const t=this.position+n;this.assertPosition(t),this.position=t},inspectByte(n){const t=n??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(n,t){const e=t??this.position;return this.assertPosition(e+n-1),this.bytes.subarray(e,e+n)},inspectUint8(n){const t=n??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(n){const t=n??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(n){const t=n??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(n){const t=n??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(n){this.assertPosition(this.position),this.bytes[this.position]=n,this.position++},pushBytes(n){this.assertPosition(this.position+n.length-1),this.bytes.set(n,this.position),this.position+=n.length},pushUint8(n){this.assertPosition(this.position),this.bytes[this.position]=n,this.position++},pushUint16(n){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,n),this.position+=2},pushUint24(n){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,n>>8),this.dataView.setUint8(this.position+2,n&255),this.position+=3},pushUint32(n){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,n),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const n=this.inspectByte();return this.position++,n},readBytes(n,t){this.assertReadLimit(),this._touch();const e=this.inspectBytes(n);return this.position+=t??n,e},readUint8(){this.assertReadLimit(),this._touch();const n=this.inspectUint8();return this.position+=1,n},readUint16(){this.assertReadLimit(),this._touch();const n=this.inspectUint16();return this.position+=2,n},readUint24(){this.assertReadLimit(),this._touch();const n=this.inspectUint24();return this.position+=3,n},readUint32(){this.assertReadLimit(),this._touch();const n=this.inspectUint32();return this.position+=4,n},get remaining(){return this.bytes.length-this.position},setPosition(n){const t=this.position;return this.assertPosition(n),this.position=n,()=>this.position=t},_touch(){if(this.recursiveReadLimit===Number.POSITIVE_INFINITY)return;const n=this.getReadCount();this.positionReadCount.set(this.position,n+1),n>0&&this.recursiveReadCount++}};function Ph(n,{recursiveReadLimit:t=8192}={}){const e=Object.create(Hx);return e.bytes=n,e.dataView=new DataView(n.buffer??n,n.byteOffset,n.byteLength),e.positionReadCount=new Map,e.recursiveReadLimit=t,e}const kx=(n,t,e)=>JSON.stringify(n,(i,r)=>typeof r=="bigint"?r.toString():r,e),ou={wei:0,gwei:9,szabo:12,finney:15,ether:18};function Vx(n,t=0){if(!Number.isInteger(t)||t<0)throw new Wx({decimals:t});let e=n.toString();const i=e.startsWith("-");i&&(e=e.slice(1)),e=e.padStart(t,"0");let[r,s]=[e.slice(0,e.length-t),e.slice(e.length-t)];return s=s.replace(/(0+)$/,""),`${i?"-":""}${r||"0"}${s?`.${s}`:""}`}function Gx(n,t="wei"){return Vx(n,ou.gwei-ou[t])}class Wx extends Error{constructor({decimals:t}){super(`\`decimals\` must be a non-negative integer. Got \`${t}\`.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Value.InvalidDecimalsError"})}}function $a(n,t="wei"){return Gx(n,t)}function Xx(n){const t=Object.entries(n).map(([i,r])=>r===void 0||r===!1?null:[i,r]).filter(Boolean),e=t.reduce((i,[r])=>Math.max(i,r.length),0);return t.map(([i,r])=>`  ${`${i}:`.padEnd(e+1)}  ${r}`).join(`
`)}class qx extends Vt{constructor({v:t}){super(`Invalid \`v\` value "${t}". Expected 27 or 28.`,{name:"InvalidLegacyVError"})}}class Yx extends Vt{constructor({transaction:t}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",Xx(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- an EIP-7702 Transaction with `authorizationList`, or","- a Legacy Transaction with `gasPrice`"],name:"InvalidSerializableTransactionError"})}}class $x extends Vt{constructor({storageKey:t}){super(`Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor((t.length-2)/2)} bytes.`,{name:"InvalidStorageKeySizeError"})}}function Kx(n){const t=$e(`0x${n.substring(4)}`).substring(26);return Sh(`0x${t}`)}function Ni(n,t="hex"){const e=Lh(n),i=Ph(new Uint8Array(e.length));return e.encode(i),t==="hex"?Xn(i.bytes):i.bytes}function Lh(n){return Array.isArray(n)?Zx(n.map(t=>Lh(t))):jx(n)}function Zx(n){const t=n.reduce((r,s)=>r+s.length,0),e=Ih(t);return{length:t<=55?1+t:1+e+t,encode(r){t<=55?r.pushByte(192+t):(r.pushByte(247+e),e===1?r.pushUint8(t):e===2?r.pushUint16(t):e===3?r.pushUint24(t):r.pushUint32(t));for(const{encode:s}of n)s(r)}}}function jx(n){const t=typeof n=="string"?yn(n):n,e=Ih(t.length);return{length:t.length===1&&t[0]<128?1:t.length<=55?1+t.length:1+e+t.length,encode(r){t.length===1&&t[0]<128?r.pushBytes(t):t.length<=55?(r.pushByte(128+t.length),r.pushBytes(t)):(r.pushByte(183+e),e===1?r.pushUint8(t.length):e===2?r.pushUint16(t.length):e===3?r.pushUint24(t.length):r.pushUint32(t.length),r.pushBytes(t))}}}function Ih(n){if(n<2**8)return 1;if(n<2**16)return 2;if(n<2**24)return 3;if(n<2**32)return 4;throw new Vt("Length is too large.")}function Jx(n){const{chainId:t,nonce:e,to:i}=n,r=n.contractAddress??n.address,s=$e(nn(["0x05",Ni([t?Lt(t):"0x",r,e?Lt(e):"0x"])]));return i==="bytes"?yn(s):s}class to extends Vt{constructor({cause:t,maxFeePerGas:e}={}){super(`The fee cap (\`maxFeePerGas\`${typeof e=="bigint"?` = ${$a(e)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:t,name:"FeeCapTooHighError"})}}Object.defineProperty(to,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class Dh extends Vt{constructor({cause:t,maxPriorityFeePerGas:e,maxFeePerGas:i}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${typeof e=="bigint"?` = ${$a(e)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${typeof i=="bigint"?` = ${$a(i)} gwei`:""}).`].join(`
`),{cause:t,name:"TipAboveFeeCapError"})}}Object.defineProperty(Dh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});const Ic=2n**256n-1n;function Uh(n){const{kzg:t}=n,e=n.to??(typeof n.blobs[0]=="string"?"hex":"bytes"),i=typeof n.blobs[0]=="string"?n.blobs.map(s=>yn(s)):n.blobs,r=[];for(const s of i)r.push(Uint8Array.from(t.blobToKzgCommitment(s)));return e==="bytes"?r:r.map(s=>Xn(s))}function Nh(n){const{kzg:t}=n,e=n.to??(typeof n.blobs[0]=="string"?"hex":"bytes"),i=typeof n.blobs[0]=="string"?n.blobs.map(o=>yn(o)):n.blobs,r=typeof n.commitments[0]=="string"?n.commitments.map(o=>yn(o)):n.commitments,s=[];for(let o=0;o<i.length;o++){const a=i[o],c=r[o];s.push(Uint8Array.from(t.computeBlobKzgProof(a,c)))}return e==="bytes"?s:s.map(o=>Xn(o))}function Qx(n,t,e,i){if(typeof n.setBigUint64=="function")return n.setBigUint64(t,e,i);const r=BigInt(32),s=BigInt(4294967295),o=Number(e>>r&s),a=Number(e&s),c=i?4:0,l=i?0:4;n.setUint32(t+c,o,i),n.setUint32(t+l,a,i)}function ty(n,t,e){return n&t^~n&e}function ey(n,t,e){return n&t^n&e^t&e}class ny extends Ac{constructor(t,e,i,r){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=t,this.outputLen=e,this.padOffset=i,this.isLE=r,this.buffer=new Uint8Array(t),this.view=Yo(this.buffer)}update(t){vr(this),t=Qs(t),Ui(t);const{view:e,buffer:i,blockLen:r}=this,s=t.length;for(let o=0;o<s;){const a=Math.min(r-this.pos,s-o);if(a===r){const c=Yo(t);for(;r<=s-o;o+=r)this.process(c,o);continue}i.set(t.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===r&&(this.process(e,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){vr(this),mh(t,this),this.finished=!0;const{buffer:e,view:i,blockLen:r,isLE:s}=this;let{pos:o}=this;e[o++]=128,xr(this.buffer.subarray(o)),this.padOffset>r-o&&(this.process(i,0),o=0);for(let h=o;h<r;h++)e[h]=0;Qx(i,r-8,BigInt(this.length*8),s),this.process(i,0);const a=Yo(t),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,u=this.get();if(l>u.length)throw new Error("_sha2: outputLen bigger than state");for(let h=0;h<l;h++)a.setUint32(4*h,u[h],s)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const i=t.slice(0,e);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:i,length:r,finished:s,destroyed:o,pos:a}=this;return t.destroyed=o,t.finished=s,t.length=r,t.pos=a,r%e&&t.buffer.set(i),t}clone(){return this._cloneInto()}}const ti=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),iy=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ei=new Uint32Array(64);class ry extends ny{constructor(t=32){super(64,t,8,!1),this.A=ti[0]|0,this.B=ti[1]|0,this.C=ti[2]|0,this.D=ti[3]|0,this.E=ti[4]|0,this.F=ti[5]|0,this.G=ti[6]|0,this.H=ti[7]|0}get(){const{A:t,B:e,C:i,D:r,E:s,F:o,G:a,H:c}=this;return[t,e,i,r,s,o,a,c]}set(t,e,i,r,s,o,a,c){this.A=t|0,this.B=e|0,this.C=i|0,this.D=r|0,this.E=s|0,this.F=o|0,this.G=a|0,this.H=c|0}process(t,e){for(let h=0;h<16;h++,e+=4)ei[h]=t.getUint32(e,!1);for(let h=16;h<64;h++){const f=ei[h-15],p=ei[h-2],v=pn(f,7)^pn(f,18)^f>>>3,_=pn(p,17)^pn(p,19)^p>>>10;ei[h]=_+ei[h-7]+v+ei[h-16]|0}let{A:i,B:r,C:s,D:o,E:a,F:c,G:l,H:u}=this;for(let h=0;h<64;h++){const f=pn(a,6)^pn(a,11)^pn(a,25),p=u+f+ty(a,c,l)+iy[h]+ei[h]|0,_=(pn(i,2)^pn(i,13)^pn(i,22))+ey(i,r,s)|0;u=l,l=c,c=a,a=o+p|0,o=s,s=r,r=i,i=p+_|0}i=i+this.A|0,r=r+this.B|0,s=s+this.C|0,o=o+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(i,r,s,o,a,c,l,u)}roundClean(){xr(ei)}destroy(){this.set(0,0,0,0,0,0,0,0),xr(this.buffer)}}const Oh=gh(()=>new ry),sy=Oh;function oy(n,t){return sy(Ar(n,{strict:!1})?Tc(n):n)}function ay(n){const{commitment:t,version:e=1}=n,i=n.to??(typeof t=="string"?"hex":"bytes"),r=oy(t);return r.set([e],0),i==="bytes"?r:Xn(r)}function cy(n){const{commitments:t,version:e}=n,i=n.to??(typeof t[0]=="string"?"hex":"bytes"),r=[];for(const s of t)r.push(ay({commitment:s,to:i,version:e}));return r}const au=6,Fh=32,Dc=4096,Bh=Fh*Dc,cu=Bh*au-1-1*Dc*au,zh=1;class ly extends Vt{constructor({maxSize:t,size:e}){super("Blob size is too large.",{metaMessages:[`Max: ${t} bytes`,`Given: ${e} bytes`],name:"BlobSizeTooLargeError"})}}class Hh extends Vt{constructor(){super("Blob data must not be empty.",{name:"EmptyBlobError"})}}class uy extends Vt{constructor({hash:t,size:e}){super(`Versioned hash "${t}" size is invalid.`,{metaMessages:["Expected: 32",`Received: ${e}`],name:"InvalidVersionedHashSizeError"})}}class hy extends Vt{constructor({hash:t,version:e}){super(`Versioned hash "${t}" version is invalid.`,{metaMessages:[`Expected: ${zh}`,`Received: ${e}`],name:"InvalidVersionedHashVersionError"})}}function fy(n){const t=n.to??(typeof n.data=="string"?"hex":"bytes"),e=typeof n.data=="string"?yn(n.data):n.data,i=we(e);if(!i)throw new Hh;if(i>cu)throw new ly({maxSize:cu,size:i});const r=[];let s=!0,o=0;for(;s;){const a=Ph(new Uint8Array(Bh));let c=0;for(;c<Dc;){const l=e.slice(o,o+(Fh-1));if(a.pushByte(0),a.pushBytes(l),l.length<31){a.pushByte(128),s=!1;break}c++,o+=31}r.push(a)}return t==="bytes"?r.map(a=>a.bytes):r.map(a=>Xn(a.bytes))}function dy(n){const{data:t,kzg:e,to:i}=n,r=n.blobs??fy({data:t,to:i}),s=n.commitments??Uh({blobs:r,kzg:e,to:i}),o=n.proofs??Nh({blobs:r,commitments:s,kzg:e,to:i}),a=[];for(let c=0;c<r.length;c++)a.push({blob:r[c],commitment:s[c],proof:o[c]});return a}function py(n){if(n.type)return n.type;if(typeof n.authorizationList<"u")return"eip7702";if(typeof n.blobs<"u"||typeof n.blobVersionedHashes<"u"||typeof n.maxFeePerBlobGas<"u"||typeof n.sidecars<"u")return"eip4844";if(typeof n.maxFeePerGas<"u"||typeof n.maxPriorityFeePerGas<"u")return"eip1559";if(typeof n.gasPrice<"u")return typeof n.accessList<"u"?"eip2930":"legacy";throw new Yx({transaction:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Uc=BigInt(0),Ka=BigInt(1);function ts(n){return n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"}function Nc(n){if(!ts(n))throw new Error("Uint8Array expected")}function Zr(n,t){if(typeof t!="boolean")throw new Error(n+" boolean expected, got "+t)}function Cs(n){const t=n.toString(16);return t.length&1?"0"+t:t}function kh(n){if(typeof n!="string")throw new Error("hex string expected, got "+typeof n);return n===""?Uc:BigInt("0x"+n)}const Vh=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",my=Array.from({length:256},(n,t)=>t.toString(16).padStart(2,"0"));function jr(n){if(Nc(n),Vh)return n.toHex();let t="";for(let e=0;e<n.length;e++)t+=my[n[e]];return t}const Pn={_0:48,_9:57,A:65,F:70,a:97,f:102};function lu(n){if(n>=Pn._0&&n<=Pn._9)return n-Pn._0;if(n>=Pn.A&&n<=Pn.F)return n-(Pn.A-10);if(n>=Pn.a&&n<=Pn.f)return n-(Pn.a-10)}function Xs(n){if(typeof n!="string")throw new Error("hex string expected, got "+typeof n);if(Vh)return Uint8Array.fromHex(n);const t=n.length,e=t/2;if(t%2)throw new Error("hex string expected, got unpadded hex of length "+t);const i=new Uint8Array(e);for(let r=0,s=0;r<e;r++,s+=2){const o=lu(n.charCodeAt(s)),a=lu(n.charCodeAt(s+1));if(o===void 0||a===void 0){const c=n[s]+n[s+1];throw new Error('hex string expected, got non-hex character "'+c+'" at index '+s)}i[r]=o*16+a}return i}function Ri(n){return kh(jr(n))}function Gh(n){return Nc(n),kh(jr(Uint8Array.from(n).reverse()))}function es(n,t){return Xs(n.toString(16).padStart(t*2,"0"))}function Wh(n,t){return es(n,t).reverse()}function Qe(n,t,e){let i;if(typeof t=="string")try{i=Xs(t)}catch(s){throw new Error(n+" must be hex string or Uint8Array, cause: "+s)}else if(ts(t))i=Uint8Array.from(t);else throw new Error(n+" must be hex string or Uint8Array");const r=i.length;if(typeof e=="number"&&r!==e)throw new Error(n+" of length "+e+" expected, got "+r);return i}function qs(...n){let t=0;for(let i=0;i<n.length;i++){const r=n[i];Nc(r),t+=r.length}const e=new Uint8Array(t);for(let i=0,r=0;i<n.length;i++){const s=n[i];e.set(s,r),r+=s.length}return e}const Zo=n=>typeof n=="bigint"&&Uc<=n;function Oc(n,t,e){return Zo(n)&&Zo(t)&&Zo(e)&&t<=n&&n<e}function ur(n,t,e,i){if(!Oc(t,e,i))throw new Error("expected valid "+n+": "+e+" <= n < "+i+", got "+t)}function gy(n){let t;for(t=0;n>Uc;n>>=Ka,t+=1);return t}const eo=n=>(Ka<<BigInt(n))-Ka,jo=n=>new Uint8Array(n),uu=n=>Uint8Array.from(n);function _y(n,t,e){if(typeof n!="number"||n<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof e!="function")throw new Error("hmacFn must be a function");let i=jo(n),r=jo(n),s=0;const o=()=>{i.fill(1),r.fill(0),s=0},a=(...h)=>e(r,i,...h),c=(h=jo(0))=>{r=a(uu([0]),h),i=a(),h.length!==0&&(r=a(uu([1]),h),i=a())},l=()=>{if(s++>=1e3)throw new Error("drbg: tried 1000 values");let h=0;const f=[];for(;h<t;){i=a();const p=i.slice();f.push(p),h+=i.length}return qs(...f)};return(h,f)=>{o(),c(h);let p;for(;!(p=f(l()));)c();return o(),p}}const vy={bigint:n=>typeof n=="bigint",function:n=>typeof n=="function",boolean:n=>typeof n=="boolean",string:n=>typeof n=="string",stringOrUint8Array:n=>typeof n=="string"||ts(n),isSafeInteger:n=>Number.isSafeInteger(n),array:n=>Array.isArray(n),field:(n,t)=>t.Fp.isValid(n),hash:n=>typeof n=="function"&&Number.isSafeInteger(n.outputLen)};function no(n,t,e={}){const i=(r,s,o)=>{const a=vy[s];if(typeof a!="function")throw new Error("invalid validator function");const c=n[r];if(!(o&&c===void 0)&&!a(c,n))throw new Error("param "+String(r)+" is invalid. Expected "+s+", got "+c)};for(const[r,s]of Object.entries(t))i(r,s,!1);for(const[r,s]of Object.entries(e))i(r,s,!0);return n}function hu(n){const t=new WeakMap;return(e,...i)=>{const r=t.get(e);if(r!==void 0)return r;const s=n(e,...i);return t.set(e,s),s}}class io extends Vt{constructor({chainId:t}){super(typeof t=="number"?`Chain ID "${t}" is invalid.`:"Chain ID is invalid.",{name:"InvalidChainIdError"})}}function xy(n){const{authorizationList:t}=n;if(t)for(const e of t){const{chainId:i}=e,r=e.address;if(!Gn(r))throw new Vn({address:r});if(i<0)throw new io({chainId:i})}Fc(n)}function yy(n){const{blobVersionedHashes:t}=n;if(t){if(t.length===0)throw new Hh;for(const e of t){const i=we(e),r=Kv(bh(e,0,1));if(i!==32)throw new uy({hash:e,size:i});if(r!==zh)throw new hy({hash:e,version:r})}}Fc(n)}function Fc(n){const{chainId:t,maxPriorityFeePerGas:e,maxFeePerGas:i,to:r}=n;if(t<=0)throw new io({chainId:t});if(r&&!Gn(r))throw new Vn({address:r});if(i&&i>Ic)throw new to({maxFeePerGas:i});if(typeof e=="bigint"&&typeof i=="bigint"&&e>i)throw new Dh({maxFeePerGas:i,maxPriorityFeePerGas:e})}function My(n){const{chainId:t,maxPriorityFeePerGas:e,gasPrice:i,maxFeePerGas:r,to:s}=n;if(t<=0)throw new io({chainId:t});if(s&&!Gn(s))throw new Vn({address:s});if(e||r)throw new Vt("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(i&&i>Ic)throw new to({maxFeePerGas:i})}function Sy(n){const{chainId:t,maxPriorityFeePerGas:e,gasPrice:i,maxFeePerGas:r,to:s}=n;if(s&&!Gn(s))throw new Vn({address:s});if(typeof t<"u"&&t<=0)throw new io({chainId:t});if(e||r)throw new Vt("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(i&&i>Ic)throw new to({maxFeePerGas:i})}function ro(n){if(!n||n.length===0)return[];const t=[];for(let e=0;e<n.length;e++){const{address:i,storageKeys:r}=n[e];for(let s=0;s<r.length;s++)if(r[s].length-2!==64)throw new $x({storageKey:r[s]});if(!Gn(i,{strict:!1}))throw new Vn({address:i});t.push([i,r])}return t}function Ey(n,t){const e=py(n);return e==="eip1559"?Ty(n,t):e==="eip2930"?Ay(n,t):e==="eip4844"?wy(n,t):e==="eip7702"?by(n,t):Ry(n,t)}function by(n,t){const{authorizationList:e,chainId:i,gas:r,nonce:s,to:o,value:a,maxFeePerGas:c,maxPriorityFeePerGas:l,accessList:u,data:h}=n;xy(n);const f=ro(u),p=Cy(e);return nn(["0x04",Ni([Lt(i),s?Lt(s):"0x",l?Lt(l):"0x",c?Lt(c):"0x",r?Lt(r):"0x",o??"0x",a?Lt(a):"0x",h??"0x",f,p,...ns(n,t)])])}function wy(n,t){const{chainId:e,gas:i,nonce:r,to:s,value:o,maxFeePerBlobGas:a,maxFeePerGas:c,maxPriorityFeePerGas:l,accessList:u,data:h}=n;yy(n);let f=n.blobVersionedHashes,p=n.sidecars;if(n.blobs&&(typeof f>"u"||typeof p>"u")){const y=typeof n.blobs[0]=="string"?n.blobs:n.blobs.map(w=>Xn(w)),g=n.kzg,R=Uh({blobs:y,kzg:g});if(typeof f>"u"&&(f=cy({commitments:R})),typeof p>"u"){const w=Nh({blobs:y,commitments:R,kzg:g});p=dy({blobs:y,commitments:R,proofs:w})}}const v=ro(u),_=[Lt(e),r?Lt(r):"0x",l?Lt(l):"0x",c?Lt(c):"0x",i?Lt(i):"0x",s??"0x",o?Lt(o):"0x",h??"0x",v,a?Lt(a):"0x",f??[],...ns(n,t)],m=[],d=[],E=[];if(p)for(let y=0;y<p.length;y++){const{blob:g,commitment:R,proof:w}=p[y];m.push(g),d.push(R),E.push(w)}return nn(["0x03",Ni(p?[_,m,d,E]:_)])}function Ty(n,t){const{chainId:e,gas:i,nonce:r,to:s,value:o,maxFeePerGas:a,maxPriorityFeePerGas:c,accessList:l,data:u}=n;Fc(n);const h=ro(l),f=[Lt(e),r?Lt(r):"0x",c?Lt(c):"0x",a?Lt(a):"0x",i?Lt(i):"0x",s??"0x",o?Lt(o):"0x",u??"0x",h,...ns(n,t)];return nn(["0x02",Ni(f)])}function Ay(n,t){const{chainId:e,gas:i,data:r,nonce:s,to:o,value:a,accessList:c,gasPrice:l}=n;My(n);const u=ro(c),h=[Lt(e),s?Lt(s):"0x",l?Lt(l):"0x",i?Lt(i):"0x",o??"0x",a?Lt(a):"0x",r??"0x",u,...ns(n,t)];return nn(["0x01",Ni(h)])}function Ry(n,t){const{chainId:e=0,gas:i,data:r,nonce:s,to:o,value:a,gasPrice:c}=n;Sy(n);let l=[s?Lt(s):"0x",c?Lt(c):"0x",i?Lt(i):"0x",o??"0x",a?Lt(a):"0x",r??"0x"];if(t){const u=(()=>{if(t.v>=35n)return(t.v-35n)/2n>0?t.v:27n+(t.v===35n?0n:1n);if(e>0)return BigInt(e*2)+BigInt(35n+t.v-27n);const p=27n+(t.v===27n?0n:1n);if(t.v!==p)throw new qx({v:t.v});return p})(),h=Gs(t.r),f=Gs(t.s);l=[...l,Lt(u),h==="0x00"?"0x":h,f==="0x00"?"0x":f]}else e>0&&(l=[...l,Lt(e),"0x","0x"]);return Ni(l)}function ns(n,t){const e=t??n,{v:i,yParity:r}=e;if(typeof e.r>"u")return[];if(typeof e.s>"u")return[];if(typeof i>"u"&&typeof r>"u")return[];const s=Gs(e.r),o=Gs(e.s);return[typeof r=="number"?r?Lt(1):"0x":i===0n?"0x":i===1n?Lt(1):i===27n?"0x":Lt(1),s==="0x00"?"0x":s,o==="0x00"?"0x":o]}function Cy(n){if(!n||n.length===0)return[];const t=[];for(const e of n){const{chainId:i,nonce:r,...s}=e,o=e.address,a=ns({},s);a.length>0&&s.yParity&&(a[0]=ai(s.yParity)),t.push([i?ai(i):"0x",o,r?ai(r):"0x",...a])}return t}const Py=`Ethereum Signed Message:
`;function Ly(n){const t=typeof n=="string"?Ws(n):typeof n.raw=="string"?n.raw:Xn(n.raw),e=Ws(`${Py}${we(t)}`);return Eh([e,t])}function Iy(n,t){return $e(Ly(n),t)}class Dy extends Vt{constructor({domain:t}){super(`Invalid domain "${kx(t)}".`,{metaMessages:["Must be a valid EIP-712 domain."]})}}class Uy extends Vt{constructor({primaryType:t,types:e}){super(`Invalid primary type \`${t}\` must be one of \`${JSON.stringify(Object.keys(e))}\`.`,{docsPath:"/api/glossary/Errors#typeddatainvalidprimarytypeerror",metaMessages:["Check that the primary type is a key in `types`."]})}}class Ny extends Vt{constructor({type:t}){super(`Struct type "${t}" is invalid.`,{metaMessages:['Struct type must contain only letters, digits, "_" and "$", and must not be a Solidity type.'],name:"InvalidStructTypeError"})}}class fu extends Vt{constructor({type:t}){const e=/^u?int(\[[0-9]*\])*$/.test(t);super(`Type "${t}" is not a valid EIP-712 type.`,{metaMessages:e?[`Use "${t.replace(/^(u?int)/,"$&256")}" instead.`]:void 0,name:"InvalidTypedDataTypeError"})}}function Oy(n){const{domain:t,message:e,primaryType:i,types:r}=n,s=(o,a)=>{for(const c of o){const{name:l,type:u}=c,h=a[l],f=u.match(Cc);if(f&&(typeof h=="number"||typeof h=="bigint")){const[v,_,m]=f;Lt(h,{signed:_==="int",size:Number.parseInt(m,10)/8})}if(u==="address"&&typeof h=="string"&&!Gn(h))throw new Vn({address:h});const p=u.match(Ah);if(p){const[v,_]=p;if(_&&we(h)!==Number.parseInt(_,10))throw new Wv({expectedSize:Number.parseInt(_,10),givenSize:we(h)})}Object.hasOwn(r,u)&&s(r[u],h)}};for(const o of Object.keys(r))Hy(o);for(const o of Object.values(r))for(const a of o??[])By(a.type,r);if(r.EIP712Domain&&t){if(typeof t!="object")throw new Dy({domain:t});s(r.EIP712Domain,t)}if(i!=="EIP712Domain")if(r[i])s(r[i],e);else throw new Uy({primaryType:i,types:r})}function Fy({domain:n}){return[typeof n?.name=="string"&&{name:"name",type:"string"},typeof n?.version=="string"&&{name:"version",type:"string"},(typeof n?.chainId=="number"||typeof n?.chainId=="bigint")&&{name:"chainId",type:"uint256"},n?.verifyingContract&&{name:"verifyingContract",type:"address"},n?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}function By(n,t){const e=n.replace(/(\[[0-9]*\])+$/,"");if(e==="int"||e==="uint")throw new fu({type:n});if(!Object.hasOwn(t,e)&&!zy(e))throw new fu({type:n})}function zy(n){return n==="address"||n==="bool"||n==="string"||Ah.test(n)||Cc.test(n)}function Hy(n){if(!/^[A-Za-z0-9_$]+$/.test(n)||n==="address"||n==="bool"||n==="string"||/^(u?int|bytes)[0-9]*$/.test(n))throw new Ny({type:n})}function ky(n){const{domain:t={},message:e,primaryType:i}=n,r={EIP712Domain:Fy({domain:t}),...n.types};Oy({domain:t,message:e,primaryType:i,types:r});const s=["0x1901"];return t&&s.push(Vy({domain:t,types:r})),i!=="EIP712Domain"&&s.push(Xh({data:e,primaryType:i,types:r})),$e(Eh(s))}function Vy({domain:n,types:t}){return Xh({data:n,primaryType:"EIP712Domain",types:t})}function Xh({data:n,primaryType:t,types:e}){const i=qh({data:n,primaryType:t,types:e});return $e(i)}function qh({data:n,primaryType:t,types:e}){const i=[{type:"bytes32"}],r=[Gy({primaryType:t,types:e})];for(const s of e[t]){const[o,a]=$h({types:e,name:s.name,type:s.type,value:n[s.name]});i.push(o),r.push(a)}return Rh(i,r)}function Gy({primaryType:n,types:t}){const e=ai(Wy({primaryType:n,types:t}));return $e(e)}function Wy({primaryType:n,types:t}){let e="";const i=Yh({primaryType:n,types:t});i.delete(n);const r=[n,...Array.from(i).sort()];for(const s of r)e+=`${s}(${t[s].map(({name:o,type:a})=>`${a} ${o}`).join(",")})`;return e}function Yh({primaryType:n,types:t},e=new Set){const i=n.replace(/(\[[0-9]*\])+$/,"");if(e.has(i)||t[i]===void 0)return e;e.add(i);for(const r of t[i])Yh({primaryType:r.type,types:t},e);return e}function $h({types:n,name:t,type:e,value:i}){if(n[e]!==void 0)return[{type:"bytes32"},$e(qh({data:i,primaryType:e,types:n}))];if(e==="bytes")return[{type:"bytes32"},$e(i)];if(e==="string")return[{type:"bytes32"},$e(ai(i))];if(e.lastIndexOf("]")===e.length-1){const r=e.slice(0,e.lastIndexOf("[")),s=i.map(o=>$h({name:t,type:r,types:n,value:o}));return[{type:"bytes32"},$e(Rh(s.map(([o])=>o),s.map(([,o])=>o)))]}return[{type:e},i]}class Kh extends Ac{constructor(t,e){super(),this.finished=!1,this.destroyed=!1,cx(t);const i=Qs(e);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const r=this.blockLen,s=new Uint8Array(r);s.set(i.length>r?t.create().update(i).digest():i);for(let o=0;o<s.length;o++)s[o]^=54;this.iHash.update(s),this.oHash=t.create();for(let o=0;o<s.length;o++)s[o]^=106;this.oHash.update(s),xr(s)}update(t){return vr(this),this.iHash.update(t),this}digestInto(t){vr(this),Ui(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:e,iHash:i,finished:r,destroyed:s,blockLen:o,outputLen:a}=this;return t=t,t.finished=r,t.destroyed=s,t.blockLen=o,t.outputLen=a,t.oHash=e._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Zh=(n,t,e)=>new Kh(n,t).update(e).digest();Zh.create=(n,t)=>new Kh(n,t);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const He=BigInt(0),Oe=BigInt(1),Ai=BigInt(2),Xy=BigInt(3),jh=BigInt(4),Jh=BigInt(5),Qh=BigInt(8);function Be(n,t){const e=n%t;return e>=He?e:t+e}function je(n,t,e){let i=n;for(;t-- >He;)i*=i,i%=e;return i}function Za(n,t){if(n===He)throw new Error("invert: expected non-zero number");if(t<=He)throw new Error("invert: expected positive modulus, got "+t);let e=Be(n,t),i=t,r=He,s=Oe;for(;e!==He;){const a=i/e,c=i%e,l=r-s*a;i=e,e=c,r=s,s=l}if(i!==Oe)throw new Error("invert: does not exist");return Be(r,t)}function tf(n,t){const e=(n.ORDER+Oe)/jh,i=n.pow(t,e);if(!n.eql(n.sqr(i),t))throw new Error("Cannot find square root");return i}function qy(n,t){const e=(n.ORDER-Jh)/Qh,i=n.mul(t,Ai),r=n.pow(i,e),s=n.mul(t,r),o=n.mul(n.mul(s,Ai),r),a=n.mul(s,n.sub(o,n.ONE));if(!n.eql(n.sqr(a),t))throw new Error("Cannot find square root");return a}function Yy(n){if(n<BigInt(3))throw new Error("sqrt is not defined for small field");let t=n-Oe,e=0;for(;t%Ai===He;)t/=Ai,e++;let i=Ai;const r=Bc(n);for(;du(r,i)===1;)if(i++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(e===1)return tf;let s=r.pow(i,t);const o=(t+Oe)/Ai;return function(c,l){if(c.is0(l))return l;if(du(c,l)!==1)throw new Error("Cannot find square root");let u=e,h=c.mul(c.ONE,s),f=c.pow(l,t),p=c.pow(l,o);for(;!c.eql(f,c.ONE);){if(c.is0(f))return c.ZERO;let v=1,_=c.sqr(f);for(;!c.eql(_,c.ONE);)if(v++,_=c.sqr(_),v===u)throw new Error("Cannot find square root");const m=Oe<<BigInt(u-v-1),d=c.pow(h,m);u=v,h=c.sqr(d),f=c.mul(f,h),p=c.mul(p,d)}return p}}function $y(n){return n%jh===Xy?tf:n%Qh===Jh?qy:Yy(n)}const Ky=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Zy(n){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},e=Ky.reduce((i,r)=>(i[r]="function",i),t);return no(n,e)}function jy(n,t,e){if(e<He)throw new Error("invalid exponent, negatives unsupported");if(e===He)return n.ONE;if(e===Oe)return t;let i=n.ONE,r=t;for(;e>He;)e&Oe&&(i=n.mul(i,r)),r=n.sqr(r),e>>=Oe;return i}function ef(n,t,e=!1){const i=new Array(t.length).fill(e?n.ZERO:void 0),r=t.reduce((o,a,c)=>n.is0(a)?o:(i[c]=o,n.mul(o,a)),n.ONE),s=n.inv(r);return t.reduceRight((o,a,c)=>n.is0(a)?o:(i[c]=n.mul(o,i[c]),n.mul(o,a)),s),i}function du(n,t){const e=(n.ORDER-Oe)/Ai,i=n.pow(t,e),r=n.eql(i,n.ONE),s=n.eql(i,n.ZERO),o=n.eql(i,n.neg(n.ONE));if(!r&&!s&&!o)throw new Error("invalid Legendre symbol result");return r?1:s?0:-1}function nf(n,t){t!==void 0&&Kr(t);const e=t!==void 0?t:n.toString(2).length,i=Math.ceil(e/8);return{nBitLength:e,nByteLength:i}}function Bc(n,t,e=!1,i={}){if(n<=He)throw new Error("invalid field: expected ORDER > 0, got "+n);const{nBitLength:r,nByteLength:s}=nf(n,t);if(s>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let o;const a=Object.freeze({ORDER:n,isLE:e,BITS:r,BYTES:s,MASK:eo(r),ZERO:He,ONE:Oe,create:c=>Be(c,n),isValid:c=>{if(typeof c!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof c);return He<=c&&c<n},is0:c=>c===He,isOdd:c=>(c&Oe)===Oe,neg:c=>Be(-c,n),eql:(c,l)=>c===l,sqr:c=>Be(c*c,n),add:(c,l)=>Be(c+l,n),sub:(c,l)=>Be(c-l,n),mul:(c,l)=>Be(c*l,n),pow:(c,l)=>jy(a,c,l),div:(c,l)=>Be(c*Za(l,n),n),sqrN:c=>c*c,addN:(c,l)=>c+l,subN:(c,l)=>c-l,mulN:(c,l)=>c*l,inv:c=>Za(c,n),sqrt:i.sqrt||(c=>(o||(o=$y(n)),o(a,c))),toBytes:c=>e?Wh(c,s):es(c,s),fromBytes:c=>{if(c.length!==s)throw new Error("Field.fromBytes: expected "+s+" bytes, got "+c.length);return e?Gh(c):Ri(c)},invertBatch:c=>ef(a,c),cmov:(c,l,u)=>u?l:c});return Object.freeze(a)}function rf(n){if(typeof n!="bigint")throw new Error("field order must be bigint");const t=n.toString(2).length;return Math.ceil(t/8)}function sf(n){const t=rf(n);return t+Math.ceil(t/2)}function Jy(n,t,e=!1){const i=n.length,r=rf(t),s=sf(t);if(i<16||i<s||i>1024)throw new Error("expected "+s+"-1024 bytes of input, got "+i);const o=e?Gh(n):Ri(n),a=Be(o,t-Oe)+Oe;return e?Wh(a,r):es(a,r)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const pu=BigInt(0),ja=BigInt(1);function Jo(n,t){const e=t.negate();return n?e:t}function of(n,t){if(!Number.isSafeInteger(n)||n<=0||n>t)throw new Error("invalid window size, expected [1.."+t+"], got W="+n)}function Qo(n,t){of(n,t);const e=Math.ceil(t/n)+1,i=2**(n-1),r=2**n,s=eo(n),o=BigInt(n);return{windows:e,windowSize:i,mask:s,maxNumber:r,shiftBy:o}}function mu(n,t,e){const{windowSize:i,mask:r,maxNumber:s,shiftBy:o}=e;let a=Number(n&r),c=n>>o;a>i&&(a-=s,c+=ja);const l=t*i,u=l+Math.abs(a)-1,h=a===0,f=a<0,p=t%2!==0;return{nextN:c,offset:u,isZero:h,isNeg:f,isNegF:p,offsetF:l}}function Qy(n,t){if(!Array.isArray(n))throw new Error("array expected");n.forEach((e,i)=>{if(!(e instanceof t))throw new Error("invalid point at index "+i)})}function tM(n,t){if(!Array.isArray(n))throw new Error("array of scalars expected");n.forEach((e,i)=>{if(!t.isValid(e))throw new Error("invalid scalar at index "+i)})}const ta=new WeakMap,af=new WeakMap;function ea(n){return af.get(n)||1}function eM(n,t){return{constTimeNegate:Jo,hasPrecomputes(e){return ea(e)!==1},unsafeLadder(e,i,r=n.ZERO){let s=e;for(;i>pu;)i&ja&&(r=r.add(s)),s=s.double(),i>>=ja;return r},precomputeWindow(e,i){const{windows:r,windowSize:s}=Qo(i,t),o=[];let a=e,c=a;for(let l=0;l<r;l++){c=a,o.push(c);for(let u=1;u<s;u++)c=c.add(a),o.push(c);a=c.double()}return o},wNAF(e,i,r){let s=n.ZERO,o=n.BASE;const a=Qo(e,t);for(let c=0;c<a.windows;c++){const{nextN:l,offset:u,isZero:h,isNeg:f,isNegF:p,offsetF:v}=mu(r,c,a);r=l,h?o=o.add(Jo(p,i[v])):s=s.add(Jo(f,i[u]))}return{p:s,f:o}},wNAFUnsafe(e,i,r,s=n.ZERO){const o=Qo(e,t);for(let a=0;a<o.windows&&r!==pu;a++){const{nextN:c,offset:l,isZero:u,isNeg:h}=mu(r,a,o);if(r=c,!u){const f=i[l];s=s.add(h?f.negate():f)}}return s},getPrecomputes(e,i,r){let s=ta.get(i);return s||(s=this.precomputeWindow(i,e),e!==1&&ta.set(i,r(s))),s},wNAFCached(e,i,r){const s=ea(e);return this.wNAF(s,this.getPrecomputes(s,e,r),i)},wNAFCachedUnsafe(e,i,r,s){const o=ea(e);return o===1?this.unsafeLadder(e,i,s):this.wNAFUnsafe(o,this.getPrecomputes(o,e,r),i,s)},setWindowSize(e,i){of(i,t),af.set(e,i),ta.delete(e)}}}function nM(n,t,e,i){Qy(e,n),tM(i,t);const r=e.length,s=i.length;if(r!==s)throw new Error("arrays of points and scalars must have equal length");const o=n.ZERO,a=gy(BigInt(r));let c=1;a>12?c=a-3:a>4?c=a-2:a>0&&(c=2);const l=eo(c),u=new Array(Number(l)+1).fill(o),h=Math.floor((t.BITS-1)/c)*c;let f=o;for(let p=h;p>=0;p-=c){u.fill(o);for(let _=0;_<s;_++){const m=i[_],d=Number(m>>BigInt(p)&l);u[d]=u[d].add(e[_])}let v=o;for(let _=u.length-1,m=o;_>0;_--)m=m.add(u[_]),v=v.add(m);if(f=f.add(v),p!==0)for(let _=0;_<c;_++)f=f.double()}return f}function cf(n){return Zy(n.Fp),no(n,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...nf(n.n,n.nBitLength),...n,p:n.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function gu(n){n.lowS!==void 0&&Zr("lowS",n.lowS),n.prehash!==void 0&&Zr("prehash",n.prehash)}function iM(n){const t=cf(n);no(t,{a:"field",b:"field"},{allowInfinityPoint:"boolean",allowedPrivateKeyLengths:"array",clearCofactor:"function",fromBytes:"function",isTorsionFree:"function",toBytes:"function",wrapPrivateKey:"boolean"});const{endo:e,Fp:i,a:r}=t;if(e){if(!i.eql(r,i.ZERO))throw new Error("invalid endo: CURVE.a must be 0");if(typeof e!="object"||typeof e.beta!="bigint"||typeof e.splitScalar!="function")throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function')}return Object.freeze({...t})}class rM extends Error{constructor(t=""){super(t)}}const In={Err:rM,_tlv:{encode:(n,t)=>{const{Err:e}=In;if(n<0||n>256)throw new e("tlv.encode: wrong tag");if(t.length&1)throw new e("tlv.encode: unpadded data");const i=t.length/2,r=Cs(i);if(r.length/2&128)throw new e("tlv.encode: long form length too big");const s=i>127?Cs(r.length/2|128):"";return Cs(n)+s+r+t},decode(n,t){const{Err:e}=In;let i=0;if(n<0||n>256)throw new e("tlv.encode: wrong tag");if(t.length<2||t[i++]!==n)throw new e("tlv.decode: wrong tlv");const r=t[i++],s=!!(r&128);let o=0;if(!s)o=r;else{const c=r&127;if(!c)throw new e("tlv.decode(long): indefinite length not supported");if(c>4)throw new e("tlv.decode(long): byte length is too big");const l=t.subarray(i,i+c);if(l.length!==c)throw new e("tlv.decode: length bytes not complete");if(l[0]===0)throw new e("tlv.decode(long): zero leftmost byte");for(const u of l)o=o<<8|u;if(i+=c,o<128)throw new e("tlv.decode(long): not minimal encoding")}const a=t.subarray(i,i+o);if(a.length!==o)throw new e("tlv.decode: wrong value length");return{v:a,l:t.subarray(i+o)}}},_int:{encode(n){const{Err:t}=In;if(n<Dn)throw new t("integer: negative integers are not allowed");let e=Cs(n);if(Number.parseInt(e[0],16)&8&&(e="00"+e),e.length&1)throw new t("unexpected DER parsing assertion: unpadded hex");return e},decode(n){const{Err:t}=In;if(n[0]&128)throw new t("invalid signature integer: negative");if(n[0]===0&&!(n[1]&128))throw new t("invalid signature integer: unnecessary leading zero");return Ri(n)}},toSig(n){const{Err:t,_int:e,_tlv:i}=In,r=Qe("signature",n),{v:s,l:o}=i.decode(48,r);if(o.length)throw new t("invalid signature: left bytes after parsing");const{v:a,l:c}=i.decode(2,s),{v:l,l:u}=i.decode(2,c);if(u.length)throw new t("invalid signature: left bytes after parsing");return{r:e.decode(a),s:e.decode(l)}},hexFromSig(n){const{_tlv:t,_int:e}=In,i=t.encode(2,e.encode(n.r)),r=t.encode(2,e.encode(n.s)),s=i+r;return t.encode(48,s)}};function na(n,t){return jr(es(n,t))}const Dn=BigInt(0),Ee=BigInt(1);BigInt(2);const ia=BigInt(3),sM=BigInt(4);function oM(n){const t=iM(n),{Fp:e}=t,i=Bc(t.n,t.nBitLength),r=t.toBytes||((y,g,R)=>{const w=g.toAffine();return qs(Uint8Array.from([4]),e.toBytes(w.x),e.toBytes(w.y))}),s=t.fromBytes||(y=>{const g=y.subarray(1),R=e.fromBytes(g.subarray(0,e.BYTES)),w=e.fromBytes(g.subarray(e.BYTES,2*e.BYTES));return{x:R,y:w}});function o(y){const{a:g,b:R}=t,w=e.sqr(y),A=e.mul(w,y);return e.add(e.add(A,e.mul(y,g)),R)}function a(y,g){const R=e.sqr(g),w=o(y);return e.eql(R,w)}if(!a(t.Gx,t.Gy))throw new Error("bad curve params: generator point");const c=e.mul(e.pow(t.a,ia),sM),l=e.mul(e.sqr(t.b),BigInt(27));if(e.is0(e.add(c,l)))throw new Error("bad curve params: a or b");function u(y){return Oc(y,Ee,t.n)}function h(y){const{allowedPrivateKeyLengths:g,nByteLength:R,wrapPrivateKey:w,n:A}=t;if(g&&typeof y!="bigint"){if(ts(y)&&(y=jr(y)),typeof y!="string"||!g.includes(y.length))throw new Error("invalid private key");y=y.padStart(R*2,"0")}let P;try{P=typeof y=="bigint"?y:Ri(Qe("private key",y,R))}catch{throw new Error("invalid private key, expected hex or "+R+" bytes, got "+typeof y)}return w&&(P=Be(P,A)),ur("private key",P,Ee,A),P}function f(y){if(!(y instanceof _))throw new Error("ProjectivePoint expected")}const p=hu((y,g)=>{const{px:R,py:w,pz:A}=y;if(e.eql(A,e.ONE))return{x:R,y:w};const P=y.is0();g==null&&(g=P?e.ONE:e.inv(A));const S=e.mul(R,g),x=e.mul(w,g),C=e.mul(A,g);if(P)return{x:e.ZERO,y:e.ZERO};if(!e.eql(C,e.ONE))throw new Error("invZ was invalid");return{x:S,y:x}}),v=hu(y=>{if(y.is0()){if(t.allowInfinityPoint&&!e.is0(y.py))return;throw new Error("bad point: ZERO")}const{x:g,y:R}=y.toAffine();if(!e.isValid(g)||!e.isValid(R))throw new Error("bad point: x or y not FE");if(!a(g,R))throw new Error("bad point: equation left != right");if(!y.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});class _{constructor(g,R,w){if(g==null||!e.isValid(g))throw new Error("x required");if(R==null||!e.isValid(R)||e.is0(R))throw new Error("y required");if(w==null||!e.isValid(w))throw new Error("z required");this.px=g,this.py=R,this.pz=w,Object.freeze(this)}static fromAffine(g){const{x:R,y:w}=g||{};if(!g||!e.isValid(R)||!e.isValid(w))throw new Error("invalid affine point");if(g instanceof _)throw new Error("projective point not allowed");const A=P=>e.eql(P,e.ZERO);return A(R)&&A(w)?_.ZERO:new _(R,w,e.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(g){const R=ef(e,g.map(w=>w.pz));return g.map((w,A)=>w.toAffine(R[A])).map(_.fromAffine)}static fromHex(g){const R=_.fromAffine(s(Qe("pointHex",g)));return R.assertValidity(),R}static fromPrivateKey(g){return _.BASE.multiply(h(g))}static msm(g,R){return nM(_,i,g,R)}_setWindowSize(g){E.setWindowSize(this,g)}assertValidity(){v(this)}hasEvenY(){const{y:g}=this.toAffine();if(e.isOdd)return!e.isOdd(g);throw new Error("Field doesn't support isOdd")}equals(g){f(g);const{px:R,py:w,pz:A}=this,{px:P,py:S,pz:x}=g,C=e.eql(e.mul(R,x),e.mul(P,A)),z=e.eql(e.mul(w,x),e.mul(S,A));return C&&z}negate(){return new _(this.px,e.neg(this.py),this.pz)}double(){const{a:g,b:R}=t,w=e.mul(R,ia),{px:A,py:P,pz:S}=this;let x=e.ZERO,C=e.ZERO,z=e.ZERO,D=e.mul(A,A),W=e.mul(P,P),B=e.mul(S,S),I=e.mul(A,P);return I=e.add(I,I),z=e.mul(A,S),z=e.add(z,z),x=e.mul(g,z),C=e.mul(w,B),C=e.add(x,C),x=e.sub(W,C),C=e.add(W,C),C=e.mul(x,C),x=e.mul(I,x),z=e.mul(w,z),B=e.mul(g,B),I=e.sub(D,B),I=e.mul(g,I),I=e.add(I,z),z=e.add(D,D),D=e.add(z,D),D=e.add(D,B),D=e.mul(D,I),C=e.add(C,D),B=e.mul(P,S),B=e.add(B,B),D=e.mul(B,I),x=e.sub(x,D),z=e.mul(B,W),z=e.add(z,z),z=e.add(z,z),new _(x,C,z)}add(g){f(g);const{px:R,py:w,pz:A}=this,{px:P,py:S,pz:x}=g;let C=e.ZERO,z=e.ZERO,D=e.ZERO;const W=t.a,B=e.mul(t.b,ia);let I=e.mul(R,P),X=e.mul(w,S),H=e.mul(A,x),K=e.add(R,w),Q=e.add(P,S);K=e.mul(K,Q),Q=e.add(I,X),K=e.sub(K,Q),Q=e.add(R,A);let st=e.add(P,x);return Q=e.mul(Q,st),st=e.add(I,H),Q=e.sub(Q,st),st=e.add(w,A),C=e.add(S,x),st=e.mul(st,C),C=e.add(X,H),st=e.sub(st,C),D=e.mul(W,Q),C=e.mul(B,H),D=e.add(C,D),C=e.sub(X,D),D=e.add(X,D),z=e.mul(C,D),X=e.add(I,I),X=e.add(X,I),H=e.mul(W,H),Q=e.mul(B,Q),X=e.add(X,H),H=e.sub(I,H),H=e.mul(W,H),Q=e.add(Q,H),I=e.mul(X,Q),z=e.add(z,I),I=e.mul(st,Q),C=e.mul(K,C),C=e.sub(C,I),I=e.mul(K,X),D=e.mul(st,D),D=e.add(D,I),new _(C,z,D)}subtract(g){return this.add(g.negate())}is0(){return this.equals(_.ZERO)}wNAF(g){return E.wNAFCached(this,g,_.normalizeZ)}multiplyUnsafe(g){const{endo:R,n:w}=t;ur("scalar",g,Dn,w);const A=_.ZERO;if(g===Dn)return A;if(this.is0()||g===Ee)return this;if(!R||E.hasPrecomputes(this))return E.wNAFCachedUnsafe(this,g,_.normalizeZ);let{k1neg:P,k1:S,k2neg:x,k2:C}=R.splitScalar(g),z=A,D=A,W=this;for(;S>Dn||C>Dn;)S&Ee&&(z=z.add(W)),C&Ee&&(D=D.add(W)),W=W.double(),S>>=Ee,C>>=Ee;return P&&(z=z.negate()),x&&(D=D.negate()),D=new _(e.mul(D.px,R.beta),D.py,D.pz),z.add(D)}multiply(g){const{endo:R,n:w}=t;ur("scalar",g,Ee,w);let A,P;if(R){const{k1neg:S,k1:x,k2neg:C,k2:z}=R.splitScalar(g);let{p:D,f:W}=this.wNAF(x),{p:B,f:I}=this.wNAF(z);D=E.constTimeNegate(S,D),B=E.constTimeNegate(C,B),B=new _(e.mul(B.px,R.beta),B.py,B.pz),A=D.add(B),P=W.add(I)}else{const{p:S,f:x}=this.wNAF(g);A=S,P=x}return _.normalizeZ([A,P])[0]}multiplyAndAddUnsafe(g,R,w){const A=_.BASE,P=(x,C)=>C===Dn||C===Ee||!x.equals(A)?x.multiplyUnsafe(C):x.multiply(C),S=P(this,R).add(P(g,w));return S.is0()?void 0:S}toAffine(g){return p(this,g)}isTorsionFree(){const{h:g,isTorsionFree:R}=t;if(g===Ee)return!0;if(R)return R(_,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:g,clearCofactor:R}=t;return g===Ee?this:R?R(_,this):this.multiplyUnsafe(t.h)}toRawBytes(g=!0){return Zr("isCompressed",g),this.assertValidity(),r(_,this,g)}toHex(g=!0){return Zr("isCompressed",g),jr(this.toRawBytes(g))}}_.BASE=new _(t.Gx,t.Gy,e.ONE),_.ZERO=new _(e.ZERO,e.ONE,e.ZERO);const{endo:m,nBitLength:d}=t,E=eM(_,m?Math.ceil(d/2):d);return{CURVE:t,ProjectivePoint:_,normPrivateKeyToScalar:h,weierstrassEquation:o,isWithinCurveOrder:u}}function aM(n){const t=cf(n);return no(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function cM(n){const t=aM(n),{Fp:e,n:i,nByteLength:r,nBitLength:s}=t,o=e.BYTES+1,a=2*e.BYTES+1;function c(B){return Be(B,i)}function l(B){return Za(B,i)}const{ProjectivePoint:u,normPrivateKeyToScalar:h,weierstrassEquation:f,isWithinCurveOrder:p}=oM({...t,toBytes(B,I,X){const H=I.toAffine(),K=e.toBytes(H.x),Q=qs;return Zr("isCompressed",X),X?Q(Uint8Array.from([I.hasEvenY()?2:3]),K):Q(Uint8Array.from([4]),K,e.toBytes(H.y))},fromBytes(B){const I=B.length,X=B[0],H=B.subarray(1);if(I===o&&(X===2||X===3)){const K=Ri(H);if(!Oc(K,Ee,e.ORDER))throw new Error("Point is not on curve");const Q=f(K);let st;try{st=e.sqrt(Q)}catch(Y){const tt=Y instanceof Error?": "+Y.message:"";throw new Error("Point is not on curve"+tt)}const St=(st&Ee)===Ee;return(X&1)===1!==St&&(st=e.neg(st)),{x:K,y:st}}else if(I===a&&X===4){const K=e.fromBytes(H.subarray(0,e.BYTES)),Q=e.fromBytes(H.subarray(e.BYTES,2*e.BYTES));return{x:K,y:Q}}else{const K=o,Q=a;throw new Error("invalid Point, expected length of "+K+", or uncompressed "+Q+", got "+I)}}});function v(B){const I=i>>Ee;return B>I}function _(B){return v(B)?c(-B):B}const m=(B,I,X)=>Ri(B.slice(I,X));class d{constructor(I,X,H){ur("r",I,Ee,i),ur("s",X,Ee,i),this.r=I,this.s=X,H!=null&&(this.recovery=H),Object.freeze(this)}static fromCompact(I){const X=r;return I=Qe("compactSignature",I,X*2),new d(m(I,0,X),m(I,X,2*X))}static fromDER(I){const{r:X,s:H}=In.toSig(Qe("DER",I));return new d(X,H)}assertValidity(){}addRecoveryBit(I){return new d(this.r,this.s,I)}recoverPublicKey(I){const{r:X,s:H,recovery:K}=this,Q=A(Qe("msgHash",I));if(K==null||![0,1,2,3].includes(K))throw new Error("recovery id invalid");const st=K===2||K===3?X+t.n:X;if(st>=e.ORDER)throw new Error("recovery id 2 or 3 invalid");const St=K&1?"03":"02",Ht=u.fromHex(St+na(st,e.BYTES)),Y=l(st),tt=c(-Q*Y),ft=c(H*Y),rt=u.BASE.multiplyAndAddUnsafe(Ht,tt,ft);if(!rt)throw new Error("point at infinify");return rt.assertValidity(),rt}hasHighS(){return v(this.s)}normalizeS(){return this.hasHighS()?new d(this.r,c(-this.s),this.recovery):this}toDERRawBytes(){return Xs(this.toDERHex())}toDERHex(){return In.hexFromSig(this)}toCompactRawBytes(){return Xs(this.toCompactHex())}toCompactHex(){const I=r;return na(this.r,I)+na(this.s,I)}}const E={isValidPrivateKey(B){try{return h(B),!0}catch{return!1}},normPrivateKeyToScalar:h,randomPrivateKey:()=>{const B=sf(t.n);return Jy(t.randomBytes(B),t.n)},precompute(B=8,I=u.BASE){return I._setWindowSize(B),I.multiply(BigInt(3)),I}};function y(B,I=!0){return u.fromPrivateKey(B).toRawBytes(I)}function g(B){if(typeof B=="bigint")return!1;if(B instanceof u)return!0;const X=Qe("key",B).length,H=e.BYTES,K=H+1,Q=2*H+1;if(!(t.allowedPrivateKeyLengths||r===K))return X===K||X===Q}function R(B,I,X=!0){if(g(B)===!0)throw new Error("first arg must be private key");if(g(I)===!1)throw new Error("second arg must be public key");return u.fromHex(I).multiply(h(B)).toRawBytes(X)}const w=t.bits2int||function(B){if(B.length>8192)throw new Error("input is too large");const I=Ri(B),X=B.length*8-s;return X>0?I>>BigInt(X):I},A=t.bits2int_modN||function(B){return c(w(B))},P=eo(s);function S(B){return ur("num < 2^"+s,B,Dn,P),es(B,r)}function x(B,I,X=C){if(["recovered","canonical"].some(wt=>wt in X))throw new Error("sign() legacy options not supported");const{hash:H,randomBytes:K}=t;let{lowS:Q,prehash:st,extraEntropy:St}=X;Q==null&&(Q=!0),B=Qe("msgHash",B),gu(X),st&&(B=Qe("prehashed msgHash",H(B)));const Ht=A(B),Y=h(I),tt=[S(Y),S(Ht)];if(St!=null&&St!==!1){const wt=St===!0?K(e.BYTES):St;tt.push(Qe("extraEntropy",wt))}const ft=qs(...tt),rt=Ht;function bt(wt){const It=w(wt);if(!p(It))return;const ee=l(It),zt=u.BASE.multiply(It).toAffine(),Jt=c(zt.x);if(Jt===Dn)return;const N=c(ee*c(rt+Jt*Y));if(N===Dn)return;let ve=(zt.x===Jt?0:2)|Number(zt.y&Ee),kt=N;return Q&&v(N)&&(kt=_(N),ve^=1),new d(Jt,kt,ve)}return{seed:ft,k2sig:bt}}const C={lowS:t.lowS,prehash:!1},z={lowS:t.lowS,prehash:!1};function D(B,I,X=C){const{seed:H,k2sig:K}=x(B,I,X),Q=t;return _y(Q.hash.outputLen,Q.nByteLength,Q.hmac)(H,K)}u.BASE._setWindowSize(8);function W(B,I,X,H=z){const K=B;I=Qe("msgHash",I),X=Qe("publicKey",X);const{lowS:Q,prehash:st,format:St}=H;if(gu(H),"strict"in H)throw new Error("options.strict was renamed to lowS");if(St!==void 0&&St!=="compact"&&St!=="der")throw new Error("format must be compact or der");const Ht=typeof K=="string"||ts(K),Y=!Ht&&!St&&typeof K=="object"&&K!==null&&typeof K.r=="bigint"&&typeof K.s=="bigint";if(!Ht&&!Y)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");let tt,ft;try{if(Y&&(tt=new d(K.r,K.s)),Ht){try{St!=="compact"&&(tt=d.fromDER(K))}catch(ve){if(!(ve instanceof In.Err))throw ve}!tt&&St!=="der"&&(tt=d.fromCompact(K))}ft=u.fromHex(X)}catch{return!1}if(!tt||Q&&tt.hasHighS())return!1;st&&(I=t.hash(I));const{r:rt,s:bt}=tt,wt=A(I),It=l(bt),ee=c(wt*It),zt=c(rt*It),Jt=u.BASE.multiplyAndAddUnsafe(ft,ee,zt)?.toAffine();return Jt?c(Jt.x)===rt:!1}return{CURVE:t,getPublicKey:y,getSharedSecret:R,sign:D,verify:W,ProjectivePoint:u,Signature:d,utils:E}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function lM(n){return{hash:n,hmac:(t,...e)=>Zh(n,t,px(...e)),randomBytes:mx}}function uM(n,t){const e=i=>cM({...n,...lM(i)});return{...e(t),create:e}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const lf=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),_u=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),hM=BigInt(0),fM=BigInt(1),Ja=BigInt(2),vu=(n,t)=>(n+t/Ja)/t;function dM(n){const t=lf,e=BigInt(3),i=BigInt(6),r=BigInt(11),s=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=n*n*n%t,u=l*l*n%t,h=je(u,e,t)*u%t,f=je(h,e,t)*u%t,p=je(f,Ja,t)*l%t,v=je(p,r,t)*p%t,_=je(v,s,t)*v%t,m=je(_,a,t)*_%t,d=je(m,c,t)*m%t,E=je(d,a,t)*_%t,y=je(E,e,t)*u%t,g=je(y,o,t)*v%t,R=je(g,i,t)*l%t,w=je(R,Ja,t);if(!Qa.eql(Qa.sqr(w),n))throw new Error("Cannot find square root");return w}const Qa=Bc(lf,void 0,void 0,{sqrt:dM}),so=uM({a:hM,b:BigInt(7),Fp:Qa,n:_u,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:n=>{const t=_u,e=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-fM*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),r=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),s=e,o=BigInt("0x100000000000000000000000000000000"),a=vu(s*n,t),c=vu(-i*n,t);let l=Be(n-a*e-c*r,t),u=Be(-a*i-c*s,t);const h=l>o,f=u>o;if(h&&(l=t-l),f&&(u=t-u),l>o||u>o)throw new Error("splitScalar: Endomorphism failed, k="+n);return{k1neg:h,k1:l,k2neg:f,k2:u}}}},Oh);function pM({r:n,s:t,to:e="hex",v:i,yParity:r}){const s=(()=>{if(r===0||r===1)return r;if(i&&(i===27n||i===28n||i>=35n))return i%2n===0n?1:0;throw new Error("Invalid `v` or `yParity` value")})(),o=`0x${new so.Signature(qa(n),qa(t)).toCompactHex()}${s===0?"1b":"1c"}`;return e==="hex"?o:yn(o)}function mM(){return ai(so.utils.randomPrivateKey())}function gM(n){if(typeof n=="string"){if(!Gn(n,{strict:!1}))throw new Vn({address:n});return{address:n,type:"json-rpc"}}if(!Gn(n.address,{strict:!1}))throw new Vn({address:n.address});return{address:n.address,nonceManager:n.nonceManager,sign:n.sign,signAuthorization:n.signAuthorization,signMessage:n.signMessage,signTransaction:n.signTransaction,signTypedData:n.signTypedData,source:"custom",type:"local"}}let ra=!1;async function is({hash:n,privateKey:t,to:e="object"}){const{r:i,s:r,recovery:s}=so.sign(n.slice(2),t.slice(2),{lowS:!0,extraEntropy:Ar(ra,{strict:!1})?yn(ra):ra}),o={r:Lt(i,{size:32}),s:Lt(r,{size:32}),v:s?28n:27n,yParity:s};return e==="bytes"||e==="hex"?pM({...o,to:e}):o}async function _M(n){const{chainId:t,nonce:e,privateKey:i,to:r="object"}=n,s=n.contractAddress??n.address,o=await is({hash:Jx({address:s,chainId:t,nonce:e}),privateKey:i,to:r});return r==="object"?{address:s,chainId:t,nonce:e,...o}:o}async function vM({message:n,privateKey:t}){return await is({hash:Iy(n),privateKey:t,to:"hex"})}async function xM(n){const{privateKey:t,transaction:e,serializer:i=Ey}=n,r=e.type==="eip4844"?{...e,sidecars:!1}:e,s=await is({hash:$e(await i(r)),privateKey:t});return await i(e,s)}async function yM(n){const{privateKey:t,...e}=n;return await is({hash:ky(e),privateKey:t,to:"hex"})}function MM(n,t={}){const{nonceManager:e}=t,i=ai(so.getPublicKey(n.slice(2),!1)),r=Kx(i);return{...gM({address:r,nonceManager:e,async sign({hash:o}){return is({hash:o,privateKey:n,to:"hex"})},async signAuthorization(o){return _M({...o,privateKey:n})},async signMessage({message:o}){return vM({message:o,privateKey:n})},async signTransaction(o,{serializer:a}={}){return xM({privateKey:n,transaction:o,serializer:a})},async signTypedData(o){return yM({...o,privateKey:n})}}),publicKey:i,source:"privateKey"}}function SM(){try{return localStorage.getItem("chaipay.key")}catch{return null}}let zs=SM();if(!zs){zs=mM();try{localStorage.setItem("chaipay.key",zs)}catch{}}const Ci=MM(zs),tc={InsufficientBalance:"NOT ENOUGH USDT. ADD MONEY FIRST.",SignatureExpired:"THAT TOOK TOO LONG. TRY AGAIN.",BadNonce:"THAT PAYMENT WAS ALREADY SENT.",OrderTooLarge:"THAT'S ABOVE THE PAYMENT LIMIT.",InvalidSignature:"SIGNATURE DIDN'T MATCH. TRY AGAIN."};async function yr(n,{method:t="GET",body:e}={}){let i;try{i=await fetch(n,{method:t,headers:{"content-type":"application/json"},body:e?JSON.stringify(e):void 0})}catch{throw new Error("CAN'T REACH THE CHAIPAY SERVER.")}const r=await i.json().catch(()=>({}));if(!i.ok){const s=String(r.error||`REQUEST FAILED (${i.status})`),o=Object.keys(tc).find(a=>s.includes(a));throw new Error(o?tc[o]:s.toUpperCase())}return r}let EM=null;const zc=()=>EM??=yr("/api/config");async function uf(){const[n,t]=await Promise.all([zc(),yr(`/api/account/${Ci.address}`)]),e=Number(t.usdt),i=e*n.inrPerUsdt/(1+n.spreadBps/1e4);return{usdt:e,inr:i,raw:BigInt(t.balance)}}async function bM(n){const t=Math.round(n*100);return{...await yr(`/api/quote?paise=${t}`),paise:t}}async function wM({vpa:n,name:t,q:e}){const i=await zc(),r=await yr(`/api/account/${Ci.address}`);if(BigInt(r.balance)<BigInt(e.usdtAmount))throw new Error(tc.InsufficientBalance);const s=n.toLowerCase(),o={payer:Ci.address,payeeHash:$e(Tc(s)),inrPaise:String(e.paise),usdtAmount:e.usdtAmount,nonce:r.nonce,deadline:String(Math.floor(Date.now()/1e3)+300)},a=await Ci.signTypedData({domain:i.domain,types:{Pay:i.types.Pay},primaryType:"Pay",message:{...o,inrPaise:BigInt(o.inrPaise),usdtAmount:BigInt(o.usdtAmount),nonce:BigInt(o.nonce),deadline:BigInt(o.deadline)}});return yr("/api/pay",{method:"POST",body:{intent:o,signature:a,vpa:s,payeeName:t}})}const TM=n=>yr(`/api/orders/${encodeURIComponent(n)}`);function AM(n,t){let e=null,i=!1;const r=async()=>{if(!i){try{const s=await TM(n);if(s.status!==e&&(e=s.status,t(s)),s.status==="Fulfilled"||s.status==="Refunded")return}catch{}setTimeout(r,2e3)}};return r(),()=>i=!0}const xu=new URLSearchParams(location.search);for(const n of Object.keys(_r))xu.get(n)&&(_r[n].vpa=xu.get(n));const RM=matchMedia("(prefers-reduced-motion: reduce)").matches,Ys=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),CM=document.getElementById("scene"),oo=new z_({canvas:CM,antialias:!1,powerPreference:"high-performance"}),hf=Math.min(devicePixelRatio||1,1.5);oo.setPixelRatio(hf);oo.outputColorSpace=Ue;const Mn=new Qu;Mn.background=new qt($.sky);const _e=new tn(55,1,.1,2e3);Mn.add(_e);const PM=new av(16777215,1.35),ec=new ov(16777215,1.9);Mn.add(PM,ec,ec.target);const nc=hv();Mn.add(nc);const ff=uv();Mn.add(ff);const df=new Iv(oo);function pf(){const n=innerWidth,t=innerHeight;oo.setSize(n,t,!1),df.setSize(n,t,hf),_e.aspect=n/t,_e.fov=n<t?68:55,_e.updateProjectionMatrix()}addEventListener("resize",pf);pf();await document.fonts?.ready;await Promise.race([document.fonts?.load?.('80px "Gochi Hand"'),new Promise(n=>setTimeout(n,1500))]).catch(()=>{});const{landmarks:Oi}=Rv(Mn),ze=ch(bc.player);Mn.add(ze.group);const ke=new Pv(ze,mn.spawn),ao=new Lv(_e),Ye={};function mf(n,t,e,i){const r=Oi[n],s=ch(t);r.group.add(s.group),s.group.position.copy(e);const o=r.group.localToWorld(i.clone());Ye[n]={person:s,talkAt:o,home:r}}for(const n of["raju","pinky","lucky"])mf(n,bc[n],new L(0,0,-.55),new L(0,0,3.1));mf("sharma",bc.sharma,new L(.2,0,1.85),new L(0,0,4.1));const gf=[...Object.keys(_r).map(n=>({key:n,label:`TALK TO ${_r[n].name}`,at:Ye[n].talkAt,run:()=>UM(n)})),{key:"sharma",label:"TALK TO SHARMA JI",at:Ye.sharma.talkAt,run:FM},{key:"tower",label:"READ THE ESCROW TOWER",at:Oi.tower.group.localToWorld(new L(0,0,3.2)),run:BM},{key:"addMoney",label:"READ THE SIGN",at:Oi.addMoney.group.localToWorld(new L(0,0,1.6)),run:zM}],LM=Oi.tower.group.getObjectByName("beacon"),Ps=()=>Oi.tower.group.localToWorld(new L(0,11.8,0)),Ls=()=>Oi.sharma.group.localToWorld(new L(.5,1.6,2.2)),yu=n=>Ye[n].home.group.localToWorld(new L(0,1.8,.4)),Mu=()=>ze.group.localToWorld(new L(0,1.4,.5)),_f=new Bv(Mn),Hs=new Set;let Hr=0;const $s=Nv();_e.add($s);let Pi="title",Su=0,Je=null;function IM(n){const t=n*.12,e=new L(Math.sin(t)*150,45+Math.sin(n*.2)*8,Math.cos(t)*150);_e.position.copy(e),_e.up.set(0,1,0),_e.lookAt(0,-8,0)}function DM(){const n={pos:_e.position.clone(),up:_e.up.clone(),look:new L(0,-8,0)},t=ao.desired(ke);if(RM){vf();return}Pi="swoop",Je={t:0,from:n,to:t}}function vf(){Pi="play",_e.remove($s),ao.snap(ke),ke.enabled=!0,Et.showHud(),ic(),setTimeout(()=>{Et.say("YOU","SLEPT IN AGAIN... RAJU'S CHAI IS JUST UP THE ROAD. I'VE GOT USDT, HE TAKES UPI. LET'S SEE.").then(Et.closeDialogue)},300)}async function ic(){try{Et.setBalance(await uf())}catch{Et.setBalance(null)}}let Li=!1;async function UM(n){const t=_r[n],e=Ye[n];if(ke.face(e.home.dir),await Et.say(t.name,t.greet,{choices:[{label:`PAY ₹${t.inr}`,value:"pay"},{label:"NOT NOW",value:"no"}]})!=="pay")return Et.closeDialogue();let r;try{Et.status(t.name,"LET ME CHECK THE RATE..."),r=await bM(t.inr)}catch(a){return await Et.say(t.name,a.message,{tone:"error"}),Et.closeDialogue()}if(await Et.say(t.name,`₹${t.inr} = ${Number(r.usdt).toFixed(4)} USDT. NETWORK FEE ₹0.`,{choices:[{label:"CONFIRM",value:"go"},{label:"BACK",value:"back"}]})!=="go")return Et.closeDialogue();Et.status("YOU","SIGNING ON MY PHONE... NO GAS NEEDED."),ze.holding=!0;let o;try{o=await wM({vpa:t.vpa,name:t.shop,q:r})}catch(a){return ze.holding=!1,await Et.say(t.name,a.message,{tone:"error",choices:[{label:"OK",value:1}]}),a.message.includes("ADD MONEY")&&Et.toast("TOP UP AT THE YELLOW ‘ADD MONEY’ SIGN NEAR WHERE YOU WOKE UP."),Et.closeDialogue()}ze.holding=!1,NM(n,o),await Et.say("ESCROW","LOCKED IN ESCROW. NOT HELD BY US.",{html:`<a href="${Ys(o.explorerUrl)}" target="_blank" rel="noopener">View the transaction</a>`}),await Et.say(t.name,"SHARMA JI WILL PICK IT UP AND PAY ME OVER UPI. WATCH THE ENVELOPE."),Et.closeDialogue()}function NM(n,t,e){const i=_r[n],r=new Fv(Mn);Hs.add(r);const s={id:t.orderId,inr:String(i.inr),to:i.shop,status:"Open",url:t.explorerUrl};Et.upsertFeed(s);let o="start",a=r.fly(Mu(),Ps(),{height:5,duration:2.4}).then(()=>{r.park(Ps()),Hr=2.5,o="escrow"});const c=()=>a=a.then(async()=>{o==="escrow"&&(o="partner",await r.fly(Ps(),Ls(),{height:6,duration:2.6}),r.park(Ls()),Ye.sharma.person.holding=!0,Et.toast("SHARMA JI TOOK THE ORDER. HE'S PAYING OVER UPI NOW."))});AM(t.orderId,l=>{s.status=l.status,Et.upsertFeed(s),l.status==="Claimed"&&c(),l.status==="Fulfilled"&&(c(),a=a.then(async()=>{await r.fly(Ls(),yu(n),{height:6,duration:2.4}),Ye.sharma.person.holding=!1,r.dispose(),Hs.delete(r),Ye[n].person.cheer=1.6,_f.burst(yu(n)),OM(n),ic(),Xa(ke.dir,Ye[n].talkAt.clone().normalize())*Ce<12&&!Li?(Li=!0,await Et.say(i.name,`₹${i.inr} JUST LANDED IN MY BANK, AND YOU PAID IN USDT. ${i.thanks}`),Et.closeDialogue(),Li=!1):Et.toast(`${i.name} GOT ₹${i.inr} OVER UPI. YOUR ${i.item.toUpperCase()} IS READY!`,4e3)})),l.status==="Refunded"&&(a=a.then(async()=>{const u=o==="partner"?Ls():Ps();Ye.sharma.person.holding=!1,await r.fly(u,Mu(),{height:5,duration:2.4}),r.dispose(),Hs.delete(r),ic(),Et.toast("NOBODY PAID THE SHOP IN TIME, SO YOUR USDT CAME BACK.",4500)}))})}let qe=null;function OM(n){qe&&ze.holdSlot.remove(qe),qe=zv(),n!=="raju"&&(qe.children[1].material=qe.children[1].material.clone()),n==="pinky"&&qe.children[1].material.color.set($.haldi),n==="lucky"&&qe.children[1].material.color.set($.leaf),ze.holdSlot.add(qe),ze.holding=!0,setTimeout(()=>{ze.holding=!1,qe&&ze.holdSlot.remove(qe),qe=null},14e3)}async function FM(){await Et.say("SHARMA JI","NAMASTE! I'M A CASH PARTNER. WHEN YOU PAY IN USDT, I PAY THE SHOP IN RUPEES OVER UPI."),await Et.say("SHARMA JI","THE ESCROW ONLY RELEASES YOUR USDT TO ME AFTER MY UPI PAYOUT IS VERIFIED. IF I DON'T PAY IN TIME, IT GOES BACK TO YOU.",{html:'<a href="/#lp" target="_blank" rel="noopener">Open the partner dashboard</a>'}),Et.closeDialogue()}async function BM(){let n="";try{const t=await zc();n=`<a href="${Ys(t.explorer)}/address/${Ys(t.contract)}" target="_blank" rel="noopener">See the escrow contract</a>`}catch{}await Et.say("ESCROW TOWER","EVERY PAYMENT WAITS HERE AS USDT. NOBODY CAN TAKE IT EXCEPT THE SHOP'S CASH PARTNER, AFTER A VERIFIED UPI PAYOUT."),await Et.say("ESCROW TOWER","LIVES ON WHITECHAIN. A RELAYER PAYS THE GAS, SO YOU NEVER NEED ANY.",{html:n}),Et.closeDialogue()}async function zM(){let n="";try{const t=await uf();n=`YOU HAVE ₹${Math.floor(t.inr)} (${t.usdt.toFixed(2)} USDT).`}catch{n="THE CHAIPAY SERVER IS OFFLINE RIGHT NOW."}await Et.say("SIGN",`${n} TO TOP UP, SEND USDT ON WHITECHAIN TO YOUR CHAIPAY BALANCE FOR THIS ADDRESS:`,{html:`<code class="addr">${Ys(Ci.address)}</code> <button class="copy" type="button">Copy</button>`}),Et.closeDialogue()}document.addEventListener("click",async n=>{const t=n.target.closest(".copy");if(t)try{await navigator.clipboard.writeText(Ci.address),t.textContent="Copied"}catch{t.textContent="Copy failed"}});let sr=null;function HM(){let n=null,t=3.4;for(const e of gf){const i=e.at.distanceTo(ze.group.position);i<t&&(t=i,n=e)}return n}async function kM(){if(!(Li||Pi!=="play"||!sr)){Li=!0,ke.enabled=!1,ke.input.x=ke.input.y=0,Et.hint("");try{await sr.run()}finally{ke.enabled=!0,Li=!1}}}Hv(ke,kM);const Eu=new cv,Is=new L;function xf(){const n=Math.min(Eu.getDelta(),.05),t=Eu.elapsedTime;if(Pi==="title")Su+=n,IM(Su),$s.userData.update(t);else if(Pi==="swoop"){Je.t=Math.min(1,Je.t+n/2.6);const s=1-Math.pow(1-Je.t,3);_e.position.lerpVectors(Je.from.pos,Je.to.pos,s),_e.up.lerpVectors(Je.from.up,Je.to.up,s).normalize();const o=new L().lerpVectors(Je.from.look,Je.to.look,s);_e.lookAt(o),$s.scale.setScalar(Math.max(1e-4,1-Je.t*3)),Je.t>=1&&vf()}else ke.update(n),ao.update(ke,n),!Li&&!Et.dialogueOpen()?(sr=HM(),Et.hint(sr?Et.touch?sr.label:`PRESS E · ${sr.label}`:"")):Et.hint("");Ql(ze,n,Math.abs(ke.speed),t);for(const s in Ye){const o=Ye[s].person;Ql(o,n,0,t);const c=o.group.getWorldPosition(new L).distanceTo(ze.group.position)<9?.5*Math.sign(Math.sin(t*.3+o.phase)):0;o.head.rotation.y+=(c-o.head.rotation.y)*Math.min(1,n*3)}qe&&qe.userData.update(t);for(const s of Hs)s.update(n);_f.update(n),Hr=Math.max(0,Hr-n),LM.scale.setScalar(1+Math.sin(t*3)*.06+(Hr>0?Math.sin(Hr*12)*.25:0));const e=_e.up,i=new L().setFromMatrixColumn(_e.matrixWorld,0),r=new L().setFromMatrixColumn(_e.matrixWorld,2);Is.copy(e).multiplyScalar(1).addScaledVector(i,.55).addScaledVector(r,.35).normalize(),Pi==="title"&&Is.copy(_e.position).normalize().addScaledVector(e,.6).normalize(),ec.position.copy(Is).multiplyScalar(100),ff.material.uniforms.uLight.value.copy(Is),nc.material.uniforms.uTime.value=t,df.render(Mn,_e,t,[nc]),requestAnimationFrame(xf)}requestAnimationFrame(xf);Et.hideLoading();Et.showTitle(DM);window.__chainagar={walker:ke,follow:ao,landmarks:Oi,npcs:Ye,interactables:gf,account:Ci,get mode(){return Pi}};
