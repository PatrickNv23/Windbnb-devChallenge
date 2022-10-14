import './App.css';
import Header from './components/Header.jsx';
import StaysGrid from './components/StaysGrid.jsx';
import Footer from './components/Footer.jsx';
import { createContext } from 'react';
import staysJson from './data/stays.json';

export const StaysGlobalContext = createContext();


function App() {
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
