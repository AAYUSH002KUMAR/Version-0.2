const input = document.querySelector("#todoInput");
const addButton = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");


addButton.addEventListener("click", function () {
    const task = input.value;
    if (task === "") {
        return;
    }
    
    const li = document.createElement("li");
    li.classList.add("todo-item");
    
    const span = document.createElement("span");
    span.textContent = task;
    span.classList.add("todo-text");
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    
    li.appendChild(span);
    li.appendChild(deleteButton);
    
    todoList.appendChild(li);
    
    input.value = "";
    
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });
    
    deleteButton.addEventListener("click", function () {
        li.remove();
    });
});