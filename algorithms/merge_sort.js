function merge_sort(array) {
  if (array.length < 2) {
    return array;
  }

  let middle = array.length / 2;

  for (var i = 0; i < array.length; i++) {
    if (i <= middle) {
      //Should push the values to the left array
    } else {
      //Should push the values to the right array
    }
  }
  let left = array.splice(0, middle);
  let right = array; //The remaining of the array is assigned to the "right" array

  return merge(merge_sort(left), merge_sort(right));
}


function merge(left, right) {
  var sorted = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      //left array should stay to the left
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  while (left.length) {
    sorted.push(left.shift());
  }

  while (right.length) {
    sorted.push(right.shift());
  }

  heights = sorted;
  return sorted
}
