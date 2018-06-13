/**
 * Insertion sort splits an array into two(sorted and unsorted)
 * loops through the array taking an element from the unsorted array and finds its position in the sorted array
 * Complexity -> O(n), worst case O(n^2)
 */

const insertionSort = array => {
  // loop through the array
  for (let i = 0; i < array.length; i++) {
    // store current value so that it can be sorted
    let temp = array[i];

    // loop through from the current item to the beginning of the array(sorted part of the array)
    // checking where the current item belongs in the sorted array
    // This is done by copying an element to the next index if it's greater than the previous element

    let j = i - 1;

    while (j >= 0 && array[j] > temp) {
      array[j + 1] = temp;
    }
  }

  return list;
};

const insertionSort2 = items => {
  for (var i = 0; i < items.length; i++) {
    let value = items[i];
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      items[j + 1] = items[j];
    }
    // the last item we've reached should now hold the value of the currently sorted item
    items[j + 1] = value;
  }

  return list;
};
const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
