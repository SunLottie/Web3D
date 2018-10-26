var Input = pc.createScript('input');

// initialize code called once per entity
Input.prototype.initialize = function() {
    
     //this.entity = entity;

     this.x = new pc.Vec3();
     this.z = new pc.Vec3();
     this.heading = new pc.Vec3();

//      this.controller = new pc.input.Controller(window);

//      this.controller.registerKeys('forward', [pc.KEY_UP, pc.KEY_W]);
//      this.controller.registerKeys('back', [pc.KEY_DOWN, pc.KEY_S]);
//      this.controller.registerKeys('left', [pc.KEY_LEFT, pc.KEY_A]);
//      this.controller.registerKeys('right', [pc.KEY_RIGHT, pc.KEY_D]);

    
     this.camera = this.app.root.findByName('Camera');
     //console.log(this.camera);
     this.character = this.entity;
    
     this.app.keyboard.on("keydown", this.onKeyDown, this);
     this.app.keyboard.on("keyup", this.onKeyUp, this);
    
     this.W = false;
     this.S = false;
     this.A = false;
     this.D = false;
    
};

// update code called every frame
Input.prototype.update = function(dt) {
    
        var input = false;

        // Calculate the camera's heading in the XZ plane
        this.z.copy(this.camera.forward).scale(-1);
        this.z.y = 0;
        this.z.normalize();

        this.x.copy(this.camera.right);
        this.x.y = 0;
        this.x.normalize();

        this.heading.set(0, 0, 0);

        // Strafe left/right
        if (this.A) {
            //console.log("Left");
            //console.log("cameras EulerAngles:"+this.camera.getEulerAngles());
            //console.log("this.x"+this.x);
            this.heading.sub(this.x);
            input = true;
        } else if (this.D) {
            //console.log("cameras EulerAngles:"+this.camera.getEulerAngles());
            //console.log("this.x"+this.x);
            this.heading.add(this.x);
            input = true;
        }

        // Move forwards/backwards
        if (this.W) {
            this.heading.sub(this.z);
            input = true;
        } else if (this.S) {
            this.heading.add(this.z);
            input = true;
        }
        
        if (input) {
            this.heading.normalize();
            //console.log("heading"+this.heading);
           
        }
        
         this.character.script.dynamicCharacterController.move(this.heading);

        

};



Input.prototype.onKeyDown = function (e) {
   
    if (e.key === pc.KEY_W){
        this.W = true;
    } else if (e.key === pc.KEY_S) {
        this.S = true;
    }
        

    if (e.key === pc.KEY_A) {
        this.A = true;
    } else if(e.key === pc.KEY_D){
        this.D = true;
    }
        

    // var parentPosition = this.entity.parent.getPosition();
    // this.entity.parent.setPosition(parentPosition.x,1.85,parentPosition.z);
    e.event.preventDefault(); // Use original browser event to prevent browser action.
};

Input.prototype.onKeyUp = function(e) {
   
    if (e.key === pc.KEY_W) 
        this.W = false;

    if (e.key === pc.KEY_S) 
        this.S = false;

    if (e.key === pc.KEY_A) 
        this.A = false;

    if (e.key === pc.KEY_D) 
        this.D = false;

};