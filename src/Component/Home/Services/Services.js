import React from 'react';
import flouride from '../../../Images/flouride.png'
import cavity from '../../../Images/cabity.png'
import teath from '../../../Images/teath.png'
import ServiceDetails from './ServiceDetails';

const Services = () => {
    const serviceInfo = [
        {
            name: "flouride Treatment",
            img: flouride
        },
        {
            name: "cabity filling",
            img: cavity
        },
        {
            name: "teath whitening",
            img: teath
        }
    ]
    return (
        <section className='row my-5 d-flex align-items-center'>
            <h6 style={{color: '#1cc7c1'}}>Our services</h6>
            <h4>services we Provide</h4>
            <div className='row w-75 m-auto'>
                {
                    serviceInfo.map(info => <ServiceDetails info={info} />)
                }
            </div>
        </section>
    );
};

export default Services;