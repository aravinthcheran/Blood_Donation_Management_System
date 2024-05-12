import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginHospital = () => {
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-75'>
                <h2 className='text-center'>Hospital Login</h2>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor='UsernameOrEmail' className='form-label'><strong>Username or Email</strong></label>
                        <input type='text' placeholder='Enter Username or Email' name='UsernameOrEmail' className='form-control rounded-0'/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor='Password' className='form-label'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='Password' className='form-control rounded-0'/>
                    </div>
                    <div className="col-md-12 text-center">
                        <button type='submit' className='btn btn-primary w-50 rounded-0' ><Link to='/pages/Hospital' className='text-decoration-none'>Login</Link></button>
                    </div>
                    <div className="col-md-12 text-center">
                        <p>Don't have an account? <Link to='/pages/SignUpHospital' className='text-decoration-none'>Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginHospital;
