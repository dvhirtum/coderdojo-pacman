"use strict";

let makeGhost = function (options) {
  let ghost = makeGameObject(options);

  let ghostNumber = options.ghostNumber || 0;

  let scaredTime,
      maxScaredTime = 6,
      maxRecoveringTime = 4;

  let animations = {
    idle: [
      {x: 0, y: 52 + (ghostNumber * 32)},
      {x: 32, y: 52 + (ghostNumber * 32)}
    ],
    left: [
      {x: 128, y: 52 + (ghostNumber * 32)},
      {x: 160, y: 52 + (ghostNumber * 32)}
    ],
    right: [
      {x: 192, y: 52 + (ghostNumber * 32)},
      {x: 224, y: 52 + (ghostNumber * 32)}
    ],
    up: [
      {x: 256, y: 52 + (ghostNumber * 32)},
      {x: 288, y: 52 + (ghostNumber * 32)}
    ],
    down: [
      {x: 64, y: 52 + (ghostNumber * 32)},
      {x: 96, y: 52 + (ghostNumber * 32)}
    ],
    scared: [
      {x: 224, y: 180},
      {x: 256, y: 180}
    ],
    recovering: [
      {x: 224, y: 180},
      {x: 256, y: 180},
      {x: 224, y: 180},
      {x: 256, y: 180},
      {x: 160, y: 180},
      {x: 192, y: 180},
      {x: 160, y: 180},
      {x: 192, y: 180}
    ],
    eatenIdle: [
      {x: 0, y: 180}
    ],
    eatenLeft: [
      {x: 64, y: 180}
    ],
    eatenRight: [
      {x: 96, y: 180}
    ],
    eatenUp: [
      {x: 128, y: 180}
    ],
    eatenDown: [
      {x: 32, y: 180}
    ]
  };

  let activeAnimation = animations.idle,
      activeAnimationState = 0,
      animationCounter = 3,
      updateCount = 0;

  ghost.setBoundingBoxes([
    makeBoundingBox(0, 0, 32, 32),
  ]);

  ghost.isScared = function () {
    activeAnimation = animations.scared;
    scaredTime = window.timestamp();
  };

  ghost.draw = function () {
    if (activeAnimationState >= activeAnimation.length) {
      activeAnimationState = 0;
    }

    ghost.getContext().drawImage(
      ghost.getImage(),
      activeAnimation[activeAnimationState].x,
      activeAnimation[activeAnimationState].y,
      32,
      32,
      ghost.getPosition().x,
      ghost.getPosition().y,
      32,
      32);
  };

  ghost.update = function (pacman) {
    if (ghost.checkCollision(pacman)) {
      pacman.die();
    }

    if (scaredTime !== undefined) {
      var delta = (window.timestamp() - scaredTime) / 1000;
      if (delta <= maxScaredTime) {
        activeAnimation = animations.scared;
      } else if (delta > maxScaredTime && delta <= (maxScaredTime + maxRecoveringTime)) {
        activeAnimation = animations.recovering;
      } else {
        activeAnimation = animations.idle;
      }
    }

    updateCount++;
    if (updateCount >= animationCounter){
      updateCount = 0;
      activeAnimationState++;
    }
  };

  return ghost;
};
