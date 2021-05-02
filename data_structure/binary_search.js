const binarySearch = (array, value) => {
  let lower_bound = 0
  let upper_bound = array.length - 1
  while (lower_bound <= upper_bound) {
    const midpoiont = Math.ceil((lower_bound + upper_bound) / 2)
    const value_at_midpoint = array[midpoiont]
    if (value > value_at_midpoint) {
      lower_bound = midpoiont + 1
    } else if (value < value_at_midpoint) {
      upper_bound = midpoiont - 1
    } else if (value === value_at_midpoint){
      return [value, midpoiont]
    }
  }
  return null
}

console.log('result', binarySearch([1,2,3,4,5,6,7,8,9,10], 10))
console.log('result', binarySearch([1,2,3,4,5,6,7,8,9,10], 9))
console.log('result', binarySearch([1,2,3,4,5,6,7,8,9,10], 8))
console.log('result', binarySearch([1,2,3,4,5,6,7,8,9,10], 7))
console.log('result', binarySearch([1,2,3,4,5,6,7,8,9,10], 6))
console.log('result', binarySearch([1,2,3,4,5,6,7,8,9,10], 5))
console.log('result', binarySearch([1,2,3,4,5,6,7,8,9,10], 4))
console.log('result', binarySearch([1,2,3,4,5,6,7,8,9,10], 3))
console.log('result', binarySearch([1,2,3,4,5,6,7,8,9,10], 2))
console.log('result', binarySearch([1,2,3,4,5,6,7,8,9,10], 1))
console.log('result', binarySearch([1,2,3,4,5,6,7,8,9,10], 0))