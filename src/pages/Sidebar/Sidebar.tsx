import React from 'react'
import SIdebarList from './SIdebarList'
import Click from "../Click/ClickButton"


const Sidebar = () => {
  return (
    <div id="mainTwo" className='contain h-[600px] hidden xl:block'>
        <div>
        <SIdebarList/>
        </div>
          <div className='coh px-[700px] text-5xl font-bold font-serif py-28 relative bottom-[750px] z-50'>
            Cohorts
          </div>
          <div className='coh px-[500px] font-bold font-serif py-22  justify-end hidden'>
           <Click />
          </div>
       
    </div>
  )
}

export default Sidebar