/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
var superpalindromesInRange = function(left, right) {
  const checkPalindrome = (num) => {
    const reverseNum = String(num).split('').reverse().join('');
    return String(num) === reverseNum;
  }

  const allCase = (num) => {
    if (num === 0) return [''];

    let result = ['0', '1'];
    for (let i = 0; i < num - 1; i++) {
      const tmp = [];
      ['0', '1'].forEach((n) => result.forEach((n2) => tmp.push(n + n2)));
      result = tmp.slice();
    }
    return result;
  }

  const check = (num, left, right, array, index) => {
    const newNum = `${num}${left}${index}${right}${num}`;
    const target = BigInt(newNum) * BigInt(newNum);
    if (checkPalindrome(target)) array.push(target);
  }
  const oneGenerator = (zeroLength, array, index = '') => {
    allCase(zeroLength).forEach((c) => {
      check(1, c, c.split('').reverse().join(''), array, index);
    });
  }
  const twoGenerator = (zeroLength, array, index = '') => {
    const zero = Array.from({ length: zeroLength }, (_) => 0).join('');
    check(2, zero, zero, array, index);
  }

  // 시작 자리수, 종료 자리수 로 반복문 시작
  // 홀수 자리수 인 경우만 계산
  const odd = Array.from({ length: 10 }, (_, i) => 2*i + 1);
  const result = [1, 4, 9];
  const min = left.length < 2 ? 2 : left.length;
  for (let i = min; i <= right.length; i++) {
    if (i % 2 === 0) continue;

    const rootValueLength = odd.indexOf(i) + 1; // 기초수의 자리수

    // 절반 자르기
    const half = Math.floor(rootValueLength / 2);
    const zeroLength = half - 1;

    if (rootValueLength % 2 === 0) {
      oneGenerator(zeroLength, result);
      twoGenerator(zeroLength, result);
    } else {
      for (let j = 0; j < 3; j++) {
        oneGenerator(zeroLength, result, j);
        if (j !== 2) {
          twoGenerator(zeroLength, result, j);
        }
      }
    }
  }

  // console.log(result)
  return result.filter((n) => n >= Number(left) && n <= Number(right)).length;
};

// console.log(superpalindromesInRange('4', '1000'));
console.log(superpalindromesInRange('40000000000000000', '50000000000000000'));