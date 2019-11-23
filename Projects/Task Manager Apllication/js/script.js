//Initialize the Task Array
var taskListArray=[];

//Get all the buttons
var addTask = document.getElementById("addTask");
var sortTask = document.getElementById("sortTask");
var delTask = document.getElementById("delTask");

//Get the TaskList
var taskList = document.getElementById("taskList");

function updateTaskList(){
    //If there are no tasks in the List, set its value to empty
    if (taskListArray.length == 0){
        taskList.value = "";
    }else{
        // Initialise a string called list and update the string with the new tasks
        var list="";
        for(var i in taskListArray){
            list += (parseInt(i)+1) + ": "+taskListArray[i]+"\n";
        }
        taskList.value = list; //List out the array in the text area
    }
}

addTask.onclick = function addTaskList(){
    addTask.blur();
    var task = prompt("Enter a Task:", "");
    if (task!="" && task!=null){
        taskListArray[taskListArray.length] = task;
        updateTaskList();
    }
}

sortTask.onclick = function sortTaskList(){
    sortTask.blur();
    taskListArray.sort();
    updateTaskList();
}

delTask.onclick = function deleteTaskList(){
    delTask.blur();
    if (taskListArray.length == 0){
        alert("No task to delete!");
        return;
    }

    var toDelete = prompt("Enter a task number to delete:","");
    if (toDelete == null){return;}

    toDelete = parseInt(toDelete);
    if (isNaN(toDelete)){
        alert("You did not enter a number!");
        return;
    }
    if (toDelete<1){
        alert("Enter a proper number!");
        return;
    }

    if (toDelete>taskListArray.length){
        alert("Enter a valid task number");
        return;
    }
    toDelete--; //To get the correct number from the array
    taskListArray.splice(toDelete,1);
    updateTaskList();
}

