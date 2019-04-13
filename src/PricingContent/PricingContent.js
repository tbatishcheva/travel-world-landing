import React, { Component } from 'react';
import Product from '../Product/Product';
import styles from './PricingContent.module.css';
import product1 from './product1.png';
import product2 from './product2.png';
import product3 from './product3.png';

class PricingContent extends Component {
  render() {
    return (
      <div className={styles.pricingContent}>
        <Product product={
          {
            price: 1000,
            hotels: ['Hotel King Lux - Europe', 'Hotel Barchelor - France'],
            image: product1,
          }
        }
        />
        <Product product={
          {
            price: 2500,
            hotels: ['Hotel King Lux - Europe', 'Hotel Barchelor - France', 'Hotel Altair -  Italy', 'Hotel Horsking - Germany'],
            image: product2,
          }
        }
        />
        <Product product={
          {
            price: 5000,
            hotels: ['12 Destinies Random across Europe'],
            image: product3,
          }
        }
        />
      </div>
    );
  }
}

export default PricingContent;
