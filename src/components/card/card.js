import React from 'react'

import styles from './card.module.scss'
import logo from './img/logo.png'

const Card = () => {
  return (
    <li className={styles.card}>
      <header className={styles.header}>
        <h2 className={styles.title}>13 400 Р</h2>
        <img src={logo}></img>
      </header>
      <div className={styles.info}>
        <div className={styles['info-item']}>
          <h3 className={styles.subtitle}>MOW – HKT</h3>
          <span className={styles.text}>10:45 – 08:00</span>
        </div>
        <div className={styles['info-item']}>
          <h3 className={styles.subtitle}>MOW – HKT</h3>
          <span className={styles.text}>10:45 – 08:00</span>
        </div>
        <div className={styles['info-item']}>
          <h3 className={styles.subtitle}>MOW – HKT</h3>
          <span className={styles.text}>10:45 – 08:00</span>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles['info-item']}>
          <h3 className={styles.subtitle}>MOW – HKT</h3>
          <span className={styles.text}>10:45 – 08:00</span>
        </div>
        <div className={styles['info-item']}>
          <h3 className={styles.subtitle}>MOW – HKT</h3>
          <span className={styles.text}>10:45 – 08:00</span>
        </div>
        <div className={styles['info-item']}>
          <h3 className={styles.subtitle}>MOW – HKT</h3>
          <span className={styles.text}>10:45 – 08:00</span>
        </div>
      </div>
    </li>
  )
}

export default Card
