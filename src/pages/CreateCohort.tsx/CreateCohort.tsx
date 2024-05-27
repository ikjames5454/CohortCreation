
// import React, { Fragment, useState, } from 'react';
// import style from "./CreateCohort.module.css";
// import image from "../../asset/Images/Group 596.png";
// import FilledButton from '../../reusables/FilledButton/FilledButton';
// import Modal from '../../asset/Modal/Modal';
// import { Formik, Form,ErrorMessage, Field } from 'formik'; 
// import Date from './Date'; 
// import OutlineButton from '../../reusables/OutlineButton/OutlineButton';
// import ImageDropZone from './ImageDropZone';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import * as Yup from 'yup';



// const initialValues = {
//     cohortName: "",
//     description: "",
//     program: "",
//     startDate: "", 
//     endDate: "" , 
//     cohortAvatar: ""
// }

// const validationSchema = Yup.object().shape({
//     cohortName: Yup.string().required('Cohort name is required'),
//     description: Yup.string().required('Description is required'),
//     program: Yup.string().required('Program is required'),
//     startDate: Yup.date().required('Start date is required'), 
//     endDate: Yup.date().required('End date is required'), 
   
// });

// const CreateCohort: React.FC = () => {

//     const handleSubmit = (values: typeof initialValues) => {
//         console.log('Submitted values:', values);
//     }

//     // const handleSubmit = (values: typeof initialValues, { resetForm }: FormikHelpers<typeof initialValues>) => {
//     //     console.log('Submitted values:', values);
       
//     //     resetForm();
//     // }

//     const [showModal, setShowModal] = useState(false);
   

//     return (
//         <Fragment>
//             <div className='cont relative bottom-[380px] '>
//                 <div className='main px-[1000px]'>
//                     <div id={style.create} >
//                         <img className='img w-[100%] mt-10' src={image} alt="" />
//                     </div>
//                     <div className='line'>
//                         <h1 className='empty text-3xl font-extrabold text-center  leading-[40px]'>
//                             Empty Space
//                         </h1>
//                         <p className='no text-3xl text-[#475661] w-[800px] text-center line leading-[60px]'>
//                             No cohort has been created yet, let's get you started by clicking the button below
//                         </p>
//                     </div >
//                     <div className='button mt-20 flex justify-center items-center mr-20'>
//                         <FilledButton text='Create a Cohort' padding='20px 60px' color='#008EEF' border='' onClick={() => setShowModal(true)} />
//                     </div>
//                 </div>
//             </div>
//             <Modal isvisible={showModal} onClose={() => setShowModal(false)}>
//                 <div className='modal px-10'>
//                     <h3 className='title text-4xl font-extrabold'>
//                         Create a Cohort
//                     </h3>
//                     <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
//                         {  ({ values, setFieldValue, isValid,dirty }) => (
//                             <Form>
//                                 <div className='mt-10'>
//                                     <label className='name text-3xl'>
//                                         Cohort Name
//                                     </label>
//                                     <Field
//                                         className='w-[1060px] py-5 text-3xl border border-gray-700 text-gray-700 outline-none mt-3 px-5 rounded-lg'
//                                         type="text"
//                                         id="cohortName"
//                                         name="cohortName"
//                                         placeholder='Ex Cohort'
//                                     />
//                                     <div style={{color:"red",fontSize:"1.8rem"}}>
//                                     <ErrorMessage name='cohortName'/>
//                                     </div>
//                                 </div>
//                                 <div className='mt-7 relative'>
//                                     <label className='name text-3xl'>
//                                         Description
//                                     </label>
//                                     <Field
//                                         as="textarea"
//                                         className="w-[1060px] h-48 py-4 text-3xl border border-gray-700 text-gray-700 outline-none mt-3 px-5 rounded-lg"
//                                         id="description"
//                                         name="description"
//                                         placeholder="Ex A space for python developers"
//                                     />
//                                      <div style={{color:"red",fontSize:"1.8rem"}}>
//                                     <ErrorMessage name='description'/>
//                                     </div>
//                                 </div>
//                                 <div className='mt-7'>
//                                     <label className='name text-3xl'>
//                                         Program
//                                     </label>
//                                     <Field
//                                         as="select"
//                                         className='w-[1060px] py-5 text-3xl border border-gray-700 text-gray-700 outline-none mt-3 px-5 rounded-lg bg-white'
//                                         name="program"
//                                         id="program"
//                                     >
//                                         <option value={""}></option>
//                                         <option value={"ROLE_COLLECTOR"}>ROLE_COLLECTOR</option>
//                                         <option value={"ROLE_ARTSTUDIO_OWNER"}>ROLE_ARTSTUDIO_OWNER</option>
//                                     </Field>
//                                     <div style={{color:"red",fontSize:"1.8rem"}}>
//                                     <ErrorMessage name='program'/>
//                                     </div>
//                                 </div>
//                                 <div className='flex gap-20 align-middle items-center flex-row'>
//                                     <div className='mt-6'>
//                                         <label className='name text-3xl '>
//                                             Start Date
//                                         </label>
//                                         <div className='date mt-3'>
//                                             <Field name="startDate">
//                                                 {() => (
//                                                     <Date
//                                                         selectedDate={values.startDate}
//                                                         handleDateChange={(date) => setFieldValue('startDate', date)}
//                                                     />
//                                                 )}
//                                             </Field>
//                                             <div style={{color:"red",fontSize:"1.8rem"}}>
//                                     <ErrorMessage name='startDate'/>
//                                     </div>
//                                         </div>
//                                     </div>
//                                     <div className='mt-6'>
//                                         <label className='name text-3xl' >
//                                             End Date
//                                         </label>
//                                         <div className='date mt-3'>
//                                             <Field name="endDate">
//                                                 {() => (
//                                                     <Date
//                                                         selectedDate={values.endDate}
//                                                         handleDateChange={(date) => setFieldValue('endDate', date)}
//                                                     />
//                                                 )}
//                                             </Field>
//                                             <div style={{color:"red",fontSize:"1.8rem"}}>
//                                             <ErrorMessage name='endDate'/>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                      <div className='mt-7'>
//                 <label className='name text-3xl'>
//                   Add a cohort Avatar
//                 </label>
//                  <div>
//                  <ImageDropZone
//                     onSelect={(avatar) => setFieldValue('cohortAvatar', avatar)}
//                  />
//                   <div className='info flex gap-2 items-center mt-3'>
//                   <InfoOutlinedIcon sx={{fontSize:"2.0rem"}}/>
//                   <p className='opt text-2xl'>You can do this later</p>
//                 </div>
//                 </div>
//                 </div>
//                                 <div className='opt flex space-x-3 justify-end py-5'>
//                                     <OutlineButton text='Cancel' padding='15px 46px' color='' border='' onClick={() => setShowModal(false)} />
//                                     <FilledButton text='Create a Cohort' padding='20px 60px' color='#008EEF' border='' type="submit" disabled={!(dirty && isValid)} />
//                                 </div>
//                             </Form>
//                         )}
//                     </Formik>
//                 </div>
//             </Modal>
//         </Fragment>
//     )
// }

