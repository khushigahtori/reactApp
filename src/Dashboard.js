import React from "react";
import { useLocation } from "react-router-dom";
function Dashboard() {
  const params = useLocation
  ();
  console.log(params.state,"Ankur Gahtori");
  return (
    <div>
      <h5>Welcome to dashboard</h5>
    </div>
  );
}
export default Dashboard;
