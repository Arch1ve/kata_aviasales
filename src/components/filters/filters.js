import React from 'react'

import styles from './filters.module.scss'

const Filters = () => {
  return (
    <aside className={styles.filters}>
      <h2 className={styles.title}>Количество пересадок</h2>
      <label className={styles.label}>
        <input type="checkbox" className={styles.input} id="filter-all" />
        <span htmlFor="filter-all" className={styles.span}>
          Все
        </span>
      </label>
      <label className={styles.label}>
        <input type="checkbox" className={styles.input} id="filter-no-transfer" />
        <span htmlFor="filter-no-transfer" className={styles.span}>
          Без пересадок
        </span>
      </label>
      <label className={styles.label}>
        <input type="checkbox" className={styles.input} id="filter-one-transfer" />
        <span htmlFor="filter-one-transfer" className={styles.span}>
          1 пересадка
        </span>
      </label>
      <label className={styles.label}>
        <input type="checkbox" className={styles.input} id="filter-two-transfers" />
        <span htmlFor="filter-two-transfers" className={styles.span}>
          2 пересадки
        </span>
      </label>
      <label className={styles.label}>
        <input type="checkbox" className={styles.input} id="filter-three-transfers" />
        <span htmlFor="filter-three-transfers" className={styles.span}>
          3 пересадки
        </span>
      </label>
    </aside>
  )
}

export default Filters
