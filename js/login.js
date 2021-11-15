var form = document.getElementById('needs-validation');
var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPass");
var togglePassword = document.getElementById("toggle-password");
var login4cart = localStorage.getItem('login4cart');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
    } else {
        form.classList.add('was-validated');
        localStorage.setItem('User-Logged', JSON.stringify({ value: inputEmail.value }));
        window.location = "inicio.html";
    } 
});

togglePassword.addEventListener("click", function showPassword() {
    if (this.checked) {
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password";
    }
    inputPassword.classList.toggle('visible'); 
});

function forgotPassword() {
    document.getElementById('login-inputs').classList.add('d-none');
    
}

document.addEventListener('DOMContentLoaded', function (e) {
    
    if (login4cart) {
        login4cart = JSON.parse(login4cart);
        document.getElementById('need-login').innerHTML =` <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                            <strong>¡Oops!</strong> ${login4cart.msg}
                                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            </div>
                                                        `;
        localStorage.removeItem('logni4cart');
    }
})
// INICIAR SESIÓN CON GOOGLE (EN PROGRESO)
// function handleCredentialResponse(response) {
//     console.log("Encoded JWT ID token: " + response.credential);
// }
// window.onload = function () {
//     google.accounts.id.initialize({
//         client_id: "801182614848-fclhb3ime35fmiceppdeaa94c9ue5kqa.apps.googleusercontent.com",
//         callback: handleCredentialResponse
//     });
//     google.accounts.id.renderButton(
//         document.getElementById("buttonDiv"),
//         { theme: "outline", size: "large" }  // customization attributes
//     );
//     google.accounts.id.prompt(); // also display the One Tap dialog
// }
// INICIAR SESIÓN CON GOOGLE (EN PROGRESO)