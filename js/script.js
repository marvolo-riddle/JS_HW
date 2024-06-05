'use strict';
(function () {
  const toDo = 'todo-items';
  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const button = document.querySelector('.btn-delete');
  const tbody = document.querySelector('tbody');


  const getData = () => {
    const data = JSON.parse(localStorage.getItem(toDo));
    return data ? data : [];
  }

  let currentID = (() => {
    const savedData = getData();
    return savedData.length ? Math.max(...savedData.map(item => item.id)) + 1 : 1;
  })();

  const createTodoItem = (event) => {
    event.preventDefault();
    if (!input.value.trim()) {
      return;
    }

    const dataToSave = {
      id: currentID,
      text: input.value
    };
    currentID++;
    const savedData = getData();
    savedData.push(dataToSave);
    localStorage.setItem(toDo, JSON.stringify(savedData));

    createElement(dataToSave);
    input.value = '';
  }

  const createElement = (data) => {
    if (!data) {
      return;
    }

    const todoItem = document.createElement('tr');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
      <td>#${data.id} | ${data.text}</td>
      <td>
        <button type="button" class="btn btn-danger btns">
          Delete
        </button>
      </td>
    `;
    tbody.append(todoItem);

    const buttonToDelete = todoItem.querySelector('.btns');
    const deleteTodo = (event) => {
      event.stopPropagation();
      todoItem.remove();
      const updatedData = getData().filter(item => item.id !== data.id);
      localStorage.setItem(toDo, JSON.stringify(updatedData));
    };
    buttonToDelete.addEventListener('click', deleteTodo);
  }

  const deleteAllToDo = (event) => {
    event.stopPropagation();
    tbody.innerHTML = '';
    localStorage.removeItem(toDo);
  }

  const loadTodos = () => {
    const savedData = getData();
    savedData.forEach(createElement);
  }

  form.addEventListener('submit', createTodoItem);
  button.addEventListener('click', deleteAllToDo);

  loadTodos();

})();







