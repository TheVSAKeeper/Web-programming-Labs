function addTask() {
  var taskInput = document.getElementById("taskInput");
  var task = taskInput.value.trim();

  if (task !== "") {
    var taskList = document.createElement("ul");
    taskList.innerHTML = `
            <li>
                <input type="checkbox">
                <span>${task}</span>
                <button class="delete-task-btn" onclick="deleteTask(this)">Удалить</button>
            </li>
        `;

    document.getElementById("lists").appendChild(taskList);
    taskInput.value = "";
  } else {
    alert("Введите текст дела.");
  }
}

function addList() {
  var list = document.createElement("ul");
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
  var taskItem = button.parentNode;
  taskItem.parentNode.removeChild(taskItem);
}

function deleteList(button) {
  var list = button.parentNode.parentNode;
  list.parentNode.removeChild(list);
}
