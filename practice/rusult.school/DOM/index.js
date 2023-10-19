const tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "Посмотреть новый урок по JavaScript",
  },
  {
    id: "1138465078062",
    completed: false,
    text: "Выполнить тест после урока",
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Выполнить ДЗ после урока",
  },
];

const tasksList = document.querySelector(".tasks-list");
const createTaskBlock = document.querySelector(".create-task-block");
const modal = document.querySelector(".modal-overlay");
const cancelButton = modal.querySelector(".delete-modal__cancel-button");
const deleteButton = modal.querySelector(".delete-modal__confirm-button");
const showInHtml = tasks.map((task) => {
  return `
        <div class="task-item" data-task-id="${task.id}">
            <div class="task-item__main-container">
                <div class="task-item__main-content">
                    <form class="checkbox-form">
                        <input class="checkbox-form__checkbox" type="checkbox" id="task-${task.id}">
                        <label for="task-${task.id}"></label>
                    </form>
                    <span class="task-item__text">
                        ${task.text}
                    </span>
                </div>
                <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
                    Удалить
                </button>
            </div>
        </div>`;
});

tasksList.innerHTML += showInHtml.join("");

createTaskBlock.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskToAdd = event.target.elements.taskName.value;
  const newTaskId = Date.now().toString();
  const newTask = {
    id: newTaskId,
    completed: false,
    text: taskToAdd,
  };

  function clearError() {
    const errorBlock = createTaskBlock.querySelector(".error-message-block");
    if (errorBlock) {
      errorBlock.remove();
    }
  }

  if (taskToAdd === "") {
    clearError();
    createTaskBlock.insertAdjacentHTML(
      "beforeend",
      `
                <span class="error-message-block">Название задачи не должно быть пустым</span>
            `
    );
    return;
  }
  const existingTask = tasks.find((task) => task.text === taskToAdd);

  if (existingTask) {
    clearError();
    createTaskBlock.insertAdjacentHTML(
      "beforeend",
      `
                <span class="error-message-block">Задача с таким названием уже существует</span>
            `
    );
    return;
  }
  clearError();
  tasks.push(newTask);
  console.log(tasks);
  createTaskBlock.reset();
  tasksList.insertAdjacentHTML(
    "beforeend",
    `
        <div class="task-item" data-task-id="${newTaskId}">
            <div class="task-item__main-container">
                <div class="task-item__main-content">
                    <form class="checkbox-form">
                        <input class="checkbox-form__checkbox" type="checkbox" id="task-${newTaskId}">
                        <label for="task-${newTaskId}"></label>
                    </form>
                    <span class="task-item__text">
                        ${taskToAdd}
                    </span>
                </div>
                <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
                Удалить
                </button>
            </div>
        </div>`
  );
});

tasksList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    const taskElement = event.target.closest(".task-item");
    const taskId = taskElement.dataset.taskId;
    openModal(taskId);
  }
});
function deleteTask(taskId) {
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
  const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
  if (taskElement) {
    taskElement.remove();
  }
  console.log(tasks);
}
function openModal(taskId) {
  modal.classList.remove("modal-overlay_hidden");
  modal.dataset.taskId = taskId;
}

function closeModal() {
  modal.classList.add("modal-overlay_hidden");
}
cancelButton.addEventListener("click", () => {
  closeModal();
});

deleteButton.addEventListener("click", () => {
  const taskId = modal.dataset.taskId;
  deleteTask(taskId);
  closeModal();
});

const body = document.body;
const allTaskItems = document.querySelectorAll('.task-item');
const allButtons = document.querySelectorAll('button')
let isDarkTheme = false;

document.addEventListener('keydown', (event) => {
	if (event.key === "Tab") {
		event.preventDefault();
		isDarkTheme = !isDarkTheme;
		if (isDarkTheme) {
			body.style.background = "#24292E";
			allTaskItems.forEach(item => {
			item.style.color = "#ffffff";
			});
			allButtons.forEach(button => {
			button.style.border = "1px solid white";
			})
		} 
		else {
			event.preventDefault();
			body.style.background = "initial";
			allTaskItems.forEach(item => {
				item.style.color = "initial";
			});
			allButtons.forEach(button => {
				button.style.border = "initial";
			});
		}
	} 
}) 