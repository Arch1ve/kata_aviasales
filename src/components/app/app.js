import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'

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

  const { errorCount, tickets, loading } = useSelector((state) => state.tickets)
  const list =
    errorCount < 20 ? (
      <React.Fragment>
        <CardList />
      </React.Fragment>
    ) : (
      <div className={classNames(styles['warning'], styles['warning--network'])}>
        Во время запроса произошла ошибка!
      </div>
    )
  const moreButton =
    errorCount < 20 && tickets.length > 0 ? (
      <button className={styles['more-button']}>Показать еще 5 билетов!</button>
    ) : null
  const notFound =
    errorCount < 20 && tickets.length > 0 && !loading ? (
      <div className={classNames(styles['warning'], styles['warning--not-found'])}>
        Рейсов, подходящих под заданные фильтры, не найдено
      </div>
    ) : null

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
          {list}
          {moreButton}
          {notFound}
        </main>
      </div>
    </React.Fragment>
  )
}

export default App
