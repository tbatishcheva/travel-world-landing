import React, { Component } from 'react';
import funder from './funder.png';
import coFunder from './co_funder.png';
import graySquare from './gray_square.png';
import styles from './History.module.css';

class History extends Component {
  render() {
    return (
      <div className={styles.history}>
        <div className={styles.title}>
          The <span className={styles.textHistory}> History</span>
        <div />
          <div className={styles.subtitle}>
         Across the creative success
          </div>
          <div className={styles.mainText}>
            The story began when two friends decided to create a business
            that would allow them to travel and work at
            the same time in a remote way and knowing many destinations.
            I was born after a while, people started to travel.
          </div>
          <div className={styles.info}>
            <div className={styles.infoWithPfoto}>
              <img className={styles.img} src={funder} alt="funder" />
              <div className={styles.infoWithText}>Jack Ryan | Funder</div>
            </div>
            <div className={styles.infoWithPfoto}>
              <img className={styles.img} src={graySquare} alt="graySquare" />
            </div>
            <div className={styles.infoWithPfoto}>
              <img className={styles.img} src={coFunder} alt="coFunder" />
              <div className={styles.infoWithText}>Preston B | Co-Funder</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
