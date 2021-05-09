'use strict';

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(W1, W2) {
  // if (word1 === word2) return 0;

  // let base = word1.split('');
  // let target = word2.split('');

  // // 없는 문자 서로 제거
  // base = base.filter((s) => target.includes(s));
  // target = target.filter((s) => base.includes(s));

  // // 중복제거
  // // base = Array.from(new Set(base));
  // // target = Array.from(new Set(target));

  // // 순서를 바꾸지 않은 조합 만들기


  // const change = (data) => {
  //   const result = {};
  //   for (let i = 0; i < data.length; i++) {
  //     result[data[i]] = data.slice(i + 1);
  //   }
  //   return result;
  // }

  // const baseGraph = change(base);
  // const targetGraph = change(target);

  // console.log(base, target)
  // console.log(baseGraph, targetGraph)

  // let used = [];
  // let unused = [];

  // const getAllCase = (data, graph) => {
  //   const dataLength = data.length;
  //   const tmp = [];

  //   if (data.length === 0) return;

  //   for (let i = 0; i < dataLength; i++) {
  //     const ele = data.pop();

  //     used.push(ele);

  //     if (graph[ele[ele.length - 1]].length === 0) continue;

  //     for (let j = 0; j < graph[ele[ele.length - 1]].length; j++) {
  //       tmp.push(ele + graph[ele[ele.length - 1]][j]);
  //     }
  //   }
  //   unused = tmp;

  //   getAllCase(unused, graph)
  // }

  // getAllCase(base, baseGraph);
  // base = used.slice();
  // used = [];
  // unused = [];
  // getAllCase(target, targetGraph);
  // target = used.slice();


  // console.log(base, target)

  // const sameWords = base.filter((b) => target.includes(b)).sort((a, b) => b.length - a.length)
  // const sameWord = sameWords.length === 0 ? '' : sameWords[0];
  // return word1.length - sameWord.length + word2.length - sameWord.length;


  // m이 더 긴거
  let m = W1.length, n = W2.length

  if (m < n) [W1, W2, m, n] = [W2, W1, n, m]

  console.log(W1, W2)
  let WA1 = W1.split("")
  let WA2 = W2.split("")
  let dpLast = new Uint16Array(n + 1)
  let dpCurr = new Uint16Array(n + 1)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dpCurr[j + 1] = WA1[i] === WA2[j] ? dpLast[j] + 1 : Math.max(dpCurr[j], dpLast[j+1]);
    }

    console.log(dpCurr, dpLast);


    [dpLast, dpCurr] = [dpCurr, dpLast]
  }
  return m + n - 2 * dpLast[n]
};

// console.log(minDistance('sea', 'eat'), 2);
// console.log(minDistance('sea', 'aet'), 4);
// console.log(minDistance('leetcode', 'etco'), 4);
// console.log(minDistance('lteeqcode', 'etco'), 7);
// console.log(minDistance('horse', 'ros'), 4);
// console.log(minDistance('a', 'b'), 2);
console.log(minDistance('kitten', 'sitting'), 5);

