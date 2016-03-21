"use strict";

let makeBoundingBox = function (x, y, width, height) {
  return {
    x,
    y,
    width,
    height,
    checkCollision: function (position, otherPosition, otherBox) {
      if ((position.x + x + width) <= otherPosition.x + otherBox.x) {
        return false;
      }
      if ((otherPosition.x + otherBox.x + otherBox.width) <= position.x + x) {
        return false;
      }
      if ((position.y + y + height) <= otherPosition.y + otherBox.y) {
        return false;
      }
      if ((otherPosition.y + otherBox.y + otherBox.height) <= position.y + y) {
        return false;
      }

      return true;
    }
  };
};
