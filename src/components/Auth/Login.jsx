    import React, { useState } from 'react';
import { motion } from "motion/react"
import { ToastContainer, toast } from 'react-toastify';


    const Login = ({loginhandler}) => {
        const [email, setemail] = useState("");
        const [password, setPassword] = useState("");
        const submithandler=(e)=>{
            e.preventDefault();
            // console.log("The email is ",email,"the password is:",password);
            loginhandler(email,password);
            setemail("");
            setPassword("");
        }
        return (
            <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}className='flex h-screen w-screen justify-center items-center'>
                <div className=' border rounded-xl  border-emerald-500 h-100 '>
                    <form onSubmit={submithandler} className='flex flex-col justify-center items-center'>
                        <input value={email} onChange={(e)=>{
                            setemail(e.target.value);
                        }} required type="email" placeholder='Enter your email' className='h-15 w-70 mt-15 px-5 border-2 border-emerald-500 ml-7 mr-7 mb-5 rounded-full py-2 placeholder:text-grey-400' />
                        <input value={password} onChange={(e)=>{
                            setPassword(e.target.value);
                        }} required type="password" placeholder='Enter Password' className='h-15 w-70 mt-3 px-5 border-2 border-emerald-500 ml-7 mr-7 mb-5 rounded-full py-2 placeholder:text-grey-400' />
                        <button className='h-12 w-30 rounded-full mt-5 bg-emerald-500 border-2 border-emerald-500' >Log in</button>
                    </form>
                </div>
            </motion.div>
        )
    }

    export default Login