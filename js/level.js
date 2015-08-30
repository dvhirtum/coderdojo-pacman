function Level (options) {	
    var self = this;
                    
    self.context = options.context;
    self.image = options.image;
    self.size = 48;
    self.cellsize = 24;    

    self.blocks = {
    	topLeft1: {x: 816, y: 192},
    	topRight1: {x: 768, y: 192},
    	bottomLeft1: {x: 1008, y: 192},
    	bottomRight1: {x: 960, y: 192},
    	topHorizontal1: {x: 1248, y: 192},
    	bottomHorizontal1: {x: 1344, y: 192},
    	leftVertical1: {x: 912, y: 192},
    	rightVertical1: {x: 864, y: 192},
    	topRightContinues: {x: 1296, y: 240},
    	topLeftContinues: {x: 1248, y: 240},
    	topLeft2: {x: 1104, y: 144},
    	topRight2: {x: 1056, y: 144},
    	bottomLeft2: {x: 1200, y: 240},
    	bottomRight2: {x: 1152, y: 240},
    	topHorizontal2: {x: 1440, y: 192},
    	bottomHorizontal2: {x: 960, y: 144},
    	leftVertical2: {x: 1200, y: 144},
    	rightVertical2: {x: 1152, y: 144},
    	topLeft3: {x: 864, y: 240},
    	topRight3: {x: 912, y: 240},
    	bottomLeft3: {x: 960, y: 240},
    	bottomRight3: {x: 1008, y: 240}
    }

    self.maze = [
    	[
    		{block: self.blocks.topLeft1, x: 0},
    		{block: self.blocks.topHorizontal1, x: 1},
    		{block: self.blocks.topHorizontal1, x: 2},
    		{block: self.blocks.topHorizontal1, x: 3},
    		{block: self.blocks.topHorizontal1, x: 4},
    		{block: self.blocks.topHorizontal1, x: 5},
    		{block: self.blocks.topHorizontal1, x: 6},
    		{block: self.blocks.topHorizontal1, x: 7},
    		{block: self.blocks.topHorizontal1, x: 8},
    		{block: self.blocks.topHorizontal1, x: 9},
    		{block: self.blocks.topHorizontal1, x: 10},
    		{block: self.blocks.topHorizontal1, x: 11},
    		{block: self.blocks.topHorizontal1, x: 12},
    		{block: self.blocks.topRightContinues, x: 13},
    		{block: self.blocks.topLeftContinues, x: 14},
    		{block: self.blocks.topHorizontal1, x: 15},
    		{block: self.blocks.topHorizontal1, x: 16},
    		{block: self.blocks.topHorizontal1, x: 17},
    		{block: self.blocks.topHorizontal1, x: 18},
    		{block: self.blocks.topHorizontal1, x: 19},
    		{block: self.blocks.topHorizontal1, x: 20},
    		{block: self.blocks.topHorizontal1, x: 21},
    		{block: self.blocks.topHorizontal1, x: 22},
    		{block: self.blocks.topHorizontal1, x: 23},
    		{block: self.blocks.topHorizontal1, x: 24},
    		{block: self.blocks.topHorizontal1, x: 25},
    		{block: self.blocks.topHorizontal1, x: 26},
    		{block: self.blocks.topRight1, x: 27}
    	],
    	[
    		{block: self.blocks.leftVertical1, x: 0},
    		{block: self.blocks.leftVertical2, x: 13},
    		{block: self.blocks.rightVertical2, x: 14},
    		{block: self.blocks.rightVertical1, x: 27}
    	],
    	[
    		{block: self.blocks.leftVertical1, x: 0},
    		{block: self.blocks.topLeft2, x: 2},
    		{block: self.blocks.topHorizontal2, x: 3},
    		{block: self.blocks.topHorizontal2, x: 4},
    		{block: self.blocks.topRight2, x: 5},
    		{block: self.blocks.topLeft2, x: 7},
    		{block: self.blocks.topHorizontal2, x: 8},
    		{block: self.blocks.topHorizontal2, x: 9},
    		{block: self.blocks.topHorizontal2, x: 10},
    		{block: self.blocks.topRight2, x: 11},
    		{block: self.blocks.leftVertical2, x: 13},
    		{block: self.blocks.rightVertical2, x: 14},
    		{block: self.blocks.topLeft2, x: 16},
    		{block: self.blocks.topHorizontal2, x: 17},
    		{block: self.blocks.topHorizontal2, x: 18},
    		{block: self.blocks.topHorizontal2, x: 19},
    		{block: self.blocks.topRight2, x: 20},
    		{block: self.blocks.topLeft2, x: 22},
    		{block: self.blocks.topHorizontal2, x: 23},
    		{block: self.blocks.topHorizontal2, x: 24},
    		{block: self.blocks.topRight2, x: 25},
    		{block: self.blocks.rightVertical1, x: 27}
    	],
    	[
    		{block: self.blocks.leftVertical1, x: 0},
    		{block: self.blocks.leftVertical2, x: 2},
    		{block: self.blocks.rightVertical2, x: 5},
    		{block: self.blocks.leftVertical2, x: 7},
    		{block: self.blocks.rightVertical2, x: 11},
    		{block: self.blocks.leftVertical2, x: 13},
    		{block: self.blocks.rightVertical2, x: 14},
    		{block: self.blocks.leftVertical2, x: 16},
    		{block: self.blocks.rightVertical2, x: 20},
    		{block: self.blocks.leftVertical2, x: 22},
    		{block: self.blocks.rightVertical2, x: 25},
    		{block: self.blocks.rightVertical1, x: 27}
    	],
    	[
    		{block: self.blocks.leftVertical1, x: 0},
    		{block: self.blocks.bottomLeft2, x: 2},
    		{block: self.blocks.bottomHorizontal2, x: 3},
    		{block: self.blocks.bottomHorizontal2, x: 4},
    		{block: self.blocks.bottomRight2, x: 5},
    		{block: self.blocks.bottomLeft2, x: 7},
    		{block: self.blocks.bottomHorizontal2, x: 8},
    		{block: self.blocks.bottomHorizontal2, x: 9},
    		{block: self.blocks.bottomHorizontal2, x: 10},
    		{block: self.blocks.bottomRight2, x: 11},
    		{block: self.blocks.bottomLeft2, x: 13},
    		{block: self.blocks.bottomRight2, x: 14},
    		{block: self.blocks.bottomLeft2, x: 16},
    		{block: self.blocks.bottomHorizontal2, x: 17},
    		{block: self.blocks.bottomHorizontal2, x: 18},
    		{block: self.blocks.bottomHorizontal2, x: 19},
    		{block: self.blocks.bottomRight2, x: 20},
    		{block: self.blocks.bottomLeft2, x: 22},
    		{block: self.blocks.bottomHorizontal2, x: 23},
    		{block: self.blocks.bottomHorizontal2, x: 24},
    		{block: self.blocks.bottomRight2, x: 25},
    		{block: self.blocks.rightVertical1, x: 27}
    	],
    	[
    		{block: self.blocks.leftVertical1, x: 0},
    		{block: self.blocks.rightVertical1, x: 27}
    	],
    	[
    		{block: self.blocks.leftVertical1, x: 0},
    		{block: self.blocks.topLeft2, x: 2},
    		{block: self.blocks.topHorizontal2, x: 3},
    		{block: self.blocks.topHorizontal2, x: 4},
    		{block: self.blocks.topRight2, x: 5},
    		{block: self.blocks.topLeft2, x: 7},
    		{block: self.blocks.topRight2, x: 8},
    		{block: self.blocks.topLeft2, x: 10},
    		{block: self.blocks.topHorizontal2, x: 11},
    		{block: self.blocks.topHorizontal2, x: 12},
    		{block: self.blocks.topHorizontal2, x: 13},
    		{block: self.blocks.topHorizontal2, x: 14},
    		{block: self.blocks.topHorizontal2, x: 15},
    		{block: self.blocks.topHorizontal2, x: 16},
    		{block: self.blocks.topRight2, x: 17},
    		{block: self.blocks.topLeft2, x: 19},
    		{block: self.blocks.topRight2, x: 20},
    		{block: self.blocks.topLeft2, x: 22},
    		{block: self.blocks.topHorizontal2, x: 23},
    		{block: self.blocks.topHorizontal2, x: 24},
    		{block: self.blocks.topRight2, x: 25},
    		{block: self.blocks.rightVertical1, x: 27}
    	],
    	[
    		{block: self.blocks.leftVertical1, x: 0},
    		{block: self.blocks.bottomLeft2, x: 2},
    		{block: self.blocks.bottomHorizontal2, x: 3},
    		{block: self.blocks.bottomHorizontal2, x: 4},
    		{block: self.blocks.bottomRight2, x: 5},
    		{block: self.blocks.leftVertical2, x: 7},
    		{block: self.blocks.rightVertical2, x: 8},
    		{block: self.blocks.bottomLeft2, x: 10},
    		{block: self.blocks.bottomHorizontal2, x: 11},
    		{block: self.blocks.bottomHorizontal2, x: 12},
    		{block: self.blocks.topRight3, x: 13},
    		{block: self.blocks.topLeft3, x: 14},
    		{block: self.blocks.bottomHorizontal2, x: 15},
    		{block: self.blocks.bottomHorizontal2, x: 16},
    		{block: self.blocks.bottomRight2, x: 17},
    		{block: self.blocks.leftVertical2, x: 19},
    		{block: self.blocks.rightVertical2, x: 20},
    		{block: self.blocks.bottomLeft2, x: 22},
    		{block: self.blocks.bottomHorizontal2, x: 23},
    		{block: self.blocks.bottomHorizontal2, x: 24},
    		{block: self.blocks.bottomRight2, x: 25},
    		{block: self.blocks.rightVertical1, x: 27}
    	],
    	[
    		{block: self.blocks.leftVertical1, x: 0},
    		{block: self.blocks.leftVertical2, x: 7},
    		{block: self.blocks.rightVertical2, x: 8},
    		{block: self.blocks.leftVertical2, x: 13},
    		{block: self.blocks.rightVertical2, x: 14},
    		{block: self.blocks.leftVertical2, x: 19},
    		{block: self.blocks.rightVertical2, x: 20},
    		{block: self.blocks.rightVertical1, x: 27}
    	],
    	[
    		{block: self.blocks.bottomLeft1, x: 0},
    		{block: self.blocks.bottomHorizontal1, x: 1},
    		{block: self.blocks.bottomHorizontal1, x: 2},
    		{block: self.blocks.bottomHorizontal1, x: 3},
    		{block: self.blocks.bottomHorizontal1, x: 4},
    		{block: self.blocks.topRight2, x: 5},
    		{block: self.blocks.leftVertical2, x: 7},
    		{block: self.blocks.bottomLeft3, x: 8},
    		{block: self.blocks.topHorizontal2, x: 9},
    		{block: self.blocks.topHorizontal2, x: 10},
    		{block: self.blocks.topRight2, x: 11},
    		{block: self.blocks.leftVertical2, x: 13},
    		{block: self.blocks.rightVertical2, x: 14},
    		{block: self.blocks.topLeft2, x: 16},
    		{block: self.blocks.topHorizontal2, x: 17},
    		{block: self.blocks.topHorizontal2, x: 18},
    		{block: self.blocks.bottomRight3, x: 19},
    		{block: self.blocks.rightVertical2, x: 20},
    		{block: self.blocks.topLeft2, x: 22},
    		{block: self.blocks.bottomHorizontal1, x: 23},
    		{block: self.blocks.bottomHorizontal1, x: 24},
    		{block: self.blocks.bottomHorizontal1, x: 25},
    		{block: self.blocks.bottomHorizontal1, x: 26},
    		{block: self.blocks.bottomRight1, x: 27}
    	],
    	[
    		{block: self.blocks.leftVertical1, x: 5},
    		{block: self.blocks.leftVertical2, x: 7},
    		{block: self.blocks.topLeft3, x: 8},
    		{block: self.blocks.bottomHorizontal2, x: 9},
    		{block: self.blocks.bottomHorizontal2, x: 10},
    		{block: self.blocks.bottomRight2, x: 11},
    		{block: self.blocks.bottomLeft2, x: 13},
    		{block: self.blocks.bottomRight2, x: 14},
    		{block: self.blocks.bottomLeft2, x: 16},
    		{block: self.blocks.bottomHorizontal2, x: 17},
    		{block: self.blocks.bottomHorizontal2, x: 18},
    		{block: self.blocks.topRight3, x: 19},
    		{block: self.blocks.rightVertical2, x: 20},
    		{block: self.blocks.rightVertical1, x: 22}
    	],
    	[
    		{block: self.blocks.leftVertical1, x: 5},
    		{block: self.blocks.leftVertical2, x: 7},
    		{block: self.blocks.rightVertical2, x: 8},
    		{block: self.blocks.leftVertical2, x: 19},
    		{block: self.blocks.rightVertical2, x: 20},
    		{block: self.blocks.rightVertical1, x: 22}
    	]
    ]

    function drawBlock (block, x, y) {
        self.context.drawImage(
           self.image,
           block.x,
           block.y,
           self.size,
           self.size,
           x * self.cellsize,
           (y + 2) * self.cellsize,
           self.cellsize,
           self.cellsize);
    }



    return {
    	draw: function () {
    		for (var r = 0; r < self.maze.length; r++) {
    			for (var i = 0; i < self.maze[r].length; i++) {
    				drawBlock(self.maze[r][i].block, self.maze[r][i].x, r);
    			}
    		}	
    	}
    };
}