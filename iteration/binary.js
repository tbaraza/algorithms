function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  /*
   * Convert an integer into a binary representation
   * Set a max counter to 0
   * Loop through the binary rep
   * If you find a zero increase the counter by one
   * If you find a one compare the sequence counter and set the higher value. Then set the conter to zero to read upcoming sequence lengths
   * Return max sequence
   */
  const binary = N.toString(2);
  console.log('huuu', binary);

  let binaryGap = 0;
  let result = 0;
  for (let i = 0; i < binary.length; i++) {
    console.log('hey', binary[i]);
    if (binary[i] === '0') {
      binaryGap += 1;
    } else {
      result = Math.max(result, binaryGap);
      binaryGap = 0;
    }
  }
  return result;
}

// console.log(solution(1041));

function solution2(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  /*
     * Set up a counter to equal integer K
     * While within the counter limit
     * remove the last element from the array
     * loop through the remaining items
     * move the rest of the items each to the right by one index
     * once done merge the last element to the rest of the array
     */

  const counter = K;
  if (A.length === 0) {
    return A;
  }
  for (let i = 1; i < counter; i++) {
    const lastItem = A.pop();
    A.unshift(lastItem);
  }

  return A;
}
// console.log(solution2([1, 2, 3], 2));

// Checking the edge cases
// Check for typos

function solution3(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  /*
     * Set a new object to store the counter of the items
     * Loop through the array
     * Take the first element as key in an object with value 1
     * Check if the next element is equal to the first element
     * If not, add it as a key to the object with value 1
     * then for the subsequent items check if they are keys in
     * the object
     * If not, add as a key with value 1 else increment the value of
     * the item by one in the object
     * Lastly loop through the object and find the key with value 1
     */
  const counter = {};
  let unpaired;
  console.log(A);
  for (let i of A) {
    console.log('yes', i);
    if (counter.hasOwnProperty(i)) {
      counter[i] += 1;
    } else {
      console.log('counter else', counter);
      counter[i] = 1;
    }
  }

  console.log('counter in', counter);

  for (let prop in counter) {
    if (counter[prop] === 1) {
      unpaired = prop;
    }
  }

  return unpaired;
}

// console.log(solution3([1, 1, 2]));

function solution4(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const newArray = [];
  for (let i = 1; i <= A.length + 1; i++) {
    newArray.push(i);
  }
  return newArray;
}

console.log(solution4([8, 2, 3, 4]));

A.sort((a, b) => a - b);
for (let i = 1; i <= A.length + 1; i++) {
    if (!(A.includes(i))) {
        return i;
    }
}

[2, 4, 1]
[1, 2, 4]

// O(N**N)
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let diff = Number.POSITIVE_INFINITY;
  let left;
  let right;
  const length = A.length;
  
  const sum = (array) => {
      let total = 0;
      array.forEach(item => total += item);
      return total;
  }
  
  for (let i = 0; i < A.length; i++) {
      left = A.slice(0, i+1);
      right = A.slice(i+1, length);
      const current = Math.abs(sum(left) - sum(right));
      if (current < diff) {
          diff = current;
      }
  }
  

  return diff;
}

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  /*
   * Set up the left and the right sum variables
   * Set the minimum difference
   * Loop through the array
   * sum the left side and the right side relative to the current index
   * Get the absolute difference of the two sums
   * If the difference is less than the minimum difference then set the 
   * minimum difference to this difference
   * Return minimum difference
   */
   
 let diff = Number.POSITIVE_INFINITY;
 let left = 0;
 let right = 0;
 const length = A.length;
 
 A.forEach(item => right += item);

  for (let i = 1; i < A.length; i++) {
    left += A[i -1];
    right = right - A[i - 1];
    const current = Math.abs(left - right);
    if (current < diff) {
        diff = current;
   }
}


return diff;
}

const missing = [];
A.sort((a, b) => a - b);
for (let i = 1; i <= A.length; i++) {
    if (i !== A[i - 1]) {
        missing.push(i)
    } 
    
}

if (missing.length > 0) {
    return 0
}
return 1;