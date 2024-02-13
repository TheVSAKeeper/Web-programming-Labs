const list = document.querySelector("ul");
list.addEventListener(
  "click",
  (ev) => {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false,
);

function addItem(button) {
  const list = button.parentElement.parentElement;
  const itemsContainer = list.getElementsByClassName(
    "w3-ul w3-border w3-margin-bottom",
  )[0];

  const taskInput = list.getElementsByClassName("w3-input w3-margin-bottom")[0];

  let task = taskInput.value.trim();

  if (task === "") {
    alert("Введите текст дела.");
    return;
  }

  const newItem = document.createElement("li");
  newItem.className = "w3-bar w3-border-white w3-border w3-hover-border-green";
  newItem.innerHTML = `<span class="w3-bar-item"> ${task} </span>
            <button
              class="w3-bar-item w3-button w3-round w3-hover-red w3-right"
              onclick="deleteItem(this)"
            >
              &times;
            </button>
           `;

  itemsContainer.appendChild(newItem);
  taskInput.value = "";
}

function addList() {
  let titleInput = document.getElementById("list-title-input");
  let title = titleInput.value.trim();

  if (title === "") {
    alert("Введите название списка дела.");
    return;
  }

  const listsContainer = document.getElementById("lists-container");

  const newList = document.createElement("div");
  newList.className = "w3-card-4 w3-margin-bottom";
  newList.innerHTML = `
            <header class="w3-container w3-blue">
              <h3>${title}</h3>
            </header>

            <div class="w3-container w3-margin-top">
              <ul class="w3-ul w3-border w3-margin-bottom">
              </ul>
            </div>

            <div class="w3-bar w3-padding">
              <input
                class="w3-input w3-margin-bottom"
                placeholder="Введите дело"
                type="text"
              />

              <button
                class="w3-bar-item w3-button w3-round w3-border w3-border-green"
                onclick="addItem(this)"
              >
                Добавить дело
              </button>
              <button
                class="w3-bar-item w3-right w3-button w3-round w3-border w3-border-red"
                onclick="deleteList(this)"
              >
                Удалить список
              </button>
            </div>
    `;

  listsContainer.addEventListener(
    "click",
    (event) => {
      if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
      }
    },
    false,
  );

  listsContainer.appendChild(newList);

  titleInput.value = "";
}

function deleteItem(button) {
  let taskItem = button.parentNode;
  taskItem.parentNode.removeChild(taskItem);
}

function deleteList(button) {
  let list = button.parentNode.parentNode;
  list.parentNode.removeChild(list);
}
