(() => {
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

    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //   taskli.innerHTML = content;

    taskli.appendChild(taskContent);
    taskList.appendChild(taskli);
  };

  btnAdd.addEventListener("click", createTask);

  const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
  };

  const completeTask = (e) => {
    const element = e.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
  };
})();
