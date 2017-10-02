function bad_sort(boxes) {
  for (let i = boxes.length - 1; i > 0; i--) {
    if (boxes[i].height > boxes[i - 1].height) {
      //First swap the values of the height aka the value we are sorting by
      let bigger = boxes[i].height;
      boxes[i].height = boxes[i - 1].height;
      boxes[i - 1].height = bigger;

      //Draw function for blocks being sorted
      boxes[i].sorted = true;
      boxes[i].sort_render();
      return false;
    }
  }
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].sorted = true;
  }
}
