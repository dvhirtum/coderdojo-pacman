(function () {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width,
      height,
      spriteImage = document.getElementById("sprites"),
      level,
      pacman,
      direction = "",
      now,
      last = window.timestamp(),
      dt = 0,
      step = 0.04;

  function draw() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    level.draw();
    pacman.draw();
  }

  function update() {
    pacman.update(direction);
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
    level = new Level({context: context, image: spriteImage});
    pacman = new PacMan({context: context, image: spriteImage, level: level, position: {x: 264, y: 454}});

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
