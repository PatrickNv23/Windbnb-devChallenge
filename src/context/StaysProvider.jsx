import React, { createContext, useState } from 'react'
import staysJson from '../data/stays.json';


export const StaysGlobalContext = createContext();

export default function StaysProvider({ children }) {

  const [staysGlobal, setStaysGlobal] = useState(staysJson);

  const value = { staysGlobal, setStaysGlobal }


  return (
    <StaysGlobalContext.Provider value={value}>
      {children}
    </StaysGlobalContext.Provider>
  )
}
