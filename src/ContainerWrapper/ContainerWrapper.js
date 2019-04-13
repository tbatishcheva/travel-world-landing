import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ContainerWrapper.module.css';

class ContainerWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null
  }

  render() {
    return (
      <div className={styles.containerWrapper}>
        {this.props.children}
      </div>
    );
  }
}

ContainerWrapper.propTypes = {};

export default ContainerWrapper;