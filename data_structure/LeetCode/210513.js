/**
 * @param {string} s
 * @return {string[]}
 */
 var ambiguousCoordinates = function(s) {
  const num = s.split('').slice(1, s.length - 1);
  const result = [];
  let front = [];
  let back = [];

  const makeNums = (num, array) => {
    for (let j = 0; j < num.length; j++) {
      const testNumArray = [...num.slice(0, j + 1), '.', ...num.slice(j + 1)];
      if (testNumArray[testNumArray.length - 1] === '.') testNumArray.pop();
      const testNum = testNumArray.join('');
      if (String(Number(testNum)).length === testNum.length) array.push(testNum);
    }
  }

  // 앞숫자 경우의 수 구하기
  for (let i = 0; i < num.length - 1; i++) {
    const frontArray = num.slice(0, i + 1);
    const frontNum = frontArray.join('');
    const backArray = num.slice(i + 1);
    const backNum = backArray.join('');

    makeNums(frontArray, front);
    makeNums(backArray, back);

    // 합체
    front.forEach((f) => {
      back.forEach((b) => {
        result.push(['(', ...[f, b].join(', '), ')'].join(''));
      });
    });

    front = [];
    back = [];
  }

  return result;
};
console.log(ambiguousCoordinates("(0123)"))