(function () {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width,
		height = canvas.height,
        cellsize = 24,
        scaleFactor = 0.25,
        spriteImage = document.getElementById("sprites"),
        level,
        pacman,
        now,
        last = window.timestamp(),
        dt = 0,
        step = 0.05;

    function draw() {
        context.fillStyle = "black";
        context.fillRect(0, 0, width, height);

        level.draw();
        pacman.draw();
    }

	function update() {
        pacman.update();
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
        level = new Level({
            context: context,
            image: spriteImage
        });
        pacman = new PacMan({
            context: context,
            image: spriteImage,
            scaleFactor: scaleFactor,
            cellsize: cellsize
        });

        window.onEachFrame(run);
    }

	init();
}());
