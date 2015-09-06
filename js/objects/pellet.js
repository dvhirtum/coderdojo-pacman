Pellet.prototype = new GameObject();
Pellet.prototype.constructor = Pellet;

function Pellet (options) {
  GameObject.call(this, options);

  this.width = 12;

  this.boundingBoxes = [
    new BoundingBox(10, 10, this.width - 8, this.width - 8)
  ];
}

Pellet.prototype.draw = function () {
  this.context.drawImage(
    this.image,
    768,
    0,
    48,
    48,
    this.x + 6,
    this.y + 6,
    this.width,
    this.width);
};
