import React from 'react';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../../Shared/Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <Navbar />
            <HeaderMain />
            <HeaderInfo />
        </div>
    );
};

export default Header;