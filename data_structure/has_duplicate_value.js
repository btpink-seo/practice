const hasDuplicateValue = (array) => {
  const result = array.slice()
  return result.length > Array.from(new Set(result)).length
}

const hasDuplicateValue2 = (array) => {
  const existingNumbers = []
  for (let i = 0; i < array.length; i++) {
    if (existingNumbers[array[i]] !== 1) {
      existingNumbers[array[i]] = 1
    } else {
      return true
    }
  }
  return false
}

console.log('result', hasDuplicateValue([4,2,7,1,3]))
console.log('result', hasDuplicateValue([4,2,7,1,3,3]))
console.log('result', hasDuplicateValue2([4,2,7,1,3]))
console.log('result', hasDuplicateValue2([4,2,7,1,3,3]))
