import React from 'react';

import './Header.scss';
import logo from '../../assets/truckpad-logo.svg';

export default function Header() {
  return (
    <header id="main-header">
      <img src={logo} alt="Truckpad" />
    </header>
  );
}
