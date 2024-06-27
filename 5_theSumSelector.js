// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number.Write a function that performs this summation.

let arr1 = [1,2,3,4,5,6,-8,4,3];
let arr2=[1,2,-2,8,6,4];
let arr3=[1,2];

const sum = (arr) => {
    let total = 0;
    let i=0;
    while (i<arr.length && arr[i]>=0) {
        total+=arr[i];
        i++;
    }

console.log(total);
}

sum(arr1);
sum(arr2);
sum(arr3);
