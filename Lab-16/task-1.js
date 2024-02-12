function addProduct() {
  var productName = document.getElementById("productName").value;
  var productPrice = parseFloat(document.getElementById("productPrice").value);

  if (productName && !isNaN(productPrice)) {
    var productList = document.getElementById("products");
    var li = document.createElement("li");
    li.textContent = productName + " - " + productPrice.toFixed(2);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = () => {
      li.remove();
    };

    li.appendChild(deleteButton);
    productList.appendChild(li);

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
  } else {
    alert("Введите название продукта и стоимость.");
  }
}

function calculateTotal() {
  var total = 0;
  var productList = document
    .getElementById("products")
    .getElementsByTagName("li");

  for (let i = 0; i < productList.length; i++) {
    const priceText = productList[i].textContent.split(" - ")[1];
    total += parseFloat(priceText);
  }

  document.getElementById("total").textContent =
    "Общая сумма: " + total.toFixed(2);
}
