import React from 'react';
import feature from '../../../Images/featured.png'

const ExceptionalSection = () => {
    return (
        <section className='row w-75 align-items-center my-5 m-auto'>
            <div className='col-md-5'>
                <img className='img-fluid' src={feature} alt=""/>
            </div>
            <div className="col-md-6 text-start">
                <h2>Exceptional dental care, On your terms</h2>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio quis eveniet voluptatum iste veritatis culpa possimus repudiandae cum ipsum necessitatibus hic, exercitationem, similique quibusdam. Consequatur eligendi corrupti repellendus sapiente.</p>
                <button className='btn btn-cane'>Learn more</button>
            </div>
        </section>
    );
};

export default ExceptionalSection;