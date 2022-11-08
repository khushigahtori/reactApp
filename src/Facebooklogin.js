import React from "react";
import { BrowserRouter, Route, Link, Routes, } from "react-router-dom";

function Facebookloging() {
  return (
    <div>
      <h1>Log in to Facebook</h1>
      <form>
        <inpit type="text" placeholder=" Email Adress or Phone Number " />
        <inpit type="text" placeholder=" Password" />
        <br></br>
        <button type="Submit">Facebook login</button>
        <br></br>
      </form>
      <button type="Submit">Creat a new account</button>
      <Link to='/'>Not Now</Link> 
      
    </div>
  );
}
export default Facebookloging;
