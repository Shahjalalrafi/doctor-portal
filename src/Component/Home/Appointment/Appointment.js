import React from 'react';
import doctor from '../../../Images/doctor.png'
import './Appointment.css'

const Appointment = () => {
    return (
        <div className='appointment-section my-5'>
            <section className='row d-flex align-items-center w-75 m-auto '>
            <div className='col-5'>
                <img src={doctor} className='img-fluid' alt=""/>
            </div>
            <div className="col-6 text-start">
                <h6 style={{color: '#1cc7c1'}}>APPOINTMENT</h6>
                <h2 className='text-white'>Make an Appointment today</h2>
                <p  className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, repellat.</p>
                <button className="btn btn-cane">Learn More</button>
            </div>
        </section>
        </div>
    );
};

export default Appointment;