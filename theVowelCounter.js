// The Vowel Counter: You need to create a function that counts the number of vowels in a given string.Consider both uppercase and lowercase vowels.

let str1 = "aeiou";
let str2 = "My name is Hiroshima Nagasaki."
let str3 = "I hate little man and fat boy."

let vowelCounter = (str) => {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }

    }
    console.log(`the number of vowels in ${str} is ${ count }.`);
};
vowelCounter(str1);
vowelCounter(str2);
vowelCounter(str3);
