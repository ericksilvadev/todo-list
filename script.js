const addBtn = document.getElementsByClassName('create-task-btn')[0];
const rmvBtn = document.querySelector('.delete-btn');
const rmvAllBtn = document.querySelector('.delete-all-btn');
const taskTxt = document.getElementById('texto-tarefa');
const taskList = document.querySelector('.task-list');

// criar tarefas novas

addBtn.addEventListener('click', () => {
  const newTask = document.createElement('li');
  // newTask.classList.add('task');
  newTask.innerHTML = taskTxt.value;
  taskList.appendChild(newTask);
  taskTxt.value = '';
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
  if (evt.classList.contains('completed')) {
    evt.classList.remove('completed');
  } else {
    evt.classList.add('completed');
  }
});

// apagar tudo

rmvAllBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
});

// apagar tarefas finalizadas

rmvBtn.addEventListener('click', () => {
  const completesTasks = document.getElementsByClassName('completed');
  for (let index = completesTasks.length - 1; index >= 0; index -= 1) {
    taskList.removeChild(completesTasks[index]);
  }
  // let teste = task.length;
  // for (let index = 0; index < teste; index += 1) {
  //   console.log(teste);
  //   // console.log(task[index].classList);
  //   if (task[index]) {
  //     if (task[index].classList.contains('completed')) {
  //       taskList.removeChild(task[index]);
  //       console.log('tarefa removida');
  //     }
  //   }
  //   console.log('teste', task);
  // }
});
