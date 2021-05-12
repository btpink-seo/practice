/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(target) {
  const size = target.length;
  const endCondition = Array.from({ length: size }, () => 1).join('');

  const basic = target.slice().sort();
  const lastIndex = basic.length - 1;

  if (size === 2) return basic[1] % basic[0] < size;

  while (basic.join('') !== endCondition) {
    console.log('before', basic);

    const newNum = basic[lastIndex] - basic.slice(0, lastIndex).reduce((a, c) => a + c, 0);
    if (newNum === basic[lastIndex] || newNum < 0) return false;

    basic[lastIndex] = newNum;
    basic.sort();
    // console.log('after', basic);
  }
  return true;
};


console.log(isPossible([9, 3, 5]), true);
console.log(isPossible([1, 1, 1, 2]), false);
console.log(isPossible([2]), false);
console.log(isPossible([8, 5]), true);
console.log(isPossible([1,1000000000]), true);
console.log(isPossible([2, 900000001]), true);