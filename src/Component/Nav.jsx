import React, { useEffect, useState } from 'react'
import './Nav.css'
import { Link, useNavigate } from 'react-router-dom';
export default function Navbar() {
    const navigate = useNavigate();
    return (
        <nav>
            <Link to="/" className="nav-left-wrapper">
                <img id="nav-logo" src={require("./logo.webp")} alt="logo" />
                <h1 className="title-bigletter">V</h1>
                <div style={{padding:"0"}}>
                    <h1 className="title">astrika</h1>
                    <h2 className="punchline">Threads of Tradition</h2>
                </div>
            </Link>
            <div className="search-bar">
                <img src={require("./searchIcon.png")} alt="si"/>
                <p>I</p>
                <input placeholder="Search for an item or more..." id="search-inp" name="search-inp"/>
            </div>
            
            <button className='remain' onClick={()=>{
                navigate('/remainOrder')
            }}>Remain Order</button>
            <button className='current' onClick={()=>{
                navigate('/order')
            }}>Current Deliver</button>
           
        </nav>
    )
}
