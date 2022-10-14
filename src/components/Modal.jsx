import React, { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import styles from '../css_modules/Modal.module.css';
import { StaysGlobalContext } from '../App';
export default function Modal({ isOpen, resetStateInputSearch }) {

  const [open, setOpen] = useState(true);
  const [cities, setCities] = useState([]);

  const stays = useContext(StaysGlobalContext);

  const getCities = () => {
    // I use SET because it's not repeat and I can filter the cities.
    const set = new Set();
    stays.map((stay) => {
      set.add(stay.city);
    })
    // Convert SET to ARRAY
    return [...set.keys()]
  }

  useEffect(() => {
    setOpen(isOpen)
    closeModal()
    setCities(getCities());
  }, []);

  function handlingSubmitSearchForm(e) {
    e.preventDefault();
    setOpen(false);
  }

  if (!open) {
    return;
  }

  function closeModal() {
    const containerModal = document.getElementById("containerModal");
    containerModal.addEventListener("click", () => {
      resetStateInputSearch(false);
      setOpen(false);
    })

  }

  return ReactDOM.createPortal(
    <>
      <div className={styles.containerFormModal}>
        <form action="" className={styles.formSearchModal} onSubmit={(e) => handlingSubmitSearchForm(e)}>
          <div className={styles.containerInputLocationModal}>
            <label className={styles.labelLocationModal} htmlFor="inputLocation">LOCATION</label>
            <input className={styles.inputLocationModal} type="text" placeholder='Add Location' name='inputLocation' id='inputLocation' />
          </div>
          <div className={styles.containerInputGuestsModal}>
            <label className={styles.labelGuestsModal} htmlFor="inputGuests">GUESTS</label>
            <input className={styles.inputGuestsModal} type="text" placeholder='Add guests' id='inputGuests' name='inputGuests' />
          </div>
          <div className={styles.containerSearchButtonModal}>
            <div className={styles.containerSearchButtonFormModal}>
              <button className={styles.buttonSubmitFormModal}>
                <span style={{ color: "white" }} className="material-icons-round">
                  search
                </span>
                <p className={styles.textButtonSubmitSearchModal}>Search</p>
              </button>
            </div>
          </div>
        </form>

        <div className={styles.containerLocationsModal}>

          <div className={styles.containerOptionsLocationModal}>

            {
              cities.map((city) => {
                return <div className={styles.containerOptionLocationModal}>
                  <span style={{ paddingLeft: "27px", color: "#4F4F4F" }} class="material-icons-sharp">
                    location_on
                  </span>
                  <p className={styles.optionTextLocation}>{city}, Finland</p>
                </div>
              })
            }

            {/* <div className={styles.containerOptionLocationModal}>
              <span style={{ paddingLeft: "27px", color: "#4F4F4F" }} class="material-icons-sharp">
                location_on
              </span>
              <p className={styles.optionTextLocation}>Helsinki, Finland</p>
            </div>

            <div className={styles.containerOptionLocationModal}>
              <span style={{ paddingLeft: "27px", color: "#4F4F4F" }} class="material-icons-sharp">
                location_on
              </span>
              <p className={styles.optionTextLocation}>Turku, Finland</p>
            </div>

            <div className={styles.containerOptionLocationModal}>
              <span style={{ paddingLeft: "27px", color: "#4F4F4F" }} class="material-icons-sharp">
                location_on
              </span>
              <p className={styles.optionTextLocation}>Oulu, Finland</p>
            </div>

            <div className={styles.containerOptionLocationModal}>
              <span style={{ paddingLeft: "27px", color: "#4F4F4F" }} class="material-icons-sharp">
                location_on
              </span>
              <p className={styles.optionTextLocation}>Vaasa, Finland</p>
            </div> */}
          </div>
        </div>

        <div className={styles.containerGuestsModal}>

          <div className={styles.containerCounterGuestsModal}>
            <div className={styles.containerCounterAdultsModal}>
              <p className={styles.textTypeGuestModal}>Adults</p>
              <p className={styles.textIntervalYearsOld}>Ages 13 or above</p>
              <div className={styles.containerCounterSelectionGuestsModal}>
                <button className={styles.buttonSelectionCounterGuestsModal}>-</button>
                <p className={styles.textCounterModal}>0</p>
                <button className={styles.buttonSelectionCounterGuestsModal}>+</button>
              </div>
            </div>
            <div className={styles.containerCounterChildrenModal}>
              <p className={styles.textTypeGuestModal}>Children</p>
              <p className={styles.textIntervalYearsOld}>Ages 2-12</p>
              <div className={styles.containerCounterSelectionGuestsModal}>
                <button className={styles.buttonSelectionCounterGuestsModal}>-</button>
                <p className={styles.textCounterModal}>0</p>
                <button className={styles.buttonSelectionCounterGuestsModal}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div id="containerModal" className={styles.containerModalBottom}>
      </div>
    </>
    ,
    document.body
  )
}