import React from 'react';
import styles from '../css_modules/InputSearch.module.css';
export default function InputSearch() {
  return (
    <>
      <form className={styles.formSearch}>
        <div className={styles.containerCountrySearch}>
          Helsinki, Finland
        </div>
        <div className={styles.containerGuestSearch}>
          Add guest
        </div>
        <div className={styles.containerIconSearch}>
          <span style={{ color: "#EB5757" }} class="material-icons-round">
            search
          </span>
        </div>
      </form>
    </>
  )
}