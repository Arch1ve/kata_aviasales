import React from 'react'

import Filters from '../filters'
import Tabs from '../tabs/tabs'

import '../../scss/style.scss'
import styles from './app.module.scss'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Filters />
      <div className={styles.content}>
        <Tabs />
      </div>
    </div>
  )
}

export default App
