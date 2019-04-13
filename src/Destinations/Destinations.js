import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Destinations.module.css';
import destinies1 from './destinies1.png';
import destinies2 from './destinies2.png';
import destinies3 from './destinies3.png';
import destinies4 from './destinies4.png';
import destinies5 from './destinies5.png';
import next from '../Home/next.svg';

class Destinations extends Component {
  render() {
    return (
      <div className={styles.destinations}>
        <div className={styles.button}>
          <Link to="/"><div className={styles.image}><img href alt="next" src={next} /></div></Link>
          <Link to="/"><div className={styles.back}>Back</div></Link>
        </div>
        <div className={styles.image1}><img className={styles.image1} src={destinies1} alt="destinies1" /></div>
        <div className={styles.image2}>
          <div className={styles.nuevo}>Nuevo</div>
          <img className={styles.image2} src={destinies2} alt="destinies1" />
        </div>
        <div className={styles.image3}><img className={styles.image3} src={destinies3} alt="destinies1" /></div>
        <div className={styles.image4}><img className={styles.image4} src={destinies4} alt="destinies1" /></div>
        <div className={styles.image5}><img className={styles.image5} src={destinies5} alt="destinies1" /></div>
      </div>
    );
  }
}

export default Destinations;
