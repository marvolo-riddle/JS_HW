'use strict';
const toDo = 'todo-items';
const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('.btn-delete');
const tbody = document.querySelector('tbody');
let currentID = 1;


const data = {
  id: null,
  text: null
};
const getData = () => {
  const data = JSON.parse(localStorage.getItem(toDo));
  return data ? data : [];
}
const createTodoItem = () => {
  event.stopPropagation();
  event.preventDefault();
  if (input) {
    const dataToSave = structuredClone(data);
    const savedData = getData();
    dataToSave[input.type] = input.value;
    dataToSave.id = currentID;
    currentID++;
    savedData.push(dataToSave);
    localStorage.setItem(toDo, JSON.stringify(savedData));

    createElement(dataToSave); // Передаем обновленные данные в функцию createElement
  }
}
const createElement = (data) => {
  event.preventDefault();
  event.stopPropagation();

  if (data) {
    const todoItem = document.createElement('tr');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `<td>#${data.id} | ${data.text}</td>
     <td>
     <button type="submit" class="btn btn-danger btns">
      Delete
      </button>
</td>`
    tbody.append(todoItem)


    const buttonToDelete = todoItem.querySelector('.btns');
    const deleteTodo = () => {
      event.stopPropagation()
      todoItem.remove()
    }
    buttonToDelete.addEventListener('click', deleteTodo)

  }
}
const deleteAllToDo = () => {
  event.stopPropagation();
  tbody.remove()
  localStorage.clear()
}


form.addEventListener('submit', createTodoItem);
button.addEventListener('click', deleteAllToDo);
