IgeBootstrap=function(a,b){this.onComplete=a,this.serverFiles=null,this.clientFiles=null,this.busy=!1;if(!b)if(typeof module!="undefined"&&module.exports)this.mode=0;else if(window)window!=null&&!window.console&&(window.console={log:function(){}}),this.mode=1;else{if(typeof AppMobi=="undefined")throw"Bootstrap error, cannot detect environment!";this.mode=2}},IgeBootstrap.prototype.init=function(a){if(this.mode==0){this.log("IGE *info* [IgeBootstrap] : Bootstrapping on server-side..."),this.serverFiles=a;for(var b in this.serverFiles)this.require(this.serverFiles[b])}if(this.mode==1){this.log("IGE *info* [IgeBootstrap] : Bootstrapping on client-side..."),this.clientFiles=a;for(var b in this.clientFiles)this.require(this.clientFiles[b])}if(this.mode==2){this.log("IGE *info* [IgeBootstrap] : Bootstrapping in AppMobi container..."),this.clientFiles=a;for(var b in this.clientFiles)this.require(this.clientFiles[b])}},IgeBootstrap.prototype.require=function(a,b,c){a&&(this.queue=this.queue||[],this.done=this.done||[],this.doneCount=0,this.queue.push([a,b,c]))},IgeBootstrap.prototype.process=function(){this.busy?this.log("IGE *info* [IgeBootstrap] : Queue busy"):(this.busy=!0,this.queue.length?this.loadFile(this.queue.shift()):(this.busy=!1,typeof this.onComplete=="function"&&(this.mode==0&&this.onComplete.call(),this.mode==1&&this.onComplete.apply(window),this.mode==2&&this.onComplete(),this.onComplete=null)))},IgeBootstrap.prototype.loadFile=function(fileData){var file=fileData[0],varName=fileData[1],callback=fileData[2];if(this.done[file]){this.log("IGE *info* [IgeBootstrap] : Already loaded file "+file),this.mode==0&&(this.busy=!1,this.process()),this.mode==1&&(window.igeBootstrap.busy=!1,window.igeBootstrap.process()),this.mode==2&&(this.busy=!1,this.process());return}this.log("IGE *info* [IgeBootstrap] : Loading file "+file),this.doneCount++;if(this.mode==0){if(file.substr(0,2)=="./"||file.substr(0,3)=="../")file=process.cwd()+"/"+file;varName?(eval(varName+' = require("'+file+'");'),this.log("IGE *info* [IgeBootstrap] : File loaded: "+file),typeof callback=="function"&&callback.apply(this,fileData)):(require(file),this.log("IGE *info* [IgeBootstrap] : File loaded: "+file)),this.busy=!1,this.process()}if(this.mode==1){var tempScript=document.createElement("script");tempScript.onload=this.bind(function(){this.log("IGE *info* [IgeBootstrap] : File loaded: "+file),window.igeBootstrap.busy=!1,typeof callback=="function"&&callback.apply(this,[fileData]),window.igeBootstrap.process()}),tempScript.id="IgeBootstrap_"+this.doneCount+(new Date).getTime(),tempScript.type="text/javascript",tempScript.src=file+".js",document.getElementsByTagName("head")[0].appendChild(tempScript)}if(this.mode==2){var tempScript=document.createElement("script");tempScript.onload=this.bind(function(){this.log("IGE *info* [IgeBootstrap] : File loaded: "+file),window.igeBootstrap.busy=!1,typeof callback=="function"&&callback.apply(this,[fileData]),window.igeBootstrap.process()}),tempScript.id="IgeBootstrap_"+this.doneCount+(new Date).getTime(),tempScript.type="text/javascript",tempScript.src=file+".js",document.getElementsByTagName("head")[0].appendChild(tempScript)}this.done[file]=!0},IgeBootstrap.prototype.bind=function(a){if(typeof a=="function"){var b=this;return function(){return a.apply(b,arguments)}}return this.log("IGE *info* [IgeBootstrap] : An attempt to use bind against a method that does not exist was made!"),function(){}},IgeBootstrap.prototype.log=function(a){var b=new Date,c="["+b.toDateString()+" "+b.toTimeString().substr(0,8)+"] ";a=c+a,this.mode==0&&console.log(a),this.mode==1&&window.igeDebug&&console!=null&&console.log!=null&&console.log(a)},safeCall=function(a,b,c){return a&&typeof a[b]=="function"?(a[b].apply(a,c||[]),!0):!1};if(typeof console=="undefined"){var emptyFunc=function(){};console={},console.log=emptyFunc,console.info=emptyFunc,console.warn=emptyFunc,console.error=emptyFunc,typeof window!="undefined"&&typeof window.console=="undefined"&&(window.console=console)}IgeCollection=null,IgeNetworkItem=null,IgeNetwork_Packet=null,IgePallete=null,console.log("-----------------------------------------------------"),console.log("Isogenic Game Engine - http://www.isogenicengine.com"),console.log("(C)opyright 2012 Irrelon Software Limited"),console.log("-----------------------------------------------------")