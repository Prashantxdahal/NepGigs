import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './public/LandingPage';
import LoginPage from './public/LoginPage';
import GigPosting from './public/GigPosting';
import AccountSetting from './public/AccountSetting';
import GigDetailPage from './public/GigDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/gig-posting" element={<GigPosting />} />
        <Route path="/account-setting" element={<AccountSetting />} />
        <Route path="/gig-detail" element={<GigDetailPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;