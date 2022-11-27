import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import Filters from '../filters'
import Tabs from '../tabs/tabs'
import CardList from '../card-list'
import '../../scss/style.scss'
import { showMore } from '../../store/tickets'

import styles from './app.module.scss'
import logo from './img/Logo.svg'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((res) => res.json())
      .then(({ searchId }) => sessionStorage.setItem('searchId', searchId))
  }, [])

  const { errorCount, tickets, transfers } = useSelector((state) => state.tickets)
  const list =
    errorCount < 15 ? (
      <React.Fragment>
        <CardList />
      </React.Fragment>
    ) : (
      <div className={classNames(styles['warning'], styles['warning--network'])}>
        Во время запроса произошла ошибка!
      </div>
    )
  const notFound = !Object.values(transfers).includes(true) ? (
    <div className={classNames(styles['warning'], styles['warning--not-found'])}>
      Рейсов, подходящих под заданные фильтры, не найдено
    </div>
  ) : null
  const moreButton =
    errorCount < 15 && tickets.length > 0 && notFound == null ? (
      <button className={styles['more-button']} onClick={() => dispatch(showMore())}>
        Показать еще 5 билетов!
      </button>
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
