var GameObject = (function () {
  function GameObject (options) {
    if (options === undefined || options === null) {
      options = {};
    }
    this.context = options.context;
    this.image = options.image;
    this.position = options.position || {x: 0, y: 0};

    this.boundingBoxes = [];
  }

  GameObject.prototype.draw = function () {
    for (var i = 0; i < this.boundingBoxes.length; i++) {
      var box = this.boundingBoxes[i];
      this.context.fillStyle = "magenta";
      this.context.fillRect(this.position.x + box.x, this.position.y + box.y, box.width, box.height);
    }
  };

  GameObject.prototype.checkCollision = function (otherObject) {
    if (!(otherObject instanceof GameObject)) {
      return false;
    }

    for (var i = 0; i < this.boundingBoxes.length; i++) {
      var boundingBox = this.boundingBoxes[i];
      if (!(boundingBox instanceof BoundingBox)) {
        continue;
      }
      if (checkBoxCollision.call(this, boundingBox, otherObject)) {
        return true;
      }
    }

    return false;
  };

  function checkBoxCollision (boundingBox, otherObject) {
    for (var i = 0; i < otherObject.boundingBoxes.length; i++) {
      var otherBox = otherObject.boundingBoxes[i];
      if (!(otherBox instanceof BoundingBox)) {
        continue;
      }
      if ((this.position.x + boundingBox.x + boundingBox.width) <= otherObject.position.x + otherBox.x) {
        continue;
      }
      if ((otherObject.position.x + otherBox.x + otherBox.width) <= this.position.x + boundingBox.x) {
        continue;
      }
      if ((this.position.y + boundingBox.y + boundingBox.height) <= otherObject.position.y + otherBox.y) {
        continue;
      }
      if ((otherObject.position.y + otherBox.y + otherBox.height) <= this.position.y + boundingBox.y) {
        continue;
      }

      return true;
    }

    return false;
  }

  return GameObject;
}());
