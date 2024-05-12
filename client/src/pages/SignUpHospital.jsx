import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
// import 'bootstrap/dist/css/bootstrap.min.css'; // Assuming you're using Bootstrap for styling

const SignUpHospital = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", values);
    // Reset form fields after submission
    setValues({
      name: "",
      email: "",
      password: "",
      address: "",
      contact: "",
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-75">
        <h2 className="text-center">Hospital Registration</h2>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              className="form-control rounded-0"
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className="form-control rounded-0"
              onChange={handleChange}
              value={values.email}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={handleChange}
              value={values.password}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="address" className="form-label">
              <strong>Address</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Address"
              name="address"
              className="form-control rounded-0"
              onChange={handleChange}
              value={values.address}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="contact" className="form-label">
              <strong>Contact</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Contact"
              name="contact"
              className="form-control rounded-0"
              onChange={handleChange}
              value={values.contact}
            />
          </div>
          <div className="col-md-12 text-center">
            <button type="submit" className="btn btn-success w-50 rounded-0 ">
              Sign Up
            </button>
          </div>
          <div className="col-md-12 text-center">
            <p>By signing up, you agree to our terms and policies</p>
            <Link
              to="/pages/LoginHospital"
              className="btn btn-default border w-50 bg-light rounded-0 text-decoration-none"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpHospital;
