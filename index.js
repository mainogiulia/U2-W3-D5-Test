const productsUrl = "https://striveschool-api.herokuapp.com/api/product/";
const myToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY2NzNiMjc5YzQ1ZjAwMTU2OWI0ZTMiLCJpYXQiOjE3Mjc0Mjc1MDcsImV4cCI6MTcyODYzNzEwN30.MODhrZ5-3W2X85VjfvccqeBubtyJSRbD9P6GnGRgxus";

const createItemsCards = function (arrayOfProducts) {
  arrayOfProducts.forEach((product) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col", "col-12", "col-md-4", "col-lg-3");
    newCol.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                         </div>`;
    const newRow = document.getElementById;
  });
};

const getproduct = function () {
  fetch(productsUrl, {
    headers: {
      Authorization: myToken,
    }
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in server response");
        }
      })
      .then((items) => {
        console.log("PRODUCTS FOR SALE", items);
        createItemsCards(items);
      })
      .catch((error) => {
        console.log("ERROR", err);
      }),
  });
};

createItemsCards();
