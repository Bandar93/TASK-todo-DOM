// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let id = 0;
let tasks = [{ id: "", title: "", category: "", done: false }];
let categories = [];

// REMOVE ME: SAMPLE FILLING
// tasks = [
//   { id: 0, title: "Game of thrones", category: "Movies", done: false },
//   { id: 1, title: "Toy Story 4", category: "Movies", done: false },
// ];

categories = ["Movies", "Groceries"];
// SAMPLE
renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, task.title);

function taskChecked(taskId, checked) {
  // implement the delete task.
  // You are given the task id

  console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  // const done === false

  // continue the code here
  tasks.push({
    id: id++,
    title: `${taskTitle}`,
    category: `${selectedCategory}`,
    done: taskChecked(taskId, checked),
  });

  alert(`Category: ${selectedCategory} | Task: ${taskTitle}`);
}

function addCategory() {
  const newCategory = getNewCategoryText();
  // continue the code here
  alert(`New category was added: ${newCategory}`);
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
