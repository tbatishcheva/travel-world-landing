import React, {Component} from 'react';
import styles from './Logo.module.css';
import logo from './logo.svg';

class Logo extends Component {
  render() {
    return (
      <div>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
    );
  }
}

export default Logo;