import React from 'react'

import Card from '../card'

import styles from './card-list.module.scss'

const CardList = () => {
  const items = [1, 2, 3, 4, 5].map((el) => {
    return <Card key={el} />
  })
  return <ul className={styles.list}>{items}</ul>
}

export default CardList
