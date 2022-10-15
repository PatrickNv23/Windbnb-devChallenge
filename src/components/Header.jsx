import React from 'react';
import styles from '../css_modules/Header.module.css';
import logoWindbnb from '../assets/logo.svg';
import InputSearch from './InputSearch.jsx';
export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <img className={styles.imageLogo} src={logoWindbnb} alt="Windbnb" />
      </a>
      <InputSearch />
    </header>
  )
}