import React, { useContext } from 'react';
import { motion } from "framer-motion";
import { AuthContext } from '../../context/AuthProvider';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'react-toastify';


const NewTask = ({ data, employeeName,onStatusChange}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [userData, setUserData, ] = useContext(AuthContext);
   const getRandomyellowColor = () => {
  const tailwindColors = [
    "bg-yellow-400",
    "bg-yellow-500",
    "bg-yellow-600",
  ];

  const randomIndex = Math.floor(Math.random() * tailwindColors.length);
  return tailwindColors[randomIndex];
};
  const bgcolor = getRandomyellowColor();
  const updateTaskCounter = (tasks) => ({
    newTask: tasks.filter(t => t.newTask).length,
    active: tasks.filter(t => t.active).length,
    completed: tasks.filter(t => t.completed).length,
    failed: tasks.filter(t => t.failed).length,
  });

  const handleAcceptTask = () => {
    const updatedEmployees = userData.employees.map(emp => {
      if (emp.firstName === employeeName) {
        const updatedTasks = emp.tasks.map(task =>
          task.id === data.id
            ? { ...task, newTask: false, active: true }  // 👈 status updated
            : task
        );

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounter: updateTaskCounter(updatedTasks),
        };
      }
      return emp;
    });

    const updatedLoggedInUser = updatedEmployees.find(emp => emp.firstName === employeeName);

    const updatedData = {
      ...userData,
      employees: updatedEmployees,
      loggedInUser: updatedLoggedInUser,
    };

    setUserData(updatedData);
    localStorage.setItem('userData', JSON.stringify(updatedData));

     setShowAlert(true);
  setTimeout(() => setShowAlert(false), 2000);
  
    if (onStatusChange) {
  onStatusChange(data.id, "active"); // Pass ID and new status
}

toast.success('Task Accepted!!');
  };
// console.log(data.id);

  return (
        <motion.div
      whileHover="hover"
      className={`flex-shrink-0 cursor-pointer rounded-xl p-5 h-[280px] ml-5 w-[300px] ${bgcolor}`}
    >
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-500 text-sm font-bold text-gray-100 rounded-xl px-3 py-2'>{data.category}</h3>
        <h4 className='text-sm font-bold text-gray-100'>{data.date}</h4>
      </div>

      <motion.h2
        className='mt-5 ml-3 font-bold text-2xl relative inline-block text-white'
        variants={{ hover: { scale: 1.15 } }}
        transition={{ duration: 0.3 }}
      >
        {data.title}
        <motion.span
          className="absolute left-0 -bottom-1 h-1 bg-white"
          initial={{ width: 0 }}
          variants={{ hover: { width: '100%' } }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        />
      </motion.h2>

      <p className='text-sm font-bold text-gray-100 ml-3 mt-2 '>{data.description}</p>

      <div className='mt-5'>
        <button
          onClick={handleAcceptTask}
          className='rounded-lg px-2 font-semibold py-2 text-sm bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-sm text-white'
        >
          Accept Task
        </button>
<AnimatePresence>
  {showAlert && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="fixed hover top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-xl shadow-xl z-50"
    >
      Task Accepted!
    </motion.div>
  )}
 

</AnimatePresence>
      </div>
    </motion.div>
  );
};

export default NewTask;
