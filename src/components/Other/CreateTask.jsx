import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';
import { updateTaskCounter } from '../../utils/CounterUtils'; // adjust path
import { toast } from 'react-toastify';

// const {setUserData} = useContext(AuthContext);


const CreateTask = () => {
  const [userData,setUserData] = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  // const [newtask, setNewTask] = useState({})

  const submithandler = (e) => {
  e.preventDefault();
  const task = {
    id: Date.now(), 
    title,
    taskDate,
    category,
    description,
    active: false,      
    newTask: true,
    failed: false,
    completed: false
  };

  const updatedEmployees = userData.employees.map((emp) => {
    if (emp.firstName === assignTo) {
      const updatedTasks = [...emp.tasks, task];
      return {
        ...emp,
        tasks: updatedTasks,
        taskCounter: updateTaskCounter(updatedTasks)
      };
    }
    return emp;
  });

  const updatedData = {
    ...userData,
    employees: updatedEmployees
  };

  setUserData(updatedData);
  localStorage.setItem("employees", JSON.stringify(updatedEmployees)); // persist it
  localStorage.setItem("admin", JSON.stringify(userData.admin));
  // Clear form
  setCategory('');
  setAssignTo('');
  setDescription('');
  setTaskDate('');
  setTitle('');
  toast.success('Task Created successfully');
};

  
  return (
    <div className="bg-[#1e1e1e] p-6 rounded-md w-full  mx-auto text-white">
          <form onSubmit={(e)=>{submithandler(e);}} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 mr-50 ">
          <div>
            <label className="block mb-1">Task Title</label>
            <input
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value);
            }}
              type="text"
              placeholder="Make a UI design"
              className="w-full bg-transparent border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-1">Date</label>
            <input
            value={taskDate}
            onChange={(e)=>{
              setTaskDate(e.target.value);
            }}
              type="date"
              className="w-full bg-transparent border rounded px-3 py-2 text-white outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-1">Assign to</label>
            <input
            value={assignTo}
            onChange={(e)=>{
              setAssignTo(e.target.value);
            }}
              type="text"
              placeholder="employee name"
              className="w-full bg-transparent border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-1">Category</label>
            <input
            value={category}
            onChange={(e)=>{
              setCategory(e.target.value);
            }}
              type="text"
              placeholder="design, dev, etc"
              className="w-full bg-transparent border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between">
          <div>
            <label className="block ">Description</label>
            <textarea
            value={description}
            onChange={(e)=>{
              setDescription(e.target.value);
            }}
              rows="9"
              className="w-full bg-transparent border rounded px-3 py-2 outline-none resize-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <button type="submit" className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask;