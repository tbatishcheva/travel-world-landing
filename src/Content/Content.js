import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import next from '../Home/next.svg';
import styles from './Content.module.css';

class Content extends Component {
  render() {
    return (
      <div className={styles.content}>
        <div className={styles.title}>
          <span>Travel </span>
          Around the World
        </div>
        <div className={styles.mainText}>If you are creative person, this is your life!</div>
        <form className={styles.form}>
          <label>
            <input type="text" name="salary" placeholder="Your Salary Rate $" />
          </label>
          <input type="submit" value="Send" />
        </form>
        <div className={styles.contacts}>
          Meet All inclusive and exotic Hotels
          <br />
          155 Countries
          <br />
          1 feed - a new destination every month.
        </div>
        <div className={styles.button}>
          <Link to="/destinations"><div className={styles.destines}>Explore All Destinies</div></Link>
          <Link to="/destinations"><div className={styles.image}><img alt="next" src={next} /></div></Link>
        </div>
      </div>
    );
  }
}

export default Content;
