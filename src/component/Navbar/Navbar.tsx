import React from 'react';
import image from "../../asset/Images/Frame.png";
import Bar from "../../asset/Images/Group.png";
import { Button, IconButton } from "@mui/material";
import Bell from "../../asset/Group.png";
import Person from "../../asset/Images/Ellipse.png";
import arrow from "../../asset/Images/Vector.png";
import bg from "../../asset/Images/bg.png"
import arrows from "../../asset/Images/arrow-left.png"
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate()

  return (
        <div className='c  sticky'>
      <div className='px-5  top-0 py-[.8rem] flex justify-between items-center md:px-28 h-32'>
        <div className='first flex items-center space-x-4'>
          <img className='image w-12' src={image} alt="" />
          <h1 className='name text-4xl font-extrabold text-[#008EEF]'>
            enum
          </h1>
        </div>
        <div className='second md:flex space-x-28 text-3xl text-[#475661] font-bold'>
          <h1 className='list hover:text-[#008EEF] cursor-pointer hover:border-b-4 hover:border-[#008EEF] hover:h-14 hover:cursor-pointer' onClick={()=>navigate('/home')}>Home</h1>
          <h1 className='list hover:text-[#008EEF] cursor- hover:border-b-4 hover:border-[#008EEF] hover:h-14 hover:cursor-pointer' onClick={()=>navigate('/')}>Workspace</h1>
          <h1 className='list hover:text-[#008EEF] cursor-pointer hover:border-b-4 hover:border-[#008EEF] hover:h-14 hover:cursor-pointern'>Resources Library</h1>
        </div>
        <div className='icon  md:flex items-center space-x-14'>
          <IconButton>
            <img className='bell w-16' src={Bell} alt="" />
          </IconButton>
          <div className='third flex items-center space-x-6'>
            <img className='person w-20' src={Person} alt="" />
            <div className='flex items-center space-x-6'>
            <span className='user text-3xl text-[#475661] font-extralight'>Onowomano</span>
            <div>
            <img className='arrow w-8' src={arrow} alt="" />
            </div>
            </div>
          </div>
         
          <img className='block w-14' src={Bar} alt="" />
        </div>
      </div>
      <div className='b  bg-[#F6FCFF] h-[10px]'></div>
      <div className='bg-cover bg-center flex flex-col justify-center px-32' style={{backgroundImage: `url(${bg})`,height: '300px',}}>
        <div className='flex space-x-5 items-center'>
           <p className='s text-3xl bg-blue-500 w-12 items-center py-1 border border-white text-white flex justify-center'>S</p>
           <h1 className='semi text-2xl text-white'>Semicolon Africa</h1>
        </div>  
          <div className='button mt-5'>
            <Button sx={{fontSize:"1.3rem",color:"black",backgroundColor:"white",px: "42px", py:"10px", borderRadius:"7px"}} variant='contained' disabled={false} type='submit' >View Profile <img className='arr w-7 ml-2' src={arrows} alt="" /> </Button>
          </div>
      </div>
      </div>
    
  );
}

export default Navbar;