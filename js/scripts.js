// user interface logic
$(document).ready(function(){
  $("#tasks").submit(function(event){
    event.preventDefault();
    var taskName = $("#name").val();
    var taskPlace = $("#place").val();
    var taskTime = $("#time").val();
    var taskStatus = $("#status").val();

    var taskTodo = new Task(taskName, taskPlace, taskTime, taskStatus);

    // output
    $("#todoList").append("<li> " + taskTodo.fullDetails() + "</li>");
  });
});

// Business Logic

function Task(name, place, time, status){
  this.taskName = name;
  this.taskPlace = place;
  this.taskTime = time;
  this.taskStatus = status;
};

  Task.prototype.fullDetails = function() {
    return this.taskName + " " + this.taskPlace + " " + this.taskTime + " " + this.taskStatus;
  };
