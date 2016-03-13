(function () {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width,
      height,
      spriteImage = document.getElementById("sprites"),
      level,
      pacman,
      ghosts,
      direction = "",
      now,
      last = window.timestamp(),
      dt = 0,
      step = 0.04;

  function draw() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    level.draw();
    for (var i = 0; i < ghosts.length; i++) {
      ghosts[i].draw();
    }
    pacman.draw();
  }

  function update() {
    pacman.update(direction);
    for (var i = 0; i < ghosts.length; i++) {
      ghosts[i].update();
    }
    level.update(pacman);
  }

  function run() {
    now = window.timestamp();
    dt = dt + Math.min(1, (now - last) / 1000);

    while (dt > step) {
      dt = dt - step;
      update();
    }

    last = now;

    draw();
  }

  function init() {
    level = new Level({context: context, image: spriteImage, map: level01});
    pacman = new PacMan({context: context, image: spriteImage, level: level, position: {x: 264, y: 454}});
    ghosts = [];
    for (var i = 0; i < 4; i++) {
      ghosts.push(new Ghost({context: context, image: spriteImage, position: {x: 216 + (32 * i), y: 294}, ghostNumber: i}));
    }

    width = level.width;
    height = level.height;
    canvas.width = level.width;
    canvas.height = level.height;

    window.onEachFrame(run);
  }

  document.onkeydown = function (e) {
    var key = e.which;

    if (key === 37) {
      direction = "left";
    } else if (key === 38) {
      direction = "up";
    } else if (key === 39) {
      direction = "right";
    } else if (key === 40) {
      direction = "down";
    }
  };

  init();
}());
