import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
    const [userData,setUserData] = useContext(AuthContext);
    // console.log(authdata);
    
  return (
    <div className='bg-[#1c1c1c] flex flex-col scrollbar-hide gap-2 zp-5'>
            <div className='flex bg-red-400 mb-2 rounded-xl px-3 py-3 align-center justify-between'>
                <h2 className='text-xl w-1/5 font-bold'>Employee Name</h2>
                <h3 className='text-xl w-1/5 font-semibold'>New Task</h3>
                <h5 className='text-xl w-1/5 font-semibold'>Active Task</h5>
                <h5 className='text-xl w-1/5 font-semibold'>Completed</h5>
                <h5 className='text-xl w-1/5 font-semibold'>Failed</h5>

            </div>
        <div className='overflow-y-auto scrollbar-hide'>
    {userData.employees.map(function(e,idx){
           return(
             <div key={idx} className='flex border-2 hover:bg-emerald-500 border-emerald-500 mb-2 rounded-xl px-3 py-3 align-center justify-between'>
                <h2 className='text-xl w-1/5 text-blue-600 font-bold'>{e.firstName}</h2>
                <h3 className='text-xl w-1/5 text-yellow-400 font-semibold'>{e.taskCounter.newTask}</h3>
                <h5 className='text-xl w-1/5 text-white font-semibold'>{e.taskCounter.active}</h5>
                <h5 className='text-xl w-1/5 text-blue-600 font-semibold'>{e.taskCounter.completed}</h5>
                <h5 className='text-xl w-1/5 text-red-600 font-semibold'>{e.taskCounter.failed }</h5>
            </div>
           )
        })}
        </div>
        
    </div>
  )
}

export default AllTask

