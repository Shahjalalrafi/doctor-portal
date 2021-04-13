import React from 'react';
import doctor from '../../../Images/doctor.png'

const Doctors = () => {
    return (
        <div className='row'>
            <div className='col-4'>
                <img className='img-fluid' src={doctor} alt="" />
                <h6>Name: jogn smith</h6>
                <p>+9237999374</p>
            </div>
            <div className='col-4'>
                <img className='img-fluid' src={doctor} alt="" />
                <h6>Name: jogn smith</h6>
                <p>+9237999374</p>
            </div>
            <div className='col-4'>
                <img className='img-fluid' src={doctor} alt="" />
                <h6>Name: jogn smith</h6>
                <p>+9237999374</p>
            </div>
        </div>
    );
};

export default Doctors;