function GameObject (options) {
  if (options === undefined || options === null) {
    options = {};
  }
  this.context = options.context;
  this.image = options.image;
  this.x = options.x || 0;
  this.y = options.y || 0;

  this.boundingBoxes = [];
}

GameObject.prototype.checkCollision = function (otherObject) {
  if (!(otherObject instanceof GameObject)) {
    return false;
  }
  for (var i = 0; i < this.boundingBoxes.length; i++) {
    var boundingBox = this.boundingBoxes[i];
    if (!(boundingBox instanceof BoundingBox)) {
      continue;
    }
    for (var j = 0; j < otherObject.boundingBoxes.length; j++) {
      var otherBox = otherObject.boundingBoxes[j];
      if (!(otherBox instanceof BoundingBox)) {
        continue;
      }
      if (boundingBox.intersectsWith(otherBox)) {
        return true;
      }
    }
  }
  return false;
};

GameObject.prototype.draw = function () {
  for (var i = 0; i < this.boundingBoxes.length; i++) {
    var box = this.boundingBoxes[i];
    this.context.fillStyle = "magenta";
    this.context.fillRect(box.x, box.y, box.width, box.height);
  }
};
