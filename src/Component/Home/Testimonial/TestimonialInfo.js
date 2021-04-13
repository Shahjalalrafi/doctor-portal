import React from 'react';

const TestimonialInfo = ({info}) => {
    return (
        <div className='col-md-3 card text-start my-5 p-3 m-3 m-auto'>
            <p className='card-title'>{info.desc}</p>
            <div className="row">
                <div className="col-md-3 ">
                <img className='card-img' src={info.image} alt=""/>
                </div>
                <div className="col-md-8">
                    <h6 style={{color: '#1cc7c1'}} className='card-title'>{info.name}</h6>
                    <p>{info.place}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialInfo;