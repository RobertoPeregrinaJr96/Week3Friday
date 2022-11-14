/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.


}
*/
//----------------- mocha passed
function sort(nums,arr = []) {
    nums.sort((a, b) => {
        return a - b
    })
    if (nums.length === 0) {
        return arr
    } else {
        arr.push(nums[0])
    }
return sort(nums.slice(1),arr)
}
//----------------mocha passed----------------------
// function sort(nums) {
//     let arr = []
//     nums.sort((a, b) => { return a - b }).map((num) => {
//         arr.push(num)
//     })
//     return arr
// }
//----------------------mocha passed-------------------
// function sort(nums) {
//     let arr = []
//     let sarr = nums.sort((a,b) => {return a - b})
//     function p(sarr){
//         if(sarr[0] === undefined) {
//             return arr
//         } else {
//             arr.push(sarr[0])
//             return p(sarr.slice(1))
//         }
//     }
//     p(nums)
//     return arr
// }
//------------------------------------------------------
console.log(sort([])) // prints []
console.log(sort([9])) // prints [9]
console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = sort;
} catch (e) {
    module.exports = null;
}
