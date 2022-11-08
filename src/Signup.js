import React from "react";
import { BrowserRouter, Route, Link, Routes, } from "react-router-dom";

function Signup() {
  return (
    <div>
      <h1>Sign up to see photos and videos from your friends.</h1>
      <form>
        <inpit type="text" placeholder="Mobile Number or Email" />
        <br></br>
        <input type="text" placeholder="Full Name" />
        <br></br>
        <input type="text" placeholder="User Name" />
        <br></br>
        <input type="text" placeholder="Password" />
        <br></br>
        <button type="Submit">Signup</button>  <div type="Submit"><Link to='/'>Back to Login</Link></div>
        <br></br>
      </form>
    </div>
  );
}
export default Signup;
