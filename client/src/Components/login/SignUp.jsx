import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const SignUp = () => {
    const [values, setValues] = useState({
        Name: '',
        Password: '',
        Email: '',
        Age: '',
        Gender: '',
        Issues: '',
        Address: '',
        Contact_No: ''
    });

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/signup', values )
        .then(res => {
            console.log('Registered Successfully');
            // You can handle success as per your requirement
        })
        .catch(err => console.log(err));
    };
    
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-75'>
                <h2 className='text-center'>Donor Registration</h2>
                <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor='Name' className='form-label'><strong>Name</strong></label>
                        <input type='text' placeholder='Enter Name' name='Name' className='form-control rounded-0' onChange={handleChange} value={values.Name}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor='Email' className='form-label'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='Email' className='form-control rounded-0' onChange={handleChange} value={values.Email}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor='Password' className='form-label'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='Password' className='form-control rounded-0' onChange={handleChange} value={values.Password}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor='Age' className='form-label'><strong>Age</strong></label>
                        <input type='number' placeholder='Enter Age' name='Age' className='form-control rounded-0' onChange={handleChange} value={values.Age}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor='Gender' className='form-label'><strong>Gender</strong></label>
                        <select name='Gender' className='form-control rounded-0' onChange={handleChange} value={values.Gender}>
                            <option value=''>Select Gender</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value='Other'>Other</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor='Issues' className='form-label'><strong>Issues</strong></label>
                        <textarea placeholder='Enter Issues' name='Issues' className='form-control rounded-0' onChange={handleChange} value={values.Issues}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor='Address' className='form-label'><strong>Address</strong></label>
                        <input type='text' placeholder='Enter Address' name='Address' className='form-control rounded-0' onChange={handleChange} value={values.Address}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor='Contact_No' className='form-label'><strong>Contact Number</strong></label>
                        <input type='text' placeholder='Enter Contact Number' name='Contact_No' className='form-control rounded-0' onChange={handleChange} value={values.Contact_No}/>
                    </div>
                    <div className="col-md-12 text-center">
                        <button type='submit' className='btn btn-success w-50 rounded-0 '>Sign Up</button>
                    </div>
                    <div className="col-md-12 text-center">
                        <p>By signing up, you agree to our terms and policies</p>
                        <a to='/' className='btn btn-default border w-50 bg-light rounded-0 text-decoration-none'>Login</a>    
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
