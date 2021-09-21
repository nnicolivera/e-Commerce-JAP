//  Función que se ejecuta una vez que se haya lanzado el evento de
//  que el documento se encuentra cargado, es decir, se encuentran todos los
//  elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCT1_URL).then(function (result) {
        if (result.status === "ok") {

            let auto = result.data;
            if (auto.id == JSON.parse(localStorage.getItem("auto")).autoID) {
                showAuto(auto);

            }

        }
    });

    getJSONData(PRODUCT2_URL).then(function (result) {
        if (result.status === "ok") {

            let auto = result.data;
            if (auto.id == JSON.parse(localStorage.getItem("auto")).autoID) {
                showAuto(auto);

            }

        }
    });

    getJSONData(PRODUCT3_URL).then(function (result) {
        if (result.status === "ok") {

            let auto = result.data;
            if (auto.id == JSON.parse(localStorage.getItem("auto")).autoID) {
                showAuto(auto);

            }

        }
    });

    getJSONData(PRODUCT4_URL).then(function (result) {
        if (result.status === "ok") {

            let auto = result.data;
            if (auto.id == JSON.parse(localStorage.getItem("auto")).autoID) {
                showAuto(auto);
            }
        }
    });

    getJSONData(PRODUCT1_COMMENTS_URL).then(function (result) {
        if (result.status === "ok") {

            let comments = result.data;
            comments.forEach(comments => {
                if (comments.idProd == JSON.parse(localStorage.getItem("auto")).autoID) {
                    showComments(comments);
                    starRating(comments);
                }
            });
        }
    });

    getJSONData(PRODUCT2_COMMENTS_URL).then(function (result) {
        if (result.status === "ok") {

            let comments = result.data;
            comments.forEach(comments => {
                if (comments.idProd == JSON.parse(localStorage.getItem("auto")).autoID) {
                    showComments(comments);
                    starRating(comments);
                }
            });
        }
    });

    getJSONData(PRODUCT3_COMMENTS_URL).then(function (result) {
        if (result.status === "ok") {

            let comments = result.data;
            comments.forEach(comments => {
                if (comments.idProd == JSON.parse(localStorage.getItem("auto")).autoID) {
                    showComments(comments);
                    starRating(comments);
                }
            });
        }
    });

    getJSONData(PRODUCT4_COMMENTS_URL).then(function (result) {
        if (result.status === "ok") {

            let comments = result.data;
            comments.forEach(comments => {
                if (comments.idProd == JSON.parse(localStorage.getItem("auto")).autoID) {
                    showComments(comments);
                    starRating(comments);
                }
            });
        }
    });
});

function showAuto(autoInfo) {

    auto = autoInfo;
    let info = "";
    let imgs = "";

    info += ` 
                <h2 style="color: white;float: left;"><strong>${auto.name}</strong></h2>
                <h6 style="color: black; float: left; margin-left: 550px;">${auto.soldCount} unidades vendidas</h6><br>
                <p style="margin-top: 5%;">${auto.description_long}</p><br>
            `;

    imgs += `
                <img src="img/prod${auto.id}.jpg" width="200" height="150" alt="">
                <img src="img/prod${auto.id}_1.jpg" width="200" height="150" alt="">
                <img src="img/prod${auto.id}_2.jpg" width="200" height="150" alt="">
                <img src="img/prod${auto.id}_3.jpg" width="200" height="150" alt="">
                <img src="img/prod${auto.id}_4.jpg" width="200" height="150" alt=""><br><br>
                <a href="products.html" style="color: white;">Volver a la lista</a>
            `;

    document.getElementById("content").innerHTML = info;
    document.getElementById("images").innerHTML = imgs;
}

function showComments(comm) {

    comments = comm;
    let info = "";

    info += `
                <strong>${comm.user}</strong>: ${comm.description} 
                <br>
                <strong>Rating: </strong>${comm.score}/5.
                <br>
                <div style="float: right; margin-left: 600px">
                    <span id="1star" class="fa fa-star"></span>
                    <span id="2star" class="fa fa-star"></span>
                    <span id="3star" class="fa fa-star"></span>
                    <span id="4star" class="fa fa-star"></span>
                    <span id="5star" class="fa fa-star"></span>
                </div>
                <br>
                <br>
            `;

    document.getElementById("comments").innerHTML += info;
}

function starRating(comm) {
    comments = comm;
    let one = document.getElementById("1star");
    let two = document.getElementById("2star");
    let thr = document.getElementById("3star");
    let fou = document.getElementById("4star");
    let fiv = document.getElementById("5star");

    if (comm.score == 1) {
        one.classList.add("checked");
    }
    if (comm.score == 2) {
        one.classList.add("checked");
        two.classList.add("checked");
    }
    if (comm.score == 3) {
        one.classList.add("checked");
        two.classList.add("checked");
        thr.classList.add("checked");
    }
    if (comm.score == 4) {
        one.classList.add("checked");
        two.classList.add("checked");
        thr.classList.add("checked");
        fou.classList.add("checked");
    }
    if (comm.score == 5) {
        one.classList.add("checked");
        two.classList.add("checked");
        thr.classList.add("checked");
        fou.classList.add("checked");
        fiv.classList.add("checked");
    }
}

/* MODAL PARA IMPLEMENTAR DESPUÉS
 function abrir() {
     document.getElementById("vent").style.display = "block";
 }

 function cerrar() {
     document.getElementById("vent").style.display = "none";
 }

 CARGAR DATOS EN VENTANA FORMA 1
 function showInfoAutos(infoautosLista){
     let datos = "";
     for (let i = 0; i < infoautosLista.length; index++) {
         auto = infoautosLista[i];

         datos += auto.soldCount;

         document.getElementById("vent").innerHTML = datos;
     }
 }

 CARGAR DATOS EN VENTANA FORMA 2
 var showInfoAutos = auto => {
 let html = "";

 html += auto[(auto.id)].name + "<br>";
 document.getElementById("vent").innerHTML = html;
 }
 */