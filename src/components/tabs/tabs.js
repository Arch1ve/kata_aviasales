import React from 'react'
import classNames from 'classnames'

import styles from './tabs.module.scss'

const Tabs = () => {
  return (
    <nav className={styles.tabs}>
      <ul className={styles.list}>
        <li className={classNames(styles['list-item'], styles.selected)}>
          <button className={styles.button}>Самый дешевый</button>
        </li>
        <li className={styles['list-item']}>
          <button className={styles.button}>Самый быстрый</button>
        </li>
        <li className={styles['list-item']}>
          <button className={styles.button}>Оптимальный</button>
        </li>
      </ul>
    </nav>
  )
}

export default Tabs
