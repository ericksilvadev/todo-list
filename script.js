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

const task = document.getElementsByTagName('li');

// trocar background de item clicado

taskList.addEventListener('click', (event) => {
  const evt = event.target;
  for (let index = 0; index < task.length; index += 1) {
    task[index].classList.remove('selected');
  }
  evt.classList.add('selected');
});

// riscar tarefas prontas

taskList.addEventListener('dblclick', (event) => {
  const evt = event.target;
  // for (let index = 0; index < task.length; index += 1) {
  //   task[index].classList.remove('selected');
  // }
  evt.classList.add('completed');
});