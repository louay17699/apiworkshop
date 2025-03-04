import React from 'react'
import "./signup.css"

function Signup() {
  return (
    <>
  <div className="wrapper">
    <a href="#" className="menu-toggle">
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </a>
    <div className="quote-wrapper">
      <blockquote>
        <p>
          "Paradise isn't a place. <br />
          It's a feeling"
        </p>
        <p className="author">- L. Boyer</p>
      </blockquote>
    </div>{" "}
    {/* end quote-wrapper */}
    <div className="form-wrapper">
      <h1 className="form-title">Sign up</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="w-100"
            autofocus=""
            defaultValue="chino"
            title="Must be longer than 4 characters"
          />
          <span className="check-icon" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-100"
            defaultValue="info@chino.com"
          />
          <span className="check-icon" />
        </div>
        <div className="form-group mb-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-100"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            defaultValue="WeloveChino2"
          />
          <span className="check-icon" />
        </div>
        <div className="form-group text-left mb-2">
          <input type="checkbox" defaultChecked="" />
          <label htmlFor="" className="terms">
            I agree to the <a href="#">Terms &amp; Contitions</a>
          </label>
        </div>
        <div className="form-group mb-0">
          <input
            type="submit"
            defaultValue="Create account"
            className="w-100"
            id="submit"
          />
        </div>
      </form>
      <small>
        Have an account? <a href="#">Click here</a>
      </small>
    </div>{" "}
    {/* end form-wrapper */}
  </div>{" "}
  {/* end wrapper */}
</>

  )
}

export default Signup