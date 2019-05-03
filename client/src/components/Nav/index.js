import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from './Navbar';

const Nav = ({ location }) => (
  <Navbar>
    <Link to="/">
      <strong>GB Search</strong>
    </Link>
    <Link className={location.pathname === '/' ? 'active' : null} to="/">
      Search
    </Link>
    <Link
      className={location.pathname === '/saved' ? 'active' : null}
      to="/saved"
    >
      Saved
    </Link>
  </Navbar>
);

export default withRouter(Nav);
