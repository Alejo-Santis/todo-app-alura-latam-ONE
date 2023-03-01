import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btnAdd = document.querySelector("[data-form-btn]");

const createTask = (e) => {
  e.preventDefault();
  const inputTask = document.querySelector("[data-form-input]");
  const value = inputTask.value;
  const taskList = document.querySelector("[data-list]");
  const taskli = document.createElement("li");

  taskli.classList.add("card");
  inputTask.value = "";

  const taskContent = document.createElement("div");
  taskContent.appendChild(checkComplete());

  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;

  taskContent.appendChild(titleTask);
  taskli.appendChild(taskContent);
  taskli.appendChild(deleteIcon());
  taskList.appendChild(taskli);
};

btnAdd.addEventListener("click", createTask);
