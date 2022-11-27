import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'

import Card from '../card'
import Loader from '../loader'
import { fetchTickets } from '../../store/tickets'

import styles from './card-list.module.scss'

const transfersToArr = (obj) => {
  return obj.segments.reduce((acc, el) => {
    acc.push(el.stops.length)
    return acc
  }, [])
}

const ticketsFilterCallback = (filters) => {
  const displayAll = filters.all
  return (el) => {
    if (displayAll) return true
    const filtersArr = Object.entries(filters).reduce((acc, el) => {
      if (el[1]) acc.push(Number(el[0]))
      return acc
    }, [])
    const transArr = transfersToArr(el)
    if (filtersArr.includes(transArr[0]) && filtersArr.includes(transArr[1])) return true
    return false
  }
}

const CardList = () => {
  const dispatch = useDispatch()
  const { loading, tickets, errorCount, showed, transfers } = useSelector((state) => state.tickets)
  useEffect(() => {
    if (loading) {
      dispatch(fetchTickets())
    }
  }, [tickets, errorCount])
  const items = tickets
    .filter(ticketsFilterCallback(transfers))
    .slice(0, showed)
    .map((el) => {
      return <Card key={v4()} data={el} />
    })

  return (
    <>
      {loading ? <Loader /> : null}
      <ul className={styles.list}>{items}</ul>
    </>
  )
}

export default React.memo(CardList)
