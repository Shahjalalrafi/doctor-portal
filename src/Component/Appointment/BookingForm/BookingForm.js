import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')


const BookingForm = ({ modalIsOpen, closeModal, service, date }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        data.service= date;
        data.date= date;
        // data.date = date;
        data.created= new Date()
        

        fetch('http://localhost:5050/addAppointment', {
            method:"Post",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success) {
                closeModal()
                alert('apppointment take succesfully')        
            }
        })
        .catch(err => console.log(err))
        
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 >{service}</h2>
                <button className='btn btn-cane' onClick={closeModal}>close</button>
                <div>{date}</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control my-2' placeholder='Name' type="text" {...register("name")} required />
                    <input className='form-control my-2' placeholder='Your email' type='email' {...register("email")} required />
                    <input className='form-control my-2' placeholder='phone number' type='number' {...register("number")}  required/>
                    <select className='form-control my-2'  {...register("gender")} required>
                        <option value="male">male</option>
                        <option value="Female">Female</option>
                        <option value="other">others</option>
                    </select>

                    <input className='form-control my-2' placeholder='Age' type='number' {...register("age")} required />
                    <input className='form-control my-2' placeholder='mm/dd/yyyy' type='date' {...register("date")} required />

                    <input className='btn btn-cane' type="submit" value='send' />
                </form>
            </Modal>
        </div>
    );
};

export default BookingForm;