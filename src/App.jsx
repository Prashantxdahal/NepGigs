import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./core/Public/Register";
import HowItWorks from "./core/Public/HowItWorks";
import UserDashboard from "./core/Public/UserDashboard";
import GigsPosting from "./core/Public/GigsPosting";
function App() {
  return (
    <Routes>
      {/* {<Route path="/Discover" element={<Discover />} />  } */}
      <Route path="/UserDashboard" element={<UserDashboard />} />
      <Route path="/HowItWorks" element={<HowItWorks />} />
      <Route path="/GigsPosting" element={<GigsPosting />} />
      {/* <Route path="/register" element={<Register />} />  */}
    </Routes>
  );
}

export default App;
