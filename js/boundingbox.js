function BoundingBox (x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

BoundingBox.prototype.intersectsWith = function (otherBox) {
  if (!(otherBox instanceof BoundingBox)) {
    return false;
  }
  if ((this.x + this.width) <= otherBox.x) {
    return false;
  }
  if ((otherBox.x + otherBox.width) <= this.x) {
    return false;
  }
  if ((this.y + this.height) <= otherBox.y) {
    return false;
  }
  if ((otherBox.y + otherBox.height) <= this.y) {
    return false;
  }

  return true;
};
