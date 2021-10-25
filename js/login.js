var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPass");
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            document.getElementById('login').addEventListener('click', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');

                if (filter.test(inputEmail.value) && inputPassword.value != "" || inputPassword.value != null) {
                    localStorage.setItem('User-Logged', JSON.stringify({ value: inputEmail.value }));
                    window.location = "inicio.html";
                }
            }, false);
        });
    }, false);
})();

// LA CONDICIÓN PARA QUE ENTRE SOLO SI COMPLETÓ LOS CAMPOS
// if (a.classList.contains("valid-feedback") && b.classList.contains("valid-feedback")) {

// }


// if (camposCompletos) {
//     window.location = "inicio.html";
//     localStorage.setItem('User-Logged', JSON.stringify({ value: inputEmail.value }));
// }


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