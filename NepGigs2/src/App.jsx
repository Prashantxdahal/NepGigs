

import React from 'react'; 
import DiscoverPage from './assets/public/DiscoverPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ForgetPassword from './assets/public/ForgetPassword';

function App() {
  return (
    <div className="App">
      {/* <DiscoverPage /> */}
      <ForgetPassword/>
    </div>
  );
}

export default App;


