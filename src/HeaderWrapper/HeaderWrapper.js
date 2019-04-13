import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderWrapper.module.css';
import Header from '../Header/Header';

class HeaderWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    return (
      <div className={styles.headerWrapper}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

HeaderWrapper.propTypes = {};

export default HeaderWrapper;
