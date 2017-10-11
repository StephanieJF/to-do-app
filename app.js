function onReady (){
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm')


  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return }


    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function removeToDo (newLi){
    toDos.splice(newLi.dataset.indexNumber,1);

    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';


    toDos.forEach(function(toDo, i) {
      const newLi = document.createElement('li');

      newLi.dataset.indexNumber = i;

      const checkbox = document.createElement('input');
      const delButton = document.createElement('button');

      checkbox.type = "checkbox";
      delButton.type = "button";
      delButton.textContent = "Remove";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(delButton);

      delButton.addEventListener('click', event => {
        removeToDo(newLi);
      })
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
};
