function t(e){return e&&e.__esModule?e.default:e}var n,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof r&&r&&r.Object===Object&&r,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,m=function(){return s.Date.now()};function g(e,t,n){var r,i,o,u,a,f,c=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function T(e){return c=e,a=setTimeout(j,t),l?g(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function j(){var e=m();if(h(e))return w(e);a=setTimeout(j,function(e){var n=t-(e-f);return s?v(n,o-(e-c)):n}(e))}function w(e){return a=void 0,d&&r?g(e):(r=i=void 0,u)}function x(){var e=m(),n=h(e);if(r=arguments,i=this,f=e,n){if(void 0===a)return T(f);if(s)return a=setTimeout(j,t),g(f)}return void 0===a&&(a=setTimeout(j,t)),u}return t=b(t)||0,y(n)&&(l=!!n.leading,o=(s="maxWait"in n)?p(b(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),x.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=i=a=void 0},x.flush=function(){return void 0===a?u:w(m())},x}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=u.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}n=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const T=document.querySelector("form");T.querySelector("input"),T.querySelector("textarea");T.addEventListener("input",t(n)((e=>{const t={email:T.elements.email.value,message:T.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),T.addEventListener("submit",(t=>{t.preventDefault();const n=new FormData(e.currentTarget);n.forEach(((e,t)=>{n[t]=e})),console.log(n),t.currentTarget.reset(),localStorage.clear()}));
//# sourceMappingURL=03-feedback.67c38525.js.map