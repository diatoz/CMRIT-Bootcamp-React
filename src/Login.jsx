import React from "react";
import "./style.css";

function Login() {
  return (
    <div className="container h-100 d-flex align-items-center justify-content-center">
      <div className="login-card card">
        <div className="form-header">Login</div>
        <div className="">
          <label for="email-input">Email</label>
          <input
            type="email"
            className="form-control"
            id="email-input"
            placeholder="Enter your email"
          />
          <label className="mt-3" for="password-input">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password-input"
            placeholder="Enter your password"
          />
          <button className="btn btn-primary mt-3 w-100" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