// export default CreateCohort;

import React, {  useState, } from 'react';
import style from "./CreateCohort.module.css";
import image from "../../asset/Images/Group 596.png";
import FilledButton from '../../reusables/FilledButton/FilledButton';
import Modal from '../../asset/Modal/Modal';
import { Formik, Form,ErrorMessage, Field,FieldProps, FormikProps} from 'formik'; 
import DatePicker from './Date'; 
import OutlineButton from '../../reusables/OutlineButton/OutlineButton';
import ImageDropZone from './ImageDropZone';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import * as Yup from 'yup';
import { addUser } from '../../component/UsersReducers';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../Store';
import { uploadImageToCloudinary } from '../../util/UploadToCloudinary';


interface FormValues {
    cohortName: string;
    description: string;
    program: string;
    startDate: string;
    endDate: string;
    cohortAvatar: string;
}



const initialValues: FormValues = {
    cohortName: "",
    description: "",
    program: "",
    startDate: "", 
    endDate: "", 
    cohortAvatar: ""
}

const validationSchema = Yup.object().shape({
    cohortName: Yup.string().required('Cohort name is required'),
    description: Yup.string().required('Description is required'),
    program: Yup.string().required('Program is required'),
    startDate: Yup.date().required('Start date is required'), 
    endDate: Yup.date()
    .required('End date is required')
    .test(
        'is-greater',
        'End date must be later than start date',
        function (value) {
            const { startDate } = this.parent;
            return !startDate || !value || new Date(value) > new Date(startDate);
        }
    ), 
});


