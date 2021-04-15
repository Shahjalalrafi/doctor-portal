import React, { useContext, useEffect, useState } from 'react';
import AppointMentList from '../AppoinMentList.js/AppointMentList';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { userContext } from '../../../App';

const Dashboard = () => {

    const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString())
    const [appointMent, setAppointMent] = useState([])
    const [logedInUser, setLogedInUser] = useContext(userContext)

    const HandleChange = (date) => {
        setSelectedDate(date.toLocaleDateString())
        console.log(date.toLocaleDateString())
        
        
    }

    useEffect(() => {
        fetch('http://localhost:5050/appointmentByDate', {
            method:'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({date: selectedDate, email: logedInUser.email})
        })
        .then(res => res.json())
        .then(data => setAppointMent(data))
    }, [selectedDate])


    return (
        <section className='container-fluid row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-5">
                <Calendar
                    onChange={HandleChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-5">
                <AppointMentList appointMent={appointMent} />
            </div>
        </section>
    );
};

export default Dashboard;