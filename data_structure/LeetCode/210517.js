/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
  let result = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let check = word;
    let count = 0;


    for (let j = i; j < words.length; j++) {
      const element = words[j].split('');
      const aa = check.split('');
      if (element.filter((e) => !aa.includes(e)).length === 1) {
        check = words[j];
        count++;
      }
    }

    console.log(word, count);
    if (count > result) result = count;
  }
  return result;
};

console.log(longestStrChain(["a","b","ba","bca","bda","bdca"]), 4)
// console.log(longestStrChain(["xbc","pcxbcf","xb","cxbc","pcxbc"]), 5)