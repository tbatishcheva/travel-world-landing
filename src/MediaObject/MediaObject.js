import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MediaObject.module.css';

class MediaObject extends Component {
  static propTypes = {
    alt: PropTypes.string,
    src: PropTypes.any,
    children: PropTypes.node,
  };

  static defaultProps = {
    alt: '',
    src: null,
    children: null,
  };

  render() {
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          alt={this.props.alt}
          src={this.props.src}
        />
        {this.props.children}
      </div>
    );
  }
}

export default MediaObject;
