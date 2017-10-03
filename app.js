function onReady() {
  var toDos = [];
  var addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo () {
    var newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
      newToDoText.value = '';

      renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    var todoList = document.getElementById('toDoList');

    toDoList.innerHTML = '';

    toDos.forEach(function(toDo) {
      var newLi = document.createElement('li');
      var checkbox = document.createElement('input');
      var delButton = document.createElement('button');
      checkbox.type = "checkbox";

      newLi.innerHTML = toDo.title;

      delButton.textContent = "Remove To-Do";

      todoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(delButton);

      delButton.addEventListener('click', function(event) {
        newLi.remove();
      });
    });
  }

  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    createNewToDo();
  });

renderTheUI(toDos);
}

window.onload = function () {
  onReady();
};
