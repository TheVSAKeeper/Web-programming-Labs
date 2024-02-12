function addTask() {
  let taskInput = document.getElementById("taskInput");
  let task = taskInput.value.trim();

  if (task === "") {
    alert("Введите текст дела.");
    return;
  }

  let taskList = document.createElement("ul");
  taskList.innerHTML = `
            <li>
                <input type="checkbox">
                <span>${task}</span>
                <button class="delete-task-btn" onclick="deleteTask(this)">Удалить</button>
            </li>
        `;

  document.getElementById("lists").appendChild(taskList);
  taskInput.value = "";
}

function addList() {
  let list = document.createElement("ul");
  list.innerHTML = `
        <li>
            <input type="checkbox">
            <span>Новый список дел</span>
            <button class="delete-list-btn" onclick="deleteList(this)">Удалить список</button>
        </li>
    `;

  document.getElementById("lists").appendChild(list);
}

function deleteTask(button) {
  let taskItem = button.parentNode;
  taskItem.parentNode.removeChild(taskItem);
}

function deleteList(button) {
  let list = button.parentNode.parentNode;
  list.parentNode.removeChild(list);
}
