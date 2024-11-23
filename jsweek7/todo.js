const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  let taskInput = document.getElementById("taskInput").value.trim();

  if (taskInput) {
    let newTask = taskList.appendChild(document.createElement("li"));
    newTask.textContent = taskInput;
    newTask.class = "answer code";

    let deleteBtn = newTask.appendChild(document.createElement("button"));
    deleteBtn.textContent = "Remove";
    
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(newTask);
    })
  } else {
    alert("Please give your task a name.");
  }
  
  document.getElementById("taskInput").value = "";
  document.getElementById("taskInput").focus();
})