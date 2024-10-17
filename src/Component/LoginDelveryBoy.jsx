import React, { useState } from 'react'
import './Login1.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function Login() {
    const navigate = useNavigate();
    const [creds, setcreds] = useState({
        customerEmail:'', password:''
    })
    const [togglepass, settogglepass] = useState(false);
    const handleTogglePassword = ()=> {
        settogglepass(!togglepass);
    }
    const handleFieldChange = (e, field) => {
        setcreds({...creds, [field]:e.target.value});
    }
    return (
        <div className='super-flex-container'>
            <div className="login-container">
                <h2 className="login-head">Login</h2>
                <div className="mail-container">
                    <p className="ip-head">Email ID</p>
                    <input placeholder="Email ID" required type="text" className='ip-input' 
                         onChange={(e)=>(handleFieldChange(e,"customerEmail"))} />
                </div>
                <div className="pw-container">
                    <p className="ip-head">Password</p>
                    <input placeholder="Password" required className="ip-input" type={togglepass?"text":"password"} 
                        onChange={(e)=>(handleFieldChange(e,"password"))} />
                </div>
                <div className="wrapper">
                    <p className="toggle-pass" onClick={handleTogglePassword}>
                        {togglepass?"Hide Password":"Show Password"}
                    </p>
                </div>
                <div className="wrapper">
                    <button className="login-btn" onClick={()=>{navigate('/order')}}>Login</button>
                </div>
            </div>
        </div>
    )
}
