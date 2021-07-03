/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function(s) {
  const exception = ["Infinity", "-Infinity", "+Infinity"];
  if (exception.includes(s)) return false;

  return String(Number(s)) !== 'NaN';
};