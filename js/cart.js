var ship = document.getElementById('ship-validate');
var selectShipping = document.getElementById('inputShippingType');
var cardNum = document.getElementById('inputCardNumber');
var cardCVV = document.getElementById('inputCardCVV');
var cardDate = document.getElementById('inputCardDate');
var bankAcc = document.getElementById('inputBankAccount');
var invalidpaymentmsg = document.getElementById('invalid-payment');
var userLog = localStorage.getItem('User-Logged');
var pay;

var newArticle = localStorage.getItem('Article');

var cart = [];
var currency = "";
var subTXUnidad = "";
var subTGeneral = "";
var subTotal = "";

// function needLogin() {
//   if (!userLog) {
//     localStorage.setItem('login4cart', JSON.stringify ({
//       from: "cart.html",
//       msg: "Debes iniciar sesión para usar el carrito."
//     }));
//     window.location = "index.html";
//   }
// }

function calcSubTotalUnitary(cost, i) {

  let quantity = parseInt(document.getElementById(`quantity${i}`).value);

  let moneda = cart[i].currency;
  if (moneda == "USD") {
    subTotalUnitario = cost * 40 * quantity;
  } else {
    subTotalUnitario = cost * quantity;
  }
  subTotalUnitario += " UYU";
  document.getElementById(`costUnitSubT${i}`).innerHTML = subTotalUnitario;
  calcSubTotalGeneral();
  calcEnvio();
}

function calcSubTotalGeneral() {

  let subtotal = 0;

  let subtotales = document.getElementsByClassName("subTotalUnitario");
  for (let i = 0; i < subtotales.length; i++) {
    subtotal += parseInt(subtotales[i].innerHTML);
  }
  subtotal += " UYU";

  document.getElementById("subTotalGeneral").innerHTML = subtotal;
  document.getElementById("total").innerHTML = subtotal;
}

function calcEnvio() {
  let shipCost = document.getElementById('shipCost');
  let shipCostP = document.getElementById('shipCostPercentage');

  if (selectShipping.value === "1") {
    shipCost.innerHTML = (parseInt(document.getElementById("subTotalGeneral").innerHTML) * 0.15) + " UYU";
    shipCostP.innerHTML = " <h5><strong>Envío (15%):</strong></h5>"; 
  }
  if (selectShipping.value === "2") {
    shipCost.innerHTML = (parseInt(document.getElementById("subTotalGeneral").innerHTML) * 0.07).toFixed(0) + " UYU";
    shipCostP.innerHTML = " <h5><strong>Envío (7%):</strong></h5>"; 
  }
  if (selectShipping.value === "3") {
    shipCost.innerHTML = (parseInt(document.getElementById("subTotalGeneral").innerHTML) * 0.05) + " UYU";
    shipCostP.innerHTML = " <h5><strong>Envío (5%):</strong></h5>"; 
  }
  calcTotal();
}

function calcTotal() {

  let total = 0;

  if (selectShipping.value === "") {
    total = (parseInt(document.getElementById("subTotalGeneral").innerHTML));
  } else {
    total = (parseInt(document.getElementById("subTotalGeneral").innerHTML)) + (parseInt(document.getElementById("shipCost").innerHTML)) + " UYU";
    document.getElementById("total").innerHTML = total;
  }
}

function showCartProducts(cart) {

  let content = "";
  let ticket = "";


  ticket += `
              <div class="row">
                <div class="col-4 col-lg-12">
                  <h5><strong>Subtotal:</strong></h5>
                  <h6 id="subTotalGeneral"></h6>
                </div>
                <div class="col-4 col-lg-12">
                  <h5 id="shipCostPercentage"><strong>Envío:</strong></h5>
                  <h6 id="shipCost">Debe seleccionar</h6>
                </div>
                <div class="col-4 col-lg-12">
                  <h5><strong>Total:</strong></h5>
                  <h6 id="total"></h6> 
                </div>
              </div>
            `

  for (let i = 0; i < cart.length; i++) {

    let product = cart[i];
    currency = product.currency;

    if (currency == "USD") {
      subTXUnidad = product.unitCost * 40 * product.count
    } else {
      subTXUnidad = product.unitCost * product.count;
    }



    content += `
                  <div id=item${i} class="row bg-cart p-3">
                    <div class="col-3 text-center">
                      <img class="mt-2 img-fluid" src="${product.src}" alt="" width="150px;">
                    </div>
                    <div class="col-6 col-md-4">
                    <h5><strong><a href="#" class="mt-2 no-deco">${product.name}</a></strong></h5>
                      <br>
                      <strong>${product.unitCost} ${product.currency}</strong> <small>por unidad</small>
                      <br><br><br>
                      <a class="links" href="#" style="text-decoration: none;" onclick="remove(${i})">Eliminar</a> | <a class="links" href="#" style="text-decoration: none;">Favoritos</a>
                      <br>
                      <hr class="hr2">
                    </div>
                    <div class="col-3 col-md-2 text-center">
                      <div>
                        <input id="quantity${i}" class="mt-3 sombra" name="countID" type="number" style="width: 50px;" min="1" onchange="calcSubTotalUnitary(${product.unitCost}, ${i});" 
                        value="${product.count}" min="1">
                        <br>
                        <small>unidad/es</small>
                        <br>
                        <br>
                        <div id="costUnitSubT${i}" class="subTotalUnitario">${subTXUnidad} UYU</div>
                      </div>
                    </div>
                    <div class="col-12 col-md"></div>
                    </div>
                  </div>
                `
  }

  document.getElementById("cart").innerHTML = content;
  document.getElementById("ticket").innerHTML = ticket;
}

