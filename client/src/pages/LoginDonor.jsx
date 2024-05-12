import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import 'bootstrap/dist/css/bootstrap.min.css';// Assuming you're using Bootstrap for styling

const LoginDonor = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-75">
        <h2 className="text-center">Login</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="Email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="Email"
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
            <button type="submit" className="btn btn-primary w-50 rounded-0 ">
              <Link to="/pages/Donar" className="text-decoration-none">
                Login
              </Link>
            </button>
          </div>
          <div className="col-md-12 text-center">
            <p>
              Don't have an account?{" "}
              <Link to="/pages/SignUpDonar" className="text-decoration-none">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginDonor;
