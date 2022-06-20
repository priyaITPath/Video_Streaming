import React from "react";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
function App() {
  const show = useSelector((state)=>state.showdata);
  console.log(show,"uhuhuh");
  return (
    <div className="w-[auto] ">
    { show.value == false ?  <Login /> : <Dashboard /> }
     
    
    </div>
  );
}

export default App;
