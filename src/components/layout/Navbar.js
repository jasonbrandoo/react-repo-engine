import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <React.Fragment>
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">RepoSearch</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </React.Fragment>
);

export default Navbar;
