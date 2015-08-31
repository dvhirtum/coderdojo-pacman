GhostBox.prototype = new BackgroundObject();
GhostBox.prototype.constructor = GhostBox;

function GhostBox (options) {
  BackgroundObject.call(this, options);

  this.images = [
    {block: this.blocks.topLeft4, x: 0, y: 0},
    {block: this.blocks.bottomHorizontal1, x: 1, y: 0},
    {block: this.blocks.doorwayLeft, x: 2, y: 0},
    {block: this.blocks.doorwayRight, x: 5, y: 0},
    {block: this.blocks.bottomHorizontal1, x: 6, y: 0},
    {block: this.blocks.topRight4, x: 7, y: 0},
    {block: this.blocks.rightVertical1, x: 0, y: 1},
    {block: this.blocks.leftVertical1, x: 7, y: 1},
    {block: this.blocks.rightVertical1, x: 0, y: 2},
    {block: this.blocks.leftVertical1, x: 7, y: 2},
    {block: this.blocks.rightVertical1, x: 0, y: 3},
    {block: this.blocks.leftVertical1, x: 7, y: 3},
    {block: this.blocks.bottomLeft4, x: 0, y: 4},
    {block: this.blocks.topHorizontal1, x: 1, y: 4},
    {block: this.blocks.topHorizontal1, x: 2, y: 4},
    {block: this.blocks.topHorizontal1, x: 3, y: 4},
    {block: this.blocks.topHorizontal1, x: 4, y: 4},
    {block: this.blocks.topHorizontal1, x: 5, y: 4},
    {block: this.blocks.topHorizontal1, x: 6, y: 4},
    {block: this.blocks.bottomRight4, x: 7, y: 4}
  ];
}
