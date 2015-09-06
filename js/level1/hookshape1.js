var HookShape1 = (function () {
  HookShape1.prototype = new BackgroundObject();
  HookShape1.prototype.constructor = HookShape1;

  function HookShape1 (options) {
    BackgroundObject.call(this, options);

    this.images = [
      {block: this.blocks.topLeft2, x: 0, y: 0},
      {block: this.blocks.topHorizontal2, x: 1, y: 0},
      {block: this.blocks.topHorizontal2, x: 2, y: 0},
      {block: this.blocks.topRight2, x: 3, y: 0},
      {block: this.blocks.bottomLeft2, x: 0, y: 1},
      {block: this.blocks.bottomHorizontal2, x: 1, y: 1},
      {block: this.blocks.topRight3, x: 2, y: 1},
      {block: this.blocks.rightVertical2, x: 3, y: 1},
      {block: this.blocks.leftVertical2, x: 2, y: 2},
      {block: this.blocks.rightVertical2, x: 3, y: 2},
      {block: this.blocks.leftVertical2, x: 2, y: 3},
      {block: this.blocks.rightVertical2, x: 3, y: 3},
      {block: this.blocks.bottomLeft2, x: 2, y: 4},
      {block: this.blocks.bottomRight2, x: 3, y: 4}
    ];

    this.boundingBoxes = [
      new BoundingBox(12, 12, 72, 24),
      new BoundingBox(60, 36, 24, 72)
    ];
  }

  return HookShape1;
}());
