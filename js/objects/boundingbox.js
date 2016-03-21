"use strict";

let makeBoundingBox = function BoundingBox (x, y, width, height) {
  const TYPE = "BoundingBox";

  return {
    x,
    y,
    width,
    height,
    getType: function () {
      return TYPE;
    }
  };
};
