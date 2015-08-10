(function () {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width,
		height = canvas.height,
		snake_array,
		cellwidth = 10,
        now,
        last = window.timestamp(),
        dt = 0,
        step = 0.05;

    function draw() {
        context.fillStyle = "white";
        context.fillRect(0, 0, width, height);
        context.strokeStyle = "black";
        context.strokeRect(0, 0, width, height);
    }
    
	function update() {
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
        window.onEachFrame(run);
    }

	init();
}());