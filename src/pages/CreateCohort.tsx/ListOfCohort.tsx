import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import SearchIcon from '@mui/icons-material/Search';
import FilledButton from '../../reusables/FilledButton/FilledButton';
import { CreateCohortModal } from './CreateCohort'; // Assuming CreateCohortModal exists
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import CohortsCard from './CohortsCard';
import { searchUser } from '../../component/UsersReducers';
import { useDispatch } from 'react-redux';
import { Container, TextField, InputAdornment, Button, IconButton, MenuItem, Menu, Paper, useTheme, Typography, useMediaQuery, Card} from '@mui/material';

const styles = {
  position: 'absolute',
  top: '65%',
  left: '92%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  outline: 'none',
  boxShadow: 'none',
  border: '2px solid grey',
  p: 2,
};

interface FormValues {
  search: string;
}

const cohorts = [1,1,1,1,1,1,1,1]

const ListOfCohort = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleOpenModal = (event: React.MouseEvent<HTMLDivElement>) => {
    // Prevent event bubbling from inner elements to close the modal unintentionally
    event.stopPropagation();
    setOpen(!open); // Toggle modal state on click
  };

  const handleClose = () => { 
          setOpen(false);}



  const [showModal, setShowModal] = useState(false);

  const search = (values: FormValues) => {
    console.log('Searching for:', values.search);
    dispatch(searchUser(values.search));
  };

  const navigate = useNavigate();

  const handleActionClick = (route: string) => {
    navigate(route);
  };

   
 

  return (
    <Fragment>
      <div className='cont relative bottom-[380px] flex'>
        <div className='flex px-[500px] relative left-48 '>
          <Formik
            initialValues={{ search: '' }}
            onSubmit={(values: FormValues, actions) => {
              search(values);
              actions.setSubmitting(false);
            }}
          >
            {() => (
              <Form>
                <Field
                  id="search"
                  type="text"
                  name="search"
                  placeholder="search"
                  className={`w-[700px] pl-16 py-4 text-3xl border border-gray-700 text-gray-700 outline-none mt-3 px-5 rounded-lg `}
                />
                <SearchIcon
                  sx={{ fontSize: '3.3rem', opacity: '0.3' }}
                  className='icon font-thin relative right-[686px]'
                />
              </Form>
            )}
          </Formik>
        </div>
        <div className='flex space-x-7 '>
          <div className='button cursor-pointer z-50 '>
            <FilledButton
              text='Create Cohort'
              padding='20px 60px'
              color='#008EEF'
              border=''
              type="button"
              onClick={() => setShowModal(true)}
            />

          </div >

          <div className='flex space-x-10 border border-solid border-black py-5 px-9 rounded-2xl text-center  '>
            <h1 className='text-3xl font-extrabold'>More Actions </h1>
            <div
              className='text-6xl leading-4 relative bottom-5 cursor-pointer '
              onClick={handleOpenModal}
            >
              <h1>.</h1>
              <h1>.</h1>
              <h1>.</h1>
            </div>
          </div>
        </div>
      </div>
        <div className='relative bottom-56' >
          {/* {cohorts.map(()=>  */}
          <CohortsCard/>
          
          {/* )} */}
        </div>
      <div>
        <CreateCohortModal isVisible={showModal} onClose={() => setShowModal(false)} />
      </div>
      <div className=''>
      <Modal
        open={open}
        onClose={ ()=> setOpen(false)
          }
       
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
     hideBackdrop={ open}
     onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
     >
      
      <Box  sx={styles}>
        <div className='bg z-50' >
          <h1 className='name text-3xl py-4 cursor-pointer hover:bg-slate-200' onClick={() => handleActionClick('/home')}>Publish a poll</h1>
          <h1 className='name text-3xl py-4 cursor-pointer'>Schedule an event</h1>
          <h1 className='name text-3xl py-4 cursor-pointer'>Make an announcement</h1>
        </div>
      </Box>

     </Modal>
     </div>
    </Fragment>
  )
}

export default ListOfCohort