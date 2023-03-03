import React, { useState } from "react";
import "./login.css";

function Login() {
  const [password, setPassword] = useState("");
  console.log("Password length: ", password.length);
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="btn btn-primary mt-3 w-100"
            type="submit"
            disabled={password.length < 8}
          >
            Submit
            {password.length < 8 ? " is disabled" : " is enabled"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
