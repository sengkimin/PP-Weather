
function login() {
    var email = document.getElementById("email").value;
  
    if (email.trim() === "") {
      alert("Please enter email.");
      return;
    }
  
    let emailResult = checkEmail(email);
  
    if (emailResult) {
      alert("Valid Email!");
      saveEmailToLocalStorage(email);
    } else {
      alert("You need to add (@) in your email ");
    }
  }
  
  function checkEmail(email) {
    if (email.includes("@") && email.length >= 8) {
      return true;
    } else {
      return false;
    }
  }
  
  function saveEmailToLocalStorage(email) {
      localStorage.setItem('loggedInEmail', email);
      window.location.href = "../pages/home/index.html";
  }
  
  
  
  