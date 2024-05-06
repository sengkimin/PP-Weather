function deleteEmailLogin() {
    if (localStorage.getItem('email')) {
        
        localStorage.removeItem('email');
        console.log('Email login deleted from local storage.');
    } else {
        console.log('No email login found in local storage.');
    }
}

deleteEmailLogin();
