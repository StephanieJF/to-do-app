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

  function renderTheUI(toDos) {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    //create index and start before 0, matching the start of the array???
    var elindex = -1;

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');

      elindex++;

      newLi.dataset.indexNumber = elindex;

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
        toDoList.removeChild(newLi);

        toDos.splice(newLi.dataset.indexNumber,1);
        renderTheUI(toDos);
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
