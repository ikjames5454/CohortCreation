// import React,{useState} from 'react'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import {FaCalendarAlt} from 'react-icons/fa'







interface DateProps {
  selectedDate: string | Date | null ;
  handleDateChange: (date: Date | null | "") => void;
}

function CustomInput(props: any) {
  return (
    <div className='flex items-center'>
      <input
        type='text'
        className='form-control text-3xl border border-slate-950 w-80 h-[75px] px-5 rounded-lg'
        value={props.value}
        onClick={props.onClick}
        readOnly
        placeholder='23 Dec 2023'
      />
      <div className='input-group-append'>
        <span className='input-group-text'>
          <FaCalendarAlt
            className='icon text-3xl relative right-12'
            style={{ fontSize: '30px' }}
          />
        </span>
      </div>
    </div>
  );
}

const DateComponent: React.FC<DateProps> = ({ selectedDate, handleDateChange }) => {
  return (
    <div>
      <label>
        <Datepicker
          selected={selectedDate ? new Date(selectedDate) : null}
          onChange={handleDateChange}
          customInput={<CustomInput value={selectedDate?.toString() || ''} onClick={() => handleDateChange} />}
        />
      </label>
    </div>
  );
};

export default DateComponent;


