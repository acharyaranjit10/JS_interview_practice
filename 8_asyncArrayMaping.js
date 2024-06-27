// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const doubleMaker = async (arr) => {
    let finalArr = [];
    for (const item of arr) {
        await sleep(500);
        finalArr.push(item * 2);
    }
    console.log(finalArr);
};

function sleep(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
function sleep(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

doubleMaker(arr1);


// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const doubleMaker = async (arr) => {
//     const finalArr = await Promise.all(
//         arr.map(async (item) => {
//             await sleep(500);
//             return item * 2;
//         })
//     );
//     console.log(finalArr);
// };

// function sleep(delay) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, delay);
//     });
// }

// doubleMaker(arr1);
