import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Nav = () => (
  <Navbar>
    <Link to="/">BRAND</Link>
    <Link to="/">Search</Link>
    <Link to="/saved">Saved</Link>
  </Navbar>
);

export default Nav;
