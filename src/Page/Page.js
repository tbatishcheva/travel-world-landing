import React, {Component} from 'react';
import styles from './Page.module.css';
import PropTypes from 'prop-types';

class Page extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null
  }
  render() {
    return (
      <div className={styles.page}>
        {this.props.children}
      </div>
    );
  }
}

export default Page;