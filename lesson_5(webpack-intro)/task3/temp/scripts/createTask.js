import { renderTasks } from "./renderer.js";
import { setItem } from "./storage.js";
import { createTask, getTasksList } from "./tasksGateway.js";
export var onCreateTask = function onCreateTask() {
  var taskTitleInputElem = document.querySelector(".task-input");
  var text = taskTitleInputElem.value;
  if (!text) {
    return;
  }
  taskTitleInputElem.value = "";
  var newTasks = {
    text: text,
    done: false,
    createDate: new Date().toISOString()
  };
  createTask(newTasks).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem("tasksList", newTasksList);
    renderTasks();
  });
};