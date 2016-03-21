var PowerPellet = (function () {
  PowerPellet.prototype = new Pellet();
  PowerPellet.prototype.constructor = PowerPellet;

  var size = 20;

  function PowerPellet (options) {
    Pellet.call(this, options);

    this.imagePosition.x = 160;

    this.boundingBoxes = [
      makeBoundingBox(4, 4, 12, 12)
    ];
  }

  return PowerPellet;
}());
