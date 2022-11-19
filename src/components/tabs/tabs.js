import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import * as actions from '../../actions/tabs-actions'

import styles from './tabs.module.scss'

const Tabs = ({ cheap, fast, optimal, selected = 'cheap' }) => {
  return (
    <nav className={styles.tabs}>
      <ul className={styles.list}>
        <li className={classNames(styles['list-item'], { [styles.selected]: selected == 'cheap' })}>
          <button className={styles.button} onClick={cheap}>
            Самый дешевый
          </button>
        </li>
        <li className={classNames(styles['list-item'], { [styles.selected]: selected == 'fast' })}>
          <button className={styles.button} onClick={fast}>
            Самый быстрый
          </button>
        </li>
        <li className={classNames(styles['list-item'], { [styles.selected]: selected == 'optimal' })}>
          <button className={styles.button} onClick={optimal}>
            Оптимальный
          </button>
        </li>
      </ul>
    </nav>
  )
}

const mapStateToProps = ({ tabs }) => {
  return {
    selected: tabs,
  }
}

export default connect(mapStateToProps, actions)(Tabs)
