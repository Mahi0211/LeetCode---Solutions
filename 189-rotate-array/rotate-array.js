/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let n = nums.length;
    k = k % n;

    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
    reverse(0, n - 1); //reverse entire array
    reverse(0, k - 1); //reverse first k elemnets
    reverse(k, n - 1); //reverse remaining elements
};