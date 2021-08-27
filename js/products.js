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


let autosLista = [];

function showAutos(array) {

    let datos = "";
    for (let i = 0; i < array.length; i++) {
        let auto = array[i];

        datos += `<img src= "` +  auto.imgSrc + `" width="22%" class="img-thumbnail thumbnail">`;
        datos += `
                <div class="texto">
                ` + "<strong>" + auto.name + "</strong>" + ` <br>
                ` + auto.description + ` <br>
                ` + auto.currency + ` ` + auto.cost + "." + ` <br><hr>
                </div>
                ` 

    }
    document.getElementById("listado").innerHTML = datos;
}