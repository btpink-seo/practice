let arr = [200, 100, 300];

// const last = arr.pop();
// arr = arr.concat([10000, last])

arr = arr.fill([10000, 300], 2).flat();
console.log(arr);