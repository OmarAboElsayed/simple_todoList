var input = document.querySelector("input");
var btn = document.querySelector("#push");
btn.onclick = function () {
  if (input.value.length == 0) {
    alert("please enter task");
  } else {
    document.querySelector("#tasks").innerHTML += `
    <div class="task">
    <span class="taskName">${input.value}</span>
    <button class="delete"><i class="far fa-trash-alt"></i></button>
    </div>
      `;
    //   Delete tasks
    var currentTask = document.querySelectorAll(".delete");
    for (var i = 0; i < currentTask.length; i++) {
      currentTask[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    //   completed task
    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
  }
  input.value = "";
};
