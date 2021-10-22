var imgAsDataURL = "";
var userName = document.getElementById("userName");
var userSurname = document.getElementById("userSurname");
var userAge = document.getElementById("userAge");
var userEmail = document.getElementById("userEmail");
var userPhone = document.getElementById("userPhone");

let userL = localStorage.getItem('User-Logged');
userL = JSON.parse(userL);
userEmail.value = userL.value;

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Se hace un fetch a todos los formularios que queremos aplicarles las clases de validación con estilos de Bootstrap
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      document.getElementById('save').addEventListener('click', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
        localStorage.setItem("User-Image", imgAsDataURL);
        localStorage.setItem('User-Name', JSON.stringify({ value: userName.value }));
        localStorage.setItem('User-Surname', JSON.stringify({ value: userSurname.value }));
        localStorage.setItem('User-Birth', JSON.stringify({ value: userBirth.value }));
        localStorage.setItem('User-Age', JSON.stringify({ value: userAge.value }));
        localStorage.setItem('User-Logged', JSON.stringify({ value: userEmail.value }));
        localStorage.setItem('User-Phone', JSON.stringify({ value: userPhone.value }));
      }, false);

        let userI = localStorage.getItem('User-Image');
        let userN = localStorage.getItem('User-Name');
        let userS = localStorage.getItem('User-Surname');
        let userB = localStorage.getItem('User-Birth');
        let userA = localStorage.getItem('User-Age');
        let userL = localStorage.getItem('User-Logged');
        let userP = localStorage.getItem('User-Phone');

        userN = JSON.parse(userN);
        userS = JSON.parse(userS);
        userB = JSON.parse(userB);
        userA = JSON.parse(userA);
        userL = JSON.parse(userL);
        userP = JSON.parse(userP);

        if (userI && userN && userS && userB && userA && userL && userP) {
          userImage.src = userI;
          userName.value = userN.value;
          userSurname.value = userS.value;
          userBirth.value = userB.value;
          userAge.value = userA.value;
          userEmail.value = userL.value;
          userPhone.value = userP.value;
        }

      document.getElementById('remove').addEventListener('click', function() {
        localStorage.removeItem('User-Image')
        localStorage.removeItem('User-Name');
        localStorage.removeItem('User-Surname');
        localStorage.removeItem('User-Birth');
        localStorage.removeItem('User-Age');
        localStorage.removeItem('User-Phone');
      });
    });
  }, false);
})();


var loadPhoto = function(event) {
	var userImage = document.getElementById('userImage');
	userImage.src = URL.createObjectURL(event.target.files[0]);
};

// Take action when the image has loaded
userImage.addEventListener("load", function () {
    var imgCanvas = document.createElement("canvas"),
        imgContext = imgCanvas.getContext("2d");

    // Make sure canvas is as big as the picture
    imgCanvas.width = userImage.width;
    imgCanvas.height = userImage.height;

    // Draw image into canvas element
    imgContext.drawImage(userImage, 0, 0, imgCanvas.width, imgCanvas.height);

    // Get canvas contents as a data URL
    imgAsDataURL = imgCanvas.toDataURL("image/png");

}, false); 
