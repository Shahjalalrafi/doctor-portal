import React from 'react';

const ServiceDetails = ({info}) => {
    return (
        <div className='col-md-4 py-4'>
            <img className='my-3' style={{width: '50px'}} src={info.img} alt=""/>
            <h6>{info.name}</h6>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quos unde, minima ratione sit officia.</p>
        </div>
    );
};

export default ServiceDetails;