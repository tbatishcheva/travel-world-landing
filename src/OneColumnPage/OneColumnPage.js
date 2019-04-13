import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './OneColumnPage.module.css';

class OneColumnPage extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    return (
      <div className={styles.oneColumnPage}>
        {this.props.children}
      </div>
    );
  }
}

export default OneColumnPage;
