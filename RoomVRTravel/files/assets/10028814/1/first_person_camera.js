var FirstPersonCamera = pc.createScript('firstPersonCamera');
FirstPersonCamera.attributes.add('locationData', {
    type: 'asset',
    assetType: 'json'
});
(function (factory) {

    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports) {
            window.Orienter = factory(exports);
        });
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        window.Orienter = factory({});
    }

}(function (Orienter) {

    Orienter = function () {
        this.initialize.apply(this, arguments);
    };

    Orienter.prototype = {
        lon: 0,
        lat: 0,
        direction: 0,
        fix: 0,
        os: '',
        initialize: function (config) {
            var _config = config || {};

            this.onOrient = _config.onOrient || function(){};
            this.onChange = _config.onChange || function(){};

            this._orient = this._orient.bind(this);
            this._change = this._change.bind(this);

            this.lon = 0;
            this.lat = 0;
            this.direction = window.orientation || 0;

            switch (this.direction) {
                case 0:
                    this.fix = 0;
                    break;
                case 90:
                    this.fix = -270;
                    break;
                case -90:
                    this.fix = -90;
                    break;
            }

            if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                this.os = 'ios';
            } else {
                this.os = (navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux')) ? 'android' : '';
            }
        },

        init: function () {
            window.addEventListener('deviceorientation', this._orient, false);
            window.addEventListener('orientationchange', this._change, false);
           
            
        },

        destroy: function () {
            window.removeEventListener('deviceorientation', this._orient, false);
            window.removeEventListener('orientationchange', this._change, false);
        },

        _change: function (event) {
            this.direction = window.orientation;

            this.onChange(this.direction);
        },

        changeDirectionTo: function (n) {
            this.direction = n;
        },

        _orient: function (event) {
            switch (this.os) {
                case 'ios':
                    switch (this.direction) {
                        case 0:
                            this.lon = event.alpha + event.gamma;
                            if (event.beta > 0) this.lat = event.beta - 90;
                            break;
                        case 90:
                            if (event.gamma < 0) {
                                this.lon = event.alpha - 90;
                            } else {
                                this.lon = event.alpha - 270;
                            }
                            if (event.gamma > 0) {
                                this.lat = 90 - event.gamma;
                            } else {
                                this.lat = -90 - event.gamma;
                            }
                            break;
                        case -90:
                            if (event.gamma < 0) {
                                this.lon = event.alpha - 90;
                            } else {
                                this.lon = event.alpha - 270;
                            }
                            if (event.gamma < 0) {
                                this.lat = 90 + event.gamma;
                            } else {
                                this.lat = -90 + event.gamma;
                            }
                            break;
                    }
                    break;
                case 'android':
                    switch (this.direction) {
                        case 0:
                            this.lon = event.alpha + event.gamma + 30;
                            if (event.gamma > 90) {
                                this.lat = 90 - event.beta;
                            } else {
                                this.lat = event.beta - 90;
                            }
                            break;
                        case 90:
                            this.lon = event.alpha - 230;
                            if (event.gamma > 0) {
                                this.lat = 270 - event.gamma;
                            } else {
                                this.lat = -90 - event.gamma;
                            }
                            break;
                        case -90:
                            this.lon = event.alpha - 180;
                            this.lat = -90 + event.gamma;
                            break;
                    }
                    break;
            }

            this.lon += this.fix;
            this.lon %= 360;
            if (this.lon < 0) this.lon += 360;

            this.lon = Math.round(this.lon);
            this.lat = Math.round(this.lat);

            this.onOrient({
                a: Math.round(event.alpha),
                b: Math.round(event.beta),
                g: Math.round(event.gamma),
                lon: this.lon,
                lat: this.lat,
                dir: this.direction
            });
        }

    };

    return Orienter;
}));

// initialize code called once per entity
FirstPersonCamera.prototype.initialize = function() {
    

        var temp = this.entity.forward.clone();
        temp.y = 0;
        temp.normalize();
        this.azimuth = Math.atan2(-temp.x, -temp.z) * (180 / Math.PI);

        var rot = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, -this.azimuth);
        rot.transformVector(this.entity.forward, temp);
        this.elevation = Math.atan(temp.y, temp.z) * (180 / Math.PI);

        // Disabling the context menu stops the browser displaying a menu when 
        // you right-click the page
        this.app.mouse.disableContextMenu();
        this.app.mouse.on(pc.input.EVENT_MOUSEMOVE,this.onMouseMove, this);
        this.app.mouse.on(pc.input.EVENT_MOUSEUP, this.onMouseUp, this);
    if (this.app.touch){
        this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
        this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this);

        this._lastTouchPoint = new pc.Vec2();
    }
        
        this.app.on('2dcode',this.dCodeShow,this);
    
        this.dCodeisShow = false;
        this.postMouseX = 0;
        this.postMouseY = 0;

        //this.range = 0;
    if(pc.isMobile()){
        this.postElevation = 0;
        this.postAzimuth = 0;
        this.quatX = new pc.Quat();
        this.quatY = new pc.Quat();
        this.rotX = 0;
        this.rotY = 0;
        this.bindOrientationEvent();

    }
    
    
    
        
};

