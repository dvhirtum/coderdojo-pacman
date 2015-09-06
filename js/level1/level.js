var Level = (function () {
  var pelletPositions = [
    "pppppppppppp..pppppppppppp",
    "p....p.....p..p.....p....p",
    "p....p.....p..p.....p....p",
    "p....p.....p..p.....p....p",
    "pppppppppppppppppppppppppp",
    "p....p..p........p..p....p",
    "p....p..p........p..p....p",
    "pppppp..pppp..pppp..pppppp",
    ".....p..............p.....",
    ".....p..............p.....",
    ".....p..............p.....",
    ".....p..............p.....",
    ".....p..............p.....",
    ".....p..............p.....",
    ".....p..............p.....",
    ".....p..............p.....",
    ".....p..............p.....",
    ".....p..............p.....",
    ".....p..............p.....",
    "pppppppppppp..pppppppppppp",
    "p....p.....p..p.....p....p",
    "p....p.....p..p.....p....p",
    "ppp..ppppppp..ppppppp..ppp",
    "..p..p..p........p..p..p..",
    "..p..p..p........p..p..p..",
    "pppppp..pppp..pppp..pppppp",
    "p..........p..p..........p",
    "p..........p..p..........p",
    "pppppppppppppppppppppppppp"
  ];

  function Level (options) {
    this.x = options.x;
    this.y = options.y;

    this.gameObjects = [
      new Outline({context: options.context, image: options.image, x: this.x, y: this.y}),
      new Rectangle({context: options.context, image: options.image, x: this.x + 48, y: this.y + 48, width: 96, height: 72}),
      new Rectangle({context: options.context, image: options.image, x: this.x + 168, y: this.y + 48, width: 120, height: 72}),
      new Rectangle({context: options.context, image: options.image, x: this.x + 384, y: this.y + 48, width: 120, height: 72}),
      new Rectangle({context: options.context, image: options.image, x: this.x + 528, y: this.y + 48, width: 96, height: 72}),
      new Rectangle({context: options.context, image: options.image, x: this.x + 48, y: this.y + 144, width: 96, height: 48}),
      new Rectangle({context: options.context, image: options.image, x: this.x + 528, y: this.y + 144, width: 96, height: 48}),
      new Rectangle({context: options.context, image: options.image, x: this.x + 168, y: this.y + 360, width: 48, height: 120}),
      new Rectangle({context: options.context, image: options.image, x: this.x + 456, y: this.y + 360, width: 48, height: 120}),
      new Rectangle({context: options.context, image: options.image, x: this.x + 168, y: this.y + 504, width: 120, height: 48}),
      new Rectangle({context: options.context, image: options.image, x: this.x + 384, y: this.y + 504, width: 120, height: 48}),
      new TShape({context: options.context, image: options.image, x: this.x + 240, y: this.y + 144}),
      new TShape({context: options.context, image: options.image, x: this.x + 240, y: this.y + 432}),
      new TShape({context: options.context, image: options.image, x: this.x + 240, y: this.y + 576}),
      new GhostBox({context: options.context, image: options.image, x: this.x + 240, y: this.y + 288}),
      new HookShape1({context: options.context, image: options.image, x: this.x + 48, y: this.y + 504}),
      new HookShape2({context: options.context, image: options.image, x: this.x + 528, y: this.y + 504}),
      new InvertedT1({context: options.context, image: options.image, x: this.x + 48, y: this.y + 576}),
      new InvertedT2({context: options.context, image: options.image, x: this.x + 384, y: this.y + 576}),
      new FlippedT1({context: options.context, image: options.image, x: this.x + 168, y: this.y + 144}),
      new FlippedT2({context: options.context, image: options.image, x: this.x + 384, y: this.y + 144})
    ];

    this.pellets = [];
    for (var r = 0; r < pelletPositions.length; r++) {
      for (var c = 0; c < pelletPositions[r].length; c++) {
        if (pelletPositions[r][c] === "p") {
          this.pellets.push(
            new Pellet({context: options.context, image: options.image, x: this.x + (24 * (c + 1)), y: this.y + (24 * (r + 1))})
          );
        }
      }
    }
  }

  Level.prototype.draw = function () {
    for (var i = 0; i < this.gameObjects.length; i++) {
      this.gameObjects[i].draw();
    }
    for (var i = 0; i < this.pellets.length; i++) {
      this.pellets[i].draw();
    }
  };

  Level.prototype.update = function (pacman) {
    for (var i = this.pellets.length - 1; i >= 0; i--) {
      if (this.pellets[i].checkCollision(pacman)) {
        this.pellets.splice(i, 1);
      }
    }
  };

  return Level;
}());
