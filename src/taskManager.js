function createTask(title, dueDate = null) {
  if (typeof title !== 'string' || !title.trim()) throw new Error('Task title is required.');
  return { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7), title: title.trim(), dueDate, completed: false };
}
function addTask(tasks, title, dueDate = null) {
  if (!Array.isArray(tasks)) throw new TypeError('Tasks must be an array.');
  return [...tasks, createTask(title, dueDate)];
}
function completeTask(tasks, id) {
  if (!Array.isArray(tasks)) throw new TypeError('Tasks must be an array.');
  if (!tasks.some(t => t.id === id)) throw new Error('Task not found.');
  return tasks.map(t => t.id === id ? { ...t, completed: true } : t);
}
function removeTask(tasks, id) {
  if (!Array.isArray(tasks)) throw new TypeError('Tasks must be an array.');
  return tasks.filter(t => t.id !== id);
}
function getPendingTasks(tasks) {
  if (!Array.isArray(tasks)) throw new TypeError('Tasks must be an array.');
  return tasks.filter(t => !t.completed);
}
module.exports = { createTask, addTask, completeTask, removeTask, getPendingTasks };
