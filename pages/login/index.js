// function login() {
    
//     var email = document.getElementById("email").value;


//     if (email.trim() === '') {
//         alert("Please enter email.");
//         return;
//     }
                                                                        
   
//     let emailResult = checkEmail(email);

 
//     if (emailResult === "correct") {
//         alert("Email is correct!");
       
//     } else {
//         alert("Email is incorrect.");
//     }
// }


// function checkEmail(email) {
//     if (email.includes('@') && email.length >= 8) {
//         return true;
//     } else {
//         return false;
//     }
// }



function login() {
    var email = document.getElementById("email").value;

    if (email.trim() === '') {
        alert("Please enter email.");
        return;
    }
                                                                        
    let emailResult = checkEmail(email);

    if (emailResult) {
        alert("Email is correct!");
    } else {
        alert("Email is incorrect.");
    }
}

function checkEmail(email) {
    if (email.includes('@') && email.length >= 8) {
        return true;
    } else {
        return false;
    }
}
