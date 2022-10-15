import React, { useState } from 'react';
import styles from '../css_modules/InputSearch.module.css';
import Modal from './Modal.jsx';


export default function InputSearch() {
  const [modalHandler, setModalHandler] = useState(false);

  const handleClickSearchForm = () => {
    setModalHandler(!modalHandler);
  }

  const handlingModal = () => {
    if (modalHandler) {
      return <Modal isOpen={modalHandler} resetStateInputSearch={handlingResetStateInputSearch} />
    }
  }

  const handlingResetStateInputSearch = (newState) => {
    setModalHandler(newState);
  }


  return (
    <>
      <form className={styles.formSearch} onClick={() => handleClickSearchForm()} >
        <div className={styles.containerCountrySearch}>
          Add Location
        </div>
        <div className={styles.containerGuestSearch}>
          Add guest
        </div>
        <div className={styles.containerIconSearch}>
          <span style={{ color: "#EB5757" }} className="material-icons-round">
            search
          </span>
        </div>
      </form>

      {
        handlingModal()
      }
    </>
  )
}