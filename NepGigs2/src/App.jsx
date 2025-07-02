
import React from 'react'; 
import DiscoverPage from './assets/public/DiscoverPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ForgetPassword from './assets/public/ForgetPassword';

import Account from './assets/public/AccountSetting.jsx';
import AccountSetting from './assets/public/AccountSetting.jsx';

function App() {
  return (
    <div className="App">
      {/* <DiscoverPage /> */}
      {/* <ForgetPassword/> */}
     <AccountSetting/>
    </div>
  );
}

export default App;


