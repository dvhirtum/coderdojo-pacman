(function () {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      spriteImage = document.getElementById("sprites"),
      level,
      direction = "",
      now,
      last = window.timestamp(),
      dt = 0,
      step = 0.04;

  function draw() {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    level.draw();
  }

  function update() {
    level.update(direction);
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
    level = makeLevel({context: context, image: spriteImage, map: level01});

    canvas.width = level.getWidth();
    canvas.height = level.getHeight();

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
