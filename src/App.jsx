import './App.css';
import Header from './components/Header.jsx';
import StaysGrid from './components/StaysGrid.jsx';
import Footer from './components/Footer.jsx';
import { createContext, useEffect, useState } from 'react';
import staysJson from './data/stays.json';

// export const StaysGlobalContext = createContext({
//   staysGlobal: [],
//   setStaysGlobal: () => { }
// });

export const StaysGlobalContext = createContext();


function App() {

  // const [staysGlobal, setStaysGlobal] = useState(staysJson);
  // const value = { staysGlobal, setStaysGlobal };

  // useEffect(() => {
  //   console.log(staysGlobal)
  // }, [staysGlobal])

  return (
    <StaysGlobalContext.Provider value={staysJson}>
      <div className="container_app">
        <Header />
        <StaysGrid />
        <Footer />
      </div>
    </StaysGlobalContext.Provider>
  )
}

export default App
