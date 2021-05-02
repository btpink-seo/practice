let nums = [100, 200, 300, 400, 500];

// 1
nums.pop();
nums.pop();
console.log(nums);

// 2
nums = [100, 200, 300, 400, 500];
nums = nums.filter((num) => num < 400);
console.log(nums);

