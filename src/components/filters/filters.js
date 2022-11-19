import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions/filters-actions'

import styles from './filters.module.scss'

const Filters = ({ all, noTransfer, oneTransfer, twoTransfers, threeTransfers, filters }) => {
  return (
    <aside className={styles.filters}>
      <h2 className={styles.title}>Количество пересадок</h2>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.input}
          id="filter-all"
          onChange={() => all(!filters.all)}
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
          onChange={() => noTransfer(!filters.noTransfer)}
          checked={filters.noTransfer}
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
          onChange={() => oneTransfer(!filters.one)}
          checked={filters.one}
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
          onChange={() => twoTransfers(!filters.two)}
          checked={filters.two}
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
          onChange={() => threeTransfers(!filters.three)}
          checked={filters.three}
        />
        <span htmlFor="filter-three-transfers" className={styles.span}>
          3 пересадки
        </span>
      </label>
    </aside>
  )
}

const mapStateToProps = ({ filters }) => {
  return { filters: filters }
}

export default connect(mapStateToProps, actions)(Filters)
