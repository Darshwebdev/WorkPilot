  import React from 'react'
  import Header from '../Other/Header'
  import TaskListNumber from '../Other/TaskListNumber'
  import TaskList from '../TaskList/TaskList'
  import { motion } from "motion/react"

  const EmployeeDashboard = ({changeUser,data,refreshUser}) => {
    // console.log("Props in EmployeeDashboard:", data);
    // console.log(data);
    const handleTaskStatusChange = (taskId, status) => {
    const updatedData = { ...data };
    // console.log(updatedData.tasks);
    updatedData.tasks = updatedData.tasks.map(task => {
      // console.log("Checking task.id:", task.id, "vs taskId:", taskId);
      if (task.id === taskId) {      
        return {
          ...task,
          newTask: false,
          active: false,
          completed: false,
          failed: false,
          [status]: true,
        };
      }
      return task;
    });

    localStorage.setItem('loggedInUser', JSON.stringify({
      role: 'employees',
      data: updatedData,
    }));

    refreshUser(); // triggers re-render
  };
  const getTaskStats = (tasks) => {
    const stats = {
      completed: 0,
      active: 0,
      newTask: 0,
      failed: 0,
    };

    tasks.forEach((task) => {
      if (task.completed) stats.completed++;
      if (task.active) stats.active++;
      if (task.newTask) stats.newTask++;
      if (task.failed) stats.failed++;
    });

    return stats;
  };

    return (
      
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
          <div className='w-full mt-0 p-10 bg-[#1c1c1c] h-full'>
              <Header changeUser={changeUser} data={data}/>
              <TaskListNumber taskStats={getTaskStats(data.tasks)} />
              <TaskList data={data} onStatusChange={handleTaskStatusChange} />
          </div>
      </motion.div>
    )
  }

  export default EmployeeDashboard