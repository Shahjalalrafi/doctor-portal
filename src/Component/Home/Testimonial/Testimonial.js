import React from 'react';
import img1 from '../../../Images/Ellipse 1.png'
import img2 from '../../../Images/Ellipse 2.png'
import img3 from '../../../Images/Ellipse 3.png'
import TestimonialInfo from './TestimonialInfo';


const Testimonial = () => {
    const testimonialInfo = [
        {
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias magnam quia numquam autem reprehenderit exercitationem quaerat, porro facilis! Numquam, error!',
            name: 'winson Herry',
            image: img1,
            place: 'california'
        },
        {
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias magnam quia numquam autem reprehenderit exercitationem quaerat, porro facilis! Numquam, error!',
            name: 'winson Herry',
            image: img2,
            place: 'california'
        },
        {
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias magnam quia numquam autem reprehenderit exercitationem quaerat, porro facilis! Numquam, error!',
            name: 'winson Herry',
            image: img3,
            place: 'california'
        },
    ]
    return (
        <section className='row w-75 m-auto'>
            <div className='col-md-6 text-start'>
                <h6 style={{color: '#1cc7c1'}}>TESTIMONIAL</h6>
                <h4>What's our patient says</h4>
            </div>
            <div className='col-6'>
                <p>ki</p>
            </div>
            <div className='row'>
                {
                    testimonialInfo.map(info => <TestimonialInfo info={info} />)
                }
            </div>
        </section>
    );
};

export default Testimonial;