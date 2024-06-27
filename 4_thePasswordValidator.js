// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

let pass1 = "Password1";
let pass2 = "abc1";
let pass3 = "Abcdefgh";
let pass4 = "A12345678a";

const validatePassword = (password) => {

    let small = false;
    let capital = false;
    let num = false;
    if (password.length >= 8) {

        for (let i = 0; i < password.length; i++) {
            let charCode = password[i].charCodeAt(0);
            if (charCode >= 97 && charCode <= 122) {
                small = true;

            }
            if (charCode >= 97 && charCode <= 122) {
                capital = true;

            }
            if (charCode >= 48 && charCode <= 57) {
                num = true;
            }
        }
        if (small && capital && num) {
            console.log("validated");
        }
        else {
            console.log("NOt validated");

        }
    }
    else {
        console.log("please enter a length of 8 or more")
    }
};

validatePassword(pass4);


//   OR  OR  OR  OR  OR  OR  OR  OR  OR  OR  OR 

// function isValidPassword(password) {
    
//     if (password.length < 8) {
//         return false;
//     }

 
//     const hasUppercase = /[A-Z]/.test(password);
//     const hasLowercase = /[a-z]/.test(password);
//     const hasDigit = /\d/.test(password);

    
//     return hasUppercase && hasLowercase && hasDigit;
// }


// console.log(isValidPassword("Password123")); // true
// console.log(isValidPassword("password123")); // false (no uppercase letters)
// console.log(isValidPassword("PASSWORD123")); // false (no lowercase letters)
// console.log(isValidPassword("Password"));    // false (no digits)
// console.log(isValidPassword("Pass123"));     // false (less than 8 characters)

