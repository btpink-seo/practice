/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
  var result = [];

  for (var i = 0; i < nums.length; i++) {
    result[i] = nums.slice(0, i + 1).reduce((a, c) => a + c);
  }

  return result;
};