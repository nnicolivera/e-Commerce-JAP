const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://nnicolivera.github.io/JSON-e-Commerce/products.json";
const PRODUCT1_URL = "https://nnicolivera.github.io/JSON-e-Commerce/product1.json";
const PRODUCT2_URL = "https://nnicolivera.github.io/JSON-e-Commerce/product2.json";
const PRODUCT3_URL = "https://nnicolivera.github.io/JSON-e-Commerce/product3.json";
const PRODUCT4_URL = "https://nnicolivera.github.io/JSON-e-Commerce/product4.json";
const PRODUCT1_COMMENTS_URL = "https://nnicolivera.github.io/JSON-e-Commerce/product1_comments.json";
const PRODUCT2_COMMENTS_URL = "https://nnicolivera.github.io/JSON-e-Commerce/product2_comments.json";
const PRODUCT3_COMMENTS_URL = "https://nnicolivera.github.io/JSON-e-Commerce/product3_comments.json";
const PRODUCT4_COMMENTS_URL = "https://nnicolivera.github.io/JSON-e-Commerce/product4_comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_INFO2_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function (url) {
  var result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

  let userLogged = localStorage.getItem('User-Logged');

  let user = document.getElementById('user');

  let userContainer = document.getElementById('userContainer');

  let userLg = document.getElementById('userLg');

  if (userLogged && user) {

    userLogged = JSON.parse(userLogged);

    user.innerHTML = "Hola, " + userLogged.value;

    user.style = "display: block";

    userContainer.style = "display: block";

    userLg.innerHTML = "Hola, " + userLogged.value;

  }

  if (document.getElementById("salir")) {
    document.getElementById("salir").addEventListener("click", function () {
      localStorage.removeItem("User-Logged");
      localStorage.removeItem("User-Email")
      window.location = 'index.html';
    });
  }
});