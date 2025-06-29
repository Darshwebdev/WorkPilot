export const updateTaskCounter = (tasks) => {
  let counter = { newTask: 0, active: 0, completed: 0, failed: 0 };

  tasks.forEach(task => {
    if (task.newTask) counter.newTask++;
    if (task.active) counter.active++;
    if (task.completed) counter.completed++;
    if (task.failed) counter.failed++;
  });

  return counter;
};
