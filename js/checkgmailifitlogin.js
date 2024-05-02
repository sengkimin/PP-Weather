function val_email(email) {
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+$/;
    var isValid = pattern.test(email);

    if (email != null && isValid === false) {
        alert("The email is invalid.")
    } else if (email != null && isValid === true) {
        alert("This email is valid.")
    } else {
        alert("Enter your vilid Email.")
    }
}

console.log(val_email("aceyami8@gmail.com"));