function InvertedT2 (options) {
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
  }

  self.images = [
    {block: self.blocks.topLeft2, x: 3, y: 0},
    {block: self.blocks.topRight2, x: 4, y: 0},
    {block: self.blocks.leftVertical2, x: 3, y: 1},
    {block: self.blocks.rightVertical2, x: 4, y: 1},
    {block: self.blocks.leftVertical2, x: 3, y: 2},
    {block: self.blocks.rightVertical2, x: 4, y: 2},
    {block: self.blocks.topLeft2, x: 0, y: 3},
    {block: self.blocks.topHorizontal2, x: 1, y: 3},
    {block: self.blocks.topHorizontal2, x: 2, y: 3},
    {block: self.blocks.bottomRight3, x: 3, y: 3},
    {block: self.blocks.bottomLeft3, x: 4, y: 3},
    {block: self.blocks.topHorizontal2, x: 5, y: 3},
    {block: self.blocks.topHorizontal2, x: 6, y: 3},
    {block: self.blocks.topHorizontal2, x: 7, y: 3},
    {block: self.blocks.topHorizontal2, x: 8, y: 3},
    {block: self.blocks.topRight2, x: 9, y: 3},
    {block: self.blocks.bottomLeft2, x: 0, y: 4},
    {block: self.blocks.bottomHorizontal2, x: 1, y: 4},
    {block: self.blocks.bottomHorizontal2, x: 2, y: 4},
    {block: self.blocks.bottomHorizontal2, x: 3, y: 4},
    {block: self.blocks.bottomHorizontal2, x: 4, y: 4},
    {block: self.blocks.bottomHorizontal2, x: 5, y: 4},
    {block: self.blocks.bottomHorizontal2, x: 6, y: 4},
    {block: self.blocks.bottomHorizontal2, x: 7, y: 4},
    {block: self.blocks.bottomHorizontal2, x: 8, y: 4},
    {block: self.blocks.bottomRight2, x: 9, y: 4},
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
