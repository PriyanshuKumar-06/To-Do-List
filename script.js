let textBox = document.querySelector(".add");
let button = document.getElementById("addbutt");
let container = document.querySelector(".container");
let typebox = document.querySelector(".add")
let dataToAdd;
function addtask() {
  dataToAdd = textBox.value;
  if (!dataToAdd.trim()) return;
  let task = document.createElement("div");
  task.className = "task";
  task.innerHTML = `<input type="checkbox" class="checkbox"><p class="info">${dataToAdd}</p>`;
  container.append(task);
  textBox.value = "";
  return dataToAdd;
}
typebox.addEventListener("keydown", (event)=>{
  if(event.key == 'Enter'){
    addtask()
  }
})
button.addEventListener("click", () => {
  addtask();
});

button.addEventListener("keydown", (event)=>{
  if(event.key == 'Enter'){
    addtask()
  }
})
container.addEventListener("change", (e) => {
  if (e.target.classList.contains("checkbox")) {
    let task = e.target.parentElement;
    let info = task.querySelector(".info");

    if (e.target.checked) {
      info.style.textDecoration = "line-through";
      task.style.backgroundColor = "#949089";
      task.style.color = "white";
    } else {
      info.style.textDecoration = "none";
      task.style.backgroundColor = "#d0c9b8"
      task.style.color = "black";
    }
  }
});
