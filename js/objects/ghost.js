var Ghost = (function () {
  Ghost.prototype = new GameObject();
  Ghost.prototype.constructor = Ghost;

  function Ghost (options) {
    GameObject.call(this, options);

    this.size = 32;
    this.ghostNumber = options.ghostNumber || 0;

    this.animations = {
      idle: [
        {x: 0, y: 52 + (this.ghostNumber * 32)},
        {x: 32, y: 52 + (this.ghostNumber * 32)}
      ],
      left: [
        {x: 128, y: 52 + (this.ghostNumber * 32)},
        {x: 160, y: 52 + (this.ghostNumber * 32)}
      ],
      right: [
        {x: 192, y: 52 + (this.ghostNumber * 32)},
        {x: 224, y: 52 + (this.ghostNumber * 32)}
      ],
      up: [
        {x: 256, y: 52 + (this.ghostNumber * 32)},
        {x: 288, y: 52 + (this.ghostNumber * 32)}
      ],
      down: [
        {x: 64, y: 52 + (this.ghostNumber * 32)},
        {x: 96, y: 52 + (this.ghostNumber * 32)}
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

    this.activeAnimation = this.animations.idle;
    this.activeAnimationState = 0;
    this.animationCounter = 3;
    this.updateCount = 0;

    this.boundingBoxes = [
      new BoundingBox(0, 0, 32, 32),
    ];
  }

  Ghost.prototype.draw = function () {
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

  Ghost.prototype.update = function (pacman) {
    if (this.checkCollision(pacman)) {
      pacman.die();
    }

    this.updateCount++;
    if (this.updateCount >= this.animationCounter){
      this.updateCount = 0;
      this.activeAnimationState++;
      if (this.activeAnimationState >= this.activeAnimation.length) {
        this.activeAnimationState = 0;
      }
    }
  };

  return Ghost;
}());
