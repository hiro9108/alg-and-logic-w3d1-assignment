// Write a JavaScript program to compute the sum of an array of integers 
// using recursion

let testArray = [4, 7, 9, 3, 1, 0, 5]

const sumOfArrayRecursive = function (arr) {

    if (arr.length === 0) return 0;

    let num = arr.pop();
    let i = arr.length;
    return num + sumOfArrayRecursive(arr.slice(0,i))
}

console.log(sumOfArrayRecursive(testArray))