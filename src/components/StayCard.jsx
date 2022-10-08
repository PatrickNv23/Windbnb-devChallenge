import React from 'react'
import styles from '../css_modules/StayCard.module.css';
export default function StayCard({ photo, superHost, type, beds, rating, title }) {

  function isSuperHost() {
    if (superHost) {
      return <p className={styles.superHost}>
        SUPER HOST
      </p>
    }
  }

  function isSuperHostAndBeds() {
    if (superHost && beds !== null) {
      return `. ${beds} beds`;
    }
  }

  return (
    <figure className={styles.containerCard}>
      <img src={photo} alt={title} className={styles.imageStay} />
      <figcaption className={styles.containerDetailsStay}>
        <div className={styles.detailsStay}>
          <div className={styles.detailSuperHostAndBeds}>
            {
              isSuperHost()
            }
            <span className={styles.typeStaysAndTotalBeds}>{type} {isSuperHostAndBeds()}</span>
          </div>
          <div className={styles.ratingStay}>{rating}</div>
        </div>
        <p className={styles.titleStay}>{title}</p>
      </figcaption>
    </figure>
  )
}
