import React from 'react'
import { motion } from 'framer-motion'
import {
  ClipboardList,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

const TaskListNumber = ({ taskStats }) => {
  // console.log(data);
const getStatusIcon = (status) => {
  switch (status) {
    case "new":
      return <ClipboardList className="w-5 h-5 text-yellow-500" />;
    case "active":
      return <Clock className="w-5 h-5 text-blue-500" />;
    case "completed":
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case "failed":
      return <XCircle className="w-5 h-5 text-red-500" />;
    default:
      return null;
  }
};

  return (
    
    <div className='scrollbar-hide gap-8 pt-5 pl-5 pr-5 h-65 w-full flex bg-[#1c1c1c] overflow-x-auto mt-5 justify-between'>
      <motion.div
  whileHover={{ scale: 1.1 }}
  className="w-[400px] h-50 flex-shrink-0 m-0 px-6 py-6 bg-yellow-500 rounded-2xl transition-transform duration-300 text-white shadow-lg flex items-center gap-4"
>
  {/* Circular blurred glowing icon */}
  <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white bg-white/10 backdrop-blur-lg shadow-[0_0_10px_rgba(234,179,8,0.6)]">
    <ClipboardList className="w-6 h-6 text-white" strokeWidth={2.5} />
  </div>

  {/* Text block */}
  <div className="flex flex-col">
    <h1 className="text-3xl font-bold leading-tight">{taskStats.newTask}</h1>
    <p className="text-sm font-medium opacity-90">New Task</p>
  </div>
</motion.div>
  <motion.div
  whileHover={{ scale: 1.1 }}
  className='w-[400px] flex-shrink-0 m-0 px-6 py-6 bg-emerald-500 rounded-2xl transition-transform duration-300 text-white shadow-lg flex items-center h-50 gap-4'
>
 
  <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white bg-white/10 backdrop-blur-lg shadow-md">
  <CheckCircle className="w-6 h-6 text-white font-bold" />
</div>

  <div className="flex flex-col">
    <h1 className='text-3xl font-bold leading-tight'>{taskStats.completed}</h1>
    <p className='text-sm font-medium opacity-90'>Completed Task</p>
  </div>
</motion.div>

      <motion.div
  whileHover={{ scale: 1.1 }}
  className="w-[400px] flex-shrink-0 m-0 h-50 px-6 py-6 bg-blue-500 rounded-2xl transition-transform duration-300 text-white shadow-lg flex items-center gap-4"
>
  {/* Circular blurred glowing icon */}
  <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white bg-white/10 backdrop-blur-lg shadow-[0_0_10px_rgba(59,130,246,0.6)]">
    <Clock className="w-6 h-6 text-white" strokeWidth={2.5} />
  </div>

  {/* Text block */}
  <div className="flex flex-col">
    <h1 className="text-3xl font-bold leading-tight">{taskStats.active}</h1>
    <p className="text-sm font-medium opacity-90">Active Task</p>
  </div>
</motion.div>

<motion.div
  whileHover={{ scale: 1.1 }}
  className="w-[400px] flex-shrink-0 m-0 px-6 py-6 h-50 bg-rose-600 rounded-2xl transition-transform duration-300 text-white shadow-lg flex items-center gap-4"
>
  {/* Icon circle with blur + glow */}
  <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white bg-white/10 backdrop-blur-lg shadow-[0_0_10px_rgba(244,63,94,0.6)]">
    <XCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
  </div>

  {/* Text area */}
  <div className="flex flex-col">
    <h1 className="text-3xl font-bold leading-tight">{taskStats.failed}</h1>
    <p className="text-sm font-medium opacity-90">Failed Task</p>
  </div>
</motion.div>
    </div>
  )
}

export default TaskListNumber
