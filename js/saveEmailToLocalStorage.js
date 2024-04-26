function getEmail() {
    var enterEmail = document.getElementById('email').value;
    console.log('Entered Email:', enterEmail);
    
  
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+$/;
  
    if (pattern.test(enterEmail)) {
     
      localStorage.setItem('userEmail', enterEmail);
      alert("Login Successful");
    } else {
      alert("Invalid email format");
    }
  }