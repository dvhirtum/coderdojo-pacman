"use strict";

let makePacMan = function (options) {
  let pacMan = makeGameObject(options);

  let animations = {
    idle: [
      {x: 0, y: 20}
    ],
    left: [
      {x: 0, y: 20},
      {x: 96, y: 20},
      {x: 128, y: 20},
      {x: 96, y: 20}
    ],
    right: [
      {x: 0, y: 20},
      {x: 32, y: 20},
      {x: 64, y: 20},
      {x: 32, y: 20}
    ],
    up: [
      {x: 0, y: 20},
      {x: 224, y: 20},
      {x: 256, y: 20},
      {x: 224, y: 20}
    ],
    down: [
      {x: 0, y: 20},
      {x: 160, y: 20},
      {x: 192, y: 20},
      {x: 160, y: 20}
    ],
    dying: [
      {x: 0, y: 20},
      {x: 0, y: 212},
      {x: 32, y: 212},
      {x: 64, y: 212},
      {x: 96, y: 212},
      {x: 128, y: 212},
      {x: 160, y: 212},
      {x: 192, y: 212},
      {x: 224, y: 212},
      {x: 0, y: 244},
      {x: 32, y: 244},
      {x: 64, y: 244},
      {x: 96, y: 244},
      {x: 128, y: 244},
      {x: 160, y: 244}
    ]
  };

  let currentDirection = "",
      activeAnimation = animations.idle,
      activeAnimationState = 0;

  let level = options.level;

  let isDying = false,
      isDead = false;

  let speed = 7;

  pacMan.setBoundingBoxes([
    makeBoundingBox(0, 0, 32, 32),
  ]);

  pacMan.die = function () {
    if (!isDead) {
      isDying = true;
    }
  };

  pacMan.draw = function () {
    if (!isDead) {
      pacMan.getContext().drawImage(
        pacMan.getImage(),
        activeAnimation[activeAnimationState].x,
        activeAnimation[activeAnimationState].y,
        32,
        32,
        pacMan.getPosition().x,
        pacMan.getPosition().y,
        32,
        32);
    }
  };

  pacMan.update = function (direction) {
    if (isDying) {
      if (activeAnimation !== animations.dying) {
        activeAnimation = animations.dying;
        activeAnimationState = 0;
      } else if (activeAnimationState === activeAnimation.length - 1) {
        isDying = false;
        isDead = true;
      }
    }

    if (!(isDying || isDead)) {
      for (var i = 0; i < speed; i++) {
        updateSingleStep(direction);
      }

      if (currentDirection === "left") {
        activeAnimation = animations.left;
      } else if (currentDirection === "right") {
        activeAnimation = animations.right;
      } else if (currentDirection === "up") {
        activeAnimation = animations.up;
      } else if (currentDirection === "down") {
        activeAnimation = animations.down;
      } else {
        activeAnimation = animations.idle;
      }
    }

    activeAnimationState++;
    if (activeAnimationState >= activeAnimation.length) {
      activeAnimationState = 0;
    }
  };

  function updateSingleStep(direction) {
    let oldPosition = pacMan.getPosition();
    pacMan.setPosition(getNewPosition(direction));

    if (level.checkWallCollision(pacMan)) {
      pacMan.setPosition(oldPosition);

      if (currentDirection === direction) {
        currentDirection = "";
      } else {
        pacMan.setPosition(getNewPosition(currentDirection));

        if (level.checkWallCollision(pacMan)) {
          pacMan.setPosition(oldPosition);
          currentDirection = "";
        }
      }
    } else {
      currentDirection = direction;
    }
  }

  function getNewPosition (direction) {
    let position = pacMan.getPosition();

    if (direction === "left") {
      position.x--;
    } else if (direction === "right") {
      position.x++;
    } else if (direction === "up") {
      position.y--;
    } else if (direction === "down") {
      position.y++;
    }

    if (position.x + 32 < 0) {
      position.x = level.getWidth();
    } else if (position.x > level.getWidth()) {
      position.x = -1 * 32;
    }

    if (position.y + 32 < 0) {
      position.y = level.getHeight();
    } else if (position.y > level.getHeight()) {
      position.y = -1 * 32;
    }

    return position;
  }

  return pacMan;
};
