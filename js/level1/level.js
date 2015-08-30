function Level (options) {
  var self = this;

  self.shapes = [
    new Outline({context: options.context, image: options.image, x: 0, y: 48}),
    new Rectangle({context: options.context, image: options.image, x: 48, y: 96, width: 96, height: 72}),
    new Rectangle({context: options.context, image: options.image, x: 168, y: 96, width: 120, height: 72}),
    new Rectangle({context: options.context, image: options.image, x: 384, y: 96, width: 120, height: 72}),
    new Rectangle({context: options.context, image: options.image, x: 528, y: 96, width: 96, height: 72}),
    new Rectangle({context: options.context, image: options.image, x: 48, y: 192, width: 96, height: 48}),
    new Rectangle({context: options.context, image: options.image, x: 528, y: 192, width: 96, height: 48}),
    new Rectangle({context: options.context, image: options.image, x: 168, y: 408, width: 48, height: 120}),
    new Rectangle({context: options.context, image: options.image, x: 456, y: 408, width: 48, height: 120}),
    new Rectangle({context: options.context, image: options.image, x: 168, y: 552, width: 120, height: 48}),
    new Rectangle({context: options.context, image: options.image, x: 384, y: 552, width: 120, height: 48}),
    new TShape({context: options.context, image: options.image, x: 240, y: 192}),
    new TShape({context: options.context, image: options.image, x: 240, y: 480}),
    new TShape({context: options.context, image: options.image, x: 240, y: 624}),
    new GhostBox({context: options.context, image: options.image, x: 240, y: 336}),
    new HookShape1({context: options.context, image: options.image, x: 48, y: 552}),
    new HookShape2({context: options.context, image: options.image, x: 528, y: 552}),
    new InvertedT1({context: options.context, image: options.image, x: 48, y: 624}),
    new InvertedT2({context: options.context, image: options.image, x: 384, y: 624}),
    new FlippedT1({context: options.context, image: options.image, x: 168, y: 192}),
    new FlippedT2({context: options.context, image: options.image, x: 384, y: 192})
  ];

  return {
  	draw: function () {
      for (var i = 0; i < self.shapes.length; i++) {
        self.shapes[i].draw();
      }
  	}
  };
}
