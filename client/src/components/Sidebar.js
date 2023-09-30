import React,{useState} from 'react'
import { Home,Github,Instagram,Video,Linkedin, X,Menu} from 'lucide-react';
function Sidebar() {
  const [menu , setmenu] = useState(true)
   const handleclick = () =>{
    setmenu(!menu)
  }
  return (
    <>
    
    <div onClick={handleclick} className='relative md:hidden'>
        {/* <X   onClick={handleclick} color="red" className='absolute  top-5 right-5 '/> */}
        {/* <Hamburger toggled={menu} toggle={setmenu} color="red"/> */}
        {menu ? <Menu className='absolute  z-10 top-6 left-6'color="red" width={40}/> : <X  className='absolute z-10 top-6 left-5 ' color="red" />}
    </div>
    <div  className = {`bg-[#1c1b23] sidebar overflow-scroll md:m-[1rem] m-[0.2rem] h-[95vh] md:w-[20vw] 100vw  ${menu ? "md:sticky absolute left-[-330px]" : "md:sticky absolute h-[100vh]"}`}>
      <div className='m-[2rem] relative '>
        <p className='flex p-[1rem] text-[#818086]' ><Home  className='mx-[10px]' color="#818086"/><a href='https://portfolio.anantakandel.com.np/'>Home</a></p>
         <p className='flex p-[1rem] text-[#818086]' ><Video  className='mx-[10px]' color="#b5169e" />Videos</p>
         <p className='text-[#818086]'>Socials</p>
         <p className='flex p-[1rem] text-[#818086]' ><Github color="cyan" className='mx-[10px]'/><a href='https://github.com/ananta-kandel'>Github</a></p>
         <p className='flex p-[1rem] text-[#818086]' ><Instagram  className='mx-[10px]' color="#b5169e"/>Instragram</p>
         <p className='flex p-[1rem] text-[#818086]' ><Linkedin className='mx-[10px]' color="cyan"/>Linkedin</p>
         <p className='text-[#818086]'>Projects</p>
      </div>
    </div>
    </>
  )
}

export default Sidebar