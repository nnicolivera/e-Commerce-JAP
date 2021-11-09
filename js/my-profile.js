var imgAsDataURL = "";
var userName = document.getElementById("userName");
var userSurname = document.getElementById("userSurname");
var userAge = document.getElementById("userAge");
var userEmail = document.getElementById("userEmail");
var userPhone = document.getElementById("userPhone");

var userL = localStorage.getItem('User-Logged');
userL = JSON.parse(userL);
userEmail.value = userL.value;

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
(function () {
  window.addEventListener('load', function () {
    var form = document.getElementById('needs-validation');
    form.addEventListener('submit', function (event) {
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
      if (userEmail.checkValidity()) {
        localStorage.setItem('User-Logged', JSON.stringify({ value: userEmail.value }));
      }
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

    if (userN && userS && userB && userA && userL && userP) {
      userName.value = userN.value;
      userSurname.value = userS.value;
      userBirth.value = userB.value;
      userAge.value = userA.value;
      userEmail.value = userL.value;
      userPhone.value = userP.value;
    }

    if (userI) {
      userImage.src = userI;
    }
  }, false);
})();


var loadPhoto = function (event) {
  var userImage = document.getElementById('userImage');
  userImage.src = URL.createObjectURL(event.target.files[0]);
};

userImage.addEventListener("load", function setImage() {
  var imgCanvas = document.createElement("canvas"),
    imgContext = imgCanvas.getContext("2d");

  imgCanvas.width = userImage.width;
  imgCanvas.height = userImage.height;

  imgContext.drawImage(userImage, 0, 0, imgCanvas.width, imgCanvas.height);

  imgAsDataURL = imgCanvas.toDataURL("image/png");

}, false);


document.getElementById('remove').addEventListener('click', function () {
  localStorage.removeItem('User-Image')
  localStorage.removeItem('User-Name');
  localStorage.removeItem('User-Surname');
  localStorage.removeItem('User-Birth');
  localStorage.removeItem('User-Age');
  localStorage.removeItem('User-Phone');

  if (userName.value === "" && userSurname.value === "" && userBirth.value === "" && userAge.value === "" && userPhone.value === "") {
    document.getElementById('alert').innerHTML = `
                                                  <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                                  <small>Su <strong>correo electrónico</strong> no puede quedar vacío, pero puede cambiarlo si lo desea.</small>
                                                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                  </button>
                                                  </div>
                                                `
  }

  userImage.src = "img/avatar.png";
  userName.value = "";
  userSurname.value = "";
  userBirth.value = "";
  userAge.value = "";
  userPhone.value = "";
});