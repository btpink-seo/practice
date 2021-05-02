/**
 * @param {string[]} words
 */
 var WordFilter = function(words) {
  this.words = words
  this.cache = [-1, null]
};

/**
 * @param {string} prefix
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
  var result = -1
  if (this.cache[0] > -1 && this.cache[1] === [prefix, suffix].join('_'))  return this.cache[0]

  this.words.forEach((word, i) => {
    if (word !== prefix || word !== suffix) {
      if (
        word === prefix + word.slice(prefix.length, word.length) &&
        word === word.slice(0, word.length - suffix.length) + suffix
         ) {
        result = i
        this.cache = [i, [prefix, suffix].join('_')]
      }
    } else {
      result = i
      this.cache = [i, [prefix, suffix].join('_')]
    }
  });
  return result;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */