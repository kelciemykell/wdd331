const apiUrl="https://www.awesomescreenshot.com";function openLoacalTab(e){dataURL=[],centerOffX=0,centerOffY=0,menuType="upload";var t=new FileReader;t.onload=function(e){var t=document.createElement("IMG");t.src=e.target.result,dataURL.push(t),newTab()},t.readAsDataURL(e)}function handleBase64DataUrl(e,t,a){if(!(currentTemId>0))if(e&&isAutoSaveOnline()&&window.navigator.onLine)fetch(e).then((function(e){return e.blob()})).then((function(e){saveAnnotatedImage(e,!0,t,a)}));else{dataURL=[],centerOffX=0,centerOffY=0;var i=document.createElement("IMG");i.src=e,dataURL.push(i),newTab()}}function saveAnnotatedImage(e,t,a,i){currentTemId>0||getCurrentTab((function(n){sendMessageToTab(n.id,{action:"destroy_selected"}),e&&isAutoSaveOnline()&&window.navigator.onLine?getImageId(tabtitle,taburl,a,i,(function(a,n,o){var u=new UploadItem(e,"1",t,0),r=new UploadQueue(a,n);r.sid=o,r.uploadItems.push(u),r.addCapturesCount(),i&&(r.format=i),uploadQueues[a]=r,r.finishCapture(),r.checkStatus()}),(function(t){openLoacalTab(e)})):e&&openLoacalTab(e)}))}function UploadQueue(e,t){this.imageId=e,this.imageUrl=t,this.haveOpenUrl=!1,this.captureCount=0,this.captureFinish=!1,this.uploadItems=[],this.uploadFinish=!1,this.sid="",this.failedInitImage=!1,this.clientCreateTime=(new Date).toUTCString(),this.offsetInfo={centerOffX,centerOffY,centerW,centerH},this.menuType=menuType,this.type=type,this.errMsg="",this.format="jpg"===localStorage.format?"image/jpeg":"image/png",this.failedMaxTime=!1,this.height=0}function UploadItem(e,t,a,i){this.blob=e,this.index=t,this.isLast=a,this.failedTimes=0,this.inTimeoutFun=!1,this.status=i}function reloadUploadQueue(e){var t=uploadQueues[e];if(!t)for(var a in uploadQueues){var i=uploadQueues[a];e==i.imageId&&(t=i)}t&&t.checkStatus()}function removeQueueWithImageId(e){var t=e;if(!uploadQueues[e])for(var a in uploadQueues){e==uploadQueues[a].imageId&&(t=a)}delete uploadQueues[t]}function getQueueByImageId(e){var t=uploadQueues[e];if(!t)for(var a in uploadQueues){var i=uploadQueues[a];if(e==i.imageId){t=i;break}}return t}function initImageId(e,t,a,i,n){isAutoSaveOnline()&&window.navigator.onLine?(isSaveOnLine=!0,getImageId(e,t,a,"jpg"===localStorage.format?"image/jpeg":"image/png",(function(e,t,a){var o=getQueueByImageId(i);o?(a&&(o.sid=a),o.updateInfo(e,t)):(o=new UploadQueue(e,t),uploadQueues[i]=o,a&&(o.sid=a)),n&&uploadLog(e,{contentInfo:n}),o.checkStatus()}),(function(){isSaveOnLine=!1;var e=getQueueByImageId(i);e&&e.failedInitId()}))):isSaveOnLine=!1}function uploadLog(e,t){$.ajax({type:"POST",contentType:"application/json",url:apiUrl+"/api/v1/image/log",data:JSON.stringify({imageID:e,info:JSON.stringify(t)}),success:function(e){e.code},error:function(e){}})}function getImageId(e,t,a,i,n,o){$.ajax({method:"POST",dataType:"json",contentType:"application/json; charset=utf-8",url:apiUrl+"/api/v1/image/create",data:JSON.stringify({title:e,folderID:"0",sourceURL:t,actionType:a,contentType:i,client:/Edg/.test(navigator.userAgent)?"Edge extension":"chrome extension",version:currentversion,clientCreateTime:(new Date).toUTCString()}),success:function(e){1===e.code?n(e.data.image.id,e.data.image.imageURI,e.data.sid):(o(e.code),uploadLog("-1",{errMsg:e.msg+"image/create; "}))},error:function(e){o(e.status),uploadLog("-1",{errMsg:e.statusText+"image/create; "})}})}function finishUpload(e,t,a,i){$.ajax({method:"POST",contentType:"application/json; charset=utf-8",url:apiUrl+"/api/v1/image/complete_multipart"+(i?"?sid="+i:""),data:JSON.stringify({imageID:e,imageCount:t+"",contentType:a}),success:function(t){1!==t.code&&uploadLog(e,{errMsg:t.msg+" complete_multipart; "})},error:function(t){uploadLog(e,{errMsg:t.statusText+" complete_multipart; "})}})}function uploadItemOnline(e,t,a){if(1!=e.status||!e.blob){e.status=1;var i=new FormData;i.append("file",e.blob),i.append("imageID",t),i.append("imageIndex",e.index),$.ajax({method:"POST",url:apiUrl+"/api/v1/image/upload_multipart"+(a?"?sid="+a:""),data:i,processData:!1,contentType:!1,success:function(a){1===a.code?(e.status=2,reloadUploadQueue(t)):uploadLog(t,{errMsg:a+"res.code:"+a.code+" upload_multipart; "})},error:function(a){e.status=3,e.failedTimes++,reloadUploadQueue(t),e.failedTimes<2&&uploadLog(t,{errMsg:a.statusText+" status:"+a.status+" "+e.index+" upload_multipart; "})}})}}function handleCurrentCapture(e,t,a,i){(n=getQueueByImageId(i)).addCapturesCount(),a&&n.finishCapture();try{cropImage(e,n.menuType,n.type,n.offsetInfo.centerOffX,n.offsetInfo.centerOffY,n.offsetInfo.centerW,n.offsetInfo.centerH,a,n.format,i,(function(e){var n=getQueueByImageId(i);if(!e&&n)n.imageUrl?uploadLog(n.imageId,{clientCreateTime:n.clientCreateTime,errMsg:"cropImage return null"}):n.errMsg=n.errMsg?n.errMsg+"cropImage return null; ":"cropImage return null; ";else{var o=new UploadItem(e,t,a,0);if(n){n.uploadItems.push(o);var u=n.imageUrl?n.imageId:0;u>0&&uploadItemOnline(o,u,n.sid)}}}))}catch(e){var n;(n=getQueueByImageId(i))&&(n.imageUrl?uploadLog(n.imageId,{clientCreateTime:n.clientCreateTime,errMsg:e.toString()+"handleCurrentCapture; "}):n.errMsg=n.errMsg?n.errMsg+e.toString()+"handleCurrentCapture; ":e.toString()+"handleCurrentCapture; ")}}function cropImage(e,t,a,i,n,o,u,r,s,l,d){if(e){var p=document.createElement("CANVAS"),c=p.getContext("2d"),g=document.createElement("IMG"),m=0;"visible"===a&&"selected"!==t&&"desktop"!==t&&"upload"!==t&&(m=getScrollbarWidth()),g.onload=function(){var e=this.width,f=this.height;if(0==o||"desktop"==t?(u=f,o=e-m,i=n=0):"visible"!==a&&(u=f,n=0),r&&"visible"!==a)if(ratio.y>0){(h=Math.ceil(f*ratio.y))<=0&&(h=1),n=f-h,u=h}else{var h=f*ratio.y;n=0,u=f}else"selected"!==t&&(n=0);p.width=o,p.height=u,c.drawImage(this,i,n,o,u,0,0,o,u),"image/jpeg"===s?p.toBlob((function(e){if(g=null,p=null,!e){var i=getQueueByImageId(l);i&&(i.imageUrl?uploadLog(i.imageId,{clientCreateTime:i.clientCreateTime,errMsg:"cropImage return null size:"+o+" "+u+" "+a+t}):i.errMsg="cropImage return null size:"+o+" "+u+" "+a+t)}d(e)}),"image/jpeg",1):p.toBlob((function(e){if(g=null,p=null,!e){var i=getQueueByImageId(l);i&&(i.imageUrl?uploadLog(i.imageId,{clientCreateTime:i.clientCreateTime+" ",errMsg:"cropImage return null size:"+o+" "+u+" "+a+t}):i.errMsg="cropImage return null size:"+o+" "+u+" "+a+t)}d(e)}))},g.src=e}}UploadQueue.prototype.updateInfo=function(e,t){this.imageId=e,this.imageUrl=t,this.checkStatus(),this.errMsg&&uploadLog(this.imageId,{errMsg:this.errMsg})},UploadQueue.prototype.failedInitId=function(){this.failedInitImage=!0,this.captureFinish&&(this.uploadItems=[],newTab())},UploadQueue.prototype.addCapturesCount=function(){this.captureCount++},UploadQueue.prototype.finishCapture=function(){if(this.captureFinish=!0,isScrollCapturing=!1,currentTemId=0,this.failedInitImage)return this.uploadItems=[],void newTab();this.checkStatus()},UploadQueue.prototype.checkStatus=function(){if(this.imageUrl){var e=!0,t=this.uploadItems.length;if(t>0){var a=this;this.uploadItems.forEach((function(t){2!==t.status&&(e=!1),0!=t.status&&3!=t.status||(0==t.failedTimes?uploadItemOnline(t,a.imageId,a.sid):t.failedTimes<8&&!t.inTimeoutFun&&!this.failedMaxTime?(t.inTimeoutFun=!0,setTimeout((function(){t.inTimeoutFun=!1,uploadItemOnline(t,a.imageId,a.sid)}),800*t.failedTimes)):t.failedTimes>8&&!t.inTimeoutFun&&(this.failedMaxTime=!0))}))}else e=!1;this.captureFinish&&!this.haveOpenUrl&&this.imageUrl&&(this.haveOpenUrl=!0,openNewTab(this.imageUrl)),e&&this.captureFinish&&!this.uploadFinish&&this.captureCount===t&&(this.uploadFinish=!0,this.uploadItems=[],finishUpload(this.imageId,this.captureCount,this.format,this.sid),removeQueueWithImageId(this.imageId))}};