import React from 'react'
import { motion } from "motion/react"

const Header = (props) => {
  // console.log(props. data);
  
  const logout = () => {
    // console.log("button pressed");
        localStorage.setItem('loggedInUser','');
        props.changeUser('');
  }
  return (
    <motion.div
    initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className='flex top-[50%] mt-1 backdrop-blur-md bg-white/10 border-white/30 rounded-2xl p-4 border-4 px-5 py-3 items-end mr-2 ml-2 mb-2 justify-between'>
        <h1 className='text-xl font-semibold'>Hello<br/> <span className='text-5xl font-bold'>{props.data.firstName}👋</span></h1>
        <motion.button whileHover={{scale: 1.1}} onClick={logout} className='font-bold self-center bg-red-600 border-none h-12 w-30 rounded-2xl'>Log Out</motion.button>
    </motion.div>
  )
}

export default Header;
