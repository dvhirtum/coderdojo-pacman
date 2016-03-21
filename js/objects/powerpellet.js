"use strict";

let makePowerPellet = function (options) {
  let powerPellet = makePellet(options);

  powerPellet.setImagePosition({x: 160, y: 0});

  powerPellet.setBoundingBoxes([
    makeBoundingBox(4, 4, 12, 12)
  ]);

  powerPellet.isPowerPellet = function () {
    return true;
  };

  return powerPellet;
};