// update code called every frame
FirstPersonCamera.prototype.update = function(dt) {
    if(pc.isMobile()){

       this.rotX = pc.math.lerpAngle(this.rotX,this.elevation,10*dt);
       this.rotY = pc.math.lerpAngle(this.rotY,this.azimuth,10*dt);
       this.quatX.setFromAxisAngle(pc.Vec3.RIGHT, this.rotX);
       this.quatY.setFromAxisAngle(pc.Vec3.UP, this.rotY);
       this.quatY.mul(this.quatX);
       this.entity.setRotation(this.quatY);


    }else{
        this.entity.setEulerAngles(this.elevation, this.azimuth, 0);

    }

    
};
FirstPersonCamera.prototype.onTouchMove = function(event) {
    
    var touches = event.touches;
    if (touches.length == 1) {
        var touch = touches[0];

        this.elevation += (touch.y - this._lastTouchPoint.y) /5;
        this.elevation = pc.math.clamp(this.elevation, -90, 90);
        this.azimuth += (touch.x - this._lastTouchPoint.x) / 5;

        this._lastTouchPoint.set(touch.x, touch.y);
    }
    
};
FirstPersonCamera.prototype.onTouchStart = function(event) {
    
    var touches = event.touches;
    if (touches.length == 1) {
        this._lastTouchPoint.set(touches[0].x, touches[0].y);
    }
    
};

FirstPersonCamera.prototype.onMouseMove = function(event) {

        if(this.app.mouse.isPressed(pc.MOUSEBUTTON_LEFT)){
            this.elevation -= event.dy / 10;
            this.elevation = pc.math.clamp(this.elevation, -90, 90);
         this.azimuth -= event.dx / 10;
        this.postMouseX += event.dx;
        this.postMouseY += event.dy;
        }
        

    
};

FirstPersonCamera.prototype.onMouseUp = function(event) {
        

        if(this.postMouseX === 0 && this.postMouseY === 0){
            this.doRayCast(event);
        }else{
            this.postMouseX = 0;
            this.postMouseY = 0;
        }
        
};
//检测射线
FirstPersonCamera.prototype.doRayCast = function(screenPoint) {
    var from = this.entity.getPosition();
    
    var to = this.entity.camera.screenToWorld(screenPoint.x,screenPoint.y, this.entity.camera.farClip);
    
    var result = this.app.systems.rigidbody.raycastFirst(from, to);
    
    if(result) {
        
        var hitEntity = result.entity;
        
        var reg=/^[0-9]{2}$/;
        
        if(reg.test(hitEntity.name)){
            
            if(!this.dCodeisShow){
                 console.log('picID:' + hitEntity.name + '    position:  ' + hitEntity.getPosition() + '      rotation:  ' + hitEntity.getRotation() + '    scale:  '+ hitEntity.getLocalScale()  );
            var picUrl = this.locationData.resource.Paint[hitEntity.name-1].url;
            var picDataUrl = this.locationData.resource.Paint[hitEntity.name-1].dataUrl;
            //跳转页面
            //window.location.href = picUrl;
            
            console.log( 'url:' + picUrl + "              dataUrl:" + picDataUrl);
            }
           
            

            
        }
    }
    
};
FirstPersonCamera.prototype.dCodeShow = function(){
    if(this.dCodeisShow)
    {
        this.dCodeisShow = false;
    }else{
        this.dCodeisShow = true;
    }
  
    
    
};
FirstPersonCamera.prototype.bindOrientationEvent = function(){
    var self = this;
    var o = new Orienter();
    var isFirstTime = true;
    o.onOrient = function (obj) {

        if(isFirstTime){
            this.postElevation = obj.lat;
            this.postAzimuth = obj.lon;
            isFirstTime = false;
        }else{
            var deltaLat = obj.lat - this.postElevation;

                self.elevation +=  deltaLat;

            var deltaLon = obj.lon - this.postAzimuth;

                self.azimuth += deltaLon;



            this.postElevation = obj.lat;
            this.postAzimuth = obj.lon;
        }

    };

    o.init();
};

