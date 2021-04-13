import React from 'react';
import './Contactus.css'

const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className='row'>
                <h6>CONTACT US</h6>
                <h3>Always connect with us</h3>
                <form style={{ width: '600px' }} className='m-auto'>
                    <input className='form-control my-2' type="text" placeholder='Email address' />
                    <input className='form-control my-2' type="text" placeholder='Subject' />
                    <textarea className='form-control my-2' placeholder='your message' id="" cols="30" rows="10"></textarea>
                    <input className='btn btn-cane' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;