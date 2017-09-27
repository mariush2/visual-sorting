let boxes = [];
let box_width, canvas_height;


function setup() {
  canvas_height = windowHeight / 1.5;
  createCanvas(windowWidth, canvas_height);
  background(51);
  box_width = 6;

  for (let i = 0; i < (windowWidth / box_width); i++) {
    boxes[i] = new Box(i);
  }
}

function draw() {
  background(51);
  for (let i = 0; i < boxes.length - 1; i++) {
    boxes[i].render();
  }
  if (bad_sort(boxes) == false) {
    bad_sort(boxes);
  }
}
