var BackgroundObject = (function () {
  BackgroundObject.prototype = new GameObject();
  BackgroundObject.prototype.constructor = BackgroundObject;

  function BackgroundObject (options) {
    GameObject.call(this, options);

    this.size = 20;
    this.imagePosition = options.imagePosition || {x: 0, y: 0};

    this.boundingBoxes = options.boundingBoxes || [];
  }

  BackgroundObject.prototype.draw = function () {
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

  return BackgroundObject;
}());
