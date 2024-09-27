const productsUrl = "https://striveschool-api.herokuapp.com/api/product";
const myToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY2NzNiMjc5YzQ1ZjAwMTU2OWI0ZTMiLCJpYXQiOjE3Mjc0Mjc1MDcsImV4cCI6MTcyODYzNzEwN30.MODhrZ5-3W2X85VjfvccqeBubtyJSRbD9P6GnGRgxus";

class product {
  constructor(_imageUrl, _name, _price, _brand, _description) {
    this.imageUrl = _imageUrl;
    this.name = _name;
    this.price = _price;
    this.brand = _brand;
    this.description = _description;
  }
}

const productCreation = document.getElementById("product-form");
productCreation.addEventListener("submit", (event) => {
  event.preventDefault();
  const image = document.getElementById("imageUrl").value;
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const brand = document.getElementById("brand").value;
  const description = document.getElementById("description").value;

  const newItem = new product(image, name, price, brand, description);

  fetch(productsUrl, {
    method: "POST",
    body: JSON.stringify(newItem),
    headers: {
      "content-type": "application/json",
      Authorization: myToken,
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Product succesfully added to the store!");
        productCreation.reset();
      } else {
        throw new Error("Error in server response");
      }
    })
    .catch((error) => {
      console.log("Error in backoffice.js", error);
    });
});
