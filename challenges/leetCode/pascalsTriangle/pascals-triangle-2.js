'use strict';

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:
// Input: rowIndex = 0
// Output: [1]

// Example 3:
// Input: rowIndex = 1
// Output: [1,1]

// Space: O(n^2), Time: O(n^2)
const getRow = rowIndex => {
    const triangle = new Array(rowIndex + 1);

    for (let i = 0; i < rowIndex + 1; i++) {
        let row = new Array(i + 1);
        row[0] = 1;
        row[row.length - 1] = 1;

        for (let j = 1; j < row.length - 1; j++) {
            row[j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
        }
        triangle[i] = row;
    }
    return triangle[rowIndex];
};

// found this online claiming to be O(n) time and space
// const getRow = rowIndex => {
//     const result = new Array(rowIndex + 1);
//     result[0] = result[rowIndex] = 1;

//     for (let i = 1, up = rowIndex; i < rowIndex; i++, up--) {
//         result[i] = result[i - 1] * up / i;
//     }
//     return result;
// };

// const getRow = rowIndex => {
//     const row = [1];

//     while (rowIndex--) {
//         row.push(1);
//         for (let i = row.length - 2; i > 0; --i) {
//             row[i] += row[i - 1];
//         }
//     }
//     return row;
// }


// Came up with this on my own, to use less memory... seems slower though? Oh well..

// const getRow = rowIndex => {
//     if (rowIndex === 0) return [1];
//     if (rowIndex === 1) return [1, 1];

//     let row = [1, 1];

//     for (let i = 0; i < rowIndex + 1; i++) {
//         let tempRow = new Array(i + 1);
//         tempRow[0] = 1;
//         tempRow[tempRow.length - 1] = 1;

//         for (let j = 1; j < tempRow.length - 1; j++) {
//             tempRow[j] = row[j] + row[j - 1];
//         }
//         row = tempRow;
//     }
//     return row;
// };

