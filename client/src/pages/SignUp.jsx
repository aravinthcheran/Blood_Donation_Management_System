import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    avatar: "",
    gender: "",
    address: "",
    contact: "",
    age: null,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = values;
      console.log(newUser);
      const response = await fetch("http://localhost:5001/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        alert("User created successfully!");
      } else {
        throw new Error("Failed to create user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div classname="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div classname="bg-white p-3 rounded w-75">
        <h2 classname="text-center">Register</h2>
        <form classname="row g-3" onSubmit={handleSubmit}>
          <div classname="col-md-6">
            <label htmlFor="username" classname="form-label">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              classname="form-control rounded-0"
              onChange={handleChange}
              value={values.username}
              required
            />
          </div>
          <div classname="col-md-6">
            <label htmlFor="email" classname="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              classname="form-control rounded-0"
              onChange={handleChange}
              value={values.email}
              required
            />
          </div>
          <div classname="col-md-6">
            <label htmlFor="password" classname="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              classname="form-control rounded-0"
              onChange={handleChange}
              value={values.password}
              required
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
              {/* <option value="">Select gender</option> */}
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div classname="col-md-6">
            <label htmlFor="address" classname="form-label">
              <strong>Address</strong>
            </label>
            <textarea
              placeholder="Enter address"
              name="address"
              classname="form-control rounded-0"
              onChange={handleChange}
              value={values.address}
            />
          </div>
          <div classname="col-md-6">
            <label htmlFor="contact" classname="form-label">
              <strong>Contact</strong>
            </label>
            <input
              type="text"
              placeholder="Enter contact"
              name="contact"
              classname="form-control rounded-0"
              onChange={handleChange}
              value={values.contact}
            />
          </div>
          <div classname="col-md-6">
            <label htmlFor="age" classname="form-label">
              <strong>Age</strong>
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
