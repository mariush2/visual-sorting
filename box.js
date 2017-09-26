function Box(i) {
  this.x = box_width * i;
  this.y = canvas_height;
  this.height = (floor(random(200))) + 10;
  this.width = box_width;
  this.sorted = false;


  this.render = function() {
    if (this.sorted) {
      fill(sorted_colour);
    } else {
      fill(normal_colour);
    }
    rect(this.x, this.y, this.width, -this.height * 2);
  }

  this.sort_render = function() {
    fill(sorting_colour);
    rect(this.x, this.y, this.width, -this.height * 2);
  }
}
