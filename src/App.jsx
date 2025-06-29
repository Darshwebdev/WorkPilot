import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getlocalstorage, setlocalstorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
import { motion } from "motion/react"
import { toast } from 'react-toastify'

const App = () => {
  // localStorage.clear();
  const [user, setuser] = useState(null)
  const [loggedInUserdata, setloggedInUserdata] = useState(null);
  
  const [userData,setUserData] = useContext(AuthContext);
  useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    const UserData = JSON.parse(loggedInUser);
    setuser(UserData.role);
    setloggedInUserdata(UserData.data);
  }
}, []);
  
//   const loginhandler = (email,password) =>{
//     if(email=== 'admin@example.com'&& password==='123'){
//       const admin =userData.admin.find((e)=>e.email === email && e.password === password);
//       setloggedInUserdata(admin);
//       setuser('admin');
//       localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data:admin}))
//     }
//     else if(userData){
//       const employees =userData.employees.find((e)=>e.email === email && e.password === password);
//       setloggedInUserdata(employees);
//       setuser('employees');
//       localStorage.setItem('loggedInUser',JSON.stringify({role:'employees',data:employees}))
//     }
//     else{
//       toast.error("USER NOT FOUND!!");
//       setloggedInUserdata(undefined);
// setuser(null); // or "admin"

//     }
//   }
const loginhandler = (email, password) => {
  if (email === 'admin@example.com' && password === '123') {
    const admin = userData.admin.find((e) => e.email === email && e.password === password);
    if (admin) {
      setloggedInUserdata(admin);
      setuser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }));
    } else {
      toast.error("ADMIN USER NOT FOUND!!");
    }
  } else if (userData) {
    const employee = userData.employees.find((e) => e.email === email && e.password === password);
    if (employee) {
      setloggedInUserdata(employee);
      setuser('employees');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employees', data: employee }));
    } else {
      toast.error("USER NOT FOUND!!");
    }
  } else {
    toast.error("USER NOT FOUND!!");
  }
}

  const refreshLoggedInUser = () => {
  const UserData = JSON.parse(localStorage.getItem('loggedInUser'));
  setloggedInUserdata(UserData.data);
};
// console.log(loggedInUserdata);

  return (
    <motion.div  
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}> 
       {!user?<Login loginhandler={loginhandler}/>:'' }  
       {user === 'admin' && <AdminDashboard changeUser={setuser} data={loggedInUserdata} />}
       {user === 'employees' && loggedInUserdata && (<EmployeeDashboard changeUser={setuser} data={loggedInUserdata} refreshUser={refreshLoggedInUser} />)}
    </motion.div>

  )
}
export default App