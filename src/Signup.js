import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

function Signup() {
  const [state, setState] = useState({
    email: "",
    password: "",
    emailErr: "",
    passwordErr: "",
  });
  function Loginhandeler(e) {
    if(isEmailValid || isPasswordValid){
      return "login";
    }
    else{
      alert("loginggggg")

    }

  }
  const isEmailValid = (email) => {
    return Boolean(
      !email.match(
        /^[\w-_+]+([.-]?[\w-_+]+)*@[\w-_+]+([.-]?[\w-_+]+)*(\.[\w-_+]{2,})+$/
      )
    );
  };
  function Emailhandler(e) {
    let item = e.target.value;
    setState((state) => {
      return { ...state, email: item, emailErr: isEmailValid(item) };
    });
  }
const isPasswordValid=(password)=>{
  return Boolean(
  !password.match(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    // Password Validation Number, Capitalized, 8 Chracters
    )
  );
}

  function passwordHandler(e) {
    let item = e.target.value;
    console.log(item);
    setState((state) => {
      return { ...state, password: item , passwordErr: isPasswordValid(item)};
    });
  }
  console.log(state);
  return (
    <div>
      <h1>Sign up to see photos and videos from your friends.</h1>
      <form onSubmit={Loginhandeler}>
        <input
          type="text"
          placeholder="Mobile Number or Email"
          onChange={Emailhandler}
        />
        {state.email && 
        state?.emailErr ? (
          <span style={{ color: "tomato" }}> Invalid email address</span>
        ) : null}

        <br></br>
        <input type="text" placeholder="User Name" />
        <br></br>
        <input type="text" placeholder="Password" onChange={passwordHandler} />
        {state?.passwordErr? (
          <span style={{ color: "tomato" }}> Invalid password address</span>
        ) : null}
        <br></br>
        <div type="Submit">
        <Link to="/Apicalling">Signup</Link>
        </div>
        <br></br>
      </form>
    </div>
  );
}
export default Signup;
