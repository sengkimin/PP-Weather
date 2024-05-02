function deleteEmailLogin() {
    // Check if email login exists in local storage
    if (localStorage.getItem('email')) {
        // Remove the email login from local storage
        localStorage.removeItem('email');
        console.log('Email login deleted from local storage.');
    } else {
        console.log('No email login found in local storage.');
    }
}

deleteEmailLogin();
