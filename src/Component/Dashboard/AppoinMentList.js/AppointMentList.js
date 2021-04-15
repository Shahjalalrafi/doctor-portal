import React, { useState } from 'react';

const AppointMentList = ({ appointMent }) => {

    return (
        <div className='row'>
            <h6 style={{color: '#1cc7c1'}}>Appoinments</h6>
            {/* {
                appointMent.length > 0 ? 
                    appointMent.map(data => <li>{data.name}</li>) : <h2>No Appointment</h2>
            } */}
            {
                appointMent.length > 0 ?
                    <table>
                        <tr className='col-md-12'>
                            <th className='col-md-2 text-dark'>Name</th>
                            <th className='col-md-3 text-dark'>Date</th>
                            <th className='col-md-7 text-dark'>email</th>
                        </tr>

                        {
                            appointMent.map(data => <tr className='col-md-12'>
                                <td>{data.name}</td>
                                <td>{data.date}</td>
                                <td>{data.email}</td>
                            </tr>)
                        }

                    </table> : <h4>No appointment</h4>
            }
        </div>
    );
};

export default AppointMentList;