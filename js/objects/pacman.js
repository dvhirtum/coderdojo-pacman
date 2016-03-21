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

    this.currentDirection = "";
    this.activeAnimation = this.animations.idle;
    this.activeAnimationState = 0;

    this.level = options.level;

    this.isDying = false;
    this.isDead = false;

    this.size = 32;
    this.speed = 7;

    this.boundingBoxes = [
      new BoundingBox(0, 0, 32, 32),
    ];
  }

  PacMan.prototype.die = function () {
    if (!this.isDead) {
      this.isDying = true;
    }
  };

  PacMan.prototype.draw = function () {
    if (!this.isDead) {
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
    }
  };

  PacMan.prototype.update = function (direction) {
    if (this.isDying) {
      if (this.activeAnimation !== this.animations.dying) {
        this.activeAnimation = this.animations.dying;
        this.activeAnimationState = 0;
      } else if (this.activeAnimationState === this.activeAnimation.length - 1) {
        this.isDying = false;
        this.isDead = true;
      }
    }

    if (!(this.isDying || this.isDead)) {
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
    }

    this.activeAnimationState++;
    if (this.activeAnimationState >= this.activeAnimation.length) {
      this.activeAnimationState = 0;
    }
  };

  function updateSingleStep(direction) {
    var oldPosition = {x: this.position.x, y: this.position.y};
    updatePosition.call(this, direction);

    if (this.level.checkWallCollision(this)) {
      this.position.x = oldPosition.x;
      this.position.y = oldPosition.y;

      if (this.currentDirection === direction) {
        this.currentDirection = "";
      } else {
        updatePosition.call(this, this.currentDirection);

        if (this.level.checkWallCollision(this)) {
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
      position.x = this.level.getWidth();
    } else if (position.x > this.level.getWidth()) {
      position.x = -1 * this.size;
    }

    return position;
  }

  function updatePosition (direction) {
    this.position = getNewPosition.call(this, direction);
  }

  return PacMan;
}());
