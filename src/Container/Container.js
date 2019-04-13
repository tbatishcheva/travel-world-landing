import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import styles from './Container.module.css';

class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

Container.propTypes = {};

export default Container;
