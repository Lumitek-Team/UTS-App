function checkPass() {
    let password = document.getElementById("new-password").value;
    let confirm_password = document.getElementById("confirm-password").value;
    let button = document.getElementById("confirm-button");
    let message = document.getElementById("message");

    if (password.length === 0 || confirm_password.length === 0) {
        message.textContent = "Password tidak bisa kosong!";
        message.style.color = "red";
        button.disabled = true;
        return;
    }

    if (password === confirm_password) {
        message.textContent = "Password sesuai!";
        message.style.color = "green";
        button.disabled = false;
    } else {
        message.textContent = "Passwords tidak sesuai!";
        message.style.color = "red";
        button.disabled = true;
    }
}
