'use strict';

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.


// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

// var merge = function (nums1, m, nums2, n) {
//     nums1.splice(m, nums1.length - m);

//     loop1: for (let i = 0; i < n; i++) {
//         loop2: for (let j = 0; j <= nums1.length; j++) {
//             if (nums2[i] <= nums1[j] || nums1[j] === undefined) {
//                 nums1.splice(j, 0, nums2[i]);
//                 continue loop1;
//             }
//             else { continue loop2; }
//         }
//     }

//     return nums1;
// };

var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m);

    loop1: for (let i = 0; i < n; i++) {
        for (let j = 0; j <= nums1.length; j++) {
            if (nums2[i] <= nums1[j] || nums1[j] === undefined) {
                nums1.splice(j, 0, nums2[i]);
                continue loop1;
            }
            else { continue; }
        }
    }

    return nums1;
};


// console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));

// console.log(merge([0], 0, [1], 1));
