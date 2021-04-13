import React from 'react';
import BookingForm from '../BookingForm/BookingForm';

const BookingDetails = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='col-md-4 card'>
            <div className='card-body'>
                <h5 style={{color: '#1cc7c1'}}>{booking.name}</h5>
                <h6>{booking.date}</h6>
                <small>{booking.available}</small>
                <button onClick={openModal} className='btn btn-cane'>BOOK APPOINTMENT</button>
                <BookingForm modalIsOpen={modalIsOpen} date={date} service={booking.name} closeModal={closeModal} />
            </div>
        </div>
    );
};

export default BookingDetails;