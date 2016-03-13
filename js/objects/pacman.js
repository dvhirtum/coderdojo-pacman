var PacMan = (function () {
  PacMan.prototype = new GameObject();
  PacMan.prototype.constructor = PacMan;

  var animations = {
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
    ]
  };

  var currentDirection = "";
  var activeAnimation = animations.idle;
  var activeAnimationState = 0;

  function PacMan (options) {
    GameObject.call(this, options);

    this.level = options.level;

    this.size = 32;
    this.speed = 7;

    this.boundingBoxes = [
      new BoundingBox(6, 6, 20, 20),
    ];
  }

  PacMan.prototype.draw = function () {
    this.context.drawImage(
      this.image,
      activeAnimation[activeAnimationState].x,
      activeAnimation[activeAnimationState].y,
      this.size,
      this.size,
      this.position.x,
      this.position.y,
      this.size,
      this.size);
  };

  PacMan.prototype.update = function (direction) {
    for (var i = 0; i < this.speed; i++) {
      updateSingleStep.call(this, direction);
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

    activeAnimationState++;
    if (activeAnimationState >= activeAnimation.length) {
      activeAnimationState = 0;
    }
  };

  function updateSingleStep(direction) {
    var oldPosition = {x: this.position.x, y: this.position.y};
    updatePosition.call(this, direction);

    if (hasCollidedWithWall.call(this)) {
      this.position.x = oldPosition.x;
      this.position.y = oldPosition.y;

      if (currentDirection === direction) {
        currentDirection = "";
      } else {
        updatePosition.call(this, currentDirection);

        if (hasCollidedWithWall.call(this)) {
          this.position.x = oldPosition.x;
          this.position.y = oldPosition.y;
          currentDirection = "";
        }
      }
    } else {
      currentDirection = direction;
    }
  }

  function getNewPosition (direction) {
    var position = {x: this.position.x, y: this.position.y};

    if (direction === "left") {
      position.x--;
    } else if (direction === "right") {
      position.x++;
    } else if (direction === "up") {
      position.y--;
    } else if (direction === "down") {
      position.y++;
    }

    if (position.x < 0) {
      position.x = this.level.width;
    } else if (position.x > this.level.width) {
      position.x = -1;
    }

    return position;
  }

  function updatePosition (direction) {
    this.position = getNewPosition.call(this, direction);
  }

  function hasCollidedWithWall () {
    for (var i = 0; i < this.level.gameObjects.length; i++) {
      if (this.level.gameObjects[i].checkCollision(this)) {
        return true;
      }
    }

    return false;
  }

  return PacMan;
}());
