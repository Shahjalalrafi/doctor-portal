import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SingleInfo = ({ info }) => {
    const { title, desc, icon, color } = info
    return (
        <div className={`col-md-4 d-flex align-atems-center p-2 info-${color}`}>
            <div className='font-icon'>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className='text-start ms-3'>
                <h6>{title}</h6>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default SingleInfo;