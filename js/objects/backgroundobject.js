"use strict";

let makeBackgroundObject = function (options) {
  let backgroundObject = makeGameObject(options);

  let imagePosition = options.imagePosition || {x: 0, y: 0};

  backgroundObject.draw = function () {
    backgroundObject.getContext().drawImage(
      backgroundObject.getImage(),
      imagePosition.x,
      imagePosition.y,
      20,
      20,
      backgroundObject.getPosition().x,
      backgroundObject.getPosition().y,
      20,
      20);
  };

  return backgroundObject;
};
