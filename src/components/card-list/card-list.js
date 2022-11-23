import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'

import Card from '../card'
import Loader from '../loader'
import { fetchTickets } from '../../actions/tickets-actions'

import styles from './card-list.module.scss'

const CardList = () => {
  const dispatch = useDispatch()
  const { loading, tickets } = useSelector((state) => state.tickets)
  useEffect(() => {
    dispatch(fetchTickets())
  }, [])
  console.log(tickets)
  const items = tickets.slice(0, 5).map((el) => {
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
