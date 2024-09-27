const productsUrl = "https://striveschool-api.herokuapp.com/api/product";
const myToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY2NzNiMjc5YzQ1ZjAwMTU2OWI0ZTMiLCJpYXQiOjE3Mjc0Mjc1MDcsImV4cCI6MTcyODYzNzEwN30.MODhrZ5-3W2X85VjfvccqeBubtyJSRbD9P6GnGRgxus";

const getproducts = function () {
  fetch(productsUrl, {
    headers: {
      Authorization: myToken,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error in server response");
      }
    })
    .then((items) => {
      createItemsCards(items);
    })
    .catch((error) => {
      console.log("Error in index.js", error);
    });
};

getproducts();

const createItemsCards = function (newItem) {
  newItem.forEach((product) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col", "col-12", "col-sm-6", "col-md-4", "col-lg-3");
    newCol.innerHTML = `<div class="card mb-3" style="width: 18rem;">
                            <img src="${product.imageUrl}" class="card-img-top" alt="videogame poster">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <h6 class="card-text">Price: ${product.price} €</h6>
                                <p class="card-text">Platform: ${product.brand}</p>
                                <p class="card-text">Conditions: ${product.description}</p>
                                <a href="./details.html?productId=${product._id}" id="viewButton" class="btn text-white" style="background-color: #2c3e50">View</a>
                            </div>
                         </div>`;
    const newRow = document.getElementById("home-row");
    newRow.appendChild(newCol);
    console.log(product._id);
  });
};
