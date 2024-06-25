import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';


export const Navbar = () => {
  const [isopen,setisopen] = useState(false)
  return (
               <>
               <div className='Navbar  h-[58px] flex flex-col md:flex-row justify-between px-8'>
    
               <div className="logo flex mt-2 px-2">
                              <img className='w-[38px] h-[48px]' src={logo}></img>
                              <h3 className='mt-3 px-2'>TheBox</h3>
               </div>
               <div onClick={()=>setisopen(!isopen)} className='resnav absolute right-5 top-5 md:hidden cursor-pointer'>
               {isopen? <IoMdClose/>:<FaBarsStaggered/>}
               
              
               </div>
               <div className={`links absolute md:static z-10 md:z-auto left-0 w-full md:w-auto bg-white  h-1/2 md:h-auto transition-all duration-500 ease-in ${isopen?'top-14 ':'top-[-400px]'}`}>

                              <ul className={`flex flex-col  md:static justify-center items-center  md:flex-row m-5 px-2 `}>
                                             <li className='px-2 py-2 md:py-0 font-sans hover:text-blue-600'><Link to="/">Home</Link></li>
                                             <li className='px-2 py-2 md:py-0 hover:text-blue-600'><Link to="Project">Project</Link></li>
                                             <li className='px-2 py-2 md:py-0 hover:text-blue-600'><Link to="About">About us</Link></li>
                                             <li className='px-2 py-2 md:py-0 hover:text-blue-600'><Link to="Contact">Contact</Link></li>
                                             <li className='px-2 py-2 md:py-0 hover:text-blue-600'><Link to="Services">Service</Link></li>
                              </ul>
               </div>
               </div>

    </>
  )
}
