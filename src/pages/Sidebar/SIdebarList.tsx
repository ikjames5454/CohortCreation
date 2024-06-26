import React from 'react'
import users from "../../asset/Images/users.png"
import book from "../../asset/Images/book.png"
import brief from "../../asset/Images/briefcase.png"
import user from "../../asset/Images/user.png"
import style from "./Sidebar.module.css"
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Contain from '../Contain'


const SIdebarList = () => {
   // const navigate = useNavigate()
  const activeLink = 'text-blue-500 cursor-pointer'
  const normalLink = ''

  return (
    <aside className=" overflow-y-auto transition-all duration-500  z-50 grid grid-cols-1   px-20 py-32 w-[500px]">
        <div className='list ml-10 w-80'>
       
        <NavLink to= "/cont"
         className={({ isActive }) => 
         isActive ? 
         activeLink: normalLink}>
             <div className='flex items-center space-x-6 mb-10 h-20 pl-10'>
           <img className='img w-12 saturate-0 grayscale' src={users} alt="" />
           <h1 className='users text-4xl text-[#475661]  hover:text-blue-500'>Cohorts</h1>
           </div>
           </NavLink>
       
           <NavLink to= "/home"
         className={({ isActive }) => 
         isActive ? 
         activeLink: normalLink}>
        <div className='flex items-center space-x-6 mb-10 h-20 pl-10 '>
           <img className='img w-12 saturate-0 grayscale' src={book} alt="" />
           <h1 className='users text-4xl text-[#475661]  hover:text-blue-500'>Programs</h1>
        </div>
        </NavLink>
        <div  className='flex items-center space-x-6 mb-10 h-20 pl-10 cursor-pointer'>
           <img  className='img w-12 saturate-0 grayscale' src={brief} alt="" />
           <h1 className='users text-4xl text-[#475661]  hover:text-blue-500'>Instructors</h1>
        </div>
        <div className='flex items-center space-x-6 mb-10 h-20 pl-10 cursor-pointer'>
        <img id={style.img} className='w-12 saturate-0 grayscale hover:brightness-100 hover:contrast-100' src={user} alt="" />
           <h1 className='users text-4xl text-[#475661]  hover:text-blue-500'>Learners</h1>
        </div>
        </div>
        </aside>
  )
}

export default SIdebarList