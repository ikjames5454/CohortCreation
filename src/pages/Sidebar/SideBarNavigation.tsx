import React from 'react'
import { useNavigate } from 'react-router-dom';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Drawer, useMediaQuery } from '@mui/material';


const sideBar = [
    {icon:<PeopleAltOutlinedIcon sx={{fontSize:"2.5rem"}}/>,title:"Cohorts"},
    {icon:<ImportContactsOutlinedIcon sx={{fontSize:"2.5rem"}}/>,title:"Programs"},
    {icon:<WorkOutlineOutlinedIcon sx={{fontSize:"2.5rem"}}/>,title:"Instructors"},
    {icon:<PersonOutlineOutlinedIcon sx={{fontSize:"2.5rem"}}/>,title:"Learners"},
]

interface SideBarNavigationProps {
    open: boolean; 
    handleClose?: () => void; 
  }

  interface SideBarItem {
    icon: React.ReactNode; 
    title: string;
  }

const SideBarNavigation = ({open,handleClose}: SideBarNavigationProps) => {
    const isSmallScreen = useMediaQuery("(max-width:900px)");
    const navigate = useNavigate()

    const handleNavigate = (item: SideBarItem) =>{
        navigate(`/sidebars/${item.title.toLowerCase()}`)
    }

  return (
    <div>
        <Drawer 
        variant={isSmallScreen?"temporary":"permanent"} 
        onClose={handleClose} 
        open={isSmallScreen? open: true} 
        anchor='left' 
        sx={{zIndex:-1, position:"sticky",
        "& .MuiDrawer-paper": {
            border: "none" 
          }
        }}
        >
        <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col 
        justify-center ml-20 text-3xl gap-14 pt-16'>
          {sideBar.map((item)=><>
          <div onClick={()=>handleNavigate(item)} className='px-10 flex items-center space-x-5 cursor-pointer text-gray-600'>
              <div >{item.icon}</div>
             <div className='w font-medium ml-6'>{item.title}</div>
          </div>
          </>)}  

        </div>
        </Drawer>
    </div>
  )
}

export default SideBarNavigation