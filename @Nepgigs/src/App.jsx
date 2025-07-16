import React from 'react';
<<<<<<< HEAD
import LandingPage from './LandingPage';

function App() {
  return <LandingPage />;
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './public/LandingPage';
import LoginPage from './public/LoginPage';
import GigPosting from './public/GigPosting';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/gig-posting" element={<GigPosting />} />
      </Routes>
    </Router>
  );
>>>>>>> 8e2f909 (Adding Gig Posting page)
}

export default App;
