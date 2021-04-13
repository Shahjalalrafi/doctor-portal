import React from 'react';
import SingleInfo from './SingleInfo';
import { faClock, faMap, faPhone } from '@fortawesome/free-solid-svg-icons'
import './HeaderInfo.css'

const HeaderInfo = () => {
    const infoData =[
        {
            title: 'Opening Hour',
            desc: 'open every 24 hours',
            icon: faClock,
            color: 'primary'
        },
        {
            title: 'Visit Our location',
            desc: 'Broklyn 34c, 1003, United states',
            icon: faMap,
            color: 'dark'
        },
        {
            title: 'Contact us now',
            desc: '02-937489902',
            icon: faPhone,
            color: 'primary'
        }
    ]
    return (
        <section className="row w-75 m-auto">
            {
                infoData.map(info => <SingleInfo info={info} />)
            }
        </section>
    );
};

export default HeaderInfo;