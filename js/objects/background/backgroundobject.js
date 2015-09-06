var BackgroundObject = (function () {
  BackgroundObject.prototype = new GameObject();
  BackgroundObject.prototype.constructor = BackgroundObject;

  var size = 48;

  function BackgroundObject (options) {
    GameObject.call(this, options);

    this.images = [];
    this.cellsize = 24;

    this.blocks = {
      topLeft1: {x: 816, y: 192},
      topRight1: {x: 768, y: 192},
      bottomLeft1: {x: 1008, y: 192},
      bottomRight1: {x: 960, y: 192},
      topHorizontal1: {x: 1248, y: 192},
      bottomHorizontal1: {x: 1344, y: 192},
      leftVertical1: {x: 912, y: 192},
      rightVertical1: {x: 864, y: 192},
      topLeftContinues1: {x: 1248, y: 240},
      topRightContinues1: {x: 1296, y: 240},
      topLeftContinues2: {x: 1200, y: 192},
      topRightContinues2: {x: 1152, y: 192},
      bottomLeftContinues2: {x: 1104, y: 192},
      bottomRightContinues2: {x: 1056, y: 192},
      topLeft2: {x: 1104, y: 144},
      topRight2: {x: 1056, y: 144},
      bottomLeft2: {x: 1200, y: 240},
      bottomRight2: {x: 1152, y: 240},
      topHorizontal2: {x: 1440, y: 192},
      bottomHorizontal2: {x: 960, y: 144},
      leftVertical2: {x: 1200, y: 144},
      rightVertical2: {x: 1152, y: 144},
      topLeft3: {x: 864, y: 240},
      topRight3: {x: 912, y: 240},
      bottomLeft3: {x: 960, y: 240},
      bottomRight3: {x: 1008, y: 240},
      topLeft4: {x: 1392, y: 144},
      topRight4: {x: 1344, y: 144},
      bottomLeft4: {x: 1488, y: 144},
      bottomRight4: {x: 1440, y: 144},
      doorwayLeft: {x: 816, y: 240},
      doorwayRight: {x: 768, y: 240}
    };
  }

  BackgroundObject.prototype.draw = function () {
    for (var i = 0; i < this.images.length; i++) {
      this.context.drawImage(
        this.image,
        this.images[i].block.x,
        this.images[i].block.y,
        size,
        size,
        this.x + this.images[i].x * this.cellsize,
        this.y + this.images[i].y * this.cellsize,
        this.cellsize,
        this.cellsize);
    }
  };

  return BackgroundObject;
}());
