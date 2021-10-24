import React from 'react'
import {Link} from "react-router-dom"
import styles from "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function Nav() {
    return (
        // <nav class="navbar navbar-light bg-light">
        // <a class="navbar-brand" href="#">Navbar</a>
        // <div class="collapse navbar-collapse">
        //  <div class="navbar-nav">

        //      <ul>
        //     <li>
        //         <Link to="/">Home</Link>
        //         </li>
        //      <li>
        //         <Link to="/About">About</Link>
        //         </li>
        //      <li>
        //         <Link to="/AboutMe">AboutMe</Link>
        //         </li>
        // </ul>
        //  </div>
        // </div>
        // </nav>
        <nav class="navbar navbar-expand-sm navbar-dark bg-light" style={{padding:"20px 10%", marginBottom:"2%"}}>
        <a href="#" class="navbar-dark" style={{textDecoration:"none"}}>Logo</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <div class="mx-auto"></div>
            <ul class="navbar-nav">
            <li class="nav-item">
                <Link to="/" style={{textDecoration:"none",padding:"0 20px"}}>Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/About"  style={{textDecoration:"none",padding:"0 20px"}}>AboutPage</Link>
            </li>
            <li class="nav-item">
                <Link to="/AboutMe" style={{textDecoration:"none",padding:"0 20px"}}>AboutMe</Link>
            </li>
            </ul>
        </div>
    </nav>

        
        
    )
}

export default Nav
