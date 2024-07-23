function addTask(){
    const inputTasc=document.getElementById("task").value;
    createTask(inputTasc);
}

function createTask(inputTasc){
    let taskList=document.getElementById("tasks-list");
    let newItem=document.createElement("li")
    let doneButton=document.createElement("button");
    newItem.textContent=inputTasc;
    newItem.classList.add("todo-task");
    doneButton.textContent="✅";
    doneButton.classList.add("done-button");
    newItem.appendChild(doneButton);
    taskList.appendChild(newItem);
}