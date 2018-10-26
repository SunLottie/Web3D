var LoadMaterials = pc.createScript('loadMaterials');
LoadMaterials.attributes.add('locationData', {
    type: 'asset',
    assetType: 'json'
});
// initialize code called once per entity
LoadMaterials.prototype.initialize = function() {
    
    var self = this;

    var image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = function () {
        var texture = new pc.Texture(self.app.graphicsDevice);
        texture.setSource(image);

        var material = self.entity.model.material;
        material.emissiveMap = texture;
        material.update(); 
        
    };
    image.src = this.locationData.resource.PaintFrame[0].dataUrl;
   
};

// update code called every frame
LoadMaterials.prototype.update = function(dt) {
    
};

// swap method called for script hot-reloading
// inherit your script state here
// LoadMaterials.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/