"use strict";

function makeLevel (options) {
  let context = options.context,
      image = options.image,
      map = options.map || [],
      backgroundObjects = [],
      pellets = [],
      pacman,
      ghosts = [];

  let level = {
    getHeight: function () { return map.length * 20; },
    getWidth: function () { return map[0].length * 20; },
    draw: function () {
      for (let i = 0; i < backgroundObjects.length; i++) {
        backgroundObjects[i].draw();
      }
      for (let i = 0; i < pellets.length; i++) {
        pellets[i].draw();
      }
      pacman.draw();
      for (var i = 0; i < ghosts.length; i++) {
        ghosts[i].draw();
      }
    },
    update: function (direction) {
      pacman.update(direction);
      for (var i = 0; i < ghosts.length; i++) {
        ghosts[i].update(pacman);
      }
      for (let i = pellets.length - 1; i >= 0; i--) {
        if (pellets[i].checkCollision(pacman)) {
          if (pellets[i] instanceof PowerPellet) {
            for (var j = 0; j < ghosts.length; j++) {
              ghosts[j].isScared();
            }
          }
          pellets.splice(i, 1);
        }
      }
    },
    checkWallCollision: function (otherObject) {
      for (var i = 0; i < backgroundObjects.length; i++) {
        if (backgroundObjects[i].checkCollision(otherObject)) {
          return true;
        }
      }

      return false;
    }
  };

  function initializeLevel() {
    for (let r = 0; r < map.length; r++) {
      for (let c = 0; c < map[r].length; c++) {
        let settings = { context, image, position: {x: c * 20, y: r * 20} };

        if (map[r][c] === ".") {
          pellets.push(
            new Pellet(settings)
          );
        } else if (map[r][c] === "*") {
          pellets.push(
            new PowerPellet(settings)
          );
        } else if (map[r][c] === "P") {
          pacman = new PacMan({context, image, level: level, position: {x: c * 20 + 4, y: r * 20 - 6}});
        } else if (map[r][c] === "G") {
          for (var i = 0; i < 4; i++) {
            ghosts.push(new Ghost({context, image, position: {x: c * 20 + (32 * i) - 4, y: r * 20 - 6}, ghostNumber: i}));
          }
        } else {
          if (map[r][c] === "-") {
            settings.imagePosition = {x: 100, y: 0};
            settings.boundingBoxes = [
              new BoundingBox(0, 6, 20, 8)
            ];
          } else if (map[r][c] === "|") {
            settings.imagePosition = {x: 40, y: 0};
            settings.boundingBoxes = [
              new BoundingBox(6, 0, 8, 20)
            ];
          } else if (map[r][c] === "1") {
            settings.imagePosition = {x: 20, y: 0};
            settings.boundingBoxes = [
              new BoundingBox(6, 6, 14, 8),
              new BoundingBox(6, 6, 8, 14)
            ];
          } else if (map[r][c] === "2") {
            settings.imagePosition = {x: 60, y: 0};
            settings.boundingBoxes = [
              new BoundingBox(0, 6, 14, 8),
              new BoundingBox(6, 6, 8, 14)
            ];
          } else if (map[r][c] === "3") {
            settings.imagePosition = {x: 120, y: 0};
            settings.boundingBoxes = [
              new BoundingBox(6, 6, 14, 8),
              new BoundingBox(6, 0, 8, 14)
            ];
          } else if (map[r][c] === "4") {
            settings.imagePosition = {x: 80, y: 0};
            settings.boundingBoxes = [
              new BoundingBox(0, 6, 14, 8),
              new BoundingBox(6, 0, 8, 14)
            ];
          } else if (map[r][c] === " ") {
            settings.imagePosition = {x: 0, y: 0};
          }
          backgroundObjects.push(
            new BackgroundObject(settings)
          );
        }
      }
    }
  }

  initializeLevel();

  return level;
}
