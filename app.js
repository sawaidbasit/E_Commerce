const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



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

    let obj = {
        "Name": Name.value,
        "LastName": lastname.value,
        "Email": email.value,
        "Password": password.value,
        "ConformPassword": newPassword.value
    }

    if (password.value !== newPassword.value) {
        alert("Your PassWord is not same");
        return
    } else {
        let myjson = localStorage.getItem("AllUser")
        let oldUsers = JSON.parse(myjson)

        if (oldUsers === null) {
            oldUsers = []
        }


        let isEmailExist = false;
        for (let i = 0; i < oldUsers.length; i++) {

            let a = oldUsers[i];

            if (email.value == a['Email']) {
                isEmailExist = true
                break;
            }
        }

        if (isEmailExist) {
            alert("This Email is Already Exist");
            return
        }
          

        if (password && newPassword.value.length >= 8) {
            oldUsers.push(obj)
        } else {
            alert("Please Write a password which Length is Greater Than 8")
            return
        }
        let myJSON = JSON.stringify(oldUsers);
        localStorage.setItem("AllUser", myJSON);
        
        let newJSON = JSON.stringify(obj)
        localStorage.setItem("User" , newJSON);
        
        window.location.href = "my-profile.html";
        ///// My Profile


}
}
);
