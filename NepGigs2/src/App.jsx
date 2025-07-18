
import React from 'react'; 
import DiscoverPage from './assets/public/DiscoverPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ForgetPassword from './assets/public/ForgetPassword';

import Account from './assets/public/AccountSetting.jsx';
import AccountSetting from './assets/public/AccountSetting.jsx';
import GigsPosting from './assets/public/GigsPosting.jsx';

function App() {
  return (
    <div className="App">
      {/* <DiscoverPage /> */}
      {/* <ForgetPassword/> */}
     {/* <AccountSetting/> */}
     <GigsPosting/>
     {/* <Gigs/> */}
    </div>
  );
}

export default App;


