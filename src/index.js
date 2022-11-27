//reset btn in AddTaskForm

const resetFormBtn = document.querySelector('.removeListBtnSave')
const formToAddTask = document.querySelector('.addTaskForm')

resetFormBtn.addEventListener('click', resetFormAddTask)

function resetFormAddTask(evt) {
    evt.preventDefault();
    formToAddTask.reset()
}

// addTask

const task = document.querySelector('#addOneTask').content.querySelector('.oneCard');
const addForm = document.querySelector('.addTaskForm')
const inputTitle = document.querySelector('.task__input_title')
const inputSubtitle = document.querySelector('.task__input_subtitle')
const inputText = document.querySelector('.task__input_text')
const taskContiner = document.querySelector('.allTasks')

addForm.addEventListener('submit', prepareToAddTaskFromForm);



function addTask(title, subtitle, text) {
    const oneTask = task.cloneNode(true);
    oneTask.querySelector('.titleTask').textContent = title;
    oneTask.querySelector('.subtitleTask').textContent = subtitle;
    oneTask.querySelector('.textTask').textContent = text;
    console.log(oneTask)
    return oneTask
}
function prepareToAddTaskFromForm(evt) {
    evt.preventDefault();
    const obj = {};
    let formData = new FormData(addForm);
    formData.forEach((val, key) => (obj[key] = val));
    taskContiner.prepend(addTask(obj.title, obj.subtitle, obj.text))
    evt.target.reset();
}