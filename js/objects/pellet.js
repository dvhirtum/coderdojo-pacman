"use strict";

let makePellet = function (options) {
  let pellet = makeGameObject(options);

  let imagePosition = {x: 140, y: 0};

  pellet.setBoundingBoxes([
    makeBoundingBox(8, 8, 4, 4)
  ]);

  pellet.setImagePosition = function(position) {
    imagePosition = position;
  }

  pellet.draw = function () {
    pellet.getContext().drawImage(
      pellet.getImage(),
      imagePosition.x,
      imagePosition.y,
      20,
      20,
      pellet.getPosition().x,
      pellet.getPosition().y,
      20,
      20);
  };

  pellet.isPowerPellet = function () {
    return false;
  };

  return pellet;
};
