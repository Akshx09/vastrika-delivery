

import './App.css';
import { ToastContainer } from 'react-toastify';
import Login from './Component/LoginDelveryBoy';
import Order from './Component/Order';
import Nav from './Component/Nav'
import 'react-toastify/dist/ReactToastify.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import RemainOrder from './Component/RemainOrder';
import { useState } from 'react';
function App() {
  const [acceptedOrder, setAcceptedOrder] = useState([]);
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<><Login/></>}/>
        <Route path="/order" element={<><Nav/><Order acceptedOrder = {acceptedOrder}/></>}/>
        <Route path="/remainOrder" element={<><Nav/><RemainOrder setAcceptedOrder = {setAcceptedOrder}/></>}/>
      </Routes>
      <ToastContainer />
    </div>
    </Router>
  );
}

export default App;

