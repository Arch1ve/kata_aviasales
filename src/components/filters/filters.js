import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setTransfers } from '../../store/tickets'

import styles from './filters.module.scss'

function checkAll(obj) {
  const filteredEntries = Object.entries(obj).filter((el) => el[0] != 'all')
  for (let i of filteredEntries) {
    if (i[1] == false) return { ...obj, all: false }
  }
  return { ...obj, all: true }
}

const Filters = () => {
  const dispatch = useDispatch()
  const [filters, setFilters] = useState({ all: true, 0: true, 1: true, 2: true, 3: true })
  useEffect(() => {
    dispatch(setTransfers(filters))
  }, [filters])
  return (
    <aside className={styles.filters}>
      <h2 className={styles.title}>Количество пересадок</h2>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.input}
          id="filter-all"
          onChange={() =>
            setFilters((filters) => {
              if (filters.all) {
                return { all: false, 0: false, 1: false, 2: false, 3: false }
              }
              return { all: true, 0: true, 1: true, 2: true, 3: true }
            })
          }
          checked={filters.all}
        />
        <span htmlFor="filter-all" className={styles.span}>
          Все
        </span>
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.input}
          id="filter-no-transfer"
          onChange={() => setFilters((filters) => checkAll({ ...filters, 0: !filters['0'] }))}
          checked={filters['0']}
        />
        <span htmlFor="filter-no-transfer" className={styles.span}>
          Без пересадок
        </span>
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.input}
          id="filter-one-transfer"
          onChange={() => setFilters((filters) => checkAll({ ...filters, 1: !filters['1'] }))}
          checked={filters['1']}
        />
        <span htmlFor="filter-one-transfer" className={styles.span}>
          1 пересадка
        </span>
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.input}
          id="filter-two-transfers"
          onChange={() => setFilters((filters) => checkAll({ ...filters, 2: !filters['2'] }))}
          checked={filters['2']}
        />
        <span htmlFor="filter-two-transfers" className={styles.span}>
          2 пересадки
        </span>
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.input}
          id="filter-three-transfers"
          onChange={() => setFilters((filters) => checkAll({ ...filters, 3: !filters['3'] }))}
          checked={filters['3']}
        />
        <span htmlFor="filter-three-transfers" className={styles.span}>
          3 пересадки
        </span>
      </label>
    </aside>
  )
}

export default React.memo(Filters)
