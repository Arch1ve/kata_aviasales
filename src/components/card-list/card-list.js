import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'

import Card from '../card'
import Loader from '../loader'
import { fetchTickets, sortByTab } from '../../actions/tickets-actions'

import styles from './card-list.module.scss'

const CardList = () => {
  const dispatch = useDispatch()
  const { loading, tickets, errorCount, showed, current } = useSelector((state) => state.tickets)
  const { filters, tabs } = useSelector((state) => state)
  useEffect(() => {
    if (loading) {
      dispatch(fetchTickets())
    }
  }, [tickets, errorCount])
  useEffect(() => {
    dispatch(sortByTab(tabs))
  }, [filters, tabs])
  const source = current.length > 0 ? current : tickets
  const items = source.slice(0, showed).map((el) => {
    return <Card key={v4()} data={el} />
  })

  return (
    <>
      {loading ? <Loader /> : null}
      <ul className={styles.list}>{items}</ul>
    </>
  )
}

export default CardList
