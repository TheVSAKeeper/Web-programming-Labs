function addProduct() {
  let productName = document.getElementById("productName").value;
  let productPrice = parseFloat(document.getElementById("productPrice").value);

  if (!(productName && isNaN(productPrice) === false)) {
    alert("Введите название продукта и стоимость.");
    return;
  }

  let productList = document.getElementById("products");
  let li = document.createElement("li");
  li.className = "w3-display-container";
  li.textContent = `${productName} - ${productPrice.toFixed(2)}`;

  let deleteButton = document.createElement("span");
  deleteButton.textContent = `x`;
  deleteButton.className = "w3-button w3-display-right";
  deleteButton.onclick = () => {
    li.remove();
  };

  li.appendChild(deleteButton);
  productList.appendChild(li);

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
}

function calculateTotal() {
  let total = 0;
  let productList = document
    .getElementById("products")
    .getElementsByTagName("li");

  for (let i = 0; i < productList.length; i++) {
    const priceText = productList[i].textContent.split(" - ")[1];
    total += parseFloat(priceText);
  }

  document.getElementById("total").textContent =
    `Общая сумма: ${total.toFixed(2)}`;
}
