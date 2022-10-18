import './App.css';
import Header from './components/Header.jsx';
import StaysGrid from './components/StaysGrid.jsx';
import Footer from './components/Footer.jsx';
import StaysProvider from './context/StaysProvider.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <StaysProvider>
        <div className="container_app">
          <Header />
          <Routes>
            <Route path='https://patricknv23windbnb.netlify.app/' element={<StaysGrid />} />
            <Route path='https://patricknv23windbnb.netlify.app/stays' element={<StaysGrid />} />
            <Route path='https://patricknv23windbnb.netlify.app/stays/:location' element={<StaysGrid />} />
          </Routes>
          <Footer />
        </div>
      </StaysProvider>
    </BrowserRouter>

  )
}

export default App
