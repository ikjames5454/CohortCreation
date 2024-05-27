import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const Footer = () => {
  return (
    <div className='main  text-gray-700 font-medium opacity-75 md:hidden flex space-x-7 absolute '>
      <div className='flex flex-col justify-center text-center items-center'>
      <HomeOutlinedIcon sx={{fontSize:"2.0rem"}}/>
      <p className='b mt-3'>Home</p>
      </div>
      <div className='flex flex-col justify-center text-center items-center'>
       <DevicesOutlinedIcon sx={{fontSize:"2.0rem"}}/>
       <p className='b mt-3'>Workspace</p>
      </div>
      <div className='flex flex-col justify-center text-center items-center'>
       <ImportContactsOutlinedIcon sx={{fontSize:"2.0rem"}}/>
       <p className='b mt-3'>Resources</p>
      </div>
      <div className='flex flex-col justify-center text-center items-center'>
       <CalendarTodayOutlinedIcon sx={{fontSize:"2.0rem"}}/>
       <p className='b mt-3'>Resources </p>
      </div>
      <div>

      </div>
      </div>
  )
}

export default Footer