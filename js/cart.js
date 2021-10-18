//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

  getJSONData(CART_INFO2_URL).then(function (result) {
    if (result.status === "ok") {

      cart = result.data.articles;

      showCartProducts(cart);
      calcSubTotalGeneral();
    }
  })
});

var cart = [];
var currency = "";
var subTXUnidad = "";
var subTGeneral = "";
var subTotal = "";

function calcSubTotalUnitary(cost, i) {

  let quantity = parseInt(document.getElementById(`quantity${i}`).value);

  let moneda = cart[i].currency;
  if (moneda == "USD") {
    subTotalUnitario = cost * 40 * quantity;
  } else {
    subTotalUnitario = cost * quantity;
  }
    subTotalUnitario += " UYU"
  document.getElementById(`costUnitSubT${i}`).innerHTML = subTotalUnitario;
  calcSubTotalGeneral();
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

function calcTotal() {

  let total = 0;

  document.getElementById("total").innerHTML = total;
}

function showCartProducts(cart) {

  let content = "";
  let ticket = "<strong>Subtotal:</strong>";


  ticket += `
              <h4 id="subTotalGeneral"</h4>
              <h4 id="shipCost">Envío UYU </h4>
              <h3 id="total"></h3>
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
                  <div class="col-3 text-center">
                    <img class="mt-2 img-fluid" src="${product.src}" alt="" width="150px;">
                  </div>
                  <div class="col-6 col-md-4">
                  <h5><strong><a href="#" class="mt-2 no-deco">${product.name}</a></strong></h5>
                    <br>
                    <strong>${product.unitCost} ${product.currency}</strong> <small>por unidad</small>
                    <br><br><br>
                    <a class="links" href="#" style="text-decoration: none;">Eliminar</a> | <a class="links" href="#" style="text-decoration: none;">Favoritos</a>
                    <br>
                    <hr class="hr2">
                  </div>
                  <div class="col-3 col-md-2 text-center">
                    <div>
                      <input id="quantity${i}" class="mt-3 sombra" name="countID" type="number" style="width: 50px;" onchange="calcSubTotalUnitary(${product.unitCost}, ${i});" 
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
                `
  }

  document.getElementById("cart").innerHTML = content;
  document.getElementById("ticket").innerHTML = ticket;
}