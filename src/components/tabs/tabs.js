import React, { useState } from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'

import { sortByPrice, sortBySpeed, sortByOptimal } from '../../store/tickets'

import styles from './tabs.module.scss'

const Tabs = () => {
  const dispatch = useDispatch()
  const [selected, setSelected] = useState('')
  return (
    <nav className={styles.tabs}>
      <ul className={styles.list}>
        <li className={classNames(styles['list-item'], { [styles.selected]: selected == 'cheap' })}>
          <button
            className={styles.button}
            onClick={() => {
              setSelected('cheap')
              dispatch(sortByPrice())
            }}
          >
            Самый дешевый
          </button>
        </li>
        <li className={classNames(styles['list-item'], { [styles.selected]: selected == 'fast' })}>
          <button
            className={styles.button}
            onClick={() => {
              setSelected('fast')
              dispatch(sortBySpeed())
            }}
          >
            Самый быстрый
          </button>
        </li>
        <li className={classNames(styles['list-item'], { [styles.selected]: selected == 'optimal' })}>
          <button
            className={styles.button}
            onClick={() => {
              setSelected('optimal')
              dispatch(sortByOptimal())
            }}
          >
            Оптимальный
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default React.memo(Tabs)
