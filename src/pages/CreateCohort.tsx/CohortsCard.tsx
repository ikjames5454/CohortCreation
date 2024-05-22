import React from 'react'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import image from "../../asset/Images/Rectangle.png"
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';


const CohortsCard = () => {
  const users = useSelector( (state: RootState) => state.users);
  console.log("users: ",users);

  return (
    <div className='relative left-[690px] w-[2000px]'>
        {users.map((user,index)=> (
          <div>
        <div key={index} className='flex space-x-[880px]'>
            <div className='ct flex space-x-5'>
                <img className='img w-24' src={user.cohortAvatar} alt="" />
                <div>
                <h1 className='name text-4xl font-extrabold'>
                    {user.cohortName}
                </h1>
                <div className='flex space-x-10'>
                <h2 className='text-2xl'>
                 {user.program}
                </h2>
                <div className='text-xl'>
                <span className='icon text-gray-500'><PersonOutlinedIcon/> </span> 
                <span className='px-2 text-2xl'>
                25 Learners
                </span>
                </div>
                </div>
                </div>
        
            </div>
            <div className='text-3xl text-gray-600 flex gap-10'>
              <h1> Created <span>{user.startDate.toString().split(' ').slice(0, 4).join(' ')}</span></h1>
              <div
              className='leading-3 text-6xl relative bottom-5' >
              <h1>.</h1>
              <h1>.</h1>
              <h1>.</h1>
            </div>

            </div>
        </div>
         <div className='space h-8 bg-slate-100 mt-5 w-[1800px] mb-4'>

         </div>
         </div>
      ))}
       
    </div>
  )
}

export default CohortsCard