/**
 * Heap sort is a sorting algorithm based on heap data structure
 * To heap sort;
 * 1. Build a max heap. A max heap is an implementation of s data structure
 * such that the key of a node is greater than or equal to the keys of its children
 * This gurantees that the root node is the largest
 * 2. Find the max element which in this case its the first element A[1]
 * 3. Swap the max element with the last element A[0]
 * Now the max element is at the end of the array.
 * 4. Discard A[n] from the heap.
 * This means that it's not part of the heap anymore
 * 5. The new root may violate the max heap property, thus we need to max_heapify the heap
 * 6.Go back to step 2 unless the heap is empty
 * The time complexity for heap sort is O(N log N)
 * heapify is O(log N)
 * n iterations of heapify and swaps leads to O(N log N)
 */

// A function to heapify
const heapify = (array, index, heapSize) => {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let largest = index;

  // check if the left node is greater than the current node
  if (left < heapSize && array[left] > array[index]) {
    largest = left;
  }

  // check if the right node is greater than the current largest node
  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== index) {
    // swap current node if it's not the largest
    let temp = array[index];
    array[index] = array[largest];
    array[largest] = temp;
    heapify(array, largest, heapSize);
  }
};

// Build a max heap
const buildMaxHeap = array => {
  // we are stating an n/2 because A[n/2 + 1] are all leaves, thus do not have children
  // therefore 2i > n for i > n/2 + 1.
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    console.log("index", i);
    heapify(array, i, array.length);
  }
  return array;
};

const heapSort = array => {
  let size = array.length;
  let temp;
  buildMaxHeap(array);
  for (let i = array.length - 1; i > 0; i--) {
    // swap the last element with the largest element(first element)
    temp = array[0];
    array[0] = array[i];
    array[i] = temp;

    // discard the last element from the heap
    size -= 1;
    heapify(array, 0, size);
  }
  return array;
};

const array = [9, 2, 5, 6, 4, 13, 3, 7, 10, 1, 0, 8];
console.log(heapSort(array));
