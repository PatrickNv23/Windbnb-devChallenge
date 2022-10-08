import React, { useEffect, useState } from 'react'
import styles from '../css_modules/StaysGrid.module.css';
import StayCard from './StayCard.jsx';
import staysJson from '../data/stays.json';


export default function StaysGrid() {

  const [stays, setStays] = useState([]);
  const [counterStays, setCounterStays] = useState(0);
  useEffect(() => {
    setStays(staysJson)
    setCounterStays(stays.length);
  }, [])

  useEffect(() => {
    setCounterStays(stays.length);
  }, [stays])

  return (
    <main className={styles.container_main}>
      <section className={styles.section_title}>
        <h2 className={styles.titleStays}>Stays</h2>
        <p className={styles.totalStays}>{counterStays}+ stays</p>

      </section>
      <section className={styles.container_grid}>
        {
          stays.map((stay) => {
            return <StayCard key={stay.id}
              photo={stay.photo}
              superHost={stay.superHost}
              type={stay.type}
              beds={stay.beds}
              rating={stay.rating}
              title={stay.title}
            />
          })
        }

      </section>
    </main>
  )
}
