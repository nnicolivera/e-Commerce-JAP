//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
        
    document.getElementById("inputButton").addEventListener("click", function(e){
        
        let inputEmail = document.getElementById("inputEmail");
        let inputPassword = document.getElementById("inputPass");
        let camposCompletos = true;

        if(inputEmail.value === ""){
            camposCompletos = false;
            alert("Ingresar correo electrónico");
        }
            
        if(inputPassword.value === ""){
            camposCompletos = false;
            alert("Ingresar contraseña");
        }
        
        if(camposCompletos){
            window.location = "inicio.html";
        }
        
    })
});