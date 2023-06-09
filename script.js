function addTask() {
    var input = document.getElementById("taskInput");
    var deadline = document.getElementById("taskDeadline");
    var priority = document.getElementById("taskPriority");
    var task = input.value;
  
    if (task === "") {
      return;
    }
  
    var taskList = document.getElementById("taskList");
    var listItem = document.createElement("li");
    var taskDetails = document.createElement("span");
    taskDetails.textContent = task + " (Deadline: " + deadline.value + ", Priority: " + priority.value + ")";
    listItem.appendChild(taskDetails);
    taskList.appendChild(listItem);
  
    input.value = "";
    deadline.value = "";
    priority.value = "low";
  }
  
  