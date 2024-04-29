import styles from './Car.module.css';

import React from 'react'

const Car = ({car}) => {
  return (
    <div className={styles.card}>
        <h1>{car.name}</h1>
        <p>KM: {car.km}</p>
        <p>Cor: {car.cor}</p>
    </div>
  )
}

export default Car