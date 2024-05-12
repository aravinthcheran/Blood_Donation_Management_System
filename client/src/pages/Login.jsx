import React, { useState } from "react";
import { Link } from "react-router-dom";
import { decodePassword } from "../utils/decodePassword";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  // Check whether email and password are valid by getting all users
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const users = await response.json();
        const user = users.find((user) => {
          return user.email === userDetails.email;
        });
        if (user) {
          decodePassword(userDetails.password, user.password)
            .then((match) => {
              if (match) {
                alert("Login successful!");
                window.location.href = "/pages/Donar";
              } else {
                alert("Invalid email or password");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          alert("Invalid email or password");
        }
      } else {
        throw new Error("Failed to get users");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-75">
        <h2 className="text-center">Login</h2>
        <form className="row g-3" onSubmit={handleSubmit}>
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
              <Link to="/signup/user" className="text-decoration-none">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
