let textBox = document.querySelector(".add");
let button = document.getElementById("addbutt");
let container = document.querySelector(".container");
let typebox = document.querySelector(".add");
let remove = document.querySelector(".remove");
let dataToAdd;

function saveTasks() {
  let tasks = [];
  document.querySelectorAll(".task").forEach((task) => {
    tasks.push({
      text: task.querySelector(".info").textContent,
      done: task.querySelector(".checkbox").checked
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let saved = localStorage.getItem("tasks");
  let tasks = saved ? JSON.parse(saved) : [];
  tasks.forEach((task) => addtask(task.text, task.done));
}

function addtask(tasktext = null, isDone = false) {
  dataToAdd = tasktext !== null ? tasktext : textBox.value;
  if (!dataToAdd.trim()) return;

  let task = document.createElement("div");
  task.className = "task";
  task.innerHTML = `<input type="checkbox" class="checkbox" ${isDone ? "checked" : ""}><p class="info">${dataToAdd}</p><span class = "remove"><img src="assets/icons8-delete-30.png" alt="bin"></span>`;

  if (isDone) {
    task.querySelector(".info").style.textDecoration = "line-through";
    task.style.backgroundColor = "var(--task-hover)";
    task.style.color = "white";
  }

  container.append(task);
  textBox.value = "";
  saveTasks();
}
typebox.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addtask();
  }
});
button.addEventListener("click", () => {
  addtask();
});

button.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addtask();
  }
});
container.addEventListener("change", (e) => {
  if (e.target.classList.contains("checkbox")) {
    let task = e.target.parentElement;
    let info = task.querySelector(".info");

    if (e.target.checked) {
      info.style.textDecoration = "line-through";
      task.style.backgroundColor = "var(--task-hover)";
      task.style.color = "white";
    } else {
      info.style.textDecoration = "none";
      task.style.backgroundColor = "";
    }
    saveTasks();
  }
});
container.addEventListener("click", (e) => {
  if (e.target.closest(".remove")) {
    let bin = e.target.parentElement.parentElement;
    bin.remove();
  }
  saveTasks();
});
loadTasks();