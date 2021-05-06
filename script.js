const addBtn = document.getElementsByClassName('create-task-btn')[0];
const rmvBtn = document.querySelector('.delete-btn');
const rmvAllBtn = document.querySelector('.delete-all-btn');
const taskTxt = document.getElementById('texto-tarefa');
const taskList = document.querySelector('.task-list');

// criar tarefas novas

function createTask() {
  const newTask = document.createElement('li');
  newTask.classList.add('task');
  newTask.innerHTML = taskTxt.value;
  taskList.appendChild(newTask);
}

addBtn.addEventListener('click', createTask);
