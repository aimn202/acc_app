let users = JSON.parse(localStorage.getItem('users')) || {};
let currentUser = localStorage.getItem('currentUser');

function loginUser() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (users[username] && users[username].password === password) {
        localStorage.setItem('currentUser', username);
        window.location.href = "home.html";
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
    }
}

function logoutUser() {
    localStorage.removeItem('currentUser');
    window.location.href = "login.html";
}
