const selectionSort = (array) => {
  // let isUnsorted = true
  // let minValue = undefined
  // let minIndex = 0

  // do {
  //   isUnsorted = false
  //   minValue = undefined

  //   for (let i = minIndex; i < array.length; i++) {
  //     const element = array[i];
  //     if (minValue === undefined || element < minValue) {
  //       [minValue, minValueIndex, isUnsorted] = [element, i, true]
  //     }
  //   }
  //   if (isUnsorted) [array[minIndex], array[minValueIndex]] = [array[minValueIndex], array[minIndex]]

  //   minIndex++

  //   if (minIndex === array.length - 1) break
  // } while (isUnsorted);


  for (let i = 0; i < array.length; i++) {
    let minValueIndex = i

    for (let j = i + 1; j < array.length; j++) {
      const element = array[j];
      if (element < array[minValueIndex]) {
        minValueIndex = j
      }
    }
    [array[i], array[minValueIndex]] = [array[minValueIndex], array[i]]
  }

  return array
}


console.log('result', selectionSort([3,1,5,9,2,7,6,8,4]))
console.log('result', selectionSort([4,2,7,1,3]))