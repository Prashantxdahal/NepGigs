import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./core/Public/Register";
import HowItWorks from "./core/Public/HowItWorks";
import UserDashboard from "./core/Public/UserDashboard";
import GigsPosting from "./core/Public/GigsPosting";
import BuyerDashboard from "./core/Public/BuyerDashboard";
import AdminDashboard from "./core/Public/AdminDashboard";
function App() {
  return (
    <Routes>
      {/* {<Route path="/Discover" element={<Discover />} />  } */}
      <Route path="/UserDashboard" element={<UserDashboard />} />
      <Route path="/HowItWorks" element={<HowItWorks />} />
      <Route path="/GigsPosting" element={<GigsPosting />} />
      <Route path="/BuyerDashboard" element={<BuyerDashboard />} />
      <Route path="/AdminDashboard" element={<AdminDashboard />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
