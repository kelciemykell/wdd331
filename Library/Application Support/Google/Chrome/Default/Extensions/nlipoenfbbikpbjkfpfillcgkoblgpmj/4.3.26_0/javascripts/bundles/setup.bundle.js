(()=>{"use strict";var e,n={8940:(e,n,s)=>{s(47594);var i=s(80923),t=(s(27738),s(71577)),r=(s(52561),s(10256)),a=s(67294),c=s(73935),o=(s(27484),s(9669)),l=s.n(o);s(3991);var d=s(55026),h="https://www.awesomescreenshot.com/api/v1",m=["/premium/stripe/create_plan","/premium/stripe/change_plan","/folder/create","/folder/add_items","/folder/change_name","/trash/throw_into","/image/change_title","/video/update_title","/trash/restore","/trash/delete","/image/upload"],u=l().create({baseURL:h});u.interceptors.request.use((function(e){return e}),(function(e){return d.ZP.error("Network error, Request timeout!"),Promise.reject()})),u.interceptors.response.use((function(e){if(e&&e.data&&1===e.data.code)return Promise.resolve(e.data.data);if(e.data.code,e.data.msg){if(-1!==m.indexOf(e.config.url))return Promise.reject(e.data.msg);if(d.ZP.error(e.data.msg),"/pricing"!==window.location.pathname)return Promise.reject(e.data.msg)}}),(function(e){var n=e.response.status;return d.ZP.error("Network error! Error Code "+n),Promise.reject(e)}));var v=s(85893);function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var s=[],i=!0,t=!1,r=void 0;try{for(var a,c=e[Symbol.iterator]();!(i=(a=c.next()).done)&&(s.push(a.value),!n||s.length!==n);i=!0);}catch(e){t=!0,r=e}finally{try{i||null==c.return||c.return()}finally{if(t)throw r}}return s}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return p(e,n);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return p(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,n){(null==n||n>e.length)&&(n=e.length);for(var s=0,i=new Array(n);s<n;s++)i[s]=e[s];return i}var x=r.Z.Step,j=null,f=chrome.extension.getBackgroundPage(),w=function(){var e=g((0,a.useState)(0),2),n=e[0],s=e[1],c=g((0,a.useState)(0),2),o=c[0],d=c[1],m=g((0,a.useState)(!1),2),u=m[0],p=m[1],w=g((0,a.useState)("start"),2),N=w[0],y=w[1],b=g((0,a.useState)(!1),2),k=b[0],S=b[1],A=g((0,a.useState)(0),2),D=A[0],C=A[1],O=g((0,a.useState)(!1),2),I=O[0],_=O[1],E=g((0,a.useState)(!1),2),P=E[0],F=E[1];(0,a.useEffect)((function(){return V?(s(1),_(!0)):f.googleEvent("show setup sign in","setup"),chrome.runtime.onMessage.addListener(M),function(){chrome.runtime.onMessage.removeListener(M)}}),[]),(0,a.useEffect)((function(){return document.addEventListener("visibilitychange",T),function(){document.removeEventListener("visibilitychange",T)}}),[n]);var T=function(){var e,s;"signin"===U[n].class&&"visible"===document.visibilityState&&(e="https://www.awesomescreenshot.com",s="screenshot_personal_fullname",new Promise((function(n,i){chrome.cookies.getAll({url:e},(function(e){if("string"==typeof s){var i=e.filter((function(e){return e.name===s}));n(i)}else if(Array.isArray(s)){var t=e.filter((function(e){return-1!==s.indexOf(e.name)}));n(t)}}))}))).then((function(e){e.length&&(_(!0),R(),f.googleEvent("finish sign in","setup"))}))},M=function(e,n,s){var i=e.action;"start-recording"===i?y("recording"):"stop-recording"===i?y("start"):"prepare-recording"===i&&(y("preparing"),j=setInterval((function(){var e=chrome.extension.getBackgroundPage();0!==e._cd?(e.isInCountdown&&S(!0),C(e._cd)):(clearInterval(j),S(!1))}),200))},Z=function(){!function(e,n){if(navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&(navigator.enumerateDevices=function(e){navigator.mediaDevices.enumerateDevices().then(e)}),!navigator.enumerateDevices&&window.MediaStreamTrack&&window.MediaStreamTrack.getSources&&(navigator.enumerateDevices=window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack)),!navigator.enumerateDevices&&navigator.mediaDevices.enumerateDevices&&(navigator.enumerateDevices=navigator.mediaDevices.enumerateDevices.bind(navigator)),navigator.enumerateDevices){var s=[],i=[],t=[],r=[],a=[],c=[];navigator.enumerateDevices((function(n){n.forEach((function(e){var n,o={};for(var l in e)o[l]=e[l];s.forEach((function(e){e.deviceId===o.deviceId&&(n=!0)})),n||("audio"===o.kind&&(o.kind="audioinput"),"video"===o.kind&&(o.kind="videoinput"),o.deviceId||(o.deviceId=o.id),o.id||(o.id=o.deviceId),"audioinput"!==o.kind&&"audio"!==o.kind||r.push(o),"audiooutput"===o.kind&&a.push(o),"videoinput"!==o.kind&&"video"!==o.kind||c.push(o),-1!==o.kind.indexOf("audio")&&i.push(o),-1!==o.kind.indexOf("video")&&t.push(o),s.push(o))})),e&&e({allMediaDevices:s,allVideoDevices:t,allAudioDevices:i,videoInputDevices:c,audioInputDevices:r,audioOutputDevices:a})}))}else n(null,"Neither navigator.mediaDevices.enumerateDevices NOR MediaStreamTrack.getSources are available.")}((function(e){var n={},s=e.audioInputDevices.length>0;e.videoInputDevices.length>0&&(n.video=!0),s&&(n.audio=!0),d(1),f.googleEvent("Request permission in setup page","setup"),window.navigator.mediaDevices.getUserMedia(n).then((function(e){e&&(e.getTracks().forEach((function(e){e.stop()})),F(!0),R(),f.googleEvent("Granted permission","setup"))}),(function(){d(2)}))}))},R=function(){s(n+1)},G=function(){l()({method:"GET",url:h+"/user/oauth/login"}).then((function(e){!function(e){window.open(e)}(e.data.data.login_url)}))},L=function(){window.close()},Y=function(){d(2)},U=[],q=[{title:"Sign in",class:"signin",content:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"content",children:[(0,v.jsxs)("div",{className:"content-text",children:[(0,v.jsx)("div",{className:"title low",children:"Sign in"}),(0,v.jsxs)("div",{className:"desc",children:[(0,v.jsx)("p",{children:"You must sign in to save recordings to the cloud. With cloud mode, recordings are:"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:"Uploading while recording"}),(0,v.jsx)("li",{children:"Instantly shareable"}),(0,v.jsx)("li",{children:"Downloadable in WebM or MP4"})]})]})]}),(0,v.jsx)("div",{className:"content-img sign-in"})]}),(0,v.jsxs)("div",{className:"action",children:[(0,v.jsx)("div",{className:"sign-in-google-btn",onClick:G}),(0,v.jsxs)("div",{className:"more-signin",children:[(0,v.jsxs)("div",{children:["Like your own account?"," ",(0,v.jsx)("a",{target:"_blank",href:"https://www.awesomescreenshot.com/user/login?create=true",children:"Create Account"})]}),(0,v.jsxs)("div",{children:["Already have an account?"," ",(0,v.jsx)("a",{target:"_blank",href:"https://www.awesomescreenshot.com/user/login?signin=true",children:"Sign In"})]})]})]})]})},{title:"Grant Access",class:"permission",desc:"To record with audio and video narration, please enable the following permissions.",content:(0,v.jsxs)(v.Fragment,{children:[0===o&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"content",children:[(0,v.jsxs)("div",{className:"content-text",children:[(0,v.jsx)("div",{className:"title low",children:"Grant Access"}),(0,v.jsx)("div",{className:"desc",children:(0,v.jsx)("p",{children:"Allow this extension to access your microphone and camera so that you can record videos with voice and face included."})})]}),(0,v.jsx)("div",{className:"content-img grant-access"})]}),(0,v.jsx)("div",{className:"action",children:(0,v.jsx)(t.Z,{type:"primary",className:"action-btn",onClick:Z,children:"Grant Access"})}),(0,v.jsx)("div",{className:"skip-btn",onClick:Y,children:"Skip"})]}),1===o&&(0,v.jsx)("div",{className:"allow-pic"}),2===o&&(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"no-access",children:[(0,v.jsx)("div",{className:"no-access-img"}),(0,v.jsx)("p",{className:"no-access",children:"Access not granted for now. You can grant access in the extension’s popup menu later."}),(0,v.jsx)(t.Z,{type:"primary",className:"no-access-btn",onClick:R,children:"Next"})]})})]})},{title:"Done",class:"finish",desc:"You’re ready to start use recoding with AwesomeScreenshot!",content:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"content",children:[(0,v.jsxs)("div",{className:"content-text",children:[(0,v.jsx)("div",{className:"title low",children:"Done"}),(0,v.jsx)("div",{className:"desc",children:(0,v.jsx)("p",{children:"You are all set now. Click the extension icon then click the Start Recording button again."})})]}),(0,v.jsx)("div",{className:"content-img finish2"})]}),(0,v.jsx)("div",{className:"action",children:(0,v.jsx)(t.Z,{type:"primary",className:"action-btn",onClick:L,children:"OK, got it"})})]})}],B=[{title:"Sign in",class:"signin",content:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"content",children:[(0,v.jsxs)("div",{className:"content-text",children:[(0,v.jsx)("div",{className:"title",children:"Sign in"}),(0,v.jsxs)("div",{className:"desc",children:[(0,v.jsxs)("p",{children:["Thanks for adding Awesome Screenshot :)",(0,v.jsx)("br",{}),"To get the most out of this service, staying signed-in is strongly recommended!"]}),(0,v.jsx)("p",{children:"Keep screenshots and videos synced across devices. Access and share them anywhere, anytime."})]})]}),(0,v.jsx)("div",{className:"content-img sign-in"})]}),(0,v.jsxs)("div",{className:"action",children:[(0,v.jsx)("div",{className:"sign-in-google-btn",onClick:G}),(0,v.jsxs)("div",{className:"more-signin",children:[(0,v.jsxs)("div",{children:["Prefer other email address?"," ",(0,v.jsx)("a",{href:"https://www.awesomescreenshot.com/user/login?create=true",target:"_blank",children:"Create Account"})]}),(0,v.jsxs)("div",{children:["Already have an account?"," ",(0,v.jsx)("a",{href:"https://www.awesomescreenshot.com/user/login?signin=true",target:"_blank",children:"Sign In"})]})]})]}),(0,v.jsx)("div",{className:"skip-btn",onClick:R,children:"Skip"})]})},{title:"Grant Access",class:"permission",desc:"To record with audio and video narration, please enable the following permissions.",content:(0,v.jsxs)(v.Fragment,{children:[0===o&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"content",children:[(0,v.jsxs)("div",{className:"content-text",children:[(0,v.jsx)("div",{className:"title low",children:"Grant Access"}),(0,v.jsxs)("div",{className:"desc",children:[(0,v.jsx)("p",{children:"Allow this extension to access your microphone and camera so that you can record videos with voice and face included!"}),(0,v.jsx)("p",{children:"Of course you can remove permissions in browser settings anytime :)"})]})]}),(0,v.jsx)("div",{className:"content-img grant-access"})]}),(0,v.jsx)("div",{className:"action",children:(0,v.jsx)(t.Z,{type:"primary",className:"action-btn",onClick:Z,children:"Grant Access"})}),(0,v.jsx)("div",{className:"skip-btn",onClick:Y,children:"Skip"})]}),1===o&&(0,v.jsx)("div",{className:"allow-pic"}),2===o&&(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"no-access",children:[(0,v.jsx)("div",{className:"no-access-img"}),(0,v.jsx)("p",{className:"no-access",children:"Access not granted for now. You can grant access in the extension’s popup menu later."}),(0,v.jsx)(t.Z,{type:"primary",className:"no-access-btn",onClick:R,children:"Next"})]})})]})},{title:"Pin Extension",class:"pin",content:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"content",children:[(0,v.jsxs)("div",{className:"content-text",children:[(0,v.jsx)("div",{className:"title",children:"Pin Extension"}),(0,v.jsxs)("div",{className:"desc",children:[(0,v.jsx)("p",{children:"In order to access the extension easily, click the jigsaw icon on the right side of the address bar, find Awesome Screenshot then click Pin."}),(0,v.jsx)("p",{children:"If the extension icon is on your toolbar, ignore this step and click Next."})]})]}),(0,v.jsx)("div",{className:"content-img pin"})]}),(0,v.jsx)("div",{className:"action",children:(0,v.jsx)(t.Z,{type:"primary",className:"action-btn",onClick:R,children:"Next"})})]})},{title:"Setup Finished",class:"finish",desc:"You’re ready to start use recoding with AwesomeScreenshot!",content:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"content",children:[(0,v.jsxs)("div",{className:"content-text",children:[(0,v.jsx)("div",{className:"title",children:"Setup Finished"}),(0,v.jsx)("div",{className:"desc",children:I?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{children:"You have completed this guide."}),(0,v.jsxs)("p",{children:["Click the extension icon on the right side ",(0,v.jsx)("br",{})," of the address bar to start using this tool."]}),(0,v.jsxs)("p",{children:["Or click the button below to get started ",(0,v.jsx)("br",{})," right now!"]})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("p",{children:["You can click the extension icon on the ",(0,v.jsx)("br",{}),"right side of the address bar to start",(0,v.jsx)("br",{})," recording or capturing now."]}),(0,v.jsxs)("p",{children:["Don't hesitate to contact us if you have",(0,v.jsx)("br",{})," any questions. Thank you for your time!"]})]})})]}),(0,v.jsx)("div",{className:"content-img finish"})]}),(0,v.jsx)("div",{className:"action",children:I?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.Z,{type:"primary",className:"action-btn",onClick:function(){p(!0),f.googleEvent("Try recording","setup")},disabled:"start"!==N,children:"start"===N?"Try Recording Now":"preparing"===N?"Starting recording...":"recording"===N?"Recording...":void 0}),"recording"===N&&(0,v.jsxs)("div",{className:"stop-tip",children:["Click this icon ",(0,v.jsx)("div",{className:"icon"})," on the right of the address bar then click the Stop button to finish recording."]})]}):(0,v.jsx)(t.Z,{type:"primary",className:"action-btn",onClick:L,children:"OK, got it"})})]})}],K=new URLSearchParams(window.location.search),W=K.get("from"),z=K.get("isGranted"),V=K.get("isSignIn"),$=/Edg/.test(window.navigator.userAgent);U="install"===W?B:q,z&&U.splice(1,1),$&&(z?U.splice(1,1):U.splice(2,1));var H=U[n];return(0,v.jsxs)(v.Fragment,{children:[k&&(0,v.jsx)("div",{className:"countdown-wrapper",children:(0,v.jsxs)("div",{className:"center",children:[(0,v.jsx)("div",{className:"countdown-tip",children:"Recording will start in"}),(0,v.jsx)("div",{className:"num",children:D})]})}),(0,v.jsx)("div",{className:"top-bar",children:(0,v.jsx)("div",{className:"logo"})}),(0,v.jsxs)("div",{className:"inner-container",children:[(0,v.jsx)("img",{src:"./images/img_camera.svg",alt:"",className:"camera-icon"}),(0,v.jsx)("img",{src:"./images/img_camera.svg",alt:"",className:"camera-icon-2"}),(0,v.jsxs)("div",{className:"main",children:[(0,v.jsx)("div",{className:"step-container",children:(0,v.jsx)(r.Z,{direction:"vertical",current:n,size:"small",children:U.map((function(e,n){return(0,v.jsx)(x,{title:"Step ".concat(n+1),description:e.title},e.class)}))})}),(0,v.jsxs)("div",{className:"step-tab",children:[(0,v.jsxs)("div",{className:"step-badge",children:[(0,v.jsx)("span",{className:"current-step",children:n+1}),(0,v.jsx)("span",{className:"sep"}),(0,v.jsx)("span",{className:"all-step",children:U.length})]}),H.content]})]})]}),(0,v.jsx)(i.Z,{visible:u,onCancel:function(){p(!1)},destroyOnClose:!0,className:"tip-modal",footer:null,closable:!1,maskClosable:!1,children:(0,v.jsxs)("div",{className:"content",children:[(0,v.jsx)("p",{children:"A confirmation window will show up. Please click to select your screen then click the Share button to confirm sharing your screen."}),(0,v.jsx)("div",{className:"tip-img"}),(0,v.jsx)(t.Z,{type:"primary",onClick:function(){p(!1);var e={isRecordMic:P,recordType:"desktop",countdown:3,saveLocation:"cloud",resolution:localStorage.max_resolution,isRecordCam:!1,removeAppWin:!0};chrome.runtime.sendMessage({action:"record",options:e})},children:"Got it"})]})})]})};c.render((0,v.jsx)(w,{}),document.getElementById("setup-page"))}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return n[e].call(r.exports,r,r.exports,i),r.exports}i.m=n,e=[],i.O=(n,s,t,r)=>{if(!s){var a=1/0;for(l=0;l<e.length;l++){for(var[s,t,r]=e[l],c=!0,o=0;o<s.length;o++)(!1&r||a>=r)&&Object.keys(i.O).every((e=>i.O[e](s[o])))?s.splice(o--,1):(c=!1,r<a&&(a=r));c&&(e.splice(l--,1),n=t())}return n}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[s,t,r]},i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var s in n)i.o(n,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})},i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={350:0};i.O.j=n=>0===e[n];var n=(n,s)=>{var t,r,[a,c,o]=s,l=0;for(t in c)i.o(c,t)&&(i.m[t]=c[t]);for(o&&o(i),n&&n(s);l<a.length;l++)r=a[l],i.o(e,r)&&e[r]&&e[r][0](),e[a[l]]=0;i.O()},s=self.webpackChunkAwesomeScreenshot=self.webpackChunkAwesomeScreenshot||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))})(),i.O(void 0,[394,377,238,347,514,224,450],(()=>i(11008)));var t=i.O(void 0,[394,377,238,347,514,224,450],(()=>i(8940)));t=i.O(t)})();