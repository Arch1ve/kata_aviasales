import React, { useEffect } from 'react'

import Filters from '../filters'
import Tabs from '../tabs/tabs'
import CardList from '../card-list'

import '../../scss/style.scss'
import styles from './app.module.scss'
import logo from './img/Logo.svg'

const App = () => {
  useEffect(() => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((res) => res.json())
      .then(({ searchId }) => sessionStorage.setItem('searchId', searchId))
  }, [])
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
          <CardList />
          <button className={styles['more-button']}>Показать еще 5 билетов!</button>
        </main>
      </div>
    </React.Fragment>
  )
}

export default App
