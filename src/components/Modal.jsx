import React, { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import styles from '../css_modules/Modal.module.css';
import { StaysGlobalContext } from '../context/StaysProvider.jsx';
import { filterStaysByCity } from '../services/staysService.js';
import staysJson from '../data/stays.json';

export default function Modal({ isOpen, resetStateInputSearch }) {

  const [open, setOpen] = useState(true);
  const [cities, setCities] = useState([]);
  const [inputLocation, setInputLocation] = useState("");
  const [adultGuestCounter, setAdultGuestCounter] = useState(0);
  const [childrenGuestCounter, setChildrenGuestCounter] = useState(0);


  const { staysGlobal, setStaysGlobal } = useContext(StaysGlobalContext);

  const handlingInputLocation = (city) => {
    setInputLocation(city)
  }

  const increaseAdultGuestCounter = () => {
    setAdultGuestCounter(adultGuestCounter + 1);
  }

  const decreaseAdultGuestCounter = () => {
    setAdultGuestCounter(adultGuestCounter - 1);
  }

  const increaseChildrenGuestCounter = () => {
    setChildrenGuestCounter(childrenGuestCounter + 1);
  }

  const decreaseChildrenGuestCounter = () => {
    setChildrenGuestCounter(childrenGuestCounter - 1);
  }

  const getCities = () => {
    // I use SET because it's not repeat and I can filter the cities.
    const set = new Set();
    staysJson.map((stay) => {
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
    setStaysGlobal(filterStaysByCity(inputLocation));
    resetStateInputSearch(false);
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


  function handlingSumGuests() {
    if (adultGuestCounter >= 0 && childrenGuestCounter >= 0) {
      return adultGuestCounter + childrenGuestCounter;
    }
  }

  return ReactDOM.createPortal(
    <>
      <div className={styles.containerFormModal}>
        <form action="" className={styles.formSearchModal} onSubmit={(e) => handlingSubmitSearchForm(e)}>
          <div className={styles.containerInputLocationModal}>
            <label className={styles.labelLocationModal} htmlFor="inputLocation">LOCATION</label>
            <input className={styles.inputLocationModal} type="text" placeholder='Add Location' name='inputLocation' id='inputLocation' value={inputLocation ? inputLocation + ", Finland" : ""} onChange={(e) => e.preventDefault()} />
          </div>
          <div className={styles.containerInputGuestsModal}>
            <label className={styles.labelGuestsModal} htmlFor="inputGuests">GUESTS</label>
            <input className={styles.inputGuestsModal} type="text" placeholder='Add guests' id='inputGuests' name='inputGuests' value={handlingSumGuests() ? handlingSumGuests() : ""}
              onChange={(e) => e.preventDefault()}
            />
          </div>
          <div className={styles.containerSearchButtonModal}>
            <div className={styles.containerSearchButtonFormModal}>

              <button className={styles.buttonSubmitFormModal}>
                <span style={{ color: "#F2F2F2" }} className="material-icons-round">
                  search
                </span>
                <a href={"/stays/" + inputLocation} style={{ textDecoration: "none" }}>
                  <p className={styles.textButtonSubmitSearchModal}>
                    Search
                  </p>
                </a>
              </button>
            </div>
          </div>
        </form>

        <div className={styles.containerLocationsModal}>

          <div className={styles.containerOptionsLocationModal}>

            {
              cities.map((city) => {
                return <div key={city} className={styles.containerOptionLocationModal} onClick={() => handlingInputLocation(city)}>
                  <span style={{ paddingLeft: "27px", color: "#4F4F4F" }} className="material-icons-sharp">
                    location_on
                  </span>
                  <p className={styles.optionTextLocation}>{city}, Finland</p>
                </div>
              })
            }
          </div>
        </div>

        <div className={styles.containerGuestsModal}>

          <div className={styles.containerCounterGuestsModal}>
            <div className={styles.containerCounterAdultsModal}>
              <p className={styles.textTypeGuestModal}>Adults</p>
              <p className={styles.textIntervalYearsOld}>Ages 13 or above</p>
              <div className={styles.containerCounterSelectionGuestsModal}>
                <button className={styles.buttonSelectionCounterGuestsModal} onClick={() => decreaseAdultGuestCounter()}>-</button>
                <p className={styles.textCounterModal}>{adultGuestCounter}</p>
                <button className={styles.buttonSelectionCounterGuestsModal} onClick={() => increaseAdultGuestCounter()}>+</button>
              </div>
            </div>
            <div className={styles.containerCounterChildrenModal}>
              <p className={styles.textTypeGuestModal}>Children</p>
              <p className={styles.textIntervalYearsOld}>Ages 2-12</p>
              <div className={styles.containerCounterSelectionGuestsModal}>
                <button className={styles.buttonSelectionCounterGuestsModal} onClick={() => decreaseChildrenGuestCounter()}>-</button>
                <p className={styles.textCounterModal}>{childrenGuestCounter}</p>
                <button className={styles.buttonSelectionCounterGuestsModal} onClick={() => increaseChildrenGuestCounter()}>+</button>
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