/**
 * This is also a divide and conquer algorithm which divides an unsorted list into two sublists.
 * You select a pivot(first element). It is assumed that the elements on the left(possibly empty) are
 * smaller than the pivot and elements on the right(possibly empty) are greater than the pivot.
 * qucksort recursively sorts the sublists.
 * At the conquer step(we do nothing) just merge the two list plus the pivot
 * Complexity -> O(n logn), worst case O(n^2)
 */

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

const quickSort = array => {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[0];
  const lesser = [];
  const greater = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quickSort(lesser).concat(pivot, quickSort(greater));
};

console.log(quickSort(array));
