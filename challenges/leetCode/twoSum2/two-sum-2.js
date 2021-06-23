'use strict';

// const twoSum = (numbers, target) => {
//     const hash = {};
//     for (let i = 0; i < numbers.length; i++) {
//         let nums = target - numbers[i];
//         if (hash[nums] != null) return [hash[nums], i + 1];
//         hash[numbers[i]] = i + 1;
//     }
// };

const twoSum = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;
    
    while (true) {
        if (numbers[left] + numbers[right] > target) {
            right--;
            continue;
        } else if (numbers[left] + numbers[right] < target) {
            left++;
            continue;
        } else {
            return [left + 1, right + 1];
        }
    }
};