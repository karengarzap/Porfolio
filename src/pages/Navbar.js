import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Navbar () {
    return (
      <nav className='nav'>
          <ul>
          <li>
          <Link to="/" className="navlink">Home</Link>
          </li>
          <li>
          <Link to="/aboutme" className="navlink">About</Link>
          </li>
          <li>
          <Link to="/resume" className="navlink">Resume</Link>
          </li>
          <li>
          <Link to="/projects" className="navlink">Projects</Link>
          </li>
        </ul>
      </nav>
    );
  }
  

  function CustomLink({to, children, ...props}) {
    const path =window.location.pathname

    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
  }