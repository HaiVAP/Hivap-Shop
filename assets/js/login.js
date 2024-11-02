const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');
const showSignUp = document.getElementById('signup-link');
const showSignIn = document.getElementById('signin-link');

// Show Sign Up form and hide Sign In form
showSignUp.addEventListener('click', function(e) {
    e.preventDefault();
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
});

// Show Sign In form and hide Sign Up form
showSignIn.addEventListener('click', function(e) {
    e.preventDefault();
    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
});

document.getElementById('loginpage').addEventListener('click', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Giả lập kiểm tra đăng nhập (bạn có thể thay bằng cách kiểm tra từ cơ sở dữ liệu hoặc API)
    const validUsername = 'admin';
    const validPassword = '123456';

    // Kiểm tra xem người dùng có nhập đúng thông tin không
    if (username === validUsername && password === validPassword) {
        // Nếu thông tin đúng, chuyển hướng tới trang home.html
        window.location.href = "/pages/home.html";
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});