export const CreateCohortModal: React.FC<{ isVisible: boolean; onClose: () => void }> = ({ isVisible, onClose }) => {

  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleSubmit = (values: FormValues) => {
        console.log('Submitted values:', values);
        const newUser = {
            id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
            ...values,

        }
        dispatch(addUser(newUser))
        navigate("/list")
    }

    return (
        <Modal isvisible={isVisible} onClose={onClose}>
            <div className='modal px-10'>
                <h3 className='title text-4xl font-extrabold'>
                    Create a Cohort
                </h3>
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                    {({ values, setFieldValue, isValid, dirty }) => (
                        
                        <Form>
                            <div className='mt-10'>
                                <label className='name text-3xl'>
                                    Cohort Name
                                </label>
                                <Field
                                    className='w-[1060px] py-5 text-3xl border border-gray-700 text-gray-700 outline-none mt-3 px-5 rounded-lg'
                                    type="text"
                                    id="cohortName"
                                    name="cohortName"
                                    placeholder='Ex Cohort'
                                    
                                />
                                <div style={{color:"red",fontSize:"1.8rem"}}>
                                    <ErrorMessage name='cohortName'/>
                                </div>
                            </div>
                            <div className='mt-7 relative'>
                                <label className='name text-3xl'>
                                    Description
                                </label>
                                <Field
                                    as="textarea"
                                    className="w-[1060px] h-48 py-4 text-3xl border border-gray-700 text-gray-700 outline-none mt-3 px-5 rounded-lg"
                                    id="description"
                                    name="description"
                                    placeholder="Ex A space for python developers"
                                />
                                <div style={{color:"red",fontSize:"1.8rem"}}>
                                    <ErrorMessage name='description'/>
                                </div>
                            </div>
                            <div className='mt-7'>
                                <label className='name text-3xl'>
                                    Program
                                </label>
                                <Field
                                    as="select"
                                    className='w-[1060px] py-5 text-3xl border border-gray-700 text-gray-700 outline-none mt-3 px-5 rounded-lg bg-white'
                                    name="program"
                                    id="program"
                                >
                                    <option value={""}></option>
                                    <option value={"Java"}>Java</option>
                                    <option value={"Python"}>Python</option>
                                    <option value={"Java_script"}>Java-Script</option>
                                </Field>
                                <div style={{color:"red",fontSize:"1.8rem"}}>
                                    <ErrorMessage name='program'/>
                                </div>
                            </div>
                            <div className='flex gap-20 align-middle items-center flex-row'>
                                <div className='mt-6'>
                                    <label className='name text-3xl '>
                                        Start Date
                                    </label>
                                    <div className='date mt-3'>
                                        <Field name="startDate">
                                            {() => (
                                                <DatePicker
                                                    selectedDate={values.startDate}
                                                    handleDateChange={(date) => setFieldValue('startDate', date)}
                                                />
                                            )}
                                        </Field>
                                        <div style={{color:"red",fontSize:"1.8rem"}}>
                                            <ErrorMessage name='startDate'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-6'>
                                    <label className='name text-3xl' >
                                        End Date
                                    </label>
                                    <div className='date mt-3'>
                                        <Field name="endDate">
                                            {({field,form}: FieldProps) => (
                                                <DatePicker
                                                    selectedDate={values.endDate}
                                                    handleDateChange={(date) =>form.setFieldValue('endDate', date)}
                                                />
                                            )
                                            
                                            }
                                        </Field>
                                        <div style={{color:"red",fontSize:"1.8rem"}}>
                                            <ErrorMessage name='endDate'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-7'>
                                <label className='name text-3xl'>
                                    Add a cohort Avatar
                                </label>
                                <div>
                                    <ImageDropZone
                                        onSelect={async (file) => {
                                            const imageUrl = await uploadImageToCloudinary(file);
                                            setFieldValue('cohortAvatar', imageUrl);
                                        }}
                                    />
                                    <div className='info flex gap-2 items-center mt-3'>
                                        <InfoOutlinedIcon sx={{fontSize:"2.0rem"}}/>
                                        <p className='opt text-2xl'>You can do this later</p>
                                    </div>
                                </div>
                            </div>
                            <div className='opt flex space-x-3 justify-end py-5'>
                                <OutlineButton text='Cancel' padding='15px 46px' color='' border='' onClick={() => onClose()} />
                                <FilledButton text='Create a Cohort' padding='20px 60px' color='#008EEF' border='' type="submit" disabled={!(dirty && isValid)} />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Modal>
    );
}

const CreateCohort: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <React.Fragment>
            <div className='cont relative bottom-[380px] hidden xl:block'>
                <div className='main px-[1000px]'>
                    <div id={style.create} >
                        <img className='img w-[100%] mt-10' src={image} alt="" />
                    </div>
                    <div className='line'>
                        <h1 className='empty text-3xl font-extrabold text-center  leading-[40px]'>
                            Empty Space
                        </h1>
                        <p className='no text-3xl text-[#475661] w-[800px] text-center line leading-[60px]'>
                            No cohort has been created yet, let's get you started by clicking the button below
                        </p>
                    </div >
                    <div className='button mt-20 flex justify-center items-center mr-20'>
                        <FilledButton text='Create a Cohort' padding='20px 60px' color='#008EEF' border='' onClick={() => setShowModal(true)} />
                    </div>
                </div>
            </div>
            <CreateCohortModal isVisible={showModal} onClose={() => setShowModal(false)} />
        </React.Fragment>
    );
}

export default CreateCohort;
