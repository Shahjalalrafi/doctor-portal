import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <Link to='/home'>
                                <li class="nav-item me-4 nav-link text-dark">Home</li>
                            </Link>
                            <Link to='/dashboard'>
                                <li class="nav-item me-4 nav-link text-dark">Dashboard</li>
                            </Link>
                            <Link to='/dental-services'>
                                <li class="nav-item me-4 nav-link text-dark">Dental Services</li>
                            </Link>
                            <Link to='/reviews'>
                                <li class="nav-item me-4 nav-link text-dark">Reviews</li>
                            </Link>
                            <Link to='/blog'>
                                <li class="nav-item me-4 nav-link text-light">Blog</li>
                            </Link>
                            <Link to='/contact-us'>
                                <li class="nav-item me-4 nav-link text-light">Contact us</li>
                            </Link>
                            <Link to='/login'>
                                <li class="nav-item me-4 nav-link text-light">Login</li>
                            </Link>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;