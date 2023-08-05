import React from 'react';
import logo from './Logo .svg'


function Heading () {
    
    return (
    <header>
    <img src= {logo} alt="company logo"/>
    <nav class="navbar">
    <ul class="nav_list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Sign up</a></li>
    </ul>
    </nav>
    </header>
    )
}

export default Heading;
