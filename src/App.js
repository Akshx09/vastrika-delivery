
import './App.css';
import { ToastContainer } from 'react-toastify';
import Login from './Component/LoginDelveryBoy';
import Order from './Component/Order';
import Nav from './Component/Nav'
import 'react-toastify/dist/ReactToastify.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<><Login/></>}/>
        <Route path="/order" element={<><Nav/><Order/></>}/>
      </Routes>
      <ToastContainer />
    </div>
    </Router>
  );
}

export default App;
