taskCount=0;
function addTask(){
    const input=document.getElementById("task");
    const inputTask=input.value;
    if(inputTask=="")
    {
        alert("Enter some info");
        return;
    }
    createTask(inputTask);
    input.value="";
    
}

function createTask(inputTasc){
    taskCount+=1;
    let taskList=document.getElementById("tasks-list");
    let newItem=document.createElement("li")
    let doneButton=document.createElement("button");
    newItem.textContent=taskCount+"."+inputTasc;
    newItem.classList.add("todo-task");
    doneButton.textContent="✅";
    doneButton.classList.add("done-button");
    doneButton.addEventListener("click",function(){deleteItem(this.id)});
    newItem.addEventListener("click",function(){markAsDone(this.id)});
    newItem.id="task-"+taskCount;
    doneButton.id=taskCount;
    newItem.appendChild(doneButton);
    taskList.appendChild(newItem);
}

function markAsDone(id){
   let doneItem=document.getElementById(id);
   doneItem.addEventListener("click",function(){
    markAsNotDone(id);
   });
   doneItem.classList.remove("todo-task");
   doneItem.classList.add("completed-task");
}

function markAsNotDone(id){
    let doneItem=document.getElementById(id);
    doneItem.addEventListener("click",function(){
        markAsDone(this.id)
    });
    doneItem.classList.remove("completed-task");
    doneItem.classList.add("todo-task");
 }

 function deleteItem(id){
    alert(id);
    document.getElementById(id).parentElement.remove();
 }