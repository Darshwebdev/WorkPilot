  import React, { useContext } from 'react';
  import { motion } from "framer-motion";
  import { getlocalstorage } from '../../utils/LocalStorage'; // you already use this
  import { useState } from 'react';
  import { AuthContext } from '../../context/AuthProvider';
  import { toast } from 'react-toastify';

  const AcceptTask = ({ data , employeeName , onStatusChange}) => {
    // console.log(data);
    
    // const [_, __, getRandomTailwindColor] = useContext(AuthContext);
    const getRandomBlueColor = () => {
      const blueColors = [
        "bg-blue-400",
        "bg-blue-500",
        "bg-blue-600",
      ];
    
      const randomIndex = Math.floor(Math.random() * blueColors.length);
      return blueColors[randomIndex];
    };
    const bgcolor = getRandomBlueColor();
    return (
      <motion.div
        whileHover="hover"
        className={`flex-shrink-0 rounded-xl p-5 h-[280px] ml-5 w-[300px] ${bgcolor}`}>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-500 text-sm font-bold text-gray-100 rounded-xl px-3 py-2'>{data.category}</h3>
          <h4 className='text-sm font-bold text-gray-100'>{data.date}</h4>
        </div>

        {/* Animated title with underline */}
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

        <p className='text-sm font-bold text-gray-100 mt-2'>{data.description}</p>

        <div className='mt-5'>
          <button onClick={() =>{toast.success('Task Completed');onStatusChange(data.id, 'completed')}} className='rounded-md text-md  font-semibold shadow-sm transition px-2 py-2 bg-green-500 hover:bg-green-600 text-white'>Mark as completed</button>
        </div>

        <button  onClick={() =>{toast.error('Task Failed'); onStatusChange(data.id, 'failed')}} className='mt-2 rounded-md text-md font-semibold shadow-sm transition px-2 py-2 bg-red-500 hover:bg-red-600 text-white '>Mark as failed</button>
      </motion.div>
    );
  };

  export default AcceptTask;