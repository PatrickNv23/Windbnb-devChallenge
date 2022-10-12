import React from 'react';
import styles from '../css_modules/InputSearch.module.css';
import Modal from './Modal.jsx';
export default function InputSearch() {

  // const openModal = (e) => {
  //   e.preventDefault();
  //   console.log("XDDD")
  //   return <Modal />
  // }
  // onSubmit={(e) => openModal(e)}

  return (
    <>
      <form className={styles.formSearch} >
        <div className={styles.containerCountrySearch}>
          Helsinki, Finland
        </div>
        <div className={styles.containerGuestSearch}>
          Add guest
        </div>
        <button className={styles.containerIconSearch}>
          <span style={{ color: "#EB5757" }} className="material-icons-round">
            search
          </span>
        </button>
      </form>
      <Modal />
    </>
  )
}