function remove(i) {
  localStorage.removeItem('Article');
  if (cart.length > 1) {
    cart.splice(i, 1);
    document.getElementById(`item${i}`).remove();
    showCartProducts(cart);
  } else {
    document.getElementById(`item${i}`).innerHTML = `
                                                      <div class="p-5">
                                                        <h3>¿Pensando que comprar? </h3>
                                                        <p>Visita nuestra sección de <a href="products.html"><strong>productos</strong></a>.
                                                      </div>
                                                    `
    document.getElementById('checkout').classList.add('d-none');
  }
  calcSubTotalGeneral();
  calcTotal();
}

document.getElementById('show-card').addEventListener('click', function (e) {

  document.getElementById('inputs-card').classList.replace('d-none', 'd-block');
  document.getElementById('inputs-bank').classList.replace('d-block', 'd-none');

  document.getElementById('cardModalFooter').classList.replace('d-none', 'd-block');
  document.getElementById('bankModalFooter').classList.replace('d-block', 'd-none');

});

document.getElementById('show-bank').addEventListener('click', function (e) {

  document.getElementById('inputs-bank').classList.replace('d-none', 'd-block');
  document.getElementById('inputs-card').classList.replace('d-block', 'd-none');

  document.getElementById('cardModalFooter').classList.replace('d-block', 'd-none');
  document.getElementById('bankModalFooter').classList.replace('d-none', 'd-block');

});

// function validateQuanity(i) {
//   let q = document.getElementById(`quantity${i}`);
//   let quantity = parseInt(document.getElementById(`quantity${i}`).value);

//   if (quantity < 1) {
//     q.classList.add('invalid-input');
//     return false; 
//   } else {
//     q.classList.remove('invalid-input');
//     return true;
//   }
// }

function validateCard() {
  pay = "card";
}

function validateBank() {
  pay = "bank";
}

function paymentCard() {
  if (pay == "card" && (cardNum.value == "" || cardCVV.value == "" || cardDate.value == "")) {
    invalidpaymentmsg.classList.replace('d-none', 'd-block');
    return false;
  } else {
      invalidpaymentmsg.classList.replace('d-block', 'd-none');
    return true;
  }
}

function paymentBank() {
  if (pay == "bank" && bankAcc.value == "") {
    invalidpaymentmsg.classList.replace('d-none', 'd-block');
    return false;
  } else {
      invalidpaymentmsg.classList.replace('d-block', 'd-none');
    return true;
  }
}

ship.addEventListener('submit', function (e) {
  e.preventDefault();
  e.stopPropagation();
  if (pay == "" || pay == null || !paymentCard() || !paymentBank()) {
    invalidpaymentmsg.classList.replace('d-none', 'd-block');
  } else if (ship.checkValidity()) {
    document.getElementById('done').classList.replace('d-none', 'd-block');
  }
  ship.classList.add('was-validated');
});

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function reload(e) {

  getJSONData(CART_INFO2_URL).then(function (result) {
    if (result.status === "ok") {

      cart = result.data.articles;

      if (newArticle) {
        let newItem = {
          nombre: JSON.parse(localStorage.getItem('Article')).nombre,
          cantidad: JSON.parse(localStorage.getItem('Article')).cantidad,
          src: JSON.parse(localStorage.getItem('Article')).src,
          costo: JSON.parse(localStorage.getItem('Article')).costo,
          moneda: JSON.parse(localStorage.getItem('Article')).moneda
        }
        cart.push(newItem);
      }

      showCartProducts(cart);
      calcSubTotalGeneral();
      calcTotal();
    }
  })
});