Rectangle.prototype = new BackgroundObject();
Rectangle.prototype.constructor = Rectangle;

function Rectangle (options) {
  BackgroundObject.call(this, options);

  this.width = options.width;
  this.height = options.height;

  var numberOfColumns = this.width / this.cellsize;
  var numberOfRows = this.height / this.cellsize;

  this.images.push({block: this.blocks.topLeft2, x: 0, y: 0});
  this.images.push({block: this.blocks.topRight2, x: numberOfColumns - 1, y: 0});
  this.images.push({block: this.blocks.bottomLeft2, x: 0, y: numberOfRows - 1});
  this.images.push({block: this.blocks.bottomRight2, x: numberOfColumns - 1, y: numberOfRows - 1});

  for (var c = 1; c < numberOfColumns - 1; c++) {
    this.images.push({block: this.blocks.topHorizontal2, x: c, y: 0});
    this.images.push({block: this.blocks.bottomHorizontal2, x: c, y: numberOfRows - 1});
  }

  for (var r = 1; r < numberOfRows - 1; r++) {
    this.images.push({block: this.blocks.leftVertical2, x: 0, y: r});
    this.images.push({block: this.blocks.rightVertical2, x: numberOfColumns - 1, y: r});
  }

  this.boundingBoxes = [
    new BoundingBox(12, 12, numberOfColumns * this.cellsize - 24, numberOfRows * this.cellsize - 24)
  ];
}
