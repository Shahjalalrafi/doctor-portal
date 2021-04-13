import React from 'react';
import BookingDetails from './BookingDetails';

const Booking = ({date}) => {
    const bookingDetails = [
        {
            name: 'teeth orthodotics',
            date: '8:00 AM - 9:00 AM',
            available: '10 spaces Available',
        },
        {
            name: 'Conmetic dentistity',
            date: '10:00 AM - 11:00 AM',
            available: '8 spaces Available',
        },
        {
            name: 'teeth cleaning',
            date: '7:00 AM - 8:00 AM',
            available: '3 spaces Available',
        },
        {
            name: 'cavity protection',
            date: '8:00 AM - 10:00 AM',
            available: '17 spaces Available',
        },
        {
            name: 'teeth orthodotics',
            date: '8:00 AM - 9:00 AM',
            available: '10 spaces Available',
        },
        {
            name: 'teeth orthodotics',
            date: '8:00 AM - 9:00 AM',
            available: '10 spaces Available',
        }
    ]
    return (
        <div>
            <h2 style={{color: '#1cc7c1'}}>Available appointment on {date}</h2>
            <div className="row m-5">
                {
                    bookingDetails.map(booking => <BookingDetails date={date} booking ={booking} />)
                }
            </div>
        </div>
    );
};

export default Booking;