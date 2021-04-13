import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs/ContactUs';
import Doctors from '../Doctors/Doctors';
import ExceptionalSection from '../Exception/ExceptionalSection';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Header from '../Header/Header';
import Footer from '../../../Shared/Footer/Footer';
import Login from '../../Login/Login';

const Home = () => {
    return (
        <main>
            <Header />
            <Services />
            <ExceptionalSection />
            <Appointment />
            <Testimonial />
            <Blog />
            <Doctors />
            <ContactUs />
            <Footer />
        </main>
    );
};

export default Home;