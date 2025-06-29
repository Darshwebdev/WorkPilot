import React, { useContext } from 'react'
import { motion } from "framer-motion";
import { AuthContext } from '../../context/AuthProvider';

const CompleteTask = ({ data }) => {
  const [userData,setUserData,] = useContext(AuthContext);
  const getRandomGreenColor = () => {
    const greenColors = [
      "bg-green-800",
      "bg-green-600",
      "bg-green-700",

    ];
  
    const randomIndex = Math.floor(Math.random() * greenColors.length);
    return greenColors[randomIndex];
  };
  const bgcolor = getRandomGreenColor();
  return (
    <motion.div
      whileHover="hover"
      className={`flex-shrink-0 cursor-pointer h-[280px] ml-5 rounded-xl p-5 w-[300px] ${bgcolor}`}
    >
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-500 text-sm font-bold text-gray-100 rounded-xl px-3 py-1'>{data.category}</h3>
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
        <button className='rounded-md text-md font-semibold shadow-sm transition px-2 py-2 bg-green-400 hover:bg-green-500'>Completed</button>
      </div>
    </motion.div>
  )
}

export default CompleteTask;
