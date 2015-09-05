PacMan.prototype = new GameObject();
PacMan.prototype.constructor = PacMan;

function PacMan (options) {
  GameObject.call(this, options);

  this.canvasWidth = options.canvasWidth;
  this.level = options.level;
  this.x = options.x;
  this.y = options.y;
  this.originalWidth = 92;
  this.originalHeight = 88;
  this.width = 40;
  this.step = 6;

  this.animations = {
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

  this.currentDirection = "";
  this.activeAnimation = this.animations.idle;
  this.activeAnimationState = 0;

  this.updateBoundingBox();
}

PacMan.prototype.updateBoundingBox = function () {
  this.boundingBoxes = [
    new BoundingBox(this.x, this.y, 37, 37),
  ];
};

PacMan.prototype.getNewPosition = function (direction) {
  var position = {x: this.x, y: this.y};

  if (direction === "left") {
    position.x -= this.step;
  } else if (direction === "right") {
    position.x += this.step;
  } else if (direction === "up") {
    position.y -= this.step;
  } else if (direction === "down") {
    position.y += this.step;
  }

  if (position.x + this.width < 0) {
    position.x = this.canvasWidth + 4;
  } else if (position.x > this.canvasWidth) {
    position.x = -1 * this.width;
  }

  return position;
};

PacMan.prototype.draw = function () {
  this.context.drawImage(
    this.image,
    this.activeAnimation[this.activeAnimationState].x,
    this.activeAnimation[this.activeAnimationState].y,
    this.originalWidth,
    this.originalHeight,
    this.x,
    this.y,
    this.width,
    this.width);
};

PacMan.prototype.update = function (direction) {
  var newPosition = this.getNewPosition(direction);
  var testObject = new GameObject();
  testObject.boundingBoxes = [
    new BoundingBox(newPosition.x, newPosition.y, this.width, this.width)
  ];

  for (var i = 0; i < this.level.gameObjects.length; i++) {
    if (this.level.gameObjects[i].checkCollision(testObject)) {
      if (direction === this.currentDirection) {
        direction = "";
        this.activeAnimation = this.animations.idle;
      } else {
        direction = this.currentDirection;
        newPosition = this.getNewPosition(direction);
      }
    }
  }

  this.currentDirection = direction;
  if (this.currentDirection !== "") {
    this.x = newPosition.x;
    this.y = newPosition.y;
  }

  if (direction === "left") {
    this.activeAnimation = this.animations.left;
  } else if (direction === "right") {
    this.activeAnimation = this.animations.right;
  } else if (direction === "up") {
    this.activeAnimation = this.animations.up;
  } else if (direction === "down") {
    this.activeAnimation = this.animations.down;
  } else {
    this.activeAnimation = this.animations.idle;
  }

  this.updateBoundingBox();

  this.activeAnimationState++;
  if (this.activeAnimationState >= this.activeAnimation.length) {
    this.activeAnimationState = 0;
  }
};
