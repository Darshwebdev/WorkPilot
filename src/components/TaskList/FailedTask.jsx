import React, { useContext } from 'react'
import { motion } from "framer-motion";
import { AuthContext } from '../../context/AuthProvider';

const FailedTask = ({ data }) => {
  const [userData,setUserData,] = useContext(AuthContext);
  const getRandomRoseColor = () => {
  const roseColors = [
    "bg-rose-500",
    "bg-rose-600",
    "bg-rose-700",
  ];

  const randomIndex = Math.floor(Math.random() * roseColors.length);
  return roseColors[randomIndex];
};
  const bgcolor = getRandomRoseColor();
  return (
    <motion.div
      whileHover="hover"
      className={`flex-shrink-0 cursor-pointer rounded-xl p-5 h-[280px] ml-5 w-[300px] ${bgcolor}`}
    >
      <div className='flex justify-between items-center'>
        <h3 className='bg-yellow-500 text-sm font-bold text-gray-100 rounded-xl px-3 py-1'>{data.category}</h3>
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

      <p className='text-sm font-bold text-gray-100 ml-3 mt-2'>{data.description}</p>

      <div className='mt-5'>
        <button className='rounded-md text-md px-4 py-2 border-black bg-red-400 hover:bg-red-500 text-white  font-semibold shadow-sm transition'>Failed</button>
      </div>
    </motion.div>
  )
}

export default FailedTask;
