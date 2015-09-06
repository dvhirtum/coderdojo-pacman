FlippedT1.prototype = new BackgroundObject();
FlippedT1.prototype.constructor = FlippedT1;

function FlippedT1 (options) {
  BackgroundObject.call(this, options);

  this.images = [
    {block: this.blocks.topLeft2, x: 0, y: 0},
    {block: this.blocks.topRight2, x: 1, y: 0},
    {block: this.blocks.leftVertical2, x: 0, y: 1},
    {block: this.blocks.rightVertical2, x: 1, y: 1},
    {block: this.blocks.leftVertical2, x: 0, y: 2},
    {block: this.blocks.rightVertical2, x: 1, y: 2},
    {block: this.blocks.leftVertical2, x: 0, y: 3},
    {block: this.blocks.bottomLeft3, x: 1, y: 3},
    {block: this.blocks.topHorizontal2, x: 2, y: 3},
    {block: this.blocks.topHorizontal2, x: 3, y: 3},
    {block: this.blocks.topRight2, x: 4, y: 3},
    {block: this.blocks.leftVertical2, x: 0, y: 4},
    {block: this.blocks.topLeft3, x: 1, y: 4},
    {block: this.blocks.bottomHorizontal2, x: 2, y: 4},
    {block: this.blocks.bottomHorizontal2, x: 3, y: 4},
    {block: this.blocks.bottomRight2, x: 4, y: 4},
    {block: this.blocks.leftVertical2, x: 0, y: 5},
    {block: this.blocks.rightVertical2, x: 1, y: 5},
    {block: this.blocks.leftVertical2, x: 0, y: 6},
    {block: this.blocks.rightVertical2, x: 1, y: 6},
    {block: this.blocks.bottomLeft2, x: 0, y: 7},
    {block: this.blocks.bottomRight2, x: 1, y: 7}
  ];

  this.boundingBoxes = [
    new BoundingBox(12, 12, 24, 168),
    new BoundingBox(12, 12 + 72, 96, 24)
  ];
}
