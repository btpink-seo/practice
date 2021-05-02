const bubbleSort = (array) => {
  let isUnsorted = true
  let result = array.slice()
  let unsorted_max_index = result.length

  do {
    isUnsorted = false
    for (let i = 0; i < unsorted_max_index; i++) {
      if (result[i] > result[i+1]) {
        [result[i+1], result[i]] = [result[i], result[i+1]]
        isUnsorted = true
      }
    }
    unsorted_max_index -= 1
  } while (isUnsorted);
  return result
}

console.log('result', bubbleSort([3,1,5,9,2,7,6,8,4]))
console.log('result', bubbleSort([4,2,7,1,3]))