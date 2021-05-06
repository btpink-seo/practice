'use strict';

const mergeSort = (array) => {
  const merge = (left, right) => {
    const result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());

    return result;
  };

  if (array.length < 2) return array;

  const mid = Math.floor(array.length / 2);
  const beforeSortLeft = array.slice(0, mid);
  const beforeSortRight = array.slice(mid);

  return merge(mergeSort(beforeSortLeft), mergeSort(beforeSortRight));
};


console.log('result', mergeSort([3,1,5,9,2,7,6,8,4]))
console.log('result', mergeSort([4,2,7,1,3]))