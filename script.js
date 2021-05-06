const addBtn = document.getElementsByClassName('create-task-btn')[0];
const rmvBtn = document.querySelector('.delete-btn');
const rmvAllBtn = document.querySelector('.delete-all-btn');
const taskTxt = document.getElementById('texto-tarefa');
const taskList = document.querySelector('.task-list');

// criar tarefas novas

addBtn.addEventListener('click', () => {
  const newTask = document.createElement('li');
  newTask.classList.add('task');
  newTask.innerHTML = taskTxt.value;
  taskList.appendChild(newTask);
});

// trocar background de item clicado

taskList.addEventListener('click', (event) => {
  const evt = event.target;
  evt.style.backgroundColor = 'rgb(128,128,128)';
});
