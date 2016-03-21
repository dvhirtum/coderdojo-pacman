"use strict";

function makeLevel (options) {
  let map = options.map || [],
      gameObjects = [],
      pellets = [];

  for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[r].length; c++) {
      let settings =
      {
        context: options.context,
        image: options.image,
        position: {x: c * 20, y: r * 20}
      };

      if (map[r][c] === "h") {
        settings.imagePosition = {x: 100, y: 0};
        settings.boundingBoxes = [
          new BoundingBox(0, 6, 20, 8)
        ];
        gameObjects.push(
          new BackgroundObject(settings)
        );
      } else if (map[r][c] === "v") {
        settings.imagePosition = {x: 40, y: 0};
        settings.boundingBoxes = [
          new BoundingBox(6, 0, 8, 20)
        ];
        gameObjects.push(
          new BackgroundObject(settings)
        );
      } else if (map[r][c] === "1") {
        settings.imagePosition = {x: 20, y: 0};
        settings.boundingBoxes = [
          new BoundingBox(6, 6, 14, 8),
          new BoundingBox(6, 6, 8, 14)
        ];
        gameObjects.push(
          new BackgroundObject(settings)
        );
      } else if (map[r][c] === "2") {
        settings.imagePosition = {x: 60, y: 0};
        settings.boundingBoxes = [
          new BoundingBox(0, 6, 14, 8),
          new BoundingBox(6, 6, 8, 14)
        ];
        gameObjects.push(
          new BackgroundObject(settings)
        );
      } else if (map[r][c] === "3") {
        settings.imagePosition = {x: 120, y: 0};
        settings.boundingBoxes = [
          new BoundingBox(6, 6, 14, 8),
          new BoundingBox(6, 0, 8, 14)
        ];
        gameObjects.push(
          new BackgroundObject(settings)
        );
      } else if (map[r][c] === "4") {
        settings.imagePosition = {x: 80, y: 0};
        settings.boundingBoxes = [
          new BoundingBox(0, 6, 14, 8),
          new BoundingBox(6, 0, 8, 14)
        ];
        gameObjects.push(
          new BackgroundObject(settings)
        );
      } else if (map[r][c] === " ") {
        settings.imagePosition = {x: 0, y: 0};
        gameObjects.push(
          new BackgroundObject(settings)
        );
      } else if (map[r][c] === ".") {
        pellets.push(
          new Pellet(settings)
        );
      } else if (map[r][c] === "p") {
        pellets.push(
          new PowerPellet(settings)
        );
      }
    }
  }

  return {
    getHeight: function () { return map.length * 20; },
    getWidth: function () { return map[0].length * 20; },
    draw: function () {
      for (let i = 0; i < gameObjects.length; i++) {
        gameObjects[i].draw();
      }
      for (let i = 0; i < pellets.length; i++) {
        pellets[i].draw();
      }
    },
    update: function (pacman, ghosts) {
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
      for (var i = 0; i < gameObjects.length; i++) {
        if (gameObjects[i].checkCollision(otherObject)) {
          return true;
        }
      }

      return false;
    }
  };
}
