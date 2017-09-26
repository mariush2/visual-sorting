let boxes, box_width, canvas_height;
let sorting_colour = [255, 0, 0];
let sorted_colour = [0, 255, 0];
let normal_colour = 255;

function setup() {
  canvas_height = windowHeight / 1.5;
  createCanvas(windowWidth, canvas_height);
  background(51);

  boxes = [];
  box_width = 10;

  for (let i = 0; i < (windowWidth / box_width); i++) {
    boxes[i] = new Box(i);
  }
}

function draw() {
  background(51);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].render();
  }
  if (bad_sort() == false) {
    bad_sort()
  }
}
