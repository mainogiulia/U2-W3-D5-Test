const productsUrl = "https://striveschool-api.herokuapp.com/api/product";
const myToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY2NzNiMjc5YzQ1ZjAwMTU2OWI0ZTMiLCJpYXQiOjE3Mjc0Mjc1MDcsImV4cCI6MTcyODYzNzEwN30.MODhrZ5-3W2X85VjfvccqeBubtyJSRbD9P6GnGRgxus";

const productContent = new URLSearchParams(location.search);
const productId = productContent.get("productId");
console.log("This is the id:", productId);

const getOneProduct = function () {
  fetch(productsUrl + "/" + productId, {
    headers: {
      Authorization: myToken,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Error: couldn't fetch the item`);
      }
    })
    .then((oneProduct) => {
      detailsCard(oneProduct);
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

getOneProduct();

const detailsCard = function (productDescr) {
  const newCol = document.createElement("div");
  newCol.classList.add("col");
  newCol.innerHTML = `<div class="card mb-3" style="width: 18rem;">
    <img src="${productDescr.imageUrl}" class="card-img-top" alt="videogame poster">
    <div class="card-body">
    <h5 class="card-title">${productDescr.name}</h5>
    <h6 class="card-text">Price: ${productDescr.price} €</h6>
    <p class="card-text">Platform: ${productDescr.brand}</p>
    <p class="card-text">Conditions: ${productDescr.description}</p>
    <a href="./details.html?productId=${productDescr._id}" id="viewButton" class="btn text-white" style="background-color: #2c3e50">View</a>
    <a href="#" id="editButton" class="btn text-white" style="background-color: #2c3e50e3">Edit</a>
    </div>
    </div>`;
  const myRow = document.getElementById("details-row");
  myRow.appendChild(newCol);
  const deleteButton = document.createElement("a");
  deleteButton.id = "deleteButton";
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    if (confirm(`Are you sure you want to delete ${product.name}?`) == true) {
      deleteProduct();
    }
  });
  newCol.querySelector(".card-body").appendChild(deleteButton);
};

const deleteProduct = function () {
  fetch(productsUrl, {
    headers: {
      method: "DELETE",
      Authorization: myToken,
    },
  })
    .then((response) => {
      if (response.ok) {
        alert(`You succesfully deleted the product`);
        // location.assign("./index.html");
      } else {
        throw new Error("Error: Item was not deleted");
      }
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};
