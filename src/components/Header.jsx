import React from 'react';
import styles from '../css_modules/Header.module.css';
import logoWindbnb from '../assets/logo.svg';
export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.imageLogo} src={logoWindbnb} alt="Windbnb" />
    </header>
  )
}