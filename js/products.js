//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTS_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            productsLista = resultado.data;

            showProducts(productsLista);
        }
    });

});

var productsLista = [];
var minCost;
var maxCost;
var buscar;

function sortProducts(criterio, productsLista) {
    let result = [];
    if (criterio === 1) {
        result = productsLista.sort(
            function (a, b) {
                if (a.cost < b.cost) { return -1; }
                if (a.cost > b.cost) { return 1; }
                return 0;
            });


    } else if (criterio === 2) {
        result = productsLista.sort(
            function (a, b) {
                if (a.cost > b.cost) { return -1; }
                if (a.cost < b.cost) { return 1; }
                return 0;
            });

    } else if (criterio === 3) {
        result = productsLista.sort(
            function (a, b) {
                if (a.soldCount < b.soldCount) { return 1; }
                if (a.soldCount > b.soldCount) { return -1; }
                return 0;
            });
    }

    return result;
}

function costAsc() {
    sortProducts(1, productsLista);
    showProducts(productsLista);
}

function costDesc() {
    sortProducts(2, productsLista);
    showProducts(productsLista);
}

function soldCount() {
    sortProducts(3, productsLista);
    showProducts(productsLista);
}

function showProducts(productsLista) {

    let datos = "";
    for (let i = 0; i < productsLista.length; i++) {
        let product = productsLista[i];

        if (((minCost == undefined) || (minCost != undefined && parseInt(product.cost) >= minCost)) &&
            ((maxCost == undefined) || (maxCost != undefined && parseInt(product.cost) <= maxCost))) {

            if (buscar == undefined || product.name.toLowerCase().includes(buscar)) {

                datos += `
                            <a href="product-info.html" onclick="productInfo(${product.id})" class="no-deco h">
                                <img src= ${product.imgSrc} width="120px" class="img-thumbnail thumbnail sombra">
                                <div class="list-group-item-action h">
                                    <div style="float: left;"><strong>${product.name}</strong></div> <div style="float: right;"><small>${product.currency} ${product.cost}.</small></div>
                                    <br>
                                    ${product.description}
                                    <br><br>
                                </div>
                            </a>
                            <hr class="hr2">
                        `
            }
        }
        document.getElementById("listado").innerHTML = datos;
    }
}

function productInfo(id) {
    localStorage.setItem("product", JSON.stringify({ productID: id }));
}

document.getElementById("filtrar").addEventListener("click", function () {

    minCost = document.getElementById("min").value;
    maxCost = document.getElementById("max").value;

    if ((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0) {
        minCost = parseInt(minCost);
    } else {
        minCost = undefined;
    }
    if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0) {
        maxCost = parseInt(maxCost);
    } else {
        maxCost = undefined;
    }
    showProducts(productsLista);
});

document.getElementById("limpiar").addEventListener("click", function () {

    document.getElementById("min").value = "";
    document.getElementById("max").value = "";

    minCost = undefined;
    maxCost = undefined;

    showProducts(productsLista);
});

document.getElementById("buscador").addEventListener("input", function () {

    buscar = document.getElementById("buscador").value.toLowerCase();
    showProducts(productsLista);
});