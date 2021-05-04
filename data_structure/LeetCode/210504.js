'use strict';

var checkPossibility = function(nums) {
  // for performance test
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
      if (count > 1) return false;
    }
  }

  // for test
  for (let i = 0; i < nums.length; i++) {
    const tmp = nums.slice();
    tmp.splice(i, 1);

    if (tmp.join('') === tmp.sort((a, b) => a - b).join('')) {
      return true;
    }
  }
  return false;
};

console.log(checkPossibility([4,2,3]), true);
console.log(checkPossibility([4,2,1]), false);
console.log(checkPossibility([5,7,1,8]), true);
console.log(checkPossibility([3,4,2,3]), false);
console.log(checkPossibility([-1,4,2,3]), true);
console.log(checkPossibility([-51,-58,-49,-48]), true);
