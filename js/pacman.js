PacMan.prototype = new GameObject();
PacMan.prototype.constructor = PacMan;

function PacMan (options) {
  GameObject.call(this, options);

  this.size = 96;
  this.width = 44;
  this.x = 316;
  this.y = 592;

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

  this.activeAnimation = this.animations.left;
  this.activeAnimationState = 0;
}

PacMan.prototype.draw = function () {
  this.context.drawImage(
    this.image,
    this.activeAnimation[this.activeAnimationState].x,
    this.activeAnimation[this.activeAnimationState].y,
    this.size,
    this.size,
    this.x,
    this.y,
    this.width,
    this.width);
};

PacMan.prototype.update = function () {
  this.activeAnimationState++;
  if (this.activeAnimationState >= this.activeAnimation.length) {
    this.activeAnimationState = 0;
  }
};
