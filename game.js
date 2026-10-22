var sf=0,ph=1,rf=2;var Ld=1,Pc=2,Zn=3,bi=0,Ze=1,ze=2,vi=0,yi=1,wn=2,mh=3,gh=4,af=5,Li=100,of=101,lf=102,cf=103,hf=104,df=200,uf=201,ff=202,pf=203,ll=204,cl=205,mf=206,gf=207,xf=208,vf=209,yf=210,_f=211,bf=212,Mf=213,Sf=214,hl=0,dl=1,ul=2,gs=3,fl=4,pl=5,ml=6,gl=7,kd=0,Ef=1,wf=2,_i=0,Tf=1,Af=2,Rf=3,Lc=4,Cf=5,If=6,Pf=7,xh="attached",Lf="detached",Dd=300,xs=301,vs=302,xl=303,vl=304,Ya=306,ei=1e3,Di=1001,yl=1002,cn=1003,kf=1004;var Lr=1005;var zn=1006,So=1007;var Jn=1008;var ni=1009,zd=1010,Nd=1011,or=1012,kc=1013,zi=1014,En=1015,xr=1016,Dc=1017,zc=1018,ys=1020,Ud=35902,Od=1021,Fd=1022,pn=1023,Bd=1024,Hd=1025,fs=1026,_s=1027,Nc=1028,Uc=1029,Vd=1030,Oc=1031;var Fc=1033,ha=33776,da=33777,ua=33778,fa=33779,_l=35840,bl=35841,Ml=35842,Sl=35843,El=36196,wl=37492,Tl=37496,Al=37808,Rl=37809,Cl=37810,Il=37811,Pl=37812,Ll=37813,kl=37814,Dl=37815,zl=37816,Nl=37817,Ul=37818,Ol=37819,Fl=37820,Bl=37821,pa=36492,Hl=36494,Vl=36495,Gd=36283,Gl=36284,Wl=36285,$l=36286;var ma=2300,Xl=2301,Eo=2302,vh=2400,yh=2401,_h=2402;var Df=3200,zf=3201;var Wd=0,Nf=1,gi="",fe="srgb",Cs="srgb-linear",Za="linear",me="srgb";var qi=7680;var bh=519,Uf=512,Of=513,Ff=514,$d=515,Bf=516,Hf=517,Vf=518,Gf=519,ql=35044;var Mh="300 es",jn=2e3,ga=2001,Mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var wo=Math.PI/180,Yl=180/Math.PI;function Qn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[r&255]+Xe[r>>8&255]+Xe[r>>16&255]+Xe[r>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Be(r,t,e){return Math.max(t,Math.min(e,r))}function Wf(r,t){return(r%t+t)%t}function To(r,t,e){return(1-e)*r+e*t}function Dn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ge(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var ht=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class r{constructor(t,e,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],_=i[1],b=i[4],v=i[7],I=i[2],w=i[5],A=i[8];return s[0]=a*x+o*_+l*I,s[3]=a*m+o*b+l*w,s[6]=a*p+o*v+l*A,s[1]=c*x+h*_+d*I,s[4]=c*m+h*b+d*w,s[7]=c*p+h*v+d*A,s[2]=u*x+f*_+g*I,s[5]=u*m+f*b+g*w,s[8]=u*p+f*v+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*s-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ao.makeScale(t,e)),this}rotate(t){return this.premultiply(Ao.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ao=new qt;function Xd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function xa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $f(){let r=xa("canvas");return r.style.display="block",r}var Sh={};function nr(r){r in Sh||(Sh[r]=!0,console.warn(r))}function Xf(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function qf(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yf(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ie={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(r.r=ti(r.r),r.g=ti(r.g),r.b=ti(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(r.r=ps(r.r),r.g=ps(r.g),r.b=ps(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gi?Za:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ti(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ps(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Eh=[.64,.33,.3,.6,.15,.06],wh=[.2126,.7152,.0722],Th=[.3127,.329],Ah=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rh=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[Cs]:{primaries:Eh,whitePoint:Th,transfer:Za,toXYZ:Ah,fromXYZ:Rh,luminanceCoefficients:wh,workingColorSpaceConfig:{unpackColorSpace:fe},outputColorSpaceConfig:{drawingBufferColorSpace:fe}},[fe]:{primaries:Eh,whitePoint:Th,transfer:me,toXYZ:Ah,fromXYZ:Rh,luminanceCoefficients:wh,outputColorSpaceConfig:{drawingBufferColorSpace:fe}}});var Yi,Zl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=xa("canvas")),Yi.width=t.width,Yi.height=t.height;let n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ti(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zf=0,va=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ro(i[a].image)):s.push(Ro(i[a]))}else s=Ro(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Ro(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kf=0,sn=class r extends Mi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Di,i=Di,s=zn,a=Jn,o=pn,l=ni,c=r.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Qn(),this.name="",this.source=new va(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ei:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ei:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Dd;sn.DEFAULT_ANISOTROPY=1;var ae=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,v=(f+1)/2,I=(p+1)/2,w=(h+u)/4,A=(d+x)/4,C=(g+m)/4;return b>v&&b>I?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=w/n,s=A/n):v>I?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=C/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=A/s,i=C/s),this.set(n,i,s,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kl=class extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new sn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new va(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Kl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ya=class extends sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jl=class extends sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],f=s[a+1],g=s[a+2],x=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==u||c!==f||h!==g){let m=1-o,p=l*u+c*f+h*g+d*x,_=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let I=Math.sqrt(b),w=Math.atan2(I,p*_);m=Math.sin(m*w)/I,o=Math.sin(o*w)/I}let v=o*_;if(l=l*m+u*v,c=c*m+f*v,h=h*m+g*v,d=d*m+x*v,m===1-o){let I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ch.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ch.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Co.copy(this).projectOnVector(t),this.sub(Co)}reflect(t){return this.sub(Co.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Co=new R,Ch=new hn,Nn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bn):bn.fromBufferAttribute(s,a),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),Dr.subVectors(this.max,$s),Zi.subVectors(t.a,$s),Ki.subVectors(t.b,$s),Ji.subVectors(t.c,$s),hi.subVectors(Ki,Zi),di.subVectors(Ji,Ki),wi.subVectors(Zi,Ji);let e=[0,-hi.z,hi.y,0,-di.z,di.y,0,-wi.z,wi.y,hi.z,0,-hi.x,di.z,0,-di.x,wi.z,0,-wi.x,-hi.y,hi.x,0,-di.y,di.x,0,-wi.y,wi.x,0];return!Io(e,Zi,Ki,Ji,Dr)||(e=[1,0,0,0,1,0,0,0,1],!Io(e,Zi,Ki,Ji,Dr))?!1:(zr.crossVectors(hi,di),e=[zr.x,zr.y,zr.z],Io(e,Zi,Ki,Ji,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Wn=[new R,new R,new R,new R,new R,new R,new R,new R],bn=new R,kr=new Nn,Zi=new R,Ki=new R,Ji=new R,hi=new R,di=new R,wi=new R,$s=new R,Dr=new R,zr=new R,Ti=new R;function Io(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ti.fromArray(r,s);let o=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Jf=new Nn,Xs=new R,Po=new R,Tn=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Jf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Xs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(Po)),this.expandByPoint(Xs.copy(t.center).sub(Po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},$n=new R,Lo=new R,Nr=new R,ui=new R,ko=new R,Ur=new R,Do=new R,bs=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Lo.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(Lo);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Nr),o=ui.dot(this.direction),l=-ui.dot(Nr),c=ui.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Lo).addScaledVector(Nr,u),f}intersectSphere(t,e){$n.subVectors(t.center,this.origin);let n=$n.dot(this.direction),i=$n.dot($n)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,i,s){ko.subVectors(e,t),Ur.subVectors(n,t),Do.crossVectors(ko,Ur);let a=this.direction.dot(Do),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,t);let l=o*this.direction.dot(Ur.crossVectors(ui,Ur));if(l<0)return null;let c=o*this.direction.dot(ko.cross(ui));if(c<0||l+c>a)return null;let h=-o*ui.dot(Do);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class r{constructor(t,e,n,i,s,a,o,l,c,h,d,u,f,g,x,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,d,u,f,g,x,m)}set(t,e,n,i,s,a,o,l,c,h,d,u,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ji.setFromMatrixColumn(t,0).length(),s=1/ji.setFromMatrixColumn(t,1).length(),a=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jf,t,Qf)}lookAt(t,e,n){let i=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),fi.crossVectors(n,on),fi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),fi.crossVectors(n,on)),fi.normalize(),Or.crossVectors(on,fi),i[0]=fi.x,i[4]=Or.x,i[8]=on.x,i[1]=fi.y,i[5]=Or.y,i[9]=on.y,i[2]=fi.z,i[6]=Or.z,i[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],b=n[7],v=n[11],I=n[15],w=i[0],A=i[4],C=i[8],M=i[12],y=i[1],P=i[5],D=i[9],F=i[13],H=i[2],O=i[6],L=i[10],X=i[14],B=i[3],st=i[7],lt=i[11],Mt=i[15];return s[0]=a*w+o*y+l*H+c*B,s[4]=a*A+o*P+l*O+c*st,s[8]=a*C+o*D+l*L+c*lt,s[12]=a*M+o*F+l*X+c*Mt,s[1]=h*w+d*y+u*H+f*B,s[5]=h*A+d*P+u*O+f*st,s[9]=h*C+d*D+u*L+f*lt,s[13]=h*M+d*F+u*X+f*Mt,s[2]=g*w+x*y+m*H+p*B,s[6]=g*A+x*P+m*O+p*st,s[10]=g*C+x*D+m*L+p*lt,s[14]=g*M+x*F+m*X+p*Mt,s[3]=_*w+b*y+v*H+I*B,s[7]=_*A+b*P+v*O+I*st,s[11]=_*C+b*D+v*L+I*lt,s[15]=_*M+b*F+v*X+I*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+s*l*d-i*c*d-s*o*u+n*c*u+i*o*f-n*l*f)+x*(+e*l*f-e*c*u+s*a*u-i*a*f+i*c*h-s*l*h)+m*(+e*c*d-e*o*f-s*a*d+n*a*f+s*o*h-n*c*h)+p*(-i*o*h-e*l*d+e*o*u+i*a*d-n*a*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=d*m*c-x*u*c+x*l*f-o*m*f-d*l*p+o*u*p,b=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,v=h*x*c-g*d*c+g*o*f-a*x*f-h*o*p+a*d*p,I=g*d*l-h*x*l-g*o*u+a*x*u+h*o*m-a*d*m,w=e*_+n*b+i*v+s*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return t[0]=_*A,t[1]=(x*u*s-d*m*s-x*i*f+n*m*f+d*i*p-n*u*p)*A,t[2]=(o*m*s-x*l*s+x*i*c-n*m*c-o*i*p+n*l*p)*A,t[3]=(d*l*s-o*u*s-d*i*c+n*u*c+o*i*f-n*l*f)*A,t[4]=b*A,t[5]=(h*m*s-g*u*s+g*i*f-e*m*f-h*i*p+e*u*p)*A,t[6]=(g*l*s-a*m*s-g*i*c+e*m*c+a*i*p-e*l*p)*A,t[7]=(a*u*s-h*l*s+h*i*c-e*u*c-a*i*f+e*l*f)*A,t[8]=v*A,t[9]=(g*d*s-h*x*s-g*n*f+e*x*f+h*n*p-e*d*p)*A,t[10]=(a*x*s-g*o*s+g*n*c-e*x*c-a*n*p+e*o*p)*A,t[11]=(h*o*s-a*d*s-h*n*c+e*d*c+a*n*f-e*o*f)*A,t[12]=I*A,t[13]=(h*x*i-g*d*i+g*n*u-e*x*u-h*n*m+e*d*m)*A,t[14]=(g*o*i-a*x*i-g*n*l+e*x*l+a*n*m-e*o*m)*A,t[15]=(a*d*i-h*o*i+h*n*l-e*d*l-a*n*u+e*o*u)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,g=s*d,x=a*h,m=a*d,p=o*d,_=l*c,b=l*h,v=l*d,I=n.x,w=n.y,A=n.z;return i[0]=(1-(x+p))*I,i[1]=(f+v)*I,i[2]=(g-b)*I,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(u+p))*w,i[6]=(m+_)*w,i[7]=0,i[8]=(g+b)*A,i[9]=(m-_)*A,i[10]=(1-(u+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=ji.set(i[0],i[1],i[2]).length(),a=ji.set(i[4],i[5],i[6]).length(),o=ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Mn.copy(this);let c=1/s,h=1/a,d=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,e.setFromRotationMatrix(Mn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=jn){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),f,g;if(o===jn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ga)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=jn){let l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(a-s),u=(e+t)*c,f=(n+i)*h,g,x;if(o===jn)g=(a+s)*d,x=-2*d;else if(o===ga)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ji=new R,Mn=new Ht,jf=new R(0,0,0),Qf=new R(1,1,1),fi=new R,Or=new R,on=new R,Ih=new Ht,Ph=new hn,mn=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var _a=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tp=0,Lh=new R,Qi=new hn,Xn=new Ht,Fr=new R,qs=new R,ep=new R,np=new hn,kh=new R(1,0,0),Dh=new R(0,1,0),zh=new R(0,0,1),Nh={type:"added"},ip={type:"removed"},ts={type:"childadded",child:null},zo={type:"childremoved",child:null},Ne=class r extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new R,e=new mn,n=new hn,i=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ht},normalMatrix:{value:new qt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(kh,t)}rotateY(t){return this.rotateOnAxis(Dh,t)}rotateZ(t){return this.rotateOnAxis(zh,t)}translateOnAxis(t,e){return Lh.copy(t).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kh,t)}translateY(t){return this.translateOnAxis(Dh,t)}translateZ(t){return this.translateOnAxis(zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fr.copy(t):Fr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(qs,Fr,this.up):Xn.lookAt(Fr,qs,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),Qi.setFromRotationMatrix(Xn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nh),ts.child=t,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ip),zo.child=t,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nh),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,np,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ne.DEFAULT_UP=new R(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new R,qn=new R,No=new R,Yn=new R,es=new R,ns=new R,Uh=new R,Uo=new R,Oo=new R,Fo=new R,Bo=new ae,Ho=new ae,Vo=new ae,xi=class r{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Sn.subVectors(t,e),i.cross(Sn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Sn.subVectors(i,e),qn.subVectors(n,e),No.subVectors(t,e);let a=Sn.dot(Sn),o=Sn.dot(qn),l=Sn.dot(No),c=qn.dot(qn),h=qn.dot(No),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return Bo.setScalar(0),Ho.setScalar(0),Vo.setScalar(0),Bo.fromBufferAttribute(t,e),Ho.fromBufferAttribute(t,n),Vo.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Bo,s.x),a.addScaledVector(Ho,s.y),a.addScaledVector(Vo,s.z),a}static isFrontFacing(t,e,n,i){return Sn.subVectors(n,e),qn.subVectors(t,e),Sn.cross(qn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Sn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;es.subVectors(i,n),ns.subVectors(s,n),Uo.subVectors(t,n);let l=es.dot(Uo),c=ns.dot(Uo);if(l<=0&&c<=0)return e.copy(n);Oo.subVectors(t,i);let h=es.dot(Oo),d=ns.dot(Oo);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(es,a);Fo.subVectors(t,s);let f=es.dot(Fo),g=ns.dot(Fo);if(g>=0&&f<=g)return e.copy(s);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ns,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Uh.subVectors(s,i),o=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(Uh,o);let p=1/(m+x+u);return a=x*p,o=u*p,e.copy(n).addScaledVector(es,a).addScaledVector(ns,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Br={h:0,s:0,l:0};function Go(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=Wf(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Go(a,s,t+1/3),this.g=Go(a,s,t),this.b=Go(a,s,t-1/3)}return ie.toWorkingColorSpace(this,i),this}setStyle(t,e=fe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){let n=qd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return ie.fromWorkingColorSpace(qe.copy(this),t),Math.round(Be(qe.r*255,0,255))*65536+Math.round(Be(qe.g*255,0,255))*256+Math.round(Be(qe.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(qe.copy(this),e);let n=qe.r,i=qe.g,s=qe.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=fe){ie.fromWorkingColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,i=qe.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Br);let n=To(pi.h,Br.h,e),i=To(pi.s,Br.s,e),s=To(pi.l,Br.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Dt;Dt.NAMES=qd;var sp=0,Un=class extends Mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Qn(),this.name="",this.blending=yi,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ll&&(n.blendSrc=this.blendSrc),this.blendDst!==cl&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},pe=class extends Un{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new R,Hr=new ht,He=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ql,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ql&&(t.usage=this.usage),t}};var Ms=class extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ba=class extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ee=class extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}},rp=0,fn=new Ht,Wo=new Ne,is=new R,ln=new Nn,Ys=new Nn,Fe=new R,Ee=class r extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xd(t)?ba:Ms)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Wo.lookAt(t),Wo.updateMatrix(),this.applyMatrix4(Wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ee(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(ln.min,Ys.min),ln.expandByPoint(Fe),Fe.addVectors(ln.max,Ys.max),ln.expandByPoint(Fe)):(ln.expandByPoint(Ys.min),ln.expandByPoint(Ys.max))}ln.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Fe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(t,c),Fe.add(is)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new R,l[C]=new R;let c=new R,h=new R,d=new R,u=new ht,f=new ht,g=new ht,x=new R,m=new R;function p(C,M,y){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,y),u.fromBufferAttribute(s,C),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,y),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[C].add(x),o[M].add(x),o[y].add(x),l[C].add(m),l[M].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let C=0,M=_.length;C<M;++C){let y=_[C],P=y.start,D=y.count;for(let F=P,H=P+D;F<H;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let b=new R,v=new R,I=new R,w=new R;function A(C){I.fromBufferAttribute(i,C),w.copy(I);let M=o[C];b.copy(M),b.sub(I.multiplyScalar(I.dot(M))).normalize(),v.crossVectors(w,M);let P=v.dot(l[C])<0?-1:1;a.setXYZW(C,b.x,b.y,b.z,P)}for(let C=0,M=_.length;C<M;++C){let y=_[C],P=y.start,D=y.count;for(let F=P,H=P+D;F<H;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new R,s=new R,a=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new He(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oh=new Ht,Ai=new bs,Vr=new Tn,Fh=new R,Gr=new R,Wr=new R,$r=new R,$o=new R,Xr=new R,Bh=new R,qr=new R,nt=class extends Ne{constructor(t=new Ee,e=new pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){Xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&($o.fromBufferAttribute(d,t),a?Xr.addScaledVector($o,h):Xr.addScaledVector($o.sub(e),h))}e.add(Xr)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Ai.copy(t.ray).recast(t.near),!(Vr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Vr,Fh)===null||Ai.origin.distanceToSquared(Fh)>(t.far-t.near)**2))&&(Oh.copy(s).invert(),Ai.copy(t.ray).applyMatrix4(Oh),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,I=b;v<I;v+=3){let w=o.getX(v),A=o.getX(v+1),C=o.getX(v+2);i=Yr(this,p,t,n,c,h,d,w,A,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=o.getX(m),b=o.getX(m+1),v=o.getX(m+2);i=Yr(this,a,t,n,c,h,d,_,b,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,I=b;v<I;v+=3){let w=v,A=v+1,C=v+2;i=Yr(this,p,t,n,c,h,d,w,A,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=m,b=m+1,v=m+2;i=Yr(this,a,t,n,c,h,d,_,b,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function ap(r,t,e,n,i,s,a,o){let l;if(t.side===Ze?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===bi,o),l===null)return null;qr.copy(o),qr.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(qr);return c<e.near||c>e.far?null:{distance:c,point:qr.clone(),object:r}}function Yr(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Gr),r.getVertexPosition(l,Wr),r.getVertexPosition(c,$r);let h=ap(r,t,e,n,Gr,Wr,$r,Bh);if(h){let d=new R;xi.getBarycoord(Bh,Gr,Wr,$r,d),i&&(h.uv=xi.getInterpolatedAttribute(i,o,l,c,d,new ht)),s&&(h.uv1=xi.getInterpolatedAttribute(s,o,l,c,d,new ht)),a&&(h.normal=xi.getInterpolatedAttribute(a,o,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};xi.getNormal(Gr,Wr,$r,u.normal),h.face=u,h.barycoord=d}return h}var oe=class r extends Ee{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(d,2));function g(x,m,p,_,b,v,I,w,A,C,M){let y=v/A,P=I/C,D=v/2,F=I/2,H=w/2,O=A+1,L=C+1,X=0,B=0,st=new R;for(let lt=0;lt<L;lt++){let Mt=lt*P-F;for(let J=0;J<O;J++){let bt=J*y-D;st[x]=bt*_,st[m]=Mt*b,st[p]=H,c.push(st.x,st.y,st.z),st[x]=0,st[m]=0,st[p]=w>0?1:-1,h.push(st.x,st.y,st.z),d.push(J/A),d.push(1-lt/C),X+=1}}for(let lt=0;lt<C;lt++)for(let Mt=0;Mt<A;Mt++){let J=u+Mt+O*lt,bt=u+Mt+O*(lt+1),q=u+(Mt+1)+O*(lt+1),tt=u+(Mt+1)+O*lt;l.push(J,bt,tt),l.push(bt,q,tt),B+=6}o.addGroup(f,B,M),f+=B,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ss(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Qe(r){let t={};for(let e=0;e<r.length;e++){let n=Ss(r[e]);for(let i in n)t[i]=n[i]}return t}function op(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Yd(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var lp={clone:Ss,merge:Qe},cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends Un{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cp,this.fragmentShader=hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=op(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ma=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mi=new R,Hh=new ht,Vh=new ht,Ye=class extends Ma{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Yl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yl*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,Hh,Vh),e.subVectors(Vh,Hh)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(wo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ss=-90,rs=1,jl=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ye(ss,rs,t,e);i.layers=this.layers,this.add(i);let s=new Ye(ss,rs,t,e);s.layers=this.layers,this.add(s);let a=new Ye(ss,rs,t,e);a.layers=this.layers,this.add(a);let o=new Ye(ss,rs,t,e);o.layers=this.layers,this.add(o);let l=new Ye(ss,rs,t,e);l.layers=this.layers,this.add(l);let c=new Ye(ss,rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Sa=class extends sn{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:xs,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ql=class extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Sa(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new oe(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:vi});s.uniforms.tEquirect.value=e;let a=new nt(i,s),o=e.minFilter;return e.minFilter===Jn&&(e.minFilter=zn),new jl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},Xo=new R,dp=new R,up=new qt,Kn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Xo.subVectors(n,e).cross(dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Xo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||up.getNormalMatrix(t),i=this.coplanarPoint(Xo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new Tn,Zr=new R,lr=class{constructor(t=new Kn,e=new Kn,n=new Kn,i=new Kn,s=new Kn,a=new Kn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){let n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],_=i[13],b=i[14],v=i[15];if(n[0].setComponents(l-s,u-c,m-f,v-p).normalize(),n[1].setComponents(l+s,u+c,m+f,v+p).normalize(),n[2].setComponents(l+a,u+h,m+g,v+_).normalize(),n[3].setComponents(l-a,u-h,m-g,v-_).normalize(),n[4].setComponents(l-o,u-d,m-x,v-b).normalize(),e===jn)n[5].setComponents(l+o,u+d,m+x,v+b).normalize();else if(e===ga)n[5].setComponents(o,d,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Zr.x=i.normal.x>0?t.max.x:t.min.x,Zr.y=i.normal.y>0?t.max.y:t.min.y,Zr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zd(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function fp(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Re=class r extends Ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*u-a;for(let b=0;b<c;b++){let v=b*d-s;g.push(v,-_,0),x.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let b=_+c*p,v=_+c*(p+1),I=_+1+c*(p+1),w=_+1+c*p;f.push(b,v,w),f.push(v,I,w)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(x,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mp=`#ifdef USE_ALPHAHASH
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
#endif`,gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_p=`#ifdef USE_AOMAP
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
#endif`,bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mp=`#ifdef USE_BATCHING
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
#endif`,Sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ap=`#ifdef USE_IRIDESCENCE
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
#endif`,Rp=`#ifdef USE_BUMPMAP
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
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Up=`#define PI 3.141592653589793
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
} // validated`,Op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fp=`vec3 transformedNormal = objectNormal;
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
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,em=`#ifdef USE_GRADIENTMAP
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
}`,nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rm=`uniform bool receiveShadow;
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
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
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
#endif`,um=`struct PhysicalMaterial {
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
}`,fm=`
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sm=`#if defined( USE_POINTS_UV )
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
#endif`,Em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
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
#endif`,Im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nm=`#ifdef USE_NORMALMAP
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
#endif`,Um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jm=`float getShadowMask() {
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
}`,Qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,e0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o0=`#ifdef USE_TRANSMISSION
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
#endif`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,f0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p0=`uniform sampler2D t2D;
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`#include <common>
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
}`,_0=`#if DEPTH_PACKING == 3200
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
}`,b0=`#define DISTANCE
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
}`,M0=`#define DISTANCE
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`uniform float scale;
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
}`,T0=`uniform vec3 diffuse;
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
}`,A0=`#include <common>
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#define LAMBERT
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
}`,I0=`#define LAMBERT
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
}`,P0=`#define MATCAP
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
}`,L0=`#define MATCAP
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
}`,k0=`#define NORMAL
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
}`,D0=`#define NORMAL
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
}`,z0=`#define PHONG
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
}`,N0=`#define PHONG
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
}`,U0=`#define STANDARD
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
}`,O0=`#define STANDARD
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
}`,F0=`#define TOON
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
}`,B0=`#define TOON
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
}`,H0=`uniform float size;
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
}`,V0=`uniform vec3 diffuse;
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
}`,G0=`#include <common>
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
}`,W0=`uniform vec3 color;
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
}`,$0=`uniform float rotation;
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
}`,X0=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:xp,alphatest_fragment:vp,alphatest_pars_fragment:yp,aomap_fragment:_p,aomap_pars_fragment:bp,batching_pars_vertex:Mp,batching_vertex:Sp,begin_vertex:Ep,beginnormal_vertex:wp,bsdfs:Tp,iridescence_fragment:Ap,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Cp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Pp,clipping_planes_vertex:Lp,color_fragment:kp,color_pars_fragment:Dp,color_pars_vertex:zp,color_vertex:Np,common:Up,cube_uv_reflection_fragment:Op,defaultnormal_vertex:Fp,displacementmap_pars_vertex:Bp,displacementmap_vertex:Hp,emissivemap_fragment:Vp,emissivemap_pars_fragment:Gp,colorspace_fragment:Wp,colorspace_pars_fragment:$p,envmap_fragment:Xp,envmap_common_pars_fragment:qp,envmap_pars_fragment:Yp,envmap_pars_vertex:Zp,envmap_physical_pars_fragment:am,envmap_vertex:Kp,fog_vertex:Jp,fog_pars_vertex:jp,fog_fragment:Qp,fog_pars_fragment:tm,gradientmap_pars_fragment:em,lightmap_pars_fragment:nm,lights_lambert_fragment:im,lights_lambert_pars_fragment:sm,lights_pars_begin:rm,lights_toon_fragment:om,lights_toon_pars_fragment:lm,lights_phong_fragment:cm,lights_phong_pars_fragment:hm,lights_physical_fragment:dm,lights_physical_pars_fragment:um,lights_fragment_begin:fm,lights_fragment_maps:pm,lights_fragment_end:mm,logdepthbuf_fragment:gm,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:ym,map_fragment:_m,map_pars_fragment:bm,map_particle_fragment:Mm,map_particle_pars_fragment:Sm,metalnessmap_fragment:Em,metalnessmap_pars_fragment:wm,morphinstance_vertex:Tm,morphcolor_vertex:Am,morphnormal_vertex:Rm,morphtarget_pars_vertex:Cm,morphtarget_vertex:Im,normal_fragment_begin:Pm,normal_fragment_maps:Lm,normal_pars_fragment:km,normal_pars_vertex:Dm,normal_vertex:zm,normalmap_pars_fragment:Nm,clearcoat_normal_fragment_begin:Um,clearcoat_normal_fragment_maps:Om,clearcoat_pars_fragment:Fm,iridescence_pars_fragment:Bm,opaque_fragment:Hm,packing:Vm,premultiplied_alpha_fragment:Gm,project_vertex:Wm,dithering_fragment:$m,dithering_pars_fragment:Xm,roughnessmap_fragment:qm,roughnessmap_pars_fragment:Ym,shadowmap_pars_fragment:Zm,shadowmap_pars_vertex:Km,shadowmap_vertex:Jm,shadowmask_pars_fragment:jm,skinbase_vertex:Qm,skinning_pars_vertex:t0,skinning_vertex:e0,skinnormal_vertex:n0,specularmap_fragment:i0,specularmap_pars_fragment:s0,tonemapping_fragment:r0,tonemapping_pars_fragment:a0,transmission_fragment:o0,transmission_pars_fragment:l0,uv_pars_fragment:c0,uv_pars_vertex:h0,uv_vertex:d0,worldpos_vertex:u0,background_vert:f0,background_frag:p0,backgroundCube_vert:m0,backgroundCube_frag:g0,cube_vert:x0,cube_frag:v0,depth_vert:y0,depth_frag:_0,distanceRGBA_vert:b0,distanceRGBA_frag:M0,equirect_vert:S0,equirect_frag:E0,linedashed_vert:w0,linedashed_frag:T0,meshbasic_vert:A0,meshbasic_frag:R0,meshlambert_vert:C0,meshlambert_frag:I0,meshmatcap_vert:P0,meshmatcap_frag:L0,meshnormal_vert:k0,meshnormal_frag:D0,meshphong_vert:z0,meshphong_frag:N0,meshphysical_vert:U0,meshphysical_frag:O0,meshtoon_vert:F0,meshtoon_frag:B0,points_vert:H0,points_frag:V0,shadow_vert:G0,shadow_frag:W0,sprite_vert:$0,sprite_frag:X0},dt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},kn={basic:{uniforms:Qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Qe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Qe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Qe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Qe([dt.points,dt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Qe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Qe([dt.common,dt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Qe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Qe([dt.sprite,dt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Qe([dt.common,dt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Qe([dt.lights,dt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};kn.physical={uniforms:Qe([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var Kr={r:0,b:0,g:0},Ci=new mn,q0=new Ht;function Y0(r,t,e,n,i,s,a){let o=new Dt(0),l=s===!0?0:1,c,h,d=null,u=0,f=null;function g(_){let b=_.isScene===!0?_.background:null;return b&&b.isTexture&&(b=(_.backgroundBlurriness>0?e:t).get(b)),b}function x(_){let b=!1,v=g(_);v===null?p(o,l):v&&v.isColor&&(p(v,1),b=!0);let I=r.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(_,b){let v=g(b);v&&(v.isCubeTexture||v.mapping===Ya)?(h===void 0&&(h=new nt(new oe(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Ss(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ci.copy(b.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(q0.makeRotationFromEuler(Ci)),h.material.toneMapped=ie.getTransfer(v.colorSpace)!==me,(d!==v||u!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new nt(new Re(2,2),new On({name:"BackgroundMaterial",uniforms:Ss(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ie.getTransfer(v.colorSpace)!==me,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,f=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,b){_.getRGB(Kr,Yd(r)),n.buffers.color.setClear(Kr.r,Kr.g,Kr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:x,addToRenderList:m}}function Z0(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,a=!1;function o(y,P,D,F,H){let O=!1,L=d(F,D,P);s!==L&&(s=L,c(s.object)),O=f(y,F,D,H),O&&g(y,F,D,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,v(y,P,D,F),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function d(y,P,D){let F=D.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let O=H[P.id];O===void 0&&(O={},H[P.id]=O);let L=O[F];return L===void 0&&(L=u(l()),O[F]=L),L}function u(y){let P=[],D=[],F=[];for(let H=0;H<e;H++)P[H]=0,D[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,P,D,F){let H=s.attributes,O=P.attributes,L=0,X=D.getAttributes();for(let B in X)if(X[B].location>=0){let lt=H[B],Mt=O[B];if(Mt===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(Mt=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(Mt=y.instanceColor)),lt===void 0||lt.attribute!==Mt||Mt&&lt.data!==Mt.data)return!0;L++}return s.attributesNum!==L||s.index!==F}function g(y,P,D,F){let H={},O=P.attributes,L=0,X=D.getAttributes();for(let B in X)if(X[B].location>=0){let lt=O[B];lt===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(lt=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(lt=y.instanceColor));let Mt={};Mt.attribute=lt,lt&&lt.data&&(Mt.data=lt.data),H[B]=Mt,L++}s.attributes=H,s.attributesNum=L,s.index=F}function x(){let y=s.newAttributes;for(let P=0,D=y.length;P<D;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){let D=s.newAttributes,F=s.enabledAttributes,H=s.attributeDivisors;D[y]=1,F[y]===0&&(r.enableVertexAttribArray(y),F[y]=1),H[y]!==P&&(r.vertexAttribDivisor(y,P),H[y]=P)}function _(){let y=s.newAttributes,P=s.enabledAttributes;for(let D=0,F=P.length;D<F;D++)P[D]!==y[D]&&(r.disableVertexAttribArray(D),P[D]=0)}function b(y,P,D,F,H,O,L){L===!0?r.vertexAttribIPointer(y,P,D,H,O):r.vertexAttribPointer(y,P,D,F,H,O)}function v(y,P,D,F){x();let H=F.attributes,O=D.getAttributes(),L=P.defaultAttributeValues;for(let X in O){let B=O[X];if(B.location>=0){let st=H[X];if(st===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){let lt=st.normalized,Mt=st.itemSize,J=t.get(st);if(J===void 0)continue;let bt=J.buffer,q=J.type,tt=J.bytesPerElement,ut=q===r.INT||q===r.UNSIGNED_INT||st.gpuType===kc;if(st.isInterleavedBufferAttribute){let rt=st.data,yt=rt.stride,Rt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<B.locationSize;Ot++)p(B.location+Ot,rt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ot=0;Ot<B.locationSize;Ot++)m(B.location+Ot);r.bindBuffer(r.ARRAY_BUFFER,bt);for(let Ot=0;Ot<B.locationSize;Ot++)b(B.location+Ot,Mt/B.locationSize,q,lt,yt*tt,(Rt+Mt/B.locationSize*Ot)*tt,ut)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<B.locationSize;rt++)p(B.location+rt,st.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<B.locationSize;rt++)m(B.location+rt);r.bindBuffer(r.ARRAY_BUFFER,bt);for(let rt=0;rt<B.locationSize;rt++)b(B.location+rt,Mt/B.locationSize,q,lt,Mt*tt,Mt/B.locationSize*rt*tt,ut)}}else if(L!==void 0){let lt=L[X];if(lt!==void 0)switch(lt.length){case 2:r.vertexAttrib2fv(B.location,lt);break;case 3:r.vertexAttrib3fv(B.location,lt);break;case 4:r.vertexAttrib4fv(B.location,lt);break;default:r.vertexAttrib1fv(B.location,lt)}}}}_()}function I(){C();for(let y in n){let P=n[y];for(let D in P){let F=P[D];for(let H in F)h(F[H].object),delete F[H];delete P[D]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;let P=n[y.id];for(let D in P){let F=P[D];for(let H in F)h(F[H].object),delete F[H];delete P[D]}delete n[y.id]}function A(y){for(let P in n){let D=n[P];if(D[y.id]===void 0)continue;let F=D[y.id];for(let H in F)h(F[H].object),delete F[H];delete D[y.id]}}function C(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function K0(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(r.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function J0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==pn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let C=A===xr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ni&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==En&&!C)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:I,maxSamples:w}}function j0(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Kn,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{let _=s?0:n,b=_*4,v=p.clippingState||null;l.value=v,v=h(g,u,b,f);for(let I=0;I!==b;++I)v[I]=e[I];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=f;b!==x;++b,v+=4)a.copy(d[b]).applyMatrix4(_,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Q0(r){let t=new WeakMap;function e(a,o){return o===xl?a.mapping=xs:o===vl&&(a.mapping=vs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===xl||o===vl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ql(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ea=class extends Ma{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},us=4,Gh=[.125,.215,.35,.446,.526,.582],ki=20,qo=new Ea,Wh=new Dt,Yo=null,Zo=0,Ko=0,Jo=!1,Pi=(1+Math.sqrt(5))/2,as=1/Pi,$h=[new R(-Pi,as,0),new R(Pi,as,0),new R(-as,0,Pi),new R(as,0,Pi),new R(0,Pi,-as),new R(0,Pi,as),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Es=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Yo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yo,Zo,Ko),this._renderer.xr.enabled=Jo,t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:xr,format:pn,colorSpace:Cs,depthBuffer:!1},i=Xh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xh(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tg(s)),this._blurMaterial=eg(s,t,e)}return i}_compileMaterial(t){let e=new nt(this._lodPlanes[0],t);this._renderer.compile(e,qo)}_sceneToCubeUV(t,e,n,i){let o=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Wh),h.toneMapping=_i,h.autoClear=!1;let f=new pe({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),g=new nt(new oe,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Wh),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let b=this._cubeSize;Jr(i,_*b,p>2?b:0,b,b),h.setRenderTarget(i),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===xs||t.mapping===vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qh());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new nt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;Jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,qo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=$h[(i-s-1)%$h.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new nt(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ki-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):ki;m>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);let p=[],_=0;for(let A=0;A<ki;++A){let C=A/x,M=Math.exp(-C*C/2);p.push(M),A===0?_+=M:A<m&&(_+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;let v=this._sizeLods[i],I=3*v*(i>b-us?i-b+us:0),w=4*(this._cubeSize-v);Jr(e,I,w,3*v,2*v),l.setRenderTarget(e),l.render(d,qo)}};function tg(r){let t=[],e=[],n=[],i=r,s=r-us+1+Gh.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>r-us?l=Gh[a-r+us-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),b=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){let A=w%3*2/3-1,C=w>2?0:-1,M=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];_.set(M,x*g*w),b.set(u,m*g*w);let y=[w,w,w,w,w,w];v.set(y,p*g*w)}let I=new Ee;I.setAttribute("position",new He(_,x)),I.setAttribute("uv",new He(b,m)),I.setAttribute("faceIndex",new He(v,p)),t.push(I),i>us&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xh(r,t,e){let n=new ii(r,t,e);return n.texture.mapping=Ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function eg(r,t,e){let n=new Float32Array(ki),i=new R(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function qh(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Yh(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Bc(){return`

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
	`}function ng(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===xl||l===vl,h=l===xs||l===vs;if(c||h){let d=t.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Es(r)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Es(r)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ig(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&nr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function sg(r,t,e,n){let i={},s=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}u.removeEventListener("dispose",a),delete i[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],r.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],r.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let b=0,v=_.length;b<v;b+=3){let I=_[b+0],w=_[b+1],A=_[b+2];u.push(I,w,w,A,A,I)}}else if(g!==void 0){let _=g.array;x=g.version;for(let b=0,v=_.length/3-1;b<v;b+=3){let I=b+0,w=b+1,A=b+2;u.push(I,w,w,A,A,I)}}else return;let m=new(Xd(u)?ba:Ms)(u,1);m.version=x;let p=s.get(d);p&&t.remove(p),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function rg(r,t,e){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,f){r.drawElements(n,f,s,u*a),e.update(f,n,1)}function c(u,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,u*a,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*x[_];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function ag(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function og(r,t,e){let n=new WeakMap,i=new ae;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let M=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let v=o.attributes.position.count*b,I=1;v>t.maxTextureSize&&(I=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*I*4*d),A=new ya(w,v,I,d);A.type=En,A.needsUpdate=!0;let C=b*4;for(let y=0;y<d;y++){let P=m[y],D=p[y],F=_[y],H=v*I*4*y;for(let O=0;O<P.count;O++){let L=O*C;f===!0&&(i.fromBufferAttribute(P,O),w[H+L+0]=i.x,w[H+L+1]=i.y,w[H+L+2]=i.z,w[H+L+3]=0),g===!0&&(i.fromBufferAttribute(D,O),w[H+L+4]=i.x,w[H+L+5]=i.y,w[H+L+6]=i.z,w[H+L+7]=0),x===!0&&(i.fromBufferAttribute(F,O),w[H+L+8]=i.x,w[H+L+9]=i.y,w[H+L+10]=i.z,w[H+L+11]=F.itemSize===4?i.w:1)}}u={count:d,texture:A,size:new ht(v,I)},n.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function lg(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var wa=class extends sn{constructor(t,e,n,i,s,a,o,l,c,h=fs){if(h!==fs&&h!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fs&&(n=zi),n===void 0&&h===_s&&(n=ys),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Kd=new sn,Zh=new wa(1,1),Jd=new ya,jd=new Jl,Qd=new Sa,Kh=[],Jh=[],jh=new Float32Array(16),Qh=new Float32Array(9),td=new Float32Array(4);function Is(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Kh[i];if(s===void 0&&(s=new Float32Array(i),Kh[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ue(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Oe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ka(r,t){let e=Jh[t];e===void 0&&(e=new Int32Array(t),Jh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function cg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function hg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;r.uniform2fv(this.addr,t),Oe(e,t)}}function dg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;r.uniform3fv(this.addr,t),Oe(e,t)}}function ug(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;r.uniform4fv(this.addr,t),Oe(e,t)}}function fg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,n))return;td.set(n),r.uniformMatrix2fv(this.addr,!1,td),Oe(e,n)}}function pg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,n))return;Qh.set(n),r.uniformMatrix3fv(this.addr,!1,Qh),Oe(e,n)}}function mg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,n))return;jh.set(n),r.uniformMatrix4fv(this.addr,!1,jh),Oe(e,n)}}function gg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function xg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;r.uniform2iv(this.addr,t),Oe(e,t)}}function vg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;r.uniform3iv(this.addr,t),Oe(e,t)}}function yg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;r.uniform4iv(this.addr,t),Oe(e,t)}}function _g(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function bg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;r.uniform2uiv(this.addr,t),Oe(e,t)}}function Mg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;r.uniform3uiv(this.addr,t),Oe(e,t)}}function Sg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;r.uniform4uiv(this.addr,t),Oe(e,t)}}function Eg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Zh.compareFunction=$d,s=Zh):s=Kd,e.setTexture2D(t||s,i)}function wg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||jd,i)}function Tg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Qd,i)}function Ag(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jd,i)}function Rg(r){switch(r){case 5126:return cg;case 35664:return hg;case 35665:return dg;case 35666:return ug;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return xg;case 35668:case 35672:return vg;case 35669:case 35673:return yg;case 5125:return _g;case 36294:return bg;case 36295:return Mg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Cg(r,t){r.uniform1fv(this.addr,t)}function Ig(r,t){let e=Is(t,this.size,2);r.uniform2fv(this.addr,e)}function Pg(r,t){let e=Is(t,this.size,3);r.uniform3fv(this.addr,e)}function Lg(r,t){let e=Is(t,this.size,4);r.uniform4fv(this.addr,e)}function kg(r,t){let e=Is(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Dg(r,t){let e=Is(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function zg(r,t){let e=Is(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Ng(r,t){r.uniform1iv(this.addr,t)}function Ug(r,t){r.uniform2iv(this.addr,t)}function Og(r,t){r.uniform3iv(this.addr,t)}function Fg(r,t){r.uniform4iv(this.addr,t)}function Bg(r,t){r.uniform1uiv(this.addr,t)}function Hg(r,t){r.uniform2uiv(this.addr,t)}function Vg(r,t){r.uniform3uiv(this.addr,t)}function Gg(r,t){r.uniform4uiv(this.addr,t)}function Wg(r,t,e){let n=this.cache,i=t.length,s=Ka(e,i);Ue(n,s)||(r.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Kd,s[a])}function $g(r,t,e){let n=this.cache,i=t.length,s=Ka(e,i);Ue(n,s)||(r.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||jd,s[a])}function Xg(r,t,e){let n=this.cache,i=t.length,s=Ka(e,i);Ue(n,s)||(r.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Qd,s[a])}function qg(r,t,e){let n=this.cache,i=t.length,s=Ka(e,i);Ue(n,s)||(r.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Jd,s[a])}function Yg(r){switch(r){case 5126:return Cg;case 35664:return Ig;case 35665:return Pg;case 35666:return Lg;case 35674:return kg;case 35675:return Dg;case 35676:return zg;case 5124:case 35670:return Ng;case 35667:case 35671:return Ug;case 35668:case 35672:return Og;case 35669:case 35673:return Fg;case 5125:return Bg;case 36294:return Hg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}var tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rg(e.type)}},ec=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yg(e.type)}},nc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},jo=/(\w+)(\])?(\[|\.)?/g;function ed(r,t){r.seq.push(t),r.map[t.id]=t}function Zg(r,t,e){let n=r.name,i=n.length;for(jo.lastIndex=0;;){let s=jo.exec(n),a=jo.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ed(e,c===void 0?new tc(o,r,t):new ec(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new nc(o),ed(e,d)),e=d}}}var ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Zg(s,a,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function nd(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Kg=37297,Jg=0;function jg(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var id=new qt;function Qg(r){ie._getMatrix(id,ie.workingColorSpace,r);let t=`mat3( ${id.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(r)){case Za:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function sd(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+jg(r.getShaderSource(t),a)}else return i}function tx(r,t){let e=Qg(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ex(r,t){let e;switch(t){case Tf:e="Linear";break;case Af:e="Reinhard";break;case Rf:e="Cineon";break;case Lc:e="ACESFilmic";break;case If:e="AgX";break;case Pf:e="Neutral";break;case Cf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jr=new R;function nx(){ie.getLuminanceCoefficients(jr);let r=jr.x.toFixed(4),t=jr.y.toFixed(4),e=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ix(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function sx(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rx(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function ir(r){return r!==""}function rd(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ad(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(r){return r.replace(ax,lx)}var ox=new Map;function lx(r,t){let e=Yt[t];if(e===void 0){let n=ox.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ic(e)}var cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(r){return r.replace(cx,hx)}function hx(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ld(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dx(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ld?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Pc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function ux(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case xs:case vs:t="ENVMAP_TYPE_CUBE";break;case Ya:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fx(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===vs&&(t="ENVMAP_MODE_REFRACTION"),t}function px(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case kd:t="ENVMAP_BLENDING_MULTIPLY";break;case Ef:t="ENVMAP_BLENDING_MIX";break;case wf:t="ENVMAP_BLENDING_ADD";break}return t}function mx(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gx(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=dx(e),c=ux(e),h=fx(e),d=px(e),u=mx(e),f=ix(e),g=sx(s),x=i.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ir).join(`
`),p.length>0&&(p+=`
`)):(m=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),p=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Yt.tonemapping_pars_fragment:"",e.toneMapping!==_i?ex("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,tx("linearToOutputTexel",e.outputColorSpace),nx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),a=ic(a),a=rd(a,e),a=ad(a,e),o=ic(o),o=rd(o,e),o=ad(o,e),a=od(a),o=od(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=_+m+a,v=_+p+o,I=nd(i,i.VERTEX_SHADER,b),w=nd(i,i.FRAGMENT_SHADER,v);i.attachShader(x,I),i.attachShader(x,w),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(P){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(x).trim(),F=i.getShaderInfoLog(I).trim(),H=i.getShaderInfoLog(w).trim(),O=!0,L=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,I,w);else{let X=sd(i,I,"vertex"),B=sd(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+X+`
`+B)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(F===""||H==="")&&(L=!1);L&&(P.diagnostics={runnable:O,programLog:D,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(I),i.deleteShader(w),C=new ms(i,x),M=rx(i,x)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,Kg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=w,this}var xx=0,sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rc(t),e.set(t,n)),n}},rc=class{constructor(t){this.id=xx++,this.code=t,this.usedTimes=0}};function vx(r,t,e,n,i,s,a){let o=new _a,l=new sc,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,P,D,F){let H=D.fog,O=F.geometry,L=M.isMeshStandardMaterial?D.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||L),B=X&&X.mapping===Ya?X.image.height:null,st=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let lt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Mt=lt!==void 0?lt.length:0,J=0;O.morphAttributes.position!==void 0&&(J=1),O.morphAttributes.normal!==void 0&&(J=2),O.morphAttributes.color!==void 0&&(J=3);let bt,q,tt,ut;if(st){let ue=kn[st];bt=ue.vertexShader,q=ue.fragmentShader}else bt=M.vertexShader,q=M.fragmentShader,l.update(M),tt=l.getVertexShaderID(M),ut=l.getFragmentShaderID(M);let rt=r.getRenderTarget(),yt=r.state.buffers.depth.getReversed(),Rt=F.isInstancedMesh===!0,Ot=F.isBatchedMesh===!0,he=!!M.map,Gt=!!M.matcap,be=!!X,z=!!M.aoMap,ke=!!M.lightMap,Jt=!!M.bumpMap,jt=!!M.normalMap,Pt=!!M.displacementMap,de=!!M.emissiveMap,It=!!M.metalnessMap,T=!!M.roughnessMap,S=M.anisotropy>0,V=M.clearcoat>0,Q=M.dispersion>0,et=M.iridescence>0,Z=M.sheen>0,Et=M.transmission>0,Y=S&&!!M.anisotropyMap,j=V&&!!M.clearcoatMap,St=V&&!!M.clearcoatNormalMap,it=V&&!!M.clearcoatRoughnessMap,ft=et&&!!M.iridescenceMap,_t=et&&!!M.iridescenceThicknessMap,Lt=Z&&!!M.sheenColorMap,pt=Z&&!!M.sheenRoughnessMap,Wt=!!M.specularMap,Nt=!!M.specularColorMap,ne=!!M.specularIntensityMap,k=Et&&!!M.transmissionMap,ct=Et&&!!M.thicknessMap,$=!!M.gradientMap,K=!!M.alphaMap,xt=M.alphaTest>0,mt=!!M.alphaHash,$t=!!M.extensions,Ae=_i;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ae=r.toneMapping);let $e={shaderID:st,shaderType:M.type,shaderName:M.name,vertexShader:bt,fragmentShader:q,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:ut,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&F._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&F.instanceColor!==null,instancingMorph:Rt&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:rt===null?r.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Cs,alphaToCoverage:!!M.alphaToCoverage,map:he,matcap:Gt,envMap:be,envMapMode:be&&X.mapping,envMapCubeUVHeight:B,aoMap:z,lightMap:ke,bumpMap:Jt,normalMap:jt,displacementMap:u&&Pt,emissiveMap:de,normalMapObjectSpace:jt&&M.normalMapType===Nf,normalMapTangentSpace:jt&&M.normalMapType===Wd,metalnessMap:It,roughnessMap:T,anisotropy:S,anisotropyMap:Y,clearcoat:V,clearcoatMap:j,clearcoatNormalMap:St,clearcoatRoughnessMap:it,dispersion:Q,iridescence:et,iridescenceMap:ft,iridescenceThicknessMap:_t,sheen:Z,sheenColorMap:Lt,sheenRoughnessMap:pt,specularMap:Wt,specularColorMap:Nt,specularIntensityMap:ne,transmission:Et,transmissionMap:k,thicknessMap:ct,gradientMap:$,opaque:M.transparent===!1&&M.blending===yi&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:xt,alphaHash:mt,combine:M.combine,mapUv:he&&x(M.map.channel),aoMapUv:z&&x(M.aoMap.channel),lightMapUv:ke&&x(M.lightMap.channel),bumpMapUv:Jt&&x(M.bumpMap.channel),normalMapUv:jt&&x(M.normalMap.channel),displacementMapUv:Pt&&x(M.displacementMap.channel),emissiveMapUv:de&&x(M.emissiveMap.channel),metalnessMapUv:It&&x(M.metalnessMap.channel),roughnessMapUv:T&&x(M.roughnessMap.channel),anisotropyMapUv:Y&&x(M.anisotropyMap.channel),clearcoatMapUv:j&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:St&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:pt&&x(M.sheenRoughnessMap.channel),specularMapUv:Wt&&x(M.specularMap.channel),specularColorMapUv:Nt&&x(M.specularColorMap.channel),specularIntensityMapUv:ne&&x(M.specularIntensityMap.channel),transmissionMapUv:k&&x(M.transmissionMap.channel),thicknessMapUv:ct&&x(M.thicknessMap.channel),alphaMapUv:K&&x(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(jt||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(he||K),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:yt,skinning:F.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:J,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ae,decodeVideoTexture:he&&M.map.isVideoTexture===!0&&ie.getTransfer(M.map.colorSpace)===me,decodeVideoTextureEmissive:de&&M.emissiveMap.isVideoTexture===!0&&ie.getTransfer(M.emissiveMap.colorSpace)===me,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ze,flipSided:M.side===Ze,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:$t&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&M.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function p(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(_(y,M),b(y,M),y.push(r.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function _(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function b(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){let y=g[M.type],P;if(y){let D=kn[y];P=lp.clone(D.uniforms)}else P=M.uniforms;return P}function I(M,y){let P;for(let D=0,F=h.length;D<F;D++){let H=h[D];if(H.cacheKey===y){P=H,++P.usedTimes;break}}return P===void 0&&(P=new gx(r,y,M,s),h.push(P)),P}function w(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function A(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:I,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:C}}function yx(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function _x(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function cd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function hd(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,f,g,x,m){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},r[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),t++,p}function o(d,u,f,g,x,m){let p=a(d,u,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,g,x,m){let p=a(d,u,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||_x),n.length>1&&n.sort(u||cd),i.length>1&&i.sort(u||cd)}function h(){for(let d=t,u=r.length;d<u;d++){let f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function bx(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new hd,r.set(n,[a])):i>=s.length?(a=new hd,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Mx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Dt};break;case"SpotLight":e={position:new R,direction:new R,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new R,halfWidth:new R,halfHeight:new R};break}return r[t.id]=e,e}}}function Sx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Ex=0;function wx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Tx(r){let t=new Mx,e=Sx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let i=new R,s=new Ht,a=new Ht;function o(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,b=0,v=0,I=0,w=0,A=0;c.sort(wx);for(let M=0,y=c.length;M<y;M++){let P=c[M],D=P.color,F=P.intensity,H=P.distance,O=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=D.r*F,d+=D.g*F,u+=D.b*F;else if(P.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(P.sh.coefficients[L],F);A++}else if(P.isDirectionalLight){let L=t.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,B=e.get(P);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=P.shadow.matrix,_++}n.directional[f]=L,f++}else if(P.isSpotLight){let L=t.get(P);L.position.setFromMatrixPosition(P.matrixWorld),L.color.copy(D).multiplyScalar(F),L.distance=H,L.coneCos=Math.cos(P.angle),L.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),L.decay=P.decay,n.spot[x]=L;let X=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,X.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[x]=X.matrix,P.castShadow){let B=e.get(P);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,n.spotShadow[x]=B,n.spotShadowMap[x]=O,v++}x++}else if(P.isRectAreaLight){let L=t.get(P);L.color.copy(D).multiplyScalar(F),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=L,m++}else if(P.isPointLight){let L=t.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity),L.distance=P.distance,L.decay=P.decay,P.castShadow){let X=P.shadow,B=e.get(P);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,B.shadowCameraNear=X.camera.near,B.shadowCameraFar=X.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=L,g++}else if(P.isHemisphereLight){let L=t.get(P);L.skyColor.copy(P.color).multiplyScalar(F),L.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=L,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==_||C.numPointShadows!==b||C.numSpotShadows!==v||C.numSpotMaps!==I||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.directionalLength=f,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=_,C.numPointShadows=b,C.numSpotShadows=v,C.numSpotMaps=I,C.numLightProbes=A,n.version=Ex++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let b=c[p];if(b.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(b.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function dd(r){let t=new Tx(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Ax(r){let t=new WeakMap;function e(i,s=0){let a=t.get(i),o;return a===void 0?(o=new dd(r),t.set(i,[o])):s>=a.length?(o=new dd(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ac=class extends Un{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},oc=class extends Un{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cx=`uniform sampler2D shadow_pass;
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
}`;function Ix(r,t,e){let n=new lr,i=new ht,s=new ht,a=new ae,o=new ac({depthPacking:zf}),l=new oc,c={},h=e.maxTextureSize,d={[bi]:Ze,[Ze]:bi,[ze]:ze},u=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Rx,fragmentShader:Cx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new nt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ld;let p=this.type;this.render=function(w,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=r.getRenderTarget(),y=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),D=r.state;D.setBlending(vi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=p!==Zn&&this.type===Zn,H=p===Zn&&this.type!==Zn;for(let O=0,L=w.length;O<L;O++){let X=w[O],B=X.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let st=B.getFrameExtents();if(i.multiply(st),s.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/st.x),i.x=s.x*st.x,B.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/st.y),i.y=s.y*st.y,B.mapSize.y=s.y)),B.map===null||F===!0||H===!0){let Mt=this.type!==Zn?{minFilter:cn,magFilter:cn}:{};B.map!==null&&B.map.dispose(),B.map=new ii(i.x,i.y,Mt),B.map.texture.name=X.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();let lt=B.getViewportCount();for(let Mt=0;Mt<lt;Mt++){let J=B.getViewport(Mt);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),D.viewport(a),B.updateMatrices(X,Mt),n=B.getFrustum(),v(A,C,B.camera,X,this.type)}B.isPointLightShadow!==!0&&this.type===Zn&&_(B,C),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,y,P)};function _(w,A){let C=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ii(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,C,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,C,f,x,null)}function b(w,A,C,M){let y=null,P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let D=y.uuid,F=A.uuid,H=c[D];H===void 0&&(H={},c[D]=H);let O=H[F];O===void 0&&(O=y.clone(),H[F]=O,A.addEventListener("dispose",I)),y=O}if(y.visible=A.visible,y.wireframe=A.wireframe,M===Zn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let D=r.properties.get(y);D.light=C}return y}function v(w,A,C,M,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Zn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let F=t.update(w),H=w.material;if(Array.isArray(H)){let O=F.groups;for(let L=0,X=O.length;L<X;L++){let B=O[L],st=H[B.materialIndex];if(st&&st.visible){let lt=b(w,st,M,y);w.onBeforeShadow(r,w,A,C,F,lt,B),r.renderBufferDirect(C,null,F,lt,w,B),w.onAfterShadow(r,w,A,C,F,lt,B)}}}else if(H.visible){let O=b(w,H,M,y);w.onBeforeShadow(r,w,A,C,F,O,null),r.renderBufferDirect(C,null,F,O,w,null),w.onAfterShadow(r,w,A,C,F,O,null)}}let D=w.children;for(let F=0,H=D.length;F<H;F++)v(D[F],A,C,M,y)}function I(w){w.target.removeEventListener("dispose",I);for(let C in c){let M=c[C],y=w.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var Px={[hl]:dl,[ul]:ml,[fl]:gl,[gs]:pl,[dl]:hl,[ml]:ul,[gl]:fl,[pl]:gs};function Lx(r,t){function e(){let k=!1,ct=new ae,$=null,K=new ae(0,0,0,0);return{setMask:function(xt){$!==xt&&!k&&(r.colorMask(xt,xt,xt,xt),$=xt)},setLocked:function(xt){k=xt},setClear:function(xt,mt,$t,Ae,$e){$e===!0&&(xt*=Ae,mt*=Ae,$t*=Ae),ct.set(xt,mt,$t,Ae),K.equals(ct)===!1&&(r.clearColor(xt,mt,$t,Ae),K.copy(ct))},reset:function(){k=!1,$=null,K.set(-1,0,0,0)}}}function n(){let k=!1,ct=!1,$=null,K=null,xt=null;return{setReversed:function(mt){if(ct!==mt){let $t=t.get("EXT_clip_control");ct?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);let Ae=xt;xt=null,this.setClear(Ae)}ct=mt},getReversed:function(){return ct},setTest:function(mt){mt?rt(r.DEPTH_TEST):yt(r.DEPTH_TEST)},setMask:function(mt){$!==mt&&!k&&(r.depthMask(mt),$=mt)},setFunc:function(mt){if(ct&&(mt=Px[mt]),K!==mt){switch(mt){case hl:r.depthFunc(r.NEVER);break;case dl:r.depthFunc(r.ALWAYS);break;case ul:r.depthFunc(r.LESS);break;case gs:r.depthFunc(r.LEQUAL);break;case fl:r.depthFunc(r.EQUAL);break;case pl:r.depthFunc(r.GEQUAL);break;case ml:r.depthFunc(r.GREATER);break;case gl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=mt}},setLocked:function(mt){k=mt},setClear:function(mt){xt!==mt&&(ct&&(mt=1-mt),r.clearDepth(mt),xt=mt)},reset:function(){k=!1,$=null,K=null,xt=null,ct=!1}}}function i(){let k=!1,ct=null,$=null,K=null,xt=null,mt=null,$t=null,Ae=null,$e=null;return{setTest:function(ue){k||(ue?rt(r.STENCIL_TEST):yt(r.STENCIL_TEST))},setMask:function(ue){ct!==ue&&!k&&(r.stencilMask(ue),ct=ue)},setFunc:function(ue,yn,Vn){($!==ue||K!==yn||xt!==Vn)&&(r.stencilFunc(ue,yn,Vn),$=ue,K=yn,xt=Vn)},setOp:function(ue,yn,Vn){(mt!==ue||$t!==yn||Ae!==Vn)&&(r.stencilOp(ue,yn,Vn),mt=ue,$t=yn,Ae=Vn)},setLocked:function(ue){k=ue},setClear:function(ue){$e!==ue&&(r.clearStencil(ue),$e=ue)},reset:function(){k=!1,ct=null,$=null,K=null,xt=null,mt=null,$t=null,Ae=null,$e=null}}}let s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,b=null,v=null,I=null,w=null,A=new Dt(0,0,0),C=0,M=!1,y=null,P=null,D=null,F=null,H=null,O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,X=0,B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(B)[1]),L=X>=1):B.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),L=X>=2);let st=null,lt={},Mt=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),bt=new ae().fromArray(Mt),q=new ae().fromArray(J);function tt(k,ct,$,K){let xt=new Uint8Array(4),mt=r.createTexture();r.bindTexture(k,mt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $t=0;$t<$;$t++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(ct,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,xt):r.texImage2D(ct+$t,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xt);return mt}let ut={};ut[r.TEXTURE_2D]=tt(r.TEXTURE_2D,r.TEXTURE_2D,1),ut[r.TEXTURE_CUBE_MAP]=tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[r.TEXTURE_2D_ARRAY]=tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ut[r.TEXTURE_3D]=tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(r.DEPTH_TEST),a.setFunc(gs),Jt(!1),jt(ph),rt(r.CULL_FACE),z(vi);function rt(k){h[k]!==!0&&(r.enable(k),h[k]=!0)}function yt(k){h[k]!==!1&&(r.disable(k),h[k]=!1)}function Rt(k,ct){return d[k]!==ct?(r.bindFramebuffer(k,ct),d[k]=ct,k===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ct),k===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ot(k,ct){let $=f,K=!1;if(k){$=u.get(ct),$===void 0&&($=[],u.set(ct,$));let xt=k.textures;if($.length!==xt.length||$[0]!==r.COLOR_ATTACHMENT0){for(let mt=0,$t=xt.length;mt<$t;mt++)$[mt]=r.COLOR_ATTACHMENT0+mt;$.length=xt.length,K=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,K=!0);K&&r.drawBuffers($)}function he(k){return g!==k?(r.useProgram(k),g=k,!0):!1}let Gt={[Li]:r.FUNC_ADD,[of]:r.FUNC_SUBTRACT,[lf]:r.FUNC_REVERSE_SUBTRACT};Gt[cf]=r.MIN,Gt[hf]=r.MAX;let be={[df]:r.ZERO,[uf]:r.ONE,[ff]:r.SRC_COLOR,[ll]:r.SRC_ALPHA,[yf]:r.SRC_ALPHA_SATURATE,[xf]:r.DST_COLOR,[mf]:r.DST_ALPHA,[pf]:r.ONE_MINUS_SRC_COLOR,[cl]:r.ONE_MINUS_SRC_ALPHA,[vf]:r.ONE_MINUS_DST_COLOR,[gf]:r.ONE_MINUS_DST_ALPHA,[_f]:r.CONSTANT_COLOR,[bf]:r.ONE_MINUS_CONSTANT_COLOR,[Mf]:r.CONSTANT_ALPHA,[Sf]:r.ONE_MINUS_CONSTANT_ALPHA};function z(k,ct,$,K,xt,mt,$t,Ae,$e,ue){if(k===vi){x===!0&&(yt(r.BLEND),x=!1);return}if(x===!1&&(rt(r.BLEND),x=!0),k!==af){if(k!==m||ue!==M){if((p!==Li||v!==Li)&&(r.blendEquation(r.FUNC_ADD),p=Li,v=Li),ue)switch(k){case yi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wn:r.blendFunc(r.ONE,r.ONE);break;case mh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case yi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case mh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,b=null,I=null,w=null,A.set(0,0,0),C=0,m=k,M=ue}return}xt=xt||ct,mt=mt||$,$t=$t||K,(ct!==p||xt!==v)&&(r.blendEquationSeparate(Gt[ct],Gt[xt]),p=ct,v=xt),($!==_||K!==b||mt!==I||$t!==w)&&(r.blendFuncSeparate(be[$],be[K],be[mt],be[$t]),_=$,b=K,I=mt,w=$t),(Ae.equals(A)===!1||$e!==C)&&(r.blendColor(Ae.r,Ae.g,Ae.b,$e),A.copy(Ae),C=$e),m=k,M=!1}function ke(k,ct){k.side===ze?yt(r.CULL_FACE):rt(r.CULL_FACE);let $=k.side===Ze;ct&&($=!$),Jt($),k.blending===yi&&k.transparent===!1?z(vi):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);let K=k.stencilWrite;o.setTest(K),K&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),de(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?rt(r.SAMPLE_ALPHA_TO_COVERAGE):yt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(k){y!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),y=k)}function jt(k){k!==sf?(rt(r.CULL_FACE),k!==P&&(k===ph?r.cullFace(r.BACK):k===rf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):yt(r.CULL_FACE),P=k}function Pt(k){k!==D&&(L&&r.lineWidth(k),D=k)}function de(k,ct,$){k?(rt(r.POLYGON_OFFSET_FILL),(F!==ct||H!==$)&&(r.polygonOffset(ct,$),F=ct,H=$)):yt(r.POLYGON_OFFSET_FILL)}function It(k){k?rt(r.SCISSOR_TEST):yt(r.SCISSOR_TEST)}function T(k){k===void 0&&(k=r.TEXTURE0+O-1),st!==k&&(r.activeTexture(k),st=k)}function S(k,ct,$){$===void 0&&(st===null?$=r.TEXTURE0+O-1:$=st);let K=lt[$];K===void 0&&(K={type:void 0,texture:void 0},lt[$]=K),(K.type!==k||K.texture!==ct)&&(st!==$&&(r.activeTexture($),st=$),r.bindTexture(k,ct||ut[k]),K.type=k,K.texture=ct)}function V(){let k=lt[st];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(k){bt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),bt.copy(k))}function pt(k){q.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function Wt(k,ct){let $=c.get(ct);$===void 0&&($=new WeakMap,c.set(ct,$));let K=$.get(k);K===void 0&&(K=r.getUniformBlockIndex(ct,k.name),$.set(k,K))}function Nt(k,ct){let K=c.get(ct).get(k);l.get(ct)!==K&&(r.uniformBlockBinding(ct,K,k.__bindingPointIndex),l.set(ct,K))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},st=null,lt={},d={},u=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,b=null,v=null,I=null,w=null,A=new Dt(0,0,0),C=0,M=!1,y=null,P=null,D=null,F=null,H=null,bt.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:rt,disable:yt,bindFramebuffer:Rt,drawBuffers:Ot,useProgram:he,setBlending:z,setMaterial:ke,setFlipSided:Jt,setCullFace:jt,setLineWidth:Pt,setPolygonOffset:de,setScissorTest:It,activeTexture:T,bindTexture:S,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:ft,texImage3D:_t,updateUBOMapping:Wt,uniformBlockBinding:Nt,texStorage2D:St,texStorage3D:it,texSubImage2D:Z,texSubImage3D:Et,compressedTexSubImage2D:Y,compressedTexSubImage3D:j,scissor:Lt,viewport:pt,reset:ne}}function ud(r,t,e,n){let i=kx(n);switch(e){case Od:return r*t;case Bd:return r*t;case Hd:return r*t*2;case Nc:return r*t/i.components*i.byteLength;case Uc:return r*t/i.components*i.byteLength;case Vd:return r*t*2/i.components*i.byteLength;case Oc:return r*t*2/i.components*i.byteLength;case Fd:return r*t*3/i.components*i.byteLength;case pn:return r*t*4/i.components*i.byteLength;case Fc:return r*t*4/i.components*i.byteLength;case ha:case da:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ua:case fa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bl:case Sl:return Math.max(r,16)*Math.max(t,8)/4;case _l:case Ml:return Math.max(r,8)*Math.max(t,8)/2;case El:case wl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Tl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Il:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case kl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case pa:case Hl:case Vl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Gd:case Gl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Wl:case $l:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kx(r){switch(r){case ni:case zd:return{byteLength:1,components:1};case or:case Nd:case xr:return{byteLength:2,components:1};case Dc:case zc:return{byteLength:2,components:4};case zi:case kc:case En:return{byteLength:4,components:1};case Ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Dx(r,t,e,n,i,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return f?new OffscreenCanvas(T,S):xa("canvas")}function x(T,S,V){let Q=1,et=It(T);if((et.width>V||et.height>V)&&(Q=V/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Z=Math.floor(Q*et.width),Et=Math.floor(Q*et.height);d===void 0&&(d=g(Z,Et));let Y=S?g(Z,Et):d;return Y.width=Z,Y.height=Et,Y.getContext("2d").drawImage(T,0,0,Z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+Et+")."),Y}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){r.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(T,S,V,Q,et=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=S;if(S===r.RED&&(V===r.FLOAT&&(Z=r.R32F),V===r.HALF_FLOAT&&(Z=r.R16F),V===r.UNSIGNED_BYTE&&(Z=r.R8)),S===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.R8UI),V===r.UNSIGNED_SHORT&&(Z=r.R16UI),V===r.UNSIGNED_INT&&(Z=r.R32UI),V===r.BYTE&&(Z=r.R8I),V===r.SHORT&&(Z=r.R16I),V===r.INT&&(Z=r.R32I)),S===r.RG&&(V===r.FLOAT&&(Z=r.RG32F),V===r.HALF_FLOAT&&(Z=r.RG16F),V===r.UNSIGNED_BYTE&&(Z=r.RG8)),S===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RG8UI),V===r.UNSIGNED_SHORT&&(Z=r.RG16UI),V===r.UNSIGNED_INT&&(Z=r.RG32UI),V===r.BYTE&&(Z=r.RG8I),V===r.SHORT&&(Z=r.RG16I),V===r.INT&&(Z=r.RG32I)),S===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),V===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),V===r.UNSIGNED_INT&&(Z=r.RGB32UI),V===r.BYTE&&(Z=r.RGB8I),V===r.SHORT&&(Z=r.RGB16I),V===r.INT&&(Z=r.RGB32I)),S===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),V===r.UNSIGNED_INT&&(Z=r.RGBA32UI),V===r.BYTE&&(Z=r.RGBA8I),V===r.SHORT&&(Z=r.RGBA16I),V===r.INT&&(Z=r.RGBA32I)),S===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),S===r.RGBA){let Et=et?Za:ie.getTransfer(Q);V===r.FLOAT&&(Z=r.RGBA32F),V===r.HALF_FLOAT&&(Z=r.RGBA16F),V===r.UNSIGNED_BYTE&&(Z=Et===me?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(T,S){let V;return T?S===null||S===zi||S===ys?V=r.DEPTH24_STENCIL8:S===En?V=r.DEPTH32F_STENCIL8:S===or&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===zi||S===ys?V=r.DEPTH_COMPONENT24:S===En?V=r.DEPTH_COMPONENT32F:S===or&&(V=r.DEPTH_COMPONENT16),V}function I(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==cn&&T.minFilter!==zn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function w(T){let S=T.target;S.removeEventListener("dispose",w),C(S),S.isVideoTexture&&h.delete(S)}function A(T){let S=T.target;S.removeEventListener("dispose",A),y(S)}function C(T){let S=n.get(T);if(S.__webglInit===void 0)return;let V=T.source,Q=u.get(V);if(Q){let et=Q[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(T),Object.keys(Q).length===0&&u.delete(V)}n.remove(T)}function M(T){let S=n.get(T);r.deleteTexture(S.__webglTexture);let V=T.source,Q=u.get(V);delete Q[S.__cacheKey],a.memory.textures--}function y(T){let S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let et=0;et<S.__webglFramebuffer[Q].length;et++)r.deleteFramebuffer(S.__webglFramebuffer[Q][et]);else r.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)r.deleteFramebuffer(S.__webglFramebuffer[Q]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let V=T.textures;for(let Q=0,et=V.length;Q<et;Q++){let Z=n.get(V[Q]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(V[Q])}n.remove(T)}let P=0;function D(){P=0}function F(){let T=P;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T}function H(T){let S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function O(T,S){let V=n.get(T);if(T.isVideoTexture&&Pt(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){let Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,T,S);return}}e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+S)}function L(T,S){let V=n.get(T);if(T.version>0&&V.__version!==T.version){q(V,T,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+S)}function X(T,S){let V=n.get(T);if(T.version>0&&V.__version!==T.version){q(V,T,S);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+S)}function B(T,S){let V=n.get(T);if(T.version>0&&V.__version!==T.version){tt(V,T,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+S)}let st={[ei]:r.REPEAT,[Di]:r.CLAMP_TO_EDGE,[yl]:r.MIRRORED_REPEAT},lt={[cn]:r.NEAREST,[kf]:r.NEAREST_MIPMAP_NEAREST,[Lr]:r.NEAREST_MIPMAP_LINEAR,[zn]:r.LINEAR,[So]:r.LINEAR_MIPMAP_NEAREST,[Jn]:r.LINEAR_MIPMAP_LINEAR},Mt={[Uf]:r.NEVER,[Gf]:r.ALWAYS,[Of]:r.LESS,[$d]:r.LEQUAL,[Ff]:r.EQUAL,[Vf]:r.GEQUAL,[Bf]:r.GREATER,[Hf]:r.NOTEQUAL};function J(T,S){if(S.type===En&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===zn||S.magFilter===So||S.magFilter===Lr||S.magFilter===Jn||S.minFilter===zn||S.minFilter===So||S.minFilter===Lr||S.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,st[S.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,st[S.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,st[S.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,lt[S.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,lt[S.minFilter]),S.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,Mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===cn||S.minFilter!==Lr&&S.minFilter!==Jn||S.type===En&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function bt(T,S){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",w));let Q=S.source,et=u.get(Q);et===void 0&&(et={},u.set(Q,et));let Z=H(S);if(Z!==T.__cacheKey){et[Z]===void 0&&(et[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),et[Z].usedTimes++;let Et=et[T.__cacheKey];Et!==void 0&&(et[T.__cacheKey].usedTimes--,Et.usedTimes===0&&M(S)),T.__cacheKey=Z,T.__webglTexture=et[Z].texture}return V}function q(T,S,V){let Q=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=r.TEXTURE_3D);let et=bt(T,S),Z=S.source;e.bindTexture(Q,T.__webglTexture,r.TEXTURE0+V);let Et=n.get(Z);if(Z.version!==Et.__version||et===!0){e.activeTexture(r.TEXTURE0+V);let Y=ie.getPrimaries(ie.workingColorSpace),j=S.colorSpace===gi?null:ie.getPrimaries(S.colorSpace),St=S.colorSpace===gi||Y===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let it=x(S.image,!1,i.maxTextureSize);it=de(S,it);let ft=s.convert(S.format,S.colorSpace),_t=s.convert(S.type),Lt=b(S.internalFormat,ft,_t,S.colorSpace,S.isVideoTexture);J(Q,S);let pt,Wt=S.mipmaps,Nt=S.isVideoTexture!==!0,ne=Et.__version===void 0||et===!0,k=Z.dataReady,ct=I(S,it);if(S.isDepthTexture)Lt=v(S.format===_s,S.type),ne&&(Nt?e.texStorage2D(r.TEXTURE_2D,1,Lt,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,Lt,it.width,it.height,0,ft,_t,null));else if(S.isDataTexture)if(Wt.length>0){Nt&&ne&&e.texStorage2D(r.TEXTURE_2D,ct,Lt,Wt[0].width,Wt[0].height);for(let $=0,K=Wt.length;$<K;$++)pt=Wt[$],Nt?k&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,pt.width,pt.height,ft,_t,pt.data):e.texImage2D(r.TEXTURE_2D,$,Lt,pt.width,pt.height,0,ft,_t,pt.data);S.generateMipmaps=!1}else Nt?(ne&&e.texStorage2D(r.TEXTURE_2D,ct,Lt,it.width,it.height),k&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,ft,_t,it.data)):e.texImage2D(r.TEXTURE_2D,0,Lt,it.width,it.height,0,ft,_t,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Nt&&ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Lt,Wt[0].width,Wt[0].height,it.depth);for(let $=0,K=Wt.length;$<K;$++)if(pt=Wt[$],S.format!==pn)if(ft!==null)if(Nt){if(k)if(S.layerUpdates.size>0){let xt=ud(pt.width,pt.height,S.format,S.type);for(let mt of S.layerUpdates){let $t=pt.data.subarray(mt*xt/pt.data.BYTES_PER_ELEMENT,(mt+1)*xt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,mt,pt.width,pt.height,1,ft,$t)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,pt.width,pt.height,it.depth,ft,pt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Lt,pt.width,pt.height,it.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?k&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,pt.width,pt.height,it.depth,ft,_t,pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,Lt,pt.width,pt.height,it.depth,0,ft,_t,pt.data)}else{Nt&&ne&&e.texStorage2D(r.TEXTURE_2D,ct,Lt,Wt[0].width,Wt[0].height);for(let $=0,K=Wt.length;$<K;$++)pt=Wt[$],S.format!==pn?ft!==null?Nt?k&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,Lt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?k&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,pt.width,pt.height,ft,_t,pt.data):e.texImage2D(r.TEXTURE_2D,$,Lt,pt.width,pt.height,0,ft,_t,pt.data)}else if(S.isDataArrayTexture)if(Nt){if(ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Lt,it.width,it.height,it.depth),k)if(S.layerUpdates.size>0){let $=ud(it.width,it.height,S.format,S.type);for(let K of S.layerUpdates){let xt=it.data.subarray(K*$/it.data.BYTES_PER_ELEMENT,(K+1)*$/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,ft,_t,xt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ft,_t,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,it.width,it.height,it.depth,0,ft,_t,it.data);else if(S.isData3DTexture)Nt?(ne&&e.texStorage3D(r.TEXTURE_3D,ct,Lt,it.width,it.height,it.depth),k&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ft,_t,it.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,it.width,it.height,it.depth,0,ft,_t,it.data);else if(S.isFramebufferTexture){if(ne)if(Nt)e.texStorage2D(r.TEXTURE_2D,ct,Lt,it.width,it.height);else{let $=it.width,K=it.height;for(let xt=0;xt<ct;xt++)e.texImage2D(r.TEXTURE_2D,xt,Lt,$,K,0,ft,_t,null),$>>=1,K>>=1}}else if(Wt.length>0){if(Nt&&ne){let $=It(Wt[0]);e.texStorage2D(r.TEXTURE_2D,ct,Lt,$.width,$.height)}for(let $=0,K=Wt.length;$<K;$++)pt=Wt[$],Nt?k&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,ft,_t,pt):e.texImage2D(r.TEXTURE_2D,$,Lt,ft,_t,pt);S.generateMipmaps=!1}else if(Nt){if(ne){let $=It(it);e.texStorage2D(r.TEXTURE_2D,ct,Lt,$.width,$.height)}k&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,_t,it)}else e.texImage2D(r.TEXTURE_2D,0,Lt,ft,_t,it);m(S)&&p(Q),Et.__version=Z.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function tt(T,S,V){if(S.image.length!==6)return;let Q=bt(T,S),et=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+V);let Z=n.get(et);if(et.version!==Z.__version||Q===!0){e.activeTexture(r.TEXTURE0+V);let Et=ie.getPrimaries(ie.workingColorSpace),Y=S.colorSpace===gi?null:ie.getPrimaries(S.colorSpace),j=S.colorSpace===gi||Et===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let St=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!St&&!it?ft[K]=x(S.image[K],!0,i.maxCubemapSize):ft[K]=it?S.image[K].image:S.image[K],ft[K]=de(S,ft[K]);let _t=ft[0],Lt=s.convert(S.format,S.colorSpace),pt=s.convert(S.type),Wt=b(S.internalFormat,Lt,pt,S.colorSpace),Nt=S.isVideoTexture!==!0,ne=Z.__version===void 0||Q===!0,k=et.dataReady,ct=I(S,_t);J(r.TEXTURE_CUBE_MAP,S);let $;if(St){Nt&&ne&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Wt,_t.width,_t.height);for(let K=0;K<6;K++){$=ft[K].mipmaps;for(let xt=0;xt<$.length;xt++){let mt=$[xt];S.format!==pn?Lt!==null?Nt?k&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,0,0,mt.width,mt.height,Lt,mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,Wt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?k&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,0,0,mt.width,mt.height,Lt,pt,mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt,Wt,mt.width,mt.height,0,Lt,pt,mt.data)}}}else{if($=S.mipmaps,Nt&&ne){$.length>0&&ct++;let K=It(ft[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Wt,K.width,K.height)}for(let K=0;K<6;K++)if(it){Nt?k&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,Lt,pt,ft[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,ft[K].width,ft[K].height,0,Lt,pt,ft[K].data);for(let xt=0;xt<$.length;xt++){let $t=$[xt].image[K].image;Nt?k&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,0,0,$t.width,$t.height,Lt,pt,$t.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,Wt,$t.width,$t.height,0,Lt,pt,$t.data)}}else{Nt?k&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Lt,pt,ft[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,Lt,pt,ft[K]);for(let xt=0;xt<$.length;xt++){let mt=$[xt];Nt?k&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,0,0,Lt,pt,mt.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,xt+1,Wt,Lt,pt,mt.image[K])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),Z.__version=et.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ut(T,S,V,Q,et,Z){let Et=s.convert(V.format,V.colorSpace),Y=s.convert(V.type),j=b(V.internalFormat,Et,Y,V.colorSpace),St=n.get(S),it=n.get(V);if(it.__renderTarget=S,!St.__hasExternalTextures){let ft=Math.max(1,S.width>>Z),_t=Math.max(1,S.height>>Z);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,j,ft,_t,S.depth,0,Et,Y,null):e.texImage2D(et,Z,j,ft,_t,0,Et,Y,null)}e.bindFramebuffer(r.FRAMEBUFFER,T),jt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,et,it.__webglTexture,0,Jt(S)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,et,it.__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(T,S,V){if(r.bindRenderbuffer(r.RENDERBUFFER,T),S.depthBuffer){let Q=S.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,Z=v(S.stencilBuffer,et),Et=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=Jt(S);jt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Y,Z,S.width,S.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,Z,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Z,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,T)}else{let Q=S.textures;for(let et=0;et<Q.length;et++){let Z=Q[et],Et=s.convert(Z.format,Z.colorSpace),Y=s.convert(Z.type),j=b(Z.internalFormat,Et,Y,Z.colorSpace),St=Jt(S);V&&jt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,St,j,S.width,S.height):jt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,St,j,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,j,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function yt(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);let et=Q.__webglTexture,Z=Jt(S);if(S.depthTexture.format===fs)jt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0);else if(S.depthTexture.format===_s)jt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Rt(T){let S=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){let Q=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){let et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=Q}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");yt(S.__webglFramebuffer,T)}else if(V){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=r.createRenderbuffer(),rt(S.__webglDepthbuffer[Q],T,!1);else{let et=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),rt(S.__webglDepthbuffer,T,!1);else{let Q=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,et)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(T,S,V){let Q=n.get(T);S!==void 0&&ut(Q.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Rt(T)}function he(T){let S=T.texture,V=n.get(T),Q=n.get(S);T.addEventListener("dispose",A);let et=T.textures,Z=T.isWebGLCubeRenderTarget===!0,Et=et.length>1;if(Et||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=S.version,a.memory.textures++),Z){V.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[Y]=[];for(let j=0;j<S.mipmaps.length;j++)V.__webglFramebuffer[Y][j]=r.createFramebuffer()}else V.__webglFramebuffer[Y]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let Y=0;Y<S.mipmaps.length;Y++)V.__webglFramebuffer[Y]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(Et)for(let Y=0,j=et.length;Y<j;Y++){let St=n.get(et[Y]);St.__webglTexture===void 0&&(St.__webglTexture=r.createTexture(),a.memory.textures++)}if(T.samples>0&&jt(T)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Y=0;Y<et.length;Y++){let j=et[Y];V.__webglColorRenderbuffer[Y]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[Y]);let St=s.convert(j.format,j.colorSpace),it=s.convert(j.type),ft=b(j.internalFormat,St,it,j.colorSpace,T.isXRRenderTarget===!0),_t=Jt(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,ft,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,V.__webglColorRenderbuffer[Y])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),rt(V.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),J(r.TEXTURE_CUBE_MAP,S);for(let Y=0;Y<6;Y++)if(S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)ut(V.__webglFramebuffer[Y][j],T,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,j);else ut(V.__webglFramebuffer[Y],T,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);m(S)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let Y=0,j=et.length;Y<j;Y++){let St=et[Y],it=n.get(St);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),J(r.TEXTURE_2D,St),ut(V.__webglFramebuffer,T,St,r.COLOR_ATTACHMENT0+Y,r.TEXTURE_2D,0),m(St)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let Y=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Y,Q.__webglTexture),J(Y,S),S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)ut(V.__webglFramebuffer[j],T,S,r.COLOR_ATTACHMENT0,Y,j);else ut(V.__webglFramebuffer,T,S,r.COLOR_ATTACHMENT0,Y,0);m(S)&&p(Y),e.unbindTexture()}T.depthBuffer&&Rt(T)}function Gt(T){let S=T.textures;for(let V=0,Q=S.length;V<Q;V++){let et=S[V];if(m(et)){let Z=_(T),Et=n.get(et).__webglTexture;e.bindTexture(Z,Et),p(Z),e.unbindTexture()}}}let be=[],z=[];function ke(T){if(T.samples>0){if(jt(T)===!1){let S=T.textures,V=T.width,Q=T.height,et=r.COLOR_BUFFER_BIT,Z=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=n.get(T),Y=S.length>1;if(Y)for(let j=0;j<S.length;j++)e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let j=0;j<S.length;j++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),Y){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Et.__webglColorRenderbuffer[j]);let St=n.get(S[j]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,V,Q,0,0,V,Q,et,r.NEAREST),l===!0&&(be.length=0,z.length=0,be.push(r.COLOR_ATTACHMENT0+j),T.depthBuffer&&T.resolveDepthBuffer===!1&&(be.push(Z),z.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,z)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Y)for(let j=0;j<S.length;j++){e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,Et.__webglColorRenderbuffer[j]);let St=n.get(S[j]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.TEXTURE_2D,St,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let S=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Jt(T){return Math.min(i.maxSamples,T.samples)}function jt(T){let S=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pt(T){let S=a.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function de(T,S){let V=T.colorSpace,Q=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==Cs&&V!==gi&&(ie.getTransfer(V)===me?(Q!==pn||et!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function It(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=O,this.setTexture2DArray=L,this.setTexture3D=X,this.setTextureCube=B,this.rebindTextures=Ot,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=jt}function zx(r,t){function e(n,i=gi){let s,a=ie.getTransfer(i);if(n===ni)return r.UNSIGNED_BYTE;if(n===Dc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===zc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ud)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===zd)return r.BYTE;if(n===Nd)return r.SHORT;if(n===or)return r.UNSIGNED_SHORT;if(n===kc)return r.INT;if(n===zi)return r.UNSIGNED_INT;if(n===En)return r.FLOAT;if(n===xr)return r.HALF_FLOAT;if(n===Od)return r.ALPHA;if(n===Fd)return r.RGB;if(n===pn)return r.RGBA;if(n===Bd)return r.LUMINANCE;if(n===Hd)return r.LUMINANCE_ALPHA;if(n===fs)return r.DEPTH_COMPONENT;if(n===_s)return r.DEPTH_STENCIL;if(n===Nc)return r.RED;if(n===Uc)return r.RED_INTEGER;if(n===Vd)return r.RG;if(n===Oc)return r.RG_INTEGER;if(n===Fc)return r.RGBA_INTEGER;if(n===ha||n===da||n===ua||n===fa)if(a===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ha)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ha)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===da)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_l||n===bl||n===Ml||n===Sl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_l)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ml)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El||n===wl||n===Tl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===El||n===wl)return a===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Tl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Al||n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===kl||n===Dl||n===zl||n===Nl||n===Ul||n===Ol||n===Fl||n===Bl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Al)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ll)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ol)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bl)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pa||n===Hl||n===Vl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===pa)return a===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gd||n===Gl||n===Wl||n===$l)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===pa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Gl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$l)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var lc=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ve=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nx={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ox=`
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

}`,cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new sn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new On({vertexShader:Ux,fragmentShader:Ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nt(new Re(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hc=class extends Mi{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=new cc,m=e.getContextAttributes(),p=null,_=null,b=[],v=[],I=new ht,w=null,A=new Ye;A.viewport=new ae;let C=new Ye;C.viewport=new ae;let M=[A,C],y=new lc,P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=b[q];return tt===void 0&&(tt=new sr,b[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=b[q];return tt===void 0&&(tt=new sr,b[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=b[q];return tt===void 0&&(tt=new sr,b[q]=tt),tt.getHandSpace()};function F(q){let tt=v.indexOf(q.inputSource);if(tt===-1)return;let ut=b[tt];ut!==void 0&&(ut.update(q.inputSource,q.frame,c||a),ut.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",O);for(let q=0;q<b.length;q++){let tt=v[q];tt!==null&&(v[q]=null,b[q].disconnect(tt))}P=null,D=null,x.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,_=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",H),i.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){let tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ii(f.framebufferWidth,f.framebufferHeight,{format:pn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,ut=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?_s:fs,ut=m.stencil?ys:zi);let yt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(yt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new ii(u.textureWidth,u.textureHeight,{format:pn,type:ni,depthTexture:new wa(u.textureWidth,u.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),bt.setContext(i),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(q){for(let tt=0;tt<q.removed.length;tt++){let ut=q.removed[tt],rt=v.indexOf(ut);rt>=0&&(v[rt]=null,b[rt].disconnect(ut))}for(let tt=0;tt<q.added.length;tt++){let ut=q.added[tt],rt=v.indexOf(ut);if(rt===-1){for(let Rt=0;Rt<b.length;Rt++)if(Rt>=v.length){v.push(ut),rt=Rt;break}else if(v[Rt]===null){v[Rt]=ut,rt=Rt;break}if(rt===-1)break}let yt=b[rt];yt&&yt.connect(ut)}}let L=new R,X=new R;function B(q,tt,ut){L.setFromMatrixPosition(tt.matrixWorld),X.setFromMatrixPosition(ut.matrixWorld);let rt=L.distanceTo(X),yt=tt.projectionMatrix.elements,Rt=ut.projectionMatrix.elements,Ot=yt[14]/(yt[10]-1),he=yt[14]/(yt[10]+1),Gt=(yt[9]+1)/yt[5],be=(yt[9]-1)/yt[5],z=(yt[8]-1)/yt[0],ke=(Rt[8]+1)/Rt[0],Jt=Ot*z,jt=Ot*ke,Pt=rt/(-z+ke),de=Pt*-z;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(de),q.translateZ(Pt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),yt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let It=Ot+Pt,T=he+Pt,S=Jt-de,V=jt+(rt-de),Q=Gt*he/T*It,et=be*he/T*It;q.projectionMatrix.makePerspective(S,V,Q,et,It,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function st(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let tt=q.near,ut=q.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(ut=x.depthFar)),y.near=C.near=A.near=tt,y.far=C.far=A.far=ut,(P!==y.near||D!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,D=y.far),A.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,y.layers.mask=A.layers.mask|C.layers.mask;let rt=q.parent,yt=y.cameras;st(y,rt);for(let Rt=0;Rt<yt.length;Rt++)st(yt[Rt],rt);yt.length===2?B(y,A,C):y.projectionMatrix.copy(A.projectionMatrix),lt(q,y,rt)};function lt(q,tt,ut){ut===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(ut.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Yl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Mt=null;function J(q,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){let ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let rt=!1;ut.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let Rt=0;Rt<ut.length;Rt++){let Ot=ut[Rt],he=null;if(f!==null)he=f.getViewport(Ot);else{let be=d.getViewSubImage(u,Ot);he=be.viewport,Rt===0&&(t.setRenderTargetTextures(_,be.colorTexture,u.ignoreDepthValues?void 0:be.depthStencilTexture),t.setRenderTarget(_))}let Gt=M[Rt];Gt===void 0&&(Gt=new Ye,Gt.layers.enable(Rt),Gt.viewport=new ae,M[Rt]=Gt),Gt.matrix.fromArray(Ot.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ot.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(he.x,he.y,he.width,he.height),Rt===0&&(y.matrix.copy(Gt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(Gt)}let yt=i.enabledFeatures;if(yt&&yt.includes("depth-sensing")){let Rt=d.getDepthInformation(ut[0]);Rt&&Rt.isValid&&Rt.texture&&x.init(t,Rt,i.renderState)}}for(let ut=0;ut<b.length;ut++){let rt=v[ut],yt=b[ut];rt!==null&&yt!==void 0&&yt.update(rt,tt,c||a)}Mt&&Mt(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let bt=new Zd;bt.setAnimationLoop(J),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}},Ii=new mn,Fx=new Ht;function Bx(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yd(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),b=_.envMap,v=_.envMapRotation;b&&(m.envMap.value=b,Ii.copy(v),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(Ii)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Hx(r,t,e,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let v=b.program;n.uniformBlockBinding(_,v)}function c(_,b){let v=i[_.id];v===void 0&&(g(_),v=h(_),i[_.id]=v,_.addEventListener("dispose",m));let I=b.program;n.updateUBOMapping(_,I);let w=t.render.frame;s[_.id]!==w&&(u(_),s[_.id]=w)}function h(_){let b=d();_.__bindingPointIndex=b;let v=r.createBuffer(),I=_.__size,w=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,I,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,v),v}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let b=i[_.id],v=_.uniforms,I=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let w=0,A=v.length;w<A;w++){let C=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,y=C.length;M<y;M++){let P=C[M];if(f(P,w,M,I)===!0){let D=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],H=0;for(let O=0;O<F.length;O++){let L=F[O],X=x(L);typeof L=="number"||typeof L=="boolean"?(P.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,D+H,P.__data)):L.isMatrix3?(P.__data[0]=L.elements[0],P.__data[1]=L.elements[1],P.__data[2]=L.elements[2],P.__data[3]=0,P.__data[4]=L.elements[3],P.__data[5]=L.elements[4],P.__data[6]=L.elements[5],P.__data[7]=0,P.__data[8]=L.elements[6],P.__data[9]=L.elements[7],P.__data[10]=L.elements[8],P.__data[11]=0):(L.toArray(P.__data,H),H+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,b,v,I){let w=_.value,A=b+"_"+v;if(I[A]===void 0)return typeof w=="number"||typeof w=="boolean"?I[A]=w:I[A]=w.clone(),!0;{let C=I[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return I[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(_){let b=_.uniforms,v=0,I=16;for(let A=0,C=b.length;A<C;A++){let M=Array.isArray(b[A])?b[A]:[b[A]];for(let y=0,P=M.length;y<P;y++){let D=M[y],F=Array.isArray(D.value)?D.value:[D.value];for(let H=0,O=F.length;H<O;H++){let L=F[H],X=x(L),B=v%I,st=B%X.boundary,lt=B+st;v+=st,lt!==0&&I-lt<X.storage&&(v+=I-lt),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=X.storage}}}let w=v%I;return w>0&&(v+=I-w),_.__size=v,_.__cache={},this}function x(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function m(_){let b=_.target;b.removeEventListener("dispose",m);let v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(let _ in i)r.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}var Ta=class{constructor(t={}){let{canvas:e=$f(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,_=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this.toneMapping=_i,this.toneMappingExposure=1;let v=this,I=!1,w=0,A=0,C=null,M=-1,y=null,P=new ae,D=new ae,F=null,H=new Dt(0),O=0,L=e.width,X=e.height,B=1,st=null,lt=null,Mt=new ae(0,0,L,X),J=new ae(0,0,L,X),bt=!1,q=new lr,tt=!1,ut=!1,rt=new Ht,yt=new Ht,Rt=new R,Ot=new ae,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function be(){return C===null?B:1}let z=n;function ke(E,N){return e.getContext(E,N)}try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),z===null){let N="webgl2";if(z=ke(N,E),z===null)throw ke(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Jt,jt,Pt,de,It,T,S,V,Q,et,Z,Et,Y,j,St,it,ft,_t,Lt,pt,Wt,Nt,ne,k;function ct(){Jt=new ig(z),Jt.init(),Nt=new zx(z,Jt),jt=new J0(z,Jt,t,Nt),Pt=new Lx(z,Jt),jt.reverseDepthBuffer&&u&&Pt.buffers.depth.setReversed(!0),de=new ag(z),It=new yx,T=new Dx(z,Jt,Pt,It,jt,Nt,de),S=new Q0(v),V=new ng(v),Q=new fp(z),ne=new Z0(z,Q),et=new sg(z,Q,de,ne),Z=new lg(z,et,Q,de),Lt=new og(z,jt,T),it=new j0(It),Et=new vx(v,S,V,Jt,jt,ne,it),Y=new Bx(v,It),j=new bx,St=new Ax(Jt),_t=new Y0(v,S,V,Pt,Z,f,l),ft=new Ix(v,Z,jt),k=new Hx(z,de,jt,Pt),pt=new K0(z,Jt,de),Wt=new rg(z,Jt,de),de.programs=Et.programs,v.capabilities=jt,v.extensions=Jt,v.properties=It,v.renderLists=j,v.shadowMap=ft,v.state=Pt,v.info=de}ct();let $=new hc(v,z);this.xr=$,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=Jt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Jt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(L,X,!1))},this.getSize=function(E){return E.set(L,X)},this.setSize=function(E,N,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=E,X=N,e.width=Math.floor(E*B),e.height=Math.floor(N*B),G===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(L*B,X*B).floor()},this.setDrawingBufferSize=function(E,N,G){L=E,X=N,B=G,e.width=Math.floor(E*G),e.height=Math.floor(N*G),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(Mt)},this.setViewport=function(E,N,G,W){E.isVector4?Mt.set(E.x,E.y,E.z,E.w):Mt.set(E,N,G,W),Pt.viewport(P.copy(Mt).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(J)},this.setScissor=function(E,N,G,W){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,N,G,W),Pt.scissor(D.copy(J).multiplyScalar(B).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(E){Pt.setScissorTest(bt=E)},this.setOpaqueSort=function(E){st=E},this.setTransparentSort=function(E){lt=E},this.getClearColor=function(E){return E.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(E=!0,N=!0,G=!0){let W=0;if(E){let U=!1;if(C!==null){let ot=C.texture.format;U=ot===Fc||ot===Oc||ot===Uc}if(U){let ot=C.texture.type,gt=ot===ni||ot===zi||ot===or||ot===ys||ot===Dc||ot===zc,wt=_t.getClearColor(),Tt=_t.getClearAlpha(),Bt=wt.r,Xt=wt.g,At=wt.b;gt?(g[0]=Bt,g[1]=Xt,g[2]=At,g[3]=Tt,z.clearBufferuiv(z.COLOR,0,g)):(x[0]=Bt,x[1]=Xt,x[2]=At,x[3]=Tt,z.clearBufferiv(z.COLOR,0,x))}else W|=z.COLOR_BUFFER_BIT}N&&(W|=z.DEPTH_BUFFER_BIT),G&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),j.dispose(),St.dispose(),It.dispose(),S.dispose(),V.dispose(),Z.dispose(),ne.dispose(),k.dispose(),Et.dispose(),$.dispose(),$.removeEventListener("sessionstart",ah),$.removeEventListener("sessionend",oh),Ei.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let E=de.autoReset,N=ft.enabled,G=ft.autoUpdate,W=ft.needsUpdate,U=ft.type;ct(),de.autoReset=E,ft.enabled=N,ft.autoUpdate=G,ft.needsUpdate=W,ft.type=U}function mt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $t(E){let N=E.target;N.removeEventListener("dispose",$t),Ae(N)}function Ae(E){$e(E),It.remove(E)}function $e(E){let N=It.get(E).programs;N!==void 0&&(N.forEach(function(G){Et.releaseProgram(G)}),E.isShaderMaterial&&Et.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,G,W,U,ot){N===null&&(N=he);let gt=U.isMesh&&U.matrixWorld.determinant()<0,wt=tf(E,N,G,W,U);Pt.setMaterial(W,gt);let Tt=G.index,Bt=1;if(W.wireframe===!0){if(Tt=et.getWireframeAttribute(G),Tt===void 0)return;Bt=2}let Xt=G.drawRange,At=G.attributes.position,se=Xt.start*Bt,xe=(Xt.start+Xt.count)*Bt;ot!==null&&(se=Math.max(se,ot.start*Bt),xe=Math.min(xe,(ot.start+ot.count)*Bt)),Tt!==null?(se=Math.max(se,0),xe=Math.min(xe,Tt.count)):At!=null&&(se=Math.max(se,0),xe=Math.min(xe,At.count));let ye=xe-se;if(ye<0||ye===1/0)return;ne.setup(U,W,wt,G,Tt);let nn,le=pt;if(Tt!==null&&(nn=Q.get(Tt),le=Wt,le.setIndex(nn)),U.isMesh)W.wireframe===!0?(Pt.setLineWidth(W.wireframeLinewidth*be()),le.setMode(z.LINES)):le.setMode(z.TRIANGLES);else if(U.isLine){let Ct=W.linewidth;Ct===void 0&&(Ct=1),Pt.setLineWidth(Ct*be()),U.isLineSegments?le.setMode(z.LINES):U.isLineLoop?le.setMode(z.LINE_LOOP):le.setMode(z.LINE_STRIP)}else U.isPoints?le.setMode(z.POINTS):U.isSprite&&le.setMode(z.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)le.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))le.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ct=U._multiDrawStarts,Gn=U._multiDrawCounts,ce=U._multiDrawCount,_n=Tt?Q.get(Tt).bytesPerElement:1,Xi=It.get(W).currentProgram.getUniforms();for(let an=0;an<ce;an++)Xi.setValue(z,"_gl_DrawID",an),le.render(Ct[an]/_n,Gn[an])}else if(U.isInstancedMesh)le.renderInstances(se,ye,U.count);else if(G.isInstancedBufferGeometry){let Ct=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Gn=Math.min(G.instanceCount,Ct);le.renderInstances(se,ye,Gn)}else le.render(se,ye)};function ue(E,N,G){E.transparent===!0&&E.side===ze&&E.forceSinglePass===!1?(E.side=Ze,E.needsUpdate=!0,Pr(E,N,G),E.side=bi,E.needsUpdate=!0,Pr(E,N,G),E.side=ze):Pr(E,N,G)}this.compile=function(E,N,G=null){G===null&&(G=E),p=St.get(G),p.init(N),b.push(p),G.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),E!==G&&E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let W=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ot=U.material;if(ot)if(Array.isArray(ot))for(let gt=0;gt<ot.length;gt++){let wt=ot[gt];ue(wt,G,U),W.add(wt)}else ue(ot,G,U),W.add(ot)}),b.pop(),p=null,W},this.compileAsync=function(E,N,G=null){let W=this.compile(E,N,G);return new Promise(U=>{function ot(){if(W.forEach(function(gt){It.get(gt).currentProgram.isReady()&&W.delete(gt)}),W.size===0){U(E);return}setTimeout(ot,10)}Jt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let yn=null;function Vn(E){yn&&yn(E)}function ah(){Ei.stop()}function oh(){Ei.start()}let Ei=new Zd;Ei.setAnimationLoop(Vn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(E){yn=E,$.setAnimationLoop(E),E===null?Ei.stop():Ei.start()},$.addEventListener("sessionstart",ah),$.addEventListener("sessionend",oh),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,C),p=St.get(E,b.length),p.init(N),b.push(p),yt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(yt),ut=this.localClippingEnabled,tt=it.init(this.clippingPlanes,ut),m=j.get(E,_.length),m.init(),_.push(m),$.enabled===!0&&$.isPresenting===!0){let ot=v.xr.getDepthSensingMesh();ot!==null&&Mo(ot,N,-1/0,v.sortObjects)}Mo(E,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(st,lt),Gt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Gt&&_t.addToRenderList(m,E),this.info.render.frame++,tt===!0&&it.beginShadows();let G=p.state.shadowsArray;ft.render(G,E,N),tt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){let ot=N.cameras;if(U.length>0)for(let gt=0,wt=ot.length;gt<wt;gt++){let Tt=ot[gt];ch(W,U,E,Tt)}Gt&&_t.render(E);for(let gt=0,wt=ot.length;gt<wt;gt++){let Tt=ot[gt];lh(m,E,Tt,Tt.viewport)}}else U.length>0&&ch(W,U,E,N),Gt&&_t.render(E),lh(m,E,N);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,N),ne.resetDefaultState(),M=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],tt===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Mo(E,N,G,W){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){W&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(yt);let gt=Z.update(E),wt=E.material;wt.visible&&m.push(E,gt,wt,G,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){let gt=Z.update(E),wt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Ot.copy(gt.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(yt)),Array.isArray(wt)){let Tt=gt.groups;for(let Bt=0,Xt=Tt.length;Bt<Xt;Bt++){let At=Tt[Bt],se=wt[At.materialIndex];se&&se.visible&&m.push(E,gt,se,G,Ot.z,At)}}else wt.visible&&m.push(E,gt,wt,G,Ot.z,null)}}let ot=E.children;for(let gt=0,wt=ot.length;gt<wt;gt++)Mo(ot[gt],N,G,W)}function lh(E,N,G,W){let U=E.opaque,ot=E.transmissive,gt=E.transparent;p.setupLightsView(G),tt===!0&&it.setGlobalState(v.clippingPlanes,G),W&&Pt.viewport(P.copy(W)),U.length>0&&Ir(U,N,G),ot.length>0&&Ir(ot,N,G),gt.length>0&&Ir(gt,N,G),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function ch(E,N,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new ii(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?xr:ni,minFilter:Jn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let ot=p.state.transmissionRenderTarget[W.id],gt=W.viewport||P;ot.setSize(gt.z,gt.w);let wt=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(H),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),Gt&&_t.render(G);let Tt=v.toneMapping;v.toneMapping=_i;let Bt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),tt===!0&&it.setGlobalState(v.clippingPlanes,W),Ir(E,G,W),T.updateMultisampleRenderTarget(ot),T.updateRenderTargetMipmap(ot),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let At=0,se=N.length;At<se;At++){let xe=N[At],ye=xe.object,nn=xe.geometry,le=xe.material,Ct=xe.group;if(le.side===ze&&ye.layers.test(W.layers)){let Gn=le.side;le.side=Ze,le.needsUpdate=!0,hh(ye,G,W,nn,le,Ct),le.side=Gn,le.needsUpdate=!0,Xt=!0}}Xt===!0&&(T.updateMultisampleRenderTarget(ot),T.updateRenderTargetMipmap(ot))}v.setRenderTarget(wt),v.setClearColor(H,O),Bt!==void 0&&(W.viewport=Bt),v.toneMapping=Tt}function Ir(E,N,G){let W=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ot=E.length;U<ot;U++){let gt=E[U],wt=gt.object,Tt=gt.geometry,Bt=W===null?gt.material:W,Xt=gt.group;wt.layers.test(G.layers)&&hh(wt,N,G,Tt,Bt,Xt)}}function hh(E,N,G,W,U,ot){E.onBeforeRender(v,N,G,W,U,ot),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(v,N,G,W,E,ot),U.transparent===!0&&U.side===ze&&U.forceSinglePass===!1?(U.side=Ze,U.needsUpdate=!0,v.renderBufferDirect(G,N,W,U,E,ot),U.side=bi,U.needsUpdate=!0,v.renderBufferDirect(G,N,W,U,E,ot),U.side=ze):v.renderBufferDirect(G,N,W,U,E,ot),E.onAfterRender(v,N,G,W,U,ot)}function Pr(E,N,G){N.isScene!==!0&&(N=he);let W=It.get(E),U=p.state.lights,ot=p.state.shadowsArray,gt=U.state.version,wt=Et.getParameters(E,U.state,ot,N,G),Tt=Et.getProgramCacheKey(wt),Bt=W.programs;W.environment=E.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(E.isMeshStandardMaterial?V:S).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",$t),Bt=new Map,W.programs=Bt);let Xt=Bt.get(Tt);if(Xt!==void 0){if(W.currentProgram===Xt&&W.lightsStateVersion===gt)return uh(E,wt),Xt}else wt.uniforms=Et.getUniforms(E),E.onBeforeCompile(wt,v),Xt=Et.acquireProgram(wt,Tt),Bt.set(Tt,Xt),W.uniforms=wt.uniforms;let At=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=it.uniform),uh(E,wt),W.needsLights=nf(E),W.lightsStateVersion=gt,W.needsLights&&(At.ambientLightColor.value=U.state.ambient,At.lightProbe.value=U.state.probe,At.directionalLights.value=U.state.directional,At.directionalLightShadows.value=U.state.directionalShadow,At.spotLights.value=U.state.spot,At.spotLightShadows.value=U.state.spotShadow,At.rectAreaLights.value=U.state.rectArea,At.ltc_1.value=U.state.rectAreaLTC1,At.ltc_2.value=U.state.rectAreaLTC2,At.pointLights.value=U.state.point,At.pointLightShadows.value=U.state.pointShadow,At.hemisphereLights.value=U.state.hemi,At.directionalShadowMap.value=U.state.directionalShadowMap,At.directionalShadowMatrix.value=U.state.directionalShadowMatrix,At.spotShadowMap.value=U.state.spotShadowMap,At.spotLightMatrix.value=U.state.spotLightMatrix,At.spotLightMap.value=U.state.spotLightMap,At.pointShadowMap.value=U.state.pointShadowMap,At.pointShadowMatrix.value=U.state.pointShadowMatrix),W.currentProgram=Xt,W.uniformsList=null,Xt}function dh(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=ms.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function uh(E,N){let G=It.get(E);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function tf(E,N,G,W,U){N.isScene!==!0&&(N=he),T.resetTextureUnits();let ot=N.fog,gt=W.isMeshStandardMaterial?N.environment:null,wt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Cs,Tt=(W.isMeshStandardMaterial?V:S).get(W.envMap||gt),Bt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Xt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),At=!!G.morphAttributes.position,se=!!G.morphAttributes.normal,xe=!!G.morphAttributes.color,ye=_i;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ye=v.toneMapping);let nn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,le=nn!==void 0?nn.length:0,Ct=It.get(W),Gn=p.state.lights;if(tt===!0&&(ut===!0||E!==y)){let un=E===y&&W.id===M;it.setState(W,E,un)}let ce=!1;W.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Gn.state.version||Ct.outputColorSpace!==wt||U.isBatchedMesh&&Ct.batching===!1||!U.isBatchedMesh&&Ct.batching===!0||U.isBatchedMesh&&Ct.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ct.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ct.instancing===!1||!U.isInstancedMesh&&Ct.instancing===!0||U.isSkinnedMesh&&Ct.skinning===!1||!U.isSkinnedMesh&&Ct.skinning===!0||U.isInstancedMesh&&Ct.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ct.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ct.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ct.instancingMorph===!1&&U.morphTexture!==null||Ct.envMap!==Tt||W.fog===!0&&Ct.fog!==ot||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==it.numPlanes||Ct.numIntersection!==it.numIntersection)||Ct.vertexAlphas!==Bt||Ct.vertexTangents!==Xt||Ct.morphTargets!==At||Ct.morphNormals!==se||Ct.morphColors!==xe||Ct.toneMapping!==ye||Ct.morphTargetsCount!==le)&&(ce=!0):(ce=!0,Ct.__version=W.version);let _n=Ct.currentProgram;ce===!0&&(_n=Pr(W,N,U));let Xi=!1,an=!1,Gs=!1,_e=_n.getUniforms(),Ln=Ct.uniforms;if(Pt.useProgram(_n.program)&&(Xi=!0,an=!0,Gs=!0),W.id!==M&&(M=W.id,an=!0),Xi||y!==E){Pt.buffers.depth.getReversed()?(rt.copy(E.projectionMatrix),qf(rt),Yf(rt),_e.setValue(z,"projectionMatrix",rt)):_e.setValue(z,"projectionMatrix",E.projectionMatrix),_e.setValue(z,"viewMatrix",E.matrixWorldInverse);let li=_e.map.cameraPosition;li!==void 0&&li.setValue(z,Rt.setFromMatrixPosition(E.matrixWorld)),jt.logarithmicDepthBuffer&&_e.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_e.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,an=!0,Gs=!0)}if(U.isSkinnedMesh){_e.setOptional(z,U,"bindMatrix"),_e.setOptional(z,U,"bindMatrixInverse");let un=U.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),_e.setValue(z,"boneTexture",un.boneTexture,T))}U.isBatchedMesh&&(_e.setOptional(z,U,"batchingTexture"),_e.setValue(z,"batchingTexture",U._matricesTexture,T),_e.setOptional(z,U,"batchingIdTexture"),_e.setValue(z,"batchingIdTexture",U._indirectTexture,T),_e.setOptional(z,U,"batchingColorTexture"),U._colorsTexture!==null&&_e.setValue(z,"batchingColorTexture",U._colorsTexture,T));let Ws=G.morphAttributes;if((Ws.position!==void 0||Ws.normal!==void 0||Ws.color!==void 0)&&Lt.update(U,G,_n),(an||Ct.receiveShadow!==U.receiveShadow)&&(Ct.receiveShadow=U.receiveShadow,_e.setValue(z,"receiveShadow",U.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ln.envMap.value=Tt,Ln.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Ln.envMapIntensity.value=N.environmentIntensity),an&&(_e.setValue(z,"toneMappingExposure",v.toneMappingExposure),Ct.needsLights&&ef(Ln,Gs),ot&&W.fog===!0&&Y.refreshFogUniforms(Ln,ot),Y.refreshMaterialUniforms(Ln,W,B,X,p.state.transmissionRenderTarget[E.id]),ms.upload(z,dh(Ct),Ln,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ms.upload(z,dh(Ct),Ln,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_e.setValue(z,"center",U.center),_e.setValue(z,"modelViewMatrix",U.modelViewMatrix),_e.setValue(z,"normalMatrix",U.normalMatrix),_e.setValue(z,"modelMatrix",U.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let un=W.uniformsGroups;for(let li=0,ci=un.length;li<ci;li++){let fh=un[li];k.update(fh,_n),k.bind(fh,_n)}}return _n}function ef(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function nf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,N,G){It.get(E.texture).__webglTexture=N,It.get(E.depthTexture).__webglTexture=G;let W=It.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){let G=It.get(E);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,G=0){C=E,w=N,A=G;let W=!0,U=null,ot=!1,gt=!1;if(E){let Tt=It.get(E);if(Tt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(z.FRAMEBUFFER,null),W=!1;else if(Tt.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Tt.__hasExternalTextures)T.rebindTextures(E,It.get(E.texture).__webglTexture,It.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let At=E.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&It.has(At)&&(E.width!==At.image.width||E.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}let Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(gt=!0);let Xt=It.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xt[N])?U=Xt[N][G]:U=Xt[N],ot=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?U=It.get(E).__webglMultisampledFramebuffer:Array.isArray(Xt)?U=Xt[G]:U=Xt,P.copy(E.viewport),D.copy(E.scissor),F=E.scissorTest}else P.copy(Mt).multiplyScalar(B).floor(),D.copy(J).multiplyScalar(B).floor(),F=bt;if(Pt.bindFramebuffer(z.FRAMEBUFFER,U)&&W&&Pt.drawBuffers(E,U),Pt.viewport(P),Pt.scissor(D),Pt.setScissorTest(F),ot){let Tt=It.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,Tt.__webglTexture,G)}else if(gt){let Tt=It.get(E.texture),Bt=N||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Tt.__webglTexture,G||0,Bt)}M=-1},this.readRenderTargetPixels=function(E,N,G,W,U,ot,gt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=It.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(wt=wt[gt]),wt){Pt.bindFramebuffer(z.FRAMEBUFFER,wt);try{let Tt=E.texture,Bt=Tt.format,Xt=Tt.type;if(!jt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-W&&G>=0&&G<=E.height-U&&z.readPixels(N,G,W,U,Nt.convert(Bt),Nt.convert(Xt),ot)}finally{let Tt=C!==null?It.get(C).__webglFramebuffer:null;Pt.bindFramebuffer(z.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(E,N,G,W,U,ot,gt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=It.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(wt=wt[gt]),wt){let Tt=E.texture,Bt=Tt.format,Xt=Tt.type;if(!jt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-W&&G>=0&&G<=E.height-U){Pt.bindFramebuffer(z.FRAMEBUFFER,wt);let At=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,At),z.bufferData(z.PIXEL_PACK_BUFFER,ot.byteLength,z.STREAM_READ),z.readPixels(N,G,W,U,Nt.convert(Bt),Nt.convert(Xt),0);let se=C!==null?It.get(C).__webglFramebuffer:null;Pt.bindFramebuffer(z.FRAMEBUFFER,se);let xe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Xf(z,xe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,At),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ot),z.deleteBuffer(At),z.deleteSync(xe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,G=0){E.isTexture!==!0&&(nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);let W=Math.pow(2,-G),U=Math.floor(E.image.width*W),ot=Math.floor(E.image.height*W),gt=N!==null?N.x:0,wt=N!==null?N.y:0;T.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,G,0,0,gt,wt,U,ot),Pt.unbindTexture()},this.copyTextureToTexture=function(E,N,G=null,W=null,U=0){E.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],N=arguments[2],U=arguments[3]||0,G=null);let ot,gt,wt,Tt,Bt,Xt,At,se,xe,ye=E.isCompressedTexture?E.mipmaps[U]:E.image;G!==null?(ot=G.max.x-G.min.x,gt=G.max.y-G.min.y,wt=G.isBox3?G.max.z-G.min.z:1,Tt=G.min.x,Bt=G.min.y,Xt=G.isBox3?G.min.z:0):(ot=ye.width,gt=ye.height,wt=ye.depth||1,Tt=0,Bt=0,Xt=0),W!==null?(At=W.x,se=W.y,xe=W.z):(At=0,se=0,xe=0);let nn=Nt.convert(N.format),le=Nt.convert(N.type),Ct;N.isData3DTexture?(T.setTexture3D(N,0),Ct=z.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Ct=z.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Ct=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,N.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,N.unpackAlignment);let Gn=z.getParameter(z.UNPACK_ROW_LENGTH),ce=z.getParameter(z.UNPACK_IMAGE_HEIGHT),_n=z.getParameter(z.UNPACK_SKIP_PIXELS),Xi=z.getParameter(z.UNPACK_SKIP_ROWS),an=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ye.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ye.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Tt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Bt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xt);let Gs=E.isDataArrayTexture||E.isData3DTexture,_e=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Ln=It.get(E),Ws=It.get(N),un=It.get(Ln.__renderTarget),li=It.get(Ws.__renderTarget);Pt.bindFramebuffer(z.READ_FRAMEBUFFER,un.__webglFramebuffer),Pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let ci=0;ci<wt;ci++)Gs&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,It.get(E).__webglTexture,U,Xt+ci),E.isDepthTexture?(_e&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,It.get(N).__webglTexture,U,xe+ci),z.blitFramebuffer(Tt,Bt,ot,gt,At,se,ot,gt,z.DEPTH_BUFFER_BIT,z.NEAREST)):_e?z.copyTexSubImage3D(Ct,U,At,se,xe+ci,Tt,Bt,ot,gt):z.copyTexSubImage2D(Ct,U,At,se,xe+ci,Tt,Bt,ot,gt);Pt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else _e?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Ct,U,At,se,xe,ot,gt,wt,nn,le,ye.data):N.isCompressedArrayTexture?z.compressedTexSubImage3D(Ct,U,At,se,xe,ot,gt,wt,nn,ye.data):z.texSubImage3D(Ct,U,At,se,xe,ot,gt,wt,nn,le,ye):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,U,At,se,ot,gt,nn,le,ye.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,U,At,se,ye.width,ye.height,nn,ye.data):z.texSubImage2D(z.TEXTURE_2D,U,At,se,ot,gt,nn,le,ye);z.pixelStorei(z.UNPACK_ROW_LENGTH,Gn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ce),z.pixelStorei(z.UNPACK_SKIP_PIXELS,_n),z.pixelStorei(z.UNPACK_SKIP_ROWS,Xi),z.pixelStorei(z.UNPACK_SKIP_IMAGES,an),U===0&&N.generateMipmaps&&z.generateMipmap(Ct),Pt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,G=null,W=null,U=0){return E.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],N=arguments[3],U=arguments[4]||0),nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,G,W,U)},this.initRenderTarget=function(E){It.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Pt.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,Pt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var Aa=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ws=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ra=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ql,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},je=new R,cr=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ni=class extends Un{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},os,Zs=new R,ls=new R,cs=new R,hs=new ht,Ks=new ht,tu=new Ht,Qr=new R,Js=new R,ta=new R,fd=new ht,Qo=new ht,pd=new ht,Ts=class extends Ne{constructor(t=new Ni){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ra(e,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new cr(n,3,0,!1)),os.setAttribute("uv",new cr(n,2,3,!1))}this.geometry=os,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),tu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-cs.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;ea(Qr.set(-.5,-.5,0),cs,a,ls,i,s),ea(Js.set(.5,-.5,0),cs,a,ls,i,s),ea(ta.set(.5,.5,0),cs,a,ls,i,s),fd.set(0,0),Qo.set(1,0),pd.set(1,1);let o=t.ray.intersectTriangle(Qr,Js,ta,!1,Zs);if(o===null&&(ea(Js.set(-.5,.5,0),cs,a,ls,i,s),Qo.set(0,1),o=t.ray.intersectTriangle(Qr,ta,Js,!1,Zs),o===null))return;let l=t.ray.origin.distanceTo(Zs);l<t.near||l>t.far||e.push({distance:l,point:Zs.clone(),uv:xi.getInterpolation(Zs,Qr,Js,ta,fd,Qo,pd,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ea(r,t,e,n,i,s){hs.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Ks.x=s*hs.x-i*hs.y,Ks.y=i*hs.x+s*hs.y):Ks.copy(hs),r.copy(t),r.x+=Ks.x,r.y+=Ks.y,r.applyMatrix4(tu)}var md=new R,gd=new ae,xd=new ae,Vx=new R,vd=new Ht,na=new R,tl=new Tn,yd=new Ht,el=new bs,Ca=class extends nt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xh,this.bindMatrix=new Ht,this.bindMatrixInverse=new Ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,na),this.boundingBox.expandByPoint(na)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,na),this.boundingSphere.expandByPoint(na)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tl.copy(this.boundingSphere),tl.applyMatrix4(i),t.ray.intersectsSphere(tl)!==!1&&(yd.copy(i).invert(),el.copy(t.ray).applyMatrix4(yd),!(this.boundingBox!==null&&el.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,el)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ae,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===xh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Lf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;gd.fromBufferAttribute(i.attributes.skinIndex,t),xd.fromBufferAttribute(i.attributes.skinWeight,t),md.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){let a=xd.getComponent(s);if(a!==0){let o=gd.getComponent(s);vd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Vx.copy(md).applyMatrix4(vd),a)}}return e.applyMatrix4(this.bindMatrixInverse)}},Fn=class extends Ne{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ia=class extends sn{constructor(t=null,e=1,n=1,i,s,a,o,l,c=cn,h=cn,d,u){super(null,a,o,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_d=new Ht,Gx=new Ht,Pa=class r{constructor(t=[],e=[]){this.uuid=Qn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ht)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Ht;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=t.length;s<a;s++){let o=t[s]?t[s].matrixWorld:Gx;_d.multiplyMatrices(o,e[s]),_d.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Ia(e,t,t,pn,En);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let s=t.bones[n],a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Fn),this.bones.push(a),this.boneInverses.push(new Ht().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){let a=e[i];t.bones.push(a.uuid);let o=n[i];t.boneInverses.push(o.toArray())}return t}},hr=class extends He{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ds=new Ht,bd=new Ht,ia=[],Md=new Nn,Wx=new Ht,js=new nt,Qs=new Tn,An=class extends nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Wx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Md.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(Md)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Qs.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),t.ray.intersectsSphere(Qs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ds),bd.multiplyMatrices(n,ds),js.matrixWorld=bd,js.raycast(t,ia);for(let a=0,o=ia.length;a<o;a++){let l=ia[a];l.instanceId=s,l.object=this,e.push(l)}ia.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ia(new Float32Array(i*this.count),i,this.count,Nc,En));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var dr=class extends Un{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},La=new R,ka=new R,Sd=new Ht,tr=new bs,sa=new Tn,nl=new R,Ed=new R,Da=class extends Ne{constructor(t=new Ee,e=new dr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)La.fromBufferAttribute(e,i-1),ka.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=La.distanceTo(ka);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(i),sa.radius+=s,t.ray.intersectsSphere(sa)===!1)return;Sd.copy(i).invert(),tr.copy(t.ray).applyMatrix4(Sd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),_=h.getX(x+1),b=ra(this,t,tr,l,p,_);b&&e.push(b)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=ra(this,t,tr,l,x,m);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=ra(this,t,tr,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=ra(this,t,tr,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ra(r,t,e,n,i,s){let a=r.geometry.attributes.position;if(La.fromBufferAttribute(a,i),ka.fromBufferAttribute(a,s),e.distanceSqToSegment(La,ka,nl,Ed)>n)return;nl.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(nl);if(!(l<t.near||l>t.far))return{distance:l,point:Ed.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var ur=class extends Un{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},wd=new Ht,dc=new bs,aa=new Tn,oa=new R,za=class extends Ne{constructor(t=new Ee,e=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(i),aa.radius+=s,t.ray.intersectsSphere(aa)===!1)return;wd.copy(i).invert(),dc.copy(t.ray).applyMatrix4(wd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,x=f;g<x;g++){let m=c.getX(g);oa.fromBufferAttribute(d,m),Td(oa,m,l,i,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,x=f;g<x;g++)oa.fromBufferAttribute(d,g),Td(oa,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Td(r,t,e,n,i,s,a){let o=dc.distanceSqToPoint(r);if(o<e){let l=new R;dc.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Pe=class extends sn{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new ht:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,i=[],s=[],a=[],o=new R,l=new Ht;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Be(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Be(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},fr=class extends gn{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ht){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},uc=class extends fr{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Hc(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+n*o}}}var la=new R,il=new Hc,sl=new Hc,rl=new Hc,fc=class extends gn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){let n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(la.subVectors(i[0],i[1]).add(i[0]),c=la);let d=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(la.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=la),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),il.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,m),sl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,m),rl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(il.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),sl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),rl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(il.calc(l),sl.calc(l),rl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ad(r,t,e,n,i){let s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function $x(r,t){let e=1-r;return e*e*t}function Xx(r,t){return 2*(1-r)*r*t}function qx(r,t){return r*r*t}function rr(r,t,e,n){return $x(r,t)+Xx(r,e)+qx(r,n)}function Yx(r,t){let e=1-r;return e*e*e*t}function Zx(r,t){let e=1-r;return 3*e*e*r*t}function Kx(r,t){return 3*(1-r)*r*r*t}function Jx(r,t){return r*r*r*t}function ar(r,t,e,n,i){return Yx(r,t)+Zx(r,e)+Kx(r,n)+Jx(r,i)}var Na=class extends gn{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ar(t,i.x,s.x,a.x,o.x),ar(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pc=class extends gn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ar(t,i.x,s.x,a.x,o.x),ar(t,i.y,s.y,a.y,o.y),ar(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ua=class extends gn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mc=class extends gn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oa=class extends gn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(rr(t,i.x,s.x,a.x),rr(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gc=class extends gn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(rr(t,i.x,s.x,a.x),rr(t,i.y,s.y,a.y),rr(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fa=class extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Ad(o,l.x,c.x,h.x,d.x),Ad(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ht().fromArray(i))}return this}},Rd=Object.freeze({__proto__:null,ArcCurve:uc,CatmullRomCurve3:fc,CubicBezierCurve:Na,CubicBezierCurve3:pc,EllipseCurve:fr,LineCurve:Ua,LineCurve3:mc,QuadraticBezierCurve:Oa,QuadraticBezierCurve3:gc,SplineCurve:Fa}),xc=class extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Rd[i.type]().fromJSON(i))}return this}},vc=class extends xc{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ua(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Oa(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){let o=new Na(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Fa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){let c=new fr(t,e,n,i,s,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},As=class r extends Ee{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Be(i,0,Math.PI*2);let s=[],a=[],o=[],l=[],c=[],h=1/e,d=new R,u=new ht,f=new R,g=new R,x=new R,m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=e;_++){let b=n+_*h*i,v=Math.sin(b),I=Math.cos(b);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*v,d.y=t[w].y,d.z=t[w].x*I,a.push(d.x,d.y,d.z),u.x=_/e,u.y=w/(t.length-1),o.push(u.x,u.y);let A=l[3*w+0]*v,C=l[3*w+1],M=l[3*w+0]*I;c.push(A,C,M)}}for(let _=0;_<e;_++)for(let b=0;b<t.length-1;b++){let v=b+_*t.length,I=v,w=v+t.length,A=v+t.length+1,C=v+1;s.push(I,w,C),s.push(A,C,w)}this.setIndex(s),this.setAttribute("position",new ee(a,3)),this.setAttribute("uv",new ee(o,2)),this.setAttribute("normal",new ee(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},Rn=class r extends As{constructor(t=1,e=1,n=4,i=8){let s=new vc;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}},Ba=class r extends Ee{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],a=[],o=[],l=[],c=new R,h=new ht;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(o,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ke=class r extends Ee{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],u=[],f=[],g=0,x=[],m=n/2,p=0;_(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(f,2));function _(){let v=new R,I=new R,w=0,A=(e-t)/n;for(let C=0;C<=s;C++){let M=[],y=C/s,P=y*(e-t)+t;for(let D=0;D<=i;D++){let F=D/i,H=F*l+o,O=Math.sin(H),L=Math.cos(H);I.x=P*O,I.y=-y*n+m,I.z=P*L,d.push(I.x,I.y,I.z),v.set(O,A,L).normalize(),u.push(v.x,v.y,v.z),f.push(F,1-y),M.push(g++)}x.push(M)}for(let C=0;C<i;C++)for(let M=0;M<s;M++){let y=x[M][C],P=x[M+1][C],D=x[M+1][C+1],F=x[M][C+1];(t>0||M!==0)&&(h.push(y,P,F),w+=3),(e>0||M!==s-1)&&(h.push(P,D,F),w+=3)}c.addGroup(p,w,0),p+=w}function b(v){let I=g,w=new ht,A=new R,C=0,M=v===!0?t:e,y=v===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,m*y,0),u.push(0,y,0),f.push(.5,.5),g++;let P=g;for(let D=0;D<=i;D++){let H=D/i*l+o,O=Math.cos(H),L=Math.sin(H);A.x=M*L,A.y=m*y,A.z=M*O,d.push(A.x,A.y,A.z),u.push(0,y,0),w.x=O*.5+.5,w.y=L*.5*y+.5,f.push(w.x,w.y),g++}for(let D=0;D<i;D++){let F=I+D,H=P+D;v===!0?h.push(H,H+1,F):h.push(H+1,H,F),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pr=class r extends Ke{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ha=class r extends Ee{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(s.slice(),3)),this.setAttribute("uv",new ee(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let b=new R,v=new R,I=new R;for(let w=0;w<e.length;w+=3)f(e[w+0],b),f(e[w+1],v),f(e[w+2],I),l(b,v,I,_)}function l(_,b,v,I){let w=I+1,A=[];for(let C=0;C<=w;C++){A[C]=[];let M=_.clone().lerp(v,C/w),y=b.clone().lerp(v,C/w),P=w-C;for(let D=0;D<=P;D++)D===0&&C===w?A[C][D]=M:A[C][D]=M.clone().lerp(y,D/P)}for(let C=0;C<w;C++)for(let M=0;M<2*(w-C)-1;M++){let y=Math.floor(M/2);M%2===0?(u(A[C][y+1]),u(A[C+1][y]),u(A[C][y])):(u(A[C][y+1]),u(A[C+1][y+1]),u(A[C+1][y]))}}function c(_){let b=new R;for(let v=0;v<s.length;v+=3)b.x=s[v+0],b.y=s[v+1],b.z=s[v+2],b.normalize().multiplyScalar(_),s[v+0]=b.x,s[v+1]=b.y,s[v+2]=b.z}function h(){let _=new R;for(let b=0;b<s.length;b+=3){_.x=s[b+0],_.y=s[b+1],_.z=s[b+2];let v=m(_)/2/Math.PI+.5,I=p(_)/Math.PI+.5;a.push(v,1-I)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){let b=a[_+0],v=a[_+2],I=a[_+4],w=Math.max(b,v,I),A=Math.min(b,v,I);w>.9&&A<.1&&(b<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),I<.2&&(a[_+4]+=1))}}function u(_){s.push(_.x,_.y,_.z)}function f(_,b){let v=_*3;b.x=t[v+0],b.y=t[v+1],b.z=t[v+2]}function g(){let _=new R,b=new R,v=new R,I=new R,w=new ht,A=new ht,C=new ht;for(let M=0,y=0;M<s.length;M+=9,y+=6){_.set(s[M+0],s[M+1],s[M+2]),b.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),w.set(a[y+0],a[y+1]),A.set(a[y+2],a[y+3]),C.set(a[y+4],a[y+5]),I.copy(_).add(b).add(v).divideScalar(3);let P=m(I);x(w,y+0,_,P),x(A,y+2,b,P),x(C,y+4,v,P)}}function x(_,b,v,I){I<0&&_.x===1&&(a[b]=_.x-1),v.x===0&&v.z===0&&(a[b]=I/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var Va=class r extends Ha{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Ga=class r extends Ha{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},si=class r extends Ee{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/i,f=new R,g=new ht;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=s+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let _=p+m,b=_,v=_+n+1,I=_+n+2,w=_+1;o.push(b,v,w),o.push(v,I,w)}}this.setIndex(o),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Se=class r extends Ee{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new R,u=new R,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],b=p/n,v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let I=0;I<=e;I++){let w=I/e;d.x=-t*Math.cos(i+w*s)*Math.sin(a+b*o),d.y=t*Math.cos(a+b*o),d.z=t*Math.sin(i+w*s)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(w+v,1-b),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let b=h[p][_+1],v=h[p][_],I=h[p+1][_],w=h[p+1][_+1];(p!==0||a>0)&&f.push(b,v,w),(p!==n-1||l<Math.PI)&&f.push(v,I,w)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(x,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var tn=class r extends Ee{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new R,d=new R,u=new R;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let x=g/i*s,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,_=(i+1)*f+g;a.push(x,m,_),a.push(m,p,_)}this.setIndex(a),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Qt=class extends Un{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wd,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},dn=class extends Qt{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function ca(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function jx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Rs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yc=class extends Rs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vh,endingEnd:vh}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case yh:s=t,o=2*e-n;break;case _h:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yh:a=t,l=2*n-e;break;case _h:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,_=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,b=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let I=0;I!==o;++I)s[I]=p*a[h+I]+_*a[c+I]+b*a[l+I]+v*a[d+I];return s}},_c=class extends Rs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},bc=class extends Rs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Cn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ca(e,this.TimeBufferType),this.values=ca(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ca(t.times,Array),values:ca(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ma:e=this.InterpolantFactoryMethodDiscrete;break;case Xl:e=this.InterpolantFactoryMethodLinear;break;case Eo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return Xl;case this.InterpolantFactoryMethodSmooth:return Eo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&jx(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Eo,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Xl;var Ui=class extends Cn{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=ma;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Mc=class extends Cn{};Mc.prototype.ValueTypeName="color";var Sc=class extends Cn{};Sc.prototype.ValueTypeName="number";var Ec=class extends Rs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)hn.slerpFlat(s,0,a,c-o,a,c,l);return s}},Wa=class extends Cn{InterpolantFactoryMethodLinear(t){return new Ec(this.times,this.values,this.getValueSize(),t)}};Wa.prototype.ValueTypeName="quaternion";Wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=ma;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends Cn{};wc.prototype.ValueTypeName="vector";var Tc=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Qx=new Tc,Ac=class{constructor(t){this.manager=t!==void 0?t:Qx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var mr=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},$a=class extends mr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},al=new Ht,Cd=new R,Id=new R,Xa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Cd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cd),Id.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Id),e.updateMatrixWorld(),al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Pd=new Ht,er=new R,ol=new R,Rc=class extends Xa{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),er.setFromMatrixPosition(t.matrixWorld),n.position.copy(er),ol.copy(n.position),ol.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ol),n.updateMatrixWorld(),i.makeTranslation(-er.x,-er.y,-er.z),Pd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pd)}},qa=class extends mr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Cc=class extends Xa{constructor(){super(new Ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gr=class extends mr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Cc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Vc="\\[\\]\\.:\\/",tv=new RegExp("["+Vc+"]","g"),Gc="[^"+Vc+"]",ev="[^"+Vc.replace("\\.","")+"]",nv=/((?:WC+[\/:])*)/.source.replace("WC",Gc),iv=/(WCOD+)?/.source.replace("WCOD",ev),sv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),rv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),av=new RegExp("^"+nv+iv+sv+rv+"$"),ov=["material","materials","bones","map"],Ic=class{constructor(t,e,n){let i=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tv,"")}static parseTrackName(t){let e=av.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);ov.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Ic;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ve={DT:.016666666666666666,MAX_STEPS_PER_FRAME:5,BALL_SUBSTEPS:4,G_PLAYER:22,G_BALL:12},Vt={HALF_L:13,HALF_W:7.5,WALL_PAD:.9,THREE:6.75},Zt={R:.42,H:1.95,REACH:.45,RUN:7.2,SPRINT:10.2,ACCEL:55,AIR_ACCEL:18,FRICTION:60,JUMP_V:7.2,SHOT_JUMP_V:5.4,LAYUP_JUMP_V:7.6,STAMINA_DRAIN:.28,STAMINA_REGEN:.2,STAMINA_MIN:.12,REACH_SLOW:.45,TURN_RATE:14},we={R:.13,REST_FLOOR:.72,REST_RIM:.5,REST_BOARD:.68,REST_WALL:.55,ROLL_FRICTION:.986},zt={RIM_Y:3.05,RIM_R:.31,TUBE_R:.022,BOARD_X:12,BOARD_W:1.8,BOARD_BOTTOM:2.9,BOARD_TOP:3.95,BOARD_THICK:.06,RIM_OFFSET:.17,NET_DEPTH:.45},Kt={METER_FILL:.52,METER_MAX:1.35,SWEET_CENTER:.885,SWEET_HALF:.07,FALLOFF:5,DUNK_RANGE:1.9,LAYUP_RANGE:3.1,BLOCK_WINDOW:.32,NO_PICKUP_SHOOTER:.3,STEAL_RANGE:1.45,STEAL_CD:.75,STEAL_REACH_T:.45,STEAL_LUNGE_V:6,STEAL_CHANCE_FRONT:.4,STEAL_CHANCE_SIDE:.25,STEAL_CHANCE_BEHIND:.08,STEAL_CHANCE_AIR:.25},kt={FIRST_SPAWN:5,RESPAWN:7,PICKUP_R:1.1,POOL:{grapple:20,jetpack:14,punch:18,freeze:14,banana:13,magnet:10,energy:13},JETPACK:{T:1.7,THRUST:34,MAX_VY:6.5,CEILING:3.6},PUNCH:{WINDUP:.24,RECOVER:.25,RANGE:2.6,CONE:.5,POWER:13,STUN:1,LUNGE:8,ASSIST:5},FREEZE:{SPEED:22,RANGE:20,HIT_R:.7,T:1.4,HOMING:2},BANANA:{HIT_R:.6,LIFE:25,STUN:1.2,ARM_T:.4},MAGNET:{T:4.5,RANGE:10,PULL:26,YANK_R:3.6,YANK_CHANCE:.55,YANK_EVERY:.6},ENERGY:{T:7,SPEED:1.28},GRAPPLE:{RANGE:22,SPEED:24,MAX_T:1.3,ARRIVE:1,STEAL_CHANCE:.75,KNOCKBACK:9}},Ja={STREAK:3,SPREAD_MUL:.35,MAX:4},Ce={SWIPE_WINDUP:.11,SWIPE_ACTIVE:.1,SWIPE_RECOVER:.17,ARM_REACH:.98,HAND_R:.16,LUNGE_REACH:.22,LUNGE_V:5.2,MISS_RECOVER:.55,STEAL_CD:.75,BODY_SHIELD_R:.34,GRAB_DIST:.62,STRIP_SPEED:3.6,CHARGE_SPEED:7.4,CHARGE_CD:1.2,STANCE_R:3.4,STANCE_SPEED:.86,STANCE_ACCEL:1.45,CONTEST_STAT:.35,HANDS_UP:.55},Ps={TURN:1.25,WINDOW:.25,ANKLE_R:2.2,ANKLE_STUN:1},Te={DASH_V:11,DASH_BALL_V:9,DASH_T:.2,DASH_CD:1.3,DRIBBLE_V:8.5,DRIBBLE_T:.22,DRIBBLE_CD:.85,SHAKE_R:2.1,SHAKE_CHANCE:.3,SHAKE_REACH_BONUS:.45,PASS_MIN_T:.28,PASS_SPEED:15,CALL_T:1.6,ASSIST_T:4},eu={1:[["YOU"],["BOT"]],2:[["YOU","JAYDEN"],["BLITZ","ROOK"]],3:[["YOU","JAYDEN","MO"],["BLITZ","ROOK","TANK"]]},Ls={FIRST_SPAWN:1.2,RESPAWN:2.2,FIRE_STREAK:2},Fi={DURATION:120,COUNTDOWN:2.4,RESET_DELAY:1.8,BUZZER_GRACE:3,STUCK_TIME:.9},te=[{name:"YOU",color:16726862,dark:10228774,css:"#ff3b4e",ring:16726862},{name:"BOT",color:3116287,dark:1064842,css:"#2f8cff",ring:3116287}],Bn={easy:{label:"EASY",think:.32,releaseSd:.22,stealRate:.12,stealCd:2,contestReact:.34,contestJump:.35,guardGap:1.9,patience:1.6,speed:.9,itemUse:.3,plan:{three:.25,mid:.35,drive:.4}},normal:{label:"NORMAL",think:.2,releaseSd:.15,stealRate:.22,stealCd:1.4,contestReact:.22,contestJump:.55,guardGap:1.5,patience:1.1,speed:.97,itemUse:.6,plan:{three:.3,mid:.35,drive:.35}},hard:{label:"HARD",think:.12,releaseSd:.09,stealRate:.35,stealCd:1,contestReact:.13,contestJump:.75,guardGap:1.2,patience:.8,speed:1,itemUse:.9,plan:{three:.35,mid:.3,drive:.35}}};var ja=class{constructor(){this.reset(0,3,0)}reset(t,e,n){this.x=t,this.y=e,this.z=n,this.px=t,this.py=e,this.pz=n,this.vx=0,this.vy=0,this.vz=0,this.spinX=0,this.spinZ=0,this.holder=null,this.shot=null,this.pass=null,this.lastPass=null,this.noPickup=new Map,this.invalidHoop=null,this.restTimer=0,this.onFloor=!1,this.frozen=!1,this.scoreLocked=!1}get speed(){return Math.hypot(this.vx,this.vy,this.vz)}step(t,e){let n=[],i=Ve.BALL_SUBSTEPS,s=t/i,a=we.R,o=Vt.HALF_L+Vt.WALL_PAD,l=Vt.HALF_W+Vt.WALL_PAD;this.onFloor=!1;for(let c=0;c<i;c++){let h={x:this.x,y:this.y,z:this.z};if(this.vy-=Ve.G_BALL*s,this.x+=this.vx*s,this.y+=this.vy*s,this.z+=this.vz*s,this.y<a){this.y=a,this.vy<0&&(this.vy<-1.2&&n.push({type:"bounce",speed:-this.vy}),this.vy=-this.vy*we.REST_FLOOR,this.vy<.6&&(this.vy=0)),this.onFloor=!0;let d=Math.pow(we.ROLL_FRICTION,1/i);this.vx*=d,this.vz*=d}Math.abs(this.x)>o-a&&(this.x=Math.sign(this.x)*(o-a),this.vx*Math.sign(this.x)>0&&(this.vx=-this.vx*we.REST_WALL,n.push({type:"wall"}))),Math.abs(this.z)>l-a&&(this.z=Math.sign(this.z)*(l-a),this.vz*Math.sign(this.z)>0&&(this.vz=-this.vz*we.REST_WALL,n.push({type:"wall"})));for(let d of e){let u=d.board,f=Math.max(u.x0,Math.min(this.x,u.x1)),g=Math.max(u.y0,Math.min(this.y,u.y1)),x=Math.max(u.z0,Math.min(this.z,u.z1)),m=this.x-f,p=this.y-g,_=this.z-x,b=m*m+p*p+_*_;if(b<a*a){let D=Math.sqrt(b),F,H,O;D<1e-6?(F=-d.dir,H=0,O=0,D=0):(F=m/D,H=p/D,O=_/D),this.x+=F*(a-D),this.y+=H*(a-D),this.z+=O*(a-D);let L=this.vx*F+this.vy*H+this.vz*O;if(L<0){let X=(1+we.REST_BOARD)*L;this.vx-=X*F,this.vy-=X*H,this.vz-=X*O,-L>1&&n.push({type:"board",hoop:d,speed:-L})}this.shot&&(this.shot.touchedBoard=!0)}let v=this.x-d.rim.x,I=this.z-d.rim.z,w=Math.hypot(v,I);w<1e-5&&(v=1,I=0,w=1);let A=d.rim.x+v/w*d.rimR,C=d.rim.z+I/w*d.rimR;m=this.x-A,p=this.y-d.rim.y,_=this.z-C,b=m*m+p*p+_*_;let M=a+zt.TUBE_R;if(b<M*M){let D=Math.sqrt(b)||1e-6,F=m/D,H=p/D,O=_/D;this.x+=F*(M-D),this.y+=H*(M-D),this.z+=O*(M-D);let L=this.vx*F+this.vy*H+this.vz*O;if(L<0){let X=(1+we.REST_RIM)*L;this.vx-=X*F,this.vy-=X*H,this.vz-=X*O,this.vx*=.95,this.vy*=.95,this.vz*=.95,-L>.8&&(n.push({type:"rim",hoop:d,speed:-L}),d.rimShake=Math.min(1,d.rimShake-L/8))}this.shot&&(this.shot.touchedRim=!0)}let y=d.rim.y;if((h.y-y)*(this.y-y)<=0&&h.y!==this.y){let D=(y-h.y)/(this.y-h.y),F=h.x+(this.x-h.x)*D,H=h.z+(this.z-h.z)*D;Math.hypot(F-d.rim.x,H-d.rim.z)<d.openR-a*.35&&n.push({type:"cross",hoop:d,dir:this.y<h.y?"down":"up"})}let P=d.rim.y-this.y;if(P>0&&P<zt.NET_DEPTH&&Math.hypot(this.x-d.rim.x,this.z-d.rim.z)<d.openR){let D=Math.pow(.85,1/i);this.vx*=D,this.vz*=D,this.vx+=(d.rim.x-this.x)*9*s,this.vz+=(d.rim.z-this.z)*9*s,this.vy<-3&&(this.vy*=Math.pow(.97,1/i)),d.netSway.vx+=this.vx*.05,d.netSway.vz+=this.vz*.05}}}return this.spinX+=this.vz/we.R*t,this.spinZ-=this.vx/we.R*t,n}};var ks=class{constructor(t,e){this.dir=t,this.attackTeam=e,this.boardX=t*zt.BOARD_X,this.board={x0:t>0?this.boardX:this.boardX-zt.BOARD_THICK,x1:t>0?this.boardX+zt.BOARD_THICK:this.boardX,y0:zt.BOARD_BOTTOM,y1:zt.BOARD_TOP,z0:-zt.BOARD_W/2,z1:zt.BOARD_W/2},this.rim={x:this.boardX-t*(zt.RIM_OFFSET+zt.RIM_R),y:zt.RIM_Y,z:0},this.rimR=zt.RIM_R,this.openR=zt.RIM_R-zt.TUBE_R,this.netSway={x:0,z:0,vx:0,vz:0},this.rimShake=0}stepVisual(t){let e=this.netSway;e.vx+=-e.x*180*t,e.vz+=-e.z*180*t;let n=Math.exp(-7*t);e.vx*=n,e.vz*=n,e.x+=e.vx*t,e.z+=e.vz*t,this.rimShake*=Math.exp(-10*t)}spot(t,e){return{x:this.rim.x-this.dir*Math.cos(e)*t,y:0,z:Math.sin(e)*t}}};function Qa(r=Date.now()>>>0){let t=r>>>0,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{next:e,range:(n,i)=>n+(i-n)*e(),chance:n=>e()<n,sign:()=>e()<.5?-1:1,normal:(n=0,i=1)=>{let s=Math.max(1e-9,e()),a=e();return n+i*Math.sqrt(-2*Math.log(s))*Math.cos(2*Math.PI*a)},pick:n=>{let i=Object.values(n).reduce((a,o)=>a+o,0),s=e()*i;for(let[a,o]of Object.entries(n))if((s-=o)<=0)return a;return Object.keys(n)[0]}}}var Ge=(r,t,e)=>r<t?t:r>e?e:r;var vr=r=>{for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;return r};var Wc=kt.JETPACK,lv=kt.ENERGY.SPEED;function Bi(){return{mx:0,mz:0,sprint:!1,jump:!1,dash:!1,move:0,pass:!1,passDir:null,call:!1,shootDown:!1,shootHeld:!1,steal:!1,useItem:!1,aim:null}}var Ds=class{constructor(t,e,n={}){this.id=t,this.team=e,this.isHuman=!!n.isHuman,this.name=n.name||`P${t}`,this.speedMul=n.speedMul||1,this.stats={pts:0,fga:0,fgm:0,tpa:0,tpm:0,stl:0,blk:0,reb:0,dunks:0,ast:0,tov:0,ctst:0,forced:0},this.look=n.look??t,this.item=null,this.streak=0,this.fire=0,this.place(0,0,e===0?0:Math.PI)}place(t,e,n){this.x=t,this.y=0,this.z=e,this.px=t,this.py=0,this.pz=e,this.vx=0,this.vy=0,this.vz=0,this.yaw=n,this.onGround=!0,this.state="free",this.stateT=0,this.meter=0,this.stamina=1,this.sprinting=!1,this.stealCd=0,this.reachT=0,this.swipeT=0,this.landT=0,this.shootLock=0,this.stunT=0,this.runPhase=0,this.dribble=0,this.jetT=0,this.magnetT=0,this.magnetTick=0,this.energyT=0,this.frozenT=0,this.hand=1,this.turnLog=[],this.crossT=0,this.dashT=0,this.dashCd=0,this.moveCd=0,this.callT=0,this.passT=0,this.moveT=0,this.moveSide=1,this.anklesT=0,this.slipT=0,this.swipe=null,this.strippedT=0,this.stance=!1,this.faceX=0,this.faceZ=0,this.chargeCd=0,this.stumbleT=0,this.blockT=0}get top(){return this.y+Zt.H}get fx(){return Math.cos(this.yaw)}get fz(){return Math.sin(this.yaw)}faceTowards(t,e){this.yaw=Math.atan2(e-this.z,t-this.x)}stepMovement(t,e){let n=this.state!=="free",i=n?0:e.mx,s=n?0:e.mz,a=Math.hypot(i,s);a>1&&(i/=a,s/=a);let o=e.sprint&&a>.1&&this.onGround;if(this.energyT>0?(this.sprinting=o,this.stamina=1):o&&(this.sprinting||this.stamina>Zt.STAMINA_MIN)&&this.stamina>0?(this.sprinting=!0,this.stamina=Math.max(0,this.stamina-Zt.STAMINA_DRAIN*t)):(this.sprinting=!1,this.stamina=Math.min(1,this.stamina+Zt.STAMINA_REGEN*t)),this.state==="grapple"||this.state==="dunk")this.x+=this.vx*t,this.y+=this.vy*t,this.z+=this.vz*t;else if(this.dashT>0)this.dashT-=t,this.vy-=Ve.G_PLAYER*t,this.x+=this.vx*t,this.y+=this.vy*t,this.z+=this.vz*t;else{let h=(this.sprinting?Zt.SPRINT:Zt.RUN)*this.speedMul;this.stance&&(h*=Ce.STANCE_SPEED),this.energyT>0&&(h*=lv),this.reachT>0&&(h*=Zt.REACH_SLOW),(this.state==="stunned"||this.state==="frozen")&&(h=0);let d=this.jetT>0,u=(this.onGround||d?Zt.ACCEL*(this.stance?Ce.STANCE_ACCEL:1):Zt.AIR_ACCEL)*t;if(a>.05){let f=i*h,g=s*h,x=f-this.vx,m=g-this.vz,p=Math.hypot(x,m);if(p>u&&(x*=u/p,m*=u/p),this.vx+=x,this.vz+=m,!n&&!this.stance){let _=Math.atan2(s,i);this.yaw+=vr(_-this.yaw)*Math.min(1,Zt.TURN_RATE*t)}}else if(this.onGround&&this.state!=="layup"){let f=Math.hypot(this.vx,this.vz),g=Zt.FRICTION*t;f<=g?(this.vx=0,this.vz=0):(this.vx-=this.vx/f*g,this.vz-=this.vz/f*g)}if(this.stance&&!n){let f=Math.atan2(this.faceZ-this.z,this.faceX-this.x);this.yaw+=vr(f-this.yaw)*Math.min(1,Zt.TURN_RATE*1.2*t)}e.jump&&this.onGround&&!n&&(this.vy=Zt.JUMP_V,this.onGround=!1),d&&this.state!=="frozen"&&(this.vy=Math.min(Wc.MAX_VY,this.vy+Wc.THRUST*t),this.y>Wc.CEILING&&(this.vy=Math.min(this.vy,Ve.G_PLAYER*t)),this.onGround=!1),this.vy-=Ve.G_PLAYER*t,this.x+=this.vx*t,this.y+=this.vy*t,this.z+=this.vz*t}this.y<=0?(!this.onGround&&this.vy<-4&&(this.landT=.12),this.y=0,this.vy=Math.max(0,this.vy),this.onGround=!0):this.onGround=!1;let l=Vt.HALF_L-Zt.R,c=Vt.HALF_W-Zt.R;Math.abs(this.x)>l&&(this.x=Math.sign(this.x)*l,this.vx=0),Math.abs(this.z)>c&&(this.z=Math.sign(this.z)*c,this.vz=0),this.stealCd=Math.max(0,this.stealCd-t),this.reachT=Math.max(0,this.reachT-t),this.swipeT=Math.max(0,this.swipeT-t),this.landT=Math.max(0,this.landT-t),this.shootLock=Math.max(0,this.shootLock-t),this.state==="stunned"&&(this.stunT-=t,this.stunT<=0&&(this.state="free")),this.state==="frozen"&&(this.frozenT-=t,this.frozenT<=0&&(this.state="free")),this.jetT=Math.max(0,this.jetT-t),this.magnetT=Math.max(0,this.magnetT-t),this.energyT=Math.max(0,this.energyT-t),this.crossT=Math.max(0,this.crossT-t),this.anklesT=Math.max(0,this.anklesT-t),this.slipT=Math.max(0,this.slipT-t),this.dashCd=Math.max(0,this.dashCd-t),this.moveCd=Math.max(0,this.moveCd-t),this.callT=Math.max(0,this.callT-t),this.passT=Math.max(0,this.passT-t),this.moveT=Math.max(0,this.moveT-t),this.strippedT=Math.max(0,this.strippedT-t),this.chargeCd=Math.max(0,this.chargeCd-t),this.stumbleT=Math.max(0,this.stumbleT-t),this.blockT=Math.max(0,this.blockT-t),this.onGround&&(this.runPhase+=Math.hypot(this.vx,this.vz)*t*1.6),this.stamina=Ge(this.stamina,0,1)}};function nu(r,t,e){let n=Ve.G_BALL,i=Math.max(r.y,t.y)+e,s=Math.sqrt(2*n*Math.max(.01,i-r.y)),a=s*s-2*n*(t.y-r.y),o=(s+Math.sqrt(Math.max(0,a)))/n,l=Math.max(.05,o);return{vx:(t.x-r.x)/l,vy:s,vz:(t.z-r.z)/l,t:l}}function iu(r,t){return t==="layup"?.55+r*.12:.8+r*.3}function su(r){let t=Math.max(0,Math.abs(r-Kt.SWEET_CENTER)-Kt.SWEET_HALF);return Ge(1-t*Kt.FALLOFF,0,1)}function ru(r,t){return r>=.97?"PERFECT":r>=.78?"GOOD":t<Kt.SWEET_CENTER?"EARLY":"LATE"}function au(r,t,e){return e==="layup"?{base:.006,timing:(1-r)*.08,contest:t*.15,side:.01+t*.03}:{base:.005,timing:(1-r)*.12,contest:t*.03,side:.004+(1-r)*.02+t*.02}}var Si={grapple:"GRAPPLING HOOK",jetpack:"JETPACK",punch:"ROCKET PUNCH",freeze:"FREEZE RAY",banana:"BANANA PEEL",magnet:"BALL MAGNET",energy:"ENERGY DRINK"},cv=Object.keys(kt.POOL);function ou(r,t=null){let e=kt.POOL;if(t&&t.length){e={};for(let n of t)kt.POOL[n]&&(e[n]=kt.POOL[n]);Object.keys(e).length||(e=kt.POOL)}return r.pick(e)}function lu(r,t,e){let n=t.item;if(!n)return!1;switch(n){case"grapple":return r.fireGrapple(t,e);case"jetpack":return t.item=null,t.jetT=kt.JETPACK.T,t.onGround&&(t.vy=4,t.onGround=!1),r.emit({type:"useItem",item:n,player:t}),!0;case"punch":return hv(r,t,e);case"freeze":return dv(r,t,e);case"banana":return t.item=null,r.traps.push({kind:"banana",x:t.x-t.fx*.9,z:t.z-t.fz*.9,owner:t,life:kt.BANANA.LIFE,armT:kt.BANANA.ARM_T,id:r.nextId++}),r.emit({type:"useItem",item:n,player:t}),!0;case"magnet":return t.item=null,t.magnetT=kt.MAGNET.T,t.magnetTick=0,r.emit({type:"useItem",item:n,player:t}),!0;case"energy":return t.item=null,t.energyT=kt.ENERGY.T,t.stamina=1,r.emit({type:"useItem",item:n,player:t}),!0}return!1}function cu(r,t,e,n){let i=null,s=1/0,a=e?e.x-t.x:t.fx,o=e?e.z-t.z:t.fz,l=Math.hypot(a,o)||1;for(let c of r.opponents(t)){let h=c.x-t.x,d=c.z-t.z,u=Math.hypot(h,d);if(u>n)continue;let f=(h*a+d*o)/((u||1)*l);if(f<.35)continue;let g=u*(2-f);g<s&&(s=g,i=c)}return i?t.faceTowards(i.x,i.z):e&&t.faceTowards(e.x,e.z),i}function hv(r,t,e){if(t.state!=="free")return!1;let n=kt.PUNCH;return t.item=null,cu(r,t,e,n.ASSIST),t.state="punch",t.stateT=0,t.punchDone=!1,r.emit({type:"useItem",item:"punch",player:t}),!0}function dv(r,t,e){let n=kt.FREEZE;t.item=null;let i=cu(r,t,e,n.RANGE),s=t.x+t.fx*.6,a=t.y+1.4,o=t.z+t.fz*.6,l,c,h;i?(l=i.x,c=i.y+1.1,h=i.z):e?(l=e.x,c=Math.max(.6,e.y),h=e.z):(l=s+t.fx*10,c=a,h=o+t.fz*10);let d=l-s,u=c-a,f=h-o,g=Math.hypot(d,u,f)||1;return r.projectiles.push({kind:"freeze",id:r.nextId++,owner:t,target:i,x:s,y:a,z:o,px:s,py:a,pz:o,vx:d/g*n.SPEED,vy:u/g*n.SPEED,vz:f/g*n.SPEED,life:n.RANGE/n.SPEED}),r.emit({type:"useItem",item:"freeze",player:t}),!0}function hu(r,t){let e=r.ball;for(let n of r.players){if(n.state==="punch"){let i=kt.PUNCH;if(n.stateT+=t,!n.punchDone&&n.stateT>=i.WINDUP){n.punchDone=!0,n.onGround&&(n.vx=n.fx*i.LUNGE,n.vz=n.fz*i.LUNGE);let s=null;for(let a of r.opponents(n)){let o=a.x-n.x,l=a.z-n.z,c=Math.hypot(o,l);c>i.RANGE||Math.abs(a.y-n.y)>1.6||(o*n.fx+l*n.fz)/(c||1)<i.CONE||(s=a,r.knock(a,n.fx,n.fz,i.POWER,i.STUN,n))}r.emit({type:"punch",player:n,victim:s})}n.stateT>=i.WINDUP+i.RECOVER&&(n.state="free")}if(n.magnetT>0){let i=kt.MAGNET;if(!e.holder&&!e.scoreLocked&&!e.frozen){let s=n.x-e.x,a=n.y+1.1-e.y,o=n.z-e.z,l=Math.hypot(s,a,o);if(l<i.RANGE&&l>.3){let c=i.PULL*t/l;e.vx+=s*c,e.vy+=a*c+12*t*.6,e.vz+=o*c;let h=Math.exp(-2.5*t);e.vx*=h,e.vz*=h,e.shot&&e.shot.team!==n.team&&(e.shot.blocked=!0)}}else if(e.holder&&e.holder.team!==n.team&&(n.magnetTick-=t,n.magnetTick<=0)){n.magnetTick=i.YANK_EVERY;let s=e.holder;Math.hypot(s.x-n.x,s.z-n.z)<i.YANK_R&&s.state!=="dunk"&&s.state!=="shooting"&&!r.ballShielded(n.x,n.z,s)&&(r.popLoose(s,n,"magnet"),n.stats.stl++,n.stats.forced++,s.stats.tov++,s.strippedT=.7,r.emit({type:"steal",player:n,victim:s,magnet:!0}))}}}for(let n of r.projectiles){let i=kt.FREEZE;if(n.px=n.x,n.py=n.y,n.pz=n.z,n.target&&n.target.state!=="frozen"){let s=n.target.x-n.x,a=n.target.y+1.1-n.y,o=n.target.z-n.z,l=Math.hypot(s,a,o)||1,c=Math.hypot(n.vx,n.vy,n.vz),h=Math.min(1,i.HOMING*t);n.vx+=(s/l*c-n.vx)*h,n.vy+=(a/l*c-n.vy)*h,n.vz+=(o/l*c-n.vz)*h}n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,n.life-=t,n.y<.1&&(n.life=0);for(let s of r.players)if(!(s.team===n.owner.team||s.state==="frozen")&&Math.hypot(s.x-n.x,s.z-n.z)<i.HIT_R&&n.y>s.y-.2&&n.y<s.top+.3){uv(r,s,n.owner),n.life=0;break}n.life<=0&&r.emit({type:"projectileEnd",id:n.id,x:n.x,y:n.y,z:n.z})}r.projectiles=r.projectiles.filter(n=>n.life>0);for(let n of r.traps)if(n.life-=t,n.armT-=t,!(n.armT>0)){for(let i of r.players)if(!(i.team===n.owner.team||!i.onGround||i.state==="dunk"||i.state==="grapple")&&Math.hypot(i.x-n.x,i.z-n.z)<kt.BANANA.HIT_R+Zt.R*.5){let s=Math.hypot(i.vx,i.vz),a=s>.5?i.vx/s:i.fx,o=s>.5?i.vz/s:i.fz;r.knock(i,a,o,3.5+s*.4,kt.BANANA.STUN,n.owner),i.slipT=.8,n.life=0,r.emit({type:"slip",player:i,owner:n.owner,x:n.x,z:n.z,id:n.id});break}}r.traps=r.traps.filter(n=>n.life<=0?(r.emit({type:"trapGone",id:n.id}),!1):!0)}function uv(r,t,e){t.state!=="dunk"&&(t.state==="grapple"&&(t.state="free"),r.ball.holder===t&&r.popLoose(t,{x:t.x-t.fx,z:t.z-t.fz},"freeze"),t.state="frozen",t.frozenT=kt.FREEZE.T,t.vx=0,t.vz=0,t.jetT=0,t.meter=0,r.emit({type:"frozen",player:t,by:e}))}var yr=class{constructor(t={}){this.difficulty=t.difficulty||"normal",this.duration=t.duration??Fi.DURATION,this.rng=Qa(t.seed??Math.random()*2**32>>>0),this.hoops=[new ks(1,0),new ks(-1,1)];let e=Bn[this.difficulty]||Bn.normal;this.practice=!!t.practice,this.chaos=!!t.chaos,this.teamSize=this.practice?1:[1,2,3].includes(t.teamSize)?t.teamSize:1;let n=this.practice?[["YOU"],[]]:eu[this.teamSize];if(this.itemPools=t.itemPools||{},this.boxRespawn=this.chaos?Ls.RESPAWN:kt.RESPAWN,this.fireStreak=this.chaos?Ls.FIRE_STREAK:Ja.STREAK,this.players=t.players||[],!t.players){let i=0;for(let s of[0,1])n[s].forEach((a,o)=>{this.players.push(new Ds(i,s,{isHuman:s===0&&o===0,name:a,speedMul:s===1?e.speed:1,look:(t.lookSeed??0)+i*7+(s?3:0)})),i++})}this.ball=new ja,this.box={active:!1,x:0,z:0,t:this.chaos?Ls.FIRST_SPAWN:kt.FIRST_SPAWN,spin:0},this.itemsEnabled=t.items??!0,this.projectiles=[],this.traps=[],this.nextId=1,this.score=[0,0],this.clock=this.duration,this.time=0,this.overtime=!1,this.winner=null,this.stops=[0,0],this.possTeam=null,this.events=[],this.setupTipoff()}attackHoop(t){return this.hoops.find(e=>e.attackTeam===t)}defendHoop(t){return this.hoops.find(e=>e.attackTeam!==t)}teamPlayers(t){return this.players.filter(e=>e.team===t)}opponents(t){return this.players.filter(e=>e.team!==t.team)}emit(t){this.events.push(t)}drainEvents(){let t=this.events;return this.events=[],t}get controlsLive(){return this.state==="live"}get movementAllowed(){return["live","scored","buzzer","final"].includes(this.state)}setupTipoff(){this.possTeam=null,this.players.forEach(t=>{let e=this.teamPlayers(t.team).indexOf(t),n=t.team===0?-1:1,i=[[2.4,0],[5.2,-3.8],[5.2,3.8]],[s,a]=i[e]||[6,0];t.place(n*s,a,t.team===0?0:Math.PI)}),this.ball.reset(0,2.6,0),this.ball.frozen=!0,this.state="countdown",this.stateT=Fi.COUNTDOWN}update(t,e){this.time+=t;let n=this.ball;for(let i of this.players)i.px=i.x,i.py=i.y,i.pz=i.z;n.px=n.x,n.py=n.y,n.pz=n.z;for(let i of this.hoops)i.stepVisual(t);if(this.box.spin+=t,this.state!=="ended"){if(this.state==="countdown"){this.stateT-=t,this.stateT<=0&&(this.state="live",n.frozen=!1,n.vy=7.6,n.vx=this.rng.range(-.3,.3),n.vz=this.rng.range(-.3,.3),this.emit({type:"tipoff"}));return}for(let i=0;i<this.players.length;i++){let s=this.players[i],a=this.movementAllowed?e[i]||Bi():Bi();this.controlsLive&&this.handleActions(s,a,t),this.updateSpecial(s,t),this.updateStance(s,a),s.stepMovement(t,a),s.swipe&&this.updateSwipe(s,t)}if(this.separatePlayers(),hu(this,t),this.itemsEnabled&&this.state==="live"&&this.updateItemBox(t),n.holder)this.positionHeldBall(n.holder,t);else if(!n.frozen){for(let i of n.step(t,this.hoops))this.handleBallEvent(i);this.checkBlocks(),this.checkPickups(),this.checkStuck(t)}if(Number.isFinite(n.x+n.y+n.z)||(n.reset(0,3,0),this.emit({type:"nudge"})),n.invalidHoop){let i=n.invalidHoop;(n.y<i.rim.y-.8||Math.hypot(n.x-i.rim.x,n.z-i.rim.z)>1)&&(n.invalidHoop=null)}switch(this.state){case"live":!this.overtime&&!this.practice&&(this.clock-=t,this.clock<=0&&this.onClockExpired());break;case"scored":this.stateT-=t,this.stateT<=0&&this.resetAfterScore();break;case"buzzer":this.stateT-=t,(n.onFloor||n.holder||this.stateT<=0||n.shot&&n.shot.blocked)&&this.endRegulation();break;case"final":this.stateT-=t,this.stateT<=0&&this.finish();break}}}handleActions(t,e,n){let s=this.ball.holder===t;if(t.state==="shooting"){if(t.stateT+=n,t.meter=t.stateT/Kt.METER_FILL,!e.shootHeld||t.meter>=Kt.METER_MAX){let a=su(t.meter);this.releaseShot(t,a,"jump",ru(a,t.meter),t.meter)}return}if(t.state==="layup"){t.stateT+=n,t.stateT>=.26&&this.releaseShot(t,t.isHuman?.94:t.layupQ??.9,"layup","LAYUP");return}if(t.state==="free"&&(e.useItem&&t.item&&lu(this,t,e.aim),t.state==="free"&&(e.call&&this.callForBall(t),e.dash&&this.dash(t,e),e.move&&s&&this.dribbleMove(t,e.move),!(e.pass&&s&&this.pass(t,e.passDir))))){if(e.shootDown&&t.shootLock<=0){if(s){let a=this.attackHoop(t.team),o=Math.hypot(a.rim.x-t.x,a.rim.z-t.z);!t.onGround&&t.top+Zt.REACH>a.rim.y-.5&&o<Kt.DUNK_RANGE+1||o<Kt.DUNK_RANGE&&(this.contestOn(t)<.5||t.fire>0)?this.startDunk(t,a,!1):o<Kt.LAYUP_RANGE?this.startLayup(t,a):this.startJumpShot(t);return}this.attemptSteal(t)}e.steal&&this.attemptSteal(t)}}updateSpecial(t,e){if(t.state==="grapple"){let n=t.grapple;n.t+=e,n.ref&&n.kind!=="player"&&(n.target={x:n.ref.x,y:n.ref.y||0,z:n.ref.z});let i=t.x,s=t.y+1.1,a=t.z,o=n.target.x-i,l=n.target.y-s,c=n.target.z-a,h=Math.hypot(o,l,c)||1e-6,d=kt.GRAPPLE.SPEED;if(t.vx=o/h*d,t.vy=l/h*d,t.vz=c/h*d,t.yaw=Math.atan2(c,o),h<kt.GRAPPLE.ARRIVE||n.t>kt.GRAPPLE.MAX_T){let u=h<kt.GRAPPLE.ARRIVE+.3;n.kind==="player"&&n.ref&&(u=u&&Math.hypot(n.ref.x-t.x,n.ref.z-t.z)<kt.GRAPPLE.ARRIVE+.7),n.kind==="player"&&!u&&this.emit({type:"dodge",player:n.ref,by:t}),this.endGrapple(t,u)}return}if(t.state==="dunk"){let n=t.dunk;n.t+=e;let i=Math.min(1,n.t/n.T),s=1-(1-i)*(1-i),a=n.sx+(n.tx-n.sx)*s,o=n.sz+(n.tz-n.sz)*s,l=n.sy+(n.ty-n.sy)*s+Math.sin(Math.PI*i)*n.lift;t.vx=(a-t.x)/e,t.vy=(l-t.y)/e,t.vz=(o-t.z)/e,i>=1&&!n.slammed&&this.slam(t),n.slammed&&(t.vx=0,t.vz=0,t.vy=0,n.hang-=e,n.hang<=0&&(t.state="free",t.vy=-1,t.onGround=!1))}}startJumpShot(t){let e=this.attackHoop(t.team);t.state="shooting",t.stateT=0,t.meter=0,t.faceTowards(e.rim.x,e.rim.z),t.onGround&&(t.vy=Zt.SHOT_JUMP_V,t.onGround=!1),t.vx*=.3,t.vz*=.3,this.emit({type:"gather",player:t})}startLayup(t,e){t.state="layup",t.stateT=0,t.faceTowards(e.rim.x,e.rim.z),t.onGround&&(t.vy=Zt.LAYUP_JUMP_V,t.onGround=!1);let n=e.rim.x-t.x,i=e.rim.z-t.z,s=Math.hypot(n,i),a=Math.min(4.5,s*2);t.vx=n/s*a,t.vz=i/s*a,this.emit({type:"gather",player:t,layup:!0})}startDunk(t,e,n){let i=e.rim.x-t.x,s=e.rim.z-t.z,a=Math.hypot(i,s)||1,o=e.rim.x-i/a*.42,l=e.rim.z-s/a*.42,c=e.rim.y+.3-Zt.H-Zt.REACH;t.state="dunk",t.dunk={sx:t.x,sy:t.y,sz:t.z,tx:o,ty:Math.max(c,.2),tz:l,t:0,T:n?.16:.42,lift:n?0:.5,hang:.28,slammed:!1,hoop:e,fromGrapple:n},t.faceTowards(e.rim.x,e.rim.z),this.emit({type:"gather",player:t,dunk:!0})}slam(t){let e=t.dunk,n=e.hoop,i=this.ball;if(e.slammed=!0,i.holder===t){for(let s of t.fire>0?[]:this.opponents(t)){if(s.state==="stunned"||s.state==="frozen")continue;let a=Math.hypot(s.x-n.rim.x,s.z-n.rim.z)<1.15,o=!s.onGround&&s.top+Ce.HANDS_UP>n.rim.y+.1;if(a&&o){i.holder=null,i.x=n.rim.x-n.dir*.5,i.y=n.rim.y+.4,i.z=n.rim.z,i.vx=-n.dir*6,i.vy=2,i.vz=Ge((n.rim.z-s.z)*3,-2.5,2.5),s.stats.forced++,s.blockT=.4,i.shot={shooter:t,team:t.team,hoop:n,kind:"dunk",blocked:!0,releaseT:this.time,resolved:!0},s.stats.blk++,t.stats.fga++,this.emit({type:"block",player:s,victim:t,dunk:!0});return}}i.holder=null,i.x=n.rim.x,i.y=n.rim.y+.25,i.z=n.rim.z,i.px=i.x,i.py=i.y,i.pz=i.z,i.vx=0,i.vy=-7,i.vz=0,i.shot={shooter:t,team:t.team,hoop:n,kind:"dunk",isThree:!1,label:"DUNK",releaseT:this.time,touchedRim:!0,touchedBoard:!1,blocked:!1,resolved:!1,grapple:e.fromGrapple},i.noPickup.set(t,this.time+.6),t.stats.fga++,n.rimShake=1;for(let s of this.opponents(t)){let a=s.x-n.rim.x,o=s.z-n.rim.z,l=Math.hypot(a,o)||1;l<2.6&&this.knock(s,a/l,o/l,5,.35)}this.emit({type:"dunk",player:t,hoop:n,grapple:e.fromGrapple})}}choosePassTarget(t,e){let n=this.teamPlayers(t.team).filter(o=>o!==t&&o.state!=="frozen");if(!n.length)return null;let i=e&&Math.hypot(e.x,e.z)||1,s=null,a=-1/0;for(let o of n){let l=o.x-t.x,c=o.z-t.z,h=Math.hypot(l,c)||1,d=-h*.08;e&&(d+=(l*e.x+c*e.z)/(h*i)*2.2),o.callT>0&&(d+=1.5);for(let u of this.opponents(t)){let f=u.x-t.x,g=u.z-t.z,x=Math.max(0,Math.min(1,(f*l+g*c)/(h*h))),m=t.x+l*x-u.x,p=t.z+c*x-u.z;Math.hypot(m,p)<1&&(d-=1.2)}d>a&&(a=d,s=o)}return s}pass(t,e,n=null){let i=n||this.choosePassTarget(t,e);if(!i)return!1;let s=this.ball,a={x:t.x+t.fx*.45,y:t.y+1.25,z:t.z+t.fz*.45},o=Math.hypot(i.x-a.x,i.z-a.z),l=Math.max(Te.PASS_MIN_T,Math.min(1,o/Te.PASS_SPEED)),c=i.x+i.vx*l*.8,h=i.z+i.vz*l*.8,d=i.y+1.25,u=Ve.G_BALL;return s.holder=null,s.x=a.x,s.y=a.y,s.z=a.z,s.px=a.x,s.py=a.y,s.pz=a.z,s.vx=(c-a.x)/l,s.vz=(h-a.z)/l,s.vy=(d-a.y+.5*u*l*l)/l,s.shot=null,s.pass={from:t,to:i,team:t.team,t:this.time,target:{x:c,z:h},T:l},s.noPickup.set(t,this.time+.35),t.faceTowards(i.x,i.z),t.passT=.25,this.emit({type:"pass",player:t,to:i}),!0}callForBall(t){let e=this.ball.holder;!e||e.team!==t.team||e===t||(t.callT=Te.CALL_T,this.emit({type:"call",player:t}))}dash(t,e){if(t.dashCd>0||!t.onGround)return;let n=e.mx,i=e.mz,s=Math.hypot(n,i);s<.2&&(n=t.fx,i=t.fz,s=1);let a=this.ball.holder===t?Te.DASH_BALL_V:Te.DASH_V;t.vx=n/s*a,t.vz=i/s*a,t.dashT=Te.DASH_T,t.dashCd=Te.DASH_CD,t.yaw=Math.atan2(i,n),this.emit({type:"dash",player:t})}dribbleMove(t,e){if(t.moveCd>0||!t.onGround)return;let n=-t.fz*e,i=t.fx*e;t.vx=n*Te.DRIBBLE_V+t.fx*2.5,t.vz=i*Te.DRIBBLE_V+t.fz*2.5,t.dashT=Te.DRIBBLE_T,t.moveCd=Te.DRIBBLE_CD,t.hand=e,t.crossT=.3,t.moveSide=e,t.moveT=.35,this.emit({type:"dribbleMove",player:t,side:e});for(let s of this.opponents(t)){let a=s.x-t.x,o=s.z-t.z,l=Math.hypot(a,o);if(l>Te.SHAKE_R||s.state!=="free"||!s.onGround||(a*t.fx+o*t.fz)/(l||1)<.3)continue;let c=Te.SHAKE_CHANCE+(s.reachT>0?Te.SHAKE_REACH_BONUS:0);this.rng.chance(c)&&(this.knock(s,s.fx*.2-n*.6,s.fz*.2-i*.6,1.5,Ps.ANKLE_STUN,t),s.anklesT=1,this.emit({type:"ankles",player:t,victim:s}))}}contestOn(t){let e=this.attackHoop(t.team),n=e.rim.x-t.x,i=e.rim.z-t.z,s=Math.hypot(n,i)||1,a=0;this.contester=null;for(let o of this.opponents(t)){let l=o.x-t.x,c=o.z-t.z,h=Math.hypot(l,c);if(h>2.4)continue;let d=1-h/2.4,u=(l*n+c*i)/((h||1)*s);d*=u>.4?1:.45,!o.onGround&&o.top>t.top-.4&&(d*=1.25),o.state==="stunned"&&(d=0),d=Ge(d,0,1),d>a&&(a=d,this.contester=o)}return a}releaseShot(t,e,n,i,s=null){let a=this.ball,o=this.attackHoop(t.team),l={x:t.x+t.fx*.22,y:t.top+.2,z:t.z+t.fz*.22},c=Math.hypot(o.rim.x-l.x,o.rim.z-l.z),h={x:-o.dir,z:0};(l.x-o.rim.x)*o.dir>-(o.rimR+.3)&&Math.abs(l.z-o.rim.z)<o.rimR+.3&&(l.x=o.rim.x+h.x*(o.rimR+.35),l.y>o.rim.y-.4&&(l.y=Math.min(l.y,o.rim.y-.4)));let d=this.contestOn(t);d>=Ce.CONTEST_STAT&&this.contester&&this.contester.stats.ctst++;let u=au(e,d,n);if(t.fire>0)for(let w of Object.keys(u))u[w]*=Ja.SPREAD_MUL;let f=()=>this.rng.range(.55,1),g=s==null?this.rng.sign():s<Kt.SWEET_CENTER?-1:1,x=1+this.rng.sign()*u.base*f()+g*u.timing*f()+this.rng.sign()*u.contest*f();x=Ge(x,.88,1.12);let m=this.rng.sign()*u.side*f(),p={x:o.rim.x,y:o.rim.y-.02,z:o.rim.z};if(n==="layup"){let w=t.fire>0?.97:Ge(.97-(1-e)*.8-d*.6,.12,.97);if(x=1,m=0,!this.rng.chance(w)){let A=o.rim.x-l.x,C=o.rim.z-l.z,M=Math.hypot(A,C)||1,y=this.rng.range(.34,.42);p.x-=A/M*y,p.z-=C/M*y,p.z+=this.rng.range(-.08,.08)}}let _=nu(l,p,iu(Math.hypot(p.x-l.x,p.z-l.z),n)),b=_.vx,v=_.vz;if(m){let w=Math.cos(m),A=Math.sin(m);[b,v]=[b*w-v*A,b*A+v*w]}a.holder=null,a.x=l.x,a.y=l.y,a.z=l.z,a.px=l.x,a.py=l.y,a.pz=l.z,a.vx=b*x,a.vy=_.vy*x,a.vz=v*x;let I=n==="jump"&&Math.hypot(o.rim.x-t.x,o.rim.z-t.z)>Vt.THREE;a.shot={shooter:t,team:t.team,hoop:o,kind:n,isThree:I,label:i,quality:e,contest:d,releaseT:this.time,touchedRim:!1,touchedBoard:!1,blocked:!1,resolved:!1},a.noPickup.set(t,this.time+Kt.NO_PICKUP_SHOOTER),t.stats.fga++,I&&t.stats.tpa++,t.state="free",t.meter=0,t.shootLock=.25,this.emit({type:"shot",player:t,kind:n,label:i,q:e,isThree:I,contest:d,dist:c})}updateStance(t,e){let n=this.ball.holder;t.stance=!1,!(!n||n.team===t.team||t.state!=="free"||!t.onGround||e.sprint||t.reachT>0)&&(Math.hypot(n.x-t.x,n.z-t.z)>Ce.STANCE_R||(t.stance=!0,t.faceX=n.x,t.faceZ=n.z))}ballShielded(t,e,n){let i=this.ball,s=i.x-t,a=i.z-e,o=s*s+a*a||1,l=n.x-t,c=n.z-e,h=(l*s+c*a)/o;if(h<=.05||h>=.95)return!1;let d=t+s*h-n.x,u=e+a*h-n.z;return Math.hypot(d,u)<Ce.BODY_SHIELD_R&&Math.hypot(i.x-n.x,i.z-n.z)<.75}attemptSteal(t){if(t.stealCd>0||t.state!=="free"||t.swipe)return;t.stealCd=Ce.STEAL_CD;let e=this.ball.holder,n=1;if(e&&e.team!==t.team){let i=-t.fz,s=t.fx;n=(this.ball.x-t.x)*i+(this.ball.z-t.z)*s>=0?1:-1,Math.hypot(e.x-t.x,e.z-t.z)<3&&t.faceTowards(this.ball.x,this.ball.z)}t.swipe={t:0,side:n,resolved:!1,hit:!1,kind:null,tx:0,ty:1,tz:0},t.swipeT=Ce.SWIPE_WINDUP+Ce.SWIPE_ACTIVE+Ce.SWIPE_RECOVER,this.emit({type:"swipeStart",player:t,side:n})}stealRead(t,e=!0){let n=this.ball,i=n.holder;if(!i||i.team===t.team)return{ok:!1,why:"noball"};if(i.state==="dunk"||i.state==="grapple")return{ok:!1,why:"air"};if(i.state==="shooting"&&i.stateT>.12)return{ok:!1,why:"overhead"};let s=-t.fz,a=t.fx,o=(n.x-t.x)*s+(n.z-t.z)*a>=0?1:-1,l=t.x+s*o*.2,c=t.z+a*o*.2,h=n.x-l,d=n.z-c,u=Math.hypot(h,d),f=Ce.ARM_REACH+Ce.HAND_R+(e&&t.onGround?Ce.LUNGE_REACH:0);if(n.y<t.y+.04||n.y>t.y+2.3)return{ok:!1,why:"height",d:u};if(u>f)return{ok:!1,why:"short",d:u};if((h*t.fx+d*t.fz)/(u||1)<.1)return{ok:!1,why:"angle",d:u};let g=i.x-l,x=i.z-c,m=Math.max(0,Math.min(1,(g*h+x*d)/(u*u||1))),p=l+h*m-i.x,_=c+d*m-i.z,b=Math.hypot(n.x-i.x,n.z-i.z);return m>.05&&m<.95&&Math.hypot(p,_)<Ce.BODY_SHIELD_R&&b<.75?{ok:!1,why:"shielded",d:u}:{ok:!0,why:"clean",d:u,side:o}}updateSwipe(t,e){let n=t.swipe;n.t+=e;let i=Ce;if(!n.resolved&&n.t>=i.SWIPE_WINDUP){n.resolved=!0;let s=this.ball,a=s.holder,o=this.stealRead(t,!0);if(t.onGround&&t.state==="free"){let l=s.x-t.x,c=s.z-t.z,h=Math.hypot(l,c)||1;t.vx+=l/h*i.LUNGE_V*.6+t.fx*i.LUNGE_V*.4,t.vz+=c/h*i.LUNGE_V*.6+t.fz*i.LUNGE_V*.4}if(n.tx=s.x,n.ty=s.y,n.tz=s.z,o.ok&&a&&t.state==="free"){n.hit=!0;let l=-t.fz,c=t.fx,h=-l*n.side*.75+t.fx*.35+(s.x-t.x)*.15,d=-c*n.side*.75+t.fz*.35+(s.z-t.z)*.15,u=Math.hypot(h,d)||1,f=o.d<i.GRAB_DIST+.35&&a.state==="free"&&s.y>.45&&s.y<1.5;a.strippedT=.7,a.stats.tov++,t.stats.stl++,t.stats.forced++,(a.state==="shooting"||a.state==="layup")&&(a.state="free",a.meter=0),f?(n.kind="grab",this.giveBall(t,{steal:!0})):(n.kind=s.y<.6?"poke":"strip",s.holder=null,s.vx=h/u*i.STRIP_SPEED+t.vx*.3,s.vz=d/u*i.STRIP_SPEED+t.vz*.3,s.vy=n.kind==="poke"?2.2:2.9,s.shot=null,s.noPickup.set(a,this.time+.5),this.possLost=a.team),this.emit({type:"steal",player:t,victim:a,kind:n.kind})}else a&&a.team!==t.team?(t.reachT=o.why==="short"&&o.d>2.2?.25:i.MISS_RECOVER,this.emit({type:"reach",player:t,victim:a,why:o.why})):(t.reachT=.2,this.emit({type:"swipe",player:t})),n.tx=t.x+t.fx*1.2,n.tz=t.z+t.fz*1.2,n.ty=Math.max(.6,Math.min(1.4,s.y))}(n.t>=i.SWIPE_WINDUP+i.SWIPE_ACTIVE+i.SWIPE_RECOVER||t.state!=="free"&&n.resolved)&&(t.swipe=null)}popLoose(t,e,n){let i=this.ball;if(i.holder!==t)return;let s=e.x-t.x,a=e.z-t.z,o=Math.hypot(s,a)||1;i.holder=null,i.vx=s/o*this.rng.range(2,3.2),i.vz=a/o*this.rng.range(2,3.2),i.vy=this.rng.range(3.2,4.4),i.shot=null,i.noPickup.set(t,this.time+.45),this.possLost=t.team,(t.state==="shooting"||t.state==="layup")&&(t.state="free",t.meter=0)}knock(t,e,n,i,s,a=null){t.vx=e*i,t.vz=n*i,t.vy=Math.max(t.vy,i*.45),t.onGround=!1,!(t.state==="grapple"||t.state==="dunk")&&(this.ball.holder===t&&(this.popLoose(t,{x:t.x+e,z:t.z+n},"knock"),t.stats.tov++,a&&a.stats.forced++),t.state="stunned",t.stunT=s,t.meter=0)}updateItemBox(t){let e=this.box;if(!e.active){e.t-=t,e.t<=0&&(e.active=!0,e.x=this.rng.range(-8.5,8.5),e.z=this.rng.range(-5.5,5.5),this.emit({type:"boxSpawn",x:e.x,z:e.z}));return}for(let n of this.players)if(!(n.item||n.state==="dunk")&&Math.hypot(n.x-e.x,n.z-e.z)<kt.PICKUP_R&&n.y<1.6){n.item=this.forceItem||ou(this.rng,this.itemPools[n.id]),e.active=!1,e.t=this.boxRespawn,this.emit({type:"item",player:n,item:n.item,x:e.x,z:e.z});return}}useItem(t,e){t.item==="grapple"&&this.fireGrapple(t,e)}fireGrapple(t,e){if(!e)return!1;let n=kt.GRAPPLE,i=this.ball,s=[];for(let f of this.hoops)s.push({kind:"rim",hoop:f,pos:f.rim});for(let f of this.opponents(t))s.push({kind:"player",ref:f,pos:{x:f.x,y:f.y+1.1,z:f.z}});i.holder||s.push({kind:"ball",ref:i,pos:i});let a=null,o=2.2;for(let f of s){let g=Math.hypot(f.pos.x-e.x,f.pos.y-e.y,f.pos.z-e.z);g<o&&(o=g,a=f)}let l=a?{x:a.pos.x,y:a.pos.y,z:a.pos.z}:{x:e.x,y:Math.max(.4,e.y),z:e.z};if(a&&a.kind==="rim"){let f=a.hoop.rim.x-t.x,g=a.hoop.rim.z-t.z,x=Math.hypot(f,g)||1;l={x:a.hoop.rim.x-f/x*.45,y:a.hoop.rim.y-.6,z:a.hoop.rim.z-g/x*.45}}let c=l.x-t.x,h=l.y-(t.y+1.1),d=l.z-t.z,u=Math.hypot(c,h,d);if(u<1.5)return!1;if(u>n.RANGE){let f=n.RANGE/u;l={x:t.x+c*f,y:t.y+1.1+h*f,z:t.z+d*f}}return t.item=null,(t.state==="shooting"||t.state==="layup")&&(t.meter=0),t.state="grapple",t.onGround=!1,t.grapple={kind:a?a.kind:"point",hoop:a?.hoop,ref:a?.ref??null,target:l,t:0},this.emit({type:"grapple",player:t,kind:t.grapple.kind,target:l}),!0}endGrapple(t,e){let n=t.grapple,i=this.ball;if(t.state="free",t.vx*=.35,t.vy=Math.max(1.5,t.vy*.2),t.vz*=.35,!!e){if(n.kind==="rim"&&i.holder===t&&n.hoop===this.attackHoop(t.team)){this.startDunk(t,n.hoop,!0);return}if(n.kind==="player"){let s=n.ref,a=s.x-t.x,o=s.z-t.z,l=Math.hypot(a,o)||1;i.holder===s&&(this.popLoose(s,t,"grapple"),s.stats.tov++,t.stats.stl++,t.stats.forced++,s.strippedT=.7,this.emit({type:"steal",player:t,victim:s,grapple:!0})),this.knock(s,a/l,o/l,kt.GRAPPLE.KNOCKBACK,.7),this.emit({type:"grappleHit",player:t,victim:s})}}}positionHeldBall(t,e){let n=this.ball,i=t.fx,s=t.fz,a=-s,o=i,l,c,h;if(t.state==="shooting"||t.state==="layup"||t.state==="dunk")l=t.x+i*.25,c=t.top+.25,h=t.z+s*.25;else if(!t.onGround||t.state==="grapple")l=t.x+i*.45,c=t.y+1.25,h=t.z+s*.45;else{this.trackCrossover(t);let d=Math.sin(t.dribble),u=Math.hypot(t.vx,t.vz);t.dribble+=e*(7+u*.9);let f=Math.sin(t.dribble);Math.sign(d)!==Math.sign(f)&&this.emit({type:"dribble",player:t});let g=Math.abs(f),x=!t.sprinting&&this.opponents(t).some(_=>Math.hypot(_.x-t.x,_.z-t.z)<2.6),m=t.sprinting?.85:x?.1:.55,p=t.hand*(x?.4:.24);if(t.crossT>0){let _=1-t.crossT/.3;p=t.hand*.24*(_*2-1),c=we.R+.25*Math.sin(Math.PI*Math.max(0,Math.min(1,_)))}else c=we.R+(1-we.R)*g;l=t.x+i*m+a*p,h=t.z+s*m+o*p}n.x=l,n.y=c,n.z=h,n.vx=t.vx,n.vy=0,n.vz=t.vz,n.spinX+=t.vz/we.R*e,n.spinZ-=t.vx/we.R*e}trackCrossover(t){let e=t.turnLog;for(e.push({t:this.time,yaw:t.yaw});e.length&&this.time-e[0].t>Ps.WINDOW;)e.shift();if(t.crossT>0||e.length<3)return;let n=0;for(let i=1;i<e.length;i++)n+=Math.abs(vr(e[i].yaw-e[i-1].yaw));if(!(n<Ps.TURN)){t.hand=-t.hand,t.crossT=.3,e.length=0,this.emit({type:"crossover",player:t});for(let i of this.opponents(t))Math.hypot(i.x-t.x,i.z-t.z)<Ps.ANKLE_R&&i.reachT>0&&i.onGround&&i.state==="free"&&(this.knock(i,i.fx,i.fz,1.5,Ps.ANKLE_STUN,t),i.anklesT=1,this.emit({type:"ankles",player:t,victim:i}))}}giveBall(t,e={}){let n=this.ball,i=n.pass;n.pass=null,i&&i.to===t?(n.lastPass={from:i.from,to:t,t:this.time},this.emit({type:"catch",player:t,from:i.from})):(n.lastPass=null,i&&t.team!==i.team&&(t.stats.stl++,t.stats.forced++,i.from.stats.tov++,this.emit({type:"intercept",player:t,from:i.from}))),!e.inbound&&this.possTeam!==null&&this.possTeam!==t.team&&(this.stops[t.team]++,this.emit({type:"stop",team:t.team,player:t})),this.possTeam=t.team,n.shot&&!n.shot.resolved&&((n.shot.touchedRim||n.shot.touchedBoard||this.time-n.shot.releaseT>.5)&&(t.stats.reb++,this.emit({type:"rebound",player:t,offensive:t.team===n.shot.team})),n.shot.resolved=!0),n.shot=null,n.holder=t,n.invalidHoop=null,t.dribble=0,this.emit({type:"pickup",player:t})}checkPickups(){let t=this.ball;if(t.holder||this.state!=="live"||t.scoreLocked)return;t.pass&&this.time-t.pass.t>t.pass.T+1.2&&(t.pass=null);let e=null,n=1/0;for(let i of this.players){if(i.state!=="free"&&i.state!=="grapple")continue;let s=t.noPickup.get(i);if(s&&s>this.time)continue;let a=t.shot;if(a&&!a.blocked&&i.team!==a.team&&this.time-a.releaseT<Kt.BLOCK_WINDOW)continue;let o=Math.hypot(t.x-i.x,t.z-i.z),l=i.top+(i.onGround?.3:.6),c=t.pass&&t.pass.to===i?.55:.28;if(o<Zt.R+we.R+c&&t.y>i.y-.1&&t.y<l){let h=t.pass&&t.pass.to===i?-1:0;o+h<n&&(n=o+h,e=i)}}e&&this.giveBall(e)}checkBlocks(){let t=this.ball,e=t.shot;if(!(!e||e.blocked||e.kind==="dunk"||this.time-e.releaseT>Kt.BLOCK_WINDOW))for(let n of this.players){if(n.team===e.team||n.state==="stunned"||n.state==="frozen")continue;let i=t.x-n.x,s=t.z-n.z,a=Math.hypot(i,s),o=!n.onGround,l=n.top+(o?Ce.HANDS_UP:.2);if(a>Zt.R+we.R+(o?.12:.02)||t.y<n.top-.25||t.y>l||(e.touched=e.touched||new Set,e.touched.has(n)))continue;e.touched.add(n);let c=a>.001?i/a:-e.hoop.dir,h=a>.001?s/a:0;if(!o){let m=Math.hypot(t.vx,t.vz)*.85,p=t.vx/(Math.hypot(t.vx,t.vz)||1),_=t.vz/(Math.hypot(t.vx,t.vz)||1),b=p+c*.18,v=_+h*.18,I=Math.hypot(b,v)||1;t.vx=b/I*m,t.vz=v/I*m,t.vy*=.9,e.tipped=!0,this.emit({type:"tip",player:n});continue}e.blocked=!0;let d=-e.hoop.dir,u=3.2+Math.max(0,n.vy)*.25,f=c*.6+d*.4,g=h*.6,x=Math.hypot(f,g)||1;t.vx=f/x*u+n.vx*.3,t.vz=g/x*u+n.vz*.3,t.vy=Math.min(t.vy,0)*.3-1,t.noPickup.set(e.shooter,this.time+.3),n.stats.blk++,n.stats.forced++,n.blockT=.4,this.emit({type:"block",player:n,victim:e.shooter,x:t.x,y:t.y,z:t.z});return}}checkStuck(t){let e=this.ball;!e.onFloor&&e.speed<.5&&e.y>we.R+.05?(e.restTimer+=t,e.restTimer>Fi.STUCK_TIME&&(e.vx=-Math.sign(e.x||1)*2.5,e.vy=2,e.vz=this.rng.range(-1,1),e.restTimer=0,this.emit({type:"nudge"}))):e.restTimer=0}handleBallEvent(t){let e=this.ball;if(t.type==="cross"){t.dir==="up"?e.invalidHoop=t.hoop:e.invalidHoop===t.hoop?e.invalidHoop=null:!e.scoreLocked&&(this.state==="live"||this.state==="buzzer")&&this.onScore(t.hoop);return}this.emit(t)}onScore(t){let e=this.ball,n=t.attackTeam,i=e.shot,s=i&&i.team===n&&i.hoop===t&&!i.blocked,a=s&&i.isThree?3:2;this.score[n]+=a,this.possTeam=null;let o=null,l=e.lastPass;s&&l&&l.to===i.shooter&&this.time-l.t<Te.ASSIST_T&&(o=l.from,o.stats.ast++),e.lastPass=null,s&&(i.shooter.stats.pts+=a,i.shooter.stats.fgm++,a===3&&i.shooter.stats.tpm++,i.kind==="dunk"&&i.shooter.stats.dunks++);let c=!!(i&&i.kind!=="dunk"&&!i.touchedRim&&!i.touchedBoard);this.updateStreaks(n,s?i.shooter:null),i&&(i.resolved=!0),e.scoreLocked=!0,t.netSway.vy=0,t.netSway.vx+=-t.dir*1.5;let h=this.state==="buzzer";this.emit({type:"score",team:n,pts:a,hoop:t,swish:c,scorer:s?i.shooter:null,assist:o,kind:i?i.kind:"tip",grapple:!!(i&&i.grapple),buzzer:h,overtime:this.overtime}),this.overtime||h?(this.state="final",this.stateT=1.8):(this.state="scored",this.stateT=Fi.RESET_DELAY,this.lastScoredHoop=t)}updateStreaks(t,e){for(let n of this.players)n.team!==t&&(n.fire>0&&this.emit({type:"fireOut",player:n}),n.streak=0,n.fire=0);e&&(e.streak++,e.fire>0?(e.fire--,e.fire===0&&(e.streak=0,this.emit({type:"fireOut",player:e}))):e.streak>=this.fireStreak&&(e.fire=Ja.MAX,this.emit({type:"onFire",player:e})))}resetAfterScore(){let t=this.lastScoredHoop;if(this.practice){let a=this.players[0],o=this.attackHoop(a.team).spot(6.6,0);a.place(o.x,o.z,a.team===0?0:Math.PI),this.ball.reset(this.ball.x,this.ball.y,this.ball.z),this.projectiles=[],this.giveBall(a,{inbound:!0}),this.state="live",this.emit({type:"inbound",team:a.team});return}let e=1-t.attackTeam,n=[[4.2,0],[7.5,-.9],[7.5,.9]];this.teamPlayers(e).forEach((a,o)=>{let l=t.spot(...n[o]||[8,0]);a.place(l.x,l.z,t.dir>0?Math.PI:0)});let i=[[-1,0],[2,-3.5],[2,3.5]];this.teamPlayers(t.attackTeam).forEach((a,o)=>{let[l,c]=i[o]||[3,0];a.place(-t.dir*l,c,t.dir>0?0:Math.PI)});let s=this.ball;s.reset(s.x,s.y,s.z);for(let a of this.projectiles)this.emit({type:"projectileEnd",id:a.id,x:a.x,y:a.y,z:a.z});this.projectiles=[],this.giveBall(this.teamPlayers(e)[0],{inbound:!0}),this.state="live",this.emit({type:"inbound",team:e})}onClockExpired(){this.clock=0;let t=this.ball;this.emit({type:"buzzer"}),!t.holder&&t.shot&&!t.shot.resolved&&!t.shot.blocked?(this.state="buzzer",this.stateT=Fi.BUZZER_GRACE):this.endRegulation()}endRegulation(){this.score[0]===this.score[1]?(this.overtime=!0,this.setupTipoff(),this.stateT=Fi.COUNTDOWN+.8,this.emit({type:"overtime"})):this.finish()}finish(){this.state="ended",this.winner=this.score[0]>this.score[1]?0:1;for(let t of this.players)t.state!=="free"&&(t.state="free",t.vy=Math.min(t.vy,0));this.emit({type:"end",winner:this.winner})}checkCharge(t,e,n,i){if(this.ball.holder!==t||t.chargeCd>0||!t.onGround||t.state!=="free"||t.dashT>0||e.state!=="free"||!e.onGround||-(e.fx*n+e.fz*i)<.5||Math.hypot(e.vx,e.vz)>2.8)return!1;let a=t.vx*n+t.vz*i;return!t.sprinting||a<Ce.CHARGE_SPEED?!1:(t.chargeCd=Ce.CHARGE_CD,this.popLoose(t,{x:t.x+n*.3-i*.8,z:t.z+i*.3+n*.8},"charge"),t.stats.tov++,e.stats.forced++,t.vx*=-.3,t.vz*=-.3,t.state="stunned",t.stunT=.4,t.stumbleT=.45,this.emit({type:"charge",player:t,by:e}),!0)}separatePlayers(){let t=this.players;for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){let i=t[e],s=t[n];if(i.state==="grapple"||s.state==="grapple"||i.state==="dunk"||s.state==="dunk")continue;let a=s.x-i.x,o=s.z-i.z,l=Math.hypot(a,o),c=Zt.R*2;if(l<c&&Math.abs(i.y-s.y)<1.2){let h=l>1e-4?a/l:1,d=l>1e-4?o/l:0;i.team!==s.team&&(this.checkCharge(i,s,h,d)||this.checkCharge(s,i,-h,-d));let u=(c-l)*.5;i.x-=h*u,i.z-=d*u,s.x+=h*u,s.z+=d*u}}}};var Ie=(r,t)=>Math.hypot(r.x-t.x,r.z-t.z),zs=class{constructor(t,e,n="normal"){this.m=t,this.p=e,this.d=Bn[n]||Bn.normal,this.rng=t.rng,this.thinkT=this.rng.range(0,.2),this.target={x:e.x,z:e.z},this.sprint=!1,this.plan=null,this.spot=null,this.holdT=0,this.possT=0,this.wantShoot=!1,this.wantSteal=!1,this.wantItem=null,this.wantPass=null,this.wantMove=0,this.wantDash=!1,this.releaseAt=Kt.SWEET_CENTER,this.contestT=-1,this.lastContested=null,this.jumpReadyT=0,this.stealCd=0,this.cutT=0}get idx(){return this.m.teamPlayers(this.p.team).indexOf(this.p)}get mates(){return this.m.teamPlayers(this.p.team).filter(t=>t!==this.p)}get foes(){return this.m.opponents(this.p)}get man(){let t=this.foes;return t[Math.min(this.idx,t.length-1)]}update(t){let e=Bi(),{m:n,p:i}=this,s=n.ball;if(this.stealCd=Math.max(0,this.stealCd-t),this.possT=s.holder===i?this.possT+t:0,this.cutT=Math.max(0,this.cutT-t),i.state==="shooting")return e.shootHeld=i.meter<this.releaseAt,e;if(i.state!=="free")return e;if(n.state!=="live"){let a=n.defendHoop(i.team);return this.target=a.spot(6+this.idx*1.5,(this.idx-1)*.7),this.steer(e,!1),e}if(this.thinkT-=t,this.thinkT<=0&&(this.thinkT=this.d.think*this.rng.range(.75,1.25),this.decide(this.d.think)),this.contestT>=0&&(this.contestT-=t,this.contestT<0&&i.onGround&&(e.jump=!0)),!s.holder&&i.onGround&&Ie(s,i)<.9&&s.y>i.top-.1&&s.y<i.top+1.6&&s.vy<2?(this.jumpReadyT+=t,this.jumpReadyT>this.d.think*.6&&(e.jump=!0,this.jumpReadyT=0)):this.jumpReadyT=0,this.steer(e,this.sprint),this.wantItem&&i.item&&(e.useItem=!0,e.aim=this.wantItem),this.wantItem=null,s.holder===i){if(this.wantPass)return e.pass=!0,e.passDir={x:this.wantPass.x-i.x,z:this.wantPass.z-i.z},this.wantPass=null,this.plan=null,e;this.wantMove&&(e.move=this.wantMove,this.wantMove=0),this.wantShoot&&(e.shootDown=!0,e.shootHeld=!0,this.wantShoot=!1,this.plan=null)}return this.wantDash&&(e.dash=!0,this.wantDash=!1),this.wantSteal&&(e.steal=!0,this.wantSteal=!1),e}steer(t,e){let n=this.p,i=this.target.x-n.x,s=this.target.z-n.z,a=Math.hypot(i,s);if(a<.18){t.mx=0,t.mz=0;return}i/=a,s/=a;for(let l of this.m.players){if(l===n)continue;let c=l.x-n.x,h=l.z-n.z,d=Math.hypot(c,h);if(d<1.3&&d>.01&&(c*i+h*s)/d>.6&&a>d){let u=c*s-h*i>0?-1:1,f=i-s*u*.9,g=s+i*u*.9,x=Math.hypot(f,g);i=f/x,s=g/x}}let o=Ge(a/.8,0,1);t.mx=i*o,t.mz=s*o,t.sprint=e&&n.stamina>.25}decide(t){let{m:e,p:n,d:i,rng:s}=this,a=e.ball,o=e.attackHoop(n.team),l=e.defendHoop(n.team),c=e.box;if(n.item&&s.chance(e.chaos?1:i.itemUse*.35)&&this.considerItem(o,l))return;if(a.holder===n)return this.offenseWithBall(o,t);if(this.plan=null,this.holdT=0,a.pass&&a.pass.to===n){this.target={x:a.pass.target.x,z:a.pass.target.z},this.sprint=!0;return}if(a.holder&&a.holder.team===n.team)return this.offenseOffBall(o);if(a.holder)return this.defend(l);let d=e.teamPlayers(n.team).reduce((f,g)=>Ie(f,a)<Ie(g,a)?f:g),u=Ie(a,n);if(!n.item&&c.active&&Ie(c,n)<(e.chaos?14:6)&&(d!==n||u>4)){this.target={x:c.x,z:c.z},this.sprint=!0;return}if(d===n||u<2.5||e.teamSize===1)a.shot&&!a.shot.resolved&&e.time-a.shot.releaseT<1?this.target=a.shot.hoop.spot(1.6,s.range(-.6,.6)):this.target={x:Ge(a.x+a.vx*.25,-Vt.HALF_L+Zt.R,Vt.HALF_L-Zt.R),z:Ge(a.z+a.vz*.25,-Vt.HALF_W+Zt.R,Vt.HALF_W-Zt.R)},this.sprint=!0;else{let f=l.spot(5+this.idx,(this.idx-1)*.8);this.target={x:(f.x+a.x)/2,z:(f.z+a.z)/2},this.sprint=!1}}offenseWithBall(t,e){let{m:n,p:i,d:s,rng:a}=this,o=Math.hypot(t.rim.x-i.x,t.rim.z-i.z);this.plan||this.choosePlan(t,o);let l=this.closestFoe(),c=l?Ie(l,i):99,h=l&&(()=>{let f=t.rim.x-i.x,g=t.rim.z-i.z,x=l.x-i.x,m=l.z-i.z;return(x*f+m*g)/((c||1)*(o||1))>.4})(),d=!l||!h||c>2.6||l.state!=="free";if(!i.onGround&&i.top+Zt.REACH>t.rim.y-.5&&o<Kt.DUNK_RANGE+.8){this.queueShot();return}let u=this.bestOpenMate(t);if(u){let f=u.callT>0,g=!d&&this.holdT>.4||this.possT>3.2,x=Math.hypot(t.rim.x-u.x,t.rim.z-u.z)<3&&this.mateOpenness(u)>2.2,m=this.mateOpenness(u)>c+1.2&&this.holdT+this.possT>.6&&a.chance(.22);if(f&&a.chance(.85)||g&&a.chance(.6)||x&&a.chance(.5)||m){this.wantPass={x:u.x,z:u.z};return}}if(l&&c<2.4&&i.moveCd<=0&&l.state==="free"){let f=-i.fz,g=i.fx,x=(l.x-i.x)*f+(l.z-i.z)*g>=0?1:-1;if(x===i.hand&&a.chance(.15+s.stealRate)){this.wantMove=-x;return}}if(l&&h&&c<1.8&&i.moveCd<=0&&a.chance(l.reachT>0?.6:.12+s.stealRate*.3)){this.wantMove=a.sign();return}if(this.plan==="drive")this.target=t.spot(.9,this.spotAngle),this.sprint=!0,i.dashCd<=0&&o>4&&o<9&&d&&a.chance(.15)&&(this.wantDash=!0),(o<Kt.DUNK_RANGE-.15||o<Kt.LAYUP_RANGE-.3&&(!d||a.chance(.4)))&&this.queueShot();else{this.target=this.spot;let f=Ie(i,this.spot);this.sprint=f>4,f<.6&&(this.holdT+=e,d&&this.holdT>.12?this.queueShot():this.holdT>s.patience&&(a.chance(.5)?this.queueShot():this.plan="drive"))}this.possT>6&&this.queueShot(),this.sprint&&l&&h&&c<2.6&&l.stance&&a.chance(.5+s.stealRate)&&(this.sprint=!1)}offenseOffBall(t){let{m:e,p:n,rng:i}=this,s=e.ball.holder,a=[t.spot(6.9,-1.05),t.spot(6.9,1.05),t.spot(5.6,0),t.spot(2.2,-1.2),t.spot(2.2,1.2)],o=a[(this.idx*2+(s.z>0?0:1))%a.length];Ie(o,s)<2.5&&(o=a[(this.idx+2)%a.length]);let l=this.closestFoe();this.cutT<=0&&l&&Ie(l,n)>2.8&&i.chance(.08)&&(this.cutT=1.4),this.cutT>0?(this.target=t.spot(1.2,n.z>0?.6:-.6),this.sprint=!0,Ie(this.target,n)<2&&(this.cutT=Math.min(this.cutT,.5))):(this.target=o,this.sprint=Ie(o,n)>5)}defend(t){let{m:e,p:n,d:i,rng:s}=this,a=e.ball.holder,o=this.man,l=Math.hypot(t.rim.x-a.x,t.rim.z-a.z);o!==a&&l<4&&(e.teamPlayers(n.team).filter(x=>x!==n).find(x=>Ie(x,a)<1.6)||(o=a));let c=t.rim.x-o.x,h=t.rim.z-o.z,d=Math.hypot(c,h)||1,u=Ie(o,n);if(o===a){if(this.target={x:a.x+c/d*i.guardGap,z:a.z+h/d*i.guardGap},this.sprint=Ie(this.target,n)>2.5,n.dashCd<=0&&Ie(this.target,n)>4&&s.chance(.2)&&(this.wantDash=!0),(a.state==="shooting"||a.state==="layup")&&u<3&&a!==this.lastContested&&(this.lastContested=a,s.chance(i.contestJump)&&(this.contestT=i.contestReact),this.target={x:a.x+c/d*.7,z:a.z+h/d*.7}),a.state==="free"&&(this.lastContested=null),this.stealCd<=0&&n.stealCd<=0&&u<2.2){let f=e.stealRead(n);(f.ok?s.chance(i.stealRate*.55):s.chance(i.stealRate*.1))?(this.wantSteal=!0,this.stealCd=i.stealCd):f.ok===!1&&(this.stealCd=.12)}}else{this.target={x:o.x+c/d*1.4+(a.x-o.x)*.35*.3,z:o.z+h/d*1.4+(a.z-o.z)*.35*.3},this.sprint=Ie(this.target,n)>3;let g=e.ball.pass;g&&g.team!==n.team&&Ie(e.ball,n)<3&&(this.target={x:e.ball.x,z:e.ball.z})}}closestFoe(){let t=null,e=1/0;for(let n of this.foes){let i=Ie(n,this.p);i<e&&(e=i,t=n)}return t}mateOpenness(t){let e=1/0;for(let n of this.foes)e=Math.min(e,Ie(n,t));return e}bestOpenMate(t){let e=null,n=-1/0;for(let i of this.mates){if(i.state!=="free")continue;let s=this.mateOpenness(i);if(s<1.8&&i.callT<=0)continue;let a=Math.hypot(t.rim.x-i.x,t.rim.z-i.z),o=s-a*.15+(i.callT>0?3:0);o>n&&(n=o,e=i)}return e}considerItem(t,e){let{m:n,p:i}=this,s=n.ball,a=s.holder&&s.holder.team!==i.team?s.holder:this.closestFoe();if(!a)return!1;let o={x:i.x,y:i.y+1.1,z:i.z},l={x:a.x,y:a.y+1.1,z:a.z},c=s.holder===i,h=s.holder&&s.holder.team!==i.team,d=Math.hypot(t.rim.x-i.x,t.rim.z-i.z),u=Ie(a,i),f=Ie(s,i),g=Ie(s,a),x=a.state==="frozen"||a.state==="stunned",m=null;switch(i.item){case"grapple":c&&d>7?m={...t.rim}:h&&u>7?m=l:!s.holder&&f>9&&s.y<2.5&&(m={x:s.x,y:s.y,z:s.z});break;case"jetpack":c&&d>2&&d<5.5?(m=o,this.plan="drive"):h&&(a.state==="shooting"||a.state==="layup")&&u<3&&(m=o);break;case"punch":u<2.3&&!x&&(h||!s.holder&&g<2)&&(m=l);break;case"freeze":!x&&(h||!s.holder&&g<f)&&u>2.5&&u<15&&(m=l);break;case"banana":{let p=(a.x-i.x)*i.fx+(a.z-i.z)*i.fz<0;(c&&p&&u<5||h&&u<6&&u>2)&&(m=o);break}case"magnet":(!s.holder&&f>3&&f<10&&g<f||h&&u<3.4)&&(m=o);break;case"energy":(c&&d>9||!s.holder&&f>7||h&&u>7)&&(m=o);break}return m?(this.wantItem=m,!0):!1}choosePlan(t,e){let{rng:n,d:i}=this;if(this.holdT=0,this.spotAngle=n.range(-.5,.5),e<Kt.LAYUP_RANGE&&n.chance(.6)){this.plan="drive";return}this.plan=n.pick(i.plan);let s=n.range(-1.1,1.1);this.plan==="three"?this.spot=t.spot(Vt.THREE+n.range(.4,1),s):this.plan==="mid"&&(this.spot=t.spot(n.range(3.6,5.6),s)),this.spot&&(this.spot.x=Ge(this.spot.x,-Vt.HALF_L+1,Vt.HALF_L-1),this.spot.z=Ge(this.spot.z,-Vt.HALF_W+.8,Vt.HALF_W-.8))}queueShot(){let{rng:t,d:e,p:n}=this;this.wantShoot=!0,this.releaseAt=Ge(t.normal(Kt.SWEET_CENTER,e.releaseSd),.3,1.3),n.layupQ=Ge(t.normal(.92,e.releaseSd*.9),.55,1),this.holdT=0}};var du={forward:["KeyW"],back:["KeyS"],left:["KeyA"],right:["KeyD"],jump:["Space"],sprint:["ShiftLeft","ShiftRight"],shoot:["KeyJ"],steal:["KeyE"],moveLeft:["KeyQ"],pass:["KeyF"],dash:["KeyC","ControlLeft"],item:["Digit1","KeyR"],lookLeft:["ArrowLeft"],lookRight:["ArrowRight"],lookUp:["ArrowUp"],lookDown:["ArrowDown"]},to=class{constructor(t){this.canvas=t,this.down=new Set,this.q={jump:!1,shootDown:!1,steal:!1,item:!1,left:!1,pass:!1,dash:!1,tmove:!1},this.mouseHeld=!1,this.rightHeld=!1,this.look={dx:0,dy:0},this.sensitivity=.0024,this.invertY=!1,this.enabled=!1,this.locked=!1,this.onLockChange=null,this.onKeyDown=e=>{this.enabled&&((this.is(e.code,"jump")||this.is(e.code,"lookLeft")||this.is(e.code,"lookRight")||this.is(e.code,"lookUp")||this.is(e.code,"lookDown"))&&e.preventDefault(),!e.repeat&&(this.down.add(e.code),this.is(e.code,"jump")&&(this.q.jump=!0),this.is(e.code,"shoot")&&(this.q.shootDown=!0),this.is(e.code,"steal")&&(this.q.steal=!0),this.is(e.code,"item")&&(this.q.item=!0),this.is(e.code,"moveLeft")&&(this.q.left=!0),this.is(e.code,"pass")&&(this.q.pass=!0),this.is(e.code,"dash")&&(this.q.dash=!0,e.preventDefault())))},this.onKeyUp=e=>this.down.delete(e.code),this.onMouseDown=e=>{if(!(!this.enabled||this.touchMode))if(e.button===0){if(!this.locked&&this.canLock&&!this.lockFailed){this.requestLock();return}this.mouseHeld=!0,this.q.shootDown=!0}else e.button===2&&(this.rightHeld=!0)},this.onMouseUp=e=>{e.button===0&&(this.mouseHeld=!1),e.button===2&&(this.rightHeld=!1)},this.onMouseMove=e=>{this.enabled&&(this.locked||this.rightHeld)&&(this.look.dx+=e.movementX*this.sensitivity,this.look.dy+=e.movementY*this.sensitivity)},this.onLock=()=>{this.locked=document.pointerLockElement===this.canvas,this.locked||this.releaseHeld(),this.onLockChange?.(this.locked)},this.onLockError=()=>{this.lockFailed=!0},this.onBlur=()=>this.releaseHeld(),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),t.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),t.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("pointerlockchange",this.onLock),document.addEventListener("pointerlockerror",this.onLockError),window.addEventListener("blur",this.onBlur),this.canLock="requestPointerLock"in t,this.touchMode=!1,this.stick={id:null,ox:0,oy:0,x:0,y:0},this.lookTouch={id:null,x:0,y:0},this.touchShootHeld=!1,this.touchSensitivity=.0065}enableTouch(){if(this.touchMode)return;this.touchMode=!0,this.canLock=!1;let t=d=>document.getElementById(d),e=t("stickZone"),n=t("stickBase"),i=t("stickKnob"),s=t("lookZone"),a=56,o=d=>{let u=this.stick,f=d.clientX-u.ox,g=d.clientY-u.oy,x=Math.hypot(f,g);x>a&&(f*=a/x,g*=a/x),u.x=f/a,u.y=g/a,i.style.transform=`translate(${f}px, ${g}px)`};e.addEventListener("pointerdown",d=>{if(!this.enabled||this.stick.id!==null)return;d.preventDefault(),e.setPointerCapture?.(d.pointerId);let u=this.stick;u.id=d.pointerId,u.ox=d.clientX,u.oy=d.clientY,u.x=0,u.y=0,n.style.left=`${d.clientX}px`,n.style.top=`${d.clientY}px`,n.style.bottom="auto",n.classList.add("active"),i.style.transform=""}),e.addEventListener("pointermove",d=>{d.pointerId===this.stick.id&&o(d)});let l=d=>{d.pointerId===this.stick.id&&(this.stick.id=null,this.stick.x=0,this.stick.y=0,i.style.transform="",n.classList.remove("active"))};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l),s.addEventListener("pointerdown",d=>{!this.enabled||this.lookTouch.id!==null||(d.preventDefault(),s.setPointerCapture?.(d.pointerId),this.lookTouch={id:d.pointerId,x:d.clientX,y:d.clientY})}),s.addEventListener("pointermove",d=>{let u=this.lookTouch;d.pointerId===u.id&&(this.look.dx+=(d.clientX-u.x)*this.touchSensitivity,this.look.dy+=(d.clientY-u.y)*this.touchSensitivity*.8,u.x=d.clientX,u.y=d.clientY)});let c=d=>{d.pointerId===this.lookTouch.id&&(this.lookTouch.id=null)};s.addEventListener("pointerup",c),s.addEventListener("pointercancel",c);let h=(d,u,f)=>{let g=t(d);g.addEventListener("pointerdown",m=>{m.preventDefault(),m.stopPropagation(),g.setPointerCapture?.(m.pointerId),g.classList.add("down"),this.enabled&&u()});let x=m=>{g.classList.remove("down"),f?.()};g.addEventListener("pointerup",x),g.addEventListener("pointercancel",x),g.addEventListener("contextmenu",m=>m.preventDefault())};h("tShoot",()=>{this.q.shootDown=!0,this.touchShootHeld=!0},()=>{this.touchShootHeld=!1}),h("tJump",()=>{this.q.jump=!0}),h("tSteal",()=>{this.q.steal=!0,this.q.tmove=!0}),h("tItem",()=>{this.q.item=!0}),h("tPass",()=>{this.q.pass=!0}),h("tDash",()=>{this.q.dash=!0})}is(t,e){return du[e].includes(t)}held(t){return du[t].some(e=>this.down.has(e))}requestLock(){if(!(!this.canLock||this.lockFailed))try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{this.lockFailed=!0})}catch{this.lockFailed=!0}}exitLock(){document.pointerLockElement&&document.exitPointerLock()}releaseHeld(){this.down.clear(),this.touchShootHeld=!1,this.stick&&(this.stick.id=null,this.stick.x=0,this.stick.y=0),this.lookTouch&&(this.lookTouch.id=null),this.mouseHeld=!1,this.rightHeld=!1,this.q={jump:!1,shootDown:!1,steal:!1,item:!1,left:!1,pass:!1,dash:!1,tmove:!1}}takeLook(t){let e=2.4*t,n=this.look.dx+((this.held("lookRight")?1:0)-(this.held("lookLeft")?1:0))*e,i=this.look.dy+((this.held("lookDown")?1:0)-(this.held("lookUp")?1:0))*e*.6;return this.look.dx=0,this.look.dy=0,{dx:n,dy:this.invertY?-i:i}}sample(t,e,n={}){let i=Bi(),s=(this.held("forward")?1:0)-(this.held("back")?1:0),a=(this.held("right")?1:0)-(this.held("left")?1:0),o=Math.hypot(this.stick.x,this.stick.y);o>.12&&(s=-this.stick.y,a=this.stick.x),i.mx=t.fx*s+t.rx*a,i.mz=t.fz*s+t.rz*a;let l=Math.hypot(i.mx,i.mz);l>1&&(i.mx/=l,i.mz/=l),i.sprint=this.held("sprint")||o>.92,i.jump=this.q.jump,i.shootDown=this.q.shootDown,i.shootHeld=this.mouseHeld||this.held("shoot")||this.touchShootHeld,i.useItem=this.q.item,i.aim=e,i.dash=this.q.dash,n.holding?(this.q.tmove?i.move=this.stick.x<-.25?-1:1:this.q.steal?i.move=1:this.q.left&&(i.move=-1),i.pass=this.q.pass,i.passDir={x:t.fx,z:t.fz}):(i.steal=this.q.steal,i.call=this.q.left||this.q.pass);for(let c of Object.keys(this.q))this.q[c]=!1;return i}};var eo=class extends ws{constructor(){super();let t=new oe;t.deleteAttribute("uv");let e=new Qt({side:Ze}),n=new Qt,i=new qa(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new nt(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new nt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new nt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new nt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new nt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new nt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let d=new nt(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let u=new nt(t,Ns(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let f=new nt(t,Ns(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new nt(t,Ns(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new nt(t,Ns(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new nt(t,Ns(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new nt(t,Ns(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ns(r){let t=new pe;return t.color.setScalar(r),t}var _r=new R;function xn(r,t,e,n,i,s){let a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;_r.copy(t),_r[n]=0,_r.normalize();let c=.5*a/(a+o),h=1-_r.angleTo(r)/l;return Math.sign(_r[e])===1?h*c:o/(a+o)+c+c*(1-h)}var We=class extends oe{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new R,l=new R,c=new R(t,e,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,g=new R,x=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*s,h[m+1]=c.y*Math.sign(o.y)+l.y*s,h[m+2]=c.z*Math.sign(o.z)+l.z*s,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),u[p+0]=xn(g,l,"z","y",s,n),u[p+1]=1-xn(g,l,"y","z",s,e);break;case 1:g.set(-1,0,0),u[p+0]=1-xn(g,l,"z","y",s,n),u[p+1]=1-xn(g,l,"y","z",s,e);break;case 2:g.set(0,1,0),u[p+0]=1-xn(g,l,"x","z",s,t),u[p+1]=xn(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),u[p+0]=1-xn(g,l,"x","z",s,t),u[p+1]=1-xn(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),u[p+0]=1-xn(g,l,"x","y",s,t),u[p+1]=1-xn(g,l,"y","x",s,e);break;case 5:g.set(0,0,-1),u[p+0]=xn(g,l,"x","y",s,t),u[p+1]=1-xn(g,l,"y","x",s,e);break}}};function no(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new Ee,c=0;for(let h=0;h<r.length;++h){let d=r[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<r.length;++u){let f=r[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=r[u].attributes.position.count}l.setIndex(d)}for(let h in s){let d=uu(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let g=uu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function uu(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let a=new t(s),o=new He(a,e,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let x=h.getComponent(u,g);o.setComponent(u+d,g,x)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}var Hi=Vt.HALF_L*2+5,Vi=Vt.HALF_W*2+5,br=r=>"#"+r.toString(16).padStart(6,"0");function fv(r){return()=>{r=r+1831565813>>>0;let t=r;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function pu(r=128){let t=Math.round(Hi*r),e=Math.round(Vi*r),n=fv(4242),i=document.createElement("canvas");i.width=t,i.height=e;let s=document.createElement("canvas");s.width=t,s.height=e;let a=document.createElement("canvas");a.width=t,a.height=e;let o=i.getContext("2d"),l=s.getContext("2d"),c=a.getContext("2d"),h=C=>C*r,d=t/2,u=e/2,f=Vt.HALF_L,g=Vt.HALF_W;l.fillStyle="#808080",l.fillRect(0,0,t,e),c.fillStyle="#606060",c.fillRect(0,0,t,e);let x=h(.075);for(let C=0,M=0;C<e;C+=x,M++){let y=-n()*h(3);for(;y<t;){let P=h(1.6+n()*2.8),D=.86+n()*.22,F=n()*14-7;o.fillStyle=`rgb(${Math.round(222*D+F)},${Math.round(171*D+F*.6)},${Math.round(116*D)})`,o.fillRect(y,C,P,x);let H=3+(n()*4|0);for(let O=0;O<H;O++){let L=C+n()*x;o.strokeStyle=`rgba(${120+n()*40},${80+n()*30},40,${.05+n()*.08})`,o.lineWidth=.6+n()*1.4,o.beginPath(),o.moveTo(y,L);for(let X=1;X<=6;X++)o.lineTo(y+P*X/6,L+(n()-.5)*2.2);o.stroke(),l.strokeStyle=`rgba(60,60,60,${.25+n()*.2})`,l.lineWidth=1,l.beginPath(),l.moveTo(y,L),l.lineTo(y+P,L+(n()-.5)*2),l.stroke()}o.fillStyle="rgba(70,40,15,0.35)",o.fillRect(y+P-1,C,1.2,x),l.fillStyle="#5a5a5a",l.fillRect(y+P-1,C,1.2,x),y+=P}o.fillStyle="rgba(70,40,15,0.22)",o.fillRect(0,C+x-.8,t,.8),l.fillStyle="#606060",l.fillRect(0,C+x-.8,t,.8)}let m=o.createRadialGradient(d,u,h(2),d,u,h(18));m.addColorStop(0,"rgba(255,240,215,0.07)"),m.addColorStop(1,"rgba(60,30,10,0.10)"),o.fillStyle=m,o.fillRect(0,0,t,e);let p=br(1319743);o.fillStyle=p,o.globalAlpha=.88,o.fillRect(0,0,t,u-h(g)),o.fillRect(0,u+h(g),t,e-(u+h(g))),o.fillRect(0,u-h(g),d-h(f),h(2*g)),o.fillRect(d+h(f),u-h(g),t-(d+h(f)),h(2*g)),o.globalAlpha=1,c.fillStyle="#6c6c6c",c.fillRect(0,0,t,u-h(g)),c.fillRect(0,u+h(g),t,e);let _=zt.BOARD_X-(zt.RIM_OFFSET+zt.RIM_R),b=5.8,v=4.9;for(let C of[1,-1]){let M=C>0?1:0,y=C>0?d+h(f-b):d-h(f);o.fillStyle=br(te[M].dark),o.globalAlpha=.92,o.fillRect(y,u-h(v/2),h(b),h(v)),o.globalAlpha=1,c.fillStyle="#767676",c.fillRect(y,u-h(v/2),h(b),h(v))}for(let C of[1,-1]){let M=d+C*h(_);o.save(),o.beginPath(),fu(o,C,M,d,u,h,f,g),o.closePath(),o.fillStyle="rgba(255,255,255,0.035)",o.fill(),o.restore()}o.save(),o.translate(d,u);let I=h(1.8);o.fillStyle=br(1319743),o.beginPath(),o.arc(0,0,I,0,Math.PI*2),o.fill(),o.lineWidth=h(.06),o.strokeStyle="#ffffff",o.beginPath(),o.arc(0,0,I-h(.18),0,Math.PI*2),o.stroke(),o.strokeStyle="#ff7a1a",o.lineWidth=h(.07);let w=h(.95);o.beginPath(),o.arc(0,0,w,0,Math.PI*2),o.stroke(),o.beginPath(),o.moveTo(-w,0),o.lineTo(w,0),o.stroke(),o.beginPath(),o.moveTo(0,-w),o.lineTo(0,w),o.stroke(),o.beginPath(),o.ellipse(-w*.62,0,w*.38,w,0,-Math.PI/2,Math.PI/2),o.stroke(),o.beginPath(),o.ellipse(w*.62,0,w*.38,w,0,Math.PI/2,Math.PI*1.5),o.stroke(),o.fillStyle="#ffffff",o.font=`italic 900 ${h(.9)}px "Big Shoulders Display", "Arial Narrow", Impact, sans-serif`,o.textAlign="center",o.textBaseline="middle",o.lineWidth=h(.08),o.strokeStyle=br(1319743),o.strokeText("IB",0,h(.04)),o.fillText("IB",0,h(.04)),o.font=`600 ${h(.2)}px "Barlow", "Segoe UI", Arial, sans-serif`,o.fillStyle="rgba(255,255,255,0.85)",o.fillText("NO  REFS  \xB7  NO  RULES",0,I-h(.42)),o.restore(),o.strokeStyle="#f4f1ea",o.lineWidth=h(.06),o.lineCap="butt",o.strokeRect(d-h(f),u-h(g),h(2*f),h(2*g)),o.beginPath(),o.moveTo(d,u-h(g)),o.lineTo(d,u+h(g)),o.stroke(),o.beginPath(),o.arc(d,u,h(1.8),0,Math.PI*2),o.stroke();for(let C of[1,-1]){let M=d+C*h(_),y=C>0?d+h(f-b):d-h(f);o.strokeRect(y,u-h(v/2),h(b),h(v));let P=d+C*h(f-b);o.beginPath(),C>0?o.arc(P,u,h(1.8),Math.PI/2,3*Math.PI/2):o.arc(P,u,h(1.8),-Math.PI/2,Math.PI/2),o.stroke(),o.save(),o.setLineDash([h(.38),h(.3)]),o.beginPath(),C>0?o.arc(P,u,h(1.8),-Math.PI/2,Math.PI/2):o.arc(P,u,h(1.8),Math.PI/2,3*Math.PI/2),o.stroke(),o.restore(),o.beginPath(),C>0?o.arc(M,u,h(1.25),Math.PI/2,3*Math.PI/2):o.arc(M,u,h(1.25),-Math.PI/2,Math.PI/2),o.stroke();for(let D of[2.1,3,3.9,4.8])for(let F of[-1,1]){let H=d+C*h(f-D);o.beginPath(),o.moveTo(H,u+F*h(v/2)),o.lineTo(H,u+F*h(v/2+.18)),o.stroke()}o.beginPath(),fu(o,C,M,d,u,h,f,g),o.stroke();for(let D of[-1,1])o.beginPath(),o.moveTo(d+C*h(f-8.5),u+D*h(g)),o.lineTo(d+C*h(f-8.5),u+D*h(g-.9)),o.stroke()}o.save(),o.fillStyle="rgba(255,255,255,0.9)",o.font=`italic 700 ${h(.75)}px "Big Shoulders Display", "Arial Narrow", Impact, sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText("ILLEGAL  BASKETBALL",d,u+h(g+1.25)),o.translate(d,u-h(g+1.25)),o.rotate(Math.PI),o.fillText("ILLEGAL  BASKETBALL",0,0),o.restore();for(let C of[1,-1])o.save(),o.translate(d+C*h(f+1.25),u),o.rotate(C*Math.PI/2),o.fillStyle=br(te[C>0?1:0].color),o.font=`italic 700 ${h(.62)}px "Big Shoulders Display", "Arial Narrow", Impact, sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(C>0?"AWAY":"HOME",0,0),o.restore();let A=(C,M)=>{let y=new Pe(C);return M&&(y.colorSpace=fe),y.anisotropy=16,y.generateMipmaps=!0,y.minFilter=Jn,y};return{map:A(i,!0),bumpMap:A(s,!1),roughnessMap:A(a,!1)}}function fu(r,t,e,n,i,s,a,o){let l=Vt.THREE,c=o-.9,h=Math.asin(c/l),d=e-t*s(l*Math.cos(h));r.moveTo(n+t*s(a),i-s(c)),r.lineTo(d,i-s(c)),t>0?r.arc(e,i,s(l),Math.PI+h,Math.PI-h,!0):r.arc(e,i,s(l),-h,h,!1),r.lineTo(n+t*s(a),i+s(c))}var mu=r=>"#"+r.toString(16).padStart(6,"0"),io=class{constructor(t,e,n={}){this.scene=t,this.renderer=e,this.quality=n.quality||"high",this.rng=Qa(77),this.time=0,this.hype=0,this.buildLighting(),this.buildFloor(),this.buildCourtside(),this.buildStands(),this.buildRoof(),this.buildAtmosphere()}buildAtmosphere(){let t=new ve,e=document.createElement("canvas");e.width=4,e.height=128;let n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,128);i.addColorStop(0,"rgba(255,236,200,0.9)"),i.addColorStop(.55,"rgba(255,220,170,0.25)"),i.addColorStop(1,"rgba(255,210,160,0)"),n.fillStyle=i,n.fillRect(0,0,4,128);let s=new Pe(e),a=new pe({map:s,transparent:!0,opacity:.07,blending:wn,depthWrite:!1,side:ze,fog:!1});this.beams=[];let o=[[-9,-4],[-3,4],[3,-4],[9,4],[0,0],[-12,2],[12,-2]];for(let[d,u]of o){let f=new Ke(.35,3.2,15,24,1,!0);f.translate(0,-7.5,0);let g=new nt(f,a.clone());g.position.set(d*.9,15.5,u*.6),g.rotation.set(u*.025,0,-d*.012),g.userData.phase=Math.random()*6,t.add(g),this.beams.push(g)}let l=this.quality==="low"?160:420,c=new Float32Array(l*3);for(let d=0;d<l;d++)c[d*3]=this.rng.range(-16,16),c[d*3+1]=this.rng.range(.5,12),c[d*3+2]=this.rng.range(-10,10);let h=new Ee;h.setAttribute("position",new He(c,3)),this.dust=new za(h,new ur({color:16767400,size:.045,transparent:!0,opacity:.55,depthWrite:!1,blending:wn})),t.add(this.dust),t.visible=!1,this.scene.add(t),this.atmos=t}setMenuMood(t){this.atmos.visible=t}buildLighting(){let t=this.scene;t.background=new Dt(460813),t.fog=new Aa(460813,38,95);let e=new Es(this.renderer),n=e.fromScene(new eo,.04).texture;t.environment=n,t.environmentIntensity=.65,e.dispose(),t.add(new $a(13621503,2759954,.35));let i=new gr(16774370,2.3);i.position.set(-6,26,9),i.target.position.set(0,0,0),i.castShadow=this.quality!=="low";let s=this.quality==="high"?2048:1024;i.shadow.mapSize.set(s,s);let a=i.shadow.camera;a.left=-17,a.right=17,a.top=12,a.bottom=-12,a.near=5,a.far=60,i.shadow.bias=-2e-4,i.shadow.normalBias=.025,i.shadow.radius=4,t.add(i,i.target),this.sun=i;for(let o of[1,-1]){let l=new gr(12571903,.55);l.position.set(o*30,14,0),t.add(l)}}buildFloor(){let t=this.quality==="low"?72:this.quality==="medium"?100:128,e=pu(t),n=new dn({map:e.map,bumpMap:e.bumpMap,bumpScale:.35,roughnessMap:e.roughnessMap,roughness:1,metalness:0,clearcoat:.35,clearcoatRoughness:.32,envMapIntensity:.9}),i=new nt(new Re(Hi,Vi),n);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,this.scene.add(i);let s=new nt(new Re(80,70),new Qt({color:1382175,roughness:.9}));s.rotation.x=-Math.PI/2,s.position.y=-.02,s.receiveShadow=!0,this.scene.add(s);let a=new Qt({color:789778,roughness:.6}),o=.12,l=[[Hi+o*2,o,0,Vi/2+o/2],[Hi+o*2,o,0,-Vi/2-o/2],[o,Vi,Hi/2+o/2,0],[o,Vi,-Hi/2-o/2,0]];for(let[c,h,d,u]of l){let f=new nt(new oe(c,.03,h),a);f.position.set(d,0,u),this.scene.add(f)}}buildCourtside(){let t=this.scene,e=Vt.HALF_L+Vt.WALL_PAD,n=Vt.HALF_W+Vt.WALL_PAD,i=.85;this.ledTex=[];let s=(d,u,f,g,x)=>{let m=gu(x,d);this.ledTex.push(m);let p=new ve,_=new nt(new We(d,i,.3,2,.05),new Qt({color:723984,roughness:.5,metalness:.3}));_.position.y=i/2,_.castShadow=!0;let b=new nt(new Re(d-.08,i-.16),new pe({map:m,toneMapped:!1}));b.position.set(0,i/2,.152),p.add(_,b),p.position.set(u,0,f),p.rotation.y=g,t.add(p)};s(e*2+4.8,0,-n-.15,0,"NO REFS  \u2022  NO RULES  \u2022  JUST BUCKETS  \u2022  "),s(e*2+4.8,0,n+.15,Math.PI,"ILLEGAL BASKETBALL  \u2022  THE LEAGUE WITHOUT A RULEBOOK  \u2022  "),s(n*2+.6,e+2.1,0,-Math.PI/2,"AWAY  \u2022  AWAY  \u2022  AWAY  \u2022  "),s(n*2+.6,-e-2.1,0,Math.PI/2,"HOME  \u2022  HOME  \u2022  HOME  \u2022  ");let a=new Qt({color:1381916,roughness:.45,metalness:.2}),o=new nt(new We(8,.95,.9,2,.06),a);o.position.set(0,.48,-n-1.25),o.castShadow=!0,o.receiveShadow=!0,t.add(o);let l=d=>new Qt({color:te[d].dark,roughness:.6}),c=new We(.52,.12,.5,2,.04),h=new We(.52,.62,.1,2,.04);for(let d of[0,1]){let f=new An(c,l(d),7),g=new An(h,l(d),7),x=new Ht;for(let m=0;m<7;m++){let p=(d===0?-1:1)*(6+m*.62);x.makeTranslation(p,.48,-n-1.35),f.setMatrixAt(m,x),x.makeTranslation(p,.85,-n-1.62),g.setMatrixAt(m,x)}f.castShadow=g.castShadow=!0,t.add(f,g)}}buildStands(){let t=this.scene,e=13,n=.42,i=.86,s=.56,a=[],o=Vt.HALF_L+Vt.WALL_PAD,l=Vt.HALF_W+Vt.WALL_PAD;a.push({x:0,z:-(l+3.1),len:34,ang:0,side:"long"}),a.push({x:0,z:l+2.2,len:34,ang:Math.PI,side:"long"}),a.push({x:o+3.4,z:0,len:22,ang:-Math.PI/2,side:"end"}),a.push({x:-o-3.4,z:0,len:22,ang:Math.PI/2,side:"end"});let c=[],h=new Qt({color:2764088,roughness:.85}),d=new oe(1,1,1),u=new An(d,h,a.length*e),f=new Ht,g=new hn,x=new R,m=new R,p=new R(0,1,0),_=0;for(let O of a){let L={x:O.x===0?0:Math.sign(O.x),z:O.z===0?0:Math.sign(O.z)},X={x:L.z!==0?1:0,z:L.x!==0?1:0};for(let B=0;B<e;B++){let st=(B+1)*n,lt=B*i,Mt=O.x+L.x*lt,J=O.z+L.z*lt;g.setFromAxisAngle(p,L.x!==0?Math.PI/2:0),x.set(O.len+B*.9,st,i),m.set(Mt,st/2,J),f.compose(m,g,x),u.setMatrixAt(_++,f);let bt=Math.floor((O.len+B*.9-1)/s);for(let q=0;q<bt;q++){let tt=(q-(bt-1)/2)*s;Math.abs(tt)<.7&&B>2||c.push({x:Mt+X.x*tt,y:st,z:J+X.z*tt,face:Math.atan2(-L.x,-L.z),sec:O,r:B})}}}u.receiveShadow=!0,t.add(u);let b=pv(),v=new An(b,new Qt({roughness:.55}),c.length),I=new Dt;c.forEach((O,L)=>{g.setFromAxisAngle(p,O.face),m.set(O.x,O.y,O.z),f.compose(m,g,x.set(1,1,1)),v.setMatrixAt(L,f);let X=O.sec.x>0?te[1].dark:O.sec.x<0?te[0].dark:2830141;I.setHex(X).multiplyScalar(.75+O.r%2*.12),v.setColorAt(L,I)}),t.add(v);let w=c.filter(()=>this.rng.chance(this.quality==="low"?.5:.72)),A=new Rn(.2,.32,2,7),C=new Se(.13,8,6),M=new An(A,new Qt({roughness:.8}),w.length),y=new An(C,new Qt({roughness:.7}),w.length),P=[2830141,3883606,14474460,1908002,7041664,9133628,3497531],D=[15845538,14262387,11893327,9066292,6175266];w.forEach((O,L)=>{let X=O.sec.x!==0?O.sec.x>0?1:0:this.rng.chance(.5)?0:1;I.setHex(this.rng.chance(.4)?te[X].color:P[this.rng.next()*P.length|0]),M.setColorAt(L,I),I.setHex(D[this.rng.next()*D.length|0]),y.setColorAt(L,I),O.phase=this.rng.range(0,Math.PI*2),O.excite=this.rng.range(.4,1)}),M.castShadow=!1,t.add(M,y),this.crowd={fans:w,torsoMesh:M,headMesh:y,frame:0},this.updateCrowd(0,!0);let F=new Qt({color:10134453,metalness:.9,roughness:.3}),H=new dn({color:10466508,transparent:!0,opacity:.18,roughness:.05,metalness:0,depthWrite:!1});for(let O of a){let L={x:O.x===0?0:Math.sign(O.x),z:O.z===0?0:Math.sign(O.z)},X=new ve,B=new nt(new Ke(.03,.03,O.len,8),F);B.rotation.z=Math.PI/2,B.position.y=n+.95;let st=new nt(new Re(O.len,.9),H);st.position.y=n+.5,X.add(B,st),X.position.set(O.x-L.x*.5,0,O.z-L.z*.5),L.x!==0&&(X.rotation.y=Math.PI/2),this.scene.add(X)}}updateCrowd(t,e=!1){let n=this.crowd;if(n.frame++,!e&&n.frame%2)return;let i=new Ht,s=new hn,a=new R,o=new R(1,1,1),l=new R(0,1,0);n.fans.forEach((c,h)=>{let d=this.hype*c.excite,u=Math.max(0,Math.sin(t*(5+c.excite*3)+c.phase))*(.015+d*.28),f=d>.45?.32:0;s.setFromAxisAngle(l,c.face+Math.sin(t*.7+c.phase)*.15),a.set(c.x,c.y+.42+u+f,c.z),i.compose(a,s,o),n.torsoMesh.setMatrixAt(h,i),a.y+=.42,i.compose(a,s,o),n.headMesh.setMatrixAt(h,i)}),n.torsoMesh.instanceMatrix.needsUpdate=!0,n.headMesh.instanceMatrix.needsUpdate=!0}buildRoof(){let t=this.scene,e=new Qt({color:1053210,roughness:.9}),n=(g,x,m,p,_,b,v=e)=>{let I=new nt(new oe(g,x,m),v);return I.position.set(p,_,b),t.add(I),I};n(60,14,1,0,7,-28),n(60,14,1,0,7,27),n(1,14,60,33,7,0),n(1,14,60,-33,7,0);let i=new Qt({color:1777192,emissive:3811864,emissiveIntensity:.6,roughness:.7});n(56,1.4,.3,0,7.6,-27.3,i),n(56,1.4,.3,0,7.6,26.3,i);let s=gu("ILLEGAL BASKETBALL  \u2022  HOME  vs  AWAY  \u2022  ",60);this.ledTex.push(s);let a=new pe({map:s,toneMapped:!1});for(let[g,x,m,p]of[[56,0,-27.4,0],[56,0,26.4,Math.PI],[52,32.4,0,-Math.PI/2],[52,-32.4,0,Math.PI/2]]){let _=new nt(new Re(g,.7),a);_.position.set(x,6.4,m),_.rotation.y=p,t.add(_)}let o=new nt(new Re(70,60),new Qt({color:460812,roughness:1}));o.rotation.x=Math.PI/2,o.position.y=22,t.add(o);let l=new Qt({color:2830138,metalness:.7,roughness:.45}),c=new pe({color:16774886,toneMapped:!1});for(let g of[-8,0,8]){let x=new nt(new oe(46,.5,.5),l);x.position.set(0,19,g),t.add(x);for(let m=-20;m<=20;m+=5){let p=new nt(new Ke(.32,.4,.4,12),l);p.position.set(m,18.6,g);let _=new nt(new Ba(.28,16),c);_.rotation.x=Math.PI/2,_.position.set(m,18.39,g),t.add(p,_)}}this.boardCanvas=document.createElement("canvas"),this.boardCanvas.width=512,this.boardCanvas.height=256,this.boardTex=new Pe(this.boardCanvas),this.boardTex.colorSpace=fe;let h=new ve,d=new nt(new We(6.4,3.4,6.4,3,.15),new Qt({color:855571,metalness:.5,roughness:.4}));h.add(d);let u=new pe({map:this.boardTex,toneMapped:!1});for(let g=0;g<4;g++){let x=new nt(new Re(6,3),u);x.position.set(Math.sin(g*Math.PI/2)*3.21,0,Math.cos(g*Math.PI/2)*3.21),x.rotation.y=g*Math.PI/2,h.add(x)}let f=new nt(new tn(4.2,.12,8,48),new pe({color:16742938,toneMapped:!1}));f.rotation.x=Math.PI/2,f.position.y=-1.9,h.add(f),h.position.set(0,15.5,0),t.add(h),this.drawScoreboard([0,0],"2:00")}drawScoreboard(t,e,n=""){let i=this.boardCanvas.getContext("2d"),s=512,a=256;i.fillStyle="#05060a",i.fillRect(0,0,s,a),i.fillStyle=mu(te[0].color),i.fillRect(0,0,s/2-2,46),i.fillStyle=mu(te[1].color),i.fillRect(s/2+2,0,s/2-2,46),i.fillStyle="#fff",i.font='700 30px "Big Shoulders Display", "Arial Narrow", Impact, sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("HOME",s/4,24),i.fillText("AWAY",3*s/4,24),i.font='700 118px "Big Shoulders Display", "Arial Narrow", Impact, sans-serif',i.fillText(String(t[0]),s/4,132),i.fillText(String(t[1]),3*s/4,132),i.fillStyle="#ffcf3d",i.font='700 44px "Big Shoulders Display", "Arial Narrow", Impact, sans-serif',i.fillText(e,s/2,220),n&&(i.fillStyle="#fff",i.font='600 22px "Barlow", Arial, sans-serif',i.fillText(n,s/2,176)),this.boardTex.needsUpdate=!0}cheer(t=1){this.hype=Math.min(1,this.hype+t)}update(t){this.time+=t,this.hype=Math.max(0,this.hype-t*.45),this.updateCrowd(this.time);for(let e of this.ledTex)e.offset.x=(e.offset.x+t*.02)%1;if(this.atmos.visible){for(let n of this.beams)n.material.opacity=.055+.025*Math.sin(this.time*.6+n.userData.phase);let e=this.dust.geometry.attributes.position;for(let n=0;n<e.count;n++){let i=e.getY(n)+t*.12;i>12&&(i=.5),e.setY(n,i),e.setX(n,e.getX(n)+Math.sin(this.time*.3+n)*t*.05)}e.needsUpdate=!0}}};function pv(){let r=new oe(.46,.08,.42);r.translate(0,.06,.02);let t=new oe(.46,.42,.07);return t.translate(0,.28,-.2),no([r,t])}function gu(r,t){let e=document.createElement("canvas");e.width=2048,e.height=64;let n=e.getContext("2d");n.fillStyle="#04050a",n.fillRect(0,0,e.width,e.height),n.font='700 40px "Big Shoulders Display", "Arial Narrow", Impact, sans-serif',n.textBaseline="middle";let i=n.measureText(r).width,s=Math.max(1,Math.round(e.width/i));s>1&&s%2&&(s-=1),n.setTransform(e.width/(s*i),0,0,1,0,0);for(let o=0;o<s;o++)n.fillStyle=o%2?"#ff7a1a":"#ffffff",n.fillText(r,o*i,34);let a=new Pe(e);return a.colorSpace=fe,a.wrapS=ei,a.anisotropy=4,a.repeat.set(Math.max(1,t/22),1),a}var mv=20,gv=7,so=class{constructor(t,e){this.hoop=e;let n=e.dir,i=new ve,s=te[1-e.attackTeam],a=new Qt({color:s.dark,roughness:.75}),o=new Qt({color:2303535,roughness:.35,metalness:.8}),l=new Qt({color:13225688,roughness:.3,metalness:.9}),c=L=>(L.castShadow=!0,L.receiveShadow=!0,L),h=e.boardX+n*2.15,d=c(new nt(new We(1.5,1.05,1.9,3,.18),a));d.position.set(h+n*.25,.53,0);let u=new nt(new Re(1,.4),new pe({map:vv(s),transparent:!0}));u.position.set(h+n*.25-n*.76,.6,0),u.rotation.y=n>0?-Math.PI/2:Math.PI/2;let f=c(new nt(new We(.3,3.2,.3,2,.06),a));f.position.set(h,2.6,0),f.rotation.z=n*.12;let g=Math.abs(h-e.boardX)+.2,x=c(new nt(new We(g,.2,.24,2,.05),o));x.position.set((h+e.boardX)/2+n*.15,3.95,0);let m=c(new nt(new Ke(.05,.05,1.6,8),o));m.position.set((h+e.boardX)/2+n*.25,3.45,0),m.rotation.z=n*1,i.add(d,u,f,x,m);let p=zt.BOARD_W,_=zt.BOARD_TOP-zt.BOARD_BOTTOM,b=(zt.BOARD_TOP+zt.BOARD_BOTTOM)/2,v=(e.board.x0+e.board.x1)/2,I=new nt(new oe(zt.BOARD_THICK,_,p),new dn({color:15135743,metalness:0,roughness:.04,transparent:!0,opacity:.22,envMapIntensity:1.6,depthWrite:!1}));I.position.set(v,b,0),I.renderOrder=3,i.add(I);let w=.05;for(let[L,X,B,st]of[[p+w,w,zt.BOARD_TOP,0],[p+w,w,zt.BOARD_BOTTOM,0],[w,_,b,p/2],[w,_,b,-p/2]]){let lt=c(new nt(new oe(zt.BOARD_THICK+.03,X,L),l));lt.position.set(v,B,st),i.add(lt)}let A=c(new nt(new We(.14,.12,p+.08,2,.04),a));A.position.set(v,zt.BOARD_BOTTOM-.06,0),i.add(A);let C=new pe({color:16777215}),M=e.boardX-n*.002,y=(L,X,B,st)=>{let lt=new nt(new Re(L,X),C);lt.position.set(M,B,st),lt.rotation.y=n>0?-Math.PI/2:Math.PI/2,i.add(lt)};y(.59,.05,zt.RIM_Y+.45,0),y(.59,.05,zt.RIM_Y+0,0),y(.05,.45,zt.RIM_Y+.225,.295),y(.05,.45,zt.RIM_Y+.225,-.295);let P=new Qt({color:16734740,roughness:.32,metalness:.75});this.rimGroup=new ve;let D=c(new nt(new tn(zt.RIM_R,.018,12,48),P));D.rotation.x=Math.PI/2,this.rimGroup.add(D);for(let L=0;L<12;L++){let X=L/12*Math.PI*2,B=new nt(new oe(.012,.03,.012),P);B.position.set(Math.cos(X)*zt.RIM_R,-.02,Math.sin(X)*zt.RIM_R),this.rimGroup.add(B)}let F=c(new nt(new oe(zt.RIM_OFFSET+.05,.05,.24),P));F.position.set(n*(zt.RIM_R+zt.RIM_OFFSET/2),-.01,0);let H=c(new nt(new oe(.03,.22,.28),P));H.position.set(n*(zt.RIM_R+zt.RIM_OFFSET),-.06,0),this.rimGroup.add(F,H),this.rimGroup.position.set(e.rim.x,e.rim.y,e.rim.z),i.add(this.rimGroup),this.netGeo=new Ke(zt.RIM_R,zt.RIM_R*.62,zt.NET_DEPTH,mv,gv-1,!0),this.netGeo.translate(0,-zt.NET_DEPTH/2,0),this.netBase=this.netGeo.attributes.position.array.slice();let O=new nt(this.netGeo,new Qt({map:xv(),alphaTest:.45,side:ze,roughness:.9,transparent:!1}));O.castShadow=!0,O.position.set(e.rim.x,e.rim.y-.01,e.rim.z),i.add(O),this.ripple=0,t.add(i),this.group=i}swish(t=1){this.ripple=Math.min(1.5,this.ripple+t)}update(t=1/60){let e=this.hoop;this.rimGroup.position.y=e.rim.y+Math.sin(performance.now()*.08)*e.rimShake*.03,this.ripple=Math.max(0,this.ripple-t*1.4);let n=this.netGeo.attributes.position,i=this.netBase,s=Math.max(-.2,Math.min(.2,e.netSway.x*.12)),a=Math.max(-.2,Math.min(.2,e.netSway.z*.12)),o=performance.now()*.001;for(let l=0;l<n.count;l++){let c=i[l*3],h=i[l*3+1],d=i[l*3+2],u=-h/zt.NET_DEPTH,f=this.ripple*Math.sin(u*7-o*22)*.18*u,x=1-this.ripple*.18*Math.sin(Math.PI*u)+f;n.setXYZ(l,c*x+s*u,h*(1+this.ripple*.12*u),d*x+a*u)}n.needsUpdate=!0}};function xv(){let r=document.createElement("canvas");r.width=256,r.height=128;let t=r.getContext("2d");t.clearRect(0,0,256,128),t.strokeStyle="#ffffff",t.lineWidth=3.2;let e=10,n=4,i=256/e,s=128/n;for(let o=-e;o<=e*2;o++)t.beginPath(),t.moveTo(o*i,0),t.lineTo((o+n)*i,128),t.stroke(),t.beginPath(),t.moveTo(o*i,0),t.lineTo((o-n)*i,128),t.stroke();t.fillStyle="#ffffff",t.fillRect(0,0,256,5);let a=new Pe(r);return a.colorSpace=fe,a.wrapS=ei,a}function vv(r){let t=document.createElement("canvas");t.width=256,t.height=100;let e=t.getContext("2d");e.fillStyle="#ffffff",e.font='italic 700 64px "Big Shoulders Display", "Arial Narrow", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("ILLEGAL",128,52);let n=new Pe(t);return n.colorSpace=fe,n}function xu(r,t,e,n={}){let i=document.createElement("canvas");i.width=r,i.height=t;let s=i.getContext("2d");e(s,r,t);let a=new Pe(i);return a.colorSpace=fe,a.anisotropy=n.aniso??8,n.repeat&&(a.wrapS=a.wrapT=ei,a.repeat.set(...n.repeat)),a}var $y=Vt.HALF_L*2+3,Xy=Vt.HALF_W*2+3;function vu(){return xu(128,128,(r,t)=>{let e=r.createLinearGradient(0,0,0,t);e.addColorStop(0,"#ffe066"),e.addColorStop(1,"#ffab1a"),r.fillStyle=e,r.fillRect(0,0,t,t),r.strokeStyle="#9a5a00",r.lineWidth=10,r.strokeRect(5,5,t-10,t-10),r.font='900 92px "Arial Black", Impact, sans-serif',r.textAlign="center",r.textBaseline="middle",r.lineWidth=10,r.strokeStyle="#9a5a00",r.strokeText("?",t/2,t/2+6),r.fillStyle="#ffffff",r.fillText("?",t/2,t/2+6)})}function yu(r,t){return xu(256,64,(e,n,i)=>{e.font='700 30px "Barlow Condensed", "Arial Narrow", sans-serif';let s=Math.min(n-24,e.measureText(r).width+30),a=(n-s)/2;e.fillStyle="rgba(11,13,18,0.82)",e.fillRect(a,12,s,40),e.fillStyle=t,e.fillRect(a,12,5,40),e.textAlign="center",e.textBaseline="middle",e.fillStyle="#f5f7fa",e.fillText(r,n/2+3,i/2+1)},{aniso:1})}var $c=(r,t,e)=>r+(t-r)*e,Gi=(r,t,e)=>r<t?t:r>e?e:r,_u=[1578e4,14196852,11827790,9132598,6963496,4860955],yv=[1445900,2759184,723723,4007444,1906452],_v=["short","fade","waves","headband","braids","buzz","bald"],bv=[{jersey:15987180,trim:14163764,num:"#d81f34",numStroke:"#ffffff",shorts:15987180,stripe:14163764,sock:16777215},{jersey:1254490,trim:3116287,num:"#ffffff",numStroke:"#2f8cff",shorts:1254490,stripe:3116287,sock:1053468}],Mv=[[16777215,14163764],[1119e3,16777215],[16777215,1119e3],[14163764,16777215],[3116287,16777215],[1119e3,16764733]];function bu(r,t,e,n,i=.05,s=16){let a=[],o=r.map(p=>p[1]),l=Math.min(...o),c=Math.max(...o),h=Math.ceil((c-l)/.018),d=p=>{for(let _=0;_<r.length-1;_++){let[b,v]=r[_],[I,w]=r[_+1];if(p<=v&&p>=w||p>=v&&p<=w)return b+(I-b)*((p-v)/(w-v||1))}return r[r.length-1][0]};a.push(new ht(.001,l-.004));for(let p=0;p<=h;p++){let _=l+(c-l)*p/h;a.push(new ht(d(_),_))}a.push(new ht(.001,c+.004));let u=new As(a,s),f=u.attributes.position,g=new Uint16Array(f.count*4),x=new Float32Array(f.count*4);for(let p=0;p<f.count;p++){let _=f.getY(p),b=Gi((t+i-_)/(2*i),0,1);g[p*4]=0,g[p*4+1]=1,x[p*4]=1-b,x[p*4+1]=b}u.setAttribute("skinIndex",new Ms(g,4)),u.setAttribute("skinWeight",new ee(x,4));let m=new Ca(u,n);return m.castShadow=!0,m.receiveShadow=!0,m.frustumCulled=!1,m.userData.bones=e,m}function Us(r,t=18){return new As(r.map(([e,n])=>new ht(e,n)),t)}function Sv(r){let t=[];r.traverse(e=>{e.isMesh||t.push(e)});for(let e of t){let n=new Map;for(let i of e.children)!i.isMesh||i.isInstancedMesh||i.isSkinnedMesh||!i.visible||(n.has(i.material)||n.set(i.material,[]),n.get(i.material).push(i));for(let[i,s]of n){if(s.length<2)continue;let a=s.map(c=>{c.updateMatrix();let h=c.geometry.index?c.geometry.toNonIndexed():c.geometry.clone();for(let d of Object.keys(h.attributes))["position","normal","uv"].includes(d)||h.deleteAttribute(d);return h.applyMatrix4(c.matrix),h}),o=no(a);if(!o)continue;let l=new nt(o,i);l.castShadow=s.some(c=>c.castShadow),l.receiveShadow=!0;for(let c of s)e.remove(c),c.geometry.dispose();e.add(l)}}}var Mr=null;function Ev(){if(Mr)return Mr;let r=document.createElement("canvas");r.width=r.height=128;let t=r.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);return e.addColorStop(0,"rgba(0,0,0,0.75)"),e.addColorStop(.5,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Mr=new Pe(r),Mr}function Mu(r,t,e){let n=document.createElement("canvas");n.width=256,n.height=256;let i=n.getContext("2d");i.textAlign="center",i.textBaseline="middle",e&&(i.font='700 38px "Big Shoulders Display", "Arial Narrow", Impact, sans-serif',i.fillStyle=t.num,i.fillText(e,128,46)),i.font='700 132px "Big Shoulders Display", "Arial Narrow", Impact, sans-serif',i.lineWidth=12,i.strokeStyle=t.numStroke,i.lineJoin="round",i.strokeText(r,128,e?156:132),i.fillStyle=t.num,i.fillText(r,128,e?156:132);let s=new Pe(n);return s.colorSpace=fe,s.anisotropy=4,s}var Sr=class r{constructor(t,e,n={}){this.p=e;let i=te[e.team],s=bv[e.team],a=e.look??e.id,o=Y=>(Y=Y^61^Y>>>16,Y=Math.imul(Y,668265261),Y^=Y>>>15,Y>>>0),l=(Y,j)=>Y[o(a*31+j*977)%Y.length],c=n.skin??_u[(e.id*4+1)%_u.length],h=l(yv,3),d=n.style??l(_v,11),u=n.shoe??l(Mv,7),f=n.gear||"none",g={guard:[.93,.93,.975],wing:[1,1,1],big:[1.1,1.12,1.025]},x=n.body||["guard","wing","wing","big"][o(a+21)%4],m=n.body?0:(o(a+5)%100/100-.5)*.06,p=g[x][0]+m,_=g[x][1]+m*.5;this.heightK=g[x][2];let b=n.face||["none","none","stubble","goatee","beard"][o(a+9)%5],v=(Y,j=.6,St={})=>new Qt({color:Y,roughness:j,...St}),I=new dn({color:c,roughness:.52,sheen:.25,sheenColor:new Dt(16767426),sheenRoughness:.6}),w=Y=>new dn({color:Y,roughness:.78,sheen:.8,sheenColor:new Dt(16777215),sheenRoughness:.55}),A=w(s.jersey),C=w(s.shorts),M=v(s.trim,.6),y=v(s.sock,.85),P=v(u[0],.35,{metalness:.05}),D=v(u[1],.4),F=v(15921906,.5),H=v(h,.9),O=Y=>(Y.castShadow=!0,Y.receiveShadow=!0,Y),L=(Y,j)=>O(new nt(Y,j)),X=new ve,B=new ve;X.add(B);let st=new ve;st.position.y=1.02,B.add(st);let lt=[];this.legs=[-1,1].map(Y=>{let j=new Fn;j.position.set(0,-.04,Y*.105*p);let St=_,it=new Fn;it.position.y=-.47;let ft=bu([[.084*St,.02],[.09*St,-.08],[.089*St,-.2],[.08*St,-.33],[.066*St,-.43],[.058*St,-.48],[.055*St,-.53],[.064*St,-.62],[.068*St,-.69],[.058*St,-.78],[.045*St,-.87],[.041*St,-.92]],-.47,[j,it],I,.055);j.add(ft),lt.push(ft);let _t=L(Us([[.112,0],[.12,.16],[.124,.34],[.122,.4],[.001,.41]],16),C);_t.rotation.z=Math.PI,_t.position.y=.06;let Lt=new nt(new oe(.03,.34,.012),M);Lt.position.set(0,-.12,Y*.134);let pt=L(new Se(.045*St,12,10),I);pt.scale.set(.8,1.1,1),pt.position.set(.028*St,.005,0);let Wt=L(new Ke(.05,.046,.15,14),y);Wt.position.y=-.36;let Nt=new Fn;Nt.position.y=-.45;let ne=L(new We(.3,.045,.12,2,.02),F);ne.position.set(.05,-.065,0);let k=L(new Se(.065,14,10),P);k.scale.set(1.25,.72,.9),k.position.set(.13,-.03,0);let ct=L(new We(.22,.11,.112,3,.04),P);ct.position.set(.02,-.005,0);let $=L(new Ke(.058,.064,.08,14),P);$.position.set(-.02,.05,0);let K=new nt(new We(.12,.05,.116,2,.02),D);return K.position.set(0,-.02,0),Nt.add(ne,k,ct,$,K),it.add(pt,Wt,Nt),j.add(_t,Lt,it),st.add(j),{hip:j,knee:it,ankle:Nt}});let Mt=L(Us([[.17,0],[.18,.08],[.17,.16],[.001,.17]],20),C);Mt.scale.set(.82,1,1.1*p),Mt.position.y=-.1;let J=L(new tn(.168,.02,8,24),C);J.rotation.x=Math.PI/2,J.scale.set(.8,1.08*p,1),J.position.y=.065,st.add(Mt,J);let bt=new ve;bt.position.y=.06,st.add(bt);let tt=L(Us([[.001,0],[.15,0],[.152,.08],[.17,.2],[.19,.3],[.198,.36],[.19,.41],[.165,.455],[.12,.495],[.07,.525],[.001,.54]],22),I);tt.scale.set(.7,1,1.28*p);let ut=L(Us([[.164,-.02],[.163,.08],[.181,.2],[.2,.3],[.207,.36],[.2,.41],[.18,.445]],22),A);ut.material.side=ze,ut.scale.set(.71,1,1.3*p);for(let Y of[-1,1]){let j=L(new tn(.115,.03,6,14,Math.PI),A);j.scale.set(1.08,.8,.9),j.position.set(0,.42,Y*.13*p),bt.add(j)}let rt=O(new nt(new tn(.075,.014,6,18),M));rt.rotation.x=Math.PI/2,rt.position.y=.46,rt.scale.set(1.15,1.25,1),rt.visible=!1;let yt=O(new nt(new tn(.164,.012,6,24),M));yt.rotation.x=Math.PI/2,yt.scale.set(.71,1.33*p,1),yt.position.y=-.015,yt.visible=!1,bt.add(tt,ut);let Rt=n.number??String([23,7,11,0,3,30,8,24][e.id%8]),Ot=new nt(new Re(.22,.22),new Qt({map:Mu(Rt,s),transparent:!0,roughness:.8,depthWrite:!1}));Ot.position.set(.148,.27,0),Ot.rotation.y=Math.PI/2;let he=new nt(new Re(.3,.3),new Qt({map:Mu(Rt,s,n.you??e.isHuman?"YOU":e.name),transparent:!0,roughness:.8,depthWrite:!1}));he.position.set(-.148,.28,0),he.rotation.y=-Math.PI/2,bt.add(Ot,he),this.arms=[-1,1].map(Y=>{let j=new Fn;j.position.set(0,.43,Y*.235*p);let St=L(new Se(.075,14,10),I);St.scale.set(1.05,1.1,1);let it=O(new nt(new tn(.07,.012,6,16),M));it.position.set(0,-.02,-Y*.02),it.rotation.y=Math.PI/2,it.visible=!1;let ft=new Fn;ft.position.y=-.29;let _t=_,Lt=bu([[.058*_t,0],[.064*_t,-.06],[.068*_t,-.13],[.061*_t,-.2],[.05*_t,-.26],[.044*_t,-.29],[.045*_t,-.33],[.051*_t,-.39],[.047*_t,-.46],[.036*_t,-.53],[.032*_t,-.56]],-.29,[j,ft],I,.045);j.add(Lt),lt.push(Lt);let pt=new Fn;pt.position.y=-.27;let Wt=L(new Se(.05,12,10),I);Wt.scale.set(.5,1,.85),Wt.position.y=-.05;let Nt=[Wt];for(let k=0;k<4;k++){let ct=(k-1.5)*.019,$=[.042,.05,.048,.038][k],K=L(new Rn(.0095,$,2,6),I);K.position.set(.008,-.105-$*.3,ct),K.rotation.z=.28,Nt.push(K)}let ne=L(new Rn(.012,.04,2,6),I);if(ne.position.set(.026,-.05,-Y*.04),ne.rotation.set(Y*.6,0,.8),pt.add(...Nt,ne),ft.add(pt),j.add(St,ft),(f==="sleeve"||f==="both")&&Y>0){let k=v(1382173,.7),ct=L(Us([[.062,0],[.066,.07],[.07,.14],[.063,.21],[.05,.27],[.044,.3]],14),k);ct.rotation.z=Math.PI,ct.position.y=-.02;let $=L(Us([[.047,0],[.054,.1],[.049,.18],[.04,.24]],14),k);$.rotation.z=Math.PI,j.add(ct),ft.add($)}if(f==="bands"||f==="both"){let k=L(new Ke(.043,.043,.06,14,1),M);k.position.y=-.23,ft.add(k)}return bt.add(j),{shoulder:j,elbow:ft,wrist:pt,side:Y}});let Gt=new ve;Gt.position.y=.5;let be=L(new Ke(.052,.062,.12,14),I);be.position.y=.04;let z=L(new Se(.12,16,10),I);z.scale.set(.62,.42,1.7*p),z.position.y=-.03,Gt.add(be,z);let ke=new ve;ke.position.y=.155;let Jt=L(new Se(.1,24,18),I);Jt.scale.set(1,1.1,.9),Jt.position.y=.03;let jt=L(new Se(.075,18,12),I);jt.scale.set(1.05,.85,1.05),jt.position.set(.02,-.045,0);let Pt=L(new Se(.03,10,8),I);Pt.position.set(.075,-.085,0);let de=L(new pr(.018,.045,8),I);de.rotation.z=-Math.PI/2+.25,de.position.set(.1,-0,0);let It=L(new Rn(.014,.1,3,6),I);It.rotation.x=Math.PI/2,It.position.set(.082,.035,0);let T=[-1,1].map(Y=>{let j=L(new Se(.026,10,8),I);return j.scale.set(.7,1.2,.45),j.position.set(-.005,0,Y*.092),j}),S=v(1118481,.25),V=v(16052714,.3);this.eyes=[-1,1].map(Y=>{let j=new ve,St=new nt(new Se(.013,10,8),V);St.scale.set(.6,.7,1.15);let it=new nt(new Se(.0075,8,6),S);return it.position.x=.0065,j.add(St,it),j.position.set(.085,.018,Y*.035),j});let Q=[-1,1].map(Y=>{let j=new nt(new oe(.01,.008,.038),H);return j.position.set(.094,.044,Y*.036),j.rotation.x=Y*.12,j}),et=new nt(new Rn(.006,.03,3,6),v(6959913,.5));if(et.rotation.x=Math.PI/2,et.position.set(.088,-.052,0),ke.add(Jt,jt,Pt,de,It,...T,...this.eyes,...Q,et),b!=="none"){let Y=new Qt({color:h,roughness:.95,transparent:b==="stubble",opacity:b==="stubble"?.45:1});if(b==="beard"||b==="stubble"){let j=L(new Se(.079,18,12,Math.PI*.62,Math.PI*.76,Math.PI*.45,Math.PI*.42),Y);j.scale.set(1.06,.92,1.08),j.position.set(.02,-.045,0),ke.add(j)}if(b==="goatee"||b==="beard"){let j=L(new Se(.03,10,8),Y);j.scale.set(.7,1.05,1.1),j.position.set(.08,-.088,0);let St=L(new Rn(.007,.032,3,6),Y);St.rotation.x=Math.PI/2,St.position.set(.094,-.038,0),ke.add(j,St)}}this.addHair(ke,d,H,M),Gt.add(ke),bt.add(Gt),this.head=ke,B.scale.set(Zt.H/1.97,Zt.H/1.97*this.heightK,Zt.H/1.97),this.shadow=new nt(new Re(1.25,1.25),new pe({map:Ev(),transparent:!0,depthWrite:!1,opacity:.85})),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=1,t.add(this.shadow),this.ring=new nt(new si(.46,.53,40),new pe({color:i.ring,transparent:!0,opacity:n.you??e.isHuman?.95:.55,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.renderOrder=2,t.add(this.ring),this.passRing=new nt(new si(.6,.68,40),new pe({color:16764733,transparent:!0,opacity:.95,depthWrite:!1})),this.passRing.rotation.x=-Math.PI/2,this.passRing.visible=!1,t.add(this.passRing);let Z=n.tag??e.name;this.tag=new Ts(new Ni({map:yu(Z,i.css),depthTest:!1,transparent:!0}));let Et=n.you??e.isHuman;this.tag.scale.set(Et?1.2:.95,Et?.3:.24,1),this.tag.renderOrder=10,t.add(this.tag),this.root=X,this.body=B,Sv(X),X.updateMatrixWorld(!0);for(let Y of lt)Y.bind(new Pa(Y.userData.bones));this.buildAttachments(bt,v),this.pelvis=st,this.spine=bt,this.neck=Gt,t.add(X),this.anim={},this.t=Math.random()*10,this.phase=0,this.blinkT=2+Math.random()*3,this.scale=Zt.H/1.97,this.v=new R}dispose(){for(let e of[this.root,this.ring,this.passRing,this.tag,this.energyRing,this.shadow])e.parent?.remove(e);let t=new Set;for(let e of[this.root,this.ring,this.passRing,this.tag,this.energyRing,this.shadow])e.traverse(n=>{if(n.geometry&&n.geometry.dispose(),n.material)for(let i of[].concat(n.material))t.add(i)});for(let e of t)e.map&&e.map!==Mr&&e.map.dispose(),e.dispose()}addHair(t,e,n,i){let s=o=>(o.castShadow=!0,t.add(o),o),a=(o,l,c=.104)=>{let h=s(new nt(new Se(c,22,14,0,Math.PI*2,0,Math.PI*.55),n));return h.scale.set(1.02,o,.93),h.position.set(-.008,l,0),h};switch(e){case"short":a(1.15,.038);break;case"fade":a(1,.05,.1);break;case"waves":{a(1.12,.04);break}case"headband":{a(1.12,.04);let o=s(new nt(new tn(.098,.013,6,24),i));o.rotation.x=Math.PI/2,o.scale.set(1.02,.92,1),o.position.y=.06;break}case"braids":{a(1.15,.04);for(let o=0;o<6;o++){let l=s(new nt(new Rn(.011,.17,3,6),n));l.rotation.z=Math.PI/2-.15,l.position.set(0,.13-Math.abs(o-2.5)*.012,(o-2.5)*.026)}break}case"buzz":a(1.05,.04,.1015);break;case"bald":{let o=s(new nt(new tn(.098,.013,6,24),i));o.rotation.x=Math.PI/2,o.scale.set(1.02,.92,1),o.position.y=.055;break}}}buildAttachments(t,e){let n=new ve,i=e(14278120,.3,{metalness:.7});for(let a of[-.1,.1]){let o=new nt(new Ke(.075,.075,.36,14),i);o.position.set(-.2,.28,a);let l=new nt(new Se(.075,12,8),e(14163764,.4));l.position.set(-.2,.46,a),n.add(o,l)}this.flames=[-.1,.1].map(a=>{let o=new nt(new pr(.06,.32,10),new pe({color:16753183,transparent:!0,opacity:.9,blending:wn,depthWrite:!1}));return o.rotation.z=Math.PI,o.position.set(-.2,-.06,a),n.add(o),o}),n.visible=!1,t.add(n),this.jetpack=n;let s=new nt(new Se(.11,14,10),e(14688559,.3,{metalness:.15}));s.scale.set(1.15,1,.95),s.position.y=-.08,this.glove=new ve,this.glove.add(s),this.glove.visible=!1,this.arms[1].wrist.add(this.glove),this.ice=new nt(new oe(.75,2.1,.85),new dn({color:12577535,transparent:!0,opacity:.5,roughness:.05,metalness:0,clearcoat:1,emissive:2781082,emissiveIntensity:.2,depthWrite:!1})),this.ice.position.y=1,this.ice.visible=!1,this.body.add(this.ice),this.halo=new nt(new tn(.22,.03,8,24),e(14163764,.3,{emissive:14163764,emissiveIntensity:.6})),this.halo.rotation.x=Math.PI/2,this.halo.position.y=.95,this.halo.visible=!1,t.add(this.halo),this.energyRing=new nt(new si(.55,.68,40),new pe({color:4579450,transparent:!0,opacity:.6,blending:wn,depthWrite:!1,side:ze})),this.energyRing.rotation.x=-Math.PI/2,this.energyRing.visible=!1}static armIK(t,e){let s=Math.hypot(t,e);s=Gi(s,.08,.29+.36-.005);let a=Gi((s*s-.29*.29-.36*.36)/(2*.29*.36),-1,1),o=Math.acos(a);return{sh:Math.atan2(t,-e)-Math.atan2(.36*Math.sin(o),.29+.36*Math.cos(o)),el:o}}toShoulder(t,e,n,i){let s=this.p,a=this.scale,o=e-s.x,l=i-s.z,c=(o*Math.cos(s.yaw)+l*Math.sin(s.yaw))/a,h=(n-s.y)/a-(1.02+.06+.43)+this.anim.drop/a;return{fwd:c,up:h}}update(t,e,n,i={}){let s=this.p;this.t+=n,this.energyRing.parent||this.root.parent?.add(this.energyRing);let a=$c(s.px,s.x,t),o=$c(s.py,s.y,t),l=$c(s.pz,s.z,t);this.root.position.set(a,o,l),this.root.rotation.y=-s.yaw;let c=Math.max(0,o);this.shadow.position.set(a,.008,l),this.shadow.scale.setScalar(1-Math.min(.55,c/4)),this.shadow.material.opacity=.85*(1-Math.min(.7,c/3)),this.ring.position.set(a,.012,l),this.passRing.visible=!!i.passTarget,i.passTarget&&(this.passRing.position.set(a,.014,l),this.passRing.scale.setScalar(1+Math.sin(this.t*8)*.05)),this.tag.position.set(a,o+Zt.H+.42,l),this.blinkT-=n;let h=this.blinkT<.1;this.blinkT<0&&(this.blinkT=2.5+Math.random()*3);for(let J of this.eyes)J.scale.y=h?.15:1;let d=i.effects,u=s.state==="frozen";if(this.jetpack.visible=s.jetT>0,s.jetT>0){for(let J of this.flames)J.scale.set(1,.7+Math.random()*.7,1);d&&Math.random()<.7&&d.puff(a-s.fx*.3,o+.85,l-s.fz*.3,{color:16753183,add:!0,size:.4,life:.3,vy:-3})}if(this.glove.visible=s.state==="punch",this.ice.visible=u,this.halo.visible=s.magnetT>0,s.magnetT>0&&(this.halo.rotation.z+=n*6),this.energyRing.visible=s.energyT>0,s.energyT>0&&(this.energyRing.position.set(a,.02,l),this.energyRing.scale.setScalar(1+Math.sin(this.t*10)*.08)),s.fire>0&&d&&Math.random()<.5&&d.puff(a+(Math.random()-.5)*.4,o+.6+Math.random()*1.2,l+(Math.random()-.5)*.4,{color:Math.random()<.5?16742938:16765503,add:!0,size:.3,life:.4,vy:2}),s.landT>.1&&!this.landed&&d){this.landed=!0;for(let J=0;J<6;J++){let bt=J/6*Math.PI*2;d.puff(a+Math.cos(bt)*.25,.05,l+Math.sin(bt)*.25,{color:1322e4,size:.28,life:.35,vx:Math.cos(bt)*1.5,vz:Math.sin(bt)*1.5,vy:.2,opacity:.35})}}if(s.landT<=0&&(this.landed=!1),u)return;let f=s.onGround?Math.hypot(s.vx,s.vz):0,g=.7+f*.11;this.phase+=n*f*Math.PI/g;let x=this.phase,m=Math.min(1,f/7.5),p=Math.min(1,f/2.5),_=Gi(g/2.2,.25,.85)*p,b=e&&e.holder===s,v={hipL:Math.sin(x)*_,hipR:-Math.sin(x)*_,kneeL:-p*(.15+(.6+m*.7)*Math.max(0,Math.sin(x-1.2))),kneeR:-p*(.15+(.6+m*.7)*Math.max(0,Math.sin(x-1.2+Math.PI))),ankL:0,ankR:0,shL:-Math.sin(x)*_*.9,shR:Math.sin(x)*_*.9,elL:.25+m*1.1,elR:.25+m*1.1,wrL:0,wrR:0,wideL:.12,wideR:.12,abL:.03,abR:.03,spine:m*.18+(s.sprinting?.08:0)+(s.dashT>0?.25:0),twist:Math.sin(x)*.12*m,lean:0,roll:0,drop:Math.abs(Math.sin(x))*-.03*m+.03*m,head:0},I=!1,w=null,A=null,C=!s.onGround&&s.state!=="grapple"&&s.state!=="dunk";C&&s.jetT<=0&&Object.assign(v,{hipL:.75,kneeL:-1.2,hipR:.1,kneeR:-.55,spine:.05}),s.jetT>0&&Object.assign(v,{hipL:-.1,hipR:.15,kneeL:-.35,kneeR:-.6,shL:.5,shR:.5,elL:.9,elR:.9,spine:.15});let M=s.state;if(M==="shooting"){let J=Gi(1-s.stateT/.12,0,1);Object.assign(v,{hipL:.35*J+.1,hipR:.3*J+.05,kneeL:-.8*J-.2,kneeR:-.7*J-.2,spine:-.05,head:-.15}),w=A="ball"}else if(M==="layup")Object.assign(v,{hipL:1.3,kneeL:-1.5,hipR:-.25,kneeR:-.2,spine:.1}),A="ball",v.shL=1.2,v.elL=.8;else if(M==="dunk"){let J=s.dunk&&s.dunk.slammed,bt=J?Math.sin(this.t*13)*.45:0;Object.assign(v,{hipL:.45+bt,hipR:.7+bt*.7,kneeL:-.9,kneeR:-1.2,spine:J?-.05:.15,head:-.2}),J&&s.dunk?w=A={x:s.dunk.hoop.rim.x,y:s.dunk.hoop.rim.y,z:s.dunk.hoop.rim.z}:w=A="ball"}else if(M==="grapple")Object.assign(v,{shR:2.6,elR:.05,shL:-.5,elL:.6,hipL:-.4,hipR:.6,kneeL:-.5,kneeR:-1,spine:.35});else if(M==="punch"){let J=s.stateT<.24;Object.assign(v,J?{shR:-1,elR:1.9,shL:.6,elL:1.4,spine:-.1,twist:-.4,hipL:-.25,hipR:.35,kneeR:-.5}:{shR:1.6,elR:.05,shL:-.6,elL:1.6,spine:.35,twist:.45,hipL:.75,kneeL:-.5,hipR:-.55,kneeR:-.2})}else if(M==="stunned")s.stumbleT>0?Object.assign(v,{lean:0,roll:-.35,spine:-.35,drop:.1,hipL:-.3,hipR:.5,kneeL:-.2,kneeR:-.7,shL:1.6,shR:2.2,elL:.6,elR:.4,wideL:.6,wideR:.6,head:.2}):s.anklesT>0?Object.assign(v,{drop:.55,hipL:1.5,hipR:1.35,kneeL:-.3,kneeR:-.45,shL:-.7,shR:-.7,elL:.3,elR:.3,lean:.4}):s.slipT>0?Object.assign(v,{lean:1.2,drop:.35,hipL:1.5,hipR:1.1,kneeL:-.2,kneeR:-.6,shL:2.4,shR:2.6,elL:.4,elR:.4}):(I=!0,Object.assign(v,{shL:2.2,shR:1.9,wideL:.9,wideR:.9,lean:.45,hipL:.6,hipR:-.5,spine:-.2}));else if(s.swipe){let J=s.swipe,bt=.11,q=.1,tt=J.side>=0?1:-1,ut=tt>0?"R":"L",rt=tt>0?"L":"R";if(J.t<bt){let yt=J.t/bt;v.drop=.1+.05*yt,v.spine=.3,v.twist=-tt*.2*yt,v["hip"+ut]=.35,v["knee"+ut]=-.7,v["hip"+rt]=.4,v["knee"+rt]=-.8,v["sh"+ut]=.55,v["el"+ut]=1.35,v["sh"+rt]=.5,v["el"+rt]=.9}else{let yt={x:J.tx,y:J.ty,z:J.tz},Rt=J.resolved&&!J.hit,Ot=J.t>bt+q;v.drop=.14,v.spine=Rt?.62:Ot?.3:.5,v.twist=tt*(Rt?.45:.3),v.roll=Rt?-tt*.18:0,v["hip"+ut]=.9,v["knee"+ut]=-.55,v["hip"+rt]=-.3,v["knee"+rt]=-.35,v["sh"+rt]=.4,v["el"+rt]=.9,!Ot||Rt?tt>0?A=yt:w=yt:(v["sh"+ut]=.9,v["el"+ut]=1.1)}}else if(s.reachT>0&&!b&&s.onGround){let J=Gi(s.reachT/.55,0,1);Object.assign(v,{spine:.25+.35*J,drop:.12,roll:.15*J,hipL:.8,kneeL:-.6,hipR:-.2,kneeR:-.4,shR:1+.4*J,elR:.3,shL:.6,elL:.9,wideL:.5})}else if(s.strippedT>0&&!b){if(Object.assign(v,{spine:.32,drop:.08,shL:1.05,shR:1.15,elL:.35,elR:.3,wideL:.55,wideR:.55,head:.25,hipL:.4,kneeL:-.5,hipR:.1}),e&&!e.holder){let J=Math.atan2(e.z-s.z,e.x-s.x)-s.yaw;v.twist=Gi(Math.atan2(Math.sin(J),Math.cos(J)),-.8,.8)}}else if(s.passT>0)Object.assign(v,{shL:1.45,shR:1.45,elL:.1,elR:.1,wrL:.5,wrR:.5,spine:.2});else if(i.celebrate){let J=Math.abs(Math.sin(this.t*8));Object.assign(v,{shL:2.9,elL:.2,shR:1.3+J*1.5,elR:1-J*.8,spine:-.1,head:-.2})}else if(s.shootLock>0)Object.assign(v,{shR:2.75,elR:.12,wrR:1.2,shL:2.3,elL:.6,wrL:.4});else if(b&&s.onGround){v.spine+=.18,v.drop+=.08,v.hipL+=.15,v.hipR+=.15,v.kneeL-=.25,v.kneeR-=.25;let J={x:e.x,y:Math.max(e.y+.12,.72),z:e.z};s.hand>0?(A=J,v.shL=.7,v.elL=1.1,v.wideL=.35):(w=J,v.shR=.7,v.elR=1.1,v.wideR=.35),s.moveT>0&&(v.roll=-s.moveSide*.25,v.drop+=.06)}else if(b)w=A="ball";else if(s.stance&&s.onGround){let J=-Math.sin(s.yaw),bt=Math.cos(s.yaw),q=s.vx*J+s.vz*bt,tt=s.vx*Math.cos(s.yaw)+s.vz*Math.sin(s.yaw);this.shuf=(this.shuf||0)+n*Math.abs(q)*Math.PI/.55;let ut=Math.min(1,Math.abs(q)/3),rt=Math.sin(this.shuf)*ut,yt=Math.sin(this.t*3)*.06,Rt=e&&e.holder&&e.y<.8;Object.assign(v,{hipL:.5+tt*.05,hipR:.5+tt*.05,kneeL:-.9,kneeR:-.9,drop:.15,spine:.28,abL:.22+.18*rt,abR:.22-.18*rt,roll:-q*.015,shL:(Rt?.45:.75)+yt,shR:(Rt?.75:.45)-yt,elL:.6,elR:.6,wideL:.65,wideR:.65,twist:0,head:-.1})}else if(C){if(Object.assign(v,{shL:2.85,shR:2.85,elL:.08,elR:.08,wideL:.2,wideR:.2}),s.blockT>0&&(v.wrL=.7,v.wrR=.9,v.spine=-.1),e&&!e.holder&&Math.hypot(e.x-s.x,e.z-s.z)<1.5&&e.y>s.y+1.2){let J={x:e.x,y:e.y,z:e.z};w=J,A=J}}else if(f<1.2&&!i.celebrate){let bt=Math.sin(this.t*2.2)*.03;Object.assign(v,{hipL:.12,hipR:.08,kneeL:-.22,kneeR:-.16,shL:.12+bt,shR:.1+bt,elL:.35,elR:.3,wideL:.14,wideR:.14,drop:.03,spine:.06+bt*.5})}s.landT>0&&(v.drop+=.12,v.kneeL-=.5,v.kneeR-=.5,v.hipL+=.3,v.hipR+=.3);let y=this.anim,P=J=>J==="ball"?{x:e.x,y:e.y,z:e.z}:J,D=(J,bt,q,tt,ut)=>{let rt=P(bt),{fwd:yt,up:Rt}=this.toShoulder(J,rt.x,rt.y,rt.z),Ot=Math.hypot(yt,Rt)||1,{sh:he,el:Gt}=r.armIK(yt-yt/Ot*.06,Rt-Rt/Ot*.06);v[tt]=he,v[ut]=Gt,v[J.side<0?"wideL":"wideR"]=q};w&&(w!=="ball"||b)&&D(this.arms[0],w,w===A?-.05:.2,"shL","elL"),A&&(A!=="ball"||b)&&D(this.arms[1],A,w===A?-.05:.2,"shR","elR");let F=1-Math.exp(-16*n),H=1-Math.exp(-30*n);for(let J of Object.keys(v)){y[J]===void 0&&(y[J]=v[J]);let bt=w&&(J==="shL"||J==="elL")||A&&(J==="shR"||J==="elR")?H:F;y[J]+=(v[J]-y[J])*bt}let[O,L]=this.legs;O.hip.rotation.z=y.hipL,L.hip.rotation.z=y.hipR,O.hip.rotation.x=y.abL,L.hip.rotation.x=-y.abR,O.knee.rotation.z=y.kneeL,L.knee.rotation.z=y.kneeR,O.ankle.rotation.z=-(y.hipL+y.kneeL)*.6,L.ankle.rotation.z=-(y.hipR+y.kneeR)*.6;let[X,B]=this.arms;X.shoulder.rotation.z=y.shL,B.shoulder.rotation.z=y.shR,X.shoulder.rotation.x=y.wideL,B.shoulder.rotation.x=-y.wideR,X.elbow.rotation.z=y.elL,B.elbow.rotation.z=y.elR,X.wrist.rotation.z=y.wrL,B.wrist.rotation.z=y.wrR,this.spine.rotation.z=-y.spine,this.spine.rotation.y=y.twist,this.neck.rotation.z=y.spine*.6+y.head,this.body.rotation.z=y.lean,this.body.rotation.x=y.roll;let st=1,lt=1;s.landT>0?(lt=.95,st=1.03):!s.onGround&&s.vy>3&&(lt=1.03,st=.98),y.sx=(y.sx??1)+(st-(y.sx??1))*Math.min(1,n*20),y.sy=(y.sy??1)+(lt-(y.sy??1))*Math.min(1,n*20),this.body.scale.set(this.scale*y.sx,this.scale*y.sy*this.heightK,this.scale*y.sx);let Mt=i.celebrate&&s.onGround?Math.abs(Math.sin(this.t*8))*.14:0;this.body.position.y=Mt-y.drop,I?this.body.rotation.y+=n*14:this.body.rotation.y=0}};var Os=(r,t,e)=>r+(t-r)*e,Xc={classic:{base:[214,92,30],seam:[26,14,8]},street:{base:[154,90,52],seam:[33,20,12]},midnight:{base:[30,32,38],seam:[255,107,36]},gold:{base:[217,166,50],seam:[58,39,6]}},ro={};function Su(r="classic"){if(ro[r])return ro[r];let t=Xc[r]||Xc.classic,e=1024,n=512,i=document.createElement("canvas");i.width=e,i.height=n;let s=document.createElement("canvas");s.width=e,s.height=n;let a=i.getContext("2d"),o=s.getContext("2d"),l=a.createImageData(e,n),c=o.createImageData(e,n),h=(g,x)=>{let m=g*374761393+x*668265263;return m=(m^m>>>13)*1274126177,((m^m>>>16)>>>0)/4294967295},d=.022;for(let g=0;g<n;g++){let x=g/n,m=x*Math.PI,p=Math.cos(m),_=Math.sin(m);for(let b=0;b<e;b++){let v=b/e*Math.PI*2,I=-Math.cos(v)*_,w=Math.sin(v)*_,A=p,C=Math.abs(I),M=Math.abs(w),y=Math.abs(Math.abs(A)-(.6+.3*(w*w-I*I))),P=Math.min(C,M,y*.9),D=P<d?1:0,F=Math.max(0,1-Math.abs(P-d)/.012),H=h(b*.55|0,g*.55/Math.max(.15,_)|0),O=(g*e+b)*4,L=.92+H*.12;D?(l.data[O]=t.seam[0],l.data[O+1]=t.seam[1],l.data[O+2]=t.seam[2]):(l.data[O]=t.base[0]*L,l.data[O+1]=t.base[1]*L,l.data[O+2]=t.base[2]*L),l.data[O+3]=255;let X=D?30:200-F*80+(H>.55?40:0);c.data[O]=c.data[O+1]=c.data[O+2]=X,c.data[O+3]=255}}a.putImageData(l,0,0),o.putImageData(c,0,0);let u=new Pe(i);u.colorSpace=fe,u.anisotropy=8;let f=new Pe(s);return ro[r]={map:u,bumpMap:f},ro[r]}var ao=null;function wv(){if(ao)return ao;let r=document.createElement("canvas");r.width=r.height=64;let t=r.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,31);return e.addColorStop(0,"rgba(0,0,0,0.8)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),ao=new Pe(r),ao}var oo=class{constructor(t,e){this.ball=e;let{map:n,bumpMap:i}=Su();this.mesh=new nt(new Se(we.R,40,28),new dn({map:n,bumpMap:i,bumpScale:1.2,roughness:.68,sheen:.3,sheenRoughness:.8,sheenColor:new Dt(16757370)})),this.mesh.castShadow=!0,t.add(this.mesh),this.blob=new nt(new Re(we.R*3.4,we.R*3.4),new pe({map:wv(),transparent:!0,opacity:.5,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.renderOrder=1,t.add(this.blob),this.skin="classic"}setSkin(t){if(t===this.skin||!Xc[t])return;this.skin=t;let{map:e,bumpMap:n}=Su(t);this.mesh.material.map=e,this.mesh.material.bumpMap=n,this.mesh.material.sheenColor.set(t==="midnight"?4870240:t==="gold"?16773296:16757370),this.mesh.material.metalness=t==="gold"?.35:0,this.mesh.material.needsUpdate=!0}update(t){let e=this.ball,n=Os(e.px,e.x,t),i=Os(e.py,e.y,t),s=Os(e.pz,e.z,t);this.mesh.position.set(n,i,s),this.mesh.rotation.set(e.spinX,0,e.spinZ),this.blob.position.set(n,.01,s);let a=Math.max(.3,1-i/6);this.blob.scale.setScalar(.7+(1-a)*.8),this.blob.material.opacity=.55*a}},lo=class{constructor(t,e){this.box=e,this.mesh=new nt(new oe(.8,.8,.8),new Qt({map:vu(),emissive:16756736,emissiveIntensity:.35,roughness:.4})),this.mesh.castShadow=!0,this.glow=new nt(new si(.55,.95,32),new pe({color:16765503,transparent:!0,opacity:.6,depthWrite:!1})),this.glow.rotation.x=-Math.PI/2,t.add(this.mesh,this.glow),this.pop=0}update(t){let e=this.box,n=e.active;if(this.pop=n?Math.min(1,this.pop+t*4):0,this.mesh.visible=this.glow.visible=n,!n)return;let i=1-Math.pow(1-this.pop,3);this.mesh.scale.setScalar(i),this.mesh.position.set(e.x,.9+Math.sin(e.spin*3)*.15,e.z),this.mesh.rotation.set(0,e.spin*1.6,0),this.glow.position.set(e.x,.02,e.z),this.glow.scale.setScalar(1+Math.sin(e.spin*5)*.08)}},co=class{constructor(t){this.scene=t,this.max=260,this.parts=[],this.conf=new An(new Re(.12,.18),new pe({side:ze}),this.max),this.conf.frustumCulled=!1,this.conf.count=0,t.add(this.conf),this.m4=new Ht,this.q=new hn,this.e=new mn,this.v=new R,this.one=new R(1,1,1),this.col=new Dt,this.rings=[],this.ropes=new Map;let e=Tv();this.puffs=[],this.pool={normal:[],add:[]};for(let n of["normal","add"])for(let i=0;i<160;i++){let s=new Ts(new Ni({map:e,transparent:!0,depthWrite:!1,blending:n==="add"?wn:yi}));s.visible=!1,t.add(s),this.pool[n].push(s)}this.projViews=new Map,this.trapViews=new Map}puff(t,e,n,i={}){let a=this.pool[i.add?"add":"normal"].pop();if(!a)return;a.visible=!0,a.position.set(t,e,n),a.material.color.setHex(i.color??16777215),a.material.opacity=i.opacity??.9;let o=i.life??.5;this.puffs.push({spr:a,mode:i.add?"add":"normal",life:o,max:o,size:i.size??.4,grow:i.grow??1.6,vx:i.vx??0,vy:i.vy??.6,vz:i.vz??0,op:a.material.opacity})}syncWorldItems(t,e){let n=new Set;for(let s of t.projectiles){n.add(s.id);let a=this.projViews.get(s.id);if(!a){a=new nt(new Va(.28,1),new pe({color:12580095}));let o=new nt(new Se(.5,16,12),new pe({color:6280959,transparent:!0,opacity:.35,blending:wn,depthWrite:!1}));a.add(o),this.scene.add(a),this.projViews.set(s.id,a)}a.position.set(Os(s.px,s.x,e),Os(s.py,s.y,e),Os(s.pz,s.z,e)),a.rotation.x+=.3,a.rotation.y+=.2,this.puff(a.position.x,a.position.y,a.position.z,{color:10479871,add:!0,size:.35,life:.3,vy:0})}for(let[s,a]of this.projViews)n.has(s)||(this.scene.remove(a),this.projViews.delete(s));let i=new Set;for(let s of t.traps)if(i.add(s.id),!this.trapViews.has(s.id)){let a=Av();a.position.set(s.x,.06,s.z),a.rotation.y=Math.random()*Math.PI*2,this.scene.add(a),this.trapViews.set(s.id,a)}for(let[s,a]of this.trapViews)i.has(s)||(this.scene.remove(a),this.trapViews.delete(s))}clearWorldItems(){for(let t of this.projViews.values())this.scene.remove(t);for(let t of this.trapViews.values())this.scene.remove(t);this.projViews.clear(),this.trapViews.clear()}burst(t,e,n,i,s=70,a=6){for(let o=0;o<s;o++){this.parts.length>=this.max&&this.parts.shift();let l=Math.random()*Math.PI*2,c=Math.random();this.parts.push({x:t,y:e,z:n,vx:Math.cos(l)*a*(.3+Math.random()*.7),vy:a*(.4+c),vz:Math.sin(l)*a*(.3+Math.random()*.7),rx:Math.random()*6,ry:Math.random()*6,spin:4+Math.random()*10,life:1.6+Math.random(),color:i[Math.random()*i.length|0]})}}shockwave(t,e,n=16777215){let i=new nt(new si(.8,1,48),new pe({color:n,transparent:!0,opacity:.9,depthWrite:!1,side:ze}));i.rotation.x=-Math.PI/2,i.position.set(t,.05,e),this.scene.add(i),this.rings.push({mesh:i,t:0})}rope(t,e){let n=this.ropes.get(t);if(!e){n&&(this.scene.remove(n.line,n.hook),n.line.geometry.dispose(),this.ropes.delete(t));return}if(!n){let s=new Ee().setFromPoints([new R,new R]),a=new Da(s,new dr({color:1776411}));a.frustumCulled=!1;let o=new nt(new Ga(.14),new Qt({color:12634070,metalness:.8,roughness:.3}));this.scene.add(a,o),n={line:a,hook:o},this.ropes.set(t,n)}let i=n.line.geometry.attributes.position;i.setXYZ(0,t.x+Math.cos(t.yaw)*.4,t.y+1.5,t.z+Math.sin(t.yaw)*.4),i.setXYZ(1,e.x,e.y,e.z),i.needsUpdate=!0,n.hook.position.set(e.x,e.y,e.z),n.hook.rotation.y+=.3}update(t){let e=0;for(let n of this.parts)n.life-=t,n.vy-=9*t,n.vx*=.985,n.vz*=.985,n.vy<-2.5&&(n.vy=-2.5),n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,n.y<.02&&(n.y=.02,n.vx=n.vz=0),n.rx+=n.spin*t,n.ry+=n.spin*.7*t,!(n.life<=0)&&(this.e.set(n.rx,n.ry,0),this.q.setFromEuler(this.e),this.v.set(n.x,n.y,n.z),this.m4.compose(this.v,this.q,this.one),this.conf.setMatrixAt(e,this.m4),this.col.setHex(n.color),this.conf.setColorAt(e,this.col),e++);this.parts=this.parts.filter(n=>n.life>0),this.conf.count=e,this.conf.instanceMatrix.needsUpdate=!0,this.conf.instanceColor&&(this.conf.instanceColor.needsUpdate=!0);for(let n of this.rings){n.t+=t;let i=1+n.t*9;n.mesh.scale.set(i,i,i),n.mesh.material.opacity=Math.max(0,.9-n.t*1.8)}for(let n of this.puffs){n.life-=t;let i=Math.max(0,n.life/n.max);n.spr.position.x+=n.vx*t,n.spr.position.y+=n.vy*t,n.spr.position.z+=n.vz*t,n.vx*=.94,n.vz*=.94;let s=n.size*(1+(1-i)*n.grow);n.spr.scale.set(s,s,s),n.spr.material.opacity=n.op*i,n.life<=0&&(n.spr.visible=!1,this.pool[n.mode].push(n.spr))}this.puffs=this.puffs.filter(n=>n.life>0),this.rings=this.rings.filter(n=>n.t>.5?(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),!1):!0)}},qc=r=>[te[r].color,16777215,16764733];function Tv(){let r=document.createElement("canvas");r.width=r.height=64;let t=r.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.45,"rgba(255,255,255,0.65)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let n=new Pe(r);return n.colorSpace=fe,n}function Av(){let r=new ve,t=new Qt({color:16767293,roughness:.6}),e=new Qt({color:8016920,roughness:.8}),n=new nt(new oe(.22,.12,.22),t);r.add(n);for(let s=0;s<3;s++){let a=new nt(new oe(.42,.05,.13),t),o=s/3*Math.PI*2;a.position.set(Math.cos(o)*.25,-.03,Math.sin(o)*.25),a.rotation.y=-o,a.castShadow=!0,r.add(a)}let i=new nt(new oe(.08,.14,.08),e);return i.position.y=.12,r.add(i),r}var ho=class{constructor(t){this.camera=t,this.yaw=0,this.pitch=.18,this.dist=6.2,this.focus=new R,this.shakeT=0,this.shakeAmp=0,this.ready=!1,this.distNow=this.dist,this.liftNow=0,this.t=0}addLook(t,e){this.yaw+=t,this.pitch=Math.max(-.55,Math.min(1,this.pitch+e))}shake(t=.25,e=.3){this.shakeScale!==0&&(this.shakeAmp=Math.max(this.shakeAmp,t),this.shakeT=Math.max(this.shakeT,e))}basis(){let t=Math.cos(this.yaw),e=Math.sin(this.yaw);return{fx:t,fz:e,rx:-e,rz:t}}dir(){let t=Math.cos(this.pitch);return new R(Math.cos(this.yaw)*t,-Math.sin(this.pitch),Math.sin(this.yaw)*t)}update(t,e,n=.75,i={}){this.t+=t;let s=new R(e.x,Math.min(e.y,2.2)*.55+1.9,e.z);this.ready||(this.focus.copy(s),this.ready=!0,this.distNow=this.dist);let a=1-Math.exp(-14*t),o=1-Math.exp(-6*t);this.focus.x+=(s.x-this.focus.x)*a,this.focus.z+=(s.z-this.focus.z)*a,this.focus.y+=(s.y-this.focus.y)*o;let l=this.dist+(i.dunk?1.1:0),c=i.dunk?.6:0,h=1-Math.exp(-4*t);this.distNow+=(l-this.distNow)*h,this.liftNow+=(c-this.liftNow)*h;let d=this.dir(),u=-Math.sin(this.yaw),f=Math.cos(this.yaw),g=new R(this.focus.x-d.x*this.distNow+u*n,this.focus.y-d.y*this.distNow+.25+this.liftNow,this.focus.z-d.z*this.distNow+f*n);g.y=Math.max(.5,g.y);let x=Vt.HALF_L+Vt.WALL_PAD+2.2,m=Vt.HALF_W+Vt.WALL_PAD+1.4;if(g.x=Math.max(-x,Math.min(x,g.x)),g.z=Math.max(-m,Math.min(m,g.z)),Math.abs(g.x)>Vt.HALF_L+.6&&Math.abs(g.z)<1.4&&(g.y=Math.max(g.y,4.6)),this.shakeT>0){this.shakeT-=t;let p=Math.min(.12,this.shakeAmp*.5)*Math.max(0,this.shakeT)*3,_=this.t*38;g.x+=Math.sin(_)*p,g.y+=Math.sin(_*1.3+1)*p,g.z+=Math.sin(_*.9+2)*p}else this.shakeAmp=0;this.camera.position.copy(g),this.camera.lookAt(g.x+d.x,g.y+d.y,g.z+d.z)}orbit(t,e){this.yaw+=t*.045;let n=14.5,i=9.2,s=-Math.cos(this.yaw)*n,a=-Math.sin(this.yaw)*i,o=4+Math.sin(this.yaw*2)*.7;this.orbitLook||(this.orbitLook=new R(e.x,1.7,e.z)),this.orbitLook.lerp(new R(e.x,1.7,e.z),1-Math.exp(-1.5*t)),this.camera.position.set(s,o,a),this.camera.lookAt(this.orbitLook)}};var Ft=(r,t=24)=>`<svg viewBox="0 0 ${t} ${t}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${r}</svg>`,at={play:Ft('<path d="M7 4.5v15l12-7.5z" fill="currentColor" stroke="none"/>'),back:Ft('<path d="M15 5l-7 7 7 7"/>'),close:Ft('<path d="M6 6l12 12M18 6L6 18"/>'),check:Ft('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),lock:Ft('<rect x="5" y="10.5" width="14" height="10" rx="1.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>'),loadout:Ft('<rect x="3.5" y="3.5" width="7" height="7" rx="1"/><rect x="13.5" y="3.5" width="7" height="7" rx="1"/><rect x="3.5" y="13.5" width="7" height="7" rx="1"/><path d="M17 14v6M14 17h6"/>'),customize:Ft('<path d="M8.5 3.5L4 6v4l3 1v9.5h10V11l3-1V6l-4.5-2.5c-.6 1.6-2 2.5-3.5 2.5s-2.9-.9-3.5-2.5z"/>'),progress:Ft('<path d="M4 20V14M10 20V9M16 20V4M20.5 20H3.5"/>'),settings:Ft('<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2L5.5 5.5"/>'),controls:Ft('<rect x="2.5" y="7" width="19" height="10" rx="2"/><path d="M6 12h4M8 10v4M15.5 11h.01M18 13h.01"/>'),restart:Ft('<path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.5 4.5v4h4"/>'),home:Ft('<path d="M4 11l8-6.5 8 6.5V20h-5.5v-5h-5v5H4z"/>'),edit:Ft('<path d="M4 20h4L19 9l-4-4L4 16z"/>'),sound:Ft('<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>'),mute:Ft('<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/>'),fullscreen:Ft('<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>'),trophy:Ft('<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H4.5a3 3 0 0 0 3.5 4M16 6h3.5a3 3 0 0 1-3.5 4M12 13v4M8.5 20.5h7M10 17h4"/>'),bolt:Ft('<path d="M13 2.5L5 13.5h6l-1 8 8-11h-6z"/>'),ball:Ft('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5v17M6 6c3 3 3 9 0 12M18 6c-3 3-3 9 0 12"/>'),dash:Ft('<path d="M3 8h6M2 12h8M3 16h6"/><path d="M13 5l7 7-7 7"/>'),move:Ft('<path d="M7 7l-4 5 4 5"/><path d="M17 7l4 5-4 5"/><circle cx="12" cy="12" r="3"/>'),pass:Ft('<circle cx="5.5" cy="12" r="2.5"/><circle cx="18.5" cy="12" r="2.5"/><path d="M8.5 12h7M13 9.5l2.5 2.5-2.5 2.5"/>'),call:Ft('<path d="M12 3v3M5 6l2 2M19 6l-2 2"/><path d="M7.5 21v-6.5a4.5 4.5 0 0 1 9 0V21"/>'),steal:Ft('<path d="M6 13c0-4 3-7 6-7s6 3 6 7"/><path d="M4 13h16M9 17l-2 3M15 17l2 3"/>'),skin:Ft('<circle cx="12" cy="8.5" r="4.5"/><path d="M4.5 20.5c1-4 4-6 7.5-6s6.5 2 7.5 6"/>'),globe:Ft('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.4 3.8 5.2 3.8 8.5s-1.2 6.1-3.8 8.5c-2.6-2.4-3.8-5.2-3.8-8.5s1.2-6.1 3.8-8.5z"/>'),users:Ft('<circle cx="9" cy="8.5" r="3.5"/><path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5"/><path d="M15.5 5.2a3.4 3.4 0 0 1 0 6.6M17.5 14.8c2.2.6 3.6 2.4 4 5.2"/>'),copy:Ft('<rect x="8.5" y="8.5" width="11" height="11" rx="1.5"/><path d="M15.5 8.5V5.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3"/>'),chat:Ft('<path d="M4.5 5.5h15v10h-8l-4.5 3.5v-3.5h-2.5z"/>'),share:Ft('<path d="M12 15V4M7.5 8.5L12 4l4.5 4.5"/><path d="M5 13v6.5h14V13"/>'),sword:Ft('<path d="M14.5 4.5h5v5L10 19l-2-2-2 2-1-1 2-2-2-2z"/><path d="M12.5 11.5l-1-1"/>'),calendar:Ft('<rect x="4" y="5.5" width="16" height="14.5" rx="1.5"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/>'),body:Ft('<circle cx="12" cy="5" r="2.5"/><path d="M7 9.5h10l-1.5 5h-1.5l-.5 6h-3l-.5-6H8.5z"/>'),face:Ft('<circle cx="12" cy="11" r="7.5"/><path d="M9 10h.01M15 10h.01"/><path d="M8.5 14.5c1 2.5 6 2.5 7 0"/>'),signal:Ft('<path d="M5 19v-3M10 19v-6M15 19v-9M20 19V6"/>'),hair:Ft('<path d="M6 13c-1-6 2.5-9.5 6-9.5s7 3.5 6 9.5"/><path d="M7 9c3 0 6-1.5 7.5-4M8 13.5a4 4 0 0 0 8 0"/>'),shoe:Ft('<path d="M3 15.5V9.5l4 1 3-4 3 4.5 7 2c1 .3 1.5 1.2 1.5 2.2v.3z"/><path d="M3 15.5h18.5v2.5H3z"/>'),band:Ft('<rect x="7" y="4" width="10" height="16" rx="3"/><path d="M7 9h10M7 15h10"/>'),spark:Ft('<path d="M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5M5.3 5.3l3.5 3.5M15.2 15.2l3.5 3.5M5.3 18.7l3.5-3.5M15.2 8.8l3.5-3.5"/>'),number:Ft('<path d="M9 4l-2 16M17 4l-2 16M4.5 9h16M3.5 15h16"/>'),info:Ft('<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.5h.01"/>'),chevron:Ft('<path d="M9 5l7 7-7 7"/>'),minus:Ft('<path d="M5 12h14"/>'),plus:Ft('<path d="M12 5v14M5 12h14"/>'),target:Ft('<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>'),flame:Ft('<path d="M12 21c-4 0-6.5-2.7-6.5-6.2 0-3.4 2.4-5.3 3.5-8.3.6 1.8 1.8 2.8 2.8 3.2C12 7 13 4.5 15.5 3c-.4 2.6.6 4.6 2 6.6 1 1.4 1 3 1 5.2 0 3.5-2.5 6.2-6.5 6.2z"/>')},Wi=r=>`<svg viewBox="0 0 32 32" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${r}</svg>`,Hn={grapple:Wi('<path d="M16 3v14a6 6 0 1 1-6-6" stroke="#ffc857" stroke-width="3.5"/><path d="M16 17a6 6 0 1 0 6-6" stroke="#ffc857" stroke-width="3.5"/><circle cx="16" cy="3.5" r="2.5" fill="#fff"/>'),jetpack:Wi('<rect x="7" y="5" width="7" height="16" rx="3" fill="#d9dde8"/><rect x="18" y="5" width="7" height="16" rx="3" fill="#d9dde8"/><path d="M10.5 22l-2 7h4zM21.5 22l-2 7h4z" fill="#ff8a24"/>'),punch:Wi('<rect x="9" y="8" width="16" height="15" rx="4" fill="#ff3b4e"/><rect x="4" y="12" width="6" height="7" rx="2" fill="#fff"/><path d="M14 8v5M19 8v5" stroke="#9c1426" stroke-width="2"/>'),freeze:Wi('<path d="M16 3v26M5 9.5l22 13M5 22.5l22-13" stroke="#9fe8ff" stroke-width="3"/><circle cx="16" cy="16" r="3.5" fill="#fff"/>'),banana:Wi('<path d="M6 8c2 12 10 18 21 16-6-2-12-7-14-17z" fill="#ffd93d" stroke="#b8871b" stroke-width="1.5"/><path d="M6 8l-1-3" stroke="#7a5418" stroke-width="3"/>'),magnet:Wi('<path d="M8 5v11a8 8 0 0 0 16 0V5" stroke="#ff3b4e" stroke-width="6"/><path d="M8 5v4M24 5v4" stroke="#fff" stroke-width="6" stroke-linecap="butt"/>'),energy:Wi('<rect x="10" y="4" width="12" height="25" rx="3" fill="#3ddc84"/><path d="M17 8l-4 9h5l-3 8" stroke="#0e2a18" stroke-width="2.5"/>')};var Er=r=>300+(r-1)*100,Eu=30;function vn(r){let t=1,e=r;for(;t<Eu&&e>=Er(t);)e-=Er(t),t++;let n=t>=Eu?0:Er(t);return{level:t,into:e,need:n,pct:n?e/n:1}}function wu(r,t,e){if(e==="practice")return{total:0,lines:[]};let n=r.stats,i=[["Match played",60],...t?[["Victory",120]]:[],...n.pts?[[`Points (${n.pts})`,n.pts*6]]:[],...n.dunks?[[`Dunks (${n.dunks})`,n.dunks*10]]:[],...n.ast?[[`Assists (${n.ast})`,n.ast*8]]:[],...n.stl?[[`Steals (${n.stl})`,n.stl*8]]:[],...n.blk?[[`Blocks (${n.blk})`,n.blk*8]]:[],...n.ctst?[[`Shots contested (${n.ctst})`,n.ctst*3]]:[]];return{total:i.reduce((s,a)=>s+a[1],0),lines:i}}var In={skin:{label:"Skin tone",icon:"skin",items:[{id:"s0",name:"Tone 1",lvl:1,color:1578e4},{id:"s1",name:"Tone 2",lvl:1,color:14196852},{id:"s2",name:"Tone 3",lvl:1,color:11827790},{id:"s3",name:"Tone 4",lvl:1,color:9132598},{id:"s4",name:"Tone 5",lvl:1,color:6963496},{id:"s5",name:"Tone 6",lvl:1,color:4860955}]},hair:{label:"Hair",icon:"hair",items:[{id:"short",name:"Short",lvl:1},{id:"fade",name:"Fade",lvl:1},{id:"waves",name:"Waves",lvl:1},{id:"buzz",name:"Buzz",lvl:1},{id:"bald",name:"Clean + band",lvl:1},{id:"headband",name:"Headband",lvl:1},{id:"braids",name:"Braids",lvl:1}]},body:{label:"Build",icon:"body",items:[{id:"wing",name:"Wing",lvl:1},{id:"guard",name:"Guard",lvl:1},{id:"big",name:"Big",lvl:1}]},face:{label:"Facial hair",icon:"face",items:[{id:"none",name:"Clean",lvl:1},{id:"stubble",name:"Stubble",lvl:1},{id:"goatee",name:"Goatee",lvl:2},{id:"beard",name:"Full beard",lvl:3}]},shoes:{label:"Sneakers",icon:"shoe",items:[{id:"classic",name:"Classic",lvl:1,colors:[16777215,14163764]},{id:"blackout",name:"Blackout",lvl:1,colors:[1119e3,16777215]},{id:"court",name:"Court",lvl:1,colors:[16777215,1119e3]},{id:"blaze",name:"Blaze",lvl:2,colors:[14163764,16777215]},{id:"royal",name:"Royal",lvl:3,colors:[3107839,16777215]},{id:"goldrush",name:"Gold Rush",lvl:5,colors:[1119e3,16762967]},{id:"glacier",name:"Glacier",lvl:7,colors:[13625855,3832789]},{id:"magma",name:"Magma",lvl:9,colors:[16739108,1119e3]}]},gear:{label:"Arm gear",icon:"band",items:[{id:"none",name:"None",lvl:1},{id:"bands",name:"Wristbands",lvl:2},{id:"sleeve",name:"Shooting sleeve",lvl:4},{id:"both",name:"Sleeve + bands",lvl:6}]},ball:{label:"Ball",icon:"ball",items:[{id:"classic",name:"Classic",lvl:1,colors:["#d65c1e","#1a0e08"]},{id:"street",name:"Street",lvl:3,colors:["#9a5a34","#21140c"]},{id:"midnight",name:"Midnight",lvl:6,colors:["#1b1d24","#ff6b24"]},{id:"gold",name:"24K",lvl:10,colors:["#d9a632","#3a2706"]}]},fx:{label:"Score FX",icon:"spark",items:[{id:"team",name:"Team colours",lvl:1,colors:[16726862,16777215,16764733]},{id:"fire",name:"Inferno",lvl:4,colors:[16739108,16762967,16722432]},{id:"frost",name:"Frostbite",lvl:8,colors:[10479871,16777215,3832789]},{id:"gold",name:"Gold rush",lvl:12,colors:[16762967,16773570,14263858]}]}},Pn=(r,t)=>In[r].items.find(e=>e.id===t)||In[r].items[0];function Fs(){let r=[];for(let[t,e]of Object.entries(In))for(let n of e.items)n.lvl>1&&r.push({cat:t,catLabel:e.label,...n});return r.sort((t,e)=>t.lvl-e.lvl)}var ai=4,Bs=2,wr={grapple:"Mobility",jetpack:"Mobility",energy:"Mobility",punch:"Offense",freeze:"Control",banana:"Control",magnet:"Steal"},Tu={grapple:{desc:"Fire a hook at the rim, the ball or a rival. With the ball, hooking your own rim launches a slam. Hooking a ball handler rips the ball loose.",counter:"A hook fired at a player flies to where they were: dash sideways to dodge it.",stats:()=>[["Range",`${kt.GRAPPLE.RANGE} m`],["On a ball handler","Ball ripped loose"]]},jetpack:{desc:"Strap in and fly. Great for high-flying layups, blocks and reaching loose balls first.",counter:"A jumping defender can still block a jetpack dunk at the rim.",stats:()=>[["Flight",`${kt.JETPACK.T} s`],["Ceiling",`${kt.JETPACK.CEILING} m`]]},punch:{desc:"Wind up a rocket glove and send whoever is in front of you flying. Pops the ball loose.",counter:"The wind-up is visible: dash out of the cone before it lands.",stats:()=>[["Range",`${kt.PUNCH.RANGE} m`],["Stun",`${kt.PUNCH.STUN} s`]]},freeze:{desc:"A slow-homing ice bolt that locks the first rival it touches in a block of ice.",counter:"It turns slowly: a sideways dash makes it miss.",stats:()=>[["Range",`${kt.FREEZE.RANGE} m`],["Freeze",`${kt.FREEZE.T} s`]]},banana:{desc:"Drop a peel behind you. Anyone who runs over it goes down and drops the ball.",counter:"It sits on the floor in plain sight: run around it.",stats:()=>[["Lasts",`${kt.BANANA.LIFE} s`],["Stun",`${kt.BANANA.STUN} s`]]},magnet:{desc:"Pulls loose balls to you and yanks an exposed ball out of a nearby dribbler\u2019s hands.",counter:"Keep your body between the magnet and the ball (dribble with the far hand).",stats:()=>[["Duration",`${kt.MAGNET.T} s`],["Pull range",`${kt.MAGNET.RANGE} m`]]},energy:{desc:"Chug it for a burst of speed and a full sprint tank.",counter:"Faster, but sprinting into a set defender is still a charge.",stats:()=>[["Duration",`${kt.ENERGY.T} s`],["Speed",`+${Math.round((kt.ENERGY.SPEED-1)*100)}%`]]}},Hs=r=>Si[r];function Yc(r){let t={};for(let n of r)t[n]=kt.POOL[n]||0;let e=Object.values(t).reduce((n,i)=>n+i,0)||1;return Object.fromEntries(Object.entries(t).map(([n,i])=>[n,i/e]))}var Zc=[{id:"dash",name:"Dash",key:"C",cd:Te.DASH_CD,desc:"Short burst in the direction you are moving. Works with or without the ball."},{id:"move",name:"Dribble move",key:"Q / E",cd:Te.DRIBBLE_CD,desc:"Cross the ball to your other hand with a burst. Keep it away from the defender; catch one who just reached to break their ankles."},{id:"pass",name:"Pass / call",key:"F",cd:null,desc:"Pass to the teammate you are looking toward, or call for the ball (team modes)."},{id:"steal",name:"Steal",key:"E / click",cd:Kt.STEAL_CD,desc:"Reach for the ball. Works when it is within arm\u2019s length and not shielded by the dribbler\u2019s body. A miss leaves you off balance."}],rn={quick:{id:"quick",name:"Quick Match",short:"QUICK MATCH",teamSize:3,desc:"Three on three against bots with two AI teammates. Pass, cut and run the floor.",chips:["3v3","vs bots","Items on"]},"1v1":{id:"1v1",name:"1v1",short:"1V1",teamSize:1,desc:"Just you and one defender. Every possession is personal.",chips:["1v1","vs bot"]},"2v2":{id:"2v2",name:"2v2",short:"2V2",teamSize:2,desc:"You and one AI teammate against two bots. More space, faster games.",chips:["2v2","vs bots"]},chaos:{id:"chaos",name:"Chaos",short:"CHAOS",teamSize:3,chaos:!0,desc:"Item boxes every couple of seconds, bots that fire items on sight, and fire after two in a row.",chips:["3v3","Constant items","Fire x2"]},online:{id:"online",name:"Online",short:"ONLINE",teamSize:1,online:!0,desc:"Real players over the internet: quick match, private rooms and ranked.",chips:["Online"]},ranked:{id:"ranked",name:"Ranked 1v1",short:"RANKED",teamSize:1,online:!0,desc:"Rated 1v1 against real players.",chips:["Online","Rated"]},practice:{id:"practice",name:"Practice",short:"PRACTICE",teamSize:1,practice:!0,desc:"An empty court and no clock. Work on your release timing, dunks, moves and items.",chips:["Solo","No clock","No XP"]}},uo=[90,120,180],Kc={quality:null,master:.8,sfx:1,crowd:.7,sens:1,invertY:!1,shake:!0,effects:!0,hints:!0,motion:"system",hudScale:1,server:""},Rv=()=>({name:"ROOKIE",xp:0,cosmetics:{skin:"s2",hair:"fade",body:"wing",face:"none",number:23,shoes:"classic",gear:"none",ball:"classic",fx:"team"},loadout:["grapple","jetpack","punch","freeze"],career:{games:0,wins:0,losses:0,pts:0,fgm:0,fga:0,tpm:0,tpa:0,dunks:0,ast:0,stl:0,blk:0,reb:0,tov:0,ctst:0,best:0,streak:0,bestStreak:0,byMode:{}},last:{mode:"quick",difficulty:"normal",duration:120,items:!0}});function Jc(r){let t=Rv();return r.profile={...t,...r.profile||{}},r.profile.cosmetics={...t.cosmetics,...r.profile.cosmetics||{}},r.profile.career={...t.career,...r.profile.career||{}},r.profile.last={...t.last,...r.profile.last||{}},(!Array.isArray(r.profile.loadout)||r.profile.loadout.length<Bs)&&(r.profile.loadout=t.loadout.slice()),r.profile.loadout=r.profile.loadout.filter(e=>kt.POOL[e]).slice(0,ai),!r.profile.career.games&&(r.wins||r.losses)&&(r.profile.career.wins=r.wins||0,r.profile.career.losses=r.losses||0,r.profile.career.games=(r.wins||0)+(r.losses||0)),r.settings={...Kc,...r.settings||{}},r.quality&&!r.settings.quality&&(r.settings.quality=r.quality),r.sens&&r.settings.sens===1&&(r.settings.sens=r.sens),r}function jc(r,t,e,n,i){let s=r.career;s.games++,e?(s.wins++,s.streak++,s.bestStreak=Math.max(s.bestStreak,s.streak)):(s.losses++,s.streak=0);for(let o of["pts","fgm","fga","tpm","tpa","dunks","ast","stl","blk","reb","tov","ctst"])s[o]=(s[o]||0)+(t.stats[o]||0);s.best=Math.max(s.best,t.stats.pts);let a=s.byMode[n]||{games:0,wins:0};a.games++,e&&a.wins++,s.byMode[n]=a}var Qc=class{constructor(){this.ctx=null,this.master=null,this.muted=!1;try{this.muted=localStorage.getItem("ib_muted")==="1"}catch{}this.volume=.8,this.sfxVolume=1,this.crowdVolume=.7;try{let t=localStorage.getItem("ib_vol");t!==null&&(this.volume=+t);let e=localStorage.getItem("ib_crowd");e!==null&&(this.crowdVolume=+e)}catch{}this.noiseBuf=null,this.crowd=null,this.lastSqueak=0}masterLevel(){return this.muted?0:.7*this.volume}setVolume(t){this.volume=Math.max(0,Math.min(1,t));try{localStorage.setItem("ib_vol",String(this.volume))}catch{}this.master&&this.master.gain.setTargetAtTime(this.masterLevel(),this.ctx.currentTime,.05)}setSfxVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.sfxBus&&this.sfxBus.gain.setTargetAtTime(this.sfxVolume,this.ctx.currentTime,.05)}setCrowdVolume(t){this.crowdVolume=Math.max(0,Math.min(1,t));try{localStorage.setItem("ib_crowd",String(this.crowdVolume))}catch{}this.crowdBus&&this.crowdBus.gain.setTargetAtTime(this.crowdVolume,this.ctx.currentTime,.1)}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.masterLevel();let e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,e.attack.value=.004,e.release.value=.2,this.master.connect(e).connect(this.ctx.destination),this.sfxBus=this.ctx.createGain(),this.sfxBus.gain.value=this.sfxVolume,this.sfxBus.connect(this.master),this.crowdBus=this.ctx.createGain(),this.crowdBus.gain.value=this.crowdVolume,this.crowdBus.connect(this.master);let n=this.ctx.sampleRate*1.5;this.noiseBuf=this.ctx.createBuffer(1,n,this.ctx.sampleRate);let i=this.noiseBuf.getChannelData(0);for(let s=0;s<n;s++)i[s]=Math.random()*2-1}setMuted(t){this.muted=t;try{localStorage.setItem("ib_muted",t?"1":"0")}catch{}this.master&&this.master.gain.setTargetAtTime(this.masterLevel(),this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}get ok(){return!!this.ctx&&this.ctx.state==="running"}tone({type:t="sine",f0:e=440,f1:n=null,dur:i=.15,vol:s=.3,attack:a=.005,delay:o=0}){if(!this.ok)return;let l=this.ctx,c=l.currentTime+o,h=l.createOscillator(),d=l.createGain();h.type=t,h.frequency.setValueAtTime(e,c),n&&h.frequency.exponentialRampToValueAtTime(Math.max(1,n),c+i),d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(s,c+a),d.gain.exponentialRampToValueAtTime(1e-4,c+i),h.connect(d).connect(this.sfxBus),h.start(c),h.stop(c+i+.02)}noise({dur:t=.2,vol:e=.2,type:n="bandpass",f0:i=1e3,f1:s=null,q:a=1,delay:o=0,attack:l=.005,bus:c="sfx"}){if(!this.ok)return;let h=this.ctx,d=h.currentTime+o,u=h.createBufferSource();u.buffer=this.noiseBuf;let f=h.createBiquadFilter();f.type=n,f.Q.value=a,f.frequency.setValueAtTime(i,d),s&&f.frequency.exponentialRampToValueAtTime(s,d+t);let g=h.createGain();g.gain.setValueAtTime(1e-4,d),g.gain.exponentialRampToValueAtTime(e,d+l),g.gain.exponentialRampToValueAtTime(1e-4,d+t),u.connect(f).connect(g).connect(c==="crowd"?this.crowdBus:this.sfxBus),u.start(d,Math.random()*.5),u.stop(d+t+.05)}bounce(t=400){let e=Math.min(.5,t/14);this.tone({type:"sine",f0:150,f1:70,dur:.12,vol:e}),this.noise({dur:.05,vol:e*.5,type:"lowpass",f0:900})}dribble(){this.bounce(5)}rim(t=4){let e=Math.min(.35,t/16),n=520+Math.random()*60;[[1,.4,.35],[2.76,.3,.25],[5.4,.18,.15],[8.9,.1,.09]].forEach(([i,s,a])=>this.tone({type:"sine",f0:n*i,f1:n*i*.995,dur:s,vol:e*a*1.6,attack:.002})),this.noise({dur:.04,vol:e*.6,type:"bandpass",f0:3200,q:1.5,attack:.001})}board(){this.noise({dur:.1,vol:.25,type:"lowpass",f0:600}),this.tone({type:"sine",f0:210,f1:120,dur:.12,vol:.18})}swish(){this.noise({dur:.28,vol:.28,type:"bandpass",f0:4200,f1:1400,q:.7,attack:.02}),this.noise({dur:.18,vol:.12,type:"highpass",f0:6e3,attack:.01,delay:.05}),this.noise({dur:.12,vol:.08,type:"bandpass",f0:900,q:1,delay:.16})}squeak(t=1){if(!this.ok)return;let e=this.ctx.currentTime;if(e-this.lastSqueak<.35)return;this.lastSqueak=e;let n=2300+Math.random()*900;this.tone({type:"sine",f0:n,f1:n*(1.15+Math.random()*.2),dur:.09+Math.random()*.05,vol:.05*t,attack:.01}),this.tone({type:"triangle",f0:n*2,f1:n*2.3,dur:.07,vol:.02*t,attack:.01})}score(t=!1){this.crowdSwell(t?1.3:.8),this.tone({type:"triangle",f0:660,dur:.1,vol:.12}),this.tone({type:"triangle",f0:990,dur:.18,vol:.12,delay:.08})}shoot(){this.noise({dur:.08,vol:.12,type:"highpass",f0:1800})}steal(){this.tone({type:"square",f0:300,f1:900,dur:.12,vol:.12}),this.noise({dur:.1,vol:.18,type:"bandpass",f0:3e3,q:2})}whiff(){this.noise({dur:.12,vol:.1,type:"bandpass",f0:1200,f1:400,q:1.5})}block(){this.tone({type:"sawtooth",f0:180,f1:60,dur:.25,vol:.25}),this.noise({dur:.15,vol:.35,type:"lowpass",f0:1200}),this.crowdSwell(.9)}beep(t=!1){this.tone({type:"square",f0:t?1320:660,dur:t?.35:.14,vol:.12})}buzzer(){this.tone({type:"sawtooth",f0:196,dur:.9,vol:.22,attack:.02}),this.tone({type:"square",f0:98,dur:.9,vol:.12,attack:.02})}click(){this.tone({type:"triangle",f0:880,f1:1320,dur:.07,vol:.12})}win(){[523,659,784,1047].forEach((t,e)=>this.tone({type:"triangle",f0:t,dur:.3,vol:.18,delay:e*.11})),this.crowdSwell(1.5)}lose(){[392,330,262].forEach((t,e)=>this.tone({type:"triangle",f0:t,dur:.35,vol:.15,delay:e*.16}))}grapple(){this.noise({dur:.35,vol:.22,type:"bandpass",f0:600,f1:3200,q:2}),this.tone({type:"square",f0:220,f1:880,dur:.18,vol:.08})}hit(){this.tone({type:"sine",f0:140,f1:45,dur:.3,vol:.4}),this.noise({dur:.18,vol:.35,type:"lowpass",f0:1500})}item(){[880,1175,1568].forEach((t,e)=>this.tone({type:"triangle",f0:t,dur:.14,vol:.13,delay:e*.06}))}boxSpawn(){this.tone({type:"sine",f0:520,f1:1040,dur:.25,vol:.1})}dunk(){this.tone({type:"sine",f0:110,f1:40,dur:.45,vol:.5}),this.noise({dur:.3,vol:.4,type:"lowpass",f0:900}),this.rim(9);for(let t=1;t<5;t++)this.tone({type:"sine",f0:470+t*13,dur:.12,vol:.05/t,delay:t*.07});this.swish(),this.crowdSwell(1.4)}jetpack(){this.noise({dur:.9,vol:.22,type:"lowpass",f0:500,f1:1400,attack:.05})}punchWind(){this.tone({type:"sawtooth",f0:120,f1:420,dur:.22,vol:.12})}pow(){this.tone({type:"square",f0:90,f1:40,dur:.35,vol:.4}),this.noise({dur:.25,vol:.45,type:"lowpass",f0:2200})}freezeZap(){this.tone({type:"sine",f0:1800,f1:600,dur:.3,vol:.15}),this.noise({dur:.2,vol:.12,type:"highpass",f0:4e3})}frozen(){[2093,2637,3136].forEach((t,e)=>this.tone({type:"triangle",f0:t,dur:.25,vol:.09,delay:e*.04})),this.noise({dur:.3,vol:.2,type:"highpass",f0:3e3})}slip(){this.tone({type:"sine",f0:900,f1:200,dur:.4,vol:.2}),this.hit()}plop(){this.tone({type:"sine",f0:300,f1:160,dur:.12,vol:.18})}magnet(){this.tone({type:"sawtooth",f0:110,f1:150,dur:.8,vol:.08,attack:.05})}gulp(){[0,.12,.24].forEach(t=>this.tone({type:"sine",f0:260,f1:140,dur:.1,vol:.2,delay:t})),this.tone({type:"triangle",f0:660,f1:1320,dur:.3,vol:.1,delay:.36})}fire(){this.noise({dur:1,vol:.3,type:"bandpass",f0:400,f1:1600,q:.7,attack:.05}),this.crowdSwell(1.2)}swish2(){this.noise({dur:.14,vol:.12,type:"bandpass",f0:2400,f1:900,q:1.2})}crowdSwell(t=1){this.noise({dur:1.4*t,vol:.12*t,type:"bandpass",f0:700,f1:500,q:.6,attack:.15,bus:"crowd"}),this.noise({dur:1.1*t,vol:.07*t,type:"bandpass",f0:1600,q:.8,attack:.1,bus:"crowd"})}startCrowd(){if(!this.ok||this.crowd)return;let t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;let n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=520,n.Q.value=.5;let i=t.createGain();i.gain.value=.05,e.connect(n).connect(i).connect(this.crowdBus),e.start(),this.crowd={src:e,g:i}}stopCrowd(){if(this.crowd){try{this.crowd.src.stop()}catch{}this.crowd=null}}},vt=new Qc;var Le=r=>String(r??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Au=r=>{let t=Math.max(0,Math.round(r));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},Cv={Bronze:"bronze",Silver:"silver",Gold:"gold",Diamond:"diamond",Legend:"legend"},$i=(r,t)=>r?`<span class="tier t-${Cv[r]||"bronze"}">${Le(r)}${t!=null?` <b>${t}</b>`:""}</span>`:"";function Iv(r){if(!r)return"";let t=(Date.now()-r)/1e3;return t<90?"just now":t<3600?`${Math.round(t/60)} min ago`:t<86400?`${Math.round(t/3600)} h ago`:`${Math.round(t/86400)} d ago`}var Ru={idle:"Not connected",connecting:"Connecting\u2026",online:"Online",reconnecting:"Reconnecting\u2026",offline:"Can't reach the game server"},Cu={netStatusChip(){let r=this.game.online,t=r.state,e=r.leaderboard;return`<div class="net-chip s-${t}" id="netChip"><i></i><span>${Ru[t]}${t==="online"&&e?` \xB7 ${e.online} online`:""}</span></div>`},renderOnline(){let r=this.game.online,t=r.state,e=r.profile,i=t==="online"?"":"disabled",s=r.serverUrl(),a="";t==="offline"||t==="idle"?a=`<div class="panel net-down">
        <div class="kicker">Online play</div>
        <h3>${s?"Can't reach the game server":"No game server set"}</h3>
        <p class="opt-desc">${s?`Tried <code>${Le(s)}</code>. The server may be offline or starting up (free hosting can take ~30 s to wake), or this page may block connections.`:"Online play needs the Illegal Basketball server running somewhere. Set its address in Settings \u2192 Online."} Offline modes still work as normal.</p>
        <div class="row-btns"><button class="btn primary" data-action="net-retry">${at.restart}<span>Try again</span></button><button class="btn ghost" data-action="net-settings">Server address</button></div>
      </div>`:t!=="online"&&(a=`<div class="panel net-wait"><span class="spinner"></span><div><h3>${Ru[t]}</h3><p class="opt-desc">${Le(s)}</p></div></div>`);let o=this.pendingInvite,l=o?`<div class="panel invite-card">${at.sword}<div><b>${Le(o.from)}</b> challenged you to a 1v1</div><button class="btn primary sm" data-action="join-invite" ${i}>Join</button><button class="icon-btn" data-action="drop-invite" aria-label="Dismiss">${at.close}</button></div>`:"",c=e?`<div class="panel on-me">
        ${Vs(this.profile.cosmetics,52)}
        <div class="om-body"><div class="om-name">${Le(e.name)}</div><div class="om-sub">${$i(e.tier,e.rating)}</div></div>
        <div class="om-recs"><div><b>${e.rankedWins}\u2013${e.rankedLosses}</b><span>Ranked</span></div><div><b>${e.casualWins}\u2013${e.casualLosses}</b><span>Casual &amp; private</span></div></div>
      </div>`:"",h=(d,u,f,g,x="",m="")=>`<button class="on-card ${m}" data-action="${d}" ${i}>
        <span class="oc-ic">${u}</span><span class="oc-body"><span class="oc-title">${f}</span><span class="oc-desc">${g}</span></span>${x}${at.chevron}</button>`;return`${this.header("Play","Online",this.netStatusChip())}
      <div class="online">
        <div class="on-main">
          ${a}${l}${c}
          ${h("net-quick",at.play,"Quick match","Casual 1v1 against the next real player who is searching. No rating on the line.","","hot")}
          ${h("net-ranked",at.trophy,"Ranked 1v1","Rated against players near your level. Leaving a ranked match counts as a loss.",e?`<span class="oc-meta">${$i(e.tier,e.rating)}</span>`:"")}
          <div class="panel on-private">
            <div class="kicker">Private room</div>
            <p class="opt-desc">Play a friend: create a room and send them the 5-letter code. 2v2 rooms fill empty spots with bots.</p>
            <div class="row-btns">
              <button class="btn primary" data-action="net-create" data-mode="1v1" ${i}>${at.users}<span>Create 1v1</span></button>
              <button class="btn ghost" data-action="net-create" data-mode="2v2" ${i}><span>Create 2v2</span></button>
            </div>
            <form class="join-row" data-form="join">
              <input id="joinCode" maxlength="5" autocomplete="off" spellcheck="false" placeholder="CODE" aria-label="Room code" value="${Le(this.joinCode||"")}" ${i} />
              <button type="submit" class="btn" ${i}>Join room</button>
            </form>
          </div>
        </div>
        <aside class="on-side">
          ${this.renderBoards()}
          ${this.renderRivals()}
        </aside>
      </div>
      <footer class="on-foot"><span>Server: <code>${Le(s||"not set")}</code></span><span>Your online identity is a random key stored in this browser. No email or real name needed.</span></footer>`},renderBoards(){let r=this.game.online,t=r.leaderboard,e=this.boardTab||"ranked",n=r.profile&&r.profile.id,i="";return t?e==="ranked"?i=t.ranked.length?`<ol class="lb">${t.ranked.map((s,a)=>`<li class="${s.id===n?"me":""}"><span class="lb-n">${a+1}</span><span class="lb-name">${Le(s.name)}</span>${$i(s.tier)}<span class="lb-v">${s.rating}</span><span class="lb-s">${s.wins}\u2013${s.losses}</span></li>`).join("")}</ol>`:'<p class="opt-desc">No ranked games have been played on this server yet. Win one and you\u2019re on the board.</p>':i=t.weekly.length?`<ol class="lb">${t.weekly.map((s,a)=>`<li class="${s.id===n?"me":""}"><span class="lb-n">${a+1}</span><span class="lb-name">${Le(s.name)}</span><span class="lb-v">${s.wins} W</span><span class="lb-s">${s.games} played</span></li>`).join("")}</ol>`:'<p class="opt-desc">No online games yet this week. Wins in any online 1v1 count here and the board resets every Monday (UTC).</p>':i=`<p class="opt-desc">${r.state==="online"?"Loading\u2026":"Connect to see the leaderboards."}</p>`,`<div class="panel boards">
      <div class="bd-head"><h3>Leaderboard</h3><div class="seg sm">${[["ranked","Ranked"],["weekly","This week"]].map(([s,a])=>`<button class="seg-btn ${s===e?"on":""}" data-action="board-tab" data-tab="${s}">${a}</button>`).join("")}</div></div>
      ${i}
      ${t?`<div class="bd-foot">${t.totalPlayers} player${t.totalPlayers===1?"":"s"} on this server${e==="weekly"?` \xB7 week ${Le(t.week)}`:""}</div>`:""}
    </div>`},renderRivals(){let r=this.game.online,t=r.rivals,e=r.state==="online"?"":"disabled";return`<div class="panel rivals-panel"><div class="bd-head"><h3>Rivals</h3><span class="opt-desc">head-to-head</span></div>${t?t.length?`<ul class="rivals">${t.map(i=>`<li>
          <div class="rv-name">${Le(i.name)}</div>
          <div class="rv-rec"><b class="${i.wins>=i.losses?"up":"down"}">${i.wins}\u2013${i.losses}</b><span>${i.lastScore?`${i.lastWon?"W":"L"} ${i.lastWon?Math.max(...i.lastScore):Math.min(...i.lastScore)}\u2013${i.lastWon?Math.min(...i.lastScore):Math.max(...i.lastScore)} \xB7 `:""}${Iv(i.last)}</span></div>
          <button class="btn ghost sm" data-action="challenge" data-id="${Le(i.id)}" ${e}>${at.sword}<span>Challenge</span></button>
        </li>`).join("")}</ul>`:'<p class="opt-desc">Everyone you play online shows up here with your head-to-head record, so you can challenge them again.</p>':'<p class="opt-desc">Connect to see your rivals.</p>'}</div>`},renderSearch(){let r=this.game.online.queue,t=r&&r.mode==="ranked",e=r?Math.max(0,r.inQueue-1):0;return`<div class="search">
      <div class="sr-rings" aria-hidden="true"><i></i><i></i><i></i><span>${at.ball}</span></div>
      <div class="kicker">${t?"Ranked 1v1":"Quick match \xB7 1v1"}</div>
      <h2>Finding an opponent</h2>
      <div class="sr-time" id="searchT">0:00</div>
      <p class="sr-info" id="searchInfo">${this.searchInfo(r,e)}</p>
      <button class="btn ghost lg" data-action="net-cancel" autofocus>${at.close}<span>Cancel</span><kbd>Esc</kbd></button>
      <p class="opt-desc sr-alt" id="searchAlt" ${e||!r?"hidden":""}>Nobody else is searching right now. You can keep waiting or <button class="link" data-action="net-create" data-mode="1v1">create a private room</button> and invite a friend.</p>
    </div>`},searchInfo(r,t){if(!r)return"Joining the queue\u2026";let e=r.mode==="ranked";return`${t?`${t} other player${t===1?"":"s"} searching`:"You are the only one searching"} \xB7 ${r.online} online${e?" \xB7 matching near your rating, widening over time":""}`},renderLobby(){let t=this.game.online.room;if(!t)return`${this.header("Online","Room")}<p class="opt-desc">You're not in a room.</p>`;let e=t.you,n=t.hostId===e,i=t.players.find(_=>_.id===e),s=t.kind==="private",a=[0,1].map(_=>t.players.filter(b=>b.team===_)),o=t.mode==="2v2"?2:1,l=(_,b)=>{if(!_)return`<div class="seat empty"><span class="seat-av"></span><div><div class="seat-name">${s?"Waiting for a player\u2026":""}</div><div class="seat-sub">${t.mode==="2v2"?"A bot plays here if nobody joins":"Share the room code"}</div></div></div>`;let v=[_.id===t.hostId?'<span class="tag">Host</span>':"",_.connected?"":'<span class="tag warn">Connection lost</span>'].join(""),I=_.id===t.hostId&&s?"":`<span class="rdy ${_.ready?"on":""}">${_.ready?`${at.check} Ready`:"Not ready"}</span>`;return`<div class="seat t${b} ${_.id===e?"me":""}">${Vs({skin:_.look.skin||"s2",number:_.look.number??0},46)}
        <div><div class="seat-name">${Le(_.name)}${_.id===e?" <small>(you)</small>":""}</div><div class="seat-sub">${$i(_.tier,_.rating)}${v}</div></div>${s?I:""}</div>`},c=_=>`<div class="team-col"><div class="tc-head" style="--c:${te[_].css}">${_===0?"Home":"Away"}</div>${Array.from({length:o},(b,v)=>l(a[_][v],_)).join("")}</div>`,h=t.h2h,d=t.players.find(_=>_.id!==e),u=h&&d&&(h.wins||h.losses)?`<div class="h2h">${at.sword}<span>You vs ${Le(d.name)}: <b>${h.wins}\u2013${h.losses}</b>${h.last?` \xB7 last game ${h.last.won?"won":"lost"} ${Le(h.last.score.join("\u2013"))}`:""}</span></div>`:d?`<div class="h2h">${at.sword}<span>First game against ${Le(d.name)}</span></div>`:"",f=(_,b,v)=>`<div class="seg">${b.map(([I,w])=>`<button class="seg-btn ${String(I)===String(v)?"on":""}" data-action="room-set" data-key="${_}" data-val="${I}" ${n&&t.state==="lobby"?"":"disabled"}>${w}</button>`).join("")}</div>`,g=s?`<div class="panel room-set">
        <div class="kicker">Match settings ${n?"":'<span class="muted">\xB7 set by the host</span>'}</div>
        <div class="rs-row"><span>Mode</span>${f("mode",[["1v1","1v1"],["2v2","2v2"]],t.mode)}</div>
        <div class="rs-row"><span>Length</span>${f("duration",uo.map(_=>[_,Au(_)]),t.settings.duration)}</div>
        <div class="rs-row"><span>Item boxes</span>${f("items",[["true","On"],["false","Off"]],t.settings.items)}</div>
        ${t.mode==="2v2"&&t.state==="lobby"?'<button class="btn ghost sm" data-action="room-swap">Switch team</button>':""}
      </div>`:"",x,m=this.lobbyWhy(t);t.state==="countdown"?x=`<div class="lobby-cd"><span>Tip-off in</span><b id="lobbyCd">${Math.ceil(t.countdown)}</b></div>`:s?n?x=`<span class="lb-why">${m?Le(m):"Everyone is ready"}</span><button class="btn primary xl" data-action="room-start" ${m?"disabled":""} autofocus>${at.play}<span>Start match</span></button>`:x=`<span class="lb-why">${i&&i.ready?"Waiting for the host to start":"Press ready when you are"}</span><button class="btn ${i&&i.ready?"ghost":"primary"} xl" data-action="room-ready" autofocus>${i&&i.ready?"Not ready":`${at.check}<span>Ready</span>`}</button>`:x='<div class="lobby-cd"><span>Starting\u2026</span></div>';let p=s?"Private room":t.kind==="ranked"?"Ranked match found":"Match found";return`${this.header("Online",p,this.netStatusChip(),"room-leave")}
      <div class="lobby">
        <div class="lobby-main">
          ${s?`<div class="panel code-card"><div><div class="kicker">Room code</div><div class="code" id="roomCode">${Le(t.code)}</div><p class="opt-desc">Your friend opens Online \u2192 Join room and types this code.</p></div>
            <button class="btn ghost" data-action="copy-code">${at.copy}<span>Copy</span></button></div>`:""}
          <div class="teams">${c(0)}<div class="vs">VS</div>${c(1)}</div>
          ${u}
        </div>
        ${g}
      </div>
      <div class="setup-bar lobby-bar"><button class="btn ghost" data-action="room-leave">Leave room</button><div class="lb-right">${x}</div></div>`},lobbyWhy(r){let t=r.players.filter(e=>e.connected);return t.length<2?"Waiting for another player to join":r.mode==="1v1"&&r.players.filter(e=>e.team===0).length!==1?"Teams are uneven":t.some(e=>!e.ready&&e.id!==r.hostId)?"Waiting for everyone to be ready":""},tickOnline(){let r=this.game.online;if(this.current==="search"&&r.queue){let t=document.getElementById("searchT");t&&(t.textContent=Au((Date.now()-this.searchStart)/1e3))}if((this.current==="lobby"||this.current==="results")&&r.room&&r.room.state==="countdown"){let t=Math.max(0,r.room.countdown-(performance.now()-this.roomAt)/1e3),e=document.getElementById("lobbyCd")||document.getElementById("rmCd");e&&(e.textContent=Math.max(1,Math.ceil(t)))}},renderOnlineResult(){let r=this.game,t=r.lastResult.online,e=r.online,n=e.profile&&e.profile.id,i=t.players.find(l=>l.id&&l.id!==n),s="";if(t.ranked){let l=t.delta&&n?t.delta[n]:null;s=`<div class="or-rating"><div class="kicker">Ranked</div><div class="orr-row"><b class="${l>0?"up":l<0?"down":""}">${l==null?"\xB10":l>0?`+${l}`:l}</b><span>rating \u2192 ${t.rating??"\u2013"}</span>${$i(t.tier)}</div>${l==null?'<p class="opt-desc">This match didn\u2019t change ratings.</p>':""}</div>`}let a=t.h2h,o=a&&i?`<div class="or-h2h">${at.sword}<span>You vs ${Le(i.name)}: <b>${a.wins}\u2013${a.losses}</b></span></div>`:"";return`<div class="panel res-online">${s}${o}<div id="rmBlock">${this.rematchBlock()}</div></div>`},rematchBlock(){let t=this.game.online.room,e=this.game.lastResult&&this.game.lastResult.online;if(!t)return'<p class="opt-desc">The room has closed.</p>';if(t.state==="countdown")return`<div class="rm-cd">Rematch in <b id="rmCd">${Math.ceil(t.countdown)}</b></div>`;let n=t.you;if(!t.players.filter(a=>a.id!==n).length)return`<p class="opt-desc">${e&&e.forfeit?"Your opponent left the room.":"Everyone else left the room."}</p>`;let s=t.players.filter(a=>a.rematch);return`<ul class="rm-list">${t.players.map(a=>`<li><span>${Le(a.name)}${a.id===n?" (you)":""}</span>${a.connected?a.rematch?`<b>${at.check} Rematch</b>`:"<em>deciding\u2026</em>":"<em>disconnected</em>"}</li>`).join("")}</ul>
      <p class="opt-desc">${s.length?`${s.length} of ${t.players.length} want a rematch.`:"A rematch starts when everyone votes for it."}</p>`},onlineClick(r,t){let e=this.game,n=e.online;switch(r){case"go-online":return n.ensureConnected(),this.go("online"),!0;case"net-retry":return n.disconnect(),n.ensureConnected(),this.rerender(),!0;case"net-settings":return this.settingsTab="online",this.go("settings"),!0;case"net-quick":return n.findMatch("casual"),this.searchStart=Date.now(),this.go("search"),!0;case"net-ranked":return n.findMatch("ranked"),this.searchStart=Date.now(),this.go("search"),!0;case"net-cancel":return n.cancelSearch(),this.go("online",{push:!1}),!0;case"net-create":return n.queue&&n.cancelSearch(),n.createRoom(t.dataset.mode),!0;case"board-tab":return this.boardTab=t.dataset.tab,this.rerender(),!0;case"challenge":return n.challenge(t.dataset.id),!0;case"join-invite":return this.pendingInvite&&(n.joinRoom(this.pendingInvite.code),this.pendingInvite=null),!0;case"drop-invite":return this.pendingInvite=null,this.rerender(),!0;case"copy-code":{let i=n.room&&n.room.code;if(!i)return!0;let s=()=>this.toast(`Code ${i} copied`);try{navigator.clipboard.writeText(i).then(s,()=>this.toast(`Room code: ${i}`))}catch{this.toast(`Room code: ${i}`)}return!0}case"room-ready":{let i=n.room.players.find(s=>s.id===n.room.you);return n.setReady(!(i&&i.ready)),!0}case"room-start":return n.start(),!0;case"room-set":{let i=t.dataset.key,s=t.dataset.val;return n.roomSettings({[i]:i==="duration"?+s:i==="items"?s==="true":s}),!0}case"room-swap":return n.roomSettings({swapTeam:1}),!0;case"room-leave":return this.confirm("Leave the room?",n.room&&n.room.kind==="private"?"Your friend stays in the room and can invite someone else.":"You will go back to the online menu.","Leave",!0).then(i=>{i&&(n.leaveRoom(),this.go("online",{reset:!0,force:!0}),this.stack=["home"])}),!0;case"net-rematch":return n.rematch(),!0;case"net-lobby":return n.toLobby(),!0;case"net-leave":return e.leaveOnlineMatch(),!0;case"net-quit":return this.confirm("Leave the match?",e.onlineInfo&&e.onlineInfo.ranked?"The match keeps going without you and counts as a loss, including your rating.":e.match.teamSize>1?"A bot takes your spot for the rest of the match.":"The match ends and counts as a loss for you.","Leave match",!0).then(i=>i&&e.leaveOnlineMatch()),!0;default:return!1}},onNet(r){let t=this.game.online;if(r==="room"&&(this.roomAt=performance.now()),r==="queue"){if(t.queue&&this.current!=="search"&&this.game.state==="menu"){this.searchStart=Date.now()-t.queue.waited*1e3,this.go("search",{force:!0});return}if(!t.queue&&this.current==="search"){t.room||this.go("online",{push:!1,force:!0});return}if(this.current==="search"){let e=Math.max(0,t.queue.inQueue-1),n=document.getElementById("searchInfo");n&&(n.textContent=this.searchInfo(t.queue,e).replace(/<[^>]+>/g,""));let i=document.getElementById("searchAlt");i&&(i.hidden=e>0)}return}if(r==="left"&&this.current==="lobby"){this.go("online",{reset:!0,force:!0}),this.stack=["home"];return}if(this.current==="results"&&this.game.lastResult&&this.game.lastResult.online){let e=document.getElementById("rmBlock");e&&(e.innerHTML=this.rematchBlock());let n=document.getElementById("resActs");n&&(n.outerHTML=this.onlineResultActions());return}if(["online","lobby"].includes(this.current)){let e=document.activeElement;if(e&&e.id==="joinCode"){this.joinCode=e.value;return}this.rerender()}this.current==="settings"&&this.settingsTab==="online"&&this.rerender()},onlineResultActions(){let t=this.game.online.room,e=t&&t.you,n=t&&t.players.find(a=>a.id===e),i=t?t.players.filter(a=>a.id!==e&&a.connected):[];return`<div class="res-actions" id="resActs">
      <button class="btn primary xl" data-action="net-rematch" ${t&&t.state==="results"&&i.length>0&&!(n&&n.rematch)?"":"disabled"} autofocus>${at.restart}<span>${n&&n.rematch?"Waiting for opponent":"Rematch"}</span></button>
      ${t&&t.kind==="private"?`<button class="btn ghost lg" data-action="net-lobby" ${t.state==="results"?"":"disabled"}>Back to lobby</button>`:""}
      <button class="btn ghost lg" data-action="share-card">${at.share}<span>Share result</span></button>
      <button class="btn ghost lg" data-action="net-leave">Leave</button>
    </div>`},showLobby(){if(this.game.state==="results"){this.game.exitOnline("lobby");return}this.current!=="lobby"?(this.go("lobby",{force:!0}),this.stack=["home","online"]):this.rerender()},showInvite(r){this.pendingInvite=r;let t=this.game;if(t.state==="playing"||t.state==="paused"){t.hud.feed(`<b>${Le(r.from)}</b> challenged you \u2014 open Online after this match`,"#ffc857",at.sword);return}this.current==="online"&&this.rerender(),this.confirm(`${r.from} challenges you`,"Join their private 1v1 room now?","Join",!1).then(e=>{e&&this.pendingInvite&&(t.online.ensureConnected(),t.online.joinRoom(this.pendingInvite.code),this.pendingInvite=null)})}};function Pv(r,t,e,n,i,s){r.beginPath(),r.moveTo(t,e),r.lineTo(t+n-s,e),r.lineTo(t+n,e+s),r.lineTo(t+n,e+i),r.lineTo(t+s,e+i),r.lineTo(t,e+i-s),r.closePath()}function Lv(r){let t=r.lastResult,e=t.match,n=r.me,i=n.stats,s=r.teamNames(),a=1200,o=630,l=document.createElement("canvas");l.width=a,l.height=o;let c=l.getContext("2d"),h=c.createLinearGradient(0,0,a,o);h.addColorStop(0,"#0b0d12"),h.addColorStop(1,"#151b26"),c.fillStyle=h,c.fillRect(0,0,a,o);let d=c.createRadialGradient(a*.78,o*.2,10,a*.78,o*.2,520);d.addColorStop(0,t.won?"rgba(255,107,36,0.35)":"rgba(120,140,170,0.22)"),d.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=d,c.fillRect(0,0,a,o),c.strokeStyle="rgba(255,255,255,0.05)",c.lineWidth=3,c.beginPath(),c.arc(a*.86,o*.5,230,0,Math.PI*2),c.stroke(),c.beginPath(),c.moveTo(a*.86,0),c.lineTo(a*.86,o),c.stroke();let u='"Big Shoulders Display", "Arial Narrow", Impact, sans-serif',f='"Barlow Condensed", "Arial Narrow", sans-serif';c.textBaseline="alphabetic",c.fillStyle="#f5f7fa",c.font=`italic 900 54px ${u}`,c.fillText("ILLEGAL",64,96),c.fillStyle="#ff6b24",c.font=`800 26px ${u}`,c.fillText("B A S K E T B A L L",66,128);let g=t.online,x=g?`ONLINE \xB7 ${g.ranked?"RANKED":"CASUAL"} \xB7 ${e.teamSize}V${e.teamSize}`:(rn[t.mode]||rn.quick).short;c.fillStyle="#a3acb9",c.font=`700 22px ${f}`,c.textAlign="right",c.fillText(`${x}  \xB7  ${new Date().toLocaleDateString()}`,a-64,92),c.textAlign="left",c.fillStyle=t.won?"#ffc857":"#c9ced6",c.font=`italic 900 120px ${u}`,c.fillText(t.won?"VICTORY":"DEFEAT",60,270);let m=360;c.font=`800 30px ${f}`,c.fillStyle=te[0].css,c.fillRect(64,m-26,8,34),c.fillStyle="#f5f7fa",c.fillText(s[0],86,m),c.font=`900 92px ${u}`;let p=`${e.score[0]}  \u2013  ${e.score[1]}`;c.fillText(p,64,m+96);let _=c.measureText(p).width;c.font=`800 30px ${f}`,c.fillStyle=te[1].css,c.fillRect(64+_+30,m+46,8,34),c.fillStyle="#f5f7fa",c.fillText(s[1],64+_+52,m+74);let b=[[i.pts,"PTS"],[`${i.fgm}/${i.fga}`,"FG"],[i.reb,"REB"],[i.ast,"AST"],[i.stl,"STL"],[i.blk,"BLK"]],v=64,I=540;for(let[w,A]of b)c.fillStyle="rgba(29,36,48,0.9)",Pv(c,v,I-58,120,82,10),c.fill(),c.fillStyle="#f5f7fa",c.font=`900 40px ${u}`,c.fillText(String(w),v+16,I-10),c.fillStyle="#a3acb9",c.font=`700 16px ${f}`,c.fillText(A,v+16,I+12),v+=132;return c.textAlign="right",c.fillStyle="#f5f7fa",c.font=`800 36px ${f}`,c.fillText(n.name,a-64,470),g&&g.ranked&&g.rating&&(c.fillStyle="#ffc857",c.font=`700 24px ${f}`,c.fillText(`${g.tier} \xB7 ${g.rating}`,a-64,504)),t.highlight&&(c.fillStyle="#ff6b24",c.font=`700 18px ${f}`,c.fillText("MOMENT OF THE MATCH",a-64,548),c.fillStyle="#f5f7fa",c.font=`800 26px ${f}`,c.fillText(t.highlight.title.toUpperCase(),a-64,580)),c.textAlign="left",l}async function Iu(r){if(!r.lastResult)return"";let t=Lv(r),e=await new Promise(s=>t.toBlob(s,"image/png"));if(!e)return"Could not create the image";let n=new File([e],"illegal-basketball-result.png",{type:"image/png"});try{if(navigator.canShare&&navigator.canShare({files:[n]}))return await navigator.share({files:[n],title:"Illegal Basketball",text:r.lastResult.won?"Got the W in Illegal Basketball":"Illegal Basketball result"}),""}catch(s){if(s&&s.name==="AbortError")return""}let i=document.createElement("a");return i.href=URL.createObjectURL(e),i.download=n.name,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(i.href),4e3),"Result card saved as an image"}function th(r){let t=2166136261;for(let e=0;e<r.length;e++)t^=r.charCodeAt(e),t=Math.imul(t,16777619)>>>0;return t>>>0}var ku=[{id:"win1",name:"Win a match",goal:1,stat:r=>r.won?1:0},{id:"play3",name:"Play 3 matches",goal:3,stat:()=>1},{id:"pts20",name:"Score 20 points",goal:20,stat:r=>r.s.pts},{id:"stl3",name:"Get 3 steals",goal:3,stat:r=>r.s.stl},{id:"blk2",name:"Block 2 shots",goal:2,stat:r=>r.s.blk},{id:"dunk3",name:"Throw down 3 dunks",goal:3,stat:r=>r.s.dunks},{id:"three3",name:"Hit 3 three-pointers",goal:3,stat:r=>r.s.tpm},{id:"ctst6",name:"Contest 6 shots",goal:6,stat:r=>r.s.ctst},{id:"reb6",name:"Grab 6 rebounds",goal:6,stat:r=>r.s.reb},{id:"ast4",name:"Make 4 assists (team modes)",goal:4,stat:r=>r.s.ast},{id:"online1",name:"Finish an online match",goal:1,stat:r=>r.online?1:0},{id:"clean1",name:"Win with 2 turnovers or fewer",goal:1,stat:r=>r.won&&r.s.tov<=2?1:0}],Du=[{id:"w_win5",name:"Win 5 matches",goal:5,stat:r=>r.won?1:0},{id:"w_pts120",name:"Score 120 points",goal:120,stat:r=>r.s.pts},{id:"w_def15",name:"15 steals + blocks",goal:15,stat:r=>r.s.stl+r.s.blk},{id:"w_play10",name:"Play 10 matches",goal:10,stat:()=>1},{id:"w_online3",name:"Finish 3 online matches",goal:3,stat:r=>r.online?1:0},{id:"w_dunk12",name:"Throw down 12 dunks",goal:12,stat:r=>r.s.dunks},{id:"w_three10",name:"Hit 10 three-pointers",goal:10,stat:r=>r.s.tpm}],fo=150,po=400,Pu=["chaos","2v2","1v1","quick"],eh=r=>String(r).padStart(2,"0");function kv(r=new Date){return`${r.getFullYear()}-${eh(r.getMonth()+1)}-${eh(r.getDate())}`}function zu(r=new Date){let t=new Date(r.getFullYear(),r.getMonth(),r.getDate()),e=(t.getDay()+6)%7;t.setDate(t.getDate()-e+3);let n=new Date(t.getFullYear(),0,4),i=1+Math.round(((t-n)/864e5-3+(n.getDay()+6)%7)/7);return`${t.getFullYear()}-W${eh(i)}`}function Lu(r,t,e){let n=[],i=th(e),s=r.slice();for(;n.length<t&&s.length;)i=th(String(i)),n.push(s.splice(i%s.length,1)[0]);return n}function Tr(r=new Date){return Pu[th(zu(r))%Pu.length]}function Nu(r,t=new Date){let e=r.challenges||(r.challenges={}),n=kv(t),i=zu(t);return e.day!==n&&(e.day=n,e.daily=Lu(ku,3,`d${n}`).map(s=>({id:s.id,n:0}))),e.week!==i&&(e.week=i,e.weekly=Lu(Du,3,`w${i}`).map(s=>({id:s.id,n:0}))),e}var Uu=r=>ku.find(t=>t.id===r)||Du.find(t=>t.id===r);function mo(r,t=new Date){let e=Nu(r,t),n=(i,s)=>{let a=Uu(i.id);return a?{id:i.id,name:a.name,n:Math.min(i.n,a.goal),goal:a.goal,done:i.n>=a.goal,xp:s==="daily"?fo:po,kind:s}:null};return{daily:e.daily.map(i=>n(i,"daily")).filter(Boolean),weekly:e.weekly.map(i=>n(i,"weekly")).filter(Boolean)}}function Ou(r,t,e,n,i,s=new Date){if(n==="practice")return[];let a=Nu(r,s),o={s:t.stats,won:e,mode:n,online:i},l=[];for(let[c,h]of[[a.daily,fo],[a.weekly,po]])for(let d of c){let u=Uu(d.id);!u||d.n>=u.goal||(d.n+=Math.max(0,u.stat(o)||0),d.n>=u.goal&&l.push({name:u.name,xp:h}))}return l}var en=r=>document.getElementById(r),re=r=>String(r).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Ar=r=>`#${r.toString(16).padStart(6,"0")}`,nh=(r,t)=>t?Math.round(r/t*100):0,Fu=Object.keys(kt.POOL),Dv=["home","modes","setup","loadout","customize","progress","settings","controls","online","search","lobby"],go=r=>{let t=Math.max(0,Math.round(r));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`};function Vs(r,t=44){let e=Ar(Pn("skin",r.skin).color);return`<svg class="avatar" width="${t}" height="${t}" viewBox="0 0 48 48" aria-hidden="true">
    <rect width="48" height="48" fill="#1d2430"/>
    <circle cx="24" cy="15" r="7.5" fill="${e}"/>
    <path d="M10 48V30c0-5 3-8 7-9l3-1c1 2.4 2.4 3.4 4 3.4s3-1 4-3.4l3 1c4 1 7 4 7 9v18z" fill="#f3f1ec"/>
    <path d="M17 21l3-1c1 2.4 2.4 3.4 4 3.4s3-1 4-3.4l3 1" stroke="#d81f34" stroke-width="2" fill="none"/>
    <text x="24" y="40.5" text-anchor="middle" font-family="Big Shoulders Display, Arial Narrow, sans-serif" font-weight="800" font-size="13" fill="#d81f34">${re(r.number)}</text>
  </svg>`}function xo(r,t){switch(r){case"skin":return`<span class="sw-skin" style="--c:${Ar(t.color)}"></span>`;case"hair":return`<span class="sw-icon">${at.hair}</span>`;case"shoes":return`<svg class="sw-shoe" viewBox="0 0 64 36"><path d="M4 26V10l10 3 8-9 8 10 20 6c4 1 6 4 6 7v2z" fill="${Ar(t.colors[0])}" stroke="#0b0d12" stroke-width="1.5"/><path d="M22 4l8 10 10 3" stroke="${Ar(t.colors[1])}" stroke-width="4" fill="none"/><path d="M4 26h52v6H4z" fill="#e9e9e9" stroke="#0b0d12" stroke-width="1.5"/></svg>`;case"gear":return`<span class="sw-icon">${at.band}</span>`;case"ball":return`<svg class="sw-ball" viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="${t.colors[0]}"/><g stroke="${t.colors[1]}" stroke-width="2" fill="none"><path d="M3 20h34M20 3v34"/><path d="M8 8c5 5 5 19 0 24M32 8c-5 5-5 19 0 24"/></g><circle cx="14" cy="13" r="6" fill="#fff" opacity=".12"/></svg>`;case"body":return`<span class="sw-icon sw-body b-${t.id}">${at.body}</span>`;case"face":return`<span class="sw-icon">${at.face}</span>`;case"fx":return`<span class="sw-fx">${t.colors.map((e,n)=>`<i style="--c:${Ar(e)};--i:${n}"></i>`).join("")}</span>`;default:return""}}var Bu=r=>`<span class="art art-${r}" aria-hidden="true"></span>`,Rr=class{constructor(t){this.game=t,this.root=en("ui"),this.stack=[],this.busy=!1,this.current=null,this.setup=null,this.loadoutFocus=null,this.custom=null,this.settingsTab="graphics",this.root.addEventListener("click",e=>this.onClick(e)),this.root.addEventListener("input",e=>this.onInput(e)),this.root.addEventListener("change",e=>this.onInput(e)),this.root.addEventListener("submit",e=>this.onSubmit(e)),setInterval(()=>this.tickOnline(),250),this.root.addEventListener("pointerdown",e=>{e.target.closest('button:not([disabled]), [role="tab"], .tile')&&(vt.unlock(),vt.click())}),window.addEventListener("keydown",e=>this.onKey(e)),this.bindPreviewDrag()}get save(){return this.game.save}get profile(){return this.game.save.profile}go(t,e={}){if(this.busy=performance.now()-(this.lastGo||0)<200,this.busy&&!e.force)return;this.lastGo=performance.now();let n=this.current;if(n===t&&!e.rerender)return;e.reset&&(this.stack=[]),n&&e.push!==!1&&!e.reset&&n!==t&&this.stack.push(n),this.leave(n,t),this.current=t;let i=this.screenEl(t);i.innerHTML=this.render(t),i.hidden=!1,i.classList.remove("leaving"),i.classList.add("entering"),clearTimeout(this.busyT),this.busyT=setTimeout(()=>i.classList.remove("entering"),260);for(let s of this.root.querySelectorAll(".screen"))s!==i&&(s.hidden=!0);document.body.dataset.screen=t,this.enter(t,n),requestAnimationFrame(()=>{let s=i.querySelector("[autofocus]");this.game.isTouch||(s?s.focus({preventScroll:!0}):(i.tabIndex=-1,i.focus({preventScroll:!0})))})}back(){if(performance.now()-(this.lastGo||0)<200)return;if(this.current==="customize"&&this.customDirty()){this.confirm("Discard changes?","Your new look has not been saved.","Discard",!0).then(e=>{e&&(this.custom=null,this.back())});return}let t=this.stack.pop();t?this.go(t,{push:!1}):this.game.state==="paused"?this.go("pause",{push:!1}):this.go("home",{push:!1})}hideAll(){this.leave(this.current,null),this.current=null,this.stack=[];for(let t of this.root.querySelectorAll(".screen"))t.hidden=!0;document.body.dataset.screen=""}screenEl(t){let e=en(`scr-${t}`);return e||(e=document.createElement("section"),e.id=`scr-${t}`,e.className=`screen scr-${t}`,e.hidden=!0,this.root.appendChild(e)),e}enter(t,e){let n=this.game;n.world.setMenuMood(Dv.includes(t)&&t!=="customize"),t==="customize"&&n.enterPreview(this.custom.draft),t==="results"&&this.animateXp(),t==="online"&&e!=="online"&&(n.online.ensureConnected(),n.online.state==="online"&&n.online.refreshBoards())}leave(t,e){t==="customize"&&e!=="customize"&&this.game.exitPreview()}rerender(){this.current&&this.go(this.current,{rerender:!0,push:!1,force:!0})}render(t){switch(t){case"home":return this.renderHome();case"modes":return this.renderModes();case"setup":return this.renderSetup();case"loadout":return this.renderLoadout();case"customize":return this.renderCustomize();case"progress":return this.renderProgress();case"settings":return this.renderSettings();case"controls":return this.renderControls();case"pause":return this.renderPause();case"results":return this.renderResults();case"online":return this.renderOnline();case"search":return this.renderSearch();case"lobby":return this.renderLobby();default:return""}}header(t,e,n="",i="back"){return`<header class="scr-head">
      <button class="btn-back" data-action="${i}" aria-label="Back">${at.back}<span>Back</span><kbd>Esc</kbd></button>
      <div class="scr-title"><div class="kicker">${t}</div><h2>${e}</h2></div>
      <div class="scr-head-right">${n}</div>
    </header>`}profileChip(t=!1){let e=this.profile,n=vn(e.xp);return`<div class="profile-chip ${t?"compact":""}">
      ${Vs(e.cosmetics,t?36:48)}
      <div class="pc-body">
        <div class="pc-name"><span>${re(e.name)}</span>${t?"":`<button class="icon-btn" data-action="rename" aria-label="Change display name" title="Change display name">${at.edit}</button>`}</div>
        <div class="pc-level"><span class="lvl">LVL ${n.level}</span><span class="xpbar"><i style="width:${(n.pct*100).toFixed(1)}%"></i></span><span class="xptext">${n.need?`${n.into} / ${n.need} XP`:"MAX"}</span></div>
      </div>
    </div>`}renderHome(){let t=this.profile,e=vn(t.xp),n=Fs().find(o=>o.lvl>e.level),i=t.career,s=t.loadout.map(o=>`<i class="mini-item">${Hn[o]}</i>`).join(""),a=vt.muted;return`
      <div class="home-shade" aria-hidden="true"></div>
      <div class="home-top">
        <div class="home-tools">
          <button class="icon-btn lg" data-action="sound" aria-label="${a?"Unmute":"Mute"}" title="${a?"Sound off":"Sound on"}">${a?at.mute:at.sound}</button>
          <button class="icon-btn lg" data-action="fullscreen" aria-label="Toggle fullscreen" title="Fullscreen">${at.fullscreen}</button>
        </div>
        ${this.profileChip()}
      </div>
      <div class="home-main">
        <h1 class="logo" aria-label="Illegal Basketball">
          <span class="logo-l1"><span class="logo-tape" aria-hidden="true"></span>ILLEGAL</span>
          <span class="logo-l2"><b>BASKETBALL</b></span>
        </h1>
        <p class="tagline">No refs. No rules. Just buckets.</p>
        <nav class="home-nav" aria-label="Main menu">
          <button class="btn-play" data-action="go" data-to="modes" autofocus>
            <span class="bp-icon">${at.play}</span>
            <span class="bp-text"><span class="bp-label">PLAY</span><span class="bp-sub">Quick Match \xB7 1v1 \xB7 2v2 \xB7 Chaos \xB7 Practice</span></span>
            <kbd>Enter</kbd>
          </button>
          <button class="nav-row nav-online" data-action="go-online">${at.globe}<span class="nr-label">Play online</span><span class="nr-meta">${this.homeOnlineMeta()}</span>${at.chevron}</button>
          <button class="nav-row" data-action="go" data-to="loadout">${at.loadout}<span class="nr-label">Loadout</span><span class="nr-meta">${s}</span>${at.chevron}</button>
          <button class="nav-row" data-action="go" data-to="customize">${at.customize}<span class="nr-label">Customize</span><span class="nr-meta">#${re(t.cosmetics.number)} \xB7 ${re(Pn("shoes",t.cosmetics.shoes).name)}</span>${at.chevron}</button>
          <button class="nav-row" data-action="go" data-to="progress">${at.progress}<span class="nr-label">Progression</span><span class="nr-meta">Level ${e.level}</span>${at.chevron}</button>
          <button class="nav-row" data-action="go" data-to="settings">${at.settings}<span class="nr-label">Settings</span><span class="nr-meta"></span>${at.chevron}</button>
        </nav>
        ${t.tutorialDone?"":`<button class="learn-link" data-action="learn">${at.info}<span>New here? <b>Learn the basics</b> on the practice court</span></button>`}
      </div>
      <aside class="home-side">
        ${n?`<div class="side-card unlock-card">
          <div class="kicker">Next unlock \xB7 Level ${n.lvl}</div>
          <div class="uc-row"><span class="uc-sw">${xo(n.cat,n)}</span><div><div class="uc-name">${re(n.name)}</div><div class="uc-cat">${re(n.catLabel)}</div></div></div>
          <div class="xpbar thin"><i style="width:${(e.pct*100).toFixed(1)}%"></i></div>
          <div class="uc-foot">${e.need-e.into} XP to level ${e.level+1}</div>
        </div>`:""}
        ${this.challengeCard()}
        <div class="side-card record-card">
          <div class="kicker">Your record</div>
          <div class="rc-grid">
            <div><b>${i.wins}</b><span>Wins</span></div><div><b>${i.losses}</b><span>Losses</span></div>
            <div><b>${i.games?nh(i.wins,i.games)+"%":"\u2013"}</b><span>Win rate</span></div><div><b>${i.best||"\u2013"}</b><span>Best game</span></div>
          </div>
        </div>
      </aside>
      <footer class="home-foot">
        <span>Progress is saved in this browser \xB7 online ratings live on the game server</span>
        <span class="keys"><kbd>\u2191</kbd><kbd>\u2193</kbd> navigate \xB7 <kbd>Enter</kbd> select</span>
      </footer>`}challengeList(t){return`<ul class="chal">${t.map(e=>`<li class="${e.done?"done":""}"><span class="ch-name">${e.done?at.check:""}${re(e.name)}</span><span class="ch-n">${e.done?`+${e.xp} XP`:`${e.n}/${e.goal}`}</span><span class="xpbar thin"><i style="width:${(e.n/e.goal*100).toFixed(0)}%"></i></span></li>`).join("")}</ul>`}challengeCard(){let{daily:t}=mo(this.profile),e=t.filter(n=>!n.done).length;return`<div class="side-card chal-card"><div class="kicker">Today's challenges <span class="muted">${e?`${e} left`:"all done"}</span></div>${this.challengeList(t)}</div>`}homeOnlineMeta(){let t=this.game.online,e=t.profile;return t.state==="online"&&e?`${$i(e.tier,e.rating)}`:"Quick match \xB7 Ranked \xB7 Private rooms"}renderModes(){let t=this.profile.career.byMode,e=(n,i="")=>{let s=rn[n],a=t[n];return`<button class="mode-card mc-${n} ${i}" data-action="pick-mode" data-mode="${n}" ${n==="quick"?"autofocus":""}>
        ${Bu(n)}
        <span class="mc-shade"></span>
        <span class="mc-top">${n===Tr()?'<span class="tag gold">Featured \xB7 +25% XP</span>':n==="quick"?'<span class="tag hot">Recommended</span>':n==="chaos"?'<span class="tag">Party mode</span>':n==="practice"?'<span class="tag">Solo</span>':'<span class="tag">vs bots</span>'}
          <span class="mc-record">${a?`${a.games} played${n==="practice"?"":` \xB7 ${a.wins} W`}`:"New"}</span></span>
        <span class="mc-body">
          <span class="mc-name">${s.short}</span>
          <span class="mc-desc">${s.desc}</span>
          <span class="mc-chips">${s.chips.map(o=>`<i>${o}</i>`).join("")}</span>
        </span>
        <span class="mc-cta">Select ${at.chevron}</span>
      </button>`};return`${this.header("Play","Choose a mode",this.profileChip(!0))}
      <div class="mode-grid">
        ${e("quick","featured")}
        ${e("1v1")}${e("2v2")}${e("chaos")}${e("practice")}
      </div>`}renderSetup(){let t=this.setup,e=rn[t.mode],n=(l,c,h)=>`<div class="seg" role="radiogroup">${c.map(([d,u])=>`<button role="radio" aria-checked="${String(d)===String(h)}" class="seg-btn ${String(d)===String(h)?"on":""}" data-action="setup" data-key="${l}" data-val="${d}">${u}</button>`).join("")}</div>`,i={easy:"Slower bots that rarely steal or contest.",normal:"A fair fight. Bots pass, help on defense and use items.",hard:"Fast hands, tight defense, quick releases."}[t.difficulty],s=!e.chaos,a=this.profile.loadout.map(l=>`<span class="lo-chip" title="${Hs(l)}">${Hn[l]}</span>`).join(""),o=[e.short,...e.practice?["No clock"]:[Bn[t.difficulty].label,go(t.duration)],e.chaos||t.items?"Items on":"Items off"];return`${this.header("Play \xB7 Match setup",e.name)}
      <div class="setup">
        <div class="setup-hero">
          ${Bu(t.mode)}<span class="mc-shade"></span>
          <div class="sh-body"><div class="mc-name">${e.short}</div><p>${e.desc}</p><div class="mc-chips">${e.chips.map(l=>`<i>${l}</i>`).join("")}</div></div>
        </div>
        <div class="setup-opts panel">
          ${e.practice?`<div class="opt"><div class="opt-head"><h3>Practice court</h3></div><p class="opt-desc">No opponents and no clock. After a make the ball comes straight back to you at the top of the key. Practice does not award XP.</p></div>
          <div class="opt"><div class="opt-head"><h3>Basics checklist</h3>${this.toggle("setup-tutorial",t.tutorial)}</div><p class="opt-desc">A short list of the core moves to try, ticked off as you do them.</p></div>`:`
          <div class="opt"><div class="opt-head"><h3>Difficulty</h3></div>${n("difficulty",[["easy","Easy"],["normal","Normal"],["hard","Hard"]],t.difficulty)}<p class="opt-desc">${i}</p></div>
          <div class="opt"><div class="opt-head"><h3>Match length</h3></div>${n("duration",uo.map(l=>[l,go(l)]),t.duration)}<p class="opt-desc">A tie at the buzzer goes to overtime: next basket wins.</p></div>`}
          ${s?`<div class="opt"><div class="opt-head"><h3>Item boxes</h3>${this.toggle("setup-items",t.items)}</div><p class="opt-desc">${t.items?"? boxes drop on the court. Grab one and press 1 to use it.":"Straight basketball. No item boxes."}</p></div>`:`<div class="opt"><div class="opt-head"><h3>Item boxes</h3><span class="tag hot">Always on</span></div><p class="opt-desc">In Chaos a new box drops about ${Ls.RESPAWN} seconds after the last one is grabbed, and bots use items as soon as they can.</p></div>`}
          <div class="opt"><div class="opt-head"><h3>Your item loadout</h3><button class="btn ghost sm" data-action="go" data-to="loadout">Edit</button></div>
            <div class="lo-row">${a}</div><p class="opt-desc">Boxes you open only give items from your loadout.</p></div>
        </div>
      </div>
      <div class="setup-bar">
        <div class="summary">${o.map(l=>`<span>${l}</span>`).join("<i></i>")}</div>
        <button class="btn primary xl" data-action="start" autofocus>${at.play}<span>${e.practice?"Start practice":"Start match"}</span></button>
      </div>`}toggle(t,e,n=""){return`<button class="toggle ${e?"on":""}" role="switch" aria-checked="${e}" data-action="${t}" ${n?`aria-label="${n}"`:""}><i></i></button>`}renderLoadout(){let t=this.profile.loadout,e=this.loadoutFocus||t[0]||Fu[0],n=Yc(t),i=Array.from({length:ai},(d,u)=>{let f=t[u];return f?`<button class="slot filled" data-action="lo-focus" data-item="${f}" aria-label="${Hs(f)}">${Hn[f]}<span>${Hs(f)}</span></button>`:'<div class="slot empty"><span>Empty slot</span></div>'}).join(""),s=Fu.map(d=>{let u=t.includes(d);return`<button class="item-card ${u?"equipped":""} ${d===e?"focused":""}" data-action="lo-focus" data-item="${d}" aria-pressed="${u}">
        <span class="ic-glyph">${Hn[d]}</span>
        <span class="ic-name">${Hs(d)}</span>
        <span class="ic-kind k-${wr[d].toLowerCase()}">${wr[d]}</span>
        <span class="ic-state">${u?`${at.check} ${Math.round(n[d]*100)}% per box`:"Not equipped"}</span>
      </button>`}).join(""),a=Tu[e],o=t.includes(e),l=!o&&t.length>=ai,c=o&&t.length<=Bs,h=o?n:Yc([...t,e].slice(-ai));return`${this.header("Items","Loadout",`<div class="slot-count"><b>${t.length}</b>/${ai} equipped</div>`)}
      <div class="loadout">
        <div class="lo-main">
          <div class="slots">${i}</div>
          <p class="lo-explain">Pick ${Bs}\u2013${ai} items. Every <b>?</b> box you open rolls one of them, using the game's real drop weights. Bots draw from all seven.</p>
          <div class="item-grid">${s}</div>
          <h3 class="sub-h">Core moves <span>always equipped</span></h3>
          <div class="core-grid">${Zc.filter(d=>d.id!=="steal").concat(Zc.filter(d=>d.id==="steal")).map(d=>`
            <div class="core"><span class="core-ic">${at[d.id]}</span><div><div class="core-name">${d.name} <kbd>${d.key}</kbd></div><div class="core-desc">${d.desc}</div></div><span class="core-cd">${d.cd?`${d.cd}s<small>cooldown</small>`:"\u2013<small>no cooldown</small>"}</span></div>`).join("")}
          </div>
        </div>
        <aside class="lo-detail panel">
          <div class="ld-glyph">${Hn[e]}</div>
          <div class="ic-kind k-${wr[e].toLowerCase()}">${wr[e]}</div>
          <h3>${Hs(e)}</h3>
          <p>${a.desc}</p>
          ${a.counter?`<p class="counter"><b>Counter:</b> ${a.counter}</p>`:""}
          <dl class="stats">${a.stats().map(([d,u])=>`<div><dt>${d}</dt><dd>${u}</dd></div>`).join("")}
            <div><dt>Box chance</dt><dd>${Math.round((h[e]||0)*100)}%${o?"":" if equipped"}</dd></div>
            <div><dt>Use</dt><dd><kbd>1</kbd> or <kbd>R</kbd></dd></div></dl>
          <button class="btn ${o?"ghost":"primary"} wide" data-action="lo-toggle" data-item="${e}" ${l||c?"disabled":""}>${o?"Unequip":"Equip"}</button>
          <p class="ld-note">${l?`All ${ai} slots are full. Unequip an item first.`:c?`Keep at least ${Bs} items equipped.`:o?"Equipped. Changes save automatically.":""}</p>
        </aside>
      </div>`}customDirty(){return this.custom?JSON.stringify(this.custom.draft)!==JSON.stringify(this.profile.cosmetics):!1}renderCustomize(){this.custom||(this.custom={cat:"skin",draft:{...this.profile.cosmetics}});let{cat:t,draft:e}=this.custom,n=vn(this.profile.xp).level,s=[...Object.keys(In).slice(0,2),"number",...Object.keys(In).slice(2)].map(l=>{let c=l==="number"?"Jersey number":In[l].label,h=l==="number"?`#${e.number}`:Pn(l,e[l]).name,d=l==="number"?at.number:at[In[l].icon];return`<button role="tab" aria-selected="${l===t}" class="cat ${l===t?"on":""}" data-action="cat" data-cat="${l}">${d}<span class="cat-label">${c}</span><span class="cat-val">${re(h)}</span></button>`}).join(""),a;t==="number"?a=`<div class="num-pick">
        <button class="icon-btn lg" data-action="num" data-d="-1" aria-label="Lower number">${at.minus}</button>
        <input id="numInput" type="number" min="0" max="99" value="${e.number}" aria-label="Jersey number" />
        <button class="icon-btn lg" data-action="num" data-d="1" aria-label="Higher number">${at.plus}</button>
      </div><p class="opt-desc center">Any number from 0 to 99. It shows on the front and back of your jersey.</p>`:(a=`<div class="tile-grid">${In[t].items.map(l=>{let c=l.lvl>n,h=e[t]===l.id;return`<button class="tile ${h?"on":""} ${c?"locked":""}" data-action="cos" data-cat="${t}" data-id="${l.id}" ${c?'aria-disabled="true"':""}>
          <span class="tile-art">${xo(t,l)}</span>
          <span class="tile-name">${re(l.name)}</span>
          <span class="tile-state">${c?`${at.lock} Level ${l.lvl}`:h?`${at.check} Equipped`:""}</span>
        </button>`}).join("")}</div>`,t==="ball"&&(a+='<p class="opt-desc center">Your ball skin is used in your matches.</p>'),t==="fx"&&(a+='<p class="opt-desc center">Confetti colours when your team scores.</p>'),t==="body"&&(a+='<p class="opt-desc center">Builds change how your player looks only. Every build has the same speed, reach and hitbox, online and offline.</p>'));let o=this.customDirty();return`${this.header("Locker room","Customize")}
      <div class="customize">
        <nav class="cats panel" role="tablist" aria-label="Categories">${s}</nav>
        <div class="stage" aria-hidden="true"><div class="stage-hint">Drag to rotate</div><div class="stage-floor"></div></div>
        <section class="cos-panel panel">
          <div class="cp-head"><h3>${t==="number"?"Jersey number":In[t].label}</h3><span class="cp-sub">${t!=="number"&&In[t].items.some(l=>l.lvl>n)?"Locked gear unlocks as you level up":"All options unlocked"}</span></div>
          ${a}
        </section>
      </div>
      <div class="cos-bar">
        <span class="save-state ${o?"dirty":""}">${o?"Unsaved changes":"All changes saved"}</span>
        <button class="btn ghost" data-action="cos-reset" ${o?"":"disabled"}>Reset</button>
        <button class="btn primary" data-action="cos-save" ${o?"":"disabled"}>${at.check}<span>Save look</span></button>
      </div>`}renderProgress(){let t=this.profile,e=vn(t.xp),n=t.career,i=Fs(),s=i.map(c=>{let h=e.level>=c.lvl;return`<div class="reward ${h?"got":""} ${c.lvl===e.level+1?"next":""}">
        <div class="rw-lvl">LVL ${c.lvl}</div>
        <div class="rw-art">${xo(c.cat,c)}</div>
        <div class="rw-name">${re(c.name)}</div><div class="rw-cat">${re(c.catLabel)}</div>
        <div class="rw-state">${h?`${at.check} Unlocked`:`${at.lock} Locked`}</div>
      </div>`}).join(""),a=(c,h)=>`<div class="stat"><b>${c}</b><span>${h}</span></div>`,o=c=>n.games?(c/n.games).toFixed(1):"\u2013",l=Object.values(rn).map(c=>{let h=n.byMode[c.id];return`<div class="mrec"><span>${c.short}</span><b>${h?h.games:0}</b><small>${c.practice?"sessions":`played \xB7 ${h?h.wins:0} won`}</small></div>`}).join("");return`${this.header("Profile","Progression",this.profileChip(!0))}
      <div class="progress">
        <div class="lvl-hero panel">
          <div class="lh-badge"><span>LEVEL</span><b>${e.level}</b></div>
          <div class="lh-body">
            <div class="lh-xp"><b>${e.need?`${e.into} / ${e.need} XP`:"Max level"}</b><span>${t.xp.toLocaleString()} XP total</span></div>
            <div class="xpbar big"><i style="width:${(e.pct*100).toFixed(1)}%"></i></div>
            <p class="opt-desc">Earn XP by finishing matches: 60 for playing, 120 for a win, plus points, dunks, assists, steals and blocks. Each level needs ${Er(1)} XP plus 100 more than the last.</p>
          </div>
        </div>
        <h3 class="sub-h">Challenges <span>daily ones change every day, weekly ones every Monday \xB7 progress counts from any mode except practice</span></h3>
        <div class="chal-grid">
          <div class="panel chal-panel"><div class="kicker">Today \xB7 ${fo} XP each</div>${this.challengeList(mo(this.profile).daily)}</div>
          <div class="panel chal-panel"><div class="kicker">This week \xB7 ${po} XP each</div>${this.challengeList(mo(this.profile).weekly)}</div>
          <div class="panel chal-panel"><div class="kicker">Featured mode this week</div><div class="feat-mode">${re(rn[Tr()].name)}</div><p class="opt-desc">Matches in this mode earn 25% more XP until the week changes.</p></div>
        </div>
        <h3 class="sub-h">Reward track <span>${i.filter(c=>e.level>=c.lvl).length} of ${i.length} unlocked</span></h3>
        <div class="track">${s}</div>
        <h3 class="sub-h">Career <span>all modes except practice</span></h3>
        <div class="stat-grid">
          ${a(n.games,"Games")}${a(n.wins,"Wins")}${a(n.games?nh(n.wins,n.games)+"%":"\u2013","Win rate")}${a(o(n.pts),"Points / game")}
          ${a(n.fga?nh(n.fgm,n.fga)+"%":"\u2013","Field goal %")}${a(n.tpm,"Threes made")}${a(n.dunks,"Dunks")}${a(n.ast,"Assists")}
          ${a(n.stl,"Steals")}${a(n.blk,"Blocks")}${a(n.best||"\u2013","Best game (pts)")}${a(n.bestStreak,"Best win streak")}
        </div>
        <h3 class="sub-h">By mode</h3>
        <div class="mode-recs">${l}</div>
        <p class="opt-desc">This is your record in this browser, including online games. Ratings, head-to-head records and the online leaderboards are kept on the game server \u2014 see Play online.</p>
      </div>`}renderSettings(){let t=this.save.settings,e=this.settingsTab,n=[["graphics","Graphics"],["audio","Audio"],["controls","Controls"],["gameplay","Gameplay"],["access","Accessibility"],["online","Online"]],i=(h,d,u)=>`<div class="set-row"><div><div class="sr-label">${h}</div>${d?`<div class="sr-desc">${d}</div>`:""}</div><div class="sr-ctrl">${u}</div></div>`,s=(h,d,u)=>`<div class="seg">${d.map(([f,g])=>`<button class="seg-btn ${String(f)===String(u)?"on":""}" aria-pressed="${String(f)===String(u)}" data-action="set" data-key="${h}" data-val="${f}">${g}</button>`).join("")}</div>`,a=(h,d,u,f,g,x)=>`<div class="slider"><input type="range" data-set="${h}" min="${u}" max="${f}" step="${g}" value="${d}" aria-label="${h}" style="--fill:${((d-u)/(f-u)*100).toFixed(1)}%" /><output>${x(d)}</output></div>`,o=(h,d)=>`<button class="toggle ${d?"on":""}" role="switch" aria-checked="${d}" data-action="set-toggle" data-key="${h}"><i></i></button>`,l=t.quality||(this.game.isTouch?"medium":"high"),c="";if(e==="graphics")c=i("Graphics quality",l===this.game.quality?"Low turns off shadows and renders at lower resolution. Resolution and shadows change now; floor and crowd detail change after a reload.":"Resolution and shadows changed. Reload the page to rebuild the floor and crowd at this level.",s("quality",[["low","Low"],["medium","Medium"],["high","High"]],l))+i("Fullscreen","Hide the browser bars while you play.",`<button class="btn ghost sm" data-action="fullscreen">${document.fullscreenElement?"Exit fullscreen":"Go fullscreen"}</button>`);else if(e==="audio"){let h=d=>`${Math.round(d*100)}%`;c=i("Master volume","",a("master",t.master,0,1,.01,h))+i("Sound effects","Ball, rim, shoes, items and hits.",a("sfx",t.sfx,0,1,.01,h))+i("Crowd","Arena noise and cheers.",a("crowd",t.crowd,0,1,.01,h))+i("Mute everything","Shortcut: M",o("muted",vt.muted))}else if(e==="controls")c=i("Look sensitivity","Mouse and touch camera speed.",a("sens",t.sens,.2,2,.05,h=>`${(+h).toFixed(2)}x`))+i("Invert vertical look","",o("invertY",t.invertY))+`<div class="keymap">${this.keymap()}</div>`;else if(e==="gameplay")c=i("Camera shake","Small shake on dunks, blocks and hits.",o("shake",t.shake))+i("Show control hints","The control card in the corner during matches. Press H in a match to show or hide it.",o("hints",t.hints));else if(e==="online"){let h=this.game.online;c=i("Game server",`The address of the Illegal Basketball server (for example <code>wss://my-server.onrender.com</code>). Leave empty to use ${re(h.serverUrl()&&!t.server?h.serverUrl():"the default for this page")}.`,`<form class="srv-form" data-form="server"><input id="srvInput" autocomplete="off" spellcheck="false" placeholder="wss://\u2026" value="${re(t.server||"")}" /><button class="btn sm" type="submit">Save</button></form>`)+i("Connection",re(h.serverUrl()||"No server address"),`<span class="net-chip s-${h.state}"><i></i><span>${{idle:"Not connected",connecting:"Connecting\u2026",online:`Online \xB7 ${Math.round(h.net.rtt)} ms`,reconnecting:"Reconnecting\u2026",offline:"Unreachable"}[h.state]}</span></span>`)+i("Your online identity","A random key in this browser identifies you to the server; no account, email or real name. Clearing site data creates a new identity with a fresh rating.","")}else c=i("Reduce motion",'Turns off interface animations, slow motion and camera kicks. "System" follows your device setting.',s("motion",[["system","System"],["reduced","On"],["full","Off"]],t.motion))+i("Screen effects","Slow-motion hits and the field-of-view punch on dunks.",o("effects",t.effects))+i("HUD size","Scales the scoreboard, ability bar and notifications.",s("hudScale",[[.9,"Small"],[1,"Normal"],[1.15,"Large"]],t.hudScale));return`${this.header("Options","Settings")}
      <div class="settings">
        <nav class="set-tabs panel" role="tablist">${n.map(([h,d])=>`<button role="tab" aria-selected="${h===e}" class="cat ${h===e?"on":""}" data-action="set-tab" data-tab="${h}"><span class="cat-label">${d}</span></button>`).join("")}</nav>
        <section class="set-body panel">${c}
          <div class="set-foot"><span class="opt-desc">Settings save automatically in this browser.</span><button class="btn ghost sm danger" data-action="set-reset">Reset to defaults</button></div>
        </section>
      </div>`}keymap(){return`<div class="km-title">Keyboard</div>${[["W A S D","Move"],["Mouse","Look and aim"],["Shift","Sprint"],["Space","Jump / contest"],["Hold click or J","Shoot \u2014 release in the green"],["F","Pass / call for the ball"],["Q / E","Crossover \u2014 keep the ball on the hand away from the defender"],["E or click","Steal on defense (the slot glows green when the ball is reachable)"],["C","Dash"],["1 or R","Use item"],["H","Show / hide hints"],["M","Mute"],["Esc","Pause"]].map(([e,n])=>`<div class="km-row"><kbd>${e}</kbd><span>${n}</span></div>`).join("")}`}renderControls(){let t=[["Left thumb","Move \u2014 push far to sprint"],["Drag right side","Look and aim"],["Hold SHOOT","Release in the green"],["PASS / MOVE / DASH","Team play and moves"],["Item button","Use your item"]];return`${this.header("Help","Controls")}
      <div class="controls-scr">
        <div class="panel keymap">${this.keymap()}</div>
        <div class="panel keymap"><div class="km-title">Touch</div>${t.map(([e,n])=>`<div class="km-row"><kbd>${e}</kbd><span>${n}</span></div>`).join("")}
          <div class="km-title gap">Tips</div>
          <p class="opt-desc">Defense: get close to the ball handler and you drop into a stance that slides with them. Reach when the ball is exposed \u2014 not through their body. A missed reach leaves you off balance, and a crossover then can break your ankles. Offense: dribble with the hand away from the defender, and don't sprint into a set defender (that's a charge). Jump to block: only a defender in the air can stuff a shot.</p></div>
      </div>`}renderPause(){let t=this.game.match,e=rn[this.game.modeId]||rn.quick,i=this.game.me.stats,s=this.game.teamNames(),a=this.game.netMatch;return`<div class="pause">
      <div class="pause-menu">
        <div class="kicker">${a?`${e.short} \xB7 the match keeps running`:`${e.short}${t.practice?"":` \xB7 ${Bn[t.difficulty].label}`}`}</div>
        <h2>${a?"Menu":"Paused"}</h2>
        <button class="btn primary xl" data-action="resume" autofocus>${at.play}<span>${a?"Back to the game":"Resume"}</span></button>
        ${a?"":`<button class="menu-item" data-action="restart">${at.restart}<span>${t.practice?"Reset practice":"Restart match"}</span></button>`}
        <button class="menu-item" data-action="go" data-to="controls">${at.controls}<span>Controls</span></button>
        <button class="menu-item" data-action="go" data-to="settings">${at.settings}<span>Settings</span></button>
        <button class="menu-item" data-action="${a?"net-quit":"quit"}">${at.home}<span>${t.practice?"End practice":"Leave match"}</span></button>
      </div>
      <div class="pause-card panel">
        <div class="pc-score">
          <div class="t0"><span>${re(s[0])}</span><b>${t.score[0]}</b></div>
          <div class="pc-clock">${t.practice?"Free play":t.overtime?"OT":go(Math.ceil(t.clock))}</div>
          <div class="t1"><b>${t.practice?"\u2013":t.score[1]}</b><span>${re(s[1])}</span></div>
        </div>
        <div class="kicker">Your game so far</div>
        <div class="mini-stats">
          <div><b>${i.pts}</b><span>PTS</span></div><div><b>${i.fgm}/${i.fga}</b><span>FG</span></div><div><b>${i.dunks}</b><span>Dunks</span></div>
          <div><b>${i.ast}</b><span>AST</span></div><div><b>${i.stl}</b><span>STL</span></div><div><b>${i.blk}</b><span>BLK</span></div>
        </div>
      </div>
    </div>`}renderResults(){let t=this.game.lastResult,e=t.match,n=t.won,i=this.game.teamNames(),s=rn[t.mode],a=this.game.me,o=a.stats,l="<tr><th>Player</th><th>PTS</th><th>FG</th><th>3PT</th><th>DNK</th><th>AST</th><th>REB</th><th>STL</th><th>BLK</th><th>CON</th><th>TO</th></tr>",c=x=>{let m=x.stats;return`<tr class="${x===a?"me":""} tr-t${x.team}"><td><i class="dot" style="--c:${te[x.team].css}"></i>${re(x.name)}</td><td>${m.pts}</td><td>${m.fgm}/${m.fga}</td><td>${m.tpm}/${m.tpa}</td><td>${m.dunks}</td><td>${m.ast}</td><td>${m.reb}</td><td>${m.stl}</td><td>${m.blk}</td><td>${m.ctst}</td><td>${m.tov}</td></tr>`},h=(x,m)=>`<div class="bigstat"><b>${x}</b><span>${m}</span></div>`,d=t.xp,u=t.online,f=u?u.ranked?"Ranked":this.game.onlineInfo&&this.game.onlineInfo.kind==="private"?"Private room":"Casual":"",g=u?u.abandoned?"Match abandoned":u.forfeit?n?"Win by forfeit \u2014 your opponent left":"Loss by forfeit":"":"";return`<div class="results ${n?"won":"lost"}">
      <div class="res-head">
        <div class="kicker">${u?`Online \xB7 ${f} \xB7 ${e.teamSize}v${e.teamSize}`:`${s.short} \xB7 ${Bn[e.difficulty].label}`}${e.overtime?" \xB7 Overtime":""} \xB7 ${go(e.time)} played</div>
        <h2 class="res-title">${n?"Victory":"Defeat"}</h2>
        ${g?`<div class="res-sub">${re(g)}</div>`:""}
        <div class="res-score">
          <div class="rs-team t0"><span>${re(i[0])}</span><b>${e.score[0]}</b></div>
          <i></i>
          <div class="rs-team t1"><b>${e.score[1]}</b><span>${re(i[1])}</span></div>
        </div>
      </div>
      <div class="res-body">
        <div class="res-left">
          <div class="panel res-mine">
            <div class="kicker">Your line</div>
            <div class="bigstats">${h(o.pts,"Points")}${h(`${o.fgm}/${o.fga}`,"Field goals")}${h(o.reb,"Rebounds")}${h(o.ast,"Assists")}${h(o.stl,"Steals")}${h(o.blk,"Blocks")}${h(o.ctst,"Shots contested")}${h(o.tov,"Turnovers")}</div>
            <div class="res-def">Defensive stops: <b>${e.stops[0]}</b> ${re(i[0])} \xB7 <b>${e.stops[1]}</b> ${re(i[1])} <span>(possessions ended without a score)</span></div>
          </div>
          ${this.highlightHtml(t)}
          <div class="panel res-box"><table>${l}${e.players.filter(x=>x.team===0).map(c).join("")}${e.players.filter(x=>x.team===1).map(c).join("")}</table></div>
        </div>
        <div class="res-right">
        ${u?this.renderOnlineResult():""}
        <div class="panel res-xp">
          <div class="kicker">Progression</div>
          <div class="xp-total">+<b id="xpCount">0</b> XP</div>
          <ul class="xp-lines">${d.lines.map(([x,m])=>`<li><span>${re(x)}</span><b>+${m}</b></li>`).join("")}</ul>
          <div class="xp-level"><span id="xpLvl">LVL ${t.before.level}</span><span class="xpbar big"><i id="xpFill" style="width:${(t.before.pct*100).toFixed(1)}%"></i></span></div>
          <div class="xp-up" id="xpUp" hidden></div>
          ${t.unlocks.length?`<div class="unlocks" id="unlocks" hidden><div class="kicker">Unlocked</div>${t.unlocks.map(x=>`<div class="unlock"><span class="uc-sw">${xo(x.cat,x)}</span><div><b>${re(x.name)}</b><small>${re(x.catLabel)}</small></div></div>`).join("")}<button class="btn ghost sm" data-action="go-custom">Equip in Customize</button></div>`:""}
        </div>
        </div>
      </div>
      ${u?this.onlineResultActions():`<div class="res-actions">
        <button class="btn primary xl" data-action="rematch" autofocus>${at.restart}<span>${e.practice?"Again":"Rematch"}</span></button>
        <button class="btn ghost lg" data-action="change-mode">Change mode</button>
        <button class="btn ghost lg" data-action="share-card">${at.share}<span>Share result</span></button>
        <button class="btn ghost lg" data-action="to-menu">Main menu</button>
      </div>`}
    </div>`}highlightHtml(t){let e=t.highlight;return e?`<div class="panel res-moment ${e.mine?"mine":""}"><span class="rm-ic">${at.bolt}</span><div><div class="kicker">Moment of the match</div><div class="rm-title">${re(e.title)}</div><div class="rm-sub">${re(e.sub)}</div></div></div>`:""}animateXp(){let t=this.game.lastResult;if(!t)return;let e=en("xpFill"),n=en("xpCount"),i=en("xpLvl"),s=en("xpUp"),a=document.body.classList.contains("reduce-motion"),o=t.xp.total,l=performance.now(),c=a?0:1400,h=t.prevXp;cancelAnimationFrame(this.xpRaf);let d=()=>{if(!e.isConnected)return;let u=c?Math.max(0,Math.min(1,(performance.now()-l)/c)):1,f=1-(1-u)**3,g=h+o*f,x=vn(g);if(n.textContent=Math.round(o*f),e.style.width=`${(x.pct*100).toFixed(1)}%`,i.textContent=`LVL ${x.level}`,u<1)this.xpRaf=requestAnimationFrame(d);else if(t.after.level>t.before.level){s.hidden=!1,s.innerHTML=`${at.bolt}<span>Level up! You reached level ${t.after.level}</span>`;let m=en("unlocks");m&&(m.hidden=!1)}};this.xpRaf=requestAnimationFrame(d)}onClick(t){let e=t.target.closest("[data-action]");if(!e||e.disabled)return;let n=e.dataset.action,i=this.game;switch(n){case"back":this.back();break;case"go":this.go(e.dataset.to);break;case"go-custom":i.toMenu(),this.go("customize",{force:!0});break;case"rename":this.rename();break;case"sound":i.toggleSound(),this.rerender();break;case"fullscreen":i.toggleFullscreen(),setTimeout(()=>this.current==="settings"&&this.rerender(),300);break;case"pick-mode":{let s=this.profile.last;this.setup={mode:e.dataset.mode,difficulty:s.difficulty,duration:s.duration,items:s.items,tutorial:!this.profile.tutorialDone},this.go("setup");break}case"setup":{let s=e.dataset.key;this.setup[s]=s==="duration"?+e.dataset.val:e.dataset.val,this.rerender();break}case"setup-items":this.setup.items=!this.setup.items,this.rerender();break;case"setup-tutorial":this.setup.tutorial=!this.setup.tutorial,this.rerender();break;case"learn":i.startMatch({mode:"practice",difficulty:"normal",duration:120,items:!0,tutorial:!0});break;case"start":{let s=this.setup;this.profile.last={mode:s.mode,difficulty:s.difficulty,duration:s.duration,items:s.items},i.persist(),i.startMatch({...s});break}case"lo-focus":this.loadoutFocus=e.dataset.item,this.rerender();break;case"lo-toggle":{let s=e.dataset.item,a=this.profile.loadout;a.includes(s)?a.length>Bs&&a.splice(a.indexOf(s),1):a.length<ai&&a.push(s),i.persist(),i.online.syncProfile(),this.rerender(),this.flashSlot(s);break}case"cat":this.custom.cat=e.dataset.cat,this.rerender();break;case"cos":{let s=Pn(e.dataset.cat,e.dataset.id);if(s.lvl>vn(this.profile.xp).level){this.toast(`Reach level ${s.lvl} to unlock ${s.name}`);return}this.custom.draft[e.dataset.cat]=e.dataset.id,i.setPreviewLook(this.custom.draft),this.rerender();break}case"num":{let s=this.custom.draft;s.number=(s.number+ +e.dataset.d+100)%100,i.setPreviewLook(s),this.rerender();break}case"cos-reset":this.custom.draft={...this.profile.cosmetics},i.setPreviewLook(this.custom.draft),this.rerender();break;case"cos-save":this.profile.cosmetics={...this.custom.draft},i.persist(),i.online.syncProfile(),this.toast("Look saved"),this.rerender();break;case"set-tab":this.settingsTab=e.dataset.tab,this.rerender();break;case"set":{let s=e.dataset.key,a=e.dataset.val;this.save.settings[s]=s==="hudScale"?+a:a,i.applySettings(),i.persist(),this.rerender(),this.toast("Saved");break}case"set-toggle":{let s=e.dataset.key;s==="muted"?i.toggleSound():(this.save.settings[s]=!this.save.settings[s],i.applySettings(),i.persist()),this.rerender(),this.toast("Saved");break}case"set-reset":this.confirm("Reset all settings?","Graphics, audio, controls and accessibility go back to their defaults. Your profile and progress are kept.","Reset",!0).then(s=>{s&&(this.save.settings={...Kc},i.applySettings(),i.persist(),this.rerender(),this.toast("Settings reset"))});break;case"resume":i.resume();break;case"restart":this.confirm(i.match.practice?"Reset practice?":"Restart the match?",i.match.practice?"The court resets and your makes go back to zero.":"The score and stats of this match will be lost.","Restart",!0).then(s=>s&&i.restartMatch());break;case"quit":if(i.match.practice){i.toMenu();break}this.confirm("Leave the match?","You will lose this match\u2019s progress and earn no XP for it.","Leave match",!0).then(s=>s&&i.toMenu());break;case"rematch":i.startMatch({...i.lastConfig});break;case"change-mode":i.toMenu(),this.go("modes",{force:!0});break;case"to-menu":i.toMenu();break;case"share-card":Iu(i).then(s=>s&&this.toast(s));break;default:this.onlineClick(n,e);break}}onSubmit(t){let e=t.target.closest("[data-form]");if(e){if(t.preventDefault(),e.dataset.form==="join"){let n=(en("joinCode").value||"").toUpperCase().replace(/[^A-Z0-9]/g,"");if(this.joinCode=n,n.length!==5){this.toast("Room codes have 5 letters");return}this.game.online.joinRoom(n)}else if(e.dataset.form==="server"){let n=(en("srvInput").value||"").trim();this.save.settings.server=n,this.game.persist();let i=this.game.online;i.disconnect(),i.ensureConnected(),this.toast(n?"Server saved \u2014 connecting":"Using the default server"),this.rerender()}}}closeDialogs(){let t=en("dialog");t.hidden||t.querySelector('[data-r="0"]')?.click()}onInput(t){let e=t.target;if(e.dataset.set){let n=e.dataset.set;this.save.settings[n]=+e.value,e.style.setProperty("--fill",`${((e.value-e.min)/(e.max-e.min)*100).toFixed(1)}%`);let i=e.parentElement.querySelector("output");i&&(i.textContent=n==="sens"?`${(+e.value).toFixed(2)}x`:`${Math.round(e.value*100)}%`),this.game.applySettings(),t.type==="change"&&(this.game.persist(),this.toast("Saved"))}else if(e.id==="joinCode"){let n=e.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,5);n!==e.value&&(e.value=n),this.joinCode=n}else if(e.id==="numInput"&&t.type==="change"){let n=Math.max(0,Math.min(99,Math.round(+e.value||0)));this.custom.draft.number=n,this.game.setPreviewLook(this.custom.draft),this.rerender()}}onKey(t){if(!(!this.current||t.target.matches("input, textarea"))&&en("dialog").hidden){if(t.code==="Escape"){if(this.current==="home")return;if(this.current==="pause"){t.preventDefault(),this.game.resume();return}if(this.current==="results")return;if(t.preventDefault(),this.current==="search"){this.onlineClick("net-cancel");return}if(this.current==="lobby"){this.onlineClick("room-leave");return}this.back()}if(this.current==="home"&&t.code==="Enter"&&!document.activeElement?.closest?.("button")){t.preventDefault(),this.go("modes");return}if(this.current==="home"&&(t.code==="ArrowDown"||t.code==="ArrowUp")){let e=[...this.root.querySelectorAll("#scr-home .home-nav button")],n=e.indexOf(document.activeElement);e[(n+(t.code==="ArrowDown"?1:-1)+e.length)%e.length]?.focus(),t.preventDefault()}}}flashSlot(t){let e=this.root.querySelector(`.item-card[data-item="${t}"]`);e&&(e.classList.add("pulse"),setTimeout(()=>e.classList.remove("pulse"),400))}bindPreviewDrag(){let t=null;this.root.addEventListener("pointerdown",n=>{this.current!=="customize"||!n.target.closest(".stage")||(t={x:n.clientX,id:n.pointerId},n.target.setPointerCapture?.(n.pointerId))}),this.root.addEventListener("pointermove",n=>{!t||n.pointerId!==t.id||(this.game.rotatePreview((n.clientX-t.x)*.012),t.x=n.clientX)});let e=()=>{t=null};this.root.addEventListener("pointerup",e),this.root.addEventListener("pointercancel",e)}confirm(t,e,n="OK",i=!1){let s=en("dialog");s.innerHTML=`<div class="dlg panel" role="alertdialog" aria-modal="true" aria-labelledby="dlgT">
      <h3 id="dlgT">${re(t)}</h3><p>${re(e)}</p>
      <div class="dlg-actions"><button class="btn ghost" data-r="0">Cancel</button><button class="btn ${i?"danger-solid":"primary"}" data-r="1">${re(n)}</button></div></div>`,s.hidden=!1;let a=document.activeElement;return s.querySelector('[data-r="0"]').focus(),new Promise(o=>{let l=d=>{s.hidden=!0,s.innerHTML="",s.removeEventListener("click",c),window.removeEventListener("keydown",h,!0),a?.focus?.(),o(d)},c=d=>{let u=d.target.closest("[data-r]");u?l(u.dataset.r==="1"):d.target===s&&l(!1)},h=d=>{d.code==="Escape"&&(d.stopPropagation(),d.preventDefault(),l(!1))};s.addEventListener("click",c),window.addEventListener("keydown",h,!0)})}rename(){let t=en("dialog");t.innerHTML=`<form class="dlg panel" role="dialog" aria-modal="true" aria-labelledby="dlgT">
      <h3 id="dlgT">Display name</h3><p>Shown on your scoreboard, jersey and results. Letters, numbers and spaces, up to 12 characters.</p>
      <input id="nameInput" maxlength="12" autocomplete="off" spellcheck="false" value="${re(this.profile.name)}" />
      <div class="dlg-actions"><button type="button" class="btn ghost" data-r="0">Cancel</button><button type="submit" class="btn primary">Save name</button></div></form>`,t.hidden=!1;let e=en("nameInput");e.focus(),e.select();let n=()=>{t.hidden=!0,t.innerHTML="",window.removeEventListener("keydown",i,!0)},i=s=>{s.code==="Escape"&&(s.stopPropagation(),n())};window.addEventListener("keydown",i,!0),t.querySelector('[data-r="0"]').onclick=n,t.querySelector("form").onsubmit=s=>{s.preventDefault();let a=e.value.toUpperCase().replace(/[^A-Z0-9 ]/g,"").trim().slice(0,12);if(!a){e.focus();return}this.profile.name=a,this.game.persist(),n(),this.rerender(),this.toast("Name saved")}}toast(t){let e=en("toast");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),clearTimeout(this.toastT),this.toastT=setTimeout(()=>e.classList.remove("show"),1600)}};Object.assign(Rr.prototype,Cu);var Ut=r=>document.getElementById(r);var zv=r=>{let t=Math.max(0,Math.ceil(r));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},vo=class{constructor(t){this.game=t,this.el={s0:Ut("s0"),s1:Ut("s1"),n0:Ut("n0"),n1:Ut("n1"),clock:Ut("clock"),period:Ut("period"),t0:Ut("sbT0"),t1:Ut("sbT1"),meter:Ut("meter"),meterFill:Ut("meterFill"),meterZone:Ut("meterZone"),meterMark:Ut("meterMark"),release:Ut("releaseLabel"),item:Ut("item"),itemName:Ut("itemName"),itemIcon:Ut("itemIcon"),stamina:Ut("staminaFill"),banner:Ut("banner"),bannerText:Ut("bannerText"),bannerSub:Ut("bannerSub"),callouts:Ut("callouts"),crosshair:Ut("crosshair"),hints:Ut("hints"),feed:Ut("feed"),pcAvatar:Ut("pcAvatar"),pcName:Ut("pcName"),pcSub:Ut("pcSub"),abDash:Ut("abDash"),abMove:Ut("abMove"),abPass:Ut("abPass"),abPassIcon:Ut("abPassIcon"),abPassName:Ut("abPassName"),abMoveIcon:Ut("abMoveIcon"),abMoveName:Ut("abMoveName"),abMoveKey:Ut("abMoveKey"),tDash:Ut("tDash"),tSteal:Ut("tSteal")},Ut("abDashIcon").innerHTML=at.dash,Ut("abMoveIcon").innerHTML=at.move;let e=Kt.SWEET_CENTER-Kt.SWEET_HALF,n=Kt.SWEET_CENTER+Kt.SWEET_HALF;this.el.meterZone.style.bottom=`${e/Kt.METER_MAX*100}%`,this.el.meterZone.style.height=`${(n-e)/Kt.METER_MAX*100}%`,this.el.meterMark.style.bottom=`${Kt.SWEET_CENTER/Kt.METER_MAX*100}%`,this.v=new R,this.cd={},this.chatOpen=!1,Ut("netBar").addEventListener("pointerdown",i=>{i.stopPropagation(),this.toggleChat()}),Ut("chatPanel").addEventListener("pointerdown",i=>{i.stopPropagation();let s=i.target.closest("[data-emote]");s&&(this.game.online.emote(s.dataset.emote),this.toggleChat(!1))})}setTutorial(t,e=!1){let n=Ut("tutorial");if(!t){n&&(n.hidden=!0);return}n||(n=document.createElement("div"),n.id="tutorial",Ut("hud").appendChild(n)),n.hidden=!1;let i=t.filter(s=>s.done).length;n.innerHTML=`<div class="tu-head"><span>Basics</span><b>${i}/${t.length}</b></div>
      <ul>${t.map(s=>`<li class="${s.done?"done":""}"><i>${s.done?at.check:""}</i><span>${s.text}</span></li>`).join("")}</ul>
      ${e?'<p class="tu-tip"><b>Defense:</b> get close to the ball handler to drop into a stance. Reach (E / click) only when the steal slot glows green. Jump to block shots.</p>':""}`}toggleChat(t=!this.chatOpen){this.chatOpen=!!t&&this.game.netMatch;let e=Ut("chatPanel");if(e.hidden=!this.chatOpen,this.chatOpen){let n=[["gg","GG"],["nice","Nice one"],["runit","Run it back"],["oops","My bad"],["wow","Wow"],["ez","Let's go"]];e.innerHTML=`<div class="cp-title">Quick chat</div>${n.map(([i,s],a)=>`<button data-emote="${i}"><kbd>${a+2}</kbd><span>${s}</span></button>`).join("")}`}}updateNet(){let t=this.game,e=Ut("netBar");if(!t.netMatch){e.hidden||(e.hidden=!0,Ut("netNotice").hidden=!0);return}e.hidden=!1;let n=t.online.net,i=Math.round(n.rtt),s=n.state!=="online"?"bad":i<90?"good":i<180?"ok":"bad",a=n.state!=="online"?"OFFLINE":`${i} ms`;a!==this.last.ping&&(this.last.ping=a,Ut("netPing").textContent=a,e.dataset.q=s);let o=t.online.notice,l=o?o.text:"";if(l!==this.last.notice){this.last.notice=l;let c=Ut("netNotice");c.hidden=!o,c.textContent=l,c.dataset.kind=o?o.kind:""}}reset(t){this.m=t,this.last={s0:-1,s1:-1,item:void 0,clock:"",holding:null},this.cd={},this.el.callouts.innerHTML="",this.el.feed.innerHTML="";let e=this.game,n=e.teamNames();this.el.n0.textContent=n[0],this.el.n1.textContent=n[1],document.body.classList.toggle("practice",!!t.practice);let i=this.game.me,s=e.save.profile.cosmetics;this.el.pcAvatar.innerHTML=Vs(s,40),this.el.pcName.textContent=i.name,this.el.pcSub.textContent=t.practice?`Practice \xB7 #${s.number}`:`${t.teamSize===1?"You":"Home"} \xB7 #${s.number}`,this.el.abPass.hidden=t.teamSize===1,this.setHints(e.save.settings.hints),clearTimeout(this.hintT),e.save.settings.hints&&(this.hintT=setTimeout(()=>this.el.hints.classList.add("faded"),22e3))}setHints(t){this.el.hints.hidden=!t,this.el.hints.classList.remove("faded")}toggleHints(){let t=this.el.hints;t.hidden||t.classList.contains("faded")?(t.hidden=!1,t.classList.remove("faded"),clearTimeout(this.hintT)):t.hidden=!0}update(){let t=this.m,e=this.el,n=this.game.me;this.updateNet(),t.score[0]!==this.last.s0&&(e.s0.textContent=t.score[0],this.last.s0>=0&&this.bump(e.s0),this.last.s0=t.score[0]),t.score[1]!==this.last.s1&&(e.s1.textContent=t.practice?"\u2013":t.score[1],this.last.s1>=0&&this.bump(e.s1),this.last.s1=t.score[1]);let i=t.practice?"FREE":t.overtime?"OT":zv(t.clock);i!==this.last.clock&&(e.clock.textContent=i,this.last.clock=i),e.clock.classList.toggle("low",!t.practice&&!t.overtime&&t.clock<=10&&t.state==="live"),e.period.textContent=t.practice?"PRACTICE":t.overtime?"NEXT BUCKET WINS":t.state==="buzzer"?"BALL IN THE AIR":t.state==="countdown"?"TIP-OFF":`${t.teamSize}V${t.teamSize}${t.chaos?" \xB7 CHAOS":""}`;let s=n.state==="shooting";if(e.meter.hidden=!s,s){let l=Math.min(Kt.METER_MAX,n.meter);e.meterFill.style.height=`${l/Kt.METER_MAX*100}%`;let c=Kt.SWEET_CENTER-Kt.SWEET_HALF,h=Kt.SWEET_CENTER+Kt.SWEET_HALF;e.meterFill.className=l>=c&&l<=h?"in":l>h?"over":""}let a=t.ball.holder===n,o=t.state==="live"||t.state==="buzzer";if(this.setCd("dash",e.abDash,o?1-n.dashCd/Te.DASH_CD:0,e.tDash),a!==this.last.slotHolding&&(this.last.slotHolding=a,e.abMoveIcon.innerHTML=a?at.move:at.steal,e.abMoveName.textContent=a?"MOVE":"STEAL",e.abMoveKey.textContent=a?"Q/E":"E",this.cd.move=void 0),a)this.setCd("move",e.abMove,o?1-n.moveCd/Te.DRIBBLE_CD:0,e.tSteal),e.abMove.classList.remove("open","unavailable");else{let l=t.ball.holder,c=l&&l.team!==n.team;this.setCd("move",e.abMove,o?1-n.stealCd/Ce.STEAL_CD:0,e.tSteal),e.abMove.classList.toggle("unavailable",!c);let h=c&&n.stealCd<=0&&!n.swipe&&t.stealRead&&t.stealRead(n).ok;e.abMove.classList.toggle("open",!!h),e.tSteal.classList.toggle("open",!!h)}e.abDash.classList.toggle("stance",!!n.stance),t.teamSize>1&&(a!==this.last.holding&&(e.abPassName.textContent=a?"PASS":"CALL",e.abPassIcon.innerHTML=a?at.pass:at.call,this.last.holding=a),this.setCd("pass",e.abPass,o?1:0,null)),n.item!==this.last.item&&(this.last.item=n.item,e.item.classList.toggle("empty",!n.item),e.item.classList.toggle("ready",!!n.item),e.itemName.textContent=n.item?Si[n.item]:"NO ITEM",e.itemIcon.innerHTML=n.item?Hn[n.item]:'<span class="q">?</span>',n.item&&this.pop(e.item)),this.game.input.lockFailed&&!this.fallbackHint&&(this.fallbackHint=!0,this.feed("Mouse lock is unavailable here: hold right-click and drag (or use the arrow keys) to turn.","#ffc857")),e.t0.classList.toggle("onfire",t.players.some(l=>l.team===0&&l.fire>0)),e.t1.classList.toggle("onfire",t.players.some(l=>l.team===1&&l.fire>0)),e.stamina.style.transform=`scaleX(${n.stamina.toFixed(3)})`,e.stamina.classList.toggle("low",n.stamina<.25)}setCrosshair(t){this.el.crosshair.classList.toggle("lock",!!t)}bump(t){document.body.classList.contains("reduce-motion")||t.animate([{transform:"scale(1.45)",color:"#ffc857"},{transform:"scale(1)"}],{duration:420,easing:"cubic-bezier(.2,1.4,.4,1)"})}pop(t){t.classList.remove("pop"),t.offsetWidth,t.classList.add("pop")}abilityUsed(t){let e={dash:this.el.abDash,move:this.el.abMove,pass:this.el.abPass,item:this.el.item}[t];e&&(e.classList.remove("fired"),e.offsetWidth,e.classList.add("fired"))}setCd(t,e,n,i){n=Math.max(0,Math.min(1,n));let s=Math.round(n*60)/60;if(this.cd[t]===s)return;let a=this.cd[t]===1,o=this.cd[t]!==void 0;this.cd[t]=s,e.style.setProperty("--cd",s),e.classList.toggle("ready",s>=1),e.classList.toggle("cooling",s<1),s>=1&&!a&&o&&this.pop(e),i?(i.style.setProperty("--cd",s),i.classList.toggle("cooling",s<1)):t==="move"&&this.el.tSteal.classList.remove("cooling")}flashItem(){this.pop(this.el.item)}releaseLabel(t){let e=this.el.release;e.textContent=t,e.className=t==="PERFECT"?"perfect":t==="GOOD"?"good":"off",e.style.opacity=1,clearTimeout(this.relT),this.relT=setTimeout(()=>e.style.opacity=0,650)}banner(t,e="",n="#fff",i=900){let s=this.el.banner;this.el.bannerText.textContent=t,this.el.bannerText.style.color=n,this.el.bannerSub.textContent=e,s.className="",s.offsetWidth,s.className="show",clearTimeout(this.bannerT),this.bannerT=setTimeout(()=>s.className="hide",i+350)}feed(t,e="#ff6b24",n=""){let i=this.el.feed,s=document.createElement("div");for(s.className="feed-item",s.style.setProperty("--c",e),s.innerHTML=`${n?`<span class="fi-ic">${n}</span>`:""}<span>${t}</span>`,i.prepend(s);i.children.length>4;)i.lastChild.remove();setTimeout(()=>s.classList.add("out"),3200),setTimeout(()=>s.remove(),3700)}callout(t,e,n="#fff",i=26){let s=this.game.camera;if(this.v.set(t.x,t.y,t.z).project(s),this.v.z>1)return;let a=(this.v.x*.5+.5)*window.innerWidth,o=(-this.v.y*.5+.5)*window.innerHeight,l=document.createElement("div");for(l.className="callout",l.textContent=e,l.style.left=`${Math.max(60,Math.min(window.innerWidth-60,a))}px`,l.style.top=`${Math.max(90,Math.min(window.innerHeight-120,o))}px`,l.style.color=n,l.style.fontSize=`${i}px`,this.el.callouts.appendChild(l);this.el.callouts.children.length>6;)this.el.callouts.firstChild.remove();setTimeout(()=>l.remove(),1150)}};var Vu="illegal_basketball_v1";function Gu(){try{let r=localStorage.getItem(Vu);if(r)return Jc({...Hu(),...JSON.parse(r)})}catch{}return Jc(Hu())}function Wu(r){try{return localStorage.setItem(Vu,JSON.stringify(r)),!0}catch{return!1}}function Hu(){return{difficulty:"normal",mode:"3v3",wins:0,losses:0,seenTutorial:!1}}var Xu=3;var Nv=["free","shooting","layup","dunk","grapple","punch","stunned","frozen"],Uv=["countdown","live","scored","buzzer","final","ended"],Ov=[null,"grapple","jetpack","punch","freeze","banana","magnet","energy"],Cr=r=>Math.round(r*100)/100,$u=r=>Math.round(r*1e3)/1e3;function qu(r,t){t.p.forEach((i,s)=>{let a=r.players[s];if(!a)return;a.x=i[0],a.y=i[1],a.z=i[2],a.vx=i[3],a.vy=i[4],a.vz=i[5],a.yaw=i[6],a.state=Nv[i[7]]||"free",a.stateT=i[8],a.onGround=!!(i[9]&1),a.sprinting=!!(i[9]&2),a.stance=!!(i[9]&4),a.item=Ov[i[10]]||null,a.fire=i[11],a.jetT=i[12],a.magnetT=i[13],a.energyT=i[14],a.dashT=i[15],a.dashCd=i[16],a.moveCd=i[17],a.moveT=i[18],a.moveSide=i[19],a.hand=i[20];let o=i[21];a.swipe=o?{t:o[0],side:o[1],resolved:!!o[2],hit:!!o[3],tx:o[4],ty:o[5],tz:o[6]}:null,a.swipeT=a.swipe?.3:0,a.passT=i[22],a.shootLock=i[23],a.meter=i[24],a.landT=i[25],a.stamina=i[26],a.reachT=i[27],a.strippedT=i[28],a.anklesT=i[29],a.slipT=i[30],a.stumbleT=i[31],a.blockT=i[32],a.crossT=i[33],a.callT=i[34],a.stealCd=i[35];let l=i[36];a.grapple=l?{target:{x:l[0],y:l[1],z:l[2]},kind:l[3]?"rim":"point"}:null;let c=i[37];a.dunk=c?{hoop:r.hoops[c[0]],slammed:!!c[1]}:null});let e=r.ball,n=t.b;e.x=n[0],e.y=n[1],e.z=n[2],e.vx=n[3],e.vy=n[4],e.vz=n[5],e.spinX=n[6],e.spinZ=n[7],e.holder=n[8]>=0?r.players[n[8]]:null,e.shot=n[9]?{shooter:r.players[n[9][0]]||null,resolved:!!n[9][1],blocked:!!n[9][2]}:null,e.pass=n[10]>=0?{to:r.players[n[10]]}:null,r.score=t.sc.slice(),r.clock=t.ck,r.state=Uv[t.st]||"live",r.stateT=t.stt,r.overtime=!!t.ot,r.winner=t.w>=0?t.w:null,r.box.active=!!t.bx[0],r.box.x=t.bx[1],r.box.z=t.bx[2],t.h.forEach((i,s)=>{let a=r.hoops[s];a.rimShake=i[0],a.netSway.x=i[1],a.netSway.z=i[2]}),r.projectiles=t.pr.map(i=>({id:i[0],x:i[1],y:i[2],z:i[3],px:i[1],py:i[2],pz:i[3]})),r.traps=t.tr.map(i=>({id:i[0],kind:i[1],x:i[2],z:i[3],armT:i[4]})),r.stops=t.ds.slice()}function Yu(r,t,e){if(!r)return t;let n=(l,c)=>l+(c-l)*e,i=(l,c)=>{let h=c-l;for(;h>Math.PI;)h-=2*Math.PI;for(;h<-Math.PI;)h+=2*Math.PI;return l+h*e},s={...t,p:t.p.map((l,c)=>{let h=r.p[c];if(!h)return l;let d=l.slice();for(let u=0;u<6;u++)d[u]=n(h[u],l[u]);return d[6]=i(h[6],l[6]),d})},a=r.b,o=t.b;if(a[8]===o[8]){let l=o.slice();for(let c=0;c<3;c++)l[c]=n(a[c],o[c]);s.b=l}return s}function Zu(r,t){return t.map(e=>{let n={};for(let[i,s]of Object.entries(e))s&&typeof s=="object"&&"$p"in s?n[i]=r.players[s.$p]:s&&typeof s=="object"&&"$h"in s?n[i]=r.hoops[s.$h]:n[i]=s;return n})}function yo(r,t,e,n){return{seq:e,mx:$u(r.mx),mz:$u(r.mz),sp:r.sprint?1:0,sh:r.shootHeld?1:0,pd:r.passDir?[Cr(r.passDir.x),Cr(r.passDir.z)]:null,aim:r.aim?[Cr(r.aim.x),Cr(r.aim.y),Cr(r.aim.z)]:null,e:t,hold:n}}var ih="ib_net_identity";function Ku(r){let t=new Uint8Array(r);return crypto.getRandomValues(t),[...t].map(e=>e.toString(16).padStart(2,"0")).join("")}function Ju(){try{let t=localStorage.getItem(ih);if(t){let e=JSON.parse(t);if(e.id&&e.secret)return e}}catch{}let r={id:Ku(10),secret:Ku(16)};try{localStorage.setItem(ih,JSON.stringify(r))}catch{}return r}function Fv(){try{localStorage.removeItem(ih)}catch{}return Ju()}function ju(r){let e=new URLSearchParams(location.search).get("server")||r||""||"";return e||(location.protocol==="http:"||location.protocol==="https:")&&(e=`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`),e&&!/^wss?:\/\//.test(e)&&(e=(location.protocol==="https:"?"wss://":"ws://")+e),e&&!/\/ws$/.test(e)&&(e=e.replace(/\/$/,"")+"/ws"),e}var _o=class{constructor(){this.handlers=new Map,this.state="idle",this.identity=Ju(),this.rtt=0,this.offset=0,this.snaps=[],this.retry=0,this.wantOpen=!1,this.profile=null,this.lastError=""}on(t,e){return this.handlers.has(t)||this.handlers.set(t,new Set),this.handlers.get(t).add(e),()=>this.handlers.get(t).delete(e)}emit(t,e){for(let n of this.handlers.get(t)||[])try{n(e)}catch(i){console.error(i)}}setState(t,e){this.state=t,this.emit("state",{state:t,info:e})}connect(t,e){this.url=t,this.hello=e,this.wantOpen=!0,this.retry=0,this.open()}open(){if(clearTimeout(this.retryT),!this.url){this.lastError="No game server address set.",this.setState("offline");return}this.retry<=6&&this.setState(this.retry?"reconnecting":"connecting");let t;try{t=new WebSocket(this.url)}catch{this.lastError="Bad server address.",this.fail();return}this.ws=t;let e=setTimeout(()=>{if(t.readyState!==1)try{t.close()}catch{}},8e3);t.onopen=()=>{clearTimeout(e),t.send(JSON.stringify({t:"hello",v:Xu,id:this.identity.id,secret:this.identity.secret,...this.hello()}))},t.onmessage=n=>{let i;try{i=JSON.parse(n.data)}catch{return}this.onMessage(i)},t.onclose=n=>{this.lastClose=n&&n.code,clearTimeout(e),clearInterval(this.pingT),this.ws===t&&(this.ws=null,this.wantOpen?this.fail():this.setState("idle"))},t.onerror=()=>{this.lastError="Could not reach the game server."}}fail(){if(!this.wantOpen)return;this.retry++;let t=this.retry<=6?Math.min(8e3,600*2**(this.retry-1)):1e4;this.setState(this.retry<=6?"reconnecting":"offline",{in:t}),this.retryT=setTimeout(()=>this.open(),t)}close(){if(this.wantOpen=!1,clearTimeout(this.retryT),clearInterval(this.pingT),this.ws)try{this.ws.close()}catch{}this.ws=null,this.setState("idle")}send(t){return this.ws&&this.ws.readyState===1?(this.ws.send(JSON.stringify(t)),!0):!1}onMessage(t){switch(t.t){case"welcome":this.retry=0,this.profile=t.you,this.offset=t.serverTime-Date.now(),this.setState("online"),clearInterval(this.pingT),this.pingT=setInterval(()=>this.send({t:"ping",c:performance.now()}),2e3),this.send({t:"ping",c:performance.now()});break;case"pong":{let e=performance.now()-t.c;this.rtt=this.rtt?this.rtt*.8+e*.2:e;let n=t.s+e/2-Date.now();this.offset=this.offset?this.offset*.9+n*.1:n;break}case"snap":this.snaps.push(t),this.snaps.length>90&&this.snaps.splice(0,this.snaps.length-90);break;case"matchStart":this.snaps=[];break;case"error":t.code==="auth"&&(this.identity=Fv(),setTimeout(()=>this.open(),300)),t.code==="version"&&(this.wantOpen=!1);break;default:break}this.emit(t.t,t)}serverNow(){return Date.now()+this.offset}sample(t){let e=this.snaps;if(!e.length)return null;if(t>=e[e.length-1].st)return{a:e[e.length-1],b:e[e.length-1],k:0};for(let n=e.length-2;n>=0;n--)if(e[n].st<=t){let i=e[n],s=e[n+1];return{a:i,b:s,k:(t-i.st)/Math.max(1,s.st-i.st)}}return{a:e[0],b:e[0],k:0}}};var sh="ib_net_resume",bo=class{constructor(t){this.game=t,this.net=new _o,this.room=null,this.queue=null,this.match=null,this.result=null,this.leaderboard=null,this.rivals=null,this.events=[],this.lastStats=null,this.sendAcc=0,this.seq=0,this.edges={},this.prevShootHeld=!1,this.shootStart=0,this.notice=null;let e=this.net;e.on("state",n=>this.onState(n)),e.on("welcome",()=>{this.ui("welcome"),e.send({t:"leaderboard"}),e.send({t:"rivals"})}),e.on("room",n=>this.onRoom(n)),e.on("roomEvent",n=>this.onRoomEvent(n)),e.on("queue",n=>{this.queue=n.searching?n:null,this.ui("queue")}),e.on("matchStart",n=>this.onMatchStart(n)),e.on("snap",n=>{n.ev&&this.match&&this.game.netMatch&&this.events.push({st:n.st,ev:Zu(this.game.match,n.ev)}),n.stats&&(this.lastStats=n.stats)}),e.on("matchEnd",n=>this.onMatchEnd(n)),e.on("paused",n=>{this.notice={text:`Waiting for ${n.name} to reconnect\u2026 ${n.until}s`,until:1/0,kind:"warn"}}),e.on("resumed",n=>{this.notice=n.in?{text:`Resuming in ${n.in}\u2026`,until:performance.now()+n.in*1e3,kind:"ok"}:null}),e.on("botTakeover",()=>this.game.hud.feed("A player left \u2014 a bot took over their spot","#ffc857")),e.on("emote",n=>{this.lastEmote=n,this.game.showEmote(n)}),e.on("leaderboard",n=>{this.leaderboard=n,this.ui("leaderboard")}),e.on("rivals",n=>{this.rivals=n.list,this.ui("rivals")}),e.on("left",()=>{this.room=null,this.ui("left")}),e.on("error",n=>this.onError(n)),e.on("left",()=>this.markResume(!1)),e.on("invite",n=>this.game.ui.showInvite(n)),e.on("challengeSent",n=>this.game.ui.toast(n.online?`Challenge sent to ${n.name}`:`${n.name} is offline \u2014 share code ${n.code} with them`))}markResume(t){try{t?localStorage.setItem(sh,String(Date.now())):localStorage.removeItem(sh)}catch{}}resumeIfRecent(){let t=0;try{t=+localStorage.getItem(sh)||0}catch{}return t&&Date.now()-t<12e4?(this.ensureConnected(),!0):!1}get state(){return this.net.state}get profile(){return this.net.profile}ui(t){this.game.ui.onNet(t)}serverUrl(){return ju(this.game.save.settings.server)}ensureConnected(){if(this.net.state==="online"||this.net.state==="connecting"||this.net.state==="reconnecting")return;let t=this.game.save.profile;this.net.connect(this.serverUrl(),()=>({name:t.name,look:{...t.cosmetics},loadout:t.loadout.slice()}))}disconnect(){this.net.close(),this.room=null,this.queue=null}syncProfile(){let t=this.game.save.profile;this.net.send({t:"look",look:{...t.cosmetics},loadout:t.loadout.slice()})}findMatch(t){this.ensureConnected(),this.net.send({t:"queue",mode:t})}cancelSearch(){this.net.send({t:"cancelQueue"}),this.queue=null}createRoom(t){this.net.send({t:"createRoom",mode:t})}joinRoom(t){this.net.send({t:"joinRoom",code:t})}leaveRoom(){this.net.send({t:"leaveRoom"}),this.room=null,this.markResume(!1)}setReady(t){this.net.send({t:"ready",ready:t})}roomSettings(t){this.net.send({t:"roomSettings",...t})}start(){this.net.send({t:"start"})}rematch(){this.net.send({t:"rematch"})}toLobby(){this.net.send({t:"toLobby"})}emote(t){this.net.send({t:"emote",e:t})}sendIdle(){this.prevShootHeld=!1,this.edges={},this.net.send({t:"input",i:yo({mx:0,mz:0},{},++this.seq,null)})}challenge(t){this.net.send({t:"challenge",id:t})}refreshBoards(){this.net.send({t:"leaderboard"}),this.net.send({t:"rivals"})}onState({state:t}){let e=this.game;t==="reconnecting"?this.notice={text:"Connection lost \u2014 reconnecting\u2026",until:1/0,kind:"warn"}:t==="online"?this.notice&&this.notice.text.startsWith("Connection")&&(this.notice=null):t==="offline"&&e.netMatch&&(this.notice={text:"Disconnected \u2014 still trying to reconnect (Esc to leave)",until:1/0,kind:"bad"}),this.ui("state")}onRoom(t){this.room=t,this.markResume(!0);let e=this.game;e.state==="menu"&&(t.state==="lobby"||t.state==="countdown")?e.ui.showLobby():e.state==="results"&&t.state==="lobby"&&e.exitOnline("lobby"),this.ui("room")}onRoomEvent(t){let e={join:"joined",leave:"left",disconnect:"lost connection",reconnect:"is back"}[t.kind]||t.kind;this.game.state==="playing"||this.game.state==="paused"?this.game.hud.feed(`<b>${Bv(t.name)}</b> ${e}`,t.kind==="join"||t.kind==="reconnect"?"#47c97a":"#ffc857"):this.game.ui.toast(`${t.name} ${e}`)}onMatchStart(t){this.match=t,this.result=null,this.queue=null,this.events=[],this.lastStats=null,this.notice=null,this.game.beginOnlineMatch(t)}onMatchEnd(t){this.result=t,this.game.endOnlineMatch(t)}onError(t){let e=this.game;if(t.code==="opponentLeft"){e.ui.toast(t.msg);return}t.code!=="auth"&&(e.ui.toast(t.msg||"Something went wrong"),this.ui("error"))}step(t,e){let n=this.game,i=n.match,s=n.me;if(n.state==="playing"){let h=i.ball.holder===s,d=n.input.sample(n.rig.basis(),e&&e.point,{holding:h,forward:n.rig.basis()});this.autopilot&&((!this.autoBot||this.autoBot.m!==i)&&(this.autoBot=new zs(i,s,"normal")),d=this.autoBot.update(Math.min(t,.1)));for(let f of["jump","dash","pass","call","shootDown","steal","useItem"])d[f]&&(this.edges[f]=!0);d.move&&(this.edges.move=d.move),d.shootDown&&(this.shootStart=performance.now());let u=null;this.prevShootHeld&&!d.shootHeld&&(u=performance.now()-this.shootStart),this.prevShootHeld=d.shootHeld,this.sendAcc+=t,(this.sendAcc>=1/30||u!=null||Object.keys(this.edges).length)&&(this.sendAcc=0,this.net.send({t:"input",i:yo(d,this.edges,++this.seq,u)}),this.edges={})}else this.prevShootHeld||this.sendAcc>.2?(this.prevShootHeld=!1,this.sendAcc=0,this.net.send({t:"input",i:yo({mx:0,mz:0},{},++this.seq,null)})):this.sendAcc+=t;(this.resumeT=(this.resumeT||0)+t)>10&&(this.resumeT=0,this.markResume(!0));let a=this.net.snaps,o=Math.min(160,Math.max(70,this.net.rtt*.5+60)),l=this.net.serverNow()-o;if(a.length){let h=this.net.sample(l),d=a[a.length-1],u=Yu(h.a.s,h.b.s,h.k),f=n.mySlot,g=Math.min(.1,Math.max(0,(this.net.serverNow()-d.st)/1e3)),x=d.s.p[f].slice();x[9]&1&&(x[0]+=x[3]*g,x[2]+=x[5]*g),u={...u,p:u.p.map((m,p)=>p===f?x:m)},(d.s.b[8]===f||d.s.b[8]!==u.b[8])&&(u={...u,b:d.s.b}),u={...u,sc:d.s.sc,ck:d.s.ck,st:d.s.st,stt:d.s.stt,ot:d.s.ot,w:d.s.w,ds:d.s.ds},qu(i,u);for(let m of i.players)m.px=m.x,m.py=m.y,m.pz=m.z;i.ball.px=i.ball.x,i.ball.py=i.ball.y,i.ball.pz=i.ball.z,this.lastStats&&this.lastStats.forEach((m,p)=>{i.players[p]&&(i.players[p].stats=m)})}this.notice&&performance.now()>this.notice.until&&(this.notice=null);let c=[];for(;this.events.length&&(this.events[0].st<=l||this.events.length>30);)c.push(...this.events.shift().ev);return c}};function Bv(r){return String(r).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var Hv={gg:"GG",nice:"NICE ONE",runit:"RUN IT BACK",oops:"MY BAD",wow:"WOW",ez:"LET'S GO"},Vv=["gg","nice","runit","oops","wow","ez"];var Qu=[{id:"move",key:"Move with <kbd>W A S D</kbd>",touch:"Move with your left thumb"},{id:"sprint",key:"Hold <kbd>Shift</kbd> to sprint",touch:"Push the stick all the way to sprint"},{id:"green",key:"Hold click, release in the green",touch:"Hold SHOOT, release in the green"},{id:"score",key:"Make a basket",touch:"Make a basket"},{id:"move2",key:"Dribble move with <kbd>Q</kbd> / <kbd>E</kbd>",touch:"Dribble move with MOVE"},{id:"dash",key:"Dash with <kbd>C</kbd>",touch:"Dash with DASH"},{id:"dunk",key:"Dunk: shoot right at the rim",touch:"Dunk: press SHOOT right at the rim"}],Je=r=>document.getElementById(r),oi=new URLSearchParams(location.search),rh=class{constructor(){this.canvas=Je("view"),this.renderer=new Ta({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.isTouch=oi.has("touch")||matchMedia("(pointer: coarse)").matches&&!matchMedia("(pointer: fine)").matches||"ontouchstart"in window&&navigator.maxTouchPoints>0&&!matchMedia("(pointer: fine)").matches,this.save=Gu(),this.quality=oi.has("low")?"low":this.save.settings.quality||(this.isTouch?"medium":"high"),this.low=this.quality==="low",this.renderQuality=this.quality,this.applyPixelRatio(),this.renderer.shadowMap.enabled=!this.low,this.renderer.shadowMap.type=Pc,this.renderer.toneMapping=Lc,this.renderer.toneMappingExposure=1,this.renderer.outputColorSpace=fe,this.scene=new ws,this.camera=new Ye(60,16/9,.1,600),this.rig=new ho(this.camera),this.world=new io(this.scene,this.renderer,{quality:this.quality}),this.effects=new co(this.scene),this.input=new to(this.canvas),this.isTouch&&(document.body.classList.add("touch"),this.input.enableTouch(),Je("tPause").addEventListener("pointerdown",t=>{t.stopPropagation(),this.pause()})),this.hud=new vo(this),this.ui=new Rr(this),this.online=new bo(this),this.state="menu",this.acc=0,this.timeScale=1,this.slowT=0,this.fovKick=0,this.maxSteps=Ve.MAX_STEPS_PER_FRAME,this.maxDelta=.1,oi.has("catchup")&&(this.maxSteps=60,this.maxDelta=1),this.applySettings(),this.newMatch(!0),this.onResize(),window.addEventListener("resize",()=>this.onResize()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.pause()}),document.addEventListener("fullscreenchange",()=>this.onResize()),this.input.onLockChange=t=>{!t&&this.state==="playing"&&this.pause()},window.addEventListener("keydown",t=>{if(!t.target.matches?.("input, textarea")&&(t.code==="Escape"&&this.state==="playing"&&!t.defaultPrevented&&(t.preventDefault(),this.pause()),t.code==="KeyM"&&this.toggleSound(),t.code==="KeyH"&&this.state==="playing"&&this.hud.toggleHints(),this.netMatch&&this.state==="playing")){t.code==="KeyT"&&this.hud.toggleChat();let e=/^Digit([2-7])$/.exec(t.code);e&&this.hud.chatOpen&&(this.online.emote(Vv[+e[1]-2]),this.hud.toggleChat(!1))}}),this.ui.go("home",{reset:!0,force:!0}),this.online.resumeIfRecent(),this.last=performance.now(),requestAnimationFrame(t=>this.frame(t)),oi.has("debug")&&(window.__IB=this),this.noRender=oi.has("debug")&&oi.has("norender"),requestAnimationFrame(()=>setTimeout(()=>Je("boot").classList.add("done"),120))}newMatch(t,e={}){let n=rn[e.mode]||rn.quick,i=e.difficulty||"normal",s=this.save.profile,a=this.match?this.match.players:[];this.modeId=t?"quick":n.id,this.match=new yr({difficulty:t?"hard":i,teamSize:t?3:n.teamSize,practice:!t&&!!n.practice,chaos:!t&&!!n.chaos,duration:t||n.practice?void 0:e.duration,items:t||n.chaos?!0:e.items!==!1,itemPools:t?{}:{0:s.loadout.slice()},seed:oi.has("seed")?+oi.get("seed"):void 0,lookSeed:t?5:0});let o=this.match;this.mySlot=0,this.netMatch=!1,this.tutorial=null,t||(o.players[0].name=s.name),this.attract=t,this.bots=o.players.map(l=>t||!l.isHuman?new zs(o,l,t?"hard":i):null),this.buildViews(a,l=>l.isHuman&&!t?{tag:l.name,you:!0,...this.lookOpts(s.cosmetics)}:{tag:l.name,you:!1}),this.ballView.setSkin(t?"classic":s.cosmetics.ball)}buildViews(t,e){let n=this.match;for(let i of t)this.effects.rope(i,null);if(this.chars)for(let i of this.chars)i.dispose();this.chars=n.players.map(i=>new Sr(this.scene,i,e(i))),this.moments=[],this.hoopViews?(n.hoops.forEach((i,s)=>this.hoopViews[s].hoop=i),this.ballView.ball=n.ball,this.boxView.box=n.box):(this.hoopViews=n.hoops.map(i=>new so(this.scene,i)),this.ballView=new oo(this.scene,n.ball),this.boxView=new lo(this.scene,n.box));for(let i of this.match.players)this.effects.rope(i,null);this.effects.clearWorldItems(),this.lastScorer=null,this.timeScale=1,this.slowT=0,this.rig.yaw=0,this.rig.pitch=.18,this.rig.ready=!1,this.acc=0,this.lastCount=-1,this.ending=!1,this.hud.reset(this.match)}get me(){return this.match.players[this.mySlot||0]}lookOpts(t){return t=t||{},{skin:Pn("skin",t.skin).color,style:t.hair,shoe:Pn("shoes",t.shoes).colors,gear:t.gear,number:t.number!=null?String(t.number):void 0,body:Pn("body",t.body).id,face:Pn("face",t.face).id}}beginOnlineMatch(t){vt.unlock(),this.previewOn&&this.exitPreview(),this.ui.closeDialogs?.(),this.menuShift=0,this.camera.clearViewOffset(),this.world.setMenuMood(!1);let e=this.match?this.match.players:[];this.match=new yr({seed:t.seed,teamSize:t.teamSize,duration:t.duration,items:t.items,itemPools:{},difficulty:"normal"});let n=this.match;n.players.forEach((s,a)=>{let o=t.roster[a];o&&(s.name=o.name,s.isHuman=!!o.human)}),this.mySlot=t.you,this.netMatch=!0,this.attract=!1,this.modeId=t.kind==="ranked"?"ranked":"online",this.onlineInfo=t,this.hud.setTutorial(null),this.bots=n.players.map(()=>null);let i=this.save.profile;this.buildViews(e,s=>{let a=t.roster[s.id];return s.id===t.you?{tag:s.name,you:!0,...this.lookOpts(i.cosmetics)}:a&&a.look?{tag:s.name,you:!1,...this.lookOpts(a.look)}:{tag:s.name,you:!1}}),this.ballView.setSkin(i.cosmetics.ball),this.rig.yaw=n.attackHoop(this.me.team).dir>0?0:Math.PI,this.state="playing",this.ui.hideAll(),Je("hud").hidden=!1,this.input.releaseHeld(),this.input.enabled=!0,this.input.requestLock(),this.isTouch&&this.goFullscreen(),vt.startCrowd(),this.canvas.focus()}endOnlineMatch(t){if(!this.netMatch)return;let e=this.match;t.stats.forEach((d,u)=>{e.players[u]&&(e.players[u].stats=d)}),e.score=t.score.slice(),e.time=t.duration,e.stops=t.stops.slice();let n=this.me,i=t.winner===n.team;if(!this.ending){this.ending=!0,i?vt.win():vt.lose();let d=t.forfeit?i?"Your opponent left the match":"You left the match":`${e.score[0]} - ${e.score[1]}`;this.hud.banner(i?"Victory":"Defeat",d,i?"#ffc857":"#c9ced6",1800)}let s=this.save.profile,a=vn(s.xp),o=t.abandoned?{total:0,lines:[]}:this.matchRewards(n,i,!0),l=s.xp;s.xp+=o.total;let c=vn(s.xp),h=Fs().filter(d=>d.lvl>a.level&&d.lvl<=c.level);t.abandoned||jc(s,n,i,this.modeId),this.save.wins=s.career.wins,this.save.losses=s.career.losses,this.persist(),this.lastResult={match:e,won:i,mode:this.modeId,xp:o,before:a,after:c,prevXp:l,unlocks:h,online:t,highlight:this.bestMoment()},clearTimeout(this.resultsT),this.resultsT=setTimeout(()=>this.showResults(),t.forfeit||t.abandoned?900:2300)}exitOnline(t="online"){clearTimeout(this.resultsT),this.input.enabled=!1,this.input.exitLock(),vt.stopCrowd(),this.newMatch(!0),this.state="menu",Je("hud").hidden=!0,this.hud.toggleChat(!1),this.ui.go(t,{reset:!0,force:!0}),t!=="home"&&(this.ui.stack=["home"])}leaveOnlineMatch(){this.online.leaveRoom(),this.exitOnline("online")}showEmote(t){let e=Hv[t.e];if(!e)return;let n=this.netMatch&&t.slot>=0?this.match.players[t.slot]:null;n&&(this.state==="playing"||this.state==="paused")?(this.hud.callout({x:n.x,y:n.y+2.9,z:n.z},`\u{1F4AC} ${e}`,te[n.team].css,24),this.hud.feed(`<b>${t.from.replace(/[<>&]/g,"")}</b>: ${e}`,te[n.team].css,at.chat)):this.ui.toast(`${t.from}: ${e}`)}teamNames(){let t=this.match;return!t||this.attract?["HOME","AWAY"]:t.practice?[t.players[0].name,"\u2013"]:t.teamSize===1?[t.players[0].name,this.netMatch?t.players[1].name:"BOT"]:["HOME","AWAY"]}startMatch(t){vt.unlock(),this.menuShift=0,this.camera.clearViewOffset(),this.world.setMenuMood(!1),this.lastConfig={...t},this.newMatch(!1,t),this.tutorial=t.mode==="practice"&&t.tutorial?{done:new Set,finished:!1}:null,this.hud.setTutorial(this.tutorial?this.tutorialSteps():null),this.state="playing",this.ui.hideAll(),Je("hud").hidden=!1,this.input.enabled=!0,this.input.requestLock(),this.isTouch&&this.goFullscreen(),vt.startCrowd(),this.canvas.focus()}restartMatch(){this.startMatch(this.lastConfig)}goFullscreen(){let t=document.documentElement;try{!document.fullscreenElement&&t.requestFullscreen&&t.requestFullscreen({navigationUI:"hide"}).catch(()=>{}),screen.orientation?.lock?.("landscape").catch(()=>{})}catch{}}toggleFullscreen(){try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.().catch(()=>this.ui.toast("Fullscreen is not available here"))}catch{this.ui.toast("Fullscreen is not available here")}}pause(){this.state==="playing"&&(this.state="paused",this.netMatch&&this.online.sendIdle(),this.input.releaseHeld(),this.input.enabled=!1,this.input.exitLock(),this.ui.go("pause",{reset:!0,force:!0}),this.netMatch||vt.stopCrowd())}resume(){this.state==="paused"&&(this.state="playing",this.ui.hideAll(),this.input.enabled=!0,this.input.requestLock(),this.last=performance.now(),this.acc=0,vt.unlock(),vt.startCrowd(),this.canvas.focus())}toMenu(){this.input.enabled=!1,this.input.exitLock(),vt.stopCrowd(),this.newMatch(!0),this.state="menu",Je("hud").hidden=!0,this.ui.go("home",{reset:!0,force:!0})}persist(){Wu(this.save)||this.ui.toast("Could not save: browser storage is blocked")}toggleSound(){vt.unlock(),vt.setMuted(!vt.muted),this.ui.current==="home"&&this.ui.rerender()}applySettings(){let t=this.save.settings;vt.setVolume(t.master),vt.setSfxVolume(t.sfx),vt.setCrowdVolume(t.crowd),this.input.sensitivity=.0024*t.sens,this.input.touchSensitivity=.0065*t.sens,this.input.invertY=!!t.invertY;let e=matchMedia("(prefers-reduced-motion: reduce)").matches;this.reduceMotion=t.motion==="reduced"||t.motion==="system"&&e,document.body.classList.toggle("reduce-motion",t.motion==="reduced"),document.body.classList.toggle("motion-system",t.motion==="system"),this.rig.shakeScale=t.shake&&!this.reduceMotion?1:0,this.fxOn=t.effects&&!this.reduceMotion,document.documentElement.style.setProperty("--hud-scale",t.hudScale),this.hud&&this.state!=="menu"&&!t.hints&&this.hud.setHints(!1);let n=oi.has("low")?"low":t.quality||(this.isTouch?"medium":"high");n!==this.renderQuality&&(this.renderQuality=n,this.applyPixelRatio(),this.renderer.shadowMap.enabled=n!=="low",this.world.sun.castShadow=n!=="low",this.scene.traverse(i=>{if(i.material)for(let s of[].concat(i.material))s.needsUpdate=!0}),this.onResize())}enterPreview(t){this.previewOn=!0;for(let e of this.chars)e.root.visible=!1,e.tag.visible=!1,e.ring.visible=!1,e.shadow.visible=!1;this.boxView.mesh.visible=!1,this.boxView.glow&&(this.boxView.glow.visible=!1),this.effects.clearWorldItems(),this.previewYaw=.35,this.setPreviewLook(t)}setPreviewLook(t){if(!this.previewOn)return;this.preview&&this.preview.dispose();let e=new Ds(0,0,{isHuman:!0,name:this.save.profile.name});e.place(0,0,this.previewYaw),this.previewPlayer=e,this.preview=new Sr(this.scene,e,{tag:"",...this.lookOpts(t)}),this.preview.tag.visible=!1,this.preview.ring.visible=!1,this.ballView.setSkin(t.ball)}rotatePreview(t){this.previewYaw+=t}exitPreview(){if(this.previewOn){this.previewOn=!1,this.preview&&(this.preview.dispose(),this.preview=null);for(let t of this.chars)t.root.visible=!0,t.ring.visible=!0,t.shadow.visible=!0;this.boxView.mesh.visible=!0,this.camera.clearViewOffset(),this.ballView.setSkin("classic")}}updatePreview(t){let e=this.previewPlayer;e.yaw=this.previewYaw,e.px=e.x,e.py=e.y,e.pz=e.z,this.preview.update(1,{holder:null,x:0,y:-5,z:0},t,{});let n=Math.cos(this.previewYaw+.9)*.62,i=Math.sin(this.previewYaw+.9)*.62;this.ballView.mesh.position.set(n,.13,i),this.ballView.blob.position.set(n,.01,i);let s=window.innerWidth,a=window.innerHeight,o=s>980?s>1180?[288,398]:[238,338]:s>640?[0,318]:[0,0],l=(o[1]-o[0])/2;l?this.camera.setViewOffset(s,a,l,0,s,a):this.camera.clearViewOffset();let c=s/a<1.2?4.4:3.25;this.camera.position.set(c,1.3,.2),this.camera.lookAt(0,.95,0)}onResize(){let t=window.innerWidth,e=window.innerHeight;Je("rotate").hidden=!(this.isTouch&&e>t),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.baseFov=t/e<1.2?72:62,this.camera.fov=this.baseFov,this.camera.updateProjectionMatrix()}computeAim(){let t=this.match,e=this.me,n=this.camera,i=new R;n.getWorldDirection(i);let s=n.position,a=t.hoops.map(d=>d.rim);for(let d of t.opponents(e))a.push({x:d.x,y:d.y+1.1,z:d.z});t.ball.holder||a.push(t.ball);let o=null,l=1.6,c=new R;for(let d of a){c.set(d.x-s.x,d.y-s.y,d.z-s.z);let u=c.dot(i);if(u<1||u>32)continue;let f=c.addScaledVector(i,-u).length(),g=.9+u*.045;f<Math.min(l,g)&&(l=f,o=d)}if(o)return{point:{x:o.x,y:o.y,z:o.z},locked:!0};if(e.item==="grapple"&&(this.isTouch||!this.input.locked)){let d={x:i.x,z:i.z},u=t.ball.holder===e?t.attackHoop(e.team).rim:t.ball.holder?t.ball.holder:t.ball,f=u.x-e.x,g=u.z-e.z,x=Math.hypot(f,g)||1;if((f*d.x+g*d.z)/(x*(Math.hypot(d.x,d.z)||1))>.5){let m=u===t.ball.holder?u.y+1.1:u.y;return{point:{x:u.x,y:m,z:u.z},locked:!0}}}let h=24;return i.y<-.01&&(h=Math.min(h,-s.y/i.y)),{point:{x:s.x+i.x*h,y:Math.max(.3,s.y+i.y*h),z:s.z+i.z*h},locked:!1}}frame(t){let e=Math.min((t-this.last)/1e3,this.maxDelta);this.last=t;let n=this.match;if(this.netMatch&&(this.state==="playing"||this.state==="paused")){if(this.state==="playing"){let h=this.input.takeLook(e);this.rig.addLook(h.dx,h.dy)}let c=this.state==="playing"?this.computeAim():null;this.hud.setCrosshair(c&&c.locked&&this.me.item),this.handleEvents(this.online.step(e,c)),this.acc=0}else if((this.state==="playing"||this.state==="menu")&&!this.previewOn){if(this.state==="playing"){let d=this.input.takeLook(e);this.rig.addLook(d.dx,d.dy)}this.slowT>0&&(this.slowT-=e,this.slowT<=0&&(this.timeScale=1)),this.acc+=e*this.timeScale;let c=0,h=this.state==="playing"?this.computeAim():null;for(this.hud.setCrosshair(h&&h.locked&&this.me.item);this.acc>=Ve.DT&&c<this.maxSteps;){let d=this.me,u={holding:n.ball.holder===d,forward:this.rig.basis()},f=this.bots.map((g,x)=>g?g.update(Ve.DT):this.input.sample(this.rig.basis(),h&&h.point,u));n.update(Ve.DT,f),this.acc-=Ve.DT,c++,this.handleEvents(n.drainEvents())}if(c===this.maxSteps&&(this.acc=0),this.tutorial&&this.state==="playing"){let d=this.me;Math.hypot(d.vx,d.vz)>2&&this.tutorialMark("move"),d.sprinting&&Math.hypot(d.vx,d.vz)>5&&this.tutorialMark("sprint")}this.attract&&n.state==="ended"&&this.newMatch(!0)}let i=this.acc/Ve.DT;if(this.previewOn)this.updatePreview(e);else if(this.attract){this.rig.orbit(e,{x:n.ball.x*.5,z:n.ball.z*.3});let c=this.ui.current==="home"&&window.innerWidth>980?-.17:0;this.menuShift=(this.menuShift||0)+(c-(this.menuShift||0))*Math.min(1,e*3);let h=window.innerWidth,d=window.innerHeight;Math.abs(this.menuShift)>.002?this.camera.setViewOffset(h,d,this.menuShift*h,0,h,d):this.camera.clearViewOffset()}else{this.rig.dist=6.2;let c=this.me;this.rig.update(e,this.chars[this.mySlot||0].root.position,.75,{dunk:c.state==="dunk"||c.state==="grapple"&&c.grapple?.kind==="rim"})}this.world.update(e);for(let c of this.hoopViews)c.update(e);this.syncJumbotron(n);let s=n.state==="scored"||n.state==="final"||n.state==="ended",a=this.me,o=!this.attract&&n.teamSize>1&&n.ball.holder===a?n.choosePassTarget(a,{x:this.rig.basis().fx,z:this.rig.basis().fz}):null;for(let c of this.previewOn?[]:this.chars)c.tag.visible=!this.attract&&c.p!==a,c.update(i,n.ball,e,{effects:this.effects,celebrate:s&&c.p===this.lastScorer,passTarget:c.p===o});this.previewOn||(this.effects.syncWorldItems(n,i),this.attract||this.squeaks(n),this.ballTrail(n)),this.fovKick*=Math.exp(-6*e);let l=(this.baseFov||60)+this.fovKick;Math.abs(this.camera.fov-l)>.05&&(this.camera.fov=l,this.camera.updateProjectionMatrix()),this.previewOn||this.ballView.update(i),this.previewOn||this.boxView.update(e);for(let c of n.players)this.effects.rope(c,c.state==="grapple"?c.grapple.target:null);this.effects.update(e),!this.attract&&this.state!=="menu"&&(this.countdownUi(),this.hud.update(i),this.isTouch&&this.updateTouchButtons()),this.noRender||this.renderer.render(this.scene,this.camera),requestAnimationFrame(c=>this.frame(c))}squeaks(t){let e=this.camera.position;for(let n of t.players){let i=Math.hypot(n.vx,n.vz),s=n._sq||{vx:n.vx,vz:n.vz,dash:0};if(n.onGround&&i>3.5){let a=Math.hypot(s.vx,s.vz)||1,o=(n.vx*s.vx+n.vz*s.vz)/(i*a);Math.hypot(n.x-e.x,n.z-e.z)<14&&(o<.55||n.dashT>0&&!s.dash)&&vt.squeak(n.isHuman?1:.6)}n._sq={vx:s.vx+(n.vx-s.vx)*.12,vz:s.vz+(n.vz-s.vz)*.12,dash:n.dashT>0}}}applyPixelRatio(){let t=window.devicePixelRatio||1,e={low:1,medium:this.isTouch?1.25:1.5,high:this.isTouch?1.75:2}[this.quality]||1;this.renderer.setPixelRatio(Math.min(t,e))}syncJumbotron(t){let e=Math.max(0,Math.ceil(t.clock)),n=`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,i=t.overtime?"OVERTIME":`${t.teamSize} V ${t.teamSize}`,s=`${t.score[0]}|${t.score[1]}|${n}|${i}`;s!==this.jumboKey&&(this.jumboKey=s,this.world.drawScoreboard(t.score,n,i))}updateTouchButtons(){let t=this.match,e=this.me,n="SWIPE";if(t.ball.holder===e){let o=t.attackHoop(e.team),l=Math.hypot(o.rim.x-e.x,o.rim.z-e.z),c=!e.onGround&&e.top+.45>o.rim.y-.5;n=l<1.9||c&&l<2.9?"DUNK":l<3.1?"LAYUP":"SHOOT"}n!==this.shootLabel&&(this.shootLabel=n,Je("tShoot").textContent=n);let i=t.ball.holder===e,s=i?"MOVE":"STEAL";s!==this.stealLabel&&(this.stealLabel=s,Je("tSteal").textContent=s);let a=i?"PASS":"CALL";a!==this.passLabel&&(this.passLabel=a,Je("tPass").textContent=a),Je("tPass").hidden=t.teamSize===1,e.item!==this.touchItem&&(this.touchItem=e.item,Je("tItem").classList.toggle("empty",!e.item),Je("tItem").querySelector(".ticon").innerHTML=e.item?Hn[e.item]:"",Je("tItem").querySelector(".tlabel").textContent=e.item?"":"ITEM")}slowMo(t,e){this.attract||!this.fxOn||(this.timeScale=t,this.slowT=e)}ballTrail(t){let e=t.ball;if(e.holder||!e.shot||e.shot.resolved||e.speed<5){e.holder&&e.holder.fire>0&&Math.random()<.6&&this.effects.puff(e.x,e.y,e.z,{color:16742938,add:!0,size:.3,life:.3,vy:1.5});return}let n=e.shot.shooter&&e.shot.shooter.fire>0;this.effects.puff(e.x,e.y,e.z,n?{color:Math.random()<.5?16742938:16765503,add:!0,size:.42,life:.4,vy:.5}:{color:16777215,add:!0,size:.22,life:.25,vy:0,opacity:.5})}countdownUi(){let t=this.match;if(t.state!=="countdown"){this.lastCount=-1;return}let e=Math.ceil(t.stateT/.8);e!==this.lastCount&&e>=1&&e<=3&&(this.hud.banner(String(e),t.overtime?"OVERTIME \u2022 NEXT BUCKET WINS":"","#ffffff",500),vt.beep(!1)),this.lastCount=e}handleEvents(t){if(this.attract){for(let o of t)o.type==="score"&&(this.hoopViews.find(l=>l.hoop===o.hoop)?.swish(1),this.effects.burst(o.hoop.rim.x,o.hoop.rim.y+.6,o.hoop.rim.z,qc(o.team),30,5));return}let e=this.match,n=this.hud,i=o=>({x:o.x,y:o.y+2.6,z:o.z}),s=o=>`<b>${o.name.replace(/[<>&]/g,"")}</b>`,a=o=>te[o.team].css;for(let o of t){let l=c=>c&&c===this.me;switch(this.tutorial&&(o.type==="shot"&&l(o.player)&&(o.label==="PERFECT"||o.label==="GOOD")&&this.tutorialMark("green"),o.type==="score"&&l(o.scorer)&&this.tutorialMark("score"),o.type==="dribbleMove"&&l(o.player)&&this.tutorialMark("move2"),o.type==="dash"&&l(o.player)&&this.tutorialMark("dash"),o.type==="dunk"&&l(o.player)&&this.tutorialMark("dunk")),l(o.player)&&(o.type==="dash"?n.abilityUsed("dash"):o.type==="dribbleMove"?n.abilityUsed("move"):o.type==="pass"||o.type==="call"?n.abilityUsed("pass"):(o.type==="useItem"||o.type==="grapple")&&n.abilityUsed("item")),o.type){case"block":this.addMoment(o.dunk?7:5,o.dunk?"Stuffed at the rim":"Rejected",`${o.player.name} blocked ${o.victim.name}`,o.player);break;case"steal":this.addMoment(3,"Pickpocket",`${o.player.name} stole it from ${o.victim.name}`,o.player);break;case"ankles":this.addMoment(6,"Ankle breaker",`${o.player.name} dropped ${o.victim.name}`,o.player);break;case"charge":this.addMoment(3,"Took the charge",`${o.by.name} stood ${o.player.name} up`,o.by);break;case"grappleHit":this.addMoment(4,"Yoink",`${o.player.name} hooked ${o.victim.name}`,o.player);break;default:break}switch(o.type){case"steal":n.feed(`${s(o.player)} ${o.grapple?"hooked the ball from":o.magnet?"magnet-stole it from":"stole it from"} ${s(o.victim)}`,a(o.player),at.steal);break;case"block":n.feed(`${s(o.player)} ${o.dunk?"stuffed":"blocked"} ${s(o.victim)}`,a(o.player),at.bolt);break;case"intercept":n.feed(`${s(o.player)} picked off the pass`,a(o.player),at.steal);break;case"ankles":n.feed(`${s(o.player)} broke ${s(o.victim)}\u2019s ankles`,a(o.player),at.move);break;case"onFire":n.feed(`${l(o.player)?"<b>You</b>":s(o.player)} ${l(o.player)?"are":"is"} on fire`,"#ff6b24",at.flame);break;case"frozen":n.feed(`${s(o.player)} got frozen`,"#9fe8ff",at.spark);break;case"slip":n.feed(`${s(o.player)} slipped on a banana`,"#ffd93d",at.spark);break;case"item":l(o.player)&&n.feed(`You got the ${Si[o.item].toLowerCase().replace(/\b\w/g,c=>c.toUpperCase())} \u2014 press <b>1</b>`,"#ffc857",at.loadout);break;case"punch":o.victim&&n.feed(`${s(o.player)} rocket-punched ${s(o.victim)}`,a(o.player),at.bolt);break;default:break}switch(o.type){case"tipoff":n.banner("TIP OFF!","","#ffcf3d",600),vt.beep(!0);break;case"inbound":this.rig.ready=!1;break;case"dribble":vt.dribble();break;case"bounce":vt.bounce(o.speed);break;case"rim":vt.rim(o.speed);break;case"board":vt.board();break;case"shot":vt.shoot(),l(o.player)&&o.kind==="jump"&&n.releaseLabel(o.label);break;case"dunk":vt.dunk(),this.slowMo(.3,.3),this.fxOn&&(this.fovKick=9),this.effects.shockwave(o.hoop.rim.x,o.hoop.rim.z,te[o.player.team].color),this.rig.shake(.5,.35),this.world.cheer(1);break;case"score":this.onScore(o);break;case"steal":vt.steal(),n.callout(i(o.player),o.grapple?"HOOKED IT!":o.magnet?"MAGNETIZED!":o.kind==="grab"?"PICKED!":o.kind==="poke"?"POKED LOOSE!":"STRIPPED!",te[o.player.team].css,30),this.world.cheer(.5);break;case"reach":{vt.whiff();let c={shielded:"BODY IN THE WAY",short:"TOO FAR",angle:"BAD ANGLE",overhead:"CAN'T REACH \u2014 BLOCK IT",height:"TOO LOW",air:"IN THE AIR"}[o.why]||"MISSED";l(o.player)?n.callout(i(o.player),c,"#c9ced6",20):l(o.victim)&&o.why==="shielded"&&n.callout(i(o.victim),"PROTECTED","#47c97a",22);break}case"swipe":vt.whiff();break;case"charge":vt.hit(),n.callout(i(o.player),"CHARGE!",te[o.by.team].css,32),n.feed(`${s(o.by)} took the charge from ${s(o.player)}`,a(o.by),at.bolt),this.rig.shake(.2,.15),this.world.cheer(.6);break;case"dodge":n.callout(i(o.player),"DODGED!","#47c97a",26);break;case"block":vt.block(),n.callout(i(o.player),o.dunk?"STUFFED!":"REJECTED!",te[o.player.team].css,40),this.rig.shake(.25,.2),this.world.cheer(.8);break;case"tip":n.callout(i(o.player),"TIPPED","#ffffff",20);break;case"rebound":o.offensive&&n.callout(i(o.player),"O-BOARD","#ffffff",20);break;case"grapple":vt.grapple();break;case"grappleHit":vt.hit(),this.slowMo(.35,.2),n.callout(i(o.victim),"YOINK!",te[o.player.team].css,34),this.rig.shake(.35,.25),this.effects.burst(o.victim.x,1.2,o.victim.z,[16777215,16764733],20,4);break;case"item":vt.item(),this.effects.burst(o.x,1,o.z,[16764733,16777215,16747050],26,4),n.callout({x:o.x,y:1.8,z:o.z},`+ ${Si[o.item]}`,"#ffcf3d",22),l(o.player)&&n.flashItem();break;case"boxSpawn":vt.boxSpawn(),n.callout({x:o.x,y:1.8,z:o.z},"? BOX","#ffcf3d",20);break;case"buzzer":vt.buzzer(),e.state==="buzzer"&&n.banner("BALL IN THE AIR...","","#ffcf3d",1500);break;case"overtime":n.banner("OVERTIME","TIED UP \u2022 NEXT BUCKET WINS","#ffcf3d",1300),this.world.cheer(1);break;case"end":this.onEnd(o);break;case"useItem":this.onUseItem(o);break;case"punch":o.victim?(vt.pow(),n.callout(i(o.victim),"KAPOW!","#ff3b4e",46),this.rig.shake(.6,.35),this.slowMo(.3,.22),this.effects.burst(o.victim.x,1.4,o.victim.z,[16777215,16726862,16764733],30,6),this.world.cheer(.8)):n.callout(i(o.player),"WHIFF","#d6d2f0",22);break;case"frozen":vt.frozen(),n.callout(i(o.player),"FROZEN!","#9fe8ff",40);for(let c=0;c<18;c++)this.effects.puff(o.player.x,.4+Math.random()*2,o.player.z,{color:12580095,add:!0,size:.4,life:.6,vx:(Math.random()-.5)*5,vz:(Math.random()-.5)*5,vy:1});this.slowMo(.45,.15);break;case"projectileEnd":for(let c=0;c<8;c++)this.effects.puff(o.x,o.y,o.z,{color:12580095,add:!0,size:.3,life:.4,vx:(Math.random()-.5)*3,vz:(Math.random()-.5)*3});break;case"slip":vt.slip(),n.callout(i(o.player),"SLIPPED!","#ffd93d",38),this.world.cheer(.6);break;case"onFire":vt.fire(),n.banner(`${l(o.player)?"YOU":o.player.name} ${l(o.player)?"ARE":"IS"} ON FIRE!`,"3 IN A ROW \u2022 HOTTER SHOTS \u2022 NO STUFFED DUNKS","#ff7a1a",1300),this.world.cheer(1);break;case"fireOut":n.callout(i(o.player),"COOLED OFF","#9fe8ff",22);break;case"crossover":vt.swish2();break;case"dribbleMove":vt.swish2();break;case"dash":vt.whiff();break;case"pass":vt.swish2();break;case"catch":vt.dribble();break;case"intercept":vt.steal(),n.callout(i(o.player),"PICKED OFF!",te[o.player.team].css,32),this.world.cheer(.6);break;case"call":l(o.player)&&n.callout(i(o.player),"BALL!","#ffcf3d",24);break;case"ankles":vt.hit(),n.banner("ANKLE BREAKER!",`${o.player.name} sent ${o.victim.name} to the floor`,te[o.player.team].css,900),this.slowMo(.3,.35),this.rig.shake(.25,.2),this.world.cheer(1);break}}}tutorialSteps(){let t=this.tutorial;return Qu.map(e=>({text:this.isTouch?e.touch:e.key,done:t.done.has(e.id)}))}tutorialMark(t){let e=this.tutorial;!e||e.done.has(t)||(e.done.add(t),vt.item(),e.done.size===Qu.length&&!e.finished&&(e.finished=!0,this.hud.banner("BASICS DONE","Next: play a 1v1 and try defense","#47c97a",1600),this.save.profile.tutorialDone=!0,this.persist()),this.hud.setTutorial(this.tutorialSteps(),e.finished))}matchRewards(t,e,n){let i=this.save.profile,s=wu(t,e,this.modeId);if(this.modeId==="practice")return s;if(this.modeId===Tr()){let a=Math.round(s.total*.25);a&&s.lines.push(["Featured mode bonus (+25%)",a])}for(let a of Ou(i,t,e,this.modeId,n))s.lines.push([`Challenge: ${a.name}`,a.xp]);return s.challenges=s.lines.filter(a=>a[0].startsWith("Challenge")).length,s.total=s.lines.reduce((a,o)=>a+o[1],0),s}addMoment(t,e,n,i){if(this.attract||!this.moments)return;let s=this.match;i&&i===this.me&&(t*=1.4);let a=s.practice?"":s.overtime?"OT":`${Math.floor(Math.max(0,Math.ceil(s.clock))/60)}:${String(Math.max(0,Math.ceil(s.clock))%60).padStart(2,"0")} left`;this.moments.push({w:t,title:e,sub:a?`${n} \xB7 ${a}`:n,mine:i===this.me})}bestMoment(){let t=null;for(let e of this.moments||[])(!t||e.w>=t.w)&&(t=e);return t}onUseItem(t){let e=t.player,n={x:e.x,y:e.y+2.6,z:e.z};switch(t.item){case"jetpack":vt.jetpack(),this.hud.callout(n,"JETPACK!","#ffa21f",26);break;case"punch":vt.punchWind();break;case"freeze":vt.freezeZap();break;case"banana":vt.plop();break;case"magnet":vt.magnet(),this.hud.callout(n,"MAGNET ON","#ff3b4e",24);break;case"energy":vt.gulp(),this.hud.callout(n,"ENERGY!","#45e07a",26);break}}onScore(t){let e=this.match;this.lastScorer=t.scorer;let n=t.hoop,i=te[t.team].css;t.swish&&vt.swish(),vt.score(t.pts===3||t.buzzer||t.kind==="dunk"),this.world.cheer(t.pts===3||t.kind==="dunk"?1:.6);let s=this.hoopViews.find(h=>h.hoop===n);s&&s.swish(t.swish?1.2:t.kind==="dunk"?1.4:.8);let a=this.save.profile.cosmetics.fx,o=t.team===0&&a!=="team"?Pn("fx",a).colors:qc(t.team);this.effects.burst(n.rim.x-n.dir*.6,n.rim.y+.6,n.rim.z,o,t.kind==="dunk"||t.pts===3?60:32,5),this.hud.callout({x:n.rim.x,y:n.rim.y+.9,z:n.rim.z},`+${t.pts}`,i,48);let l=null;t.buzzer?l="BUZZER BEATER!":t.overtime?l="GAME WINNER!":t.kind==="dunk"?l=t.grapple?"GRAPPLE SLAM!":"SLAM!":t.pts===3?l=t.swish?"SPLASH!":"FROM DEEP!":t.swish?l="SWISH!":!e.overtime&&e.clock<12&&Math.abs(e.score[0]-e.score[1])<=3&&(l="CLUTCH!");let c=t.scorer?`${t.scorer.name} \u2022 ${t.pts} PTS${t.assist?` \u2022 AST ${t.assist.name}`:""}`:"";if(l&&this.hud.banner(l,c,i,900),t.scorer){let h=t.buzzer?10:t.overtime?9:l==="CLUTCH!"?6:t.kind==="dunk"?t.grapple?6:5:t.pts===3?t.swish?5:4:t.swish?2:1,d=l?l.replace("!","").toLowerCase().replace(/^\w/,u=>u.toUpperCase()):`${t.pts}-pointer`;this.addMoment(h,d,`${t.scorer.name} \u2022 ${t.pts} PTS${t.assist?` \u2022 assist ${t.assist.name}`:""}`,t.scorer)}else t.assist&&this.hud.callout({x:n.rim.x,y:n.rim.y+.4,z:n.rim.z},`ASSIST ${t.assist.name}`,"#ffffff",20)}onEnd(t){if(this.ending)return;if(this.netMatch){this.ending=!0;let d=t.winner===this.me.team;d?vt.win():vt.lose(),this.hud.banner(d?"Victory":"Defeat",`${this.match.score[0]} - ${this.match.score[1]}`,d?"#ffc857":"#c9ced6",1800),this.world.cheer(1);return}this.ending=!0;let e=this.match,n=t.winner===0;n?vt.win():vt.lose(),this.hud.banner(n?"Victory":"Defeat",`${e.score[0]} - ${e.score[1]}`,n?"#ffc857":"#c9ced6",1800),this.world.cheer(1);let i=this.save.profile,s=this.me,a=vn(i.xp),o=this.matchRewards(s,n,!1),l=i.xp;i.xp+=o.total;let c=vn(i.xp),h=Fs().filter(d=>d.lvl>a.level&&d.lvl<=c.level);this.modeId!=="practice"&&jc(i,s,n,this.modeId),this.save.wins=i.career.wins,this.save.losses=i.career.losses,this.persist(),this.lastResult={match:e,won:n,mode:this.modeId,xp:o,before:a,after:c,prevXp:l,unlocks:h,highlight:this.bestMoment()},setTimeout(()=>this.showResults(),2300)}showResults(){this.state!=="playing"&&this.state!=="paused"||(this.state="results",this.input.enabled=!1,this.input.exitLock(),vt.stopCrowd(),Je("hud").hidden=!0,this.ui.go("results",{reset:!0,force:!0}))}};async function Gv(){try{await Promise.race([Promise.all(['800 64px "Big Shoulders Display"',"600 20px Barlow",'700 20px "Barlow Condensed"'].map(r=>document.fonts.load(r))),new Promise(r=>setTimeout(r,1500))])}catch{}new rh}window.addEventListener("DOMContentLoaded",Gv);export{Hv as EMOTES,Vv as EMOTE_LIST};
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
