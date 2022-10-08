import React from 'react'
import styles from '../css_modules/Footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        created by <span className={styles.footerUsername}>PatrickNv23</span> - devChallenges.io
      </p>

    </footer>
  )
}
