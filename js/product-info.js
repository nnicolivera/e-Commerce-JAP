//  Función que se ejecuta una vez que se haya lanzado el evento de
//  que el documento se encuentra cargado, es decir, se encuentran todos los
//  elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCT1_COMMENTS_URL).then(function (result) {
        if (result.status === "ok") {
            comments = result.data;
        }

        getJSONData(PRODUCT1_URL).then(function (result) {
            if (result.status === "ok") {

                let auto = result.data;
                if (auto.id == JSON.parse(localStorage.getItem("auto")).autoID) {
                    comments.forEach(comments => {
                        showAuto(auto, comments);
                    });
                }

                getJSONData(PRODUCTS_URL).then(function (result) {
                    if (result.status === "ok") {

                        let autos = result.data;
                        if (auto.id == JSON.parse(localStorage.getItem("auto")).autoID) {
                            showRelatedProducts(autos, auto.relatedProducts);
                        }
                    }
                });
            }
        });
    });

    getJSONData(PRODUCT2_COMMENTS_URL).then(function (result) {
        if (result.status === "ok") {
            comments = result.data;
        }

        getJSONData(PRODUCT2_URL).then(function (result) {
            if (result.status === "ok") {

                let auto = result.data;
                if (auto.id == JSON.parse(localStorage.getItem("auto")).autoID) {
                    comments.forEach(comments => {
                        showAuto(auto, comments);
                    });
                }

                getJSONData(PRODUCTS_URL).then(function (result) {
                    if (result.status === "ok") {

                        let autos = result.data;
                        if (auto.id == JSON.parse(localStorage.getItem("auto")).autoID) {
                            showRelatedProducts(autos, auto.relatedProducts);
                        }
                    }
                });
            }
        });
    });

    getJSONData(PRODUCT3_COMMENTS_URL).then(function (result) {
        if (result.status === "ok") {
            comments = result.data;
        }

        getJSONData(PRODUCT3_URL).then(function (result) {
            if (result.status === "ok") {

                let auto = result.data;
                if (auto.id == JSON.parse(localStorage.getItem("auto")).autoID) {
                    comments.forEach(comments => {
                        showAuto(auto, comments);
                    });
                }

                getJSONData(PRODUCTS_URL).then(function (result) {
                    if (result.status === "ok") {

                        let autos = result.data;
                        if (auto.id == JSON.parse(localStorage.getItem("auto")).autoID) {
                            showRelatedProducts(autos, auto.relatedProducts);
                        }
                    }
                });
            }
        });
    });

    getJSONData(PRODUCT4_COMMENTS_URL).then(function (result) {
        if (result.status === "ok") {
            comments = result.data;
        }

        getJSONData(PRODUCT4_URL).then(function (result) {
            if (result.status === "ok") {

                let auto = result.data;
                if (auto.id == JSON.parse(localStorage.getItem("auto")).autoID) {
                    comments.forEach(comments => {
                        showAuto(auto, comments);
                    });
                }

                getJSONData(PRODUCTS_URL).then(function (result) {
                    if (result.status === "ok") {

                        let autos = result.data;
                        if (auto.id == JSON.parse(localStorage.getItem("auto")).autoID) {
                            showRelatedProducts(autos, auto.relatedProducts);
                        }
                    }
                });
            }
        });
    });
});

function showAuto(auto, comm) {

    let info = "";
    let imgs = "";
    let comments = "";

    let one = document.getElementById("1star");
    let two = document.getElementById("2star");
    let thr = document.getElementById("3star");
    let fou = document.getElementById("4star");
    let fiv = document.getElementById("5star");

    info += ` 
                <div style="float: left;">
                    <h2 style="color: white;float: left;"><strong>${auto.name}</strong></h2>
                    <h4>${auto.currency} ${auto.cost}</h4>
                </div>
                <div style="float: right;">
                    <h6 style="color: black; float: left; margin-left: 570px;">${auto.soldCount} unidades vendidas</h6>
                </div>
                <br><br>
                <p style="margin-top: 5%;">${auto.description_long}</p><br>
            `;

    imgs += `   
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="img-carousel" src="img/prod${auto.id}.jpg" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img class="img-carousel" src="img/prod${auto.id}_1.jpg" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img class="img-carousel" src="img/prod${auto.id}_2.jpg" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img class="img-carousel" src="img/prod${auto.id}_3.jpg" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img class="img-carousel" src="img/prod${auto.id}_4.jpg" alt="...">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            `;

    comments += `
                    <div style="float: left;">
                        <strong>${comm.user}</strong>: ${comm.description}
                    </div>

                    <div style="float: right; margin-right: -5%;">
                        <span id="1star" class="fa fa-star"></span>
                        <span id="2star" class="fa fa-star"></span>
                        <span id="3star" class="fa fa-star"></span>
                        <span id="4star" class="fa fa-star"></span>
                        <span id="5star" class="fa fa-star"></span>
                    </div>
                    <br>
                    <strong>Rating: </strong>${comm.score}/5.
                    <br>
                    <br>
                `;
    /*
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
    */

    document.getElementById("content").innerHTML = info;
    document.getElementById("images").innerHTML = imgs;
    document.getElementById("comments").innerHTML += comments;
}

function showRelatedProducts(autos, autosRelacionados) {

    let contenido = "";

    autosRelacionados.forEach(function (indice) {

        contenido += `
                        <a href="#" onclick="relatedProductInfo(${autos[indice].id})">
                            <img class="img-related" src="img/prod${autos[indice].id}.jpg" alt="...">
                            <div style="float: left;" class="ml-3">
                                <strong> ${autos[indice].name} </strong><br>
                                ${autos[indice].currency} ${autos[indice].cost} <br><br><br>
                            </div>
                        </a>
                        <br><br>
                    `;
    });

    document.getElementById("relatedProducts").innerHTML = contenido;
}

function relatedProductInfo(id) {
    localStorage.setItem("autoRelacionado", JSON.stringify({ autoRelacionadoID: id }));
}