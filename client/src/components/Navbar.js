import React from 'react'
import { Link } from 'react-router-dom'
// import Button from '@mui/material/Button';
function Navbar() {
  return (
  <>
     <nav className='bg-gradient-to-r from-[#373739] to-blue-500 h-[10vh] shadow-2xl flex  top-0  justify-between text-white ' >
      <div className='flex justify-start items-center'>
      <p className='m-[1rem] text-[1.5rem] text-white'>INCOME EXPENSE TRACKER</p>
      <p className='text-[1.5rem] hover:text-blue-500'><Link to="/">Home</Link></p>
    </div>
    <div className='flex justify-start items-center p-[2rem] '>
      <button className='m-[1rem] bg-[#373739] hover:bg-green-700 text-white font-bold py-2 px-4 rounded'><Link to="/login">Login</Link></button>
      <button className='bg-[#373739] hover:bg-green-700 text-white font-bold py-2 px-4 rounded'><Link to="/register">Register</Link></button>
    </div>
</nav>
  </>
  )
}

export default Navbar