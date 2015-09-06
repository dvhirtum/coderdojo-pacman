var TShape = (function () {
  TShape.prototype = new BackgroundObject();
  TShape.prototype.constructor = TShape;

  function TShape (options) {
    BackgroundObject.call(this, options);

    this.images = [
      {block: this.blocks.topLeft2, x: 0, y: 0},
      {block: this.blocks.topHorizontal2, x: 1, y: 0},
      {block: this.blocks.topHorizontal2, x: 2, y: 0},
      {block: this.blocks.topHorizontal2, x: 3, y: 0},
      {block: this.blocks.topHorizontal2, x: 4, y: 0},
      {block: this.blocks.topHorizontal2, x: 5, y: 0},
      {block: this.blocks.topHorizontal2, x: 6, y: 0},
      {block: this.blocks.topRight2, x: 7, y: 0},
      {block: this.blocks.bottomLeft2, x: 0, y: 1},
      {block: this.blocks.bottomHorizontal2, x: 1, y: 1},
      {block: this.blocks.bottomHorizontal2, x: 2, y: 1},
      {block: this.blocks.topRight3, x: 3, y: 1},
      {block: this.blocks.topLeft3, x: 4, y: 1},
      {block: this.blocks.bottomHorizontal2, x: 5, y: 1},
      {block: this.blocks.bottomHorizontal2, x: 6, y: 1},
      {block: this.blocks.bottomRight2, x: 7, y: 1},
      {block: this.blocks.leftVertical2, x: 3, y: 2},
      {block: this.blocks.rightVertical2, x: 4, y: 2},
      {block: this.blocks.leftVertical2, x: 3, y: 3},
      {block: this.blocks.rightVertical2, x: 4, y: 3},
      {block: this.blocks.bottomLeft2, x: 3, y: 4},
      {block: this.blocks.bottomRight2, x: 4, y: 4}
    ];

    this.boundingBoxes = [
      new BoundingBox(12, 12, 168, 24),
      new BoundingBox(84, 36, 24, 72)
    ];
  }

  return TShape;
}());
