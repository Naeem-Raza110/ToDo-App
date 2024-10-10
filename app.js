let title = document.getElementById("title");
let addbtn = document.getElementById("addbtn");
let todolist = document.getElementById("todolist");
let description = document.getElementById("description");
let editTodo = null;
addbtn.addEventListener("click", () => {
  if (title.value == "") {
    alert("Please enter a valid title");
    return false;
  }
  if (description.value == "") {
    alert("Please enter a valid description");
    return false;
  }
  if (editTodo !== null) {
    editTodo.querySelector(".title").textContent = title.value;
    editTodo.querySelector(".description").textContent = description.value;
    editTodo = null;
    addbtn.innerText = "Add New Post";
  } else {
    const li = document.createElement("li");
    const titleSpan = document.createElement("span");
    titleSpan.classList.add("title");
    titleSpan.innerText = title.value;
    li.appendChild(titleSpan);
    const descSpan = document.createElement("span");
    descSpan.classList.add("description");
    descSpan.innerText = description.value;
    li.appendChild(descSpan);
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("editBtn");
    li.appendChild(editBtn);
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("deleteBtn");
    li.appendChild(deleteBtn);
    todolist.appendChild(li);
  }
  title.value = "";
  description.value = "";
});
const updateTodo = (e) => {
  if (e.target.innerText === "Delete") {
    e.target.parentElement.remove();
  }
  if (e.target.innerText === "Edit") {
    editTodo = e.target.parentElement;
    title.value = editTodo.querySelector(".title").textContent;
    description.value = editTodo.querySelector(".description").textContent;
    addbtn.innerText = "Update";
    title.focus();
  }
};
todolist.addEventListener("click", updateTodo);
