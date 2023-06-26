let nums = [1, 2, 3, 4];
function houseRobber(nums) {
  if (nums.length == 0) return 0;
  if (nums.length == 1) return nums[0];
  let dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i - 2] + nums[i], nums[i - 1]);
  }
  return dp[nums.length - 1];
}
console.log(houseRobber(nums));
