import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import Forgotpassword from "./Forgotpassword";
import Facebooklogin from "./Facebooklogin";
import Forgottenaccount from "./Forgottenaccount";
import { BrowserRouter, Route, Link, Routes, } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="aap">
        <Link to="/">Login</Link>
        <Link to="/Singup">Singup</Link>
        <Link to="Singup/Forgotpassword">Forgotpassword</Link>
        <Link to="Singup/Forgotpassword/Facebooklogin">Facebooklogin</Link>
        <Link to="Singup/Forgotpassword/Facebooklogin/Forgottenaccount">Forgottenaccount</Link>
        

        <Routes>
          <Route path="/"element={<Login />} />
          <Route path="/Singup" element={<Signup />} />
          <Route path="Singup/Forgotpassword" element={<Forgotpassword/>} />
          <Route path="Singup/Forgotpassword/Facebooklogin" element={<Facebooklogin/>} />
          <Route path="Singup/Forgotpassword/Facebooklogin/Forgottenaccount" element={<Forgottenaccount/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
