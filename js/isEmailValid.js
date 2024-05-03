
// function checkEmail(email) {
//     if (email.includes('@') && email.includes('.') && email.length >= 8) {
//         return "correct";
//     } else {
//         return "incorrect";
//     }
// }

// let email = "in.seng@gmail.com";
// console.log(checkEmail(email));
function checkEmail(email) {
    if (email.includes('@') && email.includes('.') && email.length >= 8) {
        return true;
    } else {
        return false;
    }
}

let email = "in.seng@gmail.com";
console.log(checkEmail(email)); 
