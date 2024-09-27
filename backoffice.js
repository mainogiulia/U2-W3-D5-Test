const productsUrl = "https://striveschool-api.herokuapp.com/api/product";
const myToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY2NzNiMjc5YzQ1ZjAwMTU2OWI0ZTMiLCJpYXQiOjE3Mjc0Mjc1MDcsImV4cCI6MTcyODYzNzEwN30.MODhrZ5-3W2X85VjfvccqeBubtyJSRbD9P6GnGRgxus";

const productContent = new URLSearchParams(location.search);
const productId = productContent.get("productId");
console.log("This is the id:", productId);

class product {
  constructor(_imageUrl, _name, _price, _brand, _description) {
    this.imageUrl = _imageUrl;
    this.name = _name;
    this.price = _price;
    this.brand = _brand;
    this.description = _description;
  }
}

if (productId) {
  fetch(productsUrl + "/" + productId, {
    headers: {
      Authorization: myToken,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error: cannot edit product");
      }
    })
    .then((oneProduct) => {
      // const imageInput = document.getElementById("image");
      // const nameItem = document.getElementById("name");
      // const priceItem = document.getElementById("price");
      // const brandItem = document.getElementById("brand");
      // const descriptionItem = document.getElementById("description");

      // imageInput.value = oneProduct.image;
      // nameItem.value = oneProduct.name;
      // priceItem.value = oneProduct.price;
      // brandItem.value = oneProduct.brand;
      // descriptionItem.value = oneProduct.description;

      //IL BROWSER DICE TypeError: Cannot set properties of null (setting 'value') E NON RIESCO A RISOLVERLO

      const modifiedButton = document.getElementById("form-button");
      modifiedButton.innerText = "EDIT PRODUCT";
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
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

  let rightUrl;
  if (productId) {
    rightUrl = productsUrl + "/" + productId;
  } else {
    rightUrl = productsUrl;
  }

  let rightMethod;
  if (productId) {
    rightMethod = "PUT";
  } else {
    rightMethod = "POST";
  }

  fetch(rightUrl, {
    method: rightMethod,
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
