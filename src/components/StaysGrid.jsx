import React, { useContext, useEffect, useState } from 'react'
import styles from '../css_modules/StaysGrid.module.css';
import StayCard from './StayCard.jsx';
import { StaysGlobalContext } from '../context/StaysProvider.jsx';
import { useParams } from 'react-router-dom';
import { filterStaysByCity } from '../services/staysService.js';

export default function StaysGrid() {

  const { location } = useParams();

  const [stays, setStays] = useState([]);
  const [counterStays, setCounterStays] = useState(0);

  const staysContext = useContext(StaysGlobalContext);


  useEffect(() => {
    if (location) {
      setStays(filterStaysByCity(location))
      setCounterStays(stays.length);
    } else {
      setStays(staysContext.staysGlobal)
      setCounterStays(stays.length);
      console.log(location ? location : "Hola")
    }
  }, [])

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
