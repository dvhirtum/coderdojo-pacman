"use strict";

let makeGameObject = function (options) {
  let context = options.context,
      image = options.image,
      position = options.position || {x: 0, y: 0},
      boundingBoxes = options.boundingBoxes || [];

  return {
    getContext: function () { return context; },
    getImage: function () { return image; },
    getPosition: function () { return Object.assign({}, position); },
    setPosition: function (pos) { position = Object.assign({}, pos); },
    getBoundingBoxes: function () { return boundingBoxes; },
    setBoundingBoxes: function (boxes) { boundingBoxes = boxes },
    draw: function () {
      for (var i = 0; i < boundingBoxes.length; i++) {
        var box = boundingBoxes[i];
        context.fillStyle = "magenta";
        context.fillRect(position.x + box.x, position.y + box.y, box.width, box.height);
      }
    },
    checkCollision: function (otherObject) {
      for (var i = 0; i < boundingBoxes.length; i++) {
        var boundingBox = boundingBoxes[i];
        var otherBoxes = otherObject.getBoundingBoxes();
        for (let i = 0; i < otherBoxes.length; i++) {
          if (boundingBox.checkCollision(position, otherObject.getPosition(), otherBoxes[i])) {
            return true;
          }
        }
      }

      return false;
    }
  }
}
