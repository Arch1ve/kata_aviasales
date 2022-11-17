import React from 'react'

import Filters from '../filters'
import Tabs from '../tabs/tabs'

import '../../scss/style.scss'
import styles from './app.module.scss'
import logo from './img/Logo.svg'

const App = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          <img src={logo} />
        </a>
      </header>
      <div className={styles.wrapper}>
        <Filters />
        <main className={styles.main}>
          <Tabs />
        </main>
      </div>
    </React.Fragment>
  )
}

export default App
