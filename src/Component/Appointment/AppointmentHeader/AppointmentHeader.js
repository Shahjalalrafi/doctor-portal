import React from 'react';
import chair from '../../../Images/chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleChange}) => {
    
    return (
        <div className="header-main row py-5 my-3 d-flex align-items-center">
            <div className="col-md-4 p-4 offset-md-1 text-start">
                <h2>Appointment</h2>
                <Calendar
                    onChange={handleChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6 p-4">
                <img className="img-fluid" src={chair} alt="" />
            </div>
        </div>
    );
};

export default AppointmentHeader;