import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';
import CompleteTask from './CompleteTask';

const TaskList = ({ data, onStatusChange }) => {
  const { tasks, firstName } = data;

  //  Filter tasks first to avoid rendering bugs
  const newTasks = tasks.filter(t => t.newTask);
  const activeTasks = tasks.filter(t => t.active && !t.completed && !t.failed);
  const completedTasks = tasks.filter(t => t.completed);
  const failedTasks = tasks.filter(t => t.failed);

  return (
    <div className='mt-0 scrollbar-hide overflow-x-auto h-[300px] gap-2 flex items-center justify-start'>
      {newTasks.map(task => (
      <NewTask key={task.id} data={task} employeeName={data.firstName} onStatusChange={onStatusChange}/> ))}

      {activeTasks.map(task => (
        <AcceptTask key={task.id} data={task} employeeName={firstName} onStatusChange={onStatusChange} />
      ))}

      {completedTasks.map(task => (
        <CompleteTask key={task.id} data={task} />
      ))}

      {failedTasks.map(task => (
        <FailedTask key={task.id} data={task} />
      ))}
    </div>
  );
};

export default TaskList;