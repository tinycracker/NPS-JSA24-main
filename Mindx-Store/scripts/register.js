////if already logged in, redirect to home page
if(localStorage.getItem("currentUser")){
    location.href = "../html/index.html"
}

let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if(username.length < 6){
        alert("Username must be at least 6 characters");
    }
    else if(password.length < 8){
alert("Password must be at least 8 characters");
    }
    else if(!password.match(lowerCaseLetter)){
        alert("Password must contain a lowercase letter")
    }


})