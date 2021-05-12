/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const used = [];
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (used[i]) continue;
    count++;
    for (let j = i*i; j < n; j+=i) used[j] = true;
  }
  return count;
};

console.log(countPrimes(10))
console.log(countPrimes(25))
console.log(countPrimes(10000))
console.log(countPrimes(50000))
console.log(countPrimes(5000000))