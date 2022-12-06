import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import Forgotpassword from "./Forgotpassword";
import Facebooklogin from "./Facebooklogin";
import Forgottenaccount from "./Forgottenaccount";
import Dashboard from "./Dashboard";
import Apicalling from "./Apicalling"
import Product from "./Product"
import ProductTable from "./ProductTable"
import { BrowserRouter, Route, Routes, } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="aap">
        {/* <Link to="/">Login</Link>
        <Link to="/Singup">Singup</Link>
        <Link to="/Forgotpassword">Forgotpassword</Link>
        <Link to="/Facebooklogin">Facebooklogin</Link>
        <Link to="/Forgottenaccount">Forgottenaccount</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Apicalling">Apicalling</Link>
        <Link to="/Product">Product</Link>
        <Link to="/ProductTable">ProductTable</Link> */}



        <Routes>
          <Route path="/"element={<Login />} />
          <Route path="/Singup" element={<Signup />} />
          <Route path="/Forgotpassword" element={<Forgotpassword/>} />
          <Route path="/Facebooklogin" element={<Facebooklogin/>} />
          <Route path="/Forgottenaccount" element={<Forgottenaccount/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Apicalling" element={<Apicalling/>} />
          <Route path="/Product" element={<Product/>} />
          <Route path="/ProductTable" element={<ProductTable/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
