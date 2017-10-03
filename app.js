function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoList = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    let delButton = document.createElement('button');

    checkbox.type = "checkbox";

    newLi.textContent = title;

    delButton.textContent = "Remove To-Do";

    toDoList.appendChild(newLi);

    newLi.appendChild(checkbox);

    newLi.appendChild(delButton);

    newToDoText.value = '';

    delButton.addEventListener('click', (event) => {
      newLi.remove();
    } )
  });
}

window.onload = function () {
  onReady();
};
