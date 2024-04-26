function login() {
    // Retrieve email from input field
    var email = document.getElementById("email").value;

    // Dummy validation: Check if email is not empty
    if (email.trim() === '') {
        alert("Please enter email.");
        return;
    }
                                                                        
    // Dummy authentication: Check if email is correct
    let emailResult = checkEmail(email);

    // Check authentication result
    if (emailResult === "correct") {
        alert("Email is correct!");
        // Proceed with further authentication or actions
    } else {
        alert("Email is incorrect.");
    }
}

// Function to check email
function checkEmail(email) {
    if (email.includes('@') && email.length >= 8) {
        return "correct";
    } else {
        return "incorrect";
    }
}
