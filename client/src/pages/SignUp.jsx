import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    password: "",
    email: "",
    age: "",
    gender: "",
    issues: "",
    address: "",
    contact: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/signup", values)
      .then((res) => {
        console.log("Registered Successfully");
        // You can handle success as per your requirement
      })
      .catch((err) => console.log(err));
  };

  return (
    <div classname="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div classname="bg-white p-3 rounded w-75">
        <h2 classname="text-center">Donor Registration</h2>
        <form onSubmit={handleSubmit} classname="row g-3">
          <div classname="col-md-6">
            <label htmlFor="name" classname="form-label">
              <strong>name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              classname="form-control rounded-0"
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <div classname="col-md-6">
            <label htmlFor="email" classname="form-label">
              <strong>email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              classname="form-control rounded-0"
              onChange={handleChange}
              value={values.email}
            />
          </div>
          <div classname="col-md-6">
            <label htmlFor="password" classname="form-label">
              <strong>password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              classname="form-control rounded-0"
              onChange={handleChange}
              value={values.password}
            />
          </div>
          <div classname="col-md-6">
            <label htmlFor="age" classname="form-label">
              <strong>age</strong>
            </label>
            <input
              type="number"
              placeholder="Enter age"
              name="age"
              classname="form-control rounded-0"
              onChange={handleChange}
              value={values.age}
            />
          </div>
          <div classname="col-md-6">
            <label htmlFor="gender" classname="form-label">
              <strong>gender</strong>
            </label>
            <select
              name="gender"
              classname="form-control rounded-0"
              onChange={handleChange}
              value={values.gender}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div classname="col-md-6">
            <label htmlFor="issues" classname="form-label">
              <strong>issues</strong>
            </label>
            <textarea
              placeholder="Enter issues"
              name="issues"
              classname="form-control rounded-0"
              onChange={handleChange}
              value={values.issues}
            />
          </div>
          <div classname="col-md-6">
            <label htmlFor="address" classname="form-label">
              <strong>address</strong>
            </label>
            <input
              type="text"
              placeholder="Enter address"
              name="address"
              classname="form-control rounded-0"
              onChange={handleChange}
              value={values.address}
            />
          </div>
          <div classname="col-md-6">
            <label htmlFor="contact" classname="form-label">
              <strong>Contact Number</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Contact Number"
              name="contact"
              classname="form-control rounded-0"
              onChange={handleChange}
              value={values.contact}
            />
          </div>
          <div classname="col-md-12 text-center">
            <button type="submit" classname="btn btn-success w-50 rounded-0 ">
              Sign Up
            </button>
          </div>
          <div classname="col-md-12 text-center">
            <p>By signing up, you agree to our terms and policies</p>
            <Link
              to="/pages/LoginDonar"
              classname="btn btn-default border w-50 bg-light rounded-0 text-decoration-none"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
