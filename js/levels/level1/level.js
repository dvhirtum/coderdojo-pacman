var Level = (function () {
  var map = [
    "1hhhhhhhhhhhh21hhhhhhhhhhhh2",
    "v............vv............v",
    "v.1hh2.1hhh2.vv.1hhh2.1hh2.v",
    "vpv  v.v   v.vv.v   v.v  vpv",
    "v.3hh4.3hhh4.34.3hhh4.3hh4.v",
    "v..........................v",
    "v.1hh2.12.1hhhhhh2.12.1hh2.v",
    "v.3hh4.vv.3hh21hh4.vv.3hh4.v",
    "v......vv....vv....vv......v",
    "3hhhh2.v3hh2 vv 1hh4v.1hhhh4",
    "     v.v1hh4 34 3hh2v.v     ",
    "     v.vv          vv.v     ",
    "     v.vv 1hh  hh2 vv.v     ",
    "hhhhh4.34 v      v 34.3hhhhh",
    "      .   v      v   .      ",
    "hhhhh2.12 v      v 12.1hhhhh",
    "     v.vv 3hhhhhh4 vv.v     ",
    "     v.vv          vv.v     ",
    "     v.vv 1hhhhhh2 vv.v     ",
    "1hhhh4.34 3hh21hh4 34.3hhhh2",
    "v............vv............v",
    "v.1hh2.1hhh2.vv.1hhh2.1hh2.v",
    "v.3h2v.3hhh4.34.3hhh4.v1h4.v",
    "vp..vv.......  .......vv..pv",
    "3h2.vv.12.1hhhhhh2.12.vv.1h4",
    "1h4.34.vv.3hh21hh4.vv.34.3h2",
    "v......vv....vv....vv......v",
    "v.1hhhh43hh2.vv.1hh43hhhh2.v",
    "v.3hhhhhhhh4.34.3hhhhhhhh4.v",
    "v..........................v",
    "3hhhhhhhhhhhhhhhhhhhhhhhhhh4"
  ];

  function Level (options) {
    this.gameObjects = [];
    this.pellets = [];

    this.height = map.length * 20;
    this.width = map[0].length * 20;
    this.numberOfRows = map.length;
    this.numberOfColumns = map[0].length;

    for (var r = 0; r < map.length; r++) {
      for (var c = 0; c < map[r].length; c++) {
        if (map[r][c] === "h") {
          this.gameObjects.push(
            new BackgroundObject(
              {
                context: options.context,
                image: options.image,
                imagePosition: {x: 100, y: 0},
                position: {x: c * 20, y: r * 20}
              }
            )
          );
        } else if (map[r][c] === "v") {
          this.gameObjects.push(
            new BackgroundObject(
              {
                context: options.context,
                image: options.image,
                imagePosition: {x: 40, y: 0},
                position: {x: c * 20, y: r * 20}
              }
            )
          );
        } else if (map[r][c] === "1") {
          this.gameObjects.push(
            new BackgroundObject(
              {
                context: options.context,
                image: options.image,
                imagePosition: {x: 20, y: 0},
                position: {x: c * 20, y: r * 20}
              }
            )
          );
        } else if (map[r][c] === "2") {
          this.gameObjects.push(
            new BackgroundObject(
              {
                context: options.context,
                image: options.image,
                imagePosition: {x: 60, y: 0},
                position: {x: c * 20, y: r * 20}
              }
            )
          );
        } else if (map[r][c] === "3") {
          this.gameObjects.push(
            new BackgroundObject(
              {
                context: options.context,
                image: options.image,
                imagePosition: {x: 120, y: 0},
                position: {x: c * 20, y: r * 20}
              }
            )
          );
        } else if (map[r][c] === "4") {
          this.gameObjects.push(
            new BackgroundObject(
              {
                context: options.context,
                image: options.image,
                imagePosition: {x: 80, y: 0},
                position: {x: c * 20, y: r * 20}
              }
            )
          );
        } else if (map[r][c] === " ") {
          this.gameObjects.push(
            new BackgroundObject(
              {
                context: options.context,
                image: options.image,
                imagePosition: {x: 0, y: 0},
                position: {x: c * 20, y: r * 20},
                isSolid: false
              }
            )
          );
        } else if (map[r][c] === ".") {
          this.pellets.push(
            new Pellet(
              {
                context: options.context,
                image: options.image,
                position: {x: c * 20, y: r * 20}
              }
            )
          );
        } else if (map[r][c] === "p") {
          this.pellets.push(
            new PowerPellet(
              {
                context: options.context,
                image: options.image,
                position: {x: c * 20, y: r * 20}
              }
            )
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
