let boxes, heights, box_width, canvas_height;


function setup() {
  canvas_height = windowHeight / 1.2;
  createCanvas(windowWidth, canvas_height);
  background(51);
  box_width = 10;

  new_random_array();
}

function draw() {
  background(51);
  for (let i = 0; i < boxes.length - 1; i++) {
    boxes[i].render();
  }
  if (bad_sort(boxes) == false) {
    bad_sort(boxes);
  }


  // merge_sort(heights);
}

function new_random_array() {
  heights = [];
  boxes = [];
  for (let i = 0; i < (windowWidth / box_width); i++) {
    heights[i] = (floor(random(5, 1000)));
    boxes[i] = new Box(i);
  }

}
