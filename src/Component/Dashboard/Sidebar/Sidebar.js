import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faFileAlt, faCarAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'
import { userContext } from '../../../App';

const Sidebar = () => {
    const [isLogedIn, setIsLogedIn] = useState(false)
    const [logedInUser, setLogedInUser] = useContext(userContext)

    useEffect(() => {
        fetch('http://localhost:5050/IsDoctor', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: logedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsLogedIn(data))
    }, [])

    return (
        <div className='row sidebar'>
            <ul className="list-unstyled">

                <li>
                    <Link to='/dashboard'><FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span></Link>
                </li>
               {
                   isLogedIn && <div>
                        <li>
                    <Link to='/dashboard/appointment'><FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span></Link>
                </li>
                <li>
                    <Link to='/dashboard/patients'><FontAwesomeIcon icon={faUsers} /> <span>Patients</span></Link>
                </li>
                <li>
                    <Link to='/dashboard/prescription'><FontAwesomeIcon icon={faFileAlt} /> <span>Prescription</span></Link>
                </li>
                <li>
                    <Link to='/dashboard/add-doctor'><FontAwesomeIcon icon={faCarAlt} /> <span>Add doctors</span></Link>
                </li>
                <li>
                    <Link to='/dashboard/settings'><FontAwesomeIcon icon={faCog} /> <span>settings</span></Link>
                </li>
                   </div>
               }
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;