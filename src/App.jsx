import React from 'react'; 
import { Routes, Route } from 'react-router-dom'; 
import Register from './core/Public/Register';
function App() { 
  return ( 
    <Routes> 
      {/* <Route path="/" element={<Dashboard />} /> 
      <Route path="/login" element={<Login />} />  */}
      <Route path="/register" element={<Register />} /> 
    </Routes> 
  ); 
} 
 
export default App; 
