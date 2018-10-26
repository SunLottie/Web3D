var DynamicCharacterController = pc.createScript('dynamicCharacterController');

DynamicCharacterController.attributes.add('speed', {type: 'number', default: 5, title: 'Speed'});


// initialize code called once per entity
DynamicCharacterController.prototype.initialize = function() {
    
        this.groundCheckRay = new pc.Vec3(0, -1.01, 0);
        this.rayEnd = new pc.Vec3();

        this.onGround = false;
    
        this.initialPos = this.entity.getPosition().clone();
        this.initialRot = this.entity.getRotation().clone();
    
};

// update code called every frame
DynamicCharacterController.prototype.update = function(dt) {
    
     var pos = this.entity.getPosition();
     this.rayEnd.add2(pos, this.groundCheckRay);
     this.onGround = true;

            // Fire a ray straight down to just below the bottom of the rigid body, 
            // if it hits something then the character is standing on something.
     // context.systems.rigidbody.raycastFirst(pos, this.rayEnd, function (result) {
     //      this.onGround = true;
     // }.bind(this));
    
};
//重置位置
DynamicCharacterController.prototype.reset = function() {
    
        this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;
        this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO;
        this.entity.rigidbody.teleport(this.initialPos, this.initialRot);
    
};
//移动
DynamicCharacterController.prototype.move = function(direction) {
    
        if (this.onGround) {
            //console.log(direction);
            direction.scale(this.speed);
           // if(pc.isMobile()){
             //   direction.scale(10);
            //}
            this.entity.rigidbody.linearVelocity = direction;
            //this.entity.translateLocal(direction);
        }
    
};
