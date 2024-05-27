import React from 'react'
import image from "../../asset/Images/empty.png"
import Button from '@mui/material/Button';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';


const Outlet = () => {
  return (
    
    <div className='o md:hidden relative bottom-[450px] h-36'>
         <div className='md:hidden mb-20'>
        <p>
          Switch between tabs
        </p>
        <div className='f text-gray-600 mt-5 relative right-6'>
            <form >
            <PeopleOutlinedIcon sx={{position:"relative",left:"32px"}}/>
            <select id="selection" name="selection" className='s w-80 bg-white border border-solid rounded pl-8 pt-2 pb-2'>
        <option value="option1"> cohort 1</option>
        <option value="option2">cohort 2</option>
        <option value="option3">cohort 3</option>
        <option value="option4">cohort 4</option>
    </select>

            </form>
        </div>
      </div>
        <div className='flex justify-center items-center flex-col' >
            <img src={image} alt="" />
            <p className='e font-bold mt-10'>Empty Space</p>
            <p className=' w-72'>
                No cohort has been created yet, let's get you started by clicking the button below
            </p>
            <Button variant='contained' sx={{borderRadius:"10px",paddingTop:"8px", paddingBottom:"8px",marginTop:"40px"}}>
                Create a Cohort
            </Button>
        </div>
        
        </div>
  )
}

export default Outlet