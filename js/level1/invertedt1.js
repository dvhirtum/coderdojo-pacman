InvertedT1.prototype = new BackgroundObject();
InvertedT1.prototype.constructor = InvertedT1;

function InvertedT1 (options) {
  BackgroundObject.call(this, options);

  this.images = [
    {block: this.blocks.topLeft2, x: 5, y: 0},
    {block: this.blocks.topRight2, x: 6, y: 0},
    {block: this.blocks.leftVertical2, x: 5, y: 1},
    {block: this.blocks.rightVertical2, x: 6, y: 1},
    {block: this.blocks.leftVertical2, x: 5, y: 2},
    {block: this.blocks.rightVertical2, x: 6, y: 2},
    {block: this.blocks.topLeft2, x: 0, y: 3},
    {block: this.blocks.topHorizontal2, x: 1, y: 3},
    {block: this.blocks.topHorizontal2, x: 2, y: 3},
    {block: this.blocks.topHorizontal2, x: 3, y: 3},
    {block: this.blocks.topHorizontal2, x: 4, y: 3},
    {block: this.blocks.bottomRight3, x: 5, y: 3},
    {block: this.blocks.bottomLeft3, x: 6, y: 3},
    {block: this.blocks.topHorizontal2, x: 7, y: 3},
    {block: this.blocks.topHorizontal2, x: 8, y: 3},
    {block: this.blocks.topRight2, x: 9, y: 3},
    {block: this.blocks.bottomLeft2, x: 0, y: 4},
    {block: this.blocks.bottomHorizontal2, x: 1, y: 4},
    {block: this.blocks.bottomHorizontal2, x: 2, y: 4},
    {block: this.blocks.bottomHorizontal2, x: 3, y: 4},
    {block: this.blocks.bottomHorizontal2, x: 4, y: 4},
    {block: this.blocks.bottomHorizontal2, x: 5, y: 4},
    {block: this.blocks.bottomHorizontal2, x: 6, y: 4},
    {block: this.blocks.bottomHorizontal2, x: 7, y: 4},
    {block: this.blocks.bottomHorizontal2, x: 8, y: 4},
    {block: this.blocks.bottomRight2, x: 9, y: 4},
  ];
}
