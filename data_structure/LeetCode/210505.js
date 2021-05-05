'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
  if (nums.length < 3) return nums.length - 1;
  if (nums[0] >= nums.length - 1) return 1;

  let count = 1;
  const tmp = nums.map((num, i) => [i, num]);
  let targets = tmp.slice(1, nums[0] + 1);
  const used = [];

  while (true) {
    if (targets.length === 0) return count;
    let tmpTargets = [];

    for (let i = 0; i < targets.length; i++) {
      const element = targets[i];

      if (element[0] + element[1] >= nums.length - 1) {
        return count + 1;
      } else {
        if (used[element[0]]) continue; // 중복 실행 금지
        const start = element[0] + 1;
        const end = start + element[1];
        tmpTargets = Array.from(new Set(tmpTargets.concat(tmp.slice(start, end)))); // 중복제거
      }
      used[element[0]] = true;
    }
    targets = tmpTargets;
    count++;
  }
};


console.log(jump([2,3,1,1,4]), 2)
console.log(jump([2,3,0,1,4]), 2)
console.log(jump([2,1,3,1,4]), 2)
console.log(jump([2,1,1,3,4]), 3)
console.log(jump([3,2,1]), 1)
console.log(jump([0]), 0)
console.log(jump([1,2]), 1)
console.log(jump([9,4,5,4,1,8,1,2,0,7,8,7,0,6,6,1,1,2,5,0,9,8,4,7,9,6,8,1,4,0,8,5,5,3,9,8,1,2,2,3,0,1,3,2,7,9,3,0,1]), 8)
