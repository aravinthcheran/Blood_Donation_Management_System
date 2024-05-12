import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPatient = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-75">
        <h2 className="text-center">Patient Login</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="Username" className="form-label">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="Username"
              className="form-control rounded-0"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="Password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="Password"
              className="form-control rounded-0"
            />
          </div>
          <div className="col-md-12 text-center">
            <button
              type="submit"
              className="btn btn-primary w-50 rounded-0 text-decoration-none"
            >
              <Link to="/pages/patient">Login</Link>
            </button>
          </div>
          <div className="col-md-12 text-center">
            <p>
              Don't have an account?{" "}
              <Link to="/pages/SignUpPatient" className="text-decoration-none">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPatient;
