import React, { Component } from 'react';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <Logo />
        <Menu />
      </div>
    );
  }
}

export default Header;
