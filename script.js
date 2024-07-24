taskCount=0;
function addTask(){
    const inputBox=document.getElementById("input-task-name");
    const inputTask=inputBox.value;
    if(inputTask.trim()=="")
    {
        alert("Enter some info");
        return;
    }
    createTask(inputTask);
    inputBox.value="";
    
}

function createTask(inputTask){
    taskCount+=1;
    let taskList=document.getElementById("tasks-list");
    let newItem=document.createElement("li")
    let doneButton=document.createElement("button");
    newItem.textContent=inputTask;
    newItem.classList.add("todo-task");
    doneButton.textContent="✅";
    doneButton.classList.add("done-button");
    doneButton.onclick=function(){deleteItem(this.id)};
    newItem.onclick=function(){markAsDone(this.id)};
    newItem.id="task-"+taskCount;
    doneButton.id=taskCount;
    newItem.appendChild(doneButton);
    taskList.appendChild(newItem);
}

function markAsDone(id){
   let doneItem=document.getElementById(id);
   doneItem.onclick=function(){markAsNotDone(id)};
   doneItem.classList.remove("todo-task");
   doneItem.classList.add("completed-task");
}

function markAsNotDone(id){
    let doneItem=document.getElementById(id);
    doneItem.onclick=function(){
        markAsDone(this.id)};
    doneItem.classList.remove("completed-task");
    doneItem.classList.add("todo-task");
 }

 function deleteItem(id){
    document.getElementById(id).parentElement.remove();
 }