import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../Images/chair.png'

const HeaderMain = () => {
    // const btnAppointment = {
    //     backgrounColor: '#1cc7c1',

    // }
    return (
        <div className="header-main row py-5 my-3 d-flex align-items-center">
            <div className="col-md-4 p-4 offset-md-1 text-start">
                <h2>Your new smile <br/> Start here</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quas totam eum odio molestias corrupti exercitationem beatae accusantium tempora illum?</p>
                <Link to='/appointment'><button className="btn btn-cane">Get Appointment</button></Link>
            </div>
            <div className="col-md-6 p-4">
                <img className="img-fluid" src={chair} alt=""/>
            </div>
        </div>
    );
};

export default HeaderMain;