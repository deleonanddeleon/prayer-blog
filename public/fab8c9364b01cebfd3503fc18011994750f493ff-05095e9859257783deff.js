(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("f3/d"),a("0mN4");var i=a("YTpj"),r=a("q1tI"),n=a.n(r),s=a("9eSz"),d=a.n(s),o=a("p3AD");t.a=function(){var e=i.data,t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(o.a)(2.5)}},n.a.createElement(d.a,{fixed:e.avatar.childImageSharp.fixed,alt:a.name,style:{marginRight:Object(o.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Compiled / Written by ",n.a.createElement("strong",null,a.name)," ",a.summary," ",n.a.createElement("a",{href:"mailto:"+r.twitter},"You can contact him via email.")))}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),d=i(a("8OQS")),o=i(a("pVnL")),l=i(a("q1tI")),u=i(a("17x9")),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),a=p(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function A(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function L(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+s+d+a+i+t+n+r+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=l.default.createElement(W,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,r(i),d):d})),W=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));W.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=p(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,d=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,L=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,o.default)({opacity:I?1:0,transition:N?"opacity "+y+"ms":"none"},d),z="boolean"==typeof b?"lightgray":b,O={transitionDelay:y+"ms"},q=(0,o.default)((0,o.default)((0,o.default)({opacity:this.state.imgLoaded?0:1},N&&O),d),f),C={title:t,alt:this.state.isVisible?"":a,style:q,className:p,itemProp:S};if(h){var F=h,T=g(h);return l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),z&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&O)}),T.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:C,imageVariants:F,generateSources:A}),T.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:C,imageVariants:F,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,E(F),l.default.createElement(W,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)((0,o.default)({alt:a,title:t,loading:w},T),{},{imageVariants:F}))}}))}if(m){var M=m,j=g(m),X=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete X.display,l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:X,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},z&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:z,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},N&&O)}),j.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:C,imageVariants:M,generateSources:A}),j.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:C,imageVariants:M,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,E(M),l.default.createElement(W,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)((0,o.default)({alt:a,title:t,loading:w},j),{},{imageVariants:M}))}}))}return null},t}(l.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),z=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});N.propTypes={resolutions:k,sizes:z,fixed:u.default.oneOfType([k,u.default.arrayOf(k)]),fluid:u.default.oneOfType([z,u.default.arrayOf(z)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var O=N;t.default=O},EK0E:function(e,t,a){"use strict";var i,r=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),d=a("Z6vF"),o=a("czNK"),l=a("ZD67"),u=a("0/R4"),c=a("s5qY"),f=a("s5qY"),p=!r.ActiveXObject&&"ActiveXObject"in r,g=d.getWeak,h=Object.isExtensible,m=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(e){if(u(e)){var t=g(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},v=e.exports=a("4LiD")("WeakMap",b,y,l,!0,!0);f&&p&&(o((i=l.getConstructor(b,"WeakMap")).prototype,y),d.NEED=!0,n(["delete","has","get","set"],(function(e){var t=v.prototype,a=t[e];s(t,e,(function(t,r){if(u(t)&&!h(t)){this._f||(this._f=new i);var n=this._f[e](t,r);return"set"==e?this:n}return a.call(this,t,r)}))})))},INYr:function(e,t,a){"use strict";var i=a("XKFU"),r=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var i=a("XKFU"),r=a("eeVq"),n=a("vhPU"),s=/"/g,d=function(e,t,a,i){var r=String(n(e)),d="<"+t;return""!==a&&(d+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),d+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(d),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},YTpj:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEkklEQVQ4y2PgAANOEIAyWFlZGRgYmECAkZkZRAG5QEEuLi5OVMDABgasrCCSnZ0dxGZj40AHnGA1EABnsDIICPALCAgICwsJCgjw8PICKVFhIW4eHi4eXh4eHm5ubk5OLj5eXnExUXEgFhEWERYWAwMgl8HJxsTawtTJ1sLRysjMSM/KVN/SWM/GRC83zq8uL7Y8NyEuPtrcSNvRysTOxtLJ3sbWxsLb28vbx1tLS4vBysTA1NjAzFDXWFddX1vd2swwNTaoo6F0cndjfW15aUlhcXkxkCzMy3ZxstfX0zYxMXR2dnBzd5eTk2ewMzezMjUxApqjquLh65WXl1lRVZaUmhbs5+XvYpfkYx/pZhMS5JebmzVz1tR5C+a6url5eLi7e3jIKygy2Fpamhoa6ujqhIUGrdywurqlLSDAL9rHpTLapz89Yk5ezKzciOZ431gfp+jY8Gs3Lq1cvdLaxsLFxVlWTpbB1sZKW1urOT5gRkvVhj07KmpqowK8i2ODa6J9p6SFzcqMWJgXsqIgcFJ2SJCn474NU/++PDS9I8fcVF9KWpJBVVnBx9fr7sk9e9dNff7s0NSJzdF+7gXhnlXRfl0JAbOywuZmhS7MC1xQGNqUFX5qY9v/h6u+X1+SEukqKSHGICIs1NTaePHGya8/rrx7c7i9uSzG1yXc1TLMyTzEQivfwyzV2bgi2G5amsfUivgdC7p2rujfuHlaZVWWjq4Gg6iYyJQp3SvXLt9/eu+MKR1xAR6Z4b5JblZRDoaJzqZtEY7xNjr+puoV3kYzyhK7qwqK8lNyy3My8uI0tFQZLC3NDh/de/zkoaUbuuuqEiJcbVP8nfqS/OtDXPJ9Haen+E2Kce0Id5ye7Dktxaci2j0zM7K0IjU41E1ZSY4BGAcvX786c+7ki0+XNm2bG+VmG+NhleZiHG6l56mvEWWuWexmVO5pOifFc3qKR09ZTFtn6cJlffmF6erqKgw+vh63bp87ff7EnQent2xZUJgUFmavH2ap6aqvHmunX+RlkumkH2SkWO6pPzHeNSXCIyM7urYqKy87XkNdicHW1nzPwW0Hzpy99PjZuUdP1+46GGhjEueoH2Shk2JvWBNgneSgm+KkXemrP6Mhv7Onr7K2qq2tacLELgcHGwY7W4vOxowFi+fOmNy8aF7X1Jn9ng42AaaqyW7GaY6GhW5GraHWFcFmiQ4qzZ0tF1582X/lzuEbD1dsWGdprMlgZKgT4anV1lJtqy/v42jqF+CppaZoq60YZKmV42lWFWhZFWie5qrprS/t6+veM2NOc9+E6VM6/J11JYS5GQwNdIx1FYuqap28IzwjUoISEnX1DLQVJKw0Fdz0lP2MlEPMFJNs5dwM5GPiY7JKikITc2LSy7S09ZSUVRi09AxVNbRNbb1sPKLMHK3MrM11DUy1NVT0FUSt1aSdNKTCjKWT7JXNDTTdfTxK6ysC4qJUdbWUVNQ1tPUYFFS0lNW1ZeWVlTW11Q30REX5xMTFVDVUHAwUY60U46wV8jw0XExUldVUBYUFPPw8Le1sRcTFVNTUNHV0AJvpeHNkV5epAAAAAElFTkSuQmCC","width":50,"height":50,"src":"/static/a50b95cafe4b5d4427d03e60fa6bfe82/8ba1e/profile-pic.png","srcSet":"/static/a50b95cafe4b5d4427d03e60fa6bfe82/8ba1e/profile-pic.png 1x,\\n/static/a50b95cafe4b5d4427d03e60fa6bfe82/f937a/profile-pic.png 1.5x,\\n/static/a50b95cafe4b5d4427d03e60fa6bfe82/71eb7/profile-pic.png 2x"}}},"site":{"siteMetadata":{"author":{"name":"Dennis Bibanco","summary":"for reflection amidst these times of difficulty."},"social":{"twitter":"dbibanco@msn.com"}}}}}')},ZD67:function(e,t,a){"use strict";var i=a("3Lyj"),r=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),d=a("9gX7"),o=a("SlkY"),l=a("CkkT"),u=a("aagx"),c=a("s5qY"),f=l(5),p=l(6),g=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,i){d(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=i&&o(i,a,e[n],e)}));return i(l.prototype,{delete:function(e){if(!s(e))return!1;var a=r(e);return!0===a?h(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=r(e);return!0===a?h(c(this,t)).has(e):a&&u(a,this._i)}}),l},def:function(e,t,a){var i=r(n(t),!0);return!0===i?h(e).set(t,a):i[e._i]=a,e},ufstore:h}}}]);
//# sourceMappingURL=fab8c9364b01cebfd3503fc18011994750f493ff-05095e9859257783deff.js.map