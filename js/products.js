//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTS_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            autosLista = resultado.data;

            showAutos(autosLista);
        }
    });

});

var autosLista = [];
var minCost;
var maxCost;
var buscar;

function sortAutos(criterio, autosLista) {
    let result = [];
    if (criterio === 1) {
        result = autosLista.sort(
            function (a, b) {
                if (a.cost < b.cost) { return -1; }
                if (a.cost > b.cost) { return 1; }
                return 0;
            });


    } else if (criterio === 2) {
        result = autosLista.sort(
            function (a, b) {
                if (a.cost > b.cost) { return -1; }
                if (a.cost < b.cost) { return 1; }
                return 0;
            });

    } else if (criterio === 3) {
        result = autosLista.sort(
            function (a, b) {
                if (a.soldCount < b.soldCount) { return 1; }
                if (a.soldCount > b.soldCount) { return -1; }
                return 0;
            });
    }

    return result;
}

function costAsc() {
    sortAutos(1, autosLista);
    showAutos(autosLista);
}

function costDesc() {
    sortAutos(2, autosLista);
    showAutos(autosLista);
}

function soldCount() {
    sortAutos(3, autosLista);
    showAutos(autosLista);
}

function showAutos(autosLista) {

    let datos = "";
    for (let i = 0; i < autosLista.length; i++) {
        let auto = autosLista[i];

        if (((minCost == undefined) || (minCost != undefined && parseInt(auto.cost) >= minCost)) &&
            ((maxCost == undefined) || (maxCost != undefined && parseInt(auto.cost) <= maxCost))) {

            if (buscar == undefined || auto.name.toLowerCase().includes(buscar)) {

                datos += `
                            <a href="product-info.html" onclick="productInfo(${auto.id})" class="no-deco">
                                <img src= ${auto.imgSrc} width="120px" class="img-thumbnail thumbnail">
                                <div class="list-group-item-action">
                                    <div style="float: left;"><strong>${auto.name}</strong></div> <div style="float: right;"><small>${auto.currency} ${auto.cost}.</small></div>
                                    <br>
                                    ${auto.description}
                                    <br><br>
                                </div>
                            </a>
                            <hr class="hr">
                        `
            }
        }
        document.getElementById("listado").innerHTML = datos;
    }
}

function productInfo(id) {
    localStorage.setItem("auto", JSON.stringify({ autoID: id }));
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
    showAutos(autosLista);
});

document.getElementById("limpiar").addEventListener("click", function () {

    document.getElementById("min").value = "";
    document.getElementById("max").value = "";

    minCost = undefined;
    maxCost = undefined;

    showAutos(autosLista);
});

document.getElementById("buscador").addEventListener("input", function () {

    buscar = document.getElementById("buscador").value.toLowerCase();
    showAutos(autosLista);
});