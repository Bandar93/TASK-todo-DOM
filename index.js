// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];
// SAMPLE
renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  // implement the delete task.
  // You are given the task id

  console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  tasks.push({
    title: `${taskTitle}`,
    category: `${selectedCategory}`,
    done: `${false}`,
  });
  tasks.forEach((item, i) => {
    item.id = i + 1;
  });
  renderTasks(tasks, "tasks-list");
}

function addCategory() {
  const newCategory = getNewCategoryText();
  console.log(`Add ${newCategory}`);
  categories.push(newCategory);
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // continue the code here
  // REMOVE ME: sample alert
  alert(`Category: ${selectedCategory} | done: ${done}`);
}

// let Object = {
// id: 0,
// category:${selectedCategory} ,
// }

// var element = {};
// element.push({ id: id, quantity: quantity });
// cart.push(element);
