var WebVrUi = pc.createScript('webVrUi');


WebVrUi.attributes.add("logo",{type:"asset", title:"tips Asset"});
WebVrUi.attributes.add("tips",{type:"asset", title:"tips Asset"});
WebVrUi.attributes.add("homePage",{type:"asset", title:"homePage Asset"});
WebVrUi.attributes.add("QRCode",{type:"asset", title:"QRCode Asset"});
WebVrUi.attributes.add("favorite",{type:"asset", title:"favorite Asset"});
WebVrUi.attributes.add("left",{type:"asset", title:"left Asset"});
WebVrUi.attributes.add("right",{type:"asset", title:"right Asset"});
WebVrUi.attributes.add("up",{type:"asset", title:"up Asset"});
WebVrUi.attributes.add("down",{type:"asset", title:"down Asset"});
WebVrUi.attributes.add("addFov",{type:"asset", title:"addFov Asset"});
WebVrUi.attributes.add("minusFov",{type:"asset", title:"minusFov Asset"});
WebVrUi.attributes.add("fullScreen",{type:"asset", title:"fullScreen Asset"});
WebVrUi.attributes.add("cancelFullScreen",{type:"asset", title:"cancelFullScreen Asset"});
WebVrUi.attributes.add("play",{type:"asset", title:"play Asset"});
WebVrUi.attributes.add("pause",{type:"asset", title:"pause Asset"});
WebVrUi.attributes.add("edit",{type:"asset", title:"edit Asset"});
WebVrUi.attributes.add("uiHtml",{type: 'asset', assetType:'html', title:"html Asset"});
WebVrUi.attributes.add("uiCss",{type: 'asset', assetType:'css', title:"css Asset"});
WebVrUi.attributes.add("firstPersonCamera", {type: "entity", title: "Camera"});
WebVrUi.attributes.add("bgMusic", {type: "entity", title: "Sound"});
WebVrUi.attributes.add("controller", {type: "entity", title: "Character"});
WebVrUi.attributes.add('locationData', {
    type: 'asset',
    assetType: 'json'
});


