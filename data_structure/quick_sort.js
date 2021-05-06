'use strict';

const quickSort = (array) => {
  if (array.length < 2) return array;

  const pivot = array[0];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
  // return quickSort(left).concat(pivot).concat(quickSort(right));
};

console.log('result', quickSort([3,1,5,9,2,7,6,8,4]))
console.log('result', quickSort([4,2,7,1,3]))
console.log('result', quickSort([5,3,8,4,9,1,6,2,7]))