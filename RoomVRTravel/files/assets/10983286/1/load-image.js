var LoadImage = pc.createScript('loadImage');
LoadImage.attributes.add('locationData', {
    type: 'asset',
    assetType: 'json'
});
// initialize code called once per entity
LoadImage.prototype.initialize = function() {
    
    var self = this;

    var image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = function () {
        var texture = new pc.Texture(self.app.graphicsDevice);
        texture.setSource(image);

        var material = self.entity.element;
        material.texture = texture;
        
        //material.update();
    };
    image.src = this.locationData.resource.Paint[this.entity.name-1].dataUrl;
    
};

// update code called every frame
LoadImage.prototype.update = function(dt) {
    
};

// swap method called for script hot-reloading
// inherit your script state here
// LoadImage.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/