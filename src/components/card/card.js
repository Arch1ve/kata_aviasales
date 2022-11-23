import { add } from 'date-fns'
import React from 'react'

import styles from './card.module.scss'

const datePrettier = (date) => {
  return date.getHours() + ':' + date.getMinutes()
}

const dateWithDuration = (date, duration) => {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  const added = add(date, {
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours,
    minutes,
    seconds: 0,
  })
  return datePrettier(added)
}

const displayEnd = (arr) => {
  return arr.length > 0 ? (arr.length > 1 ? 'ки' : 'ка') : 'ок'
}

const Card = (props) => {
  const { price, carrier, segments } = props.data

  const firstDate = new Date(segments[0].date)
  const firstDateHoursDuration = Math.floor(segments[0].duration / 60)
  const firstDateMinutesDuration = segments[0].duration % 60
  const firstStops = segments[0].stops

  const secondDate = new Date(segments[1].date)
  const secondDateHoursDuration = Math.floor(segments[1].duration / 60)
  const secondDateMinutesDuration = segments[1].duration % 60
  const secondStops = segments[1].stops

  return (
    <li className={styles.card}>
      <header className={styles.header}>
        <h2 className={styles.title}>{price} Р</h2>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`}></img>
      </header>
      <div className={styles.info}>
        <div className={styles['info-item']}>
          <h3 className={styles.subtitle}>
            {segments[0].origin} – {segments[0].destination}
          </h3>
          <span className={styles.text}>
            {datePrettier(firstDate)} – {dateWithDuration(firstDate, segments[0].duration)}
          </span>
        </div>
        <div className={styles['info-item']}>
          <h3 className={styles.subtitle}>В пути</h3>
          <span className={styles.text}>
            {firstDateHoursDuration}ч {firstDateMinutesDuration}м
          </span>
        </div>
        <div className={styles['info-item']}>
          <h3 className={styles.subtitle}>
            {firstStops.length} Пересад{displayEnd(firstStops)}
          </h3>
          <span className={styles.text}>{firstStops.join(', ')}</span>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles['info-item']}>
          <h3 className={styles.subtitle}>
            {segments[1].origin} – {segments[1].destination}
          </h3>
          <span className={styles.text}>
            {datePrettier(secondDate)} – {dateWithDuration(secondDate, segments[1].duration)}
          </span>
        </div>
        <div className={styles['info-item']}>
          <h3 className={styles.subtitle}>В пути</h3>
          <span className={styles.text}>
            {secondDateHoursDuration}ч {secondDateMinutesDuration}м
          </span>
        </div>
        <div className={styles['info-item']}>
          <h3 className={styles.subtitle}>
            {secondStops.length} Пересад{displayEnd(secondStops)}
          </h3>
          <span className={styles.text}>{secondStops.join(', ')}</span>
        </div>
      </div>
    </li>
  )
}

export default Card