WebVrUi.prototype.initialize = function() {    
//     if (this.app.vr && this.app.vr.display) {
//         this.app.vr.display.on("presentchange", this.onVrPresentChange, this);
//     }

     
//     // HTML UI setup
    var css1 = '#vr-button1 {position: absolute;top: 90%;left: 5%;background-image: url("'+ this.homePage.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
         'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}'+'*{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-o-user-select:none;};';

     
    
    var style1 = pc.createStyle(css1);
    document.head.appendChild(style1);
    
    this.vrButtonDiv1 = document.createElement("div");
    this.vrButtonDiv1.id = "vr-button1";
    this.vrButtonDiv1.innerHTML = "&nbsp"; 
    this.vrButtonDiv1.title = "主页";
    
    document.body.appendChild(this.vrButtonDiv1);
    
    //-----------------------------------------------------------2------------------------------------------------------------------------------------
    
    
   
    var css2 = '#vr-button2 {position: absolute;top: 90%;left: 10%;background-image: url("'+ this.QRCode.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
    
    var style2 = pc.createStyle(css2);
    document.head.appendChild(style2);
    
    this.vrButtonDiv2 = document.createElement("div");
    this.vrButtonDiv2.id = "vr-button2";
    this.vrButtonDiv2.innerHTML = "&nbsp";
    this.vrButtonDiv2.title = "分享";
    
    document.body.appendChild(this.vrButtonDiv2);
    //-------------------------------------------------------------3----------------------------------------------------------------------------------
    
    
   
    var css3 = '#vr-button3 {position: absolute;top: 90%;left: 15%;background-image: url("'+ this.favorite.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
     if(pc.isMobile()){
         css3 = '#vr-button3 {position: absolute;top: 90%;left: 18%;background-image: url("'+ this.favorite.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
     }
    var style3 = pc.createStyle(css3);
    document.head.appendChild(style3);
    
    this.vrButtonDiv3 = document.createElement("div");
    this.vrButtonDiv3.id = "vr-button3";
    this.vrButtonDiv3.innerHTML = "&nbsp";
    this.vrButtonDiv3.title = "收藏";
    
    document.body.appendChild(this.vrButtonDiv3);
    
    
    //---------------------------------------------------------------4--------------------------------------------------------------------------------
    
    
   
    var css4 = '#vr-button4 {position: absolute;top: 90%;left: 35%;background-image: url("'+ this.left.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
    
    var style4 = pc.createStyle(css4);
    document.head.appendChild(style4);
    
    this.vrButtonDiv4 = document.createElement("div");
    this.vrButtonDiv4.id = "vr-button4";
    this.vrButtonDiv4.innerHTML = "&nbsp";
    this.vrButtonDiv4.title = "向左看";
    
    document.body.appendChild(this.vrButtonDiv4);
    //---------------------------------------------------------------5--------------------------------------------------------------------------------
    
    
   
    var css5 = '#vr-button5 {position: absolute;top: 90%;left: 40%;background-image: url("'+ this.right.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
    
    var style5 = pc.createStyle(css5);
    document.head.appendChild(style5);
    
    this.vrButtonDiv5 = document.createElement("div");
    this.vrButtonDiv5.id = "vr-button5";
    this.vrButtonDiv5.innerHTML = "&nbsp"; 
    this.vrButtonDiv5.title = "向右看";
    
    document.body.appendChild(this.vrButtonDiv5);
    //---------------------------------------------------------------6--------------------------------------------------------------------------------
    
    
   
    var css6 = '#vr-button6 {position: absolute;top: 90%;left: 45%;background-image: url("'+ this.up.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
     if(pc.isMobile()){
         css6 = '#vr-button6 {position: absolute;top: 90%;left:39%;background-image: url("'+ this.up.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
     }
    
    var style6 = pc.createStyle(css6);
    document.head.appendChild(style6);
    
    this.vrButtonDiv6 = document.createElement("div");
    this.vrButtonDiv6.id = "vr-button6";
    this.vrButtonDiv6.innerHTML = "&nbsp"; 
    this.vrButtonDiv6.title = "前进";
    
    document.body.appendChild(this.vrButtonDiv6);
    //-----------------------------------------------------------------7------------------------------------------------------------------------------
    
    
   
    var css7 = '#vr-button7 {position: absolute;top: 90%;left: 50%;background-image: url("'+ this.down.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
    if(pc.isMobile()){
        css7 = '#vr-button7 {position: absolute;top: 90%;left: 55%;background-image: url("'+ this.down.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
    }
    
    var style7 = pc.createStyle(css7);
    document.head.appendChild(style7);
    
    this.vrButtonDiv7 = document.createElement("div");
    this.vrButtonDiv7.id = "vr-button7";
    this.vrButtonDiv7.innerHTML = "&nbsp"; 
    this.vrButtonDiv7.title = "后退";
    
    document.body.appendChild(this.vrButtonDiv7);
    //-------------------------------------------------------------------8----------------------------------------------------------------------------
    
    
   
    var css8 = '#vr-button8 {position: absolute;top: 90%;left: 55%;background-image: url("'+ this.addFov.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
    
    var style8 = pc.createStyle(css8);
    document.head.appendChild(style8);
    
    this.vrButtonDiv8 = document.createElement("div");
    this.vrButtonDiv8.id = "vr-button8";
    this.vrButtonDiv8.innerHTML = "&nbsp";
    this.vrButtonDiv8.title = "放大";
    
    document.body.appendChild(this.vrButtonDiv8);
    //-------------------------------------------------------------------9----------------------------------------------------------------------------
    
    
   
    var css9 = '#vr-button9 {position: absolute;top: 90%;left: 60%;background-image: url("'+ this.minusFov.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
    
    var style9 = pc.createStyle(css9);
    document.head.appendChild(style9);
    
    this.vrButtonDiv9 = document.createElement("div");
    this.vrButtonDiv9.id = "vr-button9";
    this.vrButtonDiv9.innerHTML = "&nbsp"; 
    this.vrButtonDiv9.title = "缩小";
    
    document.body.appendChild(this.vrButtonDiv9);
    //-----------------------------------------------------------------------10------------------------------------------------------------------------
    
    
   
    var css10 = '#vr-button10 {position: absolute;top: 90%;left: 80%;background-image: url("'+ this.fullScreen.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
     if(pc.isMobile()){
        css10 = '#vr-button10 {position: absolute;top: 90%;left: 77%;background-image: url("'+ this.fullScreen.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
    }
    
    var style10 = pc.createStyle(css10);
    document.head.appendChild(style10);
    
    this.vrButtonDiv10 = document.createElement("div");
    this.vrButtonDiv10.id = "vr-button10";
    this.vrButtonDiv10.innerHTML = "&nbsp";
    this.vrButtonDiv10.title = "全屏";
    
    document.body.appendChild(this.vrButtonDiv10);
    
  
    //-----------------------------------------------------------------------11------------------------------------------------------------------------
    
    
   
    var css11 = '#vr-button11 {position: absolute;top: 90%;left: 85%;background-image: url("'+ this.cancelFullScreen.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
    
    var style11 = pc.createStyle(css11);
    document.head.appendChild(style11);
    
    this.vrButtonDiv11 = document.createElement("div");
    this.vrButtonDiv11.id = "vr-button11";
    this.vrButtonDiv11.innerHTML = "&nbsp";
    this.vrButtonDiv11.title = "取消全屏";
    
    //document.body.appendChild(this.vrButtonDiv11);
    //-----------------------------------------------------------------------12------------------------------------------------------------------------
    
    
   
    var css12 = '#vr-button12 {position: absolute;top: 90%;left: 90%;background-image: url("'+ this.pause.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
    if(pc.isMobile()){
        css12 = '#vr-button12 {position: absolute;top: 90%;left: 88%;background-image: url("'+ this.pause.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
    }
    var style12 = pc.createStyle(css12);
    document.head.appendChild(style12);
    
    this.vrButtonDiv12 = document.createElement("div");
    this.vrButtonDiv12.id = "vr-button12";
    this.vrButtonDiv12.innerHTML = "&nbsp";
    this.vrButtonDiv12.title = "暂停";
    
    document.body.appendChild(this.vrButtonDiv12);
    //-----------------------------------------------------------------------13------------------------------------------------------------------------
    
    
   
    var css13 = '#vr-button13 {position: absolute;top: 90%;left: 95%;background-image: url("'+ this.pause.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
    
    var style13 = pc.createStyle(css13);
    document.head.appendChild(style13);
    
    this.vrButtonDiv13 = document.createElement("div");
    this.vrButtonDiv13.id = "vr-button13";
    this.vrButtonDiv13.innerHTML = "&nbsp"; 
    
   // document.body.appendChild(this.vrButtonDiv13);
    
    
    //---------------14-------
    var css14 = '#vr-button14 {position: absolute;top: 34%;left: 40%;display: block;cursor: pointer;}';
    var style14 = pc.createStyle(css14);
    document.head.appendChild(style14);
    
    this.vrButtonDiv14 = document.createElement("div");
    this.vrButtonDiv14.id = "vr-button14";
    this.vrButtonDiv14.innerHTML = "&nbsp"; 
    
    document.body.appendChild(this.vrButtonDiv14);
    
    new QRCode(document.getElementById("vr-button14"), window.location.href);
    
    $('#vr-button14').hide();
    
    var css15 = '#vr-button15 {position: absolute;top: 0%;left: 5%;background-image: url("'+ this.logo.getFileUrl() +'");width: 256px;height: 256px;display: block;'+
    'background-position: 0px 0px;background-size: 256px 256px; cursor: pointer;}';
     if(pc.isMobile()){
         css15 = '#vr-button15 {position: absolute;top: 0%;left: 5%;background-image: url("'+ this.logo.getFileUrl() +'");width: 128px;height: 128px;display: block;'+
    'background-position: 0px 0px;background-size: 128px 128px; cursor: pointer;}';
     }
    var style15 = pc.createStyle(css15);
    document.head.appendChild(style15);
    
    this.vrButtonDiv15 = document.createElement("div");
    this.vrButtonDiv15.id = "vr-button15";
    this.vrButtonDiv15.innerHTML = "&nbsp"; 
    document.body.appendChild(this.vrButtonDiv15);
    //编辑按钮
    var css16 = '#vr-button16 {position: absolute;top: 90%;left: 20%;background-image: url("'+ this.edit.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
     if(pc.isMobile()){
         css16 = '#vr-button16 {position: absolute;top: 90%;left: 20%;background-image: url("'+ this.edit.getFileUrl() +'");width: 32px;height: 32px;display: block;'+
    'background-position: 0px 0px;background-size: 32px 32px; cursor: pointer;}';
     }
    var style16 = pc.createStyle(css16);
    document.head.appendChild(style16);
    
    this.vrButtonDiv16 = document.createElement("div");
    this.vrButtonDiv16.id = "vr-button16";
    this.vrButtonDiv16.innerHTML = "&nbsp"; 
    this.vrButtonDiv16.title = "编辑";
    document.body.appendChild(this.vrButtonDiv16);    
    
    
    
    //音频
    this.sound = document.createElement("audio");
    this.sound.id = "bgm";
    document.body.appendChild(this.sound);
    $("#bgm").attr("src",this.locationData.resource.BackGroundMusic[0].dataUrl);
    this.sound.play();
    //
    
    this.isPlayingBGM = true;
    this.isFullScreen = false;
    
    
    this.bindButtonEvent();
    this.onVrPresentChange();
    
    // try and enter vr immediately for Carmel browser
    //onEnterVrPressedEvent();
};

