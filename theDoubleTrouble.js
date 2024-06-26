// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr = [1, 3, 4, 4, 6, 7, 9, 9, 3, 3, 6, 6];
let DblArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
        DblArr.push(arr[i]);
    }
  else {
        DblArr.push(arr[i] * 2)
    }

}
console.log(DblArr);