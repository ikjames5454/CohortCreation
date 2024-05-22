import React,{useState} from 'react'
import SideBarNavigation from './SideBarNavigation'
import { Routes, Route } from 'react-router-dom';
import CreateCohort from '../CreateCohort.tsx/CreateCohort'
import Instructors from '../Bars/Instructors';
import Learners from '../Bars/Learners';
import Programs from '../Bars/Programs';
import Contain from '../Contain';


const SideBars = () => {
  const [openSideBar, setOpenSideBar] = useState(false)
  return (
    <div className='lg:flex justify-between'>
       <div className='sticky  lg:w-[20%]'>
        <SideBarNavigation open={openSideBar}/>
       </div>
       <div className='lg:w-[80%]'>
         <Routes>
         <Route path='/' element={<Contain/>}/>
           <Route path='/cohorts' element={<CreateCohort/>}/>
           <Route path='/instructors' element={<Instructors/>}/>
           <Route path='/learners' element={<Learners/>}/>
           <Route path='/programs' element={<Programs/>}/>
         </Routes>
       </div>
    </div>
  )
}

export default SideBars