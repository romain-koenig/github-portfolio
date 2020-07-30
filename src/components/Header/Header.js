import React from 'react';
import './Header.css';
import Link from '../Link/Link';

import logo from '../../GitHub-Mark/PNG/GitHub-Mark-Light-64px.png';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      My GitHub Portfolio
  </p>
  </header >
);
export default Header;