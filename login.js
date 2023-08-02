let password = document.getElementById("password");
let newPassword = document.getElementById("newpassword");
let login = document.getElementById("button");
let email = document.getElementById("email");
let form = document.getElementById("login-form")

form.addEventListener("submit", function handleSubmit(e) {
    e.preventDefault();

    let Name = document.getElementById("name");
    let lastname = document.getElementById("lastname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let newPassword = document.getElementById("new-password");

    let myjson = localStorage.getItem("AllUser")
    let oldUsers = JSON.parse(myjson)

    if (oldUsers == null) {
        alert("Please Sign in");
        return;
    }
    let user = {};
    let isEmailExist = false;
    for (let i = 0; i < oldUsers.length; i++) {

        let a = oldUsers[i];


        if (email.value == a['Email'] && password.value == a['Password']) {
            isEmailExist = true
            user = a;
            break;
        } else {
            alert("Invalid Credentials")
            return;
        }

        
    }

    let newJSON = JSON.stringify(user)
        localStorage.setItem("User" , newJSON);

    if (isEmailExist) {
        window.location.href = "Ecommerce.html.html";
    }

})


// set user to variable
// Check password
// Stringify User
// Crete User Element Set User to localStorage