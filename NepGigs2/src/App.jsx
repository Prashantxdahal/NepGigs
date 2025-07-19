
import React from 'react'; 
import DiscoverPage from './assets/public/DiscoverPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ForgetPassword from './assets/public/ForgetPassword';

import Account from './assets/public/AccountSetting.jsx';
import AccountSetting from './assets/public/AccountSetting.jsx';
import GigsPosting from './assets/public/GigsPosting.jsx';
import RequestReceived from './assets/public/RequestReceived.jsx';
import RequestForm from './assets/public/RequestForm.jsx';

function App() {
  return (
    <div className="App">
      {/* <DiscoverPage /> */}
      {/* <ForgetPassword/> */}
     {/* <AccountSetting/> */}
     {/* <GigsPosting/> */}
     {/* <RequestReceived/> */}
     <RequestForm/>
    </div>
  );
}

export default App;


