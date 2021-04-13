import React, { useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import Booking from '../Booking/Booking';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString())
    const handleChange = (date) => {
        setSelectedDate(date.toLocaleDateString())
        console.log(date.toLocaleDateString())
    }
    return (
        <main>
            <Navbar />
            <AppointmentHeader handleChange={handleChange}/>
            <Booking date={selectedDate}/>
            <Footer />
        </main>
    );
};

export default Appointment;