function Outline (options) {
  var self = this;

  self.context = options.context;
  self.image = options.image;
  self.x = options.x;
  self.y = options.y;
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
    topLeftContinues1: {x: 1248, y: 240},
    topRightContinues1: {x: 1296, y: 240},
    topLeftContinues2: {x: 1200, y: 192},
    topRightContinues2: {x: 1152, y: 192},
    bottomLeftContinues2: {x: 1104, y: 192},
    bottomRightContinues2: {x: 1056, y: 192},
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
    bottomRight3: {x: 1008, y: 240},
    topLeft4: {x: 1392, y: 144},
    topRight4: {x: 1344, y: 144},
    bottomLeft4: {x: 1488, y: 144},
    bottomRight4: {x: 1440, y: 144},
    doorwayLeft: {x: 816, y: 240},
    doorwayRight: {x: 768, y: 240}
  };

  self.images = [
    {block: self.blocks.topLeft1, x: 0, y: 0},
    {block: self.blocks.topHorizontal1, x: 1, y: 0},
    {block: self.blocks.topHorizontal1, x: 2, y: 0},
    {block: self.blocks.topHorizontal1, x: 3, y: 0},
    {block: self.blocks.topHorizontal1, x: 4, y: 0},
    {block: self.blocks.topHorizontal1, x: 5, y: 0},
    {block: self.blocks.topHorizontal1, x: 6, y: 0},
    {block: self.blocks.topHorizontal1, x: 7, y: 0},
    {block: self.blocks.topHorizontal1, x: 8, y: 0},
    {block: self.blocks.topHorizontal1, x: 9, y: 0},
    {block: self.blocks.topHorizontal1, x: 10, y: 0},
    {block: self.blocks.topHorizontal1, x: 11, y: 0},
    {block: self.blocks.topHorizontal1, x: 12, y: 0},
    {block: self.blocks.topRightContinues1, x: 13, y: 0},
    {block: self.blocks.topLeftContinues1, x: 14, y: 0},
    {block: self.blocks.topHorizontal1, x: 15, y: 0},
    {block: self.blocks.topHorizontal1, x: 16, y: 0},
    {block: self.blocks.topHorizontal1, x: 17, y: 0},
    {block: self.blocks.topHorizontal1, x: 18, y: 0},
    {block: self.blocks.topHorizontal1, x: 19, y: 0},
    {block: self.blocks.topHorizontal1, x: 20, y: 0},
    {block: self.blocks.topHorizontal1, x: 21, y: 0},
    {block: self.blocks.topHorizontal1, x: 22, y: 0},
    {block: self.blocks.topHorizontal1, x: 23, y: 0},
    {block: self.blocks.topHorizontal1, x: 24, y: 0},
    {block: self.blocks.topHorizontal1, x: 25, y: 0},
    {block: self.blocks.topHorizontal1, x: 26, y: 0},
    {block: self.blocks.topRight1, x: 27, y: 0},
    {block: self.blocks.leftVertical1, x: 0, y: 1},
    {block: self.blocks.leftVertical2, x: 13, y: 1},
    {block: self.blocks.rightVertical2, x: 14, y: 1},
    {block: self.blocks.rightVertical1, x: 27, y: 1},
    {block: self.blocks.leftVertical1, x: 0, y: 2},
    {block: self.blocks.leftVertical2, x: 13, y: 2},
    {block: self.blocks.rightVertical2, x: 14, y: 2},
    {block: self.blocks.rightVertical1, x: 27, y: 2},
    {block: self.blocks.leftVertical1, x: 0, y: 3},
    {block: self.blocks.leftVertical2, x: 13, y: 3},
    {block: self.blocks.rightVertical2, x: 14, y: 3},
    {block: self.blocks.rightVertical1, x: 27, y: 3},
    {block: self.blocks.leftVertical1, x: 0, y: 4},
    {block: self.blocks.bottomLeft2, x: 13, y: 4},
    {block: self.blocks.bottomRight2, x: 14, y: 4},
    {block: self.blocks.rightVertical1, x: 27, y: 4},
    {block: self.blocks.leftVertical1, x: 0, y: 5},
    {block: self.blocks.rightVertical1, x: 27, y: 5},
    {block: self.blocks.leftVertical1, x: 0, y: 6},
    {block: self.blocks.rightVertical1, x: 27, y: 6},
    {block: self.blocks.leftVertical1, x: 0, y: 7},
    {block: self.blocks.rightVertical1, x: 27, y: 7},
    {block: self.blocks.leftVertical1, x: 0, y: 8},
    {block: self.blocks.rightVertical1, x: 27, y: 8},
    {block: self.blocks.bottomLeft1, x: 0, y: 9},
    {block: self.blocks.bottomHorizontal1, x: 1, y: 9},
    {block: self.blocks.bottomHorizontal1, x: 2, y: 9},
    {block: self.blocks.bottomHorizontal1, x: 3, y: 9},
    {block: self.blocks.bottomHorizontal1, x: 4, y: 9},
    {block: self.blocks.topRight2, x: 5, y: 9},
    {block: self.blocks.topLeft2, x: 22, y: 9},
    {block: self.blocks.bottomHorizontal1, x: 23, y: 9},
    {block: self.blocks.bottomHorizontal1, x: 24, y: 9},
    {block: self.blocks.bottomHorizontal1, x: 25, y: 9},
    {block: self.blocks.bottomHorizontal1, x: 26, y: 9},
    {block: self.blocks.bottomRight1, x: 27, y: 9},
    {block: self.blocks.leftVertical1, x: 5, y: 10},
    {block: self.blocks.rightVertical1, x: 22, y: 10},
    {block: self.blocks.leftVertical1, x: 5, y: 11},
    {block: self.blocks.rightVertical1, x: 22, y: 11},
    {block: self.blocks.leftVertical1, x: 5, y: 12},
    {block: self.blocks.rightVertical1, x: 22, y: 12},
    {block: self.blocks.topHorizontal1, x: 0, y: 13},
    {block: self.blocks.topHorizontal1, x: 1, y: 13},
    {block: self.blocks.topHorizontal1, x: 2, y: 13},
    {block: self.blocks.topHorizontal1, x: 3, y: 13},
    {block: self.blocks.topHorizontal1, x: 4, y: 13},
    {block: self.blocks.bottomRight2, x: 5, y: 13},
    {block: self.blocks.bottomLeft2, x: 22, y: 13},
    {block: self.blocks.topHorizontal1, x: 23, y: 13},
    {block: self.blocks.topHorizontal1, x: 24, y: 13},
    {block: self.blocks.topHorizontal1, x: 25, y: 13},
    {block: self.blocks.topHorizontal1, x: 26, y: 13},
    {block: self.blocks.topHorizontal1, x: 27, y: 13},
    {block: self.blocks.bottomHorizontal1, x: 0, y: 15},
    {block: self.blocks.bottomHorizontal1, x: 1, y: 15},
    {block: self.blocks.bottomHorizontal1, x: 2, y: 15},
    {block: self.blocks.bottomHorizontal1, x: 3, y: 15},
    {block: self.blocks.bottomHorizontal1, x: 4, y: 15},
    {block: self.blocks.topRight2, x: 5, y: 15},
    {block: self.blocks.topLeft2, x: 22, y: 15},
    {block: self.blocks.bottomHorizontal1, x: 23, y: 15},
    {block: self.blocks.bottomHorizontal1, x: 24, y: 15},
    {block: self.blocks.bottomHorizontal1, x: 25, y: 15},
    {block: self.blocks.bottomHorizontal1, x: 26, y: 15},
    {block: self.blocks.bottomHorizontal1, x: 27, y: 15},
    {block: self.blocks.leftVertical1, x: 5, y: 16},
    {block: self.blocks.rightVertical1, x: 22, y: 16},
    {block: self.blocks.leftVertical1, x: 5, y: 17},
    {block: self.blocks.rightVertical1, x: 22, y: 17},
    {block: self.blocks.leftVertical1, x: 5, y: 18},
    {block: self.blocks.rightVertical1, x: 22, y: 18},
    {block: self.blocks.topLeft1, x: 0, y: 19},
    {block: self.blocks.topHorizontal1, x: 1, y: 19},
    {block: self.blocks.topHorizontal1, x: 2, y: 19},
    {block: self.blocks.topHorizontal1, x: 3, y: 19},
    {block: self.blocks.topHorizontal1, x: 4, y: 19},
    {block: self.blocks.bottomRight2, x: 5, y: 19},
    {block: self.blocks.bottomLeft2, x: 22, y: 19},
    {block: self.blocks.topHorizontal1, x: 23, y: 19},
    {block: self.blocks.topHorizontal1, x: 24, y: 19},
    {block: self.blocks.topHorizontal1, x: 25, y: 19},
    {block: self.blocks.topHorizontal1, x: 26, y: 19},
    {block: self.blocks.topRight1, x: 27, y: 19},
    {block: self.blocks.leftVertical1, x: 0, y: 20},
    {block: self.blocks.rightVertical1, x: 27, y: 20},
    {block: self.blocks.leftVertical1, x: 0, y: 21},
    {block: self.blocks.rightVertical1, x: 27, y: 21},
    {block: self.blocks.leftVertical1, x: 0, y: 22},
    {block: self.blocks.rightVertical1, x: 27, y: 22},
    {block: self.blocks.leftVertical1, x: 0, y: 23},
    {block: self.blocks.rightVertical1, x: 27, y: 23},
    {block: self.blocks.bottomLeftContinues2, x: 0, y: 24},
    {block: self.blocks.topHorizontal2, x: 1, y: 24},
    {block: self.blocks.topRight2, x: 2, y: 24},
    {block: self.blocks.topLeft2, x: 25, y: 24},
    {block: self.blocks.topHorizontal2, x: 26, y: 24},
    {block: self.blocks.bottomRightContinues2, x: 27, y: 24},
    {block: self.blocks.topLeftContinues2, x: 0, y: 25},
    {block: self.blocks.bottomHorizontal2, x: 1, y: 25},
    {block: self.blocks.bottomRight2, x: 2, y: 25},
    {block: self.blocks.bottomLeft2, x: 25, y: 25},
    {block: self.blocks.bottomHorizontal2, x: 26, y: 25},
    {block: self.blocks.topRightContinues2, x: 27, y: 25},
    {block: self.blocks.leftVertical1, x: 0, y: 26},
    {block: self.blocks.rightVertical1, x: 27, y: 26},
    {block: self.blocks.leftVertical1, x: 0, y: 27},
    {block: self.blocks.rightVertical1, x: 27, y: 27},
    {block: self.blocks.leftVertical1, x: 0, y: 28},
    {block: self.blocks.rightVertical1, x: 27, y: 28},
    {block: self.blocks.leftVertical1, x: 0, y: 29},
    {block: self.blocks.rightVertical1, x: 27, y: 29},
    {block: self.blocks.bottomLeft1, x: 0, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 1, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 2, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 3, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 4, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 5, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 6, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 7, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 8, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 9, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 10, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 11, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 12, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 13, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 14, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 15, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 16, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 17, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 18, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 19, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 20, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 21, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 22, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 23, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 24, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 25, y: 30},
    {block: self.blocks.bottomHorizontal1, x: 26, y: 30},
    {block: self.blocks.bottomRight1, x: 27, y: 30}
  ];

  function drawBlock (block, x, y) {
    self.context.drawImage(
      self.image,
      block.x,
      block.y,
      self.size,
      self.size,
      self.x + x * self.cellsize,
      self.y + y * self.cellsize,
      self.cellsize,
      self.cellsize);
  }

  return {
    draw: function () {
      for (var i = 0; i < self.images.length; i++) {
        drawBlock(self.images[i].block, self.images[i].x, self.images[i].y);
      }
    }
  };
}