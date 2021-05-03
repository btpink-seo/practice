'use strict';

const insersionSort = (array) => {
  const target = array.slice();

  for (let i = 1; i < target.length; i++) {
    const temp_value = target[i];
    let position = i;

    while (position > 0 && target[position - 1] > temp_value) {
      target[position] = target[position - 1];
      position -= 1;
    }

    target[position] = temp_value;
  }
  return target;
}

console.log('result', insersionSort([3,1,5,9,2,7,6,8,4]));
console.log('result', insersionSort([4,2,7,1,3]));
