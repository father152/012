import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from './img/Women.png'

function Header() {
  return (
    <div className="header">
      <div className="logo">
      <Link to='/'><img src={logo} alt=""></img></Link>
      </div>
      <div className="container">
      <ul className='title'>
        <li><Link to="/about">ABOUT AS</Link></li>
        <li><Link to="/building">BUILDING</Link></li>
        <li><Link to="/projects">PROJECTS</Link></li>
        <li><Link to="/portfolio">PORTFOLIO</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>
    </div>
  );
}
export { Header };
