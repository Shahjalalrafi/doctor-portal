import React from 'react';

const PatientTable = ({patients}) => {
    return (
        <div className='row p-5' style={{background: "#c4edf3"}}>
            <table className='col-md-12'>
                <tr>
                    <th className='col-md-1 py-3'>SR.No</th>
                    <th className='col-md-2 py-3'>Name</th>
                    <th className='col-md-1 py-3'>Gender</th>
                    <th className='col-md-1 py-3'>Age</th>
                    <th className='col-md-2 py-3'>Contact</th>
                    <th className='col-md-3 py-3'>Gmail</th>
                </tr>
                {
                    patients.map((patient,index) => <tr>
                        <td style={{color: '#1cc7c1'}} className='py-2'>{index +1}</td>
                        <td>{patient.name}</td>
                        <td>{patient.gender}</td>
                        <td>{patient.age}</td>
                        <td>{patient.number}</td>
                        <td>{patient.email}</td>
                    </tr>)
                }
            </table>
        </div>
    );
};

export default PatientTable;