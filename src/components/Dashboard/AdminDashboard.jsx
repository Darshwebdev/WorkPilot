import React from 'react'
import CreateTask from '../Other/CreateTask'
import Header from '../Other/Header'
import AllTask from '../Other/AllTask'
import { motion } from "motion/react"


const AdminDashboard = (props) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}className='pt-1 bg-black h-full w-full'>
        <div className='items-center scrollbar-hide h-full w-full justify-center'>
            <Header changeUser={props.changeUser} data={props.data}/>
            <CreateTask/>
            <AllTask/>
        </div>
    </motion.div>
  )
}

export default AdminDashboard;