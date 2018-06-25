/**
 * Divide and conquer algotrithm that divides a list into sublists until it gets to a point where the array is of length 1
 * Repeatedly merge the sublists until 1 sublist is remaining to produce a new sorted list.
 * The most important good part of Merge Sort is its O(N log N) performance guarantee,
 * regardless of the original ordering of the input. That's it, there is no adversary test case that can make Merge Sort runs
 * longer than O(N log N) for any array of N elements.
 * Merge Sort is therefore very suitable to sort extremely large number of inputs as O(N log N) grows much slower than the O(N2) sorting algorithms.
 * Merge Sort is also a stable sort algorithm. Discuss: Why?
 * There are however, several not-so-good parts of Merge Sort. First, it is actually not easy to implement from scratch (but we don't have to).
 * Second, it requires additional O(N) storage during merging operation, thus not really memory efficient and not in-place.
 */

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

const mergeSortTopDown = array => {
  if (array.length < 2) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return mergeSortTopDown(right, left);
};

const mergeTopDown = (left, right) => {
  var array = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  return array.concat(left.slice()).concat(right.slice());
};

console.log(mergeSortTopDown(array.slice()));
// console.log(mergeSortTopDown([9, 2, 5, 6, 4]));
