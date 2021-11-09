var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPass");
var togglePassword = document.getElementById("toggle-password");

(function () {
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');

        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                if (form.checkValidity()) {
                    localStorage.setItem('User-Logged', JSON.stringify({ value: inputEmail.value }));
                    window.location = "inicio.html";
                  }
                  form.classList.add('was-validated');
                
            }, false);
        });
    }, false);

    togglePassword.addEventListener("click", function showPassword() {
        if (this.checked) {
            inputPassword.type = "text";
        } else {
            inputPassword.type = "password";
        }
        inputPassword.classList.toggle('visible'); 
    });
    
})();

function forgotPassword() {
    document.getElementById('login-inputs').classList.add('d-none');
    
}
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