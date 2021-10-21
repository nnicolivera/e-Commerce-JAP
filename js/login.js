let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPass");
let camposCompletos = true;

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    document.getElementById("entrar").addEventListener("click", function (e) {

        if (inputEmail.value === "") {
            camposCompletos = false;
            alert("Ingresar correo electrónico");
        }

        if (inputPassword.value === "") {
            camposCompletos = false;
            alert("Ingresar contraseña");
        }

        if (camposCompletos) {
            window.location = "inicio.html";
            localStorage.setItem('User-Logged', JSON.stringify({ value: inputEmail.value }));
        }

    })
});

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