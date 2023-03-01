const btnAdd = document.querySelector("[data-form-btn]");
const inputTask = document.querySelector("[data-form-input]");
const taskList = document.querySelector("[data-list]");

const createTask = (e) => {
  e.preventDefault();
  const value = inputTask.value;
  const taskli = document.createElement("li");
  taskli.classList.add("card");
  inputTask.value = "";
  const content = `
    <div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
  taskli.innerHTML = content;
  taskList.appendChild(taskli);
};

btnAdd.addEventListener("click", createTask);
