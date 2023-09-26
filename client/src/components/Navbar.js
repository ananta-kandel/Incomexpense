import React ,{useState} from 'react'
// import logo from "../image/logo"
import { Link } from 'react-router-dom';
import { FaAlignJustify} from "react-icons/fa";
import { GrClose } from "react-icons/gr";
function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
         <div className='md:flex justify-between  bg-black items-center'>
            <div>
                <img className="w-[7rem] height-[3.5rem]" src="../image/logo.png"alt="image" />
            </div>
           <div className='md:hidden cursor-pointer absolute top-6 right-8'  onClick={()=>setOpen(!open)}>
              {open ?  <FaAlignJustify /> : <GrClose/>}
           </div>
                <ul className={`md:flex md:items-center  text-[20px] md:sticky  ${open ? 'hidden' : ''}`} >
                    <li className='md:ml-8 text-xl  cursor-pointer py-2 md:my-0 my-7 '><Link to = "/about" className='no-underline hover:border-purple-800 text-white '>Home</Link></li>
                    <li className='md:ml-8 text-xl  cursor-pointer py-2 md:my-0 my-7 '><Link to = "/about" className='no-underline  text-white '>About Us</Link></li>
                    <li className='md:ml-8 text-xl  cursor-pointer py-2 md:my-0 my-7 '><Link to = "/about" className='no-underline  text-white '>Contact Us</Link></li>
                    <li className='md:ml-8 text-xl  cursor-pointer py-2 md:my-0 my-7 '><Link to = "/about" className='no-underline  text-white '>Manage Money</Link></li>
                </ul>
    
            <div className={`p-2 text-white ${open ? 'hidden' : ''}` }>
                <button className='rounded-full bg-cyan-500 hover:bg-cyan-600 md:mr-5 mr-1 p-2'><Link  to = "/login" className='no-underline  text-white'>sign up</Link></button>
                <button className='rounded-full bg-cyan-500 hover:bg-cyan-600 md:ml-10 ml-1 p-2'><Link  to = "/register" className='no-underline  text-white'>Register</Link></button>
            </div>
            </div>
        </>
    )
}
export default Navbar;
