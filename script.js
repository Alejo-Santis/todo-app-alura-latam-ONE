const btnAdd = document.querySelector("[data-form-btn]");
const inputTask = document.querySelector("[data-form-input]");

const createTask = (e) => {
  e.preventDefault();
  console.log(inputTask.value);
};

btnAdd.addEventListener("click", createTask);
