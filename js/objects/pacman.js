var PacMan = (function () {
  PacMan.prototype = new GameObject();
  PacMan.prototype.constructor = PacMan;

  var originalWidth = 92;
  var originalHeight = 88;
  var width = 40;
  var step = 6;
  var margin = 4;

  var animations = {
    idle: [
      {x: 0, y: 672}
    ],
    left: [
      {x: 0, y: 672},
      {x: 196, y: 288},
      {x: 4, y: 288},
      {x: 196, y: 288}
    ],
    right: [
      {x: 0, y: 672},
      {x: 580, y: 288},
      {x: 388, y: 288},
      {x: 580, y: 288}
    ],
    up: [
      {x: 0, y: 672},
      {x: 292, y: 288},
      {x: 100, y: 288},
      {x: 292, y: 288}
    ],
    down: [
      {x: 0, y: 672},
      {x: 676, y: 288},
      {x: 484, y: 288},
      {x: 676, y: 288}
    ]
  };

  var currentDirection = "";
  var activeAnimation = animations.idle;
  var activeAnimationState = 0;

  function PacMan (options) {
    GameObject.call(this, options);

    this.canvasWidth = options.canvasWidth;
    this.level = options.level;
    this.x = options.x;
    this.y = options.y;

    this.boundingBoxes = [
      new BoundingBox(0, 0, 40, 40),
    ];
  }

  PacMan.prototype.draw = function () {
    this.context.drawImage(
      this.image,
      activeAnimation[activeAnimationState].x,
      activeAnimation[activeAnimationState].y,
      originalWidth,
      originalHeight,
      this.x,
      this.y,
      width,
      width);
  };

  PacMan.prototype.update = function (direction) {
    var oldPosition = {x: this.x, y: this.y};
    updatePosition.call(this, direction);

    if (hasCollidedWithWall.call(this)) {
      this.x = oldPosition.x;
      this.y = oldPosition.y;

      if (currentDirection === direction) {
        currentDirection = "";
      } else {
        updatePosition.call(this, currentDirection);

        if (hasCollidedWithWall.call(this)) {
          this.x = oldPosition.x;
          this.y = oldPosition.y;
          currentDirection = "";
        }
      }
    } else {
      currentDirection = direction;
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

  function getNewPosition (direction) {
    var position = {x: this.x, y: this.y};

    if (direction === "left") {
      position.x -= step;
    } else if (direction === "right") {
      position.x += step;
    } else if (direction === "up") {
      position.y -= step;
    } else if (direction === "down") {
      position.y += step;
    }

    if (position.x + width < 0) {
      position.x = this.canvasWidth + margin;
    } else if (position.x > this.canvasWidth) {
      position.x = -1 * width - margin;
    }

    return position;
  }

  function updatePosition (direction) {
    var newPosition = getNewPosition.call(this, direction);
    this.x = newPosition.x;
    this.y = newPosition.y;
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
