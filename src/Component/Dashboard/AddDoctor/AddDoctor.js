import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {

    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = (e) => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
        console.log(info)
    }

    const handleFile = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email',info.email)

        fetch('http://localhost:5050/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault()
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <h2>Add a doctor</h2>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label name="name" class="form-label">Name</label>
                        <input type="text" class="form-control" name="name" onBlur={handleBlur} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">email</label>
                        <input type="email" class="form-control" name="email" onBlur={handleBlur} />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label name="file" class="form-label">File</label>
                        <input type="file" class="form-control" name="file" onChange={handleFile} />
                    </div>

                    <button type="submit" class="btn btn-cane">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;