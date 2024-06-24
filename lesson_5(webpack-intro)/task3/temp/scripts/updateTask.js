import "core-js/modules/es.array.find.js";
import "core-js/modules/es.object.to-string.js";
import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { updateTask, getTasksList } from "./tasksGateway.js";
export var onToggleTask = function onToggleTask(e) {
  var isCheckbox = e.target.classList.contains("list__item-checkbox");
  if (!isCheckbox) {
    return;
  }
  var taskId = e.target.dataset.id;
  var tasksList = getItem("tasksList");
  var _tasksList$find = tasksList.find(function (task) {
      return task.id === taskId;
    }),
    text = _tasksList$find.text,
    createDate = _tasksList$find.createDate;
  var done = e.target.checked;
  var updatedTask = {
    text: text,
    createDate: createDate,
    done: done,
    finishDate: done ? new Date().toISOString() : null
  };
  updateTask(taskId, updatedTask).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem("tasksList", newTasksList);
    renderTasks();
  });
};
export var deleteTask = function deleteTask(taskId) {
  deleteTask(taskId).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem('tasksList', newTasksList);
    renderTasks();
  }).catch(function (error) {
    return console.error('Failed to delete task:', error);
  });
};

// // 1. Prepare data
// // 2. Update data in db
// // 3. Read new data from server
// // 4. Save new data to front-end storage
// // 5. Update UI based on new data