var product1 = [];
var product2 = [];
var product3 = [];
var product4 = [];
var product = [{product1}, {product2}, {product3}, {product4}];


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

                product1 = result.data;
                if (product1.id == JSON.parse(localStorage.getItem("product")).productID) {
                    comments.forEach(comments => {
                        showproductInfo(product1, comments);
                    });
                }

                getJSONData(PRODUCTS_URL).then(function (result) {
                    if (result.status === "ok") {

                        let products = result.data;
                        if (product1.id == JSON.parse(localStorage.getItem("product")).productID) {
                            showRelatedProducts(products, product1.relatedProducts);
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

                product2 = result.data;
                if (product2.id == JSON.parse(localStorage.getItem("product")).productID) {
                    comments.forEach(comments => {
                        showproductInfo(product2, comments);
                    });
                }

                getJSONData(PRODUCTS_URL).then(function (result) {
                    if (result.status === "ok") {

                        let products = result.data;
                        if (product2.id == JSON.parse(localStorage.getItem("product")).productID) {
                            showRelatedProducts(products, product2.relatedProducts);
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

                product3 = result.data;
                if (product3.id == JSON.parse(localStorage.getItem("product")).productID) {
                    comments.forEach(comments => {
                        showproductInfo(product3, comments);
                    });
                }

                getJSONData(PRODUCTS_URL).then(function (result) {
                    if (result.status === "ok") {

                        let products = result.data;
                        if (product3.id == JSON.parse(localStorage.getItem("product")).productID) {
                            showRelatedProducts(products, product3.relatedProducts);
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

                product4 = result.data;
                if (product4.id == JSON.parse(localStorage.getItem("product")).productID) {
                    comments.forEach(comments => {
                        showproductInfo(product4, comments);
                    });
                }

                getJSONData(PRODUCTS_URL).then(function (result) {
                    if (result.status === "ok") {

                        let products = result.data;
                        if (product4.id == JSON.parse(localStorage.getItem("product")).productID) {
                            showRelatedProducts(products, product4.relatedProducts);
                        }
                    }
                });
            }
        });
    });
});

function showproductInfo(product, comm) {

    let info = "";
    let imgs = "";
    let comments = "";

    let one = document.getElementById("1star");
    let two = document.getElementById("2star");
    let thr = document.getElementById("3star");
    let fou = document.getElementById("4star");
    let fiv = document.getElementById("5star");

    info += ` 
                <div class="col-10 col-md-8">
                    <h2 style="color: white;"><strong>${product.name}</strong></h2>
                </div>
                <div class="col-md-4 d-none d-md-block text-right">
                    <small class="" style="color: black;">${product.soldCount} unidades vendidas</small>
                </div>
                <div class="col-12 col-md-12">
                    <h4 style="color: rgba(255, 251, 28, 0.925);">${product.currency} ${product.cost}</h4>
                </div>
                &nbsp;
                <div class="col col-md-12">
                    <p>${product.description_long}</p>
                </div>     
            `;

    imgs += `   
                <div id="carouselExampleIndicators" class="carousel img-thumbnail slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                    <div class="carousel-inner img-hover-zoom">
                        <div class="carousel-item active">
                            <img class="img-fluid" src="img/prod${product.id}.jpg" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img class="img-fluid" src="img/prod${product.id}_1.jpg" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img class="img-fluid" src="img/prod${product.id}_2.jpg" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img class="img-fluid" src="img/prod${product.id}_3.jpg" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img class="img-fluid" src="img/prod${product.id}_4.jpg" alt="...">
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
                    <br>
                    <div style="float: left;">
                        <strong>${comm.user}</strong>: ${comm.description}
                    </div>

                    <div class="d-none d-lg-block" style="float: right;">
                        <span id="1star" class="fa fa-star"></span>
                        <span id="2star" class="fa fa-star"></span>
                        <span id="3star" class="fa fa-star"></span>
                        <span id="4star" class="fa fa-star"></span>
                        <span id="5star" class="fa fa-star"></span>
                    </div>
                    <br>
                    <div class="d-lg-none d-xl-none d-block"><strong>Rating: </strong>${comm.score}/5.</div>          
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

    document.getElementById("info").innerHTML = info;
    document.getElementById("images").innerHTML = imgs;
    document.getElementById("comments").innerHTML += comments;
}

function showRelatedProducts(products, relatedProducts) {

    let info = `
                    <a href="#" onclick="addToCart()"><img src="img/add.png" class="img-fluid" alt=""></a>
                    <br><br><div class="d-none d-lg-block mt-4"></div><div class="d-none d-xl-block mt-4"></div>
                    <h4 class="mb-4">Relacionados</h4>
                `
    relatedProducts.forEach(function (indice) {

        info +=     `
                        <div class="row mt-3">
                            <div class="col-4">
                                <a href="" class="no-deco" onclick="relatedProductInfo(${products[indice].id})">
                                    <img class="img-related img-fluid" src="img/prod${products[indice].id}.jpg" alt="...">
                                </a> 
                            </div>
                            <div class="col">
                                <a href="#" class="no-deco" onclick="relatedProductInfo(${products[indice].id})">
                                    <div>
                                        <strong> ${products[indice].name} </strong>
                                        <br>
                                        <div class="d-none d-lg-block">${products[indice].currency} ${products[indice].cost}</div>
                                    </div>
                                </a> 
                            </div>
                            <div class="col-3 d-sm-none"></div>
                        </div>
                    `;
    });

    document.getElementById("relatedProducts").innerHTML = info;
}

function relatedProductInfo(id) {
    localStorage.setItem("product", JSON.stringify({ productID: id }));
}

function addToCart() {
    localStorage.setItem('Article', JSON.stringify({
        nombre: product1.name,
        cantidad: 1,
        src: product1.images[0],
        costo: product.cost,
        moneda: product.currency
    }));
}