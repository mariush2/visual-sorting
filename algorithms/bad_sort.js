function bad_sort() {
  for (let i = boxes.length - 1; i > 0; i--) {
    if (boxes[i].height < boxes[i - 1].height) {
      //First swap the values of the height aka the value we are sorting by
      let bigger = boxes[i].height;
      boxes[i].height = boxes[i - 1].height;
      boxes[i - 1].height = bigger;

      //Draw functions for blocks being sorted
      boxes[i].sort_render();
      boxes[i - 1].sort_render();

      boxes[i].sorted = true;
      return false;
    }
    boxes[i].sorted = false;
  }
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].sorted = true;
  }
  return true;
}
