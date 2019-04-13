import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

class Menu extends Component {

  render() {
    return (
          <ul className={styles.navigation}>
            <li>
              <NavLink exact activeClassName={styles.active} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName={styles.active} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName={styles.active} to="/destinations">Destinations</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName={styles.active} to="/pricing">Pricing</NavLink>
            </li>
          </ul>
    );
  }
}

export default Menu;
