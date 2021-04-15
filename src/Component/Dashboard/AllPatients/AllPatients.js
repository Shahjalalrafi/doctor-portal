import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import PatientTable from './PatientTable';

const AllPatients = () => {

    const [patients, setPatients] = useState([])

    useEffect(() => {
        fetch('http://localhost:5050/allAppointment')
            .then(res => res.json())
            .then(data => setPatients(data))
    }, [])
    return (
        <div className='row'>
            <div className='col-md-2'>
                <Sidebar />
            </div>
            <div className="col-md-10">
                <PatientTable patients={patients} />
            </div>
        </div>
    );
};

export default AllPatients;