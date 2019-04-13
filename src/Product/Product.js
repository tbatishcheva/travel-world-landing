import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.css';

class Product extends Component {
  static propTypes = {
    product: PropTypes.shape({
      price: PropTypes.number,
      hotels: PropTypes.array,
      image: PropTypes.any,
    }),
  }

  static defaultProps = {
    product: null,
  }

  render() {
    return (
      <div className={styles.product}>
        <div className={styles.top}>
          <div className={styles.price}>
              Salary   +
            {this.props.product.price}
          </div>
          <div className={styles.description}>
            {this.props.product.hotels.map(hotel => (<div className={styles.description}>{hotel}</div>))
          }
          </div>
        </div>
        <div className={styles.bottom}>
          <img className={styles.image} src={this.props.product.image} alt="product_image" />
          <div className={styles.button}>
            BOOK NOW
          </div>
        </div>

      </div>
    );
  }
}

export default Product;
