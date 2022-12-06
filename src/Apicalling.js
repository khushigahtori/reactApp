import React, { useEffect, useState } from "react";
import "./Apicalling.css";

function Apicalling() {
  const [countryData, setcountrydata] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((result) => {
      result.json().then((countryData) => {
        console.log("result", countryData);
        setcountrydata(countryData);
      });
    });
  }, []);
  function searchtable(e) {
    let name = e.target.value;
    fetch(`https://restcountries.com/v3.1/name/${name}`).then((result) => {
      result.json().then((name) => {
        console.log(name + ".....");
        setcountrydata(name);
      });
    });
  }
  
  return (
    <div>
      <h1>Country Name</h1>
      <input type="text" onChange={searchtable}></input>
      <table>
        <tr>
          <td>name</td>
          <td>capital</td>
          {/* <td>languages</td> */}
          <td>Flags</td>
        </tr>
        {countryData.map((item) => (
          <tr>
            <td>{item.name.common}</td>
            <td>{item.capital}</td>
            {/* <td>{item.languages.ara}</td> */}
            <td>
              <img src={item.flags.png}></img>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Apicalling;
