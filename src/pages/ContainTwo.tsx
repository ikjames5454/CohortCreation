import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import ListOfCohort from './CreateCohort.tsx/ListOfCohort'

const ContainTwo = () => {
  return (
    <div className='contain h-[500px]'>
      <Sidebar/>
      <ListOfCohort/>
    </div>
  )
}

export default ContainTwo