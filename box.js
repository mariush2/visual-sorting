function Box(i) {
  this.x = box_width * i;
  this.y = canvas_height;
  this.height = heights[i];
  this.width = box_width;
  this.sorted = false;
  this.sort_colour = [255, 0, 0];
  this.done_colour = [0, 255, 0];
  this.normal_colour = 255;

  this.render = function() {
    if (this.sorted) {
      fill(this.done_colour);
    } else {
      fill(this.normal_colour)
    }
    rect(this.x, this.y, this.width, -this.height / 1.8);
  }

  this.sort_render = function() {
    fill(this.sort_colour)
    rect(this.x, this.y, this.width, -this.height / 1.8);
  }
}
