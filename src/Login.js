import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;
function Login() {
  // const [user, setUser] = useState("");
  // const [password, setpassword] = useState("");
  // const [userErr, setUserErr] = useState(false);
  // const [passErr, setPassErr] = useState(false);
  const [state, setState] = useState({
    user: "",
    password: "",
    userErr: false,
    passErr: false,
  });
  const navigate = useNavigate();
  function loginHandel(e) {
    // if (user.length < 3 || password.length < 3) {
    //  alert("type correct value")
    // }
    //else {
    // alert("all good:)")
    e.preventDefault();
    navigate("/Dashboard", {
      state: {
        user: state.user,
        password: state.password,
      },
    });
  }

  function userHandler(e) {
    //  let item = e.target.value;
    //  console.log(item)
    // if (item.length < 3) {
    //   setUserErr(true)
    // }
    // else {
    //    setUserErr(false)
    //  }
    //  setUser(item)
    let item = e.target.value;
    // ye ni krenge
    //     setState({
    //       user: item,
    //       password: state.password,
    //       userErr: state.userErr,
    //       passErr: state.passErr,
    //     });

    setState((state) => ({
      user: item,
      password: state.password,
      userErr: state.userErr,
      passErr: state.passErr,
    }));
    if (item.length < 3) {
      setState((state) => ({
        user: state.user,
        password: state.password,
        userErr: true,
        passErr: state.passErr,
      }));
    } else {
      setState((value) => {
        return { ...value, userErr: false };
      });
    }
  }
  console.log(state);

  function passwordHandler(e) {
    // let item = e.target.value;
    // if (item.length < 3) {
    //   setPassErr(true)
    // }
    // else {
    //   setPassErr(false)
    // }
    // setpassword(item)

    let item = e.target.value;

    // setState({
    //   user: state.user,
    //   password: item,
    //   userErr: state.userErr,
    //   passErr: state.passErr,
    // });
    setState((state) => ({
      user: state.user,
      password: item,
      userErr: state.userErr,
      passErr: state.passErr,
    }));
    if (item.length < 3) {
      setState((state) => ({
        user: state.user,
        password: state.password,
        userErr: state.userErr,
        passErr: true,
      }));
    } else {
      setState((value) => {
        return { ...value, passErr: false };
      });
    }
    // setState({...state,passErr:true})
  }
  console.log(state);

  return (
    <>
      <div class="container">
        <div>
          <img
            style={{ maxHeight: "80vh", height: "auto", width: "auto" }}
            className="image"
            src="https://i0.wp.com/blogflick.wpcomstaging.com/wp-content/uploads/2022/06/03_New-Nudge-What-to-explore-next-.png"
          ></img>
        </div>
        <div className="App">
          <div>
            <img
              className="imageinsta"
              src="https://socialbee.io/wp-content/uploads/2021/04/800px-Instagram_logo.svg-768x275.png"
            ></img>
          </div>
          <form onSubmit={loginHandel}>
            <div className="clone">
              <input
                type="text"
                id="fname"
                nameName="fname"
                placeholder="phone Number,User Name,or email"
                onChange={userHandler}
              />
              {state.userErr ? <span>user not valid</span> : ""}
              <br />
              <input
                type="text"
                id="fname"
                nameName="fname"
                placeholder="Password"
                onChange={passwordHandler}
              />
              {state.passErr ? <span>password not valid</span> : ""}
              <br />
            </div>

            <button className="button">
              {" "}
              <Link to="/Dashboard">Login</Link>
            </button>

            <div class="sepreater">
              <p>___________________OR____________________</p>
            </div>
            <h4>
              <Link href="#" clLinkssName="fa fa-facebook"></Link>
              <Link to="/Facebooklogin"> login with facebook</Link>
            </h4>
            <p>
              <Link to="/Forgotpassword">forget password?</Link>
            </p>
          </form>
          <div className="demo">
            <p>
              {/* Don't have an account?<button class="avgs">sign up</button> */}
              <button class="avgs">
                {" "}
                <Link to="/Singup">Signup</Link>{" "}
              </button>
            </p>
          </div>
        </div>

        <div></div>
      </div>
      <footer>
        <div className="avg">
          <div className="footerdiv">
            <a href="https://about.meta.com/">Meta</a>
          </div>
          <div className="footerdiv">
            <a href="https://about.instagram.com/">About</a>
          </div>
          <div className="footerdiv">
            <a href="https://about.instagram.com/blog/">Blog</a>
          </div>
          <div className="footerdiv">
            <a href="https://www.instagram.com/about/jobs/">Jobs</a>
          </div>
          <div className="footerdiv">
            <a href="https://help.instagram.com/">Help</a>
          </div>
          <div className="footerdiv">
            <a href="https://developers.facebook.com/docs/instagram">Api</a>
          </div>
          <div className="footerdiv">
            <a href="https://www.instagram.com/legal/privacy/">Privacy</a>
          </div>
          <div className="footerdiv">
            <a href="https://www.instagram.com/legal/terms/">Terms</a>
          </div>
          <div className="footerdiv">
            <a href="https://www.instagram.com/directory/profiles/">
              Top accounts
            </a>
          </div>
          <div className="footerdiv">
            <a href="https://www.instagram.com/directory/hashtags/">Hastags</a>
          </div>
          <div className="footerdiv">
            <a href="https://www.instagram.com/explore/locations/">Locations</a>
          </div>
          <div className="footerdiv">
            <a href="https://www.instagram.com/web/lite/">Instagram lite</a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Login;
