class product {
  constructor(_name, _price, _platform, _category, _conditions) {
    this.name = _name;
    this.price = _price;
    this.platform = _platform;
    this.category = _category;
    this.conditions = _conditions;
  }
}

const productCreation = document.getElementById("product-form");
productCreation.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const platform = document.getElementById("platform").value;
  const category = document.getElementById("category").value;
  const conditions = document.getElementById("conditions").value;

  const newItem = new product(name, price, platform, category, conditions);
  console.log("PRODOTTO CREATO DAL FORM", newItem);
});
