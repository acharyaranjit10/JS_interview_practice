// The Local Storage Manager: You are working on a note - taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

// if(localStorage.getItem("name")){
//     fullName=localStorage.getItem("name");
//     document.write("Welcome "+fullName);
// }
// else{

//     let fullName = prompt("Enter your name.");
//     localStorage.setItem("name",fullName);
//     document.write("Welcome "+fullName);
// }

let Student = {
    "Name": "Rahul",
    "Roll": 20,
    "Address": "Thimpu"
};

localStorage.setItem("details", JSON.stringify(Student)); // its saved after converting to string
 
JSON.parse(localStorage.getItem("details")); //  convert to object with parse before retrieving

