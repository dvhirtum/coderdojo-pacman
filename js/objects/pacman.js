var PacMan = (function () {
  PacMan.prototype = new GameObject();
  PacMan.prototype.constructor = PacMan;

  function PacMan (options) {
    GameObject.call(this, options);

    this.animations = {
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

    this.currentDirection = "";
    this.activeAnimation = this.animations.idle;
    this.activeAnimationState = 0;

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
      this.activeAnimation[this.activeAnimationState].x,
      this.activeAnimation[this.activeAnimationState].y,
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

    if (this.currentDirection === "left") {
      this.activeAnimation = this.animations.left;
    } else if (this.currentDirection === "right") {
      this.activeAnimation = this.animations.right;
    } else if (this.currentDirection === "up") {
      this.activeAnimation = this.animations.up;
    } else if (this.currentDirection === "down") {
      this.activeAnimation = this.animations.down;
    } else {
      this.activeAnimation = this.animations.idle;
    }

    this.activeAnimationState++;
    if (this.activeAnimationState >= this.activeAnimation.length) {
      this.activeAnimationState = 0;
    }
  };

  function updateSingleStep(direction) {
    var oldPosition = {x: this.position.x, y: this.position.y};
    updatePosition.call(this, direction);

    if (hasCollidedWithWall.call(this)) {
      this.position.x = oldPosition.x;
      this.position.y = oldPosition.y;

      if (this.currentDirection === direction) {
        this.currentDirection = "";
      } else {
        updatePosition.call(this, this.currentDirection);

        if (hasCollidedWithWall.call(this)) {
          this.position.x = oldPosition.x;
          this.position.y = oldPosition.y;
          this.currentDirection = "";
        }
      }
    } else {
      this.currentDirection = direction;
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

    if (position.x + this.size < 0) {
      position.x = this.level.width;
    } else if (position.x > this.level.width) {
      position.x = -1 * this.size;
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
