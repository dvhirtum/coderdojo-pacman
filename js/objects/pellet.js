var Pellet = (function () {
  Pellet.prototype = new GameObject();
  Pellet.prototype.constructor = Pellet;

  function Pellet (options) {
    GameObject.call(this, options);

    this.size = 20;
    this.imagePosition = {x: 140, y: 0};

    this.boundingBoxes = [
      new BoundingBox(8, 8, 4, 4)
    ];
  }

  Pellet.prototype.draw = function () {
    this.context.drawImage(
      this.image,
      this.imagePosition.x,
      this.imagePosition.y,
      this.size,
      this.size,
      this.position.x,
      this.position.y,
      this.size,
      this.size);
  };

  return Pellet;
}());
