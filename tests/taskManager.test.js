const { createTask, addTask, completeTask, removeTask, getPendingTasks } = require('../src/taskManager');
describe('Student Task Manager', () => {
  test('creates a task and trims title', () => {
    const task = createTask('  Study DSA  ');
    expect(task.title).toBe('Study DSA'); expect(task.completed).toBe(false); expect(task.dueDate).toBeNull();
  });
  test('rejects an empty title', () => { expect(() => createTask(' ')).toThrow('Task title is required.'); });
  test('adds without mutating the original array', () => {
    const old = []; const next = addTask(old, 'Finish report');
    expect(old).toHaveLength(0); expect(next).toHaveLength(1);
  });
  test('marks a task completed', () => {
    const task = createTask('Revise SQL'); expect(completeTask([task], task.id)[0].completed).toBe(true);
  });
  test('throws for unknown task ID', () => { expect(() => completeTask([], 'missing')).toThrow('Task not found.'); });
  test('removes a task', () => {
    const task = createTask('Read notes'); expect(removeTask([task], task.id)).toEqual([]);
  });
  test('filters pending tasks', () => {
    expect(getPendingTasks([{id:'1',completed:false},{id:'2',completed:true}])).toEqual([{id:'1',completed:false}]);
  });
});
