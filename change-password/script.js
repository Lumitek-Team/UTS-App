function checkPass() {
    let password = document.getElementById("new-password").value;
    let confirm_password = document.getElementById("confirm-password").value;
    console.log(password,confirm_password);
    let message = document.getElementById("message");

    if (password.length != 0) {
        if (password == confirm_password) {
            message.textContent = "Password has been successfully changed!";
        }
        else {
            message.textContent = "Password does not match";
        }
    } else {
        alert("Password can't be empty!");
        message.textContent = "";
    }
}