WebVrUi.prototype.bindButtonEvent = function(){
        
    var self = this;
    //跳转到主页
        var homePageButton = document.getElementById("vr-button1");
        homePageButton.addEventListener('click', function(){
            var homePageUrl = self.locationData.resource.HomePage[0].url;
            window.location.href = homePageUrl;
        },false);
    //显示二维码
        var QRButton = document.getElementById("vr-button2");
        QRButton.addEventListener('click', function(){
            $('#vr-button14').show(1500);
            self.app.fire("2dcode");
        },false);
    //添加到收藏
        var addFavoriteButton = document.getElementById("vr-button3");
        addFavoriteButton.addEventListener('click', function(){
            //收藏-----------------------------------------
            var url = window.location.href;
            var title = document.title;
            try {       
                if(document.all){
                    window.external.addFavorite(url,title);                
                }else if(window.sidebar){                      
                    window.sidebar.addPanel(title, url,'');         
                }          
            } catch (e)        
            {          
                alert("加入收藏夹失败，请使用Ctrl+D快捷键进行添加操作!");   
            }
            //-------------------------------------------------------
        },false);
    
    //编辑
        var editButton = document.getElementById("vr-button16");  
    
        editButton.addEventListener('click', function(){
             //编辑-------------------------------------
     
            
            
            console.log("编辑");
            
            
            
            //------------------------
             
        }, false);
    
    //向左看
        var addLeftButton = document.getElementById("vr-button4");  
    
        addLeftButton.addEventListener('click', function(){
             self.firstPersonCamera.script.firstPersonCamera.azimuth +=10;
             
        }, false);
    //向右看
        var addRightButton = document.getElementById("vr-button5");  
    
        addRightButton.addEventListener('click', function(){
             self.firstPersonCamera.script.firstPersonCamera.azimuth -=10;
             
        }, false);
    //向前移动
        var addUpButton = document.getElementById("vr-button6");  
        
        if(pc.isMobile()){
        addUpButton.addEventListener('touchstart', function(){
               self.controller.script.input.W = true;
        }, false);
        addUpButton.addEventListener('touchend', function(){
               self.controller.script.input.W = false;
            }, false);
        }else{
        addUpButton.addEventListener('mousedown', function(){
               self.controller.script.input.W = true;
        }, false);
        addUpButton.addEventListener('mouseup', function(){
               self.controller.script.input.W = false;
        }, false);
        }
    
       
    //向后移动
       var addDownButton = document.getElementById("vr-button7");  
        if(pc.isMobile()){
            addDownButton.addEventListener('touchstart', function(){
               self.controller.script.input.S = true;
            }, false);
            
            
            addDownButton.addEventListener('touchend', function(){
               self.controller.script.input.S = false;
            }, false);
            
            }else{
            addDownButton.addEventListener('mousedown', function(){
                       self.controller.script.input.S = true;
                }, false);
                addDownButton.addEventListener('mouseup', function(){
                       self.controller.script.input.S = false;
                }, false);
        
            }
       
       
    
    //放大镜头
        var addFovButton = document.getElementById("vr-button8");  
    
        addFovButton.addEventListener('click', function(){
             if( self.firstPersonCamera.camera.fov > 0)
             self.firstPersonCamera.camera.fov -=10;
        }, false);
    //缩小镜头
        var minusFovButton = document.getElementById("vr-button9");  
        minusFovButton.addEventListener('click', function(){
            if( self.firstPersonCamera.camera.fov < 120)
            self.firstPersonCamera.camera.fov +=10;
        },false);
    //进入全屏
        var enterFullScreenButton = document.getElementById("vr-button10");  
        enterFullScreenButton.addEventListener('click', function(){
           
            var docElm = document.documentElement;
              if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
                  
                 $('#vr-button10').css("background-image","url("+self.cancelFullScreen.getFileUrl()+")");
              } else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
                  //$('#vr-button10').css("background-image","url("+self.cancelFullScreen.getFileUrl()+")");
              } else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
                   //$('#vr-button10').css("background-image","url("+self.cancelFullScreen.getFileUrl()+")");
              } else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen();
                   //$('#vr-button10').css("background-image","url("+self.cancelFullScreen.getFileUrl()+")");
              }
                //self.isFullScreen = true;
            
              if (document.exitFullscreen) {
                document.exitFullscreen();
                  console.log(self.cancelFullScreen.getFileUrl());
                  //$('#vr-button10').css("background-image","url("+self.fullScreen.getFileUrl()+")");
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
                  //$('#vr-button10').css("background-image","url("+self.fullScreen.getFileUrl()+")");
              } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
                  //$('#vr-button10').css("background-image","url("+self.fullScreen.getFileUrl()+")");
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
                  //$('#vr-button10').css("background-image","url("+self.fullScreen.getFileUrl()+")");
              }
                 //self.isFullScreen = false;
                 if(!self.isFullScreen){
                     $('#vr-button10').css("background-image","url("+self.cancelFullScreen.getFileUrl()+")");
                     $('#vr-button10').attr("title","取消全屏");
                     self.isFullScreen = true;
                 }else{
                     $('#vr-button10').css("background-image","url("+self.fullScreen.getFileUrl()+")");
                     $('#vr-button10').attr("title","全屏");
                     self.isFullScreen = false;
                 }
       
        },false);
    //退出全屏

    //播放音乐
        var playButton = document.getElementById("vr-button12");  
        playButton.addEventListener('click', function(){
            
            
            if(self.isPlayingBGM){
                 self.sound.pause();
                 self.isPlayingBGM = false;
                 //$("").attr('url',self.);
                   $('#vr-button12').css("background-image","url("+self.play.getFileUrl()+")");
                   $('#vr-button12').attr("title","播放");
            }else{
                 self.sound.play();
                 self.isPlayingBGM = true;
                 $('#vr-button12').css("background-image","url("+self.pause.getFileUrl()+")");
                $('#vr-button12').attr("title","暂停");
                
            }
           
        },false);
    //暂停音乐

    //点击二维码
        var HideButton = document.getElementById("vr-button14");  
        HideButton.addEventListener('click', function(){
            $('#vr-button14').hide(1500);
            self.app.fire("2dcode");
        },false);
};


// update code called every frame
WebVrUi.prototype.update = function(dt) {

    
};

WebVrUi.prototype.onVrPresentChange = function(display) {
    if(pc.isMobile()){
        document.body.removeChild(this.vrButtonDiv2);
        document.body.removeChild(this.vrButtonDiv4);
        document.body.removeChild(this.vrButtonDiv5);
        document.body.removeChild(this.vrButtonDiv8);
        document.body.removeChild(this.vrButtonDiv9);
        document.body.removeChild(this.vrButtonDiv16);
    }

};

WebVrUi.prototype.scaleInfoPanel = function(scale) {
};

