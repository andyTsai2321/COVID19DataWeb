!function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=10)}([function(n,t,e){"use strict";var o=e(1),r=Object.prototype.toString;function i(n){return"[object Array]"===r.call(n)}function c(n){return void 0===n}function a(n){return null!==n&&"object"==typeof n}function u(n){return"[object Function]"===r.call(n)}function s(n,t){if(null!=n)if("object"!=typeof n&&(n=[n]),i(n))for(var e=0,o=n.length;e<o;e++)t.call(null,n[e],e,n);else for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.call(null,n[r],r,n)}n.exports={isArray:i,isArrayBuffer:function(n){return"[object ArrayBuffer]"===r.call(n)},isBuffer:function(n){return null!==n&&!c(n)&&null!==n.constructor&&!c(n.constructor)&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n)},isFormData:function(n){return"undefined"!=typeof FormData&&n instanceof FormData},isArrayBufferView:function(n){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(n):n&&n.buffer&&n.buffer instanceof ArrayBuffer},isString:function(n){return"string"==typeof n},isNumber:function(n){return"number"==typeof n},isObject:a,isUndefined:c,isDate:function(n){return"[object Date]"===r.call(n)},isFile:function(n){return"[object File]"===r.call(n)},isBlob:function(n){return"[object Blob]"===r.call(n)},isFunction:u,isStream:function(n){return a(n)&&u(n.pipe)},isURLSearchParams:function(n){return"undefined"!=typeof URLSearchParams&&n instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:s,merge:function n(){var t={};function e(e,o){"object"==typeof t[o]&&"object"==typeof e?t[o]=n(t[o],e):t[o]=e}for(var o=0,r=arguments.length;o<r;o++)s(arguments[o],e);return t},deepMerge:function n(){var t={};function e(e,o){"object"==typeof t[o]&&"object"==typeof e?t[o]=n(t[o],e):t[o]="object"==typeof e?n({},e):e}for(var o=0,r=arguments.length;o<r;o++)s(arguments[o],e);return t},extend:function(n,t,e){return s(t,(function(t,r){n[r]=e&&"function"==typeof t?o(t,e):t})),n},trim:function(n){return n.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(n,t,e){"use strict";n.exports=function(n,t){return function(){for(var e=new Array(arguments.length),o=0;o<e.length;o++)e[o]=arguments[o];return n.apply(t,e)}}},function(n,t,e){"use strict";var o=e(0);function r(n){return encodeURIComponent(n).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}n.exports=function(n,t,e){if(!t)return n;var i;if(e)i=e(t);else if(o.isURLSearchParams(t))i=t.toString();else{var c=[];o.forEach(t,(function(n,t){null!=n&&(o.isArray(n)?t+="[]":n=[n],o.forEach(n,(function(n){o.isDate(n)?n=n.toISOString():o.isObject(n)&&(n=JSON.stringify(n)),c.push(r(t)+"="+r(n))})))})),i=c.join("&")}if(i){var a=n.indexOf("#");-1!==a&&(n=n.slice(0,a)),n+=(-1===n.indexOf("?")?"?":"&")+i}return n}},function(n,t,e){"use strict";n.exports=function(n){return!(!n||!n.__CANCEL__)}},function(n,t,e){"use strict";(function(t){var o=e(0),r=e(19),i={"Content-Type":"application/x-www-form-urlencoded"};function c(n,t){!o.isUndefined(n)&&o.isUndefined(n["Content-Type"])&&(n["Content-Type"]=t)}var a,u={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(a=e(5)),a),transformRequest:[function(n,t){return r(t,"Accept"),r(t,"Content-Type"),o.isFormData(n)||o.isArrayBuffer(n)||o.isBuffer(n)||o.isStream(n)||o.isFile(n)||o.isBlob(n)?n:o.isArrayBufferView(n)?n.buffer:o.isURLSearchParams(n)?(c(t,"application/x-www-form-urlencoded;charset=utf-8"),n.toString()):o.isObject(n)?(c(t,"application/json;charset=utf-8"),JSON.stringify(n)):n}],transformResponse:[function(n){if("string"==typeof n)try{n=JSON.parse(n)}catch(n){}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(n){return n>=200&&n<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],(function(n){u.headers[n]={}})),o.forEach(["post","put","patch"],(function(n){u.headers[n]=o.merge(i)})),n.exports=u}).call(this,e(18))},function(n,t,e){"use strict";var o=e(0),r=e(20),i=e(2),c=e(22),a=e(25),u=e(26),s=e(6);n.exports=function(n){return new Promise((function(t,f){var l=n.data,y=n.headers;o.isFormData(l)&&delete y["Content-Type"];var d=new XMLHttpRequest;if(n.auth){var p=n.auth.username||"",h=n.auth.password||"";y.Authorization="Basic "+btoa(p+":"+h)}var m=c(n.baseURL,n.url);if(d.open(n.method.toUpperCase(),i(m,n.params,n.paramsSerializer),!0),d.timeout=n.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,o={data:n.responseType&&"text"!==n.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:e,config:n,request:d};r(t,f,o),d=null}},d.onabort=function(){d&&(f(s("Request aborted",n,"ECONNABORTED",d)),d=null)},d.onerror=function(){f(s("Network Error",n,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+n.timeout+"ms exceeded";n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),f(s(t,n,"ECONNABORTED",d)),d=null},o.isStandardBrowserEnv()){var A=e(27),g=(n.withCredentials||u(m))&&n.xsrfCookieName?A.read(n.xsrfCookieName):void 0;g&&(y[n.xsrfHeaderName]=g)}if("setRequestHeader"in d&&o.forEach(y,(function(n,t){void 0===l&&"content-type"===t.toLowerCase()?delete y[t]:d.setRequestHeader(t,n)})),o.isUndefined(n.withCredentials)||(d.withCredentials=!!n.withCredentials),n.responseType)try{d.responseType=n.responseType}catch(t){if("json"!==n.responseType)throw t}"function"==typeof n.onDownloadProgress&&d.addEventListener("progress",n.onDownloadProgress),"function"==typeof n.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",n.onUploadProgress),n.cancelToken&&n.cancelToken.promise.then((function(n){d&&(d.abort(),f(n),d=null)})),void 0===l&&(l=null),d.send(l)}))}},function(n,t,e){"use strict";var o=e(21);n.exports=function(n,t,e,r,i){var c=new Error(n);return o(c,t,e,r,i)}},function(n,t,e){"use strict";var o=e(0);n.exports=function(n,t){t=t||{};var e={},r=["url","method","params","data"],i=["headers","auth","proxy"],c=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];o.forEach(r,(function(n){void 0!==t[n]&&(e[n]=t[n])})),o.forEach(i,(function(r){o.isObject(t[r])?e[r]=o.deepMerge(n[r],t[r]):void 0!==t[r]?e[r]=t[r]:o.isObject(n[r])?e[r]=o.deepMerge(n[r]):void 0!==n[r]&&(e[r]=n[r])})),o.forEach(c,(function(o){void 0!==t[o]?e[o]=t[o]:void 0!==n[o]&&(e[o]=n[o])}));var a=r.concat(i).concat(c),u=Object.keys(t).filter((function(n){return-1===a.indexOf(n)}));return o.forEach(u,(function(o){void 0!==t[o]?e[o]=t[o]:void 0!==n[o]&&(e[o]=n[o])})),e}},function(n,t,e){"use strict";function o(n){this.message=n}o.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},o.prototype.__CANCEL__=!0,n.exports=o},function(n){n.exports=JSON.parse('[{"country":"Afghanistan","continent":"Asia"},{"country":"Albania","continent":"Europe"},{"country":"Algeria","continent":"Africa"},{"country":"American Samoa","continent":"Oceania"},{"country":"Andorra","continent":"Europe"},{"country":"Angola","continent":"Africa"},{"country":"Anguilla","continent":"North America"},{"country":"Antarctica","continent":"Antarctica"},{"country":"Antigua and Barbuda","continent":"North America"},{"country":"Argentina","continent":"South America"},{"country":"Armenia","continent":"Asia"},{"country":"Aruba","continent":"North America"},{"country":"Australia","continent":"Oceania"},{"country":"Austria","continent":"Europe"},{"country":"Azerbaijan","continent":"Asia"},{"country":"Bahamas","continent":"North America"},{"country":"Bahrain","continent":"Asia"},{"country":"Bangladesh","continent":"Asia"},{"country":"Barbados","continent":"North America"},{"country":"Belarus","continent":"Europe"},{"country":"Belgium","continent":"Europe"},{"country":"Belize","continent":"North America"},{"country":"Benin","continent":"Africa"},{"country":"Bermuda","continent":"North America"},{"country":"Bhutan","continent":"Asia"},{"country":"Bolivia","continent":"South America"},{"country":"Bosnia and Herzegovina","continent":"Europe"},{"country":"Botswana","continent":"Africa"},{"country":"Bouvet Island","continent":"Antarctica"},{"country":"Brazil","continent":"South America"},{"country":"British Indian Ocean Territory","continent":"Africa"},{"country":"Brunei","continent":"Asia"},{"country":"Bulgaria","continent":"Europe"},{"country":"Burkina Faso","continent":"Africa"},{"country":"Burundi","continent":"Africa"},{"country":"Cambodia","continent":"Asia"},{"country":"Cameroon","continent":"Africa"},{"country":"Canada","continent":"North America"},{"country":"Cape Verde","continent":"Africa"},{"country":"Cayman Islands","continent":"North America"},{"country":"Central African Republic","continent":"Africa"},{"country":"Chad","continent":"Africa"},{"country":"Chile","continent":"South America"},{"country":"China","continent":"Asia"},{"country":"Christmas Island","continent":"Oceania"},{"country":"Cocos (Keeling) Islands","continent":"Oceania"},{"country":"Colombia","continent":"South America"},{"country":"Comoros","continent":"Africa"},{"country":"Congo","continent":"Africa"},{"country":"Cook Islands","continent":"Oceania"},{"country":"Costa Rica","continent":"North America"},{"country":"Croatia","continent":"Europe"},{"country":"Cuba","continent":"North America"},{"country":"Cyprus","continent":"Asia"},{"country":"Czech Republic","continent":"Europe"},{"country":"Denmark","continent":"Europe"},{"country":"Djibouti","continent":"Africa"},{"country":"Dominica","continent":"North America"},{"country":"Dominican Republic","continent":"North America"},{"country":"East Timor","continent":"Asia"},{"country":"Ecuador","continent":"South America"},{"country":"Egypt","continent":"Africa"},{"country":"El Salvador","continent":"North America"},{"country":"England","continent":"Europe"},{"country":"Equatorial Guinea","continent":"Africa"},{"country":"Eritrea","continent":"Africa"},{"country":"Estonia","continent":"Europe"},{"country":"Ethiopia","continent":"Africa"},{"country":"Falkland Islands","continent":"South America"},{"country":"Faroe Islands","continent":"Europe"},{"country":"Fiji Islands","continent":"Oceania"},{"country":"Finland","continent":"Europe"},{"country":"France","continent":"Europe"},{"country":"French Guiana","continent":"South America"},{"country":"French Polynesia","continent":"Oceania"},{"country":"French Southern territories","continent":"Antarctica"},{"country":"Gabon","continent":"Africa"},{"country":"Gambia","continent":"Africa"},{"country":"Georgia","continent":"Asia"},{"country":"Germany","continent":"Europe"},{"country":"Ghana","continent":"Africa"},{"country":"Gibraltar","continent":"Europe"},{"country":"Greece","continent":"Europe"},{"country":"Greenland","continent":"North America"},{"country":"Grenada","continent":"North America"},{"country":"Guadeloupe","continent":"North America"},{"country":"Guam","continent":"Oceania"},{"country":"Guatemala","continent":"North America"},{"country":"Guinea","continent":"Africa"},{"country":"Guinea-Bissau","continent":"Africa"},{"country":"Guyana","continent":"South America"},{"country":"Haiti","continent":"North America"},{"country":"Heard Island and McDonald Islands","continent":"Antarctica"},{"country":"Holy See (Vatican City State)","continent":"Europe"},{"country":"Honduras","continent":"North America"},{"country":"Hong Kong","continent":"Asia"},{"country":"Hungary","continent":"Europe"},{"country":"Iceland","continent":"Europe"},{"country":"India","continent":"Asia"},{"country":"Indonesia","continent":"Asia"},{"country":"Iran","continent":"Asia"},{"country":"Iraq","continent":"Asia"},{"country":"Ireland","continent":"Europe"},{"country":"Israel","continent":"Asia"},{"country":"Italy","continent":"Europe"},{"country":"Ivory Coast","continent":"Africa"},{"country":"Jamaica","continent":"North America"},{"country":"Japan","continent":"Asia"},{"country":"Jordan","continent":"Asia"},{"country":"Kazakhstan","continent":"Asia"},{"country":"Kenya","continent":"Africa"},{"country":"Kiribati","continent":"Oceania"},{"country":"Kuwait","continent":"Asia"},{"country":"Kyrgyzstan","continent":"Asia"},{"country":"Laos","continent":"Asia"},{"country":"Latvia","continent":"Europe"},{"country":"Lebanon","continent":"Asia"},{"country":"Lesotho","continent":"Africa"},{"country":"Liberia","continent":"Africa"},{"country":"Libyan Arab Jamahiriya","continent":"Africa"},{"country":"Liechtenstein","continent":"Europe"},{"country":"Lithuania","continent":"Europe"},{"country":"Luxembourg","continent":"Europe"},{"country":"Macao","continent":"Asia"},{"country":"North Macedonia","continent":"Europe"},{"country":"Madagascar","continent":"Africa"},{"country":"Malawi","continent":"Africa"},{"country":"Malaysia","continent":"Asia"},{"country":"Maldives","continent":"Asia"},{"country":"Mali","continent":"Africa"},{"country":"Malta","continent":"Europe"},{"country":"Marshall Islands","continent":"Oceania"},{"country":"Martinique","continent":"North America"},{"country":"Mauritania","continent":"Africa"},{"country":"Mauritius","continent":"Africa"},{"country":"Mayotte","continent":"Africa"},{"country":"Mexico","continent":"North America"},{"country":"Micronesia, Federated States of","continent":"Oceania"},{"country":"Moldova","continent":"Europe"},{"country":"Monaco","continent":"Europe"},{"country":"Mongolia","continent":"Asia"},{"country":"Montserrat","continent":"North America"},{"country":"Morocco","continent":"Africa"},{"country":"Mozambique","continent":"Africa"},{"country":"Myanmar","continent":"Asia"},{"country":"Namibia","continent":"Africa"},{"country":"Nauru","continent":"Oceania"},{"country":"Nepal","continent":"Asia"},{"country":"Netherlands","continent":"Europe"},{"country":"Netherlands Antilles","continent":"North America"},{"country":"New Caledonia","continent":"Oceania"},{"country":"New Zealand","continent":"Oceania"},{"country":"Nicaragua","continent":"North America"},{"country":"Niger","continent":"Africa"},{"country":"Nigeria","continent":"Africa"},{"country":"Niue","continent":"Oceania"},{"country":"Norfolk Island","continent":"Oceania"},{"country":"North Korea","continent":"Asia"},{"country":"Northern Ireland","continent":"Europe"},{"country":"Northern Mariana Islands","continent":"Oceania"},{"country":"Norway","continent":"Europe"},{"country":"Oman","continent":"Asia"},{"country":"Pakistan","continent":"Asia"},{"country":"Palau","continent":"Oceania"},{"country":"Palestine","continent":"Asia"},{"country":"Panama","continent":"North America"},{"country":"Papua New Guinea","continent":"Oceania"},{"country":"Paraguay","continent":"South America"},{"country":"Peru","continent":"South America"},{"country":"Philippines","continent":"Asia"},{"country":"Pitcairn","continent":"Oceania"},{"country":"Poland","continent":"Europe"},{"country":"Portugal","continent":"Europe"},{"country":"Puerto Rico","continent":"North America"},{"country":"Qatar","continent":"Asia"},{"country":"Reunion","continent":"Africa"},{"country":"Romania","continent":"Europe"},{"country":"Russian Federation","continent":"Europe"},{"country":"Rwanda","continent":"Africa"},{"country":"Saint Helena","continent":"Africa"},{"country":"Saint Kitts and Nevis","continent":"North America"},{"country":"Saint Lucia","continent":"North America"},{"country":"Saint Pierre and Miquelon","continent":"North America"},{"country":"Saint Vincent and the Grenadines","continent":"North America"},{"country":"Samoa","continent":"Oceania"},{"country":"San Marino","continent":"Europe"},{"country":"Sao Tome and Principe","continent":"Africa"},{"country":"Saudi Arabia","continent":"Asia"},{"country":"Scotland","continent":"Europe"},{"country":"Senegal","continent":"Africa"},{"country":"Seychelles","continent":"Africa"},{"country":"Sierra Leone","continent":"Africa"},{"country":"Singapore","continent":"Asia"},{"country":"Slovakia","continent":"Europe"},{"country":"Slovenia","continent":"Europe"},{"country":"Solomon Islands","continent":"Oceania"},{"country":"Somalia","continent":"Africa"},{"country":"South Africa","continent":"Africa"},{"country":"South Georgia and the South Sandwich Islands","continent":"Antarctica"},{"country":"S. Korea","continent":"Asia"},{"country":"South Sudan","continent":"Africa"},{"country":"Spain","continent":"Europe"},{"country":"Sri Lanka","continent":"Asia"},{"country":"Sudan","continent":"Africa"},{"country":"Suriname","continent":"South America"},{"country":"Svalbard and Jan Mayen","continent":"Europe"},{"country":"Swaziland","continent":"Africa"},{"country":"Sweden","continent":"Europe"},{"country":"Switzerland","continent":"Europe"},{"country":"Syria","continent":"Asia"},{"country":"Tajikistan","continent":"Asia"},{"country":"Tanzania","continent":"Africa"},{"country":"Thailand","continent":"Asia"},{"country":"The Democratic Republic of Congo","continent":"Africa"},{"country":"Togo","continent":"Africa"},{"country":"Tokelau","continent":"Oceania"},{"country":"Tonga","continent":"Oceania"},{"country":"Trinidad and Tobago","continent":"North America"},{"country":"Tunisia","continent":"Africa"},{"country":"Turkey","continent":"Asia"},{"country":"Turkmenistan","continent":"Asia"},{"country":"Turks and Caicos Islands","continent":"North America"},{"country":"Tuvalu","continent":"Oceania"},{"country":"Uganda","continent":"Africa"},{"country":"UK","continent":"Europe"},{"country":"United Arab Emirates","continent":"Asia"},{"country":"United Kingdom","continent":"Europe"},{"country":"USA","continent":"North America"},{"country":"United States Minor Outlying Islands","continent":"Oceania"},{"country":"Uruguay","continent":"South America"},{"country":"Uzbekistan","continent":"Asia"},{"country":"Vanuatu","continent":"Oceania"},{"country":"Venezuela","continent":"South America"},{"country":"Vietnam","continent":"Asia"},{"country":"Virgin Islands, British","continent":"North America"},{"country":"Virgin Islands, U.S.","continent":"North America"},{"country":"Wales","continent":"Europe"},{"country":"Wallis and Futuna","continent":"Oceania"},{"country":"Western Sahara","continent":"Africa"},{"country":"Yemen","continent":"Asia"},{"country":"Yugoslavia","continent":"Europe"},{"country":"Zambia","continent":"Africa"},{"country":"Zimbabwe","continent":"Africa"}]')},function(n,t,e){e(11),n.exports=e(30)},function(n,t,e){"use strict";e.r(t);var o=e(9),r=e(12),i=document.getElementById("allCasesId"),c=document.querySelectorAll("th"),a={Asia:document.getElementById("asia"),"North America":document.getElementById("nAmerica"),Europe:document.getElementById("europe"),Oceania:document.getElementById("oceania"),Africa:document.getElementById("africa"),"South America":document.getElementById("sAmerica")},u={Asia:[],"North America":[],Europe:[],Oceania:[],Africa:[],"South America":[]};function s(n){if(n){var t=a[n];t.innerHTML="",f(u[n],t)}else for(var e in u){var o=a[e];f(u[e],o)}}function f(n,t){n.forEach((function(n){t&&(t.innerHTML+='\n                <tr>\n                    <th scope="col">'.concat(n.country,'</th>\n                    <th scope="col">').concat(n.cases,'</th>\n                    <th scope="col">').concat(n.deaths,'</th>\n                    <th scope="col">').concat(n.todayCases,'</th>\n                    <th scope="col">').concat(n.recovered,"</th>\n                </tr>\n                "))}))}window.addEventListener("DOMContentLoaded",(function(){var n;n="allCasesLoading",document.getElementById(n).style.visibility="visible",r.get("https://corona.lmao.ninja/all").then((function(n){var t;t=n.data,i.innerHTML='    \n   <div class="row">\n   <div class="total-wrap col-sm-4">\n   <h2>Total Confirmed Cases</h2>\n   <h2>'.concat(t.cases,'</h2>\n</div>\n<div class="total-wrap col-sm-4">\n   <h2>Total Deceased</h2>\n   <h2>').concat(t.deaths,'</h2>\n</div>\n<div class="total-wrap col-sm-4">\n   <h2>Total Recovered</h2>\n   <h2>').concat(t.recovered,"</h2>\n</div>\n   </div>\n")})).catch((function(n){console.log(n)})).then((function(){!function(n){document.getElementById(n).style.visibility="hidden"}("allCasesLoading")})),function(n){document.querySelectorAll("."+n).forEach((function(n){return n.style.visibility="visible"}))}("sectionLoading"),r.get("https://corona.lmao.ninja/countries").then((function(n){n.data.forEach((function(n){o.forEach((function(t){n.country===t.country&&function(n,t){u[t]&&u[t].push(n)}(n,t.continent)}))})),s()})).catch((function(n){console.log(n)})).then((function(){var n;n="sectionLoading",document.querySelectorAll("."+n).forEach((function(n){return n.style.visibility="hidden"}))})),Array.from(c).forEach((function(n){n.addEventListener("click",(function(){var n,t,e,o=this.parentNode.getAttribute("data-continent"),r=this.getAttribute("data-value");t=r,u[n=o].sort((e=t,l=!l,function(n,t){if(!n.hasOwnProperty(e)||!t.hasOwnProperty(e))return 0;var o="string"==typeof n[e]?n[e].toUpperCase():n[e],r="string"==typeof t[e]?t[e].toUpperCase():t[e],i=0;return o>r?i=1:o<r&&(i=-1),l?-1*i:i})),s(n)}))}))}));var l=!0},function(n,t,e){n.exports=e(13)},function(n,t,e){"use strict";var o=e(0),r=e(1),i=e(14),c=e(7);function a(n){var t=new i(n),e=r(i.prototype.request,t);return o.extend(e,i.prototype,t),o.extend(e,t),e}var u=a(e(4));u.Axios=i,u.create=function(n){return a(c(u.defaults,n))},u.Cancel=e(8),u.CancelToken=e(28),u.isCancel=e(3),u.all=function(n){return Promise.all(n)},u.spread=e(29),n.exports=u,n.exports.default=u},function(n,t,e){"use strict";var o=e(0),r=e(2),i=e(15),c=e(16),a=e(7);function u(n){this.defaults=n,this.interceptors={request:new i,response:new i}}u.prototype.request=function(n){"string"==typeof n?(n=arguments[1]||{}).url=arguments[0]:n=n||{},(n=a(this.defaults,n)).method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var t=[c,void 0],e=Promise.resolve(n);for(this.interceptors.request.forEach((function(n){t.unshift(n.fulfilled,n.rejected)})),this.interceptors.response.forEach((function(n){t.push(n.fulfilled,n.rejected)}));t.length;)e=e.then(t.shift(),t.shift());return e},u.prototype.getUri=function(n){return n=a(this.defaults,n),r(n.url,n.params,n.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],(function(n){u.prototype[n]=function(t,e){return this.request(o.merge(e||{},{method:n,url:t}))}})),o.forEach(["post","put","patch"],(function(n){u.prototype[n]=function(t,e,r){return this.request(o.merge(r||{},{method:n,url:t,data:e}))}})),n.exports=u},function(n,t,e){"use strict";var o=e(0);function r(){this.handlers=[]}r.prototype.use=function(n,t){return this.handlers.push({fulfilled:n,rejected:t}),this.handlers.length-1},r.prototype.eject=function(n){this.handlers[n]&&(this.handlers[n]=null)},r.prototype.forEach=function(n){o.forEach(this.handlers,(function(t){null!==t&&n(t)}))},n.exports=r},function(n,t,e){"use strict";var o=e(0),r=e(17),i=e(3),c=e(4);function a(n){n.cancelToken&&n.cancelToken.throwIfRequested()}n.exports=function(n){return a(n),n.headers=n.headers||{},n.data=r(n.data,n.headers,n.transformRequest),n.headers=o.merge(n.headers.common||{},n.headers[n.method]||{},n.headers),o.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete n.headers[t]})),(n.adapter||c.adapter)(n).then((function(t){return a(n),t.data=r(t.data,t.headers,n.transformResponse),t}),(function(t){return i(t)||(a(n),t&&t.response&&(t.response.data=r(t.response.data,t.response.headers,n.transformResponse))),Promise.reject(t)}))}},function(n,t,e){"use strict";var o=e(0);n.exports=function(n,t,e){return o.forEach(e,(function(e){n=e(n,t)})),n}},function(n,t){var e,o,r=n.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(n){if(e===setTimeout)return setTimeout(n,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(n,0);try{return e(n,0)}catch(t){try{return e.call(null,n,0)}catch(t){return e.call(this,n,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(n){e=i}try{o="function"==typeof clearTimeout?clearTimeout:c}catch(n){o=c}}();var u,s=[],f=!1,l=-1;function y(){f&&u&&(f=!1,u.length?s=u.concat(s):l=-1,s.length&&d())}function d(){if(!f){var n=a(y);f=!0;for(var t=s.length;t;){for(u=s,s=[];++l<t;)u&&u[l].run();l=-1,t=s.length}u=null,f=!1,function(n){if(o===clearTimeout)return clearTimeout(n);if((o===c||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(n);try{o(n)}catch(t){try{return o.call(null,n)}catch(t){return o.call(this,n)}}}(n)}}function p(n,t){this.fun=n,this.array=t}function h(){}r.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];s.push(new p(n,t)),1!==s.length||f||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(n){return[]},r.binding=function(n){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(n){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(n,t,e){"use strict";var o=e(0);n.exports=function(n,t){o.forEach(n,(function(e,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(n[t]=e,delete n[o])}))}},function(n,t,e){"use strict";var o=e(6);n.exports=function(n,t,e){var r=e.config.validateStatus;!r||r(e.status)?n(e):t(o("Request failed with status code "+e.status,e.config,null,e.request,e))}},function(n,t,e){"use strict";n.exports=function(n,t,e,o,r){return n.config=t,e&&(n.code=e),n.request=o,n.response=r,n.isAxiosError=!0,n.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},n}},function(n,t,e){"use strict";var o=e(23),r=e(24);n.exports=function(n,t){return n&&!o(t)?r(n,t):t}},function(n,t,e){"use strict";n.exports=function(n){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(n)}},function(n,t,e){"use strict";n.exports=function(n,t){return t?n.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):n}},function(n,t,e){"use strict";var o=e(0),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];n.exports=function(n){var t,e,i,c={};return n?(o.forEach(n.split("\n"),(function(n){if(i=n.indexOf(":"),t=o.trim(n.substr(0,i)).toLowerCase(),e=o.trim(n.substr(i+1)),t){if(c[t]&&r.indexOf(t)>=0)return;c[t]="set-cookie"===t?(c[t]?c[t]:[]).concat([e]):c[t]?c[t]+", "+e:e}})),c):c}},function(n,t,e){"use strict";var o=e(0);n.exports=o.isStandardBrowserEnv()?function(){var n,t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");function r(n){var o=n;return t&&(e.setAttribute("href",o),o=e.href),e.setAttribute("href",o),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=r(window.location.href),function(t){var e=o.isString(t)?r(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0}},function(n,t,e){"use strict";var o=e(0);n.exports=o.isStandardBrowserEnv()?{write:function(n,t,e,r,i,c){var a=[];a.push(n+"="+encodeURIComponent(t)),o.isNumber(e)&&a.push("expires="+new Date(e).toGMTString()),o.isString(r)&&a.push("path="+r),o.isString(i)&&a.push("domain="+i),!0===c&&a.push("secure"),document.cookie=a.join("; ")},read:function(n){var t=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(n,t,e){"use strict";var o=e(8);function r(n){if("function"!=typeof n)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(n){t=n}));var e=this;n((function(n){e.reason||(e.reason=new o(n),t(e.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var n;return{token:new r((function(t){n=t})),cancel:n}},n.exports=r},function(n,t,e){"use strict";n.exports=function(n){return function(t){return n.apply(null,t)}}},function(n,t,e){